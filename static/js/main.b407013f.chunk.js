(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r);function u(){return l.a.createElement("header",{className:"header flex-space-btw"},l.a.createElement("h1",{className:"header--heading"},"CalculX"),l.a.createElement("ul",{className:"header--menus flex-center"},l.a.createElement("li",null,"Home"),l.a.createElement("li",null,"About"),l.a.createElement("li",null,"Contact")))}var i=a(1),m=a(5),s=a(2);function o(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:"input-field"},e.labelText),l.a.createElement("input",{id:"input-field",className:"input-field",type:"tel",placeholder:"0.00",value:e.value,name:e.name,onChange:e.handleChange}))}function g(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{id:e.gstRate,type:"radio",value:e.value,name:e.name,onChange:e.radioChange}),l.a.createElement("label",{htmlFor:e.gstRate},e.gstRate,"%"))}var d=function(e,t){return e.toString().slice(0,e.toString().indexOf(".")+(t+1))},f=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce(function(e,t){return e-(e-e*(100/(100+parseInt(t))))})};function p(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({price:0,gstRate:""}),u=Object(s.a)(c,2),p=u[0],E=u[1],h=function(e){E(function(t){return Object(m.a)({},t,Object(i.a)({},e.target.name,e.target.value))})},b=["5","12","18","28"].map(function(e){return l.a.createElement(g,{name:"gstRate",gstRate:e,value:e,checked:p.gstRate===e,radioChange:h})});return l.a.useEffect(function(){var e=f(p.price,parseInt(p.gstRate));r(d(e,2))},[p.price,p.gstRate]),l.a.createElement("main",{className:"calculator flex-center"},l.a.createElement(o,{name:"price",labelText:"Amount Including GST",handleChange:h}),l.a.createElement("div",{className:"gst-buttons flex-center"},b),l.a.createElement("p",{className:"gst-result"},"Amount excluding GST: ",p.gstRate&&a))}function E(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(p,null))}a(14);c.a.render(l.a.createElement(E,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.b407013f.chunk.js.map