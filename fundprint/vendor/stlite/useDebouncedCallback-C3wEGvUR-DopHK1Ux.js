import { ds as e, ms as t, os as n } from "./index-DqqVGYCD-Dk2VCZX4.js";
//#region ../react/build/useDebouncedCallback-C3wEGvUR.js
var r = /* @__PURE__ */ t(e(), 1);
function i(e, t) {
	let i = (0, r.useRef)(), a = (0, r.useRef)(e);
	(0, r.useEffect)(() => {
		a.current = e;
	}, [e]);
	let o = (0, r.useCallback)(() => {
		i.current &&= (a.current(...i.current), void 0);
	}, []), { clear: s, restart: c } = n(o, t, { autoStart: !1 }), l = (0, r.useCallback)(() => {
		s(), i.current = void 0;
	}, [s]), u = (0, r.useCallback)(() => {
		s(), o();
	}, [s, o]);
	return {
		debouncedCallback: (0, r.useCallback)((...e) => {
			i.current = e, c();
		}, [c]),
		cancel: l,
		flush: u
	};
}
//#endregion
export { i as t };

//# sourceMappingURL=useDebouncedCallback-C3wEGvUR-DopHK1Ux.js.map