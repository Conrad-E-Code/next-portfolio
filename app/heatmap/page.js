"use client";
import React from 'react'
import Heatmap from '../../components/mapping/HeatMap'

const page = () => {
    const heatmapData = [
        [51.5, -0.09, 1],
        [51.505, -0.1, 0.5],
        // Add more data points here...
      ];
  return (
    <div>page

    <Heatmap heatmapData={heatmapData} />
        
    </div>
  )
}

export default page