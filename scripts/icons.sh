#!/usr/bin/env bash

.node_modules/icon-components \
  --src static/svg/bbb \
  --dest src/components/icons \
  --prefix icon \
  --template=templates/icon/icon.vue.template \
  --list=templates/icons/ --in-root --remove-old

