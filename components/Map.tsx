import React, { MutableRefObject, useCallback, useEffect, useRef } from "react";
import Head from "next/head";
import mapboxgl, { Map as MapboxMap } from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const Map = () => {
  const mapContainerRef = useRef(null);
  const map: MutableRefObject<null | MapboxMap> = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      map.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-120, 35],
        zoom: 7,
      });

      map.current.on("load", () => {
        // Add a data source containing GeoJSON data.
        map.current!.addSource("solar", {
          type: "geojson",
          data: "/data/Solar_footprints.geojson",
        });

        // Add a new layer to visualize the polygon.
        map.current!.addLayer({
          id: "solar_footprints",
          type: "fill",
          source: "solar", // reference the data source
          layout: {},
          paint: {
            "fill-color": "#0080ff", // blue color fill
            "fill-opacity": 0.5,
          },
        });

        map.current!.addControl(new mapboxgl.NavigationControl());

        map.current!.on("click", "solar_footprints", clickFeatures);
      });

      return () => {
        map.current!.remove();
      };
    }
  }, []);

  const clickFeatures = useCallback((e) => {
    if (e.features) {
      const coordinates = e.features[0].geometry.coordinates[0][0];
      const county = e.features[0].properties.COUNTYNAME;
      const size = e.features[0].properties.Acres;
      const type = e.features[0].properties.type;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          `<h3>${county}</h3><p>${size.toFixed(2)} acres</p><p>${type}</p>`
        )
        .addTo(map.current!);
    }
  }, []);

  return (
    <div>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "100vh" }}
      ></div>
    </div>
  );
};

export default Map;
