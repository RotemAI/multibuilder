"""Run in an isolated home: real tmux transport with a synthetic Codex composer."""
import asyncio, contextlib, json, os, shlex, subprocess, sys, tempfile, time
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import app

root = Path(tempfile.mkdtemp(prefix='builder-paste-qa-'))
socket = str(root / 'tmux.sock')
fake = root / 'fake_tui.py'
result = root / 'received.json'
fake.write_text(r'''
import json, os, sys, termios, tty
from pathlib import Path
tty.setraw(0)
os.write(1,b'\x1b[?2004h')
buffer=b''
enters=0
def draw(chip=''):
    os.write(1,('\x1b[2J\x1b[H'+ 'Previous output\r\n' + '› '+chip+'\r\n\r\n  gpt-6-astra xhigh · ~/qa\r\n').encode())
draw()
while True:
    data=os.read(0,65536)
    buffer+=data
    if b'\x1b[201~' not in buffer: continue
    before,after=buffer.split(b'\x1b[201~',1)
    if not before.startswith(b'\x1b[200~'):
        Path(sys.argv[1]).write_text(json.dumps({'error':'not bracketed'})); continue
    payload=before[len(b'\x1b[200~'):]
    enters=after.count(b'\r')
    if enters<2:
        draw('[Pasted Content '+str(len(payload))+' chars]')
    else:
        Path(sys.argv[1]).write_text(json.dumps({'text':payload.decode(),'enters':enters}))
        draw()
''')
real_run = subprocess.run
def run(command, **kwargs):
    if command[0]=='tmux': command=['tmux','-S',socket,*command[1:]]
    return real_run(command,**kwargs)
run(['tmux','-f','/dev/null','new-session','-d','-s','paste-qa','-x','100','-y','30',
     shlex.join([sys.executable,str(fake),str(result)])],check=True)
try:
    for _ in range(100):
        visible=run(['tmux','capture-pane','-p','-t','paste-qa'],capture_output=True,text=True).stdout
        if 'gpt-6-astra' in visible:break
        time.sleep(.05)
    else: raise AssertionError('Synthetic TUI did not start')
    text='Please preserve every character.\n'+('alpha café 🌍\n'*4000)+'Final sentinel.'
    user={'id':'admin','role':'admin'}
    request=SimpleNamespace(state=SimpleNamespace(),cookies={})
    patches={
      '_current_user':lambda request:user,
      '_find_session_for_user':lambda *args:([],{'name':'paste-qa'}),
      '_controller_call':AsyncMock(return_value={'ok':True}),
      '_wait_for_codex_input_ready':AsyncMock(return_value=True),
      '_session_operation_lock':lambda *args:contextlib.nullcontext(),
      '_terminal_binding':lambda *args:{'session_id':'paste-qa','generation':''},
      '_account_instruction_refresh_for_prompt':lambda name,text:(text,None),
      '_bound_session_cache_entry':lambda *args:{'messages':[]},
      '_save_messages':lambda:None,
      '_queue_session_tab_label':lambda *args,**kwargs:None,
      '_append_prompt_audit':lambda *args,**kwargs:None,
    }
    with contextlib.ExitStack() as stack:
        for name,value in patches.items():stack.enter_context(patch.object(app,name,value))
        stack.enter_context(patch.object(app.subprocess,'run',run))
        stack.enter_context(patch.object(app.voice_mode,'note_prompt',lambda *args:None))
        stack.enter_context(patch.object(app.voice_mode,'request_target_matches',lambda *args:True))
        response=asyncio.run(app.api_send_command(request,'paste-qa',app.SendCommand(command=text)))
    assert response.status_code==200, response.body
    received=json.loads(result.read_text())
    assert received['text']==text, 'Unicode or multiline paste was changed'
    assert received['enters']==2, received['enters']
    print(json.dumps({'passed':True,'characters':len(text),'utf8_bytes':len(text.encode()),'submit_attempts':received['enters'],'transport':'real isolated tmux and synthetic Codex composer; first Enter deliberately ignored'}))
finally:
    run(['tmux','kill-server'],capture_output=True)
