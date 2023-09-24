import React from 'react';
import '../style/MapLinkMogilev.css';
import '../style/MapButton.css';
import Pointer from '../components/Pointer';
function MapLinkMogilev() {
  return (
    <>
      <button type="button" className="map-button mogilev__map-button">
        Могилёв
        <Pointer />
      </button>{' '}
    </>
  );
}

export default MapLinkMogilev;