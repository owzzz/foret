/* */ 
var baseFlatten = require('./internal/baseFlatten'),
    basePick = require('./internal/basePick'),
    rest = require('./rest');
var pick = rest(function(object, props) {
  return object == null ? {} : basePick(object, baseFlatten(props));
});
module.exports = pick;
