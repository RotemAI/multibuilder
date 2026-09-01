import { api } from './api.js'

// One reactive store replaces the old 17-field mutable `_ide` object. Views
// derive from this; nothing writes to the DOM directly.
class IdeStore {
  connections = $state([])
  connectionId = $state('')
  connectionState = $state('idle') // idle | connecting | connected | reconnect | error
  statusText = $state('Ready')
  detailText = $state('No file open')

  path = $state('.')
  entries = $state([])
  expanded = $state({})
  treeChildren = $state({})
  filter = $state('')

  tabs = $state([])
  activeKey = $state('')

  gitOutput = $state('')
  // Kept separate from gitOutput: every git action returns the current
  // status, and the file list must survive a `diff` whose output is a patch.
  gitStatus = $state('')
  gitBranches = $state([])
  gitBranch = $state('')

  restoredKey = ''
  persistTimer = null

  get connection() {
    return this.connections.find((item) => item.id === this.connectionId) || null
  }

  get activeTab() {
    return this.tabs.find((tab) => tab.key === this.activeKey) || null
  }

  get visibleEntries() {
    const needle = this.filter.trim().toLowerCase()
    if (!needle) return this.entries
    return this.entries.filter((entry) => entry.name.toLowerCase().includes(needle))
  }

  get dirtyCount() {
    return this.tabs.filter((tab) => tab.dirty).length
  }

  /** Pending Git changes, for the Source Control badge in the activity bar. */
  get gitDirtyCount() {
    return this.gitStatus
      .split('\n')
      .filter((line) => line.trim() && !line.startsWith('##')).length
  }

  setStatus(status, detail) {
    this.statusText = status
    if (detail !== undefined) this.detailText = detail
  }

  async loadConnections() {
    try {
      const data = await api.listConnections()
      this.connections = data.connections || []
      if (!this.connectionId && this.connections.length) {
        this.connectionId = this.connections[0].id
      }
    } catch (error) {
      this.setStatus(error.message || 'Could not load connections')
    }
  }

  async refreshStatus() {
    if (!this.connectionId) return
    try {
      const data = await api.status(this.connectionId)
      if (data.connected) {
        this.connectionState = 'connected'
        this.setStatus(
          `Connected · ${this.connection?.label || 'SSH workspace'}`,
          `SSH terminal: ${data.window_name || 'open'}`,
        )
        await this.restoreWorkspace()
      } else {
        this.connectionState = 'reconnect'
        this.entries = []
        this.setStatus(
          `Reconnect required · ${this.connection?.label || 'SSH workspace'}`,
          this.connection?.has_password
            ? 'Auto-reconnect failed — select Connect to retry'
            : 'Select Connect to reopen SSH',
        )
      }
    } catch (error) {
      this.connectionState = 'error'
      this.setStatus(error.message || 'Could not check SSH connection')
    }
  }

  async connect(password) {
    if (!this.connectionId) return
    this.connectionState = 'connecting'
    this.setStatus('Connecting…')
    try {
      const data = await api.connect(this.connectionId, password)
      this.connectionState = 'connected'
      this.setStatus(
        `Connected · ${this.connection?.label || 'SSH workspace'}`,
        `SSH terminal: ${data.window_name || 'open'}`,
      )
      await this.restoreWorkspace()
    } catch (error) {
      this.connectionState = 'error'
      this.setStatus(error.message || 'Could not connect')
    }
  }

  async refreshFiles(requested) {
    if (!this.connectionId) return
    const target = requested || this.path || '.'
    try {
      const data = await api.listFiles(this.connectionId, target)
      this.path = data.path || target
      this.entries = data.entries || []
      this.remember()
    } catch (error) {
      this.setStatus(error.message || 'Could not list remote files')
    }
  }

  async toggleDirectory(path) {
    if (this.expanded[path]) {
      const next = { ...this.expanded }
      delete next[path]
      this.expanded = next
      return
    }
    this.expanded = { ...this.expanded, [path]: true }
    if (this.treeChildren[path]) return
    try {
      const data = await api.listFiles(this.connectionId, path)
      this.treeChildren = { ...this.treeChildren, [path]: data.entries || [] }
    } catch (error) {
      this.setStatus(error.message || 'Could not expand folder')
    }
  }

  async openFile(path) {
    if (!this.connectionId) return null
    const key = `${this.connectionId}|${path}`
    const existing = this.tabs.find((tab) => tab.key === key)
    if (existing) {
      this.activeKey = key
      return existing
    }
    try {
      const data = await api.readFile(this.connectionId, path)
      const tab = {
        key: `${this.connectionId}|${data.path}`,
        path: data.path,
        content: data.content || '',
        saved: data.content || '',
        dirty: false,
      }
      this.tabs = [...this.tabs, tab]
      this.activeKey = tab.key
      this.setStatus('Opened', tab.path)
      this.remember()
      return tab
    } catch (error) {
      this.setStatus(error.message || 'Could not open remote file')
      return null
    }
  }

  updateContent(key, content) {
    this.tabs = this.tabs.map((tab) =>
      tab.key === key ? { ...tab, content, dirty: content !== tab.saved } : tab,
    )
    this.remember()
  }

  closeTab(key) {
    const tab = this.tabs.find((item) => item.key === key)
    if (tab?.dirty && !confirm(`Discard unsaved changes to ${tab.path}?`)) return
    this.tabs = this.tabs.filter((item) => item.key !== key)
    if (this.activeKey === key) this.activeKey = this.tabs.at(-1)?.key || ''
    this.remember()
  }

  async saveActive() {
    const tab = this.activeTab
    if (!tab) return
    try {
      await api.saveFile(this.connectionId, tab.path, tab.content)
      this.tabs = this.tabs.map((item) =>
        item.key === tab.key ? { ...item, saved: item.content, dirty: false } : item,
      )
      this.setStatus(`Saved ${tab.path}`, tab.path)
      this.remember()
    } catch (error) {
      this.setStatus(error.message || 'Could not save file')
    }
  }

  // Server state is authoritative so a resume survives a browser change or a
  // dashboard restart; unsaved buffers come back as dirty tabs.
  async restoreWorkspace() {
    const key = `${this.connectionId}`
    if (!key) return
    let remote = null
    try {
      remote = await api.getWorkspace(this.connectionId)
    } catch {
      remote = null
    }
    await this.refreshFiles(remote?.last_directory || '.')
    if (this.restoredKey === key) return
    this.restoredKey = key
    const buffers = remote?.buffers || {}
    for (const path of (remote?.tabs || []).slice(0, 12)) {
      const tab = await this.openFile(path)
      if (tab && Object.prototype.hasOwnProperty.call(buffers, path)) {
        this.updateContent(tab.key, buffers[path])
      }
    }
    const active = this.tabs.find((tab) => tab.path === remote?.active_path)
    if (active) this.activeKey = active.key
  }

  // Debounced: this can carry unsaved buffers, so it must not fire per keystroke.
  remember() {
    if (this.persistTimer) clearTimeout(this.persistTimer)
    this.persistTimer = setTimeout(() => this.persist(), 1500)
  }

  async persist() {
    if (!this.connectionId) return
    const buffers = {}
    for (const tab of this.tabs) if (tab.dirty) buffers[tab.path] = tab.content
    try {
      await api.saveWorkspace(this.connectionId, {
        tabs: this.tabs.map((tab) => tab.path).slice(0, 50),
        active_path: this.activeTab?.path || '',
        last_directory: this.path || '.',
        buffers,
      })
    } catch {
      /* resume state is best-effort; never block the editor */
    }
  }

  async runGit(action, extra = {}) {
    try {
      const data = await api.git(this.connectionId, { action, path: this.path || '.', ...extra })
      this.gitOutput = data.output || data.status || ''
      this.gitStatus = data.status || ''
      this.gitBranches = data.branches || []
      this.gitBranch = data.current_branch || ''
      return data
    } catch (error) {
      this.gitOutput = error.message || 'Git command failed'
      return null
    }
  }
}

export const ide = new IdeStore()
