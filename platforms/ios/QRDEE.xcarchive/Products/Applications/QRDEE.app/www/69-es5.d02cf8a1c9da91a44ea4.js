(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"g/I3":function(t,e,n){"use strict";n.r(e),n.d(e,"ion_menu",(function(){return h})),n.d(e,"ion_menu_button",(function(){return v})),n.d(e,"ion_menu_controller",(function(){return y})),n.d(e,"ion_menu_toggle",(function(){return O}));var i=n("mrSG"),o=n("Twl7"),r=n("ttJE"),s=n("wSPg"),a=(n("FX7f"),n("xoJo")),c=n("BCwa"),u=n("Jky2"),d=n("uYVq"),h=function(){function t(t){Object(o.l)(this,t),this.lastOnEnd=0,this.blocker=a.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(o.e)(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(o.d)(this,"ionWillOpen",7),this.ionWillClose=Object(o.d)(this,"ionWillClose",7),this.ionDidOpen=Object(o.d)(this,"ionDidOpen",7),this.ionDidClose=Object(o.d)(this,"ionDidClose",7),this.ionMenuChange=Object(o.d)(this,"ionMenuChange",7)}return t.prototype.typeChanged=function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=Object(s.h)(this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.connectedCallback=function(){return Object(i.b)(this,void 0,void 0,(function(){var t,e,o,s=this;return Object(i.e)(this,(function(i){switch(i.label){case 0:return void 0===this.type&&(this.type=r.b.get("menuType","ios"===this.mode?"reveal":"overlay")),t=this.el.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="my-content"></ion-menu>\n  <div id="my-content">...</div>\n'),(e=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]"))&&e.tagName?(this.contentEl=e,e.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),c.a._register(this),o=this,[4,Promise.resolve().then(n.bind(null,"xoJo"))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 1:return o.gesture=i.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return s.canStart(t)},onWillStart:function(){return s.onWillStart()},onStart:function(){return s.onStart()},onMove:function(t){return s.onMove(t)},onEnd:function(t){return s.onEnd(t)}}),this.updateState(),[2]}}))}))},t.prototype.componentDidLoad=function(){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.e)(this,(function(t){return this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState(),[2]}))}))},t.prototype.disconnectedCallback=function(){this.blocker.destroy(),c.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),c.a._setOpen(this,t,e)},t.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),Object(i.b)(this,void 0,void 0,(function(){return Object(i.e)(this,(function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,!1]:(this.beforeAnimation(t),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(t,e)];case 2:return n.sent(),this.afterAnimation(t),[2,!0]}}))}))},t.prototype.loadAnimation=function(){return Object(i.b)(this,void 0,void 0,(function(){var t,e;return Object(i.e)(this,(function(n){switch(n.label){case 0:return(t=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,c.a._createAnimation(this.type,this)]);case 1:return e.animation=n.sent(),r.b.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"),[2]}}))}))},t.prototype.startAnimation=function(t,e){return Object(i.b)(this,void 0,void 0,(function(){var n,o;return Object(i.e)(this,(function(i){switch(i.label){case 0:return o=this.animation.direction((n=!t)?"reverse":"normal").easing(n?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)"),e?[4,o.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:o.playSync(),i.label=3;case 3:return[2]}}))}))},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!!this.canSwipe()&&(!!this._isOpen||!c.a._getOpenSync()&&p(window,t.currentX,this.isEndSide,this.maxEdgeStart))},t.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation?this.animation.direction(this._isOpen?"reverse":"normal").progressStart(!0):Object(s.b)(!1,"isAnimating has to be true")},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var e=l(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(e/this.width)}else Object(s.b)(!1,"isAnimating has to be true")},t.prototype.onEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=l(t.deltaX,n,i),r=this.width,a=o/r,c=t.velocityX,u=r/2,h=c>=0&&(c>.2||t.deltaX>u),p=c<=0&&(c<-.2||t.deltaX<-u),b=n?i?h:p:i?p:h,m=!n&&b;n&&!b&&(m=!0),this.lastOnEnd=t.timeStamp;var g=b?.001:-.001,f=a<=0?.01:a;g+=Object(d.b)(new d.a(0,0),new d.a(.4,0),new d.a(.6,1),new d.a(1,1),Object(s.c)(0,f,1)),this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(m)}),{oneTimeCallback:!0}).progressEnd(b?1:0,g,300)}else Object(s.b)(!1,"isAnimating has to be true")},t.prototype.beforeAnimation=function(t){Object(s.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(b),this.backdropEl&&this.backdropEl.classList.add(m),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()},t.prototype.afterAnimation=function(t){Object(s.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(g),this.ionDidOpen.emit()):(this.el.classList.remove(b),this.contentEl&&this.contentEl.classList.remove(g),this.backdropEl&&this.backdropEl.classList.remove(m),this.animation&&this.animation.stop(),this.ionDidClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||c.a._setActiveMenu(this),Object(s.b)(!this.isAnimating,"can not be animating")},t.prototype.forceClosing=function(){Object(s.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").playSync(),this.afterAnimation(!1)},t.prototype.render=function(){var t,e=this,n=this,i=n.isEndSide,r=n.type,s=n.disabled,a=n.mode,c=n.isPaneVisible;return Object(o.i)(o.a,{role:"navigation",class:(t={},t[a]=!0,t["menu-type-"+r]=!0,t["menu-enabled"]=!s,t["menu-side-end"]=i,t["menu-side-start"]=!i,t["menu-pane-visible"]=c,t)},Object(o.i)("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},Object(o.i)("slot",null)),Object(o.i)("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}(),l=function(t,e,n){return Math.max(0,e!==n?-t:t)},p=function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i},b="show-menu",m="show-backdrop",g="menu-content-open",f=function(t){return Object(i.b)(void 0,void 0,void 0,(function(){var e,n;return Object(i.e)(this,(function(i){switch(i.label){case 0:return[4,c.a.get(t)];case 1:return e=i.sent(),(n=e)?[4,e.isActive()]:[3,3];case 2:n=i.sent(),i.label=3;case 3:return[2,!!n]}}))}))},v=function(){function t(t){var e=this;Object(o.l)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=function(){return Object(i.b)(e,void 0,void 0,(function(){return Object(i.e)(this,(function(t){return[2,c.a.toggle(this.menu)]}))}))}}return t.prototype.componentDidLoad=function(){this.visibilityChanged()},t.prototype.visibilityChanged=function(){return Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.e)(this,(function(e){switch(e.label){case 0:return t=this,[4,f(this.menu)];case 1:return t.visible=e.sent(),[2]}}))}))},t.prototype.render=function(){var t,e=this.color,n=this.disabled,i=Object(o.e)(this),s=r.b.get("menuIcon","menu"),a=this.autoHide&&!this.visible,c={type:this.type};return Object(o.i)(o.a,{onClick:this.onClick,"aria-disabled":n?"true":null,"aria-hidden":a?"true":null,class:Object.assign(Object.assign((t={},t[i]=!0,t),Object(u.a)(e)),{button:!0,"menu-button-hidden":a,"menu-button-disabled":n,"ion-activatable":!0,"ion-focusable":!0})},Object(o.i)("button",Object.assign({},c,{disabled:n,class:"button-native"}),Object(o.i)("slot",null,Object(o.i)("ion-icon",{icon:s,mode:i,lazy:!1})),"md"===i&&Object(o.i)("ion-ripple-effect",{type:"unbounded"})))},Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}@media (any-hover:hover){:host(.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.08)}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.24);color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),t}(),y=function(){function t(t){Object(o.l)(this,t)}return t.prototype.open=function(t){return c.a.open(t)},t.prototype.close=function(t){return c.a.close(t)},t.prototype.toggle=function(t){return c.a.toggle(t)},t.prototype.enable=function(t,e){return c.a.enable(t,e)},t.prototype.swipeGesture=function(t,e){return c.a.swipeGesture(t,e)},t.prototype.isOpen=function(t){return c.a.isOpen(t)},t.prototype.isEnabled=function(t){return c.a.isEnabled(t)},t.prototype.get=function(t){return c.a.get(t)},t.prototype.getOpen=function(){return c.a.getOpen()},t.prototype.getMenus=function(){return c.a.getMenus()},t.prototype.isAnimating=function(){return c.a.isAnimating()},t.prototype.registerAnimation=function(t,e){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.e)(this,(function(n){return[2,c.a.registerAnimation(t,e)]}))}))},t}(),O=function(){function t(t){var e=this;Object(o.l)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=function(){return c.a.toggle(e.menu)}}return t.prototype.connectedCallback=function(){this.visibilityChanged()},t.prototype.visibilityChanged=function(){return Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.e)(this,(function(e){switch(e.label){case 0:return t=this,[4,f(this.menu)];case 1:return t.visible=e.sent(),[2]}}))}))},t.prototype.render=function(){var t,e=Object(o.e)(this),n=this.autoHide&&!this.visible;return Object(o.i)(o.a,{onClick:this.onClick,"aria-hidden":n?"true":null,class:(t={},t[e]=!0,t["menu-toggle-hidden"]=n,t)},Object(o.i)("slot",null))},Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:!0,configurable:!0}),t}()}}]);