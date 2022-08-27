import{bV as b,r as d,H as O,e as h,d as l,n as P,x as R,dI as w,kb as M,t as c,aA as E,p as G,kc as x,jQ as V,jc as j,aK as f,ii as v,kd as D,dF as k,ah as u,jR as y,eZ as g,ke as F,kf as H,kg as $,kh as W,ki as I}from"./index.d90d4844.js";const B=m=>{let e=class extends b(m){constructor(){super(...arguments),this.parent=null,this._userInteractive=!1,this._interactiveViewModelCount=0}get interactive(){return this._interactiveViewModelCount>0||this._userInteractive}set interactive(s){this._userInteractive=s}get updating(){return!1}get visible(){return!d(this.parent)||this.parent.visible&&!this.parent.suspended}set visible(s){s!==void 0?this._override("visible",s):this._clearOverride("visible")}forceInteractiveForViewModel(){return this._interactiveViewModelCount++,O(()=>this._interactiveViewModelCount--)}};return h([l({readOnly:!0})],e.prototype,"type",void 0),h([l({constructOnly:!0})],e.prototype,"analysis",void 0),h([l({constructOnly:!0})],e.prototype,"parent",void 0),h([l({constructOnly:!0})],e.prototype,"view",void 0),h([l({type:Boolean})],e.prototype,"interactive",null),h([l()],e.prototype,"_userInteractive",void 0),h([l({readOnly:!0})],e.prototype,"updating",null),h([l()],e.prototype,"visible",null),h([l()],e.prototype,"_interactiveViewModelCount",void 0),e=h([P("esri.views.3d.analysis.AnalysisView3D")],e),e};class S{constructor(e){this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=e,this._handle=R(()=>this.view.ready,s=>{this._resourcesCreated&&(s?this._createResources():this._destroyResources())})}applyProps(e){let s=!1;for(const t in e)t in this?t==="attached"?s=e[t]:this[t]=e[t]:console.error("Cannot set unknown property",t);this.attached=s}destroy(){this.attached=!1,this._handle.remove()}get attached(){return this._attached}set attached(e){e!==this._attached&&this.view._stage&&(this._attached=e,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources())}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.attached&&this.updateVisibility(e))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.visible||this.updateVisibility(!1)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}}class A extends S{constructor(e){super(e.view),this._resources=null,this._transform=w()}get object(){return d(this._resources)?this._resources.object:null}get transform(){return this._transform}set transform(e){M(this._transform,e),d(this._resources)&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(c(this._resources))return;const e=this._resources.object,s=this.view._stage;s.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),this.visible||e.setVisible(this.visible),s.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const s=new E({isPickable:!1,updatePolicy:G.SYNC});e.add(s);const t=new x({castShadow:!1});t.transformation=this._transform,this.createExternalResources(),this.createGeometries(t),e.addMany(t.geometries),this.forEachExternalMaterial(r=>e.add(r)),e.add(t),s.add(t),this.visible||t.setVisible(!1),this._resources={layer:s,object:t}}destroyResources(){const e=this.view._stage;!c(this._resources)&&e&&(e.remove(this._resources.object),e.remove(this._resources.layer),this.forEachExternalMaterial(s=>{e.remove(s),s.dispose()}),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){c(this._resources)||this._resources.object.setVisible(e)}}class K extends A{constructor(e){super(e),this._renderOccluded=V.OccludeAndTransparent,this._width=1,this._color=j(1,0,1,1),this._innerWidth=1,this._innerColor=null,this._stipplePattern=null,this._stippleOffColor=null,this._stipplePreferContinuous=!0,this._writeDepthEnabled=!0,this._falloff=0,this._polygonOffset=!1,this.applyProps(e)}setGeometryFromRenderSpacePoint(e,s=1e3){const t=[];t.push([[e[0]-s,e[1]+0,e[2]+0],[e[0]+s,e[1]+0,e[2]+0]]),t.push([[e[0]-0,e[1]-s,e[2]+0],[e[0]+0,e[1]+s,e[2]+0]]),t.push([[e[0]-0,e[1]+0,e[2]-s],[e[0]+0,e[1]+0,e[2]+s]]),this.geometry=t}setGeometryFromExtent(e){const s=this.view.spatialReference,t=u(),r=u(),o=100,i=[];f(t,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),f(t,e[2],e[1],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),f(t,e[2],e[3],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),f(t,e[0],e[3],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),f(t,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),f(t,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(t,s,r),i.push([r[0],r[1],r[2]]),this.geometry=[i]}setGeometryFromFrustum(e){const s=[];e.lines.forEach(t=>{s.push([t.origin[0],t.origin[1],t.origin[2]]),s.push([t.endpoint[0],t.endpoint[1],t.endpoint[2]])}),this.geometry=[s]}setGeometryFromBoundedPlane(e){const s=[],t=e.origin,r=e.basis1,o=e.basis2,i=.5,n=u(),a=u(),p=u(),_=u();n[0]=t[0]-r[0]*i-o[0]*i,n[1]=t[1]-r[1]*i-o[1]*i,n[2]=t[2]-r[2]*i-o[2]*i,a[0]=t[0]-r[0]*i+o[0]*i,a[1]=t[1]-r[1]*i+o[1]*i,a[2]=t[2]-r[2]*i+o[2]*i,p[0]=t[0]+r[0]*i+o[0]*i,p[1]=t[1]+r[1]*i+o[1]*i,p[2]=t[2]+r[2]*i+o[2]*i,_[0]=t[0]+r[0]*i-o[0]*i,_[1]=t[1]+r[1]*i-o[1]*i,_[2]=t[2]+r[2]*i-o[2]*i,s.push([n[0],n[1],n[2]]),s.push([a[0],a[1],a[2]]),s.push([p[0],p[1],p[2]]),s.push([_[0],_[1],_[2]]),s.push([n[0],n[1],n[2]]),this.geometry=[s]}setGeometryFromSegment(e){const s=e.endRenderSpace;this.transform=v(C,s);const{points:t}=e.createRenderGeometry(s,this.view.renderCoordsHelper);this.geometry=[t]}setGeometryFromSegments(e,s=D){this.transform=v(C,s),this.geometry=e.map(t=>t.createRenderGeometry(s,this.view.renderCoordsHelper).points)}getTransformedGeometry(){return c(this._geometry)?null:this._geometry.map(e=>e.map(s=>k(u(),s,this.transform)))}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){y(e,this._color)||(g(this._color,e),this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){d(e)?!c(this._innerColor)&&y(e,this._innerColor)||(this._innerColor=g(F(),e),this._updateMaterial()):d(this._innerColor)&&(this._innerColor=null,this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const s=d(e)!==d(this._stipplePattern);this._stipplePattern=e,s?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){(c(e)||c(this._stippleOffColor)||!y(e,this._stippleOffColor))&&(this._stippleOffColor=d(e)?H(e):null,this._updateMaterial())}get stipplePreferContinuous(){return this._stipplePreferContinuous}set stipplePreferContinuous(e){this._stipplePreferContinuous!==e&&(this._stipplePreferContinuous=e,this._updateMaterial())}get writeDepthEnabled(){return this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled!==e&&(this._writeDepthEnabled=e,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){e!==this._polygonOffset&&(this._polygonOffset=e,this._updateMaterial())}createExternalResources(){this._material=new $(this.materialParameters)}destroyExternalResources(){this._material=null}createGeometries(e){const s=this._createLineGeometries();if(s.length!==0)for(let t=0;t<s.length;++t){const r=W(s[t]);e.addGeometry(r,this._material)}}forEachExternalMaterial(e){e(this._material)}get materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,hasPolygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}}_updateMaterial(){this.attached&&this._material.setParameters(this.materialParameters)}_createLineGeometries(){const e=this.geometry;if(c(e)||e.length===0)return[];const s=[];return e.forEach(t=>{const r=t.length,o=new Float64Array(3*r);t.forEach((n,a)=>{o[3*a+0]=n[0],o[3*a+1]=n[1],o[3*a+2]=n[2]});const i={overlayInfo:null,attributeData:{position:o},removeDuplicateStartEnd:I.KEEP};s.push(i)}),s}}const C=w();export{K as C,B as a,A as n,S as t};
