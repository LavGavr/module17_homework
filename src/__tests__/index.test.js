import { multiply } from "../index.js";

// test("adds 1 * 0 to equal 1", () => {
//   const result = multiply(1, 0);
//   expect(result).toBe(0);
// });

//Collection test
// x - mean skipped the suite or text
xdescribe("Test multiply", () => {
  it("adds 1 * 0 to equal 0", () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  }),
    it("adds 1 * 1 to equal 1", () => {
      const result = multiply(1, 1);
      expect(result).toBe(1);
    });
});

xdescribe("Test multiply 2", () => {
  it("adds 1 * 0 to equal 0", () => {
    const result = multiply(1, 0);
    expect(result).toBe(0);
  }),
    xit("adds 1 * 1 to equal 1", () => {
      const result = multiply(1, 1);
      expect(result).toBe(1);
    });
});
