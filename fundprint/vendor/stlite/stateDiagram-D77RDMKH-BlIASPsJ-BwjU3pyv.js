import { c as e } from "./transform-B2AI7qp--hg0kwf7R.js";
import { Bt as t, Hn as n, Mn as r, Ut as i, Zt as a, en as o, hn as s, pt as c, q as l, rt as u } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
import { t as d } from "./layout-wQj9hVsT-6kYL1z4P.js";
import { i as f, n as p, r as m } from "./chunk-IMKFNOWR-CY0PuJVw-Cvz2Ubmx.js";
//#region ../react/build/stateDiagram-D77RDMKH-BlIASPsJ.js
var h = /* @__PURE__ */ n((e) => e.append("circle").attr("class", "start-state").attr("r", u().state.sizeUnit).attr("cx", u().state.padding + u().state.sizeUnit).attr("cy", u().state.padding + u().state.sizeUnit), "drawStartState"), g = /* @__PURE__ */ n((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", u().state.textHeight).attr("class", "divider").attr("x2", u().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider"), _ = /* @__PURE__ */ n((e, t) => {
	let n = e.append("text").attr("x", 2 * u().state.padding).attr("y", u().state.textHeight + 2 * u().state.padding).attr("font-size", u().state.fontSize).attr("class", "state-title").text(t.id), r = n.node().getBBox();
	return e.insert("rect", ":first-child").attr("x", u().state.padding).attr("y", u().state.padding).attr("width", r.width + 2 * u().state.padding).attr("height", r.height + 2 * u().state.padding).attr("rx", u().state.radius), n;
}, "drawSimpleState"), v = /* @__PURE__ */ n((e, t) => {
	let r = /* @__PURE__ */ n(function(e, t, n) {
		let r = e.append("tspan").attr("x", 2 * u().state.padding).text(t);
		n || r.attr("dy", u().state.textHeight);
	}, "addTspan"), i = e.append("text").attr("x", 2 * u().state.padding).attr("y", u().state.textHeight + 1.3 * u().state.padding).attr("font-size", u().state.fontSize).attr("class", "state-title").text(t.descriptions[0]).node().getBBox(), a = i.height, o = e.append("text").attr("x", u().state.padding).attr("y", a + u().state.padding * .4 + u().state.dividerMargin + u().state.textHeight).attr("class", "state-description"), s = !0, c = !0;
	t.descriptions.forEach(function(e) {
		s || (r(o, e, c), c = !1), s = !1;
	});
	let l = e.append("line").attr("x1", u().state.padding).attr("y1", u().state.padding + a + u().state.dividerMargin / 2).attr("y2", u().state.padding + a + u().state.dividerMargin / 2).attr("class", "descr-divider"), d = o.node().getBBox(), f = Math.max(d.width, i.width);
	return l.attr("x2", f + 3 * u().state.padding), e.insert("rect", ":first-child").attr("x", u().state.padding).attr("y", u().state.padding).attr("width", f + 2 * u().state.padding).attr("height", d.height + a + 2 * u().state.padding).attr("rx", u().state.radius), e;
}, "drawDescrState"), y = /* @__PURE__ */ n((e, t, n) => {
	let r = u().state.padding, i = 2 * u().state.padding, a = e.node().getBBox(), o = a.width, s = a.x, c = e.append("text").attr("x", 0).attr("y", u().state.titleShift).attr("font-size", u().state.fontSize).attr("class", "state-title").text(t.id), l = c.node().getBBox().width + i, d = Math.max(l, o);
	d === o && (d += i);
	let f, p = e.node().getBBox();
	t.doc, f = s - r, l > o && (f = (o - d) / 2 + r), Math.abs(s - p.x) < r && l > o && (f = s - (l - o) / 2);
	let m = 1 - u().state.textHeight;
	return e.insert("rect", ":first-child").attr("x", f).attr("y", m).attr("class", n ? "alt-composit" : "composit").attr("width", d).attr("height", p.height + u().state.textHeight + u().state.titleShift + 1).attr("rx", "0"), c.attr("x", f + r), l <= o && c.attr("x", s + (d - i) / 2 - l / 2 + r), e.insert("rect", ":first-child").attr("x", f).attr("y", u().state.titleShift - u().state.textHeight - u().state.padding).attr("width", d).attr("height", u().state.textHeight * 3).attr("rx", u().state.radius), e.insert("rect", ":first-child").attr("x", f).attr("y", u().state.titleShift - u().state.textHeight - u().state.padding).attr("width", d).attr("height", p.height + 3 + 2 * u().state.textHeight).attr("rx", u().state.radius), e;
}, "addTitleAndBox"), b = /* @__PURE__ */ n((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", u().state.sizeUnit + u().state.miniPadding).attr("cx", u().state.padding + u().state.sizeUnit + u().state.miniPadding).attr("cy", u().state.padding + u().state.sizeUnit + u().state.miniPadding), e.append("circle").attr("class", "end-state-inner").attr("r", u().state.sizeUnit).attr("cx", u().state.padding + u().state.sizeUnit + 2).attr("cy", u().state.padding + u().state.sizeUnit + 2)), "drawEndState"), x = /* @__PURE__ */ n((e, t) => {
	let n = u().state.forkWidth, r = u().state.forkHeight;
	if (t.parentId) {
		let e = n;
		n = r, r = e;
	}
	return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", n).attr("height", r).attr("x", u().state.padding).attr("y", u().state.padding);
}, "drawForkJoinState"), S = /* @__PURE__ */ n((e, n, r, i) => {
	let a = 0, o = i.append("text");
	o.style("text-anchor", "start"), o.attr("class", "noteText");
	let s = e.replace(/\r\n/g, "<br/>");
	s = s.replace(/\n/g, "<br/>");
	let c = s.split(t.lineBreakRegex), l = 1.25 * u().state.noteMargin;
	for (let e of c) {
		let t = e.trim();
		if (t.length > 0) {
			let e = o.append("tspan");
			if (e.text(t), l === 0) {
				let t = e.node().getBBox();
				l += t.height;
			}
			a += l, e.attr("x", n + u().state.noteMargin), e.attr("y", r + a + 1.25 * u().state.noteMargin);
		}
	}
	return {
		textWidth: o.node().getBBox().width,
		textHeight: a
	};
}, "_drawLongText"), C = /* @__PURE__ */ n((e, t) => {
	t.attr("class", "state-note");
	let n = t.append("rect").attr("x", 0).attr("y", u().state.padding), { textWidth: r, textHeight: i } = S(e, 0, 0, t.append("g"));
	return n.attr("height", i + 2 * u().state.noteMargin), n.attr("width", r + u().state.noteMargin * 2), n;
}, "drawNote"), w = /* @__PURE__ */ n(function(e, t) {
	let n = t.id, r = {
		id: n,
		label: t.id,
		width: 0,
		height: 0
	}, i = e.append("g").attr("id", n).attr("class", "stateGroup");
	t.type === "start" && h(i), t.type === "end" && b(i), (t.type === "fork" || t.type === "join") && x(i, t), t.type === "note" && C(t.note.text, i), t.type === "divider" && g(i), t.type === "default" && t.descriptions.length === 0 && _(i, t), t.type === "default" && t.descriptions.length > 0 && v(i, t);
	let a = i.node().getBBox();
	return r.width = a.width + 2 * u().state.padding, r.height = a.height + 2 * u().state.padding, r;
}, "drawState"), T = 0, E = /* @__PURE__ */ n(function(e, a, s) {
	let d = /* @__PURE__ */ n(function(e) {
		switch (e) {
			case f.relationType.AGGREGATION: return "aggregation";
			case f.relationType.EXTENSION: return "extension";
			case f.relationType.COMPOSITION: return "composition";
			case f.relationType.DEPENDENCY: return "dependency";
		}
	}, "getRelationType");
	a.points = a.points.filter((e) => !Number.isNaN(e.y));
	let p = a.points, m = l().x(function(e) {
		return e.x;
	}).y(function(e) {
		return e.y;
	}).curve(i), h = e.append("path").attr("d", m(p)).attr("id", "edge" + T).attr("class", "transition"), g = "";
	if (u().state.arrowMarkerAbsolute && (g = o(!0)), h.attr("marker-end", "url(" + g + "#" + d(f.relationType.DEPENDENCY) + "End)"), s.title !== void 0) {
		let n = e.append("g").attr("class", "stateLabel"), { x: i, y: o } = r.calcLabelPosition(a.points), l = t.getRows(s.title), d = 0, f = [], p = 0, m = 0;
		for (let e = 0; e <= l.length; e++) {
			let t = n.append("text").attr("text-anchor", "middle").text(l[e]).attr("x", i).attr("y", o + d), r = t.node().getBBox();
			p = Math.max(p, r.width), m = Math.min(m, r.x), c.info(r.x, i, o + d), d === 0 && (d = t.node().getBBox().height, c.info("Title height", d, o)), f.push(t);
		}
		let h = d * l.length;
		if (l.length > 1) {
			let e = (l.length - 1) * d * .5;
			f.forEach((t, n) => t.attr("y", o + n * d - e)), h = d * l.length;
		}
		let g = n.node().getBBox();
		n.insert("rect", ":first-child").attr("class", "box").attr("x", i - p / 2 - u().state.padding / 2).attr("y", o - h / 2 - u().state.padding / 2 - 3.5).attr("width", p + u().state.padding).attr("height", h + u().state.padding), c.info(g);
	}
	T++;
}, "drawEdge"), D, O = {}, k = /* @__PURE__ */ n(function() {}, "setConf"), A = /* @__PURE__ */ n(function(e) {
	e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), j = /* @__PURE__ */ n(function(t, n, r, i) {
	D = u().state;
	let o = u().securityLevel, s;
	o === "sandbox" && (s = e("#i" + n));
	let l = e(o === "sandbox" ? s.nodes()[0].contentDocument.body : "body"), d = o === "sandbox" ? s.nodes()[0].contentDocument : document;
	c.debug("Rendering diagram " + t);
	let f = l.select(`[id='${n}']`);
	A(f), N(i.db.getRootDoc(), f.append("g").attr("id", n + "-root"), void 0, !1, l, d, i);
	let p = D.padding, m = f.node().getBBox(), h = m.width + p * 2, g = m.height + p * 2, _ = h * 1.75;
	a(f, g, _, D.useMaxWidth), f.attr("viewBox", `${m.x - D.padding}  ${m.y - D.padding} ` + h + " " + g);
}, "draw"), M = /* @__PURE__ */ n((e) => e ? e.length * D.fontSizeFactor : 1, "getLabelWidth"), N = /* @__PURE__ */ n((e, n, r, i, a, o, l) => {
	let u = new s({
		compound: !0,
		multigraph: !0
	}), f, p = !0;
	for (f = 0; f < e.length; f++) if (e[f].stmt === "relation") {
		p = !1;
		break;
	}
	r ? u.setGraph({
		rankdir: "LR",
		multigraph: !0,
		compound: !0,
		ranker: "tight-tree",
		ranksep: p ? 1 : D.edgeLengthFactor,
		nodeSep: p ? 1 : 50,
		isMultiGraph: !0
	}) : u.setGraph({
		rankdir: "TB",
		multigraph: !0,
		compound: !0,
		ranksep: p ? 1 : D.edgeLengthFactor,
		nodeSep: p ? 1 : 50,
		ranker: "tight-tree",
		isMultiGraph: !0
	}), u.setDefaultEdgeLabel(function() {
		return {};
	});
	let m = l.db.getStates(), h = l.db.getRelations(), g = Object.keys(m);
	for (let e of g) {
		let t = m[e];
		r && (t.parentId = r);
		let s;
		if (t.doc) {
			let e = n.append("g").attr("id", t.id).attr("class", "stateGroup");
			s = N(t.doc, e, t.id, !i, a, o, l);
			{
				e = y(e, t, i);
				let n = e.node().getBBox();
				s.width = n.width, s.height = n.height + D.padding / 2, O[t.id] = { y: D.compositTitleSize };
			}
		} else s = w(n, t, u);
		if (t.note) {
			let e = w(n, {
				descriptions: [],
				id: t.id + "-note",
				note: t.note,
				type: "note"
			}, u);
			t.note.position === "left of" ? (u.setNode(s.id + "-note", e), u.setNode(s.id, s)) : (u.setNode(s.id, s), u.setNode(s.id + "-note", e)), u.setParent(s.id, s.id + "-group"), u.setParent(s.id + "-note", s.id + "-group");
		} else u.setNode(s.id, s);
	}
	c.debug("Count=", u.nodeCount(), u);
	let _ = 0;
	h.forEach(function(e) {
		_++, c.debug("Setting edge", e), u.setEdge(e.id1, e.id2, {
			relation: e,
			width: M(e.title),
			height: D.labelHeight * t.getRows(e.title).length,
			labelpos: "c"
		}, "id" + _);
	}), d(u), c.debug("Graph after layout", u.nodes());
	let v = n.node();
	u.nodes().forEach(function(e) {
		e !== void 0 && u.node(e) !== void 0 ? (c.warn("Node " + e + ": " + JSON.stringify(u.node(e))), a.select("#" + v.id + " #" + e).attr("transform", "translate(" + (u.node(e).x - u.node(e).width / 2) + "," + (u.node(e).y + (O[e] ? O[e].y : 0) - u.node(e).height / 2) + " )"), a.select("#" + v.id + " #" + e).attr("data-x-shift", u.node(e).x - u.node(e).width / 2), o.querySelectorAll("#" + v.id + " #" + e + " .divider").forEach((e) => {
			let t = e.parentElement, n = 0, r = 0;
			t && (t.parentElement && (n = t.parentElement.getBBox().width), r = parseInt(t.getAttribute("data-x-shift"), 10), Number.isNaN(r) && (r = 0)), e.setAttribute("x1", 0 - r + 8), e.setAttribute("x2", n - r - 8);
		})) : c.debug("No Node " + e + ": " + JSON.stringify(u.node(e)));
	});
	let b = v.getBBox();
	u.edges().forEach(function(e) {
		e !== void 0 && u.edge(e) !== void 0 && (c.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(u.edge(e))), E(n, u.edge(e), u.edge(e).relation));
	}), b = v.getBBox();
	let x = {
		id: r || "root",
		label: r || "root",
		width: 0,
		height: 0
	};
	return x.width = b.width + 2 * D.padding, x.height = b.height + 2 * D.padding, c.debug("Doc rendered", x, u), x;
}, "renderDoc"), P = {
	parser: m,
	get db() {
		return new f(1);
	},
	renderer: {
		setConf: k,
		draw: j
	},
	styles: p,
	init: /* @__PURE__ */ n((e) => {
		e.state ||= {}, e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
	}, "init")
};
//#endregion
export { P as diagram };

//# sourceMappingURL=stateDiagram-D77RDMKH-BlIASPsJ-BwjU3pyv.js.map