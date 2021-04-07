#!/bin/sh

set -ev

CHROME_SANDBOX_FILE=$1

ls -la "$(dirname ${CHROME_SANDBOX_FILE})"

echo processing $CHROME_SANDBOX_FILE file

chown root $CHROME_SANDBOX_FILE
chmod 4755 $CHROME_SANDBOX_FILE
chmod u+x $CHROME_SANDBOX_FILE