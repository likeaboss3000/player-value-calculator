(this["webpackJsonpplayer-value-calculator"]=this["webpackJsonpplayer-value-calculator"]||[]).push([[0],{139:function(e,t,a){e.exports=a(281)},144:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=(a(144),a(131)),i=a(127),m=a(132),u=a(12),s=a(14),b=a(325),p=a(133),g=a(324);function h(e){var t=e.form,a=e.field,n=Object(p.a)(e,["form","field"]),l=Object(u.d)(t.touched,a.name)&&Object(u.d)(t.errors,a.name);return r.a.createElement(g.a,Object.assign({margin:"normal",helperText:l,error:!!l},a,n))}var E=Object(n.createContext)();function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=.71,d=3.28,O=1.8,j=11.05,w=16.26,P=7.5,S=6,C=4.42,k=s.object({player:s.string().required().trim(),pt:s.number().required(),ast:s.number().required(),reb:s.number().required(),threes:s.number().required(),stl:s.number().required(),blk:s.number().required(),to:s.number().required(),pf:s.number().required()});function T(){var e=Object(n.useContext)(E),t=e.players,a=e.setPlayers;return r.a.createElement(u.c,{validationSchema:k,initialValues:{player:"",pt:"",ast:"",reb:"",threes:"",stl:"",blk:"",to:"",pf:""},onSubmit:function(e,n){var r=n.setSubmitting,l=n.resetForm,c=function(e){return(e.pt*v*1.05+e.ast*d*1.2+e.reb*O*1.13-e.to*S*1.13+e.stl*j+e.blk*w+e.threes*P-e.pf*C).toFixed(2)}(e);a([].concat(Object(m.a)(t),[y({},e,{finalScore:c})])),r(!0),l(),r(!1)}},(function(e){var t=e.values,a=e.handleChange,n=e.handleSubmit,l=e.isSubmitting;return r.a.createElement(u.b,{onSubmit:n},r.a.createElement(u.a,{label:"Player",name:"player",type:"text",onChange:a,value:t.player,component:h}),r.a.createElement(u.a,{label:"PT",name:"pt",type:"number",onChange:a,value:t.pt,component:h}),r.a.createElement(u.a,{label:"AST",name:"ast",type:"number",onChange:a,value:t.ast,component:h}),r.a.createElement(u.a,{label:"REB",name:"reb",type:"number",onChange:a,value:t.reb,component:h}),r.a.createElement(u.a,{label:"Threes",name:"threes",type:"number",onChange:a,value:t.threes,component:h}),r.a.createElement(u.a,{label:"STL",name:"stl",type:"number",onChange:a,value:t.stl,component:h}),r.a.createElement(u.a,{label:"BLK",name:"blk",type:"number",onChange:a,value:t.blk,component:h}),r.a.createElement(u.a,{label:"TO",name:"to",type:"number",onChange:a,value:t.to,component:h}),r.a.createElement(u.a,{label:"PF",name:"pf",type:"number",onChange:a,value:t.pf,component:h}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,{type:"submit",disabled:l},"Submit"))}))}var q=a(318),x=a(319),B=a(323),N=a(322),D=a(320),F=a(321),L=a(317),R=Object(q.a)((function(e){return{root:{width:"100%"},paper:{marginTop:e.spacing(3),width:"100%",overflowX:"auto",marginBottom:e.spacing(2)},table:{minWidth:650}}}));function W(){var e=Object(n.useContext)(E).players,t=R();return r.a.createElement("div",{className:t.root},r.a.createElement(L.a,{className:t.paper},r.a.createElement(x.a,{className:t.table,size:"small","aria-label":"a dense table"},r.a.createElement(D.a,null,r.a.createElement(F.a,null,r.a.createElement(N.a,null,"Player"),r.a.createElement(N.a,{align:"right"},"PT"),r.a.createElement(N.a,{align:"right"},"AST"),r.a.createElement(N.a,{align:"right"},"REB"),r.a.createElement(N.a,{align:"right"},"TO"),r.a.createElement(N.a,{align:"right"},"3s"),r.a.createElement(N.a,{align:"right"},"STL"),r.a.createElement(N.a,{align:"right"},"BLK"),r.a.createElement(N.a,{align:"right"},"PF"),r.a.createElement(N.a,{align:"right"},"SCORE"))),r.a.createElement(B.a,null,e.map((function(e){return r.a.createElement(F.a,{key:e.player},r.a.createElement(N.a,{component:"th",scope:"row"},e.player),r.a.createElement(N.a,{align:"right"},e.pt),r.a.createElement(N.a,{align:"right"},e.ast),r.a.createElement(N.a,{align:"right"},e.reb),r.a.createElement(N.a,{align:"right"},e.to),r.a.createElement(N.a,{align:"right"},e.threes),r.a.createElement(N.a,{align:"right"},e.stl),r.a.createElement(N.a,{align:"right"},e.blk),r.a.createElement(N.a,{align:"right"},e.pf),r.a.createElement(N.a,{align:"right"},e.finalScore))}))))))}a(280);var A=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){return console.log(a)}),[a,l]),r.a.createElement(E.Provider,{value:{players:a,setPlayers:l}},r.a.createElement("div",{className:"provider"},r.a.createElement(T,{className:"calculator"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(W,{className:"list"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[139,1,2]]]);
//# sourceMappingURL=main.04d80654.chunk.js.map