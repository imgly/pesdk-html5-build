import{A as Po,a as U,g as xr,h as rt,l as M,m as Cr,p as J,q as Kr,r as et,s as E,t as Mr,u as nt,w as tt,x as yr,y as ge,z as Fr}from"./chunk.OWDXDSZZ.js";import{C as $e,H as pe,P as No,S as yt,_ as co,a as qo,aa as Ur,c as zo,ca as q,da as k,ea as Jo,fa as s,ha as m,ja as Yr,ka as d,la as qr,p as N}from"./chunk.F2CTWUK7.js";import{I as O,c as H,d as c,h as u,s as x}from"./chunk.DO7F4ZOS.js";import Ho from"react";import{ThemeProvider as Xr}from"styled-components";function Rr(o){return!Object.prototype.hasOwnProperty.call(o,"name")}function on(o){return!Object.prototype.hasOwnProperty.call(o,"name")}var ut=class{};var Ct=class{};var ft=class{constructor(e){this.name=e.name,this.coverImageUrl=e.coverImageUrl}loadCoverImage(e="anonymous"){return new Promise((t,i)=>{let r=new Image;r.addEventListener("load",()=>{t(r)}),r.addEventListener("error",()=>{i(new Error(`Failed to load image at ${this.coverImage}`))}),r.crossOrigin=e,r.src=this.coverImageUrl,this.coverImage=r})}};var ht=class{constructor(e){this.title=e.title,this.category=e.category||e.title,this.thumbUrl=e.thumbUrl,this.rawUrl=e.rawUrl,this.authorName=e.authorName,this.authorAvatar=e.authorAvatar}loadThumbImage(e="anonymous"){return new Promise((t,i)=>{let r=new Image;r.addEventListener("load",()=>{t(r)}),r.addEventListener("error",()=>{i(new Error(`Failed to load image at ${this.thumbUrl}`))}),r.crossOrigin=e,r.src=this.thumbUrl,this.thumbImage=r})}getThumbImage(){return this.thumbUrl}};var Mo=class{getData(e){return new Promise((t,i)=>{let r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="json",r.onload=()=>{let{status:p}=r;p===200?t(r.response):i(new Error(`HTTP Status ${p}`))},r.send()})}},bt=Mo;var gt=class{loadJSON(e){return new bt().getData(e)}getCategories(){return Promise.resolve([])}searchImages(e){return Promise.resolve([])}};import kt from"react";import vt from"react";import St from"styled-components";var It=St(co)`
  width: ${o=>o.theme.measurements.advancedCard.large.width}px;
  height: ${o=>o.theme.measurements.advancedCard.large.height}px;
  margin-bottom: ${o=>o.theme.measurements.advancedSpacer}px;
  color: ${o=>o.theme.card.foreground};
`,Tt=t=>{var{isActive:o}=t,e=yt(t,["isActive"]);return vt.createElement(It,O({},e))},Qo=Tt;import At from"styled-components";var Zo=At(co)`
  width: ${o=>o.theme.measurements.advancedCard.medium.width}px;
  height: ${o=>o.theme.measurements.advancedCard.medium.height}px;
  margin-bottom: ${o=>o.theme.measurements.advancedSpacer}px;
  color: ${o=>o.theme.card.foreground};
  &:nth-child(2n + 1) {
    margin-right: ${o=>o.theme.measurements.advancedSpacer}px;
  }
`;import xt from"styled-components";var Ro=xt(co)`
  width: ${o=>o.theme.measurements.advancedCard.small.width}px;
  height: ${o=>o.theme.measurements.advancedCard.small.height}px;
  margin-bottom: ${o=>o.theme.measurements.advancedSpacer}px;
  color: ${o=>o.theme.card.foreground};
  &:nth-child(3n + 1),
  &:nth-child(3n + 2) {
    margin-right: ${o=>o.theme.measurements.advancedSpacer}px;
  }
`;var uo=o=>{let e=o.type===x.LARGE,t=o.type===x.SMALL,i=Zo;return e?i=Qo:t&&(i=Ro),kt.createElement(i,O({},o))};import Et from"styled-components";var yo=Et.div.attrs(o=>({"data-test":o["data-test"]||k.CardContainer}))`
  display: flex;
  flex-wrap: wrap;
  /* width - padding on both sides */
  width: ${o=>o.theme.measurements.advancedUIToolControlBar.width-48}px;
`;import Ut from"react";import Ft,{css as oe}from"styled-components";var Bt=Ft.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  position: relative;
  width: ${o=>o.theme.measurements.advancedUIToolControlBar.width}px;
  /* for Firefox */
  min-height: 0;
  margin-bottom: ${o=>o.theme.measurements.advancedUIToolControlBar.marginBottom}px;

  z-index: ${o=>o.theme.measurements.zIndex.toolControlBar};

  background: ${o=>o.theme.toolControlBar.background};
  transition: width 0.4s ease-in;
  ${o=>o.reverse?oe`
          border-left: 1px solid ${o.theme.toolControlBar.borderColor};
        `:oe`
          border-right: 1px solid ${o.theme.toolControlBar.borderColor};
        `}
`,ee=({reverse:o=!1,children:e})=>Ut.createElement(Bt,{"data-test":k.ToolControlBar,reverse:o},e);import Lt,{css as _o}from"styled-components";var te=Lt.div.attrs(()=>({"data-test":k.CategoryItemsContainer}))`
  transition: max-height 0.8s ease-out, transform 0.8s ease-out;
  background: ${o=>o.theme.toolControlBar.background};
  visibility: hidden;
  opacity: 0;
  transform-origin: 0 0;
  display: none;
  flex-wrap: wrap;

  ${({show:o})=>o&&_o`
      opacity: 1;
      visibility: visible;
      ${N()?_o`
            display: block;
          `:_o`
            display: flex;
          `}
    `}
`;import To from"react";import re,{css as Ot}from"styled-components";var wt=re.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  ${o=>o.shouldAnimateHeight&&Ot`
      height: ${o.height}px;
    `}
  opacity: ${({opacity:o})=>o};
  visibility: ${({visibility:o})=>o};
  overflow: ${({shouldAnimateOverflow:o,overflow:e})=>o?e:void 0};
  transition: ${({shouldAnimateHeight:o})=>o?"opacity 0.5s ease-in, height 0.4s ease-out":"opacity 0.5s ease-in"};
  background: ${o=>o.theme.toolControlBar.background};
  color: ${o=>o.theme.toolControlBar.inputLabelForeground};
`,Dt=re.div`
  position: relative;
  padding: ${o=>o.theme.measurements.advancedUIToolControlBar.padding};
`,jo=class extends To.Component{constructor(e){super(e);this.contentRef=null;this.enableOverflow=()=>{let{show:e}=this.props;e&&this.contentRef.current&&this.setState({overflow:!0})};this.contentRef=To.createRef(),this.state={height:0,mounted:!1,overflow:!1}}componentDidMount(){let{overflowAfterExpand:e}=this.props;this.contentRef.current&&(e&&this.contentRef.current.addEventListener("transitionend",this.enableOverflow),this.setState({height:this.contentRef.current.scrollHeight,mounted:!0}))}componentWillUnmount(){this.contentRef.current&&this.contentRef.current.removeEventListener("transitionend",this.enableOverflow)}render(){let{show:e,shouldAnimateOverflow:t,shouldAnimateHeight:i,children:r}=this.props,{height:p,mounted:l,overflow:f}=this.state,b=l&&(e&&t||!t),h=b?p:0,v=b?1:0,C=b?"visible":"hidden";return To.createElement(wt,{"data-test":k.ToolControlBarControls,ref:this.contentRef,height:h,opacity:v,visibility:C,overflow:f?"visible":"hidden",shouldAnimateHeight:i,shouldAnimateOverflow:t},To.createElement(Dt,null,r))}};jo.defaultProps={show:!0,shouldAnimateOverflow:!0,shouldAnimateHeight:!0};var ne=jo;import Pt,{css as $t}from"styled-components";var Go=Pt(No)`
  position: relative;
  padding: ${o=>o.theme.measurements.advancedUIToolControlBar.padding};
  width: ${o=>o.theme.measurements.advancedUIToolControlBar.width}px;

  box-sizing: border-box;

  /* for Firefox */
  min-height: 0;

  transition: height 0.4s cubic-bezier(0.17, 0.04, 0.03, 0.94);
  background: ${o=>o.theme.toolControlBar.background};
  color: ${o=>o.theme.toolControlBar.inputLabelForeground};

  /* compensate the padding in IE and Edge */
  ${()=>N()||zo()?$t`
        > ul {
          padding-right: 34px;
          margin-right: -34px;
        }
      `:""}
`;Go.defaultProps={direction:"vertical"};import Ht,{css as Mt}from"styled-components";var _t=Ht.div`
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    ${o=>o.full?Mt`
            left: -${3*o.theme.measurements.advancedSpacer/2}px;
            width: calc(
              100% + ${3*o.theme.measurements.advancedSpacer}px
            );
          `:`
      left: ${3*o.theme.measurements.advancedSpacer/2}px;
      width: calc(100% - ${3*o.theme.measurements.advancedSpacer}px);
    `}
    border-bottom: 2px solid ${o=>o.theme.toolControlBar.separatorColor};
  }
`,Ao=_t;import jt from"styled-components";var Nt=jt.h2`
  color: ${o=>o.theme.toolControlBar.titleForeground};
  font-size: ${o=>o.theme.measurements.fontSystem.headline2.size}px;
  letter-spacing: ${o=>o.theme.measurements.fontSystem.headline2.letterSpacing}px;
  text-transform: ${o=>o.theme.measurements.fontSystem.headline2.case};
  font-weight: 500;
  min-height: ${o=>2*o.theme.measurements.advancedSpacer}px;
`,xo=Nt;import Y from"react";import zt from"styled-components";var Gt=zt.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  flex: 1 0 auto;
`,ie=({name:o,isFirstCategory:e,isLastCategory:t,children:i})=>Y.createElement(Gt,null,!e&&Y.createElement(s.Spacer,{count:2}),Y.createElement(xo,{"data-test":o},o),Y.createElement(yo,{"data-test":k.CategoryItemsContainer},i),!t&&Y.createElement(Y.Fragment,null,Y.createElement(s.Spacer,{count:2}),Y.createElement(Ao,{full:!0})));import Wt from"styled-components";var Yt=Wt.h1`
  /* Center text horizontally and vertically */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  padding: 0 4px;
  margin: 0;
  min-height: ${o=>o.theme.measurements.mainCanvasActionBar.height-2}px;
  font-size: ${o=>o.theme.measurements.fontSystem.headline1.size}px;
  letter-spacing: ${o=>o.theme.measurements.fontSystem.headline1.letterSpacing}px;
  text-transform: ${o=>o.theme.measurements.fontSystem.headline1.case};
  background: ${o=>o.theme.toolControlBar.background};
  color: ${o=>o.theme.toolControlBar.titleForeground};
  border-bottom: 1px solid ${o=>o.theme.toolControlBar.separatorColor};
  font-weight: 500;
  text-align: center;
`,se=Yt;import ae from"react";import Xt,{css as Wo}from"styled-components";var Kt=Xt.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: ${o=>o.theme.measurements.advancedUIToolbar.width}px;

  z-index: ${o=>o.theme.measurements.zIndex.toolbar};

  background-color: ${o=>o.theme.toolbar.background};
  color: ${o=>o.theme.toolbar.foreground};
  ${o=>{let e=o.theme.toolbar.border?o.theme.toolbar.border:Wo`
          1px solid ${o.theme.toolbar.borderColor};
        `;return o.reverse?Wo`
          border-left: ${e};
        `:Wo`
          border-right: ${e};
        `}}
  margin-bottom: ${o=>o.theme.measurements.advancedUIToolbar.marginBottom}px;
`,me=({reverse:o,children:e})=>ae.createElement(Kt,{reverse:o,"data-test":k.Toolbar},ae.createElement(No,{direction:"vertical"},e));import le from"react";import de,{css as Yo}from"styled-components";var Vt=de(pe)`
  width: inherit;
  height: inherit;
  padding: 0;
  margin: 0;
  ${N()?Yo`
        background-color: transparent;
      `:Yo`
        background-color: inherit;
      `}

  ${o=>o.isActive&&Yo`
      background-color: ${o.theme.toolbar.activeBackground};
      color: ${o.theme.toolbar.activeForeground};
    `}
`,qt=de.li.attrs({"aria-haspopup":!0,"aria-hidden":!0,role:"menuitem"})`
  height: ${o=>o.theme.measurements.advancedUIToolbar.itemHeight}px;
  cursor: pointer;
  position: relative;
`,ce=o=>le.createElement(qt,null,le.createElement(Vt,O(O({},o),{"data-test":k.ToolbarItem})));import Jt from"styled-components";var Qt=Jt.li.attrs({role:"none"})`
  height: ${o=>o.theme.measurements.advancedUIToolbar.seperatorHeight}px;
  cursor: pointer;
  position: relative;
`,ue=Qt;import Ce from"react";import fe,{css as Co}from"styled-components";var Zt=fe.div`
  ${N()?Co`
        position: -ms-device-fixed;
      `:Co`
        position: fixed;
      `}
  position: -ms-device-fixed;
  top: ${o=>o.position.y-5}px;
  left: ${o=>o.position.x+o.theme.measurements.advancedUIToolbar.width-10}px;
  z-index: ${o=>o.theme.measurements.zIndex.toolbar};
  transition: opacity 0.5s ease-in-out, left 0.25s ease-in-out,
    right 0.25s ease-in-out, visibility 0.5s ease-in-out;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;

  &:before {
    content: ' ';
    position: absolute;
    top: 10px;
    left: -8px;
    width: 0;
    height: 0;
    border-right: 8px solid ${o=>o.theme.tooltip.background};
    border-bottom: 6px solid transparent;
    border-top: 6px solid transparent;
  }

  &:after {
    content: '${o=>o.label}';
    position: absolute;
    transition: margin-left 0.15s ease-in-out, opacity 0.15s ease-in-out;
    color: ${o=>o.theme.tooltip.foreground};
    background: ${o=>o.theme.tooltip.background};
    padding: 8px 12px;
    text-align: center;
    vertical-align: super;
    font-size: ${o=>o.theme.measurements.fontSystem.label.size}px;
    letter-spacing: ${o=>o.theme.measurements.fontSystem.label.letterSpacing}px;
    text-transform: ${o=>o.theme.measurements.fontSystem.label.case};
    border-radius: ${o=>o.theme.shape.radiusSmall}px;
    white-space: nowrap;
  }

  ${o=>o.reverse&&Co`
      left: unset;
      right: ${o.position.x+o.theme.measurements.advancedUIToolbar.width-10}px;
      direction: rtl;

      &:before {
        border-left: 8px solid ${o.theme.tooltip.background};
        border-right: none;
        right: -8px;
        left: unset;
        top: 10px;
      }
    `}

  ${o=>o.show&&!o.reverse&&Co`
      opacity: 1;
      visibility: visible;
      left: ${o.position.x+o.theme.measurements.advancedUIToolbar.width+16}px;
    `}

  ${o=>o.show&&o.reverse&&Co`
      opacity: 1;
      visibility: visible;
      right: ${o.position.x+o.theme.measurements.advancedUIToolbar.width+16}px;
    `}
`,Rt=fe.span`
  display: none;
`,he=({show:o,reverse:e,position:t,children:i})=>{let r=typeof i=="string"?i:"";return Ce.createElement(Zt,{"data-test":k.Tooltip,show:o,reverse:e,position:t,label:r},Ce.createElement(Rt,null,r))};he.defaultProps={show:!1};var be=he;var n={Card:uo,CardContainer:yo,Toolbar:{Index:me,Item:ce,Separator:ue,Tooltip:be},Itemsbar:Go,BarSeparator:"",ItemsSeparator:Ao,Controlsbar:ne,Sidebar:{Index:ee,Heading:se,SubHeading:xo,TextCategory:ie,ExpandableContainer:te}};import B from"react";import zr from"styled-components";import Xo from"react";import fo from"react";var ko=class extends fo.Component{constructor(){super(...arguments);this.renderIcon=e=>{let{tool:t,config:i}=this.props,r=i.state.config[t];if(r.icon){let l=r.icon;return fo.createElement(l,null)}let p=ge[e];return fo.createElement(p,null)||null};this.update=e=>{this.props.active.selectTool(e)}}getToolTitle(e){return this.props.config.locale[e].title}render(){let e=this.props.active.tool,{tool:t,custom:i}=this.props;if(t){let r=i.getAdvancedToolbarItem();return fo.createElement(r,{key:t,isActive:t===e,isReverse:this.props.isReverse,icon:this.renderIcon(t),onClick:()=>this.update(t),tool:t,label:this.getToolTitle(t)})}return fo.createElement(n.Toolbar.Separator,null)}};ko=q([d("active","config","custom"),m],ko);var ve=ko;var io=class extends Xo.Component{render(){let{config:e}=this.props,t=e.config.order==="reverse";return Xo.createElement(n.Toolbar.Index,{reverse:t},e.tools.map((i,r)=>Xo.createElement(ve,{key:i||r,tool:i,isReverse:t})))}};io=q([d("config"),m],io);import I from"react";import ao from"react";import Ko from"react";var or=({adjustmentsTool:o,custom:e})=>{let t=o.locale.controls,i=e.getButton("toolControlBarSecondaryButton"),r=()=>{o.reset()};return Ko.createElement(n.Controlsbar,{show:o.isDirty},Ko.createElement(i,{tool:c.ADJUSTMENT,label:t.buttonReset,ariaLabel:t.buttonReset,onClick:r,fullWidth:!0}),Ko.createElement(n.ItemsSeparator,null))},Se=d("adjustmentsTool","custom")(m(or));import so from"react";import er from"styled-components";var tr=er(s.Input.Slider)`
  padding-bottom: 16px;
`,rr=({adjustmentsTool:o})=>{let{categories:e,items:t,config:i,locale:r}=o,p=()=>{o.toolSnapshot()},l=(h,v)=>{o.editAdjustments({type:h,value:v})},f=h=>{let v=o.locale.categories[h.identifier]||h.name;return so.createElement(tr,{identifier:h.identifier,adjust:!0,key:h.identifier,label:v,value:o[h.identifier],onChange:C=>l(h.identifier,C),onMouseUp:p,onTouchEnd:p,snap:0})},b=(h,v)=>{let C=r.categories[h.identifier]||h.name;return h.items?so.createElement(n.Sidebar.TextCategory,{key:h.identifier,name:C,isFirstCategory:v===0,isLastCategory:v===e.length-1},h.items.map(f)):null};return i.flattenCategories?so.createElement(so.Fragment,null,t.map(f)):so.createElement(so.Fragment,null,e.map(b))},Ie=d("adjustmentsTool")(m(rr));var nr=({adjustmentsTool:o,displayTitle:e})=>ao.createElement(ao.Fragment,null,e&&ao.createElement(n.Sidebar.Heading,null,o.locale.title),ao.createElement(Se,null),ao.createElement(n.Itemsbar,null,ao.createElement(Ie,null))),ye=d("adjustmentsTool")(m(nr));import Eo from"react";import w from"react";var ir=({brushTool:o,custom:e})=>{let{colorList:t}=o,i=o.locale.controls,r=o.localeColor.colorPicker,p=e.getButton("toolControlBarSecondaryButton");return w.createElement(w.Fragment,null,w.createElement(n.Controlsbar,{show:o.isDirty},w.createElement(p,{tool:c.BRUSH,ariaLabel:i.buttonReset,onClick:o.reset,fullWidth:!0,label:i.buttonReset}),w.createElement(n.ItemsSeparator,null)),w.createElement(n.Controlsbar,{overflowAfterExpand:!0},w.createElement(s.Input.Selection,{label:i.selectColor},w.createElement(M,{activeColor:o.color,colors:t,labelsColor:r,onChange:o.changeColor})),w.createElement(s.Spacer,{count:2}),w.createElement(s.Input.Slider,{"data-test":k.BrushSize,label:i.sliderSize,value:o.relativeSize,min:1,max:100,divider:1,onChange:o.changeRelativeSize}),w.createElement(s.Spacer,{count:3}),w.createElement(s.Input.Slider,{"data-test":k.BrushHardness,label:i.sliderHardness,value:o.hardness,min:0,max:1,onChange:o.changeHardness}),w.createElement(s.Spacer,null)))},Te=d("brushTool","custom")(m(ir));var sr=({brushTool:o,displayTitle:e})=>Eo.createElement(Eo.Fragment,null,e&&Eo.createElement(n.Sidebar.Heading,null,o.locale.title),Eo.createElement(Te,null)),Ae=d("brushTool")(m(sr));import Uo from"react";var xe=({displayTitle:o})=>{let{config:e}=J(),t=e.state.config[c.CUSTOM].toolControlBar,{title:i}=e.state.locale[c.CUSTOM];return Uo.createElement(Uo.Fragment,null,o&&Uo.createElement(n.Sidebar.Heading,null,i),Uo.createElement(t,{language:e.state.locale[c.CUSTOM]}))};import Z from"react";import Q from"react";var ar=({filterTool:o,custom:e})=>{let t=o.locale.controls,i=o.state,r=e.getButton("toolControlBarSecondaryButton"),p=()=>{o.toolSnapshot()},l=()=>{o.reset()};return Q.createElement(n.Controlsbar,{show:o.isOptionSelected},Q.createElement(s.Input.Form,null,Q.createElement(r,{tool:c.FILTER,ariaLabel:t.buttonReset,onClick:l,fullWidth:!0,label:t.buttonReset}),Q.createElement(s.Spacer,{count:2}),Q.createElement(s.Input.Slider,{"aria-hidden":!o.isOptionSelected,label:t.sliderIntensity,value:i.intensity,min:0,max:1,onChange:o.changeIntensity,onMouseUp:p,onTouchEnd:p,snap:i.isDuotone?.5:null}),Q.createElement(s.Spacer,null)),Q.createElement(n.ItemsSeparator,null))},ke=d("filterTool","custom")(m(ar));import D from"react";var mr=({filterTool:o,custom:e})=>{let{categories:t,config:i,items:r,locale:p}=o,l=e.getAdvancedItemCard(),f=e.getAdvancedCategoryCard(),b=(C,g)=>{let a=p.items[C.identifier]||C.name;return D.createElement(l,{tool:c.FILTER,type:x.MEDIUM,onClick:()=>o.selectFilter(C.identifier,C.defaultIntensity),key:C.identifier,image:C.thumbnailURI,label:a,style:{animationDelay:`${U(g)}s`},isActive:o.identifier===C.identifier},D.createElement(E,{withBackground:!0},a))},h=(C,g)=>{let{selectedCategoryIdentifier:a}=o,S=a===C.identifier,A=p.categories[C.identifier]||C.name;return C.items?D.createElement("div",{key:C.identifier},D.createElement(f,{isActive:S,tool:c.FILTER,type:x.LARGE,onClick:()=>o.toggleCategorySelection(C.identifier),image:C.thumbnailURI,label:A,style:{animationDelay:`${U(g)}s`}},D.createElement(E,{withBackground:!0,caret:!0,isActive:S},A)),D.createElement(n.Sidebar.ExpandableContainer,{show:S},C.items.map(b))):null},v=(C,g)=>{let a=p.categories[C.identifier]||C.name;return C.items?D.createElement(n.Sidebar.TextCategory,{key:C.identifier,name:a,isFirstCategory:g===0,isLastCategory:g===t.length-1},C.items.map(b)):null};return i.flattenCategories?D.createElement(D.Fragment,null,r.map(b)):i.categoryHeaderType===H.CARD?D.createElement(D.Fragment,null,t.map(h)):i.categoryHeaderType===H.TEXT?D.createElement(D.Fragment,null,t.map(v)):null},Ee=d("filterTool","custom")(m(mr));var lr=({filterTool:o,displayTitle:e})=>Z.createElement(Z.Fragment,null,e&&Z.createElement(n.Sidebar.Heading,null,o.locale.title),Z.createElement(ke,null),Z.createElement(n.Itemsbar,{key:"filterToolItemsbar"},Z.createElement(n.CardContainer,null,Z.createElement(Ee,null)))),Ue=d("filterTool")(m(lr));import ho from"react";import R from"react";var Fe=m(()=>{let{focusTool:o,custom:e}=J(),t=o.locale.controls,i=e.getButton("toolControlBarSecondaryButton"),r=()=>{o.toolSnapshot(t.sliderIntensity)},p=()=>{o.reset()};return R.createElement(n.Controlsbar,{show:o.isOptionSelected},R.createElement(s.Input.Form,null,R.createElement(i,{tool:c.FOCUS,ariaLabel:t.buttonReset,onClick:p,fullWidth:!0,label:t.buttonReset}),R.createElement(s.Spacer,{count:2}),R.createElement(s.Input.Slider,{"aria-hidden":!o.isOptionSelected,label:t.sliderIntensity,value:o.relativeIntensity,min:0,max:100,divider:1,onChange:o.changeRelativeIntensity,onMouseUp:r,onTouchEnd:r})),R.createElement(s.Spacer,{count:1}),R.createElement(n.ItemsSeparator,null))});import Fo from"react";var dr=({focusTool:o,custom:e})=>{let{items:t}=o,i=(r,p)=>{let l=o.locale.items[r.identifier]||r.name,f=e.getAdvancedItemCard();return Fo.createElement(f,{tool:c.FOCUS,type:x.LARGE,onClick:()=>o.selectFocus(r.identifier),key:r.identifier,image:r.thumbnailURI,label:l,style:{animationDelay:`${U(p)}s`},isActive:r.identifier===o.identifier},Fo.createElement(E,{withBackground:!0},l))};return Fo.createElement(n.Itemsbar,null,Fo.createElement(n.CardContainer,null,t.map(i)))},Be=d("focusTool","custom")(m(dr));var Le=m(({displayTitle:o})=>{let{focusTool:e}=J();return ho.createElement(ho.Fragment,null,o&&ho.createElement(n.Sidebar.Heading,null,e.locale.title),ho.createElement(Fe,null),ho.createElement(Be,null))});import bo from"react";import _ from"react";var pr=({frameTool:o,custom:e})=>{let t=o.locale.controls,i=o.localeColor.colorPicker,{tintable:r,colorList:p}=o,l=e.getButton("toolControlBarSecondaryButton"),f=()=>{o.reset()},b=h=>{o.toolSnapshot(h)};return _.createElement(n.Controlsbar,{show:o.isOptionSelected,overflowAfterExpand:!0},_.createElement(l,{tool:c.FRAME,ariaLabel:t.buttonReset,onClick:f,fullWidth:!0,label:t.buttonReset}),_.createElement(s.Spacer,{count:2}),_.createElement(s.Input.Slider,{"aria-hidden":!o.isOptionSelected,label:t.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:()=>{b(t.sliderOpacity)},onTouchEnd:()=>{b(t.sliderOpacity)}}),_.createElement(s.Spacer,{count:2}),_.createElement(s.Input.Slider,{"aria-hidden":!o.isOptionSelected,label:t.sliderSize,value:o.size,min:o.minSize,max:o.maxSize,divider:1,onChange:o.changeWidth,onMouseUp:()=>{b(t.sliderSize)},onTouchEnd:()=>{b(t.sliderSize)}}),_.createElement(s.Spacer,{count:2}),_.createElement(s.Input.Selection,{isDisabled:!r,label:t.selectColor},_.createElement(M,{activeColor:o.color,colors:p,labelsColor:i,isDisabled:!r,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot})),_.createElement(n.ItemsSeparator,null))},Oe=d("frameTool","custom")(m(pr));import Bo from"react";var cr=({frameTool:o,custom:e})=>{let{items:t}=o,i=o.state?o.state.identifier:null,r=(p,l)=>{let f=o.locale.items[p.identifier]||p.name,b=e.getAdvancedItemCard();return Bo.createElement(b,{tool:c.FRAME,type:x.MEDIUM,onClick:()=>o.selectFrame(p.identifier),key:p.identifier,image:p.thumbnailURI,label:f,style:{backgroundSize:"75%",animationDelay:`${U(l)}s`},isActive:p.identifier===i},Bo.createElement(E,{hidden:!0},f))};return Bo.createElement(n.Itemsbar,null,Bo.createElement(n.CardContainer,null,t.map(r)))},we=d("frameTool","custom")(m(cr));var ur=({frameTool:o,displayTitle:e})=>bo.createElement(bo.Fragment,null,e&&bo.createElement(n.Sidebar.Heading,null,o.locale.title),bo.createElement(Oe,null),bo.createElement(we,null)),De=d("frameTool")(m(ur));import oo from"react";import $ from"react";var fr=({library:o,active:e,custom:t})=>{let i=o.locale.controls.placeholderSearch,{config:r,libraryProvider:p}=o,l=t.getButton("toolControlBarPrimaryButton"),f=C=>{let{files:g}=C.target;if(g.length){let a=new FileReader;a.onload=S=>{e.newImage(S.target.result)},a.readAsDataURL(g[0])}},b=()=>{e.selectWebcam(!0)},h=()=>{let C=document.getElementById("fileUpload");C&&C.click()},v=C=>{o.fetchImages(C)};return $.createElement(n.Controlsbar,{shouldAnimateHeight:!1,shouldAnimateOverflow:!1},p&&$.createElement($.Fragment,null,$.createElement(s.Input.Search,{onChange:v,placeholder:i}),$.createElement(s.Spacer,{count:2})),r.enableUpload&&$.createElement($.Fragment,null,$.createElement(l,{tool:c.LIBRARY,ariaLabel:o.locale.controls.buttonUpload,onClick:h,fullWidth:!0,label:o.locale.controls.buttonUpload},$.createElement(s.Input.File,{onChange:f})),$.createElement(s.Spacer,null)),r.enableWebcam&&$.createElement(Cr,{tool:c.LIBRARY,onClick:b,fullWidth:!0,label:o.locale.controls.buttonWebcamOpen}),$.createElement(n.ItemsSeparator,null))},Pe=d("library","active","custom")(m(fr));import F from"react";var hr=({active:o,library:e,custom:t})=>{let{query:i,config:r,selectedCategoryIdentifier:p,categories:l,items:f}=e,b=t.getAdvancedCategoryCard(),h=t.getAdvancedItemCard(),v=(a,S)=>F.createElement(h,{tool:c.LIBRARY,type:x.MEDIUM,onClick:()=>o.newImage(a.rawUrl),key:`${a.identifier}-${S}`,image:a.thumbnailURI,label:a.name,style:{animationDelay:`${U(S)}s`},authorAvatar:a.authorAvatar,authorName:a.authorName},a.authorAvatar&&F.createElement($e,{url:a.authorAvatar}),a.authorName&&F.createElement(E,{withBackground:!0},a.authorName)),C=(a,S)=>{let A=p===a.identifier;return a.items?F.createElement("div",{key:a.identifier},F.createElement(b,{isActive:A,tool:c.LIBRARY,type:x.LARGE,onClick:()=>e.toggleCategorySelection(a.identifier),image:a.thumbnailURI,label:a.name,style:{animationDelay:`${U(S)}s`}},F.createElement(E,{withBackground:!0,caret:!0,isActive:A},a.name)),F.createElement(n.Sidebar.ExpandableContainer,{show:A},a.items.map(v))):null},g=(a,S)=>a.items?F.createElement(n.Sidebar.TextCategory,{key:a.identifier,name:a.name,isFirstCategory:S===0,isLastCategory:S===l.length-1},a.items.map(v)):null;return i?f.length?F.createElement(F.Fragment,null,f.map(v)):F.createElement("p",{"data-test":k.NoResult},e.locale.controls.noResults):r.flattenCategories?F.createElement(F.Fragment,null,f.map(v)):r.categoryHeaderType===H.CARD?F.createElement(F.Fragment,null,l.map(C)):r.categoryHeaderType===H.TEXT?F.createElement(F.Fragment,null,l.map(g)):null},He=d("library","active","custom")(m(hr));var br=({library:o,displayTitle:e})=>oo.createElement(oo.Fragment,null,e&&oo.createElement(n.Sidebar.Heading,null,o.locale.title),oo.createElement(Pe,null),oo.createElement(n.Itemsbar,null,oo.createElement(n.CardContainer,null,oo.createElement(He,null)))),Me=d("library")(m(br));import go from"react";import X from"react";var gr=({overlayTool:o,custom:e})=>{let t=o.locale.controls,{allBlendModes:i}=o,{blendMode:r}=o,p=e.getButton("toolControlBarSecondaryButton"),l=()=>{o.toolSnapshot()},f=h=>{o.changeBlendMode(h)},b=()=>{o.reset()};return X.createElement(n.Controlsbar,{show:o.isOptionSelected},X.createElement(p,{tool:c.OVERLAY,ariaLabel:t.buttonReset,onClick:b,fullWidth:!0,label:t.buttonReset}),X.createElement(s.Spacer,{count:2}),X.createElement(s.Input.CarouselSlider,{label:t.carouselBlendMode,defaultIdentifier:r,onSelect:f,list:i}),X.createElement(s.Spacer,{count:2}),X.createElement(s.Input.Slider,{"aria-hidden":!o.isOptionSelected,label:t.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:l,onTouchEnd:l}),X.createElement(s.Spacer,null),X.createElement(n.ItemsSeparator,null))},_e=d("overlayTool","custom")(m(gr));import Lo from"react";var vr=({overlayTool:o,custom:e})=>{let{items:t,locale:i,identifier:r,selectOverlay:p}=o,l=(f,b)=>{let h=i.items[f.identifier]||f.name,v=e.getAdvancedItemCard();return Lo.createElement(v,{tool:c.OVERLAY,type:x.MEDIUM,onClick:()=>p(f.identifier),key:f.identifier,image:f.thumbnailURI,label:h,style:{animationDelay:`${U(b)}s`},isActive:f.identifier===r},Lo.createElement(E,{withBackground:!0},h))};return Lo.createElement(n.Itemsbar,null,Lo.createElement(n.CardContainer,null,t.map(l)))},je=d("overlayTool","custom")(m(vr));var Sr=({overlayTool:o,displayTitle:e})=>go.createElement(go.Fragment,null,e&&go.createElement(n.Sidebar.Heading,null,o.locale.title),go.createElement(_e,null),go.createElement(je,null)),Ne=d("overlayTool")(m(Sr));import eo from"react";import j from"react";import Ir from"styled-components";var Tr=Ir.input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:!0})`
  ${yr.VisuallyHidden}
`,Ar=({stickerTool:o,custom:e})=>{let{colorList:t}=o,i=o.locale.controls,r=o.localeColor.colorPicker,p=e.getButton("toolControlBarPrimaryButton"),l=()=>{o.toolSnapshot()},f=()=>{let C=document.getElementById("fileUpload");C&&(C.value=null,C.click())},b=C=>{let{files:g}=C.target;o.addFiles(g)},h=()=>o.isCustomStickerEnabled?j.createElement(p,{tool:c.STICKER,ariaLabel:i.buttonUpload,onClick:f,fullWidth:!0,label:i.buttonUpload},j.createElement(Tr,{onChange:b})):null,v=!o.isStickerSelected||!o.tintable&&o.isStickerSelected;return j.createElement(n.Controlsbar,{shouldAnimateHeight:!1,shouldAnimateOverflow:!1,overflowAfterExpand:!0},j.createElement(s.Input.Form,null,h(),j.createElement(s.Spacer,{count:2}),j.createElement(s.Input.Slider,{isDisabled:!o.isStickerSelected,label:i.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:l,onTouchEnd:l}),j.createElement(s.Spacer,{count:2}),j.createElement(s.Input.Selection,{isDisabled:v,label:i.selectColor},j.createElement(M,{activeSprite:o.id,activeColor:o.tintColor,colors:t,labelsColor:r,isDisabled:v,onChange:o.changeTintColor,onAddSnapshot:o.tintColorSnapshot}))),j.createElement(n.ItemsSeparator,null))},ze=d("stickerTool","custom")(m(Ar));import P from"react";var kr=({stickerTool:o,custom:e})=>{let{categories:t,selectedCategoryIdentifier:i,config:r,items:p,locale:l}=o,f=e.getAdvancedCategoryCard(),b=e.getAdvancedItemCard(),h=(g,a)=>{let S=l.items[g.identifier]||g.name;return P.createElement(b,{key:g.identifier,tool:c.STICKER,type:x.SMALL,onClick:()=>o.add(g.identifier),image:g.thumbnailURI,label:S,style:{backgroundSize:"75%",animationDelay:`${xr(a)}s`}},P.createElement(E,{hidden:!0},S))},v=(g,a)=>{let S=i===g.identifier,A=l.categories[g.identifier]||g.name;return g.items?P.createElement("div",{key:g.identifier},P.createElement(f,{isActive:S,tool:c.STICKER,type:x.LARGE,onClick:()=>o.toggleCategorySelection(g.identifier),image:g.thumbnailURI,label:A,style:{animationDelay:`${U(a)}s`}},P.createElement(E,{withBackground:!0,caret:!0,isActive:S},A)),P.createElement(n.Sidebar.ExpandableContainer,{show:S,key:`${g.identifier}-items`},g.items.map(h))):null},C=(g,a)=>{let S=l.categories[g.identifier]||g.name;return g.items?P.createElement(n.Sidebar.TextCategory,{key:g.identifier,name:S,isFirstCategory:a===0,isLastCategory:a===t.length-1},g.items.map(h)):null};return r.flattenCategories?P.createElement(P.Fragment,null,p.map(h)):r.categoryHeaderType===H.CARD?P.createElement(P.Fragment,null,t.map(v)):r.categoryHeaderType===H.TEXT?P.createElement(P.Fragment,null,t.map(C)):null},Ge=d("stickerTool","custom")(m(kr));var Er=({stickerTool:o,displayTitle:e})=>eo.createElement(eo.Fragment,null,e&&eo.createElement(n.Sidebar.Heading,null,o.locale.title),eo.createElement(ze,null),eo.createElement(n.Itemsbar,null,eo.createElement(n.CardContainer,null,eo.createElement(Ge,null)))),We=d("stickerTool")(m(Er));import wo from"react";import T from"react";import Oo from"styled-components";var Ye=Oo.div`
  position: relative;
`,Br=Oo.div`
  display: flex;
  justify-content: space-between;
`,Lr=Oo(s.Input.NumericInput)`
  max-width: 50%;
  margin-right: 16px;
`,Or=Oo(s.Input.Selection)`
  width: 50%;
`,wr=({textTool:o,custom:e})=>{let t=o.locale.controls,i=o.localeColor.colorPicker,{fontFamilies:r,alignment:p,isTextSelected:l,fontFamily:f,fontStyle:b,fontWeight:h,colorList:v,backgroundColorList:C}=o,g=["left","center","right"],a=e.getButton("textAlignment"),S=e.getButton("toolControlBarPrimaryButton"),A=()=>{o.toolSnapshot()},K=()=>{o.add()},V=y=>{let po=y?parseFloat(y):0;o.setFontSize(Math.max(10,Math.min(690,po)))},ro=()=>g.map(y=>{let po=Fr[y];return T.createElement(a,{tool:y,isDisabled:!l,ariaLabel:`Align ${y}`,isActive:y===p,key:y,style:{padding:"1px 3px 2px"},icon:T.createElement(po,null),onClick:()=>o.changeAlignment(y)})}),W=r.map(y=>({label:`${y.fontFamily} ${Ur.getDisplayFontStyle(y)}`,fontWeight:y.fontWeight,fontStyle:y.fontStyle,fontFamily:y.fontFamily,value:y.identifier})),no=W.filter(({value:y})=>y===o.identifier)[0];return T.createElement(n.Controlsbar,{show:!0,overflowAfterExpand:!0,shouldAnimateHeight:!1},T.createElement(s.Input.Form,null,T.createElement(S,{tool:c.TEXT,ariaLabel:t.buttonNew,onClick:K,fullWidth:!0,label:t.buttonNew}),T.createElement(s.Spacer,{count:2}),T.createElement(s.Input.Dropdown,{isDisabled:!l,style:{fontFamily:f,fontStyle:b,fontWeight:h},itemStyle:y=>({fontFamily:y.fontFamily,fontStyle:y.fontStyle,fontWeight:y.fontWeight}),label:t.dropdownFontFamily,list:W,onSelect:o.changeFont,selectedItem:no.label}),T.createElement(s.Spacer,{count:2}),T.createElement(Br,null,T.createElement(Lr,{value:o.fontSize.toFixed(0),onSubmit:V,label:t.textFontSize,isDisabled:!l}),T.createElement(Or,{isDisabled:!l,inline:!0,label:t.selectAlignment,"data-test":k.TextAlignment},ro())),T.createElement(s.Spacer,{count:2}),T.createElement(Ye,null,T.createElement(n.ItemsSeparator,{full:!0})),T.createElement(s.Spacer,{count:2}),T.createElement(s.Input.Selection,{isDisabled:!l,label:t.selectFontColor},T.createElement(M,{activeSprite:o.id,activeColor:o.textColor,colors:v,labelsColor:i,isDisabled:!l,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot})),T.createElement(s.Spacer,{count:2}),T.createElement(s.Input.Selection,{isDisabled:!l,label:t.selectBackgroundColor},T.createElement(M,{activeSprite:o.id,activeColor:o.backgroundColor,colors:C,labelsColor:i,isDisabled:!l,onChange:o.changeBackgroundColor,onAddSnapshot:o.backgroundColorSnapshot})),T.createElement(s.Spacer,{count:2}),T.createElement(Ye,null,T.createElement(n.ItemsSeparator,{full:!0})),T.createElement(s.Spacer,{count:2}),T.createElement(s.Input.Slider,{isDisabled:!l,label:t.sliderLineSpacing,value:o.lineHeight,min:.5,max:3,onChange:o.changeLineHeight,onMouseUp:A,onTouchEnd:A,snap:1,divider:1,decimal:1}),T.createElement(s.Spacer,{count:1})))},Xe=d("textTool","custom")(m(wr));var Dr=({textTool:o,displayTitle:e})=>wo.createElement(wo.Fragment,null,e&&wo.createElement(n.Sidebar.Heading,null,o.locale.title),wo.createElement(Xe,null)),Ke=d("textTool")(m(Dr));import vo from"react";import z from"react";var Pr=({textDesignTool:o,custom:e})=>{let t=o.locale.controls,i=o.localeColor.colorPicker,{colorList:r}=o,p=o.isTextDesignSelected,l=e.getButton("toolControlBarPrimaryButton"),f=e.getButton("toolControlBarSecondaryButton"),b=()=>{o.add()},h=()=>{o.changeSeed()};return z.createElement(n.Controlsbar,{shouldAnimateOverflow:!1,shouldAnimateHeight:!1},z.createElement(s.Input.Form,null,z.createElement(l,{tool:c.TEXT_DESIGN,ariaLabel:t.buttonNew,onClick:b,fullWidth:!0,label:t.buttonNew}),z.createElement(s.Spacer,{count:2}),z.createElement(f,{tool:c.TEXT_DESIGN,ariaLabel:t.buttonShuffle,isDisabled:!p,onClick:h,fullWidth:!0,label:t.buttonShuffle}),z.createElement(s.Spacer,{count:2}),z.createElement(s.Input.Selection,{isDisabled:!p,label:t.selectColor},z.createElement(M,{activeSprite:o.id,activeColor:o.color,colors:r,labelsColor:i,isDisabled:!p,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),z.createElement(n.ItemsSeparator,null))},Ve=d("textDesignTool","custom")(m(Pr));import Do from"react";var $r=({textDesignTool:o,custom:e})=>{let{items:t,identifier:i}=o,r=l=>{o.changeIdentifier(l)},p=(l,f)=>{let b=e.getAdvancedItemCard();return Do.createElement(b,{key:l.identifier,tool:c.TEXT_DESIGN,type:x.MEDIUM,onClick:()=>r(l.identifier),image:l.thumbnailURI,label:l.name||"",style:{animationDelay:`${U(f)}s`,backgroundSize:"60%"},isDisabled:!o.isTextDesignSelected,isActive:i===l.identifier},Do.createElement(E,{hidden:!0},l.name))};return Do.createElement(n.Itemsbar,null,Do.createElement(n.CardContainer,null,t.map(p)))},qe=d("textDesignTool","custom")(m($r));var Hr=({textDesignTool:o,displayTitle:e})=>vo.createElement(vo.Fragment,null,e&&vo.createElement(n.Sidebar.Heading,null,o.locale.title),vo.createElement(Ve,null),vo.createElement(qe,null)),Je=d("textDesignTool")(m(Hr));import to from"react";import G from"react";var _r=({transformTool:o,custom:e})=>{let t=o.locale.controls,{forceDimensions:i,lockResolution:r,localOutputHeight:p,localOutputWidth:l}=o,f=e.getButton("toolControlBarSecondaryButton"),b=()=>{o.reset()},h=e.getCheckbox();return G.createElement(n.Controlsbar,{shouldAnimateHeight:!1},G.createElement(s.Input.Form,null,G.createElement(f,{tool:c.TRANSFORM,ariaLabel:t.buttonReset,onClick:b,fullWidth:!0,label:t.buttonReset}),G.createElement(s.Spacer,{count:2}),G.createElement(h,{isDisabled:i,value:r,label:t.checkboxKeepResolution,checkMarkPosition:"right",onClick:o.changeLockResolution,style:{paddingTop:"5px",justifyContent:"space-between"}}),G.createElement(s.Spacer,{count:2}),G.createElement(Mr,{isDisabled:i,showLabel:!0,valueHeight:p,valueWidth:l,onSubmitWidth:o.onPixelWidth,onSubmitHeight:o.onPixelHeight,label:t.inputCropSize,labelHeight:t.inputHeight,labelWidth:t.inputWidth}),G.createElement(s.Spacer,{count:1})),G.createElement(n.ItemsSeparator,null))},Qe=d("transformTool","custom")(m(_r));import L from"react";import{renderToStaticMarkup as Ze}from"react-dom/server";var jr=({transformTool:o,custom:e,editor:t})=>{let{categories:i,items:r,identifier:p,config:l,locale:f}=o,b=e.getAdvancedItemCard(),h=e.getAdvancedCategoryCard(),v=(a,S)=>{let{theme:A,measurements:K}=t.configStore,V=f.items[a.identifier]||a.name,ro=a.thumbnailURI||"",W="80%";if(!o.checkIfTransformThumbnailExits(a.thumbnailURI)){let no=a.identifier.includes("imgly_transform_common"),y=Po.crops[a.identifier]||Po.crops.imgly_transform_common_custom,po=L.createElement(y,{width:K.advancedCard.medium.width-(no?42:0),height:K.advancedCard.medium.height-(no?42:0),main:A.transform.crops.main,highlight:A.transform.crops.highlight,shadow:A.transform.crops.shadow});ro=`'data:image/svg+xml,${encodeURIComponent(Ze(po))}'`,W=N()||zo()?"auto":"unset"}return L.createElement(b,{key:a.identifier,tool:c.TRANSFORM,type:x.MEDIUM,onClick:()=>o.changeIdentifier(a.identifier,!0),image:ro,label:V,style:{backgroundSize:W,animationDelay:`${U(S)}s`},isActive:a.identifier===p},L.createElement(E,null,V))},C=(a,S)=>{let{theme:A,measurements:K}=t.configStore,V=o.selectedCategoryIdentifier===a.identifier,ro=f.categories[a.identifier]||a.name,W=a.thumbnailURI||"";if(!a.items)return null;if(!o.checkIfTransformThumbnailExits(a.thumbnailURI)){let no=Po.categories[a.identifier]||Po.crops.imgly_transform_common_custom,y=L.createElement(no,{width:K.advancedCard.large.width-42,height:K.advancedCard.large.height-42,main:A.transform.crops.main,highlight:A.transform.crops.highlight,shadow:A.transform.crops.shadow});W=`'data:image/svg+xml,${encodeURIComponent(Ze(y))}'`}return L.createElement("div",{key:a.identifier},L.createElement(h,{type:x.LARGE,onClick:()=>o.toggleCategorySelection(a.identifier),key:a.identifier,image:W,style:{animationDelay:`${U(S)}s`},label:a.name,tool:c.TRANSFORM},L.createElement(E,{caret:!0,isActive:V},ro)),L.createElement(n.Sidebar.ExpandableContainer,{show:V},a.items.map(v)))},g=(a,S)=>{let A=f.categories[a.identifier]||a.name;return a.items?L.createElement(n.Sidebar.TextCategory,{key:a.identifier,name:A,isFirstCategory:S===0,isLastCategory:S===i.length-1},a.items.map(v)):null};return l.flattenCategories?L.createElement(L.Fragment,null,r.map(v)):l.categoryHeaderType===H.CARD?L.createElement(L.Fragment,null,i.map(C)):l.categoryHeaderType===H.TEXT?L.createElement(L.Fragment,null,i.map(g)):null},Re=d("transformTool","custom","editor")(m(jr));var Nr=({transformTool:o,displayTitle:e})=>to.createElement(to.Fragment,null,e&&to.createElement(n.Sidebar.Heading,null,o.locale.title),to.createElement(Qe,null),to.createElement(n.Itemsbar,null,to.createElement(n.CardContainer,null,to.createElement(Re,null)))),ot=d("transformTool")(m(Nr));var mo=class extends I.Component{render(){let{config:e,active:t}=this.props,i=t.tool,r=e.config.displayToolControlBarTitle;return I.createElement(n.Sidebar.Index,{reverse:e.config.order==="reverse"},I.createElement(s.Switch.Index,{type:i},I.createElement(s.Switch.Case,{value:c.LIBRARY},I.createElement(Me,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.FILTER},I.createElement(Ue,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.FOCUS},I.createElement(Le,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.ADJUSTMENT},I.createElement(ye,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.OVERLAY},I.createElement(Ne,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.STICKER},I.createElement(We,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.TEXT},I.createElement(Ke,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.TEXT_DESIGN},I.createElement(Je,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.FRAME},I.createElement(De,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.BRUSH},I.createElement(Ae,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.TRANSFORM},I.createElement(ot,{displayTitle:r})),I.createElement(s.Switch.Case,{value:c.CUSTOM},I.createElement(xe,{displayTitle:r}))))}};mo=q([d("active","config"),m],mo);var it=zr.div`
  position: absolute;
  height: 100%;
  width: ${o=>o.theme.measurements.advancedUIToolbar.width+o.theme.measurements.advancedUIToolControlBar.width}px;
  top: 0;
  background: ${o=>o.theme.webcam.backdrop};
  z-index: ${o=>o.theme.measurements.zIndex.disable};
`,So=class extends B.Component{static getDerivedStateFromError(e){return console.error(e),{hasError:!0}}render(){let{config:e,active:t}=this.props;return e.isOrderDefault?B.createElement(s.Container,null,t.isWebcam?B.createElement(it,{style:{left:0}}):null,B.createElement(nt,null),B.createElement(io,null),B.createElement(mo,null),B.createElement(rt,null,B.createElement(tt,null),B.createElement(et,null))):B.createElement(s.Container,null,t.isWebcam?B.createElement(it,{style:{right:0}}):null,B.createElement(nt,null),B.createElement(rt,null,B.createElement(tt,null),B.createElement(et,null)),B.createElement(mo,null),B.createElement(io,null))}};So=q([d("config","active"),m],So);import Io from"react";import Gr from"styled-components";var st=class extends Io.Component{constructor(e){super(e);this.ref=null;this.updatePosition=()=>{let{isReverse:e}=this.props,t={x:0,y:0};if(this.ref.current){let{top:i,height:r,left:p,right:l}=this.ref.current.getBoundingClientRect();t.y=i+r/4,t.x=e?window.innerWidth-l:p}this.setState({tooltipPosition:t})};this.mouseOver=e=>{this.updatePosition(),this.setState({hoverTool:e})};this.mouseOut=()=>{this.setState({hoverTool:null})};this.state={hoverTool:null,tooltipPosition:{x:0,y:0}},this.ref=Io.createRef()}componentDidMount(){this.updatePosition()}componentDidUpdate(e){let{isReverse:t}=this.props;t!==e.isReverse&&this.updatePosition()}render(){let{tool:e,isActive:t,isReverse:i,icon:r,label:p,onClick:l,className:f,children:b}=this.props,{hoverTool:h,tooltipPosition:v}=this.state;return Io.createElement(Wr,{ref:this.ref,onMouseOver:()=>this.mouseOver(e),onMouseOut:()=>this.mouseOut(),className:f},Io.createElement(n.Toolbar.Item,{ariaLabel:p,isActive:t,onClick:()=>l(e)},r,b),Io.createElement(n.Toolbar.Tooltip,{position:v,reverse:i,show:h===e},p))}},$o=st,Wr=Gr.div`
  position: relative;
`;var lo=class extends Ho.Component{componentDidMount(){let{editor:e,storeProps:t}=this.props;this.editor=e,this.storeProps=t;let i=new Kr(this.editor.configStore.config.custom.components,{advancedUICategoryCard:n.Card,advancedUIItemCard:n.Card,advancedUIToolbarItem:$o}),r={getAdvancedCategoryCard:i.getAdvancedCategoryCard,getAdvancedItemCard:i.getAdvancedItemCard,getAdvancedToolbarItem:i.getAdvancedToolbarItem,getDialog:i.getDialog,getButton:i.getButton,getColorItem:i.getColorItem,getCheckbox:i.getCheckbox};this.storeProps.custom=r,this.forceUpdate()}render(){return this.storeProps?Ho.createElement(Yr,O({},this.storeProps),Ho.createElement(Xr,{theme:O(O({},this.editor.configStore.theme),{measurements:this.editor.configStore.measurements})},Ho.createElement(So,null))):null}};document.onkeydown=o=>{o.keyCode===13&&document.activeElement&&document.activeElement.click()};import Vo from"react";import at from"react-dom";var mt=class extends qo{constructor(e,t){super();this.dispose=()=>{this.container&&(at.unmountComponentAtNode(this.container),this.removeAllListeners(u.EXPORT),this.removeAllListeners(u.HISTORY_CHANGE),this.removeAllListeners(u.EDITOR_READY),this.removeAllListeners(u.ERROR_IMAGE_LOADING),this.removeAllListeners(u.IMAGE_LOAD),this.removeAllListeners(u.TOOL_ENTER),this.removeAllListeners(u.STICKER_UPLOAD_ADD))};this.serialize=e=>this.editor.serialize(e);this.deserialize=e=>this.editor.deserialize(e);this.export=e=>this.editor.export(e);this.close=()=>this.editor.close();this.setImage=e=>this.editor.setImage(e);this.reset=()=>{this.editor.resetToolStates(),this.editor.resize()};this.container=t,this.editor=new Jo(O({},e)),this.editor.configStore.events.on(u.EXPORT,i=>{this.emit(u.EXPORT,i)}),this.editor.configStore.events.on(u.CLOSE,()=>{this.dispose(),this.emit(u.CLOSE)}),this.editor.configStore.events.on(u.HISTORY_CHANGE,()=>{this.emit(u.HISTORY_CHANGE)}),this.editor.configStore.events.on(u.STICKER_UPLOAD_ADD,i=>{this.emit(u.STICKER_UPLOAD_ADD,i)})}hasChanges(){return this.editor.hasChanges()}},lt=class{constructor(){this.container=null}init(e){return new Promise((t,i)=>{this.container=typeof e.container=="string"?document.querySelector(e.container):e.container,this.container?(this.editorApi=new mt(e,this.container),at.render(Vo.createElement(dt,{editor:this.editorApi.editor}),this.container),this.editorApi.editor.configStore.events.on(u.EDITOR_READY,()=>{setTimeout(()=>{this.editorApi.emit(u.EDITOR_READY)},0),t(this.editorApi)}),this.editorApi.editor.configStore.events.on(u.ERROR_IMAGE_LOADING,r=>{setTimeout(()=>{this.editorApi.emit(u.ERROR_IMAGE_LOADING,r)},0),t(this.editorApi)}),this.editorApi.editor.configStore.events.on(u.IMAGE_LOAD,()=>{setTimeout(()=>{this.editorApi.emit(u.IMAGE_LOAD)},0),t(this.editorApi)}),this.editorApi.editor.configStore.events.on(u.TOOL_ENTER,r=>{setTimeout(()=>{this.editorApi.emit(u.TOOL_ENTER,r)},0),t(this.editorApi)})):i(new Error("Provide a container"))})}},dt=class extends Vo.Component{constructor(){super(...arguments);this.UIComponent=null}componentDidMount(){this.editor=this.props.editor,this.storeProps={filterTool:this.editor.filterToolStore,focusTool:this.editor.focusToolStore,adjustmentsTool:this.editor.adjustmentsToolStore,overlayTool:this.editor.overlayToolStore,frameTool:this.editor.frameToolStore,brushTool:this.editor.brushToolStore,transformTool:this.editor.transformToolStore,scale:this.editor.scale,sprite:this.editor.spriteStore,stickerTool:this.editor.spriteStore.stickerToolStore,textTool:this.editor.spriteStore.textToolStore,textDesignTool:this.editor.spriteStore.textDesignToolStore,library:this.editor.libraryStore,modal:this.editor.modalStore,snapping:this.editor.snappingStore,config:this.editor.configStore,active:this.editor.activeStore,canvas:this.editor.canvasStore,history:this.editor.historyStore,editor:this.editor},this.editor.configStore.config.layout==="basic"?import("./ui/basic/index.js").then(({BasicUI:e})=>{this.UIComponent=e,this.forceUpdate()}):(this.UIComponent=lo,this.forceUpdate())}componentWillUnmount(){this.editor.engine.dispose(),this.editor.configStore.events.removeAllListeners(u.EXPORT),this.editor.configStore.events.removeAllListeners(u.CLOSE),this.editor.configStore.events.removeAllListeners(u.HISTORY_CHANGE),this.editor.configStore.events.removeAllListeners(u.EDITOR_READY),this.editor.configStore.events.removeAllListeners(u.ERROR_IMAGE_LOADING),this.editor.configStore.events.removeAllListeners(u.IMAGE_LOAD),this.editor.configStore.events.removeAllListeners(u.TOOL_ENTER),this.editor.configStore.events.removeAllListeners(u.STICKER_UPLOAD_ADD)}render(){if(this.editor){let e=this.UIComponent;return this.storeProps&&e?Vo.createElement(e,{editor:this.editor,storeProps:this.storeProps}):null}return null}},Vr={init:o=>new lt().init(o)};import pt from"react";var ct=class extends pt.Component{constructor(e){super(e);this.ui=new qo;this.serialize=e=>this.editor.serialize(e);this.deserialize=e=>this.editor.deserialize(e);this.export=e=>this.editor.export(e);this.close=()=>this.editor.close();this.setImage=e=>this.editor.setImage(e);this.reset=()=>{this.editor.resetToolStates(),this.editor.resize()};this.editor=new Jo(O({},e)),this.editor.configStore.events.on(u.EXPORT,t=>{this.ui.emit(u.EXPORT,t)}),this.editor.configStore.events.on(u.CLOSE,()=>{this.componentWillUnmount(),this.ui.emit(u.CLOSE)}),this.editor.configStore.events.on(u.HISTORY_CHANGE,()=>{this.ui.emit(u.HISTORY_CHANGE)}),this.editor.configStore.events.on(u.EDITOR_READY,()=>{this.ui.emit(u.EDITOR_READY)}),this.editor.configStore.events.on(u.ERROR_IMAGE_LOADING,t=>{this.ui.emit(u.ERROR_IMAGE_LOADING,t)}),this.editor.configStore.events.on(u.IMAGE_LOAD,()=>{this.ui.emit(u.IMAGE_LOAD)}),this.editor.configStore.events.on(u.TOOL_ENTER,t=>{this.ui.emit(u.TOOL_ENTER,t)}),this.editor.configStore.events.on(u.STICKER_UPLOAD_ADD,t=>{this.ui.emit(u.STICKER_UPLOAD_ADD,t)}),this.storeProps={filterTool:this.editor.filterToolStore,focusTool:this.editor.focusToolStore,adjustmentsTool:this.editor.adjustmentsToolStore,overlayTool:this.editor.overlayToolStore,frameTool:this.editor.frameToolStore,brushTool:this.editor.brushToolStore,transformTool:this.editor.transformToolStore,scale:this.editor.scale,sprite:this.editor.spriteStore,stickerTool:this.editor.spriteStore.stickerToolStore,textTool:this.editor.spriteStore.textToolStore,textDesignTool:this.editor.spriteStore.textDesignToolStore,library:this.editor.libraryStore,modal:this.editor.modalStore,snapping:this.editor.snappingStore,config:this.editor.configStore,active:this.editor.activeStore,canvas:this.editor.canvasStore,history:this.editor.historyStore,editor:this.editor},this.editor.configStore.config.layout==="basic"?import("./ui/basic/index.js").then(({BasicUI:t})=>{this.UIComponent=t,this.forceUpdate()}):(this.UIComponent=lo,this.forceUpdate())}componentWillUnmount(){this.ui.removeAllListeners(u.EXPORT),this.ui.removeAllListeners(u.HISTORY_CHANGE),this.ui.removeAllListeners(u.EDITOR_READY),this.ui.removeAllListeners(u.ERROR_IMAGE_LOADING),this.ui.removeAllListeners(u.IMAGE_LOAD),this.ui.removeAllListeners(u.TOOL_ENTER),this.ui.removeAllListeners(u.STICKER_UPLOAD_ADD)}hasChanges(){return this.editor.hasChanges()}render(){if(this.editor){let e=this.UIComponent;return this.storeProps&&e?pt.createElement(e,{editor:this.editor,storeProps:this.storeProps}):null}return null}};var fp=()=>{let{active:o}=J();return o.newImage};qr({isolateGlobalState:!0});var{Container:Hp,Input:Jr,ColorItem:Mp,ColorItemBase:_p,ColorItemBackground:jp,ColorItemTiledBackground:Np,ColorItemActiveOverlay:zp,Dialog:Gp,DialogBase:Wp,DialogContainer:Yp,DialogBackdrop:Xp,DialogHeader:Kp,DialogBody:Vp,DialogFooter:qp,DialogSpinner:Jp}=s,{Search:Qr,Label:Qp,Checkbox:Zp,CheckboxBase:Rp,CheckboxInput:oc,CheckboxCheckMark:ec}=Jr,tc=uo,rc=uo,nc=Qr;export{ft as a,ht as b,Rr as c,Ct as d,fp as e,on as f,gt as g,ut as h,ct as i,Hp as j,Mp as k,_p as l,jp as m,Np as n,zp as o,Gp as p,Wp as q,Yp as r,Xp as s,Kp as t,Vp as u,qp as v,Jp as w,$o as x,Qp as y,Zp as z,Rp as A,oc as B,ec as C,tc as D,rc as E,nc as F,Vr as G};
