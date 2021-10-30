import { symbolsNumOutput } from './part-02';

describe('checks task №01 part №02', () => {
  const { log } = console;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = log;
  });

  it('checks two stings sum length outputs into console', () => {
    [
      ['', '', 0],
      ['a', '', 1],
      ['', 'a', 1],
      ['a', 'a', 2],
      ['querty', 'abcd', 10],

    ].forEach(([a, b, summaryLength]) => {
      symbolsNumOutput(a, b);
      expect(console.log).toHaveBeenCalledWith(summaryLength);
    });
  });
});
