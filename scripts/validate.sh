#!/bin/sh
set -eu

stage=${1:?validation stage is required}
test -f greeting.txt
test "$(cat greeting.txt)" = "MultiBuilder vertical slice complete"
printf '%s validation passed\n' "$stage"
