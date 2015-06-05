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

