import { Cn as e, Ga as t, Ln as n, Qo as r, Sn as i, bn as a, ds as o, ms as s, ts as c, wn as l, xn as u, za as d } from "./index-DqqVGYCD-Dk2VCZX4.js";
//#region ../react/build/Button-DTL-mK_j.js
var f = /* @__PURE__ */ s(o(), 1);
function p(o) {
	let { disabled: s, element: p, widgetMgr: m, fragmentId: h } = o, g = p.shortcut || void 0, _ = c(p.wrap), v = !_ && !p.help, y = u.SECONDARY;
	p.type === "primary" ? y = u.PRIMARY : p.type === "tertiary" && (y = u.TERTIARY);
	let b = (0, f.useCallback)(() => {
		s || m.setTriggerValue(p.id, {
			formId: p.formId,
			fragmentId: h,
			fromUser: !0
		});
	}, [
		s,
		m,
		p,
		h
	]);
	return r({
		shortcut: g,
		disabled: s,
		onActivate: b
	}), /* @__PURE__ */ d.jsx(l, {
		className: "stButton",
		"data-testid": "stButton",
		children: /* @__PURE__ */ d.jsx(e, {
			help: p.help,
			containerWidth: !0,
			children: /* @__PURE__ */ d.jsx(a, {
				kind: y,
				size: i.SMALL,
				disabled: s,
				containerWidth: !0,
				onClick: b,
				children: /* @__PURE__ */ d.jsx(n, {
					icon: p.icon,
					iconPosition: t(p.iconPosition),
					label: p.label,
					shortcut: g,
					wrap: _,
					addTitleTooltip: v
				})
			})
		})
	});
}
var m = (0, f.memo)(p);
//#endregion
export { m as default };

//# sourceMappingURL=Button-DTL-mK_j-zKdSkVVw.js.map