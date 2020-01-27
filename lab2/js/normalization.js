// Map 1: Aggregate Population of Benton County, OR Census Tracts

// Create Leaflet map object, set map center and zoom level
var mymap = L.map('map', {center: [44.5, -123.5], zoom: 9});

// Add base map tile layer to Leaflet map object
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    opacity: 0,  // base map invisible
    maxZoom: 15,
    minZoom: 9,
    detectRetina: true,
    attribution: 'Benton County Census Tracts (2000) &copy; U.S. Census | Author: Brian G. Katz'
}).addTo(mymap);

// Set color palette and number of colors
colors = chroma.scale('YlOrRd').mode('hsl').colors(5);

// Function to assign colors based on attribute SQL
function setColor(attribute) {
    var id = 0;
    if (attribute > 492 && attribute <= 621) { id = 4; }
    else if (attribute > 337 && attribute <= 492) { id = 3; }
    else if (attribute > 188 &&  attribute <= 337) { id = 2; }
    else if (attribute > 85 &&  attribute <= 188) { id = 1; }
    else  { id = 0; }
    return colors[id];
}

// Function to style spatial features using attribute-based color assignment function defined above
function style(feature) {
    return {
        fillColor: setColor(feature.properties.P087002),  // Population below poverty line
        fillOpacity: 1,
        weight: 1,
        opacity: 1,
        color: '#000000'
    };
}

// Add interactivity to spatial features
// Define a null variable for use in functions below; later, geojson will refer to the actual data
var geojson = null;

// Function to highlight spatial features and update description text
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 8,
        opacity: 0.8,
        color: '#fdffdc',
        fillColor: '#ffff18',
        fillOpacity: 0.5
    });
    layer.bringToFront();
    $(".update").html('<b>Population below poverty line:<br>' + layer.feature.properties.P087002 + '</b><br>in  ' + layer.feature.properties.CNAME + '');
}

// Function to zoom to the bounding box of a spatial feature
function zoomToFeature(e) {
    mymap.fitBounds(e.target.getBounds());
}

// Function to reset highlighted spatial features and revert description text
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    $(".update").html("Hover over a census tract");
}

// Function to assign interactive functions to mouse events
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        click: zoomToFeature,
        mouseout: resetHighlight
    });
}

// Load GeoJSON spatial features and add to map object
geojson = L.geoJson.ajax("assets/benton.geojson", {
    style: style,
    onEachFeature: onEachFeature
}).addTo(mymap);

// Create a legend object and assign its position on the map
var legend = L.control({position: 'topright'});

// Add legend colors and labels, and then add to map
legend.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<b>Population Below Poverty Line (Aggregate)</b><br />';  // Legend title
    div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p><=621</p>';
    div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p><=492</p>';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p><=337</p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p><=188</p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p><=85</p>';
    return div;
};
legend.addTo(mymap);

// Add scale bar object to map
L.control.scale({position: 'bottomleft'}).addTo(mymap);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Map 2: Proportional Population of Benton County, OR Census Tracts

// Create Leaflet map object, set map center and zoom level
var mymap2 = L.map('map2', {center: [44.5, -123.5], zoom: 9});

// Add base map tile layer to Leaflet map object
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    opacity: 0,  // base map invisible
    maxZoom: 15,
    minZoom: 9,
    detectRetina: true,
    attribution: 'Benton County Census Tracts (2000) &copy; U.S. Census | Author: Brian G. Katz'
}).addTo(mymap2);

// Set color palette and number of colors
colors2 = chroma.scale('YlOrRd').mode('hsl').colors(5);

// Function to assign colors based on attribute SQL
function setColor2(attribute) {
    var id = 0;
    if (attribute > 0.378 && attribute <= 0.585) { id = 4; }
    else if (attribute > 0.221 && attribute <= 0.378) { id = 3; }
    else if (attribute > 0.147 && attribute <= 0.221) { id = 2; }
    else if (attribute > 0.062 &&  attribute <= 0.147) { id = 1; }
    else  { id = 0; }
    return colors2[id];
}

// Function to style spatial features using attribute-based color assignment function defined above
function style2(feature) {
    return {
        fillColor: setColor2(feature.properties.P087002 / feature.properties.P001001),
        fillOpacity: 1,
        weight: 1,
        opacity: 1,
        color: '#000000'
    };
}

// Add interactivity to spatial features
// Define a null variable for use in functions below; later, geojson will refer to the actual data
var geojson2 = null;

// Function to highlight spatial features and update description text
function highlightFeature2(e) {
    var layer2 = e.target;
    layer2.setStyle({
        weight: 8,
        opacity: 0.8,
        color: '#fdffdc',
        fillColor: '#ffff18',
        fillOpacity: 0.5
    });
    layer2.bringToFront();
    $(".update2").html('<b>Population below poverty line:<br>' + ((layer2.feature.properties.P087002 / layer2.feature.properties.P001001)*100).toFixed(2) + '%</b><br>in  ' + layer2.feature.properties.CNAME + '');
}

// Function to zoom to the bounding box of a spatial feature
function zoomToFeature2(e) {
    mymap2.fitBounds(e.target.getBounds());
}

// Function to reset highlighted spatial features and revert description text
function resetHighlight2(e) {
    geojson2.resetStyle(e.target);
    $(".update2").html("Hover over a census tract");
}

// Function to assign interactive functions to mouse events
function onEachFeature2(feature, layer) {
    layer.on({
        mouseover: highlightFeature2,
        click: zoomToFeature2,
        mouseout: resetHighlight2
    });
}

// Load GeoJSON spatial features and add to map object
geojson2 = L.geoJson.ajax("assets/benton2.geojson", {
    style: style2,
    onEachFeature: onEachFeature2
}).addTo(mymap2);

// Create a legend object and assign its position on the map
var legend2 = L.control({position: 'topright'});

// Add legend colors and labels, and then add to map
legend2.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend2');
    div.innerHTML += '<b>Population Below Poverty Line (Proportional)</b><br />';
    div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p><=0.59</p>';
    div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p><=0.38</p>';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p><=0.22</p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p><=0.15</p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p><=0.06</p>';
    return div;
};
legend2.addTo(mymap2);

// Add scale bar object to map
L.control.scale({position: 'bottomleft'}).addTo(mymap2);
