/* */ 
var nativeCreate = require('./nativeCreate');
var objectProto = global.Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function hashHas(hash, key) {
  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
}
module.exports = hashHas;
