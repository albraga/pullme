var Pullme;
(function (Pullme) {
    var User = (function () {
        function User(id, lat, long, name, email) {
            this.id = id;
            this.lat = lat;
            this.long = long;
            this.name = name;
            this.email = email;
        }
        return User;
    })();
    var Product = (function () {
        function Product(id, isDiscount, category, price) {
            this.id = id;
            this.isDiscount = isDiscount;
            this.category = category;
            this.price = price;
        }
        return Product;
    })();
    var Store = (function () {
        function Store(id, lat, long, name, address, phone) {
            this.id = id;
            this.lat = lat;
            this.long = long;
            this.name = name;
            this.address = address;
            this.phone = phone;
        }
        return Store;
    })();
    var Vicinity = (function () {
        function Vicinity(id, lat, long, radiusFromUser, stores) {
            this.id = id;
            this.lat = lat;
            this.long = long;
            this.radiusFromUser = radiusFromUser;
            this.stores = stores;
        }
        return Vicinity;
    })();
})(Pullme || (Pullme = {}));
