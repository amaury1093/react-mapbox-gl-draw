import React from 'react';
import ReactMapboxGl, { FeatureGroup } from 'react-mapbox-gl';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w',
  });

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to react-mapbox-gl-draw</h2>
      </div>
      <Map
        style="mapbox://styles/mapbox/outdoors-v9" // eslint-disable-line
        containerStyle={{ height: '400px', width: '100vw' }}
      >
        {/* <DrawControl
        controls={{ point: false, line_string: false, combine_features: false, uncombine_features: false }}
        /> */}
      </Map>
    </div>
  );
};

export default App;
