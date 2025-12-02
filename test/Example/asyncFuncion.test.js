import { fetchData, fetchDataPromise } from "../../src/Example/asyncFunction.js";
import { expect } from "chai";

describe("fetchData Function with callback", () => {
    it("should fetch data and return 'Data loaded'", (done) => {
        fetchData((result) => {
            expect(result).to.equal("Data loaded");
            done(); // Indica ao Mocha que o teste assíncrono foi concluído. Done utilizado para testes assíncronos com callbacks.
        });
    });
});

describe("fetchDataPromise Function with Promise", () => {
    it("should fetch data and return 'Data loaded'", () => {
        return fetchDataPromise().then((result) => { // Retorna a Promise para que o Mocha saiba quando o teste assíncrono foi concluído.
            expect(result).to.equal("Data loaded");
        });
    });
});

describe("fetchDataPromise Function with async/await", () => {
    it("should fetch data and return 'Data loaded'", async () => {
        const result = await fetchDataPromise(); // Usa async/await para lidar com a Promise de forma mais legível.
        expect(result).to.equal("Data loaded");
    });
});

