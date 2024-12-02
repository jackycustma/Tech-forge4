var Biblioteca = /** @class */ (function () {
    function Biblioteca(livros) {
        this.livros = livros;
    }
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livros.filter(function (livro) { return livro.disponivel; });
    };
    return Biblioteca;
}());
var livro1 = { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true };
var livro2 = { titulo: "1984", autor: "George Orwell", disponivel: false };
var livro3 = { titulo: "Dom Quixote", autor: "Miguel de Cervantes", disponivel: true };
var biblioteca = new Biblioteca([livro1, livro2, livro3]);
console.log("Livros disponíveis:", biblioteca.buscarLivrosDisponiveis());
