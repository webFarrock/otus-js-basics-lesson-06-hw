import {arrayElemSum} from './part-01';

describe('checks task №05 part №01', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = log;
    });

    it("checks array elements sum", () => {
        [
            [[], 0],
            [[0], 0],
            [[-1, -2, 0, 1, 77], 75],
            [[10, 20, 30], 60],
        ].forEach(([items, sum]) => {
            arrayElemSum(items);
            expect(console.log).toHaveBeenCalledWith(sum);
        });
    });
});
