<script>
  import { onMount } from 'svelte'
  import {
    Server, FolderOpen, Plus, Trash2, Settings2, Loader,
    MonitorSmartphone, Circle, CircleDot, ExternalLink,
  } from 'lucide-svelte'
  import ServerDialog from './ServerDialog.svelte'

  let { rootPath = '', sessions: initialSessions = [] } = $props()

  // Tab choice is remembered, so returning to the dashboard lands where the
  // user left it rather than always on Sessions.
  let tab = $state(localStorage.getItem('home.tab') || 'sessions')
  let sessions = $state([...initialSessions])
  let workspaces = $state(null)
  let loading = $state(false)
  let status = $state('')
  let editing = $state(null)

  const api = (path, init) =>
    fetch(`${rootPath}${path}`, init).then(async (response) => {
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || `Request failed (${response.status})`)
      return data
    })

  function setTab(next) {
    tab = next
    try { localStorage.setItem('home.tab', next) } catch { /* private mode */ }
    if (next === 'servers' && workspaces === null) loadWorkspaces()
  }

  async function loadSessions() {
    loading = true
    try {
      sessions = await api('/api/sessions-fast')
    } catch (error) {
      status = error.message
    } finally {
      loading = false
    }
  }

  async function loadWorkspaces() {
    loading = true
    try {
      workspaces = (await api('/api/workspaces')).workspaces || []
    } catch (error) {
      status = error.message
      workspaces = []
    } finally {
      loading = false
    }
  }

  onMount(() => {
    loadSessions()
    if (tab === 'servers') loadWorkspaces()
  })

  const openSession = (name) => {
    window.location.href = `${rootPath}/?session=${encodeURIComponent(name)}`
  }
  const openIde = (name) => {
    window.location.href = `${rootPath}/ide/${encodeURIComponent(name)}`
  }

  /** Deleting a session ends the agent and everything running in it, so the
   *  name must be typed — a mis-aimed click on a card is easy. */
  async function deleteSession(name) {
    const typed = prompt(
      `Delete session "${name}"?\n\n` +
        'This kills the agent and everything running in it.\n' +
        'Type the session name to confirm:',
    )
    if (typed === null) return
    if (typed.trim() !== name) {
      status = 'Name did not match — nothing was deleted.'
      return
    }
    try {
      await api(`/api/sessions/${encodeURIComponent(name)}`, { method: 'DELETE' })
      sessions = sessions.filter((s) => s.name !== name)
      workspaces = null
      status = `Session "${name}" deleted`
    } catch (error) {
      status = error.message
    }
  }

  /** Removing a saved server is reversible by re-adding it, so a plain confirm
   *  is enough — the session and its files are untouched. */
  async function removeWorkspace(w) {
    const label = w.label || w.host || w.id
    if (!confirm(`Remove saved server "${label}"?\n\nThe session and its files are untouched.`)) return
    try {
      await api(
        `/api/sessions/${encodeURIComponent(w.session_name)}/ide/ssh-connections/${encodeURIComponent(w.id)}`,
        { method: 'DELETE' },
      )
      workspaces = (workspaces || []).filter((x) => x.id !== w.id)
      status = `Removed ${label}`
    } catch (error) {
      status = error.message
    }
  }

  const dotFor = (s) => (s === 'busy' ? 'text-vs-yellow' : s === 'error' ? 'text-vs-red' : 'text-vs-green')
</script>

<div class="flex h-full min-h-0 flex-col bg-vs-bg text-vs-fg">
  <header class="flex shrink-0 items-center gap-2 border-b border-vs-border px-5 pt-4">
    <button
      class="border-b-2 px-4 py-2 text-xs tracking-wide uppercase transition-colors
             {tab === 'sessions' ? 'border-vs-accent text-vs-bright' : 'border-transparent text-vs-muted hover:text-vs-fg'}"
      onclick={() => setTab('sessions')}
    >Sessions</button>
    <button
      class="border-b-2 px-4 py-2 text-xs tracking-wide uppercase transition-colors
             {tab === 'servers' ? 'border-vs-accent text-vs-bright' : 'border-transparent text-vs-muted hover:text-vs-fg'}"
      onclick={() => setTab('servers')}
    >Servers</button>
    {#if loading}<Loader size={13} class="ml-1 animate-spin text-vs-muted" />{/if}
    <span class="ml-auto truncate text-[11px] text-vs-muted">{status}</span>
  </header>

  <div class="min-h-0 flex-1 overflow-y-auto p-5">
    {#if tab === 'sessions'}
      <div class="grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(270px, 1fr))">
        {#each sessions as s (s.name)}
          <div class="group rounded-lg border border-vs-line bg-vs-panel p-3.5 transition-colors hover:border-vs-accent">
            <div class="mb-1.5 flex items-center gap-2">
              {#if s.activity_status === 'busy'}
                <CircleDot size={11} class={dotFor(s.activity_status)} />
              {:else}
                <Circle size={11} class={dotFor(s.activity_status)} />
              {/if}
              <span class="truncate text-sm font-semibold text-vs-fg">{s.name}</span>
            </div>
            <p class="mb-3 truncate text-[11px] text-vs-muted">
              {s.title || s.description || 'No description yet'}
            </p>
            <div class="flex gap-1.5">
              <button class="rounded-sm bg-vs-status px-2.5 py-1 text-[11px] text-white hover:brightness-110"
                onclick={() => openSession(s.name)}>Open</button>
              <button class="rounded-sm border border-vs-line px-2.5 py-1 text-[11px] hover:bg-vs-hover"
                onclick={() => openIde(s.name)}>IDE</button>
              <button class="ml-auto rounded-sm border border-vs-line px-2 py-1 text-[11px] text-vs-red
                             opacity-0 transition-opacity group-hover:opacity-100 hover:bg-vs-hover"
                title="Delete session" aria-label="Delete {s.name}"
                onclick={() => deleteSession(s.name)}><Trash2 size={12} /></button>
            </div>
          </div>
        {:else}
          <p class="text-xs text-vs-muted">No sessions yet.</p>
        {/each}
      </div>
    {:else}
      <div class="grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))">
        {#each workspaces || [] as w (w.id)}
          <div class="group rounded-lg border border-vs-line bg-vs-panel p-3.5 transition-colors hover:border-vs-accent">
            <div class="mb-1.5 flex items-center gap-2">
              {#if w.kind === 'local'}
                <FolderOpen size={13} class="shrink-0 text-vs-blue" />
              {:else}
                <Server size={13} class="shrink-0 text-vs-blue" />
              {/if}
              <span class="truncate text-sm font-semibold">{w.label || w.host || 'workspace'}</span>
              <span class="ml-auto shrink-0 text-[10px] {w.session_live ? 'text-vs-green' : 'text-vs-muted'}">
                {w.session_live ? 'live' : 'stopped'}
              </span>
            </div>
            <p class="truncate text-[11px] text-vs-muted">
              {w.kind === 'local' ? 'Local folder' : `${w.username ? w.username + '@' : ''}${w.host || ''}`}
            </p>
            <p class="mb-3 truncate text-[11px] text-vs-muted">{w.workspace_root || '.'}</p>
            <div class="flex gap-1.5">
              <button class="rounded-sm bg-vs-status px-2.5 py-1 text-[11px] text-white hover:brightness-110 disabled:opacity-40"
                disabled={!w.session_live}
                title={w.session_live ? 'Open the IDE' : 'Its session is not running'}
                onclick={() => openIde(w.session_name)}>Connect</button>
              <button class="rounded-sm border border-vs-line px-2 py-1 text-[11px] hover:bg-vs-hover"
                title="Edit settings" aria-label="Edit {w.label}"
                onclick={() => (editing = w)}><Settings2 size={12} /></button>
              <button class="ml-auto rounded-sm border border-vs-line px-2 py-1 text-[11px] text-vs-red
                             opacity-0 transition-opacity group-hover:opacity-100 hover:bg-vs-hover"
                title="Remove saved server" aria-label="Remove {w.label}"
                onclick={() => removeWorkspace(w)}><Trash2 size={12} /></button>
            </div>
          </div>
        {:else}
          <p class="text-xs text-vs-muted">
            {workspaces === null ? 'Loading servers…' : 'No servers saved yet.'}
          </p>
        {/each}
      </div>
    {/if}
  </div>
</div>

{#if editing}
  <ServerDialog
    {rootPath}
    workspace={editing}
    onclose={() => (editing = null)}
    onsaved={() => { editing = null; workspaces = null; loadWorkspaces() }}
  />
{/if}
