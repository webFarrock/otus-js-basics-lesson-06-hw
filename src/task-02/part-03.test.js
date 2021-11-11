import { isCircleInSquare } from "./part-03";

describe("checks task №02 part №03", () => {
  it("checks is circle in square", () => {
    [
      [100, 10, false],
      [10, 100, true],
      [0, 0, false],
      [0, 10, true],
      [10, 0, false],
    ].forEach(([circle, square, result]) => {
      expect(isCircleInSquare(circle, square)).toBe(result);
    });
  });
});
