/* */ 
var arrayReduce = require('./internal/arrayReduce'),
    keys = require('./keys');
var objectProto = global.Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function invert(object, multiVal, guard) {
  return arrayReduce(keys(object), function(result, key) {
    var value = object[key];
    if (multiVal && !guard) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    } else {
      result[value] = key;
    }
    return result;
  }, {});
}
module.exports = invert;
