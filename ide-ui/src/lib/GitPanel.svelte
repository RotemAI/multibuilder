<script>
  import { ide } from './store.svelte.js'
  import { RefreshCw, FileDiff, FilePlus2, GitCommitVertical, GitBranchPlus } from 'lucide-svelte'

  let message = $state('')
  let branch = $state('')

  async function commit() {
    if (!message.trim()) return
    const result = await ide.runGit('commit', { message: message.trim() })
    if (result) message = ''
  }

  async function createBranch() {
    if (!branch.trim()) return
    const result = await ide.runGit('create_branch', { branch: branch.trim() })
    if (result) branch = ''
  }
</script>

<div class="git">
  <div class="row">
    <button onclick={() => ide.runGit('status')}><RefreshCw size={13} /> Status</button>
    <button onclick={() => ide.runGit('diff')}><FileDiff size={13} /> Diff</button>
    <button onclick={() => ide.runGit('stage', { files: ['.'] })}><FilePlus2 size={13} /> Stage all</button>
  </div>

  {#if ide.gitBranch}
    <div class="branch">On <strong>{ide.gitBranch}</strong></div>
  {/if}

  {#if ide.gitBranches.length}
    <select
      value={ide.gitBranch}
      onchange={(e) => ide.runGit('switch', { branch: e.currentTarget.value })}
    >
      {#each ide.gitBranches as name (name)}
        <option value={name}>{name}</option>
      {/each}
    </select>
  {/if}

  <div class="row">
    <input placeholder="New branch…" bind:value={branch} />
    <button onclick={createBranch}><GitBranchPlus size={13} /> Create</button>
  </div>

  <div class="row">
    <input placeholder="Commit message…" bind:value={message} />
    <button onclick={commit}><GitCommitVertical size={13} /> Commit</button>
  </div>

  <pre class="output">{ide.gitOutput || 'No git output yet.'}</pre>
</div>

<style>
  .git { display: flex; flex-direction: column; gap: 6px; padding: 8px; height: 100%; min-height: 0; }
  .row { display: flex; gap: 4px; }
  .row input, select { flex: 1; min-width: 0; background: var(--ide-input); border: 1px solid var(--ide-border); color: var(--ide-fg); border-radius: 3px; padding: 4px 6px; font-size: 12px; }
  button { display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; background: var(--ide-panel); border: 1px solid var(--ide-border); color: var(--ide-fg); border-radius: 3px; cursor: pointer; padding: 4px 8px; font-size: 12px; }
  button:hover { background: var(--ide-hover); }
  .branch { font-size: 12px; color: var(--ide-muted); }
  .output { flex: 1; overflow: auto; margin: 0; padding: 6px; background: var(--ide-input); border-radius: 3px; font-size: 11px; white-space: pre-wrap; color: var(--ide-fg); }
</style>
