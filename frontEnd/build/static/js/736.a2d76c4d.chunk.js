"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[736],{12736:function(e,t,n){n.r(t);var s=n(74165),r=n(15861),c=n(29439),i=n(72791),a=n(47022),l=n(89743),o=n(45736),d=n(2677),u=n(69359),h=n(77128),x=n(11087),p=n(59434),f=n(31243),g=n(81540),j=n(80184);t.default=function(){console.log("Patient Index rendered");var e=(0,p.v9)((function(e){return e.loggedInRoleUserData.loggedInRoleUserData})),t=(0,p.v9)((function(e){return e.bpAndW.bpAndW})),n=(0,i.useState)([]),m=(0,c.Z)(n,2),v=m[0],w=m[1],Z=(0,p.I0)(),b=function(){var t=(0,r.Z)((0,s.Z)().mark((function t(){var n,r;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("fetching last two visits"),t.next=4,e.uniqueId;case 4:return n=t.sent,t.next=7,f.Z.post("/api/v1/patient/patientLastTwoVisits",{patientId:n});case 7:(r=t.sent).data.success&&(w(r.data.data),console.log("fetching last two visits success")),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),console.log("fetching last two visits error");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=(0,r.Z)((0,s.Z)().mark((function t(){var n,r;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.count("fetching again"),t.next=4,e.uniqueId;case 4:return n=t.sent,t.next=7,f.Z.post("/api/v1/patient/patientWeightAndBloodPressure",{uniqueId:n});case 7:(r=t.sent).data.success&&(console.log("fetch success"),Z((0,g.zd)(r.data.data))),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("fetch error"),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){b()}),[]),(0,i.useEffect)((function(){t||N()}),[t,N]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.Z,{children:(0,j.jsx)(l.Z,{children:(0,j.jsxs)(u.Z,{title:"Past Visit",children:[(0,j.jsx)(u.Z,{title:"Last Two Visits",className:"shadow-sm mb-3",children:v.length>0?v.map((function(e,t){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(u.Z,{className:"border-0 mx-3",children:[(0,j.jsx)("div",{children:e.uniqueId}),(0,j.jsx)("div",{children:e.department}),(0,j.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,j.jsx)("div",{children:e.patientName}),(0,j.jsx)("div",{}),(0,j.jsx)("div",{className:"",children:e.isChecked?(0,j.jsx)(o.Z,{bg:"success",pill:!0,children:"Checked"}):(0,j.jsx)(o.Z,{bg:"warning",pill:!0,children:"Pending"})})]})]},t),(0,j.jsx)(h.Z,{className:"my-2"})]})})):(0,j.jsx)("div",{children:"No visits"})}),(0,j.jsxs)(l.Z,{gutter:16,children:[(0,j.jsx)(d.Z,{span:8,children:(0,j.jsx)(u.Z,{bordered:!1,className:"".concat(e&&e.vaccinated?"bg-success":"bg-danger","\n                  h1 d-flex justify-content-center align-items-center text-white"),style:{height:"7rem",cursor:"pointer"},children:"Vaccinated"})}),(0,j.jsx)(d.Z,{span:8,children:(0,j.jsx)(u.Z,{bordered:!1,className:"bg-primary text-white h1 d-flex justify-content-center align-items-center",style:{height:"7rem",cursor:"pointer"},children:(0,j.jsx)(x.rU,{to:"/patient-bills",style:{textDecoration:"none",color:"white",whiteSpace:"nowrap"},children:"E-Prescription"})})}),(0,j.jsx)(d.Z,{span:8,children:(0,j.jsx)(u.Z,{bordered:!1,className:"bg-black text-white d-flex justify-content-center",style:{height:"7rem",fontSize:"1.1rem",textWrap:"no-wrap",overflow:"hidden",whiteSpace:"nowrap",cursor:"pointer"},children:(0,j.jsx)(l.Z,{children:(0,j.jsxs)("table",{children:[(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:"Weight"}),(0,j.jsx)("td",{children:t?t.weight:"N/A"})]}),(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{className:"pe-3",children:"Blood Pressure"}),(0,j.jsx)("td",{children:t?t.bloodPressure:"N/A"})]})]})})})})]})]})})})})}}}]);
//# sourceMappingURL=736.a2d76c4d.chunk.js.map