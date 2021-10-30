import { outputCircleLengthAndArea, INPUT_ERROR_MESSAGE } from './part-02';

describe('checks task №09 part №02', () => {
  const { log } = console;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = log;
  });

  it('checks correct input', () => {
    [
      ['0', 'length: 0, area: 0'],
      ['5', 'length: 31.41592653589793, area: 19.634954084936208'],
      ['10', 'length: 62.83185307179586, area: 78.53981633974483'],
      ['17', 'length: 106.81415022205297, area: 226.98006922186255'],
      ['24', 'length: 150.79644737231007, area: 452.3893421169302'],
    ].forEach(([input, result]) => {
      jest.spyOn(window, 'prompt').mockImplementation(() => input);
      outputCircleLengthAndArea();
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });

  it('checks wrong input', () => {
    [
      '',
      '27 11',
      'one',
      '#$^',
      '-1',
      '-78',
    ].forEach((input) => {
      jest.spyOn(window, 'prompt').mockImplementation(() => input);

      expect(() => {
        outputCircleLengthAndArea();
      }).toThrow(INPUT_ERROR_MESSAGE);
    });
  });
});
