"use client";

import { useEffect } from 'react'

import React from 'react'
import countries from "../data/countries.json"


import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
const MyMap = () => {
useEffect(()=>{
    console.log(countries["features"][0])
},[])

  return (
    <div id="map" style={{height: "80vh", width: "80vw"}}>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
</MapContainer>
</div>
  )
}

export default MyMap