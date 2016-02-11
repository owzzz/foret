/* */ 
var arrayMap = require('./internal/arrayMap'),
    baseIteratee = require('./internal/baseIteratee'),
    baseMap = require('./internal/baseMap'),
    isArray = require('./isArray');
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}
module.exports = map;
