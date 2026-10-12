import { n as e } from "./ordinal-DkyryJlW-DURmPlUH.js";
import "./transform-B2AI7qp--hg0kwf7R.js";
import { Bn as t, En as n, Hn as r, Pn as i, Qt as a, S as o, Zt as s, cn as c, h as l, in as u, lr as d, mr as f, pt as p, rt as m, s as h, ut as g, x as _, z as v } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
import { t as y } from "./chunk-JWPE2WC7-BoR8QvRp-D1Xio7hJ.js";
import { i as b } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
import { t as x } from "./arc-D2Eo4Qim-B6aN7PLk.js";
//#region ../react/build/pieDiagram-E7YTZNPT-DFrkmIAD.js
function S(e, t) {
	return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function C(e) {
	return e;
}
function w() {
	var e = C, n = S, r = null, i = t(0), a = t(o), s = t(0);
	function c(t) {
		var c, u = (t = l(t)).length, d, f, p = 0, m = Array(u), h = Array(u), g = +i.apply(this, arguments), _ = Math.min(o, Math.max(-o, a.apply(this, arguments) - g)), v, y = Math.min(Math.abs(_) / u, s.apply(this, arguments)), b = y * (_ < 0 ? -1 : 1), x;
		for (c = 0; c < u; ++c) (x = h[m[c] = c] = +e(t[c], c, t)) > 0 && (p += x);
		for (n == null ? r != null && m.sort(function(e, n) {
			return r(t[e], t[n]);
		}) : m.sort(function(e, t) {
			return n(h[e], h[t]);
		}), c = 0, f = p ? (_ - u * b) / p : 0; c < u; ++c, g = v) d = m[c], x = h[d], v = g + (x > 0 ? x * f : 0) + b, h[d] = {
			data: t[d],
			index: c,
			value: x,
			startAngle: g,
			endAngle: v,
			padAngle: y
		};
		return h;
	}
	return c.value = function(n) {
		return arguments.length ? (e = typeof n == "function" ? n : t(+n), c) : e;
	}, c.sortValues = function(e) {
		return arguments.length ? (n = e, r = null, c) : n;
	}, c.sort = function(e) {
		return arguments.length ? (r = e, n = null, c) : r;
	}, c.startAngle = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : t(+e), c) : i;
	}, c.endAngle = function(e) {
		return arguments.length ? (a = typeof e == "function" ? e : t(+e), c) : a;
	}, c.padAngle = function(e) {
		return arguments.length ? (s = typeof e == "function" ? e : t(+e), c) : s;
	}, c;
}
var T = g.pie, E = {
	sections: /* @__PURE__ */ new Map(),
	showData: !1
}, D = E.sections, O = E.showData, k = structuredClone(T), A = {
	getConfig: /* @__PURE__ */ r(() => structuredClone(k), "getConfig"),
	clear: /* @__PURE__ */ r(() => {
		D = /* @__PURE__ */ new Map(), O = E.showData, u();
	}, "clear"),
	setDiagramTitle: _,
	getDiagramTitle: d,
	setAccTitle: i,
	getAccTitle: c,
	setAccDescription: n,
	getAccDescription: f,
	addSection: /* @__PURE__ */ r(({ label: e, value: t }) => {
		if (t < 0) throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
		D.has(e) || (D.set(e, t), p.debug(`added new section: ${e}, with value: ${t}`));
	}, "addSection"),
	getSections: /* @__PURE__ */ r(() => D, "getSections"),
	setShowData: /* @__PURE__ */ r((e) => {
		O = e;
	}, "setShowData"),
	getShowData: /* @__PURE__ */ r(() => O, "getShowData")
}, j = /* @__PURE__ */ r((e, t) => {
	y(e, t), t.setShowData(e.showData), e.sections.map(t.addSection);
}, "populateDb"), M = { parse: /* @__PURE__ */ r(async (e) => {
	let t = await b("pie", e);
	p.debug(t), j(t, A);
}, "parse") }, N = /* @__PURE__ */ r((e) => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`, "getStyles"), P = /* @__PURE__ */ r((e) => {
	let t = [...e.values()].reduce((e, t) => e + t, 0), n = [...e.entries()].map(([e, t]) => ({
		label: e,
		value: t
	})).filter((e) => e.value / t * 100 >= 1);
	return w().value((e) => e.value).sort(null)(n);
}, "createPieArcs"), F = {
	parser: M,
	db: A,
	renderer: { draw: /* @__PURE__ */ r((t, n, r, i) => {
		p.debug("rendering pie chart\n" + t);
		let o = i.db, c = m(), l = a(o.getConfig(), c.pie), u = v(n), d = u.append("g");
		d.attr("transform", "translate(225,225)");
		let { themeVariables: f } = c, [g] = h(f.pieOuterStrokeWidth);
		g ??= 2;
		let _ = l.legendPosition, y = l.textPosition, b = l.donutHole > 0 && l.donutHole <= .9 ? l.donutHole : 0, S = x().innerRadius(b * 185).outerRadius(185), C = x().innerRadius(185 * y).outerRadius(185 * y), w = d.append("g");
		w.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 185 + g / 2).attr("class", "pieOuterCircle");
		let T = o.getSections(), E = P(T), D = [
			f.pie1,
			f.pie2,
			f.pie3,
			f.pie4,
			f.pie5,
			f.pie6,
			f.pie7,
			f.pie8,
			f.pie9,
			f.pie10,
			f.pie11,
			f.pie12
		], O = 0;
		T.forEach((e) => {
			O += e;
		});
		let k = E.filter((e) => (e.data.value / O * 100).toFixed(0) !== "0"), A = e(D).domain([...T.keys()]);
		w.selectAll("mySlices").data(k).enter().append("path").attr("d", S).attr("fill", (e) => A(e.data.label)).attr("class", (e) => {
			let t = "pieCircle";
			return l.highlightSlice === "hover" ? t += " highlightedOnHover" : l.highlightSlice === e.data.label && (t += " highlighted"), t;
		}), w.selectAll("mySlices").data(k).enter().append("text").text((e) => (e.data.value / O * 100).toFixed(0) + "%").attr("transform", (e) => "translate(" + C.centroid(e) + ")").style("text-anchor", "middle").attr("class", "slice");
		let j = d.append("text").text(o.getDiagramTitle()).attr("x", 0).attr("y", -200).attr("class", "pieTitleText"), M = [...T.entries()].map(([e, t]) => ({
			label: e,
			value: t
		})), N = d.selectAll(".legend").data(M).enter().append("g").attr("class", "legend");
		N.append("rect").attr("width", 18).attr("height", 18).style("fill", (e) => A(e.label)).style("stroke", (e) => A(e.label)), N.append("text").attr("x", 22).attr("y", 14).text((e) => o.getShowData() ? `${e.label} [${e.value}]` : e.label);
		let F = Math.max(...N.selectAll("text").nodes().map((e) => e?.getBoundingClientRect().width ?? 0)), I = 450, L = 490, R = M.length * 22;
		switch (_) {
			case "center":
				N.attr("transform", (e, t) => {
					let n = 22 * M.length / 2, r = -F / 2 - 22, i = t * 22 - n;
					return "translate(" + r + "," + i + ")";
				});
				break;
			case "top":
				I += R, N.attr("transform", (e, t) => `translate(${-F / 2 - 22}, ${t * 22 - 185})`), w.attr("transform", () => `translate(0, ${R + 22})`);
				break;
			case "bottom":
				I += R, N.attr("transform", (e, t) => {
					let n = -F / 2 - 22, r = t * 22 - -207;
					return "translate(" + n + "," + r + ")";
				});
				break;
			case "left":
				L += 22 + F, N.attr("transform", (e, t) => {
					let n = 22 * M.length / 2;
					return "translate(-207," + (t * 22 - n) + ")";
				}), w.attr("transform", () => `translate(${F + 18 + 4}, 0)`);
				break;
			default: L += 22 + F, N.attr("transform", (e, t) => {
				let n = 22 * M.length / 2;
				return "translate(216," + (t * 22 - n) + ")";
			});
		}
		let z = j.node()?.getBoundingClientRect().width ?? 0, B = 225 - z / 2, V = 225 + z / 2, H = Math.min(0, B), U = Math.max(L, V) - H;
		u.attr("viewBox", `${H} 0 ${U} ${I}`), s(u, I, U, l.useMaxWidth);
	}, "draw") },
	styles: N
};
//#endregion
export { F as diagram };

//# sourceMappingURL=pieDiagram-E7YTZNPT-DFrkmIAD-DBtidMKx.js.map