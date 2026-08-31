.PHONY: test test-fast coverage check lint lint-fix run run-dev backup backup-data restore-check install ide ide-dev docker-build docker-up docker-down docker-logs test-ssh help

PORT ?= 8501

help:
	@echo "tmux Dashboard — common development commands"
	@echo ""
	@echo "  make test          Run full test suite (verbose)"
	@echo "  make test-fast     Run tests without coverage (faster)"
	@echo "  make coverage      Run tests and open HTML coverage report"
	@echo "  make check         Run lint then full test suite"
	@echo "  make lint          Check code with ruff"
	@echo "  make lint-fix      Auto-fix ruff violations"
	@echo "  make run           Start server (requires TMUX_DASH_PASS)"
	@echo "  make run-dev       Start server without auth (dev only)"
	@echo "  make backup        Create timestamped backup of app.py"
	@echo "  make backup-data   Backup persistent data in ~/.tmux-dashboard/"
	@echo "  make restore-check Verify persistent data files are readable JSON"
	@echo "  make install       Install Python dependencies"
	@echo "  make ide           Build the Svelte Remote IDE bundle"
	@echo "  make ide-dev       Rebuild the IDE bundle on change"
	@echo ""
	@echo "  make docker-build  Build the container image"
	@echo "  make docker-up     Start the stack (needs .env)"
	@echo "  make docker-down   Stop the stack"
	@echo "  make docker-logs   Follow dashboard logs"
	@echo "  make test-ssh      Start a disposable sshd for Remote IDE testing"
	@echo ""
	@echo "Environment variables:"
	@echo "  PORT               Server port (default: 8501)"
	@echo "  TMUX_DASH_PASS     Login password"
	@echo "  TMUX_DASH_SECRET   HMAC secret for auth tokens"
	@echo "  OPENAI_API_KEY     OpenAI key for LLM summaries"

test:
	python3 -m pytest test_app.py test_api.py -v

test-fast:
	python3 -m pytest test_app.py test_api.py -q

coverage:
	python3 -m pytest test_app.py test_api.py --cov=app --cov-report=term-missing --cov-report=html -q
	@echo "HTML report written to htmlcov/index.html"

check: lint test

lint:
	python3 -m ruff check app.py test_app.py test_api.py

lint-fix:
	python3 -m ruff check --fix app.py test_app.py test_api.py

run:
	@if [ -z "$(TMUX_DASH_PASS)" ]; then \
		echo "Warning: TMUX_DASH_PASS is not set — auth is DISABLED"; \
	fi
	PORT=$(PORT) python3 app.py

run-dev:
	@echo "Starting in dev mode — auth disabled"
	PORT=$(PORT) python3 app.py

backup:
	cp app.py app.py.bak-$$(date +%Y%m%d-%H%M%S)
	@echo "Backed up to app.py.bak-$$(date +%Y%m%d-%H%M%S)"

backup-data:
	@DATA_DIR=$$HOME/.tmux-dashboard; \
	DEST=$$HOME/.tmux-dashboard-backup-$$(date +%Y%m%d-%H%M%S); \
	if [ -d "$$DATA_DIR" ]; then \
		cp -r "$$DATA_DIR" "$$DEST"; \
		echo "Data backed up to $$DEST"; \
	else \
		echo "No data directory found at $$DATA_DIR"; \
	fi

restore-check:
	@DATA_DIR=$$HOME/.tmux-dashboard; \
	if [ ! -d "$$DATA_DIR" ]; then \
		echo "No data directory at $$DATA_DIR"; exit 0; \
	fi; \
	for f in $$DATA_DIR/*.json; do \
		[ -f "$$f" ] || continue; \
		python3 -c "import json,sys; json.load(open('$$f')); print('OK: $$f')" \
			|| echo "CORRUPT: $$f"; \
	done

install:
	pip3 install -r requirements.txt

# The Remote IDE is a Svelte app compiled into static/ide/. Deploying a
# change to it needs this build step before restarting the service.
ide:
	cd ide-ui && npm ci && npm run build

ide-dev:
	cd ide-ui && npm run dev

# ── Docker ──────────────────────────────────────────────────────────────────
docker-build:
	docker compose build

docker-up:
	@test -f .env || { echo "Create .env first: cp .env.example .env"; exit 1; }
	docker compose up -d
	@echo "Dashboard on http://127.0.0.1:$${TMUX_DASH_PORT:-8501}$${TMUX_DASH_ROOT_PATH:-/codex}/"

docker-down:
	docker compose down

docker-logs:
	docker compose logs -f dashboard

# Disposable SSH target for exercising the Remote IDE against a real sshd.
test-ssh:
	docker compose --profile testing up -d sshd
	@echo "sshd on 127.0.0.1:$${TEST_SSH_PORT:-2222} as $${TEST_SSH_USER:-devuser}/$${TEST_SSH_PASSWORD:-devpass}"
	@echo "Workspace root: /home/$${TEST_SSH_USER:-devuser}/workspace"
