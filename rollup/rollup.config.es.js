import { resolve } from './help';
import config, { DIST_DIR } from './rollup.config.base';
config.output = {
    ...config.output,
    ...{
        name: 'beautifyQrcode',
        file: resolve(DIST_DIR, 'beautifyQrcode.es.js'),
        format: 'es',
        sourcemap: false,
    },
};

config.external = ['yup'];

export default config;
