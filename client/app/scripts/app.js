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
	    navigator.geolocation.getCurrentPosition(setPositionAndStart);
	}
    };

    var setPositionAndStart = function (position) {
	setTimeout(function() {
	    longi = position.coords.longitude;
	    lat = position.coords.latitude;
	    startMap();
	    putUserMarker();
	}, 2000);
    };

    var putUserMarker = function() {
	var image = '../img/user.png';
	var marker = new google.maps.Marker({
	    position: map.getCenter(),
	    map: map,
	    title: 'Eu',
	    icon: image
	});
    };

    var initMap = function() {
	var mapOptions = {
	    zoom: 16,
	    center: new google.maps.LatLng(lat, longi)
	};
	map = new google.maps.Map(document.getElementById('main'), mapOptions);
    };

    var startMap = function () {
	google.maps.event.addDomListener(window, 'load', initMap());
    };

    var app = {
	initialize: function () {
	    document.addEventListener('deviceready', this.onDeviceReady, false);
	    this.onDeviceReady(); //uncomment for testing in Chrome browser
	},
	onDeviceReady: function () {
	    getLocation();
	}
    };

    app.initialize();
    
    var controller = {
	get: function() {
	    $.getJSON("http://pullme.pe.hu/slim/", function(data) {
		var user = new model.User(1, lat, longi, data[0], data[1]);
		alert(lat + "___" + longi);
	    });
	}
    }
	
    return controller;
    
}
)(jQuery);

