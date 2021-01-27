import{A as Oe,a as U,g as yr,h as et,l as M,m as pr,p as Ye,q as Wr,r as Zo,s as E,t as Pr,u as ot,w as Ro,x as vr,y as Jt,z as kr}from"./chunk.UDTHCDSQ.js";import{C as wo,H as lo,P as Me,S as gt,_ as de,a as Ke,aa as xr,c as _e,ca as q,da as T,ea as Ve,fa as s,ha as m,ja as zr,ka as l,la as Xr,p as N}from"./chunk.XE4R76IY.js";import{I as O,c as H,d as c,h as u,s as k}from"./chunk.WNPNZHNS.js";import De from"react";import{ThemeProvider as Gr}from"styled-components";function qr(e){return!Object.prototype.hasOwnProperty.call(e,"name")}function Jr(e){return!Object.prototype.hasOwnProperty.call(e,"name")}var dt=class{};var pt=class{constructor(o){this.name=o.name,this.coverImageUrl=o.coverImageUrl}loadCoverImage(o="anonymous"){return new Promise((t,i)=>{let n=new Image;n.addEventListener("load",()=>{t(n)}),n.addEventListener("error",()=>{i(new Error(`Failed to load image at ${this.coverImage}`))}),n.crossOrigin=o,n.src=this.coverImageUrl,this.coverImage=n})}};var ct=class{constructor(o){this.title=o.title,this.category=o.category||o.title,this.thumbUrl=o.thumbUrl,this.rawUrl=o.rawUrl,this.authorName=o.authorName,this.authorAvatar=o.authorAvatar}loadThumbImage(o="anonymous"){return new Promise((t,i)=>{let n=new Image;n.addEventListener("load",()=>{t(n)}),n.addEventListener("error",()=>{i(new Error(`Failed to load image at ${this.thumbUrl}`))}),n.crossOrigin=o,n.src=this.thumbUrl,this.thumbImage=n})}getThumbImage(){return this.thumbUrl}};var Pe=class{getData(o){return new Promise((t,i)=>{let n=new XMLHttpRequest;n.open("GET",o,!0),n.responseType="json",n.onload=()=>{let{status:p}=n;p===200?t(n.response):i(new Error(`HTTP Status ${p}`))},n.send()})}},ut=Pe;var Ct=class{loadJSON(o){return new ut().getData(o)}getCategories(){return Promise.resolve([])}searchImages(o){return Promise.resolve([])}};import yt from"react";import ft from"react";import ht from"styled-components";var bt=ht(de)`
  width: ${e=>e.theme.measurements.advancedCard.large.width}px;
  height: ${e=>e.theme.measurements.advancedCard.large.height}px;
  margin-bottom: ${e=>e.theme.measurements.advancedSpacer}px;
  color: ${e=>e.theme.card.foreground};
`,vt=t=>{var{isActive:e}=t,o=gt(t,["isActive"]);return ft.createElement(bt,O({},o))},qe=vt;import St from"styled-components";var Je=St(de)`
  width: ${e=>e.theme.measurements.advancedCard.medium.width}px;
  height: ${e=>e.theme.measurements.advancedCard.medium.height}px;
  margin-bottom: ${e=>e.theme.measurements.advancedSpacer}px;
  color: ${e=>e.theme.card.foreground};
  &:nth-child(2n + 1) {
    margin-right: ${e=>e.theme.measurements.advancedSpacer}px;
  }
`;import It from"styled-components";var Qe=It(de)`
  width: ${e=>e.theme.measurements.advancedCard.small.width}px;
  height: ${e=>e.theme.measurements.advancedCard.small.height}px;
  margin-bottom: ${e=>e.theme.measurements.advancedSpacer}px;
  color: ${e=>e.theme.card.foreground};
  &:nth-child(3n + 1),
  &:nth-child(3n + 2) {
    margin-right: ${e=>e.theme.measurements.advancedSpacer}px;
  }
`;var pe=e=>{let o=e.type===k.LARGE,t=e.type===k.SMALL,i=Je;return o?i=qe:t&&(i=Qe),yt.createElement(i,O({},e))};import Tt from"styled-components";var ve=Tt.div.attrs(e=>({"data-test":e["data-test"]||T.CardContainer}))`
  display: flex;
  flex-wrap: wrap;
  /* width - padding on both sides */
  width: ${e=>e.theme.measurements.advancedUIToolControlBar.width-48}px;
`;import At from"react";import xt,{css as Ze}from"styled-components";var kt=xt.div`
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
  ${e=>e.reverse?Ze`
          border-left: 1px solid ${e.theme.toolControlBar.borderColor};
        `:Ze`
          border-right: 1px solid ${e.theme.toolControlBar.borderColor};
        `}
`,Re=({reverse:e=!1,children:o})=>At.createElement(kt,{"data-test":T.ToolControlBar,reverse:e},o);import Et,{css as $e}from"styled-components";var eo=Et.div.attrs(()=>({"data-test":T.CategoryItemsContainer}))`
  transition: max-height 0.8s ease-out, transform 0.8s ease-out;
  background: ${e=>e.theme.toolControlBar.background};
  visibility: hidden;
  opacity: 0;
  transform-origin: 0 0;
  display: none;
  flex-wrap: wrap;

  ${({show:e})=>e&&$e`
      opacity: 1;
      visibility: visible;
      ${N()?$e`
            display: block;
          `:$e`
            display: flex;
          `}
    `}
`;import Se from"react";import oo,{css as Ut}from"styled-components";var Ft=oo.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  ${e=>e.shouldAnimateHeight&&Ut`
      height: ${e.height}px;
    `}
  opacity: ${({opacity:e})=>e};
  visibility: ${({visibility:e})=>e};
  overflow: ${({shouldAnimateOverflow:e,overflow:o})=>e?o:void 0};
  transition: ${({shouldAnimateHeight:e})=>e?"opacity 0.5s ease-in, height 0.4s ease-out":"opacity 0.5s ease-in"};
  background: ${e=>e.theme.toolControlBar.background};
  color: ${e=>e.theme.toolControlBar.inputLabelForeground};
`,Bt=oo.div`
  position: relative;
  padding: ${e=>e.theme.measurements.advancedUIToolControlBar.padding};
`,He=class extends Se.Component{constructor(o){super(o);this.contentRef=null;this.enableOverflow=()=>{let{show:o}=this.props;o&&this.contentRef.current&&this.setState({overflow:!0})};this.contentRef=Se.createRef(),this.state={height:0,mounted:!1,overflow:!1}}componentDidMount(){let{overflowAfterExpand:o}=this.props;this.contentRef.current&&(o&&this.contentRef.current.addEventListener("transitionend",this.enableOverflow),this.setState({height:this.contentRef.current.scrollHeight,mounted:!0}))}componentWillUnmount(){this.contentRef.current&&this.contentRef.current.removeEventListener("transitionend",this.enableOverflow)}render(){let{show:o,shouldAnimateOverflow:t,shouldAnimateHeight:i,children:n}=this.props,{height:p,mounted:d,overflow:f}=this.state,b=d&&(o&&t||!t),h=b?p:0,v=b?1:0,C=b?"visible":"hidden";return Se.createElement(Ft,{"data-test":T.ToolControlBarControls,ref:this.contentRef,height:h,opacity:v,visibility:C,overflow:f?"visible":"hidden",shouldAnimateHeight:i,shouldAnimateOverflow:t},Se.createElement(Bt,null,n))}};He.defaultProps={show:!0,shouldAnimateOverflow:!0,shouldAnimateHeight:!0};var to=He;import Lt,{css as Ot}from"styled-components";var je=Lt(Me)`
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
  ${()=>N()||_e()?Ot`
        > ul {
          padding-right: 34px;
          margin-right: -34px;
        }
      `:""}
`;je.defaultProps={direction:"vertical"};import wt,{css as Dt}from"styled-components";var Pt=wt.div`
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    ${e=>e.full?Dt`
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
`,Ie=Pt;import $t from"styled-components";var Ht=$t.h2`
  color: ${e=>e.theme.toolControlBar.titleForeground};
  font-size: ${e=>e.theme.measurements.fontSystem.headline2.size}px;
  letter-spacing: ${e=>e.theme.measurements.fontSystem.headline2.letterSpacing}px;
  text-transform: ${e=>e.theme.measurements.fontSystem.headline2.case};
  font-weight: 500;
  min-height: ${e=>2*e.theme.measurements.advancedSpacer}px;
`,ye=Ht;import Y from"react";import Mt from"styled-components";var _t=Mt.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  flex: 1 0 auto;
`,ro=({name:e,isFirstCategory:o,isLastCategory:t,children:i})=>Y.createElement(_t,null,!o&&Y.createElement(s.Spacer,{count:2}),Y.createElement(ye,{"data-test":e},e),Y.createElement(ve,{"data-test":T.CategoryItemsContainer},i),!t&&Y.createElement(Y.Fragment,null,Y.createElement(s.Spacer,{count:2}),Y.createElement(Ie,{full:!0})));import jt from"styled-components";var Nt=jt.h1`
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
`,no=Nt;import io from"react";import zt,{css as Ne}from"styled-components";var Gt=zt.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: ${e=>e.theme.measurements.advancedUIToolbar.width}px;

  z-index: ${e=>e.theme.measurements.zIndex.toolbar};

  background-color: ${e=>e.theme.toolbar.background};
  color: ${e=>e.theme.toolbar.foreground};
  ${e=>{let o=e.theme.toolbar.border?e.theme.toolbar.border:Ne`
          1px solid ${e.theme.toolbar.borderColor};
        `;return e.reverse?Ne`
          border-left: ${o};
        `:Ne`
          border-right: ${o};
        `}}
  margin-bottom: ${e=>e.theme.measurements.advancedUIToolbar.marginBottom}px;
`,so=({reverse:e,children:o})=>io.createElement(Gt,{reverse:e,"data-test":T.Toolbar},io.createElement(Me,{direction:"vertical"},o));import ao from"react";import mo,{css as ze}from"styled-components";var Wt=mo(lo)`
  width: inherit;
  height: inherit;
  padding: 0;
  margin: 0;
  ${N()?ze`
        background-color: transparent;
      `:ze`
        background-color: inherit;
      `}

  ${e=>e.isActive&&ze`
      background-color: ${e.theme.toolbar.activeBackground};
      color: ${e.theme.toolbar.activeForeground};
    `}
`,Yt=mo.li.attrs({"aria-haspopup":!0,"aria-hidden":!0,role:"menuitem"})`
  height: ${e=>e.theme.measurements.advancedUIToolbar.itemHeight}px;
  cursor: pointer;
  position: relative;
`,po=e=>ao.createElement(Yt,null,ao.createElement(Wt,O(O({},e),{"data-test":T.ToolbarItem})));import Xt from"styled-components";var Kt=Xt.li.attrs({role:"none"})`
  height: ${e=>e.theme.measurements.advancedUIToolbar.seperatorHeight}px;
  cursor: pointer;
  position: relative;
`,co=Kt;import uo from"react";import Co,{css as ce}from"styled-components";var Vt=Co.div`
  ${N()?ce`
        position: -ms-device-fixed;
      `:ce`
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

  ${e=>e.reverse&&ce`
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

  ${e=>e.show&&!e.reverse&&ce`
      opacity: 1;
      visibility: visible;
      left: ${e.position.x+e.theme.measurements.advancedUIToolbar.width+16}px;
    `}

  ${e=>e.show&&e.reverse&&ce`
      opacity: 1;
      visibility: visible;
      right: ${e.position.x+e.theme.measurements.advancedUIToolbar.width+16}px;
    `}
`,qt=Co.span`
  display: none;
`,fo=({show:e,reverse:o,position:t,children:i})=>{let n=typeof i=="string"?i:"";return uo.createElement(Vt,{"data-test":T.Tooltip,show:e,reverse:o,position:t,label:n},uo.createElement(qt,null,n))};fo.defaultProps={show:!1};var ho=fo;var r={Card:pe,CardContainer:ve,Toolbar:{Index:so,Item:po,Separator:co,Tooltip:ho},Itemsbar:je,BarSeparator:"",ItemsSeparator:Ie,Controlsbar:to,Sidebar:{Index:Re,Heading:no,SubHeading:ye,TextCategory:ro,ExpandableContainer:eo}};import B from"react";import _r from"styled-components";import Ge from"react";import Te from"react";var Ae=class extends Te.Component{constructor(){super(...arguments);this.renderIcon=o=>{let t=Jt[o];return Te.createElement(t,null)||null};this.update=o=>{this.props.active.selectTool(o)}}getToolTitle(o){return this.props.config.locale[o].title}render(){let o=this.props.active.tool,{tool:t,custom:i}=this.props;if(t){let n=i.getAdvancedToolbarItem();return Te.createElement(n,{key:t,isActive:t===o,isReverse:this.props.isReverse,icon:this.renderIcon(t),onClick:()=>this.update(t),tool:t,label:this.getToolTitle(t)})}return Te.createElement(r.Toolbar.Separator,null)}};Ae=q([l("active","config","custom"),m],Ae);var bo=Ae;var ne=class extends Ge.Component{render(){let{config:o}=this.props,t=o.config.order==="reverse";return Ge.createElement(r.Toolbar.Index,{reverse:t},o.tools.map((i,n)=>Ge.createElement(bo,{key:i||n,tool:i,isReverse:t})))}};ne=q([l("config"),m],ne);import A from"react";import se from"react";import We from"react";var Qt=({adjustmentsTool:e,custom:o})=>{let t=e.locale.controls,i=o.getButton("toolControlBarSecondaryButton"),n=()=>{e.reset()};return We.createElement(r.Controlsbar,{show:e.isDirty},We.createElement(i,{tool:c.ADJUSTMENT,label:t.buttonReset,ariaLabel:t.buttonReset,onClick:n,fullWidth:!0}),We.createElement(r.ItemsSeparator,null))},go=l("adjustmentsTool","custom")(m(Qt));import ie from"react";import Zt from"styled-components";var Rt=Zt(s.Input.Slider)`
  padding-bottom: 16px;
`,er=({adjustmentsTool:e})=>{let{categories:o,items:t,config:i,locale:n}=e,p=()=>{e.toolSnapshot()},d=(h,v)=>{e.editAdjustments({type:h,value:v})},f=h=>{let v=e.locale.categories[h.identifier]||h.name;return ie.createElement(Rt,{identifier:h.identifier,adjust:!0,key:h.identifier,label:v,value:e[h.identifier],onChange:C=>d(h.identifier,C),onMouseUp:p,onTouchEnd:p,snap:0})},b=(h,v)=>{let C=n.categories[h.identifier]||h.name;return h.items?ie.createElement(r.Sidebar.TextCategory,{key:h.identifier,name:C,isFirstCategory:v===0,isLastCategory:v===o.length-1},h.items.map(f)):null};return i.flattenCategories?ie.createElement(ie.Fragment,null,t.map(f)):ie.createElement(ie.Fragment,null,o.map(b))},vo=l("adjustmentsTool")(m(er));var or=({adjustmentsTool:e,displayTitle:o})=>se.createElement(se.Fragment,null,o&&se.createElement(r.Sidebar.Heading,null,e.locale.title),se.createElement(go,null),se.createElement(r.Itemsbar,null,se.createElement(vo,null))),So=l("adjustmentsTool")(m(or));import xe from"react";import w from"react";var tr=({brushTool:e,custom:o})=>{let{colorList:t}=e,i=e.locale.controls,n=e.localeColor.colorPicker,p=o.getButton("toolControlBarSecondaryButton");return w.createElement(w.Fragment,null,w.createElement(r.Controlsbar,{show:e.isDirty},w.createElement(p,{tool:c.BRUSH,ariaLabel:i.buttonReset,onClick:e.reset,fullWidth:!0,label:i.buttonReset}),w.createElement(r.ItemsSeparator,null)),w.createElement(r.Controlsbar,{overflowAfterExpand:!0},w.createElement(s.Input.Selection,{label:i.selectColor},w.createElement(M,{activeColor:e.color,colors:t,labelsColor:n,onChange:e.changeColor})),w.createElement(s.Spacer,{count:2}),w.createElement(s.Input.Slider,{"data-test":T.BrushSize,label:i.sliderSize,value:e.relativeSize,min:1,max:100,divider:1,onChange:e.changeRelativeSize}),w.createElement(s.Spacer,{count:3}),w.createElement(s.Input.Slider,{"data-test":T.BrushHardness,label:i.sliderHardness,value:e.hardness,min:0,max:1,onChange:e.changeHardness}),w.createElement(s.Spacer,null)))},Io=l("brushTool","custom")(m(tr));var rr=({brushTool:e,displayTitle:o})=>xe.createElement(xe.Fragment,null,o&&xe.createElement(r.Sidebar.Heading,null,e.locale.title),xe.createElement(Io,null)),yo=l("brushTool")(m(rr));import Q from"react";import J from"react";var nr=({filterTool:e,custom:o})=>{let t=e.locale.controls,i=e.state,n=o.getButton("toolControlBarSecondaryButton"),p=()=>{e.toolSnapshot()},d=()=>{e.reset()};return J.createElement(r.Controlsbar,{show:e.isOptionSelected},J.createElement(s.Input.Form,null,J.createElement(n,{tool:c.FILTER,ariaLabel:t.buttonReset,onClick:d,fullWidth:!0,label:t.buttonReset}),J.createElement(s.Spacer,{count:2}),J.createElement(s.Input.Slider,{"aria-hidden":!e.isOptionSelected,label:t.sliderIntensity,value:i.intensity,min:0,max:1,onChange:e.changeIntensity,onMouseUp:p,onTouchEnd:p,snap:i.isDuotone?.5:null}),J.createElement(s.Spacer,null)),J.createElement(r.ItemsSeparator,null))},To=l("filterTool","custom")(m(nr));import D from"react";var ir=({filterTool:e,custom:o})=>{let{categories:t,config:i,items:n,locale:p}=e,d=o.getAdvancedItemCard(),f=o.getAdvancedCategoryCard(),b=(C,g)=>{let a=p.items[C.identifier]||C.name;return D.createElement(d,{tool:c.FILTER,type:k.MEDIUM,onClick:()=>e.selectFilter(C.identifier,C.defaultIntensity),key:C.identifier,image:C.thumbnailURI,label:a,style:{animationDelay:`${U(g)}s`},isActive:e.identifier===C.identifier},D.createElement(E,{withBackground:!0},a))},h=(C,g)=>{let{selectedCategoryIdentifier:a}=e,S=a===C.identifier,x=p.categories[C.identifier]||C.name;return C.items?D.createElement("div",{key:C.identifier},D.createElement(f,{isActive:S,tool:c.FILTER,type:k.LARGE,onClick:()=>e.toggleCategorySelection(C.identifier),image:C.thumbnailURI,label:x,style:{animationDelay:`${U(g)}s`}},D.createElement(E,{withBackground:!0,caret:!0,isActive:S},x)),D.createElement(r.Sidebar.ExpandableContainer,{show:S},C.items.map(b))):null},v=(C,g)=>{let a=p.categories[C.identifier]||C.name;return C.items?D.createElement(r.Sidebar.TextCategory,{key:C.identifier,name:a,isFirstCategory:g===0,isLastCategory:g===t.length-1},C.items.map(b)):null};return i.flattenCategories?D.createElement(D.Fragment,null,n.map(b)):i.categoryHeaderType===H.CARD?D.createElement(D.Fragment,null,t.map(h)):i.categoryHeaderType===H.TEXT?D.createElement(D.Fragment,null,t.map(v)):null},Ao=l("filterTool","custom")(m(ir));var sr=({filterTool:e,displayTitle:o})=>Q.createElement(Q.Fragment,null,o&&Q.createElement(r.Sidebar.Heading,null,e.locale.title),Q.createElement(To,null),Q.createElement(r.Itemsbar,{key:"filterToolItemsbar"},Q.createElement(r.CardContainer,null,Q.createElement(Ao,null)))),xo=l("filterTool")(m(sr));import ue from"react";import Z from"react";var ko=m(()=>{let{focusTool:e,custom:o}=Ye(),t=e.locale.controls,i=o.getButton("toolControlBarSecondaryButton"),n=()=>{e.toolSnapshot(t.sliderIntensity)},p=()=>{e.reset()};return Z.createElement(r.Controlsbar,{show:e.isOptionSelected},Z.createElement(s.Input.Form,null,Z.createElement(i,{tool:c.FOCUS,ariaLabel:t.buttonReset,onClick:p,fullWidth:!0,label:t.buttonReset}),Z.createElement(s.Spacer,{count:2}),Z.createElement(s.Input.Slider,{"aria-hidden":!e.isOptionSelected,label:t.sliderIntensity,value:e.relativeIntensity,min:0,max:100,divider:1,onChange:e.changeRelativeIntensity,onMouseUp:n,onTouchEnd:n})),Z.createElement(s.Spacer,{count:1}),Z.createElement(r.ItemsSeparator,null))});import ke from"react";var ar=({focusTool:e,custom:o})=>{let{items:t}=e,i=(n,p)=>{let d=e.locale.items[n.identifier]||n.name,f=o.getAdvancedItemCard();return ke.createElement(f,{tool:c.FOCUS,type:k.LARGE,onClick:()=>e.selectFocus(n.identifier),key:n.identifier,image:n.thumbnailURI,label:d,style:{animationDelay:`${U(p)}s`},isActive:n.identifier===e.identifier},ke.createElement(E,{withBackground:!0},d))};return ke.createElement(r.Itemsbar,null,ke.createElement(r.CardContainer,null,t.map(i)))},Eo=l("focusTool","custom")(m(ar));var Uo=m(({displayTitle:e})=>{let{focusTool:o}=Ye();return ue.createElement(ue.Fragment,null,e&&ue.createElement(r.Sidebar.Heading,null,o.locale.title),ue.createElement(ko,null),ue.createElement(Eo,null))});import Ce from"react";import _ from"react";var mr=({frameTool:e,custom:o})=>{let t=e.locale.controls,i=e.localeColor.colorPicker,{tintable:n,colorList:p}=e,d=o.getButton("toolControlBarSecondaryButton"),f=()=>{e.reset()},b=h=>{e.toolSnapshot(h)};return _.createElement(r.Controlsbar,{show:e.isOptionSelected,overflowAfterExpand:!0},_.createElement(d,{tool:c.FRAME,ariaLabel:t.buttonReset,onClick:f,fullWidth:!0,label:t.buttonReset}),_.createElement(s.Spacer,{count:2}),_.createElement(s.Input.Slider,{"aria-hidden":!e.isOptionSelected,label:t.sliderOpacity,value:e.opacity,min:0,max:1,onChange:e.changeOpacity,onMouseUp:()=>{b(t.sliderOpacity)},onTouchEnd:()=>{b(t.sliderOpacity)}}),_.createElement(s.Spacer,{count:2}),_.createElement(s.Input.Slider,{"aria-hidden":!e.isOptionSelected,label:t.sliderSize,value:e.size,min:e.minSize,max:e.maxSize,divider:1,onChange:e.changeWidth,onMouseUp:()=>{b(t.sliderSize)},onTouchEnd:()=>{b(t.sliderSize)}}),_.createElement(s.Spacer,{count:2}),_.createElement(s.Input.Selection,{isDisabled:!n,label:t.selectColor},_.createElement(M,{activeColor:e.color,colors:p,labelsColor:i,isDisabled:!n,onChange:e.changeColor,onAddSnapshot:e.colorSnapshot})),_.createElement(r.ItemsSeparator,null))},Fo=l("frameTool","custom")(m(mr));import Ee from"react";var lr=({frameTool:e,custom:o})=>{let{items:t}=e,i=e.state?e.state.identifier:null,n=(p,d)=>{let f=e.locale.items[p.identifier]||p.name,b=o.getAdvancedItemCard();return Ee.createElement(b,{tool:c.FRAME,type:k.MEDIUM,onClick:()=>e.selectFrame(p.identifier),key:p.identifier,image:p.thumbnailURI,label:f,style:{backgroundSize:"75%",animationDelay:`${U(d)}s`},isActive:p.identifier===i},Ee.createElement(E,{hidden:!0},f))};return Ee.createElement(r.Itemsbar,null,Ee.createElement(r.CardContainer,null,t.map(n)))},Bo=l("frameTool","custom")(m(lr));var dr=({frameTool:e,displayTitle:o})=>Ce.createElement(Ce.Fragment,null,o&&Ce.createElement(r.Sidebar.Heading,null,e.locale.title),Ce.createElement(Fo,null),Ce.createElement(Bo,null)),Lo=l("frameTool")(m(dr));import R from"react";import $ from"react";var cr=({library:e,active:o,custom:t})=>{let i=e.locale.controls.placeholderSearch,{config:n,libraryProvider:p}=e,d=t.getButton("toolControlBarPrimaryButton"),f=C=>{let{files:g}=C.target;if(g.length){let a=new FileReader;a.onload=S=>{o.newImage(S.target.result)},a.readAsDataURL(g[0])}},b=()=>{o.selectWebcam(!0)},h=()=>{let C=document.getElementById("fileUpload");C&&C.click()},v=C=>{e.fetchImages(C)};return $.createElement(r.Controlsbar,{shouldAnimateHeight:!1,shouldAnimateOverflow:!1},p&&$.createElement($.Fragment,null,$.createElement(s.Input.Search,{onChange:v,placeholder:i}),$.createElement(s.Spacer,{count:2})),n.enableUpload&&$.createElement($.Fragment,null,$.createElement(d,{tool:c.LIBRARY,ariaLabel:e.locale.controls.buttonUpload,onClick:h,fullWidth:!0,label:e.locale.controls.buttonUpload},$.createElement(s.Input.File,{onChange:f})),$.createElement(s.Spacer,null)),n.enableWebcam&&$.createElement(pr,{tool:c.LIBRARY,onClick:b,fullWidth:!0,label:e.locale.controls.buttonWebcamOpen}),$.createElement(r.ItemsSeparator,null))},Oo=l("library","active","custom")(m(cr));import F from"react";var ur=({active:e,library:o,custom:t})=>{let{query:i,config:n,selectedCategoryIdentifier:p,categories:d,items:f}=o,b=t.getAdvancedCategoryCard(),h=t.getAdvancedItemCard(),v=(a,S)=>F.createElement(h,{tool:c.LIBRARY,type:k.MEDIUM,onClick:()=>e.newImage(a.rawUrl),key:`${a.identifier}-${S}`,image:a.thumbnailURI,label:a.name,style:{animationDelay:`${U(S)}s`},authorAvatar:a.authorAvatar,authorName:a.authorName},a.authorAvatar&&F.createElement(wo,{url:a.authorAvatar}),a.authorName&&F.createElement(E,{withBackground:!0},a.authorName)),C=(a,S)=>{let x=p===a.identifier;return a.items?F.createElement("div",{key:a.identifier},F.createElement(b,{isActive:x,tool:c.LIBRARY,type:k.LARGE,onClick:()=>o.toggleCategorySelection(a.identifier),image:a.thumbnailURI,label:a.name,style:{animationDelay:`${U(S)}s`}},F.createElement(E,{withBackground:!0,caret:!0,isActive:x},a.name)),F.createElement(r.Sidebar.ExpandableContainer,{show:x},a.items.map(v))):null},g=(a,S)=>a.items?F.createElement(r.Sidebar.TextCategory,{key:a.identifier,name:a.name,isFirstCategory:S===0,isLastCategory:S===d.length-1},a.items.map(v)):null;return i?f.length?F.createElement(F.Fragment,null,f.map(v)):F.createElement("p",{"data-test":T.NoResult},o.locale.controls.noResults):n.flattenCategories?F.createElement(F.Fragment,null,f.map(v)):n.categoryHeaderType===H.CARD?F.createElement(F.Fragment,null,d.map(C)):n.categoryHeaderType===H.TEXT?F.createElement(F.Fragment,null,d.map(g)):null},Do=l("library","active","custom")(m(ur));var Cr=({library:e,displayTitle:o})=>R.createElement(R.Fragment,null,o&&R.createElement(r.Sidebar.Heading,null,e.locale.title),R.createElement(Oo,null),R.createElement(r.Itemsbar,null,R.createElement(r.CardContainer,null,R.createElement(Do,null)))),Po=l("library")(m(Cr));import fe from"react";import X from"react";var fr=({overlayTool:e,custom:o})=>{let t=e.locale.controls,{allBlendModes:i}=e,{blendMode:n}=e,p=o.getButton("toolControlBarSecondaryButton"),d=()=>{e.toolSnapshot()},f=h=>{e.changeBlendMode(h)},b=()=>{e.reset()};return X.createElement(r.Controlsbar,{show:e.isOptionSelected},X.createElement(p,{tool:c.OVERLAY,ariaLabel:t.buttonReset,onClick:b,fullWidth:!0,label:t.buttonReset}),X.createElement(s.Spacer,{count:2}),X.createElement(s.Input.CarouselSlider,{label:t.carouselBlendMode,defaultIdentifier:n,onSelect:f,list:i}),X.createElement(s.Spacer,{count:2}),X.createElement(s.Input.Slider,{"aria-hidden":!e.isOptionSelected,label:t.sliderOpacity,value:e.opacity,min:0,max:1,onChange:e.changeOpacity,onMouseUp:d,onTouchEnd:d}),X.createElement(s.Spacer,null),X.createElement(r.ItemsSeparator,null))},$o=l("overlayTool","custom")(m(fr));import Ue from"react";var hr=({overlayTool:e,custom:o})=>{let{items:t,locale:i,identifier:n,selectOverlay:p}=e,d=(f,b)=>{let h=i.items[f.identifier]||f.name,v=o.getAdvancedItemCard();return Ue.createElement(v,{tool:c.OVERLAY,type:k.MEDIUM,onClick:()=>p(f.identifier),key:f.identifier,image:f.thumbnailURI,label:h,style:{animationDelay:`${U(b)}s`},isActive:f.identifier===n},Ue.createElement(E,{withBackground:!0},h))};return Ue.createElement(r.Itemsbar,null,Ue.createElement(r.CardContainer,null,t.map(d)))},Ho=l("overlayTool","custom")(m(hr));var br=({overlayTool:e,displayTitle:o})=>fe.createElement(fe.Fragment,null,o&&fe.createElement(r.Sidebar.Heading,null,e.locale.title),fe.createElement($o,null),fe.createElement(Ho,null)),Mo=l("overlayTool")(m(br));import ee from"react";import j from"react";import gr from"styled-components";var Sr=gr.input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:!0})`
  ${vr.VisuallyHidden}
`,Ir=({stickerTool:e,custom:o})=>{let{colorList:t}=e,i=e.locale.controls,n=e.localeColor.colorPicker,p=o.getButton("toolControlBarPrimaryButton"),d=()=>{e.toolSnapshot()},f=()=>{let C=document.getElementById("fileUpload");C&&(C.value=null,C.click())},b=C=>{let{files:g}=C.target;e.addFiles(g)},h=()=>e.isCustomStickerEnabled?j.createElement(p,{tool:c.STICKER,ariaLabel:i.buttonUpload,onClick:f,fullWidth:!0,label:i.buttonUpload},j.createElement(Sr,{onChange:b})):null,v=!e.isStickerSelected||!e.tintable&&e.isStickerSelected;return j.createElement(r.Controlsbar,{shouldAnimateHeight:!1,shouldAnimateOverflow:!1,overflowAfterExpand:!0},j.createElement(s.Input.Form,null,h(),j.createElement(s.Spacer,{count:2}),j.createElement(s.Input.Slider,{isDisabled:!e.isStickerSelected,label:i.sliderOpacity,value:e.opacity,min:0,max:1,onChange:e.changeOpacity,onMouseUp:d,onTouchEnd:d}),j.createElement(s.Spacer,{count:2}),j.createElement(s.Input.Selection,{isDisabled:v,label:i.selectColor},j.createElement(M,{activeSprite:e.id,activeColor:e.tintColor,colors:t,labelsColor:n,isDisabled:v,onChange:e.changeTintColor,onAddSnapshot:e.tintColorSnapshot}))),j.createElement(r.ItemsSeparator,null))},_o=l("stickerTool","custom")(m(Ir));import P from"react";var Tr=({stickerTool:e,custom:o})=>{let{categories:t,selectedCategoryIdentifier:i,config:n,items:p,locale:d}=e,f=o.getAdvancedCategoryCard(),b=o.getAdvancedItemCard(),h=(g,a)=>{let S=d.items[g.identifier]||g.name;return P.createElement(b,{key:g.identifier,tool:c.STICKER,type:k.SMALL,onClick:()=>e.add(g.identifier),image:g.thumbnailURI,label:S,style:{backgroundSize:"75%",animationDelay:`${yr(a)}s`}},P.createElement(E,{hidden:!0},S))},v=(g,a)=>{let S=i===g.identifier,x=d.categories[g.identifier]||g.name;return g.items?P.createElement("div",{key:g.identifier},P.createElement(f,{isActive:S,tool:c.STICKER,type:k.LARGE,onClick:()=>e.toggleCategorySelection(g.identifier),image:g.thumbnailURI,label:x,style:{animationDelay:`${U(a)}s`}},P.createElement(E,{withBackground:!0,caret:!0,isActive:S},x)),P.createElement(r.Sidebar.ExpandableContainer,{show:S,key:`${g.identifier}-items`},g.items.map(h))):null},C=(g,a)=>{let S=d.categories[g.identifier]||g.name;return g.items?P.createElement(r.Sidebar.TextCategory,{key:g.identifier,name:S,isFirstCategory:a===0,isLastCategory:a===t.length-1},g.items.map(h)):null};return n.flattenCategories?P.createElement(P.Fragment,null,p.map(h)):n.categoryHeaderType===H.CARD?P.createElement(P.Fragment,null,t.map(v)):n.categoryHeaderType===H.TEXT?P.createElement(P.Fragment,null,t.map(C)):null},jo=l("stickerTool","custom")(m(Tr));var Ar=({stickerTool:e,displayTitle:o})=>ee.createElement(ee.Fragment,null,o&&ee.createElement(r.Sidebar.Heading,null,e.locale.title),ee.createElement(_o,null),ee.createElement(r.Itemsbar,null,ee.createElement(r.CardContainer,null,ee.createElement(jo,null)))),No=l("stickerTool")(m(Ar));import Be from"react";import y from"react";import Fe from"styled-components";var zo=Fe.div`
  position: relative;
`,Er=Fe.div`
  display: flex;
  justify-content: space-between;
`,Ur=Fe(s.Input.NumericInput)`
  max-width: 50%;
  margin-right: 16px;
`,Fr=Fe(s.Input.Selection)`
  width: 50%;
`,Br=({textTool:e,custom:o})=>{let t=e.locale.controls,i=e.localeColor.colorPicker,{fontFamilies:n,alignment:p,isTextSelected:d,fontFamily:f,fontStyle:b,fontWeight:h,colorList:v,backgroundColorList:C}=e,g=["left","center","right"],a=o.getButton("textAlignment"),S=o.getButton("toolControlBarPrimaryButton"),x=()=>{e.toolSnapshot()},K=()=>{e.add()},V=I=>{let le=I?parseFloat(I):0;e.setFontSize(Math.max(10,Math.min(690,le)))},te=()=>g.map(I=>{let le=kr[I];return y.createElement(a,{tool:I,isDisabled:!d,ariaLabel:`Align ${I}`,isActive:I===p,key:I,style:{padding:"1px 3px 2px"},icon:y.createElement(le,null),onClick:()=>e.changeAlignment(I)})}),W=n.map(I=>({label:`${I.fontFamily} ${xr.getDisplayFontStyle(I)}`,fontWeight:I.fontWeight,fontStyle:I.fontStyle,fontFamily:I.fontFamily,value:I.identifier})),re=W.filter(({value:I})=>I===e.identifier)[0];return y.createElement(r.Controlsbar,{show:!0,overflowAfterExpand:!0,shouldAnimateHeight:!1},y.createElement(s.Input.Form,null,y.createElement(S,{tool:c.TEXT,ariaLabel:t.buttonNew,onClick:K,fullWidth:!0,label:t.buttonNew}),y.createElement(s.Spacer,{count:2}),y.createElement(s.Input.Dropdown,{isDisabled:!d,style:{fontFamily:f,fontStyle:b,fontWeight:h},itemStyle:I=>({fontFamily:I.fontFamily,fontStyle:I.fontStyle,fontWeight:I.fontWeight}),label:t.dropdownFontFamily,list:W,onSelect:e.changeFont,selectedItem:re.label}),y.createElement(s.Spacer,{count:2}),y.createElement(Er,null,y.createElement(Ur,{value:e.fontSize.toFixed(0),onSubmit:V,label:t.textFontSize,isDisabled:!d}),y.createElement(Fr,{isDisabled:!d,inline:!0,label:t.selectAlignment,"data-test":T.TextAlignment},te())),y.createElement(s.Spacer,{count:2}),y.createElement(zo,null,y.createElement(r.ItemsSeparator,{full:!0})),y.createElement(s.Spacer,{count:2}),y.createElement(s.Input.Selection,{isDisabled:!d,label:t.selectFontColor},y.createElement(M,{activeSprite:e.id,activeColor:e.textColor,colors:v,labelsColor:i,isDisabled:!d,onChange:e.changeColor,onAddSnapshot:e.colorSnapshot})),y.createElement(s.Spacer,{count:2}),y.createElement(s.Input.Selection,{isDisabled:!d,label:t.selectBackgroundColor},y.createElement(M,{activeSprite:e.id,activeColor:e.backgroundColor,colors:C,labelsColor:i,isDisabled:!d,onChange:e.changeBackgroundColor,onAddSnapshot:e.backgroundColorSnapshot})),y.createElement(s.Spacer,{count:2}),y.createElement(zo,null,y.createElement(r.ItemsSeparator,{full:!0})),y.createElement(s.Spacer,{count:2}),y.createElement(s.Input.Slider,{isDisabled:!d,label:t.sliderLineSpacing,value:e.lineHeight,min:.5,max:3,onChange:e.changeLineHeight,onMouseUp:x,onTouchEnd:x,snap:1,divider:1,decimal:1}),y.createElement(s.Spacer,{count:1})))},Go=l("textTool","custom")(m(Br));var Lr=({textTool:e,displayTitle:o})=>Be.createElement(Be.Fragment,null,o&&Be.createElement(r.Sidebar.Heading,null,e.locale.title),Be.createElement(Go,null)),Wo=l("textTool")(m(Lr));import he from"react";import z from"react";var Or=({textDesignTool:e,custom:o})=>{let t=e.locale.controls,i=e.localeColor.colorPicker,{colorList:n}=e,p=e.isTextDesignSelected,d=o.getButton("toolControlBarPrimaryButton"),f=o.getButton("toolControlBarSecondaryButton"),b=()=>{e.add()},h=()=>{e.changeSeed()};return z.createElement(r.Controlsbar,{shouldAnimateOverflow:!1,shouldAnimateHeight:!1},z.createElement(s.Input.Form,null,z.createElement(d,{tool:c.TEXT_DESIGN,ariaLabel:t.buttonNew,onClick:b,fullWidth:!0,label:t.buttonNew}),z.createElement(s.Spacer,{count:2}),z.createElement(f,{tool:c.TEXT_DESIGN,ariaLabel:t.buttonShuffle,isDisabled:!p,onClick:h,fullWidth:!0,label:t.buttonShuffle}),z.createElement(s.Spacer,{count:2}),z.createElement(s.Input.Selection,{isDisabled:!p,label:t.selectColor},z.createElement(M,{activeSprite:e.id,activeColor:e.color,colors:n,labelsColor:i,isDisabled:!p,onChange:e.changeColor,onAddSnapshot:e.colorSnapshot}))),z.createElement(r.ItemsSeparator,null))},Yo=l("textDesignTool","custom")(m(Or));import Le from"react";var wr=({textDesignTool:e,custom:o})=>{let{items:t,identifier:i}=e,n=d=>{e.changeIdentifier(d)},p=(d,f)=>{let b=o.getAdvancedItemCard();return Le.createElement(b,{key:d.identifier,tool:c.TEXT_DESIGN,type:k.MEDIUM,onClick:()=>n(d.identifier),image:d.thumbnailURI,label:d.name||"",style:{animationDelay:`${U(f)}s`,backgroundSize:"60%"},isDisabled:!e.isTextDesignSelected,isActive:i===d.identifier},Le.createElement(E,{hidden:!0},d.name))};return Le.createElement(r.Itemsbar,null,Le.createElement(r.CardContainer,null,t.map(p)))},Xo=l("textDesignTool","custom")(m(wr));var Dr=({textDesignTool:e,displayTitle:o})=>he.createElement(he.Fragment,null,o&&he.createElement(r.Sidebar.Heading,null,e.locale.title),he.createElement(Yo,null),he.createElement(Xo,null)),Ko=l("textDesignTool")(m(Dr));import oe from"react";import G from"react";var $r=({transformTool:e,custom:o})=>{let t=e.locale.controls,{forceDimensions:i,lockResolution:n,localOutputHeight:p,localOutputWidth:d}=e,f=o.getButton("toolControlBarSecondaryButton"),b=()=>{e.reset()},h=o.getCheckbox();return G.createElement(r.Controlsbar,{shouldAnimateHeight:!1},G.createElement(s.Input.Form,null,G.createElement(f,{tool:c.TRANSFORM,ariaLabel:t.buttonReset,onClick:b,fullWidth:!0,label:t.buttonReset}),G.createElement(s.Spacer,{count:2}),G.createElement(h,{isDisabled:i,value:n,label:t.checkboxKeepResolution,checkMarkPosition:"right",onClick:e.changeLockResolution,style:{paddingTop:"5px",justifyContent:"space-between"}}),G.createElement(s.Spacer,{count:2}),G.createElement(Pr,{isDisabled:i,showLabel:!0,valueHeight:p,valueWidth:d,onSubmitWidth:e.onPixelWidth,onSubmitHeight:e.onPixelHeight,label:t.inputCropSize,labelHeight:t.inputHeight,labelWidth:t.inputWidth}),G.createElement(s.Spacer,{count:1})),G.createElement(r.ItemsSeparator,null))},Vo=l("transformTool","custom")(m($r));import L from"react";import{renderToStaticMarkup as qo}from"react-dom/server";var Hr=({transformTool:e,custom:o,editor:t})=>{let{categories:i,items:n,identifier:p,config:d,locale:f}=e,b=o.getAdvancedItemCard(),h=o.getAdvancedCategoryCard(),v=(a,S)=>{let{theme:x,measurements:K}=t.configStore,V=f.items[a.identifier]||a.name,te=a.thumbnailURI||"",W="80%";if(!e.checkIfTransformThumbnailExits(a.thumbnailURI)){let re=a.identifier.includes("imgly_transform_common"),I=Oe.crops[a.identifier]||Oe.crops.imgly_transform_common_custom,le=L.createElement(I,{width:K.advancedCard.medium.width-(re?42:0),height:K.advancedCard.medium.height-(re?42:0),main:x.transform.crops.main,highlight:x.transform.crops.highlight,shadow:x.transform.crops.shadow});te=`'data:image/svg+xml,${encodeURIComponent(qo(le))}'`,W=N()||_e()?"auto":"unset"}return L.createElement(b,{key:a.identifier,tool:c.TRANSFORM,type:k.MEDIUM,onClick:()=>e.changeIdentifier(a.identifier,!0),image:te,label:V,style:{backgroundSize:W,animationDelay:`${U(S)}s`},isActive:a.identifier===p},L.createElement(E,null,V))},C=(a,S)=>{let{theme:x,measurements:K}=t.configStore,V=e.selectedCategoryIdentifier===a.identifier,te=f.categories[a.identifier]||a.name,W=a.thumbnailURI||"";if(!a.items)return null;if(!e.checkIfTransformThumbnailExits(a.thumbnailURI)){let re=Oe.categories[a.identifier]||Oe.crops.imgly_transform_common_custom,I=L.createElement(re,{width:K.advancedCard.large.width-42,height:K.advancedCard.large.height-42,main:x.transform.crops.main,highlight:x.transform.crops.highlight,shadow:x.transform.crops.shadow});W=`'data:image/svg+xml,${encodeURIComponent(qo(I))}'`}return L.createElement("div",{key:a.identifier},L.createElement(h,{type:k.LARGE,onClick:()=>e.toggleCategorySelection(a.identifier),key:a.identifier,image:W,style:{animationDelay:`${U(S)}s`},label:a.name,tool:c.TRANSFORM},L.createElement(E,{caret:!0,isActive:V},te)),L.createElement(r.Sidebar.ExpandableContainer,{show:V},a.items.map(v)))},g=(a,S)=>{let x=f.categories[a.identifier]||a.name;return a.items?L.createElement(r.Sidebar.TextCategory,{key:a.identifier,name:x,isFirstCategory:S===0,isLastCategory:S===i.length-1},a.items.map(v)):null};return d.flattenCategories?L.createElement(L.Fragment,null,n.map(v)):d.categoryHeaderType===H.CARD?L.createElement(L.Fragment,null,i.map(C)):d.categoryHeaderType===H.TEXT?L.createElement(L.Fragment,null,i.map(g)):null},Jo=l("transformTool","custom","editor")(m(Hr));var Mr=({transformTool:e,displayTitle:o})=>oe.createElement(oe.Fragment,null,o&&oe.createElement(r.Sidebar.Heading,null,e.locale.title),oe.createElement(Vo,null),oe.createElement(r.Itemsbar,null,oe.createElement(r.CardContainer,null,oe.createElement(Jo,null)))),Qo=l("transformTool")(m(Mr));var ae=class extends A.Component{render(){let{config:o,active:t}=this.props,i=t.tool,n=o.config.displayToolControlBarTitle;return A.createElement(r.Sidebar.Index,{reverse:o.config.order==="reverse"},A.createElement(s.Switch.Index,{type:i},A.createElement(s.Switch.Case,{value:c.LIBRARY},A.createElement(Po,{displayTitle:n})),A.createElement(s.Switch.Case,{value:c.FILTER},A.createElement(xo,{displayTitle:n})),A.createElement(s.Switch.Case,{value:c.FOCUS},A.createElement(Uo,{displayTitle:n})),A.createElement(s.Switch.Case,{value:c.ADJUSTMENT},A.createElement(So,{displayTitle:n})),A.createElement(s.Switch.Case,{value:c.OVERLAY},A.createElement(Mo,{displayTitle:n})),A.createElement(s.Switch.Case,{value:c.STICKER},A.createElement(No,{displayTitle:n})),A.createElement(s.Switch.Case,{value:c.TEXT},A.createElement(Wo,{displayTitle:n})),A.createElement(s.Switch.Case,{value:c.TEXT_DESIGN},A.createElement(Ko,{displayTitle:n})),A.createElement(s.Switch.Case,{value:c.FRAME},A.createElement(Lo,{displayTitle:n})),A.createElement(s.Switch.Case,{value:c.BRUSH},A.createElement(yo,{displayTitle:n})),A.createElement(s.Switch.Case,{value:c.TRANSFORM},A.createElement(Qo,{displayTitle:n}))))}};ae=q([l("active","config"),m],ae);var tt=_r.div`
  position: absolute;
  height: 100%;
  width: ${e=>e.theme.measurements.advancedUIToolbar.width+e.theme.measurements.advancedUIToolControlBar.width}px;
  top: 0;
  background: ${e=>e.theme.webcam.backdrop};
  z-index: ${e=>e.theme.measurements.zIndex.disable};
`,be=class extends B.Component{static getDerivedStateFromError(o){return console.error(o),{hasError:!0}}render(){let{config:o,active:t}=this.props;return o.isOrderDefault?B.createElement(s.Container,{"data-test":T.EditorContainer},t.isWebcam?B.createElement(tt,{style:{left:0}}):null,B.createElement(ot,null),B.createElement(ne,null),B.createElement(ae,null),B.createElement(et,null,B.createElement(Ro,null),B.createElement(Zo,null))):B.createElement(s.Container,{"data-test":T.EditorContainer},t.isWebcam?B.createElement(tt,{style:{right:0}}):null,B.createElement(ot,null),B.createElement(et,null,B.createElement(Ro,null),B.createElement(Zo,null)),B.createElement(ae,null),B.createElement(ne,null))}};be=q([l("config","active"),m],be);import ge from"react";import jr from"styled-components";var rt=class extends ge.Component{constructor(o){super(o);this.ref=null;this.updatePosition=()=>{let{isReverse:o}=this.props,t={x:0,y:0};if(this.ref.current){let{top:i,height:n,left:p,right:d}=this.ref.current.getBoundingClientRect();t.y=i+n/4,t.x=o?window.innerWidth-d:p}this.setState({tooltipPosition:t})};this.mouseOver=o=>{this.updatePosition(),this.setState({hoverTool:o})};this.mouseOut=()=>{this.setState({hoverTool:null})};this.state={hoverTool:null,tooltipPosition:{x:0,y:0}},this.ref=ge.createRef()}componentDidMount(){this.updatePosition()}componentDidUpdate(o){let{isReverse:t}=this.props;t!==o.isReverse&&this.updatePosition()}render(){let{tool:o,isActive:t,isReverse:i,icon:n,label:p,onClick:d,className:f,children:b}=this.props,{hoverTool:h,tooltipPosition:v}=this.state;return ge.createElement(Nr,{ref:this.ref,onMouseOver:()=>this.mouseOver(o),onMouseOut:()=>this.mouseOut(),className:f},ge.createElement(r.Toolbar.Item,{ariaLabel:p,isActive:t,onClick:()=>d(o)},n,b),ge.createElement(r.Toolbar.Tooltip,{position:v,reverse:i,show:h===o},p))}},we=rt,Nr=jr.div`
  position: relative;
`;var me=class extends De.Component{componentDidMount(){let{editor:o,storeProps:t}=this.props;this.editor=o,this.storeProps=t;let i=new Wr(this.editor.configStore.config.custom.components,{advancedUICategoryCard:r.Card,advancedUIItemCard:r.Card,advancedUIToolbarItem:we}),n={getAdvancedCategoryCard:i.getAdvancedCategoryCard,getAdvancedItemCard:i.getAdvancedItemCard,getAdvancedToolbarItem:i.getAdvancedToolbarItem,getDialog:i.getDialog,getButton:i.getButton,getColorItem:i.getColorItem,getCheckbox:i.getCheckbox};this.storeProps.custom=n,this.forceUpdate()}render(){return this.storeProps?De.createElement(zr,O({},this.storeProps),De.createElement(Gr,{theme:O(O({},this.editor.configStore.theme),{measurements:this.editor.configStore.measurements})},De.createElement(be,null))):null}};document.onkeydown=e=>{e.keyCode===13&&document.activeElement&&document.activeElement.click()};import Xe from"react";import nt from"react-dom";var it=class extends Ke{constructor(o,t){super();this.dispose=()=>{this.container&&(nt.unmountComponentAtNode(this.container),this.removeAllListeners(u.EXPORT),this.removeAllListeners(u.HISTORY_CHANGE),this.removeAllListeners(u.EDITOR_READY),this.removeAllListeners(u.ERROR_IMAGE_LOADING),this.removeAllListeners(u.IMAGE_LOAD),this.removeAllListeners(u.TOOL_ENTER),this.removeAllListeners(u.STICKER_UPLOAD_ADD))};this.serialize=o=>this.editor.serialize(o);this.deserialize=o=>this.editor.deserialize(o);this.export=o=>this.editor.export(o);this.close=()=>this.editor.close();this.setImage=o=>this.editor.setImage(o);this.reset=()=>{this.editor.resetToolStates(),this.editor.resize()};this.container=t,this.editor=new Ve(O({},o)),this.editor.configStore.events.on(u.EXPORT,i=>{this.emit(u.EXPORT,i)}),this.editor.configStore.events.on(u.CLOSE,()=>{this.dispose(),this.emit(u.CLOSE)}),this.editor.configStore.events.on(u.HISTORY_CHANGE,()=>{this.emit(u.HISTORY_CHANGE)}),this.editor.configStore.events.on(u.STICKER_UPLOAD_ADD,i=>{this.emit(u.STICKER_UPLOAD_ADD,i)})}hasChanges(){return this.editor.hasChanges()}},st=class{constructor(){this.container=null}init(o){return new Promise((t,i)=>{this.container=typeof o.container=="string"?document.querySelector(o.container):o.container,this.container?(this.editorApi=new it(o,this.container),nt.render(Xe.createElement(at,{editor:this.editorApi.editor}),this.container),this.editorApi.editor.configStore.events.on(u.EDITOR_READY,()=>{setTimeout(()=>{this.editorApi.emit(u.EDITOR_READY)},0),t(this.editorApi)}),this.editorApi.editor.configStore.events.on(u.ERROR_IMAGE_LOADING,n=>{setTimeout(()=>{this.editorApi.emit(u.ERROR_IMAGE_LOADING,n)},0),t(this.editorApi)}),this.editorApi.editor.configStore.events.on(u.IMAGE_LOAD,()=>{setTimeout(()=>{this.editorApi.emit(u.IMAGE_LOAD)},0),t(this.editorApi)}),this.editorApi.editor.configStore.events.on(u.TOOL_ENTER,n=>{setTimeout(()=>{this.editorApi.emit(u.TOOL_ENTER,n)},0),t(this.editorApi)})):i(new Error("Provide a container"))})}},at=class extends Xe.Component{constructor(){super(...arguments);this.UIComponent=null}componentDidMount(){this.editor=this.props.editor,this.storeProps={filterTool:this.editor.filterToolStore,focusTool:this.editor.focusToolStore,adjustmentsTool:this.editor.adjustmentsToolStore,overlayTool:this.editor.overlayToolStore,frameTool:this.editor.frameToolStore,brushTool:this.editor.brushToolStore,transformTool:this.editor.transformToolStore,scale:this.editor.scale,sprite:this.editor.spriteStore,stickerTool:this.editor.spriteStore.stickerToolStore,textTool:this.editor.spriteStore.textToolStore,textDesignTool:this.editor.spriteStore.textDesignToolStore,library:this.editor.libraryStore,modal:this.editor.modalStore,snapping:this.editor.snappingStore,config:this.editor.configStore,active:this.editor.activeStore,canvas:this.editor.canvasStore,history:this.editor.historyStore,editor:this.editor},this.editor.configStore.config.layout==="basic"?import("./ui/basic/index.js").then(({BasicUI:o})=>{this.UIComponent=o,this.forceUpdate()}):(this.UIComponent=me,this.forceUpdate())}componentWillUnmount(){this.editor.engine.dispose(),this.editor.configStore.events.removeAllListeners(u.EXPORT),this.editor.configStore.events.removeAllListeners(u.CLOSE),this.editor.configStore.events.removeAllListeners(u.HISTORY_CHANGE),this.editor.configStore.events.removeAllListeners(u.EDITOR_READY),this.editor.configStore.events.removeAllListeners(u.ERROR_IMAGE_LOADING),this.editor.configStore.events.removeAllListeners(u.IMAGE_LOAD),this.editor.configStore.events.removeAllListeners(u.TOOL_ENTER),this.editor.configStore.events.removeAllListeners(u.STICKER_UPLOAD_ADD)}render(){if(this.editor){let o=this.UIComponent;return this.storeProps&&o?Xe.createElement(o,{editor:this.editor,storeProps:this.storeProps}):null}return null}},Yr={init:e=>new st().init(e)};import mt from"react";var lt=class extends mt.Component{constructor(o){super(o);this.ui=new Ke;this.serialize=o=>this.editor.serialize(o);this.deserialize=o=>this.editor.deserialize(o);this.export=o=>this.editor.export(o);this.close=()=>this.editor.close();this.setImage=o=>this.editor.setImage(o);this.reset=()=>{this.editor.resetToolStates(),this.editor.resize()};this.editor=new Ve(O({},o)),this.editor.configStore.events.on(u.EXPORT,t=>{this.ui.emit(u.EXPORT,t)}),this.editor.configStore.events.on(u.CLOSE,()=>{this.componentWillUnmount(),this.ui.emit(u.CLOSE)}),this.editor.configStore.events.on(u.HISTORY_CHANGE,()=>{this.ui.emit(u.HISTORY_CHANGE)}),this.editor.configStore.events.on(u.EDITOR_READY,()=>{this.ui.emit(u.EDITOR_READY)}),this.editor.configStore.events.on(u.ERROR_IMAGE_LOADING,t=>{this.ui.emit(u.ERROR_IMAGE_LOADING,t)}),this.editor.configStore.events.on(u.IMAGE_LOAD,()=>{this.ui.emit(u.IMAGE_LOAD)}),this.editor.configStore.events.on(u.TOOL_ENTER,t=>{this.ui.emit(u.TOOL_ENTER,t)}),this.editor.configStore.events.on(u.STICKER_UPLOAD_ADD,t=>{this.ui.emit(u.STICKER_UPLOAD_ADD,t)}),this.storeProps={filterTool:this.editor.filterToolStore,focusTool:this.editor.focusToolStore,adjustmentsTool:this.editor.adjustmentsToolStore,overlayTool:this.editor.overlayToolStore,frameTool:this.editor.frameToolStore,brushTool:this.editor.brushToolStore,transformTool:this.editor.transformToolStore,scale:this.editor.scale,sprite:this.editor.spriteStore,stickerTool:this.editor.spriteStore.stickerToolStore,textTool:this.editor.spriteStore.textToolStore,textDesignTool:this.editor.spriteStore.textDesignToolStore,library:this.editor.libraryStore,modal:this.editor.modalStore,snapping:this.editor.snappingStore,config:this.editor.configStore,active:this.editor.activeStore,canvas:this.editor.canvasStore,history:this.editor.historyStore,editor:this.editor},this.editor.configStore.config.layout==="basic"?import("./ui/basic/index.js").then(({BasicUI:t})=>{this.UIComponent=t,this.forceUpdate()}):(this.UIComponent=me,this.forceUpdate())}componentWillUnmount(){this.ui.removeAllListeners(u.EXPORT),this.ui.removeAllListeners(u.HISTORY_CHANGE),this.ui.removeAllListeners(u.EDITOR_READY),this.ui.removeAllListeners(u.ERROR_IMAGE_LOADING),this.ui.removeAllListeners(u.IMAGE_LOAD),this.ui.removeAllListeners(u.TOOL_ENTER),this.ui.removeAllListeners(u.STICKER_UPLOAD_ADD)}hasChanges(){return this.editor.hasChanges()}render(){if(this.editor){let o=this.UIComponent;return this.storeProps&&o?mt.createElement(o,{editor:this.editor,storeProps:this.storeProps}):null}return null}};Xr({isolateGlobalState:!0});var{Container:Sp,Input:Kr,ColorItem:Ip,ColorItemBase:yp,ColorItemBackground:Tp,ColorItemTiledBackground:Ap,ColorItemActiveOverlay:xp,Dialog:kp,DialogBase:Ep,DialogContainer:Up,DialogBackdrop:Fp,DialogHeader:Bp,DialogBody:Lp,DialogFooter:Op,DialogSpinner:wp}=s,{Label:Dp,Checkbox:Pp,CheckboxBase:$p,CheckboxInput:Hp,CheckboxCheckMark:Mp}=Kr,_p=pe,jp=pe;export{pt as a,ct as b,qr as c,Jr as d,Ct as e,dt as f,lt as g,Sp as h,Ip as i,yp as j,Tp as k,Ap as l,xp as m,kp as n,Ep as o,Up as p,Fp as q,Bp as r,Lp as s,Op as t,wp as u,Dp as v,Pp as w,we as x,$p as y,Hp as z,Mp as A,_p as B,jp as C,Yr as D};
