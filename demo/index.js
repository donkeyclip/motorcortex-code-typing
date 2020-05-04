const MotorCortex = require("@kissmybutton/motorcortex");
const Player = require("@kissmybutton/motorcortex-player");

const CodeTyperDefinition = require('../dist/motorcortex-code-typing.umd');
const CodeTyper = MotorCortex.loadPlugin(CodeTyperDefinition);

const MyClip = new CodeTyper.Clip({
    darkTheme: true,
    lineNumbers: true,
    readOnly: false
}, {
    id: 'code-typer-clip',
    host: document.getElementById('clip'),
    containerParams: { width: '100%', height: '100%' }
});

const code =
    `const fs = require("fs");

const lines = fs.readFileSync(progress.argv[2], "utf-8");
const result = lines
    .split("\\n")   // split lines
    .map(line => {
        const tokens = line.split(" ");
        if (line.startsWith("#") || tokens.length < 5) return line;
        tokens[2] = Math.max(3, tokens[2]);
        return tokens.join(" ");
    })
    .filter(line => {...})
    .join("\\n");
console.log("File transformed successfully");
`;

const WriteSthg = new CodeTyper.WriteCode({
    animatedAttrs: {
        code: code
    }
}, {
    duration: 12000,
    selector: "!#editor"
});

const WriteSthgElse = new CodeTyper.WriteCode({
    animatedAttrs: {
        code: code
    }
}, {
    duration: 12000,
    selector: "!#editor"
});



MyClip.addIncident(WriteSthg, 0);
MyClip.addIncident(WriteSthgElse, 14000);
new Player({ clip: MyClip });
