/* */ 
var baseForRight = require('./internal/baseForRight'),
    keysIn = require('./keysIn'),
    toFunction = require('./internal/toFunction');
function forInRight(object, iteratee) {
  return object == null ? object : baseForRight(object, toFunction(iteratee), keysIn);
}
module.exports = forInRight;
