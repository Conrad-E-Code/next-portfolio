"use client";
import React, { useState } from 'react'
import countries from "../data/countries.json"
import { MapContainer, TileLayer, GeoJSON, Marker, Tooltip} from 'react-leaflet'
const MyMap = () => {
    const [pickedColor, setPickedColor] = useState("#8a20bc")
    const [pickedBorder, setPickedBorder] = useState("#8a20bc")
  const [pickedThickness, setPickedThickness] = useState("2")
const countryStyle = {
    fillOpacity: 0.5,
    color: pickedBorder,
    weight: pickedThickness
}

const colors = ["blue", "red", "green", "purple", "yellow"]
function changeCountryColor(event) {
    event.target.setStyle({
        fillColor: document.querySelector("#color-picker").value,
        fillOpacity: 0.6
    })
}

function onEachCountry(feature, layer) {
    const cntryName = feature["properties"]["ADMIN"]

    const isoa3 = feature["properties"]["ISO_A3"]

    console.log(cntryName)
    console.log(layer)
    // layer.options.fillOpacity = Math.random()
    layer.options.fillColor = colors[Math.floor(Math.random() * 5)]
    layer.bindPopup(cntryName)
    layer.bindTooltip(isoa3, { sticky: true, opacity: 0.8
    })
    layer.on({
        click: ()=>{console.log("click")},
        mouseover: 
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
  <>
    <div id="map">
    <MapContainer center={[47.608013, -122.335167]} zoom={1} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}  />
  <GeoJSON style={countryStyle} data={countries} onEachFeature={onEachCountry}>
  {/* <Tooltip direction="bottom" offset={[0, 20]} opacity={1} >
        tooltip
      </Tooltip> */}
  </GeoJSON>
</MapContainer>
</div>
<div className='flex'>
<div className='flex ring p-1 m-4 w-1/4 justify-evenly'> <p>Paintbrush Color:</p>
<input id="color-picker" type='color' value={pickedColor} onChange={(e) => { e.preventDefault() 
setPickedColor(e.target.value)
console.log(pickedColor)}} />
</div>
<div className='flex ring p-1 m-4 w-1/4 justify-evenly'> <p>Border Color:</p>
<input id="color-picker" type='color' value={pickedBorder} onChange={(e) => { e.preventDefault() 
setPickedBorder(e.target.value)
console.log(pickedColor)}} />
</div>
<div className='flex ring p-1 m-4 w-1/4 justify-evenly'> <p>Border Thickness:</p>
<input id="color-picker" type='range' min={0} max={4} step={0.25}  value={pickedThickness} onChange={(e) => { e.preventDefault() 
setPickedThickness(e.target.value)
console.log(pickedThickness)}} />
</div>
</div>
</>
  )
}

export default MyMap