/* */ 
var baseIteratee = require('./internal/baseIteratee'),
    basePickBy = require('./internal/basePickBy');
function pickBy(object, predicate) {
  return object == null ? {} : basePickBy(object, baseIteratee(predicate, 2));
}
module.exports = pickBy;
