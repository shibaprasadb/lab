import "./transform-B2AI7qp--hg0kwf7R.js";
import { Hn as e, pt as t } from "./mermaid.core-Cb8MGLj3-DYKH6pXD.js";
import { n, r, t as i } from "./chunk-SVP7TREG-PFssh3Kk-Bw4ZgJse.js";
import { t as a } from "./chunk-JWPE2WC7-BoR8QvRp-D1Xio7hJ.js";
import { a as o, r as s } from "./cynefin-OW5HDTMX--IlWkCwH-DhMvmN4k.js";
//#region ../react/build/railroadDiagram-O6MQD6OU-D1M-7DVU.js
var c = s().Railroad.parser.LangiumParser, l = /* @__PURE__ */ e((e) => {
	switch (e.$type) {
		case "RailroadTerminalExpr": return {
			type: "terminal",
			value: e.value
		};
		case "RailroadNonTerminalExpr": return {
			type: "nonterminal",
			name: e.name
		};
		case "RailroadSpecialExpr": return {
			type: "special",
			text: e.text
		};
		case "RailroadSequenceExpr": {
			let t = e.elements.map(l);
			return t.length === 1 ? t[0] : {
				type: "sequence",
				elements: t
			};
		}
		case "RailroadChoiceExpr": {
			let t = e.alternatives.map(l);
			return t.length === 1 ? t[0] : {
				type: "choice",
				alternatives: t
			};
		}
		case "RailroadOptionalExpr": return {
			type: "optional",
			element: l(e.element)
		};
		case "RailroadOneOrMoreExpr": return {
			type: "repetition",
			element: l(e.element),
			min: 1,
			max: 1 / 0
		};
		case "RailroadZeroOrMoreExpr": return {
			type: "repetition",
			element: l(e.element),
			min: 0,
			max: 1 / 0
		};
		default: throw Error(`Unsupported railroad expression: ${e.$type}`);
	}
}, "transformExpression"), u = /* @__PURE__ */ e((e) => ({
	name: e.name,
	definition: l(e.definition)
}), "transformRule"), d = /* @__PURE__ */ e((e) => {
	a(e, n), e.title && n.setTitle(e.title), e.rules.map((e) => n.addRule(u(e)));
}, "populateDb"), f = {
	parser: {
		parse: /* @__PURE__ */ e((e) => {
			n.clear(), t.debug("[Railroad Parser] Starting Langium parse");
			let r = c.parse(e);
			if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) throw new o(r);
			let i = r.value;
			t.debug("[Railroad Parser] Parsed rules:", i.rules.length), d(i), t.debug("[Railroad Parser] Parse complete");
		}, "parse"),
		parser: { yy: n }
	},
	db: n,
	renderer: r,
	styles: i
};
//#endregion
export { f as diagram };

//# sourceMappingURL=railroadDiagram-O6MQD6OU-D1M-7DVU-BZ1DNmYD.js.map