var pullme;
(function (pullme) {
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
    pullme.User = User;
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
})(pullme || (pullme = {}));

(function() {


}(pullme));


$(function() {

    $.getJSON("http://pullme.pe.hu/slim/", function(data) {	
	alert(data[0]);
    });
    alert("nada!");
    
});
 
