abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
  }
  

  class WarehouseInventory extends Inventory {
    private inventory: Record<string, number> = {};
  
    addItem(item: string, quantity: number): void {
      if (this.inventory[item]) {
        this.inventory[item] += quantity;
      } else {
        this.inventory[item] = quantity;
      }
    }
  
    removeItem(item: string): void {
      if (this.inventory[item]) {
        delete this.inventory[item];
      } else {
        console.log(`Item "${item}" não encontrado no inventário.`);
      }
    }
  
    getInventory(): Record<string, number> {
      return this.inventory;
    }
  }
  
  class StoreInventory extends Inventory {
    private inventory: Record<string, number> = {};
    private maxQuantityPerItem: number = 10;
  
    addItem(item: string, quantity: number): void {
      if (this.inventory[item]) {
        const newQuantity = this.inventory[item] + quantity;
        if (newQuantity > this.maxQuantityPerItem) {
          console.log(`Não é possível adicionar mais do que ${this.maxQuantityPerItem} unidades de "${item}".`);
          this.inventory[item] = this.maxQuantityPerItem;
        } else {
          this.inventory[item] = newQuantity;
        }
      } else {
        if (quantity <= this.maxQuantityPerItem) {
          this.inventory[item] = quantity;
        } else {
          console.log(`Não é possível adicionar mais do que ${this.maxQuantityPerItem} unidades de "${item}".`);
          this.inventory[item] = this.maxQuantityPerItem;
        }
      }
    }
  
    removeItem(item: string): void {
      if (this.inventory[item]) {
        delete this.inventory[item];
      } else {
        console.log(`Item "${item}" não encontrado no inventário.`);
      }
    }
  
    getInventory(): Record<string, number> {
      return this.inventory;
    }
  }
  
  
  const warehouse = new WarehouseInventory();
  warehouse.addItem("Produto A", 50);
  warehouse.addItem("Produto B", 30);
  warehouse.addItem("Produto A", 20); 
  console.log(warehouse.getInventory());
  
  const store = new StoreInventory();
  store.addItem("Produto X", 5);
  store.addItem("Produto Y", 8);
  store.addItem("Produto X", 6);
  console.log(store.getInventory());
  
  store.removeItem("Produto Y");
  console.log(store.getInventory());
  