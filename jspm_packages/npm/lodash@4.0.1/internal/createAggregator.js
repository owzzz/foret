/* */ 
var baseEach = require('./baseEach'),
    baseIteratee = require('./baseIteratee'),
    isArray = require('../isArray');
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var result = initializer ? initializer() : {};
    iteratee = baseIteratee(iteratee);
    if (isArray(collection)) {
      var index = -1,
          length = collection.length;
      while (++index < length) {
        var value = collection[index];
        setter(result, value, iteratee(value), collection);
      }
    } else {
      baseEach(collection, function(value, key, collection) {
        setter(result, value, iteratee(value), collection);
      });
    }
    return result;
  };
}
module.exports = createAggregator;
