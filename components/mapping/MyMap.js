"use client";
import React, { useState, useRef, useEffect } from "react";
import countries from "../../data/countries.json";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Tooltip,
} from "react-leaflet";
const MyMap = () => {
  const inputRef = useRef(null);
  const mapRef = useRef(null)
  const [heatmapData, setHeatmapData] = useState([
    [51.5, -0.09, 1],
    [51.505, -0.1, 0.5],
    // Add more data points here...
  ]);
  useEffect(() => {
    if (!mapRef.current) return;
    const map = L.map(mapRef.current);

    map.setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const heatLayer = L.heatLayer(heatmapData, { radius: 25, blur: 15 }).addTo(map);

    return () => {
      map.remove();
    };
  }, [heatmapData]);

  function handleClick() {
    inputRef.current.focus({ focusVisible: true });
    console.log(inputRef.current);
  }

  function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }

  const [pickedColor, setPickedColor] = useState("#8a20bc");
  const [pickedBorder, setPickedBorder] = useState("#8a20bc");
  const [pickedThickness, setPickedThickness] = useState("2");
  const countryStyle = {
    fillOpacity: 0.5,
    color: pickedBorder,
    weight: pickedThickness,
  };

  const colors = ["blue", "red", "green", "purple", "yellow"];
  function changeCountryColor(event) {
    event.target.setStyle({
      fillColor: document.querySelector("#color-picker").value,
      fillOpacity: 0.6,
    });
  }

  function onEachCountry(feature, layer) {
    const cntryName = feature["properties"]["ADMIN"];

    const isoa3 = feature["properties"]["ISO_A3"];

    console.log(cntryName);
    console.log(layer);
    layer.options.fillColor = colors[Math.floor(Math.random() * 5)];
    layer.bindPopup(cntryName);
    layer.bindTooltip(isoa3, { sticky: true, opacity: 0.8 });
    layer.on({
      click: () => {
        console.log("click");
        document.documentElement.style.setProperty(
          "--popup-bg-color",
          randomColor()
        );
      },
      mouseover: changeCountryColor,
    });
  }

  return (
    <>
      <div>{false}</div>
      <div id="map">
        <MapContainer
          center={[47.608013, -122.335167]}
          zoom={1}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} />
          <GeoJSON
            style={countryStyle}
            data={countries}
            onEachFeature={onEachCountry}
          >
          </GeoJSON>
        </MapContainer>
      </div>
      <div className="flex">
        <div className="flex ring p-1 m-4 w-1/4 justify-evenly">
          {" "}
          <button onClick={handleClick}>Pick Paint Color</button>
          <input
            ref={inputRef}
            id="color-picker"
            type="color"
            value={pickedColor}
            onChange={(e) => {
              e.preventDefault();
              setPickedColor(e.target.value);

              console.log(pickedColor);
            }}
          />
        </div>
        <div className="flex ring p-1 m-4 w-1/4 justify-evenly">
          {" "}
          <p>Border Color:</p>
          <input
            id="border-picker"
            type="color"
            value={pickedBorder}
            onChange={(e) => {
              e.preventDefault();
              setPickedBorder(e.target.value);
              console.log(pickedColor);
            }}
          />
        </div>
        <div className="flex ring p-1 m-4 w-1/4 justify-evenly">
          {" "}
          <p>Border Thickness:</p>
          <input
            id="thick-picker"
            type="range"
            min={0}
            max={4}
            step={0.25}
            value={pickedThickness}
            onChange={(e) => {
              e.preventDefault();
              setPickedThickness(e.target.value);
              console.log(pickedThickness);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MyMap;
