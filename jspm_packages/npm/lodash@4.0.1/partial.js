/* */ 
var createWrapper = require('./internal/createWrapper'),
    replaceHolders = require('./internal/replaceHolders'),
    rest = require('./rest');
var PARTIAL_FLAG = 32;
var partial = rest(function(func, partials) {
  var holders = replaceHolders(partials, partial.placeholder);
  return createWrapper(func, PARTIAL_FLAG, undefined, partials, holders);
});
module.exports = partial;
