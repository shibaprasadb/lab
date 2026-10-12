import "./transform-B2AI7qp--hg0kwf7R.js";
import { Hn as e, pt as t } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
import { n, r, t as i } from "./chunk-SVP7TREG-PFssh3Kk-Bw4ZgJse.js";
import { t as a } from "./chunk-JWPE2WC7-BoR8QvRp-D1Xio7hJ.js";
import { a as o, s } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
//#region ../react/build/pegDiagram-XKGWAZYB-CHVJGQ17.js
var c = s().RailroadPeg.parser.LangiumParser, l = /* @__PURE__ */ e((e) => {
	let t = e.alternatives.map(u);
	return t.length === 1 ? t[0] : {
		type: "choice",
		alternatives: t
	};
}, "transformOrderedChoice"), u = /* @__PURE__ */ e((e) => {
	let t = e.elements.map(d);
	return t.length === 1 ? t[0] : {
		type: "sequence",
		elements: t
	};
}, "transformSequence"), d = /* @__PURE__ */ e((e) => {
	let t = p(e.suffix);
	return e.operator ? {
		type: "special",
		text: e.operator === "&" ? `&${f(t)}` : `!${f(t)}`
	} : t;
}, "transformPrefix"), f = /* @__PURE__ */ e((e) => {
	switch (e.type) {
		case "terminal": return `"${e.value}"`;
		case "nonterminal": return e.name;
		case "special": return e.text;
		default: return "(...)";
	}
}, "nodeToLabel"), p = /* @__PURE__ */ e((e) => {
	let t = m(e.primary);
	if (!e.operator) return t;
	switch (e.operator) {
		case "?": return {
			type: "optional",
			element: t
		};
		case "*": return {
			type: "repetition",
			element: t,
			min: 0,
			max: 1 / 0
		};
		case "+": return {
			type: "repetition",
			element: t,
			min: 1,
			max: 1 / 0
		};
		default: throw Error(`Unsupported PEG suffix operator: ${e.operator}`);
	}
}, "transformSuffix"), m = /* @__PURE__ */ e((e) => {
	switch (e.$type) {
		case "PegLiteral": return {
			type: "terminal",
			value: e.value
		};
		case "PegIdentifier": return {
			type: "nonterminal",
			name: e.name
		};
		case "PegGroup": return l(e.element);
		case "PegAny": return {
			type: "special",
			text: e.dot
		};
		default: throw Error(`Unsupported PEG primary node: ${e.$type}`);
	}
}, "transformPrimary"), h = /* @__PURE__ */ e((e) => ({
	name: e.name,
	definition: l(e.definition)
}), "transformRule"), g = /* @__PURE__ */ e((e) => {
	a(e, n), e.title && n.setTitle(e.title), e.rules.map((e) => n.addRule(h(e)));
}, "populateDb"), _ = {
	parser: {
		parse: /* @__PURE__ */ e((e) => {
			n.clear(), t.debug("[PEG Parser] Starting Langium parse");
			let r = c.parse(e);
			if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) throw new o(r);
			let i = r.value;
			t.debug("[PEG Parser] Parsed rules:", i.rules.length), g(i), t.debug("[PEG Parser] Parse complete");
		}, "parse"),
		parser: { yy: n }
	},
	db: n,
	renderer: r,
	styles: i
};
//#endregion
export { _ as diagram };

//# sourceMappingURL=pegDiagram-XKGWAZYB-CHVJGQ17-4RN7r6SA.js.map