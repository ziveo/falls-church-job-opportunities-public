import{e as u,d as p,gl as L,n as z,aX as I,az as T,t as v,g as j,aJ as O,iT as P,iU as N}from"./index.d90d4844.js";import{n as G}from"./LayerView3D.991b8b75.js";import{c as V}from"./TiledLayerView3D.fa5e0184.js";import{T as F,F as A}from"./rasterProjectionHelper.c4fee2f8.js";import{s as D}from"./popupUtils.58a7d584.js";import{u as M}from"./LayerView.2ae763a3.js";import{i as k}from"./RefreshableLayerView.6bdc41d3.js";import{a as J}from"./drapedUtils.979ab5a7.js";const W=a=>{let t=class extends a{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return this.projectFullExtent(this.view.spatialReference)}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}get datumTransformation(){return F(I(this.layer.fullExtent),this.view.spatialReference,!0)}supportsSpatialReference(e){return!!this.projectFullExtent(e)}projectFullExtent(e){const i=I(this.layer.fullExtent),r=F(i,e,!1);return A(i,e,r)}async fetchPopupFeatures(e,i){var x,R;const{layer:r}=this;if(!e)throw new T("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:n}=r,s=D(r,i);if(!n||v(s))throw new T("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:s});const l=[],{value:o,magdirValue:m}=await r.identify(e,{timeExtent:this.timeExtent});let b="";if(o&&o.length){b=r.type==="imagery-tile"&&r.hasStandardTime()&&o[0]!=null?o.map(g=>r.getStandardTimeValue(g)).join(", "):o.join(", ");const f={ObjectId:0},_="Raster.ServicePixelValue";f[_]=this._formatAttributeValue(b,_);const w=(R=(x=r.rasterInfo)==null?void 0:x.attributeTable)==null?void 0:R.features;if(w&&w.length>0){const g=w.filter(h=>{const c=h.attributes.value||h.attributes.Value||h.attributes.VALUE;return String(c)===b});if(g.length>0){const h=g[0];if(h){for(const c in h.attributes)if(h.attributes.hasOwnProperty(c)){const E=this._rasterFieldPrefix+c;f[E]=this._formatAttributeValue(h.attributes[c],E)}}}}const S=r.rasterInfo.dataType;S!=="vector-magdir"&&S!=="vector-uv"||(f["Raster.Magnitude"]=m==null?void 0:m[0],f["Raster.Direction"]=m==null?void 0:m[1]);const y=new j(this.fullExtent.clone(),null,f);y.layer=r,y.sourceLayer=y.layer,l.push(y)}return l}_formatAttributeValue(e,i){if(typeof e=="string"){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,n=this._getFieldInfo(r,i),s=n&&n.format;if(s){let l,o;return e.trim().includes(",")?(l=",",o=l+" ",this._formatDelimitedString(e,l,o,s)):e.trim().includes(" ")?(l=o=" ",this._formatDelimitedString(e,l,o,s)):this._formatNumberFromString(e,s)}}return e}_getFieldInfo(e,i){if(!e||!e.length||!i)return;const r=i.toLowerCase();let n;return e.some(s=>!(!s.fieldName||s.fieldName.toLowerCase()!==r&&s.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(n=s,!0)),n}_formatDelimitedString(e,i,r,n){return e&&i&&r&&n?e.trim().split(i).map(s=>this._formatNumberFromString(s,n)).join(r):e}_formatNumberFromString(e,i){if(!e||!i)return e;const r=Number(e);return isNaN(r)?e:i.format(r)}};return u([p()],t.prototype,"layer",void 0),u([p(L)],t.prototype,"timeExtent",void 0),u([p()],t.prototype,"view",void 0),u([p()],t.prototype,"fullExtent",null),u([p()],t.prototype,"tileInfo",void 0),u([p({readOnly:!0})],t.prototype,"hasTilingEffects",null),t=u([z("esri.views.layers.ImageryTileLayerView")],t),t};let d=class extends W(k(V(G(M)))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),this.fullExtent==null&&this.addResolvingPromise(Promise.reject(new T("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const a=O(()=>{var t,e;return(e=(t=this.view)==null?void 0:t.basemapTerrain)==null?void 0:e.tilingSchemeLocked}).then(()=>{const t=this.view.basemapTerrain.tilingScheme,{tileInfo:e}=this.layer,i=["png","png24","png32","jpg","mixed"].includes(e.format)&&t.compatibleWith(e);this.isAlignedMapTile=i;const r=i?e:t.toTileInfo();this.tileInfo=r,this.updatingHandles.add(()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition],()=>this.refresh())});this.addResolvingPromise(a)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const a=document.createElement("canvas"),t=a.getContext("2d"),[e,i]=this.tileInfo.size;return a.width=e,a.height=i,t.clearRect(0,0,e,i),t.getImageData(0,0,e,i)}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get dataLevelRange(){const a=this.tileInfo.lods,t=this.layer.tileInfo.lods,e=a[0].scale,i=t[t.length-1].scale;return this.levelRangeFromScaleRange(e,i)}_getfullExtent(){return this.projectFullExtent(this.view.basemapTerrain&&this.view.basemapTerrain.spatialReference!==null?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(a,t,e,i){const r=this.tileInfo,n=this._canSymbolizeInWebGL(),s={tileInfo:r,requestRawData:n,signal:I(i.signal),requestAsImageElement:this.isAlignedMapTile},l=await this.layer.fetchTile(a,t,e,s);if(l instanceof HTMLImageElement)return l;let o=l&&l.pixelBlock;if(v(o))return this._blankTile;if(!n&&(o=await this.layer.applyRenderer(l),v(o)))return this._blankTile;const m=new P([a,t,e],o,r.size[0],r.size[1]);return n?(m.symbolizerRenderer=this.layer.symbolizer.rendererJSON,m.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(a)),m.transformGrid=l.transformGrid):m.isRendereredSource=!0,m.interpolation=this.layer.interpolation,m.bandIds=this.layer.bandIds,m}_getSymbolizerOptions(a){const t=this.tileInfo.lodAt(a).resolution;return{pixelBlock:null,isGCS:this.view.basemapTerrain?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:t,y:t},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(a){this._canSymbolizeInWebGL()&&JSON.stringify(a.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(a.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(a.lij[0])))}createFetchPopupFeaturesQueryGeometry(a,t){return J(a,t,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){return N("3d").supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL}};u([p({readOnly:!0})],d.prototype,"_blankTile",null),u([p({readOnly:!0})],d.prototype,"imageFormatIsOpaque",null),u([p({readOnly:!0})],d.prototype,"hasMixedImageFormats",null),u([p({readOnly:!0})],d.prototype,"dataLevelRange",null),d=u([z("esri.views.3d.layers.ImageryTileLayerView3D")],d);const K=d;export{K as default};
