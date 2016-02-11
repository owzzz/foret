/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    baseWhile = require('./internal/baseWhile');
function takeRightWhile(array, predicate) {
  return (array && array.length) ? baseWhile(array, baseIteratee(predicate, 3), false, true) : [];
}
module.exports = takeRightWhile;
