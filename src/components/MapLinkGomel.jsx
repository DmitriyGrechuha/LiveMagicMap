import React from 'react';
import '../style/MapLinkGomel.css';
import '../style/MapButton.css';
import Pointer from '../components/Pointer';
function MapLinkGomel() {
  return (
    <>
      <button type="button" className="map-button gomel__map-button">
        Гомель
        <Pointer />
      </button>{' '}
    </>
  );
}

export default MapLinkGomel;