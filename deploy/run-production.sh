#!/bin/sh
set -eu

umask 077
set -a
. /etc/multibuilder.env
set +a

exec /home/nimrod_rotem/web-projects/Nimo/multiagent/.venv/bin/uvicorn \
  multibuilder.main:app \
  --host 127.0.0.1 \
  --port 8510 \
  --workers 1 \
  --proxy-headers \
  --forwarded-allow-ips 127.0.0.1 \
  --no-server-header
