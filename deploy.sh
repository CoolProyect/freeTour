#!/bin/bash

cd client
ng build --env=prod

cd ..
rm -rf ./server/public
cp -r ./client/dist/ ./server/public

git subtree push --prefix=server heroku master
