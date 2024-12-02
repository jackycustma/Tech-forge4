interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[];

    constructor(livros: LivroBiblioteca[]) {
        this.livros = livros;
    }

  
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }

 
    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const livro4: LivroBiblioteca = { titulo: "Dom Quixote", autor: "Miguel de Cervantes", genero: "Romance", disponivel: true };
const livro5: LivroBiblioteca = { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", genero: "Realismo Mágico", disponivel: false };
const livro6: LivroBiblioteca = { titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true };


const bibliotecaGestao = new BibliotecaGestao([livro4, livro5, livro6]);


console.log("Livros de Fantasia:", bibliotecaGestao.filtrarPorGenero("Fantasia"));

console.log("Livros de Gabriel García Márquez:", bibliotecaGestao.buscarPorAutor("Gabriel García Márquez"));

console.log("Livros Disponíveis Ordenados:", bibliotecaGestao.obterLivrosDisponiveisOrdenados());
