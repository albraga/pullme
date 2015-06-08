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
    
    var controller = {
	initialize: function () {
	    document.addEventListener('deviceready', this.onDeviceReady, false);
	    this.onDeviceReady(); //uncomment for testing in Chrome browser
	},
	onDeviceReady: function () {
	    getLocation();
	    startMap();
	}
    };

    controller.get = $.getJSON("http://pullme.pe.hu/slim/", function(data) {	
	var user = new model.User(1, lat, longi, data[0], data[1]);
	alert(user.longi);
    });
    
    return controller;
    
})(jQuery);

$(function() {
    pullme.initialize();
    pullme.get();
});

