import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import DrawControl from '../../lib';
import './App.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
});

export function App() {
  const onDrawCreate = ({ features }) => {
    console.log(features);
  };

  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };

  return (
    <div>
      <h2>Welcome to react-mapbox-gl-draw</h2>
      <Map
        style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
        containerStyle={{
          height: '600px',
          width: '100vw'
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
      </Map>
    </div>
  );
}
