'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsReactApp = require('./components/ReactApp');

var _componentsReactApp2 = _interopRequireDefault(_componentsReactApp);

var _componentsAbout = require('./components/About');

var _componentsAbout2 = _interopRequireDefault(_componentsAbout);

var _componentsInbox = require('./components/Inbox');

var _componentsInbox2 = _interopRequireDefault(_componentsInbox);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { path: '/', component: _componentsReactApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: 'about', component: _componentsAbout2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: 'inbox', component: _componentsInbox2['default'] })
);
module.exports = exports['default'];