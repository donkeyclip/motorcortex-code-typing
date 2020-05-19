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
    Clip: {
        exportable: CodeEditor,
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
}
