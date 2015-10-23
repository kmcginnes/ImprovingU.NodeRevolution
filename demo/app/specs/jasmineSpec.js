describe('jasmine tests', () => {

  beforeEach(() => {
    // console.log('outter beforeEach');
  });

  xdescribe('bar', () => {
    
    beforeAll(() => {
      // console.log('inner beforeAll');
    });

    it('should run this test', () => {
      // console.log('inside the test');

      expect(4).toBe(4);
    });

  });

  it('should run this test too', () => {
    // console.log('inside the test too');

    expect(4).toBe(4);
  });

});
