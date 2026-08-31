<script>
  import { onDestroy } from 'svelte'
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import { Send, Loader } from 'lucide-svelte'

  // Codex and Claude are both agents running inside a tmux session, so the
  // "provider" is really which session the prompt is delivered to. There is no
  // separate Claude API here; sending to a Claude-backed session is what routes
  // the question to Claude.
  let { sessions = [], session = '', rootPath = '' } = $props()

  let question = $state('')
  let target = $state(session || sessions[0] || '')
  let sending = $state(false)
  let messages = $state([])
  let error = $state('')
  let listEl = $state(null)
  let timer = null

  // Replies appear in the agent's pane, so the panel polls the session's
  // message store instead of only showing what the user typed.
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
    // Re-poll whenever the target session changes.
    const current = target
    messages = []
    if (timer) clearInterval(timer)
    if (!current) return
    loadMessages()
    timer = setInterval(loadMessages, 3000)
  })

  onDestroy(() => { if (timer) clearInterval(timer) })

  function buildPrompt() {
    const c = ide.connection || {}
    const tab = ide.activeTab
    const where = tab ? tab.path : ide.path || '.'
    const body = tab
      ? `\nActive file contents (first 12,000 characters):\n${tab.content.slice(0, 12000)}`
      : ''
    return `[Remote SSH IDE context]\nSSH target: ${c.username || '?'}@${c.host || '?'}\nRemote path: ${where}${body}\n\n${question.trim()}`
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
      // Show the question immediately; the poll reconciles it with the
      // server's own copy once the agent records it.
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
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      send()
    }
  }

  // Strip the IDE context preamble so the panel shows what was actually asked.
  function displayText(message) {
    const text = message.full || message.text || ''
    const marker = '\n\n'
    if (text.startsWith('[Remote SSH IDE context]')) {
      const at = text.lastIndexOf(marker)
      if (at !== -1) return text.slice(at + marker.length)
    }
    return text
  }
</script>

<div class="chat">
  <div class="head">
    <span class="title">AI chat</span>
    <select bind:value={target} title="Agent session to send to">
      {#each sessions as name (name)}
        <option value={name}>{name}</option>
      {/each}
    </select>
  </div>

  <div class="messages" bind:this={listEl}>
    {#if error}
      <p class="error">{error}</p>
    {/if}
    {#each messages as message, index (message.ts + ':' + index)}
      <div class="msg {message.role === 'assistant' ? 'assistant' : 'user'}">
        {displayText(message)}
      </div>
    {:else}
      {#if !error}
        <p class="empty">
          Ask about the active remote file. The prompt is delivered to the selected
          agent session — pick a Codex session or a Claude session to choose which
          assistant answers, and replies appear here.
        </p>
      {/if}
    {/each}
  </div>

  <div class="compose">
    <textarea
      bind:value={question}
      onkeydown={onKey}
      placeholder="Ask about the active remote file… (⌘/Ctrl+Enter to send)"
    ></textarea>
    <button onclick={send} disabled={sending || !question.trim()}>
      {#if sending}<Loader size={13} />{:else}<Send size={13} />{/if}
      {sending ? 'Sending…' : 'Send'}
    </button>
  </div>
</div>

<style>
  .chat { display: flex; flex-direction: column; height: 100%; min-height: 0; }
  .head { display: flex; align-items: center; gap: 6px; padding: 8px; border-bottom: 1px solid var(--ide-border); }
  .title { font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: var(--ide-muted); font-weight: 650; }
  select, textarea { background: var(--ide-input); border: 1px solid var(--ide-border); color: var(--ide-fg); border-radius: 3px; font-size: 12px; }
  select { flex: 1; min-width: 0; padding: 3px 4px; }
  .messages { flex: 1; overflow-y: auto; padding: 8px; display: flex; flex-direction: column; gap: 8px; }
  .msg { padding: 7px 9px; border-radius: 7px; font-size: 12px; white-space: pre-wrap; overflow-wrap: anywhere; max-width: 92%; }
  .msg.user { background: #3e3d32; color: var(--ide-fg); align-self: flex-end; }
  .msg.assistant { background: var(--ide-input); color: var(--ide-fg); align-self: flex-start; border: 1px solid var(--ide-border); }
  .error { color: #f92672; font-size: 12px; padding: 4px; margin: 0; }
  .msg .meta { font-size: 10px; color: var(--ide-muted); margin-bottom: 3px; }
  .empty { color: var(--ide-muted); font-size: 12px; line-height: 1.5; padding: 4px; }
  .compose { display: flex; gap: 6px; padding: 8px; border-top: 1px solid var(--ide-border); }
  .compose textarea { flex: 1; min-height: 54px; max-height: 160px; resize: vertical; padding: 6px; font: inherit; font-size: 12px; }
  .compose button { display: inline-flex; align-items: center; gap: 5px; background: var(--ide-accent); border: 0; color: #272822; border-radius: 3px; cursor: pointer; padding: 0 12px; font-weight: 600; }
  .compose button:disabled { opacity: .5; cursor: default; }
</style>
