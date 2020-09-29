const { resolve } = require('./webpack.help');
module.exports = {
    alias: {
        '@': resolve('../src'),
    },
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
