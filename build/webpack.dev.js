/*
 * @Author: river
 * @Date: 2020-04-09 11:33:23
 * @Last Modified by: river
 * @Last Modified time: 2020-04-09 14:09:47
 */
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');

module.exports = merge(
    {
        mode: 'development',
        devtool: 'source-map',
        plugins: [new webpack.HotModuleReplacementPlugin()],
    },
    base
);
