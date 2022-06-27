"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pip {
    constructor() {
        // cw - clockWise
        this.changeCardinalDirection = (cw) => {
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
        this.x = 0;
        this.y = 0;
        this.f = "NORTH";
        this.isPlaced = false;
    }
    validPositionCoord(n) {
        return Number.isInteger(n) && 0 <= n && n < 5;
    }
    validFacingPosition(f) {
        return f === "EAST" || f === "NORTH" || f === "SOUTH" || f === "WEST";
    }
    place(position) {
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
    move() {
        if (this.isPlaced) {
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
    }
    left() {
        if (this.isPlaced) {
            this.changeCardinalDirection(false);
        }
    }
    right() {
        if (this.isPlaced) {
            this.changeCardinalDirection(true);
        }
    }
    report() {
        if (this.isPlaced) {
            return { x: this.x, y: this.y, f: this.f };
        }
    }
}
exports.default = Pip;
//# sourceMappingURL=Pip.js.map