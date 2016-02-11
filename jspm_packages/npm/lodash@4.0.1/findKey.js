/* */ 
var baseFind = require('./internal/baseFind'),
    baseForOwn = require('./internal/baseForOwn'),
    baseIteratee = require('./internal/baseIteratee');
function findKey(object, predicate) {
  return baseFind(object, baseIteratee(predicate, 3), baseForOwn, true);
}
module.exports = findKey;
