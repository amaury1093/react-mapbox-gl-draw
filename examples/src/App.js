import React, { Component } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import DrawControl from "../../";
import logo from "./logo.svg";
import DrawRectangle from 'mapbox-gl-draw-rectangle-mode';

import "./App.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w"
});


class App extends Component {
  onDrawCreate = e => {
    console.log(e);
  };
  onDrawUpdate = e => {
    console.log(e);
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to react-mapbox-gl-draw</h2>
        </div>
        <Map
          style="mapbox://styles/mapbox/outdoors-v9" // eslint-disable-line
          containerStyle={{ height: "400px", width: "100vw" }}
        >
          <DrawControl
            position="top-left"
            // displayControlsDefault={false}
            modes={{ draw_rectangle: DrawRectangle }}
            defaultMode="draw_rectangle"
            onDrawCreate={this.onDrawCreate}
            onDrawUpdate={this.onDrawUpdate}
          />
        </Map>
      </div>
    );
  }
}

export default App;
