const path = require('path');
const fse = require('fs-extra');
const resolve = (...dir) => path.resolve(__dirname, ...dir);

const generateBanner = () => {
    const packageJson = fse.readJsonSync(resolve('../package.json'));
    return `/**
    ${packageJson.name} v${packageJson.version}
    ${packageJson.author}
    ${packageJson.repository.url}
*/`;
};

export { generateBanner, resolve };
