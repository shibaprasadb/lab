import { Di as e, Pr as t, ds as n, ms as r, wi as i, wr as a, za as o, zr as s } from "./index-DqqVGYCD-Dk2VCZX4.js";
import { t as c } from "./range-5yG1zTjU-DXlK9Pls.js";
import { b as l, f as u, h as d, t as f, u as p, w as m } from "./pandasStylerUtils-BjG_XmLl-BY6ZeDBZ.js";
//#region ../react/build/Table-CqFRurms.js
var h = /* @__PURE__ */ r(n(), 1), g = /* @__PURE__ */ e("div", { target: "e1artoc06" })(({ theme: e }) => ({
	fontSize: e.fontSizes.sm,
	fontFamily: e.genericFonts.bodyFont,
	lineHeight: e.lineHeights.small,
	captionSide: "bottom",
	height: "100%",
	width: "100%",
	maxWidth: "100%",
	overflow: "clip",
	display: "block"
}), ""), _ = /* @__PURE__ */ e("div", { target: "e1artoc05" })(({ theme: e }) => ({
	fontFamily: e.genericFonts.bodyFont,
	fontSize: e.fontSizes.sm,
	paddingTop: e.spacing.sm,
	paddingBottom: 0,
	color: e.colors.fadedText60,
	textAlign: "left",
	wordWrap: "break-word",
	display: "inline-block"
}), ""), v = /* @__PURE__ */ e("div", { target: "e1artoc04" })(({ theme: e, borderMode: t, hasScrollableHeight: n }) => ({
	border: t === s.BorderMode.ALL ? `${e.sizes.borderWidth} solid ${e.colors.dataframeBorderColor}` : "none",
	borderRadius: e.radii.default,
	overflow: "auto",
	width: "100%",
	maxWidth: "100%",
	height: n ? "100%" : void 0,
	position: "relative",
	display: "block",
	overscrollBehaviorX: "contain"
}), ""), y = /* @__PURE__ */ e("table", { target: "e1artoc03" })(({ theme: e, useContentWidth: t, hasScrollableWidth: n }) => ({
	color: e.colors.bodyText,
	borderSpacing: 0,
	display: "inline-table",
	verticalAlign: "top",
	minWidth: t || n ? void 0 : "100%"
}), ""), b = (e, n = s.BorderMode.ALL, r = !1) => ({
	borderBottom: n === s.BorderMode.NONE ? "none" : `${e.sizes.borderWidth} solid ${e.colors.dataframeBorderColor}`,
	"tbody tr:last-child &": { borderBottom: n === s.BorderMode.ALL || n === s.BorderMode.HORIZONTAL ? "none" : void 0 },
	borderRight: n === s.BorderMode.ALL ? `${e.sizes.borderWidth} solid ${e.colors.dataframeBorderColor}` : "none",
	"&:last-child": {
		borderRight: n === s.BorderMode.ALL ? "none" : void 0,
		paddingRight: n === s.BorderMode.NONE ? "0" : e.spacing.xs
	},
	verticalAlign: "middle",
	padding: `${e.spacing.twoXS} ${e.spacing.xs}`,
	"&:not(:first-of-type)": { paddingLeft: n === s.BorderMode.NONE || n === s.BorderMode.HORIZONTAL ? e.spacing.lg : e.spacing.xs },
	"&:first-of-type": { paddingLeft: n === s.BorderMode.NONE ? "0" : e.spacing.xs },
	fontWeight: e.fontWeights.normal,
	[`${t}, ${t} :is(p, ol, ul, dl)`]: { fontSize: "inherit" },
	...r ? {
		whiteSpace: "nowrap",
		maxWidth: e.sizes.tableColumnMaxWidth,
		overflow: "hidden",
		textOverflow: "ellipsis"
	} : {
		whiteSpace: "nowrap",
		[`${t}`]: {
			display: "inline-block",
			width: "fit-content",
			maxWidth: e.sizes.tableColumnMaxWidth,
			whiteSpace: "normal",
			overflowWrap: "normal",
			wordBreak: "normal",
			overflowY: "hidden",
			verticalAlign: "top",
			margin: 0
		},
		[`${t}:has(pre)`]: {
			display: "block",
			width: "100%",
			maxWidth: "none"
		},
		[`${t} p`]: {
			whiteSpace: "normal",
			overflowWrap: "normal",
			wordBreak: "normal",
			margin: 0
		}
	}
}), x = /* @__PURE__ */ e("td", { target: "e1artoc02" })(({ theme: e, borderMode: t, truncateContent: n }) => b(e, t, n), ""), S = {
	corner: 3,
	header: 2,
	index: 1
}, C = /* @__PURE__ */ e("th", { target: "e1artoc01" })(({ theme: e, borderMode: t, stickyType: n, stickyTopOffset: r, stickyLeftOffset: i, truncateContent: a }) => {
	let o = {
		...b(e, t, a),
		textAlign: "inherit",
		color: e.colors.fadedText60,
		"&:first-of-type": { paddingLeft: t === s.BorderMode.NONE ? "0" : e.spacing.sm },
		"&:not(:first-of-type)": { paddingLeft: t === s.BorderMode.NONE || t === s.BorderMode.HORIZONTAL ? e.spacing.lg : e.spacing.sm }
	};
	if (n) {
		let t = {
			position: "sticky",
			backgroundColor: e.colors.bgColor
		};
		return (n === "header" || n === "corner") && (t.top = r ?? 0), (n === "index" || n === "corner") && (t.left = i ?? 0), t.zIndex = S[n], {
			...o,
			...t
		};
	}
	return o;
}, ""), w = /* @__PURE__ */ e(x, { target: "e1artoc00" })(({ theme: e }) => ({
	color: e.colors.gray70,
	fontStyle: "italic",
	fontSize: e.fontSizes.sm,
	textAlign: "center"
}), ""), T = "1.8125rem";
function E(e, t) {
	return e * t;
}
function D(e, t) {
	if (e && t) return "corner";
	if (e) return "header";
	if (t) return "index";
}
function O(e) {
	let { element: t, elementHash: n } = e, r = (0, h.useMemo)(() => {
		if (!t.arrowData) throw Error("Table element is missing arrowData");
		return new f(t.arrowData);
	}, [n, t.arrowData]), { cssId: a, cssStyles: s, caption: l } = r.styler ?? {}, { numHeaderRows: u, numDataRows: d, numColumns: p, numIndexColumns: m } = r.dimensions, b = c(d), x = e.element.borderMode, S = e.element.hideIndex ?? !1, C = e.element.hideHeader ?? !1, D = S ? 0 : m, O = S ? p - m : p, j = !!e.heightConfig?.pixelHeight, M = !!e.widthConfig?.pixelWidth, N = !!e.widthConfig?.useContent, P = j && !C, F = M && D === 1, I = M, L = (0, h.useMemo)(() => c(u).map((e) => E(e, i(T))), [u]), R = [0], z = t.alt?.trim() || void 0;
	return /* @__PURE__ */ o.jsxs(g, {
		className: "stTable",
		"data-testid": "stTable",
		children: [
			s && /* @__PURE__ */ o.jsx("style", { children: s }),
			/* @__PURE__ */ o.jsx(v, {
				borderMode: x,
				hasScrollableHeight: j,
				tabIndex: j || M ? 0 : void 0,
				role: j || M ? "region" : void 0,
				"aria-label": j || M ? "Scrollable table" : void 0,
				children: /* @__PURE__ */ o.jsxs(y, {
					id: a,
					"data-testid": "stTableStyledTable",
					useContentWidth: N,
					hasScrollableWidth: M,
					"aria-label": z,
					children: [u > 0 && !C && k(r, x, P, F, m, L, R, I, S), /* @__PURE__ */ o.jsx("tbody", { children: b.length === 0 ? /* @__PURE__ */ o.jsx("tr", { children: /* @__PURE__ */ o.jsx(w, {
						"data-testid": "stTableStyledEmptyTableCell",
						colSpan: O || 1,
						borderMode: x,
						truncateContent: I,
						children: "empty"
					}) }) : b.map((e) => A(r, e, p, x, F, m, R, I, S)) })]
				})
			}),
			l && /* @__PURE__ */ o.jsx(_, { children: l })
		]
	});
}
function k(e, t, n, r, i, c, l, f, p) {
	let m = t === s.BorderMode.NONE || t === s.BorderMode.HORIZONTAL;
	return /* @__PURE__ */ o.jsx("thead", { children: u(e).map((s, u) => /* @__PURE__ */ o.jsx("tr", { children: s.map((s, h) => {
		if (p && h < i) return null;
		let g = "inherit";
		if (m && e.dimensions.numDataRows > 0) {
			let { contentType: t } = e.getCell(0, h);
			g = d(t) ? "right" : "left";
		}
		let _ = h < i, v = n, y = r && _, b = v ? c[u] : void 0, x = y ? l[h] : void 0, S = D(v, y);
		return /* @__PURE__ */ o.jsx(C, {
			className: s.cssClass,
			scope: "col",
			borderMode: t,
			stickyType: S,
			stickyTopOffset: b,
			stickyLeftOffset: x,
			truncateContent: f,
			style: { textAlign: g },
			children: /* @__PURE__ */ o.jsx(a, {
				source: s.name || "\xA0",
				allowHTML: !1,
				inheritFont: !0
			})
		}, h);
	}) }, u)) });
}
function A(e, t, n, r, i, a, s, l, u) {
	return /* @__PURE__ */ o.jsx("tr", { children: c(n).map((n) => u && n < a ? null : j(e, t, n, r, i, a, s, l)) }, t);
}
function j(e, t, n, r, i, s, c, u) {
	let { type: f, content: h, contentType: g } = e.getCell(t, n), _ = p(e, t, n), v = _?.displayContent || m(h, g), y = !1, b = { textAlign: d(g) ? "right" : "left" };
	switch (v?.endsWith("<span class=\"pd-t\"></span>") && (v = v.replace(/<span class="pd-t"><\/span>$/, ""), y = !0), f) {
		case l.INDEX: {
			let e = i && n < s ? "index" : void 0, t = e === "index" ? c[n] : void 0;
			return /* @__PURE__ */ o.jsxs(C, {
				scope: "row",
				id: _?.cssId,
				className: _?.cssClass,
				borderMode: r,
				stickyType: e,
				stickyLeftOffset: t,
				truncateContent: u,
				children: [y && /* @__PURE__ */ o.jsx("span", { className: "pd-t" }), /* @__PURE__ */ o.jsx(a, {
					source: v || "\xA0",
					allowHTML: !1,
					inheritFont: !0
				})]
			}, n);
		}
		case l.DATA: return /* @__PURE__ */ o.jsxs(x, {
			id: _?.cssId,
			className: _?.cssClass,
			style: b,
			borderMode: r,
			truncateContent: u,
			children: [y && /* @__PURE__ */ o.jsx("span", { className: "pd-t" }), /* @__PURE__ */ o.jsx(a, {
				source: v || "\xA0",
				allowHTML: !1,
				inheritFont: !0
			})]
		}, n);
		default: throw Error(`Cannot parse type "${f}".`);
	}
}
var M = (0, h.memo)(O);
//#endregion
export { T as FALLBACK_HEADER_ROW_OFFSET_REM, O as Table, M as default };

//# sourceMappingURL=Table-CqFRurms-DsZZ1ePV.js.map