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

	private validPositionCoord(n: number) {
		return Number.isInteger(n) && 0 <= n && n < 5;
	}

	private validFacingPosition(f: BeefyProps["f"]) {
		return f === "EAST" || f === "NORTH" || f === "SOUTH" || f === "WEST";
	}

	place(position: BeefyProps) {
		const { x, y, f } = position;
		if (this.validPositionCoord(x) && this.validPositionCoord(y) && this.validFacingPosition(f)) {
			if (!this.isPlaced) {
				this.isPlaced = true;
			}
			this.x = position.x;
			this.y = position.y;
			this.f = position.f;
		}
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
