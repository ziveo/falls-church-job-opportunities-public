import{eR as C,r as S,t as A,c$ as O,d0 as P,e as a,n as L,d as l,a6 as j,iH as G,y as k,iI as z,ab as v,go as B,gq as K,i as J,bG as H,aW as Q,aJ as q,bl as W,iJ as X,ev as Y}from"./index.d90d4844.js";import{n as M}from"./attributeUtils.72e006d3.js";import{u as Z}from"./LayerView.2ae763a3.js";const ee={setAttribute(){},rollback(){},commit(){}};var b;function pe(t,r){const e=r.attributes[t.objectIdField],n=t.sessions.get(e);if(n)return n;const i=C(r.attributes),s=new Set;if(e==null)return ee;const o=t.attributeOverrides.createInteractiveEditSession(e),c=new Map,E=(u,f)=>{const p=c.get(u);if(p==null){const g=f.indexOf(e);return c.set(u,g),g}return p};let d=b.EDITING;const y={setAttribute(u,f){if(d!==b.EDITING)return;const p=t.fieldsIndex.get(u);if(A(p))return;const g=t.attributeStorageInfo.findIndex(w=>w.name===p.name);if(g<0)return;o.set(g,f);const F=t.attributeStorageInfo[g];let _=!1;s.add(u),t.forEachNode((w,N)=>{const $=E(w,N);if($===-1)return;const x=t.getAttributeData(w.index);if(x){const D=x[F.name];D&&(D[$]=f,t.setAttributeData(w.index,x,r),_=!0)}}),_&&t.clearMemCache()},rollback(){if(d===b.EDITING){for(const u of s)this.setAttribute(u,i[u]);o.rollback(),d=b.ROLLED_BACK,t.sessions.delete(e)}},commit(){d===b.EDITING&&(o.commit(),d=b.COMMITTED,t.sessions.delete(e))}};return t.sessions.set(e,y),y}function ge(t,r){const e=te(t,r);if(e.size===0)return;const n=new Map;for(let s=0;s<t.attributeStorageInfo.length;s++)n.set(t.attributeStorageInfo[s].name,s);let i=!1;e.forEach((s,o)=>{const c=t.getAttributeData(o);let E=!1;s.forEach((d,y)=>{const u=S(c)?c[y]:null,f=n.get(y);for(const{featureIndex:p,value:g,featureId:F}of d)u&&(u[p]=g,E=!0,i=!0),t.attributeOverrides.updateValue(F,f,g)}),E&&t.setAttributeData(o,c,null)}),i&&t.clearMemCache()}function te(t,r){const e=r.edits.updateFeatures;if(!e||e.length===0)return new R;const n=ie(r),i=new R,s=new Map;for(let d=0;d<t.attributeStorageInfo.length;d++)s.set(t.attributeStorageInfo[d].name,d);const o=t.fieldsIndex,c=t.objectIdField,E=e.filter(d=>{const y=M(o,d.attributes,c);return n.has(y)});return t.forEachNode((d,y)=>{const u=new Set(y);for(const f of E){const p=M(o,f.attributes,c);if(!u.has(p))continue;const g=y.indexOf(p);for(const F in f.attributes){const _=t.fieldsIndex.normalizeFieldName(F),w=re(i,d.index,_),N=f.attributes[F];w.push({featureIndex:g,featureId:p,value:N})}}}),i}function re(t,r,e){const n=ne(t,r),i=n.get(e);if(i)return i;const s=new Array;return n.set(e,s),s}function ne(t,r){const e=t.get(r);if(e)return e;const n=new se;return t.set(r,n),n}function ie(t){const r=new Set;if(!t.updatedFeatures)return r;for(const e of t.updatedFeatures)e.objectId!=null&&e.error==null&&r.add(e.objectId);return r}(function(t){t[t.EDITING=0]="EDITING",t[t.ROLLED_BACK=1]="ROLLED_BACK",t[t.COMMITTED=2]="COMMITTED"})(b||(b={}));const se=Map,R=Map;function ye(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:t,layer:{fieldsIndex:r},requiredFields:e}=this;return t.outFields?O(r,[...P(r,t.outFields),...e]):O(r,e)}}}}const V=t=>{let r=class extends t{constructor(){super(...arguments),this._numUpdating=0,this.asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(e,n){return ae(i=>this._updateAsync(e,i),n)}async _updateAsync(e,n){if(!this._startAsyncUpdate(e)){try{const i=await n();this._set(e,i)}catch{j.getLogger(this.declaredClass).warn(`Async update of "${String(e)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(e)&&this._updateAsync(e,n)}}_startAsyncUpdate(e){var i;const n=(i=this.asyncUpdateState.get(e))!=null?i:h.None;return n&h.Updating?(this.asyncUpdateState.set(e,n|h.Invalidated),!0):(++this._numUpdating,this.asyncUpdateState.set(e,n|h.Updating),!1)}_endAsyncUpdate(e){var i;--this._numUpdating;const n=((i=this.asyncUpdateState.get(e))!=null?i:h.None)&~h.Updating;return n&h.Invalidated?(this.asyncUpdateState.set(e,n&~h.Invalidated),!0):(this.asyncUpdateState.set(e,n),!1)}};return a([l({readOnly:!0})],r.prototype,"updating",null),a([l()],r.prototype,"_numUpdating",void 0),r=a([L("esri.core.AsyncUpdate")],r),r};var h;function ae(t,r){const e=()=>{s&&!o&&t(n)},n=()=>{if(!s||o)return r();s.clear(),o=!0;const c=z(s,r);return o=!1,c},i=()=>{s&&(s.destroy(),s=null)};let s=new G(e),o=!1;return t(n),{remove:i}}(function(t){t[t.None=0]="None",t[t.Updating=1]="Updating",t[t.Invalidated=2]="Invalidated"})(h||(h={}));let T=class extends V(k){};T=a([L("esri.core.AsyncUpdate")],T);const oe=j.getLogger("esri.views.3d.layers.support.SceneLayerViewRequiredFields");let I=class extends V(J){constructor(t){super(t)}get requiredFields(){const{layerView:{layer:{fieldsIndex:t},definitionExpressionFields:r},rendererFields:e,labelingFields:n,viewFilterFields:i}=this;return O(t,[...v(r,[]),...v(e,[]),...v(n,[]),...v(i,[])])}initialize(){const t=this.layerView.layer;this.layer=t,this.handles.add([this.autoUpdateAsync("rendererFields",()=>{const{fieldsIndex:r,renderer:e}=this.layer;return e?U(n=>e.collectRequiredFields(n,r)):null}),this.autoUpdateAsync("labelingFields",()=>{const{layer:r}=this;return r.labelsVisible?U(e=>B(e,r)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:r,filter:e}=this.layerView;return U(n=>K(n,r,e))})])}};async function U(t){const r=new Set;try{return await t(r),Array.from(r).sort()}catch(e){return oe.error(e),null}}a([l()],I.prototype,"layerView",void 0),a([l()],I.prototype,"layer",void 0),a([l()],I.prototype,"requiredFields",null),a([l()],I.prototype,"rendererFields",void 0),a([l()],I.prototype,"labelingFields",void 0),a([l()],I.prototype,"viewFilterFields",void 0),I=a([L("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],I);const le=j.getLogger("esri.views.layers.SceneLayerView");class m extends Z{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(r){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){const r=this.layer.filter;if(A(r)||r.geometries.length<1)return null;const e=this._geometryEngine;if(A(e)||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return null;try{let n=e.simplify(r.geometries.getItemAt(0));const i=n.spatialReference;for(let s=1;s<r.geometries.length;s++){let o=e.simplify(r.geometries.getItemAt(s));o.spatialReference.equals(i)||(o=H(o,i)),n=e.union(n,o)}return{spatialRelationship:r.spatialRelationship,geometry:n}}catch{return le.warnOncePerTick("Failed to merge scene filter geometries. Layer mask will be ignored."),null}}get _filterNeedsProjectionEngine(){const r=this.layer.filter;if(A(r)||r.geometries.length<=1)return!1;const e=r.geometries.getItemAt(0).spatialReference;return r.geometries.some(({spatialReference:n})=>!n.equals(e)&&!Q(n,e))}get layerFilterUpdating(){return S(this.layer.filter)&&this.layer.filter.geometries.length&&(!this._geometryEngine||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)}initialize(){q(()=>!this._geometryEngine&&S(this.layer.filter)&&this.layer.filter.geometries.length).then(async()=>this._geometryEngine=await W(()=>import("./geometryEngine.7daf51bb.js"),["geometryEngine.7daf51bb.js","geometryEngineBase.0f0d7ecf.js","hydrated.e7f04c19.js","index.d90d4844.js","index.ae341a5f.css"],import.meta.url)),this._projectionEngineLoaded=X(),q(()=>!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine).then(async()=>{await Y(),this._projectionEngineLoaded=!0})}highlight(r){throw new Error("Not implemented")}queryFeatures(r,e){throw new Error("Not implemented")}queryObjectIds(r,e){throw new Error("Not implemented")}queryFeatureCount(r,e){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(r,e){throw new Error("Not implemented")}}a([l()],m.prototype,"layer",void 0),a([l()],m.prototype,"availableFields",null),a([l()],m.prototype,"maximumNumberOfFeatures",null),a([l({readOnly:!0})],m.prototype,"maximumNumberOfFeaturesExceeded",null),a([l()],m.prototype,"filter",void 0),a([l({readOnly:!0})],m.prototype,"layerFilter",null),a([l()],m.prototype,"_geometryEngine",void 0),a([l()],m.prototype,"_projectionEngineLoaded",void 0),a([l()],m.prototype,"_filterNeedsProjectionEngine",null),a([l()],m.prototype,"layerFilterUpdating",null);export{ge as a,ye as b,I as c,m as g,pe as i};
