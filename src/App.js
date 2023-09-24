import React from 'react';
import './App.css';
import mapImage from './images/bg-map.png';
import MapLinkPolotsk from './components/MapLink/MapLinkPolotsk';
import MapLinkVitebsk from './components/MapLink/MapLinkVitebsk';
import MapLinkMogilev from './components/MapLink/MapLinkMogilev';
import MapLinkMinsk from './components/MapLink/MapLinkMinsk';
import MapLinkGrodno from './components/MapLink/MapLinkGrodno';
import MapLinkGomel from './components/MapLink/MapLinkGomel';
import MapLinkBrest from './components/MapLink/MapLinkBrest';

function App() {
  return (
    <div className="App">
      <div className="map">
        <img src={mapImage} className="mapImage" alt=" " />
        <MapLinkPolotsk />
        <MapLinkVitebsk />
        <MapLinkMogilev />
        <MapLinkMinsk />
        <MapLinkGrodno />
        <MapLinkGomel />
        <MapLinkBrest />
      </div>
    </div>
  );
}

export default App;
