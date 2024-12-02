class EmailNotification {
    sendNotification(email: string, username: string) {
      console.log(`Enviando notificação para ${email}...`);
      console.log(`Bem-vindo, ${username}! Sua conta foi criada.`);
    }
  }
  
  class UserManager {
    private users: { [key: string]: string } = {};
    private emailNotification: EmailNotification;
  
    constructor(emailNotification: EmailNotification) {
      this.emailNotification = emailNotification;
    }
  
    createUser(username: string, email: string) {
      this.users[username] = email;
      console.log(`Usuário ${username} criado com o email ${email}`);
  

      this.emailNotification.sendNotification(email, username);
    }
  }
  
  const emailNotification = new EmailNotification();
  const userManager = new UserManager(emailNotification);
  
  userManager.createUser("Mari", "Mari@example.com");
  