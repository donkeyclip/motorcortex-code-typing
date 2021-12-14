import { BrowserClip, Effect } from '@donkeyclip/motorcortex';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  Object.defineProperty(subClass, "prototype", {
    value: Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    }),
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var BACKGROUND_COLOR$1 = "#fff",
    LINE_HEIGHT$1 = "20px",
    FONT_SIZE$1 = "13px",
    defaultCssTheme = "\n.codeflask {\n  background: " + BACKGROUND_COLOR$1 + ";\n  color: #4f559c;\n}\n\n.codeflask .token.punctuation {\n  color: #4a4a4a;\n}\n\n.codeflask .token.keyword {\n  color: #8500ff;\n}\n\n.codeflask .token.operator {\n  color: #ff5598;\n}\n\n.codeflask .token.string {\n  color: #41ad8f;\n}\n\n.codeflask .token.comment {\n  color: #9badb7;\n}\n\n.codeflask .token.function {\n  color: #8500ff;\n}\n\n.codeflask .token.boolean {\n  color: #8500ff;\n}\n\n.codeflask .token.number {\n  color: #8500ff;\n}\n\n.codeflask .token.selector {\n  color: #8500ff;\n}\n\n.codeflask .token.property {\n  color: #8500ff;\n}\n\n.codeflask .token.tag {\n  color: #8500ff;\n}\n\n.codeflask .token.attr-value {\n  color: #8500ff;\n}\n";

function cssSupports(e, t) {
  return "undefined" != typeof CSS ? CSS.supports(e, t) : "undefined" != typeof document && toCamelCase(e) in document.body.style;
}

function toCamelCase(e) {
  return (e = e.split("-").filter(function (e) {
    return !!e;
  }).map(function (e) {
    return e[0].toUpperCase() + e.substr(1);
  }).join(""))[0].toLowerCase() + e.substr(1);
}

var FONT_FAMILY = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    COLOR = cssSupports("caret-color", "#000") ? BACKGROUND_COLOR$1 : "#ccc",
    LINE_NUMBER_WIDTH = "40px",
    editorCss = "\n  .codeflask {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  .codeflask, .codeflask * {\n    box-sizing: border-box;\n  }\n\n  .codeflask__pre {\n    pointer-events: none;\n    z-index: 3;\n    overflow: hidden;\n  }\n\n  .codeflask__textarea {\n    background: none;\n    border: none;\n    color: " + COLOR + ";\n    z-index: 1;\n    resize: none;\n    font-family: " + FONT_FAMILY + ";\n    -webkit-appearance: pre;\n    caret-color: #111;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n  }\n\n  .codeflask--has-line-numbers .codeflask__textarea {\n    width: calc(100% - " + LINE_NUMBER_WIDTH + ");\n  }\n\n  .codeflask__code {\n    display: block;\n    font-family: " + FONT_FAMILY + ";\n    overflow: hidden;\n  }\n\n  .codeflask__flatten {\n    padding: 10px;\n    font-size: " + FONT_SIZE$1 + ";\n    line-height: " + LINE_HEIGHT$1 + ";\n    white-space: pre;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: auto;\n    margin: 0 !important;\n    outline: none;\n    text-align: left;\n  }\n\n  .codeflask--has-line-numbers .codeflask__flatten {\n    width: calc(100% - " + LINE_NUMBER_WIDTH + ");\n    left: " + LINE_NUMBER_WIDTH + ";\n  }\n\n  .codeflask__line-highlight {\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 100%;\n    height: " + LINE_HEIGHT$1 + ";\n    background: rgba(0,0,0,0.1);\n    z-index: 1;\n  }\n\n  .codeflask__lines {\n    padding: 10px 4px;\n    font-size: 12px;\n    line-height: " + LINE_HEIGHT$1 + ";\n    font-family: 'Cousine', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: " + LINE_NUMBER_WIDTH + ";\n    height: 100%;\n    text-align: right;\n    color: #999;\n    z-index: 2;\n  }\n\n  .codeflask__lines__line {\n    display: block;\n  }\n\n  .codeflask.codeflask--has-line-numbers {\n    padding-left: " + LINE_NUMBER_WIDTH + ";\n  }\n\n  .codeflask.codeflask--has-line-numbers:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: " + LINE_NUMBER_WIDTH + ";\n    height: 100%;\n    background: #eee;\n    z-index: 1;\n  }\n";

function injectCss(e, t, n) {
  var a = t || "codeflask-style",
      s = n || document.head;
  if (!e) return !1;
  if (document.getElementById(a)) return !0;
  var o = document.createElement("style");
  return o.innerHTML = e, o.id = a, s.appendChild(o), !0;
}

var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
};

function escapeHtml(e) {
  return String(e).replace(/[&<>"'`=/]/g, function (e) {
    return entityMap[e];
  });
}

var commonjsGlobal$1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function createCommonjsModule(e, t) {
  return e(t = {
    exports: {}
  }, t.exports), t.exports;
}

var prism = createCommonjsModule(function (e) {
  var t = function (e) {
    var t = /\blang(?:uage)?-([\w-]+)\b/i,
        n = 0,
        a = {
      manual: e.Prism && e.Prism.manual,
      disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
      util: {
        encode: function (e) {
          return e instanceof s ? new s(e.type, a.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(a.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        type: function (e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        },
        objId: function (e) {
          return e.__id || Object.defineProperty(e, "__id", {
            value: ++n
          }), e.__id;
        },
        clone: function e(t, n) {
          var s,
              o,
              i = a.util.type(t);

          switch (n = n || {}, i) {
            case "Object":
              if (o = a.util.objId(t), n[o]) return n[o];

              for (var r in s = {}, n[o] = s, t) t.hasOwnProperty(r) && (s[r] = e(t[r], n));

              return s;

            case "Array":
              return o = a.util.objId(t), n[o] ? n[o] : (s = [], n[o] = s, t.forEach(function (t, a) {
                s[a] = e(t, n);
              }), s);

            default:
              return t;
          }
        }
      },
      languages: {
        extend: function (e, t) {
          var n = a.util.clone(a.languages[e]);

          for (var s in t) n[s] = t[s];

          return n;
        },
        insertBefore: function (e, t, n, s) {
          var o = (s = s || a.languages)[e],
              i = {};

          for (var r in o) if (o.hasOwnProperty(r)) {
            if (r == t) for (var l in n) n.hasOwnProperty(l) && (i[l] = n[l]);
            n.hasOwnProperty(r) || (i[r] = o[r]);
          }

          var c = s[e];
          return s[e] = i, a.languages.DFS(a.languages, function (t, n) {
            n === c && t != e && (this[t] = i);
          }), i;
        },
        DFS: function e(t, n, s, o) {
          o = o || {};
          var i = a.util.objId;

          for (var r in t) if (t.hasOwnProperty(r)) {
            n.call(t, r, t[r], s || r);
            var l = t[r],
                c = a.util.type(l);
            "Object" !== c || o[i(l)] ? "Array" !== c || o[i(l)] || (o[i(l)] = !0, e(l, n, r, o)) : (o[i(l)] = !0, e(l, n, null, o));
          }
        }
      },
      plugins: {},
      highlightAll: function (e, t) {
        a.highlightAllUnder(document, e, t);
      },
      highlightAllUnder: function (e, t, n) {
        var s = {
          callback: n,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a.hooks.run("before-highlightall", s);

        for (var o, i = s.elements || e.querySelectorAll(s.selector), r = 0; o = i[r++];) a.highlightElement(o, !0 === t, s.callback);
      },
      highlightElement: function (n, s, o) {
        for (var i, r, l = n; l && !t.test(l.className);) l = l.parentNode;

        l && (i = (l.className.match(t) || [, ""])[1].toLowerCase(), r = a.languages[i]), n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + i, n.parentNode && (l = n.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + i));

        var c = {
          element: n,
          language: i,
          grammar: r,
          code: n.textContent
        },
            d = function (e) {
          c.highlightedCode = e, a.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, a.hooks.run("after-highlight", c), a.hooks.run("complete", c), o && o.call(c.element);
        };

        if (a.hooks.run("before-sanity-check", c), c.code) {
          if (a.hooks.run("before-highlight", c), c.grammar) {
            if (s && e.Worker) {
              var u = new Worker(a.filename);
              u.onmessage = function (e) {
                d(e.data);
              }, u.postMessage(JSON.stringify({
                language: c.language,
                code: c.code,
                immediateClose: !0
              }));
            } else d(a.highlight(c.code, c.grammar, c.language));
          } else d(a.util.encode(c.code));
        } else a.hooks.run("complete", c);
      },
      highlight: function (e, t, n) {
        var o = {
          code: e,
          grammar: t,
          language: n
        };
        return a.hooks.run("before-tokenize", o), o.tokens = a.tokenize(o.code, o.grammar), a.hooks.run("after-tokenize", o), s.stringify(a.util.encode(o.tokens), o.language);
      },
      matchGrammar: function (e, t, n, o, i, r, l) {
        for (var c in n) if (n.hasOwnProperty(c) && n[c]) {
          if (c == l) return;
          var d = n[c];
          d = "Array" === a.util.type(d) ? d : [d];

          for (var u = 0; u < d.length; ++u) {
            var p = d[u],
                h = p.inside,
                g = !!p.lookbehind,
                f = !!p.greedy,
                m = 0,
                b = p.alias;

            if (f && !p.pattern.global) {
              var k = p.pattern.toString().match(/[imuy]*$/)[0];
              p.pattern = RegExp(p.pattern.source, k + "g");
            }

            p = p.pattern || p;

            for (var y = o, C = i; y < t.length; C += t[y].length, ++y) {
              var F = t[y];
              if (t.length > e.length) return;

              if (!(F instanceof s)) {
                if (f && y != t.length - 1) {
                  if (p.lastIndex = C, !(T = p.exec(e))) break;

                  for (var v = T.index + (g ? T[1].length : 0), x = T.index + T[0].length, w = y, A = C, _ = t.length; w < _ && (A < x || !t[w].type && !t[w - 1].greedy); ++w) v >= (A += t[w].length) && (++y, C = A);

                  if (t[y] instanceof s) continue;
                  E = w - y, F = e.slice(C, A), T.index -= C;
                } else {
                  p.lastIndex = 0;
                  var T = p.exec(F),
                      E = 1;
                }

                if (T) {
                  g && (m = T[1] ? T[1].length : 0);
                  x = (v = T.index + m) + (T = T[0].slice(m)).length;
                  var L = F.slice(0, v),
                      N = F.slice(x),
                      S = [y, E];
                  L && (++y, C += L.length, S.push(L));
                  var I = new s(c, h ? a.tokenize(T, h) : T, b, T, f);
                  if (S.push(I), N && S.push(N), Array.prototype.splice.apply(t, S), 1 != E && a.matchGrammar(e, t, n, y, C, !0, c), r) break;
                } else if (r) break;
              }
            }
          }
        }
      },
      tokenize: function (e, t) {
        var n = [e],
            s = t.rest;

        if (s) {
          for (var o in s) t[o] = s[o];

          delete t.rest;
        }

        return a.matchGrammar(e, n, t, 0, 0, !1), n;
      },
      hooks: {
        all: {},
        add: function (e, t) {
          var n = a.hooks.all;
          n[e] = n[e] || [], n[e].push(t);
        },
        run: function (e, t) {
          var n = a.hooks.all[e];
          if (n && n.length) for (var s, o = 0; s = n[o++];) s(t);
        }
      },
      Token: s
    };

    function s(e, t, n, a, s) {
      this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length, this.greedy = !!s;
    }

    if (e.Prism = a, s.stringify = function (e, t, n) {
      if ("string" == typeof e) return e;
      if (Array.isArray(e)) return e.map(function (n) {
        return s.stringify(n, t, e);
      }).join("");
      var o = {
        type: e.type,
        content: s.stringify(e.content, t, n),
        tag: "span",
        classes: ["token", e.type],
        attributes: {},
        language: t,
        parent: n
      };

      if (e.alias) {
        var i = Array.isArray(e.alias) ? e.alias : [e.alias];
        Array.prototype.push.apply(o.classes, i);
      }

      a.hooks.run("wrap", o);
      var r = Object.keys(o.attributes).map(function (e) {
        return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"';
      }).join(" ");
      return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (r ? " " + r : "") + ">" + o.content + "</" + o.tag + ">";
    }, !e.document) return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", function (t) {
      var n = JSON.parse(t.data),
          s = n.language,
          o = n.code,
          i = n.immediateClose;
      e.postMessage(a.highlight(o, a.languages[s], s)), i && e.close();
    }, !1), a) : a;
    var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return o && (a.filename = o.src, a.manual || o.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(a.highlightAll) : window.setTimeout(a.highlightAll, 16) : document.addEventListener("DOMContentLoaded", a.highlightAll))), a;
  }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});

  e.exports && (e.exports = t), void 0 !== commonjsGlobal$1 && (commonjsGlobal$1.Prism = t), t.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
          inside: {
            punctuation: [/^=/, {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: /&#?[\da-z]{1,8};/i
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.hooks.add("wrap", function (e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    value: function (e, n) {
      var a = {};
      a["language-" + n] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[n]
      }, a.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var s = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: a
        }
      };
      s["language-" + n] = {
        pattern: /[\s\S]+/,
        inside: t.languages[n]
      };
      var o = {};
      o[e] = {
        pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, e), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: s
      }, t.languages.insertBefore("markup", "cdata", o);
    }
  }), t.languages.xml = t.languages.extend("markup", {}), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, function (e) {
    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    e.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
        inside: {
          rule: /@[\w-]+/
        }
      },
      url: RegExp("url\\((?:" + t.source + "|.*?)\\)", "i"),
      selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
      string: {
        pattern: t,
        greedy: !0
      },
      property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/
    }, e.languages.css.atrule.inside.rest = e.languages.css;
    var n = e.languages.markup;
    n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
      "style-attr": {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          "attr-name": {
            pattern: /^\s*style/i,
            inside: n.tag.inside
          },
          punctuation: /^\s*=\s*['"]|['"]\s*$/,
          "attr-value": {
            pattern: /.+/i,
            inside: e.languages.css
          }
        },
        alias: "language-css"
      }
    }, n.tag));
  }(t), t.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [t.languages.clike["class-name"], {
      pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0
    }],
    keyword: [{
      pattern: /((?:^|})\s*)(?:catch|finally)\b/,
      lookbehind: !0
    }, {
      pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }],
    number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
      lookbehind: !0,
      greedy: !0
    },
    "function-variable": {
      pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
      alias: "function"
    },
    parameter: [{
      pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: !0,
      inside: t.languages.javascript
    }, {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: t.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: t.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: t.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    "template-string": {
      pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /\${[^}]+}/,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\${|}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  }), t.languages.markup && t.languages.markup.tag.addInlined("script", "javascript"), t.languages.js = t.languages.javascript, "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function (e) {
    e = e || document;
    var n = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    };
    Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function (e) {
      if (!e.hasAttribute("data-src-loaded")) {
        for (var a, s = e.getAttribute("data-src"), o = e, i = /\blang(?:uage)?-([\w-]+)\b/i; o && !i.test(o.className);) o = o.parentNode;

        if (o && (a = (e.className.match(i) || [, ""])[1]), !a) {
          var r = (s.match(/\.(\w+)$/) || [, ""])[1];
          a = n[r] || r;
        }

        var l = document.createElement("code");
        l.className = "language-" + a, e.textContent = "", l.textContent = "Loading…", e.appendChild(l);
        var c = new XMLHttpRequest();
        c.open("GET", s, !0), c.onreadystatechange = function () {
          4 == c.readyState && (c.status < 400 && c.responseText ? (l.textContent = c.responseText, t.highlightElement(l), e.setAttribute("data-src-loaded", "")) : c.status >= 400 ? l.textContent = "✖ Error " + c.status + " while fetching file: " + c.statusText : l.textContent = "✖ Error: File does not exist or is empty");
        }, c.send(null);
      }
    }), t.plugins.toolbar && t.plugins.toolbar.registerButton("download-file", function (e) {
      var t = e.element.parentNode;

      if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-src") && t.hasAttribute("data-download-link")) {
        var n = t.getAttribute("data-src"),
            a = document.createElement("a");
        return a.textContent = t.getAttribute("data-download-link-label") || "Download", a.setAttribute("download", ""), a.href = n, a;
      }
    });
  }, document.addEventListener("DOMContentLoaded", function () {
    self.Prism.fileHighlight();
  }));
}),
    CodeFlask = function (e, t) {
  if (!e) throw Error("CodeFlask expects a parameter which is Element or a String selector");
  if (!t) throw Error("CodeFlask expects an object containing options as second parameter");
  if (e.nodeType) this.editorRoot = e;else {
    var n = document.querySelector(e);
    n && (this.editorRoot = n);
  }
  this.opts = t, this.startEditor();
};

CodeFlask.prototype.startEditor = function () {
  if (!injectCss(editorCss, null, this.opts.styleParent)) throw Error("Failed to inject CodeFlask CSS.");
  this.createWrapper(), this.createTextarea(), this.createPre(), this.createCode(), this.runOptions(), this.listenTextarea(), this.populateDefault(), this.updateCode(this.code);
}, CodeFlask.prototype.createWrapper = function () {
  this.code = this.editorRoot.innerHTML, this.editorRoot.innerHTML = "", this.elWrapper = this.createElement("div", this.editorRoot), this.elWrapper.classList.add("codeflask");
}, CodeFlask.prototype.createTextarea = function () {
  this.elTextarea = this.createElement("textarea", this.elWrapper), this.elTextarea.classList.add("codeflask__textarea", "codeflask__flatten");
}, CodeFlask.prototype.createPre = function () {
  this.elPre = this.createElement("pre", this.elWrapper), this.elPre.classList.add("codeflask__pre", "codeflask__flatten");
}, CodeFlask.prototype.createCode = function () {
  this.elCode = this.createElement("code", this.elPre), this.elCode.classList.add("codeflask__code", "language-" + (this.opts.language || "html"));
}, CodeFlask.prototype.createLineNumbers = function () {
  this.elLineNumbers = this.createElement("div", this.elWrapper), this.elLineNumbers.classList.add("codeflask__lines"), this.setLineNumber();
}, CodeFlask.prototype.createElement = function (e, t) {
  var n = document.createElement(e);
  return t.appendChild(n), n;
}, CodeFlask.prototype.runOptions = function () {
  this.opts.rtl = this.opts.rtl || !1, this.opts.tabSize = this.opts.tabSize || 2, this.opts.enableAutocorrect = this.opts.enableAutocorrect || !1, this.opts.lineNumbers = this.opts.lineNumbers || !1, this.opts.defaultTheme = !1 !== this.opts.defaultTheme, this.opts.areaId = this.opts.areaId || null, this.opts.ariaLabelledby = this.opts.ariaLabelledby || null, this.opts.readonly = this.opts.readonly || null, "boolean" != typeof this.opts.handleTabs && (this.opts.handleTabs = !0), "boolean" != typeof this.opts.handleSelfClosingCharacters && (this.opts.handleSelfClosingCharacters = !0), "boolean" != typeof this.opts.handleNewLineIndentation && (this.opts.handleNewLineIndentation = !0), !0 === this.opts.rtl && (this.elTextarea.setAttribute("dir", "rtl"), this.elPre.setAttribute("dir", "rtl")), !1 === this.opts.enableAutocorrect && (this.elTextarea.setAttribute("spellcheck", "false"), this.elTextarea.setAttribute("autocapitalize", "off"), this.elTextarea.setAttribute("autocomplete", "off"), this.elTextarea.setAttribute("autocorrect", "off")), this.opts.lineNumbers && (this.elWrapper.classList.add("codeflask--has-line-numbers"), this.createLineNumbers()), this.opts.defaultTheme && injectCss(defaultCssTheme, "theme-default", this.opts.styleParent), this.opts.areaId && this.elTextarea.setAttribute("id", this.opts.areaId), this.opts.ariaLabelledby && this.elTextarea.setAttribute("aria-labelledby", this.opts.ariaLabelledby), this.opts.readonly && this.enableReadonlyMode();
}, CodeFlask.prototype.updateLineNumbersCount = function () {
  for (var e = "", t = 1; t <= this.lineNumber; t++) e = e + '<span class="codeflask__lines__line">' + t + "</span>";

  this.elLineNumbers.innerHTML = e;
}, CodeFlask.prototype.listenTextarea = function () {
  var e = this;
  this.elTextarea.addEventListener("input", function (t) {
    e.code = t.target.value, e.elCode.innerHTML = escapeHtml(t.target.value), e.highlight(), setTimeout(function () {
      e.runUpdate(), e.setLineNumber();
    }, 1);
  }), this.elTextarea.addEventListener("keydown", function (t) {
    e.handleTabs(t), e.handleSelfClosingCharacters(t), e.handleNewLineIndentation(t);
  }), this.elTextarea.addEventListener("scroll", function (t) {
    e.elPre.style.transform = "translate3d(-" + t.target.scrollLeft + "px, -" + t.target.scrollTop + "px, 0)", e.elLineNumbers && (e.elLineNumbers.style.transform = "translate3d(0, -" + t.target.scrollTop + "px, 0)");
  });
}, CodeFlask.prototype.handleTabs = function (e) {
  if (this.opts.handleTabs) {
    if (9 !== e.keyCode) return;
    e.preventDefault();
    var t = this.elTextarea,
        n = t.selectionDirection,
        a = t.selectionStart,
        s = t.selectionEnd,
        o = t.value,
        i = o.substr(0, a),
        r = o.substring(a, s),
        l = o.substring(s),
        c = " ".repeat(this.opts.tabSize);

    if (a !== s && r.length >= c.length) {
      var d = a - i.split("\n").pop().length,
          u = c.length,
          p = c.length;
      if (e.shiftKey) o.substr(d, c.length) === c ? (u = -u, d > a ? (r = r.substring(0, d) + r.substring(d + c.length), p = 0) : d === a ? (u = 0, p = 0, r = r.substring(c.length)) : (p = -p, i = i.substring(0, d) + i.substring(d + c.length))) : (u = 0, p = 0), r = r.replace(new RegExp("\n" + c.split("").join("\\"), "g"), "\n");else i = i.substr(0, d) + c + i.substring(d, a), r = r.replace(/\n/g, "\n" + c);
      t.value = i + r + l, t.selectionStart = a + u, t.selectionEnd = a + r.length + p, t.selectionDirection = n;
    } else t.value = i + c + l, t.selectionStart = a + c.length, t.selectionEnd = a + c.length;

    var h = t.value;
    this.updateCode(h), this.elTextarea.selectionEnd = s + this.opts.tabSize;
  }
}, CodeFlask.prototype.handleSelfClosingCharacters = function (e) {
  if (this.opts.handleSelfClosingCharacters) {
    var t = e.key;
    if (["(", "[", "{", "<", "'", '"'].includes(t) || [")", "]", "}", ">", "'", '"'].includes(t)) switch (t) {
      case "(":
      case ")":
        this.closeCharacter(t);
        break;

      case "[":
      case "]":
        this.closeCharacter(t);
        break;

      case "{":
      case "}":
        this.closeCharacter(t);
        break;

      case "<":
      case ">":
      case "'":
      case '"':
        this.closeCharacter(t);
    }
  }
}, CodeFlask.prototype.setLineNumber = function () {
  this.lineNumber = this.code.split("\n").length, this.opts.lineNumbers && this.updateLineNumbersCount();
}, CodeFlask.prototype.handleNewLineIndentation = function (e) {
  if (this.opts.handleNewLineIndentation && 13 === e.keyCode) {
    e.preventDefault();
    var t = this.elTextarea,
        n = t.selectionStart,
        a = t.selectionEnd,
        s = t.value,
        o = s.substr(0, n),
        i = s.substring(a),
        r = s.lastIndexOf("\n", n - 1),
        l = r + s.slice(r + 1).search(/[^ ]|$/),
        c = l > r ? l - r : 0,
        d = o + "\n" + " ".repeat(c) + i;
    t.value = d, t.selectionStart = n + c + 1, t.selectionEnd = n + c + 1, this.updateCode(t.value);
  }
}, CodeFlask.prototype.closeCharacter = function (e) {
  var t = this.elTextarea.selectionStart,
      n = this.elTextarea.selectionEnd;

  if (this.skipCloseChar(e)) {
    var a = this.code.substr(n, 1) === e,
        s = a ? n + 1 : n,
        o = !a && ["'", '"'].includes(e) ? e : "",
        i = "" + this.code.substring(0, t) + o + this.code.substring(s);
    this.updateCode(i), this.elTextarea.selectionEnd = ++this.elTextarea.selectionStart;
  } else {
    var r = e;

    switch (e) {
      case "(":
        r = String.fromCharCode(e.charCodeAt() + 1);
        break;

      case "<":
      case "{":
      case "[":
        r = String.fromCharCode(e.charCodeAt() + 2);
    }

    var l = this.code.substring(t, n),
        c = "" + this.code.substring(0, t) + l + r + this.code.substring(n);
    this.updateCode(c);
  }

  this.elTextarea.selectionEnd = t;
}, CodeFlask.prototype.skipCloseChar = function (e) {
  var t = this.elTextarea.selectionStart,
      n = this.elTextarea.selectionEnd,
      a = Math.abs(n - t) > 0;
  return [")", "}", "]", ">"].includes(e) || ["'", '"'].includes(e) && !a;
}, CodeFlask.prototype.updateCode = function (e) {
  this.code = e, this.elTextarea.value = e, this.elCode.innerHTML = escapeHtml(e), this.highlight(), this.setLineNumber(), setTimeout(this.runUpdate.bind(this), 1);
}, CodeFlask.prototype.updateLanguage = function (e) {
  var t = this.opts.language;
  this.elCode.classList.remove("language-" + t), this.elCode.classList.add("language-" + e), this.opts.language = e, this.highlight();
}, CodeFlask.prototype.addLanguage = function (e, t) {
  prism.languages[e] = t;
}, CodeFlask.prototype.populateDefault = function () {
  this.updateCode(this.code);
}, CodeFlask.prototype.highlight = function () {
  prism.highlightElement(this.elCode, !1);
}, CodeFlask.prototype.onUpdate = function (e) {
  if (e && "[object Function]" !== {}.toString.call(e)) throw Error("CodeFlask expects callback of type Function");
  this.updateCallBack = e;
}, CodeFlask.prototype.getCode = function () {
  return this.code;
}, CodeFlask.prototype.runUpdate = function () {
  this.updateCallBack && this.updateCallBack(this.code);
}, CodeFlask.prototype.enableReadonlyMode = function () {
  this.elTextarea.setAttribute("readonly", !0);
}, CodeFlask.prototype.disableReadonlyMode = function () {
  this.elTextarea.removeAttribute("readonly");
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$x = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$e = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$d = fails$e; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$d(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var call$8 = Function.prototype.call;
var functionCall = call$8.bind ? call$8.bind(call$8) : function () {
  return call$8.apply(call$8, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var FunctionPrototype$2 = Function.prototype;
var bind$1 = FunctionPrototype$2.bind;
var call$7 = FunctionPrototype$2.call;
var callBind = bind$1 && bind$1.bind(call$7);
var functionUncurryThis = bind$1 ? function (fn) {
  return fn && callBind(call$7, fn);
} : function (fn) {
  return fn && function () {
    return call$7.apply(fn, arguments);
  };
};

var uncurryThis$f = functionUncurryThis;
var toString$5 = uncurryThis$f({}.toString);
var stringSlice$3 = uncurryThis$f(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$3(toString$5(it), 8, -1);
};

var global$w = global$x;
var uncurryThis$e = functionUncurryThis;
var fails$c = fails$e;
var classof$6 = classofRaw$1;
var Object$4 = global$w.Object;
var split = uncurryThis$e(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$c(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$6(it) == 'String' ? split(it, '') : Object$4(it);
} : Object$4;

var global$v = global$x;
var TypeError$b = global$v.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$4 = function (it) {
  if (it == undefined) throw TypeError$b("Can't call method on " + it);
  return it;
};

var IndexedObject$1 = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;

var toIndexedObject$6 = function (it) {
  return IndexedObject$1(requireObjectCoercible$3(it));
};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$c = function (argument) {
  return typeof argument == 'function';
};

var isCallable$b = isCallable$c;

var isObject$9 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$b(it);
};

var global$u = global$x;
var isCallable$a = isCallable$c;

var aFunction = function (argument) {
  return isCallable$a(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$u[namespace]) : global$u[namespace] && global$u[namespace][method];
};

var uncurryThis$d = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$d({}.isPrototypeOf);

var getBuiltIn$4 = getBuiltIn$5;
var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$t = global$x;
var userAgent = engineUserAgent;
var process = global$t.process;
var Deno = global$t.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$1 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$2 = engineV8Version;
var fails$b = fails$e; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$b(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$s = global$x;
var getBuiltIn$3 = getBuiltIn$5;
var isCallable$9 = isCallable$c;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$s.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$9($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};

var global$r = global$x;
var String$3 = global$r.String;

var tryToString$2 = function (argument) {
  try {
    return String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$q = global$x;
var isCallable$8 = isCallable$c;
var tryToString$1 = tryToString$2;
var TypeError$a = global$q.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$1 = function (argument) {
  if (isCallable$8(argument)) return argument;
  throw TypeError$a(tryToString$1(argument) + ' is not a function');
};

var aCallable = aCallable$1; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$2 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var global$p = global$x;
var call$6 = functionCall;
var isCallable$7 = isCallable$c;
var isObject$8 = isObject$9;
var TypeError$9 = global$p.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$7(fn = input.toString) && !isObject$8(val = call$6(fn, input))) return val;
  if (isCallable$7(fn = input.valueOf) && !isObject$8(val = call$6(fn, input))) return val;
  if (pref !== 'string' && isCallable$7(fn = input.toString) && !isObject$8(val = call$6(fn, input))) return val;
  throw TypeError$9("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$o = global$x; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty(global$o, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$o[key] = value;
  }

  return value;
};

var global$n = global$x;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$n[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.3',
  mode: 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});

var global$m = global$x;
var requireObjectCoercible$2 = requireObjectCoercible$4;
var Object$2 = global$m.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$3 = function (argument) {
  return Object$2(requireObjectCoercible$2(argument));
};

var uncurryThis$c = functionUncurryThis;
var toObject$2 = toObject$3;
var hasOwnProperty = uncurryThis$c({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$2(it), key);
};

var uncurryThis$b = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$4 = uncurryThis$b(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$4(++id + postfix, 36);
};

var global$l = global$x;
var shared$3 = shared$4.exports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$l.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$a = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$k = global$x;
var call$5 = functionCall;
var isObject$7 = isObject$9;
var isSymbol$1 = isSymbol$2;
var getMethod$1 = getMethod$2;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$9 = wellKnownSymbol$a;
var TypeError$8 = global$k.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$9('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$7(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$1(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$5(exoticToPrim, input, pref);
    if (!isObject$7(result) || isSymbol$1(result)) return result;
    throw TypeError$8("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$j = global$x;
var isObject$6 = isObject$9;
var document$1 = global$j.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$5 = descriptors;
var fails$a = fails$e;
var createElement = documentCreateElement$1; // Thank's IE8 for his funny defineProperty

var ie8DomDefine = !DESCRIPTORS$5 && !fails$a(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$4 = descriptors;
var call$4 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$5 = toIndexedObject$6;
var toPropertyKey$2 = toPropertyKey$3;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$4 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$5(O);
  P = toPropertyKey$2(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$4(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var global$i = global$x;
var isObject$5 = isObject$9;
var String$2 = global$i.String;
var TypeError$7 = global$i.TypeError; // `Assert: Type(argument) is Object`

var anObject$8 = function (argument) {
  if (isObject$5(argument)) return argument;
  throw TypeError$7(String$2(argument) + ' is not an object');
};

var global$h = global$x;
var DESCRIPTORS$3 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var anObject$7 = anObject$8;
var toPropertyKey$1 = toPropertyKey$3;
var TypeError$6 = global$h.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$3 ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$6('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$2 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$4 = DESCRIPTORS$2 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$2 = {exports: {}};

var uncurryThis$a = functionUncurryThis;
var isCallable$6 = isCallable$c;
var store$1 = sharedStore;
var functionToString = uncurryThis$a(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$6(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$g = global$x;
var isCallable$5 = isCallable$c;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$g.WeakMap;
var nativeWeakMap = isCallable$5(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;
var keys = shared$2('keys');

var sharedKey$2 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$f = global$x;
var uncurryThis$9 = functionUncurryThis;
var isObject$4 = isObject$9;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$4 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$5 = global$f.TypeError;
var WeakMap = global$f.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$5('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$9(store.get);
  var wmhas = uncurryThis$9(store.has);
  var wmset = uncurryThis$9(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$3[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var DESCRIPTORS$1 = descriptors;
var hasOwn$3 = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$3(FunctionPrototype$1, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || DESCRIPTORS$1 && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var global$e = global$x;
var isCallable$4 = isCallable$c;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState$1 = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$2.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$4(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$2(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$e) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$2(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$4(this) && getInternalState$1(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;
var max$3 = Math.max;
var min$3 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$4 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$3(integer + length, 0) : min$3(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;
var min$2 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$2 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$5 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$4 = toIndexedObject$6;
var toAbsoluteIndex$3 = toAbsoluteIndex$4;
var lengthOfArrayLike$4 = lengthOfArrayLike$5; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$4(O);
    var index = toAbsoluteIndex$3(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$8 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$6;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$1 = uncurryThis$8([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$2, key) && hasOwn$1(O, key) && push$1(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$1(result, key);
  }

  return result;
};

var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$7 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$6 = anObject$8;
var concat = uncurryThis$7([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var fails$9 = fails$e;
var isCallable$3 = isCallable$c;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$3(detection) ? fails$9(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$d = global$x;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var redefine$1 = redefine$2.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$d;
  } else if (STATIC) {
    target = global$d[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$d[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
    } // extend global


    redefine$1(target, key, sourceProperty, options);
  }
};

var classof$5 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$3 = Array.isArray || function isArray(argument) {
  return classof$5(argument) == 'Array';
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$4 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var wellKnownSymbol$8 = wellKnownSymbol$a;
var TO_STRING_TAG$1 = wellKnownSymbol$8('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$c = global$x;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$2 = isCallable$c;
var classofRaw = classofRaw$1;
var wellKnownSymbol$7 = wellKnownSymbol$a;
var TO_STRING_TAG = wellKnownSymbol$7('toStringTag');
var Object$1 = global$c.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$4 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
};

var uncurryThis$6 = functionUncurryThis;
var fails$8 = fails$e;
var isCallable$1 = isCallable$c;
var classof$3 = classof$4;
var getBuiltIn$1 = getBuiltIn$5;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn$1('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$6(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function (argument) {
  if (!isCallable$1(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable$1(argument)) return false;

  switch (classof$3(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  }

  return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
}; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor


var isConstructor$3 = !construct || fails$8(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$b = global$x;
var isArray$2 = isArray$3;
var isConstructor$2 = isConstructor$3;
var isObject$3 = isObject$9;
var wellKnownSymbol$6 = wellKnownSymbol$a;
var SPECIES$4 = wellKnownSymbol$6('species');
var Array$3 = global$b.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor$1 = function (originalArray) {
  var C;

  if (isArray$2(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor$2(C) && (C === Array$3 || isArray$2(C.prototype))) C = undefined;else if (isObject$3(C)) {
      C = C[SPECIES$4];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$3 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$7 = fails$e;
var wellKnownSymbol$5 = wellKnownSymbol$a;
var V8_VERSION$1 = engineV8Version;
var SPECIES$3 = wellKnownSymbol$5('species');

var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$1 >= 51 || !fails$7(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$3] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$4 = _export;
var global$a = global$x;
var fails$6 = fails$e;
var isArray$1 = isArray$3;
var isObject$2 = isObject$9;
var toObject$1 = toObject$3;
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var createProperty$3 = createProperty$4;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;
var wellKnownSymbol$4 = wellKnownSymbol$a;
var V8_VERSION = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$4('isConcatSpreadable');
var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$4 = global$a.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$6(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$2('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$2(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$1(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

$$4({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$1(this);
    var A = arraySpeciesCreate$1(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$3(E);
        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError$4(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty$3(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER$1) throw TypeError$4(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty$3(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var BACKGROUND_COLOR = "#1d1f21";
var LINE_HEIGHT = "20px";
var FONT_SIZE = "13px";
var darkTheme = "\n.codeflask {\n  font-size: ".concat(FONT_SIZE, ";\n  line-height ").concat(LINE_HEIGHT, ";\n  background: ").concat(BACKGROUND_COLOR, ";\n  color: #61afef;\n}\n\n.codeflask .token.punctuation {\n  color: #ffffff;\n}\n\n.codeflask .token.keyword {\n  color: #c397d8;\n}\n\n.codeflask .token.operator {\n  color: #c397d8;\n}\n\n.codeflask .token.parameter {\n  color: #e78c45;\n}\n\n.codeflask .token.string {\n  color: #f0c674;\n}\n\n.codeflask .token.comment {\n  color: #74715e;\n  font-style: italic;\n}\n\n.codeflask .token.function {\n  color: #b9ca4a;\n}\n\n.codeflask .token.boolean {\n  color: orange;\n}\n\n.codeflask .token.number {\n  color: #e04164;\n}\n\n.codeflask .token.selector {\n  color: #b294bb;\n}\n\n.codeflask .token.property {\n  color: #b294bb;\n}\n\n.codeflask .token.tag {\n  color: #b294bb;\n}\n\n.codeflask .token.attr-value {\n  color: #b294bb;\n}\n\n.codeflask__textarea{\n  caret-color: whitesmoke !important;\n  color: ").concat(BACKGROUND_COLOR, " !important;\n}\n\n.codeflask__lines{\n  background: #444;\n  color: #aaa;\n}\n");

var CodeEditorClip = /*#__PURE__*/function (_BrowserClip) {
  _inherits(CodeEditorClip, _BrowserClip);

  var _super = _createSuper(CodeEditorClip);

  function CodeEditorClip() {
    _classCallCheck(this, CodeEditorClip);

    return _super.apply(this, arguments);
  }

  _createClass(CodeEditorClip, [{
    key: "html",
    get: function get() {
      return "<div id=\"code-editor\"></div>";
    }
  }, {
    key: "css",
    get: function get() {
      var toReturn = "\n      #code-editor{\n        width: 100%;\n        height: 100%;\n      }\n    ";

      if (this.attrs.darkTheme === true) {
        var theme = darkTheme;
        toReturn += "".concat(theme);
      }

      return toReturn;
    }
  }, {
    key: "onAfterRender",
    value: function onAfterRender() {
      var flask = new CodeFlask(this.context.getElements("#code-editor")[0], {
        language: "js",
        lineNumbers: this.attrs.lineNumbers === true,
        defaultTheme: this.attrs.darkTheme !== true,
        readonly: this.attrs.readOnly === true
      });
      var css1 = document.getElementById("codeflask-style");
      this.context.rootElement.appendChild(css1.cloneNode(true));

      if (this.attrs.darkTheme !== true) {
        var css2 = document.getElementById("theme-default");
        this.context.rootElement.appendChild(css2.cloneNode(true));
      }

      this.setCustomEntity("editor", {
        flask: flask,
        textarea: this.context.getElements("#code-editor > div > textarea")[0]
      });
    }
  }]);

  return CodeEditorClip;
}(BrowserClip);

var global$9 = global$x;
var classof$2 = classof$4;
var String$1 = global$9.String;

var toString$3 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$1(argument);
};

var anObject$5 = anObject$8; // `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

var regexpFlags$1 = function () {
  var that = anObject$5(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var fails$5 = fails$e;
var global$8 = global$x; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError

var $RegExp$2 = global$8.RegExp;
var UNSUPPORTED_Y$2 = fails$5(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
}); // UC Browser bug
// https://github.com/zloirock/core-js/issues/1008

var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$5(function () {
  return !$RegExp$2('a', 'y').sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$5(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});
var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS = descriptors;
var definePropertyModule = objectDefineProperty;
var anObject$4 = anObject$8;
var toIndexedObject$2 = toIndexedObject$6;
var objectKeys = objectKeys$1; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

var objectDefineProperties = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$4(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);

  return O;
};

var getBuiltIn = getBuiltIn$5;
var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */
var anObject$3 = anObject$8;
var defineProperties = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey = sharedKey$2;
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$3(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

var fails$4 = fails$e;
var global$7 = global$x; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError

var $RegExp$1 = global$7.RegExp;
var regexpUnsupportedDotAll = fails$4(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$3 = fails$e;
var global$6 = global$x; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError

var $RegExp = global$6.RegExp;
var regexpUnsupportedNcg = fails$3(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

/* eslint-disable regexp/no-useless-quantifier -- testing */


var call$3 = functionCall;
var uncurryThis$5 = functionUncurryThis;
var toString$2 = toString$3;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;
var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$5(''.charAt);
var indexOf = uncurryThis$5(''.indexOf);
var replace = uncurryThis$5(''.replace);
var stringSlice$2 = uncurryThis$5(''.slice);

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$3(nativeExec, re1, 'a');
  call$3(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$2(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$3(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$3(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');

      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$2(str, re.lastIndex); // Support anchored sticky behavior.

      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      } // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.


      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match = call$3(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$2(match.input, charsAdded);
        match[0] = stringSlice$2(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call$3(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);

      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$3 = patchedExec;

var $$3 = _export;
var exec$1 = regexpExec$3; // `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec

$$3({
  target: 'RegExp',
  proto: true,
  forced: /./.exec !== exec$1
}, {
  exec: exec$1
});

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var bind = FunctionPrototype.bind;
var call$2 = FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind ? call$2.bind(apply$1) : function () {
  return call$2.apply(apply$1, arguments);
});

var uncurryThis$4 = functionUncurryThis;
var redefine = redefine$2.exports;
var regexpExec$2 = regexpExec$3;
var fails$2 = fails$e;
var wellKnownSymbol$3 = wellKnownSymbol$a;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var SPECIES$2 = wellKnownSymbol$3('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$3(KEY);
  var DELEGATES_TO_SYMBOL = !fails$2(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$2(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.

      re.constructor = {};

      re.constructor[SPECIES$2] = function () {
        return re;
      };

      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var uncurriedNativeRegExpMethod = uncurryThis$4(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$4(nativeMethod);
      var $exec = regexp.exec;

      if ($exec === regexpExec$2 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: uncurriedNativeMethod(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var isObject$1 = isObject$9;
var classof$1 = classofRaw$1;
var wellKnownSymbol$2 = wellKnownSymbol$a;
var MATCH = wellKnownSymbol$2('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject$1(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
};

var global$5 = global$x;
var isConstructor$1 = isConstructor$3;
var tryToString = tryToString$2;
var TypeError$3 = global$5.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor$1 = function (argument) {
  if (isConstructor$1(argument)) return argument;
  throw TypeError$3(tryToString(argument) + ' is not a constructor');
};

var anObject$2 = anObject$8;
var aConstructor = aConstructor$1;
var wellKnownSymbol$1 = wellKnownSymbol$a;
var SPECIES$1 = wellKnownSymbol$1('species'); // `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor

var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || (S = anObject$2(C)[SPECIES$1]) == undefined ? defaultConstructor : aConstructor(S);
};

var uncurryThis$3 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$1 = toString$3;
var requireObjectCoercible$1 = requireObjectCoercible$4;
var charAt$1 = uncurryThis$3(''.charAt);
var charCodeAt = uncurryThis$3(''.charCodeAt);
var stringSlice$1 = uncurryThis$3(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible$1($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice$1(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex

var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};

var global$4 = global$x;
var toAbsoluteIndex$2 = toAbsoluteIndex$4;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;
var createProperty$2 = createProperty$4;
var Array$2 = global$4.Array;
var max$2 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$2(O);
  var k = toAbsoluteIndex$2(start, length);
  var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
  var result = Array$2(max$2(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) createProperty$2(result, n, O[k]);

  result.length = n;
  return result;
};

var global$3 = global$x;
var call$1 = functionCall;
var anObject$1 = anObject$8;
var isCallable = isCallable$c;
var classof = classofRaw$1;
var regexpExec$1 = regexpExec$3;
var TypeError$2 = global$3.TypeError; // `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec

var regexpExecAbstract = function (R, S) {
  var exec = R.exec;

  if (isCallable(exec)) {
    var result = call$1(exec, R, S);
    if (result !== null) anObject$1(result);
    return result;
  }

  if (classof(R) === 'RegExp') return call$1(regexpExec$1, R, S);
  throw TypeError$2('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call = functionCall;
var uncurryThis$2 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var isRegExp = isRegexp;
var anObject = anObject$8;
var requireObjectCoercible = requireObjectCoercible$4;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex = advanceStringIndex$1;
var toLength = toLength$2;
var toString = toString$3;
var getMethod = getMethod$2;
var arraySlice$1 = arraySliceSimple;
var callRegExpExec = regexpExecAbstract;
var regexpExec = regexpExec$3;
var stickyHelpers = regexpStickyHelpers;
var fails$1 = fails$e;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min$1 = Math.min;
var $push = [].push;
var exec = uncurryThis$2(/./.exec);
var push = uncurryThis$2($push);
var stringSlice = uncurryThis$2(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$1(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
}); // @@split logic

fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;

  if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }

      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;

        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice$1(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }

        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }

      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));

      return output.length > lim ? arraySlice$1(output, 0, lim) : output;
    }; // Chakra, V8

  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [// `String.prototype.split` method
  // https://tc39.es/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = requireObjectCoercible(this);
    var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
    return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (string, limit) {
    var rx = anObject(this);
    var S = toString(string);
    var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
    if (res.done) return res.value;
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
      var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
      var e;

      if (z === null || (e = min$1(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        push(A, stringSlice(S, p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          push(A, z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    push(A, stringSlice(S, p));
    return A;
  }];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

var uncurryThis$1 = functionUncurryThis;
var arraySlice = uncurryThis$1([].slice);

var $$2 = _export;
var global$2 = global$x;
var isArray = isArray$3;
var isConstructor = isConstructor$3;
var isObject = isObject$9;
var toAbsoluteIndex$1 = toAbsoluteIndex$4;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;
var toIndexedObject$1 = toIndexedObject$6;
var createProperty$1 = createProperty$4;
var wellKnownSymbol = wellKnownSymbol$a;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;
var un$Slice = arraySlice;
var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');
var SPECIES = wellKnownSymbol('species');
var Array$1 = global$2.Array;
var max$1 = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$$2({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$1
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject$1(this);
    var length = lengthOfArrayLike$1(O);
    var k = toAbsoluteIndex$1(start, length);
    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (isConstructor(Constructor) && (Constructor === Array$1 || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array$1 || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array$1 : Constructor)(max$1(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);

    result.length = n;
    return result;
  }
});

var $$1 = _export;
var global$1 = global$x;
var toAbsoluteIndex = toAbsoluteIndex$4;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var lengthOfArrayLike = lengthOfArrayLike$5;
var toObject = toObject$3;
var arraySpeciesCreate = arraySpeciesCreate$2;
var createProperty = createProperty$4;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var TypeError$1 = global$1.TypeError;
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species

$$1({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  splice: function splice(start, deleteCount
  /* , ...items */
  ) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;

    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }

    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError$1(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }

    A = arraySpeciesCreate(O, actualDeleteCount);

    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }

    A.length = actualDeleteCount;

    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];else delete O[to];
      }

      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];else delete O[to];
      }
    }

    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }

    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});

var fails = fails$e;

var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var $ = _export;
var uncurryThis = functionUncurryThis;
var IndexedObject = indexedObject;
var toIndexedObject = toIndexedObject$6;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var un$Join = uncurryThis([].join);
var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join

$({
  target: 'Array',
  proto: true,
  forced: ES3_STRINGS || !STRICT_METHOD
}, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

var WriteCode = /*#__PURE__*/function (_Effect) {
  _inherits(WriteCode, _Effect);

  var _super = _createSuper(WriteCode);

  function WriteCode() {
    _classCallCheck(this, WriteCode);

    return _super.apply(this, arguments);
  }

  _createClass(WriteCode, [{
    key: "onGetContext",
    value: function onGetContext() {
      this.code = this.targetValue.split(/(?!\s+)/);
      this.latency = this.duration / this.code.length;
    }
  }, {
    key: "onProgress",
    value: function onProgress(fraction, ms) {
      var cloneArray = this.code.slice();
      var code;

      if (fraction === 1) {
        code = cloneArray;
      } else if (ms < this.latency) {
        code = "";
      } else {
        code = cloneArray.splice(0, Math.floor(cloneArray.length * fraction));
      }

      this.element.entity.flask.updateCode(code.join(""));
      this.element.entity.textarea.focus();
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue() {
      return "";
    }
  }]);

  return WriteCode;
}(Effect);

var name = "@donkeyclip/motorcortex-code-typing";
var version = "1.0.12";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: WriteCode,
    name: "WriteCode",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          code: "string"
        }
      }
    }
  }],
  Clip: {
    exportable: CodeEditorClip,
    attributesValidationRules: {
      darkTheme: {
        optional: true,
        type: "boolean"
      },
      lineNumbers: {
        optional: true,
        type: "boolean"
      },
      readOnly: {
        optional: true,
        type: "boolean"
      }
    }
  }
};

export { index as default };
