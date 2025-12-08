import { expect } from "chai";
import sinon from "sinon";
import { OrderBuilder } from "../../src/Example-TDD/OrderBuilder.js";
import { StockService } from "../../src/Example-TDD/StockService.js";

describe("OrderBuilder - TDD with Stubs", () => {
    let stockServiceStub;

    beforeEach(() => {
        stockServiceStub = sinon.stub(StockService, "checkStock");
    });

    afterEach(() => {
        sinon.restore();
    });

    it("should fail to build order if stock is insufficient", async () => {
        stockServiceStub.resolves(false); // Simulate insufficient stock

        const builder = new OrderBuilder()
            .addProduct("Iphone", 1)
            .setCustomer("customer@example.com");

        try {
            await builder.build();
            throw new Error("Expected error was not thrown");
        } catch (err) {
            expect(err.message).to.equal("Insufficient stock for product: Iphone");
        }
    });

    it("should builde order successfully if stock is available", async () => {
        stockServiceStub.resolves(true); // Simulate sufficient stock

        const order = await new OrderBuilder()
            .addProduct("Iphone", 1)
            .addProduct("Case", 2)
            .setCustomer("customer.example.com")
            .build();

        expect(order).to.deep.equal({
            customer: "customer.example.com",
            products: [
                { name: "Iphone", quantity: 1 },
                { name: "Case", quantity: 2 }
            ],
            status: "created",
        });
    });
})