import {getYoungerDate, INVALID_ARGUMENTS} from './part-03';

describe('checks task №08 part №03', () => {
    it("checks with correct arguments", () => {
        [
            ['25.10.2000', '25.10.2014', '25.10.2014'],
            ['25.10.2015', '25.10.2013', '25.10.2015'],
            ['25.10.2015', '25.10.2012', '25.10.2015'],
            ['01.12.2000', '01.12.2000', '01.12.2000'],
            ['01.12.2000', '02.12.2000', '02.12.2000'],

        ].forEach(([firstUserBirthDay, secondUserBirthDay, expectedResult]) => {
            expect(getYoungerDate(firstUserBirthDay, secondUserBirthDay)).toBe(expectedResult);
        });
    });

    it("checks invalid arguments", () => {
        [
            ['5.10.2000', '25.10.2014'],
            ['25.10.2000', ''],
            ['25.10.2000', '25.10.20'],
            ['25.10.2000', '25.1.2000'],
            ['25.1.2000', '25.1.2000'],
            ['1.1.2000', '25.1.2000'],
            ['sometext', '25.01.2000'],
        ].forEach(([firstUserBirthDay, secondUserBirthDay]) => {
            expect(() => {
                getYoungerDate(firstUserBirthDay, secondUserBirthDay);
            }).toThrow(INVALID_ARGUMENTS);
        });
    });
});
