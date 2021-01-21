import{a as f,b as er,c as br,d as lr,f as ho,g as E,h as Le,i as _t,k as Te,l as yr,m as dr,n as wt,o as Xe,p as ur,q as Ye,r as Cr,s as ge,t as ze,u as h,v as mo,w as qe}from"../../chunk.JY62A7JE.js";import{$ as c,C as bo,L as de,N as co,P as nr,R as v,S as A,U as De,V as Nt,W as l,Y as p,_ as fr,q as fe,u as Jt}from"../../chunk.LZD2BNDF.js";import{N as V,c as i,w as C}from"../../chunk.UPDPDFFX.js";import po from"react";import{ThemeProvider as gr}from"styled-components";import $ from"react";import cr from"styled-components";import ao from"react";import kt from"react";import Bt from"styled-components";const vo=Bt(co)`
  margin: 2px;
  min-width: ${o=>o.theme.measurements.basicCard.large.width}px;
  height: ${o=>o.theme.measurements.basicCard.large.height}px;
  color: ${o=>o.theme.card.foreground};
`;import Tt from"styled-components";const Uo=Tt(co)`
  margin: 2px;
  min-width: ${o=>o.theme.measurements.basicCard.medium.width}px;
  height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  color: ${o=>o.theme.card.foreground};
`,Co=o=>{const r=o.type===C.LARGE;let e=Uo;return r&&(e=vo),kt.createElement(e,V({},o))};Co.defaultProps={type:C.MEDIUM};import vt from"styled-components";const wo=vt(bo)`
  transition-property: width;
  transition-duration: 0.4s;
  transition-timing-function: ease-in;
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
`;import Ut from"styled-components";const Lo=Ut(wt)`
  &&& {
    min-height: 32px;
    font-size: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.size}px;
    letter-spacing: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.letterSpacing}px;
    text-transform: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.case};
  }
`;import Lt from"styled-components";const Ao=Lt.div`
  display: flex;
  /* This fixes an IE11 issue where the items are behind the category */
  flex: 1 0 auto;
`;import At,{css as Eo}from"styled-components";const Fo=At.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  height: auto;
  transition: max-height 0.4s ease-in-out;
  ${o=>o.show?Eo`
          max-height: 80px;
        `:Eo`
          max-height: 0px;
        `}
`;var $o=Fo;Fo.defaultProps={show:!0};import Et from"styled-components";const Ft=Et.div`
  text-align: -moz-center;
  text-align: center;
  text-align: -webkit-center;
  margin: 0 10vw;
  height: auto;
  box-shadow: ${o=>o.theme.toolControlBar.shadow};
  @media all and (min-width: 0) and (max-width: 599px) {
    margin: 0 5vw;
  }
`;var Po=Ft;import $t from"styled-components";const Pt=$t.div`
  width: 100px;
  @media all and (min-width: 0) and (max-width: 599px) {
    width: 42px;
  }
`;var Do=Pt;import Dt,{css as Ot}from"styled-components";const Oo=Dt.div.attrs(()=>({"data-test":A.ToolControlBarControls}))`
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

  ${({show:o})=>o&&Ot`
      transform: translateY(-100%) scaleY(1);
    `}
`;import X from"react";import Zt from"styled-components";import Wt from"react";import Mt from"styled-components";const jt=Mt.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,zt=({label:o,className:r,children:e})=>Wt.createElement(jt,{"aria-label":o,className:r},e);var uo=zt;import I from"react";import zo from"styled-components";import Ht from"styled-components";const Gt=Ht.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Nt.scale} 0.2s linear;
  animation-fill-mode: both;
  height: 40px;
  min-width: 350px;
  @media all and (min-width: 0) and (max-width: 599px) {
    min-width: 280px;
  }
`;var Wo=Gt;import Mo from"react";import Vt,{css as Yt}from"styled-components";const jo=Yt`
  background: ${o=>o.theme.tabTitle.activeBackground};
  color: ${o=>o.theme.tabTitle.activeForeground};
  border-bottom: 1px solid ${o=>o.theme.tabTitle.activeBorderColor};
`,Xt=Vt(ho)`
  display: inline-flex;
  align-items: center;
  font-size: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.size}px;
  letter-spacing: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.letterSpacing}px;
  text-transform: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.case};
  color: ${o=>o.theme.tabTitle.foreground};
  border-radius: 0px;
  padding: 1px 12px 2px;
  background: ${o=>o.theme.tabTitle.background};

  ${({isActive:o})=>o&&jo}

  &:active {
    ${jo}
  }

  @media all and (min-width: 0) and (max-width: 599px) {
    max-width: 150px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;class fo extends Mo.Component{constructor(){super(...arguments);this.onClick=()=>{const{label:o,onClick:r}=this.props;r(o)}}render(){const{activeTab:o,label:r}=this.props;return Mo.createElement(Xt,{ariaLabel:r,isActive:o===r,onClick:this.onClick},r)}}const Kt=zo(Jt)`
  display: inline-flex;
  padding: 0 4px;
  height: 20px;
  font-size: 16px;
`,qt=zo(_t)`
  display: inline-flex;
  justify-content: center;
  transform: translate(-100%, -100%);
  @media all and (min-width: 0) and (max-width: 499px) {
    left: 0;
    right: 0;
    transform: translateY(-120%);
    background: transparent;
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
`;class Qt extends I.Component{constructor(o){super(o);this.onTabClick=o=>{this.setState({activeTab:o,toggleExtend:!1})};this.getDropUp=()=>{const{length:o}=this.props,{toggleExtend:r}=this.state,e=I.Children.toArray(this.props.children),n=I.Children.count(this.props.children),s=e.slice(o,n);return I.createElement(qt,{show:r},s.map(a=>{const m=a.props.label||"";return I.createElement(ho,{onClick:()=>this.onTabClick(m),key:m,ariaLabel:"More Options"},m)}))};this.extend=()=>{this.setState(({toggleExtend:o})=>({toggleExtend:!o}))};this.getExtension=()=>I.createElement(Kt,{onClick:this.extend,ariaLabel:"Select Next"},"...");const r=I.Children.count(this.props.children),e=I.Children.toArray(this.props.children);this.state={activeTab:r&&(e[0].props&&e[0].props.label)||"",toggleExtend:!1}}render(){const{length:o}=this.props,{activeTab:r,toggleExtend:e}=this.state,n=I.Children.toArray(this.props.children).slice(0,o),s=I.Children.count(this.props.children)>o;return I.createElement("div",null,n.map(a=>{if(a){const m=a.props.label||"";return I.createElement(fo,{activeTab:r,key:m,label:m,onClick:this.onTabClick})}return null}),s?this.getExtension():null,e?this.getDropUp():null,I.Children.map(this.props.children,a=>!a||a.props&&a.props.label!==r?null:I.createElement(Wo,{key:a.props.label},a.props.children)))}}var Y=Qt;const Rt=Zt.div`
  position: relative;
  white-space: nowrap;
  display: flex;
  transition: all 0.2s linear;
`;class _ extends X.Component{constructor(o){super(o);this.updateLength=()=>{const{maxWidth:o,children:r}=this.props;let e=0;if(o)e=o;else{const a=window.innerWidth,m=a>600?300:200;e=a-m}const n=X.Children.count(r),s=e-n*_.TAB_WIDTH;if(s<0){const a=Math.round(Math.abs(s/_.TAB_WIDTH));this.setState({length:n-a})}};this.state={length:X.Children.count(this.props.children)}}componentDidMount(){window.addEventListener("resize",this.updateLength),this.updateLength()}componentWillUnmount(){window.removeEventListener("resize",this.updateLength)}render(){const{children:o}=this.props,{length:r}=this.state;return r?X.createElement(Rt,null,X.createElement(Y,{length:r},o)):null}}_.TAB_WIDTH=120;import oe,{css as te}from"styled-components";const ee=oe.div`
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    ${o=>o.full?te`
            left: -24px;
            width: calc(100% + 48px);
          `:`
      left: 24px;
      width: calc(100% - 48px);
    `}
    border-bottom: 1px solid ${o=>o.theme.toolControlBar.separatorColor};
  }
`;var Ho=ee;import re from"styled-components";const ne=re(l.Input.Slider).attrs(()=>({centerSlider:!0}))`
  max-width: 224px;
`;var No=ne;import se,{css as ie}from"styled-components";const ae=se.div`
  visibility: hidden;
  opacity: 0;
  display: none;

  ${({show:o})=>o&&ie`
      opacity: 1;
      visibility: visible;
      display: flex;
    `}
`;var Go=ae;import le,{css as Vo}from"styled-components";const go=le.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  width: 100%;
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
  z-index: ${o=>o.theme.measurements.zIndex.toolControlBar};

  ${o=>o.show?Vo`
          transition-timing-function: ease-in;
          transition-duration: 0.3s;
          transition-property: all;
          padding: 2px 0px;
          max-height: ${o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
          background: ${o.theme.toolControlBar.background};
          color: ${o.theme.toolControlBar.inputLabelForeground};
        `:Vo`
          max-height: 0px;
        `}
`;go.defaultProps={show:!0};import me from"styled-components";const pe=me.div`
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
`;var Yo=pe;import Ko from"react";import Ce,{css as qo}from"styled-components";import ro,{css as ce}from"styled-components";const Xo=ro.span`
  display: flex;
  cursor: pointer;
  z-index: ${o=>o.theme.measurements.zIndex.label};
  transition: bottom 0.3s linear;
`,_o=ce`
  background-color: ${o=>o.theme.toolbar.activeBackground};
  color: ${o=>o.theme.toolbar.activeForeground};
`,no=ro(de)`
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

  ${({isActive:o})=>o&&_o}

  &:active {
    ${_o}
  }

  svg {
    display: flex;
    transition: visibility 0s, opacity 0.5s linear;
    visibility: visible;
    opacity: 1;
  }
`,Jo=ro.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,so=ro.div.attrs({role:"none"})`
  display: flex;
  height: ${o=>o.theme.measurements.basicUIToolbar.openHeight-2}px;
  text-align: center;
  min-width: 100px;
  /* Allow the text to grow in this limit */
  max-width: 150px;
  position: relative;
  /* Position inline-block box at the top of the line box */
  vertical-align: top;
  /* Allow text to wrap again, overwriting the Toolbar style */
  white-space: normal;
  margin: 1px;
`,be=Ce.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  width: 100%;
  transition: height 0.2s ease-out, display 0.1s fade-out;
  background-color: ${o=>o.theme.toolbar.background};
  color: ${o=>o.theme.toolbar.foreground};
  z-index: ${o=>o.theme.measurements.zIndex.toolbar};

  ${o=>o.show?qo`
          height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
          ${no} {
            svg {
              visibility: hidden;
              opacity: 0;
              height: 0;
            }
          }
          ${so} {
            height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
          }
        `:qo`
          height: ${o.theme.measurements.basicUIToolbar.openHeight}px;
        `}
`,Qo=({show:o=!1,children:r})=>Ko.createElement(be,{"data-test":A.Toolbar,show:o},Ko.createElement(bo,null,r));import io from"react";const Zo=({children:o,label:r,isActive:e,onClick:n})=>io.createElement(so,{"aria-haspopup":!0,"aria-expanded":e},io.createElement(no,{"data-test":A.ToolbarItem,ariaLabel:r,onClick:n,isActive:e},io.createElement(Jo,null,o,io.createElement(Xo,null,r))));import ue,{css as Ro}from"styled-components";const he=ue.li.attrs({role:"none"})`
  ${o=>o.active?Ro`
          height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
        `:Ro`
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
`;var ot=he;const t={CardContainer:wo,ExpandableContainer:Go,CategoryContainer:Ao,Card:Co,CardAvatar:fe,CardLabel:Lo,Toolbar:{Index:Qo,Item:Zo,Separator:ot},BarSeparator:Ho,ItemsSeparator:Yo,Itemsbar:go,Controlsbar:$o,ControlsbarContainer:Oo,ResponsiveTabWrapper:_,Slider:No,TabWrapper:Y,Tab:uo,Other:{ControlsWrapper:Po,EmptyDiv:Do}},ye=({config:o,active:r})=>{const{tools:e}=o,n=r.tool,s=d=>{const g=ge[d];return ao.createElement(g,null)||null},a=d=>o.locale[d].title,m=(d,g)=>d&&ao.createElement(t.Toolbar.Item,{onClick:()=>r.selectTool(d),key:d,label:a(d),isActive:n===d},s(d))||ao.createElement(t.Toolbar.Separator,{key:d+g,active:!!n});return ao.createElement(t.Toolbar.Index,{show:!!n},e.map(m))},tt=c("config","active")(p(ye));import b from"react";import D from"react";const Se=({adjustmentsTool:o,custom:r})=>{const e=o.selectedAdjustmentType.toLowerCase(),n=r.getButton("toolControlBarSecondaryButton"),s=()=>{o.toolSnapshot()};return D.createElement(t.ControlsbarContainer,{show:Boolean(e)},D.createElement(n,{tool:i.ADJUSTMENT,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:D.createElement(h.reset,null),label:o.locale.controls.buttonReset}),D.createElement(t.Other.ControlsWrapper,null,D.createElement(l.Spacer,{count:2}),D.createElement(t.Slider,{"aria-hidden":!e,adjust:!0,style:{width:"280px"},label:o.selectedOptionLabel,value:o[e],onChange:a=>o.editAdjustments({type:e,value:a}),onMouseUp:s,onTouchEnd:s,snap:0}),D.createElement(l.Spacer,{count:2}),D.createElement(t.BarSeparator,null)),D.createElement(t.Other.EmptyDiv,null))};var et=c("adjustmentsTool","custom")(p(Se));import B from"react";const xe=t.TabWrapper,{Tab:yo}=t,Ie=({brushTool:o,custom:r})=>{const{colorList:e,locale:n,localeColor:s}=o,a=n.controls,m=s.colorPicker,d=r.getButton("toolControlBarSecondaryButton");return B.createElement(t.ControlsbarContainer,{style:{justifyContent:"center"},show:!0},B.createElement(d,{tool:i.BRUSH,ariaLabel:a.buttonReset,onClick:o.reset,icon:B.createElement(h.reset,null),isDisabled:!o.isDirty,label:a.buttonReset}),B.createElement(t.Other.ControlsWrapper,null,B.createElement(l.Input.Form,null,B.createElement(xe,null,B.createElement(yo,{label:a.tabColor},B.createElement(l.Spacer,{count:1}),B.createElement(l.Input.Selection,{showLabel:!1,label:a.selectColor},B.createElement(E,{activeColor:o.color,colors:e,labelsColor:m,colorPickerDirection:"top",onChange:o.changeColor}))),B.createElement(yo,{label:a.tabSize},B.createElement(t.Slider,{style:{width:"280px"},showLabel:!1,label:a.sliderSize,value:o.relativeSize,min:1,max:100,divider:1,onChange:o.changeRelativeSize})),B.createElement(yo,{label:a.tabHardness},B.createElement(t.Slider,{style:{width:"280px"},showLabel:!1,label:a.sliderHardness,value:o.hardness,min:0,max:1,onChange:o.changeHardness}))))))},rt=c("brushTool","custom")(p(Ie));import O from"react";const Be=({filterTool:o,custom:r})=>{const{state:e}=o,n=o.locale.controls,s=r.getButton("toolControlBarSecondaryButton"),a=()=>{o.toolSnapshot()};return O.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},O.createElement(s,{tool:i.FILTER,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:O.createElement(h.reset,null),label:o.locale.controls.buttonReset}),O.createElement(t.Other.ControlsWrapper,null,O.createElement(l.Spacer,{count:2}),O.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:n.sliderIntensity,value:e.intensity,min:0,max:1,onMouseUp:a,onTouchEnd:a,onChange:o.changeIntensity,snap:e.isDuotone?.5:null}),O.createElement(l.Spacer,{count:2}),O.createElement(t.BarSeparator,null)),O.createElement(t.Other.EmptyDiv,null))};var nt=c("filterTool","custom")(p(Be));import W from"react";const st=p(()=>{const{focusTool:o,custom:r}=Te(),e=o.locale.controls,n=r.getButton("toolControlBarSecondaryButton"),s=()=>{o.toolSnapshot(e.sliderIntensity)};return W.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},W.createElement(n,{tool:i.FOCUS,ariaLabel:e.buttonReset,onClick:o.reset,icon:W.createElement(h.reset,null),label:e.buttonReset}),W.createElement(t.Other.ControlsWrapper,null,W.createElement(l.Spacer,{count:2}),W.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:e.sliderIntensity,value:o.relativeIntensity,min:0,max:100,divider:1,onChange:o.changeRelativeIntensity,onMouseUp:s,onTouchEnd:s}),W.createElement(l.Spacer,{count:2}),W.createElement(t.BarSeparator,null)),W.createElement(t.Other.EmptyDiv,null))});import x from"react";const ke=t.TabWrapper,{Tab:So}=t,ve=({frameTool:o,custom:r})=>{const e=o.locale.controls,n=o.localeColor.colorPicker,{tintable:s,colorList:a}=o,m=r.getButton("toolControlBarSecondaryButton"),d=g=>{o.toolSnapshot(g)};return x.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},x.createElement(m,{tool:i.FRAME,ariaLabel:e.buttonReset,onClick:o.reset,icon:x.createElement(h.reset,null),label:e.buttonReset}),x.createElement(t.Other.ControlsWrapper,null,x.createElement(l.Spacer,null),x.createElement(ke,null,x.createElement(So,{label:e.tabOpacity},x.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:e.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:()=>{d(e.sliderOpacity)},onTouchEnd:()=>{d(e.sliderOpacity)}})),x.createElement(So,{label:e.tabSize},x.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:e.sliderSize,value:o.size,min:o.minSize,max:o.maxSize,divider:1,onChange:o.changeWidth,onMouseUp:()=>{d(e.sliderSize)},onTouchEnd:()=>{d(e.sliderSize)}})),s&&x.createElement(So,{label:e.tabColor},x.createElement(l.Spacer,{count:1}),x.createElement(l.Input.Selection,{label:e.selectColor,showLabel:!1},x.createElement(E,{activeColor:o.color,colors:a,labelsColor:n,colorPickerDirection:"top",onChange:o.changeColor,onAddSnapshot:o.colorSnapshot})))||null),x.createElement(t.BarSeparator,null)),x.createElement(t.Other.EmptyDiv,null))},it=c("frameTool","canvas","custom")(p(ve));import M from"react";import Ue,{css as we}from"styled-components";const Ae=Ue(t.ControlsbarContainer)`
  ${o=>o.firstChildMargin&&we`
      > :first-child {
        margin-right: 16px;
      }
    `}
`,Ee=({library:o,active:r,custom:e})=>{const n=o.locale.controls.placeholderSearch,{config:s}=o,a=e.getButton("toolControlBarPrimaryButton"),m=k=>{o.fetchImages(k)},d=k=>{const{files:G}=k.target;if(G.length){const S=new FileReader;S.onload=N=>{r.newImage(N.target.result)},S.readAsDataURL(G[0])}},g=()=>{r.selectWebcam(!0)},P=()=>{const k=document.getElementById("fileUpload");k&&k.click()};return M.createElement(Ae,{firstChildMargin:s.enableWebcam&&!o.libraryProvider,show:!0},s.enableUpload&&M.createElement(a,{tool:i.LIBRARY,ariaLabel:o.locale.controls.buttonUpload,onClick:P,icon:M.createElement(h.uploadImage,null),label:o.locale.controls.buttonUpload},M.createElement(l.Input.File,{onChange:d})),o.libraryProvider&&M.createElement(t.Other.ControlsWrapper,null,M.createElement(l.Input.Search,{onChange:m,placeholder:n})),s.enableWebcam&&M.createElement(Le,{tool:i.LIBRARY,onClick:g,icon:M.createElement(h.openWebcam,null),label:o.locale.controls.buttonWebcamOpen}),M.createElement(t.BarSeparator,null))};var at=c("library","active","custom")(p(Ee));import w from"react";const Fe=t.TabWrapper,{Tab:lt}=t,$e=({overlayTool:o,custom:r})=>{const{state:e}=o,n=o.locale.controls,{allBlendModes:s}=o,{blendMode:a}=o,m=r.getButton("toolControlBarSecondaryButton"),d=()=>{o.toolSnapshot()},g=P=>{o.changeBlendMode(P)};return w.createElement(t.ControlsbarContainer,{show:o.isOptionSelected},w.createElement(m,{tool:i.OVERLAY,ariaLabel:n.buttonReset,onClick:o.reset,icon:w.createElement(h.reset,null),label:n.buttonReset}),w.createElement(t.Other.ControlsWrapper,null,w.createElement(l.Spacer,null),w.createElement(Fe,null,w.createElement(lt,{label:n.tabBlendMode},w.createElement(l.Input.CarouselSlider,{showLabel:!1,label:n.carouselBlendMode,defaultIdentifier:a,onSelect:g,list:s})),w.createElement(lt,{label:n.tabOpacity},w.createElement(t.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:n.sliderOpacity,value:e.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:d,onTouchEnd:d}))),w.createElement(t.BarSeparator,null)),w.createElement(t.Other.EmptyDiv,null))};var mt=c("overlayTool","custom")(p($e));import y from"react";import Pe from"styled-components";const Oe=t.TabWrapper,{Tab:pt}=t,We=Pe.input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:!0})`
  ${De.VisuallyHidden}
`,Me=({stickerTool:o,custom:r})=>{const{colorList:e}=o,n=o.locale.controls,s=o.localeColor.colorPicker,a=r.getButton("toolControlBarPrimaryButton"),m=()=>{o.toolSnapshot()},d=()=>{const S=document.getElementById("fileUpload");S&&(S.value=null,S.click())},g=S=>{const{files:N}=S.target;o.addFiles(N)},P=()=>y.createElement("div",null,y.createElement(l.Spacer,{count:2}),y.createElement(t.Slider,{isDisabled:!o.isStickerSelected,style:{width:"280px"},label:n.sliderOpacity,value:o.opacity,min:0,max:1,onMouseUp:m,onTouchEnd:m,onChange:o.changeOpacity}),y.createElement(l.Spacer,{count:2})),k=()=>y.createElement("div",null,y.createElement(l.Spacer,null),y.createElement(Oe,null,y.createElement(pt,{label:n.tabColor},y.createElement(l.Spacer,{count:1}),y.createElement(l.Input.Selection,{isDisabled:!o.isStickerSelected,showLabel:!1,label:n.selectColor},y.createElement(E,{activeSprite:o.id,activeColor:o.tintColor,colors:e,labelsColor:s,isDisabled:!o.isStickerSelected,colorPickerDirection:"top",onChange:o.changeTintColor,onAddSnapshot:o.tintColorSnapshot}))),y.createElement(pt,{label:n.tabOpacity},y.createElement(t.Slider,{isDisabled:!o.isStickerSelected,showLabel:!1,style:{width:"280px"},label:n.sliderOpacity,value:o.opacity,min:0,max:1,onMouseUp:m,onTouchEnd:m,onChange:o.changeOpacity})))),G=()=>o.isCustomStickerEnabled?y.createElement(a,{tool:i.STICKER,ariaLabel:n.buttonUpload,onClick:d,icon:y.createElement(h.uploadImage,null),label:n.buttonUpload},y.createElement(We,{onChange:g})):null;return y.createElement(t.ControlsbarContainer,{show:!0},G(),y.createElement(t.Other.ControlsWrapper,null,o.tintable&&k()||P(),y.createElement(t.BarSeparator,null)),y.createElement(t.Other.EmptyDiv,null))},ct=c("stickerTool","custom")(p(Me));import u from"react";import je from"styled-components";const He=t.ResponsiveTabWrapper,{Tab:J}=t,Ne=je(l.Input.NumericInput)`
  max-width: 55px;
  > div > input {
    text-align: center;
  }
`,Ge=({textTool:o,custom:r})=>{const{colorList:e,backgroundColorList:n}=o,s=o.locale.controls,a=o.localeColor.colorPicker,m=["left","center","right"],d=r.getButton("textAlignment"),g=r.getButton("toolControlBarPrimaryButton"),P=()=>m.map(S=>{const N=ze[S];return u.createElement(d,{tool:S,isDisabled:!o.isTextSelected,ariaLabel:`Align ${S}`,isActive:S===o.alignment,key:S,icon:u.createElement(N,null),onClick:()=>o.changeAlignment(S)})}),k=()=>{o.toolSnapshot()},G=S=>{const N=S?parseFloat(S):0;o.setFontSize(Math.max(10,Math.min(690,N)))};return u.createElement(t.ControlsbarContainer,{show:!0},u.createElement(g,{tool:i.TEXT,ariaLabel:s.buttonNew,onClick:o.add,icon:u.createElement(h.addText,null),label:s.buttonNew}),u.createElement(t.Other.ControlsWrapper,null,u.createElement(l.Spacer,null),u.createElement(He,null,u.createElement(J,{label:s.tabFontSize},u.createElement(Ne,{value:o.fontSize.toFixed(0),onSubmit:G,isDisabled:!o.isTextSelected})),u.createElement(J,{label:s.tabAlignment},u.createElement(l.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:s.selectAlignment},P())),u.createElement(J,{label:s.tabColor},u.createElement(l.Spacer,null),u.createElement(l.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:s.selectFontColor},u.createElement(E,{activeSprite:o.id,activeColor:o.textColor,colors:e,labelsColor:a,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),u.createElement(J,{label:s.tabBgColor},u.createElement(l.Spacer,null),u.createElement(l.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:s.selectBackgroundColor},u.createElement(E,{activeSprite:o.id,activeColor:o.backgroundColor,colors:n,labelsColor:a,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeBackgroundColor,onAddSnapshot:o.backgroundColorSnapshot}))),u.createElement(J,{label:s.tabLineHeight},u.createElement(t.Slider,{isDisabled:!o.isTextSelected,showLabel:!1,label:s.sliderLineSpacing,value:o.lineHeight,min:.5,max:3,onChange:o.changeLineHeight,onMouseUp:k,onTouchEnd:k,snap:1,divider:1,decimal:1}))),u.createElement(t.BarSeparator,null)),u.createElement(t.Other.EmptyDiv,null))},dt=c("textTool","custom")(p(Ge));import j from"react";const Ve=({textDesignTool:o,custom:r})=>{const e=o.locale.controls,n=o.localeColor.colorPicker,{colorList:s}=o,a=r.getButton("toolControlBarSecondaryButton"),m=r.getButton("toolControlBarPrimaryButton");return j.createElement(t.ControlsbarContainer,{show:!0},j.createElement(m,{tool:i.TEXT_DESIGN,ariaLabel:e.buttonNew,onClick:o.add,icon:j.createElement(h.addText,null),label:e.buttonNew}),j.createElement(t.Other.ControlsWrapper,null,j.createElement(l.Input.Selection,{isDisabled:!o.isTextDesignSelected,label:e.selectColor},j.createElement(E,{activeSprite:o.id,activeColor:o.color,colors:s,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextDesignSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),j.createElement(a,{tool:i.TEXT_DESIGN,ariaLabel:e.buttonShuffle,onClick:o.changeSeed,icon:j.createElement(h.shuffle,null),label:e.buttonShuffle}),j.createElement(t.BarSeparator,null))},Ct=c("textDesignTool","custom")(p(Ve));import T from"react";const _e=t.ResponsiveTabWrapper,{Tab:xo}=t,Je=({transformTool:o,custom:r})=>{const e=o.locale.controls,{forceDimensions:n}=o,s=r.getCheckbox(),a=r.getButton("toolControlBarSecondaryButton");return T.createElement(t.ControlsbarContainer,{show:!0},T.createElement(a,{tool:i.TRANSFORM,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:T.createElement(h.reset,null),label:o.locale.controls.buttonReset}),T.createElement(t.Other.ControlsWrapper,null,T.createElement(l.Spacer,null),T.createElement(_e,null,T.createElement(xo,{label:e.tabCropSize},T.createElement(Xe,{isDisabled:n,showLabel:!1,valueHeight:o.localOutputHeight,valueWidth:o.localOutputWidth,onSubmitWidth:o.onPixelWidth,onSubmitHeight:o.onPixelHeight,label:e.inputCropSize,labelHeight:e.inputHeight,labelWidth:e.inputWidth})),T.createElement(xo,{label:e.tabFlipAndRotate},T.createElement(Ye,null)),T.createElement(xo,{label:e.tabResolution},T.createElement(s,{isDisabled:n,style:{paddingTop:"5px",justifyContent:"center"},value:o.lockResolution,checkMarkPosition:"left",label:e.checkboxKeepResolution,onClick:o.changeLockResolution}))),T.createElement(t.BarSeparator,null)),T.createElement(t.Other.EmptyDiv,null))};var bt=c("transformTool","custom")(p(Je));let K=class extends b.Component{render(){const{active:o}=this.props,r=o.tool;return b.createElement(t.Controlsbar,{show:!!r},b.createElement(l.Switch.Index,{type:r},b.createElement(l.Switch.Case,{value:i.FILTER},b.createElement(nt,null)),b.createElement(l.Switch.Case,{value:i.FOCUS},b.createElement(st,null)),b.createElement(l.Switch.Case,{value:i.ADJUSTMENT},b.createElement(et,null)),b.createElement(l.Switch.Case,{value:i.OVERLAY},b.createElement(mt,null)),b.createElement(l.Switch.Case,{value:i.STICKER},b.createElement(ct,null)),b.createElement(l.Switch.Case,{value:i.TEXT},b.createElement(dt,null)),b.createElement(l.Switch.Case,{value:i.TEXT_DESIGN},b.createElement(Ct,null)),b.createElement(l.Switch.Case,{value:i.LIBRARY},b.createElement(at,null)),b.createElement(l.Switch.Case,{value:i.FRAME},b.createElement(it,null)),b.createElement(l.Switch.Case,{value:i.BRUSH},b.createElement(rt,null)),b.createElement(l.Switch.Case,{value:i.TRANSFORM},b.createElement(bt,null))))}};K=v([c("active","config"),p],K);import L from"react";import q from"react";import Ke from"styled-components";const Qe=Ke.div`
  position: relative;
  top: -8px;
  color: ${o=>o.theme.card.foreground};
`,Ze=({adjustmentsTool:o})=>{const r=(e,n)=>{const s=qe[e.identifier];return q.createElement(t.Card,{tool:i.ADJUSTMENT,type:C.MEDIUM,onClick:()=>o.toggleOptionSelection(e.identifier),isActive:e.identifier===o.selectedAdjustmentType,key:`${e.identifier}-${n}`,label:e.name,style:{animationDelay:`${f(n)}s`}},q.createElement(Qe,null,q.createElement(s,null)),q.createElement(t.CardLabel,null,o.locale.items[e.identifier]||e.name))};return q.createElement(t.CardContainer,null,o.items.map(r))};var ut=c("adjustmentsTool")(p(Ze));import z from"react";let Q=class extends z.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{filterTool:r}=this.props;r.toggleCategorySelection(o)};this.renderItem=(o,r)=>{const{filterTool:e}=this.props;return z.createElement(t.Card,{tool:i.FILTER,type:C.MEDIUM,onClick:()=>e.selectFilter(o.identifier,o.defaultIntensity),isActive:e.identifier===o.identifier,key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{animationDelay:`${f(r)}s`}},z.createElement(t.CardLabel,{withBackground:!0},e.locale.categories[o.identifier]||e.locale.items[o.identifier]||o.name))};this.renderCategory=(o,r)=>{const{filterTool:e}=this.props,{selectedCategoryIdentifier:n}=e,s=n===o.identifier;return o.items?z.createElement(t.CategoryContainer,{key:o.identifier},z.createElement(t.Card,{tool:i.FILTER,type:C.LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:o.thumbnailURI,label:o.name,style:{animationDelay:`${f(r)}s`}},z.createElement(t.CardLabel,{withBackground:!0},o.name)),z.createElement(t.ExpandableContainer,{show:s},o.items.map(this.renderItem))):null}}render(){const{filterTool:o}=this.props,{categories:r,config:e,items:n}=o;return e.flattenCategories?z.createElement(t.CardContainer,null,n.map(this.renderItem)):z.createElement(t.CardContainer,null,r.map(this.renderCategory))}};Q=v([c("filterTool","active"),p],Q);import Io from"react";const Re=({focusTool:o})=>{const r=n=>{o.selectFocus(n)},e=(n,s)=>Io.createElement(t.Card,{isActive:n.identifier===o.identifier,tool:i.FOCUS,type:C.MEDIUM,onClick:()=>r(n.identifier),key:`${n.identifier}-${s}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${f(s)}s`}},Io.createElement(t.CardLabel,{withBackground:!0},o.locale.items[n.identifier]||n.name));return Io.createElement(t.CardContainer,null,o.items.map(e))};var ht=c("focusTool")(p(Re));import Bo from"react";const or=({frameTool:o})=>{const r=o.identifier,e=(n,s)=>Bo.createElement(t.Card,{tool:i.FRAME,type:C.MEDIUM,onClick:()=>o.selectFrame(n.identifier),isActive:n.identifier===r,key:`${n.identifier}-${s}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${f(s)}s`,backgroundSize:"60%"}}," ",Bo.createElement(t.CardLabel,{hidden:!0},o.locale.items[n.identifier]||n.name));return Bo.createElement(t.CardContainer,null,o.items.map(e))};var ft=c("frameTool")(p(or));import F from"react";let Z=class extends F.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{library:r}=this.props;r.toggleCategorySelection(o)};this.renderItem=(o,r)=>{const{active:e}=this.props;return F.createElement(t.Card,{tool:i.LIBRARY,type:C.MEDIUM,onClick:()=>e.newImage(o.rawUrl),key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{animationDelay:`${f(r)}s`}})};this.renderCategory=(o,r)=>{const{library:e}=this.props,{selectedCategoryIdentifier:n}=e,s=n===o.identifier;return o.items?F.createElement(t.CategoryContainer,{key:o.identifier},F.createElement(t.Card,{tool:i.LIBRARY,type:C.LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:o.thumbnailURI,label:o.name,style:{animationDelay:`${f(r)}s`}},F.createElement(t.CardLabel,{withBackground:!0},o.name)),F.createElement(t.ExpandableContainer,{show:s},o.items.map(this.renderItem))):null}}render(){const{library:o}=this.props,{query:r,categories:e,items:n,locale:s,config:a}=o;return r?n.length?F.createElement(t.CardContainer,null,n.map(this.renderItem)):F.createElement("p",{"data-test":A.NoResult},s.controls.noResults):a.flattenCategories?F.createElement(t.CardContainer,null,n.map(this.renderItem)):F.createElement(t.CardContainer,null,e.map(this.renderCategory))}};Z=v([c("library","active"),p],Z);import To from"react";const tr=({overlayTool:o})=>{const{identifier:r,items:e,selectOverlay:n,locale:s}=o,a=(m,d)=>To.createElement(t.Card,{tool:i.OVERLAY,type:C.MEDIUM,onClick:()=>n(m.identifier),isActive:m.identifier===r,key:`${m.identifier}-${d}`,image:m.thumbnailURI,label:m.name,style:{animationDelay:`${f(d)}s`}},To.createElement(t.CardLabel,{withBackground:!0},s.items[m.identifier]||m.name));return To.createElement(t.CardContainer,null,e.map(a))};var gt=c("overlayTool")(p(tr));import H from"react";let R=class extends H.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{stickerTool:r}=this.props;r.toggleCategorySelection(o)};this.renderItem=(o,r)=>{const{stickerTool:e}=this.props;return H.createElement(t.Card,{tool:i.STICKER,type:C.MEDIUM,onClick:()=>e.add(o.identifier),key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{backgroundSize:"55%",animationDelay:`${er(r)}s`}},H.createElement(t.CardLabel,{hidden:!0},e.locale.items[o.identifier]||o.name))};this.renderCategory=(o,r)=>{const{stickerTool:e}=this.props,{selectedCategoryIdentifier:n,locale:s}=e,a=n===o.identifier;return o.items?H.createElement(t.CategoryContainer,{key:o.identifier},H.createElement(t.Card,{tool:i.STICKER,type:C.LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:o.thumbnailURI,label:o.name,style:{animationDelay:`${f(r)}s`}},H.createElement(t.CardLabel,{withBackground:!0},s.categories[o.identifier]||o.name)),H.createElement(t.ExpandableContainer,{show:a},o.items.map(this.renderItem))):null}}render(){const{stickerTool:o}=this.props,{categories:r,items:e,config:n}=o;return n.flattenCategories?H.createElement(t.CardContainer,null,e.map(this.renderItem)):H.createElement(t.CardContainer,null,r.map(this.renderCategory))}};R=v([c("stickerTool","active"),p],R);import lo from"react";import rr from"styled-components";const sr=rr.div`
  font-size: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: left top;
`;class ir extends lo.Component{constructor(){super(...arguments);this.getWidth=({fontFamily:o,fontStyle:r,fontWeight:e},n)=>{const s=document.createElement("canvas"),a=s.getContext("2d");return a.font=`${r} ${e} 20px ${o}`,a.fillText(n,0,0),a.measureText(n).width};this.renderItem=(o,r)=>{const{config:e,textTool:n}=this.props,{fontFamily:s,fontWeight:a,fontStyle:m,identifier:d}=o,g=`${o.fontFamily} ${nr.getDisplayFontStyle(o)}`,P=this.getWidth(o,g),k=(e.measurements.basicCard.medium.width-20)/P;return lo.createElement(t.Card,{tool:i.TEXT,type:C.MEDIUM,onClick:()=>n.changeFont(d),isDisabled:!this.textTool.isTextSelected,isActive:n.identifier===d,key:`${o.identifier}-${r}`,label:g,style:{animationDelay:`${f(r)}s`}},lo.createElement(sr,{style:{transform:`scale(${k}) translate(-50%, -50%)`,fontFamily:s,fontStyle:m,fontWeight:a}},g))}}get textTool(){return this.props.textTool}render(){const{textTool:o}=this.props,{fontsLoaded:r,fontFamilies:e}=o;return r?lo.createElement(t.CardContainer,null,e.map(this.renderItem)):null}}var yt=c("textTool","config")(p(ir));import ko from"react";const ar=({textDesignTool:o})=>{const{items:r,changeIdentifier:e,isTextDesignSelected:n,identifier:s}=o,a=(m,d)=>ko.createElement(t.Card,{tool:i.TEXT_DESIGN,type:C.MEDIUM,onClick:()=>e(m.identifier),isDisabled:!n,isActive:s===m.identifier,key:`${m.identifier}-${d}`,image:m.thumbnailURI,label:m.name,style:{animationDelay:`${f(d)}s`,backgroundSize:"60%"}},ko.createElement(t.CardLabel,{hidden:!0},m.name));return ko.createElement(t.CardContainer,null,r.map(a))};var St=c("textDesignTool")(p(ar));import U from"react";import xt from"styled-components";const mr=xt.div`
  svg {
    margin-bottom: 12px;
  }
`,pr=xt.div`
  svg {
    width: ${o=>o.theme.measurements.basicCard.medium.height}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  }

  ${lr} {
    width: ${o=>o.theme.measurements.basicCard.medium.width-32}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height-32}px;
    padding: 6px 0px 24px;
  }
`;let oo=class extends U.Component{constructor(){super(...arguments);this.onCategoryClick=o=>{const{transformTool:r}=this.props;r.toggleCategorySelection(o)};this.renderItem=(o,r)=>{const{transformTool:e,config:n}=this.props,{locale:s}=e,a=e.checkIfTransformThumbnailExits(o.thumbnailURI),m=mo.crops[o.identifier]||mo.crops.imgly_transform_common_custom,d=U.createElement(t.CardLabel,null,s.items[o.identifier]||o.name),g=a?d:U.createElement(pr,null,U.createElement(m,{main:n.theme.transform.crops.main,highlight:n.theme.transform.crops.highlight,shadow:n.theme.transform.crops.shadow}),d);return U.createElement(t.Card,{tool:i.TRANSFORM,type:C.MEDIUM,onClick:()=>e.changeIdentifier(o.identifier,!0),key:`${o.identifier}-${r}`,image:o.thumbnailURI,label:o.name,style:{backgroundSize:"55%",animationDelay:`${f(r)}s`}},g)};this.renderCategory=(o,r)=>{const{transformTool:e}=this.props,{selectedCategoryIdentifier:n,locale:s}=e,a=n===o.identifier;if(!o.items)return null;const m=e.checkIfTransformThumbnailExits(o.thumbnailURI),d=U.createElement(t.CardLabel,null,s.categories[o.identifier]||o.name),g=m?d:U.createElement(mr,null,mo.categories[o.identifier]&&U.createElement(mo.categories[o.identifier]),d);return U.createElement(t.CategoryContainer,{key:o.identifier},U.createElement(t.Card,{tool:i.TRANSFORM,type:C.LARGE,onClick:()=>this.onCategoryClick(o.identifier),image:m?o.thumbnailURI:"",label:o.name,style:{animationDelay:`${f(r)}s`}},g),U.createElement(t.ExpandableContainer,{show:a},o.items.map(this.renderItem)))}}render(){const{transformTool:o}=this.props,{categories:r,config:e,items:n}=o;return e.flattenCategories?U.createElement(t.CardContainer,null,n.map(this.renderItem)):U.createElement(t.CardContainer,null,r.map(this.renderCategory))}};oo=v([c("transformTool","config"),p],oo);let to=class extends L.Component{constructor(){super(...arguments);this.getToolItemsComponent=o=>{switch(o){case i.LIBRARY:return L.createElement(Z,null);case i.FILTER:return L.createElement(Q,null);case i.FOCUS:return L.createElement(ht,null);case i.ADJUSTMENT:return L.createElement(ut,null);case i.OVERLAY:return L.createElement(gt,null);case i.STICKER:return L.createElement(R,null);case i.TEXT:return L.createElement(yt,null);case i.TEXT_DESIGN:return L.createElement(St,null);case i.FRAME:return L.createElement(ft,null);case i.TRANSFORM:return L.createElement(oo,null);default:return null}}}render(){const{library:o,active:r}=this.props,e=r.tool;return e===i.BRUSH||e===i.LIBRARY&&!o.libraryProvider?null:L.createElement(t.Itemsbar,{"data-test":A.ToolControlBar,show:!!e},this.getToolItemsComponent(e))}};to=v([c("active","library"),p],to);const hr=cr.div`
  position: absolute;
  width: 100%;
  height: ${o=>o.theme.measurements.basicToolControlBar.maxHeight}px;
  bottom: 0;
  left: 0;
  background: ${o=>o.theme.webcam.backdrop};
  z-index: ${o=>o.theme.measurements.zIndex.disable};
`;let eo=class extends $.Component{static getDerivedStateFromError(o){return console.error(o),{hasError:!0}}render(){const{active:o}=this.props;return $.createElement(l.Container,{"data-test":A.EditorContainer},o.isWebcam?$.createElement(hr,null):null,$.createElement(ur,null),$.createElement(br,null,$.createElement(Cr,null),$.createElement(dr,null),$.createElement(K,null),$.createElement(to,null),$.createElement(tt,null)))}};eo=v([c("active"),p],eo);class It extends po.Component{componentDidMount(){const{editor:o,storeProps:r}=this.props;this.editor=o,this.storeProps=r;const e=new yr(this.editor.configStore.config.custom.components,{}),n={getDialog:e.getDialog,getButton:e.getButton,getColorItem:e.getColorItem,getCheckbox:e.getCheckbox};this.storeProps.custom=n,this.forceUpdate()}render(){return this.storeProps?po.createElement(fr,V({},this.storeProps),po.createElement(gr,{theme:V(V({},this.editor.configStore.theme),{measurements:this.editor.configStore.measurements})},po.createElement(eo,null))):null}}export{It as BasicUI};
