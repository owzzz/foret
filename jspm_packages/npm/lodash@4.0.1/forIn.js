/* */ 
var baseFor = require('./internal/baseFor'),
    keysIn = require('./keysIn'),
    toFunction = require('./internal/toFunction');
function forIn(object, iteratee) {
  return object == null ? object : baseFor(object, toFunction(iteratee), keysIn);
}
module.exports = forIn;
