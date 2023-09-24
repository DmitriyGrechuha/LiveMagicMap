import React from 'react';
import '../style/MapLinkBrest.css';
import '../style/MapButton.css';
import Pointer from '../components/Pointer';
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