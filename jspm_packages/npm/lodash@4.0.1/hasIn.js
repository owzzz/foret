/* */ 
var baseHasIn = require('./internal/baseHasIn'),
    hasPath = require('./internal/hasPath');
function hasIn(object, path) {
  return hasPath(object, path, baseHasIn);
}
module.exports = hasIn;
