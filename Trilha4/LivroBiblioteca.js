var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao(livros) {
        this.livros = livros;
    }
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livros.filter(function (livro) { return livro.genero.toLowerCase() === genero.toLowerCase(); });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livros.filter(function (livro) { return livro.autor.toLowerCase() === autor.toLowerCase(); });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livros
            .filter(function (livro) { return livro.disponivel; })
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); });
    };
    return BibliotecaGestao;
}());
var livro4 = { titulo: "Dom Quixote", autor: "Miguel de Cervantes", genero: "Romance", disponivel: true };
var livro5 = { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", genero: "Realismo Mágico", disponivel: false };
var livro6 = { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true };
var bibliotecaGestao = new BibliotecaGestao([livro4, livro5, livro6]);
console.log("Livros de Fantasia:", bibliotecaGestao.filtrarPorGenero("Fantasia"));
console.log("Livros de Gabriel García Márquez:", bibliotecaGestao.buscarPorAutor("Gabriel García Márquez"));
console.log("Livros Disponíveis Ordenados:", bibliotecaGestao.obterLivrosDisponiveisOrdenados());
