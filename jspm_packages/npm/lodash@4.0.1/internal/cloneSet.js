/* */ 
var addSetEntry = require('./addSetEntry'),
    arrayReduce = require('./arrayReduce'),
    setToArray = require('./setToArray');
function cloneSet(set) {
  var Ctor = set.constructor;
  return arrayReduce(setToArray(set), addSetEntry, new Ctor);
}
module.exports = cloneSet;
