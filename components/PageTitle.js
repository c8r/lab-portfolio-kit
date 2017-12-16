'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageTitle = (0, _glamorous2.default)('h1')(function (props) {
  return {
    lineHeight: '1.25',
    textAlign: '' + (props.center ? 'center' : 'left'),
    textTransform: 'uppercase'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight);

PageTitle.defaultProps = {
  fontSize: [3, 4, 8],
  fontWeight: '600',
  mb: 2,
  mt: 0
};

exports.default = PageTitle;