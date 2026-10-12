import { D as e } from "./index-DqqVGYCD-Dk2VCZX4.js";
//#region ../react/build/useCollator-CNcdvxty.js
var t = /* @__PURE__ */ new Map();
function n(n) {
	let { locale: r } = e(), i = r + (n ? Object.entries(n).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (t.has(i)) return t.get(i);
	let a = new Intl.Collator(r, n);
	return t.set(i, a), a;
}
//#endregion
export { n as t };

//# sourceMappingURL=useCollator-CNcdvxty-D6dkE7NW.js.map