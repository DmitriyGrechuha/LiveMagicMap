import React from 'react';
import '../../style/MapLinkStyle/MapLinkVitebsk.css';
import '../../style/MapLinkStyle/MapButton.css';
import Pointer from './Pointer';
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
