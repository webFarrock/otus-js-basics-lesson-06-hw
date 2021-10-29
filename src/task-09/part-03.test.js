import {quadraticEquation, INPUT_ERROR_MESSAGE, NO_SOLUTION} from './part-03';

describe('checks task №09 part №03', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = log;
    });

    it("checks correct input", () => {
        [
            ['1 1 1', NO_SOLUTION],
            ['2 1 1', NO_SOLUTION],
            ['-1 7 8', 'discriminant: 81, quadraticRoots: -1, 8'],
            ['4 4 1', 'discriminant: 0, quadraticRoots: -0.5'],
            ['-1 2 8', 'discriminant: 36, quadraticRoots: -2, 4'],

        ].forEach(([input, result]) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);
            quadraticEquation()
            expect(console.log).toHaveBeenCalledWith(result);
        });
    });

    it("checks wrong input", () => {
        [
            "",
            "27 11",
            "one",
            "#$^",
            "-1",
            "-78",
        ].forEach((input) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);

            expect(() => {
                quadraticEquation()
            }).toThrow(INPUT_ERROR_MESSAGE);
        });
    });
});
