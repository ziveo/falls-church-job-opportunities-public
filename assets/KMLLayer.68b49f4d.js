import{eR as v,or as I,iR as K,ox as N,bt as W,ai as G,dw as k,rV as g,fF as S,b6 as z,bE as F,W as U,me as H,aJ as L,r as w,ak as O,rW as M,F as P,e as l,d as n,jm as V,rX as A,d8 as _,n as j,dc as D,r0 as B,r2 as q,r1 as X,mI as Q,mJ as Y,mK as Z,iD as ee,x as te,U as se,mV as re,bM as le,fo as oe,mO as ie,B as ne}from"./index.d90d4844.js";const ae={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function R(e){const s=e.folders||[],t=s.slice(),r=new Map,i=new Map,p=new Map,b=new Map,m=new Map,f={esriGeometryPoint:i,esriGeometryPolyline:p,esriGeometryPolygon:b};(e.featureCollection&&e.featureCollection.layers||[]).forEach(o=>{const d=v(o);d.featureSet.features=[];const y=o.featureSet.geometryType;r.set(y,d);const E=o.layerDefinition.objectIdField;y==="esriGeometryPoint"?x(i,E,o.featureSet.features):y==="esriGeometryPolyline"?x(p,E,o.featureSet.features):y==="esriGeometryPolygon"&&x(b,E,o.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(o=>{m.set(o.id,o)}),s.forEach(o=>{o.networkLinkIds.forEach(d=>{const y=ye(d,o.id,e.networkLinks);y&&t.push(y)})}),t.forEach(o=>{if(o.featureInfos){o.points=v(r.get("esriGeometryPoint")),o.polylines=v(r.get("esriGeometryPolyline")),o.polygons=v(r.get("esriGeometryPolygon")),o.mapImages=[];for(const d of o.featureInfos)switch(d.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const y=f[d.type].get(d.id);y&&o[ae[d.type]].featureSet.features.push(y);break}case"GroundOverlay":{const y=m.get(d.id);y&&o.mapImages.push(y);break}}o.fullExtent=$([o])}});const h=$(t);return{folders:s,sublayers:t,extent:h}}function C(e,s,t,r){const i=I&&I.findCredential(e);e=K(e,{token:i&&i.token});const p=N.kmlServiceUrl;return W(p,{query:{url:e,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:r})}function T(e,s,t=null,r=[]){const i=[],p={},b=s.sublayers,m=s.folders.map(f=>f.id);return b.forEach(f=>{const h=new e;if(t?h.read(f,t):h.read(f),r.length&&m.includes(h.id)&&(h.visible=r.includes(h.id)),p[f.id]=h,f.parentFolderId!=null&&f.parentFolderId!==-1){const o=p[f.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(h)}else i.unshift(h)}),i}function x(e,s,t){t.forEach(r=>{e.set(r.attributes[s],r)})}function ue(e,s){let t;return s.some(r=>r.id===e&&(t=r,!0)),t}function ye(e,s,t){const r=ue(e,t);return r&&(r.parentFolderId=s,r.networkLink=r),r}function $(e){const s=G(k),t=G(k);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const i of r.polygons.featureSet.features)g(s,i.geometry),S(t,s);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const i of r.polylines.featureSet.features)g(s,i.geometry),S(t,s);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const i of r.points.featureSet.features)g(s,i.geometry),S(t,s);if(r.mapImages)for(const i of r.mapImages)g(s,i.extent),S(t,s)}return z(t,k)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:F.WGS84}}var c;let u=c=class extends U.EventedMixin(H(D)){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){L(()=>this.networkLink).then(()=>L(()=>this.visible===!0)).then(()=>this.load())}load(e){if(!this.networkLink||this.networkLink.viewFormat)return;const s=w(e)?e.signal:null,t=this._fetchService(this._get("networkLink").href,s).then(r=>{const i=$(r.sublayers);this.fullExtent=O.fromJSON(i),this.sourceJSON=r;const p=M(P.ofType(c),T(c,r));this.sublayers?this.sublayers.addMany(p):this.sublayers=p,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(t),Promise.resolve(this)}set sublayers(e){const s=this._get("sublayers");s&&(s.forEach(t=>{t.parent=null,t.layer=null}),this._sublayersHandles.forEach(t=>t.remove()),this._sublayersHandles=null),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this._sublayersHandles=[e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null})]),this._set("sublayers",e)}castSublayers(e){return M(P.ofType(c),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,s){return!!s.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(s=>s.layer=e)}_fetchService(e,s){return C(e,this.layer.outSpatialReference,this.layer.refreshInterval,s).then(t=>R(t.data))}};l([n()],u.prototype,"description",void 0),l([n()],u.prototype,"id",void 0),l([n({readOnly:!0,value:null})],u.prototype,"networkLink",void 0),l([n({json:{write:{allowNull:!0}}})],u.prototype,"parent",void 0),l([n({value:null,json:{write:{allowNull:!0}}})],u.prototype,"sublayers",null),l([V("sublayers")],u.prototype,"castSublayers",null),l([n({value:null,json:{read:{source:"name",reader:e=>A(e)}}})],u.prototype,"title",void 0),l([n({value:!0})],u.prototype,"visible",null),l([_("visible",["visibility"])],u.prototype,"readVisible",null),l([n()],u.prototype,"sourceJSON",void 0),l([n({value:null})],u.prototype,"layer",null),l([n({type:O})],u.prototype,"fullExtent",void 0),u=c=l([j("esri.layers.support.KMLSublayer")],u);const J=u,pe=["kml","xml"];let a=class extends B(q(X(Q(Y(Z(ne)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new ee({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.sublayers}),this.outSpatialReference=F.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.own([te(()=>this.sublayers,(e,s)=>{s&&s.forEach(t=>{t.parent=null,t.layer=null}),e&&e.forEach(t=>{t.parent=this,t.layer=this})},se),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,s){return typeof e=="string"?{url:e,...s}:e}readSublayersFromItemOrWebMap(e,s){this._visibleFolders=s.visibleFolders}readSublayers(e,s,t){return T(J,s,t,this._visibleFolders)}writeSublayers(e,s){const t=[],r=e.toArray();for(;r.length;){const i=r[0];i.networkLink||(i.visible&&t.push(i.id),i.sublayers&&r.push(...i.sublayers.toArray())),r.shift()}s.visibleFolders=t}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?re(this.url,pe)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,s=[],t=r=>{r.visible&&(s.push(r),r.sublayers&&r.sublayers.forEach(t))};return e&&e.forEach(t),s}get fullExtent(){return this._recomputeFullExtent()}load(e){const s=w(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(le).then(()=>this._fetchService(s))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const s=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:C(this.url,this.outSpatialReference,this.refreshInterval,e)),t=R(s.data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;w(this.extent)&&(e=this.extent.clone());const s=t=>{if(t.sublayers)for(const r of t.sublayers.items)s(r),r.visible&&r.fullExtent&&(w(e)?e.union(r.fullExtent):e=r.fullExtent.clone())};return s(this),e}};l([n({readOnly:!0})],a.prototype,"allSublayers",void 0),l([n({type:F})],a.prototype,"outSpatialReference",void 0),l([n({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),l([n({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"legendEnabled",void 0),l([n({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),l([n({type:["KML"]})],a.prototype,"operationalLayerType",void 0),l([n({})],a.prototype,"resourceInfo",void 0),l([n({type:P.ofType(J),json:{write:{ignoreOrigin:!0}}})],a.prototype,"sublayers",void 0),l([_(["web-map","portal-item"],"sublayers",["visibleFolders"])],a.prototype,"readSublayersFromItemOrWebMap",null),l([_("service","sublayers",["sublayers"])],a.prototype,"readSublayers",null),l([oe("sublayers")],a.prototype,"writeSublayers",null),l([n({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),l([n({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],a.prototype,"title",null),l([n(ie)],a.prototype,"url",void 0),l([n({readOnly:!0})],a.prototype,"visibleSublayers",null),l([n({type:O})],a.prototype,"extent",void 0),l([n()],a.prototype,"fullExtent",null),a=l([j("esri.layers.KMLLayer")],a);const he=a;export{he as default};
