/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { object, mixed, number, string } from 'yup';
import { createRenderer } from '@/utils/renderer';
import { getTypeTable, QRPointType } from '@/utils/qrcodeHandler';
import { rand } from '@/utils/util';
import { gamma } from '@/utils/imageUtils';

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }

    return obj;
}

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
            symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        keys.push.apply(keys, symbols);
    }

    return keys;
}

function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
            );
        } else {
            ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(source, key)
                );
            });
        }
    }

    return target;
}

function listPoints(qrcode, params) {
    if (!qrcode) return [];
    var nCount = qrcode.getModuleCount();
    var typeTable = getTypeTable(qrcode);
    var pointList = new Array(nCount);
    var type = params[0];
    var size = params[1] / 100;
    var opacity = params[2] / 100;
    var posType = params[3];
    var id = 0;
    var otherColor = params[4];
    var posColor = params[5];
    var vw = [3, -3];
    var vh = [3, -3];
    var sq25 =
        'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';
    if (size <= 0) size = 1.0;

    for (var x = 0; x < nCount; x++) {
        for (var y = 0; y < nCount; y++) {
            if (qrcode.isDark(x, y) === false) continue;

            if (
                typeTable[x][y] === QRPointType.ALIGN_CENTER ||
                typeTable[x][y] === QRPointType.ALIGN_OTHER ||
                typeTable[x][y] === QRPointType.TIMING
            ) {
                if (type === 0)
                    pointList.push(
                        '<rect\n                            opacity="'
                            .concat(
                                opacity,
                                '"\n                            width="'
                            )
                            .concat(
                                size,
                                '"\n                            height="'
                            )
                            .concat(
                                size,
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                otherColor,
                                '"\n                            x="'
                            )
                            .concat(
                                x + (1 - size) / 2,
                                '"\n                            y="'
                            )
                            .concat(
                                y + (1 - size) / 2,
                                '"\n                        />'
                            )
                    );
                else if (type === 1)
                    pointList.push(
                        '<circle\n                            opacity="'
                            .concat(
                                opacity,
                                '"\n                            r="'
                            )
                            .concat(
                                size / 2,
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                otherColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(y + 0.5, '"\n                        />')
                    );
                else if (type === 2)
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            opacity="'
                            )
                            .concat(
                                opacity,
                                '"\n                            fill="'
                            )
                            .concat(
                                otherColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="'
                            )
                            .concat(size / 2, '"\n                        />')
                    );
            } else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                if (posType === 0) {
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                1,
                                '"\n                            height="',
                                1,
                                '"\n                            key="',
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            x="'
                            )
                            .concat(x, '"\n                            y="')
                            .concat(y, '"\n                        />')
                    );
                } else if (posType === 1) {
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="',
                                1.5,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="none"\n                            stroke-width="1"\n                            stroke="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="',
                                3,
                                '"\n                        />'
                            )
                    );
                } else if (posType === 2) {
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="',
                                1.5,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="none"\n                            stroke-width="0.15"\n                            stroke-dasharray="0.5,0.5"\n                            stroke="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="',
                                3,
                                '"\n                        />'
                            )
                    );

                    for (var w = 0; w < vw.length; w++) {
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + vw[w] + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                                r="',
                                    0.5,
                                    '"\n                            />'
                                )
                        );
                    }

                    for (var h = 0; h < vh.length; h++) {
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + vh[h] + 0.5,
                                    '"\n                                r="',
                                    0.5,
                                    '"\n                            />'
                                )
                        );
                    }
                } else if (posType === 3) {
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="',
                                1.5,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<path\n                            key="'
                            .concat(id++, '"\n                            d="')
                            .concat(
                                sq25,
                                '"\n                            stroke="'
                            )
                            .concat(
                                posColor,
                                '"\n                            stroke-width="'
                            )
                            .concat(
                                (100 / 6) * (1 - (1 - size) * 0.75),
                                '"\n                            fill="none"\n                            transform="'
                            )
                            .concat(
                                'translate(' +
                                    String(x - 2.5) +
                                    ',' +
                                    String(y - 2.5) +
                                    ') ' +
                                    'scale(' +
                                    String(6 / 100) +
                                    ',' +
                                    String(6 / 100) +
                                    ')',
                                '"\n                        />'
                            )
                    );
                }
            } else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                if (posType === 0) {
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                1,
                                '"\n                            height="',
                                1,
                                '"\n                            key="',
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            x="'
                            )
                            .concat(x, '"\n                            y="')
                            .concat(y, '"\n                        />')
                    );
                }
            } else {
                if (type === 0)
                    pointList.push(
                        '<rect\n                            opacity="'
                            .concat(
                                opacity,
                                '"\n                            width="'
                            )
                            .concat(
                                size,
                                '"\n                            height="'
                            )
                            .concat(
                                size,
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                otherColor,
                                '"\n                            x="'
                            )
                            .concat(
                                x + (1 - size) / 2,
                                '"\n                            y="'
                            )
                            .concat(
                                y + (1 - size) / 2,
                                '"\n                        />'
                            )
                    );
                else if (type === 1)
                    pointList.push(
                        '<circle\n                            opacity="'
                            .concat(
                                opacity,
                                '"\n                            r="'
                            )
                            .concat(
                                size / 2,
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                otherColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(y + 0.5, '"\n                        />')
                    );
                else if (type === 2)
                    pointList.push(
                        '<circle\n                            opacity="'
                            .concat(
                                opacity,
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                otherColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="'
                            )
                            .concat(
                                0.5 * rand(0.33, 1.0),
                                '"\n                        />'
                            )
                    );
            }
        }
    }

    return pointList;
}

var schemaBase = object().shape({
    // 信息点样式 ['矩形', '圆形', '随机']
    type: mixed().oneOf([0, 1, 2])['default'](0),
    // 信息点缩放
    size: number()['default'](100),
    // 信息点不透明度
    opacity: number()['default'](100),
    // 定位点样式['矩形', '圆形', '行星','圆角矩形']
    posType: mixed().oneOf([0, 1, 2, 3])['default'](0),
    // 信息点颜色
    otherColor: string()['default']('#000000'),
    // 定位点点颜色
    posColor: string()['default']('#000000'),
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

var rendererBase = function rendererBase(qrcode, options) {
    try {
        options = schemaBase.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    var params = [
        'type',
        'size',
        'opacity',
        'posType',
        'otherColor',
        'posColor',
    ].map(function (k) {
        return options[k];
    });
    var svg = createRenderer({
        listPoints: listPoints,
    })({
        qrcode: qrcode,
        params: params,
    });
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

var rendererRect = function rendererRect(qrcode) {
    var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options = _objectSpread2(
        _objectSpread2(
            {},
            {
                type: 0,
                size: 100,
                opacity: 100,
                posType: 0,
            }
        ),
        options
    );
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

var rendererRound = function rendererRound(qrcode) {
    var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options = _objectSpread2(
        _objectSpread2(
            {},
            {
                type: 1,
                size: 50,
                opacity: 30,
                posType: 1,
            }
        ),
        options
    );
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

var rendererRandRound = function rendererRandRound(qrcode) {
    var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options = _objectSpread2(
        _objectSpread2(
            {},
            {
                type: 2,
                size: 80,
                opacity: 100,
                posType: 2,
            }
        ),
        options
    );
    return rendererBase(qrcode, options);
};

function listPoints$1(qrcode, params) {
    if (!qrcode) return [];
    var nCount = qrcode.getModuleCount();
    var typeTable = getTypeTable(qrcode);
    var pointList = [];
    var g1 = [];
    var g2 = [];
    var width2 = params[0] / 100;
    var width1 = params[1] / 100;
    var width3 = params[2] / 100;
    var posType = params[3];
    var id = 0;
    if (width2 <= 0) width2 = 70;
    if (width1 <= 0) width1 = 70;
    var available = [];
    var ava2 = [];

    for (var x = 0; x < nCount; x++) {
        available[x] = [];
        ava2[x] = [];

        for (var y = 0; y < nCount; y++) {
            available[x][y] = true;
            ava2[x][y] = true;
        }
    }

    for (var _y = 0; _y < nCount; _y++) {
        for (var _x = 0; _x < nCount; _x++) {
            if (qrcode.isDark(_x, _y) === false) continue;
            else if (typeTable[_x][_y] === QRPointType.POS_CENTER) {
                if (posType === 0) {
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                1,
                                '"\n                            height="',
                                1,
                                '"\n                            key="',
                                id++,
                                '"\n                            fill="#0B2D97"\n                            x="'
                            )
                            .concat(_x, '"\n                            y="')
                            .concat(_y, '"\n                        />')
                    );
                } else if (posType === 1) {
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                3 - (1 - width3),
                                '"\n                            height="'
                            )
                            .concat(
                                3 - (1 - width3),
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="#0B2D97"\n                            x="'
                            )
                            .concat(
                                _x - 1 + (1 - width3) / 2,
                                '"\n                            y="'
                            )
                            .concat(
                                _y - 1 + (1 - width3) / 2,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                width3,
                                '"\n                            height="'
                            )
                            .concat(
                                3 - (1 - width3),
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="#0B2D97"\n                            x="'
                            )
                            .concat(
                                _x - 3 + (1 - width3) / 2,
                                '"\n                            y="'
                            )
                            .concat(
                                _y - 1 + (1 - width3) / 2,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                width3,
                                '"\n                            height="'
                            )
                            .concat(
                                3 - (1 - width3),
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="#0B2D97"\n                            x="'
                            )
                            .concat(
                                _x + 3 + (1 - width3) / 2,
                                '"\n                            y="'
                            )
                            .concat(
                                _y - 1 + (1 - width3) / 2,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                3 - (1 - width3),
                                '"\n                            height="'
                            )
                            .concat(
                                width3,
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="#0B2D97"\n                            x="'
                            )
                            .concat(
                                _x - 1 + (1 - width3) / 2,
                                '"\n                            y="'
                            )
                            .concat(
                                _y - 3 + (1 - width3) / 2,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                3 - (1 - width3),
                                '"\n                            height="'
                            )
                            .concat(
                                width3,
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="#0B2D97"\n                            x="'
                            )
                            .concat(
                                _x - 1 + (1 - width3) / 2,
                                '"\n                            y="'
                            )
                            .concat(
                                _y + 3 + (1 - width3) / 2,
                                '"\n                        />'
                            )
                    );
                }
            } else if (typeTable[_x][_y] === QRPointType.POS_OTHER) {
                if (posType === 0) {
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                1,
                                '"\n                            height="',
                                1,
                                '"\n                            key="',
                                id++,
                                '"\n                            fill="#0B2D97"\n                            x="'
                            )
                            .concat(_x, '"\n                            y="')
                            .concat(_y, '"\n                        />')
                    );
                }
            } else {
                if (
                    available[_x][_y] &&
                    ava2[_x][_y] &&
                    _x < nCount - 2 &&
                    _y < nCount - 2
                ) {
                    var ctn = true;

                    for (var i = 0; i < 3; i++) {
                        for (var j = 0; j < 3; j++) {
                            if (ava2[_x + i][_y + j] === false) {
                                ctn = false;
                            }
                        }
                    }

                    if (
                        ctn &&
                        qrcode.isDark(_x + 2, _y) &&
                        qrcode.isDark(_x + 1, _y + 1) &&
                        qrcode.isDark(_x, _y + 2) &&
                        qrcode.isDark(_x + 2, _y + 2)
                    ) {
                        g1.push(
                            '<line\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                x1="'
                                )
                                .concat(
                                    _x + width1 / Math.sqrt(8),
                                    '"\n                                y1="'
                                )
                                .concat(
                                    _y + width1 / Math.sqrt(8),
                                    '"\n                                x2="'
                                )
                                .concat(
                                    _x + 3 - width1 / Math.sqrt(8),
                                    '"\n                                y2="'
                                )
                                .concat(
                                    _y + 3 - width1 / Math.sqrt(8),
                                    '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                )
                                .concat(
                                    width1,
                                    '"\n                            />'
                                )
                        );
                        g1.push(
                            '<line\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                x1="'
                                )
                                .concat(
                                    _x + 3 - width1 / Math.sqrt(8),
                                    '"\n                                y1="'
                                )
                                .concat(
                                    _y + width1 / Math.sqrt(8),
                                    '"\n                                x2="'
                                )
                                .concat(
                                    _x + width1 / Math.sqrt(8),
                                    '"\n                                y2="'
                                )
                                .concat(
                                    _y + 3 - width1 / Math.sqrt(8),
                                    '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                )
                                .concat(
                                    width1,
                                    '"\n                            />'
                                )
                        );
                        available[_x][_y] = false;
                        available[_x + 2][_y] = false;
                        available[_x][_y + 2] = false;
                        available[_x + 2][_y + 2] = false;
                        available[_x + 1][_y + 1] = false;

                        for (var _i = 0; _i < 3; _i++) {
                            for (var _j = 0; _j < 3; _j++) {
                                ava2[_x + _i][_y + _j] = false;
                            }
                        }
                    }
                }

                if (
                    available[_x][_y] &&
                    ava2[_x][_y] &&
                    _x < nCount - 1 &&
                    _y < nCount - 1
                ) {
                    var _ctn = true;

                    for (var _i2 = 0; _i2 < 2; _i2++) {
                        for (var _j2 = 0; _j2 < 2; _j2++) {
                            if (ava2[_x + _i2][_y + _j2] === false) {
                                _ctn = false;
                            }
                        }
                    }

                    if (
                        _ctn &&
                        qrcode.isDark(_x + 1, _y) &&
                        qrcode.isDark(_x, _y + 1) &&
                        qrcode.isDark(_x + 1, _y + 1)
                    ) {
                        g1.push(
                            '<line\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                x1="'
                                )
                                .concat(
                                    _x + width1 / Math.sqrt(8),
                                    '"\n                                y1="'
                                )
                                .concat(
                                    _y + width1 / Math.sqrt(8),
                                    '"\n                                x2="'
                                )
                                .concat(
                                    _x + 2 - width1 / Math.sqrt(8),
                                    '"\n                                y2="'
                                )
                                .concat(
                                    _y + 2 - width1 / Math.sqrt(8),
                                    '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                )
                                .concat(
                                    width1,
                                    '"\n                            />'
                                )
                        );
                        g1.push(
                            '<line\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                x1="'
                                )
                                .concat(
                                    _x + 2 - width1 / Math.sqrt(8),
                                    '"\n                                y1="'
                                )
                                .concat(
                                    _y + width1 / Math.sqrt(8),
                                    '"\n                                x2="'
                                )
                                .concat(
                                    _x + width1 / Math.sqrt(8),
                                    '"\n                                y2="'
                                )
                                .concat(
                                    _y + 2 - width1 / Math.sqrt(8),
                                    '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                )
                                .concat(
                                    width1,
                                    '"\n                            />'
                                )
                        );

                        for (var _i3 = 0; _i3 < 2; _i3++) {
                            for (var _j3 = 0; _j3 < 2; _j3++) {
                                available[_x + _i3][_y + _j3] = false;
                                ava2[_x + _i3][_y + _j3] = false;
                            }
                        }
                    }
                }

                if (available[_x][_y] && ava2[_x][_y]) {
                    if (
                        _y === 0 ||
                        (_y > 0 &&
                            (!qrcode.isDark(_x, _y - 1) || !ava2[_x][_y - 1]))
                    ) {
                        var start = _y;
                        var end = _y;
                        var _ctn2 = true;

                        while (_ctn2 && end < nCount) {
                            if (qrcode.isDark(_x, end) && ava2[_x][end]) {
                                end++;
                            } else {
                                _ctn2 = false;
                            }
                        }

                        if (end - start > 2) {
                            for (var _i4 = start; _i4 < end; _i4++) {
                                ava2[_x][_i4] = false;
                                available[_x][_i4] = false;
                            }

                            g2.push(
                                '<rect\n                                    width="'
                                    .concat(
                                        width2,
                                        '"\n                                    height="'
                                    )
                                    .concat(
                                        end - start - 1 - (1 - width2),
                                        '"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                    fill="#E02020"\n                                    x="'
                                    )
                                    .concat(
                                        _x + (1 - width2) / 2,
                                        '"\n                                    y="'
                                    )
                                    .concat(
                                        _y + (1 - width2) / 2,
                                        '"\n                                />'
                                    )
                            );
                            g2.push(
                                '<rect\n                                    width="'
                                    .concat(
                                        width2,
                                        '"\n                                    height="'
                                    )
                                    .concat(
                                        width2,
                                        '"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                    fill="#E02020"\n                                    x="'
                                    )
                                    .concat(
                                        _x + (1 - width2) / 2,
                                        '"\n                                    y="'
                                    )
                                    .concat(
                                        end - 1 + (1 - width2) / 2,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }
                }

                if (available[_x][_y] && ava2[_x][_y]) {
                    if (
                        _x === 0 ||
                        (_x > 0 &&
                            (!qrcode.isDark(_x - 1, _y) || !ava2[_x - 1][_y]))
                    ) {
                        var _start = _x;
                        var _end = _x;
                        var _ctn3 = true;

                        while (_ctn3 && _end < nCount) {
                            if (qrcode.isDark(_end, _y) && ava2[_end][_y]) {
                                _end++;
                            } else {
                                _ctn3 = false;
                            }
                        }

                        if (_end - _start > 1) {
                            for (var _i5 = _start; _i5 < _end; _i5++) {
                                ava2[_i5][_y] = false;
                                available[_i5][_y] = false;
                            }

                            g2.push(
                                '<rect\n                                    width="'
                                    .concat(
                                        _end - _start - (1 - width2),
                                        '"\n                                    height="'
                                    )
                                    .concat(
                                        width2,
                                        '"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                    fill="#F6B506"\n                                    x="'
                                    )
                                    .concat(
                                        _x + (1 - width2) / 2,
                                        '"\n                                    y="'
                                    )
                                    .concat(
                                        _y + (1 - width2) / 2,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }
                }

                if (available[_x][_y]) {
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                width2,
                                '"\n                            height="'
                            )
                            .concat(
                                width2,
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="#F6B506"\n                            x="'
                            )
                            .concat(
                                _x + (1 - width2) / 2,
                                '"\n                            y="'
                            )
                            .concat(
                                _y + (1 - width2) / 2,
                                '"\n                        />'
                            )
                    );
                }
            }
        }
    }

    for (var _i6 = 0; _i6 < g1.length; _i6++) {
        pointList.push(g1[_i6]);
    }

    for (var _i7 = 0; _i7 < g2.length; _i7++) {
        pointList.push(g2[_i7]);
    }

    return pointList;
}

var schemaDSJ = object().shape({
    // 信息点缩放
    width2: number()['default'](70),
    // x 宽度
    width1: number()['default'](70),
    // 定位点宽度
    width3: number()['default'](90),
    // 定位点样式 ['矩形', 'DSJ'],
    posType: mixed().oneOf([0, 1])['default'](1),
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

var RenderDSJ = function RenderDSJ(qrcode, options) {
    try {
        options = schemaDSJ.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    var params = ['width2', 'width1', 'width3', 'posType'].map(function (k) {
        return options[k];
    });
    var svg = createRenderer({
        listPoints: listPoints$1,
    })({
        qrcode: qrcode,
        params: params,
    });
    return svg;
};

function listPoints$2(qrcode, params) {
    if (!qrcode) return [];
    var nCount = qrcode.getModuleCount();
    var pointList = [];
    var id = 0;
    var randArr = [];

    for (var row = 0; row < nCount; row++) {
        for (var col = 0; col < nCount; col++) {
            randArr.push([row, col]);
        }
    }

    randArr.sort(function () {
        return 0.5 - Math.random();
    });

    for (var i = 0; i < randArr.length; i++) {
        var _row = randArr[i][0];
        var _col = randArr[i][1];

        if (qrcode.isDark(_row, _col)) {
            var tempRand = rand(0.8, 1.3);
            var randNum = rand(50, 230);
            var tempRGB = [
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
            var width = 0.15;
            pointList.push(
                '<rect\n                    key="'
                    .concat(
                        id++,
                        '"\n                    opacity="0.9"\n                    fill="'
                    )
                    .concat(tempRGB[1], '"\n                    width="')
                    .concat(
                        1 * tempRand + width,
                        '"\n                    height="'
                    )
                    .concat(1 * tempRand + width, '"\n                    x="')
                    .concat(
                        _row - (tempRand - 1) / 2,
                        '"\n                    y="'
                    )
                    .concat(_col - (tempRand - 1) / 2, '"\n                />')
            );
            pointList.push(
                '<rect\n                    key="'
                    .concat(id++, '"\n                    fill="')
                    .concat(tempRGB[0], '"\n                    width="')
                    .concat(1 * tempRand, '"\n                    height="')
                    .concat(1 * tempRand, '"\n                    x="')
                    .concat(
                        _row - (tempRand - 1) / 2,
                        '"\n                    y="'
                    )
                    .concat(_col - (tempRand - 1) / 2, '"\n                />')
            );
        }
    }

    return pointList;
}

/**
 *
 * @param {*} qrcode
 */

var RendererRandRect = function RendererRandRect(qrcode) {
    var svg = createRenderer({
        listPoints: listPoints$2,
    })({
        qrcode: qrcode,
    });
    return svg;
};

function listPoints$3(qrcode, params) {
    if (!qrcode) return [];
    var nCount = qrcode.getModuleCount();
    var typeTable = getTypeTable(qrcode);
    var pointList = new Array(nCount);
    var size = 1.001;
    var size2 = 1.001;
    var height = params[0];
    var height2 = params[1];
    var upColor = params[2];
    var leftColor = params[3];
    var rightColor = params[4];
    var id = 0;
    var X = [-Math.sqrt(3) / 2, 1 / 2];
    var Y = [Math.sqrt(3) / 2, 1 / 2];
    var Z = [0, 0];
    var matrixString =
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

    for (var x = 0; x < nCount; x++) {
        for (var y = 0; y < nCount; y++) {
            if (qrcode.isDark(x, y) === false) continue;
            else if (
                typeTable[x][y] === QRPointType.POS_OTHER ||
                typeTable[x][y] === QRPointType.POS_CENTER
            ) {
                pointList.push(
                    '<rect\n                        width="'
                        .concat(size2, '"\n                        height="')
                        .concat(size2, '"\n                        key="')
                        .concat(id++, '"\n                        fill="')
                        .concat(upColor, '"\n                        x="')
                        .concat(
                            x + (1 - size2) / 2,
                            '"\n                        y="'
                        )
                        .concat(
                            y + (1 - size2) / 2,
                            '"\n                        transform="'
                        )
                        .concat(matrixString, '"\n                    />')
                );
                pointList.push(
                    '<rect\n                        width="'
                        .concat(height2, '"\n                        height="')
                        .concat(size2, '"\n                        key="')
                        .concat(id++, '"\n                        fill="')
                        .concat(
                            leftColor,
                            '"\n                        x="',
                            0,
                            '"\n                        y="',
                            0,
                            '"\n                        transform="'
                        )
                        .concat(
                            matrixString +
                                'translate(' +
                                String(x + (1 - size2) / 2 + size2) +
                                ',' +
                                String(y + (1 - size2) / 2) +
                                ') ' +
                                'skewY(45) ',
                            '"\n                    />'
                        )
                );
                pointList.push(
                    '<rect\n                        width="'
                        .concat(size2, '"\n                        height="')
                        .concat(height2, '"\n                        key="')
                        .concat(id++, '"\n                        fill="')
                        .concat(
                            rightColor,
                            '"\n                        x="',
                            0,
                            '"\n                        y="',
                            0,
                            '"\n                        transform="'
                        )
                        .concat(
                            matrixString +
                                'translate(' +
                                String(x + (1 - size2) / 2) +
                                ',' +
                                String(y + size2 + (1 - size2) / 2) +
                                ') ' +
                                'skewX(45) ',
                            '"\n                    />'
                        )
                );
            } else {
                pointList.push(
                    '<rect\n                        width="'
                        .concat(size, '"\n                        height="')
                        .concat(size, '"\n                        key="')
                        .concat(id++, '"\n                        fill="')
                        .concat(upColor, '"\n                        x="')
                        .concat(
                            x + (1 - size) / 2,
                            '"\n                        y="'
                        )
                        .concat(
                            y + (1 - size) / 2,
                            '"\n                        transform="'
                        )
                        .concat(matrixString, '"\n                    />')
                );
                pointList.push(
                    '<rect\n                        width="'
                        .concat(height, '"\n                        height="')
                        .concat(size, '"\n                        key="')
                        .concat(id++, '"\n                        fill="')
                        .concat(
                            leftColor,
                            '"\n                        x="',
                            0,
                            '"\n                        y="',
                            0,
                            '"\n                        transform="'
                        )
                        .concat(
                            matrixString +
                                'translate(' +
                                String(x + (1 - size) / 2 + size) +
                                ',' +
                                String(y + (1 - size) / 2) +
                                ') ' +
                                'skewY(45) ',
                            '"\n                    />'
                        )
                );
                pointList.push(
                    '<rect\n                        width="'
                        .concat(size, '"\n                        height="')
                        .concat(height, '"\n                        key="')
                        .concat(id++, '"\n                        fill="')
                        .concat(
                            rightColor,
                            '"\n                        x="',
                            0,
                            '"\n                        y="',
                            0,
                            '"\n                        transform="'
                        )
                        .concat(
                            matrixString +
                                'translate(' +
                                String(x + (1 - size) / 2) +
                                ',' +
                                String(y + size + (1 - size) / 2) +
                                ') ' +
                                'skewX(45) ',
                            '"\n                    />'
                        )
                );
            }
        }
    }

    return pointList;
}

function viewBox(qrcode) {
    if (!qrcode) return '0 0 0 0';
    var nCount = qrcode.getModuleCount();
    return qrcode.$options.isSpace
        ? ''
              .concat(-nCount, ' ')
              .concat(-nCount / 2, ' ')
              .concat(nCount * 2, ' ')
              .concat(nCount * 2)
        : ''
              .concat(-nCount + 3, ' ')
              .concat(-nCount / 2, ' ')
              .concat(nCount * 2 - 6, ' ')
              .concat(nCount * 2 - 6);
}

var schema25D = object().shape({
    // 柱体高度
    height: number()['default'](0.5),
    // 定位点柱体高度
    height2: number()['default'](0.5),
    // 上侧颜色
    upColor: string()['default']('#FF7F89'),
    // 左侧颜色
    leftColor: string()['default']('#FFD7D9'),
    // 右侧颜色
    rightColor: string()['default']('#FFEBF3'),
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

var Renderer25D = function Renderer25D(qrcode, options) {
    try {
        options = schema25D.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    var params = [
        'height',
        'height2',
        'upColor',
        'leftColor',
        'rightColor',
    ].map(function (k) {
        return options[k];
    });
    var svg = createRenderer({
        listPoints: listPoints$3,
        getViewBox: viewBox,
    })({
        qrcode: qrcode,
        params: params,
    });
    return svg;
};

function listPoints$4(qrcode, params) {
    if (!qrcode) return [];
    var nCount = qrcode.getModuleCount();
    var typeTable = getTypeTable(qrcode);
    var pointList = new Array(nCount);
    var type = params[1];
    var size = params[2] / 100 / 3;
    var opacity = params[3] / 100;
    var otherColorDark = params[4];
    var otherColorLight = params[5];
    var posType = params[6];
    var posColor = params[7];
    var id = 0;
    var vw = [3, -3];
    var vh = [3, -3];
    if (size <= 0) size = 1.0;
    pointList.push(
        '<image\n            key="'
            .concat(
                id++,
                '"\n            x="0"\n            y="0"\n            width="'
            )
            .concat(nCount, '"\n            height="')
            .concat(nCount, '"\n            xlink:href="')
            .concat(params[0], '"\n        />')
    );

    for (var x = 0; x < nCount; x++) {
        for (var y = 0; y < nCount; y++) {
            if (
                typeTable[x][y] === QRPointType.ALIGN_CENTER ||
                typeTable[x][y] === QRPointType.ALIGN_OTHER ||
                typeTable[x][y] === QRPointType.TIMING
            ) {
                if (qrcode.isDark(x, y)) {
                    if (type === 0)
                        pointList.push(
                            '<rect\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                width="'
                                )
                                .concat(
                                    size,
                                    '"\n                                height="'
                                )
                                .concat(
                                    size,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColorDark,
                                    '"\n                                x="'
                                )
                                .concat(
                                    x + (1 - size) / 2,
                                    '"\n                                y="'
                                )
                                .concat(
                                    y + (1 - size) / 2,
                                    '"\n                            />'
                                )
                        );
                    else if (type === 1)
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColorDark,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            />'
                                )
                        );
                } else {
                    if (type === 0)
                        pointList.push(
                            '<rect\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                width="'
                                )
                                .concat(
                                    size,
                                    '"\n                                height="'
                                )
                                .concat(
                                    size,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColorLight,
                                    '"\n                                x="'
                                )
                                .concat(
                                    x + (1 - size) / 2,
                                    '"\n                                y="'
                                )
                                .concat(
                                    y + (1 - size) / 2,
                                    '"\n                            />'
                                )
                        );
                    else if (type === 1)
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColorLight,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            />'
                                )
                        );
                }
            } else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                if (qrcode.isDark(x, y)) {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                                width="'
                                .concat(
                                    1,
                                    '"\n                                height="',
                                    1,
                                    '"\n                                key="',
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                x="'
                                )
                                .concat(
                                    x,
                                    '"\n                                y="'
                                )
                                .concat(y, '"\n                            />')
                        );
                    } else if (posType === 1) {
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="white"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                                r="',
                                    5,
                                    '"\n                            />'
                                )
                        );
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                                r="',
                                    1.5,
                                    '"\n                            />'
                                )
                        );
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="none"\n                                stroke-width="1"\n                                stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                                r="',
                                    3,
                                    '"\n                            />'
                                )
                        );
                    } else if (posType === 2) {
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="white"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                                r="',
                                    5,
                                    '"\n                            />'
                                )
                        );
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                                r="',
                                    1.5,
                                    '"\n                            />'
                                )
                        );
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="none"\n                                stroke-width="0.15"\n                                stroke-dasharray="0.5,0.5"\n                                stroke="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                                r="',
                                    3,
                                    '"\n                            />'
                                )
                        );

                        for (var w = 0; w < vw.length; w++) {
                            pointList.push(
                                '<circle\n                                    key="'
                                    .concat(
                                        id++,
                                        '"\n                                    fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                    cx="'
                                    )
                                    .concat(
                                        x + vw[w] + 0.5,
                                        '"\n                                    cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                    r="',
                                        0.5,
                                        '"\n                                />'
                                    )
                            );
                        }

                        for (var h = 0; h < vh.length; h++) {
                            pointList.push(
                                '<circle\n                                    key="'
                                    .concat(
                                        id++,
                                        '"\n                                    fill="'
                                    )
                                    .concat(
                                        posColor,
                                        '"\n                                    cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                    cy="'
                                    )
                                    .concat(
                                        y + vh[h] + 0.5,
                                        '"\n                                    r="',
                                        0.5,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }
                }
            } else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                if (qrcode.isDark(x, y)) {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                                width="'
                                .concat(
                                    1,
                                    '"\n                                height="',
                                    1,
                                    '"\n                                key="',
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                x="'
                                )
                                .concat(
                                    x,
                                    '"\n                                y="'
                                )
                                .concat(y, '"\n                            />')
                        );
                    }
                } else {
                    if (posType === 0) {
                        pointList.push(
                            '<rect\n                                width="'
                                .concat(
                                    1,
                                    '"\n                                height="',
                                    1,
                                    '"\n                                key="',
                                    id++,
                                    '"\n                                fill="white"\n                                x="'
                                )
                                .concat(
                                    x,
                                    '"\n                                y="'
                                )
                                .concat(y, '"\n                            />')
                        );
                    }
                }
            } else {
                if (qrcode.isDark(x, y)) {
                    if (type === 0)
                        pointList.push(
                            '<rect\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                width="'
                                )
                                .concat(
                                    size,
                                    '"\n                                height="'
                                )
                                .concat(
                                    size,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColorDark,
                                    '"\n                                x="'
                                )
                                .concat(
                                    x + (1 - size) / 2,
                                    '"\n                                y="'
                                )
                                .concat(
                                    y + (1 - size) / 2,
                                    '"\n                            />'
                                )
                        );
                    else if (type === 1)
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColorDark,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            />'
                                )
                        );
                } else {
                    if (type === 0)
                        pointList.push(
                            '<rect\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                width="'
                                )
                                .concat(
                                    size,
                                    '"\n                                height="'
                                )
                                .concat(
                                    size,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColorLight,
                                    '"\n                                x="'
                                )
                                .concat(
                                    x + (1 - size) / 2,
                                    '"\n                                y="'
                                )
                                .concat(
                                    y + (1 - size) / 2,
                                    '"\n                            />'
                                )
                        );
                    else if (type === 1)
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColorLight,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            />'
                                )
                        );
                }
            }
        }
    }

    return pointList;
}

var schemaImage = object().shape({
    // 背景图片
    backgroudImage: string(),
    // 信息点样式 ['矩形', '圆形'],
    type: mixed().oneOf([0, 1])['default'](0),
    // 信息点缩放
    size: number()['default'](100),
    // 信息点不透明度
    opacity: number()['default'](100),
    // 信息点深色
    otherColorDark: string()['default']('#000000'),
    // 信息点浅色
    otherColorLight: string()['default']('#FFFFFF'),
    // 定位点样式 ['矩形', '圆形', '行星']
    posType: mixed().oneOf([0, 1, 2])['default'](0),
    // 定位点颜色
    posColor: string()['default']('#000000'),
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

var RendererImage = function RendererImage(qrcode) {
    var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    try {
        options = schemaImage.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    var params = [
        'backgroudImage',
        'type',
        'size',
        'opacity',
        'otherColorDark',
        'otherColorLight',
        'posType',
        'posColor',
    ].map(function (k) {
        return options[k];
    });
    var svg = createRenderer({
        listPoints: listPoints$4,
    })({
        qrcode: qrcode,
        params: params,
    });
    return svg;
};

function listPoints$5(qrcode, params) {
    if (!qrcode) return [];
    var nCount = qrcode.getModuleCount();
    var typeTable = getTypeTable(qrcode);
    var pointList = new Array(nCount);
    var alignType = params[3];
    var timingType = params[4];
    var posColor = params[6];
    var id = 0;

    for (var x = 0; x < nCount; x++) {
        for (var y = 0; y < nCount; y++) {
            var posX = 3 * x;
            var posY = 3 * y;

            if (
                typeTable[x][y] === QRPointType.ALIGN_CENTER ||
                typeTable[x][y] === QRPointType.ALIGN_OTHER
            ) {
                if (qrcode.isDark(x, y)) {
                    if (alignType === 2) {
                        pointList.push(
                            '<use\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                xlink:href="#B-black"\n                                x="'
                                )
                                .concat(
                                    posX - 0.03,
                                    '"\n                                y="'
                                )
                                .concat(
                                    posY - 0.03,
                                    '"\n                            />'
                                )
                        );
                    } else {
                        pointList.push(
                            '<use\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                xlink:href="#S-black"\n                                x="'
                                )
                                .concat(
                                    posX + 1 - 0.01,
                                    '"\n                                y="'
                                )
                                .concat(
                                    posY + 1 - 0.01,
                                    '"\n                            />'
                                )
                        );
                    }
                } else {
                    if (alignType === 0) {
                        pointList.push(
                            '<use\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                xlink:href="#S-white"\n                                x="'
                                )
                                .concat(
                                    posX + 1,
                                    '"\n                                y=\''
                                )
                                .concat(
                                    posY + 1,
                                    "'\n                            />"
                                )
                        );
                    } else {
                        pointList.push(
                            '<use\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                xlink:href="#B-white"\n                                x="'
                                )
                                .concat(
                                    posX - 0.03,
                                    '"\n                                y="'
                                )
                                .concat(
                                    posY - 0.03,
                                    '"\n                            />'
                                )
                        );
                    }
                }
            } else if (typeTable[x][y] === QRPointType.TIMING) {
                if (qrcode.isDark(x, y)) {
                    if (timingType === 2) {
                        pointList.push(
                            '<use\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                xlink:href="#B-black"\n                                x="'
                                )
                                .concat(
                                    posX - 0.03,
                                    '"\n                                y="'
                                )
                                .concat(
                                    posY - 0.03,
                                    '"\n                            />'
                                )
                        );
                    } else {
                        pointList.push(
                            '<use\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                xlink:href="#S-black"\n                                x="'
                                )
                                .concat(
                                    posX + 1,
                                    '"\n                                y="'
                                )
                                .concat(
                                    posY + 1,
                                    '"\n                            />'
                                )
                        );
                    }
                } else {
                    if (timingType === 0) {
                        pointList.push(
                            '<use\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                xlink:href="#S-white"\n                                x="'
                                )
                                .concat(
                                    posX + 1,
                                    '"\n                                y="'
                                )
                                .concat(
                                    posY + 1,
                                    '"\n                            />'
                                )
                        );
                    } else {
                        pointList.push(
                            '<use\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                xlink:href="#B-white"\n                                x="'
                                )
                                .concat(
                                    posX - 0.03,
                                    '"\n                                y="'
                                )
                                .concat(
                                    posY - 0.03,
                                    '"\n                            />'
                                )
                        );
                    }
                }
            } else if (typeTable[x][y] === QRPointType.POS_CENTER) {
                if (qrcode.isDark(x, y)) {
                    pointList.push(
                        '<use\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            xlink:href="#B"\n                            x="'
                            )
                            .concat(
                                posX - 0.03,
                                '"\n                            y="'
                            )
                            .concat(
                                posY - 0.03,
                                '"\n                        />'
                            )
                    );
                }
            } else if (typeTable[x][y] === QRPointType.POS_OTHER) {
                if (qrcode.isDark(x, y)) {
                    pointList.push(
                        '<use\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            xlink:href="#B"\n                            x="'
                            )
                            .concat(
                                posX - 0.03,
                                '"\n                            y="'
                            )
                            .concat(
                                posY - 0.03,
                                '"\n                        />'
                            )
                    );
                } else {
                    pointList.push(
                        '<use\n                            key="'
                            .concat(
                                id++,
                                '"\n                            xlink:href="#B-white"\n                            x="'
                            )
                            .concat(
                                posX - 0.03,
                                '"\n                            y="'
                            )
                            .concat(
                                posY - 0.03,
                                '"\n                        />'
                            )
                    );
                }
            } else {
                if (qrcode.isDark(x, y)) {
                    pointList.push(
                        '<use\n                            key="'
                            .concat(
                                id++,
                                '"\n                            xlink:href="#S-black"\n                            x="'
                            )
                            .concat(
                                posX + 1,
                                '"\n                            y="'
                            )
                            .concat(posY + 1, '"\n                        />')
                    );
                }
            }
        }
    }

    return pointList;
}

function getViewBox(qrcode) {
    if (!qrcode) return '0 0 0 0';
    var nCount = qrcode.getModuleCount() * 3;
    return qrcode.$options.isSpace
        ? ''
              .concat(-nCount / 5, ' ')
              .concat(-nCount / 5, ' ')
              .concat(nCount + (nCount / 5) * 2, ' ')
              .concat(nCount + (nCount / 5) * 2)
        : ''.concat(0, ' ', 0, ' ', nCount, ' ').concat(nCount);
}

function getGrayPointList(params, size, black, white) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var img = document.createElement('img');
    var gpl = [];
    canvas.style.imageRendering = 'pixelated';
    size *= 3;
    img.src = params[0];
    var contrast = params[1] / 100;
    var exposure = params[2] / 100;
    return new Promise(function (resolve) {
        img.onload = function () {
            canvas.width = size;
            canvas.height = size;
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(img, 0, 0, size, size);

            for (var x = 0; x < canvas.width; x++) {
                for (var y = 0; y < canvas.height; y++) {
                    var imageData = ctx.getImageData(x, y, 1, 1);
                    var data = imageData.data;
                    var gray = gamma(data[0], data[1], data[2]);
                    if (
                        Math.random() >
                            (gray / 255 + exposure - 0.5) * (contrast + 1) +
                                0.5 &&
                        (x % 3 !== 1 || y % 3 !== 1)
                    )
                        gpl.push(
                            '<use\n                                key="'
                                .concat(
                                    'g_' + x + '_' + y,
                                    '"\n                                x="'
                                )
                                .concat(
                                    x,
                                    '"\n                                y="'
                                )
                                .concat(
                                    y,
                                    '"\n                                xlink:href="'
                                )
                                .concat(
                                    black,
                                    '"\n                            />'
                                )
                        );
                }
            }

            resolve(gpl);
        };
    });
}

var RendererResImage = function RendererResImage(_ref) {
    var qrcode = _ref.qrcode,
        params = _ref.params;
    var otherColor = params[5];
    var _qrcode$$options = qrcode.$options,
        width = _qrcode$$options.width,
        height = _qrcode$$options.height;
    return new Promise(function (resolve, reject) {
        getGrayPointList(params, qrcode.getModuleCount(), '#S-black')
            .then(function (gpl) {
                var svg = '<svg\n            className="Qr-item-svg"\n            width="'
                    .concat(width, '"\n            height="')
                    .concat(height, '"\n            viewBox="')
                    .concat(
                        getViewBox(qrcode),
                        '"\n            fill="white"\n            xmlns="http://www.w3.org/2000/svg"\n            xmlns:xlink="http://www.w3.org/1999/xlink"\n        >\n            <defs>\n                <rect\n                    id="B-black"\n                    fill="'
                    )
                    .concat(
                        otherColor,
                        '"\n                    width="',
                        3.08,
                        '"\n                    height="',
                        3.08,
                        '"\n                />\n                <rect id="B-white" fill="white" width="',
                        3.08,
                        '" height="',
                        3.08,
                        '" />\n                <rect\n                    id="S-black"\n                    fill="'
                    )
                    .concat(
                        otherColor,
                        '"\n                    width="',
                        1.02,
                        '"\n                    height="',
                        1.02,
                        '"\n                />\n                <rect id="S-white" fill="white" width="',
                        1.02,
                        '" height="',
                        1.02,
                        '" />\n                <rect id="B" width="',
                        3.08,
                        '" height="',
                        3.08,
                        '" />\n                <rect id="S" width="',
                        1.02,
                        '" height="',
                        1.02,
                        '" />\n            </defs>\n            '
                    )
                    .concat(
                        gpl.concat(listPoints$5(qrcode, params)).join(''),
                        '\n        </svg>'
                    );
                resolve(svg);
            })
            ['catch'](function (err) {
                resolve(err);
            });
    });
};

var schemaResImage = object().shape({
    // 背景图片
    backgroudImage: string()['default'](),
    // 对比度
    contrast: number()['default'](0),
    // 曝光
    exposure: number()['default'](0),
    // 小定位点样式 ['无', '白', '黑白']
    alignType: mixed().oneOf([0, 1, 2])['default'](0),
    // 时钟样式 ['无', '白', '黑白']
    timingType: mixed().oneOf([0, 1, 2])['default'](0),
    // 信息点颜色
    otherColor: string()['default']('#000000'),
    // 定位点颜色
    posColor: string()['default']('#000000'),
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

var render = function render(qrcode) {
    var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    try {
        options = schemaResImage.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    var params = [
        'backgroudImage',
        'contrast',
        'exposure',
        'alignType',
        'timingType',
        'otherColor',
        'posColor',
    ].map(function (k) {
        return options[k];
    });
    return RendererResImage({
        qrcode: qrcode,
        params: params,
    });
};

function listPoints$6(qrcode, params) {
    if (!qrcode) return [];
    var nCount = qrcode.getModuleCount();
    var typeTable = getTypeTable(qrcode);
    var pointList = [];
    var g1 = [];
    var g2 = [];
    var id = 0; // const size = 0.8;
    // const vw = [3, -3];
    // const vh = [3, -3];
    // const sq25 =
    //     'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';

    var otherColor = params[0];
    var posColor = params[1];
    var available = [];
    var ava2 = [];

    for (var x = 0; x < nCount; x++) {
        available[x] = [];
        ava2[x] = [];

        for (var y = 0; y < nCount; y++) {
            available[x][y] = true;
            ava2[x][y] = true;
        }
    }

    for (var _y = 0; _y < nCount; _y++) {
        for (var _x = 0; _x < nCount; _x++) {
            if (
                qrcode.isDark(_x, _y) &&
                typeTable[_x][_y] === QRPointType.POS_CENTER
            ) {
                pointList.push(
                    '<circle\n                        key="'
                        .concat(id++, '"\n                        fill="')
                        .concat(posColor, '"\n                        cx="')
                        .concat(_x + 0.5, '"\n                        cy="')
                        .concat(
                            _y + 0.5,
                            '"\n                        r="',
                            1.5,
                            '"\n                    />'
                        )
                );
                pointList.push(
                    '<circle\n                        key="'
                        .concat(
                            id++,
                            '"\n                        fill="none"\n                        stroke-width="1"\n                        stroke="'
                        )
                        .concat(posColor, '"\n                        cx="')
                        .concat(_x + 0.5, '"\n                        cy="')
                        .concat(
                            _y + 0.5,
                            '"\n                        r="',
                            3,
                            '"\n                    />'
                        )
                );
            } else if (
                qrcode.isDark(_x, _y) &&
                typeTable[_x][_y] === QRPointType.POS_OTHER
            );
            else {
                if (
                    available[_x][_y] &&
                    ava2[_x][_y] &&
                    _x < nCount - 2 &&
                    _y < nCount - 2
                ) {
                    var ctn = true;

                    for (var i = 0; i < 3; i++) {
                        for (var j = 0; j < 3; j++) {
                            if (ava2[_x + i][_y + j] === false) {
                                ctn = false;
                            }
                        }
                    }

                    if (
                        ctn &&
                        qrcode.isDark(_x + 1, _y) &&
                        qrcode.isDark(_x + 1, _y + 2) &&
                        qrcode.isDark(_x, _y + 1) &&
                        qrcode.isDark(_x + 2, _y + 1)
                    ) {
                        g1.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 1 + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 1 + 0.5,
                                    '"\n                                r="',
                                    1,
                                    '"\n                                fill="#FFFFFF"\n                                stroke="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                stroke-width="'
                                )
                                .concat(
                                    rand(0.33, 0.6),
                                    '"\n                            />'
                                )
                        );

                        if (qrcode.isDark(_x + 1, _y + 1)) {
                            g1.push(
                                '<circle\n                                    r="'
                                    .concat(
                                        0.5 * rand(0.5, 1),
                                        '"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                    fill="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                    cx="'
                                    )
                                    .concat(
                                        _x + 1 + 0.5,
                                        '"\n                                    cy="'
                                    )
                                    .concat(
                                        _y + 1 + 0.5,
                                        '"\n                                />'
                                    )
                            );
                        }

                        available[_x + 1][_y] = false;
                        available[_x][_y + 1] = false;
                        available[_x + 2][_y + 1] = false;
                        available[_x + 1][_y + 2] = false;

                        for (var _i = 0; _i < 3; _i++) {
                            for (var _j = 0; _j < 3; _j++) {
                                ava2[_x + _i][_y + _j] = false;
                            }
                        }
                    }
                }

                if (_x < nCount - 1 && _y < nCount - 1) {
                    if (
                        qrcode.isDark(_x, _y) &&
                        qrcode.isDark(_x + 1, _y) &&
                        qrcode.isDark(_x, _y + 1) &&
                        qrcode.isDark(_x + 1, _y + 1)
                    ) {
                        g1.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 1,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 1,
                                    '"\n                                r="'
                                )
                                .concat(
                                    Math.sqrt(1 / 2),
                                    '"\n                                fill="#FFFFFF"\n                                stroke="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                stroke-width="'
                                )
                                .concat(
                                    rand(0.33, 0.6),
                                    '"\n                            />'
                                )
                        );

                        for (var _i2 = 0; _i2 < 2; _i2++) {
                            for (var _j2 = 0; _j2 < 2; _j2++) {
                                available[_x + _i2][_y + _j2] = false;
                                ava2[_x + _i2][_y + _j2] = false;
                            }
                        }
                    }
                }

                if (available[_x][_y] && _y < nCount - 1) {
                    if (qrcode.isDark(_x, _y) && qrcode.isDark(_x, _y + 1)) {
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 1,
                                    '"\n                                r="'
                                )
                                .concat(
                                    0.5 * rand(0.95, 1.05),
                                    '"\n                                fill="#FFFFFF"\n                                stroke="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                stroke-width="'
                                )
                                .concat(
                                    rand(0.36, 0.4),
                                    '"\n                            />'
                                )
                        );
                        available[_x][_y] = false;
                        available[_x][_y + 1] = false;
                    }
                }

                if (available[_x][_y] && _x < nCount - 1) {
                    if (qrcode.isDark(_x, _y) && qrcode.isDark(_x + 1, _y)) {
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 1,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                                r="'
                                )
                                .concat(
                                    0.5 * rand(0.95, 1.05),
                                    '"\n                                fill="#FFFFFF"\n                                stroke="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                stroke-width="'
                                )
                                .concat(
                                    rand(0.36, 0.4),
                                    '"\n                            />'
                                )
                        );
                        available[_x][_y] = false;
                        available[_x + 1][_y] = false;
                    }
                }

                if (available[_x][_y]) {
                    if (qrcode.isDark(_x, _y)) {
                        pointList.push(
                            '<circle\n                                r="'
                                .concat(
                                    0.5 * rand(0.5, 1),
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            />'
                                )
                        );
                    } else if (typeTable[_x][_y] === QRPointType.DATA) {
                        if (rand(0, 1) > 0.85) {
                            g2.push(
                                '<circle\n                                    r="'
                                    .concat(
                                        0.5 * rand(0.85, 1.3),
                                        '"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                    fill="#FFFFFF"\n                                    stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                    stroke-width="'
                                    )
                                    .concat(
                                        rand(0.15, 0.33),
                                        '"\n                                    cx="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    cy="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }
                }
            }
        }
    }

    for (var _i3 = 0; _i3 < g1.length; _i3++) {
        pointList.push(g1[_i3]);
    }

    for (var _i4 = 0; _i4 < g2.length; _i4++) {
        pointList.push(g2[_i4]);
    }

    return pointList;
}

var schemaBase$1 = object().shape({
    otherColor: string()['default']('#8ED1FC'),
    posColor: string()['default']('#0693E3'),
});
/**
 *
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.otherColor] 圆圈颜色
 * @param {String} [options.posColor] 定位点颜色
 */

var rendererCircle = function rendererCircle(qrcode, options) {
    try {
        options = schemaBase$1.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    var params = ['otherColor', 'posColor'].map(function (k) {
        return options[k];
    });
    var svg = createRenderer({
        listPoints: listPoints$6,
    })({
        qrcode: qrcode,
        params: params,
    });
    return svg;
};

function listPoints$7(qrcode, params) {
    if (!qrcode) return [];
    var nCount = qrcode.getModuleCount();
    var typeTable = getTypeTable(qrcode);
    var pointList = new Array(nCount);
    var type = params[0];
    var size = params[1] / 100;
    var funcType = params[1]; // const opacity = params[2] / 100;

    var posType = params[3];
    var id = 0;
    var otherColor = params[4];
    var otherColor2 = params[5];
    var posColor = params[6];
    var vw = [3, -3];
    var vh = [3, -3];
    var sq25 =
        'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';
    if (size <= 0) size = 1.0;

    if (funcType === 1 && type === 1) {
        pointList.push(
            '<circle\n                key="'
                .concat(
                    id++,
                    '"\n                fill="none"\n                stroke-width="'
                )
                .concat(nCount / 15, '"\n                stroke="')
                .concat(otherColor2, '"\n                cx="')
                .concat(nCount / 2, '"\n                cy="')
                .concat(nCount / 2, '"\n                r="')
                .concat(
                    ((nCount / 2) * Math.sqrt(2) * 13) / 40,
                    '"\n            />'
                )
        );
    }

    for (var x = 0; x < nCount; x++) {
        for (var y = 0; y < nCount; y++) {
            if (
                qrcode.isDark(x, y) &&
                typeTable[x][y] === QRPointType.POS_CENTER
            ) {
                if (posType === 0) {
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                1,
                                '"\n                            height="',
                                1,
                                '"\n                            key="',
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            x="'
                            )
                            .concat(x, '"\n                            y="')
                            .concat(y, '"\n                        />')
                    );
                } else if (posType === 1) {
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="',
                                1.5,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="none"\n                            stroke-width="1"\n                            stroke="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="',
                                3,
                                '"\n                        />'
                            )
                    );
                } else if (posType === 2) {
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="',
                                1.5,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="none"\n                            stroke-width="0.15"\n                            stroke-dasharray="0.5,0.5"\n                            stroke="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="',
                                3,
                                '"\n                        />'
                            )
                    );

                    for (var w = 0; w < vw.length; w++) {
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + vw[w] + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                                r="',
                                    0.5,
                                    '"\n                            />'
                                )
                        );
                    }

                    for (var h = 0; h < vh.length; h++) {
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + vh[h] + 0.5,
                                    '"\n                                r="',
                                    0.5,
                                    '"\n                            />'
                                )
                        );
                    }
                } else if (posType === 3) {
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                y + 0.5,
                                '"\n                            r="',
                                1.5,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<path\n                            key="'
                            .concat(id++, '"\n                            d="')
                            .concat(
                                sq25,
                                '"\n                            stroke="'
                            )
                            .concat(
                                posColor,
                                '"\n                            stroke-width="'
                            )
                            .concat(
                                (100 / 6) * (1 - (1 - 0.8) * 0.75),
                                '"\n                            fill="none"\n                            transform="'
                            )
                            .concat(
                                'translate(' +
                                    String(x - 2.5) +
                                    ',' +
                                    String(y - 2.5) +
                                    ') ' +
                                    'scale(' +
                                    String(6 / 100) +
                                    ',' +
                                    String(6 / 100) +
                                    ')',
                                '"\n                        />'
                            )
                    );
                }
            } else if (
                qrcode.isDark(x, y) &&
                typeTable[x][y] === QRPointType.POS_OTHER
            ) {
                if (posType === 0) {
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                1,
                                '"\n                            height="',
                                1,
                                '"\n                            key="',
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            x="'
                            )
                            .concat(x, '"\n                            y="')
                            .concat(y, '"\n                        />')
                    );
                }
            } else {
                var dist =
                    Math.sqrt(
                        Math.pow((nCount - 1) / 2 - x, 2) +
                            Math.pow((nCount - 1) / 2 - y, 2)
                    ) /
                    ((nCount / 2) * Math.sqrt(2));

                if (funcType === 0) {
                    var sizeF = (1 - Math.cos(Math.PI * dist)) / 6 + 1 / 5;
                    var colorF = otherColor;
                    var opacityF = Number(qrcode.isDark(x, y));

                    if (type === 0) {
                        sizeF = sizeF + 0.2;
                        pointList.push(
                            '<rect\n                                opacity="'
                                .concat(
                                    opacityF,
                                    '"\n                                width="'
                                )
                                .concat(
                                    sizeF,
                                    '"\n                                height="'
                                )
                                .concat(
                                    sizeF,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    colorF,
                                    '"\n                                x="'
                                )
                                .concat(
                                    x + (1 - sizeF) / 2,
                                    '"\n                                y="'
                                )
                                .concat(
                                    y + (1 - sizeF) / 2,
                                    '"\n                            />'
                                )
                        );
                    } else if (type === 1) {
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacityF,
                                    '"\n                                r="'
                                )
                                .concat(
                                    sizeF,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    colorF,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    y + 0.5,
                                    '"\n                            />'
                                )
                        );
                    }
                }

                if (funcType === 1) {
                    var _sizeF = 0;
                    var _colorF = otherColor; // const fillF = colorF;

                    var _opacityF = Number(qrcode.isDark(x, y));

                    if (dist > 5 / 20 && dist < 8 / 20) {
                        _sizeF = 5 / 10;
                        _colorF = otherColor2;
                        _opacityF = 1;
                    } else {
                        _sizeF = 1 / 4;

                        if (type === 0) {
                            _sizeF = 1 / 4 - 0.1;
                        }
                    }

                    if (type === 0) {
                        _sizeF = 2 * _sizeF + 0.1;

                        if (qrcode.isDark(x, y)) {
                            pointList.push(
                                '<rect\n                                    opacity="'
                                    .concat(
                                        _opacityF,
                                        '"\n                                    width="'
                                    )
                                    .concat(
                                        _sizeF,
                                        '"\n                                    height="'
                                    )
                                    .concat(
                                        _sizeF,
                                        '"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                    fill="'
                                    )
                                    .concat(
                                        _colorF,
                                        '"\n                                    x="'
                                    )
                                    .concat(
                                        x + (1 - _sizeF) / 2,
                                        '"\n                                    y="'
                                    )
                                    .concat(
                                        y + (1 - _sizeF) / 2,
                                        '"\n                                />'
                                    )
                            );
                        } else {
                            _sizeF = _sizeF - 0.1;
                            pointList.push(
                                '<rect\n                                    opacity="'
                                    .concat(
                                        _opacityF,
                                        '"\n                                    width="'
                                    )
                                    .concat(
                                        _sizeF,
                                        '"\n                                    height="'
                                    )
                                    .concat(
                                        _sizeF,
                                        '"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                    stroke="'
                                    )
                                    .concat(
                                        _colorF,
                                        '"\n                                    stroke-width="',
                                        0.1,
                                        '"\n                                    fill="#FFFFFF"\n                                    x="'
                                    )
                                    .concat(
                                        x + (1 - _sizeF) / 2,
                                        '"\n                                    y="'
                                    )
                                    .concat(
                                        y + (1 - _sizeF) / 2,
                                        '"\n                                />'
                                    )
                            );
                        }
                    } else if (type === 1) {
                        if (qrcode.isDark(x, y)) {
                            pointList.push(
                                '<circle\n                                    opacity="'
                                    .concat(
                                        _opacityF,
                                        '"\n                                    r="'
                                    )
                                    .concat(
                                        _sizeF,
                                        '"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                    fill="'
                                    )
                                    .concat(
                                        _colorF,
                                        '"\n                                    cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                    cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                />'
                                    )
                            );
                        } else {
                            pointList.push(
                                '<circle\n                                    opacity="'
                                    .concat(
                                        _opacityF,
                                        '"\n                                    r="'
                                    )
                                    .concat(
                                        _sizeF,
                                        '"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                    stroke="'
                                    )
                                    .concat(
                                        _colorF,
                                        '"\n                                    stroke-width="',
                                        0.1,
                                        '"\n                                    fill="#FFFFFF"\n                                    cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                                    cy="'
                                    )
                                    .concat(
                                        y + 0.5,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }
                }
            }
        }
    }

    return pointList;
}

var schemaFuncA = object().shape({
    type: mixed().oneOf([0, 1])['default'](1),
    size: mixed().oneOf([0, 1])['default'](0),
    opacity: number()['default'](100),
    posType: mixed().oneOf([0, 1, 2, 3])['default'](1),
    otherColor: string()['default']('#000000'),
    otherColor2: string()['default']('#000000'),
    posColor: string()['default']('#000000'),
});
var schemaFuncB = object().shape({
    type: mixed().oneOf([0, 1])['default'](1),
    size: mixed().oneOf([0, 1])['default'](1),
    opacity: number()['default'](100),
    posType: mixed().oneOf([0, 1, 2, 3])['default'](1),
    otherColor: string()['default']('#ABB8C3'),
    otherColor2: string()['default']('#000000'),
    posColor: string()['default']('#000000'),
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

var rendererFuncA = function rendererFuncA(qrcode, options) {
    try {
        options = schemaFuncA.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    var params = [
        'type',
        'size',
        'opacity',
        'posType',
        'otherColor',
        'otherColor2',
        'posColor',
    ].map(function (k) {
        return options[k];
    });
    var svg = createRenderer({
        listPoints: listPoints$7,
    })({
        qrcode: qrcode,
        params: params,
    });
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

var rendererFuncB = function rendererFuncB(qrcode, options) {
    try {
        options = schemaFuncB.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    var params = [
        'type',
        'size',
        'opacity',
        'posType',
        'otherColor',
        'otherColor2',
        'posColor',
    ].map(function (k) {
        return options[k];
    });
    var svg = createRenderer({
        listPoints: listPoints$7,
    })({
        qrcode: qrcode,
        params: params,
    });
    return svg;
};

function listPoints$8(qrcode, params) {
    if (!qrcode) return [];
    var nCount = qrcode.getModuleCount();
    var typeTable = getTypeTable(qrcode);
    var pointList = new Array(nCount);
    var type = params[0];
    var size = params[1] / 100;
    var opacity = params[2] / 100;
    var posType = params[3];
    var id = 0;
    var otherColor = params[4];
    var posColor = params[5];
    var vw = [3, -3];
    var vh = [3, -3];
    var sq25 =
        'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z';
    if (size <= 0) size = 1.0;
    var available = [];
    var ava2 = [];

    for (var x = 0; x < nCount; x++) {
        available[x] = [];
        ava2[x] = [];

        for (var y = 0; y < nCount; y++) {
            available[x][y] = true;
            ava2[x][y] = true;
        }
    }

    for (var _x = 0; _x < nCount; _x++) {
        for (var _y = 0; _y < nCount; _y++) {
            if (qrcode.isDark(_x, _y) === false) continue;

            if (typeTable[_x][_y] === QRPointType.POS_CENTER) {
                if (posType === 0) {
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                1,
                                '"\n                            height="',
                                1,
                                '"\n                            key="',
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            x="'
                            )
                            .concat(_x, '"\n                            y="')
                            .concat(_y, '"\n                        />')
                    );
                } else if (posType === 1) {
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                _x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                _y + 0.5,
                                '"\n                            r="',
                                1.5,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="none"\n                            stroke-width="1"\n                            stroke="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                _x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                _y + 0.5,
                                '"\n                            r="',
                                3,
                                '"\n                        />'
                            )
                    );
                } else if (posType === 2) {
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                _x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                _y + 0.5,
                                '"\n                            r="',
                                1.5,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="none"\n                            stroke-width="0.15"\n                            strokeDasharray="0.5,0.5"\n                            stroke="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                _x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                _y + 0.5,
                                '"\n                            r="',
                                3,
                                '"\n                        />'
                            )
                    );

                    for (var w = 0; w < vw.length; w++) {
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + vw[w] + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                                r="',
                                    0.5,
                                    '"\n                            />'
                                )
                        );
                    }

                    for (var h = 0; h < vh.length; h++) {
                        pointList.push(
                            '<circle\n                                key="'
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    posColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + vh[h] + 0.5,
                                    '"\n                                r="',
                                    0.5,
                                    '"\n                            />'
                                )
                        );
                    }
                } else if (posType === 3) {
                    pointList.push(
                        '<circle\n                            key="'
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                _x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(
                                _y + 0.5,
                                '"\n                            r="',
                                1.5,
                                '"\n                        />'
                            )
                    );
                    pointList.push(
                        '<path\n                            key="'
                            .concat(id++, '"\n                            d="')
                            .concat(
                                sq25,
                                '"\n                            stroke="'
                            )
                            .concat(
                                posColor,
                                '"\n                            stroke-width="'
                            )
                            .concat(
                                (100 / 6) * (1 - (1 - size) * 0.75),
                                '"\n                            fill="none"\n                            transform="',
                                'translate('
                                    .concat(String(_x - 2.5), ',')
                                    .concat(String(_y - 2.5), ') scale(')
                                    .concat(String(6 / 100), ',')
                                    .concat(String(6 / 100), ')'),
                                '"\n                        />'
                            )
                    );
                }
            } else if (typeTable[_x][_y] === QRPointType.POS_OTHER) {
                if (posType === 0) {
                    pointList.push(
                        '<rect\n                            width="'
                            .concat(
                                1,
                                '"\n                            height="',
                                1,
                                '"\n                            key="',
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                posColor,
                                '"\n                            x="'
                            )
                            .concat(_x, '"\n                            y="')
                            .concat(_y, '"\n                        />')
                    );
                }
            } else {
                if (type === 0) {
                    if (
                        _x === 0 ||
                        (_x > 0 &&
                            (!qrcode.isDark(_x - 1, _y) || !ava2[_x - 1][_y]))
                    ) {
                        var start = 0;
                        var end = 0;
                        var ctn = true;

                        while (ctn && _x + end < nCount) {
                            if (
                                qrcode.isDark(_x + end, _y) &&
                                ava2[_x + end][_y]
                            ) {
                                end++;
                            } else {
                                ctn = false;
                            }
                        }

                        if (end - start > 1) {
                            for (var i = start; i < end; i++) {
                                ava2[_x + i][_y] = false;
                                available[_x + i][_y] = false;
                            }

                            pointList.push(
                                '<line\n                                    opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                    x1="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    y1="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                    x2="'
                                    )
                                    .concat(
                                        _x + end - start - 0.5,
                                        '"\n                                    y2="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                    stroke-width="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                    stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                    stroke-linecap="round"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }

                    if (available[_x][_y]) {
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            />'
                                )
                        );
                    }
                }

                if (type === 1) {
                    if (
                        _y === 0 ||
                        (_y > 0 &&
                            (!qrcode.isDark(_x, _y - 1) || !ava2[_x][_y - 1]))
                    ) {
                        var _start = 0;
                        var _end = 0;
                        var _ctn = true;

                        while (_ctn && _y + _end < nCount) {
                            if (
                                qrcode.isDark(_x, _y + _end) &&
                                ava2[_x][_y + _end]
                            ) {
                                _end++;
                            } else {
                                _ctn = false;
                            }
                        }

                        if (_end - _start > 1) {
                            for (var _i = _start; _i < _end; _i++) {
                                ava2[_x][_y + _i] = false;
                                available[_x][_y + _i] = false;
                            }

                            pointList.push(
                                '<line\n                                    opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                    x1="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    y1="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                    x2="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    y2="'
                                    )
                                    .concat(
                                        _y + _end - _start - 1 + 0.5,
                                        '"\n                                    stroke-width="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                    stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                    stroke-linecap="round"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }

                    if (available[_x][_y]) {
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            />'
                                )
                        );
                    }
                }

                if (type === 2) {
                    if (
                        _y === 0 ||
                        (_y > 0 &&
                            (!qrcode.isDark(_x, _y - 1) || !ava2[_x][_y - 1]))
                    ) {
                        var _start2 = 0;
                        var _end2 = 0;
                        var _ctn2 = true;

                        while (_ctn2 && _y + _end2 < nCount) {
                            if (
                                qrcode.isDark(_x, _y + _end2) &&
                                ava2[_x][_y + _end2] &&
                                _end2 - _start2 <= 3
                            ) {
                                _end2++;
                            } else {
                                _ctn2 = false;
                            }
                        }

                        if (_end2 - _start2 > 1) {
                            for (var _i2 = _start2; _i2 < _end2; _i2++) {
                                ava2[_x][_y + _i2] = false;
                                available[_x][_y + _i2] = false;
                            }

                            pointList.push(
                                '<line\n                                    opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                    x1="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    y1="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                    x2="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    y2="'
                                    )
                                    .concat(
                                        _y + _end2 - _start2 - 1 + 0.5,
                                        '"\n                                    stroke-width="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                    stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                    stroke-linecap="round"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }

                    if (
                        _x === 0 ||
                        (_x > 0 &&
                            (!qrcode.isDark(_x - 1, _y) || !ava2[_x - 1][_y]))
                    ) {
                        var _start3 = 0;
                        var _end3 = 0;
                        var _ctn3 = true;

                        while (_ctn3 && _x + _end3 < nCount) {
                            if (
                                qrcode.isDark(_x + _end3, _y) &&
                                ava2[_x + _end3][_y] &&
                                _end3 - _start3 <= 3
                            ) {
                                _end3++;
                            } else {
                                _ctn3 = false;
                            }
                        }

                        if (_end3 - _start3 > 1) {
                            for (var _i3 = _start3; _i3 < _end3; _i3++) {
                                ava2[_x + _i3][_y] = false;
                                available[_x + _i3][_y] = false;
                            }

                            pointList.push(
                                '<line\n                                    opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                    x1="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    y1="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                    x2="'
                                    )
                                    .concat(
                                        _x + _end3 - _start3 - 0.5,
                                        '"\n                                    y2="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                    stroke-width="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                    stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                    stroke-linecap="round"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }

                    if (available[_x][_y]) {
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            />'
                                )
                        );
                    }
                }

                if (type === 3) {
                    if ((_x > _y) ^ (_x + _y < nCount)) {
                        if (
                            _y === 0 ||
                            (_y > 0 &&
                                (!qrcode.isDark(_x, _y - 1) ||
                                    !ava2[_x][_y - 1]))
                        ) {
                            var _start4 = 0;
                            var _end4 = 0;
                            var _ctn4 = true;

                            while (_ctn4 && _y + _end4 < nCount) {
                                if (
                                    qrcode.isDark(_x, _y + _end4) &&
                                    ava2[_x][_y + _end4] &&
                                    _end4 - _start4 <= 3
                                ) {
                                    _end4++;
                                } else {
                                    _ctn4 = false;
                                }
                            }

                            if (_end4 - _start4 > 1) {
                                for (var _i4 = _start4; _i4 < _end4; _i4++) {
                                    ava2[_x][_y + _i4] = false;
                                    available[_x][_y + _i4] = false;
                                }

                                pointList.push(
                                    '<line\n                                        opacity="'
                                        .concat(
                                            opacity,
                                            '"\n                                        x1="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                        y1="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                        x2="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                        y2="'
                                        )
                                        .concat(
                                            _y + _end4 - _start4 - 1 + 0.5,
                                            '"\n                                        stroke-width="'
                                        )
                                        .concat(
                                            size,
                                            '"\n                                        stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                        stroke-linecap="round"\n                                        key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    />'
                                        )
                                );
                            }
                        }
                    } else {
                        if (
                            _x === 0 ||
                            (_x > 0 &&
                                (!qrcode.isDark(_x - 1, _y) ||
                                    !ava2[_x - 1][_y]))
                        ) {
                            var _start5 = 0;
                            var _end5 = 0;
                            var _ctn5 = true;

                            while (_ctn5 && _x + _end5 < nCount) {
                                if (
                                    qrcode.isDark(_x + _end5, _y) &&
                                    ava2[_x + _end5][_y] &&
                                    _end5 - _start5 <= 3
                                ) {
                                    _end5++;
                                } else {
                                    _ctn5 = false;
                                }
                            }

                            if (_end5 - _start5 > 1) {
                                for (var _i5 = _start5; _i5 < _end5; _i5++) {
                                    ava2[_x + _i5][_y] = false;
                                    available[_x + _i5][_y] = false;
                                }

                                pointList.push(
                                    '<line\n                                        opacity="'
                                        .concat(
                                            opacity,
                                            '"\n                                        x1="'
                                        )
                                        .concat(
                                            _x + 0.5,
                                            '"\n                                        y1="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                        x2="'
                                        )
                                        .concat(
                                            _x + _end5 - _start5 - 0.5,
                                            '"\n                                        y2="'
                                        )
                                        .concat(
                                            _y + 0.5,
                                            '"\n                                        stroke-width="'
                                        )
                                        .concat(
                                            size,
                                            '"\n                                        stroke="'
                                        )
                                        .concat(
                                            otherColor,
                                            '"\n                                        stroke-linecap="round"\n                                        key="'
                                        )
                                        .concat(
                                            id++,
                                            '"\n                                    />'
                                        )
                                );
                            }
                        }
                    }

                    if (available[_x][_y]) {
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            />'
                                )
                        );
                    }
                }

                if (type === 4) {
                    if (
                        _y === 0 ||
                        _x === 0 ||
                        (_y > 0 &&
                            _x > 0 &&
                            (!qrcode.isDark(_x - 1, _y - 1) ||
                                !ava2[_x - 1][_y - 1]))
                    ) {
                        var _start6 = 0;
                        var _end6 = 0;
                        var _ctn6 = true;

                        while (
                            _ctn6 &&
                            _y + _end6 < nCount &&
                            _x + _end6 < nCount
                        ) {
                            if (
                                qrcode.isDark(_x + _end6, _y + _end6) &&
                                ava2[_x + _end6][_y + _end6]
                            ) {
                                _end6++;
                            } else {
                                _ctn6 = false;
                            }
                        }

                        if (_end6 - _start6 > 1) {
                            for (var _i6 = _start6; _i6 < _end6; _i6++) {
                                ava2[_x + _i6][_y + _i6] = false;
                                available[_x + _i6][_y + _i6] = false;
                            }

                            pointList.push(
                                '<line\n                                    opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                    x1="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    y1="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                    x2="'
                                    )
                                    .concat(
                                        _x + _end6 - _start6 - 1 + 0.5,
                                        '"\n                                    y2="'
                                    )
                                    .concat(
                                        _y + _end6 - _start6 - 1 + 0.5,
                                        '"\n                                    stroke-width="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                    stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                    stroke-linecap="round"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }

                    if (available[_x][_y]) {
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            />'
                                )
                        );
                    }
                }

                if (type === 5) {
                    if (
                        _x === 0 ||
                        _y === nCount - 1 ||
                        (_x > 0 &&
                            _y < nCount - 1 &&
                            (!qrcode.isDark(_x - 1, _y + 1) ||
                                !ava2[_x - 1][_y + 1]))
                    ) {
                        var _start7 = 0;
                        var _end7 = 0;
                        var _ctn7 = true;

                        while (
                            _ctn7 &&
                            _x + _end7 < nCount &&
                            _y - _end7 >= 0
                        ) {
                            if (
                                qrcode.isDark(_x + _end7, _y - _end7) &&
                                available[_x + _end7][_y - _end7]
                            ) {
                                _end7++;
                            } else {
                                _ctn7 = false;
                            }
                        }

                        if (_end7 - _start7 > 1) {
                            for (var _i7 = _start7; _i7 < _end7; _i7++) {
                                ava2[_x + _i7][_y - _i7] = false;
                                available[_x + _i7][_y - _i7] = false;
                            }

                            pointList.push(
                                '<line\n                                    opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                    x1="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    y1="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                    x2="'
                                    )
                                    .concat(
                                        _x + (_end7 - _start7 - 1) + 0.5,
                                        '"\n                                    y2="'
                                    )
                                    .concat(
                                        _y - (_end7 - _start7 - 1) + 0.5,
                                        '"\n                                    stroke-width="'
                                    )
                                    .concat(
                                        size,
                                        '"\n                                    stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                    stroke-linecap="round"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }

                    if (available[_x][_y]) {
                        pointList.push(
                            '<circle\n                                opacity="'
                                .concat(
                                    opacity,
                                    '"\n                                r="'
                                )
                                .concat(
                                    size / 2,
                                    '"\n                                key="'
                                )
                                .concat(
                                    id++,
                                    '"\n                                fill="'
                                )
                                .concat(
                                    otherColor,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    _x + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    _y + 0.5,
                                    '"\n                            />'
                                )
                        );
                    }
                }

                if (type === 6) {
                    if (
                        _x === 0 ||
                        _y === nCount - 1 ||
                        (_x > 0 &&
                            _y < nCount - 1 &&
                            (!qrcode.isDark(_x - 1, _y + 1) ||
                                !ava2[_x - 1][_y + 1]))
                    ) {
                        var _start8 = 0;
                        var _end8 = 0;
                        var _ctn8 = true;

                        while (
                            _ctn8 &&
                            _x + _end8 < nCount &&
                            _y - _end8 >= 0
                        ) {
                            if (
                                qrcode.isDark(_x + _end8, _y - _end8) &&
                                ava2[_x + _end8][_y - _end8]
                            ) {
                                _end8++;
                            } else {
                                _ctn8 = false;
                            }
                        }

                        if (_end8 - _start8 > 1) {
                            for (var _i8 = _start8; _i8 < _end8; _i8++) {
                                ava2[_x + _i8][_y - _i8] = false;
                            }

                            pointList.push(
                                '<line\n                                    opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                    x1="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    y1="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                    x2="'
                                    )
                                    .concat(
                                        _x + (_end8 - _start8 - 1) + 0.5,
                                        '"\n                                    y2="'
                                    )
                                    .concat(
                                        _y - (_end8 - _start8 - 1) + 0.5,
                                        '"\n                                    stroke-width="'
                                    )
                                    .concat(
                                        (size / 2) * rand(0.3, 1),
                                        '"\n                                    stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                    stroke-linecap="round"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }

                    if (
                        _y === 0 ||
                        _x === 0 ||
                        (_y > 0 &&
                            _x > 0 &&
                            (!qrcode.isDark(_x - 1, _y - 1) ||
                                !available[_x - 1][_y - 1]))
                    ) {
                        var _start9 = 0;
                        var _end9 = 0;
                        var _ctn9 = true;

                        while (
                            _ctn9 &&
                            _y + _end9 < nCount &&
                            _x + _end9 < nCount
                        ) {
                            if (
                                qrcode.isDark(_x + _end9, _y + _end9) &&
                                available[_x + _end9][_y + _end9]
                            ) {
                                _end9++;
                            } else {
                                _ctn9 = false;
                            }
                        }

                        if (_end9 - _start9 > 1) {
                            for (var _i9 = _start9; _i9 < _end9; _i9++) {
                                available[_x + _i9][_y + _i9] = false;
                            }

                            pointList.push(
                                '<line\n                                    opacity="'
                                    .concat(
                                        opacity,
                                        '"\n                                    x1="'
                                    )
                                    .concat(
                                        _x + 0.5,
                                        '"\n                                    y1="'
                                    )
                                    .concat(
                                        _y + 0.5,
                                        '"\n                                    x2="'
                                    )
                                    .concat(
                                        _x + _end9 - _start9 - 1 + 0.5,
                                        '"\n                                    y2="'
                                    )
                                    .concat(
                                        _y + _end9 - _start9 - 1 + 0.5,
                                        '"\n                                    stroke-width="'
                                    )
                                    .concat(
                                        (size / 2) * rand(0.3, 1),
                                        '"\n                                    stroke="'
                                    )
                                    .concat(
                                        otherColor,
                                        '"\n                                    stroke-linecap="round"\n                                    key="'
                                    )
                                    .concat(
                                        id++,
                                        '"\n                                />'
                                    )
                            );
                        }
                    }

                    pointList.push(
                        '<circle\n                            opacity="'
                            .concat(
                                opacity,
                                '"\n                            r="'
                            )
                            .concat(
                                0.5 * rand(0.33, 0.9),
                                '"\n                            key="'
                            )
                            .concat(
                                id++,
                                '"\n                            fill="'
                            )
                            .concat(
                                otherColor,
                                '"\n                            cx="'
                            )
                            .concat(
                                _x + 0.5,
                                '"\n                            cy="'
                            )
                            .concat(_y + 0.5, '"\n                        />')
                    );
                }
            }
        }
    }

    return pointList;
}

var schemaLine = object().shape({
    type: mixed().oneOf([0, 1, 2, 3, 4, 5, 6])['default'](2),
    size: number()['default'](50),
    opacity: number()['default'](100),
    posType: mixed().oneOf([0, 1, 2, 3])['default'](3),
    otherColor: string()['default']('#000000'),
    posColor: string()['default']('#000000'),
});
var schemaLine2 = object().shape({
    type: mixed().oneOf([0, 1, 2, 3, 4, 5, 6])['default'](6),
    size: number()['default'](50),
    opacity: number()['default'](100),
    posType: mixed().oneOf([0, 1, 2, 3])['default'](0),
    otherColor: string()['default']('#000000'),
    posColor: string()['default']('#000000'),
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

var rendererLine = function rendererLine(qrcode, options) {
    try {
        options = schemaLine.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    var params = [
        'type',
        'size',
        'opacity',
        'posType',
        'otherColor',
        'posColor',
    ].map(function (k) {
        return options[k];
    });
    var svg = createRenderer({
        listPoints: listPoints$8,
    })({
        qrcode: qrcode,
        params: params,
    });
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

var rendererLine2 = function rendererLine2(qrcode, options) {
    try {
        options = schemaLine2.validateSync(options);
    } catch (err) {
        console.error(err);
        return '';
    }

    var params = [
        'type',
        'size',
        'opacity',
        'posType',
        'otherColor',
        'posColor',
    ].map(function (k) {
        return options[k];
    });
    var svg = createRenderer({
        listPoints: listPoints$8,
    })({
        qrcode: qrcode,
        params: params,
    });
    return svg;
};

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
    this.parsedData = []; // Added to support UTF-8 Characters

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
    getLength: function getLength(buffer) {
        return this.parsedData.length;
    },
    write: function write(buffer) {
        for (var i = 0, l = this.parsedData.length; i < l; i++) {
            buffer.put(this.parsedData[i], 8);
        }
    },
}; //---------------------------------------------------------------------
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
    addData: function addData(data) {
        var newData = new QR8bitByte(data);
        this.dataList.push(newData);
        this.dataCache = null;
    },
    isDark: function isDark(row, col) {
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
    getModuleCount: function getModuleCount() {
        return this.moduleCount;
    },
    getPositionTable: function getPositionTable() {
        return this.position;
    },
    make: function make() {
        // Calculate automatically typeNumber if provided is < 1
        if (this.typeNumber < 1) {
            var typeNumber = 1;

            for (typeNumber = 1; typeNumber < 40; typeNumber++) {
                var rsBlocks = QRRSBlock.getRSBlocks(
                    typeNumber,
                    this.errorCorrectLevel
                );
                var buffer = new QRBitBuffer();
                var totalDataCount = 0;

                for (var i = 0; i < rsBlocks.length; i++) {
                    totalDataCount += rsBlocks[i].dataCount;
                }

                for (var _i = 0; _i < this.dataList.length; _i++) {
                    var data = this.dataList[_i];
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
    makeImpl: function makeImpl(test, maskPattern) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = new Array(this.moduleCount);

        for (var row = 0; row < this.moduleCount; row++) {
            this.modules[row] = new Array(this.moduleCount);

            for (var col = 0; col < this.moduleCount; col++) {
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
    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
        for (var r = -1; r <= 7; r++) {
            if (row + r <= -1 || this.moduleCount <= row + r) continue;

            for (var c = -1; c <= 7; c++) {
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
    getBestMaskPattern: function getBestMaskPattern() {
        var minLostPoint = 0;
        var pattern = 0;

        for (var i = 0; i < 8; i++) {
            this.makeImpl(true, i);
            var lostPoint = QRUtil.getLostPoint(this);

            if (i == 0 || minLostPoint > lostPoint) {
                minLostPoint = lostPoint;
                pattern = i;
            }
        }

        return pattern;
    },
    createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
        var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
        var cs = 1;
        this.make();

        for (var row = 0; row < this.modules.length; row++) {
            var y = row * cs;

            for (var col = 0; col < this.modules[row].length; col++) {
                var x = col * cs;
                var dark = this.modules[row][col];

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
    setupTimingPattern: function setupTimingPattern() {
        for (var r = 8; r < this.moduleCount - 8; r++) {
            if (this.modules[r][6] != null) {
                continue;
            }

            this.modules[r][6] = r % 2 == 0;
        }

        for (var c = 8; c < this.moduleCount - 8; c++) {
            if (this.modules[6][c] != null) {
                continue;
            }

            this.modules[6][c] = c % 2 == 0;
        }
    },
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
        var pos = QRUtil.getPatternPosition(this.typeNumber);
        this.position = [];

        for (var i = 0; i < pos.length; i++) {
            for (var j = 0; j < pos.length; j++) {
                var row = pos[i];
                var col = pos[j];

                if (this.modules[row][col] != null) {
                    continue;
                }

                this.position.push([row, col]);

                for (var r = -2; r <= 2; r++) {
                    for (var c = -2; c <= 2; c++) {
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
    setupTypeNumber: function setupTypeNumber(test) {
        var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

        for (var i = 0; i < 18; i++) {
            var mod = !test && ((bits >> i) & 1) == 1;
            this.modules[Math.floor(i / 3)][
                (i % 3) + this.moduleCount - 8 - 3
            ] = mod;
        }

        for (var _i2 = 0; _i2 < 18; _i2++) {
            var _mod = !test && ((bits >> _i2) & 1) == 1;

            this.modules[(_i2 % 3) + this.moduleCount - 8 - 3][
                Math.floor(_i2 / 3)
            ] = _mod;
        }
    },
    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
        var data = (this.errorCorrectLevel << 3) | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data); // vertical

        for (var i = 0; i < 15; i++) {
            var mod = !test && ((bits >> i) & 1) == 1;

            if (i < 6) {
                this.modules[i][8] = mod;
            } else if (i < 8) {
                this.modules[i + 1][8] = mod;
            } else {
                this.modules[this.moduleCount - 15 + i][8] = mod;
            }
        } // horizontal

        for (var _i3 = 0; _i3 < 15; _i3++) {
            var _mod2 = !test && ((bits >> _i3) & 1) == 1;

            if (_i3 < 8) {
                this.modules[8][this.moduleCount - _i3 - 1] = _mod2;
            } else if (_i3 < 9) {
                this.modules[8][15 - _i3 - 1 + 1] = _mod2;
            } else {
                this.modules[8][15 - _i3 - 1] = _mod2;
            }
        } // fixed module

        this.modules[this.moduleCount - 8][8] = !test;
    },
    mapData: function mapData(data, maskPattern) {
        var inc = -1;
        var row = this.moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;

        for (var col = this.moduleCount - 1; col > 0; col -= 2) {
            if (col == 6) col--;

            while (true) {
                for (var c = 0; c < 2; c++) {
                    if (this.modules[row][col - c] == null) {
                        var dark = false;

                        if (byteIndex < data.length) {
                            dark = ((data[byteIndex] >>> bitIndex) & 1) == 1;
                        }

                        var mask = QRUtil.getMask(maskPattern, row, col - c);

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
    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    var buffer = new QRBitBuffer();

    for (var i = 0; i < dataList.length; i++) {
        var data = dataList[i];
        buffer.put(data.mode, 4);
        buffer.put(
            data.getLength(),
            QRUtil.getLengthInBits(data.mode, typeNumber)
        );
        data.write(buffer);
    } // calc num max data.

    var totalDataCount = 0;

    for (var _i4 = 0; _i4 < rsBlocks.length; _i4++) {
        totalDataCount += rsBlocks[_i4].dataCount;
    }

    if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error(
            'code length overflow. (' +
                buffer.getLengthInBits() +
                '>' +
                totalDataCount * 8 +
                ')'
        );
    } // end code

    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
    } // padding

    while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
    } // padding

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
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);

    for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i++) {
            dcdata[r][i] = 0xff & buffer.buffer[i + offset];
        }

        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);

        for (var _i5 = 0; _i5 < ecdata[r].length; _i5++) {
            var modIndex = _i5 + modPoly.getLength() - ecdata[r].length;
            ecdata[r][_i5] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
    }

    var totalCodeCount = 0;

    for (var _i6 = 0; _i6 < rsBlocks.length; _i6++) {
        totalCodeCount += rsBlocks[_i6].totalCount;
    }

    var data = new Array(totalCodeCount);
    var index = 0;

    for (var _i7 = 0; _i7 < maxDcCount; _i7++) {
        for (var _r = 0; _r < rsBlocks.length; _r++) {
            if (_i7 < dcdata[_r].length) {
                data[index++] = dcdata[_r][_i7];
            }
        }
    }

    for (var _i8 = 0; _i8 < maxEcCount; _i8++) {
        for (var _r2 = 0; _r2 < rsBlocks.length; _r2++) {
            if (_i8 < ecdata[_r2].length) {
                data[index++] = ecdata[_r2][_i8];
            }
        }
    }

    return data;
}; //---------------------------------------------------------------------
// QRMode
//---------------------------------------------------------------------

var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3,
}; //---------------------------------------------------------------------
// QRErrorCorrectLevel
//---------------------------------------------------------------------

var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2,
}; //---------------------------------------------------------------------
// QRMaskPattern
//---------------------------------------------------------------------

var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
}; //---------------------------------------------------------------------
// QRUtil
//---------------------------------------------------------------------

var QRUtil = {
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
    getBCHTypeInfo: function getBCHTypeInfo(data) {
        var d = data << 10;

        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
            d ^=
                QRUtil.G15 <<
                (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15));
        }

        return ((data << 10) | d) ^ QRUtil.G15_MASK;
    },
    getBCHTypeNumber: function getBCHTypeNumber(data) {
        var d = data << 12;

        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
            d ^=
                QRUtil.G18 <<
                (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18));
        }

        return (data << 12) | d;
    },
    getBCHDigit: function getBCHDigit(data) {
        var digit = 0;

        while (data != 0) {
            digit++;
            data >>>= 1;
        }

        return digit;
    },
    getPatternPosition: function getPatternPosition(typeNumber) {
        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    getMask: function getMask(maskPattern, i, j) {
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
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(
        errorCorrectLength
    ) {
        var a = new QRPolynomial([1], 0);

        for (var i = 0; i < errorCorrectLength; i++) {
            a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
        }

        return a;
    },
    getLengthInBits: function getLengthInBits(mode, type) {
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
    getLostPoint: function getLostPoint(qrCode) {
        var moduleCount = qrCode.getModuleCount();
        var lostPoint = 0; // LEVEL1

        for (var row = 0; row < moduleCount; row++) {
            for (var col = 0; col < moduleCount; col++) {
                var sameCount = 0;
                var dark = qrCode.isDark(row, col);

                for (var r = -1; r <= 1; r++) {
                    if (row + r < 0 || moduleCount <= row + r) {
                        continue;
                    }

                    for (var c = -1; c <= 1; c++) {
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
        } // LEVEL2

        for (var _row = 0; _row < moduleCount - 1; _row++) {
            for (var _col = 0; _col < moduleCount - 1; _col++) {
                var count = 0;
                if (qrCode.isDark(_row, _col)) count++;
                if (qrCode.isDark(_row + 1, _col)) count++;
                if (qrCode.isDark(_row, _col + 1)) count++;
                if (qrCode.isDark(_row + 1, _col + 1)) count++;

                if (count == 0 || count == 4) {
                    lostPoint += 3;
                }
            }
        } // LEVEL3

        for (var _row2 = 0; _row2 < moduleCount; _row2++) {
            for (var _col2 = 0; _col2 < moduleCount - 6; _col2++) {
                if (
                    qrCode.isDark(_row2, _col2) &&
                    !qrCode.isDark(_row2, _col2 + 1) &&
                    qrCode.isDark(_row2, _col2 + 2) &&
                    qrCode.isDark(_row2, _col2 + 3) &&
                    qrCode.isDark(_row2, _col2 + 4) &&
                    !qrCode.isDark(_row2, _col2 + 5) &&
                    qrCode.isDark(_row2, _col2 + 6)
                ) {
                    lostPoint += 40;
                }
            }
        }

        for (var _col3 = 0; _col3 < moduleCount; _col3++) {
            for (var _row3 = 0; _row3 < moduleCount - 6; _row3++) {
                if (
                    qrCode.isDark(_row3, _col3) &&
                    !qrCode.isDark(_row3 + 1, _col3) &&
                    qrCode.isDark(_row3 + 2, _col3) &&
                    qrCode.isDark(_row3 + 3, _col3) &&
                    qrCode.isDark(_row3 + 4, _col3) &&
                    !qrCode.isDark(_row3 + 5, _col3) &&
                    qrCode.isDark(_row3 + 6, _col3)
                ) {
                    lostPoint += 40;
                }
            }
        } // LEVEL4

        var darkCount = 0;

        for (var _col4 = 0; _col4 < moduleCount; _col4++) {
            for (var _row4 = 0; _row4 < moduleCount; _row4++) {
                if (qrCode.isDark(_row4, _col4)) {
                    darkCount++;
                }
            }
        }

        var ratio =
            Math.abs((100 * darkCount) / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;
        return lostPoint;
    },
}; //---------------------------------------------------------------------
// QRMath
//---------------------------------------------------------------------

var QRMath = {
    glog: function glog(n) {
        if (n < 1) {
            throw new Error('glog(' + n + ')');
        }

        return QRMath.LOG_TABLE[n];
    },
    gexp: function gexp(n) {
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

for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
}

for (var _i9 = 8; _i9 < 256; _i9++) {
    QRMath.EXP_TABLE[_i9] =
        QRMath.EXP_TABLE[_i9 - 4] ^
        QRMath.EXP_TABLE[_i9 - 5] ^
        QRMath.EXP_TABLE[_i9 - 6] ^
        QRMath.EXP_TABLE[_i9 - 8];
}

for (var _i10 = 0; _i10 < 255; _i10++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[_i10]] = _i10;
} //---------------------------------------------------------------------
// QRPolynomial
//---------------------------------------------------------------------

function QRPolynomial(num, shift) {
    if (num.length == undefined) {
        throw new Error(num.length + '/' + shift);
    }

    var offset = 0;

    while (offset < num.length && num[offset] == 0) {
        offset++;
    }

    this.num = new Array(num.length - offset + shift);

    for (var _i11 = 0; _i11 < num.length - offset; _i11++) {
        this.num[_i11] = num[_i11 + offset];
    }
}

QRPolynomial.prototype = {
    get: function get(index) {
        return this.num[index];
    },
    getLength: function getLength() {
        return this.num.length;
    },
    multiply: function multiply(e) {
        var num = new Array(this.getLength() + e.getLength() - 1);

        for (var _i12 = 0; _i12 < this.getLength(); _i12++) {
            for (var j = 0; j < e.getLength(); j++) {
                num[_i12 + j] ^= QRMath.gexp(
                    QRMath.glog(this.get(_i12)) + QRMath.glog(e.get(j))
                );
            }
        }

        return new QRPolynomial(num, 0);
    },
    mod: function mod(e) {
        if (this.getLength() - e.getLength() < 0) {
            return this;
        }

        var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
        var num = new Array(this.getLength());

        for (var _i13 = 0; _i13 < this.getLength(); _i13++) {
            num[_i13] = this.get(_i13);
        }

        for (var _i14 = 0; _i14 < e.getLength(); _i14++) {
            num[_i14] ^= QRMath.gexp(QRMath.glog(e.get(_i14)) + ratio);
        } // recursive call

        return new QRPolynomial(num, 0).mod(e);
    },
}; //---------------------------------------------------------------------
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
    [1, 26, 9], // 2
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16], // 3
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13], // 4
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9], // 5
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12], // 6
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15], // 7
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14], // 8
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15], // 9
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13], // 10
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16], // 11
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13], // 12
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15], // 13
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12], // 14
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13], // 15
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12], // 16
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16], // 17
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15], // 18
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15], // 19
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14], // 20
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16], // 21
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17], // 22
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13], // 23
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16], // 24
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17], // 25
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16], // 26
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17], // 27
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16], // 28
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16], // 29
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16], // 30
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16], // 31
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16], // 32
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16], // 33
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16], // 34
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17], // 35
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16], // 36
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16], // 37
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16], // 38
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16], // 39
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16], // 40
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16],
];

QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

    if (rsBlock == undefined) {
        throw new Error(
            'bad rs block @ typeNumber:' +
                typeNumber +
                '/errorCorrectLevel:' +
                errorCorrectLevel
        );
    }

    var length = rsBlock.length / 3;
    var list = [];

    for (var _i15 = 0; _i15 < length; _i15++) {
        var count = rsBlock[_i15 * 3 + 0];
        var totalCount = rsBlock[_i15 * 3 + 1];
        var dataCount = rsBlock[_i15 * 3 + 2];

        for (var j = 0; j < count; j++) {
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
}; //---------------------------------------------------------------------
// QRBitBuffer
//---------------------------------------------------------------------

function QRBitBuffer() {
    this.buffer = [];
    this.length = 0;
}

QRBitBuffer.prototype = {
    get: function get(index) {
        var bufIndex = Math.floor(index / 8);
        return ((this.buffer[bufIndex] >>> (7 - (index % 8))) & 1) == 1;
    },
    put: function put(num, length) {
        for (var _i16 = 0; _i16 < length; _i16++) {
            this.putBit(((num >>> (length - _i16 - 1)) & 1) == 1);
        }
    },
    getLengthInBits: function getLengthInBits() {
        return this.length;
    },
    putBit: function putBit(bit) {
        var bufIndex = Math.floor(this.length / 8);

        if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
        }

        if (bit) {
            this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        }

        this.length++;
    },
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
    options = _objectSpread2(
        _objectSpread2(
            {},
            {
                render: 'canvas',
                width: '100%',
                height: '100%',
                typeNumber: -1,
                correctLevel: 1,
                background: '#ffffff',
                foreground: '#000000',
                isSpace: true,
            }
        ),
        options
    );
    var qrcode = new QRCode(options.typeNumber, options.correctLevel);
    qrcode.addData(options.text);
    qrcode.make();
    qrcode.$options = options;
    return qrcode;
}

var index = {
    rendererRect: rendererRect,
    rendererRound: rendererRound,
    rendererRandRound: rendererRandRound,
    rendererDSJ: RenderDSJ,
    rendererResImage: render,
    rendererImage: RendererImage,
    renderer25D: Renderer25D,
    rendererRandRect: RendererRandRect,
    rendererCircle: rendererCircle,
    rendererFuncA: rendererFuncA,
    rendererFuncB: rendererFuncB,
    rendererLine: rendererLine,
    rendererLine2: rendererLine2,
    encodeData: encodeData,
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
