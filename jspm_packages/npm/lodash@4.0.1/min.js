/* */ 
var baseExtremum = require('./internal/baseExtremum'),
    identity = require('./identity'),
    lt = require('./lt');
function min(array) {
  return (array && array.length) ? baseExtremum(array, identity, lt) : undefined;
}
module.exports = min;
