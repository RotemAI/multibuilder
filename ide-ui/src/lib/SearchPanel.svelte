<script>
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import { Search, Loader, File } from 'lucide-svelte'

  let query = $state('')
  let results = $state([])
  let searching = $state(false)
  let ran = $state(false)
  let timer = null

  // Debounced: each keystroke would otherwise be a round trip to the workspace.
  $effect(() => {
    const needle = query.trim()
    if (timer) clearTimeout(timer)
    if (!needle || !ide.connectionId) {
      results = []
      ran = false
      return
    }
    timer = setTimeout(async () => {
      searching = true
      try {
        const data = await api.searchFiles(ide.connectionId, ide.path || '.', needle)
        results = data.matches || []
      } catch (error) {
        results = []
        ide.setStatus(error.message || 'Search failed')
      } finally {
        searching = false
        ran = true
      }
    }, 200)
  })

  const dirOf = (path) => {
    const parts = (path || '').split('/')
    parts.pop()
    return parts.join('/')
  }
</script>

<div class="flex h-full min-h-0 flex-col">
  <div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div>

  <div class="px-3 pb-2">
    <div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent">
      <Search size={12} class="shrink-0 text-vs-muted" />
      <input
        class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted"
        placeholder="Search filenames"
        bind:value={query}
        spellcheck="false"
      />
      {#if searching}<Loader size={12} class="shrink-0 animate-spin text-vs-muted" />{/if}
    </div>
  </div>

  <div class="min-h-0 flex-1 overflow-y-auto">
    {#if !ide.connectionId}
      <p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>
    {:else}
      {#each results as match (match.path)}
        <button
          class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"
          onclick={() => ide.openFile(match.path)}
          title={match.path}
        >
          <File size={13} class="shrink-0 text-vs-blue" />
          <span class="truncate text-vs-fg">{match.name || match.path.split('/').pop()}</span>
          <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted">{dirOf(match.path)}</span>
        </button>
      {:else}
        {#if ran && !searching}
          <p class="px-4 py-2 text-xs text-vs-muted">No files match “{query}”.</p>
        {:else if !query.trim()}
          <p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>
        {/if}
      {/each}
    {/if}
  </div>
</div>
