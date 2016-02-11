/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    baseWhile = require('./internal/baseWhile');
function dropWhile(array, predicate) {
  return (array && array.length) ? baseWhile(array, baseIteratee(predicate, 3), true) : [];
}
module.exports = dropWhile;
