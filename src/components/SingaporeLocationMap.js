import React from 'react';
import LocationMap from './LocationMap';

const SingaporeLocationMap = () => {
  const locations = [
    { coordinates: [51.505, -0.09], name: 'Location A' },
    { coordinates: [40.7128, -74.0060], name: 'Location B' },
    // Add more locations as needed
  ];

  return (
    <div>
      <h1>Sequence of Locations Map</h1>
      <LocationMap locations={locations} />
    </div>
  );
};

export default SingaporeLocationMap;
