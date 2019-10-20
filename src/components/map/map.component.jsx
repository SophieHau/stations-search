import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

export const Map = withScriptjs(withGoogleMap((props) => {
  const [selectedStation, setSelectedStation] = useState(null);
  return (
  <GoogleMap
    defaultZoom={3.5} 
    defaultCenter={{ lat: 56.130367, lng: -106.346771 }}
  >
    {props.stations.map(station => (
      <Marker 
        key={station.id} 
        position={{ lat: station.coordinates[0], lng: station.coordinates[1] }}
        onClick={() => {
          setSelectedStation(station);
        }}
      />
    ))}

    {selectedStation && (
      <InfoWindow
        position={{ lat: selectedStation.coordinates[0], lng: selectedStation.coordinates[1] }}
        onCloseClick={() => {
          setSelectedStation(null);
        }}
      >
        <div>
          <h2>{selectedStation.name}</h2>
          <p>{selectedStation.address}</p>          
        </div></InfoWindow>
    )}
  </GoogleMap>
  )}
));

export default Map;