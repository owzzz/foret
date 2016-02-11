/* */ 
var baseForRight = require('./baseForRight'),
    keys = require('../keys');
function baseForOwnRight(object, iteratee) {
  return object && baseForRight(object, iteratee, keys);
}
module.exports = baseForOwnRight;
