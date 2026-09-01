<script>
  import { onDestroy } from 'svelte'
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import { ArrowUp, Loader, Sparkles, Check, ChevronDown, Square } from 'lucide-svelte'

  // Codex and Claude are both agents running inside a tmux session, so the
  // "provider" is really which session the prompt is delivered to.
  let { sessions = [], session = '', rootPath = '' } = $props()

  let question = $state('')
  let target = $state(session || sessions[0] || '')
  let sending = $state(false)
  let messages = $state([])
  let error = $state('')
  let listEl = $state(null)
  let textareaEl = $state(null)
  let timer = null

  // Agent / model / effort for the target session, served in one call.
  let config = $state({ agent: 'codex', available: [], model: '', effort: '', models: [], efforts: [] })
  let menu = $state('')          // '' | 'agent' | 'model' | 'effort'
  let switching = $state('')

  const modelLabel = $derived(
    (config.models.find((m) => m[0] === config.model) || [])[1] || config.model || 'default',
  )

  async function loadConfig() {
    if (!target) return
    try {
      // Replace rather than merge: merging left the PREVIOUS session's model
      // catalogue and effort levels in place, so a Claude session could render
      // Codex's options and POST one its API rejects.
      config = { agent: 'codex', available: [], model: '', effort: '', models: [], efforts: [],
                 ...(await api.sessionAgent(target)) }
    } catch (exc) {
      // Clear the controls instead of showing another session's options.
      config = { agent: config.agent, available: [], model: '', effort: '', models: [], efforts: [] }
      ide.setStatus(exc.message || 'Could not read agent settings')
    }
  }

  async function loadMessages() {
    if (!target) return
    try {
      const data = await api.chat(target)
      const next = data.messages || []
      const grew = next.length !== messages.length
      messages = next
      error = ''
      if (grew) queueMicrotask(scrollToEnd)
    } catch (exc) {
      error = exc.message || 'Could not load chat'
    }
  }

  function scrollToEnd() {
    if (listEl) listEl.scrollTop = listEl.scrollHeight
  }

  $effect(() => {
    const current = target
    messages = []
    if (timer) clearInterval(timer)
    if (!current) return
    loadMessages()
    loadConfig()
    timer = setInterval(loadMessages, 3000)
  })

  onDestroy(() => { if (timer) clearInterval(timer) })

  async function pickAgent(agent) {
    menu = ''
    if (agent === config.agent) return
    switching = 'agent'
    try {
      await api.setSessionAgent(target, agent)
      // The pane is relaunching; re-read rather than trusting the optimistic value.
      await loadConfig()
      ide.setStatus(`Switched to ${agent}`)
    } catch (exc) {
      ide.setStatus(exc.message || 'Could not switch agent')
    } finally {
      switching = ''
    }
  }

  async function pickModel(model) {
    menu = ''
    if (model === config.model) return
    switching = 'model'
    try {
      await api.setSessionModel(target, model)
      await loadConfig()
      ide.setStatus(`Model set to ${model}`)
    } catch (exc) {
      ide.setStatus(exc.message || 'Could not change model')
    } finally {
      switching = ''
    }
  }

  async function pickEffort(effort) {
    menu = ''
    if (effort === config.effort) return
    switching = 'effort'
    try {
      await api.setSessionEffort(target, effort)
      await loadConfig()
      ide.setStatus(`Reasoning effort set to ${effort}`)
    } catch (exc) {
      ide.setStatus(exc.message || 'Could not change effort')
    } finally {
      switching = ''
    }
  }

  function buildPrompt() {
    const c = ide.connection || {}
    const tab = ide.activeTab
    const where = tab ? tab.path : ide.path || '.'
    const body = tab
      ? `\nActive file contents (first 12,000 characters):\n${tab.content.slice(0, 12000)}`
      : ''
    const targetLine = c.kind === 'local'
      ? `Local workspace: ${c.workspace_root || '.'}`
      : `SSH target: ${c.username || '?'}@${c.host || '?'}`
    return `[Remote IDE context]\n${targetLine}\nPath: ${where}${body}\n\n${question.trim()}`
  }

  async function send() {
    const text = question.trim()
    if (!text || !target || sending) return
    const prompt = buildPrompt()
    sending = true
    try {
      const response = await fetch(
        `${rootPath}/api/sessions/${encodeURIComponent(target)}/send`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ command: prompt }),
        },
      )
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'Could not send')
      question = ''
      if (textareaEl) textareaEl.style.height = 'auto'
      messages = [...messages, { role: 'user', text, ts: Date.now() / 1000, _local: true }]
      queueMicrotask(scrollToEnd)
      setTimeout(loadMessages, 1200)
    } catch (exc) {
      ide.setStatus(exc.message || 'Could not send prompt')
    } finally {
      sending = false
    }
  }

  function onKey(event) {
    // Enter sends, Shift+Enter makes a newline — the Claude Code convention.
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      send()
    }
  }

  function autoGrow(event) {
    const el = event.currentTarget
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`
  }

  const escapeHtml = (text) =>
    text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  /**
   * Render the small slice of markdown agents actually emit: fenced code,
   * inline code, bold, and bullet lists. Deliberately hand-rolled rather than
   * pulling a parser into the bundle — everything is escaped BEFORE any tag is
   * introduced, so agent output can never inject markup.
   */
  function renderMarkdown(raw) {
    const blocks = []
    // Pull fenced code out first so its contents are never touched by the
    // inline rules below.
    const withFences = escapeHtml(raw).replace(/```(\w*)\n?([\s\S]*?)```/g, (_m, lang, code) => {
      blocks.push(
        `<pre class="chat-code"><code>${code.replace(/\n$/, '')}</code></pre>`,
      )
      return `\u0000BLOCK${blocks.length - 1}\u0000`
    })
    const inline = withFences
      .replace(/`([^`\n]+)`/g, '<code class="chat-inline">$1</code>')
      .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
      .split('\n')
      .map((line) => {
        const bullet = line.match(/^\s*[-*]\s+(.*)$/)
        if (bullet) return `<span class="chat-li">${bullet[1]}</span>`
        return line
      })
      .join('\n')
    return inline.replace(/\u0000BLOCK(\d+)\u0000/g, (_m, i) => blocks[Number(i)])
  }

  function displayText(message) {
    const text = message.full || message.text || ''
    const marker = '\n\n'
    if (text.startsWith('[Remote IDE context]') || text.startsWith('[Remote SSH IDE context]')) {
      const at = text.lastIndexOf(marker)
      if (at !== -1) return text.slice(at + marker.length)
    }
    return text
  }
</script>

<svelte:window onclick={(e) => { if (!e.target.closest?.('[data-menu]')) menu = '' }} />

<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg">
  <!-- Header: which session answers -->
  <div class="flex items-center gap-2 border-b border-mk-line px-3 py-1.5">
    <Sparkles size={13} class="shrink-0 text-mk-green" />
    <span class="text-[11px] font-semibold tracking-wide text-mk-muted uppercase">Chat</span>
    <select
      class="ml-auto min-w-0 max-w-[55%] truncate rounded-sm border border-mk-line bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg outline-none focus:border-mk-green"
      bind:value={target}
      title="Agent session that answers"
    >
      {#each sessions as name (name)}
        <option value={name}>{name}</option>
      {/each}
    </select>
  </div>

  <!-- Transcript -->
  <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3" bind:this={listEl}>
    {#if error}
      <p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink">{error}</p>
    {/if}
    {#each messages as message, index (message.ts + ':' + index)}
      {#if message.role === 'assistant'}
        <!-- Assistant turns read as flowing prose with a speaker label, the way
             Claude Code renders replies — not as chat bubbles. -->
        <div class="flex flex-col gap-1.5">
          <span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green">
            <Sparkles size={11} />
            {config.agent === 'claude' ? 'Claude' : 'Codex'}
          </span>
          <div class="chat-prose text-[13px] leading-relaxed text-mk-fg">
            {@html renderMarkdown(displayText(message))}
          </div>
        </div>
      {:else}
        <!-- The user's own turn: a quiet left rule rather than a bubble, so a
             long prompt does not dominate the column. -->
        <div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5">
          <span class="text-[11px] font-semibold text-mk-blue">You</span>
          <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90">
            {displayText(message)}
          </div>
        </div>
      {/if}
    {:else}
      {#if !error}
        <div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center">
          <Sparkles size={26} strokeWidth={1.3} class="text-mk-line" />
          <p class="text-xs leading-relaxed text-mk-comment">
            Ask about the file you have open. The prompt goes to
            <span class="text-mk-muted">{target || 'the selected session'}</span>,
            and the reply appears here.
          </p>
        </div>
      {/if}
    {/each}
    {#if sending}
      <div class="flex items-center gap-2 text-[11px] text-mk-comment">
        <Loader size={11} class="animate-spin" /> Working…
      </div>
    {/if}
  </div>

  <!-- Composer: input first, controls beneath — the Claude Code arrangement -->
  <div class="border-t border-mk-line p-2">
    <div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green">
      <textarea
        bind:this={textareaEl}
        bind:value={question}
        onkeydown={onKey}
        oninput={autoGrow}
        rows="2"
        class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment"
        placeholder="Ask about this workspace…"
      ></textarea>

      <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]">
        <!-- Agent -->
        <div class="relative" data-menu>
          <button
            class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg"
            onclick={() => (menu = menu === 'agent' ? '' : 'agent')}
            title="Agent"
          >
            {config.agent === 'claude' ? 'Claude' : 'Codex'}
            <ChevronDown size={11} />
          </button>
          {#if menu === 'agent'}
            <div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl">
              {#each (config.available.length ? config.available : ['codex']) as name (name)}
                <button
                  class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"
                  onclick={() => pickAgent(name)}
                >
                  <span class="w-3 text-mk-green">{#if name === config.agent}<Check size={11} />{/if}</span>
                  {name === 'claude' ? 'Claude' : 'Codex'}
                </button>
              {/each}
            </div>
          {/if}
        </div>

        {#if config.models.length}
          <!-- Model: Codex model ids, or Claude's aliases -->
          <div class="relative" data-menu>
            <button
              class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg"
              onclick={() => (menu = menu === 'model' ? '' : 'model')}
              title="Model"
            >
              <span class="truncate">{modelLabel}</span>
              <ChevronDown size={11} class="shrink-0" />
            </button>
            {#if menu === 'model'}
              <div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl">
                {#each config.models as row (row[0])}
                  <button
                    class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"
                    onclick={() => pickModel(row[0])}
                  >
                    <span class="w-3 text-mk-green">{#if row[0] === config.model}<Check size={11} />{/if}</span>
                    <span class="truncate">{row[1]}</span>
                  </button>
                {/each}
              </div>
            {/if}
          </div>
        {/if}

        {#if config.efforts.length}
          <!-- Reasoning effort -->
          <div class="relative" data-menu>
            <button
              class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg"
              onclick={() => (menu = menu === 'effort' ? '' : 'effort')}
              title="Reasoning effort"
            >
              {config.effort || 'effort'}
              <ChevronDown size={11} />
            </button>
            {#if menu === 'effort'}
              <div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl">
                {#each config.efforts as level (level)}
                  <button
                    class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"
                    onclick={() => pickEffort(level)}
                  >
                    <span class="w-3 text-mk-green">{#if level === config.effort}<Check size={11} />{/if}</span>
                    {level}
                  </button>
                {/each}
              </div>
            {/if}
          </div>
        {/if}

        {#if switching}
          <Loader size={11} class="animate-spin text-mk-muted" />
        {/if}

        <span class="ml-auto flex items-center gap-1.5">
          <kbd class="hidden text-[10px] text-mk-comment sm:inline">↵ send · ⇧↵ newline</kbd>
          <button
            class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40"
            onclick={send}
            disabled={sending || !question.trim()}
            title="Send (Enter)"
            aria-label="Send"
          >
            {#if sending}<Square size={11} />{:else}<ArrowUp size={13} />{/if}
          </button>
        </span>
      </div>
    </div>
  </div>
</div>

<style>
  /* Markdown emitted by the agent. Colours come from the Monokai tokens so a
     code span in chat matches the same span in the editor. */
  .chat-prose :global(.chat-code) {
    margin: 6px 0;
    padding: 7px 9px;
    background: var(--color-mk-input);
    border: 1px solid var(--color-mk-line);
    border-radius: 4px;
    overflow-x: auto;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 11.5px;
    line-height: 1.5;
    color: var(--color-mk-fg);
  }
  .chat-prose :global(.chat-inline) {
    padding: 1px 4px;
    background: var(--color-mk-line);
    border-radius: 3px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 11.5px;
    color: var(--color-mk-yellow);
  }
  .chat-prose :global(strong) { color: var(--color-mk-fg); font-weight: 650; }
  .chat-prose :global(.chat-li) { display: block; padding-left: 12px; text-indent: -12px; }
  .chat-prose :global(.chat-li)::before { content: '•'; color: var(--color-mk-green); padding-right: 6px; }
  /* Only the non-code text wraps; a long code line scrolls instead. */
  .chat-prose { white-space: pre-wrap; overflow-wrap: anywhere; }
  .chat-prose :global(.chat-code) { white-space: pre; }
</style>
