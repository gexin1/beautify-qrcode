# beautify-qrcode

此项目来源于 QRBTF
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
```
#### 使用npm
```shell
npm i beautify-qrcode
```
```javascript
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
} from 'beautify-qrcode';
/**
 * 生成二维码数据
 * @param {Object} options
 * @param {String} options.text 二维码内容
 * @param {Number} [options.width]  生成svg的宽度 默认100%
 * @param {Number} [options.height] 生成svg的高度 默认100%
 * @param {Number} [options.correctLevel] 容错率 1=>7% 0 =>15% 3=>25% 2=>30%
 * @param {Boolean} [options.isSpace] 生成内容是否预留空隙 默认true
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
 * @param {String} options.backgroudImage 背景图片
 * @param {Number} options.contrast 对比度
 * @param {Number} options.exposure 曝光
 * @param {Number} options.alignType 小定位点样式 0=>'无' 1=>'白' 2=>'黑白'
 * @param {Number} options.timingType 时钟样式 0=>'无' 1=>'白' 2=>'黑白'
 * @param {String} options.otherColor 信息点颜色
 * @param {String} options.posColor 定位点颜色
 * @return {Promise<String>}  svg图片
 */
rendererResImage(qrcode, { backgroudImage: defaultResImage }).then((res) => {
    const C2 = res;
});

/**
 * SP_3
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.otherColor] 圆圈颜色
 * @param {String} [options.posColor] 定位点颜色
 */
const SP_3 = rendererCircle(qrcode);

/**
 * A_a1
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.type]  连线方向 0=>左右 1=>上下 2=>纵横 3=>回环 4=>左上—右下 5=>右上—左下 6=>交叉"
 * @param {String} [options.size] 连线粗细
 * @param {String} [options.opacity] 连线不透明度
 * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
 * @param {String} [options.otherColor] 连线颜色
 * @param {String} [options.posColor] 定位点颜色
 */
const A_a1 = rendererLine(qrcode);

/**
 * A_a2
 * @param {Object} qrcode
 * @param {Object} options
 * @param {String} [options.type]  连线方向 0=>左右 1=>上下 2=>纵横 3=>回环 4=>左上—右下 5=>右上—左下 7=>交叉"
 * @param {String} [options.size] 连线粗细
 * @param {String} [options.opacity] 连线不透明度
 * @param {String} [options.posType] 定位点样式  0=>矩形 1=>圆形 2=>行星 3=>圆角矩形
 * @param {String} [options.otherColor] 连线颜色
 * @param {String} [options.posColor] 定位点颜色
 */
const A_a2 = rendererLine2(qrcode);

/**
 * A_b1
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
const A_b1 = rendererFuncA(qrcode);
/**
 * A_b2
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
const A_b2 = rendererFuncB(qrcode);
```

## 微信小程序

-   rendererResImage 可能需要使用小程序的canvas做一下适配
-   微信小程序 image 需要转换为 base64 svg 才能正常显示
-   rendererImage backgroudImage 就是 svg image 的 [xlink:href=] 使用小程序临时路径也是可以展示的
-   尝试了下 cax 部分二维码并不能很好展示
- 暂时使用小程序没有找到方法来转换svg 为png、jpg 来保存到用户本地 我使用sharp库在服务端做转换

```html
    <image src="{{qrcode}}" mode="widthFix"></image>
```
```javascript
import { Base64 } from 'js-base64';
const base64Svg = rendererRect(qrcode, options);
const qrcode= `data:image/svg+xml;base64,` + Base64.encode(base64Svg);

```

## 支持 QRBTF

#### Paypal

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.me/ciaochaos)

#### Alipay

<img align="center" src="https://blog.ciaochaos.com/projects/qrcode/alipay2.jpeg" width="300">
