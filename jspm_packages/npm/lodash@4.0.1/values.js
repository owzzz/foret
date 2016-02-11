/* */ 
var baseValues = require('./internal/baseValues'),
    keys = require('./keys');
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}
module.exports = values;
