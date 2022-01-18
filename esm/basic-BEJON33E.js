import{A as Qo,D as Zo,F as Ro,G as d,H as L,I as ot,J as tt,K as et,L as rt,M as nt,N as st,a,b as Mo,c as f,d as Ho,e as lo,g as jo,l as mo,m as No,n as Go,o as Vo,p as Xo,q as c,s as po,t as Yo,u as _o,v as Jo,w as Ko,x as g,y as X,z as qo}from"./chunk-QQ7VGXJU.js";import{Ea as io,H as i,J as u,Ja as ao,Va as T,Za as x,_ as Wo,_a as zo,a as V,b as Po,f as k,ja as so,ra as ko,wa as Bo,za as G}from"./chunk-6ATCXC7H.js";import So from"react";import{ThemeProvider as pn}from"styled-components";import O from"react";import ln from"styled-components";import J from"react";import Oe from"react";import Ee from"styled-components";var it=Ee(mo)`
  margin: 2px;
  min-width: ${o=>o.theme.measurements.basicCard.large.width}px;
  height: ${o=>o.theme.measurements.basicCard.large.height}px;
  color: ${o=>o.theme.card.foreground};
`;import $e from"styled-components";var at=$e(mo)`
  margin: 2px;
  min-width: ${o=>o.theme.measurements.basicCard.medium.width}px;
  height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  color: ${o=>o.theme.card.foreground};
`;var Io=o=>{let t=o.type===u.LARGE,e=at;return t&&(e=it),Oe.createElement(e,V({},o))};Io.defaultProps={type:u.MEDIUM};import De from"styled-components";var lt=De(lo).attrs(()=>({"data-test":T.CardContainer}))`
  transition-property: width;
  transition-duration: 0.4s;
  transition-timing-function: ease-in;
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
`;import Pe from"styled-components";var mt=Pe(No)`
  &&& {
    min-height: 32px;
    font-size: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.size}px;
    letter-spacing: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.letterSpacing}px;
    text-transform: ${o=>o.theme.measurements.fontSystem.basicUICardLabel.case};
  }
`;import Me from"styled-components";var pt=Me.div`
  display: flex;
  /* This fixes an IE11 issue where the items are behind the category */
  flex: 1 0 auto;
`;import We,{css as ct}from"styled-components";var dt=We.div`
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
`,Ct=dt;dt.defaultProps={show:!0};import ze from"styled-components";var He=ze.div`
  text-align: -moz-center;
  text-align: center;
  text-align: -webkit-center;
  margin: 0 10vw;
  height: auto;
  box-shadow: ${o=>o.theme.toolControlBar.shadow};
  @media all and (min-width: 0) and (max-width: 599px) {
    margin: 0 5vw;
  }
`,ft=He;import je from"styled-components";var Ne=je.div`
  width: 100px;
  @media all and (min-width: 0) and (max-width: 599px) {
    width: 42px;
  }
`,ut=Ne;import Ge,{css as Ve}from"styled-components";var bt=Ge.div.attrs(()=>({"data-test":T.ToolControlBarExpandableControls}))`
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

  ${({show:o})=>o&&Ve`
      transform: translateY(-100%) scaleY(1);
    `}
`;import _ from"react";import er from"styled-components";import Xe from"react";import Ye from"styled-components";var _e=Ye.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Je=({label:o,className:t,children:e})=>Xe.createElement(_e,{"aria-label":o,className:t},e),D=Je;import B from"react";import xt from"styled-components";import Ke from"styled-components";var qe=Ke.div`
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
`,ht=qe;import Tt from"react";import Qe,{css as Ze}from"styled-components";var gt=Ze`
  background: ${o=>o.theme.tabTitle.activeBackground};
  color: ${o=>o.theme.tabTitle.activeForeground};
  border-bottom: 1px solid ${o=>o.theme.tabTitle.activeBorderColor};
`,Re=Qe(po)`
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
`,co=class extends Tt.Component{constructor(){super(...arguments);this.onClick=()=>{let{label:t,onClick:e}=this.props;e(t)}}render(){let{activeTab:t,label:e}=this.props;return Tt.createElement(Re,{ariaLabel:e,isActive:t===e,onClick:this.onClick},e)}};var or=xt(jo)`
  display: inline-flex;
  padding: 0 4px;
  height: 20px;
  font-size: 16px;
`,tr=xt(Yo)`
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
`,yt=class extends B.Component{constructor(t){super(t);this.onTabClick=t=>{this.setState({activeTab:t,toggleExtend:!1})};this.getDropUp=()=>{let{length:t}=this.props,{toggleExtend:e}=this.state,n=B.Children.toArray(this.props.children),s=B.Children.count(this.props.children),p=n.slice(t,s);return B.createElement(tr,{show:e},p.map(l=>{let m=l.props.label||"";return B.createElement(po,{onClick:()=>this.onTabClick(m),key:m,ariaLabel:"More Options"},m)}))};this.extend=()=>{this.setState(({toggleExtend:t})=>({toggleExtend:!t}))};this.getExtension=()=>B.createElement(or,{onClick:this.extend,ariaLabel:"Select Next"},"...");let e=B.Children.count(this.props.children),n=B.Children.toArray(this.props.children);this.state={activeTab:e&&n[0].props&&n[0].props.label||"",toggleExtend:!1}}render(){let{length:t}=this.props,{activeTab:e,toggleExtend:n}=this.state,s=B.Children.toArray(this.props.children).slice(0,t),p=B.Children.count(this.props.children)>t;return B.createElement("div",null,s.map(l=>{if(l){let m=l.props.label||"";return B.createElement(co,{activeTab:e,key:m,label:m,onClick:this.onTabClick})}return null}),p?this.getExtension():null,n?this.getDropUp():null,B.Children.map(this.props.children,l=>!l||l.props&&l.props.label!==e?null:B.createElement(ht,{key:l.props.label},l.props.children)))}},Y=yt;var rr=er.div`
  position: relative;
  white-space: nowrap;
  display: flex;
  transition: all 0.2s linear;
`,fo=class extends _.Component{constructor(t){super(t);this.updateLength=()=>{let{maxWidth:t,children:e}=this.props,n=0;if(t)n=t;else{let l=window.innerWidth,m=l>600?300:200;n=l-m}let s=_.Children.count(e),p=n-s*fo.TAB_WIDTH;if(p<0){let l=Math.round(Math.abs(p/fo.TAB_WIDTH));this.setState({length:s-l})}};this.state={length:_.Children.count(this.props.children)}}componentDidMount(){window.addEventListener("resize",this.updateLength),this.updateLength()}componentWillUnmount(){window.removeEventListener("resize",this.updateLength)}render(){let{children:t}=this.props,{length:e}=this.state;return e?_.createElement(rr,null,_.createElement(Y,{length:e},t)):null}},Co=fo;Co.TAB_WIDTH=120;import nr,{css as sr}from"styled-components";var ir=nr.div`
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    ${o=>o.full?sr`
            left: -24px;
            width: calc(100% + 48px);
          `:`
      left: 24px;
      width: calc(100% - 48px);
    `}
    border-bottom: 1px solid ${o=>o.theme.toolControlBar.separatorColor};
  }
`,St=ir;import ar from"styled-components";var lr=ar(c.Input.Slider).attrs(()=>({centerSlider:!0}))`
  max-width: 224px;
`,kt=lr;import mr,{css as pr}from"styled-components";var cr=mr.div.attrs(()=>({"data-test":T.CategoryItemsContainer}))`
  visibility: hidden;
  opacity: 0;
  display: none;

  ${({show:o})=>o&&pr`
      opacity: 1;
      visibility: visible;
      display: flex;
    `}
`,Bt=cr;import dr,{css as It}from"styled-components";var vo=dr.div`
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
`;vo.defaultProps={show:!0};import Cr from"styled-components";var fr=Cr.div`
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
`,vt=fr;import At from"react";import ur,{css as Et}from"styled-components";import uo,{css as Ut}from"styled-components";var wt=uo.span`
  display: flex;
  cursor: pointer;
  z-index: ${o=>o.theme.measurements.zIndex.label};
  transition: bottom 0.3s linear;

  color: ${o=>o.theme.toolbar.foreground};
  letter-spacing: ${o=>o.theme.measurements.fontSystem.body.letterSpacing};
  font-size: ${o=>o.theme.measurements.fontSystem.body.size}px;

  ${({isActive:o})=>o&&Ut`
      color: ${t=>t.theme.toolbar.activeForeground};
    `}

  &:active {
    color: ${o=>o.theme.toolbar.activeForeground};
  }
`,Lt=Ut`
  background-color: ${o=>o.theme.toolbar.activeBackground};
  color: ${o=>o.theme.toolbar.activeForeground};

  svg {
    color: ${o=>o.theme.toolbar.activeForeground};
  }
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

  ${({isActive:o})=>o&&Lt}

  &:active {
    ${Lt}
  }

  svg {
    display: flex;
    transition: visibility 0s, opacity 0.5s linear;
    visibility: visible;
    opacity: 1;
  }
`,Ft=uo.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    color: ${o=>o.theme.toolbar.foreground};
  }
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

  ${o=>o.show?Et`
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
        `:Et`
          height: ${o.theme.measurements.basicUIToolbar.openHeight}px;
        `}
`,$t=({show:o=!1,children:t})=>At.createElement(br,{"data-test":T.Toolbar,show:o},At.createElement(lo,null,t));import To from"react";var Ot=({children:o,label:t,isActive:e,onClick:n})=>To.createElement(ho,{"aria-haspopup":!0,"aria-expanded":e},To.createElement(bo,{"data-test":T.ToolbarItem,ariaLabel:t,onClick:n,isActive:e},To.createElement(Ft,null,o,To.createElement(wt,{isActive:e},t))));import hr,{css as Dt}from"styled-components";var Tr=hr.li.attrs({role:"none"})`
  ${o=>o.active?Dt`
          height: ${o.theme.measurements.basicUIToolbar.closeHeight}px;
        `:Dt`
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
`,Pt=Tr;var r={CardContainer:lt,ExpandableContainer:Bt,CategoryContainer:pt,Card:Io,CardAvatar:Go,CardLabel:mt,Toolbar:{Index:$t,Item:Ot,Separator:Pt},BarSeparator:St,ItemsSeparator:vt,Itemsbar:vo,Controlsbar:Ct,ControlsbarContainer:bt,ResponsiveTabWrapper:Co,Slider:kt,TabWrapper:Y,Tab:D,Other:{ControlsWrapper:ft,EmptyDiv:ut}};var gr=({config:o,active:t})=>{let{tools:e}=o,n=t.tool,s=m=>{let C=o.state.config[m];if("icon"in C){let h=C.icon;return J.createElement(h,null)}let S=Jo[m];return J.createElement(S,null)||null},p=m=>o.locale[m].title,l=(m,C)=>m&&J.createElement(r.Toolbar.Item,{onClick:()=>t.selectTool(m),key:m,label:p(m),isActive:n===m},s(m))||J.createElement(r.Toolbar.Separator,{key:m+C,active:!!n});return J.createElement(r.Toolbar.Index,{show:!!n},e.map(l))},Mt=f("config","active")(a(gr));import b from"react";import P,{useRef as Wt}from"react";var xr=({adjustmentsTool:o,custom:t})=>{let e=o.selectedAdjustmentType.toLowerCase(),n=o[e],s=Wt(!1),p=Wt(n),l=t.getButton("toolControlBarSecondaryButton"),m=C=>{s.current&&C!==p.current&&(o.toolSnapshot(),s.current=!1,p.current=C)};return P.createElement(r.ControlsbarContainer,{show:Boolean(e)},P.createElement(l,{tool:i.ADJUSTMENT,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:P.createElement(g.reset,null),label:o.locale.controls.buttonReset}),P.createElement(r.Other.ControlsWrapper,null,P.createElement(c.Spacer,{count:2}),P.createElement(r.Slider,{"aria-hidden":!e,adjust:!0,style:{width:"280px"},label:o.selectedOptionLabel,value:n,onChange:C=>{o.editAdjustments({type:e,value:C}),s.current=n!==C},onMouseUp:m,onTouchEnd:m,snap:0}),P.createElement(c.Spacer,{count:2}),P.createElement(r.BarSeparator,null)),P.createElement(r.Other.EmptyDiv,null))},zt=f("adjustmentsTool","custom")(a(xr));import F from"react";import go from"react";var Ht=a(()=>{let{brushTool:o}=d(),{colorList:t,locale:e,localeColor:n}=o,s=e.controls,p=n.colorPicker;return go.createElement(go.Fragment,null,go.createElement(c.Input.Selection,{showLabel:!1,label:s.selectColor},go.createElement(L,{tool:i.BRUSH,activeColor:o.color,colors:t,labelsColor:p,colorPickerDirection:"top",onChange:o.changeColor})))});import yr from"react";var jt=a(()=>{let{brushTool:o}=d(),{locale:t}=o,e=t.controls;return yr.createElement(r.Slider,{"data-test":T.BrushHardness,style:{width:"280px"},showLabel:!1,label:e.sliderHardness,value:o.hardness,min:0,max:1,onChange:o.changeHardness})});import Sr from"react";var Nt=a(()=>{let{brushTool:o}=d(),{locale:t}=o,e=t.controls;return Sr.createElement(r.Slider,{"data-test":T.BrushSize,style:{width:"280px"},showLabel:!1,label:e.sliderSize,value:o.relativeSize,min:1,max:100,divider:1,onChange:o.changeRelativeSize})});var kr=r.TabWrapper,{Tab:Uo}=r,Gt=a(()=>{let{brushTool:o,custom:t}=d(),{locale:e,config:n}=o,{basicUIToolControlBarTabsOrder:s}=n,p=e.controls,l=t.getButton("toolControlBarSecondaryButton"),m=C=>{switch(C){case io.BrushColor:return F.createElement(Uo,{key:C,label:p.tabColor},F.createElement(Ht,null));case io.BrushSize:return F.createElement(Uo,{key:C,label:p.tabSize},F.createElement(Nt,null));case io.BrushHardness:return F.createElement(Uo,{key:C,label:p.tabHardness},F.createElement(jt,null));default:return null}};return F.createElement(r.ControlsbarContainer,{style:{justifyContent:"center"},show:!0},F.createElement(l,{tool:i.BRUSH,ariaLabel:p.buttonReset,onClick:o.reset,icon:F.createElement(g.reset,null),isDisabled:!o.isDirty,label:p.buttonReset}),F.createElement(r.Other.ControlsWrapper,null,F.createElement(c.Input.Form,null,F.createElement(kr,null,s.map(C=>m(C))))))});import q from"react";import K from"react";var Vt=a(()=>{let{filterTool:o}=d(),{state:t}=o,e=o.locale.controls,n=()=>{o.toolSnapshot()};return K.createElement(r.Other.ControlsWrapper,null,K.createElement(c.Spacer,{count:2}),K.createElement(r.Slider,{"aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:e.sliderIntensity,value:t.intensity,min:0,max:1,onMouseUp:n,onTouchEnd:n,onChange:o.changeIntensity,snap:t.isDuotone?.5:null}),K.createElement(c.Spacer,{count:2}),K.createElement(r.BarSeparator,null))});var Xt=a(()=>{let{filterTool:o,custom:t}=d(),{config:e}=o,{basicUIToolControlBarTabsOrder:n}=e,s=t.getButton("toolControlBarSecondaryButton"),p=l=>{switch(l){case Wo.FilterIntensity:return q.createElement(Vt,{key:l});default:return null}};return q.createElement(r.ControlsbarContainer,{show:o.isOptionSelected},q.createElement(s,{tool:i.FILTER,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:q.createElement(g.reset,null),label:o.locale.controls.buttonReset}),n.map(l=>p(l)),q.createElement(r.Other.EmptyDiv,null))});import M from"react";var Yt=a(()=>{let{focusTool:o,custom:t}=d(),e=o.locale.controls,n=t.getButton("toolControlBarSecondaryButton"),s=()=>{o.toolSnapshot(e.sliderIntensity)};return M.createElement(r.ControlsbarContainer,{show:o.isOptionSelected},M.createElement(n,{tool:i.FOCUS,ariaLabel:e.buttonReset,onClick:o.reset,icon:M.createElement(g.reset,null),label:e.buttonReset}),M.createElement(r.Other.ControlsWrapper,null,M.createElement(c.Spacer,{count:2}),M.createElement(r.Slider,{"aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:e.sliderIntensity,value:o.relativeIntensity,min:0,max:100,divider:1,onChange:o.changeRelativeIntensity,onMouseUp:s,onTouchEnd:s}),M.createElement(c.Spacer,{count:2}),M.createElement(r.BarSeparator,null)),M.createElement(r.Other.EmptyDiv,null))});import I from"react";import _t from"react";var Jt=a(()=>{let{frameTool:o}=d(),t=o.locale.controls,e=o.localeColor.colorPicker,{colorList:n}=o;return _t.createElement(c.Input.Selection,{label:t.selectColor,showLabel:!1},_t.createElement(L,{tool:i.FRAME,activeColor:o.color,colors:n,labelsColor:e,colorPickerDirection:"top",onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))});import Br from"react";var Kt=a(()=>{let{frameTool:o}=d(),t=o.locale.controls,e=()=>{o.toolSnapshot(t.sliderOpacity)};return Br.createElement(r.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:t.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:e,onTouchEnd:e})});import Ir from"react";var qt=a(()=>{let{frameTool:o}=d(),t=o.locale.controls,e=()=>{o.toolSnapshot(t.sliderSize)};return Ir.createElement(r.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:t.sliderSize,value:o.size,min:o.minSize,max:o.maxSize,divider:1,onChange:o.changeWidth,onMouseUp:e,onTouchEnd:e})});var vr=r.TabWrapper,{Tab:wo}=r,Qt=a(()=>{let{frameTool:o,custom:t}=d(),e=o.locale.controls,{tintable:n,config:s}=o,{basicUIToolControlBarTabsOrder:p}=s,l=t.getButton("toolControlBarSecondaryButton"),m=C=>{switch(C){case so.FrameOpacity:return I.createElement(wo,{key:C,label:e.tabOpacity},I.createElement(Kt,null));case so.FrameSize:return I.createElement(wo,{key:C,label:e.tabSize},I.createElement(qt,null));case so.FrameColor:return n&&I.createElement(wo,{key:C,label:e.tabColor},I.createElement(Jt,null));default:return null}};return I.createElement(r.ControlsbarContainer,{show:o.isOptionSelected},I.createElement(l,{tool:i.FRAME,ariaLabel:e.buttonReset,onClick:o.reset,icon:I.createElement(g.reset,null),label:e.buttonReset}),I.createElement(r.Other.ControlsWrapper,null,I.createElement(c.Spacer,null),I.createElement(vr,null,p.map(C=>m(C))),I.createElement(r.BarSeparator,null)),I.createElement(r.Other.EmptyDiv,null))});import W from"react";import Ur,{css as wr}from"styled-components";var Lr=Ur(r.ControlsbarContainer)`
  ${o=>o.firstChildMargin&&wr`
      > :first-child {
        margin-right: 16px;
      }
    `}
`,Fr=({library:o,active:t,custom:e})=>{let n=o.locale.controls.placeholderSearch,{config:s}=o,p=e.getButton("toolControlBarPrimaryButton"),l=h=>{o.fetchImages(h)},m=h=>{let{files:N}=h.target;if(N.length){let Do=new FileReader;Do.onload=Ae=>{t.newImage(Ae.target.result)},Do.readAsDataURL(N[0])}},C=()=>{t.selectWebcam(!0)},S=()=>{let h=document.getElementById("fileUpload");h&&h.click()};return W.createElement(Lr,{firstChildMargin:s.enableWebcam&&!o.libraryProvider,show:!0},s.enableUpload&&W.createElement(p,{tool:i.LIBRARY,"data-test":T.LibraryUploadButton,ariaLabel:o.locale.controls.buttonUpload,onClick:S,icon:W.createElement(g.uploadImage,null),label:o.locale.controls.buttonUpload},W.createElement(c.Input.File,{onChange:m})),o.libraryProvider&&W.createElement(r.Other.ControlsWrapper,null,W.createElement(c.Input.Search,{onChange:l,placeholder:n})),s.enableWebcam&&W.createElement(st,{tool:i.LIBRARY,onClick:C,icon:W.createElement(g.openWebcam,null),label:o.locale.controls.buttonWebcamOpen}),W.createElement(r.BarSeparator,null))},Zt=f("library","active","custom")(a(Fr));import A from"react";import Ar from"react";var Rt=a(()=>{let{overlayTool:o}=d(),t=o.locale.controls,{blendMode:e,allBlendModes:n}=o,s=p=>{o.changeBlendMode(p)};return Ar.createElement(c.Input.CarouselSlider,{showLabel:!1,label:t.carouselBlendMode,defaultIdentifier:e,onSelect:s,list:n})});import Er from"react";var oe=a(()=>{let{overlayTool:o}=d(),t=o.locale.controls,{state:e}=o,n=()=>{o.toolSnapshot()};return Er.createElement(r.Slider,{"aria-hidden":!o.isOptionSelected,showLabel:!1,style:{width:"280px"},label:t.sliderOpacity,value:e.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:n,onTouchEnd:n})});var $r=r.TabWrapper,{Tab:te}=r,ee=a(()=>{let{overlayTool:o,custom:t}=d(),{config:e}=o,{basicUIToolControlBarTabsOrder:n}=e,s=o.locale.controls,p=t.getButton("toolControlBarSecondaryButton"),l=m=>{switch(m){case ko.OverlayBlendMode:return A.createElement(te,{key:m,label:s.tabBlendMode},A.createElement(Rt,null));case ko.OverlayOpacity:return A.createElement(te,{key:m,label:s.tabOpacity},A.createElement(oe,null));default:return null}};return A.createElement(r.ControlsbarContainer,{show:o.isOptionSelected},A.createElement(p,{tool:i.OVERLAY,ariaLabel:s.buttonReset,onClick:o.reset,icon:A.createElement(g.reset,null),label:s.buttonReset}),A.createElement(r.Other.ControlsWrapper,null,A.createElement(c.Spacer,null),A.createElement($r,null,n.map(m=>l(m))),A.createElement(r.BarSeparator,null)),A.createElement(r.Other.EmptyDiv,null))});import E from"react";import Dr from"styled-components";import xo from"react";var re=a(()=>{let{stickerTool:o}=d(),t=o.locale.controls,e=o.localeColor.colorPicker,{colorList:n}=o;return xo.createElement(xo.Fragment,null,xo.createElement(c.Input.Selection,{isDisabled:!o.isStickerSelected,showLabel:!1,label:t.selectColor},xo.createElement(L,{tool:i.STICKER,activeSprite:o.id,activeColor:o.tintColor,colors:n,labelsColor:e,isDisabled:!o.isStickerSelected,colorPickerDirection:"top",onChange:o.changeTintColor,onAddSnapshot:o.tintColorSnapshot})))});import Or from"react";var ne=a(()=>{let{stickerTool:o}=d(),t=o.locale.controls,e=()=>{o.toolSnapshot()};return Or.createElement(r.Slider,{isDisabled:!o.isStickerSelected,showLabel:!1,style:{width:"280px"},label:t.sliderOpacity,value:o.opacity,min:0,max:1,onMouseUp:e,onTouchEnd:e,onChange:o.changeOpacity})});var Pr=r.TabWrapper,{Tab:se}=r,Mr=Dr.input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:!0})`
  ${Vo.VisuallyHidden}
`,ie=a(()=>{let{stickerTool:o,custom:t}=d(),{config:e}=o,{basicUIToolControlBarTabsOrder:n}=e,s=o.locale.controls,p=t.getButton("toolControlBarPrimaryButton"),l=()=>{let h=document.getElementById("fileUpload");h&&(h.value=null,h.click())},m=h=>{let{files:N}=h.target;o.addFiles(N)},C=h=>{switch(h){case Bo.StickerColor:return o.tintable?E.createElement(se,{key:h,label:s.tabColor},E.createElement(re,null)):null;case Bo.StickerOpacity:return E.createElement(se,{key:h,label:s.tabOpacity},E.createElement(ne,null));default:return null}},S=()=>o.isCustomStickerEnabled?E.createElement(p,{tool:i.STICKER,ariaLabel:s.buttonUpload,onClick:l,icon:E.createElement(g.uploadImage,null),label:s.buttonUpload},E.createElement(Mr,{onChange:m})):null;return E.createElement(r.ControlsbarContainer,{show:!0},S(),E.createElement(r.Other.ControlsWrapper,null,E.createElement(Pr,null,n.map(h=>C(h))),E.createElement(r.BarSeparator,null)),E.createElement(r.Other.EmptyDiv,null))});import y from"react";import ae from"react";var le=a(()=>{let{textTool:o}=d(),{backgroundColorList:t}=o,e=o.locale.controls,n=o.localeColor.colorPicker;return ae.createElement(c.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:e.selectBackgroundColor},ae.createElement(L,{tool:i.TEXT,activeSprite:o.id,activeColor:o.backgroundColor,colors:t,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeBackgroundColor,onAddSnapshot:o.backgroundColorSnapshot}))});import Wr from"react";import zr from"styled-components";var Hr=zr(c.Input.NumericInput)`
  max-width: 55px;
  > div > input {
    text-align: center;
  }
`,me=a(()=>{let{textTool:o}=d(),t=e=>{let n=e?parseFloat(e):0;o.setFontSize(Math.max(10,Math.min(690,n)))};return Wr.createElement(Hr,{value:o.fontSize.toFixed(0),onSubmit:t,isDisabled:!o.isTextSelected})});import jr from"react";var pe=a(()=>{let{textTool:o}=d(),t=o.locale.controls,e=()=>{o.toolSnapshot()};return jr.createElement(r.Slider,{isDisabled:!o.isTextSelected,showLabel:!1,label:t.sliderLineSpacing,value:o.lineHeight,min:.5,max:3,onChange:o.changeLineHeight,onMouseUp:e,onTouchEnd:e,snap:1,divider:1,decimal:1})});import Lo from"react";var ce=a(()=>{let{textTool:o,custom:t}=d(),e=o.locale.controls,n=["left","center","right"],s=t.getButton("textAlignment");return Lo.createElement(c.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:e.selectAlignment,"data-test":T.TextAlignment},n.map(p=>{let l=Ko[p];return Lo.createElement(s,{tool:p,isDisabled:!o.isTextSelected,ariaLabel:`Align ${p}`,isActive:p===o.alignment,key:p,icon:Lo.createElement(l,null),onClick:()=>o.changeAlignment(p)})}))});import de from"react";var Ce=a(()=>{let{textTool:o}=d(),{colorList:t}=o,e=o.locale.controls,n=o.localeColor.colorPicker;return de.createElement(c.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:!1,label:e.selectFontColor},de.createElement(L,{tool:i.TEXT,activeSprite:o.id,activeColor:o.textColor,colors:t,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))});var Nr=r.ResponsiveTabWrapper,fe=a(()=>{let{textTool:o,custom:t}=d(),{config:e}=o,{basicUIToolControlBarTabsOrder:n}=e,s=o.locale.controls,p=t.getButton("toolControlBarPrimaryButton"),l=m=>{switch(m){case G.FontSize:return y.createElement(D,{key:m,label:s.tabFontSize},y.createElement(me,null));case G.TextAligment:return y.createElement(D,{key:m,label:s.tabAlignment},y.createElement(ce,null));case G.TextColor:return y.createElement(D,{key:m,label:s.tabColor},y.createElement(Ce,null));case G.BackgroundColor:return y.createElement(D,{key:m,label:s.tabBgColor},y.createElement(le,null));case G.LineSpacing:return y.createElement(D,{key:m,label:s.tabLineHeight},y.createElement(pe,null));default:return null}};return y.createElement(r.ControlsbarContainer,{show:!0},y.createElement(p,{tool:i.TEXT,ariaLabel:s.buttonNew,onClick:o.add,icon:y.createElement(g.addText,null),label:s.buttonNew}),y.createElement(r.Other.ControlsWrapper,null,y.createElement(c.Spacer,null),y.createElement(Nr,null,n.map(m=>l(m))),y.createElement(r.BarSeparator,null)),y.createElement(r.Other.EmptyDiv,null))});import z from"react";var Gr=({textDesignTool:o,custom:t})=>{let e=o.locale.controls,n=o.localeColor.colorPicker,{colorList:s}=o,p=t.getButton("toolControlBarSecondaryButton"),l=t.getButton("toolControlBarPrimaryButton");return z.createElement(r.ControlsbarContainer,{show:!0},z.createElement(l,{tool:i.TEXT_DESIGN,ariaLabel:e.buttonNew,onClick:o.add,icon:z.createElement(g.addText,null),label:e.buttonNew}),z.createElement(r.Other.ControlsWrapper,null,z.createElement(c.Input.Selection,{isDisabled:!o.isTextDesignSelected,label:e.selectColor},z.createElement(L,{tool:i.TEXT_DESIGN,activeSprite:o.id,activeColor:o.color,colors:s,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextDesignSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),z.createElement(p,{tool:i.TEXT_DESIGN,ariaLabel:e.buttonShuffle,onClick:o.changeSeed,icon:z.createElement(g.shuffle,null),label:e.buttonShuffle}),z.createElement(r.BarSeparator,null))},ue=f("textDesignTool","custom")(a(Gr));import v from"react";import Vr from"react";var be=a(()=>{let{transformTool:o}=d(),t=o.locale.controls,{forceDimensions:e}=o;return Vr.createElement(nt,{isDisabled:e,showLabel:!1,valueHeight:o.localOutputHeight,valueWidth:o.localOutputWidth,onSubmitWidth:o.onPixelWidth,onSubmitHeight:o.onPixelHeight,label:t.inputCropSize,labelHeight:t.inputHeight,labelWidth:t.inputWidth})});import Xr from"react";var he=()=>Xr.createElement(ot,null);import Yr from"react";var Te=a(()=>{let{transformTool:o,custom:t}=d(),e=o.locale.controls,{forceDimensions:n}=o,s=t.getCheckbox();return Yr.createElement(s,{tool:i.TRANSFORM,isDisabled:n,style:{paddingTop:"5px",justifyContent:"center"},value:o.lockResolution,checkMarkPosition:"left",label:e.checkboxKeepResolution,onClick:o.changeLockResolution})});var _r=r.ResponsiveTabWrapper,{Tab:Fo}=r,ge=a(()=>{let{transformTool:o,custom:t}=d(),{config:e}=o,{basicUIToolControlBarTabsOrder:n}=e,s=o.locale.controls,p=t.getButton("toolControlBarSecondaryButton"),l=m=>{switch(m){case ao.FlipRotate:return v.createElement(Fo,{key:m,label:s.tabFlipAndRotate},v.createElement(he,null));case ao.Resolution:return v.createElement(Fo,{key:m,label:s.tabResolution},v.createElement(Te,null));case ao.CropSize:return v.createElement(Fo,{key:m,label:s.tabCropSize},v.createElement(be,null));default:return null}};return v.createElement(r.ControlsbarContainer,{show:!0},v.createElement(p,{tool:i.TRANSFORM,ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:v.createElement(g.reset,null),label:o.locale.controls.buttonReset}),v.createElement(r.Other.ControlsWrapper,null,v.createElement(c.Spacer,null),v.createElement(_r,null,n.map(m=>l(m))),v.createElement(r.BarSeparator,null)),v.createElement(r.Other.EmptyDiv,null))});var Q=class extends b.Component{render(){let{active:t}=this.props,e=t.tool;return b.createElement(r.Controlsbar,{show:!!e},b.createElement(c.Switch.Index,{type:e},b.createElement(c.Switch.Case,{value:i.FILTER},b.createElement(Xt,null)),b.createElement(c.Switch.Case,{value:i.FOCUS},b.createElement(Yt,null)),b.createElement(c.Switch.Case,{value:i.ADJUSTMENT},b.createElement(zt,null)),b.createElement(c.Switch.Case,{value:i.OVERLAY},b.createElement(ee,null)),b.createElement(c.Switch.Case,{value:i.STICKER},b.createElement(ie,null)),b.createElement(c.Switch.Case,{value:i.TEXT},b.createElement(fe,null)),b.createElement(c.Switch.Case,{value:i.TEXT_DESIGN},b.createElement(ue,null)),b.createElement(c.Switch.Case,{value:i.LIBRARY},b.createElement(Zt,null)),b.createElement(c.Switch.Case,{value:i.FRAME},b.createElement(Qt,null)),b.createElement(c.Switch.Case,{value:i.BRUSH},b.createElement(Gt,null)),b.createElement(c.Switch.Case,{value:i.TRANSFORM},b.createElement(ge,null))))}};Q=k([f("active","config"),a],Q);import w from"react";import Z from"react";import Jr from"styled-components";var Kr=Jr.div`
  position: relative;
  top: -8px;
  color: ${o=>o.theme.card.foreground};
`,qr=({adjustmentsTool:o})=>{let t=(e,n)=>{let s=qo[e.identifier];return Z.createElement(r.Card,{"data-test":e.identifier,tool:i.ADJUSTMENT,type:u.MEDIUM,onClick:()=>o.toggleOptionSelection(e.identifier),isActive:e.identifier===o.selectedAdjustmentType,key:`${e.identifier}-${n}`,label:e.name,style:{animationDelay:`${x(n)}s`}},Z.createElement(Kr,null,Z.createElement(s,null)),Z.createElement(r.CardLabel,null,o.locale.items[e.identifier]||e.name))};return Z.createElement(r.CardContainer,null,o.items.map(t))},xe=f("adjustmentsTool")(a(qr));import Qr from"react";var ye=()=>{let{config:o}=d(),t=o.state.config[i.CUSTOM].toolControlBar;return Qr.createElement(t,{language:o.state.locale[i.CUSTOM]})};import H from"react";var R=class extends H.Component{constructor(){super(...arguments);this.onCategoryClick=t=>{let{filterTool:e}=this.props;e.toggleCategorySelection(t)};this.renderItem=(t,e)=>{let{filterTool:n}=this.props;return H.createElement(r.Card,{tool:i.FILTER,type:u.MEDIUM,onClick:()=>n.selectFilter(t.identifier,t.defaultIntensity),isActive:n.identifier===t.identifier,key:`${t.identifier}-${e}`,image:t.thumbnailURI,label:t.name,style:{animationDelay:`${x(e)}s`}},H.createElement(r.CardLabel,{withBackground:!0},n.locale.categories[t.identifier]||n.locale.items[t.identifier]||t.name))};this.renderCategory=(t,e)=>{let{filterTool:n}=this.props,{selectedCategoryIdentifier:s}=n,p=s===t.identifier;return t.items?H.createElement(r.CategoryContainer,{key:t.identifier},H.createElement(r.Card,{tool:i.FILTER,type:u.LARGE,onClick:()=>this.onCategoryClick(t.identifier),image:t.thumbnailURI,label:t.name,style:{animationDelay:`${x(e)}s`}},H.createElement(r.CardLabel,{withBackground:!0},t.name)),H.createElement(r.ExpandableContainer,{show:p},t.items.map(this.renderItem))):null}}render(){let{filterTool:t}=this.props,{categories:e,config:n,items:s}=t;return n.flattenCategories?H.createElement(r.CardContainer,null,s.map(this.renderItem)):H.createElement(r.CardContainer,null,e.map(this.renderCategory))}};R=k([f("filterTool","active"),a],R);import Ao from"react";var Zr=({focusTool:o})=>{let t=n=>{o.selectFocus(n)},e=(n,s)=>Ao.createElement(r.Card,{isActive:n.identifier===o.identifier,tool:i.FOCUS,type:u.MEDIUM,onClick:()=>t(n.identifier),key:`${n.identifier}-${s}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${x(s)}s`}},Ao.createElement(r.CardLabel,{withBackground:!0},o.locale.items[n.identifier]||n.name));return Ao.createElement(r.CardContainer,null,o.items.map(e))},Se=f("focusTool")(a(Zr));import Eo from"react";var Rr=({frameTool:o})=>{let t=o.identifier,e=(n,s)=>Eo.createElement(r.Card,{tool:i.FRAME,type:u.MEDIUM,onClick:()=>o.selectFrame(n.identifier),isActive:n.identifier===t,key:`${n.identifier}-${s}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${x(s)}s`,backgroundSize:"60%"}}," ",Eo.createElement(r.CardLabel,{hidden:!0},o.locale.items[n.identifier]||n.name));return Eo.createElement(r.CardContainer,null,o.items.map(e))},ke=f("frameTool")(a(Rr));import $ from"react";import on from"styled-components";var Be=on.p`
  height: ${o=>o.theme.measurements.basicToolControlBar.itemsBarHeight}px;
`;var oo=class extends $.Component{constructor(){super(...arguments);this.onCategoryClick=t=>{let{library:e}=this.props;e.toggleCategorySelection(t)};this.renderItem=(t,e)=>{let{active:n}=this.props;return $.createElement(r.Card,{tool:i.LIBRARY,type:u.MEDIUM,onClick:()=>n.newImage(t.rawUrl),key:`${t.identifier}-${e}`,image:t.thumbnailURI,label:t.name,style:{animationDelay:`${x(e)}s`}})};this.renderCategory=(t,e)=>{let{library:n}=this.props,{selectedCategoryIdentifier:s}=n,p=s===t.identifier;return t.items?$.createElement(r.CategoryContainer,{key:t.identifier},$.createElement(r.Card,{tool:i.LIBRARY,type:u.LARGE,onClick:()=>this.onCategoryClick(t.identifier),image:t.thumbnailURI,label:t.name,style:{animationDelay:`${x(e)}s`}},$.createElement(r.CardLabel,{withBackground:!0},t.name)),$.createElement(r.ExpandableContainer,{show:p},t.items.map(this.renderItem))):null}}render(){let{library:t}=this.props,{query:e,categories:n,items:s,locale:p,config:l}=t;return e?s.length?$.createElement(r.CardContainer,null,s.map(this.renderItem)):$.createElement(Be,{"data-test":T.NoResult},p.controls.noResults):l.flattenCategories?$.createElement(r.CardContainer,null,s.map(this.renderItem)):$.createElement(r.CardContainer,null,n.map(this.renderCategory))}};oo=k([f("library","active"),a],oo);import $o from"react";var tn=({overlayTool:o})=>{let{identifier:t,items:e,selectOverlay:n,locale:s}=o,p=(l,m)=>$o.createElement(r.Card,{tool:i.OVERLAY,type:u.MEDIUM,onClick:()=>n(l.identifier),isActive:l.identifier===t,key:`${l.identifier}-${m}`,image:l.thumbnailURI,label:l.name,style:{animationDelay:`${x(m)}s`}},$o.createElement(r.CardLabel,{withBackground:!0},s.items[l.identifier]||l.name));return $o.createElement(r.CardContainer,null,e.map(p))},Ie=f("overlayTool")(a(tn));import j from"react";var to=class extends j.Component{constructor(){super(...arguments);this.onCategoryClick=t=>{let{stickerTool:e}=this.props;e.toggleCategorySelection(t)};this.renderItem=(t,e)=>{let{stickerTool:n}=this.props;return j.createElement(r.Card,{tool:i.STICKER,type:u.MEDIUM,onClick:()=>n.add(t.identifier),key:`${t.identifier}-${e}`,image:t.thumbnailURI,label:t.name,style:{backgroundSize:"55%",animationDelay:`${zo(e)}s`}},j.createElement(r.CardLabel,{hidden:!0},n.locale.items[t.identifier]||t.name))};this.renderCategory=(t,e)=>{let{stickerTool:n}=this.props,{selectedCategoryIdentifier:s,locale:p}=n,l=s===t.identifier;return t.items?j.createElement(r.CategoryContainer,{key:t.identifier},j.createElement(r.Card,{tool:i.STICKER,type:u.LARGE,onClick:()=>this.onCategoryClick(t.identifier),image:t.thumbnailURI,label:t.name,style:{animationDelay:`${x(e)}s`}},j.createElement(r.CardLabel,{withBackground:!0},p.categories[t.identifier]||t.name)),j.createElement(r.ExpandableContainer,{show:l},t.items.map(this.renderItem))):null}}render(){let{stickerTool:t}=this.props,{categories:e,items:n,config:s}=t;return s.flattenCategories?j.createElement(r.CardContainer,null,n.map(this.renderItem)):j.createElement(r.CardContainer,null,e.map(this.renderCategory))}};to=k([f("stickerTool","active"),a],to);import yo from"react";import en from"styled-components";var rn=en.div`
  font-size: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: left top;
`,ve=class extends yo.Component{constructor(){super(...arguments);this.getWidth=({fontFamily:t,fontStyle:e,fontWeight:n},s)=>{let l=document.createElement("canvas").getContext("2d");return l.font=`${e} ${n} 20px ${t}`,l.fillText(s,0,0),l.measureText(s).width};this.renderItem=(t,e)=>{let{config:n,textTool:s}=this.props,{fontFamily:p,fontWeight:l,fontStyle:m,identifier:C}=t,S=`${t.fontFamily} ${Zo.getDisplayFontStyle(t)}`,h=this.getWidth(t,S),N=(n.measurements.basicCard.medium.width-20)/h;return yo.createElement(r.Card,{tool:i.TEXT,type:u.MEDIUM,onClick:()=>s.changeFont(C),isDisabled:!this.textTool.isTextSelected,isActive:s.identifier===C,key:`${t.identifier}-${e}`,label:S,style:{animationDelay:`${x(e)}s`}},yo.createElement(rn,{style:{transform:`scale(${N}) translate(-50%, -50%)`,fontFamily:p,fontStyle:m,fontWeight:l}},S))}}get textTool(){return this.props.textTool}render(){let{textTool:t}=this.props,{fontsLoaded:e,fontFamilies:n}=t;return e?yo.createElement(r.CardContainer,null,n.map(this.renderItem)):null}},Ue=f("textTool","config")(a(ve));import Oo from"react";var nn=({textDesignTool:o})=>{let{items:t,changeIdentifier:e,isTextDesignSelected:n,identifier:s}=o,p=(l,m)=>Oo.createElement(r.Card,{tool:i.TEXT_DESIGN,type:u.MEDIUM,onClick:()=>e(l.identifier),isDisabled:!n,isActive:s===l.identifier,key:`${l.identifier}-${m}`,image:l.thumbnailURI,label:l.name,style:{animationDelay:`${x(m)}s`,backgroundSize:"60%"}},Oo.createElement(r.CardLabel,{hidden:!0},l.name));return Oo.createElement(r.CardContainer,null,t.map(p))},we=f("textDesignTool")(a(nn));import U from"react";import Le from"styled-components";var sn=Le.div`
  svg {
    margin-bottom: 12px;
  }
`,an=Le.div`
  svg {
    width: ${o=>o.theme.measurements.basicCard.medium.height}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  }

  ${_o} {
    width: ${o=>o.theme.measurements.basicCard.medium.width-32}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height-32}px;
    padding: 6px 0px 24px;
  }
`,eo=class extends U.Component{constructor(){super(...arguments);this.onCategoryClick=t=>{let{transformTool:e}=this.props;e.toggleCategorySelection(t)};this.renderItem=(t,e)=>{let{transformTool:n,config:s}=this.props,{locale:p,identifier:l}=n,m=n.checkIfTransformThumbnailExits(t.thumbnailURI),C=X.crops[t.identifier]||X.crops.imgly_transform_common_custom,S=U.createElement(r.CardLabel,null,p.items[t.identifier]||t.name),h=m?S:U.createElement(an,null,U.createElement(C,{main:s.theme.transform.crops.main,highlight:s.theme.transform.crops.highlight,shadow:s.theme.transform.crops.shadow}),S);return U.createElement(r.Card,{tool:i.TRANSFORM,type:u.MEDIUM,onClick:()=>n.changeIdentifier(t.identifier,!0),key:`${t.identifier}-${e}`,image:t.thumbnailURI,label:t.name,isActive:t.identifier===l,style:{backgroundSize:"55%",animationDelay:`${x(e)}s`}},h)};this.renderCategory=(t,e)=>{let{transformTool:n}=this.props,{selectedCategoryIdentifier:s,locale:p}=n,l=s===t.identifier;if(!t.items)return null;let m=n.checkIfTransformThumbnailExits(t.thumbnailURI),C=U.createElement(r.CardLabel,null,p.categories[t.identifier]||t.name),S=m?C:U.createElement(sn,null,X.categories[t.identifier]&&U.createElement(X.categories[t.identifier]),C);return U.createElement(r.CategoryContainer,{key:t.identifier},U.createElement(r.Card,{tool:i.TRANSFORM,type:u.LARGE,onClick:()=>this.onCategoryClick(t.identifier),image:m?t.thumbnailURI:"",label:t.name,style:{animationDelay:`${x(e)}s`}},S),U.createElement(r.ExpandableContainer,{show:l},t.items.map(this.renderItem)))}}render(){let{transformTool:t}=this.props,{categories:e,config:n,items:s}=t;return n.flattenCategories?U.createElement(r.CardContainer,null,s.map(this.renderItem)):U.createElement(r.CardContainer,null,e.map(this.renderCategory))}};eo=k([f("transformTool","config"),a],eo);var ro=class extends w.Component{constructor(){super(...arguments);this.getToolItemsComponent=t=>{switch(t){case i.LIBRARY:return w.createElement(oo,null);case i.FILTER:return w.createElement(R,null);case i.FOCUS:return w.createElement(Se,null);case i.ADJUSTMENT:return w.createElement(xe,null);case i.OVERLAY:return w.createElement(Ie,null);case i.STICKER:return w.createElement(to,null);case i.TEXT:return w.createElement(Ue,null);case i.TEXT_DESIGN:return w.createElement(we,null);case i.FRAME:return w.createElement(ke,null);case i.TRANSFORM:return w.createElement(eo,null);case i.CUSTOM:return w.createElement(ye,null);default:return null}}}render(){let{library:t,active:e}=this.props,n=e.tool;return n===i.BRUSH||n===i.LIBRARY&&!t.libraryProvider?null:w.createElement(r.Itemsbar,{"data-test":T.ToolControlBar,show:!!n},this.getToolItemsComponent(n))}};ro=k([f("active","library"),a],ro);var mn=ln.div`
  position: absolute;
  width: 100%;
  height: ${o=>o.theme.measurements.basicToolControlBar.maxHeight}px;
  bottom: 0;
  left: 0;
  background: ${o=>o.theme.webcam.backdrop};
  z-index: ${o=>o.theme.measurements.zIndex.disable};
`,no=class extends O.Component{static getDerivedStateFromError(t){return console.error(t),{hasError:!0}}render(){let{active:t}=this.props;return O.createElement(c.Container,{"data-test":T.EditorContainer},t.isWebcam?O.createElement(mn,null):null,O.createElement(rt,null),O.createElement(Qo,null,O.createElement(Ro,null),O.createElement(tt,null),O.createElement(Q,null),O.createElement(ro,null),O.createElement(Mt,null)))}};no=k([f("active"),a],no);var Fe=class extends So.Component{componentDidMount(){let{editor:t,storeProps:e}=this.props;this.editor=t,this.storeProps=e;let n=new et(this.editor.configStore.config.custom.components,{}),s={getDialog:n.getDialog,getButton:n.getButton,getColorItem:n.getColorItem,getCheckbox:n.getCheckbox};this.storeProps.custom=s,this.forceUpdate()}render(){return this.storeProps?So.createElement(Mo,V({},this.storeProps),So.createElement(pn,{theme:Po(V({},this.editor.configStore.theme),{measurements:this.editor.configStore.measurements})},So.createElement(no,null))):null}};export{Fe as default};
