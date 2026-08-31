<script>
  import { ide } from './store.svelte.js'
  import { X, Dot } from 'lucide-svelte'
  const filename = (path) => path.split('/').pop()
</script>

<div class="tabs" role="tablist">
  {#each ide.tabs as tab (tab.key)}
    <div class="tab" class:active={tab.key === ide.activeKey}>
      <button
        class="label"
        role="tab"
        aria-selected={tab.key === ide.activeKey}
        title={tab.path}
        onclick={() => (ide.activeKey = tab.key)}
      >
        {#if tab.dirty}<span class="dot" title="Unsaved changes"><Dot size={16} /></span>{/if}
        {filename(tab.path)}
      </button>
      <button class="close" title="Close" aria-label="Close {filename(tab.path)}" onclick={() => ide.closeTab(tab.key)}>
        <X size={13} />
      </button>
    </div>
  {:else}
    <div class="hint">Open a file from the explorer</div>
  {/each}
</div>

<style>
  .tabs { display: flex; align-items: stretch; overflow-x: auto; background: var(--ide-panel); border-bottom: 1px solid var(--ide-border); min-height: 30px; }
  .tab { display: flex; align-items: center; border-right: 1px solid var(--ide-border); }
  .tab.active { background: var(--ide-bg); box-shadow: inset 0 -2px 0 var(--ide-accent); }
  .label { display: inline-flex; align-items: center; gap: 2px; background: transparent; border: 0; color: var(--ide-fg); cursor: pointer; padding: 5px 8px; font-size: 12px; white-space: nowrap; }
  .close { display: flex; align-items: center; background: transparent; border: 0; color: var(--ide-muted); cursor: pointer; padding: 0 6px 0 0; }
  .close:hover { color: var(--ide-fg); }
  .dot { display: flex; align-items: center; color: var(--ide-accent); margin-right: -2px; }
  .hint { padding: 6px 10px; font-size: 12px; color: var(--ide-muted); }
</style>
