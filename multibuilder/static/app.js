(() => {
  "use strict";

  const ROUTES = Object.freeze({
    projects: "#/projects",
    newProject: "#/projects/new",
    overview: "#/projects/:projectId/overview",
    dag: "#/projects/:projectId/dag",
    agents: "#/projects/:projectId/agents",
    agentDetail: "#/projects/:projectId/agents/:runId",
    integration: "#/projects/:projectId/integration",
    capacity: "#/projects/:projectId/capacity",
  });

  const STORAGE = Object.freeze({
    sticky: "multibuilder-sticky-header",
    tablePrefix: "multibuilder-table-",
  });

  const STREAM_FAILURES_BEFORE_FALLBACK = 3;
  const STREAM_RECONNECT_BASE_MS = 1_000;
  const STREAM_STABLE_AFTER_MS = 15_000;
  const STREAM_EVENT_TYPES = Object.freeze([
    "project.paused",
    "project.resumed",
    "project.cancelled",
    "run.claimed",
    "run.started",
    "run.process_started",
    "run.session_started",
    "run.heartbeat",
    "run.provider_completed",
    "run.completed",
    "run.failed",
    "run.recovery_committed",
    "run.cancelled_for_shutdown",
    "task.followups_created",
    "scheduler.source_ready",
    "scheduler.source_failed",
    "scheduler.workspace_failed",
    "scheduler.claim_deferred",
    "scheduler.cycle_failed",
    "recovery.decided",
    "watchdog.recovered",
    "agent.message",
    "agent.reasoning_status",
    "command.started",
    "command.completed",
    "tool.started",
    "tool.completed",
    "files.changed",
    "provider.event",
    "provider.http_error",
    "provider.stderr",
    "provider.output.unparsed",
    "rate_limit.observed",
    "resource.exhaustion",
    "usage.reported",
    "thread.started",
    "turn.started",
    "turn.completed",
    "turn.failed",
  ]);

  const appView = document.getElementById("app-view");
  const navigation = document.getElementById("primary-navigation");
  const breadcrumb = document.getElementById("breadcrumb");
  const sidebar = document.getElementById("sidebar");
  const mobileNavigation = document.getElementById("mobile-navigation");
  const refreshButton = document.getElementById("refresh-button");
  const connectionLabel = document.getElementById("connection-label");
  const connectionDot = document.querySelector(".live-dot");
  const tooltip = document.getElementById("header-tooltip");
  const cellPopover = document.getElementById("cell-popover");
  const toastRegion = document.getElementById("toast-region");

  const state = {
    snapshot: null,
    events: [],
    eventCursor: 0,
    activeProjectId: null,
    pollTimer: null,
    pollingFallback: false,
    eventSource: null,
    streamReconnectTimer: null,
    streamStableTimer: null,
    streamFailures: 0,
    snapshotRefreshTimer: null,
    tableCleanups: [],
    demo: false,
    loading: false,
    connection: "checking",
    projects: null,
  };

  const icons = {
    projects: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 5h6l2 2h8v12H4z"/></svg>',
    plus: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    overview: '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></svg>',
    dag: '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 6h8M7 8l4 8M17 8l-4 8"/></svg>',
    agents: '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M6 20v-2a6 6 0 0 1 12 0v2M5 9a2.5 2.5 0 1 0 0 5M19 9a2.5 2.5 0 1 1 0 5"/></svg>',
    integration: '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><circle cx="6" cy="19" r="2"/><path d="M6 7v10M8 7c7 0 10 3 10 10"/></svg>',
    capacity: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 19V9M12 19V4M19 19v-7"/></svg>',
    refresh: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 11a8 8 0 1 0-2 5M20 5v6h-6"/></svg>',
  };

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeJson(value) {
    try {
      return JSON.stringify(value ?? {}, null, 2);
    } catch (_error) {
      return "Unable to display structured data";
    }
  }

  function humanize(value) {
    return String(value ?? "unknown").replaceAll("_", " ");
  }

  function compactId(value) {
    const text = String(value ?? "");
    return text.length > 13 ? `${text.slice(0, 8)}...${text.slice(-4)}` : text || "Not set";
  }

  function formatDate(value, includeDate = false) {
    if (!value) return "Not set";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    const options = includeDate
      ? { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }
      : { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return new Intl.DateTimeFormat(undefined, options).format(date);
  }

  function durationBetween(start, end = Date.now()) {
    if (!start) return "Not started";
    const startMs = new Date(start).getTime();
    const endMs = end ? new Date(end).getTime() : Date.now();
    if (!Number.isFinite(startMs) || !Number.isFinite(endMs)) return "Unknown";
    const total = Math.max(0, Math.floor((endMs - startMs) / 1000));
    if (total < 60) return `${total}s`;
    if (total < 3600) return `${Math.floor(total / 60)}m ${total % 60}s`;
    return `${Math.floor(total / 3600)}h ${Math.floor((total % 3600) / 60)}m`;
  }

  function clampPercent(value) {
    const number = Number(value);
    return Number.isFinite(number) ? Math.min(100, Math.max(0, number)) : 0;
  }

  function readStorage(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (_error) {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (_error) {
      showToast("Browser preferences could not be saved", "error");
    }
  }

  function showToast(message, variant = "neutral") {
    const toast = document.createElement("div");
    toast.className = `toast ${variant}`;
    toast.textContent = message;
    toastRegion.appendChild(toast);
    window.setTimeout(() => toast.remove(), 3200);
  }

  function setConnection(status, text) {
    state.connection = status;
    connectionDot.classList.toggle("ok", status === "ok");
    connectionDot.classList.toggle("bad", status === "bad");
    connectionLabel.textContent = text;
  }

  async function checkHealth() {
    try {
      const response = await fetch("/api/health", { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Health check failed");
      const health = await response.json();
      setConnection("ok", `${humanize(health.scheduler)} scheduler`);
    } catch (_error) {
      setConnection("bad", "Control plane offline");
    }
  }

  async function apiFetch(path, options = {}) {
    const headers = new Headers(options.headers || {});
    headers.set("Accept", "application/json");
    if (options.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
    const response = await fetch(path, { ...options, headers });
    if (!response.ok) {
      let detail = `Request failed with status ${response.status}`;
      try {
        const body = await response.json();
        detail = body.detail || detail;
      } catch (_error) {
        // The status remains sufficient when the server does not return JSON.
      }
      throw new Error(detail);
    }
    return response.json();
  }

  async function loadProjectList() {
    const payload = await apiFetch("/api/projects");
    state.projects = Array.isArray(payload.projects) ? payload.projects : [];
  }

  function replaceRouteValue(template, projectId, runId = "") {
    return template
      .replace(":projectId", encodeURIComponent(projectId))
      .replace(":runId", encodeURIComponent(runId));
  }

  function parseRoute() {
    const raw = window.location.hash || ROUTES.projects;
    const [path, queryString = ""] = raw.slice(1).split("?");
    const query = new URLSearchParams(queryString);
    if (path === "/projects") return { name: "projects", path, query };
    if (path === "/projects/new") return { name: "new", path, query };
    const detailMatch = path.match(/^\/projects\/([^/]+)\/agents\/([^/]+)$/);
    if (detailMatch) {
      return { name: "agent", path, query, projectId: decodeURIComponent(detailMatch[1]), runId: decodeURIComponent(detailMatch[2]) };
    }
    const viewMatch = path.match(/^\/projects\/([^/]+)\/(overview|dag|agents|integration|capacity)$/);
    if (viewMatch) {
      return { name: viewMatch[2], path, query, projectId: decodeURIComponent(viewMatch[1]) };
    }
    return { name: "not-found", path, query };
  }

  function navigate(hash) {
    if (window.location.hash === hash) renderCurrentRoute({ refresh: false });
    else window.location.hash = hash;
  }

  function statusPill(status, label = "") {
    const safeStatus = String(status || "unknown").toLowerCase();
    return `<span class="status-pill status-${escapeHTML(safeStatus)}">${escapeHTML(label || humanize(safeStatus))}</span>`;
  }

  function cleanTableInteractions() {
    state.tableCleanups.splice(0).forEach((cleanup) => {
      try { cleanup(); } catch (_error) { /* Detached table cleanup is best effort. */ }
    });
    tooltip.hidden = true;
    cellPopover.hidden = true;
  }

  function setView(html) {
    cleanTableInteractions();
    appView.innerHTML = html;
    appView.setAttribute("aria-busy", "false");
    requestAnimationFrame(setupTables);
  }

  function loadingView() {
    setView(`
      <div class="page-head"><div><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-copy"></div></div></div>
      <div class="grid grid-3"><div class="skeleton skeleton-panel"></div><div class="skeleton skeleton-panel"></div><div class="skeleton skeleton-panel"></div></div>
      <p class="visually-hidden">Loading project</p>
    `);
    appView.setAttribute("aria-busy", "true");
  }

  function stateView(title, copy, actions = "", symbol = "i") {
    setView(`
      <div class="state-wrap"><section class="state-card">
        <div class="state-symbol" aria-hidden="true">${escapeHTML(symbol)}</div>
        <h1>${escapeHTML(title)}</h1>
        <p>${escapeHTML(copy)}</p>
        ${actions ? `<div class="state-actions">${actions}</div>` : ""}
      </section></div>
    `);
  }

  function projectName(projectId) {
    if (state.snapshot?.project?.id === projectId) return state.snapshot.project.name;
    return (state.projects || []).find((project) => project.id === projectId)?.name || "Project";
  }

  function renderChrome(route) {
    const projectId = route.projectId;
    const projectNav = projectId ? `
      <div class="nav-label">Workspace</div>
      ${navLink(replaceRouteValue(ROUTES.overview, projectId), "overview", icons.overview, "Overview", route.name === "overview")}
      ${navLink(replaceRouteValue(ROUTES.dag, projectId), "dag", icons.dag, "Task DAG", route.name === "dag")}
      ${navLink(replaceRouteValue(ROUTES.agents, projectId), "agents", icons.agents, "Agents", route.name === "agents" || route.name === "agent")}
      ${navLink(replaceRouteValue(ROUTES.integration, projectId), "integration", icons.integration, "Integration", route.name === "integration")}
      ${navLink(replaceRouteValue(ROUTES.capacity, projectId), "capacity", icons.capacity, "Capacity", route.name === "capacity")}
    ` : "";
    navigation.innerHTML = `
      <div class="nav-label">Projects</div>
      ${navLink(ROUTES.projects, "projects", icons.projects, "All projects", route.name === "projects")}
      ${navLink(ROUTES.newProject, "new", icons.plus, "New project", route.name === "new")}
      ${projectNav}
    `;

    if (!projectId) {
      breadcrumb.innerHTML = `<strong>${route.name === "new" ? "New project" : "Projects"}</strong>`;
    } else {
      const viewLabel = route.name === "agent" ? "Agent inspection" : humanize(route.name);
      breadcrumb.innerHTML = `
        <a href="${ROUTES.projects}">Projects</a><span class="breadcrumb-separator">/</span>
        <a href="${replaceRouteValue(ROUTES.overview, projectId)}">${escapeHTML(projectName(projectId))}</a>
        <span class="breadcrumb-separator">/</span><strong>${escapeHTML(viewLabel)}</strong>
      `;
    }
    refreshButton.classList.toggle("hidden", !projectId || state.demo);
  }

  function navLink(href, key, icon, label, active) {
    return `<a class="nav-link ${active ? "active" : ""}" href="${escapeHTML(href)}" data-nav="${escapeHTML(key)}" ${active ? 'aria-current="page"' : ""}>${icon}<span>${escapeHTML(label)}</span></a>`;
  }

  function progressSummary(snapshot) {
    const tasks = snapshot.tasks || [];
    const completed = tasks.filter((task) => task.status === "succeeded").length;
    const total = tasks.length;
    const supplied = snapshot.progress || {};
    const percent = clampPercent(supplied.percent ?? supplied.percentage ?? (total ? (completed / total) * 100 : 0));
    return {
      completed: Number(supplied.completed_tasks ?? completed),
      total: Number(supplied.total_tasks ?? total),
      percent,
      active: tasks.filter((task) => ["running", "queued", "ready"].includes(task.status)).length,
      failed: tasks.filter((task) => ["failed", "blocked"].includes(task.status)).length,
    };
  }

  async function loadProject(projectId, refresh = false) {
    if (projectId === "demo-project") {
      state.demo = true;
      state.snapshot = demoSnapshot();
      state.events = demoEvents();
      state.eventCursor = state.events.length;
      state.activeProjectId = projectId;
      return state.snapshot;
    }
    state.demo = false;
    if (!refresh && state.snapshot?.project?.id === projectId) return state.snapshot;
    const snapshot = await apiFetch(`/api/projects/${encodeURIComponent(projectId)}`);
    state.snapshot = snapshot;
    state.activeProjectId = projectId;
    await loadEvents(projectId, true);
    return snapshot;
  }

  async function loadEvents(projectId, reset = false) {
    if (state.demo) return;
    if (reset) {
      state.events = [];
      state.eventCursor = 0;
    }
    const response = await apiFetch(`/api/projects/${encodeURIComponent(projectId)}/events?after=${state.eventCursor}&limit=500`);
    const incoming = Array.isArray(response.events) ? response.events : [];
    incoming.forEach(ingestEvent);
  }

  function ingestEvent(event) {
    if (!event || typeof event !== "object") return false;
    const eventId = Number(event.id) || 0;
    if (eventId && eventId <= state.eventCursor) return false;
    state.events.push(event);
    state.events = state.events.slice(-3000);
    if (eventId) state.eventCursor = Math.max(state.eventCursor, eventId);
    return true;
  }

  function stopPollingFallback() {
    if (state.pollTimer) window.clearTimeout(state.pollTimer);
    state.pollTimer = null;
    state.pollingFallback = false;
  }

  function closeEventSource(source = state.eventSource) {
    if (source) source.close();
    if (state.eventSource === source) state.eventSource = null;
    if (state.streamStableTimer) window.clearTimeout(state.streamStableTimer);
    state.streamStableTimer = null;
  }

  function stopLiveUpdates() {
    stopPollingFallback();
    closeEventSource();
    if (state.streamReconnectTimer) window.clearTimeout(state.streamReconnectTimer);
    if (state.snapshotRefreshTimer) window.clearTimeout(state.snapshotRefreshTimer);
    state.streamReconnectTimer = null;
    state.snapshotRefreshTimer = null;
    state.streamFailures = 0;
  }

  function snapshotVersion(snapshot) {
    if (!snapshot) return "";
    return JSON.stringify({
      status: snapshot.status,
      updated: snapshot.updated_at,
      tasks: (snapshot.tasks || []).map((task) => [task.id, task.status, task.retry_count, task.updated_at]),
      runs: (snapshot.runs || []).map((run) => [run.id, run.status, run.heartbeat_at, run.progress_at]),
      queue: (snapshot.merge_queue || []).map((item) => [item.id, item.status, item.updated_at]),
      validations: (snapshot.validations || []).map((item) => [item.id, item.status, item.finished_at]),
      providers: (snapshot.providers || []).map((provider) => [provider.name, provider.active_runs, provider.available, provider.rate_limited_until]),
    });
  }

  function userIsInteracting() {
    const active = document.activeElement;
    const columnsOpen = [...document.querySelectorAll("[data-columns-popover]")].some((item) => !item.hidden);
    return columnsOpen || Boolean(active && active !== document.body && active.matches("input, textarea, select, [contenteditable]"));
  }

  async function refreshLiveSnapshot(projectId) {
    if (parseRoute().projectId !== projectId || state.demo) return;
    const beforeSnapshot = snapshotVersion(state.snapshot);
    const latest = await apiFetch(`/api/projects/${encodeURIComponent(projectId)}`);
    state.snapshot = latest;
    if (snapshotVersion(latest) !== beforeSnapshot && !userIsInteracting()) {
      const route = parseRoute();
      renderChrome(route);
      renderProjectView(route);
    }
  }

  function scheduleSnapshotRefresh(projectId) {
    if (state.snapshotRefreshTimer) return;
    state.snapshotRefreshTimer = window.setTimeout(async () => {
      state.snapshotRefreshTimer = null;
      try {
        await refreshLiveSnapshot(projectId);
      } catch (_error) {
        setConnection("bad", "Snapshot refresh failed");
      }
    }, 300);
  }

  function startPollingFallback(projectId) {
    if (state.pollingFallback || state.demo) return;
    state.pollingFallback = true;
    const poll = async () => {
      if (parseRoute().projectId !== projectId) return;
      state.pollTimer = null;
      try {
        const before = state.eventCursor;
        const beforeSnapshot = snapshotVersion(state.snapshot);
        await loadEvents(projectId, false);
        const latest = await apiFetch(`/api/projects/${encodeURIComponent(projectId)}`);
        state.snapshot = latest;
        setConnection("ok", "Live fallback polling");
        if ((state.eventCursor > before || snapshotVersion(latest) !== beforeSnapshot) && !userIsInteracting()) {
          const route = parseRoute();
          renderChrome(route);
          renderProjectView(route);
        }
      } catch (_error) {
        setConnection("bad", "Event updates paused");
      } finally {
        if (state.pollingFallback && parseRoute().projectId === projectId) state.pollTimer = window.setTimeout(poll, 5000);
      }
    };
    setConnection("bad", "Using event polling fallback");
    state.pollTimer = window.setTimeout(poll, 250);
  }

  function markStreamStable() {
    state.streamFailures = 0;
    stopPollingFallback();
    setConnection("ok", "Event stream connected");
  }

  function handleStreamEvent(projectId, message) {
    try {
      const event = JSON.parse(message.data);
      if (!event.id && message.lastEventId) event.id = Number(message.lastEventId) || message.lastEventId;
      if (ingestEvent(event)) scheduleSnapshotRefresh(projectId);
      markStreamStable();
    } catch (_error) {
      setConnection("bad", "Invalid event stream message");
    }
  }

  function scheduleStreamReconnect(projectId) {
    if (state.streamReconnectTimer || parseRoute().projectId !== projectId) return;
    const exponent = Math.min(Math.max(state.streamFailures - 1, 0), 5);
    const delay = Math.min(30_000, STREAM_RECONNECT_BASE_MS * (2 ** exponent));
    state.streamReconnectTimer = window.setTimeout(() => {
      state.streamReconnectTimer = null;
      startEventStream(projectId);
    }, delay);
  }

  function startEventStream(projectId) {
    closeEventSource();
    if (state.streamReconnectTimer) window.clearTimeout(state.streamReconnectTimer);
    state.streamReconnectTimer = null;
    if (state.demo || parseRoute().projectId !== projectId) return;
    if (!("EventSource" in window)) {
      startPollingFallback(projectId);
      return;
    }

    const streamUrl = `/api/projects/${encodeURIComponent(projectId)}/events/stream?after=${state.eventCursor}&follow=true`;
    const source = new EventSource(streamUrl);
    state.eventSource = source;
    const receive = (message) => {
      if (state.eventSource === source) handleStreamEvent(projectId, message);
    };
    source.addEventListener("project.created", receive);
    STREAM_EVENT_TYPES.forEach((eventType) => source.addEventListener(eventType, receive));
    source.onmessage = receive;
    source.onopen = () => {
      if (state.eventSource !== source) return;
      setConnection("ok", "Event stream connected");
      state.streamStableTimer = window.setTimeout(markStreamStable, STREAM_STABLE_AFTER_MS);
    };
    source.onerror = () => {
      if (state.eventSource !== source) return;
      closeEventSource(source);
      state.streamFailures += 1;
      setConnection("bad", "Event stream reconnecting");
      if (state.streamFailures >= STREAM_FAILURES_BEFORE_FALLBACK) startPollingFallback(projectId);
      scheduleStreamReconnect(projectId);
    };
  }

  async function renderCurrentRoute({ refresh = true } = {}) {
    const route = parseRoute();
    if (route.projectId && state.activeProjectId && route.projectId !== state.activeProjectId) stopLiveUpdates();
    renderChrome(route);
    if (route.name === "projects") {
      stopLiveUpdates();
      if (state.projects === null) {
        loadingView();
        try {
          await loadProjectList();
        } catch (error) {
          state.projects = [];
          setConnection("bad", "Project list unavailable");
          showToast(error.message, "error");
        }
      }
      renderProjects();
      return;
    }
    if (route.name === "new") {
      stopLiveUpdates();
      renderNewProject();
      return;
    }
    if (route.name === "not-found") {
      stopLiveUpdates();
      stateView("Page not found", "This workspace route does not exist.", `<a class="button button-primary" href="${ROUTES.projects}">Return to projects</a>`, "404");
      return;
    }
    if (refresh || state.snapshot?.project?.id !== route.projectId) loadingView();
    try {
      await loadProject(route.projectId, refresh);
      renderChrome(route);
      renderProjectView(route);
      startEventStream(route.projectId);
    } catch (error) {
      renderProjectError(route.projectId, error.message);
    }
  }

  function renderProjects() {
    const projects = state.projects || [];
    const cards = projects.map((project) => `
      <a class="project-card" href="${replaceRouteValue(ROUTES.overview, project.id)}">
        <div>${statusPill(project.status)}</div>
        <h2>${escapeHTML(project.name)}</h2>
        <p>${escapeHTML(project.goal)}</p>
        <div class="project-card-foot"><span>${escapeHTML(compactId(project.id))}</span><span>Open workspace</span></div>
      </a>
    `).join("");
    setView(`
      <header class="page-head">
        <div><div class="eyebrow">Autonomous software factory</div><h1>Projects</h1><p>Plan, execute, review, and integrate software across independent provider capacity.</p></div>
        <div class="page-actions"><button class="button button-secondary" type="button" data-load-demo>Load demo project</button><a class="button button-primary" href="${ROUTES.newProject}">${icons.plus} New project</a></div>
      </header>
      ${projects.length ? `<div class="project-grid">${cards}</div>` : `
        <div class="state-wrap"><section class="state-card"><div class="state-symbol" aria-hidden="true">+</div><h1>No projects yet</h1><p>Create a project from a high-level goal, or inspect the populated demo.</p><div class="state-actions"><a class="button button-primary" href="${ROUTES.newProject}">Create first project</a><button class="button button-secondary" type="button" data-load-demo>Load demo project</button></div></section></div>
      `}
    `);
  }

  function renderNewProject() {
    setView(`
      <header class="page-head"><div><div class="eyebrow">Project / Goal</div><h1>Start an autonomous build</h1><p>Give the Director a goal and acceptance criteria. MultiBuilder creates a fresh managed Git workspace automatically.</p></div></header>
      <form id="new-project-form" class="panel" novalidate>
        <div class="form-grid">
          <div class="field"><label for="project-name">Project name</label><input class="input" id="project-name" name="name" required maxlength="120" pattern="[a-zA-Z0-9][a-zA-Z0-9._-]*" placeholder="customer-portal"><span class="field-help">Letters, numbers, dots, underscores, and hyphens.</span></div>
          <div class="field full"><label for="project-goal">User goal</label><textarea class="textarea" id="project-goal" name="goal" required maxlength="30000" placeholder="Build, test, and deploy..."></textarea></div>
          <div class="field full"><label for="acceptance-criteria">Acceptance criteria</label><textarea class="textarea" id="acceptance-criteria" name="acceptance_criteria" required placeholder="One criterion per line"></textarea><span class="field-help">The integrated build is not complete until every criterion passes.</span></div>
          <div class="field"><label for="max-parallelism">Maximum parallel workers</label><input class="input" id="max-parallelism" name="max_parallelism" type="number" min="1" max="256" value="8" required></div>
        </div>
        <div id="project-form-error" class="field-error" role="alert"></div>
        <div class="form-actions"><a class="button button-secondary" href="${ROUTES.projects}">Cancel</a><button class="button button-primary" type="submit">Create project</button></div>
      </form>
    `);
  }

  function renderProjectError(projectId, message) {
    stateView(
      "Project unavailable",
      message || "The project snapshot could not be loaded.",
      `<button class="button button-primary" type="button" data-retry-project="${escapeHTML(projectId)}">Retry</button><a class="button button-secondary" href="${ROUTES.projects}">Projects</a>`,
      "!",
    );
  }

  function renderProjectView(route) {
    if (!state.snapshot) return;
    const views = {
      overview: renderOverview,
      dag: renderDag,
      agents: renderAgents,
      agent: () => renderAgentDetail(route.runId, route.query.get("tab") || "events"),
      integration: renderIntegration,
      capacity: renderCapacity,
    };
    (views[route.name] || renderOverview)();
  }

  function pageHeader(eyebrow, title, copy, actions = "") {
    return `<header class="page-head"><div><div class="eyebrow">${escapeHTML(eyebrow)}</div><h1>${escapeHTML(title)}</h1><p>${escapeHTML(copy)}</p></div>${actions ? `<div class="page-actions">${actions}</div>` : ""}</header>`;
  }

  function projectActionControls(status) {
    if (state.demo) return '<span class="tag">Demo is read-only</span>';
    const normalized = String(status || "").toLowerCase();
    const terminal = ["completed", "cancelled"].includes(normalized);
    const controls = [];
    if (["planning", "running"].includes(normalized)) {
      controls.push('<button class="button button-secondary" type="button" data-project-action="pause">Pause</button>');
    }
    if (normalized === "paused") {
      controls.push('<button class="button button-primary" type="button" data-project-action="resume">Resume</button>');
    }
    if (!terminal) {
      controls.push('<button class="button button-danger" type="button" data-project-action="cancel">Cancel</button>');
    }
    return controls.join("");
  }

  async function runProjectAction(action, button) {
    const snapshot = state.snapshot;
    const projectId = snapshot?.project?.id;
    if (!projectId || state.demo || !["pause", "resume", "cancel"].includes(action)) return;
    if (action === "cancel" && !window.confirm("Cancel this project? Active agents will be stopped and unfinished work will not be scheduled.")) return;

    const buttons = [...document.querySelectorAll("[data-project-action]")];
    buttons.forEach((item) => { item.disabled = true; });
    const originalLabel = button.textContent;
    button.textContent = action === "cancel" ? "Cancelling..." : `${action === "pause" ? "Pausing" : "Resuming"}...`;
    try {
      await apiFetch(`/api/projects/${encodeURIComponent(projectId)}/${action}`, { method: "POST" });
      const messages = { pause: "Project paused", resume: "Project resumed", cancel: "Project cancelled" };
      showToast(messages[action], "success");
      await renderCurrentRoute({ refresh: true });
    } catch (error) {
      showToast(error.message, "error");
      buttons.forEach((item) => { item.disabled = false; });
      button.textContent = originalLabel;
    }
  }

  function renderOverview() {
    const snapshot = state.snapshot;
    const project = snapshot.project;
    const progress = progressSummary(snapshot);
    const tasks = snapshot.tasks || [];
    const milestones = [...(snapshot.milestones || [])].sort((a, b) => (a.ordinal || 0) - (b.ordinal || 0));
    const criticalIds = new Set(snapshot.critical_path || []);
    const criticalTasks = tasks.filter((task) => criticalIds.has(task.id));
    const blockers = snapshot.blockers || [];
    const planTasks = tasks.filter((task) => !["succeeded", "cancelled"].includes(task.status)).slice(0, 8);
    setView(`
      ${pageHeader("Project / Goal", project.name, "Live execution state from the durable scheduler.", `${statusPill(snapshot.status)}${state.demo ? '<span class="tag">Demo data</span>' : ""}${projectActionControls(snapshot.status)}`)}
      <section class="grid grid-4" aria-label="Overall progress metrics">
        <article class="metric-card"><div class="metric-label"><span>Overall progress</span><span>${Math.round(progress.percent)}%</span></div><div class="metric-value">${progress.completed}<span class="subtle"> / ${progress.total}</span></div><progress class="progress-control" max="100" value="${progress.percent}" aria-label="${Math.round(progress.percent)} percent complete"></progress></article>
        <article class="metric-card"><div class="metric-label">Active work</div><div class="metric-value">${progress.active}</div><div class="metric-detail">Ready, queued, and running tasks</div></article>
        <article class="metric-card"><div class="metric-label">Active agents</div><div class="metric-value">${(snapshot.runs || []).filter((run) => ["starting", "running"].includes(run.status)).length}</div><div class="metric-detail">Across ${(snapshot.providers || []).length} provider backends</div></article>
        <article class="metric-card"><div class="metric-label">Blocked or failed</div><div class="metric-value">${progress.failed}</div><div class="metric-detail">Bounded recovery requires attention</div></article>
      </section>
      <div class="grid grid-2 mt-16">
        <section class="panel grid-span-2"><div class="section-head"><div><h2>User goal</h2><p>The Director decomposes this goal into milestones and scoped work.</p></div></div><p class="goal-copy">${escapeHTML(project.goal)}</p></section>
        <section class="panel"><div class="section-head"><div><h2>Milestones</h2><p>${milestones.length} delivery checkpoints</p></div></div>
          ${milestones.length ? `<ol class="milestone-list">${milestones.map((milestone, index) => `<li class="milestone-item ${escapeHTML(milestone.status)}"><span class="milestone-index">${milestone.status === "completed" ? "✓" : index + 1}</span><div class="item-content"><div class="item-title">${escapeHTML(milestone.title)}</div><div class="item-copy">${escapeHTML(milestone.description || "No description")}</div></div>${statusPill(milestone.status)}</li>`).join("")}</ol>` : emptyInline("Milestones will appear after Director planning.")}
        </section>
        <section class="panel"><div class="section-head"><div><h2>Current plan</h2><p>Highest priority unfinished work</p></div><a href="${replaceRouteValue(ROUTES.dag, project.id)}">Open DAG</a></div>
          ${planTasks.length ? `<ol class="list-clean">${planTasks.map((task, index) => `<li class="plan-item"><span class="plan-index">${index + 1}</span><div class="item-content"><div class="item-title">${escapeHTML(task.goal)}</div><div class="item-copy">${escapeHTML(humanize(task.task_type))} • priority ${escapeHTML(task.priority)}</div></div>${statusPill(task.status)}</li>`).join("")}</ol>` : emptyInline("All planned tasks are complete.")}
        </section>
        <section class="panel"><div class="section-head"><div><h2>Critical path</h2><p>Dependency chain controlling completion time</p></div></div>
          ${criticalTasks.length ? `<ol class="critical-list">${criticalTasks.map((task, index) => `<li class="critical-item"><span class="plan-index">${index + 1}</span><div class="item-content"><div class="item-title">${escapeHTML(task.goal)}</div><div class="item-copy">${escapeHTML(compactId(task.id))}</div></div>${statusPill(task.status)}</li>`).join("")}</ol>` : emptyInline("The scheduler has not calculated a critical path yet.")}
        </section>
        <section class="panel"><div class="section-head"><div><h2>Blockers</h2><p>Issues preventing useful forward progress</p></div></div>
          ${blockers.length ? `<ul class="blocker-list">${blockers.map((blocker) => `<li class="blocker-item"><span class="blocker-icon">!</span><div class="item-content"><div class="item-title">${escapeHTML(blocker.title || blocker.reason || "Blocked task")}</div><div class="item-copy">${escapeHTML(blocker.detail || blocker.message || blocker.blocked_reason || "No detail supplied")}</div></div></li>`).join("")}</ul>` : emptyInline("No blockers are reported.", "good")}
        </section>
      </div>
    `);
  }

  function emptyInline(message, tone = "muted") {
    return `<div class="subtle" data-tone="${escapeHTML(tone)}">${escapeHTML(message)}</div>`;
  }

  function taskLevels(tasks) {
    const byId = new Map(tasks.map((task) => [task.id, task]));
    const memo = new Map();
    function level(task, visiting = new Set()) {
      if (memo.has(task.id)) return memo.get(task.id);
      if (visiting.has(task.id)) return 0;
      visiting.add(task.id);
      const dependencies = (task.dependencies || []).map((id) => byId.get(id)).filter(Boolean);
      const result = dependencies.length ? 1 + Math.max(...dependencies.map((item) => level(item, visiting))) : 0;
      visiting.delete(task.id);
      memo.set(task.id, result);
      return result;
    }
    tasks.forEach((task) => level(task));
    return memo;
  }

  function renderDag() {
    const snapshot = state.snapshot;
    const tasks = snapshot.tasks || [];
    if (!tasks.length) {
      setView(`${pageHeader("Execution graph", "Task DAG", "Dependencies, ownership, and execution state.")}<div class="state-wrap"><section class="state-card"><div class="state-symbol">0</div><h1>No tasks in the DAG</h1><p>The Director has not submitted an executable task graph yet.</p></section></div>`);
      return;
    }
    const selectedId = parseRoute().query.get("task") || tasks[0].id;
    const selected = tasks.find((task) => task.id === selectedId) || tasks[0];
    const levels = taskLevels(tasks);
    const groups = new Map();
    tasks.forEach((task) => {
      const key = levels.get(task.id) || 0;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(task);
    });
    const nodeWidth = 190;
    const nodeHeight = 76;
    const horizontalGap = 70;
    const verticalGap = 40;
    const positions = new Map();
    let maxRows = 1;
    [...groups.entries()].forEach(([level, items]) => {
      maxRows = Math.max(maxRows, items.length);
      items.forEach((task, row) => positions.set(task.id, { x: 34 + level * (nodeWidth + horizontalGap), y: 34 + row * (nodeHeight + verticalGap) }));
    });
    const width = Math.max(720, 68 + (Math.max(...levels.values()) + 1) * (nodeWidth + horizontalGap));
    const height = Math.max(560, 68 + maxRows * (nodeHeight + verticalGap));
    const edges = tasks.flatMap((task) => (task.dependencies || []).map((dependencyId) => {
      const from = positions.get(dependencyId);
      const to = positions.get(task.id);
      if (!from || !to) return "";
      const x1 = from.x + nodeWidth;
      const y1 = from.y + nodeHeight / 2;
      const x2 = to.x;
      const y2 = to.y + nodeHeight / 2;
      const bend = x1 + (x2 - x1) / 2;
      return `<path class="dag-edge" d="M ${x1} ${y1} C ${bend} ${y1}, ${bend} ${y2}, ${x2} ${y2}"/>`;
    })).join("");
    const nodes = tasks.map((task) => {
      const position = positions.get(task.id);
      const goal = task.goal.length > 27 ? `${task.goal.slice(0, 27)}...` : task.goal;
      return `<g class="dag-node ${task.id === selected.id ? "selected" : ""}" role="button" tabindex="0" data-dag-task="${escapeHTML(task.id)}" transform="translate(${position.x} ${position.y})" aria-label="Inspect ${escapeHTML(task.goal)}"><rect width="${nodeWidth}" height="${nodeHeight}" rx="8"/><text class="dag-type" x="12" y="18">${escapeHTML(humanize(task.task_type))}</text><text class="dag-goal" x="12" y="40">${escapeHTML(goal)}</text><text class="dag-state" x="12" y="61">${escapeHTML(humanize(task.status))}</text></g>`;
    }).join("");
    setView(`
      ${pageHeader("Execution graph", "Task DAG", "Tasks, dependencies, current status, and parent relationships.", `<span class="tag">${tasks.length} tasks</span>${statusPill(snapshot.status)}${projectActionControls(snapshot.status)}`)}
      <div class="dag-shell">
        <div class="dag-canvas" role="region" aria-label="Task dependency graph" tabindex="0"><svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" aria-label="Task DAG"><defs><marker id="dag-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--graph-line)"/></marker></defs>${edges}${nodes}</svg></div>
        <aside class="panel dag-inspector" aria-label="Selected task"><div class="section-head"><div><h2>Task detail</h2><p>${escapeHTML(compactId(selected.id))}</p></div>${statusPill(selected.status)}</div>
          <p class="goal-copy compact">${escapeHTML(selected.goal)}</p>
          <dl class="definition-list"><dt>Type</dt><dd>${escapeHTML(humanize(selected.task_type))}</dd><dt>Parent</dt><dd>${escapeHTML(compactId(selected.parent_task_id))}</dd><dt>Dependencies</dt><dd>${selected.dependencies?.length ? selected.dependencies.map(compactId).map(escapeHTML).join(", ") : "None"}</dd><dt>Write scope</dt><dd>${selected.write_scope?.length ? selected.write_scope.map(escapeHTML).join(", ") : "Read-only"}</dd><dt>Retries</dt><dd>${escapeHTML(selected.retry_count)} of ${escapeHTML(selected.retry_limit)}</dd><dt>Provider</dt><dd>${escapeHTML(selected.assigned_provider || "Not assigned")}</dd></dl>
        </aside>
      </div>
    `);
  }

  function agentDepth(run, byId, memo = new Map()) {
    if (memo.has(run.id)) return memo.get(run.id);
    const parent = byId.get(run.parent_run_id);
    const depth = parent ? Math.min(4, agentDepth(parent, byId, memo) + 1) : 0;
    memo.set(run.id, depth);
    return depth;
  }

  function renderAgents() {
    const snapshot = state.snapshot;
    const runs = [...(snapshot.runs || [])].sort((a, b) => new Date(a.started_at) - new Date(b.started_at));
    const tasks = new Map((snapshot.tasks || []).map((task) => [task.id, task]));
    const byId = new Map(runs.map((run) => [run.id, run]));
    const tree = runs.length ? runs.map((run) => {
      const task = tasks.get(run.task_id);
      const depth = agentDepth(run, byId);
      return `<li><a class="tree-node" data-depth="${depth}" href="${replaceRouteValue(ROUTES.agentDetail, snapshot.project.id, run.id)}"><span><strong>${escapeHTML(humanize(run.role))}</strong><small>${escapeHTML(run.provider)} / ${escapeHTML(run.model || "default model")} • ${escapeHTML(task?.goal || compactId(run.task_id))}</small></span>${statusPill(run.status)}</a></li>`;
    }).join("") : emptyInline("No active agents");
    const columns = [
      { key: "role", label: "Role", help: "Scheduler-assigned agent role.", type: "enum", max: 60, width: 150, pinned: true, short: true, value: (run) => humanize(run.role) },
      { key: "provider", label: "Provider", help: "Independent worker backend.", type: "enum", max: 40, width: 110, short: true },
      { key: "model", label: "Model", help: "Configured model identifier.", type: "string", max: 100, width: 165, short: true, value: (run) => run.model || "Provider default" },
      { key: "parent", label: "Parent", help: "Parent agent run in the hierarchy.", type: "string", max: 40, width: 120, short: true, value: (run) => compactId(run.parent_run_id) },
      { key: "task", label: "Current task", help: "Narrow task assigned by the scheduler.", type: "longtext", max: 2000, width: 300, value: (run) => tasks.get(run.task_id)?.goal || compactId(run.task_id) },
      { key: "status", label: "Status", help: "Current durable run state.", type: "enum", max: 30, width: 120, short: true, format: (value) => statusPill(value) },
      { key: "runtime", label: "Runtime", help: "Elapsed wall-clock execution time.", type: "duration", max: 30, width: 100, short: true, value: (run) => durationBetween(run.started_at, run.finished_at || Date.now()) },
      { key: "attempt", label: "Retry count", help: "Current bounded execution attempt.", type: "integer", max: 3, width: 90, short: true, value: (run) => Math.max(0, Number(run.attempt || 1) - 1) },
      { key: "heartbeat", label: "Last heartbeat", help: "Most recent deterministic liveness signal.", type: "datetime", max: 40, width: 135, short: true, value: (run) => formatDate(run.heartbeat_at) },
    ];
    setView(`
      ${pageHeader("Agent execution", "Agent tree", "Every active and completed agent, its parent, current task, and retry state.", `<span class="tag">${runs.filter((run) => ["running", "starting"].includes(run.status)).length} active</span>${statusPill(snapshot.status)}${projectActionControls(snapshot.status)}`)}
      <section class="panel mb-16"><div class="section-head"><div><h2>Hierarchy</h2><p>Human to Director to Workstream Leads to worker pools.</p></div></div><ol class="tree-list">${tree}</ol></section>
      ${renderDataTable({ id: "agents", title: "All agent runs", rows: runs, columns, emptyMessage: "No active agents", filterField: "status" })}
    `);
  }

  const AGENT_TABS = Object.freeze([
    ["instructions", "Instructions"],
    ["events", "Live events"],
    ["commands", "Commands"],
    ["tools", "Tool calls"],
    ["files", "Files changed"],
    ["diff", "Git diff"],
    ["tests", "Test output"],
    ["messages", "Messages"],
    ["summary", "Final summary"],
  ]);

  function runEvents(runId) {
    return state.events.filter((event) => event.run_id === runId || event.payload?.run_id === runId);
  }

  function renderAgentDetail(runId, requestedTab) {
    const snapshot = state.snapshot;
    const run = (snapshot.runs || []).find((item) => item.id === runId);
    if (!run) {
      stateView("Agent run not found", "This run may have expired or belongs to another project.", `<a class="button button-primary" href="${replaceRouteValue(ROUTES.agents, snapshot.project.id)}">Back to agents</a>`, "?");
      return;
    }
    const task = (snapshot.tasks || []).find((item) => item.id === run.task_id);
    const validTabs = new Set(AGENT_TABS.map(([key]) => key));
    const activeTab = validTabs.has(requestedTab) ? requestedTab : "events";
    const tabs = AGENT_TABS.map(([key, label]) => `<button class="tab ${key === activeTab ? "active" : ""}" type="button" role="tab" aria-selected="${key === activeTab}" data-agent-tab="${key}">${label}</button>`).join("");
    setView(`
      ${pageHeader("Agent inspection", humanize(run.role), task?.goal || "Inspect scheduler run", `<a class="button button-secondary" href="${replaceRouteValue(ROUTES.agents, snapshot.project.id)}">All agents</a>${statusPill(run.status)}${projectActionControls(snapshot.status)}`)}
      <section class="grid grid-4 mb-16">
        <article class="metric-card"><div class="metric-label">Provider and model</div><div class="metric-value compact">${escapeHTML(run.provider)}</div><div class="metric-detail">${escapeHTML(run.model || "Provider default")}</div></article>
        <article class="metric-card"><div class="metric-label">Runtime</div><div class="metric-value">${escapeHTML(durationBetween(run.started_at, run.finished_at || Date.now()))}</div><div class="metric-detail">Started ${escapeHTML(formatDate(run.started_at, true))}</div></article>
        <article class="metric-card"><div class="metric-label">Retry count</div><div class="metric-value">${Math.max(0, Number(run.attempt || 1) - 1)}</div><div class="metric-detail">Attempt ${escapeHTML(run.attempt || 1)}</div></article>
        <article class="metric-card"><div class="metric-label">Heartbeat</div><div class="metric-value compact">${escapeHTML(formatDate(run.heartbeat_at))}</div><div class="metric-detail">Progress ${escapeHTML(formatDate(run.progress_at))}</div></article>
      </section>
      <section class="panel"><div class="tabs" role="tablist" aria-label="Agent inspection data">${tabs}</div><div role="tabpanel">${renderAgentTab(activeTab, run, task)}</div></section>
    `);
  }

  function renderAgentTab(tab, run, task) {
    const events = runEvents(run.id);
    if (tab === "instructions") {
      return `<div class="section-head"><div><h2>Instructions</h2><p>Immutable task contract supplied to this run.</p></div></div><pre class="code-block">${escapeHTML(task?.instructions || "Instructions are not present in this snapshot.")}</pre>`;
    }
    if (tab === "events") {
      if (!events.length) return emptyInline("Waiting for the first live event.");
      return `<div class="section-head"><div><h2>Live events</h2><p>Cursor-polled, redacted scheduler events.</p></div><span class="tag">${events.length} events</span></div><div class="terminal">${events.map((event) => `<div class="terminal-line"><time>${escapeHTML(formatDate(event.created_at))}</time><span class="terminal-type">${escapeHTML(event.event_type)}</span><span>${escapeHTML(eventText(event))}</span></div>`).join("")}</div>`;
    }
    if (tab === "commands") {
      const commandEvents = events.filter((event) => event.event_type.includes("command") || event.payload?.command);
      return listEventPayloads("Commands", "Commands captured by the worker runtime.", commandEvents, (event) => event.payload?.command || eventText(event));
    }
    if (tab === "tools") {
      const toolEvents = events.filter((event) => event.event_type.includes("tool") || event.payload?.tool);
      return listEventPayloads("Tool calls", "Redacted tool activity emitted by the provider adapter.", toolEvents, (event) => event.payload?.tool || eventText(event));
    }
    if (tab === "files") {
      const files = run.result?.files_changed || task?.result?.files_changed || [];
      return `<div class="section-head"><div><h2>Files changed</h2><p>Files declared in the compact task result.</p></div></div>${files.length ? `<ul class="list-clean">${files.map((file) => `<li class="plan-item"><span class="plan-index">F</span><code>${escapeHTML(file)}</code></li>`).join("")}</ul>` : emptyInline("No changed files were reported.")}`;
    }
    if (tab === "diff") {
      const diff = [...events].reverse().find((event) => typeof event.payload?.diff === "string")?.payload?.diff;
      return `<div class="section-head"><div><h2>Git diff</h2><p>Branch changes captured for inspection.</p></div></div><pre class="code-block">${escapeHTML(diff || "No Git diff has been attached to this run.")}</pre>`;
    }
    if (tab === "tests") {
      const tests = run.result?.test_results || task?.result?.test_results || [];
      return `<div class="section-head"><div><h2>Test output</h2><p>Structured validation results returned by the worker.</p></div></div><pre class="code-block">${escapeHTML(tests.length ? escapeJson(tests) : "No test results were reported.")}</pre>`;
    }
    if (tab === "messages") {
      const messages = events.filter((event) => event.event_type.includes("message") || event.payload?.message || event.payload?.text);
      return listEventPayloads("Messages", "Compact provider messages retained by the control plane.", messages, eventText);
    }
    const result = run.result || task?.result;
    return `<div class="section-head"><div><h2>Final summary</h2><p>Compact result returned upward without the child conversation.</p></div></div>${result ? `<p class="goal-copy">${escapeHTML(result.summary)}</p><dl class="definition-list spaced"><dt>Commit</dt><dd><code>${escapeHTML(result.commit || "No commit")}</code></dd><dt>Issues</dt><dd>${result.remaining_issues?.length ? result.remaining_issues.map(escapeHTML).join(", ") : "None reported"}</dd><dt>Follow-ups</dt><dd>${result.proposed_followup_tasks?.length || 0}</dd></dl>` : emptyInline("The agent has not produced a final summary yet.")}`;
  }

  function eventText(event) {
    const payload = event.payload || {};
    return payload.message || payload.text || payload.summary || payload.command || escapeJson(payload);
  }

  function listEventPayloads(title, copy, events, value) {
    return `<div class="section-head"><div><h2>${escapeHTML(title)}</h2><p>${escapeHTML(copy)}</p></div></div>${events.length ? `<ol class="event-stream">${events.map((event) => `<li class="event-item"><time>${escapeHTML(formatDate(event.created_at))}</time><span class="event-type">${escapeHTML(event.event_type)}</span><code>${escapeHTML(value(event))}</code></li>`).join("")}</ol>` : emptyInline(`No ${title.toLowerCase()} have been recorded.`)}`;
  }

  function renderIntegration() {
    const snapshot = state.snapshot;
    const workspaces = snapshot.workspaces || [];
    const queue = snapshot.merge_queue || [];
    const validations = snapshot.validations || [];
    const workspaceColumns = [
      { key: "branch", label: "Branch", help: "Scheduler-owned task branch.", type: "string", max: 255, width: 220, pinned: true },
      { key: "task_id", label: "Task", help: "Task that exclusively owns this workspace.", type: "string", max: 40, width: 120, short: true, value: (row) => compactId(row.task_id) },
      { key: "worktree_path", label: "Worktree", help: "Isolated Git worktree path.", type: "string", max: 1000, width: 310 },
      { key: "write_scope", label: "Write scope", help: "Explicit paths this task may modify.", type: "longtext", max: 2000, width: 260, value: (row) => (row.write_scope || []).join(", ") || "Read-only" },
      { key: "base_commit", label: "Base commit", help: "Commit used when the worktree was allocated.", type: "string", max: 64, width: 135, short: true, value: (row) => compactId(row.base_commit) },
      { key: "port", label: "Port", help: "Unique preview resource when assigned.", type: "integer", max: 5, width: 80, short: true },
      { key: "status", label: "Status", help: "Workspace lifecycle state.", type: "enum", max: 30, width: 110, short: true, format: (value) => statusPill(value) },
    ];
    const queueColumns = [
      { key: "position", label: "Position", help: "Controlled merge queue order.", type: "integer", max: 4, width: 75, pinned: true, short: true },
      { key: "branch", label: "Branch", help: "Candidate task branch.", type: "string", max: 255, width: 220 },
      { key: "commit", label: "Commit", help: "Exact candidate commit.", type: "string", max: 64, width: 130, short: true, value: (row) => compactId(row.commit) },
      { key: "status", label: "Status", help: "Merge validation and integration state.", type: "enum", max: 30, width: 115, short: true, format: (value) => statusPill(value) },
      { key: "conflict_details", label: "Conflicts", help: "Persisted conflict detail for repair.", type: "longtext", max: 4000, width: 300 },
      { key: "updated_at", label: "Updated", help: "Most recent merge queue transition.", type: "datetime", max: 40, width: 145, short: true, value: (row) => formatDate(row.updated_at, true) },
    ];
    const validationColumns = [
      { key: "stage", label: "Stage", help: "Build, typecheck, lint, test, or security gate.", type: "enum", max: 80, width: 140, pinned: true, short: true },
      { key: "command", label: "Command", help: "Validation command executed in isolation.", type: "longtext", max: 2000, width: 320 },
      { key: "status", label: "Status", help: "Durable validation outcome.", type: "enum", max: 30, width: 110, short: true, format: (value) => statusPill(value) },
      { key: "duration_seconds", label: "Duration", help: "Validation wall-clock duration.", type: "number", max: 20, width: 100, short: true, value: (row) => row.duration_seconds == null ? "Not finished" : `${Number(row.duration_seconds).toFixed(1)}s` },
      { key: "output", label: "Output", help: "Bounded validation output.", type: "longtext", max: 10000, width: 360 },
      { key: "finished_at", label: "Finished", help: "Completion timestamp.", type: "datetime", max: 40, width: 145, short: true, value: (row) => formatDate(row.finished_at, true) },
    ];
    setView(`
      ${pageHeader("Integration", "Build and merge control", "Worktree ownership, merge order, validation gates, and preview state.", `${statusPill(snapshot.status)}${projectActionControls(snapshot.status)}`)}
      <section class="grid grid-3 mb-16">
        <article class="metric-card"><div class="metric-label">Worktrees</div><div class="metric-value">${workspaces.length}</div><div class="metric-detail">${workspaces.filter((item) => item.status === "active").length} active</div></article>
        <article class="metric-card"><div class="metric-label">Merge queue</div><div class="metric-value">${queue.filter((item) => item.status !== "merged").length}</div><div class="metric-detail">${queue.filter((item) => item.status === "conflict").length} conflicts</div></article>
        <article class="metric-card"><div class="metric-label">Validation</div><div class="metric-value">${validations.filter((item) => item.status === "passed").length}</div><div class="metric-detail">${validations.filter((item) => item.status === "failed").length} failed gates</div></article>
      </section>
      <div class="stack">
        ${renderDataTable({ id: "workspaces", title: "Worktrees and branches", rows: workspaces, columns: workspaceColumns, emptyMessage: "No worktrees have been allocated." })}
        ${renderDataTable({ id: "merge-queue", title: "Merge queue", rows: queue, columns: queueColumns, emptyMessage: "The merge queue is empty.", filterField: "status" })}
        ${renderDataTable({ id: "validations", title: "Builds and tests", rows: validations, columns: validationColumns, emptyMessage: "No validations have run.", filterField: "status" })}
        <section class="panel"><div class="section-head"><div><h2>Preview deployments</h2><p>Integrated builds appear here before production promotion.</p></div>${statusPill(snapshot.preview?.status || "pending")}</div>${snapshot.preview?.url ? `<a class="button button-secondary" href="${escapeHTML(snapshot.preview.url)}" target="_blank" rel="noopener">Open preview</a>` : emptyInline("No preview deployment is available yet.")}</section>
      </div>
    `);
  }

  function providerTelemetry(snapshot) {
    const rateEvents = state.events.filter((event) => event.event_type.includes("rate") || event.payload?.rate_limited);
    let tokens = 0;
    let cost = 0;
    state.events.forEach((event) => {
      tokens += Number(event.payload?.tokens || event.payload?.total_tokens || 0);
      cost += Number(event.payload?.cost || event.payload?.cost_usd || 0);
    });
    return { rateEvents, tokens, cost, providers: snapshot.providers || [] };
  }

  function renderCapacity() {
    const snapshot = state.snapshot;
    const telemetry = providerTelemetry(snapshot);
    const providers = telemetry.providers;
    const totalCapacity = providers.reduce((sum, provider) => sum + Number(provider.max_concurrency || 0), 0);
    const active = providers.reduce((sum, provider) => sum + Number(provider.active_runs || 0), 0);
    const providerColumns = [
      { key: "name", label: "Provider", help: "Independent scheduler backend.", type: "string", max: 80, width: 180, pinned: true, format: (value, row) => `<div class="provider-summary"><span class="provider-mark">${escapeHTML(String(value).slice(0, 2))}</span><span><strong>${escapeHTML(value)}</strong><small>${escapeHTML((row.capabilities || []).join(", ") || "No capabilities")}</small></span></div>` },
      { key: "available", label: "Availability", help: "Live provider readiness state.", type: "boolean", max: 10, width: 115, short: true, value: (row) => row.available ? "available" : "unavailable", format: (value) => statusPill(value) },
      { key: "capacity", label: "Worker capacity", help: "Active runs against configured concurrency.", type: "number", max: 30, width: 165, value: (row) => `${row.active_runs || 0} / ${row.max_concurrency || 0}`, format: (value, row) => `<div class="capacity-bar"><strong>${escapeHTML(value)}</strong><progress class="progress-control" max="100" value="${clampPercent((Number(row.active_runs || 0) / Math.max(1, Number(row.max_concurrency || 0))) * 100)}" aria-label="Provider capacity utilization"></progress></div>` },
      { key: "rpm", label: "API RPM", help: "Requests per minute utilization when reported.", type: "number", max: 30, width: 120, short: true, value: (row) => telemetryRatio(row.rpm_used, row.rpm_limit) },
      { key: "tpm", label: "API TPM", help: "Tokens per minute utilization when reported.", type: "number", max: 30, width: 135, short: true, value: (row) => telemetryRatio(row.tpm_used, row.tpm_limit) },
      { key: "latency", label: "P95 latency", help: "Recent provider p95 response latency.", type: "number", max: 20, width: 105, short: true, value: (row) => `${Number(row.latency_p95_seconds || 0).toFixed(1)}s` },
      { key: "success", label: "Success rate", help: "Recent bounded task success ratio.", type: "number", max: 20, width: 105, short: true, value: (row) => `${Math.round(Number(row.recent_success_rate || 0) * 100)}%` },
      { key: "cost", label: "Relative cost", help: "Router-normalized provider cost signal.", type: "number", max: 20, width: 105, short: true, value: (row) => Number(row.relative_cost || 0).toFixed(2) },
      { key: "rate_limited_until", label: "Rate limit until", help: "Backoff deadline after a provider rate limit.", type: "datetime", max: 40, width: 145, short: true, value: (row) => formatDate(row.rate_limited_until, true) },
    ];
    const rateColumns = [
      { key: "provider", label: "Provider", help: "Rate-limited backend.", type: "enum", max: 80, width: 130, pinned: true, value: (event) => event.payload?.provider || "Unknown" },
      { key: "event_type", label: "Event", help: "Rate-limit event classification.", type: "enum", max: 100, width: 180 },
      { key: "message", label: "Detail", help: "Concrete failure or retry information.", type: "longtext", max: 4000, width: 360, value: eventText },
      { key: "created_at", label: "Time", help: "When the control plane recorded the event.", type: "datetime", max: 40, width: 155, short: true, value: (event) => formatDate(event.created_at, true) },
    ];
    setView(`
      ${pageHeader("Capacity", "Provider capacity", "Current concurrency, rate limits, performance, and cost signals used by routing.", `${statusPill(snapshot.status)}${projectActionControls(snapshot.status)}`)}
      <section class="grid grid-4 mb-16">
        <article class="metric-card"><div class="metric-label">Active agents by provider</div><div class="metric-value">${active}</div><div class="metric-detail">${providers.filter((provider) => provider.active_runs).length} providers in use</div></article>
        <article class="metric-card"><div class="metric-label">Available worker capacity</div><div class="metric-value">${Math.max(0, totalCapacity - active)}</div><div class="metric-detail">${totalCapacity} configured slots</div></article>
        <article class="metric-card"><div class="metric-label">Cost and tokens</div><div class="metric-value medium">${telemetry.cost ? `$${telemetry.cost.toFixed(2)}` : "Awaiting telemetry"}</div><div class="metric-detail">${telemetry.tokens ? `${telemetry.tokens.toLocaleString()} tokens` : "No token events yet"}</div></article>
        <article class="metric-card"><div class="metric-label">Provider failures</div><div class="metric-value">${providers.filter((provider) => !provider.available).length}</div><div class="metric-detail">${telemetry.rateEvents.length} rate-limit events</div></article>
      </section>
      <div class="stack">
        ${renderDataTable({ id: "providers", title: "Real-time providers", rows: providers, columns: providerColumns, emptyMessage: "No providers are registered." })}
        ${renderDataTable({ id: "rate-limits", title: "Rate limit events", rows: telemetry.rateEvents, columns: rateColumns, emptyMessage: "No rate-limit events have been reported." })}
      </div>
    `);
  }

  function telemetryRatio(used, limit) {
    if (used == null || limit == null) return "Awaiting telemetry";
    return `${Number(used).toLocaleString()} / ${Number(limit).toLocaleString()}`;
  }

  function tableStorageKey(id) {
    return `${STORAGE.tablePrefix}${id}`;
  }

  function tableSettings(id, columns) {
    const stored = readStorage(tableStorageKey(id), {});
    const keys = columns.map((column) => column.key);
    const validOrder = Array.isArray(stored.order) ? stored.order.filter((key) => keys.includes(key)) : [];
    const order = [...validOrder, ...keys.filter((key) => !validOrder.includes(key))];
    return {
      order,
      hidden: Array.isArray(stored.hidden) ? stored.hidden.filter((key) => keys.includes(key)) : [],
      widths: stored.widths && typeof stored.widths === "object" ? stored.widths : {},
      filter: String(stored.filter || "all"),
      search: String(stored.search || ""),
    };
  }

  function saveTableSettings(id, settings) {
    writeStorage(tableStorageKey(id), settings);
  }

  function tableColumnKeys(card) {
    const optionKeys = [...card.querySelectorAll("[data-column-toggle]")].map((item) => item.dataset.columnToggle);
    return optionKeys.length ? optionKeys : [...card.querySelectorAll("th[data-column-key]")].map((item) => item.dataset.columnKey);
  }

  function columnValue(column, row) {
    return column.value ? column.value(row) : row[column.key];
  }

  function renderDataTable({ id, title, rows, columns, emptyMessage, filterField = "" }) {
    const settings = tableSettings(id, columns);
    const ordered = settings.order.map((key) => columns.find((column) => column.key === key)).filter(Boolean);
    const visible = ordered.filter((column) => !settings.hidden.includes(column.key));
    const categories = filterField ? [...new Set(rows.map((row) => String(row[filterField] || "unknown")))].sort() : [];
    const categoryRows = rows.filter((row) => !filterField || settings.filter === "all" || String(row[filterField] || "unknown") === settings.filter);
    const filtered = categoryRows.filter((row) => {
      if (!settings.search) return true;
      const haystack = columns.map((column) => String(columnValue(column, row) ?? "")).join(" ").toLowerCase();
      return haystack.includes(settings.search.toLowerCase());
    });
    const chips = categories.length ? `<div class="quick-filters" aria-label="Quick filters"><button class="filter-chip ${settings.filter === "all" ? "active" : ""}" type="button" data-table-filter="${escapeHTML(id)}" data-filter-value="all">All<span class="filter-count">${rows.length}</span></button>${categories.map((category) => `<button class="filter-chip ${settings.filter === category ? "active" : ""}" type="button" data-table-filter="${escapeHTML(id)}" data-filter-value="${escapeHTML(category)}">${escapeHTML(humanize(category))}<span class="filter-count">${rows.filter((row) => String(row[filterField] || "unknown") === category).length}</span></button>`).join("")}</div>` : "";
    const columnSearch = columns.length > 10 ? '<input class="table-search" type="search" data-column-search placeholder="Find a column" aria-label="Find a column">' : "";
    const columnWidths = visible.map((column) => Math.max(50, Number(settings.widths[column.key] || column.width || 150)));
    const tableWidth = 42 + columnWidths.reduce((sum, width) => sum + width, 0);
    const colgroup = `<colgroup><col width="42">${visible.map((column, index) => `<col width="${columnWidths[index]}" data-column-key="${escapeHTML(column.key)}">`).join("")}</colgroup>`;
    const header = visible.map((column) => {
      return `<th scope="col" data-column-key="${escapeHTML(column.key)}" data-help="${escapeHTML(column.help || "Operational field")}" data-type="${escapeHTML(column.type || "string")}" data-max="${escapeHTML(column.max || "variable")}" data-pinned="${column.pinned ? "true" : "false"}" draggable="${column.pinned ? "false" : "true"}"><span>${escapeHTML(column.label)}</span><span class="resize-handle" data-resize-handle role="separator" aria-orientation="vertical" aria-label="Resize ${escapeHTML(column.label)}"></span></th>`;
    }).join("");
    const body = categoryRows.length ? categoryRows.map((row, rowIndex) => {
      const searchText = columns.map((column) => String(columnValue(column, row) ?? "")).join(" ").toLowerCase();
      const searchHidden = settings.search && !searchText.includes(settings.search.toLowerCase());
      const cells = visible.map((column) => {
        const raw = columnValue(column, row);
        const isEmpty = raw === null || raw === undefined || raw === "";
        const text = isEmpty ? "Not set" : String(raw);
        const formatted = isEmpty ? '<span class="empty-cell">Not set</span>' : (column.format ? column.format(raw, row) : escapeHTML(text));
        return `<td class="read-only-cell ${column.short ? "short-cell" : ""}" data-cell-value="${escapeHTML(text)}" data-column-label="${escapeHTML(column.label)}"><div class="cell-value ${column.short ? "short" : ""}">${formatted}</div></td>`;
      }).join("");
      return `<tr data-search-text="${escapeHTML(searchText)}" ${searchHidden ? "hidden" : ""}><td class="row-number">${rowIndex + 1}</td>${cells}</tr>`;
    }).join("") : "";
    const emptyRow = `<tr data-search-empty ${filtered.length ? "hidden" : ""}><td class="table-empty" colspan="${visible.length + 1}">${escapeHTML(categoryRows.length ? "No rows match this search." : emptyMessage)}</td></tr>`;
    return `
      <section class="table-card" data-table-id="${escapeHTML(id)}">
        <div class="table-toolbar">
          <div class="table-title"><strong>${escapeHTML(title)}</strong><span class="table-count" data-table-count>${filtered.length} of ${rows.length}</span></div>
          <input class="table-search" type="search" value="${escapeHTML(settings.search)}" data-table-search="${escapeHTML(id)}" placeholder="Search rows" aria-label="Search ${escapeHTML(title)}">
          <span class="toolbar-spacer"></span>
          <div class="columns-wrap"><button class="button button-secondary button-small" type="button" data-columns-button aria-expanded="false">Columns ▾</button><div class="columns-popover" data-columns-popover hidden>${columnSearch}${ordered.map((column) => `<label class="column-option" data-column-option="${escapeHTML(column.label.toLowerCase())}"><input type="checkbox" data-column-toggle="${escapeHTML(column.key)}" ${settings.hidden.includes(column.key) ? "" : "checked"}> <span>${escapeHTML(column.label)}</span></label>`).join("")}<button class="columns-reset" type="button" data-reset-columns>Reset column order</button></div></div>
        </div>
        ${chips}
        <div class="top-scrollbar" data-top-scroll><svg data-scroll-spacer width="${tableWidth}" height="1" aria-hidden="true"></svg></div>
        <div class="table-scroll" data-table-scroll><table class="data-table" width="${tableWidth}">${colgroup}<thead><tr><th class="row-number" data-pinned="true"><button class="row-number-button" type="button" data-row-number-toggle title="Toggle sticky headers">#</button></th>${header}</tr></thead><tbody>${body}${emptyRow}</tbody></table></div>
        <footer class="table-footer-hint">Read-only data. Drag headers to reorder. Drag the right edge to resize. Hover truncated cells for full values. Click # to toggle sticky headers.</footer>
      </section>
    `;
  }

  function setupTables() {
    const sticky = readStorage(STORAGE.sticky, true) !== false;
    document.querySelectorAll("[data-table-id]").forEach((card) => {
      card.classList.toggle("sticky-header-disabled", !sticky);
      setupScrollSync(card);
      setupColumnDrag(card);
      setupColumnResize(card);
      setupHeaderTips(card);
      setupCellPopovers(card);
    });
  }

  function setupScrollSync(card) {
    const top = card.querySelector("[data-top-scroll]");
    const body = card.querySelector("[data-table-scroll]");
    const table = card.querySelector("table");
    if (!top || !body || !table) return;
    const inner = top.querySelector("[data-scroll-spacer]");
    let syncing = "";
    const size = () => { inner.setAttribute("width", String(table.scrollWidth)); };
    const topScroll = () => {
      if (syncing === "body") return;
      syncing = "top";
      body.scrollLeft = top.scrollLeft;
      syncing = "";
    };
    const bodyScroll = () => {
      if (syncing === "top") return;
      syncing = "body";
      top.scrollLeft = body.scrollLeft;
      syncing = "";
    };
    top.addEventListener("scroll", topScroll, { passive: true });
    body.addEventListener("scroll", bodyScroll, { passive: true });
    const observer = new ResizeObserver(size);
    observer.observe(table);
    size();
    state.tableCleanups.push(() => {
      top.removeEventListener("scroll", topScroll);
      body.removeEventListener("scroll", bodyScroll);
      observer.disconnect();
    });
  }

  function setupColumnDrag(card) {
    let dragged = null;
    const headers = [...card.querySelectorAll("th[data-column-key]")];
    const onStart = (event) => {
      if (event.target.closest("[data-resize-handle]")) {
        event.preventDefault();
        return;
      }
      dragged = event.currentTarget;
      dragged.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", dragged.dataset.columnKey);
    };
    const onOver = (event) => {
      if (!dragged || event.currentTarget === dragged) return;
      event.preventDefault();
      headers.forEach((header) => header.classList.remove("drop-target"));
      event.currentTarget.classList.add("drop-target");
    };
    const onDrop = (event) => {
      event.preventDefault();
      const target = event.currentTarget;
      if (!dragged || target === dragged) return;
      const id = card.dataset.tableId;
      const keys = tableColumnKeys(card);
      const settings = tableSettings(id, keys.map((key) => ({ key })));
      const from = settings.order.indexOf(dragged.dataset.columnKey);
      const to = settings.order.indexOf(target.dataset.columnKey);
      if (from < 0 || to < 0) return;
      const [moved] = settings.order.splice(from, 1);
      settings.order.splice(to, 0, moved);
      saveTableSettings(id, settings);
      renderCurrentRoute({ refresh: false });
    };
    const onEnd = () => {
      headers.forEach((header) => header.classList.remove("dragging", "drop-target"));
      dragged = null;
    };
    headers.forEach((header) => {
      header.addEventListener("dragstart", onStart);
      header.addEventListener("dragover", onOver);
      header.addEventListener("drop", onDrop);
      header.addEventListener("dragend", onEnd);
    });
    state.tableCleanups.push(() => headers.forEach((header) => {
      header.removeEventListener("dragstart", onStart);
      header.removeEventListener("dragover", onOver);
      header.removeEventListener("drop", onDrop);
      header.removeEventListener("dragend", onEnd);
    }));
  }

  function setupColumnResize(card) {
    card.querySelectorAll("[data-resize-handle]").forEach((handle) => {
      const start = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const header = handle.closest("th");
        const column = card.querySelector(`col[data-column-key="${CSS.escape(header.dataset.columnKey)}"]`);
        const startX = event.clientX;
        const startWidth = header.getBoundingClientRect().width;
        handle.classList.add("active");
        header.draggable = false;
        const move = (moveEvent) => {
          const width = Math.max(50, Math.round(startWidth + moveEvent.clientX - startX));
          if (column) column.setAttribute("width", String(width));
          const table = card.querySelector("table");
          const totalWidth = [...card.querySelectorAll("col")].reduce((sum, item) => sum + Number(item.getAttribute("width") || 0), 0);
          table.setAttribute("width", String(totalWidth));
        };
        const end = () => {
          handle.classList.remove("active");
          header.draggable = header.dataset.pinned !== "true";
          const id = card.dataset.tableId;
          const settings = tableSettings(id, tableColumnKeys(card).map((key) => ({ key })));
          settings.widths[header.dataset.columnKey] = Math.round(header.getBoundingClientRect().width);
          saveTableSettings(id, settings);
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", end);
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", end, { once: true });
      };
      handle.addEventListener("pointerdown", start);
      state.tableCleanups.push(() => handle.removeEventListener("pointerdown", start));
    });
  }

  function positionFloating(element, target, preferAbove = false) {
    const rect = target.getBoundingClientRect();
    const useRight = rect.left > window.innerWidth / 2;
    const useTop = preferAbove || rect.bottom > window.innerHeight / 2;
    element.classList.toggle("floating-left", !useRight);
    element.classList.toggle("floating-right", useRight);
    element.classList.toggle("floating-top", useTop);
    element.classList.toggle("floating-bottom", !useTop);
  }

  function setupHeaderTips(card) {
    let timer = null;
    const headers = [...card.querySelectorAll("th[data-column-key]")];
    const enter = (event) => {
      const header = event.currentTarget;
      timer = window.setTimeout(() => {
        tooltip.innerHTML = `<strong>${escapeHTML(header.textContent.trim())}</strong><span>${escapeHTML(header.dataset.help)}</span><small>${escapeHTML(header.dataset.type)} • max ${escapeHTML(header.dataset.max)} chars</small>`;
        tooltip.hidden = false;
        positionFloating(tooltip, header);
      }, 350);
    };
    const leave = () => {
      if (timer) window.clearTimeout(timer);
      tooltip.hidden = true;
    };
    headers.forEach((header) => {
      header.addEventListener("mouseenter", enter);
      header.addEventListener("mouseleave", leave);
    });
    state.tableCleanups.push(() => {
      if (timer) window.clearTimeout(timer);
      headers.forEach((header) => {
        header.removeEventListener("mouseenter", enter);
        header.removeEventListener("mouseleave", leave);
      });
    });
  }

  function setupCellPopovers(card) {
    let timer = null;
    const cells = [...card.querySelectorAll("td[data-cell-value]")];
    const enter = (event) => {
      const cell = event.currentTarget;
      const value = cell.querySelector(".cell-value");
      timer = window.setTimeout(() => {
        if (!value || (value.scrollHeight <= value.clientHeight && value.scrollWidth <= value.clientWidth)) return;
        cellPopover.textContent = cell.dataset.cellValue;
        cellPopover.hidden = false;
        positionFloating(cellPopover, cell);
      }, 300);
    };
    const leave = () => {
      if (timer) window.clearTimeout(timer);
      cellPopover.hidden = true;
    };
    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", enter);
      cell.addEventListener("mouseleave", leave);
    });
    state.tableCleanups.push(() => {
      if (timer) window.clearTimeout(timer);
      cells.forEach((cell) => {
        cell.removeEventListener("mouseenter", enter);
        cell.removeEventListener("mouseleave", leave);
      });
    });
  }

  function updateDagSelection(taskId) {
    const route = parseRoute();
    route.query.set("task", taskId);
    navigate(`#${route.path}?${route.query.toString()}`);
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest("#mobile-navigation")) {
      const open = sidebar.classList.toggle("open");
      mobileNavigation.setAttribute("aria-expanded", String(open));
      return;
    }
    if (target.closest(".nav-link")) {
      sidebar.classList.remove("open");
      mobileNavigation.setAttribute("aria-expanded", "false");
    }
    if (target.closest("[data-load-demo]")) {
      navigate(replaceRouteValue(ROUTES.overview, "demo-project"));
      return;
    }
    const retry = target.closest("[data-retry-project]");
    if (retry) {
      renderCurrentRoute({ refresh: true });
      return;
    }
    const columnsButton = target.closest("[data-columns-button]");
    if (columnsButton) {
      const popover = columnsButton.parentElement.querySelector("[data-columns-popover]");
      const next = popover.hidden;
      document.querySelectorAll("[data-columns-popover]").forEach((item) => { item.hidden = true; });
      popover.hidden = !next;
      columnsButton.setAttribute("aria-expanded", String(next));
      return;
    }
    if (!target.closest(".columns-wrap")) {
      document.querySelectorAll("[data-columns-popover]").forEach((item) => { item.hidden = true; });
    }
    const reset = target.closest("[data-reset-columns]");
    if (reset) {
      const card = reset.closest("[data-table-id]");
      localStorage.removeItem(tableStorageKey(card.dataset.tableId));
      renderCurrentRoute({ refresh: false });
      showToast("Column layout reset", "success");
      return;
    }
    const filter = target.closest("[data-table-filter]");
    if (filter) {
      const card = filter.closest("[data-table-id]");
      const settings = tableSettings(card.dataset.tableId, tableColumnKeys(card).map((key) => ({ key })));
      settings.filter = filter.dataset.filterValue;
      saveTableSettings(card.dataset.tableId, settings);
      renderCurrentRoute({ refresh: false });
      return;
    }
    if (target.closest("[data-row-number-toggle]")) {
      const enabled = readStorage(STORAGE.sticky, true) !== false;
      writeStorage(STORAGE.sticky, !enabled);
      document.querySelectorAll("[data-table-id]").forEach((card) => card.classList.toggle("sticky-header-disabled", enabled));
      showToast(enabled ? "Sticky headers turned off" : "Sticky headers turned on");
      return;
    }
    const dagTask = target.closest("[data-dag-task]");
    if (dagTask) {
      updateDagSelection(dagTask.dataset.dagTask);
      return;
    }
    const agentTab = target.closest("[data-agent-tab]");
    if (agentTab) {
      const route = parseRoute();
      route.query.set("tab", agentTab.dataset.agentTab);
      navigate(`#${route.path}?${route.query.toString()}`);
      return;
    }
    const projectAction = target.closest("[data-project-action]");
    if (projectAction) {
      event.preventDefault();
      runProjectAction(projectAction.dataset.projectAction, projectAction);
      return;
    }
    const readOnly = target.closest("td[data-cell-value]");
    if (readOnly && !target.closest("a, button")) showToast(`Read-only column: ${readOnly.dataset.columnLabel}`);
  });

  document.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-column-toggle]");
    if (!checkbox) return;
    const card = checkbox.closest("[data-table-id]");
    const optionKeys = [...card.querySelectorAll("[data-column-toggle]")].map((item) => item.dataset.columnToggle);
    const settings = tableSettings(card.dataset.tableId, optionKeys.map((key) => ({ key })));
    settings.hidden = optionKeys.filter((key) => !card.querySelector(`[data-column-toggle="${CSS.escape(key)}"]`).checked);
    saveTableSettings(card.dataset.tableId, settings);
    renderCurrentRoute({ refresh: false });
  });

  document.addEventListener("input", (event) => {
    const tableSearch = event.target.closest("[data-table-search]");
    if (tableSearch) {
      const card = tableSearch.closest("[data-table-id]");
      const query = tableSearch.value.trim().toLowerCase();
      const settings = tableSettings(card.dataset.tableId, tableColumnKeys(card).map((key) => ({ key })));
      settings.search = tableSearch.value;
      saveTableSettings(card.dataset.tableId, settings);
      let visibleRows = 0;
      card.querySelectorAll("tbody tr[data-search-text]").forEach((row) => {
        row.hidden = !row.dataset.searchText.includes(query);
        if (!row.hidden) visibleRows += 1;
      });
      const emptyRow = card.querySelector("[data-search-empty]");
      if (emptyRow) emptyRow.hidden = visibleRows > 0;
      const count = card.querySelector("[data-table-count]");
      if (count) count.textContent = `${visibleRows} of ${card.querySelectorAll("tbody tr[data-search-text]").length}`;
      return;
    }
    const columnSearch = event.target.closest("[data-column-search]");
    if (columnSearch) {
      const query = columnSearch.value.trim().toLowerCase();
      columnSearch.closest("[data-columns-popover]").querySelectorAll("[data-column-option]").forEach((option) => { option.hidden = !option.dataset.columnOption.includes(query); });
    }
  });

  document.addEventListener("submit", async (event) => {
    if (event.target.id === "new-project-form") {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const error = document.getElementById("project-form-error");
      if (!form.reportValidity()) return;
      const criteria = String(formData.get("acceptance_criteria") || "").split("\n").map((item) => item.trim()).filter(Boolean);
      if (!criteria.length) {
        error.textContent = "Add at least one acceptance criterion.";
        return;
      }
      const submit = form.querySelector('button[type="submit"]');
      submit.disabled = true;
      submit.textContent = "Creating...";
      error.textContent = "";
      const payload = {
        name: String(formData.get("name") || "").trim(),
        goal: String(formData.get("goal") || "").trim(),
        acceptance_criteria: criteria,
        max_parallelism: Number(formData.get("max_parallelism") || 8),
      };
      try {
        const created = await apiFetch("/api/projects", { method: "POST", body: JSON.stringify(payload) });
        state.projects = null;
        showToast("Project created and Director queued", "success");
        navigate(replaceRouteValue(ROUTES.overview, created.id));
      } catch (failure) {
        error.textContent = failure.message;
        submit.disabled = false;
        submit.textContent = "Create project";
      }
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      sidebar.classList.remove("open");
      mobileNavigation.setAttribute("aria-expanded", "false");
      document.querySelectorAll("[data-columns-popover]").forEach((item) => { item.hidden = true; });
      tooltip.hidden = true;
      cellPopover.hidden = true;
    }
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-dag-task]")) {
      event.preventDefault();
      updateDagSelection(event.target.dataset.dagTask);
    }
  });

  refreshButton.addEventListener("click", () => renderCurrentRoute({ refresh: true }));
  window.addEventListener("hashchange", () => {
    const route = parseRoute();
    const canReuseSnapshot = Boolean(route.projectId && state.snapshot?.project?.id === route.projectId);
    renderCurrentRoute({ refresh: !canReuseSnapshot });
  });
  window.addEventListener("online", checkHealth);
  window.addEventListener("offline", () => setConnection("bad", "Browser is offline"));

  function demoSnapshot() {
    const now = new Date();
    const minutesAgo = (minutes) => new Date(now.getTime() - minutes * 60_000).toISOString();
    const tasks = [
      demoTask("task-director", null, "director", "Create milestones and the executable task DAG", [], "succeeded", 100, []),
      demoTask("task-frontend-lead", "task-director", "workstream_lead", "Own frontend architecture and user flows", ["task-director"], "succeeded", 90, ["web/**"]),
      demoTask("task-backend-lead", "task-director", "workstream_lead", "Own control plane and persistence", ["task-director"], "succeeded", 90, ["service/**"]),
      demoTask("task-db", "task-backend-lead", "implementation", "Implement durable PostgreSQL task state", ["task-backend-lead"], "succeeded", 80, ["service/database/**"]),
      demoTask("task-api", "task-backend-lead", "implementation", "Build project and event APIs", ["task-db"], "succeeded", 80, ["service/api/**"]),
      demoTask("task-shell", "task-frontend-lead", "implementation", "Build the operational SPA shell", ["task-frontend-lead"], "running", 80, ["web/static/**"]),
      demoTask("task-dag", "task-frontend-lead", "implementation", "Render task DAG and agent inspection", ["task-shell"], "running", 75, ["web/views/**"]),
      demoTask("task-tests", "task-backend-lead", "test", "Add integration tests for restart recovery", ["task-api"], "running", 72, ["tests/integration/**"]),
      demoTask("task-security", "task-director", "review", "Review credentials and process isolation", ["task-api", "task-shell"], "ready", 70, []),
      demoTask("task-repair", "task-backend-lead", "repair", "Repair failed workspace cleanup check", ["task-tests"], "queued", 68, ["service/workspaces.py"]),
      demoTask("task-integrate", "task-director", "integration", "Integrate reviewed work through merge queue", ["task-dag", "task-security", "task-repair"], "pending", 60, []),
      demoTask("task-preview", "task-director", "deployment", "Deploy preview and run browser validation", ["task-integrate"], "pending", 50, []),
    ];
    const result = { summary: "Implemented the scoped work and verified focused tests.", commit: "7e92c2a", files_changed: ["service/api/projects.py", "tests/integration/test_projects.py"], commands_run: ["pytest tests/integration -q"], test_results: [{ command: "pytest tests/integration -q", status: "passed", tests: 18 }], remaining_issues: [], proposed_followup_tasks: [] };
    const runs = [
      { id: "run-director", project_id: "demo-project", task_id: "task-director", parent_run_id: null, provider: "codex", model: "strong-reasoning", role: "director", status: "succeeded", attempt: 1, started_at: minutesAgo(182), heartbeat_at: minutesAgo(165), progress_at: minutesAgo(165), finished_at: minutesAgo(165), result },
      { id: "run-frontend", project_id: "demo-project", task_id: "task-frontend-lead", parent_run_id: "run-director", provider: "openai", model: "reasoning", role: "workstream_lead", status: "succeeded", attempt: 1, started_at: minutesAgo(163), heartbeat_at: minutesAgo(148), progress_at: minutesAgo(148), finished_at: minutesAgo(148), result },
      { id: "run-backend", project_id: "demo-project", task_id: "task-backend-lead", parent_run_id: "run-director", provider: "codex", model: "reasoning", role: "workstream_lead", status: "succeeded", attempt: 1, started_at: minutesAgo(163), heartbeat_at: minutesAgo(146), progress_at: minutesAgo(146), finished_at: minutesAgo(146), result },
      { id: "run-shell", project_id: "demo-project", task_id: "task-shell", parent_run_id: "run-frontend", provider: "muse", model: "fast-code", role: "implementation", status: "running", attempt: 1, started_at: minutesAgo(42), heartbeat_at: minutesAgo(1), progress_at: minutesAgo(3), finished_at: null, result: null },
      { id: "run-dag", project_id: "demo-project", task_id: "task-dag", parent_run_id: "run-frontend", provider: "grok", model: "code-fast", role: "implementation", status: "running", attempt: 1, started_at: minutesAgo(31), heartbeat_at: minutesAgo(1), progress_at: minutesAgo(2), finished_at: null, result: null },
      { id: "run-tests", project_id: "demo-project", task_id: "task-tests", parent_run_id: "run-backend", provider: "codex", model: "code-worker", role: "test", status: "running", attempt: 2, started_at: minutesAgo(19), heartbeat_at: minutesAgo(1), progress_at: minutesAgo(4), finished_at: null, result: null },
    ];
    return {
      project: { id: "demo-project", name: "commerce-platform", goal: "Build a secure multi-tenant commerce platform with inventory, checkout, audit trails, comprehensive tests, and a validated preview deployment.", acceptance_criteria: ["Integrated test suite passes", "Preview checkout passes browser validation"], max_parallelism: 16 },
      status: "running",
      tasks,
      milestones: [
        { id: "m1", title: "Architecture and foundations", description: "Control plane, schema, and workspace boundaries", status: "completed", ordinal: 1 },
        { id: "m2", title: "Parallel feature build", description: "Frontend and backend workstreams execute", status: "active", ordinal: 2 },
        { id: "m3", title: "Independent review", description: "Security and regression review across providers", status: "pending", ordinal: 3 },
        { id: "m4", title: "Integrated preview", description: "Merge, deploy, and validate acceptance criteria", status: "pending", ordinal: 4 },
      ],
      runs,
      workspaces: [
        { id: "ws1", task_id: "task-shell", branch: "agent/task-shell", worktree_path: "/worktrees/task-shell", repository_path: "/repository", base_commit: "e91ad17", write_scope: ["web/static/**"], status: "active", port: 9411 },
        { id: "ws2", task_id: "task-dag", branch: "agent/task-dag", worktree_path: "/worktrees/task-dag", repository_path: "/repository", base_commit: "e91ad17", write_scope: ["web/views/**"], status: "active", port: null },
        { id: "ws3", task_id: "task-api", branch: "agent/task-api", worktree_path: "/worktrees/task-api", repository_path: "/repository", base_commit: "e91ad17", write_scope: ["service/api/**"], status: "released", port: null },
      ],
      merge_queue: [
        { id: "mq1", task_id: "task-api", workspace_id: "ws3", position: 1, branch: "agent/task-api", commit: "7e92c2a", status: "ready", conflict_details: null, updated_at: minutesAgo(8) },
        { id: "mq2", task_id: "task-shell", workspace_id: "ws1", position: 2, branch: "agent/task-shell", commit: "pending", status: "validating", conflict_details: null, updated_at: minutesAgo(3) },
      ],
      validations: [
        { id: "v1", stage: "unit", command: "pytest -q", status: "passed", duration_seconds: 21.4, output: "184 passed", finished_at: minutesAgo(9) },
        { id: "v2", stage: "lint", command: "ruff check .", status: "passed", duration_seconds: 3.2, output: "All checks passed", finished_at: minutesAgo(8) },
        { id: "v3", stage: "integration", command: "pytest tests/integration -q", status: "running", duration_seconds: null, output: "Running test 14 of 31", finished_at: null },
      ],
      providers: [
        { name: "codex", capabilities: ["reasoning", "code", "review"], active_runs: 1, max_concurrency: 8, available: true, rate_limited_until: null, latency_p95_seconds: 4.8, recent_success_rate: .94, relative_cost: .72, rpm_used: 18, rpm_limit: 60, tpm_used: 82000, tpm_limit: 250000 },
        { name: "openai", capabilities: ["reasoning", "structured-output"], active_runs: 0, max_concurrency: 6, available: true, rate_limited_until: null, latency_p95_seconds: 3.9, recent_success_rate: .91, relative_cost: 1, rpm_used: 9, rpm_limit: 60, tpm_used: 31000, tpm_limit: 200000 },
        { name: "muse", capabilities: ["code", "search"], active_runs: 1, max_concurrency: 12, available: true, rate_limited_until: null, latency_p95_seconds: 2.1, recent_success_rate: .86, relative_cost: .28, rpm_used: 31, rpm_limit: 120, tpm_used: 91000, tpm_limit: 500000 },
        { name: "grok", capabilities: ["code", "review"], active_runs: 1, max_concurrency: 10, available: true, rate_limited_until: null, latency_p95_seconds: 2.8, recent_success_rate: .88, relative_cost: .36, rpm_used: 22, rpm_limit: 100, tpm_used: 76000, tpm_limit: 400000 },
      ],
      critical_path: ["task-director", "task-frontend-lead", "task-shell", "task-dag", "task-integrate", "task-preview"],
      blockers: [{ title: "Workspace cleanup test failed", detail: "Repair task queued with concrete failure output." }],
      progress: { completed_tasks: 5, total_tasks: 12, percent: 42 },
      preview: { status: "pending", url: null },
      created_at: minutesAgo(190),
      updated_at: now.toISOString(),
    };
  }

  function demoTask(id, parent, type, goal, dependencies, status, priority, scope) {
    return { id, project_id: "demo-project", parent_task_id: parent, task_type: type, goal, instructions: `Complete this scoped task: ${goal}. Do not launch child agents.`, dependencies, write_scope: scope, acceptance_criteria: ["Focused tests pass", "The result satisfies the task contract"], preferred_capabilities: ["code"], preferred_providers: [], timeout_seconds: 1800, retry_limit: 4, status, priority, retry_count: id === "task-tests" ? 1 : 0, assigned_provider: null, assigned_model: null, blocked_reason: null, result: null, created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
  }

  function demoEvents() {
    const now = Date.now();
    return [
      { id: 1, project_id: "demo-project", task_id: "task-shell", run_id: "run-shell", event_type: "run.process_started", level: "info", payload: { message: "Worker process started in isolated worktree" }, created_at: new Date(now - 14 * 60_000).toISOString() },
      { id: 2, project_id: "demo-project", task_id: "task-shell", run_id: "run-shell", event_type: "worker.command", level: "info", payload: { command: "npm test -- --runInBand" }, created_at: new Date(now - 11 * 60_000).toISOString() },
      { id: 3, project_id: "demo-project", task_id: "task-shell", run_id: "run-shell", event_type: "worker.tool.completed", level: "info", payload: { tool: "apply_patch", message: "Updated accessible navigation shell" }, created_at: new Date(now - 8 * 60_000).toISOString() },
      { id: 4, project_id: "demo-project", task_id: "task-shell", run_id: "run-shell", event_type: "worker.message", level: "info", payload: { text: "Responsive shell tests are green. Building the DAG view next." }, created_at: new Date(now - 4 * 60_000).toISOString() },
      { id: 5, project_id: "demo-project", task_id: "task-tests", run_id: "run-tests", event_type: "provider.rate_limit", level: "warn", payload: { provider: "codex", message: "Retry scheduled after provider backoff", rate_limited: true, tokens: 14800, cost_usd: .12 }, created_at: new Date(now - 3 * 60_000).toISOString() },
    ];
  }

  if (!window.location.hash) window.location.hash = "#/projects";
  checkHealth();
  renderCurrentRoute({ refresh: true });
})();
