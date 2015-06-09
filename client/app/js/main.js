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
	}, 0);
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

    var haversine = function() {
	var radians = Array.prototype.map.call(arguments, function(deg) { return deg/180.0 * Math.PI; });
	var lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
	var R = 6372.8; // km
	var dLat = lat2 - lat1;
	var dLon = lon2 - lon1;
	var a = Math.sin(dLat / 2) * Math.sin(dLat /2) +
	    Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.asin(Math.sqrt(a));
	return R * c;
    };
    
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
