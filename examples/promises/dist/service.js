'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _async = require('./async');

var _async2 = _interopRequireDefault(_async);

exports['default'] = {
  getThree: function getThree() {
    return 3;
  },

  getOrder: function getOrder(orderId) {
    return _Promise.resolve({ userId: 35 });
  },

  getUser: function getUser(userId) {
    return _Promise.resolve({ companyId: 18 });
  },

  getCompany: function getCompany(companyId) {
    return _Promise.resolve({ name: 'Improving' });
  },

  getCourse: function getCourse(courseId) {
    var courses = {
      1: { name: 'Introduction to Cobol' },
      2: { name: 'Yet Another C# Course' },
      3: { name: 'How to make billions by blogging' }
    };
    return _Promise.resolve(courses[courseId]);
  },

  origPause: function origPause(delay) {
    setTimeout(function () {
      console.log('paused for ' + delay + 'ms');
    }, delay);
  },

  cbPause: function cbPause(delay, callback) {
    setTimeout(function () {
      console.log('paused for ' + delay + 'ms');
      callback();
    }, delay);
  },

  pause: function pause(delay) {
    setTimeout(function () {
      console.log('paused for ' + delay + 'ms');
      _async2['default'].resume();
    }, delay);
  }
};
module.exports = exports['default'];