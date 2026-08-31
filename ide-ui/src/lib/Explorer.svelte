<script>
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import TreeNode from './TreeNode.svelte'
  import { FilePlus, FolderPlus, RefreshCw, ChevronDown } from 'lucide-svelte'

  let creating = $state('')
  let newName = $state('')

  const join = (dir, name) => (dir === '.' ? name : `${dir}/${name}`)

  async function submitCreate(event) {
    event.preventDefault()
    const name = newName.trim()
    if (!name) return
    try {
      await api.fs(ide.connectionId, {
        action: creating === 'dir' ? 'create_dir' : 'create_file',
        path: join(ide.path, name),
      })
      creating = ''
      newName = ''
      await ide.refreshFiles()
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

<div class="flex h-full min-h-0 flex-col">
  <div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase">
    <span class="flex-1 truncate">Explorer</span>
  </div>

  <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase">
    <ChevronDown size={14} class="shrink-0 text-vs-muted" />
    <span class="flex-1 truncate" title={ide.connection?.workspace_root}>{rootLabel}</span>
    <span class="flex opacity-0 transition-opacity group-hover:opacity-100">
      <button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"
        onclick={() => { creating = 'file'; newName = '' }}><FilePlus size={14} /></button>
      <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"
        onclick={() => { creating = 'dir'; newName = '' }}><FolderPlus size={14} /></button>
      <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"
        onclick={() => ide.refreshFiles()}><RefreshCw size={13} /></button>
    </span>
  </div>

  {#if creating}
    <form class="px-2 pb-1" onsubmit={submitCreate}>
      <!-- svelte-ignore a11y_autofocus -->
      <input
        class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"
        placeholder={creating === 'dir' ? 'New folder name' : 'New file name'}
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
</div>
