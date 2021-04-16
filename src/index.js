import CodeEditor from "./CodeEditorClip";
import WriteCode from "./WriteCode";

import { name, version } from "../package.json";

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: WriteCode,
      name: "WriteCode",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            code: "string",
          },
        },
      },
    },
  ],
  Clip: {
    exportable: CodeEditor,
    attributesValidationRules: {
      darkTheme: {
        optional: true,
        type: "boolean",
      },
      lineNumbers: {
        optional: true,
        type: "boolean",
      },
      readOnly: {
        optional: true,
        type: "boolean",
      },
    },
  },
};
