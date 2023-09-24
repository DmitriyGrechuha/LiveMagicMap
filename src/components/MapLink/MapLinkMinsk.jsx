import React from 'react';
import '../../style/MapLinkStyle/MapLinkMinsk.css';
import '../../style/MapLinkStyle/MapButton.css';
import Pointer from './Pointer';
function MapLinkMinsk() {
  return (
    <>
      <button type="button" className="map-button minsk__map-button">
        Минск
        <Pointer />
      </button>{' '}
    </>
  );
}

export default MapLinkMinsk;
