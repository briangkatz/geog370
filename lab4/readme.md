# GEOG 370
**GEOG 370 Cartography | Oregon State University | Winter 2020**

**TA: [Brian G. Katz](https://github.com/briangkatz) - katzbr@oregonstate.edu**

---

### Lab 4

#### [Projections](index.html)

- How can projections affect the representation of a study area?

---

### Code Walkthrough

`main.js`

##### Step 1: Set CRS and Bounding Box

```javascript
// Set coordinate reference system
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

// Set bounding box
var corner1 = L.latLng(55, -170),
    corner2 = L.latLng(-20, 0),
    bounds = L.latLngBounds(corner1, corner2);
```

##### Step 2: Map

```javascript
// Define map object and parameters
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

// Add zoom button
L.control.zoom({position: "bottomright"}).addTo(mymap);
```

##### Step 3: Style

```javascript
// Set polygon style
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
```

##### Step 4: Data

```javascript
// Add spatial data layer
oregon = L.geoJson.ajax("assets/oregon.geojson", {
    style: style
}).addTo(mymap);
```

##### Step 5: Legend

```javascript
// Define legend
var legend1 = L.control({position: 'topleft'});
// set legend color scale and breaks
legend1.onAdd = function () {
    var div = L.DomUtil.create('div', 'legend13');
    div.innerHTML += '<b>Albers Equal Area (EPSG:3085)</b>';
    return div;
};
legend1.addTo(mymap);
```

##### Step 6: Graticules

```javascript
// Add graticule
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
```