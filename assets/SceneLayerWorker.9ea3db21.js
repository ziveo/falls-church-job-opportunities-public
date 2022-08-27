import{bl as V,bm as k,fr as u,r as G}from"./index.d90d4844.js";import{o as _}from"./I3SNode.cc916286.js";var L,x;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(L||(L={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(x||(x={}));function q(){return O||(O=new Promise(e=>V(()=>import("./i3s.8fdecaf2.js"),[],import.meta.url).then(t=>t.i).then(({default:t})=>{const o=t({locateFile:W,onRuntimeInitialized:()=>e(o)});delete o.then})).catch(e=>{throw e})),O}function W(e){return k(`esri/libs/i3s/${e}`)}let O;async function J(e){await E();const t=[e.geometryBuffer];return{result:N(e,t),transferList:t}}async function K(e){var g;await E();const t=[e.geometryBuffer],{geometryBuffer:o}=e,f=o.byteLength,i=n._malloc(f),d=new Uint8Array(n.HEAPU8.buffer,i,f);d.set(new Uint8Array(o));const s=n.dracoDecompressPointCloudData(i,d.byteLength);if(n._free(i),s.error.length>0)throw`i3s.wasm: ${s.error}`;const p=((g=s.featureIds)==null?void 0:g.length)>0?u(s.featureIds):null,m=u(s.positions);return p&&t.push(p.buffer),t.push(m.buffer),{result:{positions:m,featureIds:p},transferList:t}}async function Q(e){await E(),C(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function X(e){await E(),D(e)}async function Z(e){await E(),n.setLegacySchema(e.context,e.jsonSchema)}function ee(e){Y(e)}let w,n;function D(e){const t=e.modifications,o=n._malloc(8*t.length),f=new Float64Array(n.HEAPU8.buffer,o,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];n.setModifications(e.context,o,t.length,e.isGeodetic),n._free(o)}function N(e,t){if(!n)return null;const{context:o,localOrigin:f,globalTrafo:i,mbs:d,obb:s,elevationOffset:p,geometryBuffer:m,geometryDescriptor:g,indexToVertexProjector:$,vertexToRenderProjector:j}=e,A=n._malloc(m.byteLength),F=33,I=n._malloc(F*Float64Array.BYTES_PER_ELEMENT),M=new Uint8Array(n.HEAPU8.buffer,A,m.byteLength);M.set(new Uint8Array(m));const a=new Float64Array(n.HEAPU8.buffer,I,F);h(a,f);let c=a.byteOffset+3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c);h(l,i),c+=16*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),h(l,d),c+=4*a.BYTES_PER_ELEMENT,G(s)&&(l=new Float64Array(a.buffer,c),h(l,s.center),c+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),h(l,s.halfSize),c+=3*a.BYTES_PER_ELEMENT,l=new Float64Array(a.buffer,c),h(l,s.quaternion));const S=g,H={isDraco:!1,isLegacy:!1,color:e.layouts.some(y=>y.some(b=>b.name==="color")),normal:e.needNormals&&e.layouts.some(y=>y.some(b=>b.name==="normalCompressed")),uv0:e.layouts.some(y=>y.some(b=>b.name==="uv0")),uvRegion:e.layouts.some(y=>y.some(b=>b.name==="uvRegion")),featureIndex:S.featureIndex},r=n.process(o,!!e.obb,A,M.byteLength,S,H,I,p,$,j,e.normalReferenceFrame);if(n._free(I),n._free(A),r.error.length>0)throw`i3s.wasm: ${r.error}`;if(r.discarded)return null;const P=r.componentOffsets.length>0?u(r.componentOffsets):null,T=r.featureIds.length>0?u(r.featureIds):null,R=u(r.interleavedVertedData).buffer,U=r.indicesType===L.Int16?u(new Uint16Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/2)):u(new Uint32Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/4)),B=u(r.positions),v=r.positionIndicesType===L.Int16?u(new Uint16Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/2)):u(new Uint32Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/4)),z={layout:e.layouts[0],interleavedVertexData:R,indices:U,hasColors:r.hasColors,hasModifications:r.hasModifications,positionData:{data:B,indices:v}};return T&&t.push(T.buffer),P&&t.push(P.buffer),t.push(R),t.push(U.buffer),t.push(B.buffer),t.push(v.buffer),{componentOffsets:P,featureIds:T,transformedGeometry:z,obb:r.obb}}function te(e){return e===0?_.Unmodified:e===1?_.PotentiallyModified:e===2?_.Culled:_.Unknown}function C(e){const{context:t,buffer:o}=e,f=n._malloc(o.byteLength),i=o.byteLength/Float64Array.BYTES_PER_ELEMENT,d=new Float64Array(n.HEAPU8.buffer,f,i),s=new Float64Array(o);d.set(s),n.filterOBBs(t,f,i),s.set(d),n._free(f)}function Y(e){n&&n.destroy(e)}function h(e,t){for(let o=0;o<t.length;++o)e[o]=t[o]}function E(){return n?Promise.resolve():(w||(w=q().then(e=>{n=e,w=null})),w)}const re={transform:N,destroy:Y},ie=Object.freeze(Object.defineProperty({__proto__:null,destroyContext:ee,dracoDecompressPointCloudData:K,filterObbsForModifications:Q,filterObbsForModificationsSync:C,initialize:E,interpretObbModificationResults:te,process:J,setLegacySchema:Z,setModifications:X,setModificationsSync:D,test:re},Symbol.toStringTag,{value:"Module"}));export{C as E,ie as S,D as b,te as d,x as e,E as g};
