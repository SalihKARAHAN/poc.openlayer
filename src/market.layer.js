var vectorSource = new ol.source.Vector({});

var hqMarketLocation = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.transform([28.895751, 41.050335], 'EPSG:4326', 'EPSG:3857')),
    name: 'Market HQ',
    population: 4000,
    rainfall: 500
});

for (var i = 1; i < 299; i++) {
    var iconFeature = new ol.Feature({
        geometry: new
        ol.geom.Point(ol.proj.transform([Math.random() * 360 - 180, Math.random() * 180 - 90], 'EPSG:4326', 'EPSG:3857')),
        name: 'Market ' + i,
        population: 4000,
        rainfall: 500
    });

    vectorSource.addFeature(iconFeature);
}

vectorSource.addFeature(hqMarketLocation);

var hqMarketIcon = new ol.style.Style({
    image: new ol.style.Icon(({
        anchor: [0.5, 50],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: '1',

        //https://gis.stackexchange.com/questions/130603/how-to-resize-a-feature-and-prevent-it-from-scaling-when-zooming-in-openlayers-3
        scale: 0.05,
        src: '../img/050-shop.png'
    }))
});

var marketVectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style: hqMarketIcon
});