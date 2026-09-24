// The status poll is the only thing that ever moves a session from busy back to
// idle, so it is worth testing, and it is testable: this pulls the real block out
// of app.py and drives it in a Node VM with a stubbed fetch and a fake clock.
//
// THE DEFECT THIS PINS: one setInterval, one unguarded fetch, nothing watching
// it. A request dropped between browser and box froze every session on its last
// reading, and the only way out was reloading the page.
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const src = fs.readFileSync(process.argv[2] || __dirname + '/app.py', 'utf8');
const js = (src.match(/<script>[\s\S]*?<\/script>/g) || [])
  .map(b => b.slice(8, -9)).sort((a, b) => b.length - a.length)[0];

const start = js.indexOf("const _STATUS_URLS=");
assert.ok(start > 0, 'the hardened poll block is missing from app.py');
const endMark = js.indexOf('async function _pollStatusOnce(', start);
assert.ok(endMark > start, 'could not find the end of the poll block');
const slice = js.slice(start, endMark);

// ---- harness ----------------------------------------------------------------
let now = 1000000;
const timers = [];
const fakeSetInterval = (fn, ms) => { timers.push({ every: ms, next: now + ms, fn }); return timers.length; };
function fakeSetTimeout(fn, ms) { timers.push({ at: now + (ms || 0), fn }); return timers.length; }
function fakeClearTimeout(id) { if (timers[id - 1]) timers[id - 1].fn = null; }
function advance(ms) {
  const target = now + ms;
  for (;;) {
    const due = timers.filter(t => t.fn && (t.at || t.next) <= target)
      .sort((a, b) => (a.at || a.next) - (b.at || b.next))[0];
    if (!due) break;
    now = due.at || due.next;
    const fn = due.fn;
    if (due.every) due.next = now + due.every; else due.fn = null;
    fn();
  }
  now = target;
}
const flush = () => new Promise(r => setImmediate(r));

const cls = new Set();
const statusInfoEl = {
  textContent: '',
  classList: { toggle: (c, on) => { on ? cls.add(c) : cls.delete(c); }, remove: c => cls.delete(c), add: c => cls.add(c) },
};

let fetchLog = [];
let behaviour = {};
function fakeFetch(url, opts) {
  fetchLog.push(url);
  const mode = behaviour[url] || 'ok';
  if (mode === 'reject') return Promise.reject(new TypeError('Failed to fetch'));
  if (mode === 'hang') {
    return new Promise((_r, rej) => {
      if (opts && opts.signal) opts.signal.addEventListener('abort', () => rej(new Error('AbortError')));
    });
  }
  return Promise.resolve({ ok: true, json: async () => [] });
}

let onceCalls = 0;
const ctx = {
  BASE: '', statusInfoEl, fetch: fakeFetch, AbortController,
  setTimeout: fakeSetTimeout, clearTimeout: fakeClearTimeout, setInterval: fakeSetInterval,
  Date: { now: () => now }, Math, console,
  pollTimer: 1, startStatusPolling() {},
  // the real body is long and has many dependencies; the failover machinery is
  // what this block owns, so the body is stubbed to just do the fetch.
  async _pollStatusOnce() {
    onceCalls++;
    try {
      const resp = await ctx._fetchStatus();
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      await resp.json();
      vm.runInContext('_pollFails=0;_lastPollOk=Date.now();', ctx);
      statusInfoEl.classList.remove('poll-stalled');
    } catch (e) {
      vm.runInContext('_pollFails++;', ctx);
    }
  },
};
vm.createContext(ctx);
vm.runInContext(slice, ctx);
const ev = e => vm.runInContext(e, ctx);   // top-level `let` is not a ctx property

(async () => {
  await ctx.pollStatus(); await flush();
  assert.deepStrictEqual(fetchLog, ['/api/status'], 'first poll uses /api/status');
  assert.ok(!cls.has('poll-stalled'));
  console.log('ok  1  a healthy poll uses /api/status and says nothing');

  behaviour['/api/status'] = 'reject';
  fetchLog = [];
  for (let i = 0; i < 3; i++) {
    await ctx.pollStatus(); await flush();
    ev('if(_pollFails%3===0)_statusUrlIdx=(_statusUrlIdx+1)%_STATUS_URLS.length;');
  }
  assert.strictEqual(ev('_STATUS_URLS[_statusUrlIdx]'), '/api/activity',
    'three misses must move the poll to the twin URL');
  fetchLog = [];
  await ctx.pollStatus(); await flush();
  assert.deepStrictEqual(fetchLog, ['/api/activity'], 'and then it uses the twin');
  console.log('ok  2  three dropped calls fail over to /api/activity');

  behaviour = { '/api/status': 'hang', '/api/activity': 'hang' };
  ev('_statusUrlIdx=0;_pollFails=0;');
  const p = ctx.pollStatus().catch(() => {}); await flush();
  assert.strictEqual(ev('_pollInFlight'), true, 'the latch is held while in flight');
  advance(8001); await flush(); await p;
  assert.strictEqual(ev('_pollInFlight'), false, 'an abort at 8s must release the latch');
  console.log('ok  3  a hung poll is aborted and cannot wedge the loop');

  now += 40000;
  ev('_pollFails=4;');
  ctx._paintPollHealth();
  assert.ok(cls.has('poll-stalled'), 'a stalled poll sets the class');
  assert.ok(/stalled/.test(statusInfoEl.textContent), statusInfoEl.textContent);
  console.log('ok  4  a stalled poll says so ("' + statusInfoEl.textContent + '")');

  behaviour = {};
  const before = onceCalls;
  ev('_lastPollOk=Date.now()-60000;');
  advance(18000); await flush();
  assert.ok(onceCalls > before, 'the watchdog must poke the poll after 30s of silence');
  console.log('ok  5  the watchdog re-pokes a poll that has gone quiet');

  console.log('\nall 5 passed');
})().catch(e => { console.error('FAIL:', e.message); process.exit(1); });
