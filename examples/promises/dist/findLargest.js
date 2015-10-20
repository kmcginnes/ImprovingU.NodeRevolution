'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

exports['default'] = function (dir, cb) {
  console.log('Inside findLargest');

  _fs2['default'].readdir(dir, function (er, files) {
    if (er) return cb(er);

    files.forEach(function (file, index) {
      _fs2['default'].stat(_path2['default'].join(dir, file), function (er, stat) {});
    });
  });

  cb(null, 'foo');
};

module.exports = exports['default'];