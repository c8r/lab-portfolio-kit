'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = (0, _glamorous2.default)('div')(function (props) {
  return {
    maxWidth: '64em'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

Container.defaultProps = {
  mx: 'auto'
};

exports.default = Container;