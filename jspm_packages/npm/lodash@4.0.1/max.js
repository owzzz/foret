/* */ 
var baseExtremum = require('./internal/baseExtremum'),
    gt = require('./gt'),
    identity = require('./identity');
function max(array) {
  return (array && array.length) ? baseExtremum(array, identity, gt) : undefined;
}
module.exports = max;
