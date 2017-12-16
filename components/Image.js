'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = (0, _glamorous2.default)('img')(function (props) {
  return {
    display: '' + (props.inline ? 'inline' : 'block'),
    maxWidth: '100%'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

Image.defaultProps = {
  mb: 2,
  src: 'https://c8r.imgix.net/43b5068d772a07902f9adad9/4.jpg',
  w: 1
};

exports.default = Image;