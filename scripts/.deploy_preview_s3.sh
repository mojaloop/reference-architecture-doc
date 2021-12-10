#!/usr/bin/env bash


# deploys the preview docs to an s3 bucket
# I manually created the bucket: `mojaloop-docs-preview`
# in the eu-west-2 region
# and followed the guide: https://docs.aws.amazon.com/AmazonS3/latest/userguide/EnableWebsiteHosting.html
# to manually configure the bucket for website hosting
# And this guide: https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/
# to set up Cloudfront and Route53
# "Using a REST API endpoint as the origin, with access restricted by an OAI"

# The website should be available at:
# http://mojaloop-ref-arch-docs.s3-website.eu-west-2.amazonaws.com
# or http://ref-arch-docs.moja-lab.live/ <-- Not currently available

# Required tools:
# - aws-cli
# - aws-mfa (if running as user, not CI)

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
export AWS_REGION=eu-west-2
export BUCKET_NAME=mojaloop-ref-arch-docs

set -e
set -u

# make sure we can actually list the s3 buckets
aws s3 ls s3://${BUCKET_NAME}

# build
rm -rf ${DIR}/../build
# cd ${DIR}/../
yarn
yarn build

mv ${DIR}/../docs/.vuepress/dist ${DIR}/../build

# TODO: can we be smart about docs versions here? maybe every minor version we can keep...

# upload built files to s3 
aws s3 sync ${DIR}/../build s3://${BUCKET_NAME} \
  --acl public-read

echo "go to: "
echo "http://${BUCKET_NAME}.s3-website.${AWS_REGION}.amazonaws.com"
echo "or http://ref-arch-docs.moja-lab.live/ to see the live site!"
