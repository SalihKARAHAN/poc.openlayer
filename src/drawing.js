jQuery(document).ready(function() {

    debugger;
    var map = $('#map').data('map');

    var drawingSource = new ol.source.Vector({
        wrapX: false
    });

    var drawingLayer = new ol.layer.Vector({
        source: drawingSource
    });

    var typeSelect = document.getElementById('type');

    var draw;
    var addInteraction = function() {
        var value = typeSelect.value;
        if (value !== 'None') {
            draw = new ol.interaction.Draw({
                source: drawingSource,
                type: typeSelect.value
            });

            map.addInteraction(draw);
        }
    }

    typeSelect.onchange = function() {
        map.removeInteraction(draw);
        addInteraction();
    }

    map.addLayer(drawingLayer);
    addInteraction();

});