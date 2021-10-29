import {isEmail} from './part-02';

describe('checks task №10 part №02', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = log;
    });

    it("checks user input on email", () => {
        [
            ['some@mail.ru', true],
            ['facdfee78787@mail.ru', true],
            ['some@mail', false],
            ['!@@#%^^', false],

        ].forEach(([input, result]) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);

            expect(isEmail()).toBe(result);
        });
    });
});
