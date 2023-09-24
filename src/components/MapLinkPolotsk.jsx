import React from 'react';
import '../style/MapLinkPolotsk.css';
import '../style/MapButton.css';
import Pointer from '../components/Pointer';
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
