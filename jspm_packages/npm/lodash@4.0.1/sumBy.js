/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    baseSum = require('./internal/baseSum');
function sumBy(array, iteratee) {
  return (array && array.length) ? baseSum(array, baseIteratee(iteratee)) : undefined;
}
module.exports = sumBy;
