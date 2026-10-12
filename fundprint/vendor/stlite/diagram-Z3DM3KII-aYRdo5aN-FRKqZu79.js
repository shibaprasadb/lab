import { At as e, En as t, Hn as n, Pn as r, Qt as i, Zt as a, cn as o, in as s, lr as c, mr as l, pt as u, ut as d, x as f, z as p } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
import { t as m } from "./chunk-JWPE2WC7-BoR8QvRp-D1Xio7hJ.js";
import { i as h } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
//#region ../react/build/diagram-Z3DM3KII-aYRdo5aN.js
var g = d.packet, _, v = (_ = class {
	constructor() {
		this.packet = [], this.setAccTitle = r, this.getAccTitle = o, this.setDiagramTitle = f, this.getDiagramTitle = c, this.getAccDescription = l, this.setAccDescription = t;
	}
	getConfig() {
		let t = i({
			...g,
			...e().packet
		});
		return t.showBits && (t.paddingY += 10), t;
	}
	getPacket() {
		return this.packet;
	}
	pushWord(e) {
		e.length > 0 && this.packet.push(e);
	}
	clear() {
		s(), this.packet = [];
	}
}, n(_, "PacketDB"), _), y = 1e4, b = /* @__PURE__ */ n((e, t) => {
	m(e, t);
	let n = -1, r = [], i = 1, { bitsPerRow: a } = t.getConfig();
	for (let { start: o, end: s, bits: c, label: l } of e.blocks) {
		if (o !== void 0 && s !== void 0 && s < o) throw Error(`Packet block ${o} - ${s} is invalid. End must be greater than start.`);
		if (o ??= n + 1, o !== n + 1) throw Error(`Packet block ${o} - ${s ?? o} is not contiguous. It should start from ${n + 1}.`);
		if (c === 0) throw Error(`Packet block ${o} is invalid. Cannot have a zero bit field.`);
		for (s ??= o + (c ?? 1) - 1, c ??= s - o + 1, n = s, u.debug(`Packet block ${o} - ${n} with label ${l}`); r.length <= a + 1 && t.getPacket().length < y;) {
			let [e, n] = x({
				start: o,
				end: s,
				bits: c,
				label: l
			}, i, a);
			if (r.push(e), e.end + 1 === i * a && (t.pushWord(r), r = [], i++), !n) break;
			({start: o, end: s, bits: c, label: l} = n);
		}
	}
	t.pushWord(r);
}, "populate"), x = /* @__PURE__ */ n((e, t, n) => {
	if (e.start === void 0) throw Error("start should have been set during first phase");
	if (e.end === void 0) throw Error("end should have been set during first phase");
	if (e.start > e.end) throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);
	if (e.end + 1 <= t * n) return [e, void 0];
	let r = t * n - 1, i = t * n;
	return [{
		start: e.start,
		end: r,
		label: e.label,
		bits: r - e.start
	}, {
		start: i,
		end: e.end,
		label: e.label,
		bits: e.end - i
	}];
}, "getNextFittingBlock"), S = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ n(async (e) => {
		let t = await h("packet", e), n = S.parser?.yy;
		if (!(n instanceof v)) throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		u.debug(t), b(t, n);
	}, "parse")
}, C = /* @__PURE__ */ n((e, t, n, r) => {
	let i = r.db, o = i.getConfig(), { rowHeight: s, paddingY: c, bitWidth: l, bitsPerRow: u } = o, d = i.getPacket(), f = i.getDiagramTitle(), m = s + c, h = m * (d.length + 1) - (f ? 0 : s), g = l * u + 2, _ = p(t);
	_.attr("viewBox", `0 0 ${g} ${h}`), a(_, h, g, o.useMaxWidth);
	for (let [e, t] of d.entries()) w(_, t, e, o);
	_.append("text").text(f).attr("x", g / 2).attr("y", h - m / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), w = /* @__PURE__ */ n((e, t, n, { rowHeight: r, paddingX: i, paddingY: a, bitWidth: o, bitsPerRow: s, showBits: c }) => {
	let l = e.append("g"), u = n * (r + a) + a;
	for (let e of t) {
		let t = e.start % s * o + 1, n = (e.end - e.start + 1) * o - i;
		if (l.append("rect").attr("x", t).attr("y", u).attr("width", n).attr("height", r).attr("class", "packetBlock"), l.append("text").attr("x", t + n / 2).attr("y", u + r / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(e.label), !c) continue;
		let a = e.end === e.start, d = u - 2;
		l.append("text").attr("x", t + (a ? n / 2 : 0)).attr("y", d).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", a ? "middle" : "start").text(e.start), a || l.append("text").attr("x", t + n).attr("y", d).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(e.end);
	}
}, "drawWord"), T = { draw: C }, E = {
	byteFontSize: "10px",
	startByteColor: "black",
	endByteColor: "black",
	labelColor: "black",
	labelFontSize: "12px",
	titleColor: "black",
	titleFontSize: "14px",
	blockStrokeColor: "black",
	blockStrokeWidth: "1",
	blockFillColor: "#efefef"
}, D = {
	parser: S,
	get db() {
		return new v();
	},
	renderer: T,
	styles: /* @__PURE__ */ n(({ packet: e } = {}) => {
		let t = i(E, e);
		return `
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`;
	}, "styles")
};
//#endregion
export { D as diagram };

//# sourceMappingURL=diagram-Z3DM3KII-aYRdo5aN-FRKqZu79.js.map