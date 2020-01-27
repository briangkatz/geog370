// Map 1: Alber's Equal Area Projection
var crs1 = new L.Proj.CRS('EPSG:3085', '+proj=aea +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=6000000 +ellps=GRS80 +units=m +no_defs', {
    origin: [416729.617118, 412156.942963],
    bounds: [
        [-2410329.835748, 13545805.10653],
        [-10850237.174162, 3977377.378424]
    ],
    resolutions: [
        4891.96999883583 * 8,
        4891.96999883583 * 4,
        4891.96999883583 * 2,
        4891.96999883583,
        2445.98499994708,
        1222.99250010583,
        611.496250052917,
        305.748124894166,
        152.8740625,
        76.4370312632292,
        38.2185156316146,
        19.1092578131615,
        9.55462890525781,
        4.77731445262891,
        2.38865722657904,
        1.19432861315723,
        0.597164306578613,
        0.298582153289307,
        0.298582153289307 / 2,
        0.298582153289307 / 4,
        0.298582153289307 / 8,
        0.298582153289307 / 16
    ]
});

var corner1 = L.latLng(55, -170),
    corner2 = L.latLng(-20, 0),
    bounds = L.latLngBounds(corner1, corner2);

// define map object and parameters
var mymap = L.map('map', {
    center: [44, -120],
    zoomControl: false,
    zoom: 4,
    maxZoom: 10,
    minZoom: 2,
    detectRetina: true,
    maxBounds: bounds,
    crs: crs1 // set projection to Alber's Equal Area
});

L.control.zoom({position: "bottomright"}).addTo(mymap);

// set choropleth style
function style(feature) {
    return {
        fillColor: "#ffffff",
        fillOpacity: 0.4,
        weight: 2,
        opacity: 1,
        color: '#800080',
        dashArray: '2'
    };
}

// add spatial data layer
oregon = L.geoJson.ajax("assets/oregon.geojson", {
    style: style
}).addTo(mymap);

// define legend
var legend1 = L.control({position: 'topleft'});
// set legend color scale and breaks
legend1.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend13');
    div.innerHTML += '<b>Albers Equal Area</b>';
    return div;
};
legend1.addTo(mymap);

// https://github.com/cloudybay/leaflet.latlng-graticule
L.latlngGraticule({
    font: "16px Yanone Kaffeesatz",
    color: "#800080",
    opacity: 0.4,
    showLabel: true,
    lngLineCurved: 0, // 0 for straight longitude lines
    latLineCurved: 1, // 1 for curved graticules (conic projections), 0 for straight lines
    zoomInterval: [
        {start: 3, end: 3.9, interval: 4},
        {start: 4, end: 5.9, interval: 2},
        {start: 6, end: 7.9, interval: 0.5},
        {start: 8, end: 10, interval: 0.25}
    ]
}).addTo(mymap);

// Map 2: Lambert Conformal Conic Projection
var crs2 = new L.Proj.CRS('EPSG:2269', '+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000.0001424 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs', {
    origin: [416729.617118, 412156.942963],
    bounds: [
        [7241196.8729, 128656.7859],
        [9265592.9584, 981999.6828]
    ],
    resolutions: [
        4891.96999883583 * 8,
        4891.96999883583 * 4,
        4891.96999883583 * 2,
        4891.96999883583,
        2445.98499994708,
        1222.99250010583,
        611.496250052917,
        305.748124894166,
        152.8740625,
        76.4370312632292,
        38.2185156316146,
        19.1092578131615,
        9.55462890525781,
        4.77731445262891,
        2.38865722657904,
        1.19432861315723,
        0.597164306578613,
        0.298582153289307,
        0.298582153289307 / 2,
        0.298582153289307 / 4,
        0.298582153289307 / 8,
        0.298582153289307 / 16
    ]
});

// define map object and parameters
var mymap2 = L.map('map2', {
    center: [44, -120],
    zoomControl: false,
    zoom: 4,
    maxZoom: 10,
    minZoom: 2,
    detectRetina: true,
    maxBounds: bounds,
    crs: crs2 // set projection to Lambert Conformal Conic
});

L.control.zoom({position: "bottomright"}).addTo(mymap2);

// add spatial data layer
oregon = L.geoJson.ajax("assets/oregon.geojson", {
    style: style
}).addTo(mymap2);

// define legend
var legend2 = L.control({position: 'topleft'});
// set legend color scale and breaks
legend2.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend24');
    div.innerHTML += '<b>Lambert Conformal Conic</b>';
    return div;
};
legend2.addTo(mymap2);

// https://github.com/cloudybay/leaflet.latlng-graticule
L.latlngGraticule({
    font: "16px Yanone Kaffeesatz",
    color: "#800080",
    opacity: 0.4,
    showLabel: true,
    lngLineCurved: 0, // 0 for straight longitude lines
    latLineCurved: 1, // 1 for curved graticules (conic projections), 0 for straight lines
    zoomInterval: [
        {start: 3, end: 3.9, interval: 4},
        {start: 4, end: 5.9, interval: 2},
        {start: 6, end: 7.9, interval: 0.5},
        {start: 8, end: 10, interval: 0.25}
    ]
}).addTo(mymap2);

// define map object and parameters
var mymap3 = L.map('map3', {
    center: [44, -120],
    zoomControl: false,
    zoom: 5,
    maxZoom: 10,
    minZoom: 2,
    detectRetina: true,
    maxBounds: bounds,
    crs: L.CRS.EPSG4326
});

L.control.zoom({position: "bottomright"}).addTo(mymap3);

// add spatial data layer
oregon = L.geoJson.ajax("assets/oregon.geojson", {
    style: style
}).addTo(mymap3);

// define legend
var legend3 = L.control({position: 'topleft'});
// set legend color scale and breaks
legend3.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend13');
    div.innerHTML += '<b>Web Mercator</b>';
    return div;
};
legend3.addTo(mymap3);

// https://github.com/cloudybay/leaflet.latlng-graticule
L.latlngGraticule({
    font: "16px Yanone Kaffeesatz",
    color: "#800080",
    opacity: 0.4,
    showLabel: true,
    lngLineCurved: 0, // 0 for straight longitude lines
    latLineCurved: 1, // 1 for curved graticules (conic projections), 0 for straight lines
    zoomInterval: [
        {start: 3, end: 3.9, interval: 4},
        {start: 4, end: 5.9, interval: 2},
        {start: 6, end: 7.9, interval: 0.5},
        {start: 8, end: 10, interval: 0.25}
    ]
}).addTo(mymap3);

// Map 4: State Plane
// define map object and parameters
var mymap4 = L.map('map4', {
    center: [44, -120],
    zoomControl: false,
    zoom: 6,
    maxZoom: 10,
    minZoom: 2,
    detectRetina: true,
    maxBounds: bounds,
    crs: L.CRS.EPSG3857 // set projection to Pseudo-Mercator
});

L.control.zoom({position: "bottomright"}).addTo(mymap4);

// add spatial data layer
oregon = L.geoJson.ajax("assets/oregon.geojson", {
    style: style
}).addTo(mymap4);

// define legend
var legend4 = L.control({position: 'topleft'});
// set legend color scale and breaks
legend4.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend24');
    div.innerHTML += '<b>Pseudo-Mercator</b>';
    return div;
};
legend4.addTo(mymap4);

// https://github.com/cloudybay/leaflet.latlng-graticule
L.latlngGraticule({
    font: "16px Yanone Kaffeesatz",
    color: "#800080",
    opacity: 0.4,
    showLabel: true,
    lngLineCurved: 0, // 0 for straight longitude lines
    latLineCurved: 1, // 1 for curved graticules (conic projections), 0 for straight lines
    zoomInterval: [
        {start: 3, end: 3.9, interval: 4},
        {start: 4, end: 5.9, interval: 2},
        {start: 6, end: 7.9, interval: 2},
        {start: 8, end: 10, interval: 0.5}
    ]
}).addTo(mymap4);