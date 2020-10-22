import{X as g,Y as $t,Z as w,_ as y,v as K}from"../../chunk.DMLVVFX7.js";import{S as Pt}from"../../chunk.44PRRM6L.js";function Ce(e){return typeof e=="string"&&e.includes("%")}function Se(e){return typeof e=="string"&&e.includes(".")&&parseFloat(e)===1}function u(e,r){Se(e)&&(e="100%");const t=Ce(e);return e=r===360?e:Math.min(r,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*r),10)/100),Math.abs(e-r)<1e-6?1:(r===360?e=(e<0?e%r+r:e%r)/parseFloat(String(r)):e=e%r/parseFloat(String(r)),e)}function T(e){return e=parseFloat(e),(Number.isNaN(e)||e<0||e>1)&&(e=1),e}function M(e){return e<=1?`${Number(e)*100}%`:e}function v(e){return e.length===1?`0${e}`:String(e)}function G(e,r,t){return{r:u(e,255)*255,g:u(r,255)*255,b:u(t,255)*255}}function E(e,r,t){e=u(e,255),r=u(r,255),t=u(t,255);const o=Math.max(e,r,t),n=Math.min(e,r,t);let i=0,a=0;const s=(o+n)/2;if(o===n)a=0,i=0;else{const l=o-n;a=s>.5?l/(2-o-n):l/(o+n);switch(o){case e:i=(r-t)/l+(r<t?6:0);break;case r:i=(t-e)/l+2;break;case t:i=(e-r)/l+4;break;default:break}i/=6}return{h:i,s:a,l:s}}function _(e,r,t){let o,n,i;e=u(e,360),r=u(r,100),t=u(t,100);function a(s,l,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?s+(l-s)*(6*h):h<1/2?l:h<2/3?s+(l-s)*(2/3-h)*6:s}if(r===0)n=t,i=t,o=t;else{const s=t<.5?t*(1+r):t+r-t*r,l=2*t-s;o=a(l,s,e+1/3),n=a(l,s,e),i=a(l,s,e-1/3)}return{r:o*255,g:n*255,b:i*255}}function j(e,r,t){e=u(e,255),r=u(r,255),t=u(t,255);const o=Math.max(e,r,t),n=Math.min(e,r,t);let i=0;const a=o,s=o-n,l=o===0?0:s/o;if(o===n)i=0;else{switch(o){case e:i=(r-t)/s+(r<t?6:0);break;case r:i=(t-e)/s+2;break;case t:i=(e-r)/s+4;break;default:break}i/=6}return{h:i,s:l,v:a}}function X(e,r,t){e=u(e,360)*6,r=u(r,100),t=u(t,100);const o=Math.floor(e),n=e-o,i=t*(1-r),a=t*(1-n*r),s=t*(1-(1-n)*r),l=o%6,h=[t,a,i,i,s,t][l],f=[s,t,t,a,i,i][l],S=[i,i,s,t,t,a][l];return{r:h*255,g:f*255,b:S*255}}function L(e,r,t,o){const n=[v(Math.round(e).toString(16)),v(Math.round(r).toString(16)),v(Math.round(t).toString(16))];return o&&n[0].charAt(0)===n[0].charAt(1)&&n[1].charAt(0)===n[1].charAt(1)&&n[2].charAt(0)===n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function ye(e){return Math.round(parseFloat(e)*255).toString(16)}function d(e){return parseInt(e,16)}function V(e){return d(e)/255}function Y(e,r,t,o,n){const i=[v(Math.round(e).toString(16)),v(Math.round(r).toString(16)),v(Math.round(t).toString(16)),v(ye(o))];return n&&i[0].charAt(0)===i[0].charAt(1)&&i[1].charAt(0)===i[1].charAt(1)&&i[2].charAt(0)===i[2].charAt(1)&&i[3].charAt(0)===i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}const R={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};const we="[-\\+]?\\d+%?",ke="[-\\+]?\\d*\\.\\d+%?",C=`(?:${ke})|(?:${we})`,z=`[\\s|\\(]+(${C})[,|\\s]+(${C})[,|\\s]+(${C})\\s*\\)?`,q=`[\\s|\\(]+(${C})[,|\\s]+(${C})[,|\\s]+(${C})[,|\\s]+(${C})\\s*\\)?`,b={CSS_UNIT:new RegExp(C),rgb:new RegExp(`rgb${z}`),rgba:new RegExp(`rgba${q}`),hsl:new RegExp(`hsl${z}`),hsla:new RegExp(`hsla${q}`),hsv:new RegExp(`hsv${z}`),hsva:new RegExp(`hsva${q}`),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function p(e){return Boolean(b.CSS_UNIT.exec(String(e)))}function Ae(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let r=!1;if(R[e])e=R[e],r=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let t=b.rgb.exec(e);return t?{r:t[1],g:t[2],b:t[3]}:(t=b.rgba.exec(e),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=b.hsl.exec(e),t?{h:t[1],s:t[2],l:t[3]}:(t=b.hsla.exec(e),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=b.hsv.exec(e),t?{h:t[1],s:t[2],v:t[3]}:(t=b.hsva.exec(e),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=b.hex8.exec(e),t?{r:d(t[1]),g:d(t[2]),b:d(t[3]),a:V(t[4]),format:r?"name":"hex8"}:(t=b.hex6.exec(e),t?{r:d(t[1]),g:d(t[2]),b:d(t[3]),format:r?"name":"hex"}:(t=b.hex4.exec(e),t?{r:d(t[1]+t[1]),g:d(t[2]+t[2]),b:d(t[3]+t[3]),a:V(t[4]+t[4]),format:r?"name":"hex8"}:(t=b.hex3.exec(e),t?{r:d(t[1]+t[1]),g:d(t[2]+t[2]),b:d(t[3]+t[3]),format:r?"name":"hex"}:!1)))))))))}function J(e){let r={r:0,g:0,b:0},t=1,o=null,n=null,i=null,a=!1,s=!1;if(typeof e=="string"&&(e=Ae(e)),Array.isArray(e)){const[l,h,f]=e;p(l)&&p(h)&&p(f)&&(r=G(l*255,h*255,f*255),a=!0,s="rgb"),e.length===4&&(t=e[3])}return typeof e=="object"&&(p(e.r)&&p(e.g)&&p(e.b)?(r=G(e.r,e.g,e.b),a=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):p(e.h)&&p(e.s)&&p(e.v)?(o=M(e.s),n=M(e.v),r=X(e.h,o,n),a=!0,s="hsv"):p(e.h)&&p(e.s)&&p(e.l)&&(o=M(e.s),i=M(e.l),r=_(e.h,o,i),a=!0,s="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(t=e.a)),t=T(t),{ok:a,format:e.format||s,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:t}}class m{constructor(e="",r={}){if(e instanceof m)return e;this.originalInput=e;const t=J(e);this.originalInput=e,this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format||t.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=t.ok}getAlpha(){return this.a}setAlpha(e){return this.a=T(e),this.roundA=Math.round(100*this.a)/100,this}toHsv(){const e=j(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=j(this.r,this.g,this.b),r=Math.round(e.h*360),t=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?`hsv(${r}, ${t}%, ${o}%)`:`hsva(${r}, ${t}%, ${o}%, ${this.roundA})`}toHsl(){const e=E(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=E(this.r,this.g,this.b),r=Math.round(e.h*360),t=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?`hsl(${r}, ${t}%, ${o}%)`:`hsla(${r}, ${t}%, ${o}%, ${this.roundA})`}toHex(e=!1){return L(this.r,this.g,this.b,e)}toHexString(e=!1){return`#${this.toHex(e)}`}toHex8(e=!1){return Y(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return`#${this.toHex8(e)}`}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbArray(){return[Math.round(this.r),Math.round(this.g),Math.round(this.b),this.a]}toRgbString(){const e=Math.round(this.r),r=Math.round(this.g),t=Math.round(this.b);return`rgba(${e}, ${r}, ${t}, ${this.roundA})`}toPercentageRgb(){const e=r=>`${Math.round(u(r,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=r=>Math.round(u(r,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e=`#${L(this.r,this.g,this.b,!1)}`;for(const r of Object.keys(R))if(R[r]===e)return r;return!1}toString(e){const r=Boolean(e);e=e||this.format;const t=this.a<1&&this.a>=0,o=!r&&t&&e&&(e.startsWith("hex")||e==="name");if(o)return e==="name"&&this.a===0?this.toName():this.toRgbString();switch(e){case"rgb":return this.toRgbString();case"prgb":return this.toPercentageRgbString();case"hex":case"hex6":return this.toHexString();case"hex3":return this.toHexString(!0);case"hex4":return this.toHex8String(!0);case"hex8":return this.toHex8String();case"hsl":return this.toHslString();case"hsv":return this.toHsvString();case"name":return this.toName();default:return this.toHexString()}}clone(){return new m(this.toString())}}import Re,{css as B}from"styled-components";const He=Re.div`
  position: absolute;
  width: ${e=>e.theme.measurements.color.colorPicker.arrow.width}px;
  height: ${e=>e.theme.measurements.color.colorPicker.arrow.width/2}px;
  overflow: hidden;
  pointer-events: none;
  ${e=>e.direction==="bottom"?B`
          bottom: 100%;
        `:B`
          top: 100%;
        `}
  left: ${e=>e.arrowOffset}px;
  :after {
    content: '';
    position: absolute;
    width: ${e=>e.theme.measurements.color.colorPicker.arrow.width/2}px;
    height: ${e=>e.theme.measurements.color.colorPicker.arrow.width/2}px;
    left: 50%;
    ${e=>e.direction==="bottom"?B`
            transform: translate(-50%, 50%) rotate(45deg);
          `:B`
            transform: translate(-50%, -50%) rotate(45deg);
          `}
    background-color: ${e=>e.theme.colorPicker.listBackground};
    pointer-events: none;
  }
`;var Z=He;import N from"react";import Q from"styled-components";const Pe=Q.div`
  text-align: center;
  width: 28px;
  padding-left: 4px;
`,$e=Q(g.Input.Text)`
  input {
    text-align: center;
    border-bottom: 1px solid
      ${e=>e.theme.colorPicker.inputBorderColor};
  }
`,Me=({value:e,label:r,onChange:t})=>N.createElement(Pe,null,N.createElement(g.Input.Label,{label:r}),N.createElement($e,{min:0,max:255,value:e,onChange:t}));var F=Me;import W from"react";import ee from"styled-components";const Ie=ee.div`
  text-align: left;
  width: 62px;
`,Te=ee(g.Input.Text)`
  input {
    text-align: left;
    border-bottom: 1px solid
      ${e=>e.theme.colorPicker.inputBorderColor};
  }
`,Be=({value:e,label:r,onChange:t})=>W.createElement(Ie,null,W.createElement(g.Input.Label,{label:r}),W.createElement(Te,{value:e.toUpperCase(),onChange:t}));var te=Be;import Fe from"styled-components";const re=Fe.div.attrs(e=>({style:{left:e.position.x||`${0}px`,top:e.position.y||`${0}px`}}))`
  &&& {
    position: absolute;
    height: ${e=>e.theme.measurements.color.colorPicker.thumb.size}px;
    width: ${e=>e.theme.measurements.color.colorPicker.thumb.size}px;
    border-radius: 50%;
    border: 2px solid ${e=>e.theme.colorPicker.controlsColor};
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.46);
    z-index: 2;
    pointer-events: none;
  }
`;var H=re;re.defaultProps={theme:K};const oe=Pt($t());import U from"react";import Oe from"react-dom";import De from"styled-components";const Ge=De.div`
  position: relative;
  height: 14px;
  width: 100%;
`;class ne extends U.Component{constructor(e){super(e);this.onDragStart=e=>{this.setState({dragging:!0}),this.onPositionChange(e)};this.onPositionChange=e=>{const{onChange:r,config:t}=this.props,o=t.measurements.color.colorPicker.thumb.size/2,n=t.measurements.color.colorPicker.thumb.size;let i=0,a=0;i=e.clientX,a=e.clientY;const s=Oe.findDOMNode(this);if(s&&s instanceof HTMLElement){const{top:l,left:h,width:f,height:S}=s.getBoundingClientRect();let x=i-h-o,A=a-l-o;x=Math.max(0,Math.min(f-n,x)),A=Math.max(0,Math.min(S-n,A)),r&&r({x,y:A}),this.setState({x,y:A})}};this.onDrag=e=>{this.state.dragging&&this.onPositionChange(e)};this.onDragStop=()=>{this.state.dragging&&this.setState({dragging:!1})};this.state={dragging:!1,x:e.defaultPosition.x,y:e.defaultPosition.y},this.debouncedOnDrag=oe.default(this.onDrag,10)}componentWillUnmount(){this.setState({dragging:!1})}render(){const{surface:e,setInnerRef:r,className:t,children:o}=this.props;return U.createElement(Ge,{ref:r,className:t},U.createElement(g.DraggableCore,{onStart:this.onDragStart,onDrag:this.debouncedOnDrag,onStop:this.onDragStop},e),o)}}ne.defaultProps={defaultPosition:{x:0,y:0}};var P=w("config","active")(y(ne));import{css as Ee}from"styled-components";const je=Ee`
  position: absolute;
  top: 3px;
  left: 0;
  width: 100%;
  height: 8px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;var k=je;import O from"react";import Le from"styled-components";const Ve=Le.div`
  ${k}
  background: linear-gradient(90deg, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%, #00F 66.66%, #F0F 83.33%, #F00 100%);
  height: 8px;
`;class ze extends O.Component{constructor(e){super(e);this.onKnob=({x:e})=>{const{onChange:r,config:t}=this.props,{offsetWidth:o}=this.node,n=o-t.measurements.color.colorPicker.thumb.size,i=e*o/n,a=Math.max(0,Math.min(360,i/o*360));r(a),this.setState({x:e})};this.setPositionFromColor=e=>{const{config:r}=this.props,{offsetWidth:t}=this.node;let o=0;const n=t-r.measurements.color.colorPicker.thumb.size;this.node&&(o=e.toHsv().h*t/360),this.setState({x:o*n/t})};this.nodeRef=r=>{this.node=r},this.state={x:0}}render(){const{x:e}=this.state;return O.createElement(P,{surface:O.createElement(Ve,null),setInnerRef:this.nodeRef,onChange:this.onKnob},O.createElement(H,{position:{x:e,y:0}}))}}var ie=w("config")(y(ze));import I from"react";import se from"styled-components";const qe=se.div.attrs(e=>({style:{background:`linear-gradient(to left, ${e.transparentColor} 0%, ${e.opaqueColor} 100%)`}}))`
  ${k}
  z-index: 1;
`,Ne=se.div.attrs(e=>({style:{backgroundImage:`url(${e.url})`}}))`
  ${k}
  z-index: 0;
  background-repeat: repeat-x;
  background-size: contain;
  background-position: left;
`;class We extends I.Component{constructor(e){super(e);this.onKnob=({x:e})=>{const{onChange:r,config:t}=this.props,{offsetWidth:o}=this.node,n=o-t.measurements.color.colorPicker.thumb.size,i=e*o/n,a=(o-i)/o,s=Math.round((a+Number.EPSILON)*100)/100,l=Math.min(1,Math.max(0,s));r(l),this.setState({x:e})};this.setPositionFromColor=e=>{const{config:r}=this.props,{offsetWidth:t}=this.node;let o=0;const n=t-r.measurements.color.colorPicker.thumb.size;this.node&&(o=(1-e.toHsv().a)*t),this.setState({x:o*n/t})};this.nodeRef=r=>{this.node=r},this.state={x:0}}render(){const{opaqueColor:e,transparentColor:r,config:t}=this.props,{x:o}=this.state,n=t.assetProvider.getPath("controls","/tiled-background.png");return I.createElement(P,{surface:I.createElement(qe,{opaqueColor:e,transparentColor:r}),setInnerRef:this.nodeRef,onChange:this.onKnob},I.createElement(Ne,{url:n}),I.createElement(H,{position:{x:o,y:0}}))}}var ae=w("config")(y(We));import D from"react";import le from"styled-components";const Ke=le.div.attrs(e=>({style:{backgroundColor:`hsl(${e.hue}, 100%, 50%)`}}))`
  ${k}
  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)),
   linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  height: ${e=>e.theme.measurements.color.colorPicker.saturationSlider.height}px;
  top: 0px;
`,Ue=le(P)`
  height: ${e=>e.theme.measurements.color.colorPicker.saturationSlider.height}px;
  margin-top: 0px;
`;class _e extends D.Component{constructor(e){super(e);this.setPositionFromColor=e=>{const{config:r}=this.props,t={x:0,y:0};if(this.node){const{s:o,v:n}=e.toHsv(),{offsetWidth:i,offsetHeight:a}=this.node,s=i-r.measurements.color.colorPicker.thumb.size,l=a-r.measurements.color.colorPicker.thumb.size,h=o*i,f=(1-n)*a;t.x=h*s/i,t.y=f*l/a}this.setState({position:t})};this.onChange=({x:e,y:r})=>{const{onChange:t,config:o}=this.props,{offsetHeight:n,offsetWidth:i}=this.node,a=i-o.measurements.color.colorPicker.thumb.size,s=n-o.measurements.color.colorPicker.thumb.size,l=e*i/a,h=r*n/s,f=Math.min(1,Math.max(0,l/i)),S=Math.min(1,Math.max(0,(n-h)/n));t(f,S),this.setState({position:{x:e,y:r}})};this.nodeRef=r=>{this.node=r},this.state={position:{x:0,y:0}}}render(){const{hue:e}=this.props,{position:r}=this.state;return D.createElement(Ue,{surface:D.createElement(Ke,{hue:e}),setInnerRef:this.nodeRef,onChange:this.onChange},D.createElement(H,{position:r}))}}var he=w("config")(y(_e));import c from"react";import $,{css as ce}from"styled-components";const Xe=$.div`
  position: absolute;
  left: ${e=>e.leftOffset}px;
  top: ${e=>e.topOffset}px;
  z-index: ${e=>e.theme.measurements.zIndex.input.list};
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  ${e=>e.show&&ce`
      display: block;
      opacity: 1;
      transition: opacity 0.3s ease-out;
    `}
`,ue=$.div`
  &&& {
    position: absolute;
    ${e=>e.direction==="top"&&ce`
        transform: translate(0, -100%);
      `}
    padding: 16px;
    box-sizing: border-box;
    box-shadow: ${e=>e.theme.colorPicker.listShadow};
    background: ${e=>e.theme.colorPicker.listBackground};
    border-radius: ${e=>e.theme.shape.radiusMedium}px;
    width: ${e=>e.theme.measurements.color.colorPicker.width}px;
    height: ${e=>e.theme.measurements.color.colorPicker.height}px;
    left: 8px;
    z-index: 1;
  }
`,Ye=$(ie)`
  margin-top: 8px;
`,Je=$(ae)`
  margin-top: 8px;
`,Ze=$.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`,Qe=$.div`
  display: flex;
`;class de extends c.Component{constructor(e){super(e);this.node=c.createRef();this.saturationRef=null;this.hueRef=null;this.opacityRef=null;this.checkId=(e,r,t)=>{let o=e,n=0;for(;o.parentElement&&n<t;)if(o=o.parentElement,n+=1,o.id===r)return!0;return!1};this.handleOutsideClick=e=>{var i;const{parentId:r,onRequestClose:t,onAddSnapshot:o}=this.props,{color:n}=this.state;if(((i=this.node.current)==null?void 0:i.contains(e.target))||this.checkId(e.target,r.replace(" ","-"),5)&&e.target.classList.contains("photoeditorsdk-active"))return;this.setState({hexInputValue:n.toHexString()}),t&&t(),o&&o()};this.onChange=e=>{const{onChange:r}=this.props;r({color:e.toRgbArray(),colorString:e.toRgbString()})};this.onHexValueChange=e=>{if(e.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i)){const r=new m(e);this.onChange(r),this.setState({color:r,hue:r.toHsl().h}),this.saturationRef.current.wrappedInstance.setPositionFromColor(r),this.hueRef.current.wrappedInstance.setPositionFromColor(r)}this.setState({hexInputValue:e})};this.onAlphaChange=e=>{const{color:r}=this.state,t=r.setAlpha(e);this.onChange(t),this.setState({color:t,hexInputValue:t.toHexString()})};this.onHueChange=e=>{const{color:r}=this.state,{s:t,v:o,a:n}=r.toHsv(),i=new m({h:e,s:t,v:o,a:n});this.onChange(i),this.setState({color:i,hexInputValue:i.toHexString(),hue:e})};this.onSaturationBrightnessChange=(e,r)=>{const{color:t,hue:o}=this.state,{a:n}=t.toHsv(),i=new m({h:o,s:e,v:r,a:n});this.onChange(i),this.setState({color:i,hexInputValue:i.toHexString()})};this.onInputChange=e=>r=>{const{color:t}=this.state;if(r.match(/0*([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/g)||!r.trim()){const o=t.toRgb();o[e]=parseInt(r,10)||0;const n=new m(o);this.onChange(n),this.saturationRef.current.wrappedInstance.setPositionFromColor(n),this.hueRef.current.wrappedInstance.setPositionFromColor(n),this.setState({color:n,hexInputValue:n.toHexString(),hue:n.toHsl().h})}};const r=new m(this.props.color);this.state={color:r,hue:r.toHsl().h,hexInputValue:r.toHexString()},this.saturationRef=c.createRef(),this.hueRef=c.createRef(),this.opacityRef=c.createRef()}componentDidMount(){const{color:e}=this.state;document.addEventListener("mousedown",this.handleOutsideClick,!1),document.addEventListener("touchstart",this.handleOutsideClick,!1),document.addEventListener("keydown",this.handleOutsideClick,!1),this.saturationRef.current.wrappedInstance.setPositionFromColor(e),this.hueRef.current.wrappedInstance.setPositionFromColor(e),this.opacityRef.current.wrappedInstance.setPositionFromColor(e)}componentDidUpdate(e){const{color:r,show:t}=this.props;if(t&&!e.show){const o=new m(r);this.saturationRef.current.wrappedInstance.setPositionFromColor(o),this.hueRef.current.wrappedInstance.setPositionFromColor(o),this.opacityRef.current.wrappedInstance.setPositionFromColor(o),this.setState({color:o,hue:o.toHsl().h,hexInputValue:o.toHexString()})}}componentWillUnmount(){document.removeEventListener("mousedown",this.handleOutsideClick,!1),document.removeEventListener("touchstart",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleOutsideClick,!1)}render(){const{show:e,showArrow:r,direction:t,arrowOffset:o,topOffset:n,leftOffset:i,labelHex:a,labelR:s,labelG:l,labelB:h,labelSliderHue:f,labelSliderOpacity:S}=this.props,{color:x,hexInputValue:A,hue:pe}=this.state,{r:me,g:ge,b:be}=x.toRgb(),xe=x.clone().setAlpha(1).toRgbString(),ve=x.clone().setAlpha(0).toRgbString();return c.createElement("div",{ref:this.node},c.createElement(Xe,{show:e,direction:t,leftOffset:i,topOffset:n},c.createElement(ue,{direction:t},r&&c.createElement(Z,{direction:t,arrowOffset:o}),c.createElement(he,{ref:this.saturationRef,hue:pe,onChange:this.onSaturationBrightnessChange}),c.createElement(g.Spacer,{count:2}),c.createElement(g.Input.Label,{label:f}),c.createElement(Ye,{ref:this.hueRef,onChange:this.onHueChange}),c.createElement(g.Spacer,{count:2}),c.createElement(g.Input.Label,{label:S}),c.createElement(Je,{ref:this.opacityRef,opaqueColor:xe,transparentColor:ve,onChange:this.onAlphaChange}),c.createElement(Ze,null,c.createElement(te,{value:A,label:a,onChange:this.onHexValueChange}),c.createElement(Qe,null,c.createElement(F,{value:me,label:s,onChange:this.onInputChange("r")}),c.createElement(F,{value:ge,label:l,onChange:this.onInputChange("g")}),c.createElement(F,{value:be,label:h,onChange:this.onInputChange("b")}))))))}}de.defaultProps={direction:"bottom",showArrow:!0};var fe=de;ue.defaultProps={theme:K};export{m as Color,fe as ColorPicker};
