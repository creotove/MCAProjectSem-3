"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[218],{38218:function(e,t,n){n.r(t);var s=n(74165),r=n(15861),c=n(29439),a=n(72791),i=n(31243),d=n(80226),l=n(59434),h=n(47022),o=n(89743),u=n(28282),x=n(16157),j=n(57689),m=n(80184),p=function(){var e=(0,l.v9)((function(e){return e.loggedInRoleUserData.loggedInRoleUserData})),t=(0,a.useState)([]),n=(0,c.Z)(t,2),p=n[0],f=n[1],g=(0,j.s0)(),Z=function(){var t=(0,r.Z)((0,s.Z)().mark((function t(){var n,r;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.uniqueId;case 3:return n=t.sent,t.next=6,i.Z.post("/api/v1/doctor/getPatientToBeChecked",{doctorId:n});case 6:(r=t.sent).data.success?(f(r.data.data),d.ZP.success(r.data.message)):d.ZP.error(r.data.message),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return(0,a.useEffect)((function(){Z()}),[]),(0,m.jsx)("div",{children:(0,m.jsxs)(h.Z,{fluid:!0,style:{minHeight:"70vh"},children:[(0,m.jsx)(o.Z,{className:"ms-3",children:(0,m.jsx)("h3",{children:"Patients to be Check Up"})}),p&&p.length>0?p.map((function(e){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(u.Z,{children:(0,m.jsx)(u.Z.Body,{className:"ms-3",children:(0,m.jsxs)(h.Z,{children:[(0,m.jsx)("div",{children:(0,m.jsxs)("table",{children:[(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{className:"pe-5",children:"Patient Name"}),(0,m.jsx)("td",{children:e.patientName})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Department"}),(0,m.jsx)("td",{children:e.department})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Weight"}),(0,m.jsx)("td",{children:e.weight})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Blood Pressure"}),(0,m.jsx)("td",{children:e.bloodPressure})]}),(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Time"}),(0,m.jsx)("td",{children:new Date(e.date).toLocaleString()})]})]},e._id)}),(0,m.jsx)("div",{className:"d-flex justify-content-end",children:(0,m.jsx)(x.Z,{onClick:function(){var t={id:e.patientId,name:e.patientName,weight:e.weight,bloodPressure:e.bloodPressure};g("/checkup-form",{state:{patientData:t}})},className:"ms-auto",children:"Check Patient"})})]})})})})})):(0,m.jsx)(u.Z,{className:"text-danger text-center",children:(0,m.jsx)(u.Z.Body,{children:"No Patient to be checked"})})]})})};t.default=a.memo(p)}}]);
//# sourceMappingURL=218.3e8214c8.chunk.js.map