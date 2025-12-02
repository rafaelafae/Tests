import { sum } from '../../src/Example/calculator.js';
import { expect } from 'chai';

describe("Sum Function", () => {
    it("should return the sum of two numbers", () => {
        const result = sum(2, 3);
        expect(result).to.equal(5);
    });

    it("should return a negative number when the sum is negative", () => {
        const result = sum(-2, -3);
        expect(result).to.equal(-5);
    });
});
