import React from 'react'

import MapComponent from '../../components/MapComponent';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

const page = () => {
    //render a map for the entire screen.

  return (
    <MapComponent />
  )
}

export default page