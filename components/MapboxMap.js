import Map, { Marker, Popup } from "react-map-gl";

import Image from "next/image";
import { classicNameResolver } from "typescript";
import { getCenter } from "geolib";
import { useState } from "react";

function MapboxMap({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const locations = searchResult.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const center = getCenter(locations);
  const [viewState, setViewState] = useState({
    longitude: center.longitude ? center.longitude : 0.5,
    latitude: center.latitude ? center.latitude : 51,
    zoom: 10,
  });

  return (
    <Map
      {...viewState}
      mapStyle='mapbox://styles/chia7812033/clev3xr9h000r01p2j2o1p4zy'
      mapboxAccessToken={process.env.MAPBOX_TOKEN}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResult.map((item) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(item)}
              className='cursor-pointer'
              aria-label='puss-pin'
            >
              📌
            </p>
          </Marker>

          {selectedLocation.long === item.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              longitude={item.long}
              latitude={item.lat}
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default MapboxMap;
