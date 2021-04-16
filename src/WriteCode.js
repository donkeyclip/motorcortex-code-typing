const MotorCortex = require("@kissmybutton/motorcortex");

class WriteCode extends MotorCortex.Effect {
    onGetContext() {
        this.code = this.targetValue.split(/(?!\s+)/);
        this.latency = this.duration / this.code.length;
    }

    onProgress(fraction, ms) {
        const cloneArray = this.code.slice();
        let code;
        if (fraction === 1) {
            code = cloneArray;
        }
        else if (ms < this.latency) {
            code = "";
        }
        else {
            code = cloneArray.splice(0, Math.floor(cloneArray.length * fraction));
        }
        this.element.entity.flask.updateCode(code.join(""));
        this.element.entity.textarea.focus();
    }

    getScratchValue() {
        return "";
    }
}

module.exports = WriteCode;
