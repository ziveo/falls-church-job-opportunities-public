import{e as t,d as i,d8 as r,bE as p,n}from"./index.d90d4844.js";import{r as s,z as c}from"./TilemapCache.35b85054.js";const d=o=>{let e=class extends o{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(a,l){return l.minLOD!=null&&l.maxLOD!=null?a:0}readMaxScale(a,l){return l.minLOD!=null&&l.maxLOD!=null?a:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(a,l){return l.capabilities&&l.capabilities.includes("Tilemap")?new c({layer:this}):null}};return t([i({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),t([i()],e.prototype,"minScale",void 0),t([r("service","minScale")],e.prototype,"readMinScale",null),t([i()],e.prototype,"maxScale",void 0),t([r("service","maxScale")],e.prototype,"readMaxScale",null),t([i({type:p})],e.prototype,"spatialReference",void 0),t([i({readOnly:!0})],e.prototype,"supportsBlankTile",null),t([i(s)],e.prototype,"tileInfo",void 0),t([i()],e.prototype,"tilemapCache",void 0),t([r("service","tilemapCache",["capabilities"])],e.prototype,"readTilemapCache",null),t([i()],e.prototype,"version",void 0),e=t([n("esri.layers.mixins.ArcGISCachedService")],e),e};export{d as s};
