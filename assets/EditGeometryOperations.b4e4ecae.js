import{h9 as v,kj as b,aO as R,kk as _e,jF as K,kl as Ve,km as ue,iP as w,ah as u,kn as Ee,f5 as ge,ko as Te,ae as Z,eB as De,ea as Y,kp as Me,eD as Pe,eZ as we,hM as Ae,bx as Re,r as g,W as fe,bO as $e,v as Ce,kq as N,t as p,aX as ke,a3 as Ze,k3 as x,kr as Ie,ks as X,kt as G,ku as A,kv as Se,kw as ze,kx as U,ky as me,ia as ne,kz as oe,kA as Le,f6 as B,ib as ae,jy as H,jx as z,aM as k,kB as be,kC as L,k4 as Ne,aN as Ge,kD as he,kE as q,kF as ce,kG as j,jI as Ue,kH as Oe,kI as Xe,kJ as de}from"./index.d90d4844.js";var l;(function(r){r[r.Z=0]="Z",r[r.M=1]="M"})(l||(l={}));class Ye{constructor(e){this.spatialReference=e}createVector(){return this._tag(v())}pointToVector(e){return this._tag(b(e.x,e.y))}arrayToVector(e){return this._tag(b(e[0],e[1]))}vectorToArray(e){return[e[0],e[1]]}pointToArray(e){return[e.x,e.y]}vectorToPoint(e,t=new R){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new R){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return _e(s,e,t,i)}addDelta(e,t,i){e[0]+=t,e[1]+=i}distance(e,t){return K(e,t)}getZ(e,t){return t}hasZ(){return!1}getM(e,t){return t}hasM(){return!1}clone(e){return this._tag(Ve(e))}copy(e,t){return ue(t,e)}fromXYZ(e){return this._tag(b(e[0],e[1]))}toXYZ(e,t=0){return w(e[0],e[1],t)}_tag(e){return e}}class le{constructor(e,t){this.valueType=e,this.spatialReference=t}createVector(){return this._tag(u())}pointToVector(e){return this._tag(w(e.x,e.y,this.valueType===l.Z?e.z:e.m))}arrayToVector(e){return this._tag(w(e[0],e[1],e[2]||0))}vectorToArray(e){return[e[0],e[1],e[2]]}pointToArray(e){return this.valueType===l.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e,t=new R){return t.x=e[0],t.y=e[1],t.z=this.valueType===l.Z?e[2]:void 0,t.m=this.valueType===l.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new R){return t.x=e[0],t.y=e[1],t.z=this.valueType===l.Z?e[2]:void 0,t.m=this.valueType===l.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){const i=this.valueType===l.Z,s=this.valueType===l.M;return t.x=e[0],t.y=e[1],t.z=i?e[2]:void 0,t.m=s?e[2]:void 0,t.hasZ=i,t.hasM=s,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return Ee(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,this.valueType===l.Z&&(e[2]+=s)}distance(e,t){return this.valueType===l.Z?ge(e,t):K(e,t)}getZ(e,t){return this.valueType===l.Z?e[2]:t}hasZ(){return this.valueType===l.Z}getM(e,t){return this.valueType===l.M?e[2]:t}hasM(){return this.valueType===l.M}clone(e){return this._tag(Te(e))}copy(e,t){return Z(t,e)}fromXYZ(e,t=0,i=0){return this._tag(w(e[0],e[1],this.valueType===l.Z?e.length>2?e[2]:t:i))}toXYZ(e,t=0){return this._tag(w(e[0],e[1],this.valueType===l.Z?e[2]:t))}_tag(e){return e}}class Be{constructor(e){this.spatialReference=e}createVector(){return this._tag(De())}pointToVector(e){return this._tag(Y(e.x,e.y,e.z,e.m))}arrayToVector(e){return this._tag(Y(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return[e[0],e[1],e[2],e[3]]}pointToArray(e){return[e.x,e.y,e.z,e.m]}vectorToPoint(e,t=new R){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new R){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return Me(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,e[2]+=s}distance(e,t){return ge(e,t)}getZ(e){return e[2]}hasZ(){return!0}getM(e){return e[3]}hasM(){return!0}clone(e){return this._tag(Pe(e))}copy(e,t){return we(t,e)}fromXYZ(e,t=0,i=0){return this._tag(Y(e[0],e[1],e.length>2?e[2]:t,i))}toXYZ(e){return w(e[0],e[1],e[2])}_tag(e){return e}}function He(r,e,t){return r&&e?new Be(t):e?new le(l.M,t):r?new le(l.Z,t):new Ye(t)}function qe(r,e){if(!e.supported)return;let t=1/0,i=-1/0;const s=e.upperBoundX-e.lowerBoundX;r.forEach(o=>{let a=o.pos[0];for(;a<e.lowerBoundX;)a+=s;for(;a>e.upperBoundX;)a-=s;t=Math.min(t,a),i=Math.max(i,a),o.pos[0]=a});const n=i-t;s-n<n&&r.forEach(o=>{o.pos[0]<0&&(o.pos[0]+=s)})}function je(r,e){const t=Ae(r);return e===Re.Global&&t?{supported:!0,lowerBoundX:t.valid[0],upperBoundX:t.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}class I{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}}class M{constructor(e,t,i){this.component=e,this.leftVertex=t,this.rightVertex=i,this.type="edge",t.rightEdge=this,i.leftEdge=this}}class F{constructor(e,t){this.spatialReference=e,this.viewingMode=t,this.vertices=[],this.edges=[]}unnormalizeVertexPositions(){this.vertices.length<=1||qe(this.vertices,je(this.spatialReference,this.viewingMode))}updateVertexIndex(e,t){if(this.vertices.length===0)return;const i=this.vertices[0];let s=null,n=e,o=t;do s=n,s.index=o++,n=s.rightEdge?s.rightEdge.rightVertex:null;while(n!=null&&n!==i);s.leftEdge&&s!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(s),this.vertices.length-1)}getFirstVertex(){return this.vertices.length===0?null:this.vertices[0]}getLastVertex(){return this.vertices.length===0?null:this.vertices[this.vertices.length-1]}isClosed(){return this.vertices.length>2&&this.vertices[0].leftEdge!==null}swapVertices(e,t){const i=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=i}iterateVertices(e){if(this.vertices.length===0)return;const t=this.vertices[0];let i=t;do e(i,i.index),i=g(i.rightEdge)?i.rightEdge.rightVertex:null;while(i!==t&&i!=null)}}class Q extends fe{constructor(e,t){super(),this.type=e,this.coordinateHelper=t,this._geometry=null,this.dirty=!0,this.components=[]}get geometry(){if(this.dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon()}this.dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(e){this.dirty=!0,this.emit("change",e)}_toPoint(){return this.components.length===0||this.components[0].vertices.length===0?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[];let n=i.vertices.find(a=>a.leftEdge==null);const o=n;do s.push(t(n.pos)),n=n.rightEdge?n.rightEdge.rightVertex:null;while(n&&n!==o);e.push(s)}return new $e({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[],n=i.vertices[0];let o=n;const a=o;do s.push(t(o.pos)),o=g(o.rightEdge)?o.rightEdge.rightVertex:null;while(o&&o!==a);i.isClosed()&&s.push(t(n.pos)),e.push(s)}return new Ce({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(e,t){const i=e.spatialReference,s=He(e.hasZ,e.hasM,i),n=new Q(e.type,s);switch(e.type){case"polygon":{const o=e.rings;for(let a=0;a<o.length;++a){const c=o[a],h=new F(i,t),d=c.length>2&&N(c[0],c[c.length-1]),f=d?c.length-1:c.length;for(let m=0;m<f;++m){const C=s.arrayToVector(c[m]),P=new I(h);h.vertices.push(P),P.pos=C,P.index=m}const T=h.vertices.length-1;for(let m=0;m<T;++m){const C=h.vertices[m],P=h.vertices[m+1],ve=new M(h,C,P);h.edges.push(ve)}if(d){const m=new M(h,h.vertices[h.vertices.length-1],h.vertices[0]);h.edges.push(m)}n.components.push(h)}break}case"polyline":for(const o of e.paths){const a=new F(i,t),c=o.length;for(let d=0;d<c;++d){const f=s.arrayToVector(o[d]),T=new I(a);a.vertices.push(T),T.pos=f,T.index=d}const h=a.vertices.length-1;for(let d=0;d<h;++d){const f=a.vertices[d],T=a.vertices[d+1],m=new M(a,f,T);a.edges.push(m)}n.components.push(a)}break;case"point":{const o=new F(i,t),a=new I(o);a.index=0,a.pos=s.pointToVector(e),o.vertices.push(a),n.components.push(o);break}}return n}}var D;(function(r){r[r.NEW_STEP=0]="NEW_STEP",r[r.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS"})(D||(D={}));class Fe{constructor(e,t,i){this.editGeometry=e,this.component=t,this.pos=i,this.addedVertex=null,this.originalEdge=null,this.left=null,this.right=null}apply(){let e="redo";p(this.addedVertex)&&(e="apply",this.addedVertex=new I(this.component));const t=this.component.getLastVertex();if(p(t))this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,this.addedVertex.index=0;else{let i=null;t.rightEdge&&(this.originalEdge=t.rightEdge,i=this.originalEdge.rightVertex,this.component.edges.splice(this.component.edges.indexOf(this.originalEdge),1)),this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,p(this.left)&&(this.left=new M(this.component,t,this.addedVertex)),this.component.edges.push(this.left),t.rightEdge=this.left,g(this.originalEdge)&&g(i)&&(p(this.right)&&(this.right=new M(this.component,this.addedVertex,i)),this.component.edges.push(this.right),i.leftEdge=this.right),this.component.updateVertexIndex(this.addedVertex,t.index+1)}this.editGeometry.notifyChanges({operation:e,addedVertices:[this.addedVertex]})}undo(){if(p(this.addedVertex))return null;this.component.vertices.splice(this.component.vertices.indexOf(this.addedVertex),1),g(this.left)&&(this.component.edges.splice(this.component.edges.indexOf(this.left),1),this.left.leftVertex.rightEdge=null),g(this.right)&&(this.component.edges.splice(this.component.edges.indexOf(this.right),1),this.right.rightVertex.leftEdge=null),g(this.originalEdge)&&(this.component.edges.push(this.originalEdge),this.originalEdge.leftVertex.rightEdge=this.originalEdge,this.originalEdge.rightVertex.leftEdge=this.originalEdge),g(this.left)?this.component.updateVertexIndex(this.left.leftVertex,this.left.leftVertex.index):this.component.updateVertexIndex(this.addedVertex,0),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.addedVertex]})}accumulate(){return!1}}class ee{constructor(e,t,i){this.editGeometry=e,this.vertices=t,this.operation=i,this.undone=!1}apply(){this.vertices.forEach(e=>this.operation.apply(e)),this.editGeometry.components.forEach(e=>e.unnormalizeVertexPositions()),this.editGeometry.notifyChanges({operation:this.undone?"redo":"apply",updatedVertices:this.vertices})}undo(){this.vertices.forEach(e=>this.operation.undo(e)),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:this.vertices}),this.undone=!0}canAccumulate(e){if(this.undone||e.vertices.length!==this.vertices.length)return!1;for(let t=0;t<e.vertices.length;++t)if(e.vertices[t]!==this.vertices[t])return!1;return this.operation.canAccumulate(e.operation)}accumulate(e){return!!(e instanceof ee&&this.canAccumulate(e))&&(this.vertices.forEach(t=>this.operation.accumulate(t,e.operation)),this.operation.accumulateParams(e.operation),this.editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this.editGeometry.notifyChanges({operation:"apply",updatedVertices:this.vertices}),!0)}}var V;(function(r){r[r.CUMULATIVE=0]="CUMULATIVE",r[r.REPLACE=1]="REPLACE"})(V||(V={}));class We{constructor(e,t,i=0){this.editGeometry=e,this.vertices=t,this.minNumberOfVertices=i,this.removedVertices=null}apply(){let e="redo";this.removedVertices==null?(this.removedVertices=[],this.vertices.forEach(t=>{const i=this._removeVertex(t);g(i)&&this.removedVertices.push(i)}),e="apply"):this.removedVertices.forEach(t=>{this._removeVertex(t.removedVertex)}),this.editGeometry.notifyChanges({operation:e,removedVertices:this.vertices})}undo(){this.removedVertices.forEach(e=>{this._undoRemoveVertex(e)}),this.editGeometry.notifyChanges({operation:"undo",addedVertices:this.vertices})}accumulate(){return!1}_removeVertex(e){const t=e.component;if(t.vertices.length<=this.minNumberOfVertices)return null;const i={removedVertex:e,createdEdge:null},s=e.leftEdge,n=e.rightEdge;return t.vertices.splice(t.vertices.indexOf(e),1),s&&(t.edges.splice(t.edges.indexOf(s),1),s.leftVertex.rightEdge=null),n&&(t.edges.splice(t.edges.indexOf(n),1),n.rightVertex.leftEdge=null),e.index===0&&n&&this.vertices.length>0&&t.swapVertices(t.vertices.indexOf(n.rightVertex),0),s&&n&&(i.createdEdge=new M(t,s.leftVertex,n.rightVertex),t.edges.push(i.createdEdge)),n&&t.updateVertexIndex(n.rightVertex,n.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,i=e.removedVertex.component,s=t.leftEdge,n=t.rightEdge;e.createdEdge&&i.edges.splice(i.edges.indexOf(e.createdEdge),1),i.vertices.push(t),s&&(i.edges.push(s),s.leftVertex.rightEdge=s),n&&(i.edges.push(n),n.rightVertex.leftEdge=n),i.updateVertexIndex(t,t.index)}}class Je{constructor(e,t,i){this.editGeometry=e,this.edge=t,this.t=i,this.createdVertex=null,this.left=null,this.right=null}apply(){let e="redo";const t=this.edge,i=t.component,s=t.leftVertex,n=t.rightVertex;i.edges.splice(i.edges.indexOf(t),1),p(this.createdVertex)&&(e="apply",this.createdVertex=new I(t.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this.editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this.t,this.editGeometry.coordinateHelper.createVector()),p(this.left)&&(this.left=new M(i,s,this.createdVertex)),this.left.leftVertex.leftEdge?i.edges.push(this.left):i.edges.unshift(this.left),s.rightEdge=this.left,p(this.right)&&(this.right=new M(i,this.createdVertex,n)),i.edges.push(this.right),n.leftEdge=this.right,i.updateVertexIndex(this.createdVertex,s.index+1),this.editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})}undo(){if(p(this.createdVertex)||p(this.left)||p(this.right))return null;const e=this.edge,t=e.component,i=this.createdVertex.leftEdge,s=this.createdVertex.rightEdge,n=i.leftVertex,o=s.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this.left),1),t.edges.splice(t.edges.indexOf(this.right),1),this.edge.leftVertex.leftEdge?t.edges.push(this.edge):t.edges.unshift(this.edge),n.rightEdge=e,o.leftEdge=e,t.updateVertexIndex(n,n.index),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}class te{constructor(e,t,i){this.editGeometry=e,this.vertex=t,this.pos=i}apply(){const e=p(this.originalPosition);e&&(this.originalPosition=this.vertex.pos),this._apply(e?"apply":"redo")}undo(){this.vertex.pos=ke(this.originalPosition),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:[this.vertex]})}accumulate(e){return e instanceof te&&e.vertex===this.vertex&&(this.pos=e.pos,this._apply("apply"),!0)}_apply(e){this.vertex.pos=this.pos,this.editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this.editGeometry.notifyChanges({operation:e,updatedVertices:[this.vertex]})}}class Ke{constructor(e,t){this.editGeometry=e,this.component=t,this.createdEdge=null}apply(){let e="redo";if(p(this.createdEdge)){e="apply";const t=this.component.getFirstVertex(),i=this.component.getLastVertex();if(this.component.isClosed()||this.component.vertices.length<3||p(t)||p(i))return;this.createdEdge=new M(this.component,i,t)}this.createdEdge.leftVertex.rightEdge=this.createdEdge,this.createdEdge.rightVertex.leftEdge=this.createdEdge,this.component.edges.push(this.createdEdge),this.editGeometry.notifyChanges({operation:e})}undo(){p(this.createdEdge)||(Ze(this.component.edges,this.createdEdge),this.createdEdge.leftVertex.rightEdge=null,this.createdEdge.rightVertex.leftEdge=null,this.editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}class ie{constructor(e,t,i,s){this.helper=e,this.dx=t,this.dy=i,this.dz=s}_move(e,t,i,s){this.helper.addDelta(e.pos,t,i,s)}apply(e){this._move(e,this.dx,this.dy,this.dz)}undo(e){this._move(e,-this.dx,-this.dy,-this.dz)}canAccumulate(e){return e instanceof ie}accumulate(e,t){this._move(e,t.dx,t.dy,t.dz)}accumulateParams(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}}function W(r,e){return r[0]*e[1]-r[1]*e[0]}function ot(r,e,t){const i=(e[0]-r[0])*(t[1]-r[1])-(e[1]-r[1])*(t[0]-r[0]);return Math.abs(i)/K(e,t)}function Qe(r,e,t){const i=X(t,e)/G(t);return ze(r,t,i)}function et(r,e,t,i,s=t){return x(_,i,t),x(y,e,s),Qe($,y,_),Ie(r,s,$)}function at(r,e,t,i){x(_,i,t),x(y,e,t);const s=X(_,y)/G(_);return s>0?A(r,t,_,s):ue(r,t)}function tt(r,e,t,i){x(_,e,t);const s=i/Se(_);return A(r,t,_,s)}function ht(r,e){return et(y,e,r.start,r.end),U(y[0],e[0])&&U(y[1],e[1])?[me(e)]:[]}function ct(r,e,t){return tt(y,t,r,e),U(y[0],t[0])&&U(y[1],t[1])?[me(t)]:[]}function it(r,e){const t=r.start,i=r.end,s=e.start,n=e.end,o=x(_,i,t),a=x(xe,n,s),c=W(o,a);if(Math.abs(c)<=st)return[];const h=x(y,t,s),d=W(a,h)/c,f=W(o,h)/c;if(d>=0){if(f>=0||e.type===E.LINE)return[A($,t,o,d)]}else if(r.type===E.LINE&&(f>=0||e.type===E.LINE))return[A($,t,o,d)];return[]}function dt(r,e,t){const i=[],s=x(_,r.end,r.start),n=x(xe,r.start,e),o=G(s),a=2*X(s,n),c=a*a-4*o*(G(n)-t*t);if(c===0){const h=-a/(2*o);(r.type===E.LINE||h>=0)&&i.push(A($,r.start,s,h))}else if(c>0){const h=Math.sqrt(c),d=(-a+h)/(2*o);(r.type===E.LINE||d>=0)&&i.push(A($,r.start,s,d));const f=(-a-h)/(2*o);(r.type===E.LINE||f>=0)&&i.push(A(y,r.start,s,f))}return i}var E;(function(r){r[r.RAY=0]="RAY",r[r.LINE=1]="LINE"})(E||(E={}));const st=1e-6,_=v(),xe=v(),y=v(),$=v();class O{constructor(e,t,i,s=0,n=S.IMMEDIATE){this.helper=e,this.planeType=t,this.edge=i,this.distance=s,this._plane=ne(),this._offsetPlane=ne(),this._minDistance=-1/0,this._maxDistance=1/0,n===S.IMMEDIATE&&this._initialize()}get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){var n,o,a,c;const e=this._toXYZ(this.edge.leftVertex.pos),t=this._toXYZ((o=(n=this.edge.leftVertex.leftEdge)==null?void 0:n.leftVertex)==null?void 0:o.pos),i=this._toXYZ(this.edge.rightVertex.pos),s=this._toXYZ((c=(a=this.edge.rightVertex.rightEdge)==null?void 0:a.rightVertex)==null?void 0:c.pos);this._edgeDirection=oe(u(),e,i),this._left=this._computeNeighbor(e,t,this._edgeDirection),this._right=this._computeNeighbor(i,s,this._edgeDirection)}_toXYZ(e){return g(e)?this.helper.toXYZ(e):null}_computeNeighbor(e,t,i){if(p(t))return{start:e,end:t,direction:w(-i[1],i[0],0),isOriginalDirection:!0};const s=oe(u(),e,t),n=!this._passesBisectingAngleThreshold(s,i);return{start:e,end:t,direction:n?this._bisectVectorsPerpendicular(i,s):s,isOriginalDirection:!n}}_passesBisectingAngleThreshold(e,t){const i=Math.abs(Le(t,e));return i>=pe&&i<=Math.PI-pe}_bisectVectorsPerpendicular(e,t){const i=B(e,t)<0?e:ae(u(),e),s=Math.abs(B(i,t));if(!(s<.001||s>.999))return this._bisectDirection(i,t);const n=H(u(),i,[0,0,1]);return z(n,n)}_bisectDirection(e,t){const i=k(u(),e,t);return z(i,i)}_initializePlane(){const e=this._computeNormalDirection(this._left),t=this._computeNormalDirection(this._right);B(e,t)<0&&ae(t,t),be(this._left.start,this._bisectDirection(e,t),this._plane)}_computeNormalDirection(e){const t=H(u(),e.direction,this._edgeDirection);z(t,t);const i=H(u(),this._edgeDirection,t);return this.planeType===J.XY&&(i[2]=0),z(i,i)}_initializeDistanceConstraints(){g(this._left.end)&&!this.requiresSplitEdgeLeft&&this._updateDistanceConstraint(L(this._plane,this._left.end)),g(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint(L(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(e){e<=0&&(this._minDistance=Math.max(this._minDistance,e)),e>=0&&(this._maxDistance=Math.min(this._maxDistance,e))}_updateIntersectDistanceConstraint(e){const t=j(e),i=this._edgeDirection,s=k(u(),this._left.start,this._left.direction),n=k(u(),this._right.start,this._right.direction),o=this._pointInBasis2D(v(),t,i,this._left.start),a=this._pointInBasis2D(v(),t,i,s),c=this._pointInBasis2D(v(),t,i,this._right.start),h=this._pointInBasis2D(v(),t,i,n),[d]=it({start:a,end:o,type:E.LINE},{start:h,end:c,type:E.LINE});if(!d)return;const f=x(v(),o,a);Ne(f,f);const T=x(v(),d,a),m=X(f,T),C=k(u(),s,Ge(u(),this._left.direction,-m)),P=L(e,C);this._updateDistanceConstraint(P)}_pointInBasis2D(e,t,i,s){return e[0]=he(t,s),e[1]=he(i,s),e}_offset(e,t){Number.isFinite(this._minDistance)&&(t=Math.max(this._minDistance,t)),Number.isFinite(this._maxDistance)&&(t=Math.min(this._maxDistance,t)),q(this._offsetPlane,this._plane),this._offsetPlane[3]-=t;const i=(n,o,a)=>g(o)&&Oe(this._offsetPlane,n,k(u(),n,o),a),s=u();(e===this.edge.leftVertex?i(this._left.start,this._left.direction,s):i(this._right.start,this._right.direction,s))&&this.helper.copy(this.helper.fromXYZ(s,void 0,this.helper.getM(e.pos)),e.pos)}signedDistanceToPoint(e){return L(this.plane,this.helper.toXYZ(this.helper.pointToVector(e)))}apply(e){this._offset(e,this.distance)}undo(e){this._offset(e,0)}canAccumulate(e){return e instanceof O&&this.edge.leftVertex.index===e.edge.leftVertex.index&&this.edge.rightVertex.index===e.edge.rightVertex.index&&this.edge.component===e.edge.component&&this._maybeEqualsVec3(this._left.direction,e._left.direction)&&this._maybeEqualsVec3(this._right.direction,e._right.direction)&&ce(j(this._plane),j(e._plane))}accumulate(e,t){const i=this._plane[3]-t._plane[3]+t.distance;this._offset(e,i)}accumulateParams(e){const t=e.distance-e._plane[3];this.distance=t+this._plane[3]}clone(){const e=new O(this.helper,this.planeType,this.edge,this.distance,S.DEFERRED);return q(e._plane,this._plane),q(e._offsetPlane,this._offsetPlane),e._maxDistance=this._maxDistance,e._minDistance=this._minDistance,e._left=this._cloneNeighbor(this._left),e._right=this._cloneNeighbor(this._right),e._edgeDirection=Z(u(),this._edgeDirection),e}_maybeEqualsVec3(e,t){return p(e)&&p(t)||g(e)&&g(t)&&ce(e,t)}_cloneNeighbor({start:e,end:t,direction:i,isOriginalDirection:s}){return{start:Z(u(),e),end:g(t)?Z(u(),t):null,direction:Z(u(),i),isOriginalDirection:s}}}const pe=Ue(15);var J,S;(function(r){r[r.XYZ=0]="XYZ",r[r.XY=1]="XY"})(J||(J={})),function(r){r[r.IMMEDIATE=0]="IMMEDIATE",r[r.DEFERRED=1]="DEFERRED"}(S||(S={}));class se{constructor(e,t,i=V.CUMULATIVE){this.origin=e,this.angle=t,this.accumulationType=i}_rotate(e,t){Xe(e.pos,e.pos,this.origin,t)}apply(e){this._rotate(e,this.angle)}undo(e){this._rotate(e,-this.angle)}canAccumulate(e){return e instanceof se&&N(this.origin,e.origin)}accumulate(e,t){const i=t.accumulationType===V.REPLACE;this._rotate(e,i?t.angle-this.angle:t.angle)}accumulateParams(e){const t=e.accumulationType===V.REPLACE;this.angle=t?e.angle:this.angle+e.angle}}class re{constructor(e,t,i,s,n=V.CUMULATIVE){this.origin=e,this.axis1=t,this.factor1=i,this.factor2=s,this.accumulationType=n,this.axis2=b(t[1],-t[0])}_scale(e,t,i){de(e.pos,e.pos,this.origin,this.axis1,t),de(e.pos,e.pos,this.origin,this.axis2,i)}apply(e){this._scale(e,this.factor1,this.factor2)}undo(e){this._scale(e,1/this.factor1,1/this.factor2)}canAccumulate(e){return e instanceof re&&N(this.origin,e.origin)&&N(this.axis1,e.axis1)}accumulate(e,t){t.accumulationType===V.REPLACE?this._scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this._scale(e,t.factor1,t.factor2)}accumulateParams(e){const t=e.accumulationType===V.REPLACE;this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}class rt{constructor(){this.operations=[],this.closed=!1}close(){this.closed=!0}apply(){for(const e of this.operations)e.apply()}undo(){for(let e=this.operations.length-1;e>=0;e--)this.operations[e].undo()}accumulate(e){if(this.closed)return!1;const t=this.operations.length?this.operations[this.operations.length-1]:null;return t&&t.accumulate(e)||(this.operations.push(e),e.apply()),!0}}class ye extends fe{constructor(e){super(),this.data=e,this.undoStack=[],this.redoStack=[],this.listener=this.data.on("change",t=>{t.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:t.addedVertices,operation:t.operation}),t.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:t.removedVertices,operation:t.operation}),t.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:t.updatedVertices,operation:t.operation})})}destroy(){this.listener.remove()}splitEdge(e,t){return this._apply(new Je(this.data,e,t))}updateVertices(e,t,i=D.ACCUMULATE_STEPS){return this._apply(new ee(this.data,e,t),i)}moveVertices(e,t,i,s,n=D.ACCUMULATE_STEPS){return this.updateVertices(e,new ie(this.data.coordinateHelper,t,i,s),n)}scaleVertices(e,t,i,s,n,o=D.ACCUMULATE_STEPS,a=V.CUMULATIVE){return this.updateVertices(e,new re(t,i,s,n,a),o)}rotateVertices(e,t,i,s=D.ACCUMULATE_STEPS,n=V.CUMULATIVE){return this.updateVertices(e,new se(t,i,n),s)}removeVertices(e){return this._apply(new We(this.data,e,this._minNumVerticesPerType))}appendVertex(e){return this.data.components.length===0?null:this._apply(new Fe(this.data,this.data.components[0],e))}setVertexPosition(e,t){return this._apply(new te(this.data,e,t))}offsetEdge(e,t,i,s=D.ACCUMULATE_STEPS){return this.updateVertices([t.leftVertex,t.rightVertex],new O(this.data.coordinateHelper,e,t,i),s)}closeComponent(e){return this.data.components.includes(e)?this._apply(new Ke(this.data,e)):null}canRemoveVertex(){return this.data.components[0].vertices.length>this._minNumVerticesPerType}createUndoGroup(){const e=new rt;return this._apply(e),{remove:()=>e.close()}}undo(){if(this.undoStack.length>0){const e=this.undoStack.pop();return e.undo(),this.redoStack.push(e),e}return null}redo(){if(this.redoStack.length>0){const e=this.redoStack.pop();return e.apply(),this.undoStack.push(e),e}return null}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}get lastOperation(){return this.undoStack.length>0?this.undoStack[this.undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}_apply(e,t=D.ACCUMULATE_STEPS){return t!==D.NEW_STEP&&!p(this.lastOperation)&&this.lastOperation.accumulate(e)||(e.apply(),this.undoStack.push(e),this.redoStack=[]),e}static fromGeometry(e,t){return new ye(Q.fromGeometry(e,t))}}export{ot as E,et as L,at as N,ye as S,E as b,ct as d,Q as g,it as j,tt as m,F as p,dt as v,He as x,ht as y};
