// import React from 'react'
// import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
// // import { GoogleMap, useLoadScript, MarkerF, Polygon } from '@react-google-maps/api';
// const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };

//   const center = {
//     lat: -3.745,
//     lng: -38.523
//   };
// const MapComponent = () => {

//     // const { isLoaded } = useJsApiLoader({
//     //     id: 'google-map-script',
//     //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
//     //   })
//   return (
//     <SubMap />
//   )
// }
// function SubMap() {
//     //   const {isLoaded} = useLoadScript({
//     //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
//     // })
//     return(
//       <div

// //     isLoaded ?
// //     <GoogleMap zoom={10} center={center} mapContainerClassName="w-[500px] h-[500px]" >

// // </GoogleMap>: <div>Loading...</div>

//     )
// }

// export default MapComponent
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => {
  return <div className="z-40">
    {text}</div>;
};

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 59.99835602,
      lng: 30.01502627,
    },
    zoom: 1,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="📍" />
      </GoogleMapReact>
    </div>
  );
}
