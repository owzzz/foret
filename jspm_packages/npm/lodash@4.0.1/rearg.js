/* */ 
var baseFlatten = require('./internal/baseFlatten'),
    createWrapper = require('./internal/createWrapper'),
    rest = require('./rest');
var REARG_FLAG = 256;
var rearg = rest(function(func, indexes) {
  return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
});
module.exports = rearg;
