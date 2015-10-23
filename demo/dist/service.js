'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  getCourse: function getCourse(courseId) {
    var courses = {
      1: { name: 'Introduction to Cobol' },
      2: { name: 'Yet Another C# Course' },
      3: { name: 'How to make billions by blogging' }
    };
    return Promise.resolve(courses[courseId]);
  }
};
module.exports = exports['default'];