import Pip, { PipProps } from "../Pip";

let pip = new Pip();

describe("Instance Of Class Pip:", () => {
	describe("New Instance:", () => {
		test("defines x, y, f as 0,0,NORTH", () => {
			expect(pip.x).toStrictEqual(0);
			expect(pip.y).toStrictEqual(0);
			expect(pip.f).toStrictEqual("NORTH");
		});
		test("defines isPlaced as false", () => {
			expect(pip.isPlaced).toStrictEqual(false);
		});
		test("defines place()", () => {
			expect(typeof pip.place).toBe("function");
		});
		test("defines move()", () => {
			expect(typeof pip.move).toBe("function");
		});
		test("defines left()", () => {
			expect(typeof pip.left).toBe("function");
		});
		test("defines right()", () => {
			expect(typeof pip.right).toBe("function");
		});
		test("defines report()", () => {
			expect(typeof pip.report).toBe("function");
		});
	});

	describe("Defined Function:", () => {
		const validTestCoords: PipProps = { x: 1, y: 1, f: "NORTH" };

		describe("report()", () => {
			test("returns undefined when isPlaced === false", () => {
				pip = new Pip();
				expect(pip.report()).toStrictEqual(undefined);
			});
			test("returns the values x,y,f of instance Pip as {x,y,f}. Only if isPlaced === true", () => {
				pip.place(validTestCoords);
				expect(pip.report()).toStrictEqual(validTestCoords);
			});
		});

		describe("place()", () => {
			test("Modifies the properties x,y,f of instance Pip if given object {x,y,f}. For new instances: sets isPlaced to true", () => {
				pip = new Pip();
				pip.place(validTestCoords);
				expect(pip.report()).toStrictEqual(validTestCoords);
				expect(pip.isPlaced).toStrictEqual(true);
			});

			describe("- Valid Inputs Only (Invalid Inputs Don't Change Values):", () => {
				test("x and y: int only", () => {
					// string test
					// @ts-ignore : ignore setting string to x for testing purposes
					pip.place({ x: "a", y: 3, f: "WEST" });
					expect(pip.report()).toStrictEqual(validTestCoords);
					// float test
					pip.place({ x: 1.5, y: 3, f: "WEST" });
					expect(pip.report()).toStrictEqual(validTestCoords);
				});
				test("x and y: not less than 0, not greater than 4", () => {
					pip.place({ x: -1, y: 3, f: "WEST" });
					expect(pip.report()).toStrictEqual(validTestCoords);

					pip.place({ x: 5, y: 3, f: "WEST" });
					expect(pip.report()).toStrictEqual(validTestCoords);
				});
				test("f: only 'NORTH' || 'SOUTH' || 'EAST' || 'WEST'", () => {
					// @ts-ignore : ignore setting string to expected value for testing purposes
					pip.place({ x: 5, y: 3, f: "SOMEWHERE" });
					expect(pip.report()).toStrictEqual(validTestCoords);
				});
			});
		});

		describe("move(), facing (f):", () => {
			test("If isPlaced === false, move() does nothing", () => {
				pip = new Pip();
				pip.move();
				expect(pip.report()).toStrictEqual(undefined);
			});
			describe("(f) NORTH:", () => {
				test("Property y of Pip instance is increased by 1", () => {
					pip.place({ x: 0, y: 0, f: "NORTH" });
					pip.move();
					expect(pip.report()).toStrictEqual({ x: 0, y: 1, f: "NORTH" });
				});
				test("Property y is NOT increased if y === 4", () => {
					pip.place({ x: 0, y: 4, f: "NORTH" });
					pip.move();
					expect(pip.report()).toStrictEqual({ x: 0, y: 4, f: "NORTH" });
				});
			});
			describe("(f) SOUTH:", () => {
				test("Property y of Pip instance is decreased by 1", () => {
					pip.place({ x: 0, y: 4, f: "SOUTH" });
					pip.move();
					expect(pip.report()).toStrictEqual({ x: 0, y: 3, f: "SOUTH" });
				});
				test("Property y is NOT decreased if y === 0", () => {
					pip.place({ x: 0, y: 0, f: "SOUTH" });
					pip.move();
					expect(pip.report()).toStrictEqual({ x: 0, y: 0, f: "SOUTH" });
				});
			});
			describe("(f) EAST:", () => {
				test("Property x of Pip instance is increased by 1", () => {
					pip.place({ x: 0, y: 0, f: "EAST" });
					pip.move();
					expect(pip.report()).toStrictEqual({ x: 1, y: 0, f: "EAST" });
				});
				test("Property x is NOT increased if x === 4", () => {
					pip.place({ x: 4, y: 0, f: "EAST" });
					pip.move();
					expect(pip.report()).toStrictEqual({ x: 4, y: 0, f: "EAST" });
				});
			});
			describe("(f) WEST:", () => {
				test("Property x of Pip instance is decreased by 1", () => {
					pip.place({ x: 4, y: 0, f: "WEST" });
					pip.move();
					expect(pip.report()).toStrictEqual({ x: 3, y: 0, f: "WEST" });
				});
				test("Property x is NOT decreased if x === 0", () => {
					pip.place({ x: 0, y: 0, f: "WEST" });
					pip.move();
					expect(pip.report()).toStrictEqual({ x: 0, y: 0, f: "WEST" });
				});
			});
		});

		describe("left()", () => {
			test("If isPlaced === false, left() does nothing", () => {
				pip = new Pip();
				pip.left();
				expect(pip.report()).toStrictEqual(undefined);
			});
			test("cycles through the cardinal directions counter-clockwise", () => {
				pip.place(validTestCoords);
				pip.left();
				expect(pip.report()).toStrictEqual({ ...validTestCoords, f: "WEST" });
				pip.left();
				expect(pip.report()).toStrictEqual({ ...validTestCoords, f: "SOUTH" });
				pip.left();
				expect(pip.report()).toStrictEqual({ ...validTestCoords, f: "EAST" });
				pip.left();
				expect(pip.report()).toStrictEqual({ ...validTestCoords, f: "NORTH" });
			});
		});

		describe("right()", () => {
			test("If isPlaced === false, right() does nothing", () => {
				pip = new Pip();
				pip.right();
				expect(pip.report()).toStrictEqual(undefined);
			});
			test("cycles through the cardinal directions clockwise", () => {
				pip.place(validTestCoords);
				pip.right();
				expect(pip.report()).toStrictEqual({ ...validTestCoords, f: "EAST" });
				pip.right();
				expect(pip.report()).toStrictEqual({ ...validTestCoords, f: "SOUTH" });
				pip.right();
				expect(pip.report()).toStrictEqual({ ...validTestCoords, f: "WEST" });
				pip.right();
				expect(pip.report()).toStrictEqual({ ...validTestCoords, f: "NORTH" });
			});
		});
	});

	describe("Multi Function Tests", () => {
		test("A: PLACE 0,0,NORTH => MOVE => REPORT | Expected Output: 0,1,NORTH", () => {
			const initialPosition = { x: 0, y: 0, f: "NORTH" };
			const expectedReport = { x: 0, y: 1, f: "NORTH" };
			pip = new Pip();
			pip.place(initialPosition);
			pip.move();
			expect(pip.report()).toStrictEqual(expectedReport);
		});
		test("B: PLACE 0,0,NORTH => LEFT => REPORT | Expected Output: 0,0,WEST", () => {
			const initialPosition = { x: 0, y: 0, f: "NORTH" };
			const expectedReport = { x: 0, y: 0, f: "WEST" };
			pip = new Pip();
			pip.place(initialPosition);
			pip.left();
			expect(pip.report()).toStrictEqual(expectedReport);
		});
		test("C: PLACE 1,2,EAST => MOVE => MOVE => LEFT => MOVE => REPORT | Expected Output: 3,3,NORTH", () => {
			const initialPosition = { x: 1, y: 2, f: "EAST" };
			const expectedReport = { x: 3, y: 3, f: "NORTH" };
			pip = new Pip();
			pip.place(initialPosition);
			pip.move();
			pip.move();
			pip.left();
			pip.move();
			expect(pip.report()).toStrictEqual(expectedReport);
		});
	});
});
