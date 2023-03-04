import flattenArray from "../../src/flatten.array";

describe('flattenArray', () => {
    test('should flatten a nested array', () => {
        const input = [1, 2, [3, 4], 5, [6, 7], 8];
        const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8];
        const output = flattenArray(input);
        expect(output).toEqual(expectedOutput);
    });

    test('should return an empty array for an empty input', () => {
        const input = [];
        const expectedOutput = [];
        const output = flattenArray(input);
        expect(output).toEqual(expectedOutput);
    });

    test('should return the same array for a flat input', () => {
        const input = [1, 2, 3, 4];
        const expectedOutput = [1, 2, 3, 4];
        const output = flattenArray(input);
        expect(output).toEqual(expectedOutput);
    });

    test('should handle a deeply nested array', () => {
        const input = [1, [2, [3, [4, [5]]]]];
        const expectedOutput = [1, 2, 3, 4, 5];
        const output = flattenArray(input);
        expect(output).toEqual(expectedOutput);
    });
});
