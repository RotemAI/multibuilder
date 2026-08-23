from multibuilder.scopes import find_scope_conflict, scopes_overlap


def test_parent_glob_conflicts_with_a_child_file() -> None:
    assert scopes_overlap(["src/**"], ["src/api/routes.py"])


def test_sibling_directories_can_run_in_parallel() -> None:
    assert not scopes_overlap(["src/api/**"], ["src/frontend/**"])


def test_empty_write_scope_is_read_only_and_never_conflicts() -> None:
    assert not scopes_overlap([], ["src/**"])


def test_conflict_report_identifies_the_existing_task() -> None:
    active = {
        "task-api": ["src/api/**"],
        "task-docs": ["docs/**"],
    }

    conflict = find_scope_conflict(["src/api/routes.py"], active)

    assert conflict == "task-api"
