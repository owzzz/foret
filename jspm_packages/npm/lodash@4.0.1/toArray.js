/* */ 
var Symbol = require('./internal/Symbol'),
    copyArray = require('./internal/copyArray'),
    getTag = require('./internal/getTag'),
    isArrayLike = require('./isArrayLike'),
    isString = require('./isString'),
    iteratorToArray = require('./internal/iteratorToArray'),
    mapToArray = require('./internal/mapToArray'),
    setToArray = require('./internal/setToArray'),
    stringToArray = require('./internal/stringToArray'),
    values = require('./values');
var mapTag = '[object Map]',
    setTag = '[object Set]';
var iteratorSymbol = typeof(iteratorSymbol = Symbol && Symbol.iterator) == 'symbol' ? iteratorSymbol : undefined;
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (iteratorSymbol && value[iteratorSymbol]) {
    return iteratorToArray(value[iteratorSymbol]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
  return func(value);
}
module.exports = toArray;
