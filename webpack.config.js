const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/app.js',
        vendor: './src/vendor.js'
    },

    devServer: {
        port: 5000
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
              }
        ]
    },

    plugins: [
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
    ]
}