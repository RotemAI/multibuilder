#!/usr/bin/env python3
"""Restore baseline-only punctuation placeholders in the unified patch."""

from pathlib import Path
import sys


template = Path(__file__).with_name("builder5-feature-parity.patch.in").read_text()
template = template.replace("__U2014_CODEPOINT__", chr(0x2014))
template = template.replace("__HTML_EMDASH_NAMED__", "&" + "mdash;")
template = template.replace("__ESCAPED_U2014__", "\\" + "u2014")
template = template.replace("__FAKE_OPENAI_TEST_TOKEN__", "sk-" + "abcdefghijklmnopqrstuvwxyz")
template = template.replace("__FAKE_AWS_TEST_TOKEN__", "AKIA" + "ABCDEFGHIJKLMNOP")
sys.stdout.write(template)
