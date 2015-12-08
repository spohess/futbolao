/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
"use strict";

!(function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	} : b(a);
})("undefined" != typeof window ? window : undefined, function (a, b) {
	var c = [],
	    d = c.slice,
	    e = c.concat,
	    f = c.push,
	    g = c.indexOf,
	    h = {},
	    i = h.toString,
	    j = h.hasOwnProperty,
	    k = {},
	    l = a.document,
	    m = "2.1.4",
	    n = function n(a, b) {
		return new n.fn.init(a, b);
	},
	    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	    p = /^-ms-/,
	    q = /-([\da-z])/gi,
	    r = function r(a, b) {
		return b.toUpperCase();
	};n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
			return d.call(this);
		}, get: function get(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
		}, pushStack: function pushStack(a) {
			var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
		}, each: function each(a, b) {
			return n.each(this, a, b);
		}, map: function map(a) {
			return this.pushStack(n.map(this, function (b, c) {
				return a.call(b, c, b);
			}));
		}, slice: function slice() {
			return this.pushStack(d.apply(this, arguments));
		}, first: function first() {
			return this.eq(0);
		}, last: function last() {
			return this.eq(-1);
		}, eq: function eq(a) {
			var b = this.length,
			    c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
		}, end: function end() {
			return this.prevObject || this.constructor(null);
		}, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
		var a,
		    b,
		    c,
		    d,
		    e,
		    f,
		    g = arguments[0] || {},
		    h = 1,
		    i = arguments.length,
		    j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));return g;
	}, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
			throw new Error(a);
		}, noop: function noop() {}, isFunction: function isFunction(a) {
			return "function" === n.type(a);
		}, isArray: Array.isArray, isWindow: function isWindow(a) {
			return null != a && a === a.window;
		}, isNumeric: function isNumeric(a) {
			return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
		}, isPlainObject: function isPlainObject(a) {
			return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
		}, isEmptyObject: function isEmptyObject(a) {
			var b;for (b in a) return !1;return !0;
		}, type: function type(a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
		}, globalEval: function globalEval(a) {
			var b,
			    c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
		}, camelCase: function camelCase(a) {
			return a.replace(p, "ms-").replace(q, r);
		}, nodeName: function nodeName(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
		}, each: function each(a, b, c) {
			var d,
			    e = 0,
			    f = a.length,
			    g = s(a);if (c) {
				if (g) {
					for (; f > e; e++) if ((d = b.apply(a[e], c), d === !1)) break;
				} else for (e in a) if ((d = b.apply(a[e], c), d === !1)) break;
			} else if (g) {
				for (; f > e; e++) if ((d = b.call(a[e], e, a[e]), d === !1)) break;
			} else for (e in a) if ((d = b.call(a[e], e, a[e]), d === !1)) break;return a;
		}, trim: function trim(a) {
			return null == a ? "" : (a + "").replace(o, "");
		}, makeArray: function makeArray(a, b) {
			var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
		}, inArray: function inArray(a, b, c) {
			return null == b ? -1 : g.call(b, a, c);
		}, merge: function merge(a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];return a.length = e, a;
		}, grep: function grep(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
		}, map: function map(a, b, c) {
			var d,
			    f = 0,
			    g = a.length,
			    h = s(a),
			    i = [];if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);else for (f in a) d = b(a[f], f, c), null != d && i.push(d);return e.apply([], i);
		}, guid: 1, proxy: function proxy(a, b) {
			var c, e, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
				return a.apply(b || this, e.concat(d.call(arguments)));
			}, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
		}, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		h["[object " + b + "]"] = b.toLowerCase();
	});function s(a) {
		var b = "length" in a && a.length,
		    c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	}var t = (function (a) {
		var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l,
		    m,
		    n,
		    o,
		    p,
		    q,
		    r,
		    s,
		    t,
		    u = "sizzle" + 1 * new Date(),
		    v = a.document,
		    w = 0,
		    x = 0,
		    y = ha(),
		    z = ha(),
		    A = ha(),
		    B = function B(a, b) {
			return a === b && (l = !0), 0;
		},
		    C = 1 << 31,
		    D = ({}).hasOwnProperty,
		    E = [],
		    F = E.pop,
		    G = E.push,
		    H = E.push,
		    I = E.slice,
		    J = function J(a, b) {
			for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;return -1;
		},
		    K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    L = "[\\x20\\t\\r\\n\\f]",
		    M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		    N = M.replace("w", "w#"),
		    O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
		    P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
		    Q = new RegExp(L + "+", "g"),
		    R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
		    S = new RegExp("^" + L + "*," + L + "*"),
		    T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
		    U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
		    V = new RegExp(P),
		    W = new RegExp("^" + N + "$"),
		    X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
		    Y = /^(?:input|select|textarea|button)$/i,
		    Z = /^h\d$/i,
		    $ = /^[^{]+\{\s*\[native \w/,
		    _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    aa = /[+~]/,
		    ba = /'|\\/g,
		    ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
		    da = function da(a, b, c) {
			var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
		},
		    ea = function ea() {
			m();
		};try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
		} catch (fa) {
			H = { apply: E.length ? function (a, b) {
					G.apply(a, I.call(b));
				} : function (a, b) {
					var c = a.length,
					    d = 0;while (a[c++] = b[d++]);a.length = c - 1;
				} };
		}function ga(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;if (((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)) return d;if (!e && p) {
				if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
					if (9 === k) {
						if ((h = b.getElementById(j), !h || !h.parentNode)) return d;if (h.id === j) return d.push(h), d;
					} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
				} else {
					if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
				}if (c.qsa && (!q || !q.test(a))) {
					if ((s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase())) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) o[l] = s + ra(o[l]);w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
					}if (x) try {
						return H.apply(d, w.querySelectorAll(x)), d;
					} catch (y) {} finally {
						r || b.removeAttribute("id");
					}
				}
			}return i(a.replace(R, "$1"), b, d, e);
		}function ha() {
			var a = [];function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
			}return b;
		}function ia(a) {
			return a[u] = !0, a;
		}function ja(a) {
			var b = n.createElement("div");try {
				return !!a(b);
			} catch (c) {
				return !1;
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null;
			}
		}function ka(a, b) {
			var c = a.split("|"),
			    e = a.length;while (e--) d.attrHandle[c[e]] = b;
		}function la(a, b) {
			var c = b && a,
			    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
		}function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
			};
		}function na(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
			};
		}function oa(a) {
			return ia(function (b) {
				return b = +b, ia(function (c, d) {
					var e,
					    f = a([], c.length, b),
					    g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
				});
			});
		}function pa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a;
		}c = ga.support = {}, f = ga.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
		}, m = ga.setDocument = function (a) {
			var b,
			    e,
			    g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
				return a.className = "i", !a.getAttribute("className");
			}), c.getElementsByTagName = ja(function (a) {
				return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
			}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
				return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(ca, da);return function (a) {
					return a.getAttribute("id") === b;
				};
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(ca, da);return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
				};
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
			} : function (a, b) {
				var c,
				    d = [],
				    e = 0,
				    f = b.getElementsByTagName(a);if ("*" === a) {
					while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
				}return f;
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return p ? b.getElementsByClassName(a) : void 0;
			}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
			}), ja(function (a) {
				var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
				    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
			} : function (a, b) {
				if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
			} : function (a, b) {
				if (a === b) return l = !0, 0;var c,
				    d = 0,
				    e = a.parentNode,
				    f = b.parentNode,
				    h = [a],
				    i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) h.unshift(c);c = b;while (c = c.parentNode) i.unshift(c);while (h[d] === i[d]) d++;return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
			}, g) : n;
		}, ga.matches = function (a, b) {
			return ga(a, null, null, b);
		}, ga.matchesSelector = function (a, b) {
			if (((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))) try {
				var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
			} catch (e) {}return ga(b, n, null, [a]).length > 0;
		}, ga.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b);
		}, ga.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
			    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
		}, ga.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a);
		}, ga.uniqueSort = function (a) {
			var b,
			    d = [],
			    e = 0,
			    f = 0;if ((l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l)) {
				while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
			}return k = null, a;
		}, e = ga.getText = function (a) {
			var b,
			    c = "",
			    d = 0,
			    f = a.nodeType;if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
				} else if (3 === f || 4 === f) return a.nodeValue;
			} else while (b = a[d++]) c += e(b);return c;
		}, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
					return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
				}, CHILD: function CHILD(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
				}, PSEUDO: function PSEUDO(a) {
					var b,
					    c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
				} }, filter: { TAG: function TAG(a) {
					var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
						return !0;
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b;
					};
				}, CLASS: function CLASS(a) {
					var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
					});
				}, ATTR: function ATTR(a, b, c) {
					return function (d) {
						var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
					};
				}, CHILD: function CHILD(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
					    g = "last" !== a.slice(-4),
					    h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode;
					} : function (b, c, i) {
						var j,
						    k,
						    l,
						    m,
						    n,
						    o,
						    p = f !== g ? "nextSibling" : "previousSibling",
						    q = b.parentNode,
						    r = h && b.nodeName.toLowerCase(),
						    s = !i && !h;if (q) {
							if (f) {
								while (p) {
									l = b;while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
								}return !0;
							}if ((o = [g ? q.firstChild : q.lastChild], g && s)) {
								k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
									k[a] = [w, n, m];break;
								}
							} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;return m -= e, m === d || m % d === 0 && m / d >= 0;
						}
					};
				}, PSEUDO: function PSEUDO(a, b) {
					var c,
					    e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
						var d,
						    f = e(a, b),
						    g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
					}) : function (a) {
						return e(a, 0, c);
					}) : e;
				} }, pseudos: { not: ia(function (a) {
					var b = [],
					    c = [],
					    d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
						var f,
						    g = d(a, null, e, []),
						    h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
					};
				}), has: ia(function (a) {
					return function (b) {
						return ga(a, b).length > 0;
					};
				}), contains: ia(function (a) {
					return a = a.replace(ca, da), function (b) {
						return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
					};
				}), lang: ia(function (a) {
					return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
						var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
					};
				}), target: function target(b) {
					var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
				}, root: function root(a) {
					return a === o;
				}, focus: function focus(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
				}, enabled: function enabled(a) {
					return a.disabled === !1;
				}, disabled: function disabled(a) {
					return a.disabled === !0;
				}, checked: function checked(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
				}, selected: function selected(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
				}, empty: function empty(a) {
					for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;return !0;
				}, parent: function parent(a) {
					return !d.pseudos.empty(a);
				}, header: function header(a) {
					return Z.test(a.nodeName);
				}, input: function input(a) {
					return Y.test(a.nodeName);
				}, button: function button(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
				}, text: function text(a) {
					var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
				}, first: oa(function () {
					return [0];
				}), last: oa(function (a, b) {
					return [b - 1];
				}), eq: oa(function (a, b, c) {
					return [0 > c ? c + b : c];
				}), even: oa(function (a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);return a;
				}), odd: oa(function (a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);return a;
				}), lt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
				}), gt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
				}) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
			var c,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
			}return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
		};function ra(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
		}function sa(a, b, c) {
			var d = b.dir,
			    e = c && "parentNode" === d,
			    f = x++;return b.first ? function (b, c, f) {
				while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
			} : function (b, c, g) {
				var h,
				    i,
				    j = [w, f];if (g) {
					while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
				} else while (b = b[d]) if (1 === b.nodeType || e) {
					if ((i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)) return j[2] = h[2];if ((i[d] = j, j[2] = a(b, c, g))) return !0;
				}
			};
		}function ta(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
			} : a[0];
		}function ua(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);return c;
		}function va(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));return g;
		}function wa(a, b, c, d, e, f) {
			return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
				var j,
				    k,
				    l,
				    m = [],
				    n = [],
				    o = g.length,
				    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
				    q = !a || !f && b ? p : va(p, m, a, h, i),
				    r = c ? e || (f ? a : o || d) ? [] : g : q;if ((c && c(q, r, h, i), d)) {
					j = va(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
				}if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
						}k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
					}
				} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
			});
		}function xa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
				return a === b;
			}, h, !0), l = sa(function (a) {
				return J(b, a) > -1;
			}, h, !0), m = [function (a, c, d) {
				var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
			}]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
				if ((c = d.filter[a[i].type].apply(null, a[i].matches), c[u])) {
					for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
				}m.push(c);
			}return ta(m);
		}function ya(a, b) {
			var c = b.length > 0,
			    e = a.length > 0,
			    f = function f(_f, g, h, i, k) {
				var l,
				    m,
				    o,
				    p = 0,
				    q = "0",
				    r = _f && [],
				    s = [],
				    t = j,
				    u = _f || e && d.find.TAG("*", k),
				    v = w += null == t ? 1 : Math.random() || .1,
				    x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
					if (e && l) {
						m = 0;while (o = a[m++]) if (o(l, g, h)) {
							i.push(l);break;
						}k && (w = v);
					}c && ((l = !o && l) && p--, _f && r.push(l));
				}if ((p += q, c && q !== p)) {
					m = 0;while (o = b[m++]) o(r, s, g, h);if (_f) {
						if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));s = va(s);
					}H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
				}return k && (w = v, j = t), r;
			};return c ? ia(f) : f;
		}return h = ga.compile = function (a, b) {
			var c,
			    d = [],
			    e = [],
			    f = A[a + " "];if (!f) {
				b || (b = g(a)), c = b.length;while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, ya(e, d)), f.selector = a;
			}return f;
		}, i = ga.select = function (a, b, e, f) {
			var i,
			    j,
			    k,
			    l,
			    m,
			    n = "function" == typeof a && a,
			    o = !f && g(a = n.selector || a);if ((e = e || [], 1 === o.length)) {
				if ((j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type])) {
					if ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
				}i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
					if ((k = j[i], d.relative[l = k.type])) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
						if ((j.splice(i, 1), a = f.length && ra(j), !a)) return H.apply(e, f), e;break;
					}
				}
			}return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"));
		}), ja(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
		}) || ka("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
		}), c.attributes && ja(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
		}) || ka("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
		}), ja(function (a) {
			return null == a.getAttribute("disabled");
		}) || ka(K, function (a, b, c) {
			var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
		}), ga;
	})(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
	    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c;
		});if (b.nodeType) return n.grep(a, function (a) {
			return a === b !== c;
		});if ("string" == typeof b) {
			if (w.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
		}return n.grep(a, function (a) {
			return g.call(b, a) >= 0 !== c;
		});
	}n.filter = function (a, b, c) {
		var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
			return 1 === a.nodeType;
		}));
	}, n.fn.extend({ find: function find(a) {
			var b,
			    c = this.length,
			    d = [],
			    e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
				for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
			}));for (b = 0; c > b; b++) n.find(a, e[b], d);return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
		}, filter: function filter(a) {
			return this.pushStack(x(this, a || [], !1));
		}, not: function not(a) {
			return this.pushStack(x(this, a || [], !0));
		}, is: function is(a) {
			return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
		} });var y,
	    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	    A = n.fn.init = function (a, b) {
		var c, d;if (!a) return this;if ("string" == typeof a) {
			if ((c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
				if ((b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);return this;
			}return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
		}return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
	};A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
	    C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function dir(a, b, c) {
			var d = [],
			    e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
				if (e && n(a).is(c)) break;d.push(a);
			}return d;
		}, sibling: function sibling(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
		} }), n.fn.extend({ has: function has(a) {
			var b = n(a, this),
			    c = b.length;return this.filter(function () {
				for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
			});
		}, closest: function closest(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
				f.push(c);break;
			}return this.pushStack(f.length > 1 ? n.unique(f) : f);
		}, index: function index(a) {
			return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add: function add(a, b) {
			return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
		}, addBack: function addBack(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
		} });function D(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType);return a;
	}n.each({ parent: function parent(a) {
			var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
		}, parents: function parents(a) {
			return n.dir(a, "parentNode");
		}, parentsUntil: function parentsUntil(a, b, c) {
			return n.dir(a, "parentNode", c);
		}, next: function next(a) {
			return D(a, "nextSibling");
		}, prev: function prev(a) {
			return D(a, "previousSibling");
		}, nextAll: function nextAll(a) {
			return n.dir(a, "nextSibling");
		}, prevAll: function prevAll(a) {
			return n.dir(a, "previousSibling");
		}, nextUntil: function nextUntil(a, b, c) {
			return n.dir(a, "nextSibling", c);
		}, prevUntil: function prevUntil(a, b, c) {
			return n.dir(a, "previousSibling", c);
		}, siblings: function siblings(a) {
			return n.sibling((a.parentNode || {}).firstChild, a);
		}, children: function children(a) {
			return n.sibling(a.firstChild);
		}, contents: function contents(a) {
			return a.contentDocument || n.merge([], a.childNodes);
		} }, function (a, b) {
		n.fn[a] = function (c, d) {
			var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
		};
	});var E = /\S+/g,
	    F = {};function G(a) {
		var b = F[a] = {};return n.each(a.match(E) || [], function (a, c) {
			b[c] = !0;
		}), b;
	}n.Callbacks = function (a) {
		a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h = [],
		    i = !a.once && [],
		    j = function j(l) {
			for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
				b = !1;break;
			}d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
		},
		    k = { add: function add() {
				if (h) {
					var c = h.length;!(function g(b) {
						n.each(b, function (b, c) {
							var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
						});
					})(arguments), d ? f = h.length : b && (e = c, j(b));
				}return this;
			}, remove: function remove() {
				return h && n.each(arguments, function (a, b) {
					var c;while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
				}), this;
			}, has: function has(a) {
				return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
			}, empty: function empty() {
				return h = [], f = 0, this;
			}, disable: function disable() {
				return h = i = b = void 0, this;
			}, disabled: function disabled() {
				return !h;
			}, lock: function lock() {
				return i = void 0, b || k.disable(), this;
			}, locked: function locked() {
				return !i;
			}, fireWith: function fireWith(a, b) {
				return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
			}, fire: function fire() {
				return k.fireWith(this, arguments), this;
			}, fired: function fired() {
				return !!c;
			} };return k;
	}, n.extend({ Deferred: function Deferred(a) {
			var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
			    c = "pending",
			    d = { state: function state() {
					return c;
				}, always: function always() {
					return e.done(arguments).fail(arguments), this;
				}, then: function then() {
					var a = arguments;return n.Deferred(function (c) {
						n.each(b, function (b, f) {
							var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
								var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
							});
						}), a = null;
					}).promise();
				}, promise: function promise(a) {
					return null != a ? n.extend(a, d) : d;
				} },
			    e = {};return d.pipe = d.then, n.each(b, function (a, f) {
				var g = f[2],
				    h = f[3];d[f[1]] = g.add, h && g.add(function () {
					c = h;
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this;
				}, e[f[0] + "With"] = g.fireWith;
			}), d.promise(e), a && a.call(e, e), e;
		}, when: function when(a) {
			var b = 0,
			    c = d.call(arguments),
			    e = c.length,
			    f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
			    g = 1 === f ? a : n.Deferred(),
			    h = function h(a, b, c) {
				return function (e) {
					b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
				};
			},
			    i,
			    j,
			    k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;return f || g.resolveWith(k, c), g.promise();
		} });var H;n.fn.ready = function (a) {
		return n.ready.promise().done(a), this;
	}, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
			a ? n.readyWait++ : n.ready(!0);
		}, ready: function ready(a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
		} });function I() {
		l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
	}n.ready.promise = function (b) {
		return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
	}, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
		var h = 0,
		    i = a.length,
		    j = null == c;if ("object" === n.type(c)) {
			e = !0;for (h in c) n.access(a, b, h, c[h], !0, f, g);
		} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
			return j.call(n(a), c);
		})), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	};n.acceptData = function (a) {
		return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
	};function K() {
		Object.defineProperty(this.cache = {}, 0, { get: function get() {
				return {};
			} }), this.expando = n.expando + K.uid++;
	}K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function key(a) {
			if (!K.accepts(a)) return 0;var b = {},
			    c = a[this.expando];if (!c) {
				c = K.uid++;try {
					b[this.expando] = { value: c }, Object.defineProperties(a, b);
				} catch (d) {
					b[this.expando] = c, n.extend(a, b);
				}
			}return this.cache[c] || (this.cache[c] = {}), c;
		}, set: function set(a, b, c) {
			var d,
			    e = this.key(a),
			    f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) f[d] = b[d];return f;
		}, get: function get(a, b) {
			var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
		}, access: function access(a, b, c) {
			var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
		}, remove: function remove(a, b) {
			var c,
			    d,
			    e,
			    f = this.key(a),
			    g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
				n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) delete g[d[c]];
			}
		}, hasData: function hasData(a) {
			return !n.isEmptyObject(this.cache[a[this.expando]] || {});
		}, discard: function discard(a) {
			a[this.expando] && delete this.cache[a[this.expando]];
		} };var L = new K(),
	    M = new K(),
	    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    O = /([A-Z])/g;function P(a, b, c) {
		var d;if (void 0 === c && 1 === a.nodeType) if ((d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c)) {
			try {
				c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
			} catch (e) {}M.set(a, b, c);
		} else c = void 0;return c;
	}n.extend({ hasData: function hasData(a) {
			return M.hasData(a) || L.hasData(a);
		}, data: function data(a, b, c) {
			return M.access(a, b, c);
		}, removeData: function removeData(a, b) {
			M.remove(a, b);
		}, _data: function _data(a, b, c) {
			return L.access(a, b, c);
		}, _removeData: function _removeData(a, b) {
			L.remove(a, b);
		} }), n.fn.extend({ data: function data(a, b) {
			var c,
			    d,
			    e,
			    f = this[0],
			    g = f && f.attributes;if (void 0 === a) {
				if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
					c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));L.set(f, "hasDataAttrs", !0);
				}return e;
			}return "object" == typeof a ? this.each(function () {
				M.set(this, a);
			}) : J(this, function (b) {
				var c,
				    d = n.camelCase(a);if (f && void 0 === b) {
					if ((c = M.get(f, a), void 0 !== c)) return c;if ((c = M.get(f, d), void 0 !== c)) return c;if ((c = P(f, d, void 0), void 0 !== c)) return c;
				} else this.each(function () {
					var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
				});
			}, null, b, arguments.length > 1, null, !0);
		}, removeData: function removeData(a) {
			return this.each(function () {
				M.remove(this, a);
			});
		} }), n.extend({ queue: function queue(a, b, c) {
			var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
		}, dequeue: function dequeue(a, b) {
			b = b || "fx";var c = n.queue(a, b),
			    d = c.length,
			    e = c.shift(),
			    f = n._queueHooks(a, b),
			    g = function g() {
				n.dequeue(a, b);
			};"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
		}, _queueHooks: function _queueHooks(a, b) {
			var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
					L.remove(a, [b + "queue", c]);
				}) });
		} }), n.fn.extend({ queue: function queue(a, b) {
			var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
			});
		}, dequeue: function dequeue(a) {
			return this.each(function () {
				n.dequeue(this, a);
			});
		}, clearQueue: function clearQueue(a) {
			return this.queue(a || "fx", []);
		}, promise: function promise(a, b) {
			var c,
			    d = 1,
			    e = n.Deferred(),
			    f = this,
			    g = this.length,
			    h = function h() {
				--d || e.resolveWith(f, [f]);
			};"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return h(), e.promise(b);
		} });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	    R = ["Top", "Right", "Bottom", "Left"],
	    S = function S(a, b) {
		return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
	},
	    T = /^(?:checkbox|radio)$/i;!(function () {
		var a = l.createDocumentFragment(),
		    b = a.appendChild(l.createElement("div")),
		    c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	})();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
	    W = /^(?:mouse|pointer|contextmenu)|click/,
	    X = /^(?:focusinfocus|focusoutblur)$/,
	    Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
		return !0;
	}function $() {
		return !1;
	}function _() {
		try {
			return l.activeElement;
		} catch (a) {}
	}n.event = { global: {}, add: function add(a, b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    o,
			    p,
			    q,
			    r = L.get(a);if (r) {
				c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
					return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
				}), b = (b || "").match(E) || [""], j = b.length;while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
			}
		}, remove: function remove(a, b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    o,
			    p,
			    q,
			    r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;while (j--) if ((h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o)) {
					l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
				} else for (o in i) n.event.remove(a, o + b[j], c, d, !0);n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
			}
		}, trigger: function trigger(b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    k,
			    m,
			    o,
			    p = [d || l],
			    q = j.call(b, "type") ? b.type : b,
			    r = j.call(b, "namespace") ? b.namespace.split(".") : [];if ((g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1))) {
				if (!e && !o.noBubble && !n.isWindow(d)) {
					for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
				}f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
			}
		}, dispatch: function dispatch(a) {
			a = n.event.fix(a);var b,
			    c,
			    e,
			    f,
			    g,
			    h = [],
			    i = d.call(arguments),
			    j = (L.get(this, "events") || {})[a.type] || [],
			    k = n.event.special[a.type] || {};if ((i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1)) {
				h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
				}return k.postDispatch && k.postDispatch.call(this, a), a.result;
			}
		}, handlers: function handlers(a, b) {
			var c,
			    d,
			    e,
			    f,
			    g = [],
			    h = b.delegateCount,
			    i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
				for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);d.length && g.push({ elem: i, handlers: d });
			}return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
		}, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
			} }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
				var c,
				    d,
				    e,
				    f = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
			} }, fix: function fix(a) {
			if (a[n.expando]) return a;var b,
			    c,
			    d,
			    e = a.type,
			    f = a,
			    g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) c = d[b], a[c] = f[c];return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
		}, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
					return this !== _() && this.focus ? (this.focus(), !1) : void 0;
				}, delegateType: "focusin" }, blur: { trigger: function trigger() {
					return this === _() && this.blur ? (this.blur(), !1) : void 0;
				}, delegateType: "focusout" }, click: { trigger: function trigger() {
					return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
				}, _default: function _default(a) {
					return n.nodeName(a.target, "a");
				} }, beforeunload: { postDispatch: function postDispatch(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
				} } }, simulate: function simulate(a, b, c, d) {
			var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
		} }, n.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1);
	}, n.Event = function (a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
	}, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
			var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
		}, stopPropagation: function stopPropagation() {
			var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
		}, stopImmediatePropagation: function stopImmediatePropagation() {
			var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
		} }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
		n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
				var c,
				    d = this,
				    e = a.relatedTarget,
				    f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
			} };
	}), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
		var c = function c(a) {
			n.event.simulate(b, a.target, n.event.fix(a), !0);
		};n.event.special[b] = { setup: function setup() {
				var d = this.ownerDocument || this,
				    e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
			}, teardown: function teardown() {
				var d = this.ownerDocument || this,
				    e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
			} };
	}), n.fn.extend({ on: function on(a, b, c, d, e) {
			var f, g;if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);for (g in a) this.on(g, b, c, a[g], e);return this;
			}if ((null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)) d = $;else if (!d) return this;return 1 === e && (f = d, d = function (a) {
				return n().off(a), f.apply(this, arguments);
			}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
				n.event.add(this, a, d, c, b);
			});
		}, one: function one(a, b, c, d) {
			return this.on(a, b, c, d, 1);
		}, off: function off(a, b, c) {
			var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);return this;
			}return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
				n.event.remove(this, a, c, b);
			});
		}, trigger: function trigger(a, b) {
			return this.each(function () {
				n.event.trigger(a, b, this);
			});
		}, triggerHandler: function triggerHandler(a, b) {
			var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
		} });var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	    ba = /<([\w:]+)/,
	    ca = /<|&#?\w+;/,
	    da = /<(?:script|style|link)/i,
	    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    fa = /^$|\/(?:java|ecma)script/i,
	    ga = /^true\/(.*)/,
	    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	    ia = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;function ja(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
	}function ka(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	}function la(a) {
		var b = ga.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	}function ma(a, b) {
		for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
	}function na(a, b) {
		var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
			if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
			}M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
		}
	}function oa(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
	}function pa(a, b) {
		var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
	}n.extend({ clone: function clone(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h = a.cloneNode(!0),
			    i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);else na(a, h);return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
		}, buildFragment: function buildFragment(a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if ((e = a[m], e || 0 === e)) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
				f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];while (j--) f = f.lastChild;n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
			} else l.push(b.createTextNode(e));k.textContent = "", m = 0;while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
				j = 0;while (e = f[j++]) fa.test(e.type || "") && c.push(e);
			}return k;
		}, cleanData: function cleanData(a) {
			for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
					if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);L.cache[e] && delete L.cache[e];
				}delete M.cache[c[M.expando]];
			}
		} }), n.fn.extend({ text: function text(a) {
			return J(this, function (a) {
				return void 0 === a ? n.text(this) : this.empty().each(function () {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
				});
			}, null, a, arguments.length);
		}, append: function append() {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);b.appendChild(a);
				}
			});
		}, prepend: function prepend() {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);b.insertBefore(a, b.firstChild);
				}
			});
		}, before: function before() {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this);
			});
		}, after: function after() {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
			});
		}, remove: function remove(a, b) {
			for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));return this;
		}, empty: function empty() {
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");return this;
		}, clone: function clone(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return n.clone(this, a, b);
			});
		}, html: function html(a) {
			return J(this, function (a) {
				var b = this[0] || {},
				    c = 0,
				    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(aa, "<$1></$2>");try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);b = 0;
					} catch (e) {}
				}b && this.empty().append(a);
			}, null, a, arguments.length);
		}, replaceWith: function replaceWith() {
			var a = arguments[0];return this.domManip(arguments, function (b) {
				a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
			}), a && (a.length || a.nodeType) ? this : this.remove();
		}, detach: function detach(a) {
			return this.remove(a, !0);
		}, domManip: function domManip(a, b) {
			a = e.apply([], a);var c,
			    d,
			    f,
			    g,
			    h,
			    i,
			    j = 0,
			    l = this.length,
			    m = this,
			    o = l - 1,
			    p = a[0],
			    q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
				var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
			});if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
			}return this;
		} }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
		n.fn[a] = function (a) {
			for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());return this.pushStack(d);
		};
	});var qa,
	    ra = {};function sa(b, c) {
		var d,
		    e = n(c.createElement(b)).appendTo(c.body),
		    f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return e.detach(), f;
	}function ta(a) {
		var b = l,
		    c = ra[a];return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
	}var ua = /^margin/,
	    va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
	    wa = function wa(b) {
		return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
	};function xa(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.style;return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
	}function ya(a, b) {
		return { get: function get() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments);
			} };
	}!(function () {
		var b,
		    c,
		    d = l.documentElement,
		    e = l.createElement("div"),
		    f = l.createElement("div");if (f.style) {
			(function () {
				var g = function g() {
					f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
				};

				f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);a.getComputedStyle && n.extend(k, { pixelPosition: function pixelPosition() {
						return g(), b;
					}, boxSizingReliable: function boxSizingReliable() {
						return null == c && g(), c;
					}, reliableMarginRight: function reliableMarginRight() {
						var b,
						    c = f.appendChild(l.createElement("div"));return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
					} });
			})();
		}
	})(), n.swap = function (a, b, c, d) {
		var e,
		    f,
		    g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
	};var za = /^(none|table(?!-c[ea]).+)/,
	    Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
	    Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
	    Ca = { position: "absolute", visibility: "hidden", display: "block" },
	    Da = { letterSpacing: "0", fontWeight: "400" },
	    Ea = ["Webkit", "O", "Moz", "ms"];function Fa(a, b) {
		if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
		    d = b,
		    e = Ea.length;while (e--) if ((b = Ea[e] + c, b in a)) return b;return d;
	}function Ga(a, b, c) {
		var d = Aa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
	}function Ha(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));return g;
	}function Ia(a, b, c) {
		var d = !0,
		    e = "width" === b ? a.offsetWidth : a.offsetHeight,
		    f = wa(a),
		    g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
			if ((e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e))) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
		}return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
	}function Ja(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
	}n.extend({ cssHooks: { opacity: { get: function get(a, b) {
					if (b) {
						var c = xa(a, "opacity");return "" === c ? "1" : c;
					}
				} } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e,
				    f,
				    g,
				    h = n.camelCase(b),
				    i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
			}
		}, css: function css(a, b, c, d) {
			var e,
			    f,
			    g,
			    h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
		} }), n.each(["height", "width"], function (a, b) {
		n.cssHooks[b] = { get: function get(a, c, d) {
				return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
					return Ia(a, b, d);
				}) : Ia(a, b, d) : void 0;
			}, set: function set(a, c, d) {
				var e = d && wa(a);return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
			} };
	}), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
		return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
	}), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
		n.cssHooks[a + b] = { expand: function expand(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];return e;
			} }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
	}), n.fn.extend({ css: function css(a, b) {
			return J(this, function (a, b, c) {
				var d,
				    e,
				    f = {},
				    g = 0;if (n.isArray(b)) {
					for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);return f;
				}return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
			}, a, b, arguments.length > 1);
		}, show: function show() {
			return Ja(this, !0);
		}, hide: function hide() {
			return Ja(this);
		}, toggle: function toggle(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				S(this) ? n(this).show() : n(this).hide();
			});
		} });function Ka(a, b, c, d, e) {
		return new Ka.prototype.init(a, b, c, d, e);
	}n.Tween = Ka, Ka.prototype = { constructor: Ka, init: function init(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
		}, cur: function cur() {
			var a = Ka.propHooks[this.prop];return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
		}, run: function run(a) {
			var b,
			    c = Ka.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
		} }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get: function get(a) {
				var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
			}, set: function set(a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
			} } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set: function set(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
		} }, n.easing = { linear: function linear(a) {
			return a;
		}, swing: function swing(a) {
			return .5 - Math.cos(a * Math.PI) / 2;
		} }, n.fx = Ka.prototype.init, n.fx.step = {};var La,
	    Ma,
	    Na = /^(?:toggle|show|hide)$/,
	    Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
	    Pa = /queueHooks$/,
	    Qa = [Va],
	    Ra = { "*": [function (a, b) {
			var c = this.createTween(a, b),
			    d = c.cur(),
			    e = Oa.exec(b),
			    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
			    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
			    h = 1,
			    i = 20;if (g && g[3] !== f) {
				f = f || g[3], e = e || [], g = +d || 1;do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
			}return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
		}] };function Sa() {
		return setTimeout(function () {
			La = void 0;
		}), La = n.now();
	}function Ta(a, b) {
		var c,
		    d = 0,
		    e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;return b && (e.opacity = e.width = a), e;
	}function Ua(a, b, c) {
		for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
	}function Va(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l = this,
		    m = {},
		    o = a.style,
		    p = a.nodeType && S(a),
		    q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i();
		}), h.unqueued++, l.always(function () {
			l.always(function () {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
			});
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
			o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
		}));for (d in b) if ((e = b[d], Na.exec(e))) {
			if ((delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show"))) {
				if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
			}m[d] = q && q[d] || n.style(a, d);
		} else j = void 0;if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
			q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
				n(a).hide();
			}), l.done(function () {
				var b;L.remove(a, "fxshow");for (b in m) n.style(a, b, m[b]);
			});for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
		}
	}function Wa(a, b) {
		var c, d, e, f, g;for (c in a) if ((d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g)) {
			f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
		} else b[d] = e;
	}function Xa(a, b, c) {
		var d,
		    e,
		    f = 0,
		    g = Qa.length,
		    h = n.Deferred().always(function () {
			delete i.elem;
		}),
		    i = function i() {
			if (e) return !1;for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
		},
		    j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
				var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
			}, stop: function stop(b) {
				var c = 0,
				    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) j.tweens[c].run(1);return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
			} }),
		    k = j.props;for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	}n.Animation = n.extend(Xa, { tweener: function tweener(a, b) {
			n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
		}, prefilter: function prefilter(a, b) {
			b ? Qa.unshift(a) : Qa.push(a);
		} }), n.speed = function (a, b, c) {
		var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
			n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
		}, d;
	}, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
			return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
		}, animate: function animate(a, b, c, d) {
			var e = n.isEmptyObject(a),
			    f = n.speed(b, c, d),
			    g = function g() {
				var b = Xa(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
			};return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
		}, stop: function stop(a, b, c) {
			var d = function d(a) {
				var b = a.stop;delete a.stop, b(c);
			};return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0,
				    e = null != a && a + "queueHooks",
				    f = n.timers,
				    g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));(b || !c) && n.dequeue(this, a);
			});
		}, finish: function finish(a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b,
				    c = L.get(this),
				    d = c[a + "queue"],
				    e = c[a + "queueHooks"],
				    f = n.timers,
				    g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
			});
		} }), n.each(["toggle", "show", "hide"], function (a, b) {
		var c = n.fn[b];n.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
		};
	}), n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
		n.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d);
		};
	}), n.timers = [], n.fx.tick = function () {
		var a,
		    b = 0,
		    c = n.timers;for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);c.length || n.fx.stop(), La = void 0;
	}, n.fx.timer = function (a) {
		n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
	}, n.fx.interval = 13, n.fx.start = function () {
		Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
	}, n.fx.stop = function () {
		clearInterval(Ma), Ma = null;
	}, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
		return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
			var d = setTimeout(b, a);c.stop = function () {
				clearTimeout(d);
			};
		});
	}, (function () {
		var a = l.createElement("input"),
		    b = l.createElement("select"),
		    c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
	})();var Ya,
	    Za,
	    $a = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
			return J(this, n.attr, a, b, arguments.length > 1);
		}, removeAttr: function removeAttr(a) {
			return this.each(function () {
				n.removeAttr(this, a);
			});
		} }), n.extend({ attr: function attr(a, b, c) {
			var d,
			    e,
			    f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
		}, removeAttr: function removeAttr(a, b) {
			var c,
			    d,
			    e = 0,
			    f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
		}, attrHooks: { type: { set: function set(a, b) {
					if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
					}
				} } } }), Za = { set: function set(a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
		} }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = $a[b] || n.find.attr;$a[b] = function (a, b, d) {
			var e, f;return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
		};
	});var _a = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function prop(a, b) {
			return J(this, n.prop, a, b, arguments.length > 1);
		}, removeProp: function removeProp(a) {
			return this.each(function () {
				delete this[n.propFix[a] || a];
			});
		} }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
			var d,
			    e,
			    f,
			    g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
		}, propHooks: { tabIndex: { get: function get(a) {
					return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
				} } } }), k.optSelected || (n.propHooks.selected = { get: function get(a) {
			var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
		} }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		n.propFix[this.toLowerCase()] = this;
	});var ab = /[\t\r\n\f]/g;n.fn.extend({ addClass: function addClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h = "string" == typeof a && a,
			    i = 0,
			    j = this.length;if (n.isFunction(a)) return this.each(function (b) {
				n(this).addClass(a.call(this, b, this.className));
			});if (h) for (b = (a || "").match(E) || []; j > i; i++) if ((c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " "))) {
				f = 0;while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");g = n.trim(d), c.className !== g && (c.className = g);
			}return this;
		}, removeClass: function removeClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h = 0 === arguments.length || "string" == typeof a && a,
			    i = 0,
			    j = this.length;if (n.isFunction(a)) return this.each(function (b) {
				n(this).removeClass(a.call(this, b, this.className));
			});if (h) for (b = (a || "").match(E) || []; j > i; i++) if ((c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : ""))) {
				f = 0;while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
			}return this;
		}, toggleClass: function toggleClass(a, b) {
			var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
				n(this).toggleClass(a.call(this, c, this.className, b), b);
			} : function () {
				if ("string" === c) {
					var b,
					    d = 0,
					    e = n(this),
					    f = a.match(E) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
				} else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
			});
		}, hasClass: function hasClass(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;return !1;
		} });var bb = /\r/g;n.fn.extend({ val: function val(a) {
			var b,
			    c,
			    d,
			    e = this[0];{
				if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
					var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
						return null == a ? "" : a + "";
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
				});if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
			}
		} }), n.extend({ valHooks: { option: { get: function get(a) {
					var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
				} }, select: { get: function get(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if ((c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup")))) {
						if ((b = n(c).val(), f)) return b;g.push(b);
					}return g;
				}, set: function set(a, b) {
					var c,
					    d,
					    e = a.options,
					    f = n.makeArray(b),
					    g = e.length;while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);return c || (a.selectedIndex = -1), f;
				} } } }), n.each(["radio", "checkbox"], function () {
		n.valHooks[this] = { set: function set(a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
			} }, k.checkOn || (n.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value;
		});
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		n.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
		};
	}), n.fn.extend({ hover: function hover(a, b) {
			return this.mouseenter(a).mouseleave(b || a);
		}, bind: function bind(a, b, c) {
			return this.on(a, null, b, c);
		}, unbind: function unbind(a, b) {
			return this.off(a, null, b);
		}, delegate: function delegate(a, b, c, d) {
			return this.on(b, a, c, d);
		}, undelegate: function undelegate(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
		} });var cb = n.now(),
	    db = /\?/;n.parseJSON = function (a) {
		return JSON.parse(a + "");
	}, n.parseXML = function (a) {
		var b, c;if (!a || "string" != typeof a) return null;try {
			c = new DOMParser(), b = c.parseFromString(a, "text/xml");
		} catch (d) {
			b = void 0;
		}return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
	};var eb = /#.*$/,
	    fb = /([?&])_=[^&]*/,
	    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    ib = /^(?:GET|HEAD)$/,
	    jb = /^\/\//,
	    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	    lb = {},
	    mb = {},
	    nb = "*/".concat("*"),
	    ob = a.location.href,
	    pb = kb.exec(ob.toLowerCase()) || [];function qb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");var d,
			    e = 0,
			    f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
		};
	}function rb(a, b, c, d) {
		var e = {},
		    f = a === mb;function g(h) {
			var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
			}), i;
		}return g(b.dataTypes[0]) || !e["*"] && g("*");
	}function sb(a, b) {
		var c,
		    d,
		    e = n.ajaxSettings.flatOptions || {};for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);return d && n.extend(!0, a, d), a;
	}function tb(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.contents,
		    i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));if (d) for (e in h) if (h[e] && h[e].test(d)) {
			i.unshift(e);break;
		}if (i[0] in c) f = i[0];else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;break;
				}g || (g = e);
			}f = f || g;
		}return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	}function ub(a, b, c, d) {
		var e,
		    f,
		    g,
		    h,
		    i,
		    j = {},
		    k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
			if ((g = j[i + " " + f] || j["* " + f], !g)) for (e in j) if ((h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
				g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
			}if (g !== !0) if (g && a["throws"]) b = g(b);else try {
				b = g(b);
			} catch (l) {
				return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
			}
		}return { state: "success", data: b };
	}n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
			return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
		}, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function ajax(a, b) {
			"object" == typeof a && (b = a, a = void 0), b = b || {};var c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = n.ajaxSetup({}, b),
			    l = k.context || k,
			    m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
			    o = n.Deferred(),
			    p = n.Callbacks("once memory"),
			    q = k.statusCode || {},
			    r = {},
			    s = {},
			    t = 0,
			    u = "canceled",
			    v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
					var b;if (2 === t) {
						if (!f) {
							f = {};while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2];
						}b = f[a.toLowerCase()];
					}return null == b ? null : b;
				}, getAllResponseHeaders: function getAllResponseHeaders() {
					return 2 === t ? e : null;
				}, setRequestHeader: function setRequestHeader(a, b) {
					var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
				}, overrideMimeType: function overrideMimeType(a) {
					return t || (k.mimeType = a), this;
				}, statusCode: function statusCode(a) {
					var b;if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];else v.always(a[v.status]);return this;
				}, abort: function abort(a) {
					var b = a || u;return c && c.abort(b), x(0, b), this;
				} };if ((o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t)) return v;i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) v.setRequestHeader(j, k.headers[j]);if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);if (c = rb(mb, k, b, v)) {
				v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
					v.abort("timeout");
				}, k.timeout));try {
					t = 1, c.send(r, x);
				} catch (w) {
					if (!(2 > t)) throw w;x(-1, w);
				}
			} else x(-1, "No Transport");function x(a, b, f, h) {
				var j,
				    r,
				    s,
				    u,
				    w,
				    x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
			}return v;
		}, getJSON: function getJSON(a, b, c) {
			return n.get(a, b, c, "json");
		}, getScript: function getScript(a, b) {
			return n.get(a, void 0, b, "script");
		} }), n.each(["get", "post"], function (a, b) {
		n[b] = function (a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d });
		};
	}), n._evalUrl = function (a) {
		return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	}, n.fn.extend({ wrapAll: function wrapAll(a) {
			var b;return n.isFunction(a) ? this.each(function (b) {
				n(this).wrapAll(a.call(this, b));
			}) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				var a = this;while (a.firstElementChild) a = a.firstElementChild;return a;
			}).append(this)), this);
		}, wrapInner: function wrapInner(a) {
			return this.each(n.isFunction(a) ? function (b) {
				n(this).wrapInner(a.call(this, b));
			} : function () {
				var b = n(this),
				    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
			});
		}, wrap: function wrap(a) {
			var b = n.isFunction(a);return this.each(function (c) {
				n(this).wrapAll(b ? a.call(this, c) : a);
			});
		}, unwrap: function unwrap() {
			return this.parent().each(function () {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
			}).end();
		} }), n.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0;
	}, n.expr.filters.visible = function (a) {
		return !n.expr.filters.hidden(a);
	};var vb = /%20/g,
	    wb = /\[\]$/,
	    xb = /\r?\n/g,
	    yb = /^(?:submit|button|image|reset|file)$/i,
	    zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
		var e;if (n.isArray(b)) n.each(b, function (b, e) {
			c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
		});else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
	}n.param = function (a, b) {
		var c,
		    d = [],
		    e = function e(a, b) {
			b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
		};if ((void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))) n.each(a, function () {
			e(this.name, this.value);
		});else for (c in a) Ab(c, a[c], b, e);return d.join("&").replace(vb, "+");
	}, n.fn.extend({ serialize: function serialize() {
			return n.param(this.serializeArray());
		}, serializeArray: function serializeArray() {
			return this.map(function () {
				var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
			}).filter(function () {
				var a = this.type;return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
			}).map(function (a, b) {
				var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
					return { name: b.name, value: a.replace(xb, "\r\n") };
				}) : { name: b.name, value: c.replace(xb, "\r\n") };
			}).get();
		} }), n.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest();
		} catch (a) {}
	};var Bb = 0,
	    Cb = {},
	    Db = { 0: 200, 1223: 204 },
	    Eb = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in Cb) Cb[a]();
	}), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
		var b;return k.cors || Eb && !a.crossDomain ? { send: function send(c, d) {
				var e,
				    f = a.xhr(),
				    g = ++Bb;if ((f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)) for (e in a.xhrFields) f[e] = a.xhrFields[e];a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) f.setRequestHeader(e, c[e]);b = function (a) {
					return function () {
						b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
					};
				}, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");try {
					f.send(a.hasContent && a.data || null);
				} catch (h) {
					if (b) throw h;
				}
			}, abort: function abort() {
				b && b();
			} } : void 0;
	}), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
				return n.globalEval(a), a;
			} } }), n.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	}), n.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c;return { send: function send(d, e) {
					b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
					}), l.head.appendChild(b[0]);
				}, abort: function abort() {
					c && c();
				} };
		}
	});var Fb = [],
	    Gb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
			var a = Fb.pop() || n.expando + "_" + cb++;return this[a] = !0, a;
		} }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e,
		    f,
		    g,
		    h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || n.error(e + " was not called"), g[0];
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments;
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
		}), "script") : void 0;
	}), n.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
		    e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
	};var Hb = n.fn.load;n.fn.load = function (a, b, c) {
		if ("string" != typeof a && Hb) return Hb.apply(this, arguments);var d,
		    e,
		    f,
		    g = this,
		    h = a.indexOf(" ");return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
		}).complete(c && function (a, b) {
			g.each(c, f || [a.responseText, b, a]);
		}), this;
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		n.fn[b] = function (a) {
			return this.on(b, a);
		};
	}), n.expr.filters.animated = function (a) {
		return n.grep(n.timers, function (b) {
			return a === b.elem;
		}).length;
	};var Ib = a.document.documentElement;function Jb(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	}n.offset = { setOffset: function setOffset(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = n.css(a, "position"),
			    l = n(a),
			    m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
		} }, n.fn.extend({ offset: function offset(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				n.offset.setOffset(this, a, b);
			});var b,
			    c,
			    d = this[0],
			    e = { top: 0, left: 0 },
			    f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
		}, position: function position() {
			if (this[0]) {
				var a,
				    b,
				    c = this[0],
				    d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
			}
		}, offsetParent: function offsetParent() {
			return this.map(function () {
				var a = this.offsetParent || Ib;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;return a || Ib;
			});
		} }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
		var d = "pageYOffset" === c;n.fn[b] = function (e) {
			return J(this, function (b, e, f) {
				var g = Jb(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
			}, b, e, arguments.length, null);
		};
	}), n.each(["top", "left"], function (a, b) {
		n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
			return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
		});
	}), n.each({ Height: "height", Width: "width" }, function (a, b) {
		n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
			n.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
				    g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
					var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
				}, b, f ? d : void 0, f, null);
			};
		});
	}), n.fn.size = function () {
		return this.length;
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return n;
	});var Kb = a.jQuery,
	    Lb = a.$;return n.noConflict = function (b) {
		return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
	}, typeof b === U && (a.jQuery = a.$ = n), n;
});
//# sourceMappingURL=jquery.min.map
/*
 AngularJS v1.4.7
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (Q, X, w) {
	'use strict';function I(b) {
		return function () {
			var a = arguments[0],
			    c;c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.4.7/" + (b ? b + "/" : "") + a;for (a = 1; a < arguments.length; a++) {
				c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";var d = encodeURIComponent,
				    e;e = arguments[a];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;c += d(e);
			}return Error(c);
		};
	}function Da(b) {
		if (null == b || Za(b)) return !1;var a = "length" in Object(b) && b.length;
		return b.nodeType === pa && a ? !0 : G(b) || J(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b;
	}function m(b, a, c) {
		var d, e;if (b) if (x(b)) for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);else if (J(b) || Da(b)) {
			var f = "object" !== typeof b;d = 0;for (e = b.length; d < e; d++) (f || d in b) && a.call(c, b[d], d, b);
		} else if (b.forEach && b.forEach !== m) b.forEach(a, c, b);else if (mc(b)) for (d in b) a.call(c, b[d], d, b);else if ("function" === typeof b.hasOwnProperty) for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d, b);else for (d in b) ta.call(b, d) && a.call(c, b[d], d, b);return b;
	}function nc(b, a, c) {
		for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);return d;
	}function oc(b) {
		return function (a, c) {
			b(c, a);
		};
	}function Ud() {
		return ++nb;
	}function pc(b, a) {
		a ? b.$$hashKey = a : delete b.$$hashKey;
	}function Mb(b, a, c) {
		for (var d = b.$$hashKey, e = 0, f = a.length; e < f; ++e) {
			var h = a[e];if (C(h) || x(h)) for (var g = Object.keys(h), l = 0, k = g.length; l < k; l++) {
				var n = g[l],
				    p = h[n];c && C(p) ? ea(p) ? b[n] = new Date(p.valueOf()) : Oa(p) ? b[n] = new RegExp(p) : (C(b[n]) || (b[n] = J(p) ? [] : {}), Mb(b[n], [p], !0)) : b[n] = p;
			}
		}pc(b, d);return b;
	}function P(b) {
		return Mb(b, ua.call(arguments, 1), !1);
	}function Vd(b) {
		return Mb(b, ua.call(arguments, 1), !0);
	}function Y(b) {
		return parseInt(b, 10);
	}function Nb(b, a) {
		return P(Object.create(b), a);
	}function y() {}function $a(b) {
		return b;
	}function qa(b) {
		return function () {
			return b;
		};
	}function qc(b) {
		return x(b.toString) && b.toString !== Object.prototype.toString;
	}function v(b) {
		return "undefined" === typeof b;
	}function A(b) {
		return "undefined" !== typeof b;
	}function C(b) {
		return null !== b && "object" === typeof b;
	}function mc(b) {
		return null !== b && "object" === typeof b && !rc(b);
	}function G(b) {
		return "string" === typeof b;
	}function V(b) {
		return "number" === typeof b;
	}function ea(b) {
		return "[object Date]" === va.call(b);
	}function x(b) {
		return "function" === typeof b;
	}function Oa(b) {
		return "[object RegExp]" === va.call(b);
	}function Za(b) {
		return b && b.window === b;
	}function ab(b) {
		return b && b.$evalAsync && b.$watch;
	}function bb(b) {
		return "boolean" === typeof b;
	}function sc(b) {
		return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
	}function Wd(b) {
		var a = {};b = b.split(",");var c;for (c = 0; c < b.length; c++) a[b[c]] = !0;return a;
	}function wa(b) {
		return F(b.nodeName || b[0] && b[0].nodeName);
	}function cb(b, a) {
		var c = b.indexOf(a);0 <= c && b.splice(c, 1);return c;
	}function ha(_x, _x2, _x3, _x4) {
		var _again = true;

		_function: while (_again) {
			var b = _x,
			    a = _x2,
			    c = _x3,
			    d = _x4;
			_again = false;
			if (Za(b) || ab(b)) throw Ea("cpws");if (tc.test(va.call(a))) throw Ea("cpta");if (a) {
				if (b === a) throw Ea("cpi");c = c || [];d = d || [];C(b) && (c.push(b), d.push(a));var e;if (J(b)) for (e = a.length = 0; e < b.length; e++) a.push(ha(b[e], null, c, d));else {
					var f = a.$$hashKey;J(a) ? a.length = 0 : m(a, function (b, c) {
						delete a[c];
					});if (mc(b)) for (e in b) a[e] = ha(b[e], null, c, d);else if (b && "function" === typeof b.hasOwnProperty) for (e in b) b.hasOwnProperty(e) && (a[e] = ha(b[e], null, c, d));else for (e in b) ta.call(b, e) && (a[e] = ha(b[e], null, c, d));pc(a, f);
				}
			} else if ((a = b, C(b))) {
				if (c && -1 !== (f = c.indexOf(b))) return d[f];if (J(b)) {
					_x = b;
					_x2 = [];
					_x3 = c;
					_x4 = d;
					_again = true;
					e = f = undefined;
					continue _function;
				}if (tc.test(va.call(b))) a = new b.constructor(b);else if (ea(b)) a = new Date(b.getTime());else if (Oa(b)) a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex;else if (x(b.cloneNode)) a = b.cloneNode(!0);else {
					e = Object.create(rc(b));
					_x = b;
					_x2 = e;
					_x3 = c;
					_x4 = d;
					_again = true;
					e = f = undefined;
					continue _function;
				}d && (c.push(b), d.push(a));
			}return a;
		}
	}function ja(b, a) {
		if (J(b)) {
			a = a || [];for (var c = 0, d = b.length; c < d; c++) a[c] = b[c];
		} else if (C(b)) for (c in (a = a || {}, b)) if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) a[c] = b[c];return a || b;
	}function ka(_x5, _x6) {
		var _again2 = true;

		_function2: while (_again2) {
			var b = _x5,
			    a = _x6;
			_again2 = false;
			if (b === a) return !0;if (null === b || null === a) return !1;if (b !== b && a !== a) return !0;var c = typeof b,
			    d;if (c == typeof a && "object" == c) if (J(b)) {
				if (!J(a)) return !1;if ((c = b.length) == a.length) {
					for (d = 0; d < c; d++) if (!ka(b[d], a[d])) return !1;return !0;
				}
			} else {
				if (ea(b)) {
					if (ea(a)) {
						_x5 = b.getTime();
						_x6 = a.getTime();
						_again2 = true;
						c = d = undefined;
						continue _function2;
					} else {
						return !1;
					}
				}if (Oa(b)) return Oa(a) ? b.toString() == a.toString() : !1;if (ab(b) || ab(a) || Za(b) || Za(a) || J(a) || ea(a) || Oa(a)) return !1;c = fa();for (d in b) if ("$" !== d.charAt(0) && !x(b[d])) {
					if (!ka(b[d], a[d])) return !1;c[d] = !0;
				}for (d in a) if (!(d in c) && "$" !== d.charAt(0) && A(a[d]) && !x(a[d])) return !1;return !0;
			}return !1;
		}
	}function db(b, a, c) {
		return b.concat(ua.call(a, c));
	}function uc(b, a) {
		var c = 2 < arguments.length ? ua.call(arguments, 2) : [];
		return !x(a) || a instanceof RegExp ? a : c.length ? function () {
			return arguments.length ? a.apply(b, db(c, arguments, 0)) : a.apply(b, c);
		} : function () {
			return arguments.length ? a.apply(b, arguments) : a.call(b);
		};
	}function Xd(b, a) {
		var c = a;"string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = w : Za(a) ? c = "$WINDOW" : a && X === a ? c = "$DOCUMENT" : ab(a) && (c = "$SCOPE");return c;
	}function eb(b, a) {
		if ("undefined" === typeof b) return w;V(a) || (a = a ? 2 : null);return JSON.stringify(b, Xd, a);
	}function vc(b) {
		return G(b) ? JSON.parse(b) : b;
	}function wc(b, a) {
		var c = Date.parse("Jan 01, 1970 00:00:00 " + b) / 6E4;return isNaN(c) ? a : c;
	}function Ob(b, a, c) {
		c = c ? -1 : 1;var d = wc(a, b.getTimezoneOffset());a = b;b = c * (d - b.getTimezoneOffset());a = new Date(a.getTime());a.setMinutes(a.getMinutes() + b);return a;
	}function xa(b) {
		b = B(b).clone();try {
			b.empty();
		} catch (a) {}var c = B("<div>").append(b).html();try {
			return b[0].nodeType === Pa ? F(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
				return "<" + F(b);
			});
		} catch (d) {
			return F(c);
		}
	}function xc(b) {
		try {
			return decodeURIComponent(b);
		} catch (a) {}
	}
	function yc(b) {
		var a = {};m((b || "").split("&"), function (b) {
			var d, e, f;b && (e = b = b.replace(/\+/g, "%20"), d = b.indexOf("="), -1 !== d && (e = b.substring(0, d), f = b.substring(d + 1)), e = xc(e), A(e) && (f = A(f) ? xc(f) : !0, ta.call(a, e) ? J(a[e]) ? a[e].push(f) : a[e] = [a[e], f] : a[e] = f));
		});return a;
	}function Pb(b) {
		var a = [];m(b, function (b, d) {
			J(b) ? m(b, function (b) {
				a.push(la(d, !0) + (!0 === b ? "" : "=" + la(b, !0)));
			}) : a.push(la(d, !0) + (!0 === b ? "" : "=" + la(b, !0)));
		});return a.length ? a.join("&") : "";
	}function ob(b) {
		return la(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
	}function la(b, a) {
		return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+");
	}function Yd(b, a) {
		var c,
		    d,
		    e = Qa.length;for (d = 0; d < e; ++d) if ((c = Qa[d] + a, G(c = b.getAttribute(c)))) return c;return null;
	}function Zd(b, a) {
		var c,
		    d,
		    e = {};m(Qa, function (a) {
			a += "app";!c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a));
		});m(Qa, function (a) {
			a += "app";var e;!c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a));
		});c && (e.strictDi = null !== Yd(c, "strict-di"), a(c, d ? [d] : [], e));
	}function zc(b, a, c) {
		C(c) || (c = {});c = P({ strictDi: !1 }, c);var d = function d() {
			b = B(b);if (b.injector()) {
				var d = b[0] === X ? "document" : xa(b);throw Ea("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
			}a = a || [];a.unshift(["$provide", function (a) {
				a.value("$rootElement", b);
			}]);c.debugInfoEnabled && a.push(["$compileProvider", function (a) {
				a.debugInfoEnabled(!0);
			}]);a.unshift("ng");d = fb(a, c.strictDi);d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
				a.$apply(function () {
					b.data("$injector", d);c(b)(a);
				});
			}]);return d;
		},
		    e = /^NG_ENABLE_DEBUG_INFO!/,
		    f = /^NG_DEFER_BOOTSTRAP!/;Q && e.test(Q.name) && (c.debugInfoEnabled = !0, Q.name = Q.name.replace(e, ""));if (Q && !f.test(Q.name)) return d();Q.name = Q.name.replace(f, "");da.resumeBootstrap = function (b) {
			m(b, function (b) {
				a.push(b);
			});return d();
		};x(da.resumeDeferredBootstrap) && da.resumeDeferredBootstrap();
	}function $d() {
		Q.name = "NG_ENABLE_DEBUG_INFO!" + Q.name;Q.location.reload();
	}
	function ae(b) {
		b = da.element(b).injector();if (!b) throw Ea("test");return b.get("$$testability");
	}function Ac(b, a) {
		a = a || "_";return b.replace(be, function (b, d) {
			return (d ? a : "") + b.toLowerCase();
		});
	}function ce() {
		var b;if (!Bc) {
			var a = pb();(ra = v(a) ? Q.jQuery : a ? Q[a] : w) && ra.fn.on ? (B = ra, P(ra.fn, { scope: Ra.scope, isolateScope: Ra.isolateScope, controller: Ra.controller, injector: Ra.injector, inheritedData: Ra.inheritedData }), b = ra.cleanData, ra.cleanData = function (a) {
				var d;if (Qb) Qb = !1;else for (var e = 0, f; null != (f = a[e]); e++) (d = ra._data(f, "events")) && d.$destroy && ra(f).triggerHandler("$destroy");b(a);
			}) : B = R;da.element = B;Bc = !0;
		}
	}function qb(b, a, c) {
		if (!b) throw Ea("areq", a || "?", c || "required");return b;
	}function Sa(b, a, c) {
		c && J(b) && (b = b[b.length - 1]);qb(x(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));return b;
	}function Ta(b, a) {
		if ("hasOwnProperty" === b) throw Ea("badname", a);
	}function Cc(b, a, c) {
		if (!a) return b;a = a.split(".");for (var d, e = b, f = a.length, h = 0; h < f; h++) d = a[h], b && (b = (e = b)[d]);return !c && x(b) ? uc(e, b) : b;
	}function rb(b) {
		for (var a = b[0], c = b[b.length - 1], d, e = 1; a !== c && (a = a.nextSibling); e++) if (d || b[e] !== a) d || (d = B(ua.call(b, 0, e))), d.push(a);return d || b;
	}function fa() {
		return Object.create(null);
	}function de(b) {
		function a(a, b, c) {
			return a[b] || (a[b] = c());
		}var c = I("$injector"),
		    d = I("ng");b = a(b, "angular", Object);b.$$minErr = b.$$minErr || I;return a(b, "module", function () {
			var b = {};return function (f, h, g) {
				if ("hasOwnProperty" === f) throw d("badname", "module");h && b.hasOwnProperty(f) && (b[f] = null);return a(b, f, function () {
					function a(b, c, e, f) {
						f || (f = d);return function () {
							f[e || "push"]([b, c, arguments]);return E;
						};
					}function b(a, c) {
						return function (b, e) {
							e && x(e) && (e.$$moduleName = f);d.push([a, c, arguments]);return E;
						};
					}if (!h) throw c("nomod", f);var d = [],
					    e = [],
					    r = [],
					    t = a("$injector", "invoke", "push", e),
					    E = { _invokeQueue: d, _configBlocks: e, _runBlocks: r, requires: h, name: f, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), config: t, run: function run(a) {
							r.push(a);return this;
						} };g && t(g);return E;
				});
			};
		});
	}function ee(b) {
		P(b, { bootstrap: zc, copy: ha, extend: P, merge: Vd, equals: ka, element: B, forEach: m, injector: fb, noop: y, bind: uc, toJson: eb, fromJson: vc, identity: $a, isUndefined: v, isDefined: A, isString: G, isFunction: x, isObject: C, isNumber: V, isElement: sc, isArray: J,
			version: fe, isDate: ea, lowercase: F, uppercase: sb, callbacks: { counter: 0 }, getTestability: ae, $$minErr: I, $$csp: Fa, reloadWithDebugInfo: $d });Rb = de(Q);Rb("ng", ["ngLocale"], ["$provide", function (a) {
			a.provider({ $$sanitizeUri: ge });a.provider("$compile", Dc).directive({ a: he, input: Ec, textarea: Ec, form: ie, script: je, select: ke, style: le, option: me, ngBind: ne, ngBindHtml: oe, ngBindTemplate: pe, ngClass: qe, ngClassEven: re, ngClassOdd: se, ngCloak: te, ngController: ue, ngForm: ve, ngHide: we, ngIf: xe, ngInclude: ye, ngInit: ze, ngNonBindable: Ae,
				ngPluralize: Be, ngRepeat: Ce, ngShow: De, ngStyle: Ee, ngSwitch: Fe, ngSwitchWhen: Ge, ngSwitchDefault: He, ngOptions: Ie, ngTransclude: Je, ngModel: Ke, ngList: Le, ngChange: Me, pattern: Fc, ngPattern: Fc, required: Gc, ngRequired: Gc, minlength: Hc, ngMinlength: Hc, maxlength: Ic, ngMaxlength: Ic, ngValue: Ne, ngModelOptions: Oe }).directive({ ngInclude: Pe }).directive(tb).directive(Jc);a.provider({ $anchorScroll: Qe, $animate: Re, $animateCss: Se, $$animateQueue: Te, $$AnimateRunner: Ue, $browser: Ve, $cacheFactory: We, $controller: Xe, $document: Ye, $exceptionHandler: Ze,
				$filter: Kc, $$forceReflow: $e, $interpolate: af, $interval: bf, $http: cf, $httpParamSerializer: df, $httpParamSerializerJQLike: ef, $httpBackend: ff, $xhrFactory: gf, $location: hf, $log: jf, $parse: kf, $rootScope: lf, $q: mf, $$q: nf, $sce: of, $sceDelegate: pf, $sniffer: qf, $templateCache: rf, $templateRequest: sf, $$testability: tf, $timeout: uf, $window: vf, $$rAF: wf, $$jqLite: xf, $$HashMap: yf, $$cookieReader: zf });
		}]);
	}function gb(b) {
		return b.replace(Af, function (a, b, d, e) {
			return e ? d.toUpperCase() : d;
		}).replace(Bf, "Moz$1");
	}function Lc(b) {
		b = b.nodeType;
		return b === pa || !b || 9 === b;
	}function Mc(b, a) {
		var c,
		    d,
		    e = a.createDocumentFragment(),
		    f = [];if (Sb.test(b)) {
			c = c || e.appendChild(a.createElement("div"));d = (Cf.exec(b) || ["", ""])[1].toLowerCase();d = ma[d] || ma._default;c.innerHTML = d[1] + b.replace(Df, "<$1></$2>") + d[2];for (d = d[0]; d--;) c = c.lastChild;f = db(f, c.childNodes);c = e.firstChild;c.textContent = "";
		} else f.push(a.createTextNode(b));e.textContent = "";e.innerHTML = "";m(f, function (a) {
			e.appendChild(a);
		});return e;
	}function R(b) {
		if (b instanceof R) return b;var a;G(b) && (b = T(b), a = !0);if (!(this instanceof R)) {
			if (a && "<" != b.charAt(0)) throw Tb("nosel");return new R(b);
		}if (a) {
			a = X;var c;b = (c = Ef.exec(b)) ? [a.createElement(c[1])] : (c = Mc(b, a)) ? c.childNodes : [];
		}Nc(this, b);
	}function Ub(b) {
		return b.cloneNode(!0);
	}function ub(b, a) {
		a || vb(b);if (b.querySelectorAll) for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++) vb(c[d]);
	}function Oc(b, a, c, d) {
		if (A(d)) throw Tb("offargs");var e = (d = wb(b)) && d.events,
		    f = d && d.handle;if (f) if (a) m(a.split(" "), function (a) {
			if (A(c)) {
				var d = e[a];cb(d || [], c);if (d && 0 < d.length) return;
			}b.removeEventListener(a, f, !1);delete e[a];
		});else for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a];
	}function vb(b, a) {
		var c = b.ng339,
		    d = c && hb[c];d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Oc(b)), delete hb[c], b.ng339 = w));
	}function wb(b, a) {
		var c = b.ng339,
		    c = c && hb[c];a && !c && (b.ng339 = c = ++Ff, c = hb[c] = { events: {}, data: {}, handle: w });return c;
	}function Vb(b, a, c) {
		if (Lc(b)) {
			var d = A(c),
			    e = !d && a && !C(a),
			    f = !a;b = (b = wb(b, !e)) && b.data;if (d) b[a] = c;else {
				if (f) return b;
				if (e) return b && b[a];P(b, a);
			}
		}
	}function xb(b, a) {
		return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1;
	}function yb(b, a) {
		a && b.setAttribute && m(a.split(" "), function (a) {
			b.setAttribute("class", T((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + T(a) + " ", " ")));
		});
	}function zb(b, a) {
		if (a && b.setAttribute) {
			var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");m(a.split(" "), function (a) {
				a = T(a);-1 === c.indexOf(" " + a + " ") && (c += a + " ");
			});b.setAttribute("class", T(c));
		}
	}function Nc(b, a) {
		if (a) if (a.nodeType) b[b.length++] = a;else {
			var c = a.length;if ("number" === typeof c && a.window !== a) {
				if (c) for (var d = 0; d < c; d++) b[b.length++] = a[d];
			} else b[b.length++] = a;
		}
	}function Pc(b, a) {
		return Ab(b, "$" + (a || "ngController") + "Controller");
	}function Ab(b, a, c) {
		9 == b.nodeType && (b = b.documentElement);for (a = J(a) ? a : [a]; b;) {
			for (var d = 0, e = a.length; d < e; d++) if (A(c = B.data(b, a[d]))) return c;b = b.parentNode || 11 === b.nodeType && b.host;
		}
	}function Qc(b) {
		for (ub(b, !0); b.firstChild;) b.removeChild(b.firstChild);
	}
	function Wb(b, a) {
		a || ub(b);var c = b.parentNode;c && c.removeChild(b);
	}function Gf(b, a) {
		a = a || Q;if ("complete" === a.document.readyState) a.setTimeout(b);else B(a).on("load", b);
	}function Rc(b, a) {
		var c = Bb[a.toLowerCase()];return c && Sc[wa(b)] && c;
	}function Hf(b, a) {
		var c = function c(_c, e) {
			_c.isDefaultPrevented = function () {
				return _c.defaultPrevented;
			};var f = a[e || _c.type],
			    h = f ? f.length : 0;if (h) {
				if (v(_c.immediatePropagationStopped)) {
					var g = _c.stopImmediatePropagation;_c.stopImmediatePropagation = function () {
						_c.immediatePropagationStopped = !0;_c.stopPropagation && _c.stopPropagation();g && g.call(_c);
					};
				}_c.isImmediatePropagationStopped = function () {
					return !0 === _c.immediatePropagationStopped;
				};1 < h && (f = ja(f));for (var l = 0; l < h; l++) _c.isImmediatePropagationStopped() || f[l].call(b, _c);
			}
		};c.elem = b;return c;
	}function xf() {
		this.$get = function () {
			return P(R, { hasClass: function hasClass(b, a) {
					b.attr && (b = b[0]);return xb(b, a);
				}, addClass: function addClass(b, a) {
					b.attr && (b = b[0]);return zb(b, a);
				}, removeClass: function removeClass(b, a) {
					b.attr && (b = b[0]);return yb(b, a);
				} });
		};
	}function Ga(b, a) {
		var c = b && b.$$hashKey;
		if (c) return "function" === typeof c && (c = b.$$hashKey()), c;c = typeof b;return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Ud)() : c + ":" + b;
	}function Ua(b, a) {
		if (a) {
			var c = 0;this.nextUid = function () {
				return ++c;
			};
		}m(b, this.put, this);
	}function If(b) {
		return (b = b.toString().replace(Tc, "").match(Uc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
	}function fb(b, a) {
		function c(a) {
			return function (b, c) {
				if (C(b)) m(b, oc(a));else return a(b, c);
			};
		}function d(a, b) {
			Ta(a, "service");if (x(b) || J(b)) b = r.instantiate(b);
			if (!b.$get) throw Ha("pget", a);return p[a + "Provider"] = b;
		}function e(a, b) {
			return function () {
				var c = E.invoke(b, this);if (v(c)) throw Ha("undef", a);return c;
			};
		}function f(a, b, c) {
			return d(a, { $get: !1 !== c ? e(a, b) : b });
		}function h(a) {
			qb(v(a) || J(a), "modulesToLoad", "not an array");var b = [],
			    c;m(a, function (a) {
				function d(a) {
					var b, c;b = 0;for (c = a.length; b < c; b++) {
						var e = a[b],
						    f = r.get(e[0]);f[e[1]].apply(f, e[2]);
					}
				}if (!n.get(a)) {
					n.put(a, !0);try {
						G(a) ? (c = Rb(a), b = b.concat(h(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : x(a) ? b.push(r.invoke(a)) : J(a) ? b.push(r.invoke(a)) : Sa(a, "module");
					} catch (e) {
						throw (J(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ha("modulerr", a, e.stack || e.message || e));
					}
				}
			});return b;
		}function g(b, c) {
			function d(a, e) {
				if (b.hasOwnProperty(a)) {
					if (b[a] === l) throw Ha("cdep", a + " <- " + k.join(" <- "));return b[a];
				}try {
					return k.unshift(a), b[a] = l, b[a] = c(a, e);
				} catch (f) {
					throw (b[a] === l && delete b[a], f);
				} finally {
					k.shift();
				}
			}function e(b, c, f, g) {
				"string" === typeof f && (g = f, f = null);var h = [],
				    k = fb.$$annotate(b, a, g),
				    l,
				    r,
				    p;r = 0;for (l = k.length; r < l; r++) {
					p = k[r];if ("string" !== typeof p) throw Ha("itkn", p);h.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g));
				}J(b) && (b = b[l]);return b.apply(c, h);
			}return { invoke: e, instantiate: function instantiate(a, b, c) {
					var d = Object.create((J(a) ? a[a.length - 1] : a).prototype || null);a = e(a, d, b, c);return C(a) || x(a) ? a : d;
				}, get: d, annotate: fb.$$annotate, has: function has(a) {
					return p.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a);
				} };
		}a = !0 === a;var l = {},
		    k = [],
		    n = new Ua([], !0),
		    p = { $provide: { provider: c(d),
				factory: c(f), service: c(function (a, b) {
					return f(a, ["$injector", function (a) {
						return a.instantiate(b);
					}]);
				}), value: c(function (a, b) {
					return f(a, qa(b), !1);
				}), constant: c(function (a, b) {
					Ta(a, "constant");p[a] = b;t[a] = b;
				}), decorator: function decorator(a, b) {
					var c = r.get(a + "Provider"),
					    d = c.$get;c.$get = function () {
						var a = E.invoke(d, c);return E.invoke(b, null, { $delegate: a });
					};
				} } },
		    r = p.$injector = g(p, function (a, b) {
			da.isString(b) && k.push(b);throw Ha("unpr", k.join(" <- "));
		}),
		    t = {},
		    E = t.$injector = g(t, function (a, b) {
			var c = r.get(a + "Provider", b);
			return E.invoke(c.$get, c, w, a);
		});m(h(b), function (a) {
			a && E.invoke(a);
		});return E;
	}function Qe() {
		var b = !0;this.disableAutoScrolling = function () {
			b = !1;
		};this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
			function e(a) {
				var b = null;Array.prototype.some.call(a, function (a) {
					if ("a" === wa(a)) return b = a, !0;
				});return b;
			}function f(b) {
				if (b) {
					b.scrollIntoView();var c;c = h.yOffset;x(c) ? c = c() : sc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0);c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c));
				} else a.scrollTo(0, 0);
			}function h(a) {
				a = G(a) ? a : c.hash();var b;a ? (b = g.getElementById(a)) ? f(b) : (b = e(g.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
			}var g = a.document;b && d.$watch(function () {
				return c.hash();
			}, function (a, b) {
				a === b && "" === a || Gf(function () {
					d.$evalAsync(h);
				});
			});return h;
		}];
	}function ib(b, a) {
		if (!b && !a) return "";if (!b) return a;if (!a) return b;J(b) && (b = b.join(" "));J(a) && (a = a.join(" "));return b + " " + a;
	}function Jf(b) {
		G(b) && (b = b.split(" "));var a = fa();m(b, function (b) {
			b.length && (a[b] = !0);
		});return a;
	}function Ia(b) {
		return C(b) ? b : {};
	}function Kf(b, a, c, d) {
		function e(a) {
			try {
				a.apply(null, ua.call(arguments, 1));
			} finally {
				if ((E--, 0 === E)) for (; K.length;) try {
					K.pop()();
				} catch (b) {
					c.error(b);
				}
			}
		}function f() {
			ia = null;h();g();
		}function h() {
			a: {
				try {
					u = n.state;break a;
				} catch (a) {}u = void 0;
			}u = v(u) ? null : u;ka(u, L) && (u = L);L = u;
		}function g() {
			if (z !== l.url() || q !== u) z = l.url(), q = u, m(O, function (a) {
				a(l.url(), u);
			});
		}var l = this,
		    k = b.location,
		    n = b.history,
		    p = b.setTimeout,
		    r = b.clearTimeout,
		    t = {};l.isMock = !1;var E = 0,
		    K = [];l.$$completeOutstandingRequest = e;l.$$incOutstandingRequestCount = function () {
			E++;
		};l.notifyWhenNoOutstandingRequests = function (a) {
			0 === E ? a() : K.push(a);
		};var u,
		    q,
		    z = k.href,
		    N = a.find("base"),
		    ia = null;h();q = u;l.url = function (a, c, e) {
			v(e) && (e = null);k !== b.location && (k = b.location);n !== b.history && (n = b.history);if (a) {
				var f = q === e;if (z === a && (!d.history || f)) return l;var g = z && Ja(z) === Ja(a);z = a;q = e;if (!d.history || g && f) {
					if (!g || ia) ia = a;c ? k.replace(a) : g ? (c = k, e = a.indexOf("#"), e = -1 === e ? "" : a.substr(e), c.hash = e) : k.href = a;k.href !== a && (ia = a);
				} else n[c ? "replaceState" : "pushState"](e, "", a), h(), q = u;return l;
			}return ia || k.href.replace(/%27/g, "'");
		};l.state = function () {
			return u;
		};var O = [],
		    H = !1,
		    L = null;l.onUrlChange = function (a) {
			if (!H) {
				if (d.history) B(b).on("popstate", f);B(b).on("hashchange", f);H = !0;
			}O.push(a);return a;
		};l.$$applicationDestroyed = function () {
			B(b).off("hashchange popstate", f);
		};l.$$checkUrlChange = g;l.baseHref = function () {
			var a = N.attr("href");return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
		};l.defer = function (a, b) {
			var c;E++;c = p(function () {
				delete t[c];e(a);
			}, b || 0);
			t[c] = !0;return c;
		};l.defer.cancel = function (a) {
			return t[a] ? (delete t[a], r(a), e(y), !0) : !1;
		};
	}function Ve() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
			return new Kf(b, d, a, c);
		}];
	}function We() {
		this.$get = function () {
			function b(b, d) {
				function e(a) {
					a != p && (r ? r == a && (r = a.n) : r = a, f(a.n, a.p), f(a, p), p = a, p.n = null);
				}function f(a, b) {
					a != b && (a && (a.p = b), b && (b.n = a));
				}if (b in a) throw I("$cacheFactory")("iid", b);var h = 0,
				    g = P({}, d, { id: b }),
				    l = {},
				    k = d && d.capacity || Number.MAX_VALUE,
				    n = {},
				    p = null,
				    r = null;return a[b] = { put: function put(a, b) {
						if (!v(b)) {
							if (k < Number.MAX_VALUE) {
								var c = n[a] || (n[a] = { key: a });e(c);
							}a in l || h++;l[a] = b;h > k && this.remove(r.key);return b;
						}
					}, get: function get(a) {
						if (k < Number.MAX_VALUE) {
							var b = n[a];if (!b) return;e(b);
						}return l[a];
					}, remove: function remove(a) {
						if (k < Number.MAX_VALUE) {
							var b = n[a];if (!b) return;b == p && (p = b.p);b == r && (r = b.n);f(b.n, b.p);delete n[a];
						}delete l[a];h--;
					}, removeAll: function removeAll() {
						l = {};h = 0;n = {};p = r = null;
					}, destroy: function destroy() {
						n = g = l = null;delete a[b];
					}, info: function info() {
						return P({}, g, { size: h });
					} };
			}var a = {};b.info = function () {
				var b = {};m(a, function (a, e) {
					b[e] = a.info();
				});return b;
			};b.get = function (b) {
				return a[b];
			};return b;
		};
	}function rf() {
		this.$get = ["$cacheFactory", function (b) {
			return b("templates");
		}];
	}function Dc(b, a) {
		function c(a, b, c) {
			var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
			    e = {};m(a, function (a, f) {
				var g = a.match(d);if (!g) throw ga("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };
			});return e;
		}function d(a) {
			var b = a.charAt(0);if (!b || b !== F(b)) throw ga("baddir", a);if (a !== a.trim()) throw ga("baddir", a);
		}var e = {},
		    f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
		    h = /(([\w\-]+)(?:\:([^;]+))?;?)/,
		    g = Wd("ngSrc,ngSrcset,src,srcset"),
		    l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
		    k = /^(on[a-z]+|formaction)$/;this.directive = function r(a, f) {
			Ta(a, "directive");G(a) ? (d(a), qb(f, "directiveFactory"), e.hasOwnProperty(a) || (e[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function (b, d) {
				var f = [];m(e[a], function (e, g) {
					try {
						var h = b.invoke(e);x(h) ? h = { compile: qa(h) } : !h.compile && h.link && (h.compile = qa(h.link));h.priority = h.priority || 0;h.index = g;h.name = h.name || a;h.require = h.require || h.controller && h.name;h.restrict = h.restrict || "EA";var k = h,
						    l = h,
						    r = h.name,
						    n = { isolateScope: null, bindToController: null };C(l.scope) && (!0 === l.bindToController ? (n.bindToController = c(l.scope, r, !0), n.isolateScope = {}) : n.isolateScope = c(l.scope, r, !1));C(l.bindToController) && (n.bindToController = c(l.bindToController, r, !0));if (C(n.bindToController)) {
							var S = l.controller,
							    E = l.controllerAs;if (!S) throw ga("noctrl", r);var ca;a: if (E && G(E)) ca = E;else {
								if (G(S)) {
									var m = Vc.exec(S);if (m) {
										ca = m[3];break a;
									}
								}ca = void 0;
							}if (!ca) throw ga("noident", r);
						}var s = k.$$bindings = n;C(s.isolateScope) && (h.$$isolateBindings = s.isolateScope);h.$$moduleName = e.$$moduleName;f.push(h);
					} catch (w) {
						d(w);
					}
				});return f;
			}])), e[a].push(f)) : m(a, oc(r));return this;
		};this.aHrefSanitizationWhitelist = function (b) {
			return A(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
		};this.imgSrcSanitizationWhitelist = function (b) {
			return A(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
		};var n = !0;this.debugInfoEnabled = function (a) {
			return A(a) ? (n = a, this) : n;
		};this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, d, u, q, z, N, ia, O, H) {
			function L(a, b) {
				try {
					a.addClass(b);
				} catch (c) {}
			}function W(a, b, c, d, e) {
				a instanceof B || (a = B(a));m(a, function (b, c) {
					b.nodeType == Pa && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0]);
				});var f = S(a, b, a, c, d, e);W.$$addScopeClass(a);var g = null;return function (b, c, d) {
					qb(b, "scope");d = d || {};var e = d.parentBoundTranscludeFn,
					    h = d.transcludeControllers;d = d.futureParentElement;e && e.$$boundTransclude && (e = e.$$boundTransclude);g || (g = (d = d && d[0]) ? "foreignobject" !== wa(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");d = "html" !== g ? B(Xb(g, B("<div>").append(a).html())) : c ? Ra.clone.call(a) : a;if (h) for (var k in h) d.data("$" + k + "Controller", h[k].instance);W.$$addScopeInfo(d, b);c && c(d, b);f && f(b, d, d, e);return d;
				};
			}function S(a, b, c, d, e, f) {
				function g(a, c, d, e) {
					var f, k, l, r, n, t, O;if (q) for (O = Array(c.length), r = 0; r < h.length; r += 3) f = h[r], O[f] = c[f];else O = c;r = 0;for (n = h.length; r < n;) if ((k = O[h[r++]], c = h[r++], f = h[r++], c)) {
						if (c.scope) {
							if ((l = a.$new(), W.$$addScopeInfo(B(k), l), t = c.$$destroyBindings)) c.$$destroyBindings = null, l.$on("$destroyed", t);
						} else l = a;t = c.transcludeOnThisElement ? ba(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ba(a, b) : null;c(f, l, k, d, t, c);
					} else f && f(a, k.childNodes, w, e);
				}for (var h = [], k, l, r, n, q, t = 0; t < a.length; t++) {
					k = new Z();
					l = ca(a[t], [], k, 0 === t ? d : w, e);(f = l.length ? D(l, a[t], k, b, c, null, [], [], f) : null) && f.scope && W.$$addScopeClass(k.$$element);k = f && f.terminal || !(r = a[t].childNodes) || !r.length ? null : S(r, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || k) h.push(t, f, k), n = !0, q = q || f;f = null;
				}return n ? g : null;
			}function ba(a, b, c) {
				return function (d, e, f, g, h) {
					d || (d = a.$new(!1, h), d.$$transcluded = !0);return b(d, e, { parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g });
				};
			}function ca(a, b, c, d, e) {
				var g = c.$attr,
				    k;switch (a.nodeType) {case pa:
						na(b, ya(wa(a)), "E", d, e);for (var l, r, n, q = a.attributes, t = 0, O = q && q.length; t < O; t++) {
							var K = !1,
							    H = !1;l = q[t];k = l.name;r = T(l.value);l = ya(k);if (n = ja.test(l)) k = k.replace(Wc, "").substr(8).replace(/_(.)/g, function (a, b) {
								return b.toUpperCase();
							});var S = l.replace(/(Start|End)$/, "");I(S) && l === S + "Start" && (K = k, H = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));l = ya(k.toLowerCase());g[l] = k;if (n || !c.hasOwnProperty(l)) c[l] = r, Rc(a, l) && (c[l] = !0);V(a, b, r, l, n);na(b, l, "A", d, e, K, H);
						}a = a.className;C(a) && (a = a.animVal);if (G(a) && "" !== a) for (; k = h.exec(a);) l = ya(k[2]), na(b, l, "C", d, e) && (c[l] = T(k[3])), a = a.substr(k.index + k[0].length);break;case Pa:
						if (11 === Wa) for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Pa;) a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);Ka(b, a.nodeValue);break;case 8:
						try {
							if (k = f.exec(a.nodeValue)) l = ya(k[1]), na(b, l, "M", d, e) && (c[l] = T(k[2]));
						} catch (E) {}}b.sort(M);return b;
			}function za(a, b, c) {
				var d = [],
				    e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
					do {
						if (!a) throw ga("uterdir", b, c);a.nodeType == pa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
					} while (0 < e);
				} else d.push(a);return B(d);
			}function s(a, b, c) {
				return function (d, e, f, g, h) {
					e = za(e[0], b, c);return a(d, e, f, g, h);
				};
			}function D(a, b, d, e, f, g, h, k, r) {
				function n(a, b, c, d) {
					if (a) {
						c && (a = s(a, c, d));a.require = D.require;a.directiveName = y;if (u === D || D.$$isolateScope) a = $(a, { isolateScope: !0 });h.push(a);
					}if (b) {
						c && (b = s(b, c, d));b.require = D.require;b.directiveName = y;if (u === D || D.$$isolateScope) b = $(b, { isolateScope: !0 });k.push(b);
					}
				}
				function t(a, b, c, d) {
					var e;if (G(b)) {
						var f = b.match(l);b = b.substring(f[0].length);var g = f[1] || f[3],
						    f = "?" === f[2];"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;e || (d = "$" + b + "Controller", e = g ? c.inheritedData(d) : c.data(d));if (!e && !f) throw ga("ctreq", b, a);
					} else if (J(b)) for (e = [], g = 0, f = b.length; g < f; g++) e[g] = t(a, b[g], c, d);return e || null;
				}function O(a, b, c, d, e, f) {
					var g = fa(),
					    h;for (h in d) {
						var k = d[h],
						    l = { $scope: k === u || k.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c },
						    r = k.controller;"@" == r && (r = b[k.name]);l = q(r, l, !0, k.controllerAs);g[k.name] = l;ia || a.data("$" + k.name + "Controller", l.instance);
					}return g;
				}function K(a, c, e, f, g, l) {
					function r(a, b, c) {
						var d;ab(a) || (c = b, b = a, a = w);ia && (d = ca);c || (c = ia ? N.parent() : N);return g(a, b, d, c, za);
					}var n, q, H, E, ca, z, N;b === e ? (f = d, N = d.$$element) : (N = B(e), f = new Z(N, d));u && (E = c.$new(!0));g && (z = r, z.$$boundTransclude = g);ba && (ca = O(N, f, z, ba, E, c));u && (W.$$addScopeInfo(N, E, !0, !(L && (L === u || L === u.$$originalDirective))), W.$$addScopeClass(N, !0), E.$$isolateBindings = u.$$isolateBindings, Y(c, f, E, E.$$isolateBindings, u, E));if (ca) {
						var Va = u || S,
						    m;Va && ca[Va.name] && (q = Va.$$bindings.bindToController, (H = ca[Va.name]) && H.identifier && q && (m = H, l.$$destroyBindings = Y(c, f, H.instance, q, Va)));for (n in ca) {
							H = ca[n];var D = H();D !== H.instance && (H.instance = D, N.data("$" + n + "Controller", D), H === m && (l.$$destroyBindings(), l.$$destroyBindings = Y(c, f, D, q, Va)));
						}
					}n = 0;for (l = h.length; n < l; n++) q = h[n], aa(q, q.isolateScope ? E : c, N, f, q.require && t(q.directiveName, q.require, N, ca), z);var za = c;u && (u.template || null === u.templateUrl) && (za = E);a && a(za, e.childNodes, w, g);for (n = k.length - 1; 0 <= n; n--) q = k[n], aa(q, q.isolateScope ? E : c, N, f, q.require && t(q.directiveName, q.require, N, ca), z);
				}r = r || {};for (var H = -Number.MAX_VALUE, S = r.newScopeDirective, ba = r.controllerDirectives, u = r.newIsolateScopeDirective, L = r.templateDirective, z = r.nonTlbTranscludeDirective, N = !1, m = !1, ia = r.hasElementTranscludeDirective, v = d.$$element = B(b), D, y, M, Ka = e, na, I = 0, F = a.length; I < F; I++) {
					D = a[I];var P = D.$$start,
					    R = D.$$end;P && (v = za(b, P, R));M = w;if (H > D.priority) break;if (M = D.scope) D.templateUrl || (C(M) ? (Q("new/isolated scope", u || S, D, v), u = D) : Q("new/isolated scope", u, D, v)), S = S || D;y = D.name;!D.templateUrl && D.controller && (M = D.controller, ba = ba || fa(), Q("'" + y + "' controller", ba[y], D, v), ba[y] = D);if (M = D.transclude) N = !0, D.$$tlb || (Q("transclusion", z, D, v), z = D), "element" == M ? (ia = !0, H = D.priority, M = v, v = d.$$element = B(X.createComment(" " + y + ": " + d[y] + " ")), b = v[0], U(f, ua.call(M, 0), b), Ka = W(M, e, H, g && g.name, { nonTlbTranscludeDirective: z })) : (M = B(Ub(b)).contents(), v.empty(), Ka = W(M, e));if (D.template) if ((m = !0, Q("template", L, D, v), L = D, M = x(D.template) ? D.template(v, d) : D.template, M = ha(M), D.replace)) {
						g = D;M = Sb.test(M) ? Xc(Xb(D.templateNamespace, T(M))) : [];b = M[0];if (1 != M.length || b.nodeType !== pa) throw ga("tplrt", y, "");U(f, v, b);F = { $attr: {} };M = ca(b, [], F);var Lf = a.splice(I + 1, a.length - (I + 1));u && A(M);a = a.concat(M).concat(Lf);Yc(d, F);F = a.length;
					} else v.html(M);if (D.templateUrl) m = !0, Q("template", L, D, v), L = D, D.replace && (g = D), K = Mf(a.splice(I, a.length - I), v, d, f, N && Ka, h, k, { controllerDirectives: ba, newScopeDirective: S !== D && S, newIsolateScopeDirective: u, templateDirective: L,
						nonTlbTranscludeDirective: z }), F = a.length;else if (D.compile) try {
						na = D.compile(v, d, Ka), x(na) ? n(null, na, P, R) : na && n(na.pre, na.post, P, R);
					} catch (V) {
						c(V, xa(v));
					}D.terminal && (K.terminal = !0, H = Math.max(H, D.priority));
				}K.scope = S && !0 === S.scope;K.transcludeOnThisElement = N;K.templateOnThisElement = m;K.transclude = Ka;r.hasElementTranscludeDirective = ia;return K;
			}function A(a) {
				for (var b = 0, c = a.length; b < c; b++) a[b] = Nb(a[b], { $$isolateScope: !0 });
			}function na(b, d, f, g, h, k, l) {
				if (d === h) return null;h = null;if (e.hasOwnProperty(d)) {
					var n;
					d = a.get(d + "Directive");for (var q = 0, t = d.length; q < t; q++) try {
						n = d[q], (v(g) || g > n.priority) && -1 != n.restrict.indexOf(f) && (k && (n = Nb(n, { $$start: k, $$end: l })), b.push(n), h = n);
					} catch (H) {
						c(H);
					}
				}return h;
			}function I(b) {
				if (e.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++) if ((b = c[d], b.multiElement)) return !0;return !1;
			}function Yc(a, b) {
				var c = b.$attr,
				    d = a.$attr,
				    e = a.$$element;m(a, function (d, e) {
					"$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
				});m(b, function (b, f) {
					"class" == f ? (L(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
				});
			}function Mf(a, b, c, e, f, g, h, k) {
				var l = [],
				    r,
				    n,
				    q = b[0],
				    t = a.shift(),
				    H = Nb(t, { templateUrl: null, transclude: null, replace: null, $$originalDirective: t }),
				    O = x(t.templateUrl) ? t.templateUrl(b, c) : t.templateUrl,
				    E = t.templateNamespace;b.empty();d(O).then(function (d) {
					var K, u;d = ha(d);if (t.replace) {
						d = Sb.test(d) ? Xc(Xb(E, T(d))) : [];K = d[0];if (1 != d.length || K.nodeType !== pa) throw ga("tplrt", t.name, O);d = { $attr: {} };U(e, b, K);var z = ca(K, [], d);C(t.scope) && A(z);a = z.concat(a);Yc(c, d);
					} else K = q, b.html(d);a.unshift(H);r = D(a, K, c, f, b, t, g, h, k);m(e, function (a, c) {
						a == K && (e[c] = b[0]);
					});for (n = S(b[0].childNodes, f); l.length;) {
						d = l.shift();u = l.shift();var N = l.shift(),
						    W = l.shift(),
						    z = b[0];if (!d.$$destroyed) {
							if (u !== q) {
								var za = u.className;k.hasElementTranscludeDirective && t.replace || (z = Ub(K));U(N, B(u), z);L(B(z), za);
							}u = r.transcludeOnThisElement ? ba(d, r.transclude, W) : W;r(n, d, z, e, u, r);
						}
					}l = null;
				});return function (a, b, c, d, e) {
					a = e;b.$$destroyed || (l ? l.push(b, c, d, a) : (r.transcludeOnThisElement && (a = ba(b, r.transclude, e)), r(n, b, c, d, a, r)));
				};
			}function M(a, b) {
				var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
			}function Q(a, b, c, d) {
				function e(a) {
					return a ? " (module: " + a + ")" : "";
				}if (b) throw ga("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, xa(d));
			}function Ka(a, c) {
				var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
						a = a.parent();var b = !!a.length;b && W.$$addBindingClass(a);return function (a, c) {
							var e = c.parent();b || W.$$addBindingClass(e);W.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
								c[0].nodeValue = a;
							});
						};
					} });
			}function Xb(a, b) {
				a = F(a || "html");switch (a) {case "svg":case "math":
						var c = X.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
						return b;}
			}function R(a, b) {
				if ("srcdoc" == b) return ia.HTML;var c = wa(a);if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return ia.RESOURCE_URL;
			}function V(a, c, d, e, f) {
				var h = R(a, e);f = g[e] || f;var l = b(d, !0, h, f);if (l) {
					if ("multiple" === e && "select" === wa(a)) throw ga("selmulti", xa(a));c.push({ priority: 100, compile: function compile() {
							return { pre: function pre(a, c, g) {
									c = g.$$observers || (g.$$observers = fa());if (k.test(e)) throw ga("nodomevents");var r = g[e];r !== d && (l = r && b(r, !0, h, f), d = r);l && (g[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(l, function (a, b) {
										"class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
									}));
								} };
						} });
				}
			}function U(a, b, c) {
				var d = b[0],
				    e = b.length,
				    f = d.parentNode,
				    g,
				    h;if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] == d) {
					a[g++] = c;h = g + e - 1;for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];a.length -= e - 1;a.context === d && (a.context = c);break;
				}f && f.replaceChild(c, d);a = X.createDocumentFragment();a.appendChild(d);B.hasData(d) && (B(c).data(B(d).data()), ra ? (Qb = !0, ra.cleanData([d])) : delete B.cache[d[B.expando]]);d = 1;for (e = b.length; d < e; d++) f = b[d], B(f).remove(), a.appendChild(f), delete b[d];b[0] = c;b.length = 1;
			}function $(a, b) {
				return P(function () {
					return a.apply(null, arguments);
				}, a, b);
			}function aa(a, b, d, e, f, g) {
				try {
					a(b, d, e, f, g);
				} catch (h) {
					c(h, xa(d));
				}
			}function Y(a, c, d, e, f, g) {
				var h;m(e, function (e, g) {
					var k = e.attrName,
					    l = e.optional,
					    r,
					    n,
					    q,
					    K;switch (e.mode) {case "@":
							l || ta.call(c, k) || (d[g] = c[k] = void 0);c.$observe(k, function (a) {
								G(a) && (d[g] = a);
							});c.$$observers[k].$$scope = a;G(c[k]) && (d[g] = b(c[k])(a));break;case "=":
							if (!ta.call(c, k)) {
								if (l) break;c[k] = void 0;
							}if (l && !c[k]) break;n = u(c[k]);K = n.literal ? ka : function (a, b) {
								return a === b || a !== a && b !== b;
							};q = n.assign || function () {
								r = d[g] = n(a);throw ga("nonassign", c[k], f.name);
							};r = d[g] = n(a);l = function (b) {
								K(b, d[g]) || (K(b, r) ? q(a, b = d[g]) : d[g] = b);return r = b;
							};l.$stateful = !0;l = e.collection ? a.$watchCollection(c[k], l) : a.$watch(u(c[k], l), null, n.literal);h = h || [];h.push(l);break;case "&":
							n = c.hasOwnProperty(k) ? u(c[k]) : y;if (n === y && l) break;d[g] = function (b) {
								return n(a, b);
							};}
				});e = h ? function () {
					for (var a = 0, b = h.length; a < b; ++a) h[a]();
				} : y;return g && e !== y ? (g.$on("$destroy", e), y) : e;
			}var Z = function Z(a, b) {
				if (b) {
					var c = Object.keys(b),
					    d,
					    e,
					    f;d = 0;for (e = c.length; d < e; d++) f = c[d], this[f] = b[f];
				} else this.$attr = {};this.$$element = a;
			};Z.prototype = { $normalize: ya, $addClass: function $addClass(a) {
					a && 0 < a.length && O.addClass(this.$$element, a);
				}, $removeClass: function $removeClass(a) {
					a && 0 < a.length && O.removeClass(this.$$element, a);
				}, $updateClass: function $updateClass(a, b) {
					var c = Zc(a, b);c && c.length && O.addClass(this.$$element, c);(c = Zc(b, a)) && c.length && O.removeClass(this.$$element, c);
				}, $set: function $set(a, b, d, e) {
					var f = Rc(this.$$element[0], a),
					    g = $c[a],
					    h = a;f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Ac(a, "-"));f = wa(this.$$element);if ("a" === f && "href" === a || "img" === f && "src" === a) this[a] = b = H(b, "src" === a);else if ("img" === f && "srcset" === a) {
						for (var f = "", g = T(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) var r = 2 * l, f = f + H(T(g[r]), !0), f = f + (" " + T(g[r + 1]));g = T(g[2 * l]).split(/\s/);f += H(T(g[0]), !0);2 === g.length && (f += " " + T(g[1]));this[a] = b = f;
					}!1 !== d && (null === b || v(b) ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));(a = this.$$observers) && m(a[h], function (a) {
						try {
							a(b);
						} catch (d) {
							c(d);
						}
					});
				}, $observe: function $observe(a, b) {
					var c = this,
					    d = c.$$observers || (c.$$observers = fa()),
					    e = d[a] || (d[a] = []);e.push(b);z.$evalAsync(function () {
						e.$$inter || !c.hasOwnProperty(a) || v(c[a]) || b(c[a]);
					});return function () {
						cb(e, b);
					};
				} };var da = b.startSymbol(),
			    ea = b.endSymbol(),
			    ha = "{{" == da || "}}" == ea ? $a : function (a) {
				return a.replace(/\{\{/g, da).replace(/}}/g, ea);
			},
			    ja = /^ngAttr[A-Z]/;W.$$addBindingInfo = n ? function (a, b) {
				var c = a.data("$binding") || [];J(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
			} : y;W.$$addBindingClass = n ? function (a) {
				L(a, "ng-binding");
			} : y;W.$$addScopeInfo = n ? function (a, b, c, d) {
				a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
			} : y;W.$$addScopeClass = n ? function (a, b) {
				L(a, b ? "ng-isolate-scope" : "ng-scope");
			} : y;return W;
		}];
	}function ya(b) {
		return gb(b.replace(Wc, ""));
	}function Zc(b, a) {
		var c = "",
		    d = b.split(/\s+/),
		    e = a.split(/\s+/),
		    f = 0;a: for (; f < d.length; f++) {
			for (var h = d[f], g = 0; g < e.length; g++) if (h == e[g]) continue a;c += (0 < c.length ? " " : "") + h;
		}return c;
	}function Xc(b) {
		b = B(b);var a = b.length;if (1 >= a) return b;for (; a--;) 8 === b[a].nodeType && Nf.call(b, a, 1);return b;
	}function Xe() {
		var b = {},
		    a = !1;this.register = function (a, d) {
			Ta(a, "controller");C(a) ? P(b, a) : b[a] = d;
		};this.allowGlobals = function () {
			a = !0;
		};this.$get = ["$injector", "$window", function (c, d) {
			function e(a, b, c, d) {
				if (!a || !C(a.$scope)) throw I("$controller")("noscp", d, b);a.$scope[b] = c;
			}return function (f, h, g, l) {
				var k, n, p;g = !0 === g;l && G(l) && (p = l);if (G(f)) {
					l = f.match(Vc);if (!l) throw Of("ctrlfmt", f);
					n = l[1];p = p || l[3];f = b.hasOwnProperty(n) ? b[n] : Cc(h.$scope, n, !0) || (a ? Cc(d, n, !0) : w);Sa(f, n, !0);
				}if (g) return g = (J(f) ? f[f.length - 1] : f).prototype, k = Object.create(g || null), p && e(h, p, k, n || f.name), P(function () {
					var a = c.invoke(f, k, h, n);a !== k && (C(a) || x(a)) && (k = a, p && e(h, p, k, n || f.name));return k;
				}, { instance: k, identifier: p });k = c.instantiate(f, h, n);p && e(h, p, k, n || f.name);return k;
			};
		}];
	}function Ye() {
		this.$get = ["$window", function (b) {
			return B(b.document);
		}];
	}function Ze() {
		this.$get = ["$log", function (b) {
			return function (a, c) {
				b.error.apply(b, arguments);
			};
		}];
	}function Yb(b) {
		return C(b) ? ea(b) ? b.toISOString() : eb(b) : b;
	}function df() {
		this.$get = function () {
			return function (b) {
				if (!b) return "";var a = [];nc(b, function (b, d) {
					null === b || v(b) || (J(b) ? m(b, function (b, c) {
						a.push(la(d) + "=" + la(Yb(b)));
					}) : a.push(la(d) + "=" + la(Yb(b))));
				});return a.join("&");
			};
		};
	}function ef() {
		this.$get = function () {
			return function (b) {
				function a(b, e, f) {
					null === b || v(b) || (J(b) ? m(b, function (b, c) {
						a(b, e + "[" + (C(b) ? c : "") + "]");
					}) : C(b) && !ea(b) ? nc(b, function (b, c) {
						a(b, e + (f ? "" : "[") + c + (f ? "" : "]"));
					}) : c.push(la(e) + "=" + la(Yb(b))));
				}if (!b) return "";var c = [];a(b, "", !0);return c.join("&");
			};
		};
	}function Zb(b, a) {
		if (G(b)) {
			var c = b.replace(Pf, "").trim();if (c) {
				var d = a("Content-Type");(d = d && 0 === d.indexOf(ad)) || (d = (d = c.match(Qf)) && Rf[d[0]].test(c));d && (b = vc(c));
			}
		}return b;
	}function bd(b) {
		var a = fa(),
		    c;G(b) ? m(b.split("\n"), function (b) {
			c = b.indexOf(":");var e = F(T(b.substr(0, c)));b = T(b.substr(c + 1));e && (a[e] = a[e] ? a[e] + ", " + b : b);
		}) : C(b) && m(b, function (b, c) {
			var f = F(c),
			    h = T(b);f && (a[f] = a[f] ? a[f] + ", " + h : h);
		});return a;
	}function cd(b) {
		var a;
		return function (c) {
			a || (a = bd(b));return c ? (c = a[F(c)], void 0 === c && (c = null), c) : a;
		};
	}function dd(b, a, c, d) {
		if (x(d)) return d(b, a, c);m(d, function (d) {
			b = d(b, a, c);
		});return b;
	}function cf() {
		var b = this.defaults = { transformResponse: [Zb], transformRequest: [function (a) {
				return C(a) && "[object File]" !== va.call(a) && "[object Blob]" !== va.call(a) && "[object FormData]" !== va.call(a) ? eb(a) : a;
			}], headers: { common: { Accept: "application/json, text/plain, */*" }, post: ja($b), put: ja($b), patch: ja($b) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN",
			paramSerializer: "$httpParamSerializer" },
		    a = !1;this.useApplyAsync = function (b) {
			return A(b) ? (a = !!b, this) : a;
		};var c = !0;this.useLegacyPromiseExtensions = function (a) {
			return A(a) ? (c = !!a, this) : c;
		};var d = this.interceptors = [];this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, h, g, l, k) {
			function n(a) {
				function d(a) {
					var b = P({}, a);b.data = a.data ? dd(a.data, a.headers, a.status, f.transformResponse) : a.data;a = a.status;return 200 <= a && 300 > a ? b : l.reject(b);
				}function e(a, b) {
					var c,
					    d = {};m(a, function (a, e) {
						x(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
					});return d;
				}if (!da.isObject(a)) throw I("$http")("badreq", a);var f = P({ method: "get", transformRequest: b.transformRequest, transformResponse: b.transformResponse, paramSerializer: b.paramSerializer }, a);f.headers = (function (a) {
					var c = b.headers,
					    d = P({}, a.headers),
					    f,
					    g,
					    h,
					    c = P({}, c.common, c[F(a.method)]);a: for (f in c) {
						g = F(f);for (h in d) if (F(h) === g) continue a;d[f] = c[f];
					}return e(d, ja(a));
				})(a);f.method = sb(f.method);f.paramSerializer = G(f.paramSerializer) ? k.get(f.paramSerializer) : f.paramSerializer;var g = [function (a) {
					var c = a.headers,
					    e = dd(a.data, cd(c), w, a.transformRequest);v(e) && m(c, function (a, b) {
						"content-type" === F(b) && delete c[b];
					});v(a.withCredentials) && !v(b.withCredentials) && (a.withCredentials = b.withCredentials);return p(a, e).then(d, d);
				}, w],
				    h = l.when(f);for (m(E, function (a) {
					(a.request || a.requestError) && g.unshift(a.request, a.requestError);(a.response || a.responseError) && g.push(a.response, a.responseError);
				}); g.length;) {
					a = g.shift();var r = g.shift(),
					    h = h.then(a, r);
				}c ? (h.success = function (a) {
					Sa(a, "fn");h.then(function (b) {
						a(b.data, b.status, b.headers, f);
					});return h;
				}, h.error = function (a) {
					Sa(a, "fn");h.then(null, function (b) {
						a(b.data, b.status, b.headers, f);
					});return h;
				}) : (h.success = ed("success"), h.error = ed("error"));return h;
			}function p(c, d) {
				function h(b, c, d, e) {
					function f() {
						k(c, b, d, e);
					}L && (200 <= b && 300 > b ? L.put(ba, [b, c, bd(d), e]) : L.remove(ba));a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply());
				}function k(a, b, d, e) {
					b = -1 <= b ? b : 0;(200 <= b && 300 > b ? O.resolve : O.reject)({ data: a, status: b, headers: cd(d), config: c, statusText: e });
				}
				function p(a) {
					k(a.data, a.status, ja(a.headers()), a.statusText);
				}function E() {
					var a = n.pendingRequests.indexOf(c);-1 !== a && n.pendingRequests.splice(a, 1);
				}var O = l.defer(),
				    H = O.promise,
				    L,
				    m,
				    S = c.headers,
				    ba = r(c.url, c.paramSerializer(c.params));n.pendingRequests.push(c);H.then(E, E);!c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (L = C(c.cache) ? c.cache : C(b.cache) ? b.cache : t);L && (m = L.get(ba), A(m) ? m && x(m.then) ? m.then(p, p) : J(m) ? k(m[1], m[0], ja(m[2]), m[3]) : k(m, 200, {}, "OK") : L.put(ba, H));v(m) && ((m = fd(c.url) ? f()[c.xsrfCookieName || b.xsrfCookieName] : w) && (S[c.xsrfHeaderName || b.xsrfHeaderName] = m), e(c.method, ba, d, h, S, c.timeout, c.withCredentials, c.responseType));return H;
			}function r(a, b) {
				0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);return a;
			}var t = h("$http");b.paramSerializer = G(b.paramSerializer) ? k.get(b.paramSerializer) : b.paramSerializer;var E = [];m(d, function (a) {
				E.unshift(G(a) ? k.get(a) : k.invoke(a));
			});n.pendingRequests = [];(function (a) {
				m(arguments, function (a) {
					n[a] = function (b, c) {
						return n(P({}, c || {}, { method: a, url: b }));
					};
				});
			})("get", "delete", "head", "jsonp");(function (a) {
				m(arguments, function (a) {
					n[a] = function (b, c, d) {
						return n(P({}, d || {}, { method: a, url: b, data: c }));
					};
				});
			})("post", "put", "patch");n.defaults = b;return n;
		}];
	}function gf() {
		this.$get = function () {
			return function () {
				return new Q.XMLHttpRequest();
			};
		};
	}function ff() {
		this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (b, a, c, d) {
			return Sf(b, d, b.defer, a.angular.callbacks, c[0]);
		}];
	}function Sf(b, a, c, d, e) {
		function f(a, b, c) {
			var f = e.createElement("script"),
			    n = null;f.type = "text/javascript";f.src = a;f.async = !0;n = function (a) {
				f.removeEventListener("load", n, !1);f.removeEventListener("error", n, !1);e.body.removeChild(f);f = null;var h = -1,
				    t = "unknown";a && ("load" !== a.type || d[b].called || (a = { type: "error" }), t = a.type, h = "error" === a.type ? 404 : 200);c && c(h, t);
			};f.addEventListener("load", n, !1);f.addEventListener("error", n, !1);e.body.appendChild(f);return n;
		}return function (e, g, l, k, n, p, r, t) {
			function E() {
				q && q();z && z.abort();
			}function K(a, d, e, f, g) {
				A(s) && c.cancel(s);q = z = null;a(d, e, f, g);b.$$completeOutstandingRequest(y);
			}b.$$incOutstandingRequestCount();g = g || b.url();if ("jsonp" == F(e)) {
				var u = "_" + (d.counter++).toString(36);d[u] = function (a) {
					d[u].data = a;d[u].called = !0;
				};var q = f(g.replace("JSON_CALLBACK", "angular.callbacks." + u), u, function (a, b) {
					K(k, a, d[u].data, "", b);d[u] = y;
				});
			} else {
				var z = a(e, g);z.open(e, g, !0);m(n, function (a, b) {
					A(a) && z.setRequestHeader(b, a);
				});z.onload = function () {
					var a = z.statusText || "",
					    b = "response" in z ? z.response : z.responseText,
					    c = 1223 === z.status ? 204 : z.status;0 === c && (c = b ? 200 : "file" == Aa(g).protocol ? 404 : 0);K(k, c, b, z.getAllResponseHeaders(), a);
				};e = function () {
					K(k, -1, null, null, "");
				};z.onerror = e;z.onabort = e;r && (z.withCredentials = !0);if (t) try {
					z.responseType = t;
				} catch (N) {
					if ("json" !== t) throw N;
				}z.send(v(l) ? null : l);
			}if (0 < p) var s = c(E, p);else p && x(p.then) && p.then(E);
		};
	}function af() {
		var b = "{{",
		    a = "}}";this.startSymbol = function (a) {
			return a ? (b = a, this) : b;
		};this.endSymbol = function (b) {
			return b ? (a = b, this) : a;
		};this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
			function f(a) {
				return "\\\\\\" + a;
			}function h(c) {
				return c.replace(n, b).replace(p, a);
			}function g(f, g, n, p) {
				function u(a) {
					try {
						var b = a;a = n ? e.getTrusted(n, b) : e.valueOf(b);var c;if (p && !A(a)) c = a;else if (null == a) c = "";else {
							switch (typeof a) {case "string":
									break;case "number":
									a = "" + a;break;default:
									a = eb(a);}c = a;
						}return c;
					} catch (g) {
						d(La.interr(f, g));
					}
				}p = !!p;for (var q, m, N = 0, s = [], O = [], H = f.length, L = [], W = []; N < H;) if (-1 != (q = f.indexOf(b, N)) && -1 != (m = f.indexOf(a, q + l))) N !== q && L.push(h(f.substring(N, q))), N = f.substring(q + l, m), s.push(N), O.push(c(N, u)), N = m + k, W.push(L.length), L.push("");else {
					N !== H && L.push(h(f.substring(N)));break;
				}n && 1 < L.length && La.throwNoconcat(f);if (!g || s.length) {
					var S = function S(a) {
						for (var b = 0, c = s.length; b < c; b++) {
							if (p && v(a[b])) return;L[W[b]] = a[b];
						}return L.join("");
					};return P(function (a) {
						var b = 0,
						    c = s.length,
						    e = Array(c);try {
							for (; b < c; b++) e[b] = O[b](a);return S(e);
						} catch (g) {
							d(La.interr(f, g));
						}
					}, { exp: f, expressions: s, $$watchDelegate: function $$watchDelegate(a, b) {
							var c;return a.$watchGroup(O, function (d, e) {
								var f = S(d);x(b) && b.call(this, f, d !== e ? c : f, a);c = f;
							});
						} });
				}
			}var l = b.length,
			    k = a.length,
			    n = new RegExp(b.replace(/./g, f), "g"),
			    p = new RegExp(a.replace(/./g, f), "g");g.startSymbol = function () {
				return b;
			};g.endSymbol = function () {
				return a;
			};return g;
		}];
	}function bf() {
		this.$get = ["$rootScope", "$window", "$q", "$$q", function (b, a, c, d) {
			function e(e, g, l, k) {
				var n = 4 < arguments.length,
				    p = n ? ua.call(arguments, 4) : [],
				    r = a.setInterval,
				    t = a.clearInterval,
				    E = 0,
				    K = A(k) && !k,
				    u = (K ? d : c).defer(),
				    q = u.promise;l = A(l) ? l : 0;q.then(null, null, n ? function () {
					e.apply(null, p);
				} : e);q.$$intervalId = r(function () {
					u.notify(E++);0 < l && E >= l && (u.resolve(E), t(q.$$intervalId), delete f[q.$$intervalId]);K || b.$apply();
				}, g);f[q.$$intervalId] = u;return q;
			}var f = {};e.cancel = function (b) {
				return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1;
			};return e;
		}];
	}function ac(b) {
		b = b.split("/");for (var a = b.length; a--;) b[a] = ob(b[a]);return b.join("/");
	}function gd(b, a) {
		var c = Aa(b);a.$$protocol = c.protocol;a.$$host = c.hostname;a.$$port = Y(c.port) || Tf[c.protocol] || null;
	}function hd(b, a) {
		var c = "/" !== b.charAt(0);
		c && (b = "/" + b);var d = Aa(b);a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);a.$$search = yc(d.search);a.$$hash = decodeURIComponent(d.hash);a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path);
	}function sa(b, a) {
		if (0 === a.indexOf(b)) return a.substr(b.length);
	}function Ja(b) {
		var a = b.indexOf("#");return -1 == a ? b : b.substr(0, a);
	}function Cb(b) {
		return b.replace(/(#.+)|#$/, "$1");
	}function bc(b, a, c) {
		this.$$html5 = !0;c = c || "";gd(b, this);this.$$parse = function (b) {
			var c = sa(a, b);if (!G(c)) throw Db("ipthprfx", b, a);hd(c, this);this.$$path || (this.$$path = "/");this.$$compose();
		};this.$$compose = function () {
			var b = Pb(this.$$search),
			    c = this.$$hash ? "#" + ob(this.$$hash) : "";this.$$url = ac(this.$$path) + (b ? "?" + b : "") + c;this.$$absUrl = a + this.$$url.substr(1);
		};this.$$parseLinkUrl = function (d, e) {
			if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, h;A(f = sa(b, d)) ? (h = f, h = A(f = sa(c, f)) ? a + (sa("/", f) || f) : b + h) : A(f = sa(a, d)) ? h = a + f : a == d + "/" && (h = a);h && this.$$parse(h);return !!h;
		};
	}function cc(b, a, c) {
		gd(b, this);
		this.$$parse = function (d) {
			var e = sa(b, d) || sa(a, d),
			    f;v(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", v(e) && (b = d, this.replace())) : (f = sa(c, e), v(f) && (f = e));hd(f, this);d = this.$$path;var e = b,
			    h = /^\/[A-Z]:(\/.*)/;0 === f.indexOf(e) && (f = f.replace(e, ""));h.exec(f) || (d = (f = h.exec(d)) ? f[1] : d);this.$$path = d;this.$$compose();
		};this.$$compose = function () {
			var a = Pb(this.$$search),
			    e = this.$$hash ? "#" + ob(this.$$hash) : "";this.$$url = ac(this.$$path) + (a ? "?" + a : "") + e;this.$$absUrl = b + (this.$$url ? c + this.$$url : "");
		};this.$$parseLinkUrl = function (a, c) {
			return Ja(b) == Ja(a) ? (this.$$parse(a), !0) : !1;
		};
	}function id(b, a, c) {
		this.$$html5 = !0;cc.apply(this, arguments);this.$$parseLinkUrl = function (d, e) {
			if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, h;b == Ja(d) ? f = d : (h = sa(a, d)) ? f = b + c + h : a === d + "/" && (f = a);f && this.$$parse(f);return !!f;
		};this.$$compose = function () {
			var a = Pb(this.$$search),
			    e = this.$$hash ? "#" + ob(this.$$hash) : "";this.$$url = ac(this.$$path) + (a ? "?" + a : "") + e;this.$$absUrl = b + c + this.$$url;
		};
	}function Eb(b) {
		return function () {
			return this[b];
		};
	}function jd(b, a) {
		return function (c) {
			if (v(c)) return this[b];this[b] = a(c);this.$$compose();return this;
		};
	}function hf() {
		var b = "",
		    a = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (a) {
			return A(a) ? (b = a, this) : b;
		};this.html5Mode = function (b) {
			return bb(b) ? (a.enabled = b, this) : C(b) ? (bb(b.enabled) && (a.enabled = b.enabled), bb(b.requireBase) && (a.requireBase = b.requireBase), bb(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a;
		};this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, h) {
			function g(a, b, c) {
				var e = k.url(),
				    f = k.$$state;try {
					d.url(a, b, c), k.$$state = d.state();
				} catch (g) {
					throw (k.url(e), k.$$state = f, g);
				}
			}function l(a, b) {
				c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b);
			}var k, n;n = d.baseHref();var p = d.url(),
			    r;if (a.enabled) {
				if (!n && a.requireBase) throw Db("nobase");r = p.substring(0, p.indexOf("/", p.indexOf("//") + 2)) + (n || "/");n = e.history ? bc : id;
			} else r = Ja(p), n = cc;var t = r.substr(0, Ja(r).lastIndexOf("/") + 1);k = new n(r, t, "#" + b);k.$$parseLinkUrl(p, p);k.$$state = d.state();
			var E = /^\s*(javascript|mailto):/i;f.on("click", function (b) {
				if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
					for (var e = B(b.target); "a" !== wa(e[0]);) if (e[0] === f[0] || !(e = e.parent())[0]) return;var g = e.prop("href"),
					    l = e.attr("href") || e.attr("xlink:href");C(g) && "[object SVGAnimatedString]" === g.toString() && (g = Aa(g.animVal).href);E.test(g) || !g || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(g, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), h.angular["ff-684208-preventDefault"] = !0));
				}
			});Cb(k.absUrl()) != Cb(p) && d.url(k.absUrl(), !0);var K = !0;d.onUrlChange(function (a, b) {
				v(sa(t, a)) ? h.location.href = a : (c.$evalAsync(function () {
					var d = k.absUrl(),
					    e = k.$$state,
					    f;k.$$parse(a);k.$$state = b;f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, g(d, !1, e)) : (K = !1, l(d, e)));
				}), c.$$phase || c.$digest());
			});c.$watch(function () {
				var a = Cb(d.url()),
				    b = Cb(k.absUrl()),
				    f = d.state(),
				    h = k.$$replace,
				    r = a !== b || k.$$html5 && e.history && f !== k.$$state;if (K || r) K = !1, c.$evalAsync(function () {
					var b = k.absUrl(),
					    d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (r && g(b, h, f === k.$$state ? null : k.$$state), l(a, f)));
				});k.$$replace = !1;
			});return k;
		}];
	}function jf() {
		var b = !0,
		    a = this;this.debugEnabled = function (a) {
			return A(a) ? (b = a, this) : b;
		};this.$get = ["$window", function (c) {
			function d(a) {
				a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
			}function e(a) {
				var b = c.console || {},
				    e = b[a] || b.log || y;a = !1;try {
					a = !!e.apply;
				} catch (l) {}return a ? function () {
					var a = [];m(arguments, function (b) {
						a.push(d(b));
					});return e.apply(b, a);
				} : function (a, b) {
					e(a, null == b ? "" : b);
				};
			}return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: (function () {
					var c = e("debug");return function () {
						b && c.apply(a, arguments);
					};
				})() };
		}];
	}function Xa(b, a) {
		if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw Z("isecfld", a);return b;
	}function kd(b, a) {
		b += "";if (!G(b)) throw Z("iseccst", a);return b;
	}function Ba(b, a) {
		if (b) {
			if (b.constructor === b) throw Z("isecfn", a);if (b.window === b) throw Z("isecwindow", a);if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw Z("isecdom", a);if (b === Object) throw Z("isecobj", a);
		}return b;
	}function ld(b, a) {
		if (b) {
			if (b.constructor === b) throw Z("isecfn", a);if (b === Uf || b === Vf || b === Wf) throw Z("isecff", a);
		}
	}function md(b, a) {
		if (b && (b === 0..constructor || b === (!1).constructor || b === "".constructor || b === ({}).constructor || b === [].constructor || b === Function.constructor)) throw Z("isecaf", a);
	}function Xf(b, a) {
		return "undefined" !== typeof b ? b : a;
	}function nd(b, a) {
		return "undefined" === typeof b ? a : "undefined" === typeof a ? b : b + a;
	}function U(b, a) {
		var c, d;switch (b.type) {case s.Program:
				c = !0;m(b.body, function (b) {
					U(b.expression, a);c = c && b.expression.constant;
				});b.constant = c;break;case s.Literal:
				b.constant = !0;b.toWatch = [];break;case s.UnaryExpression:
				U(b.argument, a);b.constant = b.argument.constant;b.toWatch = b.argument.toWatch;break;case s.BinaryExpression:
				U(b.left, a);U(b.right, a);b.constant = b.left.constant && b.right.constant;b.toWatch = b.left.toWatch.concat(b.right.toWatch);break;case s.LogicalExpression:
				U(b.left, a);U(b.right, a);b.constant = b.left.constant && b.right.constant;b.toWatch = b.constant ? [] : [b];break;case s.ConditionalExpression:
				U(b.test, a);U(b.alternate, a);U(b.consequent, a);b.constant = b.test.constant && b.alternate.constant && b.consequent.constant;b.toWatch = b.constant ? [] : [b];break;case s.Identifier:
				b.constant = !1;b.toWatch = [b];break;case s.MemberExpression:
				U(b.object, a);b.computed && U(b.property, a);b.constant = b.object.constant && (!b.computed || b.property.constant);b.toWatch = [b];break;case s.CallExpression:
				c = b.filter ? !a(b.callee.name).$stateful : !1;d = [];m(b.arguments, function (b) {
					U(b, a);c = c && b.constant;b.constant || d.push.apply(d, b.toWatch);
				});b.constant = c;b.toWatch = b.filter && !a(b.callee.name).$stateful ? d : [b];break;case s.AssignmentExpression:
				U(b.left, a);U(b.right, a);b.constant = b.left.constant && b.right.constant;
				b.toWatch = [b];break;case s.ArrayExpression:
				c = !0;d = [];m(b.elements, function (b) {
					U(b, a);c = c && b.constant;b.constant || d.push.apply(d, b.toWatch);
				});b.constant = c;b.toWatch = d;break;case s.ObjectExpression:
				c = !0;d = [];m(b.properties, function (b) {
					U(b.value, a);c = c && b.value.constant;b.value.constant || d.push.apply(d, b.value.toWatch);
				});b.constant = c;b.toWatch = d;break;case s.ThisExpression:
				b.constant = !1, b.toWatch = [];}
	}function od(b) {
		if (1 == b.length) {
			b = b[0].expression;var a = b.toWatch;return 1 !== a.length ? a : a[0] !== b ? a : w;
		}
	}
	function pd(b) {
		return b.type === s.Identifier || b.type === s.MemberExpression;
	}function qd(b) {
		if (1 === b.body.length && pd(b.body[0].expression)) return { type: s.AssignmentExpression, left: b.body[0].expression, right: { type: s.NGValueParameter }, operator: "=" };
	}function rd(b) {
		return 0 === b.body.length || 1 === b.body.length && (b.body[0].expression.type === s.Literal || b.body[0].expression.type === s.ArrayExpression || b.body[0].expression.type === s.ObjectExpression);
	}function sd(b, a) {
		this.astBuilder = b;this.$filter = a;
	}function td(b, a) {
		this.astBuilder = b;this.$filter = a;
	}function Fb(b) {
		return "constructor" == b;
	}function dc(b) {
		return x(b.valueOf) ? b.valueOf() : Yf.call(b);
	}function kf() {
		var b = fa(),
		    a = fa();this.$get = ["$filter", function (c) {
			function d(a, b) {
				return null == a || null == b ? a === b : "object" === typeof a && (a = dc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b;
			}function e(a, b, c, e, f) {
				var g = e.inputs,
				    h;if (1 === g.length) {
					var k = d,
					    g = g[0];return a.$watch(function (a) {
						var b = g(a);d(b, k) || (h = e(a, w, w, [b]), k = b && dc(b));return h;
					}, b, c, f);
				}for (var l = [], n = [], p = 0, m = g.length; p < m; p++) l[p] = d, n[p] = null;return a.$watch(function (a) {
					for (var b = !1, c = 0, f = g.length; c < f; c++) {
						var k = g[c](a);if (b || (b = !d(k, l[c]))) n[c] = k, l[c] = k && dc(k);
					}b && (h = e(a, w, w, n));return h;
				}, b, c, f);
			}function f(a, b, c, d) {
				var e, f;return e = a.$watch(function (a) {
					return d(a);
				}, function (a, c, d) {
					f = a;x(b) && b.apply(this, arguments);A(a) && d.$$postDigest(function () {
						A(f) && e();
					});
				}, c);
			}function h(a, b, c, d) {
				function e(a) {
					var b = !0;m(a, function (a) {
						A(a) || (b = !1);
					});return b;
				}var f, g;return f = a.$watch(function (a) {
					return d(a);
				}, function (a, c, d) {
					g = a;x(b) && b.call(this, a, c, d);e(a) && d.$$postDigest(function () {
						e(g) && f();
					});
				}, c);
			}function g(a, b, c, d) {
				var e;return e = a.$watch(function (a) {
					return d(a);
				}, function (a, c, d) {
					x(b) && b.apply(this, arguments);e();
				}, c);
			}function l(a, b) {
				if (!b) return a;var c = a.$$watchDelegate,
				    c = c !== h && c !== f ? function (c, d, e, f) {
					e = a(c, d, e, f);return b(e, c, d);
				} : function (c, d, e, f) {
					e = a(c, d, e, f);c = b(e, c, d);return A(e) ? c : e;
				};a.$$watchDelegate && a.$$watchDelegate !== e ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = e, c.inputs = a.inputs ? a.inputs : [a]);return c;
			}var k = Fa().noUnsafeEval,
			    n = { csp: k, expensiveChecks: !1 },
			    p = { csp: k, expensiveChecks: !0 };return function (d, k, E) {
				var m, u, q;switch (typeof d) {case "string":
						q = d = d.trim();var s = E ? a : b;m = s[q];m || (":" === d.charAt(0) && ":" === d.charAt(1) && (u = !0, d = d.substring(2)), E = E ? p : n, m = new ec(E), m = new fc(m, c, E).parse(d), m.constant ? m.$$watchDelegate = g : u ? m.$$watchDelegate = m.literal ? h : f : m.inputs && (m.$$watchDelegate = e), s[q] = m);return l(m, k);case "function":
						return l(d, k);default:
						return y;}
			};
		}];
	}function mf() {
		this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
			return ud(function (a) {
				b.$evalAsync(a);
			}, a);
		}];
	}function nf() {
		this.$get = ["$browser", "$exceptionHandler", function (b, a) {
			return ud(function (a) {
				b.defer(a);
			}, a);
		}];
	}function ud(b, a) {
		function c(a, b, c) {
			function d(b) {
				return function (c) {
					e || (e = !0, b.call(a, c));
				};
			}var e = !1;return [d(b), d(c)];
		}function d() {
			this.$$state = { status: 0 };
		}function e(a, b) {
			return function (c) {
				b.call(a, c);
			};
		}function f(c) {
			!c.processScheduled && c.pending && (c.processScheduled = !0, b(function () {
				var b, d, e;e = c.pending;
				c.processScheduled = !1;c.pending = w;for (var f = 0, g = e.length; f < g; ++f) {
					d = e[f][0];b = e[f][c.status];try {
						x(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
					} catch (h) {
						d.reject(h), a(h);
					}
				}
			}));
		}function h() {
			this.promise = new d();this.resolve = e(this, this.resolve);this.reject = e(this, this.reject);this.notify = e(this, this.notify);
		}var g = I("$q", TypeError);P(d.prototype, { then: function then(a, b, c) {
				if (v(a) && v(b) && v(c)) return this;var d = new h();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && f(this.$$state);return d.promise;
			}, "catch": function _catch(a) {
				return this.then(null, a);
			}, "finally": function _finally(a, b) {
				return this.then(function (b) {
					return k(b, !0, a);
				}, function (b) {
					return k(b, !1, a);
				}, b);
			} });P(h.prototype, { resolve: function resolve(a) {
				this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a));
			}, $$resolve: function $$resolve(b) {
				var d, e;e = c(this, this.$$resolve, this.$$reject);try {
					if (C(b) || x(b)) d = b && b.then;x(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state));
				} catch (g) {
					e[1](g), a(g);
				}
			}, reject: function reject(a) {
				this.promise.$$state.status || this.$$reject(a);
			}, $$reject: function $$reject(a) {
				this.promise.$$state.value = a;this.promise.$$state.status = 2;f(this.promise.$$state);
			}, notify: function notify(c) {
				var d = this.promise.$$state.pending;0 >= this.promise.$$state.status && d && d.length && b(function () {
					for (var b, e, f = 0, g = d.length; f < g; f++) {
						e = d[f][0];b = d[f][3];try {
							e.notify(x(b) ? b(c) : c);
						} catch (h) {
							a(h);
						}
					}
				});
			} });
		var l = function l(a, b) {
			var c = new h();b ? c.resolve(a) : c.reject(a);return c.promise;
		},
		    k = function k(a, b, c) {
			var d = null;try {
				x(c) && (d = c());
			} catch (e) {
				return l(e, !1);
			}return d && x(d.then) ? d.then(function () {
				return l(a, b);
			}, function (a) {
				return l(a, !1);
			}) : l(a, b);
		},
		    n = function n(a, b, c, d) {
			var e = new h();e.resolve(a);return e.promise.then(b, c, d);
		},
		    p = function t(a) {
			if (!x(a)) throw g("norslvr", a);if (!(this instanceof t)) return new t(a);var b = new h();a(function (a) {
				b.resolve(a);
			}, function (a) {
				b.reject(a);
			});return b.promise;
		};p.defer = function () {
			return new h();
		};
		p.reject = function (a) {
			var b = new h();b.reject(a);return b.promise;
		};p.when = n;p.resolve = n;p.all = function (a) {
			var b = new h(),
			    c = 0,
			    d = J(a) ? [] : {};m(a, function (a, e) {
				c++;n(a).then(function (a) {
					d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
				}, function (a) {
					d.hasOwnProperty(e) || b.reject(a);
				});
			});0 === c && b.resolve(d);return b.promise;
		};return p;
	}function wf() {
		this.$get = ["$window", "$timeout", function (b, a) {
			var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
			    d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
			    e = !!c,
			    f = e ? function (a) {
				var b = c(a);return function () {
					d(b);
				};
			} : function (b) {
				var c = a(b, 16.66, !1);return function () {
					a.cancel(c);
				};
			};f.supported = e;return f;
		}];
	}function lf() {
		function b(a) {
			function b() {
				this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++nb;this.$$ChildScope = null;
			}b.prototype = a;return b;
		}var a = 10,
		    c = I("$rootScope"),
		    d = null,
		    e = null;this.digestTtl = function (b) {
			arguments.length && (a = b);return a;
		};this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (f, h, g, l) {
			function k(a) {
				a.currentScope.$$destroyed = !0;
			}function n() {
				this.$id = ++nb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
			}function p(a) {
				if (q.$$phase) throw c("inprog", q.$$phase);q.$$phase = a;
			}function r(a, b) {
				do a.$$watchersCount += b; while (a = a.$parent);
			}function t(a, b, c) {
				do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
			}function E() {}function s() {
				for (; w.length;) try {
					w.shift()();
				} catch (a) {
					h(a);
				}e = null;
			}function u() {
				null === e && (e = l.defer(function () {
					q.$apply(s);
				}));
			}n.prototype = { constructor: n, $new: function $new(a, c) {
					var d;c = c || this;a ? (d = new n(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(a || c != this) && d.$on("$destroy", k);return d;
				}, $watch: function $watch(a, b, c, e) {
					var f = g(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, c, f, a);var h = this,
					    k = h.$$watchers,
					    l = { fn: b, last: E, get: f, exp: e || a, eq: !!c };d = null;x(b) || (l.fn = y);k || (k = h.$$watchers = []);k.unshift(l);r(this, 1);return function () {
						0 <= cb(k, l) && r(h, -1);d = null;
					};
				}, $watchGroup: function $watchGroup(a, b) {
					function c() {
						h = !1;k ? (k = !1, b(e, e, g)) : b(e, d, g);
					}var d = Array(a.length),
					    e = Array(a.length),
					    f = [],
					    g = this,
					    h = !1,
					    k = !0;
					if (!a.length) {
						var l = !0;g.$evalAsync(function () {
							l && b(e, e, g);
						});return function () {
							l = !1;
						};
					}if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
						e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
					});m(a, function (a, b) {
						var k = g.$watch(a, function (a, f) {
							e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
						});f.push(k);
					});return function () {
						for (; f.length;) f.shift()();
					};
				}, $watchCollection: function $watchCollection(a, b) {
					function c(a) {
						e = a;var b, d, g, h;if (!v(e)) {
							if (C(e)) if (Da(e)) for (f !== p && (f = p, t = f.length = 0, l++), a = e.length, t !== a && (l++, f.length = t = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);else {
								f !== r && (f = r = {}, t = 0, l++);a = 0;for (b in e) ta.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (t++, f[b] = g, l++));if (t > a) for (b in (l++, f)) ta.call(e, b) || (t--, delete f[b]);
							} else f !== e && (f = e, l++);return l;
						}
					}c.$stateful = !0;var d = this,
					    e,
					    f,
					    h,
					    k = 1 < b.length,
					    l = 0,
					    n = g(a, c),
					    p = [],
					    r = {},
					    q = !0,
					    t = 0;return this.$watch(n, function () {
						q ? (q = !1, b(e, e, d)) : b(e, h, d);if (k) if (C(e)) if (Da(e)) {
							h = Array(e.length);for (var a = 0; a < e.length; a++) h[a] = e[a];
						} else for (a in (h = {}, e)) ta.call(e, a) && (h[a] = e[a]);else h = e;
					});
				}, $digest: function $digest() {
					var b,
					    f,
					    g,
					    k,
					    n,
					    r,
					    t = a,
					    m,
					    u = [],
					    D,
					    v;p("$digest");l.$$checkUrlChange();this === q && null !== e && (l.defer.cancel(e), s());d = null;do {
						r = !1;for (m = this; z.length;) {
							try {
								v = z.shift(), v.scope.$eval(v.expression, v.locals);
							} catch (w) {
								h(w);
							}d = null;
						}a: do {
							if (k = m.$$watchers) for (n = k.length; n--;) try {
								if (b = k[n]) if ((f = b.get(m)) !== (g = b.last) && !(b.eq ? ka(f, g) : "number" === typeof f && "number" === typeof g && isNaN(f) && isNaN(g))) r = !0, d = b, b.last = b.eq ? ha(f, null) : f, b.fn(f, g === E ? f : g, m), 5 > t && (D = 4 - t, u[D] || (u[D] = []), u[D].push({ msg: x(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp, newVal: f, oldVal: g }));else if (b === d) {
									r = !1;break a;
								}
							} catch (y) {
								h(y);
							}if (!(k = m.$$watchersCount && m.$$childHead || m !== this && m.$$nextSibling)) for (; m !== this && !(k = m.$$nextSibling);) m = m.$parent;
						} while (m = k);if ((r || z.length) && ! t--) throw (q.$$phase = null, c("infdig", a, u));
					} while (r || z.length);for (q.$$phase = null; N.length;) try {
						N.shift()();
					} catch (A) {
						h(A);
					}
				}, $destroy: function $destroy() {
					if (!this.$$destroyed) {
						var a = this.$parent;this.$broadcast("$destroy");
						this.$$destroyed = !0;this === q && l.$$applicationDestroyed();r(this, -this.$$watchersCount);for (var b in this.$$listenerCount) t(this, this.$$listenerCount[b], b);a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = y;this.$on = this.$watch = this.$watchGroup = function () {
							return y;
						};this.$$listeners = {};this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
					}
				}, $eval: function $eval(a, b) {
					return g(a)(this, b);
				}, $evalAsync: function $evalAsync(a, b) {
					q.$$phase || z.length || l.defer(function () {
						z.length && q.$digest();
					});z.push({ scope: this, expression: a, locals: b });
				}, $$postDigest: function $$postDigest(a) {
					N.push(a);
				}, $apply: function $apply(a) {
					try {
						p("$apply");try {
							return this.$eval(a);
						} finally {
							q.$$phase = null;
						}
					} catch (b) {
						h(b);
					} finally {
						try {
							q.$digest();
						} catch (c) {
							throw (h(c), c);
						}
					}
				}, $applyAsync: function $applyAsync(a) {
					function b() {
						c.$eval(a);
					}var c = this;a && w.push(b);u();
				}, $on: function $on(a, b) {
					var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);var e = this;return function () {
						var d = c.indexOf(b);-1 !== d && (c[d] = null, t(e, 1, a));
					};
				}, $emit: function $emit(a, b) {
					var c = [],
					    d,
					    e = this,
					    f = !1,
					    g = { name: a, targetScope: e, stopPropagation: function stopPropagation() {
							f = !0;
						}, preventDefault: function preventDefault() {
							g.defaultPrevented = !0;
						}, defaultPrevented: !1 },
					    k = db([g], arguments, 1),
					    l,
					    n;do {
						d = e.$$listeners[a] || c;g.currentScope = e;l = 0;for (n = d.length; l < n; l++) if (d[l]) try {
							d[l].apply(null, k);
						} catch (p) {
							h(p);
						} else d.splice(l, 1), l--, n--;if (f) return g.currentScope = null, g;e = e.$parent;
					} while (e);g.currentScope = null;return g;
				}, $broadcast: function $broadcast(a, b) {
					var c = this,
					    d = this,
					    e = { name: a, targetScope: this, preventDefault: function preventDefault() {
							e.defaultPrevented = !0;
						}, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return e;for (var f = db([e], arguments, 1), g, k; c = d;) {
						e.currentScope = c;d = c.$$listeners[a] || [];g = 0;for (k = d.length; g < k; g++) if (d[g]) try {
							d[g].apply(null, f);
						} catch (l) {
							h(l);
						} else d.splice(g, 1), g--, k--;if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent;
					}e.currentScope = null;return e;
				} };var q = new n(),
			    z = q.$$asyncQueue = [],
			    N = q.$$postDigestQueue = [],
			    w = q.$$applyAsyncQueue = [];return q;
		}];
	}function ge() {
		var b = /^\s*(https?|ftp|mailto|tel|file):/,
		    a = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (a) {
			return A(a) ? (b = a, this) : b;
		};this.imgSrcSanitizationWhitelist = function (b) {
			return A(b) ? (a = b, this) : a;
		};this.$get = function () {
			return function (c, d) {
				var e = d ? a : b,
				    f;f = Aa(c).href;return "" === f || f.match(e) ? c : "unsafe:" + f;
			};
		};
	}function Zf(b) {
		if ("self" === b) return b;if (G(b)) {
			if (-1 < b.indexOf("***")) throw Ca("iwcard", b);b = vd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");return new RegExp("^" + b + "$");
		}if (Oa(b)) return new RegExp("^" + b.source + "$");throw Ca("imatcher");
	}function wd(b) {
		var a = [];A(b) && m(b, function (b) {
			a.push(Zf(b));
		});
		return a;
	}function pf() {
		this.SCE_CONTEXTS = oa;var b = ["self"],
		    a = [];this.resourceUrlWhitelist = function (a) {
			arguments.length && (b = wd(a));return b;
		};this.resourceUrlBlacklist = function (b) {
			arguments.length && (a = wd(b));return a;
		};this.$get = ["$injector", function (c) {
			function d(a, b) {
				return "self" === a ? fd(b) : !!a.exec(b.href);
			}function e(a) {
				var b = function b(a) {
					this.$$unwrapTrustedValue = function () {
						return a;
					};
				};a && (b.prototype = new a());b.prototype.valueOf = function () {
					return this.$$unwrapTrustedValue();
				};b.prototype.toString = function () {
					return this.$$unwrapTrustedValue().toString();
				};
				return b;
			}var f = function f(a) {
				throw Ca("unsafe");
			};c.has("$sanitize") && (f = c.get("$sanitize"));var h = e(),
			    g = {};g[oa.HTML] = e(h);g[oa.CSS] = e(h);g[oa.URL] = e(h);g[oa.JS] = e(h);g[oa.RESOURCE_URL] = e(g[oa.URL]);return { trustAs: function trustAs(a, b) {
					var c = g.hasOwnProperty(a) ? g[a] : null;if (!c) throw Ca("icontext", a, b);if (null === b || v(b) || "" === b) return b;if ("string" !== typeof b) throw Ca("itype", a);return new c(b);
				}, getTrusted: function getTrusted(c, e) {
					if (null === e || v(e) || "" === e) return e;var h = g.hasOwnProperty(c) ? g[c] : null;if (h && e instanceof h) return e.$$unwrapTrustedValue();if (c === oa.RESOURCE_URL) {
						var h = Aa(e.toString()),
						    p,
						    r,
						    t = !1;p = 0;for (r = b.length; p < r; p++) if (d(b[p], h)) {
							t = !0;break;
						}if (t) for (p = 0, r = a.length; p < r; p++) if (d(a[p], h)) {
							t = !1;break;
						}if (t) return e;throw Ca("insecurl", e.toString());
					}if (c === oa.HTML) return f(e);throw Ca("unsafe");
				}, valueOf: function valueOf(a) {
					return a instanceof h ? a.$$unwrapTrustedValue() : a;
				} };
		}];
	}function of() {
		var b = !0;this.enabled = function (a) {
			arguments.length && (b = !!a);return b;
		};this.$get = ["$parse", "$sceDelegate", function (a, c) {
			if (b && 8 > Wa) throw Ca("iequirks");var d = ja(oa);d.isEnabled = function () {
				return b;
			};d.trustAs = c.trustAs;d.getTrusted = c.getTrusted;d.valueOf = c.valueOf;b || (d.trustAs = d.getTrusted = function (a, b) {
				return b;
			}, d.valueOf = $a);d.parseAs = function (b, c) {
				var e = a(c);return e.literal && e.constant ? e : a(c, function (a) {
					return d.getTrusted(b, a);
				});
			};var e = d.parseAs,
			    f = d.getTrusted,
			    h = d.trustAs;m(oa, function (a, b) {
				var c = F(b);d[gb("parse_as_" + c)] = function (b) {
					return e(a, b);
				};d[gb("get_trusted_" + c)] = function (b) {
					return f(a, b);
				};d[gb("trust_as_" + c)] = function (b) {
					return h(a, b);
				};
			});return d;
		}];
	}function qf() {
		this.$get = ["$window", "$document", function (b, a) {
			var c = {},
			    d = Y((/android (\d+)/.exec(F((b.navigator || {}).userAgent)) || [])[1]),
			    e = /Boxee/i.test((b.navigator || {}).userAgent),
			    f = a[0] || {},
			    h,
			    g = /^(Moz|webkit|ms)(?=[A-Z])/,
			    l = f.body && f.body.style,
			    k = !1,
			    n = !1;if (l) {
				for (var p in l) if (k = g.exec(p)) {
					h = k[0];h = h.substr(0, 1).toUpperCase() + h.substr(1);break;
				}h || (h = "WebkitOpacity" in l && "webkit");k = !!("transition" in l || h + "Transition" in l);n = !!("animation" in l || h + "Animation" in l);!d || k && n || (k = G(l.webkitTransition), n = G(l.webkitAnimation));
			}return { history: !(!b.history || !b.history.pushState || 4 > d || e), hasEvent: function hasEvent(a) {
					if ("input" === a && 11 >= Wa) return !1;if (v(c[a])) {
						var b = f.createElement("div");c[a] = "on" + a in b;
					}return c[a];
				}, csp: Fa(), vendorPrefix: h, transitions: k, animations: n, android: d };
		}];
	}function sf() {
		this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, a, c, d) {
			function e(f, h) {
				e.totalPendingRequests++;G(f) && b.get(f) || (f = d.getTrustedResourceUrl(f));var g = a.defaults && a.defaults.transformResponse;
				J(g) ? g = g.filter(function (a) {
					return a !== Zb;
				}) : g === Zb && (g = null);return a.get(f, { cache: b, transformResponse: g })["finally"](function () {
					e.totalPendingRequests--;
				}).then(function (a) {
					b.put(f, a.data);return a.data;
				}, function (a) {
					if (!h) throw ga("tpload", f, a.status, a.statusText);return c.reject(a);
				});
			}e.totalPendingRequests = 0;return e;
		}];
	}function tf() {
		this.$get = ["$rootScope", "$browser", "$location", function (b, a, c) {
			return { findBindings: function findBindings(a, b, c) {
					a = a.getElementsByClassName("ng-binding");var h = [];m(a, function (a) {
						var d = da.element(a).data("$binding");d && m(d, function (d) {
							c ? new RegExp("(^|\\s)" + vd(b) + "(\\s|\\||$)").test(d) && h.push(a) : -1 != d.indexOf(b) && h.push(a);
						});
					});return h;
				}, findModels: function findModels(a, b, c) {
					for (var h = ["ng-", "data-ng-", "ng\\:"], g = 0; g < h.length; ++g) {
						var l = a.querySelectorAll("[" + h[g] + "model" + (c ? "=" : "*=") + '"' + b + '"]');if (l.length) return l;
					}
				}, getLocation: function getLocation() {
					return c.url();
				}, setLocation: function setLocation(a) {
					a !== c.url() && (c.url(a), b.$digest());
				}, whenStable: function whenStable(b) {
					a.notifyWhenNoOutstandingRequests(b);
				} };
		}];
	}function uf() {
		this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (b, a, c, d, e) {
			function f(f, l, k) {
				x(f) || (k = l, l = f, f = y);var n = ua.call(arguments, 3),
				    p = A(k) && !k,
				    r = (p ? d : c).defer(),
				    t = r.promise,
				    m;m = a.defer(function () {
					try {
						r.resolve(f.apply(null, n));
					} catch (a) {
						r.reject(a), e(a);
					} finally {
						delete h[t.$$timeoutId];
					}p || b.$apply();
				}, l);t.$$timeoutId = m;h[m] = r;return t;
			}var h = {};f.cancel = function (b) {
				return b && b.$$timeoutId in h ? (h[b.$$timeoutId].reject("canceled"), delete h[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
			};return f;
		}];
	}
	function Aa(b) {
		Wa && ($.setAttribute("href", b), b = $.href);$.setAttribute("href", b);return { href: $.href, protocol: $.protocol ? $.protocol.replace(/:$/, "") : "", host: $.host, search: $.search ? $.search.replace(/^\?/, "") : "", hash: $.hash ? $.hash.replace(/^#/, "") : "", hostname: $.hostname, port: $.port, pathname: "/" === $.pathname.charAt(0) ? $.pathname : "/" + $.pathname };
	}function fd(b) {
		b = G(b) ? Aa(b) : b;return b.protocol === xd.protocol && b.host === xd.host;
	}function vf() {
		this.$get = qa(Q);
	}function yd(b) {
		function a(a) {
			try {
				return decodeURIComponent(a);
			} catch (b) {
				return a;
			}
		}
		var c = b[0] || {},
		    d = {},
		    e = "";return function () {
			var b, h, g, l, k;b = c.cookie || "";if (b !== e) for (e = b, b = e.split("; "), d = {}, g = 0; g < b.length; g++) h = b[g], l = h.indexOf("="), 0 < l && (k = a(h.substring(0, l)), v(d[k]) && (d[k] = a(h.substring(l + 1))));return d;
		};
	}function zf() {
		this.$get = yd;
	}function Kc(b) {
		function a(c, d) {
			if (C(c)) {
				var e = {};m(c, function (b, c) {
					e[c] = a(c, b);
				});return e;
			}return b.factory(c + "Filter", d);
		}this.register = a;this.$get = ["$injector", function (a) {
			return function (b) {
				return a.get(b + "Filter");
			};
		}];a("currency", zd);a("date", Ad);
		a("filter", $f);a("json", ag);a("limitTo", bg);a("lowercase", cg);a("number", Bd);a("orderBy", Cd);a("uppercase", dg);
	}function $f() {
		return function (b, a, c) {
			if (!Da(b)) {
				if (null == b) return b;throw I("filter")("notarray", b);
			}var d;switch (gc(a)) {case "function":
					break;case "boolean":case "null":case "number":case "string":
					d = !0;case "object":
					a = eg(a, c, d);break;default:
					return b;}return Array.prototype.filter.call(b, a);
		};
	}function eg(b, a, c) {
		var d = C(b) && "$" in b;!0 === a ? a = ka : x(a) || (a = function (a, b) {
			if (v(a)) return !1;if (null === a || null === b) return a === b;if (C(b) || C(a) && !qc(a)) return !1;a = F("" + a);b = F("" + b);return -1 !== a.indexOf(b);
		});return function (e) {
			return d && !C(e) ? Ma(e, b.$, a, !1) : Ma(e, b, a, c);
		};
	}function Ma(_x7, _x8, _x9, _x10, _x11) {
		var _again3 = true;

		_function3: while (_again3) {
			var b = _x7,
			    a = _x8,
			    c = _x9,
			    d = _x10,
			    e = _x11;
			_again3 = false;
			var f = gc(b),
			    h = gc(a);if ("string" === h && "!" === a.charAt(0)) return !Ma(b, a.substring(1), c, d);if (J(b)) return b.some(function (b) {
				return Ma(b, a, c, d);
			});switch (f) {case "object":
					var g;if (d) {
						for (g in b) if ("$" !== g.charAt(0) && Ma(b[g], a, c, !0)) return !0;if (e) {
							return !1;
						} else {
							_x7 = b;
							_x8 = a;
							_x9 = c;
							_x10 = !1;
							_x11 = undefined;
							_again3 = true;
							f = h = g = undefined;
							continue _function3;
						}
					}if ("object" === h) {
						for (g in a) if ((e = a[g], !x(e) && !v(e) && (f = "$" === g, !Ma(f ? b : b[g], e, c, f, f)))) return !1;return !0;
					}return c(b, a);case "function":
					return !1;default:
					return c(b, a);}
		}
	}function gc(b) {
		return null === b ? "null" : typeof b;
	}function zd(b) {
		var a = b.NUMBER_FORMATS;return function (b, d, e) {
			v(d) && (d = a.CURRENCY_SYM);v(e) && (e = a.PATTERNS[1].maxFrac);return null == b ? b : Dd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
		};
	}function Bd(b) {
		var a = b.NUMBER_FORMATS;return function (b, d) {
			return null == b ? b : Dd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
		};
	}function Dd(b, a, c, d, e) {
		if (C(b)) return "";var f = 0 > b;b = Math.abs(b);var h = Infinity === b;if (!h && !isFinite(b)) return "";var g = b + "",
		    l = "",
		    k = !1,
		    n = [];h && (l = "∞");if (!h && -1 !== g.indexOf("e")) {
			var p = g.match(/([\d\.]+)e(-?)(\d+)/);p && "-" == p[2] && p[3] > e + 1 ? b = 0 : (l = g, k = !0);
		}if (h || k) 0 < e && 1 > b && (l = b.toFixed(e), b = parseFloat(l), l = l.replace(hc, d));else {
			h = (g.split(hc)[1] || "").length;v(e) && (e = Math.min(Math.max(a.minFrac, h), a.maxFrac));b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);var h = ("" + b).split(hc),
			    g = h[0],
			    h = h[1] || "",
			    p = 0,
			    r = a.lgSize,
			    t = a.gSize;if (g.length >= r + t) for (p = g.length - r, k = 0; k < p; k++) 0 === (p - k) % t && 0 !== k && (l += c), l += g.charAt(k);for (k = p; k < g.length; k++) 0 === (g.length - k) % r && 0 !== k && (l += c), l += g.charAt(k);for (; h.length < e;) h += "0";e && "0" !== e && (l += d + h.substr(0, e));
		}0 === b && (f = !1);n.push(f ? a.negPre : a.posPre, l, f ? a.negSuf : a.posSuf);return n.join("");
	}function Gb(b, a, c) {
		var d = "";0 > b && (d = "-", b = -b);for (b = "" + b; b.length < a;) b = "0" + b;c && (b = b.substr(b.length - a));return d + b;
	}function aa(b, a, c, d) {
		c = c || 0;return function (e) {
			e = e["get" + b]();if (0 < c || e > -c) e += c;0 === e && -12 == c && (e = 12);return Gb(e, a, d);
		};
	}function Hb(b, a) {
		return function (c, d) {
			var e = c["get" + b](),
			    f = sb(a ? "SHORT" + b : b);return d[f][e];
		};
	}function Ed(b) {
		var a = new Date(b, 0, 1).getDay();return new Date(b, 0, (4 >= a ? 5 : 12) - a);
	}function Fd(b) {
		return function (a) {
			var c = Ed(a.getFullYear());a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;a = 1 + Math.round(a / 6048E5);return Gb(a, b);
		};
	}function ic(b, a) {
		return 0 >= b.getFullYear() ? a.ERAS[0] : a.ERAS[1];
	}function Ad(b) {
		function a(a) {
			var b;if (b = a.match(c)) {
				a = new Date(0);var f = 0,
				    h = 0,
				    g = b[8] ? a.setUTCFullYear : a.setFullYear,
				    l = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = Y(b[9] + b[10]), h = Y(b[9] + b[11]));g.call(a, Y(b[1]), Y(b[2]) - 1, Y(b[3]));f = Y(b[4] || 0) - f;h = Y(b[5] || 0) - h;g = Y(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));l.call(a, f, h, g, b);
			}return a;
		}var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, e, f) {
			var h = "",
			    g = [],
			    l,
			    k;e = e || "mediumDate";e = b.DATETIME_FORMATS[e] || e;G(c) && (c = fg.test(c) ? Y(c) : a(c));V(c) && (c = new Date(c));if (!ea(c) || !isFinite(c.getTime())) return c;for (; e;) (k = gg.exec(e)) ? (g = db(g, k, 1), e = g.pop()) : (g.push(e), e = null);var n = c.getTimezoneOffset();f && (n = wc(f, c.getTimezoneOffset()), c = Ob(c, f, !0));m(g, function (a) {
				l = hg[a];h += l ? l(c, b.DATETIME_FORMATS, n) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
			});return h;
		};
	}function ag() {
		return function (b, a) {
			v(a) && (a = 2);return eb(b, a);
		};
	}function bg() {
		return function (b, a, c) {
			a = Infinity === Math.abs(Number(a)) ? Number(a) : Y(a);if (isNaN(a)) return b;
			V(b) && (b = b.toString());if (!J(b) && !G(b)) return b;c = !c || isNaN(c) ? 0 : Y(c);c = 0 > c && c >= -b.length ? b.length + c : c;return 0 <= a ? b.slice(c, c + a) : 0 === c ? b.slice(a, b.length) : b.slice(Math.max(0, c + a), c);
		};
	}function Cd(b) {
		function a(a, c) {
			c = c ? -1 : 1;return a.map(function (a) {
				var d = 1,
				    g = $a;if (x(a)) g = a;else if (G(a)) {
					if ("+" == a.charAt(0) || "-" == a.charAt(0)) d = "-" == a.charAt(0) ? -1 : 1, a = a.substring(1);if ("" !== a && (g = b(a), g.constant)) var l = g(),
					    g = function g(a) {
						return a[l];
					};
				}return { get: g, descending: d * c };
			});
		}function c(a) {
			switch (typeof a) {case "number":case "boolean":case "string":
					return !0;
				default:
					return !1;}
		}return function (b, e, f) {
			if (!Da(b)) return b;J(e) || (e = [e]);0 === e.length && (e = ["+"]);var h = a(e, f);h.push({ get: function get() {
					return {};
				}, descending: f ? -1 : 1 });b = Array.prototype.map.call(b, function (a, b) {
				return { value: a, predicateValues: h.map(function (d) {
						var e = d.get(a);d = typeof e;if (null === e) d = "string", e = "null";else if ("string" === d) e = e.toLowerCase();else if ("object" === d) a: {
							if ("function" === typeof e.valueOf && (e = e.valueOf(), c(e))) break a;if (qc(e) && (e = e.toString(), c(e))) break a;e = b;
						}return { value: e, type: d };
					}) };
			});
			b.sort(function (a, b) {
				for (var c = 0, d = 0, e = h.length; d < e; ++d) {
					var c = a.predicateValues[d],
					    f = b.predicateValues[d],
					    t = 0;c.type === f.type ? c.value !== f.value && (t = c.value < f.value ? -1 : 1) : t = c.type < f.type ? -1 : 1;if (c = t * h[d].descending) break;
				}return c;
			});return b = b.map(function (a) {
				return a.value;
			});
		};
	}function Na(b) {
		x(b) && (b = { link: b });b.restrict = b.restrict || "AC";return qa(b);
	}function Gd(b, a, c, d, e) {
		var f = this,
		    h = [];f.$error = {};f.$$success = {};f.$pending = w;f.$name = e(a.name || a.ngForm || "")(c);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;f.$$parentForm = Ib;f.$rollbackViewValue = function () {
			m(h, function (a) {
				a.$rollbackViewValue();
			});
		};f.$commitViewValue = function () {
			m(h, function (a) {
				a.$commitViewValue();
			});
		};f.$addControl = function (a) {
			Ta(a.$name, "input");h.push(a);a.$name && (f[a.$name] = a);a.$$parentForm = f;
		};f.$$renameControl = function (a, b) {
			var c = a.$name;f[c] === a && delete f[c];f[b] = a;a.$name = b;
		};f.$removeControl = function (a) {
			a.$name && f[a.$name] === a && delete f[a.$name];m(f.$pending, function (b, c) {
				f.$setValidity(c, null, a);
			});
			m(f.$error, function (b, c) {
				f.$setValidity(c, null, a);
			});m(f.$$success, function (b, c) {
				f.$setValidity(c, null, a);
			});cb(h, a);a.$$parentForm = Ib;
		};Hd({ ctrl: this, $element: b, set: function set(a, b, c) {
				var d = a[b];d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
			}, unset: function unset(a, b, c) {
				var d = a[b];d && (cb(d, c), 0 === d.length && delete a[b]);
			}, $animate: d });f.$setDirty = function () {
			d.removeClass(b, Ya);d.addClass(b, Jb);f.$dirty = !0;f.$pristine = !1;f.$$parentForm.$setDirty();
		};f.$setPristine = function () {
			d.setClass(b, Ya, Jb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;m(h, function (a) {
				a.$setPristine();
			});
		};f.$setUntouched = function () {
			m(h, function (a) {
				a.$setUntouched();
			});
		};f.$setSubmitted = function () {
			d.addClass(b, "ng-submitted");f.$submitted = !0;f.$$parentForm.$setSubmitted();
		};
	}function jc(b) {
		b.$formatters.push(function (a) {
			return b.$isEmpty(a) ? a : a.toString();
		});
	}function jb(b, a, c, d, e, f) {
		var h = F(a[0].type);if (!e.android) {
			var g = !1;a.on("compositionstart", function (a) {
				g = !0;
			});a.on("compositionend", function () {
				g = !1;l();
			});
		}var l = function l(b) {
			k && (f.defer.cancel(k), k = null);if (!g) {
				var e = a.val();b = b && b.type;"password" === h || c.ngTrim && "false" === c.ngTrim || (e = T(e));(d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b);
			}
		};if (e.hasEvent("input")) a.on("input", l);else {
			var k,
			    n = function n(a, b, c) {
				k || (k = f.defer(function () {
					k = null;b && b.value === c || l(a);
				}));
			};a.on("keydown", function (a) {
				var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || n(a, this, this.value);
			});if (e.hasEvent("paste")) a.on("paste cut", n);
		}a.on("change", l);d.$render = function () {
			var b = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;a.val() !== b && a.val(b);
		};
	}function Kb(b, a) {
		return function (c, d) {
			var e, f;if (ea(c)) return c;if (G(c)) {
				'"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));if (ig.test(c)) return new Date(c);b.lastIndex = 0;if (e = b.exec(c)) return e.shift(), f = d ? { yyyy: d.getFullYear(), MM: d.getMonth() + 1, dd: d.getDate(), HH: d.getHours(), mm: d.getMinutes(), ss: d.getSeconds(), sss: d.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, m(e, function (b, c) {
					c < a.length && (f[a[c]] = +b);
				}), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
			}return NaN;
		};
	}function kb(b, a, c, d) {
		return function (e, f, h, g, l, k, n) {
			function p(a) {
				return a && !(a.getTime && a.getTime() !== a.getTime());
			}function r(a) {
				return A(a) && !ea(a) ? c(a) || w : a;
			}Id(e, f, h, g);jb(e, f, h, g, l, k);var t = g && g.$options && g.$options.timezone,
			    m;g.$$parserName = b;g.$parsers.push(function (b) {
				return g.$isEmpty(b) ? null : a.test(b) ? (b = c(b, m), t && (b = Ob(b, t)), b) : w;
			});g.$formatters.push(function (a) {
				if (a && !ea(a)) throw lb("datefmt", a);if (p(a)) return (m = a) && t && (m = Ob(m, t, !0)), n("date")(a, d, t);m = null;return "";
			});if (A(h.min) || h.ngMin) {
				var s;g.$validators.min = function (a) {
					return !p(a) || v(s) || c(a) >= s;
				};h.$observe("min", function (a) {
					s = r(a);g.$validate();
				});
			}if (A(h.max) || h.ngMax) {
				var u;g.$validators.max = function (a) {
					return !p(a) || v(u) || c(a) <= u;
				};h.$observe("max", function (a) {
					u = r(a);g.$validate();
				});
			}
		};
	}function Id(b, a, c, d) {
		(d.$$hasNativeValidators = C(a[0].validity)) && d.$parsers.push(function (b) {
			var c = a.prop("validity") || {};return c.badInput && !c.typeMismatch ? w : b;
		});
	}function Jd(b, a, c, d, e) {
		if (A(d)) {
			b = b(d);if (!b.constant) throw lb("constexpr", c, d);return b(a);
		}return e;
	}function kc(b, a) {
		b = "ngClass" + b;return ["$animate", function (c) {
			function d(a, b) {
				var c = [],
				    d = 0;a: for (; d < a.length; d++) {
					for (var e = a[d], n = 0; n < b.length; n++) if (e == b[n]) continue a;c.push(e);
				}return c;
			}function e(a) {
				var b = [];return J(a) ? (m(a, function (a) {
					b = b.concat(e(a));
				}), b) : G(a) ? a.split(" ") : C(a) ? (m(a, function (a, c) {
					a && (b = b.concat(c.split(" ")));
				}), b) : a;
			}return { restrict: "AC", link: function link(f, h, g) {
					function l(a, b) {
						var c = h.data("$classCounts") || fa(),
						    d = [];m(a, function (a) {
							if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
						});h.data("$classCounts", c);return d.join(" ");
					}function k(b) {
						if (!0 === a || f.$index % 2 === a) {
							var k = e(b || []);if (!n) {
								var m = l(k, 1);g.$addClass(m);
							} else if (!ka(b, n)) {
								var s = e(n),
								    m = d(k, s),
								    k = d(s, k),
								    m = l(m, 1),
								    k = l(k, -1);m && m.length && c.addClass(h, m);k && k.length && c.removeClass(h, k);
							}
						}n = ja(b);
					}var n;f.$watch(g[b], k, !0);g.$observe("class", function (a) {
						k(f.$eval(g[b]));
					});"ngClass" !== b && f.$watch("$index", function (c, d) {
						var h = c & 1;if (h !== (d & 1)) {
							var k = e(f.$eval(g[b]));h === a ? (h = l(k, 1), g.$addClass(h)) : (h = l(k, -1), g.$removeClass(h));
						}
					});
				} };
		}];
	}function Hd(b) {
		function a(a, b) {
			b && !f[a] ? (l.addClass(e, a), f[a] = !0) : !b && f[a] && (l.removeClass(e, a), f[a] = !1);
		}function c(b, c) {
			b = b ? "-" + Ac(b, "-") : "";a(mb + b, !0 === c);a(Kd + b, !1 === c);
		}var d = b.ctrl,
		    e = b.$element,
		    f = {},
		    h = b.set,
		    g = b.unset,
		    l = b.$animate;f[Kd] = !(f[mb] = e.hasClass(mb));d.$setValidity = function (b, e, f) {
			v(e) ? (d.$pending || (d.$pending = {}), h(d.$pending, b, f)) : (d.$pending && g(d.$pending, b, f), Ld(d.$pending) && (d.$pending = w));bb(e) ? e ? (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), g(d.$$success, b, f));d.$pending ? (a(Md, !0), d.$valid = d.$invalid = w, c("", null)) : (a(Md, !1), d.$valid = Ld(d.$error), d.$invalid = !d.$valid, c("", d.$valid));e = d.$pending && d.$pending[b] ? w : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;c(b, e);d.$$parentForm.$setValidity(b, e, d);
		};
	}function Ld(b) {
		if (b) for (var a in b) if (b.hasOwnProperty(a)) return !1;return !0;
	}var jg = /^\/(.+)\/([a-z]*)$/,
	    F = function F(b) {
		return G(b) ? b.toLowerCase() : b;
	},
	    ta = Object.prototype.hasOwnProperty,
	    sb = function sb(b) {
		return G(b) ? b.toUpperCase() : b;
	},
	    Wa,
	    B,
	    ra,
	    ua = [].slice,
	    Nf = [].splice,
	    kg = [].push,
	    va = Object.prototype.toString,
	    rc = Object.getPrototypeOf,
	    Ea = I("ng"),
	    da = Q.angular || (Q.angular = {}),
	    Rb,
	    nb = 0;Wa = X.documentMode;y.$inject = [];$a.$inject = [];var J = Array.isArray,
	    tc = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
	    T = function T(b) {
		return G(b) ? b.trim() : b;
	},
	    vd = function vd(b) {
		return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
	},
	    Fa = function Fa() {
		if (!A(Fa.rules)) {
			var b = X.querySelector("[ng-csp]") || X.querySelector("[data-ng-csp]");if (b) {
				var a = b.getAttribute("ng-csp") || b.getAttribute("data-ng-csp");Fa.rules = { noUnsafeEval: !a || -1 !== a.indexOf("no-unsafe-eval"), noInlineStyle: !a || -1 !== a.indexOf("no-inline-style") };
			} else {
				b = Fa;try {
					new Function(""), a = !1;
				} catch (c) {
					a = !0;
				}b.rules = { noUnsafeEval: a, noInlineStyle: !1 };
			}
		}return Fa.rules;
	},
	    pb = function pb() {
		if (A(pb.name_)) return pb.name_;var b,
		    a,
		    c = Qa.length,
		    d,
		    e;for (a = 0; a < c; ++a) if ((d = Qa[a], b = X.querySelector("[" + d.replace(":", "\\:") + "jq]"))) {
			e = b.getAttribute(d + "jq");break;
		}return pb.name_ = e;
	},
	    Qa = ["ng-", "data-ng-", "ng:", "x-ng-"],
	    be = /[A-Z]/g,
	    Bc = !1,
	    Qb,
	    pa = 1,
	    Pa = 3,
	    fe = { full: "1.4.7", major: 1, minor: 4, dot: 7, codeName: "dark-luminescence" };R.expando = "ng339";var hb = R.cache = {},
	    Ff = 1;R._data = function (b) {
		return this.cache[b[this.expando]] || {};
	};var Af = /([\:\-\_]+(.))/g,
	    Bf = /^moz([A-Z])/,
	    lg = { mouseleave: "mouseout", mouseenter: "mouseover" },
	    Tb = I("jqLite"),
	    Ef = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
	    Sb = /<|&#?\w+;/,
	    Cf = /<([\w:-]+)/,
	    Df = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	    ma = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ma.optgroup = ma.option;ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead;ma.th = ma.td;var Ra = R.prototype = { ready: function ready(b) {
			function a() {
				c || (c = !0, b());
			}var c = !1;"complete" === X.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), R(Q).on("load", a));
		},
		toString: function toString() {
			var b = [];m(this, function (a) {
				b.push("" + a);
			});return "[" + b.join(", ") + "]";
		}, eq: function eq(b) {
			return 0 <= b ? B(this[b]) : B(this[this.length + b]);
		}, length: 0, push: kg, sort: [].sort, splice: [].splice },
	    Bb = {};m("multiple selected checked disabled readOnly required open".split(" "), function (b) {
		Bb[F(b)] = b;
	});var Sc = {};m("input select option textarea button form details".split(" "), function (b) {
		Sc[b] = !0;
	});var $c = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern" };
	m({ data: Vb, removeData: vb, hasData: function hasData(b) {
			for (var a in hb[b.ng339]) return !0;return !1;
		} }, function (b, a) {
		R[a] = b;
	});m({ data: Vb, inheritedData: Ab, scope: function scope(b) {
			return B.data(b, "$scope") || Ab(b.parentNode || b, ["$isolateScope", "$scope"]);
		}, isolateScope: function isolateScope(b) {
			return B.data(b, "$isolateScope") || B.data(b, "$isolateScopeNoTemplate");
		}, controller: Pc, injector: function injector(b) {
			return Ab(b, "$injector");
		}, removeAttr: function removeAttr(b, a) {
			b.removeAttribute(a);
		}, hasClass: xb, css: function css(b, a, c) {
			a = gb(a);if (A(c)) b.style[a] = c;else return b.style[a];
		},
		attr: function attr(b, a, c) {
			var d = b.nodeType;if (d !== Pa && 2 !== d && 8 !== d) if ((d = F(a), Bb[d])) if (A(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));else return b[a] || (b.attributes.getNamedItem(a) || y).specified ? d : w;else if (A(c)) b.setAttribute(a, c);else if (b.getAttribute) return b = b.getAttribute(a, 2), null === b ? w : b;
		}, prop: function prop(b, a, c) {
			if (A(c)) b[a] = c;else return b[a];
		}, text: (function () {
			function b(a, b) {
				if (v(b)) {
					var d = a.nodeType;return d === pa || d === Pa ? a.textContent : "";
				}a.textContent = b;
			}b.$dv = "";return b;
		})(),
		val: function val(b, a) {
			if (v(a)) {
				if (b.multiple && "select" === wa(b)) {
					var c = [];m(b.options, function (a) {
						a.selected && c.push(a.value || a.text);
					});return 0 === c.length ? null : c;
				}return b.value;
			}b.value = a;
		}, html: function html(b, a) {
			if (v(a)) return b.innerHTML;ub(b, !0);b.innerHTML = a;
		}, empty: Qc }, function (b, a) {
		R.prototype[a] = function (a, d) {
			var e,
			    f,
			    h = this.length;if (b !== Qc && v(2 == b.length && b !== xb && b !== Pc ? a : d)) {
				if (C(a)) {
					for (e = 0; e < h; e++) if (b === Vb) b(this[e], a);else for (f in a) b(this[e], f, a[f]);return this;
				}e = b.$dv;h = v(e) ? Math.min(h, 1) : h;
				for (f = 0; f < h; f++) {
					var g = b(this[f], a, d);e = e ? e + g : g;
				}return e;
			}for (e = 0; e < h; e++) b(this[e], a, d);return this;
		};
	});m({ removeData: vb, on: function a(c, d, e, f) {
			if (A(f)) throw Tb("onargs");if (Lc(c)) {
				var h = wb(c, !0);f = h.events;var g = h.handle;g || (g = h.handle = Hf(c, f));for (var h = 0 <= d.indexOf(" ") ? d.split(" ") : [d], l = h.length; l--;) {
					d = h[l];var k = f[d];k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, lg[d], function (a) {
						var c = a.relatedTarget;c && (c === this || this.contains(c)) || g(a, d);
					}) : "$destroy" !== d && c.addEventListener(d, g, !1), k = f[d]);k.push(e);
				}
			}
		}, off: Oc, one: function one(a, c, d) {
			a = B(a);a.on(c, function f() {
				a.off(c, d);a.off(c, f);
			});a.on(c, d);
		}, replaceWith: function replaceWith(a, c) {
			var d,
			    e = a.parentNode;ub(a);m(new R(c), function (c) {
				d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);d = c;
			});
		}, children: function children(a) {
			var c = [];m(a.childNodes, function (a) {
				a.nodeType === pa && c.push(a);
			});return c;
		}, contents: function contents(a) {
			return a.contentDocument || a.childNodes || [];
		}, append: function append(a, c) {
			var d = a.nodeType;if (d === pa || 11 === d) {
				c = new R(c);for (var d = 0, e = c.length; d < e; d++) a.appendChild(c[d]);
			}
		}, prepend: function prepend(a, c) {
			if (a.nodeType === pa) {
				var d = a.firstChild;m(new R(c), function (c) {
					a.insertBefore(c, d);
				});
			}
		}, wrap: function wrap(a, c) {
			c = B(c).eq(0).clone()[0];var d = a.parentNode;d && d.replaceChild(c, a);c.appendChild(a);
		}, remove: Wb, detach: function detach(a) {
			Wb(a, !0);
		}, after: function after(a, c) {
			var d = a,
			    e = a.parentNode;c = new R(c);for (var f = 0, h = c.length; f < h; f++) {
				var g = c[f];e.insertBefore(g, d.nextSibling);d = g;
			}
		}, addClass: zb, removeClass: yb, toggleClass: function toggleClass(a, c, d) {
			c && m(c.split(" "), function (c) {
				var f = d;v(f) && (f = !xb(a, c));(f ? zb : yb)(a, c);
			});
		}, parent: function parent(a) {
			return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
		}, next: function next(a) {
			return a.nextElementSibling;
		}, find: function find(a, c) {
			return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
		}, clone: Ub, triggerHandler: function triggerHandler(a, c, d) {
			var e,
			    f,
			    h = c.type || c,
			    g = wb(a);if (g = (g = g && g.events) && g[h]) e = { preventDefault: function preventDefault() {
					this.defaultPrevented = !0;
				}, isDefaultPrevented: function isDefaultPrevented() {
					return !0 === this.defaultPrevented;
				}, stopImmediatePropagation: function stopImmediatePropagation() {
					this.immediatePropagationStopped = !0;
				}, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
					return !0 === this.immediatePropagationStopped;
				}, stopPropagation: y, type: h, target: a }, c.type && (e = P(e, c)), c = ja(g), f = d ? [e].concat(d) : [e], m(c, function (c) {
				e.isImmediatePropagationStopped() || c.apply(a, f);
			});
		} }, function (a, c) {
		R.prototype[c] = function (c, e, f) {
			for (var h, g = 0, l = this.length; g < l; g++) v(h) ? (h = a(this[g], c, e, f), A(h) && (h = B(h))) : Nc(h, a(this[g], c, e, f));return A(h) ? h : this;
		};R.prototype.bind = R.prototype.on;R.prototype.unbind = R.prototype.off;
	});Ua.prototype = { put: function put(a, c) {
			this[Ga(a, this.nextUid)] = c;
		}, get: function get(a) {
			return this[Ga(a, this.nextUid)];
		}, remove: function remove(a) {
			var c = this[a = Ga(a, this.nextUid)];delete this[a];return c;
		} };var yf = [function () {
		this.$get = [function () {
			return Ua;
		}];
	}],
	    Uc = /^[^\(]*\(\s*([^\)]*)\)/m,
	    mg = /,/,
	    ng = /^\s*(_?)(\S+?)\1\s*$/,
	    Tc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
	    Ha = I("$injector");fb.$$annotate = function (a, c, d) {
		var e;if ("function" === typeof a) {
			if (!(e = a.$inject)) {
				e = [];if (a.length) {
					if (c) throw (G(d) && d || (d = a.name || If(a)), Ha("strictdi", d));c = a.toString().replace(Tc, "");c = c.match(Uc);m(c[1].split(mg), function (a) {
						a.replace(ng, function (a, c, d) {
							e.push(d);
						});
					});
				}a.$inject = e;
			}
		} else J(a) ? (c = a.length - 1, Sa(a[c], "fn"), e = a.slice(0, c)) : Sa(a, "fn", !0);return e;
	};var Nd = I("$animate"),
	    Ue = function Ue() {
		this.$get = ["$q", "$$rAF", function (a, c) {
			function d() {}d.all = y;d.chain = y;d.prototype = { end: y, cancel: y, resume: y, pause: y, complete: y, then: function then(d, f) {
					return a(function (a) {
						c(function () {
							a();
						});
					}).then(d, f);
				} };return d;
		}];
	},
	    Te = function Te() {
		var a = new Ua(),
		    c = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, e) {
			function f(a, c, d) {
				var e = !1;c && (c = G(c) ? c.split(" ") : J(c) ? c : [], m(c, function (c) {
					c && (e = !0, a[c] = d);
				}));return e;
			}function h() {
				m(c, function (c) {
					var d = a.get(c);if (d) {
						var e = Jf(c.attr("class")),
						    f = "",
						    h = "";m(d, function (a, c) {
							a !== !!e[c] && (a ? f += (f.length ? " " : "") + c : h += (h.length ? " " : "") + c);
						});m(c, function (a) {
							f && zb(a, f);h && yb(a, h);
						});a.remove(c);
					}
				});c.length = 0;
			}return { enabled: y, on: y, off: y, pin: y, push: function push(g, l, k, n) {
					n && n();k = k || {};k.from && g.css(k.from);k.to && g.css(k.to);if (k.addClass || k.removeClass) if ((l = k.addClass, n = k.removeClass, k = a.get(g) || {}, l = f(k, l, !0), n = f(k, n, !1), l || n)) a.put(g, k), c.push(g), 1 === c.length && e.$$postDigest(h);return new d();
				} };
		}];
	},
	    Re = ["$provide", function (a) {
		var c = this;this.$$registeredAnimations = Object.create(null);this.register = function (d, e) {
			if (d && "." !== d.charAt(0)) throw Nd("notcsel", d);var f = d + "-animation";c.$$registeredAnimations[d.substr(1)] = f;a.factory(f, e);
		};this.classNameFilter = function (a) {
			if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Nd("nongcls", "ng-animate");return this.$$classNameFilter;
		};this.$get = ["$$animateQueue", function (a) {
			function c(a, d, e) {
				if (e) {
					var l;a: {
						for (l = 0; l < e.length; l++) {
							var k = e[l];if (1 === k.nodeType) {
								l = k;break a;
							}
						}l = void 0;
					}!l || l.parentNode || l.previousElementSibling || (e = null);
				}e ? e.after(a) : d.prepend(a);
			}return { on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
					a.end && a.end();
				}, enter: function enter(f, h, g, l) {
					h = h && B(h);g = g && B(g);h = h || g.parent();c(f, h, g);return a.push(f, "enter", Ia(l));
				}, move: function move(f, h, g, l) {
					h = h && B(h);g = g && B(g);
					h = h || g.parent();c(f, h, g);return a.push(f, "move", Ia(l));
				}, leave: function leave(c, e) {
					return a.push(c, "leave", Ia(e), function () {
						c.remove();
					});
				}, addClass: function addClass(c, e, g) {
					g = Ia(g);g.addClass = ib(g.addclass, e);return a.push(c, "addClass", g);
				}, removeClass: function removeClass(c, e, g) {
					g = Ia(g);g.removeClass = ib(g.removeClass, e);return a.push(c, "removeClass", g);
				}, setClass: function setClass(c, e, g, l) {
					l = Ia(l);l.addClass = ib(l.addClass, e);l.removeClass = ib(l.removeClass, g);return a.push(c, "setClass", l);
				}, animate: function animate(c, e, g, l, k) {
					k = Ia(k);k.from = k.from ? P(k.from, e) : e;k.to = k.to ? P(k.to, g) : g;k.tempClasses = ib(k.tempClasses, l || "ng-inline-animate");return a.push(c, "animate", k);
				} };
		}];
	}],
	    Se = function Se() {
		this.$get = ["$$rAF", "$q", function (a, c) {
			var d = function d() {};d.prototype = { done: function done(a) {
					this.defer && this.defer[!0 === a ? "reject" : "resolve"]();
				}, end: function end() {
					this.done();
				}, cancel: function cancel() {
					this.done(!0);
				}, getPromise: function getPromise() {
					this.defer || (this.defer = c.defer());return this.defer.promise;
				}, then: function then(a, c) {
					return this.getPromise().then(a, c);
				}, "catch": function _catch(a) {
					return this.getPromise()["catch"](a);
				},
				"finally": function _finally(a) {
					return this.getPromise()["finally"](a);
				} };return function (c, f) {
				function h() {
					a(function () {
						f.addClass && (c.addClass(f.addClass), f.addClass = null);f.removeClass && (c.removeClass(f.removeClass), f.removeClass = null);f.to && (c.css(f.to), f.to = null);g || l.done();g = !0;
					});return l;
				}f.cleanupStyles && (f.from = f.to = null);f.from && (c.css(f.from), f.from = null);var g,
				    l = new d();return { start: h, end: h };
			};
		}];
	},
	    ga = I("$compile");Dc.$inject = ["$provide", "$$sanitizeUriProvider"];var Wc = /^((?:x|data)[\:\-_])/i,
	    Of = I("$controller"),
	    Vc = /^(\S+)(\s+as\s+(\w+))?$/,
	    $e = function $e() {
		this.$get = ["$document", function (a) {
			return function (c) {
				c ? !c.nodeType && c instanceof B && (c = c[0]) : c = a[0].body;return c.offsetWidth + 1;
			};
		}];
	},
	    ad = "application/json",
	    $b = { "Content-Type": ad + ";charset=utf-8" },
	    Qf = /^\[|^\{(?!\{)/,
	    Rf = { "[": /]$/, "{": /}$/ },
	    Pf = /^\)\]\}',?\n/,
	    og = I("$http"),
	    ed = function ed(a) {
		return function () {
			throw og("legacy", a);
		};
	},
	    La = da.$interpolateMinErr = I("$interpolate");La.throwNoconcat = function (a) {
		throw La("noconcat", a);
	};La.interr = function (a, c) {
		return La("interr", a, c.toString());
	};var pg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
	    Tf = { http: 80, https: 443, ftp: 21 },
	    Db = I("$location"),
	    qg = { $$html5: !1, $$replace: !1, absUrl: Eb("$$absUrl"), url: function url(a) {
			if (v(a)) return this.$$url;var c = pg.exec(a);(c[1] || "" === a) && this.path(decodeURIComponent(c[1]));(c[2] || c[1] || "" === a) && this.search(c[3] || "");this.hash(c[5] || "");return this;
		}, protocol: Eb("$$protocol"), host: Eb("$$host"), port: Eb("$$port"), path: jd("$$path", function (a) {
			a = null !== a ? a.toString() : "";return "/" == a.charAt(0) ? a : "/" + a;
		}), search: function search(a, c) {
			switch (arguments.length) {case 0:
					return this.$$search;case 1:
					if (G(a) || V(a)) a = a.toString(), this.$$search = yc(a);else if (C(a)) a = ha(a, {}), m(a, function (c, e) {
						null == c && delete a[e];
					}), this.$$search = a;else throw Db("isrcharg");break;default:
					v(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;}this.$$compose();return this;
		}, hash: jd("$$hash", function (a) {
			return null !== a ? a.toString() : "";
		}), replace: function replace() {
			this.$$replace = !0;return this;
		} };m([id, cc, bc], function (a) {
		a.prototype = Object.create(qg);a.prototype.state = function (c) {
			if (!arguments.length) return this.$$state;if (a !== bc || !this.$$html5) throw Db("nostate");this.$$state = v(c) ? null : c;return this;
		};
	});var Z = I("$parse"),
	    Uf = Function.prototype.call,
	    Vf = Function.prototype.apply,
	    Wf = Function.prototype.bind,
	    Lb = fa();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
		Lb[a] = !0;
	});var rg = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
	    ec = function ec(a) {
		this.options = a;
	};ec.prototype = { constructor: ec, lex: function lex(a) {
			this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) if ((a = this.text.charAt(this.index), '"' === a || "'" === a)) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdent(a)) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
				var c = a + this.peek(),
				    d = c + this.peek(2),
				    e = Lb[c],
				    f = Lb[d];Lb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
			}return this.tokens;
		}, is: function is(a, c) {
			return -1 !== c.indexOf(a);
		}, peek: function peek(a) {
			a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
		}, isNumber: function isNumber(a) {
			return "0" <= a && "9" >= a && "string" === typeof a;
		}, isWhitespace: function isWhitespace(a) {
			return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || " " === a;
		}, isIdent: function isIdent(a) {
			return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
		}, isExpOperator: function isExpOperator(a) {
			return "-" === a || "+" === a || this.isNumber(a);
		}, throwError: function throwError(a, c, d) {
			d = d || this.index;c = A(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;throw Z("lexerr", a, c, this.text);
		}, readNumber: function readNumber() {
			for (var a = "", c = this.index; this.index < this.text.length;) {
				var d = F(this.text.charAt(this.index));if ("." == d || this.isNumber(d)) a += d;else {
					var e = this.peek();if ("e" == d && this.isExpOperator(e)) a += d;else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
				}this.index++;
			}this.tokens.push({ index: c, text: a, constant: !0, value: Number(a) });
		}, readIdent: function readIdent() {
			for (var a = this.index; this.index < this.text.length;) {
				var c = this.text.charAt(this.index);if (!this.isIdent(c) && !this.isNumber(c)) break;this.index++;
			}this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
		}, readString: function readString(a) {
			var c = this.index;this.index++;for (var d = "", e = a, f = !1; this.index < this.text.length;) {
				var h = this.text.charAt(this.index),
				    e = e + h;if (f) "u" === h ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += rg[h] || h, f = !1;else if ("\\" === h) f = !0;else {
					if (h === a) {
						this.index++;this.tokens.push({ index: c, text: e, constant: !0, value: d });return;
					}d += h;
				}this.index++;
			}this.throwError("Unterminated quote", c);
		} };var s = function s(a, c) {
		this.lexer = a;this.options = c;
	};s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";s.ThisExpression = "ThisExpression";s.NGValueParameter = "NGValueParameter";
	s.prototype = { ast: function ast(a) {
			this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
		}, program: function program() {
			for (var a = [];;) if ((0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";"))) return { type: s.Program, body: a };
		}, expressionStatement: function expressionStatement() {
			return { type: s.ExpressionStatement, expression: this.filterChain() };
		}, filterChain: function filterChain() {
			for (var a = this.expression(); this.expect("|");) a = this.filter(a);return a;
		}, expression: function expression() {
			return this.assignment();
		}, assignment: function assignment() {
			var a = this.ternary();this.expect("=") && (a = { type: s.AssignmentExpression, left: a, right: this.assignment(), operator: "=" });return a;
		}, ternary: function ternary() {
			var a = this.logicalOR(),
			    c,
			    d;return this.expect("?") && (c = this.expression(), this.consume(":")) ? (d = this.expression(), { type: s.ConditionalExpression, test: a, alternate: c, consequent: d }) : a;
		}, logicalOR: function logicalOR() {
			for (var a = this.logicalAND(); this.expect("||");) a = { type: s.LogicalExpression,
				operator: "||", left: a, right: this.logicalAND() };return a;
		}, logicalAND: function logicalAND() {
			for (var a = this.equality(); this.expect("&&");) a = { type: s.LogicalExpression, operator: "&&", left: a, right: this.equality() };return a;
		}, equality: function equality() {
			for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");) a = { type: s.BinaryExpression, operator: c.text, left: a, right: this.relational() };return a;
		}, relational: function relational() {
			for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");) a = { type: s.BinaryExpression, operator: c.text,
				left: a, right: this.additive() };return a;
		}, additive: function additive() {
			for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = { type: s.BinaryExpression, operator: c.text, left: a, right: this.multiplicative() };return a;
		}, multiplicative: function multiplicative() {
			for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = { type: s.BinaryExpression, operator: c.text, left: a, right: this.unary() };return a;
		}, unary: function unary() {
			var a;return (a = this.expect("+", "-", "!")) ? { type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
		},
		primary: function primary() {
			var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = ha(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var c; c = this.expect("(", "[", ".");) "(" === c.text ? (a = { type: s.CallExpression, callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === c.text ? (a = { type: s.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === c.text ? a = { type: s.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");return a;
		}, filter: function filter(a) {
			a = [a];for (var c = { type: s.CallExpression, callee: this.identifier(), arguments: a, filter: !0 }; this.expect(":");) a.push(this.expression());return c;
		}, parseArguments: function parseArguments() {
			var a = [];if (")" !== this.peekToken().text) {
				do a.push(this.expression()); while (this.expect(","));
			}return a;
		}, identifier: function identifier() {
			var a = this.consume();a.identifier || this.throwError("is not a valid identifier", a);return { type: s.Identifier, name: a.text };
		}, constant: function constant() {
			return { type: s.Literal, value: this.consume().value };
		}, arrayDeclaration: function arrayDeclaration() {
			var a = [];if ("]" !== this.peekToken().text) {
				do {
					if (this.peek("]")) break;a.push(this.expression());
				} while (this.expect(","));
			}this.consume("]");return { type: s.ArrayExpression, elements: a };
		}, object: function object() {
			var a = [],
			    c;if ("}" !== this.peekToken().text) {
				do {
					if (this.peek("}")) break;
					c = { type: s.Property, kind: "init" };this.peek().constant ? c.key = this.constant() : this.peek().identifier ? c.key = this.identifier() : this.throwError("invalid key", this.peek());this.consume(":");c.value = this.expression();a.push(c);
				} while (this.expect(","));
			}this.consume("}");return { type: s.ObjectExpression, properties: a };
		}, throwError: function throwError(a, c) {
			throw Z("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
		}, consume: function consume(a) {
			if (0 === this.tokens.length) throw Z("ueoe", this.text);var c = this.expect(a);
			c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return c;
		}, peekToken: function peekToken() {
			if (0 === this.tokens.length) throw Z("ueoe", this.text);return this.tokens[0];
		}, peek: function peek(a, c, d, e) {
			return this.peekAhead(0, a, c, d, e);
		}, peekAhead: function peekAhead(a, c, d, e, f) {
			if (this.tokens.length > a) {
				a = this.tokens[a];var h = a.text;if (h === c || h === d || h === e || h === f || !(c || d || e || f)) return a;
			}return !1;
		}, expect: function expect(a, c, d, e) {
			return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
		}, constants: { "true": { type: s.Literal, value: !0 },
			"false": { type: s.Literal, value: !1 }, "null": { type: s.Literal, value: null }, undefined: { type: s.Literal, value: w }, "this": { type: s.ThisExpression } } };sd.prototype = { compile: function compile(a, c) {
			var d = this,
			    e = this.astBuilder.ast(a);this.state = { nextId: 0, filters: {}, expensiveChecks: c, fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] };U(e, d.$filter);var f = "",
			    h;this.stage = "assign";if (h = qd(e)) this.state.computing = "assign", f = this.nextId(), this.recurse(h, f), this.return_(f), f = "fn.assign=" + this.generateFunction("assign", "s,v,l");h = od(e.body);d.stage = "inputs";m(h, function (a, c) {
				var e = "fn" + c;d.state[e] = { vars: [], body: [], own: {} };d.state.computing = e;var f = d.nextId();d.recurse(a, f);d.return_(f);d.state.inputs.push(e);a.watchId = c;
			});this.state.computing = "fn";this.stage = "main";this.recurse(e);f = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + f + this.watchFns() + "return fn;";f = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", f)(this.$filter, Xa, Ba, ld, kd, md, Xf, nd, a);this.state = this.stage = w;f.literal = rd(e);f.constant = e.constant;return f;
		}, USE: "use", STRICT: "strict", watchFns: function watchFns() {
			var a = [],
			    c = this.state.inputs,
			    d = this;m(c, function (c) {
				a.push("var " + c + "=" + d.generateFunction(c, "s"));
			});c.length && a.push("fn.inputs=[" + c.join(",") + "];");return a.join("");
		}, generateFunction: function generateFunction(a, c) {
			return "function(" + c + "){" + this.varsPrefix(a) + this.body(a) + "};";
		}, filterPrefix: function filterPrefix() {
			var a = [],
			    c = this;m(this.state.filters, function (d, e) {
				a.push(d + "=$filter(" + c.escape(e) + ")");
			});return a.length ? "var " + a.join(",") + ";" : "";
		}, varsPrefix: function varsPrefix(a) {
			return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
		}, body: function body(a) {
			return this.state[a].body.join("");
		}, recurse: function recurse(a, c, d, e, f, h) {
			var g,
			    l,
			    k = this,
			    n,
			    p;e = e || y;if (!h && A(a.watchId)) c = c || this.nextId(), this.if_("i", this.lazyAssign(c, this.computedMember("i", a.watchId)), this.lazyRecurse(a, c, d, e, f, !0));else switch (a.type) {case s.Program:
					m(a.body, function (c, d) {
						k.recurse(c.expression, w, w, function (a) {
							l = a;
						});d !== a.body.length - 1 ? k.current().body.push(l, ";") : k.return_(l);
					});break;case s.Literal:
					p = this.escape(a.value);this.assign(c, p);e(p);break;case s.UnaryExpression:
					this.recurse(a.argument, w, w, function (a) {
						l = a;
					});p = a.operator + "(" + this.ifDefined(l, 0) + ")";this.assign(c, p);e(p);break;case s.BinaryExpression:
					this.recurse(a.left, w, w, function (a) {
						g = a;
					});this.recurse(a.right, w, w, function (a) {
						l = a;
					});p = "+" === a.operator ? this.plus(g, l) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(l, 0) : "(" + g + ")" + a.operator + "(" + l + ")";this.assign(c, p);e(p);break;case s.LogicalExpression:
					c = c || this.nextId();k.recurse(a.left, c);k.if_("&&" === a.operator ? c : k.not(c), k.lazyRecurse(a.right, c));e(c);break;case s.ConditionalExpression:
					c = c || this.nextId();k.recurse(a.test, c);k.if_(c, k.lazyRecurse(a.alternate, c), k.lazyRecurse(a.consequent, c));e(c);break;case s.Identifier:
					c = c || this.nextId();d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);Xa(a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
						k.if_("inputs" === k.stage || "s", function () {
							f && 1 !== f && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));k.assign(c, k.nonComputedMember("s", a.name));
						});
					}, c && k.lazyAssign(c, k.nonComputedMember("l", a.name)));(k.state.expensiveChecks || Fb(a.name)) && k.addEnsureSafeObject(c);e(c);break;case s.MemberExpression:
					g = d && (d.context = this.nextId()) || this.nextId();c = c || this.nextId();k.recurse(a.object, g, w, function () {
						k.if_(k.notNull(g), function () {
							if (a.computed) l = k.nextId(), k.recurse(a.property, l), k.getStringValue(l), k.addEnsureSafeMemberName(l), f && 1 !== f && k.if_(k.not(k.computedMember(g, l)), k.lazyAssign(k.computedMember(g, l), "{}")), p = k.ensureSafeObject(k.computedMember(g, l)), k.assign(c, p), d && (d.computed = !0, d.name = l);else {
								Xa(a.property.name);f && 1 !== f && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));p = k.nonComputedMember(g, a.property.name);if (k.state.expensiveChecks || Fb(a.property.name)) p = k.ensureSafeObject(p);k.assign(c, p);d && (d.computed = !1, d.name = a.property.name);
							}
						}, function () {
							k.assign(c, "undefined");
						});e(c);
					}, !!f);break;case s.CallExpression:
					c = c || this.nextId();a.filter ? (l = k.filter(a.callee.name), n = [], m(a.arguments, function (a) {
						var c = k.nextId();k.recurse(a, c);n.push(c);
					}), p = l + "(" + n.join(",") + ")", k.assign(c, p), e(c)) : (l = k.nextId(), g = {}, n = [], k.recurse(a.callee, l, g, function () {
						k.if_(k.notNull(l), function () {
							k.addEnsureSafeFunction(l);m(a.arguments, function (a) {
								k.recurse(a, k.nextId(), w, function (a) {
									n.push(k.ensureSafeObject(a));
								});
							});g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), p = k.member(g.context, g.name, g.computed) + "(" + n.join(",") + ")") : p = l + "(" + n.join(",") + ")";p = k.ensureSafeObject(p);k.assign(c, p);
						}, function () {
							k.assign(c, "undefined");
						});e(c);
					}));break;case s.AssignmentExpression:
					l = this.nextId();g = {};if (!pd(a.left)) throw Z("lval");this.recurse(a.left, w, g, function () {
						k.if_(k.notNull(g.context), function () {
							k.recurse(a.right, l);k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));k.addEnsureSafeAssignContext(g.context);p = k.member(g.context, g.name, g.computed) + a.operator + l;k.assign(c, p);e(c || p);
						});
					}, 1);break;case s.ArrayExpression:
					n = [];m(a.elements, function (a) {
						k.recurse(a, k.nextId(), w, function (a) {
							n.push(a);
						});
					});p = "[" + n.join(",") + "]";this.assign(c, p);e(p);break;case s.ObjectExpression:
					n = [];m(a.properties, function (a) {
						k.recurse(a.value, k.nextId(), w, function (c) {
							n.push(k.escape(a.key.type === s.Identifier ? a.key.name : "" + a.key.value) + ":" + c);
						});
					});p = "{" + n.join(",") + "}";this.assign(c, p);e(p);break;case s.ThisExpression:
					this.assign(c, "s");e("s");break;case s.NGValueParameter:
					this.assign(c, "v"), e("v");}
		}, getHasOwnProperty: function getHasOwnProperty(a, c) {
			var d = a + "." + c,
			    e = this.current().own;e.hasOwnProperty(d) || (e[d] = this.nextId(!1, a + "&&(" + this.escape(c) + " in " + a + ")"));return e[d];
		}, assign: function assign(a, c) {
			if (a) return this.current().body.push(a, "=", c, ";"), a;
		}, filter: function filter(a) {
			this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];
		}, ifDefined: function ifDefined(a, c) {
			return "ifDefined(" + a + "," + this.escape(c) + ")";
		}, plus: function plus(a, c) {
			return "plus(" + a + "," + c + ")";
		}, return_: function return_(a) {
			this.current().body.push("return ", a, ";");
		}, if_: function if_(a, c, d) {
			if (!0 === a) c();else {
				var e = this.current().body;e.push("if(", a, "){");c();e.push("}");d && (e.push("else{"), d(), e.push("}"));
			}
		}, not: function not(a) {
			return "!(" + a + ")";
		}, notNull: function notNull(a) {
			return a + "!=null";
		}, nonComputedMember: function nonComputedMember(a, c) {
			return a + "." + c;
		}, computedMember: function computedMember(a, c) {
			return a + "[" + c + "]";
		}, member: function member(a, c, d) {
			return d ? this.computedMember(a, c) : this.nonComputedMember(a, c);
		}, addEnsureSafeObject: function addEnsureSafeObject(a) {
			this.current().body.push(this.ensureSafeObject(a), ";");
		}, addEnsureSafeMemberName: function addEnsureSafeMemberName(a) {
			this.current().body.push(this.ensureSafeMemberName(a), ";");
		}, addEnsureSafeFunction: function addEnsureSafeFunction(a) {
			this.current().body.push(this.ensureSafeFunction(a), ";");
		}, addEnsureSafeAssignContext: function addEnsureSafeAssignContext(a) {
			this.current().body.push(this.ensureSafeAssignContext(a), ";");
		}, ensureSafeObject: function ensureSafeObject(a) {
			return "ensureSafeObject(" + a + ",text)";
		}, ensureSafeMemberName: function ensureSafeMemberName(a) {
			return "ensureSafeMemberName(" + a + ",text)";
		}, ensureSafeFunction: function ensureSafeFunction(a) {
			return "ensureSafeFunction(" + a + ",text)";
		}, getStringValue: function getStringValue(a) {
			this.assign(a, "getStringValue(" + a + ",text)");
		}, ensureSafeAssignContext: function ensureSafeAssignContext(a) {
			return "ensureSafeAssignContext(" + a + ",text)";
		}, lazyRecurse: function lazyRecurse(a, c, d, e, f, h) {
			var g = this;return function () {
				g.recurse(a, c, d, e, f, h);
			};
		}, lazyAssign: function lazyAssign(a, c) {
			var d = this;return function () {
				d.assign(a, c);
			};
		}, stringEscapeRegex: /[^ a-zA-Z0-9]/g,
		stringEscapeFn: function stringEscapeFn(a) {
			return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
		}, escape: function escape(a) {
			if (G(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (V(a)) return a.toString();if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";if ("undefined" === typeof a) return "undefined";throw Z("esc");
		}, nextId: function nextId(a, c) {
			var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (c ? "=" + c : ""));return d;
		}, current: function current() {
			return this.state[this.state.computing];
		} };
	td.prototype = { compile: function compile(a, c) {
			var d = this,
			    e = this.astBuilder.ast(a);this.expression = a;this.expensiveChecks = c;U(e, d.$filter);var f, h;if (f = qd(e)) h = this.recurse(f);f = od(e.body);var g;f && (g = [], m(f, function (a, c) {
				var e = d.recurse(a);a.input = e;g.push(e);a.watchId = c;
			}));var l = [];m(e.body, function (a) {
				l.push(d.recurse(a.expression));
			});f = 0 === e.body.length ? function () {} : 1 === e.body.length ? l[0] : function (a, c) {
				var d;m(l, function (e) {
					d = e(a, c);
				});return d;
			};h && (f.assign = function (a, c, d) {
				return h(a, d, c);
			});g && (f.inputs = g);f.literal = rd(e);f.constant = e.constant;return f;
		}, recurse: function recurse(a, c, d) {
			var e,
			    f,
			    h = this,
			    g;if (a.input) return this.inputs(a.input, a.watchId);switch (a.type) {case s.Literal:
					return this.value(a.value, c);case s.UnaryExpression:
					return f = this.recurse(a.argument), this["unary" + a.operator](f, c);case s.BinaryExpression:
					return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, c);case s.LogicalExpression:
					return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, c);case s.ConditionalExpression:
					return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), c);case s.Identifier:
					return Xa(a.name, h.expression), h.identifier(a.name, h.expensiveChecks || Fb(a.name), c, d, h.expression);case s.MemberExpression:
					return e = this.recurse(a.object, !1, !!d), a.computed || (Xa(a.property.name, h.expression), f = a.property.name), a.computed && (f = this.recurse(a.property)), a.computed ? this.computedMember(e, f, c, d, h.expression) : this.nonComputedMember(e, f, h.expensiveChecks, c, d, h.expression);case s.CallExpression:
					return g = [], m(a.arguments, function (a) {
						g.push(h.recurse(a));
					}), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), a.filter ? function (a, d, e, h) {
						for (var r = [], m = 0; m < g.length; ++m) r.push(g[m](a, d, e, h));a = f.apply(w, r, h);return c ? { context: w, name: w, value: a } : a;
					} : function (a, d, e, p) {
						var r = f(a, d, e, p),
						    m;if (null != r.value) {
							Ba(r.context, h.expression);ld(r.value, h.expression);m = [];for (var s = 0; s < g.length; ++s) m.push(Ba(g[s](a, d, e, p), h.expression));m = Ba(r.value.apply(r.context, m), h.expression);
						}return c ? { value: m } : m;
					};case s.AssignmentExpression:
					return e = this.recurse(a.left, !0, 1), f = this.recurse(a.right), function (a, d, g, p) {
						var r = e(a, d, g, p);a = f(a, d, g, p);Ba(r.value, h.expression);md(r.context);r.context[r.name] = a;return c ? { value: a } : a;
					};case s.ArrayExpression:
					return g = [], m(a.elements, function (a) {
						g.push(h.recurse(a));
					}), function (a, d, e, f) {
						for (var h = [], m = 0; m < g.length; ++m) h.push(g[m](a, d, e, f));return c ? { value: h } : h;
					};case s.ObjectExpression:
					return g = [], m(a.properties, function (a) {
						g.push({ key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, value: h.recurse(a.value) });
					}), function (a, d, e, f) {
						for (var h = {}, m = 0; m < g.length; ++m) h[g[m].key] = g[m].value(a, d, e, f);return c ? { value: h } : h;
					};case s.ThisExpression:
					return function (a) {
						return c ? { value: a } : a;
					};case s.NGValueParameter:
					return function (a, d, e, f) {
						return c ? { value: e } : e;
					};}
		}, "unary+": function unary(a, c) {
			return function (d, e, f, h) {
				d = a(d, e, f, h);d = A(d) ? +d : 0;return c ? { value: d } : d;
			};
		}, "unary-": function unary(a, c) {
			return function (d, e, f, h) {
				d = a(d, e, f, h);d = A(d) ? -d : 0;return c ? { value: d } : d;
			};
		}, "unary!": function unary(a, c) {
			return function (d, e, f, h) {
				d = !a(d, e, f, h);return c ? { value: d } : d;
			};
		}, "binary+": function binary(a, c, d) {
			return function (e, f, h, g) {
				var l = a(e, f, h, g);e = c(e, f, h, g);l = nd(l, e);return d ? { value: l } : l;
			};
		}, "binary-": function binary(a, c, d) {
			return function (e, f, h, g) {
				var l = a(e, f, h, g);e = c(e, f, h, g);l = (A(l) ? l : 0) - (A(e) ? e : 0);return d ? { value: l } : l;
			};
		}, "binary*": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) * c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary/": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) / c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary%": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) % c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary===": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) === c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary!==": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) !== c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary==": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) == c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary!=": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) != c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary<": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) < c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary>": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) > c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary<=": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) <= c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary>=": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) >= c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary&&": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) && c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "binary||": function binary(a, c, d) {
			return function (e, f, h, g) {
				e = a(e, f, h, g) || c(e, f, h, g);return d ? { value: e } : e;
			};
		}, "ternary?:": function ternary(a, c, d, e) {
			return function (f, h, g, l) {
				f = a(f, h, g, l) ? c(f, h, g, l) : d(f, h, g, l);return e ? { value: f } : f;
			};
		}, value: function value(a, c) {
			return function () {
				return c ? { context: w, name: w, value: a } : a;
			};
		}, identifier: function identifier(a, c, d, e, f) {
			return function (h, g, l, k) {
				h = g && a in g ? g : h;e && 1 !== e && h && !h[a] && (h[a] = {});g = h ? h[a] : w;c && Ba(g, f);return d ? { context: h, name: a, value: g } : g;
			};
		}, computedMember: function computedMember(a, c, d, e, f) {
			return function (h, g, l, k) {
				var n = a(h, g, l, k),
				    p,
				    m;null != n && (p = c(h, g, l, k), p = kd(p), Xa(p, f), e && 1 !== e && n && !n[p] && (n[p] = {}), m = n[p], Ba(m, f));return d ? { context: n, name: p, value: m } : m;
			};
		}, nonComputedMember: function nonComputedMember(a, c, d, e, f, h) {
			return function (g, l, k, n) {
				g = a(g, l, k, n);f && 1 !== f && g && !g[c] && (g[c] = {});l = null != g ? g[c] : w;(d || Fb(c)) && Ba(l, h);return e ? { context: g, name: c, value: l } : l;
			};
		}, inputs: function inputs(a, c) {
			return function (d, e, f, h) {
				return h ? h[c] : a(d, e, f);
			};
		} };var fc = function fc(a, c, d) {
		this.lexer = a;this.$filter = c;this.options = d;this.ast = new s(this.lexer);this.astCompiler = d.csp ? new td(this.ast, c) : new sd(this.ast, c);
	};fc.prototype = { constructor: fc, parse: function parse(a) {
			return this.astCompiler.compile(a, this.options.expensiveChecks);
		} };fa();fa();var Yf = Object.prototype.valueOf,
	    Ca = I("$sce"),
	    oa = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
	    ga = I("$compile"),
	    $ = X.createElement("a"),
	    xd = Aa(Q.location.href);yd.$inject = ["$document"];Kc.$inject = ["$provide"];zd.$inject = ["$locale"];Bd.$inject = ["$locale"];var hc = ".",
	    hg = { yyyy: aa("FullYear", 4), yy: aa("FullYear", 2, 0, !0), y: aa("FullYear", 1), MMMM: Hb("Month"), MMM: Hb("Month", !0), MM: aa("Month", 2, 1), M: aa("Month", 1, 1), dd: aa("Date", 2), d: aa("Date", 1), HH: aa("Hours", 2), H: aa("Hours", 1), hh: aa("Hours", 2, -12), h: aa("Hours", 1, -12), mm: aa("Minutes", 2), m: aa("Minutes", 1), ss: aa("Seconds", 2), s: aa("Seconds", 1), sss: aa("Milliseconds", 3), EEEE: Hb("Day"), EEE: Hb("Day", !0), a: function a(_a2, c) {
			return 12 > _a2.getHours() ? c.AMPMS[0] : c.AMPMS[1];
		}, Z: function Z(a, c, d) {
			a = -1 * d;return a = (0 <= a ? "+" : "") + (Gb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Gb(Math.abs(a % 60), 2));
		}, ww: Fd(2), w: Fd(1), G: ic, GG: ic, GGG: ic, GGGG: function GGGG(a, c) {
			return 0 >= a.getFullYear() ? c.ERANAMES[0] : c.ERANAMES[1];
		} },
	    gg = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
	    fg = /^\-?\d+$/;Ad.$inject = ["$locale"];var cg = qa(F),
	    dg = qa(sb);Cd.$inject = ["$parse"];var he = qa({ restrict: "E", compile: function compile(a, c) {
			if (!c.href && !c.xlinkHref) return function (a, c) {
				if ("a" === c[0].nodeName.toLowerCase()) {
					var f = "[object SVGAnimatedString]" === va.call(c.prop("href")) ? "xlink:href" : "href";c.on("click", function (a) {
						c.attr(f) || a.preventDefault();
					});
				}
			};
		} }),
	    tb = {};m(Bb, function (a, c) {
		function d(a, d, f) {
			a.$watch(f[e], function (a) {
				f.$set(c, !!a);
			});
		}if ("multiple" != a) {
			var e = ya("ng-" + c),
			    f = d;"checked" === a && (f = function (a, c, f) {
				f.ngModel !== f[e] && d(a, c, f);
			});tb[e] = function () {
				return { restrict: "A", priority: 100, link: f };
			};
		}
	});m($c, function (a, c) {
		tb[c] = function () {
			return { priority: 100, link: function link(a, e, f) {
					if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(jg))) {
						f.$set("ngPattern", new RegExp(e[1], e[2]));return;
					}a.$watch(f[c], function (a) {
						f.$set(c, a);
					});
				} };
		};
	});m(["src", "srcset", "href"], function (a) {
		var c = ya("ng-" + a);tb[c] = function () {
			return { priority: 99, link: function link(d, e, f) {
					var h = a,
					    g = a;"href" === a && "[object SVGAnimatedString]" === va.call(e.prop("href")) && (g = "xlinkHref", f.$attr[g] = "xlink:href", h = null);f.$observe(c, function (c) {
						c ? (f.$set(g, c), Wa && h && e.prop(h, f[g])) : "href" === a && f.$set(g, null);
					});
				} };
		};
	});var Ib = { $addControl: y, $$renameControl: function $$renameControl(a, c) {
			a.$name = c;
		}, $removeControl: y, $setValidity: y,
		$setDirty: y, $setPristine: y, $setSubmitted: y };Gd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];var Od = function Od(a) {
		return ["$timeout", "$parse", function (c, d) {
			function e(a) {
				return "" === a ? d('this[""]').assign : d(a).assign || y;
			}return { name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Gd, compile: function compile(d, h) {
					d.addClass(Ya).addClass(mb);var g = h.name ? "name" : a && h.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, f, h) {
							var m = h[0];if (!("action" in f)) {
								var t = function t(c) {
									a.$apply(function () {
										m.$commitViewValue();
										m.$setSubmitted();
									});c.preventDefault();
								};d[0].addEventListener("submit", t, !1);d.on("$destroy", function () {
									c(function () {
										d[0].removeEventListener("submit", t, !1);
									}, 0, !1);
								});
							}(h[1] || m.$$parentForm).$addControl(m);var s = g ? e(m.$name) : y;g && (s(a, m), f.$observe(g, function (c) {
								m.$name !== c && (s(a, w), m.$$parentForm.$$renameControl(m, c), s = e(m.$name), s(a, m));
							}));d.on("$destroy", function () {
								m.$$parentForm.$removeControl(m);s(a, w);P(m, Ib);
							});
						} };
				} };
		}];
	},
	    ie = Od(),
	    ve = Od(!0),
	    ig = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
	    sg = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
	    tg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
	    ug = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
	    Pd = /^(\d{4})-(\d{2})-(\d{2})$/,
	    Qd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	    lc = /^(\d{4})-W(\d\d)$/,
	    Rd = /^(\d{4})-(\d\d)$/,
	    Sd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	    Td = { text: function text(a, c, d, e, f, h) {
			jb(a, c, d, e, f, h);jc(e);
		}, date: kb("date", Pd, Kb(Pd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": kb("datetimelocal", Qd, Kb(Qd, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: kb("time", Sd, Kb(Sd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: kb("week", lc, function (a, c) {
			if (ea(a)) return a;if (G(a)) {
				lc.lastIndex = 0;var d = lc.exec(a);if (d) {
					var e = +d[1],
					    f = +d[2],
					    h = d = 0,
					    g = 0,
					    l = 0,
					    k = Ed(e),
					    f = 7 * (f - 1);c && (d = c.getHours(), h = c.getMinutes(), g = c.getSeconds(), l = c.getMilliseconds());return new Date(e, 0, k.getDate() + f, d, h, g, l);
				}
			}return NaN;
		}, "yyyy-Www"),
		month: kb("month", Rd, Kb(Rd, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, c, d, e, f, h) {
			Id(a, c, d, e);jb(a, c, d, e, f, h);e.$$parserName = "number";e.$parsers.push(function (a) {
				return e.$isEmpty(a) ? null : ug.test(a) ? parseFloat(a) : w;
			});e.$formatters.push(function (a) {
				if (!e.$isEmpty(a)) {
					if (!V(a)) throw lb("numfmt", a);a = a.toString();
				}return a;
			});if (A(d.min) || d.ngMin) {
				var g;e.$validators.min = function (a) {
					return e.$isEmpty(a) || v(g) || a >= g;
				};d.$observe("min", function (a) {
					A(a) && !V(a) && (a = parseFloat(a, 10));g = V(a) && !isNaN(a) ? a : w;e.$validate();
				});
			}if (A(d.max) || d.ngMax) {
				var l;e.$validators.max = function (a) {
					return e.$isEmpty(a) || v(l) || a <= l;
				};d.$observe("max", function (a) {
					A(a) && !V(a) && (a = parseFloat(a, 10));l = V(a) && !isNaN(a) ? a : w;e.$validate();
				});
			}
		}, url: function url(a, c, d, e, f, h) {
			jb(a, c, d, e, f, h);jc(e);e.$$parserName = "url";e.$validators.url = function (a, c) {
				var d = a || c;return e.$isEmpty(d) || sg.test(d);
			};
		}, email: function email(a, c, d, e, f, h) {
			jb(a, c, d, e, f, h);jc(e);e.$$parserName = "email";e.$validators.email = function (a, c) {
				var d = a || c;return e.$isEmpty(d) || tg.test(d);
			};
		}, radio: function radio(a, c, d, e) {
			v(d.name) && c.attr("name", ++nb);c.on("click", function (a) {
				c[0].checked && e.$setViewValue(d.value, a && a.type);
			});e.$render = function () {
				c[0].checked = d.value == e.$viewValue;
			};d.$observe("value", e.$render);
		}, checkbox: function checkbox(a, c, d, e, f, h, g, l) {
			var k = Jd(l, a, "ngTrueValue", d.ngTrueValue, !0),
			    n = Jd(l, a, "ngFalseValue", d.ngFalseValue, !1);c.on("click", function (a) {
				e.$setViewValue(c[0].checked, a && a.type);
			});e.$render = function () {
				c[0].checked = e.$viewValue;
			};e.$isEmpty = function (a) {
				return !1 === a;
			};e.$formatters.push(function (a) {
				return ka(a, k);
			});e.$parsers.push(function (a) {
				return a ? k : n;
			});
		}, hidden: y, button: y, submit: y, reset: y, file: y },
	    Ec = ["$browser", "$sniffer", "$filter", "$parse", function (a, c, d, e) {
		return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(f, h, g, l) {
					l[0] && (Td[F(g.type)] || Td.text)(f, h, g, l[0], c, a, d, e);
				} } };
	}],
	    vg = /^(true|false|\d+)$/,
	    Ne = function Ne() {
		return { restrict: "A", priority: 100, compile: function compile(a, c) {
				return vg.test(c.ngValue) ? function (a, c, f) {
					f.$set("value", a.$eval(f.ngValue));
				} : function (a, c, f) {
					a.$watch(f.ngValue, function (a) {
						f.$set("value", a);
					});
				};
			} };
	},
	    ne = ["$compile", function (a) {
		return { restrict: "AC", compile: function compile(c) {
				a.$$addBindingClass(c);return function (c, e, f) {
					a.$$addBindingInfo(e, f.ngBind);e = e[0];c.$watch(f.ngBind, function (a) {
						e.textContent = v(a) ? "" : a;
					});
				};
			} };
	}],
	    pe = ["$interpolate", "$compile", function (a, c) {
		return { compile: function compile(d) {
				c.$$addBindingClass(d);return function (d, f, h) {
					d = a(f.attr(h.$attr.ngBindTemplate));c.$$addBindingInfo(f, d.expressions);f = f[0];h.$observe("ngBindTemplate", function (a) {
						f.textContent = v(a) ? "" : a;
					});
				};
			} };
	}],
	    oe = ["$sce", "$parse", "$compile", function (a, c, d) {
		return { restrict: "A", compile: function compile(e, f) {
				var h = c(f.ngBindHtml),
				    g = c(f.ngBindHtml, function (a) {
					return (a || "").toString();
				});d.$$addBindingClass(e);return function (c, e, f) {
					d.$$addBindingInfo(e, f.ngBindHtml);c.$watch(g, function () {
						e.html(a.getTrustedHtml(h(c)) || "");
					});
				};
			} };
	}],
	    Me = qa({ restrict: "A", require: "ngModel", link: function link(a, c, d, e) {
			e.$viewChangeListeners.push(function () {
				a.$eval(d.ngChange);
			});
		} }),
	    qe = kc("", !0),
	    se = kc("Odd", 0),
	    re = kc("Even", 1),
	    te = Na({ compile: function compile(a, c) {
			c.$set("ngCloak", w);a.removeClass("ng-cloak");
		} }),
	    ue = [function () {
		return { restrict: "A", scope: !0, controller: "@", priority: 500 };
	}],
	    Jc = {},
	    wg = { blur: !0, focus: !0 };m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
		var c = ya("ng-" + a);Jc[c] = ["$parse", "$rootScope", function (d, e) {
			return { restrict: "A", compile: function compile(f, h) {
					var g = d(h[c], null, !0);return function (c, d) {
						d.on(a, function (d) {
							var f = function f() {
								g(c, { $event: d });
							};
							wg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
						});
					};
				} };
		}];
	});var xe = ["$animate", function (a) {
		return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(c, d, e, f, h) {
				var g, l, k;c.$watch(e.ngIf, function (c) {
					c ? l || h(function (c, f) {
						l = f;c[c.length++] = X.createComment(" end ngIf: " + e.ngIf + " ");g = { clone: c };a.enter(c, d.parent(), d);
					}) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), g && (k = rb(g.clone), a.leave(k).then(function () {
						k = null;
					}), g = null));
				});
			} };
	}],
	    ye = ["$templateRequest", "$anchorScroll", "$animate", function (a, c, d) {
		return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: da.noop, compile: function compile(e, f) {
				var h = f.ngInclude || f.src,
				    g = f.onload || "",
				    l = f.autoscroll;return function (e, f, m, r, t) {
					var s = 0,
					    v,
					    u,
					    q,
					    z = function z() {
						u && (u.remove(), u = null);v && (v.$destroy(), v = null);q && (d.leave(q).then(function () {
							u = null;
						}), u = q, q = null);
					};e.$watch(h, function (h) {
						var m = function m() {
							!A(l) || l && !e.$eval(l) || c();
						},
						    p = ++s;h ? (a(h, !0).then(function (a) {
							if (p === s) {
								var c = e.$new();r.template = a;a = t(c, function (a) {
									z();
									d.enter(a, null, f).then(m);
								});v = c;q = a;v.$emit("$includeContentLoaded", h);e.$eval(g);
							}
						}, function () {
							p === s && (z(), e.$emit("$includeContentError", h));
						}), e.$emit("$includeContentRequested", h)) : (z(), r.template = null);
					});
				};
			} };
	}],
	    Pe = ["$compile", function (a) {
		return { restrict: "ECA", priority: -400, require: "ngInclude", link: function link(c, d, e, f) {
				/SVG/.test(d[0].toString()) ? (d.empty(), a(Mc(f.template, X).childNodes)(c, function (a) {
					d.append(a);
				}, { futureParentElement: d })) : (d.html(f.template), a(d.contents())(c));
			} };
	}],
	    ze = Na({ priority: 450,
		compile: function compile() {
			return { pre: function pre(a, c, d) {
					a.$eval(d.ngInit);
				} };
		} }),
	    Le = function Le() {
		return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, c, d, e) {
				var f = c.attr(d.$attr.ngList) || ", ",
				    h = "false" !== d.ngTrim,
				    g = h ? T(f) : f;e.$parsers.push(function (a) {
					if (!v(a)) {
						var c = [];a && m(a.split(g), function (a) {
							a && c.push(h ? T(a) : a);
						});return c;
					}
				});e.$formatters.push(function (a) {
					return J(a) ? a.join(f) : w;
				});e.$isEmpty = function (a) {
					return !a || !a.length;
				};
			} };
	},
	    mb = "ng-valid",
	    Kd = "ng-invalid",
	    Ya = "ng-pristine",
	    Jb = "ng-dirty",
	    Md = "ng-pending",
	    lb = I("ngModel"),
	    xg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, c, d, e, f, h, g, l, k, n) {
		this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = w;this.$validators = {};this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = w;this.$name = n(d.name || "", !1)(a);this.$$parentForm = Ib;var p = f(d.ngModel),
		    r = p.assign,
		    t = p,
		    s = r,
		    K = null,
		    u,
		    q = this;this.$$setOptions = function (a) {
			if ((q.$options = a) && a.getterSetter) {
				var c = f(d.ngModel + "()"),
				    g = f(d.ngModel + "($$$p)");t = function (a) {
					var d = p(a);x(d) && (d = c(a));return d;
				};s = function (a, c) {
					x(p(a)) ? g(a, { $$$p: q.$modelValue }) : r(a, q.$modelValue);
				};
			} else if (!p.assign) throw lb("nonassign", d.ngModel, xa(e));
		};this.$render = y;this.$isEmpty = function (a) {
			return v(a) || "" === a || null === a || a !== a;
		};var z = 0;Hd({ ctrl: this, $element: e,
			set: function set(a, c) {
				a[c] = !0;
			}, unset: function unset(a, c) {
				delete a[c];
			}, $animate: h });this.$setPristine = function () {
			q.$dirty = !1;q.$pristine = !0;h.removeClass(e, Jb);h.addClass(e, Ya);
		};this.$setDirty = function () {
			q.$dirty = !0;q.$pristine = !1;h.removeClass(e, Ya);h.addClass(e, Jb);q.$$parentForm.$setDirty();
		};this.$setUntouched = function () {
			q.$touched = !1;q.$untouched = !0;h.setClass(e, "ng-untouched", "ng-touched");
		};this.$setTouched = function () {
			q.$touched = !0;q.$untouched = !1;h.setClass(e, "ng-touched", "ng-untouched");
		};this.$rollbackViewValue = function () {
			g.cancel(K);q.$viewValue = q.$$lastCommittedViewValue;q.$render();
		};this.$validate = function () {
			if (!V(q.$modelValue) || !isNaN(q.$modelValue)) {
				var a = q.$$rawModelValue,
				    c = q.$valid,
				    d = q.$modelValue,
				    e = q.$options && q.$options.allowInvalid;q.$$runValidators(a, q.$$lastCommittedViewValue, function (f) {
					e || c === f || (q.$modelValue = f ? a : w, q.$modelValue !== d && q.$$writeModelToScope());
				});
			}
		};this.$$runValidators = function (a, c, d) {
			function e() {
				var d = !0;m(q.$validators, function (e, f) {
					var h = e(a, c);d = d && h;g(f, h);
				});return d ? !0 : (m(q.$asyncValidators, function (a, c) {
					g(c, null);
				}), !1);
			}function f() {
				var d = [],
				    e = !0;m(q.$asyncValidators, function (f, h) {
					var k = f(a, c);if (!k || !x(k.then)) throw lb("$asyncValidators", k);g(h, w);d.push(k.then(function () {
						g(h, !0);
					}, function (a) {
						e = !1;g(h, !1);
					}));
				});d.length ? k.all(d).then(function () {
					h(e);
				}, y) : h(!0);
			}function g(a, c) {
				l === z && q.$setValidity(a, c);
			}function h(a) {
				l === z && d(a);
			}z++;var l = z;(function () {
				var a = q.$$parserName || "parse";if (v(u)) g(a, null);else return u || (m(q.$validators, function (a, c) {
					g(c, null);
				}), m(q.$asyncValidators, function (a, c) {
					g(c, null);
				})), g(a, u), u;return !0;
			})() ? e() ? f() : h(!1) : h(!1);
		};this.$commitViewValue = function () {
			var a = q.$viewValue;g.cancel(K);if (q.$$lastCommittedViewValue !== a || "" === a && q.$$hasNativeValidators) q.$$lastCommittedViewValue = a, q.$pristine && this.$setDirty(), this.$$parseAndValidate();
		};this.$$parseAndValidate = function () {
			var c = q.$$lastCommittedViewValue;if (u = v(c) ? w : !0) for (var d = 0; d < q.$parsers.length; d++) if ((c = q.$parsers[d](c), v(c))) {
				u = !1;break;
			}V(q.$modelValue) && isNaN(q.$modelValue) && (q.$modelValue = t(a));
			var e = q.$modelValue,
			    f = q.$options && q.$options.allowInvalid;q.$$rawModelValue = c;f && (q.$modelValue = c, q.$modelValue !== e && q.$$writeModelToScope());q.$$runValidators(c, q.$$lastCommittedViewValue, function (a) {
				f || (q.$modelValue = a ? c : w, q.$modelValue !== e && q.$$writeModelToScope());
			});
		};this.$$writeModelToScope = function () {
			s(a, q.$modelValue);m(q.$viewChangeListeners, function (a) {
				try {
					a();
				} catch (d) {
					c(d);
				}
			});
		};this.$setViewValue = function (a, c) {
			q.$viewValue = a;q.$options && !q.$options.updateOnDefault || q.$$debounceViewValueCommit(c);
		};
		this.$$debounceViewValueCommit = function (c) {
			var d = 0,
			    e = q.$options;e && A(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e["default"]) && (d = e["default"]));g.cancel(K);d ? K = g(function () {
				q.$commitViewValue();
			}, d) : l.$$phase ? q.$commitViewValue() : a.$apply(function () {
				q.$commitViewValue();
			});
		};a.$watch(function () {
			var c = t(a);if (c !== q.$modelValue && (q.$modelValue === q.$modelValue || c === c)) {
				q.$modelValue = q.$$rawModelValue = c;u = w;for (var d = q.$formatters, e = d.length, f = c; e--;) f = d[e](f);q.$viewValue !== f && (q.$viewValue = q.$$lastCommittedViewValue = f, q.$render(), q.$$runValidators(c, f, y));
			}return c;
		});
	}],
	    Ke = ["$rootScope", function (a) {
		return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: xg, priority: 1, compile: function compile(c) {
				c.addClass(Ya).addClass("ng-untouched").addClass(mb);return { pre: function pre(a, c, f, h) {
						var g = h[0];c = h[1] || g.$$parentForm;g.$$setOptions(h[2] && h[2].$options);c.$addControl(g);f.$observe("name", function (a) {
							g.$name !== a && g.$$parentForm.$$renameControl(g, a);
						});a.$on("$destroy", function () {
							g.$$parentForm.$removeControl(g);
						});
					},
					post: function post(c, e, f, h) {
						var g = h[0];if (g.$options && g.$options.updateOn) e.on(g.$options.updateOn, function (a) {
							g.$$debounceViewValueCommit(a && a.type);
						});e.on("blur", function (e) {
							g.$touched || (a.$$phase ? c.$evalAsync(g.$setTouched) : c.$apply(g.$setTouched));
						});
					} };
			} };
	}],
	    yg = /(\s+|^)default(\s+|$)/,
	    Oe = function Oe() {
		return { restrict: "A", controller: ["$scope", "$attrs", function (a, c) {
				var d = this;this.$options = ha(a.$eval(c.ngModelOptions));A(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = T(this.$options.updateOn.replace(yg, function () {
					d.$options.updateOnDefault = !0;return " ";
				}))) : this.$options.updateOnDefault = !0;
			}] };
	},
	    Ae = Na({ terminal: !0, priority: 1E3 }),
	    zg = I("ngOptions"),
	    Ag = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
	    Ie = ["$compile", "$parse", function (a, c) {
		function d(a, d, e) {
			function f(a, c, d, e, g) {
				this.selectValue = a;this.viewValue = c;this.label = d;this.group = e;this.disabled = g;
			}function n(a) {
				var c;if (!s && Da(a)) c = a;else {
					c = [];for (var d in a) a.hasOwnProperty(d) && "$" !== d.charAt(0) && c.push(d);
				}return c;
			}var m = a.match(Ag);if (!m) throw zg("iexp", a, xa(d));var r = m[5] || m[7],
			    s = m[6];a = / as /.test(m[0]) && m[1];var v = m[9];d = c(m[2] ? m[1] : r);var w = a && c(a) || d,
			    u = v && c(v),
			    q = v ? function (a, c) {
				return u(e, c);
			} : function (a) {
				return Ga(a);
			},
			    z = function z(a, c) {
				return q(a, x(a, c));
			},
			    y = c(m[2] || m[1]),
			    A = c(m[3] || ""),
			    O = c(m[4] || ""),
			    H = c(m[8]),
			    B = {},
			    x = s ? function (a, c) {
				B[s] = c;B[r] = a;return B;
			} : function (a) {
				B[r] = a;return B;
			};return { trackBy: v, getTrackByValue: z, getWatchables: c(H, function (a) {
					var c = [];a = a || [];for (var d = n(a), f = d.length, g = 0; g < f; g++) {
						var h = a === d ? g : d[g],
						    k = x(a[h], h),
						    h = q(a[h], k);c.push(h);if (m[2] || m[1]) h = y(e, k), c.push(h);m[4] && (k = O(e, k), c.push(k));
					}return c;
				}), getOptions: function getOptions() {
					for (var a = [], c = {}, d = H(e) || [], g = n(d), h = g.length, m = 0; m < h; m++) {
						var p = d === g ? m : g[m],
						    r = x(d[p], p),
						    s = w(e, r),
						    p = q(s, r),
						    t = y(e, r),
						    u = A(e, r),
						    r = O(e, r),
						    s = new f(p, s, t, u, r);a.push(s);c[p] = s;
					}return { items: a, selectValueMap: c, getOptionFromViewValue: function getOptionFromViewValue(a) {
							return c[z(a)];
						},
						getViewValueFromOption: function getViewValueFromOption(a) {
							return v ? da.copy(a.viewValue) : a.viewValue;
						} };
				} };
		}var e = X.createElement("option"),
		    f = X.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "?ngModel"], link: function link(c, g, l, k) {
				function n(a, c) {
					a.element = c;c.disabled = a.disabled;a.label !== c.label && (c.label = a.label, c.textContent = a.label);a.value !== c.value && (c.value = a.selectValue);
				}function p(a, c, d, e) {
					c && F(c.nodeName) === d ? d = c : (d = e.cloneNode(!1), c ? a.insertBefore(d, c) : a.appendChild(d));return d;
				}function r(a) {
					for (var c; a;) c = a.nextSibling, Wb(a), a = c;
				}function s(a) {
					var c = q && q[0],
					    d = H && H[0];if (c || d) for (; a && (a === c || a === d || c && 8 === c.nodeType);) a = a.nextSibling;return a;
				}function v() {
					var a = x && u.readValue();x = C.getOptions();var c = {},
					    d = g[0].firstChild;O && g.prepend(q);d = s(d);x.items.forEach(function (a) {
						var h, k;a.group ? (h = c[a.group], h || (h = p(g[0], d, "optgroup", f), d = h.nextSibling, h.label = a.group, h = c[a.group] = { groupElement: h, currentOptionElement: h.firstChild }), k = p(h.groupElement, h.currentOptionElement, "option", e), n(a, k), h.currentOptionElement = k.nextSibling) : (k = p(g[0], d, "option", e), n(a, k), d = k.nextSibling);
					});Object.keys(c).forEach(function (a) {
						r(c[a].currentOptionElement);
					});r(d);w.$render();if (!w.$isEmpty(a)) {
						var h = u.readValue();(C.trackBy ? ka(a, h) : a === h) || (w.$setViewValue(h), w.$render());
					}
				}var w = k[1];if (w) {
					var u = k[0];k = l.multiple;for (var q, z = 0, y = g.children(), A = y.length; z < A; z++) if ("" === y[z].value) {
						q = y.eq(z);break;
					}var O = !!q,
					    H = B(e.cloneNode(!1));H.val("?");var x,
					    C = d(l.ngOptions, g, c);k ? (w.$isEmpty = function (a) {
						return !a || 0 === a.length;
					}, u.writeValue = function (a) {
						x.items.forEach(function (a) {
							a.element.selected = !1;
						});a && a.forEach(function (a) {
							(a = x.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0);
						});
					}, u.readValue = function () {
						var a = g.val() || [],
						    c = [];m(a, function (a) {
							(a = x.selectValueMap[a]) && !a.disabled && c.push(x.getViewValueFromOption(a));
						});return c;
					}, C.trackBy && c.$watchCollection(function () {
						if (J(w.$viewValue)) return w.$viewValue.map(function (a) {
							return C.getTrackByValue(a);
						});
					}, function () {
						w.$render();
					})) : (u.writeValue = function (a) {
						var c = x.getOptionFromViewValue(a);
						c && !c.disabled ? g[0].value !== c.selectValue && (H.remove(), O || q.remove(), g[0].value = c.selectValue, c.element.selected = !0, c.element.setAttribute("selected", "selected")) : null === a || O ? (H.remove(), O || g.prepend(q), g.val(""), q.prop("selected", !0), q.attr("selected", !0)) : (O || q.remove(), g.prepend(H), g.val("?"), H.prop("selected", !0), H.attr("selected", !0));
					}, u.readValue = function () {
						var a = x.selectValueMap[g.val()];return a && !a.disabled ? (O || q.remove(), H.remove(), x.getViewValueFromOption(a)) : null;
					}, C.trackBy && c.$watch(function () {
						return C.getTrackByValue(w.$viewValue);
					}, function () {
						w.$render();
					}));O ? (q.remove(), a(q)(c), q.removeClass("ng-scope")) : q = B(e.cloneNode(!1));v();c.$watchCollection(C.getWatchables, v);
				}
			} };
	}],
	    Be = ["$locale", "$interpolate", "$log", function (a, c, d) {
		var e = /{}/g,
		    f = /^when(Minus)?(.+)$/;return { link: function link(h, g, l) {
				function k(a) {
					g.text(a || "");
				}var n = l.count,
				    p = l.$attr.when && g.attr(l.$attr.when),
				    r = l.offset || 0,
				    s = h.$eval(p) || {},
				    w = {},
				    A = c.startSymbol(),
				    u = c.endSymbol(),
				    q = A + n + "-" + r + u,
				    z = da.noop,
				    x;m(l, function (a, c) {
					var d = f.exec(c);d && (d = (d[1] ? "-" : "") + F(d[2]), s[d] = g.attr(l.$attr[c]));
				});
				m(s, function (a, d) {
					w[d] = c(a.replace(e, q));
				});h.$watch(n, function (c) {
					var e = parseFloat(c),
					    f = isNaN(e);f || e in s || (e = a.pluralCat(e - r));e === x || f && V(x) && isNaN(x) || (z(), f = w[e], v(f) ? (null != c && d.debug("ngPluralize: no rule defined for '" + e + "' in " + p), z = y, k()) : z = h.$watch(f, k), x = e);
				});
			} };
	}],
	    Ce = ["$parse", "$animate", function (a, c) {
		var d = I("ngRepeat"),
		    e = function e(a, c, d, _e, k, m, p) {
			a[d] = _e;k && (a[k] = m);a.$index = c;a.$first = 0 === c;a.$last = c === p - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (c & 1));
		};return { restrict: "A",
			multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(f, h) {
				var g = h.ngRepeat,
				    l = X.createComment(" end ngRepeat: " + g + " "),
				    k = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if (!k) throw d("iexp", g);var n = k[1],
				    p = k[2],
				    r = k[3],
				    s = k[4],
				    k = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if (!k) throw d("iidexp", n);var v = k[3] || k[1],
				    y = k[2];if (r && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r))) throw d("badident", r);var u,
				    q,
				    z,
				    A,
				    x = { $id: Ga };s ? u = a(s) : (z = function (a, c) {
					return Ga(c);
				}, A = function (a) {
					return a;
				});return function (a, f, h, k, n) {
					u && (q = function (c, d, e) {
						y && (x[y] = c);x[v] = d;x.$index = e;return u(a, x);
					});var s = fa();a.$watchCollection(p, function (h) {
						var k,
						    p,
						    t = f[0],
						    u,
						    x = fa(),
						    C,
						    G,
						    J,
						    M,
						    I,
						    F,
						    L;r && (a[r] = h);if (Da(h)) I = h, p = q || z;else for (L in (p = q || A, I = [], h)) ta.call(h, L) && "$" !== L.charAt(0) && I.push(L);C = I.length;L = Array(C);for (k = 0; k < C; k++) if ((G = h === I ? k : I[k], J = h[G], M = p(G, J, k), s[M])) F = s[M], delete s[M], x[M] = F, L[k] = F;else {
							if (x[M]) throw (m(L, function (a) {
								a && a.scope && (s[a.id] = a);
							}), d("dupes", g, M, J));L[k] = { id: M, scope: w, clone: w };x[M] = !0;
						}for (u in s) {
							F = s[u];M = rb(F.clone);c.leave(M);if (M[0].parentNode) for (k = 0, p = M.length; k < p; k++) M[k].$$NG_REMOVED = !0;F.scope.$destroy();
						}for (k = 0; k < C; k++) if ((G = h === I ? k : I[k], J = h[G], F = L[k], F.scope)) {
							u = t;do u = u.nextSibling; while (u && u.$$NG_REMOVED);F.clone[0] != u && c.move(rb(F.clone), null, B(t));t = F.clone[F.clone.length - 1];e(F.scope, k, v, J, y, G, C);
						} else n(function (a, d) {
							F.scope = d;var f = l.cloneNode(!1);a[a.length++] = f;c.enter(a, null, B(t));t = f;F.clone = a;x[F.id] = F;e(F.scope, k, v, J, y, G, C);
						});s = x;
					});
				};
			} };
	}],
	    De = ["$animate", function (a) {
		return { restrict: "A", multiElement: !0, link: function link(c, d, e) {
				c.$watch(e.ngShow, function (c) {
					a[c ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
				});
			} };
	}],
	    we = ["$animate", function (a) {
		return { restrict: "A", multiElement: !0, link: function link(c, d, e) {
				c.$watch(e.ngHide, function (c) {
					a[c ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
				});
			} };
	}],
	    Ee = Na(function (a, c, d) {
		a.$watch(d.ngStyle, function (a, d) {
			d && a !== d && m(d, function (a, d) {
				c.css(d, "");
			});a && c.css(a);
		}, !0);
	}),
	    Fe = ["$animate", function (a) {
		return { require: "ngSwitch", controller: ["$scope", function () {
				this.cases = {};
			}], link: function link(c, d, e, f) {
				var h = [],
				    g = [],
				    l = [],
				    k = [],
				    n = function n(a, c) {
					return function () {
						a.splice(c, 1);
					};
				};c.$watch(e.ngSwitch || e.on, function (c) {
					var d, e;d = 0;for (e = l.length; d < e; ++d) a.cancel(l[d]);d = l.length = 0;for (e = k.length; d < e; ++d) {
						var s = rb(g[d].clone);k[d].$destroy();(l[d] = a.leave(s)).then(n(l, d));
					}g.length = 0;k.length = 0;(h = f.cases["!" + c] || f.cases["?"]) && m(h, function (c) {
						c.transclude(function (d, e) {
							k.push(e);var f = c.element;d[d.length++] = X.createComment(" end ngSwitchWhen: ");g.push({ clone: d });a.enter(d, f.parent(), f);
						});
					});
				});
			} };
	}],
	    Ge = Na({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, c, d, e, f) {
			e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];e.cases["!" + d.ngSwitchWhen].push({ transclude: f, element: c });
		} }),
	    He = Na({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, c, d, e, f) {
			e.cases["?"] = e.cases["?"] || [];e.cases["?"].push({ transclude: f, element: c });
		} }),
	    Je = Na({ restrict: "EAC", link: function link(a, c, d, e, f) {
			if (!f) throw I("ngTransclude")("orphan", xa(c));f(function (a) {
				c.empty();c.append(a);
			});
		} }),
	    je = ["$templateCache", function (a) {
		return { restrict: "E", terminal: !0, compile: function compile(c, d) {
				"text/ng-template" == d.type && a.put(d.id, c[0].text);
			} };
	}],
	    Bg = { $setViewValue: y, $render: y },
	    Cg = ["$element", "$scope", "$attrs", function (a, c, d) {
		var e = this,
		    f = new Ua();e.ngModelCtrl = Bg;e.unknownOption = B(X.createElement("option"));
		e.renderUnknownOption = function (c) {
			c = "? " + Ga(c) + " ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c);
		};c.$on("$destroy", function () {
			e.renderUnknownOption = y;
		});e.removeUnknownOption = function () {
			e.unknownOption.parent() && e.unknownOption.remove();
		};e.readValue = function () {
			e.removeUnknownOption();return a.val();
		};e.writeValue = function (c) {
			e.hasOption(c) ? (e.removeUnknownOption(), a.val(c), "" === c && e.emptyOption.prop("selected", !0)) : null == c && e.emptyOption ? (e.removeUnknownOption(), a.val("")) : e.renderUnknownOption(c);
		};
		e.addOption = function (a, c) {
			Ta(a, '"option value"');"" === a && (e.emptyOption = c);var d = f.get(a) || 0;f.put(a, d + 1);
		};e.removeOption = function (a) {
			var c = f.get(a);c && (1 === c ? (f.remove(a), "" === a && (e.emptyOption = w)) : f.put(a, c - 1));
		};e.hasOption = function (a) {
			return !!f.get(a);
		};
	}],
	    ke = function ke() {
		return { restrict: "E", require: ["select", "?ngModel"], controller: Cg, link: function link(a, c, d, e) {
				var f = e[1];if (f) {
					var h = e[0];h.ngModelCtrl = f;f.$render = function () {
						h.writeValue(f.$viewValue);
					};c.on("change", function () {
						a.$apply(function () {
							f.$setViewValue(h.readValue());
						});
					});
					if (d.multiple) {
						h.readValue = function () {
							var a = [];m(c.find("option"), function (c) {
								c.selected && a.push(c.value);
							});return a;
						};h.writeValue = function (a) {
							var d = new Ua(a);m(c.find("option"), function (a) {
								a.selected = A(d.get(a.value));
							});
						};var g,
						    l = NaN;a.$watch(function () {
							l !== f.$viewValue || ka(g, f.$viewValue) || (g = ja(f.$viewValue), f.$render());l = f.$viewValue;
						});f.$isEmpty = function (a) {
							return !a || 0 === a.length;
						};
					}
				}
			} };
	},
	    me = ["$interpolate", function (a) {
		return { restrict: "E", priority: 100, compile: function compile(c, d) {
				if (A(d.value)) var e = a(d.value, !0);else {
					var f = a(c.text(), !0);f || d.$set("value", c.text());
				}return function (a, c, d) {
					function k(a) {
						p.addOption(a, c);p.ngModelCtrl.$render();c[0].hasAttribute("selected") && (c[0].selected = !0);
					}var m = c.parent(),
					    p = m.data("$selectController") || m.parent().data("$selectController");if (p && p.ngModelCtrl) {
						if (e) {
							var r;d.$observe("value", function (a) {
								A(r) && p.removeOption(r);r = a;k(a);
							});
						} else f ? a.$watch(f, function (a, c) {
							d.$set("value", a);c !== a && p.removeOption(c);k(a);
						}) : k(d.value);c.on("$destroy", function () {
							p.removeOption(d.value);
							p.ngModelCtrl.$render();
						});
					}
				};
			} };
	}],
	    le = qa({ restrict: "E", terminal: !1 }),
	    Gc = function Gc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
				e && (d.required = !0, e.$validators.required = function (a, c) {
					return !d.required || !e.$isEmpty(c);
				}, d.$observe("required", function () {
					e.$validate();
				}));
			} };
	},
	    Fc = function Fc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
				if (e) {
					var f,
					    h = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
						G(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw I("ngPattern")("noregexp", h, a, xa(c));f = a || w;e.$validate();
					});e.$validators.pattern = function (a, c) {
						return e.$isEmpty(c) || v(f) || f.test(c);
					};
				}
			} };
	},
	    Ic = function Ic() {
		return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
				if (e) {
					var f = -1;d.$observe("maxlength", function (a) {
						a = Y(a);f = isNaN(a) ? -1 : a;e.$validate();
					});e.$validators.maxlength = function (a, c) {
						return 0 > f || e.$isEmpty(c) || c.length <= f;
					};
				}
			} };
	},
	    Hc = function Hc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
				if (e) {
					var f = 0;d.$observe("minlength", function (a) {
						f = Y(a) || 0;e.$validate();
					});
					e.$validators.minlength = function (a, c) {
						return e.$isEmpty(c) || c.length >= f;
					};
				}
			} };
	};Q.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (ce(), ee(da), da.module("ngLocale", [], ["$provide", function (a) {
		function c(a) {
			a += "";var c = a.indexOf(".");return -1 == c ? 0 : a.length - c - 1;
		}a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "),
				SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3,
					maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-¤", negSuf: "", posPre: "¤", posSuf: "" }] }, id: "en-us", pluralCat: function pluralCat(a, e) {
				var f = a | 0,
				    h = e;w === h && (h = Math.min(c(a), 3));Math.pow(10, h);return 1 == f && 0 == h ? "one" : "other";
			} });
	}]), B(X).ready(function () {
		Zd(X, zc);
	}));
})(window, document);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+(function (a) {
	"use strict";var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
})(jQuery), +(function (a) {
	"use strict";function b() {
		var a = document.createElement("bootstrap"),
		    b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };return !1;
	}a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
		    d = this;a(this).one("bsTransitionEnd", function () {
			c = !0;
		});var e = function e() {
			c || a(d).trigger(a.support.transition.end);
		};return setTimeout(e, b), this;
	}, a(function () {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
				return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
			} });
	});
})(jQuery), +(function (a) {
	"use strict";function b(b) {
		return this.each(function () {
			var c = a(this),
			    e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
		});
	}var c = '[data-dismiss="alert"]',
	    d = function d(b) {
		a(b).on("click", c, this.close);
	};d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove();
		}var e = a(this),
		    f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a(f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
	};var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
		return a.fn.alert = e, this;
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
})(jQuery), +(function (a) {
	"use strict";function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.button"),
			    f = "object" == typeof b && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
		});
	}var c = function c(b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
	};c.VERSION = "3.3.5", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
		var c = "disabled",
		    d = this.$element,
		    e = d.is("input") ? "val" : "html",
		    f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
		}, this), 0);
	}, c.prototype.toggle = function () {
		var a = !0,
		    b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
			var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
	};var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
		return a.fn.button = d, this;
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
		var d = a(c.target);d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
	});
})(jQuery), +(function (a) {
	"use strict";function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.carousel"),
			    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
			    g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
		});
	}var c = function c(b, _c2) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c2, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
	};c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {case 37:
					this.prev();break;case 39:
					this.next();break;default:
					return;}a.preventDefault();
		}
	}, c.prototype.cycle = function (b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
	}, c.prototype.getItemIndex = function (a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
	}, c.prototype.getItemForDirection = function (a, b) {
		var c = this.getItemIndex(b),
		    d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
		    f = (c + e) % this.$items.length;return this.$items.eq(f);
	}, c.prototype.to = function (a) {
		var b = this,
		    c = this.getItemIndex(this.$active = this.$element.find(".item.active"));return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			b.to(a);
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
	}, c.prototype.pause = function (b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
	}, c.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next");
	}, c.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev");
	}, c.prototype.slide = function (b, d) {
		var e = this.$element.find(".item.active"),
		    f = d || this.getItemForDirection(b, e),
		    g = this.interval,
		    h = "next" == b ? "left" : "right",
		    i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
		    k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
			if ((this.sliding = !0, g && this.pause(), this.$indicators.length)) {
				this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
			}var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
					i.$element.trigger(m);
				}, 0);
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
		}
	};var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
		return a.fn.carousel = d, this;
	};var e = function e(c) {
		var d,
		    e = a(this),
		    f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
			    h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
		}
	};a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
		a('[data-ride="carousel"]').each(function () {
			var c = a(this);b.call(c, c.data());
		});
	});
})(jQuery), +(function (a) {
	"use strict";function b(b) {
		var c,
		    d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
	}function c(b) {
		return this.each(function () {
			var c = a(this),
			    e = c.data("bs.collapse"),
			    f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
		});
	}var d = function d(b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
	};d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
		var a = this.$element.hasClass("width");return a ? "width" : "height";
	}, d.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b,
			    e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
					};if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
				}
			}
		}
	}, d.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
				var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
				};return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
			}
		}
	}, d.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]();
	}, d.prototype.getParent = function () {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
			var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
		}, this)).end();
	}, d.prototype.addAriaAndCollapsedClass = function (a, b) {
		var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
	};var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = e, this;
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
		var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
		    g = f.data("bs.collapse"),
		    h = g ? "toggle" : e.data();c.call(f, h);
	});
})(jQuery), +(function (a) {
	"use strict";function b(b) {
		var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
	}function c(c) {
		c && 3 === c.which || (a(e).remove(), a(f).each(function () {
			var d = a(this),
			    e = b(d),
			    f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))));
		}));
	}function d(b) {
		return this.each(function () {
			var c = a(this),
			    d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
		});
	}var e = ".dropdown-backdrop",
	    f = '[data-toggle="dropdown"]',
	    g = function g(b) {
		a(b).on("click.bs.dropdown", this.toggle);
	};g.VERSION = "3.3.5", g.prototype.toggle = function (d) {
		var e = a(this);if (!e.is(".disabled, :disabled")) {
			var f = b(e),
			    g = f.hasClass("open");if ((c(), !g)) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if ((f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
			}return !1;
		}
	}, g.prototype.keydown = function (c) {
		if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);if ((c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled"))) {
				var e = b(d),
				    g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
				    i = e.find(".dropdown-menu" + h);if (i.length) {
					var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
				}
			}
		}
	};var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = h, this;
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation();
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
})(jQuery), +(function (a) {
	"use strict";function b(b, d) {
		return this.each(function () {
			var e = a(this),
			    f = e.data("bs.modal"),
			    g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
		});
	}var c = function c(b, _c3) {
		this.options = _c3, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal");
		}, this));
	};c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
		return this.isShown ? this.hide() : this.show(a);
	}, c.prototype.show = function (b) {
		var d = this,
		    e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			d.$element.one("mouseup.dismiss.bs.modal", function (b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
			});
		}), this.backdrop(function () {
			var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
				d.$element.trigger("focus").trigger(f);
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
		}));
	}, c.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
	}, c.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
		}, this));
	}, c.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
			27 == a.which && this.hide();
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
	}, c.prototype.resize = function () {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
	}, c.prototype.hideModal = function () {
		var a = this;this.$element.hide(), this.backdrop(function () {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
		});
	}, c.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
	}, c.prototype.backdrop = function (b) {
		var d = this,
		    e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;if ((this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
				return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
			}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");var g = function g() {
				d.removeBackdrop(), b && b();
			};a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
		} else b && b();
	}, c.prototype.handleUpdate = function () {
		this.adjustDialog();
	}, c.prototype.adjustDialog = function () {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
	}, c.prototype.resetAdjustments = function () {
		this.$element.css({ paddingLeft: "", paddingRight: "" });
	}, c.prototype.checkScrollbar = function () {
		var a = window.innerWidth;if (!a) {
			var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
		}this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
	}, c.prototype.setScrollbar = function () {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
	}, c.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad);
	}, c.prototype.measureScrollbar = function () {
		var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
	};var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
		return a.fn.modal = d, this;
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
		var d = a(this),
		    e = d.attr("href"),
		    f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
		    g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
				d.is(":visible") && d.trigger("focus");
			});
		}), b.call(f, g, this);
	});
})(jQuery), +(function (a) {
	"use strict";function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.tooltip"),
			    f = "object" == typeof b && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
		});
	}var c = function c(a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
	};c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
		if ((this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector)) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
				    i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
			}
		}this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
	}, c.prototype.getDefaults = function () {
		return c.DEFAULTS;
	}, c.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
	}, c.prototype.getDelegateOptions = function () {
		var b = {},
		    c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d);
		}), b;
	}, c.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
			"in" == c.hoverState && c.show();
		}, c.options.delay.show)) : c.show());
	}, c.prototype.isInStateTrue = function () {
		for (var a in this.inState) if (this.inState[a]) return !0;return !1;
	}, c.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
			"out" == c.hoverState && c.hide();
		}, c.options.delay.hide)) : c.hide());
	}, c.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
			    f = this.tip(),
			    g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
			    i = /\s?auto?\s?/i,
			    j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
			    l = f[0].offsetWidth,
			    m = f[0].offsetHeight;if (j) {
				var n = h,
				    o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
			}var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
				var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
			};a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
		}
	}, c.prototype.applyPlacement = function (b, c) {
		var d = this.tip(),
		    e = d[0].offsetWidth,
		    f = d[0].offsetHeight,
		    g = parseInt(d.css("margin-top"), 10),
		    h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
				d.css({ top: Math.round(a.top), left: Math.round(a.left) });
			} }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
		    j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
		    m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
		    n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
	}, c.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
	}, c.prototype.setContent = function () {
		var a = this.tip(),
		    b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
	}, c.prototype.hide = function (b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
		}var e = this,
		    f = a(this.$tip),
		    g = a.Event("hide.bs." + this.type);return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
	}, c.prototype.fixTitle = function () {
		var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
	}, c.prototype.hasContent = function () {
		return this.getTitle();
	}, c.prototype.getPosition = function (b) {
		b = b || this.$element;var c = b[0],
		    d = "BODY" == c.tagName,
		    e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = d ? { top: 0, left: 0 } : b.offset(),
		    g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
		    h = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, g, h, f);
	}, c.prototype.getCalculatedOffset = function (a, b, c, d) {
		return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
	}, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
		var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
		    g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
			    i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
		} else {
			var j = b.left - f,
			    k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
		}return e;
	}, c.prototype.getTitle = function () {
		var a,
		    b = this.$element,
		    c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
	}, c.prototype.getUID = function (a) {
		do a += ~ ~(1e6 * Math.random()); while (document.getElementById(a));return a;
	}, c.prototype.tip = function () {
		if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
	}, c.prototype.enable = function () {
		this.enabled = !0;
	}, c.prototype.disable = function () {
		this.enabled = !1;
	}, c.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled;
	}, c.prototype.toggle = function (b) {
		var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
	}, c.prototype.destroy = function () {
		var a = this;clearTimeout(this.timeout), this.hide(function () {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null;
		});
	};var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = d, this;
	};
})(jQuery), +(function (a) {
	"use strict";function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.popover"),
			    f = "object" == typeof b && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
		});
	}var c = function c(a, b) {
		this.init("popover", a, b);
	};if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
		return c.DEFAULTS;
	}, c.prototype.setContent = function () {
		var a = this.tip(),
		    b = this.getTitle(),
		    c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
	}, c.prototype.hasContent = function () {
		return this.getTitle() || this.getContent();
	}, c.prototype.getContent = function () {
		var a = this.$element,
		    b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow");
	};var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
		return a.fn.popover = d, this;
	};
})(jQuery), +(function (a) {
	"use strict";function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
	}function c(c) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.scrollspy"),
			    f = "object" == typeof c && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
		});
	}b.VERSION = "3.3.5", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	}, b.prototype.refresh = function () {
		var b = this,
		    c = "offset",
		    d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var b = a(this),
			    e = b.data("target") || b.attr("href"),
			    f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
		}).sort(function (a, b) {
			return a[0] - b[0];
		}).each(function () {
			b.offsets.push(this[0]), b.targets.push(this[1]);
		});
	}, b.prototype.process = function () {
		var a,
		    b = this.$scrollElement.scrollTop() + this.options.offset,
		    c = this.getScrollHeight(),
		    d = this.options.offset + c - this.$scrollElement.height(),
		    e = this.offsets,
		    f = this.targets,
		    g = this.activeTarget;if ((this.scrollHeight != c && this.refresh(), b >= d)) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
		    d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
	}, b.prototype.clear = function () {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
	};var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = d, this;
	}, a(window).on("load.bs.scrollspy.data-api", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);c.call(b, b.data());
		});
	});
})(jQuery), +(function (a) {
	"use strict";function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
		});
	}var c = function c(b) {
		this.element = a(b);
	};c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
		var b = this.element,
		    c = b.closest("ul:not(.dropdown-menu)"),
		    d = b.data("target");if ((d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active"))) {
			var e = c.find(".active:last a"),
			    f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
			    g = a.Event("show.bs.tab", { relatedTarget: e[0] });if ((e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented())) {
				var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
					e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
				});
			}
		}
	}, c.prototype.activate = function (b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
		}var g = d.find("> .active"),
		    h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
	};var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
		return a.fn.tab = d, this;
	};var e = function e(c) {
		c.preventDefault(), b.call(a(this), "show");
	};a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
})(jQuery), +(function (a) {
	"use strict";function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.affix"),
			    f = "object" == typeof b && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
		});
	}var c = function c(b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
	};c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
		var e = this.$target.scrollTop(),
		    f = this.$element.offset(),
		    g = this.$target.height();if (null != c && "top" == this.affixed) return c > e ? "top" : !1;if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";var h = null == this.affixed,
		    i = h ? e : f.top,
		    j = h ? g : b;return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
	}, c.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
		    b = this.$element.offset();return this.pinnedOffset = b.top - a;
	}, c.prototype.checkPositionWithEventLoop = function () {
		setTimeout(a.proxy(this.checkPosition, this), 1);
	}, c.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
			    d = this.options.offset,
			    e = d.top,
			    f = d.bottom,
			    g = Math.max(a(document).height(), a(document.body).height());"object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
				    j = a.Event(i + ".bs.affix");if ((this.$element.trigger(j), j.isDefaultPrevented())) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
			}"bottom" == h && this.$element.offset({ top: g - b - f });
		}
	};var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
		return a.fn.affix = d, this;
	}, a(window).on("load", function () {
		a('[data-spy="affix"]').each(function () {
			var c = a(this),
			    d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
		});
	});
})(jQuery);
/*!
 * Datepicker for Bootstrap v1.5.0 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else if (typeof exports === 'object') {
		factory(require('jquery'));
	} else {
		factory(jQuery);
	}
})(function ($, undefined) {

	function UTCDate() {
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday() {
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return date1.getUTCFullYear() === date2.getUTCFullYear() && date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCDate() === date2.getUTCDate();
	}
	function alias(method) {
		return function () {
			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function () {
		var extras = {
			get: function get(i) {
				return this.slice(i)[0];
			},
			contains: function contains(d) {
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i = 0, l = this.length; i < l; i++) if (this[i].valueOf() === val) return i;
				return -1;
			},
			remove: function remove(i) {
				this.splice(i, 1);
			},
			replace: function replace(new_array) {
				if (!new_array) return;
				if (!$.isArray(new_array)) new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function clear() {
				this.length = 0;
			},
			copy: function copy() {
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function () {
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();

	// Picker object

	var Datepicker = function Datepicker(element, options) {
		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0) this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline) {
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		} else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl) {
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks) this.picker.find('tfoot .today, tfoot .clear').attr('colspan', function (i, val) {
			return parseInt(val) + 1;
		});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
		this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
		this.setDatesDisabled(this.o.datesDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline) {
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function _process_options(opts) {
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]) {
				lang = lang.split('-')[0];
				if (!dates[lang]) lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView) {
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode) {
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			switch (o.maxViewMode) {
				case 0:
				case 'days':
					o.maxViewMode = 0;
					break;
				case 1:
				case 'months':
					o.maxViewMode = 1;
					break;
				default:
					o.maxViewMode = 2;
			}

			o.startView = Math.min(o.startView, o.maxViewMode);
			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true) {
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false) o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity) {
				if (!!o.startDate) {
					if (o.startDate instanceof Date) o.startDate = this._local_to_utc(this._zero_time(o.startDate));else o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				} else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity) {
				if (!!o.endDate) {
					if (o.endDate instanceof Date) o.endDate = this._local_to_utc(this._zero_time(o.endDate));else o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				} else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled || [];
			if (!$.isArray(o.daysOfWeekDisabled)) o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function (d) {
				return parseInt(d, 10);
			});

			o.daysOfWeekHighlighted = o.daysOfWeekHighlighted || [];
			if (!$.isArray(o.daysOfWeekHighlighted)) o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/);
			o.daysOfWeekHighlighted = $.map(o.daysOfWeekHighlighted, function (d) {
				return parseInt(d, 10);
			});

			o.datesDisabled = o.datesDisabled || [];
			if (!$.isArray(o.datesDisabled)) {
				var datesDisabled = [];
				datesDisabled.push(DPGlobal.parseDate(o.datesDisabled, format, o.language));
				o.datesDisabled = datesDisabled;
			}
			o.datesDisabled = $.map(o.datesDisabled, function (d) {
				return DPGlobal.parseDate(d, format, o.language);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
			    _plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function (word) {
				return (/^auto|left|right|top|bottom$/.test(word)
				);
			});
			o.orientation = { x: 'auto', y: 'auto' };
			if (!_plc || _plc === 'auto') ; // no action
			else if (plc.length === 1) {
					switch (plc[0]) {
						case 'top':
						case 'bottom':
							o.orientation.y = plc[0];
							break;
						case 'left':
						case 'right':
							o.orientation.x = plc[0];
							break;
					}
				} else {
					_plc = $.grep(plc, function (word) {
						return (/^left|right$/.test(word)
						);
					});
					o.orientation.x = _plc[0] || 'auto';

					_plc = $.grep(plc, function (word) {
						return (/^top|bottom$/.test(word)
						);
					});
					o.orientation.y = _plc[0] || 'auto';
				}
			if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
			o.showOnFocus = o.showOnFocus !== undefined ? o.showOnFocus : true;
			o.zIndexOffset = o.zIndexOffset !== undefined ? o.zIndexOffset : 10;
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function _applyEvents(evs) {
			for (var i = 0, el, ch, ev; i < evs.length; i++) {
				el = evs[i][0];
				if (evs[i].length === 2) {
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3) {
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function _unapplyEvents(evs) {
			for (var i = 0, el, ev, ch; i < evs.length; i++) {
				el = evs[i][0];
				if (evs[i].length === 2) {
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3) {
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function _buildEvents() {
			var events = {
				keyup: $.proxy(function (e) {
					if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) this.update();
				}, this),
				keydown: $.proxy(this.keydown, this),
				paste: $.proxy(this.paste, this)
			};

			if (this.o.showOnFocus === true) {
				events.focus = $.proxy(this.show, this);
			}

			if (this.isInput) {
				// single input
				this._events = [[this.element, events]];
			} else if (this.component && this.hasInput) {
				// component: input + button
				this._events = [
				// For components that are not readonly, allow keyboard nav
				[this.element.find('input'), events], [this.component, {
					click: $.proxy(this.show, this)
				}]];
			} else if (this.element.is('div')) {
				// inline datepicker
				this.isInline = true;
			} else {
				this._events = [[this.element, {
					click: $.proxy(this.show, this)
				}]];
			}
			this._events.push(
			// Component: listen for blur on element descendants
			[this.element, '*', {
				blur: $.proxy(function (e) {
					this._focused_from = e.target;
				}, this)
			}],
			// Input: listen for blur on element
			[this.element, {
				blur: $.proxy(function (e) {
					this._focused_from = e.target;
				}, this)
			}]);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function (e) {
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [[this.picker, {
				click: $.proxy(this.click, this)
			}], [$(window), {
				resize: $.proxy(this.place, this)
			}], [$(document), {
				mousedown: $.proxy(function (e) {
					// Clicked outside the datepicker, hide it
					if (!(this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.picker.hasClass('datepicker-inline'))) {
						this.hide();
					}
				}, this)
			}]];
		},
		_attachEvents: function _attachEvents() {
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function _detachEvents() {
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function _attachSecondaryEvents() {
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function _detachSecondaryEvents() {
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function _trigger(event, altdate) {
			var date = altdate || this.dates.get(-1),
			    local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function (ix, format) {
					if (arguments.length === 0) {
						ix = this.dates.length - 1;
						format = this.o.format;
					} else if (typeof ix === 'string') {
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function show() {
			if (this.element.attr('readonly') && this.o.enableOnReadonly === false) return;
			if (!this.isInline) this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function hide() {
			if (this.isInline) return this;
			if (!this.picker.is(':visible')) return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find('input').val())) this.setValue();
			this._trigger('hide');
			return this;
		},

		remove: function remove() {
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput) {
				delete this.element.data().date;
			}
			return this;
		},

		paste: function paste(evt) {
			var dateString;
			if (evt.originalEvent.clipboardData && evt.originalEvent.clipboardData.types && $.inArray('text/plain', evt.originalEvent.clipboardData.types) !== -1) {
				dateString = evt.originalEvent.clipboardData.getData('text/plain');
			} else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			} else {
				return;
			}
			this.setDate(dateString);
			this.update();
			evt.preventDefault();
		},

		_utc_to_local: function _utc_to_local(utc) {
			return utc && new Date(utc.getTime() + utc.getTimezoneOffset() * 60000);
		},
		_local_to_utc: function _local_to_utc(local) {
			return local && new Date(local.getTime() - local.getTimezoneOffset() * 60000);
		},
		_zero_time: function _zero_time(local) {
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function _zero_utc_time(utc) {
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function getDates() {
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function getUTCDates() {
			return $.map(this.dates, function (d) {
				return new Date(d);
			});
		},

		getDate: function getDate() {
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function getUTCDate() {
			var selected_date = this.dates.get(-1);
			if (typeof selected_date !== 'undefined') {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function clearDates() {
			var element;
			if (this.isInput) {
				element = this.element;
			} else if (this.component) {
				element = this.element.find('input');
			}

			if (element) {
				element.val('');
			}

			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},
		setDates: function setDates() {
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function setUTCDates() {
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function setValue() {
			var formatted = this.getFormattedDate();
			if (!this.isInput) {
				if (this.component) {
					this.element.find('input').val(formatted);
				}
			} else {
				this.element.val(formatted);
			}
			return this;
		},

		getFormattedDate: function getFormattedDate(format) {
			if (format === undefined) format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function (d) {
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function setStartDate(startDate) {
			this._process_options({ startDate: startDate });
			this.update();
			this.updateNavArrows();
			return this;
		},

		setEndDate: function setEndDate(endDate) {
			this._process_options({ endDate: endDate });
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function setDaysOfWeekDisabled(daysOfWeekDisabled) {
			this._process_options({ daysOfWeekDisabled: daysOfWeekDisabled });
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekHighlighted: function setDaysOfWeekHighlighted(daysOfWeekHighlighted) {
			this._process_options({ daysOfWeekHighlighted: daysOfWeekHighlighted });
			this.update();
			return this;
		},

		setDatesDisabled: function setDatesDisabled(datesDisabled) {
			this._process_options({ datesDisabled: datesDisabled });
			this.update();
			this.updateNavArrows();
		},

		place: function place() {
			if (this.isInline) return this;
			var calendarWidth = this.picker.outerWidth(),
			    calendarHeight = this.picker.outerHeight(),
			    visualPadding = 10,
			    container = $(this.o.container),
			    windowWidth = container.width(),
			    scrollTop = container.scrollTop(),
			    appendOffset = container.offset();

			var parentsZindex = [];
			this.element.parents().each(function () {
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left,
			    top = offset.top - appendOffset.top;

			this.picker.removeClass('datepicker-orient-top datepicker-orient-bottom ' + 'datepicker-orient-right datepicker-orient-left');

			if (this.o.orientation.x !== 'auto') {
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right') left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
					if (offset.left < 0) {
						// component is outside the window on the left side. Move it into visible range
						this.picker.addClass('datepicker-orient-left');
						left -= offset.left - visualPadding;
					} else if (left + calendarWidth > windowWidth) {
						// the calendar passes the widow right edge. Align it to component right side
						this.picker.addClass('datepicker-orient-right');
						left = offset.left + width - calendarWidth;
					} else {
						// Default to left
						this.picker.addClass('datepicker-orient-left');
					}
				}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
			    top_overflow;
			if (yorient === 'auto') {
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top') top -= calendarHeight + parseInt(this.picker.css('padding-top'));else top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function update() {
			if (!this._allow_update) return this;

			var oldDates = this.dates.copy(),
			    dates = [],
			    fromArgs = false;
			if (arguments.length) {
				$.each(arguments, $.proxy(function (i, date) {
					if (date instanceof Date) date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			} else {
				dates = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate) dates = dates.split(this.o.multidateSeparator);else dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function (date) {
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function (date) {
				return date < this.o.startDate || date > this.o.endDate || !date;
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length) this.viewDate = new Date(this.dates.get(-1));else if (this.viewDate < this.o.startDate) this.viewDate = new Date(this.o.startDate);else if (this.viewDate > this.o.endDate) this.viewDate = new Date(this.o.endDate);else this.viewDate = this.o.defaultViewDate;

			if (fromArgs) {
				// setting date by clicking
				this.setValue();
			} else if (dates.length) {
				// setting date by typing
				if (String(oldDates) !== String(this.dates)) this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length) this._trigger('clearDate');

			this.fill();
			this.element.change();
			return this;
		},

		fillDow: function fillDow() {
			var dowCnt = this.o.weekStart,
			    html = '<tr>';
			if (this.o.calendarWeeks) {
				this.picker.find('.datepicker-days .datepicker-switch').attr('colspan', function (i, val) {
					return parseInt(val) + 1;
				});
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7) {
				html += '<th class="dow">' + dates[this.o.language].daysMin[dowCnt++ % 7] + '</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function fillMonths() {
			var html = '',
			    i = 0;
			while (i < 12) {
				html += '<span class="month">' + dates[this.o.language].monthsShort[i++] + '</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function setRange(range) {
			if (!range || !range.length) delete this.range;else this.range = $.map(range, function (d) {
				return d.valueOf();
			});
			this.fill();
		},

		getClassNames: function getClassNames(date) {
			var cls = [],
			    year = this.viewDate.getUTCFullYear(),
			    month = this.viewDate.getUTCMonth(),
			    today = new Date();
			if (date.getUTCFullYear() < year || date.getUTCFullYear() === year && date.getUTCMonth() < month) {
				cls.push('old');
			} else if (date.getUTCFullYear() > year || date.getUTCFullYear() === year && date.getUTCMonth() > month) {
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf()) cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight && date.getUTCFullYear() === today.getFullYear() && date.getUTCMonth() === today.getMonth() && date.getUTCDate() === today.getDate()) {
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1) cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate || $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
				cls.push('disabled');
			}
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1) {
				cls.push('highlighted');
			}
			if (this.o.datesDisabled.length > 0 && $.grep(this.o.datesDisabled, function (d) {
				return isUTCEquals(date, d);
			}).length > 0) {
				cls.push('disabled', 'disabled-date');
			}

			if (this.range) {
				if (date > this.range[0] && date < this.range[this.range.length - 1]) {
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1) {
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]) {
					cls.push('range-start');
				}
				if (date.valueOf() === this.range[this.range.length - 1]) {
					cls.push('range-end');
				}
			}
			return cls;
		},

		fill: function fill() {
			var d = new Date(this.viewDate),
			    year = d.getUTCFullYear(),
			    month = d.getUTCMonth(),
			    startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
			    startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
			    endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
			    endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
			    todaytxt = dates[this.o.language].today || dates['en'].today || '',
			    cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
			    titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
			    tooltip;
			if (isNaN(year) || isNaN(month)) return;
			this.picker.find('.datepicker-days thead .datepicker-switch').text(DPGlobal.formatDate(new UTCDate(year, month), titleFormat, this.o.language));
			this.picker.find('tfoot .today').text(todaytxt).toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot .clear').text(cleartxt).toggle(this.o.clearBtn !== false);
			this.picker.find('thead .datepicker-title').text(this.o.title).toggle(this.o.title !== '');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month - 1, 28),
			    day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100) {
				nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
			}
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getUTCDay() === this.o.weekStart) {
					html.push('<tr>');
					if (this.o.calendarWeeks) {
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
						// Start of current week: based on weekstart/current date
						ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
						   
						// Thursday of this week
						th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
						   
						// First Thursday of year, year from thursday
						yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
						   
						// Calendar week: ms between thursdays, div ms per day, div 7 days
						calWeek = (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">' + calWeek + '</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop) {
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined) before = {};else if (typeof before === 'boolean') before = { enabled: before };else if (typeof before === 'string') before = { classes: before };
					if (before.enabled === false) clsName.push('disabled');
					if (before.classes) clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip) tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + prevMonth.getUTCDate() + '</td>');
				tooltip = null;
				if (prevMonth.getUTCDay() === this.o.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months').find('.datepicker-switch').text(this.o.maxViewMode < 2 ? 'Months' : year).end().find('span').removeClass('active');

			$.each(this.dates, function (i, d) {
				if (d.getUTCFullYear() === year) months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear) {
				months.addClass('disabled');
			}
			if (year === startYear) {
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear) {
				months.slice(endMonth + 1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop) {
				var that = this;
				$.each(months, function (i, month) {
					if (!$(month).hasClass('disabled')) {
						var moDate = new Date(year, i, 1);
						var before = that.o.beforeShowMonth(moDate);
						if (before === false) $(month).addClass('disabled');
					}
				});
			}

			html = '';
			year = parseInt(year / 10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years').find('.datepicker-switch').text(year + '-' + (year + 9)).end().find('td');
			year -= 1;
			var years = $.map(this.dates, function (d) {
				return d.getUTCFullYear();
			}),
			    classes;
			for (var i = -1; i < 11; i++) {
				classes = ['year'];
				tooltip = null;

				if (i === -1) classes.push('old');else if (i === 10) classes.push('new');
				if ($.inArray(year, years) !== -1) classes.push('active');
				if (year < startYear || year > endYear) classes.push('disabled');

				if (this.o.beforeShowYear !== $.noop) {
					var yrBefore = this.o.beforeShowYear(new Date(year, 0, 1));
					if (yrBefore === undefined) yrBefore = {};else if (typeof yrBefore === 'boolean') yrBefore = { enabled: yrBefore };else if (typeof yrBefore === 'string') yrBefore = { classes: yrBefore };
					if (yrBefore.enabled === false) classes.push('disabled');
					if (yrBefore.classes) classes = classes.concat(yrBefore.classes.split(/\s+/));
					if (yrBefore.tooltip) tooltip = yrBefore.tooltip;
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + year + '</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function updateNavArrows() {
			if (!this._allow_update) return;

			var d = new Date(this.viewDate),
			    year = d.getUTCFullYear(),
			    month = d.getUTCMonth();
			switch (this.viewMode) {
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
						this.picker.find('.prev').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.prev').css({ visibility: 'visible' });
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
						this.picker.find('.next').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.next').css({ visibility: 'visible' });
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2) {
						this.picker.find('.prev').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.prev').css({ visibility: 'visible' });
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2) {
						this.picker.find('.next').css({ visibility: 'hidden' });
					} else {
						this.picker.find('.next').css({ visibility: 'visible' });
					}
					break;
			}
		},

		click: function click(e) {
			e.preventDefault();
			e.stopPropagation();
			var target = $(e.target).closest('span, td, th'),
			    year,
			    month,
			    day;
			if (target.length === 1) {
				switch (target[0].nodeName.toLowerCase()) {
					case 'th':
						switch (target[0].className) {
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode) {
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1) this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								this.clearDates();
								break;
						}
						break;
					case 'span':
						if (!target.hasClass('disabled')) {
							this.viewDate.setUTCDate(1);
							if (target.hasClass('month')) {
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1) {
									this._setDate(UTCDate(year, month, day));
									this.showMode();
								} else {
									this.showMode(-1);
								}
							} else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10) || 0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2) {
									this._setDate(UTCDate(year, month, day));
								}
								this.showMode(-1);
							}
							this.fill();
						}
						break;
					case 'td':
						if (target.hasClass('day') && !target.hasClass('disabled')) {
							day = parseInt(target.text(), 10) || 1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.hasClass('old')) {
								if (month === 0) {
									month = 11;
									year -= 1;
								} else {
									month -= 1;
								}
							} else if (target.hasClass('new')) {
								if (month === 11) {
									month = 0;
									year += 1;
								} else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from) {
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function _toggle_multidate(date) {
			var ix = this.dates.contains(date);
			if (!date) {
				this.dates.clear();
			}

			if (ix !== -1) {
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive) {
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			} else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number') while (this.dates.length > this.o.multidate) this.dates.remove(0);
		},

		_setDate: function _setDate(date, which) {
			if (!which || which === 'date') this._toggle_multidate(date && new Date(date));
			if (!which || which === 'view') this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			var element;
			if (this.isInput) {
				element = this.element;
			} else if (this.component) {
				element = this.element.find('input');
			}
			if (element) {
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')) {
				this.hide();
			}
		},

		moveMonth: function moveMonth(date, dir) {
			if (!isValidDate(date)) return this.o.defaultViewDate;
			if (!dir) return date;
			var new_date = new Date(date.valueOf()),
			    day = new_date.getUTCDate(),
			    month = new_date.getUTCMonth(),
			    mag = Math.abs(dir),
			    new_month,
			    test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1) {
				test = dir === -1
				// If going back one month, make sure month is not current month
				// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
				? function () {
					return new_date.getUTCMonth() === month;
				}
				// If going forward one month, make sure month is as expected
				// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
				: function () {
					return new_date.getUTCMonth() !== new_month;
				};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11) new_month = (new_month + 12) % 12;
			} else {
				// For magnitudes >1, move one month at a time...
				for (var i = 0; i < mag; i++)
				// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
				new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function () {
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()) {
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function moveYear(date, dir) {
			return this.moveMonth(date, dir * 12);
		},

		dateWithinRange: function dateWithinRange(date) {
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function keydown(e) {
			if (!this.picker.is(':visible')) {
				if (e.keyCode === 40 || e.keyCode === 27) {
					// allow down to re-show picker
					this.show();
					e.stopPropagation();
				}
				return;
			}
			var dateChanged = false,
			    dir,
			    newDate,
			    newViewDate,
			    focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode) {
				case 27:
					// escape
					if (this.focusDate) {
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					} else this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 39:
					// right
					if (!this.o.keyboardNavigation) break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey) {
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					} else if (e.shiftKey) {
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					} else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newViewDate)) {
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40:
					// down
					if (!this.o.keyboardNavigation) break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey) {
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					} else if (e.shiftKey) {
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					} else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newViewDate)) {
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32:
					// spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13:
					// enter
					if (!this.o.forceParse) {
						break;
					}
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')) {
						e.preventDefault();
						if (typeof e.stopPropagation === 'function') {
							e.stopPropagation(); // All modern browsers, IE9+
						} else {
								e.cancelBubble = true; // IE6,7,8 ignore "stopPropagation"
							}
						if (this.o.autoclose) this.hide();
					}
					break;
				case 9:
					// tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged) {
				if (this.dates.length) this._trigger('changeDate');else this._trigger('clearDate');
				var element;
				if (this.isInput) {
					element = this.element;
				} else if (this.component) {
					element = this.element.find('input');
				}
				if (element) {
					element.change();
				}
			}
		},

		showMode: function showMode(dir) {
			if (dir) {
				this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + dir));
			}
			this.picker.children('div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).show();
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function DateRangePicker(element, options) {
		this.element = $(element);
		this.inputs = $.map(options.inputs, function (i) {
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		datepickerPlugin.call($(this.inputs), options).on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function (i) {
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function updateDates() {
			this.dates = $.map(this.pickers, function (i) {
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function updateRanges() {
			var range = $.map(this.dates, function (d) {
				return d.valueOf();
			});
			$.each(this.pickers, function (i, p) {
				p.setRange(range);
			});
		},
		dateUpdated: function dateUpdated(e) {
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating) return;
			this.updating = true;

			var dp = $(e.target).data('datepicker');

			if (typeof dp === "undefined") {
				return;
			}

			var new_date = dp.getUTCDate(),
			    i = $.inArray(e.target, this.inputs),
			    j = i - 1,
			    k = i + 1,
			    l = this.inputs.length;
			if (i === -1) return;

			$.each(this.pickers, function (i, p) {
				if (!p.getUTCDate()) p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]) {
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]) {
					this.pickers[j--].setUTCDate(new_date);
				}
			} else if (new_date > this.dates[k]) {
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]) {
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function remove() {
			$.map(this.pickers, function (p) {
				p.remove();
			});
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix) {
		// Derive options from element data-attrs
		var data = $(el).data(),
		    out = {},
		    inkey,
		    replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_, a) {
			return a.toLowerCase();
		}
		for (var key in data) if (prefix.test(key)) {
			inkey = key.replace(replace, re_lower);
			out[inkey] = data[key];
		}
		return out;
	}

	function opts_from_locale(lang) {
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]) {
			lang = lang.split('-')[0];
			if (!dates[lang]) return;
		}
		var d = dates[lang];
		$.each(locale_opts, function (i, k) {
			if (k in d) out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function datepickerPlugin(option) {
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function () {
			var $this = $(this),
			    data = $this.data('datepicker'),
			    options = typeof option === 'object' && option;
			if (!data) {
				var elopts = opts_from_el(this, 'date'),
				   
				// Preliminary otions
				xopts = $.extend({}, defaults, elopts, options),
				    locopts = opts_from_locale(xopts.language),
				   
				// Options priority: js args, data-attrs, locales, defaults
				opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs) {
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', data = new DateRangePicker(this, $.extend(opts, ropts)));
				} else {
					$this.data('datepicker', data = new Datepicker(this, opts));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function') {
				internal_return = data[option].apply(data, args);
			}
		});

		if (internal_return === undefined || internal_return instanceof Datepicker || internal_return instanceof DateRangePicker) return this;

		if (this.length > 1) throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');else return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 2,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		container: 'body',
		immediateUpdates: false,
		title: ''
	};
	var locale_opts = $.fn.datepicker.locale_opts = ['format', 'rtl', 'weekStart'];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		modes: [{
			clsName: 'days',
			navFnc: 'Month',
			navStep: 1
		}, {
			clsName: 'months',
			navFnc: 'FullYear',
			navStep: 1
		}, {
			clsName: 'years',
			navFnc: 'FullYear',
			navStep: 10
		}],
		isLeapYear: function isLeapYear(year) {
			return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
		},
		getDaysInMonth: function getDaysInMonth(year, month) {
			return [31, DPGlobal.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function parseFormat(format) {
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function') return format;
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
			    parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0) {
				throw new Error("Invalid date format.");
			}
			return { separators: separators, parts: parts };
		},
		parseDate: function parseDate(date, format, language) {
			if (!date) return undefined;
			if (date instanceof Date) return date;
			if (typeof format === 'string') format = DPGlobal.parseFormat(format);
			if (format.toValue) return format.toValue(date, format, language);
			var part_re = /([\-+]\d+)([dmwy])/,
			    parts = date.match(/([\-+]\d+)([dmwy])/g),
			    part,
			    dir,
			    i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
				date = new Date();
				for (i = 0; i < parts.length; i++) {
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]) {
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
			    setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
			    setters_map = {
				yyyy: function yyyy(d, v) {
					return d.setUTCFullYear(v);
				},
				yy: function yy(d, v) {
					return d.setUTCFullYear(2000 + v);
				},
				m: function m(d, v) {
					if (isNaN(d)) return d;
					v -= 1;
					while (v < 0) v += 12;
					v %= 12;
					d.setUTCMonth(v);
					while (d.getUTCMonth() !== v) d.setUTCDate(d.getUTCDate() - 1);
					return d;
				},
				d: function d(_d, v) {
					return _d.setUTCDate(v);
				}
			},
			    val,
			    filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length) {
				fparts = $(fparts).filter(function (i, p) {
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part() {
				var m = this.slice(0, parts[i].length),
				    p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length) {
				var cnt;
				for (i = 0, cnt = fparts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)) {
						switch (part) {
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i = 0; i < setters_order.length; i++) {
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])) {
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date)) date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function formatDate(date, format, language) {
			if (!date) return '';
			if (typeof format === 'string') format = DPGlobal.parseFormat(format);
			if (format.toDisplay) return format.toDisplay(date, format, language);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
				if (seps.length) date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>' + '<tr>' + '<th colspan="7" class="datepicker-title"></th>' + '</tr>' + '<tr>' + '<th class="prev">&#171;</th>' + '<th colspan="5" class="datepicker-switch"></th>' + '<th class="next">&#187;</th>' + '</tr>' + '</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>' + '<tr>' + '<th colspan="7" class="today"></th>' + '</tr>' + '<tr>' + '<th colspan="7" class="clear"></th>' + '</tr>' + '</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;

	/* DATEPICKER NO CONFLICT
 * =================== */

	$.fn.datepicker.noConflict = function () {
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
  * =================== */
	$.fn.datepicker.version = '1.5.0';

	/* DATEPICKER DATA-API
 * ================== */

	$(document).on('focus.datepicker.data-api click.datepicker.data-api', '[data-provide="datepicker"]', function (e) {
		var $this = $(this);
		if ($this.data('datepicker')) return;
		e.preventDefault();
		// component click requires us to explicitly show it
		datepickerPlugin.call($this, 'show');
	});
	$(function () {
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});
});

/* ========================================================================
 * Bootstrap (plugin): validator.js v0.9.0
 * ========================================================================
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Cina Saffary.
 * Made by @1000hz in the style of Bootstrap 3 era @fat
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * ======================================================================== */

+(function ($) {
	'use strict';

	// VALIDATOR CLASS DEFINITION
	// ==========================

	var Validator = function Validator(element, options) {
		this.$element = $(element);
		this.options = options;

		options.errors = $.extend({}, Validator.DEFAULTS.errors, options.errors);

		for (var custom in options.custom) {
			if (!options.errors[custom]) throw new Error('Missing default error message for custom validator: ' + custom);
		}

		$.extend(Validator.VALIDATORS, options.custom);

		this.$element.attr('novalidate', true); // disable automatic native validation
		this.toggleSubmit();

		this.$element.on('input.bs.validator change.bs.validator focusout.bs.validator', $.proxy(this.validateInput, this));
		this.$element.on('submit.bs.validator', $.proxy(this.onSubmit, this));

		this.$element.find('[data-match]').each(function () {
			var $this = $(this);
			var target = $this.data('match');

			$(target).on('input.bs.validator', function (e) {
				$this.val() && $this.trigger('input.bs.validator');
			});
		});
	};

	Validator.INPUT_SELECTOR = ':input:not([type="submit"], button):enabled:visible';

	Validator.DEFAULTS = {
		delay: 500,
		html: false,
		disable: true,
		custom: {},
		errors: {
			match: 'Does not match',
			minlength: 'Not long enough'
		},
		feedback: {
			success: 'glyphicon-ok',
			error: 'glyphicon-remove'
		}
	};

	Validator.VALIDATORS = {
		'native': function native($el) {
			var el = $el[0];
			return el.checkValidity ? el.checkValidity() : true;
		},
		'match': function match($el) {
			var target = $el.data('match');
			return !$el.val() || $el.val() === $(target).val();
		},
		'minlength': function minlength($el) {
			var minlength = $el.data('minlength');
			return !$el.val() || $el.val().length >= minlength;
		}
	};

	Validator.prototype.validateInput = function (e) {
		var $el = $(e.target);
		var prevErrors = $el.data('bs.validator.errors');
		var errors;

		if ($el.is('[type="radio"]')) $el = this.$element.find('input[name="' + $el.attr('name') + '"]');

		this.$element.trigger(e = $.Event('validate.bs.validator', { relatedTarget: $el[0] }));

		if (e.isDefaultPrevented()) return;

		var self = this;

		this.runValidators($el).done(function (errors) {
			$el.data('bs.validator.errors', errors);

			errors.length ? self.showErrors($el) : self.clearErrors($el);

			if (!prevErrors || errors.toString() !== prevErrors.toString()) {
				e = errors.length ? $.Event('invalid.bs.validator', { relatedTarget: $el[0], detail: errors }) : $.Event('valid.bs.validator', { relatedTarget: $el[0], detail: prevErrors });

				self.$element.trigger(e);
			}

			self.toggleSubmit();

			self.$element.trigger($.Event('validated.bs.validator', { relatedTarget: $el[0] }));
		});
	};

	Validator.prototype.runValidators = function ($el) {
		var errors = [];
		var deferred = $.Deferred();
		var options = this.options;

		$el.data('bs.validator.deferred') && $el.data('bs.validator.deferred').reject();
		$el.data('bs.validator.deferred', deferred);

		function getErrorMessage(key) {
			return $el.data(key + '-error') || $el.data('error') || key == 'native' && $el[0].validationMessage || options.errors[key];
		}

		$.each(Validator.VALIDATORS, $.proxy(function (key, validator) {
			if (($el.data(key) || key == 'native') && !validator.call(this, $el)) {
				var error = getErrorMessage(key);
				! ~errors.indexOf(error) && errors.push(error);
			}
		}, this));

		if (!errors.length && $el.val() && $el.data('remote')) {
			this.defer($el, function () {
				var data = {};
				data[$el.attr('name')] = $el.val();
				$.get($el.data('remote'), data).fail(function (jqXHR, textStatus, error) {
					errors.push(getErrorMessage('remote') || error);
				}).always(function () {
					deferred.resolve(errors);
				});
			});
		} else deferred.resolve(errors);

		return deferred.promise();
	};

	Validator.prototype.validate = function () {
		var delay = this.options.delay;

		this.options.delay = 0;
		this.$element.find(Validator.INPUT_SELECTOR).trigger('input.bs.validator');
		this.options.delay = delay;

		return this;
	};

	Validator.prototype.showErrors = function ($el) {
		var method = this.options.html ? 'html' : 'text';

		this.defer($el, function () {
			var $group = $el.closest('.form-group');
			var $block = $group.find('.help-block.with-errors');
			var $feedback = $group.find('.form-control-feedback');
			var errors = $el.data('bs.validator.errors');

			if (!errors.length) return;

			errors = $('<ul/>').addClass('list-unstyled').append($.map(errors, function (error) {
				return $('<li/>')[method](error);
			}));

			$block.data('bs.validator.originalContent') === undefined && $block.data('bs.validator.originalContent', $block.html());
			$block.empty().append(errors);
			$group.addClass('has-error');

			$feedback.length && $feedback.removeClass(this.options.feedback.success) && $feedback.addClass(this.options.feedback.error) && $group.removeClass('has-success');
		});
	};

	Validator.prototype.clearErrors = function ($el) {
		var $group = $el.closest('.form-group');
		var $block = $group.find('.help-block.with-errors');
		var $feedback = $group.find('.form-control-feedback');

		$block.html($block.data('bs.validator.originalContent'));
		$group.removeClass('has-error');

		$feedback.length && $feedback.removeClass(this.options.feedback.error) && $feedback.addClass(this.options.feedback.success) && $group.addClass('has-success');
	};

	Validator.prototype.hasErrors = function () {
		function fieldErrors() {
			return !!($(this).data('bs.validator.errors') || []).length;
		}

		return !!this.$element.find(Validator.INPUT_SELECTOR).filter(fieldErrors).length;
	};

	Validator.prototype.isIncomplete = function () {
		function fieldIncomplete() {
			return this.type === 'checkbox' ? !this.checked : this.type === 'radio' ? !$('[name="' + this.name + '"]:checked').length : $.trim(this.value) === '';
		}

		return !!this.$element.find(Validator.INPUT_SELECTOR).filter('[required]').filter(fieldIncomplete).length;
	};

	Validator.prototype.onSubmit = function (e) {
		this.validate();
		if (this.isIncomplete() || this.hasErrors()) e.preventDefault();
	};

	Validator.prototype.toggleSubmit = function () {
		if (!this.options.disable) return;

		var $btn = $('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr('id') + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));

		$btn.toggleClass('disabled', this.isIncomplete() || this.hasErrors());
	};

	Validator.prototype.defer = function ($el, callback) {
		callback = $.proxy(callback, this);
		if (!this.options.delay) return callback();
		window.clearTimeout($el.data('bs.validator.timeout'));
		$el.data('bs.validator.timeout', window.setTimeout(callback, this.options.delay));
	};

	Validator.prototype.destroy = function () {
		this.$element.removeAttr('novalidate').removeData('bs.validator').off('.bs.validator');

		this.$element.find(Validator.INPUT_SELECTOR).off('.bs.validator').removeData(['bs.validator.errors', 'bs.validator.deferred']).each(function () {
			var $this = $(this);
			var timeout = $this.data('bs.validator.timeout');
			window.clearTimeout(timeout) && $this.removeData('bs.validator.timeout');
		});

		this.$element.find('.help-block.with-errors').each(function () {
			var $this = $(this);
			var originalContent = $this.data('bs.validator.originalContent');

			$this.removeData('bs.validator.originalContent').html(originalContent);
		});

		this.$element.find('input[type="submit"], button[type="submit"]').removeClass('disabled');

		this.$element.find('.has-error').removeClass('has-error');

		return this;
	};

	// VALIDATOR PLUGIN DEFINITION
	// ===========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this);
			var options = $.extend({}, Validator.DEFAULTS, $this.data(), typeof option == 'object' && option);
			var data = $this.data('bs.validator');

			if (!data && option == 'destroy') return;
			if (!data) $this.data('bs.validator', data = new Validator(this, options));
			if (typeof option == 'string') data[option]();
		});
	}

	var old = $.fn.validator;

	$.fn.validator = Plugin;
	$.fn.validator.Constructor = Validator;

	// VALIDATOR NO CONFLICT
	// =====================

	$.fn.validator.noConflict = function () {
		$.fn.validator = old;
		return this;
	};

	// VALIDATOR DATA-API
	// ==================

	$(window).on('load', function () {
		$('form[data-toggle="validator"]').each(function () {
			var $form = $(this);
			Plugin.call($form, $form.data());
		});
	});
})(jQuery);

// angular.module('app', ['angularUtils.directives.dirPagination']);

function iconeEspera(idBotao, classEstatica, ativa) {
	if (ativa == 'ativa') {
		$("#" + idBotao).removeClass(classEstatica);
		$("#" + idBotao).addClass('fa-cog fa-spin');
	} else {
		$("#" + idBotao).removeClass('fa-cog fa-spin');
		$("#" + idBotao).addClass(classEstatica);
	}
}
function fnAppController($scope, $http) {

	$scope.enviaContato = function () {
		if ($scope.formContato.$valid) {
			angular.element("#iconeBtnEnvia").removeClass('fa-send');
			angular.element("#iconeBtnEnvia").addClass('fa-cog fa-spin');

			$http.post('/contato', $scope.contato).success(function (dados) {
				if (dados.estado = 'enviado') {
					$scope.contato = [];
					angular.element("form[name=formContato]").validator('destroy');
					$http.get('/ws/gettoken').success(function (dados) {
						$scope.contato._token = dados.token;
					});
					angular.element("#iconeBtnEnvia").removeClass('fa-cog fa-spin');
					angular.element("#iconeBtnEnvia").addClass('fa-send');
					angular.element("#avisoContatoSucesso").show();
				}
			});
		}
	};
}
fnAppController.$inject = ['$scope', '$http'];
angular.module('app').controller('appController', fnAppController);
//# sourceMappingURL=all.js.map
