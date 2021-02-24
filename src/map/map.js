import React from 'react';
import './map.css';

function Map() {
    return (
        <div id="map-container">
            <iframe id="world-map" src="https://map.minecrossing.xyz" title="World Map"></iframe>
        </div>
    )
}

export default Map;