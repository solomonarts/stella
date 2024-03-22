import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { icons } from "../utils/Contants";

function Location() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB0dy46oTvw9PivnuoTzy_aa5LDp_8FNIo",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  // 0.515496, 32.607490
  const [center, setCenter] = useState({
    lat: -0.279322,
    lng: 36.071804,
  });

  const styles = [
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
  ];

  return (
    <div className="main__location">
      <div className="grid grid-flow-row grid-cols-12 map__col">
        <div className="col-span-12 md:col-span-6 map__left">
          <h4>Our Location</h4>
        </div>
        <div className="col-span-12 md:col-span-6 map__right">
          {isLoaded ? (
            <GoogleMap
              zoom={12}
              center={center}
              mapContainerStyle={{
                width: "100%",
                height: "100%",
              }}
              options={styles}
              onLoad={(map) => setMap(map)}
              clickableIcons={true}
              // onClick={onmapclick}
              // onRightClick={onmapclick}
            >
              <Marker cursor="pointer" position={center} draggable={false} />
              <Marker cursor="pointer" position={center} draggable={false} />
              <Marker cursor="pointer" position={center} draggable={false} />
              <Marker cursor="pointer" position={center} draggable={false} />
              <Marker cursor="pointer" position={center} draggable={false} />
            </GoogleMap>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Location;
