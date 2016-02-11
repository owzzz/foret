/* */ 
var baseAssign = require('./internal/baseAssign'),
    baseCreate = require('./internal/baseCreate');
function create(prototype, properties) {
  var result = baseCreate(prototype);
  return properties ? baseAssign(result, properties) : result;
}
module.exports = create;
