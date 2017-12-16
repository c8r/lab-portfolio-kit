'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelTitle = (0, _glamorous2.default)('h2')(function (props) {
  return {
    lineHeight: '1.25'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight);

PanelTitle.defaultProps = {
  fontSize: [5],
  fontWeight: '600',
  my: 0
};

exports.default = PanelTitle;