<script>
  import { onMount } from 'svelte'
  import { api } from './api.js'
  import { ide } from './store.svelte.js'
  import { Folder, CornerLeftUp, HardDrive, Loader } from 'lucide-svelte'

  let { onopen, onclose } = $props()

  let path = $state('')
  let parent = $state('')
  let entries = $state([])
  let error = $state('')
  let loading = $state(true)
  let manual = $state('')

  async function load(target) {
    loading = true
    error = ''
    try {
      // With a connection open, browse ITS filesystem; otherwise this host.
      const data = ide.connectionId
        ? await api.browseOn(ide.connectionId, target)
        : await api.browse(target)
      path = data.path
      parent = data.parent
      entries = data.entries || []
      manual = data.path
    } catch (err) {
      error = err.message || 'Could not open that folder'
    } finally {
      loading = false
    }
  }

  onMount(() => load(''))

  function submitManual(event) {
    event.preventDefault()
    if (manual.trim()) load(manual.trim())
  }
</script>

<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  onclick={(e) => e.target === e.currentTarget && onclose()}
  onkeydown={(e) => e.key === 'Escape' && onclose()}
  role="presentation"
>
  <div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl">
    <div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">
      Open Folder
      <span class="ml-1 font-normal text-vs-muted">
        {#if ide.connection && ide.connection.kind !== 'local'}
          on {ide.connection.username}@{ide.connection.host}
        {:else}
          on this server
        {/if}
      </span>
    </div>

    <form class="flex gap-2 border-b border-vs-line px-3 py-2" onsubmit={submitManual}>
      <button
        type="button"
        class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40"
        disabled={!parent}
        onclick={() => parent && load(parent)}
        title="Up one folder"
      >
        <CornerLeftUp size={14} /> Up
      </button>
      <input
        class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent"
        bind:value={manual}
        spellcheck="false"
        aria-label="Folder path"
      />
      <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button>
    </form>

    {#if error}
      <div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red">{error}</div>
    {/if}

    <div class="min-h-0 flex-1 overflow-y-auto py-1">
      {#if loading}
        <div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted">
          <Loader size={13} class="animate-spin" /> Loading…
        </div>
      {:else}
        {#each entries as entry (entry.path)}
          <button
            class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"
            ondblclick={() => load(entry.path)}
            onclick={() => load(entry.path)}
          >
            <Folder size={14} class="shrink-0 text-vs-blue" />
            <span class="truncate">{entry.name}</span>
          </button>
        {:else}
          <div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>
        {/each}
      {/if}
    </div>

    <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3">
      <span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted">
        <HardDrive size={13} class="shrink-0" />
        <span class="truncate font-mono" title={path}>{path}</span>
      </span>
      <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover" onclick={onclose}>Cancel</button>
      <button
        class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"
        disabled={!path || loading}
        onclick={() => onopen(path)}
      >
        Open Folder
      </button>
    </div>
  </div>
</div>
