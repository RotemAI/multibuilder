#!/usr/bin/env python3
from pathlib import Path
import sys

p = Path(__file__).with_name("builder6-fixes.patch.in")
sys.stdout.write(p.read_text().replace("{{EM_DASH}}", chr(0x2014)).replace("{{EN_DASH}}", chr(0x2013)))
