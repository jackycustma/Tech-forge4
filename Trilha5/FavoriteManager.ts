abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
  }
  
  class MoviesFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];
  
    addFavorite(item: string): void {
      let isDuplicate = false;
      for (let i = 0; i < this.favorites.length; i++) {
        if (this.favorites[i] === item) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        this.favorites.push(item);
      }
    }
  
    getFavorites(): string[] {
      return this.favorites.sort();
    }
  }
  
  class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];
  
    addFavorite(item: string): void {
      this.favorites.unshift(item); 
    }
  
    getFavorites(): string[] {
      return this.favorites;
    }
  }
  
 
  const movieManager = new MoviesFavoriteManager();
  movieManager.addFavorite("O Cavaleiro das Trevas");
  movieManager.addFavorite("A Origem");
  movieManager.addFavorite("Matrix");
  movieManager.addFavorite("O Cavaleiro das Trevas");
  console.log(movieManager.getFavorites());
  
  const bookManager = new BooksFavoriteManager();
  bookManager.addFavorite("1984");
  bookManager.addFavorite("Admirável Mundo Novo");
  bookManager.addFavorite("O Grande Gatsby");
  bookManager.addFavorite("1984");
  console.log(bookManager.getFavorites());
  