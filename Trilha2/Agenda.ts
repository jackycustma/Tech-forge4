
class Agenda {
    private compromissos: string[]; 

    constructor() {
      this.compromissos = []; 
    }
  

    adicionarCompromisso(compromisso: string): void {
      this.compromissos.push(compromisso);
      console.log(`Compromisso "${compromisso}" adicionado à agenda.`);
    }
  
    
    listarCompromissos(): void {
      if (this.compromissos.length === 0) {
        console.log("A agenda está vazia.");
      } else {
        console.log("Compromissos na agenda:");
        this.compromissos.forEach((compromisso, index) => {
          console.log(`${index + 1}. ${compromisso}`);
        });
      }
    }
  }
  

const minhaAgenda = new Agenda();

minhaAgenda.adicionarCompromisso("Aulas às 19h30"); 
minhaAgenda.adicionarCompromisso("Correr às 18h");

minhaAgenda.listarCompromissos();
  