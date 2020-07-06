import { getTypeTable, QRPointType } from '@/utils/qrcodeHandler';

export default function listPoints(qrcode, params) {
    if (!qrcode) return [];

    const nCount = qrcode.getModuleCount();
    const typeTable = getTypeTable(qrcode);
    const pointList = new Array(nCount);
    const alignType = params[3];
    const timingType = params[4];
    const posColor = params[6];

    let id = 0;
    for (let x = 0; x < nCount; x++) {
        for (let y = 0; y < nCount; y++) {
            const posX = 3 * x;
            const posY = 3 * y;
            if (
                typeTable[x][y] === QRPointType.ALIGN_CENTER ||
                typeTable[x][y] === QRPointType.ALIGN_OTHER
            ) {
                if (qrcode.isDark(x, y)) {
                    if (alignType === 2) {
                        pointList.push(
                            `<use
                                key="${id++}"
                                xlink:href="#B-black"
                                x="${posX - 0.03}"
                                y="${posY - 0.03}"
                            />`
                        );
                    } else {
                        pointList.push(
                            `<use
                                key="${id++}"
                                xlink:href="#S-black"
                                x="${posX + 1 - 0.01}"
                                y="${posY + 1 - 0.01}"
                            />`
                        );
                    }
                } else {
                    if (alignType === 0) {
                        pointList.push(
                            `<use
                                key="${id++}"
                                xlink:href="#S-white"
                                x="${posX + 1}"
                                y='${posY + 1}'
                            />`
                        );
                    } else {
                        pointList.push(
                            `<use
                                key="${id++}"
                                xlink:href="#B-white"
                                x="${posX - 0.03}"
                                y="${posY - 0.03}"
                            />`
                        );
                    }
                }
            } else if (typeTable[x][y] === QRPointType.TIMING) {
                if (qrcode.isDark(x, y)) {
                    if (timingType === 2) {
                        pointList.push(
                            `<use
                                key="${id++}"
                                xlink:href="#B-black"
                                x="${posX - 0.03}"
                                y="${posY - 0.03}"
                            />`
                        );
                    } else {
                        pointList.push(
                            `<use
                                key="${id++}"
                                xlink:href="#S-black"
                                x="${posX + 1}"
                                y="${posY + 1}"
                            />`
                        );
                    }
                } else {
                    if (timingType === 0) {
                        pointList.push(
                            `<use
                                key="${id++}"
                                xlink:href="#S-white"
                                x="${posX + 1}"
                                y="${posY + 1}"
                            />`
                        );
                    } else {
                        pointList.push(
                            `<use
                                key="${id++}"
                                xlink:href="#B-white"
                                x="${posX - 0.03}"
                                y="${posY - 0.03}"
                            />`
                        );
                    }
                }
            } else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                if (qrcode.isDark(x, y)) {
                    pointList.push(
                        `<use
                            key="${id++}"
                            fill="${posColor}"
                            xlink:href="#B"
                            x="${posX - 0.03}"
                            y="${posY - 0.03}"
                        />`
                    );
                }
            } else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                if (qrcode.isDark(x, y)) {
                    pointList.push(
                        `<use
                            key="${id++}"
                            fill="${posColor}"
                            xlink:href="#B"
                            x="${posX - 0.03}"
                            y="${posY - 0.03}"
                        />`
                    );
                } else {
                    pointList.push(
                        `<use
                            key="${id++}"
                            xlink:href="#B-white"
                            x="${posX - 0.03}"
                            y="${posY - 0.03}"
                        />`
                    );
                }
            } else {
                if (qrcode.isDark(x, y)) {
                    pointList.push(
                        `<use
                            key="${id++}"
                            xlink:href="#S-black"
                            x="${posX + 1}"
                            y="${posY + 1}"
                        />`
                    );
                }
            }
        }
    }

    return pointList;
}
