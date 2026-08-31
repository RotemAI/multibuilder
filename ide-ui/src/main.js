import { mount } from 'svelte'
import Ide from './lib/Ide.svelte'

// app.py renders <div id="ide-root"> plus a bootstrap object holding the
// session identity. Nothing here trusts user input for those values.
export function mountIde(target, props) {
  return mount(Ide, { target, props })
}

function boot() {
  const target = document.getElementById('ide-root')
  if (!target || target.dataset.mounted) return
  target.dataset.mounted = '1'
  const bootstrap = window.__IDE_BOOTSTRAP__ || {}
  mountIde(target, {
    sessions: bootstrap.sessions || [],
    session: bootstrap.session || '',
    rootPath: bootstrap.rootPath || '',
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}

window.mountRemoteIde = mountIde
