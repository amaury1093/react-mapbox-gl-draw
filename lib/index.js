"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mapboxGlDraw = require("@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw");

var _mapboxGlDraw2 = _interopRequireDefault(_mapboxGlDraw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrawControl = function (_React$Component) {
  _inherits(DrawControl, _React$Component);

  function DrawControl() {
    _classCallCheck(this, DrawControl);

    return _possibleConstructorReturn(this, (DrawControl.__proto__ || Object.getPrototypeOf(DrawControl)).apply(this, arguments));
  }

  _createClass(DrawControl, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.draw = new _mapboxGlDraw2.default(this.props);
      this.context.map.addControl(this.draw, this.props.position);
      this.context.map.on("draw.create", this.props.onDrawCreate);
      this.context.map.on("draw.delete", this.props.onDrawDelete);
      this.context.map.on("draw.update", this.props.onDrawUpdate);
      this.context.map.on("draw.combine", this.props.onDrawCombine);
      this.context.map.on("draw.uncombine", this.props.onDrawUncombine);
      this.context.map.on("draw.selectionchange", this.props.onDrawSelectionChange);
      this.context.map.on("draw.modechange", this.props.onDrawModeChange);
      this.context.map.on("draw.render", this.props.onDrawRender);
      this.context.map.on("draw.actionable", this.props.onDrawActionable);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.context.map || !this.context.map.getStyle()) {
        return;
      }
      this.context.map.removeControl(this.draw);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return DrawControl;
}(_react2.default.Component);

exports.default = DrawControl;


DrawControl.contextTypes = {
  map: _propTypes2.default.object.isRequired
};

DrawControl.defaultProps = {
  position: "top-left",
  onDrawCreate: function onDrawCreate() {},
  onDrawDelete: function onDrawDelete() {},
  onDrawUpdate: function onDrawUpdate() {},
  onDrawCombine: function onDrawCombine() {},
  onDrawUncombine: function onDrawUncombine() {},
  onDrawSelectionChange: function onDrawSelectionChange() {},
  onDrawModeChange: function onDrawModeChange() {},
  onDrawRender: function onDrawRender() {},
  onDrawActionable: function onDrawActionable() {}
};

DrawControl.propTypes = {
  onDrawCreate: _propTypes2.default.func,
  onDrawDelete: _propTypes2.default.func,
  onDrawUpdate: _propTypes2.default.func,
  onDrawCombine: _propTypes2.default.func,
  onDrawUncombine: _propTypes2.default.func,
  onDrawSelectionChange: _propTypes2.default.func,
  onDrawModeChange: _propTypes2.default.func,
  onDrawRender: _propTypes2.default.func,
  onDrawActionable: _propTypes2.default.func,
  keybindings: _propTypes2.default.bool,
  touchEnabled: _propTypes2.default.bool,
  boxSelect: _propTypes2.default.bool,
  clickBuffer: _propTypes2.default.number,
  touchBuffer: _propTypes2.default.number,
  position: _propTypes2.default.string,
  controls: _propTypes2.default.shape({
    point: _propTypes2.default.bool,
    line_string: _propTypes2.default.bool,
    polygon: _propTypes2.default.bool,
    trash: _propTypes2.default.bool,
    combine_features: _propTypes2.default.bool,
    uncombine_features: _propTypes2.default.bool
  }),
  displayControlsDefault: _propTypes2.default.bool,
  styles: _propTypes2.default.arrayOf(_propTypes2.default.object),
  modes: _propTypes2.default.object, // eslint-disable-line
  default_mode: _propTypes2.default.string
};