import { createRenderer } from '@/utils/renderer';
import listPoints from './listPoints';
/**
 *
 * @param {*} qrcode
 */
const RendererRandRect = (qrcode) => {
    const svg = createRenderer({
        listPoints: listPoints,
    })({ qrcode });
    return svg;
};
export default RendererRandRect;
