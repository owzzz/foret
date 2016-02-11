/* */ 
var baseForOwn = require('./internal/baseForOwn'),
    toFunction = require('./internal/toFunction');
function forOwn(object, iteratee) {
  return object && baseForOwn(object, toFunction(iteratee));
}
module.exports = forOwn;
