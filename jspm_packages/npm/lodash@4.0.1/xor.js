/* */ 
var arrayFilter = require('./internal/arrayFilter'),
    baseXor = require('./internal/baseXor'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    rest = require('./rest');
var xor = rest(function(arrays) {
  return baseXor(arrayFilter(arrays, isArrayLikeObject));
});
module.exports = xor;
