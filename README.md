# student-response-check

# 0. Pre-req
* [AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) - Creating & activating an AWS account
* [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/installing.html) - Installing the AWS Command Line Interface
* Git

# 1. Setup
### Create IAM Role
1. Navigate to Security, Identity & Compliance --> IAM
1. Navigate to Users --> Add User
1. Fill-in the following:
   1. String: Name
   1. Checkbox: Programmatic access
1. Click "Next: Permissions"
1. Click "Attach existing policies directly"
1. Checkbox: AdministratorAccess 
1. Click "Next: Review"
1. Click "Create User" 

### Create A User
1. On your aws management console, navigate to Users
2. Select the user you just created
3. Select the "Security Credentials" tab
4. Click "Create Access Key"
    - NOTE: Be sure to download this credentials file. This will be your only chance to copy the secret access token.

### Configure AWS Cli
On your terminal run:

`aws configure`

Fill-in the following information: 
```sh
AWS Access Key ID [None]: KEY-FROM-CREDENTIALS-FILE 
AWS Secret Access Key [None]: SECRET-KEY-FROM-CREDENTIALS-FILE 
Default region name [None]: us-east-1
Default output format [None]: json
```

### Clone Repository
```sh
git clone repo
cd repo
```

# 2. Build
Give yourself executable permissions to the build script, then run it.
```sh
chmod u+x build.sh
./build.sh
```

# 3. Deploy
Give yourself executable permissions to the deploy script, then run it.
```sh
chmod u+x deploy.sh
./deploy.sh
```
