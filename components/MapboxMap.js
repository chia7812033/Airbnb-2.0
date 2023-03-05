import Map from "react-map-gl";
import { useState } from "react";

function MapboxMap() {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });

  return (
    <Map
      {...viewState}
      mapStyle='mapbox://styles/chia7812033/clev3xr9h000r01p2j2o1p4zy'
      mapboxAccessToken={process.env.MAPBOX_TOKEN}
      onMove={(evt) => setViewState(evt.viewState)}
    />
  );
}

export default MapboxMap;
