'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PanelTitle = require('./PanelTitle');

var _PanelTitle2 = _interopRequireDefault(_PanelTitle);

var _PanelSubtitle = require('./PanelSubtitle');

var _PanelSubtitle2 = _interopRequireDefault(_PanelSubtitle);

var _PanelText = require('./PanelText');

var _PanelText2 = _interopRequireDefault(_PanelText);

var _PanelImage = require('./PanelImage');

var _PanelImage2 = _interopRequireDefault(_PanelImage);

var _PanelLink = require('./PanelLink');

var _PanelLink2 = _interopRequireDefault(_PanelLink);

var _Flexbox = require('./Flexbox');

var _Flexbox2 = _interopRequireDefault(_Flexbox);

var _Div = require('./Div');

var _Div2 = _interopRequireDefault(_Div);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function Panel(props) {
  return _react2.default.createElement(
    _Flexbox2.default,
    _extends({}, props, { wrap: true }),
    _react2.default.createElement(
      _Div2.default,
      { w: [1, 2 / 3], pr: 3 },
      _react2.default.createElement(_PanelImage2.default, { src: props.image })
    ),
    _react2.default.createElement(
      _Div2.default,
      { w: [1, 1 / 3], pl: [0, 3] },
      _react2.default.createElement(_PanelTitle2.default, { children: props.title }),
      _react2.default.createElement(_PanelSubtitle2.default, { children: props.subtitle }),
      _react2.default.createElement(_PanelText2.default, { children: props.text }),
      _react2.default.createElement(_PanelLink2.default, { href: props.href, children: props.linkText })
    )
  );
};

exports.default = Panel;