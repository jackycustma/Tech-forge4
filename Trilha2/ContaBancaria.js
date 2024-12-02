var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser maior que zero.");
            return;
        }
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor.toFixed(2), " realizado com sucesso!"));
        this.exibirSaldo();
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser maior que zero.");
            return;
        }
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
            return;
        }
        this.saldo -= valor;
        console.log("Saque de R$".concat(valor.toFixed(2), " realizado com sucesso!"));
        this.exibirSaldo();
    };
    ContaBancaria.prototype.exibirSaldo = function () {
        console.log("Saldo atual de ".concat(this.titular, ": R$").concat(this.saldo.toFixed(2)));
    };
    return ContaBancaria;
}());

var pessoaTitular = "Mariana";
var pessoaSaldo = 100;

var conta = new ContaBancaria(pessoaTitular, pessoaSaldo);

conta.depositar(50);
conta.sacar(10);
