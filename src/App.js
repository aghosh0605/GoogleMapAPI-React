import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import Card from "./Card";
import { Button } from "react-bootstrap";
import "./App.css";
import options from "./Constrains";

let path = [];
const MapContainer = () => {
  const [content, setContent] = useState(
    "Click on Log Button to see the co-ordinates you clicked! Click Clear Button to clear the co-ordinates"
  );
  const [marker, setMarker] = useState([]);
  const [polyline, setPolyline] = useState([]);

  const center = {
    lat: 0,
    lng: -180,
  };

  function _onClick(obj) {
    let location = { lat: obj.latLng.lat(), lng: obj.latLng.lng() };
    path.push(location);
  }

  let text;
  function logfile() {
    path.map((data) => {
      text = text + JSON.stringify(data);
      return text;
    });
    setContent(
      "Click on Log Button to see the co-ordinates you clicked! Click Clear Button to clear the co-ordinates" +
        text
    );
    setPolyline(path);
    setMarker(path);
  }

  function clearfile() {
    path = [];
    setContent(
      "Click on Log Button to see the co-ordinates you clicked! Click Clear Button to clear the co-ordinates"
    );
    setPolyline([]);
    setMarker([]);
  }

  return (
    <div>
      <div className="left_map">
        <LoadScript googleMapsApiKey="AIzaSyC6DN2P1h7GqFozWGvMhVc3RR-cOLUBDnM">
          <GoogleMap
            onClick={_onClick}
            id="marker-example"
            mapContainerStyle={{ height: "100%" }}
            zoom={2}
            center={center}
          >
            <Polyline path={polyline} options={options} />
            {marker.map((item) => {
              return <Marker position={item} draggable={false} />;
            })}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="taskbar">
        <Button className="success" onClick={logfile}>
          Log
        </Button>
        <Button className="clear" onClick={clearfile}>
          clear
        </Button>
        <Card text={content} />
      </div>
    </div>
  );
};
export default MapContainer;
