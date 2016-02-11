/* */ 
var apply = require('./internal/apply');
var FUNC_ERROR_TEXT = 'Expected a function';
function spread(func) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function(array) {
    return apply(func, this, array);
  };
}
module.exports = spread;
