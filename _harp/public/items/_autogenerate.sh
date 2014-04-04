#!/bin/bash
cat _data.json | jq keys | grep \\w | cut -d\" -f2 | xargs -I{} touch {}.md
