class EmailNotification {
    send() {
        return "Email Sent: Hello, User!";
    }
}

class SMSNotification {
    send() {
        return "SMS Sent: Hello, User!";
    }
}

export const NotificationFactory = {
    create(type, message = "Hello, User!") {
        const notifiers = {
            email: () => new EmailNotification(message),
            sms: () => new SMSNotification(message)
        };
        if (!notifiers[type]) throw new Error("Invalid notification type");

        return notifiers[type]();
    }
};