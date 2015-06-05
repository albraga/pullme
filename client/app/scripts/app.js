var model;
(function (model) {
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
    model.User = User;
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
    model.Product = Product;
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
    model.Store = Store;
})(model || (model = {}));

var pullme = (function($) {
    var ctr = {};
    ctr.get = $.getJSON("http://pullme.pe.hu/slim/", function(data) {	
	var user = new model.User(1, 0.2, 0.4, data[0], data[1]);
	alert(user.email);
    });

    return ctr;
    
})(jQuery);

$(function() {
    pullme.get();
});

