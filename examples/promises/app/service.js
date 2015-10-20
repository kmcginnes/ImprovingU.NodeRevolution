import async from './async'

export default {
  getThree: function() {
    return 3;
  },

  getOrder: function(orderId) {
    return Promise.resolve({userId: 35});
  },

  getUser: function(userId) {
    return Promise.resolve({companyId: 18});
  },

  getCompany: function(companyId) {
    return Promise.resolve({name: 'Improving'});
  },

  getCourse: function(courseId) {
    let courses = {
      1: {name: 'Introduction to Cobol'},
      2: {name: 'Yet Another C# Course'},
      3: {name: 'How to make billions by blogging'}
    };
    return Promise.resolve(courses[courseId]);
  },

  origPause: function(delay) {
    setTimeout(() => { 
      console.log('paused for ' + delay + 'ms');
    }, delay);
  },

  cbPause: function(delay, callback) {
    setTimeout(() => { 
      console.log('paused for ' + delay + 'ms');
      callback();
    }, delay);
  },

  pause: function(delay) {
    setTimeout(() => { 
      console.log('paused for ' + delay + 'ms');
      async.resume();
    }, delay);
  }
};
