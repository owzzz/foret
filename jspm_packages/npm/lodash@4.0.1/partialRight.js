/* */ 
var createWrapper = require('./internal/createWrapper'),
    replaceHolders = require('./internal/replaceHolders'),
    rest = require('./rest');
var PARTIAL_RIGHT_FLAG = 64;
var partialRight = rest(function(func, partials) {
  var holders = replaceHolders(partials, partialRight.placeholder);
  return createWrapper(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
});
module.exports = partialRight;
