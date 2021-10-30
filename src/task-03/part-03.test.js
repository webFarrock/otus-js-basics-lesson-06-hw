import { outputAverage, INPUT_ERROR_MESSAGE } from "./part-03";

describe("checks task №03 part №03", () => {
  const { log } = console;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = log;
  });

  it("checks correct input", () => {
    [
      ["1", 1],
      ["5", 3],
      ["10", 5],
      ["15", 8],
    ].forEach(([input, result]) => {
      jest.spyOn(window, "prompt").mockImplementation(() => input);
      outputAverage();
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });

  it("checks wrong input", () => {
    ["", "query", "-1", "0"].forEach((input) => {
      jest.spyOn(window, "prompt").mockImplementation(() => input);

      expect(() => {
        outputAverage();
      }).toThrow(INPUT_ERROR_MESSAGE);
    });
  });
});
