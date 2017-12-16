'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardImage = (0, _glamorous2.default)('img')(function (props) {
  return {
    display: 'block'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderRadius);

CardImage.defaultProps = {
  borderRadius: 0,
  src: 'https://c8r.imgix.net/2ed34e78ae5d9ff95037413d/1.jpg',
  w: 1
};

exports.default = CardImage;