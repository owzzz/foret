/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    basePullAllBy = require('./internal/basePullAllBy');
function pullAllBy(array, values, iteratee) {
  return (array && array.length && values && values.length) ? basePullAllBy(array, values, baseIteratee(iteratee)) : array;
}
module.exports = pullAllBy;
