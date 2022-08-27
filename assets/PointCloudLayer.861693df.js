import{e as r,d as i,n as f,fp as P,d9 as I,dr as b,eR as c,sp as R,iC as q,sq as j,iB as B,iA as E,a6 as N,r5 as _,mH as A,mI as L,mJ as O,r1 as V,mK as K,r6 as D,gg as v,pL as M,r as k,bM as G,dg as U,sr as x,az as l,r7 as z,bt as H,r9 as S,dp as J,dq as Q,d8 as W,rc as X,rn as Y,fo as Z,dt as ee,B as te}from"./index.d90d4844.js";let u=class extends P{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"field",void 0),r([i({readOnly:!0,nonNullable:!0,json:{read:!1}})],u.prototype,"type",void 0),u=r([f("esri.layers.pointCloudFilters.PointCloudFilter")],u);const h=u;var m;let d=m=class extends h{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new m({field:this.field,requiredClearBits:c(this.requiredClearBits),requiredSetBits:c(this.requiredSetBits)})}};r([i({type:[I],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),r([i({type:[I],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),r([b({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=m=r([f("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);const re=d;var g;let y=g=class extends h{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new g({field:this.field,includedReturns:c(this.includedReturns)})}};r([i({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"includedReturns",void 0),r([b({pointCloudReturnFilter:"return"})],y.prototype,"type",void 0),y=g=r([f("esri.layers.pointCloudFilters.PointCloudReturnFilter")],y);const ie=y;var w;let p=w=class extends h{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new w({field:this.field,mode:this.mode,values:c(this.values)})}};r([i({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),r([b({pointCloudValueFilter:"value"})],p.prototype,"type",void 0),r([i({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),p=w=r([f("esri.layers.pointCloudFilters.PointCloudValueFilter")],p);const oe=p,se={key:"type",base:h,typeMap:{value:oe,bitfield:re,return:ie}},$={key:"type",base:R,typeMap:{"point-cloud-class-breaks":q,"point-cloud-rgb":j,"point-cloud-stretch":B,"point-cloud-unique-value":E},errorContext:"renderer"},C=N.getLogger("esri.layers.PointCloudLayer"),T=ee();let o=class extends _(A(L(O(V(K(D(te))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new v;return s.type==="FieldTypeInteger"&&((s=c(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new v({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){M("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=k(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(G).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=U(this,e);return this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=e.fieldInfos.find(a=>a.fieldName===t.name);if(!n)return;const s=new x({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const n=e.fieldInfos.find(a=>a.fieldName===t.name);if(!n)return;const s=new x({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const a=z(this.parsedUrl.path,`./statistics/${s.key}`);return H(a,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(F=>F.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(S.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(S.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&C.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&C.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};r([i({type:["PointCloudLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(J)],o.prototype,"popupEnabled",void 0),r([i({type:Q,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],o.prototype,"opacity",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({types:[se],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],o.prototype,"filters",void 0),r([i({type:[v]})],o.prototype,"fields",void 0),r([i(T.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([W("service","fields",["fields","attributeStorageInfo"])],o.prototype,"readServiceFields",null),r([i(T.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),r([i(X)],o.prototype,"elevationInfo",null),r([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([i(Y)],o.prototype,"legendEnabled",void 0),r([i({types:$,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:$},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],o.prototype,"renderer",void 0),r([Z("renderer")],o.prototype,"writeRenderer",null),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),o=r([f("esri.layers.PointCloudLayer")],o);const ae=o;export{ae as default};