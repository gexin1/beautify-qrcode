import htm from 'htm';
import vhtml from 'vhtml';


let seed = Math.random() * 233280;
export function rand(min: number, max: number) {
    seed = (seed * 9301 + 49297) % 233280;
    return min + (seed / 233280.0) * (max - min);
}
/**
 * @exmaple
 * html`<h1 id=hello>Hello world!</h1>` //'<h1 id="hello">Hello world!</h1>'
 */
export const html = htm.bind(vhtml);