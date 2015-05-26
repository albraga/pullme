$(function() {

var api = restful('http://pullme.pe.hu/rest/index.php/api/widgets');

    var widget = api.one('widgets', 1);

widget.get().then(function(response) {
    var widgetEntity = response.body();
    var wid = widgetEntity.data();
    alert(wid.name);
});

});
