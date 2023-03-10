import { cyclesTypeCheck } from "../cyclesTypeCheck";

describe("Tests for cyclesTypeCheck function", () => {
  const arrData = [11, 2, null, 0, 0, 3, 4, 50, 76, 88, 13, "JavaScript"];
  const arrData2 = [11, 2, null, 0, 0, 0, 0, 0, 76, 88, 13, "PHP"];

  it("Should by say it what type of array items", () => {
    expect(cyclesTypeCheck(arrData2)).toBe(5);
  });
});
