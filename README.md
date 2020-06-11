# beautify-qrcode

此项目来源于 QRBTF 的创意在原来的项目做了一些封装,有效解决了我的项目问题
<br>
当用户用图片作为背景的时候用户的大图给服务器造成了比较大的压力全部使用客户端来生成减少了服务器压力

# QRBTF

URL: [qrbtf.com](https://qrbtf.com)

中文介绍: [如何制作一个漂亮的二维码](https://mp.weixin.qq.com/s/_Oy9I9FqPXhfwN9IUhf6_g)

<img align="center" src="https://blog.ciaochaos.com/projects/qrcode/qrs2.jpg" width="500">

## doc

在线调试 [qrbtf.com](https://qrbtf.com)

### 使用

```javascript
// 通过script 引入
<script src="./dist/beautifyQrcode.js"></script>;

const {
    encodeData,
    renderer25D,
    rendererRect,
    rendererRound,
    rendererRandRound,
    rendererDSJ,
    rendererRandRect,
    rendererImage,
    rendererResImage,
} = window.beautifyQrcode;

// 使用es6
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
} from './dist/beautifyQrcode';
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
const qrcode = encodeData({
    text: QRBTF_URL,
    correctLevel: 0,
});
/**
 * A1
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
 * @param {Number} [options.size] 信息点缩放
 * @param {String} [options.opacity]  信息点不透明度
 * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星
 * @param {String} [options.otherColor] 信息点颜色
 * @param {String} [options.posColor] 定位点点颜色
 * @return {String} svg图片
 */
const A1 = rendererRect(qrcode);
/**
 * A2
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
 * @param {Number} [options.size] 信息点缩放
 * @param {String} [options.opacity]  信息点不透明度
 * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星
 * @param {String} [options.otherColor] 信息点颜色
 * @param {String} [options.posColor] 定位点点颜色
 * @return {String} svg图片
 */
const A2 = rendererRound(qrcode);
/**
 * A3
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.type]  信息点样式 0=>矩形 1=>圆形,2=>随机
 * @param {Number} [options.size] 信息点缩放
 * @param {String} [options.opacity]  信息点不透明度
 * @param {String} [options.posType] 定位点样式 0=>矩形 1=>圆形 2=>行星
 * @param {String} [options.otherColor] 信息点颜色
 * @param {String} [options.posColor] 定位点点颜色
 * @return {String} svg图片
 */
const A3 = rendererRandRound(qrcode);
/**
 * sp1
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.width1]  x 宽度
 * @param {Number} [options.width2]  信息点缩放
 * @param {Number} [options.width3]  定位点宽度
 * @param {String} [options.posType] 定位点样式 0=>矩形 1=>DSJ
 * @return {String} svg图片
 */
const sp1 = rendererDSJ(qrcode);
/**
 * sp2
 * @param {*} qrcode
 * @return {String} svg图片
 */
const sp2 = rendererRandRect(qrcode);
/**
 * B1
 * @param {Object} qrcode
 * @param {Object} options
 * @param {Number} [options.height]  柱体高度
 * @param {Number} [options.height2] 定位点柱体高度
 * @param {String} [options.upColor]  上侧颜色
 * @param {String} [options.leftColor] 左侧颜色
 * @param {String} [options.rightColor] 右侧颜色
 * @return {String} svg图片
 */
const B1 = renderer25D(qrcode);
/**
 * C1
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
 * @return {String} svg图片
 */
const C1 = rendererImage(qrcode, {
    backgroudImage: Rem,
});
/**
 * C2
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
 * @return {Promise<String>}  svg图片
 */
rendererResImage(qrcode, { backgroudImage: defaultResImage }).then((res) => {
    const C2=res;
});
```

## 支持 QRBTF

#### Paypal

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.me/ciaochaos)

#### Alipay

<img align="center" src="https://blog.ciaochaos.com/projects/qrcode/alipay2.jpeg" width="300">
