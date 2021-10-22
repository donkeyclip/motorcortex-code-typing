# motorcortex-code-typing

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-code-typing
# OR
$ yarn add @donkeyclip/motorcortex-code-typing
```

## Importing

```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import MCCodeTyping from "@donkeyclip/motorcortex-code-typing";
```

## Loading

```javascript
const CodeTypingPlugin = MotorCortex.loadPlugin(MCCodeTyping);
```

## API
The Plugin exposes two Incidents in total:
* the CodeEditor Clip
* the WriteCode Incident

### Clip
The Clip is used to create a new Code Editor and the parameters it accepts a number of parameters:
```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import MCCodeTyping from "@donkeyclip/motorcortex-code-typing";
const CodeTypingPlugin = MotorCortex.loadPlugin(MCCodeTyping);

const CodeEditor = new CodeTypingPlugin.Clip({
    darkTheme: true,
    lineNumbers: true,
    readOnly: false
}, {
    host: document.getElementById('clip-container'),
    containerParams: { width: '800px', height: '800px' }
});
```

As shown on the example the supported attributes that the "Clip" Incident accepts are:
* darkTheme: (optional, defaults to false). A boolean that if set to true the Editor renders in dark mode, otherwise it renders in the default light theme
* lineNumbers: (optional / defaults to false). Set this to true if you want the editor to show line numbers
* readOnly (optional / defaults to false). If set to true the editor renders on read onlt mode

### WriteCode
The WriteCode Incident is used to write code on a Code Editor
```javascript
import MotorCortex from "@donkeyclip/motorcortex";
import MCCodeTyping from "@donkeyclip/motorcortex-code-typing";
const CodeTypingPlugin = MotorCortex.loadPlugin(MCCodeTyping);

const CodeEditor = new CodeTypingPlugin.Clip({
    darkTheme: true,
    lineNumbers: true,
    readOnly: false
}, {
    host: document.getElementById('clip-container'),
    containerParams: { width: '800px', height: '800px' }
});

const WriteSthg = new CodeTyper.WriteCode({
    animatedAttrs: {
        code: code
    }
}, {
    duration: 12000,
    selector: "!#editor"
});

CodeEditor.addIncident(WriteSthg, 0);
```

As shown on the example the supported animatedAttr that the "WriteSthg" Incident accepts is the "code", which is going to be typed on the Code Editor.
The selector should always be "!#editor". 

[Check the Demo out](https://donkeyclip.github.io/motorcortex-code-typing/demo/)

## License
[MIT License](https://opensource.org/licenses/MIT)


  
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)

