#!/usr/bin/env bash

lambda_function_name=$1
# inside of git repo

if [ -e artifacts/index.zip ]; then
  echo "ok"
  aws lambda update-function-code --function-name student-response-check --zip-file fileb://artifacts/index.zip
else
  echo "Please run the build script first to create the artifact(s)."
fi

#clean up
rm -rf ./artifacts
