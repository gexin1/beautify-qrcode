/**
    beautify-qrcode v1.0.3
    river
    https://github.com/gexin1/beautify-qrcode
*/
import { object, mixed, number, string } from 'yup';

function createRenderer(renderer) {
    const defaultViewBox = function (qrcode) {
        if (!qrcode) return '0 0 0 0';

        const nCount = qrcode.getModuleCount();
        // 不留间隔
        return qrcode.$options.isSpace
            ? `${-nCount / 5} ${-nCount / 5} ${nCount + (nCount / 5) * 2} ${
                  nCount + (nCount / 5) * 2
              }`
            : `${0} ${0} ${nCount} ${nCount}`;
    };

    renderer = {
        ...{
            getViewBox: defaultViewBox,
            listPoints: (qrcode, params) => {
                return [];
            },
            getParamInfo: () => {
                return [];
            },
            beginRendering: ({ qrcode, params, setParamInfo }) => {},
            beforeListing: ({ qrcode, params, setParamInfo }) => {},
            afterListing: ({ qrcode, params, setParamInfo }) => {},
        },
        ...renderer,
    };

    return ({ qrcode, params }) => {
        const { width, height } = qrcode.$options;
        return `
            <svg width="${width}" height="${height}" viewBox="${renderer.getViewBox(
            qrcode
        )}" fill="white"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                ${renderer.listPoints(qrcode, params).join('')}
            </svg>
        `;
    };
}

// ---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
// ---------------------------------------------------------------------
/* eslint-disable */
function QR8bitByte(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data;
    this.parsedData = [];

    // Added to support UTF-8 Characters
    for (var i = 0, l = this.data.length; i < l; i++) {
        var byteArray = [];
        var code = this.data.charCodeAt(i);

        if (code > 0x10000) {
            byteArray[0] = 0xf0 | ((code & 0x1c0000) >>> 18);
            byteArray[1] = 0x80 | ((code & 0x3f000) >>> 12);
            byteArray[2] = 0x80 | ((code & 0xfc0) >>> 6);
            byteArray[3] = 0x80 | (code & 0x3f);
        } else if (code > 0x800) {
            byteArray[0] = 0xe0 | ((code & 0xf000) >>> 12);
            byteArray[1] = 0x80 | ((code & 0xfc0) >>> 6);
            byteArray[2] = 0x80 | (code & 0x3f);
        } else if (code > 0x80) {
            byteArray[0] = 0xc0 | ((code & 0x7c0) >>> 6);
            byteArray[1] = 0x80 | (code & 0x3f);
        } else {
            byteArray[0] = code;
        }

        this.parsedData.push(byteArray);
    }

    this.parsedData = Array.prototype.concat.apply([], this.parsedData);

    if (this.parsedData.length != this.data.length) {
        this.parsedData.unshift(191);
        this.parsedData.unshift(187);
        this.parsedData.unshift(239);
    }
}

QR8bitByte.prototype = {
    getLength: function (buffer) {
        return this.parsedData.length;
    },
    write: function (buffer) {
        for (var i = 0, l = this.parsedData.length; i < l; i++) {
            buffer.put(this.parsedData[i], 8);
        }
    },
};

//---------------------------------------------------------------------
// QRCode
//---------------------------------------------------------------------

function QRCode(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.position = [];
    this.dataCache = null;
    this.dataList = [];
}

QRCode.prototype = {
    addData: function (data) {
        let newData = new QR8bitByte(data);
        this.dataList.push(newData);
        this.dataCache = null;
    },

    isDark: function (row, col) {
        if (
            row < 0 ||
            this.moduleCount <= row ||
            col < 0 ||
            this.moduleCount <= col
        ) {
            throw new Error(row + ',' + col);
        }
        return this.modules[row][col];
    },

    getModuleCount: function () {
        return this.moduleCount;
    },

    getPositionTable: function () {
        return this.position;
    },

    make: function () {
        // Calculate automatically typeNumber if provided is < 1
        if (this.typeNumber < 1) {
            let typeNumber = 1;
            for (typeNumber = 1; typeNumber < 40; typeNumber++) {
                let rsBlocks = QRRSBlock.getRSBlocks(
                    typeNumber,
                    this.errorCorrectLevel
                );

                let buffer = new QRBitBuffer();
                let totalDataCount = 0;
                for (let i = 0; i < rsBlocks.length; i++) {
                    totalDataCount += rsBlocks[i].dataCount;
                }

                for (let i = 0; i < this.dataList.length; i++) {
                    let data = this.dataList[i];
                    buffer.put(data.mode, 4);
                    buffer.put(
                        data.getLength(),
                        QRUtil.getLengthInBits(data.mode, typeNumber)
                    );
                    data.write(buffer);
                }
                if (buffer.getLengthInBits() <= totalDataCount * 8) break;
            }
            this.typeNumber = typeNumber;
        }
        this.makeImpl(false, this.getBestMaskPattern());
    },

    makeImpl: function (test, maskPattern) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = new Array(this.moduleCount);

        for (let row = 0; row < this.moduleCount; row++) {
            this.modules[row] = new Array(this.moduleCount);

            for (let col = 0; col < this.moduleCount; col++) {
                this.modules[row][col] = null; //(col + row) % 3;
            }
        }

        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(test, maskPattern);

        if (this.typeNumber >= 7) {
            this.setupTypeNumber(test);
        }

        if (this.dataCache == null) {
            this.dataCache = QRCode.createData(
                this.typeNumber,
                this.errorCorrectLevel,
                this.dataList
            );
        }

        this.mapData(this.dataCache, maskPattern);
    },

    setupPositionProbePattern: function (row, col) {
        for (let r = -1; r <= 7; r++) {
            if (row + r <= -1 || this.moduleCount <= row + r) continue;

            for (let c = -1; c <= 7; c++) {
                if (col + c <= -1 || this.moduleCount <= col + c) continue;

                if (
                    (0 <= r && r <= 6 && (c == 0 || c == 6)) ||
                    (0 <= c && c <= 6 && (r == 0 || r == 6)) ||
                    (2 <= r && r <= 4 && 2 <= c && c <= 4)
                ) {
                    this.modules[row + r][col + c] = true;
                } else {
                    this.modules[row + r][col + c] = false;
                }
            }
        }
    },

    getBestMaskPattern: function () {
        let minLostPoint = 0;
        let pattern = 0;

        for (let i = 0; i < 8; i++) {
            this.makeImpl(true, i);

            let lostPoint = QRUtil.getLostPoint(this);

            if (i == 0 || minLostPoint > lostPoint) {
                minLostPoint = lostPoint;
                pattern = i;
            }
        }

        return pattern;
    },

    createMovieClip: function (target_mc, instance_name, depth) {
        let qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
        let cs = 1;

        this.make();

        for (let row = 0; row < this.modules.length; row++) {
            let y = row * cs;

            for (let col = 0; col < this.modules[row].length; col++) {
                let x = col * cs;
                let dark = this.modules[row][col];

                if (dark) {
                    qr_mc.beginFill(0, 100);
                    qr_mc.moveTo(x, y);
                    qr_mc.lineTo(x + cs, y);
                    qr_mc.lineTo(x + cs, y + cs);
                    qr_mc.lineTo(x, y + cs);
                    qr_mc.endFill();
                }
            }
        }

        return qr_mc;
    },

    setupTimingPattern: function () {
        for (let r = 8; r < this.moduleCount - 8; r++) {
            if (this.modules[r][6] != null) {
                continue;
            }
            this.modules[r][6] = r % 2 == 0;
        }

        for (let c = 8; c < this.moduleCount - 8; c++) {
            if (this.modules[6][c] != null) {
                continue;
            }
            this.modules[6][c] = c % 2 == 0;
        }
    },

    setupPositionAdjustPattern: function () {
        let pos = QRUtil.getPatternPosition(this.typeNumber);

        this.position = [];

        for (let i = 0; i < pos.length; i++) {
            for (let j = 0; j < pos.length; j++) {
                let row = pos[i];
                let col = pos[j];

                if (this.modules[row][col] != null) {
                    continue;
                }

                this.position.push([row, col]);

                for (let r = -2; r <= 2; r++) {
                    for (let c = -2; c <= 2; c++) {
                        if (
                            r == -2 ||
                            r == 2 ||
                            c == -2 ||
                            c == 2 ||
                            (r == 0 && c == 0)
                        ) {
                            this.modules[row + r][col + c] = true;
                        } else {
                            this.modules[row + r][col + c] = false;
                        }
                    }
                }
            }
        }
    },

    setupTypeNumber: function (test) {
        let bits = QRUtil.getBCHTypeNumber(this.typeNumber);

        for (let i = 0; i < 18; i++) {
            let mod = !test && ((bits >> i) & 1) == 1;
            this.modules[Math.floor(i / 3)][
                (i % 3) + this.moduleCount - 8 - 3
            ] = mod;
        }

        for (let i = 0; i < 18; i++) {
            let mod = !test && ((bits >> i) & 1) == 1;
            this.modules[(i % 3) + this.moduleCount - 8 - 3][
                Math.floor(i / 3)
            ] = mod;
        }
    },

    setupTypeInfo: function (test, maskPattern) {
        let data = (this.errorCorrectLevel << 3) | maskPattern;
        let bits = QRUtil.getBCHTypeInfo(data);

        // vertical
        for (let i = 0; i < 15; i++) {
            let mod = !test && ((bits >> i) & 1) == 1;

            if (i < 6) {
                this.modules[i][8] = mod;
            } else if (i < 8) {
                this.modules[i + 1][8] = mod;
            } else {
                this.modules[this.moduleCount - 15 + i][8] = mod;
            }
        }

        // horizontal
        for (let i = 0; i < 15; i++) {
            let mod = !test && ((bits >> i) & 1) == 1;

            if (i < 8) {
                this.modules[8][this.moduleCount - i - 1] = mod;
            } else if (i < 9) {
                this.modules[8][15 - i - 1 + 1] = mod;
            } else {
                this.modules[8][15 - i - 1] = mod;
            }
        }

        // fixed module
        this.modules[this.moduleCount - 8][8] = !test;
    },

    mapData: function (data, maskPattern) {
        let inc = -1;
        let row = this.moduleCount - 1;
        let bitIndex = 7;
        let byteIndex = 0;

        for (let col = this.moduleCount - 1; col > 0; col -= 2) {
            if (col == 6) col--;

            while (true) {
                for (let c = 0; c < 2; c++) {
                    if (this.modules[row][col - c] == null) {
                        let dark = false;

                        if (byteIndex < data.length) {
                            dark = ((data[byteIndex] >>> bitIndex) & 1) == 1;
                        }

                        let mask = QRUtil.getMask(maskPattern, row, col - c);

                        if (mask) {
                            dark = !dark;
                        }

                        this.modules[row][col - c] = dark;
                        bitIndex--;

                        if (bitIndex == -1) {
                            byteIndex++;
                            bitIndex = 7;
                        }
                    }
                }

                row += inc;

                if (row < 0 || this.moduleCount <= row) {
                    row -= inc;
                    inc = -inc;
                    break;
                }
            }
        }
    },
};

QRCode.PAD0 = 0xec;
QRCode.PAD1 = 0x11;

QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
    let rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);

    let buffer = new QRBitBuffer();

    for (let i = 0; i < dataList.length; i++) {
        let data = dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(
            data.getLength(),
            QRUtil.getLengthInBits(data.mode, typeNumber)
        );
        data.write(buffer);
    }

    // calc num max data.
    let totalDataCount = 0;
    for (let i = 0; i < rsBlocks.length; i++) {
        totalDataCount += rsBlocks[i].dataCount;
    }

    if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error(
            'code length overflow. (' +
                buffer.getLengthInBits() +
                '>' +
                totalDataCount * 8 +
                ')'
        );
    }

    // end code
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
    }

    // padding
    while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
    }

    // padding
    while (true) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
            break;
        }
        buffer.put(QRCode.PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
            break;
        }
        buffer.put(QRCode.PAD1, 8);
    }

    return QRCode.createBytes(buffer, rsBlocks);
};

QRCode.createBytes = function (buffer, rsBlocks) {
    let offset = 0;

    let maxDcCount = 0;
    let maxEcCount = 0;

    let dcdata = new Array(rsBlocks.length);
    let ecdata = new Array(rsBlocks.length);

    for (let r = 0; r < rsBlocks.length; r++) {
        let dcCount = rsBlocks[r].dataCount;
        let ecCount = rsBlocks[r].totalCount - dcCount;

        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);

        dcdata[r] = new Array(dcCount);

        for (let i = 0; i < dcdata[r].length; i++) {
            dcdata[r][i] = 0xff & buffer.buffer[i + offset];
        }
        offset += dcCount;

        let rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        let rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);

        let modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (let i = 0; i < ecdata[r].length; i++) {
            let modIndex = i + modPoly.getLength() - ecdata[r].length;
            ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
    }

    let totalCodeCount = 0;
    for (let i = 0; i < rsBlocks.length; i++) {
        totalCodeCount += rsBlocks[i].totalCount;
    }

    let data = new Array(totalCodeCount);
    let index = 0;

    for (let i = 0; i < maxDcCount; i++) {
        for (let r = 0; r < rsBlocks.length; r++) {
            if (i < dcdata[r].length) {
                data[index++] = dcdata[r][i];
            }
        }
    }

    for (let i = 0; i < maxEcCount; i++) {
        for (let r = 0; r < rsBlocks.length; r++) {
            if (i < ecdata[r].length) {
                data[index++] = ecdata[r][i];
            }
        }
    }

    return data;
};

//---------------------------------------------------------------------
// QRMode
//---------------------------------------------------------------------

let QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3,
};

//---------------------------------------------------------------------
// QRErrorCorrectLevel
//---------------------------------------------------------------------

let QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2,
};

//---------------------------------------------------------------------
// QRMaskPattern
//---------------------------------------------------------------------

let QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
};

//---------------------------------------------------------------------
// QRUtil
//---------------------------------------------------------------------

let QRUtil = {
    PATTERN_POSITION_TABLE: [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170],
    ],

    G15:
        (1 << 10) |
        (1 << 8) |
        (1 << 5) |
        (1 << 4) |
        (1 << 2) |
        (1 << 1) |
        (1 << 0),
    G18:
        (1 << 12) |
        (1 << 11) |
        (1 << 10) |
        (1 << 9) |
        (1 << 8) |
        (1 << 5) |
        (1 << 2) |
        (1 << 0),
    G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),

    getBCHTypeInfo: function (data) {
        let d = data << 10;
        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
            d ^=
                QRUtil.G15 <<
                (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15));
        }
        return ((data << 10) | d) ^ QRUtil.G15_MASK;
    },

    getBCHTypeNumber: function (data) {
        let d = data << 12;
        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
            d ^=
                QRUtil.G18 <<
                (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18));
        }
        return (data << 12) | d;
    },

    getBCHDigit: function (data) {
        let digit = 0;

        while (data != 0) {
            digit++;
            data >>>= 1;
        }

        return digit;
    },

    getPatternPosition: function (typeNumber) {
        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },

    getMask: function (maskPattern, i, j) {
        switch (maskPattern) {
            case QRMaskPattern.PATTERN000:
                return (i + j) % 2 == 0;
            case QRMaskPattern.PATTERN001:
                return i % 2 == 0;
            case QRMaskPattern.PATTERN010:
                return j % 3 == 0;
            case QRMaskPattern.PATTERN011:
                return (i + j) % 3 == 0;
            case QRMaskPattern.PATTERN100:
                return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
            case QRMaskPattern.PATTERN101:
                return ((i * j) % 2) + ((i * j) % 3) == 0;
            case QRMaskPattern.PATTERN110:
                return (((i * j) % 2) + ((i * j) % 3)) % 2 == 0;
            case QRMaskPattern.PATTERN111:
                return (((i * j) % 3) + ((i + j) % 2)) % 2 == 0;

            default:
                throw new Error('bad maskPattern:' + maskPattern);
        }
    },

    getErrorCorrectPolynomial: function (errorCorrectLength) {
        let a = new QRPolynomial([1], 0);

        for (let i = 0; i < errorCorrectLength; i++) {
            a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
        }

        return a;
    },

    getLengthInBits: function (mode, type) {
        if (1 <= type && type < 10) {
            // 1 - 9

            switch (mode) {
                case QRMode.MODE_NUMBER:
                    return 10;
                case QRMode.MODE_ALPHA_NUM:
                    return 9;
                case QRMode.MODE_8BIT_BYTE:
                    return 8;
                case QRMode.MODE_KANJI:
                    return 8;
                default:
                    throw new Error('mode:' + mode);
            }
        } else if (type < 27) {
            // 10 - 26

            switch (mode) {
                case QRMode.MODE_NUMBER:
                    return 12;
                case QRMode.MODE_ALPHA_NUM:
                    return 11;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 10;
                default:
                    throw new Error('mode:' + mode);
            }
        } else if (type < 41) {
            // 27 - 40

            switch (mode) {
                case QRMode.MODE_NUMBER:
                    return 14;
                case QRMode.MODE_ALPHA_NUM:
                    return 13;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 12;
                default:
                    throw new Error('mode:' + mode);
            }
        } else {
            throw new Error('type:' + type);
        }
    },

    getLostPoint: function (qrCode) {
        let moduleCount = qrCode.getModuleCount();

        let lostPoint = 0;

        // LEVEL1

        for (let row = 0; row < moduleCount; row++) {
            for (let col = 0; col < moduleCount; col++) {
                let sameCount = 0;
                let dark = qrCode.isDark(row, col);

                for (let r = -1; r <= 1; r++) {
                    if (row + r < 0 || moduleCount <= row + r) {
                        continue;
                    }

                    for (let c = -1; c <= 1; c++) {
                        if (col + c < 0 || moduleCount <= col + c) {
                            continue;
                        }

                        if (r == 0 && c == 0) {
                            continue;
                        }

                        if (dark == qrCode.isDark(row + r, col + c)) {
                            sameCount++;
                        }
                    }
                }

                if (sameCount > 5) {
                    lostPoint += 3 + sameCount - 5;
                }
            }
        }

        // LEVEL2

        for (let row = 0; row < moduleCount - 1; row++) {
            for (let col = 0; col < moduleCount - 1; col++) {
                let count = 0;
                if (qrCode.isDark(row, col)) count++;
                if (qrCode.isDark(row + 1, col)) count++;
                if (qrCode.isDark(row, col + 1)) count++;
                if (qrCode.isDark(row + 1, col + 1)) count++;
                if (count == 0 || count == 4) {
                    lostPoint += 3;
                }
            }
        }

        // LEVEL3

        for (let row = 0; row < moduleCount; row++) {
            for (let col = 0; col < moduleCount - 6; col++) {
                if (
                    qrCode.isDark(row, col) &&
                    !qrCode.isDark(row, col + 1) &&
                    qrCode.isDark(row, col + 2) &&
                    qrCode.isDark(row, col + 3) &&
                    qrCode.isDark(row, col + 4) &&
                    !qrCode.isDark(row, col + 5) &&
                    qrCode.isDark(row, col + 6)
                ) {
                    lostPoint += 40;
                }
            }
        }

        for (let col = 0; col < moduleCount; col++) {
            for (let row = 0; row < moduleCount - 6; row++) {
                if (
                    qrCode.isDark(row, col) &&
                    !qrCode.isDark(row + 1, col) &&
                    qrCode.isDark(row + 2, col) &&
                    qrCode.isDark(row + 3, col) &&
                    qrCode.isDark(row + 4, col) &&
                    !qrCode.isDark(row + 5, col) &&
                    qrCode.isDark(row + 6, col)
                ) {
                    lostPoint += 40;
                }
            }
        }

        // LEVEL4

        let darkCount = 0;

        for (let col = 0; col < moduleCount; col++) {
            for (let row = 0; row < moduleCount; row++) {
                if (qrCode.isDark(row, col)) {
                    darkCount++;
                }
            }
        }

        let ratio =
            Math.abs((100 * darkCount) / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;

        return lostPoint;
    },
};

//---------------------------------------------------------------------
// QRMath
//---------------------------------------------------------------------

let QRMath = {
    glog: function (n) {
        if (n < 1) {
            throw new Error('glog(' + n + ')');
        }

        return QRMath.LOG_TABLE[n];
    },

    gexp: function (n) {
        while (n < 0) {
            n += 255;
        }

        while (n >= 256) {
            n -= 255;
        }

        return QRMath.EXP_TABLE[n];
    },

    EXP_TABLE: new Array(256),

    LOG_TABLE: new Array(256),
};

for (let i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
}
for (let i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] =
        QRMath.EXP_TABLE[i - 4] ^
        QRMath.EXP_TABLE[i - 5] ^
        QRMath.EXP_TABLE[i - 6] ^
        QRMath.EXP_TABLE[i - 8];
}
for (let i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}

//---------------------------------------------------------------------
// QRPolynomial
//---------------------------------------------------------------------

function QRPolynomial(num, shift) {
    if (num.length == undefined) {
        throw new Error(num.length + '/' + shift);
    }

    let offset = 0;

    while (offset < num.length && num[offset] == 0) {
        offset++;
    }

    this.num = new Array(num.length - offset + shift);
    for (let i = 0; i < num.length - offset; i++) {
        this.num[i] = num[i + offset];
    }
}

QRPolynomial.prototype = {
    get: function (index) {
        return this.num[index];
    },

    getLength: function () {
        return this.num.length;
    },

    multiply: function (e) {
        let num = new Array(this.getLength() + e.getLength() - 1);

        for (let i = 0; i < this.getLength(); i++) {
            for (let j = 0; j < e.getLength(); j++) {
                num[i + j] ^= QRMath.gexp(
                    QRMath.glog(this.get(i)) + QRMath.glog(e.get(j))
                );
            }
        }

        return new QRPolynomial(num, 0);
    },

    mod: function (e) {
        if (this.getLength() - e.getLength() < 0) {
            return this;
        }

        let ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));

        let num = new Array(this.getLength());

        for (let i = 0; i < this.getLength(); i++) {
            num[i] = this.get(i);
        }

        for (let i = 0; i < e.getLength(); i++) {
            num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
        }

        // recursive call
        return new QRPolynomial(num, 0).mod(e);
    },
};

//---------------------------------------------------------------------
// QRRSBlock
//---------------------------------------------------------------------

function QRRSBlock(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [
    // L
    // M
    // Q
    // H

    // 1
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],

    // 2
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],

    // 3
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],

    // 4
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],

    // 5
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],

    // 6
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],

    // 7
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],

    // 8
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],

    // 9
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],

    // 10
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],

    // 11
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],

    // 12
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],

    // 13
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],

    // 14
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],

    // 15
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12],

    // 16
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],

    // 17
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],

    // 18
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],

    // 19
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],

    // 20
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],

    // 21
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],

    // 22
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],

    // 23
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],

    // 24
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],

    // 25
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],

    // 26
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],

    // 27
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],

    // 28
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],

    // 29
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],

    // 30
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],

    // 31
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],

    // 32
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],

    // 33
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],

    // 34
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],

    // 35
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],

    // 36
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],

    // 37
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],

    // 38
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],

    // 39
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],

    // 40
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16],
];

QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
    let rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

    if (rsBlock == undefined) {
        throw new Error(
            'bad rs block @ typeNumber:' +
                typeNumber +
                '/errorCorrectLevel:' +
                errorCorrectLevel
        );
    }

    let length = rsBlock.length / 3;

    let list = [];

    for (let i = 0; i < length; i++) {
        let count = rsBlock[i * 3 + 0];
        let totalCount = rsBlock[i * 3 + 1];
        let dataCount = rsBlock[i * 3 + 2];

        for (let j = 0; j < count; j++) {
            list.push(new QRRSBlock(totalCount, dataCount));
        }
    }

    return list;
};

QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
    switch (errorCorrectLevel) {
        case QRErrorCorrectLevel.L:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectLevel.M:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectLevel.Q:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectLevel.H:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default:
            return undefined;
    }
};

//---------------------------------------------------------------------
// QRBitBuffer
//---------------------------------------------------------------------

function QRBitBuffer() {
    this.buffer = [];
    this.length = 0;
}

QRBitBuffer.prototype = {
    get: function (index) {
        let bufIndex = Math.floor(index / 8);
        return ((this.buffer[bufIndex] >>> (7 - (index % 8))) & 1) == 1;
    },

    put: function (num, length) {
        for (let i = 0; i < length; i++) {
            this.putBit(((num >>> (length - i - 1)) & 1) == 1);
        }
    },

    getLengthInBits: function () {
        return this.length;
    },

    putBit: function (bit) {
        let bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
        }

        if (bit) {
            this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        }

        this.length++;
    },
};

var QRPointType = {
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
function encodeData(options) {
    if (!options.text || options.text.length <= 0) return null;

    options = {
        ...{
            render: 'canvas',
            width: '100%',
            height: '100%',
            typeNumber: -1,
            correctLevel: 1,
            background: '#ffffff',
            foreground: '#000000',
            isSpace: true,
        },
        ...options,
    };

    const qrcode = new QRCode(options.typeNumber, options.correctLevel);
    qrcode.addData(options.text);
    qrcode.make();
    qrcode.$options = options;
    return qrcode;
}

function getTypeTable(qrcode) {
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

function rand(min, max) {
    let seed = 0;
    seed = (seed * 9301 + 49297) % 233280;
    return min + (seed / 233280.0) * (max - min);
}

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

    const sq25 =
        'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';

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
                            stroke-width="${
                                (100 / 6) * (1 - (1 - size) * 0.75)
                            }"
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

const schemaBase = object().shape({
    // 信息点样式 ['矩形', '圆形', '随机']
    type: mixed().oneOf([0, 1, 2]).default(0),
    // 信息点缩放
    size: number().default(100),
    // 信息点不透明度
    opacity: number().default(100),
    // 定位点样式['矩形', '圆形', '行星','圆角矩形']
    posType: mixed().oneOf([0, 1, 2, 3]).default(0),
    // 信息点颜色
    otherColor: string().default('#000000'),
    // 定位点点颜色
    posColor: string().default('#000000'),
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
const rendererRect = (qrcode, options = {}) => {
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
const rendererRound = (qrcode, options = {}) => {
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
const rendererRandRound = (qrcode, options = {}) => {
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

function listPoints$1(qrcode, params) {
    if (!qrcode) return [];

    const nCount = qrcode.getModuleCount();
    const typeTable = getTypeTable(qrcode);
    const pointList = [];
    const g1 = [];
    const g2 = [];

    let width2 = params[0] / 100;
    let width1 = params[1] / 100;
    const width3 = params[2] / 100;
    const posType = params[3];
    let id = 0;

    if (width2 <= 0) width2 = 70;
    if (width1 <= 0) width1 = 70;

    const available = [];
    const ava2 = [];
    for (let x = 0; x < nCount; x++) {
        available[x] = [];
        ava2[x] = [];
        for (let y = 0; y < nCount; y++) {
            available[x][y] = true;
            ava2[x][y] = true;
        }
    }

    for (let y = 0; y < nCount; y++) {
        for (let x = 0; x < nCount; x++) {
            if (qrcode.isDark(x, y) === false) continue;
            else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                if (posType === 0) {
                    pointList.push(
                        `<rect
                            width="${1}"
                            height="${1}"
                            key="${id++}"
                            fill="#0B2D97"
                            x="${x}"
                            y="${y}"
                        />`
                    );
                } else if (posType === 1) {
                    pointList.push(
                        `<rect
                            width="${3 - (1 - width3)}"
                            height="${3 - (1 - width3)}"
                            key="${id++}"
                            fill="#0B2D97"
                            x="${x - 1 + (1 - width3) / 2}"
                            y="${y - 1 + (1 - width3) / 2}"
                        />`
                    );
                    pointList.push(
                        `<rect
                            width="${width3}"
                            height="${3 - (1 - width3)}"
                            key="${id++}"
                            fill="#0B2D97"
                            x="${x - 3 + (1 - width3) / 2}"
                            y="${y - 1 + (1 - width3) / 2}"
                        />`
                    );
                    pointList.push(
                        `<rect
                            width="${width3}"
                            height="${3 - (1 - width3)}"
                            key="${id++}"
                            fill="#0B2D97"
                            x="${x + 3 + (1 - width3) / 2}"
                            y="${y - 1 + (1 - width3) / 2}"
                        />`
                    );
                    pointList.push(
                        `<rect
                            width="${3 - (1 - width3)}"
                            height="${width3}"
                            key="${id++}"
                            fill="#0B2D97"
                            x="${x - 1 + (1 - width3) / 2}"
                            y="${y - 3 + (1 - width3) / 2}"
                        />`
                    );
                    pointList.push(
                        `<rect
                            width="${3 - (1 - width3)}"
                            height="${width3}"
                            key="${id++}"
                            fill="#0B2D97"
                            x="${x - 1 + (1 - width3) / 2}"
                            y="${y + 3 + (1 - width3) / 2}"
                        />`
                    );
                }
            } else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                if (posType === 0) {
                    pointList.push(
                        `<rect
                            width="${1}"
                            height="${1}"
                            key="${id++}"
                            fill="#0B2D97"
                            x="${x}"
                            y="${y}"
                        />`
                    );
                }
            } else {
                if (
                    available[x][y] &&
                    ava2[x][y] &&
                    x < nCount - 2 &&
                    y < nCount - 2
                ) {
                    let ctn = true;
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            if (ava2[x + i][y + j] === false) {
                                ctn = false;
                            }
                        }
                    }
                    if (
                        ctn &&
                        qrcode.isDark(x + 2, y) &&
                        qrcode.isDark(x + 1, y + 1) &&
                        qrcode.isDark(x, y + 2) &&
                        qrcode.isDark(x + 2, y + 2)
                    ) {
                        g1.push(
                            `<line
                                key="${id++}"
                                x1="${x + width1 / Math.sqrt(8)}"
                                y1="${y + width1 / Math.sqrt(8)}"
                                x2="${x + 3 - width1 / Math.sqrt(8)}"
                                y2="${y + 3 - width1 / Math.sqrt(8)}"
                                fill="none"
                                stroke="#0B2D97"
                                stroke-width="${width1}"
                            />`
                        );
                        g1.push(
                            `<line
                                key="${id++}"
                                x1="${x + 3 - width1 / Math.sqrt(8)}"
                                y1="${y + width1 / Math.sqrt(8)}"
                                x2="${x + width1 / Math.sqrt(8)}"
                                y2="${y + 3 - width1 / Math.sqrt(8)}"
                                fill="none"
                                stroke="#0B2D97"
                                stroke-width="${width1}"
                            />`
                        );
                        available[x][y] = false;
                        available[x + 2][y] = false;
                        available[x][y + 2] = false;
                        available[x + 2][y + 2] = false;
                        available[x + 1][y + 1] = false;
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                ava2[x + i][y + j] = false;
                            }
                        }
                    }
                }
                if (
                    available[x][y] &&
                    ava2[x][y] &&
                    x < nCount - 1 &&
                    y < nCount - 1
                ) {
                    let ctn = true;
                    for (let i = 0; i < 2; i++) {
                        for (let j = 0; j < 2; j++) {
                            if (ava2[x + i][y + j] === false) {
                                ctn = false;
                            }
                        }
                    }
                    if (
                        ctn &&
                        qrcode.isDark(x + 1, y) &&
                        qrcode.isDark(x, y + 1) &&
                        qrcode.isDark(x + 1, y + 1)
                    ) {
                        g1.push(
                            `<line
                                key="${id++}"
                                x1="${x + width1 / Math.sqrt(8)}"
                                y1="${y + width1 / Math.sqrt(8)}"
                                x2="${x + 2 - width1 / Math.sqrt(8)}"
                                y2="${y + 2 - width1 / Math.sqrt(8)}"
                                fill="none"
                                stroke="#0B2D97"
                                stroke-width="${width1}"
                            />`
                        );
                        g1.push(
                            `<line
                                key="${id++}"
                                x1="${x + 2 - width1 / Math.sqrt(8)}"
                                y1="${y + width1 / Math.sqrt(8)}"
                                x2="${x + width1 / Math.sqrt(8)}"
                                y2="${y + 2 - width1 / Math.sqrt(8)}"
                                fill="none"
                                stroke="#0B2D97"
                                stroke-width="${width1}"
                            />`
                        );
                        for (let i = 0; i < 2; i++) {
                            for (let j = 0; j < 2; j++) {
                                available[x + i][y + j] = false;
                                ava2[x + i][y + j] = false;
                            }
                        }
                    }
                }
                if (available[x][y] && ava2[x][y]) {
                    if (
                        y === 0 ||
                        (y > 0 && (!qrcode.isDark(x, y - 1) || !ava2[x][y - 1]))
                    ) {
                        const start = y;
                        let end = y;
                        let ctn = true;
                        while (ctn && end < nCount) {
                            if (qrcode.isDark(x, end) && ava2[x][end]) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }
                        if (end - start > 2) {
                            for (let i = start; i < end; i++) {
                                ava2[x][i] = false;
                                available[x][i] = false;
                            }
                            g2.push(
                                `<rect
                                    width="${width2}"
                                    height="${end - start - 1 - (1 - width2)}"
                                    key="${id++}"
                                    fill="#E02020"
                                    x="${x + (1 - width2) / 2}"
                                    y="${y + (1 - width2) / 2}"
                                />`
                            );
                            g2.push(
                                `<rect
                                    width="${width2}"
                                    height="${width2}"
                                    key="${id++}"
                                    fill="#E02020"
                                    x="${x + (1 - width2) / 2}"
                                    y="${end - 1 + (1 - width2) / 2}"
                                />`
                            );
                        }
                    }
                }
                if (available[x][y] && ava2[x][y]) {
                    if (
                        x === 0 ||
                        (x > 0 && (!qrcode.isDark(x - 1, y) || !ava2[x - 1][y]))
                    ) {
                        const start = x;
                        let end = x;
                        let ctn = true;
                        while (ctn && end < nCount) {
                            if (qrcode.isDark(end, y) && ava2[end][y]) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }
                        if (end - start > 1) {
                            for (let i = start; i < end; i++) {
                                ava2[i][y] = false;
                                available[i][y] = false;
                            }
                            g2.push(
                                `<rect
                                    width="${end - start - (1 - width2)}"
                                    height="${width2}"
                                    key="${id++}"
                                    fill="#F6B506"
                                    x="${x + (1 - width2) / 2}"
                                    y="${y + (1 - width2) / 2}"
                                />`
                            );
                        }
                    }
                }
                if (available[x][y]) {
                    pointList.push(
                        `<rect
                            width="${width2}"
                            height="${width2}"
                            key="${id++}"
                            fill="#F6B506"
                            x="${x + (1 - width2) / 2}"
                            y="${y + (1 - width2) / 2}"
                        />`
                    );
                }
            }
        }
    }

    for (let i = 0; i < g1.length; i++) {
        pointList.push(g1[i]);
    }
    for (let i = 0; i < g2.length; i++) {
        pointList.push(g2[i]);
    }

    return pointList;
}

const schemaDSJ = object().shape({
    // 信息点缩放
    width2: number().default(70),
    // x 宽度
    width1: number().default(70),
    // 定位点宽度
    width3: number().default(90),
    // 定位点样式 ['矩形', 'DSJ'],
    posType: mixed().oneOf([0, 1]).default(1),
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
        listPoints: listPoints$1,
    })({ qrcode, params });

    return svg;
};

function listPoints$2(qrcode, params) {
    if (!qrcode) return [];

    const nCount = qrcode.getModuleCount();
    const pointList = [];
    let id = 0;

    const randArr = [];
    for (let row = 0; row < nCount; row++) {
        for (let col = 0; col < nCount; col++) {
            randArr.push([row, col]);
        }
    }
    randArr.sort(function () {
        return 0.5 - Math.random();
    });

    for (let i = 0; i < randArr.length; i++) {
        const row = randArr[i][0];
        const col = randArr[i][1];
        if (qrcode.isDark(row, col)) {
            const tempRand = rand(0.8, 1.3);
            const randNum = rand(50, 230);
            const tempRGB = [
                'rgb(' +
                    Math.floor(20 + randNum) +
                    ',' +
                    Math.floor(170 - randNum / 2) +
                    ',' +
                    Math.floor(60 + randNum * 2) +
                    ')',
                'rgb(' +
                    Math.floor(-20 + randNum) +
                    ',' +
                    Math.floor(130 - randNum / 2) +
                    ',' +
                    Math.floor(20 + randNum * 2) +
                    ')',
            ];
            const width = 0.15;
            pointList.push(
                `<rect
                    key="${id++}"
                    opacity="0.9"
                    fill="${tempRGB[1]}"
                    width="${1 * tempRand + width}"
                    height="${1 * tempRand + width}"
                    x="${row - (tempRand - 1) / 2}"
                    y="${col - (tempRand - 1) / 2}"
                />`
            );
            pointList.push(
                `<rect
                    key="${id++}"
                    fill="${tempRGB[0]}"
                    width="${1 * tempRand}"
                    height="${1 * tempRand}"
                    x="${row - (tempRand - 1) / 2}"
                    y="${col - (tempRand - 1) / 2}"
                />`
            );
        }
    }
    return pointList;
}

/**
 *
 * @param {*} qrcode
 */
const RendererRandRect = (qrcode) => {
    const svg = createRenderer({
        listPoints: listPoints$2,
    })({ qrcode });
    return svg;
};

function listPoints$3(qrcode, params) {
    if (!qrcode) return [];

    const nCount = qrcode.getModuleCount();
    const typeTable = getTypeTable(qrcode);
    const pointList = new Array(nCount);

    const size = 1.001;
    const size2 = 1.001;
    let height = params[0];
    let height2 = params[1];
    const upColor = params[2];
    const leftColor = params[3];
    const rightColor = params[4];
    let id = 0;

    const X = [-Math.sqrt(3) / 2, 1 / 2];
    const Y = [Math.sqrt(3) / 2, 1 / 2];
    const Z = [0, 0];

    const matrixString =
        'matrix(' +
        String(X[0]) +
        ', ' +
        String(X[1]) +
        ', ' +
        String(Y[0]) +
        ', ' +
        String(Y[1]) +
        ', ' +
        String(Z[0]) +
        ', ' +
        String(Z[1]) +
        ')';

    if (height <= 0) height = 1.0;
    if (height2 <= 0) height2 = 1.0;

    for (let x = 0; x < nCount; x++) {
        for (let y = 0; y < nCount; y++) {
            if (qrcode.isDark(x, y) === false) continue;
            else if (
                typeTable[x][y] === QRPointType.POS_OTHER ||
                typeTable[x][y] === QRPointType.POS_CENTER
            ) {
                pointList.push(
                    `<rect
                        width="${size2}"
                        height="${size2}"
                        key="${id++}"
                        fill="${upColor}"
                        x="${x + (1 - size2) / 2}"
                        y="${y + (1 - size2) / 2}"
                        transform="${matrixString}"
                    />`
                );
                pointList.push(
                    `<rect
                        width="${height2}"
                        height="${size2}"
                        key="${id++}"
                        fill="${leftColor}"
                        x="${0}"
                        y="${0}"
                        transform="${
                            matrixString +
                            'translate(' +
                            String(x + (1 - size2) / 2 + size2) +
                            ',' +
                            String(y + (1 - size2) / 2) +
                            ') ' +
                            'skewY(45) '
                        }"
                    />`
                );
                pointList.push(
                    `<rect
                        width="${size2}"
                        height="${height2}"
                        key="${id++}"
                        fill="${rightColor}"
                        x="${0}"
                        y="${0}"
                        transform="${
                            matrixString +
                            'translate(' +
                            String(x + (1 - size2) / 2) +
                            ',' +
                            String(y + size2 + (1 - size2) / 2) +
                            ') ' +
                            'skewX(45) '
                        }"
                    />`
                );
            } else {
                pointList.push(
                    `<rect
                        width="${size}"
                        height="${size}"
                        key="${id++}"
                        fill="${upColor}"
                        x="${x + (1 - size) / 2}"
                        y="${y + (1 - size) / 2}"
                        transform="${matrixString}"
                    />`
                );
                pointList.push(
                    `<rect
                        width="${height}"
                        height="${size}"
                        key="${id++}"
                        fill="${leftColor}"
                        x="${0}"
                        y="${0}"
                        transform="${
                            matrixString +
                            'translate(' +
                            String(x + (1 - size) / 2 + size) +
                            ',' +
                            String(y + (1 - size) / 2) +
                            ') ' +
                            'skewY(45) '
                        }"
                    />`
                );
                pointList.push(
                    `<rect
                        width="${size}"
                        height="${height}"
                        key="${id++}"
                        fill="${rightColor}"
                        x="${0}"
                        y="${0}"
                        transform="${
                            matrixString +
                            'translate(' +
                            String(x + (1 - size) / 2) +
                            ',' +
                            String(y + size + (1 - size) / 2) +
                            ') ' +
                            'skewX(45) '
                        }"
                    />`
                );
            }
        }
    }

    return pointList;
}

function viewBox(qrcode) {
    if (!qrcode) return '0 0 0 0';

    const nCount = qrcode.getModuleCount();
    return qrcode.$options.isSpace
        ? `${-nCount} ${-nCount / 2} ${nCount * 2} ${nCount * 2}`
        : `${-nCount + 3} ${-nCount / 2} ${nCount * 2 - 6} ${nCount * 2 - 6}`;
}
const schema25D = object().shape({
    // 柱体高度
    height: number().default(0.5),
    // 定位点柱体高度
    height2: number().default(0.5),
    // 上侧颜色
    upColor: string().default('#FF7F89'),
    // 左侧颜色
    leftColor: string().default('#FFD7D9'),
    // 右侧颜色
    rightColor: string().default('#FFEBF3'),
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
        listPoints: listPoints$3,
        getViewBox: viewBox,
    })({ qrcode, params });

    return svg;
};

function listPoints$4(qrcode, params) {
    if (!qrcode) return [];

    const nCount = qrcode.getModuleCount();
    const typeTable = getTypeTable(qrcode);
    const pointList = new Array(nCount);

    const type = params[1];
    let size = params[2] / 100 / 3;
    const opacity = params[3] / 100;
    const otherColorDark = params[4];
    const otherColorLight = params[5];
    const posType = params[6];
    const posColor = params[7];
    let id = 0;

    const vw = [3, -3];
    const vh = [3, -3];

    if (size <= 0) size = 1.0;

    pointList.push(
        `<image
            key="${id++}"
            x="0"
            y="0"
            width="${nCount}"
            height="${nCount}"
            xlink:href="${params[0]}"
        />`
    );

    for (let x = 0; x < nCount; x++) {
        for (let y = 0; y < nCount; y++) {
            if (
                typeTable[x][y] === QRPointType.ALIGN_CENTER ||
                typeTable[x][y] === QRPointType.ALIGN_OTHER ||
                typeTable[x][y] === QRPointType.TIMING
            ) {
                if (qrcode.isDark(x, y)) {
                    if (type === 0)
                        pointList.push(
                            `<rect
                                opacity="${opacity}"
                                width="${size}"
                                height="${size}"
                                key="${id++}"
                                fill="${otherColorDark}"
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
                                fill="${otherColorDark}"
                                cx="${x + 0.5}"
                                cy="${y + 0.5}"
                            />`
                        );
                } else {
                    if (type === 0)
                        pointList.push(
                            `<rect
                                opacity="${opacity}"
                                width="${size}"
                                height="${size}"
                                key="${id++}"
                                fill="${otherColorLight}"
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
                                fill="${otherColorLight}"
                                cx="${x + 0.5}"
                                cy="${y + 0.5}"
                            />`
                        );
                }
            } else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                if (qrcode.isDark(x, y)) {
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
                                fill="white"
                                cx="${x + 0.5}"
                                cy="${y + 0.5}"
                                r="${5}"
                            />`
                        );
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
                                fill="white"
                                cx="${x + 0.5}"
                                cy="${y + 0.5}"
                                r="${5}"
                            />`
                        );
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
                    }
                }
            } else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                if (qrcode.isDark(x, y)) {
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
                    if (posType === 0) {
                        pointList.push(
                            `<rect
                                width="${1}"
                                height="${1}"
                                key="${id++}"
                                fill="white"
                                x="${x}"
                                y="${y}"
                            />`
                        );
                    }
                }
            } else {
                if (qrcode.isDark(x, y)) {
                    if (type === 0)
                        pointList.push(
                            `<rect
                                opacity="${opacity}"
                                width="${size}"
                                height="${size}"
                                key="${id++}"
                                fill="${otherColorDark}"
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
                                fill="${otherColorDark}"
                                cx="${x + 0.5}"
                                cy="${y + 0.5}"
                            />`
                        );
                } else {
                    if (type === 0)
                        pointList.push(
                            `<rect
                                opacity="${opacity}"
                                width="${size}"
                                height="${size}"
                                key="${id++}"
                                fill="${otherColorLight}"
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
                                fill="${otherColorLight}"
                                cx="${x + 0.5}"
                                cy="${y + 0.5}"
                            />`
                        );
                }
            }
        }
    }

    return pointList;
}

const schemaImage = object().shape({
    // 背景图片
    backgroudImage: string(),
    // 信息点样式 ['矩形', '圆形'],
    type: mixed().oneOf([0, 1]).default(0),
    // 信息点缩放
    size: number().default(100),
    // 信息点不透明度
    opacity: number().default(100),
    // 信息点深色
    otherColorDark: string().default('#000000'),
    // 信息点浅色
    otherColorLight: string().default('#FFFFFF'),
    // 定位点样式 ['矩形', '圆形', '行星']
    posType: mixed().oneOf([0, 1, 2]).default(0),
    // 定位点颜色
    posColor: string().default('#000000'),
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
        listPoints: listPoints$4,
    })({ qrcode, params });

    return svg;
};

function gamma(r, g, b) {
    return Math.pow(
        (Math.pow(r, 2.2) + Math.pow(1.5 * g, 2.2) + Math.pow(0.6 * b, 2.2)) /
            (1 + Math.pow(1.5, 2.2) + Math.pow(0.6, 2.2)),
        1 / 2.2
    );
}

function listPoints$5(qrcode, params) {
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
        getGrayPointList(params, qrcode.getModuleCount(), '#S-black')
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
            ${gpl.concat(listPoints$5(qrcode, params)).join('')}
        </svg>`;
                resolve(svg);
            })
            .catch((err) => {
                resolve(err);
            });
    });
};

const schemaResImage = object().shape({
    // 背景图片
    backgroudImage: string().default(),
    // 对比度
    contrast: number().default(0),
    // 曝光
    exposure: number().default(0),
    // 小定位点样式 ['无', '白', '黑白']
    alignType: mixed().oneOf([0, 1, 2]).default(0),
    // 时钟样式 ['无', '白', '黑白']
    timingType: mixed().oneOf([0, 1, 2]).default(0),
    // 信息点颜色
    otherColor: string().default('#000000'),
    // 定位点颜色
    posColor: string().default('#000000'),
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

function listPoints$6(qrcode, params) {
    if (!qrcode) return [];

    const nCount = qrcode.getModuleCount();
    const typeTable = getTypeTable(qrcode);
    const pointList = [];
    const g1 = [];
    const g2 = [];

    let id = 0;
    // const size = 0.8;
    // const vw = [3, -3];
    // const vh = [3, -3];

    // const sq25 =
    //     'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';

    const otherColor = params[0];
    const posColor = params[1];

    const available = [];
    const ava2 = [];
    for (let x = 0; x < nCount; x++) {
        available[x] = [];
        ava2[x] = [];
        for (let y = 0; y < nCount; y++) {
            available[x][y] = true;
            ava2[x][y] = true;
        }
    }

    for (let y = 0; y < nCount; y++) {
        for (let x = 0; x < nCount; x++) {
            if (
                qrcode.isDark(x, y) &&
                typeTable[x][y] === QRPointType.POS_CENTER
            ) {
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
            } else if (
                qrcode.isDark(x, y) &&
                typeTable[x][y] === QRPointType.POS_OTHER
            );
            else {
                if (
                    available[x][y] &&
                    ava2[x][y] &&
                    x < nCount - 2 &&
                    y < nCount - 2
                ) {
                    let ctn = true;
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            if (ava2[x + i][y + j] === false) {
                                ctn = false;
                            }
                        }
                    }
                    if (
                        ctn &&
                        qrcode.isDark(x + 1, y) &&
                        qrcode.isDark(x + 1, y + 2) &&
                        qrcode.isDark(x, y + 1) &&
                        qrcode.isDark(x + 2, y + 1)
                    ) {
                        g1.push(
                            `<circle
                                key="${id++}"
                                cx="${x + 1 + 0.5}"
                                cy="${y + 1 + 0.5}"
                                r="${1}"
                                fill="#FFFFFF"
                                stroke="${otherColor}"
                                stroke-width="${rand(0.33, 0.6)}"
                            />`
                        );
                        if (qrcode.isDark(x + 1, y + 1)) {
                            g1.push(
                                `<circle
                                    r="${0.5 * rand(0.5, 1)}"
                                    key="${id++}"
                                    fill="${otherColor}"
                                    cx="${x + 1 + 0.5}"
                                    cy="${y + 1 + 0.5}"
                                />`
                            );
                        }
                        available[x + 1][y] = false;
                        available[x][y + 1] = false;
                        available[x + 2][y + 1] = false;
                        available[x + 1][y + 2] = false;
                        for (let i = 0; i < 3; i++) {
                            for (let j = 0; j < 3; j++) {
                                ava2[x + i][y + j] = false;
                            }
                        }
                    }
                }
                if (x < nCount - 1 && y < nCount - 1) {
                    if (
                        qrcode.isDark(x, y) &&
                        qrcode.isDark(x + 1, y) &&
                        qrcode.isDark(x, y + 1) &&
                        qrcode.isDark(x + 1, y + 1)
                    ) {
                        g1.push(
                            `<circle
                                key="${id++}"
                                cx="${x + 1}"
                                cy="${y + 1}"
                                r="${Math.sqrt(1 / 2)}"
                                fill="#FFFFFF"
                                stroke="${otherColor}"
                                stroke-width="${rand(0.33, 0.6)}"
                            />`
                        );
                        for (let i = 0; i < 2; i++) {
                            for (let j = 0; j < 2; j++) {
                                available[x + i][y + j] = false;
                                ava2[x + i][y + j] = false;
                            }
                        }
                    }
                }
                if (available[x][y] && y < nCount - 1) {
                    if (qrcode.isDark(x, y) && qrcode.isDark(x, y + 1)) {
                        pointList.push(
                            `<circle
                                key="${id++}"
                                cx="${x + 0.5}"
                                cy="${y + 1}"
                                r="${0.5 * rand(0.95, 1.05)}"
                                fill="#FFFFFF"
                                stroke="${otherColor}"
                                stroke-width="${rand(0.36, 0.4)}"
                            />`
                        );
                        available[x][y] = false;
                        available[x][y + 1] = false;
                    }
                }
                if (available[x][y] && x < nCount - 1) {
                    if (qrcode.isDark(x, y) && qrcode.isDark(x + 1, y)) {
                        pointList.push(
                            `<circle
                                key="${id++}"
                                cx="${x + 1}"
                                cy="${y + 0.5}"
                                r="${0.5 * rand(0.95, 1.05)}"
                                fill="#FFFFFF"
                                stroke="${otherColor}"
                                stroke-width="${rand(0.36, 0.4)}"
                            />`
                        );
                        available[x][y] = false;
                        available[x + 1][y] = false;
                    }
                }
                if (available[x][y]) {
                    if (qrcode.isDark(x, y)) {
                        pointList.push(
                            `<circle
                                r="${0.5 * rand(0.5, 1)}"
                                key="${id++}"
                                fill="${otherColor}"
                                cx="${x + 0.5}"
                                cy="${y + 0.5}"
                            />`
                        );
                    } else if (typeTable[x][y] === QRPointType.DATA) {
                        if (rand(0, 1) > 0.85) {
                            g2.push(
                                `<circle
                                    r="${0.5 * rand(0.85, 1.3)}"
                                    key="${id++}"
                                    fill="#FFFFFF"
                                    stroke="${otherColor}"
                                    stroke-width="${rand(0.15, 0.33)}"
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

    for (let i = 0; i < g1.length; i++) {
        pointList.push(g1[i]);
    }
    for (let i = 0; i < g2.length; i++) {
        pointList.push(g2[i]);
    }

    return pointList;
}

const schemaBase$1 = object().shape({
    otherColor: string().default('#8ED1FC'),
    posColor: string().default('#0693E3'),
});

/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.otherColor] 圆圈颜色
 * @param {String} [options.posColor] 定位点颜色
 */
const rendererCircle = (qrcode, options) => {
    try {
        options = schemaBase$1.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    const params = ['otherColor', 'posColor'].map((k) => options[k]);

    const svg = createRenderer({
        listPoints: listPoints$6,
    })({ qrcode, params });

    return svg;
};

function listPoints$7(qrcode, params) {
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

const schemaFuncA = object().shape({
    type: mixed().oneOf([0, 1]).default(1),
    size: mixed().oneOf([0, 1]).default(0),
    opacity: number().default(100),
    posType: mixed().oneOf([0, 1, 2, 3]).default(1),
    otherColor: string().default('#000000'),
    otherColor2: string().default('#000000'),
    posColor: string().default('#000000'),
});
const schemaFuncB = object().shape({
    type: mixed().oneOf([0, 1]).default(1),
    size: mixed().oneOf([0, 1]).default(1),
    opacity: number().default(100),
    posType: mixed().oneOf([0, 1, 2, 3]).default(1),
    otherColor: string().default('#ABB8C3'),
    otherColor2: string().default('#000000'),
    posColor: string().default('#000000'),
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
const rendererFuncA = (qrcode, options) => {
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
        listPoints: listPoints$7,
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
const rendererFuncB = (qrcode, options) => {
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
        listPoints: listPoints$7,
    })({ qrcode, params });

    return svg;
};

function listPoints$8(qrcode, params) {
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

    const sq25 =
        'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';

    if (size <= 0) size = 1.0;

    const available = [];
    const ava2 = [];
    for (let x = 0; x < nCount; x++) {
        available[x] = [];
        ava2[x] = [];
        for (let y = 0; y < nCount; y++) {
            available[x][y] = true;
            ava2[x][y] = true;
        }
    }

    for (let x = 0; x < nCount; x++) {
        for (let y = 0; y < nCount; y++) {
            if (qrcode.isDark(x, y) === false) continue;

            if (typeTable[x][y] === QRPointType.POS_CENTER) {
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
                            stroke-width="${
                                (100 / 6) * (1 - (1 - size) * 0.75)
                            }"
                            fill="none"
                            transform="${`translate(${String(x - 2.5)},${String(
                                y - 2.5
                            )}) scale(${String(6 / 100)},${String(6 / 100)})`}"
                        />`
                    );
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
                if (type === 0) {
                    if (
                        x === 0 ||
                        (x > 0 && (!qrcode.isDark(x - 1, y) || !ava2[x - 1][y]))
                    ) {
                        const start = 0;
                        let end = 0;
                        let ctn = true;
                        while (ctn && x + end < nCount) {
                            if (qrcode.isDark(x + end, y) && ava2[x + end][y]) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }
                        if (end - start > 1) {
                            for (let i = start; i < end; i++) {
                                ava2[x + i][y] = false;
                                available[x + i][y] = false;
                            }
                            pointList.push(
                                `<line
                                    opacity="${opacity}"
                                    x1="${x + 0.5}"
                                    y1="${y + 0.5}"
                                    x2="${x + end - start - 0.5}"
                                    y2="${y + 0.5}"
                                    stroke-width="${size}"
                                    stroke="${otherColor}"
                                    stroke-linecap="round"
                                    key="${id++}"
                                />`
                            );
                        }
                    }
                    if (available[x][y]) {
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
                    }
                }

                if (type === 1) {
                    if (
                        y === 0 ||
                        (y > 0 && (!qrcode.isDark(x, y - 1) || !ava2[x][y - 1]))
                    ) {
                        const start = 0;
                        let end = 0;
                        let ctn = true;
                        while (ctn && y + end < nCount) {
                            if (qrcode.isDark(x, y + end) && ava2[x][y + end]) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }
                        if (end - start > 1) {
                            for (let i = start; i < end; i++) {
                                ava2[x][y + i] = false;
                                available[x][y + i] = false;
                            }
                            pointList.push(
                                `<line
                                    opacity="${opacity}"
                                    x1="${x + 0.5}"
                                    y1="${y + 0.5}"
                                    x2="${x + 0.5}"
                                    y2="${y + end - start - 1 + 0.5}"
                                    stroke-width="${size}"
                                    stroke="${otherColor}"
                                    stroke-linecap="round"
                                    key="${id++}"
                                />`
                            );
                        }
                    }
                    if (available[x][y]) {
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
                    }
                }
                if (type === 2) {
                    if (
                        y === 0 ||
                        (y > 0 && (!qrcode.isDark(x, y - 1) || !ava2[x][y - 1]))
                    ) {
                        const start = 0;
                        let end = 0;
                        let ctn = true;
                        while (ctn && y + end < nCount) {
                            if (
                                qrcode.isDark(x, y + end) &&
                                ava2[x][y + end] &&
                                end - start <= 3
                            ) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }
                        if (end - start > 1) {
                            for (let i = start; i < end; i++) {
                                ava2[x][y + i] = false;
                                available[x][y + i] = false;
                            }
                            pointList.push(
                                `<line
                                    opacity="${opacity}"
                                    x1="${x + 0.5}"
                                    y1="${y + 0.5}"
                                    x2="${x + 0.5}"
                                    y2="${y + end - start - 1 + 0.5}"
                                    stroke-width="${size}"
                                    stroke="${otherColor}"
                                    stroke-linecap="round"
                                    key="${id++}"
                                />`
                            );
                        }
                    }
                    if (
                        x === 0 ||
                        (x > 0 && (!qrcode.isDark(x - 1, y) || !ava2[x - 1][y]))
                    ) {
                        const start = 0;
                        let end = 0;
                        let ctn = true;
                        while (ctn && x + end < nCount) {
                            if (
                                qrcode.isDark(x + end, y) &&
                                ava2[x + end][y] &&
                                end - start <= 3
                            ) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }
                        if (end - start > 1) {
                            for (let i = start; i < end; i++) {
                                ava2[x + i][y] = false;
                                available[x + i][y] = false;
                            }
                            pointList.push(
                                `<line
                                    opacity="${opacity}"
                                    x1="${x + 0.5}"
                                    y1="${y + 0.5}"
                                    x2="${x + end - start - 0.5}"
                                    y2="${y + 0.5}"
                                    stroke-width="${size}"
                                    stroke="${otherColor}"
                                    stroke-linecap="round"
                                    key="${id++}"
                                />`
                            );
                        }
                    }
                    if (available[x][y]) {
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
                    }
                }

                if (type === 3) {
                    if ((x > y) ^ (x + y < nCount)) {
                        if (
                            y === 0 ||
                            (y > 0 &&
                                (!qrcode.isDark(x, y - 1) || !ava2[x][y - 1]))
                        ) {
                            const start = 0;
                            let end = 0;
                            let ctn = true;
                            while (ctn && y + end < nCount) {
                                if (
                                    qrcode.isDark(x, y + end) &&
                                    ava2[x][y + end] &&
                                    end - start <= 3
                                ) {
                                    end++;
                                } else {
                                    ctn = false;
                                }
                            }
                            if (end - start > 1) {
                                for (let i = start; i < end; i++) {
                                    ava2[x][y + i] = false;
                                    available[x][y + i] = false;
                                }
                                pointList.push(
                                    `<line
                                        opacity="${opacity}"
                                        x1="${x + 0.5}"
                                        y1="${y + 0.5}"
                                        x2="${x + 0.5}"
                                        y2="${y + end - start - 1 + 0.5}"
                                        stroke-width="${size}"
                                        stroke="${otherColor}"
                                        stroke-linecap="round"
                                        key="${id++}"
                                    />`
                                );
                            }
                        }
                    } else {
                        if (
                            x === 0 ||
                            (x > 0 &&
                                (!qrcode.isDark(x - 1, y) || !ava2[x - 1][y]))
                        ) {
                            const start = 0;
                            let end = 0;
                            let ctn = true;
                            while (ctn && x + end < nCount) {
                                if (
                                    qrcode.isDark(x + end, y) &&
                                    ava2[x + end][y] &&
                                    end - start <= 3
                                ) {
                                    end++;
                                } else {
                                    ctn = false;
                                }
                            }
                            if (end - start > 1) {
                                for (let i = start; i < end; i++) {
                                    ava2[x + i][y] = false;
                                    available[x + i][y] = false;
                                }
                                pointList.push(
                                    `<line
                                        opacity="${opacity}"
                                        x1="${x + 0.5}"
                                        y1="${y + 0.5}"
                                        x2="${x + end - start - 0.5}"
                                        y2="${y + 0.5}"
                                        stroke-width="${size}"
                                        stroke="${otherColor}"
                                        stroke-linecap="round"
                                        key="${id++}"
                                    />`
                                );
                            }
                        }
                    }
                    if (available[x][y]) {
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
                    }
                }
                if (type === 4) {
                    if (
                        y === 0 ||
                        x === 0 ||
                        (y > 0 &&
                            x > 0 &&
                            (!qrcode.isDark(x - 1, y - 1) ||
                                !ava2[x - 1][y - 1]))
                    ) {
                        const start = 0;
                        let end = 0;
                        let ctn = true;
                        while (ctn && y + end < nCount && x + end < nCount) {
                            if (
                                qrcode.isDark(x + end, y + end) &&
                                ava2[x + end][y + end]
                            ) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }
                        if (end - start > 1) {
                            for (let i = start; i < end; i++) {
                                ava2[x + i][y + i] = false;
                                available[x + i][y + i] = false;
                            }
                            pointList.push(
                                `<line
                                    opacity="${opacity}"
                                    x1="${x + 0.5}"
                                    y1="${y + 0.5}"
                                    x2="${x + end - start - 1 + 0.5}"
                                    y2="${y + end - start - 1 + 0.5}"
                                    stroke-width="${size}"
                                    stroke="${otherColor}"
                                    stroke-linecap="round"
                                    key="${id++}"
                                />`
                            );
                        }
                    }
                    if (available[x][y]) {
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
                    }
                }
                if (type === 5) {
                    if (
                        x === 0 ||
                        y === nCount - 1 ||
                        (x > 0 &&
                            y < nCount - 1 &&
                            (!qrcode.isDark(x - 1, y + 1) ||
                                !ava2[x - 1][y + 1]))
                    ) {
                        const start = 0;
                        let end = 0;
                        let ctn = true;
                        while (ctn && x + end < nCount && y - end >= 0) {
                            if (
                                qrcode.isDark(x + end, y - end) &&
                                available[x + end][y - end]
                            ) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }
                        if (end - start > 1) {
                            for (let i = start; i < end; i++) {
                                ava2[x + i][y - i] = false;
                                available[x + i][y - i] = false;
                            }
                            pointList.push(
                                `<line
                                    opacity="${opacity}"
                                    x1="${x + 0.5}"
                                    y1="${y + 0.5}"
                                    x2="${x + (end - start - 1) + 0.5}"
                                    y2="${y - (end - start - 1) + 0.5}"
                                    stroke-width="${size}"
                                    stroke="${otherColor}"
                                    stroke-linecap="round"
                                    key="${id++}"
                                />`
                            );
                        }
                    }
                    if (available[x][y]) {
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
                    }
                }
                if (type === 6) {
                    if (
                        x === 0 ||
                        y === nCount - 1 ||
                        (x > 0 &&
                            y < nCount - 1 &&
                            (!qrcode.isDark(x - 1, y + 1) ||
                                !ava2[x - 1][y + 1]))
                    ) {
                        const start = 0;
                        let end = 0;
                        let ctn = true;
                        while (ctn && x + end < nCount && y - end >= 0) {
                            if (
                                qrcode.isDark(x + end, y - end) &&
                                ava2[x + end][y - end]
                            ) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }
                        if (end - start > 1) {
                            for (let i = start; i < end; i++) {
                                ava2[x + i][y - i] = false;
                            }
                            pointList.push(
                                `<line
                                    opacity="${opacity}"
                                    x1="${x + 0.5}"
                                    y1="${y + 0.5}"
                                    x2="${x + (end - start - 1) + 0.5}"
                                    y2="${y - (end - start - 1) + 0.5}"
                                    stroke-width="${(size / 2) * rand(0.3, 1)}"
                                    stroke="${otherColor}"
                                    stroke-linecap="round"
                                    key="${id++}"
                                />`
                            );
                        }
                    }
                    if (
                        y === 0 ||
                        x === 0 ||
                        (y > 0 &&
                            x > 0 &&
                            (!qrcode.isDark(x - 1, y - 1) ||
                                !available[x - 1][y - 1]))
                    ) {
                        const start = 0;
                        let end = 0;
                        let ctn = true;
                        while (ctn && y + end < nCount && x + end < nCount) {
                            if (
                                qrcode.isDark(x + end, y + end) &&
                                available[x + end][y + end]
                            ) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }
                        if (end - start > 1) {
                            for (let i = start; i < end; i++) {
                                available[x + i][y + i] = false;
                            }
                            pointList.push(
                                `<line
                                    opacity="${opacity}"
                                    x1="${x + 0.5}"
                                    y1="${y + 0.5}"
                                    x2="${x + end - start - 1 + 0.5}"
                                    y2="${y + end - start - 1 + 0.5}"
                                    stroke-width="${(size / 2) * rand(0.3, 1)}"
                                    stroke="${otherColor}"
                                    stroke-linecap="round"
                                    key="${id++}"
                                />`
                            );
                        }
                    }
                    pointList.push(
                        `<circle
                            opacity="${opacity}"
                            r="${0.5 * rand(0.33, 0.9)}"
                            key="${id++}"
                            fill="${otherColor}"
                            cx="${x + 0.5}"
                            cy="${y + 0.5}"
                        />`
                    );
                }
            }
        }
    }

    return pointList;
}

const schemaLine = object().shape({
    type: mixed().oneOf([0, 1, 2, 3, 4, 5, 6]).default(2),
    size: number().default(50),
    opacity: number().default(100),
    posType: mixed().oneOf([0, 1, 2, 3]).default(3),
    otherColor: string().default('#000000'),
    posColor: string().default('#000000'),
});
const schemaLine2 = object().shape({
    type: mixed().oneOf([0, 1, 2, 3, 4, 5, 6]).default(6),
    size: number().default(50),
    opacity: number().default(100),
    posType: mixed().oneOf([0, 1, 2, 3]).default(0),

    otherColor: string().default('#000000'),

    posColor: string().default('#000000'),
});

/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.type]  连线方向 0=>左右 1=>上下 2=>纵横 3=>回环 4=>左上—右下 5=>右上—左下 6=>交叉"
 * @param {String} [options.size] 连线粗细
 * @param {String} [options.opacity] 连线不透明度
 * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
 * @param {String} [options.otherColor] 连线颜色
 * @param {String} [options.posColor] 定位点颜色
 */
const rendererLine = (qrcode, options) => {
    try {
        options = schemaLine.validateSync(options);
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
        listPoints: listPoints$8,
    })({ qrcode, params });

    return svg;
};

/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.type]  连线方向 0=>左右 1=>上下 2=>纵横 3=>回环 4=>左上—右下 5=>右上—左下 7=>交叉"
 * @param {String} [options.size] 连线粗细
 * @param {String} [options.opacity] 连线不透明度
 * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
 * @param {String} [options.otherColor] 连线颜色
 * @param {String} [options.posColor] 定位点颜色
 */
const rendererLine2 = (qrcode, options) => {
    try {
        options = schemaLine2.validateSync(options);
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
        listPoints: listPoints$8,
    })({ qrcode, params });

    return svg;
};

var index = {
    rendererRect,
    rendererRound,
    rendererRandRound,
    rendererDSJ: RenderDSJ,
    rendererResImage: render,
    rendererImage: RendererImage,
    renderer25D: Renderer25D,
    rendererRandRect: RendererRandRect,
    rendererCircle,
    rendererFuncA,
    rendererFuncB,
    rendererLine,
    rendererLine2,
    encodeData,
};

export default index;
export {
    encodeData,
    Renderer25D as renderer25D,
    rendererCircle,
    RenderDSJ as rendererDSJ,
    rendererFuncA,
    rendererFuncB,
    RendererImage as rendererImage,
    rendererLine,
    rendererLine2,
    RendererRandRect as rendererRandRect,
    rendererRandRound,
    rendererRect,
    render as rendererResImage,
    rendererRound,
};
