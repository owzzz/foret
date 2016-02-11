/* */ 
var addMapEntry = require('./addMapEntry'),
    arrayReduce = require('./arrayReduce'),
    mapToArray = require('./mapToArray');
function cloneMap(map) {
  var Ctor = map.constructor;
  return arrayReduce(mapToArray(map), addMapEntry, new Ctor);
}
module.exports = cloneMap;
