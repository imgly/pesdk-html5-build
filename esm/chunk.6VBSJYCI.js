import{a as U,b as fr,c as rt,g as M,j as zr,k as E,l as Ur,m as et,n as it,p as tt,q as _t,r as gr,t as Bo}from"./chunk.SJQ3NCEJ.js";import{$ as Mr,L as k,O as mo,P as so,R as vr,T as Rt,U as Vo,V as Ho,X as n,Z as l,_ as a,aa as Vr,n as $e,u as ue,y as Do}from"./chunk.JLGER33R.js";import{A as V,I as L,S as Xr,b as H,c as p,f as Xo,g,t as Fr,v as A}from"./chunk.RL52RQ5R.js";function qr(o){return!Object.prototype.hasOwnProperty.call(o,"name")}function Qr(o){return!Object.prototype.hasOwnProperty.call(o,"name")}class Rr{}class ei{constructor(o){this.name=o.name,this.coverImageUrl=o.coverImageUrl}loadCoverImage(o="anonymous"){return new Promise((e,t)=>{const i=new Image;i.addEventListener("load",()=>{e(i)}),i.addEventListener("error",()=>{t(new Error(`Failed to load image at ${this.coverImage}`))}),i.crossOrigin=o,i.src=this.coverImageUrl,this.coverImage=i})}}class ri{constructor(o){this.title=o.title,this.category=o.category||o.title,this.thumbUrl=o.thumbUrl,this.rawUrl=o.rawUrl,this.authorName=o.authorName,this.authorAvatar=o.authorAvatar}loadThumbImage(o="anonymous"){return new Promise((e,t)=>{const i=new Image;i.addEventListener("load",()=>{e(i)}),i.addEventListener("error",()=>{t(new Error(`Failed to load image at ${this.thumbUrl}`))}),i.crossOrigin=o,i.src=this.thumbUrl,this.thumbImage=i})}getThumbImage(){return this.thumbUrl}}class Ko{getData(o){return new Promise((e,t)=>{const i=new XMLHttpRequest;i.open("GET",o,!0),i.responseType="json",i.onload=()=>{const{status:m}=i;m===200?e(i.response):t(new Error(`HTTP Status ${m}`))},i.send()})}}class si{loadJSON(o){const e=new Ko;return e.getData(o)}getCategories(){return Promise.resolve([])}searchImages(o){return Promise.resolve([])}}import dt from"react";import pt from"styled-components";const ct=pt(so)`
  width: ${o=>o.theme.measurements.advancedCard.large.width}px;
  height: ${o=>o.theme.measurements.advancedCard.large.height}px;
  margin-bottom: ${o=>o.theme.measurements.advancedSpacer}px;
  color: ${o=>o.theme.card.foreground};
`,ut=t=>{var{isActive:o}=t,e=Do(t,["isActive"]);return dt.createElement(ct,L({},e))};var Jo=ut;import ht from"styled-components";const qo=ht(so)`
  width: ${o=>o.theme.measurements.advancedCard.medium.width}px;
  height: ${o=>o.theme.measurements.advancedCard.medium.height}px;
  margin-bottom: ${o=>o.theme.measurements.advancedSpacer}px;
  color: ${o=>o.theme.card.foreground};
  &:nth-child(2n + 1) {
    margin-right: ${o=>o.theme.measurements.advancedSpacer}px;
  }
`;import ft from"styled-components";const Qo=ft(so)`
  width: ${o=>o.theme.measurements.advancedCard.small.width}px;
  height: ${o=>o.theme.measurements.advancedCard.small.height}px;
  margin-bottom: ${o=>o.theme.measurements.advancedSpacer}px;
  color: ${o=>o.theme.card.foreground};
  &:nth-child(3n + 1),
  &:nth-child(3n + 2) {
    margin-right: ${o=>o.theme.measurements.advancedSpacer}px;
  }
`;import Ct from"react";const ao=o=>{const e=o.type===A.LARGE,t=o.type===A.SMALL;let i=qo;return e?i=Jo:t&&(i=Qo),Ct.createElement(i,L({},o))};import bt from"styled-components";const vo=bt.div.attrs(()=>({"data-test":k.CardContainer}))`
  display: flex;
  flex-wrap: wrap;
  /* we need this for IE11, width - padding on both sides */
  max-width: ${o=>o.theme.measurements.advancedUIToolControlBar.width-48}px;
`;import Zo from"react";import gt,{css as Ro}from"styled-components";const vt=gt.div`
  flex-shrink: 0;
  background: ${o=>o.theme.toolControlBar.background};
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  transition: width 0.4s ease-in;
  width: ${o=>o.theme.measurements.advancedUIToolControlBar.width}px;
  margin-bottom: ${o=>o.theme.measurements.advancedUIToolControlBar.marginBottom}px;
  ${o=>o.reverse?Ro`
          border-left: 1px solid ${o.theme.toolControlBar.borderColor};
        `:Ro`
          border-right: 1px solid ${o.theme.toolControlBar.borderColor};
        `}
  z-index: ${o=>o.theme.measurements.zIndex.toolControlBar};
  /* for Firefox */
  min-height: 0;
`,oe="photoeditorsdk-Sidebar";class St extends Zo.Component{constructor(){super(...arguments);this.state={reverse:!1}}componentDidMount(){const o=document.getElementById(oe);if(o){const{offsetLeft:e}=o,t=window.innerWidth/2;e>t&&this.setState({reverse:!0})}}render(){return Zo.createElement(vt,{id:oe,"data-test":k.ToolControlBar,reverse:this.state.reverse},this.props.children)}}var ee=St;import It,{css as $o}from"styled-components";const te=It.div.attrs(()=>({"data-test":k.CategoryItemsContainer}))`
  transition: max-height 0.8s ease-out, transform 0.8s ease-out;
  background: ${o=>o.theme.toolControlBar.background};
  visibility: hidden;
  opacity: 0;
  transform-origin: 0 0;
  display: none;
  flex-wrap: wrap;

  ${({show:o})=>o&&$o`
      opacity: 1;
      visibility: visible;
      ${V()?$o`
            display: block;
          `:$o`
            display: flex;
          `}
    `}
`;import So from"react";import re from"styled-components";const yt=re.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${({height:o})=>o}px;
  opacity: ${({opacity:o})=>o};
  visibility: ${({visibility:o})=>o};
  overflow: ${({shouldAnimateOverflow:o,overflow:e})=>o?e:void 0};
  transition: ${({shouldAnimateHeight:o})=>o?"opacity 0.5s ease-in, height 0.4s ease-out":"opacity 0.5s ease-in"};
  background: ${o=>o.theme.toolControlBar.background};
  color: ${o=>o.theme.toolControlBar.inputLabelForeground};
`,xt=re.div`
  position: relative;
  padding: ${o=>o.theme.measurements.advancedUIToolControlBar.padding};
`;class ie extends So.Component{constructor(o){super(o);this.contentRef=null;this.enableOverflow=()=>{const{show:o}=this.props;o&&this.contentRef.current&&this.setState({overflow:!0})};this.contentRef=So.createRef(),this.state={height:0,mounted:!1,overflow:!1}}componentDidMount(){const{overflowAfterExpand:o}=this.props;this.contentRef.current&&(o&&this.contentRef.current.addEventListener("transitionend",this.enableOverflow),this.setState({height:this.contentRef.current.scrollHeight,mounted:!0}))}componentWillUnmount(){this.contentRef.current&&this.contentRef.current.removeEventListener("transitionend",this.enableOverflow)}render(){const{show:o,shouldAnimateOverflow:e,shouldAnimateHeight:t,children:i}=this.props,{height:m,mounted:c,overflow:d}=this.state,u=c&&(o&&e||!e),b=u?m:0,h=u?1:0,S=u?"visible":"hidden";return So.createElement(yt,{"data-test":k.ToolControlBarControls,ref:this.contentRef,height:b,opacity:h,visibility:S,overflow:d?"visible":"hidden",shouldAnimateHeight:t,shouldAnimateOverflow:e},So.createElement(xt,null,i))}}ie.defaultProps={show:!0,shouldAnimateOverflow:!0,shouldAnimateHeight:!0};var ne=ie;import Tt from"styled-components";const se=Tt.div.attrs({"data-photoeditorsdk-simplebar":"init","data-photoeditorsdk-simplebar-auto-hide":"false"})`
  &&& {
    flex-grow: 1;
    position: relative;
    box-sizing: border-box;
    padding: ${o=>o.theme.measurements.advancedUIToolControlBar.padding};
    width: ${o=>o.theme.measurements.advancedUIToolControlBar.width}px;
    overflow: visible;
    /* for Firefox */
    min-height: 0;
    transition: height 0.4s cubic-bezier(0.17, 0.04, 0.03, 0.94);
    background: ${o=>o.theme.toolControlBar.background};
    color: ${o=>o.theme.toolControlBar.inputLabelForeground};

    ${Ho.HiddenScrollbar}
    .photoeditorsdk-simplebar-placeholder {
      height: 0px !important;
    }
  }
`;import At,{css as kt}from"styled-components";const Et=At.div`
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    ${o=>o.full?kt`
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
`;var Io=Et;import Ut from"styled-components";const wt=Ut.h2`
  color: ${o=>o.theme.toolControlBar.titleForeground};
  font-size: ${o=>o.theme.measurements.fontSystem.headline2.size}px;
  letter-spacing: ${o=>o.theme.measurements.fontSystem.headline2.letterSpacing}px;
  text-transform: ${o=>o.theme.measurements.fontSystem.headline2.case};
  font-weight: 500;
  min-height: ${o=>2*o.theme.measurements.advancedSpacer}px;
`;var yo=wt;import to from"react";import Ft from"styled-components";const Bt=Ft.div`
  position: relative;
  width: 100%;
`,ae=({name:o,isFirstCategory:e,isLastCategory:t,children:i})=>to.createElement(Bt,null,e&&to.createElement(n.Spacer,{count:2}),to.createElement(yo,{"data-test":o},o),to.createElement(vo,{"data-test":k.CategoryItemsContainer},i),to.createElement(n.Spacer,{count:2}),t&&to.createElement(Io,{full:!0}));import Lt from"styled-components";const Pt=Lt.h2`
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
`;var le=Pt;import Mo from"react";import me,{css as jo}from"styled-components";const Ot=me.div`
  z-index: ${o=>o.theme.measurements.zIndex.toolbar};
  flex-shrink: 0;
  background-color: ${o=>o.theme.toolbar.background};
  color: ${o=>o.theme.toolbar.foreground};
  ${o=>{const e=o.theme.toolbar.border?o.theme.toolbar.border:jo`
          1px solid ${o.theme.toolbar.borderColor};
        `;return o.reverse?jo`
          border-left: ${e};
        `:jo`
          border-right: ${e};
        `}}
  height: 100%;
  width: ${o=>o.theme.measurements.advancedUIToolbar.width}px;
  margin-bottom: ${o=>o.theme.measurements.advancedUIToolbar.marginBottom}px;
`,Dt=me.ul.attrs(()=>({role:"menubar","aria-label":"Tool Navigation","data-photoeditorsdk-simplebar":"init","data-photoeditorsdk-simplebar-auto-hide":"false"}))`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  list-style: none;
  overflow-x: hidden;
  overflow-y: overlay;
  height: 100%;
  .simplebar-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;class de extends Mo.Component{constructor(){super(...arguments);this.state={reverse:!1}}componentDidMount(){const o=document.getElementById("photoeditorsdk-AdvancedToolbar");if(o){const{offsetLeft:e}=o,t=window.innerWidth/2;e>t&&this.setState({reverse:!0})}}render(){const{children:o}=this.props,{reverse:e}=this.state;return Mo.createElement(Ot,{reverse:e},Mo.createElement(Dt,{id:"photoeditorsdk-AdvancedToolbar"},o(e)))}}import pe from"react";import ce,{css as zo}from"styled-components";const $t=ce(ue)`
  width: inherit;
  height: inherit;
  padding: 0;
  margin: 0;
  ${V()?zo`
        background-color: transparent;
      `:zo`
        background-color: inherit;
      `}

  ${o=>o.isActive&&zo`
      background-color: ${o.theme.toolbar.activeBackground};
      color: ${o.theme.toolbar.activeForeground};
    `}
`,Ht=ce.li.attrs({"aria-haspopup":!0,"aria-hidden":!0,role:"menuitem"})`
  height: ${o=>o.theme.measurements.advancedUIToolbar.itemHeight}px;
  cursor: pointer;
  position: relative;
`,he=t=>{var{isActive:o}=t,e=Do(t,["isActive"]);return pe.createElement(Ht,null,pe.createElement($t,L(L({},e),{isActive:o,"data-test":k.ToolbarItem})))};import Mt from"styled-components";const jt=Mt.li.attrs({role:"none"})`
  height: ${o=>o.theme.measurements.advancedUIToolbar.seperatorHeight}px;
  cursor: pointer;
  position: relative;
`;var fe=jt;import Ce from"react";import be,{css as lo}from"styled-components";const zt=be.div`
  ${V()?lo`
        position: -ms-device-fixed;
      `:lo`
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

  ${o=>o.reverse&&lo`
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

  ${o=>o.show&&!o.reverse&&lo`
      opacity: 1;
      visibility: visible;
      left: ${o.position.x+o.theme.measurements.advancedUIToolbar.width+16}px;
    `}

  ${o=>o.show&&o.reverse&&lo`
      opacity: 1;
      visibility: visible;
      right: ${o.position.x+o.theme.measurements.advancedUIToolbar.width+16}px;
    `}
`,Nt=be.span`
  display: none;
`,ge=({show:o,reverse:e,position:t,children:i})=>{const m=typeof i=="string"?i:"";return Ce.createElement(zt,{"data-test":k.Tooltip,show:o,reverse:e,position:t,label:m},Ce.createElement(Nt,null,m))};ge.defaultProps={show:!1};var ve=ge;const r={Card:ao,CardContainer:vo,Toolbar:{Index:de,Item:he,Separator:fe,Tooltip:ve},Itemsbar:se,BarSeparator:"",ItemsSeparator:Io,Controlsbar:ne,Sidebar:{Index:ee,Heading:le,SubHeading:yo,TextCategory:ae,ExpandableContainer:te}};import xo from"react";let To=class extends xo.Component{constructor(){super(...arguments);this.renderIcon=o=>{const e=_t[o];return xo.createElement(e,null)||null};this.update=o=>{this.props.active.selectTool(o)}}getToolTitle(o){return this.props.config.locale[o].title}render(){const o=this.props.active.tool,{tool:e,custom:t}=this.props;if(e){const i=t.getAdvancedToolbarItem();return xo.createElement(i,{key:e,isActive:e===o,isReverse:this.props.isReverse,icon:this.renderIcon(e),onClick:()=>this.update(e),tool:e,label:this.getToolTitle(e)})}return xo.createElement(r.Toolbar.Separator,null)}};To=mo([l("active","config","custom"),a],To);var Se=To;import No from"react";let Ao=class extends No.Component{constructor(){super(...arguments);this.renderTools=o=>this.props.config.tools.map((e,t)=>No.createElement(Se,{key:e||t,tool:e,isReverse:o}))}render(){return No.createElement(r.Toolbar.Index,null,this.renderTools)}};Ao=mo([l("config"),a],Ao);var _o=Ao;import Wo from"react";const Wt=({adjustmentsTool:o,custom:e})=>{const t=o.locale.controls,i=e.getButton("toolControlBarSecondaryButton"),m=()=>{o.reset()};return Wo.createElement(r.Controlsbar,{show:o.isDirty},Wo.createElement(i,{tool:p.ADJUSTMENT,label:t.buttonReset,ariaLabel:t.buttonReset,onClick:m,fullWidth:!0}),Wo.createElement(r.ItemsSeparator,null))};var Ie=l("adjustmentsTool","custom")(a(Wt));import ro from"react";import Gt from"styled-components";const Yt=Gt(n.Input.Slider)`
  padding-bottom: 16px;
`,Xt=({adjustmentsTool:o})=>{const{categories:e,items:t,config:i,locale:m}=o,c=()=>{o.toolSnapshot()},d=(h,S)=>{o.editAdjustments({type:h,value:S})},u=h=>{const S=o.locale.categories[h.identifier]||h.name;return ro.createElement(Yt,{identifier:h.identifier,adjust:!0,key:h.identifier,label:S,value:o[h.identifier],onChange:C=>d(h.identifier,C),onMouseUp:c,onTouchEnd:c,snap:0})},b=(h,S)=>{const C=m.categories[h.identifier]||h.name;return h.items?ro.createElement(r.Sidebar.TextCategory,{key:h.identifier,name:C,isFirstCategory:S!==0,isLastCategory:S!==e.length-1},h.items.map(u)):null};return i.flattenCategories?ro.createElement(ro.Fragment,null,t.map(u)):ro.createElement(ro.Fragment,null,e.map(b))};var ye=l("adjustmentsTool")(a(Xt));import io from"react";const Vt=({adjustmentsTool:o,displayTitle:e})=>io.createElement(io.Fragment,null,e&&io.createElement(r.Sidebar.Heading,null,o.locale.title),io.createElement(Ie,null),io.createElement(r.Itemsbar,null,io.createElement(ye,null)));var xe=l("adjustmentsTool")(a(Vt));import P from"react";const Kt=({brushTool:o,custom:e})=>{const{colorList:t}=o,i=o.locale.controls,m=o.localeColor.colorPicker,c=e.getButton("toolControlBarSecondaryButton");return P.createElement(P.Fragment,null,P.createElement(r.Controlsbar,{show:o.isDirty},P.createElement(c,{tool:p.BRUSH,ariaLabel:i.buttonReset,onClick:o.reset,fullWidth:!0,label:i.buttonReset}),P.createElement(r.ItemsSeparator,null)),P.createElement(r.Controlsbar,{overflowAfterExpand:!0},P.createElement(n.Input.Selection,{label:i.selectColor},P.createElement(M,{"data-test":k.BrushColor,parentId:i.selectColor,activeColor:o.color,colors:t,labelsColor:m,onChange:o.changeColor})),P.createElement(n.Spacer,{count:2}),P.createElement(n.Input.Slider,{"data-test":k.BrushSize,label:i.sliderSize,value:o.relativeSize,min:1,max:100,divider:1,onChange:o.changeRelativeSize}),P.createElement(n.Spacer,{count:3}),P.createElement(n.Input.Slider,{"data-test":k.BrushHardness,label:i.sliderHardness,value:o.hardness,min:0,max:1,onChange:o.changeHardness}),P.createElement(n.Spacer,null)))};var Te=l("brushTool","custom")(a(Kt));import po from"react";const Jt=({brushTool:o,displayTitle:e})=>po.createElement(po.Fragment,null,e&&po.createElement(r.Sidebar.Heading,null,o.locale.title),po.createElement(Te,null),po.createElement(r.Itemsbar,null));var Ae=l("brushTool")(a(Jt));import K from"react";const qt=({filterTool:o,custom:e})=>{const t=o.locale.controls,i=o.state,m=e.getButton("toolControlBarSecondaryButton"),c=()=>{o.toolSnapshot()},d=()=>{o.reset()};return K.createElement(r.Controlsbar,{show:o.isOptionSelected},K.createElement(n.Input.Form,null,K.createElement(m,{tool:p.FILTER,ariaLabel:t.buttonReset,onClick:d,fullWidth:!0,label:t.buttonReset}),K.createElement(n.Spacer,{count:2}),K.createElement(n.Input.Slider,{"aria-hidden":!o.isOptionSelected,label:t.sliderIntensity,value:i.intensity,min:0,max:1,onChange:o.changeIntensity,onMouseUp:c,onTouchEnd:c,snap:i.isDuotone?.5:null}),K.createElement(n.Spacer,null)),K.createElement(r.ItemsSeparator,null))};var ke=l("filterTool","custom")(a(qt));import O from"react";const Qt=({filterTool:o,custom:e})=>{const{categories:t,config:i,items:m,locale:c}=o,d=e.getAdvancedItemCard(),u=e.getAdvancedCategoryCard(),b=(C,f)=>{const s=c.items[C.identifier]||C.name;return O.createElement(d,{tool:p.FILTER,type:A.MEDIUM,onClick:()=>o.selectFilter(C.identifier,C.defaultIntensity),key:C.identifier,image:C.thumbnailURI,label:s,style:{animationDelay:`${U(f)}s`},isActive:o.identifier===C.identifier},O.createElement(E,{withBackground:!0},s))},h=(C,f)=>{const{selectedCategoryIdentifier:s}=o,v=s===C.identifier,T=c.categories[C.identifier]||C.name;return C.items?O.createElement("div",{key:C.identifier},O.createElement(u,{isActive:v,tool:p.FILTER,type:A.LARGE,onClick:()=>o.toggleCategorySelection(C.identifier),image:C.thumbnailURI,label:T,style:{animationDelay:`${U(f)}s`}},O.createElement(E,{withBackground:!0,caret:!0,isActive:v},T)),O.createElement(r.Sidebar.ExpandableContainer,{show:v},C.items.map(b))):null},S=(C,f)=>{const s=c.categories[C.identifier]||C.name;return C.items?O.createElement(r.Sidebar.TextCategory,{key:C.identifier,name:s,isFirstCategory:f!==0,isLastCategory:f!==t.length-1},C.items.map(b)):null};return i.flattenCategories?O.createElement(O.Fragment,null,m.map(b)):i.categoryHeaderType===H.CARD?O.createElement(O.Fragment,null,t.map(h)):i.categoryHeaderType===H.TEXT?O.createElement(O.Fragment,null,t.map(S)):null};var Ee=l("filterTool","custom")(a(Qt));import J from"react";const Zt=({filterTool:o,displayTitle:e})=>J.createElement(J.Fragment,null,e&&J.createElement(r.Sidebar.Heading,null,o.locale.title),J.createElement(ke,null),J.createElement(r.Itemsbar,{key:"filterToolItemsbar"},J.createElement(r.CardContainer,null,J.createElement(Ee,null))));var Ue=l("filterTool")(a(Zt));import q from"react";const or=({focusTool:o,custom:e})=>{const t=o.locale.controls,i=e.getButton("toolControlBarSecondaryButton"),m=()=>{o.toolSnapshot(t.sliderIntensity)},c=()=>{o.reset()};return q.createElement(r.Controlsbar,{show:o.isOptionSelected},q.createElement(n.Input.Form,null,q.createElement(i,{tool:p.FOCUS,ariaLabel:t.buttonReset,onClick:c,fullWidth:!0,label:t.buttonReset}),q.createElement(n.Spacer,{count:2}),q.createElement(n.Input.Slider,{"aria-hidden":!o.isOptionSelected,label:t.sliderIntensity,value:o.intensity,min:Rt.minIntensity,max:o.maxIntensity,divider:1,onChange:o.changeIntensity,onMouseUp:m,onTouchEnd:m})),q.createElement(n.Spacer,{count:1}),q.createElement(r.ItemsSeparator,null))};var we=l("focusTool","custom")(a(or));import ko from"react";const er=({focusTool:o,custom:e})=>{const{items:t}=o,i=(m,c)=>{const d=o.locale.items[m.identifier]||m.name,u=e.getAdvancedItemCard();return ko.createElement(u,{tool:p.FOCUS,type:A.LARGE,onClick:()=>o.selectFocus(m.identifier),key:m.identifier,image:m.thumbnailURI,label:d,style:{animationDelay:`${U(c)}s`},isActive:m.identifier===o.identifier},ko.createElement(E,{withBackground:!0},d))};return ko.createElement(r.Itemsbar,null,ko.createElement(r.CardContainer,null,t.map(i)))};var Fe=l("focusTool","custom")(a(er));import co from"react";const tr=({focusTool:o,displayTitle:e})=>co.createElement(co.Fragment,null,e&&co.createElement(r.Sidebar.Heading,null,o.locale.title),co.createElement(we,null),co.createElement(Fe,null));var Be=l("focusTool")(a(tr));import j from"react";const rr=({frameTool:o,custom:e})=>{const t=o.locale.controls,i=o.localeColor.colorPicker,{tintable:m,colorList:c}=o,d=e.getButton("toolControlBarSecondaryButton"),u=()=>{o.reset()},b=h=>{o.toolSnapshot(h)};return j.createElement(r.Controlsbar,{show:o.isOptionSelected,overflowAfterExpand:!0},j.createElement(d,{tool:p.FRAME,ariaLabel:t.buttonReset,onClick:u,fullWidth:!0,label:t.buttonReset}),j.createElement(n.Spacer,{count:2}),j.createElement(n.Input.Slider,{"aria-hidden":!o.isOptionSelected,label:t.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:()=>{b(t.sliderOpacity)},onTouchEnd:()=>{b(t.sliderOpacity)}}),j.createElement(n.Spacer,{count:2}),j.createElement(n.Input.Slider,{"aria-hidden":!o.isOptionSelected,label:t.sliderSize,value:o.size,min:o.minSize,max:o.maxSize,divider:1,onChange:o.changeWidth,onMouseUp:()=>{b(t.sliderSize)},onTouchEnd:()=>{b(t.sliderSize)}}),j.createElement(n.Spacer,{count:2}),j.createElement(n.Input.Selection,{isDisabled:!m,label:t.selectColor},j.createElement(M,{parentId:t.selectColor,activeColor:o.color,colors:c,labelsColor:i,isDisabled:!m,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot})),j.createElement(r.ItemsSeparator,null))};var Le=l("frameTool","custom")(a(rr));import Eo from"react";const ir=({frameTool:o,custom:e})=>{const{items:t}=o,i=o.state?o.state.identifier:null,m=(c,d)=>{const u=o.locale.items[c.identifier]||c.name,b=e.getAdvancedItemCard();return Eo.createElement(b,{tool:p.FRAME,type:A.MEDIUM,onClick:()=>o.selectFrame(c.identifier),key:c.identifier,image:c.thumbnailURI,label:u,style:{backgroundSize:"75%",animationDelay:`${U(d)}s`},isActive:c.identifier===i},Eo.createElement(E,{hidden:!0},u))};return Eo.createElement(r.Itemsbar,null,Eo.createElement(r.CardContainer,null,t.map(m)))};var Pe=l("frameTool","custom")(a(ir));import uo from"react";const nr=({frameTool:o,displayTitle:e})=>uo.createElement(uo.Fragment,null,e&&uo.createElement(r.Sidebar.Heading,null,o.locale.title),uo.createElement(Le,null),uo.createElement(Pe,null));var Oe=l("frameTool")(a(nr));import $ from"react";const sr=({library:o,active:e,custom:t})=>{const i=o.locale.controls.placeholderSearch,{config:m,libraryProvider:c}=o,d=t.getButton("toolControlBarPrimaryButton"),u=t.getButton("toolControlBarSecondaryButton"),b=f=>{const{files:s}=f.target;if(s.length){const v=new FileReader;v.onload=T=>{e.newImage(T.target.result)},v.readAsDataURL(s[0])}},h=()=>{e.selectWebcam(!0)},S=()=>{const f=document.getElementById("fileUpload");f&&f.click()},C=f=>{o.fetchImages(f)};return $.createElement(r.Controlsbar,{shouldAnimateHeight:!1,shouldAnimateOverflow:!1},c&&$.createElement($.Fragment,null,$.createElement(n.Input.Search,{onChange:C,placeholder:i}),$.createElement(n.Spacer,{count:2})),m.enableUpload&&$.createElement($.Fragment,null,$.createElement(d,{tool:p.LIBRARY,ariaLabel:o.locale.controls.buttonUpload,onClick:S,fullWidth:!0,label:o.locale.controls.buttonUpload},$.createElement(n.Input.File,{onChange:b})),$.createElement(n.Spacer,null)),m.enableWebcam&&$.createElement(u,{tool:p.LIBRARY,ariaLabel:o.locale.controls.buttonWebcamOpen,onClick:h,fullWidth:!0,label:o.locale.controls.buttonWebcamOpen}),$.createElement(r.ItemsSeparator,null))};var De=l("library","active","custom")(a(sr));import w from"react";const ar=({active:o,library:e,custom:t})=>{const{query:i,config:m,selectedCategoryIdentifier:c,categories:d,items:u}=e,b=t.getAdvancedCategoryCard(),h=t.getAdvancedItemCard(),S=(s,v)=>w.createElement(h,{tool:p.LIBRARY,type:A.MEDIUM,onClick:()=>o.newImage(s.rawUrl),key:`${s.identifier}-${v}`,image:s.thumbnailURI,label:s.name,style:{animationDelay:`${U(v)}s`},authorAvatar:s.authorAvatar,authorName:s.authorName},s.authorAvatar&&w.createElement($e,{url:s.authorAvatar}),s.authorName&&w.createElement(E,{withBackground:!0},s.authorName)),C=(s,v)=>{const T=c===s.identifier;return s.items?w.createElement("div",{key:s.identifier},w.createElement(b,{isActive:T,tool:p.LIBRARY,type:A.LARGE,onClick:()=>e.toggleCategorySelection(s.identifier),image:s.thumbnailURI,label:s.name,style:{animationDelay:`${U(v)}s`}},w.createElement(E,{withBackground:!0,caret:!0,isActive:T},s.name)),w.createElement(r.Sidebar.ExpandableContainer,{show:T},s.items.map(S))):null},f=(s,v)=>s.items?w.createElement(r.Sidebar.TextCategory,{key:s.identifier,name:s.name,isFirstCategory:v!==0,isLastCategory:v!==d.length-1},s.items.map(S)):null;return i?u.length?w.createElement(w.Fragment,null,u.map(S)):w.createElement("p",{"data-test":"LibraryNoResult"},e.locale.controls.noResults):m.flattenCategories?w.createElement(w.Fragment,null,u.map(S)):m.categoryHeaderType===H.CARD?w.createElement(w.Fragment,null,d.map(C)):m.categoryHeaderType===H.TEXT?w.createElement(w.Fragment,null,d.map(f)):null};var He=l("library","active","custom")(a(ar));import Q from"react";const lr=({library:o,displayTitle:e})=>Q.createElement(Q.Fragment,null,e&&Q.createElement(r.Sidebar.Heading,null,o.locale.title),Q.createElement(De,null),Q.createElement(r.Itemsbar,null,Q.createElement(r.CardContainer,null,Q.createElement(He,null))));var Me=l("library")(a(lr));import G from"react";const mr=({overlayTool:o,custom:e})=>{const t=o.locale.controls,{allBlendModes:i}=o,{blendMode:m}=o,c=e.getButton("toolControlBarSecondaryButton"),d=()=>{o.toolSnapshot()},u=h=>{o.changeBlendMode(h)},b=()=>{o.reset()};return G.createElement(r.Controlsbar,{show:o.isOptionSelected},G.createElement(c,{tool:p.OVERLAY,ariaLabel:t.buttonReset,onClick:b,fullWidth:!0,label:t.buttonReset}),G.createElement(n.Spacer,{count:2}),G.createElement(n.Input.CarouselSlider,{label:t.carouselBlendMode,defaultIdentifier:m,onSelect:u,list:i}),G.createElement(n.Spacer,{count:2}),G.createElement(n.Input.Slider,{"aria-hidden":!o.isOptionSelected,label:t.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:d,onTouchEnd:d}),G.createElement(n.Spacer,null),G.createElement(r.ItemsSeparator,null))};var je=l("overlayTool","custom")(a(mr));import Uo from"react";const dr=({overlayTool:o,custom:e})=>{const{items:t,locale:i,identifier:m,selectOverlay:c}=o,d=(u,b)=>{const h=i.items[u.identifier]||u.name,S=e.getAdvancedItemCard();return Uo.createElement(S,{tool:p.OVERLAY,type:A.MEDIUM,onClick:()=>c(u.identifier),key:u.identifier,image:u.thumbnailURI,label:h,style:{animationDelay:`${U(b)}s`},isActive:u.identifier===m},Uo.createElement(E,{withBackground:!0},h))};return Uo.createElement(r.Itemsbar,null,Uo.createElement(r.CardContainer,null,t.map(d)))};var ze=l("overlayTool","custom")(a(dr));import ho from"react";const pr=({overlayTool:o,displayTitle:e})=>ho.createElement(ho.Fragment,null,e&&ho.createElement(r.Sidebar.Heading,null,o.locale.title),ho.createElement(je,null),ho.createElement(ze,null));var Ne=l("overlayTool")(a(pr));import z from"react";import cr from"styled-components";const ur=cr.input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:!0})`
  ${Ho.VisuallyHidden}
`,hr=({stickerTool:o,custom:e})=>{const{colorList:t}=o,i=o.locale.controls,m=o.localeColor.colorPicker,c=e.getButton("toolControlBarPrimaryButton"),d=()=>{o.toolSnapshot()},u=()=>{const C=document.getElementById("fileUpload");C&&(C.value=null,C.click())},b=C=>{const{files:f}=C.target;o.addFiles(f)},h=()=>o.isCustomStickerEnabled?z.createElement(c,{tool:p.STICKER,ariaLabel:i.buttonUpload,onClick:u,fullWidth:!0,label:i.buttonUpload},z.createElement(ur,{onChange:b})):null,S=!o.isStickerSelected||!o.tintable&&o.isStickerSelected;return z.createElement(r.Controlsbar,{shouldAnimateHeight:!1,shouldAnimateOverflow:!1,overflowAfterExpand:!0},z.createElement(n.Input.Form,null,h(),z.createElement(n.Spacer,{count:2}),z.createElement(n.Input.Slider,{isDisabled:!o.isStickerSelected,label:i.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:d,onTouchEnd:d}),z.createElement(n.Spacer,{count:2}),z.createElement(n.Input.Selection,{isDisabled:S,label:i.selectColor},z.createElement(M,{activeSprite:o.id,parentId:i.selectColor,activeColor:o.tintColor,colors:t,labelsColor:m,isDisabled:S,onChange:o.changeTintColor,onAddSnapshot:o.tintColorSnapshot}))),z.createElement(r.ItemsSeparator,null))};var _e=l("stickerTool","custom")(a(hr));import D from"react";const Cr=({stickerTool:o,custom:e})=>{const{categories:t,selectedCategoryIdentifier:i,config:m,items:c,locale:d}=o,u=e.getAdvancedCategoryCard(),b=e.getAdvancedItemCard(),h=(f,s)=>{const v=d.items[f.identifier]||f.name;return D.createElement(b,{key:f.identifier,tool:p.STICKER,type:A.SMALL,onClick:()=>o.add(f.identifier),image:f.thumbnailURI,label:v,style:{backgroundSize:"75%",animationDelay:`${fr(s)}s`}},D.createElement(E,{hidden:!0},v))},S=(f,s)=>{const v=i===f.identifier,T=d.categories[f.identifier]||f.name;return f.items?D.createElement("div",{key:f.identifier},D.createElement(u,{isActive:v,tool:p.STICKER,type:A.LARGE,onClick:()=>o.toggleCategorySelection(f.identifier),image:f.thumbnailURI,label:T,style:{animationDelay:`${U(s)}s`}},D.createElement(E,{withBackground:!0,caret:!0,isActive:v},T)),D.createElement(r.Sidebar.ExpandableContainer,{show:v,key:`${f.identifier}-items`},f.items.map(h))):null},C=(f,s)=>{const v=d.categories[f.identifier]||f.name;return f.items?D.createElement(r.Sidebar.TextCategory,{key:f.identifier,name:v,isFirstCategory:s!==0,isLastCategory:s!==t.length-1},f.items.map(h)):null};return m.flattenCategories?D.createElement(D.Fragment,null,c.map(h)):m.categoryHeaderType===H.CARD?D.createElement(D.Fragment,null,t.map(S)):m.categoryHeaderType===H.TEXT?D.createElement(D.Fragment,null,t.map(C)):null};var We=l("stickerTool","custom")(a(Cr));import Z from"react";const br=({stickerTool:o,displayTitle:e})=>Z.createElement(Z.Fragment,null,e&&Z.createElement(r.Sidebar.Heading,null,o.locale.title),Z.createElement(_e,null),Z.createElement(r.Itemsbar,null,Z.createElement(r.CardContainer,null,Z.createElement(We,null))));var Ge=l("stickerTool")(a(br));import y from"react";import wo from"styled-components";const Ye=wo.div`
  position: relative;
`,Sr=wo.div`
  display: flex;
  justify-content: space-between;
`,Ir=wo(n.Input.NumericInput)`
  max-width: 50%;
  margin-right: 16px;
`,yr=wo(n.Input.Selection)`
  width: 50%;
`,xr=({textTool:o,custom:e})=>{const t=o.locale.controls,i=o.localeColor.colorPicker,{fontFamilies:m,alignment:c,isTextSelected:d,fontFamily:u,fontStyle:b,fontWeight:h,colorList:S,backgroundColorList:C}=o,f=["left","center","right"],s=e.getButton("textAlignment"),v=e.getButton("toolControlBarPrimaryButton"),T=()=>{o.toolSnapshot()},Y=()=>{o.add()},X=I=>{const no=I?parseFloat(I):0;o.setFontSize(Math.max(10,Math.min(690,no)))},oo=()=>f.map(I=>{const no=gr[I];return y.createElement(s,{tool:I,isDisabled:!d,ariaLabel:`Align ${I}`,isActive:I===c,key:I,style:{padding:"1px 3px 2px"},icon:y.createElement(no,null),onClick:()=>o.changeAlignment(I)})}),W=m.map(I=>({label:`${I.fontFamily} ${vr.getDisplayFontStyle(I)}`,fontWeight:I.fontWeight||"",fontStyle:I.fontStyle||"",fontFamily:I.fontFamily||"",value:I.identifier})),eo=W.filter(({value:I})=>I===o.identifier)[0];return y.createElement(r.Controlsbar,{show:!0,overflowAfterExpand:!0,shouldAnimateHeight:!1},y.createElement(n.Input.Form,null,y.createElement(v,{tool:p.TEXT,ariaLabel:t.buttonNew,onClick:Y,fullWidth:!0,label:t.buttonNew}),y.createElement(n.Spacer,{count:2}),y.createElement(n.Input.Dropdown,{isDisabled:!d,style:{fontFamily:u,fontStyle:b,fontWeight:h},itemStyle:I=>({fontFamily:I.fontFamily,fontStyle:I.fontStyle,fontWeight:I.fontWeight}),label:t.dropdownFontFamily,list:W,onSelect:o.changeFont,selectedItem:eo.label}),y.createElement(n.Spacer,{count:2}),y.createElement(Sr,null,y.createElement(Ir,{value:o.fontSize.toFixed(0),onSubmit:X,label:t.textFontSize,isDisabled:!d}),y.createElement(yr,{isDisabled:!d,inline:!0,label:t.selectAlignment},oo())),y.createElement(n.Spacer,{count:2}),y.createElement(Ye,null,y.createElement(r.ItemsSeparator,{full:!0})),y.createElement(n.Spacer,{count:2}),y.createElement(n.Input.Selection,{isDisabled:!d,label:t.selectFontColor},y.createElement(M,{activeSprite:o.id,parentId:t.selectFontColor,activeColor:o.textColor,colors:S,labelsColor:i,isDisabled:!d,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot})),y.createElement(n.Spacer,{count:2}),y.createElement(n.Input.Selection,{isDisabled:!d,label:t.selectBackgroundColor},y.createElement(M,{activeSprite:o.id,parentId:t.selectBackgroundColor,activeColor:o.backgroundColor,colors:C,labelsColor:i,isDisabled:!d,onChange:o.changeBackgroundColor,onAddSnapshot:o.backgroundColorSnapshot})),y.createElement(n.Spacer,{count:2}),y.createElement(Ye,null,y.createElement(r.ItemsSeparator,{full:!0})),y.createElement(n.Spacer,{count:2}),y.createElement(n.Input.Slider,{isDisabled:!d,label:t.sliderLineSpacing,value:o.lineHeight,min:.5,max:3,onChange:o.changeLineHeight,onMouseUp:T,onTouchEnd:T,snap:1,divider:1,decimal:1}),y.createElement(n.Spacer,{count:1})))};var Xe=l("textTool","custom")(a(xr));import fo from"react";const Tr=({textTool:o,displayTitle:e})=>fo.createElement(fo.Fragment,null,e&&fo.createElement(r.Sidebar.Heading,null,o.locale.title),fo.createElement(Xe,null),fo.createElement(r.Itemsbar,null));var Ve=l("textTool")(a(Tr));import N from"react";const Ar=({textDesignTool:o,custom:e})=>{const t=o.locale.controls,i=o.localeColor.colorPicker,{colorList:m}=o,c=o.isTextDesignSelected,d=e.getButton("toolControlBarPrimaryButton"),u=e.getButton("toolControlBarSecondaryButton"),b=()=>{o.add()},h=()=>{o.changeSeed()};return N.createElement(r.Controlsbar,{shouldAnimateOverflow:!1,shouldAnimateHeight:!1},N.createElement(n.Input.Form,null,N.createElement(d,{tool:p.TEXT_DESIGN,ariaLabel:t.buttonNew,onClick:b,fullWidth:!0,label:t.buttonNew}),N.createElement(n.Spacer,{count:2}),N.createElement(u,{tool:p.TEXT_DESIGN,ariaLabel:t.buttonShuffle,isDisabled:!c,onClick:h,fullWidth:!0,label:t.buttonShuffle}),N.createElement(n.Spacer,{count:2}),N.createElement(n.Input.Selection,{isDisabled:!c,label:t.selectColor},N.createElement(M,{activeSprite:o.id,parentId:t.selectColor,activeColor:o.color,colors:m,labelsColor:i,isDisabled:!c,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),N.createElement(r.ItemsSeparator,null))};var Ke=l("textDesignTool","custom")(a(Ar));import Fo from"react";const kr=({textDesignTool:o,custom:e})=>{const{items:t,identifier:i}=o,m=d=>{o.changeIdentifier(d)},c=(d,u)=>{const b=e.getAdvancedItemCard();return Fo.createElement(b,{key:d.identifier,tool:p.TEXT_DESIGN,type:A.MEDIUM,onClick:()=>m(d.identifier),image:d.thumbnailURI,label:d.name||"",style:{animationDelay:`${U(u)}s`,backgroundSize:"60%"},isDisabled:!o.isTextDesignSelected,isActive:i===d.identifier},Fo.createElement(E,{hidden:!0},d.name))};return Fo.createElement(r.Itemsbar,null,Fo.createElement(r.CardContainer,null,t.map(c)))};var Je=l("textDesignTool","custom")(a(kr));import Co from"react";const Er=({textDesignTool:o,displayTitle:e})=>Co.createElement(Co.Fragment,null,e&&Co.createElement(r.Sidebar.Heading,null,o.locale.title),Co.createElement(Ke,null),Co.createElement(Je,null));var qe=l("textDesignTool")(a(Er));import _ from"react";const wr=({transformTool:o,custom:e})=>{const t=o.locale.controls,{forceDimensions:i,lockResolution:m,localOutputHeight:c,localOutputWidth:d}=o,u=e.getButton("toolControlBarSecondaryButton"),b=()=>{o.reset()},h=e.getCheckbox();return _.createElement(r.Controlsbar,{shouldAnimateHeight:!1},_.createElement(n.Input.Form,null,_.createElement(u,{tool:p.TRANSFORM,ariaLabel:t.buttonReset,onClick:b,fullWidth:!0,label:t.buttonReset}),_.createElement(n.Spacer,{count:2}),_.createElement(h,{isDisabled:i,value:m,label:t.checkboxKeepResolution,checkMarkPosition:"right",onClick:o.changeLockResolution,style:{paddingTop:"5px",justifyContent:"space-between"}}),_.createElement(n.Spacer,{count:2}),_.createElement(Ur,{isDisabled:i,showLabel:!0,valueHeight:c,valueWidth:d,onSubmitWidth:o.onPixelWidth,onSubmitHeight:o.onPixelHeight,label:t.inputCropSize,labelHeight:t.inputHeight,labelWidth:t.inputWidth}),_.createElement(n.Spacer,{count:1})),_.createElement(r.ItemsSeparator,null))};var Qe=l("transformTool","custom")(a(wr));import B from"react";import{renderToStaticMarkup as Ze}from"react-dom/server";const Br=({transformTool:o,custom:e,editor:t})=>{const{categories:i,items:m,identifier:c,config:d,locale:u}=o,b=e.getAdvancedItemCard(),h=e.getAdvancedCategoryCard(),S=(s,v)=>{const{theme:T,measurements:Y}=t.configStore,X=u.items[s.identifier]||s.name;let oo=s.thumbnailURI||"",W="80%";if(!o.checkIfTransformThumbnailExits(s.thumbnailURI)){const eo=s.identifier.includes("imgly_transform_common"),I=Bo.crops[s.identifier]||Bo.crops.imgly_transform_common_custom,no=B.createElement(I,{width:Y.advancedCard.medium.width-(eo?42:0),height:Y.advancedCard.medium.height-(eo?42:0),main:T.transform.crops.main,highlight:T.transform.crops.highlight,shadow:T.transform.crops.shadow});oo=`'data:image/svg+xml,${encodeURIComponent(Ze(no))}'`,W=V()||Fr()?"auto":"unset"}return B.createElement(b,{key:s.identifier,tool:p.TRANSFORM,type:A.MEDIUM,onClick:()=>o.changeIdentifier(s.identifier,!0),image:oo,label:X,style:{backgroundSize:W,animationDelay:`${U(v)}s`},isActive:s.identifier===c},B.createElement(E,null,X))},C=(s,v)=>{const{theme:T,measurements:Y}=t.configStore,X=o.selectedCategoryIdentifier===s.identifier,oo=u.categories[s.identifier]||s.name;let W=s.thumbnailURI||"";if(!s.items)return null;if(!o.checkIfTransformThumbnailExits(s.thumbnailURI)){const eo=Bo.categories[s.identifier]||Bo.crops.imgly_transform_common_custom,I=B.createElement(eo,{width:Y.advancedCard.large.width-42,height:Y.advancedCard.large.height-42,main:T.transform.crops.main,highlight:T.transform.crops.highlight,shadow:T.transform.crops.shadow});W=`'data:image/svg+xml,${encodeURIComponent(Ze(I))}'`}return B.createElement("div",{key:s.identifier},B.createElement(h,{type:A.LARGE,onClick:()=>o.toggleCategorySelection(s.identifier),key:s.identifier,image:W,style:{animationDelay:`${U(v)}s`},label:s.name,tool:p.TRANSFORM},B.createElement(E,{caret:!0,isActive:X},oo)),B.createElement(r.Sidebar.ExpandableContainer,{show:X},s.items.map(S)))},f=(s,v)=>{const T=u.categories[s.identifier]||s.name;return s.items?B.createElement(r.Sidebar.TextCategory,{key:s.identifier,name:T,isFirstCategory:v!==0,isLastCategory:v!==i.length-1},s.items.map(S)):null};return d.flattenCategories?B.createElement(B.Fragment,null,m.map(S)):d.categoryHeaderType===H.CARD?B.createElement(B.Fragment,null,i.map(C)):d.categoryHeaderType===H.TEXT?B.createElement(B.Fragment,null,i.map(f)):null};var Re=l("transformTool","custom","editor")(a(Br));import R from"react";const Lr=({transformTool:o,displayTitle:e})=>R.createElement(R.Fragment,null,e&&R.createElement(r.Sidebar.Heading,null,o.locale.title),R.createElement(Qe,null),R.createElement(r.Itemsbar,null,R.createElement(r.CardContainer,null,R.createElement(Re,null))));var ot=l("transformTool")(a(Lr));import x from"react";let Lo=class extends x.Component{render(){const o=this.props.active.tool,e=this.props.config.config.displayToolControlBarTitle;return x.createElement(r.Sidebar.Index,null,x.createElement(n.Switch.Index,{type:o},x.createElement(n.Switch.Case,{value:p.LIBRARY},x.createElement(Me,{displayTitle:e})),x.createElement(n.Switch.Case,{value:p.FILTER},x.createElement(Ue,{displayTitle:e})),x.createElement(n.Switch.Case,{value:p.FOCUS},x.createElement(Be,{displayTitle:e})),x.createElement(n.Switch.Case,{value:p.ADJUSTMENT},x.createElement(xe,{displayTitle:e})),x.createElement(n.Switch.Case,{value:p.OVERLAY},x.createElement(Ne,{displayTitle:e})),x.createElement(n.Switch.Case,{value:p.STICKER},x.createElement(Ge,{displayTitle:e})),x.createElement(n.Switch.Case,{value:p.TEXT},x.createElement(Ve,{displayTitle:e})),x.createElement(n.Switch.Case,{value:p.TEXT_DESIGN},x.createElement(qe,{displayTitle:e})),x.createElement(n.Switch.Case,{value:p.FRAME},x.createElement(Oe,{displayTitle:e})),x.createElement(n.Switch.Case,{value:p.BRUSH},x.createElement(Ae,{displayTitle:e})),x.createElement(n.Switch.Case,{value:p.TRANSFORM},x.createElement(ot,{displayTitle:e}))))}};Lo=mo([l("active","config"),a],Lo);var Go=Lo;import F from"react";import Pr from"styled-components";const nt=Pr.div`
  position: absolute;
  height: 100%;
  width: ${o=>o.theme.measurements.advancedUIToolbar.width+o.theme.measurements.advancedUIToolControlBar.width}px;
  top: 0;
  background: ${o=>o.theme.webcam.backdrop};
  z-index: ${o=>o.theme.measurements.zIndex.disable};
`;class Or extends F.Component{constructor(){super(...arguments);this.state={hasError:!1}}static getDerivedStateFromError(o){return console.error(o),{hasError:!0}}render(){const{config:o,active:e}=this.props;return o.isOrderDefault?F.createElement(n.Container,{"data-test":k.EditorContainer},e.isWebcam?F.createElement(nt,{style:{left:0}}):null,F.createElement(it,null),F.createElement(_o,null),F.createElement(Go,null),F.createElement(rt,null,F.createElement(tt,null),F.createElement(et,null))):F.createElement(n.Container,{"data-test":k.EditorContainer},e.isWebcam?F.createElement(nt,{style:{right:0}}):null,F.createElement(it,null),F.createElement(rt,null,F.createElement(tt,null),F.createElement(et,null)),F.createElement(Go,null),F.createElement(_o,null))}}var st=l("config","active")(a(Or));import bo from"react";import Dr from"styled-components";class Hr extends bo.Component{constructor(o){super(o);this.ref=null;this.updatePosition=()=>{const{isReverse:o}=this.props,e={x:0,y:0};if(this.ref.current){const{top:t,height:i,left:m,right:c}=this.ref.current.getBoundingClientRect();e.y=t+i/4,e.x=o?window.innerWidth-c:m}this.setState({tooltipPosition:e})};this.mouseOver=o=>{this.updatePosition(),this.setState({hoverTool:o})};this.mouseOut=()=>{this.setState({hoverTool:null})};this.state={hoverTool:null,tooltipPosition:{x:0,y:0}},this.ref=bo.createRef()}componentDidMount(){this.updatePosition()}componentDidUpdate(o){const{isReverse:e}=this.props;e!==o.isReverse&&this.updatePosition()}render(){const{tool:o,isActive:e,isReverse:t,icon:i,label:m,onClick:c,className:d,children:u}=this.props,{hoverTool:b,tooltipPosition:h}=this.state;return bo.createElement($r,{ref:this.ref,onMouseOver:()=>this.mouseOver(o),onMouseOut:()=>this.mouseOut(),className:d},bo.createElement(r.Toolbar.Item,{ariaLabel:m,isActive:e,onClick:()=>c(o)},i,u),bo.createElement(r.Toolbar.Tooltip,{position:h,reverse:t,show:b===o},m))}}var Po=Hr;const $r=Dr.div`
  position: relative;
`;import Oo from"react";import{ThemeProvider as jr}from"styled-components";class go extends Oo.Component{componentDidMount(){this.editor=this.props.editor,this.storeProps=this.props.storeProps;const o=new zr(this.editor.configStore.config.custom.components,{advancedUICategoryCard:r.Card,advancedUIItemCard:r.Card,advancedUIToolbarItem:Po}),e={getAdvancedCategoryCard:o.getAdvancedCategoryCard,getAdvancedItemCard:o.getAdvancedItemCard,getAdvancedToolbarItem:o.getAdvancedToolbarItem,getDialog:o.getDialog,getButton:o.getButton,getColorItem:o.getColorItem,getCheckbox:o.getCheckbox};this.storeProps.custom=e,this.forceUpdate()}render(){return this.storeProps?Oo.createElement(Mr,L({},this.storeProps),Oo.createElement(jr,{theme:L(L({},this.editor.configStore.theme),{measurements:this.editor.configStore.measurements})},Oo.createElement(st,null))):null}}document.onkeydown=o=>{o.keyCode===13&&document.activeElement&&document.activeElement.click()};import Yo from"react";import at from"react-dom";class Nr extends Xo{constructor(o,e){super();this.dispose=()=>{this.container&&(at.unmountComponentAtNode(this.container),this.removeAllListeners(g.EXPORT),this.removeAllListeners(g.HISTORY_CHANGE),this.removeAllListeners(g.EDITOR_READY),this.removeAllListeners(g.ERROR_IMAGE_LOADING))};this.serialize=o=>this.editor.serialize(o);this.deserialize=o=>this.editor.deserialize(o);this.export=o=>this.editor.export(o);this.close=()=>this.editor.close();this.setImage=o=>this.editor.setImage(o);this.reset=()=>{this.editor.resetToolStates(),this.editor.resize()};this.container=e,this.editor=new Vo(L({},o)),this.editor.configStore.events.on(g.EXPORT,t=>{this.emit(g.EXPORT,t)}),this.editor.configStore.events.on(g.CLOSE,()=>{this.dispose(),this.emit(g.CLOSE)}),this.editor.configStore.events.on(g.HISTORY_CHANGE,()=>{this.emit(g.HISTORY_CHANGE)})}hasChanges(){return this.editor.hasChanges()}}class Wr{constructor(){this.container=null}init(o){return new Promise((e,t)=>{this.container=typeof o.container=="string"?document.querySelector(o.container):o.container,this.container?(this.editorApi=new Nr(o,this.container),at.render(Yo.createElement(_r,{editor:this.editorApi.editor}),this.container),this.editorApi.editor.configStore.events.on(g.EDITOR_READY,()=>{setTimeout(()=>{this.editorApi.emit(g.EDITOR_READY)},0),e(this.editorApi)}),this.editorApi.editor.configStore.events.on(g.ERROR_IMAGE_LOADING,i=>{setTimeout(()=>{this.editorApi.emit(g.ERROR_IMAGE_LOADING,i)},0),e(this.editorApi)})):t(new Error("Provide a container"))})}}class _r extends Yo.Component{constructor(){super(...arguments);this.UIComponent=null}componentDidMount(){this.editor=this.props.editor,this.storeProps={filterTool:this.editor.filterToolStore,focusTool:this.editor.focusToolStore,adjustmentsTool:this.editor.adjustmentsToolStore,overlayTool:this.editor.overlayToolStore,frameTool:this.editor.frameToolStore,brushTool:this.editor.brushToolStore,transformTool:this.editor.transformToolStore,scale:this.editor.scale,sprite:this.editor.spriteStore,stickerTool:this.editor.spriteStore.stickerToolStore,textTool:this.editor.spriteStore.textToolStore,textDesignTool:this.editor.spriteStore.textDesignToolStore,library:this.editor.libraryStore,modal:this.editor.modalStore,snapping:this.editor.snappingStore,config:this.editor.configStore,active:this.editor.activeStore,canvas:this.editor.canvasStore,history:this.editor.historyStore,editor:this.editor},this.editor.configStore.config.layout==="basic"?import("./ui/basic/index.js").then(({BasicUI:o})=>{this.UIComponent=o,this.forceUpdate()}):(this.UIComponent=go,this.forceUpdate())}componentWillUnmount(){this.editor.engine.dispose(),this.editor.configStore.events.removeAllListeners(g.EXPORT),this.editor.configStore.events.removeAllListeners(g.CLOSE),this.editor.configStore.events.removeAllListeners(g.HISTORY_CHANGE),this.editor.configStore.events.removeAllListeners(g.EDITOR_READY),this.editor.configStore.events.removeAllListeners(g.ERROR_IMAGE_LOADING)}render(){if(this.editor){const o=this.UIComponent;return this.storeProps&&o?Yo.createElement(o,{editor:this.editor,storeProps:this.storeProps}):null}return null}}const Gr={init:o=>{const e=new Wr;return e.init(o)}};import lt from"react";class Yr extends lt.Component{constructor(o){super(o);this.ui=new Xo;this.serialize=o=>this.editor.serialize(o);this.deserialize=o=>this.editor.deserialize(o);this.export=o=>this.editor.export(o);this.close=()=>this.editor.close();this.setImage=o=>this.editor.setImage(o);this.reset=()=>{this.editor.resetToolStates(),this.editor.resize()};this.editor=new Vo(L({},o)),this.editor.configStore.events.on(g.EXPORT,e=>{this.ui.emit(g.EXPORT,e)}),this.editor.configStore.events.on(g.CLOSE,()=>{this.componentWillUnmount(),this.ui.emit(g.CLOSE)}),this.editor.configStore.events.on(g.HISTORY_CHANGE,()=>{this.ui.emit(g.HISTORY_CHANGE)}),this.editor.configStore.events.on(g.EDITOR_READY,()=>{this.ui.emit(g.EDITOR_READY)}),this.editor.configStore.events.on(g.ERROR_IMAGE_LOADING,e=>{this.ui.emit(g.ERROR_IMAGE_LOADING,e)}),this.storeProps={filterTool:this.editor.filterToolStore,focusTool:this.editor.focusToolStore,adjustmentsTool:this.editor.adjustmentsToolStore,overlayTool:this.editor.overlayToolStore,frameTool:this.editor.frameToolStore,brushTool:this.editor.brushToolStore,transformTool:this.editor.transformToolStore,scale:this.editor.scale,sprite:this.editor.spriteStore,stickerTool:this.editor.spriteStore.stickerToolStore,textTool:this.editor.spriteStore.textToolStore,textDesignTool:this.editor.spriteStore.textDesignToolStore,library:this.editor.libraryStore,modal:this.editor.modalStore,snapping:this.editor.snappingStore,config:this.editor.configStore,active:this.editor.activeStore,canvas:this.editor.canvasStore,history:this.editor.historyStore,editor:this.editor},this.editor.configStore.config.layout==="basic"?import("./ui/basic/index.js").then(({BasicUI:e})=>{this.UIComponent=e,this.forceUpdate()}):(this.UIComponent=go,this.forceUpdate())}componentWillUnmount(){this.ui.removeAllListeners(g.EXPORT),this.ui.removeAllListeners(g.HISTORY_CHANGE),this.ui.removeAllListeners(g.EDITOR_READY),this.ui.removeAllListeners(g.ERROR_IMAGE_LOADING)}hasChanges(){return this.editor.hasChanges()}render(){if(this.editor){const o=this.UIComponent;return this.storeProps&&o?lt.createElement(o,{editor:this.editor,storeProps:this.storeProps}):null}return null}}const mt=Xr(Vr());mt.configure({isolateGlobalState:!0});const{Container:sp,Input:Kr,ColorItem:ap,ColorItemBase:lp,ColorItemBackground:mp,ColorItemTiledBackground:dp,ColorItemActiveOverlay:pp,Dialog:cp,DialogBase:up,DialogContainer:hp,DialogBackdrop:fp,DialogHeader:Cp,DialogBody:bp,DialogFooter:gp,DialogSpinner:vp}=n,{Label:Sp,Checkbox:Ip,CheckboxBase:yp,CheckboxInput:xp,CheckboxCheckMark:Tp}=Kr,Ap=ao,kp=ao;export{ei as a,ri as b,qr as c,Qr as d,si as e,Rr as f,Yr as g,sp as h,ap as i,lp as j,mp as k,dp as l,pp as m,cp as n,up as o,hp as p,fp as q,Cp as r,bp as s,gp as t,vp as u,Sp as v,Ip as w,Po as x,yp as y,xp as z,Tp as A,Ap as B,kp as C,Gr as D};
