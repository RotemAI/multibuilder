<script>
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import {
    Check, RefreshCw, Ellipsis, ChevronDown, ChevronRight, Plus, Minus,
    Undo2, FileDiff, ArrowDownUp, GitBranch, Loader, History,
  } from 'lucide-svelte'

  let message = $state('')
  let branchName = $state('')
  let showBranchInput = $state(false)
  let changesOpen = $state(true)
  let stagedOpen = $state(true)
  let historyOpen = $state(false)
  let menuOpen = $state(false)

  // `git status --short --branch` lines are "XY path"; the first line is the
  // branch header. X is the index (staged) state, Y the worktree state — VS
  // Code splits the list on exactly that distinction.
  const parsed = $derived(
    (ide.gitStatus || '')
      .split('\n')
      .filter((line) => line && !line.startsWith('##'))
      .map((line) => {
        // A rename is reported as "R  old -> new"; the new path is the one that
        // exists on disk, so it is the one to stage, diff or open.
        const raw = line.slice(3)
        const arrow = raw.indexOf(' -> ')
        // Do NOT trim the path: a filename may legitimately begin or end with a
        // space, and trimming produced a pathspec git could not match.
        const path = arrow === -1 ? raw : raw.slice(arrow + 4)
        return {
          index: line[0] === ' ' ? '' : line[0],
          work: line[1] === ' ' ? '' : line[1],
          code: line.slice(0, 2).trim() || '??',
          path: path.replace(/\r$/, ''),
          from: arrow === -1 ? '' : raw.slice(0, arrow),
        }
      })
      .filter((item) => item.path),
  )

  // Untracked is "??": both columns are '?', so it is a worktree change only.
  // A file can be in BOTH lists ("MM" = staged edit plus a newer unstaged one),
  // which is exactly what VS Code shows, so these are two filters rather than
  // a partition.
  const staged = $derived(parsed.filter((c) => c.index && c.index !== '?'))
  const changes = $derived(parsed.filter((c) => c.work && c.work !== ' '))

  // VS Code's letter colours: green added, yellow modified, red deleted.
  const tone = (code) => {
    if (code.includes('?') || code.includes('A')) return 'text-vs-green'
    if (code.includes('D')) return 'text-vs-red'
    if (code.includes('R')) return 'text-vs-blue'
    return 'text-vs-yellow'
  }

  const fileName = (path) => path.split('/').pop()
  const fileDir = (path) => {
    const parts = path.split('/')
    parts.pop()
    return parts.join('/')
  }

  async function run(action, extra = {}) {
    ide.gitBusy = action
    try {
      return await ide.runGit(action, extra)
    } finally {
      ide.gitBusy = ''
    }
  }

  async function commit() {
    if (!message.trim() || !staged.length) return
    const result = await run('commit', { message: message.trim() })
    if (result) message = ''
  }

  async function createBranch() {
    if (!branchName.trim()) return
    const result = await run('create_branch', { branch: branchName.trim() })
    if (result) {
      branchName = ''
      showBranchInput = false
    }
  }

  async function discard(item) {
    if (!confirm(`Discard changes in ${item.path}? This cannot be undone.`)) return
    await run('discard', { files: [item.path] })
  }

  /** Open a file's diff as a read-only editor tab. */
  async function openDiff(item) {
    const result = await ide.runGit('diff_file', { files: [item.path] })
    if (result) ide.openDiffTab(item.path, result.output || 'No changes to show.')
  }

  // Load the log lazily: history costs a round trip to the remote host, so
  // fetch it when the section is first opened rather than on every status poll.
  async function toggleHistory() {
    historyOpen = !historyOpen
    if (historyOpen && !ide.gitHistoryLoaded) await run('log')
  }

  // Refetch whenever the section is open and the cache was invalidated by a
  // commit, switch or pull -- otherwise the list silently goes stale.
  $effect(() => {
    if (historyOpen && !ide.gitHistoryLoaded && !ide.notARepo && !ide.gitBusy) run('log')
  })

  async function openCommit(entry) {
    const result = await ide.runGit('show', { ref: entry.hash })
    if (result) ide.openDiffTab(`${entry.short} ${entry.subject}`, result.output || 'Empty commit.')
  }

  // "HEAD -> main, origin/main, tag: v1" -> the chips shown beside a subject.
  const refChips = (refs) =>
    (refs || '')
      .split(',')
      .map((r) => r.trim().replace(/^HEAD -> /, ''))
      .filter(Boolean)

  function onMessageKey(event) {
    // Ctrl/Cmd+Enter commits, exactly as in VS Code's message box.
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault()
      commit()
    }
  }
</script>

<svelte:window onclick={(e) => { if (!e.target.closest?.('[data-scm-menu]')) menuOpen = false }} />

<div class="flex h-full min-h-0 flex-col">
  <div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">
    <span class="flex-1">Source Control</span>
    <div class="relative" data-scm-menu>
      <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"
        onclick={() => (menuOpen = !menuOpen)}><Ellipsis size={14} /></button>
      {#if menuOpen}
        <div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl">
          <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover"
            onclick={() => { menuOpen = false; run('fetch') }}>Fetch</button>
          <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover"
            onclick={() => { menuOpen = false; run('pull') }}>Pull</button>
          <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover"
            onclick={() => { menuOpen = false; run('push') }}>Push</button>
          <div class="my-1 h-px bg-vs-line"></div>
          <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover"
            onclick={() => { menuOpen = false; showBranchInput = !showBranchInput }}>Create Branch…</button>
        </div>
      {/if}
    </div>
  </div>

  {#if ide.notARepo}
    <p class="mx-3 text-xs leading-relaxed text-vs-muted">
      This folder isn't a Git repository.<br />
      Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.
    </p>
  {:else}
    <!-- Commit box -->
    <div class="px-3 pb-2">
      <textarea
        class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted"
        rows="2"
        placeholder={`Message (Ctrl+Enter to commit on "${ide.gitBranch || 'branch'}")`}
        bind:value={message}
        onkeydown={onMessageKey}
      ></textarea>
      <button
        class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"
        onclick={commit}
        disabled={!message.trim() || !staged.length || ide.gitBusy === 'commit'}
        title={staged.length ? 'Commit staged changes' : 'Stage a change first'}
      >
        {#if ide.gitBusy === 'commit'}<Loader size={12} class="animate-spin" />{:else}<Check size={12} />{/if}
        Commit
      </button>
    </div>

    <!-- Staged -->
    {#if staged.length}
      <div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover">
        <button class="flex min-w-0 flex-1 items-center gap-1 text-left"
          onclick={() => (stagedOpen = !stagedOpen)}>
          {#if stagedOpen}<ChevronDown size={14} class="text-vs-muted" />{:else}<ChevronRight size={14} class="text-vs-muted" />{/if}
          <span class="truncate">Staged Changes</span>
        </button>
        <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold">{staged.length}</span>
      </div>
      {#if stagedOpen}
        {#each staged as item (item.path)}
          <div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover"
            onclick={() => openDiff(item)}
            onkeydown={(e) => { if (e.key === 'Enter') openDiff(item) }}
            role="button" tabindex="0" title={item.path}>
            <span class="truncate text-vs-fg">{fileName(item.path)}</span>
            <span class="truncate text-[11px] text-vs-muted">{fileDir(item.path)}</span>
            <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex">
              <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg"
                title="Unstage" aria-label="Unstage {item.path}"
                onclick={(e) => { e.stopPropagation(); run('unstage', { files: [item.path] }) }}>
                <Minus size={13} />
              </button>
            </span>
            <span class="shrink-0 font-mono text-[11px] {tone(item.code)}">{item.index || item.code}</span>
          </div>
        {/each}
      {/if}
    {/if}

    <!-- Changes -->
    <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover">
      <button class="flex min-w-0 flex-1 items-center gap-1 text-left"
        onclick={() => (changesOpen = !changesOpen)}>
        {#if changesOpen}<ChevronDown size={14} class="text-vs-muted" />{:else}<ChevronRight size={14} class="text-vs-muted" />{/if}
        <span class="truncate">Changes</span>
      </button>
      <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100">
        <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"
          onclick={() => run('status')}><RefreshCw size={12} /></button>
        <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"
          onclick={() => run('stage', { files: ['.'] })}><Plus size={13} /></button>
      </span>
      <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold">{changes.length}</span>
    </div>

    {#if changesOpen}
      <div class="min-h-0 flex-1 overflow-y-auto">
        {#each changes as item (item.path)}
          <div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover"
            onclick={() => openDiff(item)}
            onkeydown={(e) => { if (e.key === 'Enter') openDiff(item) }}
            role="button" tabindex="0" title={item.path}>
            <span class="truncate text-vs-fg">{fileName(item.path)}</span>
            <span class="truncate text-[11px] text-vs-muted">{fileDir(item.path)}</span>
            <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex">
              <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg"
                title="Open changes" aria-label="Open changes to {item.path}"
                onclick={(e) => { e.stopPropagation(); openDiff(item) }}><FileDiff size={13} /></button>
              <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red"
                title="Discard changes" aria-label="Discard changes to {item.path}"
                onclick={(e) => { e.stopPropagation(); discard(item) }}><Undo2 size={13} /></button>
              <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg"
                title="Stage changes" aria-label="Stage {item.path}"
                onclick={(e) => { e.stopPropagation(); run('stage', { files: [item.path] }) }}><Plus size={13} /></button>
            </span>
            <span class="shrink-0 font-mono text-[11px] {tone(item.code)}">{item.work || item.code}</span>
          </div>
        {:else}
          <p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>
        {/each}
      </div>
    {/if}

    <!-- History: collapsed by default, fetched on first open. -->
    <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover">
      <button class="flex min-w-0 flex-1 items-center gap-1 text-left" onclick={toggleHistory}>
        {#if historyOpen}<ChevronDown size={14} class="text-vs-muted" />{:else}<ChevronRight size={14} class="text-vs-muted" />{/if}
        <History size={12} class="shrink-0 text-vs-muted" />
        <span class="truncate">History</span>
      </button>
      {#if historyOpen}
        <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100">
          <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"
            onclick={() => run('log')}>
            {#if ide.gitBusy === 'log'}<Loader size={12} class="animate-spin" />{:else}<RefreshCw size={12} />{/if}
          </button>
        </span>
        {#if ide.gitCommits.length}
          <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold">{ide.gitCommits.length}</span>
        {/if}
      {/if}
    </div>

    {#if historyOpen}
      <div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto">
        {#each ide.gitCommits as entry (entry.hash)}
          <div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover"
            onclick={() => openCommit(entry)}
            onkeydown={(e) => { if (e.key === 'Enter') openCommit(entry) }}
            role="button" tabindex="0" title={`${entry.short} · ${entry.author} · ${entry.date}`}>
            <div class="flex min-w-0 items-center gap-1.5">
              <span class="truncate text-vs-fg">{entry.subject}</span>
              {#each refChips(entry.refs) as chip}
                <span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue">{chip}</span>
              {/each}
            </div>
            <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted">
              <span class="shrink-0 font-mono text-vs-yellow">{entry.short}</span>
              <span class="truncate">{entry.author}</span>
              <span class="ml-auto shrink-0">{entry.relative}</span>
            </div>
          </div>
        {:else}
          <p class="px-6 py-2 text-xs text-vs-muted">
            {ide.gitBusy === 'log' ? 'Loading history…' : 'No commits yet.'}
          </p>
        {/each}
      </div>
    {/if}

    <!-- Branch + sync, mirroring VS Code's status bar -->
    <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]">
      <span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch">
        <GitBranch size={12} class="shrink-0" />
        <span class="truncate">{ide.gitBranch || '—'}</span>
      </span>
      {#if ide.gitHasUpstream}
        <button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg"
          title="Pull then push" onclick={() => run('pull').then(() => run('push'))}>
          {#if ide.gitBusy === 'pull' || ide.gitBusy === 'push'}
            <Loader size={11} class="animate-spin" />
          {:else}
            <ArrowDownUp size={11} />
          {/if}
          {ide.gitBehind}↓ {ide.gitAhead}↑
        </button>
      {/if}
    </div>

    {#if showBranchInput}
      <div class="flex gap-1 border-t border-vs-line px-3 py-2">
        <input
          class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent"
          placeholder="New branch name" bind:value={branchName}
          onkeydown={(e) => { if (e.key === 'Enter') createBranch(); if (e.key === 'Escape') showBranchInput = false }} />
        <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white" onclick={createBranch}>Create</button>
      </div>
    {/if}

    {#if ide.gitOutput}
      <pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted">{ide.gitOutput}</pre>
    {/if}
  {/if}
</div>
