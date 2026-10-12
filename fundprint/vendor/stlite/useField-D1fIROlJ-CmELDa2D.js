import { M as e, Nt as t, i as n } from "./index-DqqVGYCD-Dk2VCZX4.js";
//#region ../react/build/useField-D1fIROlJ.js
function r(r) {
	let { description: i, errorMessage: a, isInvalid: o, validationState: s } = r, { labelProps: c, fieldProps: l } = n(r), u = e([
		!!i,
		!!a,
		o,
		s
	]), d = e([
		!!i,
		!!a,
		o,
		s
	]);
	return l = t(l, { "aria-describedby": [
		u,
		d,
		r["aria-describedby"]
	].filter(Boolean).join(" ") || void 0 }), {
		labelProps: c,
		fieldProps: l,
		descriptionProps: { id: u },
		errorMessageProps: { id: d }
	};
}
//#endregion
export { r as t };

//# sourceMappingURL=useField-D1fIROlJ-CmELDa2D.js.map