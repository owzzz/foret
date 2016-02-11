/* */ 
var apply = require('./apply'),
    baseToPath = require('./baseToPath'),
    isKey = require('./isKey'),
    last = require('../last'),
    parent = require('./parent');
function baseInvoke(object, path, args) {
  if (!isKey(path, object)) {
    path = baseToPath(path);
    object = parent(object, path);
    path = last(path);
  }
  var func = object == null ? object : object[path];
  return func == null ? undefined : apply(func, object, args);
}
module.exports = baseInvoke;
