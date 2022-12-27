#!/bin/sh

# create env
cp .env .env.backup
cp .env.production .env

# build
npm install
npm run build

# docker 
docker build -t kkishimoto10/opencourt-frontend .
docker push kkishimoto10/opencourt-frontend

# env reset
cp .env.backup .env
rm .env.backup