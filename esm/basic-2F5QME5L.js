import{A as qo,B as Qo,E as Zo,G as Ro,H as d,I as L,J as ot,K as tt,L as et,M as rt,N as nt,O as st,b as a,c as Mo,d as f,e as Ho,f as lo,h as jo,m as mo,n as No,o as Go,p as Vo,q as Xo,r as c,t as po,u as Yo,v as _o,w as Jo,x as Ko,y as T,z as X}from"./chunk-SZFRGKD2.js";import{Fa as x,Ja as g,K as Wo,Ka as zo,V as so,a as V,b as Po,ba as ko,f as k,ga as Bo,ja as G,oa as io,t as i,ta as ao,v as u}from"./chunk-27UYCARC.js";import So from"react";import{ThemeProvider as pn}from"styled-components";import $ from"react";import ln from"styled-components";import J from"react";import Oe from"react";import Ae from"styled-components";var it=Ae(mo)`
  margin: 2px;
  min-width: ${o=>o.theme.measurements.basicCard.large.width}px;
  height: ${o=>o.theme.measurements.basicCard.large.height}px;
  color: ${o=>o.theme.card.foreground};
`;import Ee from"styled-components";var at=Ee(mo)`
  margin: 2px;
  min-width: ${o=>o.theme.measurements.basicCard.medium.width}px;
  height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  color: ${o=>o.theme.card.foreground};
`;var Io=o=>{let t=o.type===u.LARGE,e=at;return t&&(e=it),Oe.createElement(e,V({},o))};Io.defaultProps={type:u.MEDIUM};import $e from"styled-components";var lt=$e(lo).attrs(()=>({"data-test":x.CardContainer}))`
  transition-property: width;
  transition-duration: 0.4s;
  transition-timing-function: ease-in;
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
`;import De from"styled-components";var mt=De(No)`
  &&& {
    min-height: 32px;
    font-size: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.size}px;
    letter-spacing: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.letterSpacing}px;
    text-transform: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.case};
  }
`;import Pe from"styled-components";var pt=Pe.div`
  display: flex;
  /* This fixes an IE11 issue where the items are behind the category */
  flex: 1 0 auto;
`;import Me,{css as ct}from"styled-components";var dt=Me.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  height: auto;
  transition: max-height 0.4s ease-in-out;
  ${o=>o.show?ct`
          max-height: 80px;
        `:ct`
          max-height: 0px;
        `}
`,Ct=dt;dt.defaultProps={show:!0};import We from"styled-components";var ze=We.div`
  text-align: -moz-center;
  text-align: center;
  text-align: -webkit-center;
  margin: 0 10vw;
  height: auto;
  box-shadow: ${o=>o.theme.toolControlBar.shadow};
  @media all and (min-width: 0) and (max-width: 599px) {
    margin: 0 5vw;
  }
`,ft=ze;import He from"styled-components";var je=He.div`
  width: 100px;
  @media all and (min-width: 0) and (max-width: 599px) {
    width: 42px;
  }
`,ut=je;import Ne,{css as Ge}from"styled-components";var bt=Ne.div.attrs(()=>({"data-test":x.ToolControlBarExpandableControls}))`
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

  ${({show:o})=>o&&Ge`
      transform: translateY(-100%) scaleY(1);
    `}
`;import _ from"react";import tr from"styled-components";import Ve from"react";import Xe from"styled-components";var Ye=Xe.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,_e=({label:o,className:t,children:e})=>Ve.createElement(Ye,{"aria-label":o,className:t},e),D=_e;import B from"react";import xt from"styled-components";import Je from"styled-components";var Ke=Je.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Xo.scale} 0.2s linear;
  animation-fill-mode: both;
  height: 40px;
  min-width: 350px;
  @media all and (min-width: 0) and (max-width: 599px) {
    min-width: 280px;
  }
`,ht=Ke;import Tt from"react";import qe,{css as Qe}from"styled-components";var gt=Qe`
  background: ${o=>o.theme.tabTitle.activeBackground};
  color: ${o=>o.theme.tabTitle.activeForeground};
  border-bottom: 1px solid ${o=>o.theme.tabTitle.activeBorderColor};
`,Ze=qe(po)`
  display: inline-flex;
  align-items: center;
  font-size: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.size}px;
  letter-spacing: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.letterSpacing}px;
  text-transform: ${o=>o.theme.measurements.fontSystem.basicUITabLabel.case};
  color: ${o=>o.theme.tabTitle.foreground};
  border-radius: 0px;
  padding: 1px 12px 2px;
  background: ${o=>o.theme.tabTitle.background};

  ${({isActive:o})=>o&&gt}

  &:active {
    ${gt}
  }

  @media all and (min-width: 0) and (max-width: 599px) {
    max-width: 150px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,co=class extends Tt.Component{constructor(){super(...arguments);this.onClick=()=>{let{label:t,onClick:e}=this.props;e(t)}}render(){let{activeTab:t,label:e}=this.props;return Tt.createElement(Ze,{ariaLabel:e,isActive:t===e,onClick:this.onClick},e)}};var Re=xt(jo)`
  display: inline-flex;
  padding: 0 4px;
  height: 20px;
  font-size: 16px;
`,or=xt(Yo)`
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
`,yt=class extends B.Component{constructor(t){super(t);this.onTabClick=t=>{this.setState({activeTab:t,toggleExtend:!1})};this.getDropUp=()=>{let{length:t}=this.props,{toggleExtend:e}=this.state,n=B.Children.toArray(this.props.children),s=B.Children.count(this.props.children),p=n.slice(t,s);return B.createElement(or,{show:e},p.map(l=>{let m=l.props.label||"";return B.createElement(po,{onClick:()=>this.onTabClick(m),key:m,ariaLabel:"More Options"},m)}))};this.extend=()=>{this.setState(({toggleExtend:t})=>({toggleExtend:!t}))};this.getExtension=()=>B.createElement(Re,{onClick:this.extend,ariaLabel:"Select Next"},"...");let e=B.Children.count(this.props.children),n=B.Children.toArray(this.props.children);this.state={activeTab:e&&n[0].props&&n[0].props.label||"",toggleExtend:!1}}render(){let{length:t}=this.props,{activeTab:e,toggleExtend:n}=this.state,s=B.Children.toArray(this.props.children).slice(0,t),p=B.Children.count(this.props.children)>t;return B.createElement("div",null,s.map(l=>{if(l){let m=l.props.label||"";return B.createElement(co,{activeTab:e,key:m,label:m,onClick:this.onTabClick})}return null}),p?this.getExtension():null,n?this.getDropUp():null,B.Children.map(this.props.children,l=>!l||l.props&&l.props.label!==e?null:B.createElement(ht,{key:l.props.label},l.props.children)))}},Y=yt;var er=tr.div`
  position: relative;
  white-space: nowrap;
  display: flex;
  transition: all 0.2s linear;
`,fo=class extends _.Component{constructor(t){super(t);this.updateLength=()=>{let{maxWidth:t,children:e}=this.props,n=0;if(t)n=t;else{let l=window.innerWidth,m=l>600?300:200;n=l-m}let s=_.Children.count(e),p=n-s*fo.TAB_WIDTH;if(p<0){let l=Math.round(Math.abs(p/fo.TAB_WIDTH));this.setState({length:s-l})}};this.state={length:_.Children.count(this.props.children)}}componentDidMount(){window.addEventListener("resize",this.updateLength),this.updateLength()}componentWillUnmount(){window.removeEventListener("resize",this.updateLength)}render(){let{children:t}=this.props,{length:e}=this.state;return e?_.createElement(er,null,_.createElement(Y,{length:e},t)):null}},Co=fo;Co.TAB_WIDTH=120;import rr,{css as nr}from"styled-components";var sr=rr.div`
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    ${o=>o.full?nr`
            left: -24px;
            width: calc(100% + 48px);
          `:`
      left: 24px;
      width: calc(100% - 48px);
    `}
    border-bottom: 1px solid ${o=>o.theme.toolControlBar.separatorColor};
  }
`,St=sr;import ir from"styled-components";var ar=ir(c.Input.Slider).attrs(()=>({centerSlider:!0}))`
  max-width: 224px;
`,kt=ar;import lr,{css as mr}from"styled-components";var pr=lr.div.attrs(()=>({"data-test":x.CategoryItemsContainer}))`
  visibility: hidden;
  opacity: 0;
  display: none;

  ${({show:o})=>o&&mr`
      opacity: 1;
      visibility: visible;
      display: flex;
    `}
`,Bt=pr;import cr,{css as It}from"styled-components";var vo=cr.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: ${o=>o.theme.measurements.zIndex.toolControlBar};

  ${o=>o.show?It`
          transition-timing-function: ease-in;
          transition-duration: 0.3s;
          transition-property: all;
          padding: 2px 0px;
          background: ${o.theme.toolControlBar.background};
          color: ${o.theme.toolControlBar.inputLabelForeground};
        `:It`
          max-height: 0px;
        `}
`;vo.defaultProps={show:!0};import dr from"styled-components";var Cr=dr.div`
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
`,vt=Cr;import Ft from"react";import ur,{css as At}from"styled-components";import uo,{css as fr}from"styled-components";var Ut=uo.span`
  display: flex;
  cursor: pointer;
  z-index: ${o=>o.theme.measurements.zIndex.label};
  transition: bottom 0.3s linear;
`,wt=fr`
  background-color: ${o=>o.theme.toolbar.activeBackground};
  color: ${o=>o.theme.toolbar.activeForeground};
`,bo=uo(Ho)`
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

  ${({isActive:o})=>o&&wt}

  &:active {
    ${wt}
  }

  svg {
    display: flex;
    transition: visibility 0s, opacity 0.5s linear;
    visibility: visible;
    opacity: 1;
  }
`,Lt=uo.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ho=uo.div.attrs({role:"none"})`
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
`;var br=ur.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  width: 100%;
  transition: height 0.2s ease-out, display 0.1s fade-out;
  background-color: ${o=>o.theme.toolbar.background};
  color: ${o=>o.theme.toolbar.foreground};
  z-index: ${o=>o.theme.measurements.zIndex.toolbar};

  ${o=>o.show?At`
          height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
          ${bo} {
            svg {
              visibility: hidden;
              opacity: 0;
              height: 0;
            }
          }
          ${ho} {
            height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
          }
        `:At`
          height: ${o.theme.measurements.basicUIToolbar.openHeight}px;
        `}
`,Et=({show:o=!1,children:t})=>Ft.createElement(br,{"data-test":x.Toolbar,show:o},Ft.createElement(lo,null,t));import To from"react";var Ot=({children:o,label:t,isActive:e,onClick:n})=>To.createElement(ho,{"aria-haspopup":!0,"aria-expanded":e},To.createElement(bo,{"data-test":x.ToolbarItem,ariaLabel:t,onClick:n,isActive:e},To.createElement(Lt,null,o,To.createElement(Ut,null,t))));import hr,{css as $t}from"styled-components";var Tr=hr.li.attrs({role:"none"})`
  ${o=>o.active?$t`
          height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
        `:$t`
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
`,Dt=Tr;var r={CardContainer:lt,ExpandableContainer:Bt,CategoryContainer:pt,Card:Io,CardAvatar:Go,CardLabel:mt,Toolbar:{Index:Et,Item:Ot,Separator:Dt},BarSeparator:St,ItemsSeparator:vt,Itemsbar:vo,Controlsbar:Ct,ControlsbarContainer:bt,ResponsiveTabWrapper:Co,Slider:kt,TabWrapper:Y,Tab:D,Other:{ControlsWrapper:ft,EmptyDiv:ut}};var gr=({config:o,active:t})=>{let{tools:e}=o,n=t.tool,s=m=>{let C=o.state.config[m];if(C.icon){let h=C.icon;return J.createElement(h,null)}let S=Jo[m];return J.createElement(S,null)||null},p=m=>o.locale[m].title,l=(m,C)=>m&&J.createElement(r.Toolbar.Item,{onClick:()=>t.selectTool(m),key:m,label:p(m),isActive:n===m},s(m))||J.createElement(r.Toolbar.Separator,{key:m+C,active:!!n});return J.createElement(r.Toolbar.Index,{show:!!n},e.map(l))},Pt=f("config","active")(a(gr));import b from"react";import P,{useRef as Mt}from"react";var xr=({adjustmentsTool:o,custom:t})=>{let e=o.selectedAdjustmentType.toLowerCase(),n=o[e],s=Mt(!1),p=Mt(n),l=t.getButton("toolControlBarSecondaryButton"),m=C=>{s.current&&C!==p.current&&(o.toolSnapshot(),s.current=!1,p.current=C)};return P.createElement(r.ControlsbarContainer,{show:Boolean(e)},P.createElement(l,{tool:i.ADJUSTMENT,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:P.createElement(T.reset,null),label:o.locale.controls.buttonReset}),P.createElement(r.Other.ControlsWrapper,null,P.createElement(c.Spacer,{count:2}),P.createElement(r.Slider,{"aria-hidden":!e,adjust:!0,style:{width:"280px"},label:o.selectedOptionLabel,value:n,onChange:C=>{o.editAdjustments({type:e,value:C}),s.current=n!==C},onMouseUp:m,onTouchEnd:m,snap:0}),P.createElement(c.Spacer,{count:2}),P.createElement(r.BarSeparator,null)),P.createElement(r.Other.EmptyDiv,null))},Wt=f("adjustmentsTool","custom")(a(xr));import F from"react";import go from"react";var zt=a(()=>{let{brushTool:o}=d(),{colorList:t,locale:e,localeColor:n}=o,s=e.controls,p=n.colorPicker;return go.createElement(go.Fragment,null,go.createElement(c.Input.Selection,{showLabel:!1,label:s.selectColor},go.createElement(L,{tool:i.BRUSH,activeColor:o.color,colors:t,labelsColor:p,colorPickerDirection:"top",onChange:o.changeColor})))});import yr from"react";var Ht=a(()=>{let{brushTool:o}=d(),{locale:t}=o,e=t.controls;return yr.createElement(r.Slider,{"data-test":x.BrushHardness,style:{width:"280px"},showLabel:!1,label:e.sliderHardness,value:o.hardness,min:0,max:1,onChange:o.changeHardness})});import Sr from"react";var jt=a(()=>{let{brushTool:o}=d(),{locale:t}=o,e=t.controls;return Sr.createElement(r.Slider,{"data-test":x.BrushSize,style:{width:"280px"},showLabel:!1,label:e.sliderSize,value:o.relativeSize,min:1,max:100,divider:1,onChange:o.changeRelativeSize})});var kr=r.TabWrapper,{Tab:Uo}=r,Nt=a(()=>{let{brushTool:o,custom:t}=d(),{locale:e,config:n}=o,{basicUIToolControlBarTabsOrder:s}=n,p=e.controls,l=t.getButton("toolControlBarSecondaryButton"),m=C=>{switch(C){case io.BrushColor:return F.createElement(Uo,{key:C,label:p.tabColor},F.createElement(zt,null));case io.BrushSize:return F.createElement(Uo,{key:C,label:p.tabSize},F.createElement(jt,null));case io.BrushHardness:return F.createElement(Uo,{key:C,label:p.tabHardness},F.createElement(Ht,null));default:return null}};return F.createElement(r.ControlsbarContainer,{style:{justifyContent:"center"},show:!0},F.createElement(l,{tool:i.BRUSH,ariaLabel:p.buttonReset,onClick:o.reset,icon:F.createElement(T.reset,null),isDisabled:!o.isDirty,label:p.buttonReset}),F.createElement(r.Other.ControlsWrapper,null,F.createElement(c.Input.Form,null,F.createElement(kr,null,s.map(C=>m(C))))))});import q from"react";import K from"react";var Gt=a(()=>{let{filterTool:o}=d(),{state:t}=o,e=o.locale.controls,n=()=>{o.toolSnapshot()};return K.createElement(r.Other.ControlsWrapper,null,K.createElement(c.Spacer,{count:2}),K.createElement(r.Slider,{"aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:e.sliderIntensity,value:t.intensity,min:0,max:1,onMouseUp:n,onTouchEnd:n,onChange:o.changeIntensity,snap:t.isDuotone?.5:null}),K.createElement(c.Spacer,{count:2}),K.createElement(r.BarSeparator,null))});var Vt=a(()=>{let{filterTool:o,custom:t}=d(),{config:e}=o,{basicUIToolControlBarTabsOrder:n}=e,s=t.getButton("toolControlBarSecondaryButton"),p=l=>{switch(l){case Wo.FilterIntensity:return q.createElement(Gt,{key:l});default:return null}};return q.createElement(r.ControlsbarContainer,{show:o.isOptionSelected},q.createElement(s,{tool:i.FILTER,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:q.createElement(T.reset,null),label:o.locale.controls.buttonReset}),n.map(l=>p(l)),q.createElement(r.Other.EmptyDiv,null))});import M from"react";var Xt=a(()=>{let{focusTool:o,custom:t}=d(),e=o.locale.controls,n=t.getButton("toolControlBarSecondaryButton"),s=()=>{o.toolSnapshot(e.sliderIntensity)};return M.createElement(r.ControlsbarContainer,{show:o.isOptionSelected},M.createElement(n,{tool:i.FOCUS,ariaLabel:e.buttonReset,onClick:o.reset,icon:M.createElement(T.reset,null),label:e.buttonReset}),M.createElement(r.Other.ControlsWrapper,null,M.createElement(c.Spacer,{count:2}),M.createElement(r.Slider,{"aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:e.sliderIntensity,value:o.relativeIntensity,min:0,max:100,divider:1,onChange:o.changeRelativeIntensity,onMouseUp:s,onTouchEnd:s}),M.createElement(c.Spacer,{count:2}),M.createElement(r.BarSeparator,null)),M.createElement(r.Other.EmptyDiv,null))});import I from"react";import Yt from"react";var _t=a(()=>{let{frameTool:o}=d(),t=o.locale.controls,e=o.localeColor.colorPicker,{colorList:n}=o;return Yt.createElement(c.Input.Selection,{label:t.selectColor,showLabel:!1},Yt.createElement(L,{tool:i.FRAME,activeColor:o.color,colors:n,labelsColor:e,colorPickerDirection:"top",onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))});import Br from"react";var Jt=a(()=>{let{frameTool:o}=d(),t=o.locale.controls,e=()=>{o.toolSnapshot(t.sliderOpacity)};return Br.createElement(r.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:t.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:e,onTouchEnd:e})});import Ir from"react";var Kt=a(()=>{let{frameTool:o}=d(),t=o.locale.controls,e=()=>{o.toolSnapshot(t.sliderSize)};return Ir.createElement(r.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:t.sliderSize,value:o.size,min:o.minSize,max:o.maxSize,divider:1,onChange:o.changeWidth,onMouseUp:e,onTouchEnd:e})});var vr=r.TabWrapper,{Tab:wo}=r,qt=a(()=>{let{frameTool:o,custom:t}=d(),e=o.locale.controls,{tintable:n,config:s}=o,{basicUIToolControlBarTabsOrder:p}=s,l=t.getButton("toolControlBarSecondaryButton"),m=C=>{switch(C){case so.FrameOpacity:return I.createElement(wo,{key:C,label:e.tabOpacity},I.createElement(Jt,null));case so.FrameSize:return I.createElement(wo,{key:C,label:e.tabSize},I.createElement(Kt,null));case so.FrameColor:return n&&I.createElement(wo,{key:C,label:e.tabColor},I.createElement(_t,null));default:return null}};return I.createElement(r.ControlsbarContainer,{show:o.isOptionSelected},I.createElement(l,{tool:i.FRAME,ariaLabel:e.buttonReset,onClick:o.reset,icon:I.createElement(T.reset,null),label:e.buttonReset}),I.createElement(r.Other.ControlsWrapper,null,I.createElement(c.Spacer,null),I.createElement(vr,null,p.map(C=>m(C))),I.createElement(r.BarSeparator,null)),I.createElement(r.Other.EmptyDiv,null))});import W from"react";import Ur,{css as wr}from"styled-components";var Lr=Ur(r.ControlsbarContainer)`
  ${o=>o.firstChildMargin&&wr`
      > :first-child {
        margin-right: 16px;
      }
    `}
`,Fr=({library:o,active:t,custom:e})=>{let n=o.locale.controls.placeholderSearch,{config:s}=o,p=e.getButton("toolControlBarPrimaryButton"),l=h=>{o.fetchImages(h)},m=h=>{let{files:N}=h.target;if(N.length){let Do=new FileReader;Do.onload=Fe=>{t.newImage(Fe.target.result)},Do.readAsDataURL(N[0])}},C=()=>{t.selectWebcam(!0)},S=()=>{let h=document.getElementById("fileUpload");h&&h.click()};return W.createElement(Lr,{firstChildMargin:s.enableWebcam&&!o.libraryProvider,show:!0},s.enableUpload&&W.createElement(p,{tool:i.LIBRARY,ariaLabel:o.locale.controls.buttonUpload,onClick:S,icon:W.createElement(T.uploadImage,null),label:o.locale.controls.buttonUpload},W.createElement(c.Input.File,{onChange:m})),o.libraryProvider&&W.createElement(r.Other.ControlsWrapper,null,W.createElement(c.Input.Search,{onChange:l,placeholder:n})),s.enableWebcam&&W.createElement(st,{tool:i.LIBRARY,onClick:C,icon:W.createElement(T.openWebcam,null),label:o.locale.controls.buttonWebcamOpen}),W.createElement(r.BarSeparator,null))},Qt=f("library","active","custom")(a(Fr));import A from"react";import Ar from"react";var Zt=a(()=>{let{overlayTool:o}=d(),t=o.locale.controls,{blendMode:e,allBlendModes:n}=o,s=p=>{o.changeBlendMode(p)};return Ar.createElement(c.Input.CarouselSlider,{showLabel:!1,label:t.carouselBlendMode,defaultIdentifier:e,onSelect:s,list:n})});import Er from"react";var Rt=a(()=>{let{overlayTool:o}=d(),t=o.locale.controls,{state:e}=o,n=()=>{o.toolSnapshot()};return Er.createElement(r.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:t.sliderOpacity,value:e.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:n,onTouchEnd:n})});var Or=r.TabWrapper,{Tab:oe}=r,te=a(()=>{let{overlayTool:o,custom:t}=d(),{config:e}=o,{basicUIToolControlBarTabsOrder:n}=e,s=o.locale.controls,p=t.getButton("toolControlBarSecondaryButton"),l=m=>{switch(m){case ko.OverlayBlendMode:return A.createElement(oe,{key:m,label:s.tabBlendMode},A.createElement(Zt,null));case ko.OverlayOpacity:return A.createElement(oe,{key:m,label:s.tabOpacity},A.createElement(Rt,null));default:return null}};return A.createElement(r.ControlsbarContainer,{show:o.isOptionSelected},A.createElement(p,{tool:i.OVERLAY,ariaLabel:s.buttonReset,onClick:o.reset,icon:A.createElement(T.reset,null),label:s.buttonReset}),A.createElement(r.Other.ControlsWrapper,null,A.createElement(c.Spacer,null),A.createElement(Or,null,n.map(m=>l(m))),A.createElement(r.BarSeparator,null)),A.createElement(r.Other.EmptyDiv,null))});import E from"react";import Dr from"styled-components";import xo from"react";var ee=a(()=>{let{stickerTool:o}=d(),t=o.locale.controls,e=o.localeColor.colorPicker,{colorList:n}=o;return xo.createElement(xo.Fragment,null,xo.createElement(c.Input.Selection,{isDisabled:!o.isStickerSelected,showLabel:!1,label:t.selectColor},xo.createElement(L,{tool:i.STICKER,activeSprite:o.id,activeColor:o.tintColor,colors:n,labelsColor:e,isDisabled:!o.isStickerSelected,colorPickerDirection:"top",onChange:o.changeTintColor,onAddSnapshot:o.tintColorSnapshot})))});import $r from"react";var re=a(()=>{let{stickerTool:o}=d(),t=o.locale.controls,e=()=>{o.toolSnapshot()};return $r.createElement(r.Slider,{isDisabled:!o.isStickerSelected,showLabel:!1,style:{width:"280px"},label:t.sliderOpacity,value:o.opacity,min:0,max:1,onMouseUp:e,onTouchEnd:e,onChange:o.changeOpacity})});var Pr=r.TabWrapper,{Tab:ne}=r,Mr=Dr.input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:!0})`
  ${Vo.VisuallyHidden}
`,se=a(()=>{let{stickerTool:o,custom:t}=d(),{config:e}=o,{basicUIToolControlBarTabsOrder:n}=e,s=o.locale.controls,p=t.getButton("toolControlBarPrimaryButton"),l=()=>{let h=document.getElementById("fileUpload");h&&(h.value=null,h.click())},m=h=>{let{files:N}=h.target;o.addFiles(N)},C=h=>{switch(h){case Bo.StickerColor:return o.tintable?E.createElement(ne,{key:h,label:s.tabColor},E.createElement(ee,null)):null;case Bo.StickerOpacity:return E.createElement(ne,{key:h,label:s.tabOpacity},E.createElement(re,null));default:return null}},S=()=>o.isCustomStickerEnabled?E.createElement(p,{tool:i.STICKER,ariaLabel:s.buttonUpload,onClick:l,icon:E.createElement(T.uploadImage,null),label:s.buttonUpload},E.createElement(Mr,{onChange:m})):null;return E.createElement(r.ControlsbarContainer,{show:!0},S(),E.createElement(r.Other.ControlsWrapper,null,E.createElement(Pr,null,n.map(h=>C(h))),E.createElement(r.BarSeparator,null)),E.createElement(r.Other.EmptyDiv,null))});import y from"react";import ie from"react";var ae=a(()=>{let{textTool:o}=d(),{backgroundColorList:t}=o,e=o.locale.controls,n=o.localeColor.colorPicker;return ie.createElement(c.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:e.selectBackgroundColor},ie.createElement(L,{tool:i.TEXT,activeSprite:o.id,activeColor:o.backgroundColor,colors:t,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeBackgroundColor,onAddSnapshot:o.backgroundColorSnapshot}))});import Wr from"react";import zr from"styled-components";var Hr=zr(c.Input.NumericInput)`
  max-width: 55px;
  > div > input {
    text-align: center;
  }
`,le=a(()=>{let{textTool:o}=d(),t=e=>{let n=e?parseFloat(e):0;o.setFontSize(Math.max(10,Math.min(690,n)))};return Wr.createElement(Hr,{value:o.fontSize.toFixed(0),onSubmit:t,isDisabled:!o.isTextSelected})});import jr from"react";var me=a(()=>{let{textTool:o}=d(),t=o.locale.controls,e=()=>{o.toolSnapshot()};return jr.createElement(r.Slider,{isDisabled:!o.isTextSelected,showLabel:!1,label:t.sliderLineSpacing,value:o.lineHeight,min:.5,max:3,onChange:o.changeLineHeight,onMouseUp:e,onTouchEnd:e,snap:1,divider:1,decimal:1})});import Lo from"react";var pe=a(()=>{let{textTool:o,custom:t}=d(),e=o.locale.controls,n=["left","center","right"],s=t.getButton("textAlignment");return Lo.createElement(c.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:e.selectAlignment,"data-test":x.TextAlignment},n.map(p=>{let l=Ko[p];return Lo.createElement(s,{tool:p,isDisabled:!o.isTextSelected,ariaLabel:`Align ${p}`,isActive:p===o.alignment,key:p,icon:Lo.createElement(l,null),onClick:()=>o.changeAlignment(p)})}))});import ce from"react";var de=a(()=>{let{textTool:o}=d(),{colorList:t}=o,e=o.locale.controls,n=o.localeColor.colorPicker;return ce.createElement(c.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:e.selectFontColor},ce.createElement(L,{tool:i.TEXT,activeSprite:o.id,activeColor:o.textColor,colors:t,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))});var Nr=r.ResponsiveTabWrapper,Ce=a(()=>{let{textTool:o,custom:t}=d(),{config:e}=o,{basicUIToolControlBarTabsOrder:n}=e,s=o.locale.controls,p=t.getButton("toolControlBarPrimaryButton"),l=m=>{switch(m){case G.FontSize:return y.createElement(D,{key:m,label:s.tabFontSize},y.createElement(le,null));case G.TextAligment:return y.createElement(D,{key:m,label:s.tabAlignment},y.createElement(pe,null));case G.TextColor:return y.createElement(D,{key:m,label:s.tabColor},y.createElement(de,null));case G.BackgroundColor:return y.createElement(D,{key:m,label:s.tabBgColor},y.createElement(ae,null));case G.LineSpacing:return y.createElement(D,{key:m,label:s.tabLineHeight},y.createElement(me,null));default:return null}};return y.createElement(r.ControlsbarContainer,{show:!0},y.createElement(p,{tool:i.TEXT,ariaLabel:s.buttonNew,onClick:o.add,icon:y.createElement(T.addText,null),label:s.buttonNew}),y.createElement(r.Other.ControlsWrapper,null,y.createElement(c.Spacer,null),y.createElement(Nr,null,n.map(m=>l(m))),y.createElement(r.BarSeparator,null)),y.createElement(r.Other.EmptyDiv,null))});import z from"react";var Gr=({textDesignTool:o,custom:t})=>{let e=o.locale.controls,n=o.localeColor.colorPicker,{colorList:s}=o,p=t.getButton("toolControlBarSecondaryButton"),l=t.getButton("toolControlBarPrimaryButton");return z.createElement(r.ControlsbarContainer,{show:!0},z.createElement(l,{tool:i.TEXT_DESIGN,ariaLabel:e.buttonNew,onClick:o.add,icon:z.createElement(T.addText,null),label:e.buttonNew}),z.createElement(r.Other.ControlsWrapper,null,z.createElement(c.Input.Selection,{isDisabled:!o.isTextDesignSelected,label:e.selectColor},z.createElement(L,{tool:i.TEXT_DESIGN,activeSprite:o.id,activeColor:o.color,colors:s,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextDesignSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),z.createElement(p,{tool:i.TEXT_DESIGN,ariaLabel:e.buttonShuffle,onClick:o.changeSeed,icon:z.createElement(T.shuffle,null),label:e.buttonShuffle}),z.createElement(r.BarSeparator,null))},fe=f("textDesignTool","custom")(a(Gr));import v from"react";import Vr from"react";var ue=a(()=>{let{transformTool:o}=d(),t=o.locale.controls,{forceDimensions:e}=o;return Vr.createElement(nt,{isDisabled:e,showLabel:!1,valueHeight:o.localOutputHeight,valueWidth:o.localOutputWidth,onSubmitWidth:o.onPixelWidth,onSubmitHeight:o.onPixelHeight,label:t.inputCropSize,labelHeight:t.inputHeight,labelWidth:t.inputWidth})});import Xr from"react";var be=()=>Xr.createElement(ot,null);import Yr from"react";var he=a(()=>{let{transformTool:o,custom:t}=d(),e=o.locale.controls,{forceDimensions:n}=o,s=t.getCheckbox();return Yr.createElement(s,{tool:i.TRANSFORM,isDisabled:n,style:{paddingTop:"5px",justifyContent:"center"},value:o.lockResolution,checkMarkPosition:"left",label:e.checkboxKeepResolution,onClick:o.changeLockResolution})});var _r=r.ResponsiveTabWrapper,{Tab:Fo}=r,Te=a(()=>{let{transformTool:o,custom:t}=d(),{config:e}=o,{basicUIToolControlBarTabsOrder:n}=e,s=o.locale.controls,p=t.getButton("toolControlBarSecondaryButton"),l=m=>{switch(m){case ao.FlipRotate:return v.createElement(Fo,{key:m,label:s.tabFlipAndRotate},v.createElement(be,null));case ao.Resolution:return v.createElement(Fo,{key:m,label:s.tabResolution},v.createElement(he,null));case ao.CropSize:return v.createElement(Fo,{key:m,label:s.tabCropSize},v.createElement(ue,null));default:return null}};return v.createElement(r.ControlsbarContainer,{show:!0},v.createElement(p,{tool:i.TRANSFORM,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:v.createElement(T.reset,null),label:o.locale.controls.buttonReset}),v.createElement(r.Other.ControlsWrapper,null,v.createElement(c.Spacer,null),v.createElement(_r,null,n.map(m=>l(m))),v.createElement(r.BarSeparator,null)),v.createElement(r.Other.EmptyDiv,null))});var Q=class extends b.Component{render(){let{active:t}=this.props,e=t.tool;return b.createElement(r.Controlsbar,{show:!!e},b.createElement(c.Switch.Index,{type:e},b.createElement(c.Switch.Case,{value:i.FILTER},b.createElement(Vt,null)),b.createElement(c.Switch.Case,{value:i.FOCUS},b.createElement(Xt,null)),b.createElement(c.Switch.Case,{value:i.ADJUSTMENT},b.createElement(Wt,null)),b.createElement(c.Switch.Case,{value:i.OVERLAY},b.createElement(te,null)),b.createElement(c.Switch.Case,{value:i.STICKER},b.createElement(se,null)),b.createElement(c.Switch.Case,{value:i.TEXT},b.createElement(Ce,null)),b.createElement(c.Switch.Case,{value:i.TEXT_DESIGN},b.createElement(fe,null)),b.createElement(c.Switch.Case,{value:i.LIBRARY},b.createElement(Qt,null)),b.createElement(c.Switch.Case,{value:i.FRAME},b.createElement(qt,null)),b.createElement(c.Switch.Case,{value:i.BRUSH},b.createElement(Nt,null)),b.createElement(c.Switch.Case,{value:i.TRANSFORM},b.createElement(Te,null))))}};Q=k([f("active","config"),a],Q);import w from"react";import Z from"react";import Jr from"styled-components";var Kr=Jr.div`
  position: relative;
  top: -8px;
  color: ${o=>o.theme.card.foreground};
`,qr=({adjustmentsTool:o})=>{let t=(e,n)=>{let s=qo[e.identifier];return Z.createElement(r.Card,{"data-test":e.identifier,tool:i.ADJUSTMENT,type:u.MEDIUM,onClick:()=>o.toggleOptionSelection(e.identifier),isActive:e.identifier===o.selectedAdjustmentType,key:`${e.identifier}-${n}`,label:e.name,style:{animationDelay:`${g(n)}s`}},Z.createElement(Kr,null,Z.createElement(s,null)),Z.createElement(r.CardLabel,null,o.locale.items[e.identifier]||e.name))};return Z.createElement(r.CardContainer,null,o.items.map(t))},ge=f("adjustmentsTool")(a(qr));import Qr from"react";var xe=()=>{let{config:o}=d(),t=o.state.config[i.CUSTOM].toolControlBar;return Qr.createElement(t,{language:o.state.locale[i.CUSTOM]})};import H from"react";var R=class extends H.Component{constructor(){super(...arguments);this.onCategoryClick=t=>{let{filterTool:e}=this.props;e.toggleCategorySelection(t)};this.renderItem=(t,e)=>{let{filterTool:n}=this.props;return H.createElement(r.Card,{tool:i.FILTER,type:u.MEDIUM,onClick:()=>n.selectFilter(t.identifier,t.defaultIntensity),isActive:n.identifier===t.identifier,key:`${t.identifier}-${e}`,image:t.thumbnailURI,label:t.name,style:{animationDelay:`${g(e)}s`}},H.createElement(r.CardLabel,{withBackground:!0},n.locale.categories[t.identifier]||n.locale.items[t.identifier]||t.name))};this.renderCategory=(t,e)=>{let{filterTool:n}=this.props,{selectedCategoryIdentifier:s}=n,p=s===t.identifier;return t.items?H.createElement(r.CategoryContainer,{key:t.identifier},H.createElement(r.Card,{tool:i.FILTER,type:u.LARGE,onClick:()=>this.onCategoryClick(t.identifier),image:t.thumbnailURI,label:t.name,style:{animationDelay:`${g(e)}s`}},H.createElement(r.CardLabel,{withBackground:!0},t.name)),H.createElement(r.ExpandableContainer,{show:p},t.items.map(this.renderItem))):null}}render(){let{filterTool:t}=this.props,{categories:e,config:n,items:s}=t;return n.flattenCategories?H.createElement(r.CardContainer,null,s.map(this.renderItem)):H.createElement(r.CardContainer,null,e.map(this.renderCategory))}};R=k([f("filterTool","active"),a],R);import Ao from"react";var Zr=({focusTool:o})=>{let t=n=>{o.selectFocus(n)},e=(n,s)=>Ao.createElement(r.Card,{isActive:n.identifier===o.identifier,tool:i.FOCUS,type:u.MEDIUM,onClick:()=>t(n.identifier),key:`${n.identifier}-${s}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${g(s)}s`}},Ao.createElement(r.CardLabel,{withBackground:!0},o.locale.items[n.identifier]||n.name));return Ao.createElement(r.CardContainer,null,o.items.map(e))},ye=f("focusTool")(a(Zr));import Eo from"react";var Rr=({frameTool:o})=>{let t=o.identifier,e=(n,s)=>Eo.createElement(r.Card,{tool:i.FRAME,type:u.MEDIUM,onClick:()=>o.selectFrame(n.identifier),isActive:n.identifier===t,key:`${n.identifier}-${s}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${g(s)}s`,backgroundSize:"60%"}}," ",Eo.createElement(r.CardLabel,{hidden:!0},o.locale.items[n.identifier]||n.name));return Eo.createElement(r.CardContainer,null,o.items.map(e))},Se=f("frameTool")(a(Rr));import O from"react";import on from"styled-components";var ke=on.p`
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
`;var oo=class extends O.Component{constructor(){super(...arguments);this.onCategoryClick=t=>{let{library:e}=this.props;e.toggleCategorySelection(t)};this.renderItem=(t,e)=>{let{active:n}=this.props;return O.createElement(r.Card,{tool:i.LIBRARY,type:u.MEDIUM,onClick:()=>n.newImage(t.rawUrl),key:`${t.identifier}-${e}`,image:t.thumbnailURI,label:t.name,style:{animationDelay:`${g(e)}s`}})};this.renderCategory=(t,e)=>{let{library:n}=this.props,{selectedCategoryIdentifier:s}=n,p=s===t.identifier;return t.items?O.createElement(r.CategoryContainer,{key:t.identifier},O.createElement(r.Card,{tool:i.LIBRARY,type:u.LARGE,onClick:()=>this.onCategoryClick(t.identifier),image:t.thumbnailURI,label:t.name,style:{animationDelay:`${g(e)}s`}},O.createElement(r.CardLabel,{withBackground:!0},t.name)),O.createElement(r.ExpandableContainer,{show:p},t.items.map(this.renderItem))):null}}render(){let{library:t}=this.props,{query:e,categories:n,items:s,locale:p,config:l}=t;return e?s.length?O.createElement(r.CardContainer,null,s.map(this.renderItem)):O.createElement(ke,{"data-test":x.NoResult},p.controls.noResults):l.flattenCategories?O.createElement(r.CardContainer,null,s.map(this.renderItem)):O.createElement(r.CardContainer,null,n.map(this.renderCategory))}};oo=k([f("library","active"),a],oo);import Oo from"react";var tn=({overlayTool:o})=>{let{identifier:t,items:e,selectOverlay:n,locale:s}=o,p=(l,m)=>Oo.createElement(r.Card,{tool:i.OVERLAY,type:u.MEDIUM,onClick:()=>n(l.identifier),isActive:l.identifier===t,key:`${l.identifier}-${m}`,image:l.thumbnailURI,label:l.name,style:{animationDelay:`${g(m)}s`}},Oo.createElement(r.CardLabel,{withBackground:!0},s.items[l.identifier]||l.name));return Oo.createElement(r.CardContainer,null,e.map(p))},Be=f("overlayTool")(a(tn));import j from"react";var to=class extends j.Component{constructor(){super(...arguments);this.onCategoryClick=t=>{let{stickerTool:e}=this.props;e.toggleCategorySelection(t)};this.renderItem=(t,e)=>{let{stickerTool:n}=this.props;return j.createElement(r.Card,{tool:i.STICKER,type:u.MEDIUM,onClick:()=>n.add(t.identifier),key:`${t.identifier}-${e}`,image:t.thumbnailURI,label:t.name,style:{backgroundSize:"55%",animationDelay:`${zo(e)}s`}},j.createElement(r.CardLabel,{hidden:!0},n.locale.items[t.identifier]||t.name))};this.renderCategory=(t,e)=>{let{stickerTool:n}=this.props,{selectedCategoryIdentifier:s,locale:p}=n,l=s===t.identifier;return t.items?j.createElement(r.CategoryContainer,{key:t.identifier},j.createElement(r.Card,{tool:i.STICKER,type:u.LARGE,onClick:()=>this.onCategoryClick(t.identifier),image:t.thumbnailURI,label:t.name,style:{animationDelay:`${g(e)}s`}},j.createElement(r.CardLabel,{withBackground:!0},p.categories[t.identifier]||t.name)),j.createElement(r.ExpandableContainer,{show:l},t.items.map(this.renderItem))):null}}render(){let{stickerTool:t}=this.props,{categories:e,items:n,config:s}=t;return s.flattenCategories?j.createElement(r.CardContainer,null,n.map(this.renderItem)):j.createElement(r.CardContainer,null,e.map(this.renderCategory))}};to=k([f("stickerTool","active"),a],to);import yo from"react";import en from"styled-components";var rn=en.div`
  font-size: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: left top;
`,Ie=class extends yo.Component{constructor(){super(...arguments);this.getWidth=({fontFamily:t,fontStyle:e,fontWeight:n},s)=>{let l=document.createElement("canvas").getContext("2d");return l.font=`${e} ${n} 20px ${t}`,l.fillText(s,0,0),l.measureText(s).width};this.renderItem=(t,e)=>{let{config:n,textTool:s}=this.props,{fontFamily:p,fontWeight:l,fontStyle:m,identifier:C}=t,S=`${t.fontFamily} ${Zo.getDisplayFontStyle(t)}`,h=this.getWidth(t,S),N=(n.measurements.basicCard.medium.width-20)/h;return yo.createElement(r.Card,{tool:i.TEXT,type:u.MEDIUM,onClick:()=>s.changeFont(C),isDisabled:!this.textTool.isTextSelected,isActive:s.identifier===C,key:`${t.identifier}-${e}`,label:S,style:{animationDelay:`${g(e)}s`}},yo.createElement(rn,{style:{transform:`scale(${N}) translate(-50%, -50%)`,fontFamily:p,fontStyle:m,fontWeight:l}},S))}}get textTool(){return this.props.textTool}render(){let{textTool:t}=this.props,{fontsLoaded:e,fontFamilies:n}=t;return e?yo.createElement(r.CardContainer,null,n.map(this.renderItem)):null}},ve=f("textTool","config")(a(Ie));import $o from"react";var nn=({textDesignTool:o})=>{let{items:t,changeIdentifier:e,isTextDesignSelected:n,identifier:s}=o,p=(l,m)=>$o.createElement(r.Card,{tool:i.TEXT_DESIGN,type:u.MEDIUM,onClick:()=>e(l.identifier),isDisabled:!n,isActive:s===l.identifier,key:`${l.identifier}-${m}`,image:l.thumbnailURI,label:l.name,style:{animationDelay:`${g(m)}s`,backgroundSize:"60%"}},$o.createElement(r.CardLabel,{hidden:!0},l.name));return $o.createElement(r.CardContainer,null,t.map(p))},Ue=f("textDesignTool")(a(nn));import U from"react";import we from"styled-components";var sn=we.div`
  svg {
    margin-bottom: 12px;
  }
`,an=we.div`
  svg {
    width: ${o=>o.theme.measurements.basicCard.medium.height}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  }

  ${_o} {
    width: ${o=>o.theme.measurements.basicCard.medium.width-32}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height-32}px;
    padding: 6px 0px 24px;
  }
`,eo=class extends U.Component{constructor(){super(...arguments);this.onCategoryClick=t=>{let{transformTool:e}=this.props;e.toggleCategorySelection(t)};this.renderItem=(t,e)=>{let{transformTool:n,config:s}=this.props,{locale:p,identifier:l}=n,m=n.checkIfTransformThumbnailExits(t.thumbnailURI),C=X.crops[t.identifier]||X.crops.imgly_transform_common_custom,S=U.createElement(r.CardLabel,null,p.items[t.identifier]||t.name),h=m?S:U.createElement(an,null,U.createElement(C,{main:s.theme.transform.crops.main,highlight:s.theme.transform.crops.highlight,shadow:s.theme.transform.crops.shadow}),S);return U.createElement(r.Card,{tool:i.TRANSFORM,type:u.MEDIUM,onClick:()=>n.changeIdentifier(t.identifier,!0),key:`${t.identifier}-${e}`,image:t.thumbnailURI,label:t.name,isActive:t.identifier===l,style:{backgroundSize:"55%",animationDelay:`${g(e)}s`}},h)};this.renderCategory=(t,e)=>{let{transformTool:n}=this.props,{selectedCategoryIdentifier:s,locale:p}=n,l=s===t.identifier;if(!t.items)return null;let m=n.checkIfTransformThumbnailExits(t.thumbnailURI),C=U.createElement(r.CardLabel,null,p.categories[t.identifier]||t.name),S=m?C:U.createElement(sn,null,X.categories[t.identifier]&&U.createElement(X.categories[t.identifier]),C);return U.createElement(r.CategoryContainer,{key:t.identifier},U.createElement(r.Card,{tool:i.TRANSFORM,type:u.LARGE,onClick:()=>this.onCategoryClick(t.identifier),image:m?t.thumbnailURI:"",label:t.name,style:{animationDelay:`${g(e)}s`}},S),U.createElement(r.ExpandableContainer,{show:l},t.items.map(this.renderItem)))}}render(){let{transformTool:t}=this.props,{categories:e,config:n,items:s}=t;return n.flattenCategories?U.createElement(r.CardContainer,null,s.map(this.renderItem)):U.createElement(r.CardContainer,null,e.map(this.renderCategory))}};eo=k([f("transformTool","config"),a],eo);var ro=class extends w.Component{constructor(){super(...arguments);this.getToolItemsComponent=t=>{switch(t){case i.LIBRARY:return w.createElement(oo,null);case i.FILTER:return w.createElement(R,null);case i.FOCUS:return w.createElement(ye,null);case i.ADJUSTMENT:return w.createElement(ge,null);case i.OVERLAY:return w.createElement(Be,null);case i.STICKER:return w.createElement(to,null);case i.TEXT:return w.createElement(ve,null);case i.TEXT_DESIGN:return w.createElement(Ue,null);case i.FRAME:return w.createElement(Se,null);case i.TRANSFORM:return w.createElement(eo,null);case i.CUSTOM:return w.createElement(xe,null);default:return null}}}render(){let{library:t,active:e}=this.props,n=e.tool;return n===i.BRUSH||n===i.LIBRARY&&!t.libraryProvider?null:w.createElement(r.Itemsbar,{"data-test":x.ToolControlBar,show:!!n},this.getToolItemsComponent(n))}};ro=k([f("active","library"),a],ro);var mn=ln.div`
  position: absolute;
  width: 100%;
  height: ${o=>o.theme.measurements.basicToolControlBar.maxHeight}px;
  bottom: 0;
  left: 0;
  background: ${o=>o.theme.webcam.backdrop};
  z-index: ${o=>o.theme.measurements.zIndex.disable};
`,no=class extends $.Component{static getDerivedStateFromError(t){return console.error(t),{hasError:!0}}render(){let{active:t}=this.props;return $.createElement(c.Container,{"data-test":x.EditorContainer},t.isWebcam?$.createElement(mn,null):null,$.createElement(rt,null),$.createElement(Qo,null,$.createElement(Ro,null),$.createElement(tt,null),$.createElement(Q,null),$.createElement(ro,null),$.createElement(Pt,null)))}};no=k([f("active"),a],no);var Le=class extends So.Component{componentDidMount(){let{editor:t,storeProps:e}=this.props;this.editor=t,this.storeProps=e;let n=new et(this.editor.configStore.config.custom.components,{}),s={getDialog:n.getDialog,getButton:n.getButton,getColorItem:n.getColorItem,getCheckbox:n.getCheckbox};this.storeProps.custom=s,this.forceUpdate()}render(){return this.storeProps?So.createElement(Mo,V({},this.storeProps),So.createElement(pn,{theme:Po(V({},this.editor.configStore.theme),{measurements:this.editor.configStore.measurements})},So.createElement(no,null))):null}};export{Le as default};
