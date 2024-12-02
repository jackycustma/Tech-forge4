interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[];

    constructor(produtos: ProdutoLoja[]) {
        this.produtos = produtos;
    }


    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].codigo === codigo) {
                return this.produtos[i];
            }
        }
        return undefined;
    }
}

const produto1: ProdutoLoja = { codigo: 101, nome: "Cadeira Gamer" };
const produto2: ProdutoLoja = { codigo: 102, nome: "Teclado Mecânico" };
const produto3: ProdutoLoja = { codigo: 103, nome: "Mouse Óptico" };

const loja = new Loja([produto1, produto2, produto3]);

console.log("Produto com código 102:", loja.buscarProdutoPorCodigo(102)); 
console.log("Produto com código 104:", loja.buscarProdutoPorCodigo(104));
