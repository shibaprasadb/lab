import { ds as e, hn as t, ms as n } from "./index-DqqVGYCD-Dk2VCZX4.js";
//#region ../react/build/useFormReset-YBB8mYmk.js
var r = /* @__PURE__ */ n(e(), 1);
function i(e, n, i) {
	let a = t((e) => {
		i && !e.defaultPrevented && i(n);
	});
	(0, r.useEffect)(() => {
		let t = e?.current?.form;
		return t?.addEventListener("reset", a), () => {
			t?.removeEventListener("reset", a);
		};
	}, [e]);
}
//#endregion
export { i as t };

//# sourceMappingURL=useFormReset-YBB8mYmk-BgnZIeew.js.map