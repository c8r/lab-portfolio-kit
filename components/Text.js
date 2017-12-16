'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = (0, _glamorous2.default)('p')(function (props) {
  return {
    maxWidth: '' + (props.wide ? '34em' : '28em'),
    textAlign: '' + (props.center ? "center" : "left")
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

Text.defaultProps = {
  fontSize: 3
};

exports.default = Text;