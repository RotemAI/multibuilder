#!/bin/sh
# Provision the test account, then hand off to sshd in the foreground.
set -eu

user="${SSH_USER:-devuser}"
password="${SSH_PASSWORD:-devpass}"

if ! id "$user" >/dev/null 2>&1; then
    useradd -m -s /bin/bash "$user"
fi
printf '%s:%s\n' "$user" "$password" | chpasswd

# The IDE's remote helpers need python3 and a workspace to browse.
workspace="/home/$user/workspace"
mkdir -p "$workspace/src"
printf 'print("hello from the remote workspace")\n' > "$workspace/src/main.py"
printf '# Remote workspace\n\nUsed by the Remote SSH IDE tests.\n' > "$workspace/README.md"
if [ ! -d "$workspace/.git" ]; then
    git -C "$workspace" init -q
    git -C "$workspace" config user.email test@example.com
    git -C "$workspace" config user.name "Test User"
    git -C "$workspace" add -A
    git -C "$workspace" commit -qm "initial commit"
fi
chown -R "$user:$user" "/home/$user"

ssh-keygen -A
exec /usr/sbin/sshd -D -e
