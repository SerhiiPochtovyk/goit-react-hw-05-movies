"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{983:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(87),o=r(390),f=r(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1];return(0,s.useEffect)((function(){if(!r||0===r.length){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.zg)();case 3:t=e.sent,r=t.results,u(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[r]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{className:"title is-4",children:"Trending movies"}),(0,f.jsx)("ul",{children:r.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(e.id),children:e.title||e.name},e.id)},e.id)}))})]})}},390:function(e,t,r){r.d(t,{$m:function(){return p},GM:function(){return o},Ib:function(){return f},lc:function(){return i},zg:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(340).Z.create({baseURL:"https://api.themoviedb.org/3",params:{language:"en-US",api_key:"f2ffea4938b1399a0724ac9ef0692c2b"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/all/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/casts"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=983.16d7348c.chunk.js.map