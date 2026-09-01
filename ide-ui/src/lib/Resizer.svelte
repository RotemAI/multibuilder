<script>
  /**
   * A VS Code style drag handle between panes.
   *
   * The pane owns its size; this only reports deltas. `side` says which
   * direction growing means: a handle on the RIGHT of a left-hand sidebar grows
   * it as the pointer moves right, while a handle on the LEFT of a right-hand
   * panel grows it as the pointer moves left.
   */
  let {
    size = $bindable(),
    side = 'right',            // right | left | top
    min = 120,
    max = 800,
    onreset = null,
  } = $props()

  let dragging = $state(false)
  const vertical = side === 'top'

  function start(event) {
    event.preventDefault()
    dragging = true
    const startPos = vertical ? event.clientY : event.clientX
    const startSize = size

    // Pointer capture keeps events coming even when the cursor crosses Monaco
    // or the xterm canvas, which would otherwise swallow them.
    const target = event.currentTarget
    target.setPointerCapture?.(event.pointerId)

    function move(moveEvent) {
      const pos = vertical ? moveEvent.clientY : moveEvent.clientX
      const delta = pos - startPos
      const signed = side === 'left' || side === 'top' ? -delta : delta
      size = Math.round(Math.min(max, Math.max(min, startSize + signed)))
    }

    function end() {
      dragging = false
      target.releasePointerCapture?.(event.pointerId)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', end)
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', end)
  }

  // Keyboard resizing keeps the handle usable without a pointer.
  function onKeydown(event) {
    const step = event.shiftKey ? 40 : 10
    const grow = vertical ? 'ArrowUp' : side === 'left' ? 'ArrowLeft' : 'ArrowRight'
    const shrink = vertical ? 'ArrowDown' : side === 'left' ? 'ArrowRight' : 'ArrowLeft'
    if (event.key === grow) size = Math.min(max, size + step)
    else if (event.key === shrink) size = Math.max(min, size - step)
    else return
    event.preventDefault()
  }
</script>

<div
  class="group relative shrink-0 {vertical ? 'h-1 w-full cursor-row-resize' : 'w-1 cursor-col-resize'}"
  class:bg-vs-accent={dragging}
  onpointerdown={start}
  ondblclick={() => onreset?.()}
  onkeydown={onKeydown}
  role="separator"
  aria-orientation={vertical ? 'horizontal' : 'vertical'}
  aria-valuenow={size}
  aria-valuemin={min}
  aria-valuemax={max}
  tabindex="0"
  title="Drag to resize (double-click to reset)"
>
  <!-- A 1px seam, but a wider invisible hit area: VS Code lets you grab the
       divider slightly off-centre rather than demanding pixel precision. -->
  <div
    class="absolute {vertical ? '-top-1 -bottom-1 left-0 right-0' : '-left-1 -right-1 top-0 bottom-0'}
           transition-colors group-hover:bg-vs-accent {dragging ? 'bg-vs-accent' : ''}"
  ></div>
</div>
