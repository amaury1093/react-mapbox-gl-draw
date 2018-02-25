import React from "react";
import PropTypes from "prop-types";
import MapboxDraw from "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw";

export default class DrawControl extends React.Component {
  componentWillMount() {
    //if custom modes, add to Mapbox draw modes
    const modes = MapboxDraw.modes;
    if (this.props.modes) {
      for (const mode in this.props.modes) {
        modes[mode] = this.props.modes[mode];
      }
    }
    const mapboxDrawProps = {
      ...this.props,
      modes: modes
    };
    this.draw = new MapboxDraw(mapboxDrawProps);
    this.context.map.addControl(this.draw, this.props.position);
    //hook draw events
    this.context.map.on("draw.create", this.props.onDrawCreate);
    this.context.map.on("draw.delete", this.props.onDrawDelete);
    this.context.map.on("draw.update", this.props.onDrawUpdate);
    this.context.map.on("draw.combine", this.props.onDrawCombine);
    this.context.map.on("draw.uncombine", this.props.onDrawUncombine);
    this.context.map.on(
      "draw.selectionchange",
      this.props.onDrawSelectionChange
    );
    this.context.map.on("draw.modechange", this.props.onDrawModeChange);
    this.context.map.on("draw.render", this.props.onDrawRender);
    this.context.map.on("draw.actionable", this.props.onDrawActionable);
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
  map: PropTypes.object.isRequired
};

DrawControl.defaultProps = {
  position: "top-left",
  onDrawCreate: () => {},
  onDrawDelete: () => {},
  onDrawUpdate: () => {},
  onDrawCombine: () => {},
  onDrawUncombine: () => {},
  onDrawSelectionChange: () => {},
  onDrawModeChange: () => {},
  onDrawRender: () => {},
  onDrawActionable: () => {}
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
    uncombine_features: PropTypes.bool
  }),
  displayControlsDefault: PropTypes.bool,
  styles: PropTypes.arrayOf(PropTypes.object),
  modes: PropTypes.object, // eslint-disable-line
  default_mode: PropTypes.string
};
