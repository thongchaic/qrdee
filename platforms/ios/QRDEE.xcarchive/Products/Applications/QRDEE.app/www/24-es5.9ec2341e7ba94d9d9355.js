(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"4d/i":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("AytR"),i=u("t/Na"),o=function(){function l(l){this.http=l,this.baseUrl=""+e.a.api_url}return l.prototype.registerlogistic=function(l,n,u,t,e,i){var o={password:l,firstname:n,lastname:u,car_number:i,mobile_number:t,email:e};return console.log(o),this.http.post("https://qrdee.co/api/v1/delivery_register",o)},l.ngInjectableDef=t.Rb({factory:function(){return new l(t.Sb(i.c))},token:l,providedIn:"root"}),l}(),s=u("3WbM"),b=function(){function l(l,n,u){this.router=l,this.registerService=n,this.toastService=u,this.password="",this.repassword="",this.firstname="",this.lastname="",this.car_number="",this.mobile_number="",this.email=""}return l.prototype.RegisterLlogistic=function(){var l=this;this.registerService.registerlogistic(this.password,this.firstname,this.lastname,this.mobile_number,this.email,this.car_number).subscribe((function(n){console.log(n),l.toastService.showToast("\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27 \u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e47\u0e2d\u0e04\u0e2d\u0e34\u0e19","top"),l.router.navigateByUrl("/login")}))},l}(),a=function(){return function(){}}(),g=u("pMnS"),r=u("oBZk"),d=u("ZZ/e"),h=u("gIcY"),p=u("ZYCi"),c=t.rb({encapsulation:0,styles:[[".app-background[_ngcontent-%COMP%]{--background:url('/assets/bg1.jpg') 0 0/100% 100% no-repeat}"]],data:{}});function C(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,13,"ion-header",[],null,null,null,r.ib,r.p)),t.sb(1,49152,null,0,d.C,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,11,"ion-toolbar",[],null,null,null,r.Lb,r.S)),t.sb(3,49152,null,0,d.Db,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,1,"ion-buttons",[["slot","start"]],null,null,null,r.Y,r.f)),t.sb(5,49152,null,0,d.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,2,"ion-title",[],null,null,null,r.Kb,r.R)),t.sb(7,49152,null,0,d.Bb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["\u0e2a\u0e48\u0e07\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"])),(l()(),t.tb(9,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,r.Y,r.f)),t.sb(10,49152,null,0,d.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(11,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,13).onClick(u)&&e),e}),r.V,r.c)),t.sb(12,49152,null,0,d.h,[t.h,t.k,t.z],null,null),t.sb(13,16384,null,0,d.i,[[2,d.jb],d.Jb],null,null),(l()(),t.tb(14,0,null,null,87,"ion-content",[["class","app-background"]],null,null,null,r.fb,r.m)),t.sb(15,49152,null,0,d.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(16,0,null,0,85,"ion-card",[["style","background:#FFFFFF;"]],null,null,null,r.db,r.g)),t.sb(17,49152,null,0,d.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(18,0,null,0,83,"ion-card-content",[],null,null,null,r.Z,r.h)),t.sb(19,49152,null,0,d.o,[t.h,t.k,t.z],null,null),(l()(),t.tb(20,0,null,0,81,"ion-list",[],null,null,null,r.wb,r.C)),t.sb(21,49152,null,0,d.P,[t.h,t.k,t.z],null,null),(l()(),t.tb(22,0,null,0,10,"ion-item",[],null,null,null,r.tb,r.v)),t.sb(23,49152,null,0,d.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(24,0,null,0,1,"ion-label",[["position","floating"]],null,null,null,r.ub,r.B)),t.sb(25,49152,null,0,d.O,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.tb(26,0,null,0,6,"ion-input",[["placeholder","\u0e0a\u0e37\u0e48\u0e2d"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,27)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,27)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.firstname=u)&&e),e}),r.nb,r.u)),t.sb(27,16384,null,0,d.Pb,[t.k],null,null),t.Jb(1024,null,h.f,(function(l){return[l]}),[d.Pb]),t.sb(29,671744,null,0,h.k,[[8,null],[8,null],[8,null],[6,h.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,h.g,null,[h.k]),t.sb(31,16384,null,0,h.h,[[4,h.g]],null,null),t.sb(32,49152,null,0,d.H,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),t.tb(33,0,null,0,10,"ion-item",[],null,null,null,r.tb,r.v)),t.sb(34,49152,null,0,d.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(35,0,null,0,1,"ion-label",[["position","floating"]],null,null,null,r.ub,r.B)),t.sb(36,49152,null,0,d.O,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.tb(37,0,null,0,6,"ion-input",[["placeholder","\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,38)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,38)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.lastname=u)&&e),e}),r.nb,r.u)),t.sb(38,16384,null,0,d.Pb,[t.k],null,null),t.Jb(1024,null,h.f,(function(l){return[l]}),[d.Pb]),t.sb(40,671744,null,0,h.k,[[8,null],[8,null],[8,null],[6,h.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,h.g,null,[h.k]),t.sb(42,16384,null,0,h.h,[[4,h.g]],null,null),t.sb(43,49152,null,0,d.H,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),t.tb(44,0,null,0,10,"ion-item",[],null,null,null,r.tb,r.v)),t.sb(45,49152,null,0,d.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(46,0,null,0,1,"ion-label",[["position","floating"]],null,null,null,r.ub,r.B)),t.sb(47,49152,null,0,d.O,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.tb(48,0,null,0,6,"ion-input",[["placeholder","\u0e40\u0e25\u0e02\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e23\u0e16"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,49)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,49)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.car_number=u)&&e),e}),r.nb,r.u)),t.sb(49,16384,null,0,d.Pb,[t.k],null,null),t.Jb(1024,null,h.f,(function(l){return[l]}),[d.Pb]),t.sb(51,671744,null,0,h.k,[[8,null],[8,null],[8,null],[6,h.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,h.g,null,[h.k]),t.sb(53,16384,null,0,h.h,[[4,h.g]],null,null),t.sb(54,49152,null,0,d.H,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),t.tb(55,0,null,0,10,"ion-item",[],null,null,null,r.tb,r.v)),t.sb(56,49152,null,0,d.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(57,0,null,0,1,"ion-label",[["position","floating"]],null,null,null,r.ub,r.B)),t.sb(58,49152,null,0,d.O,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.tb(59,0,null,0,6,"ion-input",[["placeholder","\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,60)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,60)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.mobile_number=u)&&e),e}),r.nb,r.u)),t.sb(60,16384,null,0,d.Pb,[t.k],null,null),t.Jb(1024,null,h.f,(function(l){return[l]}),[d.Pb]),t.sb(62,671744,null,0,h.k,[[8,null],[8,null],[8,null],[6,h.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,h.g,null,[h.k]),t.sb(64,16384,null,0,h.h,[[4,h.g]],null,null),t.sb(65,49152,null,0,d.H,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),t.tb(66,0,null,0,10,"ion-item",[],null,null,null,r.tb,r.v)),t.sb(67,49152,null,0,d.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(68,0,null,0,1,"ion-label",[["position","floating"]],null,null,null,r.ub,r.B)),t.sb(69,49152,null,0,d.O,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.tb(70,0,null,0,6,"ion-input",[["placeholder","\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e4c"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,71)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,71)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.email=u)&&e),e}),r.nb,r.u)),t.sb(71,16384,null,0,d.Pb,[t.k],null,null),t.Jb(1024,null,h.f,(function(l){return[l]}),[d.Pb]),t.sb(73,671744,null,0,h.k,[[8,null],[8,null],[8,null],[6,h.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,h.g,null,[h.k]),t.sb(75,16384,null,0,h.h,[[4,h.g]],null,null),t.sb(76,49152,null,0,d.H,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),t.tb(77,0,null,0,10,"ion-item",[],null,null,null,r.tb,r.v)),t.sb(78,49152,null,0,d.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(79,0,null,0,1,"ion-label",[["position","floating"]],null,null,null,r.ub,r.B)),t.sb(80,49152,null,0,d.O,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.tb(81,0,null,0,6,"ion-input",[["placeholder","\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,82)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,82)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.password=u)&&e),e}),r.nb,r.u)),t.sb(82,16384,null,0,d.Pb,[t.k],null,null),t.Jb(1024,null,h.f,(function(l){return[l]}),[d.Pb]),t.sb(84,671744,null,0,h.k,[[8,null],[8,null],[8,null],[6,h.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,h.g,null,[h.k]),t.sb(86,16384,null,0,h.h,[[4,h.g]],null,null),t.sb(87,49152,null,0,d.H,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),t.tb(88,0,null,0,10,"ion-item",[],null,null,null,r.tb,r.v)),t.sb(89,49152,null,0,d.I,[t.h,t.k,t.z],null,null),(l()(),t.tb(90,0,null,0,1,"ion-label",[["position","floating"]],null,null,null,r.ub,r.B)),t.sb(91,49152,null,0,d.O,[t.h,t.k,t.z],{position:[0,"position"]},null),(l()(),t.tb(92,0,null,0,6,"ion-input",[["placeholder","\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,93)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,93)._handleInputEvent(u.target)&&e),"ngModelChange"===n&&(e=!1!==(i.repassword=u)&&e),e}),r.nb,r.u)),t.sb(93,16384,null,0,d.Pb,[t.k],null,null),t.Jb(1024,null,h.f,(function(l){return[l]}),[d.Pb]),t.sb(95,671744,null,0,h.k,[[8,null],[8,null],[8,null],[6,h.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,h.g,null,[h.k]),t.sb(97,16384,null,0,h.h,[[4,h.g]],null,null),t.sb(98,49152,null,0,d.H,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),t.tb(99,0,null,0,2,"ion-button",[["color","success"],["expand","full"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.RegisterLlogistic()&&t),t}),r.X,r.e)),t.sb(100,49152,null,0,d.l,[t.h,t.k,t.z],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),t.Mb(-1,0,["\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"]))],(function(l,n){var u=n.component;l(n,25,0,"floating"),l(n,29,0,u.firstname),l(n,32,0,"\u0e0a\u0e37\u0e48\u0e2d","text"),l(n,36,0,"floating"),l(n,40,0,u.lastname),l(n,43,0,"\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25","text"),l(n,47,0,"floating"),l(n,51,0,u.car_number),l(n,54,0,"\u0e40\u0e25\u0e02\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e23\u0e16","text"),l(n,58,0,"floating"),l(n,62,0,u.mobile_number),l(n,65,0,"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23","text"),l(n,69,0,"floating"),l(n,73,0,u.email),l(n,76,0,"\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e4c","text"),l(n,80,0,"floating"),l(n,84,0,u.password),l(n,87,0,"\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19","password"),l(n,91,0,"floating"),l(n,95,0,u.repassword),l(n,98,0,"\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19","password"),l(n,100,0,"success","full","submit")}),(function(l,n){l(n,26,0,t.Fb(n,31).ngClassUntouched,t.Fb(n,31).ngClassTouched,t.Fb(n,31).ngClassPristine,t.Fb(n,31).ngClassDirty,t.Fb(n,31).ngClassValid,t.Fb(n,31).ngClassInvalid,t.Fb(n,31).ngClassPending),l(n,37,0,t.Fb(n,42).ngClassUntouched,t.Fb(n,42).ngClassTouched,t.Fb(n,42).ngClassPristine,t.Fb(n,42).ngClassDirty,t.Fb(n,42).ngClassValid,t.Fb(n,42).ngClassInvalid,t.Fb(n,42).ngClassPending),l(n,48,0,t.Fb(n,53).ngClassUntouched,t.Fb(n,53).ngClassTouched,t.Fb(n,53).ngClassPristine,t.Fb(n,53).ngClassDirty,t.Fb(n,53).ngClassValid,t.Fb(n,53).ngClassInvalid,t.Fb(n,53).ngClassPending),l(n,59,0,t.Fb(n,64).ngClassUntouched,t.Fb(n,64).ngClassTouched,t.Fb(n,64).ngClassPristine,t.Fb(n,64).ngClassDirty,t.Fb(n,64).ngClassValid,t.Fb(n,64).ngClassInvalid,t.Fb(n,64).ngClassPending),l(n,70,0,t.Fb(n,75).ngClassUntouched,t.Fb(n,75).ngClassTouched,t.Fb(n,75).ngClassPristine,t.Fb(n,75).ngClassDirty,t.Fb(n,75).ngClassValid,t.Fb(n,75).ngClassInvalid,t.Fb(n,75).ngClassPending),l(n,81,0,t.Fb(n,86).ngClassUntouched,t.Fb(n,86).ngClassTouched,t.Fb(n,86).ngClassPristine,t.Fb(n,86).ngClassDirty,t.Fb(n,86).ngClassValid,t.Fb(n,86).ngClassInvalid,t.Fb(n,86).ngClassPending),l(n,92,0,t.Fb(n,97).ngClassUntouched,t.Fb(n,97).ngClassTouched,t.Fb(n,97).ngClassPristine,t.Fb(n,97).ngClassDirty,t.Fb(n,97).ngClassValid,t.Fb(n,97).ngClassInvalid,t.Fb(n,97).ngClassPending)}))}function f(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"app-register-logistic",[],null,null,null,C,c)),t.sb(1,49152,null,0,b,[p.m,o,s.a],null,null)],null,null)}var F=t.pb("app-register-logistic",b,f,{},{},[]),k=u("Ip0R");u.d(n,"RegisterLogisticPageModuleNgFactory",(function(){return m}));var m=t.qb(a,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[g.a,F]],[3,t.j],t.x]),t.Db(4608,k.l,k.k,[t.u,[2,k.r]]),t.Db(4608,h.o,h.o,[]),t.Db(4608,d.b,d.b,[t.z,t.g]),t.Db(4608,d.Ib,d.Ib,[d.b,t.j,t.q]),t.Db(4608,d.Mb,d.Mb,[d.b,t.j,t.q]),t.Db(4608,o,o,[i.c]),t.Db(1073742336,k.b,k.b,[]),t.Db(1073742336,h.n,h.n,[]),t.Db(1073742336,h.e,h.e,[]),t.Db(1073742336,d.Fb,d.Fb,[]),t.Db(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.Db(1073742336,a,a,[]),t.Db(1024,p.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);