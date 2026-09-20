#!/usr/bin/env bash
set -u
if sudo -n true 2>/dev/null; then SUDO=sudo; else SUDO=; fi
nginx_bin=$(command -v nginx 2>/dev/null || true)
if [ -z "$nginx_bin" ] && [ -x /usr/sbin/nginx ]; then nginx_bin=/usr/sbin/nginx; fi
[ -n "$nginx_bin" ] || exit 0
$SUDO "$nginx_bin" -T 2>&1 | awk '
  /^# configuration file / {file=$0; sub(/^# configuration file /,"",file); sub(/:$/,"",file)}
  /^[[:space:]]*(upstream|server_name|listen|location|proxy_pass|fastcgi_pass|root|alias)[[:space:]]/ {
    gsub(/https?:\/\/[^/@[:space:]]+@/, "https://REDACTED@")
    print file "\t" $0
  }'
