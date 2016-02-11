/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    baseWhile = require('./internal/baseWhile');
function takeWhile(array, predicate) {
  return (array && array.length) ? baseWhile(array, baseIteratee(predicate, 3)) : [];
}
module.exports = takeWhile;
