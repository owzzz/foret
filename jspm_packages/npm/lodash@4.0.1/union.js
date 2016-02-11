/* */ 
var baseFlatten = require('./internal/baseFlatten'),
    baseUniq = require('./internal/baseUniq'),
    rest = require('./rest');
var union = rest(function(arrays) {
  return baseUniq(baseFlatten(arrays, false, true));
});
module.exports = union;
