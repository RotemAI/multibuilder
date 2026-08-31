#!/bin/sh
# Prepare ~/.ssh, then exec the dashboard.
#
# ~/.ssh must be writable because OpenSSH records trusted hosts in
# ~/.ssh/known_hosts; keys supplied by the operator are mounted read-only at
# /mnt/ssh-keys and copied in, so the host's copies are never modified and
# their permissions can be corrected without touching the source.
set -eu

ssh_dir="${HOME}/.ssh"
mkdir -p "$ssh_dir"
chmod 700 "$ssh_dir"

if [ -d /mnt/ssh-keys ]; then
    for src in /mnt/ssh-keys/* /mnt/ssh-keys/.[!.]*; do
        [ -f "$src" ] || continue
        name="$(basename "$src")"
        case "$name" in
            .gitkeep|known_hosts.old) continue ;;
        esac
        cp -f "$src" "$ssh_dir/$name"
        # OpenSSH refuses to use a private key that is group- or world-readable.
        case "$name" in
            *.pub|known_hosts|config) chmod 644 "$ssh_dir/$name" ;;
            *) chmod 600 "$ssh_dir/$name" ;;
        esac
    done
fi

touch "$ssh_dir/known_hosts"
chmod 644 "$ssh_dir/known_hosts"

# Trust hosts listed in SSH_KNOWN_HOSTS (space-separated "host" or "host:port")
# so a deployment can pre-seed targets without disabling strict checking.
if [ -n "${SSH_KNOWN_HOSTS:-}" ]; then
    for entry in $SSH_KNOWN_HOSTS; do
        host="${entry%%:*}"
        port="${entry#*:}"
        [ "$port" = "$entry" ] && port=22
        ssh-keyscan -p "$port" "$host" >> "$ssh_dir/known_hosts" 2>/dev/null || \
            echo "warning: could not scan host key for $entry" >&2
    done
    sort -u "$ssh_dir/known_hosts" -o "$ssh_dir/known_hosts"
fi

exec "$@"
