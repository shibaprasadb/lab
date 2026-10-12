import { c as e } from "./transform-B2AI7qp--hg0kwf7R.js";
import { At as t, Bt as n, En as r, Hn as i, Mn as a, Pn as o, Qt as s, U as c, cn as l, in as u, lr as d, mr as f, pt as p, rt as m, ut as h, x as g, yn as _ } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
import { t as v } from "./chunk-JWPE2WC7-BoR8QvRp-D1Xio7hJ.js";
import { i as y } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
import { t as b } from "./chunk-2Q5K7J3B-B53mbT2X-B8xUSeHa.js";
//#region ../react/build/gitGraphDiagram-WWUBYQGX-Be6VzpzJ.js
var x = {
	NORMAL: 0,
	REVERSE: 1,
	HIGHLIGHT: 2,
	MERGE: 3,
	CHERRY_PICK: 4
}, ee = h.gitGraph, S = /* @__PURE__ */ i(() => s({
	...ee,
	...t().gitGraph
}), "getConfig"), C = new b(() => {
	let e = S(), t = e.mainBranchName, n = e.mainBranchOrder;
	return {
		mainBranchName: t,
		commits: /* @__PURE__ */ new Map(),
		head: null,
		branchConfig: /* @__PURE__ */ new Map([[t, {
			name: t,
			order: n
		}]]),
		branches: /* @__PURE__ */ new Map([[t, null]]),
		currBranch: t,
		direction: "LR",
		seq: 0,
		options: {}
	};
});
function w() {
	return c({ length: 7 });
}
i(w, "getID");
function T(e, t) {
	let n = /* @__PURE__ */ Object.create(null);
	return e.reduce((e, r) => {
		let i = t(r);
		return n[i] || (n[i] = !0, e.push(r)), e;
	}, []);
}
i(T, "uniqBy");
var te = /* @__PURE__ */ i(function(e) {
	C.records.direction = e;
}, "setDirection"), ne = /* @__PURE__ */ i(function(e) {
	p.debug("options str", e), e = e?.trim(), e ||= "{}";
	try {
		C.records.options = JSON.parse(e);
	} catch (e) {
		p.error("error while parsing gitGraph options", e.message);
	}
}, "setOptions"), re = /* @__PURE__ */ i(function() {
	return C.records.options;
}, "getOptions"), ie = /* @__PURE__ */ i(function(e) {
	let t = e.msg, r = e.id, i = e.type, a = e.tags;
	p.info("commit", t, r, i, a), p.debug("Entering commit:", t, r, i, a);
	let o = S();
	r = n.sanitizeText(r, o), t = n.sanitizeText(t, o), a = a?.map((e) => n.sanitizeText(e, o));
	let s = {
		id: r || C.records.seq + "-" + w(),
		message: t,
		seq: C.records.seq++,
		type: i ?? x.NORMAL,
		tags: a ?? [],
		parents: C.records.head == null ? [] : [C.records.head.id],
		branch: C.records.currBranch
	};
	C.records.head = s, p.info("main branch", o.mainBranchName), C.records.commits.has(s.id) && p.warn(`Commit ID ${s.id} already exists`), C.records.commits.set(s.id, s), C.records.branches.set(C.records.currBranch, s.id), p.debug("in pushCommit " + s.id);
}, "commit"), ae = /* @__PURE__ */ i(function(e) {
	let t = e.name, r = e.order;
	if (t = n.sanitizeText(t, S()), C.records.branches.has(t)) throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${t}")`);
	C.records.branches.set(t, C.records.head == null ? null : C.records.head.id), C.records.branchConfig.set(t, {
		name: t,
		order: r
	}), E(t), p.debug("in createBranch");
}, "branch"), oe = /* @__PURE__ */ i((e) => {
	let t = e.branch, r = e.id, i = e.type, a = e.tags, o = S();
	t = n.sanitizeText(t, o), r &&= n.sanitizeText(r, o);
	let s = C.records.branches.get(C.records.currBranch), c = C.records.branches.get(t), l = s ? C.records.commits.get(s) : void 0, u = c ? C.records.commits.get(c) : void 0;
	if (l && u && l.branch === t) throw Error(`Cannot merge branch '${t}' into itself.`);
	if (C.records.currBranch === t) {
		let e = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Cannot merge a branch to itself");
		throw e.hash = {
			text: `merge ${t}`,
			token: `merge ${t}`,
			expected: ["branch abc"]
		}, e;
	}
	if (l === void 0 || !l) {
		let e = /* @__PURE__ */ Error(`Incorrect usage of "merge". Current branch (${C.records.currBranch})has no commits`);
		throw e.hash = {
			text: `merge ${t}`,
			token: `merge ${t}`,
			expected: ["commit"]
		}, e;
	}
	if (!C.records.branches.has(t)) {
		let e = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Branch to be merged (" + t + ") does not exist");
		throw e.hash = {
			text: `merge ${t}`,
			token: `merge ${t}`,
			expected: [`branch ${t}`]
		}, e;
	}
	if (u === void 0 || !u) {
		let e = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Branch to be merged (" + t + ") has no commits");
		throw e.hash = {
			text: `merge ${t}`,
			token: `merge ${t}`,
			expected: ["\"commit\""]
		}, e;
	}
	if (l === u) {
		let e = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Both branches have same head");
		throw e.hash = {
			text: `merge ${t}`,
			token: `merge ${t}`,
			expected: ["branch abc"]
		}, e;
	}
	if (r && C.records.commits.has(r)) {
		let e = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Commit with id:" + r + " already exists, use different custom id");
		throw e.hash = {
			text: `merge ${t} ${r} ${i} ${a?.join(" ")}`,
			token: `merge ${t} ${r} ${i} ${a?.join(" ")}`,
			expected: [`merge ${t} ${r}_UNIQUE ${i} ${a?.join(" ")}`]
		}, e;
	}
	let d = c || "", f = {
		id: r || `${C.records.seq}-${w()}`,
		message: `merged branch ${t} into ${C.records.currBranch}`,
		seq: C.records.seq++,
		parents: C.records.head == null ? [] : [C.records.head.id, d],
		branch: C.records.currBranch,
		type: x.MERGE,
		customType: i,
		customId: !!r,
		tags: a ?? []
	};
	C.records.head = f, C.records.commits.set(f.id, f), C.records.branches.set(C.records.currBranch, f.id), p.debug(C.records.branches), p.debug("in mergeBranch");
}, "merge"), se = /* @__PURE__ */ i(function(e) {
	let t = e.id, r = e.targetId, i = e.tags, a = e.parent;
	p.debug("Entering cherryPick:", t, r, i);
	let o = S();
	if (t = n.sanitizeText(t, o), r = n.sanitizeText(r, o), i = i?.map((e) => n.sanitizeText(e, o)), a = n.sanitizeText(a, o), !t || !C.records.commits.has(t)) {
		let e = /* @__PURE__ */ Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
		throw e.hash = {
			text: `cherryPick ${t} ${r}`,
			token: `cherryPick ${t} ${r}`,
			expected: ["cherry-pick abc"]
		}, e;
	}
	let s = C.records.commits.get(t);
	if (s === void 0 || !s) throw Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
	if (a && !(Array.isArray(s.parents) && s.parents.includes(a))) throw Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
	let c = s.branch;
	if (s.type === x.MERGE && !a) throw Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
	if (!r || !C.records.commits.has(r)) {
		if (c === C.records.currBranch) {
			let e = /* @__PURE__ */ Error("Incorrect usage of \"cherryPick\". Source commit is already on current branch");
			throw e.hash = {
				text: `cherryPick ${t} ${r}`,
				token: `cherryPick ${t} ${r}`,
				expected: ["cherry-pick abc"]
			}, e;
		}
		let e = C.records.branches.get(C.records.currBranch);
		if (e === void 0 || !e) {
			let e = /* @__PURE__ */ Error(`Incorrect usage of "cherry-pick". Current branch (${C.records.currBranch})has no commits`);
			throw e.hash = {
				text: `cherryPick ${t} ${r}`,
				token: `cherryPick ${t} ${r}`,
				expected: ["cherry-pick abc"]
			}, e;
		}
		let n = C.records.commits.get(e);
		if (n === void 0 || !n) {
			let e = /* @__PURE__ */ Error(`Incorrect usage of "cherry-pick". Current branch (${C.records.currBranch})has no commits`);
			throw e.hash = {
				text: `cherryPick ${t} ${r}`,
				token: `cherryPick ${t} ${r}`,
				expected: ["cherry-pick abc"]
			}, e;
		}
		let o = {
			id: C.records.seq + "-" + w(),
			message: `cherry-picked ${s?.message} into ${C.records.currBranch}`,
			seq: C.records.seq++,
			parents: C.records.head == null ? [] : [C.records.head.id, s.id],
			branch: C.records.currBranch,
			type: x.CHERRY_PICK,
			tags: i ? i.filter(Boolean) : [`cherry-pick:${s.id}${s.type === x.MERGE ? `|parent:${a}` : ""}`]
		};
		C.records.head = o, C.records.commits.set(o.id, o), C.records.branches.set(C.records.currBranch, o.id), p.debug(C.records.branches), p.debug("in cherryPick");
	}
}, "cherryPick"), E = /* @__PURE__ */ i(function(e) {
	if (e = n.sanitizeText(e, S()), C.records.branches.has(e)) {
		C.records.currBranch = e;
		let t = C.records.branches.get(C.records.currBranch);
		t === void 0 || !t ? C.records.head = null : C.records.head = C.records.commits.get(t) ?? null;
	} else {
		let t = /* @__PURE__ */ Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${e}")`);
		throw t.hash = {
			text: `checkout ${e}`,
			token: `checkout ${e}`,
			expected: [`branch ${e}`]
		}, t;
	}
}, "checkout");
function D(e, t, n) {
	let r = e.indexOf(t);
	r === -1 ? e.push(n) : e.splice(r, 1, n);
}
i(D, "upsert");
function O(e) {
	let t = e.reduce((e, t) => e.seq > t.seq ? e : t, e[0]), n = "";
	e.forEach(function(e) {
		n += e === t ? "	*" : "	|";
	});
	let r = [
		n,
		t.id,
		t.seq
	];
	for (let e in C.records.branches) C.records.branches.get(e) === t.id && r.push(e);
	if (p.debug(r.join(" ")), t.parents && t.parents.length == 2 && t.parents[0] && t.parents[1]) {
		let n = C.records.commits.get(t.parents[0]);
		D(e, t, n), t.parents[1] && e.push(C.records.commits.get(t.parents[1]));
	} else {
		if (t.parents.length == 0) return;
		if (t.parents[0]) {
			let n = C.records.commits.get(t.parents[0]);
			D(e, t, n);
		}
	}
	e = T(e, (e) => e.id), O(e);
}
i(O, "prettyPrintCommitHistory");
var ce = /* @__PURE__ */ i(function() {
	p.debug(C.records.commits);
	let e = k()[0];
	O([e]);
}, "prettyPrint"), le = /* @__PURE__ */ i(function() {
	C.reset(), u();
}, "clear"), ue = /* @__PURE__ */ i(function() {
	return [...C.records.branchConfig.values()].map((e, t) => e.order !== null && e.order !== void 0 ? e : {
		...e,
		order: parseFloat(`0.${t}`)
	}).sort((e, t) => (e.order ?? 0) - (t.order ?? 0)).map(({ name: e }) => ({ name: e }));
}, "getBranchesAsObjArray"), de = /* @__PURE__ */ i(function() {
	return C.records.branches;
}, "getBranches"), fe = /* @__PURE__ */ i(function() {
	return C.records.commits;
}, "getCommits"), k = /* @__PURE__ */ i(function() {
	let e = [...C.records.commits.values()];
	return e.forEach(function(e) {
		p.debug(e.id);
	}), e.sort((e, t) => e.seq - t.seq), e;
}, "getCommitsArray"), A = {
	commitType: x,
	getConfig: S,
	setDirection: te,
	setOptions: ne,
	getOptions: re,
	commit: ie,
	branch: ae,
	merge: oe,
	cherryPick: se,
	checkout: E,
	prettyPrint: ce,
	clear: le,
	getBranchesAsObjArray: ue,
	getBranches: de,
	getCommits: fe,
	getCommitsArray: k,
	getCurrentBranch: /* @__PURE__ */ i(function() {
		return C.records.currBranch;
	}, "getCurrentBranch"),
	getDirection: /* @__PURE__ */ i(function() {
		return C.records.direction;
	}, "getDirection"),
	getHead: /* @__PURE__ */ i(function() {
		return C.records.head;
	}, "getHead"),
	setAccTitle: o,
	getAccTitle: l,
	getAccDescription: f,
	setAccDescription: r,
	setDiagramTitle: g,
	getDiagramTitle: d
}, pe = /* @__PURE__ */ i((e, t) => {
	v(e, t), e.dir && t.setDirection(e.dir);
	for (let n of e.statements) me(n, t);
}, "populate"), me = /* @__PURE__ */ i((e, t) => {
	let n = {
		Commit: /* @__PURE__ */ i((e) => t.commit(he(e)), "Commit"),
		Branch: /* @__PURE__ */ i((e) => t.branch(ge(e)), "Branch"),
		Merge: /* @__PURE__ */ i((e) => t.merge(_e(e)), "Merge"),
		Checkout: /* @__PURE__ */ i((e) => t.checkout(ve(e)), "Checkout"),
		CherryPicking: /* @__PURE__ */ i((e) => t.cherryPick(ye(e)), "CherryPicking")
	}[e.$type];
	n ? n(e) : p.error(`Unknown statement type: ${e.$type}`);
}, "parseStatement"), he = /* @__PURE__ */ i((e) => ({
	id: e.id,
	msg: e.message ?? "",
	type: e.type === void 0 ? x.NORMAL : x[e.type],
	tags: e.tags ?? void 0
}), "parseCommit"), ge = /* @__PURE__ */ i((e) => ({
	name: e.name,
	order: e.order ?? 0
}), "parseBranch"), _e = /* @__PURE__ */ i((e) => ({
	branch: e.branch,
	id: e.id ?? "",
	type: e.type === void 0 ? void 0 : x[e.type],
	tags: e.tags ?? void 0
}), "parseMerge"), ve = /* @__PURE__ */ i((e) => e.branch, "parseCheckout"), ye = /* @__PURE__ */ i((e) => ({
	id: e.id,
	targetId: "",
	tags: e.tags?.length === 0 ? void 0 : e.tags,
	parent: e.parent
}), "parseCherryPicking"), be = { parse: /* @__PURE__ */ i(async (e) => {
	let t = await y("gitGraph", e);
	p.debug(t), pe(t, A);
}, "parse") }, j = 10, M = 40, N = 4, P = 2, F = 8, I = /* @__PURE__ */ new Set([
	"redux",
	"redux-dark",
	"redux-color",
	"redux-dark-color"
]), L = 12, R = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), xe = /* @__PURE__ */ new Set([
	"dark",
	"redux-dark",
	"redux-dark-color",
	"neo-dark"
]), z = /* @__PURE__ */ i((e, t, n = !1) => n && e > 0 ? (e - 1) % (t - 1) + 1 : e % t, "calcColorIndex"), B = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = 30, U = /* @__PURE__ */ new Map(), W = [], G = 0, K = "LR", q = /* @__PURE__ */ i(() => {
	B.clear(), V.clear(), U.clear(), G = 0, W = [], K = "LR";
}, "clear"), J = /* @__PURE__ */ i((e) => {
	let t = document.createElementNS("http://www.w3.org/2000/svg", "text");
	return (typeof e == "string" ? e.split(/\\n|\n|<br\s*\/?>/gi) : e).forEach((e) => {
		let n = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
		n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), n.setAttribute("dy", "1em"), n.setAttribute("x", "0"), n.setAttribute("class", "row"), n.textContent = e.trim(), t.appendChild(n);
	}), t;
}, "drawText"), Y = /* @__PURE__ */ i((e) => {
	let t, n, r;
	return K === "BT" ? (n = /* @__PURE__ */ i((e, t) => e <= t, "comparisonFunc"), r = 1 / 0) : (n = /* @__PURE__ */ i((e, t) => e >= t, "comparisonFunc"), r = 0), e.forEach((e) => {
		let i = K === "TB" || K == "BT" ? V.get(e)?.y : V.get(e)?.x;
		i !== void 0 && n(i, r) && (t = e, r = i);
	}), t;
}, "findClosestParent"), Se = /* @__PURE__ */ i((e) => {
	let t = "", n = 1 / 0;
	return e.forEach((e) => {
		let r = V.get(e).y;
		r <= n && (t = e, n = r);
	}), t || void 0;
}, "findClosestParentBT"), Ce = /* @__PURE__ */ i((e, t, n) => {
	let r = n, i = n, a = [];
	e.forEach((e) => {
		let n = t.get(e);
		if (!n) throw Error(`Commit not found for key ${e}`);
		n.parents.length ? (r = Te(n), i = Math.max(r, i)) : a.push(n), Ee(n, r);
	}), r = i, a.forEach((e) => {
		De(e, r, n);
	}), e.forEach((e) => {
		let n = t.get(e);
		if (n?.parents.length) {
			let e = Se(n.parents);
			r = V.get(e).y - M, r <= i && (i = r);
			let t = B.get(n.branch).pos, a = r - j;
			V.set(n.id, {
				x: t,
				y: a
			});
		}
	});
}, "setParallelBTPos"), we = /* @__PURE__ */ i((e) => {
	let t = Y(e.parents.filter((e) => e !== null));
	if (!t) throw Error(`Closest parent not found for commit ${e.id}`);
	let n = V.get(t)?.y;
	if (n === void 0) throw Error(`Closest parent position not found for commit ${e.id}`);
	return n;
}, "findClosestParentPos"), Te = /* @__PURE__ */ i((e) => we(e) + M, "calculateCommitPosition"), Ee = /* @__PURE__ */ i((e, t) => {
	let n = B.get(e.branch);
	if (!n) throw Error(`Branch not found for commit ${e.id}`);
	let r = n.pos, i = t + j;
	return V.set(e.id, {
		x: r,
		y: i
	}), {
		x: r,
		y: i
	};
}, "setCommitPosition"), De = /* @__PURE__ */ i((e, t, n) => {
	let r = B.get(e.branch);
	if (!r) throw Error(`Branch not found for commit ${e.id}`);
	let i = t + n, a = r.pos;
	V.set(e.id, {
		x: a,
		y: i
	});
}, "setRootPosition"), Oe = /* @__PURE__ */ i((e, t, n, r, i, a) => {
	let { theme: o } = m(), s = I.has(o ?? ""), c = R.has(o ?? ""), l = xe.has(o ?? "");
	if (a === x.HIGHLIGHT) e.append("rect").attr("x", n.x - 10 + (s ? 3 : 0)).attr("y", n.y - 10 + (s ? 3 : 0)).attr("width", s ? 14 : 20).attr("height", s ? 14 : 20).attr("class", `commit ${t.id} commit-highlight${z(i, F, c)} ${r}-outer`), e.append("rect").attr("x", n.x - 6 + (s ? 2 : 0)).attr("y", n.y - 6 + (s ? 2 : 0)).attr("width", s ? 8 : 12).attr("height", s ? 8 : 12).attr("class", `commit ${t.id} commit${z(i, F, c)} ${r}-inner`);
	else if (a === x.CHERRY_PICK) e.append("circle").attr("cx", n.x).attr("cy", n.y).attr("r", s ? 7 : 10).attr("class", `commit ${t.id} ${r}`), e.append("circle").attr("cx", n.x - 3).attr("cy", n.y + 2).attr("r", s ? 2.5 : 2.75).attr("fill", l ? "#000000" : "#fff").attr("class", `commit ${t.id} ${r}`), e.append("circle").attr("cx", n.x + 3).attr("cy", n.y + 2).attr("r", s ? 2.5 : 2.75).attr("fill", l ? "#000000" : "#fff").attr("class", `commit ${t.id} ${r}`), e.append("line").attr("x1", n.x + 3).attr("y1", n.y + 1).attr("x2", n.x).attr("y2", n.y - 5).attr("stroke", l ? "#000000" : "#fff").attr("class", `commit ${t.id} ${r}`), e.append("line").attr("x1", n.x - 3).attr("y1", n.y + 1).attr("x2", n.x).attr("y2", n.y - 5).attr("stroke", l ? "#000000" : "#fff").attr("class", `commit ${t.id} ${r}`);
	else {
		let o = e.append("circle");
		if (o.attr("cx", n.x), o.attr("cy", n.y), o.attr("r", s ? 7 : 10), o.attr("class", `commit ${t.id} commit${z(i, F, c)}`), a === x.MERGE) {
			let a = e.append("circle");
			a.attr("cx", n.x), a.attr("cy", n.y), a.attr("r", s ? 5 : 6), a.attr("class", `commit ${r} ${t.id} commit${z(i, F, c)}`);
		}
		if (a === x.REVERSE) {
			let a = e.append("path"), o = s ? 4 : 5;
			a.attr("d", `M ${n.x - o},${n.y - o}L${n.x + o},${n.y + o}M${n.x - o},${n.y + o}L${n.x + o},${n.y - o}`).attr("class", `commit ${r} ${t.id} commit${z(i, F, c)}`);
		}
	}
}, "drawCommitBullet"), ke = /* @__PURE__ */ i((e, t, n, r, i) => {
	if (t.type !== x.CHERRY_PICK && (t.customId && t.type === x.MERGE || t.type !== x.MERGE) && i.showCommitLabel) {
		let a = e.append("g"), o = a.insert("rect").attr("class", "commit-label-bkg"), s = a.append("text").attr("x", r).attr("y", n.y + 25).attr("class", "commit-label").text(t.id), c = s.node()?.getBBox();
		if (c && (o.attr("x", n.posWithOffset - c.width / 2 - P).attr("y", n.y + 13.5).attr("width", c.width + 2 * P).attr("height", c.height + 2 * P), K === "TB" || K === "BT" ? (o.attr("x", n.x - (c.width + 4 * N + 5)).attr("y", n.y - 12), s.attr("x", n.x - (c.width + 4 * N)).attr("y", n.y + c.height - 12)) : s.attr("x", n.posWithOffset - c.width / 2), i.rotateCommitLabel)) {
			if (K === "TB" || K === "BT") s.attr("transform", "rotate(-45, " + n.x + ", " + n.y + ")"), o.attr("transform", "rotate(-45, " + n.x + ", " + n.y + ")");
			else {
				let e = -7.5 - (c.width + 10) / 25 * 9.5, t = 10 + c.width / 25 * 8.5;
				a.attr("transform", "translate(" + e + ", " + t + ") rotate(-45, " + r + ", " + n.y + ")");
			}
		}
	}
}, "drawCommitLabel"), Ae = /* @__PURE__ */ i((e, t, n, r) => {
	if (t.tags.length > 0) {
		let i = 0, a = 0, o = 0, s = [];
		for (let r of t.tags.reverse()) {
			let t = e.insert("polygon"), c = e.append("circle"), l = e.append("text").attr("y", n.y - 16 - i).attr("class", "tag-label").text(r), u = l.node()?.getBBox();
			if (!u) throw Error("Tag bbox not found");
			a = Math.max(a, u.width), o = Math.max(o, u.height), l.attr("x", n.posWithOffset - u.width / 2), s.push({
				tag: l,
				hole: c,
				rect: t,
				yOffset: i
			}), i += 20;
		}
		for (let { tag: e, hole: t, rect: i, yOffset: c } of s) {
			let s = o / 2, l = n.y - 19.2 - c;
			if (i.attr("class", "tag-label-bkg").attr("points", `
      ${r - a / 2 - N / 2},${l + P}  
      ${r - a / 2 - N / 2},${l - P}
      ${n.posWithOffset - a / 2 - N},${l - s - P}
      ${n.posWithOffset + a / 2 + N},${l - s - P}
      ${n.posWithOffset + a / 2 + N},${l + s + P}
      ${n.posWithOffset - a / 2 - N},${l + s + P}`), t.attr("cy", l).attr("cx", r - a / 2 + N / 2).attr("r", 1.5).attr("class", "tag-hole"), K === "TB" || K === "BT") {
				let o = r + c;
				i.attr("class", "tag-label-bkg").attr("points", `
        ${n.x},${o + 2}
        ${n.x},${o - 2}
        ${n.x + j},${o - s - 2}
        ${n.x + j + a + 4},${o - s - 2}
        ${n.x + j + a + 4},${o + s + 2}
        ${n.x + j},${o + s + 2}`).attr("transform", "translate(12,12) rotate(45, " + n.x + "," + r + ")"), t.attr("cx", n.x + N / 2).attr("cy", o).attr("transform", "translate(12,12) rotate(45, " + n.x + "," + r + ")"), e.attr("x", n.x + 5).attr("y", o + 3).attr("transform", "translate(14,14) rotate(45, " + n.x + "," + r + ")");
			}
		}
	}
}, "drawCommitTags"), je = /* @__PURE__ */ i((e) => {
	switch (e.customType ?? e.type) {
		case x.NORMAL: return "commit-normal";
		case x.REVERSE: return "commit-reverse";
		case x.HIGHLIGHT: return "commit-highlight";
		case x.MERGE: return "commit-merge";
		case x.CHERRY_PICK: return "commit-cherry-pick";
		default: return "commit-normal";
	}
}, "getCommitClassType"), Me = /* @__PURE__ */ i((e, t, n, r) => {
	let i = {
		x: 0,
		y: 0
	};
	if (e.parents.length > 0) {
		let n = Y(e.parents);
		if (n) {
			let a = r.get(n) ?? i;
			return t === "TB" ? a.y + M : t === "BT" ? (r.get(e.id) ?? i).y - M : a.x + M;
		}
	} else return t === "TB" ? H : t === "BT" ? (r.get(e.id) ?? i).y - M : 0;
	return 0;
}, "calculatePosition"), Ne = /* @__PURE__ */ i((e, t, n) => {
	let r = K === "BT" && n ? t : t + j, i = B.get(e.branch)?.pos, a = K === "TB" || K === "BT" ? B.get(e.branch)?.pos : r;
	if (a === void 0 || i === void 0) throw Error(`Position were undefined for commit ${e.id}`);
	let o = I.has(m().theme ?? "");
	return {
		x: a,
		y: K === "TB" || K === "BT" ? r : i + (o ? L / 2 + 1 : -2),
		posWithOffset: r
	};
}, "getCommitPosition"), X = /* @__PURE__ */ i((e, t, n, r) => {
	let a = e.append("g").attr("class", "commit-bullets"), o = e.append("g").attr("class", "commit-labels"), s = K === "TB" || K === "BT" ? H : 0, c = [...t.keys()], l = r.parallelCommits ?? !1, u = /* @__PURE__ */ i((e, n) => {
		let r = t.get(e)?.seq, i = t.get(n)?.seq;
		return r !== void 0 && i !== void 0 ? r - i : 0;
	}, "sortKeys"), d = c.sort(u);
	K === "BT" && (l && Ce(d, t, s), d = d.reverse()), d.forEach((e) => {
		let i = t.get(e);
		if (!i) throw Error(`Commit not found for key ${e}`);
		l && (s = Me(i, K, s, V));
		let c = Ne(i, s, l);
		if (n) {
			let e = je(i), t = i.customType ?? i.type, n = B.get(i.branch)?.index ?? 0;
			Oe(a, i, c, e, n, t), ke(o, i, c, s, r), Ae(o, i, c, s);
		}
		K === "TB" || K === "BT" ? V.set(i.id, {
			x: c.x,
			y: c.posWithOffset
		}) : V.set(i.id, {
			x: c.posWithOffset,
			y: c.y
		}), s = K === "BT" && l ? s + M : s + M + j, s > G && (G = s);
	});
}, "drawCommits"), Pe = /* @__PURE__ */ i((e, t, n, r, a) => {
	let o = (K === "TB" || K === "BT" ? n.x < r.x : n.y < r.y) ? t.branch : e.branch, s = /* @__PURE__ */ i((e) => e.branch === o, "isOnBranchToGetCurve"), c = /* @__PURE__ */ i((n) => n.seq > e.seq && n.seq < t.seq, "isBetweenCommits");
	return [...a.values()].some((e) => c(e) && s(e));
}, "shouldRerouteArrow"), Z = /* @__PURE__ */ i((e, t, n = 0) => {
	let r = e + Math.abs(e - t) / 2;
	return n > 5 ? r : W.every((e) => Math.abs(e - r) >= 10) ? (W.push(r), r) : Z(e, t - Math.abs(e - t) / 5, n + 1);
}, "findLane"), Fe = /* @__PURE__ */ i((e, t, n, r) => {
	let { theme: i } = m(), a = R.has(i ?? ""), o = V.get(t.id), s = V.get(n.id);
	if (o === void 0 || s === void 0) throw Error(`Commit positions not found for commits ${t.id} and ${n.id}`);
	let c = Pe(t, n, o, s, r), l = "", u = "", d = 0, f = 0, p = B.get(n.branch)?.index;
	n.type === x.MERGE && t.id !== n.parents[0] && (p = B.get(t.branch)?.index);
	let h;
	if (c) {
		l = "A 10 10, 0, 0, 0,", u = "A 10 10, 0, 0, 1,", d = 10, f = 10;
		let e = o.y < s.y ? Z(o.y, s.y) : Z(s.y, o.y), n = o.x < s.x ? Z(o.x, s.x) : Z(s.x, o.x);
		K === "TB" ? o.x < s.x ? h = `M ${o.x} ${o.y} L ${n - d} ${o.y} ${u} ${n} ${o.y + f} L ${n} ${s.y - d} ${l} ${n + f} ${s.y} L ${s.x} ${s.y}` : (p = B.get(t.branch)?.index, h = `M ${o.x} ${o.y} L ${n + d} ${o.y} ${l} ${n} ${o.y + f} L ${n} ${s.y - d} ${u} ${n - f} ${s.y} L ${s.x} ${s.y}`) : K === "BT" ? o.x < s.x ? h = `M ${o.x} ${o.y} L ${n - d} ${o.y} ${l} ${n} ${o.y - f} L ${n} ${s.y + d} ${u} ${n + f} ${s.y} L ${s.x} ${s.y}` : (p = B.get(t.branch)?.index, h = `M ${o.x} ${o.y} L ${n + d} ${o.y} ${u} ${n} ${o.y - f} L ${n} ${s.y + d} ${l} ${n - f} ${s.y} L ${s.x} ${s.y}`) : o.y < s.y ? h = `M ${o.x} ${o.y} L ${o.x} ${e - d} ${l} ${o.x + f} ${e} L ${s.x - d} ${e} ${u} ${s.x} ${e + f} L ${s.x} ${s.y}` : (p = B.get(t.branch)?.index, h = `M ${o.x} ${o.y} L ${o.x} ${e + d} ${u} ${o.x + f} ${e} L ${s.x - d} ${e} ${l} ${s.x} ${e - f} L ${s.x} ${s.y}`);
	} else l = "A 20 20, 0, 0, 0,", u = "A 20 20, 0, 0, 1,", d = 20, f = 20, K === "TB" ? (o.x < s.x && (h = n.type === x.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${s.y - d} ${l} ${o.x + f} ${s.y} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${s.x - d} ${o.y} ${u} ${s.x} ${o.y + f} L ${s.x} ${s.y}`), o.x > s.x && (l = "A 20 20, 0, 0, 0,", u = "A 20 20, 0, 0, 1,", d = 20, f = 20, h = n.type === x.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${s.y - d} ${u} ${o.x - f} ${s.y} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${s.x + d} ${o.y} ${l} ${s.x} ${o.y + f} L ${s.x} ${s.y}`), o.x === s.x && (h = `M ${o.x} ${o.y} L ${s.x} ${s.y}`)) : K === "BT" ? (o.x < s.x && (h = n.type === x.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${s.y + d} ${u} ${o.x + f} ${s.y} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${s.x - d} ${o.y} ${l} ${s.x} ${o.y - f} L ${s.x} ${s.y}`), o.x > s.x && (l = "A 20 20, 0, 0, 0,", u = "A 20 20, 0, 0, 1,", d = 20, f = 20, h = n.type === x.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${s.y + d} ${l} ${o.x - f} ${s.y} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${s.x + d} ${o.y} ${u} ${s.x} ${o.y - f} L ${s.x} ${s.y}`), o.x === s.x && (h = `M ${o.x} ${o.y} L ${s.x} ${s.y}`)) : (o.y < s.y && (h = n.type === x.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${s.x - d} ${o.y} ${u} ${s.x} ${o.y + f} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${o.x} ${s.y - d} ${l} ${o.x + f} ${s.y} L ${s.x} ${s.y}`), o.y > s.y && (h = n.type === x.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${s.x - d} ${o.y} ${l} ${s.x} ${o.y - f} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${o.x} ${s.y + d} ${u} ${o.x + f} ${s.y} L ${s.x} ${s.y}`), o.y === s.y && (h = `M ${o.x} ${o.y} L ${s.x} ${s.y}`));
	if (h === void 0) throw Error("Line definition not found");
	e.append("path").attr("d", h).attr("class", "arrow arrow" + z(p, F, a));
}, "drawArrow"), Ie = /* @__PURE__ */ i((e, t) => {
	let n = e.append("g").attr("class", "commit-arrows");
	[...t.keys()].forEach((e) => {
		let r = t.get(e);
		r.parents && r.parents.length > 0 && r.parents.forEach((e) => {
			Fe(n, t.get(e), r, t);
		});
	});
}, "drawArrows"), Le = /* @__PURE__ */ i((e, t, n, r) => {
	let { look: i, theme: a, themeVariables: o } = m(), { dropShadow: s, THEME_COLOR_LIMIT: c } = o, l = I.has(a ?? ""), u = R.has(a ?? ""), d = e.append("g");
	t.forEach((e, t) => {
		let a = z(t, l ? c : F, u), o = B.get(e.name)?.pos;
		if (o === void 0) throw Error(`Position not found for branch ${e.name}`);
		let f = K === "TB" || K === "BT" ? o : l ? o + L / 2 + 1 : o - 2, p = d.append("line");
		p.attr("x1", 0), p.attr("y1", f), p.attr("x2", G), p.attr("y2", f), p.attr("class", "branch branch" + a), K === "TB" ? (p.attr("y1", H), p.attr("x1", o), p.attr("y2", G), p.attr("x2", o)) : K === "BT" && (p.attr("y1", G), p.attr("x1", o), p.attr("y2", H), p.attr("x2", o)), W.push(f);
		let m = e.name, h = J(m), g = d.insert("rect"), _ = d.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + a);
		_.node().appendChild(h);
		let v = h.getBBox(), y = l ? 0 : 4, b = l ? 16 : 0, x = l ? L : 0;
		i === "neo" && g.attr("data-look", "neo"), g.attr("class", "branchLabelBkg label" + a).attr("style", i === "neo" ? `filter:${l ? `url(#${r}-drop-shadow)` : s}` : "").attr("rx", y).attr("ry", y).attr("x", -v.width - 4 - (n.rotateCommitLabel === !0 ? 30 : 0)).attr("y", -v.height / 2 + 10).attr("width", v.width + 18 + b).attr("height", v.height + 4 + x), _.attr("transform", "translate(" + (-v.width - 14 - (n.rotateCommitLabel === !0 ? 30 : 0) + b / 2) + ", " + (f - v.height / 2 - 2) + ")"), K === "TB" ? (g.attr("x", o - v.width / 2 - 10).attr("y", 0), _.attr("transform", "translate(" + (o - v.width / 2 - 5) + ", 0)"), l && (g.attr("transform", `translate(${-b / 2 - 3}, ${-x - 10})`), _.attr("transform", "translate(" + (o - v.width / 2 - 5) + ", " + (-x * 2 + 7) + ")"))) : K === "BT" ? (g.attr("x", o - v.width / 2 - 10).attr("y", G), _.attr("transform", "translate(" + (o - v.width / 2 - 5) + ", " + G + ")"), l && (g.attr("transform", `translate(${-b / 2 - 3}, ${x + 10})`), _.attr("transform", "translate(" + (o - v.width / 2 - 5) + ", " + (G + x * 2 + 4) + ")"))) : g.attr("transform", "translate(-19, " + (f - 12 - x / 2) + ")");
	});
}, "drawBranches"), Re = /* @__PURE__ */ i(function(e, t, n, r, i) {
	return B.set(e, {
		pos: t,
		index: n
	}), t += 50 + (i ? 40 : 0) + (K === "TB" || K === "BT" ? r.width / 2 : 0), t;
}, "setBranchPosition"), ze = { draw: /* @__PURE__ */ i(function(t, n, r, i) {
	q(), p.debug("in gitgraph renderer", t + "\n", "id:", n, r);
	let o = i.db;
	if (!o.getConfig) {
		p.error("getConfig method is not available on db");
		return;
	}
	let s = o.getConfig(), c = s.rotateCommitLabel ?? !1;
	U = o.getCommits();
	let l = o.getBranchesAsObjArray();
	K = o.getDirection();
	let u = e(`[id="${n}"]`), { look: d, theme: f, themeVariables: h } = m(), { useGradient: g, gradientStart: v, gradientStop: y, filterColor: b } = h;
	if (g) {
		let e = u.append("defs").append("linearGradient").attr("id", n + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
		e.append("stop").attr("offset", "0%").attr("stop-color", v).attr("stop-opacity", 1), e.append("stop").attr("offset", "100%").attr("stop-color", y).attr("stop-opacity", 1);
	}
	d === "neo" && I.has(f ?? "") && u.append("defs").append("filter").attr("id", n + "-drop-shadow").attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", b);
	let x = 0;
	l.forEach((e, t) => {
		let n = J(e.name), r = u.append("g"), i = r.insert("g").attr("class", "branchLabel"), a = i.insert("g").attr("class", "label branch-label");
		a.node()?.appendChild(n);
		let o = n.getBBox();
		x = Re(e.name, x, t, o, c), a.remove(), i.remove(), r.remove();
	}), X(u, U, !1, s), s.showBranches && Le(u, l, s, n), Ie(u, U), X(u, U, !0, s), a.insertTitle(u, "gitTitleText", s.titleTopMargin ?? 0, o.getDiagramTitle()), _(void 0, u, s.diagramPadding, s.useMaxWidth);
}, "draw") }, Q = 8, $ = /* @__PURE__ */ new Set([
	"redux",
	"redux-dark",
	"redux-color",
	"redux-dark-color"
]), Be = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), Ve = /* @__PURE__ */ new Set(["neo", "neo-dark"]), He = /* @__PURE__ */ new Set([
	"dark",
	"redux-dark",
	"redux-dark-color",
	"neo-dark"
]), Ue = /* @__PURE__ */ new Set([
	"redux",
	"redux-dark",
	"redux-color",
	"redux-dark-color",
	"neo",
	"neo-dark"
]), We = /* @__PURE__ */ i((e) => {
	let { svgId: t } = e, n = "";
	if (e.useGradient && t) for (let r = 0; r < e.THEME_COLOR_LIMIT; r++) n += `
      .label${r}  { fill: ${e.mainBkg}; stroke: url(${t}-gradient); stroke-width: ${e.strokeWidth};}
             `;
	return n;
}, "genGitGraphGradient"), Ge = /* @__PURE__ */ i((e) => {
	let { theme: n, themeVariables: r } = t(), { borderColorArray: i } = r, a = $.has(n);
	if (Ve.has(n)) {
		let t = "";
		for (let n = 0; n < e.THEME_COLOR_LIMIT; n++) if (n === 0) t += `
        .branch-label${n} { fill: ${e.nodeBorder};}
        .commit${n} { stroke: ${e.nodeBorder};   }
        .commit-highlight${n} { stroke: ${e.nodeBorder}; fill: ${e.nodeBorder}; }
        .arrow${n} { stroke: ${e.nodeBorder}; }
        .commit-bullets { fill: ${e.nodeBorder}; }
        .commit-cherry-pick${n} { stroke: ${e.nodeBorder}; }
        ${We(e)}`;
		else {
			let r = n % Q;
			t += `
        .branch-label${n} { fill: ${e["gitBranchLabel" + r]}; }
        .commit${n} { stroke: ${e["git" + r]}; fill: ${e["git" + r]}; }
        .commit-highlight${n} { stroke: ${e["gitInv" + r]}; fill: ${e["gitInv" + r]}; }
        .arrow${n} { stroke: ${e["git" + r]}; }
        `;
		}
		return t;
	}
	if (Be.has(n)) {
		let t = "";
		for (let r = 0; r < e.THEME_COLOR_LIMIT; r++) if (r === 0) t += `
        .branch-label${r} { fill: ${e.nodeBorder}; ${a ? `font-weight:${e.noteFontWeight}` : ""} }
        .commit${r} { stroke: ${e.nodeBorder}; }
        .commit-highlight${r} { stroke: ${e.nodeBorder}; fill: ${e.mainBkg}; }
        .label${r}  { fill: ${e.mainBkg}; stroke: ${e.nodeBorder}; stroke-width: ${e.strokeWidth}; ${a ? `font-weight:${e.noteFontWeight}` : ""} }
        .arrow${r} { stroke: ${e.nodeBorder}; }
        .commit-bullets { fill: ${e.nodeBorder}; }
        `;
		else {
			let o = r % i.length;
			t += `
        .branch-label${r} { fill: ${e.nodeBorder}; ${a ? `font-weight:${e.noteFontWeight}` : ""} }
        .commit${r} { stroke: ${i[o]}; fill: ${i[o]}; }
        .commit-highlight${r} { stroke: ${i[o]}; fill: ${i[o]}; }
        .label${r}  { fill: ${He.has(n) ? e.mainBkg : i[o]}; stroke: ${i[o]};  stroke-width: ${e.strokeWidth}; }
        .arrow${r} { stroke: ${i[o]}; }
        `;
		}
		return t;
	}
	{
		let t = "";
		for (let n = 0; n < e.THEME_COLOR_LIMIT; n++) t += `
        .branch-label${n} { fill: ${e.nodeBorder}; ${a ? `font-weight:${e.noteFontWeight}` : ""} }
        .commit${n} { stroke: ${e.nodeBorder};   }
        .commit-highlight${n} { stroke: ${e.nodeBorder}; fill: ${e.nodeBorder}; }
        .label${n}  { fill: ${e.mainBkg}; stroke: ${e.nodeBorder}; stroke-width: ${e.strokeWidth}; ${a ? `font-weight:${e.noteFontWeight}` : ""}}
        .arrow${n} { stroke: ${e.nodeBorder}; }
        .commit-bullets { fill: ${e.nodeBorder}; }
        .commit-cherry-pick${n} { stroke: ${e.nodeBorder}; }
        `;
		return t;
	}
}, "genColor"), Ke = /* @__PURE__ */ i((e) => `${Array.from({ length: e.THEME_COLOR_LIMIT }, (e, t) => t).map((t) => {
	let n = t % Q;
	return `
        .branch-label${t} { fill: ${e["gitBranchLabel" + n]}; }
        .commit${t} { stroke: ${e["git" + n]}; fill: ${e["git" + n]}; }
        .commit-highlight${t} { stroke: ${e["gitInv" + n]}; fill: ${e["gitInv" + n]}; }
        .label${t}  { fill: ${e["git" + n]}; }
        .arrow${t} { stroke: ${e["git" + n]}; }
        `;
}).join("\n")}`, "normalTheme"), qe = {
	parser: be,
	db: A,
	renderer: ze,
	styles: /* @__PURE__ */ i((e) => {
		let { theme: n } = t(), r = Ue.has(n);
		return `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  
  ${r ? Ge(e) : Ke(e)}

  .branch {
    stroke-width: ${e.strokeWidth};
    stroke: ${e.commitLineColor ?? e.lineColor};
    stroke-dasharray:  ${r ? "4 2" : "2"};
  }
  .commit-label { font-size: ${e.commitLabelFontSize}; fill: ${r ? e.nodeBorder : e.commitLabelColor}; ${r ? `font-weight:${e.noteFontWeight};` : ""}}
  .commit-label-bkg { font-size: ${e.commitLabelFontSize}; fill: ${r ? "transparent" : e.commitLabelBackground}; opacity: ${r ? "" : .5};  }
  .tag-label { font-size: ${e.tagLabelFontSize}; fill: ${e.tagLabelColor};}
  .tag-label-bkg { fill: ${r ? e.mainBkg : e.tagLabelBackground}; stroke: ${r ? e.nodeBorder : e.tagLabelBorder}; ${r ? `filter:${e.dropShadow}` : ""}  }
  .tag-hole { fill: ${e.textColor}; }

  .commit-merge {
    stroke: ${r ? e.mainBkg : e.primaryColor};
    fill: ${r ? e.mainBkg : e.primaryColor};
  }
  .commit-reverse {
    stroke: ${r ? e.mainBkg : e.primaryColor};
    fill: ${r ? e.mainBkg : e.primaryColor};
    stroke-width: ${r ? e.strokeWidth : 3};
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${r ? e.mainBkg : e.primaryColor};
    fill: ${r ? e.mainBkg : e.primaryColor};
  }

  .arrow {
    /* Intentional: neo themes keep the bold 8px arrow (like classic themes); only redux-geometry themes use the thinner options.strokeWidth. */
    stroke-width: ${$.has(n) ? e.strokeWidth : 8};
    stroke-linecap: round;
    fill: none
  }
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;
	}, "getStyles")
};
//#endregion
export { qe as diagram };

//# sourceMappingURL=gitGraphDiagram-WWUBYQGX-Be6VzpzJ-oPIHs7ft.js.map