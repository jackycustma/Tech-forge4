var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.sendNotification = function (email, username) {
        console.log("Enviando notifica\u00E7\u00E3o para ".concat(email, "..."));
        console.log("Bem-vindo, ".concat(username, "! Sua conta foi criada."));
    };
    return EmailNotification;
}());
var UserManager = /** @class */ (function () {
    function UserManager(emailNotification) {
        this.users = {};
        this.emailNotification = emailNotification;
    }
    UserManager.prototype.createUser = function (username, email) {
        this.users[username] = email;
        console.log("Usu\u00E1rio ".concat(username, " criado com o email ").concat(email));
        this.emailNotification.sendNotification(email, username);
    };
    return UserManager;
}());
var emailNotification = new EmailNotification();
var userManager = new UserManager(emailNotification);
userManager.createUser("Mari", "Mari@example.com");
