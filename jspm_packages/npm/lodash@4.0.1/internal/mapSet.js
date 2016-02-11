/* */ 
var Map = require('./Map'),
    assocSet = require('./assocSet'),
    hashSet = require('./hashSet'),
    isKeyable = require('./isKeyable');
function mapSet(key, value) {
  var data = this.__data__;
  if (isKeyable(key)) {
    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
  } else if (Map) {
    data.map.set(key, value);
  } else {
    assocSet(data.map, key, value);
  }
  return this;
}
module.exports = mapSet;
