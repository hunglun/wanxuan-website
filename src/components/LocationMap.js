import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = ({ locations }) => {
  const center = [0, 0]; // Set the initial center of the map

  return (
    <MapContainer center={center} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Markers for each location */}
      {locations.map((location, index) => (
        <Marker key={index} position={location.coordinates}>
          <Popup>
            <div>
              <h3>{`Location ${index + 1}`}</h3>
              <p>{`Name: ${location.name}`}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LocationMap;
