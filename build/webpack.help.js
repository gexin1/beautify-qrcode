/*
 * @Author: river
 * @Date: 2020-04-09 11:33:23
 * @Last Modified by: river
 * @Last Modified time: 2020-08-06 17:11:41
 */
const path = require('path');
const fse = require('fs-extra');
const resolve = (...dir) => path.resolve(__dirname, ...dir);

const generateBanner = () => {
    const packageJson = fse.readJsonSync(resolve('../package.json'));
    return `
    ${packageJson.name} v${packageJson.version}
    ${packageJson.author}
    ${packageJson.repository.url}`;
};

module.exports = {
    resolve,
    generateBanner,
};
