abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
  }
  
  class Project extends TaskManager {
    private tasks: string[] = [];
  
    addTask(task: string): void {
      if (this.tasks.indexOf(task) === -1) {
        this.tasks.push(task);
      }
    }
  
    listTasks(): string[] {
      return this.tasks;
    }
  }
  
  class DailyTasks extends TaskManager {
    private tasks: string[] = [];
  
    addTask(task: string): void {
      if (this.tasks.indexOf(task) === -1) {
        this.tasks.push(task);
      }
    }
  
    listTasks(): string[] {
      return this.tasks;
    }
  }
  
  const project = new Project();
  project.addTask("Desenhar o site");
  project.addTask("Desenvolver a homepage");
  project.addTask("Desenhar o site");
  console.log(project.listTasks());
  
  const dailyTasks = new DailyTasks();
  dailyTasks.addTask("Exercício matinal");
  dailyTasks.addTask("Verificar e-mails");
  dailyTasks.addTask("Exercício matinal");
  console.log(dailyTasks.listTasks());
  