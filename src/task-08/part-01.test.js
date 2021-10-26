const {outputWeekDayName, INPUT_ERROR_MESSAGE} = require('./part-01');

describe('checks task №08 part №01', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = log;
    });

    it("checks correct input", () => {
        [
            ['25.10.2021', 'понедельник'],
            ['26.10.2021', 'вторник'],
            ['27.10.2021', 'среда'],
            ['28.10.2021', 'четверг'],
            ['29.10.2021', 'пятница'],
            ['30.10.2021', 'суббота'],
            ['31.10.2021', 'воскресенье'],
        ].forEach(([input, result]) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);
            outputWeekDayName()
            expect(console.log).toHaveBeenCalledWith(result);
        });
    });

    it("checks wrong input", () => {
        [
            '255.10.2021',
            '1.10.2021',
            '1.1.2021',
            '1.1.1',
            'some',
        ].forEach((input) => {
            jest.spyOn(window, "prompt").mockImplementation(() => input);

            expect(() => {
                outputWeekDayName();
            }).toThrow(INPUT_ERROR_MESSAGE);
        });
    });
});
