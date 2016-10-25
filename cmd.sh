#!/bin/bash
set -e

cd /app

if ["$ENV" != 'production' ]; then
    exec npm test && PASSED=true || PASSED=false && echo $PASSED
else
    PASSED=true
fi

#TODO Error Outputs
if [ "$PASSED" = true ]; then
    #npm start
    ./node_modules/pm2/bin/pm2 start npm -- start
fi