/* */ 
var baseFind = require('./internal/baseFind'),
    baseForOwnRight = require('./internal/baseForOwnRight'),
    baseIteratee = require('./internal/baseIteratee');
function findLastKey(object, predicate) {
  return baseFind(object, baseIteratee(predicate, 3), baseForOwnRight, true);
}
module.exports = findLastKey;
