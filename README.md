# react-mapbox-gl-draw

[![Travis (.org)](https://img.shields.io/travis/amaurymartiny/react-mapbox-gl-draw.svg)](https://travis-ci.org/amaurymartiny/react-mapbox-gl-draw)
[![npm](https://img.shields.io/npm/v/react-mapbox-gl-draw.svg)](https://www.npmjs.com/package/react-mapbox-gl-draw)
[![npm](https://img.shields.io/npm/dw/react-mapbox-gl-draw.svg)](https://www.npmjs.com/package/react-mapbox-gl-draw)
[![dependencies Status](https://david-dm.org/amaurymartiny/react-mapbox-gl-draw/status.svg)](https://david-dm.org/amaurymartiny/react-mapbox-gl-draw)

Draw tools for Mapbox with React: 🗺️ react-mapbox-gl + 🖌️ mapbox-gl-draw

This package is basically creating React bindings for [mapbox-gl-draw](https://github.com/mapbox/mapbox-gl-draw) so that it can be used with [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl).

> ❗ Important: This package does not work with Uber's [react-map-gl](https://github.com/uber/react-map-gl). See [this issue](https://github.com/uber/react-map-gl/issues/450) for more info.

## Demo

See https://codesandbox.io/s/xenodochial-tu-pwly8.

## Getting Started

```bash
yarn add react-mapbox-gl mapbox-gl @mapbox/mapbox-gl-draw # required peer dependencies
yarn add react-mapbox-gl-draw
```

> Note: this version of `react-mapbox-gl-draw` will only work with the latest `react-mapbox-gl@^4.4.0`. If you wish to use Draw tools with `react-mapbox-gl@2.x.x` or `react-mapbox-gl@v3.x.x`, please use [`react-mapbox-gl-draw@1.0.6`](https://github.com/amaurymartiny/react-mapbox-gl-draw/tree/v1.0.6).

```javascript
import ReactMapboxGl from 'react-mapbox-gl';
import DrawControl from 'react-mapbox-gl-draw';

// Don't forget to import the CSS
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
});

<Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
>
  <DrawControl />
</Map>;
```

## API

Here are the props you can pass to `<DrawControl />`:

- `keybindings`, boolean (default `true`): Whether or not to enable keyboard interactions for drawing.
- `touchEnabled`, boolean (default `true`): Whether or not to enable touch interactions for drawing.
- `boxSelect`, boolean (default `true`): Whether or not to enable box selection of features with `shift`+`click`+drag. If `false`, `shift`+`click`+drag zooms into an area.
- `clickBuffer`, number (default: `2`): Number of pixels around any feature or vertex (in every direction) that will respond to a click.
- `touchBuffer`, number (default: `25`): Number of pixels around any feature of vertex (in every directoin) that will respond to a touch.
- `controls`, Object: Hide or show individual controls. Each property's name is a control, and value is a boolean indicating whether the control is on or off. Available control names are `point`, `line_string`, `polygon`, `trash`, `combine_features` and `uncombine_features`. By default, all controls are on. To change that default, use `displayControlsDefault`.
- `displayControlsDefault`, boolean (default: `true`): The default value for `controls`. For example, if you would like all controls to be _off_ by default, and specify a whitelist with `controls`, use `displayControlsDefault: false`.
- `styles`, Array\<Object\>: An array of map style objects. By default, Draw provides a map style for you. To learn about overriding styles, see the [Styling Draw](#styling-draw) section below.
- `modes`, Object: over ride the default modes with your own. `MapboxDraw.modes` can be used to see the default values. More information on custom modes [can be found here](https://github.com/mapbox/mapbox-gl-draw/blob/master/docs/MODES.md).
- `defaultMode`, String (default: `'simple_select'`): the mode (from `modes`) that user will first land in.
- `position`, String (default: `'top-left'`): the position of the draw controls on the map.

### Draw Events passed as props

These additional props are functions that receive the event data, see [mapbox-gl-draw documentantion](https://github.com/mapbox/mapbox-gl-draw/blob/master/docs/API.md).

- `onDrawCreate`
- `onDrawDelete`
- `onDrawUpdate`
- `onDrawCombine`
- `onDrawUncombine`
- `onDrawSelectionChange`
- `onDrawModeChange`
- `onDrawRender`
- `onDrawActionable`

To learn more about `mapbox-gl-draw`: https://github.com/mapbox/mapbox-gl-draw/blob/master/docs/API.md

To access the [Draw object](https://github.com/mapbox/mapbox-gl-draw/blob/master/docs/API.md#api-methods) with all the API methods, you need to define a [ref](https://facebook.github.io/react/docs/refs-and-the-dom.html) on the `<DrawControl>` component, and the Draw object will be in the `draw` field of this ref:

```javascript
<Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}>
    <DrawControl
      ref={(drawControl) => { this.drawControl = drawControl; }}
    />
</Map>

//...
handleButtonClick() {
  this.drawControl.draw.getAll(); // Or any other API method
}
```

## Example

An example application of how to use `react-mapbox-gl-draw` can be found in the `example/` folder. To run it, run:

```bash
yarn example
```

The example app should run on `localhost:8080`. An online demo is also hosted on CodeSandbox: https://codesandbox.io/s/xenodochial-tu-pwly8.

## Testing

Only `semistandard` is run for linting. Proper testing needs to be added, see [#19](https://github.com/amaurymartiny/react-mapbox-gl-draw/issues/19) if you would like to help.
