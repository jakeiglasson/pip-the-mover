import Beefy from "../Beefy";
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
		describe("report()", () => {
			test("returns undefined when isPlaced === false", () => {
				expect(beefy.report()).toStrictEqual(undefined);
			});
			test("returns the values x,y,f of instance Beefy as {x,y,f}. Only if isPlaced === true", () => {
				beefy.place({ x: 0, y: 4, f: "WEST" });
				expect(beefy.report()).toStrictEqual({ x: 0, y: 4, f: "WEST" });
			});
		});

		describe("place()", () => {
			test("Modifies the properties x,y,f,isPlaced of instance Beefy if given object {x,y,f}", () => {
				beefy = new Beefy(); //new instance sets isPlaced to false, should be true when place() is called
				beefy.place({ x: 0, y: 4, f: "NORTH" });
				expect(beefy.report()).toStrictEqual({ x: 0, y: 4, f: "NORTH" });
				expect(beefy.isPlaced).toStrictEqual(true);
			});
		});
	});
});
