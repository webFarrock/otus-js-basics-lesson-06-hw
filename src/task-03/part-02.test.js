import { outputMultTableFor7 } from './part-02';

describe('checks task №03 part №02', () => {
  const { log } = console;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = log;
  });

  it('checks multiplication table for 7', () => {
    const result = [
      '7x1 = 7',
      '7x2 = 14',
      '7x3 = 21',
      '7x4 = 28',
      '7x5 = 35',
      '7x6 = 42',
      '7x7 = 49',
      '7x8 = 56',
      '7x9 = 63',
    ].join('\n');

    outputMultTableFor7();
    expect(console.log).toHaveBeenCalledWith(result);
  });
});
