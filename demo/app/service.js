export default {
  getCourse: function(courseId) {
    let courses = {
      1: {name: 'Introduction to Cobol'},
      2: {name: 'Yet Another C# Course'},
      3: {name: 'How to make billions by blogging'}
    };
    return Promise.resolve(courses[courseId]);
  }
}
