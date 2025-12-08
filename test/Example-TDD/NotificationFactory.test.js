import { expect } from "chai";
import sinon from "sinon";
import { NotificationFactory } from "../../src/Example-TDD/NotificationFactory.js";

describe("Notification Factory - TDD", () => {

    it("should create Email Notification", () => {
        const emailNotification = NotificationFactory.create("email");
        expect(emailNotification.send()).to.equal("Email Sent: Hello, User!");
    });

    it("should create SMS Notification", () => {
        const smsNotification = NotificationFactory.create("sms");
        const spy = sinon.spy(smsNotification, "send");

        smsNotification.send();
        expect(spy.calledOnce).to.be.true;
    });
});