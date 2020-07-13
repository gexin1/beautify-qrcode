import * as yup from 'yup';
import { createRenderer } from '@/utils/renderer';
import listPoints from './listPoints';

function viewBox(qrcode) {
    if (!qrcode) return '0 0 0 0';

    const nCount = qrcode.getModuleCount();
    return qrcode.$options.isSpace
        ? `${-nCount} ${-nCount / 2} ${nCount * 2} ${nCount * 2}`
        : `${-nCount + 3} ${-nCount / 2} ${nCount * 2 - 6} ${nCount * 2 - 6}`;
}
const schema25D = yup.object().shape({
    // 柱体高度
    height: yup.number().default(0.5),
    // 定位点柱体高度
    height2: yup.number().default(0.5),
    // 上侧颜色
    upColor: yup.string().default('#FF7F89'),
    // 左侧颜色
    leftColor: yup.string().default('#FFD7D9'),
    // 右侧颜色
    rightColor: yup.string().default('#FFEBF3'),
});

/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.height]  柱体高度
 * @param {Number} [options.height2] 定位点柱体高度
 * @param {String} [options.upColor]  上侧颜色
 * @param {String} [options.leftColor] 左侧颜色
 * @param {String} [options.rightColor] 右侧颜色
 */
const Renderer25D = (qrcode, options) => {
    try {
        options = schema25D.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    const params = [
        'height',
        'height2',
        'upColor',
        'leftColor',
        'rightColor',
    ].map((k) => options[k]);

    const svg = createRenderer({
        listPoints: listPoints,
        getViewBox: viewBox,
    })({ qrcode, params });

    return svg;
};

export default Renderer25D;
