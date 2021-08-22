import React, {useState, useEffect, useRef} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import {Link} from 'react-router-dom';
import './MapPage.css';
import Button from "@material-ui/core/Button";
import markerIconPng from "../assets/location.png";
import bgMap from "../assets/bg-map.jpg"

import { MapContainer, TileLayer, Marker, Popup, Circle, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from "leaflet";

const defaultCenter = [-36.9848, 143.3906]
var defaultZoom = 6

function LocationMarker() {

  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, 13)
    },
  })

  return position === null ? null : (
    <Circle center={position} radius ={1500}>
    </Circle>
  )
}

function MapPage(){
  const sites = [
    {
      name: "Alfred Health - The Alfred Hospital",
      address: "55 Commercial Road, Melbourne",
      position:[-37.8462, 144.9827]
    },
    {
      name: "4Cyte Pathology - Melbourne CBD",
      address: "231 Russell Street, Melbourne",
      position: [-37.810577618058225, 144.96715330455638]
    },
    {
      name: "Bourke Street",
      address: "227 Bourke Street, Melbourne",
      position: [-37.81263810886049, 144.96711189933336]
    },
    {
      name: "The Royal Children's Hospital",
      address: "50 Flemington Road, Parkville",
      position: [-37.79142499931339, 144.95004089011684]
    },
    {
      name: "The Royal Melbourne Hospital",
      address: "300 Grattan Street, Parkville",
      position: [-37.79752367112733, 144.95634969779093]
    },
    {
      name: "Prahran Respiratory Clinic (Star Health - Prahran Town Hall)",
      address: "255A Chapel Street, Prahran",
      position: [-37.848250316328645, 144.99361702713554]
    },
    {
      name: "Port Melbourne Respiratory Clinic (Port Melbourne Medical)",
      address: "405 Bay Street, Port Melbourne",
      position: [-37.833347667292884, 144.94636173057762]
    },
    {
      name: "Richmond Residential Towers",
      address: "139 Highett Street, Richmond",
      position: [-37.81333188705081, 144.99636898641663]
    },
    {
      name: "	Montague Street - South Melbourne",
      address: "32 Johnson Street, South Melbourne",
      position: [-37.8278897829124, 144.94653302072982]
    },
    {
      name: "4Cyte Pathology - South Yarra",
      address: "420 Punt Road, South Yarra",
      position: [-37.82862623064805, 144.99186253371383]
    },
    {
      name: "4Cyte Pathology - Brunswick East",
      address: "20C Leinster Grove, Brunswick East",
      position: [-37.77052898683204, 144.9728149641859]
    },
    {
      name: "Altona North Respiratory Clinic",
      address: "230 Blackshaws Road, Altona North",
      position: [-37.83013860017923, 144.86285129850776]
    },
    {
      name: "Mason Street Altona North",
      address: "257 Mason St, Altona North",
      position: [-37.83984002117767, 144.8557828561809]
    },
    {
      name: "Great Ocean Road Health - Otway Health",
      address: "75 McLachlan Street, Apollo Bay",
      position: [-38.753970076880876, 143.66452310038278]
    },
    {
      name: "Melbourne Showgrounds",
      address: "Gate 3, Langs Road, Ascot Vale",
      position: [-37.774854122932794, 144.91132540053042]
    },
    {
      name: "Melbourne Pathology - Ballarat",
      address: "63 Victoria Street, Ballarat",
      position: [-37.561882081241116, 143.8673999291936]
    },
    {
      name: "Eastern Health - Box Hill Hospital",
      address: "8 Arnold Street, Box Hill",
      position: [-37.813682103903915, 145.11870279850746]
    },
    {
      name: "Brighton Golf Club",
      address: "230 Dendy Street, Brighton",
      position: [-37.921988913967425, 145.0165020273462]
    }
  ]

  return (
    <div className="mapPage-container">
      <img src={bgMap} id="bg"/>
      <h1 className="mapPage-title">Choose Your Testing Site</h1>
      <div>
        <p>Click on a testing site that is the most convenient location for you</p>
        <p>to check out their available timeslots</p>
        <div>
          <MapContainer
          center={defaultCenter}
          zoom={defaultZoom}
          >
            <TileLayer
            url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=CYPQnnmtAP32iCzx9DVq"
            attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
            {sites.map(site => (
              <Marker position={site.position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 25]})}>
                <Popup>
                  <p className="popUp-big">{site.name}</p>
                  <p className="popUp-small">{site.address}</p>
                  <Link to={`/booking/${site.name}/selectTime`}>
                    <Button variant="contained" color="primary" size="small" className="btn-popUp">
                      Book Here
                    </Button>
                  </Link>
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
