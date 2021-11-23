#!/bin/bash

if [ -z "$(git diff --cached)" ]; then
  echo "❌ No staged files found."
else
  git-cz "$@"
fi
