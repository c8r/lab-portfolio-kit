'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CardLink = require('./CardLink');

var _CardLink2 = _interopRequireDefault(_CardLink);

var _CardTitle = require('./CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardSubtitle = require('./CardSubtitle');

var _CardSubtitle2 = _interopRequireDefault(_CardSubtitle);

var _CardText = require('./CardText');

var _CardText2 = _interopRequireDefault(_CardText);

var _CardImage = require('./CardImage');

var _CardImage2 = _interopRequireDefault(_CardImage);

var _CardKicker = require('./CardKicker');

var _CardKicker2 = _interopRequireDefault(_CardKicker);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
  return _react2.default.createElement(
    _CardLink2.default,
    props,
    _react2.default.createElement(_CardImage2.default, { src: props.src }),
    _react2.default.createElement(
      _Box2.default,
      { p: [2, 2, 0] },
      _react2.default.createElement(
        _CardTitle2.default,
        null,
        props.title
      ),
      _react2.default.createElement(
        _CardSubtitle2.default,
        null,
        props.subtitle
      ),
      _react2.default.createElement(
        _CardText2.default,
        null,
        props.text
      )
    )
  );
};

exports.default = Card;