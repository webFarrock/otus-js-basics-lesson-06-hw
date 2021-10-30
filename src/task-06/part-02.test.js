import { isStringWithOneWord } from './part-02';

describe('checks task №06 part №02', () => {
  it('checks is string contain one word', () => {
    [
      ['', false],
      ['   some  qwerty ', false],
      ['some text', false],
      ['   some_text$   ', true],
      ['text', true],
      ['check#$%135_""', true],
    ].forEach(([str, expectedResult]) => {
      const result = isStringWithOneWord(str);
      expect(result).toBe(expectedResult);
    });
  });
});
