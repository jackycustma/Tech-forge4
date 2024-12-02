var ContactValidator = /** @class */ (function () {
    function ContactValidator() {
    }
    ContactValidator.prototype.validateEmail = function (email) {
        return email.indexOf('@') !== -1 && email.indexOf('.', email.indexOf('@')) > -1;
    };
    return ContactValidator;
}());
var EmailSender = /** @class */ (function () {
    function EmailSender(contactValidator) {
        this.contactValidator = contactValidator;
    }
    EmailSender.prototype.sendEmail = function (contact, message) {
        if (!this.contactValidator.validateEmail(contact)) {
            console.log("Erro: O email ".concat(contact, " \u00E9 inv\u00E1lido."));
            return;
        }
        console.log("Enviando email para ".concat(contact, "..."));
        console.log("Mensagem: ".concat(message));
    };
    return EmailSender;
}());
var contactValidator = new ContactValidator();
var emailSender = new EmailSender(contactValidator);
emailSender.sendEmail("Mari@email.com", "Bem-vindo à nossa plataforma!");
emailSender.sendEmail("Jack-email.com", "Bem-vindo à nossa plataforma!");
