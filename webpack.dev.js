const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        })
    ]
})