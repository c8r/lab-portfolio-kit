'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Svg = (0, _glamorous2.default)('svg')(function (props) {
  return {
    display: 'block'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

Svg.defaultProps = {
  fill: 'currentColor',
  height: 32,
  mx: 2,
  viewBox: '0 0 24 24',
  width: 32
};

exports.default = Svg;