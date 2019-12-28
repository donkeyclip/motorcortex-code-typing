"use strict";

var CodeEditor = require('./CodeEditorClip');

var WriteCode = require('./WriteCode');

module.exports = {
  npm_name: "@kissmybutton/motorcortex-codetyper",
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
  Clip: CodeEditor
};
//# sourceMappingURL=main.js.map