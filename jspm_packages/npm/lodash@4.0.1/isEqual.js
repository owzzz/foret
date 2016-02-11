/* */ 
var baseIsEqual = require('./internal/baseIsEqual');
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
module.exports = isEqual;
