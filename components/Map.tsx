import React, { MutableRefObject, useCallback, useEffect, useRef } from "react";
import Head from "next/head";
import mapboxgl, { Map as MapboxMap } from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const Map = () => {
  const mapContainerRef = useRef(null);
  const map: MutableRefObject<null | MapboxMap> = useRef(null);
  let previousFeatureId: number | null = null;

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
            "fill-color": [
              "coalesce",
              [
                "case",
                ["all", ["boolean", ["feature-state", "selected"], false]],
                "#FFA500",
                "#0080ff",
              ],
            ],
            "fill-opacity": 0.5,
          },
        });

        map.current!.addControl(new mapboxgl.NavigationControl());

        map.current!.on("click", "solar_footprints", clickFeatures);
        map.current!.on("click", clickMap);
      });

      return () => {
        map.current!.remove();
      };
    }
  }, []);

  const clickFeatures = useCallback((e) => {
    if (e.features) {
      const featureId = e.features[0].id;
      const coordinates = [e.lngLat.lng, e.lngLat.lat];
      const county = e.features[0].properties.COUNTYNAME;
      const size = e.features[0].properties.Acres;
      const type = e.features[0].properties.type;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // If there was a previously selected feature, set its selected state to false
      if (previousFeatureId !== null) {
        map.current!.setFeatureState(
          {
            source: "solar",
            id: previousFeatureId,
          },
          { selected: false }
        );
      }

      // Set the selected state of the new feature to true
      map.current!.setFeatureState(
        {
          source: "solar",
          id: featureId,
        },
        { selected: true }
      );

      // Update the previousFeatureId to the id of the new feature
      previousFeatureId = featureId;

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          `<h3>${county}</h3><p>${size.toFixed(2)} acres</p><p>${type}</p>`
        )
        .addTo(map.current!);
    }
  }, []);

  // Resets selected features on click on map
  const clickMap = useCallback(
    (e: mapboxgl.MapLayerMouseEvent | mapboxgl.MapLayerTouchEvent) => {
      const features = map.current!.queryRenderedFeatures(e.point);

      if (features.length === 0 && previousFeatureId !== null) {
        map.current!.setFeatureState(
          {
            source: "solar",
            id: previousFeatureId,
          },
          { selected: false }
        );
        previousFeatureId = null;
      }
    },
    []
  );

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
