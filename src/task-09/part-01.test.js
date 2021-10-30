import { isTriangleRight } from './part-01';

describe('checks task №09 part №01', () => {
  it('checks is triangle right', () => {
    [
      [3, 4, 5, true],
      [5, 4, 3, true],
      [0, 10, 20, false],
      [-1, 0, 70, false],
    ].forEach(([a, b, c, expectedResult]) => {
      expect(isTriangleRight(a, b, c)).toBe(expectedResult);
    });
  });
});
