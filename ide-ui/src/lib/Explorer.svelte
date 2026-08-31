<script>
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import {
    ArrowUp, FilePlus, FolderPlus, RefreshCw, Folder, File, Link2, Pencil, Trash2,
  } from 'lucide-svelte'

  let creating = $state('')
  let newName = $state('')

  const parentOf = (path) => {
    const parts = (path || '.').split('/').filter((p) => p && p !== '.')
    parts.pop()
    return parts.length ? parts.join('/') : '.'
  }

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

  async function remove(entry) {
    const target = join(ide.path, entry.name)
    if (!confirm(`Delete ${target}? Folders must already be empty.`)) return
    try {
      await api.fs(ide.connectionId, { action: 'delete', path: target })
      await ide.refreshFiles()
    } catch (error) {
      ide.setStatus(error.message || 'Could not delete')
    }
  }

  async function rename(entry) {
    const target = join(ide.path, entry.name)
    const next = prompt('Rename to (relative path):', target)
    if (!next || next === target) return
    try {
      await api.fs(ide.connectionId, { action: 'rename', path: target, new_path: next })
      await ide.refreshFiles()
    } catch (error) {
      ide.setStatus(error.message || 'Could not rename')
    }
  }
</script>

<div class="explorer">
  <div class="toolbar">
    <button title="Up one folder" aria-label="Up one folder" onclick={() => ide.refreshFiles(parentOf(ide.path))}>
      <ArrowUp size={14} />
    </button>
    <span class="path" title={ide.path}>{ide.path}</span>
    <button title="New file" aria-label="New file" onclick={() => { creating = 'file'; newName = '' }}>
      <FilePlus size={14} />
    </button>
    <button title="New folder" aria-label="New folder" onclick={() => { creating = 'dir'; newName = '' }}>
      <FolderPlus size={14} />
    </button>
    <button title="Refresh" aria-label="Refresh" onclick={() => ide.refreshFiles()}>
      <RefreshCw size={14} />
    </button>
  </div>

  <input class="filter" placeholder="Filter files…" bind:value={ide.filter} />

  {#if creating}
    <form class="create" onsubmit={submitCreate}>
      <input
        placeholder={creating === 'dir' ? 'New folder name' : 'New file name'}
        bind:value={newName}
        onkeydown={(e) => { if (e.key === 'Escape') creating = '' }}
      />
      <button type="submit">Add</button>
    </form>
  {/if}

  <ul class="entries">
    {#each ide.visibleEntries as entry (entry.name)}
      <li>
        <button
          class="entry"
          class:dir={entry.is_dir}
          ondblclick={() => entry.is_dir && ide.refreshFiles(join(ide.path, entry.name))}
          onclick={() => !entry.is_dir && ide.openFile(join(ide.path, entry.name))}
        >
          <span class="icon">
            {#if entry.is_dir}<Folder size={14} />
            {:else if entry.is_symlink}<Link2 size={14} />
            {:else}<File size={14} />{/if}
          </span>
          <span class="name">{entry.name}</span>
        </button>
        <span class="actions">
          <button title="Rename" aria-label="Rename {entry.name}" onclick={() => rename(entry)}>
            <Pencil size={13} />
          </button>
          <button title="Delete" aria-label="Delete {entry.name}" onclick={() => remove(entry)}>
            <Trash2 size={13} />
          </button>
        </span>
      </li>
    {:else}
      <li class="empty">No files here</li>
    {/each}
  </ul>
</div>

<style>
  .explorer { display: flex; flex-direction: column; height: 100%; min-height: 0; }
  .toolbar { display: flex; align-items: center; gap: 4px; padding: 6px; border-bottom: 1px solid var(--ide-border); }
  .toolbar .path { flex: 1; font-size: 11px; color: var(--ide-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .toolbar button, .actions button { background: transparent; border: 0; color: var(--ide-fg); cursor: pointer; padding: 2px 5px; border-radius: 3px; }
  .toolbar button:hover, .actions button:hover { background: var(--ide-hover); }
  .filter, .create input { margin: 6px; padding: 4px 6px; background: var(--ide-input); border: 1px solid var(--ide-border); color: var(--ide-fg); border-radius: 3px; font-size: 12px; }
  .create { display: flex; gap: 4px; margin: 0 6px 6px; }
  .create input { flex: 1; margin: 0; }
  .create button { background: var(--ide-accent); border: 0; color: #272822; border-radius: 3px; cursor: pointer; padding: 0 8px; }
  .entries { list-style: none; margin: 0; padding: 0; overflow-y: auto; flex: 1; }
  .entries li { display: flex; align-items: center; }
  .entries li:hover { background: var(--ide-hover); }
  .entry { flex: 1; display: flex; gap: 6px; align-items: center; background: transparent; border: 0; color: var(--ide-fg); cursor: pointer; padding: 3px 8px; text-align: left; font-size: 12px; overflow: hidden; }
  .entry.dir .name { color: var(--ide-accent); }
  .entry .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .icon { display: flex; align-items: center; color: var(--ide-muted); }
  .entry.dir .icon { color: var(--ide-accent); }
  .toolbar button, .actions button { display: flex; align-items: center; justify-content: center; }
  .actions { display: none; padding-right: 4px; }
  .entries li:hover .actions { display: flex; }
  .empty { padding: 8px; color: var(--ide-muted); font-size: 12px; }
</style>
