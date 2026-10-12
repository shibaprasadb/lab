import { A as e, Cn as t, Fn as n, Ft as r, In as i, Ln as a, P as o, R as s, Rn as c, Rt as l, Sn as u, Tt as d, V as f, W as p, Wn as m, Wt as h, Xt as g, Yn as ee, Yt as te, Z as _, _ as ne, _t as re, b as v, ct as ie, d as y, dr as ae, er as oe, et as se, f as ce, fr as le, gr as ue, hn as b, ht as x, j as de, kn as fe, kt as S, lt as pe, nr as me, on as C, or as he, rn as ge, sn as _e, sr as ve, tn as ye, tr as be, un as xe, v as w, vn as T, wt as E, xt as D, y as Se, yt as O } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
//#region ../react/build/layout-wQj9hVsT.js
var Ce = /\s/;
function we(e) {
	for (var t = e.length; t-- && Ce.test(e.charAt(t)););
	return t;
}
var Te = /^\s+/;
function Ee(e) {
	return e && e.slice(0, we(e) + 1).replace(Te, "");
}
var De = NaN, Oe = /^[-+]0x[0-9a-f]+$/i, ke = /^0b[01]+$/i, Ae = /^0o[0-7]+$/i, je = parseInt;
function Me(e) {
	if (typeof e == "number") return e;
	if (T(e)) return De;
	if (O(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = O(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = Ee(e);
	var n = ke.test(e);
	return n || Ae.test(e) ? je(e.slice(2), n ? 2 : 8) : Oe.test(e) ? De : +e;
}
var Ne = 1 / 0, Pe = 17976931348623157e292;
function k(e) {
	return e ? (e = Me(e), e === Ne || e === -Ne ? (e < 0 ? -1 : 1) * Pe : e === e ? e : 0) : e === 0 ? e : 0;
}
function Fe(e) {
	var t = k(e), n = t % 1;
	return t === t ? n ? t - n : t : 0;
}
var Ie = Object.create, Le = /* @__PURE__ */ function() {
	function e() {}
	return function(t) {
		if (!O(t)) return {};
		if (Ie) return Ie(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
function Re(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
function A(e, t, n) {
	t == "__proto__" && ue ? ue(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
var ze = Object.prototype.hasOwnProperty;
function j(e, t, n) {
	var r = e[t];
	(!(ze.call(e, t) && w(r, n)) || n === void 0 && !(t in e)) && A(e, t, n);
}
function Be(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = void 0;
		c === void 0 && (c = e[s]), i ? A(n, s, c) : j(n, s, c);
	}
	return n;
}
function M(e, t, n) {
	if (!O(n)) return !1;
	var r = typeof t;
	return (r == "number" ? i(n) && le(t, n.length) : r == "string" && t in n) ? w(n[t], e) : !1;
}
function Ve(e) {
	return ee(function(t, n) {
		var r = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
		for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && M(n[0], n[1], o) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i;) {
			var s = n[r];
			s && e(t, s, r, a);
		}
		return t;
	});
}
function He(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
var Ue = Object.prototype.hasOwnProperty;
function We(e) {
	if (!O(e)) return He(e);
	var t = ve(e), n = [];
	for (var r in e) r == "constructor" && (t || !Ue.call(e, r)) || n.push(r);
	return n;
}
function N(e) {
	return i(e) ? m(e, !0) : We(e);
}
function P(e) {
	return e != null && e.length ? pe(e) : [];
}
function Ge(e) {
	return ae(l(e, void 0, P), e + "");
}
var Ke = ye(Object.getPrototypeOf, Object), qe = "[object Object]", Je = Function.prototype, Ye = Object.prototype, Xe = Je.toString, Ze = Ye.hasOwnProperty, Qe = Xe.call(Object);
function $e(e) {
	if (!S(e) || n(e) != qe) return !1;
	var t = Ke(e);
	if (t === null) return !0;
	var r = Ze.call(t, "constructor") && t.constructor;
	return typeof r == "function" && r instanceof r && Xe.call(r) == Qe;
}
var et = typeof exports == "object" && exports && !exports.nodeType && exports, tt = et && typeof module == "object" && module && !module.nodeType && module, nt = tt && tt.exports === et ? Se.Buffer : void 0, rt = nt ? nt.allocUnsafe : void 0;
function it(e, t) {
	if (t) return e.slice();
	var n = e.length, r = rt ? rt(n) : new e.constructor(n);
	return e.copy(r), r;
}
var at = Object.prototype.hasOwnProperty;
function ot(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && at.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function F(e) {
	var t = new e.constructor(e.byteLength);
	return new a(t).set(new a(e)), t;
}
function st(e, t) {
	var n = F(e.buffer);
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
var ct = /\w*$/;
function lt(e) {
	var t = new e.constructor(e.source, ct.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
var ut = c ? c.prototype : void 0, dt = ut ? ut.valueOf : void 0;
function ft(e) {
	return dt ? Object(dt.call(e)) : {};
}
function pt(e, t) {
	var n = t ? F(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
var mt = "[object Boolean]", ht = "[object Date]", gt = "[object Map]", _t = "[object Number]", vt = "[object RegExp]", yt = "[object Set]", bt = "[object String]", xt = "[object Symbol]", St = "[object ArrayBuffer]", Ct = "[object DataView]", wt = "[object Float32Array]", Tt = "[object Float64Array]", Et = "[object Int8Array]", Dt = "[object Int16Array]", Ot = "[object Int32Array]", kt = "[object Uint8Array]", At = "[object Uint8ClampedArray]", jt = "[object Uint16Array]", Mt = "[object Uint32Array]";
function Nt(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case St: return F(e);
		case mt:
		case ht: return new r(+e);
		case Ct: return st(e);
		case wt:
		case Tt:
		case Et:
		case Dt:
		case Ot:
		case kt:
		case At:
		case jt:
		case Mt: return pt(e, n);
		case gt: return new r();
		case _t:
		case bt: return new r(e);
		case vt: return lt(e);
		case yt: return new r();
		case xt: return ft(e);
	}
}
function Pt(e) {
	return typeof e.constructor == "function" && !ve(e) ? Le(Ke(e)) : {};
}
var Ft = "[object Map]";
function It(e) {
	return S(e) && ge(e) == Ft;
}
var Lt = D && D.isMap, Rt = Lt ? u(Lt) : It, zt = "[object Set]";
function Bt(e) {
	return S(e) && ge(e) == zt;
}
var Vt = D && D.isSet, Ht = Vt ? u(Vt) : Bt, Ut = 1, Wt = "[object Arguments]", Gt = "[object Array]", Kt = "[object Boolean]", qt = "[object Date]", Jt = "[object Error]", Yt = "[object Function]", Xt = "[object GeneratorFunction]", Zt = "[object Map]", Qt = "[object Number]", $t = "[object Object]", en = "[object RegExp]", tn = "[object Set]", nn = "[object String]", rn = "[object Symbol]", an = "[object WeakMap]", on = "[object ArrayBuffer]", sn = "[object DataView]", cn = "[object Float32Array]", ln = "[object Float64Array]", un = "[object Int8Array]", dn = "[object Int16Array]", fn = "[object Int32Array]", pn = "[object Uint8Array]", mn = "[object Uint8ClampedArray]", hn = "[object Uint16Array]", gn = "[object Uint32Array]", I = {};
I[Wt] = I[Gt] = I[on] = I[sn] = I[Kt] = I[qt] = I[cn] = I[ln] = I[un] = I[dn] = I[fn] = I[Zt] = I[Qt] = I[$t] = I[en] = I[tn] = I[nn] = I[rn] = I[pn] = I[mn] = I[hn] = I[gn] = !0, I[Jt] = I[Yt] = I[an] = !1;
function L(t, n, i, a, o, s) {
	var c, l = n & Ut;
	if (c !== void 0) return c;
	if (!O(t)) return t;
	var u = e(t);
	if (u) c = ot(t);
	else {
		var d = ge(t), f = d == Yt || d == Xt;
		if (me(t)) return it(t, l);
		if (d == $t || d == Wt || f && !o) c = f ? {} : Pt(t);
		else {
			if (!I[d]) return o ? t : {};
			c = Nt(t, d, l);
		}
	}
	s ||= new _e();
	var p = s.get(t);
	if (p) return p;
	s.set(t, c), Ht(t) ? t.forEach(function(e) {
		c.add(L(e, n, i, e, t, s));
	}) : Rt(t) && t.forEach(function(e, r) {
		c.set(r, L(e, n, i, r, t, s));
	});
	var m = u ? void 0 : r(t);
	return ne(m || t, function(e, r) {
		m && (r = e, e = t[r]), j(c, r, L(e, n, i, r, t, s));
	}), c;
}
var _n = 1, vn = 4;
function yn(e) {
	return L(e, _n | vn);
}
var bn = Object.prototype, xn = bn.hasOwnProperty, Sn = ee(function(e, t) {
	e = Object(e);
	var n = -1, r = t.length, i = r > 2 ? t[2] : void 0;
	for (i && M(t[0], t[1], i) && (r = 1); ++n < r;) for (var a = t[n], o = N(a), s = -1, c = o.length; ++s < c;) {
		var l = o[s], u = e[l];
		(u === void 0 || w(u, bn[l]) && !xn.call(e, l)) && (e[l] = a[l]);
	}
	return e;
});
function R(e, t, n) {
	(n !== void 0 && !w(e[t], n) || n === void 0 && !(t in e)) && A(e, t, n);
}
function z(e, t) {
	if ((t !== "constructor" || typeof e[t] != "function") && t != "__proto__") return e[t];
}
function Cn(e) {
	return Be(e, N(e));
}
function wn(t, n, r, i, a, o, s) {
	var c = z(t, r), l = z(n, r), u = s.get(l);
	if (u) {
		R(t, r, u);
		return;
	}
	var d = o ? o(c, l, r + "", t, n, s) : void 0, f = d === void 0;
	if (f) {
		var p = e(l), m = !p && me(l), h = !p && !m && be(l);
		d = l, p || m || h ? e(c) ? d = c : xe(c) ? d = Re(c) : m ? (f = !1, d = it(l, !0)) : h ? (f = !1, d = pt(l, !0)) : d = [] : $e(l) || se(l) ? (d = c, se(c) ? d = Cn(c) : (!O(c) || re(c)) && (d = Pt(l))) : f = !1;
	}
	f && (s.set(l, d), a(d, l, i, o, s), s.delete(l)), R(t, r, d);
}
function Tn(e, t, n, r, i) {
	e !== t && h(t, function(a, o) {
		if (i ||= new _e(), O(a)) wn(e, t, o, n, Tn, r, i);
		else {
			var s = r ? r(z(e, o), a, o + "", e, t, i) : void 0;
			s === void 0 && (s = a), R(e, o, s);
		}
	}, N);
}
function B(e) {
	var t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
function En(e) {
	return function(t, n, r) {
		var a = Object(t);
		if (!i(t)) {
			var o = _(n);
			t = f(t), n = function(e) {
				return o(a[e], e, a);
			};
		}
		var s = e(t, n, r);
		return s > -1 ? a[o ? t[s] : s] : void 0;
	};
}
var Dn = Math.max;
function On(e, t, n) {
	var r = e == null ? 0 : e.length;
	if (!r) return -1;
	var i = n == null ? 0 : Fe(n);
	return i < 0 && (i = Dn(r + i, 0)), he(e, _(t), i);
}
var V = En(On);
function kn(e, t) {
	var n = -1, r = i(e) ? Array(e.length) : [];
	return de(e, function(e, i, a) {
		r[++n] = t(e, i, a);
	}), r;
}
function H(t, n) {
	return (e(t) ? C : kn)(t, _(n));
}
function An(e, t) {
	return e == null ? e : h(e, te(t), N);
}
function jn(e, t) {
	return e && fe(e, te(t));
}
function Mn(e, t) {
	return e > t;
}
var Nn = Object.prototype.hasOwnProperty;
function Pn(e, t) {
	return e != null && Nn.call(e, t);
}
function Fn(e, t) {
	return e != null && p(e, t, Pn);
}
function In(e, t) {
	return e < t;
}
function U(e, t) {
	var n = {};
	return t = _(t), fe(e, function(e, r, i) {
		A(n, r, t(e, r, i));
	}), n;
}
function Ln(e, t, n) {
	for (var r = -1, i = e.length; ++r < i;) {
		var a = e[r], o = t(a);
		if (o != null && (s === void 0 ? o === o && !T(o) : n(o, s))) var s = o, c = a;
	}
	return c;
}
function W(e) {
	return e && e.length ? Ln(e, x, Mn) : void 0;
}
var Rn = Ve(function(e, t, n) {
	Tn(e, t, n);
});
function G(e) {
	return e && e.length ? Ln(e, x, In) : void 0;
}
function zn(e, t) {
	return e && e.length ? Ln(e, _(t), In) : void 0;
}
function Bn(e, t, n, r) {
	if (!O(e)) return e;
	t = oe(t, e);
	for (var i = -1, a = t.length, s = a - 1, c = e; c != null && ++i < a;) {
		var l = o(t[i]), u = n;
		if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
		if (i != s) {
			var d = c[l];
			u = void 0, u === void 0 && (u = O(d) ? d : le(t[i + 1]) ? [] : {});
		}
		j(c, l, u), c = c[l];
	}
	return e;
}
function Vn(e, t, n) {
	for (var r = -1, i = t.length, a = {}; ++r < i;) {
		var o = t[r], s = ce(e, o);
		n(s, o) && Bn(a, oe(o, e), s);
	}
	return a;
}
function Hn(e, t) {
	var n = e.length;
	for (e.sort(t); n--;) e[n] = e[n].value;
	return e;
}
function Un(e, t) {
	if (e !== t) {
		var n = e !== void 0, r = e === null, i = e === e, a = T(e), o = t !== void 0, s = t === null, c = t === t, l = T(t);
		if (!s && !l && !a && e > t || a && o && c && !s && !l || r && o && c || !n && c || !i) return 1;
		if (!r && !a && !l && e < t || l && n && i && !r && !a || s && n && i || !o && i || !c) return -1;
	}
	return 0;
}
function Wn(e, t, n) {
	for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, s = n.length; ++r < o;) {
		var c = Un(i[r], a[r]);
		if (c) return r >= s ? c : c * (n[r] == "desc" ? -1 : 1);
	}
	return e.index - t.index;
}
function Gn(t, n, r) {
	n = n.length ? C(n, function(t) {
		return e(t) ? function(e) {
			return ce(e, t.length === 1 ? t[0] : t);
		} : t;
	}) : [x];
	var i = -1;
	return n = C(n, u(_)), Hn(kn(t, function(e, t, r) {
		return {
			criteria: C(n, function(t) {
				return t(e);
			}),
			index: ++i,
			value: e
		};
	}), function(e, t) {
		return Wn(e, t, r);
	});
}
function Kn(e, t) {
	return Vn(e, t, function(t, n) {
		return ie(e, n);
	});
}
var K = Ge(function(e, t) {
	return e == null ? {} : Kn(e, t);
}), qn = Math.ceil, Jn = Math.max;
function Yn(e, t, n, r) {
	for (var i = -1, a = Jn(qn((t - e) / (n || 1)), 0), o = Array(a); a--;) o[++i] = e, e += n;
	return o;
}
function Xn(e) {
	return function(e, t, n) {
		return n && typeof n != "number" && M(e, t, n) && (t = n = void 0), e = k(e), t === void 0 ? (t = e, e = 0) : t = k(t), n = n === void 0 ? e < t ? 1 : -1 : k(n), Yn(e, t, n);
	};
}
var q = Xn(), J = ee(function(e, t) {
	if (e == null) return [];
	var n = t.length;
	return n > 1 && M(e, t[0], t[1]) ? t = [] : n > 2 && M(t[0], t[1], t[2]) && (t = [t[0]]), Gn(e, pe(t), []);
}), Zn = 0;
function Qn(e) {
	var t = ++Zn;
	return d(e) + t;
}
function $n(e, t, n) {
	for (var r = -1, i = e.length, a = t.length, o = {}; ++r < i;) {
		var s = r < a ? t[r] : void 0;
		n(o, e[r], s);
	}
	return o;
}
function er(e, t) {
	return $n(e || [], t || [], j);
}
var tr = class {
	constructor() {
		var e = {};
		e._next = e._prev = e, this._sentinel = e;
	}
	dequeue() {
		var e = this._sentinel, t = e._prev;
		if (t !== e) return nr(t), t;
	}
	enqueue(e) {
		var t = this._sentinel;
		e._prev && e._next && nr(e), e._next = t._next, t._next._prev = e, t._next = e, e._prev = t;
	}
	toString() {
		for (var e = [], t = this._sentinel, n = t._prev; n !== t;) e.push(JSON.stringify(n, rr)), n = n._prev;
		return "[" + e.join(", ") + "]";
	}
};
function nr(e) {
	e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
}
function rr(e, t) {
	if (e !== "_next" && e !== "_prev") return t;
}
var ir = t(1);
function ar(e, t) {
	if (e.nodeCount() <= 1) return [];
	var n = cr(e, t || ir);
	return P(H(or(n.graph, n.buckets, n.zeroIdx), function(t) {
		return e.outEdges(t.v, t.w);
	}));
}
function or(e, t, n) {
	for (var r = [], i = t[t.length - 1], a = t[0], o; e.nodeCount();) {
		for (; o = a.dequeue();) sr(e, t, n, o);
		for (; o = i.dequeue();) sr(e, t, n, o);
		if (e.nodeCount()) {
			for (var s = t.length - 2; s > 0; --s) if (o = t[s].dequeue(), o) {
				r = r.concat(sr(e, t, n, o, !0));
				break;
			}
		}
	}
	return r;
}
function sr(e, t, n, r, i) {
	var a = i ? [] : void 0;
	return s(e.inEdges(r.v), function(r) {
		var o = e.edge(r), s = e.node(r.v);
		i && a.push({
			v: r.v,
			w: r.w
		}), s.out -= o, lr(t, n, s);
	}), s(e.outEdges(r.v), function(r) {
		var i = e.edge(r), a = r.w, o = e.node(a);
		o.in -= i, lr(t, n, o);
	}), e.removeNode(r.v), a;
}
function cr(e, t) {
	var n = new b(), r = 0, i = 0;
	s(e.nodes(), function(e) {
		n.setNode(e, {
			v: e,
			in: 0,
			out: 0
		});
	}), s(e.edges(), function(e) {
		var a = n.edge(e.v, e.w) || 0, o = t(e), s = a + o;
		n.setEdge(e.v, e.w, s), i = Math.max(i, n.node(e.v).out += o), r = Math.max(r, n.node(e.w).in += o);
	});
	var a = q(i + r + 3).map(function() {
		return new tr();
	}), o = r + 1;
	return s(n.nodes(), function(e) {
		lr(a, o, n.node(e));
	}), {
		graph: n,
		buckets: a,
		zeroIdx: o
	};
}
function lr(e, t, n) {
	n.out ? n.in ? e[n.out - n.in + t].enqueue(n) : e[e.length - 1].enqueue(n) : e[0].enqueue(n);
}
function ur(e) {
	var t = e.graph().acyclicer === "greedy" ? ar(e, n(e)) : dr(e);
	s(t, function(t) {
		var n = e.edge(t);
		e.removeEdge(t), n.forwardName = t.name, n.reversed = !0, e.setEdge(t.w, t.v, n, Qn("rev"));
	});
	function n(e) {
		return function(t) {
			return e.edge(t).weight;
		};
	}
}
function dr(e) {
	var t = [], n = {}, r = {};
	function i(a) {
		Object.prototype.hasOwnProperty.call(r, a) || (r[a] = !0, n[a] = !0, s(e.outEdges(a), function(e) {
			Object.prototype.hasOwnProperty.call(n, e.w) ? t.push(e) : i(e.w);
		}), delete n[a]);
	}
	return s(e.nodes(), i), t;
}
function fr(e) {
	s(e.edges(), function(t) {
		var n = e.edge(t);
		if (n.reversed) {
			e.removeEdge(t);
			var r = n.forwardName;
			delete n.reversed, delete n.forwardName, e.setEdge(t.w, t.v, n, r);
		}
	});
}
function Y(e, t, n, r) {
	var i;
	do
		i = Qn(r);
	while (e.hasNode(i));
	return n.dummy = t, e.setNode(i, n), i;
}
function pr(e) {
	var t = new b().setGraph(e.graph());
	return s(e.nodes(), function(n) {
		t.setNode(n, e.node(n));
	}), s(e.edges(), function(n) {
		var r = t.edge(n.v, n.w) || {
			weight: 0,
			minlen: 1
		}, i = e.edge(n);
		t.setEdge(n.v, n.w, {
			weight: r.weight + i.weight,
			minlen: Math.max(r.minlen, i.minlen)
		});
	}), t;
}
function mr(e) {
	var t = new b({ multigraph: e.isMultigraph() }).setGraph(e.graph());
	return s(e.nodes(), function(n) {
		e.children(n).length || t.setNode(n, e.node(n));
	}), s(e.edges(), function(n) {
		t.setEdge(n, e.edge(n));
	}), t;
}
function hr(e, t) {
	var n = e.x, r = e.y, i = t.x - n, a = t.y - r, o = e.width / 2, s = e.height / 2;
	if (!i && !a) throw Error("Not possible to find intersection inside of the rectangle");
	var c, l;
	return Math.abs(a) * o > Math.abs(i) * s ? (a < 0 && (s = -s), c = s * i / a, l = s) : (i < 0 && (o = -o), c = o, l = o * a / i), {
		x: n + c,
		y: r + l
	};
}
function X(e) {
	var t = H(q(yr(e) + 1), function() {
		return [];
	});
	return s(e.nodes(), function(n) {
		var r = e.node(n), i = r.rank;
		g(i) || (t[i][r.order] = n);
	}), t;
}
function gr(e) {
	var t = G(H(e.nodes(), function(t) {
		return e.node(t).rank;
	}));
	s(e.nodes(), function(n) {
		var r = e.node(n);
		Fn(r, "rank") && (r.rank -= t);
	});
}
function _r(e) {
	var t = G(H(e.nodes(), function(t) {
		return e.node(t).rank;
	})), n = [];
	s(e.nodes(), function(r) {
		var i = e.node(r).rank - t;
		n[i] || (n[i] = []), n[i].push(r);
	});
	var r = 0, i = e.graph().nodeRankFactor;
	s(n, function(t, n) {
		g(t) && n % i !== 0 ? --r : r && s(t, function(t) {
			e.node(t).rank += r;
		});
	});
}
function vr(e, t, n, r) {
	var i = {
		width: 0,
		height: 0
	};
	return arguments.length >= 4 && (i.rank = n, i.order = r), Y(e, "border", i, t);
}
function yr(e) {
	return W(H(e.nodes(), function(t) {
		var n = e.node(t).rank;
		if (!g(n)) return n;
	}));
}
function br(e, t) {
	var n = {
		lhs: [],
		rhs: []
	};
	return s(e, function(e) {
		t(e) ? n.lhs.push(e) : n.rhs.push(e);
	}), n;
}
function xr(e, t) {
	return t();
}
function Sr(e) {
	function t(n) {
		var r = e.children(n), i = e.node(n);
		if (r.length && s(r, t), Object.prototype.hasOwnProperty.call(i, "minRank")) {
			i.borderLeft = [], i.borderRight = [];
			for (var a = i.minRank, o = i.maxRank + 1; a < o; ++a) Cr(e, "borderLeft", "_bl", n, i, a), Cr(e, "borderRight", "_br", n, i, a);
		}
	}
	s(e.children(), t);
}
function Cr(e, t, n, r, i, a) {
	var o = {
		width: 0,
		height: 0,
		rank: a,
		borderType: t
	}, s = i[t][a - 1], c = Y(e, "border", o, n);
	i[t][a] = c, e.setParent(c, r), s && e.setEdge(s, c, { weight: 1 });
}
function wr(e) {
	var t = e.graph().rankdir.toLowerCase();
	(t === "lr" || t === "rl") && Er(e);
}
function Tr(e) {
	var t = e.graph().rankdir.toLowerCase();
	(t === "bt" || t === "rl") && Or(e), (t === "lr" || t === "rl") && (Ar(e), Er(e));
}
function Er(e) {
	s(e.nodes(), function(t) {
		Dr(e.node(t));
	}), s(e.edges(), function(t) {
		Dr(e.edge(t));
	});
}
function Dr(e) {
	var t = e.width;
	e.width = e.height, e.height = t;
}
function Or(e) {
	s(e.nodes(), function(t) {
		kr(e.node(t));
	}), s(e.edges(), function(t) {
		var n = e.edge(t);
		s(n.points, kr), Object.prototype.hasOwnProperty.call(n, "y") && kr(n);
	});
}
function kr(e) {
	e.y = -e.y;
}
function Ar(e) {
	s(e.nodes(), function(t) {
		jr(e.node(t));
	}), s(e.edges(), function(t) {
		var n = e.edge(t);
		s(n.points, jr), Object.prototype.hasOwnProperty.call(n, "x") && jr(n);
	});
}
function jr(e) {
	var t = e.x;
	e.x = e.y, e.y = t;
}
function Mr(e) {
	e.graph().dummyChains = [], s(e.edges(), function(t) {
		Nr(e, t);
	});
}
function Nr(e, t) {
	var n = t.v, r = e.node(n).rank, i = t.w, a = e.node(i).rank, o = t.name, s = e.edge(t), c = s.labelRank;
	if (a !== r + 1) {
		e.removeEdge(t);
		var l = void 0, u, d;
		for (d = 0, ++r; r < a; ++d, ++r) s.points = [], l = {
			width: 0,
			height: 0,
			edgeLabel: s,
			edgeObj: t,
			rank: r
		}, u = Y(e, "edge", l, "_d"), r === c && (l.width = s.width, l.height = s.height, l.dummy = "edge-label", l.labelpos = s.labelpos), e.setEdge(n, u, { weight: s.weight }, o), d === 0 && e.graph().dummyChains.push(u), n = u;
		e.setEdge(n, i, { weight: s.weight }, o);
	}
}
function Pr(e) {
	s(e.graph().dummyChains, function(t) {
		var n = e.node(t), r = n.edgeLabel, i;
		for (e.setEdge(n.edgeObj, r); n.dummy;) i = e.successors(t)[0], e.removeNode(t), r.points.push({
			x: n.x,
			y: n.y
		}), n.dummy === "edge-label" && (r.x = n.x, r.y = n.y, r.width = n.width, r.height = n.height), t = i, n = e.node(t);
	});
}
function Fr(e) {
	var t = {};
	function n(r) {
		var i = e.node(r);
		if (Object.prototype.hasOwnProperty.call(t, r)) return i.rank;
		t[r] = !0;
		var a = G(H(e.outEdges(r), function(t) {
			return n(t.w) - e.edge(t).minlen;
		}));
		return (a === Infinity || a == null) && (a = 0), i.rank = a;
	}
	s(e.sources(), n);
}
function Z(e, t) {
	return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen;
}
function Ir(e) {
	var t = new b({ directed: !1 }), n = e.nodes()[0], r = e.nodeCount();
	t.setNode(n, {});
	for (var i, a; Lr(t, e) < r;) i = Rr(t, e), a = t.hasNode(i.v) ? Z(e, i) : -Z(e, i), zr(t, e, a);
	return t;
}
function Lr(e, t) {
	function n(r) {
		s(t.nodeEdges(r), function(i) {
			var a = i.v, o = r === a ? i.w : a;
			!e.hasNode(o) && !Z(t, i) && (e.setNode(o, {}), e.setEdge(r, o, {}), n(o));
		});
	}
	return s(e.nodes(), n), e.nodeCount();
}
function Rr(e, t) {
	return zn(t.edges(), function(n) {
		if (e.hasNode(n.v) !== e.hasNode(n.w)) return Z(t, n);
	});
}
function zr(e, t, n) {
	s(e.nodes(), function(e) {
		t.node(e).rank += n;
	});
}
function Br(t, n, r) {
	e(n) || (n = [n]);
	var i = (t.isDirected() ? t.successors : t.neighbors).bind(t), a = [], o = {};
	return s(n, function(e) {
		if (!t.hasNode(e)) throw Error("Graph does not have node: " + e);
		Vr(t, e, r === "post", o, i, a);
	}), a;
}
function Vr(e, t, n, r, i, a) {
	Object.prototype.hasOwnProperty.call(r, t) || (r[t] = !0, n || a.push(t), s(i(t), function(t) {
		Vr(e, t, n, r, i, a);
	}), n && a.push(t));
}
function Hr(e, t) {
	return Br(e, t, "post");
}
function Ur(e, t) {
	return Br(e, t, "pre");
}
Q.initLowLimValues = qr, Q.initCutValues = Wr, Q.calcCutValue = Kr, Q.leaveEdge = Yr, Q.enterEdge = Xr, Q.exchangeEdges = Zr;
function Q(e) {
	e = pr(e), Fr(e);
	var t = Ir(e);
	qr(t), Wr(t, e);
	for (var n, r; n = Yr(t);) r = Xr(t, e, n), Zr(t, e, n, r);
}
function Wr(e, t) {
	var n = Hr(e, e.nodes());
	n = n.slice(0, n.length - 1), s(n, function(n) {
		Gr(e, t, n);
	});
}
function Gr(e, t, n) {
	var r = e.node(n).parent;
	e.edge(n, r).cutvalue = Kr(e, t, n);
}
function Kr(e, t, n) {
	var r = e.node(n).parent, i = !0, a = t.edge(n, r), o = 0;
	return a ||= (i = !1, t.edge(r, n)), o = a.weight, s(t.nodeEdges(n), function(a) {
		var s = a.v === n, c = s ? a.w : a.v;
		if (c !== r) {
			var l = s === i, u = t.edge(a).weight;
			if (o += l ? u : -u, $r(e, n, c)) {
				var d = e.edge(n, c).cutvalue;
				o += l ? -d : d;
			}
		}
	}), o;
}
function qr(e, t) {
	arguments.length < 2 && (t = e.nodes()[0]), Jr(e, {}, 1, t);
}
function Jr(e, t, n, r, i) {
	var a = n, o = e.node(r);
	return t[r] = !0, s(e.neighbors(r), function(i) {
		Object.prototype.hasOwnProperty.call(t, i) || (n = Jr(e, t, n, i, r));
	}), o.low = a, o.lim = n++, i ? o.parent = i : delete o.parent, n;
}
function Yr(e) {
	return V(e.edges(), function(t) {
		return e.edge(t).cutvalue < 0;
	});
}
function Xr(e, t, n) {
	var r = n.v, i = n.w;
	t.hasEdge(r, i) || (r = n.w, i = n.v);
	var a = e.node(r), o = e.node(i), s = a, c = !1;
	return a.lim > o.lim && (s = o, c = !0), zn(E(t.edges(), function(t) {
		return c === ei(e, e.node(t.v), s) && c !== ei(e, e.node(t.w), s);
	}), function(e) {
		return Z(t, e);
	});
}
function Zr(e, t, n, r) {
	var i = n.v, a = n.w;
	e.removeEdge(i, a), e.setEdge(r.v, r.w, {}), qr(e), Wr(e, t), Qr(e, t);
}
function Qr(e, t) {
	var n = Ur(e, V(e.nodes(), function(e) {
		return !t.node(e).parent;
	}));
	n = n.slice(1), s(n, function(n) {
		var r = e.node(n).parent, i = t.edge(n, r), a = !1;
		i || (i = t.edge(r, n), a = !0), t.node(n).rank = t.node(r).rank + (a ? i.minlen : -i.minlen);
	});
}
function $r(e, t, n) {
	return e.hasEdge(t, n);
}
function ei(e, t, n) {
	return n.low <= t.lim && t.lim <= n.lim;
}
function ti(e) {
	switch (e.graph().ranker) {
		case "network-simplex":
			ii(e);
			break;
		case "tight-tree":
			ri(e);
			break;
		case "longest-path":
			ni(e);
			break;
		default: ii(e);
	}
}
var ni = Fr;
function ri(e) {
	Fr(e), Ir(e);
}
function ii(e) {
	Q(e);
}
function ai(e) {
	var t = Y(e, "root", {}, "_root"), n = si(e), r = W(y(n)) - 1, i = 2 * r + 1;
	e.graph().nestingRoot = t, s(e.edges(), function(t) {
		e.edge(t).minlen *= i;
	});
	var a = ci(e) + 1;
	s(e.children(), function(o) {
		oi(e, t, i, a, r, n, o);
	}), e.graph().nodeRankFactor = i;
}
function oi(e, t, n, r, i, a, o) {
	var c = e.children(o);
	if (!c.length) {
		o !== t && e.setEdge(t, o, {
			weight: 0,
			minlen: n
		});
		return;
	}
	var l = vr(e, "_bt"), u = vr(e, "_bb"), d = e.node(o);
	e.setParent(l, o), d.borderTop = l, e.setParent(u, o), d.borderBottom = u, s(c, function(s) {
		oi(e, t, n, r, i, a, s);
		var c = e.node(s), d = c.borderTop ? c.borderTop : s, f = c.borderBottom ? c.borderBottom : s, p = c.borderTop ? r : 2 * r, m = d === f ? i - a[o] + 1 : 1;
		e.setEdge(l, d, {
			weight: p,
			minlen: m,
			nestingEdge: !0
		}), e.setEdge(f, u, {
			weight: p,
			minlen: m,
			nestingEdge: !0
		});
	}), e.parent(o) || e.setEdge(t, l, {
		weight: 0,
		minlen: i + a[o]
	});
}
function si(e) {
	var t = {};
	function n(r, i) {
		var a = e.children(r);
		a && a.length && s(a, function(e) {
			n(e, i + 1);
		}), t[r] = i;
	}
	return s(e.children(), function(e) {
		n(e, 1);
	}), t;
}
function ci(e) {
	return v(e.edges(), function(t, n) {
		return t + e.edge(n).weight;
	}, 0);
}
function li(e) {
	var t = e.graph();
	e.removeNode(t.nestingRoot), delete t.nestingRoot, s(e.edges(), function(t) {
		e.edge(t).nestingEdge && e.removeEdge(t);
	});
}
function ui(e, t, n) {
	var r = {}, i;
	s(n, function(n) {
		for (var a = e.parent(n), o, s; a;) {
			if (o = e.parent(a), o ? (s = r[o], r[o] = a) : (s = i, i = a), s && s !== a) {
				t.setEdge(s, a);
				return;
			}
			a = o;
		}
	});
}
function di(e, t, n) {
	var r = fi(e), i = new b({ compound: !0 }).setGraph({ root: r }).setDefaultNodeLabel(function(t) {
		return e.node(t);
	});
	return s(e.nodes(), function(a) {
		var o = e.node(a), c = e.parent(a);
		(o.rank === t || o.minRank <= t && t <= o.maxRank) && (i.setNode(a), i.setParent(a, c || r), s(e[n](a), function(t) {
			var n = t.v === a ? t.w : t.v, r = i.edge(n, a), o = g(r) ? 0 : r.weight;
			i.setEdge(n, a, { weight: e.edge(t).weight + o });
		}), Object.prototype.hasOwnProperty.call(o, "minRank") && i.setNode(a, {
			borderLeft: o.borderLeft[t],
			borderRight: o.borderRight[t]
		}));
	}), i;
}
function fi(e) {
	for (var t; e.hasNode(t = Qn("_root")););
	return t;
}
function pi(e, t) {
	for (var n = 0, r = 1; r < t.length; ++r) n += mi(e, t[r - 1], t[r]);
	return n;
}
function mi(e, t, n) {
	for (var r = er(n, H(n, function(e, t) {
		return t;
	})), i = P(H(t, function(t) {
		return J(H(e.outEdges(t), function(t) {
			return {
				pos: r[t.w],
				weight: e.edge(t).weight
			};
		}), "pos");
	})), a = 1; a < n.length;) a <<= 1;
	var o = 2 * a - 1;
	--a;
	var c = H(Array(o), function() {
		return 0;
	}), l = 0;
	return s(i.forEach(function(e) {
		var t = e.pos + a;
		c[t] += e.weight;
		for (var n = 0; t > 0;) t % 2 && (n += c[t + 1]), t = t - 1 >> 1, c[t] += e.weight;
		l += e.weight * n;
	})), l;
}
function hi(e) {
	var t = {}, n = E(e.nodes(), function(t) {
		return !e.children(t).length;
	}), r = H(q(W(H(n, function(t) {
		return e.node(t).rank;
	})) + 1), function() {
		return [];
	});
	function i(n) {
		Fn(t, n) || (t[n] = !0, r[e.node(n).rank].push(n), s(e.successors(n), i));
	}
	var a = J(n, function(t) {
		return e.node(t).rank;
	});
	return s(a, i), r;
}
function gi(e, t) {
	return H(t, function(t) {
		var n = e.inEdges(t);
		if (n.length) {
			var r = v(n, function(t, n) {
				var r = e.edge(n), i = e.node(n.v);
				return {
					sum: t.sum + r.weight * i.order,
					weight: t.weight + r.weight
				};
			}, {
				sum: 0,
				weight: 0
			});
			return {
				v: t,
				barycenter: r.sum / r.weight,
				weight: r.weight
			};
		}
		return { v: t };
	});
}
function _i(e, t) {
	var n = {};
	return s(e, function(e, t) {
		var r = n[e.v] = {
			indegree: 0,
			in: [],
			out: [],
			vs: [e.v],
			i: t
		};
		g(e.barycenter) || (r.barycenter = e.barycenter, r.weight = e.weight);
	}), s(t.edges(), function(e) {
		var t = n[e.v], r = n[e.w];
		!g(t) && !g(r) && (r.indegree++, t.out.push(n[e.w]));
	}), vi(E(n, function(e) {
		return !e.indegree;
	}));
}
function vi(e) {
	var t = [];
	function n(e) {
		return function(t) {
			t.merged || (g(t.barycenter) || g(e.barycenter) || t.barycenter >= e.barycenter) && yi(e, t);
		};
	}
	function r(t) {
		return function(n) {
			n.in.push(t), --n.indegree === 0 && e.push(n);
		};
	}
	for (; e.length;) {
		var i = e.pop();
		t.push(i), s(i.in.reverse(), n(i)), s(i.out, r(i));
	}
	return H(E(t, function(e) {
		return !e.merged;
	}), function(e) {
		return K(e, [
			"vs",
			"i",
			"barycenter",
			"weight"
		]);
	});
}
function yi(e, t) {
	var n = 0, r = 0;
	e.weight && (n += e.barycenter * e.weight, r += e.weight), t.weight && (n += t.barycenter * t.weight, r += t.weight), e.vs = t.vs.concat(e.vs), e.barycenter = n / r, e.weight = r, e.i = Math.min(t.i, e.i), t.merged = !0;
}
function bi(e, t) {
	var n = br(e, function(e) {
		return Object.prototype.hasOwnProperty.call(e, "barycenter");
	}), r = n.lhs, i = J(n.rhs, function(e) {
		return -e.i;
	}), a = [], o = 0, c = 0, l = 0;
	r.sort(Si(!!t)), l = xi(a, i, l), s(r, function(e) {
		l += e.vs.length, a.push(e.vs), o += e.barycenter * e.weight, c += e.weight, l = xi(a, i, l);
	});
	var u = { vs: P(a) };
	return c && (u.barycenter = o / c, u.weight = c), u;
}
function xi(e, t, n) {
	for (var r; t.length && (r = B(t)).i <= n;) t.pop(), e.push(r.vs), n++;
	return n;
}
function Si(e) {
	return function(t, n) {
		return t.barycenter < n.barycenter ? -1 : t.barycenter > n.barycenter ? 1 : e ? n.i - t.i : t.i - n.i;
	};
}
function Ci(e, t, n, r) {
	var i = e.children(t), a = e.node(t), o = a ? a.borderLeft : void 0, c = a ? a.borderRight : void 0, l = {};
	o && (i = E(i, function(e) {
		return e !== o && e !== c;
	}));
	var u = gi(e, i);
	s(u, function(t) {
		if (e.children(t.v).length) {
			var i = Ci(e, t.v, n, r);
			l[t.v] = i, Object.prototype.hasOwnProperty.call(i, "barycenter") && Ti(t, i);
		}
	});
	var d = _i(u, n);
	wi(d, l);
	var f = bi(d, r);
	if (o && (f.vs = P([
		o,
		f.vs,
		c
	]), e.predecessors(o).length)) {
		var p = e.node(e.predecessors(o)[0]), m = e.node(e.predecessors(c)[0]);
		Object.prototype.hasOwnProperty.call(f, "barycenter") || (f.barycenter = 0, f.weight = 0), f.barycenter = (f.barycenter * f.weight + p.order + m.order) / (f.weight + 2), f.weight += 2;
	}
	return f;
}
function wi(e, t) {
	s(e, function(e) {
		e.vs = P(e.vs.map(function(e) {
			return t[e] ? t[e].vs : e;
		}));
	});
}
function Ti(e, t) {
	g(e.barycenter) ? (e.barycenter = t.barycenter, e.weight = t.weight) : (e.barycenter = (e.barycenter * e.weight + t.barycenter * t.weight) / (e.weight + t.weight), e.weight += t.weight);
}
function Ei(e) {
	var t = yr(e), n = Di(e, q(1, t + 1), "inEdges"), r = Di(e, q(t - 1, -1, -1), "outEdges"), i = hi(e);
	ki(e, i);
	for (var a = Infinity, o, s = 0, c = 0; c < 4; ++s, ++c) {
		Oi(s % 2 ? n : r, s % 4 >= 2), i = X(e);
		var l = pi(e, i);
		l < a && (c = 0, o = yn(i), a = l);
	}
	ki(e, o);
}
function Di(e, t, n) {
	return H(t, function(t) {
		return di(e, t, n);
	});
}
function Oi(e, t) {
	var n = new b();
	s(e, function(e) {
		var r = e.graph().root, i = Ci(e, r, n, t);
		s(i.vs, function(t, n) {
			e.node(t).order = n;
		}), ui(e, n, i.vs);
	});
}
function ki(e, t) {
	s(t, function(t) {
		s(t, function(t, n) {
			e.node(t).order = n;
		});
	});
}
function Ai(e) {
	var t = Mi(e);
	s(e.graph().dummyChains, function(n) {
		for (var r = e.node(n), i = r.edgeObj, a = ji(e, t, i.v, i.w), o = a.path, s = a.lca, c = 0, l = o[c], u = !0; n !== i.w;) {
			if (r = e.node(n), u) {
				for (; (l = o[c]) !== s && e.node(l).maxRank < r.rank;) c++;
				l === s && (u = !1);
			}
			if (!u) {
				for (; c < o.length - 1 && e.node(l = o[c + 1]).minRank <= r.rank;) c++;
				l = o[c];
			}
			e.setParent(n, l), n = e.successors(n)[0];
		}
	});
}
function ji(e, t, n, r) {
	var i = [], a = [], o = Math.min(t[n].low, t[r].low), s = Math.max(t[n].lim, t[r].lim), c = n, l;
	do
		c = e.parent(c), i.push(c);
	while (c && (t[c].low > o || s > t[c].lim));
	for (l = c, c = r; (c = e.parent(c)) !== l;) a.push(c);
	return {
		path: i.concat(a.reverse()),
		lca: l
	};
}
function Mi(e) {
	var t = {}, n = 0;
	function r(i) {
		var a = n;
		s(e.children(i), r), t[i] = {
			low: a,
			lim: n++
		};
	}
	return s(e.children(), r), t;
}
function Ni(e, t) {
	var n = {};
	function r(t, r) {
		var i = 0, a = 0, o = t.length, c = B(r);
		return s(r, function(t, l) {
			var u = Fi(e, t), d = u ? e.node(u).order : o;
			(u || t === c) && (s(r.slice(a, l + 1), function(t) {
				s(e.predecessors(t), function(r) {
					var a = e.node(r), o = a.order;
					(o < i || d < o) && !(a.dummy && e.node(t).dummy) && Ii(n, r, t);
				});
			}), a = l + 1, i = d);
		}), r;
	}
	return v(t, r), n;
}
function Pi(e, t) {
	var n = {};
	function r(t, r, i, a, o) {
		var c;
		s(q(r, i), function(r) {
			c = t[r], e.node(c).dummy && s(e.predecessors(c), function(t) {
				var r = e.node(t);
				r.dummy && (r.order < a || r.order > o) && Ii(n, t, c);
			});
		});
	}
	function i(t, n) {
		var i = -1, a, o = 0;
		return s(n, function(s, c) {
			if (e.node(s).dummy === "border") {
				var l = e.predecessors(s);
				l.length && (a = e.node(l[0]).order, r(n, o, c, i, a), o = c, i = a);
			}
			r(n, o, n.length, a, t.length);
		}), n;
	}
	return v(t, i), n;
}
function Fi(e, t) {
	if (e.node(t).dummy) return V(e.predecessors(t), function(t) {
		return e.node(t).dummy;
	});
}
function Ii(e, t, n) {
	if (t > n) {
		var r = t;
		t = n, n = r;
	}
	Object.prototype.hasOwnProperty.call(e, t) || Object.defineProperty(e, t, {
		enumerable: !0,
		configurable: !0,
		value: {},
		writable: !0
	});
	var i = e[t];
	Object.defineProperty(i, n, {
		enumerable: !0,
		configurable: !0,
		value: !0,
		writable: !0
	});
}
function Li(e, t, n) {
	if (t > n) {
		var r = t;
		t = n, n = r;
	}
	return !!e[t] && Object.prototype.hasOwnProperty.call(e[t], n);
}
function Ri(e, t, n, r) {
	var i = {}, a = {}, o = {};
	return s(t, function(e) {
		s(e, function(e, t) {
			i[e] = e, a[e] = e, o[e] = t;
		});
	}), s(t, function(e) {
		var t = -1;
		s(e, function(e) {
			var s = r(e);
			if (s.length) {
				s = J(s, function(e) {
					return o[e];
				});
				for (var c = (s.length - 1) / 2, l = Math.floor(c), u = Math.ceil(c); l <= u; ++l) {
					var d = s[l];
					a[e] === e && t < o[d] && !Li(n, e, d) && (a[d] = e, a[e] = i[e] = i[d], t = o[d]);
				}
			}
		});
	}), {
		root: i,
		align: a
	};
}
function zi(e, t, n, r, i) {
	var a = {}, o = Bi(e, t, n, i), c = i ? "borderLeft" : "borderRight";
	function l(e, t) {
		for (var n = o.nodes(), r = n.pop(), i = {}; r;) i[r] ? e(r) : (i[r] = !0, n.push(r), n = n.concat(t(r))), r = n.pop();
	}
	function u(e) {
		a[e] = o.inEdges(e).reduce(function(e, t) {
			return Math.max(e, a[t.v] + o.edge(t));
		}, 0);
	}
	function d(t) {
		var n = o.outEdges(t).reduce(function(e, t) {
			return Math.min(e, a[t.w] - o.edge(t));
		}, Infinity), r = e.node(t);
		n !== Infinity && r.borderType !== c && (a[t] = Math.max(a[t], n));
	}
	return l(u, o.predecessors.bind(o)), l(d, o.successors.bind(o)), s(r, function(e) {
		a[e] = a[n[e]];
	}), a;
}
function Bi(e, t, n, r) {
	var i = new b(), a = e.graph(), o = Gi(a.nodesep, a.edgesep, r);
	return s(t, function(t) {
		var r;
		s(t, function(t) {
			var a = n[t];
			if (i.setNode(a), r) {
				var s = n[r], c = i.edge(s, a);
				i.setEdge(s, a, Math.max(o(e, t, r), c || 0));
			}
			r = t;
		});
	}), i;
}
function Vi(e, t) {
	return zn(y(t), function(t) {
		var n = -Infinity, r = Infinity;
		return An(t, function(t, i) {
			var a = Ki(e, i) / 2;
			n = Math.max(t + a, n), r = Math.min(t - a, r);
		}), n - r;
	});
}
function Hi(e, t) {
	var n = y(t), r = G(n), i = W(n);
	s(["u", "d"], function(n) {
		s(["l", "r"], function(a) {
			var o = n + a, s = e[o], c;
			if (s !== t) {
				var l = y(s);
				c = a === "l" ? r - G(l) : i - W(l), c && (e[o] = U(s, function(e) {
					return e + c;
				}));
			}
		});
	});
}
function Ui(e, t) {
	return U(e.ul, function(n, r) {
		if (t) return e[t.toLowerCase()][r];
		var i = J(H(e, r));
		return (i[1] + i[2]) / 2;
	});
}
function Wi(e) {
	var t = X(e), n = Rn(Ni(e, t), Pi(e, t)), r = {}, i;
	return s(["u", "d"], function(a) {
		i = a === "u" ? t : y(t).reverse(), s(["l", "r"], function(t) {
			t === "r" && (i = H(i, function(e) {
				return y(e).reverse();
			}));
			var o = (a === "u" ? e.predecessors : e.successors).bind(e), s = Ri(e, i, n, o), c = zi(e, i, s.root, s.align, t === "r");
			t === "r" && (c = U(c, function(e) {
				return -e;
			})), r[a + t] = c;
		});
	}), Hi(r, Vi(e, r)), Ui(r, e.graph().align);
}
function Gi(e, t, n) {
	return function(r, i, a) {
		var o = r.node(i), s = r.node(a), c = 0, l;
		if (c += o.width / 2, Object.prototype.hasOwnProperty.call(o, "labelpos")) switch (o.labelpos.toLowerCase()) {
			case "l":
				l = -o.width / 2;
				break;
			case "r": l = o.width / 2;
		}
		if (l && (c += n ? l : -l), l = 0, c += (o.dummy ? t : e) / 2, c += (s.dummy ? t : e) / 2, c += s.width / 2, Object.prototype.hasOwnProperty.call(s, "labelpos")) switch (s.labelpos.toLowerCase()) {
			case "l":
				l = s.width / 2;
				break;
			case "r": l = -s.width / 2;
		}
		return l && (c += n ? l : -l), l = 0, c;
	};
}
function Ki(e, t) {
	return e.node(t).width;
}
function qi(e) {
	e = mr(e), Ji(e), jn(Wi(e), function(t, n) {
		e.node(n).x = t;
	});
}
function Ji(e) {
	var t = X(e), n = e.graph().ranksep, r = 0;
	s(t, function(t) {
		var i = W(H(t, function(t) {
			return e.node(t).height;
		}));
		s(t, function(t) {
			e.node(t).y = r + i / 2;
		}), r += i + n;
	});
}
function Yi(e, t) {
	var n = xr;
	n("layout", () => {
		var t = n("  buildLayoutGraph", () => oa(e));
		n("  runLayout", () => Xi(t, n)), n("  updateInputGraph", () => Zi(e, t));
	});
}
function Xi(e, t) {
	t("    makeSpaceForEdgeLabels", () => sa(e)), t("    removeSelfEdges", () => ga(e)), t("    acyclic", () => ur(e)), t("    nestingGraph.run", () => ai(e)), t("    rank", () => ti(mr(e))), t("    injectEdgeLabelProxies", () => ca(e)), t("    removeEmptyRanks", () => _r(e)), t("    nestingGraph.cleanup", () => li(e)), t("    normalizeRanks", () => gr(e)), t("    assignRankMinMax", () => la(e)), t("    removeEdgeLabelProxies", () => ua(e)), t("    normalize.run", () => Mr(e)), t("    parentDummyChains", () => Ai(e)), t("    addBorderSegments", () => Sr(e)), t("    order", () => Ei(e)), t("    insertSelfEdges", () => _a(e)), t("    adjustCoordinateSystem", () => wr(e)), t("    position", () => qi(e)), t("    positionSelfEdges", () => va(e)), t("    removeBorderNodes", () => ha(e)), t("    normalize.undo", () => Pr(e)), t("    fixupEdgeLabelCoords", () => pa(e)), t("    undoCoordinateSystem", () => Tr(e)), t("    translateGraph", () => da(e)), t("    assignNodeIntersects", () => fa(e)), t("    reversePoints", () => ma(e)), t("    acyclic.undo", () => fr(e));
}
function Zi(e, t) {
	s(e.nodes(), function(n) {
		var r = e.node(n), i = t.node(n);
		r && (r.x = i.x, r.y = i.y, t.children(n).length && (r.width = i.width, r.height = i.height));
	}), s(e.edges(), function(n) {
		var r = e.edge(n), i = t.edge(n);
		r.points = i.points, Object.prototype.hasOwnProperty.call(i, "x") && (r.x = i.x, r.y = i.y);
	}), e.graph().width = t.graph().width, e.graph().height = t.graph().height;
}
var Qi = [
	"nodesep",
	"edgesep",
	"ranksep",
	"marginx",
	"marginy"
], $i = {
	ranksep: 50,
	edgesep: 20,
	nodesep: 50,
	rankdir: "tb"
}, ea = [
	"acyclicer",
	"ranker",
	"rankdir",
	"align"
], ta = ["width", "height"], na = {
	width: 0,
	height: 0
}, ra = [
	"minlen",
	"weight",
	"width",
	"height",
	"labeloffset"
], ia = {
	minlen: 1,
	weight: 1,
	width: 0,
	height: 0,
	labeloffset: 10,
	labelpos: "r"
}, aa = ["labelpos"];
function oa(e) {
	var t = new b({
		multigraph: !0,
		compound: !0
	}), n = $(e.graph());
	return t.setGraph(Rn({}, $i, ya(n, Qi), K(n, ea))), s(e.nodes(), function(n) {
		var r = $(e.node(n));
		t.setNode(n, Sn(ya(r, ta), na)), t.setParent(n, e.parent(n));
	}), s(e.edges(), function(n) {
		var r = $(e.edge(n));
		t.setEdge(n, Rn({}, ia, ya(r, ra), K(r, aa)));
	}), t;
}
function sa(e) {
	var t = e.graph();
	t.ranksep /= 2, s(e.edges(), function(n) {
		var r = e.edge(n);
		r.minlen *= 2, r.labelpos.toLowerCase() !== "c" && (t.rankdir === "TB" || t.rankdir === "BT" ? r.width += r.labeloffset : r.height += r.labeloffset);
	});
}
function ca(e) {
	s(e.edges(), function(t) {
		var n = e.edge(t);
		if (n.width && n.height) {
			var r = e.node(t.v);
			Y(e, "edge-proxy", {
				rank: (e.node(t.w).rank - r.rank) / 2 + r.rank,
				e: t
			}, "_ep");
		}
	});
}
function la(e) {
	var t = 0;
	s(e.nodes(), function(n) {
		var r = e.node(n);
		r.borderTop && (r.minRank = e.node(r.borderTop).rank, r.maxRank = e.node(r.borderBottom).rank, t = W(t, r.maxRank));
	}), e.graph().maxRank = t;
}
function ua(e) {
	s(e.nodes(), function(t) {
		var n = e.node(t);
		n.dummy === "edge-proxy" && (e.edge(n.e).labelRank = n.rank, e.removeNode(t));
	});
}
function da(e) {
	var t = Infinity, n = 0, r = Infinity, i = 0, a = e.graph(), o = a.marginx || 0, c = a.marginy || 0;
	function l(e) {
		var a = e.x, o = e.y, s = e.width, c = e.height;
		t = Math.min(t, a - s / 2), n = Math.max(n, a + s / 2), r = Math.min(r, o - c / 2), i = Math.max(i, o + c / 2);
	}
	s(e.nodes(), function(t) {
		l(e.node(t));
	}), s(e.edges(), function(t) {
		var n = e.edge(t);
		Object.prototype.hasOwnProperty.call(n, "x") && l(n);
	}), t -= o, r -= c, s(e.nodes(), function(n) {
		var i = e.node(n);
		i.x -= t, i.y -= r;
	}), s(e.edges(), function(n) {
		var i = e.edge(n);
		s(i.points, function(e) {
			e.x -= t, e.y -= r;
		}), Object.prototype.hasOwnProperty.call(i, "x") && (i.x -= t), Object.prototype.hasOwnProperty.call(i, "y") && (i.y -= r);
	}), a.width = n - t + o, a.height = i - r + c;
}
function fa(e) {
	s(e.edges(), function(t) {
		var n = e.edge(t), r = e.node(t.v), i = e.node(t.w), a, o;
		n.points ? (a = n.points[0], o = n.points[n.points.length - 1]) : (n.points = [], a = i, o = r), n.points.unshift(hr(r, a)), n.points.push(hr(i, o));
	});
}
function pa(e) {
	s(e.edges(), function(t) {
		var n = e.edge(t);
		if (Object.prototype.hasOwnProperty.call(n, "x")) switch ((n.labelpos === "l" || n.labelpos === "r") && (n.width -= n.labeloffset), n.labelpos) {
			case "l":
				n.x -= n.width / 2 + n.labeloffset;
				break;
			case "r": n.x += n.width / 2 + n.labeloffset;
		}
	});
}
function ma(e) {
	s(e.edges(), function(t) {
		var n = e.edge(t);
		n.reversed && n.points.reverse();
	});
}
function ha(e) {
	s(e.nodes(), function(t) {
		if (e.children(t).length) {
			var n = e.node(t), r = e.node(n.borderTop), i = e.node(n.borderBottom), a = e.node(B(n.borderLeft)), o = e.node(B(n.borderRight));
			n.width = Math.abs(o.x - a.x), n.height = Math.abs(i.y - r.y), n.x = a.x + n.width / 2, n.y = r.y + n.height / 2;
		}
	}), s(e.nodes(), function(t) {
		e.node(t).dummy === "border" && e.removeNode(t);
	});
}
function ga(e) {
	s(e.edges(), function(t) {
		if (t.v === t.w) {
			var n = e.node(t.v);
			n.selfEdges ||= [], n.selfEdges.push({
				e: t,
				label: e.edge(t)
			}), e.removeEdge(t);
		}
	});
}
function _a(e) {
	var t = X(e);
	s(t, function(t) {
		var n = 0;
		s(t, function(t, r) {
			var i = e.node(t);
			i.order = r + n, s(i.selfEdges, function(t) {
				Y(e, "selfedge", {
					width: t.label.width,
					height: t.label.height,
					rank: i.rank,
					order: r + ++n,
					e: t.e,
					label: t.label
				}, "_se");
			}), delete i.selfEdges;
		});
	});
}
function va(e) {
	s(e.nodes(), function(t) {
		var n = e.node(t);
		if (n.dummy === "selfedge") {
			var r = e.node(n.e.v), i = r.x + r.width / 2, a = r.y, o = n.x - i, s = r.height / 2;
			e.setEdge(n.e, n.label), e.removeNode(t), n.label.points = [
				{
					x: i + 2 * o / 3,
					y: a - s
				},
				{
					x: i + 5 * o / 6,
					y: a - s
				},
				{
					x: i + o,
					y: a
				},
				{
					x: i + 5 * o / 6,
					y: a + s
				},
				{
					x: i + 2 * o / 3,
					y: a + s
				}
			], n.label.x = n.x, n.label.y = n.y;
		}
	});
}
function ya(e, t) {
	return U(K(e, t), Number);
}
function $(e) {
	var t = {};
	return s(e, function(e, n) {
		t[n.toLowerCase()] = e;
	}), t;
}
//#endregion
export { Yi as t };

//# sourceMappingURL=layout-wQj9hVsT-6kYL1z4P.js.map