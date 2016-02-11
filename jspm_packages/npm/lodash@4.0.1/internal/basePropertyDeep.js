/* */ 
var baseGet = require('./baseGet');
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
module.exports = basePropertyDeep;
