'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var service = require('../service');

describe('promises', function () {

  it('should be a test', function (done) {
    done();
  });

  it('should execute the callback given to then', function (done) {
    var promise = new _Promise(function (resolve, reject) {
      resolve();
    });

    promise.then(function () {
      return done();
    });
  });

  it('should receive the resolved data', function (done) {
    var promise = new _Promise(function (resolve, reject) {
      resolve(1);
    });

    promise.then(function (data) {
      expect(data).toBe(1);
      done();
    });
  });

  it('should fail when rejected', function (done) {
    var promise = new _Promise(function (resolve, reject) {
      reject(Error('oh noes!'));
    });
    promise.then(function () {/* success */}, function (error) {
      expect(error.message).toBe('oh noes!');
      done();
    });
  });

  it('should have a catch', function (done) {
    var promise = new _Promise(function (resolve, reject) {
      reject(Error('oh noes!'));
    });
    promise['catch'](function (error) {
      expect(error.message).toBe('oh noes!');
      done();
    });
  });

  it('should compose when resolved with a promise', function (done) {
    var previousPromise = new _Promise(function (resolve, reject) {
      resolve(3);
    });

    var promise = new _Promise(function (resolve, reject) {
      resolve(previousPromise);
    });
    promise.then(function (data) {
      expect(data).toBe(3);
      done();
    });
  });

  it('should have a static resolve', function (done) {
    var previousPromise = _Promise.resolve(3);

    var promise = _Promise.resolve(previousPromise);
    promise.then(function (data) {
      expect(data).toBe(3);
      done();
    });
  });

  it('should have a static reject', function (done) {
    var promise = _Promise.reject(Error('oh noes!'));
    promise['catch'](function (error) {
      expect(error.message).toBe('oh noes!');
      done();
    });
  });

  it('should be asynchronous', function (done) {
    var async = false;

    var promise = new _Promise(function (resolve, reject) {
      resolve();
    });
    promise.then(function () {
      expect(async).toBe(true);
      done();
    });
    async = true;
  });

  it('should work with require', function (done) {
    var result = service.getThree();

    expect(result).toBe(3);
    done();
  });

  it('should chain sequentially using then', function (done) {
    service.getOrder(3).then(function (order) {
      return service.getUser(order.userId);
    }).then(function (user) {
      return service.getCompany(user.companyId);
    }).then(function (company) {
      expect(company.name).toBe('Improving');
      done();
    })['catch'](function (error) {});
  });

  it('should execute after all promises with all', function (done) {
    var courseIds = [1, 2, 3];
    var promises = [];
    for (var i = 0; i < courseIds.length; i++) {
      promises.push(service.getCourse(courseIds[i]));
    }
    _Promise.all(promises).then(function (values) {
      expect(values.length).toBe(3);
      done();
    });
  });

  it('should resolve after the first promise', function (done) {
    var courseIds = [1, 2, 3];
    var promises = [];
    for (var i = 0; i < courseIds.length; i++) {
      promises.push(service.getCourse(courseIds[i]));
    }
    _Promise.race(promises).then(function (firstValue) {
      expect(firstValue.name).toBeDefined();
      done();
    });
  });
});