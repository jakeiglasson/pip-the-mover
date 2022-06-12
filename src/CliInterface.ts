// const prompt = require("prompt-sync")();
import PromptSync from "prompt-sync";
import Beefy, { BeefyProps } from "./Beefy";
import { beefyValidFacingDirections, ValidCommands } from "./types";

const prompt = PromptSync();

export const CliInterface = (beefy: Beefy): boolean => {
	const commandString = prompt("> ").toUpperCase().split(" ");
	const [command, parameters] = [commandString[0] as ValidCommands, commandString.slice(1)];

	let placeCoords: BeefyProps;
	if (parameters[0]) {
		let x;
		let y;
		let f;
		[x, y, f] = parameters[0].split(",");
		x = Number(x);
		y = Number(y);
		placeCoords = { x, y, f: f as beefyValidFacingDirections };
	}

	switch (command) {
		case "PLACE":
			if (placeCoords) {
				beefy.place(placeCoords);
			}
			break;
		case "LEFT":
			beefy.left();
			break;
		case "RIGHT":
			beefy.right();
			break;
		case "MOVE":
			beefy.move();
			break;
		case "REPORT":
			const report = beefy.report();
			if (report) {
				console.log("\nreport:", report, "\n");
			}
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
