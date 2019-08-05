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

### Webpack Merge will merge multiple webpack confing files (common, development, production)
`
npm i webpack-merge
`
### The following plugin will copy index.html into the build folder to run the app
`
npm i html-webpack-plugin
`

### The following plugin will bundle css separated
`
npm i mini-css-extract-plugin
`

### The following plugin will remove old files from bundle
`
npm i clean-webpack-plugin
`

### The following plugin will present the build process information in a logical and coherent manner
* npm i webpack-dashboard
* const webpackDashboard = require('webpack-dashboard/plugin');
* webpack-dashboard -- webpack-dev-server --config webpack.dev.js --open

### The following plugin is a webpack plugin to optimize \ minimize CSS assets.
* https://github.com/NMFR/optimize-css-assets-webpack-plugin
* npm i optimize-css-assets-webpack-plugin
* const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
* new OptimizeCssAssetsWebpackPlugin()

## Install dev server:
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

# BABEL
Install the following to have es6 features running with no errors on older version of IE
* babel-core
* babel-loader (This package allows transpiling JavaScript files using Babel and webpack.)
* babel-preset-env (takes any target environments you've specified and checks them against its mappings to compile a list of plugins and passes it to Babel.)
* babel-runtime (dependecy along with the babel-plugin-transform-runtime)
* babel-plugin-transform-runtime (to avoid duplication across your compiled output)


# Libraries
Create a different bundle called vendor.js to add common libraries that do not need changes.
`
npm i bootstrap jquery popper.js
`

# NOTES
## Use Cache Busting and Plugins
[contentHash] will cash file only if new changes have been added

`
filename: 'bundle.[contentHash].js'
`
# RESOURCES

## JS Framework
- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+)`https://scraggo.github.io/javascript/2017/09/01/intro-to-js-frameworks01.html`
- ![#1589F0](https://placehold.it/15/1589F0/000000?text=+)`https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/`