import React from 'react';
import '../style/MapLinkMinsk.css';
import '../style/MapButton.css';
import Pointer from '../components/Pointer';
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
