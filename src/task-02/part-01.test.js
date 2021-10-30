import { outputMaxNum } from './part-01';

describe('checks task №02 part №01', () => {
  const { log } = console;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = log;
  });

  it('checks max number', () => {
    [
      [1, 2, 2],
      [-1, -2, -1],
      [0, 100, 100],
      [100, 0, 100],
      [-1, -1, -1],
      [-100, 100, 100],
    ].forEach(([a, b, max]) => {
      outputMaxNum(a, b);
      expect(console.log).toHaveBeenCalledWith(max);
    });
  });
});
