// Mocha - framework de teste.

const { expect } = require("chai");

describe("Calculator", () => { // suíte de testes
    it("should add two numbers correctly", () => { }); // caso de teste

    it("should subtract two numbers correctly", () => { }); // outro caso de teste

    it("should multiply two numbers correctly", () => { }); // outro caso de teste

    it("should divide two numbers correctly", () => { }); // outro caso de teste
})

// Chai - biblioteca de asserções
assert.equal(1 + 1, 2); // estilo assert

expect(1 + 1).to.equal(2); // estilo expect

(1 + 1).should.equal(2); // estilo should


// Sinon - espiões, stubs e mocks para JavaScript
const spy = sinon.spy(); // cria um espião
spy(); // chama o espião
expect(spy.calledOnce).to.be.true; // verifica se foi chamado

const stub = sinon.stub().returns(42); // cria um stub
expect(stub()).to.equal(42); // chama o stub e verifica o valor retornado

const mock = sinon.mock(object); // cria um mock para o objeto
mock.expects("method").once().withArgs(1); // cria um mock
object.method(1); // chama o método
mock.verify(); // verifica as expectativas do mock