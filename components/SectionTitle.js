'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SectionTitle = (0, _glamorous2.default)('h4')(function (props) {
  return {};
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight, _styledSystem.borderWidth, _styledSystem.borderColor);

SectionTitle.defaultProps = {
  borderBottom: true,
  borderColor: 'gray',
  borderWidth: 1,
  fontWeight: '500'
};

exports.default = SectionTitle;