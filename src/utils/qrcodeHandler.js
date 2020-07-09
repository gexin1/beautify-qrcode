import { QRCode as QRCodeEncoder } from './qrcodeEncoder';

export var QRPointType = {
    DATA: 0,
    POS_CENTER: 1,
    POS_OTHER: 2,
    ALIGN_CENTER: 3,
    ALIGN_OTHER: 4,
    TIMING: 5,
    FORMAT: 6,
    VERSION: 7,
};

/**
 * 生成二维码数据
 * @param {Object} options
 * @param {String} options.text 二维码内容
 * @param {String} [options.render]
 * @param {Number} [options.width]
 * @param {Number} [options.height]
 * @param {Number} [options.typeNumber]
 * @param {Number} [options.correctLevel] 容错率 1=>7% 0 =>15% 3=>25% 2=>30%
 * @param {String} [options.background]
 * @param {String} [options.foreground]
 */
export function encodeData(options) {
    if (!options.text || options.text.length <= 0) return null;

    options = {
        ...{
            render: 'canvas',
            width: "100%",
            height: "100%",
            typeNumber: -1,
            correctLevel: 1,
            background: '#ffffff',
            foreground: '#000000',
            isSpace:true
        },
        ...options,
    };

    const qrcode = new QRCodeEncoder(options.typeNumber, options.correctLevel);
    qrcode.addData(options.text);
    qrcode.make();
    qrcode.$options=options;
    return qrcode;
}

export function getTypeTable(qrcode) {
    const nCount = qrcode.getModuleCount();
    const position = qrcode.getPositionTable();
    const PD = [
        [3, 3],
        [3, nCount - 4],
        [nCount - 4, 3],
    ];

    const typeTable = new Array(nCount);
    for (let i = 0; i < nCount; i++) typeTable[i] = new Array(nCount);

    for (let i = 8; i < nCount - 7; i++) {
        typeTable[i][6] = typeTable[6][i] = QRPointType.TIMING;
    }

    for (let i = 0; i < position.length; i++) {
        typeTable[position[i][0]][position[i][1]] = QRPointType.ALIGN_CENTER;
        for (let r = -2; r <= 2; r++) {
            for (let c = -2; c <= 2; c++) {
                if (!(r === 0 && c === 0))
                    typeTable[position[i][0] + r][position[i][1] + c] =
                        QRPointType.ALIGN_OTHER;
            }
        }
    }

    for (let i = 0; i < PD.length; i++) {
        typeTable[PD[i][0]][PD[i][1]] = QRPointType.POS_CENTER;
        for (let r = -4; r <= 4; r++) {
            for (let c = -4; c <= 4; c++) {
                if (
                    PD[i][0] + r >= 0 &&
                    PD[i][0] + r < nCount &&
                    PD[i][1] + c >= 0 &&
                    PD[i][1] + c < nCount
                )
                    if (!(r === 0 && c === 0))
                        typeTable[PD[i][0] + r][PD[i][1] + c] =
                            QRPointType.POS_OTHER;
            }
        }
    }

    for (let i = 0; i <= 8; i++) {
        if (i !== 6) typeTable[i][8] = typeTable[8][i] = QRPointType.FORMAT;
        if (i < 7) typeTable[nCount - i - 1][8] = QRPointType.FORMAT;
        if (i < 8) typeTable[8][nCount - i - 1] = QRPointType.FORMAT;
    }

    for (let i = nCount - 11; i <= nCount - 9; i++) {
        for (let j = 0; j <= 5; j++) {
            typeTable[i][j] = typeTable[j][i] = QRPointType.VERSION;
        }
    }

    for (let i = 0; i < nCount; i++) {
        for (let j = 0; j < nCount; j++) {
            if (!typeTable[i][j]) typeTable[i][j] = QRPointType.DATA;
        }
    }
    return typeTable;
}
