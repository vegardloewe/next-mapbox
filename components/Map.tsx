import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { data } from "../data/Stores";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 50],
      zoom: 4,
    });

    map.on("load", () => {
      // Add a data source containing GeoJSON data.
      map.addSource("stores", {
        type: "geojson",
        data: data,
      });

      // Add a new layer to visualize the polygon.
      map.addLayer({
        id: "stores",
        type: "circle",
        source: "stores", // reference the data source
        layout: {},
        paint: {
          "circle-color": "#0080ff", // blue color fill
          "circle-opacity": 0.5,
          "circle-stroke-color": "#fff",
          "circle-stroke-width": 1,
        },
      });
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "100vh" }}
      ></div>
    </div>
  );
};

export default Map;
