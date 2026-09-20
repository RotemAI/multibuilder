"""Plan identity and billing policy must agree in settings and the header."""
import json
import shutil
import subprocess
from pathlib import Path

import pytest

NODE = shutil.which("node")
pytestmark = pytest.mark.skipif(NODE is None, reason="node is not installed")


def render(state):
    driver = r"""
const fs=require('fs'),vm=require('vm');
const source=fs.readFileSync(process.argv[1],'utf8'),state=JSON.parse(process.argv[2]);
const elements={};
const context=vm.createContext({
  _authStatus:state,_authCache:state,
  esc:s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'),
  document:{getElementById:id=>elements[id]||(elements[id]={style:{}})},
  chatgptLoginHtml:()=>'',renderUsageHtml:()=>'',
});
for(const [start,end] of [
  ['function renderLoginTab(){','async function startChatgptLogin(){'],
  ['function renderAuthIndicator(){','function toggleAuthPanel('],
  ['function renderAuthPanel(){','async function saveApiKey('],
]){
  const from=source.indexOf(start),to=source.indexOf(end,from);
  if(from<0||to<0)throw Error(start);
  vm.runInContext(source.slice(from,to),context);
}
context.renderLoginTab();context.renderAuthIndicator();context.renderAuthPanel();
process.stdout.write(JSON.stringify(elements));
"""
    result = subprocess.run(
        [NODE, "-e", driver, str(Path(__file__).with_name("app.py")), json.dumps(state)],
        capture_output=True, text=True, timeout=10,
    )
    assert result.returncode == 0, result.stderr
    return json.loads(result.stdout)


def test_plan_settings_show_identity_and_no_automatic_api_fallback():
    ui = render({"loggedIn": True, "activeMode": "chatgpt", "authMode": "chatgpt",
                 "email": "owner@example.test", "subscriptionType": "pro",
                 "hasApiKey": True, "apiFallbackEnabled": False})
    settings = ui["settings-content"]["innerHTML"]
    assert "owner@example.test" in settings
    assert "ChatGPT Pro" in settings
    assert "API fallback is disabled" in settings
    assert "automatic fallback if ChatGPT" not in settings
    assert "Save fallback API key" not in settings
    assert "Fallback API key" not in ui["auth-dropdown-content"]["innerHTML"]


def test_auxiliary_api_key_does_not_claim_codex_is_connected():
    ui = render({"loggedIn": False, "activeMode": "unknown", "hasApiKey": True,
                 "apiFallbackEnabled": False})
    assert ui["codex-auth-label"]["textContent"] == "Not connected"
    assert "configure a fallback" not in ui["auth-dropdown-content"]["innerHTML"]


def test_explicit_api_policy_still_shows_its_billing_controls():
    ui = render({"loggedIn": True, "activeMode": "apikey", "authMode": "apikey",
                 "email": "OpenAI API", "subscriptionType": "API key",
                 "hasApiKey": True, "apiFallbackEnabled": True})
    assert "Save fallback API key" in ui["settings-content"]["innerHTML"]
