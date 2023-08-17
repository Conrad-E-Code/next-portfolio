import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
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
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
      })
  return (
    <MapComponent />
  )
}

export default page