# syntax=docker/dockerfile:1

# ── Stage 1: build the Svelte IDE bundle ────────────────────────────────────
# Done here so the runtime image needs no Node toolchain.
FROM node:22-bookworm-slim AS ide
WORKDIR /app/ide-ui
COPY ide-ui/package.json ide-ui/package-lock.json ./
RUN npm ci
COPY ide-ui/ ./
RUN npm run build


# ── Stage 2: runtime ────────────────────────────────────────────────────────
FROM python:3.12-slim-bookworm

# tmux and the OpenSSH *client* are hard runtime dependencies: sessions live in
# tmux, and the Remote IDE shells out to `ssh`. git is used by the IDE's git
# panel on the dashboard host side.
RUN apt-get update && apt-get install -y --no-install-recommends \
        tmux \
        openssh-client \
        git \
        procps \
        ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Run as a non-root user. The dashboard holds SSH credentials and spawns PTYs;
# there is no reason for any of that to be uid 0.
ARG APP_UID=1000
ARG APP_GID=1000
RUN groupadd -g "${APP_GID}" app \
    && useradd -m -u "${APP_UID}" -g "${APP_GID}" -s /bin/bash app

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY --chown=app:app *.py ./
COPY --chown=app:app --from=ide /app/static/ide/ ./static/ide/

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod 755 /usr/local/bin/entrypoint.sh

# State lives in $HOME/.tmux-dashboard; 0700 because it holds SSH ciphertext,
# the vault key, and per-user tokens.
RUN install -d -m 0700 -o app -g app /home/app/.tmux-dashboard \
    && install -d -m 0700 -o app -g app /home/app/.ssh

USER app
ENV PYTHONUNBUFFERED=1 \
    TMUX_DASH_PORT=8505 \
    HOME=/home/app

EXPOSE 8505

# Hits the login page rather than a bare TCP check, so a wedged app is caught.
# The root path serves the login page for anonymous callers; /login is
# POST-only, so probing it would report a healthy container as unhealthy.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD python3 -c "import os,urllib.request,sys; sys.exit(0 if urllib.request.urlopen('http://127.0.0.1:'+os.environ.get('TMUX_DASH_PORT','8505')+os.environ.get('TMUX_DASH_ROOT_PATH','/codex')+'/',timeout=4).status<500 else 1)"

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["python3", "app.py"]
