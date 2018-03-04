import React from 'react';
import PropTypes from 'prop-types';
import MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw';

export default class DrawControl extends React.Component {
  componentWillMount() {
    this.draw = new MapboxDraw({
      ...this.props,
      modes: {
        ...MapboxDraw.modes,
        ...this.props.modes,
      },
    });
    const { map } = this.context;
    map.addControl(this.draw, this.props.position);
    // hook draw events
    map.on('draw.create', this.props.onDrawCreate);
    map.on('draw.delete', this.props.onDrawDelete);
    map.on('draw.update', this.props.onDrawUpdate);
    map.on('draw.combine', this.props.onDrawCombine);
    map.on('draw.uncombine', this.props.onDrawUncombine);
    map.on('draw.selectionchange', this.props.onDrawSelectionChange);
    map.on('draw.modechange', this.props.onDrawModeChange);
    map.on('draw.render', this.props.onDrawRender);
    map.on('draw.actionable', this.props.onDrawActionable);
  }

  componentWillUnmount() {
    if (!this.context.map || !this.context.map.getStyle()) {
      return;
    }
    this.context.map.removeControl(this.draw);
  }

  render() {
    return null;
  }
}

DrawControl.contextTypes = {
  map: PropTypes.object.isRequired,
};

DrawControl.defaultProps = {
  position: 'top-left',
  onDrawCreate: () => {},
  onDrawDelete: () => {},
  onDrawUpdate: () => {},
  onDrawCombine: () => {},
  onDrawUncombine: () => {},
  onDrawSelectionChange: () => {},
  onDrawModeChange: () => {},
  onDrawRender: () => {},
  onDrawActionable: () => {},
};

DrawControl.propTypes = {
  onDrawCreate: PropTypes.func,
  onDrawDelete: PropTypes.func,
  onDrawUpdate: PropTypes.func,
  onDrawCombine: PropTypes.func,
  onDrawUncombine: PropTypes.func,
  onDrawSelectionChange: PropTypes.func,
  onDrawModeChange: PropTypes.func,
  onDrawRender: PropTypes.func,
  onDrawActionable: PropTypes.func,
  keybindings: PropTypes.bool,
  touchEnabled: PropTypes.bool,
  boxSelect: PropTypes.bool,
  clickBuffer: PropTypes.number,
  touchBuffer: PropTypes.number,
  position: PropTypes.string,
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
