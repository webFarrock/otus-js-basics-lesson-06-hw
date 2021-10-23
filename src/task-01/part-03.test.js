const {digitsSumOutput, INPUT_ERROR_MESSAGE} = require('./part-03');

describe('checks task №01 part №03', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = log;
    });

    it("checks correct input", () => {
        [
            ["123", 6],
            ["321", 6],
            ["789", 24],
            ["111", 3],
            ["-111", 3],
        ].forEach(([input, result]) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);
            digitsSumOutput()
            expect(console.log).toHaveBeenCalledWith(result);
        });
    });

    it("checks wrong input", () => {
        [
            "",
            "11",
            "1234",
        ].forEach((input) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);

            expect(() => {
                digitsSumOutput()
            }).toThrow(INPUT_ERROR_MESSAGE);
        });
    });
});
