/* */ 
var arrayMap = require('./arrayMap');
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}
module.exports = baseValues;
