import { Qt as e, an as t, ct as n, ds as r, ht as i, it as a, ms as o, nt as s, ot as c, rt as l, st as u, tt as d, z as f } from "./index-DqqVGYCD-Dk2VCZX4.js";
import { a as p, n as m } from "./useFormValidation-C9F-maHa-OS_D_SMy.js";
import { r as h, t as g } from "./Input-BfPr4K7r-ry_u1GYX.js";
import { t as _ } from "./Autocomplete-yBl0QZl8-hXjNvyFc.js";
import { t as v } from "./useTextField-CRF6f00r-Db7G00v2.js";
//#region ../react/build/TextField-DiJ-XhOU.js
var y = /* @__PURE__ */ o(r(), 1), b = /* @__PURE__ */ (0, y.createContext)({}), x = /* @__PURE__ */ (0, y.createContext)(null), S = /* @__PURE__ */ e(function(e, r) {
	[e, r] = s(e, r, x);
	let { validationBehavior: o } = n(p) || {}, S = e.validationBehavior ?? o ?? "native", C = (0, y.useRef)(null);
	[e, C] = s(e, C, _);
	let [w, T] = a(!e["aria-label"] && !e["aria-labelledby"]), [E, D] = (0, y.useState)("input"), { labelProps: O, inputProps: k, descriptionProps: A, errorMessageProps: j, ...M } = v({
		...u(e),
		inputElementType: E,
		label: T,
		validationBehavior: S
	}, C), N = (0, y.useCallback)((e) => {
		C.current = e, e && D(e instanceof HTMLTextAreaElement ? "textarea" : "input");
	}, [C]), P = l({
		...e,
		values: {
			isDisabled: e.isDisabled || !1,
			isInvalid: M.isInvalid,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1
		},
		defaultClassName: "react-aria-TextField"
	}), F = i(e, { global: !0 });
	return delete F.id, /* @__PURE__ */ y.createElement(c.div, {
		...F,
		...P,
		ref: r,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": M.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}, /* @__PURE__ */ y.createElement(d, { values: [
		[f, {
			...O,
			ref: w
		}],
		[h, {
			...k,
			ref: N
		}],
		[b, {
			...k,
			ref: N
		}],
		[g, {
			role: "presentation",
			isInvalid: M.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[t, { slots: {
			description: A,
			errorMessage: j
		} }],
		[m, M]
	] }, P.children));
});
//#endregion
export { S as t };

//# sourceMappingURL=TextField-DiJ-XhOU-Do2OmlTW.js.map