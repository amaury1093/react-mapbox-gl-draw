"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
const mapbox_gl_draw_1 = require("@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw");
class MapBoxPropTypes {
    constructor() {
        this.boxSelect = PropTypes.bool;
        this.clickBuffer = PropTypes.number;
        this.controls = PropTypes.shape({
            point: PropTypes.bool,
            line_string: PropTypes.bool,
            polygon: PropTypes.bool,
            trash: PropTypes.bool,
            combine_features: PropTypes.bool,
            uncombine_features: PropTypes.bool
        });
        this.default_mode = PropTypes.string;
        this.displayControlsDefault = PropTypes.bool;
        this.keybindings = PropTypes.bool;
        this.modes = PropTypes.object;
        this.position = PropTypes.string;
        this.onDrawActionable = PropTypes.func;
        this.onDrawCombine = PropTypes.func;
        this.onDrawCreate = PropTypes.func;
        this.onDrawDelete = PropTypes.func;
        this.onDrawModeChange = PropTypes.func;
        this.onDrawRender = PropTypes.func;
        this.onDrawSelectionChange = PropTypes.func;
        this.onDrawUncombine = PropTypes.func;
        this.onDrawUpdate = PropTypes.func;
        this.touchBuffer = PropTypes.number;
        this.touchEnabled = PropTypes.bool;
        this.styles = PropTypes.arrayOf(PropTypes.object);
    }
}
exports.MapBoxPropTypes = MapBoxPropTypes;
class DrawControl extends React.Component {
    componentWillMount() {
        const { modes, onDrawActionable, onDrawCombine, onDrawCreate, onDrawDelete, onDrawModeChange, onDrawRender, onDrawSelectionChange, onDrawUncombine, onDrawUpdate, position } = this.props;
        const { map } = this.context;
        this.draw = new mapbox_gl_draw_1.MapboxDraw(Object.assign({}, this.props, { modes: Object.assign({}, mapbox_gl_draw_1.MapboxDraw.modes, modes) }));
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
DrawControl.contextTypes = {
    map: PropTypes.object.isRequired
};
DrawControl.defaultProps = {
    onDrawActionable: () => { },
    onDrawCombine: () => { },
    onDrawCreate: () => { },
    onDrawDelete: () => { },
    onDrawModeChange: () => { },
    onDrawRender: () => { },
    onDrawSelectionChange: () => { },
    onDrawUncombine: () => { },
    onDrawUpdate: () => { },
    position: 'top-left'
};
DrawControl.propTypes = new MapBoxPropTypes();
exports.default = DrawControl;
