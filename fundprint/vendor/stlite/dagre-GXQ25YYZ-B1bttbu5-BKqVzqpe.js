import { Hn as e, Ht as t, Kn as n, Kt as r, N as i, X as a, bt as o, hn as s, jt as c, ln as l, n as u, ot as d, p as f, pn as p, pt as m, rt as h, st as g, w as _, xn as v } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
import { t as y } from "./layout-wQj9hVsT-6kYL1z4P.js";
//#region ../react/build/dagre-GXQ25YYZ-B1bttbu5.js
var b = /* @__PURE__ */ e((e, t, n) => Math.max(t, Math.min(n, e)), "clamp"), x = /* @__PURE__ */ e((e = "TB") => {
	switch (e) {
		case "BT": return "bottom";
		case "LR": return "right";
		case "RL": return "left";
		default: return "top";
	}
}, "getDefaultSelfLoopSide"), S = /* @__PURE__ */ e((e) => e === "flowchart" || e === "flowchart-v2" || e === "stateDiagram" || e === "er" || e === "classDiagram", "shouldMergeSelfLoopSegments"), C = [
	"x",
	"y",
	"width",
	"height",
	"labelBBox",
	"intersect",
	"calcIntersect",
	"diff",
	"clusterNode"
], w = /* @__PURE__ */ e((e, t, n, r, i) => {
	let a = [], o = /* @__PURE__ */ new Set();
	if (n.forEach(({ start: e, end: t }) => {
		e !== r && o.add(e), t !== r && o.add(t);
	}), o.forEach((t) => {
		let n = e.node(t);
		typeof n?.x == "number" && typeof n?.y == "number" && a.push(n);
	}), a.length === 0 && n.forEach(({ edge: e }) => {
		(e.points ?? []).forEach((e) => {
			typeof e?.x == "number" && typeof e?.y == "number" && a.push(e);
		});
	}), a.length === 0) return x(i);
	let s = a.reduce((e, t) => ({
		x: e.x + t.x / a.length,
		y: e.y + t.y / a.length
	}), {
		x: 0,
		y: 0
	}), c = s.x - t.x, l = s.y - t.y;
	return Math.abs(c) > Math.abs(l) ? c > 0 ? "right" : "left" : Math.abs(l) > 0 ? l > 0 ? "bottom" : "top" : x(i);
}, "getSelfLoopSide"), T = /* @__PURE__ */ e((e, t = "top", n = 0, r = 0) => {
	let i = e.x, a = e.y - n, o = e.width / 2, s = e.height / 2, c = Math.max(36, Math.min(100, e.width * .8)), l = b(Math.max(r, e.width * .35), 36, c), u = b(Math.min(e.width, e.height) * .45, 24, 48);
	switch (t) {
		case "bottom": {
			let e = a + s;
			return [
				{
					x: i - l / 2,
					y: e
				},
				{
					x: i - l / 2,
					y: e + u
				},
				{
					x: i + l / 2,
					y: e + u
				},
				{
					x: i + l / 2,
					y: e
				}
			];
		}
		case "right": {
			let e = i + o;
			return [
				{
					x: e,
					y: a - l / 2
				},
				{
					x: e + u,
					y: a - l / 2
				},
				{
					x: e + u,
					y: a + l / 2
				},
				{
					x: e,
					y: a + l / 2
				}
			];
		}
		case "left": {
			let e = i - o;
			return [
				{
					x: e,
					y: a - l / 2
				},
				{
					x: e - u,
					y: a - l / 2
				},
				{
					x: e - u,
					y: a + l / 2
				},
				{
					x: e,
					y: a + l / 2
				}
			];
		}
		default: {
			let e = a - s;
			return [
				{
					x: i - l / 2,
					y: e
				},
				{
					x: i - l / 2,
					y: e - u
				},
				{
					x: i + l / 2,
					y: e - u
				},
				{
					x: i + l / 2,
					y: e
				}
			];
		}
	}
}, "getSelfLoopPoints"), E = /* @__PURE__ */ e((e, t, n = "top", r = 0, i = {}) => {
	let a = e.x, o = e.y - r, s = i.width ?? 0, c = i.height ?? 0;
	switch (n) {
		case "bottom": return {
			x: a,
			y: Math.max(...t.map((e) => e.y)) + c / 2 + 4
		};
		case "right": return {
			x: Math.max(...t.map((e) => e.x)) + s / 2 + 4,
			y: o
		};
		case "left": return {
			x: Math.min(...t.map((e) => e.x)) - s / 2 - 4,
			y: o
		};
		default: return {
			x: a,
			y: Math.min(...t.map((e) => e.y)) - c / 2 - 4
		};
	}
}, "getSelfLoopLabelPosition"), D = /* @__PURE__ */ e((e, t = 0, { mergeSelfLoops: n = !0 } = {}) => {
	let r = /* @__PURE__ */ new Map(), i = [], a = e.graph()?.rankdir;
	return e.edges().forEach((t) => {
		let a = e.edge(t);
		if (n && a.selfLoop) {
			let e = a.selfLoop.id;
			r.has(e) || r.set(e, []), r.get(e).push({
				edge: a,
				start: t.v,
				end: t.w
			});
		} else i.push({
			edge: a,
			start: t.v,
			end: t.w
		});
	}), r.forEach((n) => {
		if (n.length !== 3) {
			n.forEach((e) => i.push(e));
			return;
		}
		n.sort((e, t) => e.edge.selfLoop.order - t.edge.selfLoop.order);
		let [r, o, s] = n, c = r.edge.originalEdge ?? o.edge.originalEdge ?? s.edge.originalEdge ?? o.edge, l = e.node(c.start);
		if (!l) {
			n.forEach((e) => i.push(e));
			return;
		}
		let u = {
			width: o.edge.width,
			height: o.edge.height
		}, d = w(e, l, n, c.start, a), f = T(l, d, t, u.width ?? 0), p = E(l, f, d, t, u), m = {
			...o.edge,
			...c,
			id: c.id,
			points: f,
			start: c.start,
			end: c.end,
			x: p.x,
			y: p.y,
			width: u.width,
			height: u.height,
			labelStyle: o.edge.labelStyle,
			fromCluster: r.edge.fromCluster ?? o.edge.fromCluster ?? s.edge.fromCluster,
			toCluster: r.edge.toCluster ?? o.edge.toCluster ?? s.edge.toCluster
		};
		delete m.selfLoop, delete m.originalEdge, i.push({
			edge: m,
			start: m.start,
			end: m.end
		});
	}), i;
}, "getEdgesToRender"), O = /* @__PURE__ */ e(async ({ element: t, graph: i, diagramType: a, id: o, parentCluster: s, siteConfig: c }) => {
	let l = i.graph().rankdir;
	m.trace("Dir in recursive render - dir:", l);
	let { clusters: h, edgePaths: v, edgeLabels: y, nodes: b, rootGroups: x } = u(t, { edgePathsClass: "edgePaths" });
	i.nodes() ? m.info("Recursive render XXX", i.nodes()) : m.info("No nodes found for", i), i.edges().length > 0 && m.info("Recursive edges", i.edge(i.edges()[0]));
	let C = S(a);
	await Promise.all(i.nodes().map(async function(e) {
		let t = i.node(e);
		if (s !== void 0) {
			let t = JSON.parse(JSON.stringify(s.clusterData));
			m.trace("Setting data for parent cluster XXX\n Node.id = ", e, "\n data=", t.height, "\nParent cluster", s.height), i.setNode(s.id, t), i.parent(e) || (m.trace("Setting parent", e, s.id), i.setParent(e, s.id, t));
		}
		if (m.info("(Insert) Node XXX" + e + ": " + JSON.stringify(i.node(e))), t?.clusterNode) {
			m.info("Cluster identified XBX", e, t.width, i.node(e));
			let { ranksep: r, nodesep: s } = i.graph();
			t.graph.setGraph({
				...t.graph.graph(),
				ranksep: r + 25,
				nodesep: s
			});
			let l = await F({
				element: b,
				graph: t.graph,
				diagramType: a,
				id: o,
				parentCluster: i.node(e),
				siteConfig: c
			}), u = l.elem;
			n(t, u), t.diff = l.diff || 0, m.info("New compound node after recursive render XAX", e, "width", t.width, "height", t.height), p(u, t);
		} else i.children(e).length > 0 ? (m.trace("Cluster - the non recursive path XBX", e, t.id, t, t.width, "Graph:", i), m.trace(f(t.id, i)), g.set(t.id, {
			id: f(t.id, i),
			node: t
		})) : (m.trace("Node - the non recursive path XAX", e, b, i.node(e), l), await _(b, i.node(e), {
			config: c,
			dir: l
		}));
	})), await (/* @__PURE__ */ e(async () => {
		let e = i.edges().map(async function(e) {
			let t = i.edge(e.v, e.w, e.name);
			if (m.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e)), m.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(i.edge(e))), m.info("Fix", g, "ids:", e.v, e.w, "Translating: ", g.get(e.v), g.get(e.w)), C && t.selfLoop) {
				if (t.selfLoop.order !== 1) return;
				let e = {
					...t.originalEdge,
					...t,
					id: t.selfLoop.id,
					startLabelLeft: t.originalEdge?.startLabelLeft ?? t.startLabelLeft,
					startLabelRight: t.originalEdge?.startLabelRight ?? t.startLabelRight,
					endLabelLeft: t.originalEdge?.endLabelLeft ?? t.endLabelLeft,
					endLabelRight: t.originalEdge?.endLabelRight ?? t.endLabelRight
				};
				await r(y, e), t.width = e.width, t.height = e.height, t.labelStyle = e.labelStyle;
				return;
			}
			await r(y, t);
		});
		await Promise.all(e);
	}, "processEdges"))();
	let { subGraphTitleTotalMargin: w } = d(c);
	return {
		elem: x,
		graph: i,
		groups: {
			clusters: h,
			edgePaths: v,
			edgeLabels: y,
			nodes: b,
			rootGroups: x
		},
		diagramType: a,
		id: o,
		mergeSelfLoops: C,
		subGraphTitleTotalMargin: w
	};
}, "measureDagreGraph"), k = /* @__PURE__ */ e((e) => {
	m.info("############################################# XXX"), m.info("###                Layout                 ### XXX"), m.info("############################################# XXX"), y(e);
}, "runDagreGraphLayout"), A = /* @__PURE__ */ e((e, t, n) => {
	let r = e.node(t);
	if (!r) return;
	let i = { ...r };
	return r?.clusterNode ? i.y = (r.y ?? 0) + n : e.children(t).length > 0 ? i.height = (r.height ?? 0) + n : i.y = (r.y ?? 0) + n / 2, i;
}, "normalizeDagreNode"), j = /* @__PURE__ */ e((e, t) => {
	C.forEach((n) => {
		t[n] !== void 0 && (e[n] = t[n]);
	});
}, "applyDagreNodeLayout"), M = /* @__PURE__ */ e((e, t, n, r) => ({
	...e,
	start: e.start ?? t,
	end: e.end ?? n,
	points: (e.points ?? []).map((e) => ({
		...e,
		y: typeof e.y == "number" ? e.y + r : e.y
	}))
}), "normalizeDagreEdge"), N = /* @__PURE__ */ e((e, t) => {
	let { graph: n, mergeSelfLoops: r, subGraphTitleTotalMargin: i = 0 } = t, a = new Map(e.nodes.map((e) => [e.id, e]));
	o(n).forEach((e) => {
		let t = A(n, e, i);
		if (!t) return;
		j(n.node(e), t);
		let r = a.get(e);
		r && j(r, t);
	});
	let s = i / 2;
	return e.edges = D(n, s, { mergeSelfLoops: r }).map(({ edge: e, start: t, end: n }) => M(e, t, n, s)), e;
}, "applyDagreLayoutResult"), P = /* @__PURE__ */ e(async ({ elem: e, graph: n, groups: { clusters: r, edgePaths: i }, diagramType: s, id: c, mergeSelfLoops: u, subGraphTitleTotalMargin: d }) => {
	let f = 0;
	await Promise.all(o(n).map(async function(e) {
		let i = n.node(e);
		if (m.info("Position XBX => " + e + ": (" + i.x, "," + i.y, ") width: ", i.width, " height: ", i.height), i?.clusterNode) i.y += d, m.info("A tainted cluster node XBX1", e, i.id, i.width, i.height, i.x, i.y, n.parent(e)), g.get(i.id).node = i, a(i);
		else if (n.children(e).length > 0) {
			m.info("A pure cluster node XBX1", e, i.id, i.x, i.y, i.width, i.height, n.parent(e)), i.height += d, n.node(i.parentId);
			let a = i?.padding / 2 || 0, o = i?.labelBBox?.height || 0, s = o - a || 0;
			m.debug("OffsetY", s, "labelHeight", o, "halfPadding", a), await t(r, i), g.get(i.id).node = i;
		} else {
			let e = n.node(i.parentId);
			i.y += d / 2, m.info("A regular node XBX1 - using the padding", i.id, "parent", i.parentId, i.width, i.height, i.x, i.y, "offsetY", i.offsetY, "parent", e, e?.offsetY, i), a(i);
		}
	}));
	let p = d / 2;
	return D(n, p, { mergeSelfLoops: u }).forEach(function({ edge: e, start: t, end: r }) {
		m.info("Edge " + t + " -> " + r + ": " + JSON.stringify(e), e), e.points.forEach((e) => e.y += p);
		let a = n.node(t), o = n.node(r), u = l(i, e, g, s, a, o, c);
		v(e, u);
	}), n.nodes().forEach(function(e) {
		let t = n.node(e);
		m.info(e, t.type, t.diff), t.isGroup && (f = t.diff);
	}), m.warn("Returning from recursive render XAX", e, f), {
		elem: e,
		diff: f
	};
}, "paintDagreLayoutCore"), F = /* @__PURE__ */ e(async (e) => {
	let t = await O(e);
	return k(t.graph), await P(t);
}, "renderDagreSubgraph"), I = /* @__PURE__ */ e((e) => {
	let t = new s({
		multigraph: !0,
		compound: !0
	}).setGraph({
		rankdir: e.direction,
		nodesep: e.config?.nodeSpacing || e.nodeSpacing || e.config?.flowchart?.nodeSpacing,
		ranksep: e.config?.rankSpacing || e.rankSpacing || e.config?.flowchart?.rankSpacing,
		marginx: 8,
		marginy: 8
	}).setDefaultEdgeLabel(function() {
		return {};
	});
	return e.nodes.forEach((e) => {
		t.setNode(e.id, { ...e }), e.parentId && t.setParent(e.id, e.parentId);
	}), m.debug("Edges:", e.edges), e.edges.forEach((e) => {
		if (e.start === e.end) {
			let n = e.start, r = n + "---" + n + "---1", i = n + "---" + n + "---2", a = t.node(n);
			t.setNode(r, {
				domId: r,
				id: r,
				parentId: a.parentId,
				labelStyle: "",
				label: "",
				padding: 0,
				shape: "labelRect",
				style: "",
				width: 10,
				height: 10
			}), t.setParent(r, a.parentId), t.setNode(i, {
				domId: i,
				id: i,
				parentId: a.parentId,
				labelStyle: "",
				padding: 0,
				shape: "labelRect",
				label: "",
				style: "",
				width: 10,
				height: 10
			}), t.setParent(i, a.parentId);
			let o = structuredClone(e), s = structuredClone(e), c = structuredClone(e), l = structuredClone(e);
			s.originalEdge = o, s.selfLoop = {
				id: o.id,
				order: 0
			}, c.originalEdge = o, c.selfLoop = {
				id: o.id,
				order: 1
			}, l.originalEdge = o, l.selfLoop = {
				id: o.id,
				order: 2
			}, s.label = "", s.arrowTypeEnd = "none", s.endLabelLeft = "", s.endLabelRight = "", s.startLabelLeft = "", s.id = n + "-cyclic-special-1", c.startLabelRight = "", c.startLabelLeft = "", c.endLabelLeft = "", c.endLabelRight = "", c.arrowTypeStart = "none", c.arrowTypeEnd = "none", c.id = n + "-cyclic-special-mid", l.label = "", l.startLabelRight = "", l.startLabelLeft = "", l.arrowTypeStart = "none", a.isGroup && (s.fromCluster = n, l.toCluster = n), l.id = n + "-cyclic-special-2", l.arrowTypeStart = "none", t.setEdge(n, r, s, n + "-cyclic-special-0"), t.setEdge(r, i, c, n + "-cyclic-special-1"), t.setEdge(i, n, l, n + "-cyclic-special-2");
		} else t.setEdge(e.start, e.end, { ...e }, e.id);
	}), c(t), { graph: t };
}, "prepareLayoutForDagre"), L = /* @__PURE__ */ e(async (e, { element: t, preparedLayout: n }) => {
	let r = n ?? I(e), i = h(), a = await O({
		element: t,
		graph: r.graph,
		diagramType: e.type,
		id: e.diagramId,
		parentCluster: void 0,
		siteConfig: i
	});
	return r.measuredLayout = a, a;
}, "measureDagreLayout"), R = /* @__PURE__ */ e((e, t) => {
	let n = t.preparedLayout?.measuredLayout;
	if (!n) throw Error("runDagreLayoutCore requires measureDagreLayout to run first");
	return k(n.graph), N(e, n), n;
}, "runDagreLayoutCore"), z = i({
	prepareLayout: I,
	measureLayout: L,
	runLayoutCore: R,
	paintOptions: {
		clusterDb: g,
		getNodes: /* @__PURE__ */ e((e, { measure: t }) => o(t.graph).map((e) => t.graph.node(e)).filter(Boolean), "getDagrePaintNodes"),
		getEdgeNode: /* @__PURE__ */ e((e, t, { measure: n }) => e ? n.graph.node(e) : void 0, "getDagreEdgeNode"),
		skipNode: /* @__PURE__ */ e((e, { measure: t }) => !t.graph.hasNode(e.id), "skipNode"),
		isCluster: /* @__PURE__ */ e((e, { measure: t }) => t.graph.hasNode(e.id) && (t.graph.children(e.id) ?? []).length > 0, "isCluster")
	}
});
//#endregion
export { N as applyDagreLayoutResult, D as getEdgesToRender, L as measureDagreLayout, I as prepareLayoutForDagre, z as render, R as runDagreLayoutCore };

//# sourceMappingURL=dagre-GXQ25YYZ-B1bttbu5-BKqVzqpe.js.map