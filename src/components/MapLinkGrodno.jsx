import React from 'react';
import '../style/MapLinkGrodno.css';
import '../style/MapButton.css';
import Pointer from '../components/Pointer';
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