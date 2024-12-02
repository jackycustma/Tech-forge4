
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.getSalarioComBonus = function () {
        return this.salario + this.calcularBonus();
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.calcularBonus = function () {
        return this.salario * 0.1;
    };
    return Gerente;
}(Funcionario));
var Operario = /** @class */ (function (_super) {
    __extends(Operario, _super);
    function Operario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Operario.prototype.calcularBonus = function () {
        return this.salario * 0.05;
    };
    return Operario;
}(Funcionario));
function salarioComBonus(funcionarios) {
    funcionarios.forEach(function (funcionario) {
        console.log("Sal\u00E1rio com b\u00F4nus de ".concat(funcionario['nome'], ": ").concat(funcionario.getSalarioComBonus()));
    });
}

var gerente = new Gerente("Daiane", 4000);
var operario = new Operario("Ana", 2000);

salarioComBonus([gerente, operario]);
