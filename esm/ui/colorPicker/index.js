import{I as X,fa as m,ga as Mt,ha as k,ka as v}from"../../chunk.RSMXMO7Z.js";import{P as Rt}from"../../chunk.WNPNZHNS.js";function Ae(e){return typeof e=="string"&&e.includes("%")}function we(e){return typeof e=="string"&&e.includes(".")&&parseFloat(e)===1}function u(e,r){we(e)&&(e="100%");let t=Ae(e);return e=r===360?e:Math.min(r,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*r),10)/100),Math.abs(e-r)<1e-6?1:(r===360?e=(e<0?e%r+r:e%r)/parseFloat(String(r)):e=e%r/parseFloat(String(r)),e)}function B(e){return e=parseFloat(e),(Number.isNaN(e)||e<0||e>1)&&(e=1),e}function F(e){return e<=1?`${Number(e)*100}%`:e}function S(e){return e.length===1?`0${e}`:String(e)}function G(e,r,t){return{r:u(e,255)*255,g:u(r,255)*255,b:u(t,255)*255}}function z(e,r,t){e=u(e,255),r=u(r,255),t=u(t,255);let o=Math.max(e,r,t),n=Math.min(e,r,t),i=0,s=0,a=(o+n)/2;if(o===n)s=0,i=0;else{let l=o-n;switch(s=a>.5?l/(2-o-n):l/(o+n),o){case e:i=(r-t)/l+(r<t?6:0);break;case r:i=(t-e)/l+2;break;case t:i=(e-r)/l+4;break;default:break}i/=6}return{h:i,s,l:a}}function J(e,r,t){let o,n,i;e=u(e,360),r=u(r,100),t=u(t,100);function s(a,l,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+(l-a)*(6*c):c<1/2?l:c<2/3?a+(l-a)*(2/3-c)*6:a}if(r===0)n=t,i=t,o=t;else{let a=t<.5?t*(1+r):t+r-t*r,l=2*t-a;o=s(l,a,e+1/3),n=s(l,a,e),i=s(l,a,e-1/3)}return{r:o*255,g:n*255,b:i*255}}function j(e,r,t){e=u(e,255),r=u(r,255),t=u(t,255);let o=Math.max(e,r,t),n=Math.min(e,r,t),i=0,s=o,a=o-n,l=o===0?0:a/o;if(o===n)i=0;else{switch(o){case e:i=(r-t)/a+(r<t?6:0);break;case r:i=(t-e)/a+2;break;case t:i=(e-r)/a+4;break;default:break}i/=6}return{h:i,s:l,v:s}}function Q(e,r,t){e=u(e,360)*6,r=u(r,100),t=u(t,100);let o=Math.floor(e),n=e-o,i=t*(1-r),s=t*(1-n*r),a=t*(1-(1-n)*r),l=o%6,c=[t,s,i,i,a,t][l],d=[a,t,t,s,i,i][l],b=[i,i,a,t,t,s][l];return{r:c*255,g:d*255,b:b*255}}function q(e,r,t,o){let n=[S(Math.round(e).toString(16)),S(Math.round(r).toString(16)),S(Math.round(t).toString(16))];return o&&n[0].charAt(0)===n[0].charAt(1)&&n[1].charAt(0)===n[1].charAt(1)&&n[2].charAt(0)===n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Pe(e){return Math.round(parseFloat(e)*255).toString(16)}function f(e){return parseInt(e,16)}function N(e){return f(e)/255}function ee(e,r,t,o,n){let i=[S(Math.round(e).toString(16)),S(Math.round(r).toString(16)),S(Math.round(t).toString(16)),S(Pe(o))];return n&&i[0].charAt(0)===i[0].charAt(1)&&i[1].charAt(0)===i[1].charAt(1)&&i[2].charAt(0)===i[2].charAt(1)&&i[3].charAt(0)===i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}var P={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};var He="[-\\+]?\\d+%?",$e="[-\\+]?\\d*\\.\\d+%?",y=`(?:${$e})|(?:${He})`,W=`[\\s|\\(]+(${y})[,|\\s]+(${y})[,|\\s]+(${y})\\s*\\)?`,K=`[\\s|\\(]+(${y})[,|\\s]+(${y})[,|\\s]+(${y})[,|\\s]+(${y})\\s*\\)?`,g={CSS_UNIT:new RegExp(y),rgb:new RegExp(`rgb${W}`),rgba:new RegExp(`rgba${K}`),hsl:new RegExp(`hsl${W}`),hsla:new RegExp(`hsla${K}`),hsv:new RegExp(`hsv${W}`),hsva:new RegExp(`hsva${K}`),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function p(e){return Boolean(g.CSS_UNIT.exec(String(e)))}function Me(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let r=!1;if(P[e])e=P[e],r=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let t=g.rgb.exec(e);return t?{r:t[1],g:t[2],b:t[3]}:(t=g.rgba.exec(e),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=g.hsl.exec(e),t?{h:t[1],s:t[2],l:t[3]}:(t=g.hsla.exec(e),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=g.hsv.exec(e),t?{h:t[1],s:t[2],v:t[3]}:(t=g.hsva.exec(e),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=g.hex8.exec(e),t?{r:f(t[1]),g:f(t[2]),b:f(t[3]),a:N(t[4]),format:r?"name":"hex8"}:(t=g.hex6.exec(e),t?{r:f(t[1]),g:f(t[2]),b:f(t[3]),format:r?"name":"hex"}:(t=g.hex4.exec(e),t?{r:f(t[1]+t[1]),g:f(t[2]+t[2]),b:f(t[3]+t[3]),a:N(t[4]+t[4]),format:r?"name":"hex8"}:(t=g.hex3.exec(e),t?{r:f(t[1]+t[1]),g:f(t[2]+t[2]),b:f(t[3]+t[3]),format:r?"name":"hex"}:!1)))))))))}function te(e){let r={r:0,g:0,b:0},t=1,o=null,n=null,i=null,s=!1,a=!1;if(typeof e=="string"&&(e=Me(e)),Array.isArray(e)){let[l,c,d]=e;p(l)&&p(c)&&p(d)&&(r=G(l*255,c*255,d*255),s=!0,a="rgb"),e.length===4&&(t=e[3])}return typeof e=="object"&&(p(e.r)&&p(e.g)&&p(e.b)?(r=G(e.r,e.g,e.b),s=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):p(e.h)&&p(e.s)&&p(e.v)?(o=F(e.s),n=F(e.v),r=Q(e.h,o,n),s=!0,a="hsv"):p(e.h)&&p(e.s)&&p(e.l)&&(o=F(e.s),i=F(e.l),r=J(e.h,o,i),s=!0,a="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(t=e.a)),t=B(t),{ok:s,format:e.format||a,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:t}}var H=class{constructor(r="",t={}){if(r instanceof H)return r;this.originalInput=r;let o=te(r);this.originalInput=r,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=t.format||o.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}getAlpha(){return this.a}setAlpha(r){return this.a=B(r),this.roundA=Math.round(100*this.a)/100,this}toHsv(){let r=j(this.r,this.g,this.b);return{h:r.h*360,s:r.s,v:r.v,a:this.a}}toHsvString(){let r=j(this.r,this.g,this.b),t=Math.round(r.h*360),o=Math.round(r.s*100),n=Math.round(r.v*100);return this.a===1?`hsv(${t}, ${o}%, ${n}%)`:`hsva(${t}, ${o}%, ${n}%, ${this.roundA})`}toHsl(){let r=z(this.r,this.g,this.b);return{h:r.h*360,s:r.s,l:r.l,a:this.a}}toHslString(){let r=z(this.r,this.g,this.b),t=Math.round(r.h*360),o=Math.round(r.s*100),n=Math.round(r.l*100);return this.a===1?`hsl(${t}, ${o}%, ${n}%)`:`hsla(${t}, ${o}%, ${n}%, ${this.roundA})`}toHex(r=!1){return q(this.r,this.g,this.b,r)}toHexString(r=!1){return`#${this.toHex(r)}`}toHex8(r=!1){return ee(this.r,this.g,this.b,this.a,r)}toHex8String(r=!1){return`#${this.toHex8(r)}`}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbArray(){return[Math.round(this.r),Math.round(this.g),Math.round(this.b),this.a]}toRgbString(){let r=Math.round(this.r),t=Math.round(this.g),o=Math.round(this.b);return`rgba(${r}, ${t}, ${o}, ${this.roundA})`}toPercentageRgb(){let r=t=>`${Math.round(u(t,255)*100)}%`;return{r:r(this.r),g:r(this.g),b:r(this.b),a:this.a}}toPercentageRgbString(){let r=t=>Math.round(u(t,255)*100);return this.a===1?`rgb(${r(this.r)}%, ${r(this.g)}%, ${r(this.b)}%)`:`rgba(${r(this.r)}%, ${r(this.g)}%, ${r(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let r=`#${q(this.r,this.g,this.b,!1)}`;for(let t of Object.keys(P))if(P[t]===r)return t;return!1}toString(r){let t=Boolean(r);r=r||this.format;let o=this.a<1&&this.a>=0;if(!t&&o&&r&&(r.startsWith("hex")||r==="name"))return r==="name"&&this.a===0?this.toName():this.toRgbString();switch(r){case"rgb":return this.toRgbString();case"prgb":return this.toPercentageRgbString();case"hex":case"hex6":return this.toHexString();case"hex3":return this.toHexString(!0);case"hex4":return this.toHex8String(!0);case"hex8":return this.toHex8String();case"hsl":return this.toHslString();case"hsv":return this.toHsvString();case"name":return this.toName();default:return this.toHexString()}}clone(){return new H(this.toString())}},x=H;import h from"react";import R,{css as ge}from"styled-components";import Re,{css as O}from"styled-components";var Ie=Re.div`
  position: absolute;
  width: ${e=>e.theme.measurements.color.colorPicker.arrow.width}px;
  height: ${e=>e.theme.measurements.color.colorPicker.arrow.width/2}px;
  overflow: hidden;
  pointer-events: none;
  ${e=>e.direction==="bottom"?O`
          bottom: 100%;
        `:O`
          top: 100%;
        `}
  left: ${e=>e.arrowOffset}px;
  :after {
    content: '';
    position: absolute;
    width: ${e=>e.theme.measurements.color.colorPicker.arrow.width/2}px;
    height: ${e=>e.theme.measurements.color.colorPicker.arrow.width/2}px;
    left: 50%;
    ${e=>e.direction==="bottom"?O`
            transform: translate(-50%, 50%) rotate(45deg);
          `:O`
            transform: translate(-50%, -50%) rotate(45deg);
          `}
    background-color: ${e=>e.theme.colorPicker.listBackground};
    pointer-events: none;
  }
`,re=Ie;import U from"react";import oe from"styled-components";var Fe=oe.div`
  text-align: center;
  width: 28px;
  padding-left: 4px;
`,Te=oe(m.Input.Text)`
  input {
    text-align: center;
    border-bottom: 1px solid
      ${e=>e.theme.colorPicker.inputBorderColor};
  }
`,Be=({value:e,label:r,onChange:t})=>U.createElement(Fe,null,U.createElement(m.Input.Label,{label:r}),U.createElement(Te,{min:0,max:255,value:e,onChange:t})),D=Be;import _ from"react";import ne from"styled-components";var Oe=ne.div`
  text-align: left;
  width: 62px;
`,De=ne(m.Input.Text)`
  input {
    text-align: left;
    border-bottom: 1px solid
      ${e=>e.theme.colorPicker.inputBorderColor};
  }
`,Ee=({value:e,label:r,onChange:t})=>_.createElement(Oe,null,_.createElement(m.Input.Label,{label:r}),_.createElement(De,{value:e.toUpperCase(),onChange:t})),ie=Ee;import E from"react";import Ne from"styled-components";import Le from"styled-components";var se=Le.div.attrs(e=>({style:{left:e.position.x||`${0}px`,top:e.position.y||`${0}px`}}))`
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
`,$=se;se.defaultProps={theme:X};var ae=Rt(Mt());import Y from"react";import Ve from"react-dom";import Ge from"styled-components";var ze=Ge.div`
  position: relative;
  height: 14px;
  width: 100%;
`,Z=class extends Y.Component{constructor(r){super(r);this.onDragStart=r=>{this.setState({dragging:!0}),this.onPositionChange(r)};this.onPositionChange=r=>{let{onChange:t,config:o}=this.props,n=o.measurements.color.colorPicker.thumb.size/2,i=o.measurements.color.colorPicker.thumb.size,s=0,a=0;s=r.clientX,a=r.clientY;let l=Ve.findDOMNode(this);if(l&&l instanceof HTMLElement){let{top:c,left:d,width:b,height:I}=l.getBoundingClientRect(),C=s-d-n,w=a-c-n;C=Math.max(0,Math.min(b-i,C)),w=Math.max(0,Math.min(I-i,w)),t&&t({x:C,y:w}),this.setState({x:C,y:w})}};this.onDrag=r=>{this.state.dragging&&this.onPositionChange(r)};this.onDragStop=()=>{this.state.dragging&&this.setState({dragging:!1})};this.state={dragging:!1,x:r.defaultPosition.x,y:r.defaultPosition.y},this.debouncedOnDrag=ae.default(this.onDrag,10)}componentWillUnmount(){this.setState({dragging:!1})}render(){let{surface:r,setInnerRef:t,className:o,children:n}=this.props;return Y.createElement(ze,{ref:t,className:o},Y.createElement(m.DraggableCore,{onStart:this.onDragStart,onDrag:this.debouncedOnDrag,onStop:this.onDragStop},r),n)}};Z.defaultProps={defaultPosition:{x:0,y:0}};var M=v("config","active")(k(Z));import{css as je}from"styled-components";var qe=je`
  position: absolute;
  top: 3px;
  left: 0;
  width: 100%;
  height: 8px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`,A=qe;var We=Ne.div`
  ${A}
  background: linear-gradient(90deg, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%, #00F 66.66%, #F0F 83.33%, #F00 100%);
  height: 8px;
`,le=class extends E.Component{constructor(r){super(r);this.onKnob=({x:r})=>{let{onChange:t,config:o}=this.props,{offsetWidth:n}=this.node,i=n-o.measurements.color.colorPicker.thumb.size,s=r*n/i,a=Math.max(0,Math.min(360,s/n*360));t(a),this.setState({x:r})};this.setPositionFromColor=r=>{let{config:t}=this.props,{offsetWidth:o}=this.node,n=0,i=o-t.measurements.color.colorPicker.thumb.size;this.node&&(n=r.toHsv().h*o/360),this.setState({x:n*i/o})};this.nodeRef=t=>{this.node=t},this.state={x:0}}render(){let{x:r}=this.state;return E.createElement(M,{surface:E.createElement(We,null),setInnerRef:this.nodeRef,onChange:this.onKnob},E.createElement($,{position:{x:r,y:0}}))}},ce=v("config")(k(le));import T from"react";import he from"styled-components";var Ke=he.div.attrs(e=>({style:{background:`linear-gradient(to left, ${e.transparentColor} 0%, ${e.opaqueColor} 100%)`}}))`
  ${A}
  z-index: 1;
`,Ue=he.div.attrs(e=>({style:{backgroundImage:`url(${e.url})`}}))`
  ${A}
  z-index: 0;
  background-repeat: repeat-x;
  background-size: contain;
  background-position: left;
`,ue=class extends T.Component{constructor(r){super(r);this.onKnob=({x:r})=>{let{onChange:t,config:o}=this.props,{offsetWidth:n}=this.node,i=n-o.measurements.color.colorPicker.thumb.size,s=r*n/i,a=(n-s)/n,l=Math.round((a+Number.EPSILON)*100)/100,c=Math.min(1,Math.max(0,l));t(c),this.setState({x:r})};this.setPositionFromColor=r=>{let{config:t}=this.props,{offsetWidth:o}=this.node,n=0,i=o-t.measurements.color.colorPicker.thumb.size;this.node&&(n=(1-r.toHsv().a)*o),this.setState({x:n*i/o})};this.nodeRef=t=>{this.node=t},this.state={x:0}}render(){let{opaqueColor:r,transparentColor:t,config:o}=this.props,{x:n}=this.state,i=o.assetProvider.getPath("controls","/tiled-background.png");return T.createElement(M,{surface:T.createElement(Ke,{opaqueColor:r,transparentColor:t}),setInnerRef:this.nodeRef,onChange:this.onKnob},T.createElement(Ue,{url:i}),T.createElement($,{position:{x:n,y:0}}))}},fe=v("config")(k(ue));import L from"react";import de from"styled-components";var _e=de.div.attrs(e=>({style:{backgroundColor:`hsl(${e.hue}, 100%, 50%)`}}))`
  ${A}
  background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)),
   linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  height: ${e=>e.theme.measurements.color.colorPicker.saturationSlider.height}px;
  top: 0px;
`,Xe=de(M)`
  height: ${e=>e.theme.measurements.color.colorPicker.saturationSlider.height}px;
  margin-top: 0px;
`,pe=class extends L.Component{constructor(r){super(r);this.setPositionFromColor=r=>{let{config:t}=this.props,o={x:0,y:0};if(this.node){let{s:n,v:i}=r.toHsv(),{offsetWidth:s,offsetHeight:a}=this.node,l=s-t.measurements.color.colorPicker.thumb.size,c=a-t.measurements.color.colorPicker.thumb.size,d=n*s,b=(1-i)*a;o.x=d*l/s,o.y=b*c/a}this.setState({position:o})};this.onChange=({x:r,y:t})=>{let{onChange:o,config:n}=this.props,{offsetHeight:i,offsetWidth:s}=this.node,a=s-n.measurements.color.colorPicker.thumb.size,l=i-n.measurements.color.colorPicker.thumb.size,c=r*s/a,d=t*i/l,b=Math.min(1,Math.max(0,c/s)),I=Math.min(1,Math.max(0,(i-d)/i));o(b,I),this.setState({position:{x:r,y:t}})};this.nodeRef=t=>{this.node=t},this.state={position:{x:0,y:0}}}render(){let{hue:r}=this.props,{position:t}=this.state;return L.createElement(Xe,{surface:L.createElement(_e,{hue:r}),setInnerRef:this.nodeRef,onChange:this.onChange},L.createElement($,{position:t}))}},me=v("config")(k(pe));var Ye=R.div`
  position: absolute;
  left: ${e=>e.leftOffset}px;
  top: ${e=>e.topOffset}px;
  z-index: ${e=>e.theme.measurements.zIndex.input.list};
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  ${e=>e.show&&ge`
      display: block;
      opacity: 1;
      transition: opacity 0.3s ease-out;
    `}
`,be=R.div`
  &&& {
    position: absolute;
    ${e=>e.direction==="top"&&ge`
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
`,Ze=R(ce)`
  margin-top: 8px;
`,Je=R(fe)`
  margin-top: 8px;
`,Qe=R.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`,et=R.div`
  display: flex;
`,V=class extends h.Component{constructor(r){super(r);this.node=h.createRef();this.saturationRef=null;this.hueRef=null;this.opacityRef=null;this.checkId=(r,t,o)=>{let n=r,i=0;for(;n.parentElement&&i<o;)if(n=n.parentElement,i+=1,n.id===t)return!0;return!1};this.handleOutsideClick=r=>{var i;let{onRequestClose:t,onAddSnapshot:o}=this.props,{color:n}=this.state;((i=this.node.current)==null?void 0:i.contains(r.target))||(this.setState({hexInputValue:n.toHexString()}),t&&t(),o&&o())};this.onChange=r=>{let{onChange:t}=this.props;t({color:r.toRgbArray(),colorString:r.toRgbString()})};this.onHexValueChange=r=>{if(r.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i)){let t=new x(r);this.onChange(t),this.setState({color:t,hue:t.toHsl().h}),this.saturationRef.current.setPositionFromColor(t),this.hueRef.current.setPositionFromColor(t)}this.setState({hexInputValue:r})};this.onAlphaChange=r=>{let{color:t}=this.state,o=t.setAlpha(r);this.onChange(o),this.setState({color:o,hexInputValue:o.toHexString()})};this.onHueChange=r=>{let{color:t}=this.state,{s:o,v:n,a:i}=t.toHsv(),s=new x({h:r,s:o,v:n,a:i});this.onChange(s),this.setState({color:s,hexInputValue:s.toHexString(),hue:r})};this.onSaturationBrightnessChange=(r,t)=>{let{color:o,hue:n}=this.state,{a:i}=o.toHsv(),s=new x({h:n,s:r,v:t,a:i});this.onChange(s),this.setState({color:s,hexInputValue:s.toHexString()})};this.onInputChange=r=>t=>{let{color:o}=this.state;if(t.match(/0*([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/g)||!t.trim()){let n=o.toRgb();n[r]=parseInt(t,10)||0;let i=new x(n);this.onChange(i),this.saturationRef.current.setPositionFromColor(i),this.hueRef.current.setPositionFromColor(i),this.setState({color:i,hexInputValue:i.toHexString(),hue:i.toHsl().h})}};let{color:t}=this.props,o=new x(t);this.state={color:o,hue:o.toHsl().h,hexInputValue:o.toHexString()},this.saturationRef=h.createRef(),this.hueRef=h.createRef(),this.opacityRef=h.createRef()}componentDidMount(){let{color:r}=this.state;document.addEventListener("mousedown",this.handleOutsideClick,!1),document.addEventListener("touchstart",this.handleOutsideClick,!1),document.addEventListener("keydown",this.handleOutsideClick,!1),this.saturationRef.current.setPositionFromColor(r),this.hueRef.current.setPositionFromColor(r),this.opacityRef.current.setPositionFromColor(r)}componentDidUpdate(r){let{color:t,show:o}=this.props;if(o&&!r.show){let n=new x(t);this.saturationRef.current.setPositionFromColor(n),this.hueRef.current.setPositionFromColor(n),this.opacityRef.current.setPositionFromColor(n),this.setState({color:n,hue:n.toHsl().h,hexInputValue:n.toHexString()})}}componentWillUnmount(){document.removeEventListener("mousedown",this.handleOutsideClick,!1),document.removeEventListener("touchstart",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleOutsideClick,!1)}render(){let{show:r,showArrow:t,direction:o,arrowOffset:n,topOffset:i,leftOffset:s,labelHex:a,labelR:l,labelG:c,labelB:d,labelSliderHue:b,labelSliderOpacity:I}=this.props,{color:C,hexInputValue:w,hue:xe}=this.state,{r:Ce,g:Se,b:ye}=C.toRgb(),ke=C.clone().setAlpha(1).toRgbString(),ve=C.clone().setAlpha(0).toRgbString();return h.createElement("div",{ref:this.node},h.createElement(Ye,{show:r,direction:o,leftOffset:s,topOffset:i},h.createElement(be,{direction:o},t&&h.createElement(re,{direction:o,arrowOffset:n}),h.createElement(me,{ref:this.saturationRef,hue:xe,onChange:this.onSaturationBrightnessChange}),h.createElement(m.Spacer,{count:2}),h.createElement(m.Input.Label,{label:b}),h.createElement(Ze,{ref:this.hueRef,onChange:this.onHueChange}),h.createElement(m.Spacer,{count:2}),h.createElement(m.Input.Label,{label:I}),h.createElement(Je,{ref:this.opacityRef,opaqueColor:ke,transparentColor:ve,onChange:this.onAlphaChange}),h.createElement(Qe,null,h.createElement(ie,{value:w,label:a,onChange:this.onHexValueChange}),h.createElement(et,null,h.createElement(D,{value:Ce,label:l,onChange:this.onInputChange("r")}),h.createElement(D,{value:Se,label:c,onChange:this.onInputChange("g")}),h.createElement(D,{value:ye,label:d,onChange:this.onInputChange("b")}))))))}};V.defaultProps={direction:"bottom",showArrow:!0};be.defaultProps={theme:X};export{x as Color,V as ColorPicker};
