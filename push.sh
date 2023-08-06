#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:huiyiwanan/test-blog.git master
git push -f git@gitee.com:gu_yuer/blog-vuepress.git master

cd -