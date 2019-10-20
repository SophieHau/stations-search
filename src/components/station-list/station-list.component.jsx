import React from 'react';
import './station-list.styles.css';
import { Station } from '../station/station.component';  

export const StationList = (props) => {
  return (<div className='station-list'>
    {props.stations.map(station => (
      <Station key={station.id} station={station}/>
    ))}
  </div>);
};    


export default StationList; 