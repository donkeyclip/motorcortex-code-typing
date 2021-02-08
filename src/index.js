import CodeEditor from './CodeEditorClip'
import WriteCode from './WriteCode'

const pkg = require("../package.json");

export default {
  npm_name: pkg.name,
  version: pkg.version,
    npm_name: "@kissmybutton/motorcortex-code-typing",
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
