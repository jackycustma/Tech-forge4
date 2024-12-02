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
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    return Inventory;
}());
var WarehouseInventory = /** @class */ (function (_super) {
    __extends(WarehouseInventory, _super);
    function WarehouseInventory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inventory = {};
        return _this;
    }
    WarehouseInventory.prototype.addItem = function (item, quantity) {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        }
        else {
            this.inventory[item] = quantity;
        }
    };
    WarehouseInventory.prototype.removeItem = function (item) {
        if (this.inventory[item]) {
            delete this.inventory[item];
        }
        else {
            console.log("Item \"".concat(item, "\" n\u00E3o encontrado no invent\u00E1rio."));
        }
    };
    WarehouseInventory.prototype.getInventory = function () {
        return this.inventory;
    };
    return WarehouseInventory;
}(Inventory));
var StoreInventory = /** @class */ (function (_super) {
    __extends(StoreInventory, _super);
    function StoreInventory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inventory = {};
        _this.maxQuantityPerItem = 10;
        return _this;
    }
    StoreInventory.prototype.addItem = function (item, quantity) {
        if (this.inventory[item]) {
            var newQuantity = this.inventory[item] + quantity;
            if (newQuantity > this.maxQuantityPerItem) {
                console.log("N\u00E3o \u00E9 poss\u00EDvel adicionar mais do que ".concat(this.maxQuantityPerItem, " unidades de \"").concat(item, "\"."));
                this.inventory[item] = this.maxQuantityPerItem;
            }
            else {
                this.inventory[item] = newQuantity;
            }
        }
        else {
            if (quantity <= this.maxQuantityPerItem) {
                this.inventory[item] = quantity;
            }
            else {
                console.log("N\u00E3o \u00E9 poss\u00EDvel adicionar mais do que ".concat(this.maxQuantityPerItem, " unidades de \"").concat(item, "\"."));
                this.inventory[item] = this.maxQuantityPerItem;
            }
        }
    };
    StoreInventory.prototype.removeItem = function (item) {
        if (this.inventory[item]) {
            delete this.inventory[item];
        }
        else {
            console.log("Item \"".concat(item, "\" n\u00E3o encontrado no invent\u00E1rio."));
        }
    };
    StoreInventory.prototype.getInventory = function () {
        return this.inventory;
    };
    return StoreInventory;
}(Inventory));
var warehouse = new WarehouseInventory();
warehouse.addItem("Produto A", 50);
warehouse.addItem("Produto B", 30);
warehouse.addItem("Produto A", 20);
console.log(warehouse.getInventory());
var store = new StoreInventory();
store.addItem("Produto X", 5);
store.addItem("Produto Y", 8);
store.addItem("Produto X", 6);
console.log(store.getInventory());
store.removeItem("Produto Y");
console.log(store.getInventory());
