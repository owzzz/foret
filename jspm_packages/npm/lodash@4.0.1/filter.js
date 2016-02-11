/* */ 
var arrayFilter = require('./internal/arrayFilter'),
    baseFilter = require('./internal/baseFilter'),
    baseIteratee = require('./internal/baseIteratee'),
    isArray = require('./isArray');
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}
module.exports = filter;
