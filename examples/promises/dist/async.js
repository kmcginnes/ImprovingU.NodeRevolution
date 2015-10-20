"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function () {
  var sequence;

  return {
    run: function run(generator) {
      sequence = generator();
      var next = sequence.next();
    },
    resume: function resume() {
      sequence.next();
    }
  };
})();

module.exports = exports["default"];