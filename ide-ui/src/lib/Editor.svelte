<script>
  import { onMount, onDestroy } from 'svelte'
  import { ide } from './store.svelte.js'
  import { monokai, languageFor } from './monokai.js'

  let container
  let editor = null
  let monaco = null
  let currentKey = ''
  // Guards the echo: applying a tab switch to the model fires onDidChangeContent,
  // which would otherwise write the incoming text straight back into the store.
  let applying = false

  onMount(async () => {
    // Import the editor core plus only the languages languageFor() can
    // return, instead of monaco-editor's all-languages barrel.
    monaco = await import('./monaco.js')
    monaco.editor.defineTheme('monokai', monokai)
    editor = monaco.editor.create(container, {
      value: '',
      theme: 'monokai',
      automaticLayout: true,
      fontSize: 13,
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      renderWhitespace: 'selection',
      tabSize: 2,
    })

    editor.onDidChangeModelContent(() => {
      if (applying || !currentKey) return
      ide.updateContent(currentKey, editor.getValue())
    })

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => ide.saveActive())
  })

  onDestroy(() => editor?.dispose())

  // Swap the model when the active tab changes; keep the model in sync when the
  // store's content changes from elsewhere (a restored buffer, say).
  $effect(() => {
    const tab = ide.activeTab
    if (!editor || !monaco) return
    if (!tab) {
      applying = true
      editor.setValue('')
      currentKey = ''
      applying = false
      return
    }
    if (tab.key !== currentKey) {
      applying = true
      // A tab may name its own language (a Git diff does); otherwise infer it
      // from the path. Diff tabs are read-only: they are a view of a change,
      // not an editable buffer.
      const model = monaco.editor.createModel(tab.content, tab.language || languageFor(tab.path))
      const previous = editor.getModel()
      editor.setModel(model)
      previous?.dispose()
      editor.updateOptions({ readOnly: !!tab.readOnly })
      currentKey = tab.key
      applying = false
    } else if (editor.getValue() !== tab.content) {
      applying = true
      editor.setValue(tab.content)
      applying = false
    }
  })
</script>

<div class="editor" bind:this={container}></div>

<style>
  .editor {
    width: 100%;
    height: 100%;
    min-height: 0;
  }
</style>
