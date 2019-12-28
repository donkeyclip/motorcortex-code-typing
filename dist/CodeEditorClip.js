"use strict";

var _codeflask = _interopRequireDefault(require("codeflask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MotorCortex = require("@kissmybutton/motorcortex");

var CodeEditorClip =
/*#__PURE__*/
function (_MotorCortex$API$DOMC) {
  _inherits(CodeEditorClip, _MotorCortex$API$DOMC);

  function CodeEditorClip() {
    _classCallCheck(this, CodeEditorClip);

    return _possibleConstructorReturn(this, _getPrototypeOf(CodeEditorClip).apply(this, arguments));
  }

  _createClass(CodeEditorClip, [{
    key: "onAfterRender",
    value: function onAfterRender() {
      var flask = new _codeflask["default"](this.context.getElements('#code-editor')[0], {
        language: 'js',
        lineNumbers: this.attrs.lineNumbers === true,
        defaultTheme: this.attrs.darkTheme !== true,
        readonly: this.attrs.readOnly === true
      });
      var css1 = document.getElementById('codeflask-style');
      this.context.rootElement.appendChild(css1.cloneNode(true));

      if (this.attrs.darkTheme !== true) {
        var css2 = document.getElementById('theme-default');
        this.context.rootElement.appendChild(css2.cloneNode(true));
      }

      this.setCustomEntity("editor", {
        flask: flask,
        textarea: this.context.getElements('#code-editor > div > textarea')[0]
      });
    }
  }, {
    key: "html",
    get: function get() {
      return "\n            <div id=\"code-editor\"></div>\n        ";
    }
  }, {
    key: "css",
    get: function get() {
      var toReturn = "\n            #code-editor{\n                width: 100%;\n                height: 100%;\n            }\n        ";

      if (this.attrs.darkTheme === true) {
        var theme = require("./themes/dark");

        toReturn += "\n                ".concat(theme, "            \n            ");
      }

      return toReturn;
    }
  }]);

  return CodeEditorClip;
}(MotorCortex.API.DOMClip);

module.exports = CodeEditorClip;
//# sourceMappingURL=CodeEditorClip.js.map