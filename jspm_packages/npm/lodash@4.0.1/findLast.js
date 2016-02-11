/* */ 
var baseEachRight = require('./internal/baseEachRight'),
    baseFind = require('./internal/baseFind'),
    baseFindIndex = require('./internal/baseFindIndex'),
    baseIteratee = require('./internal/baseIteratee'),
    isArray = require('./isArray');
function findLast(collection, predicate) {
  predicate = baseIteratee(predicate, 3);
  if (isArray(collection)) {
    var index = baseFindIndex(collection, predicate, true);
    return index > -1 ? collection[index] : undefined;
  }
  return baseFind(collection, predicate, baseEachRight);
}
module.exports = findLast;
