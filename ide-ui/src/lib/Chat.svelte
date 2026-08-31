<script>
  import { ide } from './store.svelte.js'

  // Codex and Claude are both agents running inside a tmux session, so the
  // "provider" is really which session the prompt is delivered to. There is no
  // separate Claude API here; sending to a Claude-backed session is what routes
  // the question to Claude.
  let { sessions = [], session = '', rootPath = '' } = $props()

  let question = $state('')
  let target = $state(session)
  let sending = $state(false)

  $effect(() => {
    if (!target && session) target = session
  })

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
      ide.chatMessages = [
        ...ide.chatMessages,
        { role: 'user', text, target, at: Date.now() },
      ]
      question = ''
    } catch (error) {
      ide.setStatus(error.message || 'Could not send prompt')
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

  <div class="messages">
    {#each ide.chatMessages as message (message.at)}
      <div class="msg user">
        <div class="meta">→ {message.target}</div>
        {message.text}
      </div>
    {:else}
      <p class="empty">
        Ask about the active remote file. The prompt is delivered to the selected
        agent session — pick a Codex session or a Claude session to choose which
        assistant answers. Replies appear in that session's pane.
      </p>
    {/each}
  </div>

  <div class="compose">
    <textarea
      bind:value={question}
      onkeydown={onKey}
      placeholder="Ask about the active remote file… (⌘/Ctrl+Enter to send)"
    ></textarea>
    <button onclick={send} disabled={sending || !question.trim()}>
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
  .msg { padding: 7px 9px; border-radius: 7px; font-size: 12px; white-space: pre-wrap; overflow-wrap: anywhere; background: var(--ide-panel); }
  .msg .meta { font-size: 10px; color: var(--ide-muted); margin-bottom: 3px; }
  .empty { color: var(--ide-muted); font-size: 12px; line-height: 1.5; padding: 4px; }
  .compose { display: flex; gap: 6px; padding: 8px; border-top: 1px solid var(--ide-border); }
  .compose textarea { flex: 1; min-height: 54px; max-height: 160px; resize: vertical; padding: 6px; font: inherit; font-size: 12px; }
  .compose button { background: var(--ide-accent); border: 0; color: #272822; border-radius: 3px; cursor: pointer; padding: 0 12px; font-weight: 600; }
  .compose button:disabled { opacity: .5; cursor: default; }
</style>
