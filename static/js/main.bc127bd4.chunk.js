(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),l=a.n(s),r=(a(10),a(2)),o=(a(11),a(4)),i=a.n(o),b=a(0);function d(e){return Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[" /",Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item"})]}),Object(b.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(b.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})]})}function h(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("textarea",{className:"form-control",onChange:function(e){s(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"},id:"myBox",rows:"9"})}),Object(b.jsx)("button",{className:"btn btn-light mx-1 p-1",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Converted to Uppercase!","success")},children:" Uppercase"}),Object(b.jsx)("button",{className:"btn btn-light mx-1 p-1",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Converted to Lowercase!","success")},children:" Lowercase"}),Object(b.jsx)("button",{className:"btn btn-light mx-1 p-1",onClick:function(){s(""),e.showAlert("Text Cleared","success")},children:"Clear Text"}),Object(b.jsx)("button",{className:"btn btn-light mx-1 p-1 ",onClick:function(){var t=n.charAt(0).toUpperCase()+n.slice(1).toLowerCase();s(t),e.showAlert("Text Capitalized","success")},children:"Capitalized text"}),Object(b.jsx)("button",{className:"btn btn-light mx-1 p-1",onClick:function(){var t=n.split(/[ ] +/);s(t.join(" ")),e.showAlert("Remove extra spaces!","success")},children:"Remove Spaces"}),Object(b.jsx)("button",{className:"btn btn-light mx-1 p-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copy to Clipboard!","success")},children:"Copy to Clipboard"})]}),Object(b.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(b.jsx)("h2",{children:"Your text summary"}),Object(b.jsxs)("p",{children:[n.split(" ").length," words,",n.length," characters"]}),Object(b.jsxs)("p",{children:[.008*n.split(" ").length,"Minutes Read"]}),Object(b.jsx)("h2",{children:"Preview"}),Object(b.jsx)("p",{children:n.length>0?n:"Enter text to preview"})]})]})}d.prototype={title:i.a.string.isRequired,aboutText:i.a.string},d.defaultProps={title:"Set title here",aboutText:"About"};var j=function(e){return e.alert&&Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(b.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})};var u=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),l=Object(r.a)(s,2),o=l[0],i=l[1],u=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),1500)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",u("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"))}}),Object(b.jsx)(j,{alert:o}),Object(b.jsx)("div",{className:"container my-3",children:Object(b.jsx)(h,{heading:"Enter the text to analyze",showAlert:u,mode:a})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.bc127bd4.chunk.js.map