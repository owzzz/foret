/* */ 
var baseSum = require('./internal/baseSum'),
    identity = require('./identity');
function sum(array) {
  return (array && array.length) ? baseSum(array, identity) : undefined;
}
module.exports = sum;
