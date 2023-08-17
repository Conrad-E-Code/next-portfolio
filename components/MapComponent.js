import React from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
// import { GoogleMap, useLoadScript, MarkerF, Polygon } from '@react-google-maps/api';

const MapComponent = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
    })
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "YOUR_API_KEY"
    //   })

  return (
    isLoaded? <GoogleMap zoom={10} center={center} mapContainerClassName="map-container" >

    </GoogleMap>: <div>Loading...</div>
  )
}
function SubMap() {
    return(
        <>
        WORKING ON IT!</>

    )
}

export default MapComponent