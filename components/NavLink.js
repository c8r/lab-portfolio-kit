'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavLink = (0, _glamorous2.default)('a')(function (props) {
  return {
    letterSpacing: '0.15em',
    lineHeight: '1',
    textTransform: 'uppercase'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight);

NavLink.defaultProps = {
  fontSize: 0,
  fontWeight: '700'
};

exports.default = NavLink;