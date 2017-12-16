'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockLInk = (0, _glamorous2.default)('a')(function (props) {
  return {
    display: 'block',
    textDecoration: 'none'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.active, _styledSystem.hover);

BlockLInk.defaultProps = {
  active: {},
  hover: {}
};

exports.default = BlockLInk;