import { e as ui } from "./chunks/scraper-BwEMlVOd.js";
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && o(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function o(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = s(n);
    fetch(n.href, i);
  }
})();
/**
 * @vue/shared v3.5.41
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function tn(t) {
  const e = Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const st = {},
  _e = [],
  Kt = () => {},
  eo = () => !1,
  bs = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  xs = (t) => t.startsWith("onUpdate:"),
  pt = Object.assign,
  en = (t, e) => {
    const s = t.indexOf(e);
    s > -1 && t.splice(s, 1);
  },
  fi = Object.prototype.hasOwnProperty,
  Y = (t, e) => fi.call(t, e),
  U = Array.isArray,
  we = (t) => Ge(t) === "[object Map]",
  vs = (t) => Ge(t) === "[object Set]",
  wn = (t) => Ge(t) === "[object Date]",
  F = (t) => typeof t == "function",
  rt = (t) => typeof t == "string",
  Gt = (t) => typeof t == "symbol",
  tt = (t) => t !== null && typeof t == "object",
  so = (t) => (tt(t) || F(t)) && F(t.then) && F(t.catch),
  no = Object.prototype.toString,
  Ge = (t) => no.call(t),
  di = (t) => Ge(t).slice(8, -1),
  oo = (t) => Ge(t) === "[object Object]",
  sn = (t) =>
    rt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  Le = tn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  ys = (t) => {
    const e = Object.create(null);
    return (s) => e[s] || (e[s] = t(s));
  },
  pi = /-\w/g,
  At = ys((t) => t.replace(pi, (e) => e.slice(1).toUpperCase())),
  gi = /\B([A-Z])/g,
  be = ys((t) => t.replace(gi, "-$1").toLowerCase()),
  io = ys((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Rs = ys((t) => (t ? `on${io(t)}` : "")),
  Wt = (t, e) => !Object.is(t, e),
  os = (t, ...e) => {
    for (let s = 0; s < t.length; s++) t[s](...e);
  },
  ro = (t, e, s, o = !1) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      writable: o,
      value: s,
    });
  },
  _s = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
let kn;
const ws = () =>
  kn ||
  (kn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function Je(t) {
  if (U(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const o = t[s],
        n = rt(o) ? xi(o) : Je(o);
      if (n) for (const i in n) e[i] = n[i];
    }
    return e;
  } else if (rt(t) || tt(t)) return t;
}
const hi = /;(?![^(]*\))/g,
  mi = /:([^]+)/,
  bi = /\/\*[^]*?\*\//g;
function xi(t) {
  const e = {};
  return (
    t
      .replace(bi, "")
      .split(hi)
      .forEach((s) => {
        if (s) {
          const o = s.split(mi);
          o.length > 1 && (e[o[0].trim()] = o[1].trim());
        }
      }),
    e
  );
}
function q(t) {
  let e = "";
  if (rt(t)) e = t;
  else if (U(t))
    for (let s = 0; s < t.length; s++) {
      const o = q(t[s]);
      o && (e += o + " ");
    }
  else if (tt(t)) for (const s in t) t[s] && (e += s + " ");
  return e.trim();
}
const vi =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  yi = tn(vi);
function lo(t) {
  return !!t || t === "";
}
function _i(t, e) {
  if (t.length !== e.length) return !1;
  let s = !0;
  for (let o = 0; s && o < t.length; o++) s = Qe(t[o], e[o]);
  return s;
}
function Qe(t, e) {
  if (t === e) return !0;
  let s = wn(t),
    o = wn(e);
  if (s || o) return s && o ? t.getTime() === e.getTime() : !1;
  if (((s = Gt(t)), (o = Gt(e)), s || o)) return t === e;
  if (((s = U(t)), (o = U(e)), s || o)) return s && o ? _i(t, e) : !1;
  if (((s = tt(t)), (o = tt(e)), s || o)) {
    if (!s || !o) return !1;
    const n = Object.keys(t).length,
      i = Object.keys(e).length;
    if (n !== i) return !1;
    for (const l in t) {
      const a = t.hasOwnProperty(l),
        c = e.hasOwnProperty(l);
      if ((a && !c) || (!a && c) || !Qe(t[l], e[l])) return !1;
    }
  }
  return String(t) === String(e);
}
function wi(t, e) {
  return t.findIndex((s) => Qe(s, e));
}
const ao = (t) => !!(t && t.__v_isRef === !0),
  C = (t) =>
    rt(t)
      ? t
      : t == null
        ? ""
        : U(t) || (tt(t) && (t.toString === no || !F(t.toString)))
          ? ao(t)
            ? C(t.value)
            : JSON.stringify(t, co, 2)
          : String(t),
  co = (t, e) =>
    ao(e)
      ? co(t, e.value)
      : we(e)
        ? {
            [`Map(${e.size})`]: [...e.entries()].reduce(
              (s, [o, n], i) => ((s[Os(o, i) + " =>"] = n), s),
              {},
            ),
          }
        : vs(e)
          ? { [`Set(${e.size})`]: [...e.values()].map((s) => Os(s)) }
          : Gt(e)
            ? Os(e)
            : tt(e) && !U(e) && !oo(e)
              ? String(e)
              : e,
  Os = (t, e = "") => {
    var s;
    return Gt(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t;
  };
/**
 * @vue/reactivity v3.5.41
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let dt;
class ki {
  constructor(e = !1) {
    ((this.detached = e),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this._warnOnRun = !0),
      (this.__v_skip = !0),
      !e &&
        dt &&
        (dt.active
          ? ((this.parent = dt),
            (this.index = (dt.scopes || (dt.scopes = [])).push(this) - 1))
          : ((this._active = !1), (this._warnOnRun = !1))));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, s;
      if (this.scopes) {
        const o = this.scopes.slice();
        for (e = 0, s = o.length; e < s; e++) o[e].pause();
      }
      for (e = 0, s = this.effects.length; e < s; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, s;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (e = 0, s = n.length; e < s; e++) n[e].resume();
      }
      const o = this.effects.slice();
      for (e = 0, s = o.length; e < s; e++) o[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const s = dt;
      try {
        return ((dt = this), e());
      } finally {
        dt = s;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = dt), (dt = this));
  }
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (dt === this) dt = this.prevScope;
      else {
        let e = dt;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let s, o;
      for (s = 0, o = this.effects.length; s < o; s++) this.effects[s].stop();
      for (this.effects.length = 0, s = 0, o = this.cleanups.length; s < o; s++)
        this.cleanups[s]();
      if (((this.cleanups.length = 0), this.scopes)) {
        const n = this.scopes.slice();
        for (s = 0, o = n.length; s < o; s++) n[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const n = this.parent.scopes.pop();
        n &&
          n !== this &&
          ((this.parent.scopes[this.index] = n), (n.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Ti() {
  return dt;
}
let nt;
const Ms = new WeakSet();
class uo {
  constructor(e) {
    ((this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      dt && (dt.active ? dt.effects.push(this) : (this.flags &= -2)));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), Ms.has(this) && (Ms.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || po(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), Tn(this), go(this));
    const e = nt,
      s = It;
    ((nt = this), (It = !0));
    try {
      return this.fn();
    } finally {
      (ho(this), (nt = e), (It = s), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) rn(e);
      ((this.deps = this.depsTail = void 0),
        Tn(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? Ms.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    Ws(this) && this.run();
  }
  get dirty() {
    return Ws(this);
  }
}
let fo = 0,
  Ne,
  je;
function po(t, e = !1) {
  if (((t.flags |= 8), e)) {
    ((t.next = je), (je = t));
    return;
  }
  ((t.next = Ne), (Ne = t));
}
function nn() {
  fo++;
}
function on() {
  if (--fo > 0) return;
  if (je) {
    let e = je;
    for (je = void 0; e; ) {
      const s = e.next;
      ((e.next = void 0), (e.flags &= -9), (e = s));
    }
  }
  let t;
  for (; Ne; ) {
    let e = Ne;
    for (Ne = void 0; e; ) {
      const s = e.next;
      if (((e.next = void 0), (e.flags &= -9), e.flags & 1))
        try {
          e.trigger();
        } catch (o) {
          t || (t = o);
        }
      e = s;
    }
  }
  if (t) throw t;
}
function go(t) {
  for (let e = t.deps; e; e = e.nextDep)
    ((e.version = -1),
      (e.prevActiveLink = e.dep.activeLink),
      (e.dep.activeLink = e));
}
function ho(t) {
  let e,
    s = t.depsTail,
    o = s;
  for (; o; ) {
    const n = o.prevDep;
    (o.version === -1 ? (o === s && (s = n), rn(o), Ci(o)) : (e = o),
      (o.dep.activeLink = o.prevActiveLink),
      (o.prevActiveLink = void 0),
      (o = n));
  }
  ((t.deps = e), (t.depsTail = s));
}
function Ws(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (
      e.dep.version !== e.version ||
      (e.dep.computed && (mo(e.dep.computed) || e.dep.version !== e.version))
    )
      return !0;
  return !!t._dirty;
}
function mo(t) {
  if (
    (t.flags & 4 && !(t.flags & 16)) ||
    ((t.flags &= -17), t.globalVersion === He) ||
    ((t.globalVersion = He),
    !t.isSSR && t.flags & 128 && ((!t.deps && !t._dirty) || !Ws(t)))
  )
    return;
  t.flags |= 2;
  const e = t.dep,
    s = nt,
    o = It;
  ((nt = t), (It = !0));
  try {
    go(t);
    const n = t.fn(t._value);
    (e.version === 0 || Wt(n, t._value)) &&
      ((t.flags |= 128), (t._value = n), e.version++);
  } catch (n) {
    throw (e.version++, n);
  } finally {
    ((nt = s), (It = o), ho(t), (t.flags &= -3));
  }
}
function rn(t, e = !1) {
  const { dep: s, prevSub: o, nextSub: n } = t;
  if (
    (o && ((o.nextSub = n), (t.prevSub = void 0)),
    n && ((n.prevSub = o), (t.nextSub = void 0)),
    s.subs === t && ((s.subs = o), !o && s.computed))
  ) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep) rn(i, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function Ci(t) {
  const { prevDep: e, nextDep: s } = t;
  (e && ((e.nextDep = s), (t.prevDep = void 0)),
    s && ((s.prevDep = e), (t.nextDep = void 0)));
}
let It = !0;
const bo = [];
function se() {
  (bo.push(It), (It = !1));
}
function ne() {
  const t = bo.pop();
  It = t === void 0 ? !0 : t;
}
function Tn(t) {
  const { cleanup: e } = t;
  if (((t.cleanup = void 0), e)) {
    const s = nt;
    nt = void 0;
    try {
      e();
    } finally {
      nt = s;
    }
  }
}
let He = 0;
class Si {
  constructor(e, s) {
    ((this.sub = e),
      (this.dep = s),
      (this.version = s.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0));
  }
}
class ln {
  constructor(e) {
    ((this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0));
  }
  track(e) {
    if (!nt || !It || nt === this.computed) return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== nt)
      ((s = this.activeLink = new Si(nt, this)),
        nt.deps
          ? ((s.prevDep = nt.depsTail),
            (nt.depsTail.nextDep = s),
            (nt.depsTail = s))
          : (nt.deps = nt.depsTail = s),
        xo(s));
    else if (s.version === -1 && ((s.version = this.version), s.nextDep)) {
      const o = s.nextDep;
      ((o.prevDep = s.prevDep),
        s.prevDep && (s.prevDep.nextDep = o),
        (s.prevDep = nt.depsTail),
        (s.nextDep = void 0),
        (nt.depsTail.nextDep = s),
        (nt.depsTail = s),
        nt.deps === s && (nt.deps = o));
    }
    return s;
  }
  trigger(e) {
    (this.version++, He++, this.notify(e));
  }
  notify(e) {
    nn();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      on();
    }
  }
}
function xo(t) {
  if ((t.dep.sc++, t.sub.flags & 4)) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let o = e.deps; o; o = o.nextDep) xo(o);
    }
    const s = t.dep.subs;
    (s !== t && ((t.prevSub = s), s && (s.nextSub = t)), (t.dep.subs = t));
  }
}
const Bs = new WeakMap(),
  ge = Symbol(""),
  Ks = Symbol(""),
  Ve = Symbol("");
function gt(t, e, s) {
  if (It && nt) {
    let o = Bs.get(t);
    o || Bs.set(t, (o = new Map()));
    let n = o.get(s);
    (n || (o.set(s, (n = new ln())), (n.map = o), (n.key = s)), n.track());
  }
}
function Zt(t, e, s, o, n, i) {
  const l = Bs.get(t);
  if (!l) {
    He++;
    return;
  }
  const a = (c) => {
    c && c.trigger();
  };
  if ((nn(), e === "clear")) l.forEach(a);
  else {
    const c = U(t),
      p = c && sn(s);
    if (c && s === "length") {
      const f = Number(o);
      l.forEach((g, T) => {
        (T === "length" || T === Ve || (!Gt(T) && T >= f)) && a(g);
      });
    } else
      switch (
        ((s !== void 0 || l.has(void 0)) && a(l.get(s)), p && a(l.get(Ve)), e)
      ) {
        case "add":
          c ? p && a(l.get("length")) : (a(l.get(ge)), we(t) && a(l.get(Ks)));
          break;
        case "delete":
          c || (a(l.get(ge)), we(t) && a(l.get(Ks)));
          break;
        case "set":
          we(t) && a(l.get(ge));
          break;
      }
  }
  on();
}
function ve(t) {
  const e = Q(t);
  return e === t ? e : (gt(e, "iterate", Ve), St(t) ? e : e.map(Rt));
}
function ks(t) {
  return (gt((t = Q(t)), "iterate", Ve), t);
}
function Vt(t, e) {
  return oe(t) ? Ce(he(t) ? Rt(e) : e) : Rt(e);
}
const $i = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ls(this, Symbol.iterator, (t) => Vt(this, t));
  },
  concat(...t) {
    return ve(this).concat(...t.map((e) => (U(e) ? ve(e) : e)));
  },
  entries() {
    return Ls(this, "entries", (t) => ((t[1] = Vt(this, t[1])), t));
  },
  every(t, e) {
    return Yt(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return Yt(
      this,
      "filter",
      t,
      e,
      (s) => s.map((o) => Vt(this, o)),
      arguments,
    );
  },
  find(t, e) {
    return Yt(this, "find", t, e, (s) => Vt(this, s), arguments);
  },
  findIndex(t, e) {
    return Yt(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return Yt(this, "findLast", t, e, (s) => Vt(this, s), arguments);
  },
  findLastIndex(t, e) {
    return Yt(this, "findLastIndex", t, e, void 0, arguments);
  },
  forEach(t, e) {
    return Yt(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Ns(this, "includes", t);
  },
  indexOf(...t) {
    return Ns(this, "indexOf", t);
  },
  join(t) {
    return ve(this).join(t);
  },
  lastIndexOf(...t) {
    return Ns(this, "lastIndexOf", t);
  },
  map(t, e) {
    return Yt(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Pe(this, "pop");
  },
  push(...t) {
    return Pe(this, "push", t);
  },
  reduce(t, ...e) {
    return Cn(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Cn(this, "reduceRight", t, e);
  },
  shift() {
    return Pe(this, "shift");
  },
  some(t, e) {
    return Yt(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Pe(this, "splice", t);
  },
  toReversed() {
    return ve(this).toReversed();
  },
  toSorted(t) {
    return ve(this).toSorted(t);
  },
  toSpliced(...t) {
    return ve(this).toSpliced(...t);
  },
  unshift(...t) {
    return Pe(this, "unshift", t);
  },
  values() {
    return Ls(this, "values", (t) => Vt(this, t));
  },
};
function Ls(t, e, s) {
  const o = ks(t),
    n = o[e]();
  return (
    o !== t &&
      !St(t) &&
      ((n._next = n.next),
      (n.next = () => {
        const i = n._next();
        return (i.done || (i.value = s(i.value)), i);
      })),
    n
  );
}
const Ei = Array.prototype;
function Yt(t, e, s, o, n, i) {
  const l = ks(t),
    a = l !== t && !St(t),
    c = l[e];
  if (c !== Ei[e]) {
    const g = c.apply(t, i);
    return a ? Rt(g) : g;
  }
  let p = s;
  l !== t &&
    (a
      ? (p = function (g, T) {
          return s.call(this, Vt(t, g), T, t);
        })
      : s.length > 2 &&
        (p = function (g, T) {
          return s.call(this, g, T, t);
        }));
  const f = c.call(l, p, o);
  return a && n ? n(f) : f;
}
function Cn(t, e, s, o) {
  const n = ks(t),
    i = n !== t && !St(t);
  let l = s,
    a = !1;
  n !== t &&
    (i
      ? ((a = o.length === 0),
        (l = function (p, f, g) {
          return (
            a && ((a = !1), (p = Vt(t, p))),
            s.call(this, p, Vt(t, f), g, t)
          );
        }))
      : s.length > 3 &&
        (l = function (p, f, g) {
          return s.call(this, p, f, g, t);
        }));
  const c = n[e](l, ...o);
  return a ? Vt(t, c) : c;
}
function Ns(t, e, s) {
  const o = Q(t);
  gt(o, "iterate", Ve);
  const n = o[e](...s);
  return (n === -1 || n === !1) && fn(s[0])
    ? ((s[0] = Q(s[0])), o[e](...s))
    : n;
}
function Pe(t, e, s = []) {
  (se(), nn());
  const o = Q(t)[e].apply(t, s);
  return (on(), ne(), o);
}
const Ai = tn("__proto__,__v_isRef,__isVue"),
  vo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(Gt),
  );
function Ii(t) {
  Gt(t) || (t = String(t));
  const e = Q(this);
  return (gt(e, "has", t), e.hasOwnProperty(t));
}
class yo {
  constructor(e = !1, s = !1) {
    ((this._isReadonly = e), (this._isShallow = s));
  }
  get(e, s, o) {
    if (s === "__v_skip") return e.__v_skip;
    const n = this._isReadonly,
      i = this._isShallow;
    if (s === "__v_isReactive") return !n;
    if (s === "__v_isReadonly") return n;
    if (s === "__v_isShallow") return i;
    if (s === "__v_raw")
      return o === (n ? (i ? Fi : To) : i ? ko : wo).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(o)
        ? e
        : void 0;
    const l = U(e);
    if (!n) {
      let c;
      if (l && (c = $i[s])) return c;
      if (s === "hasOwnProperty") return Ii;
    }
    const a = Reflect.get(e, s, ht(e) ? e : o);
    if ((Gt(s) ? vo.has(s) : Ai(s)) || (n || gt(e, "get", s), i)) return a;
    if (ht(a)) {
      const c = l && sn(s) ? a : a.value;
      return n && tt(c) ? Js(c) : c;
    }
    return tt(a) ? (n ? Js(a) : cn(a)) : a;
  }
}
class _o extends yo {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, o, n) {
    let i = e[s];
    const l = U(e) && sn(s);
    if (!this._isShallow) {
      const p = oe(i);
      if ((!St(o) && !oe(o) && ((i = Q(i)), (o = Q(o))), !l && ht(i) && !ht(o)))
        return (p || (i.value = o), !0);
    }
    const a = l ? Number(s) < e.length : Y(e, s),
      c = Reflect.set(e, s, o, ht(e) ? e : n);
    return (
      e === Q(n) &&
        c &&
        (a ? Wt(o, i) && Zt(e, "set", s, o) : Zt(e, "add", s, o)),
      c
    );
  }
  deleteProperty(e, s) {
    const o = Y(e, s);
    e[s];
    const n = Reflect.deleteProperty(e, s);
    return (n && o && Zt(e, "delete", s, void 0), n);
  }
  has(e, s) {
    const o = Reflect.has(e, s);
    return ((!Gt(s) || !vo.has(s)) && gt(e, "has", s), o);
  }
  ownKeys(e) {
    return (gt(e, "iterate", U(e) ? "length" : ge), Reflect.ownKeys(e));
  }
}
class Pi extends yo {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, s) {
    return !0;
  }
  deleteProperty(e, s) {
    return !0;
  }
}
const Ri = new _o(),
  Oi = new Pi(),
  Mi = new _o(!0);
const Gs = (t) => t,
  ts = (t) => Reflect.getPrototypeOf(t);
function Li(t, e, s) {
  return function (...o) {
    const n = this.__v_raw,
      i = Q(n),
      l = we(i),
      a = t === "entries" || (t === Symbol.iterator && l),
      c = t === "keys" && l,
      p = n[t](...o),
      f = s ? Gs : e ? Ce : Rt;
    return (
      !e && gt(i, "iterate", c ? Ks : ge),
      pt(Object.create(p), {
        next() {
          const { value: g, done: T } = p.next();
          return T
            ? { value: g, done: T }
            : { value: a ? [f(g[0]), f(g[1])] : f(g), done: T };
        },
      })
    );
  };
}
function es(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Ni(t, e) {
  const s = {
    get(n) {
      const i = this.__v_raw,
        l = Q(i),
        a = Q(n);
      t || (Wt(n, a) && gt(l, "get", n), gt(l, "get", a));
      const { has: c } = ts(l),
        p = e ? Gs : t ? Ce : Rt;
      if (c.call(l, n)) return p(i.get(n));
      if (c.call(l, a)) return p(i.get(a));
      i !== l && i.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return (!t && gt(Q(n), "iterate", ge), n.size);
    },
    has(n) {
      const i = this.__v_raw,
        l = Q(i),
        a = Q(n);
      return (
        t || (Wt(n, a) && gt(l, "has", n), gt(l, "has", a)),
        n === a ? i.has(n) : i.has(n) || i.has(a)
      );
    },
    forEach(n, i) {
      const l = this,
        a = l.__v_raw,
        c = Q(a),
        p = e ? Gs : t ? Ce : Rt;
      return (
        !t && gt(c, "iterate", ge),
        a.forEach((f, g) => n.call(i, p(f), p(g), l))
      );
    },
  };
  return (
    pt(
      s,
      t
        ? {
            add: es("add"),
            set: es("set"),
            delete: es("delete"),
            clear: es("clear"),
          }
        : {
            add(n) {
              const i = Q(this),
                l = ts(i),
                a = Q(n),
                c = !e && !St(n) && !oe(n) ? a : n;
              return (
                l.has.call(i, c) ||
                  (Wt(n, c) && l.has.call(i, n)) ||
                  (Wt(a, c) && l.has.call(i, a)) ||
                  (i.add(c), Zt(i, "add", c, c)),
                this
              );
            },
            set(n, i) {
              !e && !St(i) && !oe(i) && (i = Q(i));
              const l = Q(this),
                { has: a, get: c } = ts(l);
              let p = a.call(l, n);
              p || ((n = Q(n)), (p = a.call(l, n)));
              const f = c.call(l, n);
              return (
                l.set(n, i),
                p ? Wt(i, f) && Zt(l, "set", n, i) : Zt(l, "add", n, i),
                this
              );
            },
            delete(n) {
              const i = Q(this),
                { has: l, get: a } = ts(i);
              let c = l.call(i, n);
              (c || ((n = Q(n)), (c = l.call(i, n))), a && a.call(i, n));
              const p = i.delete(n);
              return (c && Zt(i, "delete", n, void 0), p);
            },
            clear() {
              const n = Q(this),
                i = n.size !== 0,
                l = n.clear();
              return (i && Zt(n, "clear", void 0, void 0), l);
            },
          },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((n) => {
      s[n] = Li(n, t, e);
    }),
    s
  );
}
function an(t, e) {
  const s = Ni(t, e);
  return (o, n, i) =>
    n === "__v_isReactive"
      ? !t
      : n === "__v_isReadonly"
        ? t
        : n === "__v_raw"
          ? o
          : Reflect.get(Y(s, n) && n in o ? s : o, n, i);
}
const ji = { get: an(!1, !1) },
  Di = { get: an(!1, !0) },
  Ui = { get: an(!0, !1) };
const wo = new WeakMap(),
  ko = new WeakMap(),
  To = new WeakMap(),
  Fi = new WeakMap();
function Hi(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function cn(t) {
  return oe(t) ? t : un(t, !1, Ri, ji, wo);
}
function Vi(t) {
  return un(t, !1, Mi, Di, ko);
}
function Js(t) {
  return un(t, !0, Oi, Ui, To);
}
function un(t, e, s, o, n) {
  if (
    !tt(t) ||
    (t.__v_raw && !(e && t.__v_isReactive)) ||
    t.__v_skip ||
    !Object.isExtensible(t)
  )
    return t;
  const i = n.get(t);
  if (i) return i;
  const l = Hi(di(t));
  if (l === 0) return t;
  const a = new Proxy(t, l === 2 ? o : s);
  return (n.set(t, a), a);
}
function he(t) {
  return oe(t) ? he(t.__v_raw) : !!(t && t.__v_isReactive);
}
function oe(t) {
  return !!(t && t.__v_isReadonly);
}
function St(t) {
  return !!(t && t.__v_isShallow);
}
function fn(t) {
  return t ? !!t.__v_raw : !1;
}
function Q(t) {
  const e = t && t.__v_raw;
  return e ? Q(e) : t;
}
function qi(t) {
  return (
    !Y(t, "__v_skip") && Object.isExtensible(t) && ro(t, "__v_skip", !0),
    t
  );
}
const Rt = (t) => (tt(t) ? cn(t) : t),
  Ce = (t) => (tt(t) ? Js(t) : t);
function ht(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function V(t) {
  return Wi(t, !1);
}
function Wi(t, e) {
  return ht(t) ? t : new Bi(t, e);
}
class Bi {
  constructor(e, s) {
    ((this.dep = new ln()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = s ? e : Q(e)),
      (this._value = s ? e : Rt(e)),
      (this.__v_isShallow = s));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(e) {
    const s = this._rawValue,
      o = this.__v_isShallow || St(e) || oe(e);
    ((e = o ? e : Q(e)),
      Wt(e, s) &&
        ((this._rawValue = e),
        (this._value = o ? e : Rt(e)),
        this.dep.trigger()));
  }
}
function Co(t) {
  return ht(t) ? t.value : t;
}
const Ki = {
  get: (t, e, s) => (e === "__v_raw" ? t : Co(Reflect.get(t, e, s))),
  set: (t, e, s, o) => {
    const n = t[e];
    return ht(n) && !ht(s) ? ((n.value = s), !0) : Reflect.set(t, e, s, o);
  },
};
function So(t) {
  return he(t) ? t : new Proxy(t, Ki);
}
class Gi {
  constructor(e, s, o) {
    ((this.fn = e),
      (this.setter = s),
      (this._value = void 0),
      (this.dep = new ln(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = He - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !s),
      (this.isSSR = o));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && nt !== this))
      return (po(this, !0), !0);
  }
  get value() {
    const e = this.dep.track();
    return (mo(this), e && (e.version = this.dep.version), this._value);
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function Ji(t, e, s = !1) {
  let o, n;
  return (F(t) ? (o = t) : ((o = t.get), (n = t.set)), new Gi(o, n, s));
}
const ss = {},
  as = new WeakMap();
let fe;
function Qi(t, e = !1, s = fe) {
  if (s) {
    let o = as.get(s);
    (o || as.set(s, (o = [])), o.push(t));
  }
}
function Yi(t, e, s = st) {
  const {
      immediate: o,
      deep: n,
      once: i,
      scheduler: l,
      augmentJob: a,
      call: c,
    } = s,
    p = (L) => (n ? L : St(L) || n === !1 || n === 0 ? te(L, 1) : te(L));
  let f,
    g,
    T,
    m,
    A = !1,
    y = !1;
  if (
    (ht(t)
      ? ((g = () => t.value), (A = St(t)))
      : he(t)
        ? ((g = () => p(t)), (A = !0))
        : U(t)
          ? ((y = !0),
            (A = t.some((L) => he(L) || St(L))),
            (g = () =>
              t.map((L) => {
                if (ht(L)) return L.value;
                if (he(L)) return p(L);
                if (F(L)) return c ? c(L, 2) : L();
              })))
          : F(t)
            ? e
              ? (g = c ? () => c(t, 2) : t)
              : (g = () => {
                  if (T) {
                    se();
                    try {
                      T();
                    } finally {
                      ne();
                    }
                  }
                  const L = fe;
                  fe = f;
                  try {
                    return c ? c(t, 3, [m]) : t(m);
                  } finally {
                    fe = L;
                  }
                })
            : (g = Kt),
    e && n)
  ) {
    const L = g,
      ot = n === !0 ? 1 / 0 : n;
    g = () => te(L(), ot);
  }
  const I = Ti(),
    H = () => {
      (f.stop(), I && I.active && en(I.effects, f));
    };
  if (i && e) {
    const L = e;
    e = (...ot) => {
      const mt = L(...ot);
      return (H(), mt);
    };
  }
  let j = y ? new Array(t.length).fill(ss) : ss;
  const G = (L) => {
    if (!(!(f.flags & 1) || (!f.dirty && !L)))
      if (e) {
        const ot = f.run();
        if (
          L ||
          n ||
          A ||
          (y ? ot.some((mt, _t) => Wt(mt, j[_t])) : Wt(ot, j))
        ) {
          T && T();
          const mt = fe;
          fe = f;
          try {
            const _t = [ot, j === ss ? void 0 : y && j[0] === ss ? [] : j, m];
            ((j = ot), c ? c(e, 3, _t) : e(..._t));
          } finally {
            fe = mt;
          }
        }
      } else f.run();
  };
  return (
    a && a(G),
    (f = new uo(g)),
    (f.scheduler = l ? () => l(G, !1) : G),
    (m = (L) => Qi(L, !1, f)),
    (T = f.onStop =
      () => {
        const L = as.get(f);
        if (L) {
          if (c) c(L, 4);
          else for (const ot of L) ot();
          as.delete(f);
        }
      }),
    e ? (o ? G(!0) : (j = f.run())) : l ? l(G.bind(null, !0), !0) : f.run(),
    (H.pause = f.pause.bind(f)),
    (H.resume = f.resume.bind(f)),
    (H.stop = H),
    H
  );
}
function te(t, e = 1 / 0, s) {
  if (
    e <= 0 ||
    !tt(t) ||
    t.__v_skip ||
    ((s = s || new Map()), (s.get(t) || 0) >= e)
  )
    return t;
  if ((s.set(t, e), e--, ht(t))) te(t.value, e, s);
  else if (U(t)) for (let o = 0; o < t.length; o++) te(t[o], e, s);
  else if (vs(t) || we(t))
    t.forEach((o) => {
      te(o, e, s);
    });
  else if (oo(t)) {
    for (const o in t) te(t[o], e, s);
    for (const o of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, o) && te(t[o], e, s);
  }
  return t;
}
/**
 * @vue/runtime-core v3.5.41
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ye(t, e, s, o) {
  try {
    return o ? t(...o) : t();
  } catch (n) {
    Ts(n, e, s);
  }
}
function Ot(t, e, s, o) {
  if (F(t)) {
    const n = Ye(t, e, s, o);
    return (
      n &&
        so(n) &&
        n.catch((i) => {
          Ts(i, e, s);
        }),
      n
    );
  }
  if (U(t)) {
    const n = [];
    for (let i = 0; i < t.length; i++) n.push(Ot(t[i], e, s, o));
    return n;
  }
}
function Ts(t, e, s, o = !0) {
  const n = e ? e.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: l } =
      (e && e.appContext.config) || st;
  if (e) {
    let a = e.parent;
    const c = e.proxy,
      p = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; a; ) {
      const f = a.ec;
      if (f) {
        for (let g = 0; g < f.length; g++) if (f[g](t, c, p) === !1) return;
      }
      a = a.parent;
    }
    if (i) {
      (se(), Ye(i, null, 10, [t, c, p]), ne());
      return;
    }
  }
  zi(t, s, n, o, l);
}
function zi(t, e, s, o = !0, n = !1) {
  if (n) throw t;
  console.error(t);
}
const xt = [];
let Ht = -1;
const ke = [];
let le = null,
  ye = 0;
const $o = Promise.resolve();
let cs = null;
function Eo(t) {
  const e = cs || $o;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Xi(t) {
  let e = Ht + 1,
    s = xt.length;
  for (; e < s; ) {
    const o = (e + s) >>> 1,
      n = xt[o],
      i = qe(n);
    i < t || (i === t && n.flags & 2) ? (e = o + 1) : (s = o);
  }
  return e;
}
function dn(t) {
  if (!(t.flags & 1)) {
    const e = qe(t),
      s = xt[xt.length - 1];
    (!s || (!(t.flags & 2) && e >= qe(s)) ? xt.push(t) : xt.splice(Xi(e), 0, t),
      (t.flags |= 1),
      Ao());
  }
}
function Ao() {
  cs || (cs = $o.then(Po));
}
function Zi(t) {
  if (!U(t))
    le && t.id === -1
      ? le.splice(ye + 1, 0, t)
      : t.flags & 1 || (ke.push(t), (t.flags |= 1));
  else for (let e = 0; e < t.length; e++) ke.push(t[e]);
  Ao();
}
function Sn(t, e, s = Ht + 1) {
  for (; s < xt.length; s++) {
    const o = xt[s];
    if (o && o.flags & 2) {
      if (t && o.id !== t.uid) continue;
      (xt.splice(s, 1),
        s--,
        o.flags & 4 && (o.flags &= -2),
        o(),
        o.flags & 4 || (o.flags &= -2));
    }
  }
}
function Io(t) {
  if (ke.length) {
    const e = [...new Set(ke)].sort((s, o) => qe(s) - qe(o));
    if (((ke.length = 0), le)) {
      for (let s = 0; s < e.length; s++) le.push(e[s]);
      return;
    }
    for (le = e, ye = 0; ye < le.length; ye++) {
      const s = le[ye];
      (s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), (s.flags &= -2));
    }
    ((le = null), (ye = 0));
  }
}
const qe = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id);
function Po(t) {
  try {
    for (Ht = 0; Ht < xt.length; Ht++) {
      const e = xt[Ht];
      e &&
        !(e.flags & 8) &&
        (e.flags & 4 && (e.flags &= -2),
        Ye(e, e.i, e.i ? 15 : 14),
        e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Ht < xt.length; Ht++) {
      const e = xt[Ht];
      e && (e.flags &= -2);
    }
    ((Ht = -1),
      (xt.length = 0),
      Io(),
      (cs = null),
      (xt.length || ke.length) && Po());
  }
}
let Ct = null,
  Ro = null;
function us(t) {
  const e = Ct;
  return ((Ct = t), (Ro = (t && t.type.__scopeId) || null), e);
}
function tr(t, e = Ct, s) {
  if (!e || t._n) return t;
  const o = (...n) => {
    o._d && jn(-1);
    const i = us(e),
      l = me.length;
    let a;
    try {
      a = t(...n);
    } finally {
      for (let c = me.length; c > l; c--) ei();
      (us(i), o._d && jn(1));
    }
    return a;
  };
  return ((o._n = !0), (o._c = !0), (o._d = !0), o);
}
function Tt(t, e) {
  if (Ct === null) return t;
  const s = Is(Ct),
    o = t.dirs || (t.dirs = []);
  for (let n = 0; n < e.length; n++) {
    let [i, l, a, c = st] = e[n];
    i &&
      (F(i) && (i = { mounted: i, updated: i }),
      i.deep && te(l),
      o.push({
        dir: i,
        instance: s,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: c,
      }));
  }
  return t;
}
function ce(t, e, s, o) {
  const n = t.dirs,
    i = e && e.dirs;
  for (let l = 0; l < n.length; l++) {
    const a = n[l];
    i && (a.oldValue = i[l].value);
    let c = a.dir[o];
    c && (se(), Ot(c, s, 8, [t.el, a, t, e]), ne());
  }
}
function er(t, e) {
  if (vt) {
    let s = vt.provides;
    const o = vt.parent && vt.parent.provides;
    (o === s && (s = vt.provides = Object.create(o)), (s[t] = e));
  }
}
function is(t, e, s = !1) {
  const o = Xr();
  if (o || Te) {
    let n = Te
      ? Te._context.provides
      : o
        ? o.parent == null || o.ce
          ? o.vnode.appContext && o.vnode.appContext.provides
          : o.parent.provides
        : void 0;
    if (n && t in n) return n[t];
    if (arguments.length > 1) return s && F(e) ? e.call(o && o.proxy) : e;
  }
}
const sr = Symbol.for("v-scx"),
  nr = () => is(sr);
function js(t, e, s) {
  return Oo(t, e, s);
}
function Oo(t, e, s = st) {
  const { immediate: o, deep: n, flush: i, once: l } = s,
    a = pt({}, s),
    c = (e && o) || (!e && i !== "post");
  let p;
  if (Ke) {
    if (i === "sync") {
      const m = nr();
      p = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!c) {
      const m = () => {};
      return ((m.stop = Kt), (m.resume = Kt), (m.pause = Kt), m);
    }
  }
  const f = vt;
  a.call = (m, A, y) => Ot(m, f, A, y);
  let g = !1;
  (i === "post"
    ? (a.scheduler = (m) => {
        yt(m, f && f.suspense);
      })
    : i !== "sync" &&
      ((g = !0),
      (a.scheduler = (m, A) => {
        A ? m() : dn(m);
      })),
    (a.augmentJob = (m) => {
      (e && (m.flags |= 4),
        g && ((m.flags |= 2), f && ((m.id = f.uid), (m.i = f))));
    }));
  const T = Yi(t, e, a);
  return (Ke && (p ? p.push(T) : c && T()), T);
}
function or(t, e, s) {
  const o = this.proxy,
    n = rt(t) ? (t.includes(".") ? Mo(o, t) : () => o[t]) : t.bind(o, o);
  let i;
  F(e) ? (i = e) : ((i = e.handler), (s = e));
  const l = ze(this),
    a = Oo(n, i.bind(o), s);
  return (l(), a);
}
function Mo(t, e) {
  const s = e.split(".");
  return () => {
    let o = t;
    for (let n = 0; n < s.length && o; n++) o = o[s[n]];
    return o;
  };
}
const ir = Symbol("_vte"),
  Cs = (t) => t.__isTeleport,
  Ds = Symbol("_leaveCb");
function rr(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const s of t)
      if (s.type !== ie) {
        e = s;
        break;
      }
  }
  return e;
}
function Lo(t) {
  if (!gn(t)) return Cs(t.type) && t.children ? rr(t.children) : t;
  if (t.component) return t.component.subTree;
  const { shapeFlag: e, children: s } = t;
  if (s) {
    if (e & 16) return s[0];
    if (e & 32 && F(s.default)) return s.default();
  }
}
function pn(t, e) {
  if (t.shapeFlag & 6 && t.component) {
    t.transition = e;
    const s = t.component.subTree;
    pn((Cs(s.type) && Lo(s)) || s, e);
  } else
    t.shapeFlag & 128
      ? ((t.ssContent.transition = e.clone(t.ssContent)),
        (t.ssFallback.transition = e.clone(t.ssFallback)))
      : (t.transition = e);
}
function $t(t, e) {
  return F(t) ? pt({ name: t.name }, e, { setup: t }) : t;
}
function No(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function $n(t, e) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(t, e)) && !s.configurable);
}
const fs = new WeakMap();
function De(t, e, s, o, n = !1) {
  if (U(t)) {
    t.forEach((y, I) => De(y, e && (U(e) ? e[I] : e), s, o, n));
    return;
  }
  if (Ue(o) && !n) {
    o.shapeFlag & 512 &&
      o.type.__asyncResolved &&
      o.component.subTree.component &&
      De(t, e, s, o.component.subTree);
    return;
  }
  const i = o.shapeFlag & 4 ? Is(o.component) : o.el,
    l = n ? null : i,
    { i: a, r: c } = t,
    p = e && e.r,
    f = a.refs === st ? (a.refs = {}) : a.refs,
    g = a.setupState,
    T = Q(g),
    m = g === st ? eo : (y) => ($n(f, y) ? !1 : Y(T, y)),
    A = (y, I) => !(I && $n(f, I));
  if (p != null && p !== c) {
    if ((En(e), rt(p))) ((f[p] = null), m(p) && (g[p] = null));
    else if (ht(p)) {
      const y = e;
      (A(p, y.k) && (p.value = null), y.k && (f[y.k] = null));
    }
  }
  if (F(c)) Ye(c, a, 12, [l, f]);
  else {
    const y = rt(c),
      I = ht(c);
    if (y || I) {
      const H = () => {
        if (t.f) {
          const j = y ? (m(c) ? g[c] : f[c]) : A() || !t.k ? c.value : f[t.k];
          if (n) U(j) && en(j, i);
          else if (U(j)) j.includes(i) || j.push(i);
          else if (y) ((f[c] = [i]), m(c) && (g[c] = f[c]));
          else {
            const G = [i];
            (A(c, t.k) && (c.value = G), t.k && (f[t.k] = G));
          }
        } else
          y
            ? ((f[c] = l), m(c) && (g[c] = l))
            : I && (A(c, t.k) && (c.value = l), t.k && (f[t.k] = l));
      };
      if (l) {
        const j = () => {
          (H(), fs.delete(t));
        };
        ((j.id = -1), fs.set(t, j), yt(j, s));
      } else (En(t), H());
    }
  }
}
function En(t) {
  const e = fs.get(t);
  e && ((e.flags |= 8), fs.delete(t));
}
ws().requestIdleCallback;
ws().cancelIdleCallback;
const Ue = (t) => !!t.type.__asyncLoader,
  gn = (t) => t.type.__isKeepAlive;
function lr(t, e) {
  jo(t, "a", e);
}
function ar(t, e) {
  jo(t, "da", e);
}
function jo(t, e, s = vt) {
  const o =
    t.__wdc ||
    (t.__wdc = () => {
      let n = s;
      for (; n; ) {
        if (n.isDeactivated) return;
        n = n.parent;
      }
      return t();
    });
  if ((Ss(e, o, s), s)) {
    let n = s.parent;
    for (; n && n.parent; )
      (gn(n.parent.vnode) && cr(o, e, s, n), (n = n.parent));
  }
}
function cr(t, e, s, o) {
  const n = Ss(e, t, o, !0);
  $s(() => {
    en(o[e], n);
  }, s);
}
function Ss(t, e, s = vt, o = !1) {
  if (s) {
    const n = s[t] || (s[t] = []),
      i =
        e.__weh ||
        (e.__weh = (...l) => {
          se();
          const a = ze(s),
            c = Ot(e, s, t, l);
          return (a(), ne(), c);
        });
    return (o ? n.unshift(i) : n.push(i), i);
  }
}
const re =
    (t) =>
    (e, s = vt) => {
      (!Ke || t === "sp") && Ss(t, (...o) => e(...o), s);
    },
  ur = re("bm"),
  $e = re("m"),
  fr = re("bu"),
  dr = re("u"),
  pr = re("bum"),
  $s = re("um"),
  gr = re("sp"),
  hr = re("rtg"),
  mr = re("rtc");
function br(t, e = vt) {
  Ss("ec", t, e);
}
const xr = Symbol.for("v-ndc");
function Mt(t, e, s, o) {
  let n;
  const i = s,
    l = U(t);
  if (l || rt(t)) {
    const a = l && he(t);
    let c = !1,
      p = !1;
    (a && ((c = !St(t)), (p = oe(t)), (t = ks(t))), (n = new Array(t.length)));
    for (let f = 0, g = t.length; f < g; f++)
      n[f] = e(c ? (p ? Ce(Rt(t[f])) : Rt(t[f])) : t[f], f, void 0, i);
  } else if (typeof t == "number") {
    n = new Array(t);
    for (let a = 0; a < t; a++) n[a] = e(a + 1, a, void 0, i);
  } else if (tt(t))
    if (t[Symbol.iterator]) n = Array.from(t, (a, c) => e(a, c, void 0, i));
    else {
      const a = Object.keys(t);
      n = new Array(a.length);
      for (let c = 0, p = a.length; c < p; c++) {
        const f = a[c];
        n[c] = e(t[f], f, c, i);
      }
    }
  else n = [];
  return n;
}
const Qs = (t) => (t ? (ii(t) ? Is(t) : Qs(t.parent)) : null),
  Fe = pt(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Qs(t.parent),
    $root: (t) => Qs(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Uo(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        dn(t.update);
      }),
    $nextTick: (t) => t.n || (t.n = Eo.bind(t.proxy)),
    $watch: (t) => or.bind(t),
  }),
  Us = (t, e) => t !== st && !t.__isScriptSetup && Y(t, e),
  vr = {
    get({ _: t }, e) {
      if (e === "__v_skip") return !0;
      const {
        ctx: s,
        setupState: o,
        data: n,
        props: i,
        accessCache: l,
        type: a,
        appContext: c,
      } = t;
      if (e[0] !== "$") {
        const T = l[e];
        if (T !== void 0)
          switch (T) {
            case 1:
              return o[e];
            case 2:
              return n[e];
            case 4:
              return s[e];
            case 3:
              return i[e];
          }
        else {
          if (Us(o, e)) return ((l[e] = 1), o[e]);
          if (n !== st && Y(n, e)) return ((l[e] = 2), n[e]);
          if (Y(i, e)) return ((l[e] = 3), i[e]);
          if (s !== st && Y(s, e)) return ((l[e] = 4), s[e]);
          Ys && (l[e] = 0);
        }
      }
      const p = Fe[e];
      let f, g;
      if (p) return (e === "$attrs" && gt(t.attrs, "get", ""), p(t));
      if ((f = a.__cssModules) && (f = f[e])) return f;
      if (s !== st && Y(s, e)) return ((l[e] = 4), s[e]);
      if (((g = c.config.globalProperties), Y(g, e))) return g[e];
    },
    set({ _: t }, e, s) {
      const { data: o, setupState: n, ctx: i } = t;
      return Us(n, e)
        ? ((n[e] = s), !0)
        : o !== st && Y(o, e)
          ? ((o[e] = s), !0)
          : Y(t.props, e) || (e[0] === "$" && e.slice(1) in t)
            ? !1
            : ((i[e] = s), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: s,
          ctx: o,
          appContext: n,
          props: i,
          type: l,
        },
      },
      a,
    ) {
      let c;
      return !!(
        s[a] ||
        (t !== st && a[0] !== "$" && Y(t, a)) ||
        Us(e, a) ||
        Y(i, a) ||
        Y(o, a) ||
        Y(Fe, a) ||
        Y(n.config.globalProperties, a) ||
        ((c = l.__cssModules) && c[a])
      );
    },
    defineProperty(t, e, s) {
      return (
        s.get != null
          ? (t._.accessCache[e] = 0)
          : Y(s, "value") && this.set(t, e, s.value, null),
        Reflect.defineProperty(t, e, s)
      );
    },
  };
function An(t) {
  return U(t) ? t.reduce((e, s) => ((e[s] = null), e), {}) : t;
}
let Ys = !0;
function yr(t) {
  const e = Uo(t),
    s = t.proxy,
    o = t.ctx;
  ((Ys = !1), e.beforeCreate && In(e.beforeCreate, t, "bc"));
  const {
    data: n,
    computed: i,
    methods: l,
    watch: a,
    provide: c,
    inject: p,
    created: f,
    beforeMount: g,
    mounted: T,
    beforeUpdate: m,
    updated: A,
    activated: y,
    deactivated: I,
    beforeDestroy: H,
    beforeUnmount: j,
    destroyed: G,
    unmounted: L,
    render: ot,
    renderTracked: mt,
    renderTriggered: _t,
    errorCaptured: Lt,
    serverPrefetch: xe,
    expose: Jt,
    inheritAttrs: J,
    components: h,
    directives: R,
    filters: B,
  } = e;
  if ((p && _r(p, o, null), l))
    for (const K in l) {
      const z = l[K];
      F(z) && (o[K] = z.bind(s));
    }
  if (n) {
    const K = n.call(s, s);
    tt(K) && (t.data = cn(K));
  }
  if (((Ys = !0), i))
    for (const K in i) {
      const z = i[K],
        Qt = F(z) ? z.bind(s, s) : F(z.get) ? z.get.bind(s, s) : Kt,
        Xe = !F(z) && F(z.set) ? z.set.bind(s) : Kt,
        ae = it({ get: Qt, set: Xe });
      Object.defineProperty(o, K, {
        enumerable: !0,
        configurable: !0,
        get: () => ae.value,
        set: (Nt) => (ae.value = Nt),
      });
    }
  if (a) for (const K in a) Do(a[K], o, s, K);
  if (c) {
    const K = F(c) ? c.call(s) : c;
    Reflect.ownKeys(K).forEach((z) => {
      er(z, K[z]);
    });
  }
  f && In(f, t, "c");
  function lt(K, z) {
    U(z) ? z.forEach((Qt) => K(Qt.bind(s))) : z && K(z.bind(s));
  }
  if (
    (lt(ur, g),
    lt($e, T),
    lt(fr, m),
    lt(dr, A),
    lt(lr, y),
    lt(ar, I),
    lt(br, Lt),
    lt(mr, mt),
    lt(hr, _t),
    lt(pr, j),
    lt($s, L),
    lt(gr, xe),
    U(Jt))
  )
    if (Jt.length) {
      const K = t.exposed || (t.exposed = {});
      Jt.forEach((z) => {
        Object.defineProperty(K, z, {
          get: () => s[z],
          set: (Qt) => (s[z] = Qt),
          enumerable: !0,
        });
      });
    } else t.exposed || (t.exposed = {});
  (ot && t.render === Kt && (t.render = ot),
    J != null && (t.inheritAttrs = J),
    h && (t.components = h),
    R && (t.directives = R),
    xe && No(t));
}
function _r(t, e, s = Kt) {
  U(t) && (t = zs(t));
  for (const o in t) {
    const n = t[o];
    let i;
    (tt(n)
      ? "default" in n
        ? (i = is(n.from || o, n.default, !0))
        : (i = is(n.from || o))
      : (i = is(n)),
      ht(i)
        ? Object.defineProperty(e, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (l) => (i.value = l),
          })
        : (e[o] = i));
  }
}
function In(t, e, s) {
  Ot(U(t) ? t.map((o) => o.bind(e.proxy)) : t.bind(e.proxy), e, s);
}
function Do(t, e, s, o) {
  let n = o.includes(".") ? Mo(s, o) : () => s[o];
  if (rt(t)) {
    const i = e[t];
    F(i) && js(n, i);
  } else if (F(t)) js(n, t.bind(s));
  else if (tt(t))
    if (U(t)) t.forEach((i) => Do(i, e, s, o));
    else {
      const i = F(t.handler) ? t.handler.bind(s) : e[t.handler];
      F(i) && js(n, i, t);
    }
}
function Uo(t) {
  const e = t.type,
    { mixins: s, extends: o } = e,
    {
      mixins: n,
      optionsCache: i,
      config: { optionMergeStrategies: l },
    } = t.appContext,
    a = i.get(e);
  let c;
  return (
    a
      ? (c = a)
      : !n.length && !s && !o
        ? (c = e)
        : ((c = {}),
          n.length && n.forEach((p) => ds(c, p, l, !0)),
          ds(c, e, l)),
    tt(e) && i.set(e, c),
    c
  );
}
function ds(t, e, s, o = !1) {
  const { mixins: n, extends: i } = e;
  (i && ds(t, i, s, !0), n && n.forEach((l) => ds(t, l, s, !0)));
  for (const l in e)
    if (!(o && l === "expose")) {
      const a = wr[l] || (s && s[l]);
      t[l] = a ? a(t[l], e[l]) : e[l];
    }
  return t;
}
const wr = {
  data: Pn,
  props: Rn,
  emits: Rn,
  methods: Oe,
  computed: Oe,
  beforeCreate: bt,
  created: bt,
  beforeMount: bt,
  mounted: bt,
  beforeUpdate: bt,
  updated: bt,
  beforeDestroy: bt,
  beforeUnmount: bt,
  destroyed: bt,
  unmounted: bt,
  activated: bt,
  deactivated: bt,
  errorCaptured: bt,
  serverPrefetch: bt,
  components: Oe,
  directives: Oe,
  watch: Tr,
  provide: Pn,
  inject: kr,
};
function Pn(t, e) {
  return e
    ? t
      ? function () {
          return pt(
            F(t) ? t.call(this, this) : t,
            F(e) ? e.call(this, this) : e,
          );
        }
      : e
    : t;
}
function kr(t, e) {
  return Oe(zs(t), zs(e));
}
function zs(t) {
  if (U(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) e[t[s]] = t[s];
    return e;
  }
  return t;
}
function bt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Oe(t, e) {
  return t ? pt(Object.create(null), t, e) : e;
}
function Rn(t, e) {
  return t
    ? U(t) && U(e)
      ? [...new Set([...t, ...e])]
      : pt(Object.create(null), An(t), An(e ?? {}))
    : e;
}
function Tr(t, e) {
  if (!t) return e;
  if (!e) return t;
  const s = pt(Object.create(null), t);
  for (const o in e) s[o] = bt(t[o], e[o]);
  return s;
}
function Fo() {
  return {
    app: null,
    config: {
      isNativeTag: eo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Cr = 0;
function Sr(t, e) {
  return function (o, n = null) {
    (F(o) || (o = pt({}, o)), n != null && !tt(n) && (n = null));
    const i = Fo(),
      l = new WeakSet(),
      a = [];
    let c = !1;
    const p = (i.app = {
      _uid: Cr++,
      _component: o,
      _props: n,
      _container: null,
      _context: i,
      _instance: null,
      version: ol,
      get config() {
        return i.config;
      },
      set config(f) {},
      use(f, ...g) {
        return (
          l.has(f) ||
            (f && F(f.install)
              ? (l.add(f), f.install(p, ...g))
              : F(f) && (l.add(f), f(p, ...g))),
          p
        );
      },
      mixin(f) {
        return (i.mixins.includes(f) || i.mixins.push(f), p);
      },
      component(f, g) {
        return g ? ((i.components[f] = g), p) : i.components[f];
      },
      directive(f, g) {
        return g ? ((i.directives[f] = g), p) : i.directives[f];
      },
      mount(f, g, T) {
        if (!c) {
          const m = p._ceVNode || Pt(o, n);
          return (
            (m.appContext = i),
            T === !0 ? (T = "svg") : T === !1 && (T = void 0),
            t(m, f, T),
            (c = !0),
            (p._container = f),
            (f.__vue_app__ = p),
            Is(m.component)
          );
        }
      },
      onUnmount(f) {
        a.push(f);
      },
      unmount() {
        c &&
          (Ot(a, p._instance, 16),
          t(null, p._container),
          delete p._container.__vue_app__);
      },
      provide(f, g) {
        return ((i.provides[f] = g), p);
      },
      runWithContext(f) {
        const g = Te;
        Te = p;
        try {
          return f();
        } finally {
          Te = g;
        }
      },
    });
    return p;
  };
}
let Te = null;
const $r = (t, e) =>
  e === "modelValue" || e === "model-value"
    ? t.modelModifiers
    : t[`${e}Modifiers`] || t[`${At(e)}Modifiers`] || t[`${be(e)}Modifiers`];
function Er(t, e, ...s) {
  if (t.isUnmounted) return;
  const o = t.vnode.props || st;
  let n = s;
  const i = e.startsWith("update:"),
    l = i && $r(o, e.slice(7));
  l &&
    (l.trim && (n = s.map((f) => (rt(f) ? f.trim() : f))),
    l.number && (n = s.map(_s)));
  let a,
    c = o[(a = Rs(e))] || o[(a = Rs(At(e)))];
  (!c && i && (c = o[(a = Rs(be(e)))]), c && Ot(c, t, 6, n));
  const p = o[a + "Once"];
  if (p) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[a]) return;
    ((t.emitted[a] = !0), Ot(p, t, 6, n));
  }
}
const Ar = new WeakMap();
function Ho(t, e, s = !1) {
  const o = s ? Ar : e.emitsCache,
    n = o.get(t);
  if (n !== void 0) return n;
  const i = t.emits;
  let l = {},
    a = !1;
  if (!F(t)) {
    const c = (p) => {
      const f = Ho(p, e, !0);
      f && ((a = !0), pt(l, f));
    };
    (!s && e.mixins.length && e.mixins.forEach(c),
      t.extends && c(t.extends),
      t.mixins && t.mixins.forEach(c));
  }
  return !i && !a
    ? (tt(t) && o.set(t, null), null)
    : (U(i) ? i.forEach((c) => (l[c] = null)) : pt(l, i),
      tt(t) && o.set(t, l),
      l);
}
function Es(t, e) {
  return !t || !bs(e)
    ? !1
    : ((e = e.slice(2)),
      (e = e === "Once" ? e : e.replace(/Once$/, "")),
      Y(t, e[0].toLowerCase() + e.slice(1)) || Y(t, be(e)) || Y(t, e));
}
function On(t) {
  const {
      type: e,
      vnode: s,
      proxy: o,
      withProxy: n,
      propsOptions: [i],
      slots: l,
      attrs: a,
      emit: c,
      render: p,
      renderCache: f,
      props: g,
      data: T,
      setupState: m,
      ctx: A,
      inheritAttrs: y,
    } = t,
    I = us(t);
  let H, j;
  try {
    if (s.shapeFlag & 4) {
      const L = n || o,
        ot = L;
      ((H = qt(p.call(ot, L, f, g, m, T, A))), (j = a));
    } else {
      const L = e;
      ((H = qt(
        L.length > 1 ? L(g, { attrs: a, slots: l, emit: c }) : L(g, null),
      )),
        (j = e.props ? a : Ir(a)));
    }
  } catch (L) {
    ((me.length = 0), Ts(L, t, 1), (H = Pt(ie)));
  }
  let G = H;
  if (j && y !== !1) {
    const L = Object.keys(j),
      { shapeFlag: ot } = G;
    L.length &&
      ot & 7 &&
      (i && L.some(xs) && (j = Pr(j, i)), (G = Se(G, j, !1, !0)));
  }
  if (
    (s.dirs &&
      ((G = Se(G, null, !1, !0)),
      (G.dirs = G.dirs ? G.dirs.concat(s.dirs) : s.dirs)),
    s.transition)
  ) {
    const L = (Cs(G.type) && Lo(G)) || G;
    pn(L, s.transition);
  }
  return ((H = G), us(I), H);
}
const Ir = (t) => {
    let e;
    for (const s in t)
      (s === "class" || s === "style" || bs(s)) && ((e || (e = {}))[s] = t[s]);
    return e;
  },
  Pr = (t, e) => {
    const s = {};
    for (const o in t) (!xs(o) || !(o.slice(9) in e)) && (s[o] = t[o]);
    return s;
  };
function Rr(t, e, s) {
  const { props: o, children: n, component: i } = t,
    { props: l, children: a, patchFlag: c } = e,
    p = i.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (s && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return o ? Mn(o, l, p) : !!l;
    if (c & 8) {
      const f = e.dynamicProps;
      for (let g = 0; g < f.length; g++) {
        const T = f[g];
        if (Vo(l, o, T) && !Es(p, T)) return !0;
      }
    }
  } else
    return (n || a) && (!a || !a.$stable)
      ? !0
      : o === l
        ? !1
        : o
          ? l
            ? Mn(o, l, p)
            : !0
          : !!l;
  return !1;
}
function Mn(t, e, s) {
  const o = Object.keys(e);
  if (o.length !== Object.keys(t).length) return !0;
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (Vo(e, t, i) && !Es(s, i)) return !0;
  }
  return !1;
}
function Vo(t, e, s) {
  const o = t[s],
    n = e[s];
  return s === "style" && tt(o) && tt(n) ? !Qe(o, n) : o !== n;
}
function Or({ vnode: t, parent: e, suspense: s }, o) {
  for (; e; ) {
    const n = e.subTree;
    if (
      (n.suspense &&
        n.suspense.activeBranch === t &&
        ((n.suspense.vnode.el = n.el = o), (t = n)),
      n === t)
    )
      (((t = e.vnode).el = o), (e = e.parent));
    else break;
  }
  s && s.activeBranch === t && (s.vnode.el = o);
}
const qo = {},
  Wo = () => Object.create(qo),
  Bo = (t) => Object.getPrototypeOf(t) === qo;
function Mr(t, e, s, o = !1) {
  const n = {},
    i = Wo();
  ((t.propsDefaults = Object.create(null)), Ko(t, e, n, i));
  for (const l in t.propsOptions[0]) l in n || (n[l] = void 0);
  (s ? (t.props = o ? n : Vi(n)) : t.type.props ? (t.props = n) : (t.props = i),
    (t.attrs = i));
}
function Lr(t, e, s, o) {
  const {
      props: n,
      attrs: i,
      vnode: { patchFlag: l },
    } = t,
    a = Q(n),
    [c] = t.propsOptions;
  let p = !1;
  if ((o || l > 0) && !(l & 16)) {
    if (l & 8) {
      const f = t.vnode.dynamicProps;
      for (let g = 0; g < f.length; g++) {
        let T = f[g];
        if (Es(t.emitsOptions, T)) continue;
        const m = e[T];
        if (c)
          if (Y(i, T)) m !== i[T] && ((i[T] = m), (p = !0));
          else {
            const A = At(T);
            n[A] = Xs(c, a, A, m, t, !1);
          }
        else m !== i[T] && ((i[T] = m), (p = !0));
      }
    }
  } else {
    Ko(t, e, n, i) && (p = !0);
    let f;
    for (const g in a)
      (!e || (!Y(e, g) && ((f = be(g)) === g || !Y(e, f)))) &&
        (c
          ? s &&
            (s[g] !== void 0 || s[f] !== void 0) &&
            (n[g] = Xs(c, a, g, void 0, t, !0))
          : delete n[g]);
    if (i !== a) for (const g in i) (!e || !Y(e, g)) && (delete i[g], (p = !0));
  }
  p && Zt(t.attrs, "set", "");
}
function Ko(t, e, s, o) {
  const [n, i] = t.propsOptions;
  let l = !1,
    a;
  if (e)
    for (let c in e) {
      if (Le(c)) continue;
      const p = e[c];
      let f;
      n && Y(n, (f = At(c)))
        ? !i || !i.includes(f)
          ? (s[f] = p)
          : ((a || (a = {}))[f] = p)
        : Es(t.emitsOptions, c) ||
          ((!(c in o) || p !== o[c]) && ((o[c] = p), (l = !0)));
    }
  if (i) {
    const c = Q(s),
      p = a || st;
    for (let f = 0; f < i.length; f++) {
      const g = i[f];
      s[g] = Xs(n, c, g, p[g], t, !Y(p, g));
    }
  }
  return l;
}
function Xs(t, e, s, o, n, i) {
  const l = t[s];
  if (l != null) {
    const a = Y(l, "default");
    if (a && o === void 0) {
      const c = l.default;
      if (l.type !== Function && !l.skipFactory && F(c)) {
        const { propsDefaults: p } = n;
        if (s in p) o = p[s];
        else {
          const f = ze(n);
          ((o = p[s] = c.call(null, e)), f());
        }
      } else o = c;
      n.ce && n.ce._setProp(s, o);
    }
    l[0] &&
      (i && !a ? (o = !1) : l[1] && (o === "" || o === be(s)) && (o = !0));
  }
  return o;
}
const Nr = new WeakMap();
function Go(t, e, s = !1) {
  const o = s ? Nr : e.propsCache,
    n = o.get(t);
  if (n) return n;
  const i = t.props,
    l = {},
    a = [];
  let c = !1;
  if (!F(t)) {
    const f = (g) => {
      c = !0;
      const [T, m] = Go(g, e, !0);
      (pt(l, T), m && a.push(...m));
    };
    (!s && e.mixins.length && e.mixins.forEach(f),
      t.extends && f(t.extends),
      t.mixins && t.mixins.forEach(f));
  }
  if (!i && !c) return (tt(t) && o.set(t, _e), _e);
  if (U(i))
    for (let f = 0; f < i.length; f++) {
      const g = At(i[f]);
      Ln(g) && (l[g] = st);
    }
  else if (i)
    for (const f in i) {
      const g = At(f);
      if (Ln(g)) {
        const T = i[f],
          m = (l[g] = U(T) || F(T) ? { type: T } : pt({}, T)),
          A = m.type;
        let y = !1,
          I = !0;
        if (U(A))
          for (let H = 0; H < A.length; ++H) {
            const j = A[H],
              G = F(j) && j.name;
            if (G === "Boolean") {
              y = !0;
              break;
            } else G === "String" && (I = !1);
          }
        else y = F(A) && A.name === "Boolean";
        ((m[0] = y), (m[1] = I), (y || Y(m, "default")) && a.push(g));
      }
    }
  const p = [l, a];
  return (tt(t) && o.set(t, p), p);
}
function Ln(t) {
  return t[0] !== "$" && !Le(t);
}
const hn = (t) => t === "_" || t === "_ctx" || t === "$stable",
  mn = (t) => (U(t) ? t.map(qt) : [qt(t)]),
  jr = (t, e, s) => {
    if (e._n) return e;
    const o = tr((...n) => mn(e(...n)), s);
    return ((o._c = !1), o);
  },
  Jo = (t, e, s) => {
    const o = t._ctx;
    for (const n in t) {
      if (hn(n)) continue;
      const i = t[n];
      if (F(i)) e[n] = jr(n, i, o);
      else if (i != null) {
        const l = mn(i);
        e[n] = () => l;
      }
    }
  },
  Qo = (t, e) => {
    const s = mn(e);
    t.slots.default = () => s;
  },
  Yo = (t, e, s) => {
    for (const o in e) (s || !hn(o)) && (t[o] = e[o]);
  },
  Dr = (t, e, s) => {
    const o = (t.slots = Wo());
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? (Yo(o, e, s), s && ro(o, "_", n, !0)) : Jo(e, o);
    } else e && Qo(t, e);
  },
  Ur = (t, e, s) => {
    const { vnode: o, slots: n } = t;
    let i = !0,
      l = st;
    if (o.shapeFlag & 32) {
      const a = e._;
      (a
        ? s && a === 1
          ? (i = !1)
          : Yo(n, e, s)
        : ((i = !e.$stable), Jo(e, n)),
        (l = e));
    } else e && (Qo(t, e), (l = { default: 1 }));
    if (i) for (const a in n) !hn(a) && l[a] == null && delete n[a];
  },
  yt = Wr;
function Fr(t) {
  return Hr(t);
}
function Hr(t, e) {
  const s = ws();
  s.__VUE__ = !0;
  const {
      insert: o,
      remove: n,
      patchProp: i,
      createElement: l,
      createText: a,
      createComment: c,
      setText: p,
      setElementText: f,
      parentNode: g,
      nextSibling: T,
      setScopeId: m = Kt,
      insertStaticContent: A,
    } = t,
    y = (
      u,
      d,
      b,
      w = null,
      _ = null,
      x = null,
      P = void 0,
      E = null,
      $ = !!d.dynamicChildren,
    ) => {
      if (u === d) return;
      (u && !Re(u, d) && ((w = Ze(u)), Nt(u, _, x, !0), (u = null)),
        d.patchFlag === -2 && (($ = !1), (d.dynamicChildren = null)));
      const { type: v, ref: N, shapeFlag: O } = d;
      switch (v) {
        case As:
          I(u, d, b, w);
          break;
        case ie:
          H(u, d, b, w);
          break;
        case rs:
          u == null && j(d, b, w, P);
          break;
        case at:
          h(u, d, b, w, _, x, P, E, $);
          break;
        default:
          O & 1
            ? ot(u, d, b, w, _, x, P, E, $)
            : O & 6
              ? R(u, d, b, w, _, x, P, E, $)
              : (O & 64 || O & 128) && v.process(u, d, b, w, _, x, P, E, $, Ae);
      }
      N != null && _
        ? De(N, u && u.ref, x, d || u, !d)
        : N == null && u && u.ref != null && De(u.ref, null, x, u, !0);
    },
    I = (u, d, b, w) => {
      if (u == null) o((d.el = a(d.children)), b, w);
      else {
        const _ = (d.el = u.el);
        d.children !== u.children && p(_, d.children);
      }
    },
    H = (u, d, b, w) => {
      u == null ? o((d.el = c(d.children || "")), b, w) : (d.el = u.el);
    },
    j = (u, d, b, w) => {
      [u.el, u.anchor] = A(u.children, d, b, w, u.el, u.anchor);
    },
    G = ({ el: u, anchor: d }, b, w) => {
      let _;
      for (; u && u !== d; ) ((_ = T(u)), o(u, b, w), (u = _));
      o(d, b, w);
    },
    L = ({ el: u, anchor: d }) => {
      let b;
      for (; u && u !== d; ) ((b = T(u)), n(u), (u = b));
      n(d);
    },
    ot = (u, d, b, w, _, x, P, E, $) => {
      if (
        (d.type === "svg" ? (P = "svg") : d.type === "math" && (P = "mathml"),
        u == null)
      )
        mt(d, b, w, _, x, P, E, $);
      else {
        const v = u.el && u.el._isVueCE ? u.el : null;
        try {
          (v && v._beginPatch(), xe(u, d, _, x, P, E, $));
        } finally {
          v && v._endPatch();
        }
      }
    },
    mt = (u, d, b, w, _, x, P, E) => {
      let $, v;
      const { props: N, shapeFlag: O, transition: M, dirs: D } = u;
      if (
        (($ = u.el = l(u.type, x, N && N.is, N)),
        O & 8
          ? f($, u.children)
          : O & 16 && Lt(u.children, $, null, w, _, Fs(u, x), P, E),
        D && ce(u, null, w, "created"),
        _t($, u, u.scopeId, P, w),
        N)
      ) {
        for (const et in N)
          et !== "value" && !Le(et) && i($, et, null, N[et], x, w);
        ("value" in N && i($, "value", null, N.value, x),
          (v = N.onVnodeBeforeMount) && Ft(v, w, u));
      }
      D && ce(u, null, w, "beforeMount");
      const W = Vr(_, M);
      (W && M.beforeEnter($),
        o($, d, b),
        ((v = N && N.onVnodeMounted) || W || D) &&
          yt(() => {
            try {
              (v && Ft(v, w, u),
                W && M.enter($),
                D && ce(u, null, w, "mounted"));
            } finally {
            }
          }, _));
    },
    _t = (u, d, b, w, _) => {
      if ((b && m(u, b), w)) for (let x = 0; x < w.length; x++) m(u, w[x]);
      if (_) {
        let x = _.subTree;
        if (
          d === x ||
          (ti(x.type) && (x.ssContent === d || x.ssFallback === d))
        ) {
          const P = _.vnode;
          _t(u, P, P.scopeId, P.slotScopeIds, _.parent);
        }
      }
    },
    Lt = (u, d, b, w, _, x, P, E, $ = 0) => {
      for (let v = $; v < u.length; v++) {
        const N = (u[v] = E ? Xt(u[v]) : qt(u[v]));
        y(null, N, d, b, w, _, x, P, E);
      }
    },
    xe = (u, d, b, w, _, x, P) => {
      const E = (d.el = u.el);
      let { patchFlag: $, dynamicChildren: v, dirs: N } = d;
      $ |= u.patchFlag & 16;
      const O = u.props || st,
        M = d.props || st;
      let D;
      if (
        (b && ue(b, !1),
        (D = M.onVnodeBeforeUpdate) && Ft(D, b, d, u),
        N && ce(d, u, b, "beforeUpdate"),
        b && ue(b, !0),
        v &&
          (!u.dynamicChildren || u.dynamicChildren.length !== v.length) &&
          (($ = 0), (P = !1), (v = null)),
        ((O.innerHTML && M.innerHTML == null) ||
          (O.textContent && M.textContent == null)) &&
          f(E, ""),
        v
          ? Jt(u.dynamicChildren, v, E, b, w, Fs(d, _), x)
          : P || z(u, d, E, null, b, w, Fs(d, _), x, !1),
        $ > 0)
      ) {
        if ($ & 16) J(E, O, M, b, _);
        else if (
          ($ & 2 && O.class !== M.class && i(E, "class", null, M.class, _),
          $ & 4 && i(E, "style", O.style, M.style, _),
          $ & 8)
        ) {
          const W = d.dynamicProps;
          for (let et = 0; et < W.length; et++) {
            const X = W[et],
              ct = O[X],
              ft = M[X];
            (ft !== ct || X === "value") && i(E, X, ct, ft, _, b);
          }
        }
        $ & 1 && u.children !== d.children && f(E, d.children);
      } else !P && v == null && J(E, O, M, b, _);
      ((D = M.onVnodeUpdated) || N) &&
        yt(() => {
          (D && Ft(D, b, d, u), N && ce(d, u, b, "updated"));
        }, w);
    },
    Jt = (u, d, b, w, _, x, P) => {
      for (let E = 0; E < d.length; E++) {
        const $ = u[E],
          v = d[E],
          N =
            $.el && ($.type === at || !Re($, v) || $.shapeFlag & 198)
              ? g($.el)
              : b;
        y($, v, N, null, w, _, x, P, !0);
      }
    },
    J = (u, d, b, w, _) => {
      if (d !== b) {
        if (d !== st)
          for (const x in d) !Le(x) && !(x in b) && i(u, x, d[x], null, _, w);
        for (const x in b) {
          if (Le(x)) continue;
          const P = b[x],
            E = d[x];
          P !== E && x !== "value" && i(u, x, E, P, _, w);
        }
        "value" in b && i(u, "value", d.value, b.value, _);
      }
    },
    h = (u, d, b, w, _, x, P, E, $) => {
      const v = (d.el = u ? u.el : a("")),
        N = (d.anchor = u ? u.anchor : a(""));
      let { patchFlag: O, dynamicChildren: M, slotScopeIds: D } = d;
      (D && (E = E ? E.concat(D) : D),
        u == null
          ? (o(v, b, w), o(N, b, w), Lt(d.children || [], b, N, _, x, P, E, $))
          : O > 0 &&
              O & 64 &&
              M &&
              u.dynamicChildren &&
              u.dynamicChildren.length === M.length
            ? (Jt(u.dynamicChildren, M, b, _, x, P, E),
              (d.key != null || (_ && d === _.subTree)) && zo(u, d, !0))
            : z(u, d, b, N, _, x, P, E, $));
    },
    R = (u, d, b, w, _, x, P, E, $) => {
      ((d.slotScopeIds = E),
        u == null
          ? d.shapeFlag & 512
            ? _.ctx.activate(d, b, w, P, $)
            : B(d, b, w, _, x, P, $)
          : ut(u, d, $));
    },
    B = (u, d, b, w, _, x, P) => {
      const E = (u.component = zr(u, w, _));
      if ((gn(u) && (E.ctx.renderer = Ae), Zr(E, !1, P), E.asyncDep)) {
        if ((_ && _.registerDep(E, lt, P), !u.el)) {
          const $ = (E.subTree = Pt(ie));
          (H(null, $, d, b), (u.placeholder = $.el));
        }
      } else lt(E, u, d, b, _, x, P);
    },
    ut = (u, d, b) => {
      const w = (d.component = u.component);
      if (Rr(u, d, b))
        if (w.asyncDep && !w.asyncResolved) {
          K(w, d, b);
          return;
        } else ((w.next = d), w.update());
      else ((d.el = u.el), (w.vnode = d));
    },
    lt = (u, d, b, w, _, x, P) => {
      const E = () => {
        if (u.isMounted) {
          let { next: O, bu: M, u: D, parent: W, vnode: et } = u;
          {
            const Dt = Xo(u);
            if (Dt) {
              (O && ((O.el = et.el), K(u, O, P)),
                Dt.asyncDep.then(() => {
                  yt(() => {
                    u.isUnmounted || v();
                  }, _);
                }));
              return;
            }
          }
          let X = O,
            ct;
          (ue(u, !1),
            O ? ((O.el = et.el), K(u, O, P)) : (O = et),
            M && os(M),
            (ct = O.props && O.props.onVnodeBeforeUpdate) && Ft(ct, W, O, et),
            ue(u, !0));
          const ft = On(u),
            jt = u.subTree;
          ((u.subTree = ft),
            y(jt, ft, g(jt.el), Ze(jt), u, _, x),
            (O.el = ft.el),
            X === null && Or(u, ft.el),
            D && yt(D, _),
            (ct = O.props && O.props.onVnodeUpdated) &&
              yt(() => Ft(ct, W, O, et), _));
        } else {
          let O;
          const { el: M, props: D } = d,
            { bm: W, m: et, parent: X, root: ct, type: ft } = u,
            jt = Ue(d);
          (ue(u, !1),
            W && os(W),
            !jt && (O = D && D.onVnodeBeforeMount) && Ft(O, X, d),
            ue(u, !0));
          {
            ct.ce &&
              ct.ce._hasShadowRoot() &&
              ct.ce._injectChildStyle(ft, u.parent ? u.parent.type : void 0);
            const Dt = (u.subTree = On(u));
            (y(null, Dt, b, w, u, _, x), (d.el = Dt.el));
          }
          if ((et && yt(et, _), !jt && (O = D && D.onVnodeMounted))) {
            const Dt = d;
            yt(() => Ft(O, X, Dt), _);
          }
          ((d.shapeFlag & 256 ||
            (X && Ue(X.vnode) && X.vnode.shapeFlag & 256)) &&
            u.a &&
            yt(u.a, _),
            (u.isMounted = !0),
            (d = b = w = null));
        }
      };
      u.scope.on();
      const $ = (u.effect = new uo(E));
      u.scope.off();
      const v = (u.update = $.run.bind($)),
        N = (u.job = $.runIfDirty.bind($));
      ((N.i = u), (N.id = u.uid), ($.scheduler = () => dn(N)), ue(u, !0), v());
    },
    K = (u, d, b) => {
      d.component = u;
      const w = u.vnode.props;
      ((u.vnode = d),
        (u.next = null),
        Lr(u, d.props, w, b),
        Ur(u, d.children, b),
        se(),
        Sn(u),
        ne());
    },
    z = (u, d, b, w, _, x, P, E, $ = !1) => {
      const v = u && u.children,
        N = u ? u.shapeFlag : 0,
        O = d.children,
        { patchFlag: M, shapeFlag: D } = d;
      if (M > 0) {
        if (M & 128) {
          Xe(v, O, b, w, _, x, P, E, $);
          return;
        } else if (M & 256) {
          Qt(v, O, b, w, _, x, P, E, $);
          return;
        }
      }
      D & 8
        ? (N & 16 && Ee(v, _, x), O !== v && f(b, O))
        : N & 16
          ? D & 16
            ? Xe(v, O, b, w, _, x, P, E, $)
            : Ee(v, _, x, !0)
          : (N & 8 && f(b, ""), D & 16 && Lt(O, b, w, _, x, P, E, $));
    },
    Qt = (u, d, b, w, _, x, P, E, $) => {
      ((u = u || _e), (d = d || _e));
      const v = u.length,
        N = d.length,
        O = Math.min(v, N);
      let M;
      for (M = 0; M < O; M++) {
        const D = (d[M] = $ ? Xt(d[M]) : qt(d[M]));
        y(u[M], D, b, null, _, x, P, E, $);
      }
      v > N ? Ee(u, _, x, !0, !1, O) : Lt(d, b, w, _, x, P, E, $, O);
    },
    Xe = (u, d, b, w, _, x, P, E, $) => {
      let v = 0;
      const N = d.length;
      let O = u.length - 1,
        M = N - 1;
      for (; v <= O && v <= M; ) {
        const D = u[v],
          W = (d[v] = $ ? Xt(d[v]) : qt(d[v]));
        if (Re(D, W)) y(D, W, b, null, _, x, P, E, $);
        else break;
        v++;
      }
      for (; v <= O && v <= M; ) {
        const D = u[O],
          W = (d[M] = $ ? Xt(d[M]) : qt(d[M]));
        if (Re(D, W)) y(D, W, b, null, _, x, P, E, $);
        else break;
        (O--, M--);
      }
      if (v > O) {
        if (v <= M) {
          const D = M + 1,
            W = D < N ? d[D].el : w;
          for (; v <= M; )
            (y(null, (d[v] = $ ? Xt(d[v]) : qt(d[v])), b, W, _, x, P, E, $),
              v++);
        }
      } else if (v > M) for (; v <= O; ) (Nt(u[v], _, x, !0), v++);
      else {
        const D = v,
          W = v,
          et = new Map();
        for (v = W; v <= M; v++) {
          const wt = (d[v] = $ ? Xt(d[v]) : qt(d[v]));
          wt.key != null && et.set(wt.key, v);
        }
        let X,
          ct = 0;
        const ft = M - W + 1;
        let jt = !1,
          Dt = 0;
        const Ie = new Array(ft);
        for (v = 0; v < ft; v++) Ie[v] = 0;
        for (v = D; v <= O; v++) {
          const wt = u[v];
          if (ct >= ft) {
            Nt(wt, _, x, !0);
            continue;
          }
          let Ut;
          if (wt.key != null) Ut = et.get(wt.key);
          else
            for (X = W; X <= M; X++)
              if (Ie[X - W] === 0 && Re(wt, d[X])) {
                Ut = X;
                break;
              }
          Ut === void 0
            ? Nt(wt, _, x, !0)
            : ((Ie[Ut - W] = v + 1),
              Ut >= Dt ? (Dt = Ut) : (jt = !0),
              y(wt, d[Ut], b, null, _, x, P, E, $),
              ct++);
        }
        const vn = jt ? qr(Ie) : _e;
        for (X = vn.length - 1, v = ft - 1; v >= 0; v--) {
          const wt = W + v,
            Ut = d[wt],
            yn = d[wt + 1],
            _n = wt + 1 < N ? yn.el || Zo(yn) : w;
          Ie[v] === 0
            ? y(null, Ut, b, _n, _, x, P, E, $)
            : jt && (X < 0 || v !== vn[X] ? ae(Ut, b, _n, 2) : X--);
        }
      }
    },
    ae = (u, d, b, w, _ = null) => {
      const { el: x, type: P, transition: E, children: $, shapeFlag: v } = u;
      if (v & 6) {
        ae(u.component.subTree, d, b, w);
        return;
      }
      if (v & 128) {
        u.suspense.move(d, b, w);
        return;
      }
      if (v & 64) {
        P.move(u, d, b, Ae);
        return;
      }
      if (P === at) {
        o(x, d, b);
        for (let O = 0; O < $.length; O++) ae($[O], d, b, w);
        o(u.anchor, d, b);
        return;
      }
      if (P === rs) {
        G(u, d, b);
        return;
      }
      if (w !== 2 && v & 1 && E)
        if (w === 0)
          E.persisted && !x[Ds]
            ? o(x, d, b)
            : (E.beforeEnter(x), o(x, d, b), yt(() => E.enter(x), _));
        else {
          const { leave: O, delayLeave: M, afterLeave: D } = E,
            W = () => {
              u.ctx.isUnmounted ? n(x) : o(x, d, b);
            },
            et = () => {
              const X = x._isLeaving || !!x[Ds];
              (x._isLeaving && x[Ds](!0),
                E.persisted && !X
                  ? W()
                  : O(x, () => {
                      (W(), D && D());
                    }));
            };
          M ? M(x, W, et) : et();
        }
      else o(x, d, b);
    },
    Nt = (u, d, b, w = !1, _ = !1) => {
      const {
        type: x,
        props: P,
        ref: E,
        children: $,
        dynamicChildren: v,
        shapeFlag: N,
        patchFlag: O,
        dirs: M,
        cacheIndex: D,
        memo: W,
      } = u;
      if (
        (O === -2 && (_ = !1),
        E != null && (se(), De(E, null, b, u, !0), ne()),
        D != null && (d.renderCache[D] = void 0),
        N & 256)
      ) {
        d.ctx.deactivate(u);
        return;
      }
      const et = N & 1 && M,
        X = !Ue(u);
      let ct;
      if ((X && (ct = P && P.onVnodeBeforeUnmount) && Ft(ct, d, u), N & 6))
        ci(u.component, b, w);
      else {
        if (N & 128) {
          u.suspense.unmount(b, w);
          return;
        }
        (et && ce(u, null, d, "beforeUnmount"),
          N & 64
            ? u.type.remove(u, d, b, Ae, w)
            : v && !v.hasOnce && (x !== at || (O > 0 && O & 64))
              ? Ee(v, d, b, !1, !0)
              : ((x === at && O & 384) || (!_ && N & 16)) && Ee($, d, b),
          w && bn(u));
      }
      const ft = W != null && D == null;
      ((X && (ct = P && P.onVnodeUnmounted)) || et || ft) &&
        yt(() => {
          (ct && Ft(ct, d, u),
            et && ce(u, null, d, "unmounted"),
            ft && (u.el = null));
        }, b);
    },
    bn = (u) => {
      const { type: d, el: b, anchor: w, transition: _ } = u;
      if (d === at) {
        ai(b, w);
        return;
      }
      if (d === rs) {
        L(u);
        return;
      }
      const x = () => {
        (n(b), _ && !_.persisted && _.afterLeave && _.afterLeave());
      };
      if (u.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: P, delayLeave: E } = _,
          $ = () => P(b, x);
        E ? E(u.el, x, $) : $();
      } else x();
    },
    ai = (u, d) => {
      let b;
      for (; u !== d; ) ((b = T(u)), n(u), (u = b));
      n(d);
    },
    ci = (u, d, b) => {
      const { bum: w, scope: _, job: x, subTree: P, um: E, m: $, a: v } = u;
      (Nn($),
        Nn(v),
        w && os(w),
        _.stop(),
        x && ((x.flags |= 8), Nt(P, u, d, b)),
        E && yt(E, d),
        yt(() => {
          u.isUnmounted = !0;
        }, d));
    },
    Ee = (u, d, b, w = !1, _ = !1, x = 0) => {
      for (let P = x; P < u.length; P++) Nt(u[P], d, b, w, _);
    },
    Ze = (u) => {
      if (u.shapeFlag & 6) return Ze(u.component.subTree);
      if (u.shapeFlag & 128) return u.suspense.next();
      const d = T(u.anchor || u.el),
        b = d && d[ir];
      return b ? T(b) : d;
    };
  let Ps = !1;
  const xn = (u, d, b) => {
      let w;
      (u == null
        ? d._vnode && (Nt(d._vnode, null, null, !0), (w = d._vnode.component))
        : y(d._vnode || null, u, d, null, null, null, b),
        (d._vnode = u),
        Ps || ((Ps = !0), Sn(w), Io(), (Ps = !1)));
    },
    Ae = {
      p: y,
      um: Nt,
      m: ae,
      r: bn,
      mt: B,
      mc: Lt,
      pc: z,
      pbc: Jt,
      n: Ze,
      o: t,
    };
  return { render: xn, hydrate: void 0, createApp: Sr(xn) };
}
function Fs({ type: t, props: e }, s) {
  return (s === "svg" && t === "foreignObject") ||
    (s === "mathml" &&
      t === "annotation-xml" &&
      e &&
      e.encoding &&
      e.encoding.includes("html"))
    ? void 0
    : s;
}
function ue({ effect: t, job: e }, s) {
  s ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5));
}
function Vr(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function zo(t, e, s = !1) {
  const o = t.children,
    n = e.children;
  if (U(o) && U(n))
    for (let i = 0; i < o.length; i++) {
      const l = o[i];
      let a = n[i];
      (a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = n[i] = Xt(n[i])), (a.el = l.el)),
        !s && a.patchFlag !== -2 && zo(l, a)),
        a.type === As &&
          (a.patchFlag === -1 && (a = n[i] = Xt(a)), (a.el = l.el)),
        a.type === ie && !a.el && (a.el = l.el));
    }
}
function qr(t) {
  const e = t.slice(),
    s = [0];
  let o, n, i, l, a;
  const c = t.length;
  for (o = 0; o < c; o++) {
    const p = t[o];
    if (p !== 0) {
      if (((n = s[s.length - 1]), t[n] < p)) {
        ((e[o] = n), s.push(o));
        continue;
      }
      for (i = 0, l = s.length - 1; i < l; )
        ((a = (i + l) >> 1), t[s[a]] < p ? (i = a + 1) : (l = a));
      p < t[s[i]] && (i > 0 && (e[o] = s[i - 1]), (s[i] = o));
    }
  }
  for (i = s.length, l = s[i - 1]; i-- > 0; ) ((s[i] = l), (l = e[l]));
  return s;
}
function Xo(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : Xo(e);
}
function Nn(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
}
function Zo(t) {
  if (t.placeholder) return t.placeholder;
  const e = t.component;
  return e ? Zo(e.subTree) : null;
}
const ti = (t) => t.__isSuspense;
function Wr(t, e) {
  e && e.pendingBranch
    ? U(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Zi(t);
}
const at = Symbol.for("v-fgt"),
  As = Symbol.for("v-txt"),
  ie = Symbol.for("v-cmt"),
  rs = Symbol.for("v-stc"),
  me = [];
let kt = null;
function k(t = !1) {
  me.push((kt = t ? null : []));
}
function ei() {
  (me.pop(), (kt = me[me.length - 1] || null));
}
let We = 1;
function jn(t, e = !1) {
  ((We += t), t < 0 && kt && e && (kt.hasOnce = !0));
}
function si(t) {
  return (
    (t.dynamicChildren = We > 0 ? kt || _e : null),
    ei(),
    We > 0 && kt && kt.push(t),
    t
  );
}
function S(t, e, s, o, n, i) {
  return si(r(t, e, s, o, n, i, !0));
}
function Et(t, e, s, o, n) {
  return si(Pt(t, e, s, o, n, !0));
}
function ni(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Re(t, e) {
  return t.type === e.type && t.key === e.key;
}
const oi = ({ key: t }) => t ?? null,
  ls = ({ ref: t, ref_key: e, ref_for: s }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? rt(t) || ht(t) || F(t)
        ? { i: Ct, r: t, k: e, f: !!s }
        : t
      : null
  );
function r(
  t,
  e = null,
  s = null,
  o = 0,
  n = null,
  i = t === at ? 0 : 1,
  l = !1,
  a = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && oi(e),
    ref: e && ls(e),
    scopeId: Ro,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: Ct,
  };
  return (
    a
      ? (ps(c, s), i & 128 && t.normalize(c))
      : s && (c.shapeFlag |= rt(s) ? 8 : 16),
    We > 0 &&
      !l &&
      kt &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      kt.push(c),
    c
  );
}
const Pt = Br;
function Br(t, e = null, s = null, o = 0, n = null, i = !1) {
  if (((!t || t === xr) && (t = ie), ni(t))) {
    const a = Se(t, e, !0);
    return (
      s && ps(a, s),
      We > 0 &&
        !i &&
        kt &&
        (a.shapeFlag & 6 ? (kt[kt.indexOf(t)] = a) : kt.push(a)),
      (a.patchFlag = -2),
      a
    );
  }
  if ((nl(t) && (t = t.__vccOpts), e)) {
    e = Kr(e);
    let { class: a, style: c } = e;
    (a && !rt(a) && (e.class = q(a)),
      tt(c) && (fn(c) && !U(c) && (c = pt({}, c)), (e.style = Je(c))));
  }
  const l = rt(t) ? 1 : ti(t) ? 128 : Cs(t) ? 64 : tt(t) ? 4 : F(t) ? 2 : 0;
  return r(t, e, s, o, n, l, i, !0);
}
function Kr(t) {
  return t ? (fn(t) || Bo(t) ? pt({}, t) : t) : null;
}
function Se(t, e, s = !1, o = !1) {
  const { props: n, ref: i, patchFlag: l, children: a, transition: c } = t,
    p = e ? Jr(n || {}, e) : n,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t.type,
      props: p,
      key: p && oi(p),
      ref:
        e && e.ref
          ? s && i
            ? U(i)
              ? i.concat(ls(e))
              : [i, ls(e)]
            : ls(e)
          : i,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: a,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== at ? (l === -1 ? 16 : l | 16) : l,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: c,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && Se(t.ssContent),
      ssFallback: t.ssFallback && Se(t.ssFallback),
      placeholder: t.placeholder,
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce,
    };
  return (c && o && pn(f, c.clone(f)), f);
}
function ee(t = " ", e = 0) {
  return Pt(As, null, t, e);
}
function Gr(t, e) {
  const s = Pt(rs, null, t);
  return ((s.staticCount = e), s);
}
function Z(t = "", e = !1) {
  return e ? (k(), Et(ie, null, t)) : Pt(ie, null, t);
}
function qt(t) {
  return t == null || typeof t == "boolean"
    ? Pt(ie)
    : U(t)
      ? Pt(at, null, t.slice())
      : ni(t)
        ? Xt(t)
        : Pt(As, null, String(t));
}
function Xt(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Se(t);
}
function ps(t, e) {
  let s = 0;
  const { shapeFlag: o } = t;
  if (e == null) e = null;
  else if (U(e)) s = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), ps(t, n()), n._c && (n._d = !0));
      return;
    } else {
      s = 32;
      const n = e._;
      !n && !Bo(e)
        ? (e._ctx = Ct)
        : n === 3 &&
          Ct &&
          (Ct.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else if (F(e)) {
    if (o & 65) {
      ps(t, { default: e });
      return;
    }
    ((e = { default: e, _ctx: Ct }), (s = 32));
  } else ((e = String(e)), o & 64 ? ((s = 16), (e = [ee(e)])) : (s = 8));
  ((t.children = e), (t.shapeFlag |= s));
}
function Jr(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    for (const n in o)
      if (n === "class")
        e.class !== o.class && (e.class = q([e.class, o.class]));
      else if (n === "style") e.style = Je([e.style, o.style]);
      else if (bs(n)) {
        const i = e[n],
          l = o[n];
        l && i !== l && !(U(i) && i.includes(l))
          ? (e[n] = i ? [].concat(i, l) : l)
          : l == null && i == null && !xs(n) && (e[n] = l);
      } else n !== "" && (e[n] = o[n]);
  }
  return e;
}
function Ft(t, e, s, o = null) {
  Ot(t, e, 7, [s, o]);
}
const Qr = Fo();
let Yr = 0;
function zr(t, e, s) {
  const o = t.type,
    n = (e ? e.appContext : t.appContext) || Qr,
    i = {
      uid: Yr++,
      vnode: t,
      type: o,
      parent: e,
      appContext: n,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new ki(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(n.provides),
      ids: e ? e.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Go(o, n),
      emitsOptions: Ho(o, n),
      emit: null,
      emitted: null,
      propsDefaults: st,
      inheritAttrs: o.inheritAttrs,
      ctx: st,
      data: st,
      props: st,
      attrs: st,
      slots: st,
      refs: st,
      setupState: st,
      setupContext: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = e ? e.root : i),
    (i.emit = Er.bind(null, i)),
    t.ce && t.ce(i),
    i
  );
}
let vt = null;
const Xr = () => vt || Ct;
let gs, Be;
{
  const t = ws(),
    e = (s, o) => {
      let n;
      return (
        (n = t[s]) || (n = t[s] = []),
        n.push(o),
        (i) => {
          n.length > 1 ? n.forEach((l) => l(i)) : n[0](i);
        }
      );
    };
  ((gs = e("__VUE_INSTANCE_SETTERS__", (s) => (vt = s))),
    (Be = e("__VUE_SSR_SETTERS__", (s) => (Ke = s))));
}
const ze = (t) => {
    const e = vt;
    return (
      gs(t),
      t.scope.on(),
      () => {
        (t.scope.off(), gs(e));
      }
    );
  },
  Dn = () => {
    (vt && vt.scope.off(), gs(null));
  };
function ii(t) {
  return t.vnode.shapeFlag & 4;
}
let Ke = !1;
function Zr(t, e = !1, s = !1) {
  e && Be(e);
  const { props: o, children: n } = t.vnode,
    i = ii(t);
  (Mr(t, o, i, e), Dr(t, n, s || e));
  const l = i ? tl(t, e) : void 0;
  return (e && Be(!1), l);
}
function tl(t, e) {
  const s = t.type;
  ((t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, vr)));
  const { setup: o } = s;
  if (o) {
    se();
    const n = (t.setupContext = o.length > 1 ? sl(t) : null),
      i = ze(t),
      l = Ye(o, t, 0, [t.props, n]),
      a = so(l);
    if ((ne(), i(), (a || t.sp) && !Ue(t) && No(t), a)) {
      if ((l.then(Dn, Dn), e))
        return l
          .then((c) => {
            Be(!0);
            try {
              Un(t, c, e);
            } finally {
              Be(!1);
            }
          })
          .catch((c) => {
            Ts(c, t, 0);
          });
      t.asyncDep = l;
    } else Un(t, l);
  } else ri(t);
}
function Un(t, e, s) {
  (F(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : tt(e) && (t.setupState = So(e)),
    ri(t));
}
function ri(t, e, s) {
  const o = t.type;
  t.render || (t.render = o.render || Kt);
  {
    const n = ze(t);
    se();
    try {
      yr(t);
    } finally {
      (ne(), n());
    }
  }
}
const el = {
  get(t, e) {
    return (gt(t, "get", ""), t[e]);
  },
};
function sl(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  return {
    attrs: new Proxy(t.attrs, el),
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function Is(t) {
  return t.exposed
    ? t.exposeProxy ||
        (t.exposeProxy = new Proxy(So(qi(t.exposed)), {
          get(e, s) {
            if (s in e) return e[s];
            if (s in Fe) return Fe[s](t);
          },
          has(e, s) {
            return s in e || s in Fe;
          },
        }))
    : t.proxy;
}
function nl(t) {
  return F(t) && "__vccOpts" in t;
}
const it = (t, e) => Ji(t, e, Ke),
  ol = "3.5.41";
/**
 * @vue/runtime-dom v3.5.41
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Zs;
const Fn = typeof window < "u" && window.trustedTypes;
if (Fn)
  try {
    Zs = Fn.createPolicy("vue", { createHTML: (t) => t });
  } catch {}
const li = Zs ? (t) => Zs.createHTML(t) : (t) => t,
  il = "http://www.w3.org/2000/svg",
  rl = "http://www.w3.org/1998/Math/MathML",
  zt = typeof document < "u" ? document : null,
  Hn = zt && zt.createElement("template"),
  ll = {
    insert: (t, e, s) => {
      e.insertBefore(t, s || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, s, o) => {
      const n =
        e === "svg"
          ? zt.createElementNS(il, t)
          : e === "mathml"
            ? zt.createElementNS(rl, t)
            : s
              ? zt.createElement(t, { is: s })
              : zt.createElement(t);
      return (
        t === "select" &&
          o &&
          o.multiple != null &&
          n.setAttribute("multiple", o.multiple),
        n
      );
    },
    createText: (t) => zt.createTextNode(t),
    createComment: (t) => zt.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => zt.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, s, o, n, i) {
      const l = s ? s.previousSibling : e.lastChild;
      if (n && (n === i || n.nextSibling))
        for (
          ;
          e.insertBefore(n.cloneNode(!0), s),
            !(n === i || !(n = n.nextSibling));
        );
      else {
        Hn.innerHTML = li(
          o === "svg"
            ? `<svg>${t}</svg>`
            : o === "mathml"
              ? `<math>${t}</math>`
              : t,
        );
        const a = Hn.content;
        if (o === "svg" || o === "mathml") {
          const c = a.firstChild;
          for (; c.firstChild; ) a.appendChild(c.firstChild);
          a.removeChild(c);
        }
        e.insertBefore(a, s);
      }
      return [
        l ? l.nextSibling : e.firstChild,
        s ? s.previousSibling : e.lastChild,
      ];
    },
  },
  al = Symbol("_vtc");
function cl(t, e, s) {
  const o = t[al];
  (o && (e = (e ? [e, ...o] : [...o]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : s
        ? t.setAttribute("class", e)
        : (t.className = e));
}
const Vn = Symbol("_vod"),
  ul = Symbol("_vsh"),
  fl = Symbol(""),
  dl = /(?:^|;)\s*display\s*:/;
function pl(t, e, s) {
  const o = t.style,
    n = rt(s);
  let i = !1;
  if (s && !n) {
    if (e)
      if (rt(e))
        for (const l of e.split(";")) {
          const a = l.slice(0, l.indexOf(":")).trim();
          s[a] == null && Me(o, a, "");
        }
      else for (const l in e) s[l] == null && Me(o, l, "");
    for (const l in s) {
      l === "display" && (i = !0);
      const a = s[l];
      a != null
        ? hl(t, l, !rt(e) && e ? e[l] : void 0, a) || Me(o, l, a)
        : Me(o, l, "");
    }
  } else if (n) {
    if (e !== s) {
      const l = o[fl];
      (l && (s += ";" + l), (o.cssText = s), (i = dl.test(s)));
    }
  } else e && t.removeAttribute("style");
  Vn in t && ((t[Vn] = i ? o.display : ""), t[ul] && (o.display = "none"));
}
const qn = /\s*!important$/;
function Me(t, e, s) {
  if (U(s)) s.forEach((o) => Me(t, e, o));
  else if ((s == null && (s = ""), e.startsWith("--"))) t.setProperty(e, s);
  else {
    const o = gl(t, e);
    qn.test(s)
      ? t.setProperty(be(o), s.replace(qn, ""), "important")
      : (t[o] = s);
  }
}
const Wn = ["Webkit", "Moz", "ms"],
  Hs = {};
function gl(t, e) {
  const s = Hs[e];
  if (s) return s;
  let o = At(e);
  if (o !== "filter" && o in t) return (Hs[e] = o);
  o = io(o);
  for (let n = 0; n < Wn.length; n++) {
    const i = Wn[n] + o;
    if (i in t) return (Hs[e] = i);
  }
  return e;
}
function hl(t, e, s, o) {
  return (
    t.tagName === "TEXTAREA" &&
    (e === "width" || e === "height") &&
    rt(o) &&
    s === o
  );
}
const Bn = "http://www.w3.org/1999/xlink";
function Kn(t, e, s, o, n, i = yi(e)) {
  o && e.startsWith("xlink:")
    ? s == null
      ? t.removeAttributeNS(Bn, e.slice(6, e.length))
      : t.setAttributeNS(Bn, e, s)
    : s == null || (i && !lo(s))
      ? t.removeAttribute(e)
      : t.setAttribute(e, i ? "" : Gt(s) ? String(s) : s);
}
function Gn(t, e, s, o, n) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? li(s) : s);
    return;
  }
  const i = t.tagName;
  if (e === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const a = i === "OPTION" ? t.getAttribute("value") || "" : t.value,
      c = s == null ? (t.type === "checkbox" ? "on" : "") : String(s);
    ((a !== c || !("_value" in t)) && (t.value = c),
      s == null && t.removeAttribute(e),
      (t._value = s));
    return;
  }
  let l = !1;
  if (s === "" || s == null) {
    const a = typeof t[e];
    a === "boolean"
      ? (s = lo(s))
      : s == null && a === "string"
        ? ((s = ""), (l = !0))
        : a === "number" && ((s = 0), (l = !0));
  }
  try {
    t[e] = s;
  } catch {}
  l && t.removeAttribute(n || e);
}
function de(t, e, s, o) {
  t.addEventListener(e, s, o);
}
function ml(t, e, s, o) {
  t.removeEventListener(e, s, o);
}
const Jn = Symbol("_vei");
function bl(t, e, s, o, n = null) {
  const i = t[Jn] || (t[Jn] = {}),
    l = i[e];
  if (o && l) l.value = o;
  else {
    const [a, c] = yl(e);
    if (o) {
      const p = (i[e] = kl(o, n));
      de(t, a, p, c);
    } else l && (ml(t, a, l, c), (i[e] = void 0));
  }
}
const xl = /(Once|Passive|Capture)$/,
  vl = /^on:?(?:Once|Passive|Capture)$/;
function yl(t) {
  let e, s;
  for (; (s = t.match(xl)) && !vl.test(t); )
    (e || (e = {}),
      (t = t.slice(0, t.length - s[1].length)),
      (e[s[1].toLowerCase()] = !0));
  return [t[2] === ":" ? t.slice(3) : be(t.slice(2)), e];
}
let Vs = 0;
const _l = Promise.resolve(),
  wl = () => Vs || (_l.then(() => (Vs = 0)), (Vs = Date.now()));
function kl(t, e) {
  const s = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= s.attached) return;
    const n = s.value;
    if (U(n)) {
      const i = o.stopImmediatePropagation;
      o.stopImmediatePropagation = () => {
        (i.call(o), (o._stopped = !0));
      };
      const l = n.slice(),
        a = [o];
      for (let c = 0; c < l.length && !o._stopped; c++) {
        const p = l[c];
        p && Ot(p, e, 5, a);
      }
    } else Ot(n, e, 5, [o]);
  };
  return ((s.value = t), (s.attached = wl()), s);
}
const Qn = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  Tl = (t, e, s, o, n, i) => {
    const l = n === "svg";
    e === "class"
      ? cl(t, o, l)
      : e === "style"
        ? pl(t, s, o)
        : bs(e)
          ? xs(e) || bl(t, e, s, o, i)
          : (
                e[0] === "."
                  ? ((e = e.slice(1)), !0)
                  : e[0] === "^"
                    ? ((e = e.slice(1)), !1)
                    : Cl(t, e, o, l)
              )
            ? (Gn(t, e, o),
              !t.tagName.includes("-") &&
                (e === "value" || e === "checked" || e === "selected") &&
                Kn(t, e, o, l, i, e !== "value"))
            : t._isVueCE &&
                (Sl(t, e) ||
                  (t._def.__asyncLoader && (/[A-Z]/.test(e) || !rt(o))))
              ? Gn(t, At(e), o, i, e)
              : (e === "true-value"
                  ? (t._trueValue = o)
                  : e === "false-value" && (t._falseValue = o),
                Kn(t, e, o, l));
  };
function Cl(t, e, s, o) {
  if (o)
    return !!(
      e === "innerHTML" ||
      e === "textContent" ||
      (e in t && Qn(e) && F(s))
    );
  if (
    e === "spellcheck" ||
    e === "draggable" ||
    e === "translate" ||
    e === "autocorrect" ||
    (e === "sandbox" && t.tagName === "IFRAME") ||
    e === "form" ||
    (e === "list" && t.tagName === "INPUT") ||
    (e === "type" && t.tagName === "TEXTAREA")
  )
    return !1;
  if (e === "width" || e === "height") {
    const n = t.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Qn(e) && rt(s) ? !1 : e in t;
}
function Sl(t, e) {
  const s = t._def.props;
  if (!s) return !1;
  const o = At(e);
  return Array.isArray(s)
    ? s.some((n) => At(n) === o)
    : Object.keys(s).some((n) => At(n) === o);
}
const hs = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return U(e) ? (s) => os(e, s) : e;
};
function $l(t) {
  t.target.composing = !0;
}
function Yn(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
const pe = Symbol("_assign"),
  ns = Symbol("_initialValue");
function qs(t, e, s) {
  return (e && (t = t.trim()), s && (t = _s(t)), t);
}
const Bt = {
    created(t, { modifiers: { lazy: e, trim: s, number: o } }, n) {
      (t.parentNode &&
        (t.type === "text"
          ? (t[ns] = t.defaultValue.replace(/[\r\n]/g, ""))
          : t.type === "textarea" &&
            (t[ns] = t.defaultValue.replace(
              /\r\n?/g,
              `
`,
            ))),
        (t[pe] = hs(n)));
      const i = o || (n.props && n.props.type === "number");
      (de(t, e ? "change" : "input", (l) => {
        l.target.composing || t[pe](qs(t.value, s, i));
      }),
        (s || i) &&
          de(t, "change", () => {
            t.value = qs(t.value, s, i);
          }),
        e ||
          (de(t, "compositionstart", $l),
          de(t, "compositionend", Yn),
          de(t, "change", Yn)));
    },
    mounted(t, { value: e, modifiers: { trim: s, number: o } }) {
      const n = e ?? "",
        i = t[ns];
      (delete t[ns],
        i !== void 0 &&
        (t.type === "text" || t.type === "textarea") &&
        t.value !== i
          ? t[pe](qs(t.value, s, o))
          : (t.value = n));
    },
    beforeUpdate(
      t,
      { value: e, oldValue: s, modifiers: { lazy: o, trim: n, number: i } },
      l,
    ) {
      if (((t[pe] = hs(l)), t.composing)) return;
      const a =
          (i || t.type === "number") && !/^0\d/.test(t.value)
            ? _s(t.value)
            : t.value,
        c = e ?? "";
      if (a === c) return;
      const p = t.getRootNode();
      ((p instanceof Document || p instanceof ShadowRoot) &&
        p.activeElement === t &&
        t.type !== "range" &&
        ((o && e === s) || (n && t.value.trim() === c))) ||
        (t.value = c);
    },
  },
  zn = {
    deep: !0,
    created(t, { value: e, modifiers: { number: s } }, o) {
      ((t._modelValue = e),
        de(t, "change", () => {
          const n = Array.prototype.filter
            .call(t.options, (i) => i.selected)
            .map((i) => (s ? _s(ms(i)) : ms(i)));
          (t[pe](t.multiple ? (vs(t._modelValue) ? new Set(n) : n) : n[0]),
            (t._assigning = !0),
            Eo(() => {
              t._assigning = !1;
            }));
        }),
        (t[pe] = hs(o)));
    },
    mounted(t, { value: e }) {
      Xn(t, e);
    },
    beforeUpdate(t, { value: e }, s) {
      ((t._modelValue = e), (t[pe] = hs(s)));
    },
    updated(t, { value: e }) {
      t._assigning || Xn(t, e);
    },
  };
function Xn(t, e) {
  const s = t.multiple,
    o = U(e);
  if (!(s && !o && !vs(e))) {
    for (let n = 0, i = t.options.length; n < i; n++) {
      const l = t.options[n],
        a = ms(l);
      if (s)
        if (o) {
          const c = typeof a;
          c === "string" || c === "number"
            ? (l.selected = e.some((p) => String(p) === String(a)))
            : (l.selected = wi(e, a) > -1);
        } else l.selected = e.has(a);
      else if (Qe(ms(l), e)) {
        t.selectedIndex !== n && (t.selectedIndex = n);
        return;
      }
    }
    !s && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function ms(t) {
  return "_value" in t ? t._value : t.value;
}
const El = ["ctrl", "shift", "alt", "meta"],
  Al = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => "button" in t && t.button !== 0,
    middle: (t) => "button" in t && t.button !== 1,
    right: (t) => "button" in t && t.button !== 2,
    exact: (t, e) => El.some((s) => t[`${s}Key`] && !e.includes(s)),
  },
  Il = (t, e) => {
    if (!t) return t;
    const s = t._withMods || (t._withMods = {}),
      o = e.join(".");
    return (
      s[o] ||
      (s[o] = (n, ...i) => {
        for (let l = 0; l < e.length; l++) {
          const a = Al[e[l]];
          if (a && a(n, e)) return;
        }
        return t(n, ...i);
      })
    );
  },
  Pl = pt({ patchProp: Tl }, ll);
let Zn;
function Rl() {
  return Zn || (Zn = Fr(Pl));
}
const Ol = (...t) => {
  const e = Rl().createApp(...t),
    { mount: s } = e;
  return (
    (e.mount = (o) => {
      const n = Ll(o);
      if (!n) return;
      const i = e._component;
      (!F(i) && !i.render && !i.template && (i.template = n.innerHTML),
        n.nodeType === 1 && (n.textContent = ""));
      const l = s(n, !1, Ml(n));
      return (
        n instanceof Element &&
          (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")),
        l
      );
    }),
    e
  );
};
function Ml(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Ll(t) {
  return rt(t) ? document.querySelector(t) : t;
}
const Nl = { class: "connection-card", "aria-label": "Project connection" },
  jl = { class: "connection-row" },
  Dl = { class: "connection-copy" },
  Ul = { class: "connection-title" },
  Fl = { class: "connection-detail" },
  Hl = ["aria-expanded"],
  Vl = { class: "setup-footer" },
  ql = { key: 0, class: "saved-message" },
  Wl = $t({
    __name: "ConnectBar",
    props: { config: {} },
    emits: ["update:config"],
    setup(t, { emit: e }) {
      const s = t,
        o = e,
        n = V(!1),
        i = V(""),
        l = V(""),
        a = V(""),
        c = V(!1),
        p = it(() => !!(s.config.apiToken && s.config.projectId)),
        f = it(() =>
          s.config.projectId
            ? `Project ${s.config.projectId.slice(0, 12)}`
            : "No project connected",
        );
      $e(() => {
        ((i.value =
          s.config.apiBaseUrl || "http://localhost:8888/.netlify/functions"),
          (l.value = s.config.apiToken || ""),
          (a.value = s.config.projectId || ""));
      });
      async function g() {
        const T = {
          apiBaseUrl: i.value.trim().replace(/\/$/, ""),
          apiToken: l.value.trim(),
          projectId: a.value.trim(),
        };
        (await chrome.storage.local.set({ qas_extension_config: T }),
          o("update:config", T),
          (c.value = !0),
          setTimeout(() => {
            ((c.value = !1), (n.value = !1));
          }, 1400));
      }
      return (T, m) => (
        k(),
        S("section", Nl, [
          r("div", jl, [
            r("div", Dl, [
              r(
                "span",
                {
                  class: q(["connection-dot", { "is-connected": p.value }]),
                  "aria-hidden": "true",
                },
                null,
                2,
              ),
              r("div", null, [
                r(
                  "span",
                  Ul,
                  C(p.value ? "Project connected" : "Project not connected"),
                  1,
                ),
                r("span", Fl, C(f.value), 1),
              ]),
            ]),
            r(
              "button",
              {
                type: "button",
                class: "icon-command",
                "aria-expanded": n.value,
                onClick: m[0] || (m[0] = (A) => (n.value = !n.value)),
              },
              C(n.value ? "Close" : "Set up"),
              9,
              Hl,
            ),
          ]),
          n.value
            ? (k(),
              S(
                "form",
                { key: 0, class: "setup-form", onSubmit: Il(g, ["prevent"]) },
                [
                  r("label", null, [
                    m[4] ||
                      (m[4] = r(
                        "span",
                        { class: "field-label" },
                        "Functions URL",
                        -1,
                      )),
                    Tt(
                      r(
                        "input",
                        {
                          "onUpdate:modelValue":
                            m[1] || (m[1] = (A) => (i.value = A)),
                          class: "input",
                          type: "url",
                          placeholder:
                            "https://app.netlify.app/.netlify/functions",
                        },
                        null,
                        512,
                      ),
                      [[Bt, i.value]],
                    ),
                  ]),
                  r("label", null, [
                    m[5] ||
                      (m[5] = r(
                        "span",
                        { class: "field-label" },
                        "Project ID",
                        -1,
                      )),
                    Tt(
                      r(
                        "input",
                        {
                          "onUpdate:modelValue":
                            m[2] || (m[2] = (A) => (a.value = A)),
                          class: "input",
                          type: "text",
                          placeholder: "Project ID from QA-Suite",
                        },
                        null,
                        512,
                      ),
                      [[Bt, a.value]],
                    ),
                  ]),
                  r("label", null, [
                    m[6] ||
                      (m[6] = r(
                        "span",
                        { class: "field-label" },
                        "Extension token",
                        -1,
                      )),
                    Tt(
                      r(
                        "input",
                        {
                          "onUpdate:modelValue":
                            m[3] || (m[3] = (A) => (l.value = A)),
                          class: "input font-mono",
                          type: "password",
                          placeholder: "Project-scoped token",
                        },
                        null,
                        512,
                      ),
                      [[Bt, l.value]],
                    ),
                    m[7] ||
                      (m[7] = r(
                        "span",
                        { class: "field-hint" },
                        "Stored locally in this browser profile.",
                        -1,
                      )),
                  ]),
                  r("div", Vl, [
                    c.value
                      ? (k(), S("span", ql, "Connection saved"))
                      : Z("", !0),
                    m[8] ||
                      (m[8] = r(
                        "button",
                        { type: "submit", class: "btn btn-primary" },
                        "Save connection",
                        -1,
                      )),
                  ]),
                ],
                32,
              ))
            : Z("", !0),
        ])
      );
    },
  }),
  Bl = { class: "space-y-3" },
  Kl = { class: "card space-y-1.5" },
  Gl = { class: "flex items-center justify-between" },
  Jl = { class: "text-sm font-semibold text-gray-900 break-words" },
  Ql = { class: "card space-y-1.5" },
  Yl = { class: "flex items-center justify-between" },
  zl = { class: "text-xs text-gray-700 break-words leading-relaxed" },
  Xl = { class: "grid grid-cols-2 gap-2" },
  Zl = { class: "card p-2.5 space-y-1" },
  ta = ["title"],
  ea = { class: "card p-2.5 space-y-1" },
  sa = ["title"],
  na = { class: "card p-2.5 space-y-1" },
  oa = { class: "text-xs font-mono text-gray-800" },
  ia = { class: "card p-2.5 space-y-1" },
  ra = { class: "text-xs font-mono text-gray-800 truncate" },
  la = { class: "card p-3 space-y-2" },
  aa = { class: "flex items-center justify-between" },
  ca = { key: 0, class: "flex flex-wrap gap-1" },
  ua = { class: "card p-3 space-y-2" },
  fa = { class: "flex gap-2" },
  da = $t({
    __name: "SummaryTab",
    props: { metrics: {}, titleRange: {}, descRange: {} },
    setup(t) {
      const e = t,
        s = it(() => {
          var f;
          return ((f = e.titleRange) == null ? void 0 : f.min) ?? 30;
        }),
        o = it(() => {
          var f;
          return ((f = e.titleRange) == null ? void 0 : f.max) ?? 65;
        }),
        n = it(() => {
          var f;
          return ((f = e.descRange) == null ? void 0 : f.min) ?? 120;
        }),
        i = it(() => {
          var f;
          return ((f = e.descRange) == null ? void 0 : f.max) ?? 320;
        }),
        l = it(
          () =>
            e.metrics.titleLength >= s.value &&
            e.metrics.titleLength <= o.value,
        ),
        a = it(
          () =>
            e.metrics.descriptionLength >= n.value &&
            e.metrics.descriptionLength <= i.value,
        ),
        c = it(() => {
          try {
            return new URL(e.metrics.url).origin;
          } catch {
            return "";
          }
        });
      function p(f) {
        c.value && chrome.tabs.create({ url: `${c.value}/${f}` });
      }
      return (f, g) => (
        k(),
        S("div", Bl, [
          r("div", Kl, [
            r("div", Gl, [
              g[2] ||
                (g[2] = r(
                  "span",
                  { class: "text-xs font-semibold text-gray-500" },
                  "PAGE TITLE",
                  -1,
                )),
              r(
                "span",
                { class: q(["badge", l.value ? "badge-good" : "badge-warn"]) },
                C(t.metrics.titleLength) +
                  " chars (ideal " +
                  C(s.value) +
                  "-" +
                  C(o.value) +
                  ") ",
                3,
              ),
            ]),
            r("p", Jl, C(t.metrics.title || "(Missing title tag)"), 1),
          ]),
          r("div", Ql, [
            r("div", Yl, [
              g[3] ||
                (g[3] = r(
                  "span",
                  { class: "text-xs font-semibold text-gray-500" },
                  "META DESCRIPTION",
                  -1,
                )),
              r(
                "span",
                { class: q(["badge", a.value ? "badge-good" : "badge-warn"]) },
                C(t.metrics.descriptionLength) +
                  " chars (ideal " +
                  C(n.value) +
                  "-" +
                  C(i.value) +
                  ") ",
                3,
              ),
            ]),
            r(
              "p",
              zl,
              C(t.metrics.metaDescription || "(Missing meta description)"),
              1,
            ),
          ]),
          r("div", Xl, [
            r("div", Zl, [
              g[4] ||
                (g[4] = r(
                  "span",
                  { class: "text-[11px] font-semibold text-gray-400 block" },
                  "CANONICAL URL",
                  -1,
                )),
              r(
                "p",
                {
                  class: "text-xs font-mono text-gray-800 truncate",
                  title: t.metrics.canonicalUrl || "None",
                },
                C(t.metrics.canonicalUrl ? "✓ Present" : "❌ Missing"),
                9,
                ta,
              ),
            ]),
            r("div", ea, [
              g[5] ||
                (g[5] = r(
                  "span",
                  { class: "text-[11px] font-semibold text-gray-400 block" },
                  "ROBOTS META",
                  -1,
                )),
              r(
                "p",
                {
                  class: "text-xs font-mono text-gray-800 truncate",
                  title: t.metrics.robotsMeta || "None",
                },
                C(t.metrics.robotsMeta || "Default (Index, Follow)"),
                9,
                sa,
              ),
            ]),
            r("div", na, [
              g[6] ||
                (g[6] = r(
                  "span",
                  { class: "text-[11px] font-semibold text-gray-400 block" },
                  "LANGUAGE (lang)",
                  -1,
                )),
              r("p", oa, C(t.metrics.langAttr || "None declared"), 1),
            ]),
            r("div", ia, [
              g[7] ||
                (g[7] = r(
                  "span",
                  { class: "text-[11px] font-semibold text-gray-400 block" },
                  "AUTHOR",
                  -1,
                )),
              r("p", ra, C(t.metrics.author || "None"), 1),
            ]),
          ]),
          r("div", la, [
            r("div", aa, [
              g[8] ||
                (g[8] = r(
                  "span",
                  { class: "text-xs font-semibold text-gray-500" },
                  "ANALYTICS & SCRIPTS",
                  -1,
                )),
              r(
                "span",
                {
                  class: q([
                    "badge",
                    t.metrics.hasAnalyticsScript
                      ? "badge-good"
                      : "badge-neutral",
                  ]),
                },
                C(
                  t.metrics.hasAnalyticsScript
                    ? `${t.metrics.analyticsScripts.length} Detected`
                    : "None Found",
                ),
                3,
              ),
            ]),
            t.metrics.analyticsScripts.length
              ? (k(),
                S("div", ca, [
                  (k(!0),
                  S(
                    at,
                    null,
                    Mt(
                      t.metrics.analyticsScripts,
                      (T) => (
                        k(),
                        S(
                          "span",
                          {
                            key: T,
                            class:
                              "pill-tag text-[10px] text-gray-600 font-mono truncate max-w-full",
                          },
                          C(T.split("/").slice(2, 3).join("") || T),
                          1,
                        )
                      ),
                    ),
                    128,
                  )),
                ]))
              : Z("", !0),
          ]),
          r("div", ua, [
            g[9] ||
              (g[9] = r(
                "span",
                { class: "text-xs font-semibold text-gray-500 block" },
                "SITE RESOURCES",
                -1,
              )),
            r("div", fa, [
              r(
                "button",
                {
                  onClick: g[0] || (g[0] = (T) => p("robots.txt")),
                  class: "btn btn-secondary text-xs flex-1",
                },
                " 📄 View robots.txt ",
              ),
              r(
                "button",
                {
                  onClick: g[1] || (g[1] = (T) => p("sitemap.xml")),
                  class: "btn btn-secondary text-xs flex-1",
                },
                " 🗺️ View sitemap.xml ",
              ),
            ]),
          ]),
        ])
      );
    },
  }),
  pa = { class: "space-y-3" },
  ga = { class: "card p-3" },
  ha = { class: "grid grid-cols-6 gap-1 text-center" },
  ma = { class: "text-[10px] font-bold text-gray-500 block" },
  ba = {
    key: 0,
    class:
      "p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2",
  },
  xa = {
    key: 1,
    class:
      "p-2.5 rounded bg-amber-50 border border-amber-200 text-xs text-amber-700 flex items-center gap-2",
  },
  va = { class: "card p-3 space-y-2" },
  ya = { class: "text-xs font-semibold text-gray-500 block" },
  _a = { key: 0, class: "text-xs text-gray-400 py-3 text-center" },
  wa = { key: 1, class: "space-y-1.5 max-h-[300px] overflow-y-auto pr-1" },
  ka = { class: "text-gray-800 break-words flex-1" },
  Ta = $t({
    __name: "HeadersTab",
    props: { metrics: {} },
    setup(t) {
      const e = t;
      function s(o) {
        const n = `h${o}`;
        return e.metrics.headerCounts[n] ?? 0;
      }
      return (o, n) => (
        k(),
        S("div", pa, [
          r("div", ga, [
            n[0] ||
              (n[0] = r(
                "span",
                { class: "text-xs font-semibold text-gray-500 block mb-2" },
                "HEADER TAG DISTRIBUTION",
                -1,
              )),
            r("div", ha, [
              (k(),
              S(
                at,
                null,
                Mt([1, 2, 3, 4, 5, 6], (i) =>
                  r(
                    "div",
                    {
                      key: i,
                      class: "bg-gray-50 rounded p-1.5 border border-gray-100",
                    },
                    [
                      r("span", ma, "H" + C(i), 1),
                      r(
                        "span",
                        {
                          class: q([
                            "text-sm font-extrabold",
                            i === 1 && t.metrics.headerCounts.h1 === 0
                              ? "text-red-500"
                              : i === 1 && t.metrics.headerCounts.h1 === 1
                                ? "text-green-600"
                                : "text-gray-900",
                          ]),
                        },
                        C(s(i)),
                        3,
                      ),
                    ],
                  ),
                ),
                64,
              )),
            ]),
          ]),
          t.metrics.headerCounts.h1 === 0
            ? (k(),
              S("div", ba, [
                ...(n[1] ||
                  (n[1] = [
                    r("span", null, "❌", -1),
                    r(
                      "span",
                      null,
                      [
                        r("strong", null, "Missing H1 Tag!"),
                        ee(
                          " Every page should have exactly one main <h1> heading.",
                        ),
                      ],
                      -1,
                    ),
                  ])),
              ]))
            : t.metrics.headerCounts.h1 > 1
              ? (k(),
                S("div", xa, [
                  n[3] || (n[3] = r("span", null, "⚠️", -1)),
                  r("span", null, [
                    r(
                      "strong",
                      null,
                      "Multiple H1 Tags (" + C(t.metrics.headerCounts.h1) + ")",
                      1,
                    ),
                    n[2] ||
                      (n[2] = ee(
                        " — Having more than one H1 may confuse crawlers.",
                        -1,
                      )),
                  ]),
                ]))
              : Z("", !0),
          r("div", va, [
            r(
              "span",
              ya,
              "HEADINGS IN DOCUMENT ORDER (" +
                C(t.metrics.headers.length) +
                ")",
              1,
            ),
            t.metrics.headers.length === 0
              ? (k(), S("div", _a, " No headings (H1-H6) found on this page. "))
              : (k(),
                S("div", wa, [
                  (k(!0),
                  S(
                    at,
                    null,
                    Mt(
                      t.metrics.headers,
                      (i, l) => (
                        k(),
                        S(
                          "div",
                          {
                            key: l,
                            class:
                              "flex items-start gap-2 p-1.5 rounded hover:bg-gray-50 text-xs transition-colors border border-transparent hover:border-gray-100",
                            style: Je({
                              paddingLeft: `${(i.level - 1) * 12 + 6}px`,
                            }),
                          },
                          [
                            r(
                              "span",
                              {
                                class: q([
                                  "badge text-[10px] px-1.5 py-0.5 uppercase flex-shrink-0",
                                  i.level === 1
                                    ? "bg-indigo-100 text-indigo-700 font-bold"
                                    : "bg-gray-100 text-gray-600",
                                ]),
                              },
                              " H" + C(i.level),
                              3,
                            ),
                            r("span", ka, C(i.text || "(Empty heading)"), 1),
                          ],
                          4,
                        )
                      ),
                    ),
                    128,
                  )),
                ])),
          ]),
        ])
      );
    },
  }),
  Ca = { class: "space-y-3" },
  Sa = { class: "grid grid-cols-4 gap-2 text-center" },
  $a = { class: "card p-2" },
  Ea = { class: "text-sm font-bold text-gray-900" },
  Aa = { class: "card p-2" },
  Ia = { class: "card p-2" },
  Pa = { class: "text-sm font-bold text-gray-700" },
  Ra = { class: "card p-2" },
  Oa = {
    key: 0,
    class:
      "p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700 flex items-center justify-between",
  },
  Ma = { class: "card p-3 space-y-2" },
  La = { class: "flex items-center justify-between" },
  Na = { class: "text-xs font-semibold text-gray-500" },
  ja = { key: 0, class: "text-xs text-gray-400 py-3 text-center" },
  Da = { key: 1, class: "space-y-2 max-h-[300px] overflow-y-auto pr-1" },
  Ua = {
    class:
      "w-10 h-10 rounded bg-gray-200 flex-shrink-0 overflow-hidden flex items-center justify-center border border-gray-200",
  },
  Fa = ["src", "alt"],
  Ha = { key: 1, class: "text-xs text-gray-400" },
  Va = { class: "flex-1 min-w-0 space-y-1" },
  qa = ["title"],
  Wa = { class: "flex flex-wrap items-center gap-1.5 text-[10px]" },
  Ba = { key: 0, class: "badge badge-bad" },
  Ka = { key: 1, class: "text-gray-400" },
  Ga = $t({
    __name: "ImagesTab",
    props: { metrics: {} },
    setup(t) {
      const e = t;
      function s() {
        const o = encodeURIComponent(e.metrics.url);
        chrome.tabs.create({
          url: `https://pagespeed.web.dev/analysis?url=${o}`,
        });
      }
      return (o, n) => (
        k(),
        S("div", Ca, [
          r("div", Sa, [
            r("div", $a, [
              n[1] ||
                (n[1] = r(
                  "span",
                  { class: "text-[10px] font-semibold text-gray-400 block" },
                  "TOTAL",
                  -1,
                )),
              r("span", Ea, C(t.metrics.imageCount), 1),
            ]),
            r("div", Aa, [
              n[2] ||
                (n[2] = r(
                  "span",
                  { class: "text-[10px] font-semibold text-gray-400 block" },
                  "MISSING ALT",
                  -1,
                )),
              r(
                "span",
                {
                  class: q([
                    "text-sm font-bold",
                    t.metrics.missingAltCount > 0
                      ? "text-amber-600"
                      : "text-green-600",
                  ]),
                },
                C(t.metrics.missingAltCount),
                3,
              ),
            ]),
            r("div", Ia, [
              n[3] ||
                (n[3] = r(
                  "span",
                  { class: "text-[10px] font-semibold text-gray-400 block" },
                  "MISSING TITLE",
                  -1,
                )),
              r("span", Pa, C(t.metrics.missingTitleCount), 1),
            ]),
            r("div", Ra, [
              n[4] ||
                (n[4] = r(
                  "span",
                  { class: "text-[10px] font-semibold text-gray-400 block" },
                  "BROKEN",
                  -1,
                )),
              r(
                "span",
                {
                  class: q([
                    "text-sm font-bold",
                    t.metrics.brokenImages > 0
                      ? "text-red-600"
                      : "text-green-600",
                  ]),
                },
                C(t.metrics.brokenImages),
                3,
              ),
            ]),
          ]),
          t.metrics.brokenImages > 0
            ? (k(),
              S("div", Oa, [
                r("span", null, [
                  n[5] || (n[5] = ee("⚠️ ", -1)),
                  r(
                    "strong",
                    null,
                    C(t.metrics.brokenImages) + " Broken Image(s) detected!",
                    1,
                  ),
                ]),
                n[6] ||
                  (n[6] = r(
                    "span",
                    { class: "text-[10px] text-red-500" },
                    "Will auto-draft bug",
                    -1,
                  )),
              ]))
            : Z("", !0),
          r("div", Ma, [
            r("div", La, [
              r(
                "span",
                Na,
                "IMAGES PREVIEW (" + C(t.metrics.images.length) + ")",
                1,
              ),
              r(
                "button",
                {
                  onClick: s,
                  class:
                    "text-xs text-indigo-600 hover:text-indigo-700 font-medium",
                },
                " ⚡ PageSpeed Audit → ",
              ),
            ]),
            t.metrics.images.length === 0
              ? (k(), S("div", ja, " No <img> tags found on this page. "))
              : (k(),
                S("div", Da, [
                  (k(!0),
                  S(
                    at,
                    null,
                    Mt(
                      t.metrics.images,
                      (i, l) => (
                        k(),
                        S(
                          "div",
                          {
                            key: l,
                            class:
                              "flex items-start gap-2.5 p-2 rounded border border-gray-100 bg-gray-50/50 hover:bg-gray-50 text-xs transition-colors",
                          },
                          [
                            r("div", Ua, [
                              !i.broken && i.src
                                ? (k(),
                                  S(
                                    "img",
                                    {
                                      key: 0,
                                      src: i.src,
                                      alt: i.alt,
                                      class: "w-full h-full object-cover",
                                      onError:
                                        n[0] ||
                                        (n[0] = (a) =>
                                          (a.target.style.display = "none")),
                                    },
                                    null,
                                    40,
                                    Fa,
                                  ))
                                : (k(), S("span", Ha, "🖼️")),
                            ]),
                            r("div", Va, [
                              r(
                                "p",
                                {
                                  class:
                                    "font-mono text-[11px] text-gray-700 truncate",
                                  title: i.src,
                                },
                                C(i.src),
                                9,
                                qa,
                              ),
                              r("div", Wa, [
                                r(
                                  "span",
                                  {
                                    class: q([
                                      "badge",
                                      i.alt ? "badge-good" : "badge-warn",
                                    ]),
                                  },
                                  " alt: " +
                                    C(
                                      i.alt
                                        ? `"${i.alt.slice(0, 20)}"`
                                        : "MISSING",
                                    ),
                                  3,
                                ),
                                i.broken
                                  ? (k(), S("span", Ba, "BROKEN"))
                                  : Z("", !0),
                                i.title
                                  ? Z("", !0)
                                  : (k(), S("span", Ka, "no title")),
                              ]),
                            ]),
                          ],
                        )
                      ),
                    ),
                    128,
                  )),
                ])),
          ]),
        ])
      );
    },
  }),
  Ja = { class: "space-y-3" },
  Qa = { class: "grid grid-cols-4 gap-2 text-center" },
  Ya = { class: "card p-2" },
  za = { class: "text-sm font-bold text-gray-900" },
  Xa = { class: "card p-2" },
  Za = { class: "text-sm font-bold text-indigo-600" },
  tc = { class: "card p-2" },
  ec = { class: "text-sm font-bold text-gray-700" },
  sc = { class: "card p-2" },
  nc = { class: "flex gap-1.5" },
  oc = ["onClick"],
  ic = { class: "card p-3 space-y-2" },
  rc = { class: "text-xs font-semibold text-gray-500 block" },
  lc = { key: 0, class: "text-xs text-gray-400 py-3 text-center" },
  ac = { key: 1, class: "space-y-1.5 max-h-[280px] overflow-y-auto pr-1" },
  cc = { class: "flex items-center justify-between gap-2" },
  uc = { class: "font-medium text-gray-900 truncate flex-1" },
  fc = { class: "flex items-center gap-1 flex-shrink-0" },
  dc = { key: 0, class: "badge badge-neutral text-[9px] px-1" },
  pc = { key: 1, class: "badge badge-warn text-[9px] px-1" },
  gc = ["title"],
  hc = $t({
    __name: "LinksTab",
    props: { metrics: {} },
    setup(t) {
      const e = t,
        s = V("all"),
        o = it(() =>
          s.value === "internal"
            ? e.metrics.links.filter((n) => n.internal)
            : s.value === "external"
              ? e.metrics.links.filter((n) => !n.internal)
              : s.value === "duplicates"
                ? e.metrics.links.filter((n) => n.duplicate)
                : e.metrics.links,
        );
      return (n, i) => (
        k(),
        S("div", Ja, [
          r("div", Qa, [
            r("div", Ya, [
              i[0] ||
                (i[0] = r(
                  "span",
                  { class: "text-[10px] font-semibold text-gray-400 block" },
                  "TOTAL",
                  -1,
                )),
              r("span", za, C(t.metrics.linkCount), 1),
            ]),
            r("div", Xa, [
              i[1] ||
                (i[1] = r(
                  "span",
                  { class: "text-[10px] font-semibold text-gray-400 block" },
                  "INTERNAL",
                  -1,
                )),
              r("span", Za, C(t.metrics.internalLinks), 1),
            ]),
            r("div", tc, [
              i[2] ||
                (i[2] = r(
                  "span",
                  { class: "text-[10px] font-semibold text-gray-400 block" },
                  "EXTERNAL",
                  -1,
                )),
              r("span", ec, C(t.metrics.externalLinks), 1),
            ]),
            r("div", sc, [
              i[3] ||
                (i[3] = r(
                  "span",
                  { class: "text-[10px] font-semibold text-gray-400 block" },
                  "DUPLICATES",
                  -1,
                )),
              r(
                "span",
                {
                  class: q([
                    "text-sm font-bold",
                    t.metrics.duplicateLinksCount > 0
                      ? "text-amber-600"
                      : "text-green-600",
                  ]),
                },
                C(t.metrics.duplicateLinksCount),
                3,
              ),
            ]),
          ]),
          r("div", nc, [
            (k(!0),
            S(
              at,
              null,
              Mt(
                [
                  { key: "all", label: `All (${t.metrics.links.length})` },
                  {
                    key: "internal",
                    label: `Internal (${t.metrics.internalLinks})`,
                  },
                  {
                    key: "external",
                    label: `External (${t.metrics.externalLinks})`,
                  },
                  {
                    key: "duplicates",
                    label: `Duplicates (${t.metrics.duplicateLinksCount})`,
                  },
                ],
                (l) => (
                  k(),
                  S(
                    "button",
                    {
                      key: l.key,
                      onClick: (a) => (s.value = l.key),
                      class: q([
                        "btn text-[11px] py-1 px-2 flex-1",
                        s.value === l.key ? "btn-primary" : "btn-secondary",
                      ]),
                    },
                    C(l.label),
                    11,
                    oc,
                  )
                ),
              ),
              128,
            )),
          ]),
          r("div", ic, [
            r("span", rc, "LINKS BREAKDOWN (" + C(o.value.length) + ")", 1),
            o.value.length === 0
              ? (k(), S("div", lc, " No links match the selected filter. "))
              : (k(),
                S("div", ac, [
                  (k(!0),
                  S(
                    at,
                    null,
                    Mt(
                      o.value,
                      (l, a) => (
                        k(),
                        S(
                          "div",
                          {
                            key: a,
                            class:
                              "p-2 rounded border border-gray-100 bg-gray-50/50 hover:bg-gray-50 text-xs transition-colors space-y-1",
                          },
                          [
                            r("div", cc, [
                              r("span", uc, C(l.text || "(No anchor text)"), 1),
                              r("div", fc, [
                                r(
                                  "span",
                                  {
                                    class: q([
                                      "badge text-[9px] px-1",
                                      l.internal
                                        ? "bg-indigo-50 text-indigo-700"
                                        : "bg-gray-100 text-gray-600",
                                    ]),
                                  },
                                  C(l.internal ? "Internal" : "External"),
                                  3,
                                ),
                                l.type !== "standard"
                                  ? (k(), S("span", dc, C(l.type), 1))
                                  : Z("", !0),
                                l.duplicate
                                  ? (k(), S("span", pc, " Duplicate "))
                                  : Z("", !0),
                              ]),
                            ]),
                            r(
                              "p",
                              {
                                class:
                                  "font-mono text-[10px] text-gray-500 truncate",
                                title: l.href,
                              },
                              C(l.href),
                              9,
                              gc,
                            ),
                          ],
                        )
                      ),
                    ),
                    128,
                  )),
                ])),
          ]),
        ])
      );
    },
  }),
  mc = { class: "space-y-3" },
  bc = { class: "card p-3 flex items-center justify-between" },
  xc = { class: "card p-3 space-y-2" },
  vc = { class: "flex items-center justify-between" },
  yc = { key: 0, class: "text-xs text-gray-400 py-2" },
  _c = { key: 1, class: "space-y-1.5 max-h-[160px] overflow-y-auto" },
  wc = { class: "font-mono text-[10px] text-indigo-600 font-bold block" },
  kc = { class: "text-gray-800 break-words" },
  Tc = { class: "card p-3 space-y-2" },
  Cc = { class: "flex items-center justify-between" },
  Sc = { key: 0, class: "text-xs text-gray-400 py-2" },
  $c = { key: 1, class: "space-y-1.5 max-h-[160px] overflow-y-auto" },
  Ec = { class: "font-mono text-[10px] text-sky-600 font-bold block" },
  Ac = { class: "text-gray-800 break-words" },
  Ic = $t({
    __name: "SocialTab",
    props: { metrics: {} },
    setup(t) {
      return (e, s) => (
        k(),
        S("div", mc, [
          r("div", bc, [
            s[0] ||
              (s[0] = r(
                "div",
                null,
                [
                  r(
                    "span",
                    { class: "text-xs font-semibold text-gray-900 block" },
                    "Schema.org Structured Data (JSON-LD)",
                  ),
                  r(
                    "span",
                    { class: "text-[11px] text-gray-500" },
                    "Rich snippets for Google Search",
                  ),
                ],
                -1,
              )),
            r(
              "span",
              {
                class: q([
                  "badge",
                  t.metrics.hasSchemaOrg ? "badge-good" : "badge-warn",
                ]),
              },
              C(t.metrics.hasSchemaOrg ? "✓ Detected" : "❌ Not Found"),
              3,
            ),
          ]),
          r("div", xc, [
            r("div", vc, [
              s[1] ||
                (s[1] = r(
                  "span",
                  { class: "text-xs font-semibold text-gray-700" },
                  "OPENGRAPH META (og:*)",
                  -1,
                )),
              r(
                "span",
                {
                  class: q([
                    "badge",
                    t.metrics.hasOpenGraph ? "badge-good" : "badge-neutral",
                  ]),
                },
                C(
                  t.metrics.hasOpenGraph
                    ? `${Object.keys(t.metrics.openGraphTags).length} Tags`
                    : "None",
                ),
                3,
              ),
            ]),
            t.metrics.hasOpenGraph
              ? (k(),
                S("div", _c, [
                  (k(!0),
                  S(
                    at,
                    null,
                    Mt(
                      t.metrics.openGraphTags,
                      (o, n) => (
                        k(),
                        S(
                          "div",
                          {
                            key: n,
                            class:
                              "p-1.5 rounded bg-gray-50 border border-gray-100 text-xs",
                          },
                          [r("span", wc, C(n), 1), r("span", kc, C(o), 1)],
                        )
                      ),
                    ),
                    128,
                  )),
                ]))
              : (k(),
                S("div", yc, " No OpenGraph (og:*) tags found on this page. ")),
          ]),
          r("div", Tc, [
            r("div", Cc, [
              s[2] ||
                (s[2] = r(
                  "span",
                  { class: "text-xs font-semibold text-gray-700" },
                  "TWITTER CARD (twitter:*)",
                  -1,
                )),
              r(
                "span",
                {
                  class: q([
                    "badge",
                    t.metrics.hasTwitterCard ? "badge-good" : "badge-neutral",
                  ]),
                },
                C(
                  t.metrics.hasTwitterCard
                    ? `${Object.keys(t.metrics.twitterCardTags).length} Tags`
                    : "None",
                ),
                3,
              ),
            ]),
            t.metrics.hasTwitterCard
              ? (k(),
                S("div", $c, [
                  (k(!0),
                  S(
                    at,
                    null,
                    Mt(
                      t.metrics.twitterCardTags,
                      (o, n) => (
                        k(),
                        S(
                          "div",
                          {
                            key: n,
                            class:
                              "p-1.5 rounded bg-gray-50 border border-gray-100 text-xs",
                          },
                          [r("span", Ec, C(n), 1), r("span", Ac, C(o), 1)],
                        )
                      ),
                    ),
                    128,
                  )),
                ]))
              : (k(),
                S("div", Sc, " No Twitter Card tags found on this page. ")),
          ]),
        ])
      );
    },
  }),
  Pc = { class: "security-tab" },
  Rc = { class: "security-overview" },
  Oc = { key: 0, class: "security-note" },
  Mc = { class: "security-checks" },
  Lc = $t({
    __name: "SecurityTab",
    props: { metrics: {} },
    setup(t) {
      const e = t,
        s = it(
          () =>
            e.metrics.security ?? {
              headers: {},
              setCookieHeaders: [],
              source: "unavailable",
              inspectedUrl: e.metrics.url,
            },
        );
      function o(m) {
        return s.value.headers[m] ?? "";
      }
      function n(m, A) {
        const y = o(m);
        return y
          ? A && !A(y)
            ? { name: m, detail: y.slice(0, 110), status: "warn" }
            : { name: m, detail: y.slice(0, 110), status: "pass" }
          : { name: m, detail: "Not sent by the server.", status: "warn" };
      }
      function i(m, A) {
        const y = o(m);
        return y
          ? { name: m, detail: y.slice(0, 110), status: "pass" }
          : { name: m, detail: A, status: "info" };
      }
      const l = it(() => [
          n("content-security-policy"),
          n("strict-transport-security", (m) => /max-age\s*=\s*[1-9]/i.test(m)),
          n("x-content-type-options", (m) =>
            m.toLowerCase().includes("nosniff"),
          ),
          n("x-frame-options", (m) => /deny|sameorigin/i.test(m)),
          n("referrer-policy"),
          n("permissions-policy"),
        ]),
        a = it(() => [
          n("cross-origin-opener-policy", (m) => /same-origin/i.test(m)),
          n("cross-origin-embedder-policy", (m) =>
            /require-corp|credentialless/i.test(m),
          ),
          n("cross-origin-resource-policy"),
        ]),
        c = it(() => [
          i(
            "access-control-allow-origin",
            "Not set. This is normal when the endpoint is same-origin only.",
          ),
          i("access-control-allow-credentials", "Not set."),
          i("access-control-allow-headers", "Not set."),
          i("access-control-allow-methods", "Not set."),
          i("access-control-expose-headers", "Not set."),
          i("access-control-max-age", "Not set."),
        ]),
        p = it(() => [
          i(
            "clear-site-data",
            "Not sent. This is used only for explicit client-data cleanup.",
          ),
          o("server")
            ? {
                name: "server",
                detail: o("server").slice(0, 110),
                status: "warn",
              }
            : { name: "server", detail: "Not exposed.", status: "pass" },
          o("x-powered-by")
            ? {
                name: "x-powered-by",
                detail: o("x-powered-by").slice(0, 110),
                status: "warn",
              }
            : { name: "x-powered-by", detail: "Not exposed.", status: "pass" },
        ]),
        f = it(() =>
          ["x-xss-protection", "expect-ct", "public-key-pins"].map((m) =>
            o(m)
              ? {
                  name: m,
                  detail: "Legacy header is still sent.",
                  status: "warn",
                }
              : { name: m, detail: "Not sent.", status: "pass" },
          ),
        ),
        g = it(() => {
          const m = s.value.setCookieHeaders;
          if (!m.length)
            return s.value.source === "navigation"
              ? [
                  {
                    name: "Set-Cookie flags",
                    detail: "No cookies were set in this navigation.",
                    status: "info",
                  },
                ]
              : [
                  {
                    name: "Set-Cookie flags",
                    detail:
                      "Available only when the original navigation headers were captured.",
                    status: "info",
                  },
                ];
          const A = m.filter((j) => !/;\s*secure(?:;|$)/i.test(j)).length,
            y = m.filter((j) => !/;\s*httponly(?:;|$)/i.test(j)).length,
            I = m.filter(
              (j) => !/;\s*samesite=(lax|strict|none)(?:;|$)/i.test(j),
            ).length,
            H = m.length;
          return [
            {
              name: "Secure",
              detail: A
                ? `${A} of ${H} cookies lack Secure.`
                : `Present on all ${H} cookies.`,
              status: A ? "warn" : "pass",
            },
            {
              name: "HttpOnly",
              detail: y
                ? `${y} of ${H} cookies lack HttpOnly.`
                : `Present on all ${H} cookies.`,
              status: y ? "warn" : "pass",
            },
            {
              name: "SameSite",
              detail: I
                ? `${I} of ${H} cookies lack SameSite.`
                : `Present on all ${H} cookies.`,
              status: I ? "warn" : "pass",
            },
          ];
        }),
        T = it(
          () =>
            [l.value, a.value, c.value, p.value, f.value, g.value]
              .flat()
              .filter((m) => m.status === "warn").length,
        );
      return (m, A) => (
        k(),
        S("div", Pc, [
          r("div", Rc, [
            r("div", null, [
              A[0] ||
                (A[0] = r(
                  "span",
                  { class: "security-overview-label" },
                  "Response protection",
                  -1,
                )),
              r(
                "strong",
                null,
                C(
                  T.value ? `${T.value} attention items` : "No attention items",
                ),
                1,
              ),
            ]),
            r(
              "span",
              { class: q(["badge", T.value ? "badge-warn" : "badge-good"]) },
              C(
                s.value.source === "navigation"
                  ? "Page response"
                  : s.value.source === "background-request"
                    ? "Background request"
                    : "Unavailable",
              ),
              3,
            ),
          ]),
          s.value.source !== "navigation"
            ? (k(),
              S(
                "p",
                Oc,
                " Header results were fetched separately from the current page. Cookie flags are unavailable until a navigation response is captured. ",
              ))
            : Z("", !0),
          (k(!0),
          S(
            at,
            null,
            Mt(
              [
                { title: "Core protection", checks: l.value },
                { title: "Cross-origin isolation", checks: a.value },
                { title: "Access control (CORS)", checks: c.value },
                { title: "State security (Set-Cookie)", checks: g.value },
                { title: "Information control", checks: p.value },
                { title: "Deprecated or legacy", checks: f.value },
              ],
              (y) => (
                k(),
                S("section", { key: y.title, class: "security-group" }, [
                  r("h2", null, C(y.title), 1),
                  r("div", Mc, [
                    (k(!0),
                    S(
                      at,
                      null,
                      Mt(
                        y.checks,
                        (I) => (
                          k(),
                          S(
                            "div",
                            {
                              key: I.name,
                              class: q(["security-check", `is-${I.status}`]),
                            },
                            [
                              A[1] ||
                                (A[1] = r(
                                  "span",
                                  {
                                    class: "security-status",
                                    "aria-hidden": "true",
                                  },
                                  null,
                                  -1,
                                )),
                              r("div", null, [
                                r("code", null, C(I.name), 1),
                                r("p", null, C(I.detail), 1),
                              ]),
                            ],
                            2,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ])
              ),
            ),
            128,
          )),
        ])
      );
    },
  }),
  Nc = { class: "space-y-3" },
  jc = { class: "grid grid-cols-2 gap-2" },
  Dc = $t({
    __name: "ToolsTab",
    props: { metrics: {} },
    setup(t) {
      const e = t;
      function s(o) {
        const n = encodeURIComponent(e.metrics.url),
          i = new URL(e.metrics.url).hostname;
        switch (o) {
          case "pagespeed":
            chrome.tabs.create({
              url: `https://pagespeed.web.dev/analysis?url=${n}`,
            });
            break;
          case "gtmetrix":
            chrome.tabs.create({
              url: `https://gtmetrix.com/analyze.html?url=${n}`,
            });
            break;
          case "richresults":
            chrome.tabs.create({
              url: `https://search.google.com/test/rich-results?url=${n}`,
            });
            break;
          case "securityheaders":
            chrome.tabs.create({
              url: `https://securityheaders.com/?q=${n}&followRedirects=on`,
            });
            break;
          case "ssllabs":
            chrome.tabs.create({
              url: `https://www.ssllabs.com/ssltest/analyze.html?d=${i}`,
            });
            break;
          case "w3c":
            chrome.tabs.create({
              url: `https://validator.w3.org/nu/?doc=${n}`,
            });
            break;
        }
      }
      return (o, n) => (
        k(),
        S("div", Nc, [
          n[12] ||
            (n[12] = r(
              "div",
              { class: "card p-3 space-y-1" },
              [
                r(
                  "span",
                  { class: "text-xs font-semibold text-gray-900 block" },
                  "External Testing Shortcuts",
                ),
                r(
                  "p",
                  { class: "text-[11px] text-gray-500" },
                  "Launch third-party diagnostic and auditing tools with the active page URL pre-filled.",
                ),
              ],
              -1,
            )),
          r("div", jc, [
            r(
              "button",
              {
                onClick: n[0] || (n[0] = (i) => s("pagespeed")),
                class:
                  "btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300",
              },
              [
                ...(n[6] ||
                  (n[6] = [
                    r("span", { class: "text-lg" }, "⚡", -1),
                    r(
                      "div",
                      null,
                      [
                        r(
                          "span",
                          {
                            class: "text-xs font-semibold text-gray-900 block",
                          },
                          "Google PageSpeed",
                        ),
                        r(
                          "span",
                          { class: "text-[10px] text-gray-500" },
                          "Core Web Vitals & Perf",
                        ),
                      ],
                      -1,
                    ),
                  ])),
              ],
            ),
            r(
              "button",
              {
                onClick: n[1] || (n[1] = (i) => s("gtmetrix")),
                class:
                  "btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300",
              },
              [
                ...(n[7] ||
                  (n[7] = [
                    r("span", { class: "text-lg" }, "📊", -1),
                    r(
                      "div",
                      null,
                      [
                        r(
                          "span",
                          {
                            class: "text-xs font-semibold text-gray-900 block",
                          },
                          "GTmetrix",
                        ),
                        r(
                          "span",
                          { class: "text-[10px] text-gray-500" },
                          "Waterfall & Load Timing",
                        ),
                      ],
                      -1,
                    ),
                  ])),
              ],
            ),
            r(
              "button",
              {
                onClick: n[2] || (n[2] = (i) => s("richresults")),
                class:
                  "btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300",
              },
              [
                ...(n[8] ||
                  (n[8] = [
                    r("span", { class: "text-lg" }, "🔍", -1),
                    r(
                      "div",
                      null,
                      [
                        r(
                          "span",
                          {
                            class: "text-xs font-semibold text-gray-900 block",
                          },
                          "Google Rich Results",
                        ),
                        r(
                          "span",
                          { class: "text-[10px] text-gray-500" },
                          "Schema & Structured Data",
                        ),
                      ],
                      -1,
                    ),
                  ])),
              ],
            ),
            r(
              "button",
              {
                onClick: n[3] || (n[3] = (i) => s("securityheaders")),
                class:
                  "btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300",
              },
              [
                ...(n[9] ||
                  (n[9] = [
                    r("span", { class: "text-lg" }, "🛡️", -1),
                    r(
                      "div",
                      null,
                      [
                        r(
                          "span",
                          {
                            class: "text-xs font-semibold text-gray-900 block",
                          },
                          "Security Headers",
                        ),
                        r(
                          "span",
                          { class: "text-[10px] text-gray-500" },
                          "CSP, HSTS & Permissions",
                        ),
                      ],
                      -1,
                    ),
                  ])),
              ],
            ),
            r(
              "button",
              {
                onClick: n[4] || (n[4] = (i) => s("ssllabs")),
                class:
                  "btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300",
              },
              [
                ...(n[10] ||
                  (n[10] = [
                    r("span", { class: "text-lg" }, "🔒", -1),
                    r(
                      "div",
                      null,
                      [
                        r(
                          "span",
                          {
                            class: "text-xs font-semibold text-gray-900 block",
                          },
                          "Qualys SSL Labs",
                        ),
                        r(
                          "span",
                          { class: "text-[10px] text-gray-500" },
                          "TLS & Certificate Health",
                        ),
                      ],
                      -1,
                    ),
                  ])),
              ],
            ),
            r(
              "button",
              {
                onClick: n[5] || (n[5] = (i) => s("w3c")),
                class:
                  "btn btn-secondary text-left p-2.5 flex items-start gap-2.5 hover:border-indigo-300",
              },
              [
                ...(n[11] ||
                  (n[11] = [
                    r("span", { class: "text-lg" }, "✅", -1),
                    r(
                      "div",
                      null,
                      [
                        r(
                          "span",
                          {
                            class: "text-xs font-semibold text-gray-900 block",
                          },
                          "W3C Validator",
                        ),
                        r(
                          "span",
                          { class: "text-[10px] text-gray-500" },
                          "HTML5 Markup Conformance",
                        ),
                      ],
                      -1,
                    ),
                  ])),
              ],
            ),
          ]),
        ])
      );
    },
  }),
  Uc = { class: "space-y-3" },
  Fc = { class: "flex items-center justify-between gap-2" },
  Hc = { class: "flex items-center gap-1.5 flex-1 min-w-0" },
  Vc = ["disabled"],
  qc = { key: 0, class: "animate-spin" },
  Wc = { key: 1 },
  Bc = ["title"],
  Kc = ["disabled", "title"],
  Gc = { key: 0 },
  Jc = { key: 1 },
  Qc = { key: 2 },
  Yc = {
    key: 0,
    class: "p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700",
  },
  zc = { key: 1, class: "card py-12 text-center space-y-2" },
  Xc = {
    class: "flex gap-1 border-b border-gray-200 pb-1 overflow-x-auto text-xs",
  },
  Zc = ["onClick"],
  tu = $t({
    __name: "InstantAudit",
    props: { config: {} },
    setup(t) {
      const e = t,
        s = V("summary"),
        o = V(null),
        n = V(!1),
        i = V(!1),
        l = V(!1),
        a = V(null);
      let c;
      ($e(() => {
        (chrome.tabs.onUpdated.addListener(p), f());
      }),
        $s(() => {
          chrome.tabs.onUpdated.removeListener(p);
        }));
      function p(T, m) {
        T === c && m.status === "complete" && f(T);
      }
      async function f(T) {
        var m;
        ((n.value = !0), (a.value = null), (l.value = !1));
        try {
          const A =
            T === void 0
              ? (await chrome.tabs.query({ active: !0, currentWindow: !0 }))[0]
              : await chrome.tabs.get(T);
          if (!(A != null && A.id) || !A.url)
            throw new Error("No active browser tab found.");
          if (
            ((c = A.id),
            A.url.startsWith("chrome://") ||
              A.url.startsWith("edge://") ||
              A.url.startsWith("about:"))
          )
            throw new Error(
              "Cannot audit browser internal pages. Navigate to a public or local website.",
            );
          const y = await chrome.scripting.executeScript({
            target: { tabId: A.id },
            func: ui,
          });
          if ((m = y[0]) != null && m.result) {
            const I = y[0].result,
              H = await chrome.runtime.sendMessage({
                type: "GET_SECURITY_HEADERS",
                url: I.url,
                tabId: A.id,
              });
            o.value = { ...I, security: H };
          } else throw new Error("Failed to extract metrics from the page.");
        } catch (A) {
          a.value = A.message || "Audit failed.";
        } finally {
          n.value = !1;
        }
      }
      async function g() {
        if (o.value) {
          if (!e.config.apiToken || !e.config.projectId) {
            alert(
              "Please configure your Project ID and API Token in the Setup panel first.",
            );
            return;
          }
          ((i.value = !0), (a.value = null));
          try {
            const T = {
                projectId: e.config.projectId,
                url: o.value.url,
                timestamp: o.value.timestamp,
                metrics: { ...o.value, source: "extension-instant" },
              },
              m = await fetch(`${e.config.apiBaseUrl}/crawl-ingest`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${e.config.apiToken}`,
                },
                body: JSON.stringify(T),
              });
            if (!m.ok) {
              const A = await m
                .json()
                .catch(() => ({ error: "Request failed" }));
              throw new Error(A.error || `HTTP ${m.status}`);
            }
            ((l.value = !0),
              setTimeout(() => {
                l.value = !1;
              }, 3e3));
          } catch (T) {
            a.value = T.message || "Failed to save to project.";
          } finally {
            i.value = !1;
          }
        }
      }
      return (T, m) => (
        k(),
        S("div", Uc, [
          r("div", Fc, [
            r("div", Hc, [
              r(
                "button",
                {
                  onClick: m[0] || (m[0] = (A) => f()),
                  disabled: n.value,
                  class: "btn btn-secondary text-xs py-1 px-2.5 flex-shrink-0",
                },
                [
                  n.value
                    ? (k(), S("span", qc, "⟳"))
                    : (k(), S("span", Wc, "🔄 Refresh")),
                ],
                8,
                Vc,
              ),
              o.value
                ? (k(),
                  S(
                    "span",
                    {
                      key: 0,
                      class: "text-xs font-mono text-gray-500 truncate",
                      title: o.value.url,
                    },
                    C(o.value.url),
                    9,
                    Bc,
                  ))
                : Z("", !0),
            ]),
            o.value
              ? (k(),
                S(
                  "button",
                  {
                    key: 0,
                    onClick: g,
                    disabled: i.value || !t.config.apiToken,
                    class: "btn btn-primary text-xs py-1 px-2.5 flex-shrink-0",
                    title: t.config.apiToken
                      ? ""
                      : "Configure API token to save",
                  },
                  [
                    i.value
                      ? (k(), S("span", Gc, "Saving..."))
                      : l.value
                        ? (k(), S("span", Jc, "✓ Saved!"))
                        : (k(), S("span", Qc, "💾 Save to Project")),
                  ],
                  8,
                  Kc,
                ))
              : Z("", !0),
          ]),
          a.value ? (k(), S("div", Yc, C(a.value), 1)) : Z("", !0),
          n.value
            ? (k(),
              S("div", zc, [
                ...(m[1] ||
                  (m[1] = [
                    r(
                      "div",
                      { class: "inline-block animate-spin text-2xl" },
                      "⟳",
                      -1,
                    ),
                    r(
                      "p",
                      { class: "text-xs text-gray-500" },
                      "Auditing active browser tab...",
                      -1,
                    ),
                  ])),
              ]))
            : o.value
              ? (k(),
                S(
                  at,
                  { key: 2 },
                  [
                    r("div", Xc, [
                      (k(),
                      S(
                        at,
                        null,
                        Mt(
                          [
                            { key: "summary", label: "📊 Summary" },
                            { key: "headers", label: "📑 Headers" },
                            { key: "images", label: "🖼️ Images" },
                            { key: "links", label: "🔗 Links" },
                            { key: "social", label: "🌐 Social" },
                            { key: "tools", label: "🛠️ Tools" },
                            { key: "security", label: "🛡️ Security" },
                          ],
                          (A) =>
                            r(
                              "button",
                              {
                                key: A.key,
                                onClick: (y) => (s.value = A.key),
                                class: q([
                                  "px-2.5 py-1 font-medium rounded-t transition-colors whitespace-nowrap",
                                  s.value === A.key
                                    ? "bg-indigo-50 text-indigo-600 font-bold border-b-2 border-indigo-600"
                                    : "text-gray-500 hover:text-gray-800",
                                ]),
                              },
                              C(A.label),
                              11,
                              Zc,
                            ),
                        ),
                        64,
                      )),
                    ]),
                    s.value === "summary"
                      ? (k(),
                        Et(da, { key: 0, metrics: o.value }, null, 8, [
                          "metrics",
                        ]))
                      : s.value === "headers"
                        ? (k(),
                          Et(Ta, { key: 1, metrics: o.value }, null, 8, [
                            "metrics",
                          ]))
                        : s.value === "images"
                          ? (k(),
                            Et(Ga, { key: 2, metrics: o.value }, null, 8, [
                              "metrics",
                            ]))
                          : s.value === "links"
                            ? (k(),
                              Et(hc, { key: 3, metrics: o.value }, null, 8, [
                                "metrics",
                              ]))
                            : s.value === "social"
                              ? (k(),
                                Et(Ic, { key: 4, metrics: o.value }, null, 8, [
                                  "metrics",
                                ]))
                              : s.value === "security"
                                ? (k(),
                                  Et(
                                    Lc,
                                    { key: 5, metrics: o.value },
                                    null,
                                    8,
                                    ["metrics"],
                                  ))
                                : s.value === "tools"
                                  ? (k(),
                                    Et(
                                      Dc,
                                      { key: 6, metrics: o.value },
                                      null,
                                      8,
                                      ["metrics"],
                                    ))
                                  : Z("", !0),
                  ],
                  64,
                ))
              : Z("", !0),
        ])
      );
    },
  }),
  eu = { class: "space-y-3" },
  su = {
    key: 0,
    class:
      "p-3 rounded-lg bg-amber-50 border border-amber-300 text-xs text-amber-800 space-y-2",
  },
  nu = { class: "text-[11px] leading-relaxed" },
  ou = {
    key: 1,
    class: "p-2.5 rounded bg-red-50 border border-red-200 text-xs text-red-700",
  },
  iu = { key: 2, class: "card p-3 space-y-3" },
  ru = { class: "grid grid-cols-2 gap-2" },
  lu = ["disabled"],
  au = { key: 3, class: "card p-3 space-y-3" },
  cu = { class: "flex items-center justify-between" },
  uu = { class: "flex items-center gap-2" },
  fu = { class: "text-xs font-bold uppercase tracking-wider text-gray-900" },
  du = { class: "flex gap-1.5" },
  pu = { class: "grid grid-cols-3 gap-2 text-center pt-1" },
  gu = { class: "bg-gray-50 p-2 rounded border border-gray-100" },
  hu = { class: "text-lg font-extrabold text-indigo-600" },
  mu = { class: "text-[10px] text-gray-400 block" },
  bu = { class: "bg-gray-50 p-2 rounded border border-gray-100" },
  xu = { class: "text-lg font-extrabold text-gray-800" },
  vu = { class: "bg-gray-50 p-2 rounded border border-gray-100" },
  yu = {
    key: 0,
    class: "p-2 rounded bg-gray-50 border border-gray-100 text-[11px]",
  },
  _u = { class: "font-mono text-gray-700 truncate block" },
  wu = $t({
    __name: "CrawlMode",
    props: { config: {} },
    setup(t) {
      const e = t,
        s = V(""),
        o = V(""),
        n = V(25),
        i = V(15),
        l = V(null),
        a = V(null),
        c = V(null),
        p = V(null);
      ($e(async () => {
        const [y] = await chrome.tabs.query({ active: !0, currentWindow: !0 });
        y != null &&
          y.url &&
          !y.url.startsWith("chrome://") &&
          (s.value = y.url);
        const I = await chrome.storage.local.get("qas_crawl_session");
        (I.qas_crawl_session && (l.value = I.qas_crawl_session),
          chrome.runtime.onMessage.addListener(f));
      }),
        $s(() => {
          chrome.runtime.onMessage.removeListener(f);
        }));
      function f(y) {
        y.type === "CRAWL_PROGRESS"
          ? (l.value &&
              ((l.value.crawledCount = y.crawledCount),
              (l.value.status = y.status),
              (l.value.errors = y.errors)),
            y.lastUrl && (a.value = y.lastUrl))
          : y.type === "AUTH_LOSS_DETECTED" && (c.value = y.redirectUrl);
      }
      async function g() {
        if (!s.value.trim()) {
          p.value = "Please provide a valid Start URL.";
          return;
        }
        if (!e.config.apiToken || !e.config.projectId) {
          p.value =
            "Please configure your Project ID and API Token in Setup first.";
          return;
        }
        ((p.value = null), (c.value = null));
        try {
          const I = new URL(s.value.trim()).hostname,
            H = {
              jobId: o.value.trim() || void 0,
              projectId: e.config.projectId,
              apiToken: e.config.apiToken,
              apiBaseUrl: e.config.apiBaseUrl,
              startUrl: s.value.trim(),
              baseDomain: I,
              pageLimit: n.value,
              maxDurationMin: i.value,
            };
          chrome.runtime.sendMessage(
            { type: "START_CRAWL", session: H },
            () => {
              l.value = {
                ...H,
                status: "running",
                startedAt: Date.now(),
                queue: [H.startUrl],
                visited: [],
                crawledCount: 0,
                errors: [],
              };
            },
          );
        } catch (y) {
          p.value = `Invalid URL: ${y.message}`;
        }
      }
      function T() {
        chrome.runtime.sendMessage({ type: "PAUSE_CRAWL" }, () => {
          l.value && (l.value.status = "paused");
        });
      }
      function m() {
        ((c.value = null),
          chrome.runtime.sendMessage({ type: "RESUME_CRAWL" }, () => {
            l.value && (l.value.status = "running");
          }));
      }
      function A() {
        chrome.runtime.sendMessage({ type: "STOP_CRAWL" }, () => {
          l.value && (l.value.status = "stopped");
        });
      }
      return (y, I) => {
        var H;
        return (
          k(),
          S("div", eu, [
            c.value
              ? (k(),
                S("div", su, [
                  I[5] ||
                    (I[5] = r(
                      "div",
                      { class: "flex items-center gap-1.5 font-bold" },
                      [
                        r("span", null, "⚠️"),
                        r(
                          "span",
                          null,
                          "Authentication Lost (Redirected to Login)",
                        ),
                      ],
                      -1,
                    )),
                  r("p", nu, [
                    I[3] ||
                      (I[3] = ee(
                        " The crawler encountered a login redirect at ",
                        -1,
                      )),
                    r("code", null, C(c.value), 1),
                    I[4] ||
                      (I[4] = ee(
                        ". Please log in again in a browser tab, then click Resume. ",
                        -1,
                      )),
                  ]),
                  r(
                    "button",
                    { onClick: m, class: "btn btn-primary text-xs py-1 px-3" },
                    " ✓ I am logged in, Resume Crawl ",
                  ),
                ]))
              : Z("", !0),
            p.value ? (k(), S("div", ou, C(p.value), 1)) : Z("", !0),
            !l.value ||
            l.value.status === "stopped" ||
            l.value.status === "done"
              ? (k(),
                S("div", iu, [
                  I[9] ||
                    (I[9] = r(
                      "span",
                      { class: "text-xs font-semibold text-gray-900 block" },
                      "Launch Multi-Page Authenticated Crawl",
                      -1,
                    )),
                  I[10] ||
                    (I[10] = r(
                      "p",
                      { class: "text-[11px] text-gray-500" },
                      " Crawls internal links in the background using your active browser cookies and authentication. ",
                      -1,
                    )),
                  r("div", null, [
                    I[6] ||
                      (I[6] = r(
                        "label",
                        {
                          class:
                            "block text-[11px] font-semibold text-gray-600 mb-1",
                        },
                        "Start URL (Home / Dashboard)",
                        -1,
                      )),
                    Tt(
                      r(
                        "input",
                        {
                          "onUpdate:modelValue":
                            I[0] || (I[0] = (j) => (s.value = j)),
                          type: "url",
                          class: "input text-xs",
                          placeholder: "https://client-site.com/dashboard",
                        },
                        null,
                        512,
                      ),
                      [[Bt, s.value]],
                    ),
                  ]),
                  r("div", ru, [
                    r("div", null, [
                      I[7] ||
                        (I[7] = r(
                          "label",
                          {
                            class:
                              "block text-[11px] font-semibold text-gray-600 mb-1",
                          },
                          "Audit Job ID (Optional)",
                          -1,
                        )),
                      Tt(
                        r(
                          "input",
                          {
                            "onUpdate:modelValue":
                              I[1] || (I[1] = (j) => (o.value = j)),
                            type: "text",
                            class: "input text-xs font-mono",
                            placeholder: "From Web App Audit",
                          },
                          null,
                          512,
                        ),
                        [[Bt, o.value]],
                      ),
                    ]),
                    r("div", null, [
                      I[8] ||
                        (I[8] = r(
                          "label",
                          {
                            class:
                              "block text-[11px] font-semibold text-gray-600 mb-1",
                          },
                          "Max Pages (Limit)",
                          -1,
                        )),
                      Tt(
                        r(
                          "input",
                          {
                            "onUpdate:modelValue":
                              I[2] || (I[2] = (j) => (n.value = j)),
                            type: "number",
                            min: "1",
                            max: "100",
                            class: "input text-xs",
                          },
                          null,
                          512,
                        ),
                        [[Bt, n.value, void 0, { number: !0 }]],
                      ),
                    ]),
                  ]),
                  r(
                    "button",
                    {
                      onClick: g,
                      disabled: !t.config.apiToken || !t.config.projectId,
                      class: "btn btn-primary w-full text-xs py-2 font-bold",
                    },
                    " ▶ Start Authenticated Crawl ",
                    8,
                    lu,
                  ),
                ]))
              : (k(),
                S("div", au, [
                  r("div", cu, [
                    r("div", uu, [
                      r(
                        "span",
                        {
                          class: q([
                            "w-2.5 h-2.5 rounded-full",
                            l.value.status === "running"
                              ? "bg-green-500 animate-ping"
                              : "bg-amber-400",
                          ]),
                        },
                        null,
                        2,
                      ),
                      r("span", fu, " Crawl Status: " + C(l.value.status), 1),
                    ]),
                    r("div", du, [
                      l.value.status === "running"
                        ? (k(),
                          S(
                            "button",
                            {
                              key: 0,
                              onClick: T,
                              class: "btn btn-secondary text-xs py-1 px-2.5",
                            },
                            " ⏸ Pause ",
                          ))
                        : l.value.status === "paused"
                          ? (k(),
                            S(
                              "button",
                              {
                                key: 1,
                                onClick: m,
                                class: "btn btn-primary text-xs py-1 px-2.5",
                              },
                              " ▶ Resume ",
                            ))
                          : Z("", !0),
                      r(
                        "button",
                        {
                          onClick: A,
                          class: "btn btn-danger text-xs py-1 px-2.5",
                        },
                        " ⏹ Stop ",
                      ),
                    ]),
                  ]),
                  r("div", pu, [
                    r("div", gu, [
                      I[11] ||
                        (I[11] = r(
                          "span",
                          {
                            class:
                              "text-[10px] text-gray-400 block font-semibold",
                          },
                          "PAGES CRAWLED",
                          -1,
                        )),
                      r("span", hu, C(l.value.crawledCount), 1),
                      r("span", mu, "/ " + C(l.value.pageLimit) + " max", 1),
                    ]),
                    r("div", bu, [
                      I[12] ||
                        (I[12] = r(
                          "span",
                          {
                            class:
                              "text-[10px] text-gray-400 block font-semibold",
                          },
                          "QUEUE REMAINING",
                          -1,
                        )),
                      r(
                        "span",
                        xu,
                        C(
                          ((H = l.value.queue) == null ? void 0 : H.length) ??
                            0,
                        ),
                        1,
                      ),
                      I[13] ||
                        (I[13] = r(
                          "span",
                          { class: "text-[10px] text-gray-400 block" },
                          "URLs",
                          -1,
                        )),
                    ]),
                    r("div", vu, [
                      I[14] ||
                        (I[14] = r(
                          "span",
                          {
                            class:
                              "text-[10px] text-gray-400 block font-semibold",
                          },
                          "ERRORS",
                          -1,
                        )),
                      r(
                        "span",
                        {
                          class: q([
                            "text-lg font-extrabold",
                            l.value.errors.length > 0
                              ? "text-red-500"
                              : "text-green-600",
                          ]),
                        },
                        C(l.value.errors.length),
                        3,
                      ),
                      I[15] ||
                        (I[15] = r(
                          "span",
                          { class: "text-[10px] text-gray-400 block" },
                          "issues",
                          -1,
                        )),
                    ]),
                  ]),
                  a.value
                    ? (k(),
                      S("div", yu, [
                        I[16] ||
                          (I[16] = r(
                            "span",
                            {
                              class:
                                "text-gray-400 block text-[10px] font-semibold",
                            },
                            "LAST CRAWLED PAGE",
                            -1,
                          )),
                        r("span", _u, C(a.value), 1),
                      ]))
                    : Z("", !0),
                ])),
          ])
        );
      };
    },
  }),
  ku = { class: "mock-data-mode" },
  Tu = { class: "card quota-card" },
  Cu = { class: "quota-header" },
  Su = { class: "quota-title-row" },
  $u = { class: "quota-badge" },
  Eu = ["title"],
  Au = { class: "quota-quick-metrics" },
  Iu = { class: "metric-item" },
  Pu = { class: "metric-val" },
  Ru = { class: "metric-item" },
  Ou = { class: "metric-val" },
  Mu = { class: "metric-item" },
  Lu = { class: "metric-val text-emerald-600" },
  Nu = { class: "quota-progress-track" },
  ju = { key: 0, class: "quota-details-panel" },
  Du = { class: "details-grid" },
  Uu = { class: "detail-row" },
  Fu = { class: "detail-val font-mono" },
  Hu = { class: "detail-row" },
  Vu = { class: "detail-val" },
  qu = { class: "detail-subval text-slate-400" },
  Wu = { class: "category-grid" },
  Bu = { class: "category-grid category-grid-secondary" },
  Ku = { key: 0, class: "card controls-card" },
  Gu = { class: "preset-grid" },
  Ju = { class: "grid grid-cols-2 gap-2" },
  Qu = {
    class:
      "block text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1",
  },
  Yu = ["min", "max"],
  zu = { key: 0, class: "flex items-center gap-1 text-[10px] text-gray-500" },
  Xu = { key: 1, class: "flex items-center gap-1 text-[10px] text-gray-500" },
  Zu = ["disabled"],
  tf = { key: 0, class: "animate-spin inline-block mr-1" },
  ef = { key: 1, class: "card controls-card compact-controls" },
  sf = { key: 0, class: "space-y-1" },
  nf = { class: "grid grid-cols-2 gap-2" },
  of = {
    class:
      "block text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1",
  },
  rf = ["disabled"],
  lf = { key: 0, class: "animate-spin inline-block mr-1" },
  af = {
    key: 2,
    class: "card p-2 text-xs",
    style: {
      background: "var(--danger-soft)",
      color: "var(--danger)",
      "border-color": "#f5c5c7",
    },
  },
  cf = { key: 3, class: "space-y-2" },
  uf = { class: "preview-header" },
  ff = { class: "flex items-center gap-1.5" },
  df = {
    key: 0,
    class: "badge",
    style: {
      background: "#e0f2fe",
      color: "#0369a1",
      "font-family": "monospace",
    },
  },
  pf = { class: "preview-actions" },
  gf = { class: "code-preview-container" },
  hf = { class: "code-preview-text" },
  mf = { class: "pt-1" },
  bf = {
    key: 0,
    class: "text-center text-[10px] text-green-700 font-semibold mt-1",
  },
  to = 1500,
  xf = $t({
    __name: "MockDataMode",
    props: { config: {} },
    setup(t) {
      const e = t,
        s = V("text"),
        o = V(""),
        n = V("list"),
        i = V(5),
        l = V("International & Indonesian"),
        a = V("characters"),
        c = V(150),
        p = V(!1),
        f = V(null),
        g = V(""),
        T = V(!1),
        m = V(""),
        A = V(!1),
        y = V({
          date: new Date().toISOString().slice(0, 10),
          dailyRequests: 0,
          dailyTokens: 0,
          lastPromptTokens: 0,
          lastCompletionTokens: 0,
          lastTotalTokens: 0,
          lastModel: "gemini-3.5-flash",
          lastTimestamp: Date.now(),
        });
      $e(async () => {
        await I();
      });
      async function I() {
        try {
          const J = await chrome.storage.local.get("qas_gemini_usage"),
            h = new Date().toISOString().slice(0, 10);
          if (J.qas_gemini_usage) {
            const R = J.qas_gemini_usage;
            R.date === h
              ? (y.value = R)
              : ((y.value = {
                  date: h,
                  dailyRequests: 0,
                  dailyTokens: 0,
                  lastPromptTokens: R.lastPromptTokens || 0,
                  lastCompletionTokens: R.lastCompletionTokens || 0,
                  lastTotalTokens: R.lastTotalTokens || 0,
                  lastModel: R.lastModel || "gemini-3.5-flash",
                  lastTimestamp: R.lastTimestamp || Date.now(),
                }),
                await chrome.storage.local.set({ qas_gemini_usage: y.value }));
          }
        } catch (J) {
          console.warn("Could not load Gemini usage stats:", J);
        }
      }
      async function H(J, h) {
        const R = new Date().toISOString().slice(0, 10),
          B = J.promptTokens || 0,
          ut = J.completionTokens || 0,
          lt = J.totalTokens || B + ut || 150;
        let K = y.value.date === R ? y.value.dailyRequests : 0,
          z = y.value.date === R ? y.value.dailyTokens : 0;
        y.value = {
          date: R,
          dailyRequests: K + 1,
          dailyTokens: z + lt,
          lastPromptTokens: B,
          lastCompletionTokens: ut,
          lastTotalTokens: lt,
          lastModel: h,
          lastTimestamp: Date.now(),
        };
        try {
          await chrome.storage.local.set({ qas_gemini_usage: y.value });
        } catch (Qt) {
          console.warn("Could not save Gemini usage:", Qt);
        }
      }
      const j = it(() =>
          Math.min(100, Math.round((y.value.dailyRequests / to) * 100)),
        ),
        G = it(() => Math.max(0, to - y.value.dailyRequests)),
        L = it(() =>
          j.value >= 90
            ? {
                label: "Near Limit",
                class: "quota-health-danger",
                dot: "bg-rose-500",
              }
            : j.value >= 70
              ? {
                  label: "Moderate",
                  class: "quota-health-warning",
                  dot: "bg-amber-500",
                }
              : {
                  label: "Optimal",
                  class: "quota-health-optimal",
                  dot: "bg-emerald-500",
                },
        ),
        ot = it(() => {
          if (!g.value) return null;
          const J = g.value.length,
            h = g.value.trim().split(/\s+/).filter(Boolean).length,
            R = g.value.split(/[.!?]+/).filter(Boolean).length;
          return { chars: J, words: h, sentences: R };
        });
      function mt(J, h, R) {
        ((o.value = J), (a.value = h), (c.value = R));
      }
      async function _t() {
        ((p.value = !0),
          (f.value = null),
          (g.value = ""),
          (T.value = !1),
          (m.value = ""));
        const h = `${e.config.apiBaseUrl.replace(/\/$/, "")}/generate-test-data`;
        try {
          const R = {
            category: s.value,
            customPrompt: o.value,
            format: s.value === "text" ? "list" : n.value,
            count: i.value,
            locale: l.value,
          };
          s.value === "text" &&
            ((R.lengthType = a.value), (R.lengthValue = c.value));
          const B = await fetch(h, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(e.config.apiToken
                ? { Authorization: `Bearer ${e.config.apiToken}` }
                : {}),
            },
            body: JSON.stringify(R),
          });
          if (!B.ok) {
            const lt = await B.text();
            let K = `Server error ${B.status}`;
            try {
              K = JSON.parse(lt).error || K;
            } catch {
              K = lt.slice(0, 150) || K;
            }
            throw new Error(K);
          }
          const ut = await B.json();
          ((g.value = ut.data || ""),
            await H(ut.usage || {}, ut.model || "gemini-3.5-flash"));
        } catch (R) {
          f.value =
            R.message ||
            "Failed to generate mock data. Ensure the backend server is running.";
        } finally {
          p.value = !1;
        }
      }
      async function Lt() {
        g.value &&
          (await navigator.clipboard.writeText(g.value),
          (T.value = !0),
          setTimeout(() => {
            T.value = !1;
          }, 2e3));
      }
      function xe() {
        if (!g.value) return;
        const J =
            s.value === "text"
              ? "txt"
              : n.value === "json"
                ? "json"
                : n.value === "csv"
                  ? "csv"
                  : "txt",
          h = J === "json" ? "application/json" : "text/plain",
          R = new Blob([g.value], { type: h }),
          B = URL.createObjectURL(R),
          ut = document.createElement("a");
        ((ut.href = B),
          (ut.download = `mock-data-${s.value}-${Date.now()}.${J}`),
          ut.click(),
          URL.revokeObjectURL(B));
      }
      async function Jt() {
        if (g.value) {
          m.value = "";
          try {
            const [J] = await chrome.tabs.query({
              active: !0,
              currentWindow: !0,
            });
            if (!(J != null && J.id))
              throw new Error("No active browser tab found.");
            let h = g.value;
            if (s.value !== "text" && n.value === "json")
              try {
                const R = JSON.parse(g.value);
                if (Array.isArray(R) && R.length > 0) {
                  const B = R[0];
                  h =
                    typeof B == "object"
                      ? B.fullName || B.email || B.payload || JSON.stringify(B)
                      : String(B);
                }
              } catch {
                h = g.value.split(`
`)[0];
              }
            (await chrome.scripting.executeScript({
              target: { tabId: J.id },
              args: [h],
              func: (R) => {
                const B = document.activeElement;
                if (
                  B &&
                  (B.tagName === "INPUT" ||
                    B.tagName === "TEXTAREA" ||
                    B.getAttribute("contenteditable") === "true")
                )
                  return (
                    B.getAttribute("contenteditable") === "true"
                      ? (B.innerText = R)
                      : (B.value = R),
                    B.dispatchEvent(new Event("input", { bubbles: !0 })),
                    B.dispatchEvent(new Event("change", { bubbles: !0 })),
                    !0
                  );
                const ut = document.querySelector(
                  'textarea, input:not([type="hidden"]):not([type="submit"]):not([type="button"])',
                );
                return ut
                  ? (ut.focus(),
                    (ut.value = R),
                    ut.dispatchEvent(new Event("input", { bubbles: !0 })),
                    ut.dispatchEvent(new Event("change", { bubbles: !0 })),
                    !0)
                  : !1;
              },
            }),
              (m.value = "✓ Filled into active web page field!"),
              setTimeout(() => {
                m.value = "";
              }, 2500));
          } catch (J) {
            m.value = `Failed: ${J.message}`;
          }
        }
      }
      return (J, h) => (
        k(),
        S("div", ku, [
          r("div", Tu, [
            r("div", Cu, [
              r("div", Su, [
                r(
                  "span",
                  { class: q(["quota-indicator", L.value.class]) },
                  null,
                  2,
                ),
                h[27] ||
                  (h[27] = r(
                    "span",
                    { class: "quota-title" },
                    "Gemini API Status",
                    -1,
                  )),
                r("span", $u, C(L.value.label), 1),
              ]),
              r(
                "button",
                {
                  type: "button",
                  onClick: h[0] || (h[0] = (R) => (A.value = !A.value)),
                  class: "quota-toggle-btn",
                  title: A.value ? "Collapse details" : "View usage breakdown",
                },
                [r("span", null, C(A.value ? "▲ Hide" : "▼ Details"), 1)],
                8,
                Eu,
              ),
            ]),
            r("div", Au, [
              r("div", Iu, [
                h[29] ||
                  (h[29] = r(
                    "span",
                    { class: "metric-label" },
                    "Daily Requests",
                    -1,
                  )),
                r("span", Pu, [
                  r("strong", null, C(y.value.dailyRequests), 1),
                  h[28] || (h[28] = ee(" / 1,500", -1)),
                ]),
              ]),
              h[33] ||
                (h[33] = r("div", { class: "metric-divider" }, null, -1)),
              r("div", Ru, [
                h[31] ||
                  (h[31] = r(
                    "span",
                    { class: "metric-label" },
                    "Tokens Today",
                    -1,
                  )),
                r("span", Ou, [
                  r("strong", null, C(y.value.dailyTokens.toLocaleString()), 1),
                  h[30] || (h[30] = ee(" / 1M", -1)),
                ]),
              ]),
              h[34] ||
                (h[34] = r("div", { class: "metric-divider" }, null, -1)),
              r("div", Mu, [
                h[32] ||
                  (h[32] = r(
                    "span",
                    { class: "metric-label" },
                    "Remaining",
                    -1,
                  )),
                r("span", Lu, [r("strong", null, C(G.value), 1)]),
              ]),
            ]),
            r("div", Nu, [
              r(
                "div",
                {
                  class: q([
                    "quota-progress-fill",
                    j.value > 85 ? "bg-rose-500" : "bg-teal-600",
                  ]),
                  style: Je({ width: `${Math.max(2, j.value)}%` }),
                },
                null,
                6,
              ),
            ]),
            A.value
              ? (k(),
                S("div", ju, [
                  r("div", Du, [
                    r("div", Uu, [
                      h[35] ||
                        (h[35] = r(
                          "span",
                          { class: "detail-name" },
                          "Active Model:",
                          -1,
                        )),
                      r("span", Fu, C(y.value.lastModel), 1),
                    ]),
                    r("div", Hu, [
                      h[36] ||
                        (h[36] = r(
                          "span",
                          { class: "detail-name" },
                          "Last Request Tokens:",
                          -1,
                        )),
                      r("span", Vu, [
                        ee(C(y.value.lastTotalTokens) + " tokens ", 1),
                        r(
                          "span",
                          qu,
                          "(" +
                            C(y.value.lastPromptTokens) +
                            " in / " +
                            C(y.value.lastCompletionTokens) +
                            " out)",
                          1,
                        ),
                      ]),
                    ]),
                    h[37] ||
                      (h[37] = Gr(
                        '<div class="detail-row" data-v-14fd8f55><span class="detail-name" data-v-14fd8f55>Rate Limit Tier:</span><span class="detail-val" data-v-14fd8f55>15 req/min (Free Tier)</span></div><div class="detail-row" data-v-14fd8f55><span class="detail-name" data-v-14fd8f55>Quota Reset:</span><span class="detail-val text-slate-400" data-v-14fd8f55>Daily at 00:00 UTC</span></div>',
                        2,
                      )),
                  ]),
                ]))
              : Z("", !0),
          ]),
          r("div", null, [
            h[44] ||
              (h[44] = r(
                "label",
                {
                  class:
                    "block text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5",
                },
                "Tool Category",
                -1,
              )),
            r("div", Wu, [
              r(
                "button",
                {
                  type: "button",
                  onClick: h[1] || (h[1] = (R) => (s.value = "text")),
                  class: q([
                    "btn category-button text-left p-2 flex items-center gap-2 text-xs",
                    s.value === "text" ? "btn-primary" : "btn-secondary",
                  ]),
                },
                [
                  ...(h[38] ||
                    (h[38] = [
                      r("span", null, "📝", -1),
                      r(
                        "div",
                        { class: "min-w-0" },
                        [
                          r(
                            "div",
                            { class: "font-semibold leading-tight" },
                            "Text & Paragraphs",
                          ),
                          r(
                            "div",
                            { class: "text-[9px] opacity-80 truncate" },
                            " Exact words / char count ",
                          ),
                        ],
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
              r(
                "button",
                {
                  type: "button",
                  onClick: h[2] || (h[2] = (R) => (s.value = "boundary")),
                  class: q([
                    "btn category-button text-left p-2 flex items-center gap-2 text-xs",
                    s.value === "boundary" ? "btn-primary" : "btn-secondary",
                  ]),
                },
                [
                  ...(h[39] ||
                    (h[39] = [
                      r("span", null, "🧱", -1),
                      r(
                        "div",
                        { class: "min-w-0" },
                        [
                          r(
                            "div",
                            { class: "font-semibold leading-tight" },
                            "Boundary Values",
                          ),
                          r(
                            "div",
                            { class: "text-[9px] opacity-80 truncate" },
                            " 255+ chars, Unicode, Emoji ",
                          ),
                        ],
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
              r(
                "button",
                {
                  type: "button",
                  onClick: h[3] || (h[3] = (R) => (s.value = "users")),
                  class: q([
                    "btn category-button text-left p-2 flex items-center gap-2 text-xs",
                    s.value === "users" ? "btn-primary" : "btn-secondary",
                  ]),
                },
                [
                  ...(h[40] ||
                    (h[40] = [
                      r("span", null, "👤", -1),
                      r(
                        "div",
                        { class: "min-w-0" },
                        [
                          r(
                            "div",
                            { class: "font-semibold leading-tight" },
                            "User Profiles",
                          ),
                          r(
                            "div",
                            { class: "text-[9px] opacity-80 truncate" },
                            " Names, Emails, Phones ",
                          ),
                        ],
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
              r(
                "button",
                {
                  type: "button",
                  onClick: h[4] || (h[4] = (R) => (s.value = "security")),
                  class: q([
                    "btn category-button text-left p-2 flex items-center gap-2 text-xs",
                    s.value === "security" ? "btn-primary" : "btn-secondary",
                  ]),
                },
                [
                  ...(h[41] ||
                    (h[41] = [
                      r("span", null, "🛡️", -1),
                      r(
                        "div",
                        { class: "min-w-0" },
                        [
                          r(
                            "div",
                            { class: "font-semibold leading-tight" },
                            "XSS / SQLi Payloads",
                          ),
                          r(
                            "div",
                            { class: "text-[9px] opacity-80 truncate" },
                            " Security injection fuzzing ",
                          ),
                        ],
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
            ]),
            r("div", Bu, [
              r(
                "button",
                {
                  type: "button",
                  onClick: h[5] || (h[5] = (R) => (s.value = "financial")),
                  class: q([
                    "btn category-button text-left p-2 flex items-center gap-2 text-xs",
                    s.value === "financial" ? "btn-primary" : "btn-secondary",
                  ]),
                },
                [
                  ...(h[42] ||
                    (h[42] = [
                      r("span", null, "💳", -1),
                      r(
                        "div",
                        { class: "min-w-0" },
                        [
                          r(
                            "div",
                            { class: "font-semibold leading-tight" },
                            "Payment & Cards",
                          ),
                          r(
                            "div",
                            { class: "text-[9px] opacity-80 truncate" },
                            " Test card numbers, CVVs ",
                          ),
                        ],
                        -1,
                      ),
                    ])),
                ],
                2,
              ),
            ]),
          ]),
          s.value === "text"
            ? (k(),
              S("div", Ku, [
                r("div", null, [
                  h[45] ||
                    (h[45] = r(
                      "div",
                      {
                        class:
                          "flex items-center justify-between text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1",
                      },
                      [r("span", null, "Quick Topic Presets")],
                      -1,
                    )),
                  r("div", Gu, [
                    r(
                      "button",
                      {
                        type: "button",
                        onClick:
                          h[7] ||
                          (h[7] = (R) =>
                            mt(
                              "Role experience and career accomplishments for senior software engineer",
                              "characters",
                              200,
                            )),
                        class: "btn btn-secondary text-[10px] py-0.5 px-1.5",
                        style: { "min-height": "22px" },
                      },
                      " 💼 Job Experience (200c) ",
                    ),
                    r(
                      "button",
                      {
                        type: "button",
                        onClick:
                          h[8] ||
                          (h[8] = (R) =>
                            mt(
                              "Detailed product review praising durability and fast shipping",
                              "words",
                              50,
                            )),
                        class: "btn btn-secondary text-[10px] py-0.5 px-1.5",
                        style: { "min-height": "22px" },
                      },
                      " ⭐ Review (50w) ",
                    ),
                    r(
                      "button",
                      {
                        type: "button",
                        onClick:
                          h[9] ||
                          (h[9] = (R) =>
                            mt(
                              "Customer support feedback ticket regarding delivery delay",
                              "characters",
                              150,
                            )),
                        class: "btn btn-secondary text-[10px] py-0.5 px-1.5",
                        style: { "min-height": "22px" },
                      },
                      " 🎫 Ticket (150c) ",
                    ),
                    r(
                      "button",
                      {
                        type: "button",
                        onClick:
                          h[10] ||
                          (h[10] = (R) =>
                            mt(
                              "Standard professional dummy placeholder paragraph",
                              "paragraphs",
                              2,
                            )),
                        class: "btn btn-secondary text-[10px] py-0.5 px-1.5",
                        style: { "min-height": "22px" },
                      },
                      " 📄 2 Paragraphs ",
                    ),
                  ]),
                ]),
                r("div", null, [
                  h[46] ||
                    (h[46] = r(
                      "label",
                      {
                        class:
                          "block text-[11px] font-semibold text-gray-700 mb-1",
                      },
                      "Topic / Custom Prompt",
                      -1,
                    )),
                  Tt(
                    r(
                      "input",
                      {
                        "onUpdate:modelValue":
                          h[11] || (h[11] = (R) => (o.value = R)),
                        class: "input text-xs",
                        placeholder:
                          "e.g. Detailed bio of a graphic designer working in tech startup",
                      },
                      null,
                      512,
                    ),
                    [[Bt, o.value]],
                  ),
                ]),
                r("div", Ju, [
                  r("div", null, [
                    h[48] ||
                      (h[48] = r(
                        "label",
                        {
                          class:
                            "block text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1",
                        },
                        "Length Unit",
                        -1,
                      )),
                    Tt(
                      r(
                        "select",
                        {
                          "onUpdate:modelValue":
                            h[12] || (h[12] = (R) => (a.value = R)),
                          class: "input text-xs",
                          style: { "min-height": "28px", padding: "3px 6px" },
                        },
                        [
                          ...(h[47] ||
                            (h[47] = [
                              r(
                                "option",
                                { value: "characters" },
                                "Characters (Chars)",
                                -1,
                              ),
                              r("option", { value: "words" }, "Words", -1),
                              r(
                                "option",
                                { value: "sentences" },
                                "Sentences",
                                -1,
                              ),
                              r(
                                "option",
                                { value: "paragraphs" },
                                "Paragraphs",
                                -1,
                              ),
                            ])),
                        ],
                        512,
                      ),
                      [[zn, a.value]],
                    ),
                  ]),
                  r("div", null, [
                    r(
                      "label",
                      Qu,
                      " Target: " + C(c.value) + " " + C(a.value),
                      1,
                    ),
                    Tt(
                      r(
                        "input",
                        {
                          type: "number",
                          "onUpdate:modelValue":
                            h[13] || (h[13] = (R) => (c.value = R)),
                          class: "input text-xs",
                          style: { "min-height": "28px", padding: "3px 6px" },
                          min: a.value === "characters" ? 10 : 1,
                          max: a.value === "characters" ? 3e3 : 500,
                        },
                        null,
                        8,
                        Yu,
                      ),
                      [[Bt, c.value, void 0, { number: !0 }]],
                    ),
                  ]),
                ]),
                a.value === "characters"
                  ? (k(),
                    S("div", zu, [
                      h[49] || (h[49] = r("span", null, "Quick Chars:", -1)),
                      r(
                        "button",
                        {
                          type: "button",
                          onClick: h[14] || (h[14] = (R) => (c.value = 50)),
                          class:
                            "hover:underline text-indigo-600 font-semibold",
                        },
                        " 50 ",
                      ),
                      h[50] || (h[50] = r("span", null, "•", -1)),
                      r(
                        "button",
                        {
                          type: "button",
                          onClick: h[15] || (h[15] = (R) => (c.value = 120)),
                          class:
                            "hover:underline text-indigo-600 font-semibold",
                        },
                        " 120 ",
                      ),
                      h[51] || (h[51] = r("span", null, "•", -1)),
                      r(
                        "button",
                        {
                          type: "button",
                          onClick: h[16] || (h[16] = (R) => (c.value = 255)),
                          class:
                            "hover:underline text-indigo-600 font-semibold",
                        },
                        " 255 (DB Limit) ",
                      ),
                      h[52] || (h[52] = r("span", null, "•", -1)),
                      r(
                        "button",
                        {
                          type: "button",
                          onClick: h[17] || (h[17] = (R) => (c.value = 500)),
                          class:
                            "hover:underline text-indigo-600 font-semibold",
                        },
                        " 500 ",
                      ),
                      h[53] || (h[53] = r("span", null, "•", -1)),
                      r(
                        "button",
                        {
                          type: "button",
                          onClick: h[18] || (h[18] = (R) => (c.value = 1e3)),
                          class:
                            "hover:underline text-indigo-600 font-semibold",
                        },
                        " 1000 ",
                      ),
                    ]))
                  : a.value === "words"
                    ? (k(),
                      S("div", Xu, [
                        h[54] || (h[54] = r("span", null, "Quick Words:", -1)),
                        r(
                          "button",
                          {
                            type: "button",
                            onClick: h[19] || (h[19] = (R) => (c.value = 15)),
                            class:
                              "hover:underline text-indigo-600 font-semibold",
                          },
                          " 15 ",
                        ),
                        h[55] || (h[55] = r("span", null, "•", -1)),
                        r(
                          "button",
                          {
                            type: "button",
                            onClick: h[20] || (h[20] = (R) => (c.value = 30)),
                            class:
                              "hover:underline text-indigo-600 font-semibold",
                          },
                          " 30 ",
                        ),
                        h[56] || (h[56] = r("span", null, "•", -1)),
                        r(
                          "button",
                          {
                            type: "button",
                            onClick: h[21] || (h[21] = (R) => (c.value = 50)),
                            class:
                              "hover:underline text-indigo-600 font-semibold",
                          },
                          " 50 ",
                        ),
                        h[57] || (h[57] = r("span", null, "•", -1)),
                        r(
                          "button",
                          {
                            type: "button",
                            onClick: h[22] || (h[22] = (R) => (c.value = 100)),
                            class:
                              "hover:underline text-indigo-600 font-semibold",
                          },
                          " 100 ",
                        ),
                        h[58] || (h[58] = r("span", null, "•", -1)),
                        r(
                          "button",
                          {
                            type: "button",
                            onClick: h[23] || (h[23] = (R) => (c.value = 250)),
                            class:
                              "hover:underline text-indigo-600 font-semibold",
                          },
                          " 250 ",
                        ),
                      ]))
                    : Z("", !0),
                r(
                  "button",
                  {
                    type: "button",
                    onClick: _t,
                    class: "btn btn-primary w-full text-xs mt-1",
                    disabled: p.value,
                  },
                  [
                    p.value ? (k(), S("span", tf, "⟳")) : Z("", !0),
                    r(
                      "span",
                      null,
                      C(
                        p.value
                          ? "Generating text..."
                          : `✨ Generate ${c.value} ${a.value}`,
                      ),
                      1,
                    ),
                  ],
                  8,
                  Zu,
                ),
              ]))
            : (k(),
              S("div", ef, [
                s.value === "custom"
                  ? (k(),
                    S("div", sf, [
                      h[59] ||
                        (h[59] = r(
                          "label",
                          {
                            class:
                              "block text-[11px] font-semibold text-gray-600",
                          },
                          "Requirement Prompt",
                          -1,
                        )),
                      Tt(
                        r(
                          "input",
                          {
                            "onUpdate:modelValue":
                              h[24] || (h[24] = (R) => (o.value = R)),
                            class: "input text-xs",
                            placeholder:
                              "e.g. 5 Indonesian addresses with postal codes and latitude/longitude",
                          },
                          null,
                          512,
                        ),
                        [[Bt, o.value]],
                      ),
                    ]))
                  : Z("", !0),
                r("div", nf, [
                  r("div", null, [
                    h[61] ||
                      (h[61] = r(
                        "label",
                        {
                          class:
                            "block text-[10px] font-semibold text-gray-600 uppercase tracking-wider mb-1",
                        },
                        "Format",
                        -1,
                      )),
                    Tt(
                      r(
                        "select",
                        {
                          "onUpdate:modelValue":
                            h[25] || (h[25] = (R) => (n.value = R)),
                          class: "input text-xs",
                          style: { "min-height": "28px", padding: "3px 6px" },
                        },
                        [
                          ...(h[60] ||
                            (h[60] = [
                              r("option", { value: "json" }, "JSON Array", -1),
                              r("option", { value: "csv" }, "CSV Sheet", -1),
                              r("option", { value: "list" }, "Line List", -1),
                            ])),
                        ],
                        512,
                      ),
                      [[zn, n.value]],
                    ),
                  ]),
                  r("div", null, [
                    r("label", of, "Count: " + C(i.value), 1),
                    Tt(
                      r(
                        "input",
                        {
                          type: "range",
                          "onUpdate:modelValue":
                            h[26] || (h[26] = (R) => (i.value = R)),
                          min: "3",
                          max: "15",
                          step: "1",
                          class: "w-full",
                          style: { "accent-color": "var(--accent)" },
                        },
                        null,
                        512,
                      ),
                      [[Bt, i.value, void 0, { number: !0 }]],
                    ),
                  ]),
                ]),
                r(
                  "button",
                  {
                    type: "button",
                    onClick: _t,
                    class: "btn btn-primary w-full text-xs",
                    disabled: p.value,
                  },
                  [
                    p.value ? (k(), S("span", lf, "⟳")) : Z("", !0),
                    r(
                      "span",
                      null,
                      C(
                        p.value
                          ? "Generating test vectors..."
                          : "🎲 Generate Test Data",
                      ),
                      1,
                    ),
                  ],
                  8,
                  rf,
                ),
              ])),
          f.value ? (k(), S("div", af, C(f.value), 1)) : Z("", !0),
          g.value
            ? (k(),
              S("div", cf, [
                r("div", uf, [
                  r("div", ff, [
                    h[62] ||
                      (h[62] = r(
                        "span",
                        { class: "font-semibold text-gray-700" },
                        "Preview",
                        -1,
                      )),
                    ot.value
                      ? (k(),
                        S(
                          "span",
                          df,
                          C(ot.value.chars) +
                            " chars | " +
                            C(ot.value.words) +
                            " words ",
                          1,
                        ))
                      : Z("", !0),
                  ]),
                  r("div", pf, [
                    r(
                      "button",
                      {
                        type: "button",
                        onClick: Lt,
                        class: "btn btn-secondary text-[10px] py-1 px-2",
                        style: { "min-height": "24px" },
                      },
                      [r("span", null, C(T.value ? "✓ Copied" : "📋 Copy"), 1)],
                    ),
                    r(
                      "button",
                      {
                        type: "button",
                        onClick: xe,
                        class: "btn btn-secondary text-[10px] py-1 px-2",
                        style: { "min-height": "24px" },
                      },
                      [
                        ...(h[63] ||
                          (h[63] = [r("span", null, "💾 Download", -1)])),
                      ],
                    ),
                  ]),
                ]),
                r("div", gf, [r("pre", hf, C(g.value), 1)]),
                r("div", mf, [
                  r(
                    "button",
                    {
                      type: "button",
                      onClick: Jt,
                      class:
                        "btn btn-secondary w-full text-xs flex items-center justify-center gap-1.5",
                      style: {
                        "border-color": "var(--accent)",
                        color: "var(--accent)",
                      },
                      title:
                        "Fills value into currently focused input or first form field in active tab",
                    },
                    [
                      ...(h[64] ||
                        (h[64] = [
                          r("span", null, "⚡", -1),
                          r(
                            "span",
                            null,
                            "Fill Text into Active Web Page Field",
                            -1,
                          ),
                        ])),
                    ],
                  ),
                  m.value ? (k(), S("p", bf, C(m.value), 1)) : Z("", !0),
                ]),
              ]))
            : Z("", !0),
        ])
      );
    },
  }),
  vf = (t, e) => {
    const s = t.__vccOpts || t;
    for (const [o, n] of e) s[o] = n;
    return s;
  },
  yf = vf(xf, [["__scopeId", "data-v-14fd8f55"]]),
  _f = "/assets/icon48-BBgT2MGY.png",
  wf = { class: "extension-shell" },
  kf = { class: "app-header" },
  Tf = { class: "brand-row" },
  Cf = { class: "brand" },
  Sf = ["src"],
  $f = { class: "mode-switch", "aria-label": "Audit mode" },
  Ef = ["aria-pressed"],
  Af = ["aria-pressed"],
  If = ["aria-pressed"],
  Pf = { class: "panel-content" },
  Rf = $t({
    __name: "App",
    setup(t) {
      const e = V("instant"),
        s = V({
          apiBaseUrl: "http://localhost:8888/.netlify/functions",
          apiToken: "",
          projectId: "",
        });
      return (
        $e(async () => {
          const o = await chrome.storage.local.get("qas_extension_config");
          o.qas_extension_config &&
            (s.value = {
              apiBaseUrl:
                o.qas_extension_config.apiBaseUrl ||
                "http://localhost:8888/.netlify/functions",
              apiToken: o.qas_extension_config.apiToken || "",
              projectId: o.qas_extension_config.projectId || "",
            });
        }),
        (o, n) => (
          k(),
          S("main", wf, [
            r("header", kf, [
              r("div", Tf, [
                r("div", Cf, [
                  r(
                    "img",
                    {
                      class: "brand-mark",
                      src: Co(_f),
                      alt: "",
                      "aria-hidden": "true",
                    },
                    null,
                    8,
                    Sf,
                  ),
                  n[4] ||
                    (n[4] = r(
                      "div",
                      { class: "brand-copy" },
                      [
                        r("h1", { class: "brand-name" }, "QA-Suite"),
                        r(
                          "p",
                          { class: "brand-subtitle" },
                          "Website inspection companion",
                        ),
                      ],
                      -1,
                    )),
                ]),
                n[5] || (n[5] = r("span", { class: "build-tag" }, "v1.0", -1)),
              ]),
              r("nav", $f, [
                r(
                  "button",
                  {
                    type: "button",
                    class: q([
                      "mode-button",
                      { "is-active": e.value === "instant" },
                    ]),
                    "aria-pressed": e.value === "instant",
                    onClick: n[0] || (n[0] = (i) => (e.value = "instant")),
                  },
                  " Page audit ",
                  10,
                  Ef,
                ),
                r(
                  "button",
                  {
                    type: "button",
                    class: q([
                      "mode-button",
                      { "is-active": e.value === "mockdata" },
                    ]),
                    "aria-pressed": e.value === "mockdata",
                    onClick: n[1] || (n[1] = (i) => (e.value = "mockdata")),
                  },
                  " Mock data ",
                  10,
                  Af,
                ),
                r(
                  "button",
                  {
                    type: "button",
                    class: q([
                      "mode-button",
                      { "is-active": e.value === "crawl" },
                    ]),
                    "aria-pressed": e.value === "crawl",
                    onClick: n[2] || (n[2] = (i) => (e.value = "crawl")),
                  },
                  " Crawl ",
                  10,
                  If,
                ),
              ]),
            ]),
            r("section", Pf, [
              Pt(
                Wl,
                {
                  config: s.value,
                  "onUpdate:config": n[3] || (n[3] = (i) => (s.value = i)),
                },
                null,
                8,
                ["config"],
              ),
              e.value === "instant"
                ? (k(),
                  Et(tu, { key: 0, config: s.value }, null, 8, ["config"]))
                : e.value === "mockdata"
                  ? (k(),
                    Et(yf, { key: 1, config: s.value }, null, 8, ["config"]))
                  : (k(),
                    Et(wu, { key: 2, config: s.value }, null, 8, ["config"])),
            ]),
          ])
        )
      );
    },
  }),
  Of = Ol(Rf);
Of.mount("#app");
