/* */ 
var createCtorWrapper = require('./createCtorWrapper');
var BIND_FLAG = 1;
function createBaseWrapper(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtorWrapper(func);
  function wrapper() {
    var fn = (this && this !== global && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}
module.exports = createBaseWrapper;
