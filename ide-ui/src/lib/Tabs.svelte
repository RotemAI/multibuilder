<script>
  import { ide } from './store.svelte.js'
  import { X, File } from 'lucide-svelte'
  const filename = (path) => path.split('/').pop()
</script>

<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist">
  {#each ide.tabs as tab (tab.key)}
    <div
      class="group flex items-center border-r border-vs-bg text-[13px]"
      class:bg-vs-tabactive={tab.key === ide.activeKey}
      class:text-vs-bright={tab.key === ide.activeKey}
      class:text-vs-muted={tab.key !== ide.activeKey}
    >
      <button
        class="flex items-center gap-1.5 py-2 pr-1 pl-3"
        role="tab"
        aria-selected={tab.key === ide.activeKey}
        title={tab.path}
        onclick={() => (ide.activeKey = tab.key)}
      >
        <File size={14} class="shrink-0 text-vs-blue" />
        <span class="whitespace-nowrap">{filename(tab.path)}</span>
      </button>
      <button
        class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"
        title={tab.dirty ? 'Unsaved changes — close' : 'Close'}
        aria-label="Close {filename(tab.path)}"
        onclick={() => ide.closeTab(tab.key)}
      >
        {#if tab.dirty}
          <!-- VS Code shows a dot instead of the × until you hover. -->
          <span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span>
          <X size={14} class="hidden group-hover:block" />
        {:else}
          <X size={14} class="opacity-0 group-hover:opacity-100" />
        {/if}
      </button>
    </div>
  {:else}
    <div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>
  {/each}
</div>
