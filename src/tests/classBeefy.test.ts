import Beefy, { BeefyProps } from "../Beefy";

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
		const validTestCoords: BeefyProps = { x: 1, y: 1, f: "NORTH" };

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
			test("Modifies the properties x,y,f of instance Beefy if given object {x,y,f}. For new instances: sets isPlaced to true", () => {
				beefy = new Beefy();
				beefy.place(validTestCoords);
				expect(beefy.report()).toStrictEqual(validTestCoords);
				expect(beefy.isPlaced).toStrictEqual(true);
			});

			describe("- Valid Inputs Only (Invalid Inputs Don't Change Values):", () => {
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

		describe("move(), facing (f):", () => {
			describe("(f) NORTH:", () => {
				test("Property y of Beefy instance is increased by 1", () => {
					beefy.place({ x: 0, y: 0, f: "NORTH" });
					beefy.move();
					expect(beefy.report()).toStrictEqual({ x: 0, y: 1, f: "NORTH" });
				});
				test("Property y is NOT increased if y === 4", () => {
					beefy.place({ x: 0, y: 4, f: "NORTH" });
					beefy.move();
					expect(beefy.report()).toStrictEqual({ x: 0, y: 4, f: "NORTH" });
				});
			});
			describe("(f) SOUTH:", () => {
				test("Property y of Beefy instance is decreased by 1", () => {
					beefy.place({ x: 0, y: 4, f: "SOUTH" });
					beefy.move();
					expect(beefy.report()).toStrictEqual({ x: 0, y: 3, f: "SOUTH" });
				});
				test("Property y is NOT decreased if y === 0", () => {
					beefy.place({ x: 0, y: 0, f: "SOUTH" });
					beefy.move();
					expect(beefy.report()).toStrictEqual({ x: 0, y: 0, f: "SOUTH" });
				});
			});
			describe("(f) EAST:", () => {
				test("Property x of Beefy instance is increased by 1", () => {
					beefy.place({ x: 0, y: 0, f: "EAST" });
					beefy.move();
					expect(beefy.report()).toStrictEqual({ x: 1, y: 0, f: "EAST" });
				});
				test("Property x is NOT increased if x === 4", () => {
					beefy.place({ x: 4, y: 0, f: "EAST" });
					beefy.move();
					expect(beefy.report()).toStrictEqual({ x: 4, y: 0, f: "EAST" });
				});
			});
			describe("(f) WEST:", () => {
				test("Property x of Beefy instance is decreased by 1", () => {
					beefy.place({ x: 4, y: 0, f: "WEST" });
					beefy.move();
					expect(beefy.report()).toStrictEqual({ x: 3, y: 0, f: "WEST" });
				});
				test("Property x is NOT decreased if x === 0", () => {
					beefy.place({ x: 0, y: 0, f: "WEST" });
					beefy.move();
					expect(beefy.report()).toStrictEqual({ x: 0, y: 0, f: "WEST" });
				});
			});
		});

		describe("left()", () => {
			test("cycles through the cardinal directions counter-clockwise", () => {
				beefy.place(validTestCoords);
				beefy.left();
				expect(beefy.report()).toStrictEqual({ ...validTestCoords, f: "WEST" });
				beefy.left();
				expect(beefy.report()).toStrictEqual({ ...validTestCoords, f: "SOUTH" });
				beefy.left();
				expect(beefy.report()).toStrictEqual({ ...validTestCoords, f: "EAST" });
				beefy.left();
				expect(beefy.report()).toStrictEqual({ ...validTestCoords, f: "NORTH" });
			});
		});

		describe("right()", () => {
			test("cycles through the cardinal directions clockwise", () => {
				beefy.place(validTestCoords);
				beefy.right();
				expect(beefy.report()).toStrictEqual({ ...validTestCoords, f: "EAST" });
				beefy.right();
				expect(beefy.report()).toStrictEqual({ ...validTestCoords, f: "SOUTH" });
				beefy.right();
				expect(beefy.report()).toStrictEqual({ ...validTestCoords, f: "WEST" });
				beefy.right();
				expect(beefy.report()).toStrictEqual({ ...validTestCoords, f: "NORTH" });
			});
		});
	});
});
