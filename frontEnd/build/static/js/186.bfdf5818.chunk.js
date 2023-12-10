"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[186],{56186:function(e,t,n){n.r(t);var i=n(74165),r=n(15861),a=n(29439),o=n(72791),c=n(59434),l=n(77128),s=n(31243),d=n(47022),h=n(28282),m=n(89743),p=n(16157),u=n(89708),f=n(80184);t.default=function(){var e=(0,c.v9)((function(e){return e.loggedInRoleUserData.loggedInRoleUserData})),t=/AMN-DOC-[A-Za-z0-9]+/,n=(0,o.useState)([]),x=(0,a.Z)(n,2),g=x[0],w=x[1],b=(0,o.useState)(!1),j=(0,a.Z)(b,2),y=j[0],v=j[1],Z=(0,o.useRef)(null),S=function(){return v(!1)},z=function(){return v(!0)},k=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){var n,r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.uniqueId;case 3:return n=t.sent,t.next=6,s.Z.post("/api/v1/patient/patientLabReportsHistory",{patientId:n});case 6:(r=t.sent).data.success&&(console.log(r.data.data),w(r.data.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){k()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h4",{children:"Lab Results"}),g&&g.length>0?g.map((function(e,n){return(0,f.jsx)(d.Z,{ref:Z,id:n,fluid:!0,as:h.Z,className:"my-3",children:(0,f.jsx)(m.Z,{children:(0,f.jsxs)(h.Z,{children:[(0,f.jsx)(d.Z,{fluid:!0,className:"d-flex justify-content-between mx-2 my-2",children:(0,f.jsxs)("div",{style:{fontSize:"1.1rem"},children:[(0,f.jsx)("b",{children:"Date"})," :",new Date(e.updatedAt).toLocaleDateString(),(0,f.jsx)(l.Z,{type:"vertical"}),(0,f.jsx)("b",{children:"Report :"})," ",e.reportName]})}),(0,f.jsx)(l.Z,{className:"my-1"}),(0,f.jsxs)(d.Z,{fluid:!0,children:[(0,f.jsx)(m.Z,{className:"d-flex justify-content-between",children:(0,f.jsxs)("div",{className:"col-12 col-lg-4 col-sm-5",children:[(0,f.jsxs)("div",{style:{fontSize:"1.1rem",whiteSpace:"nowrap"},className:"",children:[(0,f.jsx)("b",{children:"Report ID :"}),e._id]}),(0,f.jsxs)("div",{style:{fontSize:"1.1rem"},className:"",children:[(0,f.jsx)("b",{children:"Requested By :"}),"Dr. ",e.requestedBy.split(t)[0].trim()]}),(0,f.jsxs)("div",{style:{fontSize:"1.1rem"},className:"",children:[(0,f.jsx)("b",{children:"Payment Mode :"}),e.paymentMode]})]})}),(0,f.jsxs)(d.Z,{className:"d-flex justify-content-end align-items-center flex-column flex-sm-column flex-md-row flex-lg-row",children:[(0,f.jsx)(p.Z,{className:"m-2 btn-dark col-lg-2 col-md-2 col-12",style:{whiteSpace:"nowrap"},onClick:function(){var e=window.open("","_blank");e.document.write("<html><head><title>Aman Hospital</title>"),e.document.write("<style>@media print { @page { size: 148mm 70mm; margin: 0; } }</style>"),e.document.write("</head><body>"),e.document.write("<h1>Aman Hospital</h1>"),e.document.write("<p>Contact: 9876543210</p>"),e.document.write(Z.current.innerHTML),e.document.write("</body></html>"),e.document.close(),e.print()},children:"Download"}),(0,f.jsx)(p.Z,{className:"m-2 btn-dark col-lg-2 col-md-2 col-12",style:{whiteSpace:"nowrap"},onClick:z,children:"View"})]}),(0,f.jsxs)(u.Z,{show:y,onHide:S,animation:!1,children:[(0,f.jsx)(u.Z.Header,{closeButton:!0,children:(0,f.jsx)(u.Z.Title,{children:"Lab Report"})}),(0,f.jsx)(u.Z.Body,{children:(0,f.jsx)(d.Z,{children:(0,f.jsx)(m.Z,{children:(0,f.jsxs)("div",{className:"col-12 col-lg-4 col-sm-5",children:[(0,f.jsxs)("div",{style:{fontSize:"1.1rem",whiteSpace:"nowrap"},children:[(0,f.jsx)("b",{children:"Report ID :"}),e._id]}),(0,f.jsxs)("div",{style:{whiteSpace:"nowrap",fontSize:"1.1rem"},children:[(0,f.jsx)("b",{children:"Requested By :"}),"Dr. ",e.requestedBy.split(t)[0].trim()]}),(0,f.jsxs)("div",{style:{fontSize:"1.1rem",whiteSpace:"nowrap"},children:[(0,f.jsx)("b",{children:"Payment Mode :"}),e.paymentMode]}),(0,f.jsxs)("div",{style:{fontSize:"1.1rem",whiteSpace:"nowrap"},children:[(0,f.jsx)("b",{children:"Report Name :"}),e.reportName]}),(0,f.jsxs)("div",{style:{fontSize:"1.1rem",whiteSpace:"nowrap"},children:[(0,f.jsx)("b",{children:"Date :"}),new Date(e.updatedAt).toLocaleDateString()]}),(0,f.jsxs)("div",{style:{fontSize:"1.1rem",whiteSpace:"nowrap",height:"10rem",width:"10rem"},children:[(0,f.jsx)("b",{children:"Report File :"}),(0,f.jsx)("img",{style:{height:"10rem",width:"10rem"},src:e.reportFile,alt:"Report File"})]})]})})})}),(0,f.jsxs)(u.Z.Footer,{children:[(0,f.jsx)(p.Z,{variant:"secondary",onClick:S,children:"Close"}),(0,f.jsx)(p.Z,{variant:"primary",onClick:S,children:"Save Changes"})]})]})]})]})})},n)})):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(d.Z,{children:"No data Found for Bills"})})]})}},77128:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(4942),r=n(29439),a=n(72791),o=n(81694),c=n.n(o),l=n(71929),s=n(67521),d=n(55564),h=n(89922),m=function(e){var t,n=e.componentCls,r=e.sizePaddingEdgeHorizontal,a=e.colorSplit,o=e.lineWidth,c=e.textPaddingInline,l=e.orientationMargin,d=e.verticalMarginInline;return(0,i.Z)({},n,Object.assign(Object.assign({},(0,s.Wf)(e)),(t={borderBlockStart:"".concat(o,"px solid ").concat(a),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:d,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(o,"px solid ").concat(a)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(e.dividerHorizontalGutterMargin,"px 0")}},(0,i.Z)(t,"&-horizontal".concat(n,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat(e.dividerHorizontalWithTextGutterMargin,"px 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(a),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(o,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),(0,i.Z)(t,"&-horizontal".concat(n,"-with-text-left"),{"&::before":{width:"".concat(100*l,"%")},"&::after":{width:"".concat(100-100*l,"%")}}),(0,i.Z)(t,"&-horizontal".concat(n,"-with-text-right"),{"&::before":{width:"".concat(100-100*l,"%")},"&::after":{width:"".concat(100*l,"%")}}),(0,i.Z)(t,"".concat(n,"-inner-text"),{display:"inline-block",paddingBlock:0,paddingInline:c}),(0,i.Z)(t,"&-dashed",{background:"none",borderColor:a,borderStyle:"dashed",borderWidth:"".concat(o,"px 0 0")}),(0,i.Z)(t,"&-horizontal".concat(n,"-with-text").concat(n,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,i.Z)(t,"&-vertical".concat(n,"-dashed"),{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,i.Z)(t,"&-plain".concat(n,"-with-text"),{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize}),(0,i.Z)(t,"&-horizontal".concat(n,"-with-text-left").concat(n,"-no-default-orientation-margin-left"),(0,i.Z)({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(n,"-inner-text"),{paddingInlineStart:r})),(0,i.Z)(t,"&-horizontal".concat(n,"-with-text-right").concat(n,"-no-default-orientation-margin-right"),(0,i.Z)({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(n,"-inner-text"),{paddingInlineEnd:r})),t)))},p=(0,d.Z)("Divider",(function(e){var t=(0,h.TS)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[m(t)]}),(function(e){return{textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}})),u=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};var f=function(e){var t,n=a.useContext(l.E_),o=n.getPrefixCls,s=n.direction,d=n.divider,h=e.prefixCls,m=e.type,f=void 0===m?"horizontal":m,x=e.orientation,g=void 0===x?"center":x,w=e.orientationMargin,b=e.className,j=e.rootClassName,y=e.children,v=e.dashed,Z=e.plain,S=e.style,z=u(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),k=o("divider",h),N=p(k),C=(0,r.Z)(N,2),I=C[0],M=C[1],O=g.length>0?"-".concat(g):g,B=!!y,_="left"===g&&null!=w,D="right"===g&&null!=w,R=c()(k,null===d||void 0===d?void 0:d.className,M,"".concat(k,"-").concat(f),(t={},(0,i.Z)(t,"".concat(k,"-with-text"),B),(0,i.Z)(t,"".concat(k,"-with-text").concat(O),B),(0,i.Z)(t,"".concat(k,"-dashed"),!!v),(0,i.Z)(t,"".concat(k,"-plain"),!!Z),(0,i.Z)(t,"".concat(k,"-rtl"),"rtl"===s),(0,i.Z)(t,"".concat(k,"-no-default-orientation-margin-left"),_),(0,i.Z)(t,"".concat(k,"-no-default-orientation-margin-right"),D),t),b,j),H=a.useMemo((function(){return"number"===typeof w?w:/^\d+$/.test(w)?Number(w):w}),[w]),E=Object.assign(Object.assign({},_&&{marginLeft:H}),D&&{marginRight:H});return I(a.createElement("div",Object.assign({className:R,style:Object.assign(Object.assign({},null===d||void 0===d?void 0:d.style),S)},z,{role:"separator"}),y&&"vertical"!==f&&a.createElement("span",{className:"".concat(k,"-inner-text"),style:E},y)))}}}]);
//# sourceMappingURL=186.bfdf5818.chunk.js.map