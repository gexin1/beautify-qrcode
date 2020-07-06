import * as yup from 'yup';
import { createRenderer } from '@/utils/renderer';
import listPoints from './listPoints';

const schemaBase = yup.object().shape({
    // 信息点样式 ['矩形', '圆形', '随机']
    type: yup.mixed().oneOf([0, 1, 2]).default(0),
    // 信息点缩放
    size: yup.number().default(100),
    // 信息点不透明度
    opacity: yup.number().default(100),
    // 定位点样式['矩形', '圆形', '行星','圆角矩形']
    posType: yup.mixed().oneOf([0, 1, 2, 3]).default(0),
    // 信息点颜色
    otherColor: yup.string().default('#000000'),
    // 定位点点颜色
    posColor: yup.string().default('#000000'),
});

/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
 * @param {Number} [options.size] 信息点缩放
 * @param {String} [options.opacity]  信息点不透明度
 * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
 * @param {String} [options.otherColor] 信息点颜色
 * @param {String} [options.posColor] 定位点点颜色
 */
const rendererBase = (qrcode, options) => {
    try {
        options = schemaBase.validateSync(options);
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
 * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
 * @param {Number} [options.size] 信息点缩放
 * @param {String} [options.opacity]  信息点不透明度
 * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星
 * @param {String} [options.otherColor] 信息点颜色
 * @param {String} [options.posColor] 定位点点颜色
 */
export const rendererRect = (qrcode, options = {}) => {
    options = {
        ...{
            type: 0,
            size: 100,
            opacity: 100,
            posType: 0,
        },
        ...options,
    };
    return rendererBase(qrcode, options);
};
/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
 * @param {Number} [options.size] 信息点缩放
 * @param {String} [options.opacity]  信息点不透明度
 * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星
 * @param {String} [options.otherColor] 信息点颜色
 * @param {String} [options.posColor] 定位点点颜色
 */
export const rendererRound = (qrcode, options = {}) => {
    options = {
        ...{
            type: 1,
            size: 50,
            opacity: 30,
            posType: 1,
        },
        ...options,
    };
    return rendererBase(qrcode, options);
};
/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
 * @param {Number} [options.size] 信息点缩放
 * @param {String} [options.opacity]  信息点不透明度
 * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星
 * @param {String} [options.otherColor] 信息点颜色
 * @param {String} [options.posColor] 定位点点颜色
 */
export const rendererRandRound = (qrcode, options = {}) => {
    options = {
        ...{
            type: 2,
            size: 80,
            opacity: 100,
            posType: 2,
        },
        ...options,
    };
    return rendererBase(qrcode, options);
};
