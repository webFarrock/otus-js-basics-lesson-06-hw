const numDiff = require('./part-01');

describe('checks task №06 part №01', () => {
    it("checks diff between greater and less number", () => {
        [
            [0, 0, 0],
            [-100, 10, 110],
            [10, -100, 110],
            [-10, -100, 90],
            [10, 100, 90],
            [100, 10, 90],
        ].forEach(([a, b, expectedResult]) => {
            const result = numDiff(a, b);
            expect(result).toBe(expectedResult);
        });
    });
});
