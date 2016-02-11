/* */ 
var baseUniq = require('./internal/baseUniq');
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}
module.exports = uniq;
