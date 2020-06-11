/*
 * @Author: river
 * @Date: 2020-04-09 11:33:23
 * @Last Modified by: river
 * @Last Modified time: 2020-06-11 18:33:27
 */

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const { resolve } = require('./webpack.help');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap(
    merge(base, {
        entry: resolve('../src/index.js'),
        mode: 'production',
        output: {
            library: 'beautifyQrcode',
            libraryTarget: 'umd',
            path: resolve(__dirname, '../dist'),
            filename: 'beautifyQrcode.js',
            sourceMapFilename: 'beautifyQrcode.map',
            libraryExport: 'default',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'beautifyQrcode.css',
            }),
        ],
        optimization: {
            minimizer: [
                new OptimizeCssAssetsPlugin({
                    assetNameRegExp: /\.css$/g,
                    canPrint: false,
                }),
                new TerserPlugin({
                    cache: false,
                    parallel: true,
                    sourceMap: true, // Must be set to true if using source-maps in production
                    terserOptions: {
                        mangle: true,
                        ie8: true,
                        safari10: true,
                    },
                }),
            ],
        },
    })
);
