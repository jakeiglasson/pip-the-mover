import { beefyValidFacingDirections } from "./types";

export type BeefyProps = {
	x: number;
	y: number;
	f: string;
};
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

	private validFacingPosition(f: beefyValidFacingDirections) {
		return f === "EAST" || f === "NORTH" || f === "SOUTH" || f === "WEST";
	}

	place(position: BeefyProps) {
		const { x, y, f } = position;
		if (this.validPositionCoord(x) && this.validPositionCoord(y) && this.validFacingPosition(f as beefyValidFacingDirections)) {
			if (!this.isPlaced) {
				this.isPlaced = true;
			}
			this.x = position.x;
			this.y = position.y;
			this.f = position.f;
		}
	}

	move() {
		switch (this.f) {
			case "NORTH":
				if (this.y < 4) {
					this.y += 1;
				}
				break;
			case "SOUTH":
				if (this.y > 0) {
					this.y -= 1;
				}
				break;
			case "EAST":
				if (this.x < 4) {
					this.x += 1;
				}
				break;
			case "WEST":
				if (this.x > 0) {
					this.x -= 1;
				}
				break;

			default:
				break;
		}
	}

	// cw - clockWise
	private changeCardinalDirection = (cw: boolean) => {
		switch (this.f) {
			case "NORTH":
				this.f = cw ? "EAST" : "WEST";
				break;
			case "WEST":
				this.f = cw ? "NORTH" : "SOUTH";
				break;
			case "SOUTH":
				this.f = cw ? "WEST" : "EAST";
				break;
			case "EAST":
				this.f = cw ? "SOUTH" : "NORTH";
				break;
			default:
				break;
		}
	};

	left() {
		this.changeCardinalDirection(false);
	}

	right() {
		this.changeCardinalDirection(true);
	}

	report() {
		if (this.isPlaced) {
			return { x: this.x, y: this.y, f: this.f };
		}
	}
}
