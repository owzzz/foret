/* */ 
var baseHas = require('./internal/baseHas'),
    hasPath = require('./internal/hasPath');
function has(object, path) {
  return hasPath(object, path, baseHas);
}
module.exports = has;
