'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardText = (0, _glamorous2.default)('p')(function (props) {
  return {
    lineHeight: '1.5',
    maxWidth: '28em'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight);

CardText.defaultProps = {
  fontWeight: '400',
  mt: 0
};

exports.default = CardText;