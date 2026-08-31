<script>
  import { onMount } from 'svelte'
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import Explorer from './Explorer.svelte'
  import GitPanel from './GitPanel.svelte'
  import Editor from './Editor.svelte'
  import Tabs from './Tabs.svelte'
  import Chat from './Chat.svelte'

  let { sessions = [], session = '', rootPath = '' } = $props()

  let sidebar = $state('files') // files | git
  let showConnectionForm = $state(false)
  let password = $state('')
  let form = $state({
    label: '', host: '', username: '', port: 22,
    auth_mode: 'agent', identity_file: '', password: '',
    workspace_root: '.', max_file_bytes: 1000000,
  })

  const STATE_LABEL = {
    idle: '○ Not connected',
    connecting: '◍ Connecting…',
    connected: '● Connected',
    reconnect: '● Reconnect required',
    error: '● Error',
  }

  onMount(async () => {
    await ide.loadConnections()
    if (ide.connectionId) await ide.refreshStatus()
  })

  async function onConnectionChange(event) {
    ide.connectionId = event.currentTarget.value
    ide.tabs = []
    ide.activeKey = ''
    ide.restoredKey = ''
    await ide.refreshStatus()
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
    if (!confirm(`Delete connection "${current.label}"? Stored credentials and saved tabs are removed.`)) return
    try {
      await api.deleteConnection(current.id)
      ide.connectionId = ''
      ide.tabs = []
      await ide.loadConnections()
    } catch (error) {
      ide.setStatus(error.message || 'Could not delete connection')
    }
  }

  async function focusTerminal() {
    try {
      const data = await api.focusTerminal(ide.connectionId)
      ide.setStatus(`Focused ${data.window_name}`, 'tmux SSH window selected')
    } catch (error) {
      ide.setStatus(error.message || 'Could not focus terminal')
    }
  }

  function onKeydown(event) {
    const mod = event.ctrlKey || event.metaKey
    if (mod && event.key.toLowerCase() === 's') {
      event.preventDefault()
      ide.saveActive()
    }
  }
</script>

<svelte:window onkeydown={onKeydown} />

<div class="ide">
  <header class="topbar">
    <span class="brand">Remote SSH IDE</span>

    <select value={ide.connectionId} onchange={onConnectionChange} title="SSH connection">
      <option value="">— select connection —</option>
      {#each ide.connections as item (item.id)}
        <option value={item.id}>{item.label}</option>
      {/each}
    </select>

    <button onclick={() => (showConnectionForm = !showConnectionForm)}>＋ Add</button>
    {#if ide.connection}
      <button onclick={removeConnection} title="Delete connection">🗑</button>
    {/if}

    <span class="state {ide.connectionState}">{STATE_LABEL[ide.connectionState]}</span>

    {#if ide.connectionState !== 'connected'}
      {#if ide.connection && !ide.connection.has_password}
        <input
          class="pw"
          type="password"
          placeholder="Password (optional)"
          bind:value={password}
          autocomplete="new-password"
        />
      {/if}
      <button class="primary" onclick={() => ide.connect(password)}>Connect</button>
    {:else}
      <button onclick={focusTerminal} title="Focus the tmux SSH window">▣ Terminal</button>
    {/if}
  </header>

  {#if showConnectionForm}
    <form class="connform" onsubmit={createConnection}>
      <input placeholder="Label" bind:value={form.label} />
      <input placeholder="Host" bind:value={form.host} required />
      <input placeholder="User" bind:value={form.username} required />
      <input placeholder="Port" type="number" bind:value={form.port} min="1" max="65535" />
      <select bind:value={form.auth_mode}>
        <option value="agent">SSH agent</option>
        <option value="key">Existing key</option>
        <option value="password">Password (saved, encrypted)</option>
      </select>
      {#if form.auth_mode === 'key'}
        <input placeholder="~/.ssh/id_ed25519" bind:value={form.identity_file} />
      {/if}
      {#if form.auth_mode === 'password'}
        <input type="password" placeholder="Password" bind:value={form.password} autocomplete="new-password" />
      {/if}
      <input placeholder="Workspace root" bind:value={form.workspace_root} />
      <button class="primary" type="submit">Create</button>
      <button type="button" onclick={() => (showConnectionForm = false)}>Cancel</button>
    </form>
  {/if}

  <div class="main">
    <aside class="sidebar">
      <div class="switch">
        <button class:active={sidebar === 'files'} onclick={() => (sidebar = 'files')}>Files</button>
        <button class:active={sidebar === 'git'} onclick={() => (sidebar = 'git')}>Git</button>
      </div>
      {#if sidebar === 'files'}
        <Explorer />
      {:else}
        <GitPanel />
      {/if}
    </aside>

    <section class="code">
      <Tabs />
      <div class="editor-wrap"><Editor /></div>
    </section>

    <aside class="chat-pane">
      <Chat {sessions} {session} {rootPath} />
    </aside>
  </div>

  <footer class="statusbar">
    <span>{ide.statusText}</span>
    <span class="detail">{ide.detailText}</span>
    {#if ide.dirtyCount}<span class="dirty">{ide.dirtyCount} unsaved</span>{/if}
  </footer>
</div>

<style>
  .ide {
    --ide-bg: #272822;
    --ide-panel: #1e1f1c;
    --ide-input: #171815;
    --ide-border: #3e3d32;
    --ide-hover: #3e3d32;
    --ide-fg: #f8f8f2;
    --ide-muted: #90908a;
    --ide-accent: #a6e22e;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    background: var(--ide-bg);
    color: var(--ide-fg);
    font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
    /* Render native form controls (select dropdowns, scrollbars) dark so
       they match the Monokai chrome instead of the OS light default. */
    color-scheme: dark;
  }
  .topbar, .connform { display: flex; align-items: center; gap: 6px; padding: 7px 9px; background: var(--ide-panel); border-bottom: 1px solid var(--ide-border); flex-wrap: wrap; }
  .brand { font-size: 12px; font-weight: 700; letter-spacing: .04em; color: var(--ide-accent); }
  select, input { background: var(--ide-input); border: 1px solid var(--ide-border); color: var(--ide-fg); border-radius: 3px; padding: 4px 6px; font-size: 12px; }
  .connform input, .connform select { min-width: 110px; }
  button { background: var(--ide-panel); border: 1px solid var(--ide-border); color: var(--ide-fg); border-radius: 3px; cursor: pointer; padding: 4px 9px; font-size: 12px; }
  button:hover { background: var(--ide-hover); }
  button.primary { background: var(--ide-accent); border-color: var(--ide-accent); color: #272822; font-weight: 600; }
  .state { font-size: 11px; margin-left: auto; }
  .state.connected { color: var(--ide-accent); }
  .state.reconnect, .state.error { color: #f92672; }
  .state.connecting { color: #e6db74; }
  .pw { width: 150px; }
  .main { display: grid; grid-template-columns: minmax(190px, 250px) minmax(320px, 1fr) minmax(250px, 330px); flex: 1; min-height: 0; }
  .sidebar { display: flex; flex-direction: column; min-width: 0; background: var(--ide-panel); border-right: 1px solid var(--ide-border); }
  .switch { display: flex; border-bottom: 1px solid var(--ide-border); }
  .switch button { flex: 1; border: 0; border-radius: 0; background: transparent; padding: 6px; }
  .switch button.active { box-shadow: inset 0 -2px 0 var(--ide-accent); color: var(--ide-accent); }
  .code { display: flex; flex-direction: column; min-width: 0; min-height: 0; }
  .editor-wrap { flex: 1; min-height: 0; }
  .chat-pane { min-width: 0; background: var(--ide-panel); border-left: 1px solid var(--ide-border); }
  .statusbar { display: flex; gap: 12px; align-items: center; padding: 4px 10px; background: var(--ide-panel); border-top: 1px solid var(--ide-border); font-size: 11px; color: var(--ide-muted); }
  .statusbar .detail { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .statusbar .dirty { margin-left: auto; color: var(--ide-accent); }
  @media (max-width: 900px) {
    .main { grid-template-columns: 170px 1fr; }
    .chat-pane { display: none; }
  }
</style>
