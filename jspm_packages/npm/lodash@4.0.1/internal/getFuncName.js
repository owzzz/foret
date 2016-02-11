/* */ 
var realNames = require('./realNames');
var objectProto = global.Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;
  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}
module.exports = getFuncName;
