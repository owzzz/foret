/* */ 
var arrayMap = require('./internal/arrayMap'),
    baseIntersection = require('./internal/baseIntersection'),
    last = require('./last'),
    rest = require('./rest'),
    toArrayLikeObject = require('./internal/toArrayLikeObject');
var intersectionWith = rest(function(arrays) {
  var comparator = last(arrays),
      mapped = arrayMap(arrays, toArrayLikeObject);
  if (comparator === last(mapped)) {
    comparator = undefined;
  } else {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped, undefined, comparator) : [];
});
module.exports = intersectionWith;
