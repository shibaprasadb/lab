import { Bn as e, D as t, I as n, K as r, L as i, S as a, Y as o, _r as s, it as c, k as l, nt as u, o as d, rr as f, t as p } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
//#region ../react/build/arc-D2Eo4Qim.js
function m(e) {
	return e.innerRadius;
}
function h(e) {
	return e.outerRadius;
}
function g(e) {
	return e.startAngle;
}
function _(e) {
	return e.endAngle;
}
function v(e) {
	return e && e.padAngle;
}
function y(e, t, n, r, i, a, o, s) {
	var c = n - e, l = r - t, u = o - i, d = s - a, f = d * c - u * l;
	if (!(f * f < 1e-12)) return f = (u * (t - a) - d * (e - i)) / f, [e + f * c, t + f * l];
}
function b(e, n, r, i, a, o, s) {
	var c = e - r, l = n - i, d = (s ? o : -o) / u(c * c + l * l), f = d * l, p = -d * c, m = e + f, h = n + p, g = r + f, _ = i + p, v = (m + g) / 2, y = (h + _) / 2, b = g - m, x = _ - h, S = b * b + x * x, C = a - o, w = m * _ - g * h, T = (x < 0 ? -1 : 1) * u(t(0, C * C * S - w * w)), E = (w * x - b * T) / S, D = (-w * b - x * T) / S, O = (w * x + b * T) / S, k = (-w * b + x * T) / S, A = E - v, j = D - y, M = O - v, N = k - y;
	return A * A + j * j > M * M + N * N && (E = O, D = k), {
		cx: E,
		cy: D,
		x01: -f,
		y01: -p,
		x11: E * (a / C - 1),
		y11: D * (a / C - 1)
	};
}
function x() {
	var t = m, x = h, S = e(0), C = null, w = g, T = _, E = v, D = null, O = f(k);
	function k() {
		var e, f, m = +t.apply(this, arguments), h = +x.apply(this, arguments), g = w.apply(this, arguments) - i, _ = T.apply(this, arguments) - i, v = r(_ - g), k = _ > g;
		if (D ||= e = O(), h < m && (f = h, h = m, m = f), !(h > 1e-12)) D.moveTo(0, 0);
		else if (v > a - 1e-12) D.moveTo(h * d(g), h * p(g)), D.arc(0, 0, h, g, _, !k), m > 1e-12 && (D.moveTo(m * d(_), m * p(_)), D.arc(0, 0, m, _, g, k));
		else {
			var A = g, j = _, M = g, N = _, P = v, F = v, I = E.apply(this, arguments) / 2, L = I > 1e-12 && (C ? +C.apply(this, arguments) : u(m * m + h * h)), R = o(r(h - m) / 2, +S.apply(this, arguments)), z = R, B = R, V, H;
			if (L > 1e-12) {
				var U = n(L / m * p(I)), W = n(L / h * p(I));
				(P -= U * 2) > 1e-12 ? (U *= k ? 1 : -1, M += U, N -= U) : (P = 0, M = N = (g + _) / 2), (F -= W * 2) > 1e-12 ? (W *= k ? 1 : -1, A += W, j -= W) : (F = 0, A = j = (g + _) / 2);
			}
			var G = h * d(A), K = h * p(A), q = m * d(N), J = m * p(N);
			if (R > 1e-12) {
				var Y = h * d(j), X = h * p(j), Z = m * d(M), Q = m * p(M), $;
				if (v < s) {
					if ($ = y(G, K, Z, Q, Y, X, q, J)) {
						var ee = G - $[0], te = K - $[1], ne = Y - $[0], re = X - $[1], ie = 1 / p(c((ee * ne + te * re) / (u(ee * ee + te * te) * u(ne * ne + re * re))) / 2), ae = u($[0] * $[0] + $[1] * $[1]);
						z = o(R, (m - ae) / (ie - 1)), B = o(R, (h - ae) / (ie + 1));
					} else z = B = 0;
				}
			}
			F > 1e-12 ? B > 1e-12 ? (V = b(Z, Q, G, K, h, B, k), H = b(Y, X, q, J, h, B, k), D.moveTo(V.cx + V.x01, V.cy + V.y01), B < R ? D.arc(V.cx, V.cy, B, l(V.y01, V.x01), l(H.y01, H.x01), !k) : (D.arc(V.cx, V.cy, B, l(V.y01, V.x01), l(V.y11, V.x11), !k), D.arc(0, 0, h, l(V.cy + V.y11, V.cx + V.x11), l(H.cy + H.y11, H.cx + H.x11), !k), D.arc(H.cx, H.cy, B, l(H.y11, H.x11), l(H.y01, H.x01), !k))) : (D.moveTo(G, K), D.arc(0, 0, h, A, j, !k)) : D.moveTo(G, K), !(m > 1e-12) || !(P > 1e-12) ? D.lineTo(q, J) : z > 1e-12 ? (V = b(q, J, Y, X, m, -z, k), H = b(G, K, Z, Q, m, -z, k), D.lineTo(V.cx + V.x01, V.cy + V.y01), z < R ? D.arc(V.cx, V.cy, z, l(V.y01, V.x01), l(H.y01, H.x01), !k) : (D.arc(V.cx, V.cy, z, l(V.y01, V.x01), l(V.y11, V.x11), !k), D.arc(0, 0, m, l(V.cy + V.y11, V.cx + V.x11), l(H.cy + H.y11, H.cx + H.x11), k), D.arc(H.cx, H.cy, z, l(H.y11, H.x11), l(H.y01, H.x01), !k))) : D.arc(0, 0, m, N, M, k);
		}
		if (D.closePath(), e) return D = null, e + "" || null;
	}
	return k.centroid = function() {
		var e = (+t.apply(this, arguments) + +x.apply(this, arguments)) / 2, n = (+w.apply(this, arguments) + +T.apply(this, arguments)) / 2 - s / 2;
		return [d(n) * e, p(n) * e];
	}, k.innerRadius = function(n) {
		return arguments.length ? (t = typeof n == "function" ? n : e(+n), k) : t;
	}, k.outerRadius = function(t) {
		return arguments.length ? (x = typeof t == "function" ? t : e(+t), k) : x;
	}, k.cornerRadius = function(t) {
		return arguments.length ? (S = typeof t == "function" ? t : e(+t), k) : S;
	}, k.padRadius = function(t) {
		return arguments.length ? (C = t == null ? null : typeof t == "function" ? t : e(+t), k) : C;
	}, k.startAngle = function(t) {
		return arguments.length ? (w = typeof t == "function" ? t : e(+t), k) : w;
	}, k.endAngle = function(t) {
		return arguments.length ? (T = typeof t == "function" ? t : e(+t), k) : T;
	}, k.padAngle = function(t) {
		return arguments.length ? (E = typeof t == "function" ? t : e(+t), k) : E;
	}, k.context = function(e) {
		return arguments.length ? (D = e ?? null, k) : D;
	}, k;
}
//#endregion
export { x as t };

//# sourceMappingURL=arc-D2Eo4Qim-B6aN7PLk.js.map