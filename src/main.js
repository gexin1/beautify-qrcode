import { RendererRect } from './renderer/RendererBase';
import { encodeData } from './utils/qrcodeHandler';
const qrcode = encodeData({
    text: 'QRBTF_URL',
    correctLevel: 0,
});
console.log(qrcode);
const base = RendererRect({
    qrcode,
    params: [0, 100, 100, 0, '#000000', '#000000'],
});
window.document.body.innerHTML = `${base}`;
