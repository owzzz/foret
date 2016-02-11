/* */ 
var copyObject = require('./copyObject'),
    keys = require('../keys');
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
module.exports = baseAssign;
