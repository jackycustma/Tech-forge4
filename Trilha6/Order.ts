class Cart {
    private items: string[] = [];
    private totalPrice: number = 0;
  
    addItem(item: string, price: number) {
      this.items.push(item);
      this.totalPrice += price;
    }
  
    getCartDetails() {
      return { items: this.items, totalPrice: this.totalPrice };
    }
  }
  
  class Payment {
    processPayment(amount: number): boolean {
      if (amount > 0) {
        console.log(`Processing payment of $${amount}`);
        return true;
      } else {
        console.log("Payment failed. Amount must be greater than zero.");
        return false;
      }
    }
  }
  
  class Shipping {
    shipOrder(address: string) {
      console.log(`Shipping order to ${address}`);
    }
  }
  
  class Order {
    private cart: Cart;
    private payment: Payment;
    private shipping: Shipping;
    private paymentStatus: string = "Pending";
    private shippingStatus: string = "Pending";
  
    constructor() {
      this.cart = new Cart();
      this.payment = new Payment();
      this.shipping = new Shipping();
    }
  
    addItemToOrder(item: string, price: number) {
      this.cart.addItem(item, price);
    }
  
    checkout(address: string) {
      const { totalPrice } = this.cart.getCartDetails();
      if (this.payment.processPayment(totalPrice)) {
        this.paymentStatus = "Processed";
        this.shippingStatus = "Shipped";
        this.shipping.shipOrder(address);
        console.log("Order completed successfully.");
      } else {
        console.log("Payment failed. Order not completed.");
      }
    }
  
    getOrderSummary() {
      const { items, totalPrice } = this.cart.getCartDetails();
      return {
        items,
        totalPrice,
        paymentStatus: this.paymentStatus,
        shippingStatus: this.shippingStatus,
      };
    }
  }
  
 
  const order = new Order();
  order.addItemToOrder("Laptop", 1200);
  order.addItemToOrder("Headphones", 150);
  
  console.log(order.getOrderSummary());
  
  order.checkout("123 Main St");
  
  console.log(order.getOrderSummary());
  