/* */ 
var Map = require('./Map'),
    Set = require('./Set');
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    setTag = '[object Set]';
var objectProto = global.Object.prototype;
var funcToString = global.Function.prototype.toString;
var objectToString = objectProto.toString;
var mapCtorString = Map ? funcToString.call(Map) : '',
    setCtorString = Set ? funcToString.call(Set) : '';
function getTag(value) {
  return objectToString.call(value);
}
if ((Map && getTag(new Map) != mapTag) || (Set && getTag(new Set) != setTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : null,
        ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';
    if (ctorString) {
      if (ctorString == mapCtorString) {
        return mapTag;
      }
      if (ctorString == setCtorString) {
        return setTag;
      }
    }
    return result;
  };
}
module.exports = getTag;
