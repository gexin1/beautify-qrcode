import * as yup from 'yup';
import { getTypeTable, QRPointType } from '../utils/qrcodeHandler';
import { createRenderer } from '../utils/Renderer';
import { rand } from '../utils/util';

function listPoints(qrcode, params) {
    if (!qrcode) return [];

    const nCount = qrcode.getModuleCount();
    const typeTable = getTypeTable(qrcode);
    const pointList = new Array(nCount);

    const type = params[0];
    let size = params[1] / 100;
    const opacity = params[2] / 100;
    const posType = params[3];
    let id = 0;
    const otherColor = params[4];
    const posColor = params[5];

    const vw = [3, -3];
    const vh = [3, -3];
    if (size <= 0) size = 1.0;

    for (let x = 0; x < nCount; x++) {
        for (let y = 0; y < nCount; y++) {
            if (qrcode.isDark(x, y) === false) continue;

            if (
                typeTable[x][y] === QRPointType.ALIGN_CENTER ||
                typeTable[x][y] === QRPointType.ALIGN_OTHER ||
                typeTable[x][y] === QRPointType.TIMING
            ) {
                if (type === 0)
                    pointList.push(
                        `<rect 
                            opacity="${opacity}"
                            width="${size}"
                            height="${size}"
                            key="${id++}"
                            fill="${otherColor}" 
                            x="${x + (1 - size) / 2}"
                            y="${y + (1 - size) / 2}"
                        />`
                    );
                else if (type === 1)
                    pointList.push(
                        `<circle
                            opacity="${opacity}"
                            r="${size / 2}"
                            key="${id++}"
                            fill="${otherColor}"
                            cx="${x + 0.5}"
                            cy="${y + 0.5}"
                        />`
                    );
                else if (type === 2)
                    pointList.push(
                        `<circle
                            key="${id++}"
                            opacity="${opacity}"
                            fill="${otherColor}"
                            cx="${x + 0.5}"
                            cy="${y + 0.5}"
                            r="${size / 2}"
                        />`
                    );
            } else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                if (posType === 0) {
                    pointList.push(
                        `<rect
                            width="${1}"
                            height="${1}"
                            key="${id++}"
                            fill="${posColor}"
                            x="${x}"
                            y="${y}"
                        />`
                    );
                } else if (posType === 1) {
                    pointList.push(
                        `<circle
                            key="${id++}"
                            fill="${posColor}"
                            cx="${x + 0.5}"
                            cy="${y + 0.5}"
                            r="${1.5}"
                        />`
                    );
                    pointList.push(
                        `<circle
                            key="${id++}"
                            fill="none"
                            strokeWidth="1"
                            stroke="${posColor}"
                            cx="${x + 0.5}"
                            cy="${y + 0.5}"
                            r="${3}"
                        />`
                    );
                } else if (posType === 2) {
                    pointList.push(
                        `<circle
                            key="${id++}"
                            fill="${posColor}"
                            cx="${x + 0.5}"
                            cy="${y + 0.5}"
                            r="${1.5}"
                        />`
                    );
                    pointList.push(
                        `<circle
                            key="${id++}"
                            fill="none"
                            strokeWidth="0.15"
                            strokeDasharray="0.5,0.5"
                            stroke="${posColor}"
                            cx="${x + 0.5}"
                            cy="${y + 0.5}"
                            r="${3}"
                        />`
                    );
                    for (let w = 0; w < vw.length; w++) {
                        pointList.push(
                            `<circle
                                key="${id++}"
                                fill="${posColor}"
                                cx="${x + vw[w] + 0.5}"
                                cy="${y + 0.5}"
                                r="${0.5}"
                            />`
                        );
                    }
                    for (let h = 0; h < vh.length; h++) {
                        pointList.push(
                            `<circle
                                key="${id++}"
                                fill="${posColor}"
                                cx="${x + 0.5}"
                                cy="${y + vh[h] + 0.5}"
                                r="${0.5}"
                            />`
                        );
                    }
                }
            } else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                if (posType === 0) {
                    pointList.push(
                        `<rect
                            width="${1}"
                            height="${1}"
                            key="${id++}"
                            fill="${posColor}"
                            x="${x}"
                            y="${y}"
                        />`
                    );
                }
            } else {
                if (type === 0)
                    pointList.push(
                        `<rect
                            opacity="${opacity}"
                            width="${size}"
                            height="${size}"
                            key="${id++}"
                            fill="${otherColor}"
                            x="${x + (1 - size) / 2}"
                            y="${y + (1 - size) / 2}"
                        />`
                    );
                else if (type === 1)
                    pointList.push(
                        `<circle
                            opacity="${opacity}"
                            r="${size / 2}"
                            key="${id++}"
                            fill="${otherColor}"
                            cx="${x + 0.5}"
                            cy="${y + 0.5}"
                        />`
                    );
                else if (type === 2)
                    pointList.push(
                        `<circle
                            opacity="${opacity}"
                            key="${id++}"
                            fill="${otherColor}"
                            cx="${x + 0.5}"
                            cy="${y + 0.5}"
                            r="${0.5 * rand(0.33, 1.0)}"
                        />`
                    );
            }
        }
    }
    return pointList;
}

const schemaBase = yup.object().shape({
    // 信息点样式 ['矩形', '圆形', '随机']
    type: yup.mixed().oneOf([0, 1, 2]).default(0),
    // 信息点缩放
    size: yup.number().default(100),
    // 信息点不透明度
    opacity: yup.number().default(100),
    // 定位点样式['矩形', '圆形', '行星']
    posType: yup.mixed().oneOf([0, 1, 2]).default(0),
    // 信息点颜色
    otherColor: yup.string().default('#000000'),
    // 定位点点颜色
    posColor: yup.string().default('#000000'),
});

const RendererBase = (qrcode, options) => {
    try {
        options = schemaBase.validateSync(options);
    } catch (err) {
        console.log(err);
        return err;
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

export const RendererRect = (qrcode, options = {}) => {
    options = {
        ...{
            type: 0,
            size: 100,
            opacity: 100,
            posType: 0,
        },
        ...options,
    };
    return RendererBase(qrcode, options);
};

export const RendererRound = (qrcode, options = {}) => {
    options = {
        ...{
            type: 1,
            size: 50,
            opacity: 30,
            posType: 1,
        },
        ...options,
    };
    return RendererBase(qrcode, options);
};

export const RendererRandRound = (qrcode, options = {}) => {
    options = {
        ...{
            type: 2,
            size: 80,
            opacity: 100,
            posType: 2,
        },
        ...options,
    };
    return RendererBase(qrcode, options);
};
