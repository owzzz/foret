/* */ 
var baseFindIndex = require('./internal/baseFindIndex'),
    baseIteratee = require('./internal/baseIteratee');
function findLastIndex(array, predicate) {
  return (array && array.length) ? baseFindIndex(array, baseIteratee(predicate, 3), true) : -1;
}
module.exports = findLastIndex;
