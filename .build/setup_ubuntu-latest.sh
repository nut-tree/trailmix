#!/usr/bin/env bash
set -e

docker pull s1hofmann/nut-ci:latest
docker run -it -d --name nut-ci --shm-size 4gb --user $(id -u):$(id -g) -v ${PWD}:${PWD}:rw s1hofmann/nut-ci:latest bash