"use client";

import { useEffect } from 'react'

import React from 'react'
import countries from "../data/countries.json"
import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON} from 'react-leaflet'
const MyMap = () => {
useEffect(()=>{
    console.log(countries["features"][0])
},[])

let countryStyle = {
    fillColor: "red",
    fillOpacity: 0.7,
    color: "black",
    weight: 2

}

function onEachCountry(feature, layer) {
    const cntryName = feature["properties"]["ADMIN"]
    console.log(cntryName)
    layer.bindPopup(cntryName)
    layer.on({
        mouseover: (event) => {
            // console.log("event:", event.target.feature["properties"])
            console.log("POINT", event.latlng)
            console.log("COUNTRY", event.target.feature.geometry)
            event.target.setStyle({
                fillColor: "green"
            })
        },
        mouseout: (e) => {
            setTimeout(()=>{
                e.target.setStyle({
                    fillColor: "yellow"
                })
            }, 2000)
            setTimeout(()=>{
                e.target.setStyle({
                    fillColor: "orange"
                })
            }, 5000)
            setTimeout(()=>{
                e.target.setStyle({
                    fillColor: "red"
                })
            }, 7000)
        }
    })

}

  return (
    <div id="map" style={{height: "80vh", width: "80vw"}}>
    <MapContainer center={[47.608013, -122.335167]} zoom={3} scrollWheelZoom={false}>
  {/* <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  /> */}
  <GeoJSON style={countryStyle} data={countries} onEachFeature={onEachCountry}/>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

</MapContainer>
</div>
  )
}

export default MyMap