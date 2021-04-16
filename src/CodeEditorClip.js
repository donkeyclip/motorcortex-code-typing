import { BrowserClip } from "@kissmybutton/motorcortex";
import CodeFlask from "codeflask";
import darkTheme from "./themes/dark";
export default class CodeEditorClip extends BrowserClip {
  get html() {
    return `<div id="code-editor"></div>`;
  }

  get css() {
    let toReturn = `
      #code-editor{
        width: 100%;
        height: 100%;
      }
    `;
    if (this.attrs.darkTheme === true) {
      const theme = darkTheme;
      toReturn += `${theme}`;
    }

    return toReturn;
  }

  onAfterRender() {
    const flask = new CodeFlask(this.context.getElements("#code-editor")[0], {
      language: "js",
      lineNumbers: this.attrs.lineNumbers === true,
      defaultTheme: this.attrs.darkTheme !== true,
      readonly: this.attrs.readOnly === true,
    });

    const css1 = document.getElementById("codeflask-style");
    this.context.rootElement.appendChild(css1.cloneNode(true));
    if (this.attrs.darkTheme !== true) {
      const css2 = document.getElementById("theme-default");
      this.context.rootElement.appendChild(css2.cloneNode(true));
    }

    this.setCustomEntity("editor", {
      flask: flask,
      textarea: this.context.getElements("#code-editor > div > textarea")[0],
    });
  }
}
