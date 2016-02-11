/* */ 
var baseClone = require('./internal/baseClone');
function cloneWith(value, customizer) {
  return baseClone(value, false, customizer);
}
module.exports = cloneWith;
