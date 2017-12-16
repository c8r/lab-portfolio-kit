'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelLink = (0, _glamorous2.default)('a')(function (props) {
  return {
    display: 'inline-block'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderRadius);

PanelLink.defaultProps = {
  bg: 'blue',
  borderRadius: 2,
  color: 'white',
  fontSize: 0,
  px: 2,
  py: 1
};

exports.default = PanelLink;