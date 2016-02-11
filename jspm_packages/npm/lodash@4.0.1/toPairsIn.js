/* */ 
var baseToPairs = require('./internal/baseToPairs'),
    keysIn = require('./keysIn');
function toPairsIn(object) {
  return baseToPairs(object, keysIn(object));
}
module.exports = toPairsIn;
