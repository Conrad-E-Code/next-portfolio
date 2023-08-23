"use client";
import React, { useState } from 'react'
import countries from "../data/countries.json"
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet'
const MyMap = () => {
    const [pickedColor, setPickedColor] = useState("#ffff00")


const countryStyle = {
    fillOpacity: 0.5,
    color: "black",
    weight: 2
}

const colors = ["blue", "black", "green", "purple", "yellow"]
function changeCountryColor(event) {
    event.target.setStyle({
        fillColor: document.querySelector("#color-picker").value
    })
}

function onEachCountry(feature, layer) {
    const cntryName = feature["properties"]["ADMIN"]
    console.log(cntryName)
    console.log(layer)
    // layer.options.fillOpacity = Math.random()
    layer.options.fillColor = colors[Math.floor(Math.random() * 5)]
    layer.bindPopup(cntryName)
    layer.on({
        click: 
            changeCountryColor
        // mouseout: (e) => {
        //     setTimeout(()=>{
        //         e.target.setStyle({
        //             fillColor: "yellow"
        //         })
        //     }, 2000)
        //     setTimeout(()=>{
        //         e.target.setStyle({
        //             fillColor: "orange"
        //         })
        //     }, 5000)
        //     setTimeout(()=>{
        //         e.target.setStyle({
        //             fillColor: "red"
        //         })
        //     }, 7000)
        // }
    })

}

  return (
    <div id="map">
    <MapContainer center={[47.608013, -122.335167]} zoom={3} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <GeoJSON style={countryStyle} data={countries} onEachFeature={onEachCountry}/>
</MapContainer>
<input id="color-picker" type='color' value={pickedColor} onChange={(e) => { e.preventDefault() 
setPickedColor(e.target.value)
console.log(pickedColor)}} />
</div>
  )
}

export default MyMap