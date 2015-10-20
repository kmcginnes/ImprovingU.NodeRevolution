'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _async = require('../async');

var _async2 = _interopRequireDefault(_async);

var _service = require('../service');

var _service2 = _interopRequireDefault(_service);

describe('async generators', function () {

  xit('should not be possible with regular code', function () {
    console.log('start');
    _service2['default'].origPause(500);
    console.log('middle');
    _service2['default'].origPause(500);
    console.log('end');
  });

  xit('should be difficult to read with regular async code', function () {
    console.log('start');
    _service2['default'].cbPause(500, function () {
      console.log('middle');
      _service2['default'].cbPause(500, function () {
        console.log('end');
      });
    });
  });

  it('should be easier to read with generators', function (done) {
    var marked2$0 = [main].map(_regeneratorRuntime.mark);

    function main() {
      return _regeneratorRuntime.wrap(function main$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            console.log('start');
            context$3$0.next = 3;
            return _service2['default'].pause(500);

          case 3:
            console.log('middle');
            context$3$0.next = 6;
            return _service2['default'].pause(500);

          case 6:
            console.log('end');

            done();

          case 8:
          case 'end':
            return context$3$0.stop();
        }
      }, marked2$0[0], this);
    }

    _async2['default'].run(main);
  });
});