/* */ 
var Map = require('./Map'),
    assocGet = require('./assocGet'),
    hashGet = require('./hashGet'),
    isKeyable = require('./isKeyable');
function mapGet(key) {
  var data = this.__data__;
  if (isKeyable(key)) {
    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
  }
  return Map ? data.map.get(key) : assocGet(data.map, key);
}
module.exports = mapGet;
