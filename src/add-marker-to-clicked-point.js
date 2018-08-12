$(document).ready(function() {

    var map = $('#map').data('map');

    var selectedMarkerIcon = $('.selected-marker');

    map.on('click', function(event) {

        var clickedCoordinates = event.coordinate;
        var layers = map.getLayers().getArray();
        var markerLayer = null;
        for (let i = 0; i < layers.length; i++) {
            var layer = layers[i];
            if (layer.values_.key && layer.values_.key === 'marker-layer') {
                markerLayer = layer;
                break;
            }
        }

        var newMarkerFeature = new ol.Feature({
            geometry: new ol.geom.Point(clickedCoordinates),
            name: '(X:' + clickedCoordinates[0] + 'Y:' + clickedCoordinates[1] + ')'
        });

        debugger;
        markerLayer.values_.source.addFeature(newMarkerFeature);

    });

});