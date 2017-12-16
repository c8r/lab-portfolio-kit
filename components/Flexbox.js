'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flexbox = (0, _glamorous2.default)('div')(function (props) {
  return {
    alignItems: '' + (props.top ? 'flex-start' : 'center'),
    display: 'flex',
    flexWrap: '' + (props.wrap ? 'wrap' : 'nowrap')
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

Flexbox.defaultProps = {};

exports.default = Flexbox;