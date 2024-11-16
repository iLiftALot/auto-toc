/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var I=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var N=Object.prototype.hasOwnProperty;var z=(t,e)=>{for(var n in e)I(t,n,{get:e[n],enumerable:!0})},j=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of U(e))!N.call(t,o)&&o!==n&&I(t,o,{get:()=>e[o],enumerable:!(r=V(e,o))||r.enumerable});return t};var B=t=>j(I({},"__esModule",{value:!0}),t);var ce={};z(ce,{default:()=>S});module.exports=B(ce);var d={envPath:"/home/runner/work/insta-toc/insta-toc/.env",pluginRoot:"/home/runner/work/insta-toc/insta-toc",pluginManifest:{id:"insta-toc",name:"Insta TOC",version:"3.1.4",minAppVersion:"0.15.0",description:"Simultaneously generate, update, and maintain a table of contents for your notes.",author:"Nick C.",autherUrl:"https://github.com/iLiftALot/insta-toc",isDesktopOnly:!1},pluginSettingsPath:"/home/runner/work/insta-toc/insta-toc/data.json",pluginSettings:{bulletType:"number",indentSize:4},projectRoot:"/home/runner/work/insta-toc/insta-toc",vaultRoot:"/home/runner/work/insta-toc/insta-toc",vaultName:"insta-toc"};var y=require("obsidian");var v={bulletType:"dash",indentSize:4};var l=require("obsidian"),Y={dash:"dash",number:"number"},m=class extends l.PluginSettingTab{constructor(e,n){super(e,n),this.plugin=n}display(){let{containerEl:e}=this;e.empty(),new l.Setting(e).setName("List Bullet Type").setDesc("Select the list bullet type.").addDropdown(n=>n.addOptions(Y).setValue(this.plugin.settings.bulletType).onChange(async r=>{this.plugin.settings.bulletType=r,await this.plugin.saveSettings()})),new l.Setting(e).setName("Indent Size").setDesc("Select the indentation size.").addSlider(n=>n.setLimits(2,8,2).setDynamicTooltip().setInstant(!0).setValue(this.plugin.settings.indentSize).onChange(async r=>{this.plugin.settings.indentSize=r,await this.plugin.saveSettings()}))}};var u={defaultMerge:Symbol("deepmerge-ts: default merge"),skip:Symbol("deepmerge-ts: skip")},Se={defaultMerge:u.defaultMerge};function q(t,e){return e}function K(t,e){return t.filter(n=>n!==void 0)}var P;(function(t){t[t.NOT=0]="NOT",t[t.RECORD=1]="RECORD",t[t.ARRAY=2]="ARRAY",t[t.SET=3]="SET",t[t.MAP=4]="MAP",t[t.OTHER=5]="OTHER"})(P||(P={}));function w(t){return typeof t!="object"||t===null?0:Array.isArray(t)?2:Q(t)?1:t instanceof Set?3:t instanceof Map?4:5}function W(t){let e=new Set;for(let n of t)for(let r of[...Object.keys(n),...Object.getOwnPropertySymbols(n)])e.add(r);return e}function J(t,e){return typeof t=="object"&&Object.prototype.propertyIsEnumerable.call(t,e)}function A(t){let e=0,n=t[0]?.[Symbol.iterator]();return{[Symbol.iterator](){return{next(){do{if(n===void 0)return{done:!0,value:void 0};let r=n.next();if(r.done===!0){e+=1,n=t[e]?.[Symbol.iterator]();continue}return{done:!1,value:r.value}}while(!0)}}}}}var D=["[object Object]","[object Module]"];function Q(t){if(!D.includes(Object.prototype.toString.call(t)))return!1;let{constructor:e}=t;if(e===void 0)return!0;let n=e.prototype;return!(n===null||typeof n!="object"||!D.includes(Object.prototype.toString.call(n))||!n.hasOwnProperty("isPrototypeOf"))}function X(t,e,n){let r={};for(let o of W(t)){let i=[];for(let c of t)J(c,o)&&i.push(c[o]);if(i.length===0)continue;let s=e.metaDataUpdater(n,{key:o,parents:t}),a=x(i,e,s);a!==u.skip&&(o==="__proto__"?Object.defineProperty(r,o,{value:a,configurable:!0,enumerable:!0,writable:!0}):r[o]=a)}return r}function Z(t){return t.flat()}function _(t){return new Set(A(t))}function ee(t){return new Map(A(t))}function te(t){return t.at(-1)}var h={mergeRecords:X,mergeArrays:Z,mergeSets:_,mergeMaps:ee,mergeOthers:te};function O(...t){return ne({})(...t)}function ne(t,e){let n=re(t,r);function r(...o){return x(o,n,e)}return r}function re(t,e){return{defaultMergeFunctions:h,mergeFunctions:{...h,...Object.fromEntries(Object.entries(t).filter(([n,r])=>Object.hasOwn(h,n)).map(([n,r])=>r===!1?[n,h.mergeOthers]:[n,r]))},metaDataUpdater:t.metaDataUpdater??q,deepmerge:e,useImplicitDefaultMerging:t.enableImplicitDefaultMerging??!1,filterValues:t.filterValues===!1?void 0:t.filterValues??K,actions:u}}function x(t,e,n){let r=e.filterValues?.(t,n)??t;if(r.length===0)return;if(r.length===1)return F(r,e,n);let o=w(r[0]);if(o!==0&&o!==5){for(let i=1;i<r.length;i++)if(w(r[i])!==o)return F(r,e,n)}switch(o){case 1:return oe(r,e,n);case 2:return ie(r,e,n);case 3:return se(r,e,n);case 4:return ae(r,e,n);default:return F(r,e,n)}}function oe(t,e,n){let r=e.mergeFunctions.mergeRecords(t,e,n);return r===u.defaultMerge||e.useImplicitDefaultMerging&&r===void 0&&e.mergeFunctions.mergeRecords!==e.defaultMergeFunctions.mergeRecords?e.defaultMergeFunctions.mergeRecords(t,e,n):r}function ie(t,e,n){let r=e.mergeFunctions.mergeArrays(t,e,n);return r===u.defaultMerge||e.useImplicitDefaultMerging&&r===void 0&&e.mergeFunctions.mergeArrays!==e.defaultMergeFunctions.mergeArrays?e.defaultMergeFunctions.mergeArrays(t):r}function se(t,e,n){let r=e.mergeFunctions.mergeSets(t,e,n);return r===u.defaultMerge||e.useImplicitDefaultMerging&&r===void 0&&e.mergeFunctions.mergeSets!==e.defaultMergeFunctions.mergeSets?e.defaultMergeFunctions.mergeSets(t):r}function ae(t,e,n){let r=e.mergeFunctions.mergeMaps(t,e,n);return r===u.defaultMerge||e.useImplicitDefaultMerging&&r===void 0&&e.mergeFunctions.mergeMaps!==e.defaultMergeFunctions.mergeMaps?e.defaultMergeFunctions.mergeMaps(t):r}function F(t,e,n){let r=e.mergeFunctions.mergeOthers(t,e,n);return r===u.defaultMerge||e.useImplicitDefaultMerging&&r===void 0&&e.mergeFunctions.mergeOthers!==e.defaultMergeFunctions.mergeOthers?e.defaultMergeFunctions.mergeOthers(t):r}function $(t,e){let n=null;return function(...r){n!==null&&clearTimeout(n),n=window.setTimeout(()=>{t.apply(this,r),n=null},e)}}var C="insta-toc",M=class{constructor(e,n,r,o){this.app=e,this.plugin=n,this.editor=r,this.file=o,this.fileCache=this.app.metadataCache.getFileCache(o),this.fileCache&&this.updateAutoToc()}getTocInsertPosition(e){let n=e.position.start.line,r=0,o=e.position.end.line,i=e.position.end.col;return{from:{line:n,ch:r},to:{line:o,ch:i}}}generateNumberedToc(e){let n=[],r={};for(let i of e){let s=i.level,a=i.heading;for(let g=s+1;g<=6;g++)r[g]=0;r[s]||(r[s]=0),r[s]++;let c=r[s].toString(),T=`${" ".repeat((s-1)*4)}${c}. ${a}`;n.push(T)}let o=n.join(`
`);return`\`\`\`${C}
${o}
\`\`\``}generateNormalToc(e){let n=[];e.length>0&&e.forEach(o=>{let i=o.level,s=o.heading,c=`${" ".repeat((i-1)*4)}- ${s}`;n.push(c)});let r=n.join(`
`);return`\`\`\`${C}
${r}
\`\`\``}getTocData(){let e=this.fileCache?.headings??[],n=this.fileCache?.sections?this.fileCache.sections.find(r=>r.type==="code"&&this.editor.getLine(r.position.start.line)===`\`\`\`${C}`):void 0;return{fileHeadings:e,instaTocSection:n}}updateAutoToc(){let{fileHeadings:e,instaTocSection:n}=this.getTocData();if(!n)return;let r=this.getTocInsertPosition(n),i=this.plugin.settings.bulletType==="dash"?this.generateNormalToc(e):this.generateNumberedToc(e);this.editor.replaceRange(i,r.from,r.to)}};var S=class extends y.Plugin{constructor(e,n){let r=n??d.pluginManifest;super(e,r),this.app=e}async onload(){console.log("Loading Insta TOC Plugin"),await this.loadSettings(),this.addSettingTab(new m(this.app,this)),this.registerMarkdownCodeBlockProcessor("insta-toc",async(e,n,r)=>{let o=r.sourcePath,i=o.substring(0,o.lastIndexOf(".")),s=/^(\s*)(-|\d+(?:\.\d+)*|\d\.)\s+(.*)/,a=e.split(`
`),c=[],E=a.map(f=>{let p=f.match(s);if(!p)return f;let[,b,k,R]=p,L=`${i}#${R}`,H=Math.floor(b.length/4)+1;return c.push(H),`${b}${k} [[${L}|${R}]]`}).join(`
`);await y.MarkdownRenderer.render(this.app,E,n,o,this);let T=this.settings.indentSize;n.querySelectorAll("li").forEach((f,p)=>{c[p]>1&&(f.style.marginLeft=`${T*10}px`)})}),this.registerEvent(this.app.vault.on("modify",$(this.handleEditorChange.bind(this),2e3)))}onunload(){console.log("Unloading Insta TOC Plugin")}async loadSettings(){let e=v,n=await this.loadData();n&&(e=O(v,n)),this.settings=e}async saveSettings(){await this.saveData(this.settings)}async handleEditorChange(){let e=this.app.workspace.activeEditor,n=e?.editor,r=e?.file??void 0;!e||!n||!r||new M(this.app,this,n,r)}};
