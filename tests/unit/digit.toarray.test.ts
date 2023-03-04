import digitToValueArray from "../../src/digit.toarray";

describe('digitToValueArray', () => {
    test('should return an array of value of each digit of the number', () => {
        expect(digitToValueArray(5623847)).toEqual([5000000, 600000, 20000, 3000, 800, 40, 7]);
        expect(digitToValueArray(123)).toEqual([100, 20, 3]);
        expect(digitToValueArray(1000)).toEqual([1000, 0, 0, 0]);
        expect(digitToValueArray(7)).toEqual([7]);
    });
});
