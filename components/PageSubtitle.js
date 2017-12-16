'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageSubtitle = (0, _glamorous2.default)('h2')(function (props) {
  return {
    letterSpacing: '0.075em',
    lineHeight: '1.25',
    textAlign: '' + (props.center ? 'center' : 'left'),
    textTransform: 'uppercase'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight, _styledSystem.borderColor);

PageSubtitle.defaultProps = {
  borderColor: 'transparent',
  color: 'gray',
  fontSize: [3],
  fontWeight: '500',
  my: 0
};

exports.default = PageSubtitle;