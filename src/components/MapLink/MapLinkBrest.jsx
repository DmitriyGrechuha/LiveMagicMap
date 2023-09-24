import React from 'react';
import '../../style/MapLinkStyle/MapLinkBrest.css';
import '../../style/MapLinkStyle/MapButton.css';
import Pointer from './Pointer';
function MapLinkBrest() {
  return (
    <>
      <button type="button" className="map-button brest__map-button">
        Брест
        <Pointer />
      </button>{' '}
    </>
  );
}

export default MapLinkBrest;