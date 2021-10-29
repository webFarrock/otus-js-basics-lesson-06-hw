import {outputMonthName, INPUT_ERROR_MESSAGE} from './part-02';

describe('checks task №02 part №02', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = log;
    });

    it("checks correct input", () => {
        [
            ['1', 'январь'],
            ['2', 'февраль'],
            ['3', 'март'],
            ['4', 'апрель'],
            ['5', 'май'],
            ['6', 'июнь'],
            ['7', 'июль'],
            ['8', 'август'],
            ['9', 'сентябрь'],
            ['10', 'октябрь'],
            ['11', 'ноябрь'],
            ['12', 'декабрь'],
        ].forEach(([input, result]) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);
            outputMonthName()
            expect(console.log).toHaveBeenCalledWith(result);
        });
    });

    it("checks wrong input", () => {
        [
            "",
            "query",
            "-1",
            "0",
            "1234",
        ].forEach((input) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);

            expect(() => {
                outputMonthName()
            }).toThrow(INPUT_ERROR_MESSAGE);
        });
    });
});
