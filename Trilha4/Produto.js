var ItemLoja = /** @class */ (function () {
    function ItemLoja(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    return ItemLoja;
}());
var item = new ItemLoja(1, "Monitor", 699.99);
console.log(item);
