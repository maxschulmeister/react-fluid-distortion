(function(p,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react"),require("@react-three/fiber"),require("postprocessing"),require("three"),require("@react-three/drei")):typeof define=="function"&&define.amd?define(["exports","react","@react-three/fiber","postprocessing","three","@react-three/drei"],i):(p=typeof globalThis<"u"?globalThis:p||self,i(p.reactFluidDistortion={},p.React,p.reactThreeFiber,p.postprocessing,p.THREE,p.drei))})(this,function(p,i,b,se,t,X){"use strict";var Be=Object.defineProperty;var Ue=(p,i,b)=>i in p?Be(p,i,{enumerable:!0,configurable:!0,writable:!0,value:b}):p[i]=b;var fe=(p,i,b)=>Ue(p,typeof i!="symbol"?i+"":i,b);function de(o){const u=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(o){for(const r in o)if(r!=="default"){const a=Object.getOwnPropertyDescriptor(o,r);Object.defineProperty(u,r,a.get?a:{enumerable:!0,get:()=>o[r]})}}return u.default=o,Object.freeze(u)}const g=de(t);var G={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function me(){if(le)return z;le=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function r(a,l,v){var f=null;if(v!==void 0&&(f=""+v),l.key!==void 0&&(f=""+l.key),"key"in l){v={};for(var S in l)S!=="key"&&(v[S]=l[S])}else v=l;return l=v.ref,{$$typeof:o,type:a,key:f,ref:l!==void 0?l:null,props:v}}return z.Fragment=u,z.jsx=r,z.jsxs=r,z}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce;function pe(){return ce||(ce=1,process.env.NODE_ENV!=="production"&&function(){function o(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case ne:return"Profiler";case D:return"StrictMode";case K:return"Suspense";case q:return"SuspenseList";case M:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case re:return"Portal";case W:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return n=e.displayName||null,n!==null?n:o(e.type)||"Memo";case m:n=e._payload,e=e._init;try{return o(e(n))}catch{}}return null}function u(e){return""+e}function r(e){try{u(e);var n=!1}catch{n=!0}if(n){n=console;var d=n.error,h=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return d.call(n,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",h),u(e)}}function a(e){if(e===A)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===m)return"<...>";try{var n=o(e);return n?"<"+n+">":"<...>"}catch{return"<...>"}}function l(){var e=B.A;return e===null?null:e.getOwner()}function v(){return Error("react-stack-top-frame")}function f(e){if(R.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function S(e,n){function d(){x||(x=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",n))}d.isReactWarning=!0,Object.defineProperty(e,"key",{get:d,configurable:!0})}function V(){var e=o(this.type);return w[e]||(w[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function I(e,n,d,h,O,_,ae,ue){return d=_.ref,e={$$typeof:E,type:e,key:n,props:_,_owner:O},(d!==void 0?d:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:V}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:ae}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:ue}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function Z(e,n,d,h,O,_,ae,ue){var y=n.children;if(y!==void 0)if(h)if(C(y)){for(h=0;h<y.length;h++)Q(y[h]);Object.freeze&&Object.freeze(y)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Q(y);if(R.call(n,"key")){y=o(e);var N=Object.keys(n).filter(function(Ve){return Ve!=="key"});h=0<N.length?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}",H[y+h]||(N=0<N.length?"{"+N.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,h,y,N,y),H[y+h]=!0)}if(y=null,d!==void 0&&(r(d),y=""+d),f(n)&&(r(n.key),y=""+n.key),"key"in n){d={};for(var ie in n)ie!=="key"&&(d[ie]=n[ie])}else d=n;return y&&S(d,typeof e=="function"?e.displayName||e.name||"Unknown":e),I(e,y,_,O,l(),d,ae,ue)}function Q(e){typeof e=="object"&&e!==null&&e.$$typeof===E&&e._store&&(e._store.validated=1)}var j=i,E=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),W=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),oe=Symbol.for("react.client.reference"),B=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.prototype.hasOwnProperty,C=Array.isArray,c=console.createTask?console.createTask:function(){return null};j={"react-stack-bottom-frame":function(e){return e()}};var x,w={},T=j["react-stack-bottom-frame"].bind(j,v)(),P=c(a(v)),H={};Y.Fragment=A,Y.jsx=function(e,n,d,h,O){var _=1e4>B.recentlyCreatedOwnerStacks++;return Z(e,n,d,!1,h,O,_?Error("react-stack-top-frame"):T,_?c(a(e)):P)},Y.jsxs=function(e,n,d,h,O){var _=1e4>B.recentlyCreatedOwnerStacks++;return Z(e,n,d,!0,h,O,_?Error("react-stack-top-frame"):T,_?c(a(e)):P)}}()),Y}var ve;function he(){return ve||(ve=1,process.env.NODE_ENV==="production"?G.exports=me():G.exports=pe()),G.exports}var U=he();const s={blend:5,intensity:2,force:1.1,distortion:.4,curl:1.9,radius:.3,swirl:4,pressure:.8,densityDissipation:.96,velocityDissipation:1,fluidColor:"#3300ff",backgroundColor:"#070410",showBackground:!0,rainbow:!1,dyeRes:512,simRes:128,refreshRate:60},J=o=>{const u=new t.Color(o);return new t.Vector3(u.r,u.g,u.b)},ee=(o,u)=>Math.pow(o,u*s.refreshRate);var ye=`uniform sampler2D tFluid;

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
}`;class ge extends se.Effect{constructor(r={}){const a={tFluid:new t.Uniform(r.tFluid),uDistort:new t.Uniform(r.distortion),uRainbow:new t.Uniform(r.rainbow),uIntensity:new t.Uniform(r.intensity),uBlend:new t.Uniform(r.blend),uShowBackground:new t.Uniform(r.showBackground),uColor:new t.Uniform(J(r.fluidColor)),uBackgroundColor:new t.Uniform(J(r.backgroundColor))};super("FluidEffect",ye,{blendFunction:r.blendFunction,uniforms:new Map(Object.entries(a))});fe(this,"state");this.state={...r}}updateUniform(r,a){const l=this.uniforms.get(r);l&&(l.value=a)}update(){this.updateUniform("uIntensity",this.state.intensity),this.updateUniform("uDistort",this.state.distortion),this.updateUniform("uRainbow",this.state.rainbow),this.updateUniform("uBlend",this.state.blend),this.updateUniform("uShowBackground",this.state.showBackground),this.updateUniform("uColor",J(this.state.fluidColor)),this.updateUniform("uBackgroundColor",J(this.state.backgroundColor))}}const xe=i.forwardRef(function(u,r){const a=i.useMemo(()=>new ge(u),[]);return i.useEffect(()=>{a.state={...u},a.update()},[a,u]),i.useEffect(()=>()=>{var l;(l=a.dispose)==null||l.call(a)},[a]),U.jsx("primitive",{ref:r,object:a,dispose:null})}),te=(o,u,r)=>{const a=X.useFBO(o,u,r),l=X.useFBO(o,u,r),v=i.useRef({read:a,write:l,swap:()=>{const f=v.read;v.read=v.write,v.write=f},dispose:()=>{a.dispose(),l.dispose()}}).current;return v},we=()=>{const o=te(s.dyeRes,s.dyeRes,{type:g.HalfFloatType,format:g.RGBAFormat,minFilter:g.LinearFilter,depth:!1}),u=te(s.simRes,s.simRes,{type:g.HalfFloatType,format:g.RGFormat,minFilter:g.LinearFilter,depth:!1}),r=te(s.simRes,s.simRes,{type:g.HalfFloatType,format:g.RedFormat,minFilter:g.NearestFilter,depth:!1}),a=X.useFBO(s.simRes,s.simRes,{type:g.HalfFloatType,format:g.RedFormat,minFilter:g.NearestFilter,depth:!1}),l=X.useFBO(s.simRes,s.simRes,{type:g.HalfFloatType,format:g.RedFormat,minFilter:g.NearestFilter,depth:!1}),v=i.useMemo(()=>({density:o,velocity:u,pressure:r,divergence:a,curl:l}),[l,o,a,r,u]);return i.useEffect(()=>()=>{for(const f of Object.values(v))f.dispose()},[v]),v};var F=`varying vec2 vUv;
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
}`,be=`precision highp float;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uClearValue;

void main() { gl_FragColor = uClearValue * texture2D(uTexture, vUv); }`,Ce=`precision highp float;

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
}`,Se=`precision highp float;

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
}`,Re=`precision highp float;

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
}`,Te=`precision highp float;

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
}`,_e=`varying vec2 vUv;

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
}`,De=`precision highp float;

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
}`,Fe=`precision highp float;

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
}`;const ke=()=>{const o=b.useThree(r=>r.size),u=i.useMemo(()=>{const r=new t.ShaderMaterial({uniforms:{uVelocity:{value:new t.Texture},uSource:{value:new t.Texture},dt:{value:1/s.refreshRate},uDissipation:{value:1},texelSize:{value:new t.Vector2}},fragmentShader:De,vertexShader:F,depthTest:!1,depthWrite:!1}),a=new t.ShaderMaterial({uniforms:{uTexture:{value:new t.Texture},uClearValue:{value:s.pressure},texelSize:{value:new t.Vector2}},fragmentShader:be,vertexShader:F,depthTest:!1,depthWrite:!1}),l=new t.ShaderMaterial({uniforms:{uVelocity:{value:new t.Texture},texelSize:{value:new t.Vector2}},fragmentShader:Ce,vertexShader:F,depthTest:!1,depthWrite:!1}),v=new t.ShaderMaterial({uniforms:{uVelocity:{value:new t.Texture},texelSize:{value:new t.Vector2}},fragmentShader:Se,vertexShader:F,depthTest:!1,depthWrite:!1}),f=new t.ShaderMaterial({uniforms:{uPressure:{value:new t.Texture},uVelocity:{value:new t.Texture},texelSize:{value:new t.Vector2}},fragmentShader:Re,vertexShader:F,depthTest:!1,depthWrite:!1}),S=new t.ShaderMaterial({uniforms:{uPressure:{value:new t.Texture},uDivergence:{value:new t.Texture},texelSize:{value:new t.Vector2}},fragmentShader:Te,vertexShader:F,depthTest:!1,depthWrite:!1}),V=new t.ShaderMaterial({uniforms:{uTarget:{value:new t.Texture},aspectRatio:{value:o.width/o.height},uColor:{value:new t.Vector3},uPointer:{value:new t.Vector2},uRadius:{value:s.radius/100},texelSize:{value:new t.Vector2}},fragmentShader:_e,vertexShader:F,depthTest:!1,depthWrite:!1}),I=new t.ShaderMaterial({uniforms:{uVelocity:{value:new t.Texture},uCurl:{value:new t.Texture},uCurlValue:{value:s.curl},dt:{value:1/s.refreshRate},texelSize:{value:new t.Vector2}},fragmentShader:Fe,vertexShader:F,depthTest:!1,depthWrite:!1});return{splat:V,curl:l,clear:a,divergence:v,pressure:S,gradientSubstract:f,advection:r,vorticity:I}},[o]);return i.useEffect(()=>{for(const r of Object.values(u)){const a=o.width/(o.height+400);r.uniforms.texelSize.value.set(1/(s.simRes*a),1/s.simRes)}return()=>{for(const r of Object.values(u))r.dispose()}},[u,o]),u},Pe=({force:o})=>{const u=b.useThree(f=>f.size),r=i.useRef([]).current,a=i.useRef(new t.Vector2),l=i.useRef(!1);return{onPointerMove:i.useCallback(f=>{const S=f.x-a.current.x,V=f.y-a.current.y;if(!l.current){l.current=!0,a.current.set(f.x,f.y);return}a.current.set(f.x,f.y),r.push({mouseX:f.x/u.width,mouseY:1-f.y/u.height,velocityX:S*o,velocityY:-V*o})},[o,u.height,u.width,r]),splatStack:r}},Oe=({blend:o=s.blend,force:u=s.force,radius:r=s.radius,curl:a=s.curl,swirl:l=s.swirl,intensity:v=s.intensity,distortion:f=s.distortion,fluidColor:S=s.fluidColor,backgroundColor:V=s.backgroundColor,showBackground:I=s.showBackground,rainbow:Z=s.rainbow,pressure:Q=s.pressure,densityDissipation:j=s.densityDissipation,velocityDissipation:E=s.velocityDissipation,blendFunction:re=se.BlendFunction.NORMAL})=>{const A=b.useThree(x=>x.size),D=b.useThree(x=>x.gl),ne=b.useThree(x=>x.camera),L=i.useMemo(()=>new t.Scene,[]),W=i.useMemo(()=>new t.Camera,[]),k=i.useRef(null),K=i.useRef(null),q=i.useRef(new t.Vector2),$=i.useRef(new t.Vector3),m=we(),M=ke(),{onPointerMove:oe,splatStack:B}=Pe({force:u}),R=i.useCallback(x=>{k.current&&(k.current.material=M[x],k.current.material.needsUpdate=!0)},[M]),C=i.useCallback(x=>{const w=m[x];"write"in w?(D.setRenderTarget(w.write),D.clear(),D.render(L,W),w.swap()):(D.setRenderTarget(w),D.clear(),D.render(L,W))},[W,L,m,D]),c=i.useCallback((x,w,T)=>{const P=M[x];P&&P.uniforms[w]&&(P.uniforms[w].value=T)},[M]);return b.useFrame((x,w)=>{if(!(!k.current||!K.current)){k.current.quaternion.copy(ne.quaternion);for(let T=B.length-1;T>=0;T--){const{mouseX:P,mouseY:H,velocityX:e,velocityY:n}=B[T];q.current.set(P,H),$.current.set(e,n,10),R("splat"),c("splat","uTarget",m.velocity.read.texture),c("splat","uPointer",q.current),c("splat","uColor",$.current),c("splat","uRadius",r/100),C("velocity"),c("splat","uTarget",m.density.read.texture),C("density"),B.pop()}R("curl"),c("curl","uVelocity",m.velocity.read.texture),C("curl"),R("vorticity"),c("vorticity","uVelocity",m.velocity.read.texture),c("vorticity","uCurl",m.curl.texture),c("vorticity","uCurlValue",a),C("velocity"),R("divergence"),c("divergence","uVelocity",m.velocity.read.texture),C("divergence"),R("clear"),c("clear","uTexture",m.pressure.read.texture),c("clear","uClearValue",ee(Q,w)),C("pressure"),R("pressure"),c("pressure","uDivergence",m.divergence.texture);for(let T=0;T<l;T++)c("pressure","uPressure",m.pressure.read.texture),C("pressure");R("gradientSubstract"),c("gradientSubstract","uPressure",m.pressure.read.texture),c("gradientSubstract","uVelocity",m.velocity.read.texture),C("velocity"),R("advection"),c("advection","uVelocity",m.velocity.read.texture),c("advection","uSource",m.velocity.read.texture),c("advection","uDissipation",ee(E,w)),C("velocity"),c("advection","uVelocity",m.velocity.read.texture),c("advection","uSource",m.density.read.texture),c("advection","uDissipation",ee(j,w)),C("density")}}),U.jsxs(U.Fragment,{children:[b.createPortal(U.jsx("mesh",{ref:k,onPointerMove:oe,scale:[A.width,A.height,1],children:U.jsx("planeGeometry",{args:[2,2,10,10]})}),L),U.jsx(xe,{blendFunction:re,intensity:v,rainbow:Z,distortion:f,backgroundColor:V,blend:o,fluidColor:S,showBackground:I,ref:K,tFluid:m.density.read.texture})]})};p.Fluid=Oe,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
