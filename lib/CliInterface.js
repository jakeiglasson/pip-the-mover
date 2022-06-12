"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliInterface = void 0;
// const prompt = require("prompt-sync")();
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const CliInterface = () => {
    const commandString = prompt("command: ").toUpperCase().split(" ");
    const command = commandString[0];
    switch (command) {
        case "PLACE":
            break;
        case "LEFT":
            break;
        case "RIGHT":
            break;
        case "MOVE":
            break;
        case "REPORT":
            break;
        case "HELP":
            console.log("\nPLACE X,Y,F: e.g. PLACE 0,0,NORTH ");
            console.log("LEFT: change the direction (counter-clockwise) beefy is facing");
            console.log("RIGHT: change the direction (clockwise) beefy is facing");
            console.log("MOVE: move beefy one unit in the direction it's facing");
            console.log("REPORT: get the X,Y,F position of beefy");
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