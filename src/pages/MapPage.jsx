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

  const sites = [
    {
      name: "Alfred Health - The Alfred Hospital",
      address: "55 Commercial Road Melbourne",
      position:[-37.8462, 144.9827]
    },
    {
      name: "4Cyte Pathology - Melbourne CBD",
      address: "231 Russell Street Melbourne",
      position: [-37.810577618058225, 144.96715330455638]
    },
    {
      name: "Bourke Street",
      address: "227 Bourke Street Melbourne",
      position: [-37.81263810886049, 144.96711189933336]
    },
    {
      name: "The Royal Children's Hospital",
      address: "50 Flemington Road",
      position: [-37.79142499931339, 144.95004089011684]
    },
    {
      name: "The Royal Melbourne Hospital",
      address: "300 Grattan Street Parkville",
      position: [-37.79752367112733, 144.95634969779093]
    },
    {
      name: "Prahran Respiratory Clinic (Star Health - Prahran Town Hall)",
      address: "255A Chapel Street Prahran",
      position: [-37.848250316328645, 144.99361702713554]
    },
    {
      name: "Port Melbourne Respiratory Clinic (Port Melbourne Medical)",
      address: "405 Bay Street Port Melbourne",
      position: [-37.833347667292884, 144.94636173057762]
    },
    {
      name: "Richmond Residential Towers",
      address: "139 Highett Street Richmond",
      position: [-37.81333188705081, 144.99636898641663]
    },
    {
      name: "	Montague Street - South Melbourne",
      address: "32 Johnson Street South Melbourne",
      position: [-37.8278897829124, 144.94653302072982]
    },
    {
      name: "4Cyte Pathology - South Yarra",
      address: "420 Punt Road South Yarra",
      position: [-37.82862623064805, 144.99186253371383]
    },
    {
      name: "4Cyte Pathology - Brunswick East",
      address: "20C Leinster Grove Brunswick East",
      position: [-37.77052898683204, 144.9728149641859]
    }
  ]

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
            {sites.map(site => (
              <Marker position={site.position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 25]})}>
                <Popup>
                  <p className="popUp-big">{site.name}</p>
                  <p className="popUp-small">{site.address}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default MapPage;
