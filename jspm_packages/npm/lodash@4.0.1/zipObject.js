/* */ 
var baseSet = require('./internal/baseSet');
function zipObject(props, values) {
  var index = -1,
      length = props ? props.length : 0,
      valsLength = values ? values.length : 0,
      result = {};
  while (++index < length) {
    baseSet(result, props[index], index < valsLength ? values[index] : undefined);
  }
  return result;
}
module.exports = zipObject;
