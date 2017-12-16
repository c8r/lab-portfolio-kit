'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconLink = (0, _glamorous2.default)('a')(function (props) {
  return {
    textDecoration: 'none',
    transition: 'color .25s ease-in-out'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.hover, _styledSystem.fontWeight);

IconLink.defaultProps = {
  color: 'black',
  fontWeight: '600',
  hover: {
    color: '#07c',
    transition: 'color .25s ease-in-out'
  }
};

exports.default = IconLink;