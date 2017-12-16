'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardLink = (0, _glamorous2.default)('a')(function (props) {
  return {
    display: 'block',
    transform: 'scale(1)',
    transition: 'transform .4s ease-in-out'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.hover);

CardLink.defaultProps = {
  color: 'black',
  hover: {
    transform: 'scale(1.02)',
    transition: 'transform .25s ease-in-out'
  }
};

exports.default = CardLink;