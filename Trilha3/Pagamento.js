
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
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao, nomeTitular, valor) {
        var _this = _super.call(this) || this;
        _this.numeroCartao = numeroCartao;
        _this.nomeTitular = nomeTitular;
        _this.valor = valor;
        return _this;
    }
    PagamentoCartao.prototype.validarCartao = function () {
        return this.numeroCartao.length === 16;
    };
    PagamentoCartao.prototype.processar = function () {
        if (this.validarCartao()) {
            console.log("Pagamento de R$".concat(this.valor.toFixed(2), " processado com o cart\u00E3o de cr\u00E9dito ").concat(this.numeroCartao, "."));
        }
        else {
            console.log("Número do cartão inválido.");
        }
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto(valor) {
        var _this = _super.call(this) || this;
        _this.valor = valor;
        return _this;
    }
    PagamentoBoleto.prototype.gerarCodigoBoleto = function () {
        return "BOL".concat(Math.random().toString().slice(2, 18));
    };
    PagamentoBoleto.prototype.processar = function () {
        var codigoBoleto = this.gerarCodigoBoleto();
        console.log("Pagamento de R$".concat(this.valor.toFixed(2), " gerado com o c\u00F3digo de boleto: ").concat(codigoBoleto));
    };
    return PagamentoBoleto;
}(Pagamento));
function processarPagamento(pagamentos) {
    pagamentos.forEach(function (pagamento) {
        pagamento.processar();
    });
}

var pagamentoCartao = new PagamentoCartao("1234567890123456", "Mariana", 150.75);
var pagamentoBoleto = new PagamentoBoleto(250.50);

processarPagamento([pagamentoCartao, pagamentoBoleto]);
