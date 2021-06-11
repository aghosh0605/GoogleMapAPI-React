import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import "./App.css";
import Card from "./UI/Card";

let path = [];

const MapContainer = () => {
  const [center] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom] = useState(11);
  const [content, setContent] = useState("Here will be the co-ordinates");

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
  let text;
  function logfile() {
    path.map((data) => {
      text = text + JSON.stringify(data);
      return text;
    });
    setContent(text);
    console.log(text);
  }

  function clearfile() {
    path = [];
    setContent("");
  }

  const example = [
    { latitude: 11.161772334254607, longitude: 76.36253828125 },
    { latitude: 11.117307553895794, longitude: 76.9063615234375 },
    { latitude: 11.257415869711503, longitude: 76.988758984375 },
  ];

  return (
    <div>
      <div className="left_map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC6DN2P1h7GqFozWGvMhVc3RR-cOLUBDnM" }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={createMapOptions}
          onClick={_onClick}
        ></GoogleMapReact>
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
