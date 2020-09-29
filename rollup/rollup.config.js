/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { resolve } from './help';
import config, { DIST_DIR } from './rollup.config.base';
config.output = {
    ...config.output,
    ...{
        name: 'beautifyQrcode',
        exports: 'named',
        file: resolve(DIST_DIR, 'beautifyQrcode.js'),
        format: 'umd',
        sourcemap: false,
    },
};
config.plugins.push(
    babel({ babelHelpers: 'bundled' }),
    nodeResolve({
        browser: true,
    })
);
export default config;
