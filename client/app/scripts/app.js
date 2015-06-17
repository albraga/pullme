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
    var lon;
    var map;
    var markers = [];

    function addMarker(mLat, mLon, image, name) {
	var marker = new google.maps.Marker({
	    position: new google.maps.LatLng(mLat, mLon),
	    title: name,
	    icon: image
	});
	markers.push(marker);
    }

    function clearStores() {
	for (var i = 0; i < markers.length; i++) {
	    markers[i].setMap(null);
	}
	markers = [];
    }

    function showStores() {
	for (var i = 0; i < markers.length; i++) {
	    markers[i].setMap(map);
	}
    }
    
    
    var getLocation = function () {
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(setPositionAndStart);
	}
    };

    var setPositionAndStart = function (position) {
	    lon = position.coords.longitude;
	    lat = position.coords.latitude;
	    startMap();
	    putUserMarker();
    };

    var putUserMarker = function() {
	var image = '../images/user.png';
	var marker = new google.maps.Marker({
	    position: map.getCenter(),
	    map: map,
	    title: 'Eu',
	    icon: image
	});
    };

    var initMap = function() {
	var mapOptions = {
	    zoom: 15,
	    center: new google.maps.LatLng(lat, lon)
	};
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
    };

    var startMap = function () {
	google.maps.event.addDomListener(window, 'load', initMap());
    };

    var application = {
	initialize: function () {
	    document.addEventListener('deviceready', this.onDeviceReady, false);
	    this.onDeviceReady(); //uncomment for testing in Chrome browser
	},
	onDeviceReady: function () {
	    getLocation();
	}
    };

    application.initialize();

    var controller = {
	//"http://pullme.pe.hu/slim/"
	getStores: function(productName, maxDistance) {
	    $.getJSON("http://192.168.59.103/temp/index.php/stores/" + maxDistance +"/"+
		      productName +"/"+ lat +"/"+ lon, function(stores) {
			  clearStores();
			  for (var x = 0; x < stores.length; ++x) {
			      addMarker(stores[x].lat, stores[x].lon, stores[x].image, stores[x].name);
			  }
			  showStores();
	    });
	}
    };
	
    return controller;
    
}
)(jQuery);

$('#buscar').on('click', function() {
    pullme.getStores($('#productName').val(), $('#maxDistance').val());
    $('input:text').val('');
});

