(this["webpackJsonpsearch-app"]=this["webpackJsonpsearch-app"]||[]).push([[0],{37:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(16),s=t(17),l=t(18),i=t(23),o=t(22),m=t(5),p=t(6),u=t(10),g=t.n(u),b=t(19),d=t(8);function h(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)({}),l=Object(d.a)(s,2),i=l[0],o=l[1],p=Object(n.useState)([]),u=Object(d.a)(p,2),h=u[0],f=u[1];function E(){return k.apply(this,arguments)}function k(){return(k=Object(b.a)(g.a.mark((function e(){var a,n,c,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=new URLSearchParams(location.search),n=parseInt(a.get("page"))||1,!(t.trim().length>0)){e.next=12;break}return e.next=5,fetch("https://search-flask-app.herokuapp.com/api/query?artist=".concat(t.trim(),"&page=").concat(n),{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"});case 5:if(200!==(c=e.sent).status){e.next=12;break}return e.next=9,c.json();case 9:r=e.sent,f(r.pageOfItems),o(r.pager);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"card text-center m-3"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{id:"name",type:"text",className:"form-control",autoComplete:"off",placeholder:"Search an artist",onChange:function(e){r(e.target.value)},name:"artist",required:!0}),c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:E},"SEARCH")),h&&h.map((function(e){return c.a.createElement("div",{key:e.id},e.artistName)}))),c.a.createElement("div",{className:"card-footer pb-0 pt-3"},i.pages&&0===i.pages.length&&c.a.createElement("p",null,"No results found"),i.pages&&i.pages.length>0&&c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",{className:"page-item first-item ".concat(1===i.currentPage?"disabled":"")},c.a.createElement(m.b,{onDoubleClick:E,to:{search:"?page=1"},className:"page-link"},"First")),c.a.createElement("li",{className:"page-item previous-item ".concat(1===i.currentPage?"disabled":"")},c.a.createElement(m.b,{onDoubleClick:E,to:{search:"?page=".concat(i.currentPage-1)},className:"page-link"},"Previous")),i.pages.map((function(e){return c.a.createElement("li",{key:e,className:"page-item number-item ".concat(i.currentPage===e?"active":"")},c.a.createElement(m.b,{onDoubleClick:E,to:{search:"?page=".concat(e)},className:"page-link"},e))})),c.a.createElement("li",{className:"page-item next-item ".concat(i.currentPage===i.totalPages?"disabled":"")},c.a.createElement(m.b,{onDoubleClick:E,to:{search:"?page=".concat(i.currentPage+1)},className:"page-link"},"Next")),c.a.createElement("li",{className:"page-item last-item ".concat(i.currentPage===i.totalPages?"disabled":"")},c.a.createElement(m.b,{onDoubleClick:E,to:{search:"?page=".concat(i.totalPages)},className:"page-link"},"Last"))))))}var f=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement(p.a,{exact:!0,path:"/",component:h}))}}]),t}(c.a.Component);Object(r.render)(c.a.createElement(f,null),document.getElementById("app"))}},[[37,1,2]]]);
//# sourceMappingURL=main.3991b21d.chunk.js.map