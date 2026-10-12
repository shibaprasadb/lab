import { Ba as e, Ca as t, Di as n, za as r } from "./index-DqqVGYCD-Dk2VCZX4.js";
import { t as i } from "./styled-components-DUN7Fbs3-9EOBagZ-.js";
//#region ../react/build/InputInstructions-C_Cl1-k3.js
var a = e`
  50% {
    color: rgba(0, 0, 0, 0);
  }
`, o = /* @__PURE__ */ n("span", { target: "edlqvik0" })(({ includeDot: e, shouldBlink: t, theme: n }) => ({
	...e ? { "&::before": {
		opacity: 1,
		content: "\"•\"",
		animation: "none",
		color: n.colors.grayTextColor,
		margin: `0 ${n.spacing.twoXS}`
	} } : {},
	...t ? {
		color: n.colors.redTextColor,
		animationName: `${a}`,
		animationDuration: "0.5s",
		animationIterationCount: 5
	} : {}
}), ""), s = ({ dirty: e, value: n, inForm: a, maxLength: s, className: c, type: l = "single", allowEnterToSubmit: u = !0 }) => {
	let d = [], f = (e, t = !1) => {
		d.push(/* @__PURE__ */ r.jsx(o, {
			includeDot: d.length > 0,
			shouldBlink: t,
			children: e
		}, d.length));
	};
	if (u) {
		let e = a ? "submit form" : "apply";
		l === "multiline" ? f(`Press ${t() ? "⌘" : "Ctrl"}+Enter to ${e}`) : l === "single" && f(`Press Enter to ${e}`);
	}
	return s && (l !== "chat" || e) && f(`${n.length}/${s}`, e && n.length >= s), /* @__PURE__ */ r.jsx(i, {
		"data-testid": "InputInstructions",
		className: c,
		children: d
	});
};
//#endregion
export { s as t };

//# sourceMappingURL=InputInstructions-C_Cl1-k3-CIkl0h2d.js.map