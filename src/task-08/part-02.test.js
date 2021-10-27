const outputMinutesFromDayBeginning = require('./part-02');

describe('checks task №08 part №02', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = log;
    });

    it("checks minutes from beginning of the day", () => {

        const hours = 3;
        const minutes = 20;
        const expectedResult = hours * 60 + minutes;

        jest.useFakeTimers().setSystemTime(new Date(2021, 9, 10, hours, minutes, 5).getTime());

        outputMinutesFromDayBeginning();
        expect(console.log).toHaveBeenCalledWith(expectedResult);
    });
});
