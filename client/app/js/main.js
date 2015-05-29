$(function() {

    $.getJSON("http://pullme.pe.hu/slim/", function(data) {	
	alert(data[0]);
    });
    alert("nada!");
    
});
 
