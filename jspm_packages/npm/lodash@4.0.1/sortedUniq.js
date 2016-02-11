/* */ 
var baseSortedUniq = require('./internal/baseSortedUniq');
function sortedUniq(array) {
  return (array && array.length) ? baseSortedUniq(array) : [];
}
module.exports = sortedUniq;
