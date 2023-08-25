"use client";
import React from 'react'
import BarrelMap from '../../components/mapping/BarrelMap';

const page = () => {
    const heatmapData = [
        [51.5, -0.09, 1],
        [51.505, -0.1, 0.5],
        // Add more data points here...
      ];
  return (
    <div>page

    <BarrelMap import="./HeatMap" />
        
    </div>
  )
}

export default page