/* */ 
var createWrapper = require('./internal/createWrapper'),
    replaceHolders = require('./internal/replaceHolders'),
    rest = require('./rest');
var BIND_FLAG = 1,
    PARTIAL_FLAG = 32;
var bind = rest(function(func, thisArg, partials) {
  var bitmask = BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, bind.placeholder);
    bitmask |= PARTIAL_FLAG;
  }
  return createWrapper(func, bitmask, thisArg, partials, holders);
});
module.exports = bind;
