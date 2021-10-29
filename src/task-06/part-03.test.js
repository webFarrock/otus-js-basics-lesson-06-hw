import {pow} from './part-03';

describe('checks task №06 part №03', () => {
    it("checks pow", () => {
        [
            [1, 10, 1],
            [100, 1, 100],
            [4, 2, 16],
            [4, 4, 256],
            [4, -4, 0.00390625],
        ].forEach(([a, x, expectedResult]) => {
            const result = pow(a, x);
            expect(result).toBe(expectedResult);
        });
    });
});
