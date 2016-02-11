/* */ 
var arrayMap = require('./internal/arrayMap'),
    baseDifference = require('./internal/baseDifference'),
    baseFlatten = require('./internal/baseFlatten'),
    basePick = require('./internal/basePick'),
    keysIn = require('./keysIn'),
    rest = require('./rest');
var omit = rest(function(object, props) {
  if (object == null) {
    return {};
  }
  props = arrayMap(baseFlatten(props), String);
  return basePick(object, baseDifference(keysIn(object), props));
});
module.exports = omit;
