import{t as d,me as f,iF as j,m0 as s,e as t,d as o,aO as y,fn as a,dm as p,n as c,y as v,kV as h}from"./index.d90d4844.js";function I(e,r){return u(e)===u(r)}function u(e){if(d(e))return null;const r=e.layer!=null?e.layer.id:"";let l=null;return l=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,l==null?null:`o-${r}-${l}`}const b={json:{write:{writer:$,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:g}}}};function $(e,r){var l;d(e)||((l=e.layer)==null?void 0:l.objectIdField)==null||e.attributes==null||(r.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function g(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let i=class extends f(j(v)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return s(this.position,e.position)&&s(this.elevationInfo,e.elevationInfo)&&I(this.feature,e.feature)}};t([o({type:y}),a()],i.prototype,"position",void 0),t([o({type:p}),a()],i.prototype,"elevationInfo",void 0),t([o(b)],i.prototype,"feature",void 0),i=t([c("esri.analysis.LineOfSightAnalysisObserver")],i);const F=i;let n=class extends f(h){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return s(this.position,e.position)&&s(this.elevationInfo,e.elevationInfo)&&I(this.feature,e.feature)}};t([o({type:y}),a()],n.prototype,"position",void 0),t([o({type:p}),a()],n.prototype,"elevationInfo",void 0),t([o(b)],n.prototype,"feature",void 0),n=t([c("esri.analysis.LineOfSightAnalysisTarget")],n);const O=n;export{O as f,u as l,F as u};