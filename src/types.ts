export type BeefyProps = {
	x: number;
	y: number;
	f: "NORTH" | "SOUTH" | "EAST" | "WEST";
};

export type ValidCommands = "PLACE" | "MOVE" | "REPORT" | "LEFT" | "RIGHT" | "EXIT" | "HELP";
