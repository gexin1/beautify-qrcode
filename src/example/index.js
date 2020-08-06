/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
    encodeData,
    renderer25D,
    rendererRect,
    rendererRound,
    rendererRandRound,
    rendererDSJ,
    rendererRandRect,
    rendererImage,
    rendererResImage,
    rendererCircle,
    rendererFuncA,
    rendererFuncB,
    rendererLine,
    rendererLine2,
} from '@/index';
import {
    defaultResImage,
    QRBTF_URL,
    defaultImage,
} from '@/constant/References';
import '@/style/base.css';

import Rem from '@/images/Rem.jpg';

window.onload = () => {
    const qrcode = encodeData({
        text: QRBTF_URL,
        correctLevel: 0,
    });
    const A1 = rendererRect(qrcode);
    const A2 = rendererRound(qrcode);
    const A3 = rendererRandRound(qrcode);
    const sp1 = rendererDSJ(qrcode);
    const sp2 = rendererRandRect(qrcode);
    const B1 = renderer25D(qrcode);
    const C1 = rendererImage(qrcode, {
        backgroudImage: Rem,
    });
    const A_a1 = rendererLine(qrcode, {
        type: 0,
        posType:0
    });
    const A_a2 = rendererLine2(qrcode);
    const A_b1 = rendererFuncA(qrcode);
    const A_b2 = rendererFuncB(qrcode);
    const SP_3 = rendererCircle(qrcode);
    rendererResImage(qrcode, { backgroudImage: defaultResImage }).then(
        (res) => {
            document.querySelector('.c2').innerHTML = res;
        }
    );

    window.document.body.innerHTML = `<ul>
    <li><div>${A1}<div><p>A1</p></li>
    <li><div>${A2}<div><p>A2</p></li>
    <li><div>${A3}<div><p>A3</p></li>
    <li><div>${sp1}<div><p>sp1</p></li>
    <li><div>${sp2}<div><p>sp2</p></li>
    <li><div>${B1}<div><p>B1</p></li>
    <li><div>${C1}<div><p>C1</p></li>
    <li><div>${A_a1}<div><p>A_a1</p></li>
    <li><div>${A_a2}<div><p>A_a2</p></li>
    <li><div>${A_b1}<div><p>A_b1</p></li>
    <li><div>${A_b2}<div><p>A_b2</p></li>
    <li><div>${SP_3}<div><p>SP_3</p></li>
    <li><div class="c2">${SP_3}</div><p>c2</p></li>
    </ul>`;
};
