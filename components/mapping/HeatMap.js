"use client";
// import React, { useRef, useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet.heat';
// const addressPoints = [
//     [51.5, -0.09, 1],


//     // Add more data points here...
//   ]

// function HeatMap() {
//     // useEffect(() => {
//     //   var map = L.map("map").setView([51.5, -0.09,], 12);
  
//     //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     //     attribution:
//     //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     //   }).addTo(map);
  
//     //   const points = addressPoints
//     //     ? addressPoints.map((p) => {
//     //         return [p[0], p[1]];
//     //       })
//     //     : [];
//     //     const radiusInMiles = 100;

//     //     const latLng1 = L.latLng(51.5, -0.09);
//     //     const latLng2 = L.latLng(51.5 + (1 / 69) * radiusInMiles, -0.09); // 1 degree of latitude is approximately 69 miles
    
//     //     const radiusInPixels = map.latLngToLayerPoint(latLng2).y - map.latLngToLayerPoint(latLng1).y;
//     //     const abs = Math.abs(radiusInPixels)
//     //   L.heatLayer(points,{
//     //     minOpacity: 0.5,
//     //     max: 50,
//     //     radius: abs,
//     //     blur: 1,
//     //     gradient: {0.4: 'blue', 0.65: 'lime', 1: 'red'}

        

//     // }).addTo(map);
//     // }, []);
//     const [radiusInMiles, setRadiusInMiles] = useState(5); // Initial radius value
//     const [zoomLevel, setZoomLevel] = useState(12);
//     useEffect(() => {
//         var map = L.map("map").setView([51.5, -0.09], zoomLevel);
    
//         L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//           attribution:
//             '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);
    
//         const points = addressPoints
//           ? addressPoints.map((p) => [p[0], p[1]])
//           : [];
    
//         const latLng1 = L.latLng(51.5, -0.09);
//         const latLng2 = L.latLng(51.5 + (1 / 69) * radiusInMiles, -0.09); // 1 degree of latitude is approximately 69 miles
    
//         const radiusInPixels = map.latLngToLayerPoint(latLng2).y - map.latLngToLayerPoint(latLng1).y;
    
//         L.heatLayer(points, {
//           minOpacity: 0.5,
//           max: 50,
//           radius: Math.abs(radiusInPixels),
//           blur: 1,
//           gradient: {0.4: 'blue', 0.65: 'lime', 1: 'red'}
//         }).addTo(map);
    
//         map.on('zoomend', () => {
//           setZoomLevel(map.getZoom());
//         });
//       }, [radiusInMiles, zoomLevel]);
//     return <div id="map" style={{ height: "100vh" }}></div>;
//   }
// export default HeatMap

import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet.heat';

const addressPoints = [
  [51.5, -0.09, 1],
  // Add more data points here...
];

function HeatMap() {
  const [radiusInMiles, setRadiusInMiles] = useState(500);
  const [zoomLevel, setZoomLevel] = useState(12);
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
  }, [radiusInMiles, zoomLevel, heatLayer]);

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
