var fc_css = document.createElement("link");
fc_css.setAttribute("rel", "stylesheet");
fc_css.setAttribute("media", "screen");
fc_css.setAttribute("href", "https://cdn.foxycart.com/vinylimagination/responsive_styles.1673567655.css");
var stripe_script = document.createElement("script");
stripe_script.src = "https://js.stripe.com/v3/";
var fc_script = document.createElement("script");
window.jQuery && (1 <= window.jQuery.fn.jquery.match(/(\d+)\.(\d+)/)[1] && 7 < window.jQuery.fn.jquery.match(/(\d+)\.(\d+)/)[2] || 2 <= window.jQuery.fn.jquery.match(/(\d+)\.(\d+)/)[1]) ? fc_script.src = "https://cdn.foxycart.com/vinylimagination/foxycart.jsonp.sidecart.min.1674008420.js" : fc_script.src = "https://cdn.foxycart.com/vinylimagination/foxycart.jsonp.sidecart.with-jquery.min.1674008420.js";

function fc_loader() {
  document.getElementsByTagName("body")[0].appendChild(fc_script);
  document.getElementsByTagName("body")[0].appendChild(fc_css);
  document.getElementsByTagName("body")[0].appendChild(stripe_script);
}
document.readyState === "complete" ? fc_loader() : window.addEventListener ? window.addEventListener("load", fc_loader, !1) : window.attachEvent ? window.attachEvent("onload", fc_loader) : window.onload = fc_loader;




! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  function r(a) {
    var b = a.length,
        c = m.type(a);
    return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }

  function w(a, b, c) {
    if (m.isFunction(b)) return m.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return m.grep(a, function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);
      b = m.filter(b, a)
    }
    return m.grep(a, function(a) {
      return m.inArray(a, b) >= 0 !== c
    })
  }

  function D(a, b) {
    do a = a[b]; while (a && 1 !== a.nodeType);
    return a
  }

  function G(a) {
    var b = F[a] = {};
    return m.each(a.match(E) || [], function(a, c) {
      b[c] = !0
    }), b
  }

  function I() {
    y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
  }

  function J() {
    (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
  }

  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();
      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
        } catch (e) {}
        m.data(a, b, c)
      } else c = void 0
    }
    return c
  }

  function P(a) {
    var b;
    for (b in a)
      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0
  }

  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f, g, h = m.expando,
          i = a.nodeType,
          j = i ? m.cache : a,
          k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: m.noop
      }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
    }
  }

  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d, e, f = a.nodeType,
          g = f ? m.cache : a,
          h = f ? a[m.expando] : m.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
          for (; e--;) delete d[b[e]];
          if (c ? !P(d) : !m.isEmptyObject(d)) return
        }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
      }
    }
  }

  function ab() {
    return !0
  }

  function bb() {
    return !1
  }

  function cb() {
    try {
      return y.activeElement
    } catch (a) {}
  }

  function db(a) {
    var b = eb.split("|"),
        c = a.createDocumentFragment();
    if (c.createElement)
      for (; b.length;) c.createElement(b.pop());
    return c
  }

  function ub(a, b) {
    var c, d, e = 0,
        f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
    return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
  }

  function vb(a) {
    W.test(a.type) && (a.defaultChecked = a.checked)
  }

  function wb(a, b) {
    return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function xb(a) {
    return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
  }

  function yb(a) {
    var b = pb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function zb(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
  }

  function Ab(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c, d, e, f = m._data(a),
          g = m._data(b, f),
          h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
      }
      g.data && (g.data = m.extend({}, g.data))
    }
  }

  function Bb(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
        e = m._data(b);
        for (d in e.events) m.removeEvent(b, d, e.handle);
        b.removeAttribute(m.expando)
      }
      "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
  }

  function Eb(b, c) {
    var d, e = m(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
    return e.detach(), f
  }

  function Fb(a) {
    var b = y,
        c = Db[a];
    return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
  }

  function Lb(a, b) {
    return {
      get: function() {
        var c = a();
        return null != c ? c ? void delete this.get : (this.get = b).apply(this, arguments) : void 0
      }
    }
  }

  function Ub(a, b) {
    if (b in a) return b;
    for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length; e--;)
      if (b = Tb[e] + c, b in a) return b;
    return d
  }

  function Vb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  function Wb(a, b, c) {
    var d = Pb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function Xb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    return g
  }

  function Yb(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ib(a),
        g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  function Zb(a, b, c, d, e) {
    return new Zb.prototype.init(a, b, c, d, e)
  }

  function fc() {
    return setTimeout(function() {
      $b = void 0
    }), $b = m.now()
  }

  function gc(a, b) {
    var c, d = {
          height: a
        },
        e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d
  }

  function hc(a, b, c) {
    for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function ic(a, b, c) {
    var d, e, f, g, h, i, j, l, n = this,
        o = {},
        p = a.style,
        q = a.nodeType && U(a),
        r = m._data(a, "fxshow");
    c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, n.always(function() {
      n.always(function() {
        h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], ac.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0
        }
        o[d] = r && r[d] || m.style(a, d)
      } else j = void 0;
    if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
        m(a).hide()
      }), n.done(function() {
        var b;
        m._removeData(a, "fxshow");
        for (b in o) m.style(a, b, o[b])
      });
      for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function jc(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function kc(a, b, c) {
    var d, e, f = 0,
        g = dc.length,
        h = m.Deferred().always(function() {
          delete i.elem
        }),
        i = function() {
          if (e) return !1;
          for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
          return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
          elem: a,
          props: m.extend({}, b),
          opts: m.extend(!0, {
            specialEasing: {}
          }, c),
          originalProperties: b,
          originalOptions: c,
          startTime: $b || fc(),
          duration: c.duration,
          tweens: [],
          createTween: function(b, c) {
            var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d
          },
          stop: function(b) {
            var c = 0,
                d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; d > c; c++) j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
          }
        }),
        k = j.props;
    for (jc(k, j.opts.specialEasing); g > f; f++)
      if (d = dc[f].call(j, a, k, j.opts)) return d;
    return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }

  function Lc(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
          f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c))
        for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function Mc(a, b, c, d) {
    function g(h) {
      var i;
      return e[h] = !0, m.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    var e = {},
        f = a === Ic;
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function Nc(a, b) {
    var c, d, e = m.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && m.extend(!0, a, c), a
  }

  function Oc(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes;
         "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break
        } if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break
        }
        d || (d = g)
      }
      f = f || d
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function Pc(a, b, c, d) {
    var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f;)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (g = j[i + " " + f] || j["* " + f], !g)
            for (e in j)
              if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
              } if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else try {
              b = g(b)
            } catch (l) {
              return {
                state: "parsererror",
                error: g ? l : "No conversion from " + i + " to " + f
              }
            }
        }
    return {
      state: "success",
      data: b
    }
  }

  function Vc(a, b, c, d) {
    var e;
    if (m.isArray(b)) m.each(b, function(b, e) {
      c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== m.type(b)) d(a, b);
    else
      for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
  }

  function Zc() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  }

  function $c() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch (b) {}
  }

  function dd(a) {
    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = "1.11.1",
      m = function(a, b) {
        return new m.fn.init(a, b)
      },
      n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      o = /^-ms-/,
      p = /-([\da-z])/gi,
      q = function(a, b) {
        return b.toUpperCase()
      };
  m.fn = m.prototype = {
    jquery: l,
    constructor: m,
    selector: "",
    length: 0,
    toArray: function() {
      return d.call(this)
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    },
    pushStack: function(a) {
      var b = m.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a, b) {
      return m.each(this, a, b)
    },
    map: function(a) {
      return this.pushStack(m.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {
      return this.pushStack(d.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, m.extend = m.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (e = arguments[h]))
        for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g
  }, m.extend({
    expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a)
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === m.type(a)
    },
    isArray: Array.isArray || function(a) {
      return "array" === m.type(a)
    },
    isWindow: function(a) {
      return null != a && a == a.window
    },
    isNumeric: function(a) {
      return !m.isArray(a) && a - parseFloat(a) >= 0
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    isPlainObject: function(a) {
      var b;
      if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
      try {
        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      if (k.ownLast)
        for (b in a) return j.call(a, b);
      for (b in a);
      return void 0 === b || j.call(a, b)
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    },
    globalEval: function(b) {
      b && m.trim(b) && (a.execScript || function(b) {
        a.eval.call(a, b)
      })(b)
    },
    camelCase: function(a) {
      return a.replace(o, "ms-").replace(p, q)
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b, c) {
      var d, e = 0,
          f = a.length,
          g = r(a);
      if (c) {
        if (g)
          for (; f > e && (d = b.apply(a[e], c), d !== !1); e++);
        else
          for (e in a)
            if (d = b.apply(a[e], c), d === !1) break
      } else if (g)
        for (; f > e && (d = b.call(a[e], e, a[e]), d !== !1); e++);
      else
        for (e in a)
          if (d = b.call(a[e], e, a[e]), d === !1) break;
      return a
    },
    trim: function(a) {
      return null == a ? "" : (a + "").replace(n, "")
    },
    makeArray: function(a, b) {
      var c = b || [];
      return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    },
    inArray: function(a, b, c) {
      var d;
      if (b) {
        if (g) return g.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
          if (c in b && b[c] === a) return c
      }
      return -1
    },
    merge: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
      if (c !== c)
        for (; void 0 !== b[d];) a[e++] = b[d++];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, c) {
      var d, f = 0,
          g = a.length,
          h = r(a),
          i = [];
      if (h)
        for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
      else
        for (f in a) d = b(a[f], f, c), null != d && i.push(d);
      return e.apply([], i)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, e, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
        return a.apply(b || this, c.concat(d.call(arguments)))
      }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
    },
    now: function() {
      return +new Date
    },
    support: k
  }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
    h["[object " + b + "]"] = b.toLowerCase()
  });
  var s = function(a) {
    function fb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
      if (1 !== (k = b.nodeType) && 9 !== k) return [];
      if (p && !e) {
        if (f = _.exec(a))
          if (j = f[1]) {
            if (9 === k) {
              if (h = b.getElementById(j), !h || !h.parentNode) return d;
              if (h.id === j) return d.push(h), d
            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
          } else {
            if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
          } if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            for (o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; l--;) o[l] = s + qb(o[l]);
            w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
          }
          if (x) try {
            return I.apply(d, w.querySelectorAll(x)), d
          } catch (y) {} finally {
            r || b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(R, "$1"), b, d, e)
    }

    function gb() {
      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      var a = [];
      return b
    }

    function hb(a) {
      return a[u] = !0, a
    }

    function ib(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function jb(a, b) {
      for (var c = a.split("|"), e = a.length; e--;) d.attrHandle[c[e]] = b
    }

    function kb(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
      if (d) return d;
      if (c)
        for (; c = c.nextSibling;)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function lb(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function mb(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function nb(a) {
      return hb(function(b) {
        return b = +b, hb(function(c, d) {
          for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function ob(a) {
      return a && typeof a.getElementsByTagName !== C && a
    }

    function pb() {}

    function qb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function rb(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
      return b.first ? function(b, c, f) {
        for (; b = b[d];)
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function(b, c, g) {
        var h, i, j = [w, f];
        if (g) {
          for (; b = b[d];)
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          for (; b = b[d];)
            if (1 === b.nodeType || e) {
              if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
              if (i[d] = j, j[2] = a(b, c, g)) return !0
            }
      }
    }

    function sb(a) {
      return a.length > 1 ? function(b, c, d) {
        for (var e = a.length; e--;)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function tb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
      return c
    }

    function ub(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function vb(a, b, c, d, e, f) {
      return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
        var j, k, l, m = [],
            n = [],
            o = g.length,
            p = f || tb(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ub(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d)
          for (j = ub(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        if (f) {
          if (e || a) {
            if (e) {
              for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            for (k = r.length; k--;)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
      })
    }

    function wb(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
        return a === b
      }, h, !0), l = rb(function(a) {
        return K.call(b, a) > -1
      }, h, !0), m = [function(a, c, d) {
        return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
      }]; f > i; i++)
        if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e && !d.relative[a[e].type]; e++);
            return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
          }
          m.push(c)
        } return sb(m)
    }

    function xb(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function(f, g, h, i, k) {
            var l, m, o, p = 0,
                q = "0",
                r = f && [],
                s = [],
                t = j,
                u = f || e && d.find.TAG("*", k),
                v = w += null == t ? 1 : Math.random() || .1,
                x = u.length;
            for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
              if (e && l) {
                for (m = 0; o = a[m++];)
                  if (o(l, g, h)) {
                    i.push(l);
                    break
                  } k && (w = v)
              }
              c && ((l = !o && l) && p--, f && r.push(l))
            }
            if (p += q, c && q !== p) {
              for (m = 0; o = b[m++];) o(r, s, g, h);
              if (f) {
                if (p > 0)
                  for (; q--;) r[q] || s[q] || (s[q] = G.call(i));
                s = ub(s)
              }
              I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
            }
            return k && (w = v, j = t), r
          };
      return c ? hb(f) : f
    }
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
        v = a.document,
        w = 0,
        x = 0,
        y = gb(),
        z = gb(),
        A = gb(),
        B = function(a, b) {
          return a === b && (l = !0), 0
        },
        C = "undefined",
        D = 1 << 31,
        E = {}.hasOwnProperty,
        F = [],
        G = F.pop,
        H = F.push,
        I = F.push,
        J = F.slice,
        K = F.indexOf || function(a) {
          for (var b = 0, c = this.length; c > b; b++)
            if (this[b] === a) return b;
          return -1
        },
        L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        O = N.replace("w", "w#"),
        P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
        Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
        R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        S = new RegExp("^" + M + "*," + M + "*"),
        T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        V = new RegExp(Q),
        W = new RegExp("^" + O + "$"),
        X = {
          ID: new RegExp("^#(" + N + ")"),
          CLASS: new RegExp("^\\.(" + N + ")"),
          TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + P),
          PSEUDO: new RegExp("^" + Q),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + L + ")$", "i"),
          needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ab = /[+~]/,
        bb = /'|\\/g,
        cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        db = function(a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
    try {
      I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
    } catch (eb) {
      I = {
        apply: F.length ? function(a, b) {
          H.apply(a, J.call(b))
        } : function(a, b) {
          for (var c = a.length, d = 0; a[c++] = b[d++];);
          a.length = c - 1
        }
      }
    }
    c = fb.support = {}, f = fb.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = fb.setDocument = function(a) {
      var b, e = a ? a.ownerDocument || a : v,
          g = e.defaultView;
      return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
        m()
      }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
        m()
      })), c.attributes = ib(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ib(function(a) {
        return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
      }), c.getById = ib(function(a) {
        return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function(a, b) {
        if (typeof b.getElementById !== C && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      }, d.filter.ID = function(a) {
        var b = a.replace(cb, db);
        return function(a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function(a) {
        var b = a.replace(cb, db);
        return function(a) {
          var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
        return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
      } : function(a, b) {
        var c, d = [],
            e = 0,
            f = b.getElementsByTagName(a);
        if ("*" === a) {
          for (; c = f[e++];) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
        return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
      }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
        a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
      }), ib(function(a) {
        var b = e.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {
        if (b)
          for (; b = b.parentNode;)
            if (b === a) return !0;
        return !1
      }, B = b ? function(a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
      } : function(a, b) {
        if (a === b) return l = !0, 0;
        var c, d = 0,
            f = a.parentNode,
            g = b.parentNode,
            h = [a],
            i = [b];
        if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
        if (f === g) return kb(a, b);
        for (c = a; c = c.parentNode;) h.unshift(c);
        for (c = b; c = c.parentNode;) i.unshift(c);
        for (; h[d] === i[d];) d++;
        return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
      }, e) : n
    }, fb.matches = function(a, b) {
      return fb(a, null, null, b)
    }, fb.matchesSelector = function(a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return fb(b, n, null, [a]).length > 0
    }, fb.contains = function(a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, fb.attr = function(a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, fb.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, fb.uniqueSort = function(a) {
      var b, d = [],
          e = 0,
          f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        for (; b = a[f++];) b === a[f] && (e = d.push(f));
        for (; e--;) a.splice(d[e], 1)
      }
      return k = null, a
    }, e = fb.getText = function(a) {
      var b, c = "",
          d = 0,
          f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        for (; b = a[d++];) c += e(b);
      return c
    }, d = fb.selectors = {
      cacheLength: 50,
      createPseudo: hb,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
        },
        PSEUDO: function(a) {
          var b, c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(cb, db).toLowerCase();
          return "*" === a ? function() {
            return !0
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, b, c) {
          return function(d) {
            var e = fb.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode
          } : function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;
            if (q) {
              if (f) {
                for (; p;) {
                  for (l = b; l = l[p];)
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                for (k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];
                    break
                  }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
              else
                for (;
                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l !== b)););
              return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        },
        PSEUDO: function(a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
            for (var d, f = e(a, b), g = f.length; g--;) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function(a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: hb(function(a) {
          var b = [],
              c = [],
              d = h(a.replace(R, "$1"));
          return d[u] ? hb(function(a, b, c, e) {
            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, e, f) {
            return b[0] = a, d(b, null, f, c), !c.pop()
          }
        }),
        has: hb(function(a) {
          return function(b) {
            return fb(a, b).length > 0
          }
        }),
        contains: hb(function(a) {
          return function(b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
          }
        }),
        lang: hb(function(a) {
          return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
              function(b) {
                var c;
                do
                  if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                return !1
              }
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function(a) {
          return a === o
        },
        focus: function(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function(a) {
          return a.disabled === !1
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function(a) {
          return !d.pseudos.empty(a)
        },
        header: function(a) {
          return Z.test(a.nodeName)
        },
        input: function(a) {
          return Y.test(a.nodeName)
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: nb(function() {
          return [0]
        }),
        last: nb(function(a, b) {
          return [b - 1]
        }),
        eq: nb(function(a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: nb(function(a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: nb(function(a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: nb(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: nb(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) d.pseudos[b] = lb(b);
    for (b in {
      submit: !0,
      reset: !0
    }) d.pseudos[b] = mb(b);
    return pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      for (h = a, i = [], j = d.preFilter; h;) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(R, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
    }, h = fb.compile = function(a, b) {
      var c, d = [],
          e = [],
          f = A[a + " "];
      if (!f) {
        for (b || (b = g(a)), c = b.length; c--;) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xb(e, d)), f.selector = a
      }
      return f
    }, i = fb.select = function(a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        for (i = X.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]);)
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
            break
          }
      }
      return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ib(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || jb("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ib(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || jb("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ib(function(a) {
      return null == a.getAttribute("disabled")
    }) || jb(L, function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), fb
  }(a);
  m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
  var t = m.expr.match.needsContext,
      u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      v = /^.[^:#\[\.,]*$/;
  m.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
      return 1 === a.nodeType
    }))
  }, m.fn.extend({
    find: function(a) {
      var b, c = [],
          d = this,
          e = d.length;
      if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
        for (b = 0; e > b; b++)
          if (m.contains(d[b], this)) return !0
      }));
      for (b = 0; e > b; b++) m.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
    },
    filter: function(a) {
      return this.pushStack(w(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(w(this, a || [], !0))
    },
    is: function(a) {
      return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
    }
  });
  var x, y = a.document,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = m.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
          if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
          if (c[1]) {
            if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
              for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
            return this
          }
          if (d = y.getElementById(c[2]), d && d.parentNode) {
            if (d.id !== c[2]) return x.find(a);
            this.length = 1, this[0] = d
          }
          return this.context = y, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
      };
  A.prototype = m.fn, x = m(y);
  var B = /^(?:parents|prev(?:Until|All))/,
      C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
  m.extend({
    dir: function(a, b, c) {
      for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
      return d
    },
    sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), m.fn.extend({
    has: function(a) {
      var b, c = m(a, this),
          d = c.length;
      return this.filter(function() {
        for (b = 0; d > b; b++)
          if (m.contains(this, c[b])) return !0
      })
    },
    closest: function(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
            f.push(c);
            break
          } return this.pushStack(f.length > 1 ? m.unique(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(a, b) {
      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  }), m.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
      return m.dir(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
      return m.dir(a, "parentNode", c)
    },
    next: function(a) {
      return D(a, "nextSibling")
    },
    prev: function(a) {
      return D(a, "previousSibling")
    },
    nextAll: function(a) {
      return m.dir(a, "nextSibling")
    },
    prevAll: function(a) {
      return m.dir(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
      return m.dir(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
      return m.dir(a, "previousSibling", c)
    },
    siblings: function(a) {
      return m.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
      return m.sibling(a.firstChild)
    },
    contents: function(a) {
      return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
    }
  }, function(a, b) {
    m.fn[a] = function(c, d) {
      var e = m.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
    }
  });
  var E = /\S+/g,
      F = {};
  m.Callbacks = function(a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
    var b, c, d, e, f, g, h = [],
        i = !a.once && [],
        j = function(l) {
          for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
            if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
              c = !1;
              break
            } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        },
        k = {
          add: function() {
            if (h) {
              var d = h.length;
              ! function f(b) {
                m.each(b, function(b, c) {
                  var d = m.type(c);
                  "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                })
              }(arguments), b ? e = h.length : c && (g = d, j(c))
            }
            return this
          },
          remove: function() {
            return h && m.each(arguments, function(a, c) {
              for (var d;
                   (d = m.inArray(c, h, d)) > -1;) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
            }), this
          },
          has: function(a) {
            return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
          },
          empty: function() {
            return h = [], e = 0, this
          },
          disable: function() {
            return h = i = c = void 0, this
          },
          disabled: function() {
            return !h
          },
          lock: function() {
            return i = void 0, c || k.disable(), this
          },
          locked: function() {
            return !i
          },
          fireWith: function(a, c) {
            return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
          },
          fire: function() {
            return k.fireWith(this, arguments), this
          },
          fired: function() {
            return !!d
          }
        };
    return k
  }, m.extend({
    Deferred: function(a) {
      var b = [
            ["resolve", "done", m.Callbacks("once memory"), "resolved"],
            ["reject", "fail", m.Callbacks("once memory"), "rejected"],
            ["notify", "progress", m.Callbacks("memory")]
          ],
          c = "pending",
          d = {
            state: function() {
              return c
            },
            always: function() {
              return e.done(arguments).fail(arguments), this
            },
            then: function() {
              var a = arguments;
              return m.Deferred(function(c) {
                m.each(b, function(b, f) {
                  var g = m.isFunction(a[b]) && a[b];
                  e[f[1]](function() {
                    var a = g && g.apply(this, arguments);
                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                  })
                }), a = null
              }).promise()
            },
            promise: function(a) {
              return null != a ? m.extend(a, d) : d
            }
          },
          e = {};
      return d.pipe = d.then, m.each(b, function(a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {
      var i, j, k, b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function(a, b, c) {
            return function(e) {
              b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
            }
          };
      if (e > 1)
        for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var H;
  m.fn.ready = function(a) {
    return m.ready.promise().done(a), this
  }, m.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? m.readyWait++ : m.ready(!0)
    },
    ready: function(a) {
      if (a === !0 ? !--m.readyWait : !m.isReady) {
        if (!y.body) return setTimeout(m.ready);
        m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
      }
    }
  }), m.ready.promise = function(b) {
    if (!H)
      if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
      else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
      else {
        y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
        var c = !1;
        try {
          c = null == a.frameElement && y.documentElement
        } catch (d) {}
        c && c.doScroll && ! function e() {
          if (!m.isReady) {
            try {
              c.doScroll("left")
            } catch (a) {
              return setTimeout(e, 50)
            }
            I(), m.ready()
          }
        }()
      }
    return H.promise(b)
  };
  var L, K = "undefined";
  for (L in m(k)) break;
  k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
    var a, b, c, d;
    c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
  }),
      function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
          k.deleteExpando = !0;
          try {
            delete a.test
          } catch (b) {
            k.deleteExpando = !1
          }
        }
        a = null
      }(), m.acceptData = function(a) {
    var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
  };
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      N = /([A-Z])/g;
  m.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
    },
    data: function(a, b, c) {
      return Q(a, b, c)
    },
    removeData: function(a, b) {
      return R(a, b)
    },
    _data: function(a, b, c) {
      return Q(a, b, c, !0)
    },
    _removeData: function(a, b) {
      return R(a, b, !0)
    }
  }), m.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0],
          g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
          for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
          m._data(f, "parsedAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {
        m.data(this, a)
      }) : arguments.length > 1 ? this.each(function() {
        m.data(this, a, b)
      }) : f ? O(f, a, m.data(f, a)) : void 0
    },
    removeData: function(a) {
      return this.each(function() {
        m.removeData(this, a)
      })
    }
  }), m.extend({
    queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function(a, b) {
      b = b || "fx";
      var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function() {
            m.dequeue(a, b)
          };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return m._data(a, c) || m._data(a, c, {
        empty: m.Callbacks("once memory").add(function() {
          m._removeData(a, b + "queue"), m._removeData(a, c)
        })
      })
    }
  }), m.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
        var c = m.queue(this, a, b);
        m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
      })
    },
    dequeue: function(a) {
      return this.each(function() {
        m.dequeue(this, a)
      })
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", [])
    },
    promise: function(a, b) {
      var c, d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function() {
            --d || e.resolveWith(f, [f])
          };
      for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = ["Top", "Right", "Bottom", "Left"],
      U = function(a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
      },
      V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === m.type(c)) {
          e = !0;
          for (h in c) m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
          return j.call(m(a), c)
        })), b))
          for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
      },
      W = /^(?:checkbox|radio)$/i;
  ! function() {
    var a = y.createElement("input"),
        b = y.createElement("div"),
        c = y.createDocumentFragment();
    if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
      k.noCloneEvent = !1
    }), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;
      try {
        delete b.test
      } catch (d) {
        k.deleteExpando = !1
      }
    }
  }(),
      function() {
        var b, c, d = y.createElement("div");
        for (b in {
          submit: !0,
          change: !0,
          focusin: !0
        }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
      }();
  var X = /^(?:input|select|textarea)$/i,
      Y = /^key/,
      Z = /^(?:mouse|pointer|contextmenu)|click/,
      $ = /^(?:focusinfocus|focusoutblur)$/,
      _ = /^([^.]*)(?:\.(.+)|)$/;
  m.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
      if (r) {
        for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
          return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
        }, k.elem = a), b = (b || "").match(E) || [""], h = b.length; h--;) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && m.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
        a = null
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        for (b = (b || "").match(E) || [""], j = b.length; j--;)
          if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            for (l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length; f--;) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
            i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
          } else
            for (o in k) m.event.remove(a, o + b[j], c, d, !0);
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
      }
    },
    trigger: function(b, c, d, e) {
      var f, g, h, i, k, l, n, o = [d || y],
          p = j.call(b, "type") ? b.type : b,
          q = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
          l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
        }
        for (n = 0;
             (h = o[n++]) && !b.isPropagationStopped();) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
          l = d[g], l && (d[g] = null), m.event.triggered = p;
          try {
            d[p]()
          } catch (r) {}
          m.event.triggered = void 0, l && (d[g] = l)
        }
        return b.result
      }
    },
    dispatch: function(a) {
      a = m.event.fix(a);
      var b, c, e, f, g, h = [],
          i = d.call(arguments),
          j = (m._data(this, "events") || {})[a.type] || [],
          k = m.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        for (h = m.event.handlers.call(this, a, j), b = 0;
             (f = h[b++]) && !a.isPropagationStopped();)
          for (a.currentTarget = f.elem, g = 0;
               (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
            e.length && g.push({
              elem: i,
              handlers: e
            })
          } return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    fix: function(a) {
      if (a[m.expando]) return a;
      var b, c, d, e = a.type,
          f = a,
          g = this.fixHooks[e];
      for (g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
      return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c, d, e, f = b.button,
            g = b.fromElement;
        return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== cb() && this.focus) try {
            return this.focus(), !1
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === cb() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function(a) {
          return m.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = m.extend(new m.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  } : function(a, b, c) {
    var d = "on" + b;
    a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
  }, m.Event = function(a, b) {
    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
  }, m.Event.prototype = {
    isDefaultPrevented: bb,
    isPropagationStopped: bb,
    isImmediatePropagationStopped: bb,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, m.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    m.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c, d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), k.submitBubbles || (m.event.special.submit = {
    setup: function() {
      return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
        var b = a.target,
            c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
        c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
          a._submit_bubble = !0
        }), m._data(c, "submitBubbles", !0))
      })
    },
    postDispatch: function(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
    },
    teardown: function() {
      return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
    }
  }), k.changeBubbles || (m.event.special.change = {
    setup: function() {
      return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
      }), m.event.add(this, "click._change", function(a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
      })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
        var b = a.target;
        X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
          !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
        }), m._data(b, "changeBubbles", !0))
      })
    },
    handle: function(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return m.event.remove(this, "._change"), !X.test(this.nodeName)
    }
  }), k.focusinBubbles || m.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {
      m.event.simulate(b, a.target, m.event.fix(a), !0)
    };
    m.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
            e = m._data(d, b);
        e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
      },
      teardown: function() {
        var d = this.ownerDocument || this,
            e = m._data(d, b) - 1;
        e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
      }
    }
  }), m.fn.extend({
    on: function(a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (f in a) this.on(f, b, c, a[f], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
      else if (!d) return this;
      return 1 === e && (g = d, d = function(a) {
        return m().off(a), g.apply(this, arguments)
      }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
        m.event.add(this, a, d, c, b)
      })
    },
    one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1)
    },
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() {
        m.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {
      return this.each(function() {
        m.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? m.event.trigger(a, b, c, !0) : void 0
    }
  });
  var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      fb = / jQuery\d+="(?:null|\d+)"/g,
      gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
      hb = /^\s+/,
      ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      jb = /<([\w:]+)/,
      kb = /<tbody/i,
      lb = /<|&#?\w+;/,
      mb = /<(?:script|style|link)/i,
      nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ob = /^$|\/(?:java|ecma)script/i,
      pb = /^true\/(.*)/,
      qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      rb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      },
      sb = db(y),
      tb = sb.appendChild(y.createElement("div"));
  rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td, m.extend({
    clone: function(a, b, c) {
      var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
      if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
        for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
      if (b)
        if (c)
          for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
        else Ab(a, f);
      return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
    },
    buildFragment: function(a, b, c, d) {
      for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
        if (f = a[q], f || 0 === f)
          if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
          else if (lb.test(f)) {
            for (h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0]; e--;) h = h.lastChild;
            if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody)
              for (f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
            for (m.merge(p, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
            h = o.lastChild
          } else p.push(b.createTextNode(f));
      for (h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0; f = p[q++];)
        if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c))
          for (e = 0; f = h[e++];) ob.test(f.type || "") && c.push(f);
      return h = null, o
    },
    cleanData: function(a, b) {
      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
        if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
          if (g.events)
            for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
          j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
        }
    }
  }), m.fn.extend({
    text: function(a) {
      return V(this, function(a) {
        return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
      }, null, a, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wb(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    remove: function(a, b) {
      for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
      return this
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        for (1 === a.nodeType && m.cleanData(ub(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
        a.options && m.nodeName(a, "select") && (a.options.length = 0)
      }
      return this
    },
    clone: function(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
        return m.clone(this, a, b)
      })
    },
    html: function(a) {
      return V(this, function(a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
        if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(ib, "<$1></$2>");
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {
      var a = arguments[0];
      return this.domManip(arguments, function(b) {
        a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    },
    detach: function(a) {
      return this.remove(a, !0)
    },
    domManip: function(a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);
      if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) {
        var d = n.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
      });
      if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
        for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
        if (f)
          for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
        i = c = null
      }
      return this
    }
  }), m.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    m.fn[a] = function(a) {
      for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
      return this.pushStack(e)
    }
  });
  var Cb, Db = {};
  ! function() {
    var a;
    k.shrinkWrapBlocks = function() {
      if (null != a) return a;
      a = !1;
      var b, c, d;
      return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
    }
  }();
  var Ib, Jb, Gb = /^margin/,
      Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Kb = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ib = function(a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null)
  }, Jb = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
  }) : y.documentElement.currentStyle && (Ib = function(a) {
    return a.currentStyle
  }, Jb = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
  }), ! function() {
    function i() {
      var b, c, d, i;
      c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
        width: "4px"
      }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
    }
    var b, c, d, e, f, g, h;
    b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], (c = d && d.style) && (c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
      reliableHiddenOffsets: function() {
        return null == g && i(), g
      },
      boxSizingReliable: function() {
        return null == f && i(), f
      },
      pixelPosition: function() {
        return null == e && i(), e
      },
      reliableMarginRight: function() {
        return null == h && i(), h
      }
    }))
  }(), m.swap = function(a, b, c, d) {
    var e, f, g = {};
    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b) a.style[f] = g[f];
    return e
  };
  var Mb = /alpha\([^)]*\)/i,
      Nb = /opacity\s*=\s*([^)]*)/,
      Ob = /^(none|table(?!-c[ea]).+)/,
      Pb = new RegExp("^(" + S + ")(.*)$", "i"),
      Qb = new RegExp("^([+-])=(" + S + ")", "i"),
      Rb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Sb = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Tb = ["Webkit", "O", "Moz", "ms"];
  m.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = Jb(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": k.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = m.camelCase(b),
            i = a.style;
        if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c
        } catch (j) {}
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = m.camelCase(b);
      return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
    }
  }), m.each(["height", "width"], function(a, b) {
    m.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
          return Yb(a, b, d)
        }) : Yb(a, b, d) : void 0
      },
      set: function(a, c, d) {
        var e = d && Ib(a);
        return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), k.opacity || (m.cssHooks.opacity = {
    get: function(a, b) {
      return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    },
    set: function(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
    }
  }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
    return b ? m.swap(a, {
      display: "inline-block"
    }, Jb, [a, "marginRight"]) : void 0
  }), m.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    m.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
  }), m.fn.extend({
    css: function(a, b) {
      return V(this, function(a, b, c) {
        var d, e, f = {},
            g = 0;
        if (m.isArray(b)) {
          for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function() {
      return Vb(this, !0)
    },
    hide: function() {
      return Vb(this)
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        U(this) ? m(this).show() : m(this).hide()
      })
    }
  }), m.Tween = Zb, Zb.prototype = {
    constructor: Zb,
    init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
    },
    cur: function() {
      var a = Zb.propHooks[this.prop];
      return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
    },
    run: function(a) {
      var b, c = Zb.propHooks[this.prop];
      return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
    }
  }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
      },
      set: function(a) {
        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, m.easing = {
    linear: function(a) {
      return a
    },
    swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, m.fx = Zb.prototype.init, m.fx.step = {};
  var $b, _b, ac = /^(?:toggle|show|hide)$/,
      bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      cc = /queueHooks$/,
      dc = [ic],
      ec = {
        "*": [function(a, b) {
          var c = this.createTween(a, b),
              d = c.cur(),
              e = bc.exec(b),
              f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
              g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
              h = 1,
              i = 20;
          if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
          }
          return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
      };
  m.Animation = m.extend(kc, {
    tweener: function(a, b) {
      m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
      for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
    },
    prefilter: function(a, b) {
      b ? dc.unshift(a) : dc.push(a)
    }
  }), m.speed = function(a, b, c) {
    var d = a && "object" == typeof a ? m.extend({}, a) : {
      complete: c || !c && b || m.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !m.isFunction(b) && b
    };
    return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
      m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
    }, d
  }, m.fn.extend({
    fadeTo: function(a, b, c, d) {
      return this.filter(U).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d)
    },
    animate: function(a, b, c, d) {
      var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function() {
            var b = kc(this, m.extend({}, a), f);
            (e || m._data(this, "finish")) && b.stop(!0)
          };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    },
    stop: function(a, b, c) {
      var d = function(a) {
        var b = a.stop;
        delete a.stop, b(c)
      };
      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = m.timers,
            g = m._data(this);
        if (e) g[e] && g[e].stop && d(g[e]);
        else
          for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        (b || !c) && m.dequeue(this, a)
      })
    },
    finish: function(a) {
      return a !== !1 && (a = a || "fx"), this.each(function() {
        var b, c = m._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = m.timers,
            g = d ? d.length : 0;
        for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish
      })
    }
  }), m.each(["toggle", "show", "hide"], function(a, b) {
    var c = m.fn[b];
    m.fn[b] = function(a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
    }
  }), m.each({
    slideDown: gc("show"),
    slideUp: gc("hide"),
    slideToggle: gc("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(a, b) {
    m.fn[a] = function(a, c, d) {
      return this.animate(b, a, c, d)
    }
  }), m.timers = [], m.fx.tick = function() {
    var a, b = m.timers,
        c = 0;
    for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    b.length || m.fx.stop(), $b = void 0
  }, m.fx.timer = function(a) {
    m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
  }, m.fx.interval = 13, m.fx.start = function() {
    _b || (_b = setInterval(m.fx.tick, m.fx.interval))
  }, m.fx.stop = function() {
    clearInterval(_b), _b = null
  }, m.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, m.fn.delay = function(a, b) {
    return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
      var d = setTimeout(b, a);
      c.stop = function() {
        clearTimeout(d)
      }
    })
  },
      function() {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
      }();
  var lc = /\r/g;
  m.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0];
      return arguments.length ? (d = m.isFunction(a), this.each(function(c) {
        var e;
        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
          return null == a ? "" : a + ""
        })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
      })) : e ? (b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)) : void 0
    }
  }), m.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = m.find.attr(a, "value");
          return null != b ? b : m.trim(m.text(a))
        }
      },
      select: {
        get: function(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
              if (b = m(c).val(), f) return b;
              g.push(b)
            } return g
        },
        set: function(a, b) {
          for (var c, d, e = a.options, f = m.makeArray(b), g = e.length; g--;)
            if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
              d.selected = c = !0
            } catch (h) {
              d.scrollHeight
            } else d.selected = !1;
          return c || (a.selectedIndex = -1), e
        }
      }
    }
  }), m.each(["radio", "checkbox"], function() {
    m.valHooks[this] = {
      set: function(a, b) {
        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
      }
    }, k.checkOn || (m.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var mc, nc, oc = m.expr.attrHandle,
      pc = /^(?:checked|selected)$/i,
      qc = k.getSetAttribute,
      rc = k.input;
  m.fn.extend({
    attr: function(a, b) {
      return V(this, m.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        m.removeAttr(this, a)
      })
    }
  }), m.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b)) : void 0
    },
    removeAttr: function(a, b) {
      var c, d, e = 0,
          f = b && b.match(E);
      if (f && 1 === a.nodeType)
        for (; c = f[e++];) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), nc = {
    set: function(a, b, c) {
      return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
    }
  }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = oc[b] || m.find.attr;
    oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
      var e, f;
      return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
    } : function(a, b, c) {
      return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
    }
  }), rc && qc || (m.attrHooks.value = {
    set: function(a, b, c) {
      return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
    }
  }), qc || (mc = {
    set: function(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
    }
  }, oc.id = oc.name = oc.coords = function(a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
  }, m.valHooks.button = {
    get: function(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0
    },
    set: mc.set
  }, m.attrHooks.contenteditable = {
    set: function(a, b, c) {
      mc.set(a, "" === b ? !1 : b, c)
    }
  }, m.each(["width", "height"], function(a, b) {
    m.attrHooks[b] = {
      set: function(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
      }
    }
  })), k.style || (m.attrHooks.style = {
    get: function(a) {
      return a.style.cssText || void 0
    },
    set: function(a, b) {
      return a.style.cssText = b + ""
    }
  });
  var sc = /^(?:input|select|textarea|button|object)$/i,
      tc = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function(a, b) {
      return V(this, m.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return a = m.propFix[a] || a, this.each(function() {
        try {
          this[a] = void 0, delete this[a]
        } catch (b) {}
      })
    }
  }), m.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(a, b, c) {
      var d, e, f, g = a.nodeType;
      return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          var b = m.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    }
  }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
    m.propHooks[b] = {
      get: function(a) {
        return a.getAttribute(b, 4)
      }
    }
  }), k.optSelected || (m.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    }
  }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    m.propFix[this.toLowerCase()] = this
  }), k.enctype || (m.propFix.enctype = "encoding");
  var uc = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h = 0,
          i = this.length,
          j = "string" == typeof a && a;
      if (m.isFunction(a)) return this.each(function(b) {
        m(this).addClass(a.call(this, b, this.className))
      });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = m.trim(d), c.className !== g && (c.className = g)
          } return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h = 0,
          i = this.length,
          j = 0 === arguments.length || "string" == typeof a && a;
      if (m.isFunction(a)) return this.each(function(b) {
        m(this).removeClass(a.call(this, b, this.className))
      });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
            for (f = 0; e = b[f++];)
              for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
            g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
          } return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
        m(this).toggleClass(a.call(this, c, this.className, b), b)
      } : function() {
        if ("string" === c)
          for (var b, d = 0, e = m(this), f = a.match(E) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
      })
    },
    hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
      return !1
    }
  }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    m.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), m.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    },
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {
      return this.off(a, null, b)
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var vc = m.now(),
      wc = /\?/,
      xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  m.parseJSON = function(b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c, d = null,
        e = m.trim(b + "");
    return e && !m.trim(e.replace(xc, function(a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
    })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
  }, m.parseXML = function(b) {
    var c, d;
    if (!b || "string" != typeof b) return null;
    try {
      a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
    } catch (e) {
      c = void 0
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
  };
  var yc, zc, Ac = /#.*$/,
      Bc = /([?&])_=[^&]*/,
      Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ec = /^(?:GET|HEAD)$/,
      Fc = /^\/\//,
      Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Hc = {},
      Ic = {},
      Jc = "*/".concat("*");
  try {
    zc = location.href
  } catch (Kc) {
    zc = y.createElement("a"), zc.href = "", zc = zc.href
  }
  yc = Gc.exec(zc.toLowerCase()) || [], m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zc,
      type: "GET",
      isLocal: Dc.test(yc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Jc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": m.parseJSON,
        "text xml": m.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
    },
    ajaxPrefilter: Lc(Hc),
    ajaxTransport: Lc(Ic),
    ajax: function(a, b) {
      function x(a, b, c, d) {
        var j, r, s, u, w, x = b;
        2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
      }
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
          l = k.context || k,
          n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
          o = m.Deferred(),
          p = m.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function(a) {
              var b;
              if (2 === t) {
                if (!j)
                  for (j = {}; b = Cc.exec(f);) j[b[1].toLowerCase()] = b[2];
                b = j[a.toLowerCase()]
              }
              return null == b ? null : b
            },
            getAllResponseHeaders: function() {
              return 2 === t ? f : null
            },
            setRequestHeader: function(a, b) {
              var c = a.toLowerCase();
              return t || (a = s[c] = s[c] || a, r[a] = b), this
            },
            overrideMimeType: function(a) {
              return t || (k.mimeType = a), this
            },
            statusCode: function(a) {
              var b;
              if (a)
                if (2 > t)
                  for (b in a) q[b] = [q[b], a[b]];
                else v.always(a[v.status]);
              return this
            },
            abort: function(a) {
              var b = a || u;
              return i && i.abort(b), x(0, b), this
            }
          };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
      h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
      for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = "abort";
      for (d in {
        success: 1,
        error: 1,
        complete: 1
      }) v[d](k[d]);
      if (i = Mc(Ic, k, b, v)) {
        v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
          v.abort("timeout")
        }, k.timeout));
        try {
          t = 1, i.send(r, x)
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w)
        }
      } else x(-1, "No Transport");
      return v
    },
    getJSON: function(a, b, c) {
      return m.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return m.get(a, void 0, b, "script")
    }
  }), m.each(["get", "post"], function(a, b) {
    m[b] = function(a, c, d, e) {
      return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    m.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), m._evalUrl = function(a) {
    return m.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, m.fn.extend({
    wrapAll: function(a) {
      if (m.isFunction(a)) return this.each(function(b) {
        m(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    },
    wrapInner: function(a) {
      return this.each(m.isFunction(a) ? function(b) {
        m(this).wrapInner(a.call(this, b))
      } : function() {
        var b = m(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function(a) {
      var b = m.isFunction(a);
      return this.each(function(c) {
        m(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
      }).end()
    }
  }), m.expr.filters.hidden = function(a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
  }, m.expr.filters.visible = function(a) {
    return !m.expr.filters.hidden(a)
  };
  var Qc = /%20/g,
      Rc = /\[\]$/,
      Sc = /\r?\n/g,
      Tc = /^(?:submit|button|image|reset|file)$/i,
      Uc = /^(?:input|select|textarea|keygen)/i;
  m.param = function(a, b) {
    var c, d = [],
        e = function(a, b) {
          b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
    if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
      e(this.name, this.value)
    });
    else
      for (c in a) Vc(c, a[c], b, e);
    return d.join("&").replace(Qc, "+")
  }, m.fn.extend({
    serialize: function() {
      return m.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var a = m.prop(this, "elements");
        return a ? m.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
      }).map(function(a, b) {
        var c = m(this).val();
        return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
          return {
            name: b.name,
            value: a.replace(Sc, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(Sc, "\r\n")
        }
      }).get()
    }
  }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
  } : Zc;
  var Wc = 0,
      Xc = {},
      Yc = m.ajaxSettings.xhr();
  a.ActiveXObject && m(a).on("unload", function() {
    for (var a in Xc) Xc[a](void 0, !0)
  }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
    if (!a.crossDomain || k.cors) {
      var b;
      return {
        send: function(c, d) {
          var e, f = a.xhr(),
              g = ++Wc;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
            for (e in a.xhrFields) f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
          f.send(a.hasContent && a.data || null), b = function(c, e) {
            var h, i, j;
            if (b && (e || 4 === f.readyState))
              if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
              else {
                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                try {
                  i = f.statusText
                } catch (k) {
                  i = ""
                }
                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
              } j && d(h, i, j, f.getAllResponseHeaders())
          }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
        },
        abort: function() {
          b && b(void 0, !0)
        }
      }
    }
  }), m.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(a) {
        return m.globalEval(a), a
      }
    }
  }), m.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), m.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c = y.head || m("head")[0] || y.documentElement;
      return {
        send: function(d, e) {
          b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
          }, c.insertBefore(b, c.firstChild)
        },
        abort: function() {
          b && b.onload(void 0, !0)
        }
      }
    }
  });
  var _c = [],
      ad = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = _c.pop() || m.expando + "_" + vc++;
      return this[a] = !0, a
    }
  }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || m.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments
    }, d.always(function() {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), m.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || y;
    var d = u.exec(a),
        e = !c && [];
    return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
  };
  var bd = m.fn.load;
  m.fn.load = function(a, b, c) {
    if ("string" != typeof a && bd) return bd.apply(this, arguments);
    var d, e, f, g = this,
        h = a.indexOf(" ");
    return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
      url: a,
      type: f,
      dataType: "html",
      data: b
    }).done(function(a) {
      e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
    }).complete(c && function(a, b) {
      g.each(c, e || [a.responseText, b, a])
    }), this
  }, m.expr.filters.animated = function(a) {
    return m.grep(m.timers, function(b) {
      return a === b.elem
    }).length
  };
  var cd = a.document.documentElement;
  m.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = m.css(a, "position"),
          l = m(a),
          n = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
    }
  }, m.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function(b) {
        m.offset.setOffset(this, a, b)
      });
      var b, c, d = {
            top: 0,
            left: 0
          },
          e = this[0],
          f = e && e.ownerDocument;
      return f ? (b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d) : void 0
    },
    position: function() {
      if (this[0]) {
        var a, b, c = {
              top: 0,
              left: 0
            },
            d = this[0];
        return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - m.css(d, "marginTop", !0),
          left: b.left - c.left - m.css(d, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var a = this.offsetParent || cd; a && !m.nodeName(a, "html") && "static" === m.css(a, "position");) a = a.offsetParent;
        return a || cd
      })
    }
  }), m.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = /Y/.test(b);
    m.fn[a] = function(d) {
      return V(this, function(a, d, e) {
        var f = dd(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
      }, a, d, arguments.length, null)
    }
  }), m.each(["top", "left"], function(a, b) {
    m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
      return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
    })
  }), m.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    m.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      m.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
        return V(this, function(b, c, d) {
          var e;
          return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), m.fn.size = function() {
    return this.length
  }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return m
  });
  var ed = a.jQuery,
      fd = a.$;
  return m.noConflict = function(b) {
    return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
  }, typeof b === K && (a.jQuery = a.$ = m), m
}),
    function() {
      Array.prototype.forEach || (Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (null == this) throw new TypeError(" this is null or not defined");
        var O = Object(this),
            len = O.length >>> 0;
        if ("function" != typeof callback) throw new TypeError(callback + " is not a function");
        for (arguments.length > 1 && (T = thisArg), k = 0; len > k;) {
          var kValue;
          k in O && (kValue = O[k], callback.call(T, kValue, k, O)), k++
        }
      }), "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(callback) {
        "use strict";
        if (null === this || "undefined" == typeof this) throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof callback) throw new TypeError(callback + " is not a function");
        var value, t = Object(this),
            len = t.length >>> 0,
            k = 0;
        if (arguments.length >= 2) value = arguments[1];
        else {
          for (; len > k && !k in t;) k++;
          if (k >= len) throw new TypeError("Reduce of empty array with no initial value");
          value = t[k++]
        }
        for (; len > k; k++) k in t && (value = callback(value, t[k], k, t));
        return value
      }), Array.prototype.map || (Array.prototype.map = function(callback, thisArg) {
        var T, A, k;
        if (null == this) throw new TypeError(" this is null or not defined");
        var O = Object(this),
            len = O.length >>> 0;
        if ("function" != typeof callback) throw new TypeError(callback + " is not a function");
        for (arguments.length > 1 && (T = thisArg), A = new Array(len), k = 0; len > k;) {
          var kValue, mappedValue;
          k in O && (kValue = O[k], mappedValue = callback.call(T, kValue, k, O), A[k] = mappedValue), k++
        }
        return A
      }), Array.prototype.indexOf || (Array.prototype.indexOf = function(searchElement, fromIndex) {
        var k;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var O = Object(this),
            len = O.length >>> 0;
        if (0 === len) return -1;
        var n = +fromIndex || 0;
        if (1 / 0 === Math.abs(n) && (n = 0), n >= len) return -1;
        for (k = Math.max(n >= 0 ? n : len - Math.abs(n), 0); len > k;) {
          if (k in O && O[k] === searchElement) return k;
          k++
        }
        return -1
      }), "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(callback) {
        "use strict";
        if (null === this || "undefined" == typeof this) throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof callback) throw new TypeError(callback + " is not a function");
        var value, t = Object(this),
            len = t.length >>> 0,
            k = 0;
        if (arguments.length >= 2) value = arguments[1];
        else {
          for (; len > k && !k in t;) k++;
          if (k >= len) throw new TypeError("Reduce of empty array with no initial value");
          value = t[k++]
        }
        for (; len > k; k++) k in t && (value = callback(value, t[k], k, t));
        return value
      })
    }(FC);
var FC = FC || {};
"object" == typeof module && module.exports && (module.exports = FC), window.console || (console = {
  log: function() {}
}),
    function(FC) {
      "use strict";

      function setCookie(currentdomain) {
        var name = FC.settings.session_name,
            value = FC.settings.session_id,
            options = {
              path: FC.settings.cookiepath ? FC.settings.cookiepath : "/",
              domain: currentdomain
            };
        value = encodeURIComponent(value);
        var cookie = name + "=" + value;
        for (var prop in options) cookie += "; " + prop + "=" + options[prop];
        document.cookie = cookie, FC.util.log("Cookie set: " + cookie)
      }

      function getCookie() {
        for (var name = FC.settings.session_name + "=", cookies = document.cookie.split(";"), i = 0; i < cookies.length; i++) {
          for (var c = cookies[i];
               " " == c.charAt(0);) c = c.substring(1, c.length);
          if (0 == c.indexOf(name)) return decodeURIComponent(c.substring(name.length, c.length))
        }
        return ""
      }
      var session = {};
      session.sessionExists = function() {
        var cookie = getCookie();
        return "" !== cookie
      }, session.initialize = function() {
        if (!this.initialized) {
          if (FC.util.log("Initializing session"), !FC.settings.session_id) {
            FC.util.log("No FC.settings.session_id found, setting one");
            var regex = new RegExp("#" + FC.settings.session_name + "=([A-Za-z0-9]*)");
            if (regex.test(window.location.href)) {
              FC.util.log("Found session id in URL, setting FC.settings.session_id and the cookie");
              var match = regex.exec(window.location.href);
              FC.settings.session_id = match[1], this.set()
            } else this.sessionExists() ? (FC.util.log("Found session id in the cookie, setting FC.settings.session_id"), FC.settings.session_id = getCookie()) : FC.json && FC.json.session_id && (FC.util.log("Found session id in FC.json, setting FC.settings.session_id"), FC.settings.session_id = FC.json.session_id, this.set())
          }
          FC.settings.session_id ? this.initialized = !0 : FC.util.log("No session id found to set.")
        }
      }, session.reset = function(session_id) {
        return session_id ? (FC.settings.session_id = session_id, this.set(), "undefined" != typeof FC.cart && FC.cart.render(), FC.client.updateMiniCart()) : FC.client.request("https://" + FC.settings.storedomain + "/cart?cart=view&empty=reset"), !1
      }, session.get = function() {
        return this.initialize(), this.initialized ? FC.settings.session_name + "=" + FC.settings.session_id : ""
      }, session.set = function() {
        if (window.location.hostname == FC.settings.storedomain) return !1;
        var sitedomain = FC.settings.sitedomain.split(".");
        "www" == sitedomain[0] && sitedomain.shift();
        for (var currentdomain = window.location.hostname.split("."); currentdomain.length > sitedomain.length;) currentdomain.shift();
        return currentdomain = "." + currentdomain.join("."), ".foxycart.com" == currentdomain ? !1 : (setCookie(currentdomain), !0)
      }, session.updateParams = function(params) {
        return this.initialize(), this.initialized && (params[FC.settings.session_name] = FC.settings.session_id), params
      }, FC.session = session
    }(FC),
    function(FC, $) {
      "use strict";

      function Evented(object) {
        return object = $.extend(object, Evented.prototype), object.events = {}, object
      }

      function Event(type) {
        this.type = type, this.handlers = [], this.defaultHandler = null
      }

      function addHandlerToPromise(promise, handler) {
        return promise = promise.pipe(function(params, context) {
          var returned, fn, deferred = $.Deferred();
          return handler.length < 2 ? returned = handler.call(context, params) : (params.async = !0, fn = function(success) {
            success === !1 ? deferred.reject() : deferred.resolve(params, context)
          }, returned = handler.call(context, params, fn)), returned === !1 ? deferred.reject() : returned !== !0 && fn || deferred.resolve(params, context), deferred.promise()
        })
      }
      FC.Evented = Evented, FC.Event = Event, Event.DONE_SUFFIX = ".done", Evented.prototype.event = function(eventName) {
        return this.events[eventName] instanceof Event || (this.events[eventName] = new Event(eventName)), this.events[eventName]
      }, Evented.prototype.on = function(eventName, handler) {
        return this.event(eventName).append(handler), this
      }, Evented.prototype.off = function(eventName, handler) {
        for (var event = this.event(eventName), handlers = event.handlers, i = handlers.length; i--;) handler === handlers[i] && handlers.splice(i, 1);
        return this
      }, Evented.prototype.wrap = function(eventName, defaultHandler) {
        var mainEvent = this.event(eventName),
            postEvent = this.event(eventName + Event.DONE_SUFFIX);
        return mainEvent.defaultHandler = defaultHandler,
            function(params) {
              params = params || {};
              var returned = !1,
                  context = this;
              return mainEvent.trigger(params, context).done(function() {
                returned = !0, postEvent.trigger(params, context)
              }).fail(function() {
                $.isFunction(params.onFail) && params.onFail.call(context, params)
              }), returned
            }
      }, Event.prototype.append = function(callback) {
        this.handlers.push(callback)
      }, Event.prototype.prepend = function(callback) {
        this.handlers.unshift(callback)
      }, Event.prototype.defer = function(promise) {
        return $.each(this.handlers, function(i, handler) {
          promise = addHandlerToPromise(promise, handler)
        }), $.isFunction(this.defaultHandler) && (promise = addHandlerToPromise(promise, this.defaultHandler)), promise
      }, Event.prototype.override = function(callback) {
        var defaultHandler = this.defaultHandler;
        this.defaultHandler = callback.length < 2 ? function(params) {
          return params["super"] = defaultHandler, callback.call(this, params)
        } : function(params, next) {
          return params["super"] = defaultHandler, callback.call(this, params, next)
        }
      }, Event.prototype.trigger = function(params, context) {
        params = params || {};
        var deferred = $.Deferred(),
            promise = deferred.resolve(params, context);
        return this.defer(promise)
      }
    }(FC, jQuery),
    function(FC) {
      var util = {};
      util.money_format = function(format, number) {
        if ("number" != typeof number) return null;
        var regex = /%((=.|[+^(!-])*?)(\d*?)(#(\d+))?(\.(\d+))?([in%])/g,
            monetary = FC.json.locale_info,
            doReplace = function(n0, flags, n2, width, n4, left, n6, right, conversion) {
              var value = "",
                  repl = "";
              if ("%" === conversion) return "%";
              var fill = flags && /=./.test(flags) ? flags.match(/=(.)/)[1] : " ",
                  showCurrSymbol = !flags || -1 === flags.indexOf("!");
              width = parseInt(width, 10) || 0;
              var neg = 0 > number;
              neg && (number = -number), right = "" === right || void 0 === right ? "i" === conversion ? monetary.int_frac_digits : monetary.frac_digits : parseInt(right, 10), number = util.round(number, right), number = number.toFixed(right);
              var decpos = number.indexOf("."),
                  integer = -1 !== decpos ? number.slice(0, decpos) : number,
                  fraction = -1 !== decpos ? number.slice(decpos + 1) : "",
                  _str_splice = function(integerStr, idx, thous_sep) {
                    var integerArr = integerStr.split("");
                    return integerArr.splice(idx, 0, thous_sep), integerArr.join("")
                  },
                  init_lgth = integer.length;
              left = parseInt(left, 10);
              var filler = left > init_lgth;
              if (filler) {
                var fillnum = left - init_lgth;
                integer = new Array(fillnum + 1).join(fill) + integer
              }
              if (-1 === flags.indexOf("^")) {
                var thous_sep = monetary.mon_thousands_sep,
                    mon_grouping = monetary.mon_grouping;
                if (mon_grouping[0] < integer.length)
                  for (var i = 0, idx = integer.length; i < mon_grouping.length && (idx -= mon_grouping[i], !(0 >= idx)); i++) filler && fillnum > idx && (thous_sep = fill), integer = _str_splice(integer, idx, thous_sep);
                if (mon_grouping[i - 1] > 0)
                  for (; idx > mon_grouping[i - 1];) idx -= mon_grouping[i - 1], filler && fillnum > idx && (thous_sep = fill), integer = _str_splice(integer, idx, thous_sep)
              }
              value = fraction ? integer + monetary.mon_decimal_point + fraction : integer;
              var symbol = "";
              showCurrSymbol && (symbol = "i" === conversion ? monetary.int_curr_symbol : monetary.currency_symbol);
              var sign_posn = neg ? monetary.n_sign_posn : monetary.p_sign_posn,
                  sep_by_space = neg ? monetary.n_sep_by_space : monetary.p_sep_by_space,
                  cs_precedes = neg ? monetary.n_cs_precedes : monetary.p_cs_precedes;
              if (-1 !== flags.indexOf("(")) repl = (cs_precedes ? symbol + (1 === sep_by_space ? " " : "") : "") + value + (cs_precedes ? "" : (1 === sep_by_space ? "Â " : "") + symbol), repl = neg ? "(" + repl + ")" : "Â " + repl + "Â ";
              else {
                var pos_sign = monetary.positive_sign,
                    neg_sign = monetary.negative_sign,
                    sign = neg ? neg_sign : pos_sign,
                    otherSign = neg ? pos_sign : neg_sign,
                    signPadding = "";
                sign_posn && (signPadding = new Array(otherSign.length - sign.length + 1).join(" "));
                var valueAndCS = "";
                switch (sign_posn) {
                  case 0:
                    valueAndCS = cs_precedes ? symbol + (1 === sep_by_space ? "Â " : "") + value : value + (1 === sep_by_space ? "Â " : "") + symbol, repl = "(" + valueAndCS + ")";
                    break;
                  case 1:
                    valueAndCS = cs_precedes ? symbol + (1 === sep_by_space ? "Â " : "") + value : value + (1 === sep_by_space ? "Â " : "") + symbol, repl = signPadding + sign + (2 === sep_by_space ? "Â " : "") + valueAndCS;
                    break;
                  case 2:
                    valueAndCS = cs_precedes ? symbol + (1 === sep_by_space ? "Â " : "") + value : value + (1 === sep_by_space ? "Â " : "") + symbol, repl = valueAndCS + (2 === sep_by_space ? "Â " : "") + sign + signPadding;
                    break;
                  case 3:
                    repl = cs_precedes ? signPadding + sign + (2 === sep_by_space ? "Â " : "") + symbol + (1 === sep_by_space ? "Â " : "") + value : value + (1 === sep_by_space ? "Â " : "") + sign + signPadding + (2 === sep_by_space ? "Â " : "") + symbol;
                    break;
                  case 4:
                    repl = cs_precedes ? symbol + (2 === sep_by_space ? "Â " : "") + signPadding + sign + (1 === sep_by_space ? "Â " : "") + value : value + (1 === sep_by_space ? "Â " : "") + symbol + (2 === sep_by_space ? "Â " : "") + sign + signPadding
                }
              }
              var padding = width - repl.length;
              return padding > 0 && (padding = new Array(padding + 1).join(" "), -1 !== flags.indexOf("-") ? repl += padding : repl = padding + repl), repl
            };
        return format.replace(regex, doReplace)
      }, util.round = function(number, precision) {
        var mul_div = Math.pow(10, precision),
            increment = 1 / (10 * mul_div);
        return 10 * number * mul_div % 10 >= 5 && (number += increment), Math.round(number * mul_div) / mul_div
      }, util.str_pad = function(input, pad_length, pad_string, pad_type) {
        var pad_to_go, half = "",
            str_pad_repeater = function(s, len) {
              for (var collect = ""; collect.length < len;) collect += s;
              return collect = collect.substr(0, len)
            };
        return input += "", pad_string = void 0 !== pad_string ? pad_string : " ", "STR_PAD_LEFT" !== pad_type && "STR_PAD_RIGHT" !== pad_type && "STR_PAD_BOTH" !== pad_type && (pad_type = "STR_PAD_RIGHT"), (pad_to_go = pad_length - input.length) > 0 && ("STR_PAD_LEFT" === pad_type ? input = str_pad_repeater(pad_string, pad_to_go) + input : "STR_PAD_RIGHT" === pad_type ? input += str_pad_repeater(pad_string, pad_to_go) : "STR_PAD_BOTH" === pad_type && (half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2)), input = half + input + half, input = input.substr(0, pad_length))), input
      }, util.unserialize = function(Data) {
        var Data = Data.split("&"),
            Serialized = {};
        return jQuery.each(Data, function() {
          var Properties = this.split("=");
          Serialized[Properties[0]] = Properties[1]
        }), Serialized
      }, util.addError = function(context, message) {
        ("undefined" == typeof FC.validator || FC.validator.ready_to_validate) && (context || message) && (util.hasError(context, message) || FC.json.messages.errors.push({
          context: context,
          message: message
        }), util.log("addError for", context))
      }, util.addWarning = function(context, message) {
        (context || message) && (util.hasWarning(context, message) || FC.json.messages.warnings.push({
          context: context,
          message: message
        }), util.log("addError for", context))
      }, util.removeWarning = function(context) {
        for (var warnings = Array(), i = 0; i < FC.json.messages.warnings.length; i++) FC.json.messages.warnings[i].context != context && warnings.push(FC.json.messages.warnings[i]);
        FC.json.messages.warnings = warnings
      }, util.removeError = function(context) {
        for (var errors = Array(), i = 0; i < FC.json.messages.errors.length; i++) FC.json.messages.errors[i].context != context && errors.push(FC.json.messages.errors[i]);
        FC.json.messages.errors = errors, util.log("removeError for", context)
      }, util.hasError = function(context, message) {
        var found = !1,
            check_message = "undefined" != typeof message;
        return FC.json.messages.errors.forEach(function(error) {
          error.context !== context || (check_message ? error.message !== message : 0) || (found = !0)
        }), found
      }, util.hasWarning = function(context, message) {
        var found = !1,
            check_message = "undefined" != typeof message;
        return FC.json.messages.warnings.forEach(function(warning) {
          warning.context !== context || (check_message ? warning.message !== message : 0) || (found = !0)
        }), found
      }, util.notifyErrors = function() {
        var $notifier = $("[data-fc-error-notifier]"),
            $textEl = $notifier.find("[data-fc-notifier-text]"),
            messagesWithContext = function() {
              var count = 0;
              return FC.json.messages.errors.forEach(function(error) {
                "" !== error.context && (count += 1)
              }), count
            };
        if ($notifier.length)
          if (messagesWithContext() > 0) {
            var message = "";
            if (message = 1 === FC.json.messages.errors.length ? FC.json.messages.errors.length + " " + FC.json.config.lang.checkout_required_piece_missing : FC.json.messages.errors.length + " " + FC.json.config.lang.checkout_required_pieces_missing, $textEl.length) $textEl.text(message), $notifier.addClass("fc-alert fc-alert--danger");
            else {
              var temp = $("<p>").text(message);
              $notifier.empty().append(temp).addClass("fc-alert fc-alert--danger")
            }
          } else $notifier.removeClass("fc-alert fc-alert--danger");
        $("body").trigger("notificationUpdate")
      }, util.clearMessages = function() {
        if ("undefined" != typeof FC.json && "undefined" != typeof FC.json.messages) {
          var messages = {
            errors: [],
            warnings: [],
            info: []
          };
          FC.json.messages.info.forEach(function(info) {
            "expiring_product" == info.context && messages.info.push({
              context: info.context,
              message: info.message
            })
          }), FC.json.messages.warnings.forEach(function(warning) {
            ("subscription_modify" == warning.context && FC.json.is_subscription_modification || "subscription_cancel" == warning.context && FC.json.is_subscription_cancel) && messages.warnings.push({
              context: warning.context,
              message: warning.message
            })
          }), FC.json.messages = messages
        }
      }, util.cleanMessage = function(type, context) {
        var messages = [];
        "undefined" != typeof FC.json && "undefined" != typeof FC.json.messages && "undefined" != typeof FC.json.messages[type] && (FC.json.messages[type].forEach(function(message) {
          message.context !== context && messages.push(message)
        }), FC.json.messages[type] = messages)
      }, util.log = function() {
        var prefix = ["%c FC ", "color:#fff; font-size:11px; background:#c99; font-weight:bold; border-radius:3px;"];
        arguments[0].match(/%c /) && (prefix = []);
        var args = prefix;
        if (FC.json && FC.json.config && FC.json.config.template_config && "required" === FC.json.config.template_config.debug.usage || FC.override && 1 == FC.override.debug)
          if (console.log && console.log.apply) {
            for (var n = 0; n < arguments.length; ++n) args.push(arguments[n]);
            navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? (args[0] = "FC", args.splice(1, 1), console.debug.apply(console, args)) : console.log.apply(console, args)
          } else {
            for (var ieArgs = [], n = 0; n < arguments.length; ++n) ieArgs.push("string" != typeof arguments[n] ? arguments[n].name : arguments[n]);
            console.log(ieArgs.join(" "))
          }
      }, util.isAddressAllowable = function(address_type, address) {
        var filters = FC.json.config.template_config.location_filtering,
            type = filters[address_type + "_filter_type"],
            values = filters[address_type + "_filter_values"],
            country = address.getCountryCode(),
            region = address.getRegion();
        return "none" === filters.usage ? !0 : "blacklist" === type ? !(values.hasOwnProperty(country) && ("*" === values[country] || -1 !== values[country].indexOf(region))) : values.hasOwnProperty(country) && ("*" === values[country] || -1 !== values[country].indexOf(region))
      }, util.isAddressRegionRequired = function(country_code) {
        var country = FC.json.config.locations[country_code];
        return country && country.r.req
      }, util.isAddressPostalCodeRequired = function(country_code) {
        var country = FC.json.config.locations[country_code];
        return country && country.pc.req
      }, util.isAddressPostalCodeLookupSupported = function(country_code) {
        var country = FC.json.config.locations[country_code];
        return country && country.pc.search
      }, util.addressIsComplete = function(address) {
        var is_complete = util.addressHasLocationInfo(address);
        if (is_complete) {
          if (!address.address1) return !1;
          if (!address.country) return !1
        }
        return is_complete
      }, util.addressHasLocationInfo = function(address) {
        return address.city && address.country ? !address.postal_code && util.isAddressPostalCodeRequired(address.country) ? !1 : !address.region && util.isAddressRegionRequired(address.country) ? !1 : !0 : !1
      }, util.hashAddress = function(address) {
        var address_as_a_string = "";
        return address_as_a_string += address.address1 ? address.address1 : "", address_as_a_string += address.address2 ? "," + address.address2 : "", address_as_a_string += address.city ? "," + address.city : "", address_as_a_string += address.region ? "," + address.region : "", address_as_a_string += address.postal_code ? "," + address.postal_code : "", address_as_a_string += address.country ? "," + address.country : "", util.hashString(address_as_a_string)
      }, util.doAddressValidation = function(address) {
        var do_validation = FC.json.config.supports_address_validation && util.addressIsComplete(address) && !FC.json.is_subscription_cancel && !util.addressIsValidated(address) && -1 != $.inArray(address.country, FC.json.config.address_validation_countries);
        return do_validation
      }, util.addressIsValidated = function(address) {
        return address.validated_hash ? util.hashAddress(address) == address.validated_hash : !1
      }, util.hashString = function(string_to_hash) {
        var i, chr, len, hash = 0;
        if (0 == string_to_hash.length) return hash;
        for (i = 0, len = string_to_hash.length; len > i; i++) chr = string_to_hash.charCodeAt(i), hash = (hash << 5) - hash + chr, hash |= 0;
        return hash
      }, util.supportsLocalStorage = function() {
        var storage, result, uid = new Date;
        try {
          return (storage = window.localStorage).setItem(uid, uid), result = storage.getItem(uid) == uid, storage.removeItem(uid), result && storage
        } catch (e) {}
      }, util.getBootstrapEnvironment = function() {
        var envs = ["xs", "sm", "md", "lg"],
            doc = window.document,
            temp = doc.createElement("div");
        doc.body.appendChild(temp);
        for (var env, i = 0; i < envs.length && (env = envs[i], temp.className = "hidden-" + env, null !== temp.offsetParent); i++);
        return doc.body.removeChild(temp), env
      }, util.tick = function(callback) {
        setTimeout(callback, 0)
      }, util.scrollTo = function(scroll_top) {
        var args = Array.prototype.slice.call(arguments, 0, arguments.length);
        args[0] = {
          scrollTop: scroll_top
        };
        var context = $("html, body");
        return context.animate.apply(context, args)
      }, util.getBillingCountry = function() {
        var country = FC.json.use_different_addresses || !FC.json.shipping_address.has_shippable_products ? FC.json.billing_address.country : FC.json.shipping_address.country;
        return FC.json.has_multiple_addresses && !FC.json.use_different_addresses && $.each(FC.json.multiship_data, function(i, address) {
          (0 === i || "Me" === address.address_name) && (country = address.country)
        }), country
      }, util.capitalizeFirstLetter = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }, util.hasSubString = function(string, substr) {
        return -1 !== string.indexOf(substr)
      }, util.getUrlParameter = function(sParam) {
        var sParameterName, i, sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split("&");
        for (i = 0; i < sURLVariables.length; i++)
          if (sParameterName = sURLVariables[i].split("="), sParameterName[0] === sParam) return void 0 === sParameterName[1] ? !0 : decodeURIComponent(sParameterName[1])
      },
          function() {
            for (var method, noop = function() {}, methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], length = methods.length, console = window.console = window.console || {}; length--;) method = methods[length], console[method] || (console[method] = noop);
            util.log("%c FoxyCart ", "color:#fff; font-size:11px; background:#900; font-weight:bold; border-radius:3px;", "Debug Mode Enabled")
          }(), FC.util = util
    }(FC),
    function(FC, $) {
      "use strict";

      function mergeGlobalContext() {
        var globalContext = $("body").data("fc-context");
        $.extend(FC.json, globalContext)
      }
      var session = FC.session,
          client = (FC.Event, FC.client = {
            EVENT_PROCESS_CLASS_NAME: "fc-event-process"
          });
      client = FC.Evented(client), client.isActionNeeded = function(params) {
        var data = params.data;
        return "checkout" == data.cart || "updateinfo" == data.cart || data.redirect || params.url.match("receipt(.php)?\\?id=") ? !1 : !0
      }, client._prepareElement = function(element) {
        var qs = "";
        return "A" == element.tagName ? (qs = element.href.match(/\?(.*)$/), qs = qs && qs[1] || "") : "FORM" == element.tagName && (qs = $(element).serialize()), qs.replace(/\|\|[A-Za-z0-9]{64}(\|\|open)?/g, ""), FC.util.unserialize(qs)
      }, client.prepareParams = function(element) {
        var url, $element = $(element);
        if ($element.is("a")) url = $element.attr("href");
        else {
          if (!$element.is("form")) throw Error("Not supported");
          url = $element.attr("action"), url += url.indexOf("?") > -1 ? "&" : "?", url += $element.serialize()
        }
        return {
          element: element,
          data: this._prepareElement(element),
          url: url
        }
      }, client.updateJSON = function(dataJSON) {
        var multiship_data, shipping_address, context = "cart";
        "undefined" != typeof FC.json && "undefined" != typeof FC.json.context && (context = FC.json.context, multiship_data = jQuery.extend(!0, {}, FC.json.multiship_data), shipping_address = jQuery.extend(!0, {}, FC.json.shipping_address)), "cart" == context && FC.util.clearMessages(), FC.json = $.extend(!0, FC.json, dataJSON), FC.json.items = dataJSON.items, FC.json.coupons = dataJSON.coupons, FC.json.gift_cards = dataJSON.gift_cards, FC.json.future_subscription_totals_by_date = dataJSON.future_subscription_totals_by_date, "undefined" == typeof FC.json.config && (FC.json.config = {}), FC.json.context = context, shipping_address && (dataJSON.shipping_address && 0 == dataJSON.shipping_address.shipping_results.length && (FC.json.shipping_address.shipping_results = []), FC.json.shipping_address.first_name = shipping_address.first_name, FC.json.shipping_address.last_name = shipping_address.last_name, FC.json.shipping_address.address1 = shipping_address.address1, FC.json.shipping_address.address2 = shipping_address.address2, FC.json.shipping_address.city = shipping_address.city, FC.json.shipping_address.city_option_selected = shipping_address.city_option_selected, FC.json.shipping_address.city_options = shipping_address.city_options, FC.json.shipping_address.company = shipping_address.company, FC.json.shipping_address.country = shipping_address.country, FC.json.shipping_address.country_name = shipping_address.country_name, FC.json.shipping_address.phone = shipping_address.phone, FC.json.shipping_address.postal_code = shipping_address.postal_code, FC.json.shipping_address.region = shipping_address.region, FC.json.shipping_address.region_label = shipping_address.region_label, FC.json.shipping_address.region_name = shipping_address.region_name), multiship_data && (FC.json.multiship_data = multiship_data), mergeGlobalContext(), client.updateMiniCart()
      }, client._request = function(url, data, callback) {
        return data = data || {}, data.output = "json", $.ajax({
          url: url,
          dataType: "jsonp",
          data: session.updateParams(data)
        }).done(function(dataJSON) {
          callback(dataJSON)
        })
      }, client.request = function(url, data) {
        return client._request(url, data, function(dataJSON) {
          client.updateJSON(dataJSON), !session.initialized && dataJSON.session_id && session.initialize(), FC.settings.session_id && FC.settings.session_id != dataJSON.session_id && (session.reset(dataJSON.session_id), FC.json.shipping_address.region = "", FC.json.shipping_address.postal_code = "", FC.json.shipping_address.city = "", FC.json.shipping_address.city_options = [], FC.json.shipping_address.city_option_selected = "")
        })
      }, client.requestConfig = function() {
        return client._request("https://" + FC.settings.storedomain + "/cart?cart=config", null, function(dataJSON) {
          FC.json.config = $.extend(FC.json.config, dataJSON)
        })
      }, client.submitCart = client.wrap("cart-submit", function(params) {
        if (params.async) {
          var $element = $(params.element);
          return $element.is("a") ? window.location.href = $element.attr("href") : $element.is("form") && $element.addClass(client.EVENT_PROCESS_CLASS_NAME).submit().removeClass(client.EVENT_PROCESS_CLASS_NAME), client.updateMiniCart(), !1
        }
        return !0
      }), client.updateCart = function() {
        return this.request("https://" + FC.settings.storedomain + "/cart?cart=get")
      }, client.updateMiniCart = function() {
        FC.json.item_count > 0 ? ($("[data-fc-id='minicart-empty']").hide(), $("[data-fc-id='minicart'], #fc_minicart, .fc_minicart").show(), 1 == FC.json.item_count ? ($("[data-fc-id='minicart-plural'], #fc_plural, .fc_plural").hide(), $("[data-fc-id='minicart-singular'], #fc_singular, .fc_singular").show()) : ($("[data-fc-id='minicart-plural'], #fc_plural, .fc_plural").show(), $("[data-fc-id='minicart-singular'], #fc_singular, .fc_singular").hide())) : ($("[data-fc-id='minicart-empty']").show(), $("[data-fc-id='minicart'], #fc_minicart, .fc_minicart").hide(), $("[data-fc-id='minicart-plural'], #fc_plural, .fc_plural").show(), $("[data-fc-id='minicart-singular'], #fc_singular, .fc_singular").hide()), $("[data-fc-id='minicart-quantity'], #fc_quantity, .fc_quantity").html("" + FC.json.item_count);
        var total_order = FC.json.total_order % 1 == 0 ? FC.json.total_order : FC.json.total_order.toFixed(2);
        $("[data-fc-id='minicart-order-total'], #fc_total_price, .fc_total_price").html("" + total_order)
      }, client.applySession = function() {
        $("body").on("click", 'a[href*="' + FC.settings.storedomain + '"]', function() {
          var regex = new RegExp(FC.settings.session_name + "=([A-Za-z0-9]*)"),
              href = $(this).attr("href");
          regex.test(href) || (href += href.indexOf("?") > -1 ? "&" : "?", $(this).attr("href", href + session.get()))
        }), $("body").on("submit", 'form[action*="' + FC.settings.storedomain + '"]', function() {
          if (0 == $(this).children("input[name=" + FC.settings.session_name + "]").length) {
            var $input = $('<input type="hidden">').attr("name", FC.settings.session_name).val(FC.settings.session_id);
            $(this).prepend($input)
          }
        })
      }, client.preventDefaultActions = function() {
        $("body").on("click", 'a[href*="' + FC.settings.storedomain + '/cart"]', function(event) {
          client.submitCart(client.prepareParams(this)) === !1 && event.preventDefault()
        }), $("body").on("submit", 'form[action*="' + FC.settings.storedomain + '/cart"]', function(event) {
          $(this).hasClass(client.EVENT_PROCESS_CLASS_NAME) || client.submitCart(client.prepareParams(this)) === !1 && event.preventDefault()
        })
      }, client.on("render.done", function() {
        client.updateMiniCart()
      }), client.init = client.wrap("ready", function(params, next) {
        FC.util.log("FC.client.init() started"), client.applySession(), client.preventDefaultActions(), FC.json && mergeGlobalContext();
        var context = "cart";
        "undefined" != typeof FC.json && "undefined" != typeof FC.json.context && (context = FC.json.context);
        var cart_is_fullpage = $("body").attr("data-fc-context") && $("body").attr("data-fc-context").match(/cart_is_fullpage/);
        "cart" != context || cart_is_fullpage ? next() : client.updateCart().done(function() {
          client.updateMiniCart(), next()
        })
      })
    }(FC, jQuery);
var Twig = function(Twig) {
      return Twig.VERSION = "0.8.2-7", Twig
    }(Twig || {}),
    Twig = function(Twig) {
      "use strict";

      function is(type, obj) {
        var clas = Object.prototype.toString.call(obj).slice(8, -1);
        return void 0 !== obj && null !== obj && clas === type
      }

      function relativePath(template, file) {
        var base, base_path, val, sep_chr = "/",
            new_path = [];
        if (template.url) base = "undefined" != typeof template.base ? template.base + ("/" === template.base.charAt(template.base.length - 1) ? "" : "/") : template.url;
        else {
          if (!template.path) throw new Twig.Error("Cannot extend an inline template.");
          var path = require("path"),
              sep = path.sep || sep_chr,
              relative = new RegExp("^\\.{1,2}" + sep.replace("\\", "\\\\"));
          file = file.replace(/\//g, sep), void 0 !== template.base && null == file.match(relative) ? (file = file.replace(template.base, ""), base = template.base + sep) : base = template.path, base = base.replace(sep + sep, sep), sep_chr = sep
        }
        for (base_path = base.split(sep_chr), base_path.pop(), base_path = base_path.concat(file.split(sep_chr)); base_path.length > 0;) val = base_path.shift(), "." == val || (".." == val && new_path.length > 0 && ".." != new_path[new_path.length - 1] ? new_path.pop() : new_path.push(val));
        return new_path.join(sep_chr)
      }
      return Twig.trace = !1, Twig.debug = !1, Twig.cache = !0, Twig.placeholders = {
        parent: "{{|PARENT|}}"
      }, Twig.indexOf = function(arr, searchElement) {
        if (Array.prototype.hasOwnProperty("indexOf")) return arr.indexOf(searchElement);
        if (void 0 === arr || null === arr) throw new TypeError;
        var t = Object(arr),
            len = t.length >>> 0;
        if (0 === len) return -1;
        var n = 0;
        if (arguments.length > 0 && (n = Number(arguments[1]), n !== n ? n = 0 : 0 !== n && 1 / 0 !== n && n !== -1 / 0 && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= len) return -1;
        for (var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); len > k; k++)
          if (k in t && t[k] === searchElement) return k;
        return arr == searchElement ? 0 : -1
      }, Twig.forEach = function(arr, callback, thisArg) {
        if (Array.prototype.forEach) return arr.forEach(callback, thisArg);
        var T, k;
        if (null == arr) throw new TypeError(" this is null or not defined");
        var O = Object(arr),
            len = O.length >>> 0;
        if ("[object Function]" != {}.toString.call(callback)) throw new TypeError(callback + " is not a function");
        for (thisArg && (T = thisArg), k = 0; len > k;) {
          var kValue;
          k in O && (kValue = O[k], callback.call(T, kValue, k, O)), k++
        }
      }, Twig.merge = function(target, source, onlyChanged) {
        return Twig.forEach(Object.keys(source), function(key) {
          (!onlyChanged || key in target) && (target[key] = source[key])
        }), target
      }, Twig.Error = function(message) {
        this.message = message, this.name = "TwigException", this.type = "TwigException"
      }, Twig.Error.prototype.toString = function() {
        var output = this.name + ": " + this.message;
        return output
      }, Twig.log = {
        trace: function() {
          Twig.trace && console && console.log(Array.prototype.slice.call(arguments))
        },
        debug: function() {
          Twig.debug && console && console.log(Array.prototype.slice.call(arguments))
        }
      }, "undefined" != typeof console ? "undefined" != typeof console.error ? Twig.log.error = function() {
        console.error.apply(console, arguments)
      } : "undefined" != typeof console.log && (Twig.log.error = function() {
        console.log.apply(console, arguments)
      }) : Twig.log.error = function() {}, Twig.ChildContext = function(context) {
        var ChildContext = function() {};
        return ChildContext.prototype = context, new ChildContext
      }, Twig.token = {}, Twig.token.type = {
        output: "output",
        logic: "logic",
        comment: "comment",
        raw: "raw"
      }, Twig.token.definitions = [{
        type: Twig.token.type.raw,
        open: "{% raw %}",
        close: "{% endraw %}"
      }, {
        type: Twig.token.type.raw,
        open: "{% verbatim %}",
        close: "{% endverbatim %}"
      }, {
        type: Twig.token.type.output,
        open: "{{",
        close: "}}"
      }, {
        type: Twig.token.type.logic,
        open: "{%",
        close: "%}"
      }, {
        type: Twig.token.type.comment,
        open: "{#",
        close: "#}"
      }], Twig.token.strings = ['"', "'"], Twig.token.findStart = function(template) {
        var i, token_template, first_key_position, output = {
          position: null,
          def: null
        };
        for (i = 0; i < Twig.token.definitions.length; i++) token_template = Twig.token.definitions[i], first_key_position = template.indexOf(token_template.open), Twig.log.trace("Twig.token.findStart: ", "Searching for ", token_template.open, " found at ", first_key_position), first_key_position >= 0 && (null === output.position || first_key_position < output.position) && (output.position = first_key_position, output.def = token_template);
        return output
      }, Twig.token.findEnd = function(template, token_def, start) {
        for (var i, l, end = null, found = !1, offset = 0, str_pos = null, str_found = null, pos = null, end_offset = null, this_str_pos = null, end_str_pos = null; !found;) {
          if (str_pos = null, str_found = null, pos = template.indexOf(token_def.close, offset), !(pos >= 0)) throw new Twig.Error("Unable to find closing bracket '" + token_def.close + "' opened near template position " + start);
          if (end = pos, found = !0, token_def.type === Twig.token.type.comment) break;
          for (l = Twig.token.strings.length, i = 0; l > i; i += 1) this_str_pos = template.indexOf(Twig.token.strings[i], offset), this_str_pos > 0 && pos > this_str_pos && (null === str_pos || str_pos > this_str_pos) && (str_pos = this_str_pos, str_found = Twig.token.strings[i]);
          if (null !== str_pos)
            for (end_offset = str_pos + 1, end = null, found = !1;;) {
              if (end_str_pos = template.indexOf(str_found, end_offset), 0 > end_str_pos) throw "Unclosed string in template";
              if ("\\" !== template.substr(end_str_pos - 1, 1)) {
                offset = end_str_pos + 1;
                break
              }
              end_offset = end_str_pos + 1
            }
        }
        return end
      }, Twig.tokenize = function(template) {
        for (var tokens = [], error_offset = 0, found_token = null, end = null; template.length > 0;) found_token = Twig.token.findStart(template), Twig.log.trace("Twig.tokenize: ", "Found token: ", found_token), null !== found_token.position ? (found_token.position > 0 && tokens.push({
          type: Twig.token.type.raw,
          value: template.substring(0, found_token.position)
        }), template = template.substr(found_token.position + found_token.def.open.length), error_offset += found_token.position + found_token.def.open.length, end = Twig.token.findEnd(template, found_token.def, error_offset), Twig.log.trace("Twig.tokenize: ", "Token ends at ", end), tokens.push({
          type: found_token.def.type,
          value: template.substring(0, end).trim()
        }), "logic" === found_token.def.type && "\n" === template.substr(end + found_token.def.close.length, 1) && (end += 1), template = template.substr(end + found_token.def.close.length), error_offset += end + found_token.def.close.length) : (tokens.push({
          type: Twig.token.type.raw,
          value: template
        }), template = "");
        return tokens
      }, Twig.compile = function(tokens) {
        try {
          for (var output = [], stack = [], intermediate_output = [], token = null, logic_token = null, unclosed_token = null, prev_token = null, prev_template = null, tok_output = null, type = null, open = null, next = null; tokens.length > 0;) {
            switch (token = tokens.shift(), Twig.log.trace("Compiling token ", token), token.type) {
              case Twig.token.type.raw:
                stack.length > 0 ? intermediate_output.push(token) : output.push(token);
                break;
              case Twig.token.type.logic:
                if (logic_token = Twig.logic.compile.apply(this, [token]), type = logic_token.type, open = Twig.logic.handler[type].open, next = Twig.logic.handler[type].next, Twig.log.trace("Twig.compile: ", "Compiled logic token to ", logic_token, " next is: ", next, " open is : ", open), void 0 !== open && !open) {
                  if (prev_token = stack.pop(), prev_template = Twig.logic.handler[prev_token.type], Twig.indexOf(prev_template.next, type) < 0) throw new Error(type + " not expected after a " + prev_token.type);
                  prev_token.output = prev_token.output || [], prev_token.output = prev_token.output.concat(intermediate_output), intermediate_output = [], tok_output = {
                    type: Twig.token.type.logic,
                    token: prev_token
                  }, stack.length > 0 ? intermediate_output.push(tok_output) : output.push(tok_output)
                }
                void 0 !== next && next.length > 0 ? (Twig.log.trace("Twig.compile: ", "Pushing ", logic_token, " to logic stack."), stack.length > 0 && (prev_token = stack.pop(), prev_token.output = prev_token.output || [], prev_token.output = prev_token.output.concat(intermediate_output), stack.push(prev_token), intermediate_output = []), stack.push(logic_token)) : void 0 !== open && open && (tok_output = {
                  type: Twig.token.type.logic,
                  token: logic_token
                }, stack.length > 0 ? intermediate_output.push(tok_output) : output.push(tok_output));
                break;
              case Twig.token.type.comment:
                break;
              case Twig.token.type.output:
                Twig.expression.compile.apply(this, [token]), stack.length > 0 ? intermediate_output.push(token) : output.push(token)
            }
            Twig.log.trace("Twig.compile: ", " Output: ", output, " Logic Stack: ", stack, " Pending Output: ", intermediate_output)
          }
          if (stack.length > 0) throw unclosed_token = stack.pop(), new Error("Unable to find an end tag for " + unclosed_token.type + ", expecting one of " + unclosed_token.next);
          return output
        } catch (ex) {
          if (Twig.log.error("Error compiling twig template " + this.id + ": "), Twig.log.error(ex.stack ? ex.stack : ex.toString()), this.options.rethrow) throw ex
        }
      }, Twig.parse = function(tokens, context) {
        try {
          var output = [],
              chain = !0,
              that = this;
          return Twig.forEach(tokens, function(token) {
            switch (Twig.log.debug("Twig.parse: ", "Parsing token: ", token), token.type) {
              case Twig.token.type.raw:
                output.push(Twig.filters.raw(token.value));
                break;
              case Twig.token.type.logic:
                var logic_token = token.token,
                    logic = Twig.logic.parse.apply(that, [logic_token, context, chain]);
                void 0 !== logic.chain && (chain = logic.chain), void 0 !== logic.context && (context = logic.context), void 0 !== logic.output && output.push(logic.output);
                break;
              case Twig.token.type.comment:
                break;
              case Twig.token.type.output:
                Twig.log.debug("Twig.parse: ", "Output token: ", token.stack), output.push(Twig.expression.parse.apply(that, [token.stack, context]))
            }
          }), Twig.output.apply(this, [output])
        } catch (ex) {
          if (Twig.log.error("Error parsing twig template " + this.id + ": "), Twig.log.error(ex.stack ? ex.stack : ex.toString()), this.options.rethrow) throw ex;
          if (Twig.debug) return ex.toString()
        }
      }, Twig.prepare = function(data) {
        var tokens, raw_tokens;
        return Twig.log.debug("Twig.prepare: ", "Tokenizing ", data), raw_tokens = Twig.tokenize.apply(this, [data]), Twig.log.debug("Twig.prepare: ", "Compiling ", raw_tokens), tokens = Twig.compile.apply(this, [raw_tokens]), Twig.log.debug("Twig.prepare: ", "Compiled ", tokens), tokens
      }, Twig.output = function(output) {
        if (!this.options.autoescape) return output.join("");
        var escaped_output = [];
        return Twig.forEach(output, function(str) {
          str && !str.twig_markup && (str = Twig.filters.escape(str)), escaped_output.push(str)
        }), Twig.Markup(escaped_output.join(""))
      }, Twig.Templates = {
        registry: {}
      }, Twig.validateId = function(id) {
        if ("prototype" === id) throw new Twig.Error(id + " is not a valid twig identifier");
        if (Twig.Templates.registry.hasOwnProperty(id)) throw new Twig.Error("There is already a template with the ID " + id);
        return !0
      }, Twig.Templates.save = function(template) {
        if (void 0 === template.id) throw new Twig.Error("Unable to save template with no id");
        Twig.Templates.registry[template.id] = template
      }, Twig.Templates.load = function(id) {
        return Twig.Templates.registry.hasOwnProperty(id) ? Twig.Templates.registry[id] : null
      }, Twig.Templates.loadRemote = function(location, params, callback, error_callback) {
        var id = params.id,
            method = params.method,
            async = params.async, precompiled = params.precompiled, template = null;
        if (void 0 === async && (async = !0), void 0 === id && (id = location), params.id = id, Twig.cache && Twig.Templates.registry.hasOwnProperty(id)) return callback && callback(Twig.Templates.registry[id]), Twig.Templates.registry[id];
        if ("ajax" == method) {
          if ("undefined" == typeof XMLHttpRequest) throw new Twig.Error("Unsupported platform: Unable to do remote requests because there is no XMLHTTPRequest implementation");
          var xmlhttp = new XMLHttpRequest;
          xmlhttp.onreadystatechange = function() {
            var data = null;
            4 == xmlhttp.readyState && (200 == xmlhttp.status ? (Twig.log.debug("Got template ", xmlhttp.responseText), data = precompiled === !0 ? JSON.parse(xmlhttp.responseText) : xmlhttp.responseText, params.url = location, params.data = data, template = new Twig.Template(params), callback && callback(template)) : error_callback && error_callback(xmlhttp))
          }, xmlhttp.open("GET", location, async), xmlhttp.send()
        } else ! function() {
          var fs = require("fs"),
              data = (require("path"), null),
              loadTemplateFn = function(err, data) {
                return err ? void(error_callback && error_callback(err)) : (precompiled === !0 && (data = JSON.parse(data)), params.data = data, params.path = location, template = new Twig.Template(params), void(callback && callback(template)))
              };
          if (async === !0) fs.stat(location, function(err, stats) {
            if (err || !stats.isFile()) throw new Twig.Error("Unable to find template file " + location);
            fs.readFile(location, "utf8", loadTemplateFn)
          });
          else {
            if (!fs.statSync(location).isFile()) throw new Twig.Error("Unable to find template file " + location);
            data = fs.readFileSync(location, "utf8"), loadTemplateFn(void 0, data)
          }
        }();
        return async === !1 ? template : !0
      }, Twig.Template = function(params) {
        var data = params.data,
            id = params.id,
            blocks = params.blocks,
            macros = params.macros || {},
            base = params.base,
            path = params.path,
            url = params.url,
            options = params.options;
        this.id = id, this.base = base, this.path = path, this.url = url, this.macros = macros, this.options = options, this.reset(blocks), this.tokens = is("String", data) ? Twig.prepare.apply(this, [data]) : data, void 0 !== id && Twig.Templates.save(this)
      }, Twig.Template.prototype.reset = function(blocks) {
        Twig.log.debug("Twig.Template.reset", "Reseting template " + this.id), this.blocks = {}, this.importedBlocks = [], this.child = {
          blocks: blocks || {}
        }, this.extend = null
      }, Twig.Template.prototype.render = function(context, params) {
        params = params || {};
        var output, url;
        if (this.context = context || {}, this.reset(), params.blocks && (this.blocks = params.blocks), params.macros && (this.macros = params.macros), output = Twig.parse.apply(this, [this.tokens, this.context]), this.extend) {
          var ext_template;
          return this.options.allowInlineIncludes && (ext_template = Twig.Templates.load(this.extend), ext_template && (ext_template.options = this.options)), ext_template || (url = relativePath(this, this.extend), ext_template = Twig.Templates.loadRemote(url, {
            method: this.url ? "ajax" : "fs",
            base: this.base,
            async: !1,
            id: url,
            options: this.options
          })), this.parent = ext_template, this.parent.render(this.context, {
            blocks: this.blocks
          })
        }
        return "blocks" == params.output ? this.blocks : "macros" == params.output ? this.macros : output
      }, Twig.Template.prototype.importFile = function(file) {
        var url, sub_template;
        if (!this.url && !this.path && this.options.allowInlineIncludes) {
          if (sub_template = Twig.Templates.load(file), sub_template.options = this.options, sub_template) return sub_template;
          throw new Twig.Error("Didn't find the inline template by id")
        }
        return url = relativePath(this, file), sub_template = Twig.Templates.loadRemote(url, {
          method: this.url ? "ajax" : "fs",
          base: this.base,
          async: !1,
          options: this.options,
          id: url
        })
      }, Twig.Template.prototype.importBlocks = function(file, override) {
        var sub_template = this.importFile(file),
            context = this.context,
            that = this;
        override = override || !1, sub_template.render(context), Twig.forEach(Object.keys(sub_template.blocks), function(key) {
          (override || void 0 === that.blocks[key]) && (that.blocks[key] = sub_template.blocks[key], that.importedBlocks.push(key))
        })
      }, Twig.Template.prototype.compile = function(options) {
        return Twig.compiler.compile(this, options)
      }, Twig.Markup = function(content) {
        return "string" == typeof content && content.length > 0 && (content = new String(content), content.twig_markup = !0), content
      }, Twig
    }(Twig || {});
! function() {
  "use strict";
  String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
  }), Object.keys || (Object.keys = function(o) {
    if (o !== Object(o)) throw new TypeError("Object.keys called on non-object");
    var p, ret = [];
    for (p in o) Object.prototype.hasOwnProperty.call(o, p) && ret.push(p);
    return ret
  })
}();
var Twig = function(Twig) {
      Twig.lib = {};
      var sprintfLib = function() {
            function sprintf() {
              var key = arguments[0],
                  cache = sprintf.cache;
              return cache[key] && cache.hasOwnProperty(key) || (cache[key] = sprintf.parse(key)), sprintf.format.call(null, cache[key], arguments)
            }

            function get_type(variable) {
              return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
            }

            function str_repeat(input, multiplier) {
              return Array(multiplier + 1).join(input)
            }
            var re = {
              not_string: /[^s]/,
              number: /[diefg]/,
              json: /[j]/,
              not_json: /[^j]/,
              text: /^[^\x25]+/,
              modulo: /^\x25{2}/,
              placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
              key: /^([a-z_][a-z_\d]*)/i,
              key_access: /^\.([a-z_][a-z_\d]*)/i,
              index_access: /^\[(\d+)\]/,
              sign: /^[\+\-]/
            };
            sprintf.format = function(parse_tree, argv) {
              var arg, i, k, match, pad, pad_character, pad_length, cursor = 1,
                  tree_length = parse_tree.length,
                  node_type = "",
                  output = [],
                  is_positive = !0,
                  sign = "";
              for (i = 0; tree_length > i; i++)
                if (node_type = get_type(parse_tree[i]), "string" === node_type) output[output.length] = parse_tree[i];
                else if ("array" === node_type) {
                  if (match = parse_tree[i], match[2])
                    for (arg = argv[cursor], k = 0; k < match[2].length; k++) {
                      if (!arg.hasOwnProperty(match[2][k])) throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]));
                      arg = arg[match[2][k]]
                    } else arg = match[1] ? argv[match[1]] : argv[cursor++];
                  if ("function" == get_type(arg) && (arg = arg()), re.not_string.test(match[8]) && re.not_json.test(match[8]) && "number" != get_type(arg) && isNaN(arg)) throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)));
                  switch (re.number.test(match[8]) && (is_positive = arg >= 0), match[8]) {
                    case "b":
                      arg = arg.toString(2);
                      break;
                    case "c":
                      arg = String.fromCharCode(arg);
                      break;
                    case "d":
                    case "i":
                      arg = parseInt(arg, 10);
                      break;
                    case "j":
                      arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0);
                      break;
                    case "e":
                      arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential();
                      break;
                    case "f":
                      arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
                      break;
                    case "g":
                      arg = match[7] ? parseFloat(arg).toPrecision(match[7]) : parseFloat(arg);
                      break;
                    case "o":
                      arg = arg.toString(8);
                      break;
                    case "s":
                      arg = (arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg;
                      break;
                    case "u":
                      arg >>>= 0;
                      break;
                    case "x":
                      arg = arg.toString(16);
                      break;
                    case "X":
                      arg = arg.toString(16).toUpperCase()
                  }
                  re.json.test(match[8]) ? output[output.length] = arg : (!re.number.test(match[8]) || is_positive && !match[3] ? sign = "" : (sign = is_positive ? "+" : "-", arg = arg.toString().replace(re.sign, "")), pad_character = match[4] ? "0" === match[4] ? "0" : match[4].charAt(1) : " ", pad_length = match[6] - (sign + arg).length, pad = match[6] && pad_length > 0 ? str_repeat(pad_character, pad_length) : "", output[output.length] = match[5] ? sign + arg + pad : "0" === pad_character ? sign + pad + arg : pad + sign + arg)
                }
              return output.join("")
            }, sprintf.cache = {}, sprintf.parse = function(fmt) {
              for (var _fmt = fmt, match = [], parse_tree = [], arg_names = 0; _fmt;) {
                if (null !== (match = re.text.exec(_fmt))) parse_tree[parse_tree.length] = match[0];
                else if (null !== (match = re.modulo.exec(_fmt))) parse_tree[parse_tree.length] = "%";
                else {
                  if (null === (match = re.placeholder.exec(_fmt))) throw new SyntaxError("[sprintf] unexpected placeholder");
                  if (match[2]) {
                    arg_names |= 1;
                    var field_list = [],
                        replacement_field = match[2],
                        field_match = [];
                    if (null === (field_match = re.key.exec(replacement_field))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                    for (field_list[field_list.length] = field_match[1];
                         "" !== (replacement_field = replacement_field.substring(field_match[0].length));)
                      if (null !== (field_match = re.key_access.exec(replacement_field))) field_list[field_list.length] = field_match[1];
                      else {
                        if (null === (field_match = re.index_access.exec(replacement_field))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                        field_list[field_list.length] = field_match[1]
                      } match[2] = field_list
                  } else arg_names |= 2;
                  if (3 === arg_names) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                  parse_tree[parse_tree.length] = match
                }
                _fmt = _fmt.substring(match[0].length)
              }
              return parse_tree
            };
            var vsprintf = function(fmt, argv, _argv) {
              return _argv = (argv || []).slice(0), _argv.splice(0, 0, fmt), sprintf.apply(null, _argv)
            };
            return {
              sprintf: sprintf,
              vsprintf: vsprintf
            }
          }(),
          sprintf = sprintfLib.sprintf,
          vsprintf = sprintfLib.vsprintf;
      return Twig.lib.sprintf = sprintf, Twig.lib.vsprintf = vsprintf,
          function() {
            function getOrdinalFor(intNum) {
              return (intNum = Math.abs(intNum) % 100) % 10 == 1 && 11 != intNum ? "st" : intNum % 10 == 2 && 12 != intNum ? "nd" : intNum % 10 == 3 && 13 != intNum ? "rd" : "th"
            }

            function getISO8601Year(aDate) {
              var d = new Date(aDate.getFullYear() + 1, 0, 4);
              return 7 > (d - aDate) / 864e5 && (aDate.getDay() + 6) % 7 < (d.getDay() + 6) % 7 ? d.getFullYear() : aDate.getMonth() > 0 || aDate.getDate() >= 4 ? aDate.getFullYear() : aDate.getFullYear() - ((aDate.getDay() + 6) % 7 - aDate.getDate() > 2 ? 1 : 0)
            }

            function getISO8601Week(aDate) {
              var d = new Date(getISO8601Year(aDate), 0, 4);
              return d.setDate(d.getDate() - (d.getDay() + 6) % 7), parseInt((aDate - d) / 6048e5) + 1
            }
            var shortDays = "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                fullDays = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                shortMonths = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                fullMonths = "January,February,March,April,May,June,July,August,September,October,November,December".split(",");
            Twig.lib.formatDate = function(date, format) {
              if ("string" != typeof format || /^\s*$/.test(format)) return date + "";
              var jan1st = new Date(date.getFullYear(), 0, 1),
                  me = date;
              return format.replace(/[dDjlNSwzWFmMntLoYyaABgGhHisuU]/g, function(option) {
                switch (option) {
                  case "d":
                    return ("0" + me.getDate()).replace(/^.+(..)$/, "$1");
                  case "D":
                    return shortDays[me.getDay()];
                  case "j":
                    return me.getDate();
                  case "l":
                    return fullDays[me.getDay()];
                  case "N":
                    return (me.getDay() + 6) % 7 + 1;
                  case "S":
                    return getOrdinalFor(me.getDate());
                  case "w":
                    return me.getDay();
                  case "z":
                    return Math.ceil((jan1st - me) / 864e5);
                  case "W":
                    return ("0" + getISO8601Week(me)).replace(/^.(..)$/, "$1");
                  case "F":
                    return fullMonths[me.getMonth()];
                  case "m":
                    return ("0" + (me.getMonth() + 1)).replace(/^.+(..)$/, "$1");
                  case "M":
                    return shortMonths[me.getMonth()];
                  case "n":
                    return me.getMonth() + 1;
                  case "t":
                    return new Date(me.getFullYear(), me.getMonth() + 1, -1).getDate();
                  case "L":
                    return 29 == new Date(me.getFullYear(), 1, 29).getDate() ? 1 : 0;
                  case "o":
                    return getISO8601Year(me);
                  case "Y":
                    return me.getFullYear();
                  case "y":
                    return (me.getFullYear() + "").replace(/^.+(..)$/, "$1");
                  case "a":
                    return me.getHours() < 12 ? "am" : "pm";
                  case "A":
                    return me.getHours() < 12 ? "AM" : "PM";
                  case "B":
                    return Math.floor(1e3 * ((me.getUTCHours() + 1) % 24 + me.getUTCMinutes() / 60 + me.getUTCSeconds() / 3600) / 24);
                  case "g":
                    return me.getHours() % 12 != 0 ? me.getHours() % 12 : 12;
                  case "G":
                    return me.getHours();
                  case "h":
                    return ("0" + (me.getHours() % 12 != 0 ? me.getHours() % 12 : 12)).replace(/^.+(..)$/, "$1");
                  case "H":
                    return ("0" + me.getHours()).replace(/^.+(..)$/, "$1");
                  case "i":
                    return ("0" + me.getMinutes()).replace(/^.+(..)$/, "$1");
                  case "s":
                    return ("0" + me.getSeconds()).replace(/^.+(..)$/, "$1");
                  case "u":
                    return me.getMilliseconds();
                  case "U":
                    return me.getTime() / 1e3
                }
              })
            }
          }(), Twig.lib.strip_tags = function(input, allowed) {
        allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
            commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
        return input.replace(commentsAndPhpTags, "").replace(tags, function($0, $1) {
          return allowed.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
        })
      }, Twig.lib.parseISO8601Date = function(s) {
        var re = /(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d+)?(Z|([+-])(\d\d):(\d\d))/,
            d = [];
        if (d = s.match(re), !d) throw "Couldn't parse ISO 8601 date string '" + s + "'";
        var a = [1, 2, 3, 4, 5, 6, 10, 11];
        for (var i in a) d[a[i]] = parseInt(d[a[i]], 10);
        d[7] = parseFloat(d[7]);
        var ms = Date.UTC(d[1], d[2] - 1, d[3], d[4], d[5], d[6]);
        if (d[7] > 0 && (ms += Math.round(1e3 * d[7])), "Z" != d[8] && d[10]) {
          var offset = 60 * d[10] * 60 * 1e3;
          d[11] && (offset += 60 * d[11] * 1e3), "-" == d[9] ? ms -= offset : ms += offset
        }
        return new Date(ms)
      }, Twig.lib.strtotime = function(text, now) {
        function lastNext(type, range, modifier) {
          var diff, day = days[range];
          "undefined" != typeof day && (diff = day - date.getDay(), 0 === diff ? diff = 7 * modifier : diff > 0 && "last" === type ? diff -= 7 : 0 > diff && "next" === type && (diff += 7), date.setDate(date.getDate() + diff))
        }

        function process(val) {
          var splt = val.split(" "),
              type = splt[0],
              range = splt[1].substring(0, 3),
              typeIsNumber = /\d+/.test(type),
              ago = "ago" === splt[2],
              num = ("last" === type ? -1 : 1) * (ago ? -1 : 1);
          if (typeIsNumber && (num *= parseInt(type, 10)), ranges.hasOwnProperty(range) && !splt[1].match(/^mon(day|\.)?$/i)) return date["set" + ranges[range]](date["get" + ranges[range]]() + num);
          if ("wee" === range) return date.setDate(date.getDate() + 7 * num);
          if ("next" === type || "last" === type) lastNext(type, range, num);
          else if (!typeIsNumber) return !1;
          return !0
        }
        var parsed, match, today, year, date, days, ranges, len, times, regex, i, fail = !1;
        if (!text) return fail;
        if (text = text.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ").replace(/[\t\r\n]/g, "").toLowerCase(), match = text.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/), match && match[2] === match[4])
          if (match[1] > 1901) switch (match[2]) {
            case "-":
              return match[3] > 12 || match[5] > 31 ? fail : new Date(match[1], parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1e3;
            case ".":
              return fail;
            case "/":
              return match[3] > 12 || match[5] > 31 ? fail : new Date(match[1], parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1e3
          } else if (match[5] > 1901) switch (match[2]) {
            case "-":
              return match[3] > 12 || match[1] > 31 ? fail : new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1e3;
            case ".":
              return match[3] > 12 || match[1] > 31 ? fail : new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1e3;
            case "/":
              return match[1] > 12 || match[3] > 31 ? fail : new Date(match[5], parseInt(match[1], 10) - 1, match[3], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1e3
          } else switch (match[2]) {
            case "-":
              return match[3] > 12 || match[5] > 31 || match[1] < 70 && match[1] > 38 ? fail : (year = match[1] >= 0 && match[1] <= 38 ? +match[1] + 2e3 : match[1], new Date(year, parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1e3);
            case ".":
              return match[5] >= 70 ? match[3] > 12 || match[1] > 31 ? fail : new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1e3 : match[5] < 60 && !match[6] ? match[1] > 23 || match[3] > 59 ? fail : (today = new Date, new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1] || 0, match[3] || 0, match[5] || 0, match[9] || 0) / 1e3) : fail;
            case "/":
              return match[1] > 12 || match[3] > 31 || match[5] < 70 && match[5] > 38 ? fail : (year = match[5] >= 0 && match[5] <= 38 ? +match[5] + 2e3 : match[5], new Date(year, parseInt(match[1], 10) - 1, match[3], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1e3);
            case ":":
              return match[1] > 23 || match[3] > 59 || match[5] > 59 ? fail : (today = new Date, new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1] || 0, match[3] || 0, match[5] || 0) / 1e3)
          }
        if ("now" === text) return null === now || isNaN(now) ? (new Date).getTime() / 1e3 | 0 : 0 | now;
        if (!isNaN(parsed = Date.parse(text))) return parsed / 1e3 | 0;
        if (date = now ? new Date(1e3 * now) : new Date, days = {
          sun: 0,
          mon: 1,
          tue: 2,
          wed: 3,
          thu: 4,
          fri: 5,
          sat: 6
        }, ranges = {
          yea: "FullYear",
          mon: "Month",
          day: "Date",
          hou: "Hours",
          min: "Minutes",
          sec: "Seconds"
        }, times = "(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)", regex = "([+-]?\\d+\\s" + times + "|(last|next)\\s" + times + ")(\\sago)?", match = text.match(new RegExp(regex, "gi")), !match) return fail;
        for (i = 0, len = match.length; len > i; i++)
          if (!process(match[i])) return fail;
        return date.getTime() / 1e3
      }, Twig.lib.is = function(type, obj) {
        var clas = Object.prototype.toString.call(obj).slice(8, -1);
        return void 0 !== obj && null !== obj && clas === type
      }, Twig.lib.copy = function(src) {
        var key, target = {};
        for (key in src) target[key] = src[key];
        return target
      }, Twig.lib.replaceAll = function(string, search, replace) {
        return string.split(search).join(replace)
      }, Twig.lib.chunkArray = function(arr, size) {
        var returnVal = [],
            x = 0,
            len = arr.length;
        if (1 > size || !Twig.lib.is("Array", arr)) return [];
        for (; len > x;) returnVal.push(arr.slice(x, x += size));
        return returnVal
      }, Twig.lib.round = function(value, precision, mode) {
        var m, f, isHalf, sgn;
        if (precision |= 0, m = Math.pow(10, precision), value *= m, sgn = value > 0 | -(0 > value), isHalf = value % 1 === .5 * sgn, f = Math.floor(value), isHalf) switch (mode) {
          case "PHP_ROUND_HALF_DOWN":
            value = f + (0 > sgn);
            break;
          case "PHP_ROUND_HALF_EVEN":
            value = f + f % 2 * sgn;
            break;
          case "PHP_ROUND_HALF_ODD":
            value = f + !(f % 2);
            break;
          default:
            value = f + (sgn > 0)
        }
        return (isHalf ? value : Math.round(value)) / m
      }, Twig.lib.max = function() {
        var ar, retVal, i = 0,
            n = 0,
            argv = arguments,
            argc = argv.length,
            _obj2Array = function(obj) {
              if ("[object Array]" === Object.prototype.toString.call(obj)) return obj;
              var ar = [];
              for (var i in obj) obj.hasOwnProperty(i) && ar.push(obj[i]);
              return ar
            },
            _compare = function(current, next) {
              var i = 0,
                  n = 0,
                  tmp = 0,
                  nl = 0,
                  cl = 0;
              if (current === next) return 0;
              if ("object" == typeof current) {
                if ("object" == typeof next) {
                  if (current = _obj2Array(current), next = _obj2Array(next), cl = current.length, nl = next.length, nl > cl) return 1;
                  if (cl > nl) return -1;
                  for (i = 0, n = cl; n > i; ++i) {
                    if (tmp = _compare(current[i], next[i]), 1 == tmp) return 1;
                    if (-1 == tmp) return -1
                  }
                  return 0
                }
                return -1
              }
              return "object" == typeof next ? 1 : isNaN(next) && !isNaN(current) ? 0 == current ? 0 : 0 > current ? 1 : -1 : isNaN(current) && !isNaN(next) ? 0 == next ? 0 : next > 0 ? 1 : -1 : next == current ? 0 : next > current ? 1 : -1
            };
        if (0 === argc) throw new Error("At least one value should be passed to max()");
        if (1 === argc) {
          if ("object" != typeof argv[0]) throw new Error("Wrong parameter count for max()");
          if (ar = _obj2Array(argv[0]), 0 === ar.length) throw new Error("Array must contain at least one element for max()")
        } else ar = argv;
        for (retVal = ar[0], i = 1, n = ar.length; n > i; ++i) 1 == _compare(retVal, ar[i]) && (retVal = ar[i]);
        return retVal
      }, Twig.lib.min = function() {
        var ar, retVal, i = 0,
            n = 0,
            argv = arguments,
            argc = argv.length,
            _obj2Array = function(obj) {
              if ("[object Array]" === Object.prototype.toString.call(obj)) return obj;
              var ar = [];
              for (var i in obj) obj.hasOwnProperty(i) && ar.push(obj[i]);
              return ar
            },
            _compare = function(current, next) {
              var i = 0,
                  n = 0,
                  tmp = 0,
                  nl = 0,
                  cl = 0;
              if (current === next) return 0;
              if ("object" == typeof current) {
                if ("object" == typeof next) {
                  if (current = _obj2Array(current), next = _obj2Array(next), cl = current.length, nl = next.length, nl > cl) return 1;
                  if (cl > nl) return -1;
                  for (i = 0, n = cl; n > i; ++i) {
                    if (tmp = _compare(current[i], next[i]), 1 == tmp) return 1;
                    if (-1 == tmp) return -1
                  }
                  return 0
                }
                return -1
              }
              return "object" == typeof next ? 1 : isNaN(next) && !isNaN(current) ? 0 == current ? 0 : 0 > current ? 1 : -1 : isNaN(current) && !isNaN(next) ? 0 == next ? 0 : next > 0 ? 1 : -1 : next == current ? 0 : next > current ? 1 : -1
            };
        if (0 === argc) throw new Error("At least one value should be passed to min()");
        if (1 === argc) {
          if ("object" != typeof argv[0]) throw new Error("Wrong parameter count for min()");
          if (ar = _obj2Array(argv[0]), 0 === ar.length) throw new Error("Array must contain at least one element for min()")
        } else ar = argv;
        for (retVal = ar[0], i = 1, n = ar.length; n > i; ++i) - 1 == _compare(retVal, ar[i]) && (retVal = ar[i]);
        return retVal
      }, Twig
    }(Twig || {}),
    Twig = function(Twig) {
      "use strict";
      for (Twig.logic = {}, Twig.logic.type = {
        if_: "Twig.logic.type.if",
        endif: "Twig.logic.type.endif",
        for_: "Twig.logic.type.for",
        endfor: "Twig.logic.type.endfor",
        else_: "Twig.logic.type.else",
        elseif: "Twig.logic.type.elseif",
        set: "Twig.logic.type.set",
        setcapture: "Twig.logic.type.setcapture",
        endset: "Twig.logic.type.endset",
        filter: "Twig.logic.type.filter",
        endfilter: "Twig.logic.type.endfilter",
        block: "Twig.logic.type.block",
        endblock: "Twig.logic.type.endblock",
        extends_: "Twig.logic.type.extends",
        use: "Twig.logic.type.use",
        include: "Twig.logic.type.include",
        spaceless: "Twig.logic.type.spaceless",
        endspaceless: "Twig.logic.type.endspaceless",
        macro: "Twig.logic.type.macro",
        endmacro: "Twig.logic.type.endmacro",
        import_: "Twig.logic.type.import",
        from: "Twig.logic.type.from",
        embed: "Twig.logic.type.embed",
        endembed: "Twig.logic.type.endembed"
      }, Twig.logic.definitions = [{
        type: Twig.logic.type.if_,
        regex: /^if\s+([\s\S]+)$/,
        next: [Twig.logic.type.else_, Twig.logic.type.elseif, Twig.logic.type.endif],
        open: !0,
        compile: function(token) {
          var expression = token.match[1];
          return token.stack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: expression
          }]).stack, delete token.match, token
        },
        parse: function(token, context, chain) {
          var output = "",
              result = Twig.expression.parse.apply(this, [token.stack, context]);
          return chain = !0, result && (chain = !1, output = Twig.parse.apply(this, [token.output, context])), {
            chain: chain,
            output: output
          }
        }
      }, {
        type: Twig.logic.type.elseif,
        regex: /^elseif\s+([^\s].*)$/,
        next: [Twig.logic.type.else_, Twig.logic.type.elseif, Twig.logic.type.endif],
        open: !1,
        compile: function(token) {
          var expression = token.match[1];
          return token.stack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: expression
          }]).stack, delete token.match, token
        },
        parse: function(token, context, chain) {
          var output = "";
          return chain && Twig.expression.parse.apply(this, [token.stack, context]) === !0 && (chain = !1, output = Twig.parse.apply(this, [token.output, context])), {
            chain: chain,
            output: output
          }
        }
      }, {
        type: Twig.logic.type.else_,
        regex: /^else$/,
        next: [Twig.logic.type.endif, Twig.logic.type.endfor],
        open: !1,
        parse: function(token, context, chain) {
          var output = "";
          return chain && (output = Twig.parse.apply(this, [token.output, context])), {
            chain: chain,
            output: output
          }
        }
      }, {
        type: Twig.logic.type.endif,
        regex: /^endif$/,
        next: [],
        open: !1
      }, {
        type: Twig.logic.type.for_,
        regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([^\s].*?)(?:\s+if\s+([^\s].*))?$/,
        next: [Twig.logic.type.else_, Twig.logic.type.endfor],
        open: !0,
        compile: function(token) {
          var key_value = token.match[1],
              expression = token.match[2],
              conditional = token.match[3],
              kv_split = null;
          if (token.key_var = null, token.value_var = null, key_value.indexOf(",") >= 0) {
            if (kv_split = key_value.split(","), 2 !== kv_split.length) throw new Twig.Error("Invalid expression in for loop: " + key_value);
            token.key_var = kv_split[0].trim(), token.value_var = kv_split[1].trim()
          } else token.value_var = key_value;
          return token.expression = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: expression
          }]).stack, conditional && (token.conditional = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: conditional
          }]).stack), delete token.match, token
        },
        parse: function(token, context, continue_chain) {
          var len, keyset, result = Twig.expression.parse.apply(this, [token.expression, context]),
              output = [],
              index = 0,
              that = this,
              conditional = token.conditional,
              buildLoop = function(index, len) {
                var isConditional = void 0 !== conditional;
                return {
                  index: index + 1,
                  index0: index,
                  revindex: isConditional ? void 0 : len - index,
                  revindex0: isConditional ? void 0 : len - index - 1,
                  first: 0 === index,
                  last: isConditional ? void 0 : index === len - 1,
                  length: isConditional ? void 0 : len,
                  parent: context
                }
              },
              loop = function(key, value) {
                var inner_context = Twig.ChildContext(context);
                inner_context[token.value_var] = value, token.key_var && (inner_context[token.key_var] = key), inner_context.loop = buildLoop(index, len), (void 0 === conditional || Twig.expression.parse.apply(that, [conditional, inner_context])) && (output.push(Twig.parse.apply(that, [token.output, inner_context])), index += 1), delete inner_context.loop, delete inner_context[token.value_var], delete inner_context[token.key_var], Twig.merge(context, inner_context, !0)
              };
          return Twig.lib.is("Array", result) ? (len = result.length, Twig.forEach(result, function(value) {
            var key = index;
            loop(key, value)
          })) : Twig.lib.is("Object", result) && (keyset = void 0 !== result._keys ? result._keys : Object.keys(result), len = keyset.length, Twig.forEach(keyset, function(key) {
            "_keys" !== key && loop(key, result[key])
          })), continue_chain = 0 === output.length, {
            chain: continue_chain,
            output: Twig.output.apply(this, [output])
          }
        }
      }, {
        type: Twig.logic.type.endfor,
        regex: /^endfor$/,
        next: [],
        open: !1
      }, {
        type: Twig.logic.type.set,
        regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,
        next: [],
        open: !0,
        compile: function(token) {
          var key = token.match[1].trim(),
              expression = token.match[2],
              expression_stack = Twig.expression.compile.apply(this, [{
                type: Twig.expression.type.expression,
                value: expression
              }]).stack;
          return token.key = key, token.expression = expression_stack, delete token.match, token
        },
        parse: function(token, context, continue_chain) {
          var value = Twig.expression.parse.apply(this, [token.expression, context]),
              key = token.key;
          return context[key] = value, {
            chain: continue_chain,
            context: context
          }
        }
      }, {
        type: Twig.logic.type.setcapture,
        regex: /^set\s+([a-zA-Z0-9_,\s]+)$/,
        next: [Twig.logic.type.endset],
        open: !0,
        compile: function(token) {
          var key = token.match[1].trim();
          return token.key = key, delete token.match, token
        },
        parse: function(token, context, continue_chain) {
          var value = Twig.parse.apply(this, [token.output, context]),
              key = token.key;
          return this.context[key] = value, context[key] = value, {
            chain: continue_chain,
            context: context
          }
        }
      }, {
        type: Twig.logic.type.endset,
        regex: /^endset$/,
        next: [],
        open: !1
      }, {
        type: Twig.logic.type.filter,
        regex: /^filter\s+(.+)$/,
        next: [Twig.logic.type.endfilter],
        open: !0,
        compile: function(token) {
          var expression = "|" + token.match[1].trim();
          return token.stack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: expression
          }]).stack, delete token.match, token
        },
        parse: function(token, context, chain) {
          var unfiltered = Twig.parse.apply(this, [token.output, context]),
              stack = [{
                type: Twig.expression.type.string,
                value: unfiltered
              }].concat(token.stack),
              output = Twig.expression.parse.apply(this, [stack, context]);
          return {
            chain: chain,
            output: output
          }
        }
      }, {
        type: Twig.logic.type.endfilter,
        regex: /^endfilter$/,
        next: [],
        open: !1
      }, {
        type: Twig.logic.type.block,
        regex: /^block\s+([a-zA-Z0-9_]+)$/,
        next: [Twig.logic.type.endblock],
        open: !0,
        compile: function(token) {
          return token.block = token.match[1].trim(), delete token.match, token
        },
        parse: function(token, context, chain) {
          var block_output = "",
              output = "",
              isImported = this.importedBlocks.indexOf(token.block) > -1,
              hasParent = this.blocks[token.block] && this.blocks[token.block].indexOf(Twig.placeholders.parent) > -1;
          return (void 0 === this.blocks[token.block] || isImported || hasParent || context.loop) && (block_output = Twig.expression.parse.apply(this, [{
            type: Twig.expression.type.string,
            value: Twig.parse.apply(this, [token.output, context])
          }, context]), isImported && this.importedBlocks.splice(this.importedBlocks.indexOf(token.block), 1), this.blocks[token.block] = hasParent ? Twig.Markup(this.blocks[token.block].replace(Twig.placeholders.parent, block_output)) : block_output), output = this.child.blocks[token.block] ? this.child.blocks[token.block] : this.blocks[token.block], {
            chain: chain,
            output: output
          }
        }
      }, {
        type: Twig.logic.type.endblock,
        regex: /^endblock(?:\s+([a-zA-Z0-9_]+))?$/,
        next: [],
        open: !1
      }, {
        type: Twig.logic.type.extends_,
        regex: /^extends\s+(.+)$/,
        next: [],
        open: !0,
        compile: function(token) {
          var expression = token.match[1].trim();
          return delete token.match, token.stack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: expression
          }]).stack, token
        },
        parse: function(token, context, chain) {
          var file = Twig.expression.parse.apply(this, [token.stack, context]);
          return this.extend = file, {
            chain: chain,
            output: ""
          }
        }
      }, {
        type: Twig.logic.type.use,
        regex: /^use\s+(.+)$/,
        next: [],
        open: !0,
        compile: function(token) {
          var expression = token.match[1].trim();
          return delete token.match, token.stack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: expression
          }]).stack, token
        },
        parse: function(token, context, chain) {
          var file = Twig.expression.parse.apply(this, [token.stack, context]);
          return this.importBlocks(file), {
            chain: chain,
            output: ""
          }
        }
      }, {
        type: Twig.logic.type.include,
        regex: /^include\s+(ignore missing\s+)?(.+?)\s*(?:with\s+([\S\s]+?))?\s*(only)?$/,
        next: [],
        open: !0,
        compile: function(token) {
          var match = token.match,
              includeMissing = void 0 !== match[1],
              expression = match[2].trim(),
              withContext = match[3],
              only = void 0 !== match[4] && match[4].length;
          return delete token.match, token.only = only, token.includeMissing = includeMissing, token.stack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: expression
          }]).stack, void 0 !== withContext && (token.withStack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: withContext.trim()
          }]).stack), token
        },
        parse: function(token, context, chain) {
          var withContext, i, template, innerContext = {};
          if (token.only || (innerContext = Twig.ChildContext(context)), void 0 !== token.withStack) {
            withContext = Twig.expression.parse.apply(this, [token.withStack, context]);
            for (i in withContext) withContext.hasOwnProperty(i) && (innerContext[i] = withContext[i])
          }
          var file = Twig.expression.parse.apply(this, [token.stack, innerContext]);
          return template = file instanceof Twig.Template ? file : this.importFile(file), {
            chain: chain,
            output: template.render(innerContext)
          }
        }
      }, {
        type: Twig.logic.type.spaceless,
        regex: /^spaceless$/,
        next: [Twig.logic.type.endspaceless],
        open: !0,
        parse: function(token, context, chain) {
          var unfiltered = Twig.parse.apply(this, [token.output, context]),
              rBetweenTagSpaces = />\s+</g,
              output = unfiltered.replace(rBetweenTagSpaces, "><").trim();
          return {
            chain: chain,
            output: output
          }
        }
      }, {
        type: Twig.logic.type.endspaceless,
        regex: /^endspaceless$/,
        next: [],
        open: !1
      }, {
        type: Twig.logic.type.macro,
        regex: /^macro\s+([a-zA-Z0-9_]+)\s*\(\s*((?:[a-zA-Z0-9_]+(?:,\s*)?)*)\s*\)$/,
        next: [Twig.logic.type.endmacro],
        open: !0,
        compile: function(token) {
          for (var macroName = token.match[1], parameters = token.match[2].split(/[\s,]+/), i = 0; i < parameters.length; i++)
            for (var j = 0; j < parameters.length; j++)
              if (parameters[i] === parameters[j] && i !== j) throw new Twig.Error("Duplicate arguments for parameter: " + parameters[i]);
          return token.macroName = macroName, token.parameters = parameters, delete token.match, token
        },
        parse: function(token, context, chain) {
          var template = this;
          return this.macros[token.macroName] = function() {
            for (var macroContext = {
              _self: template.macros
            }, i = 0; i < token.parameters.length; i++) {
              var prop = token.parameters[i];
              macroContext[prop] = "undefined" != typeof arguments[i] ? arguments[i] : void 0
            }
            return Twig.parse.apply(template, [token.output, macroContext])
          }, {
            chain: chain,
            output: ""
          }
        }
      }, {
        type: Twig.logic.type.endmacro,
        regex: /^endmacro$/,
        next: [],
        open: !1
      }, {
        type: Twig.logic.type.import_,
        regex: /^import\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/,
        next: [],
        open: !0,
        compile: function(token) {
          var expression = token.match[1].trim(),
              contextName = token.match[2].trim();
          return delete token.match, token.expression = expression, token.contextName = contextName, token.stack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: expression
          }]).stack, token
        },
        parse: function(token, context, chain) {
          if ("_self" !== token.expression) {
            var file = Twig.expression.parse.apply(this, [token.stack, context]),
                template = this.importFile(file || token.expression);
            context[token.contextName] = template.render({}, {
              output: "macros"
            })
          } else context[token.contextName] = this.macros;
          return {
            chain: chain,
            output: ""
          }
        }
      }, {
        type: Twig.logic.type.from,
        regex: /^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,
        next: [],
        open: !0,
        compile: function(token) {
          for (var expression = token.match[1].trim(), macroExpressions = token.match[2].trim().split(/[ ,]+/), macroNames = {}, i = 0; i < macroExpressions.length; i++) {
            var res = macroExpressions[i],
                macroMatch = res.match(/^([a-zA-Z0-9_]+)\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/);
            macroMatch ? macroNames[macroMatch[1].trim()] = macroMatch[2].trim() : res.match(/^([a-zA-Z0-9_]+)$/) && (macroNames[res] = res)
          }
          return delete token.match, token.expression = expression, token.macroNames = macroNames, token.stack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: expression
          }]).stack, token
        },
        parse: function(token, context, chain) {
          var macros;
          if ("_self" !== token.expression) {
            var file = Twig.expression.parse.apply(this, [token.stack, context]),
                template = this.importFile(file || token.expression);
            macros = template.render({}, {
              output: "macros"
            })
          } else macros = this.macros;
          for (var macroName in token.macroNames) macros.hasOwnProperty(macroName) && (context[token.macroNames[macroName]] = macros[macroName]);
          return {
            chain: chain,
            output: ""
          }
        }
      }, {
        type: Twig.logic.type.embed,
        regex: /^embed\s+(ignore missing\s+)?(.+?)\s*(?:with\s+(.+?))?\s*(only)?$/,
        next: [Twig.logic.type.endembed],
        open: !0,
        compile: function(token) {
          var match = token.match,
              includeMissing = void 0 !== match[1],
              expression = match[2].trim(),
              withContext = match[3],
              only = void 0 !== match[4] && match[4].length;
          return delete token.match, token.only = only, token.includeMissing = includeMissing, token.stack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: expression
          }]).stack, void 0 !== withContext && (token.withStack = Twig.expression.compile.apply(this, [{
            type: Twig.expression.type.expression,
            value: withContext.trim()
          }]).stack), token
        },
        parse: function(token, context, chain) {
          function filterBlockTokens(token) {
            "logic" == token.type && "Twig.logic.type.block" == token.token.type && newBlockTokens.push(token), token.token && token.token.output && Twig.forEach(token.token.output, filterBlockTokens)
          }

          function updateTokens(core, updated) {
            Twig.forEach(core, function(token, index, container) {
              "logic" == token.type && "Twig.logic.type.block" == token.token.type && updated.token.block == token.token.block ? container[index] = updated : token.token && token.token.output && updateTokens(token.token.output, updated)
            })
          }

          function replaceParentFunc(inToken, parent) {
            Twig.forEach(inToken.token.output, function(token, index, container) {
              "output" == token.type && token.stack.length > 0 && "Twig.expression.type._function" == token.stack[0].type && "parent" == token.stack[0].fn ? container[index] = {
                value: origBlocks.hasOwnProperty(parent.token.block) ? origBlocks[parent.token.block] : "",
                type: "raw"
              } : token.token && token.token.output && (token.token && token.token.block && (parent = token), replaceParentFunc(token, parent))
            })
          }
          var withContext, i, template, file, result, origTokens, origBlocks, innerContext = {},
              newBlockTokens = [],
              filteredOutput = [],
              tpmToken = JSON.parse(JSON.stringify(token));
          if (!tpmToken.only)
            for (i in context) context.hasOwnProperty(i) && (innerContext[i] = context[i]);
          if (void 0 !== tpmToken.withStack) {
            withContext = Twig.expression.parse.apply(this, [tpmToken.withStack, context]);
            for (i in withContext) withContext.hasOwnProperty(i) && (innerContext[i] = withContext[i])
          }
          return file = Twig.expression.parse.apply(this, [tpmToken.stack, innerContext]), template = file instanceof Twig.Template ? file : this.importFile(file), Twig.parse.apply(template, [tpmToken.output, innerContext]), origTokens = JSON.parse(JSON.stringify(template.tokens)), template.render(innerContext), origBlocks = template.blocks, template.reset(), Twig.forEach(tpmToken.output, function(token) {
            filterBlockTokens(token), ("logic" != token.type || "Twig.logic.type.set" != token.token.type) && filteredOutput.push(token)
          }), Twig.forEach(newBlockTokens, function(token) {
            replaceParentFunc(token, token), updateTokens(template.tokens, token)
          }), Twig.parse.apply(template, [filteredOutput, innerContext]), result = {
            chain: chain,
            output: template.render(innerContext, {
              blocks: template.blocks
            })
          }, template.tokens = origTokens, template.reset(), result
        }
      }, {
        type: Twig.logic.type.endembed,
        regex: /^endembed$/,
        next: [],
        open: !1
      }], Twig.logic.handler = {}, Twig.logic.extendType = function(type, value) {
        value = value || "Twig.logic.type" + type, Twig.logic.type[type] = value
      }, Twig.logic.extend = function(definition) {
        if (!definition.type) throw new Twig.Error("Unable to extend logic definition. No type provided for " + definition);
        Twig.logic.extendType(definition.type), Twig.logic.handler[definition.type] = definition
      }; Twig.logic.definitions.length > 0;) Twig.logic.extend(Twig.logic.definitions.shift());
      return Twig.logic.compile = function(raw_token) {
        var expression = raw_token.value.trim(),
            token = Twig.logic.tokenize.apply(this, [expression]),
            token_template = Twig.logic.handler[token.type];
        return token_template.compile && (token = token_template.compile.apply(this, [token]), Twig.log.trace("Twig.logic.compile: ", "Compiled logic token to ", token)), token
      }, Twig.logic.tokenize = function(expression) {
        var token = {},
            token_template_type = null,
            token_type = null,
            token_regex = null,
            regex_array = null,
            regex = null,
            match = null;
        expression = expression.trim();
        for (token_template_type in Twig.logic.handler)
          if (Twig.logic.handler.hasOwnProperty(token_template_type))
            for (token_type = Twig.logic.handler[token_template_type].type, token_regex = Twig.logic.handler[token_template_type].regex, regex_array = [], token_regex instanceof Array ? regex_array = token_regex : regex_array.push(token_regex); regex_array.length > 0;)
              if (regex = regex_array.shift(), match = regex.exec(expression.trim()), null !== match) return token.type = token_type, token.match = match, Twig.log.trace("Twig.logic.tokenize: ", "Matched a ", token_type, " regular expression of ", match), token;
        throw new Twig.Error("Unable to parse '" + expression.trim() + "'")
      }, Twig.logic.parse = function(token, context, chain) {
        var token_template, output = "";
        return context = context || {}, Twig.log.debug("Twig.logic.parse: ", "Parsing logic token ", token), token_template = Twig.logic.handler[token.type], token_template.parse && (output = token_template.parse.apply(this, [token, context, chain])), output
      }, Twig
    }(Twig || {}),
    Twig = function(Twig) {
      "use strict";
      Twig.expression = {}, Twig.expression.reservedWords = ["true", "false", "null", "TRUE", "FALSE", "NULL", "_context"], Twig.expression.type = {
        comma: "Twig.expression.type.comma",
        operator: {
          unary: "Twig.expression.type.operator.unary",
          binary: "Twig.expression.type.operator.binary"
        },
        string: "Twig.expression.type.string",
        bool: "Twig.expression.type.bool",
        array: {
          start: "Twig.expression.type.array.start",
          end: "Twig.expression.type.array.end"
        },
        object: {
          start: "Twig.expression.type.object.start",
          end: "Twig.expression.type.object.end"
        },
        parameter: {
          start: "Twig.expression.type.parameter.start",
          end: "Twig.expression.type.parameter.end"
        },
        key: {
          period: "Twig.expression.type.key.period",
          brackets: "Twig.expression.type.key.brackets"
        },
        filter: "Twig.expression.type.filter",
        _function: "Twig.expression.type._function",
        variable: "Twig.expression.type.variable",
        number: "Twig.expression.type.number",
        _null: "Twig.expression.type.null",
        context: "Twig.expression.type.context",
        test: "Twig.expression.type.test"
      }, Twig.expression.set = {
        operations: [Twig.expression.type.filter, Twig.expression.type.operator.unary, Twig.expression.type.operator.binary, Twig.expression.type.array.end, Twig.expression.type.object.end, Twig.expression.type.parameter.end, Twig.expression.type.comma, Twig.expression.type.test],
        expressions: [Twig.expression.type._function, Twig.expression.type.bool, Twig.expression.type.string, Twig.expression.type.variable, Twig.expression.type.number, Twig.expression.type._null, Twig.expression.type.context, Twig.expression.type.parameter.start, Twig.expression.type.array.start, Twig.expression.type.object.start]
      }, Twig.expression.set.operations_extended = Twig.expression.set.operations.concat([Twig.expression.type.key.period, Twig.expression.type.key.brackets]), Twig.expression.fn = {
        compile: {
          push: function(token, stack, output) {
            output.push(token)
          },
          push_both: function(token, stack, output) {
            output.push(token), stack.push(token)
          }
        },
        parse: {
          push: function(token, stack) {
            stack.push(token)
          },
          push_value: function(token, stack) {
            stack.push(token.value)
          }
        }
      }, Twig.expression.definitions = [{
        type: Twig.expression.type.test,
        regex: /^is\s+(not)?\s*([a-zA-Z_][a-zA-Z0-9_]*)/,
        next: Twig.expression.set.operations.concat([Twig.expression.type.parameter.start]),
        compile: function(token, stack, output) {
          token.filter = token.match[2], token.modifier = token.match[1], delete token.match, delete token.value, output.push(token)
        },
        parse: function(token, stack, context) {
          var value = stack.pop(),
              params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
              result = Twig.test(token.filter, value, params);
          stack.push("not" == token.modifier ? !result : result)
        }
      }, {
        type: Twig.expression.type.comma,
        regex: /^,/,
        next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end, Twig.expression.type.object.end]),
        compile: function(token, stack, output) {
          var stack_token, i = stack.length - 1;
          for (delete token.match, delete token.value; i >= 0; i--) {
            if (stack_token = stack.pop(), stack_token.type === Twig.expression.type.object.start || stack_token.type === Twig.expression.type.parameter.start || stack_token.type === Twig.expression.type.array.start) {
              stack.push(stack_token);
              break
            }
            output.push(stack_token)
          }
          output.push(token)
        }
      }, {
        type: Twig.expression.type.operator.binary,
        regex: /(^[\+\-~%\?\:]|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^and\s+|^or\s+|^in\s+|^not in\s+|^\.\.|^starts\s+with\s+|^ends\s+with\s+|^matches\s+)/,
        next: Twig.expression.set.expressions.concat([Twig.expression.type.operator.unary]),
        compile: function(token, stack, output) {
          delete token.match, token.value = token.value.trim(), token.value = token.value.replace(/\s+/, " ");
          var value = token.value,
              operator = Twig.expression.operator.lookup(value, token);
          for (Twig.log.trace("Twig.expression.compile: ", "Operator: ", operator, " from ", value); stack.length > 0 && (stack[stack.length - 1].type == Twig.expression.type.operator.unary || stack[stack.length - 1].type == Twig.expression.type.operator.binary) && (operator.associativity === Twig.expression.operator.leftToRight && operator.precedence <= stack[stack.length - 1].precedence || operator.associativity === Twig.expression.operator.rightToLeft && operator.precedence < stack[stack.length - 1].precedence);) {
            var temp = stack.pop();
            output.push(temp)
          }
          if (":" === value) {
            if (!stack[stack.length - 1] || "?" !== stack[stack.length - 1].value) {
              var key_token = output.pop();
              if (key_token.type === Twig.expression.type.string || key_token.type === Twig.expression.type.variable || key_token.type === Twig.expression.type.number) token.key = key_token.value;
              else {
                if (key_token.type !== Twig.expression.type.parameter.end || !key_token.expression) throw new Twig.Error("Unexpected value before ':' of " + key_token.type + " = " + key_token.value);
                token.params = key_token.params
              }
              return void output.push(token)
            }
          } else stack.push(operator)
        },
        parse: function(token, stack, context) {
          token.key ? stack.push(token) : token.params ? (token.key = Twig.expression.parse.apply(this, [token.params, context]), stack.push(token), delete token.params) : Twig.expression.operator.parse(token.value, stack)
        }
      }, {
        type: Twig.expression.type.operator.unary,
        regex: /(^not\s+)/,
        next: Twig.expression.set.expressions,
        compile: function(token, stack, output) {
          delete token.match, token.value = token.value.trim();
          var value = token.value,
              operator = Twig.expression.operator.lookup(value, token);
          for (Twig.log.trace("Twig.expression.compile: ", "Operator: ", operator, " from ", value); stack.length > 0 && (stack[stack.length - 1].type == Twig.expression.type.operator.unary || stack[stack.length - 1].type == Twig.expression.type.operator.binary) && (operator.associativity === Twig.expression.operator.leftToRight && operator.precedence <= stack[stack.length - 1].precedence || operator.associativity === Twig.expression.operator.rightToLeft && operator.precedence < stack[stack.length - 1].precedence);) {
            var temp = stack.pop();
            output.push(temp)
          }
          stack.push(operator)
        },
        parse: function(token, stack) {
          Twig.expression.operator.parse(token.value, stack)
        }
      }, {
        type: Twig.expression.type.string,
        regex: /^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,
        next: Twig.expression.set.operations,
        compile: function(token, stack, output) {
          var value = token.value;
          delete token.match, value = '"' === value.substring(0, 1) ? value.replace('\\"', '"') : value.replace("\\'", "'"), token.value = value.substring(1, value.length - 1).replace(/\\n/g, "\n").replace(/\\r/g, "\r"), Twig.log.trace("Twig.expression.compile: ", "String value: ", token.value), output.push(token)
        },
        parse: Twig.expression.fn.parse.push_value
      }, {
        type: Twig.expression.type.parameter.start,
        regex: /^\(/,
        next: Twig.expression.set.expressions.concat([Twig.expression.type.parameter.end]),
        compile: Twig.expression.fn.compile.push_both,
        parse: Twig.expression.fn.parse.push
      }, {
        type: Twig.expression.type.parameter.end,
        regex: /^\)/,
        next: Twig.expression.set.operations_extended,
        compile: function(token, stack, output) {
          var stack_token, end_token = token;
          for (stack_token = stack.pop(); stack.length > 0 && stack_token.type != Twig.expression.type.parameter.start;) output.push(stack_token), stack_token = stack.pop();
          for (var param_stack = []; token.type !== Twig.expression.type.parameter.start;) param_stack.unshift(token), token = output.pop();
          param_stack.unshift(token);
          token = output[output.length - 1], void 0 === token || token.type !== Twig.expression.type._function && token.type !== Twig.expression.type.filter && token.type !== Twig.expression.type.test && token.type !== Twig.expression.type.key.brackets && token.type !== Twig.expression.type.key.period ? (end_token.expression = !0, param_stack.pop(), param_stack.shift(), end_token.params = param_stack, output.push(end_token)) : (end_token.expression = !1, token.params = param_stack)
        },
        parse: function(token, stack, context) {
          var new_array = [],
              array_ended = !1,
              value = null;
          if (token.expression) value = Twig.expression.parse.apply(this, [token.params, context]), stack.push(value);
          else {
            for (; stack.length > 0;) {
              if (value = stack.pop(), value && value.type && value.type == Twig.expression.type.parameter.start) {
                array_ended = !0;
                break
              }
              new_array.unshift(value)
            }
            if (!array_ended) throw new Twig.Error("Expected end of parameter set.");
            stack.push(new_array)
          }
        }
      }, {
        type: Twig.expression.type.array.start,
        regex: /^\[/,
        next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end]),
        compile: Twig.expression.fn.compile.push_both,
        parse: Twig.expression.fn.parse.push
      }, {
        type: Twig.expression.type.array.end,
        regex: /^\]/,
        next: Twig.expression.set.operations_extended,
        compile: function(token, stack, output) {
          for (var stack_token, i = stack.length - 1; i >= 0 && (stack_token = stack.pop(), stack_token.type !== Twig.expression.type.array.start); i--) output.push(stack_token);
          output.push(token)
        },
        parse: function(token, stack) {
          for (var new_array = [], array_ended = !1, value = null; stack.length > 0;) {
            if (value = stack.pop(), value.type && value.type == Twig.expression.type.array.start) {
              array_ended = !0;
              break
            }
            new_array.unshift(value)
          }
          if (!array_ended) throw new Twig.Error("Expected end of array.");
          stack.push(new_array)
        }
      }, {
        type: Twig.expression.type.object.start,
        regex: /^\{/,
        next: Twig.expression.set.expressions.concat([Twig.expression.type.object.end]),
        compile: Twig.expression.fn.compile.push_both,
        parse: Twig.expression.fn.parse.push
      }, {
        type: Twig.expression.type.object.end,
        regex: /^\}/,
        next: Twig.expression.set.operations_extended,
        compile: function(token, stack, output) {
          for (var stack_token, i = stack.length - 1; i >= 0 && (stack_token = stack.pop(), !stack_token || stack_token.type !== Twig.expression.type.object.start); i--) output.push(stack_token);
          output.push(token)
        },
        parse: function(end_token, stack) {
          for (var new_object = {}, object_ended = !1, token = null, has_value = !1, value = null; stack.length > 0;) {
            if (token = stack.pop(), token && token.type && token.type === Twig.expression.type.object.start) {
              object_ended = !0;
              break
            }
            if (token && token.type && (token.type === Twig.expression.type.operator.binary || token.type === Twig.expression.type.operator.unary) && token.key) {
              if (!has_value) throw new Twig.Error("Missing value for key '" + token.key + "' in object definition.");
              new_object[token.key] = value, void 0 === new_object._keys && (new_object._keys = []), new_object._keys.unshift(token.key), value = null, has_value = !1
            } else has_value = !0, value = token
          }
          if (!object_ended) throw new Twig.Error("Unexpected end of object.");
          stack.push(new_object)
        }
      }, {
        type: Twig.expression.type.filter,
        regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_\-]*)/,
        next: Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),
        compile: function(token, stack, output) {
          token.value = token.match[1], output.push(token)
        },
        parse: function(token, stack, context) {
          var input = stack.pop(),
              params = token.params && Twig.expression.parse.apply(this, [token.params, context]);
          stack.push(Twig.filter.apply(this, [token.value, input, params]))
        }
      }, {
        type: Twig.expression.type._function,
        regex: /^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,
        next: Twig.expression.type.parameter.start,
        transform: function() {
          return "("
        },
        compile: function(token, stack, output) {
          var fn = token.match[1];
          token.fn = fn, delete token.match, delete token.value, output.push(token)
        },
        parse: function(token, stack, context) {
          var value, params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
              fn = token.fn;
          if (Twig.functions[fn]) value = Twig.functions[fn].apply(this, params);
          else {
            if ("function" != typeof context[fn]) throw new Twig.Error(fn + " function does not exist and is not defined in the context");
            value = context[fn].apply(context, params)
          }
          stack.push(value)
        }
      }, {
        type: Twig.expression.type.variable,
        regex: /^[a-zA-Z_][a-zA-Z0-9_]*/,
        next: Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),
        compile: Twig.expression.fn.compile.push,
        validate: function(match) {
          return Twig.indexOf(Twig.expression.reservedWords, match[0]) < 0
        },
        parse: function(token, stack, context) {
          var value = Twig.expression.resolve(context[token.value], context);
          stack.push(value)
        }
      }, {
        type: Twig.expression.type.key.period,
        regex: /^\.([a-zA-Z0-9_]+)/,
        next: Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),
        compile: function(token, stack, output) {
          token.key = token.match[1], delete token.match, delete token.value, output.push(token)
        },
        parse: function(token, stack, context) {
          var value, params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
              key = token.key,
              object = stack.pop();
          if (null === object || void 0 === object) {
            if (this.options.strict_variables) throw new Twig.Error("Can't access a key " + key + " on an null or undefined object.");
            return null
          }
          var capitalize = function(value) {
            return value.substr(0, 1).toUpperCase() + value.substr(1)
          };
          value = "object" == typeof object && key in object ? object[key] : void 0 !== object["get" + capitalize(key)] ? object["get" + capitalize(key)] : void 0 !== object["is" + capitalize(key)] ? object["is" + capitalize(key)] : null, stack.push(Twig.expression.resolve(value, object, params))
        }
      }, {
        type: Twig.expression.type.key.brackets,
        regex: /^\[([^\]]*)\]/,
        next: Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),
        compile: function(token, stack, output) {
          var match = token.match[1];
          delete token.value, delete token.match, token.stack = Twig.expression.compile({
            value: match
          }).stack, output.push(token)
        },
        parse: function(token, stack, context) {
          var value, params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
              key = Twig.expression.parse.apply(this, [token.stack, context]),
              object = stack.pop();
          if (null === object || void 0 === object) {
            if (this.options.strict_variables) throw new Twig.Error("Can't access a key " + key + " on an null or undefined object.");
            return null
          }
          value = "object" == typeof object && key in object ? object[key] : null, stack.push(Twig.expression.resolve(value, object, params))
        }
      }, {
        type: Twig.expression.type._null,
        regex: /^(null|NULL|none|NONE)/,
        next: Twig.expression.set.operations,
        compile: function(token, stack, output) {
          delete token.match, token.value = null, output.push(token)
        },
        parse: Twig.expression.fn.parse.push_value
      }, {
        type: Twig.expression.type.context,
        regex: /^_context/,
        next: Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),
        compile: Twig.expression.fn.compile.push,
        parse: function(token, stack, context) {
          stack.push(context)
        }
      }, {
        type: Twig.expression.type.number,
        regex: /^\-?\d+(\.\d+)?/,
        next: Twig.expression.set.operations,
        compile: function(token, stack, output) {
          token.value = Number(token.value), output.push(token)
        },
        parse: Twig.expression.fn.parse.push_value
      }, {
        type: Twig.expression.type.bool,
        regex: /^(true|TRUE|false|FALSE)/,
        next: Twig.expression.set.operations,
        compile: function(token, stack, output) {
          token.value = "true" === token.match[0].toLowerCase(), delete token.match, output.push(token)
        },
        parse: Twig.expression.fn.parse.push_value
      }], Twig.expression.resolve = function(value, context, params) {
        return "function" == typeof value ? value.apply(context, params || []) : value
      }, Twig.expression.handler = {}, Twig.expression.extendType = function(type) {
        Twig.expression.type[type] = "Twig.expression.type." + type
      }, Twig.expression.extend = function(definition) {
        if (!definition.type) throw new Twig.Error("Unable to extend logic definition. No type provided for " + definition);
        Twig.expression.handler[definition.type] = definition
      };
      for (; Twig.expression.definitions.length > 0;) Twig.expression.extend(Twig.expression.definitions.shift());
      return Twig.expression.tokenize = function(expression) {
        var type, regex, regex_array, token_next, match_found, match_function, tokens = [],
            exp_offset = 0,
            next = null,
            invalid_matches = [];
        for (match_function = function() {
          {
            var match = Array.prototype.slice.apply(arguments);
            match.pop(), match.pop()
          }
          return Twig.log.trace("Twig.expression.tokenize", "Matched a ", type, " regular expression of ", match), next && Twig.indexOf(next, type) < 0 ? (invalid_matches.push(type + " cannot follow a " + tokens[tokens.length - 1].type + " at template:" + exp_offset + " near '" + match[0].substring(0, 20) + "...'"), match[0]) : Twig.expression.handler[type].validate && !Twig.expression.handler[type].validate(match, tokens) ? match[0] : (invalid_matches = [], tokens.push({
            type: type,
            value: match[0],
            match: match
          }), match_found = !0, next = token_next, exp_offset += match[0].length, Twig.expression.handler[type].transform ? Twig.expression.handler[type].transform(match, tokens) : "")
        }, Twig.log.debug("Twig.expression.tokenize", "Tokenizing expression ", expression); expression.length > 0;) {
          expression = expression.trim();
          for (type in Twig.expression.handler)
            if (Twig.expression.handler.hasOwnProperty(type)) {
              for (token_next = Twig.expression.handler[type].next, regex = Twig.expression.handler[type].regex, regex_array = regex instanceof Array ? regex : [regex], match_found = !1; regex_array.length > 0;) regex = regex_array.pop(), expression = expression.replace(regex, match_function);
              if (match_found) break
            } if (!match_found) throw new Twig.Error(invalid_matches.length > 0 ? invalid_matches.join(" OR ") : "Unable to parse '" + expression + "' at template position" + exp_offset)
        }
        return Twig.log.trace("Twig.expression.tokenize", "Tokenized to ", tokens), tokens
      }, Twig.expression.compile = function(raw_token) {
        var expression = raw_token.value,
            tokens = Twig.expression.tokenize(expression),
            token = null,
            output = [],
            stack = [],
            token_template = null;
        for (Twig.log.trace("Twig.expression.compile: ", "Compiling ", expression); tokens.length > 0;) token = tokens.shift(), token_template = Twig.expression.handler[token.type], Twig.log.trace("Twig.expression.compile: ", "Compiling ", token), token_template.compile && token_template.compile(token, stack, output), Twig.log.trace("Twig.expression.compile: ", "Stack is", stack), Twig.log.trace("Twig.expression.compile: ", "Output is", output);
        for (; stack.length > 0;) output.push(stack.pop());
        return Twig.log.trace("Twig.expression.compile: ", "Final output is", output), raw_token.stack = output, delete raw_token.value, raw_token
      }, Twig.expression.parse = function(tokens, context) {
        var that = this;
        tokens instanceof Array || (tokens = [tokens]);
        var stack = [],
            token_template = null;
        return Twig.forEach(tokens, function(token) {
          token_template = Twig.expression.handler[token.type], token_template.parse && token_template.parse.apply(that, [token, stack, context])
        }), stack.pop()
      }, Twig
    }(Twig || {}),
    Twig = function(Twig) {
      "use strict";
      Twig.expression.operator = {
        leftToRight: "leftToRight",
        rightToLeft: "rightToLeft"
      };
      var containment = function(a, b) {
        if (void 0 !== b.indexOf) return a === b || "" !== a && b.indexOf(a) > -1;
        var el;
        for (el in b)
          if (b.hasOwnProperty(el) && b[el] === a) return !0;
        return !1
      };
      return Twig.expression.operator.lookup = function(operator, token) {
        switch (operator) {
          case "..":
            token.precedence = 25, token.associativity = Twig.expression.operator.leftToRight;
            break;
          case "not in":
          case "in":
            token.precedence = 20, token.associativity = Twig.expression.operator.leftToRight;
            break;
          case ",":
            token.precedence = 18, token.associativity = Twig.expression.operator.leftToRight;
            break;
          case "?":
          case ":":
            token.precedence = 0, token.associativity = Twig.expression.operator.rightToLeft;
            break;
          case "starts with":
          case "ends with":
          case "matches":
            token.precedence = 20, token.associativity = Twig.expression.operator.leftToRight;
            break;
          case "or":
            token.precedence = 10, token.associativity = Twig.expression.operator.leftToRight;
            break;
          case "and":
            token.precedence = 15, token.associativity = Twig.expression.operator.leftToRight;
            break;
          case "==":
          case "!=":
          case "<":
          case "<=":
          case ">":
          case ">=":
            token.precedence = 20, token.associativity = Twig.expression.operator.leftToRight;
            break;
          case "~":
            token.precedence = 40, token.associativity = Twig.expression.operator.leftToRight;
            break;
          case "+":
          case "-":
            token.precedence = 30, token.associativity = Twig.expression.operator.leftToRight;
            break;
          case "**":
            token.precedence = 200, token.associativity = Twig.expression.operator.rightToLeft;
            break;
          case "//":
          case "*":
          case "/":
          case "%":
            token.precedence = 60, token.associativity = Twig.expression.operator.leftToRight;
            break;
          case "not":
            token.precedence = 50, token.associativity = Twig.expression.operator.rightToLeft;
            break;
          default:
            throw new Twig.Error(operator + " is an unknown operator.")
        }
        return token.operator = operator, token
      }, Twig.expression.operator.parse = function(operator, stack) {
        Twig.log.trace("Twig.expression.operator.parse: ", "Handling ", operator);
        var a, b, c;
        switch (operator) {
          case ":":
            break;
          case "?":
            c = stack.pop(), b = stack.pop(), a = stack.pop(), stack.push(a ? b : c);
            break;
          case "+":
            b = parseFloat(stack.pop()), a = parseFloat(stack.pop()), stack.push(a + b);
            break;
          case "-":
            b = parseFloat(stack.pop()), a = parseFloat(stack.pop()), stack.push(a - b);
            break;
          case "*":
            b = parseFloat(stack.pop()), a = parseFloat(stack.pop()), stack.push(a * b);
            break;
          case "/":
            b = parseFloat(stack.pop()), a = parseFloat(stack.pop()), stack.push(a / b);
            break;
          case "//":
            b = parseFloat(stack.pop()), a = parseFloat(stack.pop()), stack.push(parseInt(a / b));
            break;
          case "%":
            b = parseFloat(stack.pop()), a = parseFloat(stack.pop()), stack.push(a % b);
            break;
          case "~":
            b = stack.pop(), a = stack.pop(), stack.push((null != a ? a.toString() : "") + (null != b ? b.toString() : ""));
            break;
          case "not":
          case "!":
            stack.push(!stack.pop());
            break;
          case "<":
            b = stack.pop(), a = stack.pop(), stack.push(b > a);
            break;
          case "<=":
            b = stack.pop(), a = stack.pop(), stack.push(b >= a);
            break;
          case ">":
            b = stack.pop(), a = stack.pop(), stack.push(a > b);
            break;
          case ">=":
            b = stack.pop(), a = stack.pop(), stack.push(a >= b);
            break;
          case "===":
            b = stack.pop(), a = stack.pop(), stack.push(a === b);
            break;
          case "==":
            b = stack.pop(), a = stack.pop(), stack.push(a == b);
            break;
          case "!==":
            b = stack.pop(), a = stack.pop(), stack.push(a !== b);
            break;
          case "!=":
            b = stack.pop(), a = stack.pop(), stack.push(a != b);
            break;
          case "or":
            b = stack.pop(), a = stack.pop(), stack.push(a || b);
            break;
          case "and":
            b = stack.pop(), a = stack.pop(), stack.push(a && b);
            break;
          case "**":
            b = stack.pop(), a = stack.pop(), stack.push(Math.pow(a, b));
            break;
          case "not in":
            b = stack.pop(), a = stack.pop(), stack.push(!containment(a, b));
            break;
          case "in":
            b = stack.pop(), a = stack.pop(), stack.push(containment(a, b));
            break;
          case "..":
            b = stack.pop(), a = stack.pop(), stack.push(Twig.functions.range(a, b));
            break;
          case "starts with":
            b = stack.pop(), a = stack.pop(), stack.push(Twig.lib.is("String", a) && Twig.lib.is("String", b) && 0 === a.indexOf(b));
            break;
          case "ends with":
            b = stack.pop(), a = stack.pop(), stack.push(Twig.lib.is("String", a) && Twig.lib.is("String", b) && ("" === b || a.substr(-b.length) === b));
            break;
          case "matches":
            b = stack.pop(), a = stack.pop(), null == a || 0 === a || a === !1 ? a = "" : a === !0 && (a = "1");
            var delimiter = b[0],
                parts = b.split(delimiter),
                flags = parts.pop();
            parts.shift();
            var pattern = parts.join(delimiter);
            pattern = pattern.replace("\\" + delimiter, delimiter);
            var regexp = new RegExp(pattern, flags);
            stack.push(regexp.exec(a));
            break;
          default:
            throw new Twig.Error(operator + " is an unknown operator.")
        }
      }, Twig
    }(Twig || {}),
    Twig = function(Twig) {
      function is(type, obj) {
        var clas = Object.prototype.toString.call(obj).slice(8, -1);
        return void 0 !== obj && null !== obj && clas === type
      }
      return Twig.filters = {
        upper: function(value) {
          return "string" != typeof value ? value : value.toUpperCase()
        },
        lower: function(value) {
          return "string" != typeof value ? value : value.toLowerCase()
        },
        capitalize: function(value) {
          return "string" != typeof value ? value : value.substr(0, 1).toUpperCase() + value.toLowerCase().substr(1)
        },
        title: function(value) {
          return "string" != typeof value ? value : value.toLowerCase().replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
            return p1 + p2.toUpperCase()
          })
        },
        length: function(value) {
          return Twig.lib.is("Array", value) || "string" == typeof value ? value.length : Twig.lib.is("Object", value) ? void 0 === value._keys ? Object.keys(value).length : value._keys.length : 0
        },
        reverse: function(value) {
          if (is("Array", value)) return value.reverse();
          if (is("String", value)) return value.split("").reverse().join("");
          if (is("Object", value)) {
            var keys = value._keys || Object.keys(value).reverse();
            return value._keys = keys, value
          }
        },
        sort: function(value) {
          if (is("Array", value)) return value.sort();
          if (is("Object", value)) {
            delete value._keys;
            var keys = Object.keys(value),
                sorted_keys = keys.sort(function(a, b) {
                  return value[a] > value[b]
                });
            return value._keys = sorted_keys, value
          }
        },
        keys: function(value) {
          if (void 0 !== value && null !== value) {
            var keyset = value._keys || Object.keys(value),
                output = [];
            return Twig.forEach(keyset, function(key) {
              "_keys" !== key && value.hasOwnProperty(key) && output.push(key)
            }), output
          }
        },
        url_encode: function(value) {
          return void 0 !== value && null !== value ? encodeURIComponent(value) : void 0
        },
        join: function(value, params) {
          if (void 0 !== value && null !== value) {
            var join_str = "",
                output = [],
                keyset = null;
            return params && params[0] && (join_str = params[0]), is("Array", value) ? output = value : (keyset = value._keys || Object.keys(value), Twig.forEach(keyset, function(key) {
              "_keys" !== key && value.hasOwnProperty(key) && output.push(value[key])
            })), output.join(join_str)
          }
        },
        "default": function(value, params) {
          if (void 0 === params || 1 !== params.length) throw new Twig.Error("default filter expects one argument");
          return void 0 === value || null === value || "" === value ? params[0] : value
        },
        json_encode: function(value) {
          return value && value.hasOwnProperty("_keys") && delete value._keys, void 0 === value || null === value ? "null" : JSON.stringify(value)
        },
        merge: function(value, params) {
          var obj = [],
              arr_index = 0,
              keyset = [];
          if (is("Array", value) ? Twig.forEach(params, function(param) {
            is("Array", param) || (obj = {})
          }) : obj = {}, is("Array", obj) || (obj._keys = []), is("Array", value) ? Twig.forEach(value, function(val) {
            obj._keys && obj._keys.push(arr_index), obj[arr_index] = val, arr_index++
          }) : (keyset = value._keys || Object.keys(value), Twig.forEach(keyset, function(key) {
            obj[key] = value[key], obj._keys.push(key);
            var int_key = parseInt(key, 10);
            !isNaN(int_key) && int_key >= arr_index && (arr_index = int_key + 1)
          })), Twig.forEach(params, function(param) {
            is("Array", param) ? Twig.forEach(param, function(val) {
              obj._keys && obj._keys.push(arr_index), obj[arr_index] = val, arr_index++
            }) : (keyset = param._keys || Object.keys(param), Twig.forEach(keyset, function(key) {
              obj[key] || obj._keys.push(key), obj[key] = param[key];
              var int_key = parseInt(key, 10);
              !isNaN(int_key) && int_key >= arr_index && (arr_index = int_key + 1)
            }))
          }), 0 === params.length) throw new Twig.Error("Filter merge expects at least one parameter");
          return obj
        },
        date: function(value, params) {
          var date = Twig.functions.date(value),
              format = params && params.length ? params[0] : "F j, Y H:i";
          return Twig.lib.formatDate(date, format)
        },
        date_modify: function(value, params) {
          if (void 0 !== value && null !== value) {
            if (void 0 === params || 1 !== params.length) throw new Twig.Error("date_modify filter expects 1 argument");
            var time, modifyText = params[0];
            return Twig.lib.is("Date", value) && (time = Twig.lib.strtotime(modifyText, value.getTime() / 1e3)), Twig.lib.is("String", value) && (time = Twig.lib.strtotime(modifyText, Twig.lib.strtotime(value))), Twig.lib.is("Number", value) && (time = Twig.lib.strtotime(modifyText, value)), new Date(1e3 * time)
          }
        },
        replace: function(value, params) {
          if (void 0 !== value && null !== value) {
            var tag, pairs = params[0];
            for (tag in pairs) pairs.hasOwnProperty(tag) && "_keys" !== tag && (value = Twig.lib.replaceAll(value, tag, pairs[tag]));
            return value
          }
        },
        format: function(value, params) {
          return void 0 !== value && null !== value ? Twig.lib.vsprintf(value, params) : void 0
        },
        striptags: function(value) {
          return void 0 !== value && null !== value ? Twig.lib.strip_tags(value) : void 0
        },
        escape: function(value) {
          if (void 0 !== value && null !== value) {
            var raw_value = value.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
            return Twig.Markup(raw_value)
          }
        },
        e: function(value) {
          return Twig.filters.escape(value)
        },
        nl2br: function(value) {
          if (void 0 !== value && null !== value) {
            var linebreak_tag = "BACKSLASH_n_replace",
                br = "<br />" + linebreak_tag;
            return value = Twig.filters.escape(value).replace(/\r\n/g, br).replace(/\r/g, br).replace(/\n/g, br), value = Twig.lib.replaceAll(value, linebreak_tag, "\n"), Twig.Markup(value)
          }
        },
        number_format: function(value, params) {
          var number = value,
              decimals = params && params[0] ? params[0] : void 0,
              dec = params && void 0 !== params[1] ? params[1] : ".",
              sep = params && void 0 !== params[2] ? params[2] : ",";
          number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
          var n = isFinite(+number) ? +number : 0,
              prec = isFinite(+decimals) ? Math.abs(decimals) : 0,
              s = "",
              toFixedFix = function(n, prec) {
                var k = Math.pow(10, prec);
                return "" + Math.round(n * k) / k
              };
          return s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split("."), s[0].length > 3 && (s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)), (s[1] || "").length < prec && (s[1] = s[1] || "", s[1] += new Array(prec - s[1].length + 1).join("0")), s.join(dec)
        },
        trim: function(value, params) {
          if (void 0 !== value && null !== value) {
            var whitespace, str = Twig.filters.escape("" + value);
            whitespace = params && params[0] ? "" + params[0] : " \n\r	\fÂ â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€‹\u2028\u2029ã€€";
            for (var i = 0; i < str.length; i++)
              if (-1 === whitespace.indexOf(str.charAt(i))) {
                str = str.substring(i);
                break
              } for (i = str.length - 1; i >= 0; i--)
              if (-1 === whitespace.indexOf(str.charAt(i))) {
                str = str.substring(0, i + 1);
                break
              } return -1 === whitespace.indexOf(str.charAt(0)) ? str : ""
          }
        },
        truncate: function(value, params) {
          var length = 30,
              preserve = !1,
              separator = "...";
          if (value += "", params && (params[0] && (length = params[0]), params[1] && (preserve = params[1]), params[2] && (separator = params[2])), value.length > length) {
            if (preserve && (length = value.indexOf(" ", length), -1 === length)) return value;
            value = value.substr(0, length) + separator
          }
          return value
        },
        slice: function(value, params) {
          if (void 0 !== value && null !== value) {
            if (void 0 === params || params.length < 1) throw new Twig.Error("slice filter expects at least 1 argument");
            var start = params[0] || 0,
                length = params.length > 1 ? params[1] : value.length,
                startIndex = start >= 0 ? start : Math.max(value.length + start, 0);
            if (Twig.lib.is("Array", value)) {
              for (var output = [], i = startIndex; startIndex + length > i && i < value.length; i++) output.push(value[i]);
              return output
            }
            if (Twig.lib.is("String", value)) return value.substr(startIndex, length);
            throw new Twig.Error("slice filter expects value to be an array or string")
          }
        },
        abs: function(value) {
          return void 0 !== value && null !== value ? Math.abs(value) : void 0
        },
        first: function(value) {
          if (is("Array", value)) return value[0];
          if (is("Object", value)) {
            if ("_keys" in value) return value[value._keys[0]]
          } else if ("string" == typeof value) return value.substr(0, 1)
        },
        split: function(value, params) {
          if (void 0 !== value && null !== value) {
            if (void 0 === params || params.length < 1 || params.length > 2) throw new Twig.Error("split filter expects 1 or 2 argument");
            if (Twig.lib.is("String", value)) {
              var delimiter = params[0],
                  limit = params[1],
                  split = value.split(delimiter);
              if (void 0 === limit) return split;
              if (0 > limit) return value.split(delimiter, split.length + limit);
              var limitedSplit = [];
              if ("" == delimiter)
                for (; split.length > 0;) {
                  for (var temp = "", i = 0; limit > i && split.length > 0; i++) temp += split.shift();
                  limitedSplit.push(temp)
                } else {
                for (var i = 0; limit - 1 > i && split.length > 0; i++) limitedSplit.push(split.shift());
                split.length > 0 && limitedSplit.push(split.join(delimiter))
              }
              return limitedSplit
            }
            throw new Twig.Error("split filter expects value to be a string")
          }
        },
        last: function(value) {
          if (Twig.lib.is("Object", value)) {
            var keys;
            return keys = void 0 === value._keys ? Object.keys(value) : value._keys, value[keys[keys.length - 1]]
          }
          return value[value.length - 1]
        },
        raw: function(value) {
          return Twig.Markup(value)
        },
        batch: function(items, params) {
          var result, last, missing, size = params.shift(),
              fill = params.shift();
          if (!Twig.lib.is("Array", items)) throw new Twig.Error("batch filter expects items to be an array");
          if (!Twig.lib.is("Number", size)) throw new Twig.Error("batch filter expects size to be a number");
          if (size = Math.ceil(size), result = Twig.lib.chunkArray(items, size), fill && items.length % size != 0) {
            for (last = result.pop(), missing = size - last.length; missing--;) last.push(fill);
            result.push(last)
          }
          return result
        },
        round: function(value, params) {
          params = params || [];
          var precision = params.length > 0 ? params[0] : 0,
              method = params.length > 1 ? params[1] : "common";
          if (value = parseFloat(value), precision && !Twig.lib.is("Number", precision)) throw new Twig.Error("round filter expects precision to be a number");
          if ("common" === method) return Twig.lib.round(value, precision);
          if (!Twig.lib.is("Function", Math[method])) throw new Twig.Error("round filter expects method to be 'floor', 'ceil', or 'common'");
          return Math[method](value * Math.pow(10, precision)) / Math.pow(10, precision)
        }
      }, Twig.filter = function(filter, value, params) {
        if (!Twig.filters[filter]) throw "Unable to find filter " + filter;
        return Twig.filters[filter].apply(this, [value, params])
      }, Twig.filter.extend = function(filter, definition) {
        Twig.filters[filter] = definition
      }, Twig
    }(Twig || {}),
    Twig = function(Twig) {
      return Twig.functions = {
        range: function(low, high, step) {
          var inival, endval, plus, matrix = [],
              walker = step || 1,
              chars = !1;
          if (isNaN(low) || isNaN(high) ? isNaN(low) && isNaN(high) ? (chars = !0, inival = low.charCodeAt(0), endval = high.charCodeAt(0)) : (inival = isNaN(low) ? 0 : low, endval = isNaN(high) ? 0 : high) : (inival = parseInt(low, 10), endval = parseInt(high, 10)), plus = inival > endval ? !1 : !0)
            for (; endval >= inival;) matrix.push(chars ? String.fromCharCode(inival) : inival), inival += walker;
          else
            for (; inival >= endval;) matrix.push(chars ? String.fromCharCode(inival) : inival), inival -= walker;
          return matrix
        },
        cycle: function(arr, i) {
          var pos = i % arr.length;
          return arr[pos]
        },
        dump: function() {
          var EOL = "\n",
              indentChar = "  ",
              indentTimes = 0,
              out = "",
              args = Array.prototype.slice.call(arguments),
              indent = function(times) {
                for (var ind = ""; times > 0;) times--, ind += indentChar;
                return ind
              },
              displayVar = function(variable) {
                out += indent(indentTimes), "object" == typeof variable ? dumpVar(variable) : "function" == typeof variable ? out += "function()" + EOL : "string" == typeof variable ? out += "string(" + variable.length + ') "' + variable + '"' + EOL : "number" == typeof variable ? out += "number(" + variable + ")" + EOL : "boolean" == typeof variable && (out += "bool(" + variable + ")" + EOL)
              },
              dumpVar = function(variable) {
                var i;
                if (null === variable) out += "NULL" + EOL;
                else if (void 0 === variable) out += "undefined" + EOL;
                else if ("object" == typeof variable) {
                  out += indent(indentTimes) + typeof variable, indentTimes++, out += "(" + function(obj) {
                    var key, size = 0;
                    for (key in obj) obj.hasOwnProperty(key) && size++;
                    return size
                  }(variable) + ") {" + EOL;
                  for (i in variable) out += indent(indentTimes) + "[" + i + "]=> " + EOL, displayVar(variable[i]);
                  indentTimes--, out += indent(indentTimes) + "}" + EOL
                } else displayVar(variable)
              };
          return 0 == args.length && args.push(this.context), Twig.forEach(args, function(variable) {
            dumpVar(variable)
          }), out
        },
        date: function(date) {
          var dateObj;
          if (void 0 === date) dateObj = new Date;
          else if (Twig.lib.is("Date", date)) dateObj = date;
          else if (Twig.lib.is("String", date)) dateObj = new Date(1e3 * Twig.lib.strtotime(date));
          else {
            if (!Twig.lib.is("Number", date)) throw new Twig.Error("Unable to parse date " + date);
            dateObj = new Date(1e3 * date)
          }
          return dateObj
        },
        block: function(block) {
          return this.blocks[block]
        },
        parent: function() {
          return Twig.placeholders.parent
        },
        attribute: function(object, method, params) {
          return Twig.lib.is("Object", object) && object.hasOwnProperty(method) ? "function" == typeof object[method] ? object[method].apply(void 0, params) : object[method] : object[method] || void 0
        },
        max: function(values) {
          return Twig.lib.is("Object", values) ? (delete values._keys, Twig.lib.max(values)) : Twig.lib.max.apply(null, arguments)
        },
        min: function(values) {
          return Twig.lib.is("Object", values) ? (delete values._keys, Twig.lib.min(values)) : Twig.lib.min.apply(null, arguments)
        },
        template_from_string: function(template) {
          return void 0 === template && (template = ""), new Twig.Template({
            options: this.options,
            data: template
          })
        },
        random: function(value) {
          function getRandomNumber(n) {
            var random = Math.floor(Math.random() * LIMIT_INT31),
                limits = [0, n],
                min = Math.min.apply(null, limits),
                max = Math.max.apply(null, limits);
            return min + Math.floor((max - min + 1) * random / LIMIT_INT31)
          }
          var LIMIT_INT31 = 2147483648;
          if (Twig.lib.is("Number", value)) return getRandomNumber(value);
          if (Twig.lib.is("String", value)) return value.charAt(getRandomNumber(value.length - 1));
          if (Twig.lib.is("Array", value)) return value[getRandomNumber(value.length - 1)];
          if (Twig.lib.is("Object", value)) {
            var keys = Object.keys(value);
            return value[keys[getRandomNumber(keys.length - 1)]]
          }
          return getRandomNumber(LIMIT_INT31 - 1)
        }
      }, Twig._function = function(_function, value, params) {
        if (!Twig.functions[_function]) throw "Unable to find function " + _function;
        return Twig.functions[_function](value, params)
      }, Twig._function.extend = function(_function, definition) {
        Twig.functions[_function] = definition
      }, Twig
    }(Twig || {}),
    Twig = function(Twig) {
      "use strict";
      return Twig.tests = {
        empty: function(value) {
          if (null === value || void 0 === value) return !0;
          if ("number" == typeof value) return !1;
          if (value.length && value.length > 0) return !1;
          for (var key in value)
            if (value.hasOwnProperty(key)) return !1;
          return !0
        },
        odd: function(value) {
          return value % 2 === 1
        },
        even: function(value) {
          return value % 2 === 0
        },
        divisibleby: function(value, params) {
          return value % params[0] === 0
        },
        defined: function(value) {
          return void 0 !== value
        },
        none: function(value) {
          return null === value
        },
        "null": function(value) {
          return this.none(value)
        },
        sameas: function(value, params) {
          return value === params[0]
        },
        iterable: function(value) {
          return value && (Twig.lib.is("Array", value) || Twig.lib.is("Object", value))
        }
      }, Twig.test = function(test, value, params) {
        if (!Twig.tests[test]) throw "Test " + test + " is not defined.";
        return Twig.tests[test](value, params)
      }, Twig.test.extend = function(test, definition) {
        Twig.tests[test] = definition
      }, Twig
    }(Twig || {}),
    Twig = function(Twig) {
      "use strict";
      return Twig.exports = {
        VERSION: Twig.VERSION
      }, Twig.exports.twig = function(params) {
        var id = params.id,
            options = {
              strict_variables: params.strict_variables || !1,
              autoescape: null != params.autoescape && params.autoescape || !1,
              allowInlineIncludes: params.allowInlineIncludes || !1,
              rethrow: params.rethrow || !1
            };
        if (id && Twig.validateId(id), void 0 !== params.debug && (Twig.debug = params.debug), void 0 !== params.trace && (Twig.trace = params.trace), void 0 !== params.data) return new Twig.Template({
          data: params.data,
          module: params.module,
          id: id,
          options: options
        });
        if (void 0 !== params.ref) {
          if (void 0 !== params.id) throw new Twig.Error("Both ref and id cannot be set on a twig.js template.");
          return Twig.Templates.load(params.ref)
        }
        return void 0 !== params.href ? Twig.Templates.loadRemote(params.href, {
          id: id,
          method: "ajax",
          base: params.base,
          module: params.module,
          precompiled: params.precompiled,
          async: params.async,
          options: options
        }, params.load, params.error) : void 0 !== params.path ? Twig.Templates.loadRemote(params.path, {
          id: id,
          method: "fs",
          base: params.base,
          module: params.module,
          precompiled: params.precompiled,
          async: params.async,
          options: options
        }, params.load, params.error) : void 0
      }, Twig.exports.extendFilter = function(filter, definition) {
        Twig.filter.extend(filter, definition)
      }, Twig.exports.extendFunction = function(fn, definition) {
        Twig._function.extend(fn, definition)
      }, Twig.exports.extendTest = function(test, definition) {
        Twig.test.extend(test, definition)
      }, Twig.exports.extendTag = function(definition) {
        Twig.logic.extend(definition)
      }, Twig.exports.extend = function(fn) {
        fn(Twig)
      }, Twig.exports.compile = function(markup, options) {
        var template, id = options.filename,
            path = options.filename;
        return template = new Twig.Template({
          data: markup,
          path: path,
          id: id,
          options: options.settings["twig options"]
        }),
            function(context) {
              return template.render(context)
            }
      }, Twig.exports.renderFile = function(path, options, fn) {
        "function" == typeof options && (fn = options, options = {}), options = options || {};
        var params = {
              path: path,
              base: options.settings.views,
              load: function(template) {
                fn(null, template.render(options))
              }
            },
            view_options = options.settings["twig options"];
        if (view_options)
          for (var option in view_options) view_options.hasOwnProperty(option) && (params[option] = view_options[option]);
        Twig.exports.twig(params)
      }, Twig.exports.__express = Twig.exports.renderFile, Twig.exports.cache = function(cache) {
        Twig.cache = cache
      }, Twig
    }(Twig || {}),
    Twig = function(Twig) {
      return Twig.compiler = {
        module: {}
      }, Twig.compiler.compile = function(template, options) {
        var output, tokens = JSON.stringify(template.tokens),
            id = template.id;
        if (options.module) {
          if (void 0 === Twig.compiler.module[options.module]) throw new Twig.Error("Unable to find module type " + options.module);
          output = Twig.compiler.module[options.module](id, tokens, options.twig)
        } else output = Twig.compiler.wrap(id, tokens);
        return output
      }, Twig.compiler.module = {
        amd: function(id, tokens, pathToTwig) {
          return 'define(["' + pathToTwig + '"], function (Twig) {\n	var twig, templates;\ntwig = Twig.twig;\ntemplates = ' + Twig.compiler.wrap(id, tokens) + "\n	return templates;\n});"
        },
        node: function(id, tokens) {
          return 'var twig = require("twig").twig;\nexports.template = ' + Twig.compiler.wrap(id, tokens)
        },
        cjs2: function(id, tokens, pathToTwig) {
          return 'module.declare([{ twig: "' + pathToTwig + '" }], function (require, exports, module) {\n	var twig = require("twig").twig;\n	exports.template = ' + Twig.compiler.wrap(id, tokens) + "\n});"
        }
      }, Twig.compiler.wrap = function(id, tokens) {
        return 'twig({id:"' + id.replace('"', '\\"') + '", data:' + tokens + ", precompiled: true});\n"
      }, Twig
    }(Twig || {});
"undefined" != typeof module && module.declare ? module.declare([], function(require, exports) {
  for (key in Twig.exports) Twig.exports.hasOwnProperty(key) && (exports[key] = Twig.exports[key])
}) : "function" == typeof define && define.amd ? define("twig", function() {
  return Twig.exports
}) : "undefined" != typeof module && module.exports ? module.exports = Twig.exports : (window.twig = Twig.exports.twig, window.Twig = Twig.exports),
    function(b, f, e) {
      function a(a, d) {
        function h(a) {
          b(c).each(function() {
            var c = b(this);
            this !== a.target && !c.has(a.target).length && c.triggerHandler(d, [a.target])
          })
        }
        d = d || a + e;
        var c = b(),
            g = a + "." + d + "-special-event";
        b.event.special[d] = {
          setup: function() {
            c = c.add(this), 1 === c.length && b(f).on(g, h)
          },
          teardown: function() {
            c = c.not(this), 0 === c.length && b(f).off(g)
          },
          add: function(a) {
            var c = a.handler;
            a.handler = function(a, b) {
              a.target = b, c.apply(this, arguments)
            }
          }
        }
      }
      b.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "), function(b) {
        a(b)
      }), a("focusin", "focus" + e), a("focusout", "blur" + e), b.addOutsideEvent = a
    }(jQuery, document, "outside"),
    function() {
      var initializing = !1,
          fnTest = /xyz/.test(function() {}) ? /\b_super\b/ : /.*/;
      Object.subClass = function(prop) {
        function Class() {
          !initializing && this.init && this.init.apply(this, arguments)
        }
        var _super = this.prototype;
        initializing = !0;
        var proto = new this;
        initializing = !1;
        for (var name in prop) proto[name] = "function" == typeof prop[name] && "function" == typeof _super[name] && fnTest.test(prop[name]) ? function(name, fn) {
          return function() {
            var tmp = this._super;
            this._super = _super[name];
            var ret = fn.apply(this, arguments);
            return this._super = tmp, ret
          }
        }(name, prop[name]) : prop[name];
        return Class.prototype = proto, Class.constructor = Class, Class.subClass = arguments.callee, Class
      }
    }(),
    function($) {
      AwesomeComplete = Object.subClass({
        init: function(el, options) {
          this.input = el, this.config = {
            activeItemClass: "active",
            activateFirst: !1,
            allowBlankSearch: !1,
            allowBlankValue: !1,
            attachTo: void 0,
            dataMethod: void 0,
            comboBox: !1,
            comboBoxClass: "autocomplete-combobox",
            dontMatch: [],
            highlightMatches: !0,
            highlightClass: "match",
            ignoreCase: !0,
            nameField: "name",
            noResultsClass: "noResults",
            noResultsMessage: void 0,
            searchOnFocus: !1,
            splitTerm: !0,
            staticData: [],
            suggestionListClass: "autocomplete",
            resultLimit: 10,
            typingDelay: 0,
            wordDelimiter: /[^\da-z]+/gi
          }, options && $.extend(this.config, options), this.input.attr("autocomplete", "off").addClass("awesomecomplete-input"), this.input.prop("readonly", !1).removeClass("fc-readonly");
          var $attachTo = $(this.config.attachTo || this.input),
              $list = $("<ul/>").addClass(this.config.suggestionListClass).attr("data-fc-id", this.input.attr("data-fc-id") + "-autocomplete").insertAfter($attachTo).hide().css("width", $attachTo.innerWidth());
          this.list = $list, this.list_parent = $attachTo, this.typingDelayPointer, this.suppressKey = !1, this.mouseDown = !1, this.blurWait = !1, this.comboBoxEvent = !1, this.usingArrows = !1, this.input.on("keyup.awesomecomplete", $.proxy(this.input_keyup, this)), this.input.on("keydown.awesomecomplete", $.proxy(this.input_keydown, this)), this.input.on("keypress.awesomecomplete", $.proxy(this.input_keypress, this)), this.input.on("mousedownoutside.awesomecomplete", $.proxy(this.input_mousedownoutside, this)), this.input.on("mouseupoutside.awesomecomplete", $.proxy(this.input_mouseupoutside, this)), this.input.on("blur.awesomecomplete", $.proxy(this.input_blur, this)), this.input.on("focus.awesomecomplete", $.proxy(this.input_focus, this));
          var props = {
                visibility: "hidden",
                display: "block"
              },
              $hiddenParents = this.input.parents().addBack().not(":visible"),
              oldProps = [];
          if ($hiddenParents.each(function() {
            var old = {};
            for (var name in props) old[name] = this.style[name], this.style[name] = props[name];
            oldProps.push(old)
          }), this.input_props = [], this.input_props.width = this.input.width(), this.input_props.outerWidth = this.input.outerWidth(), this.input_props.innerWidth = this.input.innerWidth(), this.input_props.height = this.input.height(), this.input_props.innerHeight = this.input.innerHeight(), this.input_props.outerHeight = this.input.outerHeight(), this.input_props.top = this.input.position().top, this.input_props.left = this.input.position().left, this.input_props.margin = {
            top: parseInt(this.input.css("marginTop"), 10),
            right: parseInt(this.input.css("marginRight"), 10),
            bottom: parseInt(this.input.css("marginBottom"), 10),
            left: parseInt(this.input.css("marginLeft"), 10)
          }, this.input_props.padding = {
            top: parseInt(this.input.css("paddingTop"), 10),
            right: parseInt(this.input.css("paddingRight"), 10),
            bottom: parseInt(this.input.css("paddingBottom"), 10),
            left: parseInt(this.input.css("paddingLeft"), 10)
          }, "Microsoft Internet Explorer" == navigator.appName) {
            var re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            if (null != re.exec(navigator.userAgent)) var iev = parseFloat(RegExp.$1);
            iev >= 9 && this.input.css({
              height: this.input_props.height
            })
          }
          if ($hiddenParents.each(function(i) {
            var old = oldProps[i];
            for (var name in props) this.style[name] = old[name]
          }), this.config.comboBox) {
            $("<button></button>").attr({
              tabIndex: -1,
              title: "Show All Items"
            }).insertAfter(this.input).text(FC.json.config.template_config.foxycomplete.combobox_open).addClass(this.config.comboBoxClass + " " + this.config.comboBoxClass + "-closed").css({
              height: this.input_props.outerHeight,
              width: this.input_props.outerHeight,
              top: this.input_props.top + this.input_props.margin.top,
              left: this.input_props.left + this.input_props.outerWidth - this.input_props.outerHeight,
              zIndex: 9
            }).on("click.awesomecomplete", $.proxy(this.combobox_click_show, this));
            var input_width = this.input_props.width - this.input_props.outerHeight;
            "border-box" == this.input.css("box-sizing") && (input_width = this.input_props.outerWidth), this.input.addClass("has-" + this.config.comboBoxClass).css({
              width: input_width,
              paddingRight: this.input_props.outerHeight + this.input_props.padding.right
            })
          }
        },
        readonly: function() {
          this.input.addClass("fc-readonly").attr("readonly", "readonly"), this.destroy()
        },
        destroy: function() {
          this.input.removeAttr("autocomplete").removeClass("awesomecomplete-input").removeData("awesomecomplete").off(".awesomecomplete"), this.list.remove();
          var input_width = this.input_props.width;
          "border-box" == this.input.css("box-sizing") && (input_width = this.input_props.outerWidth), this.config.comboBox && this.input.removeClass("has-" + this.config.comboBoxClass).css({
            width: input_width,
            paddingRight: this.input_props.padding.right
          }).siblings("button." + this.config.comboBoxClass).remove()
        },
        input_keyup: function(e) {
          return this.suppressKey ? void(this.suppressKey = !1) : void(e.which > 36 && e.which < 41 || 16 == e.which || this.config.searchOnFocus && 9 == e.which || (this.config.typingDelay > 0 ? (clearTimeout(this.typingDelayPointer), this.typingDelayPointer = setTimeout(function() {
            this.processInput()
          }, this.config.typingDelay)) : this.processInput()))
        },
        input_keydown: function(e) {
          var $active = this.list.children("li." + this.config.activeItemClass);
          switch (e.which) {
            case 9:
            case 13:
            case 32:
              if (32 == e.which && !this.usingArrows) break;
              if (13 == e.which && !this.list.is(":visible")) {
                e.preventDefault(), this.processInput(""), this.suppressKey = !0;
                break
              }
              0 !== $active.length && this.list.is(":visible") && (this.input.val() !== $active.data("awesomecomplete-value") || 9 !== e.which) && (e.preventDefault(), this.input.val($active.data("awesomecomplete-value")), this.onComplete($active.data("awesomecomplete-dataItem"))), this.hideFunction(), this.suppressKey = !0;
              break;
            case 38:
              e.preventDefault(), this.list.is(":visible") || this.showFunction(), this.usingArrows = !0, 0 === $active.length || this.list.children("li:first-child").hasClass(this.config.activeItemClass) ? this.highlightFunction(this.list.children("li:last-child"), null) : this.highlightFunction($active.prev(), $active);
              break;
            case 40:
              e.preventDefault(), this.list.is(":visible") || this.showFunction(), this.usingArrows = !0, 0 === $active.length || this.list.children("li:last-child").hasClass(this.config.activeItemClass) ? this.highlightFunction(this.list.children("li:first-child"), null) : $active.is(":not(:last-child)") && this.highlightFunction($active.next(), $active);
              break;
            case 27:
              this.hideFunction(), this.suppressKey = !0
          }
        },
        input_keypress: function(e) {
          this.list.children("li." + this.config.activeItemClass);
          13 == e.which && this.list.children("li." + this.config.activeItemClass).length > 0 && e.preventDefault()
        },
        input_mousedownoutside: function() {
          this.mouseDown = !0
        },
        input_mouseupoutside: function(e) {
          this.mouseDown = !1, this.blurWait && this.config.comboBox && $(e.target).hasClass(this.config.comboBoxClass) && $(e.target).siblings("input.awesomecomplete-input").is(this.input) ? this.blurWait = !1 : this.blurWait && (this.blurWait = !1, this.input_blur())
        },
        input_blur: function() {
          if (this.mouseDown) this.blurWait = !0;
          else {
            var $active = this.list.children("li[data-awesomecomplete-value='" + this.input.attr("data-fc-default-value") + "']");
            this.list.is(":visible") && 0 !== $active.length && ((this.config.allowBlankValue && "" !== this.input.val() || !this.config.allowBlankValue) && this.input.val($active.data("awesomecomplete-value")), this.onComplete($active.data("awesomecomplete-dataItem"))), this.hideFunction()
          }
        },
        input_focus: function() {
          this.config.searchOnFocus && !this.list.is(":visible") ? this.config.allowBlankSearch && this.comboBoxEvent ? (this.processInput(""), this.comboBoxEvent = !1) : this.processInput("") : this.list.children(":not(." + this.config.noResultsClass + ")").length > 0 && this.showFunction()
        },
        list_item_click: function(e) {
          var $listItem = "LI" == e.target.nodeName ? $(e.target) : $(e.target).parents("li");
          this.input.val($listItem.data("awesomecomplete-value")), this.onComplete($listItem.data("awesomecomplete-dataItem"))
        },
        list_item_mouseover: function(e) {
          var $listItem = "LI" == e.target.nodeName ? $(e.target) : $(e.target).parents("li");
          $listItem.addClass(this.config.activeItemClass).siblings().removeClass(this.config.activeItemClass)
        },
        combobox_click_show: function(e) {
          e.preventDefault(), this.list.is(":visible") && this.hideFunction(), this.mouseDown = !0, this.comboBoxEvent = !0, this.input.select()
        },
        combobox_click_hide: function(e) {
          e.preventDefault(), this.mouseDown = !0, this.comboBoxEvent = !1, this.hideFunction()
        },
        onDataProxy: function(term) {
          return function(data) {
            this.processData(data, term)
          }
        },
        processInput: function(term) {
          var term = void 0 != term ? term : this.input.val();
          "function" == typeof this.dataMethod ? this.dataMethod(term, this.onDataProxy(term)) : this.processData(this.staticData, term)
        },
        processData: function(data, term) {
          if (this.list.empty().hide(), "" !== term) {
            for (var results = [], item = 0; item < data.length; item++) {
              var dataItem = jQuery.extend({}, data[item]),
                  matchCount = 0,
                  maxFieldMatches = 0,
                  topMatch = null,
                  matchedTerms = [];
              for (var field in dataItem)
                if ("function" != typeof dataItem[field] && "object" != typeof dataItem[field]) {
                  for (var skippedField = !1, j = 0; j < this.config.dontMatch.length; j++) field == this.config.dontMatch[j] && (skippedField = !0);
                  if (!skippedField) {
                    var dataString = dataItem[field].toString(),
                        terms = [term];
                    this.config.splitTerm && (terms = term.split(this.config.wordDelimiter));
                    for (var j = 0; j < terms.length; j++)
                      if ("" !== terms[j]) {
                        terms[j] = terms[j].replace(/([\\*+?|{}()^$.#])/g, "\\$1");
                        var regex = new RegExp("(" + terms[j] + ")", config.ignoreCase ? "ig" : "g"),
                            matches = [];
                        (matches = dataString.match(regex)) && (matchCount += matches.length, field != this.config.nameField && matches.length > maxFieldMatches && (maxFieldMatches = matches.length, topMatch = field, matchedTerms[j] = !0))
                      } if (this.config.highlightMatches) {
                      var regex = new RegExp("(" + terms.join("|") + ")", config.ignoreCase ? "ig" : "g");
                      dataItem[field] = dataString.replace(regex, '<span class="' + this.config.highlightClass + '">$1</span>')
                    }
                  }
                } for (var matchedTermCount = 0, j = 0; j < matchedTerms.length; j++) matchedTerms[j] === !0 && matchedTermCount++;
              matchCount > 0 && results.push({
                dataItem: dataItem,
                originalDataItem: data[item],
                matchCount: matchCount,
                topMatch: topMatch,
                matchedTermCount: matchedTermCount
              })
            }
            results.sort(function(a, b) {
              return this.sortFunction(a, b, term)
            }), results = results.slice(0, this.config.resultLimit);
            for (var i in results) $("<li>" + this.renderFunction(results[i].dataItem, results[i].topMatch, results[i].originalDataItem) + "</li>").data("awesomecomplete-dataItem", results[i].originalDataItem).data("awesomecomplete-value", this.valueFunction(results[i].originalDataItem)).appendTo(this.list).on("click", $.proxy(this.list_item_click, this)).on("mouseover", $.proxy(this.list_item_mouseover, this));
            void 0 !== this.config.noResultsMessage && 0 == results.length && this.list.append($('<li class="' + this.config.noResultsClass + '">' + this.config.noResultsMessage + "</li>")), (results.length > 0 || void 0 !== this.config.noResultsMessage) && this.showFunction()
          }
        },
        renderFunction: function(dataItem, topMatch) {
          return topMatch === this.config.nameField || null === topMatch ? '<p class="title">' + dataItem[this.config.nameField] + "</p>" : '<p class="title">' + dataItem[this.config.nameField] + '</p><p class="matchRow"><span class="matchedField">' + topMatch + "</span>: " + dataItem[topMatch] + "</p>"
        },
        valueFunction: function(dataItem) {
          return dataItem[this.config.nameField]
        },
        onComplete: function() {},
        showFunction: function() {
          this.list.show()
        },
        hideFunction: function() {
          this.list.hide()
        },
        sortFunction: function(a, b) {
          return a.matchedTermCount == b.matchedTermCount ? b.matchCount - a.matchCount : b.matchedTermCount - a.matchedTermCount
        },
        highlightFunction: function($highlightItem) {
          $highlightItem.addClass(this.config.activeItemClass).siblings().removeClass(this.config.activeItemClass)
        }
      }), $.fn.awesomecomplete = function(call) {
        return this.each(function() {
          var el = $(this);
          if ("string" == typeof call && el.data("awesomecomplete")) el.data("awesomecomplete")[call]();
          else if (!el.data("awesomecomplete")) {
            var ac = new AwesomeComplete(el);
            el.data("awesomecomplete", ac)
          }
        })
      }
    }(jQuery),
    function($) {
      var defaults = {
            sort: !1,
            "sort-attr": "data-priority",
            "sort-desc": !1,
            autoselect: !0,
            "allow-blank-value": !1,
            "alternative-spellings": !0,
            "alternative-spellings-attr": "data-alternative-spellings",
            "remove-valueless-options": !0,
            "copy-attributes-to-text-field": !0,
            "autocomplete-plugin": "jquery_ui",
            "text-field-id": "",
            "relevancy-sorting": !0,
            "relevancy-sorting-partial-match-value": 1,
            "relevancy-sorting-strict-match-value": 5,
            "relevancy-sorting-exact-match-value": 5,
            "relevancy-sorting-label-match-value": 3,
            "relevancy-sorting-code-match-value": 5,
            "relevancy-sorting-booster-attr": "data-relevancy-booster",
            handle_invalid_input: function(context) {
              context.$text_field.val(context.$select_field.find("option:selected:first").text())
            },
            handle_select_field: function($select_field) {
              return $select_field.hide()
            },
            insert_text_field: function(context) {
              var $text_field = $("<input></input>");
              if (context.settings["copy-attributes-to-text-field"]) {
                for (var attrs = {}, raw_attrs = context.$select_field[0].attributes, i = 0; i < raw_attrs.length; i++) {
                  {
                    var key = raw_attrs[i].nodeName;
                    raw_attrs[i].nodeValue
                  }
                  "name" !== key && "id" !== key && (attrs[key] = raw_attrs[i].nodeValue)
                }
                "" != context.settings["text-field-id"] && (attrs.id = context.settings["text-field-id"]), "" != context.settings["text-field-name"] && (attrs.name = context.settings["text-field-name"]), $text_field.attr(attrs)
              }
              return $text_field.on("blur", function() {
                var valid_values = context.$select_field.find("option").map(function(i, option) {
                  return $(option).text()
                });
                $.inArray($text_field.val(), valid_values) < 0 && "function" == typeof context.settings.handle_invalid_input && context.settings.handle_invalid_input(context)
              }), context.settings.autoselect && $text_field.on("click", function() {
                this.select()
              }), $text_field.val(context.$select_field.find("option:selected:first").text()).insertAfter(context.$select_field)
            },
            extract_options: function($select_field, settings) {
              var options = [],
                  $options = $select_field.find("option"),
                  number_of_options = $options.length;
              return $options.each(function() {
                var $option = $(this),
                    option = {
                      "real-value": $option.attr("value"),
                      label: $option.text()
                    };
                if (settings["remove-valueless-options"] && "" === option["real-value"]);
                else {
                  option.matches = option.label;
                  var alternative_spellings = $option.attr(settings["alternative-spellings-attr"]);
                  if (alternative_spellings && (option.matches += " " + alternative_spellings), settings.sort) {
                    var weight = parseInt($option.attr(settings["sort-attr"]), 10);
                    option.weight = weight ? weight : number_of_options
                  }
                  if (settings["relevancy-sorting"]) {
                    option["relevancy-score"] = 0, option["relevancy-score-booster"] = 1;
                    var boost_by = parseFloat($option.attr(settings["relevancy-sorting-booster-attr"]));
                    boost_by && (option["relevancy-score-booster"] = boost_by)
                  }
                  options.push(option)
                }
              }), settings.sort && options.sort(settings["sort-desc"] ? function(a, b) {
                return b.weight - a.weight
              } : function(a, b) {
                return a.weight - b.weight
              }), options
            }
          },
          public_methods = {
            init: function(customizations) {
              var settings = $.extend({}, defaults, customizations);
              return this.each(function() {
                var $select_field = $(this),
                    context = {
                      $select_field: $select_field,
                      options: settings.extract_options($select_field, settings),
                      settings: settings
                    };
                context.$text_field = settings.insert_text_field(context), settings.handle_select_field($select_field), context.options.length > 0 ? ("string" == typeof settings["autocomplete-plugin"] ? adapters[settings["autocomplete-plugin"]](context) : settings["autocomplete-plugin"](context), context.state = "active") : context.state = "disabled", $(this).data("context", context)
              })
            },
            is_active: function() {
              var context = $(this).data("context");
              return context && ("active" == context.state || "readonly" == context.state)
            },
            get_status: function() {
              var context = $(this).data("context");
              return context && context.state || "inactive"
            },
            update_options: function() {
              var context = $(this).data("context");
              context.options = context.settings.extract_options(context.$select_field, context.settings), $(this).data("context", context), "active" != context.state && public_methods.enable.apply(this), context.$text_field.val(context.$select_field.find("option:selected:first").text())
            },
            enable: function() {
              var context = $(this).data("context");
              "string" == typeof context.settings["autocomplete-plugin"] ? adapters[context.settings["autocomplete-plugin"]](context) : context.settings["autocomplete-plugin"](context), context.state = "active", $(this).data("context", context)
            },
            readonly: function() {
              var context = $(this).data("context");
              context.$text_field.foxycomplete("readonly"), context.state = "readonly", $(this).data("context", context)
            },
            disable: function() {
              var context = $(this).data("context");
              context.$text_field.foxycomplete("destroy"), context.state = "disabled", $(this).data("context", context)
            },
            destroy: function() {
              var context = $(this).data("context");
              context.$select_field.show(), context.$text_field.foxycomplete("destroy").remove(), $(this).removeData("context")
            }
          },
          adapters = {
            awesomecomplete: function(context) {
              var filter_options = function(term) {
                    for (var split_term = term.split(" "), term_regex = new RegExp("(" + split_term.join("|") + ")", "ig"), matchers = [], i = 0; i < split_term.length; i++)
                      if (split_term[i].length > 0) {
                        var matcher = {};
                        matcher.partial = new RegExp(split_term[i].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), context.settings["relevancy-sorting"] && (matcher.strict = new RegExp("^" + split_term[i].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i")), matchers.push(matcher)
                      } var matchers_exact = new RegExp("^" + term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
                    return $.grep(context.options, function(option) {
                      var match_found = !1,
                          partial_matches = 0;
                      if (context.settings["relevancy-sorting"]) {
                        option.matches.split(" ")
                      }
                      for (var i = 0; i < matchers.length; i++) matchers[i].partial.test(option.matches) && (match_found = !0);
                      if (match_found || "" == term) {
                        for (var spellings = [], as = 0; as < option["alternative-spellings"].length; as++) {
                          var spelling_item = {};
                          spelling_item.id = as;
                          var alternative_spelling = option["alternative-spellings"][as].spelling;
                          alternative_spelling_split = alternative_spelling.split(" "), spelling_item.partial_matches = 0;
                          for (var i = 0; i < matchers.length; i++)
                            if (matchers[i].partial.test(alternative_spelling) && spelling_item.partial_matches++, context.settings["relevancy-sorting"])
                              for (var q = 0; q < alternative_spelling_split.length; q++)
                                if (matchers[i].strict.test(alternative_spelling_split[q])) {
                                  spelling_item.strict_match = !0;
                                  break
                                } context.settings["relevancy-sorting"] && matchers_exact.test(alternative_spelling) && (spelling_item.exact_match = !0);
                          var option_score = 0;
                          context.settings["relevancy-sorting"] && (option_score += spelling_item.partial_matches * context.settings["relevancy-sorting-partial-match-value"], spelling_item.strict_match && (option_score += context.settings["relevancy-sorting-strict-match-value"]), spelling_item.exact_match && (option_score += context.settings["relevancy-sorting-exact-match-value"], term.toLowerCase() == option["real-value"].toLowerCase() && (option_score += context.settings["relevancy-sorting-code-match-value"])), spelling_item["relevancy-score"] = option_score * option["relevancy-score-booster"], spelling_item["display-score"] = alternative_spelling == option.label ? option_score + context.settings["relevancy-sorting-label-match-value"] : option_score), option["alternative-spellings"][as]["spelling-matched"] = "" == term ? alternative_spelling : alternative_spelling.replace(term_regex, '<span class="match">$1</span>'), spellings.push(spelling_item)
                        }
                        "" != term && spellings.sort(function(a, b) {
                          return b["display-score"] - a["display-score"]
                        }), context.settings["relevancy-sorting"] && (option["relevancy-score"] = spellings[0]["relevancy-score"]);
                        var topMatchID = spellings[0].id;
                        option.topMatch = 0 == topMatchID ? null : option["alternative-spellings"][topMatchID]["spelling-matched"], option.matchCount = spellings[0].partial_matches, option["label-matched"] = option["alternative-spellings"][0]["spelling-matched"], partial_matches = spellings[0].partial_matches
                      }
                      return !term || matchers.length === partial_matches
                    })
                  },
                  FoxyComplete = AwesomeComplete.subClass({
                    init: function(el, options) {
                      var defaults = {
                        activateFirst: !0,
                        allowBlankSearch: !0,
                        allowBlankValue: context.settings["allow-blank-value"],
                        comboBox: FC.json.config.template_config.foxycomplete.show_combobox,
                        comboBoxClass: "fc-foxycomplete-combobox",
                        dontMatch: ["real-value", "weight", "relevancy-score", "relevancy-score-booster", "matches"],
                        nameField: "label",
                        noResultsMessage: "<p>No results</p>",
                        noResultsClass: "fc-foxycomplete-no-results",
                        resultLimit: 0,
                        searchOnFocus: !0,
                        suggestionListClass: "fc-foxycomplete-list"
                      };
                      if (options && $.extend(defaults, options), this._super(el, defaults), FC.json.config.template_config.foxycomplete.show_flags && -1 != this.input.attr("data-fc-id").indexOf("country")) {
                        var offsetLeft = this.input_props.left + this.input_props.margin.left + this.input_props.padding.left;
                        0 == jQuery("[data-fc-id='" + this.input.attr("data-fc-id").replace("_name", "_flag") + "']").length ? ($("<div></div>").attr({
                          "data-fc-id": this.input.attr("data-fc-id").replace("_name", "_flag")
                        }).css({
                          height: this.input_props.outerHeight,
                          top: this.input_props.top + this.input_props.margin.top,
                          left: offsetLeft
                        }).addClass("fc-foxycomplete-flag").insertAfter(this.input), this.input.css({
                          paddingLeft: 2 * this.input_props.padding.left + 16
                        })) : jQuery("[data-fc-id='" + this.input.attr("data-fc-id").replace("_name", "_flag") + "']").css({
                          left: offsetLeft
                        })
                      }
                    },
                    readonly: function() {
                      FC.json.config.template_config.foxycomplete.show_flags && -1 != this.input.attr("data-fc-id").indexOf("country"), this._super()
                    },
                    destroy: function() {
                      this._super(), this.input.removeData("foxycomplete"), FC.json.config.template_config.foxycomplete.show_flags && "readonly" != this.input.attr("readonly") && this.input.css({
                        paddingLeft: this.input_props.padding.left
                      }).siblings("div.fc-foxycomplete-flag").remove()
                    },
                    dataMethod: function(term) {
                      var filtered_options = filter_options(term);
                      context.settings["relevancy-sorting"] && "" != term && (filtered_options = filtered_options.sort(function(a, b) {
                        return b["relevancy-score"] - a["relevancy-score"]
                      })), this.processData(filtered_options, term)
                    },
                    processData: function(data, term) {
                      var results = data;
                      if (this.list.empty(), this.config.allowBlankSearch || "" !== term) {
                        this.config.resultLimit > 0 && (results = results.slice(0, this.config.resultLimit));
                        for (var i in results) $("<li>" + this.renderFunction(results[i], results[i].topMatch, results[i]) + "</li>").data("awesomecomplete-dataItem", results[i]).data("awesomecomplete-value", this.valueFunction(results[i])).attr("data-awesomecomplete-value", results[i]["real-value"]).appendTo(this.list).on("click", $.proxy(this.list_item_click, this)).on("mouseover", $.proxy(this.list_item_mouseover, this));
                        if (void 0 !== this.config.noResultsMessage && 0 == results.length && this.list.append($('<li class="' + this.config.noResultsClass + '">' + this.config.noResultsMessage + "</li>")), results.length > 0) {
                          this.showFunction();
                          var currVal = this.input.val(),
                              currValItem = this.list.children("li").filter(function() {
                                return $(this).text() == currVal
                              });
                          currValItem.length > 0 ? this.highlightFunction($(currValItem), null, !0) : this.config.activateFirst && this.highlightFunction(this.list.children("li:first-child"), null)
                        }
                      }
                    },
                    showFunction: function() {
                      this.usingArrows = !1, this.list.width(this.list_parent.outerWidth() - (parseInt(this.list.css("border-left-width"), 10) + parseInt(this.list.css("border-right-width"), 10))).css({
                        position: "absolute",
                        left: this.list_parent.position().left + parseInt(this.list_parent.css("margin-left"), 10),
                        top: this.list_parent.position().top + this.list_parent.outerHeight(),
                        zIndex: 10
                      }).show(), this.config.comboBox && ($combobox = this.list_parent.siblings("button." + this.config.comboBoxClass + ":first").first(), $combobox.text(FC.json.config.template_config.foxycomplete.combobox_close).addClass("autocomplete-active " + this.config.comboBoxClass + "-open").removeClass(this.config.comboBoxClass + "-closed").off("click.awesomecomplete").on("click.awesomecomplete", $.proxy(this.combobox_click_hide, this)))
                    },
                    hideFunction: function() {
                      this.config.comboBox && ($combobox = this.list_parent.siblings("button." + this.config.comboBoxClass + ":first"), $combobox.text(FC.json.config.template_config.foxycomplete.combobox_open).addClass(this.config.comboBoxClass + "-closed").removeClass("autocomplete-active " + this.config.comboBoxClass + "-open").off("click.awesomecomplete").on("click.awesomecomplete", $.proxy(this.combobox_click_show, this))), this.usingArrows = !1, this.list.hide()
                    },
                    renderFunction: function(dataItem, topMatch) {
                      return topMatch === dataItem[this.config.nameField] || null === topMatch ? '<p class="title">' + dataItem[this.config.nameField + "-matched"] + "</p>" : '<p class="title">' + dataItem[this.config.nameField + "-matched"] + '</p><p class="matchRow">' + topMatch + "</p>"
                    },
                    highlightFunction: function($highlightItem, $activeItem, bringToCenter) {
                      var bringToCenter = bringToCenter || !1;
                      $highlightItem.addClass(this.config.activeItemClass).siblings().removeClass(this.config.activeItemClass);
                      var listHeight = parseInt(this.list.css("max-height")),
                          visibleTop = this.list.scrollTop(),
                          visibleBottom = listHeight + visibleTop,
                          itemHeight = $highlightItem.outerHeight(),
                          itemTop = $highlightItem.position().top + visibleTop,
                          itemBottom = itemTop + itemHeight,
                          itemMiddle = itemTop + itemHeight / 2;
                      bringToCenter ? this.list.scrollTop(itemMiddle - listHeight / 2) : itemBottom >= visibleBottom ? this.list.scrollTop(itemBottom - listHeight > 0 ? itemBottom - listHeight : 0) : visibleTop > itemTop && this.list.scrollTop(itemTop)
                    },
                    onComplete: function(dataItem) {
                      if (dataItem) context.$select_field.val() !== dataItem["real-value"] && (context.$select_field.val(dataItem["real-value"]), "" !== context.$text_field.val() && context.$select_field.trigger("change"));
                      else {
                        for (var option_name = context.$text_field.val().toLowerCase(), matching_option = {
                          "real-value": !1
                        }, i = 0; i < context.options.length; i++)
                          if (option_name === context.options[i].label.toLowerCase()) {
                            matching_option = context.options[i];
                            break
                          } context.$select_field.val() !== matching_option["real-value"] && (context.$select_field.val(matching_option["real-value"] || ""), context.$select_field.trigger("change")), matching_option["real-value"] && context.$text_field.val(matching_option.label)
                      }
                      "" != context.$select_field.val() && (context.$select_field.attr("data-fc-default-value", context.$select_field.val()), context.$text_field.attr("data-fc-default-value", context.$select_field.val())), "function" != typeof context.settings.handle_invalid_input || "" !== context.$select_field.val() && "" !== context.$text_field.val() || context.settings.handle_invalid_input(context)
                    }
                  });
              $.fn.foxycomplete = function(call) {
                return this.each(function() {
                  var el = $(this);
                  if ("string" == typeof call && el.data("foxycomplete")) el.data("foxycomplete")[call]();
                  else if ("undefined" == typeof call && !el.data("foxycomplete")) {
                    var ac = new FoxyComplete(el);
                    el.data("foxycomplete", ac)
                  }
                })
              }, context.$text_field.foxycomplete()
            }
          };
      $.fn.selectToAutocomplete = function(method) {
        return public_methods[method] ? public_methods[method].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof method && method ? void $.error("Method " + method + " does not exist on jQuery.fn.selectToAutocomplete") : public_methods.init.apply(this, arguments)
      }
    }(jQuery),
    function(Twig) {
      Twig.exports && Twig.exports.VERSION && (window.twig = Twig.exports.twig, window.Twig = Twig.exports)
    }(Twig),
    function(FC, $) {
      var api = {};
      FC.api = api, api.request = function(action, params, ajax_config) {
        var url = "https://" + FC.settings.storedomain + "/v/2.0.0/api_json.php";
        ajax_config = ajax_config || {}, ajax_config.url = ajax_config.url || url, ajax_config.dataType = ajax_config.dataType || "jsonp", ajax_config.method = ajax_config.method || "GET", params.ThisAction = action;
        var session_id = FC.settings.session_id || FC.json.session_id;
        return FC.settings.session_name && session_id && (params[FC.settings.session_name] = session_id), FC.settings.store_id && (params.store_id = FC.settings.store_id), ajax_config.data = params, $.Deferred(function(deferred) {
          $.ajax(ajax_config).done(function(response) {
            response.ok ? deferred.resolve(response) : deferred.reject(Error(response.details || "Unknown error"))
          }).fail(function(jqXHR, textStatus, errorThrown) {
            deferred.reject(Error(errorThrown))
          })
        }).promise()
      }, api.saveContactInfo = function() {
        var request_data = {
          city: FC.json.shipping_address.city,
          region: FC.json.shipping_address.region,
          postal_code: FC.json.shipping_address.postal_code,
          country: FC.json.shipping_address.country
        };
        return FC.json.billing_address && (request_data.billing_city = FC.json.billing_address.city, request_data.billing_region = FC.json.billing_address.region, request_data.billing_postal_code = FC.json.billing_address.postal_code, request_data.billing_country = FC.json.billing_address.country), api.request("SaveCartContactInfo", request_data)
      }, api.saveShippingServiceInfo = function(address) {
        var request_data = {
          shipping_address_name: address.address_name,
          shipping_service_id: address.shipping_service_id,
          shipping_service_description: address.shipping_service_description,
          total_shipping: address.total_shipping,
          total_future_shipping: address.total_future_shipping
        };
        return api.request("SaveShippingServiceInfo", request_data)
      }, api.getDiscountsData = function() {
        return api.request("GetDiscountsData", {})
      }, api.getShippingOptions = function(address, store_address, custom_fields) {
        var request_data = {
          shipping_address_name: address.address_name,
          shipping_state: address.region,
          shipping_country: address.country,
          shipping_city: address.city,
          shipping_postal_code: address.postal_code,
          shipping_address1: address.address1,
          shipping_address2: address.address2,
          shipping_company: address.company,
          shipping_first_name: address.first_name,
          shipping_last_name: address.last_name,
          shipping_email: FC.json.customer_email,
          customer_id: FC.json.customer_id_encoded
        };
        return "US" === address.country && address.postal_code && (request_data.shipping_postal_code = address.postal_code.trim().substring(0, 5)), address.total_weight_shippable > 0 && (request_data.total_weight_shippable = address.total_weight_shippable), address.hasOwnProperty("dimensions") && !jQuery.isEmptyObject(address.dimensions) && $.extend(request_data, {
          length: address.dimensions.length,
          width: address.dimensions.width,
          height: address.dimensions.height
        }), store_address && $.extend(request_data, {
          store_state: store_address.region,
          store_country: store_address.country,
          store_postal_code: store_address.postal_code
        }), jQuery.isEmptyObject(custom_fields) || $.extend(request_data, {
          custom_fields: JSON.stringify(custom_fields)
        }), api.request("GetShippingCost", request_data)
      }, api.getTaxes = function(address) {
        var request_data = {
          shipping_address_name: address.address_name,
          shipping_state_code: address.region,
          shipping_country_code: address.country,
          shipping_city: address.city,
          shipping_postal_code: address.postal_code,
          shipping_cost: address.total_shipping,
          tax_id: address.tax_id
        };
        return "US" === address.country && address.postal_code && (request_data.shipping_postal_code = address.postal_code.trim().substring(0, 5)), api.request("GetTaxes", request_data)
      }, api.validateAddress = function(address) {
        var request_data = {
          address1: address.address1,
          address2: address.address2,
          postal_code: address.postal_code,
          city: address.city,
          region: address.region,
          country: address.country
        };
        return api.request("ValidateAddress", request_data)
      }, api.logEntry = function(type, data) {
        try {
          var error_data = data;
          data instanceof Error && (error_data = {
            name: data.name,
            message: data.message
          });
          var request_data = {
            entry: JSON.stringify({
              type: type,
              data: error_data
            })
          };
          return api.request("LogEntry", request_data)
        } catch (e) {
          return FC.util.log("logEntry failed: " + e.message), $.Deferred(function(deferred) {
            deferred.resolve({
              ok: !0
            })
          }).promise()
        }
      }
    }(FC, jQuery),
    function(FC, $, Twig) {
      "use strict";

      function Template(template_id) {
        return Template.templates[template_id] ? Template.templates[template_id] : this instanceof Template ? (this.twig_template_id = template_id, this.output = "", void(Template.templates[template_id] = this)) : new Template(template_id)
      }

      function formatCityOption(city_option) {
        return city_option.region ? $.isNumeric(city_option.region) ? city_option.region_name && city_option.region_name != city_option.city ? city_option.city + ", " + city_option.region_name : city_option.city : city_option.city + ", " + city_option.region : city_option.city
      }

      function extendTwig() {
        Twig.extendFilter("money_format", function(value) {
          var amount = value;
          "string" == typeof amount && (amount = parseFloat(amount));
          var amount_formatted = jQuery.trim(FC.util.money_format(FC.json.config.currency_format, amount));
          return amount_formatted
        }), Twig.extendFilter("pad", function(value, length, string, delimiter) {
          return FC.util.str_pad(value, length, string, delimiter)
        }), Twig.extendFilter("fc_output_data", function(name, value) {
          return "## " + name + ": " + value + " ##"
        }), Twig.extendFunction("selected", function(value1, value2) {
          return value1 == value2 ? 'selected="selected"' : ""
        }), Twig.extendFunction("checked", function(value1, value2) {
          return "undefined" == typeof value2 && (value2 = !0), value1 == value2 ? 'checked="checked"' : ""
        }), Twig.extendFunction("formatCityOption", formatCityOption), Twig.extendFunction("getPostalCodeLabel", function(country) {
          var context = this.context,
              country = context.config.locations[country],
              pc_label = country ? country.pc.lang : "postalcode";
          return context.config.lang["checkout_location_" + pc_label]
        }), Twig.extendFunction("generate_sso_token", $.noop), Twig.extendTest("array", function(value) {
          return Array.isArray(value)
        })
      }
      FC.Template = Template, extendTwig(), Template.templates = {}, Template.prototype.init = function() {
        this.twig_template || (this.twig_template = Twig.twig({
          ref: this.twig_template_id
        }))
      }, Template.prototype.render = function() {
        this.output || (this.init(), FC.util.log("Rendering Twig template", this.twig_template_id), this.output = $.trim(this.twig_template.render(FC.json)));
        var template = this;
        setTimeout(function() {
          template.output = ""
        }, 0)
      }, Template.prototype.clearOutput = function() {
        this.output = ""
      }, Template.prototype.renderBlock = function(selector, block_id) {
        FC.client.event("render.before").trigger({
          selector: selector,
          block_id: block_id
        }), this.render(), this.replaceBlock(selector, block_id)
      }, Template.prototype.replaceBlock = function(selector, block_id) {
        $(selector).replaceWith($(this.output).find(selector)), FC.client.event("render.done").trigger({
          selector: selector,
          block_id: block_id
        })
      }, Template.formatCityOption = formatCityOption
    }(FC, jQuery, Twig),
    function(FC, $) {
      function PostalCode(selector, template, address_prefix) {
        return this instanceof PostalCode ? (this.selector = selector, this.template = template, this.address_prefix = address_prefix, this.bindEventHandlers(), this._fieldsOld = {}, this._fieldsNew = {}, void(this._triggerTimeout = 0)) : new PostalCode(selector, template, address_prefix)
      }
      FC.PostalCode = PostalCode, PostalCode.prototype.bindEventHandlers = function() {
        $(this.selector).on("change.fc.fc-postal-code", this.getCityOptionsSelector(), $.proxy(this.cityOptionsChangeHandler, this)), $(this.selector).on("change.fc.fc-postal-code", this.getCountryCodeSelector(), $.proxy(this.countryChangeHandler, this)), $(this.selector).on("change.fc.fc-postal-code", this.getRegionSelector(), $.proxy(this.regionChangeHandler, this)), $(this.selector).on("change.fc.fc-postal-code", this.getCitySelector(), $.proxy(this.cityChangeHandler, this)), $(this.selector).on("change.fc.fc-postal-code", this.getPostalCodeSelector(), $.proxy(this.postalCodeChangeHandler, this)), $(this.selector).on("input.fc.fc-postal-code", this.getPostalCodeSelector(), $.proxy(this.postalCodeInputHandler, this)), $(this.selector).on("focusout.fc", this.getPostalCodeSelector(), $.proxy(this.checkLocationAgainstBlacklist, this)), $(this.selector).on("click.fc.fc-postal-code", this.getSubmitPostalCodeSelector(), $.proxy(this.submitPostalCodeClickHandler, this))
      }, PostalCode.prototype.getAddress = function() {
        if ("shipping" === this.address_prefix) return FC.json.shipping_address;
        if ("billing" === this.address_prefix) return FC.json.billing_address;
        var match = this.address_prefix.match(/shipto_(\d+)/);
        if (match) return FC.json.multiship_data[match[1]];
        throw Error("Wrong address type")
      }, PostalCode.prototype.postalCodeInputHandler = function(event) {
        if (this.isLookupActive()) {
          var $postal_code = $(event.target),
              postal_code = $(event.target).val(),
              country_code = this.getCountryCode();
          this.setPostalCode(postal_code), (this.getCityOptions() || []).length > 0 && (this.setCityOptions([]), this.renderActions()), this._updateChangedFields(this.wrapFieldName("postal_code"), postal_code);
          var locations = FC.json.config.locations[country_code];
          locations && locations.pc.search && this.checkInputValidity(country_code, postal_code) && (FC.util.removeError($(this.getPostalCodeSelector())[0].name), $postal_code.trigger("blur"), this.updateCityOptions())
        }
      }, PostalCode.prototype.submitPostalCodeClickHandler = function() {
        var country_code = this.getCountryCode(),
            postal_code = $(this.getPostalCodeSelector()).val();
        this.checkInputValidity(country_code, postal_code) ? (FC.util.removeError($(this.getPostalCodeSelector())[0].name), setTimeout($.proxy(function() {
          this.updateCityOptions()
        }, this), 0)) : (element = $(this.getPostalCodeSelector()), FC.util.addError(element[0].name, ""), this.render())
      }, PostalCode.prototype.cityOptionsChangeHandler = function(event) {
        var $option = $(event.target).find(":selected"),
            city = $option.data("city") || "",
            region = $option.data("region") || "",
            value = $option.val();
        this.setCityOptionSelected(value), "" === value ? (this.clearCityInputs(), this.showCityInputs()) : (this.hideCityInputs(), this.setCity(city), this.setRegion(region)), this._triggerUpdateEvent(), this.render(), "" === value && $('[name="' + this.wrapFieldName("city") + '"]').trigger("focus")
      }, PostalCode.prototype.countryChangeHandler = function(event) {
        var country_code = $(event.target).val();
        this.setCountryCode(country_code), this.clearErrors(), this.setCityOptions([]), this.clearCityInputs(), this.hideCityInputs(), this.setPostalCode(""), this.render(), this.setFocusToPostalCodeOrAddress1(), this._updateChangedFields(this.wrapFieldName("country"), country_code), this._triggerUpdateEvent()
      }, PostalCode.prototype.regionChangeHandler = function(event) {
        this.setRegion($(event.target).val()), "SELECT" == event.target.nodeName && this.setRegionName($(event.target).find(":selected").text()), this._triggerUpdateEvent()
      }, PostalCode.prototype.cityChangeHandler = function(event) {
        this.setCity($(event.target).val()), this._triggerUpdateEvent()
      }, PostalCode.prototype.postalCodeChangeHandler = function(event) {
        this.isLookupActive() || (this.setPostalCode($(event.target).val()), this._triggerUpdateEvent())
      }, PostalCode.prototype.checkInputValidity = function(country_code, postal_code) {
        var locations = FC.json.config.locations[country_code],
            pc_regex = locations.pc.regex;
        return pc_regex ? postal_code.toUpperCase().trim().match(pc_regex) ? !0 : !1 : !0
      }, PostalCode.prototype.wrapFieldName = function(fieldName) {
        return this.address_prefix + "_" + fieldName
      }, PostalCode.prototype.showCityInputs = function() {
        FC.json["show_" + this.wrapFieldName("city_inputs")] = !0
      }, PostalCode.prototype.hideCityInputs = function() {
        FC.json["show_" + this.wrapFieldName("city_inputs")] = !1, FC.util.removeError("shipping_city")
      }, PostalCode.prototype.recoverPostalCodeElement = function($postal_code) {
        setTimeout($.proxy(function() {
          $(this.getPostalCodeSelector()).replaceWith($postal_code), $postal_code.trigger("focus")
        }, this), 0)
      }, PostalCode.prototype.setFocusToPostalCodeOrAddress1 = function() {
        $('[name="' + this.wrapFieldName("postal_code") + '"]').add('[name="' + this.wrapFieldName("city") + '"]').add('[name="' + this.wrapFieldName("region") + '"]').filter(":first").trigger("focus")
      }, PostalCode.prototype.clearCityInputs = function() {
        this.setCity(""), this.setRegion("")
      }, PostalCode.prototype.setCityOptions = function(city_options) {
        if (this.getAddress().city_options = city_options, city_options.length > 0) {
          var city_option = city_options[0];
          this.setCityOptionSelected(FC.Template.formatCityOption(city_option)), this.setCity(city_option.city), this.setRegion(city_option.region), this.setRegionName(city_option.region_name)
        } else this.setCityOptionSelected(""), this.setCity(""), this.setRegion(""), this.setRegionName("")
      }, PostalCode.prototype.getCityOptions = function() {
        return this.getAddress().city_options
      }, PostalCode.prototype.setCityOptionSelected = function(city_option) {
        this.getAddress().city_option_selected = city_option, this.getAddress().city_and_region = city_option
      }, PostalCode.prototype.getCityOptionSelected = function() {
        return this.getAddress().city_option_selected
      }, PostalCode.prototype.setPostalCode = function(postal_code) {
        this.getAddress().postal_code = postal_code, this._updateChangedFields(this.wrapFieldName("postal_code"), postal_code)
      }, PostalCode.prototype.getPostalCode = function() {
        return this.getAddress().postal_code
      }, PostalCode.prototype.setCountryCode = function(country_code) {
        this.getAddress().country = country_code, this._updateChangedFields(this.wrapFieldName("country"), country_code)
      }, PostalCode.prototype.getCountryCode = function() {
        return this.getAddress().country
      }, PostalCode.prototype.setCity = function(city) {
        this.getAddress().city = city, this._updateChangedFields(this.wrapFieldName("city"), city)
      }, PostalCode.prototype.getCity = function() {
        return this.getAddress().city
      }, PostalCode.prototype.setRegion = function(region) {
        this.getAddress().region = region, this._updateChangedFields(this.wrapFieldName("region"), region)
      }, PostalCode.prototype.getRegion = function() {
        return this.getAddress().region
      }, PostalCode.prototype.setRegionName = function(region_name) {
        this.getAddress().region_name = region_name, this._updateChangedFields(this.wrapFieldName("region_name"), region_name)
      }, PostalCode.prototype.updateCityOptions = function(callback) {
        var that = this;
        this.isLookupActive() && (FC.json[this.wrapFieldName("postal_code_in_progress")] = !0, this.hideCityInputs(), this.render(), FC.api.request("GetAddressByPostalCode", {
          postal_code: this.getAddress().postal_code,
          country: this.getAddress().country,
          address_prefix: this.address_prefix
        }).done(function(response) {
          that.setCityOptions(response.data), that.checkLocationAgainstBlacklist()
        }).fail(function() {
          that.setCityOptions([]), that.showCityInputs()
        }).always(function() {
          FC.json[that.wrapFieldName("postal_code_in_progress")] = void 0, that.render(), that._triggerUpdateEvent(this), that.setFocusToPostalCodeOrAddress1(), callback && callback()
        }))
      }, PostalCode.prototype.clearErrors = function() {
        var fields = [this.wrapFieldName("city"), this.wrapFieldName("region"), this.wrapFieldName("postal_code")];
        fields.forEach(function(field_name) {
          FC.util.removeError(field_name)
        })
      }, PostalCode.prototype.checkLocationAgainstBlacklist = function() {
        var address_type = "billing" == this.address_prefix ? "billing" : "shipping",
            locations_blacklist = FC.json.config["locations_" + address_type],
            region_is_valid = !0;
        "undefined" != typeof locations_blacklist[this.getCountryCode()] && ("string" == typeof locations_blacklist[this.getCountryCode()] && "*" == locations_blacklist[this.getCountryCode()] ? region_is_valid = !1 : -1 != jQuery.inArray(this.getRegion(), locations_blacklist[this.getCountryCode()]) && (region_is_valid = !1)), region_is_valid || (element = $(this.getPostalCodeSelector()), FC.util.addError(element[0].name, "invalid"), this.setCityOptions([]), FC.api.request("ClearContactInfo", {
          store_id: FC.json.store_id,
          address_prefix: address_type
        }), "shipping" == address_type && (FC.json.shipping_address.shipping_results = []))
      }, PostalCode.prototype.getSubmitPostalCodeSelector = function() {
        return '[data-fc-id="submit-' + this.address_prefix + '-postal-code"]'
      }, PostalCode.prototype.getPostalCodeSelector = function() {
        return '[name="' + this.wrapFieldName("postal_code") + '"]'
      }, PostalCode.prototype.getCityOptionsSelector = function() {
        return '[data-fc-id="' + this.wrapFieldName("city_options") + '"]'
      }, PostalCode.prototype.getCountryCodeSelector = function() {
        return '[name="' + this.wrapFieldName("country") + '"]'
      }, PostalCode.prototype.getRegionSelector = function() {
        return '[name="' + this.wrapFieldName("region") + '"]'
      }, PostalCode.prototype.getCitySelector = function() {
        return '[name="' + this.wrapFieldName("city") + '"]'
      }, PostalCode.prototype.render = function() {
        this.template.renderBlock('[data-fc-id="block-' + this.address_prefix + '-postal-code"]', this.wrapFieldName("postal_code"))
      }, PostalCode.prototype.renderActions = function() {
        this.template.renderBlock('[data-fc-id="block-' + this.address_prefix + '-postal-code-actions"]', this.wrapFieldName("postal_code_actions"))
      }, PostalCode.prototype.isLookupActive = function() {
        return "none" === FC.json.config.template_config.postal_code_lookup.usage ? !1 : FC.util.isAddressPostalCodeLookupSupported(this.getAddress().country) ? !0 : !1
      }, PostalCode.prototype._clearChangedFields = function() {
        this._fieldsOld = $.extend(this._fieldsOld, this._fieldsNew), this._fieldsNew = {}
      }, PostalCode.prototype._updateChangedFields = function(name, value) {
        this._fieldsOld[name] !== value && (this._fieldsNew[name] = value)
      }, PostalCode.prototype._triggerUpdateEvent = function() {
        clearTimeout(this._triggerTimeout), this._triggerTimeout = setTimeout($.proxy(function() {
          $.isEmptyObject(this._fieldsNew) || (triggerCustomerAddressChangeEvent({
            fields: this._fieldsNew,
            address: this.getAddress()
          }), this._clearChangedFields())
        }, this), 0)
      };
      var triggerCustomerAddressChangeEvent = FC.client.wrap("customer-address-change", $.noop)
    }(FC, jQuery),
    function(FC, $) {
      function getFieldBase(fieldName) {
        var fieldBase;
        return fieldBase = -1 != fieldName.indexOf("shipto") ? fieldName.replace(/^(shipto[-_]\d+).*/, "$1") : fieldName.substring(0, fieldName.indexOf("_"))
      }
      var locations = FC.locations = {};
      locations.init = function() {
        function initializeAutoComplete() {
          FC.locations.setAutoComplete("shipping_country"), FC.locations.setAutoComplete("shipping_region"), FC.locations.setAutoComplete("billing_country"), FC.locations.setAutoComplete("billing_region"), null != FC.json && null != FC.json.multiship_data && $.each(FC.json.multiship_data, function(i, multiship) {
            FC.locations.setAutoComplete(multiship.prefix + "_country"), FC.locations.setAutoComplete(multiship.prefix + "_region")
          })
        }
        initializeAutoComplete(), FC.client.on("render.done", function(params) {
          if ("checkout" === params.block_id) return void initializeAutoComplete();
          if ("cart" === params.block_id || "address_entry" === params.block_id) return FC.locations.setAutoComplete("shipping_country"), void FC.locations.setAutoComplete("shipping_region");
          if ("customer_shipping" === params.block_id && FC.json.has_multiship) return void $.each(FC.json.multiship_data, function(i, multiship) {
            FC.locations.setAutoComplete(multiship.prefix + "_country"), FC.locations.setAutoComplete(multiship.prefix + "_region")
          });
          if (/(billing|shipping)/.test(params.selector) && "shipping_results" !== params.block_id) {
            var block_id = /(billing|shipping)/.exec(params.selector)[1];
            return void($.inArray(block_id, ["shipping", "billing"]) > -1 && (FC.locations.setAutoComplete(block_id + "_country"), FC.locations.setAutoComplete(block_id + "_region")))
          }
          var matches = /^(shipto_\d)_postal_code$/.exec(params.block_id);
          if (matches) {
            var prefix = matches[1];
            return FC.locations.setAutoComplete(prefix + "_country"), void FC.locations.setAutoComplete(prefix + "_region")
          }
        })
      }, locations.setAutoComplete = function(fieldName) {
        if (0 == $("select[data-fc-id='" + fieldName + "']").length) return !1;
        FC.util.log("Initializing FoxyComplete for field", fieldName);
        var fieldBase = getFieldBase(fieldName),
            fieldLabel = FC.json.config.lang.checkout_country,
            postalCodeLookupDisabled = "none" == FC.json.config.template_config.postal_code_lookup.usage ? !0 : !1;
        if (-1 != fieldName.indexOf("region")) {
          if (fieldLabel = FC.json.config.lang.checkout_location_state, countryCode = "", countryCode = $("[data-fc-id='" + fieldBase + "_country']").val(), "undefined" != typeof countryCode && "" != countryCode) {
            var locationsArray = FC.json.config.locations;
            fieldLabel = FC.json.config.lang["checkout_location_" + locationsArray[countryCode].r.lang], "" != fieldLabel && $("label[for='" + fieldBase + "_state_name']").not(".fc-error").html(fieldLabel + '<span class="fc-ast">*</span>'), locationsArray[countryCode].r.req ? $("[data-fc-id='" + fieldBase + "_region_name'], [data-fc-id='" + fieldBase + "_region']").attr("data-fc-required", "") : $("[data-fc-id='" + fieldBase + "_region_name'], [data-fc-id='" + fieldBase + "_region']").removeAttr("data-fc-required")
          }
        }
        var active_autocomplete = ($("[data-fc-id='" + fieldName + "']").val() || $("[data-fc-id='" + fieldName + "_name']").val() || $("[data-fc-id='" + fieldName + "']").attr("data-fc-default-value"), $("[data-fc-id='" + fieldName + "']").selectToAutocomplete("is_active")),
            foxycomplete_status = $("[data-fc-id='" + fieldName + "']").selectToAutocomplete("get_status");
        "required" === FC.json.config.template_config.foxycomplete.usage && ("inactive" == foxycomplete_status || "disabled" == foxycomplete_status && $("[data-fc-id='" + fieldName + "']").children("option[value!='']").length > 0 ? ($("[data-fc-id='" + fieldName + "']").selectToAutocomplete({
          "autocomplete-plugin": "awesomecomplete",
          "allow-blank-value": $("[data-fc-id='" + fieldName + "']").is("[data-fc-required]") === !1,
          "text-field-id": fieldName + "_name",
          handle_invalid_input: function(context) {
            context.$select_field.children("option[value!='']").length > 0 && (context.settings["allow-blank-value"] && "" === context.$text_field.val() ? (context.$text_field.val(""), context.$select_field.val("").trigger("blur")) : context.$text_field.val(context.$select_field.find("option[value!='']:selected:first").text()))
          },
          insert_text_field: function(context) {
            var $text_field = $("<input></input>"),
                text_field_attr = {
                  "data-fc-id": context.settings["text-field-id"],
                  "class": "fc-location fc-form-control",
                  type: "text",
                  placeholder: fieldLabel,
                  "data-fc-default-value": context.$select_field.attr("data-fc-default-value")
                };
            return context.$select_field.is("[data-fc-required]") && (text_field_attr["data-fc-required"] = ""), $text_field.attr(text_field_attr).val(context.$select_field.find("option:selected:first").text()).on("blur", function() {
              var valid_values = context.$select_field.find("option").map(function(i, option) {
                return $(option).text()
              }).get(); - 1 === valid_values.indexOf($text_field.val()) && "function" == typeof context.settings.handle_invalid_input && context.settings.handle_invalid_input(context), postalCodeLookupDisabled || ("" !== this.value ? $("[data-fc-container-for='" + $(this).attr("data-fc-id").replace("_name", "") + "']").removeClass("fc-foxycomplete-active").addClass("fc-foxycomplete-inactive") : $("[data-fc-container-for='" + $(this).attr("data-fc-id").replace("_name", "") + "']").removeClass("fc-foxycomplete-inactive").addClass("fc-foxycomplete-active"))
            }).on("focus", function() {
              $(this).is("[readonly]") || $("[data-fc-container-for='" + $(this).attr("data-fc-id").replace("_name", "") + "']").removeClass("fc-foxycomplete-inactive").addClass("fc-foxycomplete-active")
            }), context.settings.autoselect && $text_field.on("click", function() {
              $(this).hasClass("awesomecomplete-input") && this.select()
            }), $("[data-fc-container-for='" + context.settings["text-field-id"].replace("_name", "") + "']").addClass("" == $text_field.val() || postalCodeLookupDisabled ? "fc-foxycomplete-active" : "fc-foxycomplete-inactive"), $text_field.insertAfter(context.$select_field)
          },
          extract_options: function($select_field, settings) {
            var options = [],
                $options = $select_field.find("option"),
                number_of_options = $options.length;
            return $options.each(function() {
              var $option = $(this),
                  option = {
                    "real-value": $option.attr("value"),
                    label: $option.text()
                  };
              if (settings["remove-valueless-options"] && "" === option["real-value"]);
              else {
                option.matches = option.label;
                var alternative_spellings = $option.attr(settings["alternative-spellings-attr"]);
                if (alternative_spellings) {
                  var alternative_spellings_split = alternative_spellings.split("||");
                  option["alternative-spellings"] = [], option["alternative-spellings"].push({
                    spelling: option.label,
                    "relevancy-score": 0
                  });
                  for (var i = 0; i < alternative_spellings_split.length; i++) option["alternative-spellings"].push({
                    spelling: alternative_spellings_split[i],
                    "relevancy-score": 0
                  });
                  alternative_spellings = alternative_spellings.replace(/\|\|/g, " "), option.matches += " " + alternative_spellings
                }
                if (settings.sort) {
                  var weight = parseInt($option.attr(settings["sort-attr"]), 10);
                  option.weight = weight ? weight : number_of_options
                }
                if (settings["relevancy-sorting"]) {
                  option["relevancy-score"] = 0, option["relevancy-score-booster"] = 1;
                  var boost_by = parseFloat($option.attr(settings["relevancy-sorting-booster-attr"]));
                  boost_by && (option["relevancy-score-booster"] = boost_by)
                }
                options.push(option)
              }
            }), settings.sort && options.sort(settings["sort-desc"] ? function(a, b) {
              return b.weight - a.weight
            } : function(a, b) {
              return a.weight - b.weight
            }), options
          }
        }), active_autocomplete = !0, foxycomplete_status = "active") : active_autocomplete && $("[data-fc-id='" + fieldName + "']").children("option[value!='']").length > 0, active_autocomplete && 0 == $("[data-fc-id='" + fieldName + "']").children("option[value!='']").length && $("[data-fc-id='" + fieldName + "']").selectToAutocomplete("disable"), 1 == $("[data-fc-id='" + fieldName + "']").children("option[value!='']").length && ("" === $("[data-fc-id='" + fieldName + "']").children("option:selected").val() && this.setLocation(fieldName, $("[data-fc-id='" + fieldName + "']").children("option[value!='']").first().val()), this.setLocationReadOnly(fieldName)), -1 != fieldName.indexOf("country") && $("[data-fc-id='" + fieldName + "']") && "undefined" != typeof $("[data-fc-id='" + fieldName + "']").val() && "" !== $("[data-fc-id='" + fieldName + "']").val() && FC.json.config.template_config.foxycomplete.show_flags ? $("[data-fc-id='" + fieldName + "_flag']").css("background-image", "url(https://cdn.foxycart.com/static/images/icons/flags/famfamfam/" + $("[data-fc-id='" + fieldName + "']").val().toLowerCase() + ".png)").show() : $("[data-fc-id='" + fieldName + "_flag']").css("background-image", "url(https://cdn.foxycart.com/static/images/icons/flags/famfamfam/blank.png)").show())
      }, locations.setLocationReadOnly = function(fieldName) {
        $("[data-fc-id='" + fieldName + "_name']").prop("readonly") || "" == $("[data-fc-id='" + fieldName + "']").val || $("select[data-fc-id='" + fieldName + "']").selectToAutocomplete("readonly")
      }, locations.setLocation = function(fieldName, locationCode, locationName) {
        if (locationName = void 0 == locationName ? locationCode : locationName, $("select[data-fc-id='" + fieldName + "'] option[value!='']").length > 0 && 0 == $("select[data-fc-id='" + fieldName + "'] option[value='" + locationCode + "']").length) return !1;
        if ($("select[data-fc-id='" + fieldName + "']").selectToAutocomplete("is_active")) {
          if ($("[data-fc-id='" + fieldName + "_name']").prop("readonly")) return !1;
          $("[data-fc-id='" + fieldName + "']").val(locationCode)
        } else $("[data-fc-id='" + fieldName + "']").val(locationCode);
        return setTimeout(function() {
          $("[data-fc-id='" + fieldName + "']").trigger("change")
        }, 0), !0
      }, FC.client.on("ready.done", function() {
        locations.init()
      })
    }(FC, jQuery),
    function(FC, $) {
      function initPostalCode() {
        FC.PostalCode(selector, template, "shipping")
      }

      function initEvents() {
        $(selector).on("click.fc", getItemRemoveSelector(), itemRemoveClickHandler), $(selector).on("keyup.fc", getItemQuantityInputSelector(), itemQuantityChangeHandler), $(selector).on("change.fc", getItemQuantityInputSelector(), itemQuantityChangeHandler), $(selector).on("click.fc", getItemQuantityInputSelector(), itemQuantityClickHandler), $(selector).on("click.fc", getShowCouponInputButtonSelector(), showCouponInputButtonClickHandler), $(selector).on("click.fc", getAddCouponButtonSelector(), addCouponButtonClickHandler), $(selector).on("keyup.fc", getCouponInputSelector(), couponInputKeyupHandler), $(selector).on("change.fc", getCouponInputSelector(), couponInputChangeHandler), $(selector).on("click.fc", getRemoveCouponLinkSelector(), removeCouponLinkClickHandler), $(selector).on("click.fc", getRemoveGiftCardLinkSelector(), removeGiftCardLinkClickHandler), $(selector).on("click.fc", getChangeShippingLocationButtonSelector(), changeShippingLocationButtonClickHandler), $(selector).on("click.fc", getChangeAddressButtonSelector(), changeAddressClickHandler), $(selector).on("click.fc", getShippingRateSelector(), shippingRateClickHandler), $(selector).on("click.fc", getToggleMultishipDetailsButtonSelector(), toggleMultishipDetailsButtonClickHandler), $(selector).on("click.fc", getToggleFutureSubscriptionDetailsButtonSelector(), toggleFutureSubscriptionDetailsButtonClickHandler), $(selector).on("click.fc", getHostedPaymentLinkSelector(), hostedPaymentLinkClickHandler)
      }

      function itemRemoveClickHandler(event) {
        event.preventDefault(), cart.removeItem({
          id: $(this).data("fc-item-id")
        })
      }

      function itemQuantityChangeHandler(event) {
        if ("keyup" !== event.type || 13 === event.keyCode) {
          var current_item_id = $(this).data("fc-item-id"),
              current_item_quantity = $(this).val();
          $.each(FC.json.items, function(i, item) {
            item.id == current_item_id && (item.quantity = current_item_quantity)
          }), FC.util.tick(function() {
            cart.updateItemQuantity({
              id: current_item_id,
              quantity: current_item_quantity
            })
          })
        }
      }

      function itemQuantityClickHandler(event) {
        $(event.target).select()
      }

      function showCouponInputButtonClickHandler() {
        FC.json.show_coupon_input_button = !FC.json.show_coupon_input_button, cart.renderCouponEntry(), FC.json.show_coupon_input_button && $(getCouponInputSelector()).trigger("focus")
      }

      function addCouponButtonClickHandler() {
        $(getCouponInputSelector()).trigger("change.fc")
      }

      function couponInputKeyupHandler(event) {
        var code = $(this).val();
        FC.json.current_coupon_code = code, FC.json.current_gift_card_code = code, 13 == event.keyCode && code && cart.addCouponOrGiftCard({
          code: code
        })
      }

      function couponInputChangeHandler() {
        this.value && cart.addCouponOrGiftCard({
          code: this.value
        })
      }

      function removeCouponLinkClickHandler(event) {
        event.preventDefault();
        var coupon_code_id = $(this).data("fc-coupon-code-id");
        cart.removeCoupon({
          coupon_code_id: coupon_code_id
        })
      }

      function removeGiftCardLinkClickHandler(event) {
        event.preventDefault();
        var gift_card_code_id = $(this).data("fc-gift-card-code-id");
        cart.removeGiftCard({
          gift_card_code_id: gift_card_code_id
        })
      }

      function changeShippingLocationButtonClickHandler() {
        cart.showShippingLocationInput()
      }

      function shippingRateClickHandler() {
        var address = FC.json.shipping_address;
        address.shipping_service_id = $(this).val(), FC.json.show_shipping_tbd = !1, cart.recalculateCartTotals({
          force_save_shipping_service_for: address.address_name
        }), template.clearOutput(), cart.hideShippingLocationInput()
      }

      function changeAddressClickHandler() {
        cart.hideShippingLocationInput()
      }

      function toggleMultishipDetailsButtonClickHandler() {
        "checkout" == FC.json.context && $("body").data("fc-last-focus-selector", ""), FC.json.show_multiship_details = !FC.json.show_multiship_details, cart.renderOrderTotals()
      }

      function toggleFutureSubscriptionDetailsButtonClickHandler() {
        "checkout" == FC.json.context && $("body").data("fc-last-focus-selector", ""), FC.json.show_future_subscriptions_details = !FC.json.show_future_subscriptions_details, cart.renderOrderTotals()
      }

      function hostedPaymentLinkClickHandler(event) {
        var prevent_checkout = !1;
        !FC.json.shipping_address.has_live_rate_shippable_products || "undefined" != typeof FC.json.shipping_address.shipping_service_id && "0" !== FC.json.shipping_address.shipping_service_id && 0 != FC.json.shipping_address.shipping_service_id || (prevent_checkout = !0), FC.json.has_location_dependent_taxes && !FC.json.taxes_calculated && (prevent_checkout = !0), prevent_checkout && ($('[data-fc-id="block-address-entry"]').addClass("has-error"), $("#shipping_postal_code").trigger("focus"), event.preventDefault())
      }

      function getShowCouponInputButtonSelector() {
        return '[data-fc-id="show-coupon-input-button"]'
      }

      function getAddCouponButtonSelector() {
        return '[data-fc-id="add-coupon-button"]'
      }

      function getItemRemoveSelector() {
        return '[data-fc-id="item-remove-link"]'
      }

      function getItemQuantityInputSelector() {
        return '[data-fc-id="item-quantity-input"]'
      }

      function getCouponInputSelector() {
        return "#coupon"
      }

      function getRemoveCouponLinkSelector() {
        return '[data-fc-id="remove-coupon-link"]'
      }

      function getRemoveGiftCardLinkSelector() {
        return '[data-fc-id="remove-gift-card-link"]'
      }

      function getChangeShippingLocationButtonSelector() {
        return '[data-fc-id="change-shipping-location-button"]'
      }

      function getChangeAddressButtonSelector() {
        return '[data-fc-id="change-address-button"]'
      }

      function getShippingRateSelector() {
        return '[name="shipping_service_id"]'
      }

      function getToggleMultishipDetailsButtonSelector() {
        return '[data-fc-id="button-toggle-multiship-details"]'
      }

      function getToggleFutureSubscriptionDetailsButtonSelector() {
        return '[data-fc-id="button-toggle-future-subscription-details"]'
      }

      function getHostedPaymentLinkSelector() {
        return '[data-fc-id="paypal-link"],[data-fc-id="amazon-fps-link"]'
      }
      var cart = FC.cart = {},
          client = (FC.Event, FC.client),
          template = FC.Template("cart"),
          selector = '[data-fc-container="cart"]';
      cart.init = function() {
        FC.util.log("Initializing the cart"), initPostalCode(), initEvents()
      }, client.on("ready.done", function() {
        cart.init(), cart.updatePaymentInfoRequired(), FC.json.config && FC.json.config.currency_format && cart.adjustShippingLocationInputStatus();
        var current_data_hash = FC.util.hashString(JSON.stringify(FC.json.items) + JSON.stringify(FC.json.coupons) + JSON.stringify(FC.json.gift_cards));
        $("body").data("fc-data-hash", current_data_hash)
      }), client.on("customer-address-change.done", function(params) {
        FC.util.log("customer-address-change.done"), FC.util.doAddressValidation(params.address) || FC.util.addressHasLocationInfo(params.address) && (cart.saveCartContactInfo(), ("billing" != params.address.type || 0 == FC.json.shipping_address.has_shippable_products) && FC.json.has_taxes && cart.getTaxes(params), "billing" != params.address.type && params.address.has_live_rate_shippable_products && cart.getShippingOptions(params))
      }), client.on("render.done", function(params) {
        if ("cart" === params.block_id) {
          var cart_changed = cart.hasChanged(),
              addresses = FC.json.has_multiship ? FC.json.multiship_data : [FC.json.shipping_address];
          $.each(addresses, function(i, address) {
            FC.util.addressHasLocationInfo(address) && (address.has_live_rate_shippable_products && (cart_changed && cart.getShippingOptions({
              address: address
            }), 0 == address.shipping_service_id && "cart" == FC.json.context && (template.clearOutput(), cart.showShippingLocationInput())), FC.json.has_taxes && cart_changed && cart.getTaxes({
              address: address
            }))
          })
        }
      }), client.on("cart-update.done", function() {
        cart.updateHash()
      }), cart.getHash = function() {
        return FC.util.hashString(JSON.stringify(FC.json.items) + JSON.stringify(FC.json.coupons) + JSON.stringify(FC.json.gift_cards))
      }, cart.updateHash = function() {
        var cart_changed = cart.hasChanged();
        return cart_changed && $("body").data("fc-data-hash", cart.getHash()), cart_changed
      }, cart.hasChanged = function() {
        var data_hash = $("body").data("fc-data-hash"),
            current_data_hash = cart.getHash(),
            cart_changed = current_data_hash != data_hash;
        return cart_changed
      }, cart.render = function() {
        template.render(), $(selector).html(template.output), FC.client.event("render.done").trigger({
          selector: selector,
          block_id: "cart"
        })
      }, cart.renderShippingRates = function(address) {
        template.renderBlock('[data-fc-id="block-' + address.prefix + '-results"]', "shipping_results")
      }, cart.renderTaxes = function() {
        template.renderBlock('[data-fc-id="taxes"]', "taxes")
      }, cart.renderOrderTotals = function() {
        template.renderBlock('[data-fc-id="block-order-totals"]', "order_totals")
      }, cart.renderCouponEntry = function() {
        template.renderBlock('[data-fc-id="block-coupon-entry"]', "coupon_entry")
      }, cart.renderAddressEntry = function() {
        template.renderBlock('[data-fc-id="block-address-entry"]', "address_entry")
      }, cart.renderCartItemsDivs = function() {
        template.renderBlock('[data-fc-id="block-cart-items-divs"]', "cart_items_divs")
      }, cart.renderErrors = function() {
        template.renderBlock('[data-fc-id="block-cart-errors"]', "cart_errors")
      }, cart.request = function(data) {
        var url = "https://" + FC.settings.storedomain + "/cart";
        return client.request(url, data)
      }, client.event("cart-submit").override(function(params, next) {
        if ("remove_coupon" === params.data.cart) return void next(!1);
        if (!client.isActionNeeded(params)) {
          var returned = params["super"](params);
          return returned
        }
        client.request(params.url).done(function() {
          cart.render(), next()
        })
      }), cart.updateItemQuantity = client.wrap("cart-item-quantity-update", function(params, next) {
        FC.json.loading_quantity = !0, FC.util.cleanMessage("info", "quantity"), cart.renderCartItemsDivs(), cart.request({
          cart: "update",
          "1:id": params.id,
          "1:quantity": params.quantity
        }).done(function() {
          FC.json.loading_quantity = !1, cart.render(), next()
        })
      }), cart.removeItem = client.wrap("cart-item-remove", function(params, next) {
        FC.json.loading_quantity = !0, cart.renderCartItemsDivs(), cart.request({
          cart: "update",
          "1:quantity": 0,
          "1:id": params.id
        }).done(function() {
          FC.json.loading_quantity = !1, cart.render(), next()
        })
      }), cart.addCouponOrGiftCard = client.wrap("cart-coupon-add", function(params, next) {
        FC.json.loading_coupons = !0;
        var customer_email = FC.json.customer_email ? FC.json.customer_email : "";
        cart.renderCouponEntry(), cart.request({
          "x:email_for_coupon": customer_email,
          coupon: params.code,
          gift_card: params.code,
          is_anonymous: FC.json.is_anonymous
        }).done(function() {
          FC.json.loading_coupons = !1;
          var coupon_added = "object" == typeof FC.json.coupons[params.code];
          coupon_added && (FC.json.current_coupon_code = "", FC.json.show_coupon_input_button = !1);
          var gift_card_added = "object" == typeof FC.json.gift_cards[params.code];
          if (gift_card_added && (FC.json.current_coupon_code = "", FC.json.show_coupon_input_button = !1), cart.render(), coupon_added)
            for (var coupons = Array.isArray(FC.json.coupons[params.code]) ? FC.json.coupons[params.code] : [FC.json.coupons[params.code]], i = 0; i < coupons.length; i++) {
              var coupon_code_id = coupons[i].id;
              cart.highlightCoupon(coupon_code_id)
            }
          if (gift_card_added)
            for (var gift_cards = Array.isArray(FC.json.gift_cards[params.code]) ? FC.json.gift_cards[params.code] : [FC.json.gift_cards[params.code]], i = 0; i < gift_cards.length; i++) {
              var gift_card_code_id = gift_cards[i].id;
              cart.highlightGiftCard(gift_card_code_id)
            }
          FC.util.removeError("coupon"), FC.util.removeError("gift_card"), next()
        })
      }), cart.removeCoupon = client.wrap("cart-coupon-remove", function(params, next) {
        FC.json.loading_coupons = !0, cart.renderCouponEntry(), cart.request({
          cart: "remove_coupon",
          coupon_code_id: params.coupon_code_id
        }).done(function() {
          FC.json.loading_coupons = !1, FC.util.removeError("coupon"), FC.json.show_coupon_input_button = !1, cart.render(), next()
        })
      }), cart.removeGiftCard = client.wrap("cart-gift-card-remove", function(params, next) {
        FC.json.loading_coupons = !0, cart.renderCouponEntry(), cart.request({
          cart: "remove_gift_card",
          gift_card_code_id: params.gift_card_code_id
        }).done(function() {
          FC.json.loading_coupons = !1, FC.util.removeError("gift_card"), FC.json.show_coupon_input_button = !1, cart.render(), next()
        })
      }), cart.getShippingOptions = client.wrap("cart-shipping-options-update", function(params, next) {
        params.address.loading_shipping_results = !0, params.address.shipping_results = [];
        var selected_shipping_service_id = params.address.shipping_service_id;
        params.address.shipping_service_id = 0, params.address.shipping_service_description = "", params.address.shipping_service_signature = "", template.clearOutput(), cart.renderShippingRates(params.address), FC.api.getShippingOptions(params.address, params.store_address, params.custom_fields).done(function(response) {
          FC.util.removeError("shipping-results"), $.extend(params.address, response.data), params.address.shipping_results.forEach(function(shipping_result) {
            shipping_result.service_id == selected_shipping_service_id && (params.address.shipping_service_id = shipping_result.service_id, params.address.shipping_service_description = (shipping_result.method + " " + shipping_result.service_name).trim(), shipping_result.signature && (params.address.shipping_service_signature = shipping_result.signature))
          })
        }).fail(function(error) {
          params.error = error, FC.util.addError("shipping-results", error.message)
        }).always(function() {
          params.address.loading_shipping_results = !1, cart.renderErrors(), cart.renderShippingRates(params.address), cart.recalculateCartTotals(), next()
        })
      }), cart.getTaxes = function(params) {
        FC.json.loading_taxes = !0, template.clearOutput(), cart.renderTaxes(), FC.api.getTaxes(params.address).done(function(response) {
          FC.json.loading_taxes = !1;
          var addressToUpdate = params.address;
          "billing" == addressToUpdate.prefix && (addressToUpdate = FC.json.shipping_address), $.extend(addressToUpdate, response.data), FC.json.taxes_calculated = !0, cart.recalculateCartTotals(), cart.renderTaxes(), cart.renderCartItemsDivs()
        })
      }, cart.highlightCoupon = function(coupon_code_id) {
        $('[data-fc-coupon-container-id="' + escape(coupon_code_id) + '"]').addClass("fc-subtotal--row--new")
      }, cart.highlightGiftCard = function(gift_card_code_id) {
        $('[data-fc-gift-card-container-id="' + escape(gift_card_code_id) + '"]').addClass("fc-subtotal--row--new")
      }, cart.showShippingLocationInput = function() {
        FC.json.show_address_entry = !0, FC.util.addressHasLocationInfo(FC.json.shipping_address) && 0 == FC.json.shipping_address.shipping_results.length && FC.json.shipping_address.has_live_rate_shippable_products && cart.getShippingOptions({
          address: FC.json.shipping_address
        }), cart.renderAddressEntry(), cart.renderOrderTotals()
      }, cart.hideShippingLocationInput = function() {
        FC.json.show_address_entry = !1, cart.renderAddressEntry(), cart.renderOrderTotals()
      }, cart.saveCartContactInfo = client.wrap("customer-address-update", function(params, next) {
        FC.api.saveContactInfo().done(function() {
          next()
        }).fail(function(error) {
          params.error = error, next()
        })
      }), cart.saveShippingServiceInfo = client.wrap("customer-shipping-option-select", function(params, next) {
        FC.api.saveShippingServiceInfo(params).fail(function(error) {
          params.error = error
        }).always(function() {
          FC.json.has_taxes && cart.getTaxes({
            address: params
          }), cart.getDiscountsData(), next()
        })
      }), cart.getDiscountsData = function() {
        FC.api.getDiscountsData().done(function(response) {
          FC.json.coupons = response.details.coupons, FC.json.future_coupons = response.details.future_coupons, FC.json.gift_cards = response.details.gift_cards, cart.recalculateCartTotals()
        })
      }, cart.recalculateShipmentTotals = function(address, force_save_shipping_service) {
        address.total_item_price = 0, FC.json.items.forEach(function(item) {
          FC.json.has_multiship && item.shipto !== address.address_name || (address.total_item_price += parseFloat(item.price))
        });
        var original_total_shipping = address.total_shipping,
            original_total_future_shipping = address.total_future_shipping;
        if (FC.json.has_current_live_rate_shipping && (address.total_shipping = 0, address.shipping_results.length > 0 && address.shipping_results.forEach(function(shipping_result) {
          shipping_result.service_id == address.shipping_service_id && (address.shipping_service_description = shipping_result.method + " " + shipping_result.service_name, shipping_result.signature && (address.shipping_service_signature = shipping_result.signature), address.total_shipping = parseFloat(shipping_result.price))
        })), FC.json.has_future_products) {
          FC.json.has_future_live_rate_shipping && (address.total_future_shipping = 0, address.future_shipping_results && address.future_shipping_results.length > 0 && (address.future_shipping_results.forEach(function(shipping_result) {
            shipping_result.service_id == address.shipping_service_id && (address.future_shipping_service_description = shipping_result.method + " " + shipping_result.service_name, address.total_future_shipping = parseFloat(shipping_result.price))
          }), FC.json.is_future_shipping_only && (address.shipping_service_description = address.future_shipping_service_description)));
          var discount_amount = 0,
              non_taxable_discount_amount = 0,
              non_taxable_discount_amount_per_subscription = 0;
          $.each(FC.json.future_coupons, function(coupon_code, coupon) {
            discount_amount += coupon.amount, coupon.is_taxable || (non_taxable_discount_amount += coupon.amount)
          });
          var number_of_future_subscriptions = jQuery(FC.json.future_subscription_totals_by_date).length;
          number_of_future_subscriptions && (non_taxable_discount_amount_per_subscription = non_taxable_discount_amount / number_of_future_subscriptions), $.each(FC.json.future_subscription_totals_by_date, function(index) {
            FC.json.future_subscription_totals_by_date[index].total_shipping = parseFloat(address.total_future_shipping);
            var tax_amount = 0,
                taxable_item_amount = parseFloat(FC.json.future_subscription_totals_by_date[index].total_item_price) + non_taxable_discount_amount_per_subscription;
            address.future_taxes.forEach(function(tax) {
              tax_amount += taxable_item_amount * tax.rate * .01, tax.applies_to_shipping && (tax_amount += FC.json.future_subscription_totals_by_date[index].total_shipping * tax.rate * .01)
            }), tax_amount > 0 && (FC.json.has_future_taxes = !0), FC.json.future_subscription_totals_by_date[index].total_tax = tax_amount, FC.json.future_subscription_totals_by_date[index].total = parseFloat(FC.json.future_subscription_totals_by_date[index].total_item_price) + parseFloat(discount_amount) + parseFloat(FC.json.future_subscription_totals_by_date[index].total_shipping) + parseFloat(FC.json.future_subscription_totals_by_date[index].total_tax)
          })
        }(original_total_shipping != address.total_shipping || original_total_future_shipping != address.total_future_shipping || force_save_shipping_service) && cart.saveShippingServiceInfo(address), address.total_price = address.total_item_price + address.total_shipping + address.total_tax
      }, cart.recalculateCartTotals = client.wrap("cart-update", function(params) {
        var total_shipping = 0,
            total_future_shipping = 0,
            total_tax_amount = 0,
            total_discount = 0,
            addresses = FC.json.has_multiship ? FC.json.multiship_data : [FC.json.shipping_address];
        $.each(addresses, function(i, address) {
          var force_save_shipping_service = !1;
          params && params.force_save_shipping_service_for === address.address_name && (force_save_shipping_service = !0), cart.recalculateShipmentTotals(address, force_save_shipping_service), total_tax_amount += address.total_tax, total_shipping += address.total_shipping, total_future_shipping += address.total_future_shipping
        }), $.each(FC.json.coupons, function(name, coupon) {
          Array.isArray(coupon) || (coupon = [coupon]);
          for (var i = 0; i < coupon.length; i++) total_discount += parseFloat(coupon[i].amount)
        }), $.each(FC.json.gift_cards, function(name, gift_card) {
          Array.isArray(gift_card) || (gift_card = [gift_card]);
          for (var i = 0; i < gift_card.length; i++) total_discount += parseFloat(gift_card[i].amount)
        }), FC.json.total_shipping = total_shipping, FC.json.total_future_shipping = total_future_shipping, FC.json.has_future_shipping = FC.json.total_future_shipping > 0, FC.json.total_tax = total_tax_amount, FC.json.total_order = FC.json.total_item_price + total_tax_amount + total_shipping + total_discount, cart.updatePaymentInfoRequired(), template.clearOutput(), cart.renderOrderTotals()
      }), cart.updatePaymentInfoRequired = function() {
        var orderTotal = parseFloat(FC.json.total_order),
            payment_info_required = !1;
        (orderTotal > 0 || FC.json.is_updateinfo || FC.json.has_subscriptions) && (payment_info_required = !0), FC.json.subscription_cancel && (payment_info_required = !1), FC.json.payment_info_required = payment_info_required
      }, cart.adjustShippingLocationInputStatus = function() {
        FC.json.show_address_entry && cart.showShippingLocationInput()
      }, cart.updateConfig = client.wrap("cart-config-update", function(params, next) {
        FC.util.log("cart.updateConfig: Started"), FC.json && "cart" != FC.json.context && next(!1);
        var cart_config = {},
            get_config = !0,
            supports_local_storage = FC.util.supportsLocalStorage();
        FC.json.config && FC.json.config.store_domain ? (FC.util.log("cart.updateConfig: config exists in FC.json.config. Will not retrieve."), get_config = !1, next()) : supports_local_storage && (cart_config = localStorage.getItem("fc_cart_config"), cart_config && "undefined" != cart_config && (FC.util.log("cart.updateConfig: cart config retrieved from local storage"), cart_config = JSON.parse(cart_config), cart_config.cart_config_hash == FC.json.cart_config_hash && (FC.util.log("cart.updateConfig: cart config hash matches with local storage"), get_config = !1, FC.json.config = cart_config, next()))), get_config && client.requestConfig().done(function() {
          FC.util.log("cart.updateConfig: retrieved an updated cart config from the server"), supports_local_storage && (localStorage.setItem("fc_cart_config", JSON.stringify(FC.json.config)), FC.util.log("cart.updateConfig: stored cart config to local storage")), next()
        })
      })
    }(FC, jQuery),
    function(FC, $) {
      function bindEvents() {
        sidecart.$cart.on("click.fc", "[data-fc-sidecart-dismiss]", dismissButtonClickHandler), $(document).on("keyup.fc", documentKeyupHandler)
      }

      function unbindEvents() {
        sidecart.$cart.off("click.fc", "[data-fc-sidecart-dismiss]", dismissButtonClickHandler), $(document).off("keyup.fc", documentKeyupHandler)
      }

      function dismissButtonClickHandler() {
        sidecart.hide()
      }

      function documentKeyupHandler(event) {
        27 == event.keyCode && sidecart.hide()
      }

      function createCart() {
        return $('<div data-fc-sidecart><div data-fc-container="cart" id="fc" /></div>').appendTo($("body"))
      }

      function findOrWrapStorePage(container) {
        var $store_page = $("[data-fc-store-page]"),
            body = $("body"),
            bg_body = "transparent" == body.css("background-color") || "rgba(0, 0, 0, 0)" == body.css("background-color") ? "#FFFFFF" : body.css("background-color"),
            bg_html = "transparent" == $("html").css("background-color") || "rgba(0, 0, 0, 0)" == $("html").css("background-color") ? "#FFFFFF" : $("html").css("background-color"),
            bg_repeat = body.css("background-repeat"),
            bg = "#FFFFFF" == bg_body ? bg_html : bg_body,
            bg_position = body.css("background-position");
        sidecart.scrollPoint = $(window).scrollTop();
        var bg_position_x = bg_position.split(" ")[1].replace(/[^\d]/g, "");
        return "repeat-x" == bg_repeat && 0 == bg_position_x && (bg_position = bg_position.split(" ")[0] + " -" + sidecart.scrollPoint + "px"), $store_page.length || (container.children().not("[data-fc-sidecart]").not("script").not("link").wrapAll("<div data-fc-store-page/>"), $store_page = $("[data-fc-store-page]"), $store_page.css({
          "background-color": bg,
          "background-image": body.css("background-image"),
          "background-repeat": body.css("background-repeat"),
          "background-position": bg_position
        }), sidecart.createBodyResetShim()), $store_page.scrollTop(sidecart.scrollPoint)
      }
      var sidecart = FC.sidecart = {
            mobile_viewport: !1,
            responsive_DOM: !1,
            supports_transitions: !1,
            transition_style: "reveal",
            shown_on_load: !1,
            is_loading: !1
          },
          client = FC.client,
          skip_popstate_event = !1;
      sidecart.init = function(options) {
        var options = $.extend({}, options),
            is_mobile = "undefined" != typeof window.matchMedia && window.matchMedia("(max-width: 400px)");
        this.mobile_viewport = is_mobile && is_mobile.matches, this.responsive_DOM = window.screen && window.screen.availWidth >= $("body").width(), this.supports_transitions = this.supportsCSSTransitions("transition"), this.$container = $("[data-fc-with-sidecart]"), 0 == this.$container.length && (this.$container = $("body").attr("data-fc-with-sidecart", this.transition_style)), this.$cart = createCart(), FC.cart.init(), this.$cart.detach()
      }, sidecart.createBodyResetShim = function() {
        var $body = $("body"),
            bm_top = parseInt($body.css("margin-top")),
            bm_right = parseInt($body.css("margin-right")),
            bm_bottom = parseInt($body.css("margin-bottom")),
            bm_left = parseInt($body.css("margin-left")),
            bp_top = parseInt($body.css("padding-top")),
            bp_right = parseInt($body.css("padding-right")),
            bp_bottom = parseInt($body.css("padding-bottom")),
            bp_left = parseInt($body.css("padding-left")),
            sum = bm_top + bm_right + bm_bottom + bm_left + bp_top + bp_right + bp_bottom + bp_left;
        this.defaultBodyCSS = $("body").attr("style"), sum > 0 && ($("[data-fc-store-page]").css({
          margin: "0px",
          "padding-top": "0px",
          "padding-right": (bm_right + bp_right).toString() + "px",
          "padding-bottom": "0px",
          "padding-left": (bm_left + bp_left).toString() + "px",
          position: "relative"
        }), $("body").css({
          margin: "0px",
          padding: "0px"
        }).attr("data-fc-sidecart-body-reset", "reset"))
      }, sidecart.removeBodyResets = function() {
        var $body = $("body"),
            $store_page = $("[data-fc-store-page]");
        $store_page.children().unwrap(), "reset" == $("body").attr("data-fc-sidecart-body-reset") && ($("body").removeAttr("data-fc-sidecart-body-reset"), this.defaultBodyCSS = this.defaultBodyCSS || "", $body.attr("style", this.defaultBodyCSS)), this.$uiblock && (this.$uiblock.remove(), this.$uiblock = void 0), $(window).scrollTop(this.scrollPoint)
      }, sidecart.createUIBlock = function() {
        this.$uiblock || (this.$uiblock = $("<div data-fc-ui-block />").appendTo(this.$container), this.$uiblock.on("click.fc, touch.fc", function() {
          sidecart.hide()
        }), window.getComputedStyle && window.getComputedStyle(FC.sidecart.$uiblock[0]).opacity)
      }, sidecart.repositionFixedElements = function() {
        $("body, [data-fc-store-page]").children().children().addBack().filter(function() {
          return "fixed" === $(this).css("position")
        }).each(function() {
          $(this).attr({
            "data-fc-position-top": $(this).css("top")
          }).css({
            top: $(this).offset().top + "px"
          }).addClass("fc-store-page__fixed-element")
        })
      }, sidecart.resetFixedElements = function() {
        $("[data-fc-position-top]").each(function() {
          $(this).css("top", $(this).attr("data-fc-position-top"))
        }).removeAttr("data-fc-position-top").removeClass("fc-store-page__fixed-element")
      }, sidecart.height = function() {
        var mobile_height = window.screen && window.screen.availHeight;
        return this.mobile_viewport && mobile_height || $(window).height()
      }, sidecart.showCart = function(then) {
        var $store_page = $("[data-fc-store-page]");
        this.$container.addClass("cart-visible cart-visible--reset").removeClass("cart-hide"), $store_page.scrollTop(sidecart.scrollPoint), this.afterAnimation(then)
      }, sidecart.afterAnimation = function(cb) {
        var animEvents = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend", "animationFinish"].join(" ");
        cb && this.$container.on(animEvents, function() {
          sidecart.$container.off(animEvents), cb.call(sidecart)
        })
      }, sidecart.supportsCSSTransitions = function(featurename) {
        var feature = !1,
            domPrefixes = "Webkit Moz ms O".split(" "),
            elm = document.createElement("div"),
            featurenameCapital = null;
        if (featurename = featurename.toLowerCase(), elm.style[featurename] && (feature = !0), feature === !1) {
          featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
          for (var i = 0; i < domPrefixes.length; i++)
            if (void 0 !== elm.style[domPrefixes[i] + featurenameCapital]) {
              feature = !0;
              break
            }
        }
        return feature
      }, sidecart.shouldUseFullpageCart = function() {
        return this.mobile_viewport && !this.responsive_DOM || !this.supports_transitions
      }, sidecart.hideCart = function() {
        this.$container.removeClass("cart-visible cart-visible--animation-complete").addClass("cart-hide"), this.afterAnimation(function() {
          this.$container.removeClass("cart-visible--reset").scrollTop(sidecart.scrollPoint)
        })
      }, sidecart.hide = client.wrap("sidecart-hide", function() {
        sidecart.is_loading || (sidecart.is_loading = !0, FC.util.log("Sidecart .hide()"), this.hideCart(), unbindEvents(), !sidecart.shown_on_load && window.history && "pushState" in window.history && "#fc-sidecart" == window.location.hash && (skip_popstate_event = !0, window.history.back()), sidecart.shown_on_load && (sidecart.shown_on_load = !1, window.location.hash = ""), this.afterAnimation(function() {
          sidecart.is_loading = !1, sidecart.detachCart()
        }))
      }), sidecart.detachCart = client.wrap("sidecart-detach", function() {
        this.$cart.detach(), this.removeBodyResets(), this.resetFixedElements()
      }), sidecart.bypassSidecart = function(params) {
        var $e = params ? $(params.element) : $(),
            body = $("body");
        return $e.hasClass("fc-sidecart--bypass") || void 0 !== $e.attr("data-fc-sidecart-bypass") || body.hasClass("fc-sidecart--bypass") || void 0 !== body.attr("data-fc-sidecart-bypass") ? !0 : !1
      }, sidecart.skeletonify = function() {
        $("#fc .fc-cart__main__content").find("h1, h2, h3, h4, li, td, th, p, div>a").each(function() {
          var words = $(this).text().split(" ");
          $(this).empty().html(function() {
            for (i = 0; i < words.length; i++) "" != words[i] && $(this).append(0 == i ? '<span class="fc-skeleton">' + words[i] + "</span>" : ' <span class="fc-skeleton">' + words[i] + "</span>")
          })
        })
      }, sidecart.insertDummyProduct = function() {
        var dummy = {
          item_number: 1,
          id: "555555",
          name: "Example Dummy Product",
          alt_name: "Example Dummy Product",
          code: "abc123",
          parent_code: "",
          image: "",
          url: "",
          length: "0",
          width: "0",
          height: "0",
          weight_each: 4,
          weight: 4,
          quantity: "1",
          quantity_min: "0",
          quantity_max: "0",
          base_price: 10,
          price_each: 10,
          price: 10,
          options: [{
            name: "Color",
            "class": "color",
            value: "red"
          }],
          category: "DEFAULT",
          delivery_type: "shipped",
          downloadable_id: "0",
          sub_frequency: "",
          sub_startdate: "0000-00-00",
          sub_nextdate: "0000-00-00",
          sub_enddate: "0000-00-00",
          multiship: 0,
          expires: "0"
        };
        FC.json.items.push(dummy)
      }, sidecart.show = client.wrap("sidecart-show", function(params, next) {
        if (bindEvents(), sidecart.repositionFixedElements(), sidecart.$storePage = findOrWrapStorePage(sidecart.$container), sidecart.createUIBlock(), sidecart.$cart.appendTo($("body")), FC.json.loading_quantity = !0, 0 == FC.json.item_count && params && params.url && !params.url.match("cart=view") ? (FC.json.item_count = 1, sidecart.insertDummyProduct(), FC.cart.render(), sidecart.skeletonify()) : FC.cart.render(), !window.location.hash && window.history && "pushState" in window.history) {
          var href = window.location.href;
          window.history.pushState({
            "fc-sidecart": !0
          }, null, href.replace(/#.*/, "") + "#fc-sidecart")
        }
        return sidecart.showCart(function() {
          this.$container.addClass("cart-visible--animation-complete"), this.$cart.trigger("focus"), FC.util.log("Sidecart is loaded."), sidecart.is_loading = !1
        }), params.url ? void next() : void client.updateCart().done(function() {
          FC.cart.render(), next()
        }).fail(function() {
          next(!1)
        })
      }), client.event("cart-submit").override(function(params, next) {
        return "remove_coupon" === params.data.cart ? void next(!1) : !client.isActionNeeded(params) || sidecart.shouldUseFullpageCart() || sidecart.bypassSidecart(params) ? void next() : (sidecart.is_loading || (FC.util.log("Starting sidecart load"), sidecart.is_loading = !0, sidecart.show(params)), void client.request(params.url).done(function() {
          FC.cart.render();
          var timeout = sidecart.is_loading ? 500 : 0;
          setTimeout(function() {
            sidecart.$container.trigger("animationFinish")
          }, timeout), next()
        }))
      }), client.on("ready.done", function() {
        sidecart.bypassSidecart() ? FC.util.log("Sidecart disabled") : (sidecart.init(), FC.util.log("Sidecart initializing."), window.location.hash.match("fc-sidecart") && !sidecart.is_loading && (sidecart.is_loading = !0, sidecart.shown_on_load = !0, sidecart.show(), window.history.replaceState(null, null, window.location.href.replace("#fc-sidecart", ""))), $(window).on("popstate", function(e) {
          if (skip_popstate_event) return void(skip_popstate_event = !1);
          var e = e.originalEvent;
          e.state && e.state["fc-sidecart"] ? (sidecart.is_loading = !0, sidecart.show()) : $("[data-fc-sidecart]").length > 0 && sidecart.hide()
        }))
      })
    }(FC, jQuery);
if (typeof(FC.json) == "undefined") {
  FC.json = {};
}
FC.json.config = {
  "css_file": "https:\/\/cdn.foxycart.com\/vinylimagination\/responsive_styles.1673567655.css",
  "css_files": ["https:\/\/cdn.foxycart.com\/vinylimagination\/responsive_styles.1673567655.css"],
  "cdn_static_path": "https:\/\/cdn.foxycart.com\/static\/",
  "cdn_base_path": "https:\/\/cdn.foxycart.com\/vinylimagination\/",
  "post_url": "v\/2.0.0\/cdn\/get.php",
  "store_name": "Vinyl Imagination",
  "store_domain": "vinylimagination.foxycart.com",
  "store_logo_url": "",
  "store_url": "https:\/\/vinylimagination.com\/",
  "cache_path": "\/\/vinylimagination.foxycart.com\/cache?url=",
  "paypal_checkout_button_url": "https:\/\/www.paypalobjects.com\/en_US\/i\/btn\/btn_xpressCheckout.gif",
  "currency_format": "%n",
  "supports_address_validation": false,
  "address_validation_countries": [],
  "supports_pay_with_pp_platform": false,
  "template_config": {
    "cart_type": "default",
    "checkout_type": "default_account",
    "csc_requirements": "all_cards",
    "tos_checkbox_settings": {
      "usage": "required",
      "initial_state": "unchecked",
      "is_hidden": false,
      "url": "https:\/\/vinylimagination.com\/Pages\/Support\/Terms-Conditions.php"
    },
    "eu_secure_data_transfer_consent": {
      "usage": "required"
    },
    "newsletter_subscribe": {
      "usage": "required"
    },
    "analytics_config": {
      "usage": "none",
      "google_analytics": {
        "usage": "none",
        "account_id": "",
        "include_on_site": false
      },
      "segment_io": {
        "usage": "none",
        "account_id": ""
      }
    },
    "colors": {
      "usage": "none",
      "primary": "4D4D4D",
      "secondary": "FFFFFF",
      "tertiary": "FFFFFF"
    },
    "use_checkout_confirmation_window": {
      "usage": "none"
    },
    "supported_payment_cards": ["visa", "mastercard", "discover", "amex"],
    "custom_checkout_field_requirements": {
      "cart_controls": "enabled",
      "coupon_entry": "enabled",
      "billing_first_name": "required",
      "billing_last_name": "required",
      "billing_company": "optional",
      "billing_tax_id": "hidden",
      "billing_phone": "required",
      "billing_address1": "required",
      "billing_address2": "optional",
      "billing_city": "required",
      "billing_region": "default",
      "billing_postal_code": "required",
      "billing_country": "required"
    },
    "cart_display_config": {
      "usage": "required",
      "show_product_weight": false,
      "show_product_category": true,
      "show_product_code": true,
      "show_product_options": true,
      "show_sub_frequency": true,
      "show_sub_startdate": true,
      "show_sub_nextdate": true,
      "show_sub_enddate": true,
      "hidden_product_options": ["design style"]
    },
    "foxycomplete": {
      "usage": "required",
      "show_combobox": true,
      "combobox_open": "\u25bc",
      "combobox_close": "\u25b2",
      "show_flags": true
    },
    "custom_script_values": {
      "header": "\u003Cstyle\u003E\r\n.fc-cart__item__options {\r\ncolor: black;\r\n}\r\n.fc-cart__item__option__name {\r\n\/*display: none;*\/\r\nfont-weight: bold;\r\nfont-style: italic;\r\n}\r\n.fc-foxycomplete-list {\r\ncolor: black;\r\n}\r\n\r\n\r\n\/* Padlock icon in cart \"Checkout\" button *\/\r\n#fc .fa-lock {\r\n  fill: #FFFFFF;\r\n}\r\n\/* Cart\/Checkout buttons *\/\r\n#fc .fc-action--checkout--button, #fc .fc-button--subscription-cancel, #fc .fc-button--submit {\r\n  background: #163471;\r\n  background: linear-gradient(to bottom, #305fe1 0%, #163471 100%);\r\n  border-color: #305fe1;\r\n  color: white;\r\n  text-shadow: 1px 1px 0px #163471;\r\n}\r\n\/* Cart\/Checkout buttons - Hover *\/\r\n#fc .fc-action--checkout--button:hover, #fc .fc-action--checkout--button:focus, #fc .fc-button--subscription-cancel:hover, #fc .fc-button--subscription-cancel:focus, #fc .fc-button--submit:hover, #fc .fc-button--submit:focus {\r\n  background: #55aa3f;\r\n  border-color: #ec67825;\r\n  text-shadow: 1px 1px 0px #55aa3f;\r\n}\r\n\/* Sidecart top checkout button *\/\r\n[data-fc-sidecart] #fc .fc-fixed-button-right .fc-btn-action {\r\n  background: #163471;\r\n  background: linear-gradient(to bottom, #305fe1 0%, #163471 100%);\r\n  color: white;\r\n}\r\n\/* Sidecart top checkout button - Hover *\/\r\n[data-fc-sidecart] #fc .fc-fixed-button-right .fc-btn-action:hover {\r\n  background: #55aa3f;\r\n}\r\n\/* spinner action on checkout submit button *\/\r\n#fc .fc-button--submit .fc-spinner \u003E div {\r\n  background-color:#101a5c;\r\n}\r\n\r\n\/* Field Boxes Background *\/\r\n#fc .fc-input-group-container--active .fc-input-group-container__title--forced {\r\n    background-color: #dde8ff;\r\n}\r\n\r\n\/* Field Boxes move text right *\/\r\n#fc .fc-form-group .fc-input-group-container__title {\r\n    padding-left: 35px;\r\n}\r\n\r\n#fc .fc-input-group-container__title:before {\r\n    background: none;\r\n    border: 0px;\r\n}\r\n\r\n\/* Cart Empty Message Bubble *\/\r\n#fc .fc-messages__empty-notification {\r\n    background-color: #dde8ff;\r\n    border: 1px solid #333;\r\n}\r\n\r\n\u003C\/style\u003E",
      "footer": "\u003C!-- Adds Empty Cart Button --\u003E\r\n{% if cart_is_fullpage or context == \"checkout\" %}\r\n    \u003Cscript\u003E\r\n        FC.client.on('ready.done', addEmptyCartFull);\r\n\tFC.client.on('render.done', addEmptyCartFull);\r\n \r\n\tfunction addEmptyCartFull() {\r\n\t    var empty_cart = 'https:\/\/'+FC.settings.storedomain+'\/cart?cart=empty';\r\n\t    if (!$('#cart_empty').html()) {\r\n        \t$('.fc-cancel-continue-shopping.fc-container__grid').append(\"\u003Cspan id='cart_empty'\u003E\u003Ca href=\" + empty_cart + \" class='fc-button fc-button--cancel'\u003EEmpty Cart\u003C\/a\u003E\u003C\/span\u003E\");\r\n    \t    }\r\n\t}\r\n    \u003C\/script\u003E\r\n{% elseif context == \"cart\" %}\r\n    \u003Cscript\u003E\r\n        FC.client.on('render.done', addEmptyCartSide);\r\n \r\n        function addEmptyCartSide() {\r\n            var empty_cart = 'https:\/\/'+FC.settings.storedomain+'\/cart?cart=empty';\r\n            if (!$('#cart_empty').html()) {\r\n                $('#fc .fc-cart__title__header').after(\"\u003Cdiv id='cart_empty'\u003E\u003Ca href=\"+ empty_cart + \" class='fc-button fc-button--cancel'\u003EEmpty Cart\u003C\/a\u003E\u003C\/div\u003E\");\r\n            }\r\n        }\r\n    \u003C\/script\u003E\r\n{% endif %}\r\n\r\n\u003C!-- Installation Insurance --\u003E\r\n{% if context == \"checkout\" %}\r\n\u003Cscript\u003E\r\n  FC.client.on('cart-update.done', showInsuranceOption);\r\n  FC.client.on('cart-item-remove.done', showInsuranceOption);\r\n  FC.client.on('cart-submit.done', showInsuranceOption);\r\n  FC.client.on('cart-item-quantity-update.done', showInsuranceOption);\r\n\r\n  function showInsuranceOption(params) {\r\n    if (!params.data || (params.data && params.data.code != \"Installation Insurance\")) {\r\n      var insurance_id = 0;\r\n      for (var i=0; i\u003CFC.json.items.length; i++) {\r\n        if (FC.json.items[i].code == 'Installation Insurance' ) {\r\n          insurance_id = FC.json.items[i].id;\r\n        }\r\n      }\r\n\r\n      if (insurance_id != 0) {\r\n        FC.client.request(\"https:\/\/{{ config.store_domain }}\/cart?cart=update&quantity=0&id=\" +insurance_id+ \"\").done(function() {\r\n          FC[FC.json.context].render();\r\n        });\r\n        alert('Installation Insurance was removed because the order changed. You can re-add it with the new price in the \"Almost Done!\" section.');\r\n      }\r\n    }\r\n    FC.checkout.renderAdditionalFields();\r\n  }\r\n\u003C\/script\u003E\r\n{% endif %}",
      "checkout_fields": "\u003C!-- Installation Insurance Option --\u003E\r\n{% set insurance_in_cart = false %}\r\n{% set items_price = 0 %}\r\n{% for item in items %}\r\n{% if item.code != 'Installation Insurance' %}\r\n{% set items_price = items_price + item.price %}\r\n{% endif %}\r\n{% if item.code == 'Installation Insurance' %}\r\n{% set insurance_in_cart = true %}\r\n{% endif %}\r\n{% endfor %}\r\n\r\n{% set insurance_price = (items_price*0.236)|number_format(2) %}\r\n\u003Cdiv class=\"fc-form-group\"\u003E\r\n  \u003Cdiv class=\"col-md-8 col-md-offset-3\"\u003E\r\n    \u003Cdiv class=\"fc-input-group-container fc-input-group-container--checkbox fc-input-group-container--active\"\u003E\r\n      {% if not insurance_in_cart and item_count != 0 %}\r\n      \u003Ca href=\"https:\/\/{{ config.store_domain }}\/cart?name=Installation+Insurance&price={{ insurance_price }}&code=covered&quantity_max=1\"\u003EClick to add Installation Insurance to your order for ${{ insurance_price }}.\u003C\/a\u003E\r\n      {% elseif insurance_in_cart %}\r\n      There is Installation Insurance on your order. To cancel it, remove the \u003Cb\u003EInstallation Insurance\u003C\/b\u003E from the cart.\r\n      {% else %}\r\n      Add items to the cart to see the Installation Insurance option.\r\n      {% endif %}\r\n    \u003C\/div\u003E\r\n  \u003C\/div\u003E\r\n\u003C\/div\u003E\r\n\r\n\u003C!-- Added Form Sections --\u003E\r\n\u003Cdiv class=\"fc-form-group \"\u003E\r\n\t\u003Cdiv class=\"col-sm-8 col-sm-offset-3\" data-fc-error-for=\"referral_source\" data-fc-error-class=\"fc-alert-container--error\"\u003E\r\n\t\t\u003Cdiv class=\"fc-input-group-container fc-input-group-container--checkbox fc-input-group-container--active\"\u003E\r\n\t\t\t\u003Clabel class=\"fc-input-group-container__title fc-input-group-container__title--forced fc-form-label\"\u003E\r\n\t\t\t\tReferred by\u2026 (required)\r\n\t\t\t\u003C\/label\u003E\r\n\t\t\t\u003Cdiv class=\"fc-form-group\"\u003E\r\n\t\t\t\t\u003Cp\u003EPlease let us know who referred you.\u003C\/p\u003E\r\n\t\t\t\t\u003Cinput type=\"text\" id=\"referral_source\" name=\"referral_source\" placeholder=\"\" autocomplete=\"off\" class=\"fc-form-control\" formnovalidate=\"\" aria-required=\"true\" value=\"{{ referral_source }}\" data-fc-required\u003E\r\n\t\t\t\u003C\/div\u003E\r\n\t\t\u003C\/div\u003E\r\n\t\u003C\/div\u003E\r\n\u003C\/div\u003E\r\n \r\n\u003Cdiv class=\"fc-form-group\"\u003E\r\n    \u003Cdiv class=\"col-sm-8 col-sm-offset-3\"\u003E\r\n        \u003Cdiv class=\"fc-input-group-container fc-input-group-container--textarea fc-input-group-container--active\"\u003E\r\n            \u003Clabel class=\"fc-input-group-container__title fc-input-group-container__title--forced fc-form-label\"\u003E\r\n                Order Notes (optional)\r\n            \u003C\/label\u003E\r\n            \u003Cdiv class=\"fc-form-group\"\u003E\r\n                \u003Ctextarea name=\"Order_Notes\" id=\"Order_Notes\" aria-required=\"false\" autocomplete=\"off\" class=\"fc-form-control\" placeholder=\"Questions? Feedback? Let us know!\" style=\"background:#fff; height:5em;\"\u003E{{ Order_Notes }}\u003C\/textarea\u003E\r\n            \u003C\/div\u003E\r\n        \u003C\/div\u003E\r\n    \u003C\/div\u003E\r\n\u003C\/div\u003E",
      "multiship_checkout_fields": ""
    },
    "http_receipt": false,
    "custom_config": [],
    "debug": {
      "usage": "none"
    },
    "location_filtering": {
      "usage": "none",
      "shipping_filter_type": "blacklist",
      "billing_filter_type": "blacklist",
      "shipping_filter_values": [],
      "billing_filter_values": []
    },
    "postal_code_lookup": {
      "usage": "enabled"
    }
  },
  "with_controls": true,
  "lang": {
    "cart_add_coupon": "Add Coupon",
    "cart_add_coupon_and_gift_card": "Add Coupon or Gift Card",
    "cart_add_gift_card": "Add Gift Card",
    "cart_apply": "Apply",
    "cart_calculate": "Calculate",
    "cart_calculate_shipping": "Calculate Shipping",
    "cart_calculate_taxes": "Calculate Taxes",
    "cart_cancel_and_continue": "Continue Shopping",
    "cart_caption": "Your Cart",
    "cart_category": "Category",
    "cart_change": "Change",
    "cart_checkout": "Proceed to Checkout",
    "cart_code": "Code",
    "cart_coupon_code": "Coupon Code",
    "cart_details": "Details",
    "cart_discounts": "Discounts",
    "cart_each": "each",
    "cart_end_date": "End Date",
    "cart_empty": "Your shopping cart is empty. Click here to return to the store.",
    "cart_error_postal_code": "We could not find that postal code.",
    "cart_error_postal_code_lookup": "We do not currently allow orders from this region.",
    "cart_error_title": "Oops. There was a problem.",
    "cart_frequency": "Frequency",
    "cart_future_charge": "Next Charge",
    "cart_future_charges": "Next Charges",
    "cart_hide_coupon_input": "Hide Coupon Input",
    "cart_in_your_order": "in your order",
    "cart_item": "Item",
    "cart_items": "Items",
    "cart_keep_shopping": "Keep Shopping",
    "cart_next_date": "Next Date",
    "cart_no_javascript_message": "Our checkout process requires javascript. Please \u003Ca href=\"http:\/\/www.google.com\/support\/bin\/answer.py?answer=23852\" target=\"_blank\"\u003Eclick here to enable javascript\u003C\/a\u003E. You may then click the checkout button below, or refresh this page to make changes to your cart.",
    "cart_notice_quantity_max": " is greater than the maximum allowed quantity. The quantity has been adjusted accordingly.",
    "cart_notice_quantity_min": " is less than the minimum allowed quantity. The quantity has been adjusted accordingly.",
    "cart_or": "or",
    "cart_order_summary": "Order Summary",
    "cart_order_total": "Order Total",
    "cart_price": "Price",
    "cart_qty": "Qty",
    "cart_quantity": "Quantity",
    "cart_remove_item": "Remove this item",
    "cart_shipping_to": "Shipping to...",
    "cart_shipping_and_handling": "Shipping & Handling",
    "cart_shipto": "Ship To: ",
    "cart_shipto_default": "Me",
    "cart_start_date": "Start Date",
    "cart_subscription_details": "Subscription Details",
    "cart_subtotal": "Subtotal",
    "cart_tax": "Tax",
    "cart_tbd": "TBD",
    "cart_todays_charge": "Today's Charge",
    "cart_total": "Total",
    "cart_warning": "Warning:",
    "cart_weight": "Weight",
    "checkout_city": "City",
    "checkout_country": "Country",
    "checkout_loading": "Loading...",
    "checkout_location_state": "State",
    "checkout_location_canton": "Canton",
    "checkout_location_county": "County",
    "checkout_location_other": "Other...",
    "checkout_location_pincode": "PIN Code",
    "checkout_location_postalcode": "Postcode",
    "checkout_location_prefecture": "Prefecture",
    "checkout_location_province": "Province",
    "checkout_location_zipcode": "ZIP code",
    "checkout_submit_postal_code": "Go!",
    "email_order_number": "Order #",
    "gateway_authentication_error": "\u003Cstrong\u003EAuthentication Failed:\u003C\/strong\u003E Your card issuer cannot authenticate this card. Please select another card or form of payment to complete your purchase.",
    "gateway_error_unknown": "\u003Cstrong\u003EError:\u003C\/strong\u003E There was an unknown gateway error. Due to the nature of this error, you may want to contact us to ensure your card wasn't already charged and\/or to process your order manually."
  },
  "locations": {
    "AF": {
      "cn": "Afghanistan",
      "cc2": "AF",
      "cc3": "AFG",
      "ccnum": "004",
      "alt": ["Afghanestan", "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "AX": {
      "cn": "\u00c5land Islands",
      "cc2": "AX",
      "cc3": "ALA",
      "ccnum": "248",
      "alt": ["Landskapet \u00c5land", "Aaland", "Aland"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "22\\d{3}"
      },
      "active": true
    },
    "AL": {
      "cn": "Albania",
      "cc2": "AL",
      "cc3": "ALB",
      "ccnum": "008",
      "alt": ["Shqip\u00ebria"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "DZ": {
      "cn": "Algeria",
      "cc2": "DZ",
      "cc3": "DZA",
      "ccnum": "012",
      "alt": ["Al-Jaz\u0101'ir", "\u0627\u0644\u062c\u0632\u0627\u0626\u0631"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "AS": {
      "cn": "American Samoa",
      "cc2": "AS",
      "cc3": "ASM",
      "ccnum": "016",
      "alt": ["Amerika S\u0101moa"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "96799"
      },
      "active": true
    },
    "AD": {
      "cn": "Andorra",
      "cc2": "AD",
      "cc3": "AND",
      "ccnum": "020",
      "alt": [],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "AD[1-7]0\\d"
      },
      "active": true
    },
    "AO": {
      "cn": "Angola",
      "cc2": "AO",
      "cc3": "AGO",
      "ccnum": "024",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "AI": {
      "cn": "Anguilla",
      "cc2": "AI",
      "cc3": "AIA",
      "ccnum": "660",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "2640"
      },
      "active": true
    },
    "AQ": {
      "cn": "Antarctica",
      "cc2": "AQ",
      "cc3": "ATA",
      "ccnum": "010",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "AG": {
      "cn": "Antigua and Barbuda",
      "cc2": "AG",
      "cc3": "ATG",
      "ccnum": "028",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "AR": {
      "cn": "Argentina",
      "cc2": "AR",
      "cc3": "ARG",
      "ccnum": "032",
      "alt": [],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "([A-HJ-NP-Z])?\\d{4}([A-Z]{3})?"
      },
      "active": true
    },
    "AM": {
      "cn": "Armenia",
      "cc2": "AM",
      "cc3": "ARM",
      "ccnum": "051",
      "alt": ["Hayast\u00e1n", "\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "(37)?\\d{4}"
      },
      "active": true
    },
    "AW": {
      "cn": "Aruba",
      "cc2": "AW",
      "cc3": "ABW",
      "ccnum": "533",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "AU": {
      "cn": "Australia",
      "cc2": "AU",
      "cc3": "AUS",
      "ccnum": "036",
      "alt": [],
      "boost": 4,
      "r": {
        "options": {
          "ACT": {
            "n": "Australian Capital Territory",
            "c": "ACT",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NSW": {
            "n": "New South Wales",
            "c": "NSW",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NT": {
            "n": "Northern Territory",
            "c": "NT",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "QLD": {
            "n": "Queensland",
            "c": "QLD",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "SA": {
            "n": "South Australia",
            "c": "SA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "TAS": {
            "n": "Tasmania",
            "c": "TAS",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "VIC": {
            "n": "Victoria",
            "c": "VIC",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "WA": {
            "n": "Western Australia",
            "c": "WA",
            "alt": [],
            "boost": 1,
            "active": true
          }
        },
        "req": true,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "AT": {
      "cn": "Austria",
      "cc2": "AT",
      "cc3": "AUT",
      "ccnum": "040",
      "alt": ["\u00d6sterreich"],
      "boost": 3,
      "r": {
        "options": {
          "BL": {
            "n": "Burgenland",
            "c": "BL",
            "alt": ["Gradi\u0161\u0107e", "\u0150rvid\u00e9k", "Fels\u0151\u0151rvid\u00e9k", "V\u00e1rvid\u00e9k", "Gradi\u0161\u010danska", "Gradi\u0161\u010de"],
            "boost": 1,
            "active": true
          },
          "KN": {
            "n": "Kaernten",
            "c": "KN",
            "alt": ["K\u00e4rnten", "Carinthia", "Koro\u0161ka"],
            "boost": 1,
            "active": true
          },
          "NO": {
            "n": "Niederoesterreich",
            "c": "NO",
            "alt": ["Nieder\u00f6sterreich", "Lower Austria"],
            "boost": 1,
            "active": true
          },
          "OO": {
            "n": "Oberoesterreich",
            "c": "OO",
            "alt": ["Ober\u00f6sterreich", "Upper Austria", "Horn\u00ed Rakousy", "Oba\u00f6starreich"],
            "boost": 1,
            "active": true
          },
          "SB": {
            "n": "Salzburg",
            "c": "SB",
            "alt": ["S\u00e5izburg"],
            "boost": 1,
            "active": true
          },
          "ST": {
            "n": "Steiermark",
            "c": "ST",
            "alt": ["Styria", "\u0160tajerska"],
            "boost": 1,
            "active": true
          },
          "TI": {
            "n": "Tirol",
            "c": "TI",
            "alt": ["Tyrol"],
            "boost": 1,
            "active": true
          },
          "VB": {
            "n": "Voralberg",
            "c": "VB",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "WI": {
            "n": "Wien",
            "c": "WI",
            "alt": ["Vienna"],
            "boost": 1,
            "active": true
          }
        },
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "AZ": {
      "cn": "Azerbaijan",
      "cc2": "AZ",
      "cc3": "AZE",
      "ccnum": "031",
      "alt": ["Az\u0259rbaycan"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "BS": {
      "cn": "Bahamas",
      "cc2": "BS",
      "cc3": "BHS",
      "ccnum": "044",
      "alt": ["The Bahamas"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "BH": {
      "cn": "Bahrain",
      "cc2": "BH",
      "cc3": "BHR",
      "ccnum": "048",
      "alt": ["Al-Ba\u1e25rayn", "\u0627\u0644\u0628\u062d\u0631\u064a\u0646"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "((\\d|1[0-2])\\d{2})?"
      },
      "active": true
    },
    "BD": {
      "cn": "Bangladesh",
      "cc2": "BD",
      "cc3": "BGD",
      "ccnum": "050",
      "alt": ["\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "BB": {
      "cn": "Barbados",
      "cc2": "BB",
      "cc3": "BRB",
      "ccnum": "052",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "(BB\\d{5})?"
      },
      "active": true
    },
    "BY": {
      "cn": "Belarus",
      "cc2": "BY",
      "cc3": "BLR",
      "ccnum": "112",
      "alt": ["\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c", "Bie\u0142aru\u015b", "Belorussiya", "Belorussi\u00e2", "\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u0438\u044f"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "BE": {
      "cn": "Belgium",
      "cc2": "BE",
      "cc3": "BEL",
      "ccnum": "056",
      "alt": ["Belgi\u00eb", "Belgique", "Belgien"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "BZ": {
      "cn": "Belize",
      "cc2": "BZ",
      "cc3": "BLZ",
      "ccnum": "084",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "BJ": {
      "cn": "Benin",
      "cc2": "BJ",
      "cc3": "BEN",
      "ccnum": "204",
      "alt": ["B\u00e9nin"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "BM": {
      "cn": "Bermuda",
      "cc2": "BM",
      "cc3": "BMU",
      "ccnum": "060",
      "alt": [],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "[A-Z]{2}[ ]?[A-Z0-9]{2}"
      },
      "active": true
    },
    "BT": {
      "cn": "Bhutan",
      "cc2": "BT",
      "cc3": "BTN",
      "ccnum": "064",
      "alt": ["Druk Yul", "\u0f60\u0f56\u0fb2\u0f74\u0f42\u0f0b\u0f61\u0f74\u0f63"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "BO": {
      "cn": "Bolivia",
      "cc2": "BO",
      "cc3": "BOL",
      "ccnum": "068",
      "alt": ["Bulivya Mamallaqta", "Wuliwya Suyu", "Vol\u00edvia", "Bolivia, Plurinational State of"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "BQ": {
      "cn": "Bonaire, Sint Eustatius and Saba",
      "cc2": "BQ",
      "cc3": "BES",
      "ccnum": "535",
      "alt": ["Caribbean Netherlands", "Caribisch Nederland", "Bonaire", "Boneiru", "Sint Eustatius", "Statia", "Statius", "Saba"],
      "boost": 1.5,
      "r": {
        "options": {
          "BO": {
            "n": "Bonaire",
            "c": "BO",
            "alt": ["Boneiru"],
            "boost": 1,
            "active": true
          },
          "SA": {
            "n": "Saba",
            "c": "SA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "SE": {
            "n": "Sint Eustatius",
            "c": "SE",
            "alt": ["Statia", "Statius"],
            "boost": 1,
            "active": true
          }
        },
        "req": true,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "BA": {
      "cn": "Bosnia and Herzegovina",
      "cc2": "BA",
      "cc3": "BIH",
      "ccnum": "070",
      "alt": ["Bosna i Hercegovina", "\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "BW": {
      "cn": "Botswana",
      "cc2": "BW",
      "cc3": "BWA",
      "ccnum": "072",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "BV": {
      "cn": "Bouvet Island",
      "cc2": "BV",
      "cc3": "BVT",
      "ccnum": "074",
      "alt": ["Bouvet\u00f8ya"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "BR": {
      "cn": "Brazil",
      "cc2": "BR",
      "cc3": "BRA",
      "ccnum": "076",
      "alt": ["Brasil"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "\\d{5}[\\-]?\\d{3}"
      },
      "active": true
    },
    "IO": {
      "cn": "British Indian Ocean Territory",
      "cc2": "IO",
      "cc3": "IOT",
      "ccnum": "086",
      "alt": ["Chagos Islands"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "BBND 1ZZ"
      },
      "active": true
    },
    "BN": {
      "cn": "Brunei Darussalam",
      "cc2": "BN",
      "cc3": "BRN",
      "ccnum": "096",
      "alt": ["\u0628\u0631\u0648\u0646\u064a"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "[A-Z]{2}[ ]?\\d{4}"
      },
      "active": true
    },
    "BG": {
      "cn": "Bulgaria",
      "cc2": "BG",
      "cc3": "BGR",
      "ccnum": "100",
      "alt": ["Bulgariya", "B\u0103lgarija", "\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "BF": {
      "cn": "Burkina Faso",
      "cc2": "BF",
      "cc3": "BFA",
      "ccnum": "854",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "BI": {
      "cn": "Burundi",
      "cc2": "BI",
      "cc3": "BDI",
      "ccnum": "108",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "KH": {
      "cn": "Cambodia",
      "cc2": "KH",
      "cc3": "KHM",
      "ccnum": "116",
      "alt": ["Kampuchea", "\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "CM": {
      "cn": "Cameroon",
      "cc2": "CM",
      "cc3": "CMR",
      "ccnum": "120",
      "alt": ["Cameroun"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "CA": {
      "cn": "Canada",
      "cc2": "CA",
      "cc3": "CAN",
      "ccnum": "124",
      "alt": [],
      "boost": 4,
      "r": {
        "options": {
          "AB": {
            "n": "Alberta",
            "c": "AB",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "BC": {
            "n": "British Columbia",
            "c": "BC",
            "alt": ["la Colombie-Britannique"],
            "boost": 1,
            "active": true
          },
          "MB": {
            "n": "Manitoba",
            "c": "MB",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NB": {
            "n": "New Brunswick",
            "c": "NB",
            "alt": ["Nouveau-Brunswick"],
            "boost": 1,
            "active": true
          },
          "NL": {
            "n": "Newfoundland and Labrador",
            "c": "NL",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NT": {
            "n": "Northwest Territories",
            "c": "NT",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NS": {
            "n": "Nova Scotia",
            "c": "NS",
            "alt": ["Nouvelle-\u00c9cosse", "Alba Nuadh"],
            "boost": 1,
            "active": true
          },
          "NU": {
            "n": "Nunavut",
            "c": "NU",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "ON": {
            "n": "Ontario",
            "c": "ON",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "PE": {
            "n": "Prince Edward Island",
            "c": "PE",
            "alt": ["\u00cele-du-Prince-\u00c9douard", "Eilean a' Phrionnsa"],
            "boost": 1,
            "active": true
          },
          "QC": {
            "n": "Quebec",
            "c": "QC",
            "alt": ["Qu\u00e9bec"],
            "boost": 1,
            "active": true
          },
          "SK": {
            "n": "Saskatchewan",
            "c": "SK",
            "alt": [],
            "boost": 2,
            "active": true
          },
          "YT": {
            "n": "Yukon",
            "c": "YT",
            "alt": ["Yukon Territory"],
            "boost": 1,
            "active": true
          }
        },
        "req": true,
        "lang": "province"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][ ]?\\d[ABCEGHJ-NPRSTV-Z]\\d"
      },
      "active": true
    },
    "CV": {
      "cn": "Cape Verde",
      "cc2": "CV",
      "cc3": "CPV",
      "ccnum": "132",
      "alt": ["Cabo Verde"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "CW": {
      "cn": "Cura\u00e7ao",
      "cc2": "CW",
      "cc3": "CUW",
      "ccnum": "531",
      "alt": ["K\u00f2rsou"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "KY": {
      "cn": "Cayman Islands",
      "cc2": "KY",
      "cc3": "CYM",
      "ccnum": "136",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "KY\\d-\\d{4}"
      },
      "active": true
    },
    "CF": {
      "cn": "Central African Republic",
      "cc2": "CF",
      "cc3": "CAF",
      "ccnum": "140",
      "alt": ["R\u00e9publique Centrafricaine", "K\u00f6d\u00f6r\u00f6s\u00ease t\u00ee B\u00eaafr\u00eeka"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "TD": {
      "cn": "Chad",
      "cc2": "TD",
      "cc3": "TCD",
      "ccnum": "148",
      "alt": ["Tchad", "T\u0161\u0101d", "\u062a\u0634\u0627\u062f"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "CL": {
      "cn": "Chile",
      "cc2": "CL",
      "cc3": "CHL",
      "ccnum": "152",
      "alt": [],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{7}"
      },
      "active": true
    },
    "CN": {
      "cn": "China",
      "cc2": "CN",
      "cc3": "CHN",
      "ccnum": "156",
      "alt": ["\u4e2d\u56fd", "Zh\u014dnggu\u00f3", "Zh\u014dnghu\u00e1 R\u00e9nm\u00edn G\u00f2ngh\u00e9gu\u00f3"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "CX": {
      "cn": "Christmas Island",
      "cc2": "CX",
      "cc3": "CXR",
      "ccnum": "162",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "6798"
      },
      "active": true
    },
    "CC": {
      "cn": "Cocos (Keeling) Islands",
      "cc2": "CC",
      "cc3": "CCK",
      "ccnum": "166",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "6799"
      },
      "active": true
    },
    "CO": {
      "cn": "Colombia",
      "cc2": "CO",
      "cc3": "COL",
      "ccnum": "170",
      "alt": [],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "KM": {
      "cn": "Comoros",
      "cc2": "KM",
      "cc3": "COM",
      "ccnum": "174",
      "alt": ["Komori", "Juzur al-Qamar", "\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631", "Comores"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "CG": {
      "cn": "Congo",
      "cc2": "CG",
      "cc3": "COG",
      "ccnum": "178",
      "alt": ["Congo-Brazza"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "CD": {
      "cn": "Congo,\tthe Democratic Republic of the",
      "cc2": "CD",
      "cc3": "COD",
      "ccnum": "180",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "CK": {
      "cn": "Cook Islands",
      "cc2": "CK",
      "cc3": "COK",
      "ccnum": "184",
      "alt": [],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "CR": {
      "cn": "Costa Rica",
      "cc2": "CR",
      "cc3": "CRI",
      "ccnum": "188",
      "alt": [],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4,5}|\\d{3}-\\d{4}"
      },
      "active": true
    },
    "CI": {
      "cn": "Cote DIvoire",
      "cc2": "CI",
      "cc3": "CIV",
      "ccnum": "384",
      "alt": ["C\u00f4te d'Ivoire"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "HR": {
      "cn": "Croatia",
      "cc2": "HR",
      "cc3": "HRV",
      "ccnum": "191",
      "alt": ["Hrvatska"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "CU": {
      "cn": "Cuba",
      "cc2": "CU",
      "cc3": "CUB",
      "ccnum": "192",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "CY": {
      "cn": "Cyprus",
      "cc2": "CY",
      "cc3": "CYP",
      "ccnum": "196",
      "alt": ["Kypros", "\u039a\u03cd\u03c0\u03c1\u03bf\u03c2", "K\u0131br\u0131s"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "CZ": {
      "cn": "Czech Republic",
      "cc2": "CZ",
      "cc3": "CZE",
      "ccnum": "203",
      "alt": ["\u010cesk\u00e1 republika", "\u010cesko", "Czechia"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{3}[ ]?\\d{2}"
      },
      "active": true
    },
    "DK": {
      "cn": "Denmark",
      "cc2": "DK",
      "cc3": "DNK",
      "ccnum": "208",
      "alt": ["Danmark"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "DJ": {
      "cn": "Djibouti",
      "cc2": "DJ",
      "cc3": "DJI",
      "ccnum": "262",
      "alt": ["J\u012bb\u016bt\u012b", "\u062c\u064a\u0628\u0648\u062a\u064a", "Djibouti"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "DM": {
      "cn": "Dominica",
      "cc2": "DM",
      "cc3": "DMA",
      "ccnum": "212",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "DO": {
      "cn": "Dominican Republic",
      "cc2": "DO",
      "cc3": "DOM",
      "ccnum": "214",
      "alt": ["Rep\u00fablica Dominicana"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "EC": {
      "cn": "Ecuador",
      "cc2": "EC",
      "cc3": "ECU",
      "ccnum": "218",
      "alt": [],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "([A-Z]\\d{4}[A-Z]|(?:[A-Z]{2})?\\d{6})?"
      },
      "active": true
    },
    "EG": {
      "cn": "Egypt",
      "cc2": "EG",
      "cc3": "EGY",
      "ccnum": "818",
      "alt": ["Misr", "Masr", "\u0645\u0635\u0631"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "SV": {
      "cn": "El Salvador",
      "cc2": "SV",
      "cc3": "SLV",
      "ccnum": "222",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "CP [1-3][1-7][0-2]\\d"
      },
      "active": true
    },
    "SX": {
      "cn": "Sint Maarten",
      "cc2": "SX",
      "cc3": "SXM",
      "ccnum": "534",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "GQ": {
      "cn": "Equatorial Guinea",
      "cc2": "GQ",
      "cc3": "GNQ",
      "ccnum": "226",
      "alt": ["Guinea Ecuatorial"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "ER": {
      "cn": "Eritrea",
      "cc2": "ER",
      "cc3": "ERI",
      "ccnum": "232",
      "alt": ["Iritriya", "\u0625\u0631\u062a\u0631\u064a\u0627", "Erta", "\u12a4\u122d\u1275\u122b"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "EE": {
      "cn": "Estonia",
      "cc2": "EE",
      "cc3": "EST",
      "ccnum": "233",
      "alt": ["Eesti"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "ET": {
      "cn": "Ethiopia",
      "cc2": "ET",
      "cc3": "ETH",
      "ccnum": "231",
      "alt": ["Ityop'ia", "\u12a2\u1275\u12ee\u1332\u12eb", "\u12a2\u1275\u12ee\u1335\u12eb"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "FK": {
      "cn": "Falkland Islands (Malvinas)",
      "cc2": "FK",
      "cc3": "FLK",
      "ccnum": "238",
      "alt": ["Islas Malvinas"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "FIQQ 1ZZ"
      },
      "active": true
    },
    "FO": {
      "cn": "Faroe Islands",
      "cc2": "FO",
      "cc3": "FRO",
      "ccnum": "234",
      "alt": ["F\u00f8royar", "F\u00e6r\u00f8erne"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{3}"
      },
      "active": true
    },
    "FJ": {
      "cn": "Fiji",
      "cc2": "FJ",
      "cc3": "FJI",
      "ccnum": "242",
      "alt": ["Viti", "\u092b\u093c\u093f\u091c\u0940"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "FI": {
      "cn": "Finland",
      "cc2": "FI",
      "cc3": "FIN",
      "ccnum": "246",
      "alt": ["Suomi"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "FR": {
      "cn": "France",
      "cc2": "FR",
      "cc3": "FRA",
      "ccnum": "250",
      "alt": [],
      "boost": 3.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{2}[ ]?\\d{3}"
      },
      "active": true
    },
    "GF": {
      "cn": "French Guiana",
      "cc2": "GF",
      "cc3": "GUF",
      "ccnum": "254",
      "alt": ["Guyane"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "9[78]3\\d{2}"
      },
      "active": true
    },
    "PF": {
      "cn": "French Polynesia",
      "cc2": "PF",
      "cc3": "PYF",
      "ccnum": "258",
      "alt": ["Polyn\u00e9sie fran\u00e7aise"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "987\\d{2}"
      },
      "active": true
    },
    "TF": {
      "cn": "French Southern Territories",
      "cc2": "TF",
      "cc3": "ATF",
      "ccnum": "260",
      "alt": ["Terres australes et antarctiques fran\u00e7aises", "French Southern and Antarctic Lands"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "GA": {
      "cn": "Gabon",
      "cc2": "GA",
      "cc3": "GAB",
      "ccnum": "266",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "GM": {
      "cn": "Gambia",
      "cc2": "GM",
      "cc3": "GMB",
      "ccnum": "270",
      "alt": ["The Gambia"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "GE": {
      "cn": "Georgia",
      "cc2": "GE",
      "cc3": "GEO",
      "ccnum": "268",
      "alt": ["Sak'art'velo", "\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "DE": {
      "cn": "Germany",
      "cc2": "DE",
      "cc3": "DEU",
      "ccnum": "276",
      "alt": ["Deutschland"],
      "boost": 4,
      "r": {
        "options": {
          "BW": {
            "n": "Baden-Wuerttemberg",
            "c": "BW",
            "alt": ["Baden-W\u00fcrttemberg"],
            "boost": 1,
            "active": true
          },
          "BY": {
            "n": "Bayern",
            "c": "BY",
            "alt": ["Bavaria", "Freistaat Bayern"],
            "boost": 1,
            "active": true
          },
          "BE": {
            "n": "Berlin",
            "c": "BE",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "BB": {
            "n": "Brandenburg",
            "c": "BB",
            "alt": ["Bramborska", "Braniborska"],
            "boost": 1,
            "active": true
          },
          "HB": {
            "n": "Bremen",
            "c": "HB",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "HH": {
            "n": "Hamburg",
            "c": "HH",
            "alt": ["Hamborg"],
            "boost": 1,
            "active": true
          },
          "HE": {
            "n": "Hessen",
            "c": "HE",
            "alt": ["Hesse", "Hessia"],
            "boost": 1,
            "active": true
          },
          "MV": {
            "n": "Mecklenburg-Vorpommern",
            "c": "MV",
            "alt": ["Mecklenburg-Western Pomerania"],
            "boost": 1,
            "active": true
          },
          "NI": {
            "n": "Niedersachsen",
            "c": "NI",
            "alt": ["Neddersassen", "Lower Saxony"],
            "boost": 1,
            "active": true
          },
          "NW": {
            "n": "Nordrhein-Westfalen",
            "c": "NW",
            "alt": ["North Rhine-Westphalia"],
            "boost": 1,
            "active": true
          },
          "RP": {
            "n": "Rheinland-Pfalz",
            "c": "RP",
            "alt": ["Rhineland-Palatinate"],
            "boost": 1,
            "active": true
          },
          "SL": {
            "n": "Saarland",
            "c": "SL",
            "alt": ["Sarre"],
            "boost": 1,
            "active": true
          },
          "SN": {
            "n": "Sachsen",
            "c": "SN",
            "alt": ["Saxony", "Sakska"],
            "boost": 1,
            "active": true
          },
          "ST": {
            "n": "Sachsen-Anhalt",
            "c": "ST",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "SH": {
            "n": "Schleswig-Holstein",
            "c": "SH",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "TH": {
            "n": "Thueringen",
            "c": "TH",
            "alt": ["Thuringia", "Th\u00fcringen"],
            "boost": 1,
            "active": true
          }
        },
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "GH": {
      "cn": "Ghana",
      "cc2": "GH",
      "cc3": "GHA",
      "ccnum": "288",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "GI": {
      "cn": "Gibraltar",
      "cc2": "GI",
      "cc3": "GIB",
      "ccnum": "292",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "GX11 1AA"
      },
      "active": true
    },
    "GR": {
      "cn": "Greece",
      "cc2": "GR",
      "cc3": "GRC",
      "ccnum": "300",
      "alt": ["Hellas", "\u0395\u03bb\u03bb\u03ac\u03c2", "Ellada", "\u0395\u03bb\u03bb\u03ac\u03b4\u03b1"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{3} ?\\d{2}"
      },
      "active": true
    },
    "GL": {
      "cn": "Greenland",
      "cc2": "GL",
      "cc3": "GRL",
      "ccnum": "304",
      "alt": ["Kalaallit Nunaat", "Gr\u00f8nland"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "39\\d{2}"
      },
      "active": true
    },
    "GD": {
      "cn": "Grenada",
      "cc2": "GD",
      "cc3": "GRD",
      "ccnum": "308",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "GP": {
      "cn": "Guadeloupe",
      "cc2": "GP",
      "cc3": "GLP",
      "ccnum": "312",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "9[78][01]\\d{2}"
      },
      "active": true
    },
    "GU": {
      "cn": "Guam",
      "cc2": "GU",
      "cc3": "GUM",
      "ccnum": "316",
      "alt": [],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "969([12]\\d|3[12])([ \\-]\\d{4})?"
      },
      "active": true
    },
    "GT": {
      "cn": "Guatemala",
      "cc2": "GT",
      "cc3": "GTM",
      "ccnum": "320",
      "alt": [],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "GG": {
      "cn": "Guernsey",
      "cc2": "GG",
      "cc3": "GGY",
      "ccnum": "831",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "GY\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}"
      },
      "active": true
    },
    "GN": {
      "cn": "Guinea",
      "cc2": "GN",
      "cc3": "GIN",
      "ccnum": "324",
      "alt": ["Guin\u00e9e", "Gine"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{3}"
      },
      "active": true
    },
    "GW": {
      "cn": "Guinea-bissau",
      "cc2": "GW",
      "cc3": "GNB",
      "ccnum": "624",
      "alt": ["Guin\u00e9-Bissau"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "GY": {
      "cn": "Guyana",
      "cc2": "GY",
      "cc3": "GUY",
      "ccnum": "328",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "HT": {
      "cn": "Haiti",
      "cc2": "HT",
      "cc3": "HTI",
      "ccnum": "332",
      "alt": ["Ha\u00efti", "Ayiti"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "HM": {
      "cn": "Heard Island and McDonald Island",
      "cc2": "HM",
      "cc3": "HMD",
      "ccnum": "334",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "VA": {
      "cn": "Holy See (Vatican City State)",
      "cc2": "VA",
      "cc3": "VAT",
      "ccnum": "336",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "00120"
      },
      "active": true
    },
    "HN": {
      "cn": "Honduras",
      "cc2": "HN",
      "cc3": "HND",
      "ccnum": "340",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "(?:\\d{5})?"
      },
      "active": true
    },
    "HK": {
      "cn": "Hong Kong",
      "cc2": "HK",
      "cc3": "HKG",
      "ccnum": "344",
      "alt": [],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "HU": {
      "cn": "Hungary",
      "cc2": "HU",
      "cc3": "HUN",
      "ccnum": "348",
      "alt": ["Magyarorsz\u00e1g"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "IS": {
      "cn": "Iceland",
      "cc2": "IS",
      "cc3": "ISL",
      "ccnum": "352",
      "alt": ["\u00cdsland"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{3}"
      },
      "active": true
    },
    "IN": {
      "cn": "India",
      "cc2": "IN",
      "cc3": "IND",
      "ccnum": "356",
      "alt": ["Bh\u0101rat", "Hindust\u0101n", "\u092d\u093e\u0930\u0924", "\u0939\u093f\u0902\u0926\u0941\u0938\u094d\u0924\u093e\u0928"],
      "boost": 3,
      "r": {
        "options": {
          "AN": {
            "n": "Andaman and Nicobar Islands",
            "c": "AN",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "AP": {
            "n": "Andhra Pradesh",
            "c": "AP",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "AR": {
            "n": "Arunachal Pradesh",
            "c": "AR",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "AS": {
            "n": "Assam",
            "c": "AS",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "BR": {
            "n": "Bihar",
            "c": "BR",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "CH": {
            "n": "Chandigarh",
            "c": "CH",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "CT": {
            "n": "Chhattisgarh",
            "c": "CT",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "DN": {
            "n": "Dadra and Nagar Haveli",
            "c": "DN",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "DD": {
            "n": "Daman and Diu",
            "c": "DD",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "DL": {
            "n": "Delhi",
            "c": "DL",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "GA": {
            "n": "Goa",
            "c": "GA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "GJ": {
            "n": "Gujarat",
            "c": "GJ",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "HR": {
            "n": "Haryana",
            "c": "HR",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "HP": {
            "n": "Himachal Pradesh",
            "c": "HP",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "JK": {
            "n": "Jammu and Kashmir",
            "c": "JK",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "JH": {
            "n": "Jharkhand",
            "c": "JH",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "KA": {
            "n": "Karnataka",
            "c": "KA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "KL": {
            "n": "Kerala",
            "c": "KL",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "LD": {
            "n": "Lakshadweep",
            "c": "LD",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MP": {
            "n": "Madhya Pradesh",
            "c": "MP",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MH": {
            "n": "Maharashtra",
            "c": "MH",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MN": {
            "n": "Manipur",
            "c": "MN",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "ML": {
            "n": "Meghalaya",
            "c": "ML",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MZ": {
            "n": "Mizoram",
            "c": "MZ",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NL": {
            "n": "Nagaland",
            "c": "NL",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "OR": {
            "n": "Odisha",
            "c": "OR",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "PY": {
            "n": "Puducherry",
            "c": "PY",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "PB": {
            "n": "Punjab",
            "c": "PB",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "RJ": {
            "n": "Rajasthan",
            "c": "RJ",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "SK": {
            "n": "Sikkim",
            "c": "SK",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "TN": {
            "n": "Tamil Nadu",
            "c": "TN",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "TG": {
            "n": "Telangana",
            "c": "TG",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "TR": {
            "n": "Tripura",
            "c": "TR",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "UT": {
            "n": "Uttarakhand",
            "c": "UT",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "UP": {
            "n": "Uttar Pradesh",
            "c": "UP",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "WB": {
            "n": "West Bengal",
            "c": "WB",
            "alt": [],
            "boost": 1,
            "active": true
          }
        },
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "pincode",
        "search": true,
        "int": false,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "ID": {
      "cn": "Indonesia",
      "cc2": "ID",
      "cc3": "IDN",
      "ccnum": "360",
      "alt": [],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "IR": {
      "cn": "Iran, Islamic Republic of",
      "cc2": "IR",
      "cc3": "IRN",
      "ccnum": "364",
      "alt": ["\u012ar\u0101n", "\u0627\u06cc\u0631\u0627\u0646"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "IQ": {
      "cn": "Iraq",
      "cc2": "IQ",
      "cc3": "IRQ",
      "ccnum": "368",
      "alt": ["Al-'Iraq", "\u0627\u0644\u0639\u0631\u0627\u0642"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "IE": {
      "cn": "Ireland",
      "cc2": "IE",
      "cc3": "IRL",
      "ccnum": "372",
      "alt": ["\u00c9ire"],
      "boost": 3.5,
      "r": {
        "options": {
          "CW": {
            "n": "Carlow",
            "c": "CW",
            "alt": ["Caetharlach"],
            "boost": 1,
            "active": true
          },
          "CN": {
            "n": "Cavan",
            "c": "CN",
            "alt": ["An Cabh\u00e1n"],
            "boost": 1,
            "active": true
          },
          "CE": {
            "n": "Clare",
            "c": "CE",
            "alt": ["An Cl\u00e1r"],
            "boost": 1,
            "active": true
          },
          "CO": {
            "n": "Cork",
            "c": "CO",
            "alt": ["Corcaigh"],
            "boost": 1,
            "active": true
          },
          "DL": {
            "n": "Donegal",
            "c": "DL",
            "alt": ["D\u00fan na nGall"],
            "boost": 1,
            "active": true
          },
          "D": {
            "n": "Dublin",
            "c": "D",
            "alt": ["Baile \u00c1tha Cliath"],
            "boost": 1,
            "active": true
          },
          "G": {
            "n": "Galway",
            "c": "G",
            "alt": ["Gaillimh"],
            "boost": 1,
            "active": true
          },
          "KY": {
            "n": "Kerry",
            "c": "KY",
            "alt": ["Ciarra\u00ed"],
            "boost": 1,
            "active": true
          },
          "KE": {
            "n": "Kildare",
            "c": "KE",
            "alt": ["Cill Dara"],
            "boost": 1,
            "active": true
          },
          "KK": {
            "n": "Kilkenny",
            "c": "KK",
            "alt": ["Cill Chainnigh"],
            "boost": 1,
            "active": true
          },
          "LS": {
            "n": "Laois",
            "c": "LS",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "LM": {
            "n": "Leitrim",
            "c": "LM",
            "alt": ["Liatroim"],
            "boost": 1,
            "active": true
          },
          "LK": {
            "n": "Limerick",
            "c": "LK",
            "alt": ["Luimneach"],
            "boost": 1,
            "active": true
          },
          "LD": {
            "n": "Longford",
            "c": "LD",
            "alt": ["An Longfort"],
            "boost": 1,
            "active": true
          },
          "LH": {
            "n": "Louth",
            "c": "LH",
            "alt": ["L\u00fa"],
            "boost": 1,
            "active": true
          },
          "MO": {
            "n": "Mayo",
            "c": "MO",
            "alt": ["Maigh Eo"],
            "boost": 1,
            "active": true
          },
          "MH": {
            "n": "Meath",
            "c": "MH",
            "alt": ["An Mh\u00ed"],
            "boost": 1,
            "active": true
          },
          "MN": {
            "n": "Monaghan",
            "c": "MN",
            "alt": ["Muineach\u00e1n"],
            "boost": 1,
            "active": true
          },
          "OY": {
            "n": "Offaly",
            "c": "OY",
            "alt": ["U\u00edbh Fhail\u00ed"],
            "boost": 1,
            "active": true
          },
          "RN": {
            "n": "Roscommon",
            "c": "RN",
            "alt": ["Ros Com\u00e1in"],
            "boost": 1,
            "active": true
          },
          "SO": {
            "n": "Sligo",
            "c": "SO",
            "alt": ["Sligeach"],
            "boost": 1,
            "active": true
          },
          "TA": {
            "n": "Tipperary",
            "c": "TA",
            "alt": ["Tiobraid \u00c1rann"],
            "boost": 1,
            "active": true
          },
          "WD": {
            "n": "Waterford",
            "c": "WD",
            "alt": ["Port L\u00e1irge"],
            "boost": 1,
            "active": true
          },
          "WH": {
            "n": "Westmeath",
            "c": "WH",
            "alt": ["An Iarmh\u00ed"],
            "boost": 1,
            "active": true
          },
          "WX": {
            "n": "Wexford",
            "c": "WX",
            "alt": ["Loch Garman"],
            "boost": 1,
            "active": true
          },
          "WW": {
            "n": "Wicklow",
            "c": "WW",
            "alt": ["Cill Mhant\u00e1in"],
            "boost": 1,
            "active": true
          }
        },
        "req": true,
        "lang": "county"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "IM": {
      "cn": "Isle of Man",
      "cc2": "IM",
      "cc3": "IMN",
      "ccnum": "833",
      "alt": ["Ellan Vannin"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "IM\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}"
      },
      "active": true
    },
    "IL": {
      "cn": "Israel",
      "cc2": "IL",
      "cc3": "ISR",
      "ccnum": "376",
      "alt": ["Yisrael", "\u05d9\u05e9\u05e8\u05d0\u05dc", "Isr\u0101'\u012bl", "\u0625\u0633\u0631\u0627\u0626\u064a\u0644"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}(?:\\d{2})?"
      },
      "active": true
    },
    "IT": {
      "cn": "Italy",
      "cc2": "IT",
      "cc3": "ITA",
      "ccnum": "380",
      "alt": ["Italia"],
      "boost": 3.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "JM": {
      "cn": "Jamaica",
      "cc2": "JM",
      "cc3": "JAM",
      "ccnum": "388",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "JP": {
      "cn": "Japan",
      "cc2": "JP",
      "cc3": "JPN",
      "ccnum": "392",
      "alt": ["Nippon", "Nihon", "\u65e5\u672c"],
      "boost": 3,
      "r": {
        "options": {
          "23": {
            "n": "Aichi",
            "c": "23",
            "alt": ["Aiti", "\u611b\u77e5\u770c"],
            "boost": 1,
            "active": true
          },
          "05": {
            "n": "Akita",
            "c": "05",
            "alt": ["\u79cb\u7530\u770c"],
            "boost": 1,
            "active": true
          },
          "02": {
            "n": "Aomori",
            "c": "02",
            "alt": ["\u9752\u68ee\u770c"],
            "boost": 1,
            "active": true
          },
          "12": {
            "n": "Chiba",
            "c": "12",
            "alt": ["Tiba", "\u5343\u8449\u770c"],
            "boost": 1,
            "active": true
          },
          "38": {
            "n": "Ehime",
            "c": "38",
            "alt": ["\u611b\u5a9b\u770c"],
            "boost": 1,
            "active": true
          },
          "18": {
            "n": "Fukui",
            "c": "18",
            "alt": ["Hukui", "\u798f\u4e95\u770c"],
            "boost": 1,
            "active": true
          },
          "40": {
            "n": "Fukuoka",
            "c": "40",
            "alt": ["Hukuoka", "\u798f\u5ca1\u770c"],
            "boost": 1,
            "active": true
          },
          "07": {
            "n": "Fukushima",
            "c": "07",
            "alt": ["Hukusima", "\u798f\u5cf6\u770c"],
            "boost": 1,
            "active": true
          },
          "21": {
            "n": "Gifu",
            "c": "21",
            "alt": ["Gihu", "\u5c90\u961c\u770c"],
            "boost": 1,
            "active": true
          },
          "10": {
            "n": "Gunma",
            "c": "10",
            "alt": ["\u7fa4\u99ac\u770c"],
            "boost": 1,
            "active": true
          },
          "34": {
            "n": "Hiroshima",
            "c": "34",
            "alt": ["Hirosima", "\u5e83\u5cf6\u770c"],
            "boost": 1,
            "active": true
          },
          "01": {
            "n": "Hokkaido",
            "c": "01",
            "alt": ["Hokkaid\u00f4", "\u5317\u6d77\u9053"],
            "boost": 1,
            "active": true
          },
          "28": {
            "n": "Hyogo",
            "c": "28",
            "alt": ["Hy\u00f4go", "\u5175\u5eab\u770c"],
            "boost": 1,
            "active": true
          },
          "08": {
            "n": "Ibaraki",
            "c": "08",
            "alt": ["\u8328\u57ce\u770c"],
            "boost": 1,
            "active": true
          },
          "17": {
            "n": "Ishikawa",
            "c": "17",
            "alt": ["Isikawa", "\u77f3\u5ddd\u770c"],
            "boost": 1,
            "active": true
          },
          "03": {
            "n": "Iwate",
            "c": "03",
            "alt": ["\u5ca9\u624b\u770c"],
            "boost": 1,
            "active": true
          },
          "37": {
            "n": "Kagawa",
            "c": "37",
            "alt": ["\u9999\u5ddd\u770c"],
            "boost": 1,
            "active": true
          },
          "46": {
            "n": "Kagoshima",
            "c": "46",
            "alt": ["Kagosima", "\u9e7f\u5150\u5cf6\u770c"],
            "boost": 1,
            "active": true
          },
          "14": {
            "n": "Kanagawa",
            "c": "14",
            "alt": ["\u795e\u5948\u5ddd\u770c"],
            "boost": 1,
            "active": true
          },
          "39": {
            "n": "Kochi",
            "c": "39",
            "alt": ["K\u00f4ti", "\u9ad8\u77e5\u770c"],
            "boost": 1,
            "active": true
          },
          "43": {
            "n": "Kumamoto",
            "c": "43",
            "alt": ["\u718a\u672c\u770c"],
            "boost": 1,
            "active": true
          },
          "26": {
            "n": "Kyoto",
            "c": "26",
            "alt": ["Ky\u00f4to", "\u4eac\u90fd\u5e9c"],
            "boost": 1,
            "active": true
          },
          "24": {
            "n": "Mie",
            "c": "24",
            "alt": ["\u4e09\u91cd\u770c"],
            "boost": 1,
            "active": true
          },
          "04": {
            "n": "Miyagi",
            "c": "04",
            "alt": ["\u5bae\u57ce\u770c"],
            "boost": 1,
            "active": true
          },
          "45": {
            "n": "Miyazaki",
            "c": "45",
            "alt": ["\u5bae\u5d0e\u770c"],
            "boost": 1,
            "active": true
          },
          "20": {
            "n": "Nagano",
            "c": "20",
            "alt": ["\u9577\u91ce\u770c"],
            "boost": 1,
            "active": true
          },
          "42": {
            "n": "Nagasaki",
            "c": "42",
            "alt": ["\u9577\u5d0e\u770c"],
            "boost": 1,
            "active": true
          },
          "29": {
            "n": "Nara",
            "c": "29",
            "alt": ["\u5948\u826f\u770c"],
            "boost": 1,
            "active": true
          },
          "15": {
            "n": "Niigata",
            "c": "15",
            "alt": ["\u65b0\u6f5f\u770c"],
            "boost": 1,
            "active": true
          },
          "44": {
            "n": "Oita",
            "c": "44",
            "alt": ["\u00d4ita", "\u5927\u5206\u770c"],
            "boost": 1,
            "active": true
          },
          "33": {
            "n": "Okayama",
            "c": "33",
            "alt": ["\u5ca1\u5c71\u770c"],
            "boost": 1,
            "active": true
          },
          "47": {
            "n": "Okinawa",
            "c": "47",
            "alt": ["\u6c96\u7e04\u770c"],
            "boost": 1,
            "active": true
          },
          "27": {
            "n": "Osaka",
            "c": "27",
            "alt": ["\u00d4saka", "\u5927\u962a\u5e9c"],
            "boost": 1,
            "active": true
          },
          "41": {
            "n": "Saga",
            "c": "41",
            "alt": ["\u4f50\u8cc0\u770c"],
            "boost": 1,
            "active": true
          },
          "11": {
            "n": "Saitama",
            "c": "11",
            "alt": ["\u57fc\u7389\u770c"],
            "boost": 1,
            "active": true
          },
          "25": {
            "n": "Shiga",
            "c": "25",
            "alt": ["Siga", "\u6ecb\u8cc0\u770c"],
            "boost": 1,
            "active": true
          },
          "32": {
            "n": "Shimane",
            "c": "32",
            "alt": ["Shimane", "\u5cf6\u6839\u770c"],
            "boost": 1,
            "active": true
          },
          "22": {
            "n": "Shizuoka",
            "c": "22",
            "alt": ["Sizuoka", "\u9759\u5ca1\u770c"],
            "boost": 1,
            "active": true
          },
          "09": {
            "n": "Tochigi",
            "c": "09",
            "alt": ["Totigi", "\u6803\u6728\u770c"],
            "boost": 1,
            "active": true
          },
          "36": {
            "n": "Tokushima",
            "c": "36",
            "alt": ["Tokusima", "\u5fb3\u5cf6\u770c"],
            "boost": 1,
            "active": true
          },
          "13": {
            "n": "Tokyo",
            "c": "13",
            "alt": ["T\u00f4ky\u00f4", "\u6771\u4eac\u90fd"],
            "boost": 1,
            "active": true
          },
          "31": {
            "n": "Tottori",
            "c": "31",
            "alt": ["\u9ce5\u53d6\u770c"],
            "boost": 1,
            "active": true
          },
          "16": {
            "n": "Toyama",
            "c": "16",
            "alt": ["\u5bcc\u5c71\u770c"],
            "boost": 1,
            "active": true
          },
          "30": {
            "n": "Wakayama",
            "c": "30",
            "alt": ["\u548c\u6b4c\u5c71\u770c"],
            "boost": 1,
            "active": true
          },
          "06": {
            "n": "Yamagata",
            "c": "06",
            "alt": ["\u5c71\u5f62\u770c"],
            "boost": 1,
            "active": true
          },
          "35": {
            "n": "Yamaguchi",
            "c": "35",
            "alt": ["Yamaguti", "\u5c71\u53e3\u770c"],
            "boost": 1,
            "active": true
          },
          "19": {
            "n": "Yamanashi",
            "c": "19",
            "alt": ["Yamanasi", "\u5c71\u68a8\u770c"],
            "boost": 1,
            "active": true
          }
        },
        "req": true,
        "lang": "prefecture"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{3}-?\\d{4}"
      },
      "active": true
    },
    "JE": {
      "cn": "Jersey",
      "cc2": "JE",
      "cc3": "JEY",
      "ccnum": "832",
      "alt": ["J\u00e8rri"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "JE\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}"
      },
      "active": true
    },
    "JO": {
      "cn": "Jordan",
      "cc2": "JO",
      "cc3": "JOR",
      "ccnum": "400",
      "alt": ["Al-\u2019Urdun", "\u0627\u0644\u0623\u0631\u062f\u0646"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "KZ": {
      "cn": "Kazakhstan",
      "cc2": "KZ",
      "cc3": "KAZ",
      "ccnum": "398",
      "alt": ["Qazaqstan", "\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d", "Kazakhst\u00e1n", "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "KE": {
      "cn": "Kenya",
      "cc2": "KE",
      "cc3": "KEN",
      "ccnum": "404",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "KI": {
      "cn": "Kiribati",
      "cc2": "KI",
      "cc3": "KIR",
      "ccnum": "296",
      "alt": [],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "KP": {
      "cn": "Korea, Democratic People's Republic of",
      "cc2": "KP",
      "cc3": "PRK",
      "ccnum": "408",
      "alt": ["Chos\u014fn", "North Korea", "Bukchos\u014fn", "\uc870\uc120", "\u671d\u9bae"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "KR": {
      "cn": "Korea, Republic of",
      "cc2": "KR",
      "cc3": "KOR",
      "ccnum": "410",
      "alt": ["Hanguk", "South Korea", "Namhan", "\ud55c\uad6d", "\u97d3\u570b"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{3}[\\-]\\d{3}"
      },
      "active": true
    },
    "KW": {
      "cn": "Kuwait",
      "cc2": "KW",
      "cc3": "KWT",
      "ccnum": "414",
      "alt": ["Al-Kuwayt", "\u0627\u0644\u0643\u0648\u064a\u062a"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "KG": {
      "cn": "Kyrgyzstan",
      "cc2": "KG",
      "cc3": "KGZ",
      "ccnum": "417",
      "alt": ["\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d", "Kirgizija", "\u041a\u0438\u0440\u0433\u0438\u0437\u0438\u044f"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "LA": {
      "cn": "Lao People's Democratic Republic",
      "cc2": "LA",
      "cc3": "LAO",
      "ccnum": "418",
      "alt": ["\u0ea5\u0eb2\u0ea7", "Laos"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "LV": {
      "cn": "Latvia",
      "cc2": "LV",
      "cc3": "LVA",
      "ccnum": "428",
      "alt": ["Latvija"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "LV-\\d{4}"
      },
      "active": true
    },
    "LB": {
      "cn": "Lebanon",
      "cc2": "LB",
      "cc3": "LBN",
      "ccnum": "422",
      "alt": ["Lubn\u0101n", "\u0644\u0628\u0646\u0627\u0646"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "(\\d{4}([ ]?\\d{4})?)?"
      },
      "active": true
    },
    "LS": {
      "cn": "Lesotho",
      "cc2": "LS",
      "cc3": "LSO",
      "ccnum": "426",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{3}"
      },
      "active": true
    },
    "LR": {
      "cn": "Liberia",
      "cc2": "LR",
      "cc3": "LBR",
      "ccnum": "430",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "LY": {
      "cn": "Libya",
      "cc2": "LY",
      "cc3": "LBY",
      "ccnum": "434",
      "alt": ["L\u012bbiy\u0101", "\u0644\u064a\u0628\u064a\u0627"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "LI": {
      "cn": "Liechtenstein",
      "cc2": "LI",
      "cc3": "LIE",
      "ccnum": "438",
      "alt": [],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "(948[5-9])|(949[0-7])"
      },
      "active": true
    },
    "LT": {
      "cn": "Lithuania",
      "cc2": "LT",
      "cc3": "LTU",
      "ccnum": "440",
      "alt": ["Lietuva"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "LU": {
      "cn": "Luxembourg",
      "cc2": "LU",
      "cc3": "LUX",
      "ccnum": "442",
      "alt": ["L\u00ebtzebuerg", "Luxemburg"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "MO": {
      "cn": "Macau Special Administrative Region of China",
      "cc2": "MO",
      "cc3": "MAC",
      "ccnum": "446",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "MK": {
      "cn": "North Macedonia",
      "cc2": "MK",
      "cc3": "MKD",
      "ccnum": "807",
      "alt": ["Severna Makedonija", "\u0421\u0435\u0432\u0435\u0440\u043d\u0430 \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "MG": {
      "cn": "Madagascar",
      "cc2": "MG",
      "cc3": "MDG",
      "ccnum": "450",
      "alt": ["Madagasikara"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{3}"
      },
      "active": true
    },
    "MW": {
      "cn": "Malawi",
      "cc2": "MW",
      "cc3": "MWI",
      "ccnum": "454",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "MY": {
      "cn": "Malaysia",
      "cc2": "MY",
      "cc3": "MYS",
      "ccnum": "458",
      "alt": [],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "MV": {
      "cn": "Maldives",
      "cc2": "MV",
      "cc3": "MDV",
      "ccnum": "462",
      "alt": ["Dhivehi Raajje", "\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0783\u07a7\u0787\u07b0\u0796\u07ac"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "ML": {
      "cn": "Mali",
      "cc2": "ML",
      "cc3": "MLI",
      "ccnum": "466",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "MT": {
      "cn": "Malta",
      "cc2": "MT",
      "cc3": "MLT",
      "ccnum": "470",
      "alt": [],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "[A-Z]{3}[ ]?\\d{2,4}"
      },
      "active": true
    },
    "MH": {
      "cn": "Marshall Islands",
      "cc2": "MH",
      "cc3": "MHL",
      "ccnum": "584",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "969[67]\\d([ \\-]\\d{4})?"
      },
      "active": true
    },
    "MQ": {
      "cn": "Martinique",
      "cc2": "MQ",
      "cc3": "MTQ",
      "ccnum": "474",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "9[78]2\\d{2}"
      },
      "active": true
    },
    "MR": {
      "cn": "Mauritania",
      "cc2": "MR",
      "cc3": "MRT",
      "ccnum": "478",
      "alt": ["Mauritanie", "M\u016br\u012bt\u0101niy\u0101", "\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "MU": {
      "cn": "Mauritius",
      "cc2": "MU",
      "cc3": "MUS",
      "ccnum": "480",
      "alt": ["Maurice"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "(\\d{3}[A-Z]{2}\\d{3})?"
      },
      "active": true
    },
    "YT": {
      "cn": "Mayotte",
      "cc2": "YT",
      "cc3": "MYT",
      "ccnum": "175",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "976\\d{2}"
      },
      "active": true
    },
    "MX": {
      "cn": "Mexico",
      "cc2": "MX",
      "cc3": "MEX",
      "ccnum": "484",
      "alt": ["M\u00e9xico"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "FM": {
      "cn": "Micronesia, Federated States of",
      "cc2": "FM",
      "cc3": "FSM",
      "ccnum": "583",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "(9694[1-4])([ \\-]\\d{4})?"
      },
      "active": true
    },
    "MD": {
      "cn": "Moldova, Republic of",
      "cc2": "MD",
      "cc3": "MDA",
      "ccnum": "498",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "MC": {
      "cn": "Monaco",
      "cc2": "MC",
      "cc3": "MCO",
      "ccnum": "492",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "980\\d{2}"
      },
      "active": true
    },
    "MN": {
      "cn": "Mongolia",
      "cc2": "MN",
      "cc3": "MNG",
      "ccnum": "496",
      "alt": ["Mongol Uls", "\u041c\u043e\u043d\u0433\u043e\u043b \u0423\u043b\u0441"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "ME": {
      "cn": "Montenegro",
      "cc2": "ME",
      "cc3": "MNE",
      "ccnum": "499",
      "alt": ["Crna Gora", "\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "8\\d{4}"
      },
      "active": true
    },
    "MS": {
      "cn": "Montserrat",
      "cc2": "MS",
      "cc3": "MSR",
      "ccnum": "500",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "MA": {
      "cn": "Morocco",
      "cc2": "MA",
      "cc3": "MAR",
      "ccnum": "504",
      "alt": ["Al-Maghrib", "\u0627\u0644\u0645\u063a\u0631\u0628"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "MZ": {
      "cn": "Mozambique",
      "cc2": "MZ",
      "cc3": "MOZ",
      "ccnum": "508",
      "alt": ["Mo\u00e7ambique"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "MM": {
      "cn": "Myanmar",
      "cc2": "MM",
      "cc3": "MMR",
      "ccnum": "104",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "NA": {
      "cn": "Namibia",
      "cc2": "NA",
      "cc3": "NAM",
      "ccnum": "516",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "NR": {
      "cn": "Nauru",
      "cc2": "NR",
      "cc3": "NRU",
      "ccnum": "520",
      "alt": ["Naoero", "Nauruo"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "NP": {
      "cn": "Nepal",
      "cc2": "NP",
      "cc3": "NPL",
      "ccnum": "524",
      "alt": ["Nep\u0101la", "\u0928\u0947\u092a\u093e\u0932"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "NL": {
      "cn": "Netherlands",
      "cc2": "NL",
      "cc3": "NLD",
      "ccnum": "528",
      "alt": ["Nederland"],
      "boost": 3.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "province"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}[ ]?[A-Z]{2}"
      },
      "active": true
    },
    "NC": {
      "cn": "New Caledonia",
      "cc2": "NC",
      "cc3": "NCL",
      "ccnum": "540",
      "alt": ["Nouvelle-Cal\u00e9donie"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "988\\d{2}"
      },
      "active": true
    },
    "NZ": {
      "cn": "New Zealand",
      "cc2": "NZ",
      "cc3": "NZL",
      "ccnum": "554",
      "alt": ["Aotearoa"],
      "boost": 3.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "NI": {
      "cn": "Nicaragua",
      "cc2": "NI",
      "cc3": "NIC",
      "ccnum": "558",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "NE": {
      "cn": "Niger",
      "cc2": "NE",
      "cc3": "NER",
      "ccnum": "562",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "NG": {
      "cn": "Nigeria",
      "cc2": "NG",
      "cc3": "NGA",
      "ccnum": "566",
      "alt": [],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "(\\d{6})?"
      },
      "active": true
    },
    "NU": {
      "cn": "Niue",
      "cc2": "NU",
      "cc3": "NIU",
      "ccnum": "570",
      "alt": ["Niu\u0113"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "NF": {
      "cn": "Norfolk Island",
      "cc2": "NF",
      "cc3": "NFK",
      "ccnum": "574",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "2899"
      },
      "active": true
    },
    "MP": {
      "cn": "Northern Mariana Islands",
      "cc2": "MP",
      "cc3": "MNP",
      "ccnum": "580",
      "alt": [],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "9695[012]([ \\-]\\d{4})?"
      },
      "active": true
    },
    "NO": {
      "cn": "Norway",
      "cc2": "NO",
      "cc3": "NOR",
      "ccnum": "578",
      "alt": ["Norge", "Noreg"],
      "boost": 3.5,
      "r": {
        "options": {
          "03": {
            "n": "Oslo",
            "c": "03",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "11": {
            "n": "Rogaland",
            "c": "11",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "15": {
            "n": "M\u00f8re og Romsdal",
            "c": "15",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "18": {
            "n": "Nordland",
            "c": "18",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "21": {
            "n": "Svalbard",
            "c": "21",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "22": {
            "n": "Jan Mayen",
            "c": "22",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "30": {
            "n": "Viken",
            "c": "30",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "34": {
            "n": "Innlandet",
            "c": "34",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "38": {
            "n": "Vestfold og Telemark",
            "c": "38",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "42": {
            "n": "Agder",
            "c": "42",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "46": {
            "n": "Vestland",
            "c": "46",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "50": {
            "n": "Tr\u00f8ndelag",
            "c": "50",
            "alt": ["Tr\u00f6\u00f6ndelage"],
            "boost": 1,
            "active": true
          },
          "54": {
            "n": "Troms og Finnmark",
            "c": "54",
            "alt": ["Romsa ja Finnm\u00e1rku", "Tromssa ja Finmarkku"],
            "boost": 1,
            "active": true
          }
        },
        "req": false,
        "lang": "county"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "OM": {
      "cn": "Oman",
      "cc2": "OM",
      "cc3": "OMN",
      "ccnum": "512",
      "alt": ["\u2018Um\u0101n", "\u0639\u064f\u0645\u0627\u0646"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "(PC )?\\d{3}"
      },
      "active": true
    },
    "PK": {
      "cn": "Pakistan",
      "cc2": "PK",
      "cc3": "PAK",
      "ccnum": "586",
      "alt": ["P\u0101kist\u0101n", "\u067e\u0627\u06a9\u0633\u062a\u0627\u0646"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "province"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "PW": {
      "cn": "Palau",
      "cc2": "PW",
      "cc3": "PLW",
      "ccnum": "585",
      "alt": ["Belau"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "969(39|40)"
      },
      "active": true
    },
    "PS": {
      "cn": "Palestine, State of",
      "cc2": "PS",
      "cc3": "PSE",
      "ccnum": "275",
      "alt": ["Filast\u012bn", "Dawlat Filas\u0163\u012bn", "\u0641\u0644\u0633\u0637\u064a\u0646", "\u062f\u0648\u0644\u0629 \u0641\u0644\u0633\u0637\u064a\u0646"],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "PA": {
      "cn": "Panama",
      "cc2": "PA",
      "cc3": "PAN",
      "ccnum": "591",
      "alt": ["Panam\u00e1"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "PG": {
      "cn": "Papua New Guinea",
      "cc2": "PG",
      "cc3": "PNG",
      "ccnum": "598",
      "alt": ["Papua Niugini"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{3}"
      },
      "active": true
    },
    "PY": {
      "cn": "Paraguay",
      "cc2": "PY",
      "cc3": "PRY",
      "ccnum": "600",
      "alt": ["Paragu\u00e1i"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "PE": {
      "cn": "Peru",
      "cc2": "PE",
      "cc3": "PER",
      "ccnum": "604",
      "alt": ["Per\u00fa"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "(?:LIMA \\d|CALLAO 0?)\\d|[0-2]\\d{4}"
      },
      "active": true
    },
    "PH": {
      "cn": "Philippines",
      "cc2": "PH",
      "cc3": "PHL",
      "ccnum": "608",
      "alt": ["Pilipinas", "Filipinas"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "zipcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "PN": {
      "cn": "Pitcairn",
      "cc2": "PN",
      "cc3": "PCN",
      "ccnum": "612",
      "alt": ["Pitcairn Islands"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "PCRN 1ZZ"
      },
      "active": true
    },
    "PL": {
      "cn": "Poland",
      "cc2": "PL",
      "cc3": "POL",
      "ccnum": "616",
      "alt": ["Polska"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{2}-\\d{3}"
      },
      "active": true
    },
    "PT": {
      "cn": "Portugal",
      "cc2": "PT",
      "cc3": "PRT",
      "ccnum": "620",
      "alt": ["Portugal"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "\\d{4}-\\d{3}"
      },
      "active": true
    },
    "PR": {
      "cn": "Puerto Rico",
      "cc2": "PR",
      "cc3": "PRI",
      "ccnum": "630",
      "alt": [],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "00[679]\\d{2}([ \\-]\\d{4})?"
      },
      "active": true
    },
    "QA": {
      "cn": "Qatar",
      "cc2": "QA",
      "cc3": "QAT",
      "ccnum": "634",
      "alt": ["\u0642\u0637\u0631"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "RE": {
      "cn": "R\u00e9union",
      "cc2": "RE",
      "cc3": "REU",
      "ccnum": "638",
      "alt": ["Reunion", "La R\u00e9union"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "9[78]4\\d{2}"
      },
      "active": true
    },
    "RO": {
      "cn": "Romania",
      "cc2": "RO",
      "cc3": "ROU",
      "ccnum": "642",
      "alt": ["Rom\u00e2nia"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "RU": {
      "cn": "Russian Federation",
      "cc2": "RU",
      "cc3": "RUS",
      "ccnum": "643",
      "alt": ["Rossiya", "Rossi\u00e2", "\u0420\u043e\u0441\u0441\u0438\u044f"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "RW": {
      "cn": "Rwanda",
      "cc2": "RW",
      "cc3": "RWA",
      "ccnum": "646",
      "alt": [],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "BL": {
      "cn": "Saint Barth\u00e9lemy",
      "cc2": "BL",
      "cc3": "BLM",
      "ccnum": "652",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "9[78][01]\\d{2}"
      },
      "active": true
    },
    "SH": {
      "cn": "Saint Helena, Ascension and Tristan da Cunha",
      "cc2": "SH",
      "cc3": "SHN",
      "ccnum": "654",
      "alt": ["Saint Helena", "Ascension", "Tristan da Cunha"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "(ASCN|STHL) 1ZZ"
      },
      "active": true
    },
    "KN": {
      "cn": "Saint Kitts and Nevis",
      "cc2": "KN",
      "cc3": "KNA",
      "ccnum": "659",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "LC": {
      "cn": "Saint Lucia",
      "cc2": "LC",
      "cc3": "LCA",
      "ccnum": "662",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "MF": {
      "cn": "Saint Martin",
      "cc2": "MF",
      "cc3": "MAF",
      "ccnum": "663",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "9[78][01]\\d{2}"
      },
      "active": true
    },
    "PM": {
      "cn": "Saint Pierre and Miquelon",
      "cc2": "PM",
      "cc3": "SPM",
      "ccnum": "666",
      "alt": ["Saint-Pierre et Miquelon"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "9[78]5\\d{2}"
      },
      "active": true
    },
    "VC": {
      "cn": "Saint Vincent and the Grenadines",
      "cc2": "VC",
      "cc3": "VCT",
      "ccnum": "670",
      "alt": [],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "VC\\d{4}"
      },
      "active": true
    },
    "WS": {
      "cn": "Samoa",
      "cc2": "WS",
      "cc3": "WSM",
      "ccnum": "882",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "SM": {
      "cn": "San Marino",
      "cc2": "SM",
      "cc3": "SMR",
      "ccnum": "674",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "4789\\d"
      },
      "active": true
    },
    "SS": {
      "cn": "South Sudan",
      "cc2": "SS",
      "cc3": "SSD",
      "ccnum": "728",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "ST": {
      "cn": "Sao Tome and Principe",
      "cc2": "ST",
      "cc3": "STP",
      "ccnum": "678",
      "alt": ["S\u00e3o Tom\u00e9 e Pr\u00edncipe"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "SA": {
      "cn": "Saudi Arabia",
      "cc2": "SA",
      "cc3": "SAU",
      "ccnum": "682",
      "alt": ["Al-Mamlaka Al-\u2018Arabiyyah as Sa\u2018\u016bdiyyah", "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "SN": {
      "cn": "Senegal",
      "cc2": "SN",
      "cc3": "SEN",
      "ccnum": "686",
      "alt": ["S\u00e9n\u00e9gal"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "RS": {
      "cn": "Serbia",
      "cc2": "RS",
      "cc3": "SRB",
      "ccnum": "688",
      "alt": ["Srbija", "\u0421\u0440\u0431\u0438\u0458\u0430"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5,6}"
      },
      "active": true
    },
    "SC": {
      "cn": "Seychelles",
      "cc2": "SC",
      "cc3": "SYC",
      "ccnum": "690",
      "alt": ["Sesel"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "SL": {
      "cn": "Sierra Leone",
      "cc2": "SL",
      "cc3": "SLE",
      "ccnum": "694",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "SG": {
      "cn": "Singapore",
      "cc2": "SG",
      "cc3": "SGP",
      "ccnum": "702",
      "alt": ["Singapura", "X\u012bnji\u0101p\u014d", "\u65b0\u52a0\u5761", "Singapur", "\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "SK": {
      "cn": "Slovakia",
      "cc2": "SK",
      "cc3": "SVK",
      "ccnum": "703",
      "alt": ["Slovensko"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{3}[ ]?\\d{2}"
      },
      "active": true
    },
    "SI": {
      "cn": "Slovenia",
      "cc2": "SI",
      "cc3": "SVN",
      "ccnum": "705",
      "alt": ["Slovenija"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "SB": {
      "cn": "Solomon Islands",
      "cc2": "SB",
      "cc3": "SLB",
      "ccnum": "090",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "SO": {
      "cn": "Somalia",
      "cc2": "SO",
      "cc3": "SOM",
      "ccnum": "706",
      "alt": ["Soomaaliya", "a\u015f-\u015e\u016bm\u0101l", "\u0627\u0644\u0635\u0648\u0645\u0627\u0644"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "ZA": {
      "cn": "South Africa",
      "cc2": "ZA",
      "cc3": "ZAF",
      "ccnum": "710",
      "alt": ["Suid-Afrika", "iNingizimu Afrika", "uMzantsi Afrika", "Afrika-Borwa", "Afrika Borwa", "Aforika Borwa", "Afurika Tshipembe", "Afrika Dzonga", "iSewula Afrika"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "GS": {
      "cn": "South Georgia and the South Sandwich Islands",
      "cc2": "GS",
      "cc3": "SGS",
      "ccnum": "239",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "SIQQ 1ZZ"
      },
      "active": true
    },
    "ES": {
      "cn": "Spain",
      "cc2": "ES",
      "cc3": "ESP",
      "ccnum": "724",
      "alt": ["Espa\u00f1a", "Espanya", "Espainia", "Espanha"],
      "boost": 3,
      "r": {
        "options": {
          "A Coruna": {
            "n": "A Coruna",
            "c": "A Coruna",
            "alt": ["A Coru\u00f1a", "La Coru\u00f1a", "Corunna"],
            "boost": 1,
            "active": true
          },
          "Alava": {
            "n": "Alava",
            "c": "Alava",
            "alt": ["Araba", "\u00c1lava"],
            "boost": 1,
            "active": true
          },
          "Albacete": {
            "n": "Albacete",
            "c": "Albacete",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Alicante": {
            "n": "Alicante",
            "c": "Alicante",
            "alt": ["Alacant"],
            "boost": 1,
            "active": true
          },
          "Almeria": {
            "n": "Almeria",
            "c": "Almeria",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Asturias": {
            "n": "Asturias",
            "c": "Asturias",
            "alt": ["Asturies"],
            "boost": 1,
            "active": true
          },
          "Avila": {
            "n": "Avila",
            "c": "Avila",
            "alt": ["\u00c1vila"],
            "boost": 1,
            "active": true
          },
          "Badajoz": {
            "n": "Badajoz",
            "c": "Badajoz",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Baleares": {
            "n": "Baleares",
            "c": "Baleares",
            "alt": ["Balearic Islands", "Illes Balears", "Islas Baleares"],
            "boost": 1,
            "active": true
          },
          "Barcelona": {
            "n": "Barcelona",
            "c": "Barcelona",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Burgos": {
            "n": "Burgos",
            "c": "Burgos",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Caceres": {
            "n": "Caceres",
            "c": "Caceres",
            "alt": ["C\u00e1ceres"],
            "boost": 1,
            "active": true
          },
          "Cadiz": {
            "n": "Cadiz",
            "c": "Cadiz",
            "alt": ["C\u00e1diz"],
            "boost": 1,
            "active": true
          },
          "CN": {
            "n": "Canarias",
            "c": "CN",
            "alt": ["Canary Islands", "Islas Canarias"],
            "boost": 1,
            "active": true
          },
          "Cantabria": {
            "n": "Cantabria",
            "c": "Cantabria",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Castellon": {
            "n": "Castellon",
            "c": "Castellon",
            "alt": ["Castell\u00f3n", "Castell\u00f3"],
            "boost": 1,
            "active": true
          },
          "Ceuta": {
            "n": "Ceuta",
            "c": "Ceuta",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Ciudad Real": {
            "n": "Ciudad Real",
            "c": "Ciudad Real",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Cordoba": {
            "n": "Cordoba",
            "c": "Cordoba",
            "alt": ["C\u00f3rdoba", "Cordova"],
            "boost": 1,
            "active": true
          },
          "Cuenca": {
            "n": "Cuenca",
            "c": "Cuenca",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Gipuzkoa": {
            "n": "Gipuzkoa",
            "c": "Gipuzkoa",
            "alt": ["Guip\u00fazcoa"],
            "boost": 1,
            "active": true
          },
          "Girona": {
            "n": "Girona",
            "c": "Girona",
            "alt": ["Gerona"],
            "boost": 1,
            "active": true
          },
          "Granada": {
            "n": "Granada",
            "c": "Granada",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Guadalajara": {
            "n": "Guadalajara",
            "c": "Guadalajara",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Guipuzcoa": {
            "n": "Guipuzcoa",
            "c": "Guipuzcoa",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Huelva": {
            "n": "Huelva",
            "c": "Huelva",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Huesca": {
            "n": "Huesca",
            "c": "Huesca",
            "alt": ["Uesca"],
            "boost": 1,
            "active": true
          },
          "Jaen": {
            "n": "Jaen",
            "c": "Jaen",
            "alt": ["Ja\u00e9n"],
            "boost": 1,
            "active": true
          },
          "La Rioja": {
            "n": "La Rioja",
            "c": "La Rioja",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Las Palmas": {
            "n": "Las Palmas",
            "c": "Las Palmas",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Leon": {
            "n": "Leon",
            "c": "Leon",
            "alt": ["Le\u00f3n", "Lli\u00f3n"],
            "boost": 1,
            "active": true
          },
          "Lleida": {
            "n": "Lleida",
            "c": "Lleida",
            "alt": ["L\u00e9rida"],
            "boost": 1,
            "active": true
          },
          "Lugo": {
            "n": "Lugo",
            "c": "Lugo",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Madrid": {
            "n": "Madrid",
            "c": "Madrid",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Malaga": {
            "n": "Malaga",
            "c": "Malaga",
            "alt": ["M\u00e1laga"],
            "boost": 1,
            "active": true
          },
          "Melilla": {
            "n": "Melilla",
            "c": "Melilla",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Murcia": {
            "n": "Murcia",
            "c": "Murcia",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Navarra": {
            "n": "Navarra",
            "c": "Navarra",
            "alt": ["Nafarroa", "Navarre"],
            "boost": 1,
            "active": true
          },
          "Ourense": {
            "n": "Ourense",
            "c": "Ourense",
            "alt": ["Orense"],
            "boost": 1,
            "active": true
          },
          "Palencia": {
            "n": "Palencia",
            "c": "Palencia",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Pontevedra": {
            "n": "Pontevedra",
            "c": "Pontevedra",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Salamanca": {
            "n": "Salamanca",
            "c": "Salamanca",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Santa Cruz de Tenerife": {
            "n": "Santa Cruz de Tenerife",
            "c": "Santa Cruz de Tenerife",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Segovia": {
            "n": "Segovia",
            "c": "Segovia",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Sevilla": {
            "n": "Sevilla",
            "c": "Sevilla",
            "alt": ["Seville"],
            "boost": 1,
            "active": true
          },
          "Soria": {
            "n": "Soria",
            "c": "Soria",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Tarragona": {
            "n": "Tarragona",
            "c": "Tarragona",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Teruel": {
            "n": "Teruel",
            "c": "Teruel",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Toledo": {
            "n": "Toledo",
            "c": "Toledo",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Valencia": {
            "n": "Valencia",
            "c": "Valencia",
            "alt": ["Val\u00e8ncia"],
            "boost": 1,
            "active": true
          },
          "Valladolid": {
            "n": "Valladolid",
            "c": "Valladolid",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Vizcaya": {
            "n": "Biscay",
            "c": "Vizcaya",
            "alt": ["Bizkaia", "Vizcaya"],
            "boost": 1,
            "active": true
          },
          "Zamora": {
            "n": "Zamora",
            "c": "Zamora",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "Zaragoza": {
            "n": "Zaragoza",
            "c": "Zaragoza",
            "alt": ["Saragossa"],
            "boost": 1,
            "active": true
          }
        },
        "req": true,
        "lang": "province"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "LK": {
      "cn": "Sri Lanka",
      "cc2": "LK",
      "cc3": "LKA",
      "ccnum": "144",
      "alt": ["Sri Lank\u0101", "\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0", "\u0bb8\u0bcd\u0bb0\u0bc0 \u0bb2\u0b99\u0bcd\u0b95"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "SD": {
      "cn": "Sudan",
      "cc2": "SD",
      "cc3": "SDN",
      "ccnum": "729",
      "alt": ["As-Sudan", "\u0627\u0644\u0633\u0648\u062f\u0627\u0646"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "SR": {
      "cn": "Suriname",
      "cc2": "SR",
      "cc3": "SUR",
      "ccnum": "740",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "SJ": {
      "cn": "Svalbard and Jan Mayen",
      "cc2": "SJ",
      "cc3": "SJM",
      "ccnum": "744",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "SZ": {
      "cn": "Eswatini",
      "cc2": "SZ",
      "cc3": "SWZ",
      "ccnum": "748",
      "alt": ["Swaziland"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "[HLMS]\\d{3}"
      },
      "active": true
    },
    "SE": {
      "cn": "Sweden",
      "cc2": "SE",
      "cc3": "SWE",
      "ccnum": "752",
      "alt": ["Sverige"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{3}[ ]?\\d{2}"
      },
      "active": true
    },
    "CH": {
      "cn": "Switzerland",
      "cc2": "CH",
      "cc3": "CHE",
      "ccnum": "756",
      "alt": ["Schweiz", "Suisse", "Svizzera", "Svizra"],
      "boost": 3.5,
      "r": {
        "options": {
          "AG": {
            "n": "Aargau",
            "c": "AG",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "AR": {
            "n": "Appenzell Ausserrhoden",
            "c": "AR",
            "alt": ["Appenzell Outer Rhodes"],
            "boost": 1,
            "active": true
          },
          "AI": {
            "n": "Appenzell Innerrhoden",
            "c": "AI",
            "alt": ["Appenzell Inner Rhodes"],
            "boost": 1,
            "active": true
          },
          "BL": {
            "n": "Basel-Landschaft",
            "c": "BL",
            "alt": ["Baselland", "Baselbiet"],
            "boost": 1,
            "active": true
          },
          "BS": {
            "n": "Basel-Stadt",
            "c": "BS",
            "alt": ["Basle-Ville", "Basle-City"],
            "boost": 1,
            "active": true
          },
          "BE": {
            "n": "Bern",
            "c": "BE",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "FR": {
            "n": "Freiburg",
            "c": "FR",
            "alt": ["Fribourg"],
            "boost": 1,
            "active": true
          },
          "GE": {
            "n": "Genf",
            "c": "GE",
            "alt": ["Gen\u00e8ve", "Geneva", "Ginevra", "Genevra"],
            "boost": 1,
            "active": true
          },
          "GL": {
            "n": "Glarus",
            "c": "GL",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "GR": {
            "n": "Graubuenden",
            "c": "GR",
            "alt": ["Graub\u00fcnden", "Grisons", "Grigioni", "Grischun"],
            "boost": 1,
            "active": true
          },
          "JU": {
            "n": "Jura",
            "c": "JU",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "LU": {
            "n": "Luzern",
            "c": "LU",
            "alt": ["Lucerne"],
            "boost": 1,
            "active": true
          },
          "NE": {
            "n": "Neuenburg",
            "c": "NE",
            "alt": ["Neuch\u00e2tel"],
            "boost": 1,
            "active": true
          },
          "NW": {
            "n": "Nidwalden",
            "c": "NW",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "OW": {
            "n": "Obwalden",
            "c": "OW",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "SH": {
            "n": "Schaffhausen",
            "c": "SH",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "SZ": {
            "n": "Schwyz",
            "c": "SZ",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "SO": {
            "n": "Solothurn",
            "c": "SO",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "SG": {
            "n": "St. Gallen",
            "c": "SG",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "TI": {
            "n": "Tessin",
            "c": "TI",
            "alt": ["Ticino"],
            "boost": 1,
            "active": true
          },
          "TG": {
            "n": "Thurgau",
            "c": "TG",
            "alt": ["Thurgovia"],
            "boost": 1,
            "active": true
          },
          "UR": {
            "n": "Uri",
            "c": "UR",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "VS": {
            "n": "Valais",
            "c": "VS",
            "alt": ["Wallis"],
            "boost": 1,
            "active": true
          },
          "VD": {
            "n": "Vaud",
            "c": "VD",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "ZH": {
            "n": "Zurich",
            "c": "ZH",
            "alt": ["Zuerich", "Z\u00fcrich"],
            "boost": 1,
            "active": true
          },
          "ZG": {
            "n": "Zug",
            "c": "ZG",
            "alt": [],
            "boost": 1,
            "active": true
          }
        },
        "req": false,
        "lang": "canton"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "SY": {
      "cn": "Syrian Arab Republic",
      "cc2": "SY",
      "cc3": "SYR",
      "ccnum": "760",
      "alt": ["Suriyah", "\u0633\u0648\u0631\u064a\u0629"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "TW": {
      "cn": "Taiwan",
      "cc2": "TW",
      "cc3": "TWN",
      "ccnum": "158",
      "alt": ["Zh\u014dnghu\u00e1 M\u00edngu\u00f3", "T\u00e1iwan", "\u4e2d\u83ef\u6c11\u570b", "\u81fa\u7063\/\u53f0\u7063"],
      "boost": 2.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{3}(\\d{2})?"
      },
      "active": true
    },
    "TJ": {
      "cn": "Tajikistan",
      "cc2": "TJ",
      "cc3": "TJK",
      "ccnum": "762",
      "alt": ["Tojikistan", "\u0422\u043e\u04b7\u0438\u043a\u0438\u0441\u0442\u043e\u043d"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "TZ": {
      "cn": "Tanzania, United Republic of",
      "cc2": "TZ",
      "cc3": "TZA",
      "ccnum": "834",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "TH": {
      "cn": "Thailand",
      "cc2": "TH",
      "cc3": "THA",
      "ccnum": "764",
      "alt": ["Mueang Thai", "Prathet Thai", "Ratcha-anachak Thai"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "TL": {
      "cn": "Timor-Leste",
      "cc2": "TL",
      "cc3": "TLS",
      "ccnum": "626",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "TG": {
      "cn": "Togo",
      "cc2": "TG",
      "cc3": "TGO",
      "ccnum": "768",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "TK": {
      "cn": "Tokelau",
      "cc2": "TK",
      "cc3": "TKL",
      "ccnum": "772",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "TO": {
      "cn": "Tonga",
      "cc2": "TO",
      "cc3": "TON",
      "ccnum": "776",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "TT": {
      "cn": "Trinidad and Tobago",
      "cc2": "TT",
      "cc3": "TTO",
      "ccnum": "780",
      "alt": [],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "TN": {
      "cn": "Tunisia",
      "cc2": "TN",
      "cc3": "TUN",
      "ccnum": "788",
      "alt": ["Tunis"],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "TR": {
      "cn": "Turkey",
      "cc2": "TR",
      "cc3": "TUR",
      "ccnum": "792",
      "alt": ["T\u00fcrkiye"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "TM": {
      "cn": "Turkmenistan",
      "cc2": "TM",
      "cc3": "TKM",
      "ccnum": "795",
      "alt": ["T\u00fcrkmenistan"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "TC": {
      "cn": "Turks and Caicos Islands",
      "cc2": "TC",
      "cc3": "TCA",
      "ccnum": "796",
      "alt": [],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "TKCA 1ZZ"
      },
      "active": true
    },
    "TV": {
      "cn": "Tuvalu",
      "cc2": "TV",
      "cc3": "TUV",
      "ccnum": "798",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "UG": {
      "cn": "Uganda",
      "cc2": "UG",
      "cc3": "UGA",
      "ccnum": "800",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "UA": {
      "cn": "Ukraine",
      "cc2": "UA",
      "cc3": "UKR",
      "ccnum": "804",
      "alt": ["Ukra\u0457na"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "AE": {
      "cn": "United Arab Emirates",
      "cc2": "AE",
      "cc3": "ARE",
      "ccnum": "784",
      "alt": ["Al-\u2019Im\u0101rat Al-\u2018Arabiyyah Al-Mutta\u1e25idah"],
      "boost": 3,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "GB": {
      "cn": "United Kingdom",
      "cc2": "GB",
      "cc3": "GBR",
      "ccnum": "826",
      "alt": ["Great Britain", "England", "Northern Ireland", "Britain", "UK"],
      "boost": 4,
      "r": {
        "options": [],
        "req": false,
        "lang": "county"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": false,
        "regex": "GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|BX|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\\d{1,4}"
      },
      "active": true
    },
    "US": {
      "cn": "United States",
      "cc2": "US",
      "cc3": "USA",
      "ccnum": "840",
      "alt": ["USA", "United States of America", "America"],
      "boost": 4.5,
      "r": {
        "options": {
          "AL": {
            "n": "Alabama",
            "c": "AL",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "AK": {
            "n": "Alaska",
            "c": "AK",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "AS": {
            "n": "American Samoa",
            "c": "AS",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "AZ": {
            "n": "Arizona",
            "c": "AZ",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "AR": {
            "n": "Arkansas",
            "c": "AR",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "AF": {
            "n": "Armed Forces Africa",
            "c": "AF",
            "alt": [],
            "boost": 0.4,
            "active": true
          },
          "AA": {
            "n": "Armed Forces Americas",
            "c": "AA",
            "alt": [],
            "boost": 0.4,
            "active": true
          },
          "AC": {
            "n": "Armed Forces Canada",
            "c": "AC",
            "alt": [],
            "boost": 0.4,
            "active": true
          },
          "AE": {
            "n": "Armed Forces Europe",
            "c": "AE",
            "alt": [],
            "boost": 0.4,
            "active": true
          },
          "AM": {
            "n": "Armed Forces Middle East",
            "c": "AM",
            "alt": [],
            "boost": 0.4,
            "active": true
          },
          "AP": {
            "n": "Armed Forces Pacific",
            "c": "AP",
            "alt": [],
            "boost": 0.4,
            "active": true
          },
          "CA": {
            "n": "California",
            "c": "CA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "CO": {
            "n": "Colorado",
            "c": "CO",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "CT": {
            "n": "Connecticut",
            "c": "CT",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "DE": {
            "n": "Delaware",
            "c": "DE",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "DC": {
            "n": "Washington DC",
            "c": "DC",
            "alt": ["District of Columbia"],
            "boost": 1,
            "active": true
          },
          "FM": {
            "n": "Federated States Of Micronesia",
            "c": "FM",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "FL": {
            "n": "Florida",
            "c": "FL",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "GA": {
            "n": "Georgia",
            "c": "GA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "GU": {
            "n": "Guam",
            "c": "GU",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "HI": {
            "n": "Hawaii",
            "c": "HI",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "ID": {
            "n": "Idaho",
            "c": "ID",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "IL": {
            "n": "Illinois",
            "c": "IL",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "IN": {
            "n": "Indiana",
            "c": "IN",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "IA": {
            "n": "Iowa",
            "c": "IA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "KS": {
            "n": "Kansas",
            "c": "KS",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "KY": {
            "n": "Kentucky",
            "c": "KY",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "LA": {
            "n": "Louisiana",
            "c": "LA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "ME": {
            "n": "Maine",
            "c": "ME",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MH": {
            "n": "Marshall Islands",
            "c": "MH",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MD": {
            "n": "Maryland",
            "c": "MD",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MA": {
            "n": "Massachusetts",
            "c": "MA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MI": {
            "n": "Michigan",
            "c": "MI",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MN": {
            "n": "Minnesota",
            "c": "MN",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MS": {
            "n": "Mississippi",
            "c": "MS",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MO": {
            "n": "Missouri",
            "c": "MO",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MT": {
            "n": "Montana",
            "c": "MT",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NE": {
            "n": "Nebraska",
            "c": "NE",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NV": {
            "n": "Nevada",
            "c": "NV",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NH": {
            "n": "New Hampshire",
            "c": "NH",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NJ": {
            "n": "New Jersey",
            "c": "NJ",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NM": {
            "n": "New Mexico",
            "c": "NM",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NY": {
            "n": "New York",
            "c": "NY",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "NC": {
            "n": "North Carolina",
            "c": "NC",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "ND": {
            "n": "North Dakota",
            "c": "ND",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "MP": {
            "n": "Northern Mariana Islands",
            "c": "MP",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "OH": {
            "n": "Ohio",
            "c": "OH",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "OK": {
            "n": "Oklahoma",
            "c": "OK",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "OR": {
            "n": "Oregon",
            "c": "OR",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "PA": {
            "n": "Pennsylvania",
            "c": "PA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "PR": {
            "n": "Puerto Rico",
            "c": "PR",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "RI": {
            "n": "Rhode Island",
            "c": "RI",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "SC": {
            "n": "South Carolina",
            "c": "SC",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "SD": {
            "n": "South Dakota",
            "c": "SD",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "TN": {
            "n": "Tennessee",
            "c": "TN",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "TX": {
            "n": "Texas",
            "c": "TX",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "UT": {
            "n": "Utah",
            "c": "UT",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "VT": {
            "n": "Vermont",
            "c": "VT",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "VI": {
            "n": "Virgin Islands",
            "c": "VI",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "VA": {
            "n": "Virginia",
            "c": "VA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "WA": {
            "n": "Washington",
            "c": "WA",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "WV": {
            "n": "West Virginia",
            "c": "WV",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "WI": {
            "n": "Wisconsin",
            "c": "WI",
            "alt": [],
            "boost": 1,
            "active": true
          },
          "WY": {
            "n": "Wyoming",
            "c": "WY",
            "alt": [],
            "boost": 1,
            "active": true
          }
        },
        "req": true,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "zipcode",
        "search": true,
        "int": false,
        "regex": "^\\d{5}$|^\\d{5}-?\\d{4}$"
      },
      "active": true
    },
    "UM": {
      "cn": "United States Minor Outlying Islands",
      "cc2": "UM",
      "cc3": "UMI",
      "ccnum": "581",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": ""
      },
      "active": true
    },
    "UY": {
      "cn": "Uruguay",
      "cc2": "UY",
      "cc3": "URY",
      "ccnum": "858",
      "alt": ["Rep\u00fablica Oriental del Uruguay"],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "UZ": {
      "cn": "Uzbekistan",
      "cc2": "UZ",
      "cc3": "UZB",
      "ccnum": "860",
      "alt": ["O'zbekiston"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "VU": {
      "cn": "Vanuatu",
      "cc2": "VU",
      "cc3": "VUT",
      "ccnum": "548",
      "alt": [],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "VE": {
      "cn": "Venezuela",
      "cc2": "VE",
      "cc3": "VEN",
      "ccnum": "862",
      "alt": ["Venezuela, Bolivarian Republic of", "Rep\u00fablica Bolivariana de Venezuela"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "\\d{4}"
      },
      "active": true
    },
    "VN": {
      "cn": "Vietnam",
      "cc2": "VN",
      "cc3": "VNM",
      "ccnum": "704",
      "alt": ["Vi\u1ec7t Nam"],
      "boost": 2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{6}"
      },
      "active": true
    },
    "VG": {
      "cn": "Virgin Islands, British",
      "cc2": "VG",
      "cc3": "VGB",
      "ccnum": "092",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": "VG\\d{4}"
      },
      "active": true
    },
    "VI": {
      "cn": "Virgin Islands, U.S.",
      "cc2": "VI",
      "cc3": "VIR",
      "ccnum": "850",
      "alt": [],
      "boost": 1.5,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": true,
        "int": true,
        "regex": "008(([0-4]\\d)|(5[01]))([ \\-]\\d{4})?"
      },
      "active": true
    },
    "WF": {
      "cn": "Wallis and Futuna Islands",
      "cc2": "WF",
      "cc3": "WLF",
      "ccnum": "876",
      "alt": ["Wallis-et-Futuna"],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "986\\d{2}"
      },
      "active": true
    },
    "EH": {
      "cn": "Western Sahara",
      "cc2": "EH",
      "cc3": "ESH",
      "ccnum": "732",
      "alt": [],
      "boost": 0.2,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "YE": {
      "cn": "Yemen",
      "cc2": "YE",
      "cc3": "YEM",
      "ccnum": "887",
      "alt": ["Al-Yaman"],
      "boost": 0.4,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    },
    "ZM": {
      "cn": "Zambia",
      "cc2": "ZM",
      "cc3": "ZMB",
      "ccnum": "894",
      "alt": [],
      "boost": 1,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": true,
        "lang": "postalcode",
        "search": false,
        "int": true,
        "regex": "\\d{5}"
      },
      "active": true
    },
    "ZW": {
      "cn": "Zimbabwe",
      "cc2": "ZW",
      "cc3": "ZWE",
      "ccnum": "716",
      "alt": [],
      "boost": 0.7,
      "r": {
        "options": [],
        "req": false,
        "lang": "state"
      },
      "pc": {
        "req": false,
        "lang": "postalcode",
        "search": false,
        "int": false,
        "regex": ""
      },
      "active": true
    }
  },
  "locations_billing": [],
  "locations_shipping": [],
  "cart_config_hash": "37230d9bac2da7850e4b6bed76e0eef8"
};
twig({
  id: "cart",
  autoescape: true,
  allowInlineIncludes: true,
  data: "{# BEGIN CART TWIG TEMPLATE #}{# ===================================================== #}{% block cart %}<style>.fc-cart__item__options { color: black;}.fc-cart__item__option__name { /*display: none;*/font-weight: bold;font-style: italic;}.fc-foxycomplete-list { color: black;}/* Padlock icon in cart \"Checkout\" button */#fc .fa-lock {   fill: #FFFFFF;}/* Cart/Checkout buttons */#fc .fc-action--checkout--button, #fc .fc-button--subscription-cancel, #fc .fc-button--submit {   background: #163471;  background: linear-gradient(to bottom, #305fe1 0%, #163471 100%);  border-color: #305fe1;  color: white;  text-shadow: 1px 1px 0px #163471;}/* Cart/Checkout buttons - Hover */#fc .fc-action--checkout--button:hover, #fc .fc-action--checkout--button:focus, #fc .fc-button--subscription-cancel:hover, #fc .fc-button--subscription-cancel:focus, #fc .fc-button--submit:hover, #fc .fc-button--submit:focus {   background: #55aa3f;  border-color: #ec67825;  text-shadow: 1px 1px 0px #55aa3f;}/* Sidecart top checkout button */[data-fc-sidecart] #fc .fc-fixed-button-right .fc-btn-action {   background: #163471;  background: linear-gradient(to bottom, #305fe1 0%, #163471 100%);  color: white;}/* Sidecart top checkout button - Hover */[data-fc-sidecart] #fc .fc-fixed-button-right .fc-btn-action:hover {   background: #55aa3f;}/* spinner action on checkout submit button */#fc .fc-button--submit .fc-spinner > div {   background-color:#101a5c;}/* Field Boxes Background */#fc .fc-input-group-container--active .fc-input-group-container__title--forced {     background-color: #dde8ff;}/* Field Boxes move text right */#fc .fc-form-group .fc-input-group-container__title {     padding-left: 35px;}#fc .fc-input-group-container__title:before {     background: none;    border: 0px;}/* Cart Empty Message Bubble */#fc .fc-messages__empty-notification {     background-color: #dde8ff;    border: 1px solid #333;}</style>{% if context == \'cart\' %}    {% include \'svg.inc.twig\' %}    <nav class=\"fc-sidecart-only-fixed\" role=\"navigation\">        {# block sidecart_top_fixed_actions #}        <div class=\"fc-fixed-button-left\">            <a data-fc-sidecart-dismiss  class=\"fc-sidecart-button fc-btn-action\">                <svg class=\"fc-svg-icon\" role=\"presentation\" title=\"Checkout Icon\">                    <use xlink:hr" + "ef=\"#fa-caret-left\" />                </svg><span class=\"fc-fixed-button-left--text\">{{ config.lang.cart_keep_shopping|raw }}</span></a>        </div>        <div class=\"fc-fixed-button-right\">            <a class=\"fc-sidecart-button fc-btn-action\" hr" + "ef=\"https://{{ config.store_domain }}/checkout?{{ session_name }}={{ session_id }}\" target=\"_top\">                {{ config.lang.cart_checkout|raw }}                <svg class=\"fc-svg-icon\" role=\"presentation\" title=\"Checkout Icon\">                    <use xlink:hr" + "ef=\"#fa-caret-right\" />                </svg>            </a>        </div>        {# endblock sidecart_top_fixed_actions #}    </nav>{% endif %}<div id=\"fc-cart\" {% if context == \'cart\' %}class=\"fc-container\"{% endif %}>{% import \"utils.inc.twig\" as utils %}{#    Blocks within \"cart\" block:    noscript_warning    div.row        cart_title        continue_shopping    div.row        cart_form_start        div.col-sm-8            cart_errors            cart_item_divs        div.col-sm-4            logo            order_totals                address_entry*            order_payment_actions        cart_form_end#}{% block noscript_warning %}    <noscript>        <div id=\"fc-noscript-errors\" class=\"alert alert-danger\">            <h2>{{ config.lang.cart_warning|raw }}:</h2>            <p>{{ config.lang.cart_no_javascript_message|raw }}</p>        </div>{# #fc-noscript-errors #}    </noscript>{% endblock noscript_warning %}{# rather than doing inline control statements, we\'re setting some top level variables #}{% if cart_is_fullpage %}    {% set container_id = \"fc-cart--responsive\" %}{% else %}    {% set container_id = \"fc-cart--fixed-width\" %}{% endif %}<div id=\"{{ container_id }}\">    <header class=\"fc-cart__header fc-container__row\" role=\"banner\">        {% if not is_updateinfo %}        <div class=\"fc-cart__title fc-container__grid\">            {% block cart_title %}                <h2 class=\"fc-cart__title__header\">{{ config.lang.cart_caption|raw }}</h2>                <p class=\"fc-order-quantity\">                    {% set temp_lang_cart_items = config.lang.cart_items|raw %}                    {% if item_count == 1 %}                        {% set temp_lang_cart_items = config.lang.cart_item|raw %}                    {% endif %}                    <span data-fc-order-quantity-integer=\"fc-order-quantity-integer\">{{ item_count }}</span>                    <span data-fc-lang-cart-item=\"{{ config.lang.cart_item }}\" data-fc-lang-cart-items=\"{{ config.lang.cart_items }}\">{{ temp_lang_cart_items|lower }}</span>                    {{ config.lang.cart_in_your_order|raw }}                </p>            {% endblock cart_title %}        </div>        {% endif %}        {% if cart_is_fullpage or context == \'checkout\' %}        <div class=\"fc-cancel-continue-shopping fc-container__grid\">            {% block continue_shopping %}            {% if cart_cancel_and_continue_link != \'\' %}                <a hr" + "ef=\"{{ cart_cancel_and_continue_link }}\" class=\"fc-button fc-button--cancel\">                    <svg class=\"fc-svg-icon fc-icon-small\" role=\"presentation\" title=\"Back Arrows\">                        <use xlink:hr" + "ef=\"#fa-angle-double-left\" />                    </svg>                    {{ config.lang.cart_cancel_and_continue|raw }}                </a>            {% endif %}            {% endblock continue_shopping %}        </div>        {% endif %}    </header>    {% if not is_updateinfo %}    {% if cart_is_fullpage %}    <div class=\"fc-cart-container fc-cart__main fc-container__row\" role=\"main\">    {% else %}    <div class=\"fc-container__row fc-cart-container\">    {% endif %}        {% block cart_form_start %}        {% if with_controls %}        <fo" + "rm id=\"fc-cart-form\" action=\"https://{{ config.store_domain }}/cart\" method=\"post\">            {% block cart_hidden_inputs %}            <input type=\"hidden\" name=\"cart\" value=\"update\" />            <input type=\"hidden\" name=\"item_count\" value=\"{{ items|length }}\" />            <input type=\"hidden\" name=\"{{ session_name }}\" value=\"{{ session_id }}\" />            {% endblock cart_hidden_inputs %}        {% endif %}        {% endblock cart_form_start %}        <div class=\"fc-cart__main__content fc-container__grid\">            <div data-fc-id=\"block-cart-errors\">            {% block cart_errors %}            {% if context == \'cart\' %}                {% include \'errors.inc.twig\' %}                {% if item_count == 0 %}                    <div class=\"fc-messages\">                        <div class=\"fc-messages__empty-notification\">                            <a hr" + "ef=\"{{ cart_cancel_and_continue_link }}\">{{ config.lang.cart_empty|raw }}</a>                        </div>                    </div>                {% endif %}            {% endif %}            {% endblock cart_errors %}            </div>            <div data-fc-id=\"block-cart-items-divs\">            {% block cart_items_divs %}            {% set checkout_sub_cancel = (context == \'checkout\' and is_subscription_cancel) %}            <div class=\"fc-cart__items {% if has_product_images %}fc-cart__items--with-images{% else %} fc-cart__items--without-images{% endif %}\">                {% if items|length > 0 %}                <div class=\"fc-cart__items__header fc-container__row\">                    <div class=\"fc-cart__items__header__item fc-cart__items__header__column\">                        {{ config.lang.cart_item|raw }}                    </div>                    <div class=\"fc-cart__items__header__totals fc-cart__items__header__column\">                        <div class=\"fc-container__row\">                            <div class=\"fc-cart__items__header__price\">                                {% if (item_count != items|length) %}                                {{ config.lang.cart_price|raw }}                                {% endif %}                            </div>                            <div class=\"fc-cart__items__header__quantity\">                                {{ config.lang.cart_quantity|raw }}                            </div>                            <div class=\"fc-cart__items__header__total\">                                {{ config.lang.cart_total|raw }}                            </div>                        </div>                    </div>                </div>                {% endif %}                {% for item in items %}                {% if has_multiship and item.multiship != \"-1\" %}                {# The first item per multiship shipto will != -1. All others will == -1 #}                <div class=\"fc-cart__multiship-header fc-container__row\">                    <h4 class=\"fc-cart__multiship-header__text\">                        {{ config.lang.cart_shipto|raw }}<strong class=\"fc-cart__multiship-header__ship-to\">{{ item.shipto }}</strong>                    </h4>                </div>                {% endif %}                {# bug in twig.js keeps us from just setting a variable. hopefully this is resolved eventually #}                <div data-fc-item-id=\"{{ item.id }}\" class=\"fc-container__row fc-cart__item {% if item.parent_code %}fc-cart__item--child-product{% elseif item.is_parent %}fc-cart__item--parent-product{% endif %} {% if loop.last %}fc-cart__item--last{% endif %}\" {% if item.code != \'\' %}data-item-code=\"{{ item.code|escape(\'html_attr\') }}\" {% endif %}>                {% if loading_quantity %}                    <div class=\"fc-cart__item--updating\">                        <div class=\"fc-spinner\">                          <div class=\"bounce1\"></div>                          <div class=\"bounce2\"></div>                          <div class=\"bounce3\"></div>                        </div>                    </div>                {% endif %}                    <div class=\"fc-cart__item__details-and-image\">                        {% if has_product_images %}                        <div class=\"fc-cart__item__image\">                            {% if item.url != \'\' and item.image != \'\' %}                            <a hr" + "ef=\"{{ item.url }}\" target=\"_top\" alt=\"{{ item.alt_name }}\">                            {% endif %}                                {% if item.image %}                                <span><img class=\"fc-cart__item__image__img\" src=\"{{ item.image }}\" alt=\"{{ item.alt_name }}\" /></span>                                {% endif %}                            {% if item.url != \'\' and item.image != \'\' %}                            </a>                            {% endif %}                        </div>                        {% endif %}                        <div class=\"fc-cart__item__details\">                            <p class=\"fc-cart__item__name\">{{ item.name }}</p>                        {% block product_options %}                            {% set show_product_options = true %}                            {% set show_product_weight = true %}                            {% set show_product_category = true %}                            {% set show_product_code = true %}                            {% set show_sub_frequency = true %}                            {% set show_sub_startdate = true %}                            {% set show_sub_nextdate = true %}                            {% set show_sub_enddate = true %}                            {% set hidden_product_options = [] %}                            {% if config.template_config.cart_display_config.usage != \"none\" %}                                {% set show_product_options = config.template_config.cart_display_config.show_product_options %}                                {% set show_product_weight = config.template_config.cart_display_config.show_product_weight %}                                {% set show_product_category = config.template_config.cart_display_config.show_product_category %}                                {% set show_product_code = config.template_config.cart_display_config.show_product_code %}                                {% set show_sub_frequency = config.template_config.cart_display_config.show_sub_frequency %}                                {% set show_sub_startdate = config.template_config.cart_display_config.show_sub_startdate %}                                {% set show_sub_nextdate = config.template_config.cart_display_config.show_sub_nextdate %}                                {% set show_sub_enddate = config.template_config.cart_display_config.show_sub_enddate %}                                {% set hidden_product_options = config.template_config.cart_display_config.hidden_product_options %}                            {% endif %}                            <ul class=\"fc-cart__item__options\">                                {% if show_product_options %}                                    {% for option in item.options %}                                        {% if (option.name|lower not in hidden_product_options) and (option.class|lower not in hidden_product_options) %}                                        <li class=\"fc-cart__item__option fc-cart__item__option__{{ option.class }}\">                                            <span class=\"fc-cart__item__option__name\">{{ option.name }}</span>:                                            <span class=\"fc-cart__item__option__value\">{{ option.value }}</span>                                        </li>                                        {% endif %}                                    {% endfor %}                                {% endif %}                                {% if item.code != \'\' and show_product_code %}                                <li class=\"fc-cart__item__option--code\">                                    <span class=\"fc-cart__item__option__name\">{{ config.lang.cart_code|raw }}</span>:                                    <span class=\"fc-cart__item__option__value\">{{ item.code }}</span>                                </li>                                {% endif %}                                {% if item.category != \'DEFAULT\' and show_product_category %}                                <li class=\"fc-cart__item__option--category\">                                    <span class=\"fc-cart__item__option__name\">{{ config.lang.cart_category|raw }}</span>:                                    <span class=\"fc-cart__item__option__value\">{{ item.category }}</span>                                </li>                                {% endif %}                                {% if item.weight != 0 and show_product_weight %}                                <li class=\"fc-cart__item__option--weight\">                                    <span class=\"fc-cart__item__option__name\">{{ config.lang.cart_weight|raw }}</span>:                                    <span class=\"fc-cart__item__option__value\">{{ item.weight }} <span class=\"fc-cart__item__option__value__unit\">{{ weight_uom }}</span></span>                                </li>                                {% endif %}                                {% if item.sub_frequency != \'\' and (show_sub_frequency or show_sub_nextdate or show_sub_startdate or show_sub_enddate) %}                                <li class=\"fc-cart__item__option--subscription-details\">                                    {{ config.lang.cart_subscription_details|raw }}                                    <ul>                                        {% if show_sub_frequency %}                                        <li class=\"fc-cart__item__option--subscription-frequency\">                                            <span class=\"fc-cart__item__option__name\">{{ config.lang.cart_frequency|raw }}</span>:                                            <span class=\"fc-cart__item__option__value\">{{ item.sub_frequency }}</span>                                        </li>                                        {% endif %}                                        {% if show_sub_startdate %}                                        <li class=\"fc-cart__item__option--subscription-startdate\">                                            <span class=\"fc-cart__item__option__name\">{{ config.lang.cart_start_date|raw }}</span>:                                            <span class=\"fc-cart__item__option__value\">{{ item.sub_startdate }}</span>                                        </li>                                        {% endif %}                                    {% if show_sub_nextdate and item.sub_enddate != item.sub_nextdate and (item.sub_enddate == \"0000-00-00\" or (item.sub_enddate != \"0000-00-00\" and item.sub_enddate > item.sub_nextdate)) %}                                        <li class=\"fc-cart__item__option--subscription-nextdate\">                                            <span class=\"fc-cart__item__option__name\">{{ config.lang.cart_next_date|raw }}</span>:                                            <span class=\"fc-cart__item__option__value\">{{ item.sub_nextdate }}</span>                                        </li>                                    {% endif %}                                    {% if show_sub_enddate and item.sub_enddate != \"0000-00-00\" %}                                        <li class=\"fc-cart__item__option--subscription-enddate\">                                            <span class=\"fc-cart__item__option__name\">{{ config.lang.cart_end_date|raw }}</span>:                                            <span class=\"fc-cart__item__option__value\">{{ item.sub_enddate }}</span>                                        </li>                                    {% endif %}                                    </ul>                                </li>                                {% endif %}                                {% if with_controls and checkout_sub_cancel == false and (item.parent_code == \'\' or (item.parent_code != \'\' and item.quantity_min == 0)) %}                                <li class=\"fc-cart__item__actions\">                                    <ul class=\"fc-actions-container\">                                        <li class=\"fc-cart__item__remove\">                                            <a hr" + "ef=\"#\" title=\"{{ config.lang.cart_remove_item }}\" data-fc-id=\"item-remove-link\" data-fc-item-id=\"{{ item.id }}\">{{ config.lang.cart_remove_item|raw }}</a>                                        </li>                                    </ul>                                </li>                                {% endif %}                            </ul>                        {% endblock %}                        </div>                    </div>                    <div class=\"fc-cart__item__totals\">                        <div class=\"fc-container__row\">                            <div class=\"fc-cart__item__total\">                                {% if item.parent_code == \'\' or (item.parent_code != \'\' and item.price > 0) %}                                <p>                                    {{ item.price|money_format }}{% if item.price_is_fractional %}<span title=\"{{ item.price }}\">â€¦</span>{% endif %}                                </p>                                {% endif %}                            </div>                            <div class=\"fc-cart__item__price\">                                {% if item.quantity != 1 %}                                <p class=\"fc-cart__item__price__each\">                                    {{ item.price_each|money_format }}{% if item.price_each_is_fractional %}<span title=\"{{ item.price_each }}\">â€¦</span>{% endif %}                                    <small>                                        {{ config.lang.cart_each|raw }}                                    </small>                                </p>                                {% endif %}                            </div>                            <div class=\"fc-cart__item__quantity\">                                {% if context == \'receipt\' %}                                <p class=\"text-center\">{{ item.quantity }}</p>                                {% elseif item.parent_code == \'\' or (item.parent_code != \'\' and item.quantity_min == 0) %}                                {% if with_controls and checkout_sub_cancel == false %}                                <input type=\"hidden\" id=\"id{{ item.item_number }}\" name=\"id{{ item.item_number }}\" value=\"{{ item.id }}\" />                                <label class=\"hidden\" for=\"quantity{{ item.item_number }}\">{{ config.lang.cart_quantity }}</label>                                <input class=\"fc-cart__item__quantity__input fc-form-control\" type=\"number\" name=\"quantity{{ item.item_number }}\" id=\"quantity{{ item.item_number }}\" min=\"1\" value=\"{{ item.quantity }}\" data-fc-id=\"item-quantity-input\" data-fc-item-id=\"{{ item.id }}\"/>                                    {% else %}                                    <p>{{ config.lang.cart_qty|raw }}: {{ item.quantity }}</p>                                    {% endif %}                                {% else %}                                    <p>{{ config.lang.cart_qty|raw }}: {{ item.quantity }}</p>                                {% endif %}                            </div>                        </div>                    </div>                </div>                {% endfor %}            </div>            {% set info_string = utils.get_info_string(\'quantity\', messages.info) %}            {% if info_string and context != \'cart\' %}                <div class=\"alert\">                {{ info_string }}                </div>            {% endif %}            {% endblock cart_items_divs %}            </div>        </div>        <div class=\"fc-sidebar fc-sidebar--cart\">            {% block logo %}            <div class=\"fc-logo\">                {% if config.store_logo_url %}                <img id=\"fc-logo\" class=\"fc-logo__image\" src=\"{{ config.cache_path }}{{ config.store_logo_url }}\" alt=\"{{ config.store_name }}\">                {% else %}                <h1 id=\"fc-logotype\" class=\"fc-logotype\">{{ config.store_name }}</h1>                {% endif %}            </div>            {% endblock logo %}            <div data-fc-id=\"block-address-entry\">            {% block address_entry %}            {% if context == \'cart\' and not has_multiple_addresses %}                {% if show_address_entry %}                <div class=\"fc-address-entry\">                    <h4>                        <svg class=\"fc-svg-icon fc-icon-large\" role=\"presentation\">                        {% if shipping_address.has_live_rate_shippable_products %}                            <use xlink:hr" + "ef=\"#fa-truck\" /></svg> {{ config.lang.cart_calculate_shipping|raw }}                        {% else %}                            <use xlink:hr" + "ef=\"#fa-bank\" /></svg> {{ config.lang.cart_calculate_taxes|raw }}                        {% endif %}                    </h4>                    {% include \'postal_code.inc.twig\' with {\'address\': shipping_address} %}                    {% if shipping_address.has_live_rate_shippable_products == false %}                        <div class=\"fc-transaction__ui\">                            <button class=\"fc-transaction__ui__button fc-button\" type=\"button\" data-fc-id=\"change-address-button\">                                {{ config.lang.cart_calculate|raw }}                            </button>                        </div>                    {% endif %}                    <div data-fc-id=\"block-shipping-results\">                    {% block shipping_results %}                        {% if shipping_address.loading_shipping_results %}                            <div class=\"fc-spinner\">                              <div class=\"bounce1\"></div>                              <div class=\"bounce2\"></div>                              <div class=\"bounce3\"></div>                            </div>                        {% endif %}                        {{ utils.shipping_results(shipping_address, \"fc-input-group--sidebar\", messages.errors, config.lang) }}                        {% set error_string = utils.get_error_string(\'shipping-results\',messages.errors) %}                        {% if error_string %}                        <div class=\"fc-alert fc-alert--danger\">                            {{ error_string }}                        </div>                        {% endif %}                    {% endblock shipping_results %}                    </div><!-- data-fc-id=\"fc-shipping-results\" -->                </div><!-- .fc-address-entry -->                {% endif %}            {% endif %}            {% endblock address_entry %}            </div><!-- data-fc-id=\"block-address-entry\" -->            <div data-fc-id=\"block-order-totals\">            {% block order_totals %}            <h3 class=\"fc-transaction__header\">{{ config.lang.cart_order_summary|raw }}</h3>            <ul class=\"fc-transaction\">                {% if shipping_address.has_shippable_products or has_taxes or has_discounts %}                <li class=\"fc-transaction__subtotal fc-transaction__section\">                    {% if has_future_products %}<h5>{{ config.lang.cart_todays_charge|raw }}</h5>{% endif %}                    <table>                        <tr class=\"fc-subtotal--row\">                            <td class=\"fc-subtotal__label\"><h5>{{ config.lang.cart_subtotal|raw }}</h5></td>                            <td class=\"fc-subtotal__value\">{{ total_item_price|money_format }}</td>                        </tr>                    </table>                </li>                {% endif %}                {% if shipping_address.has_shippable_products %}                <li class=\"fc-transaction__shipping fc-transaction__section\">                    {% if context == \'cart\' and not has_multiple_addresses %}                        <div class=\"fc-transaction__ui\">                            <h5 class=\"fc-transaction__ui__header\">{{ config.lang.cart_shipping_to|raw }}</h5>                            {% if shipping_address.country and shipping_address.city and show_address_entry == false %}                            <button data-fc-id=\"change-shipping-location-button\" class=\"fc-button fc-transaction__ui__toggle\" type=\"button\">{{ config.lang.cart_change|raw }}</button>                            {% endif %}                        </div>                        {% if shipping_address.country and shipping_address.city %}                        <address class=\"fc-transaction__shipping-address\">                            {{ shipping_address.city }}, {{ shipping_address.region }} {{ shipping_address.postal_code }}                            {% if config.template_config.foxycomplete.show_flags %}                            <img src=\"https://cdn.foxycart.com/static/images/icons/flags/famfamfam/{{ shipping_address.country|lower }}.png\" alt=\"{{ shipping_address.country }}\">                            {% endif %}                        </address>                        {% endif %}                    {% endif %}                    {% set shipping_service_label = config.lang.cart_shipping_and_handling|raw %}                    {% if shipping_address.shipping_service_id != 0 and shipping_address.shipping_service_description %}                        {% set shipping_service_label = shipping_address.shipping_service_description %}                    {% endif %}                    <table>                        <tbody class=\"fc-subtotal--shipping\">                        <tr class=\"fc-subtotal--row\">                            <td class=\"fc-subtotal__label\">{{ shipping_service_label|raw }}</td>                            <td class=\"fc-subtotal__value\">                            {% if show_shipping_tbd %}                                {{ config.lang.cart_tbd|raw }}                            {% else %}                                {{ total_shipping|money_format }}                            {% endif %}                            <input                                id=\"total_shipping\"                                type=\"hidden\"                                name=\"total_shipping\"                                value=\"{{ total_shipping }}\"                            />                            <input                                id=\"total_future_shipping\"                                type=\"hidden\"                                name=\"total_future_shipping\"                                value=\"{{ total_future_shipping }}\"                            />                            </td>                        </tr>                        </tbody>                    </table>                </li>                {% elseif total_shipping > 0 %}                <li class=\"fc-transaction__shipping fc-transaction__section\">                    <table>                        <tbody class=\"fc-subtotal--shipping\">                        <tr class=\"fc-subtotal--row\">                            <td class=\"fc-subtotal__label\">{{ shipping_and_handling_label|raw }}</td>                            <td class=\"fc-subtotal__value\">                                {{ total_shipping|money_format }}                            <input                                id=\"total_shipping\"                                type=\"hidden\"                                name=\"total_shipping\"                                value=\"{{ total_shipping }}\"                            />                            </td>                        </tr>                        </tbody>                    </table>                </li>                {% endif %}                {% set enable_coupon_and_gift_cart_controls = ((has_eligible_coupons or has_eligible_gift_cards) and with_controls) %}                {% if context == \'checkout\' %}                    {% set enable_coupon_and_gift_cart_controls = ((has_eligible_coupons or has_eligible_gift_cards) and config.template_config.custom_checkout_field_requirements.coupon_entry == \'enabled\') %}                {% endif %}                {% if has_eligible_gift_cards and has_eligible_coupons %}                    {% set discount_lang_string = config.lang.cart_add_coupon_and_gift_card %}                {% elseif has_eligible_coupons %}                     {% set discount_lang_string = config.lang.cart_add_coupon %}                {% elseif has_eligible_gift_cards %}                     {% set discount_lang_string = config.lang.cart_add_gift_card %}                {% endif %}                {% if not is_subscription_cancel and (enable_coupon_and_gift_cart_controls or coupons|length > 0 or gift_cards|length > 0) %}                <li class=\"fc-transaction__discounts fc-transaction__section\">                    <div data-fc-id=\"block-coupon-entry\">                    {% block coupon_entry %}                    <div class=\"fc-transaction__ui\">                        <h5 class=\"fc-transaction__ui__header\">{{ config.lang.cart_discounts|raw }}</h5>                        {% if enable_coupon_and_gift_cart_controls %}                            <button class=\"fc-transaction__ui__toggle fc-button\" type=\"button\" data-fc-id=\"show-coupon-input-button\">                            {% if show_coupon_input_button %}                                {{ config.lang.cart_hide_coupon_input|raw }}                            {% else %}                                {{ discount_lang_string|raw }}                            {% endif %}                            </button>                        {% endif %}                    </div>                    {% set error_string = utils.get_error_string(\'coupon\',messages.errors) %}                    {% set error_string = error_string ~ utils.get_error_string(\'gift_card\',messages.errors) %}                    {% if enable_coupon_and_gift_cart_controls and show_coupon_input_button %}                    <div class=\"fc-coupon-entry--input\">                        <input type=\"text\"                            name=\"coupon\"                            id=\"coupon\"                            value=\"{{ current_coupon_code }}\"                            class=\"fc-coupon-entry__input fc-form-control\"                            placeholder=\"{{ config.lang.cart_coupon_code }}\"                            autocomplete=\"off\">                        <span class=\"fc-input-group__button\">                            <button class=\"fc-button fc-coupon-entry__apply\" type=\"button\" data-fc-id=\"add-coupon-button\">{{ config.lang.cart_apply|raw }}</button>                        </span>                    </div>                    {% endif %}                    {% if loading_coupons %}                    <div class=\"fc-spinner\">                      <div class=\"bounce1\"></div>                      <div class=\"bounce2\"></div>                      <div class=\"bounce3\"></div>                    </div>                    {% endif %}                    {% if error_string %}                    <div class=\"fc-alert fc-alert--warning\">                        {{ error_string|raw }}                    </div>                    {% endif %}                    {% endblock coupon_entry %}                    </div><!-- data-fc-id=\"block-coupon-entry\" -->                    {% if coupons|length > 0 %}                    <table>                        {% for key,coupon_data in coupons %}                            {% if coupon_data is not array %}                                {% set coupon_data = [coupon_data] %}                            {% endif %}                            {% set coupon_code = key %}                            {% for i, coupon in coupon_data %}                                <tr class=\"fc-subtotal--row {# if not coupon.is_applied %}fc-subtotal--row--inactive{% endif #}\" data-fc-coupon-container-id=\"{{ coupon.id }}\">                                    <td class=\"fc-subtotal__label\">                                        <span class=\"fc-coupon__name\">{{ coupon.name }}</span>:                                        <span class=\"fc-coupon__code\">{{ coupon_code }}</span>                                        {% if enable_coupon_and_gift_cart_controls %}                                        <span class=\"fc-action--close\">                                            <a hr" + "ef=\"https://{{ config.store_domain }}/cart?cart=remove_coupon&amp;coupon_code_id={{ coupon.id }}&amp;{{ session_name }}={{ session_id }}\" title=\"{{ config.lang.cart_remove_coupon }}\" data-fc-id=\"remove-coupon-link\" data-fc-coupon-code-id=\"{{ coupon.id }}\">                                                <svg class=\"fc-svg-icon\" title=\"Remove Coupon\" role=\"presentation\"><use xlink:hr" + "ef=\"#fa-times-circle\" /></svg>                                            </a>                                        </span>                                        {% endif %}                                    </td>                                    <td class=\"fc-subtotal__value\">{{ coupon.amount|money_format }}</td>                                </tr>                            {% endfor %}                        {% endfor %}                    </table>                    {% endif %}                    {% if gift_cards|length > 0 %}                    <table>                        {% for key,gift_card_data in gift_cards %}                            {% if gift_card_data is not array %}                                {% set gift_card_data = [gift_card_data] %}                            {% endif %}                            {% set gift_card_code = key %}                            {% for i, gift_card in gift_card_data %}                                <tr class=\"fc-subtotal--row\" data-fc-gift-card-container-id=\"{{ gift_card.code_id }}\">                                    <td class=\"fc-subtotal__label\">                                        <span class=\"fc-gift-card__name\">{{ gift_card.name }}</span>:                                        <span class=\"fc-gift-card__code\">{{ gift_card_code }}</span>                                        {% if enable_coupon_and_gift_cart_controls %}                                        <span class=\"fc-action--close\">                                            <a hr" + "ef=\"\" data-fc-id=\"remove-gift-card-link\" data-fc-gift-card-code-id=\"{{ gift_card.code_id }}\">                                                <svg class=\"fc-svg-icon\" title=\"Remove Gift Card\" role=\"presentation\"><use xlink:hr" + "ef=\"#fa-times-circle\" /></svg>                                            </a>                                        </span>                                        {% endif %}                                    </td>                                    <td class=\"fc-subtotal__value\">{{ gift_card.amount|money_format }}</td>                                </tr>                            {% endfor %}                        {% endfor %}                    </table>                    {% endif %}                </li>                {% endif %}                {% if has_taxes %}                <li class=\"fc-transaction__taxes fc-transaction__section\">                    {% set show_tax_header = false %}                    {% if has_multiple_addresses %}                        {% for multiship in multiship_data %}                            {% if multiship.taxes|length > 0 %}                                {% set show_tax_header = true %}                            {% endif %}                        {% endfor %}                    {% endif %}                    {% if shipping_address.taxes|length > 0 and total_tax > 0 %}                        {% set show_tax_header = true %}                    {% endif %}                    {% if show_tax_header %}                    <div class=\"fc-transaction__ui\">                        <h5 class=\"fc-transaction__ui__header\">{{ config.lang.cart_tax|raw }}</h5>                    </div>                        {% if loading_taxes %}                            <div class=\"fc-spinner\">                              <div class=\"bounce1\"></div>                              <div class=\"bounce2\"></div>                              <div class=\"bounce3\"></div>                            </div>                        {% endif %}                    {% endif %}                    <table>                        <tbody data-fc-id=\"taxes\" class=\"fc-subtotal--taxes\">                        {% block taxes %}                        {% if has_multiple_addresses %}                            {% if context == \'checkout\' %}                                {% for multiship in multiship_data %}                                    {% for tax in multiship.taxes %}                                    {% if tax.rate is null  %}                                        {% set tax_rate = \'\' %}                                    {% else %}                                        {% set tax_rate = \' (<span class=\"fc_cart_foot_tax_rate\">\' ~ tax.rate ~ \'</span>%)\' %}                                    {% endif %}                                    <tr class=\"fc-subtotal--row\">                                        <td class=\"fc-subtotal__label\">                                            {{ multiship.address_name }}: {{ tax.name }}{{ tax_rate|raw }}:                                        </td>                                        <td class=\"fc-subtotal__value\">                                            {{ tax.amount|money_format }}                                        </td>                                    </tr>                                    {% endfor %}                                {% endfor %}                            {% endif %}                            {% if context == \'receipt\' %}                                {% if shipping_address.taxes|length == 0 %}                                <tr class=\"fc-subtotal--row\">                                    <td class=\"fc-subtotal__label\">                                        {{ config.lang.cart_tax|raw }}                                    </td>                                    <td class=\"fc-subtotal__value\">                                        {{ total_tax|money_format }}                                    </td>                                </tr>                                {% endif %}                                {% for tax in shipping_address.taxes %}                                {% if tax.rate is null  %}                                    {% set tax_rate = \'\' %}                                {% else %}                                    {% set tax_rate = \' (<span class=\"fc_cart_foot_tax_rate\">\' ~ tax.rate ~ \'</span>%)\' %}                                {% endif %}                                <tr class=\"fc-subtotal--row\">                                    <td class=\"fc-subtotal__label\">                                        {{ tax.name }}{{ tax_rate|raw }}:                                    </td>                                    <td class=\"fc-subtotal__value\">                                        {{ tax.amount|money_format }}                                    </td>                                </tr>                                {% endfor %}                            {% endif %}                        {% endif %}                        {% for tax in shipping_address.taxes %}                        <tr class=\"fc-subtotal--row\">                            {% if tax.rate is null  %}                                {% set tax_rate = \'\' %}                            {% else %}                                {% set tax_rate = \' (<span class=\"fc_cart_foot_tax_rate\">\' ~ tax.rate ~ \'</span>%)\' %}                            {% endif %}                            <td class=\"fc-subtotal__label\">                                {{ tax.name }}{{ tax_rate|raw }}:                            </td>                            <td class=\"fc-subtotal__value\">                                {{ tax.amount|money_format }}                            </td>                        </tr>                        {% endfor %}                        {% endblock %}                        </tbody>                    </table>                </li>                {% endif %}                <li class=\"fc-transaction__total fc-transaction__section\">                    <table>                        <tr class=\"fc-subtotal--row\">                            <td class=\"fc-subtotal__label\">                                {{ config.lang.cart_order_total|raw }}:                            </td>                            <td class=\"fc-subtotal__value\">                                {{ total_order|money_format }}                            </td>                        </tr>                    </table>                </li>            </ul>            {% if context == \"checkout\" and has_multiple_addresses and multiship_data|length > 1 %}            <div class=\"fc-transaction fc-transaction--multiship\">                <button type=\"button\" class=\"fc-button fc-transaction__ui__toggle\" data-fc-id=\"button-toggle-multiship-details\">{{ config.lang.cart_details|raw }}</button>                {% for multiship in multiship_data %}                <div class=\"fc-transaction__ui\">                    <h5 class=\"fc-transaction__ui__header\">{{ config.lang.cart_shipto|raw }}{{ multiship.address_name }}                        <span class=\"fc-transaction__ui__header__value\">{{ multiship.total_price|money_format }}</span></h5>                    {% if show_multiship_details %}                        <table>                            <tr class=\"fc-subtotal--row\">                                <td class=\"fc-subtotal__label\"> {{ config.lang.checkout_shipment_subtotal|raw }}: </td>                                <td class=\"fc-subtotal__value\"> {{ multiship.total_item_price|money_format }} </td>                            </tr>                            <tr class=\"fc-subtotal--row\">                                <td class=\"fc-subtotal__label\"> {{ multiship.shipping_service_description|raw }}: </td>                                <td class=\"fc-subtotal__value\"> {{ multiship.total_shipping|money_format }} </td>                            </tr>                            <tr class=\"fc-subtotal--row\">                                <td class=\"fc-subtotal__label\"> {{ config.lang.checkout_shipment_tax|raw }}: </td>                                <td class=\"fc-subtotal__value\"> {{ multiship.total_tax|money_format }} </td>                            </tr>                            <tr class=\"fc-subtotal--row\">                                <td class=\"fc-subtotal__label\"> {{ config.lang.checkout_shipment_total|raw }}: </td>                                <td class=\"fc-subtotal__value\"> {{ multiship.total_price|money_format }} </td>                            </tr>                        </table>                    {% endif %}                </div>                {% endfor %}            </div>            {% endif %}            {% if has_future_products and not is_subscription_cancel %}            {% block future_products %}            <div class=\"fc-transaction fc-transaction--future\">                {% set has_future_subscription_details = false %}                {% if future_subscription_totals_by_date|length > 0 and (has_future_shipping or future_coupons|length > 0 or has_future_taxes) %}                    {% set has_future_subscription_details = true %}                {% endif %}                {% if (context == \"cart\" or context == \"checkout\") and has_future_subscription_details %}                <button type=\"button\" class=\"fc-button fc-transaction__ui__toggle\" data-fc-id=\"button-toggle-future-subscription-details\">{{ config.lang.cart_details|raw }}</button>                {% endif %}                    {% if future_subscription_totals_by_date|length > 0 %}                    <h5 class=\"fc-transaction__ui__header\">                    {% if future_subscription_totals_by_date|length > 1 %}                        {{ config.lang.cart_future_charges|raw }}                    {% else %}                        {{ config.lang.cart_future_charge|raw }}                    {% endif %}                    </h5>                    {% endif %}                    {% for key, subscription_item_total in future_subscription_totals_by_date %}                        <div class=\"fc-transaction__ui\">                            <h5 class=\"fc-transaction__ui__header\">{{ key|date(\"F jS, Y\") }}                                <span class=\"fc-transaction__ui__header__value\">{{ subscription_item_total.total|money_format }}</span>                            </h5>                        {% if has_future_subscription_details and show_future_subscriptions_details %}                            <table>                                <tr class=\"fc-subtotal--row\">                                    <td class=\"fc-subtotal__label\"> {{ config.lang.cart_subtotal|raw }}: </td>                                    <td class=\"fc-subtotal__value\"> {{ subscription_item_total.total_item_price|money_format }} </td>                                </tr>                                {% for key,coupon in future_coupons %}                                <tr class=\"fc-subtotal--row fc-transaction--future__discounts\">                                    <td class=\"fc-subtotal__label\">{{ coupon.name }}: {{ key }}</td>                                    <td class=\"fc-subtotal__value\">{{ coupon.amount|money_format }}</td>                                </tr>                                {% endfor %}                                {% if has_future_shipping %}                                <tr class=\"fc-subtotal--row\">                                    <td class=\"fc-subtotal__label\"> {{ shipping_address.future_shipping_service_description|raw }}: </td>                                    <td class=\"fc-subtotal__value\"> {{ subscription_item_total.total_shipping|money_format }} </td>                                </tr>                                {% endif %}                                {% if has_future_taxes %}                                <tr class=\"fc-subtotal--row\">                                    <td class=\"fc-subtotal__label\"> {{ config.lang.cart_tax|raw }}: </td>                                    <td class=\"fc-subtotal__value\"> {{ subscription_item_total.total_tax|money_format }} </td>                                </tr>                                {% endif %}                                <tr class=\"fc-subtotal--row\">                                    <td class=\"fc-subtotal__label\"> {{ config.lang.cart_total|raw }}: </td>                                    <td class=\"fc-subtotal__value\"> {{ subscription_item_total.total|money_format }} </td>                                </tr>                            </table>                        {% endif %}                        </div>                    {% endfor %}            </div>            {% endblock future_products %}            {% endif %}            {% endblock order_totals %}            </div><!-- data-fc-id=\"block-order-totals\" -->            {% block order_payment_actions %}            {% if context == \'cart\' %}            <div class=\"fc-actions--payment\">            {% if items|length > 0 %}                {% block order_payment_action_checkout %}                <p class=\"fc-action--payment--checkout\">                    <a class=\"fc-action--checkout--button\" hr" + "ef=\"https://{{ config.store_domain }}/checkout?{{ session_name }}={{ session_id }}\" target=\"_top\"><svg class=\"fc-svg-icon\" role=\"presentation\" title=\"Security Icon\"><use xlink:hr" + "ef=\"#fa-lock\" /></svg> {{ config.lang.cart_checkout|raw }}</a>                </p>                {% endblock order_payment_action_checkout %}                {% block order_payment_action_paypal_express %}                {% if total_order > 0 %}                    {% if show_paypal_express_payment_option %}                    <p class=\"fc-action--payment--or\">â€”{{ config.lang.cart_or|raw }}â€”</p>                    <p class=\"fc-action--payment--paypal-express-checkout\">                        <a data-fc-id=\"paypal-link\" hr" + "ef=\"https://{{ config.store_domain }}/checkout?ThisAction=paypal_express&{{ session_name }}={{ session_id }}\" target=\"_top\">                            <img src=\"{{ config.paypal_checkout_button_url }}\" alt=\"{{ config.lang.cart_payment_method_paypal_express }}\" />                        </a>                    </p>                    {% endif %}                {% endif %}                {% endblock order_payment_action_paypal_express %}                {% block order_payment_options %}                {% if payment_info_required %}                    {% for gateway in order_payment_options %}                    <p class=\"fc-action--payment--or\">â€”{{ config.lang.cart_or|raw }}â€”</p>                    <p class=\"fc-action--payment--{{ gateway.name_dashed }}\">                        <a data-fc-id=\"{{ gateway.name_dashed }}-link\" hr" + "ef=\"https://{{ config.store_domain }}/checkout?ThisAction=checkout&amp;fc_payment_method={{ gateway.name }}&amp;{{ session_name }}={{ session_id }}{%if gateway.additional_params%}&amp;{{gateway.additional_params}}{% endif %}\" target=\"_top\">                            <img src=\"{{ gateway.logo_url }}\" alt=\"{{ gateway.name }}\"/>                        </a>                    </p>                    {% endfor %}                {% endif %}{# payment_info_required #}                {% endblock order_payment_options %}            {% endif %}{# items|length > 0 #}            </div>            {% endif %}{# context == \'cart\' #}            {% endblock order_payment_actions %}        </div>        {% block cart_form_end %}        {% if with_controls %}        </form>        {% endif %}        {% endblock cart_form_end %}    </div>{# .fc-cart-container #}    {% endif %} {# not is_updateinfo #}</div>{# #fc-cart-responsive / #fc-cart-non-responsive #}</div><!-- data-fc-container=\"cart\" --><!-- Adds Empty Cart Button -->{% if cart_is_fullpage or context == \"checkout\" %}    <script>        FC.client.on(\'ready.done\', addEmptyCartFull);	FC.client.on(\'render.done\', addEmptyCartFull); 	function addEmptyCartFull() { 	    var empty_cart = \'https://\'+FC.settings.storedomain+\'/cart?cart=empty\';	    if (!$(\'#cart_empty\').html()) {         	$(\'.fc-cancel-continue-shopping.fc-container__grid\').append(\"<span id=\'cart_empty\'><a hr" + "ef=\" + empty_cart + \" class=\'fc-button fc-button--cancel\'>Empty Cart</a></span>\");    	    }	}    <" + "/script>{% elseif context == \"cart\" %}    <script>        FC.client.on(\'render.done\', addEmptyCartSide);         function addEmptyCartSide() {             var empty_cart = \'https://\'+FC.settings.storedomain+\'/cart?cart=empty\';            if (!$(\'#cart_empty\').html()) {                 $(\'#fc .fc-cart__title__header\').after(\"<div id=\'cart_empty\'><a hr" + "ef=\"+ empty_cart + \" class=\'fc-button fc-button--cancel\'>Empty Cart</a></div>\");            }        }    <" + "/script>{% endif %}<!-- Installation Insurance -->{% if context == \"checkout\" %}<script>  FC.client.on(\'cart-update.done\', showInsuranceOption);  FC.client.on(\'cart-item-remove.done\', showInsuranceOption);  FC.client.on(\'cart-submit.done\', showInsuranceOption);  FC.client.on(\'cart-item-quantity-update.done\', showInsuranceOption);  function showInsuranceOption(params) {     if (!params.data || (params.data && params.data.code != \"Installation Insurance\")) {       var insurance_id = 0;      for (var i=0; i<FC.json.items.length; i++) {         if (FC.json.items[i].code == \'Installation Insurance\' ) {           insurance_id = FC.json.items[i].id;        }      }      if (insurance_id != 0) {         FC.client.request(\"https://{{ config.store_domain }}/cart?cart=update&quantity=0&id=\" +insurance_id+ \"\").done(function() {           FC[FC.json.context].render();        });        alert(\'Installation Insurance was removed because the order changed. You can re-add it with the new price in the \"Almost Done!\" section.\');      }    }    FC.checkout.renderAdditionalFields();  }<" + "/script>{% endif %}{% endblock %}{# cart #}{# ===================================================== #}"
});
twig({
  id: "postal_code.inc.twig",
  autoescape: true,
  allowInlineIncludes: true,
  data: "{# Postal Code Madness begins here #}{% set country_current = address.country %}{% set country_supports_postalcode_search = config.locations[country_current].pc.search %}{% set show_country = true %}{% set show_postal_code = true %}{% set show_city = true %}{% set show_region = true %}{% set postal_code_optional_placeholder = \'\' %}{% set city_optional_placeholder = \'\' %}{% set region_optional_placeholder = \'\' %}{% set country_config = config.template_config.custom_checkout_field_requirements[\'billing_country\'] %}{% set postal_code_config = config.template_config.custom_checkout_field_requirements[\'billing_postal_code\'] %}{% set city_config = config.template_config.custom_checkout_field_requirements[\'billing_city\'] %}{% set region_config = config.template_config.custom_checkout_field_requirements[\'billing_region\'] %}{% if address.type == \'billing\' %}    {% set show_country = (country_config != \'hidden\') %}    {% set postal_code_optional_placeholder = (postal_code_config == \'optional\') ? config.lang.checkout_optional : \'\' %}    {% set show_postal_code = (postal_code_config != \'hidden\') %}    {% set city_optional_placeholder = (city_config == \'optional\') ? config.lang.checkout_optional : \'\' %}    {% set show_city = (city_config != \'hidden\') %}    {% set region_optional_placeholder = (region_config == \'optional\') ? config.lang.checkout_optional : \'\' %}    {% set show_region = (region_config != \'hidden\') %}{% endif %}{% if config.template_config.postal_code_lookup.usage == \'none\' or show_postal_code == false %}    {% set country_supports_postalcode_search = false %}{% endif %}{% set postal_search_button = \"--with-search\" %}{# Used to set border-radius on zip-input #}{% if _context[address.prefix~\'_postal_code_in_progress\'] or address.city_options|length > 0 %}    {% set postal_search_button = \"\" %}{% endif %}<div data-fc-id=\"block-{{ address.prefix }}-postal-code\" class=\"fc-postal-code-entry\">{# If postalcode search is supported for the current country, display postalcode first, then city/state options after. #}{% if country_supports_postalcode_search %}{% set field_name = address.prefix~\"_postal_code\" %}{% set error_string = utils.get_error_string(field_name, messages.errors) %}<div class=\"fc-form-group fc-form-group--multiple-inline{% if address.city_options|length > 0 %}{% else %} fc-container--postal-code-actions--search{% endif %} {% if error_string %} fc-alert-container--error{% endif %}\" data-fc-error-for=\"{{ field_name }}\" data-fc-error-class=\"fc-alert-container--error\">    <div class=\"fc-container__grid--postal-code\">        {# TODO: change the type to phone if country has numeric postcodes (like US) #}        <label for=\"{{ field_name }}\" class=\"fc-form-label fc-form-label--postal-code\">{{ getPostalCodeLabel(address.country) }}</label>        <input type=\"text\"            id=\"{{ field_name }}\"            name=\"{{ field_name }}\"            value=\"{{address.postal_code }}\"            placeholder=\"{{ getPostalCodeLabel(address.country) }}{{ postal_code_optional_placeholder }}\"            autocomplete=\"{{ address.type }} postal-code\"            class=\"fc-form-control fc-form-control--postal-code fc-form-control--postal-code{{postal_search_button}} \"            />    </div>    <div class=\"fc-container__grid--postal-code-actions\" data-fc-id=\"block-{{ address.prefix }}-postal-code-actions\">        {#        <!-- TODO: How to get something like: -->        <!-- \"Enter [ZIP | postal] code for city and [state | province | county | canton].\" -->        <!-- without tying checkout.js to the DOM? -->        <!-- {{ config.lang.checkout_location_zipcode|raw }} {{ config.lang.checkout_location_postalcode|raw }} {{ config.lang.checkout_location_state|raw }} {{ config.lang.checkout_location_canton|raw }} {{ config.lang.checkout_location_county|raw }} {{ config.lang.checkout_location_province|raw }} -->        #}        {% if _context[address.prefix~\'_postal_code_in_progress\'] %}        <div class=\"fc-postal-code-entry__loading\">            <p class=\"fc-postal-code-entry__loading__text\">                {{ config.lang.checkout_loading|raw }}            </p>            <div class=\"fc-spinner\">              <div class=\"bounce1\"></div>              <div class=\"bounce2\"></div>              <div class=\"bounce3\"></div>            </div>        </div>        {% elseif address.city_options|length > 0 %}        {% set field_name = address.prefix~\"_city_options\" %}        <div class=\"fc-postal-code-entry__city-state-options\" data-fc-error-for=\"{{ field_name }}\" data-fc-error-class=\"fc-alert-container--error\">            <label for=\"{{ field_name }}\" class=\"fc-form-label fc-form-label--city-options\">{{ config.lang.checkout_location_province|raw }}</label>            <select class=\"fc-form-control fc-form-control--city-options\" id=\"{{ field_name }}\" data-fc-id=\"{{ field_name }}\">                {% for city_option in address.city_options %}                {% set city_option_value = formatCityOption(city_option) %}                <option                    {{ selected(city_option_value, address.city_option_selected) }}                    data-city=\"{{ city_option.city }}\"                    data-region=\"{{ city_option.region }}\"                    value=\"{{ city_option_value }}\">                    {{ city_option_value }}                </option>                {% endfor %}                <option                    {{ selected(\'\', address.city_option_selected) }}                    value=\"\">                    {{ config.lang.checkout_location_other|raw }}                </option>            </select>        </div>        {% else %}        <p class=\"fc-postal-code-entry__submit\"> {# form-control-static #}            <button type=\"button\" data-fc-id=\"submit-{{ address.prefix }}-postal-code\" class=\"fc-button\">{{ config.lang.checkout_submit_postal_code|raw }}</button>        </p>        {% endif %}    </div>    {% if error_string %}        <div class=\"fc-container__grid--postal-code-errors\">            <div class=\"fc-alert fc-alert--danger\">                {% if error_string == \'<p>invalid</p>\' %}                    {{ config.lang.cart_error_postal_code_lookup|raw }}                {% else %}                    {{ config.lang.cart_error_postal_code|raw }}                {% endif %}            </div>        </div>    {% endif %}</div>{% endif %}{# If the postalcode->city+region lookup doesn\'t yield results, or if the customer selects \"other\", display visible inputs. Else, they\'re hidden and populated from javascript and the postalcode lookup functionality. #}{% if _context[\'show_\'~address.prefix~\'_city_inputs\'] or not country_supports_postalcode_search %}<div class=\"fc-form-group {% if show_city and show_region %}fc-form-group--multiple-inline {% endif %}fc-postal-code__manual-inputs\">    {% set field_name = address.prefix~\"_city\" %}    {% set error_string = utils.get_error_string(field_name, messages.errors) %}    {% if show_city %}    <div class=\"fc-container__grid--city {% if error_string %}fc-alert-container--error{% endif %}\" data-fc-error-for=\"{{ field_name }}\" data-fc-error-class=\"fc-alert-container--error\">        <label for=\"{{ field_name }}\" class=\"fc-form-label fc-form-label--city\">{{ config.lang.checkout_city|raw }}</label>        <input type=\"text\"            id=\"{{ field_name }}\"            name=\"{{ field_name }}\"            value=\"{{ address.city }}\"            placeholder=\"{{ config.lang.checkout_city }}{{ city_optional_placeholder }}\"            autocomplete=\"{{ address.type }} locality\"            maxlength=\"50\"            {% if city_config == \'required\' %}data-fc-required{% endif %}            class=\"fc-form-control fc-form-control--city\" />    </div>    {% endif %}    {% if show_region %}    {% set error_string = utils.get_error_string(address.prefix~\'_region\', messages.errors) %}    <div class=\"fc-container__grid--region {% if error_string %}fc-alert-container--error{% endif %}\" data-fc-container-for=\"{{ address.prefix }}_region\">        {% include \"regions.inc.twig\" with {\'location_type\': \'region\'} %}    </div>    {% endif %}</div>{% else %}    <input type=\"hidden\"        name=\"{{ address.prefix }}_city\"        value=\"{{ address.city }}\" />    <input type=\"hidden\"        name=\"{{ address.prefix }}_region\"        value=\"{{ address.region }}\"/>{% endif %}{# If postalcode search is _not_ supported for the current country, display city+region text inputs first, then postalcode + country second. #}{% if not country_supports_postalcode_search %}<div class=\"fc-form-group {% if show_country and show_postal_code %}fc-form-group--multiple-inline{% endif %} fc-postal-code-entry__without-search\">    {% set field_name = address.prefix~\"_postal_code\" %}    {% set error_string = utils.get_error_string(field_name, messages.errors) %}    {% if show_postal_code %}    <div class=\"fc-container__grid--postal-code  {% if error_string %}fc-alert-container--error{% endif %}\" data-fc-error-for=\"{{ field_name }}\" data-fc-error-class=\"fc-alert-container--error\">        <!-- TODO: change the type to phone if country has numeric postcodes (like US) -->        <label for=\"{{ field_name }}\" class=\"fc-form-label fc-form-label--postal-code\">{{ config.lang.checkout_location_zipcode|raw }}</label>        <input type=\"text\"            id=\"{{ field_name }}\"            name=\"{{ field_name }}\"            value=\"{{ address.postal_code }}\"            placeholder=\"{{ getPostalCodeLabel(address.country) }}{{ postal_code_optional_placeholder }}\"            autocomplete=\"{{ address.type }} postal-code\"            maxlength=\"20\"            {% if postal_code_config == \'required\' %}data-fc-required{% endif %}            class=\"fc-form-control fc-form-control--postal-code\" />    </div>    {% endif %}    {% if show_country %}    {% set error_string = utils.get_error_string(address.prefix~\'_country\', messages.errors) %}    <div class=\"fc-container__grid--country {% if error_string %}fc-alert-container--error{% endif %}\">        {% include \"regions.inc.twig\" with {\'location_type\': \'country\'} %}    </div>    {% endif %}</div>{% endif %}{% if country_supports_postalcode_search and show_country %}<div class=\"fc-form-group fc-postal-code-entry__with-search\">    {% set error_string = utils.get_error_string(address.prefix~\'_country\', messages.errors) %}    <div class=\" fc-container__grid--country {% if error_string %}fc-alert-container--error{% endif %}\" data-fc-container-for=\"{{ address.prefix }}_country\">        {% include \"regions.inc.twig\" with {\'location_type\': \'country\' } %}    </div></div>{% endif %}</div>{# data-fc-id=\"block-{{ address.prefix }}-postal-code\" #}"
});
twig({
  id: "regions.inc.twig",
  autoescape: true,
  allowInlineIncludes: true,
  data: "{% set field_name = address.prefix~\'_\'~location_type %}{% set show_field = true %}{% set field_config = \"required\" %}{% set field_optional_placeholder = \'\' %}{% set maxlength = 50 %}{% if address.type == \'billing\' %}    {% set field_config = config.template_config.custom_checkout_field_requirements[address.type~\'_\'~location_type] %}    {% set field_optional_placeholder = (field_config == \'optional\') ? config.lang.checkout_optional : \'\' %}    {% set show_field = (field_config != \'hidden\') %}{% endif %}{% if show_field %}    {% set locations = config.locations %}    {% set locations_filter = (address.type == \'billing\') ? config.locations_billing : config.locations_shipping %}    {% set region_lang = \"checkout_country\" %}    {% set country_code = ((address.country not in locations_filter|keys) or ((address.country in locations_filter|keys) and (locations_filter[address.country] != \"*\"))) ? address.country : false %}    {% set required_attr = (field_config == \"required\") ? \"data-fc-required\" : \"\" %}    {% if location_type == \"region\" %}        {% if country_code %}            {% set region_lang = \"checkout_location_\"~locations[country_code][\'r\'][\'lang\'] %}            {% set locations = locations[country_code][\'r\'][\'options\'] %}            {% set locations_filter = (country_code in locations_filter|keys) ? locations_filter[country_code] : [] %}            {% set required_attr = (locations[country_code][\'r\'][\'req\']) ? \"data-fc-required\" : \"\" %}        {% else %}            {% set locations = [] %}            {% set region_lang = \"checkout_location_state\" %}        {% endif %}    {% endif %}    {% if location_type == \"country\" %}        {% set maxlength = 2 %}    {% endif %}    <label for=\"{{ field_name }}\" class=\"fc-form-label fc-form-label--region\">{{ config.lang[region_lang]|raw }}</label>    {% if locations|length > 0 %}        <select class=\"fc-form-control fc-location\" data-fc-default-value=\"{{ address[location_type] }}\" data-fc-id=\"{{ field_name }}\" {{ required_attr }} name=\"{{ field_name }}\">            <option value=\"\"></option>            {% for c in locations %}                {% if location_type == \"country\" %}                    {% if (c.cc2 not in locations_filter|keys) or ((c.cc2 in locations_filter|keys) and (locations_filter[c.cc2] != \"*\")) %}                        <option                            value=\"{{ c.cc2 }}\"                            data-relevancy-booster=\"{{ c.boost }}\"                            data-alternative-spellings=\"{{ c.cc2 }}{% for alt in c.alt %}||{{ alt }}{% endfor %}\"                            {% if c.cc2 == address[location_type] %}selected{% endif %}                        >{{ c.cn }}</option>                    {% endif %}                {% else %}                    {% if (locations_filter != \"*\") and (c.c not in locations_filter) %}                        <option                            value=\"{{ c.c }}\"                            data-relevancy-booster=\"{{ c.boost }}\"                            data-alternative-spellings=\"{{ c.c }}{% for alt in c.alt %}||{{ alt }}{% endfor %}\"                            {% if address[location_type] in [c.c, c.n] %}selected{% endif %}                        >{{ c.n }}</option>                    {% endif %}                {% endif %}            {% endfor %}        </select>    {% else %}        {% set field_value = address[location_type~\'_name\'] %}        {% if field_value == \"\" %}            {% set field_value = address[location_type] %}        {% endif %}        <input            data-fc-id=\"{{ field_name }}\"            name=\"{{ field_name }}\"            value=\"{{ field_value }}\"            type=\"text\"            {{ required_attr }}            placeholder=\"{{ config.lang[region_lang] }}{{ field_optional_placeholder }}\"            maxlength=\"{{ maxlength }}\"            class=\"fc-form-control fc-location\" />    {% endif %}{% endif %}"
});
twig({
  id: "utils.inc.twig",
  autoescape: true,
  allowInlineIncludes: true,
  data: "{% macro get_info_string(context, info) %}{# don\'t indent as it will return a non-empty string #}{# even if there\'s no error #}{% for info_entry in info if info_entry.context == context %}<p>{{ info_entry.message|raw }}</p>{% endfor %}{% endmacro %}{% macro get_error_string(field_name, errors) %}{# don\'t indent as it will return a non-empty string #}{# even if there\'s no error #}{% for error in errors if error.context == field_name %}<p>{{ error.message|raw }}</p>{% endfor %}{% endmacro %}{% macro get_warning_string(context, warnings) %}{# don\'t indent as it will return a non-empty string #}{# even if there\'s no error #}{% for warning in warnings if warning.context == context %}<p>{{ warning.message|raw }}</p>{% endfor %}{% endmacro %}{% macro shipping_results(address, context_class, errors, lang) %}{% set field_name = \'shipping_service_id\' %}{% if address.prefix != \'shipping\' %}    {% set field_name = address.prefix~\'_\'~field_name %}{% endif %}{% set error_string = _self.get_error_string(field_name, errors) %}{% if address.shipping_results|length > 0 %}<div class=\"fc-form-group fc-shipping-rates{% if error_string %} fc-alert-container--error{% endif %}\">    <div class=\"fc-input-group-container--radios {{ context_class }}\">        {% for rate in address.shipping_results %}        {# <div class=\"shipping-rate radio active\"> #}        <div class=\"fc-shipping-rates__rate fc-input-group-container--radio {% if rate.service_id == address.shipping_service_id %}fc-input-group-container--active{% endif %}\">            <label for=\"{{ field_name }}_{{ rate.service_id }}\" class=\"fc-form-label fc-form-label--shipping-rate\">                <input                    id=\"{{ field_name }}_{{ rate.service_id }}\"                    type=\"radio\"                    name=\"{{ field_name }}\"                    value=\"{{ rate.service_id }}\"                    class=\"fc-form-control--shipping-rate\"                    {{ checked(rate.service_id, address.shipping_service_id) }}                /><div class=\"fc-shipping-rates__rate__name\">{{ rate.method|raw }} {{ rate.service_name|raw }}</div>                <div class=\"fc-shipping-rates__rate__value\">{{ rate.price|money_format }}</div>            </label>        </div>        {% endfor %}    {% if error_string %}        <div class=\"fc-alert fc-alert--danger\">            {{ lang.checkout_select_shipping_option|raw }}        </div>    {% endif %}    </div></div>{% endif %}{% endmacro %}{% macro use_different_addresses(use_different_addresses, lang) %}<div class=\"fc-form-group fc-checkout__section--customer-billing-address__use-different-address\">    <div class=\"fc-container__grid--use-different-address\">        <div class=\"fc-input-group-container--checkbox\">            <label for=\"use_different_addresses\" class=\"fc-form-label fc-form-label--different-address\">                <input type=\"hidden\" name=\"use_different_addresses\" value=\"0\" />                <input type=\"checkbox\"                    id=\"use_different_addresses\"                    name=\"use_different_addresses\"                    value=\"1\"                    {{ checked(use_different_addresses) }} />                {{ lang.checkout_use_billing_address|raw }}            </label>        </div>    </div></div>{% endmacro %}{% macro address_changed(original, suggested) %}{% set address_validation_changed = \'\' %}{% if original != suggested %}fc-address-validation--changed{% endif %}{% endmacro %}"
});
twig({
  id: "errors.inc.twig",
  autoescape: true,
  allowInlineIncludes: true,
  data: "{% set has_messages = (messages.errors|length > 0 or messages.warnings|length > 0 or messages.info|length > 0) %}{% set has_page_errors = false %}{% if has_messages and messages.errors|length > 0 %}    {% for error in messages.errors if error[\'message\'] != \'\' %}        {% set has_page_errors = true %}    {% endfor %}{% endif %}{% if has_page_errors or (messages.warnings|length + messages.info|length) > 0 %}<div class=\"fc-messages\">    {% if messages.errors|length > 0 %}        <div class=\"fc-alert fc-alert--danger\">            <h2>{{ config.lang.checkout_error_title|raw }}</h2>            <!-- <p class=\"fc-alert--more\">More information on this issue</p> -->            <ul>            {% for error in messages.errors if error[\'message\'] != \'\' %}                <li>{{ error[\'message\']|raw }}</li>            {% endfor %}            </ul>        </div>    {% endif %}    {% if messages.warnings|length > 0 %}        <div class=\"fc-alert fc-alert--warning\">            <h2>{{ config.lang.checkout_warning|raw }}</h2>            <!-- <p class=\"fc-alert--more\">More information on this issue</p> -->            <ul>        {% for warning in messages.warnings %}            <li>{{ warning[\'message\']|raw }}</li>        {% endfor %}        </ul></div>    {% endif %}    {% if messages.info|length > 0 %}        <div class=\"fc-alert fc-alert--info\">            <h2>{{ config.lang.checkout_info_title|raw }}</h2>            <!-- <p class=\"fc-alert--more\">More information on this issue</p> -->            <ul>        {% for info in messages.info %}            <li>{{ info[\'message\']|raw }}</li>        {% endfor %}        </ul></div>    {% endif %}</div>{% endif %}"
});
twig({
  id: "svg.inc.twig",
  autoescape: true,
  allowInlineIncludes: true,
  data: "{% raw %}<svg id=\"fc-icons\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\" data-fc-ide=\"fc-inline-svg\">  <!-- fa-angle-double-left -->  <symbol  id=\"fa-angle-double-left\" viewBox=\"0 0 77.473 80.027\" enable-background=\"new 0 0 77.473 80.027\">    <title>Double Arrows Left</title>    <path class=\"fa-angle-double-left\" d=\"M45.831 75.345l-3.973 3.831c-.426.426-1.277.851-1.845.851-.568 0-1.419-.284-1.845-.851l-37.317-37.318c-.425-.426-.851-1.277-.851-1.844 0-.568.284-1.419.851-1.845l37.318-37.318c.426-.425 1.277-.851 1.844-.851.568 0 1.419.284 1.845.851l3.973 3.973c.426.426.851 1.277.851 1.845s-.284 1.419-.851 1.845l-31.5 31.5 31.5 31.5c.426.426.851 1.277.851 1.845 0 .567-.425 1.418-.851 1.986zm30.791 0l-3.973 3.831c-.426.426-1.277.851-1.845.851-.568 0-1.419-.284-1.845-.851l-37.317-37.318c-.426-.426-.851-1.277-.851-1.844 0-.568.284-1.419.851-1.845l37.317-37.318c.426-.425 1.277-.851 1.845-.851.568 0 1.419.284 1.845.851l3.973 3.973c.426.426.851 1.277.851 1.845s-.284 1.419-.851 1.845l-31.5 31.642 31.5 31.5c.426.426.851 1.277.851 1.844 0 .568-.426 1.277-.851 1.845z\"/>  </symbol>  <!-- fa-caret-left -->  <symbol id=\"fa-caret-left\" viewBox=\"0 0 10.214 18.166\" enable-background=\"new 0 0 10.214 18.166\">    <title>Single Arrow Left</title>    <path class=\"fa-caret-left\" d=\"M10.214 17.034c0 .629-.534 1.131-1.131 1.131-.314 0-.597-.126-.786-.346l-7.951-7.95c-.22-.22-.346-.503-.346-.786 0-.283.126-.597.346-.786l7.951-7.951c.22-.22.503-.346.786-.346.629 0 1.131.534 1.131 1.131v15.903z\"/>  </symbol>  <!-- fa-caret-right -->  <symbol id=\"fa-caret-right\" viewBox=\"0 0 10.214 18.166\" enable-background=\"new 0 0 10.214 18.166\">    <title>Single Arrow Right</title>    <path class=\"fa-caret-right\" d=\"M9.869 9.869l-7.952 7.951c-.22.22-.503.346-.786.346-.628 0-1.131-.535-1.131-1.132v-15.903c0-.628.534-1.131 1.131-1.131.314 0 .597.126.786.346l7.951 7.951c.22.22.346.503.346.786 0 .283-.125.566-.345.786z\"/>  </symbol>  <!-- fa-lock -->  <symbol id=\"fa-lock\" viewBox=\"0 0 20.491 24.986\" enable-background=\"new 0 0 20.491 24.986\">    <title>Secured Icon</title>    <path class=\"fa-lock\" d=\"M20.46 23.289c0 .943-.754 1.697-1.697 1.697h-17.066c-.911 0-1.697-.755-1.697-1.697v-10.215c0-.943.754-1.697 1.697-1.697h.597v-3.426c0-4.368 3.583-7.951 7.952-7.951s7.951 3.583 7.951 7.951v3.394h.597c.911 0 1.697.754 1.697 1.697v10.246h-.031zm-5.689-11.912v-3.426c0-2.514-2.011-4.557-4.557-4.557-2.546 0-4.557 2.043-4.557 4.557v3.394h9.114v.032z\"/>  </symbol>  <!-- fa-lock-large used on checkout -->  <symbol id=\"fa-lock-large\" viewBox=\"0 0 20.491 24.986\" enable-background=\"new 0 0 20.491 24.986\">    <title>Secured Icon</title>    <path class=\"fa-lock-large\" d=\"M20.46 23.289c0 .943-.754 1.697-1.697 1.697h-17.066c-.911 0-1.697-.755-1.697-1.697v-10.215c0-.943.754-1.697 1.697-1.697h.597v-3.426c0-4.368 3.583-7.951 7.952-7.951s7.951 3.583 7.951 7.951v3.394h.597c.911 0 1.697.754 1.697 1.697v10.246h-.031zm-5.689-11.912v-3.426c0-2.514-2.011-4.557-4.557-4.557-2.546 0-4.557 2.043-4.557 4.557v3.394h9.114v.032z\"/>  </symbol>  <!-- fa-lock-large used on checkout -->  <symbol id=\"fa-map-marker\" viewBox=\"0 0 14 20\" enable-background=\"new 0 0 14 20\">    <title>Map Marker Icon</title>    <path d=\"M10,6.667c0,-0.92 -0.326,-1.706 -0.977,-2.357c-0.651,-0.651 -1.436,-0.977 -2.356,-0.977c-0.92,0 -1.706,0.326 -2.357,0.977c-0.651,0.651 -0.977,1.437 -0.977,2.357c0,0.92 0.326,1.705 0.977,2.356c0.651,0.651 1.437,0.977 2.357,0.977c0.92,0 1.705,-0.326 2.356,-0.977c0.651,-0.651 0.977,-1.436 0.977,-2.356ZM13.333,6.667c0,0.946 -0.143,1.723 -0.429,2.33l-4.74,10.079c-0.139,0.286 -0.345,0.512 -0.618,0.677c-0.274,0.165 -0.567,0.247 -0.879,0.247c-0.313,0 -0.606,-0.082 -0.879,-0.247c-0.274,-0.165 -0.476,-0.391 -0.606,-0.677l-4.752,-10.079c-0.287,-0.607 -0.43,-1.384 -0.43,-2.33c0,-1.841 0.651,-3.412 1.953,-4.714c1.302,-1.302 2.873,-1.953 4.714,-1.953c1.84,0 3.411,0.651 4.713,1.953c1.302,1.302 1.953,2.873 1.953,4.714Z\"/>  </symbol>  <!-- fa-times-circle -->  <symbol id=\"fa-times-circle\" viewBox=\"0 0 27.28 27.28\" enable-background=\"new 0 0 27.28 27.28\">    <title>Dismiss</title>    <path class=\"fa-times-circle\" d=\"M13.64 27.28c-7.511 0-13.64-6.097-13.64-13.64s6.097-13.64 13.64-13.64 13.64 6.097 13.64 13.64-6.097 13.64-13.64 13.64zm6.443-10.403l-3.237-3.237 3.237-3.206c.189-.189.346-.503.346-.786 0-.314-.126-.629-.346-.817l-1.603-1.602c-.22-.189-.534-.346-.817-.346-.283 0-.597.126-.786.346l-3.237 3.206-3.206-3.206c-.22-.189-.503-.346-.786-.346-.314 0-.629.126-.817.346l-1.602 1.602c-.22.22-.346.503-.346.817 0 .283.126.597.346.786l3.237 3.206-3.237 3.237c-.22.189-.346.503-.346.786 0 .314.126.629.346.817l1.603 1.603c.22.189.534.346.817.346.283 0 .597-.126.786-.346l3.206-3.237 3.206 3.237c.22.189.503.346.786.346.314 0 .629-.126.817-.346l1.603-1.603c.189-.189.346-.503.346-.817.03-.283-.128-.597-.316-.786z\"/>  </symbol>  <!-- fa-truck -->  <symbol id=\"fa-truck\" viewBox=\"0 0 30.706 24.986\" enable-background=\"new 0 0 30.706 24.986\">    <title>Shipping</title>    <path class=\"fa-truck\" d=\"M30.706 19.297c0 1.32-1.383 1.131-2.263 1.131 0 2.514-2.011 4.557-4.557 4.557-2.546 0-4.557-2.043-4.557-4.557h-6.82c0 2.514-2.011 4.557-4.557 4.557-2.546 0-4.557-2.043-4.557-4.557h-1.132c-.88.001-2.263.189-2.263-1.131 0-.629.534-1.131 1.131-1.131v-5.689c0-1.257-.189-2.64.786-3.646l3.489-3.52c.471-.44 1.32-.786 1.949-.786h2.829v-3.394c-.001-.628.533-1.131 1.13-1.131h18.166c.629 0 1.131.534 1.131 1.131v18.166h.095zm-20.46-7.951v-4.557h-2.797c-.094 0-.346.094-.409.157l-3.457 3.457c-.063.031-.157.314-.157.377v.534h6.82v.032zm-2.263 6.788c-1.226 0-2.263 1.037-2.263 2.263s1.037 2.294 2.263 2.294 2.263-1.037 2.263-2.263c0-1.225-1.037-2.294-2.263-2.294zm15.903 0c-1.226 0-2.263 1.037-2.263 2.263s1.037 2.294 2.263 2.294 2.263-1.037 2.263-2.263c0-1.225-1.038-2.294-2.263-2.294z\"/>  </symbol>  <symbol id=\"fa-bank\" viewBox=\"0 0 7.5 7\" enable-background=\"new 0 0 7.5 7\">    <title>Taxes</title>    <path class=\"fa-bank\" d=\"M0,2V1.5L3.8,0l3.8,1.5V2H7c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0.1-0.2,0.1h-6c-0.1,0-0.1,0-0.2-0.1    C0.5,2.1,0.5,2.1,0.5,2H0z M0,6.5c0-0.1,0-0.1,0.1-0.2c0.1,0,0.1-0.1,0.2-0.1h7c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.1,0.2V7H0V6.5z     M0.5,6V5.8c0-0.1,0-0.1,0.1-0.2c0.1,0,0.1-0.1,0.2-0.1H1v-3h1v3h0.5v-3h1v3H4v-3h1v3h0.5v-3h1v3h0.2c0.1,0,0.1,0,0.2,0.1    C7,5.6,7,5.7,7,5.8V6H0.5z\"/>  </symbol></svg>{% endraw %}"
});

FC.settings = {
  "storedomain": "vinylimagination.foxycart.com",
  "sitedomain": "vinylimagination.com",
  "store_id": "53291",
  "session_name": "fcsid"
};
jQuery(function() {
  if (typeof FC.onLoad === 'function') {
    FC.onLoad();
  }
  FC.client.init();
});