import { Hn as e, Zt as t, pt as n } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
//#region ../react/build/chunk-POPQ4Y6H-C9KHcfdv.js
var r = /* @__PURE__ */ e((e, r, o, s) => {
	e.attr("class", o);
	let { width: c, height: l, x: u, y: d } = i(e, r);
	t(e, l, c, s);
	let f = a(u, d, c, l, r);
	e.attr("viewBox", f), n.debug(`viewBox configured: ${f} with padding: ${r}`);
}, "setupViewPortForSVG"), i = /* @__PURE__ */ e((e, t) => {
	let n = e.node()?.getBBox() || {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		width: n.width + t * 2,
		height: n.height + t * 2,
		x: n.x,
		y: n.y
	};
}, "calculateDimensionsWithPadding"), a = /* @__PURE__ */ e((e, t, n, r, i) => `${e - i} ${t - i} ${n} ${r}`, "createViewBox");
//#endregion
export { r as t };

//# sourceMappingURL=chunk-POPQ4Y6H-C9KHcfdv-SxPIXaZc.js.map