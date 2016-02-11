/* */ 
var baseFlatten = require('./internal/baseFlatten'),
    baseUniq = require('./internal/baseUniq'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    last = require('./last'),
    rest = require('./rest');
var unionWith = rest(function(arrays) {
  var comparator = last(arrays);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return baseUniq(baseFlatten(arrays, false, true), undefined, comparator);
});
module.exports = unionWith;
