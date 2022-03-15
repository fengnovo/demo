#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
rm -rf assets
rm -rf categories
rm -rf tag
rm -rf timeline
rm -rf handbook

mv -v docs/.vuepress/dist/* ./

rm -rf docs/.vuepress/dist

git add -A
git commit -m 'deploy'

git config user.name fengnovo

git config user.email fengnoku@gmail.comsgmail.com

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:fengnovo/demo.git master:gh-pages

cd -