var service = require('../service');

describe('promises', () => {

  it('should be a test', (done) => {
    done();
  });

  it('should execute the callback given to then', (done) => {
    var promise = new Promise((resolve, reject) => {
        resolve();
    });

    promise.then(() => done());
  });

  it('should receive the resolved data', (done) => {
    var promise = new Promise((resolve, reject) => {
      resolve(1);
    });

    promise.then((data) => {
      expect(data).toBe(1);
      done();
    })
  });

  it('should fail when rejected', (done) => {
    var promise = new Promise((resolve, reject) => {
      reject(Error('oh noes!'));
    });
    promise.then(
    () => { /* success */ },
    (error) => {
      expect(error.message).toBe('oh noes!');
      done();
    });
  });

  it('should have a catch', (done) => {
    var promise = new Promise((resolve, reject) => {
      reject(Error('oh noes!'));
    });
    promise.catch((error) => {
      expect(error.message).toBe('oh noes!');
      done();
    });
  });

  it('should compose when resolved with a promise', (done) => {
    var previousPromise = new Promise((resolve, reject) => {
      resolve(3);
    });

    var promise = new Promise((resolve, reject) => {
      resolve(previousPromise);
    });
    promise.then((data) => {
      expect(data).toBe(3);
      done();
    });
  });

  it('should have a static resolve', (done) => {
    var previousPromise = Promise.resolve(3);

    var promise = Promise.resolve(previousPromise);
    promise.then((data) => {
      expect(data).toBe(3);
      done();
    });
  });

  it('should have a static reject', (done) => {
    var promise = Promise.reject(Error('oh noes!'));
    promise.catch((error) => {
      expect(error.message).toBe('oh noes!');
      done();
    });
  });

  it('should be asynchronous', (done) => {
    var async = false;

    var promise = new Promise((resolve, reject) => {
      resolve();
    });
    promise.then(() => {
      expect(async).toBe(true);
      done();
    });
    async = true;
  });

  it('should work with require', (done) => {
    var result = service.getThree();

    expect(result).toBe(3);
    done();
  });

  it('should chain sequentially using then', (done) => {
    service.getOrder(3)
      .then((order) => service.getUser(order.userId))
      .then((user) => service.getCompany(user.companyId))
      .then((company) => {
        expect(company.name).toBe('Improving');
        done();
      }).catch((error) => { });
  });

  it('should execute after all promises with all', (done) => {
    let courseIds = [1,2,3];
    var promises = [];
    for(let i=0; i<courseIds.length; i++) {
      promises.push(service.getCourse(courseIds[i]));
    }
    Promise.all(promises).then((values) => {
      expect(values.length).toBe(3);
      done();
    });
  });

  it('should resolve after the first promise', (done) => {
    let courseIds = [1,2,3];
    var promises = [];
    for(let i=0; i<courseIds.length; i++) {
      promises.push(service.getCourse(courseIds[i]));
    }
    Promise.race(promises).then((firstValue) => {
      expect(firstValue.name).toBeDefined();
      done();
    });
  });

});
