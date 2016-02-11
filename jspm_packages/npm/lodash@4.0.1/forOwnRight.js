/* */ 
var baseForOwnRight = require('./internal/baseForOwnRight'),
    toFunction = require('./internal/toFunction');
function forOwnRight(object, iteratee) {
  return object && baseForOwnRight(object, toFunction(iteratee));
}
module.exports = forOwnRight;
