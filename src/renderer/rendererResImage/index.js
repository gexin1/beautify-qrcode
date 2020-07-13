import * as yup from 'yup';
import { gamma } from '@/utils/imageUtils';
import listPoints from './listPoints';
function getViewBox(qrcode) {
    if (!qrcode) return '0 0 0 0';

    const nCount = qrcode.getModuleCount() * 3;
    return qrcode.$options.isSpace
        ? `${-nCount / 5} ${-nCount / 5} ${nCount + (nCount / 5) * 2} ${
              nCount + (nCount / 5) * 2
          }`
        : `${0} ${0} ${nCount} ${nCount}`;
}

function getGrayPointList(params, size, black, white) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = document.createElement('img');
    const gpl = [];
    canvas.style.imageRendering = 'pixelated';
    size *= 3;

    img.src = params[0];
    const contrast = params[1] / 100;
    const exposure = params[2] / 100;
    return new Promise((resolve) => {
        img.onload = () => {
            canvas.width = size;
            canvas.height = size;
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(img, 0, 0, size, size);

            for (let x = 0; x < canvas.width; x++) {
                for (let y = 0; y < canvas.height; y++) {
                    const imageData = ctx.getImageData(x, y, 1, 1);
                    const data = imageData.data;
                    const gray = gamma(data[0], data[1], data[2]);
                    if (
                        Math.random() >
                            (gray / 255 + exposure - 0.5) * (contrast + 1) +
                                0.5 &&
                        (x % 3 !== 1 || y % 3 !== 1)
                    )
                        gpl.push(
                            `<use
                                key="${'g_' + x + '_' + y}"
                                x="${x}"
                                y="${y}"
                                xlink:href="${black}"
                            />`
                        );
                }
            }
            resolve(gpl);
        };
    });
}

const RendererResImage = ({ qrcode, params }) => {
    const otherColor = params[5];
    const { width, height } = qrcode.$options;
    return new Promise((resolve, reject) => {
        getGrayPointList(
            params,
            qrcode.getModuleCount(),
            '#S-black',
            '#S-white'
        )
            .then((gpl) => {
                const svg = `<svg
            className="Qr-item-svg"
            width="${width}"
            height="${height}"
            viewBox="${getViewBox(qrcode)}"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <rect
                    id="B-black"
                    fill="${otherColor}"
                    width="${3.08}"
                    height="${3.08}"
                />
                <rect id="B-white" fill="white" width="${3.08}" height="${3.08}" />
                <rect
                    id="S-black"
                    fill="${otherColor}"
                    width="${1.02}"
                    height="${1.02}"
                />
                <rect id="S-white" fill="white" width="${1.02}" height="${1.02}" />
                <rect id="B" width="${3.08}" height="${3.08}" />
                <rect id="S" width="${1.02}" height="${1.02}" />
            </defs>
            ${gpl.concat(listPoints(qrcode, params)).join('')}
        </svg>`;
                resolve(svg);
            })
            .catch((err) => {
                resolve(err);
            });
    });
};

const schemaResImage = yup.object().shape({
    // 背景图片
    backgroudImage: yup.string().default(),
    // 对比度
    contrast: yup.number().default(0),
    // 曝光
    exposure: yup.number().default(0),
    // 小定位点样式 ['无', '白', '黑白']
    alignType: yup.mixed().oneOf([0, 1, 2]).default(0),
    // 时钟样式 ['无', '白', '黑白']
    timingType: yup.mixed().oneOf([0, 1, 2]).default(0),
    // 信息点颜色
    otherColor: yup.string().default('#000000'),
    // 定位点颜色
    posColor: yup.string().default('#000000'),
});
/**
 *
 * @param {*} qrcode
 * @param {*} options
 * @param {String} options.backgroudImage 背景图片
 * @param {Number} options.contrast 对比度
 * @param {Number} options.exposure 曝光
 * @param {Number} options.alignType 小定位点样式 0=>'无' 1=>'白' 2=>'黑白'
 * @param {Number} options.timingType 时钟样式 0=>'无' 1=>'白' 2=>'黑白'
 * @param {String} options.otherColor 信息点颜色
 * @param {String} options.posColor 定位点颜色
 */
const render = (qrcode, options = {}) => {
    try {
        options = schemaResImage.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    const params = [
        'backgroudImage',
        'contrast',
        'exposure',
        'alignType',
        'timingType',
        'otherColor',
        'posColor',
    ].map((k) => options[k]);

    return RendererResImage({ qrcode, params });
};

export default render;
