/* */ 
var baseAt = require('./internal/baseAt'),
    baseFlatten = require('./internal/baseFlatten'),
    rest = require('./rest');
var at = rest(function(object, paths) {
  return baseAt(object, baseFlatten(paths));
});
module.exports = at;
