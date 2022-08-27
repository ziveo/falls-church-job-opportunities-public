import{e as t,d as s,n,fp as u,eR as p,F as x,dr as X,r3 as Q,r4 as Y,a6 as H,dc as Z,bV as ee,r as z,bt as te,r5 as re,mH as se,mI as ie,mJ as oe,r1 as le,mK as ne,r6 as ae,iD as pe,az as P,r7 as ye,bM as ue,r8 as de,r9 as q,ra as ce,d8 as K,rb as he,da as ve,rc as fe,B as ge,bE as me}from"./index.d90d4844.js";import{E as V}from"./BuildingComponentSublayer.0d11bf8b.js";import{d}from"./BuildingGroupSublayer.a67500b2.js";let m=class extends u{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],m.prototype,"type",void 0),m=t([n("esri.layers.support.BuildingFilterAuthoringInfo")],m);const D=m;var I;let h=I=class extends u{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new I({filterType:this.filterType,filterValues:p(this.filterValues)})}};t([s({type:String,json:{write:!0}})],h.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],h.prototype,"filterValues",void 0),h=I=t([n("esri.layers.support.BuildingFilterAuthoringInfoType")],h);const be=h;var F;const Se=x.ofType(be);let b=F=class extends u{clone(){return new F({filterTypes:p(this.filterTypes)})}};t([s({type:Se,json:{write:!0}})],b.prototype,"filterTypes",void 0),b=F=t([n("esri.layers.support.BuildingFilterAuthoringInfoBlock")],b);const we=b;var T;const $e=x.ofType(we);let v=T=class extends D{constructor(){super(...arguments),this.type="checkbox"}clone(){return new T({filterBlocks:p(this.filterBlocks)})}};t([s({type:["checkbox"]})],v.prototype,"type",void 0),t([s({type:$e,json:{write:!0}})],v.prototype,"filterBlocks",void 0),v=T=t([n("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],v);const J=v;let S=class extends u{};t([s({readOnly:!0,json:{read:!1}})],S.prototype,"type",void 0),S=t([n("esri.layers.support.BuildingFilterMode")],S);const O=S;var A;let w=A=class extends O{constructor(){super(...arguments),this.type="solid"}clone(){return new A}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],w.prototype,"type",void 0),w=A=t([n("esri.layers.support.BuildingFilterModeSolid")],w);const E=w;var k;let f=k=class extends O{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new k({edges:p(this.edges)})}};t([X({wireFrame:"wire-frame"})],f.prototype,"type",void 0),t([s(Q)],f.prototype,"edges",void 0),f=k=t([n("esri.layers.support.BuildingFilterModeWireFrame")],f);const U=f;var _;let $=_=class extends O{constructor(){super(...arguments),this.type="x-ray"}clone(){return new _}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],$.prototype,"type",void 0),$=_=t([n("esri.layers.support.BuildingFilterModeXRay")],$);const C=$;var L;const xe={nonNullable:!0,types:{key:"type",base:O,typeMap:{solid:E,"wire-frame":U,"x-ray":C}},json:{read:e=>{switch(e&&e.type){case"solid":return E.fromJSON(e);case"wireFrame":return U.fromJSON(e);case"x-ray":return C.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let c=L=class extends u{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new E,this.title=""}clone(){return new L({filterExpression:this.filterExpression,filterMode:p(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"filterExpression",void 0),t([s(xe)],c.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"title",void 0),c=L=t([n("esri.layers.support.BuildingFilterBlock")],c);const Oe=c;var R;const Be=x.ofType(Oe);let y=R=class extends u{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Y(),this.name=null}clone(){return new R({description:this.description,filterBlocks:p(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:p(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],y.prototype,"description",void 0),t([s({type:Be,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:D,typeMap:{checkbox:J}},json:{read:e=>(e&&e.type)==="checkbox"?J.fromJSON(e):null,write:!0}})],y.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"name",void 0),y=R=t([n("esri.layers.support.BuildingFilter")],y);const je=y,Ie=H.getLogger("esri.layers.support.BuildingSummaryStatistics");let a=class extends u{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],a.prototype,"fieldName",void 0),t([s({type:String})],a.prototype,"modelName",void 0),t([s({type:String})],a.prototype,"label",void 0),t([s({type:Number})],a.prototype,"min",void 0),t([s({type:Number})],a.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],a.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],a.prototype,"subLayerIds",void 0),a=t([n("esri.layers.support.BuildingFieldStatistics")],a);let g=class extends Z.LoadableMixin(ee(u)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(Ie.error("building summary statistics are not loaded"),null)}load(e){const r=z(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await te(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],g.prototype,"url",void 0),t([s({readOnly:!0,type:[a],json:{read:{source:"summary"}}})],g.prototype,"fields",null),g=t([n("esri.layers.support.BuildingSummaryStatistics")],g);const G=g,j=H.getLogger("esri.layers.BuildingSceneLayer"),W=x.ofType(je),M=p(d.sublayersProperty);M.json.origins["web-scene"]={type:[V],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},M.json.origins["portal-item"]={type:[V],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let o=class extends re(se(ie(oe(le(ne(ae(ge))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new pe({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new W,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const l=d.readSublayers(e,r,i);return d.forEachSublayer(l,B=>B.layer=this),this.sublayerOverrides&&(this.applySublayerOverrides(l,this.sublayerOverrides),this.sublayerOverrides=null),l}applySublayerOverrides(e,{overrides:r,context:i}){d.forEachSublayer(e,l=>l.read(r.get(l.id),i))}readSublayerOverrides(e,r){const i=new Map;for(const l of e)l!=null&&typeof l=="object"&&typeof l.id=="number"?i.set(l.id,l):r.messages.push(new P("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:l}));return{overrides:i,context:r}}writeSublayerOverrides(e,r,i){const l=[];d.forEachSublayer(this.sublayers,B=>{const N=B.write({},i);Object.keys(N).length>1&&l.push(N)}),l.length>0&&(r.sublayers=l)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(i=>{r.sublayers.push(p(i))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this.sublayerOverrides=i}}readSummaryStatistics(e,r){if(typeof r.statisticsHRef=="string"){const i=ye(this.parsedUrl.path,r.statisticsHRef);return new G({url:i})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=z(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ue).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return de(this,e=>{d.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(q.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(q.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new P("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&j.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&j.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new ce(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(i){j.warn("Associated feature service item could not be loaded",i)}}};t([s({type:["BuildingSceneLayer"]})],o.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],o.prototype,"allSublayers",void 0),t([s(M)],o.prototype,"sublayers",void 0),t([K("service","sublayers")],o.prototype,"readSublayers",null),t([s({type:W,nonNullable:!0,json:{write:!0}})],o.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],o.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:G})],o.prototype,"summaryStatistics",void 0),t([K("summaryStatistics",["statisticsHRef"])],o.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],o.prototype,"outFields",void 0),t([s(he)],o.prototype,"fullExtent",void 0),t([s({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),t([s(ve(me))],o.prototype,"spatialReference",void 0),t([s(fe)],o.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([s()],o.prototype,"associatedFeatureServiceItem",void 0),o=t([n("esri.layers.BuildingSceneLayer")],o);const Ee=o;export{Ee as default};
