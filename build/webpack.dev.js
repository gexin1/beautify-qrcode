/*
 * @Author: river
 * @Date: 2020-04-09 11:33:23
 * @Last Modified by: river
 * @Last Modified time: 2020-06-11 18:37:58
 */
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const base = require('./webpack.base');
const { resolve } = require('./webpack.help');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(base, {
    entry: resolve('../src/example/index.js'),
    mode: 'development',
    devtool: 'source-map',
    devServer: { open: true },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('../public/index.html'),
            inject: true,
            hash: true,
            chunks: ['vendors', 'main'],
            favicon: resolve('../public/favicon.ico'),
            minify: true,
        }),
    ],
});
