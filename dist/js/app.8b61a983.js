(function(){"use strict";var n={3112:function(n,e,t){var i=t(9242),a=t(3396);function s(n,e,t,i,s,o){const r=(0,a.up)("LinkSaver");return(0,a.wg)(),(0,a.j4)(r)}t(7658);var o=t(7139),r=t(4870),l=t(4287),c=t(7795);const u={apiKey:"AIzaSyCi3uDDPOWJbl5frMH4i0ucqSRzKMe71is",authDomain:"links-saver-59c51.firebaseapp.com",projectId:"links-saver-59c51",storageBucket:"links-saver-59c51.appspot.com",messagingSenderId:"119083120175",appId:"1:119083120175:web:0da0c5c4439bb7fdddb8da"},v=((0,c.ZF)(u),(0,l.ad)()),d=n=>((0,a.dD)("data-v-1a0da389"),n=n(),(0,a.Cn)(),n),p={class:"container"},f=d((()=>(0,a._)("div",{class:"nav-bar"},[(0,a._)("a",null,"Save Link"),(0,a._)("div",{class:"close"},[(0,a._)("div",{class:"line one"}),(0,a._)("div",{class:"line two"})])],-1))),h={class:"sender-area"},w=["onSubmit"],_={class:"input-place"},g={class:"send"},m={type:"submi",class:"send"},b={class:"send-icon",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},k=d((()=>(0,a._)("g",null,[(0,a._)("g",null,[(0,a._)("path",{fill:"#6B6C7B",d:"M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"})])],-1))),y=[k],x=d((()=>(0,a._)("div",{class:"info__icon"},[(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",viewBox:"0 0 24 24",height:"24",fill:"none"},[(0,a._)("path",{fill:"#393a37",d:"m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"})])],-1))),O={class:"info__title"},C=["onClick"],L=d((()=>(0,a._)("svg",{height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("path",{d:"m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z",fill:"#393a37"})],-1))),S=[L];var j={__name:"LinkSaver",setup(n){const e=(0,r.iH)(""),t=(0,r.iH)([]);function s(n){const e=/^(ftp|http|https):\/\/[^ "]+$/;if(e.test(n))return!0;const t=/^[^ "]+\.[^ "]+$/;return t.test(n)}const c=async()=>{if(""===e.value.trim())return void alert("input should not be empty");const n=s(e.value);if(n){const n=(0,l.hJ)(v,"links"),t={link:e.value};await(0,l.ET)(n,t),e.value="",console.log(e.value),u()}else alert("URL should be valid (https://sample.com)")},u=async()=>{const n=await(0,l.PL)((0,l.hJ)(v,"links")),e=[];n.forEach((n=>{const t={id:n.id,link:n.data().link};e.push(t)})),t.value=e},d=async n=>{await(0,l.oe)((0,l.JU)(v,"links",n)),u()};return(0,a.bv)((()=>{u()})),(n,s)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",p,[f,(0,a._)("div",h,[(0,a._)("form",{onSubmit:(0,i.iM)(c,["prevent"])},[(0,a._)("div",_,[(0,a.wy)((0,a._)("input",{placeholder:"Put the link.",class:"send-input",type:"text","onUpdate:modelValue":s[0]||(s[0]=n=>e.value=n)},null,512),[[i.nr,e.value]]),(0,a._)("div",g,[(0,a._)("button",m,[((0,a.wg)(),(0,a.iD)("svg",b,y))])])])],40,w)])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.value,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n.id,class:"info"},[x,(0,a._)("div",O,(0,o.zw)(n.link),1),(0,a._)("div",{class:"info__close",onClick:e=>d(n.id)},S,8,C)])))),128))]))}},z=t(89);const D=(0,z.Z)(j,[["__scopeId","data-v-1a0da389"]]);var B=D,H={name:"App",components:{LinkSaver:B}};const I=(0,z.Z)(H,[["render",s]]);var M=I;(0,i.ri)(M).mount("#app")}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={exports:{}};return n[i].call(s.exports,s,s.exports,t),s.exports}t.m=n,function(){var n=[];t.O=function(e,i,a,s){if(!i){var o=1/0;for(u=0;u<n.length;u++){i=n[u][0],a=n[u][1],s=n[u][2];for(var r=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(t.O).every((function(n){return t.O[n](i[l])}))?i.splice(l--,1):(r=!1,s<o&&(o=s));if(r){n.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=n.length;u>0&&n[u-1][2]>s;u--)n[u]=n[u-1];n[u]=[i,a,s]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,i){var a,s,o=i[0],r=i[1],l=i[2],c=0;if(o.some((function(e){return 0!==n[e]}))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(l)var u=l(t)}for(e&&e(i);c<o.length;c++)s=o[c],t.o(n,s)&&n[s]&&n[s][0](),n[s]=0;return t.O(u)},i=self["webpackChunklinks_saver"]=self["webpackChunklinks_saver"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(3112)}));i=t.O(i)})();
//# sourceMappingURL=app.8b61a983.js.map