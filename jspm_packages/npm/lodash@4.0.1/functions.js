/* */ 
var baseFunctions = require('./internal/baseFunctions'),
    keys = require('./keys');
function functions(object) {
  return object == null ? [] : baseFunctions(object, keys(object));
}
module.exports = functions;
