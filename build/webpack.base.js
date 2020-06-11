/*
 * @Author: river
 * @Date: 2020-04-09 11:33:23
 * @Last Modified by: river
 * @Last Modified time: 2020-06-11 18:38:15
 */
const { resolve } = require('./webpack.help');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const config = require('./config');
const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: resolve('../src/example/index.js'),
    output: {
        path: resolve('../dist'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js',
    },
    resolve: {
        extensions: ['.js'],
        alias: config.alias,
        modules: [resolve('../src'), 'node_modules'],
    },
    optimization: {
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
                options: {
                    fix: true,
                    formatter: require('eslint-friendly-formatter'),
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [...config.buildSpeed, 'babel-loader'],
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 10000,
                            name: 'images/[name].[hash:9].[ext]',
                            publicPath: devMode
                                ? config.dev.assetsPublicPath
                                : config.build.assetsPublicPath,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            reloadAll: true,
                            publicPath: '/css/',
                        },
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?name=fonts/[name].[ext]',
            },
        ],
    },
    plugins: [new webpack.ProgressPlugin()],
};
