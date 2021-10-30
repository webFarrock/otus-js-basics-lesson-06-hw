import { arrayMultByTwo } from "./part-02";

describe("checks task №05 part №02", () => {
  let input = [];
  let expectedResult = [];

  beforeEach(() => {
    input = [-77, -1, 0, 1, 5, 101];
  });

  afterEach(() => {
    expectedResult = [-154, -2, 0, 2, 10, 202];
  });

  it("checks array returned", () => {
    const result = arrayMultByTwo(input);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it("checks returned array has same length as input", () => {
    const result = arrayMultByTwo(input);

    expect(result).toHaveLength(expectedResult.length);
  });

  it("checks returned array elements multiplied by 2", () => {
    const result = arrayMultByTwo(input);

    for (let i = 0; i < expectedResult.length; i += 1) {
      expect(result[i]).toEqual(expectedResult[i]);
    }
  });
});
