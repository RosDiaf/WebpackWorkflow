const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: {
        main: [
            /* 
                - Needed alog with loader-html for server reloading 
                - CSS not reloading because MiniCssExtractPlugin.loader is in use instead of style-loader    
            */
            'babel-runtime/regenerator',
            'webpack-hot-middleware/client?reload=true',
            './src/app.js'
        ],
        vendor: './src/vendor.js'
    },

    devServer: {
        // port: 5000
        contentBase: "build",
        overlay: true,
        hot: true,
        stats: {
            colors: true
        }
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [
                  {
                    loader: 'babel-loader',
                  }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [ {
                  loader: 'html-loader',
                }]
            }
        ]
    },

    plugins: [
        new OptimizeCssAssetsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackplugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new webpack.DefinePlugin({
            'process.ENV': JSON.stringify("production")
        })
    ]
}