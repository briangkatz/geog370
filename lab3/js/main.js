// Create Leaflet map object, set map center and zoom level
var map = L.map('map').setView([39.5, -97], 5);

// Load NLCD layer from WMS source: 2016 image
var afterLayer = L.tileLayer.wms('https://www.mrlc.gov/geoserver/mrlc_display/NLCD_2016_Land_Cover_L48/ows?', {
    layers: 'NLCD_2016_Land_Cover_L48',
    attribution: '&copy; <a href="mrlc.gov">MRLC<\/a>'
}).addTo(map);

// Load NLCD layer from WMS source: 2001 image
var beforeLayer = L.tileLayer.wms('https://www.mrlc.gov/geoserver/mrlc_display/NLCD_2001_Land_Cover_L48/ows?', {
    layers: 'NLCD_2001_Land_Cover_L48',
    attribution: '&copy; <a href="mrlc.gov">MRLC<\/a>',
    minZoom: 1,
    maxZoom: 16
}).addTo(map)

// Assign the two NLCD layers to the Leaflet Side-by-Side function
L.control.sideBySide(beforeLayer, afterLayer).addTo(map);
