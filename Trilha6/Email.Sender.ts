class ContactValidator {
   
    validateEmail(email: string): boolean {
     
      return email.indexOf('@') !== -1 && email.indexOf('.', email.indexOf('@')) > -1;
    }
  }
  
  class EmailSender {
    private contactValidator: ContactValidator;
  
    constructor(contactValidator: ContactValidator) {
      this.contactValidator = contactValidator;
    }
  
    sendEmail(contact: string, message: string): void {
      if (!this.contactValidator.validateEmail(contact)) {
        console.log(`Erro: O email ${contact} é inválido.`);
        return;
      }
      
      console.log(`Enviando email para ${contact}...`);
      console.log(`Mensagem: ${message}`);
    }
  }
  
  const contactValidator = new ContactValidator();
  const emailSender = new EmailSender(contactValidator);
  
  emailSender.sendEmail("Mari@email.com", "Bem-vindo à nossa plataforma!");
  emailSender.sendEmail("Jack-email.com", "Bem-vindo à nossa plataforma!");
  