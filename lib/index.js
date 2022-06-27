"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// #!/usr/bin/env node
const Pip_1 = __importDefault(require("./Pip"));
const CliInterface_1 = require("./CliInterface");
console.log("~~~ Pip The Mover ~~~");
console.log("type help for a list of commands\n");
const pip = new Pip_1.default();
let getInput = true;
while (getInput) {
    getInput = (0, CliInterface_1.CliInterface)(pip);
}
//# sourceMappingURL=index.js.map