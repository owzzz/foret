/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    basePickBy = require('./internal/basePickBy');
function omitBy(object, predicate) {
  predicate = baseIteratee(predicate, 2);
  return basePickBy(object, function(value, key) {
    return !predicate(value, key);
  });
}
module.exports = omitBy;
