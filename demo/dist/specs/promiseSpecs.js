'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _service = require('../service');

var _service2 = _interopRequireDefault(_service);

describe('Promises', function () {

  it('should execute the callback given to then', function (done) {

    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        return resolve(5);
      }, 5);
    });

    promise.then(function (data) {
      expect(data).toBe(5);
      done();
    });
  });

  it('should fail when rejected', function (done) {
    var promise = new Promise(function (resolve, reject) {
      reject(Error('oh noes!'));
    });

    promise.then(function () {/* success */}, function (error) {
      expect(error.message).toBe('oh noes!');
      done();
    });
  });

  it('should fail in catch', function (done) {
    var promise = new Promise(function (resolve, reject) {
      reject(Error('oh noes!'));
    });

    promise['catch'](function (error) {
      expect(error.message).toBe('oh noes!');
      done();
    });
  });

  it('should be able to chain promises', function (done) {

    var previousPromise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        return resolve(5);
      }, 5);
    });

    var promise = new Promise(function (resolve, reject) {
      resolve(previousPromise);
    });

    promise.then(function (data) {
      expect(data).toBe(5);
      done();
    });
  });

  it('should resolve after the first promise', function (done) {
    var courseIds = [1, 2, 3];
    var promises = [];
    for (var i = 0; i < courseIds.length; i++) {
      promises.push(_service2['default'].getCourse(courseIds[i]));
    }
    Promise.race(promises).then(function (firstValue) {
      expect(firstValue.name).toBeDefined();
      done();
    });
  });

  it('should be asynchronous', function (done) {
    var async = false;

    var foo$ = Rx.create(function (observer) {
      observer.onNext(5);
      observer.onNext(5);
      observer.onNext(5);
      observer.onComplete();
    });

    foo$.subscribe(function (data) {
      console.log(data);
    }, function (error) {
      console.error(error);
    }, function () {
      console.log("Done");
    });

    foo$.subscribe(function (data) {
      console.log(data);
    }, function (error) {
      console.error(error);
    }, function () {
      console.log("Done");
    });

    var promise = new Promise(function (resolve, reject) {
      resolve();
    });
    promise.then(function () {
      expect(async).toBe(true);
      done();
    });
    async = true;
  });
});