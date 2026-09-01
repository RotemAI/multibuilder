<script>
  import { onMount } from 'svelte'
  import { ide } from './store.svelte.js'
  import { api } from './api.js'
  import { ShieldAlert, Loader } from 'lucide-svelte'

  let { onclose, ontrusted } = $props()

  let loading = $state(true)
  let error = $state('')
  let info = $state(null)
  let trusting = $state(false)

  onMount(async () => {
    try {
      info = await api.hostKey(ide.connectionId)
    } catch (exc) {
      error = exc.message || 'Could not fetch the host key'
    } finally {
      loading = false
    }
  })

  async function trust() {
    trusting = true
    try {
      await api.trustHost(ide.connectionId)
      ontrusted()
    } catch (exc) {
      error = exc.message || 'Could not trust this host'
      trusting = false
    }
  }
</script>

<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  onclick={(e) => e.target === e.currentTarget && onclose()}
  onkeydown={(e) => e.key === 'Escape' && onclose()}
  role="presentation"
>
  <div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl">
    <div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">
      <ShieldAlert size={15} class="text-vs-yellow" />
      Unknown host
    </div>

    <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg">
      {#if loading}
        <p class="flex items-center gap-2 text-vs-muted"><Loader size={13} class="animate-spin" /> Fetching host key…</p>
      {:else if error}
        <p class="text-vs-red">{error}</p>
      {:else if info?.known}
        <p>This host is already trusted. Try connecting again.</p>
      {:else}
        <p>
          The authenticity of <span class="font-mono text-vs-blue">{info.host}:{info.port}</span>
          can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.
        </p>
        <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2">
          {#each info.fingerprints as fp (fp.fingerprint)}
            <div class="flex items-baseline gap-2 font-mono text-[11px]">
              <span class="w-16 shrink-0 text-vs-muted">{fp.type}</span>
              <span class="break-all text-vs-fg">{fp.fingerprint}</span>
            </div>
          {/each}
        </div>
        <p class="mt-3 text-xs text-vs-muted">
          Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.
        </p>
      {/if}
    </div>

    <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3">
      <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover" onclick={onclose}>Cancel</button>
      {#if !loading && !info?.known && !error}
        <button
          class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"
          disabled={trusting}
          onclick={trust}
        >
          {trusting ? 'Trusting…' : 'Trust and connect'}
        </button>
      {/if}
    </div>
  </div>
</div>
