/* */ 
var arrayMap = require('./internal/arrayMap'),
    baseIntersection = require('./internal/baseIntersection'),
    baseIteratee = require('./internal/baseIteratee'),
    last = require('./last'),
    rest = require('./rest'),
    toArrayLikeObject = require('./internal/toArrayLikeObject');
var intersectionBy = rest(function(arrays) {
  var iteratee = last(arrays),
      mapped = arrayMap(arrays, toArrayLikeObject);
  if (iteratee === last(mapped)) {
    iteratee = undefined;
  } else {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped, baseIteratee(iteratee)) : [];
});
module.exports = intersectionBy;
