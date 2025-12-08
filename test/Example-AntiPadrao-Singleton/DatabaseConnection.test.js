import { DatabaseConnection } from '../../src/Example-AntiPadrao-Singleton/DatabaseConnection.js';
import { expect } from 'chai';
import sinon from 'sinon';

describe('DatabaseConnection Singleton', () => {
    afterEach(() => {
        DatabaseConnection.clearInstance();
    });

    it('must mock connection', async () => {
        const mockConnection = {
            connect: sinon.stub().resolves(true)
        }

        DatabaseConnection.instance = mockConnection;

        const connection = DatabaseConnection.getInstance();
        await connection.connect();

        expect(connection.connect.calledOnce).to.be.true;
    });

    it("must block direct instances", () => {
        const config = { url: 'localhost' }
        const instance1 = new DatabaseConnection(config);
        const instance2 = new DatabaseConnection(config);

        expect(instance1).to.equal(instance2);
    });

    it("must exchange instance in test", () => {
        const mockInstance = { isConnected: true };
        DatabaseConnection.instance = mockInstance;

        expect(DatabaseConnection.getInstance()).to.equal(mockInstance);
    });
});

