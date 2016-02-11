/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    baseSortedIndexBy = require('./internal/baseSortedIndexBy');
function sortedLastIndexBy(array, value, iteratee) {
  return baseSortedIndexBy(array, value, baseIteratee(iteratee), true);
}
module.exports = sortedLastIndexBy;
