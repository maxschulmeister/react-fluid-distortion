var xe = Object.defineProperty;
var Re = (o, t, r) => t in o ? xe(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var me = (o, t, r) => Re(o, typeof t != "symbol" ? t + "" : t, r);
import we, { forwardRef as Te, useMemo as q, useEffect as ne, useRef as O, useCallback as te } from "react";
import { useThree as $, useFrame as be, createPortal as Ce } from "@react-three/fiber";
import { Effect as Se, BlendFunction as Ee } from "postprocessing";
import * as g from "three";
import { Color as _e, Vector3 as de, Uniform as F, ShaderMaterial as k, Vector2 as b, Texture as x, Scene as De, Camera as Fe } from "three";
import { useFBO as oe } from "@react-three/drei";
var ee = { exports: {} }, I = {};
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
function ke() {
  if (pe) return I;
  pe = 1;
  var o = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, u, l) {
    var c = null;
    if (l !== void 0 && (c = "" + l), u.key !== void 0 && (c = "" + u.key), "key" in u) {
      l = {};
      for (var R in u)
        R !== "key" && (l[R] = u[R]);
    } else l = u;
    return u = l.ref, {
      $$typeof: o,
      type: a,
      key: c,
      ref: u !== void 0 ? u : null,
      props: l
    };
  }
  return I.Fragment = t, I.jsx = r, I.jsxs = r, I;
}
var W = {};
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
function Pe() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ue ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case V:
          return "Fragment";
        case ie:
          return "Profiler";
        case S:
          return "StrictMode";
        case J:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case ae:
            return "Portal";
          case M:
            return (e.displayName || "Context") + ".Provider";
          case A:
            return (e._context.displayName || "Context") + ".Consumer";
          case E:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return n = e.displayName || null, n !== null ? n : o(e.type) || "Memo";
          case f:
            n = e._payload, e = e._init;
            try {
              return o(e(n));
            } catch {
            }
        }
      return null;
    }
    function t(e) {
      return "" + e;
    }
    function r(e) {
      try {
        t(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var v = n.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return v.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), t(e);
      }
    }
    function a(e) {
      if (e === V) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === f)
        return "<...>";
      try {
        var n = o(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function c(e) {
      if (w.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function R(e, n) {
      function v() {
        p || (p = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: v,
        configurable: !0
      });
    }
    function B() {
      var e = o(this.type);
      return y[e] || (y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function Y(e, n, v, d, D, C, se, le) {
      return v = C.ref, e = {
        $$typeof: H,
        type: e,
        key: n,
        props: C,
        _owner: D
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: B
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
        value: se
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function X(e, n, v, d, D, C, se, le) {
      var m = n.children;
      if (m !== void 0)
        if (d)
          if (h(m)) {
            for (d = 0; d < m.length; d++)
              G(m[d]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else G(m);
      if (w.call(n, "key")) {
        m = o(e);
        var N = Object.keys(n).filter(function(he) {
          return he !== "key";
        });
        d = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", K[m + d] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          m,
          N,
          m
        ), K[m + d] = !0);
      }
      if (m = null, v !== void 0 && (r(v), m = "" + v), c(n) && (r(n.key), m = "" + n.key), "key" in n) {
        v = {};
        for (var ce in n)
          ce !== "key" && (v[ce] = n[ce]);
      } else v = n;
      return m && R(
        v,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), Y(
        e,
        m,
        C,
        D,
        u(),
        v,
        se,
        le
      );
    }
    function G(e) {
      typeof e == "object" && e !== null && e.$$typeof === H && e._store && (e._store.validated = 1);
    }
    var j = we, H = Symbol.for("react.transitional.element"), ae = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), M = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), ue = Symbol.for("react.client.reference"), U = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, h = Array.isArray, s = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var p, y = {}, T = j["react-stack-bottom-frame"].bind(
      j,
      l
    )(), _ = s(a(l)), K = {};
    W.Fragment = V, W.jsx = function(e, n, v, d, D) {
      var C = 1e4 > U.recentlyCreatedOwnerStacks++;
      return X(
        e,
        n,
        v,
        !1,
        d,
        D,
        C ? Error("react-stack-top-frame") : T,
        C ? s(a(e)) : _
      );
    }, W.jsxs = function(e, n, v, d, D) {
      var C = 1e4 > U.recentlyCreatedOwnerStacks++;
      return X(
        e,
        n,
        v,
        !0,
        d,
        D,
        C ? Error("react-stack-top-frame") : T,
        C ? s(a(e)) : _
      );
    };
  }()), W;
}
var ye;
function Oe() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? ee.exports = ke() : ee.exports = Pe()), ee.exports;
}
var z = Oe();
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
}, re = (o) => {
  const t = new _e(o);
  return new de(t.r, t.g, t.b);
}, ve = (o, t) => Math.pow(o, t * i.refreshRate);
var Be = `uniform sampler2D tFluid;

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
class Ue extends Se {
  constructor(r = {}) {
    const a = {
      tFluid: new F(r.tFluid),
      uDistort: new F(r.distortion),
      uRainbow: new F(r.rainbow),
      uIntensity: new F(r.intensity),
      uBlend: new F(r.blend),
      uShowBackground: new F(r.showBackground),
      uColor: new F(re(r.fluidColor)),
      uBackgroundColor: new F(re(r.backgroundColor))
    };
    super("FluidEffect", Be, {
      blendFunction: r.blendFunction,
      uniforms: new Map(Object.entries(a))
    });
    me(this, "state");
    this.state = {
      ...r
    };
  }
  updateUniform(r, a) {
    const u = this.uniforms.get(r);
    u && (u.value = a);
  }
  update() {
    this.updateUniform("uIntensity", this.state.intensity), this.updateUniform("uDistort", this.state.distortion), this.updateUniform("uRainbow", this.state.rainbow), this.updateUniform("uBlend", this.state.blend), this.updateUniform("uShowBackground", this.state.showBackground), this.updateUniform("uColor", re(this.state.fluidColor)), this.updateUniform("uBackgroundColor", re(this.state.backgroundColor));
  }
}
const je = Te(function(t, r) {
  const a = q(() => new Ue(t), []);
  return ne(() => {
    a.state = { ...t }, a.update();
  }, [a, t]), ne(() => () => {
    var u;
    (u = a.dispose) == null || u.call(a);
  }, [a]), /* @__PURE__ */ z.jsx("primitive", { ref: r, object: a, dispose: null });
}), fe = (o, t, r) => {
  const a = oe(o, t, r), u = oe(o, t, r), l = O({
    read: a,
    write: u,
    swap: () => {
      const c = l.read;
      l.read = l.write, l.write = c;
    },
    dispose: () => {
      a.dispose(), u.dispose();
    }
  }).current;
  return l;
}, Ve = () => {
  const o = fe(i.dyeRes, i.dyeRes, {
    type: g.HalfFloatType,
    format: g.RGBAFormat,
    minFilter: g.LinearFilter,
    depth: !1
  }), t = fe(i.simRes, i.simRes, {
    type: g.HalfFloatType,
    format: g.RGFormat,
    minFilter: g.LinearFilter,
    depth: !1
  }), r = fe(i.simRes, i.simRes, {
    type: g.HalfFloatType,
    format: g.RedFormat,
    minFilter: g.NearestFilter,
    depth: !1
  }), a = oe(i.simRes, i.simRes, {
    type: g.HalfFloatType,
    format: g.RedFormat,
    minFilter: g.NearestFilter,
    depth: !1
  }), u = oe(i.simRes, i.simRes, {
    type: g.HalfFloatType,
    format: g.RedFormat,
    minFilter: g.NearestFilter,
    depth: !1
  }), l = q(() => ({
    density: o,
    velocity: t,
    pressure: r,
    divergence: a,
    curl: u
  }), [u, o, a, r, t]);
  return ne(() => () => {
    for (const c of Object.values(l))
      c.dispose();
  }, [l]), l;
};
var P = `varying vec2 vUv;
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
}`, Ae = `precision highp float;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uClearValue;

void main() { gl_FragColor = uClearValue * texture2D(uTexture, vUv); }`, Le = `precision highp float;

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
}`, Ne = `precision highp float;

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
}`, ze = `precision highp float;

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
}`, Ye = `precision highp float;

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
}`, Me = `varying vec2 vUv;

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
}`, Ie = `precision highp float;

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
}`, We = `precision highp float;

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
const $e = () => {
  const o = $((r) => r.size), t = q(() => {
    const r = new k({
      uniforms: {
        uVelocity: {
          value: new x()
        },
        uSource: {
          value: new x()
        },
        dt: {
          value: 1 / i.refreshRate
        },
        uDissipation: {
          value: 1
        },
        texelSize: { value: new b() }
      },
      fragmentShader: Ie,
      vertexShader: P,
      depthTest: !1,
      depthWrite: !1
    }), a = new k({
      uniforms: {
        uTexture: {
          value: new x()
        },
        uClearValue: {
          value: i.pressure
        },
        texelSize: {
          value: new b()
        }
      },
      fragmentShader: Ae,
      vertexShader: P,
      depthTest: !1,
      depthWrite: !1
    }), u = new k({
      uniforms: {
        uVelocity: {
          value: new x()
        },
        texelSize: {
          value: new b()
        }
      },
      fragmentShader: Le,
      vertexShader: P,
      depthTest: !1,
      depthWrite: !1
    }), l = new k({
      uniforms: {
        uVelocity: {
          value: new x()
        },
        texelSize: {
          value: new b()
        }
      },
      fragmentShader: Ne,
      vertexShader: P,
      depthTest: !1,
      depthWrite: !1
    }), c = new k({
      uniforms: {
        uPressure: {
          value: new x()
        },
        uVelocity: {
          value: new x()
        },
        texelSize: {
          value: new b()
        }
      },
      fragmentShader: ze,
      vertexShader: P,
      depthTest: !1,
      depthWrite: !1
    }), R = new k({
      uniforms: {
        uPressure: {
          value: new x()
        },
        uDivergence: {
          value: new x()
        },
        texelSize: {
          value: new b()
        }
      },
      fragmentShader: Ye,
      vertexShader: P,
      depthTest: !1,
      depthWrite: !1
    }), B = new k({
      uniforms: {
        uTarget: {
          value: new x()
        },
        aspectRatio: {
          value: o.width / o.height
        },
        uColor: {
          value: new de()
        },
        uPointer: {
          value: new b()
        },
        uRadius: {
          value: i.radius / 100
        },
        texelSize: {
          value: new b()
        }
      },
      fragmentShader: Me,
      vertexShader: P,
      depthTest: !1,
      depthWrite: !1
    }), Y = new k({
      uniforms: {
        uVelocity: {
          value: new x()
        },
        uCurl: {
          value: new x()
        },
        uCurlValue: {
          value: i.curl
        },
        dt: {
          value: 1 / i.refreshRate
        },
        texelSize: {
          value: new b()
        }
      },
      fragmentShader: We,
      vertexShader: P,
      depthTest: !1,
      depthWrite: !1
    });
    return {
      splat: B,
      curl: u,
      clear: a,
      divergence: l,
      pressure: R,
      gradientSubstract: c,
      advection: r,
      vorticity: Y
    };
  }, [o]);
  return ne(() => {
    for (const r of Object.values(t)) {
      const a = o.width / (o.height + 400);
      r.uniforms.texelSize.value.set(1 / (i.simRes * a), 1 / i.simRes);
    }
    return () => {
      for (const r of Object.values(t))
        r.dispose();
    };
  }, [t, o]), t;
}, qe = ({ force: o }) => {
  const t = $((c) => c.size), r = O([]).current, a = O(new b()), u = O(!1);
  return { onPointerMove: te(
    (c) => {
      const R = c.x - a.current.x, B = c.y - a.current.y;
      if (!u.current) {
        u.current = !0, a.current.set(c.x, c.y);
        return;
      }
      a.current.set(c.x, c.y), r.push({
        mouseX: c.x / t.width,
        mouseY: 1 - c.y / t.height,
        velocityX: R * o,
        velocityY: -B * o
      });
    },
    [o, t.height, t.width, r]
  ), splatStack: r };
}, Ke = ({
  blend: o = i.blend,
  force: t = i.force,
  radius: r = i.radius,
  curl: a = i.curl,
  swirl: u = i.swirl,
  intensity: l = i.intensity,
  distortion: c = i.distortion,
  fluidColor: R = i.fluidColor,
  backgroundColor: B = i.backgroundColor,
  showBackground: Y = i.showBackground,
  rainbow: X = i.rainbow,
  pressure: G = i.pressure,
  densityDissipation: j = i.densityDissipation,
  velocityDissipation: H = i.velocityDissipation,
  blendFunction: ae = Ee.NORMAL
}) => {
  const V = $((p) => p.size), S = $((p) => p.gl), ie = $((p) => p.camera), A = q(() => new De(), []), M = q(() => new Fe(), []), E = O(null), J = O(null), Z = O(new b()), Q = O(new de()), f = Ve(), L = $e(), { onPointerMove: ue, splatStack: U } = qe({ force: t }), w = te(
    (p) => {
      E.current && (E.current.material = L[p], E.current.material.needsUpdate = !0);
    },
    [L]
  ), h = te(
    (p) => {
      const y = f[p];
      "write" in y ? (S.setRenderTarget(y.write), S.clear(), S.render(A, M), y.swap()) : (S.setRenderTarget(y), S.clear(), S.render(A, M));
    },
    [M, A, f, S]
  ), s = te(
    (p, y, T) => {
      const _ = L[p];
      _ && _.uniforms[y] && (_.uniforms[y].value = T);
    },
    [L]
  );
  return be((p, y) => {
    if (!(!E.current || !J.current)) {
      E.current.quaternion.copy(ie.quaternion);
      for (let T = U.length - 1; T >= 0; T--) {
        const { mouseX: _, mouseY: K, velocityX: e, velocityY: n } = U[T];
        Z.current.set(_, K), Q.current.set(e, n, 10), w("splat"), s("splat", "uTarget", f.velocity.read.texture), s("splat", "uPointer", Z.current), s("splat", "uColor", Q.current), s("splat", "uRadius", r / 100), h("velocity"), s("splat", "uTarget", f.density.read.texture), h("density"), U.pop();
      }
      w("curl"), s("curl", "uVelocity", f.velocity.read.texture), h("curl"), w("vorticity"), s("vorticity", "uVelocity", f.velocity.read.texture), s("vorticity", "uCurl", f.curl.texture), s("vorticity", "uCurlValue", a), h("velocity"), w("divergence"), s("divergence", "uVelocity", f.velocity.read.texture), h("divergence"), w("clear"), s("clear", "uTexture", f.pressure.read.texture), s("clear", "uClearValue", ve(G, y)), h("pressure"), w("pressure"), s("pressure", "uDivergence", f.divergence.texture);
      for (let T = 0; T < u; T++)
        s("pressure", "uPressure", f.pressure.read.texture), h("pressure");
      w("gradientSubstract"), s("gradientSubstract", "uPressure", f.pressure.read.texture), s("gradientSubstract", "uVelocity", f.velocity.read.texture), h("velocity"), w("advection"), s("advection", "uVelocity", f.velocity.read.texture), s("advection", "uSource", f.velocity.read.texture), s("advection", "uDissipation", ve(H, y)), h("velocity"), s("advection", "uVelocity", f.velocity.read.texture), s("advection", "uSource", f.density.read.texture), s("advection", "uDissipation", ve(j, y)), h("density");
    }
  }), /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    Ce(
      /* @__PURE__ */ z.jsx(
        "mesh",
        {
          ref: E,
          onPointerMove: ue,
          scale: [V.width, V.height, 1],
          children: /* @__PURE__ */ z.jsx("planeGeometry", { args: [2, 2, 10, 10] })
        }
      ),
      A
    ),
    /* @__PURE__ */ z.jsx(
      je,
      {
        blendFunction: ae,
        intensity: l,
        rainbow: X,
        distortion: c,
        backgroundColor: B,
        blend: o,
        fluidColor: R,
        showBackground: Y,
        ref: J,
        tFluid: f.density.read.texture
      }
    )
  ] });
};
export {
  Ke as Fluid
};
//# sourceMappingURL=index.es.js.map
