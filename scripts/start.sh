#!/usr/bin/env bash

SCRIPTS="webpack --watch --progress --config webpack.config.js"
JEKYLL="jekyll s"

parallelshell "$SCRIPTS" "$JEKYLL"
