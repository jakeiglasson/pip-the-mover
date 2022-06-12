import { BeefyProps } from "./types";

export default class Beefy {
	x: BeefyProps["x"];
	y: BeefyProps["y"];
	f: BeefyProps["f"];

	constructor() {
		this.x;
		this.y;
		this.f;
	}

	place() {}

	move() {}

	left() {}

	right() {}

	report() {
		return { x: this.x, y: this.y, f: this.f };
	}
}
