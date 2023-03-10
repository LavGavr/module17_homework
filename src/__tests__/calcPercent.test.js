import { calcPercent } from "../calcPercent";

describe("Tests for calcPercent function", () => {
  it("Calc number at percent", () => {
    expect(calcPercent(125)).toBe(28.5);
    expect(calcPercent(270)).toBe(61.5);
  });
});
