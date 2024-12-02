

abstract class Funcionario {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularBonus(): number;

    getSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }
}

class Gerente extends Funcionario {

    calcularBonus(): number {
        return this.salario * 0.1;
    }
}

class Operario extends Funcionario {

    calcularBonus(): number {
        return this.salario * 0.05;
    }
}


function salarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        console.log(`Salário com bônus de ${funcionario['nome']}: ${funcionario.getSalarioComBonus()}`);
    });
}


const gerente = new Gerente("Daiane", 4000);
const operario = new Operario("Ana", 2000);


salarioComBonus([gerente, operario]);


