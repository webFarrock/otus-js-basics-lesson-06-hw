import {isPhone} from './part-03';

describe('checks task №10 part №03', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = log;
    });

    it("checks user input on email", () => {
        [
            ['+79999999999', true],
            ['+7 111 111-11-11', true],
            ['+7 999 999-99-99', true],
            ['+7 111 11-111-11', false],
            ['9999999999', false],
            ['9.99,9999999', false],

        ].forEach(([input, result]) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);

            expect(isPhone()).toBe(result);
        });
    });
});
