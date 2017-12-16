'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardSubtitle = (0, _glamorous2.default)('h4')(function (props) {
  return {
    letterSpacing: '0.07em',
    lineHeight: '1.5',
    textTransform: 'uppercase'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight, _styledSystem.borderColor);

CardSubtitle.defaultProps = {
  borderColor: 'transparent',
  color: 'gray',
  fontSize: 0,
  fontWeight: '500',
  mb: 2,
  mt: 0
};

exports.default = CardSubtitle;