import QRCodeEncoder from './qrcodeEncoder';

interface Renderer {
    getViewBox: (qrcode: QRCodeEncoder) => string;
    listPoints: (qrcode: QRCodeEncoder, params: object) => string[];
    getParamInfo: () => [];
    beginRendering: ({}: {
        qrcode: QRCodeEncoder;
        params: object;
        setParamInfo: () => {};
    }) => void;
    beforeListing: ({}: {
        qrcode: QRCodeEncoder;
        params: object;
        setParamInfo: () => {};
    }) => void;
    afterListing: ({}: {
        qrcode: QRCodeEncoder;
        params: object;
        setParamInfo: () => {};
    }) => void;
}

export function createRenderer(renderer: Partial<Renderer>) {
    const defaultViewBox = function (qrcode: QRCodeEncoder):string {
        if (!qrcode) return '0 0 0 0';

        const nCount = qrcode.getModuleCount();

        return qrcode.$options.isSpace
            ? `${-nCount / 5} ${-nCount / 5} ${nCount + (nCount / 5) * 2} ${
                  nCount + (nCount / 5) * 2
              }`
            : `${0} ${0} ${nCount} ${nCount}`;
    };

    const completeRenderer: Renderer = {
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

    return ({ qrcode, params }: { qrcode: QRCodeEncoder; params: object }) => {
        const { width, height } = qrcode.$options;
        return `
            <svg width="${width}" height="${height}" viewBox="${completeRenderer.getViewBox(
            qrcode
        )}" fill="white"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                ${completeRenderer.listPoints(qrcode, params).join('')}
            </svg>
        `;
    };
}
