export function createRenderer(renderer) {
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
