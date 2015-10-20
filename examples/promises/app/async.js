export default (function(){
  var sequence;

  return {
    run: function(generator) {
      sequence = generator();
      var next = sequence.next();
    },
    resume: function() {
      sequence.next();
    }
  }
}());
