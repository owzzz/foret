/* */ 
var apply = require('./apply'),
    createCtorWrapper = require('./createCtorWrapper'),
    createHybridWrapper = require('./createHybridWrapper'),
    createRecurryWrapper = require('./createRecurryWrapper'),
    replaceHolders = require('./replaceHolders');
function createCurryWrapper(func, bitmask, arity) {
  var Ctor = createCtorWrapper(func);
  function wrapper() {
    var length = arguments.length,
        index = length,
        args = Array(length),
        fn = (this && this !== global && this instanceof wrapper) ? Ctor : func,
        placeholder = wrapper.placeholder;
    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder) ? [] : replaceHolders(args, placeholder);
    length -= holders.length;
    return length < arity ? createRecurryWrapper(func, bitmask, createHybridWrapper, placeholder, undefined, args, holders, undefined, undefined, arity - length) : apply(fn, this, args);
  }
  return wrapper;
}
module.exports = createCurryWrapper;
