
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
        this.totalPrice = 0;
    }
    Cart.prototype.addItem = function (item, price) {
        this.items.push(item);
        this.totalPrice += price;
    };
    Cart.prototype.getCartDetails = function () {
        return { items: this.items, totalPrice: this.totalPrice };
    };
    return Cart;
}());

var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment.prototype.processPayment = function (amount) {
        if (amount > 0) {
            console.log("Processing payment of $".concat(amount));
            return true;
        }
        else {
            console.log("Payment failed. Amount must be greater than zero.");
            return false;
        }
    };
    return Payment;
}());

var Shipping = /** @class */ (function () {
    function Shipping() {
    }
    Shipping.prototype.shipOrder = function (address) {
        console.log("Shipping order to ".concat(address));
    };
    return Shipping;
}());

var Order = /** @class */ (function () {
    function Order() {
        this.paymentStatus = "Pending";
        this.shippingStatus = "Pending";
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }
    Order.prototype.addItemToOrder = function (item, price) {
        this.cart.addItem(item, price);
    };
    Order.prototype.checkout = function (address) {
        var totalPrice = this.cart.getCartDetails().totalPrice;
        if (this.payment.processPayment(totalPrice)) {
            this.paymentStatus = "Processed";
            this.shippingStatus = "Shipped";
            this.shipping.shipOrder(address);
            console.log("Order completed successfully.");
        }
        else {
            console.log("Payment failed. Order not completed.");
        }
    };
    Order.prototype.getOrderSummary = function () {
        var _a = this.cart.getCartDetails(), items = _a.items, totalPrice = _a.totalPrice;
        return {
            items: items,
            totalPrice: totalPrice,
            paymentStatus: this.paymentStatus,
            shippingStatus: this.shippingStatus,
        };
    };
    return Order;
}());
var order = new Order();
order.addItemToOrder("Laptop", 1200);
order.addItemToOrder("Headphones", 150);
console.log(order.getOrderSummary());
order.checkout("123 Main St");
console.log(order.getOrderSummary());
