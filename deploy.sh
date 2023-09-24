#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.appio.site' > CNAME

cd ..

# if you are deploying to https://<USERNAME>.github.io
npm run deploy

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -