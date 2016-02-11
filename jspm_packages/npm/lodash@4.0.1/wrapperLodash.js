/* */ 
var LazyWrapper = require('./internal/LazyWrapper'),
    LodashWrapper = require('./internal/LodashWrapper'),
    baseLodash = require('./internal/baseLodash'),
    isArray = require('./isArray'),
    isObjectLike = require('./isObjectLike'),
    wrapperClone = require('./internal/wrapperClone');
var objectProto = global.Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}
lodash.prototype = baseLodash.prototype;
module.exports = lodash;
