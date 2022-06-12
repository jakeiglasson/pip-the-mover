"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Beefy_1 = __importDefault(require("../Beefy"));
describe("Instance Of Class Beefy:", () => {
    const beefy = new Beefy_1.default();
    describe("New Instance:", () => {
        test("defines x, y, f as null", () => {
            expect(beefy.x).toStrictEqual(undefined);
            expect(beefy.y).toStrictEqual(undefined);
            expect(beefy.f).toStrictEqual(undefined);
        });
        test("defines place()", () => {
            expect(typeof beefy.place).toBe("function");
        });
        test("defines move()", () => {
            expect(typeof beefy.move).toBe("function");
        });
        test("defines left()", () => {
            expect(typeof beefy.left).toBe("function");
        });
        test("defines right()", () => {
            expect(typeof beefy.right).toBe("function");
        });
        test("defines report()", () => {
            expect(typeof beefy.report).toBe("function");
        });
    });
});
//# sourceMappingURL=test.js.map