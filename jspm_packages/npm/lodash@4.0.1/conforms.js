/* */ 
var baseClone = require('./internal/baseClone'),
    baseConforms = require('./internal/baseConforms');
function conforms(source) {
  return baseConforms(baseClone(source, true));
}
module.exports = conforms;
