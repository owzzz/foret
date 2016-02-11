/* */ 
var baseClone = require('./internal/baseClone');
function cloneDeep(value) {
  return baseClone(value, true);
}
module.exports = cloneDeep;
