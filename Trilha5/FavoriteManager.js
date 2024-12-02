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
var FavoriteManager = /** @class */ (function () {
    function FavoriteManager() {
    }
    return FavoriteManager;
}());
var MoviesFavoriteManager = /** @class */ (function (_super) {
    __extends(MoviesFavoriteManager, _super);
    function MoviesFavoriteManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.favorites = [];
        return _this;
    }
    MoviesFavoriteManager.prototype.addFavorite = function (item) {
        var isDuplicate = false;
        for (var i = 0; i < this.favorites.length; i++) {
            if (this.favorites[i] === item) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            this.favorites.push(item);
        }
    };
    MoviesFavoriteManager.prototype.getFavorites = function () {
        return this.favorites.sort();
    };
    return MoviesFavoriteManager;
}(FavoriteManager));
var BooksFavoriteManager = /** @class */ (function (_super) {
    __extends(BooksFavoriteManager, _super);
    function BooksFavoriteManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.favorites = [];
        return _this;
    }
    BooksFavoriteManager.prototype.addFavorite = function (item) {
        this.favorites.unshift(item);
    };
    BooksFavoriteManager.prototype.getFavorites = function () {
        return this.favorites;
    };
    return BooksFavoriteManager;
}(FavoriteManager));
var movieManager = new MoviesFavoriteManager();
movieManager.addFavorite("O Cavaleiro das Trevas");
movieManager.addFavorite("A Origem");
movieManager.addFavorite("Matrix");
movieManager.addFavorite("O Cavaleiro das Trevas");
console.log(movieManager.getFavorites());
var bookManager = new BooksFavoriteManager();
bookManager.addFavorite("1984");
bookManager.addFavorite("Admirável Mundo Novo");
bookManager.addFavorite("O Grande Gatsby");
bookManager.addFavorite("1984");
console.log(bookManager.getFavorites());
