'use strict';

describe('jasmine tests', function () {

  beforeEach(function () {
    // console.log('outter beforeEach');
  });

  xdescribe('bar', function () {

    beforeAll(function () {
      // console.log('inner beforeAll');
    });

    it('should run this test', function () {
      // console.log('inside the test');

      expect(4).toBe(4);
    });
  });

  it('should run this test too', function () {
    // console.log('inside the test too');

    expect(4).toBe(4);
  });
});