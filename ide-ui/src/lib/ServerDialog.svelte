<script>
  let { rootPath = '', workspace, onclose, onsaved } = $props()

  const isLocal = workspace.kind === 'local'
  let saving = $state(false)
  let phase = $state('')
  let error = $state('')

  // Secrets are never sent to the browser, so these start empty and blank
  // means "keep what is stored" — it cannot mean "clear it".
  let form = $state({
    label: workspace.label || '',
    host: workspace.host || '',
    port: workspace.port || 22,
    username: workspace.username || '',
    identity_file: workspace.identity_file || '',
    password: '',
    private_key: '',
    workspace_root: workspace.workspace_root || '',
  })

  async function save() {
    saving = true
    error = ''
    phase = 'Saving…'
    try {
      const body = { ...form, port: Number(form.port) || 22 }
      if (!body.password) delete body.password
      if (!body.private_key) delete body.private_key
      const base =
        `${rootPath}/api/sessions/${encodeURIComponent(workspace.session_name)}` +
        `/ide/ssh-connections/${encodeURIComponent(workspace.id)}`
      const response = await fetch(
        base,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        },
      )
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'Could not save')
      phase = 'Connecting…'

      // Settings are only ever edited to make a connection work, so apply them
      // rather than leaving the user to find Connect. A failure here is
      // reported in the dialog instead of closing over it silently — that is
      // the error they need to see.
      const attempt = await fetch(`${base}/connect`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: form.password || '' }),
      })
      if (!attempt.ok) {
        const failed = await attempt.json().catch(() => ({}))
        throw new Error(failed.error || `Saved, but could not connect (${attempt.status})`)
      }
      onsaved?.()
    } catch (exc) {
      error = exc.message
    } finally {
      saving = false
      phase = ''
    }
  }

  const field =
    'w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg ' +
    'outline-none focus:border-vs-accent'
</script>

<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
  onclick={(e) => { if (e.target === e.currentTarget) onclose?.() }}
  onkeydown={(e) => { if (e.key === 'Escape') onclose?.() }}
  role="presentation"
>
  <div class="flex w-full max-w-[420px] flex-col gap-2 rounded-lg border border-vs-line bg-vs-panel p-4 shadow-2xl">
    <h3 class="text-sm font-semibold text-vs-bright">
      {isLocal ? 'Folder settings' : 'SSH connection settings'}
    </h3>
    <p class="mb-1 text-[11px] leading-relaxed text-vs-muted">
      {isLocal
        ? 'Where this workspace opens.'
        : 'Secrets are never shown — leave a field blank to keep what is stored.'}
    </p>

    <input class={field} placeholder="Label" bind:value={form.label} />
    {#if !isLocal}
      <div class="flex gap-2">
        <input class="{field} min-w-0 flex-1" placeholder="Host" bind:value={form.host} />
        <input class="{field} w-20" type="number" min="1" max="65535" placeholder="Port" bind:value={form.port} />
      </div>
      <input class={field} placeholder="Username" bind:value={form.username} />
      <input class={field} placeholder="Identity file (optional)" bind:value={form.identity_file} />
      <input class={field} type="password" autocomplete="new-password"
        placeholder={workspace.has_password ? 'Password stored — type to replace' : 'Password (optional)'}
        bind:value={form.password} />
      <textarea rows="3" class="{field} resize-y font-mono text-[11px]"
        placeholder={workspace.has_private_key
          ? 'Private key stored — paste a new one to replace'
          : 'Paste a private key (optional)'}
        bind:value={form.private_key}></textarea>
    {/if}
    <input class={field} placeholder="Workspace folder" bind:value={form.workspace_root} />

    {#if error}
      <p class="rounded-sm border border-vs-red/40 bg-vs-red/10 px-2 py-1 text-[11px] text-vs-red">{error}</p>
    {/if}

    <div class="mt-1 flex justify-end gap-2">
      <button class="rounded-sm border border-vs-line px-3 py-1 text-xs hover:bg-vs-hover"
        onclick={() => onclose?.()}>Cancel</button>
      <button class="rounded-sm bg-vs-status px-3 py-1 text-xs text-white hover:brightness-110 disabled:opacity-40"
        disabled={saving} onclick={save}>{saving ? phase || 'Saving…' : 'Save & Connect'}</button>
    </div>
  </div>
</div>
