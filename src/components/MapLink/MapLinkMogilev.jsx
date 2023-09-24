import React from 'react';
import '../../style/MapLinkStyle/MapLinkMogilev.css';
import '../../style/MapLinkStyle/MapButton.css';
import Pointer from './Pointer';
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