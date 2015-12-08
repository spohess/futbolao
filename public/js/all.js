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
 AngularJS v1.4.8
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (S, X, u) {
	'use strict';function G(a) {
		return function () {
			var b = arguments[0],
			    d;d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.4.8/" + (a ? a + "/" : "") + b;for (b = 1; b < arguments.length; b++) {
				d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";var c = encodeURIComponent,
				    e;e = arguments[b];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;d += c(e);
			}return Error(d);
		};
	}function za(a) {
		if (null == a || Xa(a)) return !1;if (I(a) || E(a) || B && a instanceof B) return !0;
		var b = "length" in Object(a) && a.length;return Q(b) && (0 <= b && b - 1 in a || "function" == typeof a.item);
	}function n(a, b, d) {
		var c, e;if (a) if (z(a)) for (c in a) "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);else if (I(a) || za(a)) {
			var f = "object" !== typeof a;c = 0;for (e = a.length; c < e; c++) (f || c in a) && b.call(d, a[c], c, a);
		} else if (a.forEach && a.forEach !== n) a.forEach(b, d, a);else if (nc(a)) for (c in a) b.call(d, a[c], c, a);else if ("function" === typeof a.hasOwnProperty) for (c in a) a.hasOwnProperty(c) && b.call(d, a[c], c, a);else for (c in a) qa.call(a, c) && b.call(d, a[c], c, a);return a;
	}function oc(a, b, d) {
		for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) b.call(d, a[c[e]], c[e]);return c;
	}function pc(a) {
		return function (b, d) {
			a(d, b);
		};
	}function Td() {
		return ++nb;
	}function Mb(a, b, d) {
		for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
			var g = b[e];if (H(g) || z(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
				var m = h[k],
				    r = g[m];d && H(r) ? da(r) ? a[m] = new Date(r.valueOf()) : Ma(r) ? a[m] = new RegExp(r) : r.nodeName ? a[m] = r.cloneNode(!0) : Nb(r) ? a[m] = r.clone() : (H(a[m]) || (a[m] = I(r) ? [] : {}), Mb(a[m], [r], !0)) : a[m] = r;
			}
		}c ? a.$$hashKey = c : delete a.$$hashKey;return a;
	}function M(a) {
		return Mb(a, ra.call(arguments, 1), !1);
	}function Ud(a) {
		return Mb(a, ra.call(arguments, 1), !0);
	}function ea(a) {
		return parseInt(a, 10);
	}function Ob(a, b) {
		return M(Object.create(a), b);
	}function x() {}function Ya(a) {
		return a;
	}function na(a) {
		return function () {
			return a;
		};
	}function qc(a) {
		return z(a.toString) && a.toString !== sa;
	}function q(a) {
		return "undefined" === typeof a;
	}function y(a) {
		return "undefined" !== typeof a;
	}function H(a) {
		return null !== a && "object" === typeof a;
	}function nc(a) {
		return null !== a && "object" === typeof a && !rc(a);
	}function E(a) {
		return "string" === typeof a;
	}function Q(a) {
		return "number" === typeof a;
	}function da(a) {
		return "[object Date]" === sa.call(a);
	}function z(a) {
		return "function" === typeof a;
	}function Ma(a) {
		return "[object RegExp]" === sa.call(a);
	}function Xa(a) {
		return a && a.window === a;
	}function Za(a) {
		return a && a.$evalAsync && a.$watch;
	}function $a(a) {
		return "boolean" === typeof a;
	}function sc(a) {
		return a && Q(a.length) && Vd.test(sa.call(a));
	}function Nb(a) {
		return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
	}function Wd(a) {
		var b = {};a = a.split(",");var d;for (d = 0; d < a.length; d++) b[a[d]] = !0;return b;
	}function ta(a) {
		return F(a.nodeName || a[0] && a[0].nodeName);
	}function ab(a, b) {
		var d = a.indexOf(b);0 <= d && a.splice(d, 1);return d;
	}function bb(a, b) {
		function d(a, b) {
			var d = b.$$hashKey,
			    e;if (I(a)) {
				e = 0;for (var f = a.length; e < f; e++) b.push(c(a[e]));
			} else if (nc(a)) for (e in a) b[e] = c(a[e]);else if (a && "function" === typeof a.hasOwnProperty) for (e in a) a.hasOwnProperty(e) && (b[e] = c(a[e]));else for (e in a) qa.call(a, e) && (b[e] = c(a[e]));d ? b.$$hashKey = d : delete b.$$hashKey;return b;
		}function c(a) {
			if (!H(a)) return a;var b = e.indexOf(a);if (-1 !== b) return f[b];if (Xa(a) || Za(a)) throw Aa("cpws");var b = !1,
			    c;I(a) ? (c = [], b = !0) : sc(a) ? c = new a.constructor(a) : da(a) ? c = new Date(a.getTime()) : Ma(a) ? (c = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), c.lastIndex = a.lastIndex) : z(a.cloneNode) ? c = a.cloneNode(!0) : (c = Object.create(rc(a)), b = !0);e.push(a);f.push(c);return b ? d(a, c) : c;
		}var e = [],
		    f = [];if (b) {
			if (sc(b)) throw Aa("cpta");
			if (a === b) throw Aa("cpi");I(b) ? b.length = 0 : n(b, function (a, c) {
				"$$hashKey" !== c && delete b[c];
			});e.push(a);f.push(b);return d(a, b);
		}return c(a);
	}function ia(a, b) {
		if (I(a)) {
			b = b || [];for (var d = 0, c = a.length; d < c; d++) b[d] = a[d];
		} else if (H(a)) for (d in (b = b || {}, a)) if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];return b || a;
	}function ma(_x, _x2) {
		var _again = true;

		_function: while (_again) {
			var a = _x,
			    b = _x2;
			_again = false;
			if (a === b) return !0;if (null === a || null === b) return !1;if (a !== a && b !== b) return !0;var d = typeof a,
			    c;if (d == typeof b && "object" == d) if (I(a)) {
				if (!I(b)) return !1;if ((d = a.length) == b.length) {
					for (c = 0; c < d; c++) if (!ma(a[c], b[c])) return !1;return !0;
				}
			} else {
				if (da(a)) {
					if (da(b)) {
						_x = a.getTime();
						_x2 = b.getTime();
						_again = true;
						d = c = undefined;
						continue _function;
					} else {
						return !1;
					}
				}if (Ma(a)) return Ma(b) ? a.toString() == b.toString() : !1;if (Za(a) || Za(b) || Xa(a) || Xa(b) || I(b) || da(b) || Ma(b)) return !1;d = $();for (c in a) if ("$" !== c.charAt(0) && !z(a[c])) {
					if (!ma(a[c], b[c])) return !1;d[c] = !0;
				}for (c in b) if (!(c in d) && "$" !== c.charAt(0) && y(b[c]) && !z(b[c])) return !1;return !0;
			}return !1;
		}
	}function cb(a, b, d) {
		return a.concat(ra.call(b, d));
	}function tc(a, b) {
		var d = 2 < arguments.length ? ra.call(arguments, 2) : [];return !z(b) || b instanceof RegExp ? b : d.length ? function () {
			return arguments.length ? b.apply(a, cb(d, arguments, 0)) : b.apply(a, d);
		} : function () {
			return arguments.length ? b.apply(a, arguments) : b.call(a);
		};
	}function Xd(a, b) {
		var d = b;"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = u : Xa(b) ? d = "$WINDOW" : b && X === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");return d;
	}function db(a, b) {
		if ("undefined" === typeof a) return u;Q(b) || (b = b ? 2 : null);return JSON.stringify(a, Xd, b);
	}function uc(a) {
		return E(a) ? JSON.parse(a) : a;
	}function vc(a, b) {
		var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;return isNaN(d) ? b : d;
	}function Pb(a, b, d) {
		d = d ? -1 : 1;var c = vc(b, a.getTimezoneOffset());b = a;a = d * (c - a.getTimezoneOffset());b = new Date(b.getTime());b.setMinutes(b.getMinutes() + a);return b;
	}function ua(a) {
		a = B(a).clone();try {
			a.empty();
		} catch (b) {}var d = B("<div>").append(a).html();try {
			return a[0].nodeType === Na ? F(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
				return "<" + F(b);
			});
		} catch (c) {
			return F(d);
		}
	}function wc(a) {
		try {
			return decodeURIComponent(a);
		} catch (b) {}
	}
	function xc(a) {
		var b = {};n((a || "").split("&"), function (a) {
			var c, e, f;a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = wc(e), y(e) && (f = y(f) ? wc(f) : !0, qa.call(b, e) ? I(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
		});return b;
	}function Qb(a) {
		var b = [];n(a, function (a, c) {
			I(a) ? n(a, function (a) {
				b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)));
			}) : b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)));
		});return b.length ? b.join("&") : "";
	}function ob(a) {
		return ja(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
	}function ja(a, b) {
		return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
	}function Yd(a, b) {
		var d,
		    c,
		    e = Oa.length;for (c = 0; c < e; ++c) if ((d = Oa[c] + b, E(d = a.getAttribute(d)))) return d;return null;
	}function Zd(a, b) {
		var d,
		    c,
		    e = {};n(Oa, function (b) {
			b += "app";!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
		});n(Oa, function (b) {
			b += "app";var e;!d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
		});d && (e.strictDi = null !== Yd(d, "strict-di"), b(d, c ? [c] : [], e));
	}function yc(a, b, d) {
		H(d) || (d = {});d = M({ strictDi: !1 }, d);var c = function c() {
			a = B(a);if (a.injector()) {
				var c = a[0] === X ? "document" : ua(a);throw Aa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
			}b = b || [];b.unshift(["$provide", function (b) {
				b.value("$rootElement", a);
			}]);d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
				a.debugInfoEnabled(!0);
			}]);b.unshift("ng");c = eb(b, d.strictDi);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
				a.$apply(function () {
					b.data("$injector", d);c(b)(a);
				});
			}]);return c;
		},
		    e = /^NG_ENABLE_DEBUG_INFO!/,
		    f = /^NG_DEFER_BOOTSTRAP!/;S && e.test(S.name) && (d.debugInfoEnabled = !0, S.name = S.name.replace(e, ""));if (S && !f.test(S.name)) return c();S.name = S.name.replace(f, "");fa.resumeBootstrap = function (a) {
			n(a, function (a) {
				b.push(a);
			});return c();
		};z(fa.resumeDeferredBootstrap) && fa.resumeDeferredBootstrap();
	}function $d() {
		S.name = "NG_ENABLE_DEBUG_INFO!" + S.name;S.location.reload();
	}
	function ae(a) {
		a = fa.element(a).injector();if (!a) throw Aa("test");return a.get("$$testability");
	}function zc(a, b) {
		b = b || "_";return a.replace(be, function (a, c) {
			return (c ? b : "") + a.toLowerCase();
		});
	}function ce() {
		var a;if (!Ac) {
			var b = pb();(oa = q(b) ? S.jQuery : b ? S[b] : u) && oa.fn.on ? (B = oa, M(oa.fn, { scope: Pa.scope, isolateScope: Pa.isolateScope, controller: Pa.controller, injector: Pa.injector, inheritedData: Pa.inheritedData }), a = oa.cleanData, oa.cleanData = function (b) {
				var c;if (Rb) Rb = !1;else for (var e = 0, f; null != (f = b[e]); e++) (c = oa._data(f, "events")) && c.$destroy && oa(f).triggerHandler("$destroy");a(b);
			}) : B = N;fa.element = B;Ac = !0;
		}
	}function qb(a, b, d) {
		if (!a) throw Aa("areq", b || "?", d || "required");return a;
	}function Qa(a, b, d) {
		d && I(a) && (a = a[a.length - 1]);qb(z(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));return a;
	}function Ra(a, b) {
		if ("hasOwnProperty" === a) throw Aa("badname", b);
	}function Bc(a, b, d) {
		if (!b) return a;b = b.split(".");for (var c, e = a, f = b.length, g = 0; g < f; g++) c = b[g], a && (a = (e = a)[c]);return !d && z(a) ? tc(e, a) : a;
	}function rb(a) {
		for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) if (c || a[e] !== b) c || (c = B(ra.call(a, 0, e))), c.push(b);return c || a;
	}function $() {
		return Object.create(null);
	}function de(a) {
		function b(a, b, c) {
			return a[b] || (a[b] = c());
		}var d = G("$injector"),
		    c = G("ng");a = b(a, "angular", Object);a.$$minErr = a.$$minErr || G;return b(a, "module", function () {
			var a = {};return function (f, g, h) {
				if ("hasOwnProperty" === f) throw c("badname", "module");g && a.hasOwnProperty(f) && (a[f] = null);return b(a, f, function () {
					function a(b, d, e, f) {
						f || (f = c);return function () {
							f[e || "push"]([b, d, arguments]);return v;
						};
					}function b(a, d) {
						return function (b, e) {
							e && z(e) && (e.$$moduleName = f);c.push([a, d, arguments]);return v;
						};
					}if (!g) throw d("nomod", f);var c = [],
					    e = [],
					    t = [],
					    A = a("$injector", "invoke", "push", e),
					    v = { _invokeQueue: c, _configBlocks: e, _runBlocks: t, requires: g, name: f, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), config: A, run: function run(a) {
							t.push(a);return this;
						} };h && A(h);return v;
				});
			};
		});
	}function ee(a) {
		M(a, { bootstrap: yc, copy: bb, extend: M, merge: Ud, equals: ma, element: B, forEach: n, injector: eb, noop: x, bind: tc, toJson: db, fromJson: uc, identity: Ya, isUndefined: q, isDefined: y, isString: E, isFunction: z, isObject: H, isNumber: Q, isElement: Nb, isArray: I,
			version: fe, isDate: da, lowercase: F, uppercase: sb, callbacks: { counter: 0 }, getTestability: ae, $$minErr: G, $$csp: Ba, reloadWithDebugInfo: $d });Sb = de(S);Sb("ng", ["ngLocale"], ["$provide", function (a) {
			a.provider({ $$sanitizeUri: ge });a.provider("$compile", Cc).directive({ a: he, input: Dc, textarea: Dc, form: ie, script: je, select: ke, style: le, option: me, ngBind: ne, ngBindHtml: oe, ngBindTemplate: pe, ngClass: qe, ngClassEven: re, ngClassOdd: se, ngCloak: te, ngController: ue, ngForm: ve, ngHide: we, ngIf: xe, ngInclude: ye, ngInit: ze, ngNonBindable: Ae,
				ngPluralize: Be, ngRepeat: Ce, ngShow: De, ngStyle: Ee, ngSwitch: Fe, ngSwitchWhen: Ge, ngSwitchDefault: He, ngOptions: Ie, ngTransclude: Je, ngModel: Ke, ngList: Le, ngChange: Me, pattern: Ec, ngPattern: Ec, required: Fc, ngRequired: Fc, minlength: Gc, ngMinlength: Gc, maxlength: Hc, ngMaxlength: Hc, ngValue: Ne, ngModelOptions: Oe }).directive({ ngInclude: Pe }).directive(tb).directive(Ic);a.provider({ $anchorScroll: Qe, $animate: Re, $animateCss: Se, $$animateQueue: Te, $$AnimateRunner: Ue, $browser: Ve, $cacheFactory: We, $controller: Xe, $document: Ye, $exceptionHandler: Ze,
				$filter: Jc, $$forceReflow: $e, $interpolate: af, $interval: bf, $http: cf, $httpParamSerializer: df, $httpParamSerializerJQLike: ef, $httpBackend: ff, $xhrFactory: gf, $location: hf, $log: jf, $parse: kf, $rootScope: lf, $q: mf, $$q: nf, $sce: of, $sceDelegate: pf, $sniffer: qf, $templateCache: rf, $templateRequest: sf, $$testability: tf, $timeout: uf, $window: vf, $$rAF: wf, $$jqLite: xf, $$HashMap: yf, $$cookieReader: zf });
		}]);
	}function fb(a) {
		return a.replace(Af, function (a, d, c, e) {
			return e ? c.toUpperCase() : c;
		}).replace(Bf, "Moz$1");
	}function Kc(a) {
		a = a.nodeType;
		return 1 === a || !a || 9 === a;
	}function Lc(a, b) {
		var d,
		    c,
		    e = b.createDocumentFragment(),
		    f = [];if (Tb.test(a)) {
			d = d || e.appendChild(b.createElement("div"));c = (Cf.exec(a) || ["", ""])[1].toLowerCase();c = ka[c] || ka._default;d.innerHTML = c[1] + a.replace(Df, "<$1></$2>") + c[2];for (c = c[0]; c--;) d = d.lastChild;f = cb(f, d.childNodes);d = e.firstChild;d.textContent = "";
		} else f.push(b.createTextNode(a));e.textContent = "";e.innerHTML = "";n(f, function (a) {
			e.appendChild(a);
		});return e;
	}function N(a) {
		if (a instanceof N) return a;var b;E(a) && (a = U(a), b = !0);if (!(this instanceof N)) {
			if (b && "<" != a.charAt(0)) throw Ub("nosel");return new N(a);
		}if (b) {
			b = X;var d;a = (d = Ef.exec(a)) ? [b.createElement(d[1])] : (d = Lc(a, b)) ? d.childNodes : [];
		}Mc(this, a);
	}function Vb(a) {
		return a.cloneNode(!0);
	}function ub(a, b) {
		b || vb(a);if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) vb(d[c]);
	}function Nc(a, b, d, c) {
		if (y(c)) throw Ub("offargs");var e = (c = wb(a)) && c.events,
		    f = c && c.handle;if (f) if (b) {
			var g = function g(b) {
				var c = e[b];y(d) && ab(c || [], d);y(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b]);
			};n(b.split(" "), function (a) {
				g(a);xb[a] && g(xb[a]);
			});
		} else for (b in e) "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b];
	}function vb(a, b) {
		var d = a.ng339,
		    c = d && gb[d];c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Nc(a)), delete gb[d], a.ng339 = u));
	}function wb(a, b) {
		var d = a.ng339,
		    d = d && gb[d];b && !d && (a.ng339 = d = ++Ff, d = gb[d] = { events: {}, data: {}, handle: u });return d;
	}function Wb(a, b, d) {
		if (Kc(a)) {
			var c = y(d),
			    e = !c && b && !H(b),
			    f = !b;a = (a = wb(a, !e)) && a.data;if (c) a[b] = d;else {
				if (f) return a;if (e) return a && a[b];M(a, b);
			}
		}
	}function yb(a, b) {
		return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
	}function zb(a, b) {
		b && a.setAttribute && n(b.split(" "), function (b) {
			a.setAttribute("class", U((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(b) + " ", " ")));
		});
	}function Ab(a, b) {
		if (b && a.setAttribute) {
			var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");n(b.split(" "), function (a) {
				a = U(a);-1 === d.indexOf(" " + a + " ") && (d += a + " ");
			});a.setAttribute("class", U(d));
		}
	}function Mc(a, b) {
		if (b) if (b.nodeType) a[a.length++] = b;else {
			var d = b.length;if ("number" === typeof d && b.window !== b) {
				if (d) for (var c = 0; c < d; c++) a[a.length++] = b[c];
			} else a[a.length++] = b;
		}
	}function Oc(a, b) {
		return Bb(a, "$" + (b || "ngController") + "Controller");
	}function Bb(a, b, d) {
		9 == a.nodeType && (a = a.documentElement);for (b = I(b) ? b : [b]; a;) {
			for (var c = 0, e = b.length; c < e; c++) if (y(d = B.data(a, b[c]))) return d;a = a.parentNode || 11 === a.nodeType && a.host;
		}
	}function Pc(a) {
		for (ub(a, !0); a.firstChild;) a.removeChild(a.firstChild);
	}function Xb(a, b) {
		b || ub(a);var d = a.parentNode;d && d.removeChild(a);
	}function Gf(a, b) {
		b = b || S;if ("complete" === b.document.readyState) b.setTimeout(a);else B(b).on("load", a);
	}function Qc(a, b) {
		var d = Cb[b.toLowerCase()];return d && Rc[ta(a)] && d;
	}function Hf(a, b) {
		var d = function d(c, _d) {
			c.isDefaultPrevented = function () {
				return c.defaultPrevented;
			};var f = b[_d || c.type],
			    g = f ? f.length : 0;if (g) {
				if (q(c.immediatePropagationStopped)) {
					var h = c.stopImmediatePropagation;
					c.stopImmediatePropagation = function () {
						c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();h && h.call(c);
					};
				}c.isImmediatePropagationStopped = function () {
					return !0 === c.immediatePropagationStopped;
				};var k = f.specialHandlerWrapper || If;1 < g && (f = ia(f));for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, f[l]);
			}
		};d.elem = a;return d;
	}function If(a, b, d) {
		d.call(a, b);
	}function Jf(a, b, d) {
		var c = b.relatedTarget;c && (c === a || Kf.call(a, c)) || d.call(a, b);
	}function xf() {
		this.$get = function () {
			return M(N, { hasClass: function hasClass(a, b) {
					a.attr && (a = a[0]);return yb(a, b);
				}, addClass: function addClass(a, b) {
					a.attr && (a = a[0]);return Ab(a, b);
				}, removeClass: function removeClass(a, b) {
					a.attr && (a = a[0]);return zb(a, b);
				} });
		};
	}function Ca(a, b) {
		var d = a && a.$$hashKey;if (d) return "function" === typeof d && (d = a.$$hashKey()), d;d = typeof a;return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Td)() : d + ":" + a;
	}function Sa(a, b) {
		if (b) {
			var d = 0;this.nextUid = function () {
				return ++d;
			};
		}n(a, this.put, this);
	}function Lf(a) {
		return (a = a.toString().replace(Sc, "").match(Tc)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
	}function eb(a, b) {
		function d(a) {
			return function (b, c) {
				if (H(b)) n(b, pc(a));else return a(b, c);
			};
		}function c(a, b) {
			Ra(a, "service");if (z(b) || I(b)) b = t.instantiate(b);if (!b.$get) throw Da("pget", a);return r[a + "Provider"] = b;
		}function e(a, b) {
			return function () {
				var c = v.invoke(b, this);if (q(c)) throw Da("undef", a);return c;
			};
		}function f(a, b, d) {
			return c(a, { $get: !1 !== d ? e(a, b) : b });
		}function g(a) {
			qb(q(a) || I(a), "modulesToLoad", "not an array");var b = [],
			    c;n(a, function (a) {
				function d(a) {
					var b, c;b = 0;for (c = a.length; b < c; b++) {
						var e = a[b],
						    f = t.get(e[0]);f[e[1]].apply(f, e[2]);
					}
				}if (!m.get(a)) {
					m.put(a, !0);try {
						E(a) ? (c = Sb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : z(a) ? b.push(t.invoke(a)) : I(a) ? b.push(t.invoke(a)) : Qa(a, "module");
					} catch (e) {
						throw (I(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Da("modulerr", a, e.stack || e.message || e));
					}
				}
			});return b;
		}function h(a, c) {
			function d(b, e) {
				if (a.hasOwnProperty(b)) {
					if (a[b] === k) throw Da("cdep", b + " <- " + l.join(" <- "));return a[b];
				}try {
					return l.unshift(b), a[b] = k, a[b] = c(b, e);
				} catch (f) {
					throw (a[b] === k && delete a[b], f);
				} finally {
					l.shift();
				}
			}function e(a, c, f, g) {
				"string" === typeof f && (g = f, f = null);var h = [],
				    k = eb.$$annotate(a, b, g),
				    l,
				    m,
				    t;m = 0;for (l = k.length; m < l; m++) {
					t = k[m];if ("string" !== typeof t) throw Da("itkn", t);h.push(f && f.hasOwnProperty(t) ? f[t] : d(t, g));
				}I(a) && (a = a[l]);return a.apply(c, h);
			}return { invoke: e, instantiate: function instantiate(a, b, c) {
					var d = Object.create((I(a) ? a[a.length - 1] : a).prototype || null);a = e(a, d, b, c);return H(a) || z(a) ? a : d;
				}, get: d, annotate: eb.$$annotate, has: function has(b) {
					return r.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
				} };
		}b = !0 === b;var k = {},
		    l = [],
		    m = new Sa([], !0),
		    r = { $provide: { provider: d(c), factory: d(f), service: d(function (a, b) {
					return f(a, ["$injector", function (a) {
						return a.instantiate(b);
					}]);
				}), value: d(function (a, b) {
					return f(a, na(b), !1);
				}), constant: d(function (a, b) {
					Ra(a, "constant");r[a] = b;A[a] = b;
				}), decorator: function decorator(a, b) {
					var c = t.get(a + "Provider"),
					    d = c.$get;c.$get = function () {
						var a = v.invoke(d, c);return v.invoke(b, null, { $delegate: a });
					};
				} } },
		    t = r.$injector = h(r, function (a, b) {
			fa.isString(b) && l.push(b);throw Da("unpr", l.join(" <- "));
		}),
		    A = {},
		    v = A.$injector = h(A, function (a, b) {
			var c = t.get(a + "Provider", b);return v.invoke(c.$get, c, u, a);
		});n(g(a), function (a) {
			a && v.invoke(a);
		});return v;
	}function Qe() {
		var a = !0;this.disableAutoScrolling = function () {
			a = !1;
		};this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
			function e(a) {
				var b = null;Array.prototype.some.call(a, function (a) {
					if ("a" === ta(a)) return b = a, !0;
				});return b;
			}function f(a) {
				if (a) {
					a.scrollIntoView();var c;c = g.yOffset;z(c) ? c = c() : Nb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Q(c) || (c = 0);c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
				} else b.scrollTo(0, 0);
			}function g(a) {
				a = E(a) ? a : d.hash();var b;a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
			}var h = b.document;a && c.$watch(function () {
				return d.hash();
			}, function (a, b) {
				a === b && "" === a || Gf(function () {
					c.$evalAsync(g);
				});
			});
			return g;
		}];
	}function hb(a, b) {
		if (!a && !b) return "";if (!a) return b;if (!b) return a;I(a) && (a = a.join(" "));I(b) && (b = b.join(" "));return a + " " + b;
	}function Mf(a) {
		E(a) && (a = a.split(" "));var b = $();n(a, function (a) {
			a.length && (b[a] = !0);
		});return b;
	}function Ea(a) {
		return H(a) ? a : {};
	}function Nf(a, b, d, c) {
		function e(a) {
			try {
				a.apply(null, ra.call(arguments, 1));
			} finally {
				if ((v--, 0 === v)) for (; T.length;) try {
					T.pop()();
				} catch (b) {
					d.error(b);
				}
			}
		}function f() {
			L = null;g();h();
		}function g() {
			a: {
				try {
					p = m.state;break a;
				} catch (a) {}p = void 0;
			}p = q(p) ? null : p;ma(p, J) && (p = J);J = p;
		}function h() {
			if (w !== k.url() || C !== p) w = k.url(), C = p, n(aa, function (a) {
				a(k.url(), p);
			});
		}var k = this,
		    l = a.location,
		    m = a.history,
		    r = a.setTimeout,
		    t = a.clearTimeout,
		    A = {};k.isMock = !1;var v = 0,
		    T = [];k.$$completeOutstandingRequest = e;k.$$incOutstandingRequestCount = function () {
			v++;
		};k.notifyWhenNoOutstandingRequests = function (a) {
			0 === v ? a() : T.push(a);
		};var p,
		    C,
		    w = l.href,
		    ga = b.find("base"),
		    L = null;g();C = p;k.url = function (b, d, e) {
			q(e) && (e = null);l !== a.location && (l = a.location);m !== a.history && (m = a.history);if (b) {
				var f = C === e;if (w === b && (!c.history || f)) return k;var h = w && Fa(w) === Fa(b);w = b;C = e;if (!c.history || h && f) {
					if (!h || L) L = b;d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b;l.href !== b && (L = b);
				} else m[d ? "replaceState" : "pushState"](e, "", b), g(), C = p;return k;
			}return L || l.href.replace(/%27/g, "'");
		};k.state = function () {
			return p;
		};var aa = [],
		    D = !1,
		    J = null;k.onUrlChange = function (b) {
			if (!D) {
				if (c.history) B(a).on("popstate", f);B(a).on("hashchange", f);D = !0;
			}aa.push(b);return b;
		};k.$$applicationDestroyed = function () {
			B(a).off("hashchange popstate", f);
		};k.$$checkUrlChange = h;k.baseHref = function () {
			var a = ga.attr("href");return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
		};k.defer = function (a, b) {
			var c;v++;c = r(function () {
				delete A[c];e(a);
			}, b || 0);A[c] = !0;return c;
		};k.defer.cancel = function (a) {
			return A[a] ? (delete A[a], t(a), e(x), !0) : !1;
		};
	}function Ve() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
			return new Nf(a, c, b, d);
		}];
	}function We() {
		this.$get = function () {
			function a(a, c) {
				function e(a) {
					a != r && (t ? t == a && (t = a.n) : t = a, f(a.n, a.p), f(a, r), r = a, r.n = null);
				}function f(a, b) {
					a != b && (a && (a.p = b), b && (b.n = a));
				}if (a in b) throw G("$cacheFactory")("iid", a);var g = 0,
				    h = M({}, c, { id: a }),
				    k = $(),
				    l = c && c.capacity || Number.MAX_VALUE,
				    m = $(),
				    r = null,
				    t = null;return b[a] = { put: function put(a, b) {
						if (!q(b)) {
							if (l < Number.MAX_VALUE) {
								var c = m[a] || (m[a] = { key: a });e(c);
							}a in k || g++;k[a] = b;g > l && this.remove(t.key);return b;
						}
					}, get: function get(a) {
						if (l < Number.MAX_VALUE) {
							var b = m[a];if (!b) return;e(b);
						}return k[a];
					}, remove: function remove(a) {
						if (l < Number.MAX_VALUE) {
							var b = m[a];if (!b) return;b == r && (r = b.p);b == t && (t = b.n);f(b.n, b.p);delete m[a];
						}a in k && (delete k[a], g--);
					}, removeAll: function removeAll() {
						k = $();g = 0;m = $();r = t = null;
					}, destroy: function destroy() {
						m = h = k = null;delete b[a];
					}, info: function info() {
						return M({}, h, { size: g });
					} };
			}var b = {};a.info = function () {
				var a = {};n(b, function (b, e) {
					a[e] = b.info();
				});return a;
			};a.get = function (a) {
				return b[a];
			};return a;
		};
	}function rf() {
		this.$get = ["$cacheFactory", function (a) {
			return a("templates");
		}];
	}function Cc(a, b) {
		function d(a, b, c) {
			var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
			    e = {};n(a, function (a, f) {
				var g = a.match(d);
				if (!g) throw ha("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };
			});return e;
		}function c(a) {
			var b = a.charAt(0);if (!b || b !== F(b)) throw ha("baddir", a);if (a !== a.trim()) throw ha("baddir", a);
		}var e = {},
		    f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
		    g = /(([\w\-]+)(?:\:([^;]+))?;?)/,
		    h = Wd("ngSrc,ngSrcset,src,srcset"),
		    k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
		    l = /^(on[a-z]+|formaction)$/;this.directive = function t(b, f) {
			Ra(b, "directive");
			E(b) ? (c(b), qb(f, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
				var f = [];n(e[b], function (e, g) {
					try {
						var h = a.invoke(e);z(h) ? h = { compile: na(h) } : !h.compile && h.link && (h.compile = na(h.link));h.priority = h.priority || 0;h.index = g;h.name = h.name || b;h.require = h.require || h.controller && h.name;h.restrict = h.restrict || "EA";var k = h,
						    l = h,
						    m = h.name,
						    t = { isolateScope: null, bindToController: null };H(l.scope) && (!0 === l.bindToController ? (t.bindToController = d(l.scope, m, !0), t.isolateScope = {}) : t.isolateScope = d(l.scope, m, !1));H(l.bindToController) && (t.bindToController = d(l.bindToController, m, !0));if (H(t.bindToController)) {
							var v = l.controller,
							    R = l.controllerAs;if (!v) throw ha("noctrl", m);var V;a: if (R && E(R)) V = R;else {
								if (E(v)) {
									var n = Uc.exec(v);if (n) {
										V = n[3];break a;
									}
								}V = void 0;
							}if (!V) throw ha("noident", m);
						}var s = k.$$bindings = t;H(s.isolateScope) && (h.$$isolateBindings = s.isolateScope);h.$$moduleName = e.$$moduleName;f.push(h);
					} catch (u) {
						c(u);
					}
				});return f;
			}])), e[b].push(f)) : n(b, pc(t));
			return this;
		};this.aHrefSanitizationWhitelist = function (a) {
			return y(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
		};this.imgSrcSanitizationWhitelist = function (a) {
			return y(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
		};var m = !0;this.debugInfoEnabled = function (a) {
			return y(a) ? (m = a, this) : m;
		};this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, d, p, C, w, ga, L, aa, D) {
			function J(a, b) {
				try {
					a.addClass(b);
				} catch (c) {}
			}function K(a, b, c, d, e) {
				a instanceof B || (a = B(a));n(a, function (b, c) {
					b.nodeType == Na && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0]);
				});var f = O(a, b, a, c, d, e);K.$$addScopeClass(a);var g = null;return function (b, c, d) {
					qb(b, "scope");e && e.needsNewScope && (b = b.$parent.$new());d = d || {};var h = d.parentBoundTranscludeFn,
					    k = d.transcludeControllers;d = d.futureParentElement;h && h.$$boundTransclude && (h = h.$$boundTransclude);g || (g = (d = d && d[0]) ? "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");d = "html" !== g ? B(Yb(g, B("<div>").append(a).html())) : c ? Pa.clone.call(a) : a;if (k) for (var l in k) d.data("$" + l + "Controller", k[l].instance);K.$$addScopeInfo(d, b);c && c(d, b);f && f(b, d, d, h);return d;
				};
			}function O(a, b, c, d, e, f) {
				function g(a, c, d, e) {
					var f, k, l, m, t, w, D;if (p) for (D = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], D[f] = c[f];else D = c;m = 0;for (t = h.length; m < t;) k = D[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), K.$$addScopeInfo(B(k), l)) : l = a, w = c.transcludeOnThisElement ? R(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? R(a, b) : null, c(f, l, k, d, w)) : f && f(a, k.childNodes, u, e);
				}for (var h = [], k, l, m, t, p, w = 0; w < a.length; w++) {
					k = new fa();l = V(a[w], [], k, 0 === w ? d : u, e);(f = l.length ? Z(l, a[w], k, b, c, null, [], [], f) : null) && f.scope && K.$$addScopeClass(k.$$element);k = f && f.terminal || !(m = a[w].childNodes) || !m.length ? null : O(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || k) h.push(w, f, k), t = !0, p = p || f;f = null;
				}return t ? g : null;
			}function R(a, b, c) {
				return function (d, e, f, g, h) {
					d || (d = a.$new(!1, h), d.$$transcluded = !0);return b(d, e, { parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g });
				};
			}function V(a, b, c, d, e) {
				var h = c.$attr,
				    k;switch (a.nodeType) {case 1:
						P(b, va(ta(a)), "E", d, e);for (var l, m, t, p = a.attributes, w = 0, D = p && p.length; w < D; w++) {
							var K = !1,
							    A = !1;l = p[w];k = l.name;m = U(l.value);l = va(k);if (t = ka.test(l)) k = k.replace(Vc, "").substr(8).replace(/_(.)/g, function (a, b) {
								return b.toUpperCase();
							});(l = l.match(la)) && G(l[1]) && (K = k, A = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));l = va(k.toLowerCase());h[l] = k;if (t || !c.hasOwnProperty(l)) c[l] = m, Qc(a, l) && (c[l] = !0);W(a, b, m, l, t);P(b, l, "A", d, e, K, A);
						}a = a.className;H(a) && (a = a.animVal);if (E(a) && "" !== a) for (; k = g.exec(a);) l = va(k[2]), P(b, l, "C", d, e) && (c[l] = U(k[3])), a = a.substr(k.index + k[0].length);break;case Na:
						if (11 === Ha) for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Na;) a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);N(b, a.nodeValue);break;case 8:
						try {
							if (k = f.exec(a.nodeValue)) l = va(k[1]), P(b, l, "M", d, e) && (c[l] = U(k[2]));
						} catch (R) {}}b.sort(Ia);return b;
			}function Ta(a, b, c) {
				var d = [],
				    e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
					do {
						if (!a) throw ha("uterdir", b, c);1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
					} while (0 < e);
				} else d.push(a);return B(d);
			}function s(a, b, c) {
				return function (d, e, f, g, h) {
					e = Ta(e[0], b, c);return a(d, e, f, g, h);
				};
			}function Z(a, b, d, e, f, g, h, l, m) {
				function t(a, b, c, d) {
					if (a) {
						c && (a = s(a, c, d));a.require = q.require;a.directiveName = x;if (O === q || q.$$isolateScope) a = ca(a, { isolateScope: !0 });h.push(a);
					}if (b) {
						c && (b = s(b, c, d));b.require = q.require;b.directiveName = x;if (O === q || q.$$isolateScope) b = ca(b, { isolateScope: !0 });l.push(b);
					}
				}function p(a, b, c, d) {
					var e;if (E(b)) {
						var f = b.match(k);b = b.substring(f[0].length);var g = f[1] || f[3],
						    f = "?" === f[2];"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;e || (d = "$" + b + "Controller", e = g ? c.inheritedData(d) : c.data(d));if (!e && !f) throw ha("ctreq", b, a);
					} else if (I(b)) for (e = [], g = 0, f = b.length; g < f; g++) e[g] = p(a, b[g], c, d);return e || null;
				}function w(a, b, c, d, e, f) {
					var g = $(),
					    h;for (h in d) {
						var k = d[h],
						    l = { $scope: k === O || k.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c },
						    m = k.controller;"@" == m && (m = b[k.name]);l = C(m, l, !0, k.controllerAs);g[k.name] = l;aa || a.data("$" + k.name + "Controller", l.instance);
					}return g;
				}function D(a, c, e, f, g) {
					function k(a, b, c) {
						var d;Za(a) || (c = b, b = a, a = u);aa && (d = v);c || (c = aa ? V.parent() : V);return g(a, b, d, c, Ta);
					}var m, t, A, v, C, V, Ga;b === e ? (f = d, V = d.$$element) : (V = B(e), f = new fa(V, d));A = c;O ? t = c.$new(!0) : R && (A = c.$parent);g && (C = k, C.$$boundTransclude = g);T && (v = w(V, f, C, T, t, c));O && (K.$$addScopeInfo(V, t, !0, !(J && (J === O || J === O.$$originalDirective))), K.$$addScopeClass(V, !0), t.$$isolateBindings = O.$$isolateBindings, (Ga = ba(c, f, t, t.$$isolateBindings, O)) && t.$on("$destroy", Ga));for (var n in v) {
						Ga = T[n];var ga = v[n],
						    L = Ga.$$bindings.bindToController;ga.identifier && L && (m = ba(A, f, ga.instance, L, Ga));var q = ga();q !== ga.instance && (ga.instance = q, V.data("$" + Ga.name + "Controller", q), m && m(), m = ba(A, f, ga.instance, L, Ga));
					}F = 0;for (M = h.length; F < M; F++) m = h[F], ea(m, m.isolateScope ? t : c, V, f, m.require && p(m.directiveName, m.require, V, v), C);var Ta = c;O && (O.template || null === O.templateUrl) && (Ta = t);a && a(Ta, e.childNodes, u, g);for (F = l.length - 1; 0 <= F; F--) m = l[F], ea(m, m.isolateScope ? t : c, V, f, m.require && p(m.directiveName, m.require, V, v), C);
				}m = m || {};for (var A = -Number.MAX_VALUE, R = m.newScopeDirective, T = m.controllerDirectives, O = m.newIsolateScopeDirective, J = m.templateDirective, n = m.nonTlbTranscludeDirective, ga = !1, L = !1, aa = m.hasElementTranscludeDirective, Z = d.$$element = B(b), q, x, P, Ia = e, G, F = 0, M = a.length; F < M; F++) {
					q = a[F];var N = q.$$start,
					    Q = q.$$end;N && (Z = Ta(b, N, Q));P = u;if (A > q.priority) break;if (P = q.scope) q.templateUrl || (H(P) ? (Ua("new/isolated scope", O || R, q, Z), O = q) : Ua("new/isolated scope", O, q, Z)), R = R || q;x = q.name;!q.templateUrl && q.controller && (P = q.controller, T = T || $(), Ua("'" + x + "' controller", T[x], q, Z), T[x] = q);if (P = q.transclude) ga = !0, q.$$tlb || (Ua("transclusion", n, q, Z), n = q), "element" == P ? (aa = !0, A = q.priority, P = Z, Z = d.$$element = B(X.createComment(" " + x + ": " + d[x] + " ")), b = Z[0], Y(f, ra.call(P, 0), b), Ia = K(P, e, A, g && g.name, { nonTlbTranscludeDirective: n })) : (P = B(Vb(b)).contents(), Z.empty(), Ia = K(P, e, u, u, { needsNewScope: q.$$isolateScope || q.$$newScope }));if (q.template) if ((L = !0, Ua("template", J, q, Z), J = q, P = z(q.template) ? q.template(Z, d) : q.template, P = ja(P), q.replace)) {
						g = q;P = Tb.test(P) ? Xc(Yb(q.templateNamespace, U(P))) : [];b = P[0];if (1 != P.length || 1 !== b.nodeType) throw ha("tplrt", x, "");Y(f, Z, b);P = { $attr: {} };var Wc = V(b, [], P),
						    W = a.splice(F + 1, a.length - (F + 1));(O || R) && y(Wc, O, R);a = a.concat(Wc).concat(W);S(d, P);M = a.length;
					} else Z.html(P);
					if (q.templateUrl) L = !0, Ua("template", J, q, Z), J = q, q.replace && (g = q), D = Of(a.splice(F, a.length - F), Z, d, f, ga && Ia, h, l, { controllerDirectives: T, newScopeDirective: R !== q && R, newIsolateScopeDirective: O, templateDirective: J, nonTlbTranscludeDirective: n }), M = a.length;else if (q.compile) try {
						G = q.compile(Z, d, Ia), z(G) ? t(null, G, N, Q) : G && t(G.pre, G.post, N, Q);
					} catch (da) {
						c(da, ua(Z));
					}q.terminal && (D.terminal = !0, A = Math.max(A, q.priority));
				}D.scope = R && !0 === R.scope;D.transcludeOnThisElement = ga;D.templateOnThisElement = L;D.transclude = Ia;
				m.hasElementTranscludeDirective = aa;return D;
			}function y(a, b, c) {
				for (var d = 0, e = a.length; d < e; d++) a[d] = Ob(a[d], { $$isolateScope: b, $$newScope: c });
			}function P(b, d, f, g, h, k, l) {
				if (d === h) return null;h = null;if (e.hasOwnProperty(d)) {
					var m;d = a.get(d + "Directive");for (var p = 0, w = d.length; p < w; p++) try {
						m = d[p], (q(g) || g > m.priority) && -1 != m.restrict.indexOf(f) && (k && (m = Ob(m, { $$start: k, $$end: l })), b.push(m), h = m);
					} catch (D) {
						c(D);
					}
				}return h;
			}function G(b) {
				if (e.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++) if ((b = c[d], b.multiElement)) return !0;return !1;
			}function S(a, b) {
				var c = b.$attr,
				    d = a.$attr,
				    e = a.$$element;n(a, function (d, e) {
					"$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
				});n(b, function (b, f) {
					"class" == f ? (J(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
				});
			}function Of(a, b, c, e, f, g, h, k) {
				var l = [],
				    m,
				    t,
				    p = b[0],
				    w = a.shift(),
				    D = Ob(w, { templateUrl: null,
					transclude: null, replace: null, $$originalDirective: w }),
				    A = z(w.templateUrl) ? w.templateUrl(b, c) : w.templateUrl,
				    K = w.templateNamespace;b.empty();d(A).then(function (d) {
					var T, v;d = ja(d);if (w.replace) {
						d = Tb.test(d) ? Xc(Yb(K, U(d))) : [];T = d[0];if (1 != d.length || 1 !== T.nodeType) throw ha("tplrt", w.name, A);d = { $attr: {} };Y(e, b, T);var C = V(T, [], d);H(w.scope) && y(C, !0);a = C.concat(a);S(c, d);
					} else T = p, b.html(d);a.unshift(D);m = Z(a, T, c, f, b, w, g, h, k);n(e, function (a, c) {
						a == T && (e[c] = b[0]);
					});for (t = O(b[0].childNodes, f); l.length;) {
						d = l.shift();
						v = l.shift();var ga = l.shift(),
						    L = l.shift(),
						    C = b[0];if (!d.$$destroyed) {
							if (v !== p) {
								var q = v.className;k.hasElementTranscludeDirective && w.replace || (C = Vb(T));Y(ga, B(v), C);J(B(C), q);
							}v = m.transcludeOnThisElement ? R(d, m.transclude, L) : L;m(t, d, C, e, v);
						}
					}l = null;
				});return function (a, b, c, d, e) {
					a = e;b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = R(b, m.transclude, e)), m(t, b, c, d, a)));
				};
			}function Ia(a, b) {
				var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
			}function Ua(a, b, c, d) {
				function e(a) {
					return a ? " (module: " + a + ")" : "";
				}if (b) throw ha("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ua(d));
			}function N(a, c) {
				var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
						a = a.parent();var b = !!a.length;b && K.$$addBindingClass(a);return function (a, c) {
							var e = c.parent();b || K.$$addBindingClass(e);K.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
								c[0].nodeValue = a;
							});
						};
					} });
			}function Yb(a, b) {
				a = F(a || "html");switch (a) {case "svg":case "math":
						var c = X.createElement("div");
						c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
						return b;}
			}function Q(a, b) {
				if ("srcdoc" == b) return L.HTML;var c = ta(a);if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return L.RESOURCE_URL;
			}function W(a, c, d, e, f) {
				var g = Q(a, e);f = h[e] || f;var k = b(d, !0, g, f);if (k) {
					if ("multiple" === e && "select" === ta(a)) throw ha("selmulti", ua(a));c.push({ priority: 100, compile: function compile() {
							return { pre: function pre(a, c, h) {
									c = h.$$observers || (h.$$observers = $());if (l.test(e)) throw ha("nodomevents");
									var m = h[e];m !== d && (k = m && b(m, !0, g, f), d = m);k && (h[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(k, function (a, b) {
										"class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a);
									}));
								} };
						} });
				}
			}function Y(a, b, c) {
				var d = b[0],
				    e = b.length,
				    f = d.parentNode,
				    g,
				    h;if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] == d) {
					a[g++] = c;h = g + e - 1;for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];a.length -= e - 1;a.context === d && (a.context = c);break;
				}f && f.replaceChild(c, d);a = X.createDocumentFragment();a.appendChild(d);
				B.hasData(d) && (B.data(c, B.data(d)), oa ? (Rb = !0, oa.cleanData([d])) : delete B.cache[d[B.expando]]);d = 1;for (e = b.length; d < e; d++) f = b[d], B(f).remove(), a.appendChild(f), delete b[d];b[0] = c;b.length = 1;
			}function ca(a, b) {
				return M(function () {
					return a.apply(null, arguments);
				}, a, b);
			}function ea(a, b, d, e, f, g) {
				try {
					a(b, d, e, f, g);
				} catch (h) {
					c(h, ua(d));
				}
			}function ba(a, c, d, e, f) {
				var g = [];n(e, function (e, h) {
					var k = e.attrName,
					    l = e.optional,
					    m,
					    t,
					    w,
					    D;switch (e.mode) {case "@":
							l || qa.call(c, k) || (d[h] = c[k] = void 0);c.$observe(k, function (a) {
								E(a) && (d[h] = a);
							});c.$$observers[k].$$scope = a;E(c[k]) && (d[h] = b(c[k])(a));break;case "=":
							if (!qa.call(c, k)) {
								if (l) break;c[k] = void 0;
							}if (l && !c[k]) break;t = p(c[k]);D = t.literal ? ma : function (a, b) {
								return a === b || a !== a && b !== b;
							};w = t.assign || function () {
								m = d[h] = t(a);throw ha("nonassign", c[k], f.name);
							};m = d[h] = t(a);l = function (b) {
								D(b, d[h]) || (D(b, m) ? w(a, b = d[h]) : d[h] = b);return m = b;
							};l.$stateful = !0;l = e.collection ? a.$watchCollection(c[k], l) : a.$watch(p(c[k], l), null, t.literal);g.push(l);break;case "&":
							t = c.hasOwnProperty(k) ? p(c[k]) : x;if (t === x && l) break;d[h] = function (b) {
								return t(a, b);
							};}
				});return g.length && function () {
					for (var a = 0, b = g.length; a < b; ++a) g[a]();
				};
			}var fa = function fa(a, b) {
				if (b) {
					var c = Object.keys(b),
					    d,
					    e,
					    f;d = 0;for (e = c.length; d < e; d++) f = c[d], this[f] = b[f];
				} else this.$attr = {};this.$$element = a;
			};fa.prototype = { $normalize: va, $addClass: function $addClass(a) {
					a && 0 < a.length && aa.addClass(this.$$element, a);
				}, $removeClass: function $removeClass(a) {
					a && 0 < a.length && aa.removeClass(this.$$element, a);
				}, $updateClass: function $updateClass(a, b) {
					var c = Yc(a, b);c && c.length && aa.addClass(this.$$element, c);(c = Yc(b, a)) && c.length && aa.removeClass(this.$$element, c);
				}, $set: function $set(a, b, d, e) {
					var f = Qc(this.$$element[0], a),
					    g = Zc[a],
					    h = a;f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = zc(a, "-"));f = ta(this.$$element);if ("a" === f && "href" === a || "img" === f && "src" === a) this[a] = b = D(b, "src" === a);else if ("img" === f && "srcset" === a) {
						for (var f = "", g = U(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) var m = 2 * l, f = f + D(U(g[m]), !0), f = f + (" " + U(g[m + 1]));g = U(g[2 * l]).split(/\s/);f += D(U(g[0]), !0);2 === g.length && (f += " " + U(g[1]));this[a] = b = f;
					}!1 !== d && (null === b || q(b) ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));(a = this.$$observers) && n(a[h], function (a) {
						try {
							a(b);
						} catch (d) {
							c(d);
						}
					});
				}, $observe: function $observe(a, b) {
					var c = this,
					    d = c.$$observers || (c.$$observers = $()),
					    e = d[a] || (d[a] = []);e.push(b);w.$evalAsync(function () {
						e.$$inter || !c.hasOwnProperty(a) || q(c[a]) || b(c[a]);
					});return function () {
						ab(e, b);
					};
				} };var da = b.startSymbol(),
			    ia = b.endSymbol(),
			    ja = "{{" == da || "}}" == ia ? Ya : function (a) {
				return a.replace(/\{\{/g, da).replace(/}}/g, ia);
			},
			    ka = /^ngAttr[A-Z]/,
			    la = /^(.+)Start$/;K.$$addBindingInfo = m ? function (a, b) {
				var c = a.data("$binding") || [];I(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
			} : x;K.$$addBindingClass = m ? function (a) {
				J(a, "ng-binding");
			} : x;K.$$addScopeInfo = m ? function (a, b, c, d) {
				a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
			} : x;K.$$addScopeClass = m ? function (a, b) {
				J(a, b ? "ng-isolate-scope" : "ng-scope");
			} : x;return K;
		}];
	}function va(a) {
		return fb(a.replace(Vc, ""));
	}function Yc(a, b) {
		var d = "",
		    c = a.split(/\s+/),
		    e = b.split(/\s+/),
		    f = 0;a: for (; f < c.length; f++) {
			for (var g = c[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;d += (0 < d.length ? " " : "") + g;
		}return d;
	}function Xc(a) {
		a = B(a);var b = a.length;if (1 >= b) return a;for (; b--;) 8 === a[b].nodeType && Pf.call(a, b, 1);return a;
	}function Xe() {
		var a = {},
		    b = !1;this.register = function (b, c) {
			Ra(b, "controller");H(b) ? M(a, b) : a[b] = c;
		};this.allowGlobals = function () {
			b = !0;
		};this.$get = ["$injector", "$window", function (d, c) {
			function e(a, b, c, d) {
				if (!a || !H(a.$scope)) throw G("$controller")("noscp", d, b);a.$scope[b] = c;
			}return function (f, g, h, k) {
				var l, m, r;h = !0 === h;k && E(k) && (r = k);if (E(f)) {
					k = f.match(Uc);if (!k) throw Qf("ctrlfmt", f);m = k[1];r = r || k[3];f = a.hasOwnProperty(m) ? a[m] : Bc(g.$scope, m, !0) || (b ? Bc(c, m, !0) : u);Qa(f, m, !0);
				}if (h) return h = (I(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), r && e(g, r, l, m || f.name), M(function () {
					var a = d.invoke(f, l, g, m);a !== l && (H(a) || z(a)) && (l = a, r && e(g, r, l, m || f.name));return l;
				}, { instance: l, identifier: r });l = d.instantiate(f, g, m);r && e(g, r, l, m || f.name);return l;
			};
		}];
	}function Ye() {
		this.$get = ["$window", function (a) {
			return B(a.document);
		}];
	}function Ze() {
		this.$get = ["$log", function (a) {
			return function (b, d) {
				a.error.apply(a, arguments);
			};
		}];
	}function Zb(a) {
		return H(a) ? da(a) ? a.toISOString() : db(a) : a;
	}function df() {
		this.$get = function () {
			return function (a) {
				if (!a) return "";var b = [];oc(a, function (a, c) {
					null === a || q(a) || (I(a) ? n(a, function (a, d) {
						b.push(ja(c) + "=" + ja(Zb(a)));
					}) : b.push(ja(c) + "=" + ja(Zb(a))));
				});return b.join("&");
			};
		};
	}function ef() {
		this.$get = function () {
			return function (a) {
				function b(a, e, f) {
					null === a || q(a) || (I(a) ? n(a, function (a, c) {
						b(a, e + "[" + (H(a) ? c : "") + "]");
					}) : H(a) && !da(a) ? oc(a, function (a, c) {
						b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
					}) : d.push(ja(e) + "=" + ja(Zb(a))));
				}if (!a) return "";var d = [];b(a, "", !0);return d.join("&");
			};
		};
	}function $b(a, b) {
		if (E(a)) {
			var d = a.replace(Rf, "").trim();if (d) {
				var c = b("Content-Type");(c = c && 0 === c.indexOf($c)) || (c = (c = d.match(Sf)) && Tf[c[0]].test(d));c && (a = uc(d));
			}
		}return a;
	}function ad(a) {
		var b = $(),
		    d;E(a) ? n(a.split("\n"), function (a) {
			d = a.indexOf(":");var e = F(U(a.substr(0, d)));a = U(a.substr(d + 1));e && (b[e] = b[e] ? b[e] + ", " + a : a);
		}) : H(a) && n(a, function (a, d) {
			var f = F(d),
			    g = U(a);f && (b[f] = b[f] ? b[f] + ", " + g : g);
		});return b;
	}function bd(a) {
		var b;return function (d) {
			b || (b = ad(a));return d ? (d = b[F(d)], void 0 === d && (d = null), d) : b;
		};
	}function cd(a, b, d, c) {
		if (z(c)) return c(a, b, d);n(c, function (c) {
			a = c(a, b, d);
		});return a;
	}function cf() {
		var a = this.defaults = { transformResponse: [$b], transformRequest: [function (a) {
				return H(a) && "[object File]" !== sa.call(a) && "[object Blob]" !== sa.call(a) && "[object FormData]" !== sa.call(a) ? db(a) : a;
			}], headers: { common: { Accept: "application/json, text/plain, */*" },
				post: ia(ac), put: ia(ac), patch: ia(ac) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer" },
		    b = !1;this.useApplyAsync = function (a) {
			return y(a) ? (b = !!a, this) : b;
		};var d = !0;this.useLegacyPromiseExtensions = function (a) {
			return y(a) ? (d = !!a, this) : d;
		};var c = this.interceptors = [];this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
			function m(b) {
				function c(a) {
					var b = M({}, a);b.data = cd(a.data, a.headers, a.status, f.transformResponse);
					a = a.status;return 200 <= a && 300 > a ? b : k.reject(b);
				}function e(a, b) {
					var c,
					    d = {};n(a, function (a, e) {
						z(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
					});return d;
				}if (!fa.isObject(b)) throw G("$http")("badreq", b);var f = M({ method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse, paramSerializer: a.paramSerializer }, b);f.headers = (function (b) {
					var c = a.headers,
					    d = M({}, b.headers),
					    f,
					    g,
					    h,
					    c = M({}, c.common, c[F(b.method)]);a: for (f in c) {
						g = F(f);for (h in d) if (F(h) === g) continue a;d[f] = c[f];
					}return e(d, ia(b));
				})(b);
				f.method = sb(f.method);f.paramSerializer = E(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;var g = [function (b) {
					var d = b.headers,
					    e = cd(b.data, bd(d), u, b.transformRequest);q(e) && n(d, function (a, b) {
						"content-type" === F(b) && delete d[b];
					});q(b.withCredentials) && !q(a.withCredentials) && (b.withCredentials = a.withCredentials);return r(b, e).then(c, c);
				}, u],
				    h = k.when(f);for (n(v, function (a) {
					(a.request || a.requestError) && g.unshift(a.request, a.requestError);(a.response || a.responseError) && g.push(a.response, a.responseError);
				}); g.length;) {
					b = g.shift();var m = g.shift(),
					    h = h.then(b, m);
				}d ? (h.success = function (a) {
					Qa(a, "fn");h.then(function (b) {
						a(b.data, b.status, b.headers, f);
					});return h;
				}, h.error = function (a) {
					Qa(a, "fn");h.then(null, function (b) {
						a(b.data, b.status, b.headers, f);
					});return h;
				}) : (h.success = dd("success"), h.error = dd("error"));return h;
			}function r(c, d) {
				function g(a, c, d, e) {
					function f() {
						l(c, a, d, e);
					}J && (200 <= a && 300 > a ? J.put(R, [a, c, ad(d), e]) : J.remove(R));b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
				}function l(a, b, d, e) {
					b = -1 <= b ? b : 0;(200 <= b && 300 > b ? n.resolve : n.reject)({ data: a, status: b, headers: bd(d), config: c, statusText: e });
				}function r(a) {
					l(a.data, a.status, ia(a.headers()), a.statusText);
				}function v() {
					var a = m.pendingRequests.indexOf(c);-1 !== a && m.pendingRequests.splice(a, 1);
				}var n = k.defer(),
				    D = n.promise,
				    J,
				    K,
				    O = c.headers,
				    R = t(c.url, c.paramSerializer(c.params));m.pendingRequests.push(c);D.then(v, v);!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (J = H(c.cache) ? c.cache : H(a.cache) ? a.cache : A);J && (K = J.get(R), y(K) ? K && z(K.then) ? K.then(r, r) : I(K) ? l(K[1], K[0], ia(K[2]), K[3]) : l(K, 200, {}, "OK") : J.put(R, D));q(K) && ((K = ed(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : u) && (O[c.xsrfHeaderName || a.xsrfHeaderName] = K), e(c.method, R, d, g, O, c.timeout, c.withCredentials, c.responseType));return D;
			}function t(a, b) {
				0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);return a;
			}var A = g("$http");a.paramSerializer = E(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;var v = [];n(c, function (a) {
				v.unshift(E(a) ? l.get(a) : l.invoke(a));
			});m.pendingRequests = [];(function (a) {
				n(arguments, function (a) {
					m[a] = function (b, c) {
						return m(M({}, c || {}, { method: a, url: b }));
					};
				});
			})("get", "delete", "head", "jsonp");(function (a) {
				n(arguments, function (a) {
					m[a] = function (b, c, d) {
						return m(M({}, d || {}, { method: a, url: b, data: c }));
					};
				});
			})("post", "put", "patch");m.defaults = a;return m;
		}];
	}function gf() {
		this.$get = function () {
			return function () {
				return new S.XMLHttpRequest();
			};
		};
	}function ff() {
		this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (a, b, d, c) {
			return Uf(a, c, a.defer, b.angular.callbacks, d[0]);
		}];
	}function Uf(a, b, d, c, e) {
		function f(a, b, d) {
			var f = e.createElement("script"),
			    m = null;f.type = "text/javascript";f.src = a;f.async = !0;m = function (a) {
				f.removeEventListener("load", m, !1);f.removeEventListener("error", m, !1);e.body.removeChild(f);f = null;var g = -1,
				    A = "unknown";a && ("load" !== a.type || c[b].called || (a = { type: "error" }), A = a.type, g = "error" === a.type ? 404 : 200);d && d(g, A);
			};f.addEventListener("load", m, !1);f.addEventListener("error", m, !1);e.body.appendChild(f);return m;
		}return function (e, h, k, l, m, r, t, A) {
			function v() {
				C && C();w && w.abort();
			}
			function T(b, c, e, f, g) {
				y(L) && d.cancel(L);C = w = null;b(c, e, f, g);a.$$completeOutstandingRequest(x);
			}a.$$incOutstandingRequestCount();h = h || a.url();if ("jsonp" == F(e)) {
				var p = "_" + (c.counter++).toString(36);c[p] = function (a) {
					c[p].data = a;c[p].called = !0;
				};var C = f(h.replace("JSON_CALLBACK", "angular.callbacks." + p), p, function (a, b) {
					T(l, a, c[p].data, "", b);c[p] = x;
				});
			} else {
				var w = b(e, h);w.open(e, h, !0);n(m, function (a, b) {
					y(a) && w.setRequestHeader(b, a);
				});w.onload = function () {
					var a = w.statusText || "",
					    b = "response" in w ? w.response : w.responseText,
					    c = 1223 === w.status ? 204 : w.status;0 === c && (c = b ? 200 : "file" == wa(h).protocol ? 404 : 0);T(l, c, b, w.getAllResponseHeaders(), a);
				};e = function () {
					T(l, -1, null, null, "");
				};w.onerror = e;w.onabort = e;t && (w.withCredentials = !0);if (A) try {
					w.responseType = A;
				} catch (ga) {
					if ("json" !== A) throw ga;
				}w.send(q(k) ? null : k);
			}if (0 < r) var L = d(v, r);else r && z(r.then) && r.then(v);
		};
	}function af() {
		var a = "{{",
		    b = "}}";this.startSymbol = function (b) {
			return b ? (a = b, this) : a;
		};this.endSymbol = function (a) {
			return a ? (b = a, this) : b;
		};this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
			function f(a) {
				return "\\\\\\" + a;
			}function g(c) {
				return c.replace(m, a).replace(r, b);
			}function h(f, h, m, r) {
				function p(a) {
					try {
						var b = a;a = m ? e.getTrusted(m, b) : e.valueOf(b);var d;if (r && !y(a)) d = a;else if (null == a) d = "";else {
							switch (typeof a) {case "string":
									break;case "number":
									a = "" + a;break;default:
									a = db(a);}d = a;
						}return d;
					} catch (g) {
						c(Ja.interr(f, g));
					}
				}r = !!r;for (var C, w, n = 0, L = [], s = [], D = f.length, J = [], K = []; n < D;) if (-1 != (C = f.indexOf(a, n)) && -1 != (w = f.indexOf(b, C + k))) n !== C && J.push(g(f.substring(n, C))), n = f.substring(C + k, w), L.push(n), s.push(d(n, p)), n = w + l, K.push(J.length), J.push("");else {
					n !== D && J.push(g(f.substring(n)));break;
				}m && 1 < J.length && Ja.throwNoconcat(f);if (!h || L.length) {
					var O = function O(a) {
						for (var b = 0, c = L.length; b < c; b++) {
							if (r && q(a[b])) return;J[K[b]] = a[b];
						}return J.join("");
					};return M(function (a) {
						var b = 0,
						    d = L.length,
						    e = Array(d);try {
							for (; b < d; b++) e[b] = s[b](a);return O(e);
						} catch (g) {
							c(Ja.interr(f, g));
						}
					}, { exp: f, expressions: L, $$watchDelegate: function $$watchDelegate(a, b) {
							var c;return a.$watchGroup(s, function (d, e) {
								var f = O(d);z(b) && b.call(this, f, d !== e ? c : f, a);c = f;
							});
						} });
				}
			}var k = a.length,
			    l = b.length,
			    m = new RegExp(a.replace(/./g, f), "g"),
			    r = new RegExp(b.replace(/./g, f), "g");h.startSymbol = function () {
				return a;
			};h.endSymbol = function () {
				return b;
			};return h;
		}];
	}function bf() {
		this.$get = ["$rootScope", "$window", "$q", "$$q", function (a, b, d, c) {
			function e(e, h, k, l) {
				var m = 4 < arguments.length,
				    r = m ? ra.call(arguments, 4) : [],
				    t = b.setInterval,
				    A = b.clearInterval,
				    v = 0,
				    n = y(l) && !l,
				    p = (n ? c : d).defer(),
				    C = p.promise;k = y(k) ? k : 0;C.then(null, null, m ? function () {
					e.apply(null, r);
				} : e);C.$$intervalId = t(function () {
					p.notify(v++);0 < k && v >= k && (p.resolve(v), A(C.$$intervalId), delete f[C.$$intervalId]);n || a.$apply();
				}, h);f[C.$$intervalId] = p;return C;
			}var f = {};e.cancel = function (a) {
				return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1;
			};return e;
		}];
	}function bc(a) {
		a = a.split("/");for (var b = a.length; b--;) a[b] = ob(a[b]);return a.join("/");
	}function fd(a, b) {
		var d = wa(a);b.$$protocol = d.protocol;b.$$host = d.hostname;b.$$port = ea(d.port) || Vf[d.protocol] || null;
	}function gd(a, b) {
		var d = "/" !== a.charAt(0);d && (a = "/" + a);var c = wa(a);b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);b.$$search = xc(c.search);b.$$hash = decodeURIComponent(c.hash);b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
	}function pa(a, b) {
		if (0 === b.indexOf(a)) return b.substr(a.length);
	}function Fa(a) {
		var b = a.indexOf("#");return -1 == b ? a : a.substr(0, b);
	}function ib(a) {
		return a.replace(/(#.+)|#$/, "$1");
	}function cc(a, b, d) {
		this.$$html5 = !0;d = d || "";
		fd(a, this);this.$$parse = function (a) {
			var d = pa(b, a);if (!E(d)) throw Db("ipthprfx", a, b);gd(d, this);this.$$path || (this.$$path = "/");this.$$compose();
		};this.$$compose = function () {
			var a = Qb(this.$$search),
			    d = this.$$hash ? "#" + ob(this.$$hash) : "";this.$$url = bc(this.$$path) + (a ? "?" + a : "") + d;this.$$absUrl = b + this.$$url.substr(1);
		};this.$$parseLinkUrl = function (c, e) {
			if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;y(f = pa(a, c)) ? (g = f, g = y(f = pa(d, f)) ? b + (pa("/", f) || f) : a + g) : y(f = pa(b, c)) ? g = b + f : b == c + "/" && (g = b);g && this.$$parse(g);
			return !!g;
		};
	}function dc(a, b, d) {
		fd(a, this);this.$$parse = function (c) {
			var e = pa(a, c) || pa(b, c),
			    f;q(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", q(e) && (a = c, this.replace())) : (f = pa(d, e), q(f) && (f = e));gd(f, this);c = this.$$path;var e = a,
			    g = /^\/[A-Z]:(\/.*)/;0 === f.indexOf(e) && (f = f.replace(e, ""));g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);this.$$path = c;this.$$compose();
		};this.$$compose = function () {
			var b = Qb(this.$$search),
			    e = this.$$hash ? "#" + ob(this.$$hash) : "";this.$$url = bc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
		};this.$$parseLinkUrl = function (b, d) {
			return Fa(a) == Fa(b) ? (this.$$parse(b), !0) : !1;
		};
	}function hd(a, b, d) {
		this.$$html5 = !0;dc.apply(this, arguments);this.$$parseLinkUrl = function (c, e) {
			if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;a == Fa(c) ? f = c : (g = pa(b, c)) ? f = a + d + g : b === c + "/" && (f = b);f && this.$$parse(f);return !!f;
		};this.$$compose = function () {
			var b = Qb(this.$$search),
			    e = this.$$hash ? "#" + ob(this.$$hash) : "";this.$$url = bc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + d + this.$$url;
		};
	}function Eb(a) {
		return function () {
			return this[a];
		};
	}
	function id(a, b) {
		return function (d) {
			if (q(d)) return this[a];this[a] = b(d);this.$$compose();return this;
		};
	}function hf() {
		var a = "",
		    b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (b) {
			return y(b) ? (a = b, this) : a;
		};this.html5Mode = function (a) {
			return $a(a) ? (b.enabled = a, this) : H(a) ? ($a(a.enabled) && (b.enabled = a.enabled), $a(a.requireBase) && (b.requireBase = a.requireBase), $a(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b;
		};this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
			function h(a, b, d) {
				var e = l.url(),
				    f = l.$$state;try {
					c.url(a, b, d), l.$$state = c.state();
				} catch (g) {
					throw (l.url(e), l.$$state = f, g);
				}
			}function k(a, b) {
				d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
			}var l, m;m = c.baseHref();var r = c.url(),
			    t;if (b.enabled) {
				if (!m && b.requireBase) throw Db("nobase");t = r.substring(0, r.indexOf("/", r.indexOf("//") + 2)) + (m || "/");m = e.history ? cc : hd;
			} else t = Fa(r), m = dc;var A = t.substr(0, Fa(t).lastIndexOf("/") + 1);l = new m(t, A, "#" + a);l.$$parseLinkUrl(r, r);l.$$state = c.state();var v = /^\s*(javascript|mailto):/i;f.on("click", function (a) {
				if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
					for (var e = B(a.target); "a" !== ta(e[0]);) if (e[0] === f[0] || !(e = e.parent())[0]) return;var h = e.prop("href"),
					    k = e.attr("href") || e.attr("xlink:href");H(h) && "[object SVGAnimatedString]" === h.toString() && (h = wa(h.animVal).href);v.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
				}
			});ib(l.absUrl()) != ib(r) && c.url(l.absUrl(), !0);var n = !0;c.onUrlChange(function (a, b) {
				q(pa(A, a)) ? g.location.href = a : (d.$evalAsync(function () {
					var c = l.absUrl(),
					    e = l.$$state,
					    f;a = ib(a);l.$$parse(a);l.$$state = b;f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (n = !1, k(c, e)));
				}), d.$$phase || d.$digest());
			});d.$watch(function () {
				var a = ib(c.url()),
				    b = ib(l.absUrl()),
				    f = c.state(),
				    g = l.$$replace,
				    m = a !== b || l.$$html5 && e.history && f !== l.$$state;if (n || m) n = !1, d.$evalAsync(function () {
					var b = l.absUrl(),
					    c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)));
				});l.$$replace = !1;
			});return l;
		}];
	}function jf() {
		var a = !0,
		    b = this;this.debugEnabled = function (b) {
			return y(b) ? (a = b, this) : a;
		};this.$get = ["$window", function (d) {
			function c(a) {
				a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
			}function e(a) {
				var b = d.console || {},
				    e = b[a] || b.log || x;a = !1;try {
					a = !!e.apply;
				} catch (k) {}return a ? function () {
					var a = [];n(arguments, function (b) {
						a.push(c(b));
					});return e.apply(b, a);
				} : function (a, b) {
					e(a, null == b ? "" : b);
				};
			}return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: (function () {
					var c = e("debug");return function () {
						a && c.apply(b, arguments);
					};
				})() };
		}];
	}function Va(a, b) {
		if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ba("isecfld", b);return a;
	}function jd(a, b) {
		a += "";if (!E(a)) throw ba("iseccst", b);return a;
	}function xa(a, b) {
		if (a) {
			if (a.constructor === a) throw ba("isecfn", b);if (a.window === a) throw ba("isecwindow", b);if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ba("isecdom", b);if (a === Object) throw ba("isecobj", b);
		}return a;
	}function kd(a, b) {
		if (a) {
			if (a.constructor === a) throw ba("isecfn", b);if (a === Wf || a === Xf || a === Yf) throw ba("isecff", b);
		}
	}function ld(a, b) {
		if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === ({}).constructor || a === [].constructor || a === Function.constructor)) throw ba("isecaf", b);
	}function Zf(a, b) {
		return "undefined" !== typeof a ? a : b;
	}function md(a, b) {
		return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
	}function W(a, b) {
		var d, c;switch (a.type) {case s.Program:
				d = !0;n(a.body, function (a) {
					W(a.expression, b);d = d && a.expression.constant;
				});a.constant = d;break;case s.Literal:
				a.constant = !0;a.toWatch = [];break;case s.UnaryExpression:
				W(a.argument, b);a.constant = a.argument.constant;
				a.toWatch = a.argument.toWatch;break;case s.BinaryExpression:
				W(a.left, b);W(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:
				W(a.left, b);W(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.constant ? [] : [a];break;case s.ConditionalExpression:
				W(a.test, b);W(a.alternate, b);W(a.consequent, b);a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;a.toWatch = a.constant ? [] : [a];break;case s.Identifier:
				a.constant = !1;a.toWatch = [a];break;case s.MemberExpression:
				W(a.object, b);a.computed && W(a.property, b);a.constant = a.object.constant && (!a.computed || a.property.constant);a.toWatch = [a];break;case s.CallExpression:
				d = a.filter ? !b(a.callee.name).$stateful : !1;c = [];n(a.arguments, function (a) {
					W(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
				});a.constant = d;a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];break;case s.AssignmentExpression:
				W(a.left, b);W(a.right, b);a.constant = a.left.constant && a.right.constant;
				a.toWatch = [a];break;case s.ArrayExpression:
				d = !0;c = [];n(a.elements, function (a) {
					W(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
				});a.constant = d;a.toWatch = c;break;case s.ObjectExpression:
				d = !0;c = [];n(a.properties, function (a) {
					W(a.value, b);d = d && a.value.constant;a.value.constant || c.push.apply(c, a.value.toWatch);
				});a.constant = d;a.toWatch = c;break;case s.ThisExpression:
				a.constant = !1, a.toWatch = [];}
	}function nd(a) {
		if (1 == a.length) {
			a = a[0].expression;var b = a.toWatch;return 1 !== b.length ? b : b[0] !== a ? b : u;
		}
	}
	function od(a) {
		return a.type === s.Identifier || a.type === s.MemberExpression;
	}function pd(a) {
		if (1 === a.body.length && od(a.body[0].expression)) return { type: s.AssignmentExpression, left: a.body[0].expression, right: { type: s.NGValueParameter }, operator: "=" };
	}function qd(a) {
		return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
	}function rd(a, b) {
		this.astBuilder = a;this.$filter = b;
	}function sd(a, b) {
		this.astBuilder = a;this.$filter = b;
	}function Fb(a) {
		return "constructor" == a;
	}function ec(a) {
		return z(a.valueOf) ? a.valueOf() : $f.call(a);
	}function kf() {
		var a = $(),
		    b = $();this.$get = ["$filter", function (d) {
			function c(a, b) {
				return null == a || null == b ? a === b : "object" === typeof a && (a = ec(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b;
			}function e(a, b, d, e, f) {
				var g = e.inputs,
				    h;if (1 === g.length) {
					var k = c,
					    g = g[0];return a.$watch(function (a) {
						var b = g(a);c(b, k) || (h = e(a, u, u, [b]), k = b && ec(b));return h;
					}, b, d, f);
				}for (var l = [], m = [], r = 0, n = g.length; r < n; r++) l[r] = c, m[r] = null;return a.$watch(function (a) {
					for (var b = !1, d = 0, f = g.length; d < f; d++) {
						var k = g[d](a);if (b || (b = !c(k, l[d]))) m[d] = k, l[d] = k && ec(k);
					}b && (h = e(a, u, u, m));return h;
				}, b, d, f);
			}function f(a, b, c, d) {
				var e, f;return e = a.$watch(function (a) {
					return d(a);
				}, function (a, c, d) {
					f = a;z(b) && b.apply(this, arguments);y(a) && d.$$postDigest(function () {
						y(f) && e();
					});
				}, c);
			}function g(a, b, c, d) {
				function e(a) {
					var b = !0;n(a, function (a) {
						y(a) || (b = !1);
					});return b;
				}var f, g;return f = a.$watch(function (a) {
					return d(a);
				}, function (a, c, d) {
					g = a;z(b) && b.call(this, a, c, d);e(a) && d.$$postDigest(function () {
						e(g) && f();
					});
				}, c);
			}function h(a, b, c, d) {
				var e;return e = a.$watch(function (a) {
					return d(a);
				}, function (a, c, d) {
					z(b) && b.apply(this, arguments);e();
				}, c);
			}function k(a, b) {
				if (!b) return a;var c = a.$$watchDelegate,
				    d = !1,
				    c = c !== g && c !== f ? function (c, e, f, g) {
					f = d && g ? g[0] : a(c, e, f, g);return b(f, c, e);
				} : function (c, d, e, f) {
					e = a(c, d, e, f);c = b(e, c, d);return y(e) ? c : e;
				};a.$$watchDelegate && a.$$watchDelegate !== e ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = e, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);return c;
			}var l = Ba().noUnsafeEval,
			    m = { csp: l, expensiveChecks: !1 },
			    r = { csp: l, expensiveChecks: !0 };return function (c, l, v) {
				var n, p, q;switch (typeof c) {case "string":
						q = c = c.trim();var w = v ? b : a;n = w[q];n || (":" === c.charAt(0) && ":" === c.charAt(1) && (p = !0, c = c.substring(2)), v = v ? r : m, n = new fc(v), n = new gc(n, d, v).parse(c), n.constant ? n.$$watchDelegate = h : p ? n.$$watchDelegate = n.literal ? g : f : n.inputs && (n.$$watchDelegate = e), w[q] = n);return k(n, l);case "function":
						return k(c, l);default:
						return x;}
			};
		}];
	}
	function mf() {
		this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
			return td(function (b) {
				a.$evalAsync(b);
			}, b);
		}];
	}function nf() {
		this.$get = ["$browser", "$exceptionHandler", function (a, b) {
			return td(function (b) {
				a.defer(b);
			}, b);
		}];
	}function td(a, b) {
		function d(a, b, c) {
			function d(b) {
				return function (c) {
					e || (e = !0, b.call(a, c));
				};
			}var e = !1;return [d(b), d(c)];
		}function c() {
			this.$$state = { status: 0 };
		}function e(a, b) {
			return function (c) {
				b.call(a, c);
			};
		}function f(c) {
			!c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
				var a, d, e;e = c.pending;c.processScheduled = !1;c.pending = u;for (var f = 0, g = e.length; f < g; ++f) {
					d = e[f][0];a = e[f][c.status];try {
						z(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
					} catch (h) {
						d.reject(h), b(h);
					}
				}
			}));
		}function g() {
			this.promise = new c();this.resolve = e(this, this.resolve);this.reject = e(this, this.reject);this.notify = e(this, this.notify);
		}var h = G("$q", TypeError);M(c.prototype, { then: function then(a, b, c) {
				if (q(a) && q(b) && q(c)) return this;var d = new g();this.$$state.pending = this.$$state.pending || [];
				this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && f(this.$$state);return d.promise;
			}, "catch": function _catch(a) {
				return this.then(null, a);
			}, "finally": function _finally(a, b) {
				return this.then(function (b) {
					return l(b, !0, a);
				}, function (b) {
					return l(b, !1, a);
				}, b);
			} });M(g.prototype, { resolve: function resolve(a) {
				this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a));
			}, $$resolve: function $$resolve(a) {
				var c, e;e = d(this, this.$$resolve, this.$$reject);try {
					if (H(a) || z(a)) c = a && a.then;z(c) ? (this.promise.$$state.status = -1, c.call(a, e[0], e[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, f(this.promise.$$state));
				} catch (g) {
					e[1](g), b(g);
				}
			}, reject: function reject(a) {
				this.promise.$$state.status || this.$$reject(a);
			}, $$reject: function $$reject(a) {
				this.promise.$$state.value = a;this.promise.$$state.status = 2;f(this.promise.$$state);
			}, notify: function notify(c) {
				var d = this.promise.$$state.pending;0 >= this.promise.$$state.status && d && d.length && a(function () {
					for (var a, e, f = 0, g = d.length; f < g; f++) {
						e = d[f][0];a = d[f][3];try {
							e.notify(z(a) ? a(c) : c);
						} catch (h) {
							b(h);
						}
					}
				});
			} });var k = function k(a, b) {
			var c = new g();b ? c.resolve(a) : c.reject(a);return c.promise;
		},
		    l = function l(a, b, c) {
			var d = null;try {
				z(c) && (d = c());
			} catch (e) {
				return k(e, !1);
			}return d && z(d.then) ? d.then(function () {
				return k(a, b);
			}, function (a) {
				return k(a, !1);
			}) : k(a, b);
		},
		    m = function m(a, b, c, d) {
			var e = new g();e.resolve(a);return e.promise.then(b, c, d);
		},
		    r = function A(a) {
			if (!z(a)) throw h("norslvr", a);if (!(this instanceof A)) return new A(a);var b = new g();a(function (a) {
				b.resolve(a);
			}, function (a) {
				b.reject(a);
			});return b.promise;
		};
		r.defer = function () {
			return new g();
		};r.reject = function (a) {
			var b = new g();b.reject(a);return b.promise;
		};r.when = m;r.resolve = m;r.all = function (a) {
			var b = new g(),
			    c = 0,
			    d = I(a) ? [] : {};n(a, function (a, e) {
				c++;m(a).then(function (a) {
					d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
				}, function (a) {
					d.hasOwnProperty(e) || b.reject(a);
				});
			});0 === c && b.resolve(d);return b.promise;
		};return r;
	}function wf() {
		this.$get = ["$window", "$timeout", function (a, b) {
			var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
			    c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
			    e = !!d,
			    f = e ? function (a) {
				var b = d(a);return function () {
					c(b);
				};
			} : function (a) {
				var c = b(a, 16.66, !1);return function () {
					b.cancel(c);
				};
			};f.supported = e;return f;
		}];
	}function lf() {
		function a(a) {
			function b() {
				this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++nb;this.$$ChildScope = null;
			}b.prototype = a;return b;
		}var b = 10,
		    d = G("$rootScope"),
		    c = null,
		    e = null;this.digestTtl = function (a) {
			arguments.length && (b = a);return b;
		};this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (f, g, h, k) {
			function l(a) {
				a.currentScope.$$destroyed = !0;
			}function m(a) {
				9 === Ha && (a.$$childHead && m(a.$$childHead), a.$$nextSibling && m(a.$$nextSibling));a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
			}function r() {
				this.$id = ++nb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
			}function t(a) {
				if (w.$$phase) throw d("inprog", w.$$phase);w.$$phase = a;
			}function A(a, b) {
				do a.$$watchersCount += b; while (a = a.$parent);
			}function v(a, b, c) {
				do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
			}function s() {}function p() {
				for (; aa.length;) try {
					aa.shift()();
				} catch (a) {
					g(a);
				}e = null;
			}function C() {
				null === e && (e = k.defer(function () {
					w.$apply(p);
				}));
			}r.prototype = { constructor: r,
				$new: function $new(b, c) {
					var d;c = c || this;b ? (d = new r(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(b || c != this) && d.$on("$destroy", l);return d;
				}, $watch: function $watch(a, b, d, e) {
					var f = h(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);var g = this,
					    k = g.$$watchers,
					    l = { fn: b, last: s, get: f, exp: e || a, eq: !!d };c = null;z(b) || (l.fn = x);k || (k = g.$$watchers = []);k.unshift(l);A(this, 1);return function () {
						0 <= ab(k, l) && A(g, -1);c = null;
					};
				}, $watchGroup: function $watchGroup(a, b) {
					function c() {
						h = !1;k ? (k = !1, b(e, e, g)) : b(e, d, g);
					}var d = Array(a.length),
					    e = Array(a.length),
					    f = [],
					    g = this,
					    h = !1,
					    k = !0;if (!a.length) {
						var l = !0;g.$evalAsync(function () {
							l && b(e, e, g);
						});return function () {
							l = !1;
						};
					}if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
						e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
					});n(a, function (a, b) {
						var k = g.$watch(a, function (a, f) {
							e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
						});f.push(k);
					});return function () {
						for (; f.length;) f.shift()();
					};
				},
				$watchCollection: function $watchCollection(a, b) {
					function c(a) {
						e = a;var b, d, g, h;if (!q(e)) {
							if (H(e)) if (za(e)) for (f !== r && (f = r, n = f.length = 0, l++), a = e.length, n !== a && (l++, f.length = n = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);else {
								f !== t && (f = t = {}, n = 0, l++);a = 0;for (b in e) qa.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (n++, f[b] = g, l++));if (n > a) for (b in (l++, f)) qa.call(e, b) || (n--, delete f[b]);
							} else f !== e && (f = e, l++);return l;
						}
					}c.$stateful = !0;var d = this,
					    e,
					    f,
					    g,
					    k = 1 < b.length,
					    l = 0,
					    m = h(a, c),
					    r = [],
					    t = {},
					    p = !0,
					    n = 0;return this.$watch(m, function () {
						p ? (p = !1, b(e, e, d)) : b(e, g, d);if (k) if (H(e)) if (za(e)) {
							g = Array(e.length);for (var a = 0; a < e.length; a++) g[a] = e[a];
						} else for (a in (g = {}, e)) qa.call(e, a) && (g[a] = e[a]);else g = e;
					});
				}, $digest: function $digest() {
					var a,
					    f,
					    h,
					    l,
					    m,
					    r,
					    n = b,
					    A,
					    q = [],
					    v,
					    C;t("$digest");k.$$checkUrlChange();this === w && null !== e && (k.defer.cancel(e), p());c = null;do {
						r = !1;for (A = this; u.length;) {
							try {
								C = u.shift(), C.scope.$eval(C.expression, C.locals);
							} catch (aa) {
								g(aa);
							}c = null;
						}a: do {
							if (l = A.$$watchers) for (m = l.length; m--;) try {
								if (a = l[m]) if ((f = a.get(A)) !== (h = a.last) && !(a.eq ? ma(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h))) r = !0, c = a, a.last = a.eq ? bb(f, null) : f, a.fn(f, h === s ? f : h, A), 5 > n && (v = 4 - n, q[v] || (q[v] = []), q[v].push({ msg: z(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: f, oldVal: h }));else if (a === c) {
									r = !1;break a;
								}
							} catch (y) {
								g(y);
							}if (!(l = A.$$watchersCount && A.$$childHead || A !== this && A.$$nextSibling)) for (; A !== this && !(l = A.$$nextSibling);) A = A.$parent;
						} while (A = l);if ((r || u.length) && ! n--) throw (w.$$phase = null, d("infdig", b, q));
					} while (r || u.length);for (w.$$phase = null; L.length;) try {
						L.shift()();
					} catch (x) {
						g(x);
					}
				}, $destroy: function $destroy() {
					if (!this.$$destroyed) {
						var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === w && k.$$applicationDestroyed();A(this, -this.$$watchersCount);for (var b in this.$$listenerCount) v(this, this.$$listenerCount[b], b);a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = x;this.$on = this.$watch = this.$watchGroup = function () {
							return x;
						};this.$$listeners = {};this.$$nextSibling = null;m(this);
					}
				}, $eval: function $eval(a, b) {
					return h(a)(this, b);
				}, $evalAsync: function $evalAsync(a, b) {
					w.$$phase || u.length || k.defer(function () {
						u.length && w.$digest();
					});u.push({ scope: this, expression: a, locals: b });
				}, $$postDigest: function $$postDigest(a) {
					L.push(a);
				}, $apply: function $apply(a) {
					try {
						t("$apply");
						try {
							return this.$eval(a);
						} finally {
							w.$$phase = null;
						}
					} catch (b) {
						g(b);
					} finally {
						try {
							w.$digest();
						} catch (c) {
							throw (g(c), c);
						}
					}
				}, $applyAsync: function $applyAsync(a) {
					function b() {
						c.$eval(a);
					}var c = this;a && aa.push(b);C();
				}, $on: function $on(a, b) {
					var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);var e = this;return function () {
						var d = c.indexOf(b);-1 !== d && (c[d] = null, v(e, 1, a));
					};
				}, $emit: function $emit(a, b) {
					var c = [],
					    d,
					    e = this,
					    f = !1,
					    h = { name: a, targetScope: e, stopPropagation: function stopPropagation() {
							f = !0;
						}, preventDefault: function preventDefault() {
							h.defaultPrevented = !0;
						}, defaultPrevented: !1 },
					    k = cb([h], arguments, 1),
					    l,
					    m;do {
						d = e.$$listeners[a] || c;h.currentScope = e;l = 0;for (m = d.length; l < m; l++) if (d[l]) try {
							d[l].apply(null, k);
						} catch (r) {
							g(r);
						} else d.splice(l, 1), l--, m--;if (f) return h.currentScope = null, h;e = e.$parent;
					} while (e);h.currentScope = null;return h;
				}, $broadcast: function $broadcast(a, b) {
					var c = this,
					    d = this,
					    e = { name: a, targetScope: this, preventDefault: function preventDefault() {
							e.defaultPrevented = !0;
						}, defaultPrevented: !1 };
					if (!this.$$listenerCount[a]) return e;for (var f = cb([e], arguments, 1), h, k; c = d;) {
						e.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (k = d.length; h < k; h++) if (d[h]) try {
							d[h].apply(null, f);
						} catch (l) {
							g(l);
						} else d.splice(h, 1), h--, k--;if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent;
					}e.currentScope = null;return e;
				} };var w = new r(),
			    u = w.$$asyncQueue = [],
			    L = w.$$postDigestQueue = [],
			    aa = w.$$applyAsyncQueue = [];return w;
		}];
	}function ge() {
		var a = /^\s*(https?|ftp|mailto|tel|file):/,
		    b = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (b) {
			return y(b) ? (a = b, this) : a;
		};this.imgSrcSanitizationWhitelist = function (a) {
			return y(a) ? (b = a, this) : b;
		};this.$get = function () {
			return function (d, c) {
				var e = c ? b : a,
				    f;f = wa(d).href;return "" === f || f.match(e) ? d : "unsafe:" + f;
			};
		};
	}function ag(a) {
		if ("self" === a) return a;if (E(a)) {
			if (-1 < a.indexOf("***")) throw ya("iwcard", a);a = ud(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");return new RegExp("^" + a + "$");
		}if (Ma(a)) return new RegExp("^" + a.source + "$");throw ya("imatcher");
	}function vd(a) {
		var b = [];y(a) && n(a, function (a) {
			b.push(ag(a));
		});return b;
	}function pf() {
		this.SCE_CONTEXTS = la;var a = ["self"],
		    b = [];this.resourceUrlWhitelist = function (b) {
			arguments.length && (a = vd(b));return a;
		};this.resourceUrlBlacklist = function (a) {
			arguments.length && (b = vd(a));return b;
		};this.$get = ["$injector", function (d) {
			function c(a, b) {
				return "self" === a ? ed(b) : !!a.exec(b.href);
			}function e(a) {
				var b = function b(a) {
					this.$$unwrapTrustedValue = function () {
						return a;
					};
				};a && (b.prototype = new a());b.prototype.valueOf = function () {
					return this.$$unwrapTrustedValue();
				};b.prototype.toString = function () {
					return this.$$unwrapTrustedValue().toString();
				};return b;
			}var f = function f(a) {
				throw ya("unsafe");
			};d.has("$sanitize") && (f = d.get("$sanitize"));var g = e(),
			    h = {};h[la.HTML] = e(g);h[la.CSS] = e(g);h[la.URL] = e(g);h[la.JS] = e(g);h[la.RESOURCE_URL] = e(h[la.URL]);return { trustAs: function trustAs(a, b) {
					var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw ya("icontext", a, b);if (null === b || q(b) || "" === b) return b;if ("string" !== typeof b) throw ya("itype", a);return new c(b);
				}, getTrusted: function getTrusted(d, e) {
					if (null === e || q(e) || "" === e) return e;var g = h.hasOwnProperty(d) ? h[d] : null;if (g && e instanceof g) return e.$$unwrapTrustedValue();if (d === la.RESOURCE_URL) {
						var g = wa(e.toString()),
						    r,
						    t,
						    n = !1;r = 0;for (t = a.length; r < t; r++) if (c(a[r], g)) {
							n = !0;break;
						}if (n) for (r = 0, t = b.length; r < t; r++) if (c(b[r], g)) {
							n = !1;break;
						}if (n) return e;throw ya("insecurl", e.toString());
					}if (d === la.HTML) return f(e);throw ya("unsafe");
				}, valueOf: function valueOf(a) {
					return a instanceof g ? a.$$unwrapTrustedValue() : a;
				} };
		}];
	}
	function of() {
		var a = !0;this.enabled = function (b) {
			arguments.length && (a = !!b);return a;
		};this.$get = ["$parse", "$sceDelegate", function (b, d) {
			if (a && 8 > Ha) throw ya("iequirks");var c = ia(la);c.isEnabled = function () {
				return a;
			};c.trustAs = d.trustAs;c.getTrusted = d.getTrusted;c.valueOf = d.valueOf;a || (c.trustAs = c.getTrusted = function (a, b) {
				return b;
			}, c.valueOf = Ya);c.parseAs = function (a, d) {
				var e = b(d);return e.literal && e.constant ? e : b(d, function (b) {
					return c.getTrusted(a, b);
				});
			};var e = c.parseAs,
			    f = c.getTrusted,
			    g = c.trustAs;n(la, function (a, b) {
				var d = F(b);c[fb("parse_as_" + d)] = function (b) {
					return e(a, b);
				};c[fb("get_trusted_" + d)] = function (b) {
					return f(a, b);
				};c[fb("trust_as_" + d)] = function (b) {
					return g(a, b);
				};
			});return c;
		}];
	}function qf() {
		this.$get = ["$window", "$document", function (a, b) {
			var d = {},
			    c = ea((/android (\d+)/.exec(F((a.navigator || {}).userAgent)) || [])[1]),
			    e = /Boxee/i.test((a.navigator || {}).userAgent),
			    f = b[0] || {},
			    g,
			    h = /^(Moz|webkit|ms)(?=[A-Z])/,
			    k = f.body && f.body.style,
			    l = !1,
			    m = !1;if (k) {
				for (var r in k) if (l = h.exec(r)) {
					g = l[0];g = g.substr(0, 1).toUpperCase() + g.substr(1);break;
				}g || (g = "WebkitOpacity" in k && "webkit");l = !!("transition" in k || g + "Transition" in k);m = !!("animation" in k || g + "Animation" in k);!c || l && m || (l = E(k.webkitTransition), m = E(k.webkitAnimation));
			}return { history: !(!a.history || !a.history.pushState || 4 > c || e), hasEvent: function hasEvent(a) {
					if ("input" === a && 11 >= Ha) return !1;if (q(d[a])) {
						var b = f.createElement("div");d[a] = "on" + a in b;
					}return d[a];
				}, csp: Ba(), vendorPrefix: g, transitions: l, animations: m, android: c };
		}];
	}function sf() {
		this.$get = ["$templateCache", "$http", "$q", "$sce", function (a, b, d, c) {
			function e(f, g) {
				e.totalPendingRequests++;E(f) && a.get(f) || (f = c.getTrustedResourceUrl(f));var h = b.defaults && b.defaults.transformResponse;I(h) ? h = h.filter(function (a) {
					return a !== $b;
				}) : h === $b && (h = null);return b.get(f, { cache: a, transformResponse: h })["finally"](function () {
					e.totalPendingRequests--;
				}).then(function (b) {
					a.put(f, b.data);return b.data;
				}, function (a) {
					if (!g) throw ha("tpload", f, a.status, a.statusText);return d.reject(a);
				});
			}e.totalPendingRequests = 0;return e;
		}];
	}function tf() {
		this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
			return { findBindings: function findBindings(a, b, d) {
					a = a.getElementsByClassName("ng-binding");var g = [];n(a, function (a) {
						var c = fa.element(a).data("$binding");c && n(c, function (c) {
							d ? new RegExp("(^|\\s)" + ud(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a);
						});
					});return g;
				}, findModels: function findModels(a, b, d) {
					for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
						var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');if (k.length) return k;
					}
				}, getLocation: function getLocation() {
					return d.url();
				},
				setLocation: function setLocation(b) {
					b !== d.url() && (d.url(b), a.$digest());
				}, whenStable: function whenStable(a) {
					b.notifyWhenNoOutstandingRequests(a);
				} };
		}];
	}function uf() {
		this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
			function f(f, k, l) {
				z(f) || (l = k, k = f, f = x);var m = ra.call(arguments, 3),
				    r = y(l) && !l,
				    t = (r ? c : d).defer(),
				    n = t.promise,
				    q;q = b.defer(function () {
					try {
						t.resolve(f.apply(null, m));
					} catch (b) {
						t.reject(b), e(b);
					} finally {
						delete g[n.$$timeoutId];
					}r || a.$apply();
				}, k);n.$$timeoutId = q;g[q] = t;return n;
			}var g = {};
			f.cancel = function (a) {
				return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
			};return f;
		}];
	}function wa(a) {
		Ha && (Y.setAttribute("href", a), a = Y.href);Y.setAttribute("href", a);return { href: Y.href, protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "", host: Y.host, search: Y.search ? Y.search.replace(/^\?/, "") : "", hash: Y.hash ? Y.hash.replace(/^#/, "") : "", hostname: Y.hostname, port: Y.port, pathname: "/" === Y.pathname.charAt(0) ? Y.pathname : "/" + Y.pathname };
	}function ed(a) {
		a = E(a) ? wa(a) : a;return a.protocol === wd.protocol && a.host === wd.host;
	}function vf() {
		this.$get = na(S);
	}function xd(a) {
		function b(a) {
			try {
				return decodeURIComponent(a);
			} catch (b) {
				return a;
			}
		}var d = a[0] || {},
		    c = {},
		    e = "";return function () {
			var a, g, h, k, l;a = d.cookie || "";if (a !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), q(c[l]) && (c[l] = b(g.substring(k + 1))));return c;
		};
	}function zf() {
		this.$get = xd;
	}function Jc(a) {
		function b(d, c) {
			if (H(d)) {
				var e = {};n(d, function (a, c) {
					e[c] = b(c, a);
				});return e;
			}return a.factory(d + "Filter", c);
		}this.register = b;this.$get = ["$injector", function (a) {
			return function (b) {
				return a.get(b + "Filter");
			};
		}];b("currency", yd);b("date", zd);b("filter", bg);b("json", cg);b("limitTo", dg);b("lowercase", eg);b("number", Ad);b("orderBy", Bd);b("uppercase", fg);
	}function bg() {
		return function (a, b, d) {
			if (!za(a)) {
				if (null == a) return a;throw G("filter")("notarray", a);
			}var c;switch (hc(b)) {case "function":
					break;case "boolean":case "null":case "number":case "string":
					c = !0;case "object":
					b = gg(b, d, c);break;default:
					return a;}return Array.prototype.filter.call(a, b);
		};
	}function gg(a, b, d) {
		var c = H(a) && "$" in a;!0 === b ? b = ma : z(b) || (b = function (a, b) {
			if (q(a)) return !1;if (null === a || null === b) return a === b;if (H(b) || H(a) && !qc(a)) return !1;a = F("" + a);b = F("" + b);return -1 !== a.indexOf(b);
		});return function (e) {
			return c && !H(e) ? Ka(e, a.$, b, !1) : Ka(e, a, b, d);
		};
	}function Ka(_x3, _x4, _x5, _x6, _x7) {
		var _again2 = true;

		_function2: while (_again2) {
			var a = _x3,
			    b = _x4,
			    d = _x5,
			    c = _x6,
			    e = _x7;
			_again2 = false;
			var f = hc(a),
			    g = hc(b);if ("string" === g && "!" === b.charAt(0)) return !Ka(a, b.substring(1), d, c);if (I(a)) return a.some(function (a) {
				return Ka(a, b, d, c);
			});
			switch (f) {case "object":
					var h;if (c) {
						for (h in a) if ("$" !== h.charAt(0) && Ka(a[h], b, d, !0)) return !0;if (e) {
							return !1;
						} else {
							_x3 = a;
							_x4 = b;
							_x5 = d;
							_x6 = !1;
							_x7 = undefined;
							_again2 = true;
							f = g = h = undefined;
							continue _function2;
						}
					}if ("object" === g) {
						for (h in b) if ((e = b[h], !z(e) && !q(e) && (f = "$" === h, !Ka(f ? a : a[h], e, d, f, f)))) return !1;return !0;
					}return d(a, b);case "function":
					return !1;default:
					return d(a, b);}
		}
	}function hc(a) {
		return null === a ? "null" : typeof a;
	}function yd(a) {
		var b = a.NUMBER_FORMATS;return function (a, c, e) {
			q(c) && (c = b.CURRENCY_SYM);q(e) && (e = b.PATTERNS[1].maxFrac);return null == a ? a : Cd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
		};
	}function Ad(a) {
		var b = a.NUMBER_FORMATS;return function (a, c) {
			return null == a ? a : Cd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
		};
	}function Cd(a, b, d, c, e) {
		if (H(a)) return "";var f = 0 > a;a = Math.abs(a);var g = Infinity === a;if (!g && !isFinite(a)) return "";var h = a + "",
		    k = "",
		    l = !1,
		    m = [];g && (k = "∞");if (!g && -1 !== h.indexOf("e")) {
			var r = h.match(/([\d\.]+)e(-?)(\d+)/);r && "-" == r[2] && r[3] > e + 1 ? a = 0 : (k = h, l = !0);
		}if (g || l) 0 < e && 1 > a && (k = a.toFixed(e), a = parseFloat(k), k = k.replace(ic, c));else {
			g = (h.split(ic)[1] || "").length;
			q(e) && (e = Math.min(Math.max(b.minFrac, g), b.maxFrac));a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);var g = ("" + a).split(ic),
			    h = g[0],
			    g = g[1] || "",
			    r = 0,
			    t = b.lgSize,
			    n = b.gSize;if (h.length >= t + n) for (r = h.length - t, l = 0; l < r; l++) 0 === (r - l) % n && 0 !== l && (k += d), k += h.charAt(l);for (l = r; l < h.length; l++) 0 === (h.length - l) % t && 0 !== l && (k += d), k += h.charAt(l);for (; g.length < e;) g += "0";e && "0" !== e && (k += c + g.substr(0, e));
		}0 === a && (f = !1);m.push(f ? b.negPre : b.posPre, k, f ? b.negSuf : b.posSuf);return m.join("");
	}function Gb(a, b, d) {
		var c = "";
		0 > a && (c = "-", a = -a);for (a = "" + a; a.length < b;) a = "0" + a;d && (a = a.substr(a.length - b));return c + a;
	}function ca(a, b, d, c) {
		d = d || 0;return function (e) {
			e = e["get" + a]();if (0 < d || e > -d) e += d;0 === e && -12 == d && (e = 12);return Gb(e, b, c);
		};
	}function Hb(a, b) {
		return function (d, c) {
			var e = d["get" + a](),
			    f = sb(b ? "SHORT" + a : a);return c[f][e];
		};
	}function Dd(a) {
		var b = new Date(a, 0, 1).getDay();return new Date(a, 0, (4 >= b ? 5 : 12) - b);
	}function Ed(a) {
		return function (b) {
			var d = Dd(b.getFullYear());b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;b = 1 + Math.round(b / 6048E5);return Gb(b, a);
		};
	}function jc(a, b) {
		return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
	}function zd(a) {
		function b(a) {
			var b;if (b = a.match(d)) {
				a = new Date(0);var f = 0,
				    g = 0,
				    h = b[8] ? a.setUTCFullYear : a.setFullYear,
				    k = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = ea(b[9] + b[10]), g = ea(b[9] + b[11]));h.call(a, ea(b[1]), ea(b[2]) - 1, ea(b[3]));f = ea(b[4] || 0) - f;g = ea(b[5] || 0) - g;h = ea(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));k.call(a, f, g, h, b);
			}return a;
		}var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function (c, d, f) {
			var g = "",
			    h = [],
			    k,
			    l;d = d || "mediumDate";d = a.DATETIME_FORMATS[d] || d;E(c) && (c = hg.test(c) ? ea(c) : b(c));Q(c) && (c = new Date(c));if (!da(c) || !isFinite(c.getTime())) return c;for (; d;) (l = ig.exec(d)) ? (h = cb(h, l, 1), d = h.pop()) : (h.push(d), d = null);var m = c.getTimezoneOffset();f && (m = vc(f, c.getTimezoneOffset()), c = Pb(c, f, !0));n(h, function (b) {
				k = jg[b];g += k ? k(c, a.DATETIME_FORMATS, m) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
			});return g;
		};
	}function cg() {
		return function (a, b) {
			q(b) && (b = 2);return db(a, b);
		};
	}function dg() {
		return function (a, b, d) {
			b = Infinity === Math.abs(Number(b)) ? Number(b) : ea(b);if (isNaN(b)) return a;Q(a) && (a = a.toString());if (!I(a) && !E(a)) return a;d = !d || isNaN(d) ? 0 : ea(d);d = 0 > d ? Math.max(0, a.length + d) : d;return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d);
		};
	}function Bd(a) {
		function b(b, d) {
			d = d ? -1 : 1;return b.map(function (b) {
				var c = 1,
				    h = Ya;if (z(b)) h = b;else if (E(b)) {
					if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);if ("" !== b && (h = a(b), h.constant)) var k = h(),
					    h = function h(a) {
						return a[k];
					};
				}return { get: h,
					descending: c * d };
			});
		}function d(a) {
			switch (typeof a) {case "number":case "boolean":case "string":
					return !0;default:
					return !1;}
		}return function (a, e, f) {
			if (!za(a)) return a;I(e) || (e = [e]);0 === e.length && (e = ["+"]);var g = b(e, f);g.push({ get: function get() {
					return {};
				}, descending: f ? -1 : 1 });a = Array.prototype.map.call(a, function (a, b) {
				return { value: a, predicateValues: g.map(function (c) {
						var e = c.get(a);c = typeof e;if (null === e) c = "string", e = "null";else if ("string" === c) e = e.toLowerCase();else if ("object" === c) a: {
							if ("function" === typeof e.valueOf && (e = e.valueOf(), d(e))) break a;if (qc(e) && (e = e.toString(), d(e))) break a;e = b;
						}return { value: e, type: c };
					}) };
			});a.sort(function (a, b) {
				for (var c = 0, d = 0, e = g.length; d < e; ++d) {
					var c = a.predicateValues[d],
					    f = b.predicateValues[d],
					    n = 0;c.type === f.type ? c.value !== f.value && (n = c.value < f.value ? -1 : 1) : n = c.type < f.type ? -1 : 1;if (c = n * g[d].descending) break;
				}return c;
			});return a = a.map(function (a) {
				return a.value;
			});
		};
	}function La(a) {
		z(a) && (a = { link: a });a.restrict = a.restrict || "AC";return na(a);
	}function Fd(a, b, d, c, e) {
		var f = this,
		    g = [];f.$error = {};f.$$success = {};f.$pending = u;f.$name = e(b.name || b.ngForm || "")(d);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;f.$$parentForm = Ib;f.$rollbackViewValue = function () {
			n(g, function (a) {
				a.$rollbackViewValue();
			});
		};f.$commitViewValue = function () {
			n(g, function (a) {
				a.$commitViewValue();
			});
		};f.$addControl = function (a) {
			Ra(a.$name, "input");g.push(a);a.$name && (f[a.$name] = a);a.$$parentForm = f;
		};f.$$renameControl = function (a, b) {
			var c = a.$name;f[c] === a && delete f[c];f[b] = a;a.$name = b;
		};f.$removeControl = function (a) {
			a.$name && f[a.$name] === a && delete f[a.$name];n(f.$pending, function (b, c) {
				f.$setValidity(c, null, a);
			});n(f.$error, function (b, c) {
				f.$setValidity(c, null, a);
			});n(f.$$success, function (b, c) {
				f.$setValidity(c, null, a);
			});ab(g, a);a.$$parentForm = Ib;
		};Gd({ ctrl: this, $element: a, set: function set(a, b, c) {
				var d = a[b];d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
			}, unset: function unset(a, b, c) {
				var d = a[b];d && (ab(d, c), 0 === d.length && delete a[b]);
			}, $animate: c });f.$setDirty = function () {
			c.removeClass(a, Wa);c.addClass(a, Jb);f.$dirty = !0;f.$pristine = !1;f.$$parentForm.$setDirty();
		};
		f.$setPristine = function () {
			c.setClass(a, Wa, Jb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;n(g, function (a) {
				a.$setPristine();
			});
		};f.$setUntouched = function () {
			n(g, function (a) {
				a.$setUntouched();
			});
		};f.$setSubmitted = function () {
			c.addClass(a, "ng-submitted");f.$submitted = !0;f.$$parentForm.$setSubmitted();
		};
	}function kc(a) {
		a.$formatters.push(function (b) {
			return a.$isEmpty(b) ? b : b.toString();
		});
	}function jb(a, b, d, c, e, f) {
		var g = F(b[0].type);if (!e.android) {
			var h = !1;b.on("compositionstart", function (a) {
				h = !0;
			});
			b.on("compositionend", function () {
				h = !1;k();
			});
		}var k = function k(a) {
			l && (f.defer.cancel(l), l = null);if (!h) {
				var e = b.val();a = a && a.type;"password" === g || d.ngTrim && "false" === d.ngTrim || (e = U(e));(c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
			}
		};if (e.hasEvent("input")) b.on("input", k);else {
			var l,
			    m = function m(a, b, c) {
				l || (l = f.defer(function () {
					l = null;b && b.value === c || k(a);
				}));
			};b.on("keydown", function (a) {
				var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
			});if (e.hasEvent("paste")) b.on("paste cut", m);
		}b.on("change", k);c.$render = function () {
			var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;b.val() !== a && b.val(a);
		};
	}function Kb(a, b) {
		return function (d, c) {
			var e, f;if (da(d)) return d;if (E(d)) {
				'"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));if (kg.test(d)) return new Date(d);a.lastIndex = 0;if (e = a.exec(d)) return e.shift(), f = c ? { yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0,
					mm: 0, ss: 0, sss: 0 }, n(e, function (a, c) {
					c < b.length && (f[b[c]] = +a);
				}), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
			}return NaN;
		};
	}function kb(a, b, d, c) {
		return function (e, f, g, h, k, l, m) {
			function r(a) {
				return a && !(a.getTime && a.getTime() !== a.getTime());
			}function n(a) {
				return y(a) && !da(a) ? d(a) || u : a;
			}Hd(e, f, g, h);jb(e, f, g, h, k, l);var A = h && h.$options && h.$options.timezone,
			    v;h.$$parserName = a;h.$parsers.push(function (a) {
				return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, v), A && (a = Pb(a, A)), a) : u;
			});h.$formatters.push(function (a) {
				if (a && !da(a)) throw lb("datefmt", a);if (r(a)) return (v = a) && A && (v = Pb(v, A, !0)), m("date")(a, c, A);v = null;return "";
			});if (y(g.min) || g.ngMin) {
				var s;h.$validators.min = function (a) {
					return !r(a) || q(s) || d(a) >= s;
				};g.$observe("min", function (a) {
					s = n(a);h.$validate();
				});
			}if (y(g.max) || g.ngMax) {
				var p;h.$validators.max = function (a) {
					return !r(a) || q(p) || d(a) <= p;
				};g.$observe("max", function (a) {
					p = n(a);h.$validate();
				});
			}
		};
	}function Hd(a, b, d, c) {
		(c.$$hasNativeValidators = H(b[0].validity)) && c.$parsers.push(function (a) {
			var c = b.prop("validity") || {};
			return c.badInput && !c.typeMismatch ? u : a;
		});
	}function Id(a, b, d, c, e) {
		if (y(c)) {
			a = a(c);if (!a.constant) throw lb("constexpr", d, c);return a(b);
		}return e;
	}function lc(a, b) {
		a = "ngClass" + a;return ["$animate", function (d) {
			function c(a, b) {
				var c = [],
				    d = 0;a: for (; d < a.length; d++) {
					for (var e = a[d], m = 0; m < b.length; m++) if (e == b[m]) continue a;c.push(e);
				}return c;
			}function e(a) {
				var b = [];return I(a) ? (n(a, function (a) {
					b = b.concat(e(a));
				}), b) : E(a) ? a.split(" ") : H(a) ? (n(a, function (a, c) {
					a && (b = b.concat(c.split(" ")));
				}), b) : a;
			}return { restrict: "AC",
				link: function link(f, g, h) {
					function k(a, b) {
						var c = g.data("$classCounts") || $(),
						    d = [];n(a, function (a) {
							if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
						});g.data("$classCounts", c);return d.join(" ");
					}function l(a) {
						if (!0 === b || f.$index % 2 === b) {
							var l = e(a || []);if (!m) {
								var n = k(l, 1);h.$addClass(n);
							} else if (!ma(a, m)) {
								var q = e(m),
								    n = c(l, q),
								    l = c(q, l),
								    n = k(n, 1),
								    l = k(l, -1);n && n.length && d.addClass(g, n);l && l.length && d.removeClass(g, l);
							}
						}m = ia(a);
					}var m;f.$watch(h[a], l, !0);h.$observe("class", function (b) {
						l(f.$eval(h[a]));
					});"ngClass" !== a && f.$watch("$index", function (c, d) {
						var g = c & 1;if (g !== (d & 1)) {
							var l = e(f.$eval(h[a]));g === b ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g));
						}
					});
				} };
		}];
	}function Gd(a) {
		function b(a, b) {
			b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
		}function d(a, c) {
			a = a ? "-" + zc(a, "-") : "";b(mb + a, !0 === c);b(Jd + a, !1 === c);
		}var c = a.ctrl,
		    e = a.$element,
		    f = {},
		    g = a.set,
		    h = a.unset,
		    k = a.$animate;f[Jd] = !(f[mb] = e.hasClass(mb));c.$setValidity = function (a, e, f) {
			q(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Kd(c.$pending) && (c.$pending = u));$a(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));c.$pending ? (b(Ld, !0), c.$valid = c.$invalid = u, d("", null)) : (b(Ld, !1), c.$valid = Kd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));e = c.$pending && c.$pending[a] ? u : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;d(a, e);c.$$parentForm.$setValidity(a, e, c);
		};
	}function Kd(a) {
		if (a) for (var b in a) if (a.hasOwnProperty(b)) return !1;return !0;
	}var lg = /^\/(.+)\/([a-z]*)$/,
	    F = function F(a) {
		return E(a) ? a.toLowerCase() : a;
	},
	    qa = Object.prototype.hasOwnProperty,
	    sb = function sb(a) {
		return E(a) ? a.toUpperCase() : a;
	},
	    Ha,
	    B,
	    oa,
	    ra = [].slice,
	    Pf = [].splice,
	    mg = [].push,
	    sa = Object.prototype.toString,
	    rc = Object.getPrototypeOf,
	    Aa = G("ng"),
	    fa = S.angular || (S.angular = {}),
	    Sb,
	    nb = 0;Ha = X.documentMode;x.$inject = [];Ya.$inject = [];var I = Array.isArray,
	    Vd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
	    U = function U(a) {
		return E(a) ? a.trim() : a;
	},
	    ud = function ud(a) {
		return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
	},
	    Ba = function Ba() {
		if (!y(Ba.rules)) {
			var a = X.querySelector("[ng-csp]") || X.querySelector("[data-ng-csp]");if (a) {
				var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");Ba.rules = { noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style") };
			} else {
				a = Ba;try {
					new Function(""), b = !1;
				} catch (d) {
					b = !0;
				}a.rules = { noUnsafeEval: b, noInlineStyle: !1 };
			}
		}return Ba.rules;
	},
	    pb = function pb() {
		if (y(pb.name_)) return pb.name_;var a,
		    b,
		    d = Oa.length,
		    c,
		    e;for (b = 0; b < d; ++b) if ((c = Oa[b], a = X.querySelector("[" + c.replace(":", "\\:") + "jq]"))) {
			e = a.getAttribute(c + "jq");break;
		}return pb.name_ = e;
	},
	    Oa = ["ng-", "data-ng-", "ng:", "x-ng-"],
	    be = /[A-Z]/g,
	    Ac = !1,
	    Rb,
	    Na = 3,
	    fe = { full: "1.4.8", major: 1, minor: 4, dot: 8, codeName: "ice-manipulation" };N.expando = "ng339";var gb = N.cache = {},
	    Ff = 1;N._data = function (a) {
		return this.cache[a[this.expando]] || {};
	};var Af = /([\:\-\_]+(.))/g,
	    Bf = /^moz([A-Z])/,
	    xb = { mouseleave: "mouseout", mouseenter: "mouseover" },
	    Ub = G("jqLite"),
	    Ef = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
	    Tb = /<|&#?\w+;/,
	    Cf = /<([\w:-]+)/,
	    Df = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	    ka = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ka.optgroup = ka.option;ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead;ka.th = ka.td;var Kf = Node.prototype.contains || function (a) {
		return !!(this.compareDocumentPosition(a) & 16);
	},
	    Pa = N.prototype = { ready: function ready(a) {
			function b() {
				d || (d = !0, a());
			}var d = !1;"complete" === X.readyState ? setTimeout(b) : (this.on("DOMContentLoaded", b), N(S).on("load", b));
		}, toString: function toString() {
			var a = [];n(this, function (b) {
				a.push("" + b);
			});return "[" + a.join(", ") + "]";
		}, eq: function eq(a) {
			return 0 <= a ? B(this[a]) : B(this[this.length + a]);
		}, length: 0, push: mg, sort: [].sort, splice: [].splice },
	    Cb = {};n("multiple selected checked disabled readOnly required open".split(" "), function (a) {
		Cb[F(a)] = a;
	});var Rc = {};n("input select option textarea button form details".split(" "), function (a) {
		Rc[a] = !0;
	});var Zc = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern" };n({ data: Wb, removeData: vb, hasData: function hasData(a) {
			for (var b in gb[a.ng339]) return !0;return !1;
		} }, function (a, b) {
		N[b] = a;
	});n({ data: Wb, inheritedData: Bb, scope: function scope(a) {
			return B.data(a, "$scope") || Bb(a.parentNode || a, ["$isolateScope", "$scope"]);
		}, isolateScope: function isolateScope(a) {
			return B.data(a, "$isolateScope") || B.data(a, "$isolateScopeNoTemplate");
		}, controller: Oc, injector: function injector(a) {
			return Bb(a, "$injector");
		}, removeAttr: function removeAttr(a, b) {
			a.removeAttribute(b);
		}, hasClass: yb, css: function css(a, b, d) {
			b = fb(b);if (y(d)) a.style[b] = d;else return a.style[b];
		}, attr: function attr(a, b, d) {
			var c = a.nodeType;if (c !== Na && 2 !== c && 8 !== c) if ((c = F(b), Cb[c])) if (y(d)) d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c));else return a[b] || (a.attributes.getNamedItem(b) || x).specified ? c : u;else if (y(d)) a.setAttribute(b, d);else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? u : a;
		}, prop: function prop(a, b, d) {
			if (y(d)) a[b] = d;else return a[b];
		},
		text: (function () {
			function a(a, d) {
				if (q(d)) {
					var c = a.nodeType;return 1 === c || c === Na ? a.textContent : "";
				}a.textContent = d;
			}a.$dv = "";return a;
		})(), val: function val(a, b) {
			if (q(b)) {
				if (a.multiple && "select" === ta(a)) {
					var d = [];n(a.options, function (a) {
						a.selected && d.push(a.value || a.text);
					});return 0 === d.length ? null : d;
				}return a.value;
			}a.value = b;
		}, html: function html(a, b) {
			if (q(b)) return a.innerHTML;ub(a, !0);a.innerHTML = b;
		}, empty: Pc }, function (a, b) {
		N.prototype[b] = function (b, c) {
			var e,
			    f,
			    g = this.length;if (a !== Pc && q(2 == a.length && a !== yb && a !== Oc ? b : c)) {
				if (H(b)) {
					for (e = 0; e < g; e++) if (a === Wb) a(this[e], b);else for (f in b) a(this[e], f, b[f]);return this;
				}e = a.$dv;g = q(e) ? Math.min(g, 1) : g;for (f = 0; f < g; f++) {
					var h = a(this[f], b, c);e = e ? e + h : h;
				}return e;
			}for (e = 0; e < g; e++) a(this[e], b, c);return this;
		};
	});n({ removeData: vb, on: function on(a, b, d, c) {
			if (y(c)) throw Ub("onargs");if (Kc(a)) {
				c = wb(a, !0);var e = c.events,
				    f = c.handle;f || (f = c.handle = Hf(a, e));c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];for (var g = c.length, h = function h(b, c, g) {
					var h = e[b];h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));h.push(d);
				}; g--;) b = c[g], xb[b] ? (h(xb[b], Jf), h(b, u, !0)) : h(b);
			}
		}, off: Nc, one: function one(a, b, d) {
			a = B(a);a.on(b, function e() {
				a.off(b, d);a.off(b, e);
			});a.on(b, d);
		}, replaceWith: function replaceWith(a, b) {
			var d,
			    c = a.parentNode;ub(a);n(new N(b), function (b) {
				d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);d = b;
			});
		}, children: function children(a) {
			var b = [];n(a.childNodes, function (a) {
				1 === a.nodeType && b.push(a);
			});return b;
		}, contents: function contents(a) {
			return a.contentDocument || a.childNodes || [];
		}, append: function append(a, b) {
			var d = a.nodeType;if (1 === d || 11 === d) {
				b = new N(b);for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d]);
			}
		}, prepend: function prepend(a, b) {
			if (1 === a.nodeType) {
				var d = a.firstChild;n(new N(b), function (b) {
					a.insertBefore(b, d);
				});
			}
		}, wrap: function wrap(a, b) {
			b = B(b).eq(0).clone()[0];var d = a.parentNode;d && d.replaceChild(b, a);b.appendChild(a);
		}, remove: Xb, detach: function detach(a) {
			Xb(a, !0);
		}, after: function after(a, b) {
			var d = a,
			    c = a.parentNode;b = new N(b);for (var e = 0, f = b.length; e < f; e++) {
				var g = b[e];c.insertBefore(g, d.nextSibling);d = g;
			}
		}, addClass: Ab, removeClass: zb,
		toggleClass: function toggleClass(a, b, d) {
			b && n(b.split(" "), function (b) {
				var e = d;q(e) && (e = !yb(a, b));(e ? Ab : zb)(a, b);
			});
		}, parent: function parent(a) {
			return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
		}, next: function next(a) {
			return a.nextElementSibling;
		}, find: function find(a, b) {
			return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
		}, clone: Vb, triggerHandler: function triggerHandler(a, b, d) {
			var c,
			    e,
			    f = b.type || b,
			    g = wb(a);if (g = (g = g && g.events) && g[f]) c = { preventDefault: function preventDefault() {
					this.defaultPrevented = !0;
				}, isDefaultPrevented: function isDefaultPrevented() {
					return !0 === this.defaultPrevented;
				},
				stopImmediatePropagation: function stopImmediatePropagation() {
					this.immediatePropagationStopped = !0;
				}, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
					return !0 === this.immediatePropagationStopped;
				}, stopPropagation: x, type: f, target: a }, b.type && (c = M(c, b)), b = ia(g), e = d ? [c].concat(d) : [c], n(b, function (b) {
				c.isImmediatePropagationStopped() || b.apply(a, e);
			});
		} }, function (a, b) {
		N.prototype[b] = function (b, c, e) {
			for (var f, g = 0, h = this.length; g < h; g++) q(f) ? (f = a(this[g], b, c, e), y(f) && (f = B(f))) : Mc(f, a(this[g], b, c, e));return y(f) ? f : this;
		};N.prototype.bind = N.prototype.on;
		N.prototype.unbind = N.prototype.off;
	});Sa.prototype = { put: function put(a, b) {
			this[Ca(a, this.nextUid)] = b;
		}, get: function get(a) {
			return this[Ca(a, this.nextUid)];
		}, remove: function remove(a) {
			var b = this[a = Ca(a, this.nextUid)];delete this[a];return b;
		} };var yf = [function () {
		this.$get = [function () {
			return Sa;
		}];
	}],
	    Tc = /^[^\(]*\(\s*([^\)]*)\)/m,
	    ng = /,/,
	    og = /^\s*(_?)(\S+?)\1\s*$/,
	    Sc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
	    Da = G("$injector");eb.$$annotate = function (a, b, d) {
		var c;if ("function" === typeof a) {
			if (!(c = a.$inject)) {
				c = [];if (a.length) {
					if (b) throw (E(d) && d || (d = a.name || Lf(a)), Da("strictdi", d));b = a.toString().replace(Sc, "");b = b.match(Tc);n(b[1].split(ng), function (a) {
						a.replace(og, function (a, b, d) {
							c.push(d);
						});
					});
				}a.$inject = c;
			}
		} else I(a) ? (b = a.length - 1, Qa(a[b], "fn"), c = a.slice(0, b)) : Qa(a, "fn", !0);return c;
	};var Md = G("$animate"),
	    Ue = function Ue() {
		this.$get = ["$q", "$$rAF", function (a, b) {
			function d() {}d.all = x;d.chain = x;d.prototype = { end: x, cancel: x, resume: x, pause: x, complete: x, then: function then(c, d) {
					return a(function (a) {
						b(function () {
							a();
						});
					}).then(c, d);
				} };return d;
		}];
	},
	    Te = function Te() {
		var a = new Sa(),
		    b = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
			function e(a, b, c) {
				var d = !1;b && (b = E(b) ? b.split(" ") : I(b) ? b : [], n(b, function (b) {
					b && (d = !0, a[b] = c);
				}));return d;
			}function f() {
				n(b, function (b) {
					var c = a.get(b);if (c) {
						var d = Mf(b.attr("class")),
						    e = "",
						    f = "";n(c, function (a, b) {
							a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
						});n(b, function (a) {
							e && Ab(a, e);f && zb(a, f);
						});a.remove(b);
					}
				});b.length = 0;
			}return { enabled: x, on: x, off: x, pin: x, push: function push(g, h, k, l) {
					l && l();k = k || {};k.from && g.css(k.from);
					k.to && g.css(k.to);if (k.addClass || k.removeClass) if ((h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l)) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);return new d();
				} };
		}];
	},
	    Re = ["$provide", function (a) {
		var b = this;this.$$registeredAnimations = Object.create(null);this.register = function (d, c) {
			if (d && "." !== d.charAt(0)) throw Md("notcsel", d);var e = d + "-animation";b.$$registeredAnimations[d.substr(1)] = e;a.factory(e, c);
		};this.classNameFilter = function (a) {
			if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Md("nongcls", "ng-animate");return this.$$classNameFilter;
		};this.$get = ["$$animateQueue", function (a) {
			function b(a, c, d) {
				if (d) {
					var h;a: {
						for (h = 0; h < d.length; h++) {
							var k = d[h];if (1 === k.nodeType) {
								h = k;break a;
							}
						}h = void 0;
					}!h || h.parentNode || h.previousElementSibling || (d = null);
				}d ? d.after(a) : c.prepend(a);
			}return { on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
					a.end && a.end();
				}, enter: function enter(e, f, g, h) {
					f = f && B(f);g = g && B(g);f = f || g.parent();b(e, f, g);return a.push(e, "enter", Ea(h));
				}, move: function move(e, f, g, h) {
					f = f && B(f);g = g && B(g);f = f || g.parent();b(e, f, g);return a.push(e, "move", Ea(h));
				}, leave: function leave(b, c) {
					return a.push(b, "leave", Ea(c), function () {
						b.remove();
					});
				}, addClass: function addClass(b, c, g) {
					g = Ea(g);g.addClass = hb(g.addclass, c);return a.push(b, "addClass", g);
				}, removeClass: function removeClass(b, c, g) {
					g = Ea(g);g.removeClass = hb(g.removeClass, c);return a.push(b, "removeClass", g);
				}, setClass: function setClass(b, c, g, h) {
					h = Ea(h);h.addClass = hb(h.addClass, c);h.removeClass = hb(h.removeClass, g);return a.push(b, "setClass", h);
				}, animate: function animate(b, c, g, h, k) {
					k = Ea(k);k.from = k.from ? M(k.from, c) : c;k.to = k.to ? M(k.to, g) : g;k.tempClasses = hb(k.tempClasses, h || "ng-inline-animate");return a.push(b, "animate", k);
				} };
		}];
	}],
	    Se = function Se() {
		this.$get = ["$$rAF", "$q", function (a, b) {
			var d = function d() {};d.prototype = { done: function done(a) {
					this.defer && this.defer[!0 === a ? "reject" : "resolve"]();
				}, end: function end() {
					this.done();
				}, cancel: function cancel() {
					this.done(!0);
				}, getPromise: function getPromise() {
					this.defer || (this.defer = b.defer());return this.defer.promise;
				}, then: function then(a, b) {
					return this.getPromise().then(a, b);
				}, "catch": function _catch(a) {
					return this.getPromise()["catch"](a);
				}, "finally": function _finally(a) {
					return this.getPromise()["finally"](a);
				} };return function (b, e) {
				function f() {
					a(function () {
						e.addClass && (b.addClass(e.addClass), e.addClass = null);e.removeClass && (b.removeClass(e.removeClass), e.removeClass = null);e.to && (b.css(e.to), e.to = null);g || h.done();g = !0;
					});return h;
				}e.cleanupStyles && (e.from = e.to = null);e.from && (b.css(e.from), e.from = null);var g,
				    h = new d();return { start: f, end: f };
			};
		}];
	},
	    ha = G("$compile");Cc.$inject = ["$provide", "$$sanitizeUriProvider"];var Vc = /^((?:x|data)[\:\-_])/i,
	    Qf = G("$controller"),
	    Uc = /^(\S+)(\s+as\s+(\w+))?$/,
	    $e = function $e() {
		this.$get = ["$document", function (a) {
			return function (b) {
				b ? !b.nodeType && b instanceof B && (b = b[0]) : b = a[0].body;return b.offsetWidth + 1;
			};
		}];
	},
	    $c = "application/json",
	    ac = { "Content-Type": $c + ";charset=utf-8" },
	    Sf = /^\[|^\{(?!\{)/,
	    Tf = { "[": /]$/, "{": /}$/ },
	    Rf = /^\)\]\}',?\n/,
	    pg = G("$http"),
	    dd = function dd(a) {
		return function () {
			throw pg("legacy", a);
		};
	},
	    Ja = fa.$interpolateMinErr = G("$interpolate");Ja.throwNoconcat = function (a) {
		throw Ja("noconcat", a);
	};Ja.interr = function (a, b) {
		return Ja("interr", a, b.toString());
	};var qg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
	    Vf = { http: 80, https: 443, ftp: 21 },
	    Db = G("$location"),
	    rg = { $$html5: !1, $$replace: !1, absUrl: Eb("$$absUrl"), url: function url(a) {
			if (q(a)) return this.$$url;var b = qg.exec(a);(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));(b[2] || b[1] || "" === a) && this.search(b[3] || "");this.hash(b[5] || "");return this;
		}, protocol: Eb("$$protocol"),
		host: Eb("$$host"), port: Eb("$$port"), path: id("$$path", function (a) {
			a = null !== a ? a.toString() : "";return "/" == a.charAt(0) ? a : "/" + a;
		}), search: function search(a, b) {
			switch (arguments.length) {case 0:
					return this.$$search;case 1:
					if (E(a) || Q(a)) a = a.toString(), this.$$search = xc(a);else if (H(a)) a = bb(a, {}), n(a, function (b, c) {
						null == b && delete a[c];
					}), this.$$search = a;else throw Db("isrcharg");break;default:
					q(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;}this.$$compose();return this;
		}, hash: id("$$hash", function (a) {
			return null !== a ? a.toString() : "";
		}), replace: function replace() {
			this.$$replace = !0;return this;
		} };n([hd, dc, cc], function (a) {
		a.prototype = Object.create(rg);a.prototype.state = function (b) {
			if (!arguments.length) return this.$$state;if (a !== cc || !this.$$html5) throw Db("nostate");this.$$state = q(b) ? null : b;return this;
		};
	});var ba = G("$parse"),
	    Wf = Function.prototype.call,
	    Xf = Function.prototype.apply,
	    Yf = Function.prototype.bind,
	    Lb = $();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
		Lb[a] = !0;
	});var sg = { n: "\n", f: "\f", r: "\r",
		t: "\t", v: "\v", "'": "'", '"': '"' },
	    fc = function fc(a) {
		this.options = a;
	};fc.prototype = { constructor: fc, lex: function lex(a) {
			this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) if ((a = this.text.charAt(this.index), '"' === a || "'" === a)) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdent(a)) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
				var b = a + this.peek(),
				    d = b + this.peek(2),
				    c = Lb[b],
				    e = Lb[d];Lb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
			}return this.tokens;
		}, is: function is(a, b) {
			return -1 !== b.indexOf(a);
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
		}, throwError: function throwError(a, b, d) {
			d = d || this.index;b = y(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;throw ba("lexerr", a, b, this.text);
		}, readNumber: function readNumber() {
			for (var a = "", b = this.index; this.index < this.text.length;) {
				var d = F(this.text.charAt(this.index));if ("." == d || this.isNumber(d)) a += d;else {
					var c = this.peek();
					if ("e" == d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
				}this.index++;
			}this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
		}, readIdent: function readIdent() {
			for (var a = this.index; this.index < this.text.length;) {
				var b = this.text.charAt(this.index);if (!this.isIdent(b) && !this.isNumber(b)) break;this.index++;
			}this.tokens.push({ index: a,
				text: this.text.slice(a, this.index), identifier: !0 });
		}, readString: function readString(a) {
			var b = this.index;this.index++;for (var d = "", c = a, e = !1; this.index < this.text.length;) {
				var f = this.text.charAt(this.index),
				    c = c + f;if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += sg[f] || f, e = !1;else if ("\\" === f) e = !0;else {
					if (f === a) {
						this.index++;this.tokens.push({ index: b, text: c, constant: !0,
							value: d });return;
					}d += f;
				}this.index++;
			}this.throwError("Unterminated quote", b);
		} };var s = function s(a, b) {
		this.lexer = a;this.options = b;
	};s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";s.ThisExpression = "ThisExpression";s.NGValueParameter = "NGValueParameter";s.prototype = { ast: function ast(a) {
			this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
		}, program: function program() {
			for (var a = [];;) if ((0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";"))) return { type: s.Program,
				body: a };
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
			    b,
			    d;return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), { type: s.ConditionalExpression, test: a, alternate: b, consequent: d }) : a;
		}, logicalOR: function logicalOR() {
			for (var a = this.logicalAND(); this.expect("||");) a = { type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND() };return a;
		}, logicalAND: function logicalAND() {
			for (var a = this.equality(); this.expect("&&");) a = { type: s.LogicalExpression, operator: "&&", left: a, right: this.equality() };return a;
		}, equality: function equality() {
			for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) a = { type: s.BinaryExpression,
				operator: b.text, left: a, right: this.relational() };return a;
		}, relational: function relational() {
			for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.additive() };return a;
		}, additive: function additive() {
			for (var a = this.multiplicative(), b; b = this.expect("+", "-");) a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.multiplicative() };return a;
		}, multiplicative: function multiplicative() {
			for (var a = this.unary(), b; b = this.expect("*", "/", "%");) a = { type: s.BinaryExpression, operator: b.text,
				left: a, right: this.unary() };return a;
		}, unary: function unary() {
			var a;return (a = this.expect("+", "-", "!")) ? { type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
		}, primary: function primary() {
			var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = bb(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = { type: s.CallExpression, callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === b.text ? (a = { type: s.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === b.text ? a = { type: s.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");return a;
		}, filter: function filter(a) {
			a = [a];for (var b = { type: s.CallExpression, callee: this.identifier(),
				arguments: a, filter: !0 }; this.expect(":");) a.push(this.expression());return b;
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
					if (this.peek("]")) break;
					a.push(this.expression());
				} while (this.expect(","));
			}this.consume("]");return { type: s.ArrayExpression, elements: a };
		}, object: function object() {
			var a = [],
			    b;if ("}" !== this.peekToken().text) {
				do {
					if (this.peek("}")) break;b = { type: s.Property, kind: "init" };this.peek().constant ? b.key = this.constant() : this.peek().identifier ? b.key = this.identifier() : this.throwError("invalid key", this.peek());this.consume(":");b.value = this.expression();a.push(b);
				} while (this.expect(","));
			}this.consume("}");return { type: s.ObjectExpression, properties: a };
		},
		throwError: function throwError(a, b) {
			throw ba("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
		}, consume: function consume(a) {
			if (0 === this.tokens.length) throw ba("ueoe", this.text);var b = this.expect(a);b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return b;
		}, peekToken: function peekToken() {
			if (0 === this.tokens.length) throw ba("ueoe", this.text);return this.tokens[0];
		}, peek: function peek(a, b, d, c) {
			return this.peekAhead(0, a, b, d, c);
		}, peekAhead: function peekAhead(a, b, d, c, e) {
			if (this.tokens.length > a) {
				a = this.tokens[a];
				var f = a.text;if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
			}return !1;
		}, expect: function expect(a, b, d, c) {
			return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
		}, constants: { "true": { type: s.Literal, value: !0 }, "false": { type: s.Literal, value: !1 }, "null": { type: s.Literal, value: null }, undefined: { type: s.Literal, value: u }, "this": { type: s.ThisExpression } } };rd.prototype = { compile: function compile(a, b) {
			var d = this,
			    c = this.astBuilder.ast(a);this.state = { nextId: 0, filters: {}, expensiveChecks: b, fn: { vars: [], body: [], own: {} }, assign: { vars: [],
					body: [], own: {} }, inputs: [] };W(c, d.$filter);var e = "",
			    f;this.stage = "assign";if (f = pd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");f = nd(c.body);d.stage = "inputs";n(f, function (a, b) {
				var c = "fn" + b;d.state[c] = { vars: [], body: [], own: {} };d.state.computing = c;var e = d.nextId();d.recurse(a, e);d.return_(e);d.state.inputs.push(c);a.watchId = b;
			});this.state.computing = "fn";this.stage = "main";this.recurse(c);e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";e = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e)(this.$filter, Va, xa, kd, jd, ld, Zf, md, a);this.state = this.stage = u;e.literal = qd(c);e.constant = c.constant;return e;
		}, USE: "use", STRICT: "strict", watchFns: function watchFns() {
			var a = [],
			    b = this.state.inputs,
			    d = this;n(b, function (b) {
				a.push("var " + b + "=" + d.generateFunction(b, "s"));
			});b.length && a.push("fn.inputs=[" + b.join(",") + "];");return a.join("");
		}, generateFunction: function generateFunction(a, b) {
			return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
		}, filterPrefix: function filterPrefix() {
			var a = [],
			    b = this;n(this.state.filters, function (d, c) {
				a.push(d + "=$filter(" + b.escape(c) + ")");
			});return a.length ? "var " + a.join(",") + ";" : "";
		}, varsPrefix: function varsPrefix(a) {
			return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
		}, body: function body(a) {
			return this.state[a].body.join("");
		}, recurse: function recurse(a, b, d, c, e, f) {
			var g,
			    h,
			    k = this,
			    l,
			    m;c = c || x;if (!f && y(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));else switch (a.type) {case s.Program:
					n(a.body, function (b, c) {
						k.recurse(b.expression, u, u, function (a) {
							h = a;
						});c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
					});break;case s.Literal:
					m = this.escape(a.value);this.assign(b, m);c(m);break;case s.UnaryExpression:
					this.recurse(a.argument, u, u, function (a) {
						h = a;
					});m = a.operator + "(" + this.ifDefined(h, 0) + ")";this.assign(b, m);c(m);break;case s.BinaryExpression:
					this.recurse(a.left, u, u, function (a) {
						g = a;
					});this.recurse(a.right, u, u, function (a) {
						h = a;
					});m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";this.assign(b, m);c(m);break;case s.LogicalExpression:
					b = b || this.nextId();k.recurse(a.left, b);k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));c(b);break;case s.ConditionalExpression:
					b = b || this.nextId();k.recurse(a.test, b);k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));c(b);break;case s.Identifier:
					b = b || this.nextId();d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);Va(a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
						k.if_("inputs" === k.stage || "s", function () {
							e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));k.assign(b, k.nonComputedMember("s", a.name));
						});
					}, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));(k.state.expensiveChecks || Fb(a.name)) && k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:
					g = d && (d.context = this.nextId()) || this.nextId();b = b || this.nextId();k.recurse(a.object, g, u, function () {
						k.if_(k.notNull(g), function () {
							if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h);else {
								Va(a.property.name);e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));m = k.nonComputedMember(g, a.property.name);if (k.state.expensiveChecks || Fb(a.property.name)) m = k.ensureSafeObject(m);k.assign(b, m);d && (d.computed = !1, d.name = a.property.name);
							}
						}, function () {
							k.assign(b, "undefined");
						});c(b);
					}, !!e);break;case s.CallExpression:
					b = b || this.nextId();a.filter ? (h = k.filter(a.callee.name), l = [], n(a.arguments, function (a) {
						var b = k.nextId();k.recurse(a, b);l.push(b);
					}), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
						k.if_(k.notNull(h), function () {
							k.addEnsureSafeFunction(h);n(a.arguments, function (a) {
								k.recurse(a, k.nextId(), u, function (a) {
									l.push(k.ensureSafeObject(a));
								});
							});g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";m = k.ensureSafeObject(m);k.assign(b, m);
						}, function () {
							k.assign(b, "undefined");
						});c(b);
					}));break;case s.AssignmentExpression:
					h = this.nextId();g = {};if (!od(a.left)) throw ba("lval");this.recurse(a.left, u, g, function () {
						k.if_(k.notNull(g.context), function () {
							k.recurse(a.right, h);k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));k.addEnsureSafeAssignContext(g.context);m = k.member(g.context, g.name, g.computed) + a.operator + h;k.assign(b, m);c(b || m);
						});
					}, 1);break;case s.ArrayExpression:
					l = [];n(a.elements, function (a) {
						k.recurse(a, k.nextId(), u, function (a) {
							l.push(a);
						});
					});
					m = "[" + l.join(",") + "]";this.assign(b, m);c(m);break;case s.ObjectExpression:
					l = [];n(a.properties, function (a) {
						k.recurse(a.value, k.nextId(), u, function (b) {
							l.push(k.escape(a.key.type === s.Identifier ? a.key.name : "" + a.key.value) + ":" + b);
						});
					});m = "{" + l.join(",") + "}";this.assign(b, m);c(m);break;case s.ThisExpression:
					this.assign(b, "s");c("s");break;case s.NGValueParameter:
					this.assign(b, "v"), c("v");}
		}, getHasOwnProperty: function getHasOwnProperty(a, b) {
			var d = a + "." + b,
			    c = this.current().own;c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));return c[d];
		}, assign: function assign(a, b) {
			if (a) return this.current().body.push(a, "=", b, ";"), a;
		}, filter: function filter(a) {
			this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];
		}, ifDefined: function ifDefined(a, b) {
			return "ifDefined(" + a + "," + this.escape(b) + ")";
		}, plus: function plus(a, b) {
			return "plus(" + a + "," + b + ")";
		}, return_: function return_(a) {
			this.current().body.push("return ", a, ";");
		}, if_: function if_(a, b, d) {
			if (!0 === a) b();else {
				var c = this.current().body;c.push("if(", a, "){");b();c.push("}");d && (c.push("else{"), d(), c.push("}"));
			}
		}, not: function not(a) {
			return "!(" + a + ")";
		}, notNull: function notNull(a) {
			return a + "!=null";
		}, nonComputedMember: function nonComputedMember(a, b) {
			return a + "." + b;
		}, computedMember: function computedMember(a, b) {
			return a + "[" + b + "]";
		}, member: function member(a, b, d) {
			return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
		}, addEnsureSafeObject: function addEnsureSafeObject(a) {
			this.current().body.push(this.ensureSafeObject(a), ";");
		}, addEnsureSafeMemberName: function addEnsureSafeMemberName(a) {
			this.current().body.push(this.ensureSafeMemberName(a), ";");
		},
		addEnsureSafeFunction: function addEnsureSafeFunction(a) {
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
		}, lazyRecurse: function lazyRecurse(a, b, d, c, e, f) {
			var g = this;return function () {
				g.recurse(a, b, d, c, e, f);
			};
		}, lazyAssign: function lazyAssign(a, b) {
			var d = this;return function () {
				d.assign(a, b);
			};
		}, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function stringEscapeFn(a) {
			return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
		}, escape: function escape(a) {
			if (E(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (Q(a)) return a.toString();if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";if ("undefined" === typeof a) return "undefined";throw ba("esc");
		}, nextId: function nextId(a, b) {
			var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (b ? "=" + b : ""));return d;
		}, current: function current() {
			return this.state[this.state.computing];
		} };sd.prototype = { compile: function compile(a, b) {
			var d = this,
			    c = this.astBuilder.ast(a);this.expression = a;this.expensiveChecks = b;W(c, d.$filter);var e, f;if (e = pd(c)) f = this.recurse(e);e = nd(c.body);var g;e && (g = [], n(e, function (a, b) {
				var c = d.recurse(a);a.input = c;g.push(c);a.watchId = b;
			}));var h = [];n(c.body, function (a) {
				h.push(d.recurse(a.expression));
			});
			e = 0 === c.body.length ? function () {} : 1 === c.body.length ? h[0] : function (a, b) {
				var c;n(h, function (d) {
					c = d(a, b);
				});return c;
			};f && (e.assign = function (a, b, c) {
				return f(a, c, b);
			});g && (e.inputs = g);e.literal = qd(c);e.constant = c.constant;return e;
		}, recurse: function recurse(a, b, d) {
			var c,
			    e,
			    f = this,
			    g;if (a.input) return this.inputs(a.input, a.watchId);switch (a.type) {case s.Literal:
					return this.value(a.value, b);case s.UnaryExpression:
					return e = this.recurse(a.argument), this["unary" + a.operator](e, b);case s.BinaryExpression:
					return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.LogicalExpression:
					return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.ConditionalExpression:
					return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);case s.Identifier:
					return Va(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Fb(a.name), b, d, f.expression);case s.MemberExpression:
					return c = this.recurse(a.object, !1, !!d), a.computed || (Va(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);case s.CallExpression:
					return g = [], n(a.arguments, function (a) {
						g.push(f.recurse(a));
					}), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
						for (var r = [], n = 0; n < g.length; ++n) r.push(g[n](a, c, d, f));a = e.apply(u, r, f);return b ? { context: u, name: u, value: a } : a;
					} : function (a, c, d, m) {
						var r = e(a, c, d, m),
						    n;if (null != r.value) {
							xa(r.context, f.expression);kd(r.value, f.expression);n = [];for (var q = 0; q < g.length; ++q) n.push(xa(g[q](a, c, d, m), f.expression));n = xa(r.value.apply(r.context, n), f.expression);
						}return b ? { value: n } : n;
					};case s.AssignmentExpression:
					return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
						var n = c(a, d, g, m);a = e(a, d, g, m);xa(n.value, f.expression);ld(n.context);n.context[n.name] = a;return b ? { value: a } : a;
					};case s.ArrayExpression:
					return g = [], n(a.elements, function (a) {
						g.push(f.recurse(a));
					}), function (a, c, d, e) {
						for (var f = [], n = 0; n < g.length; ++n) f.push(g[n](a, c, d, e));return b ? { value: f } : f;
					};case s.ObjectExpression:
					return g = [], n(a.properties, function (a) {
						g.push({ key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, value: f.recurse(a.value) });
					}), function (a, c, d, e) {
						for (var f = {}, n = 0; n < g.length; ++n) f[g[n].key] = g[n].value(a, c, d, e);return b ? { value: f } : f;
					};case s.ThisExpression:
					return function (a) {
						return b ? { value: a } : a;
					};case s.NGValueParameter:
					return function (a, c, d, e) {
						return b ? { value: d } : d;
					};}
		}, "unary+": function unary(a, b) {
			return function (d, c, e, f) {
				d = a(d, c, e, f);d = y(d) ? +d : 0;return b ? { value: d } : d;
			};
		}, "unary-": function unary(a, b) {
			return function (d, c, e, f) {
				d = a(d, c, e, f);d = y(d) ? -d : 0;return b ? { value: d } : d;
			};
		}, "unary!": function unary(a, b) {
			return function (d, c, e, f) {
				d = !a(d, c, e, f);return b ? { value: d } : d;
			};
		}, "binary+": function binary(a, b, d) {
			return function (c, e, f, g) {
				var h = a(c, e, f, g);c = b(c, e, f, g);h = md(h, c);return d ? { value: h } : h;
			};
		}, "binary-": function binary(a, b, d) {
			return function (c, e, f, g) {
				var h = a(c, e, f, g);c = b(c, e, f, g);h = (y(h) ? h : 0) - (y(c) ? c : 0);return d ? { value: h } : h;
			};
		}, "binary*": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) * b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary/": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) / b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary%": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) % b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary===": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) === b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary!==": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) !== b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary==": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) == b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary!=": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) != b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary<": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) < b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary>": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) > b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary<=": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) <= b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary>=": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) >= b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary&&": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) && b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary||": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) || b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "ternary?:": function ternary(a, b, d, c) {
			return function (e, f, g, h) {
				e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);return c ? { value: e } : e;
			};
		}, value: function value(a, b) {
			return function () {
				return b ? { context: u, name: u, value: a } : a;
			};
		}, identifier: function identifier(a, b, d, c, e) {
			return function (f, g, h, k) {
				f = g && a in g ? g : f;c && 1 !== c && f && !f[a] && (f[a] = {});g = f ? f[a] : u;b && xa(g, e);return d ? { context: f, name: a, value: g } : g;
			};
		}, computedMember: function computedMember(a, b, d, c, e) {
			return function (f, g, h, k) {
				var l = a(f, g, h, k),
				    m,
				    n;null != l && (m = b(f, g, h, k), m = jd(m), Va(m, e), c && 1 !== c && l && !l[m] && (l[m] = {}), n = l[m], xa(n, e));return d ? { context: l, name: m, value: n } : n;
			};
		}, nonComputedMember: function nonComputedMember(a, b, d, c, e, f) {
			return function (g, h, k, l) {
				g = a(g, h, k, l);e && 1 !== e && g && !g[b] && (g[b] = {});h = null != g ? g[b] : u;(d || Fb(b)) && xa(h, f);return c ? { context: g, name: b, value: h } : h;
			};
		}, inputs: function inputs(a, b) {
			return function (d, c, e, f) {
				return f ? f[b] : a(d, c, e);
			};
		} };var gc = function gc(a, b, d) {
		this.lexer = a;this.$filter = b;this.options = d;this.ast = new s(this.lexer);this.astCompiler = d.csp ? new sd(this.ast, b) : new rd(this.ast, b);
	};gc.prototype = { constructor: gc, parse: function parse(a) {
			return this.astCompiler.compile(a, this.options.expensiveChecks);
		} };$();$();var $f = Object.prototype.valueOf,
	    ya = G("$sce"),
	    la = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
	    ha = G("$compile"),
	    Y = X.createElement("a"),
	    wd = wa(S.location.href);
	xd.$inject = ["$document"];Jc.$inject = ["$provide"];yd.$inject = ["$locale"];Ad.$inject = ["$locale"];var ic = ".",
	    jg = { yyyy: ca("FullYear", 4), yy: ca("FullYear", 2, 0, !0), y: ca("FullYear", 1), MMMM: Hb("Month"), MMM: Hb("Month", !0), MM: ca("Month", 2, 1), M: ca("Month", 1, 1), dd: ca("Date", 2), d: ca("Date", 1), HH: ca("Hours", 2), H: ca("Hours", 1), hh: ca("Hours", 2, -12), h: ca("Hours", 1, -12), mm: ca("Minutes", 2), m: ca("Minutes", 1), ss: ca("Seconds", 2), s: ca("Seconds", 1), sss: ca("Milliseconds", 3), EEEE: Hb("Day"), EEE: Hb("Day", !0), a: function a(_a2, b) {
			return 12 > _a2.getHours() ? b.AMPMS[0] : b.AMPMS[1];
		}, Z: function Z(a, b, d) {
			a = -1 * d;return a = (0 <= a ? "+" : "") + (Gb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Gb(Math.abs(a % 60), 2));
		}, ww: Ed(2), w: Ed(1), G: jc, GG: jc, GGG: jc, GGGG: function GGGG(a, b) {
			return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
		} },
	    ig = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
	    hg = /^\-?\d+$/;zd.$inject = ["$locale"];var eg = na(F),
	    fg = na(sb);Bd.$inject = ["$parse"];var he = na({ restrict: "E", compile: function compile(a, b) {
			if (!b.href && !b.xlinkHref) return function (a, b) {
				if ("a" === b[0].nodeName.toLowerCase()) {
					var e = "[object SVGAnimatedString]" === sa.call(b.prop("href")) ? "xlink:href" : "href";b.on("click", function (a) {
						b.attr(e) || a.preventDefault();
					});
				}
			};
		} }),
	    tb = {};n(Cb, function (a, b) {
		function d(a, d, e) {
			a.$watch(e[c], function (a) {
				e.$set(b, !!a);
			});
		}if ("multiple" != a) {
			var c = va("ng-" + b),
			    e = d;"checked" === a && (e = function (a, b, e) {
				e.ngModel !== e[c] && d(a, b, e);
			});tb[c] = function () {
				return { restrict: "A", priority: 100, link: e };
			};
		}
	});n(Zc, function (a, b) {
		tb[b] = function () {
			return { priority: 100, link: function link(a, c, e) {
					if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(lg))) {
						e.$set("ngPattern", new RegExp(c[1], c[2]));return;
					}a.$watch(e[b], function (a) {
						e.$set(b, a);
					});
				} };
		};
	});n(["src", "srcset", "href"], function (a) {
		var b = va("ng-" + a);tb[b] = function () {
			return { priority: 99, link: function link(d, c, e) {
					var f = a,
					    g = a;"href" === a && "[object SVGAnimatedString]" === sa.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);e.$observe(b, function (b) {
						b ? (e.$set(g, b), Ha && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
					});
				} };
		};
	});
	var Ib = { $addControl: x, $$renameControl: function $$renameControl(a, b) {
			a.$name = b;
		}, $removeControl: x, $setValidity: x, $setDirty: x, $setPristine: x, $setSubmitted: x };Fd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];var Nd = function Nd(a) {
		return ["$timeout", "$parse", function (b, d) {
			function c(a) {
				return "" === a ? d('this[""]').assign : d(a).assign || x;
			}return { name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Fd, compile: function compile(d, f) {
					d.addClass(Wa).addClass(mb);var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, f) {
							var n = f[0];if (!("action" in e)) {
								var q = function q(b) {
									a.$apply(function () {
										n.$commitViewValue();n.$setSubmitted();
									});b.preventDefault();
								};d[0].addEventListener("submit", q, !1);d.on("$destroy", function () {
									b(function () {
										d[0].removeEventListener("submit", q, !1);
									}, 0, !1);
								});
							}(f[1] || n.$$parentForm).$addControl(n);var s = g ? c(n.$name) : x;g && (s(a, n), e.$observe(g, function (b) {
								n.$name !== b && (s(a, u), n.$$parentForm.$$renameControl(n, b), s = c(n.$name), s(a, n));
							}));d.on("$destroy", function () {
								n.$$parentForm.$removeControl(n);
								s(a, u);M(n, Ib);
							});
						} };
				} };
		}];
	},
	    ie = Nd(),
	    ve = Nd(!0),
	    kg = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
	    tg = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,
	    ug = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
	    vg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
	    Od = /^(\d{4})-(\d{2})-(\d{2})$/,
	    Pd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	    mc = /^(\d{4})-W(\d\d)$/,
	    Qd = /^(\d{4})-(\d\d)$/,
	    Rd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	    Sd = { text: function text(a, b, d, c, e, f) {
			jb(a, b, d, c, e, f);kc(c);
		}, date: kb("date", Od, Kb(Od, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": kb("datetimelocal", Pd, Kb(Pd, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: kb("time", Rd, Kb(Rd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: kb("week", mc, function (a, b) {
			if (da(a)) return a;if (E(a)) {
				mc.lastIndex = 0;var d = mc.exec(a);if (d) {
					var c = +d[1],
					    e = +d[2],
					    f = d = 0,
					    g = 0,
					    h = 0,
					    k = Dd(c),
					    e = 7 * (e - 1);b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());return new Date(c, 0, k.getDate() + e, d, f, g, h);
				}
			}return NaN;
		}, "yyyy-Www"), month: kb("month", Qd, Kb(Qd, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, b, d, c, e, f) {
			Hd(a, b, d, c);jb(a, b, d, c, e, f);c.$$parserName = "number";c.$parsers.push(function (a) {
				return c.$isEmpty(a) ? null : vg.test(a) ? parseFloat(a) : u;
			});c.$formatters.push(function (a) {
				if (!c.$isEmpty(a)) {
					if (!Q(a)) throw lb("numfmt", a);a = a.toString();
				}return a;
			});if (y(d.min) || d.ngMin) {
				var g;c.$validators.min = function (a) {
					return c.$isEmpty(a) || q(g) || a >= g;
				};d.$observe("min", function (a) {
					y(a) && !Q(a) && (a = parseFloat(a, 10));g = Q(a) && !isNaN(a) ? a : u;c.$validate();
				});
			}if (y(d.max) || d.ngMax) {
				var h;c.$validators.max = function (a) {
					return c.$isEmpty(a) || q(h) || a <= h;
				};d.$observe("max", function (a) {
					y(a) && !Q(a) && (a = parseFloat(a, 10));h = Q(a) && !isNaN(a) ? a : u;c.$validate();
				});
			}
		}, url: function url(a, b, d, c, e, f) {
			jb(a, b, d, c, e, f);kc(c);c.$$parserName = "url";c.$validators.url = function (a, b) {
				var d = a || b;return c.$isEmpty(d) || tg.test(d);
			};
		}, email: function email(a, b, d, c, e, f) {
			jb(a, b, d, c, e, f);kc(c);
			c.$$parserName = "email";c.$validators.email = function (a, b) {
				var d = a || b;return c.$isEmpty(d) || ug.test(d);
			};
		}, radio: function radio(a, b, d, c) {
			q(d.name) && b.attr("name", ++nb);b.on("click", function (a) {
				b[0].checked && c.$setViewValue(d.value, a && a.type);
			});c.$render = function () {
				b[0].checked = d.value == c.$viewValue;
			};d.$observe("value", c.$render);
		}, checkbox: function checkbox(a, b, d, c, e, f, g, h) {
			var k = Id(h, a, "ngTrueValue", d.ngTrueValue, !0),
			    l = Id(h, a, "ngFalseValue", d.ngFalseValue, !1);b.on("click", function (a) {
				c.$setViewValue(b[0].checked, a && a.type);
			});c.$render = function () {
				b[0].checked = c.$viewValue;
			};c.$isEmpty = function (a) {
				return !1 === a;
			};c.$formatters.push(function (a) {
				return ma(a, k);
			});c.$parsers.push(function (a) {
				return a ? k : l;
			});
		}, hidden: x, button: x, submit: x, reset: x, file: x },
	    Dc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
		return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(e, f, g, h) {
					h[0] && (Sd[F(g.type)] || Sd.text)(e, f, g, h[0], b, a, d, c);
				} } };
	}],
	    wg = /^(true|false|\d+)$/,
	    Ne = function Ne() {
		return { restrict: "A", priority: 100, compile: function compile(a, b) {
				return wg.test(b.ngValue) ? function (a, b, e) {
					e.$set("value", a.$eval(e.ngValue));
				} : function (a, b, e) {
					a.$watch(e.ngValue, function (a) {
						e.$set("value", a);
					});
				};
			} };
	},
	    ne = ["$compile", function (a) {
		return { restrict: "AC", compile: function compile(b) {
				a.$$addBindingClass(b);return function (b, c, e) {
					a.$$addBindingInfo(c, e.ngBind);c = c[0];b.$watch(e.ngBind, function (a) {
						c.textContent = q(a) ? "" : a;
					});
				};
			} };
	}],
	    pe = ["$interpolate", "$compile", function (a, b) {
		return { compile: function compile(d) {
				b.$$addBindingClass(d);return function (c, d, f) {
					c = a(d.attr(f.$attr.ngBindTemplate));
					b.$$addBindingInfo(d, c.expressions);d = d[0];f.$observe("ngBindTemplate", function (a) {
						d.textContent = q(a) ? "" : a;
					});
				};
			} };
	}],
	    oe = ["$sce", "$parse", "$compile", function (a, b, d) {
		return { restrict: "A", compile: function compile(c, e) {
				var f = b(e.ngBindHtml),
				    g = b(e.ngBindHtml, function (a) {
					return (a || "").toString();
				});d.$$addBindingClass(c);return function (b, c, e) {
					d.$$addBindingInfo(c, e.ngBindHtml);b.$watch(g, function () {
						c.html(a.getTrustedHtml(f(b)) || "");
					});
				};
			} };
	}],
	    Me = na({ restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
			c.$viewChangeListeners.push(function () {
				a.$eval(d.ngChange);
			});
		} }),
	    qe = lc("", !0),
	    se = lc("Odd", 0),
	    re = lc("Even", 1),
	    te = La({ compile: function compile(a, b) {
			b.$set("ngCloak", u);a.removeClass("ng-cloak");
		} }),
	    ue = [function () {
		return { restrict: "A", scope: !0, controller: "@", priority: 500 };
	}],
	    Ic = {},
	    xg = { blur: !0, focus: !0 };n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
		var b = va("ng-" + a);Ic[b] = ["$parse", "$rootScope", function (d, c) {
			return { restrict: "A", compile: function compile(e, f) {
					var g = d(f[b], null, !0);return function (b, d) {
						d.on(a, function (d) {
							var e = function e() {
								g(b, { $event: d });
							};xg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
						});
					};
				} };
		}];
	});var xe = ["$animate", function (a) {
		return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(b, d, c, e, f) {
				var g, h, k;b.$watch(c.ngIf, function (b) {
					b ? h || f(function (b, e) {
						h = e;b[b.length++] = X.createComment(" end ngIf: " + c.ngIf + " ");g = { clone: b };a.enter(b, d.parent(), d);
					}) : (k && (k.remove(), k = null), h && (h.$destroy(), h = null), g && (k = rb(g.clone), a.leave(k).then(function () {
						k = null;
					}), g = null));
				});
			} };
	}],
	    ye = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
		return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: fa.noop, compile: function compile(c, e) {
				var f = e.ngInclude || e.src,
				    g = e.onload || "",
				    h = e.autoscroll;return function (c, e, m, n, q) {
					var s = 0,
					    v,
					    u,
					    p,
					    C = function C() {
						u && (u.remove(), u = null);v && (v.$destroy(), v = null);p && (d.leave(p).then(function () {
							u = null;
						}), u = p, p = null);
					};c.$watch(f, function (f) {
						var m = function m() {
							!y(h) || h && !c.$eval(h) || b();
						},
						    u = ++s;f ? (a(f, !0).then(function (a) {
							if (u === s) {
								var b = c.$new();n.template = a;a = q(b, function (a) {
									C();d.enter(a, null, e).then(m);
								});v = b;p = a;v.$emit("$includeContentLoaded", f);c.$eval(g);
							}
						}, function () {
							u === s && (C(), c.$emit("$includeContentError", f));
						}), c.$emit("$includeContentRequested", f)) : (C(), n.template = null);
					});
				};
			} };
	}],
	    Pe = ["$compile", function (a) {
		return { restrict: "ECA", priority: -400, require: "ngInclude", link: function link(b, d, c, e) {
				/SVG/.test(d[0].toString()) ? (d.empty(), a(Lc(e.template, X).childNodes)(b, function (a) {
					d.append(a);
				}, { futureParentElement: d })) : (d.html(e.template), a(d.contents())(b));
			} };
	}],
	    ze = La({ priority: 450, compile: function compile() {
			return { pre: function pre(a, b, d) {
					a.$eval(d.ngInit);
				} };
		} }),
	    Le = function Le() {
		return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, b, d, c) {
				var e = b.attr(d.$attr.ngList) || ", ",
				    f = "false" !== d.ngTrim,
				    g = f ? U(e) : e;c.$parsers.push(function (a) {
					if (!q(a)) {
						var b = [];a && n(a.split(g), function (a) {
							a && b.push(f ? U(a) : a);
						});return b;
					}
				});c.$formatters.push(function (a) {
					return I(a) ? a.join(e) : u;
				});c.$isEmpty = function (a) {
					return !a || !a.length;
				};
			} };
	},
	    mb = "ng-valid",
	    Jd = "ng-invalid",
	    Wa = "ng-pristine",
	    Jb = "ng-dirty",
	    Ld = "ng-pending",
	    lb = G("ngModel"),
	    yg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
		this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = u;this.$validators = {};this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;
		this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = u;this.$name = l(d.name || "", !1)(a);this.$$parentForm = Ib;var m = e(d.ngModel),
		    r = m.assign,
		    t = m,
		    s = r,
		    v = null,
		    B,
		    p = this;this.$$setOptions = function (a) {
			if ((p.$options = a) && a.getterSetter) {
				var b = e(d.ngModel + "()"),
				    f = e(d.ngModel + "($$$p)");t = function (a) {
					var c = m(a);z(c) && (c = b(a));return c;
				};s = function (a, b) {
					z(m(a)) ? f(a, { $$$p: p.$modelValue }) : r(a, p.$modelValue);
				};
			} else if (!m.assign) throw lb("nonassign", d.ngModel, ua(c));
		};this.$render = x;this.$isEmpty = function (a) {
			return q(a) || "" === a || null === a || a !== a;
		};var C = 0;Gd({ ctrl: this, $element: c, set: function set(a, b) {
				a[b] = !0;
			}, unset: function unset(a, b) {
				delete a[b];
			}, $animate: f });this.$setPristine = function () {
			p.$dirty = !1;p.$pristine = !0;f.removeClass(c, Jb);f.addClass(c, Wa);
		};this.$setDirty = function () {
			p.$dirty = !0;p.$pristine = !1;f.removeClass(c, Wa);f.addClass(c, Jb);p.$$parentForm.$setDirty();
		};this.$setUntouched = function () {
			p.$touched = !1;p.$untouched = !0;f.setClass(c, "ng-untouched", "ng-touched");
		};this.$setTouched = function () {
			p.$touched = !0;p.$untouched = !1;f.setClass(c, "ng-touched", "ng-untouched");
		};this.$rollbackViewValue = function () {
			g.cancel(v);p.$viewValue = p.$$lastCommittedViewValue;p.$render();
		};this.$validate = function () {
			if (!Q(p.$modelValue) || !isNaN(p.$modelValue)) {
				var a = p.$$rawModelValue,
				    b = p.$valid,
				    c = p.$modelValue,
				    d = p.$options && p.$options.allowInvalid;p.$$runValidators(a, p.$$lastCommittedViewValue, function (e) {
					d || b === e || (p.$modelValue = e ? a : u, p.$modelValue !== c && p.$$writeModelToScope());
				});
			}
		};this.$$runValidators = function (a, b, c) {
			function d() {
				var c = !0;n(p.$validators, function (d, e) {
					var g = d(a, b);c = c && g;f(e, g);
				});return c ? !0 : (n(p.$asyncValidators, function (a, b) {
					f(b, null);
				}), !1);
			}function e() {
				var c = [],
				    d = !0;n(p.$asyncValidators, function (e, g) {
					var h = e(a, b);if (!h || !z(h.then)) throw lb("$asyncValidators", h);f(g, u);c.push(h.then(function () {
						f(g, !0);
					}, function (a) {
						d = !1;f(g, !1);
					}));
				});c.length ? k.all(c).then(function () {
					g(d);
				}, x) : g(!0);
			}function f(a, b) {
				h === C && p.$setValidity(a, b);
			}function g(a) {
				h === C && c(a);
			}C++;var h = C;(function () {
				var a = p.$$parserName || "parse";if (q(B)) f(a, null);else return B || (n(p.$validators, function (a, b) {
					f(b, null);
				}), n(p.$asyncValidators, function (a, b) {
					f(b, null);
				})), f(a, B), B;return !0;
			})() ? d() ? e() : g(!1) : g(!1);
		};this.$commitViewValue = function () {
			var a = p.$viewValue;g.cancel(v);if (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators) p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate();
		};this.$$parseAndValidate = function () {
			var b = p.$$lastCommittedViewValue;if (B = q(b) ? u : !0) for (var c = 0; c < p.$parsers.length; c++) if ((b = p.$parsers[c](b), q(b))) {
				B = !1;break;
			}Q(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = t(a));var d = p.$modelValue,
			    e = p.$options && p.$options.allowInvalid;p.$$rawModelValue = b;e && (p.$modelValue = b, p.$modelValue !== d && p.$$writeModelToScope());p.$$runValidators(b, p.$$lastCommittedViewValue, function (a) {
				e || (p.$modelValue = a ? b : u, p.$modelValue !== d && p.$$writeModelToScope());
			});
		};this.$$writeModelToScope = function () {
			s(a, p.$modelValue);n(p.$viewChangeListeners, function (a) {
				try {
					a();
				} catch (c) {
					b(c);
				}
			});
		};this.$setViewValue = function (a, b) {
			p.$viewValue = a;p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(b);
		};this.$$debounceViewValueCommit = function (b) {
			var c = 0,
			    d = p.$options;d && y(d.debounce) && (d = d.debounce, Q(d) ? c = d : Q(d[b]) ? c = d[b] : Q(d["default"]) && (c = d["default"]));g.cancel(v);c ? v = g(function () {
				p.$commitViewValue();
			}, c) : h.$$phase ? p.$commitViewValue() : a.$apply(function () {
				p.$commitViewValue();
			});
		};a.$watch(function () {
			var b = t(a);if (b !== p.$modelValue && (p.$modelValue === p.$modelValue || b === b)) {
				p.$modelValue = p.$$rawModelValue = b;B = u;for (var c = p.$formatters, d = c.length, e = b; d--;) e = c[d](e);p.$viewValue !== e && (p.$viewValue = p.$$lastCommittedViewValue = e, p.$render(), p.$$runValidators(b, e, x));
			}return b;
		});
	}],
	    Ke = ["$rootScope", function (a) {
		return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: yg, priority: 1, compile: function compile(b) {
				b.addClass(Wa).addClass("ng-untouched").addClass(mb);return { pre: function pre(a, b, e, f) {
						var g = f[0];b = f[1] || g.$$parentForm;g.$$setOptions(f[2] && f[2].$options);b.$addControl(g);e.$observe("name", function (a) {
							g.$name !== a && g.$$parentForm.$$renameControl(g, a);
						});a.$on("$destroy", function () {
							g.$$parentForm.$removeControl(g);
						});
					}, post: function post(b, c, e, f) {
						var g = f[0];if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function (a) {
							g.$$debounceViewValueCommit(a && a.type);
						});c.on("blur", function (c) {
							g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched));
						});
					} };
			} };
	}],
	    zg = /(\s+|^)default(\s+|$)/,
	    Oe = function Oe() {
		return { restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
				var d = this;this.$options = bb(a.$eval(b.ngModelOptions));y(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(zg, function () {
					d.$options.updateOnDefault = !0;return " ";
				}))) : this.$options.updateOnDefault = !0;
			}] };
	},
	    Ae = La({ terminal: !0, priority: 1E3 }),
	    Ag = G("ngOptions"),
	    Bg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
	    Ie = ["$compile", "$parse", function (a, b) {
		function d(a, c, d) {
			function e(a, b, c, d, f) {
				this.selectValue = a;this.viewValue = b;this.label = c;this.group = d;this.disabled = f;
			}function l(a) {
				var b;if (!q && za(a)) b = a;else {
					b = [];for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
				}return b;
			}var m = a.match(Bg);if (!m) throw Ag("iexp", a, ua(c));var n = m[5] || m[7],
			    q = m[6];a = / as /.test(m[0]) && m[1];var s = m[9];c = b(m[2] ? m[1] : n);var v = a && b(a) || c,
			    u = s && b(s),
			    p = s ? function (a, b) {
				return u(d, b);
			} : function (a) {
				return Ca(a);
			},
			    C = function C(a, b) {
				return p(a, z(a, b));
			},
			    w = b(m[2] || m[1]),
			    y = b(m[3] || ""),
			    B = b(m[4] || ""),
			    x = b(m[8]),
			    D = {},
			    z = q ? function (a, b) {
				D[q] = b;D[n] = a;return D;
			} : function (a) {
				D[n] = a;return D;
			};return { trackBy: s, getTrackByValue: C, getWatchables: b(x, function (a) {
					var b = [];a = a || [];for (var c = l(a), e = c.length, f = 0; f < e; f++) {
						var g = a === c ? f : c[f],
						    k = z(a[g], g),
						    g = p(a[g], k);b.push(g);if (m[2] || m[1]) g = w(d, k), b.push(g);m[4] && (k = B(d, k), b.push(k));
					}return b;
				}), getOptions: function getOptions() {
					for (var a = [], b = {}, c = x(d) || [], f = l(c), g = f.length, m = 0; m < g; m++) {
						var n = c === f ? m : f[m],
						    r = z(c[n], n),
						    q = v(d, r),
						    n = p(q, r),
						    t = w(d, r),
						    u = y(d, r),
						    r = B(d, r),
						    q = new e(n, q, t, u, r);a.push(q);b[n] = q;
					}return { items: a, selectValueMap: b, getOptionFromViewValue: function getOptionFromViewValue(a) {
							return b[C(a)];
						}, getViewValueFromOption: function getViewValueFromOption(a) {
							return s ? fa.copy(a.viewValue) : a.viewValue;
						} };
				} };
		}var c = X.createElement("option"),
		    e = X.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "?ngModel"], link: { pre: function pre(a, b, c, d) {
					d[0].registerOption = x;
				}, post: function post(b, g, h, k) {
					function l(a, b) {
						a.element = b;b.disabled = a.disabled;a.label !== b.label && (b.label = a.label, b.textContent = a.label);a.value !== b.value && (b.value = a.selectValue);
					}function m(a, b, c, d) {
						b && F(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c, b) : a.appendChild(c));return c;
					}function r(a) {
						for (var b; a;) b = a.nextSibling, Xb(a), a = b;
					}function q(a) {
						var b = p && p[0],
						    c = z && z[0];if (b || c) for (; a && (a === b || a === c || 8 === a.nodeType || "" === a.value);) a = a.nextSibling;return a;
					}function s() {
						var a = D && u.readValue();D = E.getOptions();var b = {},
						    d = g[0].firstChild;x && g.prepend(p);d = q(d);D.items.forEach(function (a) {
							var f, h;a.group ? (f = b[a.group], f || (f = m(g[0], d, "optgroup", e), d = f.nextSibling, f.label = a.group, f = b[a.group] = { groupElement: f, currentOptionElement: f.firstChild }), h = m(f.groupElement, f.currentOptionElement, "option", c), l(a, h), f.currentOptionElement = h.nextSibling) : (h = m(g[0], d, "option", c), l(a, h), d = h.nextSibling);
						});Object.keys(b).forEach(function (a) {
							r(b[a].currentOptionElement);
						});r(d);v.$render();if (!v.$isEmpty(a)) {
							var f = u.readValue();(E.trackBy ? ma(a, f) : a === f) || (v.$setViewValue(f), v.$render());
						}
					}var v = k[1];if (v) {
						var u = k[0];k = h.multiple;for (var p, C = 0, w = g.children(), y = w.length; C < y; C++) if ("" === w[C].value) {
							p = w.eq(C);break;
						}var x = !!p,
						    z = B(c.cloneNode(!1));z.val("?");var D,
						    E = d(h.ngOptions, g, b);k ? (v.$isEmpty = function (a) {
							return !a || 0 === a.length;
						}, u.writeValue = function (a) {
							D.items.forEach(function (a) {
								a.element.selected = !1;
							});a && a.forEach(function (a) {
								(a = D.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0);
							});
						}, u.readValue = function () {
							var a = g.val() || [],
							    b = [];n(a, function (a) {
								(a = D.selectValueMap[a]) && !a.disabled && b.push(D.getViewValueFromOption(a));
							});
							return b;
						}, E.trackBy && b.$watchCollection(function () {
							if (I(v.$viewValue)) return v.$viewValue.map(function (a) {
								return E.getTrackByValue(a);
							});
						}, function () {
							v.$render();
						})) : (u.writeValue = function (a) {
							var b = D.getOptionFromViewValue(a);b && !b.disabled ? g[0].value !== b.selectValue && (z.remove(), x || p.remove(), g[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || x ? (z.remove(), x || g.prepend(p), g.val(""), p.prop("selected", !0), p.attr("selected", !0)) : (x || p.remove(), g.prepend(z), g.val("?"), z.prop("selected", !0), z.attr("selected", !0));
						}, u.readValue = function () {
							var a = D.selectValueMap[g.val()];return a && !a.disabled ? (x || p.remove(), z.remove(), D.getViewValueFromOption(a)) : null;
						}, E.trackBy && b.$watch(function () {
							return E.getTrackByValue(v.$viewValue);
						}, function () {
							v.$render();
						}));x ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = B(c.cloneNode(!1));s();b.$watchCollection(E.getWatchables, s);
					}
				} } };
	}],
	    Be = ["$locale", "$interpolate", "$log", function (a, b, d) {
		var c = /{}/g,
		    e = /^when(Minus)?(.+)$/;return { link: function link(f, g, h) {
				function k(a) {
					g.text(a || "");
				}var l = h.count,
				    m = h.$attr.when && g.attr(h.$attr.when),
				    r = h.offset || 0,
				    s = f.$eval(m) || {},
				    u = {},
				    v = b.startSymbol(),
				    y = b.endSymbol(),
				    p = v + l + "-" + r + y,
				    C = fa.noop,
				    w;n(h, function (a, b) {
					var c = e.exec(b);c && (c = (c[1] ? "-" : "") + F(c[2]), s[c] = g.attr(h.$attr[b]));
				});n(s, function (a, d) {
					u[d] = b(a.replace(c, p));
				});f.$watch(l, function (b) {
					var c = parseFloat(b),
					    e = isNaN(c);e || c in s || (c = a.pluralCat(c - r));c === w || e && Q(w) && isNaN(w) || (C(), e = u[c], q(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), C = x, k()) : C = f.$watch(e, k), w = c);
				});
			} };
	}],
	    Ce = ["$parse", "$animate", function (a, b) {
		var d = G("ngRepeat"),
		    c = function c(a, b, _c, d, k, l, m) {
			a[_c] = d;k && (a[k] = l);a.$index = b;a.$first = 0 === b;a.$last = b === m - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (b & 1));
		};return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(e, f) {
				var g = f.ngRepeat,
				    h = X.createComment(" end ngRepeat: " + g + " "),
				    k = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
				if (!k) throw d("iexp", g);var l = k[1],
				    m = k[2],
				    r = k[3],
				    q = k[4],
				    k = l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if (!k) throw d("iidexp", l);var s = k[3] || k[1],
				    v = k[2];if (r && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r))) throw d("badident", r);var x,
				    p,
				    y,
				    w,
				    z = { $id: Ca };q ? x = a(q) : (y = function (a, b) {
					return Ca(b);
				}, w = function (a) {
					return a;
				});return function (a, e, f, k, l) {
					x && (p = function (b, c, d) {
						v && (z[v] = b);z[s] = c;z.$index = d;return x(a, z);
					});var q = $();a.$watchCollection(m, function (f) {
						var k,
						    m,
						    t = e[0],
						    x,
						    z = $(),
						    D,
						    E,
						    H,
						    F,
						    I,
						    G,
						    J;r && (a[r] = f);if (za(f)) I = f, m = p || y;else for (J in (m = p || w, I = [], f)) qa.call(f, J) && "$" !== J.charAt(0) && I.push(J);D = I.length;J = Array(D);for (k = 0; k < D; k++) if ((E = f === I ? k : I[k], H = f[E], F = m(E, H, k), q[F])) G = q[F], delete q[F], z[F] = G, J[k] = G;else {
							if (z[F]) throw (n(J, function (a) {
								a && a.scope && (q[a.id] = a);
							}), d("dupes", g, F, H));J[k] = { id: F, scope: u, clone: u };z[F] = !0;
						}for (x in q) {
							G = q[x];F = rb(G.clone);b.leave(F);if (F[0].parentNode) for (k = 0, m = F.length; k < m; k++) F[k].$$NG_REMOVED = !0;G.scope.$destroy();
						}for (k = 0; k < D; k++) if ((E = f === I ? k : I[k], H = f[E], G = J[k], G.scope)) {
							x = t;do x = x.nextSibling; while (x && x.$$NG_REMOVED);G.clone[0] != x && b.move(rb(G.clone), null, B(t));t = G.clone[G.clone.length - 1];c(G.scope, k, s, H, v, E, D);
						} else l(function (a, d) {
							G.scope = d;var e = h.cloneNode(!1);a[a.length++] = e;b.enter(a, null, B(t));t = e;G.clone = a;z[G.id] = G;c(G.scope, k, s, H, v, E, D);
						});q = z;
					});
				};
			} };
	}],
	    De = ["$animate", function (a) {
		return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
				b.$watch(c.ngShow, function (b) {
					a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
				});
			} };
	}],
	    we = ["$animate", function (a) {
		return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
				b.$watch(c.ngHide, function (b) {
					a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
				});
			} };
	}],
	    Ee = La(function (a, b, d) {
		a.$watch(d.ngStyle, function (a, d) {
			d && a !== d && n(d, function (a, c) {
				b.css(c, "");
			});a && b.css(a);
		}, !0);
	}),
	    Fe = ["$animate", function (a) {
		return { require: "ngSwitch", controller: ["$scope", function () {
				this.cases = {};
			}], link: function link(b, d, c, e) {
				var f = [],
				    g = [],
				    h = [],
				    k = [],
				    l = function l(a, b) {
					return function () {
						a.splice(b, 1);
					};
				};b.$watch(c.ngSwitch || c.on, function (b) {
					var c, d;c = 0;for (d = h.length; c < d; ++c) a.cancel(h[c]);c = h.length = 0;for (d = k.length; c < d; ++c) {
						var q = rb(g[c].clone);k[c].$destroy();(h[c] = a.leave(q)).then(l(h, c));
					}g.length = 0;k.length = 0;(f = e.cases["!" + b] || e.cases["?"]) && n(f, function (b) {
						b.transclude(function (c, d) {
							k.push(d);var e = b.element;c[c.length++] = X.createComment(" end ngSwitchWhen: ");g.push({ clone: c });a.enter(c, e.parent(), e);
						});
					});
				});
			} };
	}],
	    Ge = La({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
			c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];c.cases["!" + d.ngSwitchWhen].push({ transclude: e, element: b });
		} }),
	    He = La({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
			c.cases["?"] = c.cases["?"] || [];c.cases["?"].push({ transclude: e, element: b });
		} }),
	    Je = La({ restrict: "EAC", link: function link(a, b, d, c, e) {
			if (!e) throw G("ngTransclude")("orphan", ua(b));e(function (a) {
				b.empty();
				b.append(a);
			});
		} }),
	    je = ["$templateCache", function (a) {
		return { restrict: "E", terminal: !0, compile: function compile(b, d) {
				"text/ng-template" == d.type && a.put(d.id, b[0].text);
			} };
	}],
	    Cg = { $setViewValue: x, $render: x },
	    Dg = ["$element", "$scope", "$attrs", function (a, b, d) {
		var c = this,
		    e = new Sa();c.ngModelCtrl = Cg;c.unknownOption = B(X.createElement("option"));c.renderUnknownOption = function (b) {
			b = "? " + Ca(b) + " ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b);
		};b.$on("$destroy", function () {
			c.renderUnknownOption = x;
		});c.removeUnknownOption = function () {
			c.unknownOption.parent() && c.unknownOption.remove();
		};c.readValue = function () {
			c.removeUnknownOption();return a.val();
		};c.writeValue = function (b) {
			c.hasOption(b) ? (c.removeUnknownOption(), a.val(b), "" === b && c.emptyOption.prop("selected", !0)) : null == b && c.emptyOption ? (c.removeUnknownOption(), a.val("")) : c.renderUnknownOption(b);
		};c.addOption = function (a, b) {
			Ra(a, '"option value"');"" === a && (c.emptyOption = b);var d = e.get(a) || 0;e.put(a, d + 1);c.ngModelCtrl.$render();b[0].hasAttribute("selected") && (b[0].selected = !0);
		};c.removeOption = function (a) {
			var b = e.get(a);b && (1 === b ? (e.remove(a), "" === a && (c.emptyOption = u)) : e.put(a, b - 1));
		};c.hasOption = function (a) {
			return !!e.get(a);
		};c.registerOption = function (a, b, d, e, l) {
			if (e) {
				var m;d.$observe("value", function (a) {
					y(m) && c.removeOption(m);m = a;c.addOption(a, b);
				});
			} else l ? a.$watch(l, function (a, e) {
				d.$set("value", a);e !== a && c.removeOption(e);c.addOption(a, b);
			}) : c.addOption(d.value, b);b.on("$destroy", function () {
				c.removeOption(d.value);c.ngModelCtrl.$render();
			});
		};
	}],
	    ke = function ke() {
		return { restrict: "E",
			require: ["select", "?ngModel"], controller: Dg, priority: 1, link: { pre: function pre(a, b, d, c) {
					var e = c[1];if (e) {
						var f = c[0];f.ngModelCtrl = e;e.$render = function () {
							f.writeValue(e.$viewValue);
						};b.on("change", function () {
							a.$apply(function () {
								e.$setViewValue(f.readValue());
							});
						});if (d.multiple) {
							f.readValue = function () {
								var a = [];n(b.find("option"), function (b) {
									b.selected && a.push(b.value);
								});return a;
							};f.writeValue = function (a) {
								var c = new Sa(a);n(b.find("option"), function (a) {
									a.selected = y(c.get(a.value));
								});
							};var g,
							    h = NaN;a.$watch(function () {
								h !== e.$viewValue || ma(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());h = e.$viewValue;
							});e.$isEmpty = function (a) {
								return !a || 0 === a.length;
							};
						}
					}
				} } };
	},
	    me = ["$interpolate", function (a) {
		return { restrict: "E", priority: 100, compile: function compile(b, d) {
				if (y(d.value)) var c = a(d.value, !0);else {
					var e = a(b.text(), !0);e || d.$set("value", b.text());
				}return function (a, b, d) {
					var k = b.parent();(k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e);
				};
			} };
	}],
	    le = na({ restrict: "E", terminal: !1 }),
	    Fc = function Fc() {
		return { restrict: "A",
			require: "?ngModel", link: function link(a, b, d, c) {
				c && (d.required = !0, c.$validators.required = function (a, b) {
					return !d.required || !c.$isEmpty(b);
				}, d.$observe("required", function () {
					c.$validate();
				}));
			} };
	},
	    Ec = function Ec() {
		return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
				if (c) {
					var e,
					    f = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
						E(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw G("ngPattern")("noregexp", f, a, ua(b));e = a || u;c.$validate();
					});c.$validators.pattern = function (a, b) {
						return c.$isEmpty(b) || q(e) || e.test(b);
					};
				}
			} };
	},
	    Hc = function Hc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
				if (c) {
					var e = -1;d.$observe("maxlength", function (a) {
						a = ea(a);e = isNaN(a) ? -1 : a;c.$validate();
					});c.$validators.maxlength = function (a, b) {
						return 0 > e || c.$isEmpty(b) || b.length <= e;
					};
				}
			} };
	},
	    Gc = function Gc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
				if (c) {
					var e = 0;d.$observe("minlength", function (a) {
						e = ea(a) || 0;c.$validate();
					});c.$validators.minlength = function (a, b) {
						return c.$isEmpty(b) || b.length >= e;
					};
				}
			} };
	};S.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (ce(), ee(fa), fa.module("ngLocale", [], ["$provide", function (a) {
		function b(a) {
			a += "";var b = a.indexOf(".");return -1 == b ? 0 : a.length - b - 1;
		}a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
				SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-¤",
					negSuf: "", posPre: "¤", posSuf: "" }] }, id: "en-us", pluralCat: function pluralCat(a, c) {
				var e = a | 0,
				    f = c;u === f && (f = Math.min(b(a), 3));Math.pow(10, f);return 1 == e && 0 == f ? "one" : "other";
			} });
	}]), B(X).ready(function () {
		Zd(X, yc);
	}));
})(window, document);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

function iconeEspera(idBotao, classEstatica, ativa) {
	if (ativa == 'ativa') {
		$("#" + idBotao).removeClass(classEstatica);
		$("#" + idBotao).addClass('fa-cog fa-spin');
	} else {
		$("#" + idBotao).removeClass('fa-cog fa-spin');
		$("#" + idBotao).addClass(classEstatica);
	}
}
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+(function (a) {
	"use strict";var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
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
	};d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
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
	};c.VERSION = "3.3.6", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
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
	};c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
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
	};d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
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
			    f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
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
	};g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
		var e = a(this);if (!e.is(".disabled, :disabled")) {
			var f = b(e),
			    g = f.hasClass("open");if ((c(), !g)) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if ((f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
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
	};c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
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
	};c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
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
	};if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
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
	}b.VERSION = "3.3.6", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
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
		    d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
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
	};c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
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
	};c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
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
				d: function d(_d2, v) {
					return _d2.setUTCDate(v);
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

/**
 * dirPagination - AngularJS module for paginating (almost) anything.
 *
 *
 * Credits
 * =======
 *
 * Daniel Tabuenca: https://groups.google.com/d/msg/angular/an9QpzqIYiM/r8v-3W1X5vcJ
 * for the idea on how to dynamically invoke the ng-repeat directive.
 *
 * I borrowed a couple of lines and a few attribute names from the AngularUI Bootstrap project:
 * https://github.com/angular-ui/bootstrap/blob/master/src/pagination/pagination.js
 *
 * Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
 */

(function () {

	/**
  * Config
  */
	var moduleName = 'angularUtils.directives.dirPagination';
	var DEFAULT_ID = '__default';

	/**
  * Module
  */
	var module;
	try {
		module = angular.module(moduleName);
	} catch (err) {
		// named module does not exist, so create one
		module = angular.module(moduleName, []);
	}

	module.directive('dirPaginate', ['$compile', '$parse', 'paginationService', dirPaginateDirective]).directive('dirPaginateNoCompile', noCompileDirective).directive('dirPaginationControls', ['paginationService', 'paginationTemplate', dirPaginationControlsDirective]).filter('itemsPerPage', ['paginationService', itemsPerPageFilter]).service('paginationService', paginationService).provider('paginationTemplate', paginationTemplateProvider).run(['$templateCache', dirPaginationControlsTemplateInstaller]);

	function dirPaginateDirective($compile, $parse, paginationService) {

		return {
			terminal: true,
			multiElement: true,
			compile: dirPaginationCompileFn
		};

		function dirPaginationCompileFn(tElement, tAttrs) {

			var expression = tAttrs.dirPaginate;
			// regex taken directly from https://github.com/angular/angular.js/blob/master/src/ng/directive/ngRepeat.js#L211
			var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

			var filterPattern = /\|\s*itemsPerPage\s*:[^|\)]*/;
			if (match[2].match(filterPattern) === null) {
				throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
			}
			var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
			var collectionGetter = $parse(itemsPerPageFilterRemoved);

			addNoCompileAttributes(tElement);

			// If any value is specified for paginationId, we register the un-evaluated expression at this stage for the benefit of any
			// dir-pagination-controls directives that may be looking for this ID.
			var rawId = tAttrs.paginationId || DEFAULT_ID;
			paginationService.registerInstance(rawId);

			return function dirPaginationLinkFn(scope, element, attrs) {

				// Now that we have access to the `scope` we can interpolate any expression given in the paginationId attribute and
				// potentially register a new ID if it evaluates to a different value than the rawId.
				var paginationId = $parse(attrs.paginationId)(scope) || attrs.paginationId || DEFAULT_ID;
				paginationService.registerInstance(paginationId);

				var repeatExpression = getRepeatExpression(expression, paginationId);
				addNgRepeatToElement(element, attrs, repeatExpression);

				removeTemporaryAttributes(element);
				var compiled = $compile(element);

				var currentPageGetter = makeCurrentPageGetterFn(scope, attrs, paginationId);
				paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);

				if (typeof attrs.totalItems !== 'undefined') {
					paginationService.setAsyncModeTrue(paginationId);
					scope.$watch(function () {
						return $parse(attrs.totalItems)(scope);
					}, function (result) {
						if (0 <= result) {
							paginationService.setCollectionLength(paginationId, result);
						}
					});
				} else {
					scope.$watchCollection(function () {
						return collectionGetter(scope);
					}, function (collection) {
						if (collection) {
							paginationService.setCollectionLength(paginationId, collection.length);
						}
					});
				}

				// Delegate to the link function returned by the new compilation of the ng-repeat
				compiled(scope);
			};
		}

		/**
   * If a pagination id has been specified, we need to check that it is present as the second argument passed to
   * the itemsPerPage filter. If it is not there, we add it and return the modified expression.
   *
   * @param expression
   * @param paginationId
   * @returns {*}
   */
		function getRepeatExpression(expression, paginationId) {
			var repeatExpression,
			    idDefinedInFilter = !!expression.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);

			if (paginationId !== DEFAULT_ID && !idDefinedInFilter) {
				repeatExpression = expression.replace(/(\|\s*itemsPerPage\s*:[^|]*)/, "$1 : '" + paginationId + "'");
			} else {
				repeatExpression = expression;
			}

			return repeatExpression;
		}

		/**
   * Adds the ng-repeat directive to the element. In the case of multi-element (-start, -end) it adds the
   * appropriate multi-element ng-repeat to the first and last element in the range.
   * @param element
   * @param attrs
   * @param repeatExpression
   */
		function addNgRepeatToElement(element, attrs, repeatExpression) {
			if (element[0].hasAttribute('dir-paginate-start') || element[0].hasAttribute('data-dir-paginate-start')) {
				// using multiElement mode (dir-paginate-start, dir-paginate-end)
				attrs.$set('ngRepeatStart', repeatExpression);
				element.eq(element.length - 1).attr('ng-repeat-end', true);
			} else {
				attrs.$set('ngRepeat', repeatExpression);
			}
		}

		/**
   * Adds the dir-paginate-no-compile directive to each element in the tElement range.
   * @param tElement
   */
		function addNoCompileAttributes(tElement) {
			angular.forEach(tElement, function (el) {
				if (el.nodeType === Node.ELEMENT_NODE) {
					angular.element(el).attr('dir-paginate-no-compile', true);
				}
			});
		}

		/**
   * Removes the variations on dir-paginate (data-, -start, -end) and the dir-paginate-no-compile directives.
   * @param element
   */
		function removeTemporaryAttributes(element) {
			angular.forEach(element, function (el) {
				if (el.nodeType === Node.ELEMENT_NODE) {
					angular.element(el).removeAttr('dir-paginate-no-compile');
				}
			});
			element.eq(0).removeAttr('dir-paginate-start').removeAttr('dir-paginate').removeAttr('data-dir-paginate-start').removeAttr('data-dir-paginate');
			element.eq(element.length - 1).removeAttr('dir-paginate-end').removeAttr('data-dir-paginate-end');
		}

		/**
   * Creates a getter function for the current-page attribute, using the expression provided or a default value if
   * no current-page expression was specified.
   *
   * @param scope
   * @param attrs
   * @param paginationId
   * @returns {*}
   */
		function makeCurrentPageGetterFn(scope, attrs, paginationId) {
			var currentPageGetter;
			if (attrs.currentPage) {
				currentPageGetter = $parse(attrs.currentPage);
			} else {
				// if the current-page attribute was not set, we'll make our own
				var defaultCurrentPage = paginationId + '__currentPage';
				scope[defaultCurrentPage] = 1;
				currentPageGetter = $parse(defaultCurrentPage);
			}
			return currentPageGetter;
		}
	}

	/**
  * This is a helper directive that allows correct compilation when in multi-element mode (ie dir-paginate-start, dir-paginate-end).
  * It is dynamically added to all elements in the dir-paginate compile function, and it prevents further compilation of
  * any inner directives. It is then removed in the link function, and all inner directives are then manually compiled.
  */
	function noCompileDirective() {
		return {
			priority: 5000,
			terminal: true
		};
	}

	function dirPaginationControlsTemplateInstaller($templateCache) {
		$templateCache.put('angularUtils.directives.dirPagination.template', '<ul class="pagination" ng-if="1 < pages.length || !autoHide"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by $index" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' || ( ! autoHide && pages.length === 1 ) }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>');
	}

	function dirPaginationControlsDirective(paginationService, paginationTemplate) {

		var numberRegex = /^\d+$/;

		return {
			restrict: 'AE',
			templateUrl: function templateUrl(elem, attrs) {
				return attrs.templateUrl || paginationTemplate.getPath();
			},
			scope: {
				maxSize: '=?',
				onPageChange: '&?',
				paginationId: '=?',
				autoHide: '=?'
			},
			link: dirPaginationControlsLinkFn
		};

		function dirPaginationControlsLinkFn(scope, element, attrs) {

			// rawId is the un-interpolated value of the pagination-id attribute. This is only important when the corresponding dir-paginate directive has
			// not yet been linked (e.g. if it is inside an ng-if block), and in that case it prevents this controls directive from assuming that there is
			// no corresponding dir-paginate directive and wrongly throwing an exception.
			var rawId = attrs.paginationId || DEFAULT_ID;
			var paginationId = scope.paginationId || attrs.paginationId || DEFAULT_ID;

			if (!paginationService.isRegistered(paginationId) && !paginationService.isRegistered(rawId)) {
				var idMessage = paginationId !== DEFAULT_ID ? ' (id: ' + paginationId + ') ' : ' ';
				throw 'pagination directive: the pagination controls' + idMessage + 'cannot be used without the corresponding pagination directive.';
			}

			if (!scope.maxSize) {
				scope.maxSize = 9;
			}
			scope.autoHide = scope.autoHide === undefined ? true : scope.autoHide;
			scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
			scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

			var paginationRange = Math.max(scope.maxSize, 5);
			scope.pages = [];
			scope.pagination = {
				last: 1,
				current: 1
			};
			scope.range = {
				lower: 1,
				upper: 1,
				total: 1
			};

			scope.$watch(function () {
				return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
			}, function (length) {
				if (0 < length) {
					generatePagination();
				}
			});

			scope.$watch(function () {
				return paginationService.getItemsPerPage(paginationId);
			}, function (current, previous) {
				if (current != previous && typeof previous !== 'undefined') {
					goToPage(scope.pagination.current);
				}
			});

			scope.$watch(function () {
				return paginationService.getCurrentPage(paginationId);
			}, function (currentPage, previousPage) {
				if (currentPage != previousPage) {
					goToPage(currentPage);
				}
			});

			scope.setCurrent = function (num) {
				if (isValidPageNumber(num)) {
					num = parseInt(num, 10);
					paginationService.setCurrentPage(paginationId, num);
				}
			};

			function goToPage(num) {
				if (isValidPageNumber(num)) {
					scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
					scope.pagination.current = num;
					updateRangeValues();

					// if a callback has been set, then call it with the page number as an argument
					if (scope.onPageChange) {
						scope.onPageChange({ newPageNumber: num });
					}
				}
			}

			function generatePagination() {
				var page = parseInt(paginationService.getCurrentPage(paginationId)) || 1;

				scope.pages = generatePagesArray(page, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
				scope.pagination.current = page;
				scope.pagination.last = scope.pages[scope.pages.length - 1];
				if (scope.pagination.last < scope.pagination.current) {
					scope.setCurrent(scope.pagination.last);
				} else {
					updateRangeValues();
				}
			}

			/**
    * This function updates the values (lower, upper, total) of the `scope.range` object, which can be used in the pagination
    * template to display the current page range, e.g. "showing 21 - 40 of 144 results";
    */
			function updateRangeValues() {
				var currentPage = paginationService.getCurrentPage(paginationId),
				    itemsPerPage = paginationService.getItemsPerPage(paginationId),
				    totalItems = paginationService.getCollectionLength(paginationId);

				scope.range.lower = (currentPage - 1) * itemsPerPage + 1;
				scope.range.upper = Math.min(currentPage * itemsPerPage, totalItems);
				scope.range.total = totalItems;
			}

			function isValidPageNumber(num) {
				return numberRegex.test(num) && 0 < num && num <= scope.pagination.last;
			}
		}

		/**
   * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
   * links used in pagination
   *
   * @param currentPage
   * @param rowsPerPage
   * @param paginationRange
   * @param collectionLength
   * @returns {Array}
   */
		function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
			var pages = [];
			var totalPages = Math.ceil(collectionLength / rowsPerPage);
			var halfWay = Math.ceil(paginationRange / 2);
			var position;

			if (currentPage <= halfWay) {
				position = 'start';
			} else if (totalPages - halfWay < currentPage) {
				position = 'end';
			} else {
				position = 'middle';
			}

			var ellipsesNeeded = paginationRange < totalPages;
			var i = 1;
			while (i <= totalPages && i <= paginationRange) {
				var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

				var openingEllipsesNeeded = i === 2 && (position === 'middle' || position === 'end');
				var closingEllipsesNeeded = i === paginationRange - 1 && (position === 'middle' || position === 'start');
				if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
					pages.push('...');
				} else {
					pages.push(pageNumber);
				}
				i++;
			}
			return pages;
		}

		/**
   * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
   *
   * @param i
   * @param currentPage
   * @param paginationRange
   * @param totalPages
   * @returns {*}
   */
		function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
			var halfWay = Math.ceil(paginationRange / 2);
			if (i === paginationRange) {
				return totalPages;
			} else if (i === 1) {
				return i;
			} else if (paginationRange < totalPages) {
				if (totalPages - halfWay < currentPage) {
					return totalPages - paginationRange + i;
				} else if (halfWay < currentPage) {
					return currentPage - halfWay + i;
				} else {
					return i;
				}
			} else {
				return i;
			}
		}
	}

	/**
  * This filter slices the collection into pages based on the current page number and number of items per page.
  * @param paginationService
  * @returns {Function}
  */
	function itemsPerPageFilter(paginationService) {

		return function (collection, itemsPerPage, paginationId) {
			if (typeof paginationId === 'undefined') {
				paginationId = DEFAULT_ID;
			}
			if (!paginationService.isRegistered(paginationId)) {
				throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
			}
			var end;
			var start;
			if (collection instanceof Array) {
				itemsPerPage = parseInt(itemsPerPage) || 9999999999;
				if (paginationService.isAsyncMode(paginationId)) {
					start = 0;
				} else {
					start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
				}
				end = start + itemsPerPage;
				paginationService.setItemsPerPage(paginationId, itemsPerPage);

				return collection.slice(start, end);
			} else {
				return collection;
			}
		};
	}

	/**
  * This service allows the various parts of the module to communicate and stay in sync.
  */
	function paginationService() {

		var instances = {};
		var lastRegisteredInstance;

		this.registerInstance = function (instanceId) {
			if (typeof instances[instanceId] === 'undefined') {
				instances[instanceId] = {
					asyncMode: false
				};
				lastRegisteredInstance = instanceId;
			}
		};

		this.isRegistered = function (instanceId) {
			return typeof instances[instanceId] !== 'undefined';
		};

		this.getLastInstanceId = function () {
			return lastRegisteredInstance;
		};

		this.setCurrentPageParser = function (instanceId, val, scope) {
			instances[instanceId].currentPageParser = val;
			instances[instanceId].context = scope;
		};
		this.setCurrentPage = function (instanceId, val) {
			instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
		};
		this.getCurrentPage = function (instanceId) {
			var parser = instances[instanceId].currentPageParser;
			return parser ? parser(instances[instanceId].context) : 1;
		};

		this.setItemsPerPage = function (instanceId, val) {
			instances[instanceId].itemsPerPage = val;
		};
		this.getItemsPerPage = function (instanceId) {
			return instances[instanceId].itemsPerPage;
		};

		this.setCollectionLength = function (instanceId, val) {
			instances[instanceId].collectionLength = val;
		};
		this.getCollectionLength = function (instanceId) {
			return instances[instanceId].collectionLength;
		};

		this.setAsyncModeTrue = function (instanceId) {
			instances[instanceId].asyncMode = true;
		};

		this.isAsyncMode = function (instanceId) {
			return instances[instanceId].asyncMode;
		};
	}

	/**
  * This provider allows global configuration of the template path used by the dir-pagination-controls directive.
  */
	function paginationTemplateProvider() {

		var templatePath = 'angularUtils.directives.dirPagination.template';

		this.setPath = function (path) {
			templatePath = path;
		};

		this.$get = function () {
			return {
				getPath: function getPath() {
					return templatePath;
				}
			};
		};
	}
})();

angular.module('app', ['angularUtils.directives.dirPagination']);
//# sourceMappingURL=all.js.map
