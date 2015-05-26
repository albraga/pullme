var App;
(function (App) {
    var User = (function () {
        function User(id, lat, long, name, email) {
            this.id = id;
            this.lat = lat;
            this.long = long;
            this.name = name;
            this.email = email;
        }
        User.prototype.getStores = function (maxRange, productName, isDiscount) {
            if (isDiscount === void 0) { isDiscount = true; }
        };
        return User;
    })();
    var Product = (function () {
        function Product(id, name, isDiscount, category, price) {
            this.id = id;
            this.name = name;
            this.isDiscount = isDiscount;
            this.category = category;
            this.price = price;
        }
        return Product;
    })();
    var Store = (function () {
        function Store(id, lat, long, name, address, phone, products) {
            this.id = id;
            this.lat = lat;
            this.long = long;
            this.name = name;
            this.address = address;
            this.phone = phone;
            this.products = products;
        }
        return Store;
    })();
})(App || (App = {}));
