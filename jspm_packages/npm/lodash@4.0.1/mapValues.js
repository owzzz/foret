/* */ 
var baseForOwn = require('./internal/baseForOwn'),
    baseIteratee = require('./internal/baseIteratee');
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);
  baseForOwn(object, function(value, key, object) {
    result[key] = iteratee(value, key, object);
  });
  return result;
}
module.exports = mapValues;
