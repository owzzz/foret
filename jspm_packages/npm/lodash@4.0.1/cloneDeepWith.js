/* */ 
var baseClone = require('./internal/baseClone');
function cloneDeepWith(value, customizer) {
  return baseClone(value, true, customizer);
}
module.exports = cloneDeepWith;
