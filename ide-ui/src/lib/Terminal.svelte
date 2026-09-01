<script>
  import { onMount, onDestroy } from 'svelte'
  import { ide } from './store.svelte.js'
  import { monokai } from './monokai.js'

  let { rootPath = '', session = '' } = $props()

  let container
  let term = null
  let fit = null
  let socket = null
  let status = $state('connecting')
  let resizeObserver = null
  let retry = 0
  let retryTimer = null
  let disposed = false

  // xterm's palette, matched to the Monokai editor theme so the terminal does
  // not read as a different application.
  const THEME = {
    background: monokai.colors['editor.background'],
    foreground: monokai.colors['editor.foreground'],
    cursor: monokai.colors['editorCursor.foreground'],
    selectionBackground: monokai.colors['editor.selectionBackground'],
    black: '#272822', red: '#f92672', green: '#a6e22e', yellow: '#e6db74',
    blue: '#66d9ef', magenta: '#ae81ff', cyan: '#a1efe4', white: '#f8f8f2',
    brightBlack: '#75715e', brightRed: '#f92672', brightGreen: '#a6e22e',
    brightYellow: '#e6db74', brightBlue: '#66d9ef', brightMagenta: '#ae81ff',
    brightCyan: '#a1efe4', brightWhite: '#f9f8f5',
  }

  function sendResize() {
    if (!fit || !term || socket?.readyState !== WebSocket.OPEN) return
    try {
      fit.fit()
      socket.send(JSON.stringify({ type: 'resize', cols: term.cols, rows: term.rows }))
    } catch {
      /* a resize before the pane has layout is not worth surfacing */
    }
  }

  /** Attach to the session's tmux window, retrying if the socket drops.
   *
   * The shell itself lives in tmux on the server, so a dropped WebSocket is a
   * lost *view*, not a lost session — reconnecting re-attaches to the very same
   * window with its history and working directory intact.
   */
  function connect() {
    if (disposed) return
    const scheme = location.protocol === 'https:' ? 'wss' : 'ws'
    const url =
      `${scheme}://${location.host}${rootPath}/ws/sessions/` +
      `${encodeURIComponent(session)}/ide/terminal/${encodeURIComponent(ide.connectionId)}`
    socket = new WebSocket(url)
    socket.binaryType = 'arraybuffer'

    socket.onopen = () => {
      status = 'connected'
      retry = 0
      sendResize()
    }
    socket.onmessage = (event) => {
      term.write(
        typeof event.data === 'string' ? event.data : new Uint8Array(event.data),
      )
    }
    socket.onclose = (event) => {
      if (disposed) return
      // 1008 is a deliberate refusal (not signed in, or not your session) —
      // retrying can never succeed and just hammers the server. 1011 means the
      // workspace is gone; retry a few times, then stop with a real message
      // instead of an endless "reconnecting" that hides the cause.
      if (event.code === 1008) {
        status = 'refused'
        term?.write('\r\n\x1b[31m— not authorised for this terminal —\x1b[0m\r\n')
        return
      }
      if (retry >= 6) {
        status = 'closed'
        term?.write('\r\n\x1b[33m— terminal unavailable; reopen the panel to retry —\x1b[0m\r\n')
        return
      }
      status = 'reconnecting'
      // Back off up to 10s so a server restart does not spin the browser.
      const delay = Math.min(1000 * 2 ** retry, 10000)
      retry += 1
      retryTimer = setTimeout(connect, delay)
    }
    socket.onerror = () => { if (!disposed) status = 'error' }
  }

  onMount(async () => {
    const [{ Terminal }, { FitAddon }] = await Promise.all([
      import('@xterm/xterm'),
      import('@xterm/addon-fit'),
    ])
    await import('@xterm/xterm/css/xterm.css')

    term = new Terminal({
      theme: THEME,
      fontSize: 12,
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
      cursorBlink: true,
      scrollback: 5000,
    })
    fit = new FitAddon()
    term.loadAddon(fit)
    term.open(container)
    fit.fit()

    connect()

    // Keystrokes go as binary so the server never confuses them with the JSON
    // control messages used for resize.
    term.onData((data) => {
      if (socket?.readyState === WebSocket.OPEN) {
        socket.send(new TextEncoder().encode(data))
      }
    })

    resizeObserver = new ResizeObserver(() => sendResize())
    resizeObserver.observe(container)
  })

  onDestroy(() => {
    disposed = true
    if (retryTimer) clearTimeout(retryTimer)
    resizeObserver?.disconnect()
    socket?.close()
    term?.dispose()
  })
</script>

<div class="terminal-pane">
  <div class="bar">
    <span class="label">Terminal</span>
    <span class="status {status}">{status}</span>
  </div>
  <div class="screen" bind:this={container}></div>
</div>

<style>
  .terminal-pane { display: flex; flex-direction: column; height: 100%; min-height: 0; background: #272822; }
  .bar { display: flex; align-items: center; gap: 8px; padding: 4px 9px; background: var(--ide-panel); border-bottom: 1px solid var(--ide-border); }
  .label { font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: var(--ide-muted); font-weight: 650; }
  .status { font-size: 11px; margin-left: auto; color: var(--ide-muted); }
  .status.connected { color: var(--ide-accent); }
  .status.error, .status.closed { color: #f92672; }
  .status.reconnecting { color: #e6db74; }
  .status.refused { color: #f92672; }
  .screen { flex: 1; min-height: 0; padding: 4px 6px; overflow: hidden; }
</style>
