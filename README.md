<div align="center"><strong>NextJS Mapbox Example</strong></div>

## Development

#### Install

```sh
yarn install
```

```sh
yarn dev
```

## Introduction

This project uses Mapbox GL for creating and styling maps. Here are some basic guides on how to add and style layers in Mapbox GL.

### How to add a source in Mapbox GL

Sources in Mapbox GL are used to specify the data that will be used in your map. You can add a source to your map by using the `addSource` method of the `map` object:

```javascript
map.addSource("my-source", {
  type: "geojson",
  data: {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.0323, 38.9131],
    },
    properties: {
      title: "Mapbox DC",
      "marker-symbol": "monument",
    },
  },
});
```

This will add a GeoJSON source with the id my-source to the map. The source contains a single point feature located in Washington, D.C.

For more details, refer to the official Mapbox GL documentation: https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addsource

### How to add layers in Mapbox GL

Layers in Mapbox GL are used to specify how data should be drawn on the map. Each layer needs a source which specifies the data that the layer will render. You can add a layer to your map by using the `addLayer` method of the `map` object:

```javascript
map.addLayer({
  id: "my-layer",
  type: "fill",
  source: "my-source",
  layout: {},
  paint: {
    "fill-color": "#6a0dad",
    "fill-opacity": 0.75,
  },
});
```

For more details, refer to the official Mapbox GL documentation: https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addlayer

### How to style layers in Mapbox GL

You can style layers in Mapbox GL by using the setPaintProperty method of the map object:

```javascript
map.setPaintProperty("my-layer", "fill-color", "#ff0000");
```

This will change the fill color of the layer with the id my-layer to red.

For more details, refer to the official Mapbox GL documentation: https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setpaintproperty

### How to remove layers in Mapbox GL

You can remove a layer from your map by using the removeLayer method of the map object:

```javascript
map.removeLayer("my-layer");
```

This will remove the layer with the id my-layer from the map.

For more details, refer to the official Mapbox GL documentation: https://docs.mapbox.com/mapbox-gl-js/api/map/#map#removelayer
