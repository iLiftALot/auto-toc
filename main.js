/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var h=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var x=Object.prototype.hasOwnProperty;var k=(t,e)=>{for(var n in e)h(t,n,{get:e[n],enumerable:!0})},$=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of D(e))!x.call(t,o)&&o!==n&&h(t,o,{get:()=>e[o],enumerable:!(r=C(e,o))||r.enumerable});return t};var V=t=>$(h({},"__esModule",{value:!0}),t);var ee={};k(ee,{default:()=>p});module.exports=V(ee);var g={envPath:"/Users/nicholascorbin/Desktop/Knowledge/MyObsidian/ObsidianBackup/My Sync/.env",pluginRoot:"/Users/nicholascorbin/Desktop/Knowledge/MyObsidian/ObsidianBackup/My Sync/.obsidian/plugins/insta-toc",pluginManifest:{id:"insta-toc",name:"Insta TOC",version:"2.0.22",minAppVersion:"0.15.0",description:"Simultaneously generate, update, and maintain a table of contents for your notes.",author:"Nick C.",autherUrl:"https://github.com/iLiftALot/insta-toc",isDesktopOnly:!1},pluginSettingsPath:"/Users/nicholascorbin/Desktop/Knowledge/MyObsidian/ObsidianBackup/My Sync/.obsidian/plugins/insta-toc/data.json",pluginSettings:{},projectRoot:"/Users/nicholascorbin/Desktop/Knowledge/MyObsidian/ObsidianBackup/My Sync/.obsidian/plugins/insta-toc",vaultRoot:"/Users/nicholascorbin/Desktop/Knowledge/MyObsidian/ObsidianBackup/My Sync",vaultName:"My Sync"};var m=require("obsidian");var M={tocString:"> [!SUMMARY] Table of Contents",shouldGenToc:!1};var f=require("obsidian"),d=class extends f.PluginSettingTab{constructor(e,n){super(e,n),this.plugin=n}display(){let{containerEl:e}=this;e.empty(),new f.Setting(e).setName("Setting #1").setDesc("It's a secret").addText(n=>n.setPlaceholder("Enter your secret").setValue(this.plugin.settings.tocString).onChange(async r=>{this.plugin.settings.tocString=r,await this.plugin.saveSettings()})),new f.Setting(e).setName("TOC Files").setDesc("Insert files to automatically ").addText(n=>n.setPlaceholder("Enter your secret").setValue(this.plugin.settings.tocString).onChange(async r=>{this.plugin.settings.tocString=r,await this.plugin.saveSettings()}))}};var c={defaultMerge:Symbol("deepmerge-ts: default merge"),skip:Symbol("deepmerge-ts: skip")},ce={defaultMerge:c.defaultMerge};function H(t,e){return e}function L(t,e){return t.filter(n=>n!==void 0)}var E;(function(t){t[t.NOT=0]="NOT",t[t.RECORD=1]="RECORD",t[t.ARRAY=2]="ARRAY",t[t.SET=3]="SET",t[t.MAP=4]="MAP",t[t.OTHER=5]="OTHER"})(E||(E={}));function R(t){return typeof t!="object"||t===null?0:Array.isArray(t)?2:G(t)?1:t instanceof Set?3:t instanceof Map?4:5}function j(t){let e=new Set;for(let n of t)for(let r of[...Object.keys(n),...Object.getOwnPropertySymbols(n)])e.add(r);return e}function N(t,e){return typeof t=="object"&&Object.prototype.propertyIsEnumerable.call(t,e)}function v(t){let e=0,n=t[0]?.[Symbol.iterator]();return{[Symbol.iterator](){return{next(){do{if(n===void 0)return{done:!0,value:void 0};let r=n.next();if(r.done===!0){e+=1,n=t[e]?.[Symbol.iterator]();continue}return{done:!1,value:r.value}}while(!0)}}}}}var b=["[object Object]","[object Module]"];function G(t){if(!b.includes(Object.prototype.toString.call(t)))return!1;let{constructor:e}=t;if(e===void 0)return!0;let n=e.prototype;return!(n===null||typeof n!="object"||!b.includes(Object.prototype.toString.call(n))||!n.hasOwnProperty("isPrototypeOf"))}function Y(t,e,n){let r={};for(let o of j(t)){let i=[];for(let u of t)N(u,o)&&i.push(u[o]);if(i.length===0)continue;let s=e.metaDataUpdater(n,{key:o,parents:t}),a=T(i,e,s);a!==c.skip&&(o==="__proto__"?Object.defineProperty(r,o,{value:a,configurable:!0,enumerable:!0,writable:!0}):r[o]=a)}return r}function z(t){return t.flat()}function B(t){return new Set(v(t))}function K(t){return new Map(v(t))}function W(t){return t.at(-1)}var l={mergeRecords:Y,mergeArrays:z,mergeSets:B,mergeMaps:K,mergeOthers:W};function O(...t){return q({})(...t)}function q(t,e){let n=J(t,r);function r(...o){return T(o,n,e)}return r}function J(t,e){return{defaultMergeFunctions:l,mergeFunctions:{...l,...Object.fromEntries(Object.entries(t).filter(([n,r])=>Object.hasOwn(l,n)).map(([n,r])=>r===!1?[n,l.mergeOthers]:[n,r]))},metaDataUpdater:t.metaDataUpdater??H,deepmerge:e,useImplicitDefaultMerging:t.enableImplicitDefaultMerging??!1,filterValues:t.filterValues===!1?void 0:t.filterValues??L,actions:c}}function T(t,e,n){let r=e.filterValues?.(t,n)??t;if(r.length===0)return;if(r.length===1)return S(r,e,n);let o=R(r[0]);if(o!==0&&o!==5){for(let i=1;i<r.length;i++)if(R(r[i])!==o)return S(r,e,n)}switch(o){case 1:return Q(r,e,n);case 2:return X(r,e,n);case 3:return Z(r,e,n);case 4:return _(r,e,n);default:return S(r,e,n)}}function Q(t,e,n){let r=e.mergeFunctions.mergeRecords(t,e,n);return r===c.defaultMerge||e.useImplicitDefaultMerging&&r===void 0&&e.mergeFunctions.mergeRecords!==e.defaultMergeFunctions.mergeRecords?e.defaultMergeFunctions.mergeRecords(t,e,n):r}function X(t,e,n){let r=e.mergeFunctions.mergeArrays(t,e,n);return r===c.defaultMerge||e.useImplicitDefaultMerging&&r===void 0&&e.mergeFunctions.mergeArrays!==e.defaultMergeFunctions.mergeArrays?e.defaultMergeFunctions.mergeArrays(t):r}function Z(t,e,n){let r=e.mergeFunctions.mergeSets(t,e,n);return r===c.defaultMerge||e.useImplicitDefaultMerging&&r===void 0&&e.mergeFunctions.mergeSets!==e.defaultMergeFunctions.mergeSets?e.defaultMergeFunctions.mergeSets(t):r}function _(t,e,n){let r=e.mergeFunctions.mergeMaps(t,e,n);return r===c.defaultMerge||e.useImplicitDefaultMerging&&r===void 0&&e.mergeFunctions.mergeMaps!==e.defaultMergeFunctions.mergeMaps?e.defaultMergeFunctions.mergeMaps(t):r}function S(t,e,n){let r=e.mergeFunctions.mergeOthers(t,e,n);return r===c.defaultMerge||e.useImplicitDefaultMerging&&r===void 0&&e.mergeFunctions.mergeOthers!==e.defaultMergeFunctions.mergeOthers?e.defaultMergeFunctions.mergeOthers(t):r}function P(t,e){let n=null;return function(...r){n!==null&&clearTimeout(n),n=window.setTimeout(()=>{t.apply(this,r),n=null},e)}}var p=class extends m.Plugin{constructor(e,n){let r=n??g.pluginManifest;super(e,r),this.app=e}async onload(){console.log("Loading Insta TOC Plugin"),await this.loadSettings(),this.addSettingTab(new d(this.app,this)),this.registerMarkdownCodeBlockProcessor("insta-toc",async(e,n,r)=>{let o=r.sourcePath,i=o.substring(0,o.lastIndexOf(".")),s=/^(\s*)-\s*(.*)/,u=e.split(`
`).map(y=>{let F=y.match(s);if(!F)return y;let[,w,I]=F,A=`${i}#${I}`;return`${w}- [[${A}|${I}]]`}).join(`
`);await m.MarkdownRenderer.render(this.app,u,n,o,this)}),this.registerEvent(this.app.vault.on("modify",P(this.handleEditorChange.bind(this),2e3)))}onunload(){console.log("Unloading Insta TOC Plugin")}async loadSettings(){let e=M,n=await this.loadData();n&&(e=O(M,n)),this.settings=e}async saveSettings(){await this.saveData(this.settings)}getTocInsertPosition(e){let n=e.position.start.line,r=0,o=e.position.end.line,i=e.position.end.col;return{from:{line:n,ch:r},to:{line:o,ch:i}}}generateToc(e){let n=[];return e.length>0&&e.forEach(o=>{let i=o.level,s=o.heading,a=`${" ".repeat((i-1)*4)}- ${s}`;n.push(a)}),`\`\`\`insta-toc
${n.join(`
`)}
\`\`\``}updateAutoToc(e,n){let r=this.app.metadataCache.getFileCache(n),o=r?.headings??[],i=r?.sections?r.sections.find(u=>u.type==="code"&&e.getLine(u.position.start.line)==="```insta-toc"):void 0;if(!i)return;let s=this.getTocInsertPosition(i),a=this.generateToc(o);e.replaceRange(a,s.from,s.to)}async handleEditorChange(){let e=this.app.workspace.activeEditor,n=e?.editor,r=e?.file??void 0;!e||!n||!r||n&&this.updateAutoToc(n,r)}};
