const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.[contentHash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contentHash].css'
        })
    ]
})