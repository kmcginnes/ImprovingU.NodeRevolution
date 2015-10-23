import service from '../service'

describe('Promises', () => {

  it('should execute the callback given to then', (done) => {

    var promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(5), 5);
    });

    promise.then((data) => {
      expect(data).toBe(5);
      done();
    });
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


  it('should fail in catch', (done) => {
    var promise = new Promise((resolve, reject) => {
      reject(Error('oh noes!'));
    });

    promise.catch(
      (error) => {
        expect(error.message).toBe('oh noes!');
        done();
      });
  });

  it('should be able to chain promises', (done) => {

    var previousPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(5), 5);
    });

    var promise = new Promise((resolve, reject) => {
      resolve(previousPromise);
    })

    promise.then((data) => {
      expect(data).toBe(5);
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

  it('should be asynchronous', (done) => {
    var async = false;

    var foo$ = Rx.create((observer) => {
      observer.onNext(5);
      setTimeout(() => observer.onNext(10), 500);
      observer.onNext(25);
      observer.onComplete();
    });

    var input = document.getElementById('foo');

    Rx.fromEvent(input, 'onKeyDown')
      .flatMap()
      .debounceLatest(500)
      .select((string) => someServerCall(string))
      .subscribe((string) => console.log(string));

    foo$.subscribe(
      (data) => { console.log(data); },
      (error) => { console.error(error); },
      () => { console.log("Done"); });

    var disposable = foo$
      .filter((x) => x > 9)
      .subscribe(
        (data) => { console.log(data); },
        (error) => { console.error(error); },
        () => { console.log("Done"); });

    disposable.dispose();

    var promise = new Promise((resolve, reject) => {
      resolve();
    });
    promise.then(() => {
      expect(async).toBe(true);
      done();
    });
    async = true;
  });

});
