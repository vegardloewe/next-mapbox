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

### How to use listeners in Mapbox GL

You can add event listeners to your map by using the `on` method of the `map` object:

```javascript
map.on("click", "my-layer", (e) => {
  // Handle click event
});
```

This will add a click event listener to the layer with the id my-layer. The event handler function will be called whenever the user clicks on this layer.

You can remove event listeners by using the off method of the map object:

```javascript
map.off("click", "my-layer");
```

This will remove the click event listener from the layer with the id my-layer.

For more details, refer to the official Mapbox GL documentation: https://docs.mapbox.com/mapbox-gl-js/api/map/#map#on

### Mapbox Examples

Mapbox provides a variety of examples that demonstrate how to use the Mapbox GL JS library in your applications. These examples cover a wide range of topics, including how to add markers to your map, how to use Mapbox Studio styles, how to add a geocoder, and much more.

Here are a few examples:

- [Add a marker to your map](https://docs.mapbox.com/mapbox-gl-js/example/add-a-marker/): This example shows you how to add a marker to your map at a specific location.

- [Use a custom style layer with a 3D model](https://docs.mapbox.com/mapbox-gl-js/example/add-3d-model/): This example demonstrates how to use a custom style layer to add a 3D model to your map.

- [Add a geocoder](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/): This example shows you how to add a geocoder, which lets users search for places and addresses, to your map.

- [Show polygon information on click](https://docs.mapbox.com/mapbox-gl-js/example/polygon-popup-on-click/): This example demonstrates how to show a popup with information about a polygon when the user clicks on it.

You can find more examples in the [Mapbox GL JS example gallery](https://docs.mapbox.com/mapbox-gl-js/example/). Each example includes a live demo and the source code, so you can see how it works and use it as a starting point for your own applications.
