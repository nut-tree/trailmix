#!/usr/bin/env bash
set -e

docker exec nut-ci bash -c "bash $PWD/.build/test.sh ${PWD} ${TRAVIS_NODE_VERSION}"
