import{a6 as L,c0 as m,pM as w,pN as F,az as n,pO as R,de as B,aB as D,t as z,bB as M,bC as _,mT as q,r as $,pP as C}from"./index.d90d4844.js";import{fetchFeatureService as U}from"./arcgisLayers.0a615040.js";import{o as v}from"./jsonContext.b1feec67.js";import{i as f,a as Y,c as g,f as d}from"./portalItemUtils.59cab615.js";import"./lazyLayerLoader.5e7c3b38.js";const j=L.getLogger("esri.layers.FeatureLayer"),y="Feature Service";function c(a,e){return`Layer (title: ${a.title}, id: ${a.id}) of type '${a.declaredClass}' ${e}`}function A(a,e){if(e.type!==y)throw new n("feature-layer:portal-item-wrong-type",c(a,`should have portal item of type "${y}"`))}async function J(a){if(await a.load(),F(a))throw new n("feature-layer:save",c(a,"using an in-memory source cannot be saved to a portal item"))}function G(a,e){let t=a.messages.filter(({type:r})=>r==="error").map(({name:r,message:s,details:o})=>new n(r,s,o));if(e!=null&&e.ignoreUnsupported&&(t=t.filter(({name:r})=>r!=="layer:unsupported"&&r!=="symbol:unsupported"&&r!=="symbol-layer:unsupported"&&r!=="property:unsupported"&&r!=="url:unsupported")),t.length>0)throw new n("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:t})}async function b(a,e,t){"beforeSave"in a&&typeof a.beforeSave=="function"&&await a.beforeSave();const r=a.write({},e);return G(e,t),r}function P(a){const{layer:e,layerJSON:t}=a;return e.isTable?{layers:[],tables:[t]}:{layers:[t],tables:[]}}function h(a){f(a,d.JSAPI),a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t))}function k(a){const e=a.portalItem;if(!e)throw j.error("save: requires the portalItem property to be set"),new n("feature-layer:portal-item-not-set",c(a,"requires the portalItem property to be set"));if(!e.loaded)throw new n("feature-layer:portal-item-not-loaded",c(a,"cannot be saved to a portal item that does not exist or is inaccessible"));A(a,e)}async function T(a,e){return/\/\d+\/?$/.test(a.url)?P(e[0]):H(a,e)}async function H(a,e){const{layer:{url:t,customParameters:r,apiKey:s}}=e[0];let o=await a.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await Q(o,{url:t,customParameters:r,apiKey:s},e.map(l=>l.layer.layerId)));for(const l of e)E(l.layer,l.layerJSON,o);return o}async function Q(a,e,t){var r,s;a||(a={}),(r=a).layers||(r.layers=[]),(s=a).tables||(s.tables=[]);const{url:o,customParameters:l,apiKey:i}=e,{serviceJSON:u,layersJSON:p}=await U(o,{customParameters:l,apiKey:i}),S=N(a.layers,u.layers,t),I=N(a.tables,u.tables,t);a.layers=S.itemResources,a.tables=I.itemResources;const x=[...S.added,...I.added],K=p?[...p.layers,...p.tables]:[];return await V(a,x,o,K),a}function N(a,e,t){const r=R(a,e,(o,l)=>o.id===l.id);a=a.filter(o=>!r.removed.some(l=>l.id===o.id));const s=r.added.map(({id:o})=>({id:o}));return s.forEach(({id:o})=>{a.push({id:o})}),{itemResources:a,added:s.filter(({id:o})=>!t.includes(o))}}async function V(a,e,t,r){const s=e.map(({id:o})=>new B({url:t,layerId:o,sourceJSON:r.find(({id:l})=>l===o)}));await D(s.map(o=>o.load())),s.forEach(o=>{const{layerId:l,loaded:i,defaultPopupTemplate:u}=o;!i||z(u)||E(o,{id:l,popupInfo:u.toJSON()},a)})}function E(a,e,t){a.isTable?O(t.tables,e):O(t.layers,e)}function O(a,e){const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function W(a){const{portalItem:e}=a;return C(a)&&!a.dynamicDataSource&&!!(e!=null&&e.loaded)&&e.type===y}async function X(a){if(!(a!=null&&a.length))throw new n("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(a.map(r=>r.load()));for(const r of a)if(!W(r))throw new n("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${c(r,"does not conform")}`,{layer:r});const e=a.map(r=>r.portalItem.id);if(new Set(e).size>1)throw new n("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new n("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function Z(a,e){var o,l;var t,r;let s=M.from(e);return s.id&&(s=s.clone(),s.id=null),(o=(t=s).type)!=null||(t.type=y),(l=(r=s).portal)!=null||(r.portal=_.getDefault()),A(a,s),s}async function aa(a,e){const{url:t,layerId:r,title:s,fullExtent:o,isTable:l}=a,i=q(t),u=$(i)&&i.serverType==="FeatureServer";e.url=u?t:`${t}/${r}`,e.title||(e.title=s),e.extent=null,!l&&$(o)&&(e.extent=await Y(o)),g(e,d.METADATA),g(e,d.MULTI_LAYER),f(e,d.SINGLE_LAYER),l&&f(e,d.TABLE),h(e)}async function ea(a,e,t){const r=a.portal;await r._signIn(),await r.user.addItem({item:a,data:e,folder:t==null?void 0:t.folder})}const ua=m(ta);async function ta(a,e){await J(a),k(a);const t=a.portalItem,r=v(t),s=await b(a,r,e),o=await T(t,[{layer:a,layerJSON:s}]);return h(t),await t.update({data:o}),w(r),t}const da=m(async(a,e)=>{await X(a);const t=a[0].portalItem,r=v(t),s=await Promise.all(a.map(l=>b(l,r,e))),o=await T(t,a.map((l,i)=>({layer:l,layerJSON:s[i]})));return h(t),await t.update({data:o}),await Promise.all(a.slice(1).map(l=>l.portalItem.reload())),w(r),t.clone()}),ca=m(ra);async function ra(a,e,t){await J(a);const r=Z(a,e),s=v(r),o=P({layer:a,layerJSON:await b(a,s,t)});return await aa(a,r),await ea(r,o,t),a.portalItem=r,w(s),r}export{ua as save,da as saveAll,ca as saveAs};
