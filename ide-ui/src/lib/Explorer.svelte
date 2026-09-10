<script>
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import TreeNode from './TreeNode.svelte'
  import { tick } from 'svelte'
  import { FilePlus, FolderPlus, RefreshCw, ChevronDown } from 'lucide-svelte'

  // Context menu state. The tree asks to open it via ide.openTreeMenu so the
  // menu lives once here rather than once per node.
  let menu = $state(null)
  let renaming = $state(false)
  let renameValue = $state('')
  let renameInput = $state(null)

  function closeMenu() {
    menu = null
    renaming = false
  }

  ide.openTreeMenu = (request) => {
    // Keep the menu on screen near the pointer.
    menu = { ...request, x: Math.min(request.x, window.innerWidth - 190) }
    renaming = false
  }

  async function startRename() {
    renameValue = menu.path
    renaming = true
    await tick()
    renameInput?.focus()
    // Preselect the base name, as VS Code does, so the extension is kept.
    const base = renameValue.lastIndexOf('/')
    const dot = renameValue.lastIndexOf('.')
    renameInput?.setSelectionRange(base + 1, dot > base + 1 ? dot : renameValue.length)
  }

  async function submitRename(event) {
    event.preventDefault()
    const next = renameValue.trim()
    const from = menu.path
    closeMenu()
    if (!next || next === from) return
    try {
      await api.fs(ide.connectionId, { action: 'rename', path: from, new_path: next })
      await ide.refreshFiles()
    } catch (error) {
      ide.setStatus(error.message || 'Could not rename')
    }
  }

  async function removeEntry() {
    const target = menu.path
    closeMenu()
    if (!confirm(`Delete ${target}? Folders must already be empty.`)) return
    try {
      await api.fs(ide.connectionId, { action: 'delete', path: target })
      await ide.refreshFiles()
    } catch (error) {
      ide.setStatus(error.message || 'Could not delete')
    }
  }

  function copyPath() {
    const target = menu.path
    closeMenu()
    navigator.clipboard?.writeText(target).catch(() => {})
    ide.setStatus(`Copied ${target}`)
  }
  let creating = $state('')
  let newName = $state('')
  // Where the new item lands. The toolbar creates at the workspace root; the
  // context menu creates inside the clicked folder (or beside a clicked file),
  // which is what VS Code does.
  let createBase = $state('')

  const join = (dir, name) => (dir === '.' || !dir ? name : `${dir}/${name}`)

  function startCreateIn(kind, path, isDir) {
    createBase = isDir ? path : (path.split('/').slice(0, -1).join('/') || '.')
    creating = kind
    newName = ''
    closeMenu()
  }

  async function submitCreate(event) {
    event.preventDefault()
    const name = newName.trim()
    if (!name) return
    const base = createBase || ide.path
    try {
      await api.fs(ide.connectionId, {
        action: creating === 'dir' ? 'create_dir' : 'create_file',
        path: join(base, name),
      })
      const created = join(base, name)
      const kind = creating
      creating = ''
      newName = ''
      createBase = ''
      await ide.refreshFiles()
      // Reveal it: a new item inside an already-expanded folder stays hidden
      // behind that folder's cached children until they are re-read.
      await ide.revealDirectory(base)
      // Open a new file so it is ready to edit, as VS Code does.
      if (kind === 'file') await ide.openFile(created)
    } catch (error) {
      ide.setStatus(error.message || 'Could not create')
    }
  }

  // The workspace label is the folder name, matching how VS Code titles the
  // Explorer root rather than showing the whole path.
  const rootLabel = $derived(
    (ide.connection?.workspace_root || '').split('/').filter(Boolean).pop() ||
      ide.connection?.label ||
      'WORKSPACE',
  )
</script>

<svelte:window
  onclick={(e) => { if (menu && !e.target.closest?.('[data-tree-menu]')) closeMenu() }}
  onkeydown={(e) => { if (e.key === 'Escape') closeMenu() }}
/>

<div class="flex h-full min-h-0 flex-col">
  <div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase">
    <span class="flex-1 truncate">Explorer</span>
  </div>

  <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase">
    <ChevronDown size={14} class="shrink-0 text-vs-muted" />
    <span class="flex-1 truncate" title={ide.connection?.workspace_root}>{rootLabel}</span>
    <span class="flex opacity-0 transition-opacity group-hover:opacity-100">
      <button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"
        onclick={() => { creating = 'file'; newName = ''; createBase = '' }}><FilePlus size={14} /></button>
      <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"
        onclick={() => { creating = 'dir'; newName = ''; createBase = '' }}><FolderPlus size={14} /></button>
      <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"
        onclick={() => ide.refreshFiles()}><RefreshCw size={13} /></button>
    </span>
  </div>

  {#if creating}
    <form class="px-2 pb-1" onsubmit={submitCreate}>
      <!-- svelte-ignore a11y_autofocus -->
      <input
        class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"
        placeholder={`${creating === 'dir' ? 'New folder' : 'New file'} in ${createBase || ide.path || '.'}`}
        bind:value={newName}
        autofocus
        onkeydown={(e) => { if (e.key === 'Escape') creating = '' }}
        onblur={() => { if (!newName.trim()) creating = '' }}
      />
    </form>
  {/if}

  <input
    class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent"
    placeholder="Filter files…"
    bind:value={ide.filter}
  />

  <div class="min-h-0 flex-1 overflow-y-auto pb-2">
    {#if !ide.connectionId}
      <p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>
    {:else}
      {#each ide.visibleEntries as entry (entry.name)}
        <TreeNode {entry} dir={ide.path} depth={0} />
      {:else}
        <p class="px-4 py-2 text-xs text-vs-muted">No files here</p>
      {/each}
    {/if}
  </div>

  <!-- Right-click menu, VS Code style. Rename is inline here rather than a
       browser prompt(), which is what the tree used to fall back to. -->
  {#if menu}
    <div
      class="fixed z-50 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 text-xs shadow-2xl"
      data-tree-menu
      style="left: {menu.x}px; top: {menu.y}px"
    >
      {#if renaming}
        <form class="px-2 py-1" onsubmit={submitRename}>
          <input
            class="w-full rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5 text-xs outline-none focus:border-vs-accent"
            bind:value={renameValue}
            bind:this={renameInput}
            onkeydown={(e) => { if (e.key === 'Escape') closeMenu() }}
          />
        </form>
      {:else}
        <button class="w-full px-3 py-1 text-left hover:bg-vs-hover"
          onclick={() => startCreateIn('file', menu.path, menu.isDir)}>New File…</button>
        <button class="w-full px-3 py-1 text-left hover:bg-vs-hover"
          onclick={() => startCreateIn('dir', menu.path, menu.isDir)}>New Folder…</button>
        <div class="my-1 h-px bg-vs-line"></div>
        <button class="w-full px-3 py-1 text-left hover:bg-vs-hover" onclick={startRename}>Rename…</button>
        <button class="w-full px-3 py-1 text-left hover:bg-vs-hover" onclick={copyPath}>Copy Path</button>
        <div class="my-1 h-px bg-vs-line"></div>
        <button class="w-full px-3 py-1 text-left text-vs-red hover:bg-vs-hover" onclick={removeEntry}>Delete</button>
      {/if}
    </div>
  {/if}
</div>
