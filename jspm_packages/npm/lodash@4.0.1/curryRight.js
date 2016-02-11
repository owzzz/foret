/* */ 
var createWrapper = require('./internal/createWrapper');
var CURRY_RIGHT_FLAG = 16;
function curryRight(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrapper(func, CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curryRight.placeholder;
  return result;
}
module.exports = curryRight;
