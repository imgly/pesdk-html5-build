import{I as te,S as P,ga as S,ha as zt,ia as M}from"../../chunk.EBXAD6YZ.js";import{V as jt}from"../../chunk.XJPT76BQ.js";function Ae(e){return typeof e=="string"&&e.includes("%")}function we(e){return typeof e=="string"&&e.includes(".")&&parseFloat(e)===1}function f(e,r){we(e)&&(e="100%");let t=Ae(e);return e=r===360?e:Math.min(r,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*r),10)/100),Math.abs(e-r)<1e-6?1:(r===360?e=(e<0?e%r+r:e%r)/parseFloat(String(r)):e=e%r/parseFloat(String(r)),e)}function D(e){return e=parseFloat(e),(Number.isNaN(e)||e<0||e>1)&&(e=1),e}function F(e){return e<=1?`${Number(e)*100}%`:e}function w(e){return e.length===1?`0${e}`:String(e)}function K(e,r,t){return{r:f(e,255)*255,g:f(r,255)*255,b:f(t,255)*255}}function U(e,r,t){e=f(e,255),r=f(r,255),t=f(t,255);let o=Math.max(e,r,t),n=Math.min(e,r,t),i=0,a=0,s=(o+n)/2;if(o===n)a=0,i=0;else{let l=o-n;switch(a=s>.5?l/(2-o-n):l/(o+n),o){case e:i=(r-t)/l+(r<t?6:0);break;case r:i=(t-e)/l+2;break;case t:i=(e-r)/l+4;break;default:break}i/=6}return{h:i,s:a,l:s}}function ie(e,r,t){let o,n,i;e=f(e,360),r=f(r,100),t=f(t,100);function a(s,l,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?s+(l-s)*(6*c):c<1/2?l:c<2/3?s+(l-s)*(2/3-c)*6:s}if(r===0)n=t,i=t,o=t;else{let s=t<.5?t*(1+r):t+r-t*r,l=2*t-s;o=a(l,s,e+1/3),n=a(l,s,e),i=a(l,s,e-1/3)}return{r:o*255,g:n*255,b:i*255}}function X(e,r,t){e=f(e,255),r=f(r,255),t=f(t,255);let o=Math.max(e,r,t),n=Math.min(e,r,t),i=0,a=o,s=o-n,l=o===0?0:s/o;if(o===n)i=0;else{switch(o){case e:i=(r-t)/s+(r<t?6:0);break;case r:i=(t-e)/s+2;break;case t:i=(e-r)/s+4;break;default:break}i/=6}return{h:i,s:l,v:a}}function se(e,r,t){e=f(e,360)*6,r=f(r,100),t=f(t,100);let o=Math.floor(e),n=e-o,i=t*(1-r),a=t*(1-n*r),s=t*(1-(1-n)*r),l=o%6,c=[t,a,i,i,s,t][l],u=[s,t,t,a,i,i][l],h=[i,i,s,t,t,a][l];return{r:c*255,g:u*255,b:h*255}}function _(e,r,t,o){let n=[w(Math.round(e).toString(16)),w(Math.round(r).toString(16)),w(Math.round(t).toString(16))];return o&&n[0].charAt(0)===n[0].charAt(1)&&n[1].charAt(0)===n[1].charAt(1)&&n[2].charAt(0)===n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function He(e){return Math.round(parseFloat(e)*255).toString(16)}function b(e){return parseInt(e,16)}function Y(e){return b(e)/255}function ae(e,r,t,o,n){let i=[w(Math.round(e).toString(16)),w(Math.round(r).toString(16)),w(Math.round(t).toString(16)),w(He(o))];return n&&i[0].charAt(0)===i[0].charAt(1)&&i[1].charAt(0)===i[1].charAt(1)&&i[2].charAt(0)===i[2].charAt(1)&&i[3].charAt(0)===i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}var I={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};var $e="[-\\+]?\\d+%?",Me="[-\\+]?\\d*\\.\\d+%?",H=`(?:${Me})|(?:${$e})`,Z=`[\\s|\\(]+(${H})[,|\\s]+(${H})[,|\\s]+(${H})\\s*\\)?`,J=`[\\s|\\(]+(${H})[,|\\s]+(${H})[,|\\s]+(${H})[,|\\s]+(${H})\\s*\\)?`,k={CSS_UNIT:new RegExp(H),rgb:new RegExp(`rgb${Z}`),rgba:new RegExp(`rgba${J}`),hsl:new RegExp(`hsl${Z}`),hsla:new RegExp(`hsla${J}`),hsv:new RegExp(`hsv${Z}`),hsva:new RegExp(`hsva${J}`),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function x(e){return Boolean(k.CSS_UNIT.exec(String(e)))}function Pe(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let r=!1;if(I[e])e=I[e],r=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let t=k.rgb.exec(e);return t?{r:t[1],g:t[2],b:t[3]}:(t=k.rgba.exec(e),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=k.hsl.exec(e),t?{h:t[1],s:t[2],l:t[3]}:(t=k.hsla.exec(e),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=k.hsv.exec(e),t?{h:t[1],s:t[2],v:t[3]}:(t=k.hsva.exec(e),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=k.hex8.exec(e),t?{r:b(t[1]),g:b(t[2]),b:b(t[3]),a:Y(t[4]),format:r?"name":"hex8"}:(t=k.hex6.exec(e),t?{r:b(t[1]),g:b(t[2]),b:b(t[3]),format:r?"name":"hex"}:(t=k.hex4.exec(e),t?{r:b(t[1]+t[1]),g:b(t[2]+t[2]),b:b(t[3]+t[3]),a:Y(t[4]+t[4]),format:r?"name":"hex8"}:(t=k.hex3.exec(e),t?{r:b(t[1]+t[1]),g:b(t[2]+t[2]),b:b(t[3]+t[3]),format:r?"name":"hex"}:!1)))))))))}function le(e){let r={r:0,g:0,b:0},t=1,o=null,n=null,i=null,a=!1,s=!1;if(typeof e=="string"&&(e=Pe(e)),Array.isArray(e)){let[l,c,u]=e;x(l)&&x(c)&&x(u)&&(r=K(l*255,c*255,u*255),a=!0,s="rgb"),e.length===4&&(t=e[3])}return typeof e=="object"&&(x(e.r)&&x(e.g)&&x(e.b)?(r=K(e.r,e.g,e.b),a=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):x(e.h)&&x(e.s)&&x(e.v)?(o=F(e.s),n=F(e.v),r=se(e.h,o,n),a=!0,s="hsv"):x(e.h)&&x(e.s)&&x(e.l)&&(o=F(e.s),i=F(e.l),r=ie(e.h,o,i),a=!0,s="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(t=e.a)),t=D(t),{ok:a,format:e.format||s,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:t}}var B=class{constructor(r="",t={}){if(r instanceof B)return r;this.originalInput=r;let o=le(r);this.originalInput=r,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=t.format||o.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}getAlpha(){return this.a}setAlpha(r){return this.a=D(r),this.roundA=Math.round(100*this.a)/100,this}toHsv(){let r=X(this.r,this.g,this.b);return{h:r.h*360,s:r.s,v:r.v,a:this.a}}toHsvString(){let r=X(this.r,this.g,this.b),t=Math.round(r.h*360),o=Math.round(r.s*100),n=Math.round(r.v*100);return this.a===1?`hsv(${t}, ${o}%, ${n}%)`:`hsva(${t}, ${o}%, ${n}%, ${this.roundA})`}toHsl(){let r=U(this.r,this.g,this.b);return{h:r.h*360,s:r.s,l:r.l,a:this.a}}toHslString(){let r=U(this.r,this.g,this.b),t=Math.round(r.h*360),o=Math.round(r.s*100),n=Math.round(r.l*100);return this.a===1?`hsl(${t}, ${o}%, ${n}%)`:`hsla(${t}, ${o}%, ${n}%, ${this.roundA})`}toHex(r=!1){return _(this.r,this.g,this.b,r)}toHexString(r=!1){return`#${this.toHex(r)}`}toHex8(r=!1){return ae(this.r,this.g,this.b,this.a,r)}toHex8String(r=!1){return`#${this.toHex8(r)}`}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbArray(){return[Math.round(this.r),Math.round(this.g),Math.round(this.b),this.a]}toRgbString(){let r=Math.round(this.r),t=Math.round(this.g),o=Math.round(this.b);return`rgba(${r}, ${t}, ${o}, ${this.roundA})`}toPercentageRgb(){let r=t=>`${Math.round(f(t,255)*100)}%`;return{r:r(this.r),g:r(this.g),b:r(this.b),a:this.a}}toPercentageRgbString(){let r=t=>Math.round(f(t,255)*100);return this.a===1?`rgb(${r(this.r)}%, ${r(this.g)}%, ${r(this.b)}%)`:`rgba(${r(this.r)}%, ${r(this.g)}%, ${r(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let r=`#${_(this.r,this.g,this.b,!1)}`;for(let t of Object.keys(I))if(I[t]===r)return t;return!1}toString(r){let t=Boolean(r);r=r||this.format;let o=this.a<1&&this.a>=0;if(!t&&o&&r&&(r.startsWith("hex")||r==="name"))return r==="name"&&this.a===0?this.toName():this.toRgbString();switch(r){case"rgb":return this.toRgbString();case"prgb":return this.toPercentageRgbString();case"hex":case"hex6":return this.toHexString();case"hex3":return this.toHexString(!0);case"hex4":return this.toHex8String(!0);case"hex8":return this.toHex8String();case"hsl":return this.toHslString();case"hsv":return this.toHsvString();case"name":return this.toName();default:return this.toHexString()}}clone(){return new B(this.toString())}},y=B;import d from"react";import E,{css as Ce}from"styled-components";import Re,{css as L}from"styled-components";var Te=Re.div`
  position: absolute;
  width: ${e=>e.theme.measurements.color.colorPicker.arrow.width}px;
  height: ${e=>e.theme.measurements.color.colorPicker.arrow.width/2}px;
  overflow: hidden;
  pointer-events: none;
  ${e=>e.direction==="bottom"?L`
          bottom: 100%;
        `:L`
          top: 100%;
        `}
  left: ${e=>e.arrowOffset}px;
  :after {
    content: '';
    position: absolute;
    width: ${e=>e.theme.measurements.color.colorPicker.arrow.width/2}px;
    height: ${e=>e.theme.measurements.color.colorPicker.arrow.width/2}px;
    left: 50%;
    ${e=>e.direction==="bottom"?L`
            transform: translate(-50%, 50%) rotate(45deg);
          `:L`
            transform: translate(-50%, -50%) rotate(45deg);
          `}
    background-color: ${e=>e.theme.colorPicker.listBackground};
    pointer-events: none;
  }
`,ce=Te;import Q from"react";import ue from"styled-components";var Ie=ue.div`
  text-align: center;
  width: 28px;
  padding-left: 4px;
`,Be=ue(S.Input.Text)`
  input {
    text-align: center;
    border-bottom: 1px solid
      ${e=>e.theme.colorPicker.inputBorderColor};
  }
`,Oe=({value:e,label:r,onChange:t})=>Q.createElement(Ie,null,Q.createElement(S.Input.Label,{label:r}),Q.createElement(Be,{min:0,max:255,value:e,onChange:t})),V=Oe;import ee from"react";import he from"styled-components";var Ee=he.div`
  text-align: left;
  width: 62px;
`,Fe=he(S.Input.Text)`
  input {
    text-align: left;
    border-bottom: 1px solid
      ${e=>e.theme.colorPicker.inputBorderColor};
  }
`,De=({value:e,label:r,onChange:t})=>ee.createElement(Ee,null,ee.createElement(S.Input.Label,{label:r}),ee.createElement(Fe,{value:e.toUpperCase(),onChange:t})),fe=De;import oe,{useRef as Ue,useState as Xe,useEffect as _e}from"react";import Ye from"styled-components";import Le from"styled-components";var $=Le.div.attrs(e=>({style:{left:e.position[0]||`${0}px`,top:e.position[1]||`${0}px`}}))`
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
`;$.defaultProps={theme:te};var me=jt(zt());import re,{useState as Ve,useRef as de,forwardRef as Ge,useCallback as ze}from"react";import je from"styled-components";var qe=je.div`
  position: relative;
  height: 14px;
  width: 100%;
`,Ne=e=>r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})},O=M(Ge(({surface:e,onChange:r,className:t,children:o},n)=>{let i=de(null),a=de(null),{config:s}=P(),[l,c]=Ve(!1),u=p=>{let C=s.measurements.color.colorPicker.thumb.size/2,v=s.measurements.color.colorPicker.thumb.size,A=0,T=0;A=p.clientX,T=p.clientY;let{top:j,left:q,width:ye,height:ve}=i.current.getBoundingClientRect(),N=A-q-C,W=T-j-C;N=Math.max(0,Math.min(ye-v,N)),W=Math.max(0,Math.min(ve-v,W)),r&&r([N,W])},h=p=>{c(!0),u(p)},m=ze(me.default(p=>{l&&u(p)},10),[l]),g=()=>{l&&c(!1)};return re.createElement(qe,{ref:Ne([i,n]),className:t},re.createElement(S.DraggableCore,{nodeRef:a,onStart:h,onDrag:m,onStop:g},re.createElement("div",{ref:a},e)),o)}));import{css as We}from"styled-components";var Ke=We`
  position: absolute;
  top: 3px;
  left: 0;
  width: 100%;
  height: 8px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`,R=Ke;var Ze=Ye.div`
  ${R}
  background: linear-gradient(90deg, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%, #00F 66.66%, #F0F 83.33%, #F00 100%);
  height: 8px;
`,pe=M(({hue:e,onChange:r})=>{let[t,o]=Xe(0),n=Ue(null),{config:i}=P(),a=s=>{if(n.current){let[l]=s,{offsetWidth:c}=n.current,u=c-i.measurements.color.colorPicker.thumb.size,h=l*c/u,m=Math.max(0,Math.min(360,h/c*360));r(m),o(l)}};return _e(()=>{if(n.current){let{offsetWidth:s}=n.current,l=0,c=s-i.measurements.color.colorPicker.thumb.size;l=e*s/360,o(l*c/s)}},[e]),oe.createElement(O,{surface:oe.createElement(Ze,null),ref:n,onChange:a},oe.createElement($,{position:[t,0]}))});import G,{useState as Je,useRef as Qe,useEffect as et}from"react";import be from"styled-components";var tt=be.div.attrs(e=>({style:{background:`linear-gradient(to left, ${e.transparentColor} 0%, ${e.opaqueColor} 100%)`}}))`
  ${R}
  z-index: 1;
`,rt=be.div.attrs(e=>({style:{backgroundImage:`url(${e.url})`}}))`
  ${R}
  z-index: 0;
  background-repeat: repeat-x;
  background-size: contain;
  background-position: left;
`,ge=M(({color:e,opaqueColor:r,transparentColor:t,onChange:o})=>{let{config:n}=P(),[i,a]=Je(0),s=Qe(null),l=n.assetProvider.getPath("controls","/tiled-background.png"),c=u=>{if(s.current){let{offsetWidth:h}=s.current,[m]=u,g=h-n.measurements.color.colorPicker.thumb.size,p=m*h/g,C=(h-p)/h,v=Math.round((C+Number.EPSILON)*100)/100,A=Math.min(1,Math.max(0,v));o(A),a(m)}};return et(()=>{if(s.current){let{offsetWidth:u}=s.current,h=0,m=u-n.measurements.color.colorPicker.thumb.size;h=(1-e.toHsv().a)*u,a(h*m/u)}},[e.toString()]),G.createElement(O,{ref:s,surface:G.createElement(tt,{opaqueColor:r,transparentColor:t}),onChange:c},G.createElement(rt,{url:l}),G.createElement($,{position:[i,0]}))});import ne,{useState as ot,useRef as nt,useEffect as it}from"react";import xe from"styled-components";var st=xe.div.attrs(e=>({style:{backgroundColor:`hsl(${e.hue}, 100%, 50%)`}}))`
  ${R}
  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)),
   linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  height: ${e=>e.theme.measurements.color.colorPicker.saturationSlider.height}px;
  top: 0px;
`,at=xe(O)`
  height: ${e=>e.theme.measurements.color.colorPicker.saturationSlider.height}px;
  margin-top: 0px;
`,Se=M(({color:e,hue:r,onChange:t})=>{let[o,n]=ot([0,0]),i=nt(null),{config:a}=P();return it(()=>{let{s:l,v:c}=e.toHsv();if(i.current){let{offsetWidth:u,offsetHeight:h}=i.current,m=u-a.measurements.color.colorPicker.thumb.size,g=h-a.measurements.color.colorPicker.thumb.size,p=l*u,C=(1-c)*h;n([p*m/u,C*g/h])}},[e.toString()]),ne.createElement(at,{ref:i,surface:ne.createElement(st,{hue:r}),onChange:l=>{if(i.current){let[c,u]=l,{offsetHeight:h,offsetWidth:m}=i.current,g=m-a.measurements.color.colorPicker.thumb.size,p=h-a.measurements.color.colorPicker.thumb.size,C=c*m/g,v=u*h/p,A=Math.min(1,Math.max(0,C/m)),T=Math.min(1,Math.max(0,(h-v)/h));t(A,T),n([c,u])}}},ne.createElement($,{position:o}))});var lt=E.div`
  position: absolute;
  left: ${e=>e.leftOffset}px;
  top: ${e=>e.topOffset}px;
  z-index: ${e=>e.theme.measurements.zIndex.input.list};
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  ${e=>e.show&&Ce`
      display: block;
      opacity: 1;
      transition: opacity 0.3s ease-out;
    `}
`,ke=E.div`
  &&& {
    position: absolute;
    ${e=>e.direction==="top"&&Ce`
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
`,ct=E(pe)`
  margin-top: 8px;
`,ut=E(ge)`
  margin-top: 8px;
`,ht=E.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`,ft=E.div`
  display: flex;
`,z=class extends d.Component{constructor(r){super(r);this.node=d.createRef();this.checkId=(r,t,o)=>{let n=r,i=0;for(;n.parentElement&&i<o;)if(n=n.parentElement,i+=1,n.id===t)return!0;return!1};this.handleOutsideClick=r=>{var a;let{onRequestClose:t,onAddSnapshot:o,show:n}=this.props,{color:i}=this.state;if(n){if((a=this.node.current)==null?void 0:a.contains(r.target))return;this.setState({hexInputValue:i.toHexString()}),t&&t(),o&&o()}};this.onChange=r=>{let{onChange:t}=this.props;t({color:r.toRgbArray(),colorString:r.toRgbString()})};this.onHexValueChange=r=>{if(r.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i)){let t=new y(r);this.onChange(t),this.setState({color:t,hue:t.toHsl().h})}this.setState({hexInputValue:r})};this.onAlphaChange=r=>{let{color:t}=this.state,o=t.setAlpha(r);this.onChange(o),this.setState({color:o,hexInputValue:o.toHexString()})};this.onHueChange=r=>{let{color:t}=this.state,{s:o,v:n,a:i}=t.toHsv(),a=new y({h:r,s:o,v:n,a:i});this.onChange(a),this.setState({color:a,hexInputValue:a.toHexString(),hue:r})};this.onSaturationBrightnessChange=(r,t)=>{let{color:o,hue:n}=this.state,{a:i}=o.toHsv(),a=new y({h:n,s:r,v:t,a:i});this.onChange(a),this.setState({color:a,hexInputValue:a.toHexString()})};this.onInputChange=r=>t=>{let{color:o}=this.state;if(t.match(/0*([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/g)||!t.trim()){let n=o.toRgb();n[r]=parseInt(t,10)||0;let i=new y(n);this.onChange(i),this.setState({color:i,hexInputValue:i.toHexString(),hue:i.toHsl().h})}};let{color:t}=this.props,o=new y(t);this.state={color:o,hue:o.toHsl().h,hexInputValue:o.toHexString()}}componentDidMount(){document.addEventListener("mousedown",this.handleOutsideClick,!1),document.addEventListener("touchstart",this.handleOutsideClick,!1),document.addEventListener("keydown",this.handleOutsideClick,!1)}componentDidUpdate(r){let{color:t,show:o}=this.props;if(o&&!r.show){let n=new y(t);this.setState({color:n,hue:n.toHsl().h,hexInputValue:n.toHexString()})}}componentWillUnmount(){document.removeEventListener("mousedown",this.handleOutsideClick,!1),document.removeEventListener("touchstart",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleOutsideClick,!1)}render(){let{show:r,showArrow:t,direction:o,arrowOffset:n,topOffset:i,leftOffset:a,labelHex:s,labelR:l,labelG:c,labelB:u,labelSliderHue:h,labelSliderOpacity:m}=this.props,{color:g,hexInputValue:p,hue:C}=this.state,{r:v,g:A,b:T}=g.toRgb(),j=g.clone().setAlpha(1).toRgbString(),q=g.clone().setAlpha(0).toRgbString();return d.createElement("div",{ref:this.node},d.createElement(lt,{show:r,direction:o,leftOffset:a,topOffset:i},d.createElement(ke,{direction:o},t&&d.createElement(ce,{direction:o,arrowOffset:n}),d.createElement(Se,{color:g,hue:C,onChange:this.onSaturationBrightnessChange}),d.createElement(S.Spacer,{count:2}),d.createElement(S.Input.Label,{label:h}),d.createElement(ct,{hue:C,onChange:this.onHueChange}),d.createElement(S.Spacer,{count:2}),d.createElement(S.Input.Label,{label:m}),d.createElement(ut,{color:g,opaqueColor:j,transparentColor:q,onChange:this.onAlphaChange}),d.createElement(ht,null,d.createElement(fe,{value:p,label:s,onChange:this.onHexValueChange}),d.createElement(ft,null,d.createElement(V,{value:v,label:l,onChange:this.onInputChange("r")}),d.createElement(V,{value:A,label:c,onChange:this.onInputChange("g")}),d.createElement(V,{value:T,label:u,onChange:this.onInputChange("b")}))))))}};z.defaultProps={direction:"bottom",showArrow:!0};ke.defaultProps={theme:te};export{y as Color,z as ColorPicker};
