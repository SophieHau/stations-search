import React, { Component } from 'react';
import './App.css';
import { StationList } from './components/station-list/station-list.component';
import { SearchBox } from './components/search-box/search-box.component'; 
import { Map } from './components/map/map.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stations : [
        {
          id: 1,
          name: 'Toronto',
          address: '205 Wellington Ave Ouest, Toronto',
          coordinates: [43.644760, -79.388370]
        },
        {
          id: 2,
          name: 'Regina',
          address: '205 Wellington Ave Ouest, Regina',
          coordinates: [50.445210, -104.618896]
        },
        {
          id: 3,
          name: 'Montreal',
          address: '205 Wellington Ave Ouest, Montreal',
          coordinates: [45.501690, -73.567253]
        },
        {
          id: 4,
          name: 'Winnipeg',
          address: '205 Wellington Ave Ouest, Winnipeg',
          coordinates: [49.895138, -97.138374]
        },
      ],  
      searchField : ''
    }
  }

  render() {
    const { stations, searchField } = this.state; 
    const filteredStations = stations.filter(station =>
      station.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
    <div className="App">
      <h1>Les stations de Radio-Canada</h1>
      <SearchBox 
        placeholder='recherche de station'
        handleChange={e => this.setState({ searchField: e.target.value })}
      />
      <StationList stations={filteredStations} />
      <div className='map-container' style={{width: '900px', height: '100vh'}}>
        <Map 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          stations={this.state.stations}
        />
      </div>
    </div>
    );
  }    
}

export default App;
