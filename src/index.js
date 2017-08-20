import React from 'react';
import PropTypes from 'prop-types';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

export default class DrawControl extends React.Component {
  static contextTypes = {
    map: PropTypes.object.isRequired,
  };

  static propTypes = {
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
    modes: PropTypes.object,
    default_mode: PropTypes.string
  };

  componentWillMount() {
    const { map } = this.context;
    const Draw = new MapboxDraw(this.props);
    map.addControl(Draw);
  }

  render() {
    return null;
  }
}