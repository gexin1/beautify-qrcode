/*
 * @Author: river
 * @Date: 2020-04-09 11:33:23
 * @Last Modified by: river
 * @Last Modified time: 2020-04-09 14:19:13
 */
const path = require('path');
const resolve = (...dir) => path.resolve(__dirname, ...dir);

module.exports = {
    resolve,
};
