/* */ 
var baseFindIndex = require('./internal/baseFindIndex'),
    baseIteratee = require('./internal/baseIteratee');
function findIndex(array, predicate) {
  return (array && array.length) ? baseFindIndex(array, baseIteratee(predicate, 3)) : -1;
}
module.exports = findIndex;
