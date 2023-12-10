"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[837],{68837:function(e,t,o){o.r(t);var r=o(74165),a=o(15861),n=o(29439),s=o(80226),l=o(31243),c=o(72791),i=o(89743),d=o(2677),u=o(16157),p=o(95313),h=o(80184);t.default=function(){var e=(0,c.useState)(),t=(0,n.Z)(e,2),o=t[0],m=t[1],x=(0,c.useState)([]),Z=(0,n.Z)(x,2),f=Z[0],j=Z[1],g=(0,c.useState)(""),v=(0,n.Z)(g,2),b=v[0],C=v[1],N=(0,c.useState)(!1),P=(0,n.Z)(N,2),y=P[0],k=P[1],D=(0,c.useState)(""),S=(0,n.Z)(D,2),I=S[0],w=S[1],G=(0,c.useState)(""),L=(0,n.Z)(G,2),F=L[0],_=L[1],E=(0,c.useState)("Male"),V=(0,n.Z)(E,2),q=V[0],B=V[1],M=(0,c.useState)(""),W=(0,n.Z)(M,2),A=W[0],O=W[1],T=(0,c.useState)(0),U=(0,n.Z)(T,2),z=U[0],H=U[1],J=(0,c.useState)(0),K=(0,n.Z)(J,2),Q=K[0],R=K[1],X=(0,c.useState)(""),Y=(0,n.Z)(X,2),$=Y[0],ee=Y[1],te=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),t.stopPropagation(),e.next=5,l.Z.post("/api/v1/receptionist/getPatientData",{searchMobileNumber:o});case 5:(a=e.sent).data.success?(w(a.data.data.uniqueId),_(a.data.data.name),B(a.data.data.gender),s.ZP.success("Patient Details Fetched Successfully")):s.ZP.error("something went wrong"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),s.ZP.error("Could not find the Patient"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.post("/api/v1/receptionist/getDepartmentOfDoctor",{department:t});case 3:(o=e.sent).data.success?(j(o.data.data),C(o.data.data[0].uniqueId),s.ZP.success("Doctor Name Fetched Successfully")):s.ZP.error("something went wrong"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),s.ZP.error("Could not find the Doctor"),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var o,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!1!==t.currentTarget.checkValidity()){e.next=7;break}return t.preventDefault(),t.stopPropagation(),k(!0),e.abrupt("return");case 7:return t.preventDefault(),t.stopPropagation(),o={name:F,department:A,doctorName:$,weight:z,bloodPressure:Q,patientId:I,doctorId:b},e.next=12,l.Z.post("/api/v1/receptionist/addForCheckUp",o);case 12:(a=e.sent).data.success?(s.ZP.success("Patient Added for CheckUp Successfully"),w(""),_(""),B(""),O(""),H(0),R(0),ee(""),j([])):s.ZP.error(a.data.message),t.preventDefault(),t.stopPropagation(),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),s.ZP.error(e.t0.response.data.message),console.log(e.t0);case 22:t.preventDefault();case 23:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){f.length>0&&ee(f[0].name)}),[A,f]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)(p.Z,{id:"searchPatient",name:"searchPatient",autoComplete:"off",onSubmit:te,children:(0,h.jsx)(i.Z,{className:"mb-3",children:(0,h.jsxs)(p.Z.Group,{as:d.Z,className:"d-flex offset-md-7 col-md-5 col-sm-12 col-sm-12",controlId:"formGridEmail",children:[(0,h.jsx)(p.Z.Control,{type:"text",onChange:function(e){return m(e.target.value)},value:o,className:"me-2",placeholder:"Patient Mobile Number"}),(0,h.jsx)(u.Z,{onClick:te,children:"Search"})]})})}),(0,h.jsx)("div",{className:"container-fluid",children:(0,h.jsxs)(p.Z,{noValidate:!0,validated:y,onSubmit:re,autoComplete:"off",children:[(0,h.jsx)(i.Z,{className:"mb-3  col-md-4 col-sm-12 col-sm-12",children:(0,h.jsxs)(p.Z.Group,{as:d.Z,className:"",controlId:"formGridEmail",children:[(0,h.jsx)(p.Z.Label,{children:"Patient Id"}),(0,h.jsx)(p.Z.Control,{type:"text",placeholder:"Patient Id",value:I,disabled:!0})]})}),(0,h.jsxs)(i.Z,{className:"mb-3",children:[(0,h.jsxs)(p.Z.Group,{as:d.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formFirstName",children:[(0,h.jsx)(p.Z.Label,{children:"First Name"}),(0,h.jsx)(p.Z.Control,{type:"text",placeholder:"  First Name",value:F,disabled:!0})]}),(0,h.jsxs)(p.Z.Group,{as:d.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formGender",children:[(0,h.jsx)(p.Z.Label,{children:"Gender"}),(0,h.jsx)(p.Z.Control,{type:"text",placeholder:"Gender",value:q,disabled:!0})]})]}),(0,h.jsxs)(i.Z,{className:"mb-3",children:[(0,h.jsxs)(p.Z.Group,{as:d.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formWeight",children:[(0,h.jsx)(p.Z.Label,{children:"Weight"}),(0,h.jsx)(p.Z.Control,{type:"number",placeholder:"Enter Weight",value:z,onChange:function(e){return H(e.target.value)}}),(0,h.jsx)(p.Z.Control.Feedback,{children:"Looks good!"})]}),(0,h.jsxs)(p.Z.Group,{as:d.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formBloodPressure",children:[(0,h.jsx)(p.Z.Label,{children:"Blood Pressure"}),(0,h.jsx)(p.Z.Control,{type:"number",placeholder:"Enter Blood Pressure",value:Q,onChange:function(e){return R(e.target.value)}}),(0,h.jsx)(p.Z.Control.Feedback,{children:"Looks good!"})]})]}),(0,h.jsxs)(i.Z,{className:"mb-3",children:[(0,h.jsxs)(p.Z.Group,{as:d.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formDepartment",children:[(0,h.jsx)(p.Z.Label,{children:"Department"}),(0,h.jsxs)(p.Z.Select,{defaultValue:"Eye Care",onChange:function(e){O(e.target.value),oe(e.target.value)},children:[(0,h.jsx)("option",{children:"Eye Care"}),(0,h.jsx)("option",{children:"Psychotherapy"}),(0,h.jsx)("option",{children:"Primary Care"}),(0,h.jsx)("option",{children:"Dental Care"}),(0,h.jsx)("option",{children:"Orthopedic"}),(0,h.jsx)("option",{children:"Cardiology"}),(0,h.jsx)("option",{children:"Gynecology"}),(0,h.jsx)("option",{children:"Neurology"}),(0,h.jsx)("option",{children:"Dermatologists"}),(0,h.jsx)("option",{children:"Nutritionists"}),(0,h.jsx)("option",{children:"Physical Therapists"})]}),(0,h.jsx)(p.Z.Control.Feedback,{children:"Looks good!"})]}),(0,h.jsxs)(p.Z.Group,{as:d.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formdepartmentDoctors",children:[(0,h.jsx)(p.Z.Label,{style:{whiteSpace:"nowrap"},children:"Doctor Available in Department"}),(0,h.jsx)(p.Z.Select,{defaultValue:f.length>0?f[0].name:"",onChange:function(e){ee(e.target.value)},children:f&&0===f.length?(0,h.jsx)("option",{disabled:!0,children:"No Doctors found"}):f&&f.map((function(e,t){return(0,h.jsxs)("option",{value:e,children:["Dr. ",e.name]},t)}))}),(0,h.jsx)(p.Z.Control.Feedback,{children:"Looks good!"})]}),(0,h.jsxs)(p.Z.Group,{as:d.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formdepartmentDoctors",children:[(0,h.jsx)(p.Z.Label,{style:{whiteSpace:"nowrap"},children:"Doctor Id"}),(0,h.jsx)(p.Z.Select,{defaultValue:f.length>0?f[0].uniqueId:"",onChange:function(e){C(e.target.value)},disabled:!0,children:f&&0===f.length?(0,h.jsx)("option",{disabled:!0,children:"No Doctors found"}):f&&f.map((function(e,t){return(0,h.jsx)("option",{value:e,children:e.uniqueId},t)}))}),(0,h.jsx)(p.Z.Control.Feedback,{children:"Looks good!"})]})]}),(0,h.jsx)(u.Z,{variant:"primary",className:"col-3 col-sm-12 col-lg-3 col-xs-12 col-md-3 col-12 offset-md-9",type:"submit",children:"Submit"})]})})]})})}}}]);
//# sourceMappingURL=837.c72ac032.chunk.js.map