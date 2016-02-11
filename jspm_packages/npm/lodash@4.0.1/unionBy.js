/* */ 
var baseFlatten = require('./internal/baseFlatten'),
    baseIteratee = require('./internal/baseIteratee'),
    baseUniq = require('./internal/baseUniq'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    last = require('./last'),
    rest = require('./rest');
var unionBy = rest(function(arrays) {
  var iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseUniq(baseFlatten(arrays, false, true), baseIteratee(iteratee));
});
module.exports = unionBy;
