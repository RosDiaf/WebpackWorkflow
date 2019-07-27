# Webpack Workflow

## Installation
`
npm i webpack
`


## Without webpack.config
`
npx webpack src/app.js -o build/output.js
`

## With webpack.config
`
npm webpack -p (for production)
`

`
npm webpack -d (for development)
`
## If webpack.confing is into folder then run:
`
npx webpack --config webpack/webpack.config.js -p
`

`
npx webpack --config webpack/webpack.config.js -d
`

# PLUGINS

## The following plugin will copy index.html into the build folder to run the app
`
npm i html-webpack-plugin
`

## The following plugin will bundle css separated
`
npm i mini-css-extract-plugin
`

## Install server:
https://github.com/webpack/webpack-dev-server

`
* npm i webpack-dev-server
* "start:dev": "webpack-dev-server"
* npm run start:dev
`

## Install css loader:
https://github.com/webpack-contrib/css-loader

`
npm i style-lader css-loader
`

## Install sass loader
https://github.com/webpack-contrib/sass-loader

`
npm i sass-loader node-sass
`
## Install min css extract plugin
This plugin extracts CSS into separate files.
https://github.com/webpack-contrib/mini-css-extract-plugin

`
npm i mini-css-extract-plugin
`

## Install file-loader
This plugin is needed to bundle images
https://github.com/webpack-contrib/file-loader

`
npm i file-loader
`
## Install rimraf packages
This plugin is used to drop folder when creating new ones
https://github.com/isaacs/rimraf

`
npm i rimraf
`