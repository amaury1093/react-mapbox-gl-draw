import React from 'react';
import PropTypes from 'prop-types';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

export default class DrawControl extends React.Component {
  componentWillMount() {
    const { map } = this.context;
    const Draw = new MapboxDraw(this.props);
    map.addControl(Draw);
  }

  render() {
    return null;
  }
}

DrawControl.contextTypes = {
  map: PropTypes.object.isRequired,
};

DrawControl.propTypes = {
  keybindings: PropTypes.bool,
  touchEnabled: PropTypes.bool,
  boxSelect: PropTypes.bool,
  clickBuffer: PropTypes.number,
  touchBuffer: PropTypes.number,
  controls: PropTypes.shape({
    point: PropTypes.bool,
    line_string: PropTypes.bool,
    polygon: PropTypes.bool,
    trash: PropTypes.bool,
    combine_features: PropTypes.bool,
    uncombine_features: PropTypes.bool,
  }),
  displayControlsDefault: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.object),
  modes: PropTypes.object, // eslint-disable-line
  default_mode: PropTypes.string,
};

DrawControl.defaultProps = {
  keybindings: true,
  touchEnabled: true,
  boxSelect: true,
  clickBuffer: 2,
  touchBuffer: 25,
  controls: {
    point: true,
    line_string: true,
    polygon: true,
    trash: true,
    combine_features: true,
    uncombine_features: true,
  },
  displayControlsDefault: true,
  styles: [],
  modes: {},
  default_mode: 'simple_select',
};
