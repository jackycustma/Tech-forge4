var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.calcularValorTotalEstoque = function () {
        return this.preco * this.quantidade;
    };
    Produto.prototype.exibirInformacoes = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("Pre\u00E7o: R$".concat(this.preco.toFixed(2)));
        console.log("Quantidade: ".concat(this.quantidade));
        console.log("Valor total em estoque: R$".concat(this.calcularValorTotalEstoque().toFixed(2)));
    };
    return Produto;
}());
var produto = new Produto("Caderno", 15.5, 120);
produto.exibirInformacoes();
