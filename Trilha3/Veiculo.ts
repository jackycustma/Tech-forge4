

class Veiculo {
    public mover(): void {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    override mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    override mover(): void {
        console.log("A bicicleta está pedalando");
    }
}


const carro = new Carro();
const bicicleta = new Bicicleta();


carro.mover();
bicicleta.mover();
