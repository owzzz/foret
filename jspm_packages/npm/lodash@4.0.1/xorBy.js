/* */ 
var arrayFilter = require('./internal/arrayFilter'),
    baseIteratee = require('./internal/baseIteratee'),
    baseXor = require('./internal/baseXor'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    last = require('./last'),
    rest = require('./rest');
var xorBy = rest(function(arrays) {
  var iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseXor(arrayFilter(arrays, isArrayLikeObject), baseIteratee(iteratee));
});
module.exports = xorBy;
