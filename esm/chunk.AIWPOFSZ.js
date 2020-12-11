import{a as U,b as hr,c as Ro,g as M,h as nr,k as Mr,l as Qo,m as E,n as Ur,o as et,q as Zo,r as jt,s as vr,u as Be}from"./chunk.MDEDY36T.js";import{$ as $r,C as $e,E as mt,N as le,P as gr,R as J,S as Qt,T,U as Ye,V as cr,X as i,Z as a,aa as m,ba as Yr,q as Bo,u as mo}from"./chunk.UODY7UPN.js";import{B as N,N as B,U as Wr,b as H,c as p,g as We,h as c,u as He,w as k}from"./chunk.IQZ6RVTD.js";const nt=Wr(Yr());import De from"react";import{ThemeProvider as Hr}from"styled-components";function Vr(e){return!Object.prototype.hasOwnProperty.call(e,"name")}function Jr(e){return!Object.prototype.hasOwnProperty.call(e,"name")}class Qr{}class Rr{constructor(e){this.name=e.name,this.coverImageUrl=e.coverImageUrl}loadCoverImage(e="anonymous"){return new Promise((o,t)=>{const r=new Image;r.addEventListener("load",()=>{o(r)}),r.addEventListener("error",()=>{t(new Error(`Failed to load image at ${this.coverImage}`))}),r.crossOrigin=e,r.src=this.coverImageUrl,this.coverImage=r})}}class on{constructor(e){this.title=e.title,this.category=e.category||e.title,this.thumbUrl=e.thumbUrl,this.rawUrl=e.rawUrl,this.authorName=e.authorName,this.authorAvatar=e.authorAvatar}loadThumbImage(e="anonymous"){return new Promise((o,t)=>{const r=new Image;r.addEventListener("load",()=>{o(r)}),r.addEventListener("error",()=>{t(new Error(`Failed to load image at ${this.thumbUrl}`))}),r.crossOrigin=e,r.src=this.thumbUrl,this.thumbImage=r})}getThumbImage(){return this.thumbUrl}}class Ke{getData(e){return new Promise((o,t)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="json",r.onload=()=>{const{status:l}=r;l===200?o(r.response):t(new Error(`HTTP Status ${l}`))},r.send()})}}class nn{loadJSON(e){const o=new Ke;return o.getData(e)}getCategories(){return Promise.resolve([])}searchImages(e){return Promise.resolve([])}}import ct from"react";import it from"react";import st from"styled-components";const at=st(le)`
  width: ${e=>e.theme.measurements.advancedCard.large.width}px;
  height: ${e=>e.theme.measurements.advancedCard.large.height}px;
  margin-bottom: ${e=>e.theme.measurements.advancedSpacer}px;
  color: ${e=>e.theme.card.foreground};
`,lt=t=>{var{isActive:e}=t,o=mt(t,["isActive"]);return it.createElement(at,B({},o))};var Xe=lt;import dt from"styled-components";const Ve=dt(le)`
  width: ${e=>e.theme.measurements.advancedCard.medium.width}px;
  height: ${e=>e.theme.measurements.advancedCard.medium.height}px;
  margin-bottom: ${e=>e.theme.measurements.advancedSpacer}px;
  color: ${e=>e.theme.card.foreground};
  &:nth-child(2n + 1) {
    margin-right: ${e=>e.theme.measurements.advancedSpacer}px;
  }
`;import pt from"styled-components";const Je=pt(le)`
  width: ${e=>e.theme.measurements.advancedCard.small.width}px;
  height: ${e=>e.theme.measurements.advancedCard.small.height}px;
  margin-bottom: ${e=>e.theme.measurements.advancedSpacer}px;
  color: ${e=>e.theme.card.foreground};
  &:nth-child(3n + 1),
  &:nth-child(3n + 2) {
    margin-right: ${e=>e.theme.measurements.advancedSpacer}px;
  }
`,de=e=>{const o=e.type===k.LARGE,t=e.type===k.SMALL;let r=Ve;return o?r=Xe:t&&(r=Je),ct.createElement(r,B({},e))};import ut from"styled-components";const ve=ut.div.attrs(e=>({"data-test":e["data-test"]||T.CardContainer}))`
  display: flex;
  flex-wrap: wrap;
  /* width - padding on both sides */
  width: ${e=>e.theme.measurements.advancedUIToolControlBar.width-48}px;
`;import ft from"react";import ht,{css as qe}from"styled-components";const Ct=ht.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  position: relative;
  width: ${e=>e.theme.measurements.advancedUIToolControlBar.width}px;
  /* for Firefox */
  min-height: 0;
  margin-bottom: ${e=>e.theme.measurements.advancedUIToolControlBar.marginBottom}px;

  z-index: ${e=>e.theme.measurements.zIndex.toolControlBar};

  background: ${e=>e.theme.toolControlBar.background};
  transition: width 0.4s ease-in;
  ${e=>e.reverse?qe`
          border-left: 1px solid ${e.theme.toolControlBar.borderColor};
        `:qe`
          border-right: 1px solid ${e.theme.toolControlBar.borderColor};
        `}
`,Qe=({reverse:e=!1,children:o})=>ft.createElement(Ct,{"data-test":T.ToolControlBar,reverse:e},o);import bt,{css as Pe}from"styled-components";const Ze=bt.div.attrs(()=>({"data-test":T.CategoryItemsContainer}))`
  transition: max-height 0.8s ease-out, transform 0.8s ease-out;
  background: ${e=>e.theme.toolControlBar.background};
  visibility: hidden;
  opacity: 0;
  transform-origin: 0 0;
  display: none;
  flex-wrap: wrap;

  ${({show:e})=>e&&Pe`
      opacity: 1;
      visibility: visible;
      ${N()?Pe`
            display: block;
          `:Pe`
            display: flex;
          `}
    `}
`;import Se from"react";import Re,{css as gt}from"styled-components";const vt=Re.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  ${e=>e.shouldAnimateHeight&&gt`
      height: ${e.height}px;
    `}
  opacity: ${({opacity:e})=>e};
  visibility: ${({visibility:e})=>e};
  overflow: ${({shouldAnimateOverflow:e,overflow:o})=>e?o:void 0};
  transition: ${({shouldAnimateHeight:e})=>e?"opacity 0.5s ease-in, height 0.4s ease-out":"opacity 0.5s ease-in"};
  background: ${e=>e.theme.toolControlBar.background};
  color: ${e=>e.theme.toolControlBar.inputLabelForeground};
`,St=Re.div`
  position: relative;
  padding: ${e=>e.theme.measurements.advancedUIToolControlBar.padding};
`;class eo extends Se.Component{constructor(e){super(e);this.contentRef=null;this.enableOverflow=()=>{const{show:e}=this.props;e&&this.contentRef.current&&this.setState({overflow:!0})};this.contentRef=Se.createRef(),this.state={height:0,mounted:!1,overflow:!1}}componentDidMount(){const{overflowAfterExpand:e}=this.props;this.contentRef.current&&(e&&this.contentRef.current.addEventListener("transitionend",this.enableOverflow),this.setState({height:this.contentRef.current.scrollHeight,mounted:!0}))}componentWillUnmount(){this.contentRef.current&&this.contentRef.current.removeEventListener("transitionend",this.enableOverflow)}render(){const{show:e,shouldAnimateOverflow:o,shouldAnimateHeight:t,children:r}=this.props,{height:l,mounted:u,overflow:d}=this.state,f=u&&(e&&o||!o),g=f?l:0,C=f?1:0,S=f?"visible":"hidden";return Se.createElement(vt,{"data-test":T.ToolControlBarControls,ref:this.contentRef,height:g,opacity:C,visibility:S,overflow:d?"visible":"hidden",shouldAnimateHeight:t,shouldAnimateOverflow:o},Se.createElement(St,null,r))}}eo.defaultProps={show:!0,shouldAnimateOverflow:!0,shouldAnimateHeight:!0};var oo=eo;import It,{css as yt}from"styled-components";const Me=It($e)`
  position: relative;
  padding: ${e=>e.theme.measurements.advancedUIToolControlBar.padding};
  width: ${e=>e.theme.measurements.advancedUIToolControlBar.width}px;

  box-sizing: border-box;

  /* for Firefox */
  min-height: 0;

  transition: height 0.4s cubic-bezier(0.17, 0.04, 0.03, 0.94);
  background: ${e=>e.theme.toolControlBar.background};
  color: ${e=>e.theme.toolControlBar.inputLabelForeground};

  /* compensate the padding in IE and Edge */
  ${()=>N()||He()?yt`
        > ul {
          padding-right: 34px;
          margin-right: -34px;
        }
      `:""}
`;Me.defaultProps={direction:"vertical"};import Tt,{css as xt}from"styled-components";const At=Tt.div`
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    ${e=>e.full?xt`
            left: -${3*e.theme.measurements.advancedSpacer/2}px;
            width: calc(
              100% + ${3*e.theme.measurements.advancedSpacer}px
            );
          `:`
      left: ${3*e.theme.measurements.advancedSpacer/2}px;
      width: calc(100% - ${3*e.theme.measurements.advancedSpacer}px);
    `}
    border-bottom: 2px solid ${e=>e.theme.toolControlBar.separatorColor};
  }
`;var Ie=At;import kt from"styled-components";const Et=kt.h2`
  color: ${e=>e.theme.toolControlBar.titleForeground};
  font-size: ${e=>e.theme.measurements.fontSystem.headline2.size}px;
  letter-spacing: ${e=>e.theme.measurements.fontSystem.headline2.letterSpacing}px;
  text-transform: ${e=>e.theme.measurements.fontSystem.headline2.case};
  font-weight: 500;
  min-height: ${e=>2*e.theme.measurements.advancedSpacer}px;
`;var ye=Et;import Y from"react";import Ut from"styled-components";const Ft=Ut.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  flex: 1 0 auto;
`,to=({name:e,isFirstCategory:o,isLastCategory:t,children:r})=>Y.createElement(Ft,null,!o&&Y.createElement(i.Spacer,{count:2}),Y.createElement(ye,{"data-test":e},e),Y.createElement(ve,{"data-test":T.CategoryItemsContainer},r),!t&&Y.createElement(Y.Fragment,null,Y.createElement(i.Spacer,{count:2}),Y.createElement(Ie,{full:!0})));import Lt from"styled-components";const wt=Lt.h1`
  /* Center text horizontally and vertically */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  padding: 0 4px;
  margin: 0;
  min-height: ${e=>e.theme.measurements.mainCanvasActionBar.height-2}px;
  font-size: ${e=>e.theme.measurements.fontSystem.headline1.size}px;
  letter-spacing: ${e=>e.theme.measurements.fontSystem.headline1.letterSpacing}px;
  text-transform: ${e=>e.theme.measurements.fontSystem.headline1.case};
  background: ${e=>e.theme.toolControlBar.background};
  color: ${e=>e.theme.toolControlBar.titleForeground};
  border-bottom: 1px solid ${e=>e.theme.toolControlBar.separatorColor};
  font-weight: 500;
  text-align: center;
`;var ro=wt;import no from"react";import Bt,{css as _e}from"styled-components";const Ot=Bt.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: ${e=>e.theme.measurements.advancedUIToolbar.width}px;

  z-index: ${e=>e.theme.measurements.zIndex.toolbar};

  background-color: ${e=>e.theme.toolbar.background};
  color: ${e=>e.theme.toolbar.foreground};
  ${e=>{const o=e.theme.toolbar.border?e.theme.toolbar.border:_e`
          1px solid ${e.theme.toolbar.borderColor};
        `;return e.reverse?_e`
          border-left: ${o};
        `:_e`
          border-right: ${o};
        `}}
  margin-bottom: ${e=>e.theme.measurements.advancedUIToolbar.marginBottom}px;
`,io=({reverse:e,children:o})=>no.createElement(Ot,{reverse:e,"data-test":T.Toolbar},no.createElement($e,{direction:"vertical"},o));import so from"react";import ao,{css as je}from"styled-components";const Dt=ao(mo)`
  width: inherit;
  height: inherit;
  padding: 0;
  margin: 0;
  ${N()?je`
        background-color: transparent;
      `:je`
        background-color: inherit;
      `}

  ${e=>e.isActive&&je`
      background-color: ${e.theme.toolbar.activeBackground};
      color: ${e.theme.toolbar.activeForeground};
    `}
`,Pt=ao.li.attrs({"aria-haspopup":!0,"aria-hidden":!0,role:"menuitem"})`
  height: ${e=>e.theme.measurements.advancedUIToolbar.itemHeight}px;
  cursor: pointer;
  position: relative;
`,lo=e=>so.createElement(Pt,null,so.createElement(Dt,B(B({},e),{"data-test":T.ToolbarItem})));import $t from"styled-components";const Ht=$t.li.attrs({role:"none"})`
  height: ${e=>e.theme.measurements.advancedUIToolbar.seperatorHeight}px;
  cursor: pointer;
  position: relative;
`;var po=Ht;import co from"react";import uo,{css as pe}from"styled-components";const Mt=uo.div`
  ${N()?pe`
        position: -ms-device-fixed;
      `:pe`
        position: fixed;
      `}
  position: -ms-device-fixed;
  top: ${e=>e.position.y-5}px;
  left: ${e=>e.position.x+e.theme.measurements.advancedUIToolbar.width-10}px;
  z-index: ${e=>e.theme.measurements.zIndex.toolbar};
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
    border-right: 8px solid ${e=>e.theme.tooltip.background};
    border-bottom: 6px solid transparent;
    border-top: 6px solid transparent;
  }

  &:after {
    content: '${e=>e.label}';
    position: absolute;
    transition: margin-left 0.15s ease-in-out, opacity 0.15s ease-in-out;
    color: ${e=>e.theme.tooltip.foreground};
    background: ${e=>e.theme.tooltip.background};
    padding: 8px 12px;
    text-align: center;
    vertical-align: super;
    font-size: ${e=>e.theme.measurements.fontSystem.label.size}px;
    letter-spacing: ${e=>e.theme.measurements.fontSystem.label.letterSpacing}px;
    text-transform: ${e=>e.theme.measurements.fontSystem.label.case};
    border-radius: ${e=>e.theme.shape.radiusSmall}px;
    white-space: nowrap;
  }

  ${e=>e.reverse&&pe`
      left: unset;
      right: ${e.position.x+e.theme.measurements.advancedUIToolbar.width-10}px;
      direction: rtl;

      &:before {
        border-left: 8px solid ${e.theme.tooltip.background};
        border-right: none;
        right: -8px;
        left: unset;
        top: 10px;
      }
    `}

  ${e=>e.show&&!e.reverse&&pe`
      opacity: 1;
      visibility: visible;
      left: ${e.position.x+e.theme.measurements.advancedUIToolbar.width+16}px;
    `}

  ${e=>e.show&&e.reverse&&pe`
      opacity: 1;
      visibility: visible;
      right: ${e.position.x+e.theme.measurements.advancedUIToolbar.width+16}px;
    `}
`,_t=uo.span`
  display: none;
`,fo=({show:e,reverse:o,position:t,children:r})=>{const l=typeof r=="string"?r:"";return co.createElement(Mt,{"data-test":T.Tooltip,show:e,reverse:o,position:t,label:l},co.createElement(_t,null,l))};fo.defaultProps={show:!1};var ho=fo;const n={Card:de,CardContainer:ve,Toolbar:{Index:io,Item:lo,Separator:po,Tooltip:ho},Itemsbar:Me,BarSeparator:"",ItemsSeparator:Ie,Controlsbar:oo,Sidebar:{Index:Qe,Heading:ro,SubHeading:ye,TextCategory:to,ExpandableContainer:Ze}};import L from"react";import Br from"styled-components";import Ne from"react";import Te from"react";let xe=class extends Te.Component{constructor(){super(...arguments);this.renderIcon=e=>{const o=jt[e];return Te.createElement(o,null)||null};this.update=e=>{this.props.active.selectTool(e)}}getToolTitle(e){return this.props.config.locale[e].title}render(){const e=this.props.active.tool,{tool:o,custom:t}=this.props;if(o){const r=t.getAdvancedToolbarItem();return Te.createElement(r,{key:o,isActive:o===e,isReverse:this.props.isReverse,icon:this.renderIcon(o),onClick:()=>this.update(o),tool:o,label:this.getToolTitle(o)})}return Te.createElement(n.Toolbar.Separator,null)}};xe=J([m("active","config","custom"),a],xe);var Co=xe;let ne=class extends Ne.Component{render(){const{config:e}=this.props,o=e.config.order==="reverse";return Ne.createElement(n.Toolbar.Index,{reverse:o},e.tools.map((t,r)=>Ne.createElement(Co,{key:t||r,tool:t,isReverse:o})))}};ne=J([m("config"),a],ne);import x from"react";import se from"react";import ze from"react";const Nt=({adjustmentsTool:e,custom:o})=>{const t=e.locale.controls,r=o.getButton("toolControlBarSecondaryButton"),l=()=>{e.reset()};return ze.createElement(n.Controlsbar,{show:e.isDirty},ze.createElement(r,{tool:p.ADJUSTMENT,label:t.buttonReset,ariaLabel:t.buttonReset,onClick:l,fullWidth:!0}),ze.createElement(n.ItemsSeparator,null))};var bo=m("adjustmentsTool","custom")(a(Nt));import ie from"react";import zt from"styled-components";const Gt=zt(i.Input.Slider)`
  padding-bottom: 16px;
`,Wt=({adjustmentsTool:e})=>{const{categories:o,items:t,config:r,locale:l}=e,u=()=>{e.toolSnapshot()},d=(C,S)=>{e.editAdjustments({type:C,value:S})},f=C=>{const S=e.locale.categories[C.identifier]||C.name;return ie.createElement(Gt,{identifier:C.identifier,adjust:!0,key:C.identifier,label:S,value:e[C.identifier],onChange:h=>d(C.identifier,h),onMouseUp:u,onTouchEnd:u,snap:0})},g=(C,S)=>{const h=l.categories[C.identifier]||C.name;return C.items?ie.createElement(n.Sidebar.TextCategory,{key:C.identifier,name:h,isFirstCategory:S===0,isLastCategory:S===o.length-1},C.items.map(f)):null};return r.flattenCategories?ie.createElement(ie.Fragment,null,t.map(f)):ie.createElement(ie.Fragment,null,o.map(g))};var go=m("adjustmentsTool")(a(Wt));const Yt=({adjustmentsTool:e,displayTitle:o})=>se.createElement(se.Fragment,null,o&&se.createElement(n.Sidebar.Heading,null,e.locale.title),se.createElement(bo,null),se.createElement(n.Itemsbar,null,se.createElement(go,null)));var vo=m("adjustmentsTool")(a(Yt));import Ae from"react";import O from"react";const Kt=({brushTool:e,custom:o})=>{const{colorList:t}=e,r=e.locale.controls,l=e.localeColor.colorPicker,u=o.getButton("toolControlBarSecondaryButton");return O.createElement(O.Fragment,null,O.createElement(n.Controlsbar,{show:e.isDirty},O.createElement(u,{tool:p.BRUSH,ariaLabel:r.buttonReset,onClick:e.reset,fullWidth:!0,label:r.buttonReset}),O.createElement(n.ItemsSeparator,null)),O.createElement(n.Controlsbar,{overflowAfterExpand:!0},O.createElement(i.Input.Selection,{label:r.selectColor},O.createElement(M,{activeColor:e.color,colors:t,labelsColor:l,onChange:e.changeColor})),O.createElement(i.Spacer,{count:2}),O.createElement(i.Input.Slider,{"data-test":T.BrushSize,label:r.sliderSize,value:e.relativeSize,min:1,max:100,divider:1,onChange:e.changeRelativeSize}),O.createElement(i.Spacer,{count:3}),O.createElement(i.Input.Slider,{"data-test":T.BrushHardness,label:r.sliderHardness,value:e.hardness,min:0,max:1,onChange:e.changeHardness}),O.createElement(i.Spacer,null)))},So=m("brushTool","custom")(a(Kt)),Xt=({brushTool:e,displayTitle:o})=>Ae.createElement(Ae.Fragment,null,o&&Ae.createElement(n.Sidebar.Heading,null,e.locale.title),Ae.createElement(So,null)),Io=m("brushTool")(a(Xt));import Q from"react";import q from"react";const Vt=({filterTool:e,custom:o})=>{const t=e.locale.controls,r=e.state,l=o.getButton("toolControlBarSecondaryButton"),u=()=>{e.toolSnapshot()},d=()=>{e.reset()};return q.createElement(n.Controlsbar,{show:e.isOptionSelected},q.createElement(i.Input.Form,null,q.createElement(l,{tool:p.FILTER,ariaLabel:t.buttonReset,onClick:d,fullWidth:!0,label:t.buttonReset}),q.createElement(i.Spacer,{count:2}),q.createElement(i.Input.Slider,{"aria-hidden":!e.isOptionSelected,label:t.sliderIntensity,value:r.intensity,min:0,max:1,onChange:e.changeIntensity,onMouseUp:u,onTouchEnd:u,snap:r.isDuotone?.5:null}),q.createElement(i.Spacer,null)),q.createElement(n.ItemsSeparator,null))};var yo=m("filterTool","custom")(a(Vt));import D from"react";const Jt=({filterTool:e,custom:o})=>{const{categories:t,config:r,items:l,locale:u}=e,d=o.getAdvancedItemCard(),f=o.getAdvancedCategoryCard(),g=(h,b)=>{const s=u.items[h.identifier]||h.name;return D.createElement(d,{tool:p.FILTER,type:k.MEDIUM,onClick:()=>e.selectFilter(h.identifier,h.defaultIntensity),key:h.identifier,image:h.thumbnailURI,label:s,style:{animationDelay:`${U(b)}s`},isActive:e.identifier===h.identifier},D.createElement(E,{withBackground:!0},s))},C=(h,b)=>{const{selectedCategoryIdentifier:s}=e,v=s===h.identifier,A=u.categories[h.identifier]||h.name;return h.items?D.createElement("div",{key:h.identifier},D.createElement(f,{isActive:v,tool:p.FILTER,type:k.LARGE,onClick:()=>e.toggleCategorySelection(h.identifier),image:h.thumbnailURI,label:A,style:{animationDelay:`${U(b)}s`}},D.createElement(E,{withBackground:!0,caret:!0,isActive:v},A)),D.createElement(n.Sidebar.ExpandableContainer,{show:v},h.items.map(g))):null},S=(h,b)=>{const s=u.categories[h.identifier]||h.name;return h.items?D.createElement(n.Sidebar.TextCategory,{key:h.identifier,name:s,isFirstCategory:b===0,isLastCategory:b===t.length-1},h.items.map(g)):null};return r.flattenCategories?D.createElement(D.Fragment,null,l.map(g)):r.categoryHeaderType===H.CARD?D.createElement(D.Fragment,null,t.map(C)):r.categoryHeaderType===H.TEXT?D.createElement(D.Fragment,null,t.map(S)):null};var To=m("filterTool","custom")(a(Jt));const qt=({filterTool:e,displayTitle:o})=>Q.createElement(Q.Fragment,null,o&&Q.createElement(n.Sidebar.Heading,null,e.locale.title),Q.createElement(yo,null),Q.createElement(n.Itemsbar,{key:"filterToolItemsbar"},Q.createElement(n.CardContainer,null,Q.createElement(To,null))));var xo=m("filterTool")(a(qt));import ce from"react";import Z from"react";const Zt=({focusTool:e,custom:o})=>{const t=e.locale.controls,r=o.getButton("toolControlBarSecondaryButton"),l=()=>{e.toolSnapshot(t.sliderIntensity)},u=()=>{e.reset()};return Z.createElement(n.Controlsbar,{show:e.isOptionSelected},Z.createElement(i.Input.Form,null,Z.createElement(r,{tool:p.FOCUS,ariaLabel:t.buttonReset,onClick:u,fullWidth:!0,label:t.buttonReset}),Z.createElement(i.Spacer,{count:2}),Z.createElement(i.Input.Slider,{"aria-hidden":!e.isOptionSelected,label:t.sliderIntensity,value:e.intensity,min:Qt.minIntensity,max:e.maxIntensity,divider:1,onChange:e.changeIntensity,onMouseUp:l,onTouchEnd:l})),Z.createElement(i.Spacer,{count:1}),Z.createElement(n.ItemsSeparator,null))};var Ao=m("focusTool","custom")(a(Zt));import ke from"react";const Rt=({focusTool:e,custom:o})=>{const{items:t}=e,r=(l,u)=>{const d=e.locale.items[l.identifier]||l.name,f=o.getAdvancedItemCard();return ke.createElement(f,{tool:p.FOCUS,type:k.LARGE,onClick:()=>e.selectFocus(l.identifier),key:l.identifier,image:l.thumbnailURI,label:d,style:{animationDelay:`${U(u)}s`},isActive:l.identifier===e.identifier},ke.createElement(E,{withBackground:!0},d))};return ke.createElement(n.Itemsbar,null,ke.createElement(n.CardContainer,null,t.map(r)))};var ko=m("focusTool","custom")(a(Rt));const er=({focusTool:e,displayTitle:o})=>ce.createElement(ce.Fragment,null,o&&ce.createElement(n.Sidebar.Heading,null,e.locale.title),ce.createElement(Ao,null),ce.createElement(ko,null));var Eo=m("focusTool")(a(er));import ue from"react";import _ from"react";const or=({frameTool:e,custom:o})=>{const t=e.locale.controls,r=e.localeColor.colorPicker,{tintable:l,colorList:u}=e,d=o.getButton("toolControlBarSecondaryButton"),f=()=>{e.reset()},g=C=>{e.toolSnapshot(C)};return _.createElement(n.Controlsbar,{show:e.isOptionSelected,overflowAfterExpand:!0},_.createElement(d,{tool:p.FRAME,ariaLabel:t.buttonReset,onClick:f,fullWidth:!0,label:t.buttonReset}),_.createElement(i.Spacer,{count:2}),_.createElement(i.Input.Slider,{"aria-hidden":!e.isOptionSelected,label:t.sliderOpacity,value:e.opacity,min:0,max:1,onChange:e.changeOpacity,onMouseUp:()=>{g(t.sliderOpacity)},onTouchEnd:()=>{g(t.sliderOpacity)}}),_.createElement(i.Spacer,{count:2}),_.createElement(i.Input.Slider,{"aria-hidden":!e.isOptionSelected,label:t.sliderSize,value:e.size,min:e.minSize,max:e.maxSize,divider:1,onChange:e.changeWidth,onMouseUp:()=>{g(t.sliderSize)},onTouchEnd:()=>{g(t.sliderSize)}}),_.createElement(i.Spacer,{count:2}),_.createElement(i.Input.Selection,{isDisabled:!l,label:t.selectColor},_.createElement(M,{activeColor:e.color,colors:u,labelsColor:r,isDisabled:!l,onChange:e.changeColor,onAddSnapshot:e.colorSnapshot})),_.createElement(n.ItemsSeparator,null))},Uo=m("frameTool","custom")(a(or));import Ee from"react";const tr=({frameTool:e,custom:o})=>{const{items:t}=e,r=e.state?e.state.identifier:null,l=(u,d)=>{const f=e.locale.items[u.identifier]||u.name,g=o.getAdvancedItemCard();return Ee.createElement(g,{tool:p.FRAME,type:k.MEDIUM,onClick:()=>e.selectFrame(u.identifier),key:u.identifier,image:u.thumbnailURI,label:f,style:{backgroundSize:"75%",animationDelay:`${U(d)}s`},isActive:u.identifier===r},Ee.createElement(E,{hidden:!0},f))};return Ee.createElement(n.Itemsbar,null,Ee.createElement(n.CardContainer,null,t.map(l)))};var Fo=m("frameTool","custom")(a(tr));const rr=({frameTool:e,displayTitle:o})=>ue.createElement(ue.Fragment,null,o&&ue.createElement(n.Sidebar.Heading,null,e.locale.title),ue.createElement(Uo,null),ue.createElement(Fo,null)),Lo=m("frameTool")(a(rr));import R from"react";import $ from"react";const ir=({library:e,active:o,custom:t})=>{const r=e.locale.controls.placeholderSearch,{config:l,libraryProvider:u}=e,d=t.getButton("toolControlBarPrimaryButton"),f=h=>{const{files:b}=h.target;if(b.length){const s=new FileReader;s.onload=v=>{o.newImage(v.target.result)},s.readAsDataURL(b[0])}},g=()=>{o.selectWebcam(!0)},C=()=>{const h=document.getElementById("fileUpload");h&&h.click()},S=h=>{e.fetchImages(h)};return $.createElement(n.Controlsbar,{shouldAnimateHeight:!1,shouldAnimateOverflow:!1},u&&$.createElement($.Fragment,null,$.createElement(i.Input.Search,{onChange:S,placeholder:r}),$.createElement(i.Spacer,{count:2})),l.enableUpload&&$.createElement($.Fragment,null,$.createElement(d,{tool:p.LIBRARY,ariaLabel:e.locale.controls.buttonUpload,onClick:C,fullWidth:!0,label:e.locale.controls.buttonUpload},$.createElement(i.Input.File,{onChange:f})),$.createElement(i.Spacer,null)),l.enableWebcam&&$.createElement(nr,{tool:p.LIBRARY,onClick:g,fullWidth:!0,label:e.locale.controls.buttonWebcamOpen}),$.createElement(n.ItemsSeparator,null))};var wo=m("library","active","custom")(a(ir));import F from"react";const sr=({active:e,library:o,custom:t})=>{const{query:r,config:l,selectedCategoryIdentifier:u,categories:d,items:f}=o,g=t.getAdvancedCategoryCard(),C=t.getAdvancedItemCard(),S=(s,v)=>F.createElement(C,{tool:p.LIBRARY,type:k.MEDIUM,onClick:()=>e.newImage(s.rawUrl),key:`${s.identifier}-${v}`,image:s.thumbnailURI,label:s.name,style:{animationDelay:`${U(v)}s`},authorAvatar:s.authorAvatar,authorName:s.authorName},s.authorAvatar&&F.createElement(Bo,{url:s.authorAvatar}),s.authorName&&F.createElement(E,{withBackground:!0},s.authorName)),h=(s,v)=>{const A=u===s.identifier;return s.items?F.createElement("div",{key:s.identifier},F.createElement(g,{isActive:A,tool:p.LIBRARY,type:k.LARGE,onClick:()=>o.toggleCategorySelection(s.identifier),image:s.thumbnailURI,label:s.name,style:{animationDelay:`${U(v)}s`}},F.createElement(E,{withBackground:!0,caret:!0,isActive:A},s.name)),F.createElement(n.Sidebar.ExpandableContainer,{show:A},s.items.map(S))):null},b=(s,v)=>s.items?F.createElement(n.Sidebar.TextCategory,{key:s.identifier,name:s.name,isFirstCategory:v===0,isLastCategory:v===d.length-1},s.items.map(S)):null;return r?f.length?F.createElement(F.Fragment,null,f.map(S)):F.createElement("p",{"data-test":T.NoResult},o.locale.controls.noResults):l.flattenCategories?F.createElement(F.Fragment,null,f.map(S)):l.categoryHeaderType===H.CARD?F.createElement(F.Fragment,null,d.map(h)):l.categoryHeaderType===H.TEXT?F.createElement(F.Fragment,null,d.map(b)):null},Oo=m("library","active","custom")(a(sr)),ar=({library:e,displayTitle:o})=>R.createElement(R.Fragment,null,o&&R.createElement(n.Sidebar.Heading,null,e.locale.title),R.createElement(wo,null),R.createElement(n.Itemsbar,null,R.createElement(n.CardContainer,null,R.createElement(Oo,null)))),Do=m("library")(a(ar));import fe from"react";import K from"react";const mr=({overlayTool:e,custom:o})=>{const t=e.locale.controls,{allBlendModes:r}=e,{blendMode:l}=e,u=o.getButton("toolControlBarSecondaryButton"),d=()=>{e.toolSnapshot()},f=C=>{e.changeBlendMode(C)},g=()=>{e.reset()};return K.createElement(n.Controlsbar,{show:e.isOptionSelected},K.createElement(u,{tool:p.OVERLAY,ariaLabel:t.buttonReset,onClick:g,fullWidth:!0,label:t.buttonReset}),K.createElement(i.Spacer,{count:2}),K.createElement(i.Input.CarouselSlider,{label:t.carouselBlendMode,defaultIdentifier:l,onSelect:f,list:r}),K.createElement(i.Spacer,{count:2}),K.createElement(i.Input.Slider,{"aria-hidden":!e.isOptionSelected,label:t.sliderOpacity,value:e.opacity,min:0,max:1,onChange:e.changeOpacity,onMouseUp:d,onTouchEnd:d}),K.createElement(i.Spacer,null),K.createElement(n.ItemsSeparator,null))};var Po=m("overlayTool","custom")(a(mr));import Ue from"react";const lr=({overlayTool:e,custom:o})=>{const{items:t,locale:r,identifier:l,selectOverlay:u}=e,d=(f,g)=>{const C=r.items[f.identifier]||f.name,S=o.getAdvancedItemCard();return Ue.createElement(S,{tool:p.OVERLAY,type:k.MEDIUM,onClick:()=>u(f.identifier),key:f.identifier,image:f.thumbnailURI,label:C,style:{animationDelay:`${U(g)}s`},isActive:f.identifier===l},Ue.createElement(E,{withBackground:!0},C))};return Ue.createElement(n.Itemsbar,null,Ue.createElement(n.CardContainer,null,t.map(d)))};var $o=m("overlayTool","custom")(a(lr));const dr=({overlayTool:e,displayTitle:o})=>fe.createElement(fe.Fragment,null,o&&fe.createElement(n.Sidebar.Heading,null,e.locale.title),fe.createElement(Po,null),fe.createElement($o,null));var Ho=m("overlayTool")(a(dr));import ee from"react";import j from"react";import pr from"styled-components";const ur=pr.input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:!0})`
  ${cr.VisuallyHidden}
`,fr=({stickerTool:e,custom:o})=>{const{colorList:t}=e,r=e.locale.controls,l=e.localeColor.colorPicker,u=o.getButton("toolControlBarPrimaryButton"),d=()=>{e.toolSnapshot()},f=()=>{const h=document.getElementById("fileUpload");h&&(h.value=null,h.click())},g=h=>{const{files:b}=h.target;e.addFiles(b)},C=()=>e.isCustomStickerEnabled?j.createElement(u,{tool:p.STICKER,ariaLabel:r.buttonUpload,onClick:f,fullWidth:!0,label:r.buttonUpload},j.createElement(ur,{onChange:g})):null,S=!e.isStickerSelected||!e.tintable&&e.isStickerSelected;return j.createElement(n.Controlsbar,{shouldAnimateHeight:!1,shouldAnimateOverflow:!1,overflowAfterExpand:!0},j.createElement(i.Input.Form,null,C(),j.createElement(i.Spacer,{count:2}),j.createElement(i.Input.Slider,{isDisabled:!e.isStickerSelected,label:r.sliderOpacity,value:e.opacity,min:0,max:1,onChange:e.changeOpacity,onMouseUp:d,onTouchEnd:d}),j.createElement(i.Spacer,{count:2}),j.createElement(i.Input.Selection,{isDisabled:S,label:r.selectColor},j.createElement(M,{activeSprite:e.id,activeColor:e.tintColor,colors:t,labelsColor:l,isDisabled:S,onChange:e.changeTintColor,onAddSnapshot:e.tintColorSnapshot}))),j.createElement(n.ItemsSeparator,null))},Mo=m("stickerTool","custom")(a(fr));import P from"react";const Cr=({stickerTool:e,custom:o})=>{const{categories:t,selectedCategoryIdentifier:r,config:l,items:u,locale:d}=e,f=o.getAdvancedCategoryCard(),g=o.getAdvancedItemCard(),C=(b,s)=>{const v=d.items[b.identifier]||b.name;return P.createElement(g,{key:b.identifier,tool:p.STICKER,type:k.SMALL,onClick:()=>e.add(b.identifier),image:b.thumbnailURI,label:v,style:{backgroundSize:"75%",animationDelay:`${hr(s)}s`}},P.createElement(E,{hidden:!0},v))},S=(b,s)=>{const v=r===b.identifier,A=d.categories[b.identifier]||b.name;return b.items?P.createElement("div",{key:b.identifier},P.createElement(f,{isActive:v,tool:p.STICKER,type:k.LARGE,onClick:()=>e.toggleCategorySelection(b.identifier),image:b.thumbnailURI,label:A,style:{animationDelay:`${U(s)}s`}},P.createElement(E,{withBackground:!0,caret:!0,isActive:v},A)),P.createElement(n.Sidebar.ExpandableContainer,{show:v,key:`${b.identifier}-items`},b.items.map(C))):null},h=(b,s)=>{const v=d.categories[b.identifier]||b.name;return b.items?P.createElement(n.Sidebar.TextCategory,{key:b.identifier,name:v,isFirstCategory:s===0,isLastCategory:s===t.length-1},b.items.map(C)):null};return l.flattenCategories?P.createElement(P.Fragment,null,u.map(C)):l.categoryHeaderType===H.CARD?P.createElement(P.Fragment,null,t.map(S)):l.categoryHeaderType===H.TEXT?P.createElement(P.Fragment,null,t.map(h)):null};var _o=m("stickerTool","custom")(a(Cr));const br=({stickerTool:e,displayTitle:o})=>ee.createElement(ee.Fragment,null,o&&ee.createElement(n.Sidebar.Heading,null,e.locale.title),ee.createElement(Mo,null),ee.createElement(n.Itemsbar,null,ee.createElement(n.CardContainer,null,ee.createElement(_o,null)))),jo=m("stickerTool")(a(br));import Le from"react";import y from"react";import Fe from"styled-components";const No=Fe.div`
  position: relative;
`,Sr=Fe.div`
  display: flex;
  justify-content: space-between;
`,Ir=Fe(i.Input.NumericInput)`
  max-width: 50%;
  margin-right: 16px;
`,yr=Fe(i.Input.Selection)`
  width: 50%;
`,Tr=({textTool:e,custom:o})=>{const t=e.locale.controls,r=e.localeColor.colorPicker,{fontFamilies:l,alignment:u,isTextSelected:d,fontFamily:f,fontStyle:g,fontWeight:C,colorList:S,backgroundColorList:h}=e,b=["left","center","right"],s=o.getButton("textAlignment"),v=o.getButton("toolControlBarPrimaryButton"),A=()=>{e.toolSnapshot()},X=()=>{e.add()},V=I=>{const me=I?parseFloat(I):0;e.setFontSize(Math.max(10,Math.min(690,me)))},te=()=>b.map(I=>{const me=vr[I];return y.createElement(s,{tool:I,isDisabled:!d,ariaLabel:`Align ${I}`,isActive:I===u,key:I,style:{padding:"1px 3px 2px"},icon:y.createElement(me,null),onClick:()=>e.changeAlignment(I)})}),W=l.map(I=>({label:`${I.fontFamily} ${gr.getDisplayFontStyle(I)}`,fontWeight:I.fontWeight,fontStyle:I.fontStyle,fontFamily:I.fontFamily,value:I.identifier})),re=W.filter(({value:I})=>I===e.identifier)[0];return y.createElement(n.Controlsbar,{show:!0,overflowAfterExpand:!0,shouldAnimateHeight:!1},y.createElement(i.Input.Form,null,y.createElement(v,{tool:p.TEXT,ariaLabel:t.buttonNew,onClick:X,fullWidth:!0,label:t.buttonNew}),y.createElement(i.Spacer,{count:2}),y.createElement(i.Input.Dropdown,{isDisabled:!d,style:{fontFamily:f,fontStyle:g,fontWeight:C},itemStyle:I=>({fontFamily:I.fontFamily,fontStyle:I.fontStyle,fontWeight:I.fontWeight}),label:t.dropdownFontFamily,list:W,onSelect:e.changeFont,selectedItem:re.label}),y.createElement(i.Spacer,{count:2}),y.createElement(Sr,null,y.createElement(Ir,{value:e.fontSize.toFixed(0),onSubmit:V,label:t.textFontSize,isDisabled:!d}),y.createElement(yr,{isDisabled:!d,inline:!0,label:t.selectAlignment,"data-test":T.TextAlignment},te())),y.createElement(i.Spacer,{count:2}),y.createElement(No,null,y.createElement(n.ItemsSeparator,{full:!0})),y.createElement(i.Spacer,{count:2}),y.createElement(i.Input.Selection,{isDisabled:!d,label:t.selectFontColor},y.createElement(M,{activeSprite:e.id,activeColor:e.textColor,colors:S,labelsColor:r,isDisabled:!d,onChange:e.changeColor,onAddSnapshot:e.colorSnapshot})),y.createElement(i.Spacer,{count:2}),y.createElement(i.Input.Selection,{isDisabled:!d,label:t.selectBackgroundColor},y.createElement(M,{activeSprite:e.id,activeColor:e.backgroundColor,colors:h,labelsColor:r,isDisabled:!d,onChange:e.changeBackgroundColor,onAddSnapshot:e.backgroundColorSnapshot})),y.createElement(i.Spacer,{count:2}),y.createElement(No,null,y.createElement(n.ItemsSeparator,{full:!0})),y.createElement(i.Spacer,{count:2}),y.createElement(i.Input.Slider,{isDisabled:!d,label:t.sliderLineSpacing,value:e.lineHeight,min:.5,max:3,onChange:e.changeLineHeight,onMouseUp:A,onTouchEnd:A,snap:1,divider:1,decimal:1}),y.createElement(i.Spacer,{count:1})))},zo=m("textTool","custom")(a(Tr)),xr=({textTool:e,displayTitle:o})=>Le.createElement(Le.Fragment,null,o&&Le.createElement(n.Sidebar.Heading,null,e.locale.title),Le.createElement(zo,null)),Go=m("textTool")(a(xr));import he from"react";import z from"react";const Ar=({textDesignTool:e,custom:o})=>{const t=e.locale.controls,r=e.localeColor.colorPicker,{colorList:l}=e,u=e.isTextDesignSelected,d=o.getButton("toolControlBarPrimaryButton"),f=o.getButton("toolControlBarSecondaryButton"),g=()=>{e.add()},C=()=>{e.changeSeed()};return z.createElement(n.Controlsbar,{shouldAnimateOverflow:!1,shouldAnimateHeight:!1},z.createElement(i.Input.Form,null,z.createElement(d,{tool:p.TEXT_DESIGN,ariaLabel:t.buttonNew,onClick:g,fullWidth:!0,label:t.buttonNew}),z.createElement(i.Spacer,{count:2}),z.createElement(f,{tool:p.TEXT_DESIGN,ariaLabel:t.buttonShuffle,isDisabled:!u,onClick:C,fullWidth:!0,label:t.buttonShuffle}),z.createElement(i.Spacer,{count:2}),z.createElement(i.Input.Selection,{isDisabled:!u,label:t.selectColor},z.createElement(M,{activeSprite:e.id,activeColor:e.color,colors:l,labelsColor:r,isDisabled:!u,onChange:e.changeColor,onAddSnapshot:e.colorSnapshot}))),z.createElement(n.ItemsSeparator,null))},Wo=m("textDesignTool","custom")(a(Ar));import we from"react";const kr=({textDesignTool:e,custom:o})=>{const{items:t,identifier:r}=e,l=d=>{e.changeIdentifier(d)},u=(d,f)=>{const g=o.getAdvancedItemCard();return we.createElement(g,{key:d.identifier,tool:p.TEXT_DESIGN,type:k.MEDIUM,onClick:()=>l(d.identifier),image:d.thumbnailURI,label:d.name||"",style:{animationDelay:`${U(f)}s`,backgroundSize:"60%"},isDisabled:!e.isTextDesignSelected,isActive:r===d.identifier},we.createElement(E,{hidden:!0},d.name))};return we.createElement(n.Itemsbar,null,we.createElement(n.CardContainer,null,t.map(u)))};var Yo=m("textDesignTool","custom")(a(kr));const Er=({textDesignTool:e,displayTitle:o})=>he.createElement(he.Fragment,null,o&&he.createElement(n.Sidebar.Heading,null,e.locale.title),he.createElement(Wo,null),he.createElement(Yo,null)),Ko=m("textDesignTool")(a(Er));import oe from"react";import G from"react";const Fr=({transformTool:e,custom:o})=>{const t=e.locale.controls,{forceDimensions:r,lockResolution:l,localOutputHeight:u,localOutputWidth:d}=e,f=o.getButton("toolControlBarSecondaryButton"),g=()=>{e.reset()},C=o.getCheckbox();return G.createElement(n.Controlsbar,{shouldAnimateHeight:!1},G.createElement(i.Input.Form,null,G.createElement(f,{tool:p.TRANSFORM,ariaLabel:t.buttonReset,onClick:g,fullWidth:!0,label:t.buttonReset}),G.createElement(i.Spacer,{count:2}),G.createElement(C,{isDisabled:r,value:l,label:t.checkboxKeepResolution,checkMarkPosition:"right",onClick:e.changeLockResolution,style:{paddingTop:"5px",justifyContent:"space-between"}}),G.createElement(i.Spacer,{count:2}),G.createElement(Ur,{isDisabled:r,showLabel:!0,valueHeight:u,valueWidth:d,onSubmitWidth:e.onPixelWidth,onSubmitHeight:e.onPixelHeight,label:t.inputCropSize,labelHeight:t.inputHeight,labelWidth:t.inputWidth}),G.createElement(i.Spacer,{count:1})),G.createElement(n.ItemsSeparator,null))};var Xo=m("transformTool","custom")(a(Fr));import w from"react";import{renderToStaticMarkup as Vo}from"react-dom/server";const Lr=({transformTool:e,custom:o,editor:t})=>{const{categories:r,items:l,identifier:u,config:d,locale:f}=e,g=o.getAdvancedItemCard(),C=o.getAdvancedCategoryCard(),S=(s,v)=>{const{theme:A,measurements:X}=t.configStore,V=f.items[s.identifier]||s.name;let te=s.thumbnailURI||"",W="80%";if(!e.checkIfTransformThumbnailExits(s.thumbnailURI)){const re=s.identifier.includes("imgly_transform_common"),I=Be.crops[s.identifier]||Be.crops.imgly_transform_common_custom,me=w.createElement(I,{width:X.advancedCard.medium.width-(re?42:0),height:X.advancedCard.medium.height-(re?42:0),main:A.transform.crops.main,highlight:A.transform.crops.highlight,shadow:A.transform.crops.shadow});te=`'data:image/svg+xml,${encodeURIComponent(Vo(me))}'`,W=N()||He()?"auto":"unset"}return w.createElement(g,{key:s.identifier,tool:p.TRANSFORM,type:k.MEDIUM,onClick:()=>e.changeIdentifier(s.identifier,!0),image:te,label:V,style:{backgroundSize:W,animationDelay:`${U(v)}s`},isActive:s.identifier===u},w.createElement(E,null,V))},h=(s,v)=>{const{theme:A,measurements:X}=t.configStore,V=e.selectedCategoryIdentifier===s.identifier,te=f.categories[s.identifier]||s.name;let W=s.thumbnailURI||"";if(!s.items)return null;if(!e.checkIfTransformThumbnailExits(s.thumbnailURI)){const re=Be.categories[s.identifier]||Be.crops.imgly_transform_common_custom,I=w.createElement(re,{width:X.advancedCard.large.width-42,height:X.advancedCard.large.height-42,main:A.transform.crops.main,highlight:A.transform.crops.highlight,shadow:A.transform.crops.shadow});W=`'data:image/svg+xml,${encodeURIComponent(Vo(I))}'`}return w.createElement("div",{key:s.identifier},w.createElement(C,{type:k.LARGE,onClick:()=>e.toggleCategorySelection(s.identifier),key:s.identifier,image:W,style:{animationDelay:`${U(v)}s`},label:s.name,tool:p.TRANSFORM},w.createElement(E,{caret:!0,isActive:V},te)),w.createElement(n.Sidebar.ExpandableContainer,{show:V},s.items.map(S)))},b=(s,v)=>{const A=f.categories[s.identifier]||s.name;return s.items?w.createElement(n.Sidebar.TextCategory,{key:s.identifier,name:A,isFirstCategory:v===0,isLastCategory:v===r.length-1},s.items.map(S)):null};return d.flattenCategories?w.createElement(w.Fragment,null,l.map(S)):d.categoryHeaderType===H.CARD?w.createElement(w.Fragment,null,r.map(h)):d.categoryHeaderType===H.TEXT?w.createElement(w.Fragment,null,r.map(b)):null};var Jo=m("transformTool","custom","editor")(a(Lr));const wr=({transformTool:e,displayTitle:o})=>oe.createElement(oe.Fragment,null,o&&oe.createElement(n.Sidebar.Heading,null,e.locale.title),oe.createElement(Xo,null),oe.createElement(n.Itemsbar,null,oe.createElement(n.CardContainer,null,oe.createElement(Jo,null))));var qo=m("transformTool")(a(wr));let ae=class extends x.Component{render(){const{config:e,active:o}=this.props,t=o.tool,r=e.config.displayToolControlBarTitle;return x.createElement(n.Sidebar.Index,{reverse:e.config.order==="reverse"},x.createElement(i.Switch.Index,{type:t},x.createElement(i.Switch.Case,{value:p.LIBRARY},x.createElement(Do,{displayTitle:r})),x.createElement(i.Switch.Case,{value:p.FILTER},x.createElement(xo,{displayTitle:r})),x.createElement(i.Switch.Case,{value:p.FOCUS},x.createElement(Eo,{displayTitle:r})),x.createElement(i.Switch.Case,{value:p.ADJUSTMENT},x.createElement(vo,{displayTitle:r})),x.createElement(i.Switch.Case,{value:p.OVERLAY},x.createElement(Ho,{displayTitle:r})),x.createElement(i.Switch.Case,{value:p.STICKER},x.createElement(jo,{displayTitle:r})),x.createElement(i.Switch.Case,{value:p.TEXT},x.createElement(Go,{displayTitle:r})),x.createElement(i.Switch.Case,{value:p.TEXT_DESIGN},x.createElement(Ko,{displayTitle:r})),x.createElement(i.Switch.Case,{value:p.FRAME},x.createElement(Lo,{displayTitle:r})),x.createElement(i.Switch.Case,{value:p.BRUSH},x.createElement(Io,{displayTitle:r})),x.createElement(i.Switch.Case,{value:p.TRANSFORM},x.createElement(qo,{displayTitle:r}))))}};ae=J([m("active","config"),a],ae);const ot=Br.div`
  position: absolute;
  height: 100%;
  width: ${e=>e.theme.measurements.advancedUIToolbar.width+e.theme.measurements.advancedUIToolControlBar.width}px;
  top: 0;
  background: ${e=>e.theme.webcam.backdrop};
  z-index: ${e=>e.theme.measurements.zIndex.disable};
`;let Ce=class extends L.Component{static getDerivedStateFromError(e){return console.error(e),{hasError:!0}}render(){const{config:e,active:o}=this.props;return e.isOrderDefault?L.createElement(i.Container,{"data-test":T.EditorContainer},o.isWebcam?L.createElement(ot,{style:{left:0}}):null,L.createElement(et,null),L.createElement(ne,null),L.createElement(ae,null),L.createElement(Ro,null,L.createElement(Zo,null),L.createElement(Qo,null))):L.createElement(i.Container,{"data-test":T.EditorContainer},o.isWebcam?L.createElement(ot,{style:{right:0}}):null,L.createElement(et,null),L.createElement(Ro,null,L.createElement(Zo,null),L.createElement(Qo,null)),L.createElement(ae,null),L.createElement(ne,null))}};Ce=J([m("config","active"),a],Ce);import be from"react";import Or from"styled-components";class Pr extends be.Component{constructor(e){super(e);this.ref=null;this.updatePosition=()=>{const{isReverse:e}=this.props,o={x:0,y:0};if(this.ref.current){const{top:t,height:r,left:l,right:u}=this.ref.current.getBoundingClientRect();o.y=t+r/4,o.x=e?window.innerWidth-u:l}this.setState({tooltipPosition:o})};this.mouseOver=e=>{this.updatePosition(),this.setState({hoverTool:e})};this.mouseOut=()=>{this.setState({hoverTool:null})};this.state={hoverTool:null,tooltipPosition:{x:0,y:0}},this.ref=be.createRef()}componentDidMount(){this.updatePosition()}componentDidUpdate(e){const{isReverse:o}=this.props;o!==e.isReverse&&this.updatePosition()}render(){const{tool:e,isActive:o,isReverse:t,icon:r,label:l,onClick:u,className:d,children:f}=this.props,{hoverTool:g,tooltipPosition:C}=this.state;return be.createElement(Dr,{ref:this.ref,onMouseOver:()=>this.mouseOver(e),onMouseOut:()=>this.mouseOut(),className:d},be.createElement(n.Toolbar.Item,{ariaLabel:l,isActive:o,onClick:()=>u(e)},r,f),be.createElement(n.Toolbar.Tooltip,{position:C,reverse:t,show:g===e},l))}}var Oe=Pr;const Dr=Or.div`
  position: relative;
`;class ge extends De.Component{componentDidMount(){const{editor:e,storeProps:o}=this.props;this.editor=e,this.storeProps=o;const t=new Mr(this.editor.configStore.config.custom.components,{advancedUICategoryCard:n.Card,advancedUIItemCard:n.Card,advancedUIToolbarItem:Oe}),r={getAdvancedCategoryCard:t.getAdvancedCategoryCard,getAdvancedItemCard:t.getAdvancedItemCard,getAdvancedToolbarItem:t.getAdvancedToolbarItem,getDialog:t.getDialog,getButton:t.getButton,getColorItem:t.getColorItem,getCheckbox:t.getCheckbox};this.storeProps.custom=r,this.forceUpdate()}render(){return this.storeProps?De.createElement($r,B({},this.storeProps),De.createElement(Hr,{theme:B(B({},this.editor.configStore.theme),{measurements:this.editor.configStore.measurements})},De.createElement(Ce,null))):null}}document.onkeydown=e=>{e.keyCode===13&&document.activeElement&&document.activeElement.click()};import Ge from"react";import tt from"react-dom";class _r extends We{constructor(e,o){super();this.dispose=()=>{this.container&&(tt.unmountComponentAtNode(this.container),this.removeAllListeners(c.EXPORT),this.removeAllListeners(c.HISTORY_CHANGE),this.removeAllListeners(c.EDITOR_READY),this.removeAllListeners(c.ERROR_IMAGE_LOADING),this.removeAllListeners(c.IMAGE_LOAD),this.removeAllListeners(c.TOOL_ENTER),this.removeAllListeners(c.STICKER_UPLOAD_ADD))};this.serialize=e=>this.editor.serialize(e);this.deserialize=e=>this.editor.deserialize(e);this.export=e=>this.editor.export(e);this.close=()=>this.editor.close();this.setImage=e=>this.editor.setImage(e);this.reset=()=>{this.editor.resetToolStates(),this.editor.resize()};this.container=o,this.editor=new Ye(B({},e)),this.editor.configStore.events.on(c.EXPORT,t=>{this.emit(c.EXPORT,t)}),this.editor.configStore.events.on(c.CLOSE,()=>{this.dispose(),this.emit(c.CLOSE)}),this.editor.configStore.events.on(c.HISTORY_CHANGE,()=>{this.emit(c.HISTORY_CHANGE)}),this.editor.configStore.events.on(c.STICKER_UPLOAD_ADD,t=>{this.emit(c.STICKER_UPLOAD_ADD,t)})}hasChanges(){return this.editor.hasChanges()}}class Nr{constructor(){this.container=null}init(e){return new Promise((o,t)=>{this.container=typeof e.container=="string"?document.querySelector(e.container):e.container,this.container?(this.editorApi=new _r(e,this.container),tt.render(Ge.createElement(jr,{editor:this.editorApi.editor}),this.container),this.editorApi.editor.configStore.events.on(c.EDITOR_READY,()=>{setTimeout(()=>{this.editorApi.emit(c.EDITOR_READY)},0),o(this.editorApi)}),this.editorApi.editor.configStore.events.on(c.ERROR_IMAGE_LOADING,r=>{setTimeout(()=>{this.editorApi.emit(c.ERROR_IMAGE_LOADING,r)},0),o(this.editorApi)}),this.editorApi.editor.configStore.events.on(c.IMAGE_LOAD,()=>{setTimeout(()=>{this.editorApi.emit(c.IMAGE_LOAD)},0),o(this.editorApi)}),this.editorApi.editor.configStore.events.on(c.TOOL_ENTER,r=>{setTimeout(()=>{this.editorApi.emit(c.TOOL_ENTER,r)},0),o(this.editorApi)})):t(new Error("Provide a container"))})}}class jr extends Ge.Component{constructor(){super(...arguments);this.UIComponent=null}componentDidMount(){this.editor=this.props.editor,this.storeProps={filterTool:this.editor.filterToolStore,focusTool:this.editor.focusToolStore,adjustmentsTool:this.editor.adjustmentsToolStore,overlayTool:this.editor.overlayToolStore,frameTool:this.editor.frameToolStore,brushTool:this.editor.brushToolStore,transformTool:this.editor.transformToolStore,scale:this.editor.scale,sprite:this.editor.spriteStore,stickerTool:this.editor.spriteStore.stickerToolStore,textTool:this.editor.spriteStore.textToolStore,textDesignTool:this.editor.spriteStore.textDesignToolStore,library:this.editor.libraryStore,modal:this.editor.modalStore,snapping:this.editor.snappingStore,config:this.editor.configStore,active:this.editor.activeStore,canvas:this.editor.canvasStore,history:this.editor.historyStore,editor:this.editor},this.editor.configStore.config.layout==="basic"?import("./ui/basic/index.js").then(({BasicUI:e})=>{this.UIComponent=e,this.forceUpdate()}):(this.UIComponent=ge,this.forceUpdate())}componentWillUnmount(){this.editor.engine.dispose(),this.editor.configStore.events.removeAllListeners(c.EXPORT),this.editor.configStore.events.removeAllListeners(c.CLOSE),this.editor.configStore.events.removeAllListeners(c.HISTORY_CHANGE),this.editor.configStore.events.removeAllListeners(c.EDITOR_READY),this.editor.configStore.events.removeAllListeners(c.ERROR_IMAGE_LOADING),this.editor.configStore.events.removeAllListeners(c.IMAGE_LOAD),this.editor.configStore.events.removeAllListeners(c.TOOL_ENTER),this.editor.configStore.events.removeAllListeners(c.STICKER_UPLOAD_ADD)}render(){if(this.editor){const e=this.UIComponent;return this.storeProps&&e?Ge.createElement(e,{editor:this.editor,storeProps:this.storeProps}):null}return null}}const zr={init:e=>{const o=new Nr;return o.init(e)}};import rt from"react";class Gr extends rt.Component{constructor(e){super(e);this.ui=new We;this.serialize=e=>this.editor.serialize(e);this.deserialize=e=>this.editor.deserialize(e);this.export=e=>this.editor.export(e);this.close=()=>this.editor.close();this.setImage=e=>this.editor.setImage(e);this.reset=()=>{this.editor.resetToolStates(),this.editor.resize()};this.editor=new Ye(B({},e)),this.editor.configStore.events.on(c.EXPORT,o=>{this.ui.emit(c.EXPORT,o)}),this.editor.configStore.events.on(c.CLOSE,()=>{this.componentWillUnmount(),this.ui.emit(c.CLOSE)}),this.editor.configStore.events.on(c.HISTORY_CHANGE,()=>{this.ui.emit(c.HISTORY_CHANGE)}),this.editor.configStore.events.on(c.EDITOR_READY,()=>{this.ui.emit(c.EDITOR_READY)}),this.editor.configStore.events.on(c.ERROR_IMAGE_LOADING,o=>{this.ui.emit(c.ERROR_IMAGE_LOADING,o)}),this.editor.configStore.events.on(c.IMAGE_LOAD,()=>{this.ui.emit(c.IMAGE_LOAD)}),this.editor.configStore.events.on(c.TOOL_ENTER,o=>{this.ui.emit(c.TOOL_ENTER,o)}),this.editor.configStore.events.on(c.STICKER_UPLOAD_ADD,o=>{this.ui.emit(c.STICKER_UPLOAD_ADD,o)}),this.storeProps={filterTool:this.editor.filterToolStore,focusTool:this.editor.focusToolStore,adjustmentsTool:this.editor.adjustmentsToolStore,overlayTool:this.editor.overlayToolStore,frameTool:this.editor.frameToolStore,brushTool:this.editor.brushToolStore,transformTool:this.editor.transformToolStore,scale:this.editor.scale,sprite:this.editor.spriteStore,stickerTool:this.editor.spriteStore.stickerToolStore,textTool:this.editor.spriteStore.textToolStore,textDesignTool:this.editor.spriteStore.textDesignToolStore,library:this.editor.libraryStore,modal:this.editor.modalStore,snapping:this.editor.snappingStore,config:this.editor.configStore,active:this.editor.activeStore,canvas:this.editor.canvasStore,history:this.editor.historyStore,editor:this.editor},this.editor.configStore.config.layout==="basic"?import("./ui/basic/index.js").then(({BasicUI:o})=>{this.UIComponent=o,this.forceUpdate()}):(this.UIComponent=ge,this.forceUpdate())}componentWillUnmount(){this.ui.removeAllListeners(c.EXPORT),this.ui.removeAllListeners(c.HISTORY_CHANGE),this.ui.removeAllListeners(c.EDITOR_READY),this.ui.removeAllListeners(c.ERROR_IMAGE_LOADING),this.ui.removeAllListeners(c.IMAGE_LOAD),this.ui.removeAllListeners(c.TOOL_ENTER),this.ui.removeAllListeners(c.STICKER_UPLOAD_ADD)}hasChanges(){return this.editor.hasChanges()}render(){if(this.editor){const e=this.UIComponent;return this.storeProps&&e?rt.createElement(e,{editor:this.editor,storeProps:this.storeProps}):null}return null}}nt.configure({isolateGlobalState:!0});const{Container:Ip,Input:Kr,ColorItem:yp,ColorItemBase:Tp,ColorItemBackground:xp,ColorItemTiledBackground:Ap,ColorItemActiveOverlay:kp,Dialog:Ep,DialogBase:Up,DialogContainer:Fp,DialogBackdrop:Lp,DialogHeader:wp,DialogBody:Bp,DialogFooter:Op,DialogSpinner:Dp}=i,{Label:Pp,Checkbox:$p,CheckboxBase:Hp,CheckboxInput:Mp,CheckboxCheckMark:_p}=Kr,jp=de,Np=de;export{Rr as a,on as b,Vr as c,Jr as d,nn as e,Qr as f,Gr as g,Ip as h,yp as i,Tp as j,xp as k,Ap as l,kp as m,Ep as n,Up as o,Fp as p,Lp as q,wp as r,Bp as s,Op as t,Dp as u,Pp as v,$p as w,Oe as x,Hp as y,Mp as z,_p as A,jp as B,Np as C,zr as D};
