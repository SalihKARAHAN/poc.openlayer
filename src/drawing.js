jQuery(document).ready(function() {

    var map = $('#map').data('map');

    var drawingSource = new ol.source.Vector({
        wrapX: false
    });

    var drawingLayer = new ol.layer.Vector({
        source: drawingSource,
        key: 'drawingLayer'
    });

    var typeSelect = document.getElementById('type');

    var draw;
    var addInteraction = function() {
        debugger;
        var value = typeSelect.value;
        if (value !== 'None') {
            draw = new ol.interaction.Draw({
                source: drawingSource,
                type: typeSelect.value,

            });

            draw.on('drawend', function(event) {
                debugger;
                var lastFeature = drawingLayer.getSource().getFeatures();
                lastFeature.forEach(function(feature) {
                    console.log(feature.getGeometry().getCoordinates());
                });

                // var label = document.createElement("label");
                // label.appendChild(document.createTextNode("drawn: [0]=" + event.coordinate[0] + " [1]=" + event.coordinate[1]))
                // window.LOGAREA.prepend(document.createElement("br"));
                // window.LOGAREA.prepend(label);
            });

            map.addInteraction(draw);
        } else {
            draw = null;
        }
    }

    typeSelect.onchange = function() {
        map.removeInteraction(draw);
        addInteraction();
    }

    map.addLayer(drawingLayer);
    addInteraction();

});