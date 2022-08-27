import{e as o,d as m,gl as E,n as w,az as u,t as d,E as D,aO as c,r as b,c0 as I,au as T}from"./index.d90d4844.js";import{q as z}from"./DynamicLayerView3D.fc1c4428.js";import{s as F}from"./popupUtils.58a7d584.js";import"./LayerView3D.991b8b75.js";import"./projectExtentUtils.96c62d46.js";import"./ImageMaterial.5daf2188.js";import"./LayerView.2ae763a3.js";import"./RefreshableLayerView.6bdc41d3.js";const P=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(a,r){const{layer:n}=this;if(!a)throw new u("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n});const{popupEnabled:i}=n,s=F(n,r);if(!i||d(s))throw new u("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:s});const y=await s.getRequiredFields(),p=new D;p.timeExtent=this.timeExtent,p.geometry=a,p.outFields=y,p.outSpatialReference=a.spatialReference;const l=this.view.resolution,g=this.view.type==="2d"?new c(l,l,this.view.spatialReference):new c(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:x,showNoDataRecords:f}=s.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},R={returnDomainValues:!0,returnTopmostRaster:x,pixelSize:g,showNoDataRecords:f,signal:b(r)?r.signal:null};return n.queryVisibleRasters(p,R).then(v=>v)}canResume(){var a;return!!super.canResume()&&!((a=this.timeExtent)!=null&&a.isEmpty)}};return o([m()],e.prototype,"layer",void 0),o([m()],e.prototype,"suspended",void 0),o([m(E)],e.prototype,"timeExtent",void 0),o([m()],e.prototype,"view",void 0),e=o([w("esri.views.layers.ImageryLayerView")],e),e};let h=class extends P(z){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=I(async t=>{this.redraw((e,a)=>this._redrawImage(e,a),t)},2e3)}initialize(){this.handles.add([T(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this.updatingHandles.addPromise(this.redrawDebounced()))]),this.updatingHandles.add(()=>{var t,e;return(e=(t=this.layer)==null?void 0:t.exportImageServiceParameters)==null?void 0:e.version},()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(()=>this.timeExtent,()=>this.updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){const t=this.view.basemapTerrain.spatialReference,e=this.layer.fullExtent;!e||t.equals(e.spatialReference),this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY}}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(t,e,a){e.imageElement?t.image=e.imageElement:(t.image=document.createElement("canvas"),t.pixelData=e.pixelData,await this._redrawImage(t,a))}async _redrawImage(t,e){if(!(t.image instanceof HTMLCanvasElement)||d(t.pixelData))throw new Error;const a=t.image,r=a.getContext("2d"),n=await this.layer.applyRenderer(t.pixelData,{signal:e}),i=this.layer.applyFilter(n).pixelBlock;if(d(i))throw new Error;a.width=i.width,a.height=i.height;const s=r.createImageData(i.width,i.height);s.data.set(i.getAsRGBA()),r.putImageData(s,0,0)}};h=o([w("esri.views.3d.layers.ImageryLayerView3D")],h);const O=h;export{O as default};