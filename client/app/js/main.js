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
	//"http://pullme.pe.hu/slim/index.php/stores"
	//"http://192.168.59.103/temp/index.php/stores/"
	getStores: function(productName, maxDistance) {
	    $.getJSON("http://pullme.pe.hu/slim/index.php/stores/" + maxDistance +"/"+
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

