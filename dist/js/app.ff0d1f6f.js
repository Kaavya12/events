(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/public/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/all-events"}},[t._v("Events")]),t._v(" | "),n("router-link",{attrs:{to:"/all-participants"}},[t._v("Participants")])],1),n("b-container",[n("router-view")],1)],1)},o=[],i=(n("5c0b"),n("2877")),c={},s=Object(i["a"])(c,a,o,!1,null,null,null),u=s.exports,p=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("All Events")]),n("b-table",{attrs:{striped:"",hover:"",items:t.events}}),n("button",{on:{click:t.showNewEventForm}},[t._v("Add a new Event")]),t.showForm?n("b-form",{on:{submit:function(e){return e.preventDefault(),t.newEvent(e)}}},[n("b-form-group",{attrs:{id:"input-group-2",label:"Event Description:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",placeholder:"Enter event description",required:""},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1):t._e()],1)},d=[],f=n("5530"),v=n("2f62"),m={data:function(){return{showForm:!1,form:{desc:""}}},computed:Object(f["a"])({},Object(v["c"])(["events"])),methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])(["getEvents","addEvent"])),{},{showNewEventForm:function(){this.showForm=!this.showForm},newEvent:function(){var t={desc:this.form.desc};this.addEvent(t)}}),mounted:function(){this.getEvents()}},h=m,b=Object(i["a"])(h,l,d,!1,null,null,null),g=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Bleh")]),n("b-table",{attrs:{striped:"",hover:"",items:t.participants}})],1)},P=[],O={data:function(){return{}}},_=O,j=Object(i["a"])(_,w,P,!1,null,null,null),y=j.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Bleh")]),n("b-table",{attrs:{striped:"",hover:"",items:t.events}})],1)},x=[],F={data:function(){return{}}},S=F,k=Object(i["a"])(S,E,x,!1,null,null,null),N=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("All Participants")]),n("b-table",{attrs:{striped:"",hover:"",items:t.participants}}),n("button",{on:{click:t.showNewPersonForm}},[t._v("Add a new Participant")]),t.showForm?n("b-form",{on:{submit:function(e){return e.preventDefault(),t.newPerson(e)}}},[n("b-form-group",{attrs:{id:"input-group-2",label:"Participant Name","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",placeholder:"Enter Person's Name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1):t._e()],1)},T=[],A=(n("b0c0"),{data:function(){return{showForm:!1,form:{name:""}}},computed:Object(f["a"])({},Object(v["c"])(["participants"])),methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])(["getParticipants","addParticipant"])),{},{showNewPersonForm:function(){this.showForm=!this.showForm},newPerson:function(){var t={person:this.form.name};this.addParticipant(t)}}),mounted:function(){this.getParticipants()}}),J=A,M=Object(i["a"])(J,$,T,!1,null,null,null),C=M.exports;r["default"].use(p["a"]);var D=[{path:"/all-events",name:"Events",component:g},{path:"/all-participants",name:"Participants",component:C},{path:"/:participantId",name:"Participant",component:N},{path:"/:eventId",name:"Event",component:y}],q=new p["a"]({mode:"history",base:"/public/",routes:D}),B=q,H={},I={},z={},G={},K={participant:H,participants:I,event:z,events:G},L=(n("d3b7"),{getEvents:function(t){var e=t.commit;fetch("https://distinct-mature-appliance.glitch.me/getEvents").then((function(t){return t.json()})).then((function(t){return e("getEvents",t)}))},addEvent:function(t,e){var n=t.dispatch;console.log(e);var r=new Headers;r.append("Content-Type","application/json");var a=JSON.stringify({event:e.desc}),o={method:"POST",headers:r,body:a,mode:"no-cors"};fetch("https://distinct-mature-appliance.glitch.me/addEvent",o).then((function(t){return t.text()})).then((function(t){console.log(t),n("getEvents")}))},getParticipants:function(t){var e=t.commit;fetch("https://distinct-mature-appliance.glitch.me/getParticipants").then((function(t){return t.json()})).then((function(t){return e("getParticipants",t)}))},addParticipant:function(t,e){var n=t.dispatch;console.log(e);var r=new Headers;r.append("Content-Type","application/json");var a=JSON.stringify({person:e.person}),o={method:"POST",headers:r,body:a};fetch("https://distinct-mature-appliance.glitch.me/addParticipant",o).then((function(t){return t.text()})).then((function(t){console.log(t),n("getParticipants")}))}}),Q={getEvents:function(t,e){t.events=e},getParticipants:function(t,e){t.participants=e}},R={};r["default"].use(v["a"]);var U=new v["a"].Store({state:K,mutations:Q,actions:L,modules:R}),V=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(V["a"]),r["default"].config.productionTip=!1,new r["default"]({router:B,store:U,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.ff0d1f6f.js.map