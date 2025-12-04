import { expect } from "chai";
import { GenericContainer } from "testcontainers"
import { sum, divide } from "../../src/Example-coverage/mathUtils.js";

let container;

before(async function () {
    this.timeout(30000); // Increase timeout for container startup

    container = await new GenericContainer("alpine")
        .withCommand(["sh", "-c", "sleep 60"])
        .start();

    console.log(`Container started with ID: ${container.getId()}`);
})

after(async function () {
    if (container) {
        await container.stop();
        console.log(`Container with ID: ${container.getId()} stopped`);
    }
})

describe("sum", () => {
    it("should return the sum of two numbers", () => {
        const result = sum(2, 3);
        expect(result).to.equal(5);
    });

    it("should throw an error if arguments are not numbers", () => {
        expect(() => sum(2, "3")).to.throw('Invalid arguments: Both must be numbers');
        expect(() => sum("2", 3)).to.throw('Invalid arguments: Both must be numbers');
        expect(() => sum("2", "3")).to.throw('Invalid arguments: Both must be numbers');
    });

    it("should handle negative numbers", () => {
        const result = sum(-2, -3);
        expect(result).to.equal(-5);
    });

    it("should handle zero", () => {
        const result = sum(0, 5);
        expect(result).to.equal(5);
    });
});

describe("divide", () => {
    it("should return the division of two numbers", () => {
        const result = divide(6, 3);
        expect(result).to.equal(2);
    });

    it("should throw an error when dividing by zero", () => {
        expect(() => divide(6, 0)).to.throw('Division by zero is not allowed');
    });
});