import { outputNumbersSumFrom50To100 } from "./part-01";

describe("checks task №03 part №01", () => {
  const { log } = console;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = log;
  });

  it("checks numbers sum", () => {
    outputNumbersSumFrom50To100();
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});
