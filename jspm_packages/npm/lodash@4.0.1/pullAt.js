/* */ 
var arrayMap = require('./internal/arrayMap'),
    baseAt = require('./internal/baseAt'),
    baseFlatten = require('./internal/baseFlatten'),
    basePullAt = require('./internal/basePullAt'),
    compareAscending = require('./internal/compareAscending'),
    rest = require('./rest');
var pullAt = rest(function(array, indexes) {
  indexes = arrayMap(baseFlatten(indexes), String);
  var result = baseAt(array, indexes);
  basePullAt(array, indexes.sort(compareAscending));
  return result;
});
module.exports = pullAt;
