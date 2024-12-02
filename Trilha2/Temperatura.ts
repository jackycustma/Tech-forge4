
class Temperatura {
    private valor: number;
  
    constructor(valor: number) {
      this.valor = valor;
    }
  

    converterParaFahrenheit(): number {
      return this.valor * 1.8 + 32;
    }
  
    converterParaKelvin(): number {
      return this.valor + 273.15;
    }
  

    exibirConversoes(): void {
      console.log(`Temperatura em Celsius: ${this.valor.toFixed(2)}°C`);
      console.log(`Temperatura em Fahrenheit: ${this.converterParaFahrenheit().toFixed(2)}°F`);
      console.log(`Temperatura em Kelvin: ${this.converterParaKelvin().toFixed(2)}K`);
    }
  }

const temperatura = new Temperatura(25);

temperatura.exibirConversoes();
  