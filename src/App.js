import React from 'react';
import './App.css';
import mapImage from './images/bg-map.png';
import MapLinkPolotsk from './components/MapLinkPolotsk';
import MapLinkVitebsk from './components/MapLinkVitebsk';
import MapLinkMogilev from './components/MapLinkMogilev';
import MapLinkMinsk from './components/MapLinkMinsk';
import MapLinkGrodno from './components/MapLinkGrodno';
import MapLinkGomel from './components/MapLinkGomel';
import MapLinkBrest from './components/MapLinkBrest';

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
