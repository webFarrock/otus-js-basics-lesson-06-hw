import {isDate} from './part-01';

describe('checks task №10 part №01', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = log;
    });

    it("checks user input on date", () => {
        [
            ['10.10.2021', true],
            ['07.11.2000', true],
            ['ff.cc.dddd', false],
            ['10-10-2021', false],

        ].forEach(([input, result]) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);

            expect(isDate()).toBe(result);
        });
    });
});
