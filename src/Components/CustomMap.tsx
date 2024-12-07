import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const CustomMap: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAjInLzDOnPYECb6_t4lsO9aCGy_mqVa5M">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Tu peux ajouter des enfants ici */ }
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default CustomMap;
