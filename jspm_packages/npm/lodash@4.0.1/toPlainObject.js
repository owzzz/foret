/* */ 
var copyObject = require('./internal/copyObject'),
    keysIn = require('./keysIn');
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
module.exports = toPlainObject;
