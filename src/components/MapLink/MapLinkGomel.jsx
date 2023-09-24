import React from 'react';
import '../../style/MapLinkStyle/MapLinkGomel.css';
import '../../style/MapLinkStyle/MapButton.css';
import Pointer from './Pointer';
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