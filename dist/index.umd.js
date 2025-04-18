(function(p,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("react"),require("@react-three/fiber"),require("postprocessing"),require("three"),require("@react-three/drei"),require("leva")):typeof define=="function"&&define.amd?define(["exports","react","@react-three/fiber","postprocessing","three","@react-three/drei","leva"],s):(p=typeof globalThis<"u"?globalThis:p||self,s(p.reactFluidDistortion={},p.React,p.reactThreeFiber,p.postprocessing,p.THREE,p.drei,p.leva))})(this,function(p,s,w,se,n,X,le){"use strict";var je=Object.defineProperty;var Ae=(p,s,w)=>s in p?je(p,s,{enumerable:!0,configurable:!0,writable:!0,value:w}):p[s]=w;var de=(p,s,w)=>Ae(p,typeof s!="symbol"?s+"":s,w);function me(a){const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(a){for(const r in a)if(r!=="default"){const o=Object.getOwnPropertyDescriptor(a,r);Object.defineProperty(i,r,o.get?o:{enumerable:!0,get:()=>a[r]})}}return i.default=a,Object.freeze(i)}const g=me(n);var G={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce;function pe(){if(ce)return z;ce=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(o,l,v){var f=null;if(v!==void 0&&(f=""+v),l.key!==void 0&&(f=""+l.key),"key"in l){v={};for(var S in l)S!=="key"&&(v[S]=l[S])}else v=l;return l=v.ref,{$$typeof:a,type:o,key:f,ref:l!==void 0?l:null,props:v}}return z.Fragment=i,z.jsx=r,z.jsxs=r,z}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function ye(){return ve||(ve=1,process.env.NODE_ENV!=="production"&&function(){function a(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case ne:return"Profiler";case D:return"StrictMode";case K:return"Suspense";case q:return"SuspenseList";case M:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case re:return"Portal";case W:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case k:var u=e.render;return e=e.displayName,e||(e=u.displayName||u.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return u=e.displayName||null,u!==null?u:a(e.type)||"Memo";case m:u=e._payload,e=e._init;try{return a(e(u))}catch{}}return null}function i(e){return""+e}function r(e){try{i(e);var u=!1}catch{u=!0}if(u){u=console;var d=u.error,y=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return d.call(u,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",y),i(e)}}function o(e){if(e===A)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===m)return"<...>";try{var u=a(e);return u?"<"+u+">":"<...>"}catch{return"<...>"}}function l(){var e=V.A;return e===null?null:e.getOwner()}function v(){return Error("react-stack-top-frame")}function f(e){if(R.call(e,"key")){var u=Object.getOwnPropertyDescriptor(e,"key").get;if(u&&u.isReactWarning)return!1}return e.key!==void 0}function S(e,u){function d(){x||(x=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",u))}d.isReactWarning=!0,Object.defineProperty(e,"key",{get:d,configurable:!0})}function B(){var e=a(this.type);return b[e]||(b[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function I(e,u,d,y,O,_,ae,ie){return d=_.ref,e={$$typeof:Q,type:e,key:u,props:_,_owner:O},(d!==void 0?d:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:B}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:ae}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ie}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function Z(e,u,d,y,O,_,ae,ie){var h=u.children;if(h!==void 0)if(y)if(C(h)){for(y=0;y<h.length;y++)E(h[y]);Object.freeze&&Object.freeze(h)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else E(h);if(R.call(u,"key")){h=a(e);var N=Object.keys(u).filter(function(Ue){return Ue!=="key"});y=0<N.length?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}",H[h+y]||(N=0<N.length?"{"+N.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,y,h,N,h),H[h+y]=!0)}if(h=null,d!==void 0&&(r(d),h=""+d),f(u)&&(r(u.key),h=""+u.key),"key"in u){d={};for(var ue in u)ue!=="key"&&(d[ue]=u[ue])}else d=u;return h&&S(d,typeof e=="function"?e.displayName||e.name||"Unknown":e),I(e,h,_,O,l(),d,ae,ie)}function E(e){typeof e=="object"&&e!==null&&e.$$typeof===Q&&e._store&&(e._store.validated=1)}var j=s,Q=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),W=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),oe=Symbol.for("react.client.reference"),V=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.prototype.hasOwnProperty,C=Array.isArray,c=console.createTask?console.createTask:function(){return null};j={"react-stack-bottom-frame":function(e){return e()}};var x,b={},T=j["react-stack-bottom-frame"].bind(j,v)(),P=c(o(v)),H={};Y.Fragment=A,Y.jsx=function(e,u,d,y,O){var _=1e4>V.recentlyCreatedOwnerStacks++;return Z(e,u,d,!1,y,O,_?Error("react-stack-top-frame"):T,_?c(o(e)):P)},Y.jsxs=function(e,u,d,y,O){var _=1e4>V.recentlyCreatedOwnerStacks++;return Z(e,u,d,!0,y,O,_?Error("react-stack-top-frame"):T,_?c(o(e)):P)}}()),Y}var fe;function he(){return fe||(fe=1,process.env.NODE_ENV==="production"?G.exports=pe():G.exports=ye()),G.exports}var U=he();const t={blend:5,intensity:2,force:1.1,distortion:.4,curl:1.9,radius:.3,swirl:4,pressure:.8,densityDissipation:.96,velocityDissipation:1,fluidColor:"#3300ff",backgroundColor:"#070410",showBackground:!0,rainbow:!1,dyeRes:512,simRes:128,refreshRate:60},J=a=>{const i=new n.Color(a);return new n.Vector3(i.r,i.g,i.b)},ee=(a,i)=>Math.pow(a,i*t.refreshRate);var ge=`uniform sampler2D tFluid;

uniform vec3 uColor;
uniform vec3 uBackgroundColor;

uniform float uDistort;
uniform float uIntensity;
uniform float uRainbow;
uniform float uBlend;
uniform float uShowBackground;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {

    vec3 fluidColor = texture2D(tFluid, uv).rgb;

    vec2 distortedUv = uv - fluidColor.rg * uDistort * 0.001;

    vec4 texture = texture2D(inputBuffer, distortedUv);

    float intensity = length(fluidColor) * uIntensity * 0.0001;

    vec3 selectedColor = uColor * length(fluidColor);

    vec4 colorForFluidEffect = vec4(uRainbow == 1.0 ? fluidColor : selectedColor, 1.0);

    vec4 computedBgColor = vec4(uBackgroundColor, 1.);

    outputColor = mix(texture, colorForFluidEffect, intensity);

    vec4 computedFluidColor = mix(texture, colorForFluidEffect, uBlend * 0.01);

    vec4 finalColor;

    if(texture.a < 0.1) {
        finalColor = mix(computedBgColor, colorForFluidEffect, intensity);
    } else {
        finalColor = mix(computedFluidColor, computedBgColor, 1.0 - texture.a);
    }

    outputColor = finalColor;
}`;class xe extends se.Effect{constructor(r={}){const o={tFluid:new n.Uniform(r.tFluid),uDistort:new n.Uniform(r.distortion),uRainbow:new n.Uniform(r.rainbow),uIntensity:new n.Uniform(r.intensity),uBlend:new n.Uniform(r.blend),uShowBackground:new n.Uniform(r.showBackground),uColor:new n.Uniform(J(r.fluidColor)),uBackgroundColor:new n.Uniform(J(r.backgroundColor))};super("FluidEffect",ge,{blendFunction:r.blendFunction,uniforms:new Map(Object.entries(o))});de(this,"state");this.state={...r}}updateUniform(r,o){const l=this.uniforms.get(r);l&&(l.value=o)}update(){this.updateUniform("uIntensity",this.state.intensity),this.updateUniform("uDistort",this.state.distortion),this.updateUniform("uRainbow",this.state.rainbow),this.updateUniform("uBlend",this.state.blend),this.updateUniform("uShowBackground",this.state.showBackground),this.updateUniform("uColor",J(this.state.fluidColor)),this.updateUniform("uBackgroundColor",J(this.state.backgroundColor))}}const be=s.forwardRef(function(i,r){const o=s.useMemo(()=>new xe(i),[]);return s.useEffect(()=>{o.state={...i},o.update()},[o,i]),s.useEffect(()=>()=>{var l;(l=o.dispose)==null||l.call(o)},[o]),U.jsx("primitive",{ref:r,object:o,dispose:null})}),te=(a,i,r)=>{const o=X.useFBO(a,i,r),l=X.useFBO(a,i,r),v=s.useRef({read:o,write:l,swap:()=>{const f=v.read;v.read=v.write,v.write=f},dispose:()=>{o.dispose(),l.dispose()}}).current;return v},we=()=>{const a=te(t.dyeRes,t.dyeRes,{type:g.HalfFloatType,format:g.RGBAFormat,minFilter:g.LinearFilter,depth:!1}),i=te(t.simRes,t.simRes,{type:g.HalfFloatType,format:g.RGFormat,minFilter:g.LinearFilter,depth:!1}),r=te(t.simRes,t.simRes,{type:g.HalfFloatType,format:g.RedFormat,minFilter:g.NearestFilter,depth:!1}),o=X.useFBO(t.simRes,t.simRes,{type:g.HalfFloatType,format:g.RedFormat,minFilter:g.NearestFilter,depth:!1}),l=X.useFBO(t.simRes,t.simRes,{type:g.HalfFloatType,format:g.RedFormat,minFilter:g.NearestFilter,depth:!1}),v=s.useMemo(()=>({density:a,velocity:i,pressure:r,divergence:o,curl:l}),[l,a,o,r,i]);return s.useEffect(()=>()=>{for(const f of Object.values(v))f.dispose()},[v]),v};var F=`varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform vec2 texelSize;

void main() {
  vUv = uv;

  vL = vUv - vec2(texelSize.x, 0.0);

  vR = vUv + vec2(texelSize.x, 0.0);

  vT = vUv + vec2(0.0, texelSize.y);

  vB = vUv - vec2(0.0, texelSize.y);

  gl_Position = vec4(position, 1.0);
}`,Ce=`precision highp float;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uClearValue;

void main() { gl_FragColor = uClearValue * texture2D(uTexture, vUv); }`,Se=`precision highp float;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;

uniform sampler2D uVelocity;

void main() {
    float L = texture2D(uVelocity, vL).y;

    float R = texture2D(uVelocity, vR).y;

    float T = texture2D(uVelocity, vT).x;

    float B = texture2D(uVelocity, vB).x;

    float vorticity = R - L - T + B;

    gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);
}`,Re=`precision highp float;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;

uniform sampler2D uVelocity;

void main() {
    float L = texture2D(uVelocity, vL).x;

    float R = texture2D(uVelocity, vR).x;

    float T = texture2D(uVelocity, vT).y;

    float B = texture2D(uVelocity, vB).y;

    vec2 C = texture2D(uVelocity, vUv).xy;

    if(vL.x < 0.0) {
        L = -C.x;
    }

    if(vR.x > 1.0) {
        R = -C.x;
    }

    if(vT.y > 1.0) {
        T = -C.y;
    }

    if(vB.y < 0.0) {
        B = -C.y;
    }

    float div = 0.5 * (R - L + T - B);

    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}`,Te=`precision highp float;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;

uniform sampler2D uPressure;
uniform sampler2D uVelocity;

void main() {
    float L = texture2D(uPressure, vL).x;

    float R = texture2D(uPressure, vR).x;

    float T = texture2D(uPressure, vT).x;

    float B = texture2D(uPressure, vB).x;

    vec2 velocity = texture2D(uVelocity, vUv).xy;

    velocity.xy -= vec2(R - L, T - B);

    gl_FragColor = vec4(velocity, 0.0, 1.0);
}`,_e=`precision highp float;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;

uniform sampler2D uPressure;
uniform sampler2D uDivergence;

void main() {
    float L = texture2D(uPressure, vL).x;

    float R = texture2D(uPressure, vR).x;

    float T = texture2D(uPressure, vT).x;

    float B = texture2D(uPressure, vB).x;

    float C = texture2D(uPressure, vUv).x;

    float divergence = texture2D(uDivergence, vUv).x;

    float pressure = (L + R + B + T - divergence) * 0.25;

    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}`,De=`varying vec2 vUv;

uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 uColor;
uniform vec2 uPointer;
uniform float uRadius;

void main() {
    vec2 p = vUv - uPointer.xy;

    p.x *= aspectRatio;

    vec3 splat = exp(-dot(p, p) / uRadius) * uColor;

    vec3 base = texture2D(uTarget, vUv).xyz;

    gl_FragColor = vec4(base + splat, 1.0);
}`,Fe=`precision highp float;

varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float uDissipation;

void main() {
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;

    gl_FragColor = uDissipation * texture2D(uSource, coord);

    gl_FragColor.a = 1.0;
}`,ke=`precision highp float;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;

uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float uCurlValue;
uniform float dt;

void main() {
    float L = texture2D(uCurl, vL).x;

    float R = texture2D(uCurl, vR).x;

    float T = texture2D(uCurl, vT).x;

    float B = texture2D(uCurl, vB).x;

    float C = texture2D(uCurl, vUv).x;

    vec2 force = vec2(abs(T) - abs(B), abs(R) - abs(L)) * 0.5;

    force /= length(force) + 1.;

    force *= uCurlValue * C;

    force.y *= -1.;

    vec2 vel = texture2D(uVelocity, vUv).xy;

    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
}`;const Pe=()=>{const a=w.useThree(r=>r.size),i=s.useMemo(()=>{const r=new n.ShaderMaterial({uniforms:{uVelocity:{value:new n.Texture},uSource:{value:new n.Texture},dt:{value:1/t.refreshRate},uDissipation:{value:1},texelSize:{value:new n.Vector2}},fragmentShader:Fe,vertexShader:F,depthTest:!1,depthWrite:!1}),o=new n.ShaderMaterial({uniforms:{uTexture:{value:new n.Texture},uClearValue:{value:t.pressure},texelSize:{value:new n.Vector2}},fragmentShader:Ce,vertexShader:F,depthTest:!1,depthWrite:!1}),l=new n.ShaderMaterial({uniforms:{uVelocity:{value:new n.Texture},texelSize:{value:new n.Vector2}},fragmentShader:Se,vertexShader:F,depthTest:!1,depthWrite:!1}),v=new n.ShaderMaterial({uniforms:{uVelocity:{value:new n.Texture},texelSize:{value:new n.Vector2}},fragmentShader:Re,vertexShader:F,depthTest:!1,depthWrite:!1}),f=new n.ShaderMaterial({uniforms:{uPressure:{value:new n.Texture},uVelocity:{value:new n.Texture},texelSize:{value:new n.Vector2}},fragmentShader:Te,vertexShader:F,depthTest:!1,depthWrite:!1}),S=new n.ShaderMaterial({uniforms:{uPressure:{value:new n.Texture},uDivergence:{value:new n.Texture},texelSize:{value:new n.Vector2}},fragmentShader:_e,vertexShader:F,depthTest:!1,depthWrite:!1}),B=new n.ShaderMaterial({uniforms:{uTarget:{value:new n.Texture},aspectRatio:{value:a.width/a.height},uColor:{value:new n.Vector3},uPointer:{value:new n.Vector2},uRadius:{value:t.radius/100},texelSize:{value:new n.Vector2}},fragmentShader:De,vertexShader:F,depthTest:!1,depthWrite:!1}),I=new n.ShaderMaterial({uniforms:{uVelocity:{value:new n.Texture},uCurl:{value:new n.Texture},uCurlValue:{value:t.curl},dt:{value:1/t.refreshRate},texelSize:{value:new n.Vector2}},fragmentShader:ke,vertexShader:F,depthTest:!1,depthWrite:!1});return{splat:B,curl:l,clear:o,divergence:v,pressure:S,gradientSubstract:f,advection:r,vorticity:I}},[a]);return s.useEffect(()=>{for(const r of Object.values(i)){const o=a.width/(a.height+400);r.uniforms.texelSize.value.set(1/(t.simRes*o),1/t.simRes)}return()=>{for(const r of Object.values(i))r.dispose()}},[i,a]),i},Oe=({force:a})=>{const i=w.useThree(f=>f.size),r=s.useRef([]).current,o=s.useRef(new n.Vector2),l=s.useRef(!1);return{onPointerMove:s.useCallback(f=>{const S=f.x-o.current.x,B=f.y-o.current.y;if(!l.current){l.current=!0,o.current.set(f.x,f.y);return}o.current.set(f.x,f.y),r.push({mouseX:f.x/i.width,mouseY:1-f.y/i.height,velocityX:S*a,velocityY:-B*a})},[a,i.height,i.width,r]),splatStack:r}},Be=({blend:a=t.blend,force:i=t.force,radius:r=t.radius,curl:o=t.curl,swirl:l=t.swirl,intensity:v=t.intensity,distortion:f=t.distortion,fluidColor:S=t.fluidColor,backgroundColor:B=t.backgroundColor,showBackground:I=t.showBackground,rainbow:Z=t.rainbow,pressure:E=t.pressure,densityDissipation:j=t.densityDissipation,velocityDissipation:Q=t.velocityDissipation,blendFunction:re=se.BlendFunction.NORMAL})=>{const A=w.useThree(x=>x.size),D=w.useThree(x=>x.gl),ne=w.useThree(x=>x.camera),L=s.useMemo(()=>new n.Scene,[]),W=s.useMemo(()=>new n.Camera,[]),k=s.useRef(null),K=s.useRef(null),q=s.useRef(new n.Vector2),$=s.useRef(new n.Vector3),m=we(),M=Pe(),{onPointerMove:oe,splatStack:V}=Oe({force:i}),R=s.useCallback(x=>{k.current&&(k.current.material=M[x],k.current.material.needsUpdate=!0)},[M]),C=s.useCallback(x=>{const b=m[x];"write"in b?(D.setRenderTarget(b.write),D.clear(),D.render(L,W),b.swap()):(D.setRenderTarget(b),D.clear(),D.render(L,W))},[W,L,m,D]),c=s.useCallback((x,b,T)=>{const P=M[x];P&&P.uniforms[b]&&(P.uniforms[b].value=T)},[M]);return w.useFrame((x,b)=>{if(!(!k.current||!K.current)){k.current.quaternion.copy(ne.quaternion);for(let T=V.length-1;T>=0;T--){const{mouseX:P,mouseY:H,velocityX:e,velocityY:u}=V[T];q.current.set(P,H),$.current.set(e,u,10),R("splat"),c("splat","uTarget",m.velocity.read.texture),c("splat","uPointer",q.current),c("splat","uColor",$.current),c("splat","uRadius",r/100),C("velocity"),c("splat","uTarget",m.density.read.texture),C("density"),V.pop()}R("curl"),c("curl","uVelocity",m.velocity.read.texture),C("curl"),R("vorticity"),c("vorticity","uVelocity",m.velocity.read.texture),c("vorticity","uCurl",m.curl.texture),c("vorticity","uCurlValue",o),C("velocity"),R("divergence"),c("divergence","uVelocity",m.velocity.read.texture),C("divergence"),R("clear"),c("clear","uTexture",m.pressure.read.texture),c("clear","uClearValue",ee(E,b)),C("pressure"),R("pressure"),c("pressure","uDivergence",m.divergence.texture);for(let T=0;T<l;T++)c("pressure","uPressure",m.pressure.read.texture),C("pressure");R("gradientSubstract"),c("gradientSubstract","uPressure",m.pressure.read.texture),c("gradientSubstract","uVelocity",m.velocity.read.texture),C("velocity"),R("advection"),c("advection","uVelocity",m.velocity.read.texture),c("advection","uSource",m.velocity.read.texture),c("advection","uDissipation",ee(Q,b)),C("velocity"),c("advection","uVelocity",m.velocity.read.texture),c("advection","uSource",m.density.read.texture),c("advection","uDissipation",ee(j,b)),C("density")}}),U.jsxs(U.Fragment,{children:[w.createPortal(U.jsx("mesh",{ref:k,onPointerMove:oe,scale:[A.width,A.height,1],children:U.jsx("planeGeometry",{args:[2,2,10,10]})}),L),U.jsx(be,{blendFunction:re,intensity:v,rainbow:Z,distortion:f,backgroundColor:B,blend:a,fluidColor:S,showBackground:I,ref:K,tFluid:m.density.read.texture})]})},Ve=()=>{const a=()=>r(Object.fromEntries(Object.keys(i).map(o=>[o,t[o]]))),[i,r]=le.useControls("Settings",()=>({intensity:{value:t.intensity,min:0,max:10,step:.01,label:"intensity"},force:{value:t.force,min:0,max:20,step:.1,label:"force"},distortion:{value:t.distortion,min:0,max:2,step:.01,label:"distortion"},curl:{value:t.curl,min:0,max:50,step:.1,label:"curl"},swirl:{value:t.swirl,min:0,max:20,step:1,label:"swirl"},fluidColor:{value:t.fluidColor,label:"fluid color"},backgroundColor:{value:t.backgroundColor,label:"background color"},blend:{value:t.blend,min:0,max:10,step:.01,label:"blend"},showBackground:{value:t.showBackground,label:"show background"},rainbow:{value:t.rainbow,label:"rainbow mode"},pressure:{value:t.pressure,min:0,max:1,step:.01,label:"pressure reduction"},densityDissipation:{value:t.densityDissipation,min:0,max:1,step:.01,label:"density dissipation"},velocityDissipation:{value:t.velocityDissipation,min:0,max:1,step:.01,label:"velocity dissipation"},radius:{value:t.radius,min:.01,max:1,step:.01,label:"radius"},"reset settings":le.button(a)}));return i};p.Fluid=Be,p.useConfig=Ve,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
