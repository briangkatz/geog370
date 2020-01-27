// Map 1: 3-Class Proportional Population Below Poverty Line of Benton County, OR Census Tracts
var mymap = L.map('map', {center: [44.5, -123.5], zoom: 10});
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    opacity: 0,
    maxZoom: 15,
    minZoom: 9,
    detectRetina: true,
    attribution: 'Benton County Census Tracts (2000) &copy; U.S. Census | Author: Brian G. Katz'
}).addTo(mymap);

colors = chroma.scale('YlOrRd').mode('hsl').colors(3);
function setColor(proportion) {
    var id = 0;
    if (proportion > 0.314 && proportion <= 0.585) { id = 2; }
    else if (proportion > 0.147 && proportion <= 0.314) { id = 1; }
    else  { id = 0; }
    return colors[id];
}
function style(feature) {
    return {
        fillColor: setColor(feature.properties.P087002 / feature.properties.P001001),
        fillOpacity: 1,
        weight: 1,
        opacity: 1,
        color: '#000000'
    };
}

var geojson = null;
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
    $(".update").html('<b>Population below poverty line:<br>' + ((layer.feature.properties.P087002 / layer.feature.properties.P001001)*100).toFixed(2) + '%</b><br> in  ' + layer.feature.properties.CNAME + '');
}
function zoomToFeature(e) {
    mymap.fitBounds(e.target.getBounds());
}
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    $(".update").html("Hover over a census tract");
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        click: zoomToFeature,
        mouseout: resetHighlight
    });
}
geojson = L.geoJson.ajax("assets/benton.geojson", {
    style: style,
    onEachFeature: onEachFeature
}).addTo(mymap);

var legend = L.control({position: 'topright'});
legend.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<b>Population Below Poverty Line</b><br />';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p><=0.59</p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p><=0.31</p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p><=0.15</p>';
    return div;
};
legend.addTo(mymap);

L.control.scale({position: 'bottomleft'}).addTo(mymap);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Map 2: 7-Class Proportional Population Below Poverty Line of Benton County, OR Census Tracts
var mymap2 = L.map('map2', {center: [44.5, -123.5], zoom: 10});
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    opacity: 0,
    maxZoom: 15,
    minZoom: 9,
    detectRetina: true,
    attribution: 'Benton County Census Tracts (2000) &copy; U.S. Census | Author: Brian G. Katz'
}).addTo(mymap2);

colors2 = chroma.scale('YlOrRd').mode('hsl').colors(7);
function setColor2(proportion) {
    var id = 0;
    if (proportion > 0.437 && proportion <= 0.585) { id = 6; }
    else if (proportion > 0.314 && proportion <= 0.437) { id = 5; }
    else if (proportion > 0.221 && proportion <= 0.314) { id = 4; }
    else if (proportion > 0.147 && proportion <= 0.221) { id = 3; }
    else if (proportion > 0.080 && proportion <= 0.147) { id = 2; }
    else if (proportion > 0.028 &&  proportion <= 0.080) { id = 1; }
    else  { id = 0; }
    return colors2[id];
}
function style2(feature) {
    return {
        fillColor: setColor2(feature.properties.P087002 / feature.properties.P001001),
        fillOpacity: 1,
        weight: 1,
        opacity: 1,
        color: '#000000'
    };
}

var geojson2 = null;
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
    $(".update2").html('<b>Population below poverty line:<br>' + ((layer2.feature.properties.P087002 / layer2.feature.properties.P001001)*100).toFixed(2) + '%</b><br> in  ' + layer2.feature.properties.CNAME + '');
}
function zoomToFeature2(e) {
    mymap2.fitBounds(e.target.getBounds());
}
function resetHighlight2(e) {
    geojson2.resetStyle(e.target);
    $(".update2").html("Hover over a census tract");
}
function onEachFeature2(feature, layer) {
    layer.on({
        mouseover: highlightFeature2,
        click: zoomToFeature2,
        mouseout: resetHighlight2
    });
}
geojson2 = L.geoJson.ajax("assets/benton2.geojson", {
    style: style2,
    onEachFeature: onEachFeature2
}).addTo(mymap2);

var legend2 = L.control({position: 'topright'});
legend2.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend2');
    div.innerHTML += '<b>Population Below Poverty Line</b><br />';
    div.innerHTML += '<i style="background: ' + colors2[6] + '; opacity: 0.5"></i><p><=0.59</p>';
    div.innerHTML += '<i style="background: ' + colors2[5] + '; opacity: 0.5"></i><p><=0.44</p>';
    div.innerHTML += '<i style="background: ' + colors2[4] + '; opacity: 0.5"></i><p><=0.31</p>';
    div.innerHTML += '<i style="background: ' + colors2[3] + '; opacity: 0.5"></i><p><=0.22</p>';
    div.innerHTML += '<i style="background: ' + colors2[2] + '; opacity: 0.5"></i><p><=0.15</p>';
    div.innerHTML += '<i style="background: ' + colors2[1] + '; opacity: 0.5"></i><p><=0.08</p>';
    div.innerHTML += '<i style="background: ' + colors2[0] + '; opacity: 0.5"></i><p><=0.03</p>';
    return div;
};
legend2.addTo(mymap2);

L.control.scale({position: 'bottomleft'}).addTo(mymap2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Map 3: 5-Class Proportional Population Below Poverty Line of Benton County, OR Census Tracts
var mymap3 = L.map('map3', {center: [44.5, -123.5], zoom: 10});
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    opacity: 0,
    maxZoom: 15,
    minZoom: 9,
    detectRetina: true,
    attribution: 'Benton County Census Tracts (2000) &copy; U.S. Census | Author: Brian G. Katz'
}).addTo(mymap3);

colors3 = chroma.scale('YlOrRd').mode('hsl').colors(5);
function setColor3(proportion) {
    var id = 0;
    if (proportion > 0.378 && proportion <= 0.585) { id = 4; }
    else if (proportion > 0.221 && proportion <= 0.378) { id = 3; }
    else if (proportion > 0.147 && proportion <= 0.221) { id = 2; }
    else if (proportion > 0.062 &&  proportion <= 0.147) { id = 1; }
    else  { id = 0; }
    return colors3[id];
}
function style3(feature) {
    return {
        fillColor: setColor3(feature.properties.P087002 / feature.properties.P001001),
        fillOpacity: 1,
        weight: 1,
        opacity: 1,
        color: '#000000'
    };
}

var geojson3 = null;
function highlightFeature3(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 8,
        opacity: 0.8,
        color: '#fdffdc',
        fillColor: '#ffff18',
        fillOpacity: 0.5
    });
    layer.bringToFront();
    $(".update3").html('<b>Population below poverty line:<br>' + ((layer.feature.properties.P087002 / layer.feature.properties.P001001)*100).toFixed(2) + '%</b><br> in  ' + layer.feature.properties.CNAME + '');
}
function zoomToFeature3(e) {
    mymap3.fitBounds(e.target.getBounds());
}
function resetHighlight3(e) {
    geojson3.resetStyle(e.target);
    $(".update3").html("Hover over a census tract");
}
function onEachFeature3(feature, layer) {
    layer.on({
        mouseover: highlightFeature3,
        click: zoomToFeature3,
        mouseout: resetHighlight3
    });
}
geojson3 = L.geoJson.ajax("assets/benton3.geojson", {
    style: style3,
    onEachFeature: onEachFeature3
}).addTo(mymap3);

var legend3 = L.control({position: 'topright'});
legend3.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend3');
    div.innerHTML += '<b>Population Below Poverty Line</b><br />';
    div.innerHTML += '<i style="background: ' + colors3[4] + '; opacity: 0.5"></i><p><=0.59</p>';
    div.innerHTML += '<i style="background: ' + colors3[3] + '; opacity: 0.5"></i><p><=0.38</p>';
    div.innerHTML += '<i style="background: ' + colors3[2] + '; opacity: 0.5"></i><p><=0.22</p>';
    div.innerHTML += '<i style="background: ' + colors3[1] + '; opacity: 0.5"></i><p><=0.15</p>';
    div.innerHTML += '<i style="background: ' + colors3[0] + '; opacity: 0.5"></i><p><=0.06</p>';
    return div;
};
legend3.addTo(mymap3);

L.control.scale({position: 'bottomleft'}).addTo(mymap3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Map 4: 9-Class Proportional Population Below Poverty Line of Benton County, OR Census Tracts
var mymap4 = L.map('map4', {center: [44.5, -123.5], zoom: 10});
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    opacity: 0,
    maxZoom: 15,
    minZoom: 9,
    detectRetina: true,
    attribution: 'Benton County Census Tracts (2000) &copy; U.S. Census | Author: Brian G. Katz'
}).addTo(mymap4);

colors4 = chroma.scale('YlOrRd').mode('hsl').colors(9);
function setColor4(proportion) {
    var id = 0;
    if (proportion > 0.491 && proportion <= 0.585) { id = 8; }
    else if (proportion > 0.378 && proportion <= 0.491) { id = 7; }
    else if (proportion > 0.314 && proportion <= 0.378) { id = 6; }
    else if (proportion > 0.221 && proportion <= 0.314) { id = 5; }
    else if (proportion > 0.166 && proportion <= 0.221) { id = 4; }
    else if (proportion > 0.108 && proportion <= 0.166) { id = 3; }
    else if (proportion > 0.062 && proportion <= 0.108) { id = 2; }
    else if (proportion > 0.026 &&  proportion <= 0.062) { id = 1; }
    else  { id = 0; }
    return colors4[id];
}
function style4(feature) {
    return {
        fillColor: setColor4(feature.properties.P087002 / feature.properties.P001001),
        fillOpacity: 1,
        weight: 1,
        opacity: 1,
        color: '#000000'
    };
}

var geojson4 = null;
function highlightFeature4(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 8,
        opacity: 0.8,
        color: '#fdffdc',
        fillColor: '#ffff18',
        fillOpacity: 0.5
    });
    layer.bringToFront();
    $(".update4").html('<b>Population below poverty line:<br>' + ((layer.feature.properties.P087002 / layer.feature.properties.P001001)*100).toFixed(2) + '%</b><br> in  ' + layer.feature.properties.CNAME + '');
}
function zoomToFeature4(e) {
    mymap4.fitBounds(e.target.getBounds());
}
function resetHighlight4(e) {
    geojson4.resetStyle(e.target);
    $(".update4").html("Hover over a census tract");
}
function onEachFeature4(feature, layer) {
    layer.on({
        mouseover: highlightFeature4,
        click: zoomToFeature4,
        mouseout: resetHighlight4
    });
}
geojson4 = L.geoJson.ajax("assets/benton4.geojson", {
    style: style4,
    onEachFeature: onEachFeature4
}).addTo(mymap4);

var legend4 = L.control({position: 'topright'});
legend4.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend4');
    div.innerHTML += '<b>Population Below Poverty Line</b><br />';
    div.innerHTML += '<i style="background: ' + colors4[8] + '; opacity: 0.5"></i><p><=0.59</p>';
    div.innerHTML += '<i style="background: ' + colors4[7] + '; opacity: 0.5"></i><p><=0.49</p>';
    div.innerHTML += '<i style="background: ' + colors4[6] + '; opacity: 0.5"></i><p><=0.38</p>';
    div.innerHTML += '<i style="background: ' + colors4[5] + '; opacity: 0.5"></i><p><=0.31</p>';
    div.innerHTML += '<i style="background: ' + colors4[4] + '; opacity: 0.5"></i><p><=0.22</p>';
    div.innerHTML += '<i style="background: ' + colors4[3] + '; opacity: 0.5"></i><p><=0.17</p>';
    div.innerHTML += '<i style="background: ' + colors4[2] + '; opacity: 0.5"></i><p><=0.11</p>';
    div.innerHTML += '<i style="background: ' + colors4[1] + '; opacity: 0.5"></i><p><=0.06</p>';
    div.innerHTML += '<i style="background: ' + colors4[0] + '; opacity: 0.5"></i><p><=0.03</p>';
    return div;
};
legend4.addTo(mymap4);

L.control.scale({position: 'bottomleft'}).addTo(mymap4);
