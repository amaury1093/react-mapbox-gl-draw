import * as MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw';
import { Control } from 'mapbox-gl';
import * as React from 'react';
import { MapContext } from 'react-mapbox-gl/lib/context';

function noop () {
  /* do nothing */
}

type DrawHandler = (event: any) => void;

interface Props {
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
  styles?: object[];
}

export default class DrawControl extends React.Component<Props> {
  static contextType = MapContext;

  static defaultProps = {
    onDrawActionable: noop,
    onDrawCombine: noop,
    onDrawCreate: noop,
    onDrawDelete: noop,
    onDrawModeChange: noop,
    onDrawRender: noop,
    onDrawSelectionChange: noop,
    onDrawUncombine: noop,
    onDrawUpdate: noop,
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
    map.on('draw.actionable', onDrawActionable!);
    map.on('draw.combine', onDrawCombine!);
    map.on('draw.create', onDrawCreate!);
    map.on('draw.delete', onDrawDelete!);
    map.on('draw.modechange', onDrawModeChange!);
    map.on('draw.render', onDrawRender!);
    map.on('draw.selectionchange', onDrawSelectionChange!);
    map.on('draw.uncombine', onDrawUncombine!);
    map.on('draw.update', onDrawUpdate!);
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
