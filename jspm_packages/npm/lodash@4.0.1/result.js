/* */ 
var baseToPath = require('./internal/baseToPath'),
    get = require('./get'),
    isFunction = require('./isFunction'),
    isKey = require('./internal/isKey'),
    parent = require('./internal/parent');
function result(object, path, defaultValue) {
  if (!isKey(path, object)) {
    path = baseToPath(path);
    var result = get(object, path);
    object = parent(object, path);
  } else {
    result = object == null ? undefined : object[path];
  }
  if (result === undefined) {
    result = defaultValue;
  }
  return isFunction(result) ? result.call(object) : result;
}
module.exports = result;
