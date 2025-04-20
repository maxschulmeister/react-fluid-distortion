(function(h,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("react"),require("@react-three/fiber"),require("postprocessing"),require("three"),require("leva"),require("@react-three/drei")):typeof define=="function"&&define.amd?define(["exports","react","@react-three/fiber","postprocessing","three","leva","@react-three/drei"],u):(h=typeof globalThis<"u"?globalThis:h||self,u(h.reactFluidDistortion={},h.React,h.reactThreeFiber,h.postprocessing,h.THREE,h.leva,h.drei))})(this,function(h,u,S,H,r,ie,$){"use strict";var Ne=Object.defineProperty;var ze=(h,u,S)=>u in h?Ne(h,u,{enumerable:!0,configurable:!0,writable:!0,value:S}):h[u]=S;var oe=(h,u,S)=>ze(h,typeof u!="symbol"?u+"":u,S);function pe(a){const i=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(a){for(const t in a)if(t!=="default"){const n=Object.getOwnPropertyDescriptor(a,t);Object.defineProperty(i,t,n.get?n:{enumerable:!0,get:()=>a[t]})}}return i.default=a,Object.freeze(i)}const w=pe(r);var ee={exports:{}},J={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function he(){if(fe)return J;fe=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function t(n,s,c){var f=null;if(c!==void 0&&(f=""+c),s.key!==void 0&&(f=""+s.key),"key"in s){c={};for(var D in s)D!=="key"&&(c[D]=s[D])}else c=s;return s=c.ref,{$$typeof:a,type:n,key:f,ref:s!==void 0?s:null,props:c}}return J.Fragment=i,J.jsx=t,J.jsxs=t,J}var Z={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function ge(){return ve||(ve=1,process.env.NODE_ENV!=="production"&&function(){function a(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===g?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case G:return"Profiler";case v:return"StrictMode";case K:return"Suspense";case L:return"SuspenseList";case re:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case W:return"Portal";case Q:return(e.displayName||"Context")+".Provider";case k:return(e._context.displayName||"Context")+".Consumer";case j:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return l=e.displayName||null,l!==null?l:a(e.type)||"Memo";case q:l=e._payload,e=e._init;try{return a(e(l))}catch{}}return null}function i(e){return""+e}function t(e){try{i(e);var l=!1}catch{l=!0}if(l){l=console;var m=l.error,x=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return m.call(l,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",x),i(e)}}function n(e){if(e===p)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===q)return"<...>";try{var l=a(e);return l?"<"+l+">":"<...>"}catch{return"<...>"}}function s(){var e=N.A;return e===null?null:e.getOwner()}function c(){return Error("react-stack-top-frame")}function f(e){if(ne.call(e,"key")){var l=Object.getOwnPropertyDescriptor(e,"key").get;if(l&&l.isReactWarning)return!1}return e.key!==void 0}function D(e,l){function m(){F||(F=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",l))}m.isReactWarning=!0,Object.defineProperty(e,"key",{get:m,configurable:!0})}function y(){var e=a(this.type);return d[e]||(d[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function _(e,l,m,x,z,V,se,le){return m=V.ref,e={$$typeof:Y,type:e,key:l,props:V,_owner:z},(m!==void 0?m:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:y}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:se}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:le}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function A(e,l,m,x,z,V,se,le){var b=l.children;if(b!==void 0)if(x)if(E(b)){for(x=0;x<b.length;x++)O(b[x]);Object.freeze&&Object.freeze(b)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else O(b);if(ne.call(l,"key")){b=a(e);var X=Object.keys(l).filter(function(Le){return Le!=="key"});x=0<X.length?"{key: someKey, "+X.join(": ..., ")+": ...}":"{key: someKey}",B[b+x]||(X=0<X.length?"{"+X.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,x,b,X,b),B[b+x]=!0)}if(b=null,m!==void 0&&(t(m),b=""+m),f(l)&&(t(l.key),b=""+l.key),"key"in l){m={};for(var ce in l)ce!=="key"&&(m[ce]=l[ce])}else m=l;return b&&D(m,typeof e=="function"?e.displayName||e.name||"Unknown":e),_(e,b,V,z,s(),m,se,le)}function O(e){typeof e=="object"&&e!==null&&e.$$typeof===Y&&e._store&&(e._store.validated=1)}var P=u,Y=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),g=Symbol.for("react.client.reference"),N=P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=Object.prototype.hasOwnProperty,E=Array.isArray,U=console.createTask?console.createTask:function(){return null};P={"react-stack-bottom-frame":function(e){return e()}};var F,d={},R=P["react-stack-bottom-frame"].bind(P,c)(),T=U(n(c)),B={};Z.Fragment=p,Z.jsx=function(e,l,m,x,z){var V=1e4>N.recentlyCreatedOwnerStacks++;return A(e,l,m,!1,x,z,V?Error("react-stack-top-frame"):R,V?U(n(e)):T)},Z.jsxs=function(e,l,m,x,z){var V=1e4>N.recentlyCreatedOwnerStacks++;return A(e,l,m,!0,x,z,V?Error("react-stack-top-frame"):R,V?U(n(e)):T)}}()),Z}var de;function ye(){return de||(de=1,process.env.NODE_ENV==="production"?ee.exports=he():ee.exports=ge()),ee.exports}var C=ye();const o={blend:5,intensity:2,force:1.1,distortion:.4,curl:1.9,radius:.3,swirl:4,pressure:.8,densityDissipation:.96,velocityDissipation:1,fluidColor:"#3300ff",backgroundColor:"#070410",showBackground:!0,rainbow:!1,dyeRes:512,simRes:128,refreshRate:60},I=a=>{const i=new r.Color(a);return new r.Vector3(i.r,i.g,i.b)},ae=(a,i)=>Math.pow(a,i*o.refreshRate);var xe=`uniform sampler2D tFluid;

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
}`;class be extends H.Effect{constructor(t={}){const n={tFluid:new r.Uniform(t.tFluid),uDistort:new r.Uniform(t.distortion),uRainbow:new r.Uniform(t.rainbow),uIntensity:new r.Uniform(t.intensity),uBlend:new r.Uniform(t.blend),uShowBackground:new r.Uniform(t.showBackground),uColor:new r.Uniform(I(t.fluidColor)),uBackgroundColor:new r.Uniform(I(t.backgroundColor))};super("FluidEffect",xe,{blendFunction:t.blendFunction,uniforms:new Map(Object.entries(n))});oe(this,"state");this.state={...t}}updateUniform(t,n){const s=this.uniforms.get(t);s&&(s.value=n)}update(){this.updateUniform("uIntensity",this.state.intensity),this.updateUniform("uDistort",this.state.distortion),this.updateUniform("uRainbow",this.state.rainbow),this.updateUniform("uBlend",this.state.blend),this.updateUniform("uShowBackground",this.state.showBackground),this.updateUniform("uColor",I(this.state.fluidColor)),this.updateUniform("uBackgroundColor",I(this.state.backgroundColor))}}const we=u.forwardRef(function(i,t){const n=u.useMemo(()=>new be(i),[]);return u.useEffect(()=>{n.state={...i},n.update()},[n,i]),u.useEffect(()=>()=>{var s;(s=n.dispose)==null||s.call(n)},[n]),C.jsx("primitive",{ref:t,object:n,dispose:null})}),me=()=>{const a=()=>t(Object.fromEntries(Object.keys(i).map(n=>[n,o[n]]))),[i,t]=ie.useControls("Settings",()=>({intensity:{value:o.intensity,min:0,max:10,step:.01,label:"intensity"},force:{value:o.force,min:0,max:20,step:.1,label:"force"},distortion:{value:o.distortion,min:0,max:2,step:.01,label:"distortion"},curl:{value:o.curl,min:0,max:50,step:.1,label:"curl"},swirl:{value:o.swirl,min:0,max:20,step:1,label:"swirl"},fluidColor:{value:o.fluidColor,label:"fluid color"},backgroundColor:{value:o.backgroundColor,label:"background color"},blend:{value:o.blend,min:0,max:10,step:.01,label:"blend"},showBackground:{value:o.showBackground,label:"show background"},rainbow:{value:o.rainbow,label:"rainbow mode"},pressure:{value:o.pressure,min:0,max:1,step:.01,label:"pressure reduction"},densityDissipation:{value:o.densityDissipation,min:0,max:1,step:.01,label:"density dissipation"},velocityDissipation:{value:o.velocityDissipation,min:0,max:1,step:.01,label:"velocity dissipation"},radius:{value:o.radius,min:.01,max:1,step:.01,label:"radius"},"reset settings":ie.button(a)}));return i},ue=(a,i,t)=>{const n=$.useFBO(a,i,t),s=$.useFBO(a,i,t),c=u.useRef({read:n,write:s,swap:()=>{const f=c.read;c.read=c.write,c.write=f},dispose:()=>{n.dispose(),s.dispose()}}).current;return c},Ce=()=>{const a=ue(o.dyeRes,o.dyeRes,{type:w.HalfFloatType,format:w.RGBAFormat,minFilter:w.LinearFilter,depth:!1}),i=ue(o.simRes,o.simRes,{type:w.HalfFloatType,format:w.RGFormat,minFilter:w.LinearFilter,depth:!1}),t=ue(o.simRes,o.simRes,{type:w.HalfFloatType,format:w.RedFormat,minFilter:w.NearestFilter,depth:!1}),n=$.useFBO(o.simRes,o.simRes,{type:w.HalfFloatType,format:w.RedFormat,minFilter:w.NearestFilter,depth:!1}),s=$.useFBO(o.simRes,o.simRes,{type:w.HalfFloatType,format:w.RedFormat,minFilter:w.NearestFilter,depth:!1}),c=u.useMemo(()=>({density:a,velocity:i,pressure:t,divergence:n,curl:s}),[s,a,n,t,i]);return u.useEffect(()=>()=>{for(const f of Object.values(c))f.dispose()},[c]),c};var M=`varying vec2 vUv;
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
}`,Re=`precision highp float;

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
}`,De=`precision highp float;

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
}`,Fe=`varying vec2 vUv;

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
}`,Pe=`precision highp float;

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
}`,Ue=`precision highp float;

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
}`;const ke=()=>{const a=S.useThree(t=>t.size),i=u.useMemo(()=>{const t=new r.ShaderMaterial({uniforms:{uVelocity:{value:new r.Texture},uSource:{value:new r.Texture},dt:{value:1/o.refreshRate},uDissipation:{value:1},texelSize:{value:new r.Vector2}},fragmentShader:Pe,vertexShader:M,depthTest:!1,depthWrite:!1}),n=new r.ShaderMaterial({uniforms:{uTexture:{value:new r.Texture},uClearValue:{value:o.pressure},texelSize:{value:new r.Vector2}},fragmentShader:Re,vertexShader:M,depthTest:!1,depthWrite:!1}),s=new r.ShaderMaterial({uniforms:{uVelocity:{value:new r.Texture},texelSize:{value:new r.Vector2}},fragmentShader:Se,vertexShader:M,depthTest:!1,depthWrite:!1}),c=new r.ShaderMaterial({uniforms:{uVelocity:{value:new r.Texture},texelSize:{value:new r.Vector2}},fragmentShader:De,vertexShader:M,depthTest:!1,depthWrite:!1}),f=new r.ShaderMaterial({uniforms:{uPressure:{value:new r.Texture},uVelocity:{value:new r.Texture},texelSize:{value:new r.Vector2}},fragmentShader:Te,vertexShader:M,depthTest:!1,depthWrite:!1}),D=new r.ShaderMaterial({uniforms:{uPressure:{value:new r.Texture},uDivergence:{value:new r.Texture},texelSize:{value:new r.Vector2}},fragmentShader:_e,vertexShader:M,depthTest:!1,depthWrite:!1}),y=new r.ShaderMaterial({uniforms:{uTarget:{value:new r.Texture},aspectRatio:{value:a.width/a.height},uColor:{value:new r.Vector3},uPointer:{value:new r.Vector2},uRadius:{value:o.radius/100},texelSize:{value:new r.Vector2}},fragmentShader:Fe,vertexShader:M,depthTest:!1,depthWrite:!1}),_=new r.ShaderMaterial({uniforms:{uVelocity:{value:new r.Texture},uCurl:{value:new r.Texture},uCurlValue:{value:o.curl},dt:{value:1/o.refreshRate},texelSize:{value:new r.Vector2}},fragmentShader:Ue,vertexShader:M,depthTest:!1,depthWrite:!1});return{splat:y,curl:s,clear:n,divergence:c,pressure:D,gradientSubstract:f,advection:t,vorticity:_}},[a]);return u.useEffect(()=>{for(const t of Object.values(i)){const n=a.width/(a.height+400);t.uniforms.texelSize.value.set(1/(o.simRes*n),1/o.simRes)}return()=>{for(const t of Object.values(i))t.dispose()}},[i,a]),i},Be=({force:a})=>{const i=S.useThree(f=>f.size),t=u.useRef([]).current,n=u.useRef(new r.Vector2),s=u.useRef(!1);return{onPointerMove:u.useCallback(f=>{const D=f.x-n.current.x,y=f.y-n.current.y;if(!s.current){s.current=!0,n.current.set(f.x,f.y);return}n.current.set(f.x,f.y),t.push({mouseX:f.x/i.width,mouseY:1-f.y/i.height,velocityX:D*a,velocityY:-y*a})},[a,i.height,i.width,t]),splatStack:t}},Oe=({blend:a=o.blend,force:i=o.force,radius:t=o.radius,curl:n=o.curl,swirl:s=o.swirl,intensity:c=o.intensity,distortion:f=o.distortion,fluidColor:D=o.fluidColor,backgroundColor:y=o.backgroundColor,showBackground:_=o.showBackground,rainbow:A=o.rainbow,pressure:O=o.pressure,densityDissipation:P=o.densityDissipation,velocityDissipation:Y=o.velocityDissipation,blendFunction:W=H.BlendFunction.NORMAL,controls:p=!1})=>{const v=p?me():{},G=S.useThree(R=>R.size),k=S.useThree(R=>R.gl),Q=S.useThree(R=>R.camera),j=u.useMemo(()=>new r.Scene,[]),K=u.useMemo(()=>new r.Camera,[]),L=u.useRef(null),te=u.useRef(null),q=u.useRef(new r.Vector2),re=u.useRef(new r.Vector3),g=Ce(),N=ke(),{onPointerMove:ne,splatStack:E}=Be({force:i}),U=u.useCallback(R=>{L.current&&(L.current.material=N[R],L.current.material.needsUpdate=!0)},[N]),F=u.useCallback(R=>{const T=g[R];"write"in T?(k.setRenderTarget(T.write),k.clear(),k.render(j,K),T.swap()):(k.setRenderTarget(T),k.clear(),k.render(j,K))},[K,j,g,k]),d=u.useCallback((R,T,B)=>{const e=N[R];e&&e.uniforms[T]&&(e.uniforms[T].value=B)},[N]);return S.useFrame((R,T)=>{if(!(!L.current||!te.current)){L.current.quaternion.copy(Q.quaternion);for(let B=E.length-1;B>=0;B--){const{mouseX:e,mouseY:l,velocityX:m,velocityY:x}=E[B];q.current.set(e,l),re.current.set(m,x,10),U("splat"),d("splat","uTarget",g.velocity.read.texture),d("splat","uPointer",q.current),d("splat","uColor",re.current),d("splat","uRadius",t/100),F("velocity"),d("splat","uTarget",g.density.read.texture),F("density"),E.pop()}U("curl"),d("curl","uVelocity",g.velocity.read.texture),F("curl"),U("vorticity"),d("vorticity","uVelocity",g.velocity.read.texture),d("vorticity","uCurl",g.curl.texture),d("vorticity","uCurlValue",n),F("velocity"),U("divergence"),d("divergence","uVelocity",g.velocity.read.texture),F("divergence"),U("clear"),d("clear","uTexture",g.pressure.read.texture),d("clear","uClearValue",ae(O,T)),F("pressure"),U("pressure"),d("pressure","uDivergence",g.divergence.texture);for(let B=0;B<s;B++)d("pressure","uPressure",g.pressure.read.texture),F("pressure");U("gradientSubstract"),d("gradientSubstract","uPressure",g.pressure.read.texture),d("gradientSubstract","uVelocity",g.velocity.read.texture),F("velocity"),U("advection"),d("advection","uVelocity",g.velocity.read.texture),d("advection","uSource",g.velocity.read.texture),d("advection","uDissipation",ae(Y,T)),F("velocity"),d("advection","uVelocity",g.velocity.read.texture),d("advection","uSource",g.density.read.texture),d("advection","uDissipation",ae(P,T)),F("density")}}),C.jsxs(C.Fragment,{children:[p&&C.jsx(C.Fragment,{}),S.createPortal(C.jsx("mesh",{ref:L,onPointerMove:ne,scale:[G.width,G.height,1],children:C.jsx("planeGeometry",{args:[2,2,10,10]})}),j),C.jsx(we,{blendFunction:W,intensity:p&&v.intensity!==void 0?v.intensity:c,rainbow:p&&v.rainbow!==void 0?v.rainbow:A,distortion:p&&v.distortion!==void 0?v.distortion:f,backgroundColor:p&&v.backgroundColor!==void 0?v.backgroundColor:y,blend:p&&v.blend!==void 0?v.blend:a,fluidColor:p&&v.fluidColor!==void 0?v.fluidColor:D,showBackground:p&&v.showBackground!==void 0?v.showBackground:_,ref:te,tFluid:g.density.read.texture})]})};var je=`uniform sampler2D tTarget;
uniform vec2 uMouse;
uniform float uRadius;
uniform float uStrength;
uniform vec3 uTintColor;
uniform float uTintIntensity;
uniform float uAspectRatio;
uniform float uInvert;
uniform float uRadial;

float circle(vec2 uv, vec2 circlePosition, float radius, float aspectRatio) {
    vec2 scaledUV = vec2(uv.x * aspectRatio, uv.y);
    vec2 scaledCirclePos = vec2(circlePosition.x * aspectRatio, circlePosition.y);
    float dist = distance(scaledUV, scaledCirclePos);
    return 1.0 - smoothstep(0.0, radius, dist);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 mousePos = uMouse * 0.5 + 0.5;
    float bulge = circle(uv, mousePos, uRadius, uAspectRatio);

    
    vec2 dir = uv - mousePos;
    vec2 normDir = normalize(dir);
    float signDir = mix(1.0, -1.0, uInvert);
    vec2 dirUv = uv - normDir * bulge * uStrength * 0.15 * signDir;

    
    float dist = length(dir);
    vec2 normDir2 = dir / (dist + 1e-6);
    float delta = uStrength - 1.0;
    float adjDelta = mix(delta, -delta, uInvert);
    float scale = 1.0 + bulge * adjDelta;
    vec2 radialUv = mousePos + normDir2 * dist * scale;

    
    vec2 finalUv = mix(dirUv, radialUv, uRadial);

    vec4 sampleColor = texture2D(inputBuffer, finalUv);
    vec4 tintedColor = mix(sampleColor, vec4(uTintColor, 1.0), bulge * uTintIntensity);
    outputColor = tintedColor;
}`;class Ve extends H.Effect{constructor(t={}){const n=new r.Vector2(.5,.5),s={tTarget:new r.Uniform(t.tTarget||null),uMouse:new r.Uniform(n),uRadius:new r.Uniform(t.radius||.5),uStrength:new r.Uniform(t.strength||.7),uTintColor:new r.Uniform(I(t.tint||"#fff")),uTintIntensity:new r.Uniform(t.intensity||0),uAspectRatio:new r.Uniform(t.aspectRatio||1),uInvert:new r.Uniform(t.invert!==void 0?t.invert?1:0:1),uRadial:new r.Uniform(t.radial!==void 0?t.radial?1:0:1)};super("BulgeEffect",je,{blendFunction:t.blendFunction,uniforms:new Map(Object.entries(s))});oe(this,"state");oe(this,"mousePosition");this.mousePosition=n,this.state={...t}}updateUniform(t,n){const s=this.uniforms.get(t);s&&(s.value=n)}setMousePosition(t){this.mousePosition.copy(t),this.updateUniform("uMouse",this.mousePosition)}update(){this.updateUniform("uRadius",this.state.radius||.5),this.updateUniform("uStrength",this.state.strength||.7),this.state.tint?this.updateUniform("uTintColor",I(this.state.tint)):this.updateUniform("uTintColor",I("#fff")),this.state.intensity!==void 0?this.updateUniform("uTintIntensity",this.state.intensity):this.updateUniform("uTintIntensity",0),this.state.aspectRatio!==void 0&&this.updateUniform("uAspectRatio",this.state.aspectRatio),this.updateUniform("uInvert",this.state.invert!==void 0?this.state.invert?1:0:1),this.updateUniform("uRadial",this.state.radial!==void 0?this.state.radial?1:0:1)}}const Me=u.forwardRef(function(i,t){const n=u.useMemo(()=>new Ve(i),[]);return u.useEffect(()=>{n.state={...i},n.update()},[n,i]),u.useEffect(()=>()=>{var s;(s=n.dispose)==null||s.call(n)},[n]),C.jsx("primitive",{ref:t,object:n,dispose:null})}),Ae=({radius:a=.5,strength:i=1.5,lerp:t=.075,tint:n="#fff",intensity:s=0,blendFunction:c=H.BlendFunction.NORMAL,invert:f=!0,radial:D=!0,controls:y=!1})=>{const _=u.useRef(null),A=u.useRef(null),O=u.useRef(new r.Vector2(0,0)),{viewport:P,camera:Y}=S.useThree(),W=u.useMemo(()=>P.width/P.height,[P]),p={radius:.5,strength:1.5,lerp:.075,tint:"#fff",intensity:0,invert:!0,radial:!0},v=y?ie.useControls("Bulge Effect",{radius:{value:p.radius,min:.1,max:1,step:.01,label:"Radius"},strength:{value:p.strength,min:.1,max:3,step:.1,label:"Strength"},lerp:{value:p.lerp,min:.01,max:1,step:.01,label:"Smoothness"},tint:{value:p.tint,label:"Tint"},intensity:{value:p.intensity,min:0,max:1,step:.01,label:"Intensity"},invert:{value:p.invert,label:"Invert"},radial:{value:p.radial,label:"Radial Mode"}}):{};return S.useFrame(G=>{if(_.current){const{x:k,y:Q}=G.mouse;let j=t;y&&typeof v.lerp=="number"&&(j=v.lerp),O.current.x+=(k-O.current.x)*j,O.current.y+=(Q-O.current.y)*j,_.current.setMousePosition(O.current),_.current.state.aspectRatio=W,_.current.state.invert=y?v.invert:f,_.current.state.radial=y?v.radial:D,_.current.update()}A.current&&A.current.quaternion.copy(Y.quaternion)}),C.jsxs(C.Fragment,{children:[C.jsxs("mesh",{ref:A,renderOrder:1e3,position:[0,0,0],scale:[P.width,P.height,1],children:[C.jsx("planeGeometry",{args:[1,1]}),C.jsx("meshBasicMaterial",{transparent:!0,opacity:0,depthTest:!1})]}),C.jsx(Me,{ref:_,radius:y?v.radius:a,strength:y?v.strength:i,tint:y?v.tint:n,intensity:y?v.intensity:s,blendFunction:c,aspectRatio:W,invert:y?v.invert:f,radial:y?v.radial:D})]})};h.Bulge=Ae,h.Fluid=Oe,h.useConfig=me,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
