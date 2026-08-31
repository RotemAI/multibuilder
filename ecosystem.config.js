// pm2 process definition for multibuilder (hub.grabo.tools/multibuilder).
//
// app.py forks its own lifecycle controller and uvicorn workers, so pm2 must
// run exactly one process in fork mode — pm2 cluster mode would multiply the
// controller and corrupt the shared tmux/session state.
const fs = require('fs');
const path = require('path');

// The app reads config from env only; pm2 has no native .env support, so parse
// it here and hand it over as `env`.
function readEnv(file) {
  const out = {};
  if (!fs.existsSync(file)) return out;
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const s = line.trim();
    if (!s || s.startsWith('#')) continue;
    const i = s.indexOf('=');
    if (i === -1) continue;
    out[s.slice(0, i).trim()] = s.slice(i + 1).trim();
  }
  return out;
}

const root = __dirname;

module.exports = {
  apps: [{
    name: 'multibuilder',
    script: path.join(root, '.venv/bin/python'),
    args: [path.join(root, 'app.py')],
    cwd: root,
    interpreter: 'none',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '30s',
    restart_delay: 2000,
    kill_timeout: 30000,   // matches the controller's 20s graceful shutdown
    max_memory_restart: '2G',
    // Pin an explicit PATH. pm2 inherits the environment of whatever shell
    // started it — here a VS Code remote terminal, whose PATH carried a
    // versioned .vscode-server entry and no `codex`. Session creation shells
    // out to `codex` and `tmux` via shutil.which(), so an inherited PATH made
    // that fail with FileNotFoundError after a restart from a different shell.
    env: Object.assign(
      { PATH: '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' },
      readEnv(path.join(root, '.env')),
    ),
    out_file: path.join(root, 'logs/multibuilder.out.log'),
    error_file: path.join(root, 'logs/multibuilder.err.log'),
    merge_logs: true,
    time: true,
  }],
};
