<script>
  import { onDestroy } from 'svelte'
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import { ArrowUp, Loader, Bot, Check, ChevronDown, Square } from 'lucide-svelte'

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

<div class="flex h-full min-h-0 flex-col bg-vs-panel">
  <!-- Session picker -->
  <div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5">
    <Bot size={13} class="shrink-0 text-vs-blue" />
    <select
      class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5 text-xs outline-none focus:border-vs-accent"
      bind:value={target}
      title="Agent session that answers"
    >
      {#each sessions as name (name)}
        <option value={name}>{name}</option>
      {/each}
    </select>
  </div>

  <!-- Transcript -->
  <div class="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-3 py-3" bind:this={listEl}>
    {#if error}
      <p class="rounded-sm bg-vs-red/10 px-2 py-1 text-xs text-vs-red">{error}</p>
    {/if}
    {#each messages as message, index (message.ts + ':' + index)}
      {#if message.role === 'assistant'}
        <!-- Assistant turns read as flowing text, not chat bubbles — matching
             how Claude Code renders replies in its VS Code panel. -->
        <div class="flex flex-col gap-1">
          <span class="flex items-center gap-1.5 text-[11px] font-semibold text-vs-blue">
            <Bot size={11} /> {config.agent === 'claude' ? 'Claude' : 'Codex'}
          </span>
          <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-vs-fg">{displayText(message)}</div>
        </div>
      {:else}
        <div class="self-end rounded-md border border-vs-line bg-vs-input px-2.5 py-1.5 text-[13px] whitespace-pre-wrap text-vs-fg max-w-[92%]">
          {displayText(message)}
        </div>
      {/if}
    {:else}
      {#if !error}
        <div class="m-auto flex max-w-[240px] flex-col items-center gap-2 text-center">
          <Bot size={28} strokeWidth={1.3} class="text-vs-line" />
          <p class="text-xs leading-relaxed text-vs-muted">
            Ask about the file you have open. The prompt goes to the selected session,
            and the reply appears here.
          </p>
        </div>
      {/if}
    {/each}
  </div>

  <!-- Composer: input first, controls underneath, like Claude Code -->
  <div class="border-t border-vs-border p-2">
    <div class="rounded-md border border-vs-line bg-vs-input focus-within:border-vs-accent">
      <textarea
        bind:this={textareaEl}
        bind:value={question}
        onkeydown={onKey}
        oninput={autoGrow}
        rows="2"
        class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-vs-fg outline-none placeholder:text-vs-muted"
        placeholder="Ask about this workspace…"
      ></textarea>

      <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]">
        <!-- Agent -->
        <div class="relative" data-menu>
          <button
            class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg"
            onclick={() => (menu = menu === 'agent' ? '' : 'agent')}
            title="Agent"
          >
            {config.agent === 'claude' ? 'Claude' : 'Codex'}
            <ChevronDown size={11} />
          </button>
          {#if menu === 'agent'}
            <div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl">
              {#each (config.available.length ? config.available : ['codex']) as name (name)}
                <button
                  class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-vs-fg hover:bg-vs-hover"
                  onclick={() => pickAgent(name)}
                >
                  <span class="w-3">{#if name === config.agent}<Check size={11} />{/if}</span>
                  {name === 'claude' ? 'Claude' : 'Codex'}
                </button>
              {/each}
            </div>
          {/if}
        </div>

        {#if config.models.length}
          <!-- Model: Codex model ids, or Claude's aliases (fable/opus/sonnet) -->
          <div class="relative" data-menu>
            <button
              class="flex max-w-[120px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg"
              onclick={() => (menu = menu === 'model' ? '' : 'model')}
              title="Model"
            >
              <span class="truncate">{modelLabel}</span>
              <ChevronDown size={11} class="shrink-0" />
            </button>
            {#if menu === 'model'}
              <div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl">
                {#each config.models as row (row[0])}
                  <button
                    class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-vs-fg hover:bg-vs-hover"
                    onclick={() => pickModel(row[0])}
                  >
                    <span class="w-3">{#if row[0] === config.model}<Check size={11} />{/if}</span>
                    <span class="truncate">{row[1]}</span>
                  </button>
                {/each}
              </div>
            {/if}
          </div>

        {/if}

        {#if config.efforts.length}
          <!-- Reasoning effort: gated separately from the model list so it
               still shows when an agent exposes one but not the other. -->
          <div class="relative" data-menu>
            <button
              class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg"
              onclick={() => (menu = menu === 'effort' ? '' : 'effort')}
              title="Reasoning effort"
            >
              {config.effort || 'effort'}
              <ChevronDown size={11} />
            </button>
            {#if menu === 'effort'}
              <div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl">
                {#each config.efforts as level (level)}
                  <button
                    class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-vs-fg hover:bg-vs-hover"
                    onclick={() => pickEffort(level)}
                  >
                    <span class="w-3">{#if level === config.effort}<Check size={11} />{/if}</span>
                    {level}
                  </button>
                {/each}
              </div>
            {/if}
          </div>
        {/if}

        {#if switching}
          <Loader size={11} class="animate-spin text-vs-muted" />
        {/if}

        <button
          class="ml-auto flex h-6 w-6 items-center justify-center rounded-md bg-vs-status text-white disabled:opacity-40"
          onclick={send}
          disabled={sending || !question.trim()}
          title="Send (Enter)"
          aria-label="Send"
        >
          {#if sending}<Square size={11} />{:else}<ArrowUp size={13} />{/if}
        </button>
      </div>
    </div>
  </div>
</div>
