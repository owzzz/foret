/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    baseSortedIndexBy = require('./internal/baseSortedIndexBy');
function sortedIndexBy(array, value, iteratee) {
  return baseSortedIndexBy(array, value, baseIteratee(iteratee));
}
module.exports = sortedIndexBy;
