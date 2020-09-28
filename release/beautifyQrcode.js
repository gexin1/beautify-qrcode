!(function (n, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(
              exports,
              require('yup'),
              require('@/utils/renderer'),
              require('@/utils/qrcodeHandler'),
              require('@/utils/util'),
              require('@/utils/imageUtils')
          )
        : 'function' == typeof define && define.amd
        ? define([
              'exports',
              'yup',
              '@/utils/renderer',
              '@/utils/qrcodeHandler',
              '@/utils/util',
              '@/utils/imageUtils',
          ], t)
        : t(
              ((n =
                  'undefined' != typeof globalThis
                      ? globalThis
                      : n || self).beautifyQrcode = {}),
              n.yup,
              n.renderer,
              n.qrcodeHandler,
              n.util,
              n.imageUtils
          );
})(this, function (n, t, c, e, o, r) {
    'use strict';
    function a(n, t, c) {
        return (
            t in n
                ? Object.defineProperty(n, t, {
                      value: c,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (n[t] = c),
            n
        );
    }
    function i(n, t) {
        var c = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(n);
            t &&
                (e = e.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })),
                c.push.apply(c, e);
        }
        return c;
    }
    function s(n) {
        for (var t = 1; t < arguments.length; t++) {
            var c = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? i(Object(c), !0).forEach(function (t) {
                      a(n, t, c[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                      n,
                      Object.getOwnPropertyDescriptors(c)
                  )
                : i(Object(c)).forEach(function (t) {
                      Object.defineProperty(
                          n,
                          t,
                          Object.getOwnPropertyDescriptor(c, t)
                      );
                  });
        }
        return n;
    }
    function l(n, t) {
        if (!n) return [];
        var c = n.getModuleCount(),
            r = e.getTypeTable(n),
            a = new Array(c),
            i = t[0],
            s = t[1] / 100,
            l = t[2] / 100,
            h = t[3],
            u = 0,
            f = t[4],
            y = t[5],
            p = [3, -3],
            d = [3, -3];
        s <= 0 && (s = 1);
        for (var g = 0; g < c; g++)
            for (var k = 0; k < c; k++)
                if (!1 !== n.isDark(g, k))
                    if (
                        r[g][k] === e.QRPointType.ALIGN_CENTER ||
                        r[g][k] === e.QRPointType.ALIGN_OTHER ||
                        r[g][k] === e.QRPointType.TIMING
                    )
                        0 === i
                            ? a.push(
                                  '<rect\n                            opacity="'
                                      .concat(
                                          l,
                                          '"\n                            width="'
                                      )
                                      .concat(
                                          s,
                                          '"\n                            height="'
                                      )
                                      .concat(
                                          s,
                                          '"\n                            key="'
                                      )
                                      .concat(
                                          u++,
                                          '"\n                            fill="'
                                      )
                                      .concat(
                                          f,
                                          '"\n                            x="'
                                      )
                                      .concat(
                                          g + (1 - s) / 2,
                                          '"\n                            y="'
                                      )
                                      .concat(
                                          k + (1 - s) / 2,
                                          '"\n                        />'
                                      )
                              )
                            : 1 === i
                            ? a.push(
                                  '<circle\n                            opacity="'
                                      .concat(
                                          l,
                                          '"\n                            r="'
                                      )
                                      .concat(
                                          s / 2,
                                          '"\n                            key="'
                                      )
                                      .concat(
                                          u++,
                                          '"\n                            fill="'
                                      )
                                      .concat(
                                          f,
                                          '"\n                            cx="'
                                      )
                                      .concat(
                                          g + 0.5,
                                          '"\n                            cy="'
                                      )
                                      .concat(
                                          k + 0.5,
                                          '"\n                        />'
                                      )
                              )
                            : 2 === i &&
                              a.push(
                                  '<circle\n                            key="'
                                      .concat(
                                          u++,
                                          '"\n                            opacity="'
                                      )
                                      .concat(
                                          l,
                                          '"\n                            fill="'
                                      )
                                      .concat(
                                          f,
                                          '"\n                            cx="'
                                      )
                                      .concat(
                                          g + 0.5,
                                          '"\n                            cy="'
                                      )
                                      .concat(
                                          k + 0.5,
                                          '"\n                            r="'
                                      )
                                      .concat(
                                          s / 2,
                                          '"\n                        />'
                                      )
                              );
                    else if (r[g][k] === e.QRPointType.POS_CENTER)
                        if (0 === h)
                            a.push(
                                '<rect\n                            width="'
                                    .concat(
                                        1,
                                        '"\n                            height="',
                                        1,
                                        '"\n                            key="',
                                        u++,
                                        '"\n                            fill="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            x="'
                                    )
                                    .concat(
                                        g,
                                        '"\n                            y="'
                                    )
                                    .concat(k, '"\n                        />')
                            );
                        else if (1 === h)
                            a.push(
                                '<circle\n                            key="'
                                    .concat(
                                        u++,
                                        '"\n                            fill="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            cx="'
                                    )
                                    .concat(
                                        g + 0.5,
                                        '"\n                            cy="'
                                    )
                                    .concat(
                                        k + 0.5,
                                        '"\n                            r="',
                                        1.5,
                                        '"\n                        />'
                                    )
                            ),
                                a.push(
                                    '<circle\n                            key="'
                                        .concat(
                                            u++,
                                            '"\n                            fill="none"\n                            stroke-width="1"\n                            stroke="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                            cx="'
                                        )
                                        .concat(
                                            g + 0.5,
                                            '"\n                            cy="'
                                        )
                                        .concat(
                                            k + 0.5,
                                            '"\n                            r="',
                                            3,
                                            '"\n                        />'
                                        )
                                );
                        else if (2 === h) {
                            a.push(
                                '<circle\n                            key="'
                                    .concat(
                                        u++,
                                        '"\n                            fill="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            cx="'
                                    )
                                    .concat(
                                        g + 0.5,
                                        '"\n                            cy="'
                                    )
                                    .concat(
                                        k + 0.5,
                                        '"\n                            r="',
                                        1.5,
                                        '"\n                        />'
                                    )
                            ),
                                a.push(
                                    '<circle\n                            key="'
                                        .concat(
                                            u++,
                                            '"\n                            fill="none"\n                            stroke-width="0.15"\n                            stroke-dasharray="0.5,0.5"\n                            stroke="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                            cx="'
                                        )
                                        .concat(
                                            g + 0.5,
                                            '"\n                            cy="'
                                        )
                                        .concat(
                                            k + 0.5,
                                            '"\n                            r="',
                                            3,
                                            '"\n                        />'
                                        )
                                );
                            for (var v = 0; v < p.length; v++)
                                a.push(
                                    '<circle\n                                key="'
                                        .concat(
                                            u++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            g + p[v] + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            k + 0.5,
                                            '"\n                                r="',
                                            0.5,
                                            '"\n                            />'
                                        )
                                );
                            for (var m = 0; m < d.length; m++)
                                a.push(
                                    '<circle\n                                key="'
                                        .concat(
                                            u++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            g + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            k + d[m] + 0.5,
                                            '"\n                                r="',
                                            0.5,
                                            '"\n                            />'
                                        )
                                );
                        } else
                            3 === h &&
                                (a.push(
                                    '<circle\n                            key="'
                                        .concat(
                                            u++,
                                            '"\n                            fill="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                            cx="'
                                        )
                                        .concat(
                                            g + 0.5,
                                            '"\n                            cy="'
                                        )
                                        .concat(
                                            k + 0.5,
                                            '"\n                            r="',
                                            1.5,
                                            '"\n                        />'
                                        )
                                ),
                                a.push(
                                    '<path\n                            key="'
                                        .concat(
                                            u++,
                                            '"\n                            d="'
                                        )
                                        .concat(
                                            'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z',
                                            '"\n                            stroke="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                            stroke-width="'
                                        )
                                        .concat(
                                            (100 / 6) * (1 - 0.75 * (1 - s)),
                                            '"\n                            fill="none"\n                            transform="'
                                        )
                                        .concat(
                                            'translate(' +
                                                String(g - 2.5) +
                                                ',' +
                                                String(k - 2.5) +
                                                ') scale(' +
                                                String(0.06) +
                                                ',' +
                                                String(0.06) +
                                                ')',
                                            '"\n                        />'
                                        )
                                ));
                    else
                        r[g][k] === e.QRPointType.POS_OTHER
                            ? 0 === h &&
                              a.push(
                                  '<rect\n                            width="'
                                      .concat(
                                          1,
                                          '"\n                            height="',
                                          1,
                                          '"\n                            key="',
                                          u++,
                                          '"\n                            fill="'
                                      )
                                      .concat(
                                          y,
                                          '"\n                            x="'
                                      )
                                      .concat(
                                          g,
                                          '"\n                            y="'
                                      )
                                      .concat(
                                          k,
                                          '"\n                        />'
                                      )
                              )
                            : 0 === i
                            ? a.push(
                                  '<rect\n                            opacity="'
                                      .concat(
                                          l,
                                          '"\n                            width="'
                                      )
                                      .concat(
                                          s,
                                          '"\n                            height="'
                                      )
                                      .concat(
                                          s,
                                          '"\n                            key="'
                                      )
                                      .concat(
                                          u++,
                                          '"\n                            fill="'
                                      )
                                      .concat(
                                          f,
                                          '"\n                            x="'
                                      )
                                      .concat(
                                          g + (1 - s) / 2,
                                          '"\n                            y="'
                                      )
                                      .concat(
                                          k + (1 - s) / 2,
                                          '"\n                        />'
                                      )
                              )
                            : 1 === i
                            ? a.push(
                                  '<circle\n                            opacity="'
                                      .concat(
                                          l,
                                          '"\n                            r="'
                                      )
                                      .concat(
                                          s / 2,
                                          '"\n                            key="'
                                      )
                                      .concat(
                                          u++,
                                          '"\n                            fill="'
                                      )
                                      .concat(
                                          f,
                                          '"\n                            cx="'
                                      )
                                      .concat(
                                          g + 0.5,
                                          '"\n                            cy="'
                                      )
                                      .concat(
                                          k + 0.5,
                                          '"\n                        />'
                                      )
                              )
                            : 2 === i &&
                              a.push(
                                  '<circle\n                            opacity="'
                                      .concat(
                                          l,
                                          '"\n                            key="'
                                      )
                                      .concat(
                                          u++,
                                          '"\n                            fill="'
                                      )
                                      .concat(
                                          f,
                                          '"\n                            cx="'
                                      )
                                      .concat(
                                          g + 0.5,
                                          '"\n                            cy="'
                                      )
                                      .concat(
                                          k + 0.5,
                                          '"\n                            r="'
                                      )
                                      .concat(
                                          0.5 * o.rand(0.33, 1),
                                          '"\n                        />'
                                      )
                              );
        return a;
    }
    var h = t
            .object()
            .shape({
                type: t.mixed().oneOf([0, 1, 2])['default'](0),
                size: t.number()['default'](100),
                opacity: t.number()['default'](100),
                posType: t.mixed().oneOf([0, 1, 2, 3])['default'](0),
                otherColor: t.string()['default']('#000000'),
                posColor: t.string()['default']('#000000'),
            }),
        u = function (n, t) {
            try {
                t = h.validateSync(t);
            } catch (o) {
                return console.error(o), '';
            }
            var e = [
                'type',
                'size',
                'opacity',
                'posType',
                'otherColor',
                'posColor',
            ].map(function (n) {
                return t[n];
            });
            return c.createRenderer({ listPoints: l })({
                qrcode: n,
                params: e,
            });
        },
        f = function (n) {
            var t =
                arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
            return (
                (t = s(
                    s({}, { type: 0, size: 100, opacity: 100, posType: 0 }),
                    t
                )),
                u(n, t)
            );
        },
        y = function (n) {
            var t =
                arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
            return (
                (t = s(
                    s({}, { type: 1, size: 50, opacity: 30, posType: 1 }),
                    t
                )),
                u(n, t)
            );
        },
        p = function (n) {
            var t =
                arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
            return (
                (t = s(
                    s({}, { type: 2, size: 80, opacity: 100, posType: 2 }),
                    t
                )),
                u(n, t)
            );
        };
    function d(n, t) {
        if (!n) return [];
        var c = n.getModuleCount(),
            o = e.getTypeTable(n),
            r = [],
            a = [],
            i = [],
            s = t[0] / 100,
            l = t[1] / 100,
            h = t[2] / 100,
            u = t[3],
            f = 0;
        s <= 0 && (s = 70), l <= 0 && (l = 70);
        for (var y = [], p = [], d = 0; d < c; d++) {
            (y[d] = []), (p[d] = []);
            for (var g = 0; g < c; g++) (y[d][g] = !0), (p[d][g] = !0);
        }
        for (var k = 0; k < c; k++)
            for (var v = 0; v < c; v++)
                if (!1 !== n.isDark(v, k))
                    if (o[v][k] === e.QRPointType.POS_CENTER)
                        0 === u
                            ? r.push(
                                  '<rect\n                            width="'
                                      .concat(
                                          1,
                                          '"\n                            height="',
                                          1,
                                          '"\n                            key="',
                                          f++,
                                          '"\n                            fill="#0B2D97"\n                            x="'
                                      )
                                      .concat(
                                          v,
                                          '"\n                            y="'
                                      )
                                      .concat(
                                          k,
                                          '"\n                        />'
                                      )
                              )
                            : 1 === u &&
                              (r.push(
                                  '<rect\n                            width="'
                                      .concat(
                                          3 - (1 - h),
                                          '"\n                            height="'
                                      )
                                      .concat(
                                          3 - (1 - h),
                                          '"\n                            key="'
                                      )
                                      .concat(
                                          f++,
                                          '"\n                            fill="#0B2D97"\n                            x="'
                                      )
                                      .concat(
                                          v - 1 + (1 - h) / 2,
                                          '"\n                            y="'
                                      )
                                      .concat(
                                          k - 1 + (1 - h) / 2,
                                          '"\n                        />'
                                      )
                              ),
                              r.push(
                                  '<rect\n                            width="'
                                      .concat(
                                          h,
                                          '"\n                            height="'
                                      )
                                      .concat(
                                          3 - (1 - h),
                                          '"\n                            key="'
                                      )
                                      .concat(
                                          f++,
                                          '"\n                            fill="#0B2D97"\n                            x="'
                                      )
                                      .concat(
                                          v - 3 + (1 - h) / 2,
                                          '"\n                            y="'
                                      )
                                      .concat(
                                          k - 1 + (1 - h) / 2,
                                          '"\n                        />'
                                      )
                              ),
                              r.push(
                                  '<rect\n                            width="'
                                      .concat(
                                          h,
                                          '"\n                            height="'
                                      )
                                      .concat(
                                          3 - (1 - h),
                                          '"\n                            key="'
                                      )
                                      .concat(
                                          f++,
                                          '"\n                            fill="#0B2D97"\n                            x="'
                                      )
                                      .concat(
                                          v + 3 + (1 - h) / 2,
                                          '"\n                            y="'
                                      )
                                      .concat(
                                          k - 1 + (1 - h) / 2,
                                          '"\n                        />'
                                      )
                              ),
                              r.push(
                                  '<rect\n                            width="'
                                      .concat(
                                          3 - (1 - h),
                                          '"\n                            height="'
                                      )
                                      .concat(
                                          h,
                                          '"\n                            key="'
                                      )
                                      .concat(
                                          f++,
                                          '"\n                            fill="#0B2D97"\n                            x="'
                                      )
                                      .concat(
                                          v - 1 + (1 - h) / 2,
                                          '"\n                            y="'
                                      )
                                      .concat(
                                          k - 3 + (1 - h) / 2,
                                          '"\n                        />'
                                      )
                              ),
                              r.push(
                                  '<rect\n                            width="'
                                      .concat(
                                          3 - (1 - h),
                                          '"\n                            height="'
                                      )
                                      .concat(
                                          h,
                                          '"\n                            key="'
                                      )
                                      .concat(
                                          f++,
                                          '"\n                            fill="#0B2D97"\n                            x="'
                                      )
                                      .concat(
                                          v - 1 + (1 - h) / 2,
                                          '"\n                            y="'
                                      )
                                      .concat(
                                          k + 3 + (1 - h) / 2,
                                          '"\n                        />'
                                      )
                              ));
                    else if (o[v][k] === e.QRPointType.POS_OTHER)
                        0 === u &&
                            r.push(
                                '<rect\n                            width="'
                                    .concat(
                                        1,
                                        '"\n                            height="',
                                        1,
                                        '"\n                            key="',
                                        f++,
                                        '"\n                            fill="#0B2D97"\n                            x="'
                                    )
                                    .concat(
                                        v,
                                        '"\n                            y="'
                                    )
                                    .concat(k, '"\n                        />')
                            );
                    else {
                        if (y[v][k] && p[v][k] && v < c - 2 && k < c - 2) {
                            for (var m = !0, x = 0; x < 3; x++)
                                for (var w = 0; w < 3; w++)
                                    !1 === p[v + x][k + w] && (m = !1);
                            if (
                                m &&
                                n.isDark(v + 2, k) &&
                                n.isDark(v + 1, k + 1) &&
                                n.isDark(v, k + 2) &&
                                n.isDark(v + 2, k + 2)
                            ) {
                                a.push(
                                    '<line\n                                key="'
                                        .concat(
                                            f++,
                                            '"\n                                x1="'
                                        )
                                        .concat(
                                            v + l / Math.sqrt(8),
                                            '"\n                                y1="'
                                        )
                                        .concat(
                                            k + l / Math.sqrt(8),
                                            '"\n                                x2="'
                                        )
                                        .concat(
                                            v + 3 - l / Math.sqrt(8),
                                            '"\n                                y2="'
                                        )
                                        .concat(
                                            k + 3 - l / Math.sqrt(8),
                                            '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                        )
                                        .concat(
                                            l,
                                            '"\n                            />'
                                        )
                                ),
                                    a.push(
                                        '<line\n                                key="'
                                            .concat(
                                                f++,
                                                '"\n                                x1="'
                                            )
                                            .concat(
                                                v + 3 - l / Math.sqrt(8),
                                                '"\n                                y1="'
                                            )
                                            .concat(
                                                k + l / Math.sqrt(8),
                                                '"\n                                x2="'
                                            )
                                            .concat(
                                                v + l / Math.sqrt(8),
                                                '"\n                                y2="'
                                            )
                                            .concat(
                                                k + 3 - l / Math.sqrt(8),
                                                '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                            )
                                            .concat(
                                                l,
                                                '"\n                            />'
                                            )
                                    ),
                                    (y[v][k] = !1),
                                    (y[v + 2][k] = !1),
                                    (y[v][k + 2] = !1),
                                    (y[v + 2][k + 2] = !1),
                                    (y[v + 1][k + 1] = !1);
                                for (var C = 0; C < 3; C++)
                                    for (var D = 0; D < 3; D++)
                                        p[v + C][k + D] = !1;
                            }
                        }
                        if (y[v][k] && p[v][k] && v < c - 1 && k < c - 1) {
                            for (var T = !0, P = 0; P < 2; P++)
                                for (var E = 0; E < 2; E++)
                                    !1 === p[v + P][k + E] && (T = !1);
                            if (
                                T &&
                                n.isDark(v + 1, k) &&
                                n.isDark(v, k + 1) &&
                                n.isDark(v + 1, k + 1)
                            ) {
                                a.push(
                                    '<line\n                                key="'
                                        .concat(
                                            f++,
                                            '"\n                                x1="'
                                        )
                                        .concat(
                                            v + l / Math.sqrt(8),
                                            '"\n                                y1="'
                                        )
                                        .concat(
                                            k + l / Math.sqrt(8),
                                            '"\n                                x2="'
                                        )
                                        .concat(
                                            v + 2 - l / Math.sqrt(8),
                                            '"\n                                y2="'
                                        )
                                        .concat(
                                            k + 2 - l / Math.sqrt(8),
                                            '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                        )
                                        .concat(
                                            l,
                                            '"\n                            />'
                                        )
                                ),
                                    a.push(
                                        '<line\n                                key="'
                                            .concat(
                                                f++,
                                                '"\n                                x1="'
                                            )
                                            .concat(
                                                v + 2 - l / Math.sqrt(8),
                                                '"\n                                y1="'
                                            )
                                            .concat(
                                                k + l / Math.sqrt(8),
                                                '"\n                                x2="'
                                            )
                                            .concat(
                                                v + l / Math.sqrt(8),
                                                '"\n                                y2="'
                                            )
                                            .concat(
                                                k + 2 - l / Math.sqrt(8),
                                                '"\n                                fill="none"\n                                stroke="#0B2D97"\n                                stroke-width="'
                                            )
                                            .concat(
                                                l,
                                                '"\n                            />'
                                            )
                                    );
                                for (var b = 0; b < 2; b++)
                                    for (var B = 0; B < 2; B++)
                                        (y[v + b][k + B] = !1),
                                            (p[v + b][k + B] = !1);
                            }
                        }
                        if (
                            y[v][k] &&
                            p[v][k] &&
                            (0 === k ||
                                (k > 0 &&
                                    (!n.isDark(v, k - 1) || !p[v][k - 1])))
                        ) {
                            for (var M = k, L = k, O = !0; O && L < c; )
                                n.isDark(v, L) && p[v][L] ? L++ : (O = !1);
                            if (L - M > 2) {
                                for (var R = M; R < L; R++)
                                    (p[v][R] = !1), (y[v][R] = !1);
                                i.push(
                                    '<rect\n                                    width="'
                                        .concat(
                                            s,
                                            '"\n                                    height="'
                                        )
                                        .concat(
                                            L - M - 1 - (1 - s),
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            f++,
                                            '"\n                                    fill="#E02020"\n                                    x="'
                                        )
                                        .concat(
                                            v + (1 - s) / 2,
                                            '"\n                                    y="'
                                        )
                                        .concat(
                                            k + (1 - s) / 2,
                                            '"\n                                />'
                                        )
                                ),
                                    i.push(
                                        '<rect\n                                    width="'
                                            .concat(
                                                s,
                                                '"\n                                    height="'
                                            )
                                            .concat(
                                                s,
                                                '"\n                                    key="'
                                            )
                                            .concat(
                                                f++,
                                                '"\n                                    fill="#E02020"\n                                    x="'
                                            )
                                            .concat(
                                                v + (1 - s) / 2,
                                                '"\n                                    y="'
                                            )
                                            .concat(
                                                L - 1 + (1 - s) / 2,
                                                '"\n                                />'
                                            )
                                    );
                            }
                        }
                        if (
                            y[v][k] &&
                            p[v][k] &&
                            (0 === v ||
                                (v > 0 &&
                                    (!n.isDark(v - 1, k) || !p[v - 1][k])))
                        ) {
                            for (var S = v, _ = v, A = !0; A && _ < c; )
                                n.isDark(_, k) && p[_][k] ? _++ : (A = !1);
                            if (_ - S > 1) {
                                for (var F = S; F < _; F++)
                                    (p[F][k] = !1), (y[F][k] = !1);
                                i.push(
                                    '<rect\n                                    width="'
                                        .concat(
                                            _ - S - (1 - s),
                                            '"\n                                    height="'
                                        )
                                        .concat(
                                            s,
                                            '"\n                                    key="'
                                        )
                                        .concat(
                                            f++,
                                            '"\n                                    fill="#F6B506"\n                                    x="'
                                        )
                                        .concat(
                                            v + (1 - s) / 2,
                                            '"\n                                    y="'
                                        )
                                        .concat(
                                            k + (1 - s) / 2,
                                            '"\n                                />'
                                        )
                                );
                            }
                        }
                        y[v][k] &&
                            r.push(
                                '<rect\n                            width="'
                                    .concat(
                                        s,
                                        '"\n                            height="'
                                    )
                                    .concat(
                                        s,
                                        '"\n                            key="'
                                    )
                                    .concat(
                                        f++,
                                        '"\n                            fill="#F6B506"\n                            x="'
                                    )
                                    .concat(
                                        v + (1 - s) / 2,
                                        '"\n                            y="'
                                    )
                                    .concat(
                                        k + (1 - s) / 2,
                                        '"\n                        />'
                                    )
                            );
                    }
        for (var I = 0; I < a.length; I++) r.push(a[I]);
        for (var N = 0; N < i.length; N++) r.push(i[N]);
        return r;
    }
    var g = t
            .object()
            .shape({
                width2: t.number()['default'](70),
                width1: t.number()['default'](70),
                width3: t.number()['default'](90),
                posType: t.mixed().oneOf([0, 1])['default'](1),
            }),
        k = function (n, t) {
            try {
                t = g.validateSync(t);
            } catch (o) {
                return console.error(o), '';
            }
            var e = ['width2', 'width1', 'width3', 'posType'].map(function (n) {
                return t[n];
            });
            return c.createRenderer({ listPoints: d })({
                qrcode: n,
                params: e,
            });
        };
    function v(n, t) {
        if (!n) return [];
        for (
            var c = n.getModuleCount(), e = [], r = 0, a = [], i = 0;
            i < c;
            i++
        )
            for (var s = 0; s < c; s++) a.push([i, s]);
        a.sort(function () {
            return 0.5 - Math.random();
        });
        for (var l = 0; l < a.length; l++) {
            var h = a[l][0],
                u = a[l][1];
            if (n.isDark(h, u)) {
                var f = o.rand(0.8, 1.3),
                    y = o.rand(50, 230),
                    p = [
                        'rgb(' +
                            Math.floor(20 + y) +
                            ',' +
                            Math.floor(170 - y / 2) +
                            ',' +
                            Math.floor(60 + 2 * y) +
                            ')',
                        'rgb(' +
                            Math.floor(-20 + y) +
                            ',' +
                            Math.floor(130 - y / 2) +
                            ',' +
                            Math.floor(20 + 2 * y) +
                            ')',
                    ];
                e.push(
                    '<rect\n                    key="'
                        .concat(
                            r++,
                            '"\n                    opacity="0.9"\n                    fill="'
                        )
                        .concat(p[1], '"\n                    width="')
                        .concat(1 * f + 0.15, '"\n                    height="')
                        .concat(1 * f + 0.15, '"\n                    x="')
                        .concat(h - (f - 1) / 2, '"\n                    y="')
                        .concat(u - (f - 1) / 2, '"\n                />')
                ),
                    e.push(
                        '<rect\n                    key="'
                            .concat(r++, '"\n                    fill="')
                            .concat(p[0], '"\n                    width="')
                            .concat(1 * f, '"\n                    height="')
                            .concat(1 * f, '"\n                    x="')
                            .concat(
                                h - (f - 1) / 2,
                                '"\n                    y="'
                            )
                            .concat(u - (f - 1) / 2, '"\n                />')
                    );
            }
        }
        return e;
    }
    var m = function (n) {
        return c.createRenderer({ listPoints: v })({ qrcode: n });
    };
    function x(n, t) {
        if (!n) return [];
        var c = n.getModuleCount(),
            o = e.getTypeTable(n),
            r = new Array(c),
            a = 1.001,
            i = 1.001,
            s = t[0],
            l = t[1],
            h = t[2],
            u = t[3],
            f = t[4],
            y = 0,
            p = [-Math.sqrt(3) / 2, 0.5],
            d = [Math.sqrt(3) / 2, 0.5],
            g = [0, 0],
            k =
                'matrix(' +
                String(p[0]) +
                ', ' +
                String(p[1]) +
                ', ' +
                String(d[0]) +
                ', ' +
                String(d[1]) +
                ', ' +
                String(g[0]) +
                ', ' +
                String(g[1]) +
                ')';
        s <= 0 && (s = 1), l <= 0 && (l = 1);
        for (var v = 0; v < c; v++)
            for (var m = 0; m < c; m++)
                !1 !== n.isDark(v, m) &&
                    (o[v][m] === e.QRPointType.POS_OTHER ||
                    o[v][m] === e.QRPointType.POS_CENTER
                        ? (r.push(
                              '<rect\n                        width="'
                                  .concat(
                                      i,
                                      '"\n                        height="'
                                  )
                                  .concat(i, '"\n                        key="')
                                  .concat(
                                      y++,
                                      '"\n                        fill="'
                                  )
                                  .concat(h, '"\n                        x="')
                                  .concat(
                                      v + (1 - i) / 2,
                                      '"\n                        y="'
                                  )
                                  .concat(
                                      m + (1 - i) / 2,
                                      '"\n                        transform="'
                                  )
                                  .concat(k, '"\n                    />')
                          ),
                          r.push(
                              '<rect\n                        width="'
                                  .concat(
                                      l,
                                      '"\n                        height="'
                                  )
                                  .concat(i, '"\n                        key="')
                                  .concat(
                                      y++,
                                      '"\n                        fill="'
                                  )
                                  .concat(
                                      u,
                                      '"\n                        x="',
                                      0,
                                      '"\n                        y="',
                                      0,
                                      '"\n                        transform="'
                                  )
                                  .concat(
                                      k +
                                          'translate(' +
                                          String(v + (1 - i) / 2 + i) +
                                          ',' +
                                          String(m + (1 - i) / 2) +
                                          ') skewY(45) ',
                                      '"\n                    />'
                                  )
                          ),
                          r.push(
                              '<rect\n                        width="'
                                  .concat(
                                      i,
                                      '"\n                        height="'
                                  )
                                  .concat(l, '"\n                        key="')
                                  .concat(
                                      y++,
                                      '"\n                        fill="'
                                  )
                                  .concat(
                                      f,
                                      '"\n                        x="',
                                      0,
                                      '"\n                        y="',
                                      0,
                                      '"\n                        transform="'
                                  )
                                  .concat(
                                      k +
                                          'translate(' +
                                          String(v + (1 - i) / 2) +
                                          ',' +
                                          String(m + i + (1 - i) / 2) +
                                          ') skewX(45) ',
                                      '"\n                    />'
                                  )
                          ))
                        : (r.push(
                              '<rect\n                        width="'
                                  .concat(
                                      a,
                                      '"\n                        height="'
                                  )
                                  .concat(a, '"\n                        key="')
                                  .concat(
                                      y++,
                                      '"\n                        fill="'
                                  )
                                  .concat(h, '"\n                        x="')
                                  .concat(
                                      v + (1 - a) / 2,
                                      '"\n                        y="'
                                  )
                                  .concat(
                                      m + (1 - a) / 2,
                                      '"\n                        transform="'
                                  )
                                  .concat(k, '"\n                    />')
                          ),
                          r.push(
                              '<rect\n                        width="'
                                  .concat(
                                      s,
                                      '"\n                        height="'
                                  )
                                  .concat(a, '"\n                        key="')
                                  .concat(
                                      y++,
                                      '"\n                        fill="'
                                  )
                                  .concat(
                                      u,
                                      '"\n                        x="',
                                      0,
                                      '"\n                        y="',
                                      0,
                                      '"\n                        transform="'
                                  )
                                  .concat(
                                      k +
                                          'translate(' +
                                          String(v + (1 - a) / 2 + a) +
                                          ',' +
                                          String(m + (1 - a) / 2) +
                                          ') skewY(45) ',
                                      '"\n                    />'
                                  )
                          ),
                          r.push(
                              '<rect\n                        width="'
                                  .concat(
                                      a,
                                      '"\n                        height="'
                                  )
                                  .concat(s, '"\n                        key="')
                                  .concat(
                                      y++,
                                      '"\n                        fill="'
                                  )
                                  .concat(
                                      f,
                                      '"\n                        x="',
                                      0,
                                      '"\n                        y="',
                                      0,
                                      '"\n                        transform="'
                                  )
                                  .concat(
                                      k +
                                          'translate(' +
                                          String(v + (1 - a) / 2) +
                                          ',' +
                                          String(m + a + (1 - a) / 2) +
                                          ') skewX(45) ',
                                      '"\n                    />'
                                  )
                          )));
        return r;
    }
    function w(n) {
        if (!n) return '0 0 0 0';
        var t = n.getModuleCount();
        return n.$options.isSpace
            ? ''
                  .concat(-t, ' ')
                  .concat(-t / 2, ' ')
                  .concat(2 * t, ' ')
                  .concat(2 * t)
            : ''
                  .concat(3 - t, ' ')
                  .concat(-t / 2, ' ')
                  .concat(2 * t - 6, ' ')
                  .concat(2 * t - 6);
    }
    var C = t
            .object()
            .shape({
                height: t.number()['default'](0.5),
                height2: t.number()['default'](0.5),
                upColor: t.string()['default']('#FF7F89'),
                leftColor: t.string()['default']('#FFD7D9'),
                rightColor: t.string()['default']('#FFEBF3'),
            }),
        D = function (n, t) {
            try {
                t = C.validateSync(t);
            } catch (o) {
                return console.error(o), '';
            }
            var e = [
                'height',
                'height2',
                'upColor',
                'leftColor',
                'rightColor',
            ].map(function (n) {
                return t[n];
            });
            return c.createRenderer({ listPoints: x, getViewBox: w })({
                qrcode: n,
                params: e,
            });
        };
    function T(n, t) {
        if (!n) return [];
        var c = n.getModuleCount(),
            o = e.getTypeTable(n),
            r = new Array(c),
            a = t[1],
            i = t[2] / 100 / 3,
            s = t[3] / 100,
            l = t[4],
            h = t[5],
            u = t[6],
            f = t[7],
            y = 0,
            p = [3, -3],
            d = [3, -3];
        i <= 0 && (i = 1),
            r.push(
                '<image\n            key="'
                    .concat(
                        y++,
                        '"\n            x="0"\n            y="0"\n            width="'
                    )
                    .concat(c, '"\n            height="')
                    .concat(c, '"\n            xlink:href="')
                    .concat(t[0], '"\n        />')
            );
        for (var g = 0; g < c; g++)
            for (var k = 0; k < c; k++)
                if (
                    o[g][k] === e.QRPointType.ALIGN_CENTER ||
                    o[g][k] === e.QRPointType.ALIGN_OTHER ||
                    o[g][k] === e.QRPointType.TIMING
                )
                    n.isDark(g, k)
                        ? 0 === a
                            ? r.push(
                                  '<rect\n                                opacity="'
                                      .concat(
                                          s,
                                          '"\n                                width="'
                                      )
                                      .concat(
                                          i,
                                          '"\n                                height="'
                                      )
                                      .concat(
                                          i,
                                          '"\n                                key="'
                                      )
                                      .concat(
                                          y++,
                                          '"\n                                fill="'
                                      )
                                      .concat(
                                          l,
                                          '"\n                                x="'
                                      )
                                      .concat(
                                          g + (1 - i) / 2,
                                          '"\n                                y="'
                                      )
                                      .concat(
                                          k + (1 - i) / 2,
                                          '"\n                            />'
                                      )
                              )
                            : 1 === a &&
                              r.push(
                                  '<circle\n                                opacity="'
                                      .concat(
                                          s,
                                          '"\n                                r="'
                                      )
                                      .concat(
                                          i / 2,
                                          '"\n                                key="'
                                      )
                                      .concat(
                                          y++,
                                          '"\n                                fill="'
                                      )
                                      .concat(
                                          l,
                                          '"\n                                cx="'
                                      )
                                      .concat(
                                          g + 0.5,
                                          '"\n                                cy="'
                                      )
                                      .concat(
                                          k + 0.5,
                                          '"\n                            />'
                                      )
                              )
                        : 0 === a
                        ? r.push(
                              '<rect\n                                opacity="'
                                  .concat(
                                      s,
                                      '"\n                                width="'
                                  )
                                  .concat(
                                      i,
                                      '"\n                                height="'
                                  )
                                  .concat(
                                      i,
                                      '"\n                                key="'
                                  )
                                  .concat(
                                      y++,
                                      '"\n                                fill="'
                                  )
                                  .concat(
                                      h,
                                      '"\n                                x="'
                                  )
                                  .concat(
                                      g + (1 - i) / 2,
                                      '"\n                                y="'
                                  )
                                  .concat(
                                      k + (1 - i) / 2,
                                      '"\n                            />'
                                  )
                          )
                        : 1 === a &&
                          r.push(
                              '<circle\n                                opacity="'
                                  .concat(
                                      s,
                                      '"\n                                r="'
                                  )
                                  .concat(
                                      i / 2,
                                      '"\n                                key="'
                                  )
                                  .concat(
                                      y++,
                                      '"\n                                fill="'
                                  )
                                  .concat(
                                      h,
                                      '"\n                                cx="'
                                  )
                                  .concat(
                                      g + 0.5,
                                      '"\n                                cy="'
                                  )
                                  .concat(
                                      k + 0.5,
                                      '"\n                            />'
                                  )
                          );
                else if (o[g][k] === e.QRPointType.POS_CENTER) {
                    if (n.isDark(g, k))
                        if (0 === u)
                            r.push(
                                '<rect\n                                width="'
                                    .concat(
                                        1,
                                        '"\n                                height="',
                                        1,
                                        '"\n                                key="',
                                        y++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        f,
                                        '"\n                                x="'
                                    )
                                    .concat(
                                        g,
                                        '"\n                                y="'
                                    )
                                    .concat(
                                        k,
                                        '"\n                            />'
                                    )
                            );
                        else if (1 === u)
                            r.push(
                                '<circle\n                                key="'
                                    .concat(
                                        y++,
                                        '"\n                                fill="white"\n                                cx="'
                                    )
                                    .concat(
                                        g + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        k + 0.5,
                                        '"\n                                r="',
                                        5,
                                        '"\n                            />'
                                    )
                            ),
                                r.push(
                                    '<circle\n                                key="'
                                        .concat(
                                            y++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            g + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            k + 0.5,
                                            '"\n                                r="',
                                            1.5,
                                            '"\n                            />'
                                        )
                                ),
                                r.push(
                                    '<circle\n                                key="'
                                        .concat(
                                            y++,
                                            '"\n                                fill="none"\n                                stroke-width="1"\n                                stroke="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            g + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            k + 0.5,
                                            '"\n                                r="',
                                            3,
                                            '"\n                            />'
                                        )
                                );
                        else if (2 === u) {
                            r.push(
                                '<circle\n                                key="'
                                    .concat(
                                        y++,
                                        '"\n                                fill="white"\n                                cx="'
                                    )
                                    .concat(
                                        g + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        k + 0.5,
                                        '"\n                                r="',
                                        5,
                                        '"\n                            />'
                                    )
                            ),
                                r.push(
                                    '<circle\n                                key="'
                                        .concat(
                                            y++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            g + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            k + 0.5,
                                            '"\n                                r="',
                                            1.5,
                                            '"\n                            />'
                                        )
                                ),
                                r.push(
                                    '<circle\n                                key="'
                                        .concat(
                                            y++,
                                            '"\n                                fill="none"\n                                stroke-width="0.15"\n                                stroke-dasharray="0.5,0.5"\n                                stroke="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            g + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            k + 0.5,
                                            '"\n                                r="',
                                            3,
                                            '"\n                            />'
                                        )
                                );
                            for (var v = 0; v < p.length; v++)
                                r.push(
                                    '<circle\n                                    key="'
                                        .concat(
                                            y++,
                                            '"\n                                    fill="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                    cx="'
                                        )
                                        .concat(
                                            g + p[v] + 0.5,
                                            '"\n                                    cy="'
                                        )
                                        .concat(
                                            k + 0.5,
                                            '"\n                                    r="',
                                            0.5,
                                            '"\n                                />'
                                        )
                                );
                            for (var m = 0; m < d.length; m++)
                                r.push(
                                    '<circle\n                                    key="'
                                        .concat(
                                            y++,
                                            '"\n                                    fill="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                    cx="'
                                        )
                                        .concat(
                                            g + 0.5,
                                            '"\n                                    cy="'
                                        )
                                        .concat(
                                            k + d[m] + 0.5,
                                            '"\n                                    r="',
                                            0.5,
                                            '"\n                                />'
                                        )
                                );
                        }
                } else
                    o[g][k] === e.QRPointType.POS_OTHER
                        ? n.isDark(g, k)
                            ? 0 === u &&
                              r.push(
                                  '<rect\n                                width="'
                                      .concat(
                                          1,
                                          '"\n                                height="',
                                          1,
                                          '"\n                                key="',
                                          y++,
                                          '"\n                                fill="'
                                      )
                                      .concat(
                                          f,
                                          '"\n                                x="'
                                      )
                                      .concat(
                                          g,
                                          '"\n                                y="'
                                      )
                                      .concat(
                                          k,
                                          '"\n                            />'
                                      )
                              )
                            : 0 === u &&
                              r.push(
                                  '<rect\n                                width="'
                                      .concat(
                                          1,
                                          '"\n                                height="',
                                          1,
                                          '"\n                                key="',
                                          y++,
                                          '"\n                                fill="white"\n                                x="'
                                      )
                                      .concat(
                                          g,
                                          '"\n                                y="'
                                      )
                                      .concat(
                                          k,
                                          '"\n                            />'
                                      )
                              )
                        : n.isDark(g, k)
                        ? 0 === a
                            ? r.push(
                                  '<rect\n                                opacity="'
                                      .concat(
                                          s,
                                          '"\n                                width="'
                                      )
                                      .concat(
                                          i,
                                          '"\n                                height="'
                                      )
                                      .concat(
                                          i,
                                          '"\n                                key="'
                                      )
                                      .concat(
                                          y++,
                                          '"\n                                fill="'
                                      )
                                      .concat(
                                          l,
                                          '"\n                                x="'
                                      )
                                      .concat(
                                          g + (1 - i) / 2,
                                          '"\n                                y="'
                                      )
                                      .concat(
                                          k + (1 - i) / 2,
                                          '"\n                            />'
                                      )
                              )
                            : 1 === a &&
                              r.push(
                                  '<circle\n                                opacity="'
                                      .concat(
                                          s,
                                          '"\n                                r="'
                                      )
                                      .concat(
                                          i / 2,
                                          '"\n                                key="'
                                      )
                                      .concat(
                                          y++,
                                          '"\n                                fill="'
                                      )
                                      .concat(
                                          l,
                                          '"\n                                cx="'
                                      )
                                      .concat(
                                          g + 0.5,
                                          '"\n                                cy="'
                                      )
                                      .concat(
                                          k + 0.5,
                                          '"\n                            />'
                                      )
                              )
                        : 0 === a
                        ? r.push(
                              '<rect\n                                opacity="'
                                  .concat(
                                      s,
                                      '"\n                                width="'
                                  )
                                  .concat(
                                      i,
                                      '"\n                                height="'
                                  )
                                  .concat(
                                      i,
                                      '"\n                                key="'
                                  )
                                  .concat(
                                      y++,
                                      '"\n                                fill="'
                                  )
                                  .concat(
                                      h,
                                      '"\n                                x="'
                                  )
                                  .concat(
                                      g + (1 - i) / 2,
                                      '"\n                                y="'
                                  )
                                  .concat(
                                      k + (1 - i) / 2,
                                      '"\n                            />'
                                  )
                          )
                        : 1 === a &&
                          r.push(
                              '<circle\n                                opacity="'
                                  .concat(
                                      s,
                                      '"\n                                r="'
                                  )
                                  .concat(
                                      i / 2,
                                      '"\n                                key="'
                                  )
                                  .concat(
                                      y++,
                                      '"\n                                fill="'
                                  )
                                  .concat(
                                      h,
                                      '"\n                                cx="'
                                  )
                                  .concat(
                                      g + 0.5,
                                      '"\n                                cy="'
                                  )
                                  .concat(
                                      k + 0.5,
                                      '"\n                            />'
                                  )
                          );
        return r;
    }
    var P = t
            .object()
            .shape({
                backgroudImage: t.string(),
                type: t.mixed().oneOf([0, 1])['default'](0),
                size: t.number()['default'](100),
                opacity: t.number()['default'](100),
                otherColorDark: t.string()['default']('#000000'),
                otherColorLight: t.string()['default']('#FFFFFF'),
                posType: t.mixed().oneOf([0, 1, 2])['default'](0),
                posColor: t.string()['default']('#000000'),
            }),
        E = function (n) {
            var t =
                arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
            try {
                t = P.validateSync(t);
            } catch (r) {
                return console.error(r), '';
            }
            var e = [
                    'backgroudImage',
                    'type',
                    'size',
                    'opacity',
                    'otherColorDark',
                    'otherColorLight',
                    'posType',
                    'posColor',
                ].map(function (n) {
                    return t[n];
                }),
                o = c.createRenderer({ listPoints: T })({
                    qrcode: n,
                    params: e,
                });
            return o;
        };
    var b = function (n) {
            var t = n.qrcode,
                c = n.params,
                o = c[5],
                a = t.$options,
                i = a.width,
                s = a.height;
            return new Promise(function (n, a) {
                (function (n, t, c, e) {
                    var o = document.createElement('canvas'),
                        a = o.getContext('2d'),
                        i = document.createElement('img'),
                        s = [];
                    (o.style.imageRendering = 'pixelated'),
                        (t *= 3),
                        (i.src = n[0]);
                    var l = n[1] / 100,
                        h = n[2] / 100;
                    return new Promise(function (n) {
                        i.onload = function () {
                            (o.width = t),
                                (o.height = t),
                                (a.imageSmoothingEnabled = !1),
                                a.drawImage(i, 0, 0, t, t);
                            for (var e = 0; e < o.width; e++)
                                for (var u = 0; u < o.height; u++) {
                                    var f = a.getImageData(e, u, 1, 1).data,
                                        y = r.gamma(f[0], f[1], f[2]);
                                    Math.random() >
                                        (y / 255 + h - 0.5) * (l + 1) + 0.5 &&
                                        (e % 3 != 1 || u % 3 != 1) &&
                                        s.push(
                                            '<use\n                                key="'
                                                .concat(
                                                    'g_' + e + '_' + u,
                                                    '"\n                                x="'
                                                )
                                                .concat(
                                                    e,
                                                    '"\n                                y="'
                                                )
                                                .concat(
                                                    u,
                                                    '"\n                                xlink:href="'
                                                )
                                                .concat(
                                                    c,
                                                    '"\n                            />'
                                                )
                                        );
                                }
                            n(s);
                        };
                    });
                })(c, t.getModuleCount(), '#S-black')
                    .then(function (r) {
                        var a = '<svg\n            className="Qr-item-svg"\n            width="'
                            .concat(i, '"\n            height="')
                            .concat(s, '"\n            viewBox="')
                            .concat(
                                (function (n) {
                                    if (!n) return '0 0 0 0';
                                    var t = 3 * n.getModuleCount();
                                    return n.$options.isSpace
                                        ? ''
                                              .concat(-t / 5, ' ')
                                              .concat(-t / 5, ' ')
                                              .concat(t + (t / 5) * 2, ' ')
                                              .concat(t + (t / 5) * 2)
                                        : ''
                                              .concat(0, ' ', 0, ' ', t, ' ')
                                              .concat(t);
                                })(t),
                                '"\n            fill="white"\n            xmlns="http://www.w3.org/2000/svg"\n            xmlns:xlink="http://www.w3.org/1999/xlink"\n        >\n            <defs>\n                <rect\n                    id="B-black"\n                    fill="'
                            )
                            .concat(
                                o,
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
                                o,
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
                                r
                                    .concat(
                                        (function (n, t) {
                                            if (!n) return [];
                                            for (
                                                var c = n.getModuleCount(),
                                                    o = e.getTypeTable(n),
                                                    r = new Array(c),
                                                    a = t[3],
                                                    i = t[4],
                                                    s = t[6],
                                                    l = 0,
                                                    h = 0;
                                                h < c;
                                                h++
                                            )
                                                for (var u = 0; u < c; u++) {
                                                    var f = 3 * h,
                                                        y = 3 * u;
                                                    o[h][u] ===
                                                        e.QRPointType
                                                            .ALIGN_CENTER ||
                                                    o[h][u] ===
                                                        e.QRPointType
                                                            .ALIGN_OTHER
                                                        ? n.isDark(h, u)
                                                            ? 2 === a
                                                                ? r.push(
                                                                      '<use\n                                key="'
                                                                          .concat(
                                                                              l++,
                                                                              '"\n                                xlink:href="#B-black"\n                                x="'
                                                                          )
                                                                          .concat(
                                                                              f -
                                                                                  0.03,
                                                                              '"\n                                y="'
                                                                          )
                                                                          .concat(
                                                                              y -
                                                                                  0.03,
                                                                              '"\n                            />'
                                                                          )
                                                                  )
                                                                : r.push(
                                                                      '<use\n                                key="'
                                                                          .concat(
                                                                              l++,
                                                                              '"\n                                xlink:href="#S-black"\n                                x="'
                                                                          )
                                                                          .concat(
                                                                              f +
                                                                                  1 -
                                                                                  0.01,
                                                                              '"\n                                y="'
                                                                          )
                                                                          .concat(
                                                                              y +
                                                                                  1 -
                                                                                  0.01,
                                                                              '"\n                            />'
                                                                          )
                                                                  )
                                                            : 0 === a
                                                            ? r.push(
                                                                  '<use\n                                key="'
                                                                      .concat(
                                                                          l++,
                                                                          '"\n                                xlink:href="#S-white"\n                                x="'
                                                                      )
                                                                      .concat(
                                                                          f + 1,
                                                                          '"\n                                y=\''
                                                                      )
                                                                      .concat(
                                                                          y + 1,
                                                                          "'\n                            />"
                                                                      )
                                                              )
                                                            : r.push(
                                                                  '<use\n                                key="'
                                                                      .concat(
                                                                          l++,
                                                                          '"\n                                xlink:href="#B-white"\n                                x="'
                                                                      )
                                                                      .concat(
                                                                          f -
                                                                              0.03,
                                                                          '"\n                                y="'
                                                                      )
                                                                      .concat(
                                                                          y -
                                                                              0.03,
                                                                          '"\n                            />'
                                                                      )
                                                              )
                                                        : o[h][u] ===
                                                          e.QRPointType.TIMING
                                                        ? n.isDark(h, u)
                                                            ? 2 === i
                                                                ? r.push(
                                                                      '<use\n                                key="'
                                                                          .concat(
                                                                              l++,
                                                                              '"\n                                xlink:href="#B-black"\n                                x="'
                                                                          )
                                                                          .concat(
                                                                              f -
                                                                                  0.03,
                                                                              '"\n                                y="'
                                                                          )
                                                                          .concat(
                                                                              y -
                                                                                  0.03,
                                                                              '"\n                            />'
                                                                          )
                                                                  )
                                                                : r.push(
                                                                      '<use\n                                key="'
                                                                          .concat(
                                                                              l++,
                                                                              '"\n                                xlink:href="#S-black"\n                                x="'
                                                                          )
                                                                          .concat(
                                                                              f +
                                                                                  1,
                                                                              '"\n                                y="'
                                                                          )
                                                                          .concat(
                                                                              y +
                                                                                  1,
                                                                              '"\n                            />'
                                                                          )
                                                                  )
                                                            : 0 === i
                                                            ? r.push(
                                                                  '<use\n                                key="'
                                                                      .concat(
                                                                          l++,
                                                                          '"\n                                xlink:href="#S-white"\n                                x="'
                                                                      )
                                                                      .concat(
                                                                          f + 1,
                                                                          '"\n                                y="'
                                                                      )
                                                                      .concat(
                                                                          y + 1,
                                                                          '"\n                            />'
                                                                      )
                                                              )
                                                            : r.push(
                                                                  '<use\n                                key="'
                                                                      .concat(
                                                                          l++,
                                                                          '"\n                                xlink:href="#B-white"\n                                x="'
                                                                      )
                                                                      .concat(
                                                                          f -
                                                                              0.03,
                                                                          '"\n                                y="'
                                                                      )
                                                                      .concat(
                                                                          y -
                                                                              0.03,
                                                                          '"\n                            />'
                                                                      )
                                                              )
                                                        : o[h][u] ===
                                                          e.QRPointType
                                                              .POS_CENTER
                                                        ? n.isDark(h, u) &&
                                                          r.push(
                                                              '<use\n                            key="'
                                                                  .concat(
                                                                      l++,
                                                                      '"\n                            fill="'
                                                                  )
                                                                  .concat(
                                                                      s,
                                                                      '"\n                            xlink:href="#B"\n                            x="'
                                                                  )
                                                                  .concat(
                                                                      f - 0.03,
                                                                      '"\n                            y="'
                                                                  )
                                                                  .concat(
                                                                      y - 0.03,
                                                                      '"\n                        />'
                                                                  )
                                                          )
                                                        : o[h][u] ===
                                                          e.QRPointType
                                                              .POS_OTHER
                                                        ? n.isDark(h, u)
                                                            ? r.push(
                                                                  '<use\n                            key="'
                                                                      .concat(
                                                                          l++,
                                                                          '"\n                            fill="'
                                                                      )
                                                                      .concat(
                                                                          s,
                                                                          '"\n                            xlink:href="#B"\n                            x="'
                                                                      )
                                                                      .concat(
                                                                          f -
                                                                              0.03,
                                                                          '"\n                            y="'
                                                                      )
                                                                      .concat(
                                                                          y -
                                                                              0.03,
                                                                          '"\n                        />'
                                                                      )
                                                              )
                                                            : r.push(
                                                                  '<use\n                            key="'
                                                                      .concat(
                                                                          l++,
                                                                          '"\n                            xlink:href="#B-white"\n                            x="'
                                                                      )
                                                                      .concat(
                                                                          f -
                                                                              0.03,
                                                                          '"\n                            y="'
                                                                      )
                                                                      .concat(
                                                                          y -
                                                                              0.03,
                                                                          '"\n                        />'
                                                                      )
                                                              )
                                                        : n.isDark(h, u) &&
                                                          r.push(
                                                              '<use\n                            key="'
                                                                  .concat(
                                                                      l++,
                                                                      '"\n                            xlink:href="#S-black"\n                            x="'
                                                                  )
                                                                  .concat(
                                                                      f + 1,
                                                                      '"\n                            y="'
                                                                  )
                                                                  .concat(
                                                                      y + 1,
                                                                      '"\n                        />'
                                                                  )
                                                          );
                                                }
                                            return r;
                                        })(t, c)
                                    )
                                    .join(''),
                                '\n        </svg>'
                            );
                        n(a);
                    })
                    ['catch'](function (t) {
                        n(t);
                    });
            });
        },
        B = t
            .object()
            .shape({
                backgroudImage: t.string()['default'](),
                contrast: t.number()['default'](0),
                exposure: t.number()['default'](0),
                alignType: t.mixed().oneOf([0, 1, 2])['default'](0),
                timingType: t.mixed().oneOf([0, 1, 2])['default'](0),
                otherColor: t.string()['default']('#000000'),
                posColor: t.string()['default']('#000000'),
            }),
        M = function (n) {
            var t =
                arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
            try {
                t = B.validateSync(t);
            } catch (e) {
                return console.error(e), '';
            }
            var c = [
                'backgroudImage',
                'contrast',
                'exposure',
                'alignType',
                'timingType',
                'otherColor',
                'posColor',
            ].map(function (n) {
                return t[n];
            });
            return b({ qrcode: n, params: c });
        };
    function L(n, t) {
        if (!n) return [];
        for (
            var c = n.getModuleCount(),
                r = e.getTypeTable(n),
                a = [],
                i = [],
                s = [],
                l = 0,
                h = t[0],
                u = t[1],
                f = [],
                y = [],
                p = 0;
            p < c;
            p++
        ) {
            (f[p] = []), (y[p] = []);
            for (var d = 0; d < c; d++) (f[p][d] = !0), (y[p][d] = !0);
        }
        for (var g = 0; g < c; g++)
            for (var k = 0; k < c; k++)
                if (n.isDark(k, g) && r[k][g] === e.QRPointType.POS_CENTER)
                    a.push(
                        '<circle\n                        key="'
                            .concat(l++, '"\n                        fill="')
                            .concat(u, '"\n                        cx="')
                            .concat(k + 0.5, '"\n                        cy="')
                            .concat(
                                g + 0.5,
                                '"\n                        r="',
                                1.5,
                                '"\n                    />'
                            )
                    ),
                        a.push(
                            '<circle\n                        key="'
                                .concat(
                                    l++,
                                    '"\n                        fill="none"\n                        stroke-width="1"\n                        stroke="'
                                )
                                .concat(u, '"\n                        cx="')
                                .concat(
                                    k + 0.5,
                                    '"\n                        cy="'
                                )
                                .concat(
                                    g + 0.5,
                                    '"\n                        r="',
                                    3,
                                    '"\n                    />'
                                )
                        );
                else if (n.isDark(k, g) && r[k][g] === e.QRPointType.POS_OTHER);
                else {
                    if (f[k][g] && y[k][g] && k < c - 2 && g < c - 2) {
                        for (var v = !0, m = 0; m < 3; m++)
                            for (var x = 0; x < 3; x++)
                                !1 === y[k + m][g + x] && (v = !1);
                        if (
                            v &&
                            n.isDark(k + 1, g) &&
                            n.isDark(k + 1, g + 2) &&
                            n.isDark(k, g + 1) &&
                            n.isDark(k + 2, g + 1)
                        ) {
                            i.push(
                                '<circle\n                                key="'
                                    .concat(
                                        l++,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        k + 1 + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        g + 1 + 0.5,
                                        '"\n                                r="',
                                        1,
                                        '"\n                                fill="#FFFFFF"\n                                stroke="'
                                    )
                                    .concat(
                                        h,
                                        '"\n                                stroke-width="'
                                    )
                                    .concat(
                                        o.rand(0.33, 0.6),
                                        '"\n                            />'
                                    )
                            ),
                                n.isDark(k + 1, g + 1) &&
                                    i.push(
                                        '<circle\n                                    r="'
                                            .concat(
                                                0.5 * o.rand(0.5, 1),
                                                '"\n                                    key="'
                                            )
                                            .concat(
                                                l++,
                                                '"\n                                    fill="'
                                            )
                                            .concat(
                                                h,
                                                '"\n                                    cx="'
                                            )
                                            .concat(
                                                k + 1 + 0.5,
                                                '"\n                                    cy="'
                                            )
                                            .concat(
                                                g + 1 + 0.5,
                                                '"\n                                />'
                                            )
                                    ),
                                (f[k + 1][g] = !1),
                                (f[k][g + 1] = !1),
                                (f[k + 2][g + 1] = !1),
                                (f[k + 1][g + 2] = !1);
                            for (var w = 0; w < 3; w++)
                                for (var C = 0; C < 3; C++)
                                    y[k + w][g + C] = !1;
                        }
                    }
                    if (
                        k < c - 1 &&
                        g < c - 1 &&
                        n.isDark(k, g) &&
                        n.isDark(k + 1, g) &&
                        n.isDark(k, g + 1) &&
                        n.isDark(k + 1, g + 1)
                    ) {
                        i.push(
                            '<circle\n                                key="'
                                .concat(
                                    l++,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    k + 1,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    g + 1,
                                    '"\n                                r="'
                                )
                                .concat(
                                    Math.sqrt(0.5),
                                    '"\n                                fill="#FFFFFF"\n                                stroke="'
                                )
                                .concat(
                                    h,
                                    '"\n                                stroke-width="'
                                )
                                .concat(
                                    o.rand(0.33, 0.6),
                                    '"\n                            />'
                                )
                        );
                        for (var D = 0; D < 2; D++)
                            for (var T = 0; T < 2; T++)
                                (f[k + D][g + T] = !1), (y[k + D][g + T] = !1);
                    }
                    f[k][g] &&
                        g < c - 1 &&
                        n.isDark(k, g) &&
                        n.isDark(k, g + 1) &&
                        (a.push(
                            '<circle\n                                key="'
                                .concat(
                                    l++,
                                    '"\n                                cx="'
                                )
                                .concat(
                                    k + 0.5,
                                    '"\n                                cy="'
                                )
                                .concat(
                                    g + 1,
                                    '"\n                                r="'
                                )
                                .concat(
                                    0.5 * o.rand(0.95, 1.05),
                                    '"\n                                fill="#FFFFFF"\n                                stroke="'
                                )
                                .concat(
                                    h,
                                    '"\n                                stroke-width="'
                                )
                                .concat(
                                    o.rand(0.36, 0.4),
                                    '"\n                            />'
                                )
                        ),
                        (f[k][g] = !1),
                        (f[k][g + 1] = !1)),
                        f[k][g] &&
                            k < c - 1 &&
                            n.isDark(k, g) &&
                            n.isDark(k + 1, g) &&
                            (a.push(
                                '<circle\n                                key="'
                                    .concat(
                                        l++,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        k + 1,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        g + 0.5,
                                        '"\n                                r="'
                                    )
                                    .concat(
                                        0.5 * o.rand(0.95, 1.05),
                                        '"\n                                fill="#FFFFFF"\n                                stroke="'
                                    )
                                    .concat(
                                        h,
                                        '"\n                                stroke-width="'
                                    )
                                    .concat(
                                        o.rand(0.36, 0.4),
                                        '"\n                            />'
                                    )
                            ),
                            (f[k][g] = !1),
                            (f[k + 1][g] = !1)),
                        f[k][g] &&
                            (n.isDark(k, g)
                                ? a.push(
                                      '<circle\n                                r="'
                                          .concat(
                                              0.5 * o.rand(0.5, 1),
                                              '"\n                                key="'
                                          )
                                          .concat(
                                              l++,
                                              '"\n                                fill="'
                                          )
                                          .concat(
                                              h,
                                              '"\n                                cx="'
                                          )
                                          .concat(
                                              k + 0.5,
                                              '"\n                                cy="'
                                          )
                                          .concat(
                                              g + 0.5,
                                              '"\n                            />'
                                          )
                                  )
                                : r[k][g] === e.QRPointType.DATA &&
                                  o.rand(0, 1) > 0.85 &&
                                  s.push(
                                      '<circle\n                                    r="'
                                          .concat(
                                              0.5 * o.rand(0.85, 1.3),
                                              '"\n                                    key="'
                                          )
                                          .concat(
                                              l++,
                                              '"\n                                    fill="#FFFFFF"\n                                    stroke="'
                                          )
                                          .concat(
                                              h,
                                              '"\n                                    stroke-width="'
                                          )
                                          .concat(
                                              o.rand(0.15, 0.33),
                                              '"\n                                    cx="'
                                          )
                                          .concat(
                                              k + 0.5,
                                              '"\n                                    cy="'
                                          )
                                          .concat(
                                              g + 0.5,
                                              '"\n                                />'
                                          )
                                  ));
                }
        for (var P = 0; P < i.length; P++) a.push(i[P]);
        for (var E = 0; E < s.length; E++) a.push(s[E]);
        return a;
    }
    var O = t
            .object()
            .shape({
                otherColor: t.string()['default']('#8ED1FC'),
                posColor: t.string()['default']('#0693E3'),
            }),
        R = function (n, t) {
            try {
                t = O.validateSync(t);
            } catch (o) {
                return console.error(o), '';
            }
            var e = ['otherColor', 'posColor'].map(function (n) {
                return t[n];
            });
            return c.createRenderer({ listPoints: L })({
                qrcode: n,
                params: e,
            });
        };
    function S(n, t) {
        if (!n) return [];
        var c = n.getModuleCount(),
            o = e.getTypeTable(n),
            r = new Array(c),
            a = t[0],
            i = t[1] / 100,
            s = t[1],
            l = t[3],
            h = 0,
            u = t[4],
            f = t[5],
            y = t[6],
            p = [3, -3],
            d = [3, -3];
        i <= 0 && (i = 1),
            1 === s &&
                1 === a &&
                r.push(
                    '<circle\n                key="'
                        .concat(
                            h++,
                            '"\n                fill="none"\n                stroke-width="'
                        )
                        .concat(c / 15, '"\n                stroke="')
                        .concat(f, '"\n                cx="')
                        .concat(c / 2, '"\n                cy="')
                        .concat(c / 2, '"\n                r="')
                        .concat(
                            ((c / 2) * Math.sqrt(2) * 13) / 40,
                            '"\n            />'
                        )
                );
        for (var g = 0; g < c; g++)
            for (var k = 0; k < c; k++)
                if (n.isDark(g, k) && o[g][k] === e.QRPointType.POS_CENTER)
                    if (0 === l)
                        r.push(
                            '<rect\n                            width="'
                                .concat(
                                    1,
                                    '"\n                            height="',
                                    1,
                                    '"\n                            key="',
                                    h++,
                                    '"\n                            fill="'
                                )
                                .concat(y, '"\n                            x="')
                                .concat(g, '"\n                            y="')
                                .concat(k, '"\n                        />')
                        );
                    else if (1 === l)
                        r.push(
                            '<circle\n                            key="'
                                .concat(
                                    h++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    y,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    g + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    k + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        ),
                            r.push(
                                '<circle\n                            key="'
                                    .concat(
                                        h++,
                                        '"\n                            fill="none"\n                            stroke-width="1"\n                            stroke="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            cx="'
                                    )
                                    .concat(
                                        g + 0.5,
                                        '"\n                            cy="'
                                    )
                                    .concat(
                                        k + 0.5,
                                        '"\n                            r="',
                                        3,
                                        '"\n                        />'
                                    )
                            );
                    else if (2 === l) {
                        r.push(
                            '<circle\n                            key="'
                                .concat(
                                    h++,
                                    '"\n                            fill="'
                                )
                                .concat(
                                    y,
                                    '"\n                            cx="'
                                )
                                .concat(
                                    g + 0.5,
                                    '"\n                            cy="'
                                )
                                .concat(
                                    k + 0.5,
                                    '"\n                            r="',
                                    1.5,
                                    '"\n                        />'
                                )
                        ),
                            r.push(
                                '<circle\n                            key="'
                                    .concat(
                                        h++,
                                        '"\n                            fill="none"\n                            stroke-width="0.15"\n                            stroke-dasharray="0.5,0.5"\n                            stroke="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            cx="'
                                    )
                                    .concat(
                                        g + 0.5,
                                        '"\n                            cy="'
                                    )
                                    .concat(
                                        k + 0.5,
                                        '"\n                            r="',
                                        3,
                                        '"\n                        />'
                                    )
                            );
                        for (var v = 0; v < p.length; v++)
                            r.push(
                                '<circle\n                                key="'
                                    .concat(
                                        h++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        g + p[v] + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        k + 0.5,
                                        '"\n                                r="',
                                        0.5,
                                        '"\n                            />'
                                    )
                            );
                        for (var m = 0; m < d.length; m++)
                            r.push(
                                '<circle\n                                key="'
                                    .concat(
                                        h++,
                                        '"\n                                fill="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                                cx="'
                                    )
                                    .concat(
                                        g + 0.5,
                                        '"\n                                cy="'
                                    )
                                    .concat(
                                        k + d[m] + 0.5,
                                        '"\n                                r="',
                                        0.5,
                                        '"\n                            />'
                                    )
                            );
                    } else
                        3 === l &&
                            (r.push(
                                '<circle\n                            key="'
                                    .concat(
                                        h++,
                                        '"\n                            fill="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            cx="'
                                    )
                                    .concat(
                                        g + 0.5,
                                        '"\n                            cy="'
                                    )
                                    .concat(
                                        k + 0.5,
                                        '"\n                            r="',
                                        1.5,
                                        '"\n                        />'
                                    )
                            ),
                            r.push(
                                '<path\n                            key="'
                                    .concat(
                                        h++,
                                        '"\n                            d="'
                                    )
                                    .concat(
                                        'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z',
                                        '"\n                            stroke="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            stroke-width="'
                                    )
                                    .concat(
                                        14.16666666666667,
                                        '"\n                            fill="none"\n                            transform="'
                                    )
                                    .concat(
                                        'translate(' +
                                            String(g - 2.5) +
                                            ',' +
                                            String(k - 2.5) +
                                            ') scale(' +
                                            String(0.06) +
                                            ',' +
                                            String(0.06) +
                                            ')',
                                        '"\n                        />'
                                    )
                            ));
                else if (n.isDark(g, k) && o[g][k] === e.QRPointType.POS_OTHER)
                    0 === l &&
                        r.push(
                            '<rect\n                            width="'
                                .concat(
                                    1,
                                    '"\n                            height="',
                                    1,
                                    '"\n                            key="',
                                    h++,
                                    '"\n                            fill="'
                                )
                                .concat(y, '"\n                            x="')
                                .concat(g, '"\n                            y="')
                                .concat(k, '"\n                        />')
                        );
                else {
                    var x =
                        Math.sqrt(
                            Math.pow((c - 1) / 2 - g, 2) +
                                Math.pow((c - 1) / 2 - k, 2)
                        ) /
                        ((c / 2) * Math.sqrt(2));
                    if (0 === s) {
                        var w = (1 - Math.cos(Math.PI * x)) / 6 + 0.2,
                            C = u,
                            D = Number(n.isDark(g, k));
                        0 === a
                            ? ((w += 0.2),
                              r.push(
                                  '<rect\n                                opacity="'
                                      .concat(
                                          D,
                                          '"\n                                width="'
                                      )
                                      .concat(
                                          w,
                                          '"\n                                height="'
                                      )
                                      .concat(
                                          w,
                                          '"\n                                key="'
                                      )
                                      .concat(
                                          h++,
                                          '"\n                                fill="'
                                      )
                                      .concat(
                                          C,
                                          '"\n                                x="'
                                      )
                                      .concat(
                                          g + (1 - w) / 2,
                                          '"\n                                y="'
                                      )
                                      .concat(
                                          k + (1 - w) / 2,
                                          '"\n                            />'
                                      )
                              ))
                            : 1 === a &&
                              r.push(
                                  '<circle\n                                opacity="'
                                      .concat(
                                          D,
                                          '"\n                                r="'
                                      )
                                      .concat(
                                          w,
                                          '"\n                                key="'
                                      )
                                      .concat(
                                          h++,
                                          '"\n                                fill="'
                                      )
                                      .concat(
                                          C,
                                          '"\n                                cx="'
                                      )
                                      .concat(
                                          g + 0.5,
                                          '"\n                                cy="'
                                      )
                                      .concat(
                                          k + 0.5,
                                          '"\n                            />'
                                      )
                              );
                    }
                    if (1 === s) {
                        var T = 0,
                            P = u,
                            E = Number(n.isDark(g, k));
                        x > 0.25 && x < 0.4
                            ? ((T = 0.5), (P = f), (E = 1))
                            : ((T = 1 / 4), 0 === a && (T = 0.15)),
                            0 === a
                                ? ((T = 2 * T + 0.1),
                                  n.isDark(g, k)
                                      ? r.push(
                                            '<rect\n                                    opacity="'
                                                .concat(
                                                    E,
                                                    '"\n                                    width="'
                                                )
                                                .concat(
                                                    T,
                                                    '"\n                                    height="'
                                                )
                                                .concat(
                                                    T,
                                                    '"\n                                    key="'
                                                )
                                                .concat(
                                                    h++,
                                                    '"\n                                    fill="'
                                                )
                                                .concat(
                                                    P,
                                                    '"\n                                    x="'
                                                )
                                                .concat(
                                                    g + (1 - T) / 2,
                                                    '"\n                                    y="'
                                                )
                                                .concat(
                                                    k + (1 - T) / 2,
                                                    '"\n                                />'
                                                )
                                        )
                                      : ((T -= 0.1),
                                        r.push(
                                            '<rect\n                                    opacity="'
                                                .concat(
                                                    E,
                                                    '"\n                                    width="'
                                                )
                                                .concat(
                                                    T,
                                                    '"\n                                    height="'
                                                )
                                                .concat(
                                                    T,
                                                    '"\n                                    key="'
                                                )
                                                .concat(
                                                    h++,
                                                    '"\n                                    stroke="'
                                                )
                                                .concat(
                                                    P,
                                                    '"\n                                    stroke-width="',
                                                    0.1,
                                                    '"\n                                    fill="#FFFFFF"\n                                    x="'
                                                )
                                                .concat(
                                                    g + (1 - T) / 2,
                                                    '"\n                                    y="'
                                                )
                                                .concat(
                                                    k + (1 - T) / 2,
                                                    '"\n                                />'
                                                )
                                        )))
                                : 1 === a &&
                                  (n.isDark(g, k)
                                      ? r.push(
                                            '<circle\n                                    opacity="'
                                                .concat(
                                                    E,
                                                    '"\n                                    r="'
                                                )
                                                .concat(
                                                    T,
                                                    '"\n                                    key="'
                                                )
                                                .concat(
                                                    h++,
                                                    '"\n                                    fill="'
                                                )
                                                .concat(
                                                    P,
                                                    '"\n                                    cx="'
                                                )
                                                .concat(
                                                    g + 0.5,
                                                    '"\n                                    cy="'
                                                )
                                                .concat(
                                                    k + 0.5,
                                                    '"\n                                />'
                                                )
                                        )
                                      : r.push(
                                            '<circle\n                                    opacity="'
                                                .concat(
                                                    E,
                                                    '"\n                                    r="'
                                                )
                                                .concat(
                                                    T,
                                                    '"\n                                    key="'
                                                )
                                                .concat(
                                                    h++,
                                                    '"\n                                    stroke="'
                                                )
                                                .concat(
                                                    P,
                                                    '"\n                                    stroke-width="',
                                                    0.1,
                                                    '"\n                                    fill="#FFFFFF"\n                                    cx="'
                                                )
                                                .concat(
                                                    g + 0.5,
                                                    '"\n                                    cy="'
                                                )
                                                .concat(
                                                    k + 0.5,
                                                    '"\n                                />'
                                                )
                                        ));
                    }
                }
        return r;
    }
    var _ = t
            .object()
            .shape({
                type: t.mixed().oneOf([0, 1])['default'](1),
                size: t.mixed().oneOf([0, 1])['default'](0),
                opacity: t.number()['default'](100),
                posType: t.mixed().oneOf([0, 1, 2, 3])['default'](1),
                otherColor: t.string()['default']('#000000'),
                otherColor2: t.string()['default']('#000000'),
                posColor: t.string()['default']('#000000'),
            }),
        A = t
            .object()
            .shape({
                type: t.mixed().oneOf([0, 1])['default'](1),
                size: t.mixed().oneOf([0, 1])['default'](1),
                opacity: t.number()['default'](100),
                posType: t.mixed().oneOf([0, 1, 2, 3])['default'](1),
                otherColor: t.string()['default']('#ABB8C3'),
                otherColor2: t.string()['default']('#000000'),
                posColor: t.string()['default']('#000000'),
            }),
        F = function (n, t) {
            try {
                t = _.validateSync(t);
            } catch (o) {
                return console.error(o), '';
            }
            var e = [
                'type',
                'size',
                'opacity',
                'posType',
                'otherColor',
                'otherColor2',
                'posColor',
            ].map(function (n) {
                return t[n];
            });
            return c.createRenderer({ listPoints: S })({
                qrcode: n,
                params: e,
            });
        },
        I = function (n, t) {
            try {
                t = A.validateSync(t);
            } catch (o) {
                return console.error(o), '';
            }
            var e = [
                'type',
                'size',
                'opacity',
                'posType',
                'otherColor',
                'otherColor2',
                'posColor',
            ].map(function (n) {
                return t[n];
            });
            return c.createRenderer({ listPoints: S })({
                qrcode: n,
                params: e,
            });
        };
    function N(n, t) {
        if (!n) return [];
        var c = n.getModuleCount(),
            r = e.getTypeTable(n),
            a = new Array(c),
            i = t[0],
            s = t[1] / 100,
            l = t[2] / 100,
            h = t[3],
            u = 0,
            f = t[4],
            y = t[5],
            p = [3, -3],
            d = [3, -3];
        s <= 0 && (s = 1);
        for (var g = [], k = [], v = 0; v < c; v++) {
            (g[v] = []), (k[v] = []);
            for (var m = 0; m < c; m++) (g[v][m] = !0), (k[v][m] = !0);
        }
        for (var x = 0; x < c; x++)
            for (var w = 0; w < c; w++)
                if (!1 !== n.isDark(x, w))
                    if (r[x][w] === e.QRPointType.POS_CENTER)
                        if (0 === h)
                            a.push(
                                '<rect\n                            width="'
                                    .concat(
                                        1,
                                        '"\n                            height="',
                                        1,
                                        '"\n                            key="',
                                        u++,
                                        '"\n                            fill="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            x="'
                                    )
                                    .concat(
                                        x,
                                        '"\n                            y="'
                                    )
                                    .concat(w, '"\n                        />')
                            );
                        else if (1 === h)
                            a.push(
                                '<circle\n                            key="'
                                    .concat(
                                        u++,
                                        '"\n                            fill="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                            cy="'
                                    )
                                    .concat(
                                        w + 0.5,
                                        '"\n                            r="',
                                        1.5,
                                        '"\n                        />'
                                    )
                            ),
                                a.push(
                                    '<circle\n                            key="'
                                        .concat(
                                            u++,
                                            '"\n                            fill="none"\n                            stroke-width="1"\n                            stroke="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                            cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                            cy="'
                                        )
                                        .concat(
                                            w + 0.5,
                                            '"\n                            r="',
                                            3,
                                            '"\n                        />'
                                        )
                                );
                        else if (2 === h) {
                            a.push(
                                '<circle\n                            key="'
                                    .concat(
                                        u++,
                                        '"\n                            fill="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                            cy="'
                                    )
                                    .concat(
                                        w + 0.5,
                                        '"\n                            r="',
                                        1.5,
                                        '"\n                        />'
                                    )
                            ),
                                a.push(
                                    '<circle\n                            key="'
                                        .concat(
                                            u++,
                                            '"\n                            fill="none"\n                            stroke-width="0.15"\n                            strokeDasharray="0.5,0.5"\n                            stroke="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                            cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                            cy="'
                                        )
                                        .concat(
                                            w + 0.5,
                                            '"\n                            r="',
                                            3,
                                            '"\n                        />'
                                        )
                                );
                            for (var C = 0; C < p.length; C++)
                                a.push(
                                    '<circle\n                                key="'
                                        .concat(
                                            u++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            x + p[C] + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            w + 0.5,
                                            '"\n                                r="',
                                            0.5,
                                            '"\n                            />'
                                        )
                                );
                            for (var D = 0; D < d.length; D++)
                                a.push(
                                    '<circle\n                                key="'
                                        .concat(
                                            u++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            w + d[D] + 0.5,
                                            '"\n                                r="',
                                            0.5,
                                            '"\n                            />'
                                        )
                                );
                        } else
                            3 === h &&
                                (a.push(
                                    '<circle\n                            key="'
                                        .concat(
                                            u++,
                                            '"\n                            fill="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                            cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                            cy="'
                                        )
                                        .concat(
                                            w + 0.5,
                                            '"\n                            r="',
                                            1.5,
                                            '"\n                        />'
                                        )
                                ),
                                a.push(
                                    '<path\n                            key="'
                                        .concat(
                                            u++,
                                            '"\n                            d="'
                                        )
                                        .concat(
                                            'M32.048565,-1.29480038e-15 L67.951435,1.29480038e-15 C79.0954192,-7.52316311e-16 83.1364972,1.16032014 87.2105713,3.3391588 C91.2846454,5.51799746 94.4820025,8.71535463 96.6608412,12.7894287 C98.8396799,16.8635028 100,20.9045808 100,32.048565 L100,67.951435 C100,79.0954192 98.8396799,83.1364972 96.6608412,87.2105713 C94.4820025,91.2846454 91.2846454,94.4820025 87.2105713,96.6608412 C83.1364972,98.8396799 79.0954192,100 67.951435,100 L32.048565,100 C20.9045808,100 16.8635028,98.8396799 12.7894287,96.6608412 C8.71535463,94.4820025 5.51799746,91.2846454 3.3391588,87.2105713 C1.16032014,83.1364972 5.01544207e-16,79.0954192 -8.63200256e-16,67.951435 L8.63200256e-16,32.048565 C-5.01544207e-16,20.9045808 1.16032014,16.8635028 3.3391588,12.7894287 C5.51799746,8.71535463 8.71535463,5.51799746 12.7894287,3.3391588 C16.8635028,1.16032014 20.9045808,7.52316311e-16 32.048565,-1.29480038e-15 Z',
                                            '"\n                            stroke="'
                                        )
                                        .concat(
                                            y,
                                            '"\n                            stroke-width="'
                                        )
                                        .concat(
                                            (100 / 6) * (1 - 0.75 * (1 - s)),
                                            '"\n                            fill="none"\n                            transform="',
                                            'translate('
                                                .concat(String(x - 2.5), ',')
                                                .concat(
                                                    String(w - 2.5),
                                                    ') scale('
                                                )
                                                .concat(String(0.06), ',')
                                                .concat(String(0.06), ')'),
                                            '"\n                        />'
                                        )
                                ));
                    else if (r[x][w] === e.QRPointType.POS_OTHER)
                        0 === h &&
                            a.push(
                                '<rect\n                            width="'
                                    .concat(
                                        1,
                                        '"\n                            height="',
                                        1,
                                        '"\n                            key="',
                                        u++,
                                        '"\n                            fill="'
                                    )
                                    .concat(
                                        y,
                                        '"\n                            x="'
                                    )
                                    .concat(
                                        x,
                                        '"\n                            y="'
                                    )
                                    .concat(w, '"\n                        />')
                            );
                    else {
                        if (0 === i) {
                            if (
                                0 === x ||
                                (x > 0 && (!n.isDark(x - 1, w) || !k[x - 1][w]))
                            ) {
                                for (var T = 0, P = !0; P && x + T < c; )
                                    n.isDark(x + T, w) && k[x + T][w]
                                        ? T++
                                        : (P = !1);
                                if (T - 0 > 1) {
                                    for (var E = 0; E < T; E++)
                                        (k[x + E][w] = !1), (g[x + E][w] = !1);
                                    a.push(
                                        '<line\n                                    opacity="'
                                            .concat(
                                                l,
                                                '"\n                                    x1="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                    y1="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                    x2="'
                                            )
                                            .concat(
                                                x + T - 0 - 0.5,
                                                '"\n                                    y2="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                    stroke-width="'
                                            )
                                            .concat(
                                                s,
                                                '"\n                                    stroke="'
                                            )
                                            .concat(
                                                f,
                                                '"\n                                    stroke-linecap="round"\n                                    key="'
                                            )
                                            .concat(
                                                u++,
                                                '"\n                                />'
                                            )
                                    );
                                }
                            }
                            g[x][w] &&
                                a.push(
                                    '<circle\n                                opacity="'
                                        .concat(
                                            l,
                                            '"\n                                r="'
                                        )
                                        .concat(
                                            s / 2,
                                            '"\n                                key="'
                                        )
                                        .concat(
                                            u++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            w + 0.5,
                                            '"\n                            />'
                                        )
                                );
                        }
                        if (1 === i) {
                            if (
                                0 === w ||
                                (w > 0 && (!n.isDark(x, w - 1) || !k[x][w - 1]))
                            ) {
                                for (var b = 0, B = !0; B && w + b < c; )
                                    n.isDark(x, w + b) && k[x][w + b]
                                        ? b++
                                        : (B = !1);
                                if (b - 0 > 1) {
                                    for (var M = 0; M < b; M++)
                                        (k[x][w + M] = !1), (g[x][w + M] = !1);
                                    a.push(
                                        '<line\n                                    opacity="'
                                            .concat(
                                                l,
                                                '"\n                                    x1="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                    y1="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                    x2="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                    y2="'
                                            )
                                            .concat(
                                                w + b - 0 - 1 + 0.5,
                                                '"\n                                    stroke-width="'
                                            )
                                            .concat(
                                                s,
                                                '"\n                                    stroke="'
                                            )
                                            .concat(
                                                f,
                                                '"\n                                    stroke-linecap="round"\n                                    key="'
                                            )
                                            .concat(
                                                u++,
                                                '"\n                                />'
                                            )
                                    );
                                }
                            }
                            g[x][w] &&
                                a.push(
                                    '<circle\n                                opacity="'
                                        .concat(
                                            l,
                                            '"\n                                r="'
                                        )
                                        .concat(
                                            s / 2,
                                            '"\n                                key="'
                                        )
                                        .concat(
                                            u++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            w + 0.5,
                                            '"\n                            />'
                                        )
                                );
                        }
                        if (2 === i) {
                            if (
                                0 === w ||
                                (w > 0 && (!n.isDark(x, w - 1) || !k[x][w - 1]))
                            ) {
                                for (var L = 0, O = !0; O && w + L < c; )
                                    n.isDark(x, w + L) &&
                                    k[x][w + L] &&
                                    L - 0 <= 3
                                        ? L++
                                        : (O = !1);
                                if (L - 0 > 1) {
                                    for (var R = 0; R < L; R++)
                                        (k[x][w + R] = !1), (g[x][w + R] = !1);
                                    a.push(
                                        '<line\n                                    opacity="'
                                            .concat(
                                                l,
                                                '"\n                                    x1="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                    y1="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                    x2="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                    y2="'
                                            )
                                            .concat(
                                                w + L - 0 - 1 + 0.5,
                                                '"\n                                    stroke-width="'
                                            )
                                            .concat(
                                                s,
                                                '"\n                                    stroke="'
                                            )
                                            .concat(
                                                f,
                                                '"\n                                    stroke-linecap="round"\n                                    key="'
                                            )
                                            .concat(
                                                u++,
                                                '"\n                                />'
                                            )
                                    );
                                }
                            }
                            if (
                                0 === x ||
                                (x > 0 && (!n.isDark(x - 1, w) || !k[x - 1][w]))
                            ) {
                                for (var S = 0, _ = !0; _ && x + S < c; )
                                    n.isDark(x + S, w) &&
                                    k[x + S][w] &&
                                    S - 0 <= 3
                                        ? S++
                                        : (_ = !1);
                                if (S - 0 > 1) {
                                    for (var A = 0; A < S; A++)
                                        (k[x + A][w] = !1), (g[x + A][w] = !1);
                                    a.push(
                                        '<line\n                                    opacity="'
                                            .concat(
                                                l,
                                                '"\n                                    x1="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                    y1="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                    x2="'
                                            )
                                            .concat(
                                                x + S - 0 - 0.5,
                                                '"\n                                    y2="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                    stroke-width="'
                                            )
                                            .concat(
                                                s,
                                                '"\n                                    stroke="'
                                            )
                                            .concat(
                                                f,
                                                '"\n                                    stroke-linecap="round"\n                                    key="'
                                            )
                                            .concat(
                                                u++,
                                                '"\n                                />'
                                            )
                                    );
                                }
                            }
                            g[x][w] &&
                                a.push(
                                    '<circle\n                                opacity="'
                                        .concat(
                                            l,
                                            '"\n                                r="'
                                        )
                                        .concat(
                                            s / 2,
                                            '"\n                                key="'
                                        )
                                        .concat(
                                            u++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            w + 0.5,
                                            '"\n                            />'
                                        )
                                );
                        }
                        if (3 === i) {
                            if ((x > w) ^ (x + w < c)) {
                                if (
                                    0 === w ||
                                    (w > 0 &&
                                        (!n.isDark(x, w - 1) || !k[x][w - 1]))
                                ) {
                                    for (var F = 0, I = !0; I && w + F < c; )
                                        n.isDark(x, w + F) &&
                                        k[x][w + F] &&
                                        F - 0 <= 3
                                            ? F++
                                            : (I = !1);
                                    if (F - 0 > 1) {
                                        for (var N = 0; N < F; N++)
                                            (k[x][w + N] = !1),
                                                (g[x][w + N] = !1);
                                        a.push(
                                            '<line\n                                        opacity="'
                                                .concat(
                                                    l,
                                                    '"\n                                        x1="'
                                                )
                                                .concat(
                                                    x + 0.5,
                                                    '"\n                                        y1="'
                                                )
                                                .concat(
                                                    w + 0.5,
                                                    '"\n                                        x2="'
                                                )
                                                .concat(
                                                    x + 0.5,
                                                    '"\n                                        y2="'
                                                )
                                                .concat(
                                                    w + F - 0 - 1 + 0.5,
                                                    '"\n                                        stroke-width="'
                                                )
                                                .concat(
                                                    s,
                                                    '"\n                                        stroke="'
                                                )
                                                .concat(
                                                    f,
                                                    '"\n                                        stroke-linecap="round"\n                                        key="'
                                                )
                                                .concat(
                                                    u++,
                                                    '"\n                                    />'
                                                )
                                        );
                                    }
                                }
                            } else if (
                                0 === x ||
                                (x > 0 && (!n.isDark(x - 1, w) || !k[x - 1][w]))
                            ) {
                                for (var q = 0, H = !0; H && x + q < c; )
                                    n.isDark(x + q, w) &&
                                    k[x + q][w] &&
                                    q - 0 <= 3
                                        ? q++
                                        : (H = !1);
                                if (q - 0 > 1) {
                                    for (var Q = 0; Q < q; Q++)
                                        (k[x + Q][w] = !1), (g[x + Q][w] = !1);
                                    a.push(
                                        '<line\n                                        opacity="'
                                            .concat(
                                                l,
                                                '"\n                                        x1="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                        y1="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                        x2="'
                                            )
                                            .concat(
                                                x + q - 0 - 0.5,
                                                '"\n                                        y2="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                        stroke-width="'
                                            )
                                            .concat(
                                                s,
                                                '"\n                                        stroke="'
                                            )
                                            .concat(
                                                f,
                                                '"\n                                        stroke-linecap="round"\n                                        key="'
                                            )
                                            .concat(
                                                u++,
                                                '"\n                                    />'
                                            )
                                    );
                                }
                            }
                            g[x][w] &&
                                a.push(
                                    '<circle\n                                opacity="'
                                        .concat(
                                            l,
                                            '"\n                                r="'
                                        )
                                        .concat(
                                            s / 2,
                                            '"\n                                key="'
                                        )
                                        .concat(
                                            u++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            w + 0.5,
                                            '"\n                            />'
                                        )
                                );
                        }
                        if (4 === i) {
                            if (
                                0 === w ||
                                0 === x ||
                                (w > 0 &&
                                    x > 0 &&
                                    (!n.isDark(x - 1, w - 1) ||
                                        !k[x - 1][w - 1]))
                            ) {
                                for (
                                    var j = 0, G = !0;
                                    G && w + j < c && x + j < c;

                                )
                                    n.isDark(x + j, w + j) && k[x + j][w + j]
                                        ? j++
                                        : (G = !1);
                                if (j - 0 > 1) {
                                    for (var z = 0; z < j; z++)
                                        (k[x + z][w + z] = !1),
                                            (g[x + z][w + z] = !1);
                                    a.push(
                                        '<line\n                                    opacity="'
                                            .concat(
                                                l,
                                                '"\n                                    x1="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                    y1="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                    x2="'
                                            )
                                            .concat(
                                                x + j - 0 - 1 + 0.5,
                                                '"\n                                    y2="'
                                            )
                                            .concat(
                                                w + j - 0 - 1 + 0.5,
                                                '"\n                                    stroke-width="'
                                            )
                                            .concat(
                                                s,
                                                '"\n                                    stroke="'
                                            )
                                            .concat(
                                                f,
                                                '"\n                                    stroke-linecap="round"\n                                    key="'
                                            )
                                            .concat(
                                                u++,
                                                '"\n                                />'
                                            )
                                    );
                                }
                            }
                            g[x][w] &&
                                a.push(
                                    '<circle\n                                opacity="'
                                        .concat(
                                            l,
                                            '"\n                                r="'
                                        )
                                        .concat(
                                            s / 2,
                                            '"\n                                key="'
                                        )
                                        .concat(
                                            u++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            w + 0.5,
                                            '"\n                            />'
                                        )
                                );
                        }
                        if (5 === i) {
                            if (
                                0 === x ||
                                w === c - 1 ||
                                (x > 0 &&
                                    w < c - 1 &&
                                    (!n.isDark(x - 1, w + 1) ||
                                        !k[x - 1][w + 1]))
                            ) {
                                for (
                                    var K = 0, U = !0;
                                    U && x + K < c && w - K >= 0;

                                )
                                    n.isDark(x + K, w - K) && g[x + K][w - K]
                                        ? K++
                                        : (U = !1);
                                if (K - 0 > 1) {
                                    for (var X = 0; X < K; X++)
                                        (k[x + X][w - X] = !1),
                                            (g[x + X][w - X] = !1);
                                    a.push(
                                        '<line\n                                    opacity="'
                                            .concat(
                                                l,
                                                '"\n                                    x1="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                    y1="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                    x2="'
                                            )
                                            .concat(
                                                x + (K - 0 - 1) + 0.5,
                                                '"\n                                    y2="'
                                            )
                                            .concat(
                                                w - (K - 0 - 1) + 0.5,
                                                '"\n                                    stroke-width="'
                                            )
                                            .concat(
                                                s,
                                                '"\n                                    stroke="'
                                            )
                                            .concat(
                                                f,
                                                '"\n                                    stroke-linecap="round"\n                                    key="'
                                            )
                                            .concat(
                                                u++,
                                                '"\n                                />'
                                            )
                                    );
                                }
                            }
                            g[x][w] &&
                                a.push(
                                    '<circle\n                                opacity="'
                                        .concat(
                                            l,
                                            '"\n                                r="'
                                        )
                                        .concat(
                                            s / 2,
                                            '"\n                                key="'
                                        )
                                        .concat(
                                            u++,
                                            '"\n                                fill="'
                                        )
                                        .concat(
                                            f,
                                            '"\n                                cx="'
                                        )
                                        .concat(
                                            x + 0.5,
                                            '"\n                                cy="'
                                        )
                                        .concat(
                                            w + 0.5,
                                            '"\n                            />'
                                        )
                                );
                        }
                        if (6 === i) {
                            if (
                                0 === x ||
                                w === c - 1 ||
                                (x > 0 &&
                                    w < c - 1 &&
                                    (!n.isDark(x - 1, w + 1) ||
                                        !k[x - 1][w + 1]))
                            ) {
                                for (
                                    var Y = 0, J = !0;
                                    J && x + Y < c && w - Y >= 0;

                                )
                                    n.isDark(x + Y, w - Y) && k[x + Y][w - Y]
                                        ? Y++
                                        : (J = !1);
                                if (Y - 0 > 1) {
                                    for (var $ = 0; $ < Y; $++)
                                        k[x + $][w - $] = !1;
                                    a.push(
                                        '<line\n                                    opacity="'
                                            .concat(
                                                l,
                                                '"\n                                    x1="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                    y1="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                    x2="'
                                            )
                                            .concat(
                                                x + (Y - 0 - 1) + 0.5,
                                                '"\n                                    y2="'
                                            )
                                            .concat(
                                                w - (Y - 0 - 1) + 0.5,
                                                '"\n                                    stroke-width="'
                                            )
                                            .concat(
                                                (s / 2) * o.rand(0.3, 1),
                                                '"\n                                    stroke="'
                                            )
                                            .concat(
                                                f,
                                                '"\n                                    stroke-linecap="round"\n                                    key="'
                                            )
                                            .concat(
                                                u++,
                                                '"\n                                />'
                                            )
                                    );
                                }
                            }
                            if (
                                0 === w ||
                                0 === x ||
                                (w > 0 &&
                                    x > 0 &&
                                    (!n.isDark(x - 1, w - 1) ||
                                        !g[x - 1][w - 1]))
                            ) {
                                for (
                                    var Z = 0, V = !0;
                                    V && w + Z < c && x + Z < c;

                                )
                                    n.isDark(x + Z, w + Z) && g[x + Z][w + Z]
                                        ? Z++
                                        : (V = !1);
                                if (Z - 0 > 1) {
                                    for (var W = 0; W < Z; W++)
                                        g[x + W][w + W] = !1;
                                    a.push(
                                        '<line\n                                    opacity="'
                                            .concat(
                                                l,
                                                '"\n                                    x1="'
                                            )
                                            .concat(
                                                x + 0.5,
                                                '"\n                                    y1="'
                                            )
                                            .concat(
                                                w + 0.5,
                                                '"\n                                    x2="'
                                            )
                                            .concat(
                                                x + Z - 0 - 1 + 0.5,
                                                '"\n                                    y2="'
                                            )
                                            .concat(
                                                w + Z - 0 - 1 + 0.5,
                                                '"\n                                    stroke-width="'
                                            )
                                            .concat(
                                                (s / 2) * o.rand(0.3, 1),
                                                '"\n                                    stroke="'
                                            )
                                            .concat(
                                                f,
                                                '"\n                                    stroke-linecap="round"\n                                    key="'
                                            )
                                            .concat(
                                                u++,
                                                '"\n                                />'
                                            )
                                    );
                                }
                            }
                            a.push(
                                '<circle\n                            opacity="'
                                    .concat(
                                        l,
                                        '"\n                            r="'
                                    )
                                    .concat(
                                        0.5 * o.rand(0.33, 0.9),
                                        '"\n                            key="'
                                    )
                                    .concat(
                                        u++,
                                        '"\n                            fill="'
                                    )
                                    .concat(
                                        f,
                                        '"\n                            cx="'
                                    )
                                    .concat(
                                        x + 0.5,
                                        '"\n                            cy="'
                                    )
                                    .concat(
                                        w + 0.5,
                                        '"\n                        />'
                                    )
                            );
                        }
                    }
        return a;
    }
    var q = t
            .object()
            .shape({
                type: t.mixed().oneOf([0, 1, 2, 3, 4, 5, 6])['default'](2),
                size: t.number()['default'](50),
                opacity: t.number()['default'](100),
                posType: t.mixed().oneOf([0, 1, 2, 3])['default'](3),
                otherColor: t.string()['default']('#000000'),
                posColor: t.string()['default']('#000000'),
            }),
        H = t
            .object()
            .shape({
                type: t.mixed().oneOf([0, 1, 2, 3, 4, 5, 6])['default'](6),
                size: t.number()['default'](50),
                opacity: t.number()['default'](100),
                posType: t.mixed().oneOf([0, 1, 2, 3])['default'](0),
                otherColor: t.string()['default']('#000000'),
                posColor: t.string()['default']('#000000'),
            }),
        Q = function (n, t) {
            try {
                t = q.validateSync(t);
            } catch (o) {
                return console.error(o), '';
            }
            var e = [
                'type',
                'size',
                'opacity',
                'posType',
                'otherColor',
                'posColor',
            ].map(function (n) {
                return t[n];
            });
            return c.createRenderer({ listPoints: N })({
                qrcode: n,
                params: e,
            });
        },
        j = function (n, t) {
            try {
                t = H.validateSync(t);
            } catch (o) {
                return console.error(o), '';
            }
            var e = [
                'type',
                'size',
                'opacity',
                'posType',
                'otherColor',
                'posColor',
            ].map(function (n) {
                return t[n];
            });
            return c.createRenderer({ listPoints: N })({
                qrcode: n,
                params: e,
            });
        };
    function G(n) {
        (this.mode = K.MODE_8BIT_BYTE), (this.data = n), (this.parsedData = []);
        for (var t = 0, c = this.data.length; t < c; t++) {
            var e = [],
                o = this.data.charCodeAt(t);
            o > 65536
                ? ((e[0] = 240 | ((1835008 & o) >>> 18)),
                  (e[1] = 128 | ((258048 & o) >>> 12)),
                  (e[2] = 128 | ((4032 & o) >>> 6)),
                  (e[3] = 128 | (63 & o)))
                : o > 2048
                ? ((e[0] = 224 | ((61440 & o) >>> 12)),
                  (e[1] = 128 | ((4032 & o) >>> 6)),
                  (e[2] = 128 | (63 & o)))
                : o > 128
                ? ((e[0] = 192 | ((1984 & o) >>> 6)), (e[1] = 128 | (63 & o)))
                : (e[0] = o),
                this.parsedData.push(e);
        }
        (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
            this.parsedData.length != this.data.length &&
                (this.parsedData.unshift(191),
                this.parsedData.unshift(187),
                this.parsedData.unshift(239));
    }
    function z(n, t) {
        (this.typeNumber = n),
            (this.errorCorrectLevel = t),
            (this.modules = null),
            (this.moduleCount = 0),
            (this.position = []),
            (this.dataCache = null),
            (this.dataList = []);
    }
    (G.prototype = {
        getLength: function (n) {
            return this.parsedData.length;
        },
        write: function (n) {
            for (var t = 0, c = this.parsedData.length; t < c; t++)
                n.put(this.parsedData[t], 8);
        },
    }),
        (z.prototype = {
            addData: function (n) {
                var t = new G(n);
                this.dataList.push(t), (this.dataCache = null);
            },
            isDark: function (n, t) {
                if (
                    n < 0 ||
                    this.moduleCount <= n ||
                    t < 0 ||
                    this.moduleCount <= t
                )
                    throw new Error(n + ',' + t);
                return this.modules[n][t];
            },
            getModuleCount: function () {
                return this.moduleCount;
            },
            getPositionTable: function () {
                return this.position;
            },
            make: function () {
                if (this.typeNumber < 1) {
                    var n = 1;
                    for (n = 1; n < 40; n++) {
                        for (
                            var t = un.getRSBlocks(n, this.errorCorrectLevel),
                                c = new fn(),
                                e = 0,
                                o = 0;
                            o < t.length;
                            o++
                        )
                            e += t[o].dataCount;
                        for (var r = 0; r < this.dataList.length; r++) {
                            var a = this.dataList[r];
                            c.put(a.mode, 4),
                                c.put(
                                    a.getLength(),
                                    on.getLengthInBits(a.mode, n)
                                ),
                                a.write(c);
                        }
                        if (c.getLengthInBits() <= 8 * e) break;
                    }
                    this.typeNumber = n;
                }
                this.makeImpl(!1, this.getBestMaskPattern());
            },
            makeImpl: function (n, t) {
                (this.moduleCount = 4 * this.typeNumber + 17),
                    (this.modules = new Array(this.moduleCount));
                for (var c = 0; c < this.moduleCount; c++) {
                    this.modules[c] = new Array(this.moduleCount);
                    for (var e = 0; e < this.moduleCount; e++)
                        this.modules[c][e] = null;
                }
                this.setupPositionProbePattern(0, 0),
                    this.setupPositionProbePattern(this.moduleCount - 7, 0),
                    this.setupPositionProbePattern(0, this.moduleCount - 7),
                    this.setupPositionAdjustPattern(),
                    this.setupTimingPattern(),
                    this.setupTypeInfo(n, t),
                    this.typeNumber >= 7 && this.setupTypeNumber(n),
                    null == this.dataCache &&
                        (this.dataCache = z.createData(
                            this.typeNumber,
                            this.errorCorrectLevel,
                            this.dataList
                        )),
                    this.mapData(this.dataCache, t);
            },
            setupPositionProbePattern: function (n, t) {
                for (var c = -1; c <= 7; c++)
                    if (!(n + c <= -1 || this.moduleCount <= n + c))
                        for (var e = -1; e <= 7; e++)
                            t + e <= -1 ||
                                this.moduleCount <= t + e ||
                                (this.modules[n + c][t + e] =
                                    (0 <= c && c <= 6 && (0 == e || 6 == e)) ||
                                    (0 <= e && e <= 6 && (0 == c || 6 == c)) ||
                                    (2 <= c && c <= 4 && 2 <= e && e <= 4));
            },
            getBestMaskPattern: function () {
                for (var n = 0, t = 0, c = 0; c < 8; c++) {
                    this.makeImpl(!0, c);
                    var e = on.getLostPoint(this);
                    (0 == c || n > e) && ((n = e), (t = c));
                }
                return t;
            },
            createMovieClip: function (n, t, c) {
                var e = n.createEmptyMovieClip(t, c);
                this.make();
                for (var o = 0; o < this.modules.length; o++)
                    for (
                        var r = 1 * o, a = 0;
                        a < this.modules[o].length;
                        a++
                    ) {
                        var i = 1 * a;
                        this.modules[o][a] &&
                            (e.beginFill(0, 100),
                            e.moveTo(i, r),
                            e.lineTo(i + 1, r),
                            e.lineTo(i + 1, r + 1),
                            e.lineTo(i, r + 1),
                            e.endFill());
                    }
                return e;
            },
            setupTimingPattern: function () {
                for (var n = 8; n < this.moduleCount - 8; n++)
                    null == this.modules[n][6] &&
                        (this.modules[n][6] = n % 2 == 0);
                for (var t = 8; t < this.moduleCount - 8; t++)
                    null == this.modules[6][t] &&
                        (this.modules[6][t] = t % 2 == 0);
            },
            setupPositionAdjustPattern: function () {
                var n = on.getPatternPosition(this.typeNumber);
                this.position = [];
                for (var t = 0; t < n.length; t++)
                    for (var c = 0; c < n.length; c++) {
                        var e = n[t],
                            o = n[c];
                        if (null == this.modules[e][o]) {
                            this.position.push([e, o]);
                            for (var r = -2; r <= 2; r++)
                                for (var a = -2; a <= 2; a++)
                                    this.modules[e + r][o + a] =
                                        -2 == r ||
                                        2 == r ||
                                        -2 == a ||
                                        2 == a ||
                                        (0 == r && 0 == a);
                        }
                    }
            },
            setupTypeNumber: function (n) {
                for (
                    var t = on.getBCHTypeNumber(this.typeNumber), c = 0;
                    c < 18;
                    c++
                ) {
                    var e = !n && 1 == ((t >> c) & 1);
                    this.modules[Math.floor(c / 3)][
                        (c % 3) + this.moduleCount - 8 - 3
                    ] = e;
                }
                for (var o = 0; o < 18; o++) {
                    var r = !n && 1 == ((t >> o) & 1);
                    this.modules[(o % 3) + this.moduleCount - 8 - 3][
                        Math.floor(o / 3)
                    ] = r;
                }
            },
            setupTypeInfo: function (n, t) {
                for (
                    var c = (this.errorCorrectLevel << 3) | t,
                        e = on.getBCHTypeInfo(c),
                        o = 0;
                    o < 15;
                    o++
                ) {
                    var r = !n && 1 == ((e >> o) & 1);
                    o < 6
                        ? (this.modules[o][8] = r)
                        : o < 8
                        ? (this.modules[o + 1][8] = r)
                        : (this.modules[this.moduleCount - 15 + o][8] = r);
                }
                for (var a = 0; a < 15; a++) {
                    var i = !n && 1 == ((e >> a) & 1);
                    a < 8
                        ? (this.modules[8][this.moduleCount - a - 1] = i)
                        : a < 9
                        ? (this.modules[8][15 - a - 1 + 1] = i)
                        : (this.modules[8][15 - a - 1] = i);
                }
                this.modules[this.moduleCount - 8][8] = !n;
            },
            mapData: function (n, t) {
                for (
                    var c = -1,
                        e = this.moduleCount - 1,
                        o = 7,
                        r = 0,
                        a = this.moduleCount - 1;
                    a > 0;
                    a -= 2
                )
                    for (6 == a && a--; ; ) {
                        for (var i = 0; i < 2; i++)
                            if (null == this.modules[e][a - i]) {
                                var s = !1;
                                r < n.length && (s = 1 == ((n[r] >>> o) & 1)),
                                    on.getMask(t, e, a - i) && (s = !s),
                                    (this.modules[e][a - i] = s),
                                    -1 == --o && (r++, (o = 7));
                            }
                        if ((e += c) < 0 || this.moduleCount <= e) {
                            (e -= c), (c = -c);
                            break;
                        }
                    }
            },
        }),
        (z.PAD0 = 236),
        (z.PAD1 = 17),
        (z.createData = function (n, t, c) {
            for (
                var e = un.getRSBlocks(n, t), o = new fn(), r = 0;
                r < c.length;
                r++
            ) {
                var a = c[r];
                o.put(a.mode, 4),
                    o.put(a.getLength(), on.getLengthInBits(a.mode, n)),
                    a.write(o);
            }
            for (var i = 0, s = 0; s < e.length; s++) i += e[s].dataCount;
            if (o.getLengthInBits() > 8 * i)
                throw new Error(
                    'code length overflow. (' +
                        o.getLengthInBits() +
                        '>' +
                        8 * i +
                        ')'
                );
            for (
                o.getLengthInBits() + 4 <= 8 * i && o.put(0, 4);
                o.getLengthInBits() % 8 != 0;

            )
                o.putBit(!1);
            for (
                ;
                !(
                    o.getLengthInBits() >= 8 * i ||
                    (o.put(z.PAD0, 8), o.getLengthInBits() >= 8 * i)
                );

            )
                o.put(z.PAD1, 8);
            return z.createBytes(o, e);
        }),
        (z.createBytes = function (n, t) {
            for (
                var c = 0,
                    e = 0,
                    o = 0,
                    r = new Array(t.length),
                    a = new Array(t.length),
                    i = 0;
                i < t.length;
                i++
            ) {
                var s = t[i].dataCount,
                    l = t[i].totalCount - s;
                (e = Math.max(e, s)),
                    (o = Math.max(o, l)),
                    (r[i] = new Array(s));
                for (var h = 0; h < r[i].length; h++)
                    r[i][h] = 255 & n.buffer[h + c];
                c += s;
                var u = on.getErrorCorrectPolynomial(l),
                    f = new hn(r[i], u.getLength() - 1).mod(u);
                a[i] = new Array(u.getLength() - 1);
                for (var y = 0; y < a[i].length; y++) {
                    var p = y + f.getLength() - a[i].length;
                    a[i][y] = p >= 0 ? f.get(p) : 0;
                }
            }
            for (var d = 0, g = 0; g < t.length; g++) d += t[g].totalCount;
            for (var k = new Array(d), v = 0, m = 0; m < e; m++)
                for (var x = 0; x < t.length; x++)
                    m < r[x].length && (k[v++] = r[x][m]);
            for (var w = 0; w < o; w++)
                for (var C = 0; C < t.length; C++)
                    w < a[C].length && (k[v++] = a[C][w]);
            return k;
        });
    for (
        var K = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8,
            },
            U = 1,
            X = 0,
            Y = 3,
            J = 2,
            $ = 0,
            Z = 1,
            V = 2,
            W = 3,
            nn = 4,
            tn = 5,
            cn = 6,
            en = 7,
            on = {
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
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function (n) {
                    for (
                        var t = n << 10;
                        on.getBCHDigit(t) - on.getBCHDigit(on.G15) >= 0;

                    )
                        t ^=
                            on.G15 <<
                            (on.getBCHDigit(t) - on.getBCHDigit(on.G15));
                    return ((n << 10) | t) ^ on.G15_MASK;
                },
                getBCHTypeNumber: function (n) {
                    for (
                        var t = n << 12;
                        on.getBCHDigit(t) - on.getBCHDigit(on.G18) >= 0;

                    )
                        t ^=
                            on.G18 <<
                            (on.getBCHDigit(t) - on.getBCHDigit(on.G18));
                    return (n << 12) | t;
                },
                getBCHDigit: function (n) {
                    for (var t = 0; 0 != n; ) t++, (n >>>= 1);
                    return t;
                },
                getPatternPosition: function (n) {
                    return on.PATTERN_POSITION_TABLE[n - 1];
                },
                getMask: function (n, t, c) {
                    switch (n) {
                        case $:
                            return (t + c) % 2 == 0;
                        case Z:
                            return t % 2 == 0;
                        case V:
                            return c % 3 == 0;
                        case W:
                            return (t + c) % 3 == 0;
                        case nn:
                            return (
                                (Math.floor(t / 2) + Math.floor(c / 3)) % 2 == 0
                            );
                        case tn:
                            return ((t * c) % 2) + ((t * c) % 3) == 0;
                        case cn:
                            return (((t * c) % 2) + ((t * c) % 3)) % 2 == 0;
                        case en:
                            return (((t * c) % 3) + ((t + c) % 2)) % 2 == 0;
                        default:
                            throw new Error('bad maskPattern:' + n);
                    }
                },
                getErrorCorrectPolynomial: function (n) {
                    for (var t = new hn([1], 0), c = 0; c < n; c++)
                        t = t.multiply(new hn([1, rn.gexp(c)], 0));
                    return t;
                },
                getLengthInBits: function (n, t) {
                    if (1 <= t && t < 10)
                        switch (n) {
                            case K.MODE_NUMBER:
                                return 10;
                            case K.MODE_ALPHA_NUM:
                                return 9;
                            case K.MODE_8BIT_BYTE:
                            case K.MODE_KANJI:
                                return 8;
                            default:
                                throw new Error('mode:' + n);
                        }
                    else if (t < 27)
                        switch (n) {
                            case K.MODE_NUMBER:
                                return 12;
                            case K.MODE_ALPHA_NUM:
                                return 11;
                            case K.MODE_8BIT_BYTE:
                                return 16;
                            case K.MODE_KANJI:
                                return 10;
                            default:
                                throw new Error('mode:' + n);
                        }
                    else {
                        if (!(t < 41)) throw new Error('type:' + t);
                        switch (n) {
                            case K.MODE_NUMBER:
                                return 14;
                            case K.MODE_ALPHA_NUM:
                                return 13;
                            case K.MODE_8BIT_BYTE:
                                return 16;
                            case K.MODE_KANJI:
                                return 12;
                            default:
                                throw new Error('mode:' + n);
                        }
                    }
                },
                getLostPoint: function (n) {
                    for (var t = n.getModuleCount(), c = 0, e = 0; e < t; e++)
                        for (var o = 0; o < t; o++) {
                            for (
                                var r = 0, a = n.isDark(e, o), i = -1;
                                i <= 1;
                                i++
                            )
                                if (!(e + i < 0 || t <= e + i))
                                    for (var s = -1; s <= 1; s++)
                                        o + s < 0 ||
                                            t <= o + s ||
                                            (0 == i && 0 == s) ||
                                            (a == n.isDark(e + i, o + s) &&
                                                r++);
                            r > 5 && (c += 3 + r - 5);
                        }
                    for (var l = 0; l < t - 1; l++)
                        for (var h = 0; h < t - 1; h++) {
                            var u = 0;
                            n.isDark(l, h) && u++,
                                n.isDark(l + 1, h) && u++,
                                n.isDark(l, h + 1) && u++,
                                n.isDark(l + 1, h + 1) && u++,
                                (0 != u && 4 != u) || (c += 3);
                        }
                    for (var f = 0; f < t; f++)
                        for (var y = 0; y < t - 6; y++)
                            n.isDark(f, y) &&
                                !n.isDark(f, y + 1) &&
                                n.isDark(f, y + 2) &&
                                n.isDark(f, y + 3) &&
                                n.isDark(f, y + 4) &&
                                !n.isDark(f, y + 5) &&
                                n.isDark(f, y + 6) &&
                                (c += 40);
                    for (var p = 0; p < t; p++)
                        for (var d = 0; d < t - 6; d++)
                            n.isDark(d, p) &&
                                !n.isDark(d + 1, p) &&
                                n.isDark(d + 2, p) &&
                                n.isDark(d + 3, p) &&
                                n.isDark(d + 4, p) &&
                                !n.isDark(d + 5, p) &&
                                n.isDark(d + 6, p) &&
                                (c += 40);
                    for (var g = 0, k = 0; k < t; k++)
                        for (var v = 0; v < t; v++) n.isDark(v, k) && g++;
                    return (c += 10 * (Math.abs((100 * g) / t / t - 50) / 5));
                },
            },
            rn = {
                glog: function (n) {
                    if (n < 1) throw new Error('glog(' + n + ')');
                    return rn.LOG_TABLE[n];
                },
                gexp: function (n) {
                    for (; n < 0; ) n += 255;
                    for (; n >= 256; ) n -= 255;
                    return rn.EXP_TABLE[n];
                },
                EXP_TABLE: new Array(256),
                LOG_TABLE: new Array(256),
            },
            an = 0;
        an < 8;
        an++
    )
        rn.EXP_TABLE[an] = 1 << an;
    for (var sn = 8; sn < 256; sn++)
        rn.EXP_TABLE[sn] =
            rn.EXP_TABLE[sn - 4] ^
            rn.EXP_TABLE[sn - 5] ^
            rn.EXP_TABLE[sn - 6] ^
            rn.EXP_TABLE[sn - 8];
    for (var ln = 0; ln < 255; ln++) rn.LOG_TABLE[rn.EXP_TABLE[ln]] = ln;
    function hn(n, t) {
        if (n.length == undefined) throw new Error(n.length + '/' + t);
        for (var c = 0; c < n.length && 0 == n[c]; ) c++;
        this.num = new Array(n.length - c + t);
        for (var e = 0; e < n.length - c; e++) this.num[e] = n[e + c];
    }
    function un(n, t) {
        (this.totalCount = n), (this.dataCount = t);
    }
    function fn() {
        (this.buffer = []), (this.length = 0);
    }
    function yn(n) {
        if (!n.text || n.text.length <= 0) return null;
        var t = new z(
            (n = s(
                s(
                    {},
                    {
                        render: 'canvas',
                        width: '100%',
                        height: '100%',
                        typeNumber: -1,
                        correctLevel: 1,
                        background: '#ffffff',
                        foreground: '#000000',
                        isSpace: !0,
                    }
                ),
                n
            )).typeNumber,
            n.correctLevel
        );
        return t.addData(n.text), t.make(), (t.$options = n), t;
    }
    (hn.prototype = {
        get: function (n) {
            return this.num[n];
        },
        getLength: function () {
            return this.num.length;
        },
        multiply: function (n) {
            for (
                var t = new Array(this.getLength() + n.getLength() - 1), c = 0;
                c < this.getLength();
                c++
            )
                for (var e = 0; e < n.getLength(); e++)
                    t[c + e] ^= rn.gexp(
                        rn.glog(this.get(c)) + rn.glog(n.get(e))
                    );
            return new hn(t, 0);
        },
        mod: function (n) {
            if (this.getLength() - n.getLength() < 0) return this;
            for (
                var t = rn.glog(this.get(0)) - rn.glog(n.get(0)),
                    c = new Array(this.getLength()),
                    e = 0;
                e < this.getLength();
                e++
            )
                c[e] = this.get(e);
            for (var o = 0; o < n.getLength(); o++)
                c[o] ^= rn.gexp(rn.glog(n.get(o)) + t);
            return new hn(c, 0).mod(n);
        },
    }),
        (un.RS_BLOCK_TABLE = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16],
        ]),
        (un.getRSBlocks = function (n, t) {
            var c = un.getRsBlockTable(n, t);
            if (c == undefined)
                throw new Error(
                    'bad rs block @ typeNumber:' + n + '/errorCorrectLevel:' + t
                );
            for (var e = c.length / 3, o = [], r = 0; r < e; r++)
                for (
                    var a = c[3 * r + 0],
                        i = c[3 * r + 1],
                        s = c[3 * r + 2],
                        l = 0;
                    l < a;
                    l++
                )
                    o.push(new un(i, s));
            return o;
        }),
        (un.getRsBlockTable = function (n, t) {
            switch (t) {
                case U:
                    return un.RS_BLOCK_TABLE[4 * (n - 1) + 0];
                case X:
                    return un.RS_BLOCK_TABLE[4 * (n - 1) + 1];
                case Y:
                    return un.RS_BLOCK_TABLE[4 * (n - 1) + 2];
                case J:
                    return un.RS_BLOCK_TABLE[4 * (n - 1) + 3];
                default:
                    return undefined;
            }
        }),
        (fn.prototype = {
            get: function (n) {
                var t = Math.floor(n / 8);
                return 1 == ((this.buffer[t] >>> (7 - (n % 8))) & 1);
            },
            put: function (n, t) {
                for (var c = 0; c < t; c++)
                    this.putBit(1 == ((n >>> (t - c - 1)) & 1));
            },
            getLengthInBits: function () {
                return this.length;
            },
            putBit: function (n) {
                var t = Math.floor(this.length / 8);
                this.buffer.length <= t && this.buffer.push(0),
                    n && (this.buffer[t] |= 128 >>> this.length % 8),
                    this.length++;
            },
        });
    var pn = {
        rendererRect: f,
        rendererRound: y,
        rendererRandRound: p,
        rendererDSJ: k,
        rendererResImage: M,
        rendererImage: E,
        renderer25D: D,
        rendererRandRect: m,
        rendererCircle: R,
        rendererFuncA: F,
        rendererFuncB: I,
        rendererLine: Q,
        rendererLine2: j,
        encodeData: yn,
    };
    (n['default'] = pn),
        (n.encodeData = yn),
        (n.renderer25D = D),
        (n.rendererCircle = R),
        (n.rendererDSJ = k),
        (n.rendererFuncA = F),
        (n.rendererFuncB = I),
        (n.rendererImage = E),
        (n.rendererLine = Q),
        (n.rendererLine2 = j),
        (n.rendererRandRect = m),
        (n.rendererRandRound = p),
        (n.rendererRect = f),
        (n.rendererResImage = M),
        (n.rendererRound = y),
        Object.defineProperty(n, '__esModule', { value: !0 });
});
