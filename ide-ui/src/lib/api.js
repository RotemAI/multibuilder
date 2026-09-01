// Every call is same-origin and session-scoped. The session and connection ids
// come from the server-rendered mount point, never from user input, so callers
// cannot aim these at another user's workspace.
const base = () => window.__IDE_BOOTSTRAP__ || {}

export function ideApi(path) {
  const { rootPath = '', session = '' } = base()
  return `${rootPath}/api/sessions/${encodeURIComponent(session)}/ide${path}`
}

async function request(path, options = {}) {
  const response = await fetch(ideApi(path), options)
  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    const error = new Error(data.error || 'Request failed')
    // Carry server hints (e.g. needs_host_key) so callers can offer a fix
    // instead of only showing the message.
    Object.assign(error, data)
    throw error
  }
  return data
}

const conn = (id, suffix) => `/ssh-connections/${encodeURIComponent(id)}${suffix}`

export const api = {
  // Agent replies land in the tmux pane, so the panel polls for them here
  // rather than only echoing what the user sent. The target session may
  // differ from the IDE's own, so this takes an explicit session name.
  chat: async (sessionName, limit = 80) => {
    const { rootPath = '' } = base()
    const url = `${rootPath}/api/sessions/${encodeURIComponent(sessionName)}/ide/chat?limit=${limit}`
    const response = await fetch(url)
    const data = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(data.error || 'Could not load chat')
    return data
  },

  // Folder picker for "Open Folder". Not session-scoped: it browses the
  // dashboard host itself, gated server-side by the caller's own role.
  browse: async (path = '') => {
    const { rootPath = '' } = base()
    const url = `${rootPath}/api/ide/browse?path=${encodeURIComponent(path)}`
    const response = await fetch(url)
    const data = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(data.error || 'Could not browse folders')
    return data
  },

  // Agent / model / effort for one session. These are session-level dashboard
  // routes, not IDE-scoped ones, so they bypass ideApi's /ide prefix.
  sessionAgent: async (name) => {
    const { rootPath = '' } = base()
    const response = await fetch(`${rootPath}/api/sessions/${encodeURIComponent(name)}/agent`)
    const data = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(data.error || 'Could not read agent settings')
    return data
  },

  setSessionAgent: async (name, agent) => {
    const { rootPath = '' } = base()
    const response = await fetch(`${rootPath}/api/sessions/${encodeURIComponent(name)}/agent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ agent, restart: true }),
    })
    const data = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(data.error || 'Could not switch agent')
    return data
  },

  setSessionModel: async (name, model) => {
    const { rootPath = '' } = base()
    const response = await fetch(`${rootPath}/api/sessions/${encodeURIComponent(name)}/model`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, restart: true }),
    })
    const data = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(data.error || 'Could not change model')
    return data
  },

  setSessionEffort: async (name, effort) => {
    const { rootPath = '' } = base()
    const response = await fetch(`${rootPath}/api/sessions/${encodeURIComponent(name)}/effort`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ effort, restart: true }),
    })
    const data = await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(data.error || 'Could not change effort')
    return data
  },

  hostKey: (id) => request(conn(id, '/host-key')),

  trustHost: (id) =>
    request(conn(id, '/host-key'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accept: true }),
    }),

  listConnections: () => request('/ssh-connections'),

  createConnection: (body) =>
    request('/ssh-connections', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),

  deleteConnection: (id) => request(conn(id, ''), { method: 'DELETE' }),

  connect: (id, password) =>
    request(conn(id, '/connect'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: password || '' }),
    }),

  // reconnect=1 lets the server revive a dead control master with the stored
  // credential instead of making the user click Connect.
  status: (id) => request(conn(id, '/status?reconnect=1')),

  listFiles: (id, path) => request(conn(id, `/files?path=${encodeURIComponent(path)}`)),

  searchFiles: (id, path, query) =>
    request(conn(id, `/files/search?path=${encodeURIComponent(path)}&query=${encodeURIComponent(query)}`)),

  readFile: (id, path) => request(conn(id, `/file?path=${encodeURIComponent(path)}`)),

  saveFile: (id, path, content) =>
    request(conn(id, '/file'), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path, content }),
    }),

  fs: (id, body) =>
    request(conn(id, '/fs'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),

  git: (id, body) =>
    request(conn(id, '/git'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),

  focusTerminal: (id) => request(conn(id, '/focus-terminal'), { method: 'POST' }),

  getWorkspace: (id) => request(conn(id, '/workspace')),

  saveWorkspace: (id, body) =>
    request(conn(id, '/workspace'), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
}
