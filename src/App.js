import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const MapContainer = () => {
  const mapContainerStyle = {
    height: "400px",
    width: "800px",
  };

  const center = {
    lat: 0,
    lng: -180,
  };

  const onLoad = (polyline) => {
    console.log("polyline: ", polyline);
  };

  const path = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];

  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    zIndex: 1,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC6DN2P1h7GqFozWGvMhVc3RR-cOLUBDnM">
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={2}
        center={center}
      >
        <Polyline onLoad={onLoad} path={path} options={options} />
        {path.map((item) => {
          return <Marker position={item} draggable={false} />;
        })}
      </GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;
