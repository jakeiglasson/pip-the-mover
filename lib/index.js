"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// #!/usr/bin/env node
const Beefy_1 = __importDefault(require("./Beefy"));
const CliInterface_1 = require("./CliInterface");
console.log("~~~ Beefy The Robot ~~~");
console.log("type help for a list of commands\n");
const beefy = new Beefy_1.default;
let getInput = true;
while (getInput) {
    getInput = (0, CliInterface_1.CliInterface)(beefy);
}
//# sourceMappingURL=index.js.map