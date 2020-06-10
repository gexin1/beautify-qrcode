/*
 * @Author: river
 * @Date: 2020-04-09 11:33:23
 * @Last Modified by: river
 * @Last Modified time: 2020-04-09 11:33:48
 */

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const { resolve } = require('./webpack.help');
const base = require('./webpack.base');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap(
    merge(base, {
        mode: 'production',
        output: {
            path: resolve('../dist'),
            publicPath: '/',
            filename: 'js/[name].[contenthash].js',
            chunkFilename: 'js/[id].chunk.[contenthash].js',
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                // chunks: 'async', // async表示只对异步代码进行分割
                minSize: 30000, // 当超过指定大小时做代码分割
                // maxSize: 200000,  // 当大于最大尺寸时对代码进行二次分割
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '_',
                name: true,
                cacheGroups: {
                    // 缓存组：如果满足vendor的条件，就按vender打包，否则按default打包
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10, // 权重越大，打包优先级越高
                        // filename: 'js/vender.js'  //将代码打包成名为vender.js的文件
                        name: 'vender',
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        name: 'common',
                        // filename: 'js/common.js',
                        reuseExistingChunk: true, // 是否复用已经打包过的代码
                    },
                },
            },
            usedExports: true,
        },
        plugins: [
            new CleanWebpackPlugin(),
            new CopyPlugin([
                {
                    from: resolve('../public/**/*'),
                    to: '',
                },
            ]),
            new UglifyJsPlugin({
                uglifyOptions: {
                    ie8: true,
                    mangle: {
                        properties: false,
                    },
                },
            }),
            new OptimizeCssAssetsPlugin(),
            new UglifyJsPlugin({
                uglifyOptions: {
                    ie8: true,
                    mangle: {
                        properties: false,
                    },
                },
            }),
        ],
    })
);
