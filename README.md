# Serverless Framework - Lambda Function

- This was generated with the Serverless Framework CLI

Req:

- Install Serverless Framework CLI (config with IAM credentials)
- Node

## How to

- npm install
- sls config
- sls deploy

### Issues

the AWS SDK does not run in the lambda env, so quick fix is to run the lambda locally, and eventually figure out why the aws-sdk does not work with node(does work with python).
