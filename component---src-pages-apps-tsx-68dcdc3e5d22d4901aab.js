(self.webpackChunkswiftinsg_org=self.webpackChunkswiftinsg_org||[]).push([[971],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return b}});var i=n(4694),r=n(5697),a=n.n(r),o=n(7294);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function f(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,i=t.indexOf(":"),r=m(t.slice(0,i)),a=t.slice(i+1).trim();return r.startsWith("webkit")?e[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[r]=a,e}),{})}var y=!1;try{y=!0}catch(k){}function h(e){return i.Qc.icon?i.Qc.icon(e):null===e?null:"object"===p(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function b(e){var t=e.forwardedRef,n=u(e,["forwardedRef"]),r=n.icon,a=n.mask,o=n.symbol,p=n.className,l=n.title,m=n.titleId,f=h(r),k=g("classes",[].concat(d(function(e){var t,n=e.spin,i=e.pulse,r=e.fixedWidth,a=e.inverse,o=e.border,p=e.listItem,l=e.flip,c=e.size,u=e.rotation,d=e.pull,m=(s(t={"fa-spin":n,"fa-pulse":i,"fa-fw":r,"fa-inverse":a,"fa-border":o,"fa-li":p,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(c),null!=c),s(t,"fa-rotate-".concat(u),null!=u&&0!==u),s(t,"fa-pull-".concat(d),null!=d),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(n)),d(p.split(" ")))),w=g("transform","string"==typeof n.transform?i.Qc.transform(n.transform):n.transform),E=g("mask",h(a)),O=(0,i.qv)(f,c({},k,{},w,{},E,{symbol:o,title:l,titleId:m}));if(!O)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var x=O.abstract,S={ref:t};return Object.keys(n).forEach((function(e){b.defaultProps.hasOwnProperty(e)||(S[e]=n[e])})),v(x[0],S)}b.displayName="FontAwesomeIcon",b.propTypes={border:a().bool,className:a().string,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},b.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var r=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var i=n.attributes[t];switch(t){case"class":e.attrs.className=i,delete n.attributes.class;break;case"style":e.attrs.style=f(i);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=i:e.attrs[m(t)]=i}return e}),{attrs:{}}),o=i.style,p=void 0===o?{}:o,s=u(i,["style"]);return a.attrs.style=c({},a.attrs.style,{},p),t.apply(void 0,[n.tag,c({},a.attrs,{},s)].concat(d(r)))}.bind(null,o.createElement)},8076:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(7294),r=n(9274);var a=function(e){var t=e.children,n=e.className,a=e.style,o=e.bgStyle,p=e.bg;return i.createElement(r.Z,{className:[p?"index-module--bannerSection--3k6Km":"index-module--bannerNoBg--1eyHE",n].join(" "),style:Object.assign({color:p?"white":"black"},a)},i.createElement("div",{className:"index-module--bg--2ugIb",style:Object.assign({backgroundImage:"url("+p+")"},o)}),t)}},6636:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(7294),r=n(7606);var a=function(){return i.createElement(i.Fragment,null,i.createElement("footer",{className:"index-module--footer--iZ-vb"},i.createElement("span",null,"© 2022 Swift Innovators' Summit. All rights reserved."),i.createElement("div",null,i.createElement("a",{target:"_blank",href:"https://www.instagram.com/swiftinsg/"},i.createElement(r.G,{icon:["fab","instagram"]})),i.createElement("a",{target:"_blank",href:"https://twitter.com/swiftinsg"},i.createElement(r.G,{icon:["fab","twitter"]})),i.createElement("a",{target:"_blank",href:"mailto:hello@swiftinsg.org"},i.createElement(r.G,{icon:["far","envelope"]})))))}},1322:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(7294),r=n(5444),a=n(7606),o="index-module--landingHeader--3JkDZ",p=[{href:"/about",name:"About"},{href:"/sis",name:"Swift Innovators' Summit"},{href:"/students",name:"Students"},{href:"/apps",name:"Apps"},{href:"/news",name:"News & Achievements"},{href:"/joinus",name:"Join Us"}];var s=function(e){var t=e.startWhite,n=(0,i.useState)(!1),s=n[0],l=n[1],c=(0,i.useState)(!1),u=c[0],d=c[1];return(0,i.useEffect)((function(){function e(e){var t=window.scrollY;l(t>25)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),i.createElement(i.Fragment,null,i.createElement("header",{className:[o,s?"index-module--beyondScroll--3hGar":t?"index-module--startWhite--3RCjB":""].join(" ")},i.createElement(r.rU,{to:"/"},i.createElement("div",{className:"index-module--swiftIcon--1ZTYU"})),i.createElement("div",{className:"index-module--headerLinks--11H-I"},p.map((function(e){return i.createElement(r.rU,{to:e.href},e.name)})),i.createElement(a.G,{icon:["fas","bars"],onClick:function(){return d(!u)}}),i.createElement("div",{className:"index-module--drawer--d1rYx",style:{width:u?"100vw":"0px"}},i.createElement("a",{href:"javascript:void(0)",className:"index-module--closeBtn--cdUmP",onClick:function(){return d(!u)}},"×"),p.map((function(e){return i.createElement(r.rU,{to:e.href},e.name)}))))))}},8689:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(7294),r="index-module--page--1i8Aa";var a=function(e){var t=e.children,n=e.className,a=e.style,o=e.genericBackground;return i.createElement("div",{className:[r,n].join(" "),style:Object.assign({},a,{backgroundImage:o?"url(/assets/genericBg.svg)":""})},t)}},4489:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(7294),r=n(7606);var a=function(){return i.createElement(i.Fragment,null,i.createElement("div",{className:"index-module--readMore--3hz7W",onClick:function(){return window.scroll({top:window.innerHeight-95,behavior:"smooth"})}},i.createElement("span",null,"Read more"),i.createElement(r.G,{icon:["fas","arrow-down"]})))}},9274:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(7294),r="index-module--section--3EKCW";var a=function(e){var t=e.children,n=e.className,a=e.style;return i.createElement("div",{className:[r,n].join(" "),style:a},t)}},8729:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(7294),r=function(e){var t=e.title;return i.createElement("div",null,i.createElement("div",{className:"index-module--titleHolder--5o3lT"},i.createElement("span",{className:"index-module--title--2JcC7"},t),i.createElement("hr",null)))}},2307:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var i="apps-module--appHolder--XJ-1e",r=n(8076),a=n(6636),o=n(1322),p=n(5444),s=n(8689),l=n(7294),c=n(4489),u=n(9274),d=n(8729),m=n.p+"static/appBanner-666379abd8299b477fdbb02b438db485.svg",f=[{title:"Writezi",description:"听写 practice simplified",icon:"2021/writezi.png",link:"https://apps.apple.com/us/app/writezi/id1596864534",video:"https://youtu.be/WZCFKMNuk6Y"},{title:"Habitator",description:"Helping you break bad habits!",icon:"2021/habitator.png",link:"https://apps.apple.com/us/app/habitator/id1597273117",video:""},{title:"GPA Buddy ",description:"Streamline GPA calculation",icon:"2021/gpabuddy.png",link:"https://apps.apple.com/us/app/gpa-buddy/id1596905448",video:"https://youtu.be/V2ahoBLbCBw"},{title:"MoneyCents",description:"A money manager app",icon:"2021/moneycents.png",link:"https://apps.apple.com/us/app/moneycents/id1597220959",video:"https://youtu.be/XCS9J2H39OQ"},{title:"Remorise",description:"Remember efficiently",icon:"2021/remorise.png",link:"https://apps.apple.com/us/app/remorise/id1597260521",video:"https://youtu.be/3bNBQkRrIkU"},{title:"MusicalRooms",description:"A whole new dimension of music learning!",icon:"2021/musicalrooms.png",link:"https://apps.apple.com/us/app/musicalrooms/id1597490110",video:"https://youtu.be/vQ36UXb0X-I"},{title:"Showery",description:"Your shower companion",icon:"2021/showery.png",link:"https://apps.apple.com/us/app/showery/id1597110095",video:"https://youtu.be/6QguOzznpvA"},{title:"Fiducia",description:"Overcome social anxiety and build confidence.",icon:"2021/fiducia.png",link:"https://apps.apple.com/us/app/fiducia/id1597445189",video:"https://youtu.be/d4wiET9aez8"},{title:"StudyZone",description:"Manage your incoming schoolwork!",icon:"2021/studyzone.png",link:"https://apps.apple.com/us/app/studyzone/id1596910040",video:"https://youtu.be/VPIDp0uk5Gk"},{title:"Scam Me Not ",description:"Don’t become the next victim!",icon:"2021/scammenot.png",link:"https://apps.apple.com/us/app/scam-me-not/id1597302940",video:"https://youtu.be/WDe-XRcLQiI"},{title:"ArrivalSG",description:"The perfect travel companion!",icon:"2021/arrivalsg.png",link:"https://apps.apple.com/us/app/arrivalsg/id1597543310",video:"https://youtu.be/FccplOm9jC0"},{title:"ColourLife",description:"Experience different types of colour blindness!",icon:"2021/colourlife.png",link:"https://apps.apple.com/us/app/colourlife/id1597543734",video:"https://youtu.be/ICukZDP_WL4"},{title:"Lateiva",description:"Never be late again!",icon:"2021/lateiva.png",link:"https://apps.apple.com/us/app/lateiva/id1597545628",video:"https://youtu.be/bepLNNzaEeY"}],y={Productivity:[{title:"StudyFly",description:"Digitalise your written notes",icon:"2020/StudyFly.png",link:"https://apps.apple.com/sg/app/studyfly/id1545511275",video:"https://youtu.be/eS-pigaD62Q"},{title:"Habitat",description:"Your tasks and to-do list, gamified",icon:"2020/Habitat.png",link:"https://apps.apple.com/sg/app/habitat-do-tasks-grow-trees/id1546610193",video:"https://youtu.be/J7GCuMQmLFM"},{title:"Do It",description:"Stay on top of your tasks.",icon:"2019/Doit.png",link:"https://apps.apple.com/us/app/doit-do-it/id1485829640?ls=1"},{title:"Tasko",description:"Prioritise tasks and manage your time",icon:"2019/Tasko.png",link:"https://apps.apple.com/us/app/tasko/id1485959482?ls=1"},{title:"Scheduler Pro",description:"Get motivated to complete your tasks",icon:"2019/Scheduler%20Pro.png",link:"https://apps.apple.com/us/app/scheduler-pro-plan-your-work/id1486135477"},{title:"Listè",description:"Productivity made easy",icon:"2019/Liste.png",link:"https://apps.apple.com/us/app/listé/id1486116734"},{title:"Tyred",description:"The easy photo todos",icon:"2019/Tyred.png",link:"https://apps.apple.com/us/app/tyred-easy-photo-todos/id1486117252?ls=1"},{title:"Tasks - Productivity Elevated",description:"Stay focused.",icon:"2018/Tasks.png",link:"https://apps.apple.com/us/app/tasks-productivity-elevated/id1440454388"}],Education:[{title:"Enviroquest",description:"Saving the Earth, made fun",icon:"2020/EnviroQuest.png",link:"https://apps.apple.com/sg/app/enviroquest/id1546701399",video:"https://youtu.be/MfDweFiZCVQ"},{title:"CATmistry",description:"Chemistry, gamified.",icon:"2020/CATmistry.png",link:"https://apps.apple.com/sg/app/catmistry/id1545311327",video:"https://youtu.be/zRYNBemX1RU"},{title:"ReadingPal",description:"Your collaborative reader",icon:"2019/ReadingPal.png",link:"https://apps.apple.com/us/app/readingpal/id1485960531?ls=1"},{title:"STUDI ",description:"Rope in the community to help you learn",icon:"2019/STUDI.png",link:"https://apps.apple.com/us/app/studi-studying-made-easy/id1486737527?ls=1"},{title:"Eureka - Study app",description:"Helping you to study smart",icon:"2019/Eureka.png",link:"https://apps.apple.com/us/app/eureka-study-app/id1486120976?ls=1"},{title:"Quizercise",description:"Exercise your brain and body",icon:"2019/Quizercise.png",link:"https://apps.apple.com/us/app/quizercise/id1486275677?ls=1"},{title:"Parkgoer",description:"Parkgoer. Parks today!",icon:"2018/Parkgoer.png",link:"https://apps.apple.com/us/app/parkgoer/id1441745725"},{title:"Fractal",description:"The non-intrusive calculator.",icon:"2018/Fractal.png",link:"https://apps.apple.com/us/app/fractal-a-calculator/id1441648055"}],"Lifestyle and Entertainment":[{title:"Grocermi",description:"Track what is in your fridge",icon:"2020/Grocermi.png",link:"https://apps.apple.com/us/app/grocermi/id1548968304",video:"https://youtu.be/X743H_nPyfQ"},{title:"Fridge",description:"Get recipes with what is in your fridge",icon:"2020/Fridge.png",link:"https://apps.apple.com/us/app/fridge-track-your-food/id1547398070",video:"https://youtu.be/FqfKPNF9hnM"},{title:"Anything",description:"Helping you meditate and calm down",icon:"2020/Anything.png",link:"https://apps.apple.com/sg/app/anything-a-meditation-app/id1545318664",video:"https://youtu.be/kFoZ-rbI5wQ"},{title:"Wishey",description:"A budgeting app.",icon:"2020/Wishey.png",link:"https://apps.apple.com/sg/app/wishey/id1545938094",video:"https://youtu.be/nS-TRJ-TFAA"},{title:"Recipely",description:"A recipe app.",icon:"2020/Recipely.png",link:"https://apps.apple.com/sg/app/recipely/id1545119133",video:"https://youtu.be/2tT_S5tfeIk"},{title:"Dollar",description:"We save your cents",icon:"2019/Dollar.png",link:"https://apps.apple.com/us/app/dollar/id1486122185?ls=1"},{title:"Work It Out",description:"Fitness Made Easy",icon:"2019/Work%20It%20Out.png",link:"https://apps.apple.com/us/app/work-it-out-fitness-app/id1486118564?ls=1"},{title:"chARacters",description:"Experience Reality in a different way",icon:"2019/chARacters.png",link:"https://apps.apple.com/us/app/characters-an-ar-photo-app/id1485831264?ls=1"},{title:"IdeaGenerator",description:"Helping you generate your next idea",icon:"2019/Idea%20Generator.png",link:"https://apps.apple.com/us/app/ideagenerator/id1486526473?ls=1"},{title:"Brush Now",description:"The proper way to brush",icon:"2018/BrushNow.png",link:"https://apps.apple.com/us/app/brushnow-toothbrush-timer/id1441508610"},{title:"Dice",description:"Pick a number",icon:"2018/Dice.png",link:"https://apps.apple.com/us/app/dice-pick-a-number/id1441538796"}],Travel:[{title:"BuSG",description:"Checking bus arrival timings and routes easily",icon:"2020/BuSG.png",link:"https://apps.apple.com/sg/app/busg/id1545571389",video:"https://youtu.be/vd2Su2pCW-k"},{title:"Triplanner",description:"Plan your trips and staycations!",icon:"2020/Triplanner.png",link:"https://apps.apple.com/sg/app/triplanner-your-travel-pal/id1544696258",video:"https://youtu.be/uvYTyCLobxA"},{title:"MacRitchie Trails",description:"Helping you find your way around MacRitchie Reservoir",icon:"2020/MacRitchie%20Trails.png",link:"https://apps.apple.com/us/app/macritchie-trails/id1547956127",video:"https://youtu.be/Cs8XZ54tdek"},{title:"FootpRInt",description:"Find your lost items easily",icon:"2020/FootpRInt.png",link:"https://apps.apple.com/us/app/footprint/id1549189068",video:"https://youtu.be/HvBswMA7bvQ"},{title:"KillStep",description:"Gamifying your exercise experience!",icon:"2020/KillStep.png",link:"https://apps.apple.com/us/app/killstep/id1546871822",video:"https://youtu.be/fXEfZeYiPEY"}]};function h(e){var t=e.title,n=e.description,i=e.icon,r=e.link,a=e.video;return l.createElement(p.rU,{to:r},l.createElement("div",{className:"apps-module--app--2CNR9"},l.createElement("div",{style:{backgroundImage:"url(/assets/appIcons/"+i+")"}}),l.createElement("div",null,l.createElement("span",null,t),l.createElement("span",null,n),a?l.createElement("span",null,l.createElement(p.rU,{to:a},"Watch our journey!")):"")))}var g=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,null),l.createElement(s.Z,null,l.createElement(r.Z,{bg:m,bgStyle:{backgroundSize:"150vh",filter:"none"},style:{color:"black"}},l.createElement("h1",null,"Apps"),l.createElement(c.Z,null)),l.createElement(u.Z,{className:"apps-module--sectionTwo--2TT8F"},l.createElement(d.Z,{title:"Current Class Apps"}),l.createElement("div",{className:i},f.map((function(e){return l.createElement(h,e)}))),l.createElement(d.Z,{title:"Apps by our Alumni"}),l.createElement(l.Fragment,null,Object.keys(y).map((function(e,t){return l.createElement(l.Fragment,null,l.createElement("h2",null,e),l.createElement("div",{className:i},y[e].map((function(e){return l.createElement(h,e)}))))})))),l.createElement(a.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-apps-tsx-68dcdc3e5d22d4901aab.js.map