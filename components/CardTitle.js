'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardTitle = (0, _glamorous2.default)('h3')(function (props) {
  return {
    letterSpacing: '0.07em',
    lineHeight: '1.25'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight, _styledSystem.borderColor);

CardTitle.defaultProps = {
  borderColor: 'transparent',
  color: 'black',
  fontSize: [2, 3, 3],
  fontWeight: '600',
  mb: 1,
  mt: 2
};

exports.default = CardTitle;