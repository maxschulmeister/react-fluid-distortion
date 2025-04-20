var Te = Object.defineProperty;
var Se = (o, n, t) => n in o ? Te(o, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[n] = t;
var oe = (o, n, t) => Se(o, typeof n != "symbol" ? n + "" : n, t);
import De, { forwardRef as ye, useMemo as Y, useEffect as H, useRef as U, useCallback as ue } from "react";
import { useThree as X, useFrame as xe, createPortal as Ee } from "@react-three/fiber";
import { Effect as Re, BlendFunction as be } from "postprocessing";
import * as R from "three";
import { Color as _e, Vector3 as me, Uniform as h, ShaderMaterial as N, Vector2 as D, Texture as P, Scene as Pe, Camera as Fe } from "three";
import { useControls as we, button as ke } from "leva";
import { useFBO as se } from "@react-three/drei";
var ae = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function Ue() {
  if (pe) return ee;
  pe = 1;
  var o = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(r, a, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      s = {};
      for (var w in a)
        w !== "key" && (s[w] = a[w]);
    } else s = a;
    return a = s.ref, {
      $$typeof: o,
      type: r,
      key: l,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return ee.Fragment = n, ee.jsx = t, ee.jsxs = t, ee;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function Be() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === m ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case d:
          return "Fragment";
        case q:
          return "Profiler";
        case c:
          return "StrictMode";
        case Z:
          return "Suspense";
        case A:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case $:
            return "Portal";
          case J:
            return (e.displayName || "Context") + ".Provider";
          case F:
            return (e._context.displayName || "Context") + ".Consumer";
          case O:
            var u = e.render;
            return e = e.displayName, e || (e = u.displayName || u.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case re:
            return u = e.displayName || null, u !== null ? u : o(e.type) || "Memo";
          case Q:
            u = e._payload, e = e._init;
            try {
              return o(e(u));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function t(e) {
      try {
        n(e);
        var u = !1;
      } catch {
        u = !0;
      }
      if (u) {
        u = console;
        var f = u.error, g = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return f.call(
          u,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          g
        ), n(e);
      }
    }
    function r(e) {
      if (e === d) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Q)
        return "<...>";
      try {
        var u = o(e);
        return u ? "<" + u + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = L.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(e) {
      if (ie.call(e, "key")) {
        var u = Object.getOwnPropertyDescriptor(e, "key").get;
        if (u && u.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function w(e, u) {
      function f() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          u
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: f,
        configurable: !0
      });
    }
    function p() {
      var e = o(this.type);
      return v[e] || (v[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, u, f, g, M, j, le, ce) {
      return f = j.ref, e = {
        $$typeof: W,
        type: e,
        key: u,
        props: j,
        _owner: M
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function V(e, u, f, g, M, j, le, ce) {
      var y = u.children;
      if (y !== void 0)
        if (g)
          if (K(y)) {
            for (g = 0; g < y.length; g++)
              B(y[g]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else B(y);
      if (ie.call(u, "key")) {
        y = o(e);
        var G = Object.keys(u).filter(function(Ce) {
          return Ce !== "key";
        });
        g = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", k[y + g] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          g,
          y,
          G,
          y
        ), k[y + g] = !0);
      }
      if (y = null, f !== void 0 && (t(f), y = "" + f), l(u) && (t(u.key), y = "" + u.key), "key" in u) {
        f = {};
        for (var ve in u)
          ve !== "key" && (f[ve] = u[ve]);
      } else f = u;
      return y && w(
        f,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        y,
        j,
        M,
        a(),
        f,
        le,
        ce
      );
    }
    function B(e) {
      typeof e == "object" && e !== null && e.$$typeof === W && e._store && (e._store.validated = 1);
    }
    var E = De, W = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), J = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), m = Symbol.for("react.client.reference"), L = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = Object.prototype.hasOwnProperty, K = Array.isArray, _ = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var S, v = {}, x = E["react-stack-bottom-frame"].bind(
      E,
      s
    )(), C = _(r(s)), k = {};
    te.Fragment = d, te.jsx = function(e, u, f, g, M) {
      var j = 1e4 > L.recentlyCreatedOwnerStacks++;
      return V(
        e,
        u,
        f,
        !1,
        g,
        M,
        j ? Error("react-stack-top-frame") : x,
        j ? _(r(e)) : C
      );
    }, te.jsxs = function(e, u, f, g, M) {
      var j = 1e4 > L.recentlyCreatedOwnerStacks++;
      return V(
        e,
        u,
        f,
        !0,
        g,
        M,
        j ? Error("react-stack-top-frame") : x,
        j ? _(r(e)) : C
      );
    };
  }()), te;
}
var he;
function Oe() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? ae.exports = Ue() : ae.exports = Be()), ae.exports;
}
var b = Oe();
const i = {
  blend: 5,
  intensity: 2,
  force: 1.1,
  distortion: 0.4,
  curl: 1.9,
  radius: 0.3,
  swirl: 4,
  pressure: 0.8,
  densityDissipation: 0.96,
  velocityDissipation: 1,
  fluidColor: "#3300ff",
  backgroundColor: "#070410",
  showBackground: !0,
  rainbow: !1,
  dyeRes: 512,
  simRes: 128,
  refreshRate: 60
}, I = (o) => {
  const n = new _e(o);
  return new me(n.r, n.g, n.b);
}, fe = (o, n) => Math.pow(o, n * i.refreshRate);
var je = `uniform sampler2D tFluid;

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
}`;
class Ve extends Re {
  constructor(t = {}) {
    const r = {
      tFluid: new h(t.tFluid),
      uDistort: new h(t.distortion),
      uRainbow: new h(t.rainbow),
      uIntensity: new h(t.intensity),
      uBlend: new h(t.blend),
      uShowBackground: new h(t.showBackground),
      uColor: new h(I(t.fluidColor)),
      uBackgroundColor: new h(I(t.backgroundColor))
    };
    super("FluidEffect", je, {
      blendFunction: t.blendFunction,
      uniforms: new Map(Object.entries(r))
    });
    oe(this, "state");
    this.state = {
      ...t
    };
  }
  updateUniform(t, r) {
    const a = this.uniforms.get(t);
    a && (a.value = r);
  }
  update() {
    this.updateUniform("uIntensity", this.state.intensity), this.updateUniform("uDistort", this.state.distortion), this.updateUniform("uRainbow", this.state.rainbow), this.updateUniform("uBlend", this.state.blend), this.updateUniform("uShowBackground", this.state.showBackground), this.updateUniform("uColor", I(this.state.fluidColor)), this.updateUniform("uBackgroundColor", I(this.state.backgroundColor));
  }
}
const Ae = ye(function(n, t) {
  const r = Y(() => new Ve(n), []);
  return H(() => {
    r.state = { ...n }, r.update();
  }, [r, n]), H(() => () => {
    var a;
    (a = r.dispose) == null || a.call(r);
  }, [r]), /* @__PURE__ */ b.jsx("primitive", { ref: t, object: r, dispose: null });
}), Le = () => {
  const o = () => t(
    Object.fromEntries(
      Object.keys(n).map((r) => [r, i[r]])
    )
  ), [n, t] = we("Settings", () => ({
    intensity: {
      value: i.intensity,
      min: 0,
      max: 10,
      step: 0.01,
      label: "intensity"
    },
    force: {
      value: i.force,
      min: 0,
      max: 20,
      step: 0.1,
      label: "force"
    },
    distortion: {
      value: i.distortion,
      min: 0,
      max: 2,
      step: 0.01,
      label: "distortion"
    },
    curl: {
      value: i.curl,
      min: 0,
      max: 50,
      step: 0.1,
      label: "curl"
    },
    swirl: {
      value: i.swirl,
      min: 0,
      max: 20,
      step: 1,
      label: "swirl"
    },
    fluidColor: {
      value: i.fluidColor,
      label: "fluid color"
    },
    backgroundColor: {
      value: i.backgroundColor,
      label: "background color"
    },
    blend: {
      value: i.blend,
      min: 0,
      max: 10,
      step: 0.01,
      label: "blend"
    },
    showBackground: {
      value: i.showBackground,
      label: "show background"
    },
    rainbow: {
      value: i.rainbow,
      label: "rainbow mode"
    },
    pressure: {
      value: i.pressure,
      min: 0,
      max: 1,
      step: 0.01,
      label: "pressure reduction"
    },
    densityDissipation: {
      value: i.densityDissipation,
      min: 0,
      max: 1,
      step: 0.01,
      label: "density dissipation"
    },
    velocityDissipation: {
      value: i.velocityDissipation,
      min: 0,
      max: 1,
      step: 0.01,
      label: "velocity dissipation"
    },
    radius: {
      value: i.radius,
      min: 0.01,
      max: 1,
      step: 0.01,
      label: "radius"
    },
    "reset settings": ke(o)
  }));
  return n;
}, de = (o, n, t) => {
  const r = se(o, n, t), a = se(o, n, t), s = U({
    read: r,
    write: a,
    swap: () => {
      const l = s.read;
      s.read = s.write, s.write = l;
    },
    dispose: () => {
      r.dispose(), a.dispose();
    }
  }).current;
  return s;
}, Me = () => {
  const o = de(i.dyeRes, i.dyeRes, {
    type: R.HalfFloatType,
    format: R.RGBAFormat,
    minFilter: R.LinearFilter,
    depth: !1
  }), n = de(i.simRes, i.simRes, {
    type: R.HalfFloatType,
    format: R.RGFormat,
    minFilter: R.LinearFilter,
    depth: !1
  }), t = de(i.simRes, i.simRes, {
    type: R.HalfFloatType,
    format: R.RedFormat,
    minFilter: R.NearestFilter,
    depth: !1
  }), r = se(i.simRes, i.simRes, {
    type: R.HalfFloatType,
    format: R.RedFormat,
    minFilter: R.NearestFilter,
    depth: !1
  }), a = se(i.simRes, i.simRes, {
    type: R.HalfFloatType,
    format: R.RedFormat,
    minFilter: R.NearestFilter,
    depth: !1
  }), s = Y(() => ({
    density: o,
    velocity: n,
    pressure: t,
    divergence: r,
    curl: a
  }), [a, o, r, t, n]);
  return H(() => () => {
    for (const l of Object.values(s))
      l.dispose();
  }, [s]), s;
};
var z = `varying vec2 vUv;
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
}`, Ne = `precision highp float;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uClearValue;

void main() { gl_FragColor = uClearValue * texture2D(uTexture, vUv); }`, ze = `precision highp float;

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
}`, Ie = `precision highp float;

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
}`, Ye = `precision highp float;

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
}`, We = `precision highp float;

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
}`, $e = `varying vec2 vUv;

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
}`, qe = `precision highp float;

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
}`, Ge = `precision highp float;

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
}`;
const Xe = () => {
  const o = X((t) => t.size), n = Y(() => {
    const t = new N({
      uniforms: {
        uVelocity: {
          value: new P()
        },
        uSource: {
          value: new P()
        },
        dt: {
          value: 1 / i.refreshRate
        },
        uDissipation: {
          value: 1
        },
        texelSize: { value: new D() }
      },
      fragmentShader: qe,
      vertexShader: z,
      depthTest: !1,
      depthWrite: !1
    }), r = new N({
      uniforms: {
        uTexture: {
          value: new P()
        },
        uClearValue: {
          value: i.pressure
        },
        texelSize: {
          value: new D()
        }
      },
      fragmentShader: Ne,
      vertexShader: z,
      depthTest: !1,
      depthWrite: !1
    }), a = new N({
      uniforms: {
        uVelocity: {
          value: new P()
        },
        texelSize: {
          value: new D()
        }
      },
      fragmentShader: ze,
      vertexShader: z,
      depthTest: !1,
      depthWrite: !1
    }), s = new N({
      uniforms: {
        uVelocity: {
          value: new P()
        },
        texelSize: {
          value: new D()
        }
      },
      fragmentShader: Ie,
      vertexShader: z,
      depthTest: !1,
      depthWrite: !1
    }), l = new N({
      uniforms: {
        uPressure: {
          value: new P()
        },
        uVelocity: {
          value: new P()
        },
        texelSize: {
          value: new D()
        }
      },
      fragmentShader: Ye,
      vertexShader: z,
      depthTest: !1,
      depthWrite: !1
    }), w = new N({
      uniforms: {
        uPressure: {
          value: new P()
        },
        uDivergence: {
          value: new P()
        },
        texelSize: {
          value: new D()
        }
      },
      fragmentShader: We,
      vertexShader: z,
      depthTest: !1,
      depthWrite: !1
    }), p = new N({
      uniforms: {
        uTarget: {
          value: new P()
        },
        aspectRatio: {
          value: o.width / o.height
        },
        uColor: {
          value: new me()
        },
        uPointer: {
          value: new D()
        },
        uRadius: {
          value: i.radius / 100
        },
        texelSize: {
          value: new D()
        }
      },
      fragmentShader: $e,
      vertexShader: z,
      depthTest: !1,
      depthWrite: !1
    }), T = new N({
      uniforms: {
        uVelocity: {
          value: new P()
        },
        uCurl: {
          value: new P()
        },
        uCurlValue: {
          value: i.curl
        },
        dt: {
          value: 1 / i.refreshRate
        },
        texelSize: {
          value: new D()
        }
      },
      fragmentShader: Ge,
      vertexShader: z,
      depthTest: !1,
      depthWrite: !1
    });
    return {
      splat: p,
      curl: a,
      clear: r,
      divergence: s,
      pressure: w,
      gradientSubstract: l,
      advection: t,
      vorticity: T
    };
  }, [o]);
  return H(() => {
    for (const t of Object.values(n)) {
      const r = o.width / (o.height + 400);
      t.uniforms.texelSize.value.set(1 / (i.simRes * r), 1 / i.simRes);
    }
    return () => {
      for (const t of Object.values(n))
        t.dispose();
    };
  }, [n, o]), n;
}, He = ({ force: o }) => {
  const n = X((l) => l.size), t = U([]).current, r = U(new D()), a = U(!1);
  return { onPointerMove: ue(
    (l) => {
      const w = l.x - r.current.x, p = l.y - r.current.y;
      if (!a.current) {
        a.current = !0, r.current.set(l.x, l.y);
        return;
      }
      r.current.set(l.x, l.y), t.push({
        mouseX: l.x / n.width,
        mouseY: 1 - l.y / n.height,
        velocityX: w * o,
        velocityY: -p * o
      });
    },
    [o, n.height, n.width, t]
  ), splatStack: t };
}, at = ({
  blend: o = i.blend,
  force: n = i.force,
  radius: t = i.radius,
  curl: r = i.curl,
  swirl: a = i.swirl,
  intensity: s = i.intensity,
  distortion: l = i.distortion,
  fluidColor: w = i.fluidColor,
  backgroundColor: p = i.backgroundColor,
  showBackground: T = i.showBackground,
  rainbow: V = i.rainbow,
  pressure: B = i.pressure,
  densityDissipation: E = i.densityDissipation,
  velocityDissipation: W = i.velocityDissipation,
  blendFunction: $ = be.NORMAL,
  controls: d = !1
}) => {
  const c = d ? Le() : {}, q = X((x) => x.size), F = X((x) => x.gl), J = X((x) => x.camera), O = Y(() => new Pe(), []), Z = Y(() => new Fe(), []), A = U(null), re = U(null), Q = U(new D()), ne = U(new me()), m = Me(), L = Xe(), { onPointerMove: ie, splatStack: K } = He({ force: n }), _ = ue(
    (x) => {
      A.current && (A.current.material = L[x], A.current.material.needsUpdate = !0);
    },
    [L]
  ), S = ue(
    (x) => {
      const C = m[x];
      "write" in C ? (F.setRenderTarget(C.write), F.clear(), F.render(O, Z), C.swap()) : (F.setRenderTarget(C), F.clear(), F.render(O, Z));
    },
    [Z, O, m, F]
  ), v = ue(
    (x, C, k) => {
      const e = L[x];
      e && e.uniforms[C] && (e.uniforms[C].value = k);
    },
    [L]
  );
  return xe((x, C) => {
    if (!(!A.current || !re.current)) {
      A.current.quaternion.copy(J.quaternion);
      for (let k = K.length - 1; k >= 0; k--) {
        const { mouseX: e, mouseY: u, velocityX: f, velocityY: g } = K[k];
        Q.current.set(e, u), ne.current.set(f, g, 10), _("splat"), v("splat", "uTarget", m.velocity.read.texture), v("splat", "uPointer", Q.current), v("splat", "uColor", ne.current), v("splat", "uRadius", t / 100), S("velocity"), v("splat", "uTarget", m.density.read.texture), S("density"), K.pop();
      }
      _("curl"), v("curl", "uVelocity", m.velocity.read.texture), S("curl"), _("vorticity"), v("vorticity", "uVelocity", m.velocity.read.texture), v("vorticity", "uCurl", m.curl.texture), v("vorticity", "uCurlValue", r), S("velocity"), _("divergence"), v("divergence", "uVelocity", m.velocity.read.texture), S("divergence"), _("clear"), v("clear", "uTexture", m.pressure.read.texture), v("clear", "uClearValue", fe(B, C)), S("pressure"), _("pressure"), v("pressure", "uDivergence", m.divergence.texture);
      for (let k = 0; k < a; k++)
        v("pressure", "uPressure", m.pressure.read.texture), S("pressure");
      _("gradientSubstract"), v("gradientSubstract", "uPressure", m.pressure.read.texture), v("gradientSubstract", "uVelocity", m.velocity.read.texture), S("velocity"), _("advection"), v("advection", "uVelocity", m.velocity.read.texture), v("advection", "uSource", m.velocity.read.texture), v("advection", "uDissipation", fe(W, C)), S("velocity"), v("advection", "uVelocity", m.velocity.read.texture), v("advection", "uSource", m.density.read.texture), v("advection", "uDissipation", fe(E, C)), S("density");
    }
  }), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    d && /* @__PURE__ */ b.jsx(b.Fragment, {}),
    Ee(
      /* @__PURE__ */ b.jsx(
        "mesh",
        {
          ref: A,
          onPointerMove: ie,
          scale: [q.width, q.height, 1],
          children: /* @__PURE__ */ b.jsx("planeGeometry", { args: [2, 2, 10, 10] })
        }
      ),
      O
    ),
    /* @__PURE__ */ b.jsx(
      Ae,
      {
        blendFunction: $,
        intensity: d && c.intensity !== void 0 ? c.intensity : s,
        rainbow: d && c.rainbow !== void 0 ? c.rainbow : V,
        distortion: d && c.distortion !== void 0 ? c.distortion : l,
        backgroundColor: d && c.backgroundColor !== void 0 ? c.backgroundColor : p,
        blend: d && c.blend !== void 0 ? c.blend : o,
        fluidColor: d && c.fluidColor !== void 0 ? c.fluidColor : w,
        showBackground: d && c.showBackground !== void 0 ? c.showBackground : T,
        ref: re,
        tFluid: m.density.read.texture
      }
    )
  ] });
};
var Je = `uniform sampler2D tTarget;
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
}`;
class Ze extends Re {
  constructor(t = {}) {
    const r = new D(0.5, 0.5), a = {
      tTarget: new h(t.tTarget || null),
      uMouse: new h(r),
      uRadius: new h(t.radius || 0.5),
      uStrength: new h(t.strength || 0.7),
      uTintColor: new h(I(t.tint || "#fff")),
      uTintIntensity: new h(t.intensity || 0),
      uAspectRatio: new h(t.aspectRatio || 1),
      uInvert: new h(t.invert !== void 0 ? t.invert ? 1 : 0 : 1),
      uRadial: new h(t.radial !== void 0 ? t.radial ? 1 : 0 : 1)
    };
    super("BulgeEffect", Je, {
      blendFunction: t.blendFunction,
      uniforms: new Map(Object.entries(a))
    });
    oe(this, "state");
    oe(this, "mousePosition");
    this.mousePosition = r, this.state = { ...t };
  }
  updateUniform(t, r) {
    const a = this.uniforms.get(t);
    a && (a.value = r);
  }
  setMousePosition(t) {
    this.mousePosition.copy(t), this.updateUniform("uMouse", this.mousePosition);
  }
  update() {
    this.updateUniform("uRadius", this.state.radius || 0.5), this.updateUniform("uStrength", this.state.strength || 0.7), this.state.tint ? this.updateUniform("uTintColor", I(this.state.tint)) : this.updateUniform("uTintColor", I("#fff")), this.state.intensity !== void 0 ? this.updateUniform("uTintIntensity", this.state.intensity) : this.updateUniform("uTintIntensity", 0), this.state.aspectRatio !== void 0 && this.updateUniform("uAspectRatio", this.state.aspectRatio), this.updateUniform(
      "uInvert",
      this.state.invert !== void 0 ? this.state.invert ? 1 : 0 : 1
    ), this.updateUniform(
      "uRadial",
      this.state.radial !== void 0 ? this.state.radial ? 1 : 0 : 1
    );
  }
}
const Qe = ye(function(n, t) {
  const r = Y(() => new Ze(n), []);
  return H(() => {
    r.state = { ...n }, r.update();
  }, [r, n]), H(() => () => {
    var a;
    (a = r.dispose) == null || a.call(r);
  }, [r]), /* @__PURE__ */ b.jsx("primitive", { ref: t, object: r, dispose: null });
}), ut = ({
  radius: o = 0.5,
  strength: n = 1.5,
  lerp: t = 0.075,
  tint: r = "#fff",
  intensity: a = 0,
  blendFunction: s = be.NORMAL,
  invert: l = !0,
  radial: w = !0,
  controls: p = !1
}) => {
  const T = U(null), V = U(null), B = U(new D(0, 0)), { viewport: E, camera: W } = X(), $ = Y(() => E.width / E.height, [E]), d = {
    radius: 0.5,
    strength: 1.5,
    lerp: 0.075,
    tint: "#fff",
    intensity: 0,
    invert: !0,
    radial: !0
  }, c = p ? we("Bulge Effect", {
    radius: {
      value: d.radius,
      min: 0.1,
      max: 1,
      step: 0.01,
      label: "Radius"
    },
    strength: {
      value: d.strength,
      min: 0.1,
      max: 3,
      step: 0.1,
      label: "Strength"
    },
    lerp: {
      value: d.lerp,
      min: 0.01,
      max: 1,
      step: 0.01,
      label: "Smoothness"
    },
    tint: {
      value: d.tint,
      label: "Tint"
    },
    intensity: {
      value: d.intensity,
      min: 0,
      max: 1,
      step: 0.01,
      label: "Intensity"
    },
    invert: {
      value: d.invert,
      label: "Invert"
    },
    radial: {
      value: d.radial,
      label: "Radial Mode"
    }
  }) : {};
  return xe((q) => {
    if (T.current) {
      const { x: F, y: J } = q.mouse;
      let O = t;
      p && typeof c.lerp == "number" && (O = c.lerp), B.current.x += (F - B.current.x) * O, B.current.y += (J - B.current.y) * O, T.current.setMousePosition(B.current), T.current.state.aspectRatio = $, T.current.state.invert = p ? c.invert : l, T.current.state.radial = p ? c.radial : w, T.current.update();
    }
    V.current && V.current.quaternion.copy(W.quaternion);
  }), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsxs(
      "mesh",
      {
        ref: V,
        renderOrder: 1e3,
        position: [0, 0, 0],
        scale: [E.width, E.height, 1],
        children: [
          /* @__PURE__ */ b.jsx("planeGeometry", { args: [1, 1] }),
          /* @__PURE__ */ b.jsx("meshBasicMaterial", { transparent: !0, opacity: 0, depthTest: !1 })
        ]
      }
    ),
    /* @__PURE__ */ b.jsx(
      Qe,
      {
        ref: T,
        radius: p ? c.radius : o,
        strength: p ? c.strength : n,
        tint: p ? c.tint : r,
        intensity: p ? c.intensity : a,
        blendFunction: s,
        aspectRatio: $,
        invert: p ? c.invert : l,
        radial: p ? c.radial : w
      }
    )
  ] });
};
export {
  ut as Bulge,
  at as Fluid,
  Le as useConfig
};
//# sourceMappingURL=index.es.js.map
