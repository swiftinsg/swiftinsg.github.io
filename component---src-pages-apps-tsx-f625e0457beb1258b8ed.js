(self.webpackChunkswiftinsg_org=self.webpackChunkswiftinsg_org||[]).push([[971],{7606:function(e,t,i){"use strict";i.d(t,{G:function(){return b}});var n=i(4694),o=i(5697),r=i.n(o),a=i(7294);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){p(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function f(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var i,n=t.indexOf(":"),o=m(t.slice(0,n)),r=t.slice(n+1).trim();return o.startsWith("webkit")?e[(i=o,i.charAt(0).toUpperCase()+i.slice(1))]=r:e[o]=r,e}),{})}var y=!1;try{y=!0}catch(k){}function g(e){return n.Qc.icon?n.Qc.icon(e):null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?p({},e,t):{}}function b(e){var t=e.forwardedRef,i=u(e,["forwardedRef"]),o=i.icon,r=i.mask,a=i.symbol,s=i.className,l=i.title,m=i.titleId,f=g(o),k=h("classes",[].concat(d(function(e){var t,i=e.spin,n=e.pulse,o=e.fixedWidth,r=e.inverse,a=e.border,s=e.listItem,l=e.flip,c=e.size,u=e.rotation,d=e.pull,m=(p(t={"fa-spin":i,"fa-pulse":n,"fa-fw":o,"fa-inverse":r,"fa-border":a,"fa-li":s,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(c),null!=c),p(t,"fa-rotate-".concat(u),null!=u&&0!==u),p(t,"fa-pull-".concat(d),null!=d),p(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(i)),d(s.split(" ")))),w=h("transform","string"==typeof i.transform?n.Qc.transform(i.transform):i.transform),E=h("mask",g(r)),S=(0,n.qv)(f,c({},k,{},w,{},E,{symbol:a,title:l,titleId:m}));if(!S)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var O=S.abstract,j={ref:t};return Object.keys(i).forEach((function(e){b.defaultProps.hasOwnProperty(e)||(j[e]=i[e])})),v(O[0],j)}b.displayName="FontAwesomeIcon",b.propTypes={border:r().bool,className:r().string,mask:r().oneOfType([r().object,r().array,r().string]),fixedWidth:r().bool,inverse:r().bool,flip:r().oneOf(["horizontal","vertical","both"]),icon:r().oneOfType([r().object,r().array,r().string]),listItem:r().bool,pull:r().oneOf(["right","left"]),pulse:r().bool,rotation:r().oneOf([0,90,180,270]),size:r().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:r().bool,symbol:r().oneOfType([r().bool,r().string]),title:r().string,transform:r().oneOfType([r().string,r().object]),swapOpacity:r().bool},b.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof i)return i;var o=(i.children||[]).map((function(i){return e(t,i)})),r=Object.keys(i.attributes||{}).reduce((function(e,t){var n=i.attributes[t];switch(t){case"class":e.attrs.className=n,delete i.attributes.class;break;case"style":e.attrs.style=f(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m(t)]=n}return e}),{attrs:{}}),a=n.style,s=void 0===a?{}:a,p=u(n,["style"]);return r.attrs.style=c({},r.attrs.style,{},s),t.apply(void 0,[i.tag,c({},r.attrs,{},p)].concat(d(o)))}.bind(null,a.createElement)},8076:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(7294),o=i(9274);var r=function(e){var t=e.children,i=e.className,r=e.style,a=e.bgStyle,s=e.bg;return n.createElement(o.Z,{className:[s?"index-module--bannerSection--3k6Km":"index-module--bannerNoBg--1eyHE",i].join(" "),style:Object.assign({color:s?"white":"black"},r)},n.createElement("div",{className:"index-module--bg--2ugIb",style:Object.assign({backgroundImage:"url("+s+")"},a)}),t)}},6636:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(7294),o=i(7606);var r=function(){return n.createElement(n.Fragment,null,n.createElement("footer",{className:"index-module--footer--iZ-vb"},n.createElement("span",null,"© 2022 Swift Innovators' Summit. All rights reserved."),n.createElement("div",null,n.createElement("a",{target:"_blank",href:"https://www.instagram.com/swiftinsg/"},n.createElement(o.G,{icon:["fab","instagram"]})),n.createElement("a",{target:"_blank",href:"https://twitter.com/swiftinsg"},n.createElement(o.G,{icon:["fab","twitter"]})),n.createElement("a",{target:"_blank",href:"mailto:hello@swiftinsg.org"},n.createElement(o.G,{icon:["far","envelope"]})))))}},1322:function(e,t,i){"use strict";i.d(t,{Z:function(){return p}});var n=i(7294),o=i(5444),r=i(7606),a="index-module--landingHeader--3JkDZ",s=[{href:"/about",name:"About"},{href:"/sis",name:"Swift Innovators' Summit"},{href:"/students",name:"Students"},{href:"/apps",name:"Apps"},{href:"/news",name:"News & Achievements"},{href:"/joinus",name:"Join Us"}];var p=function(e){var t=e.startWhite,i=(0,n.useState)(!1),p=i[0],l=i[1],c=(0,n.useState)(!1),u=c[0],d=c[1];return(0,n.useEffect)((function(){function e(e){var t=window.scrollY;l(t>25)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n.createElement(n.Fragment,null,n.createElement("header",{className:[a,p?"index-module--beyondScroll--3hGar":t?"index-module--startWhite--3RCjB":""].join(" ")},n.createElement(o.rU,{to:"/"},n.createElement("div",{className:"index-module--swiftIcon--1ZTYU"})),n.createElement("div",{className:"index-module--headerLinks--11H-I"},s.map((function(e){return n.createElement(o.rU,{to:e.href},e.name)})),n.createElement(r.G,{icon:["fas","bars"],onClick:function(){return d((function(e){return!e}))}}),n.createElement("div",{className:"index-module--drawer--d1rYx",style:{width:u?"100vw":"0px"}},n.createElement("a",{href:"javascript:void(0)",className:"index-module--closeBtn--cdUmP",onClick:function(){return d(!u)}},"×"),s.map((function(e){return n.createElement(o.rU,{to:e.href},e.name)}))))))}},8689:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(7294),o="index-module--page--1i8Aa";var r=function(e){var t=e.children,i=e.className,r=e.style,a=e.genericBackground;return n.createElement("div",{className:[o,i].join(" "),style:Object.assign({},r,{backgroundImage:a?"url(/assets/genericBg.svg)":""})},t)}},4489:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(7294),o=i(7606);var r=function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"index-module--readMore--3hz7W",onClick:function(){return window.scroll({top:window.innerHeight-95,behavior:"smooth"})}},n.createElement("span",null,"Read more"),n.createElement(o.G,{icon:["fas","arrow-down"]})))}},9274:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(7294),o="index-module--section--3EKCW";var r=function(e){var t=e.children,i=e.className,r=e.style;return n.createElement("div",{className:[o,i].join(" "),style:r},t)}},8729:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(7294),o=function(e){var t=e.title,i=e.size,o=e.weight;return n.createElement("div",null,n.createElement("div",{className:"index-module--titleHolder--5o3lT"},n.createElement("span",{className:"index-module--title--2JcC7",style:{fontSize:i,fontWeight:o}},t),n.createElement("hr",null)))}},2307:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return h}});var n="apps-module--appHolder--XJ-1e",o=i(8076),r=i(6636),a=i(1322),s=i(5444),p=i(8689),l=i(7294),c=i(4489),u=i(9274),d=i(8729),m=i.p+"static/appBanner-666379abd8299b477fdbb02b438db485.svg",f=[{title:"Grass",description:"Personalise your plants",icon:"2022/Grass.jpg",link:"https://app.swiftinsg.org/grass",video:"https://youtube.com"},{title:"GiftDuck",description:"Never forget a birthday again!",icon:"2022/GiftDuck.jpg",link:"https://app.swiftinsg.org/giftduck",video:"https://youtube.com"},{title:"Money Rush",description:"ALoan? Fret not!",icon:"2022/MoneyRush.jpg",link:"https://app.swiftinsg.org/moneyrush",video:"https://youtube.com"},{title:"Sturrel",description:"Engaging, Educational Learning",icon:"2022/Sturrel.jpg",link:"https://app.swiftinsg.org/sturrel",video:"https://youtube.com"},{title:"LeMoney",description:"Wishlist, Budgeting, & Finance",icon:"2022/LeMoney.jpg",link:"https://app.swiftinsg.org/lemoney",video:"https://youtube.com"},{title:"Future",description:"Never forget important dates",icon:"2022/Future.jpg",link:"https://app.swiftinsg.org/future",video:"https://youtube.com"},{title:"SnapBoard",description:"Scan & Organise Whiteboards",icon:"2022/SnapBoard.jpg",link:"https://app.swiftinsg.org/snapboard",video:"https://youtube.com"},{title:"Stockoholic",description:"Fictional Stocks, Real Fun",icon:"2022/Stockoholic.jpg",link:"https://app.swiftinsg.org/stockoholic",video:"https://youtube.com"},{title:"Horizon",description:"Made for Singapore Youths",icon:"2022/Horizon.jpg",link:"https://app.swiftinsg.org/horizon",video:"https://youtube.com"},{title:"PlaneMail",description:"Email Planner on the Go",icon:"2022/PlaneMail.jpg",link:"https://app.swiftinsg.org/planemail",video:"https://youtube.com"},{title:"ElderlyFit",description:"Mild exercises for elderly",icon:"2022/ElderlyFit.jpg",link:"https://app.swiftinsg.org/elderlyfit",video:"https://youtube.com"},{title:"VStudy",description:"Your Perfect Study Buddy",icon:"2022/VStudy.jpg",link:"https://app.swiftinsg.org/vstudy",video:"https://youtube.com"},{title:"NAPFA+",description:"Ace your NAPFA",icon:"2022/NAPFA+.jpg",link:"https://app.swiftinsg.org/napfa",video:"https://youtube.com"},{title:"HalalSG",description:"Find Halal Restaurants Easily",icon:"2022/HalalSG.jpg",link:"https://app.swiftinsg.org/halalsg",video:"https://youtube.com"}],y={Productivity:[{title:"Lateiva",description:"Never be late again!",icon:"2021/lateiva.png",link:"https://apps.apple.com/us/app/lateiva/id1597545628",video:"https://youtu.be/bepLNNzaEeY"},{title:"Habitator",description:"Helping you break bad habits!",icon:"2021/habitator.png",link:"https://apps.apple.com/us/app/habitator/id1597273117",video:"https://youtu.be/eCCxHhjI6kc"},{title:"StudyFly",description:"Digitalise your written notes",icon:"2020/StudyFly.png",link:"https://apps.apple.com/sg/app/studyfly/id1545511275",video:"https://youtu.be/eS-pigaD62Q"},{title:"Habitat",description:"Your tasks and to-do list, gamified",icon:"2020/Habitat.png",link:"https://apps.apple.com/sg/app/habitat-do-tasks-grow-trees/id1546610193",video:"https://youtu.be/J7GCuMQmLFM"},{title:"Do It",description:"Stay on top of your tasks.",icon:"2019/Doit.png",link:"https://apps.apple.com/us/app/doit-do-it/id1485829640?ls=1"},{title:"Tasko",description:"Prioritise tasks and manage your time",icon:"2019/Tasko.png",link:"https://apps.apple.com/us/app/tasko/id1485959482?ls=1"},{title:"Scheduler Pro",description:"Get motivated to complete your tasks",icon:"2019/Scheduler%20Pro.png",link:"https://apps.apple.com/us/app/scheduler-pro-plan-your-work/id1486135477"},{title:"Listè",description:"Productivity made easy",icon:"2019/Liste.png",link:"https://apps.apple.com/us/app/listé/id1486116734"},{title:"Tyred",description:"The easy photo todos",icon:"2019/Tyred.png",link:"https://apps.apple.com/us/app/tyred-easy-photo-todos/id1486117252?ls=1"},{title:"Tasks - Productivity Elevated",description:"Stay focused.",icon:"2018/Tasks.png",link:"https://apps.apple.com/us/app/tasks-productivity-elevated/id1440454388"}],Education:[{title:"MusicalRooms",description:"A whole new dimension of music learning!",icon:"2021/musicalrooms.png",link:"https://apps.apple.com/us/app/musicalrooms/id1597490110",video:"https://youtu.be/vQ36UXb0X-I"},{title:"StudyZone",description:"Manage your incoming schoolwork!",icon:"2021/studyzone.png",link:"https://apps.apple.com/us/app/studyzone/id1596910040",video:"https://youtu.be/VPIDp0uk5Gk"},{title:"Remorise",description:"Remember efficiently",icon:"2021/remorise.png",link:"https://apps.apple.com/us/app/remorise/id1597260521",video:"https://youtu.be/3bNBQkRrIkU"},{title:"GPA Buddy ",description:"Streamline GPA calculation",icon:"2021/gpabuddy.png",link:"https://apps.apple.com/us/app/gpa-buddy/id1596905448",video:"https://youtu.be/V2ahoBLbCBw"},{title:"Writezi",description:"听写 practice simplified",icon:"2021/writezi.png",link:"https://apps.apple.com/us/app/writezi/id1596864534",video:"https://youtu.be/WZCFKMNuk6Y"},{title:"Enviroquest",description:"Saving the Earth, made fun",icon:"2020/EnviroQuest.png",link:"https://apps.apple.com/sg/app/enviroquest/id1546701399",video:"https://youtu.be/MfDweFiZCVQ"},{title:"CATmistry",description:"Chemistry, gamified.",icon:"2020/CATmistry.png",link:"https://apps.apple.com/sg/app/catmistry/id1545311327",video:"https://youtu.be/zRYNBemX1RU"},{title:"ReadingPal",description:"Your collaborative reader",icon:"2019/ReadingPal.png",link:"https://apps.apple.com/us/app/readingpal/id1485960531?ls=1"},{title:"STUDI ",description:"Rope in the community to help you learn",icon:"2019/STUDI.png",link:"https://apps.apple.com/us/app/studi-studying-made-easy/id1486737527?ls=1"},{title:"Eureka - Study app",description:"Helping you to study smart",icon:"2019/Eureka.png",link:"https://apps.apple.com/us/app/eureka-study-app/id1486120976?ls=1"},{title:"Quizercise",description:"Exercise your brain and body",icon:"2019/Quizercise.png",link:"https://apps.apple.com/us/app/quizercise/id1486275677?ls=1"},{title:"Parkgoer",description:"Parkgoer. Parks today!",icon:"2018/Parkgoer.png",link:"https://apps.apple.com/us/app/parkgoer/id1441745725"},{title:"Fractal",description:"The non-intrusive calculator.",icon:"2018/Fractal.png",link:"https://apps.apple.com/us/app/fractal-a-calculator/id1441648055"}],"Lifestyle and Entertainment":[{title:"MoneyCents",description:"A money manager app",icon:"2021/moneycents.png",link:"https://apps.apple.com/us/app/moneycents/id1597220959",video:"https://youtu.be/XCS9J2H39OQ"},{title:"Showery",description:"Your shower companion",icon:"2021/showery.png",link:"https://apps.apple.com/us/app/showery/id1597110095",video:"https://youtu.be/6QguOzznpvA"},{title:"Fiducia",description:"Overcome social anxiety and build confidence.",icon:"2021/fiducia.png",link:"https://apps.apple.com/us/app/fiducia/id1597445189",video:"https://youtu.be/d4wiET9aez8"},{title:"ColourLife",description:"Experience different types of colour blindness!",icon:"2021/colourlife.png",link:"https://apps.apple.com/us/app/colourlife/id1597543734",video:"https://youtu.be/ICukZDP_WL4"},{title:"Grocermi",description:"Track what is in your fridge",icon:"2020/Grocermi.png",link:"https://apps.apple.com/us/app/grocermi/id1548968304",video:"https://youtu.be/X743H_nPyfQ"},{title:"Fridge",description:"Get recipes with what is in your fridge",icon:"2020/Fridge.png",link:"https://apps.apple.com/us/app/fridge-track-your-food/id1547398070",video:"https://youtu.be/FqfKPNF9hnM"},{title:"Anything",description:"Helping you meditate and calm down",icon:"2020/Anything.png",link:"https://apps.apple.com/sg/app/anything-a-meditation-app/id1545318664",video:"https://youtu.be/kFoZ-rbI5wQ"},{title:"Wishey",description:"A budgeting app.",icon:"2020/Wishey.png",link:"https://apps.apple.com/sg/app/wishey/id1545938094",video:"https://youtu.be/nS-TRJ-TFAA"},{title:"Recipely",description:"A recipe app.",icon:"2020/Recipely.png",link:"https://apps.apple.com/sg/app/recipely/id1545119133",video:"https://youtu.be/2tT_S5tfeIk"},{title:"Dollar",description:"We save your cents",icon:"2019/Dollar.png",link:"https://apps.apple.com/us/app/dollar/id1486122185?ls=1"},{title:"Work It Out",description:"Fitness Made Easy",icon:"2019/Work%20It%20Out.png",link:"https://apps.apple.com/us/app/work-it-out-fitness-app/id1486118564?ls=1"},{title:"chARacters",description:"Experience Reality in a different way",icon:"2019/chARacters.png",link:"https://apps.apple.com/us/app/characters-an-ar-photo-app/id1485831264?ls=1"},{title:"IdeaGenerator",description:"Helping you generate your next idea",icon:"2019/Idea%20Generator.png",link:"https://apps.apple.com/us/app/ideagenerator/id1486526473?ls=1"},{title:"Brush Now",description:"The proper way to brush",icon:"2018/BrushNow.png",link:"https://apps.apple.com/us/app/brushnow-toothbrush-timer/id1441508610"},{title:"Dice",description:"Pick a number",icon:"2018/Dice.png",link:"https://apps.apple.com/us/app/dice-pick-a-number/id1441538796"},{title:"Scam Me Not ",description:"Don’t become the next victim!",icon:"2021/scammenot.png",link:"https://apps.apple.com/us/app/scam-me-not/id1597302940",video:"https://youtu.be/WDe-XRcLQiI"}],Travel:[{title:"ArrivalSG",description:"The perfect travel companion!",icon:"2021/arrivalsg.png",link:"https://apps.apple.com/us/app/arrivalsg/id1597543310",video:"https://youtu.be/FccplOm9jC0"},{title:"BuSG",description:"Checking bus arrival timings and routes easily",icon:"2020/BuSG.png",link:"https://apps.apple.com/sg/app/busg/id1545571389",video:"https://youtu.be/vd2Su2pCW-k"},{title:"Triplanner",description:"Plan your trips and staycations!",icon:"2020/Triplanner.png",link:"https://apps.apple.com/sg/app/triplanner-your-travel-pal/id1544696258",video:"https://youtu.be/uvYTyCLobxA"},{title:"MacRitchie Trails",description:"Helping you find your way around MacRitchie Reservoir",icon:"2020/MacRitchie%20Trails.png",link:"https://apps.apple.com/us/app/macritchie-trails/id1547956127",video:"https://youtu.be/Cs8XZ54tdek"},{title:"FootpRInt",description:"Find your lost items easily",icon:"2020/FootpRInt.png",link:"https://apps.apple.com/us/app/footprint/id1549189068",video:"https://youtu.be/HvBswMA7bvQ"},{title:"KillStep",description:"Gamifying your exercise experience!",icon:"2020/KillStep.png",link:"https://apps.apple.com/us/app/killstep/id1546871822",video:"https://youtu.be/fXEfZeYiPEY"}]};function g(e){var t=e.title,i=e.description,n=e.icon,o=e.link,r=e.video;return l.createElement(s.rU,{to:o},l.createElement("div",{className:"apps-module--app--2CNR9"},l.createElement("div",{style:{backgroundImage:"url(/assets/appIcons/"+n+")"}}),l.createElement("div",null,l.createElement("span",null,t),l.createElement("span",null,i),r?l.createElement("span",null,l.createElement(s.rU,{to:r},"Watch our journey!")):"")))}var h=function(){return(0,l.useEffect)((function(){document.title="Our Applications"})),l.createElement(l.Fragment,null,l.createElement(a.Z,null),l.createElement(p.Z,null,l.createElement(o.Z,{bg:m,bgStyle:{backgroundSize:"150vh",filter:"none"},style:{color:"black"}},l.createElement("h1",null,"Apps"),l.createElement(c.Z,null)),l.createElement(u.Z,{className:"apps-module--sectionTwo--2TT8F"},l.createElement(d.Z,{title:"Apps by the class of 2022"}),l.createElement("div",{className:n},f.map((function(e){return l.createElement(g,e)}))),l.createElement(d.Z,{title:"Apps by our Alumni"}),l.createElement(l.Fragment,null,Object.keys(y).map((function(e,t){return l.createElement(l.Fragment,null,l.createElement("h2",null,e),l.createElement("div",{className:n},y[e].map((function(e){return l.createElement(g,e)}))))})))),l.createElement(r.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-apps-tsx-f625e0457beb1258b8ed.js.map