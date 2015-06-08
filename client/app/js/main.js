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
	}, 2000);
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
		alert('ueh');
	    });
	}
    }
	
    return controller;
    
}
)(jQuery);

