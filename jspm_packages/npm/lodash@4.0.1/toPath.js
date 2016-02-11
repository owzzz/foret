/* */ 
var arrayMap = require('./internal/arrayMap'),
    isArray = require('./isArray'),
    stringToPath = require('./internal/stringToPath');
function toPath(value) {
  return isArray(value) ? arrayMap(value, String) : stringToPath(value);
}
module.exports = toPath;
