import * as yup from 'yup';
import { createRenderer } from '@/utils/renderer';
import listPoints from './listPoints';

const schemaLine = yup.object().shape({
    type: yup.mixed().oneOf([0, 1, 2, 3, 4, 5, 6]).default(2),
    size: yup.number().default(50),
    opacity: yup.number().default(100),
    posType: yup.mixed().oneOf([0, 1, 2, 3]).default(3),
    otherColor: yup.string().default('#000000'),
    posColor: yup.string().default('#000000'),
});
const schemaLine2 = yup.object().shape({
    type: yup.mixed().oneOf([0, 1, 2, 3, 4, 5, 6]).default(6),
    size: yup.number().default(50),
    opacity: yup.number().default(100),
    posType: yup.mixed().oneOf([0, 1, 2, 3]).default(0),

    otherColor: yup.string().default('#000000'),

    posColor: yup.string().default('#000000'),
});

/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.type]  连线方向 0=>左右 1=>上下 2=>纵横 3=>回环 4=>左上—右下 5=>右上—左下 6=>交叉"
 * @param {String} [options.size] 连线粗细
 * @param {String} [options.opacity] 连线不透明度
 * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
 * @param {String} [options.otherColor] 连线颜色
 * @param {String} [options.posColor] 定位点颜色
 */
export const rendererLine = (qrcode, options) => {
    try {
        options = schemaLine.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    const params = [
        'type',
        'size',
        'opacity',
        'posType',
        'otherColor',
        'posColor',
    ].map((k) => options[k]);

    const svg = createRenderer({
        listPoints: listPoints,
    })({ qrcode, params });

    return svg;
};

/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.type]  连线方向 0=>左右 1=>上下 2=>纵横 3=>回环 4=>左上—右下 5=>右上—左下 7=>交叉"
 * @param {String} [options.size] 连线粗细
 * @param {String} [options.opacity] 连线不透明度
 * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
 * @param {String} [options.otherColor] 连线颜色
 * @param {String} [options.posColor] 定位点颜色
 */
export const rendererLine2 = (qrcode, options) => {
    try {
        options = schemaLine2.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    const params = [
        'type',
        'size',
        'opacity',
        'posType',
        'otherColor',
        'posColor',
    ].map((k) => options[k]);

    const svg = createRenderer({
        listPoints: listPoints,
    })({ qrcode, params });

    return svg;
};
