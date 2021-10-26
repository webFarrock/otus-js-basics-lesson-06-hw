const outputMinutesFromDayBeginning = require('./part-02');

describe('checks task №08 part №02', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = log;
    });

    /**
     * тест несколько туповат - по сути таже программа что и тестируем,
     * плюс может быть расхождение на момент запуска - тест проходит "на удачу"
     *
     * как еще это можно протестить - не придумал
     */

    it("checks minutes from beginning of the day", () => {
        const now = new Date();
        const expectedResult = now.getHours() * 60 + now.getMinutes();
        outputMinutesFromDayBeginning();
        expect(console.log).toHaveBeenCalledWith(expectedResult);
    });
});
