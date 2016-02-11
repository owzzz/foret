/* */ 
var arrayReduce = require('./internal/arrayReduce'),
    baseEach = require('./internal/baseEach'),
    baseIteratee = require('./internal/baseIteratee'),
    baseReduce = require('./internal/baseReduce'),
    isArray = require('./isArray');
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;
  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}
module.exports = reduce;
