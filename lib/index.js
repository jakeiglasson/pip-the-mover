"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #!/usr/bin/env node
const CliInterface_1 = require("./CliInterface");
console.log("~~~ Beefy The Robot ~~~");
console.log("type help for a list of commands\n");
let getInput = true;
while (getInput) {
    getInput = (0, CliInterface_1.CliInterface)();
}
//# sourceMappingURL=index.js.map