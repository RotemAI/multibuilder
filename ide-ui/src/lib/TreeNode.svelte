<script>
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import Self from './TreeNode.svelte'
  import { ChevronRight, ChevronDown, File, Link2 } from 'lucide-svelte'

  let { entry, dir, depth } = $props()

  const path = $derived(dir === '.' ? entry.name : `${dir}/${entry.name}`)
  const open = $derived(!!ide.expanded[path])
  const children = $derived(ide.treeChildren[path] || [])
  const active = $derived(ide.activeTab?.path === path)

  async function activate() {
    // VS Code opens a file and expands a folder on a SINGLE click; the old
    // build needed a double-click for folders, which people kept missing.
    if (entry.is_dir) await ide.toggleDirectory(path)
    else await ide.openFile(path)
  }

  async function remove(event) {
    event.stopPropagation()
    if (!confirm(`Delete ${path}? Folders must already be empty.`)) return
    try {
      await api.fs(ide.connectionId, { action: 'delete', path })
      await ide.refreshFiles()
    } catch (error) {
      ide.setStatus(error.message || 'Could not delete')
    }
  }

  async function rename(event) {
    event.stopPropagation()
    const next = prompt('Rename to (relative path):', path)
    if (!next || next === path) return
    try {
      await api.fs(ide.connectionId, { action: 'rename', path, new_path: next })
      await ide.refreshFiles()
    } catch (error) {
      ide.setStatus(error.message || 'Could not rename')
    }
  }
</script>

<div
  class="group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover"
  class:bg-vs-active={active}
  style="padding-left: {8 + depth * 12}px"
  onclick={activate}
  onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate() } }}
  role="treeitem"
  tabindex="0"
  aria-expanded={entry.is_dir ? open : undefined}
  aria-selected={active}
  title={path}
>
  {#if entry.is_dir}
    {#if open}
      <ChevronDown size={14} class="shrink-0 text-vs-muted" />
    {:else}
      <ChevronRight size={14} class="shrink-0 text-vs-muted" />
    {/if}
  {:else}
    <span class="w-[14px] shrink-0"></span>
  {/if}

  <span class="flex shrink-0 items-center">
    {#if entry.is_dir}
      <!-- Folder glyph matching VS Code's Seti-style folder color. -->
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553" />
      </svg>
    {:else if entry.is_symlink}
      <Link2 size={14} class="text-vs-muted" />
    {:else}
      <File size={14} class="text-vs-blue" />
    {/if}
  </span>

  <span class="flex-1 truncate text-vs-fg">{entry.name}</span>

  <span class="hidden shrink-0 gap-0.5 group-hover:flex">
    <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg"
      title="Rename" aria-label="Rename {entry.name}" onclick={rename}>
      <span class="text-[11px] leading-none">✎</span>
    </button>
    <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red"
      title="Delete" aria-label="Delete {entry.name}" onclick={remove}>
      <span class="text-[11px] leading-none">🗑</span>
    </button>
  </span>
</div>

{#if entry.is_dir && open}
  {#each children as child (child.name)}
    <Self entry={child} dir={path} depth={depth + 1} />
  {/each}
{/if}
