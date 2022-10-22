(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},l=n(6273),a=n(2725),f=n(3462),c=n(1018),i=n(7190),s=n(1210),d=n(8684);var p="undefined"!==typeof u.default.useTransition,v={};function y(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var h=u.default.forwardRef((function(e,t){var n,o=e.href,h=e.as,b=e.children,g=e.prefetch,m=e.passHref,_=e.replace,C=e.soft,O=e.shallow,M=e.scroll,j=e.locale,x=e.onClick,E=e.onMouseEnter,w=e.legacyBehavior,k=void 0===w?!0!==Boolean(!1):w,P=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=b,!k||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var R=!1!==g,L=r(p?u.default.useTransition():[],2)[1],N=u.default.useContext(f.RouterContext),I=u.default.useContext(c.AppRouterContext);I&&(N=I);var A,T=u.default.useMemo((function(){var e=r(l.resolveHref(N,o,!0),2),t=e[0],n=e[1];return{href:t,as:h?l.resolveHref(N,h):n||t}}),[N,o,h]),z=T.href,U=T.as,B=u.default.useRef(z),D=u.default.useRef(U);k&&(A=u.default.Children.only(n));var H=k?A&&"object"===typeof A&&A.ref:t,K=r(i.useIntersection({rootMargin:"200px"}),3),S=K[0],F=K[1],Z=K[2],q=u.default.useCallback((function(e){D.current===U&&B.current===z||(Z(),D.current=U,B.current=z),S(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[U,H,z,Z,S]);u.default.useEffect((function(){var e=F&&R&&l.isLocalURL(z),t="undefined"!==typeof j?j:N&&N.locale,n=v[z+"%"+U+(t?"%"+t:"")];e&&!n&&y(N,z,U,{locale:t})}),[U,z,F,j,R,N]);var W={ref:q,onClick:function(e){k||"function"!==typeof x||x(e),k&&A.props&&"function"===typeof A.props.onClick&&A.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,a,f,c,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:f})};i?i(s):s()}}(e,N,z,U,_,C,O,M,j,I?L:void 0)},onMouseEnter:function(e){k||"function"!==typeof E||E(e),k&&A.props&&"function"===typeof A.props.onMouseEnter&&A.props.onMouseEnter(e),l.isLocalURL(z)&&y(N,z,U,{priority:!0})}};if(!k||m||"a"===A.type&&!("href"in A.props)){var G="undefined"!==typeof j?j:N&&N.locale,J=N&&N.isLocaleDomain&&s.getDomainLocale(U,G,N.locales,N.domainLocales);W.href=J||d.addBasePath(a.addLocale(U,G,N&&N.defaultLocale))}return k?u.default.cloneElement(A,W):u.default.createElement("a",Object.assign({},P,W),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!l,i=o.useRef(),s=r(o.useState(!1),2),d=s[0],p=s[1],v=r(o.useState(null),2),y=v[0],h=v[1];o.useEffect((function(){if(l){if(i.current&&(i.current(),i.current=void 0),c||d)return;return y&&y.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=f.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=a.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},f.push(n),a.set(n,t),t}(n),o=r.id,u=r.observer,l=r.elements;return l.set(e,t),u.observe(e),function(){if(l.delete(e),u.unobserve(e),0===l.size){u.disconnect(),a.delete(o);var t=f.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&f.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[y,c,n,t,d]);var b=o.useCallback((function(){p(!1)}),[]);return[h,d,b]};var o=n(7294),u=n(9311),l="function"===typeof IntersectionObserver;var a=new Map,f=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r};var u=o.default.createContext(null);t.AppRouterContext=u;var l=o.default.createContext(null);t.AppTreeContext=l;var a=o.default.createContext(null);t.FullAppTreeContext=a},1664:function(e,t,n){e.exports=n(8418)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=r.createContext&&r.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function f(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),f(e.child))}))}function c(e){return function(t){return r.createElement(i,l({attr:l({},e.attr)},t),f(e.child))}}function i(e){var t=function(t){var n,o=e.attr,u=e.size,f=e.title,c=a(e,["attr","size","title"]),i=u||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),f&&r.createElement("title",null,f),e.children)};return void 0!==u?r.createElement(u.Consumer,null,(function(e){return t(e)})):t(o)}}}]);