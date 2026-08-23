from uuid import uuid4

import pytest

from multibuilder.database import Database
from multibuilder.domain import ProjectSpec, TaskSpec, TaskStatus, TaskType, WorkspaceStatus
from multibuilder.repository import ControlPlaneRepository, InvalidTaskGraph


def make_task(project_id, *, dependencies=None, goal="Build the API") -> TaskSpec:
    return TaskSpec(
        id=uuid4(),
        project_id=project_id,
        parent_task_id=None,
        task_type=TaskType.IMPLEMENTATION,
        goal=goal,
        instructions="Implement only the requested behavior.",
        dependencies=dependencies or [],
        write_scope=["src/api/**"],
        acceptance_criteria=["Focused tests pass"],
        preferred_capabilities=["coding"],
        preferred_providers=[],
        timeout_seconds=900,
        retry_limit=2,
    )


@pytest.mark.asyncio
async def test_project_and_tasks_survive_database_reconnection(tmp_path) -> None:
    database_url = f"sqlite+aiosqlite:///{tmp_path / 'control-plane.db'}"
    project = ProjectSpec(
        id=uuid4(),
        name="demo",
        goal="Build a demo service",
        repository_url="git@example.test:demo.git",
        base_branch="main",
        acceptance_criteria=["The integrated service passes its tests"],
        max_parallelism=8,
    )
    task = make_task(project.id)

    database = Database(database_url)
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    await repository.create_project(project)
    await repository.create_tasks([task])
    await database.dispose()

    reopened = Database(database_url)
    repository = ControlPlaneRepository(reopened.session_factory)
    snapshot = await repository.get_project_snapshot(project.id)
    await reopened.dispose()

    assert snapshot.tasks[0].goal == "Build the API"


@pytest.mark.asyncio
async def test_dependency_gate_releases_only_after_predecessor_succeeds(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'dag.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="dag",
        goal="Build in dependency order",
        repository_url="git@example.test:dag.git",
        base_branch="main",
        acceptance_criteria=["The DAG completes"],
        max_parallelism=4,
    )
    first = make_task(project.id, goal="Create the contract")
    second = make_task(project.id, dependencies=[first.id], goal="Use the contract")
    await repository.create_project(project)
    await repository.create_tasks([first, second])

    initially_runnable = await repository.list_runnable_tasks(project.id)
    await repository.transition_task(first.id, TaskStatus.SUCCEEDED)
    subsequently_runnable = await repository.list_runnable_tasks(project.id)
    await database.dispose()

    assert ([task.id for task in initially_runnable], [task.id for task in subsequently_runnable]) == (
        [first.id],
        [second.id],
    )


@pytest.mark.asyncio
async def test_event_cursor_returns_only_newer_events(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'events.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="events",
        goal="Stream durable events",
        repository_url="git@example.test:events.git",
        base_branch="main",
        acceptance_criteria=["Events survive reconnects"],
        max_parallelism=2,
    )
    await repository.create_project(project)
    first = await repository.append_event(project.id, "project.created", {"name": "events"})
    await repository.append_event(project.id, "task.created", {"task_id": "one"})

    events = await repository.list_events(project.id, after_id=first.id)
    await database.dispose()

    assert [event.event_type for event in events] == ["task.created"]


@pytest.mark.asyncio
async def test_workspace_ownership_survives_database_reconnection(tmp_path) -> None:
    database_url = f"sqlite+aiosqlite:///{tmp_path / 'workspaces.db'}"
    database = Database(database_url)
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="workspace-state",
        goal="Persist workspace ownership",
        repository_url="git@example.test:workspace.git",
        base_branch="main",
        acceptance_criteria=["Ownership survives restart"],
        max_parallelism=2,
    )
    work = make_task(project.id)
    await repository.create_project(project)
    await repository.create_tasks([work])

    created = await repository.record_workspace(
        task_id=work.id,
        repository_path="/srv/multibuilder/repositories/project",
        worktree_path="/srv/multibuilder/worktrees/task",
        branch="multibuilder/project/task",
        base_commit="abc1234",
        write_scope=["src/api/**"],
    )
    await database.dispose()

    reopened = Database(database_url)
    repository = ControlPlaneRepository(reopened.session_factory)
    loaded = await repository.get_workspace_for_task(work.id)
    await reopened.dispose()

    assert (loaded.id, loaded.status, loaded.worktree_path) == (
        created.id,
        WorkspaceStatus.ACTIVE,
        "/srv/multibuilder/worktrees/task",
    )


@pytest.mark.asyncio
async def test_project_listing_is_newest_first_and_compact(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'projects.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    first = ProjectSpec(
        id=uuid4(),
        name="first",
        goal="Build the first project",
        repository_url="git@example.test:first.git",
        base_branch="main",
        acceptance_criteria=["It works"],
        max_parallelism=2,
    )
    second = first.model_copy(update={"id": uuid4(), "name": "second"})
    await repository.create_project(first)
    await repository.create_project(second)

    projects = await repository.list_projects()
    await database.dispose()

    assert [project.project.name for project in projects] == ["second", "first"]
    assert all(project.task_counts == {} for project in projects)


@pytest.mark.asyncio
async def test_task_creation_rejects_cycles_without_persisting_partial_work(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'cycles.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="cycle",
        goal="Reject task loops",
        repository_url="git@example.test:cycle.git",
        base_branch="main",
        acceptance_criteria=["The graph is acyclic"],
        max_parallelism=2,
    )
    await repository.create_project(project)
    first = make_task(project.id, goal="First")
    second = make_task(project.id, dependencies=[first.id], goal="Second")
    first = first.model_copy(update={"dependencies": [second.id]})

    with pytest.raises(InvalidTaskGraph, match="cycle"):
        await repository.create_tasks([first, second])

    assert (await repository.get_project_snapshot(project.id)).tasks == []
    await database.dispose()


@pytest.mark.asyncio
async def test_task_creation_rejects_unknown_dependencies(tmp_path) -> None:
    database = Database(f"sqlite+aiosqlite:///{tmp_path / 'unknown-dependency.db'}")
    await database.create_schema()
    repository = ControlPlaneRepository(database.session_factory)
    project = ProjectSpec(
        id=uuid4(),
        name="dependency",
        goal="Validate task dependencies",
        repository_url="git@example.test:dependency.git",
        base_branch="main",
        acceptance_criteria=["Unknown dependencies are rejected"],
        max_parallelism=2,
    )
    await repository.create_project(project)
    task = make_task(project.id, dependencies=[uuid4()])

    with pytest.raises(InvalidTaskGraph, match="unknown dependency"):
        await repository.create_tasks([task])

    await database.dispose()
