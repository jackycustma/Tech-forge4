var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    Temperatura.prototype.converterParaFahrenheit = function () {
        return this.valor * 1.8 + 32;
    };
    Temperatura.prototype.converterParaKelvin = function () {
        return this.valor + 273.15;
    };
    Temperatura.prototype.exibirConversoes = function () {
        console.log("Temperatura em Celsius: ".concat(this.valor.toFixed(2), "\u00B0C"));
        console.log("Temperatura em Fahrenheit: ".concat(this.converterParaFahrenheit().toFixed(2), "\u00B0F"));
        console.log("Temperatura em Kelvin: ".concat(this.converterParaKelvin().toFixed(2), "K"));
    };
    return Temperatura;
}());
var temperatura = new Temperatura(25);
temperatura.exibirConversoes();
