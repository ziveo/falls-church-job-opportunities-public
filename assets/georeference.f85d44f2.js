import{ae as U,m_ as j,m$ as V,mo as C,n0 as W,jI as D,n1 as B,e as p,d as g,n as H,fp as J,ah as z,iP as K,mA as Q,n2 as Z,lL as X,lB as P,dI as m,dF as L,n3 as h,f9 as I,n4 as O,e5 as nn,n5 as d,b8 as tn,n6 as rn,n7 as en,n8 as an,aO as on,r as v,kZ as sn,n9 as ln,kQ as M,na as k,nb as cn,t as f,nc as x,ly as y,nd as un,ne as pn,l_ as gn,nf as fn,ng as hn,nh as yn,bK as mn,a9 as $n,jV as An,lr as dn,ni as xn,nj as wn,nk as Tn}from"./index.d90d4844.js";function $(n=vn){return[n[0],n[1],n[2],n[3]]}function qn(n,r,t=$()){return U(t,n),t[3]=r,t}function Gn(n,r,t=$()){return j(A,n,F(n)),j(_,r,F(r)),V(A,_,A),Mn(t,C(W(t,A)))}function Sn(n){return n}function F(n){return D(n[3])}function Mn(n,r){return n[3]=r,n}const vn=[0,0,1,0],A=B(),_=B();$();var b;let u=b=class extends J{constructor(n){super(n),this.origin=z(),this.translation=z(),this.rotation=$(),this.scale=K(1,1,1),this.geographic=!0}get localMatrix(){const n=m();return Q(n,this.scale),Z(n,n,F(this.rotation),this.rotation),X(n,n,this.translation),n}get localMatrixInverse(){return P(m(),this.localMatrix)}applyLocal(n,r){return L(r,n,this.localMatrix)}applyLocalInverse(n,r){return L(r,n,this.localMatrixInverse)}project(n,r){const t=new Float64Array(n.length),e=h.fromTypedArray(t),a=h.fromTypedArray(n);if(this.geographic){const s=I(r),c=m();return O(r,this.origin,c,s),nn(c,c,this.localMatrix),d(e,a,c),tn(t,s,0,t,r,0,t.length/3),t}const{localMatrix:o,origin:i}=this;rn(o,en)?an(e,a):d(e,a,o);for(let s=0;s<t.length;s+=3)t[s+0]+=i[0],t[s+1]+=i[1],t[s+2]+=i[2];return t}getOriginPoint(n){const[r,t,e]=this.origin;return new on({x:r,y:t,z:e,spatialReference:n})}equals(n){return v(n)&&this.geographic===n.geographic&&sn(this.origin,n.origin)&&ln(this.localMatrix,n.localMatrix)}clone(){const n={origin:M(this.origin),translation:M(this.translation),rotation:$(this.rotation),scale:M(this.scale),geographic:this.geographic};return new b(n)}};p([g({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"origin",void 0),p([g({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"translation",void 0),p([g({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"rotation",void 0),p([g({type:[Number],nonNullable:!0,json:{write:!0}})],u.prototype,"scale",void 0),p([g({type:Boolean,nonNullable:!0,json:{write:!0}})],u.prototype,"geographic",void 0),p([g()],u.prototype,"localMatrix",null),p([g()],u.prototype,"localMatrixInverse",null),u=b=p([H("esri.geometry.support.MeshTransform")],u);const Fn=u;function w(n,r){var t;return n.isGeographic||n.isWebMercator&&((t=r==null?void 0:r.geographic)!=null?t:!0)}function q(n,r,t){return w(r.spatialReference,t)?Nn(n,r,t):En(n,r,t)}function bn(n,r,t){const{position:e,normal:a,tangent:o}=n;if(f(r))return{position:e,normal:a,tangent:o};const i=r.localMatrix;return q({position:xn(e,new Float64Array(e.length),i),normal:v(a)?wn(a,new Float32Array(a.length),i):null,tangent:v(o)?Tn(o,new Float32Array(o.length),i):null},r.getOriginPoint(t),{geographic:r.geographic})}function Yn(n,r,t){var e;if(t!=null&&t.useTransform){const{position:a,normal:o,tangent:i}=n;return{vertexAttributes:{position:a,normal:o,tangent:i},transform:new Fn({origin:[r.x,r.y,(e=r.z)!=null?e:0],geographic:w(r.spatialReference,t)})}}return{vertexAttributes:q(n,r,t),transform:null}}function Rn(n,r,t){return w(r.spatialReference,t)?G(n,r,t):R(n,r,t)}function Un(n,r,t,e){if(f(r))return Rn(n,t,e);const a=bn(n,r,t.spatialReference);return t.equals(r.getOriginPoint(t.spatialReference))?R(a,t,e):w(t.spatialReference,e)?G(a,t,e):R(a,t,e)}function En(n,r,t){const e=new Float64Array(n.position.length),a=n.position,o=r.x,i=r.y,s=r.z||0,{horizontal:c,vertical:T}=N(t?t.unit:null,r.spatialReference);for(let l=0;l<a.length;l+=3)e[l+0]=a[l+0]*c+o,e[l+1]=a[l+1]*c+i,e[l+2]=a[l+2]*T+s;return{position:e,normal:n.normal,tangent:n.tangent}}function Nn(n,r,t){const e=r.spatialReference,a=S(r,t,E),o=new Float64Array(n.position.length),i=jn(n.position,a,e,o),s=k(Y,a);return{position:i,normal:zn(i,o,n.normal,s,e),tangent:Ln(i,o,n.tangent,s,e)}}function jn(n,r,t,e){d(h.fromTypedArray(e),h.fromTypedArray(n),r);const a=new Float64Array(n.length);return cn(e,a,t)}function zn(n,r,t,e,a){if(f(t))return null;const o=new Float32Array(t.length);return x(y.fromTypedArray(o),y.fromTypedArray(t),e),un(o,n,r,a,o),o}function Ln(n,r,t,e,a){if(f(t))return null;const o=new Float32Array(t.length);x(y.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),y.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),e);for(let i=3;i<o.length;i+=4)o[i]=t[i];return pn(o,n,r,a,o),o}function R(n,r,t){const e=new Float64Array(n.position.length),a=n.position,o=r.x,i=r.y,s=r.z||0,{horizontal:c,vertical:T}=N(t?t.unit:null,r.spatialReference);for(let l=0;l<a.length;l+=3)e[l+0]=(a[l+0]-o)/c,e[l+1]=(a[l+1]-i)/c,e[l+2]=(a[l+2]-s)/T;return{position:e,normal:n.normal,tangent:n.tangent}}function G(n,r,t){const e=r.spatialReference;S(r,t,E);const a=P(In,E),o=new Float64Array(n.position.length),i=_n(n.position,e,a,o),s=k(Y,a);return{position:i,normal:Bn(n.normal,n.position,o,e,s),tangent:Pn(n.tangent,n.position,o,e,s)}}function S(n,r,t){O(n.spatialReference,[n.x,n.y,n.z||0],t,I(n.spatialReference));const{horizontal:e,vertical:a}=N(r?r.unit:null,n.spatialReference);return gn(t,t,[e,e,a]),t}function _n(n,r,t,e){const a=fn(n,r,e),o=h.fromTypedArray(a),i=new Float64Array(a.length),s=h.fromTypedArray(i);return d(s,o,t),i}function Bn(n,r,t,e,a){if(f(n))return null;const o=hn(n,r,t,e,new Float32Array(n.length)),i=y.fromTypedArray(o);return x(i,i,a),o}function Pn(n,r,t,e,a){if(f(n))return null;const o=yn(n,r,t,e,new Float32Array(n.length)),i=y.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT);return x(i,i,a),o}function N(n,r){if(f(n))return On;const t=r.isGeographic?1:mn(r),e=r.isGeographic?1:$n(r),a=An(1,n,"meters");return{horizontal:a*t,vertical:a*e}}const E=m(),In=m(),Y=dn(),On={horizontal:1,vertical:1};export{Fn as L,Rn as M,Un as P,bn as _,$ as a,F as b,qn as c,Gn as g,Yn as k,Sn as l,w as r,q as x};