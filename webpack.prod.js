const path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: __dirname + '/build',
        filename: '[name].[hash].bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[hash].css'
        }),
        new CleanWebpackPlugin()
    ]
})