import{a as g,b as Sr,c as Dr,d as wr,f as co,g as E,h as le,j as Hr,k as Ht,l as lr,m as Ar,n as Pr,o as ar,p as $r,q as Pe,r as er,s as f,t as no,u as dr}from"../../chunk.SJQ3NCEJ.js";import{$ as jr,J as G,L as Or,M as Le,O as go,P as ao,R as Br,T as He,V,W as re,X as l,Z as m,_ as c,n as De,u as pe,y as wo}from"../../chunk.JLGER33R.js";import{I as N,c as s,v as h}from"../../chunk.RL52RQ5R.js";import Ot from"styled-components";const Bo=Ot(ao)`
  margin: 2px;
  min-width: ${o=>o.theme.measurements.basicCard.large.width}px;
  height: ${o=>o.theme.measurements.basicCard.large.height}px;
  color: ${o=>o.theme.card.foreground};
`;import Wt from"styled-components";const vo=Wt(ao)`
  margin: 2px;
  min-width: ${o=>o.theme.measurements.basicCard.medium.width}px;
  height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  color: ${o=>o.theme.card.foreground};
`;import Mt from"react";const lo=o=>{const r=o.type===h.LARGE;let e=vo;return r&&(e=Bo),Mt.createElement(e,N({},o))};lo.defaultProps={type:h.MEDIUM};import q from"react";import po from"styled-components";const ko=po.div`
  width: 100%;
  height: inherit;
  overflow: auto;
  transition-property: width;
  transition-duration: 0.4s;
  transition-timing-function: ease-in;
  ${V.HiddenScrollbar}
  /* prevent the native vertical scrollbar */
  .photoeditorsdk-simplebar-mask {
    overflow-y: hidden;
  }
`,jt=po(ko).attrs({"data-photoeditorsdk-simplebar":"init","data-photoeditorsdk-simplebar-auto-hide":"false"})``,To=po.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`,Uo=o=>{const{children:r}=o,e=wo(o,["children"]);return q.createElement(jt,N({},e),q.createElement(To,null,r))},Lo=o=>{const{children:r}=o,e=wo(o,["children"]);return q.createElement(ko,N({},e),q.createElement(To,null,r))};import zt from"styled-components";const Eo=zt(Ht)`
  &&& {
    min-height: 32px;
    font-size: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.size}px;
    letter-spacing: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.letterSpacing}px;
    text-transform: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.case};
  }
`;import Nt from"styled-components";const Gt=Nt.div`
  display: flex;
`;var Fo=Gt;import Vt,{css as Ao}from"styled-components";const $o=Vt.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  height: auto;
  transition: max-height 0.4s ease-in-out;
  ${o=>o.show?Ao`
          max-height: 80px;
        `:Ao`
          max-height: 0px;
        `}
`;var Do=$o;$o.defaultProps={show:!0};import Yt from"styled-components";const Xt=Yt.div`
  text-align: -moz-center;
  text-align: center;
  text-align: -webkit-center;
  overflow: visible;
  margin: 0 10vw;
  height: auto;
  box-shadow: ${o=>o.theme.toolControlBar.shadow};
  @media all and (min-width: 0) and (max-width: 599px) {
    margin: 0 5vw;
  }
`;var Po=Xt;import _t from"styled-components";const Jt=_t.div`
  width: 100px;
  @media all and (min-width: 0) and (max-width: 599px) {
    width: 42px;
  }
`;var Oo=Jt;import Kt,{css as qt}from"styled-components";const Qt=Kt.div`
  position: absolute;
  left: 0%;
  transform: translateY(0%) scaleY(0);
  justify-content: center;
  padding: 0 5vw;
  width: 90%;
  height: ${o=>o.theme.measurements.basicToolControlBar.controlsBarHeight}px;
  display: flex;
  align-items: center;
  transition: transform 0.4s ease-in-out;
  z-index: ${o=>o.theme.measurements.zIndex.controlsBar};
  background: ${o=>o.theme.toolControlBar.background};
  color: ${o=>o.theme.toolControlBar.inputLabelForeground};

  ${({show:o})=>o&&qt`
      transform: translateY(-100%) scaleY(1);
      overflow: visible;
    `}
`;var Wo=Qt;import Zt from"react";import Rt from"styled-components";const oe=Rt.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,te=({label:o,className:r,children:e})=>Zt.createElement(oe,{"aria-label":o,className:r},e);var mo=te;import ee from"styled-components";const ne=ee.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${re.scale} 0.2s linear;
  animation-fill-mode: both;
  overflow: visible;
  height: 40px;
  min-width: 350px;
  @media all and (min-width: 0) and (max-width: 599px) {
    min-width: 280px;
  }
`;var Mo=ne;import jo from"react";import ie,{css as se}from"styled-components";const zo=se`
  background: ${o=>o.theme.tabTitle.activeBackground};
  color: ${o=>o.theme.tabTitle.activeForeground};
  border-bottom: 1px solid ${o=>o.theme.tabTitle.activeBorderColor};
`,ae=ie(co)`
  display: inline-flex;
  align-items: center;
  font-size: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.size}px;
  letter-spacing: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.letterSpacing}px;
  text-transform: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.case};
  color: ${o=>o.theme.tabTitle.foreground};
  border-radius: 0px;
  padding: 1px 12px 2px;
  background: ${o=>o.theme.tabTitle.background};

  ${({isActive:o})=>o&&zo}

  &:active {
    ${zo}
  }

  @media all and (min-width: 0) and (max-width: 599px) {
    max-width: 150px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;class Co extends jo.Component{constructor(){super(...arguments);this.onClick=()=>{const{label:o,onClick:r}=this.props;r(o)}}render(){const{activeTab:o,label:r}=this.props;return jo.createElement(ae,{ariaLabel:r,isActive:o===r,onClick:this.onClick},r)}}import x from"react";import Ho from"styled-components";const me=Ho(pe)`
  display: inline-flex;
  padding: 0 4px;
  height: 20px;
  font-size: 16px;
`,ce=Ho(le)`
  display: inline-flex;
  justify-content: center;
  transform: translate(-100%, -100%);
  @media all and (min-width: 0) and (max-width: 499px) {
    left: 0;
    right: 0;
    transform: translateY(-120%);
    background: transparent;
    overflow: hidden;
    button {
      &:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      &:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`;class de extends x.Component{constructor(o){super(o);this.onTabClick=o=>{this.setState({activeTab:o,toggleExtend:!1})};this.getDropUp=()=>{const{length:o}=this.props,{toggleExtend:r}=this.state,e=x.Children.toArray(this.props.children),n=x.Children.count(this.props.children),i=e.slice(o,n);return x.createElement(ce,{show:r},i.map(a=>{const p=a.props.label||"";return x.createElement(co,{onClick:()=>this.onTabClick(p),key:p,ariaLabel:"More Options"},p)}))};this.extend=()=>{this.setState(({toggleExtend:o})=>({toggleExtend:!o}))};this.getExtension=()=>x.createElement(me,{onClick:this.extend,ariaLabel:"Select Next"},"...");const r=x.Children.count(this.props.children),e=x.Children.toArray(this.props.children);this.state={activeTab:r&&(e[0].props&&e[0].props.label)||"",toggleExtend:!1}}render(){const{length:o}=this.props,{activeTab:r,toggleExtend:e}=this.state,n=x.Children.toArray(this.props.children).slice(0,o),i=x.Children.count(this.props.children)>o;return x.createElement("div",null,n.map(a=>{if(a){const p=a.props.label||"";return x.createElement(Co,{activeTab:r,key:p,label:p,onClick:this.onTabClick})}return null}),i?this.getExtension():null,e?this.getDropUp():null,x.Children.map(this.props.children,a=>!a||a.props&&a.props.label!==r?null:x.createElement(Mo,{key:a.props.label},a.props.children)))}}var Y=de;import X from"react";import Ce from"styled-components";const he=Ce.div`
  position: relative;
  overflow: visible;
  white-space: nowrap;
  display: flex;
  transition: all 0.2s linear;
`;class _ extends X.Component{constructor(o){super(o);this.updateLength=()=>{const{maxWidth:o,children:r}=this.props;let e=0;if(o)e=o;else{const a=window.innerWidth,p=a>600?300:200;e=a-p}const n=X.Children.count(r),i=e-n*_.TAB_WIDTH;if(i<0){const a=Math.round(Math.abs(i/_.TAB_WIDTH));this.setState({length:n-a})}};this.state={length:X.Children.count(this.props.children)}}componentDidMount(){window.addEventListener("resize",this.updateLength),this.updateLength()}componentWillUnmount(){window.removeEventListener("resize",this.updateLength)}render(){const{children:o}=this.props,{length:r}=this.state;return r?X.createElement(he,null,X.createElement(Y,{length:r},o)):null}}_.TAB_WIDTH=120;import be,{css as ue}from"styled-components";const fe=be.div`
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    ${o=>o.full?ue`
            left: -24px;
            width: calc(100% + 48px);
          `:`
      left: 24px;
      width: calc(100% - 48px);
    `}
    border-bottom: 1px solid ${o=>o.theme.toolControlBar.separatorColor};
  }
`;var No=fe;import ge from"styled-components";const ye=ge(l.Input.Slider).attrs(()=>({centerSlider:!0}))`
  max-width: 224px;
`;var Go=ye;import Se,{css as Ie}from"styled-components";const xe=Se.div`
  visibility: hidden;
  opacity: 0;
  display: none;

  ${({show:o})=>o&&Ie`
      opacity: 1;
      visibility: visible;
      display: flex;
    `}
`;var Vo=xe;import Be from"react";import ve,{css as Yo}from"styled-components";const Xo=ve.div`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
  width: 100%;
  text-align: center;
  z-index: ${o=>o.theme.measurements.zIndex.toolControlBar};
  ${o=>o.show?Yo`
          transition-timing-function: ease-in;
          transition-duration: 0.3s;
          transition-property: all;
          padding: 2px;
          max-height: ${o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
          background: ${o.theme.toolControlBar.background};
          color: ${o.theme.toolControlBar.inputLabelForeground};
        `:Yo`
          max-height: 0px;
        `}
`,ke=({show:o,children:r})=>Be.createElement(Xo,{show:o},r);var _o=ke;Xo.defaultProps={show:!0};import Te from"styled-components";const we=Te.div`
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
  width: 2px;
  margin: 0 10px;
  display: inline-flex;
  position: relative;
  &:after {
    content: ' ';
    right: 0px;
    position: absolute;
    top: 8px;
    height: calc(100% - 16px);
    border-right: 1px solid
      ${o=>o.theme.toolControlBar.separatorColor};
  }
`;var Jo=we;import Q,{css as Ue}from"styled-components";const Ko=Q.span`
  display: flex;
  cursor: pointer;
  z-index: ${o=>o.theme.measurements.zIndex.label};
  transition: bottom 0.3s linear;
`,qo=Ue`
  background-color: ${o=>o.theme.toolbar.activeBackground};
  color: ${o=>o.theme.toolbar.activeForeground};
`,Z=Q(Le)`
  display: block;
  height: 100%;
  width: 100%;
  color: ${o=>o.theme.toolbar.foreground};
  background-color: ${o=>o.theme.toolbar.background};
  border: unset;
  box-shadow: unset;
  font-size: ${o=>o.theme.measurements.fontSystem.label.size}px;
  letter-spacing: ${o=>o.theme.measurements.fontSystem.label.letterSpacing}px;
  text-transform: ${o=>o.theme.measurements.fontSystem.label.case};
  font-family: '${o=>o.theme.typography.fontFamily}', sans-serif;

  ${({isActive:o})=>o&&qo}

  &:active {
    ${qo}
  }

  svg {
    display: flex;
    transition: visibility 0s, opacity 0.5s linear;
    visibility: visible;
    opacity: 1;
  }
`,Qo=Q.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,R=Q.li.attrs({role:"none"})`
  height: ${o=>o.theme.measurements.basicUIToolbar.openHeight}px;
  text-align: center;
  min-width: 100px;
  /* Allow the text to grow in this limit */
  max-width: 150px;
  position: relative;
  display: inline-block;
  /* Position inline-block box at the top of the line box */
  vertical-align: top;
  /* Allow text to wrap again, overwriting the Toolbar style */
  white-space: normal;
  margin: 1px;
`;import Ee,{css as Zo}from"styled-components";const ho=Ee.ul.attrs(()=>({role:"menubar","aria-label":"Tool Navigation","data-photoeditorsdk-simplebar":"init","data-photoeditorsdk-simplebar-auto-hide":"false"}))`
  width: 100%;
  white-space: nowrap;
  overflow-y: hidden;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  transition: height 0.2s ease-out, display 0.1s fade-out;
  background-color: ${o=>o.theme.toolbar.background};
  color: ${o=>o.theme.toolbar.foreground};
  z-index: ${o=>o.theme.measurements.zIndex.toolbar};

  ${o=>o.show?Zo`
          height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
          ${Z} {
            svg {
              visibility: hidden;
              opacity: 0;
              height: 0;
            }
          }
          ${R} {
            height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
          }
        `:Zo`
          height: ${o.theme.measurements.basicUIToolbar.openHeight}px;
        `}
  ${V.HiddenScrollbar}
`;ho.defaultProps={show:!1};import oo from"react";const Fe=({children:o,label:r,isActive:e,onClick:n})=>oo.createElement(R,{"aria-haspopup":!0,"aria-expanded":e},oo.createElement(Z,{ariaLabel:r,onClick:n,isActive:e},oo.createElement(Qo,null,o,oo.createElement(Ko,null,r))));var Ro=Fe;import Ae,{css as ot}from"styled-components";const $e=Ae.li.attrs({role:"none"})`
  ${o=>o.active?ot`
          height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
        `:ot`
          height: ${o.theme.measurements.basicUIToolbar.openHeight}px;
        `}
  width: 2px;
  display: inline-block;
  position: relative;
  &:after {
    content: ' ';
    right: 0px;
    position: absolute;
    top: 8px;
    height: calc(100% - 16px);
    border-right: 1px solid
      ${o=>o.theme.toolControlBar.separatorColor};
  }
`;var tt=$e;const t={CardContainer:Uo,DynamicCardContainer:Lo,ExpandableContainer:Vo,CategoryContainer:Fo,Card:lo,CardAvatar:De,CardLabel:Eo,Toolbar:{Index:ho,Item:Ro,Separator:tt},BarSeparator:No,ItemsSeparator:Jo,Itemsbar:_o,Controlsbar:Do,ControlsbarContainer:Wo,ResponsiveTabWrapper:_,Slider:Go,TabWrapper:Y,Tab:mo,Other:{ControlsWrapper:Po,EmptyDiv:Oo}};import to from"react";const Oe=({config:o,active:r})=>{const{tools:e}=o,n=r.tool,i=C=>{const k=Pe[C];return to.createElement(k,null)||null},a=C=>o.locale[C].title,p=C=>{r.selectTool(C,!0)},d=(C,k)=>C&&to.createElement(t.Toolbar.Item,{onClick:()=>p(C),key:C,label:a(C),isActive:n===C},i(C))||to.createElement(t.Toolbar.Separator,{key:C+k,active:!!n});return to.createElement(t.Toolbar.Index,{role:"menubar",show:!!n},e.map(d))};var et=m("config","active")(c(Oe));import $ from"react";const We=({adjustmentsTool:o,custom:r})=>{const e=o.selectedAdjustmentType.toLowerCase(),n=r.getButton("toolControlBarSecondaryButton"),i=()=>{o.toolSnapshot()};return $.createElement(t.ControlsbarContainer,{show:Boolean(e)},$.createElement(n,{tool:s.ADJUSTMENT,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:$.createElement(f.reset,null),label:o.locale.controls.buttonReset}),$.createElement(t.Other.ControlsWrapper,null,$.createElement(l.Spacer,{count:2}),$.createElement(t.Slider,{"aria-hidden":!e,adjust:!0,style:{width:"280px"},label:o.selectedOptionLabel,value:o[e],onChange:a=>o.editAdjustments({type:e,value:a}),onMouseUp:i,onTouchEnd:i,snap:0}),$.createElement(l.Spacer,{count:2}),$.createElement(t.BarSeparator,null)),$.createElement(t.Other.EmptyDiv,null))};var rt=m("adjustmentsTool","custom")(c(We));import B from"react";const Me=t.TabWrapper,{Tab:bo}=t,je=({brushTool:o,custom:r})=>{const{colorList:e,locale:n,localeColor:i}=o,a=n.controls,p=i.colorPicker,d=r.getButton("toolControlBarSecondaryButton");return B.createElement(t.ControlsbarContainer,{style:{justifyContent:"center"},show:!0},B.createElement(d,{tool:s.BRUSH,ariaLabel:a.buttonReset,onClick:o.reset,icon:B.createElement(f.reset,null),isDisabled:!o.isDirty,label:a.buttonReset}),B.createElement(t.Other.ControlsWrapper,null,B.createElement(l.Input.Form,null,B.createElement(Me,null,B.createElement(bo,{label:a.tabColor},B.createElement(l.Spacer,{count:1}),B.createElement(l.Input.Selection,{showLabel:!1,label:a.selectColor},B.createElement(E,{parentId:a.selectColor,activeColor:o.color,colors:e,labelsColor:p,colorPickerDirection:"top",onChange:o.changeColor}))),B.createElement(bo,{label:a.tabSize},B.createElement(t.Slider,{style:{width:"280px"},showLabel:!1,label:a.sliderSize,value:o.relativeSize,min:1,max:100,divider:1,onChange:o.changeRelativeSize})),B.createElement(bo,{label:a.tabHardness},B.createElement(t.Slider,{style:{width:"280px"},showLabel:!1,label:a.sliderHardness,value:o.hardness,min:0,max:1,onChange:o.changeHardness}))))))};var nt=m("brushTool","custom")(c(je));import D from"react";const ze=({filterTool:o,custom:r})=>{const{state:e}=o,n=o.locale.controls,i=r.getButton("toolControlBarSecondaryButton"),a=()=>{o.toolSnapshot()};return D.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},D.createElement(i,{tool:s.FILTER,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:D.createElement(f.reset,null),label:o.locale.controls.buttonReset}),D.createElement(t.Other.ControlsWrapper,null,D.createElement(l.Spacer,{count:2}),D.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:n.sliderIntensity,value:e.intensity,min:0,max:1,onMouseUp:a,onTouchEnd:a,onChange:o.changeIntensity,snap:e.isDuotone?.5:null}),D.createElement(l.Spacer,{count:2}),D.createElement(t.BarSeparator,null)),D.createElement(t.Other.EmptyDiv,null))};var it=m("filterTool","custom")(c(ze));import P from"react";const Ne=({focusTool:o,custom:r})=>{const e=o.locale.controls,n=r.getButton("toolControlBarSecondaryButton"),i=()=>{o.toolSnapshot(e.sliderIntensity)};return P.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},P.createElement(n,{tool:s.FOCUS,ariaLabel:e.buttonReset,onClick:o.reset,icon:P.createElement(f.reset,null),label:e.buttonReset}),P.createElement(t.Other.ControlsWrapper,null,P.createElement(l.Spacer,{count:2}),P.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:e.sliderIntensity,value:o.intensity,min:He.minIntensity,max:o.maxIntensity,divider:1,onChange:o.changeIntensity,onMouseUp:i,onTouchEnd:i}),P.createElement(l.Spacer,{count:2}),P.createElement(t.BarSeparator,null)),P.createElement(t.Other.EmptyDiv,null))};var st=m("focusTool","custom")(c(Ne));import I from"react";const Ge=t.TabWrapper,{Tab:uo}=t,Ve=({frameTool:o,custom:r})=>{const e=o.locale.controls,n=o.localeColor.colorPicker,{tintable:i,colorList:a}=o,p=r.getButton("toolControlBarSecondaryButton"),d=C=>{o.toolSnapshot(C)};return I.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},I.createElement(p,{tool:s.FRAME,ariaLabel:e.buttonReset,onClick:o.reset,icon:I.createElement(f.reset,null),label:e.buttonReset}),I.createElement(t.Other.ControlsWrapper,null,I.createElement(l.Spacer,null),I.createElement(Ge,null,I.createElement(uo,{label:e.tabOpacity},I.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:e.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:()=>{d(e.sliderOpacity)},onTouchEnd:()=>{d(e.sliderOpacity)}})),I.createElement(uo,{label:e.tabSize},I.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:e.sliderSize,value:o.size,min:o.minSize,max:o.maxSize,divider:1,onChange:o.changeWidth,onMouseUp:()=>{d(e.sliderSize)},onTouchEnd:()=>{d(e.sliderSize)}})),i&&I.createElement(uo,{label:e.tabColor},I.createElement(l.Spacer,{count:1}),I.createElement(l.Input.Selection,{label:e.selectColor,showLabel:!1},I.createElement(E,{parentId:e.selectColor,activeColor:o.color,colors:a,labelsColor:n,colorPickerDirection:"top",onChange:o.changeColor,onAddSnapshot:o.colorSnapshot})))||null),I.createElement(t.BarSeparator,null)),I.createElement(t.Other.EmptyDiv,null))};var at=m("frameTool","canvas","custom")(c(Ve));import O from"react";import Ye,{css as Xe}from"styled-components";const _e=Ye(t.ControlsbarContainer)`
  ${o=>o.firstChildMargin&&Xe`
      > :first-child {
        margin-right: 16px;
      }
    `}
`,Je=({library:o,active:r,custom:e})=>{const n=o.locale.controls.placeholderSearch,{config:i}=o,a=e.getButton("toolControlBarSecondaryButton"),p=e.getButton("toolControlBarPrimaryButton"),d=L=>{o.fetchImages(L)},C=L=>{const{files:S}=L.target;if(S.length){const H=new FileReader;H.onload=Pt=>{r.newImage(Pt.target.result)},H.readAsDataURL(S[0])}},k=()=>{r.selectWebcam(!0)},z=()=>{const L=document.getElementById("fileUpload");L&&L.click()};return O.createElement(_e,{firstChildMargin:i.enableWebcam&&!o.libraryProvider,show:!0},i.enableUpload&&O.createElement(p,{tool:s.LIBRARY,ariaLabel:o.locale.controls.buttonUpload,onClick:z,icon:O.createElement(f.uploadImage,null),label:o.locale.controls.buttonUpload},O.createElement(l.Input.File,{onChange:C})),o.libraryProvider&&O.createElement(t.Other.ControlsWrapper,null,O.createElement(l.Input.Search,{onChange:d,placeholder:n})),i.enableWebcam&&O.createElement(a,{tool:s.LIBRARY,ariaLabel:o.locale.controls.buttonWebcamOpen,onClick:k,icon:O.createElement(f.openWebcam,null),label:o.locale.controls.buttonWebcamOpen}),O.createElement(t.BarSeparator,null))};var lt=m("library","active","custom")(c(Je));import w from"react";const Ke=t.TabWrapper,{Tab:pt}=t,qe=({overlayTool:o,custom:r})=>{const{state:e}=o,n=o.locale.controls,{allBlendModes:i}=o,{blendMode:a}=o,p=r.getButton("toolControlBarSecondaryButton"),d=()=>{o.toolSnapshot()},C=k=>{o.changeBlendMode(k)};return w.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},w.createElement(p,{tool:s.OVERLAY,ariaLabel:n.buttonReset,onClick:o.reset,icon:w.createElement(f.reset,null),label:n.buttonReset}),w.createElement(t.Other.ControlsWrapper,null,w.createElement(l.Spacer,null),w.createElement(Ke,null,w.createElement(pt,{label:n.tabBlendMode},w.createElement(l.Input.CarouselSlider,{showLabel:!1,label:n.carouselBlendMode,defaultIdentifier:a,onSelect:C,list:i})),w.createElement(pt,{label:n.tabOpacity},w.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:n.sliderOpacity,value:e.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:d,onTouchEnd:d}))),w.createElement(t.BarSeparator,null)),w.createElement(t.Other.EmptyDiv,null))};var mt=m("overlayTool","custom")(c(qe));import y from"react";import Qe from"styled-components";const Ze=t.TabWrapper,{Tab:ct}=t,Re=Qe.input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:!0})`
  ${V.VisuallyHidden}
`,or=({stickerTool:o,custom:r})=>{const{colorList:e}=o,n=o.locale.controls,i=o.localeColor.colorPicker,a=r.getButton("toolControlBarPrimaryButton"),p=()=>{o.toolSnapshot()},d=()=>{const S=document.getElementById("fileUpload");S&&(S.value=null,S.click())},C=S=>{const{files:H}=S.target;o.addFiles(H)},k=()=>y.createElement("div",null,y.createElement(l.Spacer,{count:2}),y.createElement(t.Slider,{isDisabled:!o.isStickerSelected,style:{width:"280px"},label:n.sliderOpacity,value:o.opacity,min:0,max:1,onMouseUp:p,onTouchEnd:p,onChange:o.changeOpacity}),y.createElement(l.Spacer,{count:2})),z=()=>y.createElement("div",null,y.createElement(l.Spacer,null),y.createElement(Ze,null,y.createElement(ct,{label:n.tabColor},y.createElement(l.Spacer,{count:1}),y.createElement(l.Input.Selection,{isDisabled:!o.isStickerSelected,showLabel:!1,label:n.selectColor},y.createElement(E,{activeSprite:o.id,parentId:n.selectColor,activeColor:o.tintColor,colors:e,labelsColor:i,isDisabled:!o.isStickerSelected,colorPickerDirection:"top",onChange:o.changeTintColor,onAddSnapshot:o.tintColorSnapshot}))),y.createElement(ct,{label:n.tabOpacity},y.createElement(t.Slider,{isDisabled:!o.isStickerSelected,showLabel:!1,style:{width:"280px"},label:n.sliderOpacity,value:o.opacity,min:0,max:1,onMouseUp:p,onTouchEnd:p,onChange:o.changeOpacity})))),L=()=>o.isCustomStickerEnabled?y.createElement(a,{tool:s.STICKER,ariaLabel:n.buttonUpload,onClick:d,icon:y.createElement(f.uploadImage,null),label:n.buttonUpload},y.createElement(Re,{onChange:C})):null;return y.createElement(t.ControlsbarContainer,{show:!0},L(),y.createElement(t.Other.ControlsWrapper,null,o.tintable&&z()||k(),y.createElement(t.BarSeparator,null)),y.createElement(t.Other.EmptyDiv,null))};var dt=m("stickerTool","custom")(c(or));import u from"react";import tr from"styled-components";const rr=t.ResponsiveTabWrapper,{Tab:J}=t,nr=tr(l.Input.NumericInput)`
  max-width: 55px;
  > div > input {
    text-align: center;
  }
`,ir=({textTool:o,custom:r})=>{const{colorList:e,backgroundColorList:n}=o,i=o.locale.controls,a=o.localeColor.colorPicker,p=["left","center","right"],d=r.getButton("textAlignment"),C=r.getButton("toolControlBarPrimaryButton"),k=()=>p.map(S=>{const H=er[S];return u.createElement(d,{tool:S,isDisabled:!o.isTextSelected,ariaLabel:`Align ${S}`,isActive:S===o.alignment,key:S,icon:u.createElement(H,null),onClick:()=>o.changeAlignment(S)})}),z=()=>{o.toolSnapshot()},L=S=>{const H=S?parseFloat(S):0;o.setFontSize(Math.max(10,Math.min(690,H)))};return u.createElement(t.ControlsbarContainer,{show:!0},u.createElement(C,{tool:s.TEXT,ariaLabel:i.buttonNew,onClick:o.add,icon:u.createElement(f.addText,null),label:i.buttonNew}),u.createElement(t.Other.ControlsWrapper,null,u.createElement(l.Spacer,null),u.createElement(rr,null,u.createElement(J,{label:i.tabFontSize},u.createElement(nr,{value:o.fontSize.toFixed(0),onSubmit:L,isDisabled:!o.isTextSelected})),u.createElement(J,{label:i.tabAlignment},u.createElement(l.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:i.selectAlignment},k())),u.createElement(J,{label:i.tabColor},u.createElement(l.Spacer,null),u.createElement(l.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:i.selectFontColor},u.createElement(E,{activeSprite:o.id,parentId:i.selectFontColor,activeColor:o.textColor,colors:e,labelsColor:a,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),u.createElement(J,{label:i.tabBgColor},u.createElement(l.Spacer,null),u.createElement(l.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:i.selectBackgroundColor},u.createElement(E,{activeSprite:o.id,parentId:i.selectBackgroundColor,activeColor:o.backgroundColor,colors:n,labelsColor:a,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeBackgroundColor,onAddSnapshot:o.backgroundColorSnapshot}))),u.createElement(J,{label:i.tabLineHeight},u.createElement(t.Slider,{isDisabled:!o.isTextSelected,showLabel:!1,label:i.sliderLineSpacing,value:o.lineHeight,min:.5,max:3,onChange:o.changeLineHeight,onMouseUp:z,onTouchEnd:z,snap:1,divider:1,decimal:1}))),u.createElement(t.BarSeparator,null)),u.createElement(t.Other.EmptyDiv,null))};var Ct=m("textTool","custom")(c(ir));import W from"react";const sr=({textDesignTool:o,custom:r})=>{const e=o.locale.controls,n=o.localeColor.colorPicker,{colorList:i}=o,a=r.getButton("toolControlBarSecondaryButton"),p=r.getButton("toolControlBarPrimaryButton");return W.createElement(t.ControlsbarContainer,{show:!0},W.createElement(p,{tool:s.TEXT_DESIGN,ariaLabel:e.buttonNew,onClick:o.add,icon:W.createElement(f.addText,null),label:e.buttonNew}),W.createElement(t.Other.ControlsWrapper,null,W.createElement(l.Input.Selection,{isDisabled:!o.isTextDesignSelected,label:e.selectColor},W.createElement(E,{activeSprite:o.id,parentId:e.selectColor,activeColor:o.color,colors:i,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextDesignSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),W.createElement(a,{tool:s.TEXT_DESIGN,ariaLabel:e.buttonShuffle,onClick:o.changeSeed,icon:W.createElement(f.shuffle,null),label:e.buttonShuffle}),W.createElement(t.BarSeparator,null))};var ht=m("textDesignTool","custom")(c(sr));import v from"react";const pr=t.ResponsiveTabWrapper,{Tab:fo}=t,mr=({transformTool:o,custom:r})=>{const e=o.locale.controls,{forceDimensions:n}=o,i=r.getCheckbox(),a=r.getButton("toolControlBarSecondaryButton");return v.createElement(t.ControlsbarContainer,{show:!0},v.createElement(a,{tool:s.TRANSFORM,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:v.createElement(f.reset,null),label:o.locale.controls.buttonReset}),v.createElement(t.Other.ControlsWrapper,null,v.createElement(l.Spacer,null),v.createElement(pr,null,v.createElement(fo,{label:e.tabCropSize},v.createElement(lr,{isDisabled:n,showLabel:!1,valueHeight:o.localOutputHeight,valueWidth:o.localOutputWidth,onSubmitWidth:o.onPixelWidth,onSubmitHeight:o.onPixelHeight,label:e.inputCropSize,labelHeight:e.inputHeight,labelWidth:e.inputWidth})),v.createElement(fo,{label:e.tabFlipAndRotate},v.createElement(ar,null)),v.createElement(fo,{label:e.tabResolution},v.createElement(i,{isDisabled:n,style:{paddingTop:"5px",justifyContent:"center"},value:o.lockResolution,checkMarkPosition:"left",label:e.checkboxKeepResolution,onClick:o.changeLockResolution}))),v.createElement(t.BarSeparator,null)),v.createElement(t.Other.EmptyDiv,null))};var bt=m("transformTool","custom")(c(mr));import b from"react";let eo=class extends b.Component{render(){const o=this.props.active.tool;return b.createElement(t.Controlsbar,{show:!!o},b.createElement(l.Switch.Index,{type:o},b.createElement(l.Switch.Case,{value:s.FILTER},b.createElement(it,null)),b.createElement(l.Switch.Case,{value:s.FOCUS},b.createElement(st,null)),b.createElement(l.Switch.Case,{value:s.ADJUSTMENT},b.createElement(rt,null)),b.createElement(l.Switch.Case,{value:s.OVERLAY},b.createElement(mt,null)),b.createElement(l.Switch.Case,{value:s.STICKER},b.createElement(dt,null)),b.createElement(l.Switch.Case,{value:s.TEXT},b.createElement(Ct,null)),b.createElement(l.Switch.Case,{value:s.TEXT_DESIGN},b.createElement(ht,null)),b.createElement(l.Switch.Case,{value:s.LIBRARY},b.createElement(lt,null)),b.createElement(l.Switch.Case,{value:s.FRAME},b.createElement(at,null)),b.createElement(l.Switch.Case,{value:s.BRUSH},b.createElement(nt,null)),b.createElement(l.Switch.Case,{value:s.TRANSFORM},b.createElement(bt,null))))}};eo=go([m("active","config"),c],eo);var ut=eo;import K from"react";import cr from"styled-components";const Cr=cr.div`
  position: relative;
  top: -8px;
  color: ${o=>o.theme.card.foreground};
`,hr=({adjustmentsTool:o})=>{const r=(e,n)=>{const i=dr[e.identifier];return K.createElement(t.Card,{tool:s.ADJUSTMENT,type:h.MEDIUM,onClick:()=>o.toggleOptionSelection(e.identifier),isActive:e.identifier===o.selectedAdjustmentType,key:`${e.identifier}-${n}`,label:e.name,style:{animationDelay:`${g(n)}s`}},K.createElement(Cr,null,K.createElement(i,null)),K.createElement(t.CardLabel,null,o.locale.items[e.identifier]||e.name))};return K.createElement(t.CardContainer,null,o.items.map(r))};var ft=m("adjustmentsTool")(c(hr));import M from"react";const gt="photoeditorsdk-FilterItems";class br extends M.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{filterTool:r}=this.props;r.toggleCategorySelection(o),this.simpleBar&&setTimeout(()=>this.simpleBar.recalculate(),0)};this.renderItem=(o,r)=>{const{filterTool:e}=this.props;return M.createElement(t.Card,{tool:s.FILTER,type:h.MEDIUM,onClick:()=>e.selectFilter(o.identifier,o.defaultIntensity),isActive:e.identifier===o.identifier,key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{animationDelay:`${g(r)}s`}},M.createElement(t.CardLabel,{withBackground:!0},e.locale.categories[o.identifier]||e.locale.items[o.identifier]||o.name))};this.renderCategory=(o,r)=>{const{filterTool:e}=this.props,{selectedCategoryIdentifier:n}=e,i=n===o.identifier;return o.items?M.createElement(t.CategoryContainer,{key:o.identifier},M.createElement(t.Card,{tool:s.FILTER,type:h.LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:o.thumbnailURI,label:o.name,style:{animationDelay:`${g(r)}s`}},M.createElement(t.CardLabel,{withBackground:!0},o.name)),M.createElement(t.ExpandableContainer,{show:i},o.items.map(this.renderItem))):null}}componentDidMount(){const{filterTool:o}=this.props;o.config.flattenCategories||(this.simpleBar=new G(document.getElementById(gt),{autoHide:!1}))}render(){const{filterTool:o}=this.props,{categories:r,config:e,items:n}=o;return e.flattenCategories?M.createElement(t.CardContainer,null,n.map(this.renderItem)):M.createElement(t.DynamicCardContainer,{id:gt},r.map(this.renderCategory))}}var yt=m("filterTool","active")(c(br));import yo from"react";const ur=({focusTool:o})=>{const r=n=>{o.selectFocus(n)},e=(n,i)=>yo.createElement(t.Card,{isActive:n.identifier===o.identifier,tool:s.FOCUS,type:h.MEDIUM,onClick:()=>r(n.identifier),key:`${n.identifier}-${i}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${g(i)}s`}},yo.createElement(t.CardLabel,{withBackground:!0},o.locale.items[n.identifier]||n.name));return yo.createElement(t.CardContainer,null,o.items.map(e))};var St=m("focusTool")(c(ur));import So from"react";const fr=({frameTool:o})=>{const r=o.identifier,e=(n,i)=>So.createElement(t.Card,{tool:s.FRAME,type:h.MEDIUM,onClick:()=>o.selectFrame(n.identifier),isActive:n.identifier===r,key:`${n.identifier}-${i}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${g(i)}s`,backgroundSize:"60%"}}," ",So.createElement(t.CardLabel,{hidden:!0},o.locale.items[n.identifier]||n.name));return So.createElement(t.CardContainer,null,o.items.map(e))};var It=m("frameTool")(c(fr));import F from"react";const xt="photoeditorsdk-LibraryConfig";class gr extends F.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{library:r}=this.props;r.toggleCategorySelection(o),this.simpleBar&&setTimeout(()=>this.simpleBar.recalculate(),0)};this.renderItem=(o,r)=>{const{active:e}=this.props;return F.createElement(t.Card,{tool:s.LIBRARY,type:h.MEDIUM,onClick:()=>e.newImage(o.rawUrl),key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{animationDelay:`${g(r)}s`}})};this.renderCategory=(o,r)=>{const{library:e}=this.props,{selectedCategoryIdentifier:n}=e,i=n===o.identifier;return o.items?F.createElement(t.CategoryContainer,{key:o.identifier},F.createElement(t.Card,{tool:s.LIBRARY,type:h.LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:o.thumbnailURI,label:o.name,style:{animationDelay:`${g(r)}s`}},F.createElement(t.CardLabel,{withBackground:!0},o.name)),F.createElement(t.ExpandableContainer,{show:i},o.items.map(this.renderItem))):null}}componentDidMount(){const{library:o}=this.props;o.config.flattenCategories||(this.simpleBar=new G(document.getElementById(xt),{autoHide:!1}))}render(){const{library:o}=this.props,{query:r,categories:e,items:n,locale:i,config:a}=o;return r?n.length?F.createElement(t.CardContainer,null,n.map(this.renderItem)):F.createElement("p",{"data-test":"LibraryNoResult"},i.controls.noResults):a.flattenCategories?F.createElement(t.CardContainer,null,n.map(this.renderItem)):F.createElement(t.DynamicCardContainer,{id:xt},e.map(this.renderCategory))}}var Bt=m("library","active")(c(gr));import Io from"react";const yr=({overlayTool:o})=>{const{identifier:r,items:e,selectOverlay:n,locale:i}=o,a=(p,d)=>Io.createElement(t.Card,{tool:s.OVERLAY,type:h.MEDIUM,onClick:()=>n(p.identifier),isActive:p.identifier===r,key:`${p.identifier}-${d}`,image:p.thumbnailURI,label:p.name,style:{animationDelay:`${g(d)}s`}},Io.createElement(t.CardLabel,{withBackground:!0},i.items[p.identifier]||p.name));return Io.createElement(t.CardContainer,null,e.map(a))};var vt=m("overlayTool")(c(yr));import j from"react";const kt="photoeditorsdk-StickerConfig";class Ir extends j.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{stickerTool:r}=this.props;r.toggleCategorySelection(o),this.simpleBar&&setTimeout(()=>this.simpleBar.recalculate(),0)};this.renderItem=(o,r)=>{const{stickerTool:e}=this.props;return j.createElement(t.Card,{tool:s.STICKER,type:h.MEDIUM,onClick:()=>e.add(o.identifier),key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{backgroundSize:"55%",animationDelay:`${Sr(r)}s`}},j.createElement(t.CardLabel,{hidden:!0},e.locale.items[o.identifier]||o.name))};this.renderCategory=(o,r)=>{const{stickerTool:e}=this.props,{selectedCategoryIdentifier:n,locale:i}=e,a=n===o.identifier;return o.items?j.createElement(t.CategoryContainer,{key:o.identifier},j.createElement(t.Card,{tool:s.STICKER,type:h.LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:o.thumbnailURI,label:o.name,style:{animationDelay:`${g(r)}s`}},j.createElement(t.CardLabel,{withBackground:!0},i.categories[o.identifier]||o.name)),j.createElement(t.ExpandableContainer,{show:a},o.items.map(this.renderItem))):null}}componentDidMount(){const{stickerTool:o}=this.props;o.config.flattenCategories||(this.simpleBar=new G(document.getElementById(kt),{autoHide:!1}))}render(){const{stickerTool:o}=this.props,{categories:r,items:e,config:n}=o;return n.flattenCategories?j.createElement(t.CardContainer,null,e.map(this.renderItem)):j.createElement(t.DynamicCardContainer,{id:kt},r.map(this.renderCategory))}}var Tt=m("stickerTool","active")(c(Ir));import ro from"react";import xr from"styled-components";const vr=xr.div`
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform-origin: left top;
`;class kr extends ro.Component{constructor(){super(...arguments);this.getWidth=({fontFamily:o,fontStyle:r,fontWeight:e},n)=>{const i=document.createElement("canvas"),a=i.getContext("2d");return a.font=`${r} ${e} 20px ${o}`,a.fillText(n,0,0),a.measureText(n).width};this.renderItem=(o,r)=>{const{config:e,textTool:n}=this.props,{fontFamily:i,fontWeight:a,fontStyle:p,identifier:d}=o,C=`${o.fontFamily} ${Br.getDisplayFontStyle(o)}`,k=this.getWidth(o,C),z=(e.measurements.basicCard.medium.width-20)/k;return ro.createElement(t.Card,{tool:s.TEXT,type:h.MEDIUM,onClick:()=>n.changeFont(d),isDisabled:!this.textTool.isTextSelected,isActive:n.identifier===d,key:`${o.identifier}-${r}`,label:C,style:{animationDelay:`${g(r)}s`}},ro.createElement(vr,{style:{transform:`scale(${z}) translate(-50%, -50%)`,fontFamily:i,fontStyle:p,fontWeight:a}},C))}}get textTool(){return this.props.textTool}render(){const{textTool:o}=this.props,{fontsLoaded:r,fontFamilies:e}=o;return r?ro.createElement(t.CardContainer,null,e.map(this.renderItem)):null}}var wt=m("textTool","config")(c(kr));import xo from"react";const Tr=({textDesignTool:o})=>{const{items:r,changeIdentifier:e,isTextDesignSelected:n,identifier:i}=o,a=(p,d)=>xo.createElement(t.Card,{tool:s.TEXT_DESIGN,type:h.MEDIUM,onClick:()=>e(p.identifier),isDisabled:!n,isActive:i===p.identifier,key:`${p.identifier}-${d}`,image:p.thumbnailURI,label:p.name,style:{animationDelay:`${g(d)}s`,backgroundSize:"60%"}},xo.createElement(t.CardLabel,{hidden:!0},p.name));return xo.createElement(t.CardContainer,null,r.map(a))};var Ut=m("textDesignTool")(c(Tr));import T from"react";import Lt from"styled-components";const Ur=Lt.div`
  svg {
    margin-bottom: 12px;
  }
`,Lr=Lt.div`
  svg {
    width: ${o=>o.theme.measurements.basicCard.medium.height}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  }

  ${wr} {
    width: ${o=>o.theme.measurements.basicCard.medium.width-32}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height-32}px;
    padding: 6px 0px 24px;
  }
`,Et="photoeditorsdk-TransformConfig";class Er extends T.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{transformTool:r}=this.props;r.toggleCategorySelection(o),this.simpleBar&&setTimeout(()=>this.simpleBar.recalculate(),0)};this.renderItem=(o,r)=>{const{transformTool:e,config:n}=this.props,{locale:i}=e,a=e.checkIfTransformThumbnailExits(o.thumbnailURI),p=no.crops[o.identifier]||no.crops.imgly_transform_common_custom,d=T.createElement(t.CardLabel,null,i.items[o.identifier]||o.name),C=a?d:T.createElement(Lr,null,T.createElement(p,{main:n.theme.transform.crops.main,highlight:n.theme.transform.crops.highlight,shadow:n.theme.transform.crops.shadow}),d);return T.createElement(t.Card,{tool:s.TRANSFORM,type:h.MEDIUM,onClick:()=>e.changeIdentifier(o.identifier,!0),key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{backgroundSize:"55%",animationDelay:`${g(r)}s`}},C)};this.renderCategory=(o,r)=>{const{transformTool:e}=this.props,{selectedCategoryIdentifier:n,locale:i}=e,a=n===o.identifier;if(!o.items)return null;const p=e.checkIfTransformThumbnailExits(o.thumbnailURI),d=T.createElement(t.CardLabel,null,i.categories[o.identifier]||o.name),C=p?d:T.createElement(Ur,null,no.categories[o.identifier]&&T.createElement(no.categories[o.identifier]),d);return T.createElement(t.CategoryContainer,{key:o.identifier},T.createElement(t.Card,{tool:s.TRANSFORM,type:h.LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:p?o.thumbnailURI:"",label:o.name,style:{animationDelay:`${g(r)}s`}},C),T.createElement(t.ExpandableContainer,{show:a},o.items.map(this.renderItem)))}}componentDidMount(){const{transformTool:o}=this.props;o.config.flattenCategories||(this.simpleBar=new G(document.getElementById(Et),{autoHide:!1}))}render(){const{transformTool:o}=this.props,{categories:r,config:e,items:n}=o;return e.flattenCategories?T.createElement(t.CardContainer,null,n.map(this.renderItem)):T.createElement(t.DynamicCardContainer,{id:Et},r.map(this.renderCategory))}}var Ft=m("transformTool","config")(c(Er));import U from"react";let io=class extends U.Component{constructor(){super(...arguments);this.getToolItemsComponent=o=>{switch(o){case s.LIBRARY:return U.createElement(Bt,null);case s.FILTER:return U.createElement(yt,null);case s.FOCUS:return U.createElement(St,null);case s.ADJUSTMENT:return U.createElement(ft,null);case s.OVERLAY:return U.createElement(vt,null);case s.STICKER:return U.createElement(Tt,null);case s.TEXT:return U.createElement(wt,null);case s.TEXT_DESIGN:return U.createElement(Ut,null);case s.FRAME:return U.createElement(It,null);case s.TRANSFORM:return U.createElement(Ft,null)}return null}}render(){const{library:o,active:r}=this.props,e=r.tool;return e===s.BRUSH||e===s.LIBRARY&&!o.libraryProvider?null:U.createElement(t.Itemsbar,{show:!!e},this.getToolItemsComponent(e))}};io=go([m("active","library"),c],io);var At=io;import A from"react";import Fr from"styled-components";const Wr=Fr.div`
  position: absolute;
  width: 100%;
  height: ${o=>o.theme.measurements.basicToolControlBar.maxHeight}px;
  bottom: 0;
  left: 0;
  background: ${o=>o.theme.webcam.backdrop};
  z-index: ${o=>o.theme.measurements.zIndex.disable};
`;class Mr extends A.Component{constructor(){super(...arguments);this.state={hasError:!1}}static getDerivedStateFromError(o){return console.error(o),{hasError:!0}}render(){return A.createElement(l.Container,{"data-test":Or.EditorContainer},this.props.active.isWebcam?A.createElement(Wr,null):null,A.createElement(Pr,null),A.createElement(Dr,null,A.createElement($r,null),A.createElement(Ar,null),A.createElement(ut,null),A.createElement(At,null),A.createElement(et,null)))}}var $t=m("active")(c(Mr));import so from"react";import{ThemeProvider as zr}from"styled-components";class Dt extends so.Component{componentDidMount(){this.editor=this.props.editor,this.storeProps=this.props.storeProps;const o=new Hr(this.editor.configStore.config.custom.components,{}),r={getDialog:o.getDialog,getButton:o.getButton,getColorItem:o.getColorItem,getCheckbox:o.getCheckbox};this.storeProps.custom=r,this.forceUpdate()}render(){return this.storeProps?so.createElement(jr,N({},this.storeProps),so.createElement(zr,{theme:N(N({},this.editor.configStore.theme),{measurements:this.editor.configStore.measurements})},so.createElement($t,null))):null}}export{Dt as BasicUI};
