

class Animal {
    private energia: number;

    constructor() {
        this.energia = 0;
    }

    comer(): void {
        console.log("O animal está comendo...");
        this.ajustarEnergia(10);
    }

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }

    protected ajustarEnergia(valor: number): void {
        this.energia += valor;
    }
}

class Leao extends Animal {

    cacar(): void {
        console.log("O leão está caçando...");
        this.ajustarEnergia(-15); 
        this.ajustarEnergia(20); 
    }

    comer(): void {
        console.log("O leão vai caçar...");
        this.cacar();
    }
}

class Passaro extends Animal {

    comer(): void {
        console.log("O pássaro está se alimentando...");
        this.ajustarEnergia(15);
    }
}

function alimentar(animais: Animal[]): void {
    animais.forEach(animal => {
        animal.comer();
        animal.statusEnergia();
    });
}


const leao = new Leao();
const passaro = new Passaro();


alimentar([leao, passaro]);
