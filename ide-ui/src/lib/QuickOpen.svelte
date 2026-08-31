<script>
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import { Search, CornerDownLeft } from 'lucide-svelte'

  let { onclose } = $props()

  let query = $state('')
  let results = $state([])
  let active = $state(0)
  let searching = $state(false)
  let input = $state(null)
  let timer = null

  $effect(() => {
    if (input) input.focus()
  })

  // Debounced: each keystroke would otherwise open an SSH round trip.
  $effect(() => {
    const needle = query.trim()
    if (timer) clearTimeout(timer)
    if (!needle) {
      results = []
      return
    }
    timer = setTimeout(async () => {
      searching = true
      try {
        const data = await api.searchFiles(ide.connectionId, ide.path || '.', needle)
        results = data.matches || []
        active = 0
      } catch {
        results = []
      } finally {
        searching = false
      }
    }, 180)
  })

  async function choose(match) {
    if (!match) return
    // Search returns paths relative to the searched root, so rejoin them.
    const base = ide.path && ide.path !== '.' ? `${ide.path}/` : ''
    await ide.openFile(`${base}${match.path}`)
    onclose?.()
  }

  function onKey(event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      onclose?.()
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      active = Math.min(active + 1, results.length - 1)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      active = Math.max(active - 1, 0)
    } else if (event.key === 'Enter') {
      event.preventDefault()
      choose(results[active])
    }
  }
</script>

<div
  class="backdrop"
  role="button"
  tabindex="-1"
  onclick={() => onclose?.()}
  onkeydown={(e) => e.key === 'Escape' && onclose?.()}
></div>

<div class="dialog" role="dialog" aria-label="Quick open">
  <div class="field">
    <Search size={14} />
    <input
      bind:this={input}
      bind:value={query}
      onkeydown={onKey}
      placeholder="Search files by name…"
      aria-label="Search files by name"
    />
    {#if searching}<span class="hint">searching…</span>{/if}
  </div>

  {#if results.length}
    <ul class="results">
      {#each results as match, index (match.path)}
        <li>
          <button class:active={index === active} onclick={() => choose(match)}>
            <span class="name">{match.name}</span>
            <span class="path">{match.path}</span>
            {#if index === active}<CornerDownLeft size={12} />{/if}
          </button>
        </li>
      {/each}
    </ul>
  {:else if query.trim() && !searching}
    <p class="empty">No files match “{query.trim()}”.</p>
  {/if}
</div>

<style>
  .backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, .45); border: 0; z-index: 20; }
  .dialog { position: fixed; top: 12%; left: 50%; transform: translateX(-50%); width: min(560px, 90vw); z-index: 21; background: var(--ide-panel); border: 1px solid var(--ide-border); border-radius: 6px; box-shadow: 0 12px 40px rgba(0, 0, 0, .5); overflow: hidden; }
  .field { display: flex; align-items: center; gap: 7px; padding: 9px 11px; border-bottom: 1px solid var(--ide-border); color: var(--ide-muted); }
  .field input { flex: 1; background: transparent; border: 0; color: var(--ide-fg); font-size: 13px; outline: none; }
  .hint { font-size: 11px; color: var(--ide-muted); }
  .results { list-style: none; margin: 0; padding: 0; max-height: 340px; overflow-y: auto; }
  .results button { display: flex; align-items: center; gap: 8px; width: 100%; background: transparent; border: 0; color: var(--ide-fg); cursor: pointer; padding: 6px 11px; text-align: left; font-size: 12px; }
  .results button.active, .results button:hover { background: var(--ide-hover); }
  .results .name { font-weight: 600; }
  .results .path { flex: 1; color: var(--ide-muted); font-size: 11px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .empty { padding: 12px; margin: 0; color: var(--ide-muted); font-size: 12px; }
</style>
