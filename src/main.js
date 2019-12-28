const CodeEditor = require('./CodeEditorClip');
const WriteCode = require('./WriteCode');

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
}
