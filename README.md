# MotorCortex-Code-Typing

**Table of Contents**

- [MotorCortex-Code-Typing](#motorcortex-code-typing)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [CodeEditor Clip](#codeeditor-clip)
  - [WriteCode](#writecode)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-code-typing/demo/)

# Intro / Features
MotorCortex-Code-Typing renders your clip as a code editor.

The Plugin exposes two Incidents in total:
* the CodeEditor Clip
* the WriteCode Incident

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-code-typing
# OR
$ yarn add @donkeyclip/motorcortex-code-typing
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import MCCodeTyping from "@donkeyclip/motorcortex-code-typing";
const CodeTypingPlugin = MotorCortex.loadPlugin(MCCodeTyping);
```

# Creating Incidents

## CodeEditor Clip
The Clip is used to create a new Code Editor and the parameters it accepts a number of parameters:
```javascript
const CodeEditor = new CodeTypingPlugin.Clip({
    darkTheme: true,
    lineNumbers: true,
    readOnly: false
}, {
    host: document.getElementById('clip-container'),
    containerParams: { width: '800px', height: '800px' }
});
```
### CodeEditor Clip Attrs

| Name        |                                             Are                                              | Values  |
| ---------   | :------------------------------------------------------------------------------------------: | ------: |
| darkTheme   | set to true the Editor renders in dark mode, otherwise it renders in the default light theme (optional, defaults to false)| boolean |
| lineNumbers |                   set to true if you want the editor to show line numbers (optional, defaults to false)                   | boolean |
| readOnly    |               set to true if you want the editor to render on read only mode (optional, defaults to false)                | boolean |

## WriteCode
The WriteCode Incident is used to write code on a Code Editor
```javascript
const CodeEditor = new CodeTypingPlugin.Clip({
    darkTheme: true,
    lineNumbers: true,
    readOnly: false
}, {
    host: document.getElementById('clip-container'),
    containerParams: { width: '800px', height: '800px' }
});

const WriteSthg = new CodeTypingPlugin.WriteCode({
    animatedAttrs: {
        code: code
    }
}, {
    duration: 12000,
    selector: "!#editor"
});
```

### WriteCode Attrs
| Name   |                              Are                          | Values  |
| -------| :-------------------------------------------------------: | ------: |
| code   |   the code which is going to be typed on the Code Editor  | srting |

#### IMPORTANT

The selector should always be "!#editor". 

# Adding Incidents in your clip

```javascript
CodeEditorIncident.addIncident(WriteCodeIncident, startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)

