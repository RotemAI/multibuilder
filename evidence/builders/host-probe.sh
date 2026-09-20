#!/usr/bin/env bash
set -u

if sudo -n true 2>/dev/null; then
  SUDO=sudo
else
  SUDO=
fi

section() { printf '\n===== %s =====\n' "$1"; }

section identity
date -u '+%Y-%m-%dT%H:%M:%SZ'
hostname -f 2>/dev/null || hostname
printf 'kernel='; uname -r
printf 'os='; . /etc/os-release 2>/dev/null; printf '%s %s\n' "${ID:-unknown}" "${VERSION_ID:-unknown}"
printf 'uptime='; cut -d' ' -f1 /proc/uptime
printf 'nproc='; nproc
lscpu 2>/dev/null | awk -F: '/Model name|Socket.s.|Core.s. per socket|Thread.s. per core|Hypervisor vendor/ {gsub(/^[ \t]+/,"",$2); print $1 "=" $2}'
lspci 2>/dev/null | grep -Ei 'vga|3d|display|nvidia' || true

section pressure
uptime
free -b
swapon --show --bytes 2>/dev/null || true
vmstat -w 1 3 2>/dev/null || true

section filesystems
df -B1 -T -x tmpfs -x devtmpfs
lsblk -b -o NAME,TYPE,FSTYPE,SIZE,MOUNTPOINTS

section directory_sizes
$SUDO timeout 45 du -x -B1 -d1 /home /var/lib /var/www 2>/dev/null | sort -nr | head -80 || true
$SUDO timeout 45 du -x -B1 -d1 /home/nimrod_rotem 2>/dev/null | sort -nr | head -80 || true
$SUDO timeout 45 du -x -B1 -d1 /home/b2a 2>/dev/null | sort -nr | head -60 || true

section listening
$SUDO ss -H -lntup 2>/dev/null || ss -H -lntup 2>/dev/null || true
$SUDO lsof -nP -iTCP -sTCP:LISTEN 2>/dev/null | head -160 || true

section running_services
systemctl list-units --type=service --state=running --no-legend --no-pager 2>/dev/null || true
if command -v supervisorctl >/dev/null; then $SUDO supervisorctl status 2>/dev/null || true; fi

section service_processes
ps -eo user:24,pid,ppid,etimes,%cpu,%mem,rss,comm --sort=-rss | head -80
printf '\nagent_counts\n'
ps -eo comm= | awk '/^(claude|codex|tmux|node|python|python3)$/ {n[$1]++} END {for(k in n) print k,n[k]}' | sort

section tmux_sessions
for sock in /tmp/tmux-*/*; do
  [ -S "$sock" ] || continue
  printf 'socket=%s\n' "$sock"
  $SUDO tmux -S "$sock" list-sessions -F '#{session_name}\t#{session_windows}\t#{session_attached}\t#{session_activity}' 2>/dev/null || true
done

section containers
if command -v docker >/dev/null; then
  $SUDO docker ps --format '{{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}' 2>/dev/null || true
  printf 'docker_volumes\n'
  $SUDO docker volume ls --format '{{.Name}}' 2>/dev/null || true
fi
if command -v podman >/dev/null; then $SUDO podman ps --format '{{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}' 2>/dev/null || true; fi

section nginx_routes
if command -v nginx >/dev/null; then
  $SUDO nginx -T 2>&1 | awk '
    /^[[:space:]]*(upstream|server_name|listen|location|proxy_pass|fastcgi_pass|root|alias)[[:space:]]/ {
      gsub(/https?:\/\/[^/@[:space:]]+@/, "https://REDACTED@")
      print
    }' | head -700
fi
printf '\ncert_names\n'
$SUDO find /etc/letsencrypt/live -mindepth 1 -maxdepth 1 -type d -printf '%f\n' 2>/dev/null | sort || true

section schedules
systemctl list-timers --all --no-legend --no-pager 2>/dev/null | head -120 || true
for user in nimrod_rotem b2a root; do
  printf 'crontab_user=%s\n' "$user"
  $SUDO crontab -u "$user" -l 2>/dev/null \
    | sed -E 's/([A-Za-z_]*(token|key|secret|password|pass|auth)[A-Za-z_]*)=[^ ]+/\1=REDACTED/gI; s#https?://[^ ]+#URL_REDACTED#g' \
    | sed '/^[[:space:]]*#/d; /^[[:space:]]*$/d' \
    | head -120 || true
done
printf 'cron_dirs\n'
$SUDO find /etc/cron.d /etc/cron.daily /etc/cron.hourly /etc/cron.weekly -maxdepth 1 -type f -printf '%p\n' 2>/dev/null | sort || true

section datastores
for cmd in psql postgres sqlite3 redis-server mariadbd mysqld mongod; do
  command -v "$cmd" 2>/dev/null || true
done
if command -v psql >/dev/null && id postgres >/dev/null 2>&1; then
  $SUDO -u postgres psql -Atqc "select datname||E'\\t'||pg_database_size(datname) from pg_database order by pg_database_size(datname) desc" 2>/dev/null || true
fi
$SUDO timeout 25 find /home /var/lib -xdev \
  \( -path '*/node_modules' -o -path '*/.git' -o -path '*/.cache' -o -path '*/venv' -o -path '*/.venv' \) -prune -o \
  -type f \( -iname '*.db' -o -iname '*.sqlite' -o -iname '*.sqlite3' \) \
  -printf '%s\t%p\n' 2>/dev/null | sort -nr | head -160 || true

section network_and_mount_dependencies
findmnt -rn -o TARGET,SOURCE,FSTYPE,OPTIONS | head -100
$SUDO nft list ruleset 2>/dev/null | awk '/hook input|dport|saddr/ {print}' | head -160 || true
