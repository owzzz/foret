/* */ 
var arrayMap = require('./internal/arrayMap'),
    baseFlatten = require('./internal/baseFlatten'),
    baseIteratee = require('./internal/baseIteratee');
function flatMap(array, iteratee) {
  var length = array ? array.length : 0;
  return length ? baseFlatten(arrayMap(array, baseIteratee(iteratee, 3))) : [];
}
module.exports = flatMap;
