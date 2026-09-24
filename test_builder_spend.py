from unittest.mock import Mock
import pytest

def test_cap_blocks_new_metered_work_and_accounts_for_live_voices(tmp_path, monkeypatch):
    import builder_spend as spend
    from runtime_control import LockedJsonStore
    import time
    guard=Mock(); guard.check.side_effect=RuntimeError('daily cap')
    monkeypatch.setattr(spend,'guard',guard)
    LockedJsonStore(tmp_path/'voice-guards.json',dict).update(lambda rows:rows.update(a={'active':True,'connected':True,'heartbeat':time.time()}))
    with pytest.raises(RuntimeError,match='daily cap'):spend.check(tmp_path,need_usd=0.2)
    assert guard.check.call_args.kwargs['need_usd'] >= 20

def test_failed_accounting_is_not_treated_as_available_budget(tmp_path,monkeypatch):
    import builder_spend as spend
    guard=Mock();guard.check.return_value.degraded='database is read-only'
    monkeypatch.setattr(spend,'guard',guard)
    with pytest.raises(RuntimeError,match='accounting'):spend.check(tmp_path)

def test_voice_duration_and_backend_events_are_deduplicated(tmp_path,monkeypatch):
    import builder_spend as spend
    guard=Mock();monkeypatch.setattr(spend,'guard',guard)
    meter=spend.VoiceMeter(tmp_path)
    meter.duration(60);meter.duration(60);meter.duration(90)
    event={'id':'resp1','usage':{'input_tokens':100,'output_tokens':20}}
    meter.response(event);meter.response(event)
    assert guard.record.call_count==3
    assert sum(c.kwargs['usd'] for c in guard.record.call_args_list)==pytest.approx(0.077)
