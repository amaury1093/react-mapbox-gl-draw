import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import { ContextUsage } from './ContextUsage';
import logo from './logo.svg';
import DrawControl from './react-mapbox-gl-draw';

import './App.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
});

class App extends Component {
  onDrawCreate = ({ features }) => {
    console.log(features);
  };

  onDrawUpdate = ({ features }) => {
    console.log(features);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to react-mapbox-gl-draw</h2>
        </div>
        <Map
          style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}
        >
          <ContextUsage />
          <DrawControl
            position="top-left"
            onDrawCreate={this.onDrawCreate}
            onDrawUpdate={this.onDrawUpdate}
          />
        </Map>
      </div>
    );
  }
}

export default App;
