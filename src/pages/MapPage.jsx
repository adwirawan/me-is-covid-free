import React, {useState, useRef} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import './MapPage.css';
import markerIconPng from "../assets/location.png";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from "leaflet";


function MapPage(){
  const [center, setCenter] = useState({lat:-37.83,lng:144.946457});
  const ZOOM_LEVEL = 12;
  const position_0 = [-37.8462, 144.9827];
  const position_1 = [-37.810577618058225, 144.96715330455638];
  const position_2 = [-37.81263810886049, 144.96711189933336];
  const position_3 = [-37.79142499931339, 144.95004089011684];
  const position_4 = [-37.79752367112733, 144.95634969779093];
  const position_5 = [-37.848250316328645, 144.99361702713554];
  const position_6 = [-37.833347667292884, 144.94636173057762];
  const position_7 = [-37.81333188705081, 144.99636898641663];

  return (
    <div>
      <h1>React Leaflet Map</h1>
      <div>
        <h2>React Open Street Maps</h2>
        <div>
          <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          >
            <TileLayer
            url="https://api.maptiler.com/maps/pastel/256/{z}/{x}/{y}.png?key=CYPQnnmtAP32iCzx9DVq"
            attribution="https://api.maptiler.com/maps/pastel/256/{z}/{x}/{y}.png?key=CYPQnnmtAP32iCzx9DVq"
            />
            <Marker position={position_0} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 25]})}>
              <Popup>Alfred Health - The Alfred Hospital</Popup>
            </Marker>
            <Marker position={position_1} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 25]})}>
              <Popup>4Cyte Pathology - Melbourne CBD</Popup>
            </Marker>
            <Marker position={position_2} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 25]})}>
              <Popup>Bourke Street</Popup>
            </Marker>
            <Marker position={position_3} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 25]})}>
              <Popup>The Royal Children's Hospital</Popup>
            </Marker>
            <Marker position={position_4} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 25]})}>
              <Popup>The Royal Melbourne Hospital</Popup>
            </Marker>
            <Marker position={position_5} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 25]})}>
              <Popup>Prahran Respiratory Clinic (Star Health - Prahran Town Hall)</Popup>
            </Marker>
            <Marker position={position_6} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 25]})}>
              <Popup>Port Melbourne Respiratory Clinic (Port Melbourne Medical)</Popup>
            </Marker>
            <Marker position={position_7} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 25]})}>
              <Popup>Richmond Residential Towers</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default MapPage;
