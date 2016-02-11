/* */ 
var arrayEachRight = require('./internal/arrayEachRight'),
    baseEachRight = require('./internal/baseEachRight'),
    isArray = require('./isArray'),
    toFunction = require('./internal/toFunction');
function forEachRight(collection, iteratee) {
  return (typeof iteratee == 'function' && isArray(collection)) ? arrayEachRight(collection, iteratee) : baseEachRight(collection, toFunction(iteratee));
}
module.exports = forEachRight;
