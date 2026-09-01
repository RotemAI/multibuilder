<script>
  import { ide } from './store.svelte.js'
  import { RefreshCw, FileDiff, FilePlus2, FileMinus2, GitCommitVertical, GitBranchPlus } from 'lucide-svelte'

  let message = $state('')
  let branch = $state('')
  let selected = $state({})

  // `git status --short --branch` lines look like "XY path"; the first line is
  // the branch header. Parse them so files can be staged individually rather
  // than only in bulk.
  const changes = $derived(
    (ide.gitStatus || '')
      .split('\n')
      .filter((line) => line && !line.startsWith('##'))
      .map((line) => ({ code: line.slice(0, 2).trim() || '??', path: line.slice(3).trim() }))
      .filter((item) => item.path),
  )

  const chosen = $derived(changes.filter((c) => selected[c.path]).map((c) => c.path))

  async function stageChosen(action) {
    if (!chosen.length) return
    await ide.runGit(action, { files: chosen })
    selected = {}
  }

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

  {#if ide.notARepo}
    <!-- Staging and committing are meaningless without a repository, so state
         the situation plainly instead of leaving dead controls on screen. -->
    <p class="empty-repo">
      This folder isn't a Git repository.<br />
      Open a folder containing a <code>.git</code> directory, or run
      <code>git init</code> in the terminal.
    </p>
  {:else}
  {#if ide.gitBranch}
    <div class="branch">On <strong>{ide.gitBranch}</strong></div>
  {/if}

  {#if changes.length}
    <ul class="changes">
      {#each changes as change (change.path)}
        <li>
          <label>
            <input type="checkbox" bind:checked={selected[change.path]} />
            <span class="code" class:staged={change.code[0] !== '?' && change.code[0] !== ' '}>{change.code}</span>
            <span class="file" title={change.path}>{change.path}</span>
          </label>
        </li>
      {/each}
    </ul>
    <div class="row">
      <button onclick={() => stageChosen('stage')} disabled={!chosen.length}>
        <FilePlus2 size={13} /> Stage ({chosen.length})
      </button>
      <button onclick={() => stageChosen('unstage')} disabled={!chosen.length}>
        <FileMinus2 size={13} /> Unstage
      </button>
    </div>
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
  {/if}
</div>

<style>
  .empty-repo { margin: 10px 8px; color: var(--ide-muted); font-size: 12px; line-height: 1.6; }
  .empty-repo code { background: var(--ide-input); padding: 1px 4px; border-radius: 3px; }
  .git { display: flex; flex-direction: column; gap: 6px; padding: 8px; height: 100%; min-height: 0; }
  .row { display: flex; gap: 4px; }
  .row input, select { flex: 1; min-width: 0; background: var(--ide-input); border: 1px solid var(--ide-border); color: var(--ide-fg); border-radius: 3px; padding: 4px 6px; font-size: 12px; }
  button { display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; background: var(--ide-panel); border: 1px solid var(--ide-border); color: var(--ide-fg); border-radius: 3px; cursor: pointer; padding: 4px 8px; font-size: 12px; }
  button:hover { background: var(--ide-hover); }
  .branch { font-size: 12px; color: var(--ide-muted); }
  .changes { list-style: none; margin: 0; padding: 0; max-height: 170px; overflow-y: auto; border: 1px solid var(--ide-border); border-radius: 3px; }
  .changes li label { display: flex; align-items: center; gap: 6px; padding: 3px 6px; font-size: 11px; cursor: pointer; }
  .changes li label:hover { background: var(--ide-hover); }
  .changes .code { color: var(--ide-muted); font-family: ui-monospace, monospace; min-width: 18px; }
  .changes .code.staged { color: var(--ide-accent); }
  .changes .file { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  button:disabled { opacity: .45; cursor: default; }
  .output { flex: 1; overflow: auto; margin: 0; padding: 6px; background: var(--ide-input); border-radius: 3px; font-size: 11px; white-space: pre-wrap; color: var(--ide-fg); }
</style>
