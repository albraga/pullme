var pullme = (function($) {

    var lat;
    var lon;
    var map;
    
    var getLocation = function () {
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(setPositionAndStart);
	}
    };

    var setPositionAndStart = function (position) {
	setTimeout(function() {
	    lon = position.coords.longitude;
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
	    zoom: 15,
	    center: new google.maps.LatLng(lat, lon)
	};
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
    };

    var startMap = function () {
	google.maps.event.addDomListener(window, 'load', initMap());
    };

    var insertStoresMarkers = function() {
	var image = '../img/cart3.png';
	var marker2 = new google.maps.Marker({
	    position: new google.maps.LatLng(lat, lon + 0.002),
	    map: map,
	    title: '',
	    icon: image
	});
    }

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
		productName +"/"+ lat +"/"+ lon, function(data) {
		    //var user = new model.User(1, lat, lon, data[0], data[1]);
		    alert(data);
		    insertStoresMarkers();
	    });
	}
    }
	
    return controller;
    
}
)(jQuery);

$('#buscar').on('click', function() {
    pullme.getStores($('#productName').val(), $('#maxDistance').val());
    $('input:text').val('');
});

