"use client";
import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet.heat';
import ukFreeWifi from "../../data/WiFi locations April 2020.json"
const addressPoints = [
//   [51.5, -0.09, 1],
  // Add more data points here...
];
parseGeoJSONToHeatmapData(ukFreeWifi)
function parseGeoJSONToHeatmapData(geojsonData) {
      
    if (geojsonData && geojsonData.features) {
      geojsonData.features.forEach((feature) => {
        if (feature.geometry && feature.geometry.type === "Point" && feature.geometry.coordinates) {
          const [lng, lat] = feature.geometry.coordinates;
          addressPoints.push([lat, lng, 1]); // Assign intensity of 1
        }
      });
    }
  
  }

function HeatMap() {

  const [radiusInMiles, setRadiusInMiles] = useState(0.2);
  const [zoomLevel, setZoomLevel] = useState(8);
  const [heatLayer, setHeatLayer] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([51.5, -0.09], zoomLevel);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      mapRef.current.on('zoomend', () => {
        setZoomLevel(mapRef.current.getZoom());
      });
    }

    const latLng1 = L.latLng(51.5, -0.09);
    const latLng2 = L.latLng(51.5 + (1 / 69) * radiusInMiles, -0.09);
    const radiusInPixels = mapRef.current.latLngToLayerPoint(latLng2).y - mapRef.current.latLngToLayerPoint(latLng1).y;

    const points = addressPoints
      ? addressPoints.map((p) => [p[0], p[1]])
      : [];

    const newHeatLayer = L.heatLayer(points, {
      minOpacity: 0.5,
      max: 50,
      radius: Math.abs(radiusInPixels),
      blur: 1,
      gradient: {0.4: 'blue', 0.65: 'lime', 1: 'red'}
    });

    // Remove the previous heat layer and set the new one
    if (mapRef.current && heatLayer) {
      mapRef.current.removeLayer(heatLayer);
    }

    setHeatLayer(newHeatLayer);
    newHeatLayer.addTo(mapRef.current);
  }, [radiusInMiles, zoomLevel]);

//   useEffect(() => {
//     if (!mapRef.current) {
//       mapRef.current = L.map("map").setView([51.5, -0.09], zoomLevel);

//       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       }).addTo(mapRef.current);

//       mapRef.current.on('zoomend', () => {
//         setZoomLevel(mapRef.current.getZoom());
//       });
//     }

//     const latLng1 = L.latLng(51.5, -0.09);
//     const latLng2 = L.latLng(51.5 + (1 / 69) * radiusInMiles, -0.09);
//     const radiusInPixels = mapRef.current.latLngToLayerPoint(latLng2).y - mapRef.current.latLngToLayerPoint(latLng1).y;

//     const points = addressPoints
//       ? addressPoints.map((p) => [p[0], p[1]])
//       : [];

//     const heatLayer = L.heatLayer(points, {
//       minOpacity: 0.5,
//       max: 50,
//       radius: Math.abs(radiusInPixels),
//       blur: 1,
//       gradient: {0.4: 'blue', 0.65: 'lime', 1: 'red'}
//     });

//     // Clear previous heat layer and add the new one
//     console.log("test", mapRef.current.hasLayer(heatLayer))
//     if (mapRef.current && mapRef.current.hasLayer(heatLayer)) {
//         console.log("remove layer")
//       mapRef.current.removeLayer(heatLayer);
//     }
    
//     heatLayer.addTo(mapRef.current);
//   }, [radiusInMiles, zoomLevel]);

  return (
    <div>
      <div id="map" style={{ height: "100vh" }}></div>
      <input
        type="number"
        value={radiusInMiles}
        onChange={(e) => setRadiusInMiles(parseFloat(e.target.value))}
      />
    </div>
  );
}

export default HeatMap;
