// const prompt = require("prompt-sync")();
import PromptSync from "prompt-sync";
import Pip, { PipProps } from "./Pip";
import { pipValidFacingDirections, ValidCommands } from "./types";

const prompt = PromptSync();

export const CliInterface = (pip: Pip): boolean => {
	const commandString = prompt("> ").toUpperCase().split(" ");
	const [command, parameters] = [commandString[0] as ValidCommands, commandString.slice(1)];

	let placeCoords: PipProps;
	if (parameters[0]) {
		let x;
		let y;
		let f;
		[x, y, f] = parameters[0].split(",");
		x = Number(x);
		y = Number(y);
		placeCoords = { x, y, f: f as pipValidFacingDirections };
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
