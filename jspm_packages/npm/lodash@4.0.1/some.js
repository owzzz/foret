/* */ 
var arraySome = require('./internal/arraySome'),
    baseIteratee = require('./internal/baseIteratee'),
    baseSome = require('./internal/baseSome'),
    isArray = require('./isArray'),
    isIterateeCall = require('./internal/isIterateeCall');
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}
module.exports = some;
