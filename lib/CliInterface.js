"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliInterface = void 0;
// const prompt = require("prompt-sync")();
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const CliInterface = (pip) => {
    const commandString = prompt("> ").toUpperCase().split(" ");
    const [command, parameters] = [commandString[0], commandString.slice(1)];
    let placeCoords;
    if (parameters[0]) {
        let x;
        let y;
        let f;
        [x, y, f] = parameters[0].split(",");
        x = Number(x);
        y = Number(y);
        placeCoords = { x, y, f: f };
    }
    switch (command) {
        case "PLACE":
            if (placeCoords) {
                pip.place(placeCoords);
            }
            break;
        case "LEFT":
            pip.left();
            break;
        case "RIGHT":
            pip.right();
            break;
        case "MOVE":
            pip.move();
            break;
        case "REPORT":
            const report = pip.report();
            if (report) {
                console.log("\nreport:", report, "\n");
            }
            break;
        case "HELP":
            console.log("\nPLACE X,Y,F: e.g. PLACE 0,0,NORTH ");
            console.log("LEFT: change the direction (counter-clockwise) pip is facing");
            console.log("RIGHT: change the direction (clockwise) pip is facing");
            console.log("MOVE: move pip one unit in the direction it's facing");
            console.log("REPORT: get the X,Y,F position of pip");
            console.log("EXIT: close application\n");
            break;
        case "EXIT":
            return false;
        default:
            break;
    }
    return true;
};
exports.CliInterface = CliInterface;
//# sourceMappingURL=CliInterface.js.map