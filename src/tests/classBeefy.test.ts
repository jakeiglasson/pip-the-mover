import Beefy from "../Beefy";
import { BeefyProps } from "../types";
let beefy = new Beefy();

describe("Instance Of Class Beefy:", () => {
	describe("New Instance:", () => {
		test("defines x, y, f as 0,0,NORTH", () => {
			expect(beefy.x).toStrictEqual(0);
			expect(beefy.y).toStrictEqual(0);
			expect(beefy.f).toStrictEqual("NORTH");
		});
		test("defines isPlaced as false", () => {
			expect(beefy.isPlaced).toStrictEqual(false);
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

	describe("Defined Function:", () => {
		const validTestCoords: BeefyProps = { x: 1, y: 1, f: "EAST" };

		describe("report()", () => {
			beefy = new Beefy();
			test("returns undefined when isPlaced === false", () => {
				expect(beefy.report()).toStrictEqual(undefined);
			});
			test("returns the values x,y,f of instance Beefy as {x,y,f}. Only if isPlaced === true", () => {
				beefy.place(validTestCoords);
				expect(beefy.report()).toStrictEqual(validTestCoords);
			});
		});

		describe("place()", () => {
			test("Modifies the properties x,y,f of instance Beefy if given object {x,y,f}. For new instances: isPlaced is set to true", () => {
				beefy = new Beefy();
				beefy.place(validTestCoords);
				expect(beefy.report()).toStrictEqual(validTestCoords);
				expect(beefy.isPlaced).toStrictEqual(true);
			});

			describe("Valid Inputs Only (Invalid Inputs Don't Change Values)", () => {
				test("x and y: int only", () => {
					// string test
					// @ts-ignore : ignore setting string to x for testing purposes
					beefy.place({ x: "a", y: 3, f: "WEST" });
					expect(beefy.report()).toStrictEqual(validTestCoords);
					// float test
					beefy.place({ x: 1.5, y: 3, f: "WEST" });
					expect(beefy.report()).toStrictEqual(validTestCoords);
				});
				test("x and y: not less than 0, not greater than 4", () => {
					beefy.place({ x: -1, y: 3, f: "WEST" });
					expect(beefy.report()).toStrictEqual(validTestCoords);

					beefy.place({ x: 5, y: 3, f: "WEST" });
					expect(beefy.report()).toStrictEqual(validTestCoords);
				});
				test("f: only 'NORTH' || 'SOUTH' || 'EAST' || 'WEST'", () => {
					// @ts-ignore : ignore setting string to expected value for testing purposes
					beefy.place({ x: 5, y: 3, f: "SOMEWHERE" });
					expect(beefy.report()).toStrictEqual(validTestCoords);
				});
			});
		});
	});
});
