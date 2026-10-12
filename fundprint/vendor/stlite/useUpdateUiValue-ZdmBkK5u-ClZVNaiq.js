import { Ta as e, ds as t, ms as n } from "./index-DqqVGYCD-Dk2VCZX4.js";
//#region ../react/build/useUpdateUiValue-ZdmBkK5u.js
var r = /* @__PURE__ */ n(t(), 1);
function i({ formId: t, maxChars: n, setDirty: i, setUiValue: a, setValueWithSource: o, additionalAction: s }) {
	return (0, r.useCallback)((r) => {
		let { value: c } = r.target;
		n !== 0 && c.length > n || (i(!0), a(c), e({ formId: t }) && o({
			value: c,
			fromUser: !0
		}), s && s(c));
	}, [
		t,
		n,
		i,
		a,
		o,
		s
	]);
}
function a(e, t, n, i) {
	(0, r.useEffect)(() => {
		i || e !== t && n(e);
	}, [
		e,
		t,
		i,
		n
	]);
}
//#endregion
export { a as n, i as t };

//# sourceMappingURL=useUpdateUiValue-ZdmBkK5u-ClZVNaiq.js.map