<script>
  import { onMount } from 'svelte'
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import Explorer from './Explorer.svelte'
  import GitPanel from './GitPanel.svelte'
  import Editor from './Editor.svelte'
  import Tabs from './Tabs.svelte'
  import Chat from './Chat.svelte'
  import QuickOpen from './QuickOpen.svelte'
  import Terminal from './Terminal.svelte'
  import OpenFolderDialog from './OpenFolderDialog.svelte'
  import SearchPanel from './SearchPanel.svelte'
  import HostKeyDialog from './HostKeyDialog.svelte'
  import Resizer from './Resizer.svelte'
  import {
    Files, GitBranch, MessageSquare, Server, Plus, Trash2, SquareTerminal,
    ExternalLink, FolderOpen, FileCode2, X, PanelBottom, Circle, CircleDot,
    CircleCheck, CircleAlert, Search, MonitorSmartphone, Settings, CircleUser,
    Ellipsis, PanelLeft, ChevronDown, Loader, Settings2,
  } from 'lucide-svelte'

  let { sessions = [], session = '', rootPath = '' } = $props()

  // The agent panel's own session list and selection. Kept here because the
  // picker lives in the panel header; a newly created session is appended
  // without a page reload so it can be used immediately.
  let chatSessions = $state([...sessions])
  let chatTarget = $state(session || sessions[0] || '')
  let creatingSession = $state(false)

  // Editing an existing connection's settings.
  let showSettings = $state(false)
  let savingSettings = $state(false)
  let settingsForm = $state({
    label: '', host: '', username: '', port: 22,
    identity_file: '', password: '', private_key: '', workspace_root: '',
  })

  /** Open the settings form from anywhere: reveal the panel that holds it. */
  function showConnectionSettings() {
    if (!ide.connection) return
    view = 'remote'
    sidebarOpen = true
    if (!showSettings) openConnectionSettings()
  }

  function openConnectionSettings() {
    const c = ide.connection
    if (!c) return
    settingsForm = {
      label: c.label || '',
      host: c.host || '',
      username: c.username || '',
      port: c.port || 22,
      identity_file: c.identity_file || '',
      // Never prefilled: stored secrets are not sent to the browser, and a
      // blank field means "keep it".
      password: '',
      private_key: '',
      workspace_root: c.workspace_root || '',
    }
    showSettings = true
  }

  async function saveConnectionSettings() {
    if (!ide.connection || savingSettings) return
    savingSettings = true
    try {
      const body = { ...settingsForm, port: Number(settingsForm.port) || 22 }
      if (!body.password) delete body.password
      if (!body.private_key) delete body.private_key
      await api.updateConnection(ide.connection.id, body)
      await ide.loadConnections?.()
      // Close first: the reconnect can take seconds, and leaving the dialog up
      // while it runs reads as "nothing happened".
      showSettings = false
      // Saving settings is only ever done to make the connection work, so
      // apply them: the old flow saved and left the same stale error on screen
      // until the user found Connect for themselves.
      ide.setStatus('Settings saved — reconnecting…')
      ide.connectionError = ''
      await ide.connect(settingsForm.password || '')
    } catch (error) {
      ide.setStatus(error.message || 'Could not save connection settings')
    } finally {
      savingSettings = false
    }
  }

  async function newAgentSession() {
    if (creatingSession) return
    creatingSession = true
    try {
      // Name it after the workspace so the list stays readable, and keep it
      // unique — the API rejects a duplicate name outright.
      const stem = (ide.connection?.label || session || 'agent')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 20) || 'agent'
      let name = stem
      for (let n = 2; chatSessions.includes(name); n += 1) name = `${stem}-${n}`
      const response = await fetch(`${rootPath}/api/sessions/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, agent: 'claude' }),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'Could not create session')
      const created = data.session || data.name || name
      if (!chatSessions.includes(created)) chatSessions = [...chatSessions, created]
      chatTarget = created
      ide.setStatus(`Agent session "${created}" created`)
    } catch (error) {
      ide.setStatus(error.message || 'Could not create agent session')
    } finally {
      creatingSession = false
    }
  }

  let view = $state('files')          // files | git | remote
  // Chat lives in its own right-hand pane (like VS Code's secondary side bar)
  // rather than replacing the Explorer, so you can read files while asking.
  function storedFlag(key, fallback) {
    try {
      const raw = localStorage.getItem(`ide.show.${key}`)
      return raw === null ? fallback : raw === '1'
    } catch {
      return fallback
    }
  }
  let showChat = $state(storedFlag('chat', true))

  // Pane sizes are per-viewer chrome, so they live in localStorage rather than
  // server state. Reads are wrapped: a private window can throw on access.
  const SIZE_DEFAULTS = { sidebar: 240, chat: 320, panel: 240 }
  function storedSize(key) {
    try {
      const raw = localStorage.getItem(`ide.size.${key}`)
      const value = Number(raw)
      return Number.isFinite(value) && value > 0 ? value : SIZE_DEFAULTS[key]
    } catch {
      return SIZE_DEFAULTS[key]
    }
  }
  let sidebarWidth = $state(storedSize('sidebar'))
  let chatWidth = $state(storedSize('chat'))
  let panelHeight = $state(storedSize('panel'))
  $effect(() => {
    try {
      localStorage.setItem('ide.size.sidebar', String(sidebarWidth))
      localStorage.setItem('ide.size.chat', String(chatWidth))
      localStorage.setItem('ide.size.panel', String(panelHeight))
      localStorage.setItem('ide.show.terminal', showTerminal ? '1' : '0')
      localStorage.setItem('ide.show.chat', showChat ? '1' : '0')
      localStorage.setItem('ide.show.sidebar', sidebarOpen ? '1' : '0')
    } catch {
      /* storage unavailable — layout just does not persist */
    }
  })
  let sidebarOpen = $state(storedFlag('sidebar', true))
  let quickOpen = $state(false)
  let showTerminal = $state(storedFlag('terminal', false))

  // Terminal tabs. The id IS the server-side terminal index, and it never
  // changes for the life of a tab.
  //
  // Deliberately not the array position: closing a middle tab would shift every
  // later tab down one, silently re-pointing them at different tmux windows —
  // a tab would keep its title and scrollback while attaching to someone else's
  // shell. A freed index is reused only once no tab holds it.
  const MAX_TERMINALS = 8
  let terminals = $state([0])
  let activeTerminal = $state(0)

  function addTerminal() {
    if (terminals.length >= MAX_TERMINALS) return
    let index = 0
    while (terminals.includes(index)) index += 1
    if (index >= MAX_TERMINALS) return
    terminals = [...terminals, index].sort((a, b) => a - b)
    activeTerminal = index
  }

  /** Close a terminal for real: kill its tmux window, not just this view.
   *
   * Dropping the tab alone would leave the remote shell running with whatever
   * was in it, and the window would reappear on the next reload because the
   * tab list is restored from tmux.
   */
  async function closeTerminal(index) {
    const position = terminals.indexOf(index)
    const remaining = terminals.filter((entry) => entry !== index)
    // Update immediately so the tab does not linger while the request runs.
    terminals = remaining.length ? remaining : [0]
    if (activeTerminal === index) {
      activeTerminal = terminals[Math.min(position, terminals.length - 1)]
    }
    try {
      await api.closeTerminal(ide.connectionId, index)
    } catch (error) {
      ide.setStatus(error.message || 'Could not close terminal')
    }
  }

  // Restore the tab bar from tmux whenever the workspace connects. Browser
  // state alone drifts: a window killed elsewhere, or a dashboard restart,
  // would leave tabs pointing at shells that no longer exist.
  let terminalsLoadedFor = $state('')
  $effect(() => {
    const connection = ide.connectionId
    const state = ide.connectionState
    if (!connection || state !== 'connected') return
    const key = `${connection}|${state}`
    if (terminalsLoadedFor === key) return
    terminalsLoadedFor = key
    terminals = [0]
    activeTerminal = 0
    api
      .listTerminals(connection)
      .then((data) => {
        const live = (data?.terminals || []).filter((n) => Number.isInteger(n))
        if (live.length) {
          terminals = live
          if (!live.includes(activeTerminal)) activeTerminal = live[0]
        }
      })
      .catch(() => {
        /* keep the default single tab; the socket will create the window */
      })
  })
  // Once opened, the panel stays in the DOM (hidden when toggled off) so the
  // terminal keeps its buffer and socket across toggles.
  let terminalMounted = $state(false)
  $effect(() => {
    if (showTerminal) terminalMounted = true
  })
  let showConnectionForm = $state(false)
  let showOpenFolder = $state(false)
  let password = $state('')
  let form = $state({
    kind: 'local', label: '', host: '', username: '', port: 22,
    auth_mode: 'agent', identity_file: '', password: '', private_key: '',
    workspace_root: '', max_file_bytes: 1000000,
  })

  const STATE_META = {
    idle: { icon: Circle, label: 'Not connected' },
    connecting: { icon: CircleDot, label: 'Connecting…' },
    connected: { icon: CircleCheck, label: 'Connected' },
    reconnect: { icon: CircleAlert, label: 'Reconnect required' },
    error: { icon: CircleAlert, label: 'Error' },
  }
  const StateIcon = $derived(STATE_META[ide.connectionState].icon)
  const isLocal = $derived(ide.connection?.kind === 'local')

  // VS Code's own activity bar order and iconography. `badge` mirrors the blue
  // count VS Code puts on Source Control when there are pending changes.
  const ACTIVITY = [
    { id: 'files', icon: Files, label: 'Explorer', keys: 'Ctrl+Shift+E' },
    { id: 'search', icon: Search, label: 'Search', keys: 'Ctrl+Shift+F' },
    { id: 'git', icon: GitBranch, label: 'Source Control', keys: 'Ctrl+Shift+G' },
    { id: 'remote', icon: MonitorSmartphone, label: 'Remote Explorer', keys: '' },
  ]

  onMount(async () => {
    await ide.loadConnections()
    if (ide.connectionId) await ide.refreshStatus()
  })

  function pickView(id) {
    // Clicking the active icon collapses the side bar, exactly like VS Code.
    if (view === id && sidebarOpen) sidebarOpen = false
    else { view = id; sidebarOpen = true }
  }

  async function onConnectionChange(event) {
    ide.connectionId = event.currentTarget.value
    ide.resetWorkspaceView()
    await ide.refreshStatus()
  }

  /** Open a folder picked from the browser as a local workspace, then connect. */
  async function openFolder(path) {
    showOpenFolder = false
    try {
      const label = path.split('/').filter(Boolean).pop() || path
      const current = ide.connection
      // Opening a folder while connected over SSH must stay on THAT host. This
      // used to hardcode kind:'local', so picking a remote folder silently made
      // a LOCAL workspace pointing at a path on the wrong machine.
      //
      // A remote pick re-roots the existing connection rather than cloning it:
      // stored keys and passwords are sealed with the connection id as GCM AAD,
      // so a copy under a new id could not decrypt them.
      if (current && current.kind !== 'local') {
        await api.setWorkspaceRoot(current.id, path, label)
        await ide.loadConnections()
        ide.resetWorkspaceView()
        await ide.refreshFiles('.')
        ide.setStatus(`Opened ${path} on ${current.username}@${current.host}`)
        view = 'files'
        sidebarOpen = true
        return
      }
      if (current && current.kind === 'local') {
        // Re-root rather than creating a connection per folder, which left a
        // growing pile of near-identical local workspaces in the dropdown.
        await api.setWorkspaceRoot(current.id, path, label)
        await ide.loadConnections()
        ide.resetWorkspaceView()
        await ide.refreshFiles('.')
        ide.setStatus(`Opened ${path}`)
        view = 'files'
        sidebarOpen = true
        return
      }
      const data = await api.createConnection({
        kind: 'local', label, workspace_root: path, max_file_bytes: 1000000,
      })
      await ide.loadConnections()
      ide.connectionId = data.connection.id
      ide.resetWorkspaceView()
      await ide.connect('')
      view = 'files'
      sidebarOpen = true
    } catch (error) {
      ide.setStatus(error.message || 'Could not open folder')
    }
  }

  async function createConnection(event) {
    event.preventDefault()
    try {
      const data = await api.createConnection({ ...form, port: Number(form.port) })
      showConnectionForm = false
      form = { ...form, label: '', host: '', username: '', password: '', private_key: '' }
      await ide.loadConnections()
      ide.connectionId = data.connection.id
      await ide.refreshStatus()
    } catch (error) {
      ide.setStatus(error.message || 'Could not create connection')
    }
  }

  async function removeConnection() {
    const current = ide.connection
    if (!current) return
    const what = current.kind === 'local' ? 'workspace' : 'connection'
    if (!confirm(`Remove ${what} "${current.label}"? Saved tabs are cleared; files are untouched.`)) return
    try {
      await api.deleteConnection(current.id)
      ide.connectionId = ''
      ide.resetWorkspaceView()
      await ide.loadConnections()
    } catch (error) {
      ide.setStatus(error.message || 'Could not delete')
    }
  }

  async function focusTerminal() {
    try {
      const data = await api.focusTerminal(ide.connectionId)
      ide.setStatus(`Focused ${data.window_name}`, 'tmux window selected')
    } catch (error) {
      ide.setStatus(error.message || 'Could not focus terminal')
    }
  }

  function onKeydown(event) {
    const mod = event.ctrlKey || event.metaKey
    const key = event.key.toLowerCase()
    const inField =
      event.target?.matches?.('input, textarea, select') &&
      !event.target.closest?.('.monaco-editor')

    if (mod && key === 's') {
      event.preventDefault()
      ide.saveActive()
    } else if (mod && key === 'p' && !inField) {
      event.preventDefault()
      if (ide.connectionId) quickOpen = true
    } else if (mod && event.shiftKey && key === 'o') {
      event.preventDefault()
      showOpenFolder = true
    } else if (mod && event.shiftKey && ['e', 'f', 'g'].includes(key)) {
      // VS Code's view shortcuts: Explorer / Search / Source Control.
      event.preventDefault()
      view = { e: 'files', f: 'search', g: 'git' }[key]
      sidebarOpen = true
    } else if (mod && key === 'b' && !inField) {
      event.preventDefault()
      sidebarOpen = !sidebarOpen
    } else if (mod && key === '`') {
      event.preventDefault()
      if (ide.connectionState === 'connected') showTerminal = !showTerminal
    } else if (event.key === 'Escape' && quickOpen) {
      event.preventDefault()
      quickOpen = false
    }
  }
</script>

<svelte:window onkeydown={onKeydown} />

<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg">
  <!-- Title bar -->
  <header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs">
    <FileCode2 size={15} class="shrink-0 text-vs-blue" />
    <button
      class="rounded-sm px-2 py-0.5 hover:bg-vs-hover"
      onclick={() => (showOpenFolder = true)}
      title="Open a folder on this server (Ctrl+Shift+O)"
    >
      Open Folder…
    </button>
    <button
      class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40"
      onclick={() => (quickOpen = true)}
      disabled={!ide.connectionId}
      title="Open a file (Ctrl+P)"
    >
      Open File…
    </button>
    <!-- The panel is easy to lose once hidden, so it gets a visible toggle here
         rather than living only on the status bar. -->
    <button
      class="flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40"
      class:text-vs-bright={showTerminal}
      onclick={() => (showTerminal = !showTerminal)}
      disabled={ide.connectionState !== 'connected'}
      title={ide.connectionState === 'connected'
        ? 'Toggle terminal (Ctrl+`)'
        : 'Open a workspace to use the terminal'}
    >
      <SquareTerminal size={13} /> Terminal
    </button>
    <span class="mx-auto truncate text-vs-muted" title={ide.connection?.workspace_root}>
      {ide.connection ? `${ide.connection.label} — Multibuilder IDE` : 'Multibuilder IDE'}
    </span>
    <!-- The reason is on the badge itself (hover) AND spelled out below, so a
         failure is debuggable without opening the server log. -->
    <span
      class="flex items-center gap-1 {ide.connectionState === 'connected' ? 'text-vs-green' : ide.connectionState === 'connecting' ? 'text-vs-yellow' : ide.connectionState === 'idle' ? 'text-vs-muted' : 'text-vs-red'}"
      title={ide.connectionError || STATE_META[ide.connectionState].label}
    >
      <StateIcon size={12} />
      {STATE_META[ide.connectionState].label}
    </span>
  </header>

  {#if ide.connectionError && ide.connectionState !== 'connected'}
    <div class="flex shrink-0 items-start gap-2 border-b border-vs-red/40 bg-vs-red/10 px-3 py-1.5 text-[11px] text-vs-red">
      <CircleAlert size={12} class="mt-[1px] shrink-0" />
      <span class="min-w-0 flex-1 break-words select-text">{ide.connectionError}</span>
      <button
        class="shrink-0 rounded-sm px-1.5 py-0.5 hover:bg-vs-red/20"
        title="Copy this error"
        onclick={() => navigator.clipboard?.writeText(ide.connectionError).catch(() => {})}
      >Copy</button>
      <button class="shrink-0 rounded-sm px-1 hover:bg-vs-red/20" title="Dismiss" aria-label="Dismiss error"
        onclick={() => (ide.connectionError = '')}><X size={12} /></button>
    </div>
  {/if}

  <div class="flex min-h-0 flex-1">
    <!-- Activity bar -->
    <nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity">
      {#each ACTIVITY as item (item.id)}
        <button
          class="relative flex h-12 w-12 items-center justify-center {view === item.id && sidebarOpen ? 'text-vs-bright' : 'text-vs-muted hover:text-vs-fg'}"
          title={item.keys ? `${item.label} (${item.keys})` : item.label}
          aria-label={item.label}
          onclick={() => pickView(item.id)}
        >
          {#if view === item.id && sidebarOpen}
            <span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>
          {/if}
          <item.icon size={24} strokeWidth={1.4} />
          {#if item.id === 'git' && ide.gitDirtyCount}
            <!-- VS Code's pending-changes badge. -->
            <span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white">
              {ide.gitDirtyCount}
            </span>
          {/if}
        </button>
      {/each}

      <!-- Account and settings sit at the bottom of VS Code's activity bar. -->
      <div class="mt-auto flex flex-col items-center pb-1">
        <button
          class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg"
          title="Account — signed in to the dashboard" aria-label="Account"
          onclick={() => ide.setStatus('Signed in to the Multibuilder dashboard')}
        >
          <CircleUser size={24} strokeWidth={1.4} />
        </button>
        <button
          class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg"
          title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"
          onclick={() => (sidebarOpen = !sidebarOpen)}
        >
          <PanelLeft size={24} strokeWidth={1.4} />
        </button>
      </div>
    </nav>

    <!-- Side bar -->
    {#if sidebarOpen}
      <aside
        class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"
        style="width: {sidebarWidth}px"
      >
        {#if view === 'files'}
          <Explorer />
        {:else if view === 'search'}
          <SearchPanel />
        {:else if view === 'git'}
          <GitPanel />
        {:else}
          <!-- Workspaces: pick, add, connect or remove -->
          <div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div>
          <div class="flex flex-col gap-2 px-3 pt-1">
            <select
              class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent"
              value={ide.connectionId}
              onchange={onConnectionChange}
              aria-label="Workspace"
            >
              <option value="">— select workspace —</option>
              {#each ide.connections as item (item.id)}
                <option value={item.id}>{item.kind === 'local' ? '🖿 ' : '⇅ '}{item.label}</option>
              {/each}
            </select>

            <div class="flex gap-1">
              <button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"
                onclick={() => (showOpenFolder = true)}>
                <FolderOpen size={13} /> Open Folder
              </button>
              <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover"
                title="Add a workspace or SSH connection" aria-label="Add workspace"
                onclick={() => (showConnectionForm = !showConnectionForm)}>
                <Plus size={13} />
              </button>
              {#if ide.connection}
                <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover"
                  title="Connection settings" aria-label="Connection settings"
                  onclick={openConnectionSettings}>
                  <Settings2 size={13} />
                </button>
                <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red"
                  title="Remove workspace" aria-label="Remove workspace" onclick={removeConnection}>
                  <Trash2 size={13} />
                </button>
              {/if}
            </div>

            {#if ide.connection && ide.connectionState !== 'connected'}
              {#if !isLocal && !ide.connection.has_password}
                <input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent"
                  type="password" placeholder="Password (optional)" bind:value={password} autocomplete="new-password" />
              {/if}
              <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"
                onclick={() => ide.connect(password)}>
                {isLocal ? 'Open workspace' : 'Connect'}
              </button>
              {#if !isLocal}
                <button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover"
                  title="Show this host's key fingerprint and trust it"
                  onclick={() => (ide.needsHostKey = true)}>
                  Verify host key…
                </button>
              {/if}
            {/if}

            {#if ide.connection}
              <p class="mt-1 font-mono text-[11px] break-all text-vs-muted">{ide.connection.workspace_root}</p>
            {/if}
          </div>

          {#if showConnectionForm}
            <form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2" onsubmit={createConnection}>
              <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" bind:value={form.kind}>
                <option value="local">This server (local folder)</option>
                <option value="ssh">Remote host over SSH</option>
              </select>
              <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label" bind:value={form.label} />
              {#if form.kind === 'ssh'}
                <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" bind:value={form.host} required />
                <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" bind:value={form.username} required />
                <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" bind:value={form.port} min="1" max="65535" />
                <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" bind:value={form.auth_mode}>
                  <option value="agent">SSH agent</option>
                  <option value="key">Existing key</option>
                  <option value="password">Password (saved, encrypted)</option>
                </select>
                {#if form.auth_mode === 'key'}
                  <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519" bind:value={form.identity_file} />
                  <textarea
                    class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent"
                    rows="4"
                    placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)"
                    spellcheck="false"
                    bind:value={form.private_key}
                  ></textarea>
                {/if}
                {#if form.auth_mode === 'password'}
                  <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" bind:value={form.password} autocomplete="new-password" />
                {/if}
              {/if}
              <input
                class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"
                placeholder={form.kind === 'local' ? '/var/www/app' : 'Workspace root'}
                bind:value={form.workspace_root}
                required={form.kind === 'local'}
              />
              <div class="flex gap-1 pb-2">
                <button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button>
                <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button" onclick={() => (showConnectionForm = false)}>Cancel</button>
              </div>
            </form>
          {/if}
        {/if}
      </aside>
      <Resizer
        bind:size={sidebarWidth}
        side="right"
        min={170}
        max={620}
        onreset={() => (sidebarWidth = SIZE_DEFAULTS.sidebar)}
      />
    {/if}

    <!-- Editor area -->
    <section class="flex min-h-0 min-w-0 flex-1 flex-col">
      {#if !ide.connectionId}
        <!-- Welcome screen, shown until a folder is open. -->
        <div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
          <FileCode2 size={64} strokeWidth={1} class="text-vs-line" />
          <div>
            <h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1>
            <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p>
          </div>
          <div class="flex flex-col gap-2 text-sm">
            <button class="flex items-center gap-2 text-vs-blue hover:underline" onclick={() => (showOpenFolder = true)}>
              <FolderOpen size={16} /> Open Folder…
              <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd>
            </button>
            <button class="flex items-center gap-2 text-vs-blue hover:underline" onclick={() => { view = 'remote'; sidebarOpen = true; showConnectionForm = true }}>
              <Server size={16} /> Connect to a host over SSH…
            </button>
          </div>
        </div>
      {:else}
        <Tabs />
        <div class="min-h-0 flex-1"><Editor /></div>
        <!-- The panel stays MOUNTED once opened and is only hidden, so closing
             it keeps the xterm buffer, scrollback and live socket. Destroying
             it lost the scrollback even though tmux kept the shell running. -->
        {#if terminalMounted && ide.connectionState === 'connected'}
          {#if showTerminal}
            <Resizer
              bind:size={panelHeight}
              side="top"
              min={120}
              max={640}
              onreset={() => (panelHeight = SIZE_DEFAULTS.panel)}
            />
          {/if}
          <div
            class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"
            style="height: {panelHeight}px"
            hidden={!showTerminal}
          >
            <div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]">
              <SquareTerminal size={13} class="mx-1 shrink-0" />
              <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto">
                {#each terminals as index (index)}
                  <span
                    class="group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           {index === activeTerminal ? 'bg-vs-hover text-vs-fg' : 'text-vs-muted hover:text-vs-fg'}"
                  >
                    <button class="max-w-[140px] truncate" onclick={() => (activeTerminal = index)}>
                      {index === 0 ? (ide.connection?.label || 'Terminal') : `Terminal ${index + 1}`}
                    </button>
                    {#if terminals.length > 1}
                      <button
                        class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line"
                        title="Close terminal — ends the shell"
                        aria-label="Close terminal {index + 1}"
                        onclick={() => closeTerminal(index)}><X size={11} /></button>
                    {/if}
                  </span>
                {/each}
              </div>
              <button
                class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40"
                title="New terminal in this workspace" aria-label="New terminal"
                disabled={terminals.length >= MAX_TERMINALS}
                onclick={addTerminal}><Plus size={14} /></button>
              <!-- Hide is not close: the tmux windows and everything running in
                   them keep going, and the tabs come back exactly as they were. -->
              <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover"
                title="Hide terminals (Ctrl+`) — sessions keep running"
                aria-label="Hide all terminals"
                onclick={() => (showTerminal = false)}><ChevronDown size={15} /></button>
              <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red"
                title="Close this terminal — ends the shell"
                aria-label="Close this terminal"
                onclick={() => closeTerminal(activeTerminal)}><Trash2 size={13} /></button>
            </div>
            <div class="relative min-h-0 flex-1">
              {#key ide.connectionId}
                <!-- Every terminal stays mounted: unmounting would drop its
                     WebSocket and clear the xterm buffer, so switching tabs
                     would lose scrollback. Only the active one is visible. -->
                {#each terminals as index (index)}
                  <div class="absolute inset-0" hidden={index !== activeTerminal}>
                    <Terminal {rootPath} {session} {index} />
                  </div>
                {/each}
              {/key}
            </div>
          </div>
        {/if}
      {/if}
    </section>

    <!-- Secondary side bar: AI chat -->
    {#if showChat}
      <Resizer
        bind:size={chatWidth}
        side="left"
        min={260}
        max={760}
        onreset={() => (chatWidth = SIZE_DEFAULTS.chat)}
      />
      <aside
        class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"
        style="width: {chatWidth}px"
      >
        <div class="flex items-center gap-1.5 border-b border-vs-border px-3 py-1.5">
          <MessageSquare size={13} class="shrink-0" />
          <span class="shrink-0 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span>
          <!-- Session picker sits with the close button rather than in a second
               header of its own. Each session keeps its own conversation, so
               this is also what switches which history is shown. -->
          <select
            class="ml-auto min-w-0 flex-1 truncate rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5
                   text-[11px] text-vs-fg outline-none focus:border-vs-accent"
            bind:value={chatTarget}
            title="Agent session — each has its own history"
          >
            {#each chatSessions as name (name)}
              <option value={name}>{name}</option>
            {/each}
          </select>
          <button
            class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40"
            title="New agent session" aria-label="New agent session"
            disabled={creatingSession}
            onclick={newAgentSession}
          >
            {#if creatingSession}<Loader size={13} class="animate-spin" />{:else}<Plus size={14} />{/if}
          </button>
          <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide AI Agent" aria-label="Hide AI Agent"
            onclick={() => (showChat = false)}><X size={14} /></button>
        </div>
        <div class="min-h-0 flex-1">
          <Chat sessions={chatSessions} {session} {rootPath} bind:target={chatTarget} />
        </div>
      </aside>
    {/if}
  </div>

  <!-- Status bar -->
  <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white">
    {#if ide.connection}
      <!-- Clicking the connection opens its settings, VS Code's remote-indicator
           pattern. The gear in the Workspaces panel is only visible on that
           view, so this is the way to reach it from the editor or terminal. -->
      <button
        class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20"
        title="{ide.connection.workspace_root} — click for connection settings"
        onclick={showConnectionSettings}
      >
        {#if isLocal}<FolderOpen size={12} />{:else}<Server size={12} />{/if}
        {ide.connection.label}
        <Settings2 size={11} class="opacity-70" />
      </button>
    {/if}
    {#if ide.gitBranch}
      <span class="flex items-center gap-1"><GitBranch size={12} /> {ide.gitBranch}</span>
    {/if}
    <span class="truncate">{ide.statusText}</span>
    <span class="ml-auto flex items-center gap-3">
      {#if ide.dirtyCount}<span>{ide.dirtyCount} unsaved</span>{/if}
      <span class="max-w-[40vw] truncate opacity-80">{ide.detailText}</span>
      {#if ide.connectionState === 'connected'}
        <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"
          onclick={() => (showTerminal = !showTerminal)}>
          <PanelBottom size={12} /> Terminal
        </button>
        <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"
          onclick={focusTerminal}><ExternalLink size={12} /></button>
      {/if}
      {#if true}
        <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20"
          title="Toggle AI Agent panel" onclick={() => (showChat = !showChat)}>
          <MessageSquare size={12} /> Chat
        </button>
      {/if}
    </span>
  </footer>

  {#if quickOpen}
    <QuickOpen onclose={() => (quickOpen = false)} />
  {/if}
  {#if showOpenFolder}
    <OpenFolderDialog onopen={openFolder} onclose={() => (showOpenFolder = false)} />
  {/if}

  <!-- Connection settings, as a dialog rather than a panel: it is reachable
       from the status bar on any view, and a form buried in one sidebar tab
       was easy to miss. Secrets are never sent to the browser, so blank means
       "keep what is stored" -- it cannot mean "clear it". -->
  {#if showSettings && ide.connection}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onclick={(e) => { if (e.target === e.currentTarget) showSettings = false }}
      onkeydown={(e) => { if (e.key === 'Escape') showSettings = false }}
      role="presentation"
    >
      <div class="flex w-full max-w-[420px] flex-col gap-2 rounded-lg border border-vs-line bg-vs-panel p-4 shadow-2xl">
        <h3 class="text-sm font-semibold text-vs-fg">
          {isLocal ? 'Folder settings' : 'SSH connection settings'}
        </h3>
        <p class="mb-1 text-[11px] leading-relaxed text-vs-muted">
          {isLocal
            ? 'Where this workspace opens.'
            : 'Secrets are never shown — leave a field blank to keep what is stored.'}
        </p>
        <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent"
          placeholder="Label" bind:value={settingsForm.label} />
        {#if !isLocal}
          <div class="flex gap-2">
            <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent"
              placeholder="Host" bind:value={settingsForm.host} />
            <input class="w-20 rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent"
              type="number" min="1" max="65535" placeholder="Port" bind:value={settingsForm.port} />
          </div>
          <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent"
            placeholder="Username" bind:value={settingsForm.username} />
          <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent"
            placeholder="Identity file (optional)" bind:value={settingsForm.identity_file} />
          <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent"
            type="password" autocomplete="new-password"
            placeholder={ide.connection.has_password
              ? 'Password stored — type to replace'
              : 'Password (optional)'}
            bind:value={settingsForm.password} />
          <textarea rows="3"
            class="resize-y rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 font-mono text-[11px] outline-none focus:border-vs-accent"
            placeholder={ide.connection.has_private_key
              ? 'Private key stored — paste a new one to replace'
              : 'Paste a private key (optional)'}
            bind:value={settingsForm.private_key}></textarea>
        {/if}
        <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs outline-none focus:border-vs-accent"
          placeholder="Workspace folder" bind:value={settingsForm.workspace_root} />
        <div class="mt-1 flex justify-end gap-2">
          <button class="rounded-sm border border-vs-line px-3 py-1 text-xs hover:bg-vs-hover"
            onclick={() => (showSettings = false)}>Cancel</button>
          <button class="rounded-sm bg-vs-status px-3 py-1 text-xs text-white hover:brightness-110 disabled:opacity-40"
            disabled={savingSettings} onclick={saveConnectionSettings}>
            {savingSettings ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  {/if}
  {#if ide.needsHostKey}
    <HostKeyDialog
      onclose={() => (ide.needsHostKey = false)}
      ontrusted={async () => {
        ide.needsHostKey = false
        await ide.connect(password)
      }}
    />
  {/if}
</div>
