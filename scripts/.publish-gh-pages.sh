#!/usr/bin/env bash

export GIT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)
echo "Publishing current branch: $GIT_BRANCH..."

echo "Copying..."
# git pull mojaloop vue-pages --rebase

echo "Install dependencies..."
yarn

echo "Build"
yarn build

echo "Switching to dist folder..."
cd docs/.vuepress/dist

echo "Iniitialising repo"
git init

echo "Staging changes..."
git add -A

# commit
git commit -a -m "[ci skip] Publishing vue-pages on github..."

# push to the gh-pages
git push -u -f git@github.com:$GITHUB_PROJECT_USERNAME/$GITHUB_PROJECT_REPONAME.git master:vue-pages
