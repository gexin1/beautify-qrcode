import * as yup from 'yup';
import { createRenderer } from '@/utils/renderer';
import listPoints from './listPoints';

const schemaFuncA = yup.object().shape({
    type: yup.mixed().oneOf([0, 1]).default(1),
    size: yup.mixed().oneOf([0, 1]).default(0),
    opacity: yup.number().default(100),
    posType: yup.mixed().oneOf([0, 1, 2, 3]).default(1),
    otherColor: yup.string().default('#000000'),
    otherColor2: yup.string().default('#000000'),
    posColor: yup.string().default('#000000'),
});
const schemaFuncB = yup.object().shape({
    type: yup.mixed().oneOf([0, 1]).default(1),
    size: yup.mixed().oneOf([0, 1]).default(1),
    opacity: yup.number().default(100),
    posType: yup.mixed().oneOf([0, 1, 2, 3]).default(1),
    otherColor: yup.string().default('#ABB8C3'),
    otherColor2: yup.string().default('#000000'),
    posColor: yup.string().default('#000000'),
});
/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形
 * @param {Number} [options.size] 干扰函数 0=>A 1=>B
 * @param {String} [options.opacity]  信息点不透明度
 * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
 * @param {String} [options.otherColor] 信息点颜色
 * @param {String} [options.otherColor2] 信息点颜色2
 * @param {String} [options.posColor] 定位点颜色
 */
export const rendererFuncA = (qrcode, options) => {
    try {
        options = schemaFuncA.validateSync(options);
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
        'otherColor2',
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
 * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形
 * @param {Number} [options.size] 干扰函数 1=>A 2=>B
 * @param {String} [options.opacity]  信息点不透明度
 * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
 * @param {String} [options.otherColor] 信息点颜色
 * @param {String} [options.otherColor2] 信息点颜色2
 * @param {String} [options.posColor] 定位点颜色
 */
export const rendererFuncB = (qrcode, options) => {
    try {
        options = schemaFuncB.validateSync(options);
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
        'otherColor2',
        'posColor',
    ].map((k) => options[k]);

    const svg = createRenderer({
        listPoints: listPoints,
    })({ qrcode, params });

    return svg;
};
