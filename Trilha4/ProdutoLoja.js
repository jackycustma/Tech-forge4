var Loja = /** @class */ (function () {
    function Loja(produtos) {
        this.produtos = produtos;
    }
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        for (var i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].codigo === codigo) {
                return this.produtos[i];
            }
        }
        return undefined;
    };
    return Loja;
}());
var produto1 = { codigo: 101, nome: "Cadeira Gamer" };
var produto2 = { codigo: 102, nome: "Teclado Mecânico" };
var produto3 = { codigo: 103, nome: "Mouse Óptico" };
var loja = new Loja([produto1, produto2, produto3]);
console.log("Produto com código 102:", loja.buscarProdutoPorCodigo(102));
console.log("Produto com código 104:", loja.buscarProdutoPorCodigo(104));
