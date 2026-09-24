import ast
import json
from pathlib import Path

def test_shared_host_model_catalog_respects_configured_file(monkeypatch, tmp_path):
    source=Path(__file__).with_name('app.py').read_text()
    node=next(n for n in ast.parse(source).body if isinstance(n,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='MODELS_FILE' for t in n.targets))
    import os
    path=tmp_path/'private-models.json'
    monkeypatch.setenv('TMUX_DASH_MODELS_FILE',str(path))
    ns={'Path':Path,'os':os}
    exec(compile(ast.Module(body=[node],type_ignores=[]),'<catalog>','exec'),ns)
    assert ns['MODELS_FILE']==path

def test_model_catalog_without_effort_map_remains_usable(tmp_path):
    import app
    path=tmp_path/'models.json'
    path.write_text(json.dumps({'models':[['gpt-6-astra','GPT-6 Astra']]}))
    rows,efforts,_=app._load_model_snapshot(path)
    assert 'xhigh' in efforts['gpt-6-astra']
