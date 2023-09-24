import React from 'react';
import '../../style/MapLinkStyle/MapLinkGrodno.css';
import '../../style/MapLinkStyle/MapButton.css';
import Pointer from './Pointer';
function MapLinkGrodno() {
  return (
    <>
      <button type="button" className="map-button grodno__map-button">
        Гродно
        <Pointer />
      </button>{' '}
    </>
  );
}

export default MapLinkGrodno;