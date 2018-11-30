import * as React from 'react';
import * as PropTypes from 'prop-types';
import { MapboxDraw } from "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw";

export class MapBoxPropTypes {
  boxSelect = PropTypes.bool;
  clickBuffer = PropTypes.number;
  controls = PropTypes.shape({
    point: PropTypes.bool,
    line_string: PropTypes.bool,
    polygon: PropTypes.bool,
    trash: PropTypes.bool,
    combine_features: PropTypes.bool,
    uncombine_features: PropTypes.bool
    });
  default_mode = PropTypes.string;
  displayControlsDefault = PropTypes.bool;
  keybindings = PropTypes.bool;
  modes = PropTypes.object;
  position = PropTypes.string;
  onDrawActionable = PropTypes.func;
  onDrawCombine = PropTypes.func;
  onDrawCreate = PropTypes.func;
  onDrawDelete = PropTypes.func;
  onDrawModeChange = PropTypes.func;
  onDrawRender = PropTypes.func;
  onDrawSelectionChange = PropTypes.func;
  onDrawUncombine = PropTypes.func;
  onDrawUpdate = PropTypes.func;
  touchBuffer = PropTypes.number;
  touchEnabled = PropTypes.bool;

  styles = PropTypes.arrayOf(PropTypes.object);
}

export default class DrawControl extends React.Component {
  static contextTypes = {
    map: PropTypes.object.isRequired
  };

  static defaultProps = {
    onDrawActionable: () => {},
    onDrawCombine: () => {},
    onDrawCreate: () => {},
    onDrawDelete: () => {},
    onDrawModeChange: () => {},
    onDrawRender: () => {},
    onDrawSelectionChange: () => {},
    onDrawUncombine: () => {},
    onDrawUpdate: () => {},
    position: 'top-left'
  };


  static propTypes = new MapBoxPropTypes();

  draw?: MapboxDraw;

  componentWillMount () {
    const {
      modes,
      onDrawActionable,
      onDrawCombine,
      onDrawCreate,
      onDrawDelete,
      onDrawModeChange,
      onDrawRender,
      onDrawSelectionChange,
      onDrawUncombine,
      onDrawUpdate,
      position
    } = this.props as MapBoxPropTypes;

    const { map } = this.context;

    this.draw = new MapboxDraw({
      ...this.props,
      modes: {
        ...MapboxDraw.modes,
        ...modes
      }
    });
    map.addControl(this.draw, position);

    // Hook draw events
    map.on('draw.actionable', onDrawActionable);
    map.on('draw.combine', onDrawCombine);
    map.on('draw.create', onDrawCreate);
    map.on('draw.delete', onDrawDelete);
    map.on('draw.modechange', onDrawModeChange);
    map.on('draw.render', onDrawRender);
    map.on('draw.selectionchange', onDrawSelectionChange);
    map.on('draw.uncombine', onDrawUncombine);
    map.on('draw.update', onDrawUpdate);
  }

  componentWillUnmount () {
    const { map } = this.context;
    if (!map || !map.getStyle()) {
      return;
    }
    map.removeControl(this.draw);
  }

  render () {
    return null;
  }
}
