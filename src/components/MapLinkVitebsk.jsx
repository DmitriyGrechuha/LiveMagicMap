import React from 'react';
import '../style/MapLinkVitebsk.css';
import '../style/MapButton.css';
import Pointer from '../components/Pointer';
function MapLinkVitebsk() {
  return (
    <>
      <button type="button" className="map-button vitebsk__map-button">
        Витебск
        <Pointer />
      </button>{' '}
    </>
  );
}

export default MapLinkVitebsk;
