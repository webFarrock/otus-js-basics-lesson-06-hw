import { outputMaxElem } from "./part-03";

describe("checks task №05 part №03", () => {
  it("checks max elem finded", () => {
    [
      [[], undefined],
      [[0, 0, 0], 0],
      [[-2, -1, 0, 1, 2], 2],
      [[15, -150, 22, 0, 41], 41],
    ].forEach(([arr, expectedResult]) => {
      const result = outputMaxElem(arr);
      expect(result).toEqual(expectedResult);
    });
  });
});
