/* */ 
var baseFlatten = require('./internal/baseFlatten');
function flatten(array) {
  var length = array ? array.length : 0;
  return length ? baseFlatten(array) : [];
}
module.exports = flatten;
