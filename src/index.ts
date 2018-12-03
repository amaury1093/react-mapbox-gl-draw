import * as MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw';
import { Control } from 'mapbox-gl';
import * as PropTypes from 'prop-types';
import * as React from 'react';

type DrawHandler = (event: any) => void;

interface Props {
  boxSelect: boolean;
  clickBuffer: number;
  controls: {
    point: boolean;
    line_string: boolean;
    polygon: boolean;
    trash: boolean;
    combine_features: boolean;
    uncombine_features: boolean;
  };
  default_mode: string;
  displayControlsDefault: boolean;
  keybindings: boolean;
  modes: object;
  onDrawActionable: DrawHandler;
  onDrawCombine: DrawHandler;
  onDrawCreate: DrawHandler;
  onDrawDelete: DrawHandler;
  onDrawModeChange: DrawHandler;
  onDrawRender: DrawHandler;
  onDrawSelectionChange: DrawHandler;
  onDrawUncombine: DrawHandler;
  onDrawUpdate: DrawHandler;
  position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  touchBuffer: number;
  touchEnabled: boolean;
  styles: object[];
}

export default class DrawControl extends React.Component<Props> {
  static contextTypes = {
    map: PropTypes.object.isRequired
  };

  static defaultProps = {
    position: 'top-left'
  };

  draw?: Control;

  componentWillMount() {
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
    } = this.props;

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

  componentWillUnmount() {
    const { map } = this.context;
    if (!map || !map.getStyle()) {
      return;
    }
    map.removeControl(this.draw);
  }

  render() {
    return null;
  }
}
