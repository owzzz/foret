/* */ 
var baseDifference = require('./internal/baseDifference'),
    baseFlatten = require('./internal/baseFlatten'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    rest = require('./rest');
var difference = rest(function(array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, false, true)) : [];
});
module.exports = difference;
