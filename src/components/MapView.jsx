import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ location, zoom = 13 }) => {
  const position = [location.lat, location.lng];

  return (
    <MapContainer center={position} zoom={zoom} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          {location.name}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;