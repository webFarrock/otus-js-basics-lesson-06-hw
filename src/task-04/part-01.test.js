import { makeAdmin, INPUT_ERROR_MESSAGE } from './part-01';

describe('checks task №04 part №01', () => {
  const { log } = console;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = log;
  });

  it('checks correct input', () => {
    const userName = 'John';
    const userRole = 'admin';
    const userAge = 30;

    jest.spyOn(window, 'prompt').mockImplementation(() => userAge);
    const admin = makeAdmin();

    expect(admin).toHaveProperty('name', userName);
    expect(admin).toHaveProperty('age', userAge);
    expect(admin).toHaveProperty('role', userRole);

    const consoleOutput = [
      `name: ${userName}`,
      `age: ${userAge}`,
      `role: ${userRole}`,
    ].join('\n');
    expect(console.log).toHaveBeenCalledWith(consoleOutput);
  });

  it('checks wrong input', () => {
    [
      '',
      'query',
      '-1',
      '0',
    ].forEach((input) => {
      jest.spyOn(window, 'prompt').mockImplementation(() => input);

      expect(() => {
        makeAdmin();
      }).toThrow(INPUT_ERROR_MESSAGE);
    });
  });
});
