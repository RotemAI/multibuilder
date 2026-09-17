import { mount } from 'svelte'
import './app.css'
import Home from './lib/Home.svelte'

// app.py renders <div id="home-root"> plus a bootstrap object. Nothing here
// trusts user input for those values; every list is fetched behind the same
// session cookie the rest of the dashboard uses.
function boot() {
  const target = document.getElementById('home-root')
  if (!target) return
  const bootstrap = window.__HOME_BOOTSTRAP__ || {}
  mount(Home, {
    target,
    props: {
      rootPath: bootstrap.rootPath || '',
      sessions: bootstrap.sessions || [],
    },
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}
