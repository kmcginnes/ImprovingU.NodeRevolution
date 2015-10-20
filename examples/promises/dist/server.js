'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _findLargest = require('./findLargest');

var _findLargest2 = _interopRequireDefault(_findLargest);

(0, _findLargest2['default'])('../../../', function (er, filename) {
  if (er) return console.error(er);

  console.log('The largest file was: ' + filename);
});