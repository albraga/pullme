var model;
(function (model) {
    var User = (function () {
        function User(id, lat, longi, name, email) {
            this.id = id;
            this.lat = lat;
            this.longi = longi;
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
        function Store(id, lat, longi, name, address, phone, products) {
            this.id = id;
            this.lat = lat;
            this.longi = longi;
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

    var lat;
    var longi;
    var map;
    
    var getLocation = function () {
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(setPosition);
	}
    };

    var setPosition = function (position) {
	longi = position.coords.longitude;
	lat = position.coords.latitude;
    };

    var initMap = function() {
	var mapOptions = {
	    zoom: 2,
	    center: new google.maps.LatLng(0.0, 0.0)
	};
	map = new google.maps.Map(document.getElementById('main'), mapOptions);
    }

    var startMap = function () {
	google.maps.event.addDomListener(window, 'load', initMap());
    }
    
    var app = {
	initialize: function () {
	    document.addEventListener('deviceready', this.onDeviceReady, false);
	    this.onDeviceReady(); //uncomment for testing in Chrome browser
	},
	onDeviceReady: function () {
	    getLocation();
	    startMap();
	}
    };
    
    app.initialize();

    var ctr = {};
    ctr.get = $.getJSON("http://pullme.pe.hu/slim/", function(data) {	
	var user = new model.User(1, lat, longi, data[0], data[1]);
	alert(user.longi);
    });
    
    return ctr;
    
})(jQuery);

$(function() {
    pullme.get();
});
