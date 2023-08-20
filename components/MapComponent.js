import React from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
// import { GoogleMap, useLoadScript, MarkerF, Polygon } from '@react-google-maps/api';
const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
const MapComponent = () => {
    // const {isLoaded} = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
    // })
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
      })
  return (
    <SubMap isLoaded={isLoaded}/>
  )
}
function SubMap({isLoaded}) {
    return(

    isLoaded ? 
    <GoogleMap zoom={10} center={center} mapContainerClassName="w-[500px] h-[500px]" >

</GoogleMap>: <div>Loading...</div>

    )
}

export default MapComponent