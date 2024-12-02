
class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;
  
    constructor(nome: string, preco: number, quantidade: number) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    calcularValorTotalEstoque(): number {
      return this.preco * this.quantidade;
    }
  
    exibirInformacoes(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Preço: R$${this.preco.toFixed(2)}`);
      console.log(`Quantidade: ${this.quantidade}`);
      console.log(`Valor total em estoque: R$${this.calcularValorTotalEstoque().toFixed(2)}`);
    }
  }
  
const produto = new Produto("Caderno", 15.5, 120);
  
produto.exibirInformacoes();
  