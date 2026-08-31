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
  if (!response.ok) throw new Error(data.error || 'Request failed')
  return data
}

const conn = (id, suffix) => `/ssh-connections/${encodeURIComponent(id)}${suffix}`

export const api = {
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
