import { BeefyProps } from "./types";

export default class Beefy {
	x: BeefyProps["x"];
	y: BeefyProps["y"];
	f: BeefyProps["f"];
	isPlaced: boolean;

	constructor() {
		this.x = 0;
		this.y = 0;
		this.f = "NORTH";
		this.isPlaced = false;
	}

	place(position: BeefyProps) {
		this.x = position.x;
		this.y = position.y;
		this.f = position.f;
		this.isPlaced = true;
	}

	move() {}

	left() {}

	right() {}

	report() {
		if (this.isPlaced) {
			return { x: this.x, y: this.y, f: this.f };
		}
	}
}
