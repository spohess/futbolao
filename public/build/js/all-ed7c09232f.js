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
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (R, W, u) {
  'use strict';function S(b) {
    return function () {
      var a = arguments[0],
          c;c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.20/" + (b ? b + "/" : "") + a;for (a = 1; a < arguments.length; a++) {
        c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";var d = encodeURIComponent,
            e;e = arguments[a];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;c += d(e);
      }return Error(c);
    };
  }function Ta(b) {
    if (null == b || Ua(b)) return !1;var a = "length" in Object(b) && b.length;
    return b.nodeType === qa && a ? !0 : x(b) || H(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b;
  }function r(b, a, c) {
    var d, e;if (b) if (z(b)) for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);else if (H(b) || Ta(b)) {
      var f = "object" !== typeof b;d = 0;for (e = b.length; d < e; d++) (f || d in b) && a.call(c, b[d], d, b);
    } else if (b.forEach && b.forEach !== r) b.forEach(a, c, b);else for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d, b);return b;
  }function Ed(b, a, c) {
    for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);return d;
  }function lc(b) {
    return function (a, c) {
      b(c, a);
    };
  }function Fd() {
    return ++rb;
  }function mc(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey;
  }function w(b) {
    for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
      var e = arguments[c];if (e) for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
        var l = f[g];b[l] = e[l];
      }
    }mc(b, a);return b;
  }function aa(b) {
    return parseInt(b, 10);
  }function Ob(b, a) {
    return w(Object.create(b), a);
  }function A() {}function ra(b) {
    return b;
  }function ea(b) {
    return function () {
      return b;
    };
  }
  function D(b) {
    return "undefined" === typeof b;
  }function y(b) {
    return "undefined" !== typeof b;
  }function L(b) {
    return null !== b && "object" === typeof b;
  }function x(b) {
    return "string" === typeof b;
  }function Y(b) {
    return "number" === typeof b;
  }function ha(b) {
    return "[object Date]" === Ca.call(b);
  }function z(b) {
    return "function" === typeof b;
  }function Va(b) {
    return "[object RegExp]" === Ca.call(b);
  }function Ua(b) {
    return b && b.window === b;
  }function Wa(b) {
    return b && b.$evalAsync && b.$watch;
  }function Xa(b) {
    return "boolean" === typeof b;
  }function nc(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
  }function Gd(b) {
    var a = {};b = b.split(",");var c;for (c = 0; c < b.length; c++) a[b[c]] = !0;return a;
  }function wa(b) {
    return K(b.nodeName || b[0] && b[0].nodeName);
  }function Ya(b, a) {
    var c = b.indexOf(a);0 <= c && b.splice(c, 1);return a;
  }function Da(b, a, c, d) {
    if (Ua(b) || Wa(b)) throw Ja("cpws");if (a) {
      if (b === a) throw Ja("cpi");c = c || [];d = d || [];if (L(b)) {
        var e = c.indexOf(b);if (-1 !== e) return d[e];c.push(b);d.push(a);
      }if (H(b)) for (var f = a.length = 0; f < b.length; f++) e = Da(b[f], null, c, d), L(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);else {
        var g = a.$$hashKey;H(a) ? a.length = 0 : r(a, function (b, c) {
          delete a[c];
        });for (f in b) b.hasOwnProperty(f) && (e = Da(b[f], null, c, d), L(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);mc(a, g);
      }
    } else if (a = b) H(b) ? a = Da(b, [], c, d) : ha(b) ? a = new Date(b.getTime()) : Va(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : L(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Da(b, e, c, d));return a;
  }function sa(b, a) {
    if (H(b)) {
      a = a || [];for (var c = 0, d = b.length; c < d; c++) a[c] = b[c];
    } else if (L(b)) for (c in (a = a || {}, b)) if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) a[c] = b[c];return a || b;
  }function ia(_x, _x2) {
    var _again = true;

    _function: while (_again) {
      var b = _x,
          a = _x2;
      _again = false;
      if (b === a) return !0;if (null === b || null === a) return !1;if (b !== b && a !== a) return !0;var c = typeof b,
          d;if (c == typeof a && "object" == c) if (H(b)) {
        if (!H(a)) return !1;if ((c = b.length) == a.length) {
          for (d = 0; d < c; d++) if (!ia(b[d], a[d])) return !1;return !0;
        }
      } else {
        if (ha(b)) {
          if (ha(a)) {
            _x = b.getTime();
            _x2 = a.getTime();
            _again = true;
            c = d = undefined;
            continue _function;
          } else {
            return !1;
          }
        }if (Va(b)) return Va(a) ? b.toString() == a.toString() : !1;if (Wa(b) || Wa(a) || Ua(b) || Ua(a) || H(a) || ha(a) || Va(a)) return !1;c = {};for (d in b) if ("$" !== d.charAt(0) && !z(b[d])) {
          if (!ia(b[d], a[d])) return !1;c[d] = !0;
        }for (d in a) if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== u && !z(a[d])) return !1;return !0;
      }return !1;
    }
  }function Za(b, a, c) {
    return b.concat($a.call(a, c));
  }function oc(b, a) {
    var c = 2 < arguments.length ? $a.call(arguments, 2) : [];return !z(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, Za(c, arguments, 0)) : a.apply(b, c);
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b);
    };
  }function Hd(b, a) {
    var c = a;"string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = u : Ua(a) ? c = "$WINDOW" : a && W === a ? c = "$DOCUMENT" : Wa(a) && (c = "$SCOPE");return c;
  }function ab(b, a) {
    if ("undefined" === typeof b) return u;Y(a) || (a = a ? 2 : null);return JSON.stringify(b, Hd, a);
  }function pc(b) {
    return x(b) ? JSON.parse(b) : b;
  }function xa(b) {
    b = B(b).clone();try {
      b.empty();
    } catch (a) {}var c = B("<div>").append(b).html();try {
      return b[0].nodeType === bb ? K(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return "<" + K(b);
      });
    } catch (d) {
      return K(c);
    }
  }function qc(b) {
    try {
      return decodeURIComponent(b);
    } catch (a) {}
  }
  function rc(b) {
    var a = {},
        c,
        d;r((b || "").split("&"), function (b) {
      b && (c = b.replace(/\+/g, "%20").split("="), d = qc(c[0]), y(d) && (b = y(c[1]) ? qc(c[1]) : !0, sc.call(a, d) ? H(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b));
    });return a;
  }function Pb(b) {
    var a = [];r(b, function (b, d) {
      H(b) ? r(b, function (b) {
        a.push(Ea(d, !0) + (!0 === b ? "" : "=" + Ea(b, !0)));
      }) : a.push(Ea(d, !0) + (!0 === b ? "" : "=" + Ea(b, !0)));
    });return a.length ? a.join("&") : "";
  }function sb(b) {
    return Ea(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }function Ea(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+");
  }function Id(b, a) {
    var c,
        d,
        e = tb.length;b = B(b);for (d = 0; d < e; ++d) if ((c = tb[d] + a, x(c = b.attr(c)))) return c;return null;
  }function Jd(b, a) {
    var c,
        d,
        e = {};r(tb, function (a) {
      a += "app";!c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a));
    });r(tb, function (a) {
      a += "app";var e;!c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a));
    });c && (e.strictDi = null !== Id(c, "strict-di"), a(c, d ? [d] : [], e));
  }function tc(b, a, c) {
    L(c) || (c = {});c = w({ strictDi: !1 }, c);var d = function d() {
      b = B(b);if (b.injector()) {
        var d = b[0] === W ? "document" : xa(b);throw Ja("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }a = a || [];a.unshift(["$provide", function (a) {
        a.value("$rootElement", b);
      }]);c.debugInfoEnabled && a.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0);
      }]);a.unshift("ng");d = cb(a, c.strictDi);d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d);c(b)(a);
        });
      }]);return d;
    },
        e = /^NG_ENABLE_DEBUG_INFO!/,
        f = /^NG_DEFER_BOOTSTRAP!/;R && e.test(R.name) && (c.debugInfoEnabled = !0, R.name = R.name.replace(e, ""));if (R && !f.test(R.name)) return d();R.name = R.name.replace(f, "");ca.resumeBootstrap = function (b) {
      r(b, function (b) {
        a.push(b);
      });return d();
    };z(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap();
  }function Kd() {
    R.name = "NG_ENABLE_DEBUG_INFO!" + R.name;R.location.reload();
  }function Ld(b) {
    b = ca.element(b).injector();if (!b) throw Ja("test");return b.get("$$testability");
  }
  function uc(b, a) {
    a = a || "_";return b.replace(Md, function (b, d) {
      return (d ? a : "") + b.toLowerCase();
    });
  }function Nd() {
    var b;vc || ((ta = R.jQuery) && ta.fn.on ? (B = ta, w(ta.fn, { scope: Ka.scope, isolateScope: Ka.isolateScope, controller: Ka.controller, injector: Ka.injector, inheritedData: Ka.inheritedData }), b = ta.cleanData, ta.cleanData = function (a) {
      var c;if (Qb) Qb = !1;else for (var d = 0, e; null != (e = a[d]); d++) (c = ta._data(e, "events")) && c.$destroy && ta(e).triggerHandler("$destroy");b(a);
    }) : B = T, ca.element = B, vc = !0);
  }function Rb(b, a, c) {
    if (!b) throw Ja("areq", a || "?", c || "required");return b;
  }function La(b, a, c) {
    c && H(b) && (b = b[b.length - 1]);Rb(z(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));return b;
  }function Ma(b, a) {
    if ("hasOwnProperty" === b) throw Ja("badname", a);
  }function wc(b, a, c) {
    if (!a) return b;a = a.split(".");for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);return !c && z(b) ? oc(e, b) : b;
  }function ub(b) {
    var a = b[0];b = b[b.length - 1];var c = [a];do {
      a = a.nextSibling;if (!a) break;c.push(a);
    } while (a !== b);return B(c);
  }function ja() {
    return Object.create(null);
  }
  function Od(b) {
    function a(a, b, c) {
      return a[b] || (a[b] = c());
    }var c = S("$injector"),
        d = S("ng");b = a(b, "angular", Object);b.$$minErr = b.$$minErr || S;return a(b, "module", function () {
      var b = {};return function (f, g, h) {
        if ("hasOwnProperty" === f) throw d("badname", "module");g && b.hasOwnProperty(f) && (b[f] = null);return a(b, f, function () {
          function a(c, d, e, f) {
            f || (f = b);return function () {
              f[e || "push"]([c, d, arguments]);return t;
            };
          }if (!g) throw c("nomod", f);var b = [],
              d = [],
              e = [],
              q = a("$injector", "invoke", "push", d),
              t = { _invokeQueue: b, _configBlocks: d,
            _runBlocks: e, requires: g, name: f, provider: a("$provide", "provider"), factory: a("$provide", "factory"), service: a("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), animation: a("$animateProvider", "register"), filter: a("$filterProvider", "register"), controller: a("$controllerProvider", "register"), directive: a("$compileProvider", "directive"), config: q, run: function run(a) {
              e.push(a);return this;
            } };h && q(h);return t;
        });
      };
    });
  }function Pd(b) {
    w(b, { bootstrap: tc, copy: Da, extend: w, equals: ia,
      element: B, forEach: r, injector: cb, noop: A, bind: oc, toJson: ab, fromJson: pc, identity: ra, isUndefined: D, isDefined: y, isString: x, isFunction: z, isObject: L, isNumber: Y, isElement: nc, isArray: H, version: Qd, isDate: ha, lowercase: K, uppercase: vb, callbacks: { counter: 0 }, getTestability: Ld, $$minErr: S, $$csp: db, reloadWithDebugInfo: Kd });eb = Od(R);try {
      eb("ngLocale");
    } catch (a) {
      eb("ngLocale", []).provider("$locale", Rd);
    }eb("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({ $$sanitizeUri: Sd });a.provider("$compile", xc).directive({ a: Td,
        input: yc, textarea: yc, form: Ud, script: Vd, select: Wd, style: Xd, option: Yd, ngBind: Zd, ngBindHtml: $d, ngBindTemplate: ae, ngClass: be, ngClassEven: ce, ngClassOdd: de, ngCloak: ee, ngController: fe, ngForm: ge, ngHide: he, ngIf: ie, ngInclude: je, ngInit: ke, ngNonBindable: le, ngPluralize: me, ngRepeat: ne, ngShow: oe, ngStyle: pe, ngSwitch: qe, ngSwitchWhen: re, ngSwitchDefault: se, ngOptions: te, ngTransclude: ue, ngModel: ve, ngList: we, ngChange: xe, pattern: zc, ngPattern: zc, required: Ac, ngRequired: Ac, minlength: Bc, ngMinlength: Bc, maxlength: Cc, ngMaxlength: Cc,
        ngValue: ye, ngModelOptions: ze }).directive({ ngInclude: Ae }).directive(wb).directive(Dc);a.provider({ $anchorScroll: Be, $animate: Ce, $browser: De, $cacheFactory: Ee, $controller: Fe, $document: Ge, $exceptionHandler: He, $filter: Ec, $interpolate: Ie, $interval: Je, $http: Ke, $httpBackend: Le, $location: Me, $log: Ne, $parse: Oe, $rootScope: Pe, $q: Qe, $$q: Re, $sce: Se, $sceDelegate: Te, $sniffer: Ue, $templateCache: Ve, $templateRequest: We, $$testability: Xe, $timeout: Ye, $window: Ze, $$rAF: $e, $$asyncCallback: af, $$jqLite: bf });
    }]);
  }function fb(b) {
    return b.replace(cf, function (a, b, d, e) {
      return e ? d.toUpperCase() : d;
    }).replace(df, "Moz$1");
  }function Fc(b) {
    b = b.nodeType;return b === qa || !b || 9 === b;
  }function Gc(b, a) {
    var c,
        d,
        e = a.createDocumentFragment(),
        f = [];if (Sb.test(b)) {
      c = c || e.appendChild(a.createElement("div"));d = (ef.exec(b) || ["", ""])[1].toLowerCase();d = ka[d] || ka._default;c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2];for (d = d[0]; d--;) c = c.lastChild;f = Za(f, c.childNodes);c = e.firstChild;c.textContent = "";
    } else f.push(a.createTextNode(b));e.textContent = "";e.innerHTML = "";r(f, function (a) {
      e.appendChild(a);
    });
    return e;
  }function T(b) {
    if (b instanceof T) return b;var a;x(b) && (b = N(b), a = !0);if (!(this instanceof T)) {
      if (a && "<" != b.charAt(0)) throw Tb("nosel");return new T(b);
    }if (a) {
      a = W;var c;b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Gc(b, a)) ? c.childNodes : [];
    }Hc(this, b);
  }function Ub(b) {
    return b.cloneNode(!0);
  }function xb(b, a) {
    a || yb(b);if (b.querySelectorAll) for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++) yb(c[d]);
  }function Ic(b, a, c, d) {
    if (y(d)) throw Tb("offargs");var e = (d = zb(b)) && d.events,
        f = d && d.handle;if (f) if (a) r(a.split(" "), function (a) {
      if (y(c)) {
        var d = e[a];Ya(d || [], c);if (d && 0 < d.length) return;
      }b.removeEventListener(a, f, !1);delete e[a];
    });else for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a];
  }function yb(b, a) {
    var c = b.ng339,
        d = c && Ab[c];d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Ic(b)), delete Ab[c], b.ng339 = u));
  }function zb(b, a) {
    var c = b.ng339,
        c = c && Ab[c];a && !c && (b.ng339 = c = ++hf, c = Ab[c] = { events: {}, data: {}, handle: u });return c;
  }function Vb(b, a, c) {
    if (Fc(b)) {
      var d = y(c),
          e = !d && a && !L(a),
          f = !a;b = (b = zb(b, !e)) && b.data;if (d) b[a] = c;else {
        if (f) return b;if (e) return b && b[a];w(b, a);
      }
    }
  }function Bb(b, a) {
    return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1;
  }function Cb(b, a) {
    a && b.setAttribute && r(a.split(" "), function (a) {
      b.setAttribute("class", N((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + N(a) + " ", " ")));
    });
  }function Db(b, a) {
    if (a && b.setAttribute) {
      var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      r(a.split(" "), function (a) {
        a = N(a);-1 === c.indexOf(" " + a + " ") && (c += a + " ");
      });b.setAttribute("class", N(c));
    }
  }function Hc(b, a) {
    if (a) if (a.nodeType) b[b.length++] = a;else {
      var c = a.length;if ("number" === typeof c && a.window !== a) {
        if (c) for (var d = 0; d < c; d++) b[b.length++] = a[d];
      } else b[b.length++] = a;
    }
  }function Jc(b, a) {
    return Eb(b, "$" + (a || "ngController") + "Controller");
  }function Eb(b, a, c) {
    9 == b.nodeType && (b = b.documentElement);for (a = H(a) ? a : [a]; b;) {
      for (var d = 0, e = a.length; d < e; d++) if ((c = B.data(b, a[d])) !== u) return c;b = b.parentNode || 11 === b.nodeType && b.host;
    }
  }function Kc(b) {
    for (xb(b, !0); b.firstChild;) b.removeChild(b.firstChild);
  }function Lc(b, a) {
    a || xb(b);var c = b.parentNode;c && c.removeChild(b);
  }function jf(b, a) {
    a = a || R;if ("complete" === a.document.readyState) a.setTimeout(b);else B(a).on("load", b);
  }function Mc(b, a) {
    var c = Fb[a.toLowerCase()];return c && Nc[wa(b)] && c;
  }function kf(b, a) {
    var c = b.nodeName;return ("INPUT" === c || "TEXTAREA" === c) && Oc[a];
  }function lf(b, a) {
    var c = function c(_c, e) {
      _c.isDefaultPrevented = function () {
        return _c.defaultPrevented;
      };var f = a[e || _c.type],
          g = f ? f.length : 0;if (g) {
        if (D(_c.immediatePropagationStopped)) {
          var h = _c.stopImmediatePropagation;_c.stopImmediatePropagation = function () {
            _c.immediatePropagationStopped = !0;_c.stopPropagation && _c.stopPropagation();h && h.call(_c);
          };
        }_c.isImmediatePropagationStopped = function () {
          return !0 === _c.immediatePropagationStopped;
        };1 < g && (f = sa(f));for (var l = 0; l < g; l++) _c.isImmediatePropagationStopped() || f[l].call(b, _c);
      }
    };c.elem = b;return c;
  }function bf() {
    this.$get = function () {
      return w(T, { hasClass: function hasClass(b, a) {
          b.attr && (b = b[0]);
          return Bb(b, a);
        }, addClass: function addClass(b, a) {
          b.attr && (b = b[0]);return Db(b, a);
        }, removeClass: function removeClass(b, a) {
          b.attr && (b = b[0]);return Cb(b, a);
        } });
    };
  }function Na(b, a) {
    var c = b && b.$$hashKey;if (c) return "function" === typeof c && (c = b.$$hashKey()), c;c = typeof b;return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b;
  }function gb(b, a) {
    if (a) {
      var c = 0;this.nextUid = function () {
        return ++c;
      };
    }r(b, this.put, this);
  }function mf(b) {
    return (b = b.toString().replace(Pc, "").match(Qc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }function cb(b, a) {
    function c(a) {
      return function (b, c) {
        if (L(b)) r(b, lc(a));else return a(b, c);
      };
    }function d(a, b) {
      Ma(a, "service");if (z(b) || H(b)) b = q.instantiate(b);if (!b.$get) throw Fa("pget", a);return p[a + "Provider"] = b;
    }function e(a, b) {
      return function () {
        var c = s.invoke(b, this);if (D(c)) throw Fa("undef", a);return c;
      };
    }function f(a, b, c) {
      return d(a, { $get: !1 !== c ? e(a, b) : b });
    }function g(a) {
      var b = [],
          c;r(a, function (a) {
        function d(a) {
          var b, c;b = 0;for (c = a.length; b < c; b++) {
            var e = a[b],
                f = q.get(e[0]);f[e[1]].apply(f, e[2]);
          }
        }if (!n.get(a)) {
          n.put(a, !0);try {
            x(a) ? (c = eb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : z(a) ? b.push(q.invoke(a)) : H(a) ? b.push(q.invoke(a)) : La(a, "module");
          } catch (e) {
            throw (H(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Fa("modulerr", a, e.stack || e.message || e));
          }
        }
      });return b;
    }function h(b, c) {
      function d(a, e) {
        if (b.hasOwnProperty(a)) {
          if (b[a] === l) throw Fa("cdep", a + " <- " + k.join(" <- "));return b[a];
        }try {
          return k.unshift(a), b[a] = l, b[a] = c(a, e);
        } catch (f) {
          throw (b[a] === l && delete b[a], f);
        } finally {
          k.shift();
        }
      }function e(b, c, f, g) {
        "string" === typeof f && (g = f, f = null);var k = [],
            l = cb.$$annotate(b, a, g),
            h,
            q,
            p;q = 0;for (h = l.length; q < h; q++) {
          p = l[q];if ("string" !== typeof p) throw Fa("itkn", p);k.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g));
        }H(b) && (b = b[h]);return b.apply(c, k);
      }return { invoke: e, instantiate: function instantiate(a, b, c) {
          var d = Object.create((H(a) ? a[a.length - 1] : a).prototype || null);a = e(a, d, b, c);return L(a) || z(a) ? a : d;
        }, get: d, annotate: cb.$$annotate, has: function has(a) {
          return p.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a);
        } };
    }a = !0 === a;var l = {},
        k = [],
        n = new gb([], !0),
        p = { $provide: { provider: c(d), factory: c(f), service: c(function (a, b) {
          return f(a, ["$injector", function (a) {
            return a.instantiate(b);
          }]);
        }), value: c(function (a, b) {
          return f(a, ea(b), !1);
        }), constant: c(function (a, b) {
          Ma(a, "constant");p[a] = b;t[a] = b;
        }), decorator: function decorator(a, b) {
          var c = q.get(a + "Provider"),
              d = c.$get;c.$get = function () {
            var a = s.invoke(d, c);return s.invoke(b, null, { $delegate: a });
          };
        } } },
        q = p.$injector = h(p, function (a, b) {
      ca.isString(b) && k.push(b);
      throw Fa("unpr", k.join(" <- "));
    }),
        t = {},
        s = t.$injector = h(t, function (a, b) {
      var c = q.get(a + "Provider", b);return s.invoke(c.$get, c, u, a);
    });r(g(b), function (a) {
      s.invoke(a || A);
    });return s;
  }function Be() {
    var b = !0;this.disableAutoScrolling = function () {
      b = !1;
    };this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
      function e(a) {
        var b = null;Array.prototype.some.call(a, function (a) {
          if ("a" === wa(a)) return b = a, !0;
        });return b;
      }function f(b) {
        if (b) {
          b.scrollIntoView();var c;c = g.yOffset;z(c) ? c = c() : nc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Y(c) || (c = 0);c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c));
        } else a.scrollTo(0, 0);
      }function g() {
        var a = c.hash(),
            b;a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }var h = a.document;b && d.$watch(function () {
        return c.hash();
      }, function (a, b) {
        a === b && "" === a || jf(function () {
          d.$evalAsync(g);
        });
      });return g;
    }];
  }function af() {
    this.$get = ["$$rAF", "$timeout", function (b, a) {
      return b.supported ? function (a) {
        return b(a);
      } : function (b) {
        return a(b, 0, !1);
      };
    }];
  }function nf(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null, $a.call(arguments, 1));
      } finally {
        if ((m--, 0 === m)) for (; C.length;) try {
          C.pop()();
        } catch (b) {
          c.error(b);
        }
      }
    }function f(a, b) {
      (function da() {
        r($, function (a) {
          a();
        });I = b(da, a);
      })();
    }function g() {
      h();l();
    }function h() {
      a: {
        try {
          M = t.state;break a;
        } catch (a) {}M = void 0;
      }M = D(M) ? null : M;ia(M, P) && (M = P);P = M;
    }function l() {
      if (G !== n.url() || E !== M) G = n.url(), E = M, r(X, function (a) {
        a(n.url(), M);
      });
    }function k(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }
    var n = this,
        p = a[0],
        q = b.location,
        t = b.history,
        s = b.setTimeout,
        F = b.clearTimeout,
        v = {};n.isMock = !1;var m = 0,
        C = [];n.$$completeOutstandingRequest = e;n.$$incOutstandingRequestCount = function () {
      m++;
    };n.notifyWhenNoOutstandingRequests = function (a) {
      r($, function (a) {
        a();
      });0 === m ? a() : C.push(a);
    };var $ = [],
        I;n.addPollFn = function (a) {
      D(I) && f(100, s);$.push(a);return a;
    };var M,
        E,
        G = q.href,
        O = a.find("base"),
        Q = null;h();E = M;n.url = function (a, c, e) {
      D(e) && (e = null);q !== b.location && (q = b.location);t !== b.history && (t = b.history);if (a) {
        var f = E === e;if (G === a && (!d.history || f)) return n;var g = G && Ga(G) === Ga(a);G = a;E = e;if (!d.history || g && f) {
          if (!g || Q) Q = a;c ? q.replace(a) : g ? (c = q, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e), c.hash = a) : q.href = a;
        } else t[c ? "replaceState" : "pushState"](e, "", a), h(), E = M;return n;
      }return Q || q.href.replace(/%27/g, "'");
    };n.state = function () {
      return M;
    };var X = [],
        ba = !1,
        P = null;n.onUrlChange = function (a) {
      if (!ba) {
        if (d.history) B(b).on("popstate", g);B(b).on("hashchange", g);ba = !0;
      }X.push(a);return a;
    };n.$$checkUrlChange = l;n.baseHref = function () {
      var a = O.attr("href");return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
    };var fa = {},
        y = "",
        la = n.baseHref();n.cookies = function (a, b) {
      var d, e, f, g;if (a) b === u ? p.cookie = encodeURIComponent(a) + "=;path=" + la + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : x(b) && (d = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + la).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));else {
        if (p.cookie !== y) for (y = p.cookie, d = y.split("; "), fa = {}, f = 0; f < d.length; f++) e = d[f], g = e.indexOf("="), 0 < g && (a = k(e.substring(0, g)), fa[a] === u && (fa[a] = k(e.substring(g + 1))));return fa;
      }
    };n.defer = function (a, b) {
      var c;m++;c = s(function () {
        delete v[c];e(a);
      }, b || 0);v[c] = !0;return c;
    };n.defer.cancel = function (a) {
      return v[a] ? (delete v[a], F(a), e(A), !0) : !1;
    };
  }function De() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
      return new nf(b, d, a, c);
    }];
  }function Ee() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null);
        }function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }if (b in a) throw S("$cacheFactory")("iid", b);var g = 0,
            h = w({}, d, { id: b }),
            l = {},
            k = d && d.capacity || Number.MAX_VALUE,
            n = {},
            p = null,
            q = null;return a[b] = { put: function put(a, b) {
            if (k < Number.MAX_VALUE) {
              var c = n[a] || (n[a] = { key: a });e(c);
            }if (!D(b)) return a in l || g++, l[a] = b, g > k && this.remove(q.key), b;
          }, get: function get(a) {
            if (k < Number.MAX_VALUE) {
              var b = n[a];if (!b) return;e(b);
            }return l[a];
          }, remove: function remove(a) {
            if (k < Number.MAX_VALUE) {
              var b = n[a];if (!b) return;b == p && (p = b.p);b == q && (q = b.n);f(b.n, b.p);delete n[a];
            }delete l[a];
            g--;
          }, removeAll: function removeAll() {
            l = {};g = 0;n = {};p = q = null;
          }, destroy: function destroy() {
            n = h = l = null;delete a[b];
          }, info: function info() {
            return w({}, h, { size: g });
          } };
      }var a = {};b.info = function () {
        var b = {};r(a, function (a, e) {
          b[e] = a.info();
        });return b;
      };b.get = function (b) {
        return a[b];
      };return b;
    };
  }function Ve() {
    this.$get = ["$cacheFactory", function (b) {
      return b("templates");
    }];
  }function xc(b, a) {
    function c(a, b) {
      var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
          d = {};r(a, function (a, e) {
        var f = a.match(c);if (!f) throw ma("iscp", b, e, a);d[e] = { mode: f[1][0], collection: "*" === f[2], optional: "?" === f[3], attrName: f[4] || e };
      });return d;
    }var d = {},
        e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        g = Gd("ngSrc,ngSrcset,src,srcset"),
        h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        l = /^(on[a-z]+|formaction)$/;this.directive = function p(a, e) {
      Ma(a, "directive");x(a) ? (Rb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function (b, e) {
        var f = [];r(d[a], function (d, g) {
          try {
            var h = b.invoke(d);z(h) ? h = { compile: ea(h) } : !h.compile && h.link && (h.compile = ea(h.link));h.priority = h.priority || 0;h.index = g;h.name = h.name || a;h.require = h.require || h.controller && h.name;h.restrict = h.restrict || "EA";L(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));f.push(h);
          } catch (l) {
            e(l);
          }
        });return f;
      }])), d[a].push(e)) : r(a, lc(p));return this;
    };this.aHrefSanitizationWhitelist = function (b) {
      return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
    };this.imgSrcSanitizationWhitelist = function (b) {
      return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
    };
    var k = !0;this.debugInfoEnabled = function (a) {
      return y(a) ? (k = a, this) : k;
    };this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, s, F, v, m, C, $, I, M) {
      function E(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }function G(a, b, c, d, e) {
        a instanceof B || (a = B(a));r(a, function (b, c) {
          b.nodeType == bb && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0]);
        });var f = O(a, b, a, c, d, e);G.$$addScopeClass(a);
        var g = null;return function (b, c, d) {
          Rb(b, "scope");d = d || {};var e = d.parentBoundTranscludeFn,
              h = d.transcludeControllers;d = d.futureParentElement;e && e.$$boundTransclude && (e = e.$$boundTransclude);g || (g = (d = d && d[0]) ? "foreignobject" !== wa(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");d = "html" !== g ? B(Xb(g, B("<div>").append(a).html())) : c ? Ka.clone.call(a) : a;if (h) for (var l in h) d.data("$" + l + "Controller", h[l].instance);G.$$addScopeInfo(d, b);c && c(d, b);f && f(b, d, d, e);return d;
        };
      }function O(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, l, k, q, p, s, t;if (m) for (t = Array(c.length), q = 0; q < h.length; q += 3) f = h[q], t[f] = c[f];else t = c;q = 0;for (p = h.length; q < p;) l = t[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), G.$$addScopeInfo(B(l), k)) : k = a, s = c.transcludeOnThisElement ? Q(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? Q(a, b) : null, c(f, k, l, d, s)) : f && f(a, l.childNodes, u, e);
        }for (var h = [], l, k, q, p, m, s = 0; s < a.length; s++) {
          l = new Yb();k = X(a[s], [], l, 0 === s ? d : u, e);(f = k.length ? fa(k, a[s], l, b, c, null, [], [], f) : null) && f.scope && G.$$addScopeClass(l.$$element);l = f && f.terminal || !(q = a[s].childNodes) || !q.length ? null : O(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || l) h.push(s, f, l), p = !0, m = m || f;f = null;
        }return p ? g : null;
      }function Q(a, b, c, d) {
        return function (d, e, f, g, h) {
          d || (d = a.$new(!1, h), d.$$transcluded = !0);return b(d, e, { parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g });
        };
      }function X(a, b, c, d, g) {
        var h = c.$attr,
            l;switch (a.nodeType) {case qa:
            la(b, ya(wa(a)), "E", d, g);for (var k, q, p, m = a.attributes, s = 0, t = m && m.length; s < t; s++) {
              var M = !1,
                  I = !1;k = m[s];l = k.name;q = N(k.value);k = ya(l);if (p = U.test(k)) l = l.replace(Rc, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              });var F = k.replace(/(Start|End)$/, "");D(F) && k === F + "Start" && (M = l, I = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));k = ya(l.toLowerCase());h[k] = l;if (p || !c.hasOwnProperty(k)) c[k] = q, Mc(a, k) && (c[k] = !0);Pa(a, b, q, k, p);la(b, k, "A", d, g, M, I);
            }a = a.className;L(a) && (a = a.animVal);if (x(a) && "" !== a) for (; l = f.exec(a);) k = ya(l[2]), la(b, k, "C", d, g) && (c[k] = N(l[3])), a = a.substr(l.index + l[0].length);break;case bb:
            za(b, a.nodeValue);break;case 8:
            try {
              if (l = e.exec(a.nodeValue)) k = ya(l[1]), la(b, k, "M", d, g) && (c[k] = N(l[2]));
            } catch (v) {}}b.sort(da);return b;
      }function ba(a, b, c) {
        var d = [],
            e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ma("uterdir", b, c);a.nodeType == qa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);return B(d);
      }function P(a, b, c) {
        return function (d, e, f, g, h) {
          e = ba(e[0], b, c);return a(d, e, f, g, h);
        };
      }function fa(a, d, e, f, g, l, k, p, m) {
        function s(a, b, c, d) {
          if (a) {
            c && (a = P(a, c, d));a.require = J.require;a.directiveName = da;if (Q === J || J.$$isolateScope) a = Y(a, { isolateScope: !0 });k.push(a);
          }if (b) {
            c && (b = P(b, c, d));b.require = J.require;b.directiveName = da;if (Q === J || J.$$isolateScope) b = Y(b, { isolateScope: !0 });p.push(b);
          }
        }function M(a, b, c, d) {
          var e,
              f = "data",
              g = !1,
              l = c,
              k;if (x(b)) {
            k = b.match(h);b = b.substring(k[0].length);k[3] && (k[1] ? k[3] = null : k[1] = k[3]);"^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData", l = c.parent());"?" === k[2] && (g = !0);e = null;d && "data" === f && (e = d[b]) && (e = e.instance);e = e || l[f]("$" + b + "Controller");if (!e && !g) throw ma("ctreq", b, a);return e || null;
          }H(b) && (e = [], r(b, function (b) {
            e.push(M(a, b, c, d));
          }));return e;
        }function I(a, c, f, g, l) {
          function h(a, b, c) {
            var d;Wa(a) || (c = b, b = a, a = u);A && (d = C);c || (c = A ? X.parent() : X);return l(a, b, d, c, Wb);
          }var m, s, t, E, C, ib, X, P;d === f ? (P = e, X = e.$$element) : (X = B(f), P = new Yb(X, e));Q && (E = c.$new(!0));l && (ib = h, ib.$$boundTransclude = l);O && ($ = {}, C = {}, r(O, function (a) {
            var b = { $scope: a === Q || a.$$isolateScope ? E : c, $element: X, $attrs: P, $transclude: ib };t = a.controller;"@" == t && (t = P[a.name]);b = v(t, b, !0, a.controllerAs);C[a.name] = b;A || X.data("$" + a.name + "Controller", b.instance);$[a.name] = b;
          }));if (Q) {
            G.$$addScopeInfo(X, E, !0, !(na && (na === Q || na === Q.$$originalDirective)));G.$$addScopeClass(X, !0);g = $ && $[Q.name];var ba = E;g && g.identifier && !0 === Q.bindToController && (ba = g.instance);r(E.$$isolateBindings = Q.$$isolateBindings, function (a, d) {
              var e = a.attrName,
                  f = a.optional,
                  g,
                  l,
                  h,
                  k;switch (a.mode) {case "@":
                  P.$observe(e, function (a) {
                    ba[d] = a;
                  });P.$$observers[e].$$scope = c;P[e] && (ba[d] = b(P[e])(c));break;case "=":
                  if (f && !P[e]) break;l = F(P[e]);k = l.literal ? ia : function (a, b) {
                    return a === b || a !== a && b !== b;
                  };h = l.assign || function () {
                    g = ba[d] = l(c);throw ma("nonassign", P[e], Q.name);
                  };g = ba[d] = l(c);f = function (a) {
                    k(a, ba[d]) || (k(a, g) ? h(c, a = ba[d]) : ba[d] = a);return g = a;
                  };f.$stateful = !0;f = a.collection ? c.$watchCollection(P[e], f) : c.$watch(F(P[e], f), null, l.literal);E.$on("$destroy", f);break;case "&":
                  l = F(P[e]), ba[d] = function (a) {
                    return l(c, a);
                  };}
            });
          }$ && (r($, function (a) {
            a();
          }), $ = null);g = 0;for (m = k.length; g < m; g++) s = k[g], Z(s, s.isolateScope ? E : c, X, P, s.require && M(s.directiveName, s.require, X, C), ib);var Wb = c;Q && (Q.template || null === Q.templateUrl) && (Wb = E);a && a(Wb, f.childNodes, u, l);for (g = p.length - 1; 0 <= g; g--) s = p[g], Z(s, s.isolateScope ? E : c, X, P, s.require && M(s.directiveName, s.require, X, C), ib);
        }m = m || {};for (var E = -Number.MAX_VALUE, C, O = m.controllerDirectives, $, Q = m.newIsolateScopeDirective, na = m.templateDirective, fa = m.nonTlbTranscludeDirective, la = !1, D = !1, A = m.hasElementTranscludeDirective, w = e.$$element = B(d), J, da, V, hb = f, za, K = 0, R = a.length; K < R; K++) {
          J = a[K];var Pa = J.$$start,
              U = J.$$end;Pa && (w = ba(d, Pa, U));V = u;if (E > J.priority) break;if (V = J.scope) J.templateUrl || (L(V) ? (Oa("new/isolated scope", Q || C, J, w), Q = J) : Oa("new/isolated scope", Q, J, w)), C = C || J;da = J.name;!J.templateUrl && J.controller && (V = J.controller, O = O || {}, Oa("'" + da + "' controller", O[da], J, w), O[da] = J);if (V = J.transclude) la = !0, J.$$tlb || (Oa("transclusion", fa, J, w), fa = J), "element" == V ? (A = !0, E = J.priority, V = w, w = e.$$element = B(W.createComment(" " + da + ": " + e[da] + " ")), d = w[0], T(g, $a.call(V, 0), d), hb = G(V, f, E, l && l.name, { nonTlbTranscludeDirective: fa })) : (V = B(Ub(d)).contents(), w.empty(), hb = G(V, f));if (J.template) if ((D = !0, Oa("template", na, J, w), na = J, V = z(J.template) ? J.template(w, e) : J.template, V = Sc(V), J.replace)) {
            l = J;V = Sb.test(V) ? Tc(Xb(J.templateNamespace, N(V))) : [];d = V[0];if (1 != V.length || d.nodeType !== qa) throw ma("tplrt", da, "");T(g, w, d);R = { $attr: {} };V = X(d, [], R);var aa = a.splice(K + 1, a.length - (K + 1));Q && y(V);a = a.concat(V).concat(aa);S(e, R);R = a.length;
          } else w.html(V);if (J.templateUrl) D = !0, Oa("template", na, J, w), na = J, J.replace && (l = J), I = of(a.splice(K, a.length - K), w, e, g, la && hb, k, p, { controllerDirectives: O, newIsolateScopeDirective: Q, templateDirective: na, nonTlbTranscludeDirective: fa }), R = a.length;else if (J.compile) try {
            za = J.compile(w, e, hb), z(za) ? s(null, za, Pa, U) : za && s(za.pre, za.post, Pa, U);
          } catch (pf) {
            c(pf, xa(w));
          }J.terminal && (I.terminal = !0, E = Math.max(E, J.priority));
        }I.scope = C && !0 === C.scope;I.transcludeOnThisElement = la;I.elementTranscludeOnThisElement = A;I.templateOnThisElement = D;I.transclude = hb;
        m.hasElementTranscludeDirective = A;return I;
      }function y(a) {
        for (var b = 0, c = a.length; b < c; b++) a[b] = Ob(a[b], { $$isolateScope: !0 });
      }function la(b, e, f, g, l, h, k) {
        if (e === l) return null;l = null;if (d.hasOwnProperty(e)) {
          var q;e = a.get(e + "Directive");for (var m = 0, s = e.length; m < s; m++) try {
            q = e[m], (g === u || g > q.priority) && -1 != q.restrict.indexOf(f) && (h && (q = Ob(q, { $$start: h, $$end: k })), b.push(q), l = q);
          } catch (I) {
            c(I);
          }
        }return l;
      }function D(b) {
        if (d.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), e = 0, f = c.length; e < f; e++) if ((b = c[e], b.multiElement)) return !0;
        return !1;
      }function S(a, b) {
        var c = b.$attr,
            d = a.$attr,
            e = a.$$element;r(a, function (d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
        });r(b, function (b, f) {
          "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
        });
      }function of(a, b, c, d, e, f, g, l) {
        var h = [],
            k,
            q,
            p = b[0],
            m = a.shift(),
            t = Ob(m, { templateUrl: null, transclude: null,
          replace: null, $$originalDirective: m }),
            I = z(m.templateUrl) ? m.templateUrl(b, c) : m.templateUrl,
            M = m.templateNamespace;b.empty();s(I).then(function (s) {
          var F, v;s = Sc(s);if (m.replace) {
            s = Sb.test(s) ? Tc(Xb(M, N(s))) : [];F = s[0];if (1 != s.length || F.nodeType !== qa) throw ma("tplrt", m.name, I);s = { $attr: {} };T(d, b, F);var C = X(F, [], s);L(m.scope) && y(C);a = C.concat(a);S(c, s);
          } else F = p, b.html(s);a.unshift(t);k = fa(a, F, c, e, b, m, f, g, l);r(d, function (a, c) {
            a == F && (d[c] = b[0]);
          });for (q = O(b[0].childNodes, e); h.length;) {
            s = h.shift();v = h.shift();
            var G = h.shift(),
                P = h.shift(),
                C = b[0];if (!s.$$destroyed) {
              if (v !== p) {
                var $ = v.className;l.hasElementTranscludeDirective && m.replace || (C = Ub(F));T(G, B(v), C);E(B(C), $);
              }v = k.transcludeOnThisElement ? Q(s, k.transclude, P) : P;k(q, s, C, d, v);
            }
          }h = null;
        });return function (a, b, c, d, e) {
          a = e;b.$$destroyed || (h ? h.push(b, c, d, a) : (k.transcludeOnThisElement && (a = Q(b, k.transclude, e)), k(q, b, c, d, a)));
        };
      }function da(a, b) {
        var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }function Oa(a, b, c, d) {
        if (b) throw ma("multidir", b.name, c.name, a, xa(d));
      }function za(a, c) {
        var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
            a = a.parent();var b = !!a.length;b && G.$$addBindingClass(a);return function (a, c) {
              var e = c.parent();b || G.$$addBindingClass(e);G.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
                c[0].nodeValue = a;
              });
            };
          } });
      }function Xb(a, b) {
        a = K(a || "html");switch (a) {case "svg":case "math":
            var c = W.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
            return b;}
      }function R(a, b) {
        if ("srcdoc" == b) return $.HTML;var c = wa(a);if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return $.RESOURCE_URL;
      }function Pa(a, c, d, e, f) {
        var h = R(a, e);f = g[e] || f;var k = b(d, !0, h, f);if (k) {
          if ("multiple" === e && "select" === wa(a)) throw ma("selmulti", xa(a));c.push({ priority: 100, compile: function compile() {
              return { pre: function pre(a, c, g) {
                  c = g.$$observers || (g.$$observers = {});if (l.test(e)) throw ma("nodomevents");var p = g[e];p !== d && (k = p && b(p, !0, h, f), d = p);k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                    "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
                  }));
                } };
            } });
        }
      }function T(a, b, c) {
        var d = b[0],
            e = b.length,
            f = d.parentNode,
            g,
            l;if (a) for (g = 0, l = a.length; g < l; g++) if (a[g] == d) {
          a[g++] = c;l = g + e - 1;for (var h = a.length; g < h; g++, l++) l < h ? a[g] = a[l] : delete a[g];a.length -= e - 1;a.context === d && (a.context = c);break;
        }f && f.replaceChild(c, d);a = W.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());ta ? (Qb = !0, ta.cleanData([d])) : delete B.cache[d[B.expando]];d = 1;for (e = b.length; d < e; d++) f = b[d], B(f).remove(), a.appendChild(f), delete b[d];b[0] = c;b.length = 1;
      }function Y(a, b) {
        return w(function () {
          return a.apply(null, arguments);
        }, a, b);
      }function Z(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (l) {
          c(l, xa(d));
        }
      }var Yb = function Yb(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              f;d = 0;for (e = c.length; d < e; d++) f = c[d], this[f] = b[f];
        } else this.$attr = {};this.$$element = a;
      };Yb.prototype = { $normalize: ya, $addClass: function $addClass(a) {
          a && 0 < a.length && I.addClass(this.$$element, a);
        }, $removeClass: function $removeClass(a) {
          a && 0 < a.length && I.removeClass(this.$$element, a);
        }, $updateClass: function $updateClass(a, b) {
          var c = Uc(a, b);c && c.length && I.addClass(this.$$element, c);(c = Uc(b, a)) && c.length && I.removeClass(this.$$element, c);
        }, $set: function $set(a, b, d, e) {
          var f = this.$$element[0],
              g = Mc(f, a),
              l = kf(f, a),
              f = a;g ? (this.$$element.prop(a, b), e = g) : l && (this[l] = b, f = l);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = uc(a, "-"));g = wa(this.$$element);if ("a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = M(b, "src" === a);else if ("img" === g && "srcset" === a) {
            for (var g = "", l = N(b), h = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, h = /\s/.test(l) ? h : /(,)/, l = l.split(h), h = Math.floor(l.length / 2), k = 0; k < h; k++) var q = 2 * k, g = g + M(N(l[q]), !0), g = g + (" " + N(l[q + 1]));l = N(l[2 * k]).split(/\s/);g += M(N(l[0]), !0);2 === l.length && (g += " " + N(l[1]));this[a] = b = g;
          }!1 !== d && (null === b || b === u ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));(a = this.$$observers) && r(a[f], function (a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        }, $observe: function $observe(a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = ja()),
              e = d[a] || (d[a] = []);e.push(b);m.$evalAsync(function () {
            !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
          });
          return function () {
            Ya(e, b);
          };
        } };var V = b.startSymbol(),
          na = b.endSymbol(),
          Sc = "{{" == V || "}}" == na ? ra : function (a) {
        return a.replace(/\{\{/g, V).replace(/}}/g, na);
      },
          U = /^ngAttr[A-Z]/;G.$$addBindingInfo = k ? function (a, b) {
        var c = a.data("$binding") || [];H(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
      } : A;G.$$addBindingClass = k ? function (a) {
        E(a, "ng-binding");
      } : A;G.$$addScopeInfo = k ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : A;G.$$addScopeClass = k ? function (a, b) {
        E(a, b ? "ng-isolate-scope" : "ng-scope");
      } : A;return G;
    }];
  }function ya(b) {
    return fb(b.replace(Rc, ""));
  }function Uc(b, a) {
    var c = "",
        d = b.split(/\s+/),
        e = a.split(/\s+/),
        f = 0;a: for (; f < d.length; f++) {
      for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;c += (0 < c.length ? " " : "") + g;
    }return c;
  }function Tc(b) {
    b = B(b);var a = b.length;if (1 >= a) return b;for (; a--;) 8 === b[a].nodeType && qf.call(b, a, 1);return b;
  }function Fe() {
    var b = {},
        a = !1,
        c = /^(\S+)(\s+as\s+(\w+))?$/;this.register = function (a, c) {
      Ma(a, "controller");L(a) ? w(b, a) : b[a] = c;
    };this.allowGlobals = function () {
      a = !0;
    };this.$get = ["$injector", "$window", function (d, e) {
      function f(a, b, c, d) {
        if (!a || !L(a.$scope)) throw S("$controller")("noscp", d, b);a.$scope[b] = c;
      }return function (g, h, l, k) {
        var n, p, q;l = !0 === l;k && x(k) && (q = k);if (x(g)) {
          k = g.match(c);if (!k) throw rf("ctrlfmt", g);p = k[1];q = q || k[3];g = b.hasOwnProperty(p) ? b[p] : wc(h.$scope, p, !0) || (a ? wc(e, p, !0) : u);La(g, p, !0);
        }if (l) return l = (H(g) ? g[g.length - 1] : g).prototype, n = Object.create(l || null), q && f(h, q, n, p || g.name), w(function () {
          d.invoke(g, n, h, p);return n;
        }, { instance: n, identifier: q });
        n = d.instantiate(g, h, p);q && f(h, q, n, p || g.name);return n;
      };
    }];
  }function Ge() {
    this.$get = ["$window", function (b) {
      return B(b.document);
    }];
  }function He() {
    this.$get = ["$log", function (b) {
      return function (a, c) {
        b.error.apply(b, arguments);
      };
    }];
  }function Zb(b, a) {
    if (x(b)) {
      var c = b.replace(sf, "").trim();if (c) {
        var d = a("Content-Type");(d = d && 0 === d.indexOf(Vc)) || (d = (d = c.match(tf)) && uf[d[0]].test(c));d && (b = pc(c));
      }
    }return b;
  }function Wc(b) {
    var a = ja(),
        c,
        d,
        e;if (!b) return a;r(b.split("\n"), function (b) {
      e = b.indexOf(":");c = K(N(b.substr(0, e)));d = N(b.substr(e + 1));c && (a[c] = a[c] ? a[c] + ", " + d : d);
    });return a;
  }function Xc(b) {
    var a = L(b) ? b : u;return function (c) {
      a || (a = Wc(b));return c ? (c = a[K(c)], void 0 === c && (c = null), c) : a;
    };
  }function Yc(b, a, c, d) {
    if (z(d)) return d(b, a, c);r(d, function (d) {
      b = d(b, a, c);
    });return b;
  }function Ke() {
    var b = this.defaults = { transformResponse: [Zb], transformRequest: [function (a) {
        return L(a) && "[object File]" !== Ca.call(a) && "[object Blob]" !== Ca.call(a) && "[object FormData]" !== Ca.call(a) ? ab(a) : a;
      }], headers: { common: { Accept: "application/json, text/plain, */*" },
        post: sa($b), put: sa($b), patch: sa($b) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN" },
        a = !1;this.useApplyAsync = function (b) {
      return y(b) ? (a = !!b, this) : a;
    };var c = this.interceptors = [];this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (d, e, f, g, h, l) {
      function k(a) {
        function c(a) {
          var b = w({}, a);b.data = a.data ? Yc(a.data, a.headers, a.status, e.transformResponse) : a.data;a = a.status;return 200 <= a && 300 > a ? b : h.reject(b);
        }function d(a) {
          var b,
              c = {};r(a, function (a, d) {
            z(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a;
          });return c;
        }if (!ca.isObject(a)) throw S("$http")("badreq", a);var e = w({ method: "get", transformRequest: b.transformRequest, transformResponse: b.transformResponse }, a);e.headers = (function (a) {
          var c = b.headers,
              e = w({}, a.headers),
              f,
              g,
              c = w({}, c.common, c[K(a.method)]);a: for (f in c) {
            a = K(f);for (g in e) if (K(g) === a) continue a;e[f] = c[f];
          }return d(e);
        })(a);e.method = vb(e.method);var f = [function (a) {
          var d = a.headers,
              e = Yc(a.data, Xc(d), u, a.transformRequest);D(e) && r(d, function (a, b) {
            "content-type" === K(b) && delete d[b];
          });D(a.withCredentials) && !D(b.withCredentials) && (a.withCredentials = b.withCredentials);return n(a, e).then(c, c);
        }, u],
            g = h.when(e);for (r(t, function (a) {
          (a.request || a.requestError) && f.unshift(a.request, a.requestError);(a.response || a.responseError) && f.push(a.response, a.responseError);
        }); f.length;) {
          a = f.shift();var l = f.shift(),
              g = g.then(a, l);
        }g.success = function (a) {
          La(a, "fn");g.then(function (b) {
            a(b.data, b.status, b.headers, e);
          });return g;
        };g.error = function (a) {
          La(a, "fn");g.then(null, function (b) {
            a(b.data, b.status, b.headers, e);
          });return g;
        };return g;
      }function n(c, f) {
        function l(b, c, d, e) {
          function f() {
            m(c, b, d, e);
          }E && (200 <= b && 300 > b ? E.put(Q, [b, c, Wc(d), e]) : E.remove(Q));a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply());
        }function m(a, b, d, e) {
          b = -1 <= b ? b : 0;(200 <= b && 300 > b ? I.resolve : I.reject)({ data: a, status: b, headers: Xc(d), config: c, statusText: e });
        }function n(a) {
          m(a.data, a.status, sa(a.headers()), a.statusText);
        }function t() {
          var a = k.pendingRequests.indexOf(c);-1 !== a && k.pendingRequests.splice(a, 1);
        }var I = h.defer(),
            M = I.promise,
            E,
            G,
            O = c.headers,
            Q = p(c.url, c.params);k.pendingRequests.push(c);M.then(t, t);!c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (E = L(c.cache) ? c.cache : L(b.cache) ? b.cache : q);E && (G = E.get(Q), y(G) ? G && z(G.then) ? G.then(n, n) : H(G) ? m(G[1], G[0], sa(G[2]), G[3]) : m(G, 200, {}, "OK") : E.put(Q, M));D(G) && ((G = Zc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : u) && (O[c.xsrfHeaderName || b.xsrfHeaderName] = G), d(c.method, Q, f, l, O, c.timeout, c.withCredentials, c.responseType));return M;
      }function p(a, b) {
        if (!b) return a;
        var c = [];Ed(b, function (a, b) {
          null === a || D(a) || (H(a) || (a = [a]), r(a, function (a) {
            L(a) && (a = ha(a) ? a.toISOString() : ab(a));c.push(Ea(b) + "=" + Ea(a));
          }));
        });0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));return a;
      }var q = f("$http"),
          t = [];r(c, function (a) {
        t.unshift(x(a) ? l.get(a) : l.invoke(a));
      });k.pendingRequests = [];(function (a) {
        r(arguments, function (a) {
          k[a] = function (b, c) {
            return k(w(c || {}, { method: a, url: b }));
          };
        });
      })("get", "delete", "head", "jsonp");(function (a) {
        r(arguments, function (a) {
          k[a] = function (b, c, d) {
            return k(w(d || {}, { method: a, url: b, data: c }));
          };
        });
      })("post", "put", "patch");k.defaults = b;return k;
    }];
  }function vf() {
    return new R.XMLHttpRequest();
  }function Le() {
    this.$get = ["$browser", "$window", "$document", function (b, a, c) {
      return wf(b, vf, b.defer, a.angular.callbacks, c[0]);
    }];
  }function wf(b, a, c, d, e) {
    function f(a, b, c) {
      var f = e.createElement("script"),
          n = null;f.type = "text/javascript";f.src = a;f.async = !0;n = function (a) {
        f.removeEventListener("load", n, !1);f.removeEventListener("error", n, !1);e.body.removeChild(f);f = null;var g = -1,
            t = "unknown";
        a && ("load" !== a.type || d[b].called || (a = { type: "error" }), t = a.type, g = "error" === a.type ? 404 : 200);c && c(g, t);
      };f.addEventListener("load", n, !1);f.addEventListener("error", n, !1);e.body.appendChild(f);return n;
    }return function (e, h, l, k, n, p, q, t) {
      function s() {
        m && m();C && C.abort();
      }function F(a, d, e, f, g) {
        I !== u && c.cancel(I);m = C = null;a(d, e, f, g);b.$$completeOutstandingRequest(A);
      }b.$$incOutstandingRequestCount();h = h || b.url();if ("jsonp" == K(e)) {
        var v = "_" + (d.counter++).toString(36);d[v] = function (a) {
          d[v].data = a;d[v].called = !0;
        };
        var m = f(h.replace("JSON_CALLBACK", "angular.callbacks." + v), v, function (a, b) {
          F(k, a, d[v].data, "", b);d[v] = A;
        });
      } else {
        var C = a();C.open(e, h, !0);r(n, function (a, b) {
          y(a) && C.setRequestHeader(b, a);
        });C.onload = function () {
          var a = C.statusText || "",
              b = "response" in C ? C.response : C.responseText,
              c = 1223 === C.status ? 204 : C.status;0 === c && (c = b ? 200 : "file" == Aa(h).protocol ? 404 : 0);F(k, c, b, C.getAllResponseHeaders(), a);
        };e = function () {
          F(k, -1, null, null, "");
        };C.onerror = e;C.onabort = e;q && (C.withCredentials = !0);if (t) try {
          C.responseType = t;
        } catch ($) {
          if ("json" !== t) throw $;
        }C.send(l || null);
      }if (0 < p) var I = c(s, p);else p && z(p.then) && p.then(s);
    };
  }function Ie() {
    var b = "{{",
        a = "}}";this.startSymbol = function (a) {
      return a ? (b = a, this) : b;
    };this.endSymbol = function (b) {
      return b ? (a = b, this) : a;
    };this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
      function f(a) {
        return "\\\\\\" + a;
      }function g(f, g, t, s) {
        function F(c) {
          return c.replace(k, b).replace(n, a);
        }function v(a) {
          try {
            var b = a;a = t ? e.getTrusted(t, b) : e.valueOf(b);var c;if (s && !y(a)) c = a;else if (null == a) c = "";else {
              switch (typeof a) {case "string":
                  break;
                case "number":
                  a = "" + a;break;default:
                  a = ab(a);}c = a;
            }return c;
          } catch (g) {
            c = ac("interr", f, g.toString()), d(c);
          }
        }s = !!s;for (var m, C, r = 0, I = [], M = [], E = f.length, G = [], O = []; r < E;) if (-1 != (m = f.indexOf(b, r)) && -1 != (C = f.indexOf(a, m + h))) r !== m && G.push(F(f.substring(r, m))), r = f.substring(m + h, C), I.push(r), M.push(c(r, v)), r = C + l, O.push(G.length), G.push("");else {
          r !== E && G.push(F(f.substring(r)));break;
        }if (t && 1 < G.length) throw ac("noconcat", f);if (!g || I.length) {
          var Q = function Q(a) {
            for (var b = 0, c = I.length; b < c; b++) {
              if (s && D(a[b])) return;G[O[b]] = a[b];
            }return G.join("");
          };return w(function (a) {
            var b = 0,
                c = I.length,
                e = Array(c);try {
              for (; b < c; b++) e[b] = M[b](a);return Q(e);
            } catch (g) {
              a = ac("interr", f, g.toString()), d(a);
            }
          }, { exp: f, expressions: I, $$watchDelegate: function $$watchDelegate(a, b, c) {
              var d;return a.$watchGroup(M, function (c, e) {
                var f = Q(c);z(b) && b.call(this, f, c !== e ? d : f, a);d = f;
              }, c);
            } });
        }
      }var h = b.length,
          l = a.length,
          k = new RegExp(b.replace(/./g, f), "g"),
          n = new RegExp(a.replace(/./g, f), "g");g.startSymbol = function () {
        return b;
      };g.endSymbol = function () {
        return a;
      };return g;
    }];
  }function Je() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", function (b, a, c, d) {
      function e(e, h, l, k) {
        var n = a.setInterval,
            p = a.clearInterval,
            q = 0,
            t = y(k) && !k,
            s = (t ? d : c).defer(),
            F = s.promise;l = y(l) ? l : 0;F.then(null, null, e);F.$$intervalId = n(function () {
          s.notify(q++);0 < l && q >= l && (s.resolve(q), p(F.$$intervalId), delete f[F.$$intervalId]);t || b.$apply();
        }, h);f[F.$$intervalId] = s;return F;
      }var f = {};e.cancel = function (b) {
        return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1;
      };return e;
    }];
  }function Rd() {
    this.$get = function () {
      return { id: "en-us", NUMBER_FORMATS: { DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3 }, { minInt: 1, minFrac: 2, maxFrac: 2, posPre: "¤", posSuf: "", negPre: "(¤", negSuf: ")", gSize: 3, lgSize: 3 }], CURRENCY_SYM: "$" }, DATETIME_FORMATS: { MONTH: "January February March April May June July August September October November December".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
          DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a", ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"] }, pluralCat: function pluralCat(b) {
          return 1 === b ? "one" : "other";
        } };
    };
  }function bc(b) {
    b = b.split("/");for (var a = b.length; a--;) b[a] = sb(b[a]);
    return b.join("/");
  }function $c(b, a) {
    var c = Aa(b);a.$$protocol = c.protocol;a.$$host = c.hostname;a.$$port = aa(c.port) || xf[c.protocol] || null;
  }function ad(b, a) {
    var c = "/" !== b.charAt(0);c && (b = "/" + b);var d = Aa(b);a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);a.$$search = rc(d.search);a.$$hash = decodeURIComponent(d.hash);a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path);
  }function ua(b, a) {
    if (0 === a.indexOf(b)) return a.substr(b.length);
  }function Ga(b) {
    var a = b.indexOf("#");
    return -1 == a ? b : b.substr(0, a);
  }function Gb(b) {
    return b.replace(/(#.+)|#$/, "$1");
  }function cc(b, a, c) {
    this.$$html5 = !0;c = c || "";$c(b, this);this.$$parse = function (b) {
      var c = ua(a, b);if (!x(c)) throw Hb("ipthprfx", b, a);ad(c, this);this.$$path || (this.$$path = "/");this.$$compose();
    };this.$$compose = function () {
      var b = Pb(this.$$search),
          c = this.$$hash ? "#" + sb(this.$$hash) : "";this.$$url = bc(this.$$path) + (b ? "?" + b : "") + c;this.$$absUrl = a + this.$$url.substr(1);
    };this.$$parseLinkUrl = function (d, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;(f = ua(b, d)) !== u ? (g = f, g = (f = ua(c, f)) !== u ? a + (ua("/", f) || f) : b + g) : (f = ua(a, d)) !== u ? g = a + f : a == d + "/" && (g = a);g && this.$$parse(g);return !!g;
    };
  }function dc(b, a, c) {
    $c(b, this);this.$$parse = function (d) {
      var e = ua(b, d) || ua(a, d),
          f;D(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", D(e) && (b = d, this.replace())) : (f = ua(c, e), D(f) && (f = e));ad(f, this);d = this.$$path;var e = b,
          g = /^\/[A-Z]:(\/.*)/;0 === f.indexOf(e) && (f = f.replace(e, ""));g.exec(f) || (d = (f = g.exec(d)) ? f[1] : d);this.$$path = d;this.$$compose();
    };this.$$compose = function () {
      var a = Pb(this.$$search),
          e = this.$$hash ? "#" + sb(this.$$hash) : "";this.$$url = bc(this.$$path) + (a ? "?" + a : "") + e;this.$$absUrl = b + (this.$$url ? c + this.$$url : "");
    };this.$$parseLinkUrl = function (a, c) {
      return Ga(b) == Ga(a) ? (this.$$parse(a), !0) : !1;
    };
  }function bd(b, a, c) {
    this.$$html5 = !0;dc.apply(this, arguments);this.$$parseLinkUrl = function (d, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;b == Ga(d) ? f = d : (g = ua(a, d)) ? f = b + c + g : a === d + "/" && (f = a);f && this.$$parse(f);return !!f;
    };this.$$compose = function () {
      var a = Pb(this.$$search),
          e = this.$$hash ? "#" + sb(this.$$hash) : "";this.$$url = bc(this.$$path) + (a ? "?" + a : "") + e;this.$$absUrl = b + c + this.$$url;
    };
  }function Ib(b) {
    return function () {
      return this[b];
    };
  }function cd(b, a) {
    return function (c) {
      if (D(c)) return this[b];this[b] = a(c);this.$$compose();return this;
    };
  }function Me() {
    var b = "",
        a = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (a) {
      return y(a) ? (b = a, this) : b;
    };this.html5Mode = function (b) {
      return Xa(b) ? (a.enabled = b, this) : L(b) ? (Xa(b.enabled) && (a.enabled = b.enabled), Xa(b.requireBase) && (a.requireBase = b.requireBase), Xa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a;
    };this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
      function h(a, b, c) {
        var e = k.url(),
            f = k.$$state;try {
          d.url(a, b, c), k.$$state = d.state();
        } catch (g) {
          throw (k.url(e), k.$$state = f, g);
        }
      }function l(a, b) {
        c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b);
      }var k, n;n = d.baseHref();var p = d.url(),
          q;if (a.enabled) {
        if (!n && a.requireBase) throw Hb("nobase");q = p.substring(0, p.indexOf("/", p.indexOf("//") + 2)) + (n || "/");n = e.history ? cc : bd;
      } else q = Ga(p), n = dc;var t = q.substr(0, Ga(q).lastIndexOf("/") + 1);k = new n(q, t, "#" + b);k.$$parseLinkUrl(p, p);k.$$state = d.state();var s = /^\s*(javascript|mailto):/i;f.on("click", function (b) {
        if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
          for (var e = B(b.target); "a" !== wa(e[0]);) if (e[0] === f[0] || !(e = e.parent())[0]) return;var l = e.prop("href"),
              h = e.attr("href") || e.attr("xlink:href");L(l) && "[object SVGAnimatedString]" === l.toString() && (l = Aa(l.animVal).href);s.test(l) || !l || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(l, h) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0));
        }
      });Gb(k.absUrl()) != Gb(p) && d.url(k.absUrl(), !0);var F = !0;d.onUrlChange(function (a, b) {
        D(ua(t, a)) ? g.location.href = a : (c.$evalAsync(function () {
          var d = k.absUrl(),
              e = k.$$state,
              f;k.$$parse(a);k.$$state = b;f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (F = !1, l(d, e)));
        }), c.$$phase || c.$digest());
      });c.$watch(function () {
        var a = Gb(d.url()),
            b = Gb(k.absUrl()),
            f = d.state(),
            g = k.$$replace,
            q = a !== b || k.$$html5 && e.history && f !== k.$$state;if (F || q) F = !1, c.$evalAsync(function () {
          var b = k.absUrl(),
              d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)));
        });k.$$replace = !1;
      });return k;
    }];
  }function Ne() {
    var b = !0,
        a = this;this.debugEnabled = function (a) {
      return y(a) ? (b = a, this) : b;
    };this.$get = ["$window", function (c) {
      function d(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
      }function e(a) {
        var b = c.console || {},
            e = b[a] || b.log || A;a = !1;try {
          a = !!e.apply;
        } catch (l) {}return a ? function () {
          var a = [];r(arguments, function (b) {
            a.push(d(b));
          });return e.apply(b, a);
        } : function (a, b) {
          e(a, null == b ? "" : b);
        };
      }return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"),
        debug: (function () {
          var c = e("debug");return function () {
            b && c.apply(a, arguments);
          };
        })() };
    }];
  }function va(b, a) {
    if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw ga("isecfld", a);return b;
  }function dd(b, a) {
    b += "";if (!x(b)) throw ga("iseccst", a);return b;
  }function oa(b, a) {
    if (b) {
      if (b.constructor === b) throw ga("isecfn", a);if (b.window === b) throw ga("isecwindow", a);if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw ga("isecdom", a);if (b === Object) throw ga("isecobj", a);
    }return b;
  }function ec(b) {
    return b.constant;
  }function jb(b, a, c, d, e) {
    oa(b, e);oa(a, e);c = c.split(".");for (var f, g = 0; 1 < c.length; g++) {
      f = va(c.shift(), e);var h = 0 === g && a && a[f] || b[f];h || (h = {}, b[f] = h);b = oa(h, e);
    }f = va(c.shift(), e);oa(b[f], e);return b[f] = d;
  }function Qa(b) {
    return "constructor" == b;
  }function ed(b, a, c, d, e, f, g) {
    va(b, f);va(a, f);va(c, f);va(d, f);va(e, f);var h = function h(a) {
      return oa(a, f);
    },
        l = g || Qa(b) ? h : ra,
        k = g || Qa(a) ? h : ra,
        n = g || Qa(c) ? h : ra,
        p = g || Qa(d) ? h : ra,
        q = g || Qa(e) ? h : ra;return function (f, g) {
      var h = g && g.hasOwnProperty(b) ? g : f;if (null == h) return h;h = l(h[b]);if (!a) return h;if (null == h) return u;h = k(h[a]);if (!c) return h;if (null == h) return u;h = n(h[c]);if (!d) return h;if (null == h) return u;h = p(h[d]);return e ? null == h ? u : h = q(h[e]) : h;
    };
  }function yf(b, a) {
    return function (c, d) {
      return b(c, d, oa, a);
    };
  }function zf(b, a, c) {
    var d = a.expensiveChecks,
        e = d ? Af : Bf,
        f = e[b];if (f) return f;var g = b.split("."),
        h = g.length;if (a.csp) f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function (a, b) {
      var e = 0,
          f;do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = u, a = f; while (e < h);return f;
    };else {
      var l = "";d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");var k = d;r(g, function (a, b) {
        va(a, c);var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;if (d || Qa(a)) e = "eso(" + e + ", fe)", k = !0;l += "if(s == null) return undefined;\ns=" + e + ";\n";
      });l += "return s;";a = new Function("s", "l", "eso", "fe", l);a.toString = ea(l);k && (a = yf(a, c));f = a;
    }f.sharedGetter = !0;f.assign = function (a, c, d) {
      return jb(a, d, b, c, b);
    };return e[b] = f;
  }function fc(b) {
    return z(b.valueOf) ? b.valueOf() : Cf.call(b);
  }function Oe() {
    var b = ja(),
        a = ja();this.$get = ["$filter", "$sniffer", function (c, d) {
      function e(a) {
        var b = a;a.sharedGetter && (b = function (b, c) {
          return a(b, c);
        }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);return b;
      }function f(a, b) {
        for (var c = 0, d = a.length; c < d; c++) {
          var e = a[c];e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e));
        }return b;
      }function g(a, b) {
        return null == a || null == b ? a === b : "object" === typeof a && (a = fc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b;
      }function h(a, b, c, d) {
        var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])),
            l;if (1 === e.length) {
          var h = g,
              e = e[0];return a.$watch(function (a) {
            var b = e(a);g(b, h) || (l = d(a), h = b && fc(b));return l;
          }, b, c);
        }for (var k = [], q = 0, p = e.length; q < p; q++) k[q] = g;return a.$watch(function (a) {
          for (var b = !1, c = 0, f = e.length; c < f; c++) {
            var h = e[c](a);if (b || (b = !g(h, k[c]))) k[c] = h && fc(h);
          }b && (l = d(a));return l;
        }, b, c);
      }function l(a, b, c, d) {
        var e, f;return e = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          f = a;z(b) && b.apply(this, arguments);y(a) && d.$$postDigest(function () {
            y(f) && e();
          });
        }, c);
      }function k(a, b, c, d) {
        function e(a) {
          var b = !0;r(a, function (a) {
            y(a) || (b = !1);
          });return b;
        }var f, g;return f = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          g = a;z(b) && b.call(this, a, c, d);e(a) && d.$$postDigest(function () {
            e(g) && f();
          });
        }, c);
      }function n(a, b, c, d) {
        var e;return e = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          z(b) && b.apply(this, arguments);e();
        }, c);
      }function p(a, b) {
        if (!b) return a;var c = a.$$watchDelegate,
            c = c !== k && c !== l ? function (c, d) {
          var e = a(c, d);return b(e, c, d);
        } : function (c, d) {
          var e = a(c, d),
              f = b(e, c, d);return y(e) ? f : e;
        };a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);return c;
      }var q = { csp: d.csp, expensiveChecks: !1 },
          t = { csp: d.csp, expensiveChecks: !0 };return function (d, f, g) {
        var m, r, u;switch (typeof d) {case "string":
            u = d = d.trim();var I = g ? a : b;m = I[u];m || (":" === d.charAt(0) && ":" === d.charAt(1) && (r = !0, d = d.substring(2)), g = g ? t : q, m = new gc(g), m = new kb(m, c, g).parse(d), m.constant ? m.$$watchDelegate = n : r ? (m = e(m), m.$$watchDelegate = m.literal ? k : l) : m.inputs && (m.$$watchDelegate = h), I[u] = m);return p(m, f);
          case "function":
            return p(d, f);default:
            return p(A, f);}
      };
    }];
  }function Qe() {
    this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
      return fd(function (a) {
        b.$evalAsync(a);
      }, a);
    }];
  }function Re() {
    this.$get = ["$browser", "$exceptionHandler", function (b, a) {
      return fd(function (a) {
        b.defer(a);
      }, a);
    }];
  }function fd(b, a) {
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
        var b, d, e;e = c.pending;c.processScheduled = !1;c.pending = u;for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];b = e[f][c.status];try {
            z(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
          } catch (l) {
            d.reject(l), a(l);
          }
        }
      }));
    }function g() {
      this.promise = new d();this.resolve = e(this, this.resolve);this.reject = e(this, this.reject);this.notify = e(this, this.notify);
    }var h = S("$q", TypeError);d.prototype = { then: function then(a, b, c) {
        var d = new g();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && f(this.$$state);return d.promise;
      }, "catch": function _catch(a) {
        return this.then(null, a);
      }, "finally": function _finally(a, b) {
        return this.then(function (b) {
          return k(b, !0, a);
        }, function (b) {
          return k(b, !1, a);
        }, b);
      } };g.prototype = { resolve: function resolve(a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a));
      }, $$resolve: function $$resolve(b) {
        var d, e;e = c(this, this.$$resolve, this.$$reject);try {
          if (L(b) || z(b)) d = b && b.then;z(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state));
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
              e.notify(z(b) ? b(c) : c);
            } catch (l) {
              a(l);
            }
          }
        });
      } };var l = function l(a, b) {
      var c = new g();b ? c.resolve(a) : c.reject(a);return c.promise;
    },
        k = function k(a, b, c) {
      var d = null;try {
        z(c) && (d = c());
      } catch (e) {
        return l(e, !1);
      }return d && z(d.then) ? d.then(function () {
        return l(a, b);
      }, function (a) {
        return l(a, !1);
      }) : l(a, b);
    },
        n = function n(a, b, c, d) {
      var e = new g();e.resolve(a);return e.promise.then(b, c, d);
    },
        p = function t(a) {
      if (!z(a)) throw h("norslvr", a);if (!(this instanceof t)) return new t(a);var b = new g();a(function (a) {
        b.resolve(a);
      }, function (a) {
        b.reject(a);
      });return b.promise;
    };
    p.defer = function () {
      return new g();
    };p.reject = function (a) {
      var b = new g();b.reject(a);return b.promise;
    };p.when = n;p.all = function (a) {
      var b = new g(),
          c = 0,
          d = H(a) ? [] : {};r(a, function (a, e) {
        c++;n(a).then(function (a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
        }, function (a) {
          d.hasOwnProperty(e) || b.reject(a);
        });
      });0 === c && b.resolve(d);return b.promise;
    };return p;
  }function $e() {
    this.$get = ["$window", "$timeout", function (b, a) {
      function c() {
        for (var a = 0; a < n.length; a++) {
          var b = n[a];b && (n[a] = null, b());
        }k = n.length = 0;
      }function d(a) {
        var b = n.length;k++;n.push(a);0 === b && (l = h(c));return function () {
          0 <= b && (b = n[b] = null, 0 === --k && l && (l(), l = null, n.length = 0));
        };
      }var e = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
          f = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
          g = !!e,
          h = g ? function (a) {
        var b = e(a);return function () {
          f(b);
        };
      } : function (b) {
        var c = a(b, 16.66, !1);return function () {
          a.cancel(c);
        };
      };d.supported = g;var l,
          k = 0,
          n = [];return d;
    }];
  }function Pe() {
    function b(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$id = ++rb;this.$$ChildScope = null;
      }b.prototype = a;return b;
    }var a = 10,
        c = S("$rootScope"),
        d = null,
        e = null;this.digestTtl = function (b) {
      arguments.length && (a = b);return a;
    };this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (f, g, h, l) {
      function k(a) {
        a.currentScope.$$destroyed = !0;
      }function n() {
        this.$id = ++rb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$isolateBindings = null;
      }function p(a) {
        if (v.$$phase) throw c("inprog", v.$$phase);v.$$phase = a;
      }function q(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
      }function t() {}function s() {
        for (; u.length;) try {
          u.shift()();
        } catch (a) {
          g(a);
        }e = null;
      }function F() {
        null === e && (e = l.defer(function () {
          v.$apply(s);
        }));
      }n.prototype = { constructor: n, $new: function $new(a, c) {
          var d;c = c || this;a ? (d = new n(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = b(this)), d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(a || c != this) && d.$on("$destroy", k);return d;
        }, $watch: function $watch(a, b, c) {
          var e = h(a);if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e);var f = this.$$watchers,
              g = { fn: b, last: t, get: e, exp: a, eq: !!c };d = null;z(b) || (g.fn = A);f || (f = this.$$watchers = []);f.unshift(g);return function () {
            Ya(f, g);d = null;
          };
        }, $watchGroup: function $watchGroup(a, b) {
          function c() {
            l = !1;h ? (h = !1, b(e, e, g)) : b(e, d, g);
          }var d = Array(a.length),
              e = Array(a.length),
              f = [],
              g = this,
              l = !1,
              h = !0;if (!a.length) {
            var k = !0;g.$evalAsync(function () {
              k && b(e, e, g);
            });return function () {
              k = !1;
            };
          }if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
            e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
          });r(a, function (a, b) {
            var h = g.$watch(a, function (a, f) {
              e[b] = a;d[b] = f;l || (l = !0, g.$evalAsync(c));
            });f.push(h);
          });return function () {
            for (; f.length;) f.shift()();
          };
        }, $watchCollection: function $watchCollection(a, b) {
          function c(a) {
            e = a;var b, d, g, l;if (!D(e)) {
              if (L(e)) if (Ta(e)) for (f !== p && (f = p, t = f.length = 0, k++), a = e.length, t !== a && (k++, f.length = t = a), b = 0; b < a; b++) l = f[b], g = e[b], d = l !== l && g !== g, d || l === g || (k++, f[b] = g);else {
                f !== n && (f = n = {}, t = 0, k++);a = 0;for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], l = f[b], b in f ? (d = l !== l && g !== g, d || l === g || (k++, f[b] = g)) : (t++, f[b] = g, k++));if (t > a) for (b in (k++, f)) e.hasOwnProperty(b) || (t--, delete f[b]);
              } else f !== e && (f = e, k++);return k;
            }
          }c.$stateful = !0;var d = this,
              e,
              f,
              g,
              l = 1 < b.length,
              k = 0,
              q = h(a, c),
              p = [],
              n = {},
              m = !0,
              t = 0;return this.$watch(q, function () {
            m ? (m = !1, b(e, e, d)) : b(e, g, d);if (l) if (L(e)) if (Ta(e)) {
              g = Array(e.length);for (var a = 0; a < e.length; a++) g[a] = e[a];
            } else for (a in (g = {}, e)) sc.call(e, a) && (g[a] = e[a]);else g = e;
          });
        }, $digest: function $digest() {
          var b,
              f,
              h,
              k,
              q,
              n,
              r = a,
              F,
              P = [],
              u,
              y;p("$digest");l.$$checkUrlChange();this === v && null !== e && (l.defer.cancel(e), s());d = null;do {
            n = !1;for (F = this; m.length;) {
              try {
                y = m.shift(), y.scope.$eval(y.expression, y.locals);
              } catch (w) {
                g(w);
              }d = null;
            }a: do {
              if (k = F.$$watchers) for (q = k.length; q--;) try {
                if (b = k[q]) if ((f = b.get(F)) !== (h = b.last) && !(b.eq ? ia(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h))) n = !0, d = b, b.last = b.eq ? Da(f, null) : f, b.fn(f, h === t ? f : h, F), 5 > r && (u = 4 - r, P[u] || (P[u] = []), P[u].push({ msg: z(b.exp) ? "fn: " + (b.exp.name || b.exp.toString()) : b.exp, newVal: f, oldVal: h }));else if (b === d) {
                  n = !1;break a;
                }
              } catch (D) {
                g(D);
              }if (!(k = F.$$childHead || F !== this && F.$$nextSibling)) for (; F !== this && !(k = F.$$nextSibling);) F = F.$parent;
            } while (F = k);if ((n || m.length) && ! r--) throw (v.$$phase = null, c("infdig", a, P));
          } while (n || m.length);for (v.$$phase = null; C.length;) try {
            C.shift()();
          } catch (B) {
            g(B);
          }
        },
        $destroy: function $destroy() {
          if (!this.$$destroyed) {
            var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;if (this !== v) {
              for (var b in this.$$listenerCount) q(this, this.$$listenerCount[b], b);a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = A;this.$on = this.$watch = this.$watchGroup = function () {
                return A;
              };this.$$listeners = {};this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
            }
          }
        }, $eval: function $eval(a, b) {
          return h(a)(this, b);
        }, $evalAsync: function $evalAsync(a, b) {
          v.$$phase || m.length || l.defer(function () {
            m.length && v.$digest();
          });m.push({ scope: this, expression: a, locals: b });
        }, $$postDigest: function $$postDigest(a) {
          C.push(a);
        }, $apply: function $apply(a) {
          try {
            return p("$apply"), this.$eval(a);
          } catch (b) {
            g(b);
          } finally {
            v.$$phase = null;try {
              v.$digest();
            } catch (c) {
              throw (g(c), c);
            }
          }
        }, $applyAsync: function $applyAsync(a) {
          function b() {
            c.$eval(a);
          }var c = this;a && u.push(b);F();
        }, $on: function $on(a, b) {
          var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);var e = this;return function () {
            var d = c.indexOf(b);-1 !== d && (c[d] = null, q(e, 1, a));
          };
        }, $emit: function $emit(a, b) {
          var c = [],
              d,
              e = this,
              f = !1,
              l = { name: a, targetScope: e, stopPropagation: function stopPropagation() {
              f = !0;
            }, preventDefault: function preventDefault() {
              l.defaultPrevented = !0;
            }, defaultPrevented: !1 },
              h = Za([l], arguments, 1),
              k,
              q;do {
            d = e.$$listeners[a] || c;l.currentScope = e;k = 0;for (q = d.length; k < q; k++) if (d[k]) try {
              d[k].apply(null, h);
            } catch (p) {
              g(p);
            } else d.splice(k, 1), k--, q--;if (f) return l.currentScope = null, l;e = e.$parent;
          } while (e);l.currentScope = null;return l;
        }, $broadcast: function $broadcast(a, b) {
          var c = this,
              d = this,
              e = { name: a, targetScope: this, preventDefault: function preventDefault() {
              e.defaultPrevented = !0;
            }, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return e;for (var f = Za([e], arguments, 1), l, h; c = d;) {
            e.currentScope = c;d = c.$$listeners[a] || [];l = 0;for (h = d.length; l < h; l++) if (d[l]) try {
              d[l].apply(null, f);
            } catch (k) {
              g(k);
            } else d.splice(l, 1), l--, h--;if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent;
          }e.currentScope = null;return e;
        } };var v = new n(),
          m = v.$$asyncQueue = [],
          C = v.$$postDigestQueue = [],
          u = v.$$applyAsyncQueue = [];return v;
    }];
  }function Sd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/,
        a = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (a) {
      return y(a) ? (b = a, this) : b;
    };this.imgSrcSanitizationWhitelist = function (b) {
      return y(b) ? (a = b, this) : a;
    };this.$get = function () {
      return function (c, d) {
        var e = d ? a : b,
            f;f = Aa(c).href;return "" === f || f.match(e) ? c : "unsafe:" + f;
      };
    };
  }function Df(b) {
    if ("self" === b) return b;if (x(b)) {
      if (-1 < b.indexOf("***")) throw Ba("iwcard", b);b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");return new RegExp("^" + b + "$");
    }if (Va(b)) return new RegExp("^" + b.source + "$");throw Ba("imatcher");
  }function hd(b) {
    var a = [];y(b) && r(b, function (b) {
      a.push(Df(b));
    });
    return a;
  }function Te() {
    this.SCE_CONTEXTS = pa;var b = ["self"],
        a = [];this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = hd(a));return b;
    };this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = hd(b));return a;
    };this.$get = ["$injector", function (c) {
      function d(a, b) {
        return "self" === a ? Zc(b) : !!a.exec(b.href);
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
        throw Ba("unsafe");
      };c.has("$sanitize") && (f = c.get("$sanitize"));var g = e(),
          h = {};h[pa.HTML] = e(g);h[pa.CSS] = e(g);h[pa.URL] = e(g);h[pa.JS] = e(g);h[pa.RESOURCE_URL] = e(h[pa.URL]);return { trustAs: function trustAs(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw Ba("icontext", a, b);if (null === b || b === u || "" === b) return b;if ("string" !== typeof b) throw Ba("itype", a);return new c(b);
        }, getTrusted: function getTrusted(c, e) {
          if (null === e || e === u || "" === e) return e;var g = h.hasOwnProperty(c) ? h[c] : null;if (g && e instanceof g) return e.$$unwrapTrustedValue();if (c === pa.RESOURCE_URL) {
            var g = Aa(e.toString()),
                p,
                q,
                t = !1;p = 0;for (q = b.length; p < q; p++) if (d(b[p], g)) {
              t = !0;break;
            }if (t) for (p = 0, q = a.length; p < q; p++) if (d(a[p], g)) {
              t = !1;break;
            }if (t) return e;throw Ba("insecurl", e.toString());
          }if (c === pa.HTML) return f(e);throw Ba("unsafe");
        }, valueOf: function valueOf(a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a;
        } };
    }];
  }function Se() {
    var b = !0;this.enabled = function (a) {
      arguments.length && (b = !!a);return b;
    };this.$get = ["$parse", "$sceDelegate", function (a, c) {
      if (b && 8 > Ra) throw Ba("iequirks");var d = sa(pa);d.isEnabled = function () {
        return b;
      };d.trustAs = c.trustAs;d.getTrusted = c.getTrusted;d.valueOf = c.valueOf;b || (d.trustAs = d.getTrusted = function (a, b) {
        return b;
      }, d.valueOf = ra);d.parseAs = function (b, c) {
        var e = a(c);return e.literal && e.constant ? e : a(c, function (a) {
          return d.getTrusted(b, a);
        });
      };var e = d.parseAs,
          f = d.getTrusted,
          g = d.trustAs;r(pa, function (a, b) {
        var c = K(b);d[fb("parse_as_" + c)] = function (b) {
          return e(a, b);
        };d[fb("get_trusted_" + c)] = function (b) {
          return f(a, b);
        };d[fb("trust_as_" + c)] = function (b) {
          return g(a, b);
        };
      });return d;
    }];
  }function Ue() {
    this.$get = ["$window", "$document", function (b, a) {
      var c = {},
          d = aa((/android (\d+)/.exec(K((b.navigator || {}).userAgent)) || [])[1]),
          e = /Boxee/i.test((b.navigator || {}).userAgent),
          f = a[0] || {},
          g,
          h = /^(Moz|webkit|ms)(?=[A-Z])/,
          l = f.body && f.body.style,
          k = !1,
          n = !1;if (l) {
        for (var p in l) if (k = h.exec(p)) {
          g = k[0];g = g.substr(0, 1).toUpperCase() + g.substr(1);break;
        }g || (g = "WebkitOpacity" in l && "webkit");k = !!("transition" in l || g + "Transition" in l);n = !!("animation" in l || g + "Animation" in l);!d || k && n || (k = x(f.body.style.webkitTransition), n = x(f.body.style.webkitAnimation));
      }return { history: !(!b.history || !b.history.pushState || 4 > d || e), hasEvent: function hasEvent(a) {
          if ("input" === a && 11 >= Ra) return !1;if (D(c[a])) {
            var b = f.createElement("div");c[a] = "on" + a in b;
          }return c[a];
        }, csp: db(), vendorPrefix: g, transitions: k, animations: n, android: d };
    }];
  }function We() {
    this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, a, c, d) {
      function e(f, g) {
        e.totalPendingRequests++;x(f) && b.get(f) || (f = d.getTrustedResourceUrl(f));var h = a.defaults && a.defaults.transformResponse;H(h) ? h = h.filter(function (a) {
          return a !== Zb;
        }) : h === Zb && (h = null);return a.get(f, { cache: b, transformResponse: h })["finally"](function () {
          e.totalPendingRequests--;
        }).then(function (a) {
          return a.data;
        }, function (a) {
          if (!g) throw ma("tpload", f);return c.reject(a);
        });
      }e.totalPendingRequests = 0;return e;
    }];
  }function Xe() {
    this.$get = ["$rootScope", "$browser", "$location", function (b, a, c) {
      return { findBindings: function findBindings(a, b, c) {
          a = a.getElementsByClassName("ng-binding");var g = [];r(a, function (a) {
            var d = ca.element(a).data("$binding");d && r(d, function (d) {
              c ? new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)").test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a);
            });
          });return g;
        }, findModels: function findModels(a, b, c) {
          for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
            var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');if (l.length) return l;
          }
        }, getLocation: function getLocation() {
          return c.url();
        }, setLocation: function setLocation(a) {
          a !== c.url() && (c.url(a), b.$digest());
        }, whenStable: function whenStable(b) {
          a.notifyWhenNoOutstandingRequests(b);
        } };
    }];
  }function Ye() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (b, a, c, d, e) {
      function f(f, l, k) {
        var n = y(k) && !k,
            p = (n ? d : c).defer(),
            q = p.promise;l = a.defer(function () {
          try {
            p.resolve(f());
          } catch (a) {
            p.reject(a), e(a);
          } finally {
            delete g[q.$$timeoutId];
          }n || b.$apply();
        }, l);q.$$timeoutId = l;g[l] = p;return q;
      }var g = {};f.cancel = function (b) {
        return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
      };return f;
    }];
  }function Aa(b) {
    Ra && (Z.setAttribute("href", b), b = Z.href);
    Z.setAttribute("href", b);return { href: Z.href, protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "", host: Z.host, search: Z.search ? Z.search.replace(/^\?/, "") : "", hash: Z.hash ? Z.hash.replace(/^#/, "") : "", hostname: Z.hostname, port: Z.port, pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname };
  }function Zc(b) {
    b = x(b) ? Aa(b) : b;return b.protocol === id.protocol && b.host === id.host;
  }function Ze() {
    this.$get = ea(R);
  }function Ec(b) {
    function a(c, d) {
      if (L(c)) {
        var e = {};r(c, function (b, c) {
          e[c] = a(c, b);
        });return e;
      }return b.factory(c + "Filter", d);
    }this.register = a;this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];a("currency", jd);a("date", kd);a("filter", Ef);a("json", Ff);a("limitTo", Gf);a("lowercase", Hf);a("number", ld);a("orderBy", md);a("uppercase", If);
  }function Ef() {
    return function (b, a, c) {
      if (!H(b)) return b;var d;switch (null !== a ? typeof a : "null") {case "function":
          break;case "boolean":case "null":case "number":case "string":
          d = !0;case "object":
          a = Jf(a, c, d);break;default:
          return b;}return b.filter(a);
    };
  }function Jf(b, a, c) {
    var d = L(b) && "$" in b;!0 === a ? a = ia : z(a) || (a = function (a, b) {
      if (D(a)) return !1;if (null === a || null === b) return a === b;if (L(a) || L(b)) return !1;a = K("" + a);b = K("" + b);return -1 !== a.indexOf(b);
    });return function (e) {
      return d && !L(e) ? Ha(e, b.$, a, !1) : Ha(e, b, a, c);
    };
  }function Ha(_x3, _x4, _x5, _x6, _x7) {
    var _again2 = true;

    _function2: while (_again2) {
      var b = _x3,
          a = _x4,
          c = _x5,
          d = _x6,
          e = _x7;
      _again2 = false;
      var f = null !== b ? typeof b : "null",
          g = null !== a ? typeof a : "null";if ("string" === g && "!" === a.charAt(0)) return !Ha(b, a.substring(1), c, d);if (H(b)) return b.some(function (b) {
        return Ha(b, a, c, d);
      });switch (f) {case "object":
          var h;if (d) {
            for (h in b) if ("$" !== h.charAt(0) && Ha(b[h], a, c, !0)) return !0;if (e) {
              return !1;
            } else {
              _x3 = b;
              _x4 = a;
              _x5 = c;
              _x6 = !1;
              _x7 = undefined;
              _again2 = true;
              f = g = h = undefined;
              continue _function2;
            }
          }if ("object" === g) {
            for (h in a) if ((e = a[h], !z(e) && !D(e) && (f = "$" === h, !Ha(f ? b : b[h], e, c, f, f)))) return !1;return !0;
          }return c(b, a);case "function":
          return !1;default:
          return c(b, a);}
    }
  }function jd(b) {
    var a = b.NUMBER_FORMATS;return function (b, d, e) {
      D(d) && (d = a.CURRENCY_SYM);D(e) && (e = a.PATTERNS[1].maxFrac);return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
    };
  }function ld(b) {
    var a = b.NUMBER_FORMATS;return function (b, d) {
      return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
    };
  }function nd(b, a, c, d, e) {
    if (!isFinite(b) || L(b)) return "";var f = 0 > b;b = Math.abs(b);var g = b + "",
        h = "",
        l = [],
        k = !1;if (-1 !== g.indexOf("e")) {
      var n = g.match(/([\d\.]+)e(-?)(\d+)/);n && "-" == n[2] && n[3] > e + 1 ? b = 0 : (h = g, k = !0);
    }if (k) 0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h));else {
      g = (g.split(od)[1] || "").length;D(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);var g = ("" + b).split(od),
          k = g[0],
          g = g[1] || "",
          p = 0,
          q = a.lgSize,
          t = a.gSize;if (k.length >= q + t) for (p = k.length - q, n = 0; n < p; n++) 0 === (p - n) % t && 0 !== n && (h += c), h += k.charAt(n);for (n = p; n < k.length; n++) 0 === (k.length - n) % q && 0 !== n && (h += c), h += k.charAt(n);for (; g.length < e;) g += "0";e && "0" !== e && (h += d + g.substr(0, e));
    }0 === b && (f = !1);l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);return l.join("");
  }function Jb(b, a, c) {
    var d = "";0 > b && (d = "-", b = -b);for (b = "" + b; b.length < a;) b = "0" + b;c && (b = b.substr(b.length - a));return d + b;
  }function U(b, a, c, d) {
    c = c || 0;return function (e) {
      e = e["get" + b]();if (0 < c || e > -c) e += c;0 === e && -12 == c && (e = 12);return Jb(e, a, d);
    };
  }function Kb(b, a) {
    return function (c, d) {
      var e = c["get" + b](),
          f = vb(a ? "SHORT" + b : b);return d[f][e];
    };
  }function pd(b) {
    var a = new Date(b, 0, 1).getDay();return new Date(b, 0, (4 >= a ? 5 : 12) - a);
  }function qd(b) {
    return function (a) {
      var c = pd(a.getFullYear());a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;a = 1 + Math.round(a / 6048E5);return Jb(a, b);
    };
  }function hc(b, a) {
    return 0 >= b.getFullYear() ? a.ERAS[0] : a.ERAS[1];
  }function kd(b) {
    function a(a) {
      var b;if (b = a.match(c)) {
        a = new Date(0);var f = 0,
            g = 0,
            h = b[8] ? a.setUTCFullYear : a.setFullYear,
            l = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = aa(b[9] + b[10]), g = aa(b[9] + b[11]));h.call(a, aa(b[1]), aa(b[2]) - 1, aa(b[3]));f = aa(b[4] || 0) - f;g = aa(b[5] || 0) - g;h = aa(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));l.call(a, f, g, h, b);
      }return a;
    }var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, e, f) {
      var g = "",
          h = [],
          l,
          k;e = e || "mediumDate";e = b.DATETIME_FORMATS[e] || e;x(c) && (c = Kf.test(c) ? aa(c) : a(c));Y(c) && (c = new Date(c));if (!ha(c)) return c;for (; e;) (k = Lf.exec(e)) ? (h = Za(h, k, 1), e = h.pop()) : (h.push(e), e = null);f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));r(h, function (a) {
        l = Mf[a];g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });return g;
    };
  }function Ff() {
    return function (b, a) {
      D(a) && (a = 2);return ab(b, a);
    };
  }function Gf() {
    return function (b, a) {
      Y(b) && (b = b.toString());return H(b) || x(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) : aa(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : x(b) ? "" : [] : b;
    };
  }function md(b) {
    return function (a, c, d) {
      function e(a, b) {
        return b ? function (b, c) {
          return a(c, b);
        } : a;
      }function f(a) {
        switch (typeof a) {case "number":case "boolean":case "string":
            return !0;default:
            return !1;}
      }function g(a) {
        return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : "";
      }function h(a, b) {
        var c = typeof a,
            d = typeof b;c === d && "object" === c && (a = g(a), b = g(b));return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
      }if (!Ta(a)) return a;c = H(c) ? c : [c];0 === c.length && (c = ["+"]);c = c.map(function (a) {
        var c = !1,
            d = a || ra;if (x(a)) {
          if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);if ("" === a) return e(h, c);d = b(a);if (d.constant) {
            var f = d();return e(function (a, b) {
              return h(a[f], b[f]);
            }, c);
          }
        }return e(function (a, b) {
          return h(d(a), d(b));
        }, c);
      });return $a.call(a).sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);if (0 !== e) return e;
        }return 0;
      }, d));
    };
  }function Ia(b) {
    z(b) && (b = { link: b });b.restrict = b.restrict || "AC";return ea(b);
  }function rd(b, a, c, d, e) {
    var f = this,
        g = [],
        h = f.$$parentForm = b.parent().controller("form") || Lb;f.$error = {};f.$$success = {};f.$pending = u;f.$name = e(a.name || a.ngForm || "")(c);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;h.$addControl(f);f.$rollbackViewValue = function () {
      r(g, function (a) {
        a.$rollbackViewValue();
      });
    };f.$commitViewValue = function () {
      r(g, function (a) {
        a.$commitViewValue();
      });
    };f.$addControl = function (a) {
      Ma(a.$name, "input");g.push(a);a.$name && (f[a.$name] = a);
    };f.$$renameControl = function (a, b) {
      var c = a.$name;f[c] === a && delete f[c];f[b] = a;a.$name = b;
    };f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];r(f.$pending, function (b, c) {
        f.$setValidity(c, null, a);
      });r(f.$error, function (b, c) {
        f.$setValidity(c, null, a);
      });r(f.$$success, function (b, c) {
        f.$setValidity(c, null, a);
      });Ya(g, a);
    };sd({ ctrl: this, $element: b, set: function set(a, b, c) {
        var d = a[b];d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
      }, unset: function unset(a, b, c) {
        var d = a[b];
        d && (Ya(d, c), 0 === d.length && delete a[b]);
      }, parentForm: h, $animate: d });f.$setDirty = function () {
      d.removeClass(b, Sa);d.addClass(b, Mb);f.$dirty = !0;f.$pristine = !1;h.$setDirty();
    };f.$setPristine = function () {
      d.setClass(b, Sa, Mb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;r(g, function (a) {
        a.$setPristine();
      });
    };f.$setUntouched = function () {
      r(g, function (a) {
        a.$setUntouched();
      });
    };f.$setSubmitted = function () {
      d.addClass(b, "ng-submitted");f.$submitted = !0;h.$setSubmitted();
    };
  }function ic(b) {
    b.$formatters.push(function (a) {
      return b.$isEmpty(a) ? a : a.toString();
    });
  }function lb(b, a, c, d, e, f) {
    var g = K(a[0].type);if (!e.android) {
      var h = !1;a.on("compositionstart", function (a) {
        h = !0;
      });a.on("compositionend", function () {
        h = !1;l();
      });
    }var l = function l(b) {
      k && (f.defer.cancel(k), k = null);if (!h) {
        var e = a.val();b = b && b.type;"password" === g || c.ngTrim && "false" === c.ngTrim || (e = N(e));(d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b);
      }
    };if (e.hasEvent("input")) a.on("input", l);else {
      var k,
          n = function n(a, b, c) {
        k || (k = f.defer(function () {
          k = null;b && b.value === c || l(a);
        }));
      };
      a.on("keydown", function (a) {
        var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || n(a, this, this.value);
      });if (e.hasEvent("paste")) a.on("paste cut", n);
    }a.on("change", l);d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue);
    };
  }function Nb(b, a) {
    return function (c, d) {
      var e, f;if (ha(c)) return c;if (x(c)) {
        '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));if (Nf.test(c)) return new Date(c);b.lastIndex = 0;if (e = b.exec(c)) return e.shift(), f = d ? { yyyy: d.getFullYear(), MM: d.getMonth() + 1,
          dd: d.getDate(), HH: d.getHours(), mm: d.getMinutes(), ss: d.getSeconds(), sss: d.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, r(e, function (b, c) {
          c < a.length && (f[a[c]] = +b);
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
      }return NaN;
    };
  }function mb(b, a, c, d) {
    return function (e, f, g, h, l, k, n) {
      function p(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }function q(a) {
        return y(a) ? ha(a) ? a : c(a) : u;
      }td(e, f, g, h);lb(e, f, g, h, l, k);var t = h && h.$options && h.$options.timezone,
          s;h.$$parserName = b;
      h.$parsers.push(function (b) {
        return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, s), "UTC" === t && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : u;
      });h.$formatters.push(function (a) {
        if (a && !ha(a)) throw nb("datefmt", a);if (p(a)) {
          if ((s = a) && "UTC" === t) {
            var b = 6E4 * s.getTimezoneOffset();s = new Date(s.getTime() + b);
          }return n("date")(a, d, t);
        }s = null;return "";
      });if (y(g.min) || g.ngMin) {
        var r;h.$validators.min = function (a) {
          return !p(a) || D(r) || c(a) >= r;
        };g.$observe("min", function (a) {
          r = q(a);h.$validate();
        });
      }if (y(g.max) || g.ngMax) {
        var v;
        h.$validators.max = function (a) {
          return !p(a) || D(v) || c(a) <= v;
        };g.$observe("max", function (a) {
          v = q(a);h.$validate();
        });
      }
    };
  }function td(b, a, c, d) {
    (d.$$hasNativeValidators = L(a[0].validity)) && d.$parsers.push(function (b) {
      var c = a.prop("validity") || {};return c.badInput && !c.typeMismatch ? u : b;
    });
  }function ud(b, a, c, d, e) {
    if (y(d)) {
      b = b(d);if (!b.constant) throw nb("constexpr", c, d);return b(a);
    }return e;
  }function jc(b, a) {
    b = "ngClass" + b;return ["$animate", function (c) {
      function d(a, b) {
        var c = [],
            d = 0;a: for (; d < a.length; d++) {
          for (var e = a[d], n = 0; n < b.length; n++) if (e == b[n]) continue a;c.push(e);
        }return c;
      }function e(a) {
        if (!H(a)) {
          if (x(a)) return a.split(" ");if (L(a)) {
            var b = [];r(a, function (a, c) {
              a && (b = b.concat(c.split(" ")));
            });return b;
          }
        }return a;
      }return { restrict: "AC", link: function link(f, g, h) {
          function l(a, b) {
            var c = g.data("$classCounts") || {},
                d = [];r(a, function (a) {
              if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
            });g.data("$classCounts", c);return d.join(" ");
          }function k(b) {
            if (!0 === a || f.$index % 2 === a) {
              var k = e(b || []);if (!n) {
                var t = l(k, 1);h.$addClass(t);
              } else if (!ia(b, n)) {
                var s = e(n),
                    t = d(k, s),
                    k = d(s, k),
                    t = l(t, 1),
                    k = l(k, -1);t && t.length && c.addClass(g, t);k && k.length && c.removeClass(g, k);
              }
            }n = sa(b);
          }var n;f.$watch(h[b], k, !0);h.$observe("class", function (a) {
            k(f.$eval(h[b]));
          });"ngClass" !== b && f.$watch("$index", function (c, d) {
            var g = c & 1;if (g !== (d & 1)) {
              var k = e(f.$eval(h[b]));g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g));
            }
          });
        } };
    }];
  }function sd(b) {
    function a(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
    }function c(b, c) {
      b = b ? "-" + uc(b, "-") : "";
      a(ob + b, !0 === c);a(vd + b, !1 === c);
    }var d = b.ctrl,
        e = b.$element,
        f = {},
        g = b.set,
        h = b.unset,
        l = b.parentForm,
        k = b.$animate;f[vd] = !(f[ob] = e.hasClass(ob));d.$setValidity = function (b, e, f) {
      e === u ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = u));Xa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));d.$pending ? (a(xd, !0), d.$valid = d.$invalid = u, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));e = d.$pending && d.$pending[b] ? u : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;c(b, e);l.$setValidity(b, e, d);
    };
  }function wd(b) {
    if (b) for (var a in b) return !1;return !0;
  }var Of = /^\/(.+)\/([a-z]*)$/,
      K = function K(b) {
    return x(b) ? b.toLowerCase() : b;
  },
      sc = Object.prototype.hasOwnProperty,
      vb = function vb(b) {
    return x(b) ? b.toUpperCase() : b;
  },
      Ra,
      B,
      ta,
      $a = [].slice,
      qf = [].splice,
      Pf = [].push,
      Ca = Object.prototype.toString,
      Ja = S("ng"),
      ca = R.angular || (R.angular = {}),
      eb,
      rb = 0;Ra = W.documentMode;A.$inject = [];ra.$inject = [];var H = Array.isArray,
      N = function N(b) {
    return x(b) ? b.trim() : b;
  },
      gd = function gd(b) {
    return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  },
      db = function db() {
    if (y(db.isActive_)) return db.isActive_;var b = !(!W.querySelector("[ng-csp]") && !W.querySelector("[data-ng-csp]"));if (!b) try {
      new Function("");
    } catch (a) {
      b = !0;
    }return db.isActive_ = b;
  },
      tb = ["ng-", "data-ng-", "ng:", "x-ng-"],
      Md = /[A-Z]/g,
      vc = !1,
      Qb,
      qa = 1,
      bb = 3,
      Qd = { full: "1.3.20", major: 1, minor: 3, dot: 20, codeName: "shallow-translucence" };T.expando = "ng339";var Ab = T.cache = {},
      hf = 1;T._data = function (b) {
    return this.cache[b[this.expando]] || {};
  };var cf = /([\:\-\_]+(.))/g,
      df = /^moz([A-Z])/,
      Qf = { mouseleave: "mouseout", mouseenter: "mouseover" },
      Tb = S("jqLite"),
      gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      Sb = /<|&#?\w+;/,
      ef = /<([\w:]+)/,
      ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ka = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ka.optgroup = ka.option;ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead;ka.th = ka.td;var Ka = T.prototype = { ready: function ready(b) {
      function a() {
        c || (c = !0, b());
      }var c = !1;"complete" === W.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), T(R).on("load", a));
    }, toString: function toString() {
      var b = [];r(this, function (a) {
        b.push("" + a);
      });return "[" + b.join(", ") + "]";
    }, eq: function eq(b) {
      return 0 <= b ? B(this[b]) : B(this[this.length + b]);
    }, length: 0, push: Pf, sort: [].sort,
    splice: [].splice },
      Fb = {};r("multiple selected checked disabled readOnly required open".split(" "), function (b) {
    Fb[K(b)] = b;
  });var Nc = {};r("input select option textarea button form details".split(" "), function (b) {
    Nc[b] = !0;
  });var Oc = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern" };r({ data: Vb, removeData: yb }, function (b, a) {
    T[a] = b;
  });r({ data: Vb, inheritedData: Eb, scope: function scope(b) {
      return B.data(b, "$scope") || Eb(b.parentNode || b, ["$isolateScope", "$scope"]);
    }, isolateScope: function isolateScope(b) {
      return B.data(b, "$isolateScope") || B.data(b, "$isolateScopeNoTemplate");
    }, controller: Jc, injector: function injector(b) {
      return Eb(b, "$injector");
    }, removeAttr: function removeAttr(b, a) {
      b.removeAttribute(a);
    }, hasClass: Bb, css: function css(b, a, c) {
      a = fb(a);if (y(c)) b.style[a] = c;else return b.style[a];
    }, attr: function attr(b, a, c) {
      var d = b.nodeType;if (d !== bb && 2 !== d && 8 !== d) if ((d = K(a), Fb[d])) if (y(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));else return b[a] || (b.attributes.getNamedItem(a) || A).specified ? d : u;else if (y(c)) b.setAttribute(a, c);else if (b.getAttribute) return b = b.getAttribute(a, 2), null === b ? u : b;
    }, prop: function prop(b, a, c) {
      if (y(c)) b[a] = c;else return b[a];
    }, text: (function () {
      function b(a, b) {
        if (D(b)) {
          var d = a.nodeType;return d === qa || d === bb ? a.textContent : "";
        }a.textContent = b;
      }b.$dv = "";return b;
    })(), val: function val(b, a) {
      if (D(a)) {
        if (b.multiple && "select" === wa(b)) {
          var c = [];r(b.options, function (a) {
            a.selected && c.push(a.value || a.text);
          });return 0 === c.length ? null : c;
        }return b.value;
      }b.value = a;
    }, html: function html(b, a) {
      if (D(a)) return b.innerHTML;xb(b, !0);b.innerHTML = a;
    }, empty: Kc }, function (b, a) {
    T.prototype[a] = function (a, d) {
      var e,
          f,
          g = this.length;if (b !== Kc && (2 == b.length && b !== Bb && b !== Jc ? a : d) === u) {
        if (L(a)) {
          for (e = 0; e < g; e++) if (b === Vb) b(this[e], a);else for (f in a) b(this[e], f, a[f]);return this;
        }e = b.$dv;g = e === u ? Math.min(g, 1) : g;for (f = 0; f < g; f++) {
          var h = b(this[f], a, d);e = e ? e + h : h;
        }return e;
      }for (e = 0; e < g; e++) b(this[e], a, d);return this;
    };
  });r({ removeData: yb, on: function a(c, d, e, f) {
      if (y(f)) throw Tb("onargs");if (Fc(c)) {
        var g = zb(c, !0);f = g.events;var h = g.handle;h || (h = g.handle = lf(c, f));for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d], l = g.length; l--;) {
          d = g[l];var k = f[d];k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Qf[d], function (a) {
            var c = a.relatedTarget;c && (c === this || this.contains(c)) || h(a, d);
          }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);k.push(e);
        }
      }
    }, off: Ic, one: function one(a, c, d) {
      a = B(a);a.on(c, function f() {
        a.off(c, d);a.off(c, f);
      });a.on(c, d);
    }, replaceWith: function replaceWith(a, c) {
      var d,
          e = a.parentNode;xb(a);r(new T(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);d = c;
      });
    }, children: function children(a) {
      var c = [];r(a.childNodes, function (a) {
        a.nodeType === qa && c.push(a);
      });return c;
    }, contents: function contents(a) {
      return a.contentDocument || a.childNodes || [];
    }, append: function append(a, c) {
      var d = a.nodeType;if (d === qa || 11 === d) {
        c = new T(c);for (var d = 0, e = c.length; d < e; d++) a.appendChild(c[d]);
      }
    }, prepend: function prepend(a, c) {
      if (a.nodeType === qa) {
        var d = a.firstChild;r(new T(c), function (c) {
          a.insertBefore(c, d);
        });
      }
    }, wrap: function wrap(a, c) {
      c = B(c).eq(0).clone()[0];var d = a.parentNode;d && d.replaceChild(c, a);c.appendChild(a);
    }, remove: Lc, detach: function detach(a) {
      Lc(a, !0);
    }, after: function after(a, c) {
      var d = a,
          e = a.parentNode;c = new T(c);for (var f = 0, g = c.length; f < g; f++) {
        var h = c[f];e.insertBefore(h, d.nextSibling);d = h;
      }
    }, addClass: Db, removeClass: Cb, toggleClass: function toggleClass(a, c, d) {
      c && r(c.split(" "), function (c) {
        var f = d;D(f) && (f = !Bb(a, c));(f ? Db : Cb)(a, c);
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
          g = c.type || c,
          h = zb(a);if (h = (h = h && h.events) && h[g]) e = { preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        }, isDefaultPrevented: function isDefaultPrevented() {
          return !0 === this.defaultPrevented;
        }, stopImmediatePropagation: function stopImmediatePropagation() {
          this.immediatePropagationStopped = !0;
        }, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
          return !0 === this.immediatePropagationStopped;
        }, stopPropagation: A, type: g, target: a }, c.type && (e = w(e, c)), c = sa(h), f = d ? [e].concat(d) : [e], r(c, function (c) {
        e.isImmediatePropagationStopped() || c.apply(a, f);
      });
    } }, function (a, c) {
    T.prototype[c] = function (c, e, f) {
      for (var g, h = 0, l = this.length; h < l; h++) D(g) ? (g = a(this[h], c, e, f), y(g) && (g = B(g))) : Hc(g, a(this[h], c, e, f));return y(g) ? g : this;
    };T.prototype.bind = T.prototype.on;T.prototype.unbind = T.prototype.off;
  });gb.prototype = { put: function put(a, c) {
      this[Na(a, this.nextUid)] = c;
    }, get: function get(a) {
      return this[Na(a, this.nextUid)];
    }, remove: function remove(a) {
      var c = this[a = Na(a, this.nextUid)];delete this[a];return c;
    } };var Qc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
      Rf = /,/,
      Sf = /^\s*(_?)(\S+?)\1\s*$/,
      Pc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      Fa = S("$injector");
  cb.$$annotate = function (a, c, d) {
    var e;if ("function" === typeof a) {
      if (!(e = a.$inject)) {
        e = [];if (a.length) {
          if (c) throw (x(d) && d || (d = a.name || mf(a)), Fa("strictdi", d));c = a.toString().replace(Pc, "");c = c.match(Qc);r(c[1].split(Rf), function (a) {
            a.replace(Sf, function (a, c, d) {
              e.push(d);
            });
          });
        }a.$inject = e;
      }
    } else H(a) ? (c = a.length - 1, La(a[c], "fn"), e = a.slice(0, c)) : La(a, "fn", !0);return e;
  };var Tf = S("$animate"),
      Ce = ["$provide", function (a) {
    this.$$selectors = {};this.register = function (c, d) {
      var e = c + "-animation";if (c && "." != c.charAt(0)) throw Tf("notcsel", c);this.$$selectors[c.substr(1)] = e;a.factory(e, d);
    };this.classNameFilter = function (a) {
      1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);return this.$$classNameFilter;
    };this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (a, d, e) {
      function f(d) {
        var f,
            g = a.defer();g.promise.$$cancelFn = function () {
          f && f();
        };e.$$postDigest(function () {
          f = d(function () {
            g.resolve();
          });
        });return g.promise;
      }function g(a, c) {
        var d = [],
            e = [],
            f = ja();r((a.attr("class") || "").split(/\s+/), function (a) {
          f[a] = !0;
        });r(c, function (a, c) {
          var g = f[c];!1 === a && g ? e.push(c) : !0 !== a || g || d.push(c);
        });return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null];
      }function h(a, c, d) {
        for (var e = 0, f = c.length; e < f; ++e) a[c[e]] = d;
      }function l() {
        n || (n = a.defer(), d(function () {
          n.resolve();n = null;
        }));return n.promise;
      }function k(a, c) {
        if (ca.isObject(c)) {
          var d = w(c.from || {}, c.to || {});a.css(d);
        }
      }var n;return { animate: function animate(a, c, d) {
          k(a, { from: c, to: d });return l();
        }, enter: function enter(a, c, d, e) {
          k(a, e);d ? d.after(a) : c.prepend(a);return l();
        }, leave: function leave(a, c) {
          k(a, c);a.remove();
          return l();
        }, move: function move(a, c, d, e) {
          return this.enter(a, c, d, e);
        }, addClass: function addClass(a, c, d) {
          return this.setClass(a, c, [], d);
        }, $$addClassImmediately: function $$addClassImmediately(a, c, d) {
          a = B(a);c = x(c) ? c : H(c) ? c.join(" ") : "";r(a, function (a) {
            Db(a, c);
          });k(a, d);return l();
        }, removeClass: function removeClass(a, c, d) {
          return this.setClass(a, [], c, d);
        }, $$removeClassImmediately: function $$removeClassImmediately(a, c, d) {
          a = B(a);c = x(c) ? c : H(c) ? c.join(" ") : "";r(a, function (a) {
            Cb(a, c);
          });k(a, d);return l();
        }, setClass: function setClass(a, c, d, e) {
          var k = this,
              l = !1;a = B(a);var m = a.data("$$animateClasses");
          m ? e && m.options && (m.options = ca.extend(m.options || {}, e)) : (m = { classes: {}, options: e }, l = !0);e = m.classes;c = H(c) ? c : c.split(" ");d = H(d) ? d : d.split(" ");h(e, c, !0);h(e, d, !1);l && (m.promise = f(function (c) {
            var d = a.data("$$animateClasses");a.removeData("$$animateClasses");if (d) {
              var e = g(a, d.classes);e && k.$$setClassImmediately(a, e[0], e[1], d.options);
            }c();
          }), a.data("$$animateClasses", m));return m.promise;
        }, $$setClassImmediately: function $$setClassImmediately(a, c, d, e) {
          c && this.$$addClassImmediately(a, c);d && this.$$removeClassImmediately(a, d);
          k(a, e);return l();
        }, enabled: A, cancel: A };
    }];
  }],
      ma = S("$compile");xc.$inject = ["$provide", "$$sanitizeUriProvider"];var Rc = /^((?:x|data)[\:\-_])/i,
      rf = S("$controller"),
      Vc = "application/json",
      $b = { "Content-Type": Vc + ";charset=utf-8" },
      tf = /^\[|^\{(?!\{)/,
      uf = { "[": /]$/, "{": /}$/ },
      sf = /^\)\]\}',?\n/,
      ac = S("$interpolate"),
      Uf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      xf = { http: 80, https: 443, ftp: 21 },
      Hb = S("$location"),
      Vf = { $$html5: !1, $$replace: !1, absUrl: Ib("$$absUrl"), url: function url(a) {
      if (D(a)) return this.$$url;var c = Uf.exec(a);(c[1] || "" === a) && this.path(decodeURIComponent(c[1]));(c[2] || c[1] || "" === a) && this.search(c[3] || "");this.hash(c[5] || "");return this;
    }, protocol: Ib("$$protocol"), host: Ib("$$host"), port: Ib("$$port"), path: cd("$$path", function (a) {
      a = null !== a ? a.toString() : "";return "/" == a.charAt(0) ? a : "/" + a;
    }), search: function search(a, c) {
      switch (arguments.length) {case 0:
          return this.$$search;case 1:
          if (x(a) || Y(a)) a = a.toString(), this.$$search = rc(a);else if (L(a)) a = Da(a, {}), r(a, function (c, e) {
            null == c && delete a[e];
          }), this.$$search = a;else throw Hb("isrcharg");
          break;default:
          D(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;}this.$$compose();return this;
    }, hash: cd("$$hash", function (a) {
      return null !== a ? a.toString() : "";
    }), replace: function replace() {
      this.$$replace = !0;return this;
    } };r([bd, dc, cc], function (a) {
    a.prototype = Object.create(Vf);a.prototype.state = function (c) {
      if (!arguments.length) return this.$$state;if (a !== cc || !this.$$html5) throw Hb("nostate");this.$$state = D(c) ? null : c;return this;
    };
  });var ga = S("$parse"),
      Wf = Function.prototype.call,
      Xf = Function.prototype.apply,
      Yf = Function.prototype.bind,
      pb = ja();r({ "null": function _null() {
      return null;
    }, "true": function _true() {
      return !0;
    }, "false": function _false() {
      return !1;
    }, undefined: function undefined() {} }, function (a, c) {
    a.constant = a.literal = a.sharedGetter = !0;pb[c] = a;
  });pb["this"] = function (a) {
    return a;
  };pb["this"].sharedGetter = !0;var qb = w(ja(), { "+": function _(a, c, d, e) {
      d = d(a, c);e = e(a, c);return y(d) ? y(e) ? d + e : d : y(e) ? e : u;
    }, "-": function _(a, c, d, e) {
      d = d(a, c);e = e(a, c);return (y(d) ? d : 0) - (y(e) ? e : 0);
    }, "*": function _(a, c, d, e) {
      return d(a, c) * e(a, c);
    }, "/": function _(a, c, d, e) {
      return d(a, c) / e(a, c);
    }, "%": function _(a, c, d, e) {
      return d(a, c) % e(a, c);
    }, "===": function _(a, c, d, e) {
      return d(a, c) === e(a, c);
    }, "!==": function _(a, c, d, e) {
      return d(a, c) !== e(a, c);
    }, "==": function _(a, c, d, e) {
      return d(a, c) == e(a, c);
    }, "!=": function _(a, c, d, e) {
      return d(a, c) != e(a, c);
    }, "<": function _(a, c, d, e) {
      return d(a, c) < e(a, c);
    }, ">": function _(a, c, d, e) {
      return d(a, c) > e(a, c);
    }, "<=": function _(a, c, d, e) {
      return d(a, c) <= e(a, c);
    }, ">=": function _(a, c, d, e) {
      return d(a, c) >= e(a, c);
    }, "&&": function _(a, c, d, e) {
      return d(a, c) && e(a, c);
    }, "||": function _(a, c, d, e) {
      return d(a, c) || e(a, c);
    }, "!": function _(a, c, d) {
      return !d(a, c);
    }, "=": !0, "|": !0 }),
      Zf = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
      gc = function gc(a) {
    this.options = a;
  };gc.prototype = { constructor: gc, lex: function lex(a) {
      this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) if ((a = this.text.charAt(this.index), '"' === a || "'" === a)) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdent(a)) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index,
        text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
        var c = a + this.peek(),
            d = c + this.peek(2),
            e = qb[c],
            f = qb[d];qb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
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
      d = d || this.index;c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;throw ga("lexerr", a, c, this.text);
    }, readNumber: function readNumber() {
      for (var a = "", c = this.index; this.index < this.text.length;) {
        var d = K(this.text.charAt(this.index));
        if ("." == d || this.isNumber(d)) a += d;else {
          var e = this.peek();if ("e" == d && this.isExpOperator(e)) a += d;else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
        }this.index++;
      }this.tokens.push({ index: c, text: a, constant: !0, value: Number(a) });
    }, readIdent: function readIdent() {
      for (var a = this.index; this.index < this.text.length;) {
        var c = this.text.charAt(this.index);if (!this.isIdent(c) && !this.isNumber(c)) break;this.index++;
      }this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
    }, readString: function readString(a) {
      var c = this.index;this.index++;for (var d = "", e = a, f = !1; this.index < this.text.length;) {
        var g = this.text.charAt(this.index),
            e = e + g;if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Zf[g] || g, f = !1;else if ("\\" === g) f = !0;else {
          if (g === a) {
            this.index++;this.tokens.push({ index: c, text: e, constant: !0, value: d });return;
          }d += g;
        }this.index++;
      }this.throwError("Unterminated quote", c);
    } };var kb = function kb(a, c, d) {
    this.lexer = a;this.$filter = c;this.options = d;
  };kb.ZERO = w(function () {
    return 0;
  }, { sharedGetter: !0, constant: !0 });kb.prototype = { constructor: kb, parse: function parse(a) {
      this.text = a;this.tokens = this.lexer.lex(a);a = this.statements();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);a.literal = !!a.literal;a.constant = !!a.constant;
      return a;
    }, primary: function primary() {
      var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in pb ? a = pb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");return a;
    }, throwError: function throwError(a, c) {
      throw ga("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    }, peekToken: function peekToken() {
      if (0 === this.tokens.length) throw ga("ueoe", this.text);return this.tokens[0];
    }, peek: function peek(a, c, d, e) {
      return this.peekAhead(0, a, c, d, e);
    }, peekAhead: function peekAhead(a, c, d, e, f) {
      if (this.tokens.length > a) {
        a = this.tokens[a];var g = a.text;if (g === c || g === d || g === e || g === f || !(c || d || e || f)) return a;
      }return !1;
    }, expect: function expect(a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
    }, consume: function consume(a) {
      if (0 === this.tokens.length) throw ga("ueoe", this.text);var c = this.expect(a);c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return c;
    }, unaryFn: function unaryFn(a, c) {
      var d = qb[a];return w(function (a, f) {
        return d(a, f, c);
      }, { constant: c.constant, inputs: [c] });
    }, binaryFn: function binaryFn(a, c, d, e) {
      var f = qb[c];return w(function (c, e) {
        return f(c, e, a, d);
      }, { constant: a.constant && d.constant, inputs: !e && [a, d] });
    }, identifier: function identifier() {
      for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) a += this.consume().text + this.consume().text;return zf(a, this.options, this.text);
    }, constant: function constant() {
      var a = this.consume().value;return w(function () {
        return a;
      }, { constant: !0, literal: !0 });
    }, statements: function statements() {
      for (var a = [];;) if ((0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))) return 1 === a.length ? a[0] : function (c, d) {
        for (var e, f = 0, g = a.length; f < g; f++) e = a[f](c, d);return e;
      };
    },
    filterChain: function filterChain() {
      for (var a = this.expression(); this.expect("|");) a = this.filter(a);return a;
    }, filter: function filter(a) {
      var c = this.$filter(this.consume().text),
          d,
          e;if (this.peek(":")) for (d = [], e = []; this.expect(":");) d.push(this.expression());var f = [a].concat(d || []);return w(function (f, h) {
        var l = a(f, h);if (e) {
          e[0] = l;for (l = d.length; l--;) e[l + 1] = d[l](f, h);return c.apply(u, e);
        }return c(l);
      }, { constant: !c.$stateful && f.every(ec), inputs: !c.$stateful && f });
    }, expression: function expression() {
      return this.assignment();
    }, assignment: function assignment() {
      var a = this.ternary(),
          c,
          d;return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), w(function (d, f) {
        return a.assign(d, c(d, f), f);
      }, { inputs: [a, c] })) : a;
    }, ternary: function ternary() {
      var a = this.logicalOR(),
          c;if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
        var d = this.assignment();return w(function (e, f) {
          return a(e, f) ? c(e, f) : d(e, f);
        }, { constant: a.constant && c.constant && d.constant });
      }return a;
    }, logicalOR: function logicalOR() {
      for (var a = this.logicalAND(), c; c = this.expect("||");) a = this.binaryFn(a, c.text, this.logicalAND(), !0);return a;
    }, logicalAND: function logicalAND() {
      for (var a = this.equality(), c; c = this.expect("&&");) a = this.binaryFn(a, c.text, this.equality(), !0);return a;
    }, equality: function equality() {
      for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");) a = this.binaryFn(a, c.text, this.relational());return a;
    }, relational: function relational() {
      for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");) a = this.binaryFn(a, c.text, this.additive());return a;
    },
    additive: function additive() {
      for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = this.binaryFn(a, c.text, this.multiplicative());return a;
    }, multiplicative: function multiplicative() {
      for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = this.binaryFn(a, c.text, this.unary());return a;
    }, unary: function unary() {
      var a;return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(kb.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary();
    }, fieldAccess: function fieldAccess(a) {
      var c = this.identifier();
      return w(function (d, e, f) {
        d = f || a(d, e);return null == d ? u : c(d);
      }, { assign: function assign(d, e, f) {
          var g = a(d, f);g || a.assign(d, g = {}, f);return c.assign(g, e);
        } });
    }, objectIndex: function objectIndex(a) {
      var c = this.text,
          d = this.expression();this.consume("]");return w(function (e, f) {
        var g = a(e, f),
            h = dd(d(e, f), c);va(h, c);return g ? oa(g[h], c) : u;
      }, { assign: function assign(e, f, g) {
          var h = va(dd(d(e, g), c), c),
              l = oa(a(e, g), c);l || a.assign(e, l = {}, g);return l[h] = f;
        } });
    }, functionCall: function functionCall(a, c) {
      var d = [];if (")" !== this.peekToken().text) {
        do d.push(this.expression()); while (this.expect(","));
      }this.consume(")");var e = this.text,
          f = d.length ? [] : null;return function (g, h) {
        var l = c ? c(g, h) : y(c) ? u : g,
            k = a(g, h, l) || A;if (f) for (var n = d.length; n--;) f[n] = oa(d[n](g, h), e);oa(l, e);if (k) {
          if (k.constructor === k) throw ga("isecfn", e);if (k === Wf || k === Xf || k === Yf) throw ga("isecff", e);
        }l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);f && (f.length = 0);return oa(l, e);
      };
    }, arrayDeclaration: function arrayDeclaration() {
      var a = [];if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]")) break;a.push(this.expression());
        } while (this.expect(","));
      }this.consume("]");return w(function (c, d) {
        for (var e = [], f = 0, g = a.length; f < g; f++) e.push(a[f](c, d));return e;
      }, { literal: !0, constant: a.every(ec), inputs: a });
    }, object: function object() {
      var a = [],
          c = [];if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;var d = this.consume();d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);this.consume(":");c.push(this.expression());
        } while (this.expect(","));
      }this.consume("}");return w(function (d, f) {
        for (var g = {}, h = 0, l = c.length; h < l; h++) g[a[h]] = c[h](d, f);return g;
      }, { literal: !0, constant: c.every(ec), inputs: c });
    } };var Bf = ja(),
      Af = ja(),
      Cf = Object.prototype.valueOf,
      Ba = S("$sce"),
      pa = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
      ma = S("$compile"),
      Z = W.createElement("a"),
      id = Aa(R.location.href);Ec.$inject = ["$provide"];jd.$inject = ["$locale"];ld.$inject = ["$locale"];var od = ".",
      Mf = { yyyy: U("FullYear", 4), yy: U("FullYear", 2, 0, !0), y: U("FullYear", 1), MMMM: Kb("Month"), MMM: Kb("Month", !0), MM: U("Month", 2, 1), M: U("Month", 1, 1), dd: U("Date", 2), d: U("Date", 1), HH: U("Hours", 2), H: U("Hours", 1), hh: U("Hours", 2, -12), h: U("Hours", 1, -12), mm: U("Minutes", 2), m: U("Minutes", 1), ss: U("Seconds", 2), s: U("Seconds", 1), sss: U("Milliseconds", 3), EEEE: Kb("Day"), EEE: Kb("Day", !0), a: function a(_a2, c) {
      return 12 > _a2.getHours() ? c.AMPMS[0] : c.AMPMS[1];
    }, Z: function Z(a) {
      a = -1 * a.getTimezoneOffset();return a = (0 <= a ? "+" : "") + (Jb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Jb(Math.abs(a % 60), 2));
    }, ww: qd(2), w: qd(1), G: hc, GG: hc, GGG: hc, GGGG: function GGGG(a, c) {
      return 0 >= a.getFullYear() ? c.ERANAMES[0] : c.ERANAMES[1];
    } },
      Lf = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      Kf = /^\-?\d+$/;kd.$inject = ["$locale"];var Hf = ea(K),
      If = ea(vb);md.$inject = ["$parse"];var Td = ea({ restrict: "E", compile: function compile(a, c) {
      if (!c.href && !c.xlinkHref && !c.name) return function (a, c) {
        if ("a" === c[0].nodeName.toLowerCase()) {
          var f = "[object SVGAnimatedString]" === Ca.call(c.prop("href")) ? "xlink:href" : "href";c.on("click", function (a) {
            c.attr(f) || a.preventDefault();
          });
        }
      };
    } }),
      wb = {};r(Fb, function (a, c) {
    if ("multiple" != a) {
      var d = ya("ng-" + c);wb[d] = function () {
        return { restrict: "A", priority: 100, link: function link(a, f, g) {
            a.$watch(g[d], function (a) {
              g.$set(c, !!a);
            });
          } };
      };
    }
  });r(Oc, function (a, c) {
    wb[c] = function () {
      return { priority: 100, link: function link(a, e, f) {
          if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Of))) {
            f.$set("ngPattern", new RegExp(e[1], e[2]));return;
          }a.$watch(f[c], function (a) {
            f.$set(c, a);
          });
        } };
    };
  });r(["src", "srcset", "href"], function (a) {
    var c = ya("ng-" + a);wb[c] = function () {
      return { priority: 99, link: function link(d, e, f) {
          var g = a,
              h = a;"href" === a && "[object SVGAnimatedString]" === Ca.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);f.$observe(c, function (c) {
            c ? (f.$set(h, c), Ra && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null);
          });
        } };
    };
  });var Lb = { $addControl: A, $$renameControl: function $$renameControl(a, c) {
      a.$name = c;
    }, $removeControl: A, $setValidity: A, $setDirty: A, $setPristine: A, $setSubmitted: A };rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];var yd = function yd(a) {
    return ["$timeout", function (c) {
      return { name: "form", restrict: a ? "EAC" : "E", controller: rd, compile: function compile(d, e) {
          d.addClass(Sa).addClass(ob);var f = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, k) {
              if (!("action" in e)) {
                var n = function n(c) {
                  a.$apply(function () {
                    k.$commitViewValue();k.$setSubmitted();
                  });c.preventDefault();
                };d[0].addEventListener("submit", n, !1);d.on("$destroy", function () {
                  c(function () {
                    d[0].removeEventListener("submit", n, !1);
                  }, 0, !1);
                });
              }var p = k.$$parentForm;f && (jb(a, null, k.$name, k, k.$name), e.$observe(f, function (c) {
                k.$name !== c && (jb(a, null, k.$name, u, k.$name), p.$$renameControl(k, c), jb(a, null, k.$name, k, k.$name));
              }));d.on("$destroy", function () {
                p.$removeControl(k);
                f && jb(a, null, e[f], u, k.$name);w(k, Lb);
              });
            } };
        } };
    }];
  },
      Ud = yd(),
      ge = yd(!0),
      Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
      $f = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
      ag = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      bg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
      zd = /^(\d{4})-(\d{2})-(\d{2})$/,
      Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      kc = /^(\d{4})-W(\d\d)$/,
      Bd = /^(\d{4})-(\d\d)$/,
      Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Dd = { text: function text(a, c, d, e, f, g) {
      lb(a, c, d, e, f, g);ic(e);
    }, date: mb("date", zd, Nb(zd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": mb("datetimelocal", Ad, Nb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: mb("time", Cd, Nb(Cd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: mb("week", kc, function (a, c) {
      if (ha(a)) return a;if (x(a)) {
        kc.lastIndex = 0;var d = kc.exec(a);if (d) {
          var e = +d[1],
              f = +d[2],
              g = d = 0,
              h = 0,
              l = 0,
              k = pd(e),
              f = 7 * (f - 1);c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());return new Date(e, 0, k.getDate() + f, d, g, h, l);
        }
      }return NaN;
    }, "yyyy-Www"), month: mb("month", Bd, Nb(Bd, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, c, d, e, f, g) {
      td(a, c, d, e);lb(a, c, d, e, f, g);e.$$parserName = "number";e.$parsers.push(function (a) {
        return e.$isEmpty(a) ? null : bg.test(a) ? parseFloat(a) : u;
      });e.$formatters.push(function (a) {
        if (!e.$isEmpty(a)) {
          if (!Y(a)) throw nb("numfmt", a);a = a.toString();
        }return a;
      });if (y(d.min) || d.ngMin) {
        var h;e.$validators.min = function (a) {
          return e.$isEmpty(a) || D(h) || a >= h;
        };d.$observe("min", function (a) {
          y(a) && !Y(a) && (a = parseFloat(a, 10));h = Y(a) && !isNaN(a) ? a : u;e.$validate();
        });
      }if (y(d.max) || d.ngMax) {
        var l;e.$validators.max = function (a) {
          return e.$isEmpty(a) || D(l) || a <= l;
        };d.$observe("max", function (a) {
          y(a) && !Y(a) && (a = parseFloat(a, 10));l = Y(a) && !isNaN(a) ? a : u;e.$validate();
        });
      }
    }, url: function url(a, c, d, e, f, g) {
      lb(a, c, d, e, f, g);ic(e);e.$$parserName = "url";e.$validators.url = function (a, c) {
        var d = a || c;return e.$isEmpty(d) || $f.test(d);
      };
    }, email: function email(a, c, d, e, f, g) {
      lb(a, c, d, e, f, g);ic(e);
      e.$$parserName = "email";e.$validators.email = function (a, c) {
        var d = a || c;return e.$isEmpty(d) || ag.test(d);
      };
    }, radio: function radio(a, c, d, e) {
      D(d.name) && c.attr("name", ++rb);c.on("click", function (a) {
        c[0].checked && e.$setViewValue(d.value, a && a.type);
      });e.$render = function () {
        c[0].checked = d.value == e.$viewValue;
      };d.$observe("value", e.$render);
    }, checkbox: function checkbox(a, c, d, e, f, g, h, l) {
      var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0),
          n = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);c.on("click", function (a) {
        e.$setViewValue(c[0].checked, a && a.type);
      });e.$render = function () {
        c[0].checked = e.$viewValue;
      };e.$isEmpty = function (a) {
        return !1 === a;
      };e.$formatters.push(function (a) {
        return ia(a, k);
      });e.$parsers.push(function (a) {
        return a ? k : n;
      });
    }, hidden: A, button: A, submit: A, reset: A, file: A },
      yc = ["$browser", "$sniffer", "$filter", "$parse", function (a, c, d, e) {
    return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(f, g, h, l) {
          l[0] && (Dd[K(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e);
        } } };
  }],
      cg = /^(true|false|\d+)$/,
      ye = function ye() {
    return { restrict: "A", priority: 100, compile: function compile(a, c) {
        return cg.test(c.ngValue) ? function (a, c, f) {
          f.$set("value", a.$eval(f.ngValue));
        } : function (a, c, f) {
          a.$watch(f.ngValue, function (a) {
            f.$set("value", a);
          });
        };
      } };
  },
      Zd = ["$compile", function (a) {
    return { restrict: "AC", compile: function compile(c) {
        a.$$addBindingClass(c);return function (c, e, f) {
          a.$$addBindingInfo(e, f.ngBind);e = e[0];c.$watch(f.ngBind, function (a) {
            e.textContent = a === u ? "" : a;
          });
        };
      } };
  }],
      ae = ["$interpolate", "$compile", function (a, c) {
    return { compile: function compile(d) {
        c.$$addBindingClass(d);return function (d, f, g) {
          d = a(f.attr(g.$attr.ngBindTemplate));
          c.$$addBindingInfo(f, d.expressions);f = f[0];g.$observe("ngBindTemplate", function (a) {
            f.textContent = a === u ? "" : a;
          });
        };
      } };
  }],
      $d = ["$sce", "$parse", "$compile", function (a, c, d) {
    return { restrict: "A", compile: function compile(e, f) {
        var g = c(f.ngBindHtml),
            h = c(f.ngBindHtml, function (a) {
          return (a || "").toString();
        });d.$$addBindingClass(e);return function (c, e, f) {
          d.$$addBindingInfo(e, f.ngBindHtml);c.$watch(h, function () {
            e.html(a.getTrustedHtml(g(c)) || "");
          });
        };
      } };
  }],
      xe = ea({ restrict: "A", require: "ngModel", link: function link(a, c, d, e) {
      e.$viewChangeListeners.push(function () {
        a.$eval(d.ngChange);
      });
    } }),
      be = jc("", !0),
      de = jc("Odd", 0),
      ce = jc("Even", 1),
      ee = Ia({ compile: function compile(a, c) {
      c.$set("ngCloak", u);a.removeClass("ng-cloak");
    } }),
      fe = [function () {
    return { restrict: "A", scope: !0, controller: "@", priority: 500 };
  }],
      Dc = {},
      dg = { blur: !0, focus: !0 };r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var c = ya("ng-" + a);Dc[c] = ["$parse", "$rootScope", function (d, e) {
      return { restrict: "A", compile: function compile(f, g) {
          var h = d(g[c], null, !0);return function (c, d) {
            d.on(a, function (d) {
              var f = function f() {
                h(c, { $event: d });
              };dg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
            });
          };
        } };
    }];
  });var ie = ["$animate", function (a) {
    return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(c, d, e, f, g) {
        var h, l, k;c.$watch(e.ngIf, function (c) {
          c ? l || g(function (c, f) {
            l = f;c[c.length++] = W.createComment(" end ngIf: " + e.ngIf + " ");h = { clone: c };a.enter(c, d.parent(), d);
          }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = ub(h.clone), a.leave(k).then(function () {
            k = null;
          }), h = null));
        });
      } };
  }],
      je = ["$templateRequest", "$anchorScroll", "$animate", function (a, c, d) {
    return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: ca.noop, compile: function compile(e, f) {
        var g = f.ngInclude || f.src,
            h = f.onload || "",
            l = f.autoscroll;return function (e, f, p, q, r) {
          var s = 0,
              u,
              v,
              m,
              C = function C() {
            v && (v.remove(), v = null);u && (u.$destroy(), u = null);m && (d.leave(m).then(function () {
              v = null;
            }), v = m, m = null);
          };e.$watch(g, function (g) {
            var p = function p() {
              !y(l) || l && !e.$eval(l) || c();
            },
                M = ++s;g ? (a(g, !0).then(function (a) {
              if (M === s) {
                var c = e.$new();q.template = a;a = r(c, function (a) {
                  C();d.enter(a, null, f).then(p);
                });u = c;m = a;u.$emit("$includeContentLoaded", g);e.$eval(h);
              }
            }, function () {
              M === s && (C(), e.$emit("$includeContentError", g));
            }), e.$emit("$includeContentRequested", g)) : (C(), q.template = null);
          });
        };
      } };
  }],
      Ae = ["$compile", function (a) {
    return { restrict: "ECA", priority: -400, require: "ngInclude", link: function link(c, d, e, f) {
        /SVG/.test(d[0].toString()) ? (d.empty(), a(Gc(f.template, W).childNodes)(c, function (a) {
          d.append(a);
        }, { futureParentElement: d })) : (d.html(f.template), a(d.contents())(c));
      } };
  }],
      ke = Ia({ priority: 450, compile: function compile() {
      return { pre: function pre(a, c, d) {
          a.$eval(d.ngInit);
        } };
    } }),
      we = function we() {
    return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, c, d, e) {
        var f = c.attr(d.$attr.ngList) || ", ",
            g = "false" !== d.ngTrim,
            h = g ? N(f) : f;e.$parsers.push(function (a) {
          if (!D(a)) {
            var c = [];a && r(a.split(h), function (a) {
              a && c.push(g ? N(a) : a);
            });return c;
          }
        });e.$formatters.push(function (a) {
          return H(a) ? a.join(f) : u;
        });e.$isEmpty = function (a) {
          return !a || !a.length;
        };
      } };
  },
      ob = "ng-valid",
      vd = "ng-invalid",
      Sa = "ng-pristine",
      Mb = "ng-dirty",
      xd = "ng-pending",
      nb = S("ngModel"),
      eg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, c, d, e, f, g, h, l, k, n) {
    this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = u;this.$validators = {};this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;
    this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = u;this.$name = n(d.name || "", !1)(a);var p = f(d.ngModel),
        q = p.assign,
        t = p,
        s = q,
        F = null,
        v,
        m = this;this.$$setOptions = function (a) {
      if ((m.$options = a) && a.getterSetter) {
        var c = f(d.ngModel + "()"),
            g = f(d.ngModel + "($$$p)");t = function (a) {
          var d = p(a);z(d) && (d = c(a));return d;
        };s = function (a, c) {
          z(p(a)) ? g(a, { $$$p: m.$modelValue }) : q(a, m.$modelValue);
        };
      } else if (!p.assign) throw nb("nonassign", d.ngModel, xa(e));
    };this.$render = A;this.$isEmpty = function (a) {
      return D(a) || "" === a || null === a || a !== a;
    };var C = e.inheritedData("$formController") || Lb,
        w = 0;sd({ ctrl: this, $element: e, set: function set(a, c) {
        a[c] = !0;
      }, unset: function unset(a, c) {
        delete a[c];
      }, parentForm: C, $animate: g });this.$setPristine = function () {
      m.$dirty = !1;m.$pristine = !0;g.removeClass(e, Mb);g.addClass(e, Sa);
    };this.$setDirty = function () {
      m.$dirty = !0;m.$pristine = !1;g.removeClass(e, Sa);g.addClass(e, Mb);C.$setDirty();
    };this.$setUntouched = function () {
      m.$touched = !1;m.$untouched = !0;g.setClass(e, "ng-untouched", "ng-touched");
    };this.$setTouched = function () {
      m.$touched = !0;m.$untouched = !1;g.setClass(e, "ng-touched", "ng-untouched");
    };this.$rollbackViewValue = function () {
      h.cancel(F);m.$viewValue = m.$$lastCommittedViewValue;m.$render();
    };this.$validate = function () {
      if (!Y(m.$modelValue) || !isNaN(m.$modelValue)) {
        var a = m.$$rawModelValue,
            c = m.$valid,
            d = m.$modelValue,
            e = m.$options && m.$options.allowInvalid;m.$$runValidators(a, m.$$lastCommittedViewValue, function (f) {
          e || c === f || (m.$modelValue = f ? a : u, m.$modelValue !== d && m.$$writeModelToScope());
        });
      }
    };this.$$runValidators = function (a, c, d) {
      function e() {
        var d = !0;r(m.$validators, function (e, f) {
          var h = e(a, c);d = d && h;g(f, h);
        });return d ? !0 : (r(m.$asyncValidators, function (a, c) {
          g(c, null);
        }), !1);
      }function f() {
        var d = [],
            e = !0;r(m.$asyncValidators, function (f, h) {
          var l = f(a, c);if (!l || !z(l.then)) throw nb("$asyncValidators", l);g(h, u);d.push(l.then(function () {
            g(h, !0);
          }, function (a) {
            e = !1;g(h, !1);
          }));
        });d.length ? k.all(d).then(function () {
          h(e);
        }, A) : h(!0);
      }function g(a, c) {
        l === w && m.$setValidity(a, c);
      }function h(a) {
        l === w && d(a);
      }w++;var l = w;(function () {
        var a = m.$$parserName || "parse";if (v === u) g(a, null);else return v || (r(m.$validators, function (a, c) {
          g(c, null);
        }), r(m.$asyncValidators, function (a, c) {
          g(c, null);
        })), g(a, v), v;return !0;
      })() ? e() ? f() : h(!1) : h(!1);
    };this.$commitViewValue = function () {
      var a = m.$viewValue;h.cancel(F);if (m.$$lastCommittedViewValue !== a || "" === a && m.$$hasNativeValidators) m.$$lastCommittedViewValue = a, m.$pristine && this.$setDirty(), this.$$parseAndValidate();
    };this.$$parseAndValidate = function () {
      var c = m.$$lastCommittedViewValue;if (v = D(c) ? u : !0) for (var d = 0; d < m.$parsers.length; d++) if ((c = m.$parsers[d](c), D(c))) {
        v = !1;break;
      }Y(m.$modelValue) && isNaN(m.$modelValue) && (m.$modelValue = t(a));var e = m.$modelValue,
          f = m.$options && m.$options.allowInvalid;m.$$rawModelValue = c;f && (m.$modelValue = c, m.$modelValue !== e && m.$$writeModelToScope());m.$$runValidators(c, m.$$lastCommittedViewValue, function (a) {
        f || (m.$modelValue = a ? c : u, m.$modelValue !== e && m.$$writeModelToScope());
      });
    };this.$$writeModelToScope = function () {
      s(a, m.$modelValue);r(m.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (d) {
          c(d);
        }
      });
    };
    this.$setViewValue = function (a, c) {
      m.$viewValue = a;m.$options && !m.$options.updateOnDefault || m.$$debounceViewValueCommit(c);
    };this.$$debounceViewValueCommit = function (c) {
      var d = 0,
          e = m.$options;e && y(e.debounce) && (e = e.debounce, Y(e) ? d = e : Y(e[c]) ? d = e[c] : Y(e["default"]) && (d = e["default"]));h.cancel(F);d ? F = h(function () {
        m.$commitViewValue();
      }, d) : l.$$phase ? m.$commitViewValue() : a.$apply(function () {
        m.$commitViewValue();
      });
    };a.$watch(function () {
      var c = t(a);if (c !== m.$modelValue && (m.$modelValue === m.$modelValue || c === c)) {
        m.$modelValue = m.$$rawModelValue = c;v = u;for (var d = m.$formatters, e = d.length, f = c; e--;) f = d[e](f);m.$viewValue !== f && (m.$viewValue = m.$$lastCommittedViewValue = f, m.$render(), m.$$runValidators(c, f, A));
      }return c;
    });
  }],
      ve = ["$rootScope", function (a) {
    return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: eg, priority: 1, compile: function compile(c) {
        c.addClass(Sa).addClass("ng-untouched").addClass(ob);return { pre: function pre(a, c, f, g) {
            var h = g[0],
                l = g[1] || Lb;h.$$setOptions(g[2] && g[2].$options);l.$addControl(h);f.$observe("name", function (a) {
              h.$name !== a && l.$$renameControl(h, a);
            });a.$on("$destroy", function () {
              l.$removeControl(h);
            });
          }, post: function post(c, e, f, g) {
            var h = g[0];if (h.$options && h.$options.updateOn) e.on(h.$options.updateOn, function (a) {
              h.$$debounceViewValueCommit(a && a.type);
            });e.on("blur", function (e) {
              h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched));
            });
          } };
      } };
  }],
      fg = /(\s+|^)default(\s+|$)/,
      ze = function ze() {
    return { restrict: "A", controller: ["$scope", "$attrs", function (a, c) {
        var d = this;this.$options = a.$eval(c.ngModelOptions);
        this.$options.updateOn !== u ? (this.$options.updateOnDefault = !1, this.$options.updateOn = N(this.$options.updateOn.replace(fg, function () {
          d.$options.updateOnDefault = !0;return " ";
        }))) : this.$options.updateOnDefault = !0;
      }] };
  },
      le = Ia({ terminal: !0, priority: 1E3 }),
      me = ["$locale", "$interpolate", function (a, c) {
    var d = /{}/g,
        e = /^when(Minus)?(.+)$/;return { restrict: "EA", link: function link(f, g, h) {
        function l(a) {
          g.text(a || "");
        }var k = h.count,
            n = h.$attr.when && g.attr(h.$attr.when),
            p = h.offset || 0,
            q = f.$eval(n) || {},
            t = {},
            n = c.startSymbol(),
            s = c.endSymbol(),
            u = n + k + "-" + p + s,
            v = ca.noop,
            m;r(h, function (a, c) {
          var d = e.exec(c);d && (d = (d[1] ? "-" : "") + K(d[2]), q[d] = g.attr(h.$attr[c]));
        });r(q, function (a, e) {
          t[e] = c(a.replace(d, u));
        });f.$watch(k, function (c) {
          c = parseFloat(c);var d = isNaN(c);d || c in q || (c = a.pluralCat(c - p));c === m || d && isNaN(m) || (v(), v = f.$watch(t[c], l), m = c);
        });
      } };
  }],
      ne = ["$parse", "$animate", function (a, c) {
    var d = S("ngRepeat"),
        e = function e(a, c, d, _e, k, n, p) {
      a[d] = _e;k && (a[k] = n);a.$index = c;a.$first = 0 === c;a.$last = c === p - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (c & 1));
    };return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(f, g) {
        var h = g.ngRepeat,
            l = W.createComment(" end ngRepeat: " + h + " "),
            k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if (!k) throw d("iexp", h);var n = k[1],
            p = k[2],
            q = k[3],
            t = k[4],
            k = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if (!k) throw d("iidexp", n);var s = k[3] || k[1],
            F = k[2];if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw d("badident", q);var v,
            m,
            C,
            y,
            w = { $id: Na };t ? v = a(t) : (C = function (a, c) {
          return Na(c);
        }, y = function (a) {
          return a;
        });return function (a, f, g, k, n) {
          v && (m = function (c, d, e) {
            F && (w[F] = c);w[s] = d;w.$index = e;return v(a, w);
          });var t = ja();a.$watchCollection(p, function (g) {
            var k,
                p,
                v = f[0],
                G,
                w = ja(),
                D,
                I,
                A,
                z,
                H,
                O,
                x;q && (a[q] = g);if (Ta(g)) H = g, p = m || C;else {
              p = m || y;H = [];for (x in g) g.hasOwnProperty(x) && "$" != x.charAt(0) && H.push(x);H.sort();
            }D = H.length;x = Array(D);for (k = 0; k < D; k++) if ((I = g === H ? k : H[k], A = g[I], z = p(I, A, k), t[z])) O = t[z], delete t[z], w[z] = O, x[k] = O;else {
              if (w[z]) throw (r(x, function (a) {
                a && a.scope && (t[a.id] = a);
              }), d("dupes", h, z, A));x[k] = { id: z, scope: u, clone: u };w[z] = !0;
            }for (G in t) {
              O = t[G];z = ub(O.clone);c.leave(z);if (z[0].parentNode) for (k = 0, p = z.length; k < p; k++) z[k].$$NG_REMOVED = !0;O.scope.$destroy();
            }for (k = 0; k < D; k++) if ((I = g === H ? k : H[k], A = g[I], O = x[k], O.scope)) {
              G = v;do G = G.nextSibling; while (G && G.$$NG_REMOVED);O.clone[0] != G && c.move(ub(O.clone), null, B(v));
              v = O.clone[O.clone.length - 1];e(O.scope, k, s, A, F, I, D);
            } else n(function (a, d) {
              O.scope = d;var f = l.cloneNode(!1);a[a.length++] = f;c.enter(a, null, B(v));v = f;O.clone = a;w[O.id] = O;e(O.scope, k, s, A, F, I, D);
            });t = w;
          });
        };
      } };
  }],
      oe = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(c, d, e) {
        c.$watch(e.ngShow, function (c) {
          a[c ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      he = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(c, d, e) {
        c.$watch(e.ngHide, function (c) {
          a[c ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      pe = Ia(function (a, c, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && r(d, function (a, d) {
        c.css(d, "");
      });a && c.css(a);
    }, !0);
  }),
      qe = ["$animate", function (a) {
    return { restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {};
      }], link: function link(c, d, e, f) {
        var g = [],
            h = [],
            l = [],
            k = [],
            n = function n(a, c) {
          return function () {
            a.splice(c, 1);
          };
        };c.$watch(e.ngSwitch || e.on, function (c) {
          var d, e;d = 0;for (e = l.length; d < e; ++d) a.cancel(l[d]);d = l.length = 0;for (e = k.length; d < e; ++d) {
            var s = ub(h[d].clone);k[d].$destroy();(l[d] = a.leave(s)).then(n(l, d));
          }h.length = 0;k.length = 0;(g = f.cases["!" + c] || f.cases["?"]) && r(g, function (c) {
            c.transclude(function (d, e) {
              k.push(e);var f = c.element;d[d.length++] = W.createComment(" end ngSwitchWhen: ");h.push({ clone: d });a.enter(d, f.parent(), f);
            });
          });
        });
      } };
  }],
      re = Ia({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, c, d, e, f) {
      e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];e.cases["!" + d.ngSwitchWhen].push({ transclude: f,
        element: c });
    } }),
      se = Ia({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, c, d, e, f) {
      e.cases["?"] = e.cases["?"] || [];e.cases["?"].push({ transclude: f, element: c });
    } }),
      ue = Ia({ restrict: "EAC", link: function link(a, c, d, e, f) {
      if (!f) throw S("ngTransclude")("orphan", xa(c));f(function (a) {
        c.empty();c.append(a);
      });
    } }),
      Vd = ["$templateCache", function (a) {
    return { restrict: "E", terminal: !0, compile: function compile(c, d) {
        "text/ng-template" == d.type && a.put(d.id, c[0].text);
      } };
  }],
      gg = S("ngOptions"),
      te = ea({ restrict: "A",
    terminal: !0 }),
      Wd = ["$compile", "$parse", function (a, c) {
    var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        e = { $setViewValue: A };return { restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, c, d) {
        var l = this,
            k = {},
            n = e,
            p;l.databound = d.ngModel;l.init = function (a, c, d) {
          n = a;p = d;
        };l.addOption = function (c, d) {
          Ma(c, '"option value"');
          k[c] = !0;n.$viewValue == c && (a.val(c), p.parent() && p.remove());d && d[0].hasAttribute("selected") && (d[0].selected = !0);
        };l.removeOption = function (a) {
          this.hasOption(a) && (delete k[a], n.$viewValue === a && this.renderUnknownOption(a));
        };l.renderUnknownOption = function (c) {
          c = "? " + Na(c) + " ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected", !0);
        };l.hasOption = function (a) {
          return k.hasOwnProperty(a);
        };c.$on("$destroy", function () {
          l.renderUnknownOption = A;
        });
      }], link: function link(e, g, h, l) {
        function k(a, c, d, e) {
          d.$render = function () {
            var a = d.$viewValue;e.hasOption(a) ? (z.parent() && z.remove(), c.val(a), "" === a && v.prop("selected", !0)) : null == a && v ? c.val("") : e.renderUnknownOption(a);
          };c.on("change", function () {
            a.$apply(function () {
              z.parent() && z.remove();d.$setViewValue(c.val());
            });
          });
        }function n(a, c, d) {
          var e;d.$render = function () {
            var a = new gb(d.$viewValue);r(c.find("option"), function (c) {
              c.selected = y(a.get(c.value));
            });
          };a.$watch(function () {
            ia(e, d.$viewValue) || (e = sa(d.$viewValue), d.$render());
          });c.on("change", function () {
            a.$apply(function () {
              var a = [];r(c.find("option"), function (c) {
                c.selected && a.push(c.value);
              });d.$setViewValue(a);
            });
          });
        }function p(e, f, g) {
          function h(a, c, d) {
            T[A] = d;I && (T[I] = c);return a(e, T);
          }function l(a) {
            var c;if (t) if (K && H(a)) {
              c = new gb([]);for (var d = 0; d < a.length; d++) c.put(h(K, null, a[d]), !0);
            } else c = new gb(a);else K && (a = h(K, null, a));return function (d, e) {
              var f;f = K ? K : x ? x : E;return t ? y(c.remove(h(f, d, e))) : a === h(f, d, e);
            };
          }function k() {
            m || (e.$$postDigest(p), m = !0);
          }function n(a, c, d) {
            a[c] = a[c] || 0;a[c] += d ? 1 : -1;
          }function p() {
            m = !1;var a = { "": [] },
                c = [""],
                d,
                k,
                s,
                u,
                v;s = g.$viewValue;
            u = L(e) || [];var A = I ? Object.keys(u).sort() : u,
                x,
                B,
                H,
                E,
                P = {};v = l(s);var N = !1,
                U,
                W;R = {};for (E = 0; H = A.length, E < H; E++) {
              x = E;if (I && (x = A[E], "$" === x.charAt(0))) continue;B = u[x];d = h(M, x, B) || "";(k = a[d]) || (k = a[d] = [], c.push(d));d = v(x, B);N = N || d;B = h(z, x, B);B = y(B) ? B : "";W = K ? K(e, T) : I ? A[E] : E;K && (R[W] = x);k.push({ id: W, label: B, selected: d });
            }t || (w || null === s ? a[""].unshift({ id: "", label: "", selected: !N }) : N || a[""].unshift({ id: "?", label: "", selected: !0 }));x = 0;for (A = c.length; x < A; x++) {
              d = c[x];k = a[d];S.length <= x ? (s = { element: D.clone().attr("label", d), label: k.label }, u = [s], S.push(u), f.append(s.element)) : (u = S[x], s = u[0], s.label != d && s.element.attr("label", s.label = d));N = null;E = 0;for (H = k.length; E < H; E++) d = k[E], (v = u[E + 1]) ? (N = v.element, v.label !== d.label && (n(P, v.label, !1), n(P, d.label, !0), N.text(v.label = d.label), N.prop("label", v.label)), v.id !== d.id && N.val(v.id = d.id), N[0].selected !== d.selected && (N.prop("selected", v.selected = d.selected), Ra && N.prop("selected", v.selected))) : ("" === d.id && w ? U = w : (U = C.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), u.push(v = { element: U, label: d.label, id: d.id, selected: d.selected }), n(P, d.label, !0), N ? N.after(U) : s.element.append(U), N = U);for (E++; u.length > E;) d = u.pop(), n(P, d.label, !1), d.element.remove();
            }for (; S.length > x;) {
              k = S.pop();for (E = 1; E < k.length; ++E) n(P, k[E].label, !1);k[0].element.remove();
            }r(P, function (a, c) {
              0 < a ? q.addOption(c) : 0 > a && q.removeOption(c);
            });
          }var v;if (!(v = s.match(d))) throw gg("iexp", s, xa(f));var z = c(v[2] || v[1]),
              A = v[4] || v[6],
              B = / as /.test(v[0]) && v[1],
              x = B ? c(B) : null,
              I = v[5],
              M = c(v[3] || ""),
              E = c(v[2] ? v[1] : A),
              L = c(v[7]),
              K = v[8] ? c(v[8]) : null,
              R = {},
              S = [[{ element: f, label: "" }]],
              T = {};w && (a(w)(e), w.removeClass("ng-scope"), w.remove());f.empty();f.on("change", function () {
            e.$apply(function () {
              var a = L(e) || [],
                  c;if (t) c = [], r(f.val(), function (d) {
                d = K ? R[d] : d;c.push("?" === d ? u : "" === d ? null : h(x ? x : E, d, a[d]));
              });else {
                var d = K ? R[f.val()] : f.val();c = "?" === d ? u : "" === d ? null : h(x ? x : E, d, a[d]);
              }g.$setViewValue(c);p();
            });
          });g.$render = p;e.$watchCollection(L, k);e.$watchCollection(function () {
            var a = L(e),
                c;
            if (a && H(a)) {
              c = Array(a.length);for (var d = 0, f = a.length; d < f; d++) c[d] = h(z, d, a[d]);
            } else if (a) for (d in (c = {}, a)) a.hasOwnProperty(d) && (c[d] = h(z, d, a[d]));return c;
          }, k);t && e.$watchCollection(function () {
            return g.$modelValue;
          }, k);
        }if (l[1]) {
          var q = l[0];l = l[1];var t = h.multiple,
              s = h.ngOptions,
              w = !1,
              v,
              m = !1,
              C = B(W.createElement("option")),
              D = B(W.createElement("optgroup")),
              z = C.clone();h = 0;for (var A = g.children(), x = A.length; h < x; h++) if ("" === A[h].value) {
            v = w = A.eq(h);break;
          }q.init(l, w, z);t && (l.$isEmpty = function (a) {
            return !a || 0 === a.length;
          });
          s ? p(e, g, l) : t ? n(e, g, l) : k(e, g, l, q);
        }
      } };
  }],
      Yd = ["$interpolate", function (a) {
    var c = { addOption: A, removeOption: A };return { restrict: "E", priority: 100, compile: function compile(d, e) {
        if (D(e.value)) {
          var f = a(d.text(), !0);f || e.$set("value", d.text());
        }return function (a, d, e) {
          var k = d.parent(),
              n = k.data("$selectController") || k.parent().data("$selectController");n && n.databound || (n = c);f ? a.$watch(f, function (a, c) {
            e.$set("value", a);c !== a && n.removeOption(c);n.addOption(a, d);
          }) : n.addOption(e.value, d);d.on("$destroy", function () {
            n.removeOption(e.value);
          });
        };
      } };
  }],
      Xd = ea({ restrict: "E", terminal: !1 }),
      Ac = function Ac() {
    return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
        e && (d.required = !0, e.$validators.required = function (a, c) {
          return !d.required || !e.$isEmpty(c);
        }, d.$observe("required", function () {
          e.$validate();
        }));
      } };
  },
      zc = function zc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
        if (e) {
          var f,
              g = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
            x(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw S("ngPattern")("noregexp", g, a, xa(c));f = a || u;e.$validate();
          });e.$validators.pattern = function (a, c) {
            return e.$isEmpty(c) || D(f) || f.test(c);
          };
        }
      } };
  },
      Cc = function Cc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
        if (e) {
          var f = -1;d.$observe("maxlength", function (a) {
            a = aa(a);f = isNaN(a) ? -1 : a;e.$validate();
          });e.$validators.maxlength = function (a, c) {
            return 0 > f || e.$isEmpty(c) || c.length <= f;
          };
        }
      } };
  },
      Bc = function Bc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
        if (e) {
          var f = 0;d.$observe("minlength", function (a) {
            f = aa(a) || 0;e.$validate();
          });e.$validators.minlength = function (a, c) {
            return e.$isEmpty(c) || c.length >= f;
          };
        }
      } };
  };R.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), Pd(ca), B(W).ready(function () {
    Jd(W, tc);
  }));
})(window, document);!window.angular.$$csp() && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
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
        d: function d(_d, v) {
          return _d.setUTCDate(v);
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