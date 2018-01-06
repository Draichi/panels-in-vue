# Jobs website

![screenshot](usage.gif?raw=true "screenshot")

![science](https://forthebadge.com/images/badges/built-with-science.svg "science")
![passing](https://img.shields.io/travis/rust-lang/rust.svg?maxAge=2592000 "passing")
![node](https://img.shields.io/node/v/passport.svg?maxAge=2592000 "node")

> A SPA project built with MEVN stack (mongoDB, express, vue and node).

## Start API
You'll need to have [MongoDB](https://docs.mongodb.com/manual/installation/) installed
> On `api` folder
```bash
# install dependencies
npm install

# start database (if you are on linux)
sudo service mongod start

# start database (if you are on macOS)
sudo mongod

# start database (if you are on Windows as administrator)
"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"

# serve at localhost:3636/jobs
npm start
```

## Build Setup
> On `panels-in-vue` folder
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
