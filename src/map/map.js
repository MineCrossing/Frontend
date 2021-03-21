import React from 'react';
import './map.css';

function Map() {
    return (
        <div>
            <h1 className="text-header">World Map</h1>
            <p>
                Use our world map to view in-game structures, navigate around cities and find new exciting areas to explore!
                <br />
                There are a variety of markers on the map indicating areas of interest as well as an option to toggle the 3D renderer.
                <br />
                <br />
                In order to enable the 3D world view use the side bar on the map and select <code>Surface</code> view (the green cube).
            </p>

            <div id="map-container">
                <iframe id="world-map" src="https://map.minecrossing.xyz" title="World Map"></iframe>
            </div>
        </div>
    )
}

export default Map;