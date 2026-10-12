import { Hn as e, Zt as t, pt as n, z as r } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
import { i } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
//#region ../react/build/infoDiagram-27XIBGKW-Blfekc7S.js
var a = { parse: /* @__PURE__ */ e(async (e) => {
	let t = await i("info", e);
	n.debug(t);
}, "parse") }, o = { version: "11.17.2" }, s = {
	parser: a,
	db: { getVersion: /* @__PURE__ */ e(() => o.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ e((e, i, a) => {
		n.debug("rendering info diagram\n" + e);
		let o = r(i);
		t(o, 100, 400, !0), o.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${a}`);
	}, "draw") }
};
//#endregion
export { s as diagram };

//# sourceMappingURL=infoDiagram-27XIBGKW-Blfekc7S-DlJvoh6Z.js.map