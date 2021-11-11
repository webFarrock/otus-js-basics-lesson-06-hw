import { sumOutput, multiplyOutput } from "./part-01";

describe("checks task №01 part №01", () => {
  const { log } = console;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = log;
  });

  it("checks two numbers sum outputs into console", () => {
    [
      [1, 2, 3],
      [0, 0, 0],
      [-1, 2, 1],
      [-1, -2, -3],
      [1, 2, 3],
    ].forEach(([a, b, sum]) => {
      sumOutput(a, b);
      expect(console.log).toHaveBeenCalledWith(sum);
    });
  });

  it("checks two numbers multiply outputs into console", () => {
    [
      [1, 2, 2],
      [0, 0, 0],
      [-1, 2, -2],
      [-1, -2, 2],
      [2, 2, 4],
    ].forEach(([a, b, multiply]) => {
      multiplyOutput(a, b);
      expect(console.log).toHaveBeenCalledWith(multiply);
    });
  });
});
