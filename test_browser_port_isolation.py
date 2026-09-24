import app


def test_browser_runtime_coordinates_apply_host_slot_offset(monkeypatch):
    monkeypatch.setenv("CB_BROWSER_SLOT_OFFSET", "20")
    assert app._browser_runtime_coordinates(0) == (119, 5920, 6100, 9242)
    assert app._browser_runtime_coordinates(2) == (121, 5922, 6102, 9244)
