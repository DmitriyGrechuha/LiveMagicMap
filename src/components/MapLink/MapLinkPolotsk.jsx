import React from 'react';
import '../../style/MapLinkStyle/MapLinkPolotsk.css';
import '../../style/MapLinkStyle/MapButton.css';
import Pointer from './Pointer';
function MapLinkPolotsk() {
  return (
    <>
      <button type="button" className="map-button polotsk__map-button">
        Полоцк
        <Pointer />
      </button>{' '}
    </>
  );
}

export default MapLinkPolotsk;
