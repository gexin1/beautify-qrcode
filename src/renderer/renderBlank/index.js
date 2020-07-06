import { createRenderer } from '@/utils/renderer';

const renderBlank = (qrcode) => {
    const svg = createRenderer()({ qrcode });
    return svg;
};

export default renderBlank;
