import * as MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw';
import { Control } from 'mapbox-gl';
import * as React from 'react';
import { MapContext } from 'react-mapbox-gl';

function noop () {
  /* do nothing */
}

type DrawHandler = (event: any) => void;

/**
 * User-facing props passed to <DrawControl />
 */
export interface DrawControlProps {
  boxSelect?: boolean;
  clickBuffer?: number;
  controls?: Partial<{
    point: boolean;
    line_string: boolean;
    polygon: boolean;
    trash: boolean;
    combine_features: boolean;
    uncombine_features: boolean;
  }>;
  default_mode?: string;
  displayControlsDefault?: boolean;
  keybindings?: boolean;
  modes?: object;
  onDrawActionable?: DrawHandler;
  onDrawCombine?: DrawHandler;
  onDrawCreate?: DrawHandler;
  onDrawDelete?: DrawHandler;
  onDrawModeChange?: DrawHandler;
  onDrawRender?: DrawHandler;
  onDrawSelectionChange?: DrawHandler;
  onDrawUncombine?: DrawHandler;
  onDrawUpdate?: DrawHandler;
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  touchBuffer?: number;
  touchEnabled?: boolean;
  userProperties?: boolean;
  styles?: object[];
}

export default class DrawControl extends React.Component<DrawControlProps> {
  static contextType = MapContext;

  static defaultProps = {
    position: 'top-left'
  };

  context!: React.ContextType<typeof MapContext>; // http://bit.ly/typescript-and-react-context

  draw?: Control;

  componentDidMount () {
    const map = this.context;
    // The map needs to be passed in the React Context, or welse we can't do
    // anything.
    if (!map || !map.getStyle()) {
      throw new Error('Map is undefined in React context.');
    }

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

    // Define a new Draw Control
    this.draw = new MapboxDraw({
      ...this.props,
      modes: {
        ...MapboxDraw.modes,
        ...modes
      }
    });

    // Add it to our map
    map.addControl(this.draw!, position);

    // Hook draw events
    map.on('draw.actionable', onDrawActionable || noop);
    map.on('draw.combine', onDrawCombine || noop);
    map.on('draw.create', onDrawCreate || noop);
    map.on('draw.delete', onDrawDelete || noop);
    map.on('draw.modechange', onDrawModeChange || noop);
    map.on('draw.render', onDrawRender || noop);
    map.on('draw.selectionchange', onDrawSelectionChange || noop);
    map.on('draw.uncombine', onDrawUncombine || noop);
    map.on('draw.update', onDrawUpdate || noop);
  }

  componentWillUnmount () {
    const map = this.context;
    if (!map || !map.getStyle()) {
      return;
    }

    if (!this.draw) {
      return;
    }
    map.removeControl(this.draw);
  }

  render () {
    return null;
  }
}
