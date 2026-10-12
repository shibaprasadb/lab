import { c as e } from "./transform-B2AI7qp--hg0kwf7R.js";
import { At as t, C as n, En as r, H as i, Hn as a, Pn as o, Qt as s, Vn as c, cn as l, in as u, lr as d, mr as f, pt as p, rt as m, ut as h, x as g, yn as _ } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
import { t as ee } from "./chunk-JWPE2WC7-BoR8QvRp-D1Xio7hJ.js";
import { i as te, n as ne } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
//#region ../react/build/diagram-VSXAHHWV-CqVxybTU.js
var v = "position frame", y = "frame positioned", b = "position relation", x = "relation positioned", re = /* @__PURE__ */ a(function(e) {
	p.debug("options str", e);
}, "setOptions"), ie = /* @__PURE__ */ a(function() {
	return {};
}, "getOptions"), ae = /* @__PURE__ */ a(function() {
	S(), u();
}, "clear");
function S() {
	C = {};
}
a(S, "reset");
var oe = h.eventmodeling, se = /* @__PURE__ */ a(() => s({
	...oe,
	...t().eventmodeling
}), "getConfig"), C = {};
function w() {
	let e = ce, { ast: t } = C, n = D();
	if (!t) throw Error("No data for EventModel");
	return t.frames.forEach((r, i) => {
		let a = P(r, t.dataEntities, n);
		e = J(e, {
			$kind: v,
			index: i,
			frame: r,
			textProps: a
		});
		let o;
		V(r) ? (p.debug("source frame", r.sourceFrames), o = t.frames.filter((e) => r.sourceFrames.some((t) => t.$refText === e.name)), o.forEach((t) => {
			e = J(e, {
				$kind: b,
				index: i,
				frame: r,
				sourceFrame: t
			});
		})) : e = J(e, {
			$kind: b,
			index: i,
			frame: r
		});
	}), e = {
		...e,
		sortedSwimlanesArray: R(e.swimlanes)
	}, e;
}
a(w, "getState");
function T(e) {
	C.ast = e;
}
a(T, "setAst");
var E = {
	swimlaneMinHeight: 70,
	swimlanePadding: 15,
	swimlaneGap: 10,
	boxPadding: 10,
	boxOverlap: 90,
	boxDefaultY: 0,
	boxMinWidth: 80,
	boxMaxWidth: 450,
	boxMinHeight: 80,
	boxMaxHeight: 750,
	contentStartX: 250,
	textMaxWidth: 430,
	boxTextFontWeight: "bold",
	boxTextPadding: 10,
	swimlaneTextFontWeight: "bold",
	labelUiAutomation: "UI/Automation",
	labelUiAutomationPrefix: "UI/A: ",
	labelCommandReadModel: "Command/Read Model",
	labelCommandReadModelPrefix: "C/RM: ",
	labelEvents: "Events",
	labelEventsPrefix: "Stream: "
};
function D() {
	return E;
}
a(D, "getDiagramProps");
var ce = {
	boxes: [],
	swimlanes: {},
	relations: [],
	maxR: 0,
	sortedSwimlanesArray: []
};
function O(e) {
	let t = e.split(".");
	if (t.length === 2) return t[0];
}
a(O, "extractNamespace");
function k(e) {
	let t = e.split(".");
	return t.length === 2 ? t[1] : e;
}
a(k, "extractName");
function A(e, t) {
	if (!(!t || t.length === 0)) return Object.values(e).find((e) => e.namespace === t);
}
a(A, "findSwimlaneByNamespace");
function j(e, t, n) {
	return Math.max(t, ...Object.keys(e).filter((e) => {
		let r = Number.parseInt(e);
		return r > t && r < n;
	}).map((e) => Number.parseInt(e))) + 1;
}
a(j, "findNextAvailableIndex");
function M(e, t) {
	let n = O(e.entityIdentifier), r = A(t, n);
	switch (e.modelEntityType) {
		case "ui":
		case "pcr":
		case "processor": return r ? {
			index: r.index,
			label: r.namespace || E.labelUiAutomation
		} : n ? {
			index: j(t, 0, 100),
			label: E.labelUiAutomationPrefix + n
		} : {
			index: 0,
			label: E.labelUiAutomation
		};
		case "rmo":
		case "readmodel":
		case "cmd":
		case "command": return r ? {
			index: r.index,
			label: r.namespace || E.labelCommandReadModel
		} : n ? {
			index: j(t, 100, 200),
			label: E.labelCommandReadModelPrefix + n
		} : {
			index: 100,
			label: E.labelCommandReadModel
		};
		default: return r ? {
			index: r.index,
			label: r.namespace || E.labelEvents
		} : n ? {
			index: j(t, 200, 300),
			label: E.labelEventsPrefix + n
		} : {
			index: 200,
			label: E.labelEvents
		};
	}
}
a(M, "calculateSwimlaneProps");
function N(e) {
	let { themeVariables: n } = t();
	switch (e.modelEntityType) {
		case "ui": return {
			fill: n.emUiFill ?? "white",
			stroke: n.emUiStroke ?? "#dbdada"
		};
		case "pcr":
		case "processor": return {
			fill: n.emProcessorFill ?? "#edb3f6",
			stroke: n.emProcessorStroke ?? "#b88cbf"
		};
		case "rmo":
		case "readmodel": return {
			fill: n.emReadModelFill ?? "#d3f1a2",
			stroke: n.emReadModelStroke ?? "#a3b732"
		};
		case "cmd":
		case "command": return {
			fill: n.emCommandFill ?? "#bcd6fe",
			stroke: n.emCommandStroke ?? "#679ac3"
		};
		case "evt":
		case "event": return {
			fill: n.emEventFill ?? "#ffb778",
			stroke: n.emEventStroke ?? "#c19a0f"
		};
		default: return {
			fill: "red",
			stroke: "black"
		};
	}
}
a(N, "calculateEntityVisualProps");
function P(e, r, a) {
	let o = t(), s = n(k(e.entityIdentifier) ?? "", o), l, u = {
		fontSize: 16,
		fontWeight: 700,
		fontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		joinWith: "<br/>"
	}, d = `<b>${c(s, a.textMaxWidth, u)}</b>`;
	if (e.dataInlineValue && (l = e.dataInlineValue, l = l.substring(l.indexOf("{") + 1), l = l.substring(0, l.lastIndexOf("}") - 1), l = n(l, o), l = c(l, a.textMaxWidth, u), l = l.replaceAll(" ", "&nbsp;")), e.dataReference) {
		let t = r.find((t) => t.name === e.dataReference?.$refText);
		t && (l = t.dataBlockValue, l = l.substring(l.indexOf("{\n") + 2), l = l.substring(0, l.lastIndexOf("}") - 1), l = n(l, o), l = c(l, a.textMaxWidth, u), l = l.replaceAll(" ", "&nbsp;"), l += "<br/>");
	}
	let f = l !== void 0;
	f && (d += `<br/><br/><code style="text-align: left; display: block;max-width:${a.textMaxWidth}px">${l}</code>`);
	let m = {
		fontSize: u.fontSize,
		fontWeight: u.fontWeight,
		fontFamily: u.fontFamily
	}, h = i(d, m), g = f ? h.width / 3 : h.width, _ = {
		content: d,
		width: g,
		height: h.height
	};
	return p.debug(`[${e.name}] ${e.entityIdentifier} text`, _), _;
}
a(P, "calculateTextProps");
function F(e, t) {
	let n = t, r = N(n.frame), i = {
		width: n.textProps.width + 2 * E.boxTextPadding,
		height: n.textProps.height + 2 * E.boxTextPadding
	};
	return [{
		$kind: y,
		frame: n.frame,
		index: n.index,
		visual: r,
		dimension: i,
		textProps: n.textProps
	}];
}
a(F, "decidePositionFrame");
function I(e, t, n) {
	return t === void 0 ? E.contentStartX : t.index === e.index && e.r ? e.r + E.boxPadding : n === void 0 ? E.contentStartX : n.r - E.boxOverlap + E.boxPadding;
}
a(I, "calculateX");
function L(e, t) {
	let n = [...e.map((e) => e.r), t];
	return Math.max(...n);
}
a(L, "calculateMaxRight");
function R(e) {
	return Object.values(e).sort((e, t) => e.index - t.index);
}
a(R, "sortedSwimlanesArray");
function z(e, t) {
	let n = t, r = M(n.frame, e.swimlanes), i;
	i = r.index in e.swimlanes ? e.swimlanes[r.index] : {
		index: r.index,
		label: r.label,
		r: 0,
		y: r.index * E.swimlaneMinHeight + E.swimlaneGap,
		height: E.swimlaneMinHeight,
		maxHeight: E.swimlaneMinHeight
	};
	let a = e.boxes.length > 0 ? e.boxes[e.boxes.length - 1] : void 0, o = e.previousSwimlaneNumber === void 0 ? void 0 : e.swimlanes[e.previousSwimlaneNumber], s = {
		width: Math.max(E.boxMinWidth, Math.min(E.boxMaxWidth, n.dimension.width)) + 2 * E.boxPadding,
		height: Math.max(E.boxMinHeight, Math.min(E.boxMaxHeight, n.dimension.height)) + 2 * E.boxPadding
	}, c = I(i, o, a), l = c + s.width + E.boxPadding, u = L(Object.values(e.swimlanes), l);
	i.r = c + s.width, i.maxHeight = Math.max(i.maxHeight, s.height), i.height = Math.max(E.swimlaneMinHeight, i.maxHeight) + 2 * E.swimlanePadding;
	let d = {
		x: c,
		y: E.swimlanePadding + i.y,
		r: l,
		dimension: s,
		leftSibling: !1,
		swimlane: i,
		visual: n.visual,
		text: n.textProps.content,
		frame: n.frame,
		index: n.index
	}, f = {
		...e,
		boxes: [...e.boxes, d],
		swimlanes: {
			...e.swimlanes,
			[`${i.index}`]: i
		},
		previousSwimlaneNumber: r.index,
		previousFrame: n.frame,
		maxR: u
	}, p = R(f.swimlanes);
	p.length > 0 && (p[0].y = 0);
	for (let e = 1; e < p.length; e++) {
		let t = p[e], n = p[e - 1];
		t.y = n.y + n.height + E.swimlaneGap;
	}
	return f;
}
a(z, "evolveFramePositioned");
function B(e, t) {
	return e === 0 && t.sourceFrames.length === 0;
}
a(B, "isFirstFrame");
function V(e) {
	return e.sourceFrames !== void 0 && e.sourceFrames !== null && e.sourceFrames.length > 0;
}
a(V, "hasSourceFrame");
function H(e, t) {
	if (t != null) return e.find((e) => e.frame.name === t.name);
}
a(H, "findBoxByFrame");
function U(e, t, n) {
	if (!(n < 0)) for (let r = n; r >= 0; r--) {
		let n = e[r];
		if (n.swimlane.index !== t) return n;
	}
}
a(U, "findBoxByLineIndex");
function W(e, t) {
	let n = t;
	if (ne(n.frame) || B(n.index, n.frame)) return [];
	let r = H(e.boxes, n.frame);
	if (r === void 0) throw Error(`Target box not found for frame ${n.frame.name}`);
	let i;
	return i = n.sourceFrame ? H(e.boxes, n.sourceFrame) : U(e.boxes, r.swimlane.index, n.index - 1), i === void 0 ? [] : [{
		$kind: x,
		frame: n.frame,
		index: n.index,
		sourceBox: i,
		targetBox: r
	}];
}
a(W, "decidePositionRelation");
function G(e, t) {
	let n = t, r = {
		visual: {
			fill: "none",
			stroke: "#000"
		},
		source: {
			x: n.sourceBox.x,
			y: n.sourceBox.y
		},
		target: {
			x: n.targetBox.x,
			y: n.targetBox.y
		},
		sourceBox: n.sourceBox,
		targetBox: n.targetBox
	};
	return {
		...e,
		relations: [...e.relations, r]
	};
}
a(G, "evolveRelationPositioned");
var le = {
	[v]: F,
	[b]: W
}, ue = {
	[y]: z,
	[x]: G
};
function K(e, t) {
	let n = le[t.$kind];
	if (n == null) return [];
	let r = n(e, t);
	return p.debug("decided events", r), r;
}
a(K, "decide");
function q(e, t) {
	let n = t.reduce((e, t) => {
		let n = ue[t.$kind];
		return n == null ? e : n(e, t);
	}, e);
	return p.debug("evolve events", {
		state: e,
		newState: n,
		events: t
	}), n;
}
a(q, "evolve");
function J(e, t) {
	return q(e, K(e, t));
}
a(J, "dispatch");
var Y = {
	getConfig: se,
	setOptions: re,
	getOptions: ie,
	clear: ae,
	setAccTitle: o,
	getAccTitle: l,
	getAccDescription: f,
	setAccDescription: r,
	setDiagramTitle: g,
	getDiagramTitle: d,
	setAst: T,
	getDiagramProps: D,
	getState: w
}, de = { parse: /* @__PURE__ */ a(async (e) => {
	let t = await te("eventmodeling", e);
	p.debug(t), Y.setAst(t), ee(t, Y);
}, "parse") }, fe = m()?.eventmodeling;
function X(e, t) {
	return (n) => {
		let r = n.swimlane.y + t.swimlanePadding, i = e.append("g").attr("class", "em-box");
		i.append("rect").attr("x", n.x).attr("y", r).attr("rx", "3").attr("width", n.dimension.width).attr("height", n.dimension.height).attr("stroke", n.visual.stroke).attr("fill", n.visual.fill), i.append("foreignObject").attr("x", n.x + t.boxPadding).attr("y", r + 10).attr("width", n.dimension.width - 2 * t.boxPadding).attr("height", n.dimension.height - 2 * t.boxPadding).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%").append("span").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").html(n.text);
	};
}
a(X, "renderD3Box");
function Z(e, t) {
	return e > t;
}
a(Z, "dirUpwards");
function Q(e, t, n, r) {
	return (i) => {
		let a = i.sourceBox.swimlane.y + t.swimlanePadding, o = i.targetBox.swimlane.y + t.swimlanePadding, s = Z(a, o), c = i.sourceBox.x + i.sourceBox.dimension.width * 2 / 3, l = i.targetBox.x + i.targetBox.dimension.width / 3, u, d;
		p.debug(`rendering relation up=${s} for `, {
			sourceBox: i.sourceBox,
			targetBox: i.targetBox
		}), s ? (u = a, d = o + i.targetBox.dimension.height) : (u = a + i.sourceBox.dimension.height, d = o);
		let f = r.emRelationStroke ?? i.visual.stroke;
		e.append("path").attr("class", "em-relation").attr("fill", i.visual.fill).attr("stroke", f).attr("stroke-width", "1").attr("marker-end", `url(#${n})`).attr("d", `M${c} ${u} L${l} ${d}`);
	};
}
a(Q, "renderD3Relation");
function $(e, t, n, r) {
	return (i) => {
		let a = e.append("g").attr("class", "em-swimlane"), o = r.emSwimlaneBackgroundOdd ?? "rgb(250,250,250)", s = r.emSwimlaneBackgroundStroke ?? "rgb(240,240,240)";
		a.append("rect").attr("x", 0).attr("y", i.y).attr("rx", "3").attr("width", t + n.swimlanePadding).attr("height", i.height).attr("fill", o).attr("stroke", s), a.append("text").attr("font-weight", n.swimlaneTextFontWeight).attr("x", 30).attr("y", i.y + 30).text(i.label);
	};
}
a($, "renderD3Swimlane");
var pe = {
	parser: de,
	db: Y,
	renderer: { draw: /* @__PURE__ */ a(function(t, n, r, i) {
		if (p.debug("in eventmodeling renderer", t + "\n", "id:", n, r), !fe) throw Error("EventModeling config not found");
		let a = i.db, { themeVariables: o, eventmodeling: s } = m(), c = e(`[id="${n}"]`), l = a.getDiagramProps(), u = a.getState(), d = `em-arrowhead-${n}`, f = o.emArrowhead ?? "#000000";
		u.sortedSwimlanesArray.forEach($(c, u.maxR, l, o)), u.boxes.forEach(X(c, l)), u.relations.forEach(Q(c, l, d, o)), c.append("defs").append("marker").attr("id", d).attr("markerWidth", "10").attr("markerHeight", "7").attr("refX", "10").attr("refY", "3.5").attr("orient", "auto").append("polygon").attr("points", "0 0, 10 3.5, 0 7").attr("fill", f), _(void 0, c, s?.padding ?? 30, s?.useMaxWidth);
	}, "draw") },
	styles: /* @__PURE__ */ a((e) => "", "getStyles")
};
//#endregion
export { pe as diagram };

//# sourceMappingURL=diagram-VSXAHHWV-CqVxybTU-BvFIwhqY.js.map