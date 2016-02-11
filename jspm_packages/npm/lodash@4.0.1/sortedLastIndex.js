/* */ 
var baseSortedIndex = require('./internal/baseSortedIndex');
function sortedLastIndex(array, value) {
  return baseSortedIndex(array, value, true);
}
module.exports = sortedLastIndex;
