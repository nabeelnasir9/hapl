import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px', // Adjust size as needed
  height: '400px' // Adjust size as needed
};

const center = {
  lat: 41.8719, // Central latitude for Italy
  lng: 12.5674  // Central longitude for Italy
};

const locations = [
  { name: "Italy", location: { lat: 41.8719, lng: 12.5674 } },
  { name: "Turkey", location: { lat: 38.9637, lng: 35.2433 } }
];

const MapComponent = () => (
  <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
    >
      {locations.map(loc => (
        <Marker key={loc.name} position={loc.location} />
      ))}
      <></>
    </GoogleMap>
  </LoadScript>
);

export default React.memo(MapComponent);
