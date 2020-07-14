import * as yup from 'yup';
import { createRenderer } from '@/utils/renderer';
import listPoints from './listPoints';
const schemaImage = yup.object().shape({
    // 背景图片
    backgroudImage: yup.string(),
    // 信息点样式 ['矩形', '圆形'],
    type: yup.mixed().oneOf([0, 1]).default(0),
    // 信息点缩放
    size: yup.number().default(100),
    // 信息点不透明度
    opacity: yup.number().default(100),
    // 信息点深色
    otherColorDark: yup.string().default('#000000'),
    // 信息点浅色
    otherColorLight: yup.string().default('#FFFFFF'),
    // 定位点样式 ['矩形', '圆形', '行星']
    posType: yup.mixed().oneOf([0, 1, 2]).default(0),
    // 定位点颜色
    posColor: yup.string().default('#000000'),
});
/**
 *
 * @param {*} qrcode
 * @param {*} options
 * @param {String} [options.backgroudImage] 背景图片
 * @param {Number} [options.type] 信息点样式 0=>矩形 1=>圆形
 * @param {Number} [options.size] 信息点缩放
 * @param {Number} [options.opacity] 信息点不透明度
 * @param {String} [options.otherColorDark] 信息点深色
 * @param {String} [options.otherColorLight] 信息点浅色
 * @param {Number} [options.posType]  // 定位点样式 0=>'矩形' 1=>'圆形' 2=>'行星'
 * @param {String} [options.posColor]  // 定位点颜色
 */
const RendererImage = (qrcode, options = {}) => {
    try {
        options = schemaImage.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    const params = [
        'backgroudImage',
        'type',
        'size',
        'opacity',
        'otherColorDark',
        'otherColorLight',
        'posType',
        'posColor',
    ].map((k) => options[k]);

    const svg = createRenderer({
        listPoints: listPoints,
    })({ qrcode, params });

    return svg;
};

export default RendererImage;
