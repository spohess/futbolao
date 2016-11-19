/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
"use strict";

!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
})("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a) {
      return n.each(this, a);
    }, map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
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
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isPlainObject: function isPlainObject(a) {
      var b;if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;for (b in a);return void 0 === b || k.call(a, b);
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) return !1;return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
    }, globalEval: function globalEval(a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === !1) break;
      } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);else for (g in a) e = b(a[g], g, c), null != e && h.push(e);return f.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function () {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
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
        y = ga(),
        z = ga(),
        A = ga(),
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
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]);a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if ((d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) r[h] = l + " " + qa(r[h]);s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) d.attrHandle[c[e]] = b;
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
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
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) g.unshift(c);c = b;while (c = c.parentNode) h.unshift(c);while (g[d] === h[d]) d++;return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if (((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if ((l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l)) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) c += e(b);return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
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
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
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
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if ((o = [g ? q.firstChild : q.lastChild], g && s)) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                  k[a] = [w, n, t];break;
                }
              } else if ((s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
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
          return Y.test(a.nodeName);
        }, input: function input(a) {
          return X.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
        } else while (b = b[d]) if (1 === b.nodeType || e) {
          if ((j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f)) return k[2] = h[2];if ((i[d] = k, k[2] = a(b, c, g))) return !0;
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if ((c && c(q, r, h, i), d)) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
            }k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
        if ((c = d.filter[a[i].type].apply(null, a[i].matches), c[u])) {
          for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
        }m.push(c);
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) if (q(l, g || n, h)) {
              i.push(l);break;
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if ((r += s, c && s !== r)) {
          o = 0;while (q = b[o++]) q(t, u, g, h);if (_f) {
            if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));u = ua(u);
          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if ((e = e || [], 1 === o.length)) {
        if ((j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type])) {
          if ((b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b)) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if ((k = j[i], d.relative[l = k.type])) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if ((j.splice(i, 1), a = f.length && qa(j), !a)) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  })(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
      if (e && n(a).is(c)) break;d.push(a);
    }return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
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
      return this.pushStack(z(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if ((c = c || A, "string" == typeof a)) {
      if ((e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b)) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if ((b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);return this;
      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
        f.push(c);break;
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);return a;
  }n.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return u(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    }, next: function next(a) {
      return F(a, "nextSibling");
    }, prev: function prev(a) {
      return F(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return v(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), (function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        })(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--;
        }), this;
      }, has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
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
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
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
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();var K = function K(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) K(a, b, h, c[h], !0, f, g);
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function L(a) {
    return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
  };function M() {
    this.expando = n.expando + M.uid++;
  }M.uid = 1, M.prototype = { register: function register(a, b) {
      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
    }, cache: function cache(a) {
      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) e[d] = b[d];return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    }, access: function access(a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d,
          e,
          f = a[this.expando];if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) delete f[d[c]];
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
    } };var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;function R(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if ((d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c)) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}O.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function hasData(a) {
      return O.hasData(a) || N.hasData(a);
    }, data: function data(a, b, c) {
      return O.access(a, b, c);
    }, removeData: function removeData(a, b) {
      O.remove(a, b);
    }, _data: function _data(a, b, c) {
      return N.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      N.remove(a, b);
    } }), n.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));N.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == typeof a ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;if (f && void 0 === b) {
          if ((c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c)) return c;if ((d = n.camelCase(a), c = O.get(f, d), void 0 !== c)) return c;if ((c = R(f, d, void 0), void 0 !== c)) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        O.remove(this, a);
      });
    } }), n.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
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
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function V(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) if ((f = a[o], f || 0 === f)) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) g = g.lastChild;n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
    } else m.push(b.createTextNode(f));l.textContent = "", o = 0;while (f = m[o++]) if (d && n.inArray(f, d) > -1) e && e.push(f);else if ((j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c)) {
      k = 0;while (f = g[k++]) Z.test(f.type || "") && c.push(f);
    }return l;
  }!(function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  })();var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
    return !0;
  }function ha() {
    return !1;
  }function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ja(a, b, c, d, e, f) {
    var g, h;if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) ja(a, h, c, d, b[h], f);return a;
    }if ((null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1)) e = ha;else if (!e) return a;return 1 === f && (g = e, e = function (a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
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
          r = N.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
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
          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) if ((h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o)) {
          l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
        } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if ((i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1)) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);d.length && g.push({ elem: i, handlers: d });
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, fix: function fix(a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) c = e[b], a[c] = g[c];return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), n.fn.extend({ on: function on(a, b, c, d) {
      return ja(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function ra(a) {
    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function sa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }function ta(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function ua(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
    }return a;
  }function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));return a;
  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ka, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) if (L(c)) {
        if (b = c[N.expando]) {
          if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);c[N.expando] = void 0;
        }c[O.expando] && (c[O.expando] = void 0);
      }
    } }), n.fn.extend({ domManip: ua, detach: function detach(a) {
      return va(this, a, !0);
    }, remove: function remove(a) {
      return va(this, a);
    }, text: function text(a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function html(a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return ua(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());return this.pushStack(d);
    };
  });var wa,
      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function za(a) {
    var b = d,
        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function Ca(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function Da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
  },
      Ea = d.documentElement;!(function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");if (h.style) {
      (function () {
        var i = function i() {
          h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
        };

        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);n.extend(l, { pixelPosition: function pixelPosition() {
            return i(), b;
          }, boxSizingReliable: function boxSizingReliable() {
            return null == c && i(), c;
          }, pixelMarginRight: function pixelMarginRight() {
            return null == c && i(), e;
          }, reliableMarginLeft: function reliableMarginLeft() {
            return null == c && i(), f;
          }, reliableMarginRight: function reliableMarginRight() {
            var b,
                c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
          } });
      })();
    }
  })();function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
  }function Ga(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = { position: "absolute", visibility: "hidden", display: "block" },
      Ja = { letterSpacing: "0", fontWeight: "400" },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;function Ma(a) {
    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;while (c--) if ((a = Ka[c] + b, a in La)) return a;
  }function Na(a, b, c) {
    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));return g;
  }function Pa(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ca(a),
        g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if ((e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e))) return e;d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Fa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      } };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];return e;
      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({ css: function css(a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Qa(this, !0);
    }, hide: function hide() {
      return Qa(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    } });function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }function Xa(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;return b && (e.opacity = e.width = a), e;
  }function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
  }function Za(a, b, c) {
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
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) if ((e = b[d], Ua.exec(e))) {
      if ((delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show"))) {
        if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
      }m[d] = q && q[d] || n.style(a, d);
    } else j = void 0;if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;N.remove(a, "fxshow");for (b in m) n.style(a, b, m[b]);
      });for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
    }
  }function $a(a, b) {
    var c, d, e, f, g;for (c in a) if ((d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g)) {
      f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
    } else b[d] = e;
  }function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) j.tweens[c].run(1);return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
    }, prefilters: [Za], prefilter: function prefilter(a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || n.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, (function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  })();var ab,
      bb = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
    } }), ab = { set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var eb = /[\t\r\n\f]/g;function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }n.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) if ((e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " "))) {
          g = 0;while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");h = n.trim(d), e !== h && c.setAttribute("class", h);
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) if ((e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " "))) {
          g = 0;while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");h = n.trim(d), e !== h && c.setAttribute("class", h);
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;return !1;
    } });var gb = /\r/g,
      hb = /[\x20\t\r\n\f]+/g;n.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function get(a) {
          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if ((c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup")))) {
            if ((b = n(c).val(), f)) return b;g.push(b);
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var ib = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if ((h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1))) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b);
    } }), n.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      } };
  });var jb = a.location,
      kb = n.now(),
      lb = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };var mb = /#.*$/,
      nb = /([?&])_=[^&]*/,
      ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      qb = /^(?:GET|HEAD)$/,
      rb = /^\/\//,
      sb = {},
      tb = {},
      ub = "*/".concat("*"),
      vb = d.createElement("a");vb.href = jb.href;function wb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }function xb(a, b, c, d) {
    var e = {},
        f = a === tb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function yb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);return d && n.extend(!0, a, d), a;
  }function zb(a, b, c) {
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
  }function Ab(a, b, c, d) {
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
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function ajax(b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === v) {
            if (!h) {
              h = {};while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2];
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === v ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return v || (m.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > v) for (b in a) s[b] = [s[b], a[b]];else x.always(a[x.status]);return this;
        }, abort: function abort(a) {
          var b = a || w;return e && e.abort(b), z(0, b), this;
        } };if ((q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain)) {
        j = d.createElement("a");try {
          j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }if ((m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v)) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) x.setRequestHeader(l, m.headers[l]);if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);if (e = xb(tb, m, c, x)) {
        if ((x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v)) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;z(-1, y);
        }
      } else z(-1, "No Transport");function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
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
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
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
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };var Bb = /%20/g,
      Cb = /\[\]$/,
      Db = /\r?\n/g,
      Eb = /^(?:submit|button|image|reset|file)$/i,
      Fb = /^(?:input|select|textarea|keygen)/i;function Gb(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Gb(a + "[" + e + "]", b[e], c, d);
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if ((void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) Gb(c, a[c], b, e);return d.join("&").replace(Bb, "+");
  }, n.fn.extend({ serialize: function serialize() {
      return n.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(Db, "\r\n") };
        }) : { name: b.name, value: c.replace(Db, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Hb = { 0: 200, 1223: 204 },
      Ib = n.ajaxSettings.xhr();l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
    var c, d;return l.cors || Ib && !b.crossDomain ? { send: function send(e, f) {
        var g,
            h = b.xhr();if ((h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)) for (g in b.xhrFields) h[g] = b.xhrFields[g];b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) h.setRequestHeader(g, e[g]);c = function (a) {
          return function () {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            c && d();
          });
        }, c = c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (c) throw i;
        }
      }, abort: function abort() {
        c && c();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;return { send: function send(e, f) {
          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) {
            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          c && c();
        } };
    }
  });var Jb = [],
      Kb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Jb.pop() || n.expando + "_" + kb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || d;var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var Lb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Mb(a) {
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
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) a = a.offsetParent;return a || Ea;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Mb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }, size: function size() {
      return this.length;
    } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });var Nb = a.jQuery,
      Ob = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
  }, b || (a.jQuery = a.$ = n), n;
});

/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (C) {
  'use strict';function N(a) {
    return function () {
      var b = arguments[0],
          d;d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.8/" + (a ? a + "/" : "") + b;for (b = 1; b < arguments.length; b++) {
        d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";var c = encodeURIComponent,
            e;e = arguments[b];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;d += c(e);
      }return Error(d);
    };
  }function ta(a) {
    if (null == a || Va(a)) return !1;if (L(a) || G(a) || F && a instanceof F) return !0;
    var b = "length" in Object(a) && a.length;return T(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item);
  }function q(a, b, d) {
    var c, e;if (a) if (z(a)) for (c in a) "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);else if (L(a) || ta(a)) {
      var f = "object" !== typeof a;c = 0;for (e = a.length; c < e; c++) (f || c in a) && b.call(d, a[c], c, a);
    } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);else if (sc(a)) for (c in a) b.call(d, a[c], c, a);else if ("function" === typeof a.hasOwnProperty) for (c in a) a.hasOwnProperty(c) && b.call(d, a[c], c, a);else for (c in a) ua.call(a, c) && b.call(d, a[c], c, a);return a;
  }function tc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) b.call(d, a[c[e]], c[e]);return c;
  }function uc(a) {
    return function (b, d) {
      a(d, b);
    };
  }function Yd() {
    return ++pb;
  }function Pb(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];if (D(g) || z(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
        var m = h[k],
            n = g[m];d && D(n) ? da(n) ? a[m] = new Date(n.valueOf()) : Wa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Qb(n) ? a[m] = n.clone() : (D(a[m]) || (a[m] = L(n) ? [] : {}), Pb(a[m], [n], !0)) : a[m] = n;
      }
    }c ? a.$$hashKey = c : delete a.$$hashKey;return a;
  }function S(a) {
    return Pb(a, va.call(arguments, 1), !1);
  }function Zd(a) {
    return Pb(a, va.call(arguments, 1), !0);
  }function Z(a) {
    return parseInt(a, 10);
  }function Rb(a, b) {
    return S(Object.create(a), b);
  }function A() {}function Xa(a) {
    return a;
  }function ha(a) {
    return function () {
      return a;
    };
  }function vc(a) {
    return z(a.toString) && a.toString !== ma;
  }function y(a) {
    return "undefined" === typeof a;
  }function w(a) {
    return "undefined" !== typeof a;
  }function D(a) {
    return null !== a && "object" === typeof a;
  }function sc(a) {
    return null !== a && "object" === typeof a && !wc(a);
  }function G(a) {
    return "string" === typeof a;
  }function T(a) {
    return "number" === typeof a;
  }function da(a) {
    return "[object Date]" === ma.call(a);
  }function z(a) {
    return "function" === typeof a;
  }function Wa(a) {
    return "[object RegExp]" === ma.call(a);
  }function Va(a) {
    return a && a.window === a;
  }function Ya(a) {
    return a && a.$evalAsync && a.$watch;
  }function Ga(a) {
    return "boolean" === typeof a;
  }function $d(a) {
    return a && T(a.length) && ae.test(ma.call(a));
  }function Qb(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
  }function be(a) {
    var b = {};a = a.split(",");var d;for (d = 0; d < a.length; d++) b[a[d]] = !0;return b;
  }function wa(a) {
    return Q(a.nodeName || a[0] && a[0].nodeName);
  }function Za(a, b) {
    var d = a.indexOf(b);0 <= d && a.splice(d, 1);return d;
  }function pa(a, b) {
    function d(a, b) {
      var d = b.$$hashKey,
          e;if (L(a)) {
        e = 0;for (var f = a.length; e < f; e++) b.push(c(a[e]));
      } else if (sc(a)) for (e in a) b[e] = c(a[e]);else if (a && "function" === typeof a.hasOwnProperty) for (e in a) a.hasOwnProperty(e) && (b[e] = c(a[e]));else for (e in a) ua.call(a, e) && (b[e] = c(a[e]));d ? b.$$hashKey = d : delete b.$$hashKey;return b;
    }function c(a) {
      if (!D(a)) return a;var b = f.indexOf(a);if (-1 !== b) return g[b];if (Va(a) || Ya(a)) throw xa("cpws");var b = !1,
          c = e(a);void 0 === c && (c = L(a) ? [] : Object.create(wc(a)), b = !0);f.push(a);g.push(c);return b ? d(a, c) : c;
    }function e(a) {
      switch (ma.call(a)) {case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
          return new a.constructor(c(a.buffer), a.byteOffset, a.length);case "[object ArrayBuffer]":
          if (!a.slice) {
            var b = new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b;
          }return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":
          return new a.constructor(a.valueOf());case "[object RegExp]":
          return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;case "[object Blob]":
          return new a.constructor([a], { type: a.type });}if (z(a.cloneNode)) return a.cloneNode(!0);
    }
    var f = [],
        g = [];if (b) {
      if ($d(b) || "[object ArrayBuffer]" === ma.call(b)) throw xa("cpta");if (a === b) throw xa("cpi");L(b) ? b.length = 0 : q(b, function (a, d) {
        "$$hashKey" !== d && delete b[d];
      });f.push(a);g.push(b);return d(a, b);
    }return c(a);
  }function na(_x, _x2) {
    var _again = true;

    _function: while (_again) {
      var a = _x,
          b = _x2;
      _again = false;
      if (a === b) return !0;if (null === a || null === b) return !1;if (a !== a && b !== b) return !0;var d = typeof a,
          c;if (d == typeof b && "object" == d) if (L(a)) {
        if (!L(b)) return !1;if ((d = a.length) == b.length) {
          for (c = 0; c < d; c++) if (!na(a[c], b[c])) return !1;return !0;
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
        }if (Wa(a)) return Wa(b) ? a.toString() == b.toString() : !1;if (Ya(a) || Ya(b) || Va(a) || Va(b) || L(b) || da(b) || Wa(b)) return !1;d = U();for (c in a) if ("$" !== c.charAt(0) && !z(a[c])) {
          if (!na(a[c], b[c])) return !1;d[c] = !0;
        }for (c in b) if (!(c in d) && "$" !== c.charAt(0) && w(b[c]) && !z(b[c])) return !1;return !0;
      }return !1;
    }
  }function $a(a, b, d) {
    return a.concat(va.call(b, d));
  }function ab(a, b) {
    var d = 2 < arguments.length ? va.call(arguments, 2) : [];return !z(b) || b instanceof RegExp ? b : d.length ? function () {
      return arguments.length ? b.apply(a, $a(d, arguments, 0)) : b.apply(a, d);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }function ce(a, b) {
    var d = b;"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Va(b) ? d = "$WINDOW" : b && C.document === b ? d = "$DOCUMENT" : Ya(b) && (d = "$SCOPE");return d;
  }function bb(a, b) {
    if (!y(a)) return T(b) || (b = b ? 2 : null), JSON.stringify(a, ce, b);
  }function xc(a) {
    return G(a) ? JSON.parse(a) : a;
  }function yc(a, b) {
    a = a.replace(de, "");var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;return isNaN(d) ? b : d;
  }function Sb(a, b, d) {
    d = d ? -1 : 1;var c = a.getTimezoneOffset();b = yc(b, c);d *= b - c;a = new Date(a.getTime());a.setMinutes(a.getMinutes() + d);return a;
  }function ya(a) {
    a = F(a).clone();try {
      a.empty();
    } catch (b) {}var d = F("<div>").append(a).html();try {
      return a[0].nodeType === Ma ? Q(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return "<" + Q(b);
      });
    } catch (c) {
      return Q(d);
    }
  }function zc(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {}
  }function Ac(a) {
    var b = {};q((a || "").split("&"), function (a) {
      var c, e, f;a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = zc(e), w(e) && (f = w(f) ? zc(f) : !0, ua.call(b, e) ? L(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
    });return b;
  }function Tb(a) {
    var b = [];q(a, function (a, c) {
      L(a) ? q(a, function (a) {
        b.push(ea(c, !0) + (!0 === a ? "" : "=" + ea(a, !0)));
      }) : b.push(ea(c, !0) + (!0 === a ? "" : "=" + ea(a, !0)));
    });return b.length ? b.join("&") : "";
  }function qb(a) {
    return ea(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }function ea(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
  }function ee(a, b) {
    var d,
        c,
        e = Na.length;for (c = 0; c < e; ++c) if ((d = Na[c] + b, G(d = a.getAttribute(d)))) return d;return null;
  }function fe(a, b) {
    var d,
        c,
        e = {};q(Na, function (b) {
      b += "app";!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
    });q(Na, function (b) {
      b += "app";var e;!d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
    });d && (e.strictDi = null !== ee(d, "strict-di"), b(d, c ? [c] : [], e));
  }function Bc(a, b, d) {
    D(d) || (d = {});d = S({ strictDi: !1 }, d);var c = function c() {
      a = F(a);if (a.injector()) {
        var c = a[0] === C.document ? "document" : ya(a);throw xa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }b = b || [];b.unshift(["$provide", function (b) {
        b.value("$rootElement", a);
      }]);d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0);
      }]);b.unshift("ng");c = cb(b, d.strictDi);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d);c(b)(a);
        });
      }]);return c;
    },
        e = /^NG_ENABLE_DEBUG_INFO!/,
        f = /^NG_DEFER_BOOTSTRAP!/;C && e.test(C.name) && (d.debugInfoEnabled = !0, C.name = C.name.replace(e, ""));if (C && !f.test(C.name)) return c();C.name = C.name.replace(f, "");ca.resumeBootstrap = function (a) {
      q(a, function (a) {
        b.push(a);
      });return c();
    };z(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap();
  }function ge() {
    C.name = "NG_ENABLE_DEBUG_INFO!" + C.name;C.location.reload();
  }function he(a) {
    a = ca.element(a).injector();if (!a) throw xa("test");return a.get("$$testability");
  }
  function Cc(a, b) {
    b = b || "_";return a.replace(ie, function (a, c) {
      return (c ? b : "") + a.toLowerCase();
    });
  }function je() {
    var a;if (!Dc) {
      var b = rb();(qa = y(b) ? C.jQuery : b ? C[b] : void 0) && qa.fn.on ? (F = qa, S(qa.fn, { scope: Oa.scope, isolateScope: Oa.isolateScope, controller: Oa.controller, injector: Oa.injector, inheritedData: Oa.inheritedData }), a = qa.cleanData, qa.cleanData = function (b) {
        for (var c, e = 0, f; null != (f = b[e]); e++) (c = qa._data(f, "events")) && c.$destroy && qa(f).triggerHandler("$destroy");a(b);
      }) : F = O;ca.element = F;Dc = !0;
    }
  }function sb(a, b, d) {
    if (!a) throw xa("areq", b || "?", d || "required");return a;
  }function Pa(a, b, d) {
    d && L(a) && (a = a[a.length - 1]);sb(z(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));return a;
  }function Qa(a, b) {
    if ("hasOwnProperty" === a) throw xa("badname", b);
  }function Ec(a, b, d) {
    if (!b) return a;b = b.split(".");for (var c, e = a, f = b.length, g = 0; g < f; g++) c = b[g], a && (a = (e = a)[c]);return !d && z(a) ? ab(e, a) : a;
  }function tb(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) if (c || a[e] !== b) c || (c = F(va.call(a, 0, e))), c.push(b);return c || a;
  }function U() {
    return Object.create(null);
  }function ke(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }var d = N("$injector"),
        c = N("ng");a = b(a, "angular", Object);a.$$minErr = a.$$minErr || N;return b(a, "module", function () {
      var a = {};return function (f, g, h) {
        if ("hasOwnProperty" === f) throw c("badname", "module");g && a.hasOwnProperty(f) && (a[f] = null);return b(a, f, function () {
          function a(b, d, e, f) {
            f || (f = c);return function () {
              f[e || "push"]([b, d, arguments]);return R;
            };
          }function b(a, d) {
            return function (b, e) {
              e && z(e) && (e.$$moduleName = f);c.push([a, d, arguments]);return R;
            };
          }if (!g) throw d("nomod", f);var c = [],
              e = [],
              p = [],
              u = a("$injector", "invoke", "push", e),
              R = { _invokeQueue: c, _configBlocks: e, _runBlocks: p, requires: g, name: f, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), component: b("$compileProvider", "component"), config: u, run: function run(a) {
              p.push(a);return this;
            } };h && u(h);return R;
        });
      };
    });
  }function ia(a, b) {
    if (L(a)) {
      b = b || [];for (var d = 0, c = a.length; d < c; d++) b[d] = a[d];
    } else if (D(a)) for (d in (b = b || {}, a)) if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];return b || a;
  }function le(a) {
    S(a, { bootstrap: Bc, copy: pa, extend: S, merge: Zd, equals: na, element: F, forEach: q, injector: cb, noop: A, bind: ab,
      toJson: bb, fromJson: xc, identity: Xa, isUndefined: y, isDefined: w, isString: G, isFunction: z, isObject: D, isNumber: T, isElement: Qb, isArray: L, version: me, isDate: da, lowercase: Q, uppercase: ub, callbacks: { $$counter: 0 }, getTestability: he, $$minErr: N, $$csp: Ba, reloadWithDebugInfo: ge });Ub = ke(C);Ub("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({ $$sanitizeUri: ne });a.provider("$compile", Fc).directive({ a: oe, input: Gc, textarea: Gc, form: pe, script: qe, select: re, style: se, option: te, ngBind: ue, ngBindHtml: ve, ngBindTemplate: we, ngClass: xe,
        ngClassEven: ye, ngClassOdd: ze, ngCloak: Ae, ngController: Be, ngForm: Ce, ngHide: De, ngIf: Ee, ngInclude: Fe, ngInit: Ge, ngNonBindable: He, ngPluralize: Ie, ngRepeat: Je, ngShow: Ke, ngStyle: Le, ngSwitch: Me, ngSwitchWhen: Ne, ngSwitchDefault: Oe, ngOptions: Pe, ngTransclude: Qe, ngModel: Re, ngList: Se, ngChange: Te, pattern: Hc, ngPattern: Hc, required: Ic, ngRequired: Ic, minlength: Jc, ngMinlength: Jc, maxlength: Kc, ngMaxlength: Kc, ngValue: Ue, ngModelOptions: Ve }).directive({ ngInclude: We }).directive(vb).directive(Lc);a.provider({ $anchorScroll: Xe,
        $animate: Ye, $animateCss: Ze, $$animateJs: $e, $$animateQueue: af, $$AnimateRunner: bf, $$animateAsyncRun: cf, $browser: df, $cacheFactory: ef, $controller: ff, $document: gf, $exceptionHandler: hf, $filter: Mc, $$forceReflow: jf, $interpolate: kf, $interval: lf, $http: mf, $httpParamSerializer: nf, $httpParamSerializerJQLike: of, $httpBackend: pf, $xhrFactory: qf, $jsonpCallbacks: rf, $location: sf, $log: tf, $parse: uf, $rootScope: vf, $q: wf, $$q: xf, $sce: yf, $sceDelegate: zf, $sniffer: Af, $templateCache: Bf, $templateRequest: Cf, $$testability: Df, $timeout: Ef,
        $window: Ff, $$rAF: Gf, $$jqLite: Hf, $$HashMap: If, $$cookieReader: Jf });
    }]);
  }function db(a) {
    return a.replace(Kf, function (a, d, c, e) {
      return e ? c.toUpperCase() : c;
    }).replace(Lf, "Moz$1");
  }function Nc(a) {
    a = a.nodeType;return 1 === a || !a || 9 === a;
  }function Oc(a, b) {
    var d,
        c,
        e = b.createDocumentFragment(),
        f = [];if (Vb.test(a)) {
      d = e.appendChild(b.createElement("div"));c = (Mf.exec(a) || ["", ""])[1].toLowerCase();c = ja[c] || ja._default;d.innerHTML = c[1] + a.replace(Nf, "<$1></$2>") + c[2];for (c = c[0]; c--;) d = d.lastChild;f = $a(f, d.childNodes);d = e.firstChild;
      d.textContent = "";
    } else f.push(b.createTextNode(a));e.textContent = "";e.innerHTML = "";q(f, function (a) {
      e.appendChild(a);
    });return e;
  }function Pc(a, b) {
    var d = a.parentNode;d && d.replaceChild(b, a);b.appendChild(a);
  }function O(a) {
    if (a instanceof O) return a;var b;G(a) && (a = W(a), b = !0);if (!(this instanceof O)) {
      if (b && "<" != a.charAt(0)) throw Wb("nosel");return new O(a);
    }if (b) {
      b = C.document;var d;a = (d = Of.exec(a)) ? [b.createElement(d[1])] : (d = Oc(a, b)) ? d.childNodes : [];
    }Qc(this, a);
  }function Xb(a) {
    return a.cloneNode(!0);
  }function wb(a, b) {
    b || eb(a);if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) eb(d[c]);
  }function Rc(a, b, d, c) {
    if (w(c)) throw Wb("offargs");var e = (c = xb(a)) && c.events,
        f = c && c.handle;if (f) if (b) {
      var g = function g(b) {
        var c = e[b];w(d) && Za(c || [], d);w(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b]);
      };q(b.split(" "), function (a) {
        g(a);yb[a] && g(yb[a]);
      });
    } else for (b in e) "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b];
  }function eb(a, b) {
    var d = a.ng339,
        c = d && fb[d];c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Rc(a)), delete fb[d], a.ng339 = void 0));
  }function xb(a, b) {
    var d = a.ng339,
        d = d && fb[d];b && !d && (a.ng339 = d = ++Pf, d = fb[d] = { events: {}, data: {}, handle: void 0 });return d;
  }function Yb(a, b, d) {
    if (Nc(a)) {
      var c = w(d),
          e = !c && b && !D(b),
          f = !b;a = (a = xb(a, !e)) && a.data;if (c) a[b] = d;else {
        if (f) return a;if (e) return a && a[b];S(a, b);
      }
    }
  }function zb(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
  }function Ab(a, b) {
    b && a.setAttribute && q(b.split(" "), function (b) {
      a.setAttribute("class", W((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + W(b) + " ", " ")));
    });
  }function Bb(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");q(b.split(" "), function (a) {
        a = W(a);-1 === d.indexOf(" " + a + " ") && (d += a + " ");
      });a.setAttribute("class", W(d));
    }
  }function Qc(a, b) {
    if (b) if (b.nodeType) a[a.length++] = b;else {
      var d = b.length;if ("number" === typeof d && b.window !== b) {
        if (d) for (var c = 0; c < d; c++) a[a.length++] = b[c];
      } else a[a.length++] = b;
    }
  }function Sc(a, b) {
    return Cb(a, "$" + (b || "ngController") + "Controller");
  }function Cb(a, b, d) {
    9 == a.nodeType && (a = a.documentElement);for (b = L(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++) if (w(d = F.data(a, b[c]))) return d;a = a.parentNode || 11 === a.nodeType && a.host;
    }
  }function Tc(a) {
    for (wb(a, !0); a.firstChild;) a.removeChild(a.firstChild);
  }function Db(a, b) {
    b || wb(a);var d = a.parentNode;d && d.removeChild(a);
  }function Qf(a, b) {
    b = b || C;if ("complete" === b.document.readyState) b.setTimeout(a);else F(b).on("load", a);
  }function Uc(a, b) {
    var d = Eb[b.toLowerCase()];return d && Vc[wa(a)] && d;
  }function Rf(a, b) {
    var d = function d(c, _d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };var f = b[_d || c.type],
          g = f ? f.length : 0;if (g) {
        if (y(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();h && h.call(c);
          };
        }c.isImmediatePropagationStopped = function () {
          return !0 === c.immediatePropagationStopped;
        };var k = f.specialHandlerWrapper || Sf;1 < g && (f = ia(f));for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, f[l]);
      }
    };d.elem = a;return d;
  }function Sf(a, b, d) {
    d.call(a, b);
  }function Tf(a, b, d) {
    var c = b.relatedTarget;c && (c === a || Uf.call(a, c)) || d.call(a, b);
  }function Hf() {
    this.$get = function () {
      return S(O, { hasClass: function hasClass(a, b) {
          a.attr && (a = a[0]);return zb(a, b);
        }, addClass: function addClass(a, b) {
          a.attr && (a = a[0]);return Bb(a, b);
        }, removeClass: function removeClass(a, b) {
          a.attr && (a = a[0]);return Ab(a, b);
        } });
    };
  }function Ca(a, b) {
    var d = a && a.$$hashKey;if (d) return "function" === typeof d && (d = a.$$hashKey()), d;d = typeof a;return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Yd)() : d + ":" + a;
  }function Ra(a, b) {
    if (b) {
      var d = 0;this.nextUid = function () {
        return ++d;
      };
    }q(a, this.put, this);
  }function Wc(a) {
    a = (Function.prototype.toString.call(a) + " ").replace(Vf, "");return a.match(Wf) || a.match(Xf);
  }function Yf(a) {
    return (a = Wc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }function cb(a, b) {
    function d(a) {
      return function (b, c) {
        if (D(b)) q(b, uc(a));else return a(b, c);
      };
    }function c(a, b) {
      Qa(a, "service");if (z(b) || L(b)) b = p.instantiate(b);if (!b.$get) throw Ha("pget", a);return n[a + "Provider"] = b;
    }function e(a, b) {
      return function () {
        var c = B.invoke(b, this);if (y(c)) throw Ha("undef", a);return c;
      };
    }function f(a, b, d) {
      return c(a, { $get: !1 !== d ? e(a, b) : b });
    }function g(a) {
      sb(y(a) || L(a), "modulesToLoad", "not an array");var b = [],
          c;q(a, function (a) {
        function d(a) {
          var b, c;b = 0;for (c = a.length; b < c; b++) {
            var e = a[b],
                f = p.get(e[0]);f[e[1]].apply(f, e[2]);
          }
        }if (!m.get(a)) {
          m.put(a, !0);try {
            G(a) ? (c = Ub(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : z(a) ? b.push(p.invoke(a)) : L(a) ? b.push(p.invoke(a)) : Pa(a, "module");
          } catch (e) {
            throw (L(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ha("modulerr", a, e.stack || e.message || e));
          }
        }
      });return b;
    }function h(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === k) throw Ha("cdep", b + " <- " + l.join(" <- "));return a[b];
        }try {
          return l.unshift(b), a[b] = k, a[b] = c(b, e);
        } catch (f) {
          throw (a[b] === k && delete a[b], f);
        } finally {
          l.shift();
        }
      }function e(a, c, f) {
        var g = [];a = cb.$$annotate(a, b, f);for (var h = 0, k = a.length; h < k; h++) {
          var l = a[h];if ("string" !== typeof l) throw Ha("itkn", l);g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
        }return g;
      }return { invoke: function invoke(a, b, c, d) {
          "string" === typeof c && (d = c, c = null);c = e(a, c, d);L(a) && (a = a[a.length - 1]);d = 11 >= Ea ? !1 : "function" === typeof a && /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a) + " ");return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
        }, instantiate: function instantiate(a, b, c) {
          var d = L(a) ? a[a.length - 1] : a;a = e(a, b, c);a.unshift(null);return new (Function.prototype.bind.apply(d, a))();
        }, get: d, annotate: cb.$$annotate, has: function has(b) {
          return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
        } };
    }b = !0 === b;var k = {},
        l = [],
        m = new Ra([], !0),
        n = { $provide: { provider: d(c), factory: d(f), service: d(function (a, b) {
          return f(a, ["$injector", function (a) {
            return a.instantiate(b);
          }]);
        }), value: d(function (a, b) {
          return f(a, ha(b), !1);
        }), constant: d(function (a, b) {
          Qa(a, "constant");n[a] = b;u[a] = b;
        }), decorator: function decorator(a, b) {
          var c = p.get(a + "Provider"),
              d = c.$get;c.$get = function () {
            var a = B.invoke(d, c);return B.invoke(b, null, { $delegate: a });
          };
        } } },
        p = n.$injector = h(n, function (a, b) {
      ca.isString(b) && l.push(b);throw Ha("unpr", l.join(" <- "));
    }),
        u = {},
        R = h(u, function (a, b) {
      var c = p.get(a + "Provider", b);return B.invoke(c.$get, c, void 0, a);
    }),
        B = R;n.$injectorProvider = { $get: ha(R) };var r = g(a),
        B = R.get("$injector");B.strictDi = b;q(r, function (a) {
      a && B.invoke(a);
    });return B;
  }function Xe() {
    var a = !0;this.disableAutoScrolling = function () {
      a = !1;
    };this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
      function e(a) {
        var b = null;Array.prototype.some.call(a, function (a) {
          if ("a" === wa(a)) return b = a, !0;
        });return b;
      }function f(a) {
        if (a) {
          a.scrollIntoView();var c;c = g.yOffset;z(c) ? c = c() : Qb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : T(c) || (c = 0);c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
        } else b.scrollTo(0, 0);
      }function g(a) {
        a = G(a) ? a : d.hash();var b;a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }var h = b.document;a && c.$watch(function () {
        return d.hash();
      }, function (a, b) {
        a === b && "" === a || Qf(function () {
          c.$evalAsync(g);
        });
      });return g;
    }];
  }function gb(a, b) {
    if (!a && !b) return "";if (!a) return b;if (!b) return a;L(a) && (a = a.join(" "));L(b) && (b = b.join(" "));return a + " " + b;
  }function Zf(a) {
    G(a) && (a = a.split(" "));var b = U();q(a, function (a) {
      a.length && (b[a] = !0);
    });return b;
  }function Ia(a) {
    return D(a) ? a : {};
  }function $f(a, b, d, c) {
    function e(a) {
      try {
        a.apply(null, va.call(arguments, 1));
      } finally {
        if ((R--, 0 === R)) for (; B.length;) try {
          B.pop()();
        } catch (b) {
          d.error(b);
        }
      }
    }
    function f() {
      t = null;g();h();
    }function g() {
      r = K();r = y(r) ? null : r;na(r, E) && (r = E);E = r;
    }function h() {
      if (v !== k.url() || J !== r) v = k.url(), J = r, q(M, function (a) {
        a(k.url(), r);
      });
    }var k = this,
        l = a.location,
        m = a.history,
        n = a.setTimeout,
        p = a.clearTimeout,
        u = {};k.isMock = !1;var R = 0,
        B = [];k.$$completeOutstandingRequest = e;k.$$incOutstandingRequestCount = function () {
      R++;
    };k.notifyWhenNoOutstandingRequests = function (a) {
      0 === R ? a() : B.push(a);
    };var r,
        J,
        v = l.href,
        fa = b.find("base"),
        t = null,
        K = c.history ? function () {
      try {
        return m.state;
      } catch (a) {}
    } : A;g();J = r;k.url = function (b, d, e) {
      y(e) && (e = null);l !== a.location && (l = a.location);m !== a.history && (m = a.history);if (b) {
        var f = J === e;if (v === b && (!c.history || f)) return k;var h = v && Ja(v) === Ja(b);v = b;J = e;!c.history || h && f ? (h || (t = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (t = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g(), J = r);t && (t = b);return k;
      }return t || l.href.replace(/%27/g, "'");
    };k.state = function () {
      return r;
    };var M = [],
        H = !1,
        E = null;k.onUrlChange = function (b) {
      if (!H) {
        if (c.history) F(a).on("popstate", f);F(a).on("hashchange", f);H = !0;
      }M.push(b);return b;
    };k.$$applicationDestroyed = function () {
      F(a).off("hashchange popstate", f);
    };k.$$checkUrlChange = h;k.baseHref = function () {
      var a = fa.attr("href");return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
    };k.defer = function (a, b) {
      var c;R++;c = n(function () {
        delete u[c];e(a);
      }, b || 0);u[c] = !0;return c;
    };k.defer.cancel = function (a) {
      return u[a] ? (delete u[a], p(a), e(A), !0) : !1;
    };
  }function df() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
      return new $f(a, c, b, d);
    }];
  }function ef() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
        }function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }if (a in b) throw N("$cacheFactory")("iid", a);var g = 0,
            h = S({}, c, { id: a }),
            k = U(),
            l = c && c.capacity || Number.MAX_VALUE,
            m = U(),
            n = null,
            p = null;return b[a] = { put: function put(a, b) {
            if (!y(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = { key: a });e(c);
              }a in k || g++;k[a] = b;g > l && this.remove(p.key);return b;
            }
          }, get: function get(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];
              if (!b) return;e(b);
            }return k[a];
          }, remove: function remove(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;b == n && (n = b.p);b == p && (p = b.n);f(b.n, b.p);delete m[a];
            }a in k && (delete k[a], g--);
          }, removeAll: function removeAll() {
            k = U();g = 0;m = U();n = p = null;
          }, destroy: function destroy() {
            m = h = k = null;delete b[a];
          }, info: function info() {
            return S({}, h, { size: g });
          } };
      }var b = {};a.info = function () {
        var a = {};q(b, function (b, e) {
          a[e] = b.info();
        });return a;
      };a.get = function (a) {
        return b[a];
      };return a;
    };
  }function Bf() {
    this.$get = ["$cacheFactory", function (a) {
      return a("templates");
    }];
  }
  function Fc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
          e = U();q(a, function (a, f) {
        if (a in n) e[f] = n[a];else {
          var g = a.match(d);if (!g) throw ga("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };g[4] && (n[a] = e[f]);
        }
      });return e;
    }function c(a) {
      var b = a.charAt(0);if (!b || b !== Q(b)) throw ga("baddir", a);if (a !== a.trim()) throw ga("baddir", a);
    }function e(a) {
      var b = a.require || a.controller && a.name;
      !L(b) && D(b) && q(b, function (a, c) {
        var d = a.match(l);a.substring(d[0].length) || (b[c] = d[0] + c);
      });return b;
    }var f = {},
        g = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        h = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        k = be("ngSrc,ngSrcset,src,srcset"),
        l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        m = /^(on[a-z]+|formaction)$/,
        n = U();this.directive = function B(b, d) {
      Qa(b, "directive");G(b) ? (c(b), sb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
        var d = [];q(f[b], function (f, g) {
          try {
            var h = a.invoke(f);z(h) ? h = { compile: ha(h) } : !h.compile && h.link && (h.compile = ha(h.link));h.priority = h.priority || 0;h.index = g;h.name = h.name || b;h.require = e(h);h.restrict = h.restrict || "EA";h.$$moduleName = f.$$moduleName;d.push(h);
          } catch (k) {
            c(k);
          }
        });return d;
      }])), f[b].push(d)) : q(b, uc(B));return this;
    };this.component = function (a, b) {
      function c(a) {
        function e(b) {
          return z(b) || L(b) ? function (c, d) {
            return a.invoke(b, this, { $element: c, $attrs: d });
          } : b;
        }var f = b.template || b.templateUrl ? b.template : "",
            g = { controller: d, controllerAs: Xc(b.controller) || b.controllerAs || "$ctrl", template: e(f), templateUrl: e(b.templateUrl), transclude: b.transclude, scope: {}, bindToController: b.bindings || {}, restrict: "E", require: b.require };q(b, function (a, b) {
          "$" === b.charAt(0) && (g[b] = a);
        });return g;
      }var d = b.controller || function () {};q(b, function (a, b) {
        "$" === b.charAt(0) && (c[b] = a, z(d) && (d[b] = a));
      });c.$inject = ["$injector"];return this.directive(a, c);
    };this.aHrefSanitizationWhitelist = function (a) {
      return w(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
    };this.imgSrcSanitizationWhitelist = function (a) {
      return w(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
    };var p = !0;this.debugInfoEnabled = function (a) {
      return w(a) ? (p = a, this) : p;
    };var u = 10;this.onChangesTtl = function (a) {
      return arguments.length ? (u = a, this) : u;
    };this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, e, n, t, K, M, H, E) {
      function I() {
        try {
          if (! --qa) throw (Y = void 0, ga("infchng", u));K.$apply(function () {
            for (var a = [], b = 0, c = Y.length; b < c; ++b) try {
              Y[b]();
            } catch (d) {
              a.push(d);
            }Y = void 0;if (a.length) throw a;
          });
        } finally {
          qa++;
        }
      }function Da(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              f;d = 0;for (e = c.length; d < e; d++) f = c[d], this[f] = b[f];
        } else this.$attr = {};this.$$element = a;
      }function P(a, b, c) {
        pa.innerHTML = "<span " + b + ">";b = pa.firstChild.attributes;var d = b[0];b.removeNamedItem(d.name);d.value = c;a.attributes.setNamedItem(d);
      }function x(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }function aa(a, b, c, d, e) {
        a instanceof F || (a = F(a));for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
          var k = a[g];k.nodeType === Ma && k.nodeValue.match(f) && Pc(k, a[g] = C.document.createElement("span"));
        }var l = s(a, b, a, c, d, e);aa.$$addScopeClass(a);var m = null;return function (b, c, d) {
          sb(b, "scope");e && e.needsNewScope && (b = b.$parent.$new());d = d || {};var f = d.parentBoundTranscludeFn,
              g = d.transcludeControllers;d = d.futureParentElement;f && f.$$boundTransclude && (f = f.$$boundTransclude);m || (m = (d = d && d[0]) ? "foreignobject" !== wa(d) && ma.call(d).match(/SVG/) ? "svg" : "html" : "html");d = "html" !== m ? F(da(m, F("<div>").append(a).html())) : c ? Oa.clone.call(a) : a;if (g) for (var h in g) d.data("$" + h + "Controller", g[h].instance);aa.$$addScopeInfo(d, b);c && c(d, b);l && l(b, d, d, f);return d;
        };
      }function s(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, k, l, m, p, r, v;if (n) for (v = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], v[f] = c[f];else v = c;m = 0;for (p = h.length; m < p;) k = v[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), aa.$$addScopeInfo(F(k), l)) : l = a, r = c.transcludeOnThisElement ? za(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? za(a, b) : null, c(f, l, k, d, r)) : f && f(a, k.childNodes, void 0, e);
        }for (var h = [], k, l, m, p, n, r = 0; r < a.length; r++) {
          k = new Da();l = $b(a[r], [], k, 0 === r ? d : void 0, e);(f = l.length ? oa(l, a[r], k, b, c, null, [], [], f) : null) && f.scope && aa.$$addScopeClass(k.$$element);k = f && f.terminal || !(m = a[r].childNodes) || !m.length ? null : s(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || k) h.push(r, f, k), p = !0, n = n || f;f = null;
        }return p ? g : null;
      }function za(a, b, c) {
        function d(e, f, g, h, k) {
          e || (e = a.$new(!1, k), e.$$transcluded = !0);return b(e, f, { parentBoundTranscludeFn: c,
            transcludeControllers: g, futureParentElement: h });
        }var e = d.$$slots = U(),
            f;for (f in b.$$slots) e[f] = b.$$slots[f] ? za(a, b.$$slots[f], c) : null;return d;
      }function $b(a, b, c, d, e) {
        var f = c.$attr;switch (a.nodeType) {case 1:
            O(b, Aa(wa(a)), "E", d, e);for (var g, k, l, m, p = a.attributes, n = 0, r = p && p.length; n < r; n++) {
              var v = !1,
                  u = !1;g = p[n];k = g.name;l = W(g.value);g = Aa(k);if (m = Ba.test(g)) k = k.replace(Yc, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              });(g = g.match(Ca)) && V(g[1]) && (v = k, u = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));g = Aa(k.toLowerCase());f[g] = k;if (m || !c.hasOwnProperty(g)) c[g] = l, Uc(a, g) && (c[g] = !0);ia(a, b, l, g, m);O(b, g, "A", d, e, v, u);
            }f = a.className;D(f) && (f = f.animVal);if (G(f) && "" !== f) for (; a = h.exec(f);) g = Aa(a[2]), O(b, g, "C", d, e) && (c[g] = W(a[3])), f = f.substr(a.index + a[0].length);break;case Ma:
            if (11 === Ea) for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Ma;) a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);ca(b, a.nodeValue);break;case 8:
            hb(a, b, c, d, e);}b.sort(Z);
        return b;
      }function hb(a, b, c, d, e) {
        try {
          var f = g.exec(a.nodeValue);if (f) {
            var h = Aa(f[1]);O(b, h, "M", d, e) && (c[h] = W(f[2]));
          }
        } catch (k) {}
      }function N(a, b, c) {
        var d = [],
            e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ga("uterdir", b, c);1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);return F(d);
      }function Zc(a, b, c) {
        return function (d, e, f, g, h) {
          e = N(e[0], b, c);return a(d, e, f, g, h);
        };
      }function ac(a, b, c, d, e, f) {
        var g;return a ? aa(b, c, d, e, f) : function () {
          g || (g = aa(b, c, d, e, f), b = c = f = null);return g.apply(this, arguments);
        };
      }function oa(a, b, d, e, f, g, h, k, l) {
        function m(a, b, c, d) {
          if (a) {
            c && (a = Zc(a, c, d));a.require = x.require;a.directiveName = I;if (u === x || x.$$isolateScope) a = ja(a, { isolateScope: !0 });h.push(a);
          }if (b) {
            c && (b = Zc(b, c, d));b.require = x.require;b.directiveName = I;if (u === x || x.$$isolateScope) b = ja(b, { isolateScope: !0 });k.push(b);
          }
        }function p(a, e, f, g, l) {
          function m(a, b, c, d) {
            var e;Ya(a) || (d = c, c = b, b = a, a = void 0);fa && (e = t);c || (c = fa ? I.parent() : I);if (d) {
              var f = l.$$slots[d];if (f) return f(a, b, e, c, s);if (y(f)) throw ga("noslot", d, ya(I));
            } else return l(a, b, e, c, s);
          }var n, E, x, M, B, t, P, I;b === f ? (g = d, I = d.$$element) : (I = F(f), g = new Da(I, d));B = e;u ? M = e.$new(!0) : r && (B = e.$parent);l && (P = m, P.$$boundTransclude = l, P.isSlotFilled = function (a) {
            return !!l.$$slots[a];
          });v && (t = ag(I, g, P, v, M, e, u));u && (aa.$$addScopeInfo(I, M, !0, !(H && (H === u || H === u.$$originalDirective))), aa.$$addScopeClass(I, !0), M.$$isolateBindings = u.$$isolateBindings, E = ka(e, g, M, M.$$isolateBindings, u), E.removeWatches && M.$on("$destroy", E.removeWatches));
          for (n in t) {
            E = v[n];x = t[n];var Zb = E.$$bindings.bindToController;x.bindingInfo = x.identifier && Zb ? ka(B, g, x.instance, Zb, E) : {};var K = x();K !== x.instance && (x.instance = K, I.data("$" + E.name + "Controller", K), x.bindingInfo.removeWatches && x.bindingInfo.removeWatches(), x.bindingInfo = ka(B, g, x.instance, Zb, E));
          }q(v, function (a, b) {
            var c = a.require;a.bindToController && !L(c) && D(c) && S(t[b].instance, ib(b, c, I, t));
          });q(t, function (a) {
            var b = a.instance;if (z(b.$onChanges)) try {
              b.$onChanges(a.bindingInfo.initialChanges);
            } catch (d) {
              c(d);
            }if (z(b.$onInit)) try {
              b.$onInit();
            } catch (e) {
              c(e);
            }z(b.$doCheck) && (B.$watch(function () {
              b.$doCheck();
            }), b.$doCheck());z(b.$onDestroy) && B.$on("$destroy", function () {
              b.$onDestroy();
            });
          });n = 0;for (E = h.length; n < E; n++) x = h[n], la(x, x.isolateScope ? M : e, I, g, x.require && ib(x.directiveName, x.require, I, t), P);var s = e;u && (u.template || null === u.templateUrl) && (s = M);a && a(s, f.childNodes, void 0, l);for (n = k.length - 1; 0 <= n; n--) x = k[n], la(x, x.isolateScope ? M : e, I, g, x.require && ib(x.directiveName, x.require, I, t), P);q(t, function (a) {
            a = a.instance;z(a.$postLink) && a.$postLink();
          });
        }l = l || {};for (var n = -Number.MAX_VALUE, r = l.newScopeDirective, v = l.controllerDirectives, u = l.newIsolateScopeDirective, H = l.templateDirective, E = l.nonTlbTranscludeDirective, M = !1, B = !1, fa = l.hasElementTranscludeDirective, t = d.$$element = F(b), x, I, P, K = e, s, Fa = !1, za = !1, w, A = 0, C = a.length; A < C; A++) {
          x = a[A];var G = x.$$start,
              hb = x.$$end;G && (t = N(b, G, hb));P = void 0;if (n > x.priority) break;if (w = x.scope) x.templateUrl || (D(w) ? (X("new/isolated scope", u || r, x, t), u = x) : X("new/isolated scope", u, x, t)), r = r || x;I = x.name;if (!Fa && (x.replace && (x.templateUrl || x.template) || x.transclude && !x.$$tlb)) {
            for (w = A + 1; Fa = a[w++];) if (Fa.transclude && !Fa.$$tlb || Fa.replace && (Fa.templateUrl || Fa.template)) {
              za = !0;break;
            }Fa = !0;
          }!x.templateUrl && x.controller && (w = x.controller, v = v || U(), X("'" + I + "' controller", v[I], x, t), v[I] = x);if (w = x.transclude) if ((M = !0, x.$$tlb || (X("transclusion", E, x, t), E = x), "element" == w)) fa = !0, n = x.priority, P = t, t = d.$$element = F(aa.$$createComment(I, d[I])), b = t[0], ea(f, va.call(P, 0), b), P[0].$$parentNode = P[0].parentNode, K = ac(za, P, e, n, g && g.name, { nonTlbTranscludeDirective: E });else {
            var oa = U();P = F(Xb(b)).contents();
            if (D(w)) {
              P = [];var Q = U(),
                  O = U();q(w, function (a, b) {
                var c = "?" === a.charAt(0);a = c ? a.substring(1) : a;Q[a] = b;oa[b] = null;O[b] = c;
              });q(t.contents(), function (a) {
                var b = Q[Aa(wa(a))];b ? (O[b] = !0, oa[b] = oa[b] || [], oa[b].push(a)) : P.push(a);
              });q(O, function (a, b) {
                if (!a) throw ga("reqslot", b);
              });for (var V in oa) oa[V] && (oa[V] = ac(za, oa[V], e));
            }t.empty();K = ac(za, P, e, void 0, void 0, { needsNewScope: x.$$isolateScope || x.$$newScope });K.$$slots = oa;
          }if (x.template) if ((B = !0, X("template", H, x, t), H = x, w = z(x.template) ? x.template(t, d) : x.template, w = xa(w), x.replace)) {
            g = x;P = Vb.test(w) ? $c(da(x.templateNamespace, W(w))) : [];b = P[0];if (1 != P.length || 1 !== b.nodeType) throw ga("tplrt", I, "");ea(f, t, b);C = { $attr: {} };w = $b(b, [], C);var Z = a.splice(A + 1, a.length - (A + 1));(u || r) && T(w, u, r);a = a.concat(w).concat(Z);$(d, C);C = a.length;
          } else t.html(w);if (x.templateUrl) B = !0, X("template", H, x, t), H = x, x.replace && (g = x), p = ba(a.splice(A, a.length - A), t, d, f, M && K, h, k, { controllerDirectives: v, newScopeDirective: r !== x && r, newIsolateScopeDirective: u, templateDirective: H, nonTlbTranscludeDirective: E }), C = a.length;else if (x.compile) try {
            s = x.compile(t, d, K);var Y = x.$$originalDirective || x;z(s) ? m(null, ab(Y, s), G, hb) : s && m(ab(Y, s.pre), ab(Y, s.post), G, hb);
          } catch (ca) {
            c(ca, ya(t));
          }x.terminal && (p.terminal = !0, n = Math.max(n, x.priority));
        }p.scope = r && !0 === r.scope;p.transcludeOnThisElement = M;p.templateOnThisElement = B;p.transclude = K;l.hasElementTranscludeDirective = fa;return p;
      }function ib(a, b, c, d) {
        var e;if (G(b)) {
          var f = b.match(l);b = b.substring(f[0].length);var g = f[1] || f[3],
              f = "?" === f[2];"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;if (!e) {
            var h = "$" + b + "Controller";e = g ? c.inheritedData(h) : c.data(h);
          }if (!e && !f) throw ga("ctreq", b, a);
        } else if (L(b)) for (e = [], g = 0, f = b.length; g < f; g++) e[g] = ib(a, b[g], c, d);else D(b) && (e = {}, q(b, function (b, f) {
          e[f] = ib(a, b, c, d);
        }));return e || null;
      }function ag(a, b, c, d, e, f, g) {
        var h = U(),
            k;for (k in d) {
          var l = d[k],
              m = { $scope: l === g || l.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c },
              p = l.controller;"@" == p && (p = b[l.name]);m = t(p, m, !0, l.controllerAs);h[l.name] = m;a.data("$" + l.name + "Controller", m.instance);
        }return h;
      }
      function T(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) a[d] = Rb(a[d], { $$isolateScope: b, $$newScope: c });
      }function O(b, e, g, h, k, l, m) {
        if (e === k) return null;k = null;if (f.hasOwnProperty(e)) {
          var p;e = a.get(e + "Directive");for (var n = 0, r = e.length; n < r; n++) try {
            if ((p = e[n], (y(h) || h > p.priority) && -1 != p.restrict.indexOf(g))) {
              l && (p = Rb(p, { $$start: l, $$end: m }));if (!p.$$bindings) {
                var u = p,
                    v = p,
                    x = p.name,
                    H = { isolateScope: null, bindToController: null };D(v.scope) && (!0 === v.bindToController ? (H.bindToController = d(v.scope, x, !0), H.isolateScope = {}) : H.isolateScope = d(v.scope, x, !1));D(v.bindToController) && (H.bindToController = d(v.bindToController, x, !0));if (D(H.bindToController)) {
                  var E = v.controller,
                      M = v.controllerAs;if (!E) throw ga("noctrl", x);if (!Xc(E, M)) throw ga("noident", x);
                }var t = u.$$bindings = H;D(t.isolateScope) && (p.$$isolateBindings = t.isolateScope);
              }b.push(p);k = p;
            }
          } catch (I) {
            c(I);
          }
        }return k;
      }function V(b) {
        if (f.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++) if ((b = c[d], b.multiElement)) return !0;return !1;
      }function $(a, b) {
        var c = b.$attr,
            d = a.$attr;q(a, function (d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
        });q(b, function (b, e) {
          a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
        });
      }function ba(a, b, c, d, f, g, h, k) {
        var l = [],
            m,
            p,
            n = b[0],
            r = a.shift(),
            u = Rb(r, { templateUrl: null, transclude: null, replace: null, $$originalDirective: r }),
            H = z(r.templateUrl) ? r.templateUrl(b, c) : r.templateUrl,
            E = r.templateNamespace;b.empty();e(H).then(function (e) {
          var v, M;e = xa(e);if (r.replace) {
            e = Vb.test(e) ? $c(da(E, W(e))) : [];v = e[0];if (1 != e.length || 1 !== v.nodeType) throw ga("tplrt", r.name, H);e = { $attr: {} };ea(d, b, v);var B = $b(v, [], e);D(r.scope) && T(B, !0);a = B.concat(a);$(c, e);
          } else v = n, b.html(e);a.unshift(u);m = oa(a, v, c, f, b, r, g, h, k);q(d, function (a, c) {
            a == v && (d[c] = b[0]);
          });for (p = s(b[0].childNodes, f); l.length;) {
            e = l.shift();M = l.shift();var t = l.shift(),
                I = l.shift(),
                B = b[0];if (!e.$$destroyed) {
              if (M !== n) {
                var P = M.className;k.hasElementTranscludeDirective && r.replace || (B = Xb(v));ea(t, F(M), B);x(F(B), P);
              }M = m.transcludeOnThisElement ? za(e, m.transclude, I) : I;m(p, e, B, d, M);
            }
          }l = null;
        });return function (a, b, c, d, e) {
          a = e;b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = za(b, m.transclude, e)), m(p, b, c, d, a)));
        };
      }function Z(a, b) {
        var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }function X(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : "";
        }if (b) throw ga("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ya(d));
      }function ca(a, c) {
        var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
            a = a.parent();var b = !!a.length;b && aa.$$addBindingClass(a);return function (a, c) {
              var e = c.parent();b || aa.$$addBindingClass(e);aa.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
                c[0].nodeValue = a;
              });
            };
          } });
      }function da(a, b) {
        a = Q(a || "html");switch (a) {case "svg":case "math":
            var c = C.document.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
            return b;}
      }function ha(a, b) {
        if ("srcdoc" == b) return M.HTML;var c = wa(a);if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return M.RESOURCE_URL;
      }function ia(a, c, d, e, f) {
        var g = ha(a, e);f = k[e] || f;var h = b(d, !0, g, f);if (h) {
          if ("multiple" === e && "select" === wa(a)) throw ga("selmulti", ya(a));c.push({ priority: 100, compile: function compile() {
              return { pre: function pre(a, c, k) {
                  c = k.$$observers || (k.$$observers = U());if (m.test(e)) throw ga("nodomevents");var l = k[e];l !== d && (h = l && b(l, !0, g, f), d = l);h && (k[e] = h(a), (c[e] || (c[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                    "class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a);
                  }));
                } };
            } });
        }
      }function ea(a, b, c) {
        var d = b[0],
            e = b.length,
            f = d.parentNode,
            g,
            h;if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] == d) {
          a[g++] = c;h = g + e - 1;for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];a.length -= e - 1;a.context === d && (a.context = c);break;
        }f && f.replaceChild(c, d);a = C.document.createDocumentFragment();for (g = 0; g < e; g++) a.appendChild(b[g]);F.hasData(d) && (F.data(c, F.data(d)), F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for (g = 1; g < e; g++) delete b[g];b[0] = c;b.length = 1;
      }function ja(a, b) {
        return S(function () {
          return a.apply(null, arguments);
        }, a, b);
      }function la(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (h) {
          c(h, ya(d));
        }
      }function ka(a, c, d, e, f) {
        function g(b, c, e) {
          z(d.$onChanges) && c !== e && (Y || (a.$$postDigest(I), Y = []), m || (m = {}, Y.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Fb(e, c));
        }function h() {
          d.$onChanges(m);m = void 0;
        }var k = [],
            l = {},
            m;q(e, function (e, h) {
          var m = e.attrName,
              p = e.optional,
              v,
              u,
              x,
              H;switch (e.mode) {case "@":
              p || ua.call(c, m) || (d[h] = c[m] = void 0);c.$observe(m, function (a) {
                if (G(a) || Ga(a)) g(h, a, d[h]), d[h] = a;
              });c.$$observers[m].$$scope = a;v = c[m];G(v) ? d[h] = b(v)(a) : Ga(v) && (d[h] = v);l[h] = new Fb(bc, d[h]);break;case "=":
              if (!ua.call(c, m)) {
                if (p) break;c[m] = void 0;
              }if (p && !c[m]) break;u = n(c[m]);H = u.literal ? na : function (a, b) {
                return a === b || a !== a && b !== b;
              };x = u.assign || function () {
                v = d[h] = u(a);throw ga("nonassign", c[m], m, f.name);
              };v = d[h] = u(a);p = function (b) {
                H(b, d[h]) || (H(b, v) ? x(a, b = d[h]) : d[h] = b);return v = b;
              };p.$stateful = !0;p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, u.literal);k.push(p);break;case "<":
              if (!ua.call(c, m)) {
                if (p) break;c[m] = void 0;
              }if (p && !c[m]) break;u = n(c[m]);var E = d[h] = u(a);l[h] = new Fb(bc, d[h]);p = a.$watch(u, function (a, b) {
                if (b === a) {
                  if (b === E) return;b = E;
                }g(h, a, b);d[h] = a;
              }, u.literal);k.push(p);break;case "&":
              u = c.hasOwnProperty(m) ? n(c[m]) : A;if (u === A && p) break;d[h] = function (b) {
                return u(a, b);
              };}
        });return { initialChanges: l, removeWatches: k.length && function () {
            for (var a = 0, b = k.length; a < b; ++a) k[a]();
          } };
      }var ta = /^\w/,
          pa = C.document.createElement("div"),
          qa = u,
          Y;Da.prototype = { $normalize: Aa, $addClass: function $addClass(a) {
          a && 0 < a.length && H.addClass(this.$$element, a);
        }, $removeClass: function $removeClass(a) {
          a && 0 < a.length && H.removeClass(this.$$element, a);
        }, $updateClass: function $updateClass(a, b) {
          var c = ad(a, b);c && c.length && H.addClass(this.$$element, c);(c = ad(b, a)) && c.length && H.removeClass(this.$$element, c);
        }, $set: function $set(a, b, d, e) {
          var f = Uc(this.$$element[0], a),
              g = bd[a],
              h = a;f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Cc(a, "-"));f = wa(this.$$element);if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = E(b, "src" === a);else if ("img" === f && "srcset" === a && w(b)) {
            for (var f = "", g = W(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) var m = 2 * l, f = f + E(W(g[m]), !0), f = f + (" " + W(g[m + 1]));g = W(g[2 * l]).split(/\s/);f += E(W(g[0]), !0);2 === g.length && (f += " " + W(g[1]));this[a] = b = f;
          }!1 !== d && (null === b || y(b) ? this.$$element.removeAttr(e) : ta.test(e) ? this.$$element.attr(e, b) : P(this.$$element[0], e, b));(a = this.$$observers) && q(a[h], function (a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        },
        $observe: function $observe(a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = U()),
              e = d[a] || (d[a] = []);e.push(b);K.$evalAsync(function () {
            e.$$inter || !c.hasOwnProperty(a) || y(c[a]) || b(c[a]);
          });return function () {
            Za(e, b);
          };
        } };var ra = b.startSymbol(),
          sa = b.endSymbol(),
          xa = "{{" == ra && "}}" == sa ? Xa : function (a) {
        return a.replace(/\{\{/g, ra).replace(/}}/g, sa);
      },
          Ba = /^ngAttr[A-Z]/,
          Ca = /^(.+)Start$/;aa.$$addBindingInfo = p ? function (a, b) {
        var c = a.data("$binding") || [];L(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
      } : A;aa.$$addBindingClass = p ? function (a) {
        x(a, "ng-binding");
      } : A;aa.$$addScopeInfo = p ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : A;aa.$$addScopeClass = p ? function (a, b) {
        x(a, b ? "ng-isolate-scope" : "ng-scope");
      } : A;aa.$$createComment = function (a, b) {
        var c = "";p && (c = " " + (a || "") + ": ", b && (c += b + " "));return C.document.createComment(c);
      };return aa;
    }];
  }function Fb(a, b) {
    this.previousValue = a;this.currentValue = b;
  }function Aa(a) {
    return db(a.replace(Yc, ""));
  }function ad(a, b) {
    var d = "",
        c = a.split(/\s+/),
        e = b.split(/\s+/),
        f = 0;a: for (; f < c.length; f++) {
      for (var g = c[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;d += (0 < d.length ? " " : "") + g;
    }return d;
  }function $c(a) {
    a = F(a);var b = a.length;if (1 >= b) return a;for (; b--;) 8 === a[b].nodeType && bg.call(a, b, 1);return a;
  }function Xc(a, b) {
    if (b && G(b)) return b;if (G(a)) {
      var d = cd.exec(a);if (d) return d[3];
    }
  }function ff() {
    var a = {},
        b = !1;this.has = function (b) {
      return a.hasOwnProperty(b);
    };this.register = function (b, c) {
      Qa(b, "controller");D(b) ? S(a, b) : a[b] = c;
    };this.allowGlobals = function () {
      b = !0;
    };this.$get = ["$injector", "$window", function (d, c) {
      function e(a, b, c, d) {
        if (!a || !D(a.$scope)) throw N("$controller")("noscp", d, b);a.$scope[b] = c;
      }return function (f, g, h, k) {
        var l, m, n;h = !0 === h;k && G(k) && (n = k);if (G(f)) {
          k = f.match(cd);if (!k) throw cg("ctrlfmt", f);m = k[1];n = n || k[3];f = a.hasOwnProperty(m) ? a[m] : Ec(g.$scope, m, !0) || (b ? Ec(c, m, !0) : void 0);Pa(f, m, !0);
        }if (h) return h = (L(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), S(function () {
          var a = d.invoke(f, l, g, m);a !== l && (D(a) || z(a)) && (l = a, n && e(g, n, l, m || f.name));return l;
        }, { instance: l, identifier: n });l = d.instantiate(f, g, m);n && e(g, n, l, m || f.name);return l;
      };
    }];
  }function gf() {
    this.$get = ["$window", function (a) {
      return F(a.document);
    }];
  }function hf() {
    this.$get = ["$log", function (a) {
      return function (b, d) {
        a.error.apply(a, arguments);
      };
    }];
  }function cc(a) {
    return D(a) ? da(a) ? a.toISOString() : bb(a) : a;
  }function nf() {
    this.$get = function () {
      return function (a) {
        if (!a) return "";var b = [];tc(a, function (a, c) {
          null === a || y(a) || (L(a) ? q(a, function (a) {
            b.push(ea(c) + "=" + ea(cc(a)));
          }) : b.push(ea(c) + "=" + ea(cc(a))));
        });
        return b.join("&");
      };
    };
  }function of() {
    this.$get = function () {
      return function (a) {
        function b(a, e, f) {
          null === a || y(a) || (L(a) ? q(a, function (a, c) {
            b(a, e + "[" + (D(a) ? c : "") + "]");
          }) : D(a) && !da(a) ? tc(a, function (a, c) {
            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
          }) : d.push(ea(e) + "=" + ea(cc(a))));
        }if (!a) return "";var d = [];b(a, "", !0);return d.join("&");
      };
    };
  }function dc(a, b) {
    if (G(a)) {
      var d = a.replace(dg, "").trim();if (d) {
        var c = b("Content-Type");(c = c && 0 === c.indexOf(dd)) || (c = (c = d.match(eg)) && fg[c[0]].test(d));c && (a = xc(d));
      }
    }return a;
  }function ed(a) {
    var b = U(),
        d;G(a) ? q(a.split("\n"), function (a) {
      d = a.indexOf(":");var e = Q(W(a.substr(0, d)));a = W(a.substr(d + 1));e && (b[e] = b[e] ? b[e] + ", " + a : a);
    }) : D(a) && q(a, function (a, d) {
      var f = Q(d),
          g = W(a);f && (b[f] = b[f] ? b[f] + ", " + g : g);
    });return b;
  }function fd(a) {
    var b;return function (d) {
      b || (b = ed(a));return d ? (d = b[Q(d)], void 0 === d && (d = null), d) : b;
    };
  }function gd(a, b, d, c) {
    if (z(c)) return c(a, b, d);q(c, function (c) {
      a = c(a, b, d);
    });return a;
  }function mf() {
    var a = this.defaults = { transformResponse: [dc], transformRequest: [function (a) {
        return D(a) && "[object File]" !== ma.call(a) && "[object Blob]" !== ma.call(a) && "[object FormData]" !== ma.call(a) ? bb(a) : a;
      }], headers: { common: { Accept: "application/json, text/plain, */*" }, post: ia(ec), put: ia(ec), patch: ia(ec) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer" },
        b = !1;this.useApplyAsync = function (a) {
      return w(a) ? (b = !!a, this) : b;
    };var d = !0;this.useLegacyPromiseExtensions = function (a) {
      return w(a) ? (d = !!a, this) : d;
    };var c = this.interceptors = [];this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
      function m(b) {
        function c(a, b) {
          for (var d = 0, e = b.length; d < e;) {
            var f = b[d++],
                g = b[d++];a = a.then(f, g);
          }b.length = 0;return a;
        }function e(a, b) {
          var c,
              d = {};q(a, function (a, e) {
            z(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
          });return d;
        }function f(a) {
          var b = S({}, a);b.data = gd(a.data, a.headers, a.status, g.transformResponse);a = a.status;return 200 <= a && 300 > a ? b : k.reject(b);
        }if (!D(b)) throw N("$http")("badreq", b);if (!G(b.url)) throw N("$http")("badreq", b.url);var g = S({ method: "get", transformRequest: a.transformRequest,
          transformResponse: a.transformResponse, paramSerializer: a.paramSerializer }, b);g.headers = (function (b) {
          var c = a.headers,
              d = S({}, b.headers),
              f,
              g,
              h,
              c = S({}, c.common, c[Q(b.method)]);a: for (f in c) {
            g = Q(f);for (h in d) if (Q(h) === g) continue a;d[f] = c[f];
          }return e(d, ia(b));
        })(b);g.method = ub(g.method);g.paramSerializer = G(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;var h = [],
            m = [],
            p = k.when(g);q(R, function (a) {
          (a.request || a.requestError) && h.unshift(a.request, a.requestError);(a.response || a.responseError) && m.push(a.response, a.responseError);
        });p = c(p, h);p = p.then(function (b) {
          var c = b.headers,
              d = gd(b.data, fd(c), void 0, b.transformRequest);y(d) && q(c, function (a, b) {
            "content-type" === Q(b) && delete c[b];
          });y(b.withCredentials) && !y(a.withCredentials) && (b.withCredentials = a.withCredentials);return n(b, d).then(f, f);
        });p = c(p, m);d ? (p.success = function (a) {
          Pa(a, "fn");p.then(function (b) {
            a(b.data, b.status, b.headers, g);
          });return p;
        }, p.error = function (a) {
          Pa(a, "fn");p.then(null, function (b) {
            a(b.data, b.status, b.headers, g);
          });return p;
        }) : (p.success = hd("success"), p.error = hd("error"));return p;
      }function n(c, d) {
        function g(a) {
          if (a) {
            var c = {};q(a, function (a, d) {
              c[d] = function (c) {
                function d() {
                  a(c);
                }b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
              };
            });return c;
          }
        }function l(a, c, d, e) {
          function f() {
            n(c, a, d, e);
          }E && (200 <= a && 300 > a ? E.put(P, [a, c, ed(d), e]) : E.remove(P));b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
        }function n(a, b, d, e) {
          b = -1 <= b ? b : 0;(200 <= b && 300 > b ? M.resolve : M.reject)({ data: a, status: b, headers: fd(d), config: c, statusText: e });
        }function t(a) {
          n(a.data, a.status, ia(a.headers()), a.statusText);
        }function R() {
          var a = m.pendingRequests.indexOf(c);-1 !== a && m.pendingRequests.splice(a, 1);
        }var M = k.defer(),
            H = M.promise,
            E,
            I,
            Da = c.headers,
            P = p(c.url, c.paramSerializer(c.params));m.pendingRequests.push(c);H.then(R, R);!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (E = D(c.cache) ? c.cache : D(a.cache) ? a.cache : u);E && (I = E.get(P), w(I) ? I && z(I.then) ? I.then(t, t) : L(I) ? n(I[1], I[0], ia(I[2]), I[3]) : n(I, 200, {}, "OK") : E.put(P, H));y(I) && ((I = id(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (Da[c.xsrfHeaderName || a.xsrfHeaderName] = I), e(c.method, P, d, l, Da, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));return H;
      }function p(a, b) {
        0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);return a;
      }var u = g("$http");a.paramSerializer = G(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;var R = [];q(c, function (a) {
        R.unshift(G(a) ? l.get(a) : l.invoke(a));
      });m.pendingRequests = [];(function (a) {
        q(arguments, function (a) {
          m[a] = function (b, c) {
            return m(S({}, c || {}, { method: a, url: b }));
          };
        });
      })("get", "delete", "head", "jsonp");(function (a) {
        q(arguments, function (a) {
          m[a] = function (b, c, d) {
            return m(S({}, d || {}, { method: a, url: b, data: c }));
          };
        });
      })("post", "put", "patch");m.defaults = a;return m;
    }];
  }function qf() {
    this.$get = function () {
      return function () {
        return new C.XMLHttpRequest();
      };
    };
  }function pf() {
    this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
      return gg(a, c, a.defer, b, d[0]);
    }];
  }function gg(a, b, d, c, e) {
    function f(a, b, d) {
      a = a.replace("JSON_CALLBACK", b);var f = e.createElement("script"),
          m = null;f.type = "text/javascript";f.src = a;f.async = !0;m = function (a) {
        f.removeEventListener("load", m, !1);f.removeEventListener("error", m, !1);e.body.removeChild(f);f = null;var g = -1,
            u = "unknown";a && ("load" !== a.type || c.wasCalled(b) || (a = { type: "error" }), u = a.type, g = "error" === a.type ? 404 : 200);d && d(g, u);
      };f.addEventListener("load", m, !1);f.addEventListener("error", m, !1);e.body.appendChild(f);return m;
    }return function (e, h, k, l, m, n, p, u, R, B) {
      function r() {
        fa && fa();t && t.abort();
      }function J(b, c, e, f, g) {
        w(M) && d.cancel(M);fa = t = null;b(c, e, f, g);a.$$completeOutstandingRequest(A);
      }a.$$incOutstandingRequestCount();h = h || a.url();if ("jsonp" === Q(e)) var v = c.createCallback(h),
          fa = f(h, v, function (a, b) {
        var d = 200 === a && c.getResponse(v);J(l, a, d, "", b);c.removeCallback(v);
      });else {
        var t = b(e, h);t.open(e, h, !0);q(m, function (a, b) {
          w(a) && t.setRequestHeader(b, a);
        });t.onload = function () {
          var a = t.statusText || "",
              b = "response" in t ? t.response : t.responseText,
              c = 1223 === t.status ? 204 : t.status;0 === c && (c = b ? 200 : "file" == Y(h).protocol ? 404 : 0);J(l, c, b, t.getAllResponseHeaders(), a);
        };e = function () {
          J(l, -1, null, null, "");
        };t.onerror = e;t.onabort = e;q(R, function (a, b) {
          t.addEventListener(b, a);
        });q(B, function (a, b) {
          t.upload.addEventListener(b, a);
        });p && (t.withCredentials = !0);if (u) try {
          t.responseType = u;
        } catch (K) {
          if ("json" !== u) throw K;
        }t.send(y(k) ? null : k);
      }if (0 < n) var M = d(r, n);else n && z(n.then) && n.then(r);
    };
  }function kf() {
    var a = "{{",
        b = "}}";this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    };this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    };this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
      function f(a) {
        return "\\\\\\" + a;
      }function g(c) {
        return c.replace(n, a).replace(p, b);
      }function h(a, b, c, d) {
        var e;return e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);
      }function k(f, k, p, n) {
        function J(a) {
          try {
            var b = a;a = p ? e.getTrusted(p, b) : e.valueOf(b);var d;if (n && !w(a)) d = a;else if (null == a) d = "";else {
              switch (typeof a) {case "string":
                  break;case "number":
                  a = "" + a;break;default:
                  a = bb(a);}d = a;
            }return d;
          } catch (g) {
            c(Ka.interr(f, g));
          }
        }if (!f.length || -1 === f.indexOf(a)) {
          var v;k || (k = g(f), v = ha(k), v.exp = f, v.expressions = [], v.$$watchDelegate = h);return v;
        }n = !!n;var q,
            t,
            K = 0,
            M = [],
            H = [];v = f.length;for (var E = [], I = []; K < v;) if (-1 != (q = f.indexOf(a, K)) && -1 != (t = f.indexOf(b, q + l))) K !== q && E.push(g(f.substring(K, q))), K = f.substring(q + l, t), M.push(K), H.push(d(K, J)), K = t + m, I.push(E.length), E.push("");else {
          K !== v && E.push(g(f.substring(K)));break;
        }p && 1 < E.length && Ka.throwNoconcat(f);if (!k || M.length) {
          var Da = function Da(a) {
            for (var b = 0, c = M.length; b < c; b++) {
              if (n && y(a[b])) return;E[I[b]] = a[b];
            }return E.join("");
          };return S(function (a) {
            var b = 0,
                d = M.length,
                e = Array(d);try {
              for (; b < d; b++) e[b] = H[b](a);return Da(e);
            } catch (g) {
              c(Ka.interr(f, g));
            }
          }, { exp: f, expressions: M, $$watchDelegate: function $$watchDelegate(a, b) {
              var c;return a.$watchGroup(H, function (d, e) {
                var f = Da(d);z(b) && b.call(this, f, d !== e ? c : f, a);c = f;
              });
            } });
        }
      }var l = a.length,
          m = b.length,
          n = new RegExp(a.replace(/./g, f), "g"),
          p = new RegExp(b.replace(/./g, f), "g");k.startSymbol = function () {
        return a;
      };k.endSymbol = function () {
        return b;
      };return k;
    }];
  }function lf() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
      function f(f, k, l, m) {
        function n() {
          p ? f.apply(null, u) : f(r);
        }var p = 4 < arguments.length,
            u = p ? va.call(arguments, 4) : [],
            R = b.setInterval,
            q = b.clearInterval,
            r = 0,
            J = w(m) && !m,
            v = (J ? c : d).defer(),
            fa = v.promise;l = w(l) ? l : 0;fa.$$intervalId = R(function () {
          J ? e.defer(n) : a.$evalAsync(n);v.notify(r++);0 < l && r >= l && (v.resolve(r), q(fa.$$intervalId), delete g[fa.$$intervalId]);J || a.$apply();
        }, k);g[fa.$$intervalId] = v;return fa;
      }var g = {};f.cancel = function (a) {
        return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
      };return f;
    }];
  }function fc(a) {
    a = a.split("/");for (var b = a.length; b--;) a[b] = qb(a[b]);return a.join("/");
  }function jd(a, b) {
    var d = Y(a);b.$$protocol = d.protocol;b.$$host = d.hostname;b.$$port = Z(d.port) || hg[d.protocol] || null;
  }function kd(a, b) {
    var d = "/" !== a.charAt(0);d && (a = "/" + a);var c = Y(a);b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);b.$$search = Ac(c.search);b.$$hash = decodeURIComponent(c.hash);b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
  }function ka(a, b) {
    if (0 === b.lastIndexOf(a, 0)) return b.substr(a.length);
  }function Ja(a) {
    var b = a.indexOf("#");return -1 == b ? a : a.substr(0, b);
  }function jb(a) {
    return a.replace(/(#.+)|#$/, "$1");
  }function gc(a, b, d) {
    this.$$html5 = !0;d = d || "";jd(a, this);this.$$parse = function (a) {
      var d = ka(b, a);if (!G(d)) throw Gb("ipthprfx", a, b);kd(d, this);this.$$path || (this.$$path = "/");this.$$compose();
    };this.$$compose = function () {
      var a = Tb(this.$$search),
          d = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (a ? "?" + a : "") + d;this.$$absUrl = b + this.$$url.substr(1);
    };this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;w(f = ka(a, c)) ? (g = f, g = w(f = ka(d, f)) ? b + (ka("/", f) || f) : a + g) : w(f = ka(b, c)) ? g = b + f : b == c + "/" && (g = b);g && this.$$parse(g);return !!g;
    };
  }function hc(a, b, d) {
    jd(a, this);this.$$parse = function (c) {
      var e = ka(a, c) || ka(b, c),
          f;y(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", y(e) && (a = c, this.replace())) : (f = ka(d, e), y(f) && (f = e));kd(f, this);c = this.$$path;var e = a,
          g = /^\/[A-Z]:(\/.*)/;0 === f.lastIndexOf(e, 0) && (f = f.replace(e, ""));g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);this.$$path = c;this.$$compose();
    };this.$$compose = function () {
      var b = Tb(this.$$search),
          e = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
    };this.$$parseLinkUrl = function (b, d) {
      return Ja(a) == Ja(b) ? (this.$$parse(b), !0) : !1;
    };
  }function ld(a, b, d) {
    this.$$html5 = !0;hc.apply(this, arguments);this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;a == Ja(c) ? f = c : (g = ka(b, c)) ? f = a + d + g : b === c + "/" && (f = b);f && this.$$parse(f);return !!f;
    };this.$$compose = function () {
      var b = Tb(this.$$search),
          e = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + d + this.$$url;
    };
  }function Hb(a) {
    return function () {
      return this[a];
    };
  }function md(a, b) {
    return function (d) {
      if (y(d)) return this[a];this[a] = b(d);this.$$compose();return this;
    };
  }function sf() {
    var a = "",
        b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (b) {
      return w(b) ? (a = b, this) : a;
    };this.html5Mode = function (a) {
      return Ga(a) ? (b.enabled = a, this) : D(a) ? (Ga(a.enabled) && (b.enabled = a.enabled), Ga(a.requireBase) && (b.requireBase = a.requireBase), Ga(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b;
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
      }var l, m;m = c.baseHref();var n = c.url(),
          p;if (b.enabled) {
        if (!m && b.requireBase) throw Gb("nobase");p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");m = e.history ? gc : ld;
      } else p = Ja(n), m = hc;var u = p.substr(0, Ja(p).lastIndexOf("/") + 1);l = new m(p, u, "#" + a);l.$$parseLinkUrl(n, n);l.$$state = c.state();var R = /^\s*(javascript|mailto):/i;f.on("click", function (a) {
        if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
          for (var e = F(a.target); "a" !== wa(e[0]);) if (e[0] === f[0] || !(e = e.parent())[0]) return;
          var h = e.prop("href"),
              k = e.attr("href") || e.attr("xlink:href");D(h) && "[object SVGAnimatedString]" === h.toString() && (h = Y(h.animVal).href);R.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
        }
      });jb(l.absUrl()) != jb(n) && c.url(l.absUrl(), !0);var q = !0;c.onUrlChange(function (a, b) {
        y(ka(u, a)) ? g.location.href = a : (d.$evalAsync(function () {
          var c = l.absUrl(),
              e = l.$$state,
              f;a = jb(a);l.$$parse(a);l.$$state = b;f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (q = !1, k(c, e)));
        }), d.$$phase || d.$digest());
      });d.$watch(function () {
        var a = jb(c.url()),
            b = jb(l.absUrl()),
            f = c.state(),
            g = l.$$replace,
            m = a !== b || l.$$html5 && e.history && f !== l.$$state;if (q || m) q = !1, d.$evalAsync(function () {
          var b = l.absUrl(),
              c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)));
        });l.$$replace = !1;
      });return l;
    }];
  }function tf() {
    var a = !0,
        b = this;this.debugEnabled = function (b) {
      return w(b) ? (a = b, this) : a;
    };this.$get = ["$window", function (d) {
      function c(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
      }function e(a) {
        var b = d.console || {},
            e = b[a] || b.log || A;a = !1;try {
          a = !!e.apply;
        } catch (k) {}return a ? function () {
          var a = [];q(arguments, function (b) {
            a.push(c(b));
          });
          return e.apply(b, a);
        } : function (a, b) {
          e(a, null == b ? "" : b);
        };
      }return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: (function () {
          var c = e("debug");return function () {
            a && c.apply(b, arguments);
          };
        })() };
    }];
  }function Sa(a, b) {
    if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw X("isecfld", b);return a;
  }function ig(a) {
    return a + "";
  }function ra(a, b) {
    if (a) {
      if (a.constructor === a) throw X("isecfn", b);if (a.window === a) throw X("isecwindow", b);if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw X("isecdom", b);if (a === Object) throw X("isecobj", b);
    }return a;
  }function nd(a, b) {
    if (a) {
      if (a.constructor === a) throw X("isecfn", b);if (a === jg || a === kg || a === lg) throw X("isecff", b);
    }
  }function Ib(a, b) {
    if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === ({}).constructor || a === [].constructor || a === Function.constructor)) throw X("isecaf", b);
  }function mg(a, b) {
    return "undefined" !== typeof a ? a : b;
  }function od(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
  }function V(a, b) {
    var d, c;switch (a.type) {case s.Program:
        d = !0;q(a.body, function (a) {
          V(a.expression, b);d = d && a.expression.constant;
        });a.constant = d;break;case s.Literal:
        a.constant = !0;a.toWatch = [];break;case s.UnaryExpression:
        V(a.argument, b);a.constant = a.argument.constant;a.toWatch = a.argument.toWatch;break;case s.BinaryExpression:
        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:
        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.constant ? [] : [a];break;case s.ConditionalExpression:
        V(a.test, b);V(a.alternate, b);V(a.consequent, b);a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;a.toWatch = a.constant ? [] : [a];break;case s.Identifier:
        a.constant = !1;a.toWatch = [a];break;case s.MemberExpression:
        V(a.object, b);a.computed && V(a.property, b);a.constant = a.object.constant && (!a.computed || a.property.constant);a.toWatch = [a];break;case s.CallExpression:
        d = a.filter ? !b(a.callee.name).$stateful : !1;c = [];q(a.arguments, function (a) {
          V(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
        });a.constant = d;a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];break;case s.AssignmentExpression:
        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = [a];break;case s.ArrayExpression:
        d = !0;c = [];q(a.elements, function (a) {
          V(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
        });a.constant = d;a.toWatch = c;break;case s.ObjectExpression:
        d = !0;c = [];q(a.properties, function (a) {
          V(a.value, b);d = d && a.value.constant && !a.computed;a.value.constant || c.push.apply(c, a.value.toWatch);
        });a.constant = d;a.toWatch = c;break;case s.ThisExpression:
        a.constant = !1;a.toWatch = [];break;case s.LocalsExpression:
        a.constant = !1, a.toWatch = [];}
  }function pd(a) {
    if (1 == a.length) {
      a = a[0].expression;var b = a.toWatch;return 1 !== b.length ? b : b[0] !== a ? b : void 0;
    }
  }function qd(a) {
    return a.type === s.Identifier || a.type === s.MemberExpression;
  }function rd(a) {
    if (1 === a.body.length && qd(a.body[0].expression)) return { type: s.AssignmentExpression,
      left: a.body[0].expression, right: { type: s.NGValueParameter }, operator: "=" };
  }function sd(a) {
    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
  }function td(a, b) {
    this.astBuilder = a;this.$filter = b;
  }function ud(a, b) {
    this.astBuilder = a;this.$filter = b;
  }function Jb(a) {
    return "constructor" == a;
  }function ic(a) {
    return z(a.valueOf) ? a.valueOf() : ng.call(a);
  }function uf() {
    var a = U(),
        b = U(),
        d = { "true": !0,
      "false": !1, "null": null, undefined: void 0 },
        c,
        e;this.addLiteral = function (a, b) {
      d[a] = b;
    };this.setIdentifierFns = function (a, b) {
      c = a;e = b;return this;
    };this.$get = ["$filter", function (f) {
      function g(c, d, e) {
        var g, k, H;e = e || J;switch (typeof c) {case "string":
            H = c = c.trim();var E = e ? b : a;g = E[H];if (!g) {
              ":" === c.charAt(0) && ":" === c.charAt(1) && (k = !0, c = c.substring(2));g = e ? r : B;var q = new jc(g);g = new kc(q, f, g).parse(c);g.constant ? g.$$watchDelegate = p : k ? g.$$watchDelegate = g.literal ? n : m : g.inputs && (g.$$watchDelegate = l);e && (g = h(g));E[H] = g;
            }return u(g, d);case "function":
            return u(c, d);default:
            return u(A, d);}
      }function h(a) {
        function b(c, d, e, f) {
          var g = J;J = !0;try {
            return a(c, d, e, f);
          } finally {
            J = g;
          }
        }if (!a) return a;b.$$watchDelegate = a.$$watchDelegate;b.assign = h(a.assign);b.constant = a.constant;b.literal = a.literal;for (var c = 0; a.inputs && c < a.inputs.length; ++c) a.inputs[c] = h(a.inputs[c]);b.inputs = a.inputs;return b;
      }function k(a, b) {
        return null == a || null == b ? a === b : "object" === typeof a && (a = ic(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b;
      }function l(a, b, c, d, e) {
        var f = d.inputs,
            g;if (1 === f.length) {
          var h = k,
              f = f[0];return a.$watch(function (a) {
            var b = f(a);k(b, h) || (g = d(a, void 0, void 0, [b]), h = b && ic(b));return g;
          }, b, c, e);
        }for (var l = [], m = [], p = 0, n = f.length; p < n; p++) l[p] = k, m[p] = null;return a.$watch(function (a) {
          for (var b = !1, c = 0, e = f.length; c < e; c++) {
            var h = f[c](a);if (b || (b = !k(h, l[c]))) m[c] = h, l[c] = h && ic(h);
          }b && (g = d(a, void 0, void 0, m));return g;
        }, b, c, e);
      }function m(a, b, c, d) {
        var e, f;return e = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          f = a;z(b) && b.apply(this, arguments);w(a) && d.$$postDigest(function () {
            w(f) && e();
          });
        }, c);
      }function n(a, b, c, d) {
        function e(a) {
          var b = !0;q(a, function (a) {
            w(a) || (b = !1);
          });return b;
        }var f, g;return f = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          g = a;z(b) && b.call(this, a, c, d);e(a) && d.$$postDigest(function () {
            e(g) && f();
          });
        }, c);
      }function p(a, b, c, d) {
        var e;return e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);
      }function u(a, b) {
        if (!b) return a;var c = a.$$watchDelegate,
            d = !1,
            c = c !== n && c !== m ? function (c, e, f, g) {
          f = d && g ? g[0] : a(c, e, f, g);return b(f, c, e);
        } : function (c, d, e, f) {
          e = a(c, d, e, f);c = b(e, c, d);return w(e) ? c : e;
        };a.$$watchDelegate && a.$$watchDelegate !== l ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = l, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);return c;
      }var R = Ba().noUnsafeEval,
          B = { csp: R, expensiveChecks: !1, literals: pa(d), isIdentifierStart: z(c) && c, isIdentifierContinue: z(e) && e },
          r = { csp: R, expensiveChecks: !0, literals: pa(d), isIdentifierStart: z(c) && c, isIdentifierContinue: z(e) && e },
          J = !1;g.$$runningExpensiveChecks = function () {
        return J;
      };return g;
    }];
  }function wf() {
    this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
      return vd(function (b) {
        a.$evalAsync(b);
      }, b);
    }];
  }function xf() {
    this.$get = ["$browser", "$exceptionHandler", function (a, b) {
      return vd(function (b) {
        a.defer(b);
      }, b);
    }];
  }function vd(a, b) {
    function d() {
      this.$$state = { status: 0 };
    }function c(a, b) {
      return function (c) {
        b.call(a, c);
      };
    }function e(c) {
      !c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
        var a, d, e;e = c.pending;c.processScheduled = !1;c.pending = void 0;for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];a = e[f][c.status];
          try {
            z(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
          } catch (h) {
            d.reject(h), b(h);
          }
        }
      }));
    }function f() {
      this.promise = new d();
    }var g = N("$q", TypeError),
        h = function h() {
      var a = new f();a.resolve = c(a, a.resolve);a.reject = c(a, a.reject);a.notify = c(a, a.notify);return a;
    };S(d.prototype, { then: function then(a, b, c) {
        if (y(a) && y(b) && y(c)) return this;var d = new f();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && e(this.$$state);return d.promise;
      }, "catch": function _catch(a) {
        return this.then(null, a);
      }, "finally": function _finally(a, b) {
        return this.then(function (b) {
          return l(b, !0, a);
        }, function (b) {
          return l(b, !1, a);
        }, b);
      } });S(f.prototype, { resolve: function resolve(a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a));
      }, $$resolve: function $$resolve(a) {
        function d(a) {
          k || (k = !0, h.$$resolve(a));
        }function f(a) {
          k || (k = !0, h.$$reject(a));
        }var g,
            h = this,
            k = !1;try {
          if (D(a) || z(a)) g = a && a.then;z(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state));
        } catch (l) {
          f(l), b(l);
        }
      }, reject: function reject(a) {
        this.promise.$$state.status || this.$$reject(a);
      }, $$reject: function $$reject(a) {
        this.promise.$$state.value = a;this.promise.$$state.status = 2;e(this.promise.$$state);
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
      var c = new f();b ? c.resolve(a) : c.reject(a);return c.promise;
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
      var e = new f();e.resolve(a);return e.promise.then(b, c, d);
    },
        n = function n(a) {
      if (!z(a)) throw g("norslvr", a);var b = new f();a(function (a) {
        b.resolve(a);
      }, function (a) {
        b.reject(a);
      });return b.promise;
    };n.prototype = d.prototype;n.defer = h;n.reject = function (a) {
      var b = new f();b.reject(a);return b.promise;
    };n.when = m;n.resolve = m;n.all = function (a) {
      var b = new f(),
          c = 0,
          d = L(a) ? [] : {};q(a, function (a, e) {
        c++;m(a).then(function (a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
        }, function (a) {
          d.hasOwnProperty(e) || b.reject(a);
        });
      });0 === c && b.resolve(d);return b.promise;
    };n.race = function (a) {
      var b = h();q(a, function (a) {
        m(a).then(b.resolve, b.reject);
      });return b.promise;
    };return n;
  }function Gf() {
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
  }function vf() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++pb;this.$$ChildScope = null;
      }b.prototype = a;return b;
    }var b = 10,
        d = N("$rootScope"),
        c = null,
        e = null;this.digestTtl = function (a) {
      arguments.length && (b = a);return b;
    };this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
      function k(a) {
        a.currentScope.$$destroyed = !0;
      }function l(a) {
        9 === Ea && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
      }function m() {
        this.$id = ++pb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
      }function n(a) {
        if (J.$$phase) throw d("inprog", J.$$phase);J.$$phase = a;
      }function p(a, b) {
        do a.$$watchersCount += b; while (a = a.$parent);
      }function u(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
      }function s() {}function B() {
        for (; t.length;) try {
          t.shift()();
        } catch (a) {
          f(a);
        }e = null;
      }function r() {
        null === e && (e = h.defer(function () {
          J.$apply(B);
        }));
      }m.prototype = { constructor: m, $new: function $new(b, c) {
          var d;c = c || this;b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(b || c != this) && d.$on("$destroy", k);return d;
        }, $watch: function $watch(a, b, d, e) {
          var f = g(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);var h = this,
              k = h.$$watchers,
              l = { fn: b, last: s, get: f, exp: e || a, eq: !!d };c = null;z(b) || (l.fn = A);k || (k = h.$$watchers = []);k.unshift(l);p(this, 1);return function () {
            0 <= Za(k, l) && p(h, -1);c = null;
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
          });q(a, function (a, b) {
            var k = g.$watch(a, function (a, f) {
              e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
            });f.push(k);
          });return function () {
            for (; f.length;) f.shift()();
          };
        },
        $watchCollection: function $watchCollection(a, b) {
          function c(a) {
            e = a;var b, d, g, h;if (!y(e)) {
              if (D(e)) if (ta(e)) for (f !== n && (f = n, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);else {
                f !== p && (f = p = {}, u = 0, l++);a = 0;for (b in e) ua.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));if (u > a) for (b in (l++, f)) ua.call(e, b) || (u--, delete f[b]);
              } else f !== e && (f = e, l++);return l;
            }
          }c.$stateful = !0;var d = this,
              e,
              f,
              h,
              k = 1 < b.length,
              l = 0,
              m = g(a, c),
              n = [],
              p = {},
              r = !0,
              u = 0;return this.$watch(m, function () {
            r ? (r = !1, b(e, e, d)) : b(e, h, d);if (k) if (D(e)) if (ta(e)) {
              h = Array(e.length);for (var a = 0; a < e.length; a++) h[a] = e[a];
            } else for (a in (h = {}, e)) ua.call(e, a) && (h[a] = e[a]);else h = e;
          });
        }, $digest: function $digest() {
          var a,
              g,
              k,
              l,
              m,
              p,
              u,
              r,
              q = b,
              t,
              y = [],
              A,
              C;n("$digest");h.$$checkUrlChange();this === J && null !== e && (h.defer.cancel(e), B());c = null;do {
            r = !1;t = this;for (p = 0; p < v.length; p++) {
              try {
                C = v[p], C.scope.$eval(C.expression, C.locals);
              } catch (F) {
                f(F);
              }c = null;
            }v.length = 0;a: do {
              if (p = t.$$watchers) for (u = p.length; u--;) try {
                if (a = p[u]) if ((m = a.get, (g = m(t)) !== (k = a.last) && !(a.eq ? na(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k)))) r = !0, c = a, a.last = a.eq ? pa(g, null) : g, l = a.fn, l(g, k === s ? g : k, t), 5 > q && (A = 4 - q, y[A] || (y[A] = []), y[A].push({ msg: z(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: g, oldVal: k }));else if (a === c) {
                  r = !1;break a;
                }
              } catch (G) {
                f(G);
              }if (!(p = t.$$watchersCount && t.$$childHead || t !== this && t.$$nextSibling)) for (; t !== this && !(p = t.$$nextSibling);) t = t.$parent;
            } while (t = p);if ((r || v.length) && ! q--) throw (J.$$phase = null, d("infdig", b, y));
          } while (r || v.length);for (J.$$phase = null; K < w.length;) try {
            w[K++]();
          } catch (D) {
            f(D);
          }w.length = K = 0;
        }, $destroy: function $destroy() {
          if (!this.$$destroyed) {
            var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === J && h.$$applicationDestroyed();p(this, -this.$$watchersCount);for (var b in this.$$listenerCount) u(this, this.$$listenerCount[b], b);a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = A;this.$on = this.$watch = this.$watchGroup = function () {
              return A;
            };this.$$listeners = {};this.$$nextSibling = null;l(this);
          }
        }, $eval: function $eval(a, b) {
          return g(a)(this, b);
        }, $evalAsync: function $evalAsync(a, b) {
          J.$$phase || v.length || h.defer(function () {
            v.length && J.$digest();
          });v.push({ scope: this, expression: g(a), locals: b });
        }, $$postDigest: function $$postDigest(a) {
          w.push(a);
        },
        $apply: function $apply(a) {
          try {
            n("$apply");try {
              return this.$eval(a);
            } finally {
              J.$$phase = null;
            }
          } catch (b) {
            f(b);
          } finally {
            try {
              J.$digest();
            } catch (c) {
              throw (f(c), c);
            }
          }
        }, $applyAsync: function $applyAsync(a) {
          function b() {
            c.$eval(a);
          }var c = this;a && t.push(b);a = g(a);r();
        }, $on: function $on(a, b) {
          var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);var e = this;return function () {
            var d = c.indexOf(b);-1 !== d && (c[d] = null, u(e, 1, a));
          };
        }, $emit: function $emit(a, b) {
          var c = [],
              d,
              e = this,
              g = !1,
              h = { name: a, targetScope: e, stopPropagation: function stopPropagation() {
              g = !0;
            }, preventDefault: function preventDefault() {
              h.defaultPrevented = !0;
            }, defaultPrevented: !1 },
              k = $a([h], arguments, 1),
              l,
              m;do {
            d = e.$$listeners[a] || c;h.currentScope = e;l = 0;for (m = d.length; l < m; l++) if (d[l]) try {
              d[l].apply(null, k);
            } catch (n) {
              f(n);
            } else d.splice(l, 1), l--, m--;if (g) return h.currentScope = null, h;e = e.$parent;
          } while (e);h.currentScope = null;return h;
        }, $broadcast: function $broadcast(a, b) {
          var c = this,
              d = this,
              e = { name: a, targetScope: this, preventDefault: function preventDefault() {
              e.defaultPrevented = !0;
            }, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return e;for (var g = $a([e], arguments, 1), h, k; c = d;) {
            e.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (k = d.length; h < k; h++) if (d[h]) try {
              d[h].apply(null, g);
            } catch (l) {
              f(l);
            } else d.splice(h, 1), h--, k--;if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent;
          }e.currentScope = null;return e;
        } };var J = new m(),
          v = J.$$asyncQueue = [],
          w = J.$$postDigestQueue = [],
          t = J.$$applyAsyncQueue = [],
          K = 0;return J;
    }];
  }function ne() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (b) {
      return w(b) ? (a = b, this) : a;
    };this.imgSrcSanitizationWhitelist = function (a) {
      return w(a) ? (b = a, this) : b;
    };this.$get = function () {
      return function (d, c) {
        var e = c ? b : a,
            f;f = Y(d).href;return "" === f || f.match(e) ? d : "unsafe:" + f;
      };
    };
  }function og(a) {
    if ("self" === a) return a;if (G(a)) {
      if (-1 < a.indexOf("***")) throw sa("iwcard", a);a = wd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");return new RegExp("^" + a + "$");
    }if (Wa(a)) return new RegExp("^" + a.source + "$");throw sa("imatcher");
  }function xd(a) {
    var b = [];w(a) && q(a, function (a) {
      b.push(og(a));
    });return b;
  }function zf() {
    this.SCE_CONTEXTS = la;var a = ["self"],
        b = [];this.resourceUrlWhitelist = function (b) {
      arguments.length && (a = xd(b));return a;
    };this.resourceUrlBlacklist = function (a) {
      arguments.length && (b = xd(a));return b;
    };this.$get = ["$injector", function (d) {
      function c(a, b) {
        return "self" === a ? id(b) : !!a.exec(b.href);
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
        throw sa("unsafe");
      };d.has("$sanitize") && (f = d.get("$sanitize"));var g = e(),
          h = {};h[la.HTML] = e(g);h[la.CSS] = e(g);h[la.URL] = e(g);h[la.JS] = e(g);h[la.RESOURCE_URL] = e(h[la.URL]);return { trustAs: function trustAs(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw sa("icontext", a, b);if (null === b || y(b) || "" === b) return b;if ("string" !== typeof b) throw sa("itype", a);return new c(b);
        }, getTrusted: function getTrusted(d, e) {
          if (null === e || y(e) || "" === e) return e;var g = h.hasOwnProperty(d) ? h[d] : null;if (g && e instanceof g) return e.$$unwrapTrustedValue();if (d === la.RESOURCE_URL) {
            var g = Y(e.toString()),
                n,
                p,
                u = !1;n = 0;for (p = a.length; n < p; n++) if (c(a[n], g)) {
              u = !0;break;
            }if (u) for (n = 0, p = b.length; n < p; n++) if (c(b[n], g)) {
              u = !1;break;
            }if (u) return e;throw sa("insecurl", e.toString());
          }if (d === la.HTML) return f(e);throw sa("unsafe");
        }, valueOf: function valueOf(a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a;
        } };
    }];
  }function yf() {
    var a = !0;this.enabled = function (b) {
      arguments.length && (a = !!b);return a;
    };this.$get = ["$parse", "$sceDelegate", function (b, d) {
      if (a && 8 > Ea) throw sa("iequirks");var c = ia(la);c.isEnabled = function () {
        return a;
      };c.trustAs = d.trustAs;c.getTrusted = d.getTrusted;c.valueOf = d.valueOf;a || (c.trustAs = c.getTrusted = function (a, b) {
        return b;
      }, c.valueOf = Xa);c.parseAs = function (a, d) {
        var e = b(d);return e.literal && e.constant ? e : b(d, function (b) {
          return c.getTrusted(a, b);
        });
      };var e = c.parseAs,
          f = c.getTrusted,
          g = c.trustAs;q(la, function (a, b) {
        var d = Q(b);c[db("parse_as_" + d)] = function (b) {
          return e(a, b);
        };c[db("get_trusted_" + d)] = function (b) {
          return f(a, b);
        };c[db("trust_as_" + d)] = function (b) {
          return g(a, b);
        };
      });return c;
    }];
  }function Af() {
    this.$get = ["$window", "$document", function (a, b) {
      var d = {},
          c = !(a.chrome && a.chrome.app && a.chrome.app.runtime) && a.history && a.history.pushState,
          e = Z((/android (\d+)/.exec(Q((a.navigator || {}).userAgent)) || [])[1]),
          f = /Boxee/i.test((a.navigator || {}).userAgent),
          g = b[0] || {},
          h,
          k = /^(Moz|webkit|ms)(?=[A-Z])/,
          l = g.body && g.body.style,
          m = !1,
          n = !1;if (l) {
        for (var p in l) if (m = k.exec(p)) {
          h = m[0];h = h[0].toUpperCase() + h.substr(1);break;
        }h || (h = "WebkitOpacity" in l && "webkit");m = !!("transition" in l || h + "Transition" in l);n = !!("animation" in l || h + "Animation" in l);!e || m && n || (m = G(l.webkitTransition), n = G(l.webkitAnimation));
      }return { history: !(!c || 4 > e || f), hasEvent: function hasEvent(a) {
          if ("input" === a && 11 >= Ea) return !1;if (y(d[a])) {
            var b = g.createElement("div");d[a] = "on" + a in b;
          }return d[a];
        }, csp: Ba(), vendorPrefix: h, transitions: m, animations: n, android: e };
    }];
  }
  function Cf() {
    var a;this.httpOptions = function (b) {
      return b ? (a = b, this) : a;
    };this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
      function f(g, h) {
        f.totalPendingRequests++;if (!G(g) || y(b.get(g))) g = e.getTrustedResourceUrl(g);var k = d.defaults && d.defaults.transformResponse;L(k) ? k = k.filter(function (a) {
          return a !== dc;
        }) : k === dc && (k = null);return d.get(g, S({ cache: b, transformResponse: k }, a))["finally"](function () {
          f.totalPendingRequests--;
        }).then(function (a) {
          b.put(g, a.data);return a.data;
        }, function (a) {
          if (!h) throw pg("tpload", g, a.status, a.statusText);return c.reject(a);
        });
      }f.totalPendingRequests = 0;return f;
    }];
  }function Df() {
    this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
      return { findBindings: function findBindings(a, b, d) {
          a = a.getElementsByClassName("ng-binding");var g = [];q(a, function (a) {
            var c = ca.element(a).data("$binding");c && q(c, function (c) {
              d ? new RegExp("(^|\\s)" + wd(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a);
            });
          });return g;
        }, findModels: function findModels(a, b, d) {
          for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
            var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');if (k.length) return k;
          }
        }, getLocation: function getLocation() {
          return d.url();
        }, setLocation: function setLocation(b) {
          b !== d.url() && (d.url(b), a.$digest());
        }, whenStable: function whenStable(a) {
          b.notifyWhenNoOutstandingRequests(a);
        } };
    }];
  }function Ef() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
      function f(f, k, l) {
        z(f) || (l = k, k = f, f = A);var m = va.call(arguments, 3),
            n = w(l) && !l,
            p = (n ? c : d).defer(),
            u = p.promise,
            q;q = b.defer(function () {
          try {
            p.resolve(f.apply(null, m));
          } catch (b) {
            p.reject(b), e(b);
          } finally {
            delete g[u.$$timeoutId];
          }n || a.$apply();
        }, k);u.$$timeoutId = q;g[q] = p;return u;
      }var g = {};f.cancel = function (a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
      };return f;
    }];
  }function Y(a) {
    Ea && ($.setAttribute("href", a), a = $.href);$.setAttribute("href", a);return { href: $.href, protocol: $.protocol ? $.protocol.replace(/:$/, "") : "", host: $.host, search: $.search ? $.search.replace(/^\?/, "") : "", hash: $.hash ? $.hash.replace(/^#/, "") : "", hostname: $.hostname, port: $.port, pathname: "/" === $.pathname.charAt(0) ? $.pathname : "/" + $.pathname };
  }function id(a) {
    a = G(a) ? Y(a) : a;return a.protocol === yd.protocol && a.host === yd.host;
  }function Ff() {
    this.$get = ha(C);
  }function zd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }var d = a[0] || {},
        c = {},
        e = "";return function () {
      var a, g, h, k, l;a = d.cookie || "";if (a !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), y(c[l]) && (c[l] = b(g.substring(k + 1))));return c;
    };
  }function Jf() {
    this.$get = zd;
  }function Mc(a) {
    function b(d, c) {
      if (D(d)) {
        var e = {};q(d, function (a, c) {
          e[c] = b(c, a);
        });return e;
      }return a.factory(d + "Filter", c);
    }this.register = b;this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];b("currency", Ad);b("date", Bd);b("filter", qg);b("json", rg);b("limitTo", sg);b("lowercase", tg);b("number", Cd);b("orderBy", Dd);b("uppercase", ug);
  }function qg() {
    return function (a, b, d, c) {
      if (!ta(a)) {
        if (null == a) return a;throw N("filter")("notarray", a);
      }c = c || "$";var e;switch (lc(b)) {case "function":
          break;case "boolean":case "null":case "number":case "string":
          e = !0;case "object":
          b = vg(b, d, c, e);break;default:
          return a;}return Array.prototype.filter.call(a, b);
    };
  }function vg(a, b, d, c) {
    var e = D(a) && d in a;!0 === b ? b = na : z(b) || (b = function (a, b) {
      if (y(a)) return !1;if (null === a || null === b) return a === b;if (D(b) || D(a) && !vc(a)) return !1;a = Q("" + a);b = Q("" + b);return -1 !== a.indexOf(b);
    });return function (f) {
      return e && !D(f) ? La(f, a[d], b, d, !1) : La(f, a, b, d, c);
    };
  }function La(_x3, _x4, _x5, _x6, _x7, _x8) {
    var _again2 = true;

    _function2: while (_again2) {
      var a = _x3,
          b = _x4,
          d = _x5,
          c = _x6,
          e = _x7,
          f = _x8;
      _again2 = false;
      var g = lc(a),
          h = lc(b);if ("string" === h && "!" === b.charAt(0)) return !La(a, b.substring(1), d, c, e);if (L(a)) return a.some(function (a) {
        return La(a, b, d, c, e);
      });switch (g) {case "object":
          var k;if (e) {
            for (k in a) if ("$" !== k.charAt(0) && La(a[k], b, d, c, !0)) return !0;if (f) {
              return !1;
            } else {
              _x3 = a;
              _x4 = b;
              _x5 = d;
              _x6 = c;
              _x7 = !1;
              _x8 = undefined;
              _again2 = true;
              g = h = k = undefined;
              continue _function2;
            }
          }if ("object" === h) {
            for (k in b) if ((f = b[k], !z(f) && !y(f) && (g = k === c, !La(g ? a : a[k], f, d, c, g, g)))) return !1;return !0;
          }return d(a, b);case "function":
          return !1;default:
          return d(a, b);}
    }
  }function lc(a) {
    return null === a ? "null" : typeof a;
  }function Ad(a) {
    var b = a.NUMBER_FORMATS;return function (a, c, e) {
      y(c) && (c = b.CURRENCY_SYM);y(e) && (e = b.PATTERNS[1].maxFrac);return null == a ? a : Ed(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
    };
  }function Cd(a) {
    var b = a.NUMBER_FORMATS;return function (a, c) {
      return null == a ? a : Ed(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }function wg(a) {
    var b = 0,
        d,
        c,
        e,
        f,
        g;-1 < (c = a.indexOf(Fd)) && (a = a.replace(Fd, ""));0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);for (e = 0; a.charAt(e) == mc; e++);
    if (e == (g = a.length)) d = [0], c = 1;else {
      for (g--; a.charAt(g) == mc;) g--;c -= e;d = [];for (f = 0; e <= g; e++, f++) d[f] = +a.charAt(e);
    }c > Gd && (d = d.splice(0, Gd - 1), b = c - 1, c = 1);return { d: d, e: b, i: c };
  }function xg(a, b, d, c) {
    var e = a.d,
        f = e.length - a.i;b = y(b) ? Math.min(Math.max(d, f), c) : +b;d = b + a.i;c = e[d];if (0 < d) {
      e.splice(Math.max(a.i, d));for (var g = d; g < e.length; g++) e[g] = 0;
    } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) e[g] = 0;if (5 <= c) if (0 > d - 1) {
      for (c = 0; c > d; c--) e.unshift(0), a.i++;e.unshift(1);a.i++;
    } else e[d - 1]++;
    for (; f < Math.max(0, b); f++) e.push(0);if (b = e.reduceRight(function (a, b, c, d) {
      b += a;d[c] = b % 10;return Math.floor(b / 10);
    }, 0)) e.unshift(b), a.i++;
  }function Ed(a, b, d, c, e) {
    if (!G(a) && !T(a) || isNaN(a)) return "";var f = !isFinite(a),
        g = !1,
        h = Math.abs(a) + "",
        k = "";if (f) k = "∞";else {
      g = wg(h);xg(g, e, b.minFrac, b.maxFrac);k = g.d;h = g.i;e = g.e;f = [];for (g = k.reduce(function (a, b) {
        return a && !b;
      }, !0); 0 > h;) k.unshift(0), h++;0 < h ? f = k.splice(h, k.length) : (f = k, k = [0]);h = [];for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) h.unshift(k.splice(-b.gSize, k.length).join(""));k.length && h.unshift(k.join(""));k = h.join(d);f.length && (k += c + f.join(""));e && (k += "e+" + e);
    }return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
  }function Kb(a, b, d, c) {
    var e = "";if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");for (a = "" + a; a.length < b;) a = mc + a;d && (a = a.substr(a.length - b));return e + a;
  }function ba(a, b, d, c, e) {
    d = d || 0;return function (f) {
      f = f["get" + a]();if (0 < d || f > -d) f += d;0 === f && -12 == d && (f = 12);return Kb(f, b, c, e);
    };
  }function kb(a, b, d) {
    return function (c, e) {
      var f = c["get" + a](),
          g = ub((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);return e[g][f];
    };
  }function Hd(a) {
    var b = new Date(a, 0, 1).getDay();return new Date(a, 0, (4 >= b ? 5 : 12) - b);
  }function Id(a) {
    return function (b) {
      var d = Hd(b.getFullYear());b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;b = 1 + Math.round(b / 6048E5);return Kb(b, a);
    };
  }function nc(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
  }function Bd(a) {
    function b(a) {
      var b;if (b = a.match(d)) {
        a = new Date(0);var f = 0,
            g = 0,
            h = b[8] ? a.setUTCFullYear : a.setFullYear,
            k = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = Z(b[9] + b[10]), g = Z(b[9] + b[11]));h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));f = Z(b[4] || 0) - f;g = Z(b[5] || 0) - g;h = Z(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));k.call(a, f, g, h, b);
      }return a;
    }var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, d, f) {
      var g = "",
          h = [],
          k,
          l;d = d || "mediumDate";d = a.DATETIME_FORMATS[d] || d;G(c) && (c = yg.test(c) ? Z(c) : b(c));T(c) && (c = new Date(c));if (!da(c) || !isFinite(c.getTime())) return c;
      for (; d;) (l = zg.exec(d)) ? (h = $a(h, l, 1), d = h.pop()) : (h.push(d), d = null);var m = c.getTimezoneOffset();f && (m = yc(f, m), c = Sb(c, f, !0));q(h, function (b) {
        k = Ag[b];g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });return g;
    };
  }function rg() {
    return function (a, b) {
      y(b) && (b = 2);return bb(a, b);
    };
  }function sg() {
    return function (a, b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);if (isNaN(b)) return a;T(a) && (a = a.toString());if (!ta(a)) return a;d = !d || isNaN(d) ? 0 : Z(d);d = 0 > d ? Math.max(0, a.length + d) : d;return 0 <= b ? oc(a, d, d + b) : 0 === d ? oc(a, b, a.length) : oc(a, Math.max(0, d + b), d);
    };
  }function oc(a, b, d) {
    return G(a) ? a.slice(b, d) : va.call(a, b, d);
  }function Dd(a) {
    function b(b) {
      return b.map(function (b) {
        var c = 1,
            d = Xa;if (z(b)) d = b;else if (G(b)) {
          if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);if ("" !== b && (d = a(b), d.constant)) var e = d(),
              d = function d(a) {
            return a[e];
          };
        }return { get: d, descending: c };
      });
    }function d(a) {
      switch (typeof a) {case "number":case "boolean":case "string":
          return !0;default:
          return !1;}
    }
    function c(a, b) {
      var c = 0,
          d = a.type,
          k = b.type;if (d === k) {
        var k = a.value,
            l = b.value;"string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (D(k) && (k = a.index), D(l) && (l = b.index));k !== l && (c = k < l ? -1 : 1);
      } else c = d < k ? -1 : 1;return c;
    }return function (a, f, g, h) {
      if (null == a) return a;if (!ta(a)) throw N("orderBy")("notarray", a);L(f) || (f = [f]);0 === f.length && (f = ["+"]);var k = b(f),
          l = g ? -1 : 1,
          m = z(h) ? h : c;a = Array.prototype.map.call(a, function (a, b) {
        return { value: a, tieBreaker: { value: b, type: "number", index: b }, predicateValues: k.map(function (c) {
            var e = c.get(a);c = typeof e;if (null === e) c = "string", e = "null";else if ("object" === c) a: {
              if (z(e.valueOf) && (e = e.valueOf(), d(e))) break a;vc(e) && (e = e.toString(), d(e));
            }return { value: e, type: c, index: b };
          }) };
      });a.sort(function (a, b) {
        for (var c = 0, d = k.length; c < d; c++) {
          var e = m(a.predicateValues[c], b.predicateValues[c]);if (e) return e * k[c].descending * l;
        }return m(a.tieBreaker, b.tieBreaker) * l;
      });return a = a.map(function (a) {
        return a.value;
      });
    };
  }function Ta(a) {
    z(a) && (a = { link: a });a.restrict = a.restrict || "AC";return ha(a);
  }function Jd(a, b, d, c, e) {
    var f = this,
        g = [];f.$error = {};f.$$success = {};f.$pending = void 0;f.$name = e(b.name || b.ngForm || "")(d);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;f.$$parentForm = Lb;f.$rollbackViewValue = function () {
      q(g, function (a) {
        a.$rollbackViewValue();
      });
    };f.$commitViewValue = function () {
      q(g, function (a) {
        a.$commitViewValue();
      });
    };f.$addControl = function (a) {
      Qa(a.$name, "input");g.push(a);a.$name && (f[a.$name] = a);a.$$parentForm = f;
    };f.$$renameControl = function (a, b) {
      var c = a.$name;f[c] === a && delete f[c];f[b] = a;a.$name = b;
    };f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];q(f.$pending, function (b, c) {
        f.$setValidity(c, null, a);
      });q(f.$error, function (b, c) {
        f.$setValidity(c, null, a);
      });q(f.$$success, function (b, c) {
        f.$setValidity(c, null, a);
      });Za(g, a);a.$$parentForm = Lb;
    };Kd({ ctrl: this, $element: a, set: function set(a, b, c) {
        var d = a[b];d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
      }, unset: function unset(a, b, c) {
        var d = a[b];d && (Za(d, c), 0 === d.length && delete a[b]);
      }, $animate: c });f.$setDirty = function () {
      c.removeClass(a, Ua);c.addClass(a, Mb);f.$dirty = !0;f.$pristine = !1;f.$$parentForm.$setDirty();
    };f.$setPristine = function () {
      c.setClass(a, Ua, Mb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;q(g, function (a) {
        a.$setPristine();
      });
    };f.$setUntouched = function () {
      q(g, function (a) {
        a.$setUntouched();
      });
    };f.$setSubmitted = function () {
      c.addClass(a, "ng-submitted");f.$submitted = !0;f.$$parentForm.$setSubmitted();
    };
  }function pc(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString();
    });
  }function lb(a, b, d, c, e, f) {
    var g = Q(b[0].type);if (!e.android) {
      var h = !1;b.on("compositionstart", function () {
        h = !0;
      });b.on("compositionend", function () {
        h = !1;l();
      });
    }var k,
        l = function l(a) {
      k && (f.defer.cancel(k), k = null);if (!h) {
        var e = b.val();a = a && a.type;"password" === g || d.ngTrim && "false" === d.ngTrim || (e = W(e));(c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
      }
    };if (e.hasEvent("input")) b.on("input", l);else {
      var m = function m(a, b, c) {
        k || (k = f.defer(function () {
          k = null;b && b.value === c || l(a);
        }));
      };b.on("keydown", function (a) {
        var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });if (e.hasEvent("paste")) b.on("paste cut", m);
    }b.on("change", l);if (Ld[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
      if (!k) {
        var b = this.validity,
            c = b.badInput,
            d = b.typeMismatch;k = f.defer(function () {
          k = null;b.badInput === c && b.typeMismatch === d || l(a);
        });
      }
    });c.$render = function () {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;b.val() !== a && b.val(a);
    };
  }function Nb(a, b) {
    return function (d, c) {
      var e, f;if (da(d)) return d;if (G(d)) {
        '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));if (Bg.test(d)) return new Date(d);a.lastIndex = 0;if (e = a.exec(d)) return e.shift(), f = c ? { yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, q(e, function (a, c) {
          c < b.length && (f[b[c]] = +a);
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
      }return NaN;
    };
  }function mb(a, b, d, c) {
    return function (e, f, g, h, k, l, m) {
      function n(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }function p(a) {
        return w(a) && !da(a) ? d(a) || void 0 : a;
      }Md(e, f, g, h);lb(e, f, g, h, k, l);var u = h && h.$options && h.$options.timezone,
          q;h.$$parserName = a;h.$parsers.push(function (a) {
        if (h.$isEmpty(a)) return null;if (b.test(a)) return a = d(a, q), u && (a = Sb(a, u)), a;
      });h.$formatters.push(function (a) {
        if (a && !da(a)) throw nb("datefmt", a);if (n(a)) return (q = a) && u && (q = Sb(q, u, !0)), m("date")(a, c, u);q = null;return "";
      });if (w(g.min) || g.ngMin) {
        var s;h.$validators.min = function (a) {
          return !n(a) || y(s) || d(a) >= s;
        };g.$observe("min", function (a) {
          s = p(a);h.$validate();
        });
      }if (w(g.max) || g.ngMax) {
        var r;h.$validators.max = function (a) {
          return !n(a) || y(r) || d(a) <= r;
        };g.$observe("max", function (a) {
          r = p(a);h.$validate();
        });
      }
    };
  }function Md(a, b, d, c) {
    (c.$$hasNativeValidators = D(b[0].validity)) && c.$parsers.push(function (a) {
      var c = b.prop("validity") || {};return c.badInput || c.typeMismatch ? void 0 : a;
    });
  }function Nd(a, b, d, c, e) {
    if (w(c)) {
      a = a(c);if (!a.constant) throw nb("constexpr", d, c);return a(b);
    }return e;
  }function qc(a, b) {
    a = "ngClass" + a;return ["$animate", function (d) {
      function c(a, b) {
        var c = [],
            d = 0;a: for (; d < a.length; d++) {
          for (var e = a[d], m = 0; m < b.length; m++) if (e == b[m]) continue a;c.push(e);
        }return c;
      }function e(a) {
        var b = [];return L(a) ? (q(a, function (a) {
          b = b.concat(e(a));
        }), b) : G(a) ? a.split(" ") : D(a) ? (q(a, function (a, c) {
          a && (b = b.concat(c.split(" ")));
        }), b) : a;
      }return { restrict: "AC", link: function link(f, g, h) {
          function k(a) {
            a = l(a, 1);h.$addClass(a);
          }function l(a, b) {
            var c = g.data("$classCounts") || U(),
                d = [];q(a, function (a) {
              if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
            });g.data("$classCounts", c);return d.join(" ");
          }
          function m(a, b) {
            var e = c(b, a),
                f = c(a, b),
                e = l(e, 1),
                f = l(f, -1);e && e.length && d.addClass(g, e);f && f.length && d.removeClass(g, f);
          }function n(a) {
            if (!0 === b || (f.$index & 1) === b) {
              var c = e(a || []);if (!p) k(c);else if (!na(a, p)) {
                var d = e(p);m(d, c);
              }
            }p = L(a) ? a.map(function (a) {
              return ia(a);
            }) : ia(a);
          }var p;f.$watch(h[a], n, !0);h.$observe("class", function (b) {
            n(f.$eval(h[a]));
          });"ngClass" !== a && f.$watch("$index", function (c, d) {
            var g = c & 1;if (g !== (d & 1)) {
              var m = e(f.$eval(h[a]));g === b ? k(m) : (g = l(m, -1), h.$removeClass(g));
            }
          });
        } };
    }];
  }function Kd(a) {
    function b(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
    }function d(a, c) {
      a = a ? "-" + Cc(a, "-") : "";b(ob + a, !0 === c);b(Od + a, !1 === c);
    }var c = a.ctrl,
        e = a.$element,
        f = {},
        g = a.set,
        h = a.unset,
        k = a.$animate;f[Od] = !(f[ob] = e.hasClass(ob));c.$setValidity = function (a, e, f) {
      y(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Pd(c.$pending) && (c.$pending = void 0));Ga(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));c.$pending ? (b(Qd, !0), c.$valid = c.$invalid = void 0, d("", null)) : (b(Qd, !1), c.$valid = Pd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));e = c.$pending && c.$pending[a] ? void 0 : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;d(a, e);c.$$parentForm.$setValidity(a, e, c);
    };
  }function Pd(a) {
    if (a) for (var b in a) if (a.hasOwnProperty(b)) return !1;return !0;
  }var Cg = /^\/(.+)\/([a-z]*)$/,
      ua = Object.prototype.hasOwnProperty,
      Q = function Q(a) {
    return G(a) ? a.toLowerCase() : a;
  },
      ub = function ub(a) {
    return G(a) ? a.toUpperCase() : a;
  },
      Ea,
      F,
      qa,
      va = [].slice,
      bg = [].splice,
      Dg = [].push,
      ma = Object.prototype.toString,
      wc = Object.getPrototypeOf,
      xa = N("ng"),
      ca = C.angular || (C.angular = {}),
      Ub,
      pb = 0;Ea = C.document.documentMode;A.$inject = [];Xa.$inject = [];var L = Array.isArray,
      ae = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
      W = function W(a) {
    return G(a) ? a.trim() : a;
  },
      wd = function wd(a) {
    return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  },
      Ba = function Ba() {
    if (!w(Ba.rules)) {
      var a = C.document.querySelector("[ng-csp]") || C.document.querySelector("[data-ng-csp]");if (a) {
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
      rb = function rb() {
    if (w(rb.name_)) return rb.name_;var a,
        b,
        d = Na.length,
        c,
        e;for (b = 0; b < d; ++b) if ((c = Na[b], a = C.document.querySelector("[" + c.replace(":", "\\:") + "jq]"))) {
      e = a.getAttribute(c + "jq");break;
    }return rb.name_ = e;
  },
      de = /:/g,
      Na = ["ng-", "data-ng-", "ng:", "x-ng-"],
      ie = /[A-Z]/g,
      Dc = !1,
      Ma = 3,
      me = { full: "1.5.8", major: 1, minor: 5, dot: 8, codeName: "arbitrary-fallbacks" };O.expando = "ng339";var fb = O.cache = {},
      Pf = 1;O._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };var Kf = /([\:\-\_]+(.))/g,
      Lf = /^moz([A-Z])/,
      yb = { mouseleave: "mouseout", mouseenter: "mouseover" },
      Wb = N("jqLite"),
      Of = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      Vb = /<|&#?\w+;/,
      Mf = /<([\w:-]+)/,
      Nf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ja = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ja.optgroup = ja.option;ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;ja.th = ja.td;var Uf = C.Node.prototype.contains || function (a) {
    return !!(this.compareDocumentPosition(a) & 16);
  },
      Oa = O.prototype = { ready: function ready(a) {
      function b() {
        d || (d = !0, a());
      }var d = !1;"complete" === C.document.readyState ? C.setTimeout(b) : (this.on("DOMContentLoaded", b), O(C).on("load", b));
    }, toString: function toString() {
      var a = [];q(this, function (b) {
        a.push("" + b);
      });return "[" + a.join(", ") + "]";
    }, eq: function eq(a) {
      return 0 <= a ? F(this[a]) : F(this[this.length + a]);
    }, length: 0, push: Dg, sort: [].sort, splice: [].splice },
      Eb = {};q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
    Eb[Q(a)] = a;
  });var Vc = {};q("input select option textarea button form details".split(" "), function (a) {
    Vc[a] = !0;
  });var bd = { ngMinlength: "minlength",
    ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern" };q({ data: Yb, removeData: eb, hasData: function hasData(a) {
      for (var b in fb[a.ng339]) return !0;return !1;
    }, cleanData: function cleanData(a) {
      for (var b = 0, d = a.length; b < d; b++) eb(a[b]);
    } }, function (a, b) {
    O[b] = a;
  });q({ data: Yb, inheritedData: Cb, scope: function scope(a) {
      return F.data(a, "$scope") || Cb(a.parentNode || a, ["$isolateScope", "$scope"]);
    }, isolateScope: function isolateScope(a) {
      return F.data(a, "$isolateScope") || F.data(a, "$isolateScopeNoTemplate");
    }, controller: Sc, injector: function injector(a) {
      return Cb(a, "$injector");
    }, removeAttr: function removeAttr(a, b) {
      a.removeAttribute(b);
    }, hasClass: zb, css: function css(a, b, d) {
      b = db(b);if (w(d)) a.style[b] = d;else return a.style[b];
    }, attr: function attr(a, b, d) {
      var c = a.nodeType;if (c !== Ma && 2 !== c && 8 !== c) if ((c = Q(b), Eb[c])) if (w(d)) d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c));else return a[b] || (a.attributes.getNamedItem(b) || A).specified ? c : void 0;else if (w(d)) a.setAttribute(b, d);else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? void 0 : a;
    }, prop: function prop(a, b, d) {
      if (w(d)) a[b] = d;else return a[b];
    }, text: (function () {
      function a(a, d) {
        if (y(d)) {
          var c = a.nodeType;return 1 === c || c === Ma ? a.textContent : "";
        }a.textContent = d;
      }a.$dv = "";return a;
    })(), val: function val(a, b) {
      if (y(b)) {
        if (a.multiple && "select" === wa(a)) {
          var d = [];q(a.options, function (a) {
            a.selected && d.push(a.value || a.text);
          });return 0 === d.length ? null : d;
        }return a.value;
      }a.value = b;
    }, html: function html(a, b) {
      if (y(b)) return a.innerHTML;wb(a, !0);a.innerHTML = b;
    }, empty: Tc }, function (a, b) {
    O.prototype[b] = function (b, c) {
      var e,
          f,
          g = this.length;if (a !== Tc && y(2 == a.length && a !== zb && a !== Sc ? b : c)) {
        if (D(b)) {
          for (e = 0; e < g; e++) if (a === Yb) a(this[e], b);else for (f in b) a(this[e], f, b[f]);return this;
        }e = a.$dv;g = y(e) ? Math.min(g, 1) : g;for (f = 0; f < g; f++) {
          var h = a(this[f], b, c);e = e ? e + h : h;
        }return e;
      }for (e = 0; e < g; e++) a(this[e], b, c);return this;
    };
  });q({ removeData: eb, on: function on(a, b, d, c) {
      if (w(c)) throw Wb("onargs");if (Nc(a)) {
        c = xb(a, !0);var e = c.events,
            f = c.handle;f || (f = c.handle = Rf(a, e));c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];for (var g = c.length, h = function h(b, c, g) {
          var h = e[b];h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));h.push(d);
        }; g--;) b = c[g], yb[b] ? (h(yb[b], Tf), h(b, void 0, !0)) : h(b);
      }
    }, off: Rc, one: function one(a, b, d) {
      a = F(a);a.on(b, function e() {
        a.off(b, d);a.off(b, e);
      });a.on(b, d);
    }, replaceWith: function replaceWith(a, b) {
      var d,
          c = a.parentNode;wb(a);q(new O(b), function (b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);d = b;
      });
    }, children: function children(a) {
      var b = [];q(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      });return b;
    }, contents: function contents(a) {
      return a.contentDocument || a.childNodes || [];
    }, append: function append(a, b) {
      var d = a.nodeType;if (1 === d || 11 === d) {
        b = new O(b);for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d]);
      }
    }, prepend: function prepend(a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;q(new O(b), function (b) {
          a.insertBefore(b, d);
        });
      }
    }, wrap: function wrap(a, b) {
      Pc(a, F(b).eq(0).clone()[0]);
    }, remove: Db, detach: function detach(a) {
      Db(a, !0);
    }, after: function after(a, b) {
      var d = a,
          c = a.parentNode;b = new O(b);for (var e = 0, f = b.length; e < f; e++) {
        var g = b[e];c.insertBefore(g, d.nextSibling);d = g;
      }
    }, addClass: Bb, removeClass: Ab, toggleClass: function toggleClass(a, b, d) {
      b && q(b.split(" "), function (b) {
        var e = d;y(e) && (e = !zb(a, b));(e ? Bb : Ab)(a, b);
      });
    }, parent: function parent(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    }, next: function next(a) {
      return a.nextElementSibling;
    }, find: function find(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
    }, clone: Xb, triggerHandler: function triggerHandler(a, b, d) {
      var c,
          e,
          f = b.type || b,
          g = xb(a);if (g = (g = g && g.events) && g[f]) c = { preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        }, isDefaultPrevented: function isDefaultPrevented() {
          return !0 === this.defaultPrevented;
        }, stopImmediatePropagation: function stopImmediatePropagation() {
          this.immediatePropagationStopped = !0;
        }, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
          return !0 === this.immediatePropagationStopped;
        }, stopPropagation: A, type: f, target: a }, b.type && (c = S(c, b)), b = ia(g), e = d ? [c].concat(d) : [c], q(b, function (b) {
        c.isImmediatePropagationStopped() || b.apply(a, e);
      });
    } }, function (a, b) {
    O.prototype[b] = function (b, c, e) {
      for (var f, g = 0, h = this.length; g < h; g++) y(f) ? (f = a(this[g], b, c, e), w(f) && (f = F(f))) : Qc(f, a(this[g], b, c, e));return w(f) ? f : this;
    };O.prototype.bind = O.prototype.on;O.prototype.unbind = O.prototype.off;
  });Ra.prototype = { put: function put(a, b) {
      this[Ca(a, this.nextUid)] = b;
    }, get: function get(a) {
      return this[Ca(a, this.nextUid)];
    }, remove: function remove(a) {
      var b = this[a = Ca(a, this.nextUid)];delete this[a];return b;
    } };var If = [function () {
    this.$get = [function () {
      return Ra;
    }];
  }],
      Wf = /^([^\(]+?)=>/,
      Xf = /^[^\(]*\(\s*([^\)]*)\)/m,
      Eg = /,/,
      Fg = /^\s*(_?)(\S+?)\1\s*$/,
      Vf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      Ha = N("$injector");cb.$$annotate = function (a, b, d) {
    var c;if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];if (a.length) {
          if (b) throw (G(d) && d || (d = a.name || Yf(a)), Ha("strictdi", d));
          b = Wc(a);q(b[1].split(Eg), function (a) {
            a.replace(Fg, function (a, b, d) {
              c.push(d);
            });
          });
        }a.$inject = c;
      }
    } else L(a) ? (b = a.length - 1, Pa(a[b], "fn"), c = a.slice(0, b)) : Pa(a, "fn", !0);return c;
  };var Rd = N("$animate"),
      $e = function $e() {
    this.$get = A;
  },
      af = function af() {
    var a = new Ra(),
        b = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
      function e(a, b, c) {
        var d = !1;b && (b = G(b) ? b.split(" ") : L(b) ? b : [], q(b, function (b) {
          b && (d = !0, a[b] = c);
        }));return d;
      }function f() {
        q(b, function (b) {
          var c = a.get(b);if (c) {
            var d = Zf(b.attr("class")),
                e = "",
                f = "";q(c, function (a, b) {
              a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
            });q(b, function (a) {
              e && Bb(a, e);f && Ab(a, f);
            });a.remove(b);
          }
        });b.length = 0;
      }return { enabled: A, on: A, off: A, pin: A, push: function push(g, h, k, l) {
          l && l();k = k || {};k.from && g.css(k.from);k.to && g.css(k.to);if (k.addClass || k.removeClass) if ((h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l)) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);g = new d();g.complete();return g;
        } };
    }];
  },
      Ye = ["$provide", function (a) {
    var b = this;this.$$registeredAnimations = Object.create(null);this.register = function (d, c) {
      if (d && "." !== d.charAt(0)) throw Rd("notcsel", d);var e = d + "-animation";b.$$registeredAnimations[d.substr(1)] = e;a.factory(e, c);
    };this.classNameFilter = function (a) {
      if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Rd("nongcls", "ng-animate");return this.$$classNameFilter;
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
          f = f && F(f);g = g && F(g);f = f || g.parent();b(e, f, g);return a.push(e, "enter", Ia(h));
        }, move: function move(e, f, g, h) {
          f = f && F(f);g = g && F(g);f = f || g.parent();b(e, f, g);return a.push(e, "move", Ia(h));
        }, leave: function leave(b, c) {
          return a.push(b, "leave", Ia(c), function () {
            b.remove();
          });
        }, addClass: function addClass(b, c, g) {
          g = Ia(g);g.addClass = gb(g.addclass, c);return a.push(b, "addClass", g);
        }, removeClass: function removeClass(b, c, g) {
          g = Ia(g);g.removeClass = gb(g.removeClass, c);return a.push(b, "removeClass", g);
        }, setClass: function setClass(b, c, g, h) {
          h = Ia(h);h.addClass = gb(h.addClass, c);h.removeClass = gb(h.removeClass, g);return a.push(b, "setClass", h);
        }, animate: function animate(b, c, g, h, k) {
          k = Ia(k);k.from = k.from ? S(k.from, c) : c;k.to = k.to ? S(k.to, g) : g;k.tempClasses = gb(k.tempClasses, h || "ng-inline-animate");return a.push(b, "animate", k);
        } };
    }];
  }],
      cf = function cf() {
    this.$get = ["$$rAF", function (a) {
      function b(b) {
        d.push(b);1 < d.length || a(function () {
          for (var a = 0; a < d.length; a++) d[a]();d = [];
        });
      }var d = [];return function () {
        var a = !1;b(function () {
          a = !0;
        });return function (d) {
          a ? d() : b(d);
        };
      };
    }];
  },
      bf = function bf() {
    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
      function f(a) {
        this.setHost(a);var b = d();this._doneCallbacks = [];this._tick = function (a) {
          var d = c[0];d && d.hidden ? e(a, 0, !1) : b(a);
        };this._state = 0;
      }f.chain = function (a, b) {
        function c() {
          if (d === a.length) b(!0);else a[d](function (a) {
            !1 === a ? b(!1) : (d++, c());
          });
        }var d = 0;c();
      };f.all = function (a, b) {
        function c(f) {
          e = e && f;++d === a.length && b(e);
        }var d = 0,
            e = !0;q(a, function (a) {
          a.done(c);
        });
      };f.prototype = { setHost: function setHost(a) {
          this.host = a || {};
        }, done: function done(a) {
          2 === this._state ? a() : this._doneCallbacks.push(a);
        }, progress: A, getPromise: function getPromise() {
          if (!this.promise) {
            var b = this;this.promise = a(function (a, c) {
              b.done(function (b) {
                !1 === b ? c() : a();
              });
            });
          }return this.promise;
        }, then: function then(a, b) {
          return this.getPromise().then(a, b);
        }, "catch": function _catch(a) {
          return this.getPromise()["catch"](a);
        },
        "finally": function _finally(a) {
          return this.getPromise()["finally"](a);
        }, pause: function pause() {
          this.host.pause && this.host.pause();
        }, resume: function resume() {
          this.host.resume && this.host.resume();
        }, end: function end() {
          this.host.end && this.host.end();this._resolve(!0);
        }, cancel: function cancel() {
          this.host.cancel && this.host.cancel();this._resolve(!1);
        }, complete: function complete(a) {
          var b = this;0 === b._state && (b._state = 1, b._tick(function () {
            b._resolve(a);
          }));
        }, _resolve: function _resolve(a) {
          2 !== this._state && (q(this._doneCallbacks, function (b) {
            b(a);
          }), this._doneCallbacks.length = 0, this._state = 2);
        } };return f;
    }];
  },
      Ze = function Ze() {
    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
      return function (b, e) {
        function f() {
          a(function () {
            g.addClass && (b.addClass(g.addClass), g.addClass = null);g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);g.to && (b.css(g.to), g.to = null);h || k.complete();h = !0;
          });return k;
        }var g = e || {};g.$$prepared || (g = pa(g));g.cleanupStyles && (g.from = g.to = null);g.from && (b.css(g.from), g.from = null);var h,
            k = new d();return { start: f, end: f };
      };
    }];
  },
      ga = N("$compile"),
      bc = new function () {}();
  Fc.$inject = ["$provide", "$$sanitizeUriProvider"];Fb.prototype.isFirstChange = function () {
    return this.previousValue === bc;
  };var Yc = /^((?:x|data)[\:\-_])/i,
      cg = N("$controller"),
      cd = /^(\S+)(\s+as\s+([\w$]+))?$/,
      jf = function jf() {
    this.$get = ["$document", function (a) {
      return function (b) {
        b ? !b.nodeType && b instanceof F && (b = b[0]) : b = a[0].body;return b.offsetWidth + 1;
      };
    }];
  },
      dd = "application/json",
      ec = { "Content-Type": dd + ";charset=utf-8" },
      eg = /^\[|^\{(?!\{)/,
      fg = { "[": /]$/, "{": /}$/ },
      dg = /^\)\]\}',?\n/,
      Gg = N("$http"),
      hd = function hd(a) {
    return function () {
      throw Gg("legacy", a);
    };
  },
      Ka = ca.$interpolateMinErr = N("$interpolate");Ka.throwNoconcat = function (a) {
    throw Ka("noconcat", a);
  };Ka.interr = function (a, b) {
    return Ka("interr", a, b.toString());
  };var rf = function rf() {
    this.$get = ["$window", function (a) {
      function b(a) {
        var b = function b(a) {
          b.data = a;b.called = !0;
        };b.id = a;return b;
      }var d = a.angular.callbacks,
          c = {};return { createCallback: function createCallback(a) {
          a = "_" + (d.$$counter++).toString(36);var f = "angular.callbacks." + a,
              g = b(a);c[f] = d[a] = g;return f;
        }, wasCalled: function wasCalled(a) {
          return c[a].called;
        }, getResponse: function getResponse(a) {
          return c[a].data;
        },
        removeCallback: function removeCallback(a) {
          delete d[c[a].id];delete c[a];
        } };
    }];
  },
      Hg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      hg = { http: 80, https: 443, ftp: 21 },
      Gb = N("$location"),
      Ig = { $$absUrl: "", $$html5: !1, $$replace: !1, absUrl: Hb("$$absUrl"), url: function url(a) {
      if (y(a)) return this.$$url;var b = Hg.exec(a);(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));(b[2] || b[1] || "" === a) && this.search(b[3] || "");this.hash(b[5] || "");return this;
    }, protocol: Hb("$$protocol"), host: Hb("$$host"), port: Hb("$$port"), path: md("$$path", function (a) {
      a = null !== a ? a.toString() : "";return "/" == a.charAt(0) ? a : "/" + a;
    }), search: function search(a, b) {
      switch (arguments.length) {case 0:
          return this.$$search;case 1:
          if (G(a) || T(a)) a = a.toString(), this.$$search = Ac(a);else if (D(a)) a = pa(a, {}), q(a, function (b, c) {
            null == b && delete a[c];
          }), this.$$search = a;else throw Gb("isrcharg");break;default:
          y(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;}this.$$compose();return this;
    }, hash: md("$$hash", function (a) {
      return null !== a ? a.toString() : "";
    }), replace: function replace() {
      this.$$replace = !0;return this;
    } };q([ld, hc, gc], function (a) {
    a.prototype = Object.create(Ig);a.prototype.state = function (b) {
      if (!arguments.length) return this.$$state;if (a !== gc || !this.$$html5) throw Gb("nostate");this.$$state = y(b) ? null : b;return this;
    };
  });var X = N("$parse"),
      jg = Function.prototype.call,
      kg = Function.prototype.apply,
      lg = Function.prototype.bind,
      Ob = U();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
    Ob[a] = !0;
  });var Jg = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
      jc = function jc(a) {
    this.options = a;
  };jc.prototype = { constructor: jc,
    lex: function lex(a) {
      this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) if ((a = this.text.charAt(this.index), '"' === a || "'" === a)) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
        var b = a + this.peek(),
            d = b + this.peek(2),
            c = Ob[b],
            e = Ob[d];Ob[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
      }return this.tokens;
    }, is: function is(a, b) {
      return -1 !== b.indexOf(a);
    }, peek: function peek(a) {
      a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    }, isNumber: function isNumber(a) {
      return "0" <= a && "9" >= a && "string" === typeof a;
    }, isWhitespace: function isWhitespace(a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || " " === a;
    }, isIdentifierStart: function isIdentifierStart(a) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
    }, isValidIdentifierStart: function isValidIdentifierStart(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
    }, isIdentifierContinue: function isIdentifierContinue(a) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
    }, isValidIdentifierContinue: function isValidIdentifierContinue(a, b) {
      return this.isValidIdentifierStart(a, b) || this.isNumber(a);
    }, codePointAt: function codePointAt(a) {
      return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
    }, peekMultichar: function peekMultichar() {
      var a = this.text.charAt(this.index),
          b = this.peek();if (!b) return a;var d = a.charCodeAt(0),
          c = b.charCodeAt(0);return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
    }, isExpOperator: function isExpOperator(a) {
      return "-" === a || "+" === a || this.isNumber(a);
    }, throwError: function throwError(a, b, d) {
      d = d || this.index;b = w(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;throw X("lexerr", a, b, this.text);
    }, readNumber: function readNumber() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var d = Q(this.text.charAt(this.index));if ("." == d || this.isNumber(d)) a += d;else {
          var c = this.peek();if ("e" == d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
        }this.index++;
      }this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
    }, readIdent: function readIdent() {
      var a = this.index;for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
        var b = this.peekMultichar();if (!this.isIdentifierContinue(b)) break;this.index += b.length;
      }this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
    }, readString: function readString(a) {
      var b = this.index;this.index++;for (var d = "", c = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index),
            c = c + f;if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Jg[f] || f, e = !1;else if ("\\" === f) e = !0;else {
          if (f === a) {
            this.index++;this.tokens.push({ index: b, text: c, constant: !0, value: d });return;
          }d += f;
        }this.index++;
      }this.throwError("Unterminated quote", b);
    } };var s = function s(a, b) {
    this.lexer = a;this.options = b;
  };s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";
  s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";s.ThisExpression = "ThisExpression";s.LocalsExpression = "LocalsExpression";s.NGValueParameter = "NGValueParameter";s.prototype = { ast: function ast(a) {
      this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
    },
    program: function program() {
      for (var a = [];;) if ((0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";"))) return { type: s.Program, body: a };
    }, expressionStatement: function expressionStatement() {
      return { type: s.ExpressionStatement, expression: this.filterChain() };
    }, filterChain: function filterChain() {
      for (var a = this.expression(); this.expect("|");) a = this.filter(a);return a;
    }, expression: function expression() {
      return this.assignment();
    }, assignment: function assignment() {
      var a = this.ternary();this.expect("=") && (a = { type: s.AssignmentExpression,
        left: a, right: this.assignment(), operator: "=" });return a;
    }, ternary: function ternary() {
      var a = this.logicalOR(),
          b,
          d;return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), { type: s.ConditionalExpression, test: a, alternate: b, consequent: d }) : a;
    }, logicalOR: function logicalOR() {
      for (var a = this.logicalAND(); this.expect("||");) a = { type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND() };return a;
    }, logicalAND: function logicalAND() {
      for (var a = this.equality(); this.expect("&&");) a = { type: s.LogicalExpression,
        operator: "&&", left: a, right: this.equality() };return a;
    }, equality: function equality() {
      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.relational() };return a;
    }, relational: function relational() {
      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.additive() };return a;
    }, additive: function additive() {
      for (var a = this.multiplicative(), b; b = this.expect("+", "-");) a = { type: s.BinaryExpression, operator: b.text,
        left: a, right: this.multiplicative() };return a;
    }, multiplicative: function multiplicative() {
      for (var a = this.unary(), b; b = this.expect("*", "/", "%");) a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.unary() };return a;
    }, unary: function unary() {
      var a;return (a = this.expect("+", "-", "!")) ? { type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
    }, primary: function primary() {
      var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = { type: s.Literal, value: this.options.literals[this.consume().text] } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = { type: s.CallExpression, callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === b.text ? (a = { type: s.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === b.text ? a = { type: s.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");return a;
    }, filter: function filter(a) {
      a = [a];for (var b = { type: s.CallExpression, callee: this.identifier(), arguments: a, filter: !0 }; this.expect(":");) a.push(this.expression());return b;
    }, parseArguments: function parseArguments() {
      var a = [];if (")" !== this.peekToken().text) {
        do a.push(this.filterChain()); while (this.expect(","));
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
          b;if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;
          b = { type: s.Property, kind: "init" };this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());a.push(b);
        } while (this.expect(","));
      }this.consume("}");
      return { type: s.ObjectExpression, properties: a };
    }, throwError: function throwError(a, b) {
      throw X("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    }, consume: function consume(a) {
      if (0 === this.tokens.length) throw X("ueoe", this.text);var b = this.expect(a);b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return b;
    }, peekToken: function peekToken() {
      if (0 === this.tokens.length) throw X("ueoe", this.text);return this.tokens[0];
    }, peek: function peek(a, b, d, c) {
      return this.peekAhead(0, a, b, d, c);
    }, peekAhead: function peekAhead(a, b, d, c, e) {
      if (this.tokens.length > a) {
        a = this.tokens[a];var f = a.text;if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
      }return !1;
    }, expect: function expect(a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
    }, selfReferential: { "this": { type: s.ThisExpression }, $locals: { type: s.LocalsExpression } } };td.prototype = { compile: function compile(a, b) {
      var d = this,
          c = this.astBuilder.ast(a);this.state = { nextId: 0, filters: {}, expensiveChecks: b, fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] };V(c, d.$filter);var e = "",
          f;this.stage = "assign";
      if (f = rd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");f = pd(c.body);d.stage = "inputs";q(f, function (a, b) {
        var c = "fn" + b;d.state[c] = { vars: [], body: [], own: {} };d.state.computing = c;var e = d.nextId();d.recurse(a, e);d.return_(e);d.state.inputs.push(c);a.watchId = b;
      });this.state.computing = "fn";this.stage = "main";this.recurse(c);e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";e = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e)(this.$filter, Sa, ra, nd, ig, Ib, mg, od, a);this.state = this.stage = void 0;e.literal = sd(c);e.constant = c.constant;return e;
    }, USE: "use", STRICT: "strict", watchFns: function watchFns() {
      var a = [],
          b = this.state.inputs,
          d = this;q(b, function (b) {
        a.push("var " + b + "=" + d.generateFunction(b, "s"));
      });b.length && a.push("fn.inputs=[" + b.join(",") + "];");
      return a.join("");
    }, generateFunction: function generateFunction(a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
    }, filterPrefix: function filterPrefix() {
      var a = [],
          b = this;q(this.state.filters, function (d, c) {
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
          m,
          n;c = c || A;if (!f && w(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));else switch (a.type) {case s.Program:
          q(a.body, function (b, c) {
            k.recurse(b.expression, void 0, void 0, function (a) {
              h = a;
            });c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
          });break;case s.Literal:
          m = this.escape(a.value);this.assign(b, m);c(m);break;case s.UnaryExpression:
          this.recurse(a.argument, void 0, void 0, function (a) {
            h = a;
          });m = a.operator + "(" + this.ifDefined(h, 0) + ")";this.assign(b, m);
          c(m);break;case s.BinaryExpression:
          this.recurse(a.left, void 0, void 0, function (a) {
            g = a;
          });this.recurse(a.right, void 0, void 0, function (a) {
            h = a;
          });m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";this.assign(b, m);c(m);break;case s.LogicalExpression:
          b = b || this.nextId();k.recurse(a.left, b);k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));c(b);break;case s.ConditionalExpression:
          b = b || this.nextId();k.recurse(a.test, b);k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));c(b);break;case s.Identifier:
          b = b || this.nextId();d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);Sa(a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
            k.if_("inputs" === k.stage || "s", function () {
              e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));k.assign(b, k.nonComputedMember("s", a.name));
            });
          }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));(k.state.expensiveChecks || Jb(a.name)) && k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();b = b || this.nextId();k.recurse(a.object, g, void 0, function () {
            k.if_(k.notNull(g), function () {
              e && 1 !== e && k.addEnsureSafeAssignContext(g);if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h);else {
                Sa(a.property.name);e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));m = k.nonComputedMember(g, a.property.name);if (k.state.expensiveChecks || Jb(a.property.name)) m = k.ensureSafeObject(m);k.assign(b, m);d && (d.computed = !1, d.name = a.property.name);
              }
            }, function () {
              k.assign(b, "undefined");
            });c(b);
          }, !!e);break;case s.CallExpression:
          b = b || this.nextId();
          a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
            var b = k.nextId();k.recurse(a, b);l.push(b);
          }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
            k.if_(k.notNull(h), function () {
              k.addEnsureSafeFunction(h);q(a.arguments, function (a) {
                k.recurse(a, k.nextId(), void 0, function (a) {
                  l.push(k.ensureSafeObject(a));
                });
              });g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";m = k.ensureSafeObject(m);k.assign(b, m);
            }, function () {
              k.assign(b, "undefined");
            });c(b);
          }));break;case s.AssignmentExpression:
          h = this.nextId();g = {};if (!qd(a.left)) throw X("lval");this.recurse(a.left, void 0, g, function () {
            k.if_(k.notNull(g.context), function () {
              k.recurse(a.right, h);k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));k.addEnsureSafeAssignContext(g.context);m = k.member(g.context, g.name, g.computed) + a.operator + h;k.assign(b, m);c(b || m);
            });
          }, 1);break;case s.ArrayExpression:
          l = [];q(a.elements, function (a) {
            k.recurse(a, k.nextId(), void 0, function (a) {
              l.push(a);
            });
          });m = "[" + l.join(",") + "]";this.assign(b, m);c(m);break;case s.ObjectExpression:
          l = [];n = !1;q(a.properties, function (a) {
            a.computed && (n = !0);
          });n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
            a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;h = k.nextId();k.recurse(a.value, h);k.assign(k.member(b, g, a.computed), h);
          })) : (q(a.properties, function (b) {
            k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
              l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
            });
          }), m = "{" + l.join(",") + "}", this.assign(b, m));c(b || m);break;case s.ThisExpression:
          this.assign(b, "s");c("s");break;case s.LocalsExpression:
          this.assign(b, "l");c("l");break;case s.NGValueParameter:
          this.assign(b, "v"), c("v");}
    }, getHasOwnProperty: function getHasOwnProperty(a, b) {
      var d = a + "." + b,
          c = this.current().own;c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));return c[d];
    },
    assign: function assign(a, b) {
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
      var d = /[^$_a-zA-Z0-9]/g;return (/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
      );
    }, computedMember: function computedMember(a, b) {
      return a + "[" + b + "]";
    }, member: function member(a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
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
      this.assign(a, "getStringValue(" + a + ")");
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
      if (G(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (T(a)) return a.toString();if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";if ("undefined" === typeof a) return "undefined";throw X("esc");
    }, nextId: function nextId(a, b) {
      var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (b ? "=" + b : ""));return d;
    }, current: function current() {
      return this.state[this.state.computing];
    } };ud.prototype = { compile: function compile(a, b) {
      var d = this,
          c = this.astBuilder.ast(a);this.expression = a;this.expensiveChecks = b;V(c, d.$filter);var e, f;if (e = rd(c)) f = this.recurse(e);e = pd(c.body);var g;e && (g = [], q(e, function (a, b) {
        var c = d.recurse(a);a.input = c;g.push(c);a.watchId = b;
      }));var h = [];q(c.body, function (a) {
        h.push(d.recurse(a.expression));
      });
      e = 0 === c.body.length ? A : 1 === c.body.length ? h[0] : function (a, b) {
        var c;q(h, function (d) {
          c = d(a, b);
        });return c;
      };f && (e.assign = function (a, b, c) {
        return f(a, c, b);
      });g && (e.inputs = g);e.literal = sd(c);e.constant = c.constant;return e;
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
          return Sa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Jb(a.name), b, d, f.expression);case s.MemberExpression:
          return c = this.recurse(a.object, !1, !!d), a.computed || (Sa(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);case s.CallExpression:
          return g = [], q(a.arguments, function (a) {
            g.push(f.recurse(a));
          }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
            for (var n = [], p = 0; p < g.length; ++p) n.push(g[p](a, c, d, f));a = e.apply(void 0, n, f);return b ? { context: void 0, name: void 0, value: a } : a;
          } : function (a, c, d, m) {
            var n = e(a, c, d, m),
                p;if (null != n.value) {
              ra(n.context, f.expression);nd(n.value, f.expression);p = [];for (var q = 0; q < g.length; ++q) p.push(ra(g[q](a, c, d, m), f.expression));p = ra(n.value.apply(n.context, p), f.expression);
            }return b ? { value: p } : p;
          };case s.AssignmentExpression:
          return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
            var n = c(a, d, g, m);a = e(a, d, g, m);ra(n.value, f.expression);Ib(n.context);n.context[n.name] = a;return b ? { value: a } : a;
          };case s.ArrayExpression:
          return g = [], q(a.elements, function (a) {
            g.push(f.recurse(a));
          }), function (a, c, d, e) {
            for (var f = [], p = 0; p < g.length; ++p) f.push(g[p](a, c, d, e));return b ? { value: f } : f;
          };case s.ObjectExpression:
          return g = [], q(a.properties, function (a) {
            a.computed ? g.push({ key: f.recurse(a.key), computed: !0, value: f.recurse(a.value) }) : g.push({ key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, computed: !1, value: f.recurse(a.value) });
          }), function (a, c, d, e) {
            for (var f = {}, p = 0; p < g.length; ++p) g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);return b ? { value: f } : f;
          };case s.ThisExpression:
          return function (a) {
            return b ? { value: a } : a;
          };case s.LocalsExpression:
          return function (a, c) {
            return b ? { value: c } : c;
          };case s.NGValueParameter:
          return function (a, c, d) {
            return b ? { value: d } : d;
          };}
    }, "unary+": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);d = w(d) ? +d : 0;return b ? { value: d } : d;
      };
    }, "unary-": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);d = w(d) ? -d : 0;return b ? { value: d } : d;
      };
    }, "unary!": function unary(a, b) {
      return function (d, c, e, f) {
        d = !a(d, c, e, f);return b ? { value: d } : d;
      };
    }, "binary+": function binary(a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);c = b(c, e, f, g);h = od(h, c);return d ? { value: h } : h;
      };
    }, "binary-": function binary(a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);c = b(c, e, f, g);h = (w(h) ? h : 0) - (w(c) ? c : 0);return d ? { value: h } : h;
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
        return b ? { context: void 0, name: void 0, value: a } : a;
      };
    }, identifier: function identifier(a, b, d, c, e) {
      return function (f, g, h, k) {
        f = g && a in g ? g : f;c && 1 !== c && f && !f[a] && (f[a] = {});g = f ? f[a] : void 0;b && ra(g, e);return d ? { context: f, name: a, value: g } : g;
      };
    }, computedMember: function computedMember(a, b, d, c, e) {
      return function (f, g, h, k) {
        var l = a(f, g, h, k),
            m,
            n;null != l && (m = b(f, g, h, k), m += "", Sa(m, e), c && 1 !== c && (Ib(l), l && !l[m] && (l[m] = {})), n = l[m], ra(n, e));return d ? { context: l, name: m, value: n } : n;
      };
    }, nonComputedMember: function nonComputedMember(a, b, d, c, e, f) {
      return function (g, h, k, l) {
        g = a(g, h, k, l);e && 1 !== e && (Ib(g), g && !g[b] && (g[b] = {}));h = null != g ? g[b] : void 0;(d || Jb(b)) && ra(h, f);return c ? { context: g, name: b, value: h } : h;
      };
    }, inputs: function inputs(a, b) {
      return function (d, c, e, f) {
        return f ? f[b] : a(d, c, e);
      };
    } };var kc = function kc(a, b, d) {
    this.lexer = a;this.$filter = b;this.options = d;this.ast = new s(a, d);this.astCompiler = d.csp ? new ud(this.ast, b) : new td(this.ast, b);
  };kc.prototype = { constructor: kc, parse: function parse(a) {
      return this.astCompiler.compile(a, this.options.expensiveChecks);
    } };var ng = Object.prototype.valueOf,
      sa = N("$sce"),
      la = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
      pg = N("$compile"),
      $ = C.document.createElement("a"),
      yd = Y(C.location.href);zd.$inject = ["$document"];Mc.$inject = ["$provide"];var Gd = 22,
      Fd = ".",
      mc = "0";Ad.$inject = ["$locale"];Cd.$inject = ["$locale"];var Ag = { yyyy: ba("FullYear", 4, 0, !1, !0), yy: ba("FullYear", 2, 0, !0, !0), y: ba("FullYear", 1, 0, !1, !0), MMMM: kb("Month"), MMM: kb("Month", !0), MM: ba("Month", 2, 1), M: ba("Month", 1, 1), LLLL: kb("Month", !1, !0), dd: ba("Date", 2), d: ba("Date", 1), HH: ba("Hours", 2), H: ba("Hours", 1), hh: ba("Hours", 2, -12), h: ba("Hours", 1, -12), mm: ba("Minutes", 2), m: ba("Minutes", 1), ss: ba("Seconds", 2), s: ba("Seconds", 1), sss: ba("Milliseconds", 3), EEEE: kb("Day"), EEE: kb("Day", !0), a: function a(_a2, b) {
      return 12 > _a2.getHours() ? b.AMPMS[0] : b.AMPMS[1];
    }, Z: function Z(a, b, d) {
      a = -1 * d;return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2));
    }, ww: Id(2), w: Id(1), G: nc, GG: nc, GGG: nc, GGGG: function GGGG(a, b) {
      return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
    } },
      zg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      yg = /^\-?\d+$/;Bd.$inject = ["$locale"];var tg = ha(Q),
      ug = ha(ub);Dd.$inject = ["$parse"];var oe = ha({ restrict: "E", compile: function compile(a, b) {
      if (!b.href && !b.xlinkHref) return function (a, b) {
        if ("a" === b[0].nodeName.toLowerCase()) {
          var e = "[object SVGAnimatedString]" === ma.call(b.prop("href")) ? "xlink:href" : "href";b.on("click", function (a) {
            b.attr(e) || a.preventDefault();
          });
        }
      };
    } }),
      vb = {};q(Eb, function (a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function (a) {
        e.$set(b, !!a);
      });
    }if ("multiple" != a) {
      var c = Aa("ng-" + b),
          e = d;"checked" === a && (e = function (a, b, e) {
        e.ngModel !== e[c] && d(a, b, e);
      });vb[c] = function () {
        return { restrict: "A", priority: 100, link: e };
      };
    }
  });q(bd, function (a, b) {
    vb[b] = function () {
      return { priority: 100, link: function link(a, c, e) {
          if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(Cg))) {
            e.$set("ngPattern", new RegExp(c[1], c[2]));return;
          }a.$watch(e[b], function (a) {
            e.$set(b, a);
          });
        } };
    };
  });q(["src", "srcset", "href"], function (a) {
    var b = Aa("ng-" + a);vb[b] = function () {
      return { priority: 99, link: function link(d, c, e) {
          var f = a,
              g = a;"href" === a && "[object SVGAnimatedString]" === ma.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);e.$observe(b, function (b) {
            b ? (e.$set(g, b), Ea && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
          });
        } };
    };
  });var Lb = { $addControl: A, $$renameControl: function $$renameControl(a, b) {
      a.$name = b;
    }, $removeControl: A, $setValidity: A,
    $setDirty: A, $setPristine: A, $setSubmitted: A };Jd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];var Sd = function Sd(a) {
    return ["$timeout", "$parse", function (b, d) {
      function c(a) {
        return "" === a ? d('this[""]').assign : d(a).assign || A;
      }return { name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Jd, compile: function compile(d, f) {
          d.addClass(Ua).addClass(ob);var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, f) {
              var n = f[0];if (!("action" in e)) {
                var p = function p(b) {
                  a.$apply(function () {
                    n.$commitViewValue();
                    n.$setSubmitted();
                  });b.preventDefault();
                };d[0].addEventListener("submit", p, !1);d.on("$destroy", function () {
                  b(function () {
                    d[0].removeEventListener("submit", p, !1);
                  }, 0, !1);
                });
              }(f[1] || n.$$parentForm).$addControl(n);var q = g ? c(n.$name) : A;g && (q(a, n), e.$observe(g, function (b) {
                n.$name !== b && (q(a, void 0), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n));
              }));d.on("$destroy", function () {
                n.$$parentForm.$removeControl(n);q(a, void 0);S(n, Lb);
              });
            } };
        } };
    }];
  },
      pe = Sd(),
      Ce = Sd(!0),
      Bg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      Kg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      Lg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
      Mg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      Td = /^(\d{4,})-(\d{2})-(\d{2})$/,
      Ud = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      rc = /^(\d{4,})-W(\d\d)$/,
      Vd = /^(\d{4,})-(\d\d)$/,
      Wd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Ld = U();q(["date", "datetime-local", "month", "time", "week"], function (a) {
    Ld[a] = !0;
  });var Xd = { text: function text(a, b, d, c, e, f) {
      lb(a, b, d, c, e, f);pc(c);
    }, date: mb("date", Td, Nb(Td, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": mb("datetimelocal", Ud, Nb(Ud, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: mb("time", Wd, Nb(Wd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: mb("week", rc, function (a, b) {
      if (da(a)) return a;if (G(a)) {
        rc.lastIndex = 0;var d = rc.exec(a);
        if (d) {
          var c = +d[1],
              e = +d[2],
              f = d = 0,
              g = 0,
              h = 0,
              k = Hd(c),
              e = 7 * (e - 1);b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());return new Date(c, 0, k.getDate() + e, d, f, g, h);
        }
      }return NaN;
    }, "yyyy-Www"), month: mb("month", Vd, Nb(Vd, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, b, d, c, e, f) {
      Md(a, b, d, c);lb(a, b, d, c, e, f);c.$$parserName = "number";c.$parsers.push(function (a) {
        if (c.$isEmpty(a)) return null;if (Mg.test(a)) return parseFloat(a);
      });c.$formatters.push(function (a) {
        if (!c.$isEmpty(a)) {
          if (!T(a)) throw nb("numfmt", a);a = a.toString();
        }return a;
      });if (w(d.min) || d.ngMin) {
        var g;c.$validators.min = function (a) {
          return c.$isEmpty(a) || y(g) || a >= g;
        };d.$observe("min", function (a) {
          w(a) && !T(a) && (a = parseFloat(a));g = T(a) && !isNaN(a) ? a : void 0;c.$validate();
        });
      }if (w(d.max) || d.ngMax) {
        var h;c.$validators.max = function (a) {
          return c.$isEmpty(a) || y(h) || a <= h;
        };d.$observe("max", function (a) {
          w(a) && !T(a) && (a = parseFloat(a));h = T(a) && !isNaN(a) ? a : void 0;c.$validate();
        });
      }
    }, url: function url(a, b, d, c, e, f) {
      lb(a, b, d, c, e, f);pc(c);c.$$parserName = "url";c.$validators.url = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || Kg.test(d);
      };
    }, email: function email(a, b, d, c, e, f) {
      lb(a, b, d, c, e, f);pc(c);c.$$parserName = "email";c.$validators.email = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || Lg.test(d);
      };
    }, radio: function radio(a, b, d, c) {
      y(d.name) && b.attr("name", ++pb);b.on("click", function (a) {
        b[0].checked && c.$setViewValue(d.value, a && a.type);
      });c.$render = function () {
        b[0].checked = d.value == c.$viewValue;
      };d.$observe("value", c.$render);
    }, checkbox: function checkbox(a, b, d, c, e, f, g, h) {
      var k = Nd(h, a, "ngTrueValue", d.ngTrueValue, !0),
          l = Nd(h, a, "ngFalseValue", d.ngFalseValue, !1);b.on("click", function (a) {
        c.$setViewValue(b[0].checked, a && a.type);
      });c.$render = function () {
        b[0].checked = c.$viewValue;
      };c.$isEmpty = function (a) {
        return !1 === a;
      };c.$formatters.push(function (a) {
        return na(a, k);
      });c.$parsers.push(function (a) {
        return a ? k : l;
      });
    }, hidden: A, button: A, submit: A, reset: A, file: A },
      Gc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
    return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(e, f, g, h) {
          h[0] && (Xd[Q(g.type)] || Xd.text)(e, f, g, h[0], b, a, d, c);
        } } };
  }],
      Ng = /^(true|false|\d+)$/,
      Ue = function Ue() {
    return { restrict: "A", priority: 100, compile: function compile(a, b) {
        return Ng.test(b.ngValue) ? function (a, b, e) {
          e.$set("value", a.$eval(e.ngValue));
        } : function (a, b, e) {
          a.$watch(e.ngValue, function (a) {
            e.$set("value", a);
          });
        };
      } };
  },
      ue = ["$compile", function (a) {
    return { restrict: "AC", compile: function compile(b) {
        a.$$addBindingClass(b);return function (b, c, e) {
          a.$$addBindingInfo(c, e.ngBind);c = c[0];b.$watch(e.ngBind, function (a) {
            c.textContent = y(a) ? "" : a;
          });
        };
      } };
  }],
      we = ["$interpolate", "$compile", function (a, b) {
    return { compile: function compile(d) {
        b.$$addBindingClass(d);return function (c, d, f) {
          c = a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d, c.expressions);d = d[0];f.$observe("ngBindTemplate", function (a) {
            d.textContent = y(a) ? "" : a;
          });
        };
      } };
  }],
      ve = ["$sce", "$parse", "$compile", function (a, b, d) {
    return { restrict: "A", compile: function compile(c, e) {
        var f = b(e.ngBindHtml),
            g = b(e.ngBindHtml, function (b) {
          return a.valueOf(b);
        });d.$$addBindingClass(c);return function (b, c, e) {
          d.$$addBindingInfo(c, e.ngBindHtml);b.$watch(g, function () {
            var d = f(b);c.html(a.getTrustedHtml(d) || "");
          });
        };
      } };
  }],
      Te = ha({ restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
      c.$viewChangeListeners.push(function () {
        a.$eval(d.ngChange);
      });
    } }),
      xe = qc("", !0),
      ze = qc("Odd", 0),
      ye = qc("Even", 1),
      Ae = Ta({ compile: function compile(a, b) {
      b.$set("ngCloak", void 0);a.removeClass("ng-cloak");
    } }),
      Be = [function () {
    return { restrict: "A", scope: !0, controller: "@", priority: 500 };
  }],
      Lc = {},
      Og = { blur: !0, focus: !0 };q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var b = Aa("ng-" + a);Lc[b] = ["$parse", "$rootScope", function (d, c) {
      return { restrict: "A", compile: function compile(e, f) {
          var g = d(f[b], null, !0);return function (b, d) {
            d.on(a, function (d) {
              var e = function e() {
                g(b, { $event: d });
              };Og[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
            });
          };
        } };
    }];
  });var Ee = ["$animate", "$compile", function (a, b) {
    return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(d, c, e, f, g) {
        var h, k, l;d.$watch(e.ngIf, function (d) {
          d ? k || g(function (d, f) {
            k = f;d[d.length++] = b.$$createComment("end ngIf", e.ngIf);h = { clone: d };a.enter(d, c.parent(), c);
          }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = tb(h.clone), a.leave(l).then(function () {
            l = null;
          }), h = null));
        });
      } };
  }],
      Fe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
    return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: ca.noop, compile: function compile(c, e) {
        var f = e.ngInclude || e.src,
            g = e.onload || "",
            h = e.autoscroll;return function (c, e, m, n, p) {
          var q = 0,
              s,
              B,
              r,
              y = function y() {
            B && (B.remove(), B = null);s && (s.$destroy(), s = null);r && (d.leave(r).then(function () {
              B = null;
            }), B = r, r = null);
          };c.$watch(f, function (f) {
            var m = function m() {
              !w(h) || h && !c.$eval(h) || b();
            },
                t = ++q;f ? (a(f, !0).then(function (a) {
              if (!c.$$destroyed && t === q) {
                var b = c.$new();n.template = a;a = p(b, function (a) {
                  y();d.enter(a, null, e).then(m);
                });s = b;r = a;s.$emit("$includeContentLoaded", f);c.$eval(g);
              }
            }, function () {
              c.$$destroyed || t !== q || (y(), c.$emit("$includeContentError", f));
            }), c.$emit("$includeContentRequested", f)) : (y(), n.template = null);
          });
        };
      } };
  }],
      We = ["$compile", function (a) {
    return { restrict: "ECA",
      priority: -400, require: "ngInclude", link: function link(b, d, c, e) {
        ma.call(d[0]).match(/SVG/) ? (d.empty(), a(Oc(e.template, C.document).childNodes)(b, function (a) {
          d.append(a);
        }, { futureParentElement: d })) : (d.html(e.template), a(d.contents())(b));
      } };
  }],
      Ge = Ta({ priority: 450, compile: function compile() {
      return { pre: function pre(a, b, d) {
          a.$eval(d.ngInit);
        } };
    } }),
      Se = function Se() {
    return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, b, d, c) {
        var e = b.attr(d.$attr.ngList) || ", ",
            f = "false" !== d.ngTrim,
            g = f ? W(e) : e;c.$parsers.push(function (a) {
          if (!y(a)) {
            var b = [];a && q(a.split(g), function (a) {
              a && b.push(f ? W(a) : a);
            });return b;
          }
        });c.$formatters.push(function (a) {
          if (L(a)) return a.join(e);
        });c.$isEmpty = function (a) {
          return !a || !a.length;
        };
      } };
  },
      ob = "ng-valid",
      Od = "ng-invalid",
      Ua = "ng-pristine",
      Mb = "ng-dirty",
      Qd = "ng-pending",
      nb = N("ngModel"),
      Pg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
    this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = void 0;this.$validators = {};
    this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = void 0;this.$name = l(d.name || "", !1)(a);this.$$parentForm = Lb;var m = e(d.ngModel),
        n = m.assign,
        p = m,
        u = n,
        s = null,
        B,
        r = this;this.$$setOptions = function (a) {
      if ((r.$options = a) && a.getterSetter) {
        var b = e(d.ngModel + "()"),
            f = e(d.ngModel + "($$$p)");p = function (a) {
          var c = m(a);z(c) && (c = b(a));
          return c;
        };u = function (a, b) {
          z(m(a)) ? f(a, { $$$p: b }) : n(a, b);
        };
      } else if (!m.assign) throw nb("nonassign", d.ngModel, ya(c));
    };this.$render = A;this.$isEmpty = function (a) {
      return y(a) || "" === a || null === a || a !== a;
    };this.$$updateEmptyClasses = function (a) {
      r.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"));
    };var J = 0;Kd({ ctrl: this, $element: c, set: function set(a, b) {
        a[b] = !0;
      }, unset: function unset(a, b) {
        delete a[b];
      }, $animate: f });this.$setPristine = function () {
      r.$dirty = !1;r.$pristine = !0;f.removeClass(c, Mb);f.addClass(c, Ua);
    };this.$setDirty = function () {
      r.$dirty = !0;r.$pristine = !1;f.removeClass(c, Ua);f.addClass(c, Mb);r.$$parentForm.$setDirty();
    };this.$setUntouched = function () {
      r.$touched = !1;r.$untouched = !0;f.setClass(c, "ng-untouched", "ng-touched");
    };this.$setTouched = function () {
      r.$touched = !0;r.$untouched = !1;f.setClass(c, "ng-touched", "ng-untouched");
    };this.$rollbackViewValue = function () {
      g.cancel(s);r.$viewValue = r.$$lastCommittedViewValue;r.$render();
    };this.$validate = function () {
      if (!T(r.$modelValue) || !isNaN(r.$modelValue)) {
        var a = r.$$rawModelValue,
            b = r.$valid,
            c = r.$modelValue,
            d = r.$options && r.$options.allowInvalid;r.$$runValidators(a, r.$$lastCommittedViewValue, function (e) {
          d || b === e || (r.$modelValue = e ? a : void 0, r.$modelValue !== c && r.$$writeModelToScope());
        });
      }
    };this.$$runValidators = function (a, b, c) {
      function d() {
        var c = !0;q(r.$validators, function (d, e) {
          var g = d(a, b);c = c && g;f(e, g);
        });return c ? !0 : (q(r.$asyncValidators, function (a, b) {
          f(b, null);
        }), !1);
      }function e() {
        var c = [],
            d = !0;q(r.$asyncValidators, function (e, g) {
          var h = e(a, b);if (!h || !z(h.then)) throw nb("nopromise", h);f(g, void 0);c.push(h.then(function () {
            f(g, !0);
          }, function () {
            d = !1;f(g, !1);
          }));
        });c.length ? k.all(c).then(function () {
          g(d);
        }, A) : g(!0);
      }function f(a, b) {
        h === J && r.$setValidity(a, b);
      }function g(a) {
        h === J && c(a);
      }J++;var h = J;(function () {
        var a = r.$$parserName || "parse";if (y(B)) f(a, null);else return B || (q(r.$validators, function (a, b) {
          f(b, null);
        }), q(r.$asyncValidators, function (a, b) {
          f(b, null);
        })), f(a, B), B;return !0;
      })() ? d() ? e() : g(!1) : g(!1);
    };this.$commitViewValue = function () {
      var a = r.$viewValue;g.cancel(s);if (r.$$lastCommittedViewValue !== a || "" === a && r.$$hasNativeValidators) r.$$updateEmptyClasses(a), r.$$lastCommittedViewValue = a, r.$pristine && this.$setDirty(), this.$$parseAndValidate();
    };this.$$parseAndValidate = function () {
      var b = r.$$lastCommittedViewValue;if (B = y(b) ? void 0 : !0) for (var c = 0; c < r.$parsers.length; c++) if ((b = r.$parsers[c](b), y(b))) {
        B = !1;break;
      }T(r.$modelValue) && isNaN(r.$modelValue) && (r.$modelValue = p(a));var d = r.$modelValue,
          e = r.$options && r.$options.allowInvalid;r.$$rawModelValue = b;e && (r.$modelValue = b, r.$modelValue !== d && r.$$writeModelToScope());r.$$runValidators(b, r.$$lastCommittedViewValue, function (a) {
        e || (r.$modelValue = a ? b : void 0, r.$modelValue !== d && r.$$writeModelToScope());
      });
    };this.$$writeModelToScope = function () {
      u(a, r.$modelValue);q(r.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (c) {
          b(c);
        }
      });
    };this.$setViewValue = function (a, b) {
      r.$viewValue = a;r.$options && !r.$options.updateOnDefault || r.$$debounceViewValueCommit(b);
    };this.$$debounceViewValueCommit = function (b) {
      var c = 0,
          d = r.$options;
      d && w(d.debounce) && (d = d.debounce, T(d) ? c = d : T(d[b]) ? c = d[b] : T(d["default"]) && (c = d["default"]));g.cancel(s);c ? s = g(function () {
        r.$commitViewValue();
      }, c) : h.$$phase ? r.$commitViewValue() : a.$apply(function () {
        r.$commitViewValue();
      });
    };a.$watch(function () {
      var b = p(a);if (b !== r.$modelValue && (r.$modelValue === r.$modelValue || b === b)) {
        r.$modelValue = r.$$rawModelValue = b;B = void 0;for (var c = r.$formatters, d = c.length, e = b; d--;) e = c[d](e);r.$viewValue !== e && (r.$$updateEmptyClasses(e), r.$viewValue = r.$$lastCommittedViewValue = e, r.$render(), r.$$runValidators(b, e, A));
      }return b;
    });
  }],
      Re = ["$rootScope", function (a) {
    return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Pg, priority: 1, compile: function compile(b) {
        b.addClass(Ua).addClass("ng-untouched").addClass(ob);return { pre: function pre(a, b, e, f) {
            var g = f[0];b = f[1] || g.$$parentForm;g.$$setOptions(f[2] && f[2].$options);b.$addControl(g);e.$observe("name", function (a) {
              g.$name !== a && g.$$parentForm.$$renameControl(g, a);
            });a.$on("$destroy", function () {
              g.$$parentForm.$removeControl(g);
            });
          }, post: function post(b, c, e, f) {
            var g = f[0];if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function (a) {
              g.$$debounceViewValueCommit(a && a.type);
            });c.on("blur", function () {
              g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched));
            });
          } };
      } };
  }],
      Qg = /(\s+|^)default(\s+|$)/,
      Ve = function Ve() {
    return { restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
        var d = this;this.$options = pa(a.$eval(b.ngModelOptions));w(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = W(this.$options.updateOn.replace(Qg, function () {
          d.$options.updateOnDefault = !0;return " ";
        }))) : this.$options.updateOnDefault = !0;
      }] };
  },
      He = Ta({ terminal: !0, priority: 1E3 }),
      Rg = N("ngOptions"),
      Sg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      Pe = ["$compile", "$document", "$parse", function (a, b, d) {
    function c(a, b, c) {
      function e(a, b, c, d, f) {
        this.selectValue = a;this.viewValue = b;this.label = c;this.group = d;this.disabled = f;
      }function f(a) {
        var b;if (!q && ta(a)) b = a;else {
          b = [];for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
        }return b;
      }var n = a.match(Sg);if (!n) throw Rg("iexp", a, ya(b));var p = n[5] || n[7],
          q = n[6];a = / as /.test(n[0]) && n[1];var s = n[9];b = d(n[2] ? n[1] : p);var w = a && d(a) || b,
          r = s && d(s),
          y = s ? function (a, b) {
        return r(c, b);
      } : function (a) {
        return Ca(a);
      },
          v = function v(a, b) {
        return y(a, E(a, b));
      },
          A = d(n[2] || n[1]),
          t = d(n[3] || ""),
          K = d(n[4] || ""),
          z = d(n[8]),
          H = {},
          E = q ? function (a, b) {
        H[q] = b;H[p] = a;return H;
      } : function (a) {
        H[p] = a;return H;
      };return { trackBy: s, getTrackByValue: v, getWatchables: d(z, function (a) {
          var b = [];a = a || [];for (var d = f(a), e = d.length, g = 0; g < e; g++) {
            var h = a === d ? g : d[g],
                l = a[h],
                h = E(l, h),
                l = y(l, h);b.push(l);if (n[2] || n[1]) l = A(c, h), b.push(l);n[4] && (h = K(c, h), b.push(h));
          }return b;
        }), getOptions: function getOptions() {
          for (var a = [], b = {}, d = z(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
            var p = d === g ? n : g[n],
                q = E(d[p], p),
                r = w(c, q),
                p = y(r, q),
                u = A(c, q),
                H = t(c, q),
                q = K(c, q),
                r = new e(p, r, u, H, q);a.push(r);b[p] = r;
          }return { items: a, selectValueMap: b,
            getOptionFromViewValue: function getOptionFromViewValue(a) {
              return b[v(a)];
            }, getViewValueFromOption: function getViewValueFromOption(a) {
              return s ? ca.copy(a.viewValue) : a.viewValue;
            } };
        } };
    }var e = C.document.createElement("option"),
        f = C.document.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "ngModel"], link: { pre: function pre(a, b, c, d) {
          d[0].registerOption = A;
        }, post: function post(d, h, k, l) {
          function m(a, b) {
            a.element = b;b.disabled = a.disabled;a.label !== b.label && (b.label = a.label, b.textContent = a.label);a.value !== b.value && (b.value = a.selectValue);
          }function n() {
            var a = t && p.readValue();if (t) for (var b = t.items.length - 1; 0 <= b; b--) {
              var c = t.items[b];w(c.group) ? Db(c.element.parentNode) : Db(c.element);
            }t = K.getOptions();var d = {};v && h.prepend(B);t.items.forEach(function (a) {
              var b;if (w(a.group)) {
                b = d[a.group];b || (b = f.cloneNode(!1), C.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);var c = e.cloneNode(!1);
              } else b = C, c = e.cloneNode(!1);b.appendChild(c);m(a, c);
            });h[0].appendChild(C);s.$render();s.$isEmpty(a) || (b = p.readValue(), (K.trackBy || y ? na(a, b) : a === b) || (s.$setViewValue(b), s.$render()));
          }var p = l[0],
              s = l[1],
              y = k.multiple,
              B;l = 0;for (var r = h.children(), A = r.length; l < A; l++) if ("" === r[l].value) {
            B = r.eq(l);break;
          }var v = !!B,
              z = F(e.cloneNode(!1));z.val("?");var t,
              K = c(k.ngOptions, h, d),
              C = b[0].createDocumentFragment();y ? (s.$isEmpty = function (a) {
            return !a || 0 === a.length;
          }, p.writeValue = function (a) {
            t.items.forEach(function (a) {
              a.element.selected = !1;
            });a && a.forEach(function (a) {
              if (a = t.getOptionFromViewValue(a)) a.element.selected = !0;
            });
          }, p.readValue = function () {
            var a = h.val() || [],
                b = [];q(a, function (a) {
              (a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a));
            });return b;
          }, K.trackBy && d.$watchCollection(function () {
            if (L(s.$viewValue)) return s.$viewValue.map(function (a) {
              return K.getTrackByValue(a);
            });
          }, function () {
            s.$render();
          })) : (p.writeValue = function (a) {
            var b = t.getOptionFromViewValue(a);b ? (h[0].value !== b.selectValue && (z.remove(), v || B.remove(), h[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || v ? (z.remove(), v || h.prepend(B), h.val(""), B.prop("selected", !0), B.attr("selected", !0)) : (v || B.remove(), h.prepend(z), h.val("?"), z.prop("selected", !0), z.attr("selected", !0));
          }, p.readValue = function () {
            var a = t.selectValueMap[h.val()];return a && !a.disabled ? (v || B.remove(), z.remove(), t.getViewValueFromOption(a)) : null;
          }, K.trackBy && d.$watch(function () {
            return K.getTrackByValue(s.$viewValue);
          }, function () {
            s.$render();
          }));v ? (B.remove(), a(B)(d), B.removeClass("ng-scope")) : B = F(e.cloneNode(!1));h.empty();n();d.$watchCollection(K.getWatchables, n);
        } } };
  }],
      Ie = ["$locale", "$interpolate", "$log", function (a, b, d) {
    var c = /{}/g,
        e = /^when(Minus)?(.+)$/;return { link: function link(f, g, h) {
        function k(a) {
          g.text(a || "");
        }var l = h.count,
            m = h.$attr.when && g.attr(h.$attr.when),
            n = h.offset || 0,
            p = f.$eval(m) || {},
            s = {},
            w = b.startSymbol(),
            B = b.endSymbol(),
            r = w + l + "-" + n + B,
            z = ca.noop,
            v;q(h, function (a, b) {
          var c = e.exec(b);c && (c = (c[1] ? "-" : "") + Q(c[2]), p[c] = g.attr(h.$attr[b]));
        });q(p, function (a, d) {
          s[d] = b(a.replace(c, r));
        });f.$watch(l, function (b) {
          var c = parseFloat(b),
              e = isNaN(c);e || c in p || (c = a.pluralCat(c - n));c === v || e && T(v) && isNaN(v) || (z(), e = s[c], y(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), z = A, k()) : z = f.$watch(e, k), v = c);
        });
      } };
  }],
      Je = ["$parse", "$animate", "$compile", function (a, b, d) {
    var c = N("ngRepeat"),
        e = function e(a, b, c, d, _e, m, n) {
      a[c] = d;_e && (a[_e] = m);a.$index = b;a.$first = 0 === b;a.$last = b === n - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (b & 1));
    };return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(f, g) {
        var h = g.ngRepeat,
            k = d.$$createComment("end ngRepeat", h),
            l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if (!l) throw c("iexp", h);var m = l[1],
            n = l[2],
            p = l[3],
            s = l[4],
            l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if (!l) throw c("iidexp", m);var w = l[3] || l[1],
            y = l[2];if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);var r,
            z,
            v,
            A,
            t = { $id: Ca };s ? r = a(s) : (v = function (a, b) {
          return Ca(b);
        }, A = function (a) {
          return a;
        });return function (a, d, f, g, l) {
          r && (z = function (b, c, d) {
            y && (t[y] = b);t[w] = c;t.$index = d;return r(a, t);
          });var m = U();a.$watchCollection(n, function (f) {
            var g,
                n,
                r = d[0],
                s,
                u = U(),
                t,
                C,
                F,
                E,
                G,
                D,
                H;p && (a[p] = f);if (ta(f)) G = f, n = z || v;else for (H in (n = z || A, G = [], f)) ua.call(f, H) && "$" !== H.charAt(0) && G.push(H);t = G.length;H = Array(t);for (g = 0; g < t; g++) if ((C = f === G ? g : G[g], F = f[C], E = n(C, F, g), m[E])) D = m[E], delete m[E], u[E] = D, H[g] = D;else {
              if (u[E]) throw (q(H, function (a) {
                a && a.scope && (m[a.id] = a);
              }), c("dupes", h, E, F));H[g] = { id: E,
                scope: void 0, clone: void 0 };u[E] = !0;
            }for (s in m) {
              D = m[s];E = tb(D.clone);b.leave(E);if (E[0].parentNode) for (g = 0, n = E.length; g < n; g++) E[g].$$NG_REMOVED = !0;D.scope.$destroy();
            }for (g = 0; g < t; g++) if ((C = f === G ? g : G[g], F = f[C], D = H[g], D.scope)) {
              s = r;do s = s.nextSibling; while (s && s.$$NG_REMOVED);D.clone[0] != s && b.move(tb(D.clone), null, r);r = D.clone[D.clone.length - 1];e(D.scope, g, w, F, y, C, t);
            } else l(function (a, c) {
              D.scope = c;var d = k.cloneNode(!1);a[a.length++] = d;b.enter(a, null, r);r = d;D.clone = a;u[D.id] = D;e(D.scope, g, w, F, y, C, t);
            });m = u;
          });
        };
      } };
  }],
      Ke = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngShow, function (b) {
          a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      De = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngHide, function (b) {
          a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      Le = Ta(function (a, b, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && q(d, function (a, c) {
        b.css(c, "");
      });a && b.css(a);
    }, !0);
  }),
      Me = ["$animate", "$compile", function (a, b) {
    return { require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {};
      }], link: function link(d, c, e, f) {
        var g = [],
            h = [],
            k = [],
            l = [],
            m = function m(a, b) {
          return function () {
            a.splice(b, 1);
          };
        };d.$watch(e.ngSwitch || e.on, function (c) {
          var d, e;d = 0;for (e = k.length; d < e; ++d) a.cancel(k[d]);d = k.length = 0;for (e = l.length; d < e; ++d) {
            var s = tb(h[d].clone);l[d].$destroy();(k[d] = a.leave(s)).then(m(k, d));
          }h.length = 0;l.length = 0;(g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
            c.transclude(function (d, e) {
              l.push(e);var f = c.element;d[d.length++] = b.$$createComment("end ngSwitchWhen");h.push({ clone: d });a.enter(d, f.parent(), f);
            });
          });
        });
      } };
  }],
      Ne = Ta({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
      c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];c.cases["!" + d.ngSwitchWhen].push({ transclude: e, element: b });
    } }),
      Oe = Ta({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
      c.cases["?"] = c.cases["?"] || [];c.cases["?"].push({ transclude: e,
        element: b });
    } }),
      Tg = N("ngTransclude"),
      Qe = ["$compile", function (a) {
    return { restrict: "EAC", terminal: !0, compile: function compile(b) {
        var d = a(b.contents());b.empty();return function (a, b, f, g, h) {
          function k() {
            d(a, function (a) {
              b.append(a);
            });
          }if (!h) throw Tg("orphan", ya(b));f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = "");f = f.ngTransclude || f.ngTranscludeSlot;h(function (a, c) {
            a.length ? b.append(a) : (k(), c.$destroy());
          }, null, f);f && !h.isSlotFilled(f) && k();
        };
      } };
  }],
      qe = ["$templateCache", function (a) {
    return { restrict: "E", terminal: !0,
      compile: function compile(b, d) {
        "text/ng-template" == d.type && a.put(d.id, b[0].text);
      } };
  }],
      Ug = { $setViewValue: A, $render: A },
      Vg = ["$element", "$scope", function (a, b) {
    var d = this,
        c = new Ra();d.ngModelCtrl = Ug;d.unknownOption = F(C.document.createElement("option"));d.renderUnknownOption = function (b) {
      b = "? " + Ca(b) + " ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b);
    };b.$on("$destroy", function () {
      d.renderUnknownOption = A;
    });d.removeUnknownOption = function () {
      d.unknownOption.parent() && d.unknownOption.remove();
    };d.readValue = function () {
      d.removeUnknownOption();
      return a.val();
    };d.writeValue = function (b) {
      d.hasOption(b) ? (d.removeUnknownOption(), a.val(b), "" === b && d.emptyOption.prop("selected", !0)) : null == b && d.emptyOption ? (d.removeUnknownOption(), a.val("")) : d.renderUnknownOption(b);
    };d.addOption = function (a, b) {
      if (8 !== b[0].nodeType) {
        Qa(a, '"option value"');"" === a && (d.emptyOption = b);var g = c.get(a) || 0;c.put(a, g + 1);d.ngModelCtrl.$render();b[0].hasAttribute("selected") && (b[0].selected = !0);
      }
    };d.removeOption = function (a) {
      var b = c.get(a);b && (1 === b ? (c.remove(a), "" === a && (d.emptyOption = void 0)) : c.put(a, b - 1));
    };d.hasOption = function (a) {
      return !!c.get(a);
    };d.registerOption = function (a, b, c, h, k) {
      if (h) {
        var l;c.$observe("value", function (a) {
          w(l) && d.removeOption(l);l = a;d.addOption(a, b);
        });
      } else k ? a.$watch(k, function (a, e) {
        c.$set("value", a);e !== a && d.removeOption(e);d.addOption(a, b);
      }) : d.addOption(c.value, b);b.on("$destroy", function () {
        d.removeOption(c.value);d.ngModelCtrl.$render();
      });
    };
  }],
      re = function re() {
    return { restrict: "E", require: ["select", "?ngModel"], controller: Vg, priority: 1, link: { pre: function pre(a, b, d, c) {
          var e = c[1];if (e) {
            var f = c[0];f.ngModelCtrl = e;b.on("change", function () {
              a.$apply(function () {
                e.$setViewValue(f.readValue());
              });
            });if (d.multiple) {
              f.readValue = function () {
                var a = [];q(b.find("option"), function (b) {
                  b.selected && a.push(b.value);
                });return a;
              };f.writeValue = function (a) {
                var c = new Ra(a);q(b.find("option"), function (a) {
                  a.selected = w(c.get(a.value));
                });
              };var g,
                  h = NaN;a.$watch(function () {
                h !== e.$viewValue || na(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());h = e.$viewValue;
              });e.$isEmpty = function (a) {
                return !a || 0 === a.length;
              };
            }
          }
        }, post: function post(a, b, d, c) {
          var e = c[1];if (e) {
            var f = c[0];e.$render = function () {
              f.writeValue(e.$viewValue);
            };
          }
        } } };
  },
      te = ["$interpolate", function (a) {
    return { restrict: "E", priority: 100, compile: function compile(b, d) {
        if (w(d.value)) var c = a(d.value, !0);else {
          var e = a(b.text(), !0);e || d.$set("value", b.text());
        }return function (a, b, d) {
          var k = b.parent();(k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e);
        };
      } };
  }],
      se = ha({ restrict: "E", terminal: !1 }),
      Ic = function Ic() {
    return { restrict: "A",
      require: "?ngModel", link: function link(a, b, d, c) {
        c && (d.required = !0, c.$validators.required = function (a, b) {
          return !d.required || !c.$isEmpty(b);
        }, d.$observe("required", function () {
          c.$validate();
        }));
      } };
  },
      Hc = function Hc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e,
              f = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
            G(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw N("ngPattern")("noregexp", f, a, ya(b));e = a || void 0;c.$validate();
          });c.$validators.pattern = function (a, b) {
            return c.$isEmpty(b) || y(e) || e.test(b);
          };
        }
      } };
  },
      Kc = function Kc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e = -1;d.$observe("maxlength", function (a) {
            a = Z(a);e = isNaN(a) ? -1 : a;c.$validate();
          });c.$validators.maxlength = function (a, b) {
            return 0 > e || c.$isEmpty(b) || b.length <= e;
          };
        }
      } };
  },
      Jc = function Jc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e = 0;d.$observe("minlength", function (a) {
            e = Z(a) || 0;c.$validate();
          });c.$validators.minlength = function (a, b) {
            return c.$isEmpty(b) || b.length >= e;
          };
        }
      } };
  };C.angular.bootstrap ? C.console && console.log("WARNING: Tried to load angular more than once.") : (je(), le(ca), ca.module("ngLocale", [], ["$provide", function (a) {
    function b(a) {
      a += "";var b = a.indexOf(".");return -1 == b ? 0 : a.length - b - 1;
    }a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "),
        SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), STANDALONEMONTH: "January February March April May June July August September October November December".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",",
        PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-¤", negSuf: "", posPre: "¤", posSuf: "" }] }, id: "en-us", localeID: "en_US", pluralCat: function pluralCat(a, c) {
        var e = a | 0,
            f = c;void 0 === f && (f = Math.min(b(a), 3));Math.pow(10, f);return 1 == e && 0 == f ? "one" : "other";
      } });
  }]), F(C.document).ready(function () {
    fe(C.document, Bc);
  }));
})(window);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
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
  }var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
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
  }var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
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
/* =========================================================
 * bootstrap-datetimepicker.js
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Improvements by Andrew Rowls
 * Improvements by Sébastien Malot
 * Improvements by Yun Lai
 * Improvements by Kenneth Henderick
 * Improvements by CuGBabyBeaR
 * Improvements by Christian Vaas
 *
 * Project URL : http://www.malot.fr/bootstrap-datetimepicker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!(function ($) {

  // Add ECMA262-5 Array methods if not supported natively (IE8)
  if (!('indexOf' in Array.prototype)) {
    Array.prototype.indexOf = function (find, i) {
      if (i === undefined) i = 0;
      if (i < 0) i += this.length;
      if (i < 0) i = 0;
      for (var n = this.length; i < n; i++) {
        if (i in this && this[i] === find) {
          return i;
        }
      }
      return -1;
    };
  }

  function elementOrParentIsFixed(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function () {
      if ($(this).css('position') === 'fixed') {
        isFixed = true;
        return false;
      }
    });
    return isFixed;
  }

  function UTCDate() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  function UTCToday() {
    var today = new Date();
    return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds(), 0);
  }

  // Picker object
  var Datetimepicker = function Datetimepicker(element, options) {
    var that = this;

    this.element = $(element);

    // add container for single page application
    // when page switch the datetimepicker div will be removed also.
    this.container = options.container || 'body';

    this.language = options.language || this.element.data('date-language') || 'en';
    this.language = this.language in dates ? this.language : this.language.split('-')[0]; // fr-CA fallback to fr
    this.language = this.language in dates ? this.language : 'en';
    this.isRTL = dates[this.language].rtl || false;
    this.formatType = options.formatType || this.element.data('format-type') || 'standard';
    this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || dates[this.language].format || DPGlobal.getDefaultFormat(this.formatType, 'input'), this.formatType);
    this.isInline = false;
    this.isVisible = false;
    this.isInput = this.element.is('input');
    this.fontAwesome = options.fontAwesome || this.element.data('font-awesome') || false;

    this.bootcssVer = options.bootcssVer || (this.isInput ? this.element.is('.form-control') ? 3 : 2 : this.bootcssVer = this.element.is('.input-group') ? 3 : 2);

    this.component = this.element.is('.date') ? this.bootcssVer == 3 ? this.element.find('.input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o').parent() : this.element.find('.add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o').parent() : false;
    this.componentReset = this.element.is('.date') ? this.bootcssVer == 3 ? this.element.find('.input-group-addon .glyphicon-remove, .input-group-addon .fa-times').parent() : this.element.find('.add-on .icon-remove, .add-on .fa-times').parent() : false;
    this.hasInput = this.component && this.element.find('input').length;
    if (this.component && this.component.length === 0) {
      this.component = false;
    }
    this.linkField = options.linkField || this.element.data('link-field') || false;
    this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data('link-format') || DPGlobal.getDefaultFormat(this.formatType, 'link'), this.formatType);
    this.minuteStep = options.minuteStep || this.element.data('minute-step') || 5;
    this.pickerPosition = options.pickerPosition || this.element.data('picker-position') || 'bottom-right';
    this.showMeridian = options.showMeridian || this.element.data('show-meridian') || false;
    this.initialDate = options.initialDate || new Date();
    this.zIndex = options.zIndex || this.element.data('z-index') || undefined;

    this.icons = {
      leftArrow: this.fontAwesome ? 'fa-arrow-left' : this.bootcssVer === 3 ? 'glyphicon-arrow-left' : 'icon-arrow-left',
      rightArrow: this.fontAwesome ? 'fa-arrow-right' : this.bootcssVer === 3 ? 'glyphicon-arrow-right' : 'icon-arrow-right'
    };
    this.icontype = this.fontAwesome ? 'fa' : 'glyphicon';

    this._attachEvents();

    this.clickedOutside = function (e) {
      // Clicked outside the datetimepicker, hide it
      if ($(e.target).closest('.datetimepicker').length === 0) {
        that.hide();
      }
    };

    this.formatViewType = 'datetime';
    if ('formatViewType' in options) {
      this.formatViewType = options.formatViewType;
    } else if ('formatViewType' in this.element.data()) {
      this.formatViewType = this.element.data('formatViewType');
    }

    this.minView = 0;
    if ('minView' in options) {
      this.minView = options.minView;
    } else if ('minView' in this.element.data()) {
      this.minView = this.element.data('min-view');
    }
    this.minView = DPGlobal.convertViewMode(this.minView);

    this.maxView = DPGlobal.modes.length - 1;
    if ('maxView' in options) {
      this.maxView = options.maxView;
    } else if ('maxView' in this.element.data()) {
      this.maxView = this.element.data('max-view');
    }
    this.maxView = DPGlobal.convertViewMode(this.maxView);

    this.wheelViewModeNavigation = false;
    if ('wheelViewModeNavigation' in options) {
      this.wheelViewModeNavigation = options.wheelViewModeNavigation;
    } else if ('wheelViewModeNavigation' in this.element.data()) {
      this.wheelViewModeNavigation = this.element.data('view-mode-wheel-navigation');
    }

    this.wheelViewModeNavigationInverseDirection = false;

    if ('wheelViewModeNavigationInverseDirection' in options) {
      this.wheelViewModeNavigationInverseDirection = options.wheelViewModeNavigationInverseDirection;
    } else if ('wheelViewModeNavigationInverseDirection' in this.element.data()) {
      this.wheelViewModeNavigationInverseDirection = this.element.data('view-mode-wheel-navigation-inverse-dir');
    }

    this.wheelViewModeNavigationDelay = 100;
    if ('wheelViewModeNavigationDelay' in options) {
      this.wheelViewModeNavigationDelay = options.wheelViewModeNavigationDelay;
    } else if ('wheelViewModeNavigationDelay' in this.element.data()) {
      this.wheelViewModeNavigationDelay = this.element.data('view-mode-wheel-navigation-delay');
    }

    this.startViewMode = 2;
    if ('startView' in options) {
      this.startViewMode = options.startView;
    } else if ('startView' in this.element.data()) {
      this.startViewMode = this.element.data('start-view');
    }
    this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
    this.viewMode = this.startViewMode;

    this.viewSelect = this.minView;
    if ('viewSelect' in options) {
      this.viewSelect = options.viewSelect;
    } else if ('viewSelect' in this.element.data()) {
      this.viewSelect = this.element.data('view-select');
    }
    this.viewSelect = DPGlobal.convertViewMode(this.viewSelect);

    this.forceParse = true;
    if ('forceParse' in options) {
      this.forceParse = options.forceParse;
    } else if ('dateForceParse' in this.element.data()) {
      this.forceParse = this.element.data('date-force-parse');
    }
    var template = this.bootcssVer === 3 ? DPGlobal.templateV3 : DPGlobal.template;
    while (template.indexOf('{iconType}') !== -1) {
      template = template.replace('{iconType}', this.icontype);
    }
    while (template.indexOf('{leftArrow}') !== -1) {
      template = template.replace('{leftArrow}', this.icons.leftArrow);
    }
    while (template.indexOf('{rightArrow}') !== -1) {
      template = template.replace('{rightArrow}', this.icons.rightArrow);
    }
    this.picker = $(template).appendTo(this.isInline ? this.element : this.container) // 'body')
    .on({
      click: $.proxy(this.click, this),
      mousedown: $.proxy(this.mousedown, this)
    });

    if (this.wheelViewModeNavigation) {
      if ($.fn.mousewheel) {
        this.picker.on({ mousewheel: $.proxy(this.mousewheel, this) });
      } else {
        console.log('Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option');
      }
    }

    if (this.isInline) {
      this.picker.addClass('datetimepicker-inline');
    } else {
      this.picker.addClass('datetimepicker-dropdown-' + this.pickerPosition + ' dropdown-menu');
    }
    if (this.isRTL) {
      this.picker.addClass('datetimepicker-rtl');
      var selector = this.bootcssVer === 3 ? '.prev span, .next span' : '.prev i, .next i';
      this.picker.find(selector).toggleClass(this.icons.leftArrow + ' ' + this.icons.rightArrow);
    }

    $(document).on('mousedown', this.clickedOutside);

    this.autoclose = false;
    if ('autoclose' in options) {
      this.autoclose = options.autoclose;
    } else if ('dateAutoclose' in this.element.data()) {
      this.autoclose = this.element.data('date-autoclose');
    }

    this.keyboardNavigation = true;
    if ('keyboardNavigation' in options) {
      this.keyboardNavigation = options.keyboardNavigation;
    } else if ('dateKeyboardNavigation' in this.element.data()) {
      this.keyboardNavigation = this.element.data('date-keyboard-navigation');
    }

    this.todayBtn = options.todayBtn || this.element.data('date-today-btn') || false;
    this.todayHighlight = options.todayHighlight || this.element.data('date-today-highlight') || false;

    this.weekStart = (options.weekStart || this.element.data('date-weekstart') || dates[this.language].weekStart || 0) % 7;
    this.weekEnd = (this.weekStart + 6) % 7;
    this.startDate = -Infinity;
    this.endDate = Infinity;
    this.daysOfWeekDisabled = [];
    this.setStartDate(options.startDate || this.element.data('date-startdate'));
    this.setEndDate(options.endDate || this.element.data('date-enddate'));
    this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
    this.setMinutesDisabled(options.minutesDisabled || this.element.data('date-minute-disabled'));
    this.setHoursDisabled(options.hoursDisabled || this.element.data('date-hour-disabled'));
    this.fillDow();
    this.fillMonths();
    this.update();
    this.showMode();

    if (this.isInline) {
      this.show();
    }
  };

  Datetimepicker.prototype = {
    constructor: Datetimepicker,

    _events: [],
    _attachEvents: function _attachEvents() {
      this._detachEvents();
      if (this.isInput) {
        // single input
        this._events = [[this.element, {
          focus: $.proxy(this.show, this),
          keyup: $.proxy(this.update, this),
          keydown: $.proxy(this.keydown, this)
        }]];
      } else if (this.component && this.hasInput) {
        // component: input + button
        this._events = [
        // For components that are not readonly, allow keyboard nav
        [this.element.find('input'), {
          focus: $.proxy(this.show, this),
          keyup: $.proxy(this.update, this),
          keydown: $.proxy(this.keydown, this)
        }], [this.component, {
          click: $.proxy(this.show, this)
        }]];
        if (this.componentReset) {
          this._events.push([this.componentReset, { click: $.proxy(this.reset, this) }]);
        }
      } else if (this.element.is('div')) {
        // inline datetimepicker
        this.isInline = true;
      } else {
        this._events = [[this.element, {
          click: $.proxy(this.show, this)
        }]];
      }
      for (var i = 0, el, ev; i < this._events.length; i++) {
        el = this._events[i][0];
        ev = this._events[i][1];
        el.on(ev);
      }
    },

    _detachEvents: function _detachEvents() {
      for (var i = 0, el, ev; i < this._events.length; i++) {
        el = this._events[i][0];
        ev = this._events[i][1];
        el.off(ev);
      }
      this._events = [];
    },

    show: function show(e) {
      this.picker.show();
      this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
      if (this.forceParse) {
        this.update();
      }
      this.place();
      $(window).on('resize', $.proxy(this.place, this));
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.isVisible = true;
      this.element.trigger({
        type: 'show',
        date: this.date
      });
    },

    hide: function hide(e) {
      if (!this.isVisible) return;
      if (this.isInline) return;
      this.picker.hide();
      $(window).off('resize', this.place);
      this.viewMode = this.startViewMode;
      this.showMode();
      if (!this.isInput) {
        $(document).off('mousedown', this.hide);
      }

      if (this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find('input').val())) this.setValue();
      this.isVisible = false;
      this.element.trigger({
        type: 'hide',
        date: this.date
      });
    },

    remove: function remove() {
      this._detachEvents();
      $(document).off('mousedown', this.clickedOutside);
      this.picker.remove();
      delete this.picker;
      delete this.element.data().datetimepicker;
    },

    getDate: function getDate() {
      var d = this.getUTCDate();
      return new Date(d.getTime() + d.getTimezoneOffset() * 60000);
    },

    getUTCDate: function getUTCDate() {
      return this.date;
    },

    setDate: function setDate(d) {
      this.setUTCDate(new Date(d.getTime() - d.getTimezoneOffset() * 60000));
    },

    setUTCDate: function setUTCDate(d) {
      if (d >= this.startDate && d <= this.endDate) {
        this.date = d;
        this.setValue();
        this.viewDate = this.date;
        this.fill();
      } else {
        this.element.trigger({
          type: 'outOfRange',
          date: d,
          startDate: this.startDate,
          endDate: this.endDate
        });
      }
    },

    setFormat: function setFormat(format) {
      this.format = DPGlobal.parseFormat(format, this.formatType);
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find('input');
      }
      if (element && element.val()) {
        this.setValue();
      }
    },

    setValue: function setValue() {
      var formatted = this.getFormattedDate();
      if (!this.isInput) {
        if (this.component) {
          this.element.find('input').val(formatted);
        }
        this.element.data('date', formatted);
      } else {
        this.element.val(formatted);
      }
      if (this.linkField) {
        $('#' + this.linkField).val(this.getFormattedDate(this.linkFormat));
      }
    },

    getFormattedDate: function getFormattedDate(format) {
      if (format == undefined) format = this.format;
      return DPGlobal.formatDate(this.date, format, this.language, this.formatType);
    },

    setStartDate: function setStartDate(startDate) {
      this.startDate = startDate || -Infinity;
      if (this.startDate !== -Infinity) {
        this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType);
      }
      this.update();
      this.updateNavArrows();
    },

    setEndDate: function setEndDate(endDate) {
      this.endDate = endDate || Infinity;
      if (this.endDate !== Infinity) {
        this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType);
      }
      this.update();
      this.updateNavArrows();
    },

    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(daysOfWeekDisabled) {
      this.daysOfWeekDisabled = daysOfWeekDisabled || [];
      if (!$.isArray(this.daysOfWeekDisabled)) {
        this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
      }
      this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    setMinutesDisabled: function setMinutesDisabled(minutesDisabled) {
      this.minutesDisabled = minutesDisabled || [];
      if (!$.isArray(this.minutesDisabled)) {
        this.minutesDisabled = this.minutesDisabled.split(/,\s*/);
      }
      this.minutesDisabled = $.map(this.minutesDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    setHoursDisabled: function setHoursDisabled(hoursDisabled) {
      this.hoursDisabled = hoursDisabled || [];
      if (!$.isArray(this.hoursDisabled)) {
        this.hoursDisabled = this.hoursDisabled.split(/,\s*/);
      }
      this.hoursDisabled = $.map(this.hoursDisabled, function (d) {
        return parseInt(d, 10);
      });
      this.update();
      this.updateNavArrows();
    },

    place: function place() {
      if (this.isInline) return;

      if (!this.zIndex) {
        var index_highest = 0;
        $('div').each(function () {
          var index_current = parseInt($(this).css('zIndex'), 10);
          if (index_current > index_highest) {
            index_highest = index_current;
          }
        });
        this.zIndex = index_highest + 10;
      }

      var offset, top, left, containerOffset;
      if (this.container instanceof $) {
        containerOffset = this.container.offset();
      } else {
        containerOffset = $(this.container).offset();
      }

      if (this.component) {
        offset = this.component.offset();
        left = offset.left;
        if (this.pickerPosition == 'bottom-left' || this.pickerPosition == 'top-left') {
          left += this.component.outerWidth() - this.picker.outerWidth();
        }
      } else {
        offset = this.element.offset();
        left = offset.left;
      }

      var bodyWidth = document.body.clientWidth || window.innerWidth;
      if (left + 220 > bodyWidth) {
        left = bodyWidth - 220;
      }

      if (this.pickerPosition == 'top-left' || this.pickerPosition == 'top-right') {
        top = offset.top - this.picker.outerHeight();
      } else {
        top = offset.top + this.height;
      }

      top = top - containerOffset.top;
      left = left - containerOffset.left;

      this.picker.css({
        top: top,
        left: left,
        zIndex: this.zIndex
      });
    },

    update: function update() {
      var date,
          fromArgs = false;
      if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
        date = arguments[0];
        fromArgs = true;
      } else {
        date = (this.isInput ? this.element.val() : this.element.find('input').val()) || this.element.data('date') || this.initialDate;
        if (typeof date == 'string' || date instanceof String) {
          date = date.replace(/^\s+|\s+$/g, '');
        }
      }

      if (!date) {
        date = new Date();
        fromArgs = false;
      }

      this.date = DPGlobal.parseDate(date, this.format, this.language, this.formatType);

      if (fromArgs) this.setValue();

      if (this.date < this.startDate) {
        this.viewDate = new Date(this.startDate);
      } else if (this.date > this.endDate) {
        this.viewDate = new Date(this.endDate);
      } else {
        this.viewDate = new Date(this.date);
      }
      this.fill();
    },

    fillDow: function fillDow() {
      var dowCnt = this.weekStart,
          html = '<tr>';
      while (dowCnt < this.weekStart + 7) {
        html += '<th class="dow">' + dates[this.language].daysMin[dowCnt++ % 7] + '</th>';
      }
      html += '</tr>';
      this.picker.find('.datetimepicker-days thead').append(html);
    },

    fillMonths: function fillMonths() {
      var html = '',
          i = 0;
      while (i < 12) {
        html += '<span class="month">' + dates[this.language].monthsShort[i++] + '</span>';
      }
      this.picker.find('.datetimepicker-months td').html(html);
    },

    fill: function fill() {
      if (this.date == null || this.viewDate == null) {
        return;
      }
      var d = new Date(this.viewDate),
          year = d.getUTCFullYear(),
          month = d.getUTCMonth(),
          dayMonth = d.getUTCDate(),
          hours = d.getUTCHours(),
          minutes = d.getUTCMinutes(),
          startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
          startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() + 1 : -Infinity,
          endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
          endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() + 1 : Infinity,
          currentDate = new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
          today = new Date();
      this.picker.find('.datetimepicker-days thead th:eq(1)').text(dates[this.language].months[month] + ' ' + year);
      if (this.formatViewType == 'time') {
        var formatted = this.getFormattedDate();
        this.picker.find('.datetimepicker-hours thead th:eq(1)').text(formatted);
        this.picker.find('.datetimepicker-minutes thead th:eq(1)').text(formatted);
      } else {
        this.picker.find('.datetimepicker-hours thead th:eq(1)').text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
        this.picker.find('.datetimepicker-minutes thead th:eq(1)').text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
      }
      this.picker.find('tfoot th.today').text(dates[this.language].today).toggle(this.todayBtn !== false);
      this.updateNavArrows();
      this.fillMonths();
      /*var prevMonth = UTCDate(year, month, 0,0,0,0,0);
       prevMonth.setUTCDate(prevMonth.getDate() - (prevMonth.getUTCDay() - this.weekStart + 7)%7);*/
      var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
          day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
      prevMonth.setUTCDate(day);
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
      var nextMonth = new Date(prevMonth);
      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var clsName;
      while (prevMonth.valueOf() < nextMonth) {
        if (prevMonth.getUTCDay() == this.weekStart) {
          html.push('<tr>');
        }
        clsName = '';
        if (prevMonth.getUTCFullYear() < year || prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month) {
          clsName += ' old';
        } else if (prevMonth.getUTCFullYear() > year || prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month) {
          clsName += ' new';
        }
        // Compare internal UTC date with local today, not UTC today
        if (this.todayHighlight && prevMonth.getUTCFullYear() == today.getFullYear() && prevMonth.getUTCMonth() == today.getMonth() && prevMonth.getUTCDate() == today.getDate()) {
          clsName += ' today';
        }
        if (prevMonth.valueOf() == currentDate) {
          clsName += ' active';
        }
        if (prevMonth.valueOf() + 86400000 <= this.startDate || prevMonth.valueOf() > this.endDate || $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
          clsName += ' disabled';
        }
        html.push('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + '</td>');
        if (prevMonth.getUTCDay() == this.weekEnd) {
          html.push('</tr>');
        }
        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
      }
      this.picker.find('.datetimepicker-days tbody').empty().append(html.join(''));

      html = [];
      var txt = '',
          meridian = '',
          meridianOld = '';
      var hoursDisabled = this.hoursDisabled || [];
      for (var i = 0; i < 24; i++) {
        if (hoursDisabled.indexOf(i) !== -1) continue;
        var actual = UTCDate(year, month, dayMonth, i);
        clsName = '';
        // We want the previous hour for the startDate
        if (actual.valueOf() + 3600000 <= this.startDate || actual.valueOf() > this.endDate) {
          clsName += ' disabled';
        } else if (hours == i) {
          clsName += ' active';
        }
        if (this.showMeridian && dates[this.language].meridiem.length == 2) {
          meridian = i < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1];
          if (meridian != meridianOld) {
            if (meridianOld != '') {
              html.push('</fieldset>');
            }
            html.push('<fieldset class="hour"><legend>' + meridian.toUpperCase() + '</legend>');
          }
          meridianOld = meridian;
          txt = i % 12 ? i % 12 : 12;
          html.push('<span class="hour' + clsName + ' hour_' + (i < 12 ? 'am' : 'pm') + '">' + txt + '</span>');
          if (i == 23) {
            html.push('</fieldset>');
          }
        } else {
          txt = i + ':00';
          html.push('<span class="hour' + clsName + '">' + txt + '</span>');
        }
      }
      this.picker.find('.datetimepicker-hours td').html(html.join(''));

      html = [];
      txt = '', meridian = '', meridianOld = '';
      var minutesDisabled = this.minutesDisabled || [];
      for (var i = 0; i < 60; i += this.minuteStep) {
        if (minutesDisabled.indexOf(i) !== -1) continue;
        var actual = UTCDate(year, month, dayMonth, hours, i, 0);
        clsName = '';
        if (actual.valueOf() < this.startDate || actual.valueOf() > this.endDate) {
          clsName += ' disabled';
        } else if (Math.floor(minutes / this.minuteStep) == Math.floor(i / this.minuteStep)) {
          clsName += ' active';
        }
        if (this.showMeridian && dates[this.language].meridiem.length == 2) {
          meridian = hours < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1];
          if (meridian != meridianOld) {
            if (meridianOld != '') {
              html.push('</fieldset>');
            }
            html.push('<fieldset class="minute"><legend>' + meridian.toUpperCase() + '</legend>');
          }
          meridianOld = meridian;
          txt = hours % 12 ? hours % 12 : 12;
          //html.push('<span class="minute'+clsName+' minute_'+(hours<12?'am':'pm')+'">'+txt+'</span>');
          html.push('<span class="minute' + clsName + '">' + txt + ':' + (i < 10 ? '0' + i : i) + '</span>');
          if (i == 59) {
            html.push('</fieldset>');
          }
        } else {
          txt = i + ':00';
          //html.push('<span class="hour'+clsName+'">'+txt+'</span>');
          html.push('<span class="minute' + clsName + '">' + hours + ':' + (i < 10 ? '0' + i : i) + '</span>');
        }
      }
      this.picker.find('.datetimepicker-minutes td').html(html.join(''));

      var currentYear = this.date.getUTCFullYear();
      var months = this.picker.find('.datetimepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
      if (currentYear == year) {
        // getUTCMonths() returns 0 based, and we need to select the next one
        // To cater bootstrap 2 we don't need to select the next one
        var offset = months.length - 12;
        months.eq(this.date.getUTCMonth() + offset).addClass('active');
      }
      if (year < startYear || year > endYear) {
        months.addClass('disabled');
      }
      if (year == startYear) {
        months.slice(0, startMonth + 1).addClass('disabled');
      }
      if (year == endYear) {
        months.slice(endMonth).addClass('disabled');
      }

      html = '';
      year = parseInt(year / 10, 10) * 10;
      var yearCont = this.picker.find('.datetimepicker-years').find('th:eq(1)').text(year + '-' + (year + 9)).end().find('td');
      year -= 1;
      for (var i = -1; i < 11; i++) {
        html += '<span class="year' + (i == -1 || i == 10 ? ' old' : '') + (currentYear == year ? ' active' : '') + (year < startYear || year > endYear ? ' disabled' : '') + '">' + year + '</span>';
        year += 1;
      }
      yearCont.html(html);
      this.place();
    },

    updateNavArrows: function updateNavArrows() {
      var d = new Date(this.viewDate),
          year = d.getUTCFullYear(),
          month = d.getUTCMonth(),
          day = d.getUTCDate(),
          hour = d.getUTCHours();
      switch (this.viewMode) {
        case 0:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate() && hour <= this.startDate.getUTCHours()) {
            this.picker.find('.prev').css({ visibility: 'hidden' });
          } else {
            this.picker.find('.prev').css({ visibility: 'visible' });
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate() && hour >= this.endDate.getUTCHours()) {
            this.picker.find('.next').css({ visibility: 'hidden' });
          } else {
            this.picker.find('.next').css({ visibility: 'visible' });
          }
          break;
        case 1:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate()) {
            this.picker.find('.prev').css({ visibility: 'hidden' });
          } else {
            this.picker.find('.prev').css({ visibility: 'visible' });
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate()) {
            this.picker.find('.next').css({ visibility: 'hidden' });
          } else {
            this.picker.find('.next').css({ visibility: 'visible' });
          }
          break;
        case 2:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
            this.picker.find('.prev').css({ visibility: 'hidden' });
          } else {
            this.picker.find('.prev').css({ visibility: 'visible' });
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
            this.picker.find('.next').css({ visibility: 'hidden' });
          } else {
            this.picker.find('.next').css({ visibility: 'visible' });
          }
          break;
        case 3:
        case 4:
          if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
            this.picker.find('.prev').css({ visibility: 'hidden' });
          } else {
            this.picker.find('.prev').css({ visibility: 'visible' });
          }
          if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
            this.picker.find('.next').css({ visibility: 'hidden' });
          } else {
            this.picker.find('.next').css({ visibility: 'visible' });
          }
          break;
      }
    },

    mousewheel: function mousewheel(e) {

      e.preventDefault();
      e.stopPropagation();

      if (this.wheelPause) {
        return;
      }

      this.wheelPause = true;

      var originalEvent = e.originalEvent;

      var delta = originalEvent.wheelDelta;

      var mode = delta > 0 ? 1 : delta === 0 ? 0 : -1;

      if (this.wheelViewModeNavigationInverseDirection) {
        mode = -mode;
      }

      this.showMode(mode);

      setTimeout($.proxy(function () {

        this.wheelPause = false;
      }, this), this.wheelViewModeNavigationDelay);
    },

    click: function click(e) {
      e.stopPropagation();
      e.preventDefault();
      var target = $(e.target).closest('span, td, th, legend');
      if (target.is('.' + this.icontype)) {
        target = $(target).parent().closest('span, td, th, legend');
      }
      if (target.length == 1) {
        if (target.is('.disabled')) {
          this.element.trigger({
            type: 'outOfRange',
            date: this.viewDate,
            startDate: this.startDate,
            endDate: this.endDate
          });
          return;
        }
        switch (target[0].nodeName.toLowerCase()) {
          case 'th':
            switch (target[0].className) {
              case 'switch':
                this.showMode(1);
                break;
              case 'prev':
              case 'next':
                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
                switch (this.viewMode) {
                  case 0:
                    this.viewDate = this.moveHour(this.viewDate, dir);
                    break;
                  case 1:
                    this.viewDate = this.moveDate(this.viewDate, dir);
                    break;
                  case 2:
                    this.viewDate = this.moveMonth(this.viewDate, dir);
                    break;
                  case 3:
                  case 4:
                    this.viewDate = this.moveYear(this.viewDate, dir);
                    break;
                }
                this.fill();
                this.element.trigger({
                  type: target[0].className + ':' + this.convertViewModeText(this.viewMode),
                  date: this.viewDate,
                  startDate: this.startDate,
                  endDate: this.endDate
                });
                break;
              case 'today':
                var date = new Date();
                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);

                // Respect startDate and endDate.
                if (date < this.startDate) date = this.startDate;else if (date > this.endDate) date = this.endDate;

                this.viewMode = this.startViewMode;
                this.showMode(0);
                this._setDate(date);
                this.fill();
                if (this.autoclose) {
                  this.hide();
                }
                break;
            }
            break;
          case 'span':
            if (!target.is('.disabled')) {
              var year = this.viewDate.getUTCFullYear(),
                  month = this.viewDate.getUTCMonth(),
                  day = this.viewDate.getUTCDate(),
                  hours = this.viewDate.getUTCHours(),
                  minutes = this.viewDate.getUTCMinutes(),
                  seconds = this.viewDate.getUTCSeconds();

              if (target.is('.month')) {
                this.viewDate.setUTCDate(1);
                month = target.parent().find('span').index(target);
                day = this.viewDate.getUTCDate();
                this.viewDate.setUTCMonth(month);
                this.element.trigger({
                  type: 'changeMonth',
                  date: this.viewDate
                });
                if (this.viewSelect >= 3) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.year')) {
                this.viewDate.setUTCDate(1);
                year = parseInt(target.text(), 10) || 0;
                this.viewDate.setUTCFullYear(year);
                this.element.trigger({
                  type: 'changeYear',
                  date: this.viewDate
                });
                if (this.viewSelect >= 4) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.hour')) {
                hours = parseInt(target.text(), 10) || 0;
                if (target.hasClass('hour_am') || target.hasClass('hour_pm')) {
                  if (hours == 12 && target.hasClass('hour_am')) {
                    hours = 0;
                  } else if (hours != 12 && target.hasClass('hour_pm')) {
                    hours += 12;
                  }
                }
                this.viewDate.setUTCHours(hours);
                this.element.trigger({
                  type: 'changeHour',
                  date: this.viewDate
                });
                if (this.viewSelect >= 1) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              } else if (target.is('.minute')) {
                minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
                this.viewDate.setUTCMinutes(minutes);
                this.element.trigger({
                  type: 'changeMinute',
                  date: this.viewDate
                });
                if (this.viewSelect >= 0) {
                  this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
                }
              }
              if (this.viewMode != 0) {
                var oldViewMode = this.viewMode;
                this.showMode(-1);
                this.fill();
                if (oldViewMode == this.viewMode && this.autoclose) {
                  this.hide();
                }
              } else {
                this.fill();
                if (this.autoclose) {
                  this.hide();
                }
              }
            }
            break;
          case 'td':
            if (target.is('.day') && !target.is('.disabled')) {
              var day = parseInt(target.text(), 10) || 1;
              var year = this.viewDate.getUTCFullYear(),
                  month = this.viewDate.getUTCMonth(),
                  hours = this.viewDate.getUTCHours(),
                  minutes = this.viewDate.getUTCMinutes(),
                  seconds = this.viewDate.getUTCSeconds();
              if (target.is('.old')) {
                if (month === 0) {
                  month = 11;
                  year -= 1;
                } else {
                  month -= 1;
                }
              } else if (target.is('.new')) {
                if (month == 11) {
                  month = 0;
                  year += 1;
                } else {
                  month += 1;
                }
              }
              this.viewDate.setUTCFullYear(year);
              this.viewDate.setUTCMonth(month, day);
              this.element.trigger({
                type: 'changeDay',
                date: this.viewDate
              });
              if (this.viewSelect >= 2) {
                this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
              }
            }
            var oldViewMode = this.viewMode;
            this.showMode(-1);
            this.fill();
            if (oldViewMode == this.viewMode && this.autoclose) {
              this.hide();
            }
            break;
        }
      }
    },

    _setDate: function _setDate(date, which) {
      if (!which || which == 'date') this.date = date;
      if (!which || which == 'view') this.viewDate = date;
      this.fill();
      this.setValue();
      var element;
      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find('input');
      }
      if (element) {
        element.change();
        if (this.autoclose && (!which || which == 'date')) {
          //this.hide();
        }
      }
      this.element.trigger({
        type: 'changeDate',
        date: this.date
      });
      if (date == null) this.date = this.viewDate;
    },

    moveMinute: function moveMinute(date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCMinutes(new_date.getUTCMinutes() + dir * this.minuteStep);
      return new_date;
    },

    moveHour: function moveHour(date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCHours(new_date.getUTCHours() + dir);
      return new_date;
    },

    moveDate: function moveDate(date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf());
      //dir = dir > 0 ? 1 : -1;
      new_date.setUTCDate(new_date.getUTCDate() + dir);
      return new_date;
    },

    moveMonth: function moveMonth(date, dir) {
      if (!dir) return date;
      var new_date = new Date(date.valueOf()),
          day = new_date.getUTCDate(),
          month = new_date.getUTCMonth(),
          mag = Math.abs(dir),
          new_month,
          test;
      dir = dir > 0 ? 1 : -1;
      if (mag == 1) {
        test = dir == -1
        // If going back one month, make sure month is not current month
        // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
        ? function () {
          return new_date.getUTCMonth() == month;
        }
        // If going forward one month, make sure month is as expected
        // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
        : function () {
          return new_date.getUTCMonth() != new_month;
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
          return new_month != new_date.getUTCMonth();
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
      return date >= this.startDate && date <= this.endDate;
    },

    keydown: function keydown(e) {
      if (this.picker.is(':not(:visible)')) {
        if (e.keyCode == 27) // allow escape to hide and re-show picker
          this.show();
        return;
      }
      var dateChanged = false,
          dir,
          day,
          month,
          newDate,
          newViewDate;
      switch (e.keyCode) {
        case 27:
          // escape
          this.hide();
          e.preventDefault();
          break;
        case 37: // left
        case 39:
          // right
          if (!this.keyboardNavigation) break;
          dir = e.keyCode == 37 ? -1 : 1;
          viewMode = this.viewMode;
          if (e.ctrlKey) {
            viewMode += 2;
          } else if (e.shiftKey) {
            viewMode += 1;
          }
          if (viewMode == 4) {
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (viewMode == 3) {
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else if (viewMode == 2) {
            newDate = this.moveDate(this.date, dir);
            newViewDate = this.moveDate(this.viewDate, dir);
          } else if (viewMode == 1) {
            newDate = this.moveHour(this.date, dir);
            newViewDate = this.moveHour(this.viewDate, dir);
          } else if (viewMode == 0) {
            newDate = this.moveMinute(this.date, dir);
            newViewDate = this.moveMinute(this.viewDate, dir);
          }
          if (this.dateWithinRange(newDate)) {
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 38: // up
        case 40:
          // down
          if (!this.keyboardNavigation) break;
          dir = e.keyCode == 38 ? -1 : 1;
          viewMode = this.viewMode;
          if (e.ctrlKey) {
            viewMode += 2;
          } else if (e.shiftKey) {
            viewMode += 1;
          }
          if (viewMode == 4) {
            newDate = this.moveYear(this.date, dir);
            newViewDate = this.moveYear(this.viewDate, dir);
          } else if (viewMode == 3) {
            newDate = this.moveMonth(this.date, dir);
            newViewDate = this.moveMonth(this.viewDate, dir);
          } else if (viewMode == 2) {
            newDate = this.moveDate(this.date, dir * 7);
            newViewDate = this.moveDate(this.viewDate, dir * 7);
          } else if (viewMode == 1) {
            if (this.showMeridian) {
              newDate = this.moveHour(this.date, dir * 6);
              newViewDate = this.moveHour(this.viewDate, dir * 6);
            } else {
              newDate = this.moveHour(this.date, dir * 4);
              newViewDate = this.moveHour(this.viewDate, dir * 4);
            }
          } else if (viewMode == 0) {
            newDate = this.moveMinute(this.date, dir * 4);
            newViewDate = this.moveMinute(this.viewDate, dir * 4);
          }
          if (this.dateWithinRange(newDate)) {
            this.date = newDate;
            this.viewDate = newViewDate;
            this.setValue();
            this.update();
            e.preventDefault();
            dateChanged = true;
          }
          break;
        case 13:
          // enter
          if (this.viewMode != 0) {
            var oldViewMode = this.viewMode;
            this.showMode(-1);
            this.fill();
            if (oldViewMode == this.viewMode && this.autoclose) {
              this.hide();
            }
          } else {
            this.fill();
            if (this.autoclose) {
              this.hide();
            }
          }
          e.preventDefault();
          break;
        case 9:
          // tab
          this.hide();
          break;
      }
      if (dateChanged) {
        var element;
        if (this.isInput) {
          element = this.element;
        } else if (this.component) {
          element = this.element.find('input');
        }
        if (element) {
          element.change();
        }
        this.element.trigger({
          type: 'changeDate',
          date: this.date
        });
      }
    },

    showMode: function showMode(dir) {
      if (dir) {
        var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
        if (newViewMode >= this.minView && newViewMode <= this.maxView) {
          this.element.trigger({
            type: 'changeMode',
            date: this.viewDate,
            oldViewMode: this.viewMode,
            newViewMode: newViewMode
          });

          this.viewMode = newViewMode;
        }
      }
      /*
       vitalets: fixing bug of very special conditions:
       jquery 1.7.1 + webkit + show inline datetimepicker in bootstrap popover.
       Method show() does not set display css correctly and datetimepicker is not shown.
       Changed to .css('display', 'block') solve the problem.
       See https://github.com/vitalets/x-editable/issues/37
        In jquery 1.7.2+ everything works fine.
       */
      //this.picker.find('>div').hide().filter('.datetimepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
      this.picker.find('>div').hide().filter('.datetimepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
      this.updateNavArrows();
    },

    reset: function reset(e) {
      this._setDate(null, 'date');
    },

    convertViewModeText: function convertViewModeText(viewMode) {
      switch (viewMode) {
        case 4:
          return 'decade';
        case 3:
          return 'year';
        case 2:
          return 'month';
        case 1:
          return 'day';
        case 0:
          return 'hour';
      }
    }
  };

  var old = $.fn.datetimepicker;
  $.fn.datetimepicker = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();
    var internal_return;
    this.each(function () {
      var $this = $(this),
          data = $this.data('datetimepicker'),
          options = typeof option == 'object' && option;
      if (!data) {
        $this.data('datetimepicker', data = new Datetimepicker(this, $.extend({}, $.fn.datetimepicker.defaults, options)));
      }
      if (typeof option == 'string' && typeof data[option] == 'function') {
        internal_return = data[option].apply(data, args);
        if (internal_return !== undefined) {
          return false;
        }
      }
    });
    if (internal_return !== undefined) return internal_return;else return this;
  };

  $.fn.datetimepicker.defaults = {};
  $.fn.datetimepicker.Constructor = Datetimepicker;
  var dates = $.fn.datetimepicker.dates = {
    en: {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      meridiem: ['am', 'pm'],
      suffix: ['st', 'nd', 'rd', 'th'],
      today: 'Today'
    }
  };

  var DPGlobal = {
    modes: [{
      clsName: 'minutes',
      navFnc: 'Hours',
      navStep: 1
    }, {
      clsName: 'hours',
      navFnc: 'Date',
      navStep: 1
    }, {
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
    getDefaultFormat: function getDefaultFormat(type, field) {
      if (type == 'standard') {
        if (field == 'input') return 'yyyy-mm-dd hh:ii';else return 'yyyy-mm-dd hh:ii:ss';
      } else if (type == 'php') {
        if (field == 'input') return 'Y-m-d H:i';else return 'Y-m-d H:i:s';
      } else {
        throw new Error('Invalid format type.');
      }
    },
    validParts: function validParts(type) {
      if (type == 'standard') {
        return (/hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g
        );
      } else if (type == 'php') {
        return (/[dDjlNwzFmMnStyYaABgGhHis]/g
        );
      } else {
        throw new Error('Invalid format type.');
      }
    },
    nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
    parseFormat: function parseFormat(format, type) {
      // IE treats \0 as a string end in inputs (truncating the value),
      // so it's a bad format delimiter, anyway
      var separators = format.replace(this.validParts(type), '\0').split('\0'),
          parts = format.match(this.validParts(type));
      if (!separators || !separators.length || !parts || parts.length == 0) {
        throw new Error('Invalid date format.');
      }
      return { separators: separators, parts: parts };
    },
    parseDate: function parseDate(date, format, language, type) {
      if (date instanceof Date) {
        var dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
        dateUTC.setMilliseconds(0);
        return dateUTC;
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd', type);
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd hh:ii', type);
      }
      if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
        format = this.parseFormat('yyyy-mm-dd hh:ii:ss', type);
      }
      if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
        var part_re = /([-+]\d+)([dmwy])/,
            parts = date.match(/([-+]\d+)([dmwy])/g),
            part,
            dir;
        date = new Date();
        for (var i = 0; i < parts.length; i++) {
          part = part_re.exec(parts[i]);
          dir = parseInt(part[1]);
          switch (part[2]) {
            case 'd':
              date.setUTCDate(date.getUTCDate() + dir);
              break;
            case 'm':
              date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
              break;
            case 'w':
              date.setUTCDate(date.getUTCDate() + dir * 7);
              break;
            case 'y':
              date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
              break;
          }
        }
        return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0);
      }
      var parts = date && date.toString().match(this.nonpunctuation) || [],
          date = new Date(0, 0, 0, 0, 0, 0, 0),
          parsed = {},
          setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'D', 'DD', 'd', 'dd', 'H', 'HH', 'p', 'P'],
          setters_map = {
        hh: function hh(d, v) {
          return d.setUTCHours(v);
        },
        h: function h(d, v) {
          return d.setUTCHours(v);
        },
        HH: function HH(d, v) {
          return d.setUTCHours(v == 12 ? 0 : v);
        },
        H: function H(d, v) {
          return d.setUTCHours(v == 12 ? 0 : v);
        },
        ii: function ii(d, v) {
          return d.setUTCMinutes(v);
        },
        i: function i(d, v) {
          return d.setUTCMinutes(v);
        },
        ss: function ss(d, v) {
          return d.setUTCSeconds(v);
        },
        s: function s(d, v) {
          return d.setUTCSeconds(v);
        },
        yyyy: function yyyy(d, v) {
          return d.setUTCFullYear(v);
        },
        yy: function yy(d, v) {
          return d.setUTCFullYear(2000 + v);
        },
        m: function m(d, v) {
          v -= 1;
          while (v < 0) v += 12;
          v %= 12;
          d.setUTCMonth(v);
          while (d.getUTCMonth() != v) if (isNaN(d.getUTCMonth())) return d;else d.setUTCDate(d.getUTCDate() - 1);
          return d;
        },
        d: function d(_d2, v) {
          return _d2.setUTCDate(v);
        },
        p: function p(d, v) {
          return d.setUTCHours(v == 1 ? d.getUTCHours() + 12 : d.getUTCHours());
        }
      },
          val,
          filtered,
          part;
      setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
      setters_map['dd'] = setters_map['d'];
      setters_map['P'] = setters_map['p'];
      date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      if (parts.length == format.parts.length) {
        for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
          val = parseInt(parts[i], 10);
          part = format.parts[i];
          if (isNaN(val)) {
            switch (part) {
              case 'MM':
                filtered = $(dates[language].months).filter(function () {
                  var m = this.slice(0, parts[i].length),
                      p = parts[i].slice(0, m.length);
                  return m == p;
                });
                val = $.inArray(filtered[0], dates[language].months) + 1;
                break;
              case 'M':
                filtered = $(dates[language].monthsShort).filter(function () {
                  var m = this.slice(0, parts[i].length),
                      p = parts[i].slice(0, m.length);
                  return m.toLowerCase() == p.toLowerCase();
                });
                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                break;
              case 'p':
              case 'P':
                val = $.inArray(parts[i].toLowerCase(), dates[language].meridiem);
                break;
            }
          }
          parsed[part] = val;
        }
        for (var i = 0, s; i < setters_order.length; i++) {
          s = setters_order[i];
          if (s in parsed && !isNaN(parsed[s])) setters_map[s](date, parsed[s]);
        }
      }
      return date;
    },
    formatDate: function formatDate(date, format, language, type) {
      if (date == null) {
        return '';
      }
      var val;
      if (type == 'standard') {
        val = {
          // year
          yy: date.getUTCFullYear().toString().substring(2),
          yyyy: date.getUTCFullYear(),
          // month
          m: date.getUTCMonth() + 1,
          M: dates[language].monthsShort[date.getUTCMonth()],
          MM: dates[language].months[date.getUTCMonth()],
          // day
          d: date.getUTCDate(),
          D: dates[language].daysShort[date.getUTCDay()],
          DD: dates[language].days[date.getUTCDay()],
          p: dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : '',
          // hour
          h: date.getUTCHours(),
          // minute
          i: date.getUTCMinutes(),
          // second
          s: date.getUTCSeconds()
        };

        if (dates[language].meridiem.length == 2) {
          val.H = val.h % 12 == 0 ? 12 : val.h % 12;
        } else {
          val.H = val.h;
        }
        val.HH = (val.H < 10 ? '0' : '') + val.H;
        val.P = val.p.toUpperCase();
        val.hh = (val.h < 10 ? '0' : '') + val.h;
        val.ii = (val.i < 10 ? '0' : '') + val.i;
        val.ss = (val.s < 10 ? '0' : '') + val.s;
        val.dd = (val.d < 10 ? '0' : '') + val.d;
        val.mm = (val.m < 10 ? '0' : '') + val.m;
      } else if (type == 'php') {
        // php format
        val = {
          // year
          y: date.getUTCFullYear().toString().substring(2),
          Y: date.getUTCFullYear(),
          // month
          F: dates[language].months[date.getUTCMonth()],
          M: dates[language].monthsShort[date.getUTCMonth()],
          n: date.getUTCMonth() + 1,
          t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
          // day
          j: date.getUTCDate(),
          l: dates[language].days[date.getUTCDay()],
          D: dates[language].daysShort[date.getUTCDay()],
          w: date.getUTCDay(), // 0 -> 6
          N: date.getUTCDay() == 0 ? 7 : date.getUTCDay(), // 1 -> 7
          S: date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : '',
          // hour
          a: dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : '',
          g: date.getUTCHours() % 12 == 0 ? 12 : date.getUTCHours() % 12,
          G: date.getUTCHours(),
          // minute
          i: date.getUTCMinutes(),
          // second
          s: date.getUTCSeconds()
        };
        val.m = (val.n < 10 ? '0' : '') + val.n;
        val.d = (val.j < 10 ? '0' : '') + val.j;
        val.A = val.a.toString().toUpperCase();
        val.h = (val.g < 10 ? '0' : '') + val.g;
        val.H = (val.G < 10 ? '0' : '') + val.G;
        val.i = (val.i < 10 ? '0' : '') + val.i;
        val.s = (val.s < 10 ? '0' : '') + val.s;
      } else {
        throw new Error('Invalid format type.');
      }
      var date = [],
          seps = $.extend([], format.separators);
      for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
        if (seps.length) {
          date.push(seps.shift());
        }
        date.push(val[format.parts[i]]);
      }
      if (seps.length) {
        date.push(seps.shift());
      }
      return date.join('');
    },
    convertViewMode: function convertViewMode(viewMode) {
      switch (viewMode) {
        case 4:
        case 'decade':
          viewMode = 4;
          break;
        case 3:
        case 'year':
          viewMode = 3;
          break;
        case 2:
        case 'month':
          viewMode = 2;
          break;
        case 1:
        case 'day':
          viewMode = 1;
          break;
        case 0:
        case 'hour':
          viewMode = 0;
          break;
      }

      return viewMode;
    },
    headTemplate: '<thead>' + '<tr>' + '<th class="prev"><i class="{iconType} {leftArrow}"/></th>' + '<th colspan="5" class="switch"></th>' + '<th class="next"><i class="{iconType} {rightArrow}"/></th>' + '</tr>' + '</thead>',
    headTemplateV3: '<thead>' + '<tr>' + '<th class="prev"><span class="{iconType} {leftArrow}"></span> </th>' + '<th colspan="5" class="switch"></th>' + '<th class="next"><span class="{iconType} {rightArrow}"></span> </th>' + '</tr>' + '</thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
  };
  DPGlobal.template = '<div class="datetimepicker">' + '<div class="datetimepicker-minutes">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datetimepicker-hours">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datetimepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datetimepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datetimepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '</div>';
  DPGlobal.templateV3 = '<div class="datetimepicker">' + '<div class="datetimepicker-minutes">' + '<table class=" table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datetimepicker-hours">' + '<table class=" table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datetimepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplateV3 + '<tbody></tbody>' + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datetimepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datetimepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '</div>';
  $.fn.datetimepicker.DPGlobal = DPGlobal;

  /* DATETIMEPICKER NO CONFLICT
   * =================== */

  $.fn.datetimepicker.noConflict = function () {
    $.fn.datetimepicker = old;
    return this;
  };

  /* DATETIMEPICKER DATA-API
   * ================== */

  $(document).on('focus.datetimepicker.data-api click.datetimepicker.data-api', '[data-provide="datetimepicker"]', function (e) {
    var $this = $(this);
    if ($this.data('datetimepicker')) return;
    e.preventDefault();
    // component click requires us to explicitly show it
    $this.datetimepicker('show');
  });
  $(function () {
    $('[data-provide="datetimepicker-inline"]').datetimepicker();
  });
})(window.jQuery);

/**
 * Brazilian translation for bootstrap-datetimepicker
 * Cauan Cabral <cauan@radig.com.br>
 */
;(function ($) {
  $.fn.datetimepicker.dates['pt-BR'] = {
    format: 'yyyy-mm-dd HH:ii',
    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"],
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: "Hoje",
    suffix: [],
    meridiem: []
  };
})(jQuery);

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

$(document).ready(function () {
  $(".agenda").datetimepicker({
    language: 'pt-BR'
  });
});
//# sourceMappingURL=all.js.map
