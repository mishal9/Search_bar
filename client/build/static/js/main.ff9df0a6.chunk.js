(this["webpackJsonpsearch-app"]=this["webpackJsonpsearch-app"]||[]).push([[0],{34:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(15),l=t(16),s=t(17),i=t(21),m=t(20),o=t(5),p=t(6),u=t(8);function g(){var e=Object(c.useState)(""),a=Object(u.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)({}),s=Object(u.a)(l,2),i=s[0],m=s[1],p=Object(c.useState)([]),g=Object(u.a)(p,2),b=g[0],d=g[1];function E(){var e=new URLSearchParams(location.search),a=parseInt(e.get("page"))||1;fetch("http://127.0.0.1:5000/api/query?artist=".concat(t,"&page=").concat(a),{method:"GET"}).then((function(e){return e.json()})).then((function(e){var a=e.pager,t=e.pageOfItems;d(t),m(a)}))}return n.a.createElement("div",{className:"card text-center m-3"},n.a.createElement("div",{className:"card-body"},n.a.createElement("input",{id:"name",type:"text",autoComplete:"off",placeholder:"Search an artist",onChange:function(e){r(e.target.value)},name:"artist",required:!0}),n.a.createElement("button",{type:"submit",onClick:E},"SEARCH"),n.a.createElement("br",null),n.a.createElement("br",null),b&&b.map((function(e){return n.a.createElement("div",{key:e.id},e.artistName)}))),n.a.createElement("div",{className:"card-footer pb-0 pt-3"},i.pages&&i.pages.length&&n.a.createElement("ul",{className:"pagination"},n.a.createElement("li",{className:"page-item first-item ".concat(1===i.currentPage?"disabled":"")},n.a.createElement(o.b,{onClick:E,to:{search:"?page=1"},className:"page-link"},"First")),n.a.createElement("li",{className:"page-item previous-item ".concat(1===i.currentPage?"disabled":"")},n.a.createElement(o.b,{onClick:E,to:{search:"?page=".concat(i.currentPage-1)},className:"page-link"},"Previous")),i.pages.map((function(e){return n.a.createElement("li",{key:e,className:"page-item number-item ".concat(i.currentPage===e?"active":"")},n.a.createElement(o.b,{onClick:E,to:{search:"?page=".concat(e)},className:"page-link"},e))})),n.a.createElement("li",{className:"page-item next-item ".concat(i.currentPage===i.totalPages?"disabled":"")},n.a.createElement(o.b,{onClick:E,to:{search:"?page=".concat(i.currentPage+1)},className:"page-link"},"Next")),n.a.createElement("li",{className:"page-item last-item ".concat(i.currentPage===i.totalPages?"disabled":"")},n.a.createElement(o.b,{onClick:E,to:{search:"?page=".concat(i.totalPages)},className:"page-link"},"Last")))))}var b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(o.a,null,n.a.createElement(p.a,{exact:!0,path:"/",component:g}))}}]),t}(n.a.Component);Object(r.render)(n.a.createElement(b,null),document.getElementById("app"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ff9df0a6.chunk.js.map