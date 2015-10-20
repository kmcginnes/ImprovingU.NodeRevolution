import async from '../async'
import service from '../service'

describe('async generators', () => {

  xit('should not be possible with regular code', () => {
    console.log('start');
    service.origPause(500);
    console.log('middle');
    service.origPause(500);
    console.log('end');
  });

  xit('should be difficult to read with regular async code', () => {
    console.log('start');
    service.cbPause(500, () => {
      console.log('middle');
      service.cbPause(500, () => {
        console.log('end');
      });
    });
  });

  it('should be easier to read with generators', (done) => {
    function* main() {
      console.log('start');
      yield service.pause(500);
      console.log('middle');
      yield service.pause(500);
      console.log('end'); 

      done();
    }

    async.run(main);
  });

});
