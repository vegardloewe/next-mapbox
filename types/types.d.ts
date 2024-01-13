interface Geometry {
  // Define your geometry properties here
}

interface Properties {
  // Define your feature properties here
}

interface Feature {
  type: "Feature";
  geometry: Geometry;
  properties: Properties;
}

interface FeatureCollection {
  type: "FeatureCollection";
  features: Feature[];
}
