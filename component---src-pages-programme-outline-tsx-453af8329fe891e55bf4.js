(self.webpackChunkswiftinsg_org=self.webpackChunkswiftinsg_org||[]).push([[43],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return w}});var r=n(4694),o=n(5697),i=n.n(o),a=n(7294);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function f(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=p(t.slice(0,r)),i=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[o]=i,e}),{})}var g=!1;try{g=!0}catch(v){}function h(e){return r.Qc.icon?r.Qc.icon(e):null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function w(e){var t=e.forwardedRef,n=d(e,["forwardedRef"]),o=n.icon,i=n.mask,a=n.symbol,l=n.className,c=n.title,p=n.titleId,f=h(o),v=b("classes",[].concat(m(function(e){var t,n=e.spin,r=e.pulse,o=e.fixedWidth,i=e.inverse,a=e.border,l=e.listItem,c=e.flip,u=e.size,d=e.rotation,m=e.pull,p=(s(t={"fa-spin":n,"fa-pulse":r,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(t,"fa-rotate-".concat(d),null!=d&&0!==d),s(t,"fa-pull-".concat(m),null!=m),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(n)),m(l.split(" ")))),O=b("transform","string"==typeof n.transform?r.Qc.transform(n.transform):n.transform),E=b("mask",h(i)),k=(0,r.qv)(f,u({},v,{},O,{},E,{symbol:a,title:c,titleId:p}));if(!k)return function(){var e;!g&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var x=k.abstract,S={ref:t};return Object.keys(n).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(S[e]=n[e])})),y(x[0],S)}w.displayName="FontAwesomeIcon",w.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var y=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=f(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[p(t)]=r}return e}),{attrs:{}}),a=r.style,l=void 0===a?{}:a,s=d(r,["style"]);return i.attrs.style=u({},i.attrs.style,{},l),t.apply(void 0,[n.tag,u({},i.attrs,{},s)].concat(m(o)))}.bind(null,a.createElement)},6636:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),o=n(7606);var i=function(){return r.createElement(r.Fragment,null,r.createElement("footer",{className:"index-module--footer--iZ-vb"},r.createElement("span",null,"© 2021 Swift Innovators' Summit. All rights reserved."),r.createElement("div",null,r.createElement("a",{target:"_blank",href:"https://www.instagram.com/swiftinsg/"},r.createElement(o.G,{icon:["fab","instagram"]})),r.createElement("a",{target:"_blank",href:"https://twitter.com/swiftinsg"},r.createElement(o.G,{icon:["fab","twitter"]})),r.createElement("a",{target:"_blank",href:"mailto:hello@swiftinsg.org"},r.createElement(o.G,{icon:["far","envelope"]})))))}},1322:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o=n(5444),i="index-module--landingHeader--3JkDZ";var a=function(e){var t=e.startWhite,n=(0,r.useState)(!1),a=n[0],l=n[1];return(0,r.useEffect)((function(){function e(e){var t=window.scrollY;l(t>25)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),r.createElement(r.Fragment,null,r.createElement("header",{className:[i,a?"index-module--beyondScroll--3hGar":t?"index-module--startWhite--3RCjB":""].join(" ")},r.createElement("div",{className:"index-module--swiftIcon--1ZTYU"}),r.createElement("div",{className:"index-module--headerLinks--11H-I"},r.createElement("div",{className:"index-module--dropDown--J0gbe"},r.createElement(o.rU,{to:"/"},"Home"),r.createElement("div",{className:"index-module--dropDownMenu--1YqMU"},r.createElement(o.rU,{to:"/tinkertanker"},"About Tinkertanker"),r.createElement(o.rU,{to:"/programme-outline"},"Programme Outline"))),r.createElement(o.rU,{to:"/sis"},"Swift Innovators' Summit"),r.createElement(o.rU,{to:"/students"},"Students"),r.createElement(o.rU,{to:"/apps"},"Apps"),r.createElement(o.rU,{to:"/news"},"News"),r.createElement(o.rU,{to:"/joinus"},"Join Us"))))}},4489:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),o=n(7606);var i=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"index-module--readMore--3hz7W",onClick:function(){return window.scroll({top:window.innerHeight-95,behavior:"smooth"})}},r.createElement("span",null,"Read more"),r.createElement(o.G,{icon:["fas","arrow-down"]})))}},1462:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),o=n(1322),i=n(4489),a=n(6636),l="programme-outline-module--section--AMHsb",s="programme-outline-module--sectionOne--3e49h",c="programme-outline-module--sectionTwo--1NesW",u=[{title:"Introduction to programming in Swift & Xcode",desc:"We begin by introducing students to programming in the latest version of the Swift programming language. Swift is a modern, open-source language created by Apple, designed to be easy for beginners to learn, and powerful for advanced users to utilise in creating iOS apps.\n               Students will be introduced to coding concepts in Swift, using Xcode Playgrounds: constants, variables, data types, operators, and control flow.",pic:"/assets/xcode.png"},{title:"From Idea to launch",desc:"This module introduces students to design thinking philosophies, and how to apply them to create, validate, and pitch ideas, how to find product-market fit, and do basic wireframing. We will include case studies on technology products well known ones, as well as our own, which are more obscure but rich in lessons learned.\n               On the design front, students will be introduced to user interface and user experience (UI/UX) design tools such as Figma to prototype their own apps.​\n               The second half of this module introduces further development in Xcode, such as functions, classes, collections, and further UIKit controls such as Stack Views."},{title:"Further iOS app development in Xcode",desc:"This module begins exploring the development on iOS apps using Xcode. Building upon the foundation laid in Modules 1 and 2, students will be guided into creating a variety of apps with real-world applications, making full use of the iOS UIKit framework.\n        iOS concepts include critical UI elements such as table views, collection views, navigation controllers, and tab bar controllers. Advanced Swift language constructs such as Optionals, Guard, and enumerations will be introduced here."},{title:"Designing for delight",desc:"Apple has always emphasised the need to delight users in creating apps, and regularly features apps that shine through in terms of design, experience, and animation. This module will provide some background for students on how to achieve the high standards of design expected of iOS apps.\n               This module brings an introduction to icon design and graphics tools, using, preferably, freely available tools such as Figma.\n               In Xcode, students will learn how to implement animations in Xcode, using basic UIView animations and transitions."},{title:"Persistence and libraries",desc:"This module covers more technically advanced features often found in iOS apps, particularly permanent data storage (on device or in the cloud), and working with external web services to store and retrieve data.\n               Students will also begin to make full use of iOS device capabilities by learning and utilising powerful built-in iOS application programming interfaces (APIs). These include web and API access, geolocation, accelerometer readings, and more. Students will also be exposed to commonly-used external libraries that allow them to quickly implement powerful features while saving on development time."},{title:"Building, marketing, and launching your app",desc:"Creating an app is never just about the technical requirements; companies and developers have to make an effort to get noticed in a store containing millions of other apps.\n               In this final module, students will revise their design thinking principles to ensure they don’t “make something nobody wants”, revenue models available to apps, how to project-manage apps, and pitch them to “investors” and customers.\n               Finally, students will be closely guided through the process of proposing, designing, implementing, and finally submitting their apps to the Apple App Store for public consumption. Students will also learn how best to present and tell a story about their apps."}];function d(e){var t=e.title,n=e.desc,o=e.pic;return r.createElement("div",{className:"programme-outline-module--outlineDiv--3nplB"},r.createElement("div",null,r.createElement("h1",null,t),r.createElement("p",null,n.split("\n").map((function(e){return r.createElement(r.Fragment,null,e,r.createElement("br",null),r.createElement("br",null))})))),o?r.createElement("img",{src:o}):"")}var m=function(){return r.createElement(r.Fragment,null,r.createElement(o.Z,{startWhite:!0}),r.createElement("main",{className:"programme-outline-module--page--3SjqG"},r.createElement("section",{className:[l,s].join(" ")},r.createElement("div",{className:"programme-outline-module--bg--3PoRr"}),r.createElement("h1",null,"Programme Outline"),r.createElement(i.Z,null)),r.createElement("section",{className:[l,c].join(" ")},r.createElement("div",null,u.map((function(e){return r.createElement(d,e)})))),r.createElement(a.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-programme-outline-tsx-453af8329fe891e55bf4.js.map