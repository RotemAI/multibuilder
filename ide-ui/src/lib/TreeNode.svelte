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

  // --- Drag to move, VS Code style -------------------------------------
  //
  // A move IS a rename to a different parent, which the backend already
  // supports, so this needs no new endpoint.
  let dropTarget = $state(false)

  function onDragStart(event) {
    event.stopPropagation()
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/x-ide-path', path)
  }

  function onDragOver(event) {
    // Only folders accept a drop; a file would have nowhere to put it.
    if (!entry.is_dir) return
    const dragged = event.dataTransfer.types.includes('text/x-ide-path')
    if (!dragged) return
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    dropTarget = true
  }

  async function onDrop(event) {
    dropTarget = false
    if (!entry.is_dir) return
    event.preventDefault()
    event.stopPropagation()
    const source = event.dataTransfer.getData('text/x-ide-path')
    if (!source || source === path) return
    // Refuse to move a folder into itself or its own subtree, which would
    // otherwise detach it from the tree entirely.
    if (path === source || path.startsWith(`${source}/`)) {
      ide.setStatus('Cannot move a folder into itself')
      return
    }
    const name = source.split('/').pop()
    const destination = path === '.' ? name : `${path}/${name}`
    if (destination === source) return
    try {
      await api.fs(ide.connectionId, { action: 'rename', path: source, new_path: destination })
      await ide.refreshFiles()
      ide.setStatus(`Moved ${name} to ${path}`)
    } catch (error) {
      ide.setStatus(error.message || 'Could not move')
    }
  }

  function onContextMenu(event) {
    event.preventDefault()
    event.stopPropagation()
    ide.openTreeMenu?.({ path, isDir: entry.is_dir, x: event.clientX, y: event.clientY })
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
  class:ring-1={dropTarget}
  class:ring-vs-accent={dropTarget}
  style="padding-left: {8 + depth * 12}px"
  onclick={activate}
  onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate() } }}
  oncontextmenu={onContextMenu}
  draggable="true"
  ondragstart={onDragStart}
  ondragover={onDragOver}
  ondragleave={() => (dropTarget = false)}
  ondrop={onDrop}
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

  <!-- Always laid out, only made visible on hover. `hidden`/`group-hover:flex`
       inserted these on hover, which reflowed the row and made the name shift
       under the pointer. Reserving the space keeps the row still. -->
  <span class="pointer-events-none flex shrink-0 gap-0.5 opacity-0 transition-opacity
               group-hover:pointer-events-auto group-hover:opacity-100
               focus-within:pointer-events-auto focus-within:opacity-100">
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
