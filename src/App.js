import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import "./App.css";

let path = [];

const MapContainer = () => {
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);

  function createMapOptions(maps) {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollwheel: true,
    };
  }

  function _onClick(obj) {
    let location = { latitude: obj.lat, longitude: obj.lng };
    path.push(location);
  }
  function logfile() {
    console.log(path);
  }

  return (
    <div style={{ height: "98vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC6DN2P1h7GqFozWGvMhVc3RR-cOLUBDnM" }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={createMapOptions}
        onClick={_onClick}
      >
        <Marker lat={11.0168} lng={76.9558} name="My Marker" color="blue" />
        <Button className="success" onClick={logfile}>
          Log{" "}
        </Button>
      </GoogleMapReact>
    </div>
  );
};
export default MapContainer;
