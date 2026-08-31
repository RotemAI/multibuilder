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
  import {
    Files, GitBranch, MessageSquare, Server, Plus, Trash2, SquareTerminal,
    ExternalLink, FolderOpen, FileCode2, X, PanelBottom, Circle, CircleDot,
    CircleCheck, CircleAlert,
  } from 'lucide-svelte'

  let { sessions = [], session = '', rootPath = '' } = $props()

  let view = $state('files')          // files | git | remote
  // Chat lives in its own right-hand pane (like VS Code's secondary side bar)
  // rather than replacing the Explorer, so you can read files while asking.
  let showChat = $state(true)
  let sidebarOpen = $state(true)
  let quickOpen = $state(false)
  let showTerminal = $state(false)
  let showConnectionForm = $state(false)
  let showOpenFolder = $state(false)
  let password = $state('')
  let form = $state({
    kind: 'local', label: '', host: '', username: '', port: 22,
    auth_mode: 'agent', identity_file: '', password: '',
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

  const ACTIVITY = [
    { id: 'files', icon: Files, label: 'Explorer' },
    { id: 'git', icon: GitBranch, label: 'Source Control' },
    { id: 'remote', icon: Server, label: 'Workspaces' },
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
    ide.tabs = []
    ide.activeKey = ''
    ide.restoredKey = ''
    await ide.refreshStatus()
  }

  /** Open a folder picked from the browser as a local workspace, then connect. */
  async function openFolder(path) {
    showOpenFolder = false
    try {
      const label = path.split('/').filter(Boolean).pop() || path
      const data = await api.createConnection({
        kind: 'local', label, workspace_root: path, max_file_bytes: 1000000,
      })
      await ide.loadConnections()
      ide.connectionId = data.connection.id
      ide.tabs = []
      ide.activeKey = ''
      ide.restoredKey = ''
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
      form = { ...form, label: '', host: '', username: '', password: '' }
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
      ide.tabs = []
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
    <span class="mx-auto truncate text-vs-muted" title={ide.connection?.workspace_root}>
      {ide.connection ? `${ide.connection.label} — Multibuilder IDE` : 'Multibuilder IDE'}
    </span>
    <span class="flex items-center gap-1 {ide.connectionState === 'connected' ? 'text-vs-green' : ide.connectionState === 'connecting' ? 'text-vs-yellow' : ide.connectionState === 'idle' ? 'text-vs-muted' : 'text-vs-red'}">
      <StateIcon size={12} />
      {STATE_META[ide.connectionState].label}
    </span>
  </header>

  <div class="flex min-h-0 flex-1">
    <!-- Activity bar -->
    <nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity py-1">
      {#each ACTIVITY as item (item.id)}
        <button
          class="relative flex h-12 w-12 items-center justify-center {view === item.id && sidebarOpen ? 'text-vs-bright' : 'text-vs-muted hover:text-vs-fg'}"
          title={item.label}
          aria-label={item.label}
          onclick={() => pickView(item.id)}
        >
          {#if view === item.id && sidebarOpen}
            <span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>
          {/if}
          <item.icon size={22} strokeWidth={1.5} />
        </button>
      {/each}
    </nav>

    <!-- Side bar -->
    {#if sidebarOpen}
      <aside class="flex w-60 shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel">
        {#if view === 'files'}
          <Explorer />
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
        {#if showTerminal && ide.connectionState === 'connected'}
          <div class="flex h-[35%] min-h-[140px] flex-col border-t border-vs-line bg-vs-bg">
            <div class="flex items-center gap-2 border-b border-vs-border px-3 py-1 text-[11px] tracking-wide uppercase">
              <SquareTerminal size={13} /> Terminal
              <button class="ml-auto rounded-sm p-0.5 hover:bg-vs-hover" title="Close panel" aria-label="Close terminal panel"
                onclick={() => (showTerminal = false)}><X size={14} /></button>
            </div>
            <div class="min-h-0 flex-1">
              {#key ide.connectionId}
                <Terminal {rootPath} {session} />
              {/key}
            </div>
          </div>
        {/if}
      {/if}
    </section>

    <!-- Secondary side bar: AI chat -->
    {#if showChat}
      <aside class="flex w-80 shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel">
        <div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5">
          <MessageSquare size={13} />
          <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">Chat</span>
          <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"
            onclick={() => (showChat = false)}><X size={14} /></button>
        </div>
        <div class="min-h-0 flex-1"><Chat {sessions} {session} {rootPath} /></div>
      </aside>
    {/if}
  </div>

  <!-- Status bar -->
  <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white">
    {#if ide.connection}
      <span class="flex items-center gap-1" title={ide.connection.workspace_root}>
        {#if isLocal}<FolderOpen size={12} />{:else}<Server size={12} />{/if}
        {ide.connection.label}
      </span>
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
          title="Toggle chat panel" onclick={() => (showChat = !showChat)}>
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
</div>
