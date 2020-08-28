(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/loading.c5590569.svg"},131:function(e,t,a){e.exports=a(211)},136:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),l=a(85),i=a.n(l),o=a(228),c=(a(136),a(45)),s=a.n(c),u=a(74),m=a(46),d=a(117),f=a(109),p=a(110),h=a.n(p),g=(a(47),function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:h.a,alt:"loading"}))}),E=a(230),v=function(){var e=me(),t=e.loading,a=e.loginWithRedirect;return t?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"overlay-content"},r.a.createElement("div",{className:"overlay-message"},"Please login to continue"),r.a.createElement("div",{className:"overlay-action"},r.a.createElement(E.a,{id:"qsLoginBtn",variant:"primary",className:"btn-margin loginBtn",onClick:function(){a({})}},"Log In"))))},y=a(111),b=a.n(y),w=function(e){var t=e.logoutHandler;return r.a.createElement(E.a,{id:"qsLogoutBtn",variant:"primary",className:"btn-margin logoutBtn",onClick:t},"Log Out")},k=function(e){var t=e.logoutHandler;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logout-button"},r.a.createElement(w,{logoutHandler:t})),r.a.createElement("div",{className:"tagline"},"Fitness Tracking App"))},x=a(65),O=a(54),C=a(66),T=a(105),j=a(58),N=a(23),S=a(107),A=a(223),U=a(226),W=a(225),L=a(217),D=a(218),R=a(219),P=a(221),F=a(222),I=a(220),z={newUserData:[]},B=1;B<=20;B++)z.newUserData.push({Days:B+"/Jul/20","New Users":0});z.newUserData.push({Days:"21/Jul/20","New Users":4}),z.newUserData.push({Days:"22/Jul/20","New Users":3}),z.newUserData.push({Days:"23/Jul/20","New Users":3});for(var G=24;G<=31;G++)z.newUserData.push({Days:G+"/Jul/20","New Users":0});var H=function(){var e=1;window.screen.width>1910&&window.screen.width<2550?e=1.5:window.screen.width>=2551&&(e=2);var t={top:20*e,bottom:40*e,left:40*e,right:20*e},a=0+t.left,n=1e3-t.right,l=0+t.top,i=350-t.bottom,o=function(e){return e.Days},c=function(e){return e["New Users"]},s=Object(L.a)({range:[a,n],domain:z.newUserData.map((function(e){return e.Days})),nice:!0}),u=Object(D.a)({range:[i,l],domain:[0,7],nice:!0});return r.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},r.a.createElement("svg",{width:1e3,height:350},r.a.createElement("rect",{x:"0",y:"0",width:1e3,height:350,style:{fill:"white",stroke:"#4655a3","stroke-width":"5","fill-opacity":"0.15","stroke-opacity":"0.9"}}),r.a.createElement(R.a,{from:"rgba(249, 92, 61, 0.35)",to:"rgba(70, 85, 163, 0.1)",id:"lineChartGrad1",vertical:!0}),r.a.createElement(I.a,{left:a,scale:u,width:n-a,height:i,numTicks:6,style:{fillOpacity:"0.25"}}),r.a.createElement(P.a,{top:350-t.bottom,scale:s,hideAxisLine:!0,hideTicks:!1,tickLabelProps:function(t,a){return{fontSize:10*e,textAnchor:"middle",fill:"#f95c3d",fillOpacity:.84,fontStyle:"normal"}},numTicks:10}),r.a.createElement(F.a,{left:t.left,scale:u,hideAxisLine:!0,hideTicks:!0,tickLabelProps:function(t,a){return{fontSize:10*e,textAnchor:"middle",fill:"#f95c3d",fillOpacity:.84,fontFamily:"Nunito",fontStyle:"normal"}},numTicks:5,labelProps:{fontSize:15*e,textAnchor:"middle",fill:"#f95c3d",fillOpacity:.84,fontStyle:"normal"},label:"New Users",labelOffset:20*e}),r.a.createElement(A.a,{data:z.newUserData,x:function(e){return s(o(e))},y:function(e){return u(c(e))},yScale:u,stroke:"rgba(249, 92, 61, 0.75)",strokeWidth:"2px",fill:"url(#lineChartGrad1)",curve:W.a}),r.a.createElement(U.a,{data:z.newUserData,x:function(e){return s(o(e))},y:function(e){return u(c(e))},yScale:u,fill:"url(#lineChartGrad1)",curve:W.a})))},J=a(118),q=a(227),_=function(e,t,a,n,r){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"top";a<=0&&(a=r/=2),n<=0&&(n=r/=2);var i="",o=a,c=a,s=n,u=t;return"top"===l?(o=a-2*r,c=a,s=n-r,u=t+r):"bottom"===l?(o=a,c=a-2*r,s=n-r):"left"===l?(o=a-r,c=a-r,u=t+r):"right"===l&&(o=a-r,c=a-r,s=n-2*r),i+="M"+e+","+u,"top"!==l&&"left"!==l||(i+="a"+r+","+r+" 0 0 1 "+r+","+-r),i+="h"+o,"top"!==l&&"right"!==l||(i+="a"+r+","+r+" 0 0 1 "+r+","+r),i+="v"+s,"bottom"!==l&&"right"!==l||(i+="a"+r+","+r+" 0 0 1 "+-r+","+r),i+="h"+-c,"bottom"!==l&&"left"!==l||(i+="a"+r+","+r+" 0 0 1 "+-r+","+-r),i+="z"},M=a(68);var K=function(e){var t=e.data,a=1;window.screen.width>1910&&window.screen.width<2550?a=1.5:window.screen.width>=2551&&(a=2);var n={top:20*a,bottom:25*a,left:40*a,right:10*a},l=18*a,i=4*a,o=n.left,c=n.top,s=500-n.right,u=300-n.bottom,m=function(e){return e.week},d=Object(L.a)({rangeRound:[o,s],domain:t.map(m)}),f=Object(D.a)({rangeRound:[u,c],domain:[0,25]}),p=function(e,t){return function(a){return e(t(a))}},h=p(d,m),g=p(f,(function(e){return e.waterLtr}));return r.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},r.a.createElement("svg",{width:500,height:300},r.a.createElement("rect",{x:"0",y:"0",width:500,height:300,style:{fill:"white",stroke:"#4655a3","stroke-width":"5","fill-opacity":"0.15","stroke-opacity":"0.9"}}),r.a.createElement("text",{x:250,y:12*a,style:{fontSize:12*a,textAnchor:"middle",fill:"#f95c3d",fillOpacity:.84,fontStyle:"normal"}},"Water Consumption (Weekly Trend)"),r.a.createElement(R.a,{from:"rgba(249, 92, 61, 0.75)",to:"rgba(249, 92, 61, 0.5)",id:"lineChartGrad1",vertical:!0}),r.a.createElement(I.a,{left:n.left,scale:f,width:s-o,height:u-c,stroke:"#EAECF3",numTicks:6}),r.a.createElement(q.a,{top:n.top,scale:d,width:s-o,height:u-c,stroke:"#EAECF3",numTicks:6}),r.a.createElement("line",{x1:s,x2:s,y1:c,y2:u,stroke:"#EAECF3"}),r.a.createElement(F.a,{left:n.left,scale:f,hideAxisLine:!0,hideTicks:!0,hideZero:!1,tickLabelProps:function(e,t){return{fontSize:10*a,textAnchor:"end",verticalAnchor:"middle",fill:"#f95c3d",fillOpacity:.84,fontFamily:"Nunito",fontStyle:"normal"}},label:"Liters of Water",labelProps:{fontSize:12*a,textAnchor:"middle",fill:"#f95c3d",fillOpacity:.84,fontStyle:"normal"},labelOffset:20*a,numTicks:4}),r.a.createElement(P.a,{top:300-n.bottom,left:0,scale:d,hideAxisLine:!0,hideTicks:!0,tickLabelProps:function(e,t){return{fontSize:8*a,textAnchor:"middle",fill:"#f95c3d",fillOpacity:.84,fontFamily:"Nunito",fontStyle:"normal",width:96}}}),t.map((function(e,t){var a=u-g(e);return r.a.createElement(J.a,{key:"bar-".concat(t)},r.a.createElement(M.Spring,{delay:750*t,config:{duration:750},from:{value:_(h(e)+(d.bandwidth()-l)/2,u,l,0,0,"top")},to:{value:_(h(e)+(d.bandwidth()-l)/2,g(e),l,a,i,"top")}},(function(e){return r.a.createElement("path",{id:"bar-".concat(t),d:e.value,style:{fill:"url(#lineChartGrad1)"}})})))}))))},V=a(108),X=a(229);var Y=function(e){var t=Math.min(300,300)/2,a=(String(e.data),"translate(30,25)"),n=t,l=t,i=300/4.5;return r.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},r.a.createElement("svg",{width:300,height:300},r.a.createElement(R.a,{from:"rgba(249, 92, 61, 0.75)",to:"rgba(249, 92, 61, 0.5)",id:"lineChartGrad1",vertical:!1}),r.a.createElement(J.a,{top:150,left:150},r.a.createElement(M.Spring,{config:{duration:2500},from:{value:0},to:{value:e.data}},(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("g",{fill:"#2F4585",fontFamily:"Nunito",transform:a},r.a.createElement("text",{"text-anchor":"end",fontWeight:"600",fontSize:i},Math.floor(e.value))),r.a.createElement(X.a,{data:[1],outerRadius:n-4,innerRadius:t-6,padAngle:0,fill:"#F1EFF8"}),r.a.createElement(X.a,{data:[e.value,1e3-e.value],outerRadius:l,innerRadius:t-10,cornerRadius:5,padAngle:0,pieSort:null},(function(e){return e.arcs.map((function(t,a){return r.a.createElement("g",{key:"progress-".concat(a)},r.a.createElement("path",{d:e.path(t),fill:"url(#lineChartGrad1)",fillOpacity:[1,0][a]}))}))})))})))))};function Z(){var e=Object(j.a)(["\n\t\tsubscription{\n\t\t\tstepsCount{\n\t\t\t\tstepsToday\n\t\t\t}\n\t\t}"]);return Z=function(){return e},e}var $=function(e){e.idToken;var t=Object(V.a)(Object(N.a)(Z())),a=t.loading,n=t.error,l=t.data;if(a)return r.a.createElement("div",{className:"message"},"Loading...");if(n)return console.error(n),r.a.createElement("div",null,"Error!");var i="",o=0;return l.stepsCount.length>0?(i="Your Steps Count Today: "+l.stepsCount[0].stepsToday,o=l.stepsCount[0].stepsToday):i="No Step Count Data Present for today",r.a.createElement("div",null,r.a.createElement("div",{className:"message",style:{textAlign:"center"}},i),r.a.createElement("br",null),r.a.createElement(Y,{data:o}))},Q=a(116),ee=function(e){var t,a=e.idToken,n=(t=a,new x.a({link:new Q.a({uri:"wss://relaxed-pig-38.hasura.app/v1/graphql",options:{reconnect:!0,connectionParams:{headers:{Authorization:"Bearer ".concat(t)}}}}),cache:new C.a}));return r.a.createElement(T.a,{client:n},r.a.createElement("div",{className:"overlay-message"},r.a.createElement($,null)))};function te(){var e=Object(j.a)(["\nquery{\n    waterConsumption{\n        week,\n        waterLtr\n    }\n}"]);return te=function(){return e},e}var ae=Object(N.a)(te()),ne=function(e){var t=e.idToken,a=Object(S.a)(ae),n=a.loading,l=a.error,i=a.data;return n?r.a.createElement("div",{className:"message"},"Loading..."):l?(console.error(l),r.a.createElement("div",null,"Error!")):r.a.createElement("div",null,r.a.createElement("table",{className:"message"},r.a.createElement("tr",null,r.a.createElement("th",null,"Week"),r.a.createElement("th",null,"Amount of Water")),i.waterConsumption.map((function(e,t){return r.a.createElement("tr",{key:t,className:"message"},r.a.createElement("td",null,e.week),r.a.createElement("td",null,e.waterLtr," ltr."))}))),r.a.createElement("br",null),r.a.createElement("div",{style:{float:"left",marginLeft:"20"}},r.a.createElement(K,{data:i.waterConsumption})),r.a.createElement("div",null,r.a.createElement(ee,{idToken:t})))};function re(){var e=Object(j.a)(["\nquery{\n\tusers{\n\t\temailID,\n\t\tusername,\n\t\tname\n\t}\n}"]);return re=function(){return e},e}var le=Object(N.a)(re()),ie=function(e){var t=e.idToken,a=Object(S.a)(le),n=a.loading,l=a.error,i=a.data;return n?r.a.createElement("div",{className:"message"},"Loading..."):l?(console.error(l),r.a.createElement("div",null,"Error!")):i.users.length>1?r.a.createElement("div",null,r.a.createElement("div",{className:"message"},"Welcome Admin!"),r.a.createElement("br",null),r.a.createElement("div",{className:"message"},"Here's the list of all users so far..."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("table",{className:"table"},r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"EmailID")),i.users.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.emailID))}))),r.a.createElement(H,null)):i.users.length<=1?r.a.createElement("div",null,r.a.createElement("div",{className:"message"},"Welcome ",i.users[0].name," (",i.users[0].emailID,")"),r.a.createElement("br",null),r.a.createElement("div",{className:"message"},"Here are your Stats...  "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ne,{idToken:t})):void 0},oe="normalUser";var ce=function(e){var t=e.idToken,a=me(),n=a.loading,l=a.logout;if("anandnikhil91@gmail.com"===b()(t).email&&(oe="admin"),n||!t)return r.a.createElement("div",null,"Loading...");var i,o=(i=t,new x.a({link:new O.a({uri:"https://relaxed-pig-38.hasura.app/v1/graphql",headers:{Authorization:"Bearer ".concat(i),"X-Hasura-Role":"".concat(oe)}}),cache:new C.a}));return console.log(t),r.a.createElement(T.a,{client:o},r.a.createElement("div",{className:"overlay-message"},r.a.createElement(k,{logoutHandler:l}),r.a.createElement(ie,{idToken:t})))},se=function(){return window.history.replaceState({},document.title,window.location.pathname)},ue=r.a.createContext(),me=function(){return Object(n.useContext)(ue)},de=function(e){var t=e.children,a=e.onRedirectCallback,l=void 0===a?se:a,i=Object(d.a)(e,["children","onRedirectCallback"]),o=Object(n.useState)(!1),c=Object(m.a)(o,2),p=c[0],h=c[1],E=Object(n.useState)(),y=Object(m.a)(E,2),b=y[0],w=y[1],k=Object(n.useState)(),x=Object(m.a)(k,2),O=x[0],C=x[1],T=Object(n.useState)(!0),j=Object(m.a)(T,2),N=j[0],S=j[1],A=Object(n.useState)(!1),U=Object(m.a)(A,2),W=U[0],L=U[1],D=Object(n.useState)(""),R=Object(m.a)(D,2),P=R[0],F=R[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)(i);case 2:if(t=e.sent,C(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,l(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,h(r),!r){e.next=23;break}return e.next=17,t.getUser();case 17:return o=e.sent,w(o),e.next=21,t.getIdTokenClaims();case 21:c=e.sent,F(c.__raw);case 23:S(!1);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},L(!0),e.prev=2,e.next=5,O.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,L(!1),e.finish(10);case 13:return e.next=15,O.getUser();case 15:a=e.sent,w(a),h(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,O.handleRedirectCallback();case 3:return t=e.sent,e.next=6,O.getUser();case 6:return a=e.sent,e.next=9,O.getIdTokenClaims();case 9:return n=e.sent,F(n.__raw),S(!1),h(!0),w(a),e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return N?r.a.createElement(g,null):p?r.a.createElement(ue.Provider,{value:{isAuthenticated:p,user:b,loading:N,popupOpen:W,loginWithPopup:I,handleRedirectCallback:z,getIdTokenClaims:function(){return O.getIdTokenClaims.apply(O,arguments)},loginWithRedirect:function(){return O.loginWithRedirect.apply(O,arguments)},getTokenSilently:function(){return O.getTokenSilently.apply(O,arguments)},getTokenWithPopup:function(){return O.getTokenWithPopup.apply(O,arguments)},logout:function(){return O.logout.apply(O,arguments)}}},t,r.a.createElement(ce,{idToken:P})):r.a.createElement(ue.Provider,{value:{isAuthenticated:p,user:b,loading:N,popupOpen:W,loginWithPopup:I,handleRedirectCallback:z,getIdTokenClaims:function(){return O.getIdTokenClaims.apply(O,arguments)},loginWithRedirect:function(){return O.loginWithRedirect.apply(O,arguments)},getTokenSilently:function(){return O.getTokenSilently.apply(O,arguments)},getTokenWithPopup:function(){return O.getTokenWithPopup.apply(O,arguments)},logout:function(){return O.logout.apply(O,arguments)}}},r.a.createElement(v,null))},fe=a(30),pe=Object(fe.a)(),he="dev--anandnkhl.us.auth0.com",ge="I7UrB5sCRdpt1x9G0wAikkjIFH7KbdVr",Ee="http://localhost:3000/callback";Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=function(e){pe.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)},ye=r.a.createElement(o.b,{history:pe},r.a.createElement(o.a,{path:"/",render:function(e){return r.a.createElement(de,{domain:he,client_id:ge,redirect_uri:Ee,onRedirectCallback:ve})}}));i.a.render(ye,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){}},[[131,1,2]]]);
//# sourceMappingURL=main.fb4c4397.chunk.js.map