/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    baseSortedUniqBy = require('./internal/baseSortedUniqBy');
function sortedUniqBy(array, iteratee) {
  return (array && array.length) ? baseSortedUniqBy(array, baseIteratee(iteratee)) : [];
}
module.exports = sortedUniqBy;
