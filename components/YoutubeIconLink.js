'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Svg = require('./Svg');

var _Svg2 = _interopRequireDefault(_Svg);

var _IconLink = require('./IconLink');

var _IconLink2 = _interopRequireDefault(_IconLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YoutubeIconLink = function YoutubeIconLink(props) {
  return _react2.default.createElement(
    _IconLink2.default,
    props,
    _react2.default.createElement(
      _Svg2.default,
      null,
      _react2.default.createElement('path', { 'class': 'a', d: 'M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' })
    )
  );
};

exports.default = YoutubeIconLink;