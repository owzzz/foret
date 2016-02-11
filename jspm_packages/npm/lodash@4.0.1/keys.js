/* */ 
var baseHas = require('./internal/baseHas'),
    baseKeys = require('./internal/baseKeys'),
    indexKeys = require('./internal/indexKeys'),
    isArrayLike = require('./isArrayLike'),
    isIndex = require('./internal/isIndex'),
    isPrototype = require('./internal/isPrototype');
function keys(object) {
  var isProto = isPrototype(object);
  if (!(isProto || isArrayLike(object))) {
    return baseKeys(object);
  }
  var indexes = indexKeys(object),
      skipIndexes = !!indexes,
      result = indexes || [],
      length = result.length;
  for (var key in object) {
    if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
      result.push(key);
    }
  }
  return result;
}
module.exports = keys;
