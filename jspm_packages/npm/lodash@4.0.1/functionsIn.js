/* */ 
var baseFunctions = require('./internal/baseFunctions'),
    keysIn = require('./keysIn');
function functionsIn(object) {
  return object == null ? [] : baseFunctions(object, keysIn(object));
}
module.exports = functionsIn;
