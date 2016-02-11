/* */ 
var arrayMap = require('./internal/arrayMap'),
    baseIntersection = require('./internal/baseIntersection'),
    rest = require('./rest'),
    toArrayLikeObject = require('./internal/toArrayLikeObject');
var intersection = rest(function(arrays) {
  var mapped = arrayMap(arrays, toArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped) : [];
});
module.exports = intersection;
