/* */ 
var baseGet = require('./internal/baseGet');
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}
module.exports = get;
