import * as yup from 'yup';
import { createRenderer } from '@/utils/renderer';
import listPoints from './listPoints';
const schemaDSJ = yup.object().shape({
    // 信息点缩放
    width2: yup.number().default(70),
    // x 宽度
    width1: yup.number().default(70),
    // 定位点宽度
    width3: yup.number().default(90),
    // 定位点样式 ['矩形', 'DSJ'],
    posType: yup.mixed().oneOf([0, 1]).default(1),
});
/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.width1]  x 宽度
 * @param {Number} [options.width2]  信息点缩放
 * @param {Number} [options.width3]  定位点宽度
 * @param {String} [options.posType] 定位点样式 0=>矩形 1=>DSJ
 */
const RenderDSJ = (qrcode, options) => {
    try {
        options = schemaDSJ.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    const params = ['width2', 'width1', 'width3', 'posType'].map(
        (k) => options[k]
    );

    const svg = createRenderer({
        listPoints: listPoints,
    })({ qrcode, params });

    return svg;
};

export default RenderDSJ;
