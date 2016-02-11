/* */ 
var baseTimes = require('./baseTimes'),
    isArguments = require('../isArguments'),
    isArray = require('../isArray'),
    isLength = require('../isLength'),
    isString = require('../isString');
function indexKeys(object) {
  var length = object ? object.length : undefined;
  return (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) ? baseTimes(length, String) : null;
}
module.exports = indexKeys;
