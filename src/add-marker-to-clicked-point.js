$(document).ready(function() {

    var map = $('#map').data('map');

    debugger;
    var selectedIconSource;
    $('.marker').click(function() {
        var selectedMarkerIcon = $('.selected-marker > img');
        selectedIconSource = $(selectedMarkerIcon).attr('src');
    });

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

        debugger;
        var iconStyle = new ol.style.Style({
            image: new ol.style.Icon(({
                anchor: [0.5, 50],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                opacity: '1',

                //https://gis.stackexchange.com/questions/130603/how-to-resize-a-feature-and-prevent-it-from-scaling-when-zooming-in-openlayers-3
                scale: 0.05,
                src: selectedIconSource
            }))
        });

        var newMarkerFeature = new ol.Feature({
            geometry: new ol.geom.Point(clickedCoordinates),
            name: '(X:' + clickedCoordinates[0] + 'Y:' + clickedCoordinates[1] + ')',
            style: iconStyle
        });

        debugger;
        markerLayer.values_.source.addFeature(newMarkerFeature);

    });

});