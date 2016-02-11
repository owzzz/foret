/* */ 
var arrayEach = require('./internal/arrayEach'),
    baseEach = require('./internal/baseEach'),
    isArray = require('./isArray'),
    toFunction = require('./internal/toFunction');
function forEach(collection, iteratee) {
  return (typeof iteratee == 'function' && isArray(collection)) ? arrayEach(collection, iteratee) : baseEach(collection, toFunction(iteratee));
}
module.exports = forEach;
