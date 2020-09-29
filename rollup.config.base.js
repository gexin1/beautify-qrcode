import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import filesize from 'rollup-plugin-filesize';
import { generateBanner } from './help';

export const SRC_DIR = path.resolve(__dirname, 'src');
export const DIST_DIR = path.resolve(__dirname, 'dist');

export default {
    input: path.resolve(SRC_DIR, 'index.js'),

    output: {
        banner: generateBanner,
    },
    plugins: [
        commonjs(),
        json(),
        alias({
            entries: [
                {
                    find: '@',
                    replacement: SRC_DIR,
                },
            ],
        }),
        filesize(),
    ],
};
