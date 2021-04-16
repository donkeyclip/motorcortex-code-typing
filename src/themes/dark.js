const BACKGROUND_COLOR = "#1d1f21";
const LINE_HEIGHT = "20px";
const FONT_SIZE = "13px";

export default `
.codeflask {
  font-size: ${FONT_SIZE};
  line-height ${LINE_HEIGHT};
  background: ${BACKGROUND_COLOR};
  color: #61afef;
}

.codeflask .token.punctuation {
  color: #ffffff;
}

.codeflask .token.keyword {
  color: #c397d8;
}

.codeflask .token.operator {
  color: #c397d8;
}

.codeflask .token.parameter {
  color: #e78c45;
}

.codeflask .token.string {
  color: #f0c674;
}

.codeflask .token.comment {
  color: #74715e;
  font-style: italic;
}

.codeflask .token.function {
  color: #b9ca4a;
}

.codeflask .token.boolean {
  color: orange;
}

.codeflask .token.number {
  color: #e04164;
}

.codeflask .token.selector {
  color: #b294bb;
}

.codeflask .token.property {
  color: #b294bb;
}

.codeflask .token.tag {
  color: #b294bb;
}

.codeflask .token.attr-value {
  color: #b294bb;
}

.codeflask__textarea{
  caret-color: whitesmoke !important;
  color: ${BACKGROUND_COLOR} !important;
}

.codeflask__lines{
  background: #444;
  color: #aaa;
}
`;
