/*
 * @Author: river
 * @Date: 2020-04-09 11:33:23
 * @Last Modified by: river
 * @Last Modified time: 2020-04-09 14:46:20
 */
const { resolve } = require('./webpack.help');
module.exports = {
    buildSpeed: [
        { loader: 'thread-loader' },
        {
            loader: 'cache-loader',
        },
    ],

    // 路径别名
    alias: {
        '@': resolve('../src'),
    },
    // 全局样式
    sassOption: {
        resources: [resolve('../src/styles/variable.scss')],
    },
    dev: {
        assetsPublicPath: '/',
    },
    build: {
        assetsPublicPath: '/',
    },
};
