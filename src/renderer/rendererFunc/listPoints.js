import { getTypeTable, QRPointType } from '@/utils/qrcodeHandler';

export default function listPoints(qrcode, params) {
    if (!qrcode) return [];

    const nCount = qrcode.getModuleCount();
    const typeTable = getTypeTable(qrcode);
    const pointList = new Array(nCount);

    const type = params[0];
    let size = params[1] / 100;
    const funcType = params[1];
   // const opacity = params[2] / 100;
    const posType = params[3];
    let id = 0;
    const otherColor = params[4];
    const otherColor2 = params[5];
    const posColor = params[6];

    const vw = [3, -3];
    const vh = [3, -3];

    const sq25 =
        'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';

    if (size <= 0) size = 1.0;

    if (funcType === 1 && type === 1) {
        pointList.push(
            `<circle
                key="${id++}"
                fill="none"
                stroke-width="${nCount / 15}"
                stroke="${otherColor2}"
                cx="${nCount / 2}"
                cy="${nCount / 2}"
                r="${((nCount / 2) * Math.sqrt(2) * 13) / 40}"
            />`
        );
    }

    for (let x = 0; x < nCount; x++) {
        for (let y = 0; y < nCount; y++) {
            if (
                qrcode.isDark(x, y) &&
                typeTable[x][y] === QRPointType.POS_CENTER
            ) {
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
                            stroke-width="1"
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
                            stroke-width="0.15"
                            stroke-dasharray="0.5,0.5"
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
                } else if (posType === 3) {
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
                        `<path
                            key="${id++}"
                            d="${sq25}"
                            stroke="${posColor}"
                            stroke-width="${(100 / 6) * (1 - (1 - 0.8) * 0.75)}"
                            fill="none"
                            transform="${
                                'translate(' +
                                String(x - 2.5) +
                                ',' +
                                String(y - 2.5) +
                                ') ' +
                                'scale(' +
                                String(6 / 100) +
                                ',' +
                                String(6 / 100) +
                                ')'
                            }"
                        />`
                    );
                }
            } else if (
                qrcode.isDark(x, y) &&
                typeTable[x][y] === QRPointType.POS_OTHER
            ) {
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
                const dist =
                    Math.sqrt(
                        Math.pow((nCount - 1) / 2 - x, 2) +
                            Math.pow((nCount - 1) / 2 - y, 2)
                    ) /
                    ((nCount / 2) * Math.sqrt(2));
                if (funcType === 0) {
                    let sizeF = (1 - Math.cos(Math.PI * dist)) / 6 + 1 / 5;
                    const colorF = otherColor;
                    const opacityF = Number(qrcode.isDark(x, y));
                    if (type === 0) {
                        sizeF = sizeF + 0.2;
                        pointList.push(
                            `<rect
                                opacity="${opacityF}"
                                width="${sizeF}"
                                height="${sizeF}"
                                key="${id++}"
                                fill="${colorF}"
                                x="${x + (1 - sizeF) / 2}"
                                y="${y + (1 - sizeF) / 2}"
                            />`
                        );
                    } else if (type === 1) {
                        pointList.push(
                            `<circle
                                opacity="${opacityF}"
                                r="${sizeF}"
                                key="${id++}"
                                fill="${colorF}"
                                cx="${x + 0.5}"
                                cy="${y + 0.5}"
                            />`
                        );
                    }
                }
                if (funcType === 1) {
                    let sizeF = 0;
                    let colorF = otherColor;
                   // const fillF = colorF;
                    let opacityF = Number(qrcode.isDark(x, y));
                    if (dist > 5 / 20 && dist < 8 / 20) {
                        sizeF = 5 / 10;
                        colorF = otherColor2;
                        opacityF = 1;
                    } else {
                        sizeF = 1 / 4;
                        if (type === 0) {
                            sizeF = 1 / 4 - 0.1;
                        }
                    }
                    if (type === 0) {
                        sizeF = 2 * sizeF + 0.1;
                        if (qrcode.isDark(x, y)) {
                            pointList.push(
                                `<rect
                                    opacity="${opacityF}"
                                    width="${sizeF}"
                                    height="${sizeF}"
                                    key="${id++}"
                                    fill="${colorF}"
                                    x="${x + (1 - sizeF) / 2}"
                                    y="${y + (1 - sizeF) / 2}"
                                />`
                            );
                        } else {
                            sizeF = sizeF - 0.1;
                            pointList.push(
                                `<rect
                                    opacity="${opacityF}"
                                    width="${sizeF}"
                                    height="${sizeF}"
                                    key="${id++}"
                                    stroke="${colorF}"
                                    stroke-width="${0.1}"
                                    fill="#FFFFFF"
                                    x="${x + (1 - sizeF) / 2}"
                                    y="${y + (1 - sizeF) / 2}"
                                />`
                            );
                        }
                    } else if (type === 1) {
                        if (qrcode.isDark(x, y)) {
                            pointList.push(
                                `<circle
                                    opacity="${opacityF}"
                                    r="${sizeF}"
                                    key="${id++}"
                                    fill="${colorF}"
                                    cx="${x + 0.5}"
                                    cy="${y + 0.5}"
                                />`
                            );
                        } else {
                            pointList.push(
                                `<circle
                                    opacity="${opacityF}"
                                    r="${sizeF}"
                                    key="${id++}"
                                    stroke="${colorF}"
                                    stroke-width="${0.1}"
                                    fill="#FFFFFF"
                                    cx="${x + 0.5}"
                                    cy="${y + 0.5}"
                                />`
                            );
                        }
                    }
                }
            }
        }
    }

    return pointList;
}
